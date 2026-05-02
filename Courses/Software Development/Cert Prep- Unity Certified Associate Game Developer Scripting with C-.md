---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp
url: "https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp"
duration_minutes: 141
duration: 2h 21m
level: Intermediate
updated: 1/28/2021
learners: 12156
skills:
  - Game Development
  - C#
  - Unity
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEwkYW8nELJUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611698704025?e=2147483647&amp;v=beta&amp;t=WBkdVeZVYNhDxR-sPmJTUyseETSp053FxwpeaWMgjDg"
linkedin_topic: Software Development
learning_paths:
  - '[[Prepare for Unity Certification]]'
prev_courses:
  - '[[Cert Prep- Unity Certified Associate Game Developer UI and 2D Games]]'
next_courses:
  - '[[Cert Prep- Unity Certified Associate Game Developer Materials and Lighting]]'
path_nav: '[{"path":"Prepare for Unity Certification","position":3,"total":7,"prev":"Cert Prep- Unity Certified Associate Game Developer UI and 2D Games","next":"Cert Prep- Unity Certified Associate Game Developer Materials and Lighting"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/game-development
  - skill/c
  - skill/unity
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Cert%20Prep-%20Unity%20Certified%20Associate%20Game%20Developer%20Scripting%20with%20C-.md)

![Cert Prep: Unity Certified Associate Game Developer Scripting with C#](https://media.licdn.com/dms/image/v2/C4E0DAQEwkYW8nELJUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611698704025?e=2147483647&amp;v=beta&amp;t=WBkdVeZVYNhDxR-sPmJTUyseETSp053FxwpeaWMgjDg)

# Cert Prep: Unity Certified Associate Game Developer Scripting with C#

> Become Unity certified and show employers you have the Unity skills they are looking for. Improve your chances of landing that dream job doing what you love most—making games, architectural visualizations, or films. This course helps you study for the sections of the Unity Certified Associate: Game Developer exam that deal with scripting and publishing. Instructor Alan Thorn covers the basics of s

> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp) | 2h 21m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Scripting with C# in Unity](#scripting-with-c-in-unity)
  - [Companion files](#companion-files)
- [**1. Script Files and C#**](#1-script-files-and-c) (5 videos)
  - [Creating C# files](#creating-c-files)
  - [Configuring the code editor](#configuring-the-code-editor)
  - [Printing to the console](#printing-to-the-console)
  - [Components](#components)
  - [Start, awake and update](#start-awake-and-update)
- [**2. Coding with Unity**](#2-coding-with-unity) (5 videos)
  - [Timed behaviors](#timed-behaviors)
  - [Triggers and events](#triggers-and-events)
  - [Vectors](#vectors)
  - [Quaternions](#quaternions)
  - [Reading user input](#reading-user-input)
- [**3. AI and State Machines**](#3-ai-and-state-machines) (4 videos)
  - [Designing a state machine](#designing-a-state-machine)
  - [Building a navigation mesh](#building-a-navigation-mesh)
  - [Testing navigation](#testing-navigation)
  - [Working with agents and obstacles](#working-with-agents-and-obstacles)
- [**4. Completing the AI Project**](#4-completing-the-ai-project) (4 videos)
  - [Creating the Patrol state](#creating-the-patrol-state)
  - [Creating the Chase state](#creating-the-chase-state)
  - [Creating the Attack state](#creating-the-attack-state)
  - [Optimzing the FSM](#optimzing-the-fsm)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Scripting with C# in Unity
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=0)** - [Instructor] Greetings and welcome to this Unity Certified Associate Course on scripting with C# in Unity, presented by LinkedIn learning.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=11)** This course explores how to create game play mechanics and interactive media by programming with C#.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=19)** My name is Alan Thorn and here we'll see how to create script files, how to make objects move and rotate like player characters.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=27)** We'll also see how to create volumes and triggers for responding to important events and how to create timed behaviors like counters and timers.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=38)** And we'll also assemble basic artificial intelligence for non-player characters like an enemy that can chase the player around the scene.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=47)** Overall we'll cover critically important coding functionality right here inside Unity.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=54)** And this will help you create better games, simulators and visualizations.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/scripting-with-c-sharp-in-unity?u=76281980&t=60)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (3), [[Scripting]] (1), [[LinkedIn]] (1), game (1), [[Programming]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Companion files
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=0)** - If you have access to the Course exercise files then you can follow along with each video and open up the project files inside Unity.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=9)** Nearly every single one of these folders represents a Unity project and they will be called out inside the relevant video, so you can open that in Unity and follow along step-by-step.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=22)** One of the folders is slightly different, the Final Scripts folder.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=27)** When you go inside that folder, you'll find a range of different script files which are the completed versions of the script files we'll be piecing together throughout this course.
>
> **[0:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=37)** So you don't have to begin from the very beginning and write every single line.
>
> **[0:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=42)** Inside there, you'll find the Final Script files that you need, if you wish to use them.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=48)** Now, you don't need the Course exercise files to complete and follow along with this course successfully because all of the principles and features that we'll see in this course are infinitely transferrable to a range of other projects, including your own projects.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/companion-files?u=76281980&t=64)** But if you do want to follow along step-by-step then the exercise files are the best way to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (3)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** find (2)
> **Speakers:** - if (1)


### 1. Script Files and C#

[↑ Back to Table of Contents](#table-of-contents)

#### Creating C# files
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=0)** - In this chapter, we'll look at getting started with the C# scripting language.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=5)** You'll need to learn and to use this language If you want to create interactive behaviors here inside Unity.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=13)** if you want characters in your games to be able to run, jump, and respond, to player commands then you'll need to know C# script.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=22)** If you're making simulations or visualizations where different areas of the scene have to respond in different ways, then again you all need to learn C# scripting.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=34)** In this movie we'll see how to create a C# script inside Unity and open that inside an editor for editing and tweaking.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=44)** To start, I'm going to create a new C# script file.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=47)** You'll need to create one of these every time you want to customize the behavior of an object.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=52)** I'll move down here to the project panel and right click and choose create and then select C# script from the menu.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=61)** This isn't the only way you can create a C# script.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=64)** You can also move over here to the project panel left click on this small plus icon and select C# script from the menu there too.
>
> **[1:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=74)** Or alternatively you can move to the menu and choose assets, create and then select C# script.
>
> **[1:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=82)** Whenever you choose that option the script will always be created in the folder that's currently open.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=89)** So I'll move to the project panel, right click, choose create and select C# script from the menu.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=95)** Now the very important first step you must do here is to name your script file and the name that you give to your file is really, really important.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=105)** You want to make sure that all of your script files are given unique and meaningful names.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=112)** So in this case, I'm going to name this first script and press enter on the keyboard to accept that name.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=121)** You can see the full name of the script file down here and in selecting the script file and checking out the object in the inspector.
>
> **[2:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=130)** I can see the complete contents of the file listed but I can't use the inspector to edit them to do that we need to use a separate external editor.
>
> **[2:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=141)** Now you can normally open the script file inside an editor just by moving to the script file inside the project panel and double click the file.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=150)** In double-clicking the file, this will open automatically here inside Visual Studio.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=157)** You can use this code editor but there are alternatives that you can use.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-c-sharp-files?u=76281980&t=162)** In the next movie, we're going to see how we can configure our code editor while also look into different ways in which you can change the code editor if you want to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scripting]] (2), [[Unity]] (2), next (1)
> **Prerequisites:** you'll need (3), getting started (1), configure (1)
> **UI Navigation:** click on (1), open the (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Speakers:** - in (1)

#### Configuring the code editor
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=0)** - [Instructor] In the previous movie, we created our very first script file inside C-sharp.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=6)** And the default script file that is created is pretty much the same for every script.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=10)** You can see here in the inspector, they're created with a start and an update function, and we'll get into the specifics of scripting in the next movie.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=20)** But here, I want to take a look at ways in which we can customize our code editor and even change our code editor if we want to.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=29)** Let's start by looking at how Unity configures the code editor so that we can change it.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=34)** Inside the Unity editor, if you're on a Windows PC, you'll want to choose Edit and then select Preferences, but I'm using a Mac computer here, and for Mac users, you'll want to choose Unity and then select Preferences.
>
> **[0:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=49)** This displays the preferences dialogue.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=52)** And when you see this, you'll want to head on over to the section here that says External Tools.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=58)** And right at the very top of this tab here, you will see external script editor currently specified as Visual Studio for Mac.
>
> **[1:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=67)** Now you can click on the dropdown to change the editor.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=72)** In the case of a Mac computer, it automatically detected that I have at least two code editors in my computer.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=80)** Visual Studio, which is the default, and visual studio code, which is an alternative.
>
> **[1:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=86)** And your system may have even more alternatives than that.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=89)** If you don't see the application you want listed here, you can select the browse button and choose an alternative.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=97)** But since Visual Studio is the default application that comes with Unity, it's available for free and it's also available on all the different platforms that Unity supports.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=109)** I'm going to be moving forward with Visual Studio.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=112)** So I'm going to leave that selected.
>
> **[1:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=115)** I'm going to head on over back to the script file we created in the proceeding movie and double-click that to display it inside the code editor.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=124)** And here, you'll see an example of the code editor of visual studio displaying the contents of our script file, and we have this line numbering here.
>
> **[2:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=133)** Now, many people do not like the default color scheme for the code editor.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=139)** This brights white background can sometimes be quite glaring and harsh on the eyes.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=145)** So many people who spend a lot of time coding want to change that color scheme.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=150)** Here's how you can do that inside Visual Studio.
>
> **[2:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=154)** On a Windows PC, you'll want to move to Edit and then choose Preferences.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=160)** But again, I'm on a Mac computer.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=162)** For Mac users, you'll want to choose Visual Studio and then select Preferences from the menu.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=168)** When you display the preferences menu, you'll want to move to the top and select Visual Style.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=173)** And from the visual style options here we have two main settings, but the one you'll want to choose is user interface theme and change that from light to dark.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=184)** And then we need to restart Visual Studio, so I'm going to hit Restart Visual Studio.
>
> **[3:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=188)** And Visual Studio will disappear and then reload with the new, darker color scheme.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=194)** Here now we have the new dark color scheme look which is much easier on the eyes and it's much easier to code using this color scheme.
>
> **[3:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/configuring-the-code-editor?u=76281980&t=203)** So moving forward, I'm going to be using the dark color scheme here inside visual studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (5), [[Windows]] (2), application (2), [[Scripting]] (1), next (1)
> **Tools:** visual studio (12)
> **UI Navigation:** click on (1), dropdown (1), select the (1), double-click (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Printing to the console
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=0)** - [Instructor] In the very first video of this chapter we created our first script file which we called first script and we've loaded that here into visual studio to stop editing that file.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=12)** It contains the default functions and data that unity generates for every newly generated script file.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=19)** We're going to be building here in this video the very first program that many coders create that's the hello world program.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=28)** Specifically, this program is just going to print the message, hello world on the screen.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=34)** We're going to look at how to do that here using this script file.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=38)** To start let's take a look at the functions that unity has generated for us.
>
> **[0:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=42)** We have both the start and the update functions.
>
> **[0:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=45)** The start function is going to happen whenever the level or the scene begins inside unity.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=51)** That's going to be when we hit play on the tool bar and then update, that's going to happened repeatedly for every single frame.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=61)** If our game sustains 25 frames per second then update is going to happen 25 frames per second is going to happen 25 times for every single second.
>
> **[1:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=74)** Now, typically video games and interactive media products.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=77)** They have frame rates that are much higher than 25.
>
> **[1:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=81)** So update is going to happen a lot.
>
> **[1:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=84)** I'm going to move here to the start function and I'm going to write the statement.
>
> **[1:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=88)** Print going to make sure I spell it correctly here print and then say, hello world and semi-colon at the end of that line.
>
> **[1:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=99)** Now the syntax of course is defined by the C sharp language specification.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=105)** The fundamentals of C sharp are not explained here in this calls.
>
> **[1:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=108)** I'm making the assumption that you already know the C sharp language but you want to learn how to use that inside the unity engine.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=117)** So here inside the start function I'm going to be printing the message, hello world.
>
> **[2:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=122)** I'm going to save this code by choosing file and save and here's a really interesting thing.
>
> **[2:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=127)** I don't need to compile the code unity is going to do that for me behind the scenes.
>
> **[2:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=134)** All I need to do here is just write the code that I want, save it and then jump back to the unity engine, literally here and as I go back to unity sometimes depending on how quickly your code compiles you might see an icon at the bottom right-hand side to indicate that unity is compiling.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=157)** In this case, the compile is successful and we have this tick icon here at the bottom right-hand side.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=165)** So now we've created our script file.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=168)** Let's press play on the toolbar and see what happens.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=172)** Now I hit play on the tool bar and the game runs and you can see that it's running here, it's activated and my color scheme for the interface here is being tinted by play mode tint but we don't see the message hello world and the reason for that is because when you create a script file it exists only down here inside the project panel to actually bring that script file to life and to make it do something in our scene, we need to attach it to a game object that's in the scene.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=205)** So I'm going to, for example, select the camera object here and just drag and drop my script file onto the camera object and then release my mouse and when I do that, if you check out here the inspector you'll see that my script file is added to the inspector as a script file here is added as a component.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=227)** Great, so what I'm going to do now in adding this as a component is press play on the toolbar and see what happens.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=236)** Now in this case, I still don't see hello world here, inside the game tab anywhere but if I switch to the console I will see my hello world message printed here inside the console.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=251)** So the print function is useful for printing statements to the console not necessarily to the screen.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=260)** Great, I'm going to stop playing back here.
>
> **[4:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=263)** Now you'll notice from the top right-hand side of the console that you can see one message one hello world message was printed to the screen and that makes sense because the start function happens once when the level begins.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=277)** If I jumped back to visual studio here and I grab my hello world statement and I extracted from the start function and put it into the update function and save my code and go back to unity.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=294)** I'm going to clear the console here to remove that and then I'm going to press play on the toolbar.
>
> **[5:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=302)** Now when I do this, you will see that continually hello world is piling up here inside the console.
>
> **[5:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=309)** You can see the messages building up here and continually we're having hello world printed to the console and this is happening because remember hello world is being printed to the console now on every single frame and if I check out the stats panel on the top right-hand side of the game tab you can see that on average here we're getting around 2000 frames per second, an enormous number of frames per second and so it's being printed every single time.
>
> **[5:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=339)** I'm going to stop playback because in a standard scenario we would never be printing hello world from the update function.
>
> **[5:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=348)** I'm going to go back to our script file, grab hello world and simply remove that from the update function.
>
> **[5:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=356)** Let's take another case here.
>
> **[5:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=358)** Now that we've created the hello world script, let's take another case.
>
> **[6:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=362)** What happens if we have a compilation error in our script file I'm going to go back to the start function and repaste our hello world script back there but this time I'm going to remove the final quotation from the hello world statement and then choose file and save and go back to unity.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=384)** Now, when I go back to unity this time here you can see that in the console, we have the mix of the hello world print statements that we saw before mixed with some big red eye catching errors and even if I click clear on the console the errors won't go away.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=403)** You can't just clear them out of existence and even if I try to press play on the toolbar unity tells me that all the errors need to be fixed before the game can be executed and in this case although we have an error only on one line we actually have three different error messages.
>
> **[7:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=425)** The way to address these error messages here is simply to move to the very top and the very first error message and double-click that from the console and when I do that, it brings visual studio interview and my cursor is positioned at the line where there is an error.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=445)** So I can check out that line and see what problems there might be.
>
> **[7:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=450)** In this case I can see based upon the error message that we got and the line that it took me to, I've got a fair idea about how to fix that.
>
> **[7:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=459)** So I just need to put the end quotation, choose file and save again and then go back to unity and this time on recompiling automatically those compilation errors have gone.
>
> **[7:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=474)** So that's the way to create script files here inside unity.
>
> **[7:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=479)** You need to create the script file, write your code and then attach it to a game object in the scene.
>
> **[8:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=487)** Now it's possible that you can attach your object, your script file to multiple objects and you can even attach it multiple times to the same object.
>
> **[8:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=497)** You need to remember that in every single case for every script file you attached to an object each one is going to exist as a separate instance.
>
> **[8:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=507)** So for example, if I grabbed my first script file and drag and drop that onto the camera again, I'm doubling up here.
>
> **[8:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=515)** We have one instance of the script and another instance of the script.
>
> **[8:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=519)** This means that when I switched to the console and press play we get the hello world message printed twice, one for each instance.
>
> **[8:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/printing-to-the-console?u=76281980&t=529)** Great, so that's how we can get started using script files here inside unity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (15), game (7), hit (2), data (1), [[Microsoft Products|Products]] (1)
> **Cross-References:** go back to (6)
> **UI Navigation:** drag and drop (2), select the (1), switch to (1), double-click (1)
> **Tools:** visual studio (3)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), means that (1)
> **Analogies:** for example (2)
> **Documentation:** specification (1)

#### Components
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=0)** - [Instructor] In the previous movie, we created our very first C-Sharp script file to produce a Hello World program.
>
> **[0:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=7)** In this movie, we're going to look at the first practical application of a C-Sharp script file inside a working scene.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=15)** Now to open up this scene is included inside the course exercise files.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=19)** It's part of the car project.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=21)** This is a standard unity project to which I've added an asset pack provided for free by unity technologies.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=28)** I'm just going to pop over to the asset store to show you where I've downloaded that asset pack.
>
> **[0:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=33)** So here on the unity asset store, you can take a look here.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=36)** We have the vehicle tools scene provided by unity technologies.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=40)** You can download that asset pack and add it into your projects but if you're using the course exercise files these assets are already included for you.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=51)** If I go back here to our unity scene and I move to the scenes folder and open up the test track scene and move to the vehicles and then I take a look at the family car just by double clicking on that inside the scene tab the camera would take you over to this car object.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=70)** All you need to do is just hit play on the toolbar and you have an instant racing game.
>
> **[1:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=75)** You can use the W, A, S and D keys on the keyboard to control this car and just maneuver it around the race track taking corners carefully and doing the best that you can.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=87)** So it's a pretty straightforward racing game running around the race track but we're going to be adjusting this car from script and see how we can do that.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=97)** If I take a look at the family car object that is the player controlled object here you can see that it has different components attached and these are all separate script files.
>
> **[1:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=108)** For example, by moving down to the easy suspension you can see embraces here but it's classified as a script file.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=116)** The same for the wheel drive script file.
>
> **[1:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=118)** And actually the very top property here at script can actually take you to the script file itself.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=124)** If you want to take a look at that script, for example, by left clicking that will locate it here in the project panel.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=131)** And you can even double click the script file here to check that out inside visual studio.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=138)** And when you open the script file here inside visual studio you will see quite a fair bit of code that's already been added for us presumably by somebody at unity technologies.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=150)** I'm not going to be changing any of this code here at all, but you just need to know.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=155)** And it's good to know that you have the ability.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=157)** If you want to, to check out the code to learn from it.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=162)** And if you want to, to even change it, in this case we're going to perform something far simpler right now when the user presses the W key on the keyboard the car will accelerate and it accelerates based on the properties of these components here.
>
> **[2:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=178)** One, the components you can see that the car has is the rigid body component which allows it to interact with the physics system.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=186)** You'll see that it has an is kinematic property set here by using this checkbox.
>
> **[3:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=192)** And you'll remember from other elements and other modules of the unity certification course that the is kinematic component is determining whether this object is going to be affected by physics or not.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=205)** If we activate the is kinematic checkbox we won't be able to move the car.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=211)** Let's try that out.
>
> **[3:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=212)** I'm going to activate these kinematic checkbox and press play on the toolbar.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=218)** And now when I press forwards the car will not be able to move because the is kinematic property is preventing it from doing so.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=227)** So if we wanted to create a script file that gave us the ability to prevent the car from moving, by changing this is kinematic checkbox.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=235)** How could we do that?
>
> **[3:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=237)** We're going to see an example here of creating a script file that will prevent the car from moving.
>
> **[4:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=242)** We might want to do this in cases where we want to display a poor screen or an options menu, or to stop the car, to present a message I'm going to deactivate these kinematic checkbox to just reset it back to its normal settings.
>
> **[4:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=257)** Let's press play on the tool bar.
>
> **[4:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=259)** And you'll see here that I can use the keys on the keyboard to again, control the car.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=264)** So this time let's create a script file.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=267)** That's going to access the rigid body component and activate the is kinematic checkbox to do that.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=274)** I'm going to move to the scripts folder that the project already has and create a completely new script file.
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=281)** All right, click choose, create and then select C-Sharp script from the menu and I'll call it car disabled.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=291)** Like so, now I could attach this script to many different objects.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=296)** I could, for example, even attach it to the car but I'm going to create a completely new and empty object to show you how we can access other objects in the scene and then change the values of their components.
>
> **[5:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=311)** So I'll create a new object by choosing game object create empty, and I'm going to rename this to car disable.
>
> **[5:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=320)** Again, the name is not essential and I can reset it position back to the wild origin zero zero zero.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=329)** If I want to be able to see this in the editor without the object being selected, we can do that easily by moving to the top left-hand side of the object inspector click on the dropdown and then select the orange tag so that I can easily see that let's open the car disabled script inside visual studio.
>
> **[5:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=349)** So we can tweak its properties.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=352)** I'll double click on car disable to bring back our code.
>
> **[5:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=358)** The first thing that we'll need to do is to get access to the car object inside our script file.
>
> **[6:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=365)** We have the start function here which happens when the level begins now inside the start function we want to find the game object in the scene that is going to be the car.
>
> **[6:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=377)** If I minimize visual studio here, you can see that the object that we're looking for is the family car and it has the name family car.
>
> **[6:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=388)** So I want to search the hierarchy for an object named family car and to get that object so that I can retrieve its rigid body component to do that I'll jump back to visual studio here.
>
> **[6:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=402)** And so we want to get access to the game object called family car.
>
> **[6:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=406)** So I'm going to choose game object and I'll call it car equals game object.
>
> **[6:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=413)** Don't find now we have different versions of the find function.
>
> **[6:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=419)** We can find objects by tag, or we can just find and that is finding by the name of the object.
>
> **[7:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=426)** So in this case, I'm simply going to choose find and the name of the object in this instance is going to be family car.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=434)** Let me just check that by going back to unity here and you can see the name is family car notice camel case here, capital F and capital C.
>
> **[7:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=443)** So I'll go back to visual studio and putting the name family car like so, now to confirm that I'm actually finding this object properly.
>
> **[7:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=457)** Let's use a print statement.
>
> **[7:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=459)** So I'm going to use print in the next line and I'll print the value of car to the console to see what we get.
>
> **[7:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=468)** If it prints the value no, then it didn't find an object or family car.
>
> **[7:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=472)** And if it prints the value game object then we know that it found an object.
>
> **[7:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=477)** So I'm going to save this and go back to unity here the code compiles, and everything's looking fine.
>
> **[8:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=482)** I'm going to switch to the console and hit play on the toolbox.
>
> **[8:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=487)** You can see nothing was printed.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=490)** And the, the reason for that is because if I select the car disable object remember we need to attach the script as a component of an object in the scene.
>
> **[8:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=499)** So I can easily fix that by dragging and dropping car disable on to that object here I'll go back to the console, hit play on the toolbar.
>
> **[8:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=511)** And now this time when the level begins notice that it prints family car.
>
> **[8:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=515)** It has indeed found the family car object.
>
> **[8:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=520)** That's great.
>
> **[8:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=521)** So step one the object car disabled has managed to find the family car.
>
> **[8:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=527)** Now in finding that object I want to retrieve the rigid body component here so that I can tweak it is kinematic property.
>
> **[8:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=536)** Let's see how we can do that.
>
> **[8:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=538)** I'll go back to visual studio here and in the line after finding the car object I'm going to make sure I get access to the rigid body component, rigid body.
>
> **[9:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=549)** I'm going to call it body equals car from the previous line dot get component.
>
> **[9:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=556)** And here I can choose the component that I want to get.
>
> **[9:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=559)** I want to get the rigid body component.
>
> **[9:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=561)** And so a reference to the rigid body is returned in body.
>
> **[9:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=565)** And then finally in the next line I can choose body.is kinematic and then I can sent that to true.
>
> **[9:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=575)** And now I can choose file and choose save and go back to unity here and complete the operation to deactivate the car.
>
> **[9:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=584)** I'm going to select family car in the hierarchy panel.
>
> **[9:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=587)** And as the game begins, I'm going to check out the value here in the rigid body of is kinematic.
>
> **[9:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=594)** So if I press play can see is kinematic is now activated by the script from the start function meaning that when I hit W on the keyboard the car can no longer move.
>
> **[10:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=607)** We have successfully created a script file that can deactivate a separate object in the scene by retrieving its components.
>
> **[10:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/components?u=76281980&t=617)** Great, this is a classical example of how one script file can communicate and access other objects inside the scene very easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (10), game (9), hit (4), next (2), application (1)
> **UI Navigation:** checkbox (6), open the (2), click on (2), select the (2), dropdown (1)
> **CLI Commands:** find (8), make (1)
> **Cross-References:** go back to (5), in the next (2)
> **Tools:** visual studio (7)
> **Analogies:** for example (3)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)

#### Start, awake and update
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=0)** - [Instructor] In this movie, we're going to create a timer display for the top right-hand side of the screen, to display how long we've been playing this race car game here.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=11)** This race track scene is based on the same course assets that we used in the proceeding movie.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=17)** It's a standard unity car project.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=20)** It includes the vehicle tools asset pack provided for free by UT technologies from the asset store.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=28)** You don't need to download that package, it's included right here inside the course companion files.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=34)** By pressing play on the toolbar for example, I can use the W, A, S and D keys on the keyboard to control the display on the bottom left-hand side here to control this car around a racetrack.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=47)** You can also see we have some UI elements here to display the current speed of the car.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=53)** But on the top right-hand side, I want to create a display that tells us how long we've been playing the game.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=61)** We'll use a script file to do that.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=64)** To get started, I'm going to move to the UI elements of the scene here.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=69)** These are included underneath the canvas group.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=72)** I'll expand the canvas group and already you can see we have a logo and the controls display.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=79)** If I switched to a 2D view here inside the scene view, and double-click for example, on the logo, that would take me to the UI section for this game here.
>
> **[1:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=91)** I'm going to add a text display to the top right-hand side of the screen.
>
> **[1:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=96)** To do that I'm going to select the canvas object, right click with my mouse and choose UI, and then select text to add a new text object.
>
> **[1:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=106)** By default, it's displayed here at the center of the screen, but I can simply move that around, not moving that one here, but I can expand it and begin to move it around here.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=117)** Let's zoom into the right-hand side to resize this a little bit.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=123)** I want to align the text to the right-hand side and also make sure that it's at the top right hand side here.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=131)** going to zoom out just a little bit, increase the size of the text to something kind of like that.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=138)** I'm going to scroll down to the color field and make sure the color is set to white by selecting the white color from the color swatch.
>
> **[2:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=148)** Now, right now, it just says new text and obviously that's not what we wanted to say, we wanted to display the time we've been playing the game.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=158)** Lets just preview the text by switching to the game tab.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=162)** You can see it displayed here on the top right-hand side.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=165)** That's great.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=166)** We are back to the scene here.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=168)** I'm going to select my text object here inside the scene, and move to the top of the inspector and rename the object.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=176)** I'm going to call it timer.
>
> **[2:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=178)** And now I'm going to add a new script file to our scene.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=182)** To do that, I'll go to these scripts folder, right-click, choose create, choose C sharp script and I'll call this object timer, and then drag and drop that code onto the newly created timer object, just by dragging and dropping the script file onto the timer.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=202)** If I select the timer object here in the hierarchy panel, I can scroll to the bottom of the inspector to confirm that the time object has been added.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=213)** Let's open that inside visual studio.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=217)** To do that, I'm going to go to the timer objects, double-click that file to bring that into visual studio here, and now we can start to create our timer.
>
> **[3:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=226)** The first thing that I need to get access to on this object is the text component.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=232)** The object that's actually going to display the text.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=235)** We added that when we created a text object for the UI, but to access that in script, I need to include a new namespace at the top of the file here.
>
> **[4:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=246)** UnityEngine.UI is what I need to add.
>
> **[4:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=250)** Now I'm going to create a new private variable here at the top of the file by choosing private.
>
> **[4:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=257)** And I'm going to then select text to make sure I access that text object.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=262)** We're going to be referring to the text UI object.
>
> **[4:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=265)** And I'll simply call it MyText= the initial value of null.
>
> **[4:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=272)** When the level begins here in the start function, we could get access to the MyText object there by simply choosing MyText=GetComponents, and then I can simply choose text here, like so.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=288)** We could get access to it in this part here and I can choose file and save and go back to unity.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=296)** And there's nothing wrong with the arrangement of having MyTexts GetComponent text here inside the stand function.
>
> **[5:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=303)** But normally, if you're creating an object where you want to retrieve references, like references to components when the level begins, unity offices are better and more dedicated event to do that.
>
> **[5:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=316)** It's called the awake function.
>
> **[5:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=318)** I'm going to go back to visual studio to see how that works.
>
> **[5:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=322)** So back here in visual studio, we have our start function.
>
> **[5:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=326)** I'm going to change that to awake and leave it there.
>
> **[5:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=330)** The awake function happens just like start when the level begins, but awake always happens fast, which is why it's a really great place to retrieve references like references to components, and the stock function is by comparison a really great place to perform initial behaviors, perhaps performing functionality that relies on these references already being valid.
>
> **[5:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=356)** Great.
>
> **[5:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=357)** So let's move on from the awake function and update the timer here, inside the update event.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=364)** To do this, I'm going to create a new variable that's going to maintain the time that elapses over time.
>
> **[6:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=371)** So I'm going to create private float TimeElapsed= initially zero.
>
> **[6:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=378)** And then for every single frame, we're going to continually add the amount of time that has elapsed since the previous frame.
>
> **[6:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=387)** So I'm going to choose TimeElapsed+=, and UT gives us a special variable called Delta time.
>
> **[6:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=395)** Delta time always tells us how much time has passed in seconds since the previous frame.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=403)** So I'm going to choose Time.deltaTime.
>
> **[6:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=406)** Now that we're updating the time, I want to display that in the text object that I have access to here.
>
> **[6:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=414)** So I'm going to choose MyText.text=, and then it's going to equal time elapsed.
>
> **[7:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=423)** But since this is a floating point variable, I'll need to convert that to a string.
>
> **[7:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=429)** So I'm going to type .ToString, and inside the parenthesis here, I could just leave that blank.
>
> **[7:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=437)** But if I do, the time it will display will have many decimal places of precision.
>
> **[7:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=442)** I don't want to do that.
>
> **[7:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=443)** I don't want to see fractions of a second.
>
> **[7:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=446)** I just want to see the number of seconds that have elapsed since playback began.
>
> **[7:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=451)** So to do that, I can simply put the quotations here and two zeros, two decimal places or having a leading zero if it's a singular item.
>
> **[7:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=461)** So I'm going to save the code here by choosing file and then choose save, and I'm going to go back to unity here.
>
> **[7:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=469)** The code compiles automatically.
>
> **[7:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=471)** Going to switch back to my 3D view and focus in on the car.
>
> **[7:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=476)** This time I'm going to switch to the game tab and then press play on the toolbar.
>
> **[8:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=483)** Now when I do this on the top right-hand side, you can see we have a timer counting up the amount of seconds we've been playing our racetrack game.
>
> **[8:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=494)** That's great.
>
> **[8:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=495)** In practically no time at all, we had our timer object created and the ability to set the text that's part of the text component, with the amount of time that has elapsed.
>
> **[8:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=507)** You can see really easily here how scripting is incredibly powerful inside unity.
>
> **[8:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/start-awake-and-update?u=76281980&t=514)** We can retrieve components from any object and update the properties of those components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** game (7), [[Unity]] (5), [[Zoom]] (2), [[Scripting]] (1)
> **UI Navigation:** double-click (2), select the (2), go to (2), scroll down (1), right-click (1)
> **Tools:** visual studio (4)
> **Analogies:** for example (2), kind of like (1), just like (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **Code Identifiers:** deltatime (1)
> **Definitions:** is a  (1)


### 2. Coding with Unity

[↑ Back to Table of Contents](#table-of-contents)

#### Timed behaviors
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=0)** - [Illustrator] In the previous chapter of this course we looked at the fundamentals of C-sharp.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=5)** And in this chapter we'll be looking at how to achieve specific behaviors.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=10)** And we'll start in this video by looking at how to create timed behaviors.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=15)** Here we have the car scene that you can find included inside the course exercise files.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=21)** It's a basic racetrack here with a car on the race track.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=26)** When I play on the toolbar I can control the car using the W A S and D keys on the keyboard, W moving us forwards here.
>
> **[0:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=35)** Now, in this case, when I press play, the car can jump into motion, but I want to display a countdown initially to say three, two, one, go.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=46)** And when the go message is printed, that's when the car can move forwards but not earlier than that.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=53)** Let's see how we can set that up using C-sharp.
>
> **[0:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=56)** To start, we'll need to actually display the message on the screen.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=60)** We'll be adding that to the user interface and that's really easy to do.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=64)** I'm going to go back to the scene tab here and find the user interface which is under the canvas group.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=70)** I'll double click that to centered inside the viewport, you can see that here, and then I'll switch to 2D mode by moving to the top to move that to 2D.
>
> **[1:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=81)** Now we're going to be displaying the message at the center of the screen quite boldly.
>
> **[1:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=85)** Easy to set that up, I'm going to go to the canvas group, right-click select UI and then she used text from the menu.
>
> **[1:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=93)** This will add text to the center and if you look carefully it's pretty small but you can see that text already there.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=101)** I'm going to resize the text to be the full size of the screen.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=105)** If you don't see these handles, make sure that you have the rank transform tool activated from the menu here.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=113)** And then I'll click and drag to move these to the edges of the display.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=119)** To this side here and to the right-hand side.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=124)** And then I'll move to the display here and make sure that the text is aligned to the center of the screen.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=131)** I'm going to change the text here initially to the value of three, because that's the initial value to be printed.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=138)** And I'll scroll down and change the text color from this initial grayish color here to white.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=145)** And then I'll also increase the size by simply changing the font size from 14.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=151)** I don't know the initial value that I want so I'll just click and drag on the font size field to increase the size on the screen and about there should be sufficient.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=161)** If I jump over to the game tab, I can see that centered on my view and that's looking pretty good.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=169)** So we have this value set up here.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=171)** Now I'm going to rename the object because right now it's simply called text and that's not descriptive.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=177)** So I'll move to the inspector move to the top and change this to countdown and press return on the keyboard.
>
> **[3:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=185)** Great. We've now set up the text object to display the countdown.
>
> **[3:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=189)** The next thing we'll need to do is to actually create the C-sharp script file that is going to create the countdown itself.
>
> **[3:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=196)** To do that, I'll move to the scripts folder here, I'll right click inside the project panel, choose create and then select C-sharp script from the menu.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=205)** And I'll create a new script file that simply says countdown and press enter on the keyboard.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=211)** All I need to do now is simply to double click that in the project panel to open that inside Visual Studio.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=218)** So here inside Visual Studio we have our basic countdown script and that's looking pretty good.
>
> **[3:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=224)** Now we're going to be creating a script using a coroutine, which is a function that runs asynchronously in the background, allowing us to perform various kinds of timed behaviors.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=234)** Now to get started at using coroutines in collaboration with this countdown UI object, I'm going to make sure I move to the top here under the Unity engine section and we're going to be including the UI namespace.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=247)** So I'm going to choose using Unity engine dot UI, like so here.
>
> **[4:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=252)** Now I can eradicate all the functions that are initially created inside here and I'm going to be adding two variables here.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=260)** The first one is going to be the list of messages that we want to display.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=264)** So I'm literally going to call that messages and it's an array of strings.
>
> **[4:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=269)** It's a list of different strings we're going to be displaying.
>
> **[4:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=272)** And in this case, it's going to be the countdown of three and then two, and then one, and then go.
>
> **[4:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=279)** The next variable we'll create is the interval.
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=281)** The amount of time that should elapse before displaying each message.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=287)** And in this case, it's going to be one second but I'm going to create this as a variable so we can tweak it from the inspector if we need to.
>
> **[4:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=295)** So I'm going to choose public and I'll choose float and then I'll call this interval and I'll set that to the initial value of one meaning one second.
>
> **[5:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=307)** The next thing is to create the coroutine that's going to print the countdown for us automatically.
>
> **[5:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=314)** To do that, I'm going to move down here to create a new coroutine and we can actually use the start function as a coroutine itself.
>
> **[5:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=323)** Here's how we do that.
>
> **[5:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=324)** I'm going to choose public, I enumerator and then we'll call this start for the start function.
>
> **[5:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=332)** That's all we need to do to begin to set that up.
>
> **[5:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=335)** Now in the first step we want to begin backwards by printing three, two, one go.
>
> **[5:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=339)** So I'm going to begin at the end of the array for our messages by choosing INT message display, equals messages dot length
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=352)** and minus one, we always have to subtract one from it because actual length of the array might be three or two or whatever, and the array begins at zero.
>
> **[6:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=362)** Great. The next thing we want to do is to create a while function that is going to loop through all the messages and print them.
>
> **[6:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=369)** So I'm going to choose while, message display is greater than or equal to zero, continue to print messages.
>
> **[6:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=378)** Now, initially let's just print them to the console by using print, and then we'll choose messages and we'll be printing the variable here message display we'll be using message displayed to select the message to print.
>
> **[6:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=397)** Then in the next line we're going to be waiting for the interval period of time.
>
> **[6:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=401)** So we can use a yield statement for that that allows us to wait for a specific amount of time.
>
> **[6:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=408)** In this case, I'm going to be waiting for a specific number of seconds as specified here by the interval variable.
>
> **[6:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=416)** So I'm going to choose interval.
>
> **[6:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=418)** And then after this line, we're going to be decrementing or subtracting one from our message display counter so that we move to the previous message, like so and that's all we need to do.
>
> **[7:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=431)** Now, in this line here, right now, we're printing the message to the console and that's fine, but I actually want to update the text inside the UI.
>
> **[7:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=440)** Now to do that, we're going to have a reference to the text object itself.
>
> **[7:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=444)** So I'll be creating a new text variable.
>
> **[7:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=446)** I'm going to choose private text UI text.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=452)** It will initially equal the value of null but here inside the start function we're going to be retrieving a reference to it.
>
> **[7:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=460)** UI text equals get component, and we're going to be getting the text component that is attached to the object.
>
> **[7:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=468)** This script is going to be attached to the text object itself.
>
> **[7:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=472)** So that here at this line, where we're printing to the console, I can comment out that line and simply substitute it with the text to display here which is selected from our messages, like so.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=490)** I can now save this code here by choosing file and then save.
>
> **[8:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=495)** And I'm going to go back to Unity to test out our code.
>
> **[8:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=499)** So here inside Unity, the code has compiled.
>
> **[8:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=502)** I'll now grab the script file here inside the project panel, and I'm going to drag and drop that onto the text object itself.
>
> **[8:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=510)** The countdown text to be displayed here and then press play on the tool bar.
>
> **[8:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=516)** Now I'm pressing play on the tool bar you can see that we get the message three printed but it doesn't actually count down three, two, one.
>
> **[8:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=523)** And the reason for that is simply because when I select the countdown object and check out the script here in the object inspector, you can see I haven't actually configured our message array.
>
> **[8:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=534)** We have the interval, meaning one second, but the number of messages we are to print is currently zero.
>
> **[9:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=540)** So let's change that to, for example, four items.
>
> **[9:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=544)** We're going to begin with three and then two, and then one, and then say, go I'm going to put an exclamation mark there.
>
> **[9:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=550)** And now let's try this code by pressing play on the toolbar.
>
> **[9:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=556)** Now we have three, two, one, and go, great.
>
> **[9:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=560)** We have now created that countdown and that's excellent.
>
> **[9:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=564)** Of course, one thing we can do at least at the moment when I press play on the toolbar is I can still hold down W on the keyboard to drive the car even before we're supposed to be able to move.
>
> **[9:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=576)** Now, of course, if you wanted to link the movement of the car to your countdown we could do that by jumping back to our code here and I'm going to put a new variable public rigid body and I'll say, car body.
>
> **[9:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=591)** That's going to equal the initial value of null here but inside the inspector we're going to specify the rigid body for the car.
>
> **[10:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=600)** Then initially here, inside the start function where we get the text components here the car body is kinematic field is going to initially equal true, but then when the printing loop here the message display has completed at the bottom is going to equal four again so that the car can be controlled.
>
> **[10:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=621)** I'll save this code and go back to Unity.
>
> **[10:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=624)** And back here in Unity I'll select the countdown object here and scroll down to the bottom where you can see we have the car body field.
>
> **[10:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=632)** All I need to do is to find the car itself and that is the family car object that is here and drag and drop the family car field into the rigid body slot here so the rigid body for the car is selected.
>
> **[10:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=648)** Now, when I press play on the toolbar, I can't move the car.
>
> **[10:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=654)** But now that it says go, I'm able to then move the car into action to control it here.
>
> **[11:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=660)** So this is a really quick and easy way and how we can use coroutines to create times behaviors for different objects in the scene.
>
> **[11:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=670)** Of course, this is useful, not just for car racing games but any kind of time behaviors that you can think of and let's face it in most games and the simulations, we're going to need a lot of time behaviors.
>
> **[11:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/timed-behaviors?u=76281980&t=684)** So make sure that you make coroutines, your friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (6), next (5), game (1)
> **UI Navigation:** select the (3), scroll down (2), drag and drop (2), switch to (1), go to (1)
> **CLI Commands:** make (5), find (3)
> **Cross-References:** go back to (3), previous chapter (1), in the next (1)
> **Tools:** visual studio (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Env Vars:** int (1)

#### Triggers and events
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=0)** - [Illustrator] In the previous movie, we displayed a countdown, a timed behavior that could display three, two, one go, and then the car could jump into action.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=9)** And we created a countdown script to do that.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=12)** In this movie, what we're going to do is to create an area based effect so that as the car enters a checkpoint or reaches the finish line, we're going to display a congratulations message.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=26)** Now this is a very common type of behavior.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=28)** If you have the player, character or the viewer enter a particular region of a scene or a level, you want to respond in particular ways.
>
> **[0:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=37)** Let's see how we can set that up.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=40)** So already inside the scene, we have our countdown.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=43)** If I press play on the toolbar you can see we have three, two, one, and then go and we can move the car into action here.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=54)** And that's great.
>
> **[0:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=55)** Of course the message go remains with us.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=58)** And actually I want to hide the go message.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=62)** So I'm going to just select the countdown.
>
> **[1:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=65)** We can easily do that by scrolling down to the countdown section, we have three, two, one go.
>
> **[1:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=71)** I'm going to increase the message count here so that we have three, two, one, and then here we have go.
>
> **[1:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=78)** And then for go here, I'm just going to have some spaces.
>
> **[1:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=81)** So now when I press play on the tool bar we get the same countdown as before, we get go and then it's empty and we can finally move the car and the go message is no longer being displayed and that's great.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=94)** Okay. So now how can we display this area based effect?
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=97)** When the car enters a particular region we want to display a particular message.
>
> **[1:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=102)** Well, to do that we're going to be using triggers here inside Unity.
>
> **[1:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=106)** Now I'm going to switch back to the scene tab here.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=109)** We're currently in 2D mode.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=111)** You may not be in this mode, that's fine.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=113)** But if you are in this mode just hit 2D at the top here to come out of that.
>
> **[1:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=118)** And I want to zoom in on the car itself.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=121)** So that's the family car.
>
> **[2:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=122)** I will double click on the family car to display that inside the scene.
>
> **[2:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=127)** So here's the car and I want to display a message when the car enters a particular region.
>
> **[2:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=133)** And for test purposes, we're going to perhaps say this region of the track here.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=139)** When the car enters this region of the track we want to display a new message.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=145)** Well, to do that, I'm going to create a new empty object inside the scene.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=149)** I'm going to choose game object, create empty and then move that onto the racetrack.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=157)** And actually it's a pretty good location.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=159)** Just move that up here.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=161)** Maybe somewhere kind of like this too about this location here, that's looking pretty good.
>
> **[2:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=167)** I might rotate the object a little bit so that the axes of the object are oriented along with the road.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=175)** So this is the forward vector here.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=177)** You can see these are aligned to the road here.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=182)** The next thing I'm going to do in selecting this object is I'm going to name it here at the top end the inspector to check point.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=191)** And then move to the inspector and choose, add component.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=195)** And from the add component menu, I'm going to be adding a box collider component and select that option.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=202)** Now in selecting the box collider here inside the scene view, when you look at these axes you can see that Unity is drawing a box inside the scene.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=213)** Well, this box is actually pretty small, but this is going to be the box that the car is going to enter and in response, we are going to do something.
>
> **[3:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=222)** So I'm going to increase the size of this box.
>
> **[3:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=224)** It's really easy to do that.
>
> **[3:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=226)** I can move to the inspector here to the box collider component and for the size field, for the X value just click and drag to increase that.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=236)** Same thing for the Z field here and also for the Y.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=241)** I want to create this box to be the kind of thing that the car really so long as it's remaining on the track, it's not the kind of thing that it can easily avoid.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=251)** And that's looking pretty good.
>
> **[4:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=253)** Now that I've created this box collider, the next thing that I want to do is to move to the inspector and make sure that I activate the is triggered checkbox.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=262)** If I don't activate that checkbox, Unity is going to think of this collider as an invisible wall.
>
> **[4:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=269)** The car is going to bump into this wall and it won't be able to pass through.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=274)** What I actually want to do is for half the car passing through this as though the box were not there at all.
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=281)** We're just using this to mark out a volume inside the level where we can detect when the car enters.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=287)** Great.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=288)** So we have this checkpoint in place.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=291)** The next thing we want to do is we want to check when the car enters the checkbox.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=296)** Now, to start setting that up, I'm going to select the car itself.
>
> **[5:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=301)** And from the inspector, you can see for the tag field that the family car currently has no tag assigned.
>
> **[5:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=309)** This is going to be important.
>
> **[5:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=311)** I'm going to click on the dropdown and assign this the player tag to indicate that this object is the object being controlled by the player.
>
> **[5:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=320)** The reason this is important is because when I come to detect what has entered the checkpoint, I want to figure out what kind of object has entered it.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=329)** We could be creating a game where there are multiple objects inside the level that move around.
>
> **[5:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=334)** And we're only interested in cases where the player enters this check box as opposed to other objects and we're using the tags to distinguish the objects.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=345)** The next thing I want to do is to move to the project panel here, inside the script's folder and right click and choose, create and choose C-sharp script.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=354)** I'm going to call this script check point and press enter on the keyboard.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=361)** And then I'll open that script inside Visual Studio.
>
> **[6:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=365)** Now here inside Visual Studio we have our checkpoint script.
>
> **[6:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=369)** The first thing we'll need to do is when the car enters the checkpoint we'll want to display a message on the screen.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=376)** So we'll need to get access to the text object that's part of the user interface the text object that we created in the proceeding movie to display the countdown message.
>
> **[6:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=387)** So here inside Visual Studio, I'm going to go on to the top here, where it says using Unity engine and add an additional namespace by choosing using Unity engine dot UI and then I'll create a reference to the text object that we're going to be referencing.
>
> **[6:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=406)** So that's going to be public text, and then I'll say UI text like so.
>
> **[6:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=413)** Could equal the initial value of null.
>
> **[6:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=417)** The next thing I want to do is to remove the start and the update function, because we won't be needing those.
>
> **[7:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=423)** The only kind of event that we're really interested in knowing about is when the player has entered that trigger and Unity gives us a really convenient function to do that.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=434)** It's called on trigger enter.
>
> **[7:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=436)** Here's how we create that.
>
> **[7:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=438)** I'm going to choose private, void, on trigger enter.
>
> **[7:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=442)** And there are some variations on trigger enter is when an object enters the trigger on trigger exit is when an object leaves a trigger and then on trigger stay happens every single frame for as long as an object is inside the trigger.
>
> **[7:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=460)** But we're going to be using on trigger enter here.
>
> **[7:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=463)** And then notice that this function has a parameter called other which is the object that entered the trigger.
>
> **[7:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=470)** So at this stage, I want to check that this object has the player tag that I'm expecting.
>
> **[7:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=476)** So in this case, I'm going to choose if other dot compared tag is player I'll put the exclamation mark in front of it to say if it's not the player, then simply terminate the function at this point.
>
> **[8:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=491)** Meaning that if we reach this line here, it will be because the player has entered the trigger.
>
> **[8:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=497)** Now at that point, that's where I want to display our congratulations message.
>
> **[8:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=502)** And in this case, I'm simply going to print UI text dot text equals checkpoint reached, like so.
>
> **[8:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=513)** I could of course add a string variable up here if I wanted to customize that data inside the inspector.
>
> **[8:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=521)** At this point, I'm going to choose file and save and go back to Unity.
>
> **[8:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=527)** So back here inside Unity, the only thing that I really need to do here is to select the checkpoint object.
>
> **[8:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=535)** And here we have the box collider attached but we don't have the script.
>
> **[8:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=539)** So I'm going to move to the script here, the checkpoint script, and drag and drop that onto the checkpoint.
>
> **[9:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=546)** Now you'll see from the inspector that our script is expecting a reference to the text object that it's going to be using.
>
> **[9:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=554)** So in this case, I'm going to make sure that I grabbed the text object.
>
> **[9:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=559)** That's the countdown object that we created in the previous movie.
>
> **[9:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=563)** I'm going to drag and drop a countdown object on to that here, and we're ready to hit play on the tool bar and let's see what happens.
>
> **[9:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=571)** So I'm going to press play on the toolbar and we're going to get three, two, one, go and we can move the call forwards, that's great.
>
> **[9:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=582)** Now I know that the checkpoint is around about here and in moving past it, we don't get the message displayed.
>
> **[9:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=589)** And the reason for that is because if I check out the family car here, you'll see that it has a rigid body and that's fine.
>
> **[9:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=597)** It also has the tag that says player, and that's great too.
>
> **[10:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=601)** But one ingredient is missing.
>
> **[10:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=604)** When you take a look at this object it doesn't have a collider.
>
> **[10:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=608)** Some of its child objects do have colliders.
>
> **[10:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=611)** We can already see those being visualized inside the viewport, but this object itself, the family car doesn't have a region that is going to interact with the trigger.
>
> **[10:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=622)** And we need to add that.
>
> **[10:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=624)** It's really easy to do.
>
> **[10:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=626)** I'm going to move down here to add component and click on add component.
>
> **[10:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=629)** And inside the typing field here I'm simply going to type box collider, press enter on the keyboard to add a box collider component.
>
> **[10:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=639)** You can see here that a box collider has been added to the car.
>
> **[10:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=643)** I'm going to mark that as is triggered to and begin to size this, to surround the car object itself.
>
> **[10:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=650)** So grab the Z field, great.
>
> **[10:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=653)** And then the same thing for X here.
>
> **[10:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=657)** And I want to try to keep this pretty tightly around the car.
>
> **[11:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=661)** So I'm just going to increase just the Y just a little bit, but not too much.
>
> **[11:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=667)** Great.
>
> **[11:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=668)** Now let's hit play again.
>
> **[11:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=672)** Three, two, one, go.
>
> **[11:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=675)** And then the message disappears.
>
> **[11:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=677)** The car moves into action, we can move the call forwards.
>
> **[11:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=682)** And now this time we have hit the checkpoint and it tells us checkpoint reached.
>
> **[11:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=688)** We were able to detect that collision because the car had a rigid body, it had the box collider, it had the player tag and we had our checkpoint over here with our script attached, using on trigger enter.
>
> **[11:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=703)** Using those combination of ingredients, you can detect when any moveable object enters a specific region of the level and then respond appropriately.
>
> **[11:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/triggers-and-events?u=76281980&t=715)** This is incredibly important and critical behavior for when you're creating any kind of game, visualization or simulation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (8), next (5), hit (4), game (3), [[Zoom]] (1)
> **UI Navigation:** select the (3), click on (3), checkbox (3), drag and drop (2), dropdown (1)
> **Tools:** visual studio (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [illustrator] (1)

#### Vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=0)** - [Narrator] In this movie and the next we're going to be looking at how we can make objects move and rotate by using C sharp code specifically we'll look at vectors and rotations.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=13)** To demonstrate this, I've opened up this project here on transformations included inside the course exercise files.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=22)** It contains an asset pack from unity technologies that I've downloaded and imported from the unity asset store.
>
> **[0:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=30)** You can go to the unity asset store to download the package separately.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=34)** It's the tower defense template that's included for free.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=38)** However, you don't need to download this independently because it's included inside the course companion files inside this unity project here.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=47)** It contains a range of different scenes and levels where you can load up those levels to play a tower defense game.
>
> **[0:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=56)** By pressing play on the toolbar for example, we can actually begin to play the game by for example choosing the towers that we want to add to our environment, hitting start wave to then begin attacking a wave of enemies but we're not going to be playing these games here.
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=73)** Instead, we're going to be building our own level using some of the assets provided here to see how we can make an object move.
>
> **[1:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=82)** To do that I'm going to create a completely new scene by choosing file and then selecting new scene here and I'm going to move to the models folder and the units folder to select a new unit to add.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=95)** I'm going to select the buggy here by dragging and dropping that into the scene view.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=101)** Now you can see already that the buggy added to the scene and let's actually position that to the world origin for clarity here and double click the buggy to sense that inside the viewport.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=113)** Now that we've added the buggy object it doesn't really have a material applied but if we can easily associate a material to it by moving to the materials folder and then selecting units and choosing one of the buggy materials.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=129)** I'm going to drag and drop this one onto the objects and there we have a material applied.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=135)** In this instance we have this buggy vehicle object.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=139)** Now, when I select the object, you can see that we have a full word vector here and a red axis pointing to the right hand side and then the green up vector.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=151)** Now I want to make this object simply move forwards in the direction that it's looking.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=158)** Now, you might think that the easy way to do this when I click and drag this to move forwards is simply by adding values to the Z axis.
>
> **[2:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=167)** We can increase the Z axis to move the object forwards and then we can decrease it to move the object backwards but if this object were rotated to face a different angle like this angle for example and I wanted to make the object move forwards things aren't quite so simple because then we begin to move on both the X and the Z axis too.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=190)** So how can we make this object move forwards in the direction that it's facing by a particular speed?
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=197)** We'll see how to do that here using C sharp.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=201)** To get started, I'll go back to the project panel and move to the scripts folder.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=206)** Inside the scripts folder, I'll create a new C-sharp script by right-clicking choosing create and then choosing C sharp script and I'll name this script mover.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=218)** Now that I've created the mover script notice the general name I've called this mover not vehicle mover or buggy mover and the reason is because this mover script could be attached to any object that has a transformed component to move it forwards inside the scene.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=235)** So it's eminently reusable and that is important.
>
> **[3:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=239)** So let's open up this script inside visual studio, just by double clicking on it.
>
> **[4:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=243)** So here inside visual studio, we now have our mover script with the default mono behavior functions added by unity automatically.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=251)** These are the starts and the update functions.
>
> **[4:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=254)** I'm going to move these or rather, I'm going to just delete these for now.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=258)** We're going to be adding a new variable to our movers script, which is simply going to be the speed that we want it to move at per second.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=266)** So in this case, I'm going to choose public float speed and I will initially set this to the value of five meaning five meters per second.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=277)** That's pretty fast.
>
> **[4:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=278)** I'm going to go down to the update function and add that by choosing void update and inside the update function.
>
> **[4:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=285)** I want to make our object move now to do that, I need to get access to the transform component.
>
> **[4:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=292)** It's really easy to do that.
>
> **[4:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=293)** I'm going to choose private transform and then call it this transform, is going to equal the initial value of no but here inside the awake function when the level begins I'm going to retrieve a reference to the transform component by choosing get component transform to get access to that component.
>
> **[5:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=317)** This means that here inside the update function I can move the object in the direction that it's looking by changing its position value.
>
> **[5:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=327)** Here's how we do that.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=329)** I can choose this transform dot position.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=333)** Now I want to take our existing position wherever we are within the scene and either add or subtract from that depending on what our speed is.
>
> **[5:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=344)** So I'm going to be incrementing our speed and remember if we're going to be incrementing by a negative value, we'll be moving backwards.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=352)** So I'm going to choose plus equals and then I'm going to be adding to that this transform dot forward.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=361)** That is the direction that we're looking.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=364)** This is represented as a vector X,Y and Z representing the direction in world space in which we all looking, the object is facing.
>
> **[6:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=375)** I want to take the direction that we're facing and then we should multiply that direction by the amount that we want to move effectively multiplying it by our speed.
>
> **[6:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=389)** So I'm going to take speed here but of course, right now, the speed is set to five.
>
> **[6:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=395)** An update is going to happen continually on every frame, whereas our speed is supposed to be measured based on seconds.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=403)** So for that reason I need to multiply our speed by time.delta time to make sure that it's represented as a measure per second and that is all we need to do.
>
> **[6:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=416)** We need to take our existing position and then modify it by the direction that we're looking multiplied by our speed multiplied by time dot delta time.
>
> **[7:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=427)** Notice that we're doing that inside the update function to continually move the object over time.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=434)** I'm going to save this code by choosing file and then save and go back to unity to give this a test.
>
> **[7:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=442)** So back inside unity here we have our scene with the buggy objects but the buggy object does not have the mover script attached.
>
> **[7:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=453)** We can do that just by dragging and dropping the movie script onto the buggy object and the last thing that I want to do when I switched to my game view is we don't really have a great view on that object to preview its movement.
>
> **[7:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=466)** So I'm going to go back to the scene tab and get a good view of the buggy here.
>
> **[7:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=470)** Maybe something kind of like this here so that I can watch the view of the buggy as it moves forward.
>
> **[7:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=477)** So I'm going to grab our camera and choose game object and then select a line with view to line that view up here inside the scene.
>
> **[8:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=486)** That's great.
>
> **[8:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=487)** I'm going to select the buggy object, notice right now our speed is set to five.
>
> **[8:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=491)** Let's see whether that's too fast or too slow.
>
> **[8:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=494)** I'm going to press play on the toolbar here and then we have the buggy moving and it's pretty good speed.
>
> **[8:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=503)** I could rotate the buggy to face a different direction this time, maybe this direction a nd the blue axis here.
>
> **[8:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=511)** The forward axis is always telling us the direction that it's moving in and this time I'm going to hit play and now you'll notice that the object is moving in that direction.
>
> **[8:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=524)** I can even do things during gameplay like rotate the object dynamically switch to the rotate tool here inside the scene tab and when I do that, you can see that as I rotate the object is always moving in the direction that it's facing and that's great.
>
> **[9:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=541)** So here, we've seen an example of how we can use vectors and combine them together through multiplication to make an object move in the direction that it's looking.
>
> **[9:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=552)** Of course, this is only one piece of the transformation puzzle.
>
> **[9:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=556)** We've seen how to make objects move in the next movie.
>
> **[9:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/vectors?u=76281980&t=560)** We'll see how to make objects rotate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (7), game (4), next (2), [[Microsoft Word|Word]] (1), hit (1)
> **CLI Commands:** make (10)
> **UI Navigation:** select the (3), go to (1), drag and drop (1), switch to (1)
> **Analogies:** for example (3), kind of like (1)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** exercise files (1), download the (1), template (1)
> **Tools:** visual studio (2)
> **Definitions:** means that (1)

#### Quaternions
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=1)** - [Illustrator] In the previous movie, we created this buggy object here with a movie script attached that will move the object forwards in the direction that it's looking.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=11)** In this video, we're going to move away from movement and look at how we can make an object rotate.
>
> **[0:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=18)** Now, I want to do that in isolation from the movement script.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=21)** So I'm going to select the movie script that we already have and simply deactivate it, so that the update function won't run, and it won't continue to move the object.
>
> **[0:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=33)** And that way we can just focus on rotation.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=36)** Now, to make an object move, we're going to be rotating it around its center.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=41)** When I select the buggy object here from the hierarchy panel, we have our gizmo and we can rotate an object around three main axes.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=52)** You can see here in the rotation field this vehicle already has some rotation around the y-axis.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=59)** If I click and drag on Y, you can see that the y-axis effectively is an imaginary arrow sticking out of the top of an object.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=69)** The X-axis is an imaginary arrow sticking out of the right of an object.
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=76)** And the Z-axis is an arrow sticking out of the forward front of the object here.
>
> **[1:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=82)** Let's create a rotation script to rotate this around the y-axis continually by a particular speed measured in degrees per second.
>
> **[1:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=93)** To do this, I'll go to the Project panel.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=95)** Right-click, choose create and select C# Script from the menu.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=101)** And I'll call this rotator like so.
>
> **[1:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=106)** I'll select the buggy object in the scene, drag and drop our rotators script onto the object to attach it here.
>
> **[1:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=115)** So we have our mover and the rotator attached, and I'll double-click the rotator script to bring that into Visual Studio.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=123)** Here inside the rotator script, I want to move to the very top here and add a new variable that's going to control the rotation speed of the object.
>
> **[2:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=133)** I'll choose public, float and I'll call it RotSpeed, and I'll set that to the initial value of 90.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=142)** Meaning 90 degrees per second.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=145)** Here, inside the Start, I'm going to change the Start function here to be Awake.
>
> **[2:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=152)** You'll remember from an earlier movie, that Awake happens before Start, and it's a great place to retrieve components to particular areas of an object.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=162)** In this case, I want to retrieve the transform component and store that in a local variable.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=168)** So I'm going to create a private variable here, Private Transform.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=172)** This Transform equals an initial value of null, but here inside the Awake function I'm going to retrieve a component to the Transform component here, like so.
>
> **[3:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=187)** Here, inside the Update function, this is where we want to rotate the object around a particular axis.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=194)** To do this, I'm going to select the Transform component and choose .rotation.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=201)** Now inside Unity internally, rotations are measured using a special unit called Quaternion.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=208)** This is a particular way of measuring rotation.
>
> **[3:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=212)** So when we're specifying rotations inside Unity we'll often need to work with Quaternion objects.
>
> **[3:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=219)** In the case of this rotation, I want to continually rotate or add rotation to an object by particular speed over time.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=229)** Here's how we can do that.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=231)** In the case of a Quaternion, I want to use the multiply equal sign to mean keep the existing rotation and add to that some additional rotation in one direction or another.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=244)** Now, in the case of vectors, we do use the traditional symbols of plus equals, we're using the standard addition operator.
>
> **[4:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=252)** But with Quaternion, addition happens by way of multiplication.
>
> **[4:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=256)** It seems strange, but that's the way Quaternions work.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=260)** In this case, we want to rotate around the Y-axis.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=264)** I'm going to type Quaternion.Euler and here inside Euler, we can specify the three angles that we want to use around X, Y, and Z.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=277)** Now, in this case, I don't want to rotate around X or around Z, but I do want to rotate around the y-axis by our rotation speed.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=288)** In this case, our rotation speed is 90 degrees per second.
>
> **[4:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=293)** So I want to specify a value of RotSpeed multiplied by time.deltaTime to ensure that it's at a consistent speed based on per second.
>
> **[5:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=304)** And that is all we need to do to create a rotating object.
>
> **[5:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=309)** Let's try that out here by saving the code file and then choose save.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=315)** And I'll jump back to Unity to test this code.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=319)** So here, inside the Unity, if I switch to the Game tab here I can see the object in the scene.
>
> **[5:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=325)** I'm going to select the buggy object and check out the rotator.
>
> **[5:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=330)** You can see our rotation speed of 90 here, so I can press play on the toolbar.
>
> **[5:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=337)** And now you can see this object rotating continually.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=341)** You can also see the values is represented here inside the Y field.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=346)** I can stop rotation by simply moving to the RotSpeed field and setting that to a value of zero.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=352)** I could set it to a smaller value of 45, again, to speed up or to slow down the rotation.
>
> **[5:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=357)** I could also choose 180 to really speed up that rotation here.
>
> **[6:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=362)** So this is a really easy way in which we can use the Quaternion object to quickly and effectively rotate objects inside the scene.
>
> **[6:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/quaternions?u=76281980&t=372)** In the next video, we're going to put together what we have seen here with movement and rotation to make a buggy object that's going to respond to user controls by way of moving and rotating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (4), game (1), next (1)
> **UI Navigation:** select the (5), go to (1), right-click (1), drag and drop (1), double-click (1)
> **Definitions:** is an  (3), is a  (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** deltatime (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Speakers:** - [illustrator] (1)

#### Reading user input
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=1)** - Over the previous two movies, we've looked at movement and rotation by creating a mover script and a rotator script.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=9)** In this movie, we're going to put together those two aspects, both movement and rotation, to create a basic player control script that's going to allow us to use the keyboard controls to move around this buggy object.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=25)** We can move left and right to rotate the direction of this car, and we can use forward and back to move the object in the direction that it's looking.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=36)** Now to get started doing this, I'm going to make sure I check over both my mover and rotator script, and make sure that both are deactivated, so we're not using the code that we created previously in the preceding movies.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=51)** We're going to be controlling the movement and the rotation from a single new script that we're going to create here.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=59)** To get started, I'm going to move to the project panel.
>
> **[1:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=63)** Right click, choose create, and then choose C Sharp script, and I'm going to call this, "User Control."
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=73)** Now that we have created the user control script, I'll double click that to open that inside visual studio, and here inside the visual studio, we'll need to do two things first of all.
>
> **[1:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=84)** First, we'll need to create our speed variables to control what the movement speed should be, and also what the rotation speed should be for the vehicle.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=95)** So I'll create two new public variables, so we can change them from the inspector if we need to.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=100)** Public float, MoveSpeed... I'll set that to the initial value of five, five meters per second, and then I'll create a rotation speed.
>
> **[1:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=110)** Public float, RotSpeed.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=114)** That should be 90 degrees per second.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=117)** Now, the next thing that I want to do is to retrieve the transform component inside the awake function.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=124)** By default, we have the start, but let's change that to awake.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=129)** I'll remove this comment here, and create a new variable referencing the transform component.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=135)** So I'll choose private, transform.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=138)** This transform equals null.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=142)** It's not essential that it has a starting value of null, but I always think that it's cleaner to do that.
>
> **[2:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=147)** So inside the start function, we're going to retrieve a reference to transform.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=151)** ThisTransform equals GetComponent, and we'll get the transform component.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=160)** That's great, and we've seen all of that before.
>
> **[2:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=164)** Now, the next thing that we want to do is to read data from the keyboard.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=169)** We want to know what the player is pressing.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=172)** They could be pressing left or right, or up or down.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=177)** Now by default, those cardinal directions, up, down, left and right, are automatically mapped to keyboard keys.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=186)** In fact, there are two default mappings.
>
> **[3:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=189)** W, A, S, D, all mapped to up, down, left and right, and also the arrow keys on the keyboard.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=197)** Let's read that input.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=199)** To do that, I'll move to the update function, and I'll create two variables.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=205)** Float Horz, for horizontal, and also Float Vert for vertical.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=213)** These numerical values are going to keep track of the direction that the player is pressing.
>
> **[3:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=219)** For horizontal, it's going to equal Input.GetAxis, and I'm going to choose to read the horizontal axis.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=229)** Now by default here inside Unity, that is set up to mean left and right.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=234)** If we're pressing the left key on the keyboard, this function is going to return a value of negative one.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=241)** If we're moving to the right, it's going to return positive one, and if we're pressing neither left nor right, it's going to return zero, and if we're doing something completely crazy, like pressing left and right at the same time, it's also going to return zero, because negative one plus one cancels each other out.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=262)** Now, a similar kind of thing is going to happen for the vertical axis.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=266)** I'm going to type Input.GetAxis, and this time read vertical, and be careful here.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=274)** These axis names are case sensitive, so we're reading horizontal with a capital H, and vertical with a capital V.
>
> **[4:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=285)** Vertical, if we're pressing down, the value is going to be negative one, and if we're pressing up, the value is going to be positive one, and if we're pressing neither up nor down, the value will be zero.
>
> **[4:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=298)** Great, so we now have the ability to read using numerical values the direction that the player is pressing.
>
> **[5:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=307)** Let's now convert these to movement and rotation values based on what we have already seen.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=315)** So in the case of the transform component, and for movement, we're going to choose position, plus equals ThisTransform.Forward.
>
> **[5:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=324)** That's the direction we're looking.
>
> **[5:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=327)** Multiply it by our speed. That's our move speed here.
>
> **[5:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=331)** Multiply it by Time.DeltaTime.
>
> **[5:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=334)** Now, we've seen this code before.
>
> **[5:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=337)** This code will continue move an object in the direction that it's looking.
>
> **[5:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=343)** But in this case, we only want continual movement if we're holding down the up or down keys.
>
> **[5:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=349)** So we want to multiply that by the vertical axis.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=354)** Remember, vertical is going to be one if we're pressing up, and so it's going to get multiplied with the rest of this.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=361)** It's negative one if we're pressing down.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=364)** So the value of this will get inverted, and it'll be zero if we're pressing nothing, and anything multiplied by zero will result in zero, meaning no movement at all.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=376)** Now, we're going to apply a similar process for rotation.
>
> **[6:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=380)** In this case, we'll choose ThisTransform.rotation, and remember with quaterion, it's not addition, but multiplication that combines them together.
>
> **[6:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=392)** So multiplied equals here.
>
> **[6:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=394)** We're going to choose Quaterion.Euler, and in this case now, we have our x, y, and z axis, and the only axis where we have rotation, in this case is the y axis.
>
> **[6:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=408)** That's going to be RotSpeed multiplied by Time.DeltaTime, just as we've seen before, but also multiplied by the horizontal axis because it's going to be based on our left and right movement.
>
> **[7:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=423)** Great, let's now give this code a test.
>
> **[7:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=426)** I'm going to press file and save, and go back to Unity here, so our code compiles.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=434)** I want to select the object here, and make sure our script is attached.
>
> **[7:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=438)** It's not right now, but we can easily do that.
>
> **[7:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=440)** Just drag and drop the script onto the car object.
>
> **[7:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=443)** Here we have user controls.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=445)** I'm going to leave the move and the rotation speed to exactly how they are right now.
>
> **[7:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=450)** Press play on the toolbar, and by default, the vehicle doesn't move at all.
>
> **[7:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=457)** But now, let's try pressing left and right.
>
> **[7:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=459)** So the A key and the D key, great.
>
> **[7:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=463)** And I press W, move me forward.
>
> **[7:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=465)** S, moves me back, and so now, I can use a combination of these keys to move the object around, to move in any direction that I want.
>
> **[7:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=479)** There you have it.
>
> **[8:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=480)** We have basic user input, created by using a combination of really, really straightforward features.
>
> **[8:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=488)** We've seen how to move objects in the direction that they're looking, how to rotate them continually by a particular speed, and how to read input from the keyboard, and use that to control the motion of an object.
>
> **[8:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/reading-user-input?u=76281980&t=503)** Critically important stuff, but unity makes it really simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (3), next (2), data (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Tools:** visual studio (2)
> **UI Navigation:** select the (1), drag and drop (1)
> **Cross-References:** go back to (1)
> **Warnings:** be careful (1)
> **Prerequisites:** set up (1)
> **Speakers:** - over (1)


### 3. AI and State Machines

[↑ Back to Table of Contents](#table-of-contents)

#### Designing a state machine
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=0)** - [Instructor] In this chapter and the next chapter we'll be working together step-by-step to build a complete Unity project that could be the beginnings of a stealth video game.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=13)** A game where a player has to creep around an environment without being seen by intelligent enemy characters.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=21)** We're going to be looking at Artificial Intelligence to create intelligent non-player characters that can walk around a level, search for the player and when they've found the player, chase after the player without walking through walls or bumping into solid objects.
>
> **[0:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=39)** To begin this project, I've opened up the sample AI Chase files here that I've included inside the course exercise files.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=47)** It contains a basic environment that is already put together as a starting point.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=53)** Here at the bottom left-hand side you can see the player character, the first person all-in-one player controller.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=60)** This is positioned down here at the bottom.
>
> **[1:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=63)** You can also see a sample enemy character positioned over here inside this environment.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=70)** We can easily play test this environment right now just by pressing play on the toolbar.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=77)** I can use W, A, S and D on the keyboard to move the player character around and I can also use my mouse cursor to rotate the character head and walk around the environment.
>
> **[1:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=90)** There's the enemy character completely stationary at least for now.
>
> **[1:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=98)** I can also hold down the Shift key on the keyboard to make the character run instead of walk, Great, going to stop playback here and return back to our environment.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=111)** We're going to be working on this enemy character here making it walk around the level intelligently.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=119)** Now to get started at doing this I'm going to start by tagging this enemy object as an enemy.
>
> **[2:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=126)** If I select the enemy and move to the inspector in the tags list you can see we don't yet have a tag for enemy.
>
> **[2:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=134)** I'm going to choose, add tag here and from the tag list click on the plus icon and simply enter the word Enemy to create an enemy tag.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=145)** Let's go back to the enemy object here in the hierarchy and tag that as an enemy character.
>
> **[2:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=152)** Now to make this enemy character walk around intelligently, we'll need to create a Finite State Machine.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=159)** Sometimes these are called FSMs.
>
> **[2:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=163)** It simply means that in terms of its behavior the enemy character can only be in one state at any one time.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=171)** Its behavior can only be in one state and any time.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=175)** Let's create a script file that would be the beginnings of a Finite State Machine.
>
> **[3:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=180)** To do that, I'll move to the scripts folder then create a new behavior script, right click, choose create and then select C-sharp script from the menu.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=190)** I'll call this script AI Chase and then drag and drop that onto the enemy character to apply that script to the enemy.
>
> **[3:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=203)** Now we've created the script file, let's load that into Visual Studio just by double-clicking on it and now here inside visual studio we have our AI Chase script.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=213)** I'm going to delete the update and the start functions at least for now.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=217)** We may come back to them later and the first thing that I want to do is to create a list of all the different possible states that the AI could be in.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=227)** These are all the different states that our enemy character could possibly be in at any one time.
>
> **[3:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=233)** To list these states I'm going to create an enumeration.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=236)** So I'm going to type public enum and I'm going to say AI state and there are several possible states that it could be in.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=247)** So here we have, the first state is going to be Patrol and I'm going to assign that the value of zero.
>
> **[4:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=257)** So a Patrol state is when the enemy character is simply wandering around the level, looking for the player character but they haven't found them yet.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=267)** The next state is going to be Chase.
>
> **[4:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=270)** This is the case where the AI has spotted the player but they're not near enough to attack them so they're going to chase and move towards them continually so long as the player is still in their sight and the third and final state is going to be Attack.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=288)** I'm going to assign this the value two.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=291)** An attack state is when the enemy can see the player and they're close enough to attack them too.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=297)** So these are the three main states of our Finite State Machine and the enemy can be in just one of these at any one time and the point of the state machine is to choose which state the AI should be in and over the course of this chapter and the next we're going to be constructing this state machine to achieve that but here we've established the foundations of it.
>
> **[5:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=324)** I'm going to save this code and go back to Unity.
>
> **[5:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=327)** We'll be revisiting this code a bit later to develop and elaborate the state machine.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=333)** For now I'll choose File and Save and jump back to Unity.
>
> **[5:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=338)** Now in jumping back to Unity we have our script attached to the enemy character and then here is the enemy character and I'm going to start by doing what I think is good practice for most types of games and simulations that is to take reusable objects like enemy characters and to make a prefab from them.
>
> **[5:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=358)** To achieve that it's really, really simple.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=361)** I'm going to move to the empty prefabs folder that we have and just drag and drop the enemy into that to create a prefab from it.
>
> **[6:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=369)** This is going to be really useful later if we decide to add more enemies to the sane they can all be instantiated from this single prefab meaning that if we make the change at the prefab level those changes will be propagated to all the different instances inside the scene.
>
> **[6:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=386)** Great.
>
> **[6:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=387)** We've created a good starting point for our Enemy Finite State Machine.
>
> **[6:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/designing-a-state-machine?u=76281980&t=392)** Of course by pressing Play right now substantially the level is no different from at the beginning of this video but we've created the good foundations that we're going to move forward with as we approach tackling the beginnings of the Finite State Machine in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (7), next (4), [[Unity]] (4), game (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2), next chapter (1), in the next (1)
> **UI Navigation:** drag and drop (2), select the (1), click on (1)
> **Tools:** visual studio (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Best Practices:** good practice (1)

#### Building a navigation mesh
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=0)** - [Instructor] In the preceding movie, we established the foundations of our enemy finite state machine.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=6)** We have fundamentally three separate States, the enemy could be patrolling the level looking for the player, they could be chasing the player if they've spotted them, and if the enemy is near enough to the player and they've spotted them, they could be attacking the player.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=21)** These are the three major States.
>
> **[0:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=23)** Now right now, we don't have our behaviors in place, we need to start with that, and to get started at creating these behaviors, the first thing we need to do is to begin with our first level of intelligence for the enemy NPC.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=38)** In this case, we have a layout here for our environment.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=41)** You can see the floor and the walls.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=44)** Now, if this NPC is going to be chasing the player and moving intelligently, they need to exhibit real-world behaviors.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=52)** One of those behaviors is, as this enemy character moves around the scene, we expect them to take into account the fact that there are walls and it can't pass through them.
>
> **[1:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=63)** If this enemy character was to chase the player character, we wouldn't want them to simply take the most direct line through these walls to reach the player, instead, they should be moving around the walls, taking into account the floor plan of the level.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=77)** Now, to create that kind of behavior, we need to create, or to generate a navigation mesh which is an invisible map of the floor that our AI is going to be referencing to know how to move.
>
> **[1:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=91)** I'm going to move to our menu here and choose Window, select AI, and then choose Navigation.
>
> **[1:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=99)** Now this window, the Navigation window may appear initially as a free floating window for you, and if it does, you just need to drag and drop it here to the Object Inspector tab.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=111)** Now, when you've dragged it to this area of the screen, you'll be able to see a more detailed form the range of properties that we have.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=119)** In this case, the most critical ones are on the Bake tab, and we'll come back to those in just a second.
>
> **[2:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=127)** Now, before you can bake or generate a navigation mesh for your scene, you'll need to select the entirety of your floor, or the entirety of the environment.
>
> **[2:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=137)** Whenever you have an environment such as a terrain or an interior environment that you want to be incorporated into the floor plan, you will first of all need to select it inside the scene, and from the Inspector, you'll want to make sure that Static is enabled.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=155)** It is very important that your environment is marked as static.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=160)** If it is not marked as static, it will not feature in the generated floor plan.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=166)** In this case, we do have our environment marked as static so that's great.
>
> **[2:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=170)** Let's go back to the Navigation tab.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=173)** The next thing that you want to do while you're here is you want to really generate and plug in the largest size of your NPC character.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=182)** The largest kind of NPC that you have in the level, you'll want to fill out those fields here for the agent radius and the agent height.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=191)** In this case, we're working with the default capsule, I'm going to leave these settings just as they are.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=199)** The next thing that I'm going to do is move down to the Bake button and simply choose Bake.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=205)** Now here, inside my scene you can see a blue floor that has been projected onto the floor of the environment, detailing how this floor works.
>
> **[3:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=216)** If you don't see the blue floor, just move to the bottom right-hand side under the NavMesh display and make sure that show NavMesh is activated.
>
> **[3:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=226)** If you don't have that activated, you won't see the floor.
>
> **[3:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=230)** In addition, you won't see the floor if you select different kinds of objects sometimes, but in this case, I'm getting a constant display so long as the Bake tab is open.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=240)** Of course, I can switch to different tabs and the visibility changes again.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=244)** So you want to make sure that your world is selected, that you're on the Navigation tab, and that you have the Bake tab activated to see the floor that has been generated.
>
> **[4:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=253)** Now, if you can see the floor that has been generated, you will also see that in addition to there being this map, there is also some distance that is allowed a margin between the edges of the floor here in this blue map and the actual edges of the world.
>
> **[4:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=271)** The gap that is between the walls to the floor edge here are based on the agent radius parameter, which controls how close an NPC can get to the wall without going through it.
>
> **[4:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=284)** I'm going to leave those settings just as they are.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=287)** If you have bigger enemies, you may need to increase this value, and if your enemies are really teeny tiny then you may be able to reduce this value.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=297)** You'll notice that for this environment we have one single connected floor, and that's great.
>
> **[5:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=303)** It is important for the floor to be connected.
>
> **[5:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=306)** If we have an AI character standing over here and there's a break in the floor, for example, at this location, then the AI will not be able to easily jump between from one zone to the other, but in this case we have a single connected floor and that's great.
>
> **[5:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=324)** So in this movie, we've gone ahead and we've generated a navigation mesh for the environment.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=329)** This is the floor plan of our world.
>
> **[5:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=332)** Now, this on its own is not enough to create intelligence, but it is the first step for creating intelligent motion.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/building-a-navigation-mesh?u=76281980&t=341)** In the next video, we'll move on to take a look at our enemy character.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), [[Mesh]] (3), next (3), feature (1)
> **Env Vars:** npc (5)
> **CLI Commands:** make (3)
> **UI Navigation:** drag and drop (1), select the (1), switch to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)

#### Testing navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=0)** - [Narrator] In the previous movie, we generated a navigation mesh floor for the entirety of our environment.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=6)** And it's looking good.
>
> **[0:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=7)** In this video, I want to refine the enemy character, So they take account of this floor and actually move around the level intelligently.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=17)** To start doing that, I'm going to select the enemy object here inside the hierarchy and move to the inspector.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=25)** One thing we are missing from this object is an AI brain that's going to allow the enemy to understand where the floor is.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=34)** We're going to be adding that as a components of the object.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=38)** To do that, I'm going to grab the enemy, we choose components.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=41)** We are going to move to navigation and choose NavMeshAgent.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=46)** This will add a navigation mesh agent to the inspector here that you can see for this character.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=52)** For the agent type, I want to make sure that humanoid is selected.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=57)** And the rest of the parameters, I'm going to leave at their defaults here.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=61)** Notice that the NavMeshAgent has the radius and height properties, and these match up with the values that we plugged in on the navigation tab here, when generating the details for the maximum size of an enemy agent.
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=76)** I'm going to go back to the inspector.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=79)** If I zoom in on the enemy character, now that I've added the Nav Mesh Agent, you can see that this cylinder has been applied to the object, indicating the volume of the enemy character and how it relates to the floor here.
>
> **[1:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=96)** We have a good beginning.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=97)** If I press play on the toolbar, still nothing is going to happen.
>
> **[1:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=102)** The enemy character is not yet going to move.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=105)** But notice this time in visiting the enemy character, he's lower on the ground than he was before.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=111)** Previously, he was floating in the middle of the air, but now the enemy character is actually touching the floor.
>
> **[1:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=118)** I'm going to stop playback and we're going to revisit our script file.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=123)** In this script file, what I want to do is I want to have our enemy character continually chase the player around the environment.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=131)** Of course we want the enemy to do that sensibly, avoiding the walls.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=135)** To start, I'm going to select our player character here inside the hierarchy.
>
> **[2:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=140)** Scroll to the top of the inspector and make sure that our player character has that player tag.
>
> **[2:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=146)** That tag is going to be important for our script file.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=150)** Great.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=150)** Let's select the enemy and make sure they have the AI chase script on them.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=155)** And they do.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=157)** Let's go to the scripts folder and then open up AI chase inside visual studio.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=162)** Here we have our AI chase script file that we created a proceeding video here, where we set out the particular States we're going to be using.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=171)** Again, we're going to return back to these States shortly.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=175)** The next thing that I'm going to do here is to create a variable that is going to reference the navigation mesh or the NavMeshAgent that is attached to the enemy object.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=186)** To access the NavMeshAgent, I need to include an additional namespace up here at the top of our script file.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=194)** So I'm going to insert a new line and type using [unityEngine.ai](https://unityEngine.ai) for artificial intelligence.
>
> **[3:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=204)** Next, I'm going to move down to this section here and create a new variable that is going to reference the Nav Mesh Agent.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=213)** So I'm going to type NavMeshAgent.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=217)** And then I'm going to call that, ThisAgent.
>
> **[3:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=220)** And we can use the familiar awake function to retrieve a reference to that component.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=225)** So I'm going to choose void Awake.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=229)** Inside awake, I'm going to get access to the NavMeshAgent component.
>
> **[4:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=242)** Great We can now retrieve that reference.
>
> **[4:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=245)** Now, the next thing that I'm going to need to reference is the player character.
>
> **[4:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=249)** We need to reference where the player character is because we want to chase the player.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=255)** The player's position in the scene might move.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=258)** We need to constantly keep track of where the player is moving right now.
>
> **[4:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=263)** So to do that, I need to create another variable that's going to reference the play object.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=267)** To do that, I'm going to create private Transform And I'll call this player like so.
>
> **[4:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=278)** And again inside the awake function, I'm going to retrieve a reference to the player character.
>
> **[4:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=284)** To do that, I'm going to choose player = Gameobject.findobjectwithtag.
>
> **[4:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=292)** We're going to find the player object and extract the transform component on that player object.
>
> **[5:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=302)** So now we get a reference to the player transform.
>
> **[5:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=305)** That's great.
>
> **[5:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=307)** The last thing that we need to do now that we have a reference to the player Object, is insert the update function for every single frame.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=315)** We want our AI to continually chase the player.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=319)** Here's how we can do that.
>
> **[5:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=321)** I'm going to move down and simply choose void update to create a new update function.
>
> **[5:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=328)** We've seen the update function many times before.
>
> **[5:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=331)** Now inside here, I want to reference the NavMeshAgent that we have.
>
> **[5:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=337)** And it has a function in there which is called set Destination.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=341)** And the input for set Destination is the target.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=345)** It is the location we want the AI to move towards.
>
> **[5:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=349)** So in this case, it's going to be the location of the player.
>
> **[5:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=353)** To do that inside set Destination, I'm going to choose player.position.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=361)** This will constantly reference the plank position.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=364)** And that is all we need to do.
>
> **[6:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=367)** Let's give that a test.
>
> **[6:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=370)** I'm going to choose file and then save and go back to unity.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=376)** Now to keep good track of this, I'm going to be moving the game in the scene tab side by side.
>
> **[6:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=382)** in the scene tab, I'm going to take an aerial view so that we can see both the position at the player and the position of the enemy as the enemy moves.
>
> **[6:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=392)** And on the right hand side, we'll be able to see the first person perspective view of the whole scene.
>
> **[6:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=398)** So I'm going to press play on the tool bar.
>
> **[6:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=402)** Here I am a First person mode, you can see from the scene view that the enemy is already moving towards me.
>
> **[6:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=408)** And if I begin to run over this way here, you can see again from our top-down view.
>
> **[6:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=414)** But as I'm running through the environment, the enemy is continually chasing me and not doing stupid things like walking through walls.
>
> **[7:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=423)** Let's see what happens if I run off the edge.
>
> **[7:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=425)** If I run off the edge, I will fall down into oblivion.
>
> **[7:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=430)** But notice that the enemy character stands on the nearest point.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=434)** And the reason for that is because the enemy cannot leave the navigation mesh.
>
> **[7:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=441)** So even though the player can fall off the edge, the MPC cannot and will not do that because the navigation mesh doesn't allow them to.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=452)** That's great.
>
> **[7:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=454)** We've now created the floor plan, the navigation mesh itself, and we have the ability to have an AI character follow around, moving around on that navigation mesh, following the player character.
>
> **[7:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/testing-navigation?u=76281980&t=467)** Really great stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (9), ai (8), next (3), [[Representational State Transfer (REST)|Rest]] (1), [[Zoom]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** select the (2), go to (1)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is called (1)
> **Code Identifiers:** unityengine (1)
> **URLs:** [unityengine.ai](https://unityengine.ai) (1)
> **Env Vars:** mpc (1)

#### Working with agents and obstacles
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=0)** - [Instructor] In the previous movie, we looked at how we could create an enemy character that would follow the player intelligently.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=8)** But of course, in creating that character we had to generate a navigation mesh and a navigation mesh depends on our environment being completely static.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=19)** But what happens in cases where maybe we want to have a sliding door that opens and closes and moves around and that's going to have an effect on whether the enemy character can reach us and how it can chase us.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=34)** In these cases, we want to use NAV mesh obstacles let's see how that works.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=41)** I'm going to create a completely new cube object inside the scene that's going to act as a door to do that I'll choose game object, 3D object and then select cube.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=54)** I'll bring that into the scene into this passage way area over here inside the scene let's bring the cube up further into the scene here.
>
> **[1:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=65)** I'm going to be increasing the size of this cube too to act as a complete block and an obstacle in the scene can now see that inside the viewpoint here.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=77)** At this point, I'll grab the object here I'll move to the rect tool, which allows me to interactively control the size of the cube here.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=89)** Bring that down and bring that further up slightly now, in this case we have a solid object that can potentially move to slide away and this should block the enemy character from moving through.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=104)** If I press play at the moment let's take a look at what happens.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=109)** I'll press play on the toolbar and I'm just going to stand here and wait for the enemy character.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=116)** But notice the character passes through the door as though it wasn't there at all.
>
> **[2:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=122)** That's because when you take a look at the navigation mesh here, it runs through the door.
>
> **[2:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=128)** The way that we can make movable objects part of the navigation system is to select those objects to choose component navigation and then choose NAV mesh obstacle in adding that component to the object.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=144)** I'll switch to the inspector here and move to the NAV mesh obstacle field.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=149)** In that component I'm going to enable the tick box that says CAAV and enable that option.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=157)** Nothing appears to change inside the viewport but if I switched back to the navigation mesh and take a look here, you'll see the actually the navigation mesh has been cut apart and if I grabbed that cube and I begin to move this around, you'll see that the navigation mesh is repairing itself dynamically based on where this object is.
>
> **[3:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=181)** So now let's close the door this time and press play on the toolbar and when I do this, the MPC is now stopped at the door here and if I begin to open the door the character can now pass through.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=202)** So here we have a classic example of how we would use a movable object with a navigation mesh system.
>
> **[3:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=209)** I'm going to go ahead and delete this cube because for the purposes of our tests we don't need movable objects in this way.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=218)** When you're using NAV mesh obstacles you want to have as few of those as possible inside your scene.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/working-with-agents-and-obstacles?u=76281980&t=225)** But of course you need enough to create the believable world that you need to create and our example, I'm going to get rid of NAV mesh obstacles and just focus on the bare bones navigation system that we have here, great, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (12), game (1)
> **Env Vars:** nav (5), caav (1), mpc (1)
> **UI Navigation:** switch to (1), open the (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Completing the AI Project

[↑ Back to Table of Contents](#table-of-contents)

#### Creating the Patrol state
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=0)** - [Instructor] In the previous chapter we started to create our finite state machine project.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=5)** And in this chapter, we're going to complete that project.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=8)** We'll focus specifically here on the NPC character.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=11)** We'll start in this video by focusing on the patrol state for the NPC.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=17)** In the patrol state, the NPC can move around the level and if they see the player character they'll change from patrolling to chasing.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=25)** Now, while they are patrolling they're going to be selecting random destinations to move to.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=31)** They'll move to a random destination and when they get there, they'll change to a new destination and so on.
>
> **[0:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=37)** Now, to get started at creating the patrol state I'm going to give our NPC character a field of view, a complete area inside the world where they can see being their eye point.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=48)** So I'm going to double-click the enemy character to focus our viewport onto the enemy here.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=54)** And then selecting the enemy character, I'm going to move to the menu and choose Component, Physics, and then select Box Collider from the menu.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=62)** This Box Collider will represent their field of view.
>
> **[1:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=65)** I'll move along to the Inspector here to tweak the properties for the Box Collider.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=70)** Now, because this is acting as a field of view and not a collider itself, I'm going to change this and enable Is Trigger here.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=79)** In addition to that, I'm going to use the Size and the Center fields to resize the collider to represent the field of view for the NPC.
>
> **[1:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=88)** In this case, I'm going to move to the Z field, click and drag to increase the length of this.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=94)** I'm going to do the same for the X field too, and also the Y.
>
> **[1:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=99)** Now, because the character can't see behind themselves, they haven't got eyes in the back of their head, I'm going to use the Center parameter here in the Z field to increase the field of view for the NPC character.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=114)** I want to be careful not to make this too long, because otherwise they're going to be able to see the player from practically anywhere.
>
> **[2:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=120)** So now in resizing this, I've represented the field of view for the NPC character.
>
> **[2:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=126)** Now, in addition to this, I also want to create some waypoints inside the scene.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=131)** These waypoints are the random destinations that the NPC is going to be choosing between when they're choosing where to move.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=139)** Now, to create these waypoints, I'm simply going to use empty objects to represent their locations.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=145)** To get started at that I'm going to move to the menu here, choose Game Object, create Empty, and I'm going to rename the empty to Waypoints.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=156)** I'm going to center it to the world origin.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=157)** It's not crucial that you do that, but I think it's kind of neat to do that.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=161)** In addition, I'm going to create some child objects.
>
> **[2:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=164)** This object here, the Waypoints object, is just going to be a container for all the waypoints we could potentially add.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=172)** So I'm going to right-click on Waypoints, choose Create Empty, and I'm going to rename that to Waypoint.
>
> **[3:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=181)** Now, because this is an empty object we can't see it inside the viewpoint if we de-select it.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=186)** But I want to make this visible, so we can easily see it.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=190)** To do that, I'm going to move to the Inspector to the top left-hand side, click on the cube, and from the cube icon, select the orange tag, so I can easily see that inside the viewpoint.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=201)** The next thing that I want to do is to position this waypoint to be at the location that I want to have for our very first waypoint.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=208)** So I'm going to place it around about here, close to the floor inside the very first room.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=215)** Now, all the waypoints in this level will need to be tagged as waypoints, so that inside script I can easily find them if I need to.
>
> **[3:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=224)** So I'm going to move to the Tag field where currently this object is untagged.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=229)** If I click on the drop-down, you can see that we don't have a tag for waypoint.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=234)** Now, I could try to use the Respawn tag but I'm going to create a completely new tag.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=240)** So I'm going to move to the bottom and select Add Tag and then click the plus icon to add a new tag.
>
> **[4:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=246)** I'm going to call this tag Waypoint and press Enter on the keyboard.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=251)** Then I'll select the waypoint in the scene and make sure for the Tag field that I click in the drop-down and I assign it the Waypoint tag specifically.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=260)** Then I'll select the object and I'm going to duplicate it with Control + D or Command + D on a Mac.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=267)** So I'm going to choose Command + D and simply move that waypoint to a new location, which is going to be the position for the second waypoint.
>
> **[4:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=275)** I'll move that to the left just a little bit.
>
> **[4:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=278)** Going to duplicate this one too, move it to maybe around about here somewhere.
>
> **[4:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=283)** Duplicate again and move it to this side round about here, maybe move it up a little bit.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=291)** And duplicate that one over to here.
>
> **[4:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=293)** And I'm just selecting points at random pretty much.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=296)** Duplicate this one and move it to here.
>
> **[4:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=299)** And finally, duplicate another one, so we have a good selection of waypoints around the level that potentially the NPC could move to when it's patrolling.
>
> **[5:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=309)** Now, let's create the patrol state itself inside our script file.
>
> **[5:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=314)** To do this I'm going to be working on the AI state script that we created previously.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=319)** By moving to the Scripts folder, and here we have the AI Chase Script.
>
> **[5:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=323)** I'll double-click that to open it inside Visual Studio.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=329)** And here's our AI Chase Script inside Visual Studio.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=333)** The first thing that I want to do is to create the state patrol.
>
> **[5:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=337)** That is fundamentally the behavior that the NPC will be showing when they're patrolling.
>
> **[5:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=342)** To do this I'm going to use a coroutine.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=345)** So I'm going to move down slightly further and create a completely new coroutine.
>
> **[5:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=350)** I'll choose public IEnumerator, and I'll call this StatePatrol, and here we're going to be defining the patrol behaviors.
>
> **[6:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=360)** The first thing that we want to do when we're patrolling is to get a list of all those waypoints in the level, because we're going to be choosing one of them at random.
>
> **[6:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=370)** To do this I'm going to create a list of waypoints.
>
> **[6:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=374)** So I'm going to use an array.
>
> **[6:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=377)** GameObject array Waypoints = and we're going to find our waypoints by their tag.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=384)** So I'm going to choose GameObject.FindObjects, notice the plural here, FindObjectsWithTag, and I'm going to be finding the WaypointsObjects, like so.
>
> **[6:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=397)** In the next line, I'm going to be choosing one of the waypoints at random from that list.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=403)** So I'm going to choose GameObjects, CurrentWaypoint = and here is where I'm going to choose them at random.
>
> **[6:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=414)** So from that list, I'm going to select Waypoints, and then inside the array index here we're going to be choosing a random number by using Random.Range it's going to be a random range between zero and then the maximum, which is going to be the length of the array, like so.
>
> **[7:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=435)** Now, in choosing a waypoint at random, the next thing I want to do is I want to define a distance to the target, to the waypoint itself.
>
> **[7:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=444)** This is going to define how close the NPC should get to the waypoint before it chooses another one to move to.
>
> **[7:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=451)** So I'm going to choose float TargetDistance, and I'll set that to the initial value of 2.
>
> **[7:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=458)** And now I'll create a loop, which means that the NPC is going to continually repeat the patrolling behavior.
>
> **[7:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=465)** So I'm going to choose while CurrentState = AISTATEPATROL.
>
> **[7:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=474)** While the AI state is currently in the patrol state, we should continue the patrolling behaviors.
>
> **[8:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=480)** You'll notice slightly higher up at line 11 we have the CurrentState variable, which is keeping track of the current state that we're in.
>
> **[8:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=488)** By default it's set to the patrol state, but, of course, it could be patrol, chase, or attack.
>
> **[8:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=494)** So inside the while loop here is where we want to continually move towards the waypoint that we have selected.
>
> **[8:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=501)** So I'm going to choose ThisAgent.SetDestination and we're going to be moving towards the selected waypoint by choosing CurrentWaypoint.transform.position.
>
> **[8:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=514)** Now, after that we want to check how close are we to the current waypoint.
>
> **[8:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=520)** If we are within the target distance then we should choose a new waypoint to move towards.
>
> **[8:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=525)** We can check the distance between any two points by using the function Vector3.Distance.
>
> **[8:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=531)** Here's how we do that.
>
> **[8:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=532)** We can choose if Vector3.Distance and we can plug in our two inputs.
>
> **[8:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=539)** The first input should be the position of the NPC character and that's represented by transform.position.
>
> **[9:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=546)** Now, the second value is the position at the waypoint.
>
> **[9:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=549)** And that is CurrentWaypoint, which is represented here, CurrentWaypoint.transform.position.
>
> **[9:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=559)** And if the distance between those two points is less than the TargetDistance that we've set, then we need to select a new, random waypoint.
>
> **[9:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=568)** We've already seen the code to do that.
>
> **[9:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=570)** It's here at line 22.
>
> **[9:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=572)** Current waypoint equals a random waypoint.
>
> **[9:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=576)** The last thing that we need to have on this line here inside the while loop to prevent this from looping infinitely is a yield statement that pauses for one frame for every iteration of the loop.
>
> **[9:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=588)** To do that I'm going to write yield return null.
>
> **[9:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=594)** And then I'm going to save that code.
>
> **[9:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=597)** We've now defined our state patrol coroutine.
>
> **[10:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=600)** And the last thing we need to do is to initiate that coroutine when the level begins to put the NPC into the patrol state.
>
> **[10:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=608)** To do that I'm going to use the Start function here by choosing void Start and inside here I'm going to initiate the patrol coroutine simply by using StartCoroutine to initiate StatePatrol.
>
> **[10:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=623)** And now I'm going to choose File and Save again and go back to Unity to test out the code that we have just created.
>
> **[10:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=631)** In very few lines, using a pretty short coroutine, the StatePatrol here, alongside the initiation of it here, we've created some pretty straightforward behavior and yet it's going to have a really important effect to how intelligent our NPC appears.
>
> **[10:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=647)** So I'm going to make sure I go back to the scene here.
>
> **[10:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=650)** And actually, before I initiate the code, there's just one thing I want to check.
>
> **[10:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=654)** Just to make sure that we haven't made a mistake when it relates to tags.
>
> **[10:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=658)** If I select one of my waypoints you can see that the tag is actually Waypoint, singular.
>
> **[11:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=665)** But if I go back to my code here, you'll see that I'm actually searching for the object based on the plural.
>
> **[11:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=671)** So I want to just delete that S and resave.
>
> **[11:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=675)** Very easy mistake to make that.
>
> **[11:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=676)** Let's just go back to Unity here, our code recompiles.
>
> **[11:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=682)** I'm going to grab the Game tab and move that side-by-side with the Scene tab, so that I can take a look at the NPC character moving around the scene and choosing waypoints.
>
> **[11:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=692)** So I'm going to press play on the toolbar to test out our waypoint functionality.
>
> **[11:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=701)** And there straight away the NPC is moving to a randomly selected waypoint.
>
> **[11:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=706)** On reaching there, they're then selecting a new waypoint and moving towards that one.
>
> **[11:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=711)** And then on arriving at that waypoint, they'll select another one.
>
> **[11:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=714)** You can see here they've chosen waypoint six and now they're moving towards waypoint four maybe.
>
> **[11:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=719)** No, actually could it be waypoint three?
>
> **[12:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=724)** Looks like it's waypoint two.
>
> **[12:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=726)** No, it's all the way down to the original waypoint, and then on reaching there it's going to select another random waypoint.
>
> **[12:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=733)** Great, that's the random selection behavior in practice here where the NPC now has the ability to choose between different waypoints in the scene, to select one of those random, and move towards it.
>
> **[12:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=747)** We still don't have the functionality to test whether the NPC can see the player character yet, and whether they need to move to chase.
>
> **[12:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-patrol-state?u=76281980&t=755)** The chase state is what we're going to focus on in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), ai (4), game (2), [[Unity]] (2)
> **Env Vars:** npc (19), aistatepatrol (1)
> **CLI Commands:** make (6), find (2)
> **UI Navigation:** select the (3), double-click (2), click on (2), right-click (1)
> **Cross-References:** go back to (4), in the next (2), previous chapter (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Tools:** visual studio (2)
> **Warnings:** be careful (1)

#### Creating the Chase state
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=0)** - [Instructor] In this movie, we'll create the second state for our NPC, which is the chase states.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=6)** This state happens when, after patrolling around the level, the NPC spots the player, and starts chasing them.
>
> **[0:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=14)** Now, this is also the first state in which we introduce an additional second state to our finite state machine.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=21)** So, we'll also need to set up our state machine to manage between multiple states.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=26)** Let's get started.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=27)** I'm going to move to the Scripts folder, double click on AI Chase to open that inside Visual Studio.
>
> **[0:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=33)** Here inside Visual Studio, right now we have the Start function, which uses StartCoroutine to initiate the patrol state.
>
> **[0:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=42)** Now, that works absolutely fine when we have only one state to worry about.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=47)** But now, we're introducing a second state.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=50)** So, the first function I'm going to create is a change state function that ensures that we only go through that function to change states.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=60)** I'm going to insert that beneath the Start function by choosing Public Void ChangeState.
>
> **[1:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=68)** It's going to accept just one argument, and that argument is going to be the state to change to, AISTATE NewState.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=79)** Now, when we enter the ChangeState function, the first thing that we want to do, since each state is going to be a coroutine, is to stop all coroutines.
>
> **[1:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=90)** It could be that there's an existing state running, such as state patrol or state chase.
>
> **[1:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=96)** And since we're changing the state we want to stop that coroutine.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=100)** After stopping the coroutine, I want to change what the current state is based on the new state that has been input into the function.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=109)** After then changing the state, I'm going to use a switch statement to initiate the relevant coroutine.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=116)** So I'm going to choose switch, CurrentState, and inside this switch statement, we're going to initiate which coroutine is the relevant one.
>
> **[2:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=126)** In the case of AI patrol, which is going to be case AI.PATROL, we're going to initiate the patrol function.
>
> **[2:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=134)** Let's make sure I select the correct object here.
>
> **[2:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=137)** And I'm going to choose a StartCoroutine, and I'm going to choose StatePatrol like so, and then after that, choose break to terminate the switch statement.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=150)** Now, if the state is not patrol, but is chase, then I want to initiate the chase coroutine.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=156)** I can do that by choosing AISTATE.CHASE, and then I can run StartCoroutine, StateChase.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=168)** Now, we don't have a StateChase coroutine just yet, but we'll be creating one alongside the attack coroutine too.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=176)** So I'm going to choose AISTATE.ATTACK, and we'll also create a start coroutine for StateAttack.
>
> **[3:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=192)** Now, before moving forwards any further, I'm going to create the two coroutines, StateChase and StateAttack.
>
> **[3:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=198)** I'm going to do that beneath the state change function.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=201)** So, I'm going to choose public IEnumerator StateChase, and also the same thing here for public IEnumerator StateAttack.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=217)** And to ensure these functions are valid we'll need to include at least one yield statement to make it valid for compilation, so I'm just going to add, yield break into those and we now make our code valid.
>
> **[3:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=230)** Now, the next thing that I want to do is to move back up to our start function.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=235)** Right here in the start function that we coded in the preceding video, we initiated Statepatrol by using the start coroutine function.
>
> **[4:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=243)** But now, whenever we change states, it must go through this ChangeState function.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=247)** So, I'm going to change this line from our normal start coroutine here to ChangeState.
>
> **[4:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=254)** And I can simply plug in the patrol state to be the default initial state for the NPC.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=260)** Now that I've done that, I'm going to move to the StateChase function because here we want to implement the chase functionality.
>
> **[4:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=268)** In this state, the NPC should continually chase the player character.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=274)** So I'm going to choose here, ThisAgent.SetDestination, and we're going to be setting the destination to the player character here.
>
> **[4:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=286)** So, I'm going to choose Player.Transform.Position.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=291)** Now, we want to do this inside the while loop for as long as the state is active so I'm going to choose AISTATE.CHASE.
>
> **[5:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=300)** So long as we own the chase state, we're going to be constantly chasing the player.
>
> **[5:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=305)** Going to move this here.
>
> **[5:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=307)** And the last thing I would need to have here inside the while loop to prevent this from crashing the game by an infinite loop is to have a yield statement that waits for one frame.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=319)** I'm now going to save this code by choosing File and then Save.
>
> **[5:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=325)** And I'll go back to Unity to test out our code.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=329)** Now our code compiles here, and that's looking good.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=333)** We don't have any compilation errors in the console.
>
> **[5:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=336)** But I'm going to jump back to our script file, because although we have implemented both the state chase and also the state patrol, we don't have the switch system set up that determines when the player can be seen and when we need to change state.
>
> **[5:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=353)** For that, we're going to be using the collider that we've attached to the NPC.
>
> **[5:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=357)** So, underneath state patrol I'm going to create OnTriggerEnter, and here we're going to be testing to see whether the player has entered the visible trigger of the NPC.
>
> **[6:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=370)** The first step I want to do here is to eliminate whether it's the player or not.
>
> **[6:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=374)** If it's not the player, we can ignore the object, but if it is the player, we want to change the state to chase.
>
> **[6:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=380)** So in the very first line, I want to make sure what the tag is for the entered object.
>
> **[6:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=386)** In this case, we're checking to see if it's the player and if it's not, we're terminating the function, but otherwise we are changing the state to AISTATE.CHASE.
>
> **[6:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=398)** And now I can save this code by choosing File and Save.
>
> **[6:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=402)** Let's go back to our function here to test out our code.
>
> **[6:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=406)** I'm going to select the enemy character to take a look.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=409)** Before I run the game here, I'm going to choose File and Save to save the scene.
>
> **[6:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=415)** I'm now going to press Play on the toolbar and take a look to see what happens.
>
> **[7:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=428)** So now we have the NPC who is moving around between random waypoints.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=434)** We don't know in advance which waypoints they're going to choose, but as they move between the waypoints, at some point they're going to see the player.
>
> **[7:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=444)** And now, notice that the NPC has seen the player and is moving towards the player.
>
> **[7:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=449)** And even now they've pushed me off the edge of the world.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=452)** But in this case here, they've noticed the player and they've started to chase me.
>
> **[7:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=456)** And notice that their behavior changed from patrol to chase.
>
> **[7:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=462)** We can test that out again by pressing Play on the toolbar and inside the scene view, I'm going to grab the player object here.
>
> **[7:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=471)** So, here is the player object, and I'm going to reposition them in the scene to maybe somewhere up here in the world.
>
> **[7:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=477)** Let's make sure that I bring them into the scene here.
>
> **[8:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=481)** And as I do that, you'll notice that the NPC has already spotted the player.
>
> **[8:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=485)** You can see they're already engaged in chasing us around the level.
>
> **[8:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=489)** So, that's pretty good.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=490)** If I check the enemy character inside the hierarchy here, and scroll down, you'll see that in AI chase, the current state has changed to state chase, perfect.
>
> **[8:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=503)** We've now set up our scene and the finite state machine to manage between two different states, patrol and chase, and that's great.
>
> **[8:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-chase-state?u=76281980&t=513)** However, the next state, the attack state, is the final state we need to implement for our finite state machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (4), next (2), game (2), [[Unity]] (1)
> **Env Vars:** npc (9), aistate (5), chase (3), patrol (1), attack (1)
> **CLI Commands:** make (5)
> **UI Navigation:** select the (2), click on (1), scroll down (1)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (2)
> **Definitions:** is a  (1)

#### Creating the Attack state
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=1)** - [Instructor] In the proceeding movie we created the chase state for our NPC character.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=6)** This happens when the NPC can see the player, and so they decide to continually chase the player.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=12)** But now of course, when the NPC gets near enough within the attacking range to the player the NPC should start attacking the player.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=21)** Let's set that up in code, To do that, I'm going to go to the scripts folder and double click on AI chase to bring that into view here and inside the chase function we're going to establish an attacking distance.
>
> **[0:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=35)** To do that I'm going to choose float attack distance and maybe it's going to equal the value of maybe two meters.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=43)** When we are within two meters of the player character we can start attacking the player.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=48)** To do this inside the wild loop here, I'm going to check what the distance is between the NPC and the player character.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=57)** We've seen how to do that in the patrol state I'm going to use a Vector3.Distance function, Vector3.Distance and we're checking between the NPC position and also the player transform.position.
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=76)** If it's less than the attack distance then effectively we should change state.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=83)** So I'm going to choose change state AI state attack, and then terminate the current routine with a yield break.
>
> **[1:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=98)** And choose file, and then choose save.
>
> **[1:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=102)** Now in the attack states effectively, all we want to do is to continue the loop here for as long as the attack is active.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=114)** And we're going to print the message here to the console print attack.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=123)** In addition to printing the message attack we're also going to use the NAF mesh agent to continually chase the player so that as they are attacking, they're also chasing the player.
>
> **[2:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=136)** The other thing that we need to do here as well is we need to have a yield return null to ensure we don't have an infinite loop here.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=144)** The last thing I want to make sure here is that during the attack the player doesn't move beyond the attacking distance.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=151)** This can happen for example, if the player can move faster than the enemy, in that case, it might be that the enemy falls behind and needs to change from the attacking state to the chasing state again.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=165)** So I'm going to grab the attack distance variable and put that into the attack state like so.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=173)** Now inside this current routine here inside the wild loop, we want to do a similar check for the distance here, but this time instead of checking to see if it's less than we want to see if it's greater than because in that instance we should change back from the attack state to the chase state,
>
> **[3:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=198)** like so.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=201)** And I'm now going to save my code with file and save to go back to unity.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=208)** The code now compiles, I'm going to switch to the console to look out for our print message.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=214)** So I'm going to hit play on the tool bar and the enemy springs to life.
>
> **[3:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=220)** You can see that right now, they're in the patrol state.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=225)** I could take the player character and begin to walk them up the ramp here.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=231)** If you check out the enemy character here they've now spotted us, so they're running after us.
>
> **[3:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=237)** They're still in chase mode, they haven't quite caught up with us yet.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=241)** And now they've moved into attack mode.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=244)** If I begin to outrun the player character or the enemy character, actually it looks like based on the speed that the NPC can actually move faster than me.
>
> **[4:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=256)** So let's tweak that distance a little bit.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=258)** I'm going to grab the enemy character here and move to the NAF mesh agent component, which is here.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=264)** You'll see that they have a speed in place.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=267)** I'm going to change that speed to 1.5.
>
> **[4:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=270)** So now I've tweaked the speed of the enemy counter, let's give that another try.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=274)** I'm going to press play on the tool bar, here I am back in first person mode going to run up the ramp here, and I'm behind the NPC character but notice from the inspector they've changed to chase, now they're pushing me, they're in attack.
>
> **[4:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=292)** I'm going to run away, they've gone back to chase mode because I've gone beyond their attacking distance.
>
> **[4:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=299)** So there you can see an example of how we have an NPC character.
>
> **[5:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/creating-the-attack-state?u=76281980&t=304)** They have three different states patrol, chase, and attack and that a finite state machine is fundamentally about building the connections between those states to get the most realistic and believable behavior we can for our NPC characters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Mesh]] (2), [[Unity]] (1), hit (1)
> **Env Vars:** npc (10), naf (2)
> **UI Navigation:** go to (1), click on (1), switch to (1)
> **CLI Commands:** make (1)
> **Versions:** 1.5 (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Optimzing the FSM
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=0)** - [Instructor] In the proceeding movie, we completed our Finite State Machine.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=5)** But in this video, I want to look at how we can optimize it and improve it, by using C-sharp properties instead.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=13)** Previously, we saw that here at line 11, we have our AISTATE's CurrentState variable, which right now is a public variable, meaning that potentially anything can change it, either within the class or from outside of it.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=29)** But in this case, I'm going to substitute the functionality we have here to replace our ChangeState function by using a C-sharp property, so that every time a value is reassigned to CurrentState, is going to run the code that we've already set up here.
>
> **[0:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=45)** Let's see how we do that.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=47)** I'm going to start by changing our variable from public to private.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=52)** And I'm going to put an underscore in front of the CurrentState variable name here.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=57)** And I'm going to create a new variable above it, that is not a variable strictly speaking, but as a C-sharp property.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=64)** Let's see how that's set up.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=66)** I'm going to choose public, AISTATE, and I'm going to call it CurrentState.
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=73)** But this time I'm going to have the opening and closing braces, just like a function.
>
> **[1:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=78)** And here we're going to have, get and set accessor methods.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=83)** The get is going to return the CurrentState object here, and set is going to be what happens when the value of CurrentState changes.
>
> **[1:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=93)** So, in this case, I'm going to set the value of this to AI PATROL, and I'm going to change most of what is in ChangeState, into the property.
>
> **[1:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=103)** So, I'm going to have stop or coroutines at the top line here.
>
> **[1:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=108)** The CurrentState is in fact going to equal the value that is specified as part of the property.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=116)** And then, finally, down here we're going to have our switch statement that I'm going to transport in here, inside the property.
>
> **[2:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=125)** I can now change the ChangeState function, I can remove it entirely just by deleting it.
>
> **[2:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=132)** And now, all we need to do is to replace the ChangeState lines with lines that reference the property itself, that is, the CurrentState property.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=142)** So, here at this line CurrentState, in the start function, I'm going to use here, CurrentState equals PATROL.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=151)** And when this line happens, it's going to move to the set accessor here, and run this as though it were a function.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=158)** I'm going to replace these other instances here where we have ChangeState, to ChangeState equals attack.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=165)** I'm going to do that here, scroll down a bit further, ChangeState equals AI CHASE.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=176)** And that's looking pretty good.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=177)** Actually, there's one more here that I'm going to set.
>
> **[3:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=185)** Great.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=186)** And the last thing that I want to do, is that it's pretty useful sometimes to see what we're in, in terms of which state we're in.
>
> **[3:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=193)** Now, public C-sharp properties are not visible from the object inspector.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=199)** But we can make private variables visible to the inspector, by moving to the private property here, and indicating using a C-sharp attribute that this is a serialized field.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=211)** I can now choose file and save to save the code, and go back to Unity here.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=217)** If I check out the AISTATE here, you can see that CurrentState is still visible in the inspector.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=225)** And what we're seeing here now, is the private variable that is behind the C-sharp property.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=231)** By now pressing play, our code is going to behave just as it did before, except it's using the much more elegant C-sharp property system.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=240)** And that's great.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/optimzing-the-fsm?u=76281980&t=241)** So, here we've seen an example of how we can take our existing Finite State Machine, and improve it, and optimize it by using cleaner C-sharp properties to make our code more readable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Unity]] (1)
> **Env Vars:** aistate (3), patrol (2), chase (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=0)** - [Alan] Well, congratulations on reaching the end of this Unity Certified Associate training course presented by LinkedIn Learning.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=8)** In reaching this far in the course you've seen a lot of scripting functionality right here inside of Unity.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=15)** You seen how to create script files, how to attach those to objects within the scene, how to move objects and rotate them, and how to create core gameplay elements, like timed behaviors, how to attach scripts to objects to respond to trigger events, such as when the player enters a particular region of the level.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=36)** We then took all of this to one stage further by creating a finite state machine.
>
> **[0:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=42)** To create artificial intelligence for a non-player character inside the scene, we built a navigation mesh so that character could intelligently move around and chase the player.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=54)** Now, this is just the beginning of what scripting can do here inside Unity.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=59)** By becoming accomplished at scripting, you can customize pretty much any element of gameplay you like, and you can even customize the Unity editor itself.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=70)** There's so much to see and to do with scripting.
>
> **[1:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=74)** My next recommendation to you is to check out the API reference documentation over the Unity website to take a look at the range of classes and functions on offer to you for customizing the behavior of Unity.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=89)** I hope you found this course helpful.
>
> **[1:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=91)** It's been my pleasure to share with you the great scripting here inside Unity.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=95)** This has been LinkedIn Learning, and I've been Alan Thorn.
>
> **[1:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-scripting-with-c-sharp/next-steps?u=76281980&t=98)** Thank you and see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unity]] (7), [[Scripting]] (5), [[LinkedIn]] (2), next (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** api (1)
> **Documentation:** api reference (1)
> **Analogies:** such as (1)
> **Speakers:** - [alan] (1)


## Instructor

- [[Alan Thorn]]

## Resources

- Exercise files available

## Skills Covered

- Game Development
- C#
- Unity

## Path Context

### In [[Prepare for Unity Certification]]
← [[Cert Prep- Unity Certified Associate Game Developer UI and 2D Games]] | **3 of 7** | [[Cert Prep- Unity Certified Associate Game Developer Materials and Lighting]] →

## Appears In

- [[Prepare for Unity Certification]]

## Related Courses

_Courses sharing skills:_

- [[Cert Prep- Unity Certified Associate Game Developer Design, Production, and Industry Awareness]] — Game Development, Unity
- [[Cert Prep- Unity Certified Associate Game Developer Audio and Effects]] — Game Development, Unity
- [[Cert Prep- Unity Certified Associate Game Developer UI and 2D Games]] — Game Development, Unity
- [[Cert Prep Unity Certified Associate Game Developer Fundamentals]] — Game Development, Unity
- [[Learning C-]] — C#

---

[↑ Back to top](#)