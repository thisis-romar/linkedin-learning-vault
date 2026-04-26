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
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Python Practice- Object-Oriented Programming]]'
next_courses:
  - '[[Python Projects- Create an Interactive Quiz Application]]'
path_nav: '[{"path":"Python Hands-On Practice","position":6,"total":14,"prev":"Python Practice- Object-Oriented Programming","next":"Python Projects- Create an Interactive Quiz Application"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/game-programming
status: not-started
created: 2026-04-21
---

![Building the Classic Snake Game with Python](https://media.licdn.com/dms/image/v2/C560DAQHnKo9bVeGWvg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634664629182?e=2147483647&amp;v=beta&amp;t=tce3cMRiOhSI0qMKw5At4vvqIV1ZIrudnLjf6DKUoNo)

# Building the Classic Snake Game with Python

> In this course, instructor Robin Andrews shows you how to put together what you need to know to build the Python version of a classic Snake game. Robin introduces you to turtle graphics and how you can use and control animation using Python turtle graphics. He explains global variables and shows you how to draw with turtle graphics by using stamps. With these pieces in place, it’s time to work on 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python) | 1h 17m | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Robin Andrews]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/snake-game-python-2896343)

## Skills Covered

- Python (Programming Language)
- Game Programming

## Table of Contents

### Introduction

#### Take your Python skills to the next level
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=0)** Want to take your Python skills to the next level and have great fun along the way?
>
> **[0:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=4)** The snake game has become a classic since it appeared on mobile phones a few years back.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=8)** Programming this game is a great opportunity to consolidate your existing Python knowledge and to learn important new concepts and techniques.
>
> **[0:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=16)** Hi, I'm Robin Andrews. I'm a computer science teacher based in the U.K.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/take-your-python-skills-to-the-next-level-23405502?u=76281980&t=20)** I invite you to join me on this exciting project-based course on LinkedIn learning.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a quick checklist of prior knowledge that it would be helpful to have to get the most from this course.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/what-you-should-know?u=76281980&t=5)** Don't worry though if some of these topics are a bit hazy, as I will explain the code as we go along.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Python Turtle Graphics

#### Meet turtle graphics
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=0)** - Instructor] Turtle graphics is a popular educational tool for teaching and learning about programming.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=5)** And for good reason, it is awesome.
>
> **[0:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=7)** In my opinion, it is one of the best tools there is for learning how to program with Python.
>
> **[0:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=11)** With it, you can progress from total beginner to mastering important advanced programming concepts.
>
> **[0:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=16)** Turtle graphics was created in the 1960s when the logo programming language was extended to control the turtle robot, a simple robot that looked a bit like a turtle and had a pen attached, which would draw on a large piece of paper on the floor.
>
> **[0:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=29)** When writing programs with Turtle graphics, you get instant visual feedback from your code, so you can see clearly what is happening and how it works.
>
> **[0:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=37)** When you install Python with a standard installation, it comes with an IDE called IDLE, which is like a beginners IDE.
>
> **[0:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=45)** And in IDLE, there is a help menu.
>
> **[0:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=47)** And if you go to Turtle Demo in the help menu, then you'll see there's some really interesting sample programs for turtle graphics.
>
> **[0:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=54)** So you click on Examples.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=56)** And by the way, if you're on Mac, you would access IDLE by going into a terminal and typing IDLE 3 and then pressing Enter.
>
> **[1:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=65)** So there's this selection of example programs.
>
> **[1:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=67)** So, for example, there is a planet and moon animation.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=71)** You can see the code here on the left.
>
> **[1:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=73)** This uses object oriented programming.
>
> **[1:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=75)** So it's very interesting just in terms of the code to have a look at what's going on.
>
> **[1:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=79)** But the actual result is this little animation here.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=88)** And that's one of them.
>
> **[1:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=92)** There's another one, which is Nim, which is the game of Nim, which is a strategy game where you have to remove sticks or coins or whatever you're using.
>
> **[1:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=100)** Press space bar to start.
>
> **[1:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=102)** Okay, so the computer's played and then I select.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=105)** It's the black ones, I guess, I'm removing.
>
> **[1:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=107)** So I click on there.
>
> **[1:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=110)** So that's an implementation of Nim.
>
> **[1:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=112)** And again, you can see the code over here on the left.
>
> **[1:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=115)** Another example, Two Canvases.
>
> **[1:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=116)** This shows you, you can actually have two turtle graphics windows going at once.
>
> **[2:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=122)** That's quite useful.
>
> **[2:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=124)** And let's just look at one more.
>
> **[2:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=126)** So maybe the ground dance.
>
> **[2:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=130)** There we go.
>
> **[2:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=131)** So this is a really nice animation.
>
> **[2:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=133)** With relatively little code. If you look here on the left, we're not using a lot of commands, but we're getting this really quite impressive animation going on.
>
> **[2:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/meet-turtle-graphics?u=76281980&t=142)** So these are some examples of, what you can do with Turtle graphics.

> [!info]- Semantic Content
>
> **Env Vars:** idle (4), ide (2)
> **Definitions:** is a  (5)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** python (2)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### Working with the repository for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=0)** - [Instructor] Before we get started with some actual coding, I just want to quickly talk about the GitHub repo for this project.
>
> **[0:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=6)** So if you go to the URL provided, you'll see that we have a repository for the project, and probably the easiest way to get the code is to download the ZIP file and unzip it.
>
> **[0:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=15)** You can also copy the URL and you can use a terminal to clone the repo.
>
> **[0:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=19)** When you want to select a branch, if you go to this button here where it says main at the moment, at the moment, I only have that branch, but many of the videos will have their own branches and they will appear in this menu, and you can select the relevant one.
>
> **[0:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=31)** If we have a B at the end of a chapter name, so for example, 01_02b, that'll be the state at the beginning of the video.
>
> **[0:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=38)** And then, if we have an e at the end of the chapter name, that will be the state at the end of a particular chapter.
>
> **[0:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=44)** If you are working with a local version of the repository for this course, then you'll need to know how to check out the various branches.
>
> **[0:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=50)** Now, if you have PyCharm, you can simply go to Git and select Branches, and you'll see all the branches listed.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=56)** The current one, having this little symbol next to it, showing that at the minute, 03_02e is checked out.
>
> **[1:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=62)** Now, the naming convention is the beginning state for a particular video, has a b at the end of it, and the end state has an e at the end of it.
>
> **[1:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=70)** So 03_02E is the state at the end of chapter three, video two.
>
> **[1:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=75)** You can also do this in a terminal, which on PyCharm, you can open without F12 on Windows, and you can check out a particular branch.
>
> **[1:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=83)** So we can do git checkout, and let's try 02_03b.
>
> **[1:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=90)** I think there's a beginning one for that branch.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=93)** Okay, so we switched to that branch and you'll see that the file structure, the project directory, updates to reflect the state for that particular state of development.
>
> **[1:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=102)** So that's how you work with branches locally.
>
> **[1:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/working-with-the-repository-for-this-course?u=76281980&t=104)** Or you can just do it all on GitHub.

> [!info]- Semantic Content
>
> **Tools:** github (2), terminal (2), pycharm (2)
> **Env Vars:** url (2), zip (1), f12 (1)
> **UI Navigation:** go to (3), select the (1)
> **Exercise Files:** github repo (1), download the (1), zip file (1), clone the repo (1)
> **CLI Commands:** git (2), unzip (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)

#### A starter template for turtle graphics programs
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=0)** - [Instructor] So let's make a start.
>
> **[0:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=2)** Python turtle graphics caters for different levels of ability and experience, and because of this, there are sometimes different ways of achieving the same result.
>
> **[0:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=10)** There are two styles of coding, which you can use with Python turtle graphics, which is sometimes referred to as interfaces.
>
> **[0:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=16)** These are called the procedural interface and the object-oriented interface.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=20)** What I'm going to do now is show you an example of the procedural interface.
>
> **[0:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=23)** So I'm going to create a new file.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=26)** Python file.
>
> **[0:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=28)** And I'm going to call this procedural.py.
>
> **[0:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=35)** And this is the kind of code you'll be creating if you're a beginner with Python turtle graphics and you're not interested in going particularly far with it, you're just using it to kind of mess around.
>
> **[0:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=42)** So you would do from turtle import all.
>
> **[0:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=50)** And then simply set a color by doing color.
>
> **[0:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=57)** And then we can have forward, which can be abbreviated to fd.
>
> **[1:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=61)** So forward 100 pixels, right 90 degrees, and then forward 100 pixels again.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=71)** I'm just going to copy paste this because there's no particular need to type it.
>
> **[1:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=78)** And then those two lines.
>
> **[1:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=83)** Okay, and then when we're done, we have this command done that just sets everything in motion.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=88)** So this is a procedural turtle graphics program, and if I run it, then you'll see we get a square.
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=95)** So we didn't have to create any turtles or anything, we just used it as a full turtle and told it to go forward to rotate 90 degrees, go forward again four times, and then we had a square.
>
> **[1:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=104)** So I'm just going to tied up that code if needed.
>
> **[1:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=107)** It's all good.
>
> **[1:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=108)** So that's the procedural interface, and it's great for beginners.
>
> **[1:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=112)** But we want to do more advanced stuff, so I'm going to show you now how to do object-oriented programming with turtle graphics.
>
> **[1:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=118)** So create a new file.
>
> **[2:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=123)** oop_turtle.py.
>
> **[2:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=125)** So let's make a few comments just to say what I'm doing.
>
> **[2:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=128)** So I'm importing the turtle graphics module,
>
> **[2:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=136)** which is done simply with import turtle.
>
> **[2:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=140)** Notice that I'm not importing everything using that star syntax here because I want to be a bit more precise.
>
> **[2:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=145)** Now I'm going to create a turtle, so this is a turtle object, to do your bidding.
>
> **[2:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=155)** And I'm going to call it my_turtle.
>
> **[2:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=158)** And it's going to equal turtle, so that's the module, .Turtle, that's the class within the module, which represents a turtle object.
>
> **[2:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=167)** So the turtle object of the turtle module.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=170)** And then I'm going to set some properties in my_turtle.shape.
>
> **[2:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=176)** I'm going to set it to be turtle shaped.
>
> **[2:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=179)** And a set a color.
>
> **[3:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=185)** Red.
>
> **[3:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=187)** So now, your turtle awaits your command.
>
> **[3:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=196)** So we'll do a sample command my_turtle.forward, 100.
>
> **[3:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=202)** So this, it looks like a more complicated way of doing what we just did, but there's a good reason for it.
>
> **[3:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=206)** We have a lot more control over what happens in our program if we use the OOP interface.
>
> **[3:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=211)** And this is a sample command.
>
> **[3:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=215)** And then we have turtle.done.
>
> **[3:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=220)** And let's just make a comment there that that is the statement.
>
> **[3:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=227)** So turtle.done or an equivalent is needed at the end of all your turtle programs, just to set things up properly and so you can exit by clicking the little cross in the turtle graphics window.
>
> **[3:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=236)** And I'm just going to tidy up my code again.
>
> **[3:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=239)** Reformat Code.
>
> **[4:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=240)** Very useful feature of PyCharm, it just puts all the right spacing and stuff in.
>
> **[4:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=244)** So now when I run that.
>
> **[4:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=247)** Okay, not as impressive as the last program even, but the syntax here is what we're going to be using for the rest of the course.
>
> **[4:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=253)** So what I've actually done is I've provided a starter template for turtle graphics programs.
>
> **[4:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=260)** Very similar to the last program, just a few more details.
>
> **[4:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=262)** So we've got a couple of constants.
>
> **[4:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=263)** So we're setting the width and height of our turtle window, which then gets used here on line 10 to create a window of the desired size based on those constants.
>
> **[4:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=273)** This is all the same.
>
> **[4:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=275)** This is my_turtle, that's just creating a turtle.
>
> **[4:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=278)** But here is the screen, so this is important.
>
> **[4:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=279)** So, by creating a screen object, we get a lot more control over our turtle graphics window.
>
> **[4:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=285)** So we create a screen with turtle.Screen with a capital S there on the screen.
>
> **[4:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=289)** And then we can set the dimensions, like on line 10, we can set the title, we can set the background color, and all sorts of other stuff.
>
> **[4:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=296)** But it's very useful to have reference to a screen object, so that's why I've done that.
>
> **[4:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=299)** And then this is the same, your turtle awaits your command, and the end is the same as well.
>
> **[5:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/a-starter-template-for-turtle-graphics-programs-23401708?u=76281980&t=304)** So that's a template you can use as a kind of starting point for your own programs, and it will also be the starting point for our snake game.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), module (4), let (3), this, (2)
> **CLI Commands:** python (4), make (3)
> **Code Identifiers:** my_turtle (4), oop_turtle (1)
> **Definitions:** is a  (3)
> **File Paths:** procedural.py (1), oop_turtle.py (1)
> **Exercise Files:** template (2)
> **Env Vars:** oop (1)
> **Tools:** pycharm (1)

#### Animation with Python turtle graphics
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=0)** - Before we dive into the snake game itself, we're going to look at how to do animation with python turtle graphics.
>
> **[0:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=6)** There's a lot of animation capability built into turtle graphics by default.
>
> **[0:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=9)** For example, when you move a turtle forward using something like my turtle dot forward 100, my turtle does indeed move forward, which is a type of animation.
>
> **[0:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=17)** However, sometimes you want more control of how the animation works and we can do this by turning off the default animation behavior using screen dot tracer zero, and instead, manually updating the display when we wish, usually inside a loop with a timer attached.
>
> **[0:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=32)** Let's have a look at this now.
>
> **[0:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=36)** So this is the turtle graphics program template from the last chapter and we're going to modify it to show you this principle.
>
> **[0:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=42)** So, where we're creating our screen here on line 12, we're going to add another line and it's going to be screen, dot tracer and I'm going to put zero.
>
> **[0:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=52)** You can also put false they're equivalent.
>
> **[0:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=54)** And what this does is it turns off the automatic animation.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=59)** Now there's actually some methods where it will still update the screen anyway, because that's built into the method itself.
>
> **[1:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=65)** Don't worry about that for now.
>
> **[1:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=66)** But basically most of the default animation will be turned off by this screen dot tracer zero, or screen dot tracer false.
>
> **[1:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=72)** So that means we're now manually controlling the animation and we're going to do that within a function.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=77)** And the function's going to be called loop turtle.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=81)** And we're going to do my turtle dot forward, just one pixel and then we're going to rotate it.
>
> **[1:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=89)** So my turtle dot, right, just one degree.
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=94)** And then we're going to update the screen.
>
> **[1:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=99)** Now this is the magic bit ready.
>
> **[1:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=100)** So we do screen dot ontimer.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=105)** So we're creating a timer which is going to call a function.
>
> **[1:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=108)** In this case, the function's going to be move turtle, which is the very function we're currently defining.
>
> **[1:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=113)** Notice that I deleted those parentheses there because I don't want to actually make a function called it.
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=117)** I just want to specify which function is going to be called.
>
> **[2:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=120)** And this is going to be after a particular interval.
>
> **[2:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=122)** Now I'm going to use a constant here, which I haven't yet defined.
>
> **[2:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=126)** So I'll just quickly define that now.
>
> **[2:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=130)** And let's do something quite quick, we'll do something like 20 milliseconds.
>
> **[2:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=135)** So this is the number of milliseconds between screen updates.
>
> **[2:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=141)** Now currently it's not going to do anything 'cause we haven't called this move turtle for the first time.
>
> **[2:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=145)** So hopefully you can see that once we've called it once, it will then call itself again, using this timer, but we have to make that initial call to make things move.
>
> **[2:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=153)** So, let's change this bit of code here on line 27 to set animation in motion.
>
> **[2:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=163)** And we're going to do that just by making an initial call to move turtle.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/animation-with-python-turtle-graphics?u=76281980&t=175)** And as you can see, we've created our own manually controlled animation.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), default. (1), case, (1)
> **CLI Commands:** make (3), python (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - before (1)

#### Global variables
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=0)** - Now is a good time to talk about global variables, as we just used one in the last program.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=5)** This was the variable, my_turtle.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=8)** We're now going to take a little detour to explore this concept.
>
> **[0:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=11)** The snake game program we're going to write makes use of several global variables.
>
> **[0:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=15)** These are variables which exist outside of any functions in a program, but which can be used inside particular functions if required.
>
> **[0:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=22)** You may have heard that global variables are bad and should be avoided.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=26)** However, this is an oversimplification.
>
> **[0:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=28)** While there are many situations where it is a good idea to avoid them, the global keyword exists in Python for a reason, and using global variables for a program like the snake game we're writing makes sense as not doing so would make the program a lot more complex.
>
> **[0:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=41)** Context is important.
>
> **[0:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=43)** To understand how global variables work, let's take a look at an example.
>
> **[0:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=47)** So, if I define a variable called name and I set it equal to Susan And I print the name.
>
> **[0:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=58)** Just make sure everything's working.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=59)** You can see Susan gets printed as expected, so that's fine.
>
> **[1:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=63)** So we have this variable, name.
>
> **[1:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=65)** Now I'm going to define a function.
>
> **[1:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=66)** Def, print, name.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=71)** And I'm going to set name equal to Peter.
>
> **[1:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=79)** And then inside that function, I'm going to print name.
>
> **[1:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=84)** So, let's see what happens.
>
> **[1:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=85)** If I do print name as a function call, what do you think it's going to print?
>
> **[1:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=90)** Think about that.
>
> **[1:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=91)** And that also print name as just the variable itself.
>
> **[1:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=97)** And as always I just like to tidy up my code before running it.
>
> **[1:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=101)** Okay, so think about what the output might be here.
>
> **[1:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=106)** Okay, so we get Susan, Peter, Susan.
>
> **[1:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=111)** So the name variable wasn't modified inside the function.
>
> **[1:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=115)** This is because by default, variables inside functions are local.
>
> **[1:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=119)** They exist only inside the function and are destroyed once the function call is complete.
>
> **[2:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=124)** So in the output, the Susan there is the output of line two.
>
> **[2:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=130)** Then, Peter here is the output from the function call that we made on line 10, which goes into the function and prints the local version of name, which is Peter, but then outside of the function, Susan still exists as a global variable.
>
> **[2:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=143)** So that's what gets printed by line 11.
>
> **[2:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=146)** I'm now going to do file, save as, and I'm just going to call this global two instead of global one, just to show you a slightly different example now.
>
> **[2:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=154)** So, this is going to be the same, but inside of a function we're going to use the global keyword.
>
> **[2:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=162)** And we're going to make this name variable reference the global version of it.
>
> **[2:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=166)** That's the one outside of the function.
>
> **[2:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=169)** So now when we run the code, you can see we get Susan, Peter, Peter.
>
> **[2:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=179)** Can you see why this happened?
>
> **[3:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=181)** Because we use the global version of the variable name inside the print name function, the value of name outside of the function was modified too.
>
> **[3:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=189)** So that means when we called on line 12, we printed name, name had been updated by the assignment that we did on line seven inside of our function.
>
> **[3:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=199)** You can think about scope as a type of visibility.
>
> **[3:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=202)** So if a variable scope is global, it can be seen by the whole program.
>
> **[3:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=206)** If it is local, it can only be seen within the current function.
>
> **[3:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=210)** One detail about global variables that is worth noting is that if a function only needs to read a global variable, there is no need to use the global keyword to make it available to the function.
>
> **[3:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=220)** However, if the global variable is going to be modified within the function, the global keyword is needed.
>
> **[3:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/global-variables?u=76281980&t=226)** You will see examples in this course of both of these situations.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (2), def, (1), default, (1)
> **CLI Commands:** make (4), python (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** my_turtle (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - now (1)

#### Drawing with stamps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=0)** - The stamp command in turtle graphics is not that well known.
>
> **[0:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=4)** And as a result, programmers often do things in a more complicated way than they need to.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=8)** It's a really useful feature, and I'm going to show you how it works now.
>
> **[0:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=11)** So we have here the starter template, and I'm going to modify this to make it into a stamping program. So a lot of it's going to be the same.
>
> **[0:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=18)** So we've got our constants for the dimensions.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=20)** We've got a screen that we've created.
>
> **[0:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=22)** It's not going to be called Generically Programmed Title.
>
> **[0:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=24)** It's going to be called Stamping and we can keep it Cyan, nice enough color.
>
> **[0:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=30)** I'm going to change the name of my turtle.
>
> **[0:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=32)** And actually this is a useful feature of Pie Charm.
>
> **[0:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=34)** If I want to refactor this, So, I don't have to do it every time, I can just rename every instance and call it stamper.
>
> **[0:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=42)** It's a good enough name for a stamper, a turtle that stamps.
>
> **[0:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=46)** Okay. So we create a turtle.
>
> **[0:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=48)** That's going to do our stamping.
>
> **[0:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=49)** We set some properties of it.
>
> **[0:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=51)** So we give it a shape of turtle.
>
> **[0:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=52)** In fact, this time I'm going to use the square shape.
>
> **[0:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=55)** It's more useful and we'll have it red. That's fine.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=59)** Now, there's another property we need to set, which is the shape size. So, stamper.shapesize, and I'm going to do 50 divided by 20.
>
> **[1:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=70)** Now this can be a little bit confusing.
>
> **[1:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=72)** Basically, 20 is the default size of a square shape in turtle graphics.
>
> **[1:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=78)** So if we do 50 divided by 20, it means that our stamp will be 50 pixels.
>
> **[1:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=82)** It's not entirely logical to be honest, but this definitely is the way to do it.
>
> **[1:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=85)** If you want to have pixel control over the size of a turtle, then just state the number of pixels and divide it by 20 and you'll be in good shape.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=93)** So, then I will do stamper.stamp and this in the current location of the turtle will make a stamp.
>
> **[1:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=103)** And then I'm going to move it stamper.penup so that it doesn't make a mark while it's moving.
>
> **[1:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=109)** And I'm going to change the size before doing the next stamp.
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=117)** And this time I want the more smaller ones, I'll do 10 divided by 20, and then move it stamper.goto, to somewhere different from where it was to 100, 100 and then stamp again.
>
> **[2:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=135)** Okay. And as usual just tidy my code or the, looks like it was fine already.
>
> **[2:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=140)** And just before I've run it, I'm going to remove this part of the original template because we don't need that anymore.
>
> **[2:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=146)** So then when we run it, you can see we get two stamps.
>
> **[2:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=149)** So the first one was made when the stamper.shape size was 50 pixels.
>
> **[2:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=153)** And that was in the original location, which by default was 0, 0.
>
> **[2:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=157)** And then we lifted up the pen so that it didn't make a mark while it moved. It moved to this new location 100, 100.
>
> **[2:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=163)** And this time the size was 10, just 10 pixels.
>
> **[2:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=167)** And we stamped, and this was the result.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=170)** Okay. So it's a really useful feature.
>
> **[2:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=172)** Some of the things you can do with it, Board Games, if you want to make a Chess Board, something like that, very, very useful.
>
> **[2:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=177)** In fact, that's a very good exercise, 2D Games, such as snake, which we're making or Tron clones.
>
> **[3:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=183)** If you want to do stuff with mazes, it can be really useful, if you want to do Pixel Art.
>
> **[3:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=186)** And I'm sure you can think of other examples as well.
>
> **[3:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/drawing-with-stamps?u=76281980&t=188)** So it's very useful feature.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** this, (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)


### 2. The Snake Game

#### Snake representation and movement
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=0)** - In this video, I'm going to give you a conceptual overview of how the snake in our game will be represented and how it will move.
>
> **[0:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=7)** If you like, before continuing watching, have a think about how you might begin to implement this yourself.
>
> **[0:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=12)** So in our version, we're going to represent the snake as a list of pairs of X, Y coordinates.
>
> **[0:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=17)** So you can see here we have a list containing other lists, smaller lists, and each of those inner lists contains an X and a Y coordinate.
>
> **[0:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=24)** The segments of the snake are currently lying all horizontally with Y coordinates of zero.
>
> **[0:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=29)** Now, for this demonstration, consider the leftmost list item to be the tail and the rightmost to be the head.
>
> **[0:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=35)** So here's that representation shown on a grid.
>
> **[0:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=38)** So the green squares are the segments of the snake.
>
> **[0:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=41)** Now, the first thing we do is you make a copy of the head, and then we update the coordinates of that head to the new location and append it.
>
> **[0:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=50)** So now there's five segments.
>
> **[0:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=51)** So we need to remove the last segment so the snake doesn't change length.
>
> **[0:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=55)** And then finally turn everything back to the original color.
>
> **[0:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=58)** This is now the new position of the snake, ready to make another move.
>
> **[1:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=61)** So again, we make a copy of the head.
>
> **[1:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=64)** We update the position of the head and append it.
>
> **[1:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=67)** Then we remove the last segment.
>
> **[1:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=69)** And again, this is the new position.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=71)** So let's look at that in just a little bit more detail.
>
> **[1:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=73)** So to begin with, we have this list of lists, and by the way, lists of lists are quite common in Python, and they're no cause for concern.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=81)** You can nest lists as deeply as you like.
>
> **[1:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=83)** In this case, we only have one level of nesting, and this kind of list is often referred to as a 2D list.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=88)** If you want to deep dive into Python 2D lists, I have a course on the subject in the LinkedIn Library, which you may like to check out.
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=95)** So let's just go through that process again to make sure you understand it.
>
> **[1:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=98)** So to move, we first create a new list item for the new head.
>
> **[1:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=102)** This is looking a bit more at the code now, rather than just the concept.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=105)** So we create a new segment, which is the right-hand segment, and it's a copy of the existing right-hand segment.
>
> **[1:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=111)** And they must be copied; otherwise, the original would be modified by the next step.
>
> **[1:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=114)** So when we update it, we don't want to lose that original one; okay?
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=117)** So new_head is now the same coordinates as the old head of the snake.
>
> **[2:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=122)** But then what we do is we increment the X coordinate in this example.
>
> **[2:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=125)** So new_head[0], this means the X coordinate of that new segment that we've created, we increment its X coordinate by 20.
>
> **[2:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=132)** So now the coordinates of that segment are 80 comma zero; okay?
>
> **[2:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=137)** And we're just using plus equals here as a shorthand for new_head[0] equals new_head[0] plus 20, so a very common shorthand to use.
>
> **[2:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=144)** And then we append this new cell that we've created to the snake that we've already got.
>
> **[2:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=149)** And it goes to the right-hand side.
>
> **[2:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=151)** So you can see now we have five items.
>
> **[2:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=153)** So this new 80 comma zero segment has been appended to the end; okay?
>
> **[2:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=158)** That's the right-hand side, which we're calling the head; okay?
>
> **[2:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=160)** So we now have five segments, which has awfully changed the original length for the snake, so we don't want to do that.
>
> **[2:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=165)** So what we then do is we pop the first element of the list, that's the zero, zero.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=170)** It's the leftmost item.
>
> **[2:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=172)** And then the snake will return to its original length.
>
> **[2:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=174)** And that's the process.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-representation-and-movement?u=76281980&t=175)** And we'll look in much more detail at the code in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), python (2)
> **Code Identifiers:** new_head (4)
> **Code Keywords:** let (2), case, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - in (1)

#### Basic snake movement program
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=0)** - [Narrator] We're now going to look at how the basic snake movement can be implemented in Python.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=5)** We're going to use stamps to make marks on the screen as shown in a previous video.
>
> **[0:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=9)** And what I have here is the stamp code from that previous video, but I've saved it with a new name, which is basic name movement, and we're going to edit it so that it does what we want it to do for this chapter.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=20)** So, first of all, let's just make a few changes outside of the main movement function.
>
> **[0:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=25)** I'm going to change that comment to something just a little bit more legible.
>
> **[0:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=31)** Finished nicely.
>
> **[0:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=32)** Okay. So we need something like that at the end of all of our turtle programs.
>
> **[0:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=37)** Then we're going to add another constant, which is delay.
>
> **[0:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=41)** And you saw this in a previous video, when we were talking about animation in general.
>
> **[0:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=45)** Let's do 400 failure. Obviously you can change this.
>
> **[0:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=48)** This is milliseconds between frame updates.
>
> **[0:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=50)** So this is going to be relatively slow, just so we can see what's happening.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=59)** Then in terms of our screen, we're going to create a screen as usual.
>
> **[1:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=63)** We're going to set it up using these constants width and height.
>
> **[1:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=67)** We'll give it a different name this time.
>
> **[1:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=69)** This is now a snake.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=71)** It's the first program we're actually doing snake.
>
> **[1:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=73)** And let's give her a different background color.
>
> **[1:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=75)** Let's give it pink.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=77)** I've actually chosen this because it reminds me of a very old Atari game on a very old console, but that's just a personal preference for these retro things.
>
> **[1:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=86)** You can choose whatever color you like.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=88)** In fact, you know, the colors available in turtle graphics, pretty much anything you can think of will be available and you can use hex codes as well.
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=94)** But another important thing we need to do is screen dot tracer.
>
> **[1:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=100)** And we discussed this in a previous video.
>
> **[1:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=102)** This disables the automatic animation, giving us more or less full control of when we update the screen.
>
> **[1:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=109)** Alright, having said that some of the Turk commands will automatically call a screen update in the background.
>
> **[1:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=113)** So it doesn't give you full control, but it basically turns off animation.
>
> **[1:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=118)** Okay. So, turning off automatic animation.
>
> **[2:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=121)** Now, in terms of our stamper, we're going to have a square stamper. That's fine.
>
> **[2:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=124)** The color doesn't really matter, but let's not put a color and then it'll be the default black, because that's the one I'm using for the rest of this game.
>
> **[2:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=131)** Again, you can change to any color you like there.
>
> **[2:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=134)** I'm not going to change the shape size. In fact, all of this can go cause this was relevant to the previous video.
>
> **[2:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=138)** But I am going to do pen up.
>
> **[2:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=144)** So that means it's not going to make marks as it moves.
>
> **[2:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=147)** Okay. That's quite important.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=148)** Otherwise you get a very messy screen.
>
> **[2:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=150)** Okay? So we've got a stamper turtle.
>
> **[2:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=151)** Its shape is square and it's not drawing on the screen.
>
> **[2:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=155)** Okay. So now, let's create our snake representation as the list of lists.
>
> **[2:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=162)** And this is what we had on the slide in the previous video, we're going to call it snake it's a global variable and there's going to be a list of lists.
>
> **[2:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=169)** The first pair is going to be zero, zero.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=170)** Then we're going to have 20 comma zero.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=175)** This is the initial position of the snake or the segments of the snake, 40 comma zero and 60 comma zero.
>
> **[3:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=186)** Okay. So this is our representation of the snake in Python.
>
> **[3:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=190)** Now we're going to draw the snake first off and we're going to do that by using a for-loop. So for segment in snake, we're going to do stamper dot go to, and it's going to be the X coordinate and then the Y coordinate.
>
> **[3:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=208)** So that's segment zero and segment one, Okay so, zero will be the X coordinate in each pair and segment one will be the Y coordinate in each pair.
>
> **[3:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=223)** So we go to the place we want to go to, and then we do stamper dot stamp.
>
> **[3:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=232)** Let's just tidy that up and run it and see what we get.
>
> **[3:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=238)** Okay.
>
> **[3:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=239)** So you can see this actually draws the snake for the first time.
>
> **[4:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=242)** It takes the list of lists of coordinate pairs, and it turns them into stamps by moving to the location and then making a stamp.
>
> **[4:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=248)** Okay. So that was drawing the snake for the first time.
>
> **[4:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=250)** So that's a good start.
>
> **[4:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=252)** However, for the snake movement, we need a movement function.
>
> **[4:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=256)** And what we had before was a function.
>
> **[4:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=260)** I think it was called move turtle.
>
> **[4:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=262)** And we're going to call this one, move snake.
>
> **[4:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=263)** So Def move snake. Doesn't take any arguments.
>
> **[4:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=269)** Now the first thing we're going to do is we are going to clear all the existing stamps that have been made.
>
> **[4:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=274)** So we do stamper dot clear stamps.
>
> **[4:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=282)** That gets rid of all the stamps that the stamp has made.
>
> **[4:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=286)** So that gets rid of the existing snake, which has been drawn.
>
> **[4:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=291)** Right now, we're going to do that business that we talked about on the slide.
>
> **[4:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=293)** So we're going to create a new head segment.
>
> **[4:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=295)** I'm going to call it a new head, it's going to be equal to the snake.
>
> **[5:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=302)** And it's going to be the last segment in the list.
>
> **[5:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=305)** And it's going to be a copy of it because if we don't make a copy of it, then when we update it, it will actually change the original, which we don't want.
>
> **[5:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=313)** Then you had that, this, the X coordinate.
>
> **[5:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=317)** Then you had zero plus equals 20.
>
> **[5:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=320)** That means we increment the X coordinate of this new head.
>
> **[5:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=324)** Okay. And then we can actually append it.
>
> **[5:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=326)** So add new head to snake body.
>
> **[5:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=335)** We do that with snake dot append.
>
> **[5:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=339)** The new head.
>
> **[5:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=342)** Then we need to remove the last one.
>
> **[5:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=346)** And we do that using snake dot pop.
>
> **[5:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=349)** And we're going to specify the zero element of the list because we want to remove the left-hand element.
>
> **[5:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=355)** Okay. So we've now updated the representation of the snake internally.
>
> **[5:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=359)** That's that list of lists, but we need to draw it.
>
> **[6:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=361)** So again, draw a snake.
>
> **[6:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=364)** I'm just going to copy this because exactly the same commands for drawing the snake.
>
> **[6:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=371)** However, this still wouldn't be rendered.
>
> **[6:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=373)** So if we wanted to render, then we have to refresh the screen.
>
> **[6:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=376)** So that's going to be screen dot update.
>
> **[6:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=382)** And then we need to do it lots of times.
>
> **[6:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=385)** And we're going to do that by doing turtle dot on timer.
>
> **[6:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=390)** So we're creating a timer whose function is move snake.
>
> **[6:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=396)** Which is the function we are currently defining.
>
> **[6:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=399)** And we're going to do it with intervals of delay.
>
> **[6:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=407)** Okay so now when I run this And nothing happens.
>
> **[6:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=412)** Now, why is that?
>
> **[6:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=413)** Okay, so nothing's happening.
>
> **[6:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=414)** And that's because we haven't actually set the thing in motion.
>
> **[6:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=417)** So we need to set the thing in motion by making that initial call to move snake.
>
> **[7:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=425)** All subsequent calls will be handled by that timer that we created.
>
> **[7:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=430)** But without that initial call, the whole thing never gets to kick off.
>
> **[7:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=434)** Okay.
>
> **[7:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=435)** So then that should work now.
>
> **[7:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=437)** Okay and you can see it's moving its way along the screen.
>
> **[7:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=443)** The snake disappears off screen before long, but this is a great start.
>
> **[7:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/basic-snake-movement-program?u=76281980&t=446)** We can add checks for border collisions and food collisions, et cetera, and also changed the direction of the snake later on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (5), this. (1), this, (1)
> **CLI Commands:** make (4), python (2)
> **Cross-References:** previous video (4), we discussed (1), we talked about (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Controlling the snake's direction
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=0)** - We're now going to look at how to control the snake's direction.
>
> **[0:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=3)** Controlling the snake's direction involves diving into the concept of events and event callback functions.
>
> **[0:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=9)** Before getting into that though, we first need to create two new variables.
>
> **[0:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=12)** One is a global variable called snake directions.
>
> **[0:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=15)** The other is a Python dictionary containing offsets which determine how much the snake moves in each direction.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=20)** So let's do that now.
>
> **[0:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=21)** So let's put our offsets up here at the top along with our constants, even though it's not technically a constant because of the dictionary.
>
> **[0:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=29)** Offsets equals a dictionary and it's going to have up.
>
> **[0:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=34)** It's going to give us an offset of 0,20, because that's plus twenty in the Y-direction.
>
> **[0:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=39)** Down is going to give us an offset of 0 and minus twenty or negative twenty.
>
> **[0:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=48)** And left will give us an offset of negative 20,0.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=56)** Zero for the y, negative twenty for the x.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=59)** And then right is going to give us an offset of 20,0.
>
> **[1:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=66)** Okay, so that's our offsets.
>
> **[1:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=68)** Then this snake direction we're going to add outside of any functions.
>
> **[1:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=73)** It's just going to be after we create this snake.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=77)** And that's going to be snake direction.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=81)** Initially, it's going to be set to up.
>
> **[1:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=86)** And this is a global variable.
>
> **[1:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=90)** With that done, we can now talk about the event loop.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=93)** You use a event loops all the time when working with computers.
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=95)** Although you may well not be aware of it.
>
> **[1:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=97)** The basic idea is that a program listens for some kind of event to happen such as a key press or a mouse click.
>
> **[1:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=102)** And in response to particular events, specific actions are preformed.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=105)** In order to be able to listen, regular checks must be made to see if an event has happened.
>
> **[1:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=110)** Hence an event loop.
>
> **[1:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=111)** You've used event loops in your Python Turtle Graphics Programs already.
>
> **[1:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=114)** Do you remember turtles.done for example?
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=117)** What this does is it tells to tkinter which turtle graphics is build on, to wait for the user to click on the "x" on the window title bar to exit the program.
>
> **[2:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=126)** The events we're interested in for our snake game are key presses.
>
> **[2:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=129)** We want to be able to change the direction of the snake when the player presses an arrow key.
>
> **[2:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=132)** So, in order to make our program listen for events, we call listen on the screen object.
>
> **[2:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=138)** So, I'm going to create a new section of code.
>
> **[2:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=139)** I'm going to call it event handlers.
>
> **[2:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=142)** And to start with, we're just going to do screen.listen.
>
> **[2:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=147)** Okay, this tells the screen to listen for events such as collecting key presses.
>
> **[2:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=151)** But now we need to talk about event callback functions.
>
> **[2:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=153)** So, an event callback function is the function which is specified as the required response to a particular event.
>
> **[2:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=159)** So, for example in our game, if the player presses up, we want to call a function that changes the snake's direction to up, and likewise for the other directions.
>
> **[2:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=167)** Now, we're going to specify our callbacks in the following way.
>
> **[2:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=171)** We're going to do screen.onkey.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=175)** So, when a key is pressed, we're going to call go up, that's the name of our function.
>
> **[3:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=180)** Without the brackets, cause it's not a function call.
>
> **[3:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=181)** It's a specification of which function to call.
>
> **[3:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=184)** So, go up and that is when the up key is pressed.
>
> **[3:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=188)** So, that's up with a capital U.
>
> **[3:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=189)** And similarly for the other ones are the control (indistinct).
>
> **[3:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=195)** Go right for when the right key is pressed and go down for when down is pressed.
>
> **[3:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=208)** And go left for when left is pressed.
>
> **[3:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=214)** So, this is how we specify the callbacks for key press events.
>
> **[3:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=217)** So, on key the function we want to call and then the key that it responds to.
>
> **[3:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=223)** Now we haven't defined these yet.
>
> **[3:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=225)** Go up, go right, go down, and go left.
>
> **[3:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=226)** So, we're going to do that next.
>
> **[3:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=229)** So, def go up.
>
> **[3:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=235)** So, at this point we need our global variable snake direction.
>
> **[3:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=239)** And I'm making it global, cause we might be updating it.
>
> **[4:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=243)** Or we're using the global key word, because we might be updating the snake direction.
>
> **[4:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=247)** As I said before if you're only reading it, you don't need the global key word.
>
> **[4:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=250)** Now, here we just want to put in an if statement so that we don't accidentally press the opposite direction to what we're going and create a collision.
>
> **[4:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=257)** So, we're going to rule out that possibility.
>
> **[4:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=263)** So, what I mean is if snake direction (indistinct) suggestions.
>
> **[4:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=268)** If doesn't equal down.
>
> **[4:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=273)** Then we can update the snake direction.
>
> **[4:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=276)** Snake direction equals up, okay.
>
> **[4:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=279)** So, if you think about it, you want to move the snake up, but you only want to do that if you're not going down.
>
> **[4:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=287)** Okay, now the rest if these are very similar, so I'm just going to copy-paste.
>
> **[4:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=290)** And later on we'll look at more a efficient way of not having to have multiple functions for very similar behavior, but that comes later.
>
> **[4:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=299)** So, we've got go up, so that's going to be go right.
>
> **[5:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=302)** And this is going to be go down.
>
> **[5:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=307)** And this is going to be go left.
>
> **[5:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=309)** And lets just get all of these directions right now.
>
> **[5:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=312)** So, we've got go right.
>
> **[5:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=314)** So, if we're not going left.
>
> **[5:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=319)** Then we go right.
>
> **[5:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=326)** And then if we're going down.
>
> **[5:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=329)** If we're not going up.
>
> **[5:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=331)** Then we want to go down.
>
> **[5:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=334)** And if we go left.
>
> **[5:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=338)** If we're not going right, then we go left.
>
> **[5:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=341)** Okay, so that's the event callback functions.
>
> **[5:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=343)** Now, the only other change we need to make is inside of our move-snake function.
>
> **[5:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=348)** I'm not just going to update the x-coordinate which we did for our demonstration program, but we actually need to change both directions.
>
> **[5:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=354)** Okay, the x and the y-coordinate.
>
> **[5:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=356)** So, I'm going to do new head zero plus equals and I'm going to get my offsets from the offsets dictionary, all right.
>
> **[6:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=363)** So, the x-coordinate is going to be equal to the first one of those.
>
> **[6:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=368)** So, it's going to be plus equals offsets of the particular snake direction.
>
> **[6:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=374)** And this is going to be the zeroth one of those.
>
> **[6:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=378)** And what do the other one... The new head one.
>
> **[6:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=381)** This means the y-coordinate is going to be the offset for the particular snake direction and that's going to be one.
>
> **[6:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=386)** So, you might need to think about what's going on there a bit.
>
> **[6:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=389)** New head zero and new head one of the x y coordinates of that new segment and we're incrementing them by an amount specified in our offsets dictionary which is up here for the particular direction which the snake is heading in.
>
> **[6:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=403)** Okay, lets tidy the other one up.
>
> **[6:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=407)** And see what happens.
>
> **[6:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=410)** And here it is.
>
> **[6:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=412)** So, the arrow key's now control the direction of the snake.
>
> **[6:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=415)** Now, if you aren't careful it will disappear off screen and you might have trouble bringing it back on screen.
>
> **[7:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=422)** Could even make an interesting little challenge of it's own.
>
> **[7:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=427)** There it is.
>
> **[7:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=428)** You can change the speed as well obviously.
>
> **[7:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=429)** So, if you want something a bit faster.
>
> **[7:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=431)** That's 100.
>
> **[7:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=433)** So, it's going to be a little bit more like a snake game now.
>
> **[7:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/controlling-the-snake-s-direction?u=76281980&t=436)** Okay, long way to go, but this is the basics of snake movement and changing the snake direction.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2)
> **CLI Commands:** make (3), python (2)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **Documentation:** specification (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - we (1)

#### The game loop
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=0)** - The heart of many games is the game loop.
>
> **[0:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=3)** This is where essential game operations, such as updating positions of game objects and checking for collisions occurs continuously until the game ends.
>
> **[0:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=11)** The game loop for the snake game needs to achieve the following.
>
> **[0:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=14)** We need to clear the existing snake from the screen.
>
> **[0:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=17)** We need to draw the snake in his new position, check for collisions, with walls, self, or food, and handle these appropriately and also update the score so far.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=26)** Our snake animation has been handled by the function of move snake.
>
> **[0:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=29)** The game loop needs to do the same, but it has additional responsibilities as well.
>
> **[0:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=33)** So we'll rename a moose snake to game loop and add some new functionality.
>
> **[0:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=45)** Okay. So we've renamed that now in terms of collision detection, we want to check whether the snake has collided with either of the four walls, the top bottom left, or right.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=56)** Whether it's collided with itself and later on, whether it's collided with an item of food as well.
>
> **[1:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=61)** And we're going to do that by modifying the game loop function from what it was.
>
> **[1:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=65)** And we're going to add these checks. So we're going to check collisions, and this is going to require a little bit of maths.
>
> **[1:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=76)** So if the new head that's what we just create, is this exactly the same as it was in the last video, the creation of the new head, but now we're going to do a check based on that.
>
> **[1:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=84)** And you heard, right?
>
> **[1:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=87)** So if new head is in the snake, okay, so that would be a snake with snake collision, or you had a zero that's .
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=94)** The X coordinate of the new head is less than negative the width.
>
> **[1:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=98)** So if you think about it, the center of the coordinates is zero, zero.
>
> **[1:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=101)** So half the width negative would be the left-hand wall.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=105)** So if it's less than that with divided by two or the new head zero, so we're still talking about the X coordinate here is greater than the width divided by two, remember divided by two because we're starting in the middle at zero zero.
>
> **[2:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=124)** So the width extends from half of the full width from the negative X direction to half of the full from the positive X direction and I'm running out of spaces.
>
> **[2:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=134)** So I'm going to go into a new line by using this backslash and continue with all.
>
> **[2:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=141)** So this time you had one that's, the Y coordinate is less than negative height divided by two.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=148)** So negative height divided by two is the bottom wall, or you had one is a greater than height, divided by two.
>
> **[2:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=164)** So that's all the wall collisions.
>
> **[2:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=165)** And we've also covered the snake, the snake collision with this new head in snake. Okay.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=170)** So think about the math for a bit and make sure you understand it. But if that's the case, what we're going to do is we're going to do turtle. By.
>
> **[3:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=181)** Okay.
>
> **[3:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=182)** That is just a way of closing the programs or ending the turtle graphics program.
>
> **[3:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=186)** However, if there's no collision, so we now need an else.
>
> **[3:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=190)** So if there's no collision, we just proceed as normal.
>
> **[3:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=192)** So that's all this stuff we were doing, but let's just make sure we move it into the correct level of indentation.
>
> **[3:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=198)** This is all going to happen if the else condition holds not otherwise.
>
> **[3:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=203)** So let's just try that up and run it.
>
> **[3:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=209)** So that's all fine working back when we hit the edge, the game ends when we hit the edge, they game ends and let's try and collide with ourself. Yeah.
>
> **[3:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=219)** Did you have to be pretty quick to do that?
>
> **[3:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=221)** If you want to have a bit more of a chance of doing that, you can slow it down a bit.
>
> **[3:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=224)** That's about a 500 milliseconds between frames.
>
> **[3:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=228)** It's probably easy to crash, so you have to do it after a turn.
>
> **[3:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=233)** Hang on. I need to think about this.
>
> **[3:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=235)** So I have to do it after a turn and then back on itself, quickly you go.
>
> **[3:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=239)** So that's how you do collision detection for the walls and for the snake to snake collision this version abruptly exits the program. If a collision occurs later on, we will change this.
>
> **[4:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=249)** So the game restarts instead, the collision code is fairly straightforward in principle.
>
> **[4:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=254)** It is worth spending some time making sure you understand that works. We're checking first, whether the new head is in the same location as an existing part of the snake, which would be a self collision.
>
> **[4:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/the-game-loop?u=76281980&t=263)** And then we check the X and Y coordinates of the new head against the boundaries of the screen, calculate from width and height.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), self (2), function (2), this. (2), require (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### Snake food
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=0)** - [Instructor] The goal of the snake game is to get the snake to eat food, so we need to add that functionality.
>
> **[0:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=6)** There are a few functions what we use to achieve this.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=8)** First of all, we're going to look at a function to find the distance between points.
>
> **[0:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=12)** We're going to use an implementation of the famous Pythagorean theorem, and a common use of the theorem in game programming is finding the distance between two points, which works because you can think of this distance as the hypotenuse of a right angle triangle, as shown on the slide.
>
> **[0:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=27)** So we have two points, and if we drop a vertical and draw a horizontal, we can make this into a right angle triangle, and then the distance between those points becomes the hypotenuse of a right angle triangle, which means we can use Pythagoras' theorem to find that distance.
>
> **[0:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=43)** It's good to be able to understand this level of mathematics to help with your computer programming in general, in game development in particular.
>
> **[0:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=49)** But if this is a sticking point for you, don't worry.
>
> **[0:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=52)** You can just go ahead and use the function in your program, and it will provide the correct result.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=56)** The reason we need this function in our game is to determine when the snake's head comes close enough to a piece of food for it to qualify as a collision.
>
> **[1:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=64)** We're not doing precise collision detections here, checking exactly when the circular snake food intersects with the snake's at square head.
>
> **[1:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=71)** Instead, for the purposes of this game, it is sufficient to check whether the snake's head is within a set number of pixels from the center of the food.
>
> **[1:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=79)** So let's add this function now to our game.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=81)** So we're going to create a function, and it's going to be called get distance.
>
> **[1:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=87)** And it's going to take a position one and position two.
>
> **[1:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=92)** So we're going to have x1 and a y1, are unpacked from pos1 and x2, and y2 are unpacked from pos2.
>
> **[1:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=106)** And then the distance is calculated using y2 minus y1.
>
> **[1:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=115)** And that is all squared.
>
> **[1:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=119)** And then we add x2 minus x1,
>
> **[2:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=127)** which is also squared.
>
> **[2:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=131)** And all of that is raised to the power of 0.5, which is the same as taking the square root.
>
> **[2:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=137)** This is Pythagoras' theorem.
>
> **[2:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=142)** And then we need to return that.
>
> **[2:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=147)** Okay.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=148)** So just to remind you where that's coming from, if you go to the slide, okay, that's what's happening here.
>
> **[2:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=153)** x1, y1, x2, y2, the difference between them.
>
> **[2:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=157)** The square root of that distance gives us our distance for what the length of our hypotenuse, which is the distance we want.
>
> **[2:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=165)** Next we need a function to generate a random position for our food.
>
> **[2:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=170)** So to do that, we're going to need to import the random module, which means we can create random members and things.
>
> **[3:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=181)** And then our function is going to be get random food pos.
>
> **[3:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=184)** So down here we're going to add def get random food pos, position, short for position.
>
> **[3:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=200)** No arguments needed.
>
> **[3:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=202)** And we're going to have x is going to be equal to random.randint.
>
> **[3:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=214)** That's a random integer.
>
> **[3:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=215)** And it's going to be between the negative width, this is like with the collision detection, the same arguments here, plus the food size.
>
> **[3:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=224)** So it's going to have a slight offset because we need to incorporate the food size.
>
> **[3:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=227)** Let me define that first, and then PyCharm will suggest it for me.
>
> **[3:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=230)** So this is actually a new constant that's going to be food size, and I'm just going to set it equal to 10 pixels.
>
> **[3:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=236)** So now when I start typing... Down here, so it will come up with a suggestion for me.
>
> **[4:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=246)** So plus food size, that's the lower bound for the random integer, and the upper bound is going to be width divided by two.
>
> **[4:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=257)** And this is going to be minus food size.
>
> **[4:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=259)** The food would be off the screen if we didn't offset it in this direction.
>
> **[4:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=266)** Okay, and let's just duplicate that line and do y, and this time it's going to be the same basic idea, except this is going to be based off the height.
>
> **[4:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=275)** And then we can have return x and y as a tuple.
>
> **[4:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=282)** Finally, we need a function for detecting food collisions.
>
> **[4:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=285)** so we're going to do that with def food collision.
>
> **[4:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=294)** Again, no arguments.
>
> **[4:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=295)** And we're going to make food pos global.
>
> **[4:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=298)** We haven't defined it yet. We'll do that in a moment.
>
> **[5:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=300)** Food pos.
>
> **[5:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=302)** So this is going to be a global variable.
>
> **[5:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=304)** And I'm going to say that if the distance, so we're going to use our function, so if get distance, and this is between snake minus one, so that's the head of the snake, and the food pos, so if that distance is less than, arbitrarily I'm just going to say 20 pixels.
>
> **[5:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=326)** So that's the distance that we're going to determine.
>
> **[5:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=328)** If the food and the snake's head are within 20 pixels of each other, then we're going to say that it is a collision.
>
> **[5:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=338)** So if that's the case, then food pos gets updated to a new food pos, or food position, and then the food, which we haven't created yet, but we'll do that in a moment, goes to the food pos.
>
> **[5:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=356)** And we're going to return false.
>
> **[6:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=360)** That's if there's not a collision, but if there is, then we're going to return true.
>
> **[6:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=367)** Okay, so these are all the functions we need.
>
> **[6:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=369)** We're going to have to use them in a moment.
>
> **[6:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=370)** We're going to add the function clause to our code, but let's just recap.
>
> **[6:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=373)** So we've got a distance function, function to get the distance between two points.
>
> **[6:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=377)** We've got a function to get a random position for the food.
>
> **[6:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=381)** And we've got a function to detect whether or not there's a food collision.
>
> **[6:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=384)** So let's now modify our game loop.
>
> **[6:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=387)** Don't need to do much here, but when we've done snake.append, so we've moved the snake.
>
> **[6:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=392)** Then we're going to check for food collision here.
>
> **[6:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=401)** And we're going to do if there isn't a food collision, then we do this: snake.pop.
>
> **[6:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=413)** But if there is a food collision, that means the snake has found some food, so it's grown.
>
> **[6:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=419)** We're going to pop in that case, okay?
>
> **[7:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=421)** So if there's not a food collision, then the snake stays the same length.
>
> **[7:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=424)** But if there is, then it wants to grow by one segment.
>
> **[7:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=428)** So let's just make a comment to that effect.
>
> **[7:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=432)** Keep the snake the same length unless fed.
>
> **[7:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=442)** Okay, so we're nearly there, but now we need to just create the actual food itself, which is going to be another turtle.
>
> **[7:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=449)** So we'll do that down here.
>
> **[7:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=450)** So food equals turtle.turtle.
>
> **[7:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=460)** It's going to be circular, and the size is going to be food size divided by 20, which we talked about in a previous video.
>
> **[7:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=469)** If you want pixel control, you divide by 20.
>
> **[7:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=472)** Then food.penup.
>
> **[7:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=475)** That will mean the food won't leave a trail every time it moves.
>
> **[8:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=480)** And then food pos is going to be whatever random position it gets from the function that we just wrote.
>
> **[8:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=487)** And then we're going to move the food to the food position.
>
> **[8:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=498)** Okay.
>
> **[8:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=501)** And there we have some food, and we can collide with it, and the snake is longer.
>
> **[8:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=508)** So let's just make a couple of changes now that look a bit better.
>
> **[8:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=510)** We'll speed it up again.
>
> **[8:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=514)** And let's have the color of the food being a bit different.
>
> **[8:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=516)** So we'll have food color.
>
> **[8:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=523)** Okay, so this is now looking like a snake game.
>
> **[8:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=525)** We've got some food, we can collide with it.
>
> **[8:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=528)** We're not keeping score yet; that will come later.
>
> **[8:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/snake-food?u=76281980&t=531)** But this is looking good.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (8), case, (2), this. (1), from, (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (3), short for (1)
> **Cross-References:** we talked about (1), previous video (1)
> **Versions:** 0.5 (1)
> **Tools:** pycharm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Keeping score
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=0)** - Adding scoring functionality to our game is very simple.
>
> **[0:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=3)** We will use the turtle graphics, title bar as a convenient place to display the score.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=8)** First, we create a global variable called score and we set it to zero.
>
> **[0:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=14)** Then in food collision, that's the function we defined before.
>
> **[0:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=19)** We just need to make one change.
>
> **[0:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=22)** So we're going to do, if there is a collision, then the score is incremented by one.
>
> **[0:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=30)** So, score + = 1 .
>
> **[0:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=31)** That's the same as score = score + 1 is very common shorthand for that.
>
> **[0:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=39)** However, we also need to make this score global.
>
> **[0:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=42)** And the reason for that is because we're not just reading it, we're potentially updating it depending on the outcome of this function. Cool.
>
> **[0:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=48)** So if we're going to update a global variable, we need to bring it into the scope of the function where we're doing that. And we do that using the global keyword, finally, in the game leap itself, we had the following.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=59)** So this is where we refresh the screen just before doing that, we do screen, dot title.
>
> **[1:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=68)** So this is how we set the title of the turtle graphics window that we're going to use an F string here, F strings are great for interpolating variables.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=77)** So snake game remains the same, and then we're going to add our score here.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=81)** So score is equal to whatever the variable value of score is.
>
> **[1:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=87)** And we don't actually need to make score global here because we're not updating it. We're only reading it.
>
> **[1:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=93)** So now when we run the program, you can see the score there in the title bar.
>
> **[1:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/keeping-score?u=76281980&t=100)** And when I catch a bit of food, my score increases by one.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), finally, (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - adding (1)

#### Game reset
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=0)** - At the moment, when the snake collides with either itself or a wall, the game ends abruptly due to a court at turtle.bye, which closes the turtle graphics window and ends the program. In order to play again, we would have to run the program again, which is not ideal.
>
> **[0:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=14)** To fix this, we can create a reset function, and put all of the code, defining the initial state of the game into it.
>
> **[0:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=20)** So that when we call it, we basically start over.
>
> **[0:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=23)** So let's write that reset function now.
>
> **[0:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=29)** So we need some global variables, for score, snake, snake direction, and also food plus.
>
> **[0:43](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=43)** And then within the reset, we set the score to zero.
>
> **[0:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=46)** We create the snake, and this is exactly the same as what we were doing out here, so we can, cut that and put it in here.
>
> **[0:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=56)** So we created the snake, We set the snake direction to up as well.
>
> **[1:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=61)** And while I'm here, I'll get rid of, those ones I don't need.
>
> **[1:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=66)** So snake direction is up.
>
> **[1:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=68)** So for the food positive, again, we get the code that was outside of the reset function and we just place it inside the reset function.
>
> **[1:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=78)** So exactly the same code, just in a different place.
>
> **[1:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=81)** And then, at the end of this, we call the game loop to set things in motion.
>
> **[1:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=88)** So now, to get things started, instead of calling game blue directly, we call reset instead.
>
> **[1:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=98)** Which in turn, you'll see, cause game loop. Okay.
>
> **[1:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=104)** Now one of the changes we need to make is instead of turtle.bye, we need to make use of this function that we've just created. So we don't end the program.
>
> **[1:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=113)** We call reset.
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=117)** Now, I run it, and again error.
>
> **[2:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=120)** So snake is not the fine online, one to eight.
>
> **[2:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=122)** So what have I done that?
>
> **[2:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=123)** So what I've done is I've left this code here, which is drawing the snake for the first time.
>
> **[2:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=126)** And we're not actually going to do that now because the snake doesn't yet exist until reset has been called.
>
> **[2:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=134)** Okay. So now, let's see what happens if I crash with a wall, it just goes back to the beginning.
>
> **[2:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=145)** And same with the snake collision.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=148)** Okay.
>
> **[2:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=149)** So that's a much more elegant way of, restarting the game, than having to, actually run the program again.
>
> **[2:42](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=162)** So that's it. We now have a fully working snake game, Well done for getting this far.
>
> **[2:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/game-reset?u=76281980&t=172)** And stay tuned for a few refinements.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), this, (2), let (2)
> **CLI Commands:** make (2)
> **Speakers:** - at (1)


### 3. Finishing Touches

#### Avoiding repetition by using Lambda expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=0)** - Currently, we have multiple callbacks for changing the snake's direction in response to key presses.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=5)** So for example, we've got go up, which is very similar to go right and the other two.
>
> **[0:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=12)** There is a way to avoid this repetition by using Lambda expressions to pass additional arguments to a callback function.
>
> **[0:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=18)** In this way, we can have just one function to handle changing this next direction, which responds differently depending on the argument it receives.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=26)** We define the callbacks in a single function called a bind direction keys.
>
> **[0:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=30)** So let's do that now.
>
> **[0:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=32)** (keyboard clicking) So we're going to do screen dot on key.
>
> **[0:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=40)** And now, instead of naming a particular function that we've already defined, we're going to use a Lambda expression.
>
> **[0:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=47)** (keyboard clicking) So in this situation that's like an anonymous function.
>
> **[0:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=52)** So it's going to be set snake direction, which we haven't yet written, set snake direction.
>
> **[0:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=59)** So that's the function.
>
> **[1:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=60)** And we're going to pass the argument up and that's going to be in response to a key press of up.
>
> **[1:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=68)** Okay.
>
> **[1:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=68)** And then, (keyboard clicking) we'll do that four times for the full directions, um, for the down direction.
>
> **[1:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=78)** We're going to pass the argument down in response to the down key.
>
> **[1:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=82)** And for the left direction, we're going to pass the argument left as a string for the left key.
>
> **[1:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=89)** And for the right, we do the same for the right key.
>
> **[1:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=95)** Okay. So this is now binding our direction keys, just using a single function.
>
> **[1:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=99)** So that function there on line 18 through to 22 is now equivalent to what we had down here.
>
> **[1:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=107)** But on lines 123 to 126 in terms of its row within the game.
>
> **[1:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=113)** Although, we're handling things slightly differently because we're passing an argument this time.
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=117)** So now we're going to define a single function, instead of all of these, go up, go rights, et cetera.
>
> **[2:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=123)** Let's get rid of those now.
>
> **[2:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=126)** And we're going to have a single function which is going to be set snake direction.
>
> **[2:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=129)** So Def, set, direction.
>
> **[2:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=134)** And this takes an argument which is direction.
>
> **[2:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=137)** And that's what's getting passed in by these Lambda expressions defined in our bind direction keys function.
>
> **[2:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=143)** So first of all, we need to make the snake direction global that's because we may well be updating its value.
>
> **[2:35](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=155)** Then, if direction is equal to up, then we need to do another check.
>
> **[2:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=164)** That's if snake direction does not equal down.
>
> **[2:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=171)** And the reason we're doing this second check, like we said before, is to avoid a collision.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=175)** If you happen to press the arrow key in the opposite direction to which you're traveling.
>
> **[2:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=178)** So let's make a note of that.
>
> **[3:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=182)** So if that's the case, then we set snake direction equal to up.
>
> **[3:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=190)** Now let's copy this three more times for the other directions.
>
> **[3:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=199)** And I'm going to change these last three Fs to LFs to slightly more efficient.
>
> **[3:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=204)** That means we're not actually going to check if we don't need to.
>
> **[3:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=209)** And then we do basically the same for all the other directions.
>
> **[3:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=212)** So we have done up.
>
> **[3:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=214)** So let's now do down.
>
> **[3:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=218)** So if we're not going up, then we change the direction to down and then let's do left.
>
> **[3:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=228)** So if we're not going right, then we go left.
>
> **[3:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=233)** And the last one, right.
>
> **[4:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=241)** If the right key is pressed.
>
> **[4:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=242)** Then if we're not going left, then we go right.
>
> **[4:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=249)** Okay. So we're nearly there.
>
> **[4:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=250)** We just need to call this bind direction keys, which we haven't done yet.
>
> **[4:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=253)** So instead of these handlers that we had down on line 115 we're simply going to do bind direction keys instead.
>
> **[4:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=266)** (mouse clicking) Okay. Now, (keyboard clicking) Okay. So everything works exactly as it did before.
>
> **[4:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=277)** The difference being we have much better, more efficient code, and we're following the principle of DIY dry, "do not repeat yourself" instead of four functions for changing the direction.
>
> **[4:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=289)** We simply have this one function instead.
>
> **[4:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=291)** This use of Lambda expressions for defining event callbacks is a nifty little trick that you may find helpful in your own programs.
>
> **[4:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/avoiding-repetition-by-using-lambda-expressions?u=76281980&t=297)** So make a mental note and revisit this example, if you need a reminder of how to use it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (6), lambda (4), pass (4), def, (1)
> **Non-Speech:** (keyboard clicking) (4), (mouse clicking) (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Env Vars:** diy (1)
> **Speakers:** - currently (1)

#### Personalizing your game
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=0)** - You now have a fully working snake game.
>
> **[0:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=2)** Well done for getting this far.
>
> **[0:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=4)** Whatever your level, I encourage you to experiment with the code, play with it.
>
> **[0:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=8)** For example, you could change some colors or the speed of this snake.
>
> **[0:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=11)** You could even add extra functionality, like a two player version.
>
> **[0:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=14)** There's a game called Tron that you may be familiar with, which is kind of like a two player version of snake.
>
> **[0:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=19)** So you could go down that road if you wanted.
>
> **[0:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=21)** for this project, we haven't actually used any images.
>
> **[0:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=23)** Although, Turtle graphics does have the capacity to use images.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=26)** So rather than actually drawing these stamps, you could use actual images for the game.
>
> **[0:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=31)** I'm going to show you just a few of these possible changes now.
>
> **[0:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=37)** So, Let's change the background color.
>
> **[0:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=39)** (keyboard clicking) And let's change the size of the window.
>
> **[0:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=45)** (continuing keyboard clicking) Maybe 800 by 600.
>
> **[0:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=49)** (continuing keyboard clicking) And the shape of the turtle... currently is set to... square for the stamper, for the snake.
>
> **[1:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=63)** Let's change that to circle.
>
> **[1:06](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=66)** And the food, let's have that as a triangle.
>
> **[1:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=73)** Okay. So it's just a few changes.
>
> **[1:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=74)** Let's see what that does.
>
> **[1:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=76)** Okay.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=77)** (continuing keyboard clicking) Now I want the snake to actually be green.
>
> **[1:24](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=84)** (continuing keyboard clicking) And let's have the food size a bit bigger as well.
>
> **[1:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=91)** Make it easier to catch.
>
> **[1:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=92)** and speed's okay.
>
> **[1:34](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=94)** But let's just see what it'd be like if it was a little bit slower, could make it faster, but the a hundred milliseconds is fairly fast.
>
> **[1:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=100)** If I double the speed at 50, it's really very fast.
>
> **[1:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=107)** Another idea, of course, will be to actually increment the speed as the score increases.
>
> **[1:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=110)** That's something you could implement.
>
> **[1:52](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=112)** (continuing keyboard clicking) Okay. So there's all these changes you can make.
>
> **[1:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/personalizing-your-game?u=76281980&t=119)** So really the world is your oyster.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), catch. (1)
> **Non-Speech:** (continuing keyboard clicking) (5), (keyboard clicking) (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), kind of like (1)
> **Speakers:** - you (1)

#### Adding graphics to the snake game
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=0)** We are now going to spice things up a little bit by adding some graphics to our game.
>
> **[0:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=4)** So if you check out branch 03_03b, you'll see we have an assets folder.
>
> **[0:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=9)** And in there, we have a background, we have some fruit for our snake, and we have a head for our snake, and we're going to use those now.
>
> **[0:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=18)** So in our main program, we go down to Line 111 first of all.
>
> **[0:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=23)** And this is where we currently have the bgcolor set to yellow.
>
> **[0:27](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=27)** And what we're going to do is we're going to change that from bgcolor to bgpic, and we're going to have the image for that going to be assets forward slash, and then we'll use the exact name of the image bg2/gif.
>
> **[0:47](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=47)** So when we save and run that, you can see that we now have a background for our game.
>
> **[0:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=54)** Okay. Now, what I'm going to do next is I'm going to register a shape for the food and also for the snake head.
>
> **[1:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=61)** And the way I do that is I do screen.register_shape.
>
> **[1:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=72)** And again, it's going to be assets and the exact name.
>
> **[1:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=80)** So for the food, it's snake-food-32 by 32.
>
> **[1:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=89)** And while I'm here, I'll do the snake head as well, which is snake head, and that one is 20 by 20 pixels.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=105)** So when we register a shape like this, it means we can assign a shape to a turtle based on an image rather than the default shapes that they offer usually, which is like the triangle and the circle and the turtle image.
>
> **[1:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=117)** So we're actually using images instead.
>
> **[2:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=120)** So now for our food, we can replace the triangle here on Line 128 with the snake food.
>
> **[2:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=127)** And that's going to be exactly the same argument that we have for the registering of the shape.
>
> **[2:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=133)** So that then becomes food.shape is that image.
>
> **[2:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=137)** And now, of course, the color is no longer relevant.
>
> **[2:20](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=140)** So we can delete that.
>
> **[2:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-graphics-to-the-snake-game?u=76281980&t=141)** So now if I save and run, you can see that there's some food for the snake.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), delete (1)
> **Code Identifiers:** register_shape (1)

#### Adding the snake head to the game
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=0)** Now, we're going to add a head to our snake using the snake head image.
>
> **[0:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=4)** So a couple of preliminaries. In the last video, I forgot to adjust food size to the exact dimensions of the image, which was actually 32 by 32, so I'm doing that now.
>
> **[0:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=13)** And now, we're going to add a constant for snake size.
>
> **[0:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=18)** And again, this was to be the dimensions of the actual image we're using, which is a square image.
>
> **[0:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=23)** So it's 20, the image is 20 by 20.
>
> **[0:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=26)** Then we need to make use of this constant in a couple of places in our code.
>
> **[0:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=31)** So the first one is in our offsets and I'm doing this so that we can have a different image if we want, and the code will actually accommodate a different snake size, which we define as a constant.
>
> **[0:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=48)** The other place we need to update this is in our reset function.
>
> **[0:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=54)** So instead of assuming that it's 20, we're going to adjust that to use the snake size.
>
> **[1:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=64)** So this is snake size times two and this one is snake size times three.
>
> **[1:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=75)** Okay.
>
> **[1:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=76)** So that's the preliminaries.
>
> **[1:17](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=77)** And then for our stamper, we're going to keep using circles for the body of the snake, but we're going to change the color.
>
> **[1:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=86)** And turtle graphics allows us to use hex codes.
>
> **[1:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=89)** The hex code I'm going to use, I got using a color picker on the image, so that it's going to match the snake head image.
>
> **[1:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=98)** You'll see what that means in a minute.
>
> **[1:39](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=99)** So we can use this hex code to define the color.
>
> **[1:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=101)** So let's just run that and see how we're doing.
>
> **[1:44](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=104)** Okay. So we've got a snake body of the same color as our snake head image now.
>
> **[1:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=110)** And just while I'm here, I'm going to speed up the game a bit because it's going a little bit slow, that snake.
>
> **[1:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=116)** So let's change the delay to 100 milliseconds, make it a little bit more challenging.
>
> **[2:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=124)** Okay. So what we need to do now is to add the snake head itself.
>
> **[2:08](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=128)** So in the part of the game loop where we draw the snake and it says draw snake for the first time, which actually should just say draw snake, that's leftover from an earlier chapter, we're not just going to draw each segment of the snake the same.
>
> **[2:22](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=142)** We're going to have to make sure the head is different, and the way we're going to do that is we're going to change the shape of the stamper.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=148)** Remember, it's the stamper that's making these circles that form the snake's body.
>
> **[2:32](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=152)** So we do stamper.shape and this wants to be the snake's head image.
>
> **[2:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=160)** So that's in assets/snake-head.20 by 20.gif.
>
> **[2:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=171)** So that's now the shape that's going to be used.
>
> **[2:54](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=174)** And then we do stamper.goto.
>
> **[2:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=178)** And then we go to the snake's head position which is snake minus one, that's the end of our list containing our segments, and we go to the x coordinate and the y coordinate.
>
> **[3:14](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=194)** When we're there, we do stamper.stamp.
>
> **[3:19](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=199)** And then finally, we need to remember to revert our stamper back to the circle shape for the rest of the body.
>
> **[3:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=205)** So we do stamper.
>
> **[3:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=209)** And that's a circle.
>
> **[3:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=213)** Now, we're almost done except that we don't want to now draw the whole snake again.
>
> **[3:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=218)** We want to use list slicing, which is a very useful Python syntax to omit that one segment that we've just done, which was the head of the snake.
>
> **[3:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=226)** So we actually go from colon minus one.
>
> **[3:51](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=231)** So this means from the beginning, but don't include the last one.
>
> **[3:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=235)** Remember, negative indices in Python lists actually take you from the end of the list, which is a very useful feature.
>
> **[4:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-the-snake-head-to-the-game?u=76281980&t=242)** So now when we run our code, you can see it's a small difference, but the head of the snake is always using that snake image rather than a plain circle.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), python (2)
> **Code Keywords:** let (2), function (1), finally, (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Cross-References:** in the last (1)
> **Best Practices:** remember to (1)

#### Adding a high-score feature
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=0)** Now, for the final refinement, which is adding a high score feature to our game.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=5)** So make a comment that this is the highest score and we will create a new variable.
>
> **[0:12](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=12)** Good high score, so this will be the default value if we're not loading in a higher value from a file that's been saved previously, that will make sense in a moment.
>
> **[0:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=21)** So then we're going to load -- load the high score if -- if it exists, and we're going to do that by using a try accept block.
>
> **[0:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=36)** So we're going to try doing this thing which is with open and the file is going to be called high score and it's going to be a text file.
>
> **[0:50](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=50)** And the mode in which we're going to open it is in read mode.
>
> **[0:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=57)** So while that's going on, we're going to do as file.
>
> **[1:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=64)** So while that's open we're going to do high score is equal to the int value because it's going to be read as a string of file.read And I'm finding this help that PyCharm has given me really not very helpful in terms of readability, but let's just ignore that for now.
>
> **[1:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=91)** So for that reason, we've now got a high score read in, but that may not exist.
>
> **[1:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=97)** So then we have the accept block which is accept file not found error.
>
> **[1:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=105)** So if that goes on so it can't find it then we simply pass.
>
> **[1:49](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=109)** And that means the value we assigned it up here on Line 20 will be what it receives which is zero.
>
> **[1:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=115)** Okay.
>
> **[1:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=116)** So let's just check there's no syntax error so far.
>
> **[1:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=118)** Yeah. That's all good.
>
> **[1:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=119)** And you can see that our score is zero.
>
> **[2:01](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=121)** So the next thing we're going to do is actually display the highest score.
>
> **[2:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=125)** And that happens in our game loop where we actually do the screen title because we're using the title bar.
>
> **[2:11](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=131)** And the way we're going to do that is we're just going to modify this line so that after displaying the score, we simply add high score.
>
> **[2:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=148)** And we're using these S strings.
>
> **[2:30](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=150)** So we're going to interpolate a value there, and that's going to be the high score variable.
>
> **[2:38](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=158)** So now when we run it you should be able to see that we have the high score displayed in the title bar.
>
> **[2:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=166)** Okay. So far, so good.
>
> **[2:55](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=175)** Next, we need to create a function for updating the high score.
>
> **[3:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=184)** So we're going to do def_update_high_score.
>
> **[3:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=193)** No arguments needed.
>
> **[3:15](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=195)** And it's going to use the global variable.
>
> **[3:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=203)** And the reason we need to call it in as global as we might want to modify it.
>
> **[3:28](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=208)** So if you're just reading a global variable, you don't need to use the global keyword but if you do want to modify it, then you need to use the global keyword.
>
> **[3:37](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=217)** So we've now got access to that and we can change it if we want.
>
> **[3:40](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=220)** So if score is greater than high score,
>
> **[3:48](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=228)** then in that case, the high score is equal to the current school.
>
> **[3:58](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=238)** And then I didn't want PyCharm to do that.
>
> **[4:03](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=243)** High score just equals score.
>
> **[4:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=244)** That's what I want.
>
> **[4:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=247)** That's very annoying.
>
> **[4:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=249)** It's automatically helping me in a way that I did not want it to.
>
> **[4:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=256)** So I had to hold down shift and press "Enter" to get it to stop being so helpful.
>
> **[4:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=263)** So then I need to write this.
>
> **[4:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=269)** So with open, so this keeps the file open while we're working with it and then shuts it automatically.
>
> **[4:36](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=276)** It's a very useful constructor with, so high score.txt.
>
> **[4:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=286)** And in this case, it's in write mode, so we're able to write to it and temporarily call file.
>
> **[4:56](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=296)** Then we do file.write.
>
> **[4:59](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=299)** and we need to convert it to a string.
>
> **[5:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=302)** And that's going to be high score.
>
> **[5:07](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=307)** And then one more thing before we actually try running it is we need to call this update high score in the right place.
>
> **[5:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=316)** And that's going to be in the food collision function and it's going to be after we've updated the score.
>
> **[5:26](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=326)** So we then call update_high_score.
>
> **[5:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=329)** Okay.
>
> **[5:31](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=331)** So at the minute, we have a high score of zero and then we catch the apple a couple of times.
>
> **[5:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=341)** Okay. So we've now got a high score of three.
>
> **[5:45](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=345)** So let's exit.
>
> **[5:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=346)** And you'll see that in our folder, this file has been created because it didn't already exist and it's got this value three.
>
> **[5:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=353)** So now when I run the game again, you can see the high score there in the title bar is three because it's been loaded in from that text file.
>
> **[6:04](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=364)** So this is useful if you play the game a lot and you want to kind of set yourself a challenge to beat your current highest score.
>
> **[6:10](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=370)** And on that note, just one more little change I want to make before we wrap up is let's change the speed even more.
>
> **[6:16](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=376)** Let's have it something like 75.
>
> **[6:18](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=378)** And you could have it as a feature if you wanted to implement it yourself.
>
> **[6:23](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=383)** The delay going down each time you get a bit of food so that it gets faster and faster, as well as getting longer and longer.
>
> **[6:29](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=389)** So that's something you can check out yourself if you want to try it.
>
> **[6:33](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=393)** But yeah. This seems like a reasonable speed, especially as it gets bigger and you can see the high score is currently three.
>
> **[6:41](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=401)** Let's see if I can beat the high score and make sure that it's updating.
>
> **[6:46](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=406)** So we've got a high score of four, high score of five, and then let's have a look.
>
> **[6:53](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=413)** Our high score.text has been updated to five.
>
> **[6:57](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=417)** And if we were to run it one more time, you'd see that that's been loaded in. Okay.
>
> **[7:02](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/adding-a-high-score-feature?u=76281980&t=422)** So that's a high-score feature and that's as far as we're going with this game.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), case, (2), pass (1), this. (1)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** def_update_high_score (1), update_high_score (1)
> **Tools:** pycharm (2)
> **File Paths:** score.txt (1)


### Conclusion

#### Integrating material covered
> [LinkedIn Learning](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=0)** - [Robin] We've covered a lot of important ideas and techniques in this course, and hopefully you've had some fun too.
>
> **[0:05](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=5)** I encourage you to write your own programs using the skills learned here.
>
> **[0:09](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=9)** This is the best way to really integrate the material we have covered.
>
> **[0:13](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=13)** Also, you might want to check out Tkinter, or Tk-inter programming for GUI applications, as turtle graphics is built on top of this framework.
>
> **[0:21](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=21)** There are several courses on this topic in the LinkedIn Learning library.
>
> **[0:25](https://www.linkedin.com/learning/building-the-classic-snake-game-with-python/integrating-material-covered?u=76281980&t=25)** Thank you for taking this course on LinkedIn Learning, and good luck with your future endeavors.

> [!info]- Semantic Content
>
> **Env Vars:** gui (1)
> **Speakers:** - [robin] (1)


## Path Context

### In [[Python Hands-On Practice]]
← [[Python Practice- Object-Oriented Programming]] | **6 of 14** | [[Python Projects- Create an Interactive Quiz Application]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)