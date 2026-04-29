---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-structures-and-algorithms
url: "https://www.linkedin.com/learning/python-data-structures-and-algorithms"
duration_minutes: 139
duration: 2h 19m
level: Intermediate
updated: 12/21/2023
learners: 229277
skills:
  - Data Structures
  - Python (Programming Language)
  - Algorithms
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHAyPtS4ZsHfA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703185888414?e=2147483647&amp;v=beta&amp;t=WHBvb3WEBoRNl6tLPhqnpUKrZFPgR1f4qkJmHmwvg-s"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your Skills in Python]]'
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Python- Design Patterns]]'
  - '[[Advanced Python- Working with Databases]]'
next_courses:
  - '[[Python Automation and Testing]]'
  - '[[Python Data Structures- Linked Lists]]'
path_nav: '[{"path":"Advance Your Skills in Python","position":3,"total":7,"prev":"Python- Design Patterns","next":"Python Automation and Testing"},{"path":"Master Python for Data Science","position":4,"total":8,"prev":"Advanced Python- Working with Databases","next":"Python Data Structures- Linked Lists"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/data-structures
  - skill/python-programming-language
  - skill/algorithms
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Data%20Structures%20and%20Algorithms.md)

![Python Data Structures and Algorithms](https://media.licdn.com/dms/image/v2/D560DAQHAyPtS4ZsHfA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703185888414?e=2147483647&amp;v=beta&amp;t=WHBvb3WEBoRNl6tLPhqnpUKrZFPgR1f4qkJmHmwvg-s)

# Python Data Structures and Algorithms

> Software developers know that efficient underlying architecture is essential to the technologies we use every day. Knowledge of data structures and the algorithms which they support helps developers choose the most suitable solution for a given context, making them better programmers who stand out to their company, clients, or prospective employers. In this course, leveraging the Python programmin

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms) | 2h 19m | Intermediate | 229K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Pathfinding Algorithms in a Maze Game]]** (2 videos)
- **[[#3. 2. The Stack Data Structure]]** (3 videos)
- **[[#4. 3. The 2D List Data Structure]]** (5 videos)
- **[[#5. 4. Depth-First Search Algorithm]]** (6 videos)
- **[[#6. 5. The Queue Data Structure]]** (3 videos)
- **[[#7. 6. The Breadth-First Search Algorithm]]** (5 videos)
- **[[#8. 7. The Priority Queue Data Structure]]** (3 videos)
- **[[#9. 8. The A* Search Algorithm]]** (5 videos)
- **[[#10. Conclusion]]** (2 videos)

### 1. Introduction

#### Python data structures and algorithms in action
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=0)** - [Instructor] Imagine if your sat-nav took a whole day to calculate your route, or a search engine took an hour to find a page of results for your search query.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=8)** Efficient algorithms and the data structures which they depend on, are an intrinsic part of the modern world.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=13)** Without them, most of the technology we take for granted would simply not be possible.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=18)** Data structures and algorithms provide an excellent mental framework for thinking about software problems, along with a powerful set of tools, which can be applied in many seemingly diverse areas.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=28)** Knowledge of data structures and algorithms is required to work at many major tech companies, such as Google, Microsoft, Amazon, and Facebook et cetera, and for good reason.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=36)** These companies understand how this knowledge can provide solutions to problems that can be several orders of magnitude, more efficient and therefore more cost effective than naive solutions.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=47)** Hi there, I'm Robin Andrews.
>
> **[0:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=48)** I'm a computer science teacher from the UK and I run an education business called Compucademy.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/python-data-structures-and-algorithms-in-action?u=76281980&t=53)** I invite you to join me on my course on LinkedIn learning, where we will learn about some of the most important data structures and algorithms, in a fun and accessible way using the Python programming language.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), python (1)
> **Analogies:** imagine (1), such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there's some prior knowledge you're going to need to have of Python.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=5)** So this isn't a beginner's course.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=7)** You're going to need to know how to run Python scripts.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=10)** You're going to need to be familiar with an IDE of some sort, even if it's just IDLE, which comes with Python by default, or something like PyCharm, or even Visual Studio.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=19)** You're going to need to know the basics like print statements, variables, for loops, while loops, functions, and maybe even some object-oriented programming.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/what-you-should-know?u=76281980&t=28)** Although that last item isn't essential, as we will cover everything we need related to object-oriented programming as it comes up.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Env Vars:** ide (1), idle (1)
> **Tools:** pycharm (1), visual studio (1)
> **Code Keywords:** default, (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Pathfinding Algorithms in a Maze Game

#### Understand the example application
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=0)** - In this video, we're going to take a look at the GUI, that's graphical user interface, we've provided for this course.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=7)** The aim of the GUI is to give you a high-level conceptual understanding of pathfinding algorithms, which use the data structures you're going to learn about.
>
> **[0:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=16)** There are two modes for the GUI, game and explore.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=19)** In game mode, you can simply play a fun maze game, a bit like Pac-Man, and get a sense of how your virtual opponent uses three different pathfinding algorithms to beat you in finding a piece of treasure.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=31)** In explore mode, you can see the path taken from an individual position to a goal position using those same algorithms in several different mazes we've provided for you as text files.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=44)** So the first thing I'm going to do is to create a PyCharm project.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=47)** Now, it's by no means obligatory to use PyCharm, It just happens to be my preferred IDE for this kind of project.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=53)** You can use whatever IDE you prefer.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=56)** So I'm going to create a project, because in PyCharm, you can't work without a project, so I'm going to create a new project.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=63)** And I'm going to navigate using this little folder icon.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=70)** And I'm going to go to my desktop.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=74)** And I'm going to select exercise files as the top level folder in my project, so that would then be the root of my project.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=81)** And then I get some options for which interpreter.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=83)** I'm going to use my already-installed Python 3.8.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=88)** And create the project.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=91)** And it says here, do I want to create it from sources, because there's already files there, so it's not an empty project, so I select yes.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=99)** Okay, and then I'm just going to do a couple of things to set up.
>
> **[1:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=101)** I prefer to have slightly less space taken up by my project directory over there, so I'm going to shrink the size of that area on the left.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=110)** And then I'm going to click on the arrow where it says exercise files, and that will open up the top level folder.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=117)** And you can see we've got, at the moment, just two other folders, which we'll be adding to as we progress.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=122)** But the one we want to open is GUI code.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=125)** And let's look at the game first.
>
> **[2:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=126)** So that's maze_gui_game.py, I'll double click on that.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=131)** And you can see it opens up in the main window here.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=133)** Now the keyboard shortcut I use to run the file that I'm in is control shift F10.
>
> **[2:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=140)** That may vary on your system.
>
> **[2:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=143)** And you can also do it by using the run menu at the top.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=149)** Okay, so this is the maze GUI.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=150)** It's basically a bit like Pac-Man, but it's not actually Pac-Man, because Pac-Man uses different algorithms to this.
>
> **[2:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=156)** So you can see few things on the screen.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=158)** Let me just talk you through them.
>
> **[2:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=159)** So we've got some buttons at the top, so we can reset.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=162)** We can decide whether we want the path to be shown or not, and I'll demonstrate that in a moment.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=167)** And then we have a choice of three algorithms, depth-first search, breadth-first search, and A star.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=174)** So probably just easier if I just show you how it works.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=176)** So I press S, and the opponents start looking for the treasure, you can see that yellow treasure at the top.
>
> **[3:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=184)** And I'm also looking for the treasure, and I'm racing my opponent to it, who is currently using depth-first search, which is not great for him in this context.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=195)** Okay, let's try a different algorithm.
>
> **[3:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=197)** Breadth-first search.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=199)** Press S to start, and just notice the pattern of exploration that my opponent is using.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=207)** It's different from what he was doing, or he/she/it it was doing for depth-first search.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=216)** And again, let's look at another one, which is A star.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=221)** Now, this is the most effective one, where the opponent goes straight for the goal, and it's quite hard to beat.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=226)** If the opponent is closer than you, then he's likely to get there before you.
>
> **[3:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=230)** Start again.
>
> **[3:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=237)** Okay, so that's how the game works.
>
> **[3:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=239)** and I set it so that... I think that first to three is how I've set it.
>
> **[4:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=242)** You can change that in the configuration.
>
> **[4:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=244)** So let me talk about configuration now.
>
> **[4:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=245)** So that's the basic idea.
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=246)** You've got this maze game, and you're trying to beat your opponent to find the treasure.
>
> **[4:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=250)** And, then looking at the code.
>
> **[4:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=253)** Very important file here is config, okay?
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=256)** So first of all, we can change our maze.
>
> **[4:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=259)** So at the moment, I'm using Pac-Man maze, let's looking at a different one.
>
> **[4:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=262)** Let's look at, for example... I've got one called wide maze.
>
> **[4:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=268)** We'll use that one.
>
> **[4:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=269)** And then there's just a few other constants here that are used throughout the GUI.
>
> **[4:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=272)** So we can change the speed, for example.
>
> **[4:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=275)** That's the number of milliseconds between frames.
>
> **[4:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=278)** Target score.
>
> **[4:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=279)** Okay, so I set it to three, the first to three will win.
>
> **[4:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=282)** And then just a few other things, most of which you don't want to touch.
>
> **[4:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=285)** Sound, we've got some sound in there, some retro sound effects, which you can play if you install the playsound module, which... Let me just show you where that is in the code.
>
> **[4:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=297)** In my imports.
>
> **[4:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=299)** Okay, so import playsound.
>
> **[5:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=301)** Now this does not come with Python as standard, so you would have to, if you want the sounds, you would have to import that module using pip by doing pip install playsound.
>
> **[5:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=310)** So if you run it again, now, you'll see the maze will have changed.
>
> **[5:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=316)** So we've got a different maze, but everything else is the same.
>
> **[5:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=318)** So we can press S to start.
>
> **[5:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=320)** And I'm going to, I'm the green one, green block up there, and I'm trying to find the yellow coin, or the yellow treasure.
>
> **[5:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=329)** And of course, because my opponent was closer, they got there first.
>
> **[5:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=332)** Breadth-first search.
>
> **[5:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=337)** As well as playing the game, you also want to be trying to think about the pattern of the particular search that your opponent is using.
>
> **[5:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=345)** So breadth-first search is a little bit like flood fill.
>
> **[5:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=348)** It's like moving out from a central point to all of the other squares within a certain distance from the initial square, according to what's possible with the various obstacles, and we're going to go into a lot more detail about how that works.
>
> **[6:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=361)** A star is the most direct, like I said before.
>
> **[6:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=364)** So if we started with A star... So using A star, that's going to be the most effective opponent, the most likely to beat you.
>
> **[6:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=374)** So spend a bit of time playing with this, have some fun, but also, you know, use it as a way to get a very kind of high-level conceptual understanding of the algorithms.
>
> **[6:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-example-application?u=76281980&t=383)** And later on, we'll give you a much more kind of nuts and bolts description of how they work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), module (2), interface (1), this. (1), this, (1)
> **Env Vars:** gui (6), ide (2), f10 (1)
> **CLI Commands:** python (2), find (2), pip (2)
> **Tools:** pycharm (3)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** for example (2), it's like (1)
> **Prerequisites:** install (2), set up (1)
> **Exercise Files:** exercise files (2)

#### Navigate the GUI
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=0)** - [Instructor] In the last video, we looked at the game mode of the GUI.
>
> **[0:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=3)** In this video, we're going to look at the explore mode.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=6)** So I'm going to close off maze_gui_game.py and instead open up maze_gui_explore.py.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=14)** And I'm also going to go into configure and select a different maze.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=19)** So the way you do that is you comment out the one that you don't want, and then the one that you do want, you can select, and let's do diagonal 23 by 23.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=30)** I'm using the keyboard shortcut there, control forward slash.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=34)** You could, in principle, just do it by deleting the pound sign but that's a little bit more once you know the keyboard shortcut.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=42)** So we've now selected a different maze file.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=45)** Now if I was to do control F 10 from this file, it would actually treat this as the entry point for the project, and we're trying to run this file, which wouldn't do much.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=53)** So if you're going to do control F 10, you want to do it from your main file, so control F 10.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=61)** Now the way this works is I can click to place my treasure in my maze.
>
> **[1:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=66)** Okay so, once I've clicked, I then press S, and the opponent will use whichever algorithm is selected to try and find that treasure.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=79)** So this is using DFS.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=83)** Okay, and the treasure is found.
>
> **[1:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=85)** So let's reset and do that again, and I just want to show you what path does as well because I haven't mentioned that yet.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=91)** So we can press S to start, and then if I press path, then the path is not displayed.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=97)** So there's no trail left, but I can turn it back on, and that's how that works.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=110)** So depth first search is not getting there particularly quickly.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=119)** (chuckles) Just missed it.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=125)** Okay, and you'll understand better why it's taking the particular path that it's taking once we've looked at how the algorithm works in detail.
>
> **[2:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=132)** Now let's do the same with breadth first search.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=134)** So I've placed my treasure, and then press S, and you get a very different type of search band.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=150)** And finally, let's look at A star.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=153)** So if we put the treasure position to last time but we use A star, you'll see that A star got there in a much more efficient way.
>
> **[2:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=163)** So how you find this GUI both fun to use and a useful aid in learning about the data structures and algorithms taught in this course.
>
> **[2:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/navigate-the-gui?u=76281980&t=170)** If any point, you're having trouble the kind of high level, conceptual understanding of these algorithms, those three, depth first search, breadth first search, and A star, then, by all means come back and play around with the GUI just to kind of develop that more intuitive high level understanding if you're getting bogged down in the details.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1)
> **Env Vars:** gui (3), dfs (1)
> **File Paths:** maze_gui_game.py (1), maze_gui_explore.py (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** maze_gui_game (1), maze_gui_explore (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. 2. The Stack Data Structure

#### Understand the stack data structure
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=0)** - [Instructor] Stacks are a very important data structure in programming and computer science.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=5)** Think of a stack of plates.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=7)** The top plate is the only easy access point, whether you want to add a new plate or remove an existing one.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=14)** A stack is a data structure in which all insertions and deletions are made at one end called the top of the stack.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=21)** The stack is a LIFO data structure that's last in first out, and it's well worth remembering this acronym.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=28)** So the last element to be added is the first element to be removed.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=32)** And we have some common stack operations, which are push, which is adding an item to the top of the stack.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=37)** Pop, which is removing an item.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=40)** Peak is when we want to see what's on the top of the stack where we don't want to remove it.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=44)** And also it's very useful to have a method for checking if the stack is empty.
>
> **[0:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=48)** So on this slide, we have a visual representation.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=51)** It's worth noting that sometimes even though we call it the top of the stack, depending on the implementation, it may turn out to be the left-hand side or the right-hand side.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=58)** So the word top doesn't necessarily mean vertically out the top.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=62)** And finally, we have some applications of the stack.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=65)** Now this is just a small selection, just to give you a flavor.
>
> **[1:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=68)** So inside of computers, we use reverse Polish notation for evaluating arithmetic expressions.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=76)** Stacks are used for syntax parsing.
>
> **[1:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=78)** And in a CPU, there's a thing called a cold stack, which holds frames containing all of our local variables for each function code that we make.
>
> **[1:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=87)** And that becomes particularly relevant with recursion, which we're not going to go into much in this course, but it's good to be aware of it, that's one common use of a stack inside of a computer.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=97)** Also things like undo and redo operations in a word processor.
>
> **[1:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=100)** And when you get into low-level and assembly programming, you're going to be making a lot of use of a stack if you go down that road as well.
>
> **[1:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=106)** So this just gives you a flavor of some of the applications.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=110)** Okay, so that's the concept of a stack.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=112)** It's actually a very, very simple concept with a lot of surprisingly powerful applications.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-stack-data-structure?u=76281980&t=118)** In the next video, we'll have a look at how to implement it in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), python (1)
> **Code Keywords:** finally, (1), function (1)
> **Env Vars:** lifo (1), cpu (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Build a stack class in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=0)** - [Instructor] In this video, we're going to write a stack class in Python.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=4)** If you are unfamiliar with Python classes, then don't worry, I will explain everything you need to know as we go along.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=11)** We are using a class to represent a stack for learning purposes because the abstraction is helpful for gaining a deep understanding of how the data structure works, including using the appropriate terminology, such as push and pop.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=23)** In practical situations, you might just use a list.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=27)** There is another reason to use a class though.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=29)** If your code needed a stack and you provide a list, there's nothing to stop another programmer from coding insert, remove, and other list functions that will affect the order of your stack.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=40)** This fundamentally ruins the point of defining a stack, as it no longer functions the way it should.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=47)** The existing list methods make it very easy to use a list as a stack.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=51)** Remember, the last element added is the first element retrieved, Last In, First Out or LIFO.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=58)** To add an item to the top of the stack, we use append().
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=62)** To retrieve an item from the top of the stack, we use pop(), without an explicit index.
>
> **[1:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=68)** The top of the stack is at the right hand end, that is to say that both addition and removals will happen from the right.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=76)** Let's see what that looks like in Python.
>
> **[1:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=78)** In our project, I'm going to open 02_02, and I'm going to open stack.py 'cause that's the file that we're working in.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=86)** And you'll see there's just a tiny bit of boiler plate code that we've provided.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=90)** Now, pass is there on line nine because if you don't put pass inside of an empty class definition or function definition, then you get an error when you run the code.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=98)** Whereas now with pass, I can run the code and there won't be an error.
>
> **[1:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=101)** However, it doesn't do much, so let's start coding.
>
> **[1:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=106)** So, like I say, if you haven't used classes before, don't worry, I'm going to tell you everything you need to know.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=110)** So, we're going to start off of a function called underscore underscore init.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=117)** And, PyCharm automatically fills in self as an argument for that.
>
> **[2:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=121)** Now init is what we call the constructor So, just to give you a tiny bit of context for that, we're going to be creating objects called stacks, or in this case, just one object called a stack.
>
> **[2:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=132)** And that object is going to be based on the template, which is the stack class.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=137)** So when we code this init method, this is the code that gets to run when we create the object from the template.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=145)** And that will all make more sense as we go along.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=147)** So inside the constructor, we're going to create self.items and set this equal to an empty list, okay?
>
> **[2:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=156)** So self.items means, the items property of the object that we're creating.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=162)** So self is always referring to, this specific instance of the class that we're talking about at the moment.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=168)** And again, if that isn't quite clear, it will become clear as we go along.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=172)** So that's all we need to do in our constructor, now we're going to have a method called is empty for checking.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=177)** If our stack easy empty, def is, is_ empty, and again, PyCharm nicely fills that in for me, and here, I'm going to return, whether or not the length of self.items.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=195)** So I'm going to return whether or not the length of self.items is equal to zero, because in that case, it would be empty.
>
> **[3:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=201)** Now that isn't actually the most pythonic way of doing this, there is another way which would be to return not self.items which works because an empty list actually evaluates as false.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=216)** So if that's confusing, then there's no need to use that version.
>
> **[3:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=219)** I'm just giving you the most pythonic version if you're interested.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=221)** So I'm actually going to use that second version, but leave the first one there as a comment so you can choose whichever one you prefer, then onto push, so def push.
>
> **[3:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=232)** Now I should mention that inside of a class definition functions are actually referred to as methods there's no difference, but a method is a function inside of a class, so this is actually the push method, So push, and it gives me self by default, and then item, because there's an item that I'm going to push onto my stack.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=251)** So what I do, is self.items.append.
>
> **[4:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=257)** Now, this is the standard list method append.
>
> **[4:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=261)** So we push the item onto ourselves.items and then pop Def pop self, we return self.items.pop.
>
> **[4:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=276)** Again, this is the standard list pop operation, okay.
>
> **[4:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=279)** So basically we're just taking a list and all of the methods that you're probably familiar with we've lists and we wrapping them in our own abstraction in our own stack class so that we can use the terminology we want and we can control how we interface with the list.
>
> **[4:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=296)** And now we have Def peak.
>
> **[5:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=301)** And what this does is it returns the last item in our list.
>
> **[5:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=306)** It returns self.items at index zero one.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=311)** Now Python and some other languages.
>
> **[5:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=313)** You can access the end of a list by using negative indices.
>
> **[5:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=317)** So the item at index negative one is the last item in the list, then quite useful to have size so we can find out the size of our stack.
>
> **[5:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=330)** And here we're going to return Len of self.items
>
> **[5:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=340)** fairly straight forward.
>
> **[5:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=342)** And then finally we have double underscore str.
>
> **[5:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=345)** Now what this does, it's very useful.
>
> **[5:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=349)** Enables us to use the print statement to inspect our stack, to see what's inside our stack.
>
> **[5:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=355)** So we can return str of self.items.
>
> **[6:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=363)** And you're going to see how old these messages work in a moment.
>
> **[6:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=366)** So that's the basic class definition.
>
> **[6:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=368)** Now I'm going to do, if name, double underscore name is equal to now this little code snippet is quite famous in Python.
>
> **[6:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=378)** You may or may not have seen it before, or know what it does, but I'm just going to quickly talk you through it.
>
> **[6:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=382)** So the idea is if we wanted to import this stack class into another file, then it would be a problem.
>
> **[6:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=389)** If we had code that was defined here, because that would also run in our imported file. okay.
>
> **[6:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=394)** And that would ruin what we wanted to happen properly.
>
> **[6:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=397)** So what we can do is we can say, if this is the main file that is being run, then execute the following code that I'm about to write from line 33 onwards.
>
> **[6:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=407)** If not, then you can just use the class and not worry about this code being run.
>
> **[6:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=411)** So that's how that works.
>
> **[6:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=414)** So let's go ahead and create a stack.
>
> **[6:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=416)** So S equals K so the convention for class definitions is we use a capital letter.
>
> **[7:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=424)** So lowercase S is my object, my instance of the stack class.
>
> **[7:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=430)** And it's coding stack with a capital S with two parentheses.
>
> **[7:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=435)** That means called the constructor.
>
> **[7:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=438)** Okay, so this is going to create self.items for this particular stack that we're creating S, okay, now let's print S and see what we get.
>
> **[7:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=450)** Okay, so you can see down in the terminal, we have an empty list, which is what we would expect, because all we've done with our stack is create self.items, which is set to an empty list.
>
> **[7:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=462)** Let me just show you what happens if we don't have this string methods, if I just comment that out.
>
> **[7:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=467)** So how you understand better what it does.
>
> **[7:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=471)** So now you can see my terminal, when I run out, I get this double underscore main.stack object.
>
> **[7:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=477)** So using print gives me some information about my objects, but not much that's very useful to me as a programmer.
>
> **[8:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=484)** So that's why we use this double underscore string method so that we can choose the kind of information we want to see about our object when we use the print statement.
>
> **[8:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=494)** So let's do print, let's see if it's empty.
>
> **[8:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=499)** So we print s.is and it should be empty.
>
> **[8:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=505)** That's what we'd expect, we haven't put anything in it.
>
> **[8:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=507)** And you can see in the terminal that it is true, that it's empty.
>
> **[8:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=510)** So that's all looking good so far.
>
> **[8:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=512)** Now let's do S.push and we need to push an actual item.
>
> **[8:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=517)** Okay, it wouldn't make much sense to push something onto the stack that wasn't anything.
>
> **[8:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=521)** So let me push an item onto the stack, and then we can print it.
>
> **[8:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=525)** So print and see if that went on correctly.
>
> **[8:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=531)** And you can see down in the terminal that we now have a list containing just the three.
>
> **[8:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=535)** So we have a stack with one item on it.
>
> **[8:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=538)** Let's push a couple more items.
>
> **[9:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=541)** So we'll do s.push.seven and s.push
>
> **[9:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=550)** And you can in theory push any data type you want onto your stack.
>
> **[9:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=553)** Anything that our list will hold this object will also hold, but I'm just using integers.
>
> **[9:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=559)** So I've pushed those, so now when I print my stack, There should be three items on it.
>
> **[9:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=567)** Okay so hopefully this is all making sense now onto pop.
>
> **[9:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=571)** So if we do print S.pop and we run it.
>
> **[9:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=579)** You can see that we get five, so what is done?
>
> **[9:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=581)** Pop does two things, it returns the value.
>
> **[9:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=585)** Okay, so it returns, whatever item is at the right hand side at the end of our list.
>
> **[9:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=590)** And as well as returning it also removes it.
>
> **[9:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=593)** So now, if we were to print, You'd see that that five had actually been removed, okay.
>
> **[10:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=601)** So they're in the terminal, there was a five at the end of our stack or our list.
>
> **[10:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=607)** And then we returned that five and it also got removed.
>
> **[10:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=611)** And then let's just check the last two methods, make sure they're working.
>
> **[10:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=614)** So it will print s.peak.
>
> **[10:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=618)** So just have a think about what you think that should return at this point.
>
> **[10:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=622)** So remember it returns the last item of the stack.
>
> **[10:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=624)** So the stack currently has three and seven on it.
>
> **[10:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=626)** So because we're using the right hand end of our list as our stack, it should return seven.
>
> **[10:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=633)** Let's check that by the way, I'm using control S every time I make a change to save my fault before using control shift F 10 to run, it could just use control F 10 as well, but I'm just in the habit, because if you use control shift F 10, then it will run this specific file rather than the last file that you chose to run.
>
> **[10:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=654)** But don't worry too much about that.
>
> **[10:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=655)** Getting used to keyboard shortcuts for your particular idea is a great idea, but it's very specific to your use case and then print S.size finally.
>
> **[11:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=668)** And we should see that it's of length.
>
> **[11:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=670)** What have I done that?
>
> **[11:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=671)** so I didn't code it so it's printed the method because I didn't put the parentheses to actually code that method.
>
> **[11:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=681)** Okay, so there it is.
>
> **[11:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=681)** Let's just recap what we did.
>
> **[11:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=683)** And before I do that, I'm just going to show you a really useful feature that I'm going to make a lot of use of.
>
> **[11:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=688)** So at the end of writing code, it's possible that I've not used exactly the right number of lines between functions, or I've not got spaces after my commerce and little details like that, that all help you to write good clean code.
>
> **[11:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=700)** So what you can do in PyCharm, you can get up to code and reformat code.
>
> **[11:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=706)** And actually it looks like there was nothing that needed changing, but sometimes there is, it's always worth doing that.
>
> **[11:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=711)** So let's talk through what we did.
>
> **[11:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=712)** We wrote the constructor.
>
> **[11:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=715)** So that's the method that gets called when we create an instance of our class.
>
> **[11:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=718)** And all that does is it creates self.items, which is the list that's going to contain our items.
>
> **[12:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=725)** Then we had a method to check with our stack was empty.
>
> **[12:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=728)** We had a method to push items onto the top of our stack.
>
> **[12:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=731)** Remember the top in this case, being the right hand, end of our list, we had a pop method to remove items, and then we could check what was on the top of our stack without actually removing it.
>
> **[12:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=744)** We could find the size.
>
> **[12:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=745)** And also we had a way of printing out what our stack looked like at any given stage by defining this double underscore string method.
>
> **[12:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=753)** And we talked about why we would use this if double underscore name equals main and that's so that we can actually use the class definition itself in other files, without worrying about this code, getting run out of context.
>
> **[12:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=769)** So now you've implemented a stack class in Python.
>
> **[12:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-stack-class-in-python?u=76281980&t=771)** In the next video, we will give you a challenge where you can use this class to solve an algorithmic problem, which the use of a stack provides an elegant solution for.

> [!info]- Semantic Content
>
> **Code Keywords:** self (17), let (14), pass (3), function (3), case, (3)
> **CLI Commands:** python (6), make (6), find (2)
> **Tools:** terminal (5), pycharm (3)
> **Cross-References:** we talked about (1), in the next (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **File Paths:** stack.py (1)
> **Env Vars:** lifo (1)

#### Solution: Reverse a string using a stack
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-reverse-a-string-using-a-stack-19861494?u=76281980)


### 4. 3. The 2D List Data Structure

#### Understand the 2D list data structure
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=0)** - [Instructor] 2D Lists are an important data structure with many applications.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=4)** Some of the more common ones are listed on the slide.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=7)** So, for example, any situation where we have a grid such as screen pixels or, in our case in this project the representation of game boards and mazes and such like.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=17)** Also, mathematical programming, where if we want to represent matrices and basically whenever you have any kind of tabular data, so the kind of data you would store in a table like in a spreadsheet.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=27)** There's other places where 2D lists are very useful.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=29)** And there's a few others listed.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=32)** A 2D list can be thought of as a list of lists.
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=35)** As with 1D lists, in Python, the elements can be of mixed type, although this is fairly uncommon.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=41)** So take a look at this visual representation.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=43)** We have a list definition in code here: my_list is equal to a list containing a list, another list, and another list.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=52)** And beneath that, we have a visualization or a visual representation of how that would be stored inside of Python, so take a look at this.
>
> **[1:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=60)** You can see that in the global frame, that means accessible to our whole program, we have my_list defined, which is pointing to a list which has three items.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=72)** So that's indices one, two, and three.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=75)** Now index zero, that first list, is pointing to another list, which contains the integers one, two, and three.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=82)** Index one of that first list is pointing to another list, which contains A, B, and C.
>
> **[1:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=87)** And index two of that first list is pointing to a third list that contains the Boolean values true, false, and true.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-2d-list-data-structure?u=76281980&t=95)** In this course, the main use we will make of 2D lists is to represent mazes, but the skills you will learn in this context will be transferrable to many other projects.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** type, (1), this. (1)
> **Code Identifiers:** my_list (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Represent a maze as a 2D list
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=0)** - [Instructor] Many of the algorithms associated with pathfinding work with graphs.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=5)** By graphs, I mean the sort associated with graph theory and mathematics, rather than in the sense of graphs and charts that you may be more familiar with.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=14)** We will see in this video that a maze stored in a 2D list can represent a special type of graph where each cell in the list corresponds to a node and adjacent cells are connected by edges.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=26)** So this is a very quick crash course in graphs, if you haven't come across them before.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=30)** So basically we have nodes and edges.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=32)** And in this image on the slide, you can see we're using letters to represent the nodes.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=36)** And they're connected by edges, which are the green lines.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=39)** Now there are different types of graph you can get, directed and undirected.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=44)** So a directed graph is one where the direction between the nodes matters and undirected is where it doesn't matter.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=49)** Also, you can have weighted graphs where each of the edges can have a different weight.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=54)** Now, in our particular situation, we're going to use undirected graphs that are unweighted, so they're fairly simple compared to other types of graphs out there.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=62)** Now, this gives you an idea of how we're going to represent this graph in a 2D list.
>
> **[1:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=66)** So we have, each of the cells is going to be a node and the nodes are going to be connected by edges.
>
> **[1:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=73)** Again, in the next slide, you can see we have the same situation, except here, there's also the possibility of having an obstacle.
>
> **[1:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=80)** So some of these cells are going to be inaccessible and because of that, on this slide, they're drawn in a different color and also there's no edges connecting the other nodes to the obstacle nodes.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=92)** Now it is very important that you familiarize yourself with IDA index notation for 2D lists.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=98)** So let's talk about how that works.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=99)** So differently to what you might be familiar with x,y coordinates, you can see on the slide here on the left, we have Cartesian Coordinates where the horizontal is the x and the vertical is the y.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=109)** And we increase to the right for the x and we increase upwards for the y coordinate.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=115)** Whereas in Matrix Coordinates, grid coordinates, it's a slightly different system.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=119)** So first of all, we have the vertical coordinate first, and that's because we're basically talking in terms of rows, okay, so the i coordinate is the row number.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=127)** And you'll notice that it also, as it increases, it goes down rather than up because row one is further down our grid than row zero.
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=136)** And then for the j, that's pretty much like the old x-coordinate, so that increases left to right.
>
> **[2:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=141)** So for example, you can see on the right hand side of this slide that we have a dot at coordinates i=4, j=2.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=150)** That means row four, column two.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=153)** So for a bit more practice on that, we have here a grid representation of a maze where the x's are the cells that we can't access, or the obstacles, S would be the start position, and G would be the goal position.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=165)** So you can see the S is at position (1,1) which means row one, column one, whereas G is at position (7,5), which means row seven, column five.
>
> **[2:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=176)** Okay, so again, just to emphasize, this is different to x, y coordinates.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=181)** Now, in terms of representing these lists inside of Python, obviously from a human perspective, it makes sense to talk in terms of rows, but internally that distinction isn't made.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=190)** So you can see the second representation here.
>
> **[3:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=193)** It's the same grid.
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=194)** That same maze is represented in a horizontal list of lists.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=199)** And then the third example there is just the output you would get if you went through the rows and printed one row at a time.
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=205)** So just to reiterate, the first representation there is how you might type it into Python and how you might think about it in terms of rows.
>
> **[3:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=213)** The second one is more like how it's represented inside of the computer.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=216)** And the third one is just each of the individual rows printed out.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=221)** And then finally, we have here a screenshot of a tiny maze represented inside of a text file.
>
> **[3:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=227)** In this case, it's inside Notepad++.
>
> **[3:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=229)** So we have the line numbers, then we have the tiny dots representing spaces, and the asterisks are representing obstacles that are in the maze.
>
> **[3:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=239)** Now you know how to represent and store a maze in a 2D list.
>
> **[4:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=242)** If at any point you get confused about 2D list indices, come back and watch this video again to remind yourself how they work.
>
> **[4:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=249)** It's a bit like orienting a map.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/represent-a-maze-as-a-2d-list?u=76281980&t=251)** Once you have the direction fixed, finding your way becomes relatively simple.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), python (2)
> **Code Keywords:** let (1), finally, (1), case, (1)
> **Env Vars:** ida (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Read a maze from a text file
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=0)** - The mazes used in this course are all stored as text files with spaces representing empty cells and a symbol such as an asterisk representing an obstacle or wall.
>
> **[0:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=11)** Now, if we go to our course files and we look in the folder called mazes, we've got several mazes here that you can experiment with.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=20)** So let's take one for an example, there's one called modest maze dot text.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=26)** So you can see, we have some asterisks and then spaces are representing empty cells.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=31)** Sometimes it's quite helpful to actually go into settings at this point in pie charm and go to editor, general appearance and then show white spaces.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=42)** And then you can see these tiny little dots representing the spaces.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=46)** It gives you a clearer idea of how it's constructed.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=49)** There's also some end of line characters that are not shown and in our code, we'll strip those.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=54)** And I'll talk about those in a moment.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=57)** So let's just change that setting back.
>
> **[1:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=64)** So that's what our mazes look like.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=65)** Here's a few different ones.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=67)** There's one that we're going to use for a challenge later on, here's another one.
>
> **[1:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=73)** And there's also versions of these in the QE as well.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=75)** So you can use them in your game and there's a big maze called wide maze.
>
> **[1:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=80)** So that's the mazes.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=83)** Lets close some of those off.
>
> **[1:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=89)** So now what I want to to do is I want to go to a file called a read a maze dot P Y.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=94)** And we provide this for you.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=97)** It's basically just a helper function that we're going to use to read mazes into our program so that we can work with them.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=102)** But I just want to spend a few minutes talking about how it works.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=105)** So it's a function called read_maze, takes a file name as an argument, which needs to be valid.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=112)** So we, first of all, we use tre except to handle an error if there's a problem with the file.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=118)** So we try and do something.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=119)** And if that doesn't work, then we graciously exit, printing a message there.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=124)** Okay, so what we try and do is we try and open the file name and strip the end of line characters for each line.
>
> **[2:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=132)** So this is actually called a list comprehension.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=135)** You can see we've got a list within a list, and this is just a way that we can do kind of two steps at once in Python.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=142)** So we're creating a list and each item in that list is going to be a list containing character for character in line dot strip.
>
> **[2:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=151)** So that means each line is being stripped of its new line character, which is kind of invisible at the end.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=157)** And we don't want it in our maze, so we strip it.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=160)** So then what we do is we need to test for rectangularness okay?
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=165)** Because if the maze isn't rectangular, then our program isn't going to be able to handle it.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=169)** And the way we do that on line 15 is we assign a value to number of columns in the top row.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=175)** And then we go through our maze and we check on subsequent lines whether each row has the same number of columns.
>
> **[3:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=184)** And if not, then we print a message saying the maze is not rectangular and we exit.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=190)** Okay, so that's how our read maze helper function works.
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=194)** I'm going to show you in action now.
>
> **[3:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=196)** So like we did before, I'm going to do, if name is equal to main, and the reason we do this is I might want to use my read maze function as a helper function in a different file.
>
> **[3:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=209)** Okay, and I wouldn't then want to run this code that I'm about to write, and that's why we have this if name block.
>
> **[3:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=215)** So then I'm going to create a maze and it's going to be equal to read maze.
>
> **[3:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=223)** And then I need to specify a path.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=226)** So it's in mazes.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=228)** This is relative to where I am now.
>
> **[3:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=230)** And you can see that over in the project directory over here.
>
> **[3:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=233)** So mazes forward slash, modest maze we're going to use and pie charm is very nicely suggesting that for me.
>
> **[4:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=242)** So I just press tab to accept that.
>
> **[4:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=244)** So I've now got that read in, but I want to do something with it.
>
> **[4:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=247)** So what I'm going to do is just output it row by row to make sure that it worked properly.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=251)** So for row in maze, print row, save it and then run it.
>
> **[4:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=264)** And you can see down in the terminal that we have each row that maze printed out.
>
> **[4:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=268)** And there were no errors.
>
> **[4:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=269)** So that's behaving as we would like.
>
> **[4:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=273)** So I'm just going to do what I did previously and select code and reformat code, because you'll notice there was an underlining there because I didn't have the correct number of spaces between my code blocks.
>
> **[4:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=285)** So that sorts out little details like that for me.
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=288)** And that's pretty much it.
>
> **[4:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/read-a-maze-from-a-text-file?u=76281980&t=289)** So in the next video, we're going to give you a challenge just to make sure that you're able to correctly read a maze.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2)
> **UI Navigation:** go to (3), open the (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** read_maze (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### Challenge: Read and display a maze from a text file
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980&t=0)** - [Instructor] So just a quick challenge for you to practice reading a maze from a text file.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980&t=10)** So read the file named challenge_maze.txt provided in the folder called mazes into bison using the provided read file function, and then print the maze to the screen with each row in a new line.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980&t=21)** So the results should look like the image below, and you're going to be doing this in your IDE.
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980&t=27)** So you can just add code to what we've got already and see how you get on.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-read-and-display-a-maze-from-a-text-file?u=76281980&t=32)** It's going to look very much like what we've already got.

> [!info]- Semantic Content
>
> **File Paths:** challenge_maze.txt (1)
> **Code Keywords:** function (1)
> **Code Identifiers:** challenge_maze (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Read and display a maze from a text file
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=0)** - [Instuctor] So, the solution is fairly straight forward for this, we're going to create a maze again, and it's going to be equal to read_maze, and this time we're going to use a different maze.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=17)** Mazes, forward slash challenge_maze and pie charm suggest the correct answer, and then exactly the same.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=26)** So, for row in maze, print row.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=34)** Okay, now just one thing I'm going to do just to separate them, I'm going to do print I'm going to do backslash in that Princeton new line, and then just a bunch of subtraction signs, just to give me a bit of a divide on my output and then a new line again.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=51)** So, let's see what that looks like.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=56)** So, you can see we've got the first one printed as before, but then we've got a divider and we've got the challenge_maze printed row by row as required.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-read-and-display-a-maze-from-a-text-file?u=76281980&t=65)** Okay, so that's how you read a maze from a text file into Python using the helper function that we provided called read_maze.

> [!info]- Semantic Content
>
> **Code Identifiers:** read_maze (2), challenge_maze (2)
> **Code Keywords:** this, (1), let (1), function (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instuctor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Depth-First Search Algorithm

#### Understand the depth-first search algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=0)** - [Instructor] Depth-first search is a very important algorithm with many applications in the real world.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=5)** Let's first look at how depth-first search works in our maze GUI, then we will discuss some of its applications.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=12)** So if we go to our GUI code in our project and we select maze_gui_explore, and I'm also going to open config so that I can choose whichever maze that I want.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=28)** I think this is quite a good one to start with, a diagonal maze, so we'll stay with that for now.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=32)** So then if I run my GUI, Ctrl + Shift + F10 for me, and we're in explore mode of our GUI, as we looked at earlier on.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=44)** So I'm going to stick with DFS now, so that's the DFS button in red in the middle, and I can choose where I want to place my treasure.
>
> **[0:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=50)** So if I place it near the bottom there, and then I press S, and off it goes looking for the treasure.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=57)** And in this case, it finds it quite quickly.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=61)** Now, DFS can be described as an aggressive algorithm, in the sense that it will continue down a particular path until either it finds its goal or reaches a dead end, at which point it backtracks to the last viable position and tries a different path from there.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=76)** DFS is better in situations where the goal is to discover a path to a given destination as soon as possible.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=82)** However, it does not guarantee finding the shortest path.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=86)** Let's look at some more examples.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=88)** Reset.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=91)** Now, you'll see later on, when we look at the implementation, why it's taking this rather strange looking path where it's missing out every second line.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=99)** Okay, let's look in a different maze.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=102)** So if I go back to config, comment out the maze we were working with, and let's go to the Pac-Man maze again.
>
> **[1:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=114)** So I save that, and then if, at this point, I do Shift + F10, it will still run the old file.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=120)** But then if I want to run it from the file that I'm in, I do Ctrl + Shift + F10.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=124)** So that's just a little detail about keyboard shortcuts in PyCharm.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=128)** So DFS in the Pac-Man maze.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=131)** So I'll place the treasure and I'll press S, and you can see that once the opponent leaves that central box, it then quite aggressively pursues available paths until it no longer can, at which point it will backtrack.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=153)** So that's happened a few times now, where it's had no success, and then it's gone back to the previous viable place until it goes ahead and finds the treasure.
>
> **[2:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=164)** Okay, so that's just an overview of how it's going to work in our maze, the depth-first search.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=169)** Now let's have a look at some of the applications for depth-first search.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=174)** Now there are lots of applications and this is just a small selection.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=177)** So, generally speaking, if you want to do some optimization for a particular aspect of a situation, whether it's cost or speed or safety or some other variable, very useful for pathfinding, very useful for scheduling and there's others as well.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=190)** So data serialization and also simulations of games, and often a simulation can be in some ways quite serious in the sense that you're simulating a real life situation.
>
> **[3:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=200)** So it seems game-like in its approach, but actually it's got more serious applications.
>
> **[3:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-depth-first-search-algorithm?u=76281980&t=204)** So that's just some of the applications of depth-first search.

> [!info]- Semantic Content
>
> **Env Vars:** dfs (5), gui (4), f10 (3)
> **Code Keywords:** let (5), case, (1), continue (1), if, (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** maze_gui_explore (1)
> **Cross-References:** go back to (1)
> **Tools:** pycharm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Visualize depth-first search on a grid
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=0)** - [Instructor] Here is the depth-first search algorithm, we will soon be coding in Python written basically in English or pseudocode, so at the top of the slide, we have the two data structures we will use in the algorithm.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=12)** So we have a stack containing just a start position and we have a dictionary containing the predecessors of discovered cells.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=19)** If you're not familiar with dictionaries, you can just think of them as collections of key value pairs, much like an actual dictionary contains words as keys and definitions as values or a phone book contains the names as keys and phone numbers as values.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=33)** So here, we have start position is the key and the value for that key is none, because there's no predecessor to the initial position.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=42)** Next we have the actual algorithm.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=44)** Step one is we pop the stack.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=45)** That means we take the top item of the stack, which in our implementation is actually the right hand end of our list, but think of it as a top.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=53)** And we ask ourselves, is this the goal?
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=55)** And if it is then we're done because we found our destination.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=58)** Otherwise, we push the undiscovered neighbors onto the stack and add them to the predecessors and we keep repeating this until there are no more items left on the stack.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=69)** Now we're going to explore the depth-first search algorithm in detail, using an app, which we will provide for you so you can use it to practice tracing the algorithms in this course for yourself.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=79)** So the way this works is we can select a color and then we can color the cells, whatever color we've just selected.
>
> **[1:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=85)** That's the basic operation of it and the way we're going to use it, is we're going to use blue for cells which have been pushed onto the stack and we're going to use green for our destination and we're going to use red for visited cells and you'll see those in a moment.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=102)** So we're going to trace the algorithm, assuming that our starting point is A, and we want to try and find I using depth-first search.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=109)** So we have the algorithm here.
>
> **[1:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=111)** We saw this on the slide, previously.
>
> **[1:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=113)** First thing we do is we pop the stack, so that means A comes off of the stack.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=118)** We color A, red, we ask ourselves, is that the goal?
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=123)** Well A is not I, so it's not the goal, so we have to continue.
>
> **[2:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=126)** So we now push undiscovered neighbors and update predecessors.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=130)** So we push undiscovered neighbors, that's B and D.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=135)** B and D go into the stack and we update our predecessors, so both of those came from A.
>
> **[2:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=143)** Now the order in which I pushed those is important and we're being consistent here, we're going clockwise starting from up.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=150)** So we're going up, right, down, left in the sequence that we push the neighboring cells onto our stack.
>
> **[2:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=157)** And then we repeat this until this stack is empty.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=160)** Well it's not empty, so we can now continue.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=162)** So we pop D, mark D, red.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=169)** Ask ourselves, is it the goal? No, it isn't, so now we push undiscovered neighbors, so we push E and we pushed G, So that's E pushed on and G pushed on and we update the predecessors for E.
>
> **[3:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=184)** This came from D and G,this also came from D, and then we continue.
>
> **[3:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=190)** The stack is not empty, So we pop our stack, so now G comes off, you mark G in red, we ask ourselves, is this the goal?
>
> **[3:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=203)** No, it isn't, so we push our undiscovered neighbors.
>
> **[3:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=206)** That's just H remaining at this point, so H goes onto our stack, and we update H noting that it came from G and then the stack is not empty, so we continue, so we pop H, so our current cell is H.
>
> **[3:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=224)** We mark it in red, we ask ourselves, is this the goal?
>
> **[3:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=229)** No, it isn't, so we continue and we push undiscovered neighbors, that's just I at this stage, So now I can update the predecessor for I noting, that it came from H and i'll repeat until my stack is empty.
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=246)** Now, I gets popped, so my current cell is I, I mark it in red and I asked myself, is this the goal?
>
> **[4:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=254)** And in fact, in this case, it is so we are done.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=258)** Now about the predecessors, the reason we collected these as we went along is we can now retrace our path if we want to, so looking at I, the predecessor was H.
>
> **[4:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=268)** Let's do the part in green, say starting at I working backwards, we have, I came from H, H came from G, G came from D and D came from A, so that's how we use the predecessors to work out what our path was once we finished, and notice also, there's actually two cells left on the stack, that we didn't need to use because we'd actually reached our goal.
>
> **[4:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=298)** Now it's important that you gain some experience, tracing the steps of the depth-first search algorithm for yourself.
>
> **[5:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=305)** This can be done using the provided App, or even on a whiteboard or using pen and paper.
>
> **[5:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=309)** The point is, for you to be able to understand the steps of the algorithm.
>
> **[5:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-depth-first-search-on-a-grid?u=76281980&t=313)** You may be surprised at how quickly the algorithm starts to make sense, once you try doings a few times using different starting goal positions to gain more experience.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (5), case, (1), let (1)
> **CLI Commands:** python (1), find (1), make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Use the Grid Tracer app
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=0)** - [Instructor] So I'm just going to quickly talk you through that grid tracer app, in case you want to use it yourself.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=5)** So you'll find it in the GUI Code under grid tracer, and if you just click on index.html then if you hover over here in PyCharm, you'll get the option to open it using whatever browser you like.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=20)** But just before we do that, let's just look at the other files.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=23)** We got script, that's the js, and we got some styling as well, you don't need to touch that really.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=29)** Script, the only time you might want to touch that is a couple of things, one is you might want to change the size of the grid.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=34)** So it's always going to be square, the way I set it up, but you might want more than three cells by three.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=39)** So let's change that to four for example.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=41)** And then I've just got some different options down here for display.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=44)** So later on in the course, there's going to be a situation where I want to start my grid from K rather than A, and there's a reason for that I'll go into then.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=53)** But if you want letters from A than these two lines should be uncommented.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=58)** That's lines 24 and 25.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=61)** However, if you want to actually have grid coordinates, you can recomment those.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=65)** And you can uncomment line 27.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=69)** So let's look at that version now.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=71)** So I've uncommented, line 27, I've set the grid size on line three to four.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=75)** So now when I open my app by going into index.html and clicking Chrome, then you'll see that it opens up in Chrome.
>
> **[1:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=85)** However, you might want to make it larger than this.
>
> **[1:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=87)** So the way I do that is I do Ctrl plus on my keyboard a few times until it's the size I want it.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=92)** And then you can see you've got basically just the same app, but instead of having letters for the sales, we've got coordinates, which is quite useful if you still need to practice those.
>
> **[1:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=100)** And also, if you want to trace the way the algorithm is working in one of our implementations where we're actually using coordinates, but basically same principle so we can color squares.
>
> **[1:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=111)** And like I said, in the previous video, I've got a convention that anything that's been put onto the stack or later on the queue and the priority queue.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=119)** I'm going to first of all, color in blue.
>
> **[2:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=121)** And then when it's discovered, I'm going to color it red.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=124)** And I'm using the goal as being green, but that's a purely arbitrary choice.
>
> **[2:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=129)** But I guess it's good to be consistent, if you want to go with that.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=131)** And also, we can use black for obstacles.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=133)** So we might want to create a bit of a maze like effect.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=135)** So we can do something like this.
>
> **[2:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=138)** So they'll see we did ends and they'll have to be a bit more backtracking.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=142)** First, basically how you use it.
>
> **[2:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=143)** And I do encourage you to use this app.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-grid-tracer-app?u=76281980&t=145)** Because the more experience you can get tracing these algorithms, the easier it becomes to understand how the code works, and just to be able to understand the big picture of what we're trying to do here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2)
> **File Paths:** index.html (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1), picture (1)
> **Env Vars:** gui (1)
> **Cross-References:** previous video (1)
> **Tools:** pycharm (1)
> **UI Navigation:** click on (1)

#### Code a depth-first search in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=0)** - [Instructor] We are now going to code out a version of depth-first search in Python.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=5)** Our implementation makes use of some helper functions and values that we've provided in a separate file and which we will import into our DFS file.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=14)** Let's briefly look at helper functions dot py.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=18)** So, this is chapter 04_04.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=20)** So we'll go into that folder and have a look at helpers.py.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=26)** So what have we got here?
>
> **[0:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=27)** We got offsets.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=28)** These are just quick ways of referencing relative positions within our maze.
>
> **[0:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=34)** So, if you think in terms of the row and column coordinates, going right means going zero up and down, but one to the right.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=44)** And going left means going zero up or down, but going negative one to the right, which is the same as going one to the left.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=51)** And then going up means decreasing the row number, but leaving the column number constant.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=56)** And going down means increasing the row number, but leaving the column number constant.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=61)** And then we have exactly the same read_maze function, which we looked at earlier on in the context of reading a 2d maze into our list.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=71)** And then just two more functions.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=72)** So one is, is_legal_pos.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=74)** This is checking whether a given position is actually on the maze that we have, and also whether it's not a obstacle symbol.
>
> **[1:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=83)** And finally, we have a function called get_path, starting on line 40.
>
> **[1:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=87)** And what this does is it takes you through the predecessors.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=90)** So you give it a start position, and a goal position, and a list of predecessors, and it will work backwards, working out what the predecessor of each node is until you get the path and then it reverses that and returns it.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=102)** And you'll see that in action later.
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=104)** So that's our helper functions.
>
> **[1:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=106)** Now, let's open up dfs.py.
>
> **[1:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=111)** And I like to move the main file that I'm working on at any given point to the right hand side of my various tabs.
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=117)** It just means that I can go to it quickly without having to search through what's up there.
>
> **[2:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=121)** That's by no means essential.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=122)** That's just part of my workflow.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=125)** So then, what we've given you here is some template code.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=127)** So, we've given you a header describing what the file does.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=131)** We've got our imports and they're hidden at the moment, but let's quickly look at them.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=135)** So from helpers, we're importing all those functions that we need by name.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=139)** And then we also have from stack import Stack.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=142)** So stack is the stack that we actually wrote together earlier on.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=145)** And by doing it like this, by doing from stack import Stack, that means we can actually just use the name stack rather than stack.Stack.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=153)** And that will make sense later on.
>
> **[2:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=155)** And the minute, is grayed out because we're not using it.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=158)** And then we also have some tests.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=160)** Now, I've used some assert statements here, which you may or may not be familiar with.
>
> **[2:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=164)** Assert statements are just a very, very useful way of testing your code.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=167)** If an assert statement is correct, then nothing at all will happen.
>
> **[2:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=171)** However, if it's not correct, you'll get an assertion error.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=174)** So on line 22, for example, when I assert that the result is this, I'm saying, this is the path here, 0, 0, 1, 0, 2, 0, 2, 1, 2, 2.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=183)** If it turns out that that's not the path that gets returned by my function, I'll get an assertion error.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=188)** But if my function does return this result, then absolutely nothing will happen.
>
> **[3:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=192)** So, this is a very, very basic way of getting into testing and test-driven development.
>
> **[3:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=197)** Don't worry about it too much.
>
> **[3:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=198)** If it confuses you at all, you can replace this with print statements.
>
> **[3:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=201)** You can literally say print result and then check that the output is the same as what you think it should be.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=208)** So, yeah, we've got some tests there, and we'll see how those work in a moment.
>
> **[3:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=211)** So, let's start writing our code.
>
> **[3:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=214)** So, line 13 is pass, which isn't going to do much, but it prevents the code from producing an error when I run it.
>
> **[3:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=221)** So we're now going to actually start coding depth-first search.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=226)** We have a stack and it's equal to a Stack, with a capital S.
>
> **[3:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=233)** And then onto our stack, we push our start position.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=238)** Now, I should emphasize here that, as I said in line five in the comment, that these positions are all in the form of tuples, containing a row number and a column number.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=248)** So they're row column tuples.
>
> **[4:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=250)** Now, tuples, if you don't know them, it's just a list that can't be changed.
>
> **[4:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=252)** It is immutable list, in this case, with two items.
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=256)** And it's just the way that we're storing all of our coordinates referencing maze cells throughout this whole project.
>
> **[4:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=262)** So, we push start onto our stack.
>
> **[4:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=264)** And then also predecessors is a dictionary containing just one item, which is start whose predecessor is None.
>
> **[4:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=276)** So, that's the initial configuration.
>
> **[4:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=278)** And then we have this algorithm.
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=280)** So, while not stack.is_empty.
>
> **[4:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=286)** So while the stack isn't empty, that's what that means, then we're going to go through this routine.
>
> **[4:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=291)** We're going to do current_cell is equal to stack.pop.
>
> **[4:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=298)** And so that means getting the top item off of our stack.
>
> **[5:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=302)** And then if the current_cell is equal to our goal, then we're done.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=311)** Okay, so at that point, we can, notice it's red there, because I've done a single equals.
>
> **[5:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=317)** It's a very common mistake to make, watch out for it, 'cause I'm doing comparisons on double equals.
>
> **[5:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=322)** So, if that is the goal, then I return at that point.
>
> **[5:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=325)** And what I return is get_path.
>
> **[5:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=329)** So that's the path generated by this function when it's past predecessors, and the same start and goal_pos that I passed in on line 12 to my function.
>
> **[5:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=345)** So that's the case where we find the goal and that's fine.
>
> **[5:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=348)** However, if we don't find the goal, then for each direction, so for direction in, right, So, we've got these directions, up, right, down, and left.
>
> **[6:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=365)** Now, you could change this, or whatever, but let's keep it like this for now.
>
> **[6:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=369)** And just to remind you that these are coming from our helpers file.
>
> **[6:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=374)** Okay, so that's our offsets.
>
> **[6:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=378)** So, for direction in that list, we will do row_offsets.
>
> **[6:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=387)** So row_offset and col_offset will be equal to offsets, and we're going to take the direction.
>
> **[6:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=397)** So the offset for the given direction from that list of offsets that we just imported from our helper file.
>
> **[6:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=404)** Okay, so this is going to unpack both of those values into row_offset and col_offset.
>
> **[6:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=414)** Then, neighbour, that's my English spelling of that word.
>
> **[7:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=420)** It's a hard habit to break.
>
> **[7:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=422)** Neighbour is equal to current_cell zero.
>
> **[7:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=428)** So that's the first of those, because remember, the cell is in the form of an i, j tuple, and we just want the i for this first one.
>
> **[7:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=438)** So that's current_cell zero plus row_offset and then current_cell one, so that's the j, plus col_offset.
>
> **[7:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=456)** And we'll talk about why this works in a moment.
>
> **[7:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=458)** And then we say if is_legal_pos, within our maze.
>
> **[7:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=464)** So that function takes the maze and the neighbour or the cell.
>
> **[7:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=469)** So if that is a legal position and also it's not already in the predecessors.
>
> **[7:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=475)** Okay, so remember in the algorithm, we say, we push undiscovered neighbours.
>
> **[7:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=479)** So if it's in predecessors, that means it has been discovered.
>
> **[8:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=482)** So we have to say, if it's not in predecessors, then at that point, and neighbour, and neighbour not in predecessors, then at that point, we will push.
>
> **[8:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=499)** So we do stack.push.
>
> **[8:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=506)** Then, we push on neighbour onto the stack and we'll also update our predecessors.
>
> **[8:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=512)** So for that neighbour, we will set it equal to the current_cell.
>
> **[8:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=518)** Okay, so, try and link what I'm doing here to what we did previously when we stepped through the algorithm in the grid tracer, it's a direct mapping between the two processes.
>
> **[8:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=527)** If at that point, we haven't found our goal, then we go to this level and we return None.
>
> **[8:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=534)** And looks like there's a spelling here, n-e-i, just add h.
>
> **[9:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=540)** Okay, so, I'm just going to tidy up my code before I do anything else.
>
> **[9:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=544)** So, Code, Reformat Code, so this will say any little errors with commas and things.
>
> **[9:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=552)** And then let's run it and see what happens.
>
> **[9:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=555)** Okay, so no errors.
>
> **[9:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=556)** This is a good thing.
>
> **[9:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=557)** And we get some output.
>
> **[9:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=558)** And the reason we get that output is because in my second test, I have this for row in maze print row.
>
> **[9:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=566)** That was just to give a visual idea of what the maze was looking like.
>
> **[9:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=569)** Then the maze that's being worked with here is inside the mazes folder, mini_maze_dfs.txt.
>
> **[9:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=576)** And it looks just like this then in the terminal.
>
> **[9:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=580)** The first one is just an empty maze that we create by using a list comprehension.
>
> **[9:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=584)** So that's the one that we did in the grid tracer app, just a three by three empty grid.
>
> **[9:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=589)** And the last one is a position which is not on the maze, just checking that it does in fact return None, as it should.
>
> **[9:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=598)** Okay, now you can add lots and lots more tests like this, and you should do actually, and you should try out some of the different mazes that we have in our mazes folder.
>
> **[10:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=608)** Let's just go over what the algorithm is doing again.
>
> **[10:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=610)** So we have a stack, starts off empty.
>
> **[10:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=613)** We push onto it the start position.
>
> **[10:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=616)** We have predecessors, which is a dictionary containing just the predecessor of that start position, which is None, because the initial position cannot have a predecessor.
>
> **[10:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=625)** Then, we go into our main algorithm, which says, while the stack isn't empty, we get the current cell by popping.
>
> **[10:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=633)** We check if it's the goal.
>
> **[10:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=635)** If it is, then we will go and get the path then we return that path.
>
> **[10:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=638)** And we're done.
>
> **[10:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=640)** Otherwise, for every single direction in this list, we check the offsets, which we've imported from our helper file, and we assign the i, j values from that so that we can then check the neighbour.
>
> **[10:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=655)** Okay, the whole point of this section is to be finding out the coordinates of the neighboring cells in all of those four directions.
>
> **[11:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=662)** And then we say for each of those four directions, if it's a legal position and it isn't in the predecessors list, that means we haven't discovered it yet.
>
> **[11:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=671)** So, we're going to push it onto our stack.
>
> **[11:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=674)** And then finally, we pushed the neighbour onto the stack and update the predecessors.
>
> **[11:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=679)** And we're done.
>
> **[11:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=681)** Now, you have seen how to code depth-first search for a 2d maze in Python.
>
> **[11:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=686)** I encourage you to try this algorithm out on several different mazes and do your best to understand exactly why the path returned is what it is.
>
> **[11:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=693)** It may be helpful to add print statements at strategic places in the code, so you can see exactly what is happening at any given stage.
>
> **[11:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=700)** Also, bear in mind that it can take some time to fully understand how this and the other algorithms from this course work.
>
> **[11:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=707)** If you find yourself confused, I encourage you to be patient with yourself, rewatch the video on tracing DFS, try tracing the algorithm manually a few times for different mazes, and also try taking a break and coming back with fresh eyes.
>
> **[12:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=720)** When I was learning this material myself, there were definitely times when I had to use some of these strategies.
>
> **[12:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-depth-first-search-in-python?u=76281980&t=726)** Of course, if you find that you understand easily, then that is great too.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), this, (4), assert (4), finally, (2)
> **Code Identifiers:** current_cell (6), row_offset (3), col_offset (3), is_legal_pos (2), get_path (2)
> **CLI Commands:** find (4), python (2), make (2), node (1)
> **Definitions:** is a  (6), means that (1)
> **File Paths:** helpers.py (1), dfs.py (1), mini_maze_dfs.txt (1)
> **Env Vars:** dfs (2)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1), just like (1)

#### Challenge: Trace the path of a depth-first search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=0)** - [Instructor] In this challenge, we ask you to trace the path of the DFS algorithm from the start position to the goal position, as shown on the screen.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=13)** So the start position is in blue and the goal position is in green.
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=17)** A whiteboard is a great tool for doing this, as you can easily erase and update your working as you follow the algorithm.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=22)** Pencil and paper also works fine, too, or you can use the grid tracer app that we looked at previously.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=29)** In order to ensure you get the same results as me, make sure you push items onto the stack in a clockwise direction, starting from up, or north.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=37)** We're not considering diagonals in this course.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-depth-first-search?u=76281980&t=40)** this challenge should take approximately 10 to 15 minutes to complete.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** this, (1)
> **Env Vars:** dfs (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Trace the path of a depth-first search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=0)** - [Instructor] And here's the solution to the DFS challenge.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=8)** So you can see the path is (0,0), (1,0), (2,0), (3,0), (3,1), (3,2), (3,3).
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=15)** If you struggled a bit with this challenge then don't worry, it does take a while to learn this material.
>
> **[0:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=19)** I say go back and practice on smaller mazes.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=22)** Practice on three by three mazes.
>
> **[0:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=24)** Watch the video again on tracing DFS inside of a maze on the grid tracer app video, and then come back and try this one again.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-depth-first-search?u=76281980&t=32)** But if you did succeed, then well done.

> [!info]- Semantic Content
>
> **Env Vars:** dfs (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. 5. The Queue Data Structure

#### Understand the queue data structure
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=0)** - [Instructor] The next data structure we're going to look at is the queue.
>
> **[0:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=3)** Now, a queue in computing is very similar to a queue in real life and that you have an arrival order which you wish to maintain.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=12)** There are many applications of the queue data structure.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=15)** So for example inside of the CPU, whenever you have data transferred asynchronously between two processes we need some way of maintaining the order the original order.
>
> **[0:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=25)** Several graph traversal algorithms, including the ones we're looking at in this course, and many other applications, often when a resource to be shared among multiple consumers is when a queue becomes relevant.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=37)** So a queue is a data structure in which all additions are made at one end called the rear or tail of the queue.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=44)** And all deletions are made from the other end called the head or front of the queue.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=49)** Which end actually serves as the head and which is the tail is an implementation detail.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=54)** In this course, we will consider the left to be the head of our queues and the right to be the tail.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=59)** Queue is first-in, first-out data structure.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=63)** So in contrast to the first-in, last-out that we had previously with the stack, this is first-in, first-out, so FIFO first-in, first-out.
>
> **[1:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=73)** So you can see on the slide and other representation so the front of the queue is the next person to be served, if you compare this to a shopping queue or a queue at an ice cream stand or something like that, so the front of the queue was the first person to arrive, and it's going to be the next person to be served, and the rear of the queue is where the last person joined.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=91)** Sometimes the front and the rear are called the head and the tail okay, so just be aware that, that can vary but they have the same meanings it's front is head and tail is rear.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=99)** And there's a couple of signature operations, so one is enqueue, which is where you put an item into the queue and the other is dequeue which is where you remove an item from the front of the queue.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=110)** And finally we just have a slightly more logical representation bit more like what it might look like in our program.
>
> **[1:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=116)** So on the left hand side is the front of the queue, from which we dequeue or remove items, and on the right hand side we have the back of the queue which is where we enqueue new items or add new items to our queue.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-queue-data-structure?u=76281980&t=130)** If you make a point of memorizing the FIFO acronym first-in, first-out and associating it with the image shown here, it would help you to keep your bearings as we move forward.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (2), cpu (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), compare this to (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Build a queue class in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=0)** - We are now going to implement a queue class in Python.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=4)** This is chapter five two so I'm going to open that folder.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=8)** You would want to work on the start version of that folder.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=12)** and then I'm going to open up q_ll.py.
>
> **[0:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=16)** Now the reason we've called it that rather than just q.py, is because there's an existing module in Python called queue, and quite a common and hard to debug error that you might come across is if you name your own module.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=30)** The same as something that already exists, then you would actually override that module and all the methods you expect to find won't work.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=38)** Okay so one way to avoid that is to, just rename it to something a little bit different from the existing module.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=44)** So here q_llq intel learning.
>
> **[0:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=47)** So that's the folder were in so let's make a start.
>
> **[0:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=51)** Now it is possible to use a list for a queue just as we did for our stack.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=55)** However lists are not very efficient for this purpose.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=59)** While appends and pops from the end of the list are fast doing inserts or pops from the beginning of a list is slow, because all the other elements have to be shifted by one.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=69)** So what I'm going to do to avoid this problem is I'm going to use an existing data structure within Python called call the deque, now a deque stands for a double-ended queue, and it's a data structure that's optimized for insertions and deletions at either end, basically like a list with that optimization that if you want to insert or delete from either end it'll be fast.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=90)** Which obviously doesn't matter if you have a very short list but if you have a massive list then it really does make a difference in terms of performance.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=97)** So that's why I'm introducing this new data structure.
>
> **[1:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=101)** So instead of a list we're going to use a deque, that's the only conceptual difference really in a deque is like a list but it's optimized.
>
> **[1:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=107)** So let's go, inside of our queue class we have the Constructor as usual, because it's the class So def double underscore init.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=118)** And then python fills in self and here were going to do self.items is equal to a deque okay.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=128)** So this is the Constructor for the deque so it's an object within an object, but then so would a list be.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=134)** So when you create a list that is actually an object as well, it's just not obvious that that's the case because we're so used to it working with lists.
>
> **[2:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=141)** So on line 12 we are creating self.items and setting it equal to an an empty deque or an empty double ended queue.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=150)** Then very similar to the stack def is empty return not self.items and again if that's confusing, the reason that works is because an empty deque returns false, but if that's confusing for you, you can return len of self.items whether or not that is equal to zero.
>
> **[2:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=178)** So that's an alternative way of doing that, but I'm going to go with the first one.
>
> **[3:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=185)** Then enqueue, so this is another very good reason for wrapping this method in a class is we can actually choose how we want to refer to our methods and enqueue is the traditional naming convention for working with a queue so we can enforce that, by having that particular method.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=199)** So en queue self and it takes item 'cause that's what we're going to add.
>
> **[3:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=206)** So we do self.items.append fairly straightforward.
>
> **[3:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=214)** That's being added to the right hand side of our deque, and then we have de-queue and then return.
>
> **[3:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=227)** So we don't just pop the item we also return it.
>
> **[3:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=231)** Okay so here this is a method of the deque class where we do pop left.
>
> **[3:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=236)** If this was just a list were we do pop zero, and that would pop the item that was at the zeroth index which would be on the left but this pop life method is from the deque class.
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=246)** Behaves exactly the same way just faster and then couple more methods so we have def size and then we return len of self.items and it's still useful to have peek so we can see what sort of runs.
>
> **[4:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=267)** So def peek so that here we return self.items and in this case it's the one on at the left hand side so that's zero.
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=280)** So this is different to a stack, with a stack we want on the right hand end.
>
> **[4:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=284)** But here in our queue we want the front, which is the left hand side of our data structure.
>
> **[4:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=289)** Now we also need a string representation so we do def double underscore str sometimes it's called dunder, which is why I kind of said both at the same time there def dunder string, self return str of self.items.
>
> **[5:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=308)** Okay and that's our class definition.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=311)** So then we can start testing it by doing if name is equal to double underscore main then we can start doing stuff and again the reason for doing this, is if we ever wanted to import this class into a different file we could do so without with this code after my if double underscore main on line 33 being run, that keeps it modular.
>
> **[5:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=338)** So then so then let's create a queue so q is equal to queue with a capital Q and we'll just print that just to see that everything's working as it should be and there is this, idea that we should have a certain amount of spaces in different situations the reason this is underlined in yellow is I don't have the right number of spaces.
>
> **[5:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=356)** But rather than think about that too much.
>
> **[5:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=358)** In Python, I just go to code reformat my code and it does it for me, it's a very useful feature.
>
> **[6:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=364)** Let's run that see what happens, okay so it's working and you can see down in the terminal here that was getting displayed when we printed a queue now is this empty deque, object.
>
> **[6:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=377)** And just again to remind you how this plunder struck method works, if I come into that now and do the same thing and then you can see you get this main queue object, which doesn't give us much information.
>
> **[6:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=390)** So that's why we add these extra methods to return a human-readable representation of our objects, okay so that's that.
>
> **[6:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=399)** Continuing we have print queue.is empty, okay that's just to check if that method works, and it is empty which makes sense 'cause we haven't enqueued anything.
>
> **[6:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=414)** So now let's add some items to our queue so we're going to do some enqueueing so we do queue.enqueue and I'm going to do a letter this time A, and if I do control D a couple of times that duplicates the line very useful shortcut.
>
> **[7:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=429)** So enqueue two more letters and just have a think about what the state of the queue is now at this point.
>
> **[7:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=438)** So if I were to print(q) think about if we start with an empty list or an empty deque, I might as well just call it a list 'cause the concept is the same.
>
> **[7:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=447)** And then we enqueue that means we add from the right hand side so that means A would have been up front and then D gets added and then F added.
>
> **[7:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=455)** So if I run it you can see that the order is A, D, F okay.
>
> **[7:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=462)** Now let's do some dequeueing so if I do print (q.dequeue()).
>
> **[7:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=469)** Now the reason I can do this is because dequeue returns it does two things it removes the item from the queue and also it returns it.
>
> **[7:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=477)** That means when I print, the result of that function call all gets an output, I'll do that twice.
>
> **[8:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=486)** Okay so the first time I dequeued I got A and then I got D.
>
> **[8:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=490)** And then if I were to print my q on a new line print q, now what would you expect to see at this point.
>
> **[8:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=499)** You would expect to see just an F left on the queue because we had three items we removed two of 'em and then let's just test the other methods that we wrote so print q.size, notice it's a method rather than just a property that's why I made that brackets.
>
> **[8:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=517)** And we'll print q.peek that'll show us what's at the head of our to queue, also a method and then finally print our q again just to see what we got left after all of that.
>
> **[8:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=531)** Okay so q.size was one 'cause there's one item left.
>
> **[8:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=535)** That item there at the front of the queue is F as we expected and again finally I printed the q and it's still what it was, because neither of those last two methods actually modified the queue that we have.
>
> **[9:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=549)** So now you have a queue class which you can use in your own programs whenever you need preserve the F.I.F.O, First In First Out, order of your data.
>
> **[9:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/build-a-queue-class-in-python?u=76281980&t=558)** Next up we will see how powerful the simple structure can be in the context of the prep first search algorithm.

> [!info]- Semantic Content
>
> **Code Keywords:** self (11), let (7), module (4), this, (2), override (1)
> **CLI Commands:** python (5), make (2), find (1)
> **File Paths:** q_ll.py (1), q.py (1)
> **Code Identifiers:** q_ll (1), q_llq (1)
> **Definitions:** stands for (1), is a  (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### Solution: Practice queue methods
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-practice-queue-methods-19863377?u=76281980)


### 7. 6. The Breadth-First Search Algorithm

#### Understand the breadth-first search algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=0)** - [Instructor] Breadth-first search is another very important algorithm with many real world applications.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=5)** Its implementation is based on the queue data structure, which we've just studied.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=10)** Let's look now at how breadth-first search works in our maze GUI.
>
> **[0:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=14)** So if you go to your project and you open up maze_gui_explore.py and also config.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=22)** So in config, we're going to uncomment this MAZE_FILE equals gui_mazes/walled_garden_20x20.txt, and there's a reason why we're using that specific one.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=32)** And then go to your maze_gui_explore.py file and run it.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=36)** You can either use the Run menu, but I use Ctrl + Shift + F10.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=41)** And this is what we have, made that full screen.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=44)** So the reason I've chosen this maze is because the opponent is in the middle, and you'll see that with breadth-first search, having it in the middle makes the pattern of how it behaves a bit more clear.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=53)** So if I select a cell to place my treasure in, like so, and I press S, that's DFS, okay, just to remind us.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=63)** But that's not what we're looking at here.
>
> **[1:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=64)** So let's select BFS and see how it's different.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=72)** So you can see BFS behaves quite differently.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=75)** And it's a bit like having the center of a circle as the starting point, and then moving out to different radii or distances from that central point as the algorithm progresses.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=88)** Let's see that again.
>
> **[1:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=89)** So we'll put the treasure somewhere else, maybe a bit nearer this time, and then press S to start.
>
> **[1:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=99)** So it moves that from the starting position, equidistant from that starting position, until it reaches its goal.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=108)** So BFS will always give the shortest path if no edge weights are used.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=112)** And in this application, there's no edge weights other than one.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=115)** Every single cell is connected by an edge of weight one, so weights are not relevant in this application.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=120)** So, if no edge weights are used, they will always give the shortest path.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=124)** And this is because it first finds all the vertices that are one edge away from the starting point, then all the vertices that are two edges away, and so on.
>
> **[2:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=132)** When you find the specified vertex, that's the goal vertex, you know the path you've traced so far is the shortest path to the node.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=139)** If there were a shorter path, then BFS would have already found it.
>
> **[2:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=144)** Breadth-first search has many applications, some of which are listed on the slide below.
>
> **[2:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=147)** So it's used in GPS systems.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=149)** It's using flight reservation systems.
>
> **[2:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=151)** It's used in peer-to-peer networks.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=153)** A lot of use can be made in social networking for analyzing and finding connections.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=158)** It's using web crawlers.
>
> **[2:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=159)** It's used a lot in artificial intelligence, in electronics and communication engineering, and scientific modeling.
>
> **[2:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=164)** So it has broad application; it's a very, very useful algorithm to know about and to understand.
>
> **[2:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=171)** In some contexts, the behavior of BFS is described as flood fill as it behaves much like water spreading out over a surface.
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-breadth-first-search-algorithm?u=76281980&t=177)** So that's another way that you can think about this in an unweighted graph.

> [!info]- Semantic Content
>
> **Env Vars:** bfs (5), gui (1), maze_file (1), f10 (1), dfs (1)
> **Code Keywords:** let (3), else, (1)
> **File Paths:** maze_gui_explore.py (2), gui_mazes/walled_garden_20x20.txt (1)
> **Code Identifiers:** maze_gui_explore (2), gui_mazes (1)
> **CLI Commands:** find (1), node (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Visualize breadth-first search in a grid
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=0)** - [Instructor] We are now going to trace the path, of Breadth-first Search for a small sample maze.
>
> **[0:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=5)** So the initial configuration is very similar to what we had for Depth-first Search.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=10)** We have our initial cell marked in blue, and our destination cell marked in green and then down in these text boxes we have our data structure, which in this case is a queue containing just the initial cell.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=23)** And we also have a list of predecessors currently only containing A which has none as its predecessor because it's the initial cell.
>
> **[0:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=30)** So let's begin our algorithm.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=32)** First of all I dequeue so that means A comes off my queue.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=37)** And I'm going to mark A in red now to show that it's actually been visited.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=41)** Then I ask myself is this the goal?
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=44)** Well, it's not the goal.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=45)** So I have to go into my loop which tells me I have to enqueue undiscovered neighbors, so that means D, that's the only one I can actually access from here.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=54)** That goes onto my queue.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=56)** And also I'm going to update the predecessors so D now has predecessor of A because that is where we came from on our grid.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=65)** Then we may have to repeat until the queue is empty which it isn't yet So we then dequeue again, because there's just one item.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=72)** It has to be D.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=74)** We ask ourselves is that the goal?
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=76)** No, it isn't.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=77)** So we have to get into our loop, which tells us we have to enqueue our undiscovered neighbors but first I'm just going to mark D in red to show that it's actually been visited.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=88)** And then I'm going to enqueue the undiscovered neighbors so that means E and G go onto my queue.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=96)** And I update the predecessors for E and for G.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=103)** And just noticed that the predecessor is always going to be the current cell.
>
> **[1:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=108)** That's how you determine what to do for your predecessor there.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=112)** Then repeat until the queue is empty Well, it's not empty.
>
> **[1:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=115)** So I have to take another item off of my queue but I have to be careful to make sure that I take the correct one.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=120)** Now remember, we're using FIFO, first in first out.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=124)** Which means E went in first so it has to be the first one that comes out.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=128)** And in our implementation that means take it always from the left-hand side.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=131)** So we're always dequeuing from the left-hand side.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=134)** So E comes off.
>
> **[2:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=138)** I mark it in red to show that it's been visited.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=142)** I ask myself, is it the goal?
>
> **[2:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=144)** No, it isn't.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=145)** So I have to enqueue my undiscovered neighbors.
>
> **[2:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=148)** That means enqueuing F and H.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=153)** So, F goes onto my queue, H goes onto my queue and also update the predecessors.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=160)** So F comes from E and H also comes from E and then repeat until the queue is empty.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=168)** So now G comes off.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=172)** It gets marked in red.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=175)** I ask myself is it the goal?
>
> **[2:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=177)** Is not the goal.
>
> **[2:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=178)** However there's no undiscovered neighbors, so I can go straight back to the top and now I can dequeue F.
>
> **[3:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=188)** Mark it in red, ask myself if it's the goal.
>
> **[3:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=191)** And no, it isn't.
>
> **[3:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=193)** So I'm going to enqueue undiscovered neighbors so I'm going to enqueue C, and I update the predecessors, C came from F, and I came from F.
>
> **[3:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=210)** And I repeat until the queue is empty is not empty.
>
> **[3:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=212)** So next off the queue is going to be H.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=216)** I mark that in red, ask myself if it's the goal No, it isn't.
>
> **[3:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=222)** And because there's no undiscovered neighbors, I can go straight back to the top of my algorithm, so I can now dequeue C.
>
> **[3:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=232)** Mark that in red, ask myself is this the goal?
>
> **[3:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=236)** No, it isn't.
>
> **[3:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=236)** So we have to continue.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=238)** So if there were any undiscovered neighbors, I'd be enqueuing them but there aren't so I can just get back to the top of my algorithm, I can, dequeue this time I'm going to be dequeuing I.
>
> **[4:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=250)** So I mark it in red.
>
> **[4:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=252)** I ask myself, is this the goal?
>
> **[4:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=254)** And infact it is.
>
> **[4:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=255)** So we are now done.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=258)** Let's just consider briefly how these predecessors are helpful.
>
> **[4:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=261)** So because we've kept track of where every new cell came from, we can actually go back through those predecessors to find our path.
>
> **[4:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=269)** In the right hand text box here, I've actually written out the predecessors and showing you how the path can be derived.
>
> **[4:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=274)** So we know that I came from F, which we know from our predecessors in this middle box.
>
> **[4:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=280)** We know that F came from E, E came from D and D came from A.
>
> **[4:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-breadth-first-search-in-a-grid?u=76281980&t=286)** So if you want to actually determine the path, we just take the reverse order of those that came from A working backwards, ending up at I You can see the path in fact here is A, D, E, F, I that's A,D,E,F,I and I've marked that in green to show the path that this algorithm produced for this particular maze.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), from, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** fifo (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Code a breadth-first search in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=0)** - Now the time has come to code Breadth first search in Python.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=4)** So this is chapter O six O three.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=7)** And if you open up BFS.PY you'll see there's some template code.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=13)** Now this is very, very similar to what we had with DFS.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=15)** So we mentioned in the comments that we're using row column tuples on line five, we have the same imports, almost the same, except instead of the stack, we have queue being imported from queue_ll.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=29)** And just a point of interest, notice that when we're importing from a module, we don't put .PY at the end of our file.
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=35)** So this is the queue_ll.PY file without the .PY being mentioned, that's how the inputs work.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=42)** Then we have the same test, exactly the same as we had in DFS at the bottom.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=46)** The only difference being that we're testing on a different maze.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=49)** So if you were to go into mazes, you'd see that the maze here is slightly different.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=54)** Mini maze BFS.
>
> **[0:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=56)** I've said it to be the same maze that we looked at in the previous video when we were using the Grit Tracer App.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=61)** So mini maze BFS is this one with just one black square on the top row.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=69)** (mouse clicking) So everything else is the same.
>
> **[1:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=72)** We have a blank function definition that we're going to complete.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=75)** We have our imports and we have our tests.
>
> **[1:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=78)** And you might be surprised at how similar this is actually to DFS.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=81)** So let's make a start.
>
> **[1:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=82)** We create a queue instead of a stack.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=86)** Was queue then we own queue our start position.
>
> **[1:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=92)** So queue.enqueue Okay, and that start is the argument that's being passed in on line 12.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=102)** We're using to add to our key.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=105)** And then predecessors, (keyboard clicking) is equal to a dictionary containing the key value pair start none to begin with.
>
> **[2:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=120)** Then the main algorithm.
>
> **[2:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=121)** So the deal is while the queue is not empty.
>
> **[2:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=125)** So while not queue.is empty,
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=134)** these are all methods that we coded previously.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=137)** So while not queue.is empty, although I don't want that underscore at the beginning, then I perform the following sequence of operations.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=145)** I get a current cell.
>
> **[2:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=146)** Current cell is equal to queue.dequeue.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=153)** and you get used to the spelling after a while.
>
> **[2:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=155)** It's very strange bit of spelling for queue and dequeue.
>
> **[2:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=159)** And then we've got a current cell.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=160)** So if that current cell is equal to our goal,
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=168)** then we're done.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=169)** So we return the path produced by this function code to our helper function when it's code with our predecessors and I'll start and I'll goal.
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=187)** However, if we don't find it, then we need to check the other directions.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=189)** So for direction (keyboard clicking) in up right down and left.
>
> **[3:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=207)** Let me get our offset.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=208)** So row offset and column offsets are equal to the offsets.
>
> **[3:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=219)** That's from the help of fall, for our particular direction.
>
> **[3:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=223)** (keyboard clicking) And then we get our neighbor.
>
> **[3:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=230)** So our neighbor is equal to current cell zero,
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=238)** that's the row position plus row offset and our current cell, a one, that's our column, plus our column offset col, col offset.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=258)** Okay, so we've got a neighbor and then we say, if is legal pos within our particular maze that we're considering this particular neighbor, if that's the case.
>
> **[4:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=272)** And also if we haven't added it yet.
>
> **[4:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=274)** So if it's undiscovered and neighbor not in predecessors.
>
> **[4:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=284)** Then we on cue (keyboard clicking) the neighbor and we also update our predecessors.
>
> **[4:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=292)** So predecessors for this neighbor are equal to our current cell.
>
> **[5:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=302)** And again, try and match what we're doing here to what we did in the Grid Tracer App, because they are directly comparable.
>
> **[5:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=309)** And if none of that succeeds, then we return none.
>
> **[5:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=313)** That means we haven't been able to find a path using this algorithm on that particular maze.
>
> **[5:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=319)** And then let's just tidy stuff up with code reformat code and see what happens when we run it.
>
> **[5:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=328)** Okay. So there's no errors.
>
> **[5:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=329)** That's a very good sign.
>
> **[5:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=332)** I've commented out lines 40 and 41.
>
> **[5:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=335)** So the first major we're testing is just a blank maze, created using this comprehension as exactly in the DFS video.
>
> **[5:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=342)** And then here, let's just uncomment those and run it again.
>
> **[5:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=345)** So control forward slash, control S to save control shift F 10 Okay, and this time we get a printout of our maze, just to kind of show us what's going on in the background.
>
> **[5:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=357)** And the result there we've correctly asserted that it's going to be 0 0 1 0 1 1 1 2 2 2.
>
> **[6:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=364)** And so we didn't get any assertion errors.
>
> **[6:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=367)** And for tests three, we asserted that the path was going to be none because there was no viable path to a cell that was on our maze.
>
> **[6:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=375)** So that's all working as expected.
>
> **[6:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=378)** So there it is.
>
> **[6:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=379)** The algorithm is surprisingly similar to Depth first search.
>
> **[6:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=382)** And like I say, the only difference being we're using a different data structure in the background, but the same basic procedure, this section from line 17 to line 27 is almost identical to in the Depth first search.
>
> **[6:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-a-breadth-first-search-in-python?u=76281980&t=395)** And there you have a Python implementation of Breadth first search.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), module (1), while. (1), case. (1)
> **Env Vars:** dfs (4), bfs (3)
> **CLI Commands:** python (2), find (2), make (1)
> **Non-Speech:** (keyboard clicking) (4), (mouse clicking) (1)
> **File Paths:** bfs.py (1), queue_ll.py (1)
> **Code Identifiers:** queue_ll (2)
> **Cross-References:** we mentioned (1), previous video (1)
> **Analogies:** similar to (2)

#### Challenge: Trace the path of a breadth-first search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980&t=0)** - [Instructor] In this challenge, your task is to calculate the path taken by the breadth-first search algorithm we have studied in the maze shown on the slide.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980&t=13)** You should do this either on paper or a whiteboard or using the JS app we have provided.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980&t=18)** Our starting point is (0,0) and the destination is (3,3).
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980&t=22)** Your answer should be in the form of a sequence of ITA coordinates.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-a-breadth-first-search?u=76281980&t=26)** This challenge should take approximately 8 to 10 minutes to complete.

> [!info]- Semantic Content
>
> **Env Vars:** ita (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Trace the path of a breadth-first search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=0)** - [Instructor] Here's a solution to the BFS challenge then.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=8)** So this is the path the algorithm produces for the given maze, assuming you used exactly the same implementation that we have been using so far.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=15)** And that includes the order on which we own QR elements.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=18)** So we go up, right, down, left.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=21)** So the path you should have got is (0,0), (0,1), (1,1) (1,2), (2,2), (3,2), (3,3), as shown on the slide.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-a-breadth-first-search?u=76281980&t=29)** If you got a different answer, then go back and see what you did differently and see if when you apply the algorithm correctly, you get the same result as I did.

> [!info]- Semantic Content
>
> **Env Vars:** bfs (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. 7. The Priority Queue Data Structure

#### Understand the priority queue data structure
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=0)** - [Instructor] A priority queue is useful in any situation where there are resources needed to be allocated according to some rule or rules of precedence.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=9)** A classic example is allocation of healthcare resources in a hospital, where the severity of patient's medical needs determines their level of priority.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=18)** The slide shows some applications of priority queues.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=20)** This should give you an idea of how useful the data structure is.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=23)** So they're used a lot in artificial intelligence, including the A* algorithm, which we're going to be studying shortly.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=29)** Priority queues are used in optimization algorithms.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=32)** They're used a lot in operating systems with process scheduling.
>
> **[0:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=36)** Used, for example, also in bandwidth management, statistical analysis, and spam filtering.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=41)** So those are just some examples of how useful this data structure is.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=45)** Now the main operations for a priority queue are get.
>
> **[0:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=49)** And that is to retrieve an item with the highest priority, so that's similar to DQ in a queue.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=53)** Except it's not just to do with the position in the queue, it's to do with the priority associated with the item.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=59)** Put is equivalent to on queue in a normal queue, whereby you put something into the queue.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=65)** And is empty, again, it's just very useful when we're iterating through the priority queue to work out if there's anything left.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=71)** So in short, a priority queue is a collection in which items can be added at any time.
>
> **[1:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-priority-queue-data-structure?u=76281980&t=76)** But the only item that can be removed is the one with the highest priority.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use the heap module to implement a priority queue
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=0)** - [Narrator] Let's start building out our priority queue class.
>
> **[0:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=3)** So we start with the constructor.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=7)** Double underscore in itself.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=10)** And this time our list of elements is going to be called self.elements.
>
> **[0:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=16)** With previous data structures we used self.items, but here I'm using self.elements.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=21)** And you'll see why in a moment.
>
> **[0:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=23)** Okay, so then we have a method called is empty.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=29)** Take self.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=31)** And then we're going to return, not self.elements.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=38)** Okay, same logic as before.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=39)** So an empty list returns false.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=42)** So returning not, it will be true if it's empty.
>
> **[0:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=46)** And again you can use the LEN version, but I'll let you refer to previous videos if you want to use that version.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=52)** So if the length is zero, it's also empty.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=53)** You can use that logic as well.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=55)** So now we're going to do put so def, put, and we have self.
>
> **[1:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=62)** But then there's actually two arguments here.
>
> **[1:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=64)** So we have self and we have item and we have priority.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=70)** So this is why I've used elements instead of item, because it's not just items in our list, it's actually items and their associated priority.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=79)** So here we're going to do a heapq.
>
> **[1:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=81)** Now this is from this heapq module, okay, so I'm referring to that module, .heappush.
>
> **[1:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=89)** Self.elements.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=93)** So it's pushing it onto that list.
>
> **[1:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=96)** A tuple containing the priority and the item.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=102)** So what does heapq.heappush do?
>
> **[1:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=104)** Well basically it's going to push this element onto our priority queue and it's going to do so in such a way that it preserves the required ordering of our priority queue so that we would always be able to access the minimum value based on that priority that we've passed in.
>
> **[1:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=119)** Then we're going to have a get method.
>
> **[2:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=124)** And this is going to return heapq.heappop.
>
> **[2:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=131)** And we're heappop self.elements.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=137)** And it's going to be at index one.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=139)** And we'll see why that is the case in a moment.
>
> **[2:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=142)** Finally, we got def dunder str.
>
> **[2:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=148)** And this as usual is to give us human readable representation of what's going on inside our objects.
>
> **[2:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=154)** So we're going to return str of self.elements.
>
> **[2:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=162)** Should have just taken Python's suggestion there.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=165)** There we go.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=167)** Okay.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=168)** So let's have a look at how this works.
>
> **[2:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=172)** So if dunder name is equal to dunder main, then we can start playing with our priority here that we've just built.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=183)** So pg is equal to priority queue with capitals.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=189)** So we now have an instant and we can start off just by printing where the pq is empty.
>
> **[3:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=196)** Actually just sprint pq first, make sure that's working.
>
> **[3:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=201)** Yep.
>
> **[3:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=202)** So you can see it's just an empty list to begin with.
>
> **[3:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=204)** And check that it's empty.
>
> **[3:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=205)** Print pq.is.
>
> **[3:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=213)** Ah, okay.
>
> **[3:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=214)** And what's happened here is I haven't actually made it into a function call cause I haven't added the parentheses.
>
> **[3:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=218)** So it's telling me that it's a bound method of the priority queue.
>
> **[3:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=222)** However what I wanted to do there is to make it into a function call.
>
> **[3:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=228)** Okay, and you can see here it's true, down in the terminal.
>
> **[3:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=231)** That pq is empty at this stage.
>
> **[3:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=236)** Okay so now it gets interesting.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=238)** So let's just make a comment here.
>
> **[3:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=239)** Item comma priority.
>
> **[4:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=243)** So what are we going to be putting onto our priority queue?
>
> **[4:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=246)** We're going to be putting two things.
>
> **[4:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=248)** We're going to be putting a value and a priority associated with that value.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=251)** So I want to pq.put.
>
> **[4:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=255)** Let's have eat, with a priority of two.
>
> **[4:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=258)** And then I'm going to do control D just to make it easier to type or to save typing.
>
> **[4:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=263)** And encoding obviously has a priority of one, and sleep has a priority of three.
>
> **[4:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=274)** Okay, so look what's going on here.
>
> **[4:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=275)** We have an item.
>
> **[4:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=276)** So that's the activity, eat, code, or asleep.
>
> **[4:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=278)** And then depending on our prioritization of those, we assign a value.
>
> **[4:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=282)** So I've done coding being most important, eating second most important, and sleeping third most important.
>
> **[4:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=288)** Obviously that's not real life priorities, it's just for the purposes of demonstration.
>
> **[4:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=292)** Now, if we were to print the priority queue at this stage,
>
> **[5:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=301)** what do we get?
>
> **[5:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=302)** So down in the terminal here, this line that I've highlighted, you can see that even though we put them in, in the order, eat, code, sleep, the way they've been displayed is code, eat, sleep.
>
> **[5:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=314)** Now the only thing we can guarantee about this output is that the one with the highest priority will be at the left hand side, okay.
>
> **[5:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=321)** At the front of the queue.
>
> **[5:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=322)** The rest we can't guarantee where they're going to be.
>
> **[5:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=324)** So in a longer list that would become relevant, but you can always guarantee that that first one is going to be the highest priority value which is what we want.
>
> **[5:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=333)** So that's how that works.
>
> **[5:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=334)** Then let's have a look at how get works.
>
> **[5:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=338)** So print, pq.get.
>
> **[5:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=344)** And let's do that a few times, three times.
>
> **[5:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=348)** And you'll see that when we run that, each time, the way that we set out this is why on line 21, why I put that index after the self.elements, because there's two items in that elements tuple.
>
> **[6:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=363)** And when I'm using get, I'm not really interested in the priority, that's being handled internally by the priority queue.
>
> **[6:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=367)** I'm just interested in the value.
>
> **[6:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=369)** So that means index with one of the tuple.
>
> **[6:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=373)** That's the second item in the tuple.
>
> **[6:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=379)** And finally, let's see what our protocol looks like.
>
> **[6:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=382)** Here, once we've done all that.
>
> **[6:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=385)** Okay, you can see it's back to being an empty list.
>
> **[6:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=390)** So I just want to clarify something here.
>
> **[6:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=391)** When we use put in terms of the interface that we've created then the value goes before the priority.
>
> **[6:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=399)** But in terms of the way it's handled internally, you can see here that we have on line 18, the tuple is priority and then item.
>
> **[6:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=408)** Okay.
>
> **[6:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=409)** So just be aware of that.
>
> **[6:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=410)** And the reason we did that is because the way heapq works is it goes in order through the tuple.
>
> **[6:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=414)** So it looks at the first element first.
>
> **[6:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=417)** But in terms of the interface it makes more sense to think about the item that we're passing in because we're not really worried about the implementation details.
>
> **[7:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=424)** In fact, that is one of the key points about an abstract data type is that the inner workings of it are not really our business.
>
> **[7:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=432)** All we need to do is to use the interface provided.
>
> **[7:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=435)** In this case that's the methods for putting and getting.
>
> **[7:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=442)** And also checking whether the priority queue is empty.
>
> **[7:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=447)** Now we have a class we can use to create priority queues.
>
> **[7:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/use-the-heap-module-to-implement-a-priority-queue?u=76281980&t=450)** I encourage you to experiment with the class and get comfortable with how it works before moving on to learn how this data structure is used in the A* algorithm.

> [!info]- Semantic Content
>
> **Code Keywords:** self (11), let (8), interface (3), module (2), finally, (2)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (2)
> **Env Vars:** len (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### Solution: Heapq methods practice
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-heapq-methods-practice-19862403?u=76281980)


### 9. 8. The A* Search Algorithm

#### Understand the A* search algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=0)** - Now we come to what, in some ways, is the culmination of everything we have studied so far, the A-star algorithm.
>
> **[0:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=7)** The A-star search algorithm is a powerful, and widely used, algorithm for calculating shortest paths.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=13)** Here are some applications.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=15)** So A-star search is used very often in traffic navigational systems, including GPS.
>
> **[0:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=21)** It's used a lot in social network analysis, natural language processing, machine learning.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=26)** It's used for finding solutions to puzzles, and also real world situations, which can be modeled as puzzles.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=31)** It's used, for example, in algorithmic training, also in robotics, and it has many applications in video games.
>
> **[0:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=37)** And beyond this list, there are also many other applications.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=40)** It's a very widespread and powerful algorithm.
>
> **[0:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=43)** What distinguishes the A-star algorithm from the previous pathfinding algorithms we have studied is the use of a heuristic to determine the likely best choice for each step of the algorithm.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=54)** A heuristic is often informally defined as a rule of thumb.
>
> **[0:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=58)** In the case of the A-star algorithm, the rule of thumb is to choose the next position to visit based on its distance from the goal.
>
> **[1:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=66)** In our implementation, this distance will be calculated using something called the Manhattan distance, or taxi cab distance, which means the distance between two points on a 2-D grid when the path between those two points has to follow the grid layout.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=79)** It's based on the idea that a taxi will have to stay on the road and will not be able to drive through buildings.
>
> **[1:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=85)** Taxi cab distance between two points is measured along the axes at right angles. And you can see on the slide here, we have an example of how you would calculate the Manhattan distance.
>
> **[1:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=94)** So to get from the point on the bottom left to the point on the top, right, you can see you have to travel a certain number of blocks in a horizontal direction, and a certain number of blocks in a vertical direction.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=105)** And actually, it doesn't really matter what path you take the Manhattan distance will remain the same.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=110)** Another heuristic that is sometimes used in the A-star algorithm is the Euclidean distance, calculated using Pythagoras' theorem.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=118)** In the A-Star algorithm, every discovered cell is assigned the following values.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=123)** We have a G value, which is the best distance from the start to the current cell.
>
> **[2:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=128)** We have the H value, which is the heuristic distance from the current cell to the destination.
>
> **[2:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=133)** And we have the F value, which is the sum of the G value and H age value, representing the probable optimal value, i.e. that's the minimum distance based on the heuristic used.
>
> **[2:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=145)** In our implementation, we calculate H values as needed without storing them.
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=149)** G values and predecessors are stored in a dictionary, while the priority queue contains cell coordinates along with their associated F values.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=158)** That is because F value is the one of primary importance, and the other two are used just in calculating that F value.
>
> **[2:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=165)** There are other ways this can be implemented, for example, creating objects representing the cells or nodes with properties containing the various values.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=174)** One thing that can help you in understanding how the A-star search algorithm works, is just to be clear about the language which is being used.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=181)** So, for example, we have visited versus discovered, and we have something called an open set, which contains the discovered nodes.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=189)** And that means, in our implementation, the ones that have been put into the priority queue already.
>
> **[3:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=194)** So they are discovered, but they're not necessarily visited.
>
> **[3:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=197)** There's another piece of terminology called the closed set, which in our implementation is the nodes which have been visited.
>
> **[3:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=204)** That means we have values stored for them in our G values dictionary and our predecessors dictionary.
>
> **[3:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=210)** This can all be a bit abstract.
>
> **[3:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=212)** For now, just make a point of remembering these key values, the G, H, and F values and what they represent.
>
> **[3:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=219)** This will make the next stage a lot easier.
>
> **[3:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=222)** Let's have a quick look at how the A-star search algorithm behaves in our GUI.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=226)** So if I select A-star and I place my treasure, maybe up here in the top left, and I press S, you can see that A-star is actually very good at going directly for the treasure.
>
> **[3:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=238)** This is in contrast to, for example, BFS.
>
> **[4:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=241)** If I put the treasure in the same place and I do BFS and press S, you'll see it takes a lot longer.
>
> **[4:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=251)** And let's just do one more example with A-star.
>
> **[4:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=254)** Press A-star before setting your treasure.
>
> **[4:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=256)** So I'll put it down there in the left hand side, press S, and you can see here kind of appearingly intelligently gives up on its first trajectory, 'cause it realizes, if that's the right word, calculates, that that's not a good direction to go.
>
> **[4:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=272)** And then it tries a different path and gets there very efficiently.
>
> **[4:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/understand-the-a-search-algorithm?u=76281980&t=277)** So that's the A-star search algorithm in action in a maze.

> [!info]- Semantic Content
>
> **Env Vars:** bfs (2), gps (1), gui (1)
> **Analogies:** for example (4)
> **Code Keywords:** let (2), abstract (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), defined as (1)
> **Best Practices:** rule of thumb (2)
> **Speakers:** - now (1)

#### Visualize the A* algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=0)** - [Instructor] We're now going to trace the behavior of the A* search algorithm in a similar way to what we did with depth-first search and breadth-first search.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=9)** So, the setup is basically the same.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=10)** We're going to use blue cells for items that have been put onto the queue.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=15)** And we're going to start here at K and we're going to try and get to S.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=20)** I've changed the letters that we used in the grid in order to avoid confusion using F, G, and H values.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=26)** If F, G, and H were also grid names, they would get very confusing.
>
> **[0:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=31)** Now, in this left-hand text area, we have the algorithm that we're going to use, and we also have the state of the priority queue.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=40)** And at the minute, I've just given an example entry.
>
> **[0:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=42)** So in the priority queue, you can see that it contains two pools, and each two pool contains a cell and an F value for that cell.
>
> **[0:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=50)** So that's generic at the moment.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=52)** It's not set specifically to that K cell, so let's set it to the K cell.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=57)** So that's going to contain K now, and K's F value is basically the sum of its G value and its H value.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=67)** So let's think about what that might be.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=69)** So the G value is the distance from the starting cell.
>
> **[1:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=73)** So the distance from K to K is zero.
>
> **[1:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=75)** So we can safely say, as we've shown here, that the G value for K is at zero.
>
> **[1:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=80)** Now the H value is going to be the heuristic distance, or if you think about it, in order to get from K to S using taxicab or Manhattan distance, whichever path we take, we're going to have to go down two and across two.
>
> **[1:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=93)** So that's one, two, three, four.
>
> **[1:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=95)** Okay, so the H distance is going to be four, and the F distance is always going to be the sum of the G and the H.
>
> **[1:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=102)** So it's actually going to be four at this stage.
>
> **[1:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=105)** Now, technically it doesn't really matter what value we put there because there's only one item in the queue and that's, therefore, going to be the first item to be removed, but it's good to be systematic about these things.
>
> **[1:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=114)** So then we're ready to trace our algorithm.
>
> **[1:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=116)** So what do we do?
>
> **[1:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=117)** Well, we get the highest priority item from the priority queue, which I've abbreviated as PQ, so that means K in this instance.
>
> **[2:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=126)** Okay, and I'm just going to make a note of that and remove it from my priority queue, and also mark it as red in my grid.
>
> **[2:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=134)** Then I ask myself, is it the goal?
>
> **[2:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=136)** Well, it isn't the goal, so I have to continue with the rest of the algorithm.
>
> **[2:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=139)** So then I put undiscovered neighbors, so undiscovered neighbors in this case is just N, so I'm going to put N on there, and we'll calculate the F value in a moment.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=152)** What else can we say about N?
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=153)** Well, we can say that its G value is going to be one, because it's one cell away from K.
>
> **[2:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=160)** And we can also say that its predecessor is going to be K because we visited it from K.
>
> **[2:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=168)** Now let's think about what the F value is going to be.
>
> **[2:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=171)** It's going to be the G value plus the H value.
>
> **[2:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=175)** The G value is one and the H value is the heuristic distance, so that's going to be one, two, three.
>
> **[3:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=181)** So we're going to put four in there altogether and that's the sum of the G and the H values.
>
> **[3:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=187)** And then we repeat until the queue is empty.
>
> **[3:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=189)** So we get the highest priority item.
>
> **[3:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=192)** No choice here; it has to be N.
>
> **[3:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=195)** So put N there.
>
> **[3:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=198)** this is where we store our current cell on this line PQ.
>
> **[3:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=202)** Min,F-Value: N there that I've highlighted.
>
> **[3:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=206)** That's our current cell.
>
> **[3:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=208)** It's not the goal, so we're not done.
>
> **[3:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=210)** So we have to unqueue unvisited neighbors, so using the same sequence that we've used throughout the course, we're going up, right, down, left.
>
> **[3:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=217)** So we're going to unqueue O, and we're going to unqueue Q.
>
> **[3:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=225)** And when I say unqueue, I should really be saying "put in the context of priority queue," but it's basically the same operation.
>
> **[3:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=231)** Now in this instance, see, order doesn't matter too much because the order in which the items are put onto the queue does not reflect the order in which they come off, but I'm going to be consistent anyway.
>
> **[4:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=240)** So, O goes on, and it has a value that we haven't calculated yet for F and also Q goes on, and it has a value that we have not yet calculated.
>
> **[4:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=252)** A couple of other things we have to do first.
>
> **[4:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=253)** We have to update the G values.
>
> **[4:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=255)** So for O, the G value is going to be two 'cause you can count from K one, two.
>
> **[4:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=263)** And that's going to be the same for Q.
>
> **[4:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=266)** Be two.
>
> **[4:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=268)** And then the predecessors so O, is going to have the predecessor of N, 'cause that's where it came from.
>
> **[4:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=273)** Same for Q.
>
> **[4:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=276)** Now we've just got to think about the F values.
>
> **[4:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=279)** So for O, we have a G value of two as we've written, and we have an F value of two as we can calculate by checking the Manhattan distance.
>
> **[4:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=289)** So that's going to be four.
>
> **[4:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=291)** And then for Q, we have a G value of two, and we also have a Manhattan distance of two.
>
> **[4:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=297)** So that's also going to be four.
>
> **[4:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=299)** And I also just want to mark in red for the current cell, which I should have done at the beginning when I got it off the queue.
>
> **[5:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=307)** Now in this instance, on our queue, we have two items with the same priority.
>
> **[5:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=311)** So we're going to use the rule that we'll just take the first one that was put onto the queue; in this instance, when there's a tie.
>
> **[5:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=317)** So now our next current cell is going to be O.
>
> **[5:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=323)** It comes off of the priority queue.
>
> **[5:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=326)** I mark it in red while I remember, okay.
>
> **[5:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=329)** So whenever we take it off, we mark it in red, and then we ask ourselves, "Is it the goal?"
>
> **[5:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=335)** It's not the goal, so we have to put undiscovered neighbors.
>
> **[5:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=339)** So undiscovered neighbors here are P and R, so let's put those on.
>
> **[5:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=345)** You have P, and we don't know what the F value is yet.
>
> **[5:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=349)** And we have R.
>
> **[5:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=353)** And we also don't know what the F value is yet.
>
> **[5:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=355)** So I've left that blank; I fill that in in a moment.
>
> **[5:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=357)** Now we can update the G values.
>
> **[5:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=359)** Four P.
>
> **[6:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=362)** It's always going to be one more than the previous, because there's no weights or anything like that in this implementation.
>
> **[6:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=367)** So it's going to be three.
>
> **[6:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=369)** And you can check that from K to P, one, two, three, okay?
>
> **[6:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=373)** And then, also for R, it's going to be three as well.
>
> **[6:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=379)** From K, one, two, three, one more than where we were previously.
>
> **[6:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=384)** And then in our predecessors, let's update those.
>
> **[6:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=386)** So P came from O and R also came from O, came from our current cell.
>
> **[6:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=395)** Now we can calculate the F values.
>
> **[6:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=397)** So for P, we have a G value of three, and we have a H value of one.
>
> **[6:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=404)** So it's going to be four, so we're getting a lot of fours here.
>
> **[6:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=408)** And then R, where we have a G value of three and an H value of one, so that's also going to be four.
>
> **[6:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=415)** Okay, so repeat until the queue is empty.
>
> **[6:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=418)** Now there's no cell with a higher priority than another.
>
> **[7:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=421)** So we'll just go in order.
>
> **[7:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=422)** So the next one to come off is going to be Q.
>
> **[7:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=425)** So Q, mark it in red, remove it from our queue; now, is it the goal?
>
> **[7:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=433)** No, it isn't, so we have to do some unqueing of undiscovered neighbors; however, in this instance, there are no undiscovered neighbors.
>
> **[7:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=439)** There's nothing in white that needs to be added to the queue.
>
> **[7:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=442)** So we can just continue.
>
> **[7:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=444)** Repeat until the queue is empty, so now P is going to come off.
>
> **[7:27](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=447)** P comes off the priority queue.
>
> **[7:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=453)** I mark it in red.
>
> **[7:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=455)** It's not the goal.
>
> **[7:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=457)** So I have to put the undiscovered neighbors.
>
> **[7:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=459)** So I have to put M and we don't know the F value yet, so I'll leave that blank for now.
>
> **[7:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=468)** And I also have to put S.
>
> **[7:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=472)** And I don't know the F value of that yet either.
>
> **[7:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=475)** So I'll leave that blank.
>
> **[7:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=476)** So a couple of things to update.
>
> **[7:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=478)** There's the G value.
>
> **[8:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=480)** For M, the G value is going to be four.
>
> **[8:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=484)** You can check that by going from K one, two, three, four.
>
> **[8:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=489)** And for S, the G value is going to be four as well.
>
> **[8:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=495)** And again, you can check that from K one, two, three, four.
>
> **[8:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=499)** Okay, so at the minute, it's not clear, which is going to be the better choice, and it might be obvious looking at it as a human being that S is the best choice, but the algorithm doesn't know that.
>
> **[8:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=510)** Just very quickly, let me not forget to update the predecessors.
>
> **[8:34](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=514)** So M came from P as did S.
>
> **[8:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=520)** So even though they haven't been visited, they've been discovered, and we can say at this stage where they were discovered from, what their predecessor was when they were discovered.
>
> **[8:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=528)** So this is where it gets interesting.
>
> **[8:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=530)** So M, if we look at M, we've got a G value of four, and we have an H value, which you can calculate just by looking, is two, so altogether, the F value for M is six.
>
> **[9:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=545)** Now we'll do the same for S, so S, the G value is four, and the H value is zero.
>
> **[9:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=554)** Okay, because it is the destination.
>
> **[9:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=555)** There's no distance to get from S to S, so we can actually say, then, that the priority value for S is four.
>
> **[9:25](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=565)** So it's at this point, you can see in the priority queue that we've got some useful information for the algorithm to determine what to do next.
>
> **[9:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=571)** However, we can't do that straight away, because we still have this rule that if we have a tie within our queue, within the priorities of the cells within our queue, then we take the one that was put in first.
>
> **[9:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=582)** So we still have to visit R, okay.
>
> **[9:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=584)** So we'll take R off of our queue.
>
> **[9:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=588)** We'll ask ourselves if it's the goal.
>
> **[9:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=591)** Well, it isn't.
>
> **[9:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=593)** There's nothing else to add, although I do need to mark it in red now, 'cause it's come off of our queue.
>
> **[9:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=599)** And so I repeat until the queue is empty.
>
> **[10:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=602)** Now is when that strategic choice actually finally gets made.
>
> **[10:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=605)** I've got M, which has an F value of six, and I have S, which has an F value of four.
>
> **[10:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=611)** Therefore, I choose the one with the lowest value, the lowest F value, which is the highest priority.
>
> **[10:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=618)** So that comes off of my queue.
>
> **[10:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=623)** I mark it in red; I ask myself, "Is it the goal?"
>
> **[10:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=626)** Yes, it is, and so we are done.
>
> **[10:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=629)** Because this was only a very small maze, there was only one case where we prioritized one cell over another.
>
> **[10:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=636)** That was when we chose to go straight to S rather than checking M even though M was discovered first.
>
> **[10:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/visualize-the-a-algorithm?u=76281980&t=643)** In a larger maze, these choices add up to make the A* algorithm genuinely much more efficient than breadth-first search.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (2), from. (1), from, (1)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Code the A* algorithm in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=0)** - [Instructor] We're now going to code a python implementation of the a_star algorithm.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=4)** The basic approach should now be quite familiar from the implementations of depth first search and breadth first search.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=10)** So this is chapter 803.
>
> **[0:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=13)** If we go to a_star.py, there's a little bit of template here, so we've got a comment telling us that the priority queue contains f-values and (i,j) tuples that's row column tuples.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=26)** We have some imports on line nine, including the priority_queue class that we just wrote.
>
> **[0:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=33)** And then on line 13 we have a heuristic, which basically just calculates the Manhattan distance by calculating a difference of the x-coordinates and adding it to the difference of the y-coordinates.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=44)** And we use the absolute value there in case we end up with a negative value, and we are only interested in the positive value.
>
> **[0:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=50)** The tests going from 926 onwards are exactly the same as we had for BFS.
>
> **[0:55](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=55)** In fact, even the maze that we're using line 35 for example, is using the same maze.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=61)** So let's start coding our algorithm.
>
> **[1:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=68)** The initial setup is we have a Priority Queue.
>
> **[1:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=70)** I'm going to call pq and it's equal to a Priority Queue.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=74)** PyCharm has kindly suggested that that's what I want there.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=79)** And then we put onto our queue, our start position, and we give it a priority of zero.
>
> **[1:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=88)** And I just want to spend a minute talking about this line 24, because in the previous video, I said that the f-value for the initial cell should be equivalent to its h-value because the g-value is zero, which means the distance from the start to the start is zero.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=103)** But the f-value wants to be the sum of the distance from the start to the current cell, plus the heuristic distance.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=109)** So technically line 24 should have the heuristic distance.
>
> **[1:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=112)** However, it would be extra work to calculate that, and it's not actually needed because there's only going to be one item on the queue at this point, therefore it's automatically going to have the highest priority.
>
> **[2:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=122)** So for the implementation, zero is fine here.
>
> **[2:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=127)** Then we have our predecessors, and that's equal to a dictionary, which has a start and none as it's only key value pair.
>
> **[2:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=140)** And then we have g_values, which is equal to a dictionary containing start, which has a g_value of zero.
>
> **[2:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=150)** So that's the initial setup.
>
> **[2:33](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=153)** And then the main part of the algorithm, very similar to what we've done so far.
>
> **[2:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=156)** We have a while loop.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=158)** While not pq. is empty, then we get our current cell, which is equal to pq.get and we say if our current cell, is equal to our goal, then we're done.
>
> **[3:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=180)** So at that point we return.
>
> **[3:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=183)** And we want to return the path.
>
> **[3:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=184)** So return and get path for the predecessors and the start and the goal.
>
> **[3:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=192)** Now start and goal they're on line 31 are the same arguments as were passed in on line 22.
>
> **[3:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=199)** However, if we've not found the destination, then we have to go through the direction.
>
> **[3:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=202)** So for direction in, and then we have a list of directions so that's up, right, down and left.
>
> **[3:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=216)** For each of those directions, we get an offset.
>
> **[3:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=218)** So row_offset, and col_offset are equal to offset.
>
> **[3:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=226)** Now offsets is in our helper file, offsets for this direction.
>
> **[3:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=236)** Then we find our neighbor, so that is n-e-i-g-h-b-o-u-r, in England anyway, is equal to current_cell zero.
>
> **[4:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=247)** So that's the i position of the row plus the row offset.
>
> **[4:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=257)** So that's the first coordinate there is the, i of the current plus the offset.
>
> **[4:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=262)** And then the second coordinator is going to be current_cell one, that's the j coordinate plus the col_offset.
>
> **[4:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=271)** And so that's the coordinates of the neighboring cell.
>
> **[4:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=275)** Then if is legal pos, so if it's a legal position within the current maze, for that neighbour, and also if the neighbour is not in the g_values.
>
> **[4:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=290)** Now what that means is it's undiscovered. Okay.
>
> **[4:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=293)** So try and relate this back to the grid tracer app that we've looked at.
>
> **[4:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=296)** So you only put onto the queue sales, which have not yet been put onto the queue.
>
> **[5:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=300)** Otherwise it would be very inefficient.
>
> **[5:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=302)** So if it's not in the g_values, that means it's undiscovered.
>
> **[5:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=305)** So at that point, we can say the new_cost, is equal to the g_values, the current_cell, or the g_value of the current_cell plus one.
>
> **[5:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=319)** Now the reason we can be sure that it's plus one is because in our particular representation of these mazes, we have cells connected by edges and the weight of each edge is just a one.
>
> **[5:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=329)** So we're not dealing with a weighted graph here.
>
> **[5:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=331)** So we can guarantee that the new_cost is just going to be one more than the previous cost.
>
> **[5:36](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=336)** Then g_values, for this neighbour.
>
> **[5:42](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=342)** Now remember we're going to do this for all of the neighbours that are applicable in all four directions.
>
> **[5:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=347)** So g_values for this particular neighbour is equal to the new_cost.
>
> **[5:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=353)** So putting it in g_values and in predecessors are both equivalent to saying we've discovered this.
>
> **[5:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=357)** So we'll put it into predecessors in a minute as well.
>
> **[6:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=361)** But let's do the f_value.
>
> **[6:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=362)** Now the f_value is equal to the new_cost plus the heuristic.
>
> **[6:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=371)** This is where the magic happens, ready?
>
> **[6:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=373)** The heuristic of goal and neighbour.
>
> **[6:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=380)** And then we can do pq. put.
>
> **[6:21](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=381)** So we then add it onto our queue.
>
> **[6:23](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=383)** Finally, now that we've got our f_values, we put the neighbor and the f_value here.
>
> **[6:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=392)** And then we also have to update our predecessors.
>
> **[6:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=395)** I've used a hyphen instead of an underscore there.
>
> **[6:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=399)** Have to update our predecessors.
>
> **[6:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=403)** So the predecessor for that neighbor, is equal to the current_cell.
>
> **[6:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=410)** And then finally, if none of that worked, so we haven't managed to find a destination, then at that point we return none.
>
> **[6:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=417)** And I'm just going to get rid of a couple of plain lines and also make sure there's nothing else that's badly formatted.
>
> **[7:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=426)** And we're good to go.
>
> **[7:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=426)** So let's test it.
>
> **[7:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=430)** Even though it looks like absolutely nothing happened, remember that's how assertions work.
>
> **[7:13](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=433)** So on line 50, I asserted that the result of running that algorithm within this empty maze, is going to be this path here, that is, 0,0, 0,1, 0,2, 1,2, 2,2 I then asserted that within this maze on line 53, the path would be 0,0, 1,0, 1,1, 1,2, 2,2 and it didn't throw an error, so the algorithm came up with that correct result.
>
> **[7:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=459)** And likewise for the test three, starting on line 61, this goal was unreachable because it was off outside of the dimensions of our maze, so it returned none as expected.
>
> **[7:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=473)** So there we have it.
>
> **[7:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/code-the-a-algorithm-in-python?u=76281980&t=474)** The a_star algorithm implemented in Python for a amaze represented inside a TD list.

> [!info]- Semantic Content
>
> **Code Identifiers:** g_values (7), current_cell (5), new_cost (4), a_star (3), f_value (3)
> **Code Keywords:** let (3), finally, (2), return. (1), this. (1), throw (1)
> **CLI Commands:** python (2), find (2), make (1)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** setup (2)
> **File Paths:** a_star.py (1)
> **Env Vars:** bfs (1)
> **Cross-References:** previous video (1)

#### Challenge: Trace the path of an A* search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=0)** - Here's the challenge to practice your skill with the A* search algorithm.
>
> **[0:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=9)** So using the A* search algorithm, which we have discussed, what is the path from zero, zero to three, three, as shown on this grid?
>
> **[0:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=17)** So I recommend you use a pen and paper or a whiteboard or the grid tracer app.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=22)** And with the grid tracer app, you can set the size to four in the JS file, and you can uncomment the lines that give you coordinates, that you want to work with exactly in the same diagram as this.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=32)** Irregardless of which method you use, your task is to find the path from zero, zero to three, three, using the algorithm.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=38)** And in order to do that you going to have to keep track of those various values so, your G values F values H values.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/challenge-trace-the-path-of-an-a-search?u=76281980&t=45)** This challenge should take approximately 12 to 15 minutes to complete.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** this. (1)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Trace the path of an A* search
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=0)** - [Instructor] And here's a solution for the A-star challenge.
>
> **[0:08](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=8)** So the path produced is zero zero zero one one one one two two two three two three three.
>
> **[0:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=15)** Now note, this is the same path as for BFS.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=18)** And I may have given away that information a little bit too early and you might have known that already and just looked to your previous answer.
>
> **[0:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=24)** But the idea of this challenge is of course to work through the algorithm so I hope you did do that.
>
> **[0:28](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=28)** This the same because both BFS and A-star guarantee a shortest path and that's with certain conditions on the heuristic that's used.
>
> **[0:35](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=35)** But generally speaking, it's going to be the shortest path for both.
>
> **[0:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=38)** The difference is that A-star gets there with far fewer steps.
>
> **[0:41](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=41)** It's a much better or more efficient algorithm.
>
> **[0:45](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=45)** Now, as an additional exercise, if you'd like you can check this result by going into your project, going into mazes.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=52)** You'll see, we have the challenge maze there.
>
> **[0:53](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=53)** That's exactly the same maze as on the challenge slide.
>
> **[0:57](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=57)** And you can use that maze in your A-star.
>
> **[0:59](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=59)** So you can open up your A-star.
>
> **[1:01](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=61)** And then you can write some code.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=63)** You can make a function call passing in that challenge maze.
>
> **[1:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=66)** So it's going to be very similar to, for example, line 53.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=69)** And you can just print the result of the function code if you'd like or you can do an assert statement.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=74)** But basically you've got the ability now to use all of this code that you've written.
>
> **[1:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=78)** And we've given you mazes so you can really just do some of your own exploration with it, make sure you understand how it's working, maybe on a bigger maze if you'd like.
>
> **[1:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=86)** Choice is yours how you work with this project now.
>
> **[1:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/solution-trace-the-path-of-an-a-search?u=76281980&t=89)** Anyway, the main point being this was the path and that's the end of that challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), assert (1)
> **CLI Commands:** make (2)
> **Env Vars:** bfs (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 10. Conclusion

#### Pathfinding algorithms in the course maze GUI
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=0)** - [Instructor] In this video, we're just going to take a quick look at the code that generates the GUI that you've been working with on this course.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=6)** So if we go into GUI Code and let's look at search dot PY.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=12)** So this is an imported file that the GUI uses, and it contains the same data structures that we've been working with.
>
> **[0:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=18)** So it has a priority queue.
>
> **[0:20](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=20)** Then it has the algorithms.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=22)** Now these algorithms are very similar to what we've done in the videos specific to each algorithm with one difference.
>
> **[0:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=29)** And the main difference is that I wanted to create the full path.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=32)** So rather than just coming up with the final path and then the opponent executing that kind of best result, I wanted you to see the path being generated.
>
> **[0:40](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=40)** So I've created this variable called full path.
>
> **[0:44](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=44)** And if the code is found that I've written in all the twists and turns in my return valley, rather than just the final path 'cause I didn't think that was as interesting.
>
> **[0:52](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=52)** And that's true for all of them.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=54)** So in BFS, I've returned to full path, which are built just by adding the current cell to the full path, which starts off as an empty list.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=65)** Same in A-star as well.
>
> **[1:07](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=67)** So that's the main thing in there.
>
> **[1:09](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=69)** But just a couple of other things about the code, just in case you're interested in how it was generated.
>
> **[1:14](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=74)** So basically it's using Python turtle graphics.
>
> **[1:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=77)** So then let's look at the game version.
>
> **[1:18](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=78)** Now, Python turtle graphics is an amazing tool, whatever level of learning you're out of your Python from total beginner to really quite advanced mathematical simulations and modeling and that kind of stuff, Python turtle is very, very powerful and very interesting to work with 'cause you get this instant visual feedback from your code.
>
> **[1:37](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=97)** So I've used that as a module here.
>
> **[1:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=98)** There's a couple of things about it that are slightly beyond what turtle graphics can do.
>
> **[1:43](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=103)** I'll see if I can find an example.
>
> **[1:46](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=106)** So these buttons.
>
> **[1:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=109)** Here we go.
>
> **[1:50](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=110)** The buttons location of the controls.
>
> **[1:51](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=111)** Some people don't know that Python turtle graphics is built on the Tkinter module, Tkinter algorithm.
>
> **[1:56](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=116)** Tkinter, different people pronounce it differently.
>
> **[1:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=118)** So it's built on top of Tkinter, which is a much more powerful library than turtle graphics.
>
> **[2:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=123)** So in a sense, turtle graphics is a subset of Tkinter.
>
> **[2:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=126)** But from turtle graphics, you can access to Tkinter methods.
>
> **[2:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=130)** So my general approach, when I'm doing these kind of GUI is I work within turtle graphics.
>
> **[2:15](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=135)** And if that's all I need then great.
>
> **[2:17](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=137)** But if not, then I bring in some functionality rather than going straight in for Tkinter 'cause usually is more than I need, often more than I need.
>
> **[2:24](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=144)** What I've done is with my turtle graphics, I've used for example, TK-buttons, okay?
>
> **[2:29](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=149)** And a few other features of TK.
>
> **[2:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=152)** And so TK-button which was imported at the top as import Tkiniter as TK is.
>
> **[2:38](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=158)** In order to be able to access those methods, I did have to create a canvas object and that's this line 43.
>
> **[2:47](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=167)** I probably says the most crucial bit of this.
>
> **[2:49](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=169)** If you're interested in working with Python turtle graphics and Tkinter in some combination.
>
> **[2:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=174)** So line 43 is created a canvas object using turtle methods.
>
> **[2:58](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=178)** Screen dot get canvas is a turtle method.
>
> **[3:02](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=182)** But then I can use that canvas, which is a Tkinter object to do to Tkinter related stuff on like for example, putting my buttons on it as we saw in Create controls on line 136.
>
> **[3:16](https://www.linkedin.com/learning/python-data-structures-and-algorithms/pathfinding-algorithms-in-the-course-maze-gui?u=76281980&t=196)** So really that's not the focus of this course at all, but if you're interested in GUI development, quite in turtle graphics and to Tkinter, then there's a lot of ingredients here that you can mix and match in your own projects.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), find (1)
> **Env Vars:** gui (5), bfs (1)
> **Definitions:** is a  (4), is an  (2)
> **Code Keywords:** let (2), module (2), this. (1)
> **Cross-References:** coming up (1), as we saw (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Parting comments and what comes next
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=0)** - [Robin] We've come to the end of this course on data structures and algorithms in Python.
>
> **[0:04](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=4)** We've covered a lot of material.
>
> **[0:06](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=6)** I hope you have found it is interesting to follow as I did to make it.
>
> **[0:10](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=10)** I want to make a few parting comments.
>
> **[0:12](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=12)** There are many different flavors of the algorithms we have covered, and it's easy to get overwhelmed if you look at lots of different articles and videos on the internet to supplement your learning.
>
> **[0:22](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=22)** I suggest sticking with the versions in this course until you are very confident with how they work.
>
> **[0:26](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=26)** Once you have this foundation, it will be easier to keep your bearings when you come across alternative versions.
>
> **[0:32](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=32)** And you'll also be able to recognize the ways in which apparently different implementations are in fact very similar in essence.
>
> **[0:39](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=39)** I also want to remind you that we've used a special case of a graph in this course, that is a graph represented as a 2D list of a row, column coordinates.
>
> **[0:48](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=48)** Many of the versions you will see of the algorithms we have covered will refer to more general graphs.
>
> **[0:54](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=54)** Having studied the algorithms in the way we have here will put you in an excellent position to understand more general cases of pathfinding within a graph.
>
> **[1:03](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=63)** What comes next depends on your goals.
>
> **[1:05](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=65)** You may wish to take an academic approach and look in more detail at graphs and graph algorithms, for example.
>
> **[1:11](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=71)** You may also wish to look into algorithmic efficiency in terms of both time and memory, a topic we have only mentioned in passing in this course.
>
> **[1:19](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=79)** You may also be inspired to use some of the ideas from the provided GUI code, combined with your own new understanding of algorithms and data structures in your own games and more serious projects.
>
> **[1:30](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=90)** Whatever you do next, I wish you all the best.
>
> **[1:31](https://www.linkedin.com/learning/python-data-structures-and-algorithms/parting-comments-and-what-comes-next?u=76281980&t=91)** Thank you for taking this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (1)
> **Env Vars:** gui (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [robin] (1)


## Instructor

- [[Robin Andrews]]

## Resources

- Exercise files available

## Skills Covered

- Data Structures
- Python (Programming Language)
- Algorithms

## Path Context

### In [[Advance Your Skills in Python]]
← [[Python- Design Patterns]] | **3 of 7** | [[Python Automation and Testing]] →

### In [[Master Python for Data Science]]
← [[Advanced Python- Working with Databases]] | **4 of 8** | [[Python Data Structures- Linked Lists]] →

## Appears In

- [[Advance Your Skills in Python]]
- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Trees]] — Python (Programming Language), Data Structures
- [[Python Data Structures- Linked Lists]] — Python (Programming Language), Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Python (Programming Language), Data Structures
- [[Practice It- Python Data Structures]] — Python (Programming Language), Data Structures
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)

---

[↑ Back to top](#)