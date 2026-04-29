---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-gui-development-with-tkinter-2
url: "https://www.linkedin.com/learning/python-gui-development-with-tkinter-2"
duration_minutes: 296
duration: 4h 56m
level: Intermediate
updated: 2/2/2024
learners: 229277
skills:
  - Python (Programming Language)
  - Tkinter
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFxbZbVAeKrYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669861459?e=2147483647&amp;v=beta&amp;t=7wpokv5Km5RV3bO2RGrFjE6RV-qExMtzWUyESxiR1H4"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your Skills in Python]]'
prev_courses:
  - '[[Python Automation and Testing]]'
next_courses:
  - '[[Create an Open-Source Project in Python]]'
path_nav: '[{"path":"Advance Your Skills in Python","position":5,"total":7,"prev":"Python Automation and Testing","next":"Create an Open-Source Project in Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/tkinter
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20GUI%20Development%20with%20Tkinter.md)

![Python GUI Development with Tkinter](https://media.licdn.com/dms/image/v2/C4E0DAQFxbZbVAeKrYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669861459?e=2147483647&amp;v=beta&amp;t=7wpokv5Km5RV3bO2RGrFjE6RV-qExMtzWUyESxiR1H4)

# Python GUI Development with Tkinter

> Put an end to writing command-line interfaces for your programs. Use Tkinter, the Python package for creating themed interface elements with the Tk GUI toolkit. Join Barron Stone in this course as he walks through the most popular Tk widgets and shows you how to customize their appearance and behavior to fit your application. Learn how to manage the placement of those widgets on the GUI and make t

> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2) | 4h 56m | Intermediate | 229K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - Create a GUI for your Python desktop application
  - What you should know
  - Using the exercise files
  - 2023 Update
- [**1. Getting Started with Python and Tkinter**](#1-getting-started-with-python-and-tkinter) (3 videos)
  - Installing Python 3 and Tcl/Tk for Windows
  - Installing Python 3 and Tcl/Tk for Mac
  - Saying hello to Tkinter
- [**2. Tkinter Concepts**](#2-tkinter-concepts) (5 videos)
  - Tk and Tkinter background
  - Creating and configuring widgets
  - Managing widget placement
  - Handling user events
  - Revisiting Hello, Tkinter!
- [**3. Basic Widgets**](#3-basic-widgets) (6 videos)
  - Displaying text and images with labels
  - Capturing input with buttons
  - Presenting choices with check buttons and radio buttons
  - Entering single-line text with the Entry widget
  - Making selections with the Combobox and Spinbox
  - Inputting values and displaying status with the Scale and Progressbar
- [**4. Organizational Widgets**](#4-organizational-widgets) (4 videos)
  - Organizing widgets with frames
  - Creating additional top-level windows
  - Separating widgets within paned windows
  - Grouping widgeting within a tabbed notebook
- [**5. Advanced Widgets**](#5-advanced-widgets) (10 videos)
  - Entering and displaying multiple lines with the Text widget
  - Adding tags, marks, images, and widgets to the Text widget
  - Building a hierarchical treeview
  - Adding columns and selecting items in the Treeview
  - Building cascading menus
  - Drawing a basic line on the Canvas
  - Drawing complex shapes on the Canvas
  - Attaching a scroll bar to widgets
  - Configuring widget styles
  - Prompting users with the Messagebox and dialogs
- [**6. Geometry Management**](#6-geometry-management) (3 videos)
  - Using the Pack geometry manager
  - Using the Grid geometry manager
  - Using the Place geometry manager
- [**7. Event Handling**](#7-event-handling) (5 videos)
  - Configuring command callbacks
  - Binding to keyboard events
  - Binding to mouse events
  - Binding to virtual events
  - Binding to multiple events
- [**8. Building an Application**](#8-building-an-application) (6 videos)
  - Defining project requirements
  - Planning the design
  - Creating the widgets
  - Laying out of the widgets
  - Binding to events
  - Finishing the GUI with style
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Create a GUI for your Python desktop application
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=0)** - Hi, I'm Barron Stone and welcome to Python GUI Development with Tkinter.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=6)** In this course, you'll see how to build a functional and professional looking graphical user interface for your Python applications.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=13)** Tkinter is the defacto module for Python GUI development and comes included with the standard Python distributions.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=20)** It provides an interface to the TK GUI toolkit, which is available for most operating systems and includes themed GUI elements that maintain a consistent look and feel with those operating systems.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=32)** This course will introduce you to the most commonly used Tk widgets, and it will teach you how to create and configure them with a customized appearance and behavior.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=42)** I'll show you the three different ways to manage the placement of those widgets on your GUI, and understand when it's appropriate to use each of those methods.
>
> **[0:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=50)** And finally, a graphical user interface isn't very useful if it doesn't react to a user's actions.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=56)** So, we'll take a look at how to use event driven programming in Tk to execute the appropriate code when user actions or events occur.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=65)** Tkinter let's you put the days of writing command-line interfaces for your Python applications behind you, once and for all.
>
> **[1:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/create-a-gui-for-your-python-desktop-application?u=76281980&t=71)** Let's jump in to Python GUI Development with Tkinter.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), module (1), finally, (1)
> **CLI Commands:** python (6)
> **Env Vars:** gui (6)
> **Prerequisites:** configure (1)
> **Speakers:** - hi (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=0)** - [Barron] Before you begin this course you should already have a basic, working knowledge of Python and be comfortable writing and executing your own Python programs.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=8)** If you're not already familiar with Python then I highly recommend taking one of the other beginner courses that are available on [Lynda.com](https://Lynda.com) first.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=16)** Once you're comfortable with the material in those courses you'll be ready to tackle Python GUI Development with Tkinter.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=22)** This course assumes you already have Python installed on your machine and have it configured for the development environment of your choice.
>
> **[0:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=29)** For some of the videos in this course I'll be using IDLE as a shell interpreter to interactively demonstrate concepts.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=35)** For other videos, I'll be using IDLE as a text editor to write and execute example programs.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=41)** I choose to use IDLE because everyone taking this course should have it from installing Python and it has a simple interface which works well enough for the basic programs we'll be writing.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=51)** You can use any development environment that you want as you work through this course and I encourage you to stick with what you're already familiar with using.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=59)** A basic text editor will work just fine for these programs or, you can use a more advanced IDE like Eclipse if that's your preference.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=67)** Finally, I'll be teaching this course using Python 3.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=70)** If you're using Python 2, then there will be some minor differences in the code that you'll need to account for.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=76)** I'll do my best to point out the ones that are related to Tkinter as we come to them.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/what-you-should-know?u=76281980&t=80)** Keep in mind that the exercise files will require some minor changes to run if you're using Python 2 because they're written for Python 3.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10)
> **Env Vars:** idle (3), gui (1), ide (1)
> **Code Keywords:** interface (1), finally, (1), for. (1), require (1)
> **Versions:** python 3 (2), python 2 (2)
> **Prerequisites:** before you begin (1), you'll need (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980&t=0)** - [Barron] For this course, I've included exercise files for you to practice with and use as reference.
>
> **[0:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980&t=5)** They're organized into numbered directories for each chapter of the course and the individual files are numbered and named according to the topics of their related videos.
>
> **[0:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980&t=15)** For video segments in which I'll use IDLE as the interactive shell to demonstrate creating and configuring widgets the example files will contain the series of commands that I enter into IDLE for you to use as a reference.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980&t=28)** I'll also add some additional code around those commands such as print statements so that the example file can be run as a stand-alone Python program and give you similar outputs to the console.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-exercise-files?u=76281980&t=39)** For other video segments where I use IDLE to write short programs as a text editor I'll include the starting template file so you can use it to follow along and practice programming as well as the final resulting files created in the video.

> [!info]- Semantic Content
>
> **Env Vars:** idle (3)
> **Exercise Files:** exercise files (1), template (1)
> **CLI Commands:** python (1)
> **Analogies:** such as (1)
> **Speakers:** - [barron] (1)

#### 2023 Update
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/2023-update?u=76281980)


### 1. Getting Started with Python and Tkinter

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing Python 3 and Tcl/Tk for Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=0)** - [Instructor] If you're a Windows user, you're in luck.
>
> **[0:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=2)** Because the standard Python Windows installer includes both Tcl/TK and the Tkinter Python module.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=9)** This makes the installation process very simple.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=12)** In fact, if you've already installed Python on your Windows machine, then it's very likely you already have everything you need to use Tkinter.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=20)** In this video, I'll walk you through the entire Python Windows installation process, beginning with downloading the installers.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=26)** After that, I'll show you how to verify that Tcl/TK and Tkinter have been properly installed in your machine and functioning correctly.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=35)** To get the Python installer, go to the download page at [Python.org/download](https://Python.org/download).
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=41)** Select the version of Python you want to install.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=43)** In this case, I'm going to choose the Python 3.4.1 64-bit installer and click the link to begin the download.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=51)** After the download is completed, run the .msi installer file.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=56)** This will bring up the Python 3.4 installer.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=58)** Just click Next to continue through the installation prompts and continue until you get to this page.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=65)** Here you can see that there's an installation option for Tcl/TK.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=68)** If I select it, it shows that Tkinter, IDLE and pydoc will be installed as part of this item.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=75)** By default, it should be selected as a feature to be included in the installation and that's what we want.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=80)** So you shouldn't need to change anything.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=83)** Just click Next to continue with the installation.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=87)** After the installer has completed, ww'll want to verify that Tkinter and Tcl/TK were installed and configured correctly.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=94)** To do that, I'm going to open up IDLE and we can access IDLE on Windows 8 by pressing the Windows key, going to the search feature, typing IDLE.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=103)** You'll see here, it's like IDLE, the Python GUI and I'll run that.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=107)** IDLE is the integrated development environment that's included with Python.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=111)** You can use IDLE to perform the checks I'm about to show you on your machine or you can run the Python interpreter from another shell program of your choice.
>
> **[1:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=119)** First, let's try importing the Tkinter package by typing import tkinter.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=126)** Notice that Tkinter is spelled with all lower case letters.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=129)** Press enter, and if we don't get any error messages then it means that Python has successfully found and imported the Tkinter package.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=137)** Next type import_tkinter, be sure to include the underscore before to Tkinter and press Enter.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=147)** This will import the compiled binary associated with the Tkinter package.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=152)** Now that we've successfully imported the Tkinter package let's run the included test routine.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=158)** Type tkinter._test open and close parentheses.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=166)** Press enter and you should see a pop up window like this one.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=170)** If you click on the Click Me button it should add brackets around the text and the window should also tell you what version of Tcl/TK you're running on your machine.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=179)** You can exit out of this window by clicking the Quit button.
>
> **[3:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=183)** If all of this runs without error then you're good to go with Tkinter.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=187)** Now, one last thing I want to point out is that IDLE is actually written in Python using the Tkinter package.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=193)** If you look in the task bar, you notice a little Python logo down here.
>
> **[3:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=197)** This is the same logo you'll see when you run your own Tkinter programs.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=201)** This means that just by virtue of successfully opening IDLE, I already know that Tkinter is working on my machine.
>
> **[3:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-windows?u=76281980&t=209)** However, as I mentioned before, you can still perform these tests for Tkinter without IDLE by running the Python interpreter in another shell application.

> [!info]- Semantic Content
>
> **CLI Commands:** python (16)
> **Env Vars:** idle (10), gui (1)
> **Code Keywords:** continue (3), let (2), module (1), case, (1), default, (1)
> **Versions:** python 3 (2), 4.1 (1)
> **UI Navigation:** go to (1), select the (1), click on (1)
> **Definitions:** means that (2)
> **Code Identifiers:** import_tkinter (1)
> **URLs:** [python.org](https://python.org) (1)

#### Installing Python 3 and Tcl/Tk for Mac
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=0)** - [Instructor] The Mac operating system comes pre-installed with Python.
>
> **[0:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=3)** However, the default Mac Python installation may not include the correct version of Tcl/Tk to use Tkinter.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=10)** Also, the Mac OS typically includes Python 2, whereas this course is oriented around using Python 3.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=17)** In this video, I'll walk you through the entire installation process for Python 3 and Tcl/Tk on Mac to ensure you have the most up-to-date software.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=26)** I'll begin with downloading and installing Python 3.4, then I'll show you how to get the correct version of Tcl/Tk for your operating system.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=34)** To get the Python installer, go to the Python download page at [python.org/download](https://python.org/download).
>
> **[0:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=40)** Scroll down and select the version that you want to use for your computer.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=43)** In this case, I'm going to use Python 3.4 for Mac OS X 10.6 and later.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=49)** Click on the link to start the download.
>
> **[0:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=52)** Once the download is completed, you can navigate to your downloads and double-click on the disk image file.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=58)** This will mount the image.
>
> **[1:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=60)** And when it opens, you can control click on the .mpkg file.
>
> **[1:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=66)** This will give you a menu where you can choose to open the file.
>
> **[1:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=69)** Selecting Open will bring up the Python installer.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=73)** Click Continue to progress to the menus.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=76)** Eventually it'll prompt you to agree to the software license agreement.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=80)** Click the Agree button.
>
> **[1:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=82)** And then you'll see an Install button.
>
> **[1:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=84)** When you click on this Install button, it'll prompt you for your administrator password.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=89)** Enter the password, and then click the Install Software button.
>
> **[1:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=95)** After the installer finishes, we'll have Python 3.4 on this machine.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=99)** However, we still need to download install Tcl/Tk.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=104)** If we look back at that Python download page, you notice there's a little footnote marker next to our download link.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=110)** If I click that, it'll take me to a footnote at the bottom of the page which says there is important information about IDLE, Tkinter and Tcl/Tk on Mac OS X here.
>
> **[2:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=121)** Follow that link and it'll take you to a page that tells us we need to install a version of Tcl/Tk 8.5.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=128)** There's a table down below, which we can use to determine which version we'll need based on our version of the Mac OS since I'm using 10.9 and I'm using Python Release 3.4.1, I'll need ActiveTcl 8.5.15.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=143)** If I click on that link, it'll take me to a lower section of the webpage where I can find a link to ActiveState's website.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=150)** Follow that link.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=152)** ActiveState provides up-to-date binary distributions of Tcl/Tk.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=157)** Scroll down on the page to find the distribution that matches the version we saw on the previous chart.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=162)** I'm selecting this link because I need version 8.5.15 and I'm using Mac OS X 10.5 or greater.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=171)** Click on the link to start the download.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=175)** And when the download is completed, you can navigate to your downloads and double-click on the image file to mount the disk image.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=184)** Again, we'll use our control click to select the pkg file and choose Open from the menu.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=192)** This brings up the installer for ActiveState's ActiveTcl 8.5 which is very similar to the one we just went through for Python 3.4.
>
> **[3:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=200)** Click the Continue button to navigate the menus.
>
> **[3:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=203)** Select Agree when you're prompted to agree to the software license agreement.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=207)** And then when you see the Install button, click that, and again you'll be prompted to enter your username and password.
>
> **[3:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=213)** Enter the credentials, and then hit the install button.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=219)** After the ActiveTcl installation is completed, we can eject those disk images because we're finished with them.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=225)** Go to Finder.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=229)** Eject Python 3.4.1 and eject ActiveTcl.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=235)** Now that we have Python 3.4 and ActiveTcl 8.5.15 installed, to verify that everything's working correctly, let's go to Finder and open IDLE.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=246)** IDLE is the integrated development environment which is included with Python.
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=251)** You can use IDLE to perform the following checks on your machine or you can run the Python 3 Interpreter from another shell program of your choice.
>
> **[4:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=258)** First, let's try importing the Tkinter package by typing Import, Tkinter into the Python command prompt and pressing enter.
>
> **[4:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=268)** Notice that both Import and Tkinter are spelled in all lower-case letters because we're using Python 3.
>
> **[4:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=274)** We did not get any error messages from this, then it means that Python's successfully found and imported the tkinter package.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=281)** Next, type Import underscore Tkinter.
>
> **[4:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=286)** This will import the compiled binary associated with the tkinter package, and press enter.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=292)** Now that we've successfully imported the tkinter package and the associated binaries, let's run the included test routine.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=300)** Type tkinter dot underscore test, open parenthesis, close parenthesis and press enter.
>
> **[5:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=310)** You should see a pop-up window like the one shown here.
>
> **[5:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=313)** If you click on the Click me button, it should add square brackets around the text, and the window will also tell you what version of Tcl/Tk you're using.
>
> **[5:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=322)** You can press the Quit button to close out the window.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=326)** If all of that runs without error, then you're good to go with Tkinter.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=330)** One last thing I want to point out is that IDLE is actually written in Python using the tkinter package, the little rocket ship icon that appears down in the dock is actually the TK icon.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=341)** This means that just by virtue of successfully opening IDLE, we already know that Tkinter is working on this machine.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=347)** However, as I mention before, you can still perform these tests for Tkinter without IDLE by running the Python Interpreter from another shell.
>
> **[5:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/installing-python-3-and-tcl-tk-for-mac?u=76281980&t=355)** If you're running Python from another terminal program, be sure that you're using Python version three instead of Python version two, otherwise these Tkinter commands will not work.

> [!info]- Semantic Content
>
> **CLI Commands:** python (27), find (2)
> **Versions:** python 3 (10), 8.5 (2), 8.5.15 (2), python 2 (1), 10.6 (1)
> **UI Navigation:** click on (6), go to (3), scroll down (2), select the (2), navigate to (2)
> **Code Keywords:** let (3), continue (2), case, (1), import, (1), this, (1)
> **Env Vars:** idle (7)
> **Prerequisites:** install (7)
> **Tools:** command prompt (1), terminal (1)
> **Definitions:** means that (2)

#### Saying hello to Tkinter
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=0)** - [Instructor] Now that we verified that Tcl/Tk and the Tk intermodule are installed and working correctly on our machine, let's run our first Python program with a simple GUI window.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=10)** And in sticking with programming tradition, let's say hello to Tkinter.
>
> **[0:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=14)** If you navigate to the exercise files, and go into the chapter one directory, you'll find a file called hello_tkinter.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=24)** I'm going to right-click on that file, and choose to open it with IDLE.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=28)** Here you can see that it's a simple program with just four lines of code.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=32)** I'll briefly describe what each line does, but don't worry about understanding the specifics for now.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=38)** We'll cover each of those in plenty of detail later.
>
> **[0:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=40)** The first line imports all of the functions and variables from the Tkinter package.
>
> **[0:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=45)** Notice that Tkinter is spelled out using all lower-case letters.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=49)** I'm mentioning this because it's one of the minor difference you'll need to consider if you're using Python 2.
>
> **[0:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=55)** In Python 2, Tkinter is spelled with a capital T, whereas in Python 3, it's written using all lower-case.
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=63)** These exercise files are written for Python 3, so you'll need to modify things accordingly, if you're using Python 2.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=70)** The second line down calls the Tk constructor method to create a new top-level widget, the main window, and assign it to the variable named root.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=79)** After that, we create a label with the text Hello, Tkinter as a child of the root window and we use the pack geometry management method to put it on the window.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=89)** Finally, we run the main loop method for the root window.
>
> **[1:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=93)** You can run this program in IDLE by going to the Run menu and selecting Run Module.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=99)** You should see a small window appear with the text Hello, Tkinter.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=103)** You can drag this window around the screen and you can also grab the edge of it to resize it to make it larger or smaller.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=110)** And when you're done, you can click the x to close it out.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/saying-hello-to-tkinter?u=76281980&t=113)** And just like that, with only four lines of code, we've run our first program to say hello to Tkinter.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), find (1), make (1)
> **Code Keywords:** let (2), case. (1), finally, (1), module (1)
> **Versions:** python 2 (3), python 3 (2)
> **Env Vars:** idle (2), gui (1)
> **UI Navigation:** navigate to (1), right-click (1)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** you'll need (2)
> **Code Identifiers:** hello_tkinter (1)


### 2. Tkinter Concepts

> [↑ Back to Table of Contents](#table-of-contents)

#### Tk and Tkinter background
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=0)** - Before we dive into learning about Python and Tkinter let's talk a little bit about what Tk is first.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=6)** Tk is an open source toolkit used to develop graphical user interfaces.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=11)** It provides a library of interactive widgets which are GUI elements, commonly used in desktop applications.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=18)** These are things like buttons, menus, windows and text entry fields.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=22)** Tk was developed back in the early '90s as an extension for a scripting language called Tool Command Language, which is abbreviated as Tcl and often pronounced tickle.
>
> **[0:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=33)** It was designed to be platform independent and has since been ported to run on most versions of Windows, Mac OS, Unix or Linux.
>
> **[0:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=40)** This means that if you develop the GUI for your application using Tk, it'll be able to run on most common operating systems.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=48)** Tkinter is the standard Python interface to Tk framework.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=53)** When your Python program makes a call to Tkinter, it'll be accessing functions in the Tkinter package, which is written in Python.
>
> **[1:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=60)** Those functions parse the commands from your Python program and format them to look like commands from a Tk script.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=65)** Then they're passed on to the _tkinter extension module which is written and compiled in C and is able to make calls into the widgets in the Tk library which is implemented using a combination of C and Tcl.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=79)** At the end of the chain, the Tk Widgets utilize the Xlib library to actually draw graphics on the screen.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=86)** Tk version 8.0 introduced new GUI elements which are themed to match the appearance of the standard elements in your operating system.
>
> **[1:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=93)** For example, when I run the Python Tkinter script to create this log in screen on Windows, it'll take on the native Windows appearance, whereas if I run it in Mac OS, it'll change its appearance to fit the Mac theme.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=104)** This allows you to write a cross-platform GUI application which will maintain the look and feel of the operating system on which it's currently running.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=112)** If you're using Python 3.1 or newer, you can access these themed Tk Widgets by importing and creating your widgets with the ttk module.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/tk-and-tkinter-background?u=76281980&t=120)** We'll be using theme Tk Widgets for examples in this course whenever they're available.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), make (1)
> **Code Keywords:** module (2), let (1), interface (1)
> **Env Vars:** gui (4)
> **Versions:** version 8 (1), python 3 (1)
> **Definitions:** is an  (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - before (1)

#### Creating and configuring widgets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=0)** - In a TK GUI Widgets are all of the things that you see on the screen.
>
> **[0:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=4)** Widgets are the controls you use to interface with the program, like buttons and text entry fields.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=9)** They're the visual containers used to organize those controls, like the application window and frames within it.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=16)** Widgets can also be used to display information to the user, ranging from a simple text label to a complex graphic on a canvas.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=24)** Each of these different types of widgets is defined as a class, within the Tkinter package.
>
> **[0:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=29)** When you add a widget to your program with Tkinter you're creating an instance of that class, a Python object.
>
> **[0:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=36)** That object will store all of the configuration settings for that specific instance.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=41)** In TK all widgets in your program exist under a hierarchy with a single "Root" window at the very top.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=47)** This means that whenever you create a new widget object in Tkinter you'll have to specify another widget as its parent in that hierarchy.
>
> **[0:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=55)** You can make this hierarchy as deep as necessary for your program.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=59)** You can put controls inside of a frame, which is inside of another frame, inside of frames or windows and on and on and on, to organize your interface.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=67)** The parent widget will act as the geometry manager to control how all of its child widgets are displayed.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=75)** I want to demonstrate the basic process for creating and configuring a TKinter widget and I'm going to do so using the Python command interface in IDLE.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=83)** I'm going to use the Command interface so you can easily see the effects of each individual command as I execute it.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=90)** Now the first thing I need to do is import Tkinter, and I can do that with the command from tkinter import * Now using the asterisk here will import all of the functions and variables from the base Tkinter package along with their names.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=107)** And this will allow me to directly call them by name.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=110)** Now I also want to import the themed TK widgets, and those exist in a separate module, which I can import by calling from tkinter import ttk.
>
> **[2:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=122)** This command imports the ttk module which is part of the Tkinter package.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=126)** By importing it this way, we can specify for our program to use the themed widgets when available by prefacing the constructor methods with the ttk name.
>
> **[2:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=135)** Now, to instantiate the TK class, I'll call the Tk constructor method without any arguments.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=142)** This will create a top level window, which I can use as the parent for other widgets I create later.
>
> **[2:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=148)** I'm storing a reference to that window, in a variable called "Root".
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=152)** You're Tkinter applications will typically begin with a call to the Tk constructor like this.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=157)** Each instance of the Tk class will have it's own associated Tcl interpreter.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=162)** Now that we have a window, let's create a widget to add to it.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=166)** I'm going to create a button, and I'll save it in a variable named button, and to do that, I'll call the ttk.Button constructor method, now this is a themed widget, which is why we used the ttk name on the front.
>
> **[3:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=180)** The first parameter when creating a widget is the parent widget.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=184)** And I've saved that top level window to a variable called Root, so I'll pass Root in as the parent widget.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=190)** And then next,I can apply zero or more additional parameters to configure the various properties for that widget.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=196)** There's a parameter for the button called Text, so I'll configure the text to say, Click Me.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=204)** Now to execute that, you'll notice it doesn't add it to the window.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=207)** Just the act of creating a widget doesn't make it visible, because Tk doesn't know where to put it yet.
>
> **[3:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=213)** To insert the button I just created into the Root window, and display it, I can use the Pack method.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=218)** I'll call the Pack method on the button object, by typing button.pack, this is referring to the button variable I saved it in, and when I execute that, you'll see it shows up in the window.
>
> **[3:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=231)** Since I used the themed button widget, it looks like you're standard Windows button.
>
> **[3:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=236)** If I click on it, nothing happens, because of course, I haven't told Tkinter to do anything with it yet.
>
> **[4:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=241)** We'll get to that later in the Events Handling section.
>
> **[4:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=244)** There are a few different properties associated with every widget object.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=248)** In the case of this button, we can set the text property to make the button say Click Me, and we did this at the time of creation, using the constructor method.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=256)** To find out what the current value of a property is, we can use square brackets to index that property from the widget object.
>
> **[4:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=262)** If I type button, square brackets, and then pass in a string with the name of that property, it will return the current value associated with that property.
>
> **[4:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=271)** So we can see the current value for text is, Click Me.
>
> **[4:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=274)** We can also use the square indexing brackets, to assign a new value to that property.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=279)** So if I said button['Text'] I can pass in new property, let's change it from saying Click Me, to Press Me.
>
> **[4:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=288)** You notice that as soon as I enter this command, the text on my button will change.
>
> **[4:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=294)** Now the button says, Press Me.
>
> **[4:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=295)** This is one way to change the properties of a widget after the time of creating it.
>
> **[4:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=299)** The other way we can change the properties of widget, after it's been created is by using the config command.
>
> **[5:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=304)** I'll call button.config I'll specify the name of the property I want to modify, and then pass it the new value.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=312)** Let's change the button to say Push Me.
>
> **[5:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=314)** When I execute that, it updates the button immediately, to say Push Me.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=318)** Notice that when I use the square brackets, I write the property name within a string, but when I'm using the config function, I just type it out without a string.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=327)** These properties are stored to a dictionary within the object, so the config method is using keyword arguments to pass in the new value.
>
> **[5:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=335)** We can also use the config method to view all available properties for a widget object, by calling it without any parameters.
>
> **[5:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=342)** This will return the dictionary with all of the properties that are available for that object as well as the current value for those properties.
>
> **[5:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=350)** The values are stored in related tuples.
>
> **[5:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=352)** Every Tkinter object has a unique name, which is used by Tcl to reference that specific widget when interfacing with Tk.
>
> **[6:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=361)** This widget name is different from the name of the Python variable that I'm using to hold the object.
>
> **[6:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=365)** In this case, the Python variable name is Button, to view the underlying Tk widget name that's associated with that button, I can use the STR function on the button and that'll return the underlying Tk name.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=378)** By default Tkinter creates the widget name as a random unique integer and appends it to the name of the widget's parent.
>
> **[6:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=384)** In this case, the number 45058200 was generated as a unique identifier for the button, and it was appended to the name of the root window which is the button's parent.
>
> **[6:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=396)** Root, which is the top level Tk window object, is given a special default name of period.
>
> **[6:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=401)** I can see that by typing str and passing it the root.
>
> **[6:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=405)** And you see Root is just period.
>
> **[6:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=407)** The names of the widgets demonstrate the hierarchy that exists between them.
>
> **[6:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=411)** Instead of using randomly generated numbers, Tkinter will let you manually specify the name of widgets by configuring the name property, however unless you're writing a program to directly interface with Tcl, I highly recommend not doing that.
>
> **[7:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=425)** Just use your Python object names and let Tkinter handle the Tcl names in the background.
>
> **[7:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=430)** Since Tk widgets are inserted into the widget hierarchy when they're created, they won't be garbage collected.
>
> **[7:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=436)** This means you can create widgets without needing to store the object in a variable to refer to later.
>
> **[7:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=441)** For example, I could create a new label and add it to the window in a single line without storing the label object to a variable.
>
> **[7:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=449)** So I've created a label by calling the ttk.label constructor, its parent will be root, I'll specify the property of text to say Hello, Tkinter!
>
> **[7:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=460)** And we'll go ahead and immediately call the PACK geometry manager command on that.
>
> **[7:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=466)** Since I did not store a reference to this label, I will not be able to refer to it later in my code to make changes.
>
> **[7:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=472)** So with labels that might be acceptable, but with other types of widgets that you need to access programmatically later, you want to be sure to store a reference to them in a variable.
>
> **[8:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=481)** In this video, we learned how to create Tk widgets, the three different ways to modify their properties, and we witnessed the hierarchy between them.
>
> **[8:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=489)** The later section of this course on widgets, will go into specific details about each of the different types of widgets.
>
> **[8:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-and-configuring-widgets?u=76281980&t=497)** In those videos I'll describe how to use each type of widget and the most common properties associated with it.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (5), pass (5), class, (3), module (2)
> **CLI Commands:** python (5), make (4), find (1)
> **Env Vars:** gui (1), idle (1), str (1), pack (1)
> **Cross-References:** later in (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** configure (2)
> **File Paths:** button.config (1)
> **UI Navigation:** click on (1)

#### Managing widget placement
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=0)** - [Instructor] As you may have noticed in the previous video, just the act of creating a Tkinter widget did not make it visible.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=7)** For a widget to be displayed on screen, Tkinter needs to know exactly where to draw that widget.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=12)** This is where geometry management comes into play.
>
> **[0:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=15)** The Tk Geometry Manager take instructions from the program and does its best to place the widgets in their intended locations.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=22)** It uses the concept of master and slave widgets to do that.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=26)** When you create a new widget object, and you specify its parent, you're identifying that parent widget as the master of the child widget.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=34)** That master widget will use a Geometry Manager to control the placement of its slave widget.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=39)** Master widgets will typically be organizational containers like top-level windows or frames.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=44)** Determining where exactly to place the slave widget is not always a simple problem.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=49)** There are a lot of conditions that the Geometry Manager has to consider.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=53)** For example, what should it do if the slave widgets are too large to fit in the specified window or if the user resizes that window to make it smaller or larger?
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=62)** What should it do with that extra space?
>
> **[1:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=64)** The Tk Geometry Manager considers size information about the master and its slaves along with instructions from the program to feed its internal algorithms.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=73)** There are three geometry managers available in Tk each of which provides a different way for the program to describe widget locations.
>
> **[1:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=81)** The Pack Geometry Manager uses a limited set of instructions to pack widgets into an area with basic guidance from the program about which edges to place the widget against.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=91)** It's well suited for simple scenarios where you need to place several widgets on top of each other or in a side-by-side orientation.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=98)** The Grid Geometry Manager divides the master widgets area into a two-dimensional table and places the slave widgets into cells by indexing rows and columns.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=107)** Since user interfaces tend to organize elements into layouts that can be described by a grid, it's a commonly use Geometry Manager and I'll be using it for part of my solution at the end of this course.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=118)** The third Geometry Manager is called Place.
>
> **[2:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=121)** It allows the program to explicitly set the position of a widget using relative or absolute terms in the x and y direction.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=128)** While the Place method itself is fairly simple to use, it can become tedious placing a large number of widgets into position for common application layouts.
>
> **[2:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=136)** The Place Geometry Manager is best suited for when you need to lay out widgets in a very particular and specialized way that's not well suited to either the Pack or Grid Geometry Managers.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=147)** It's possible to use multiple Geometry Managers within a single application so you can selectively use Pack, Grid or Place when they make the most sense.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=156)** The one catch is that you always want to use the same Geometry Manager to organize widgets within the same master.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=162)** If you try to use two different Geometry Managers to display widgets within a single master, it will very likely cause conflicts within Tk and give you some strange results.
>
> **[2:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=172)** In the later Geometry Manager section of this course, I'll cover each of these Geometry Managers in their own detailed video.
>
> **[2:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/managing-widget-placement?u=76281980&t=177)** I'll demonstrate the most common techniques for using each of the Geometry Managers and discuss their pros and cons so you can decide which one is the most appropriate for your program.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Handling user events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=0)** - [Instructor] After we've created widgets and displayed them in our application with the Geometry Manager the last thing we'll need to do is tell the program what to do when the user interacts with that widget.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=10)** A user interface that doesn't respond to user's actions wouldn't be very exciting.
>
> **[0:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=15)** Tkinter uses a process called Event Handling to execute specific functions when certain inputs are received from the mouse, keyboard, and other sources.
>
> **[0:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=25)** In your Tkinter program you'll configure the specific events your program will listen for and respond to.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=32)** These events can be things like mouse clicks, key strokes, widget interactions, mouse movement, window resizing, and so on.
>
> **[0:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=40)** For each possible event the program is concerned with it will need to define a handler method or function that'll be executed when that event occurs.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=49)** For example, if your program has a form for the user to fill out with a Submit button the program will need to bind the event of that button being pressed to execute a handler function which submits the content of that form.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=61)** When you call the main loop function of your top level Tk object the program enters what is known as the Event Loop.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=68)** The program waits here until it receives the notice from the operating system that an event has occurred.
>
> **[1:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=74)** For example, when the user clicks on the mouse button.
>
> **[1:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=77)** Then the program goes and executes the appropriate handler code for that event.
>
> **[1:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=81)** After it's finished handling the event the program then returns to the event loop and waits for the next event to occur.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=89)** If a different type of event occurs, for example if the user presses a key, then the main loop will execute the appropriate handler code for that type of event.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=98)** An important thing to keep in mind when writing handler functions is that the event loop is not able to handle multiple events at the same time.
>
> **[1:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=105)** So, if a new event occurs while the program is still in the process of handling a previous event it will not be able to handle that new event until after it has completed the previous handler and returned to the event loop.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=118)** If multiple events occur while the program is outside of the event loop then those events will be queued up to be handled when the previous handler has completed.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=125)** For this reason you should always strive to keep your handler code as short and quick to execute as possible.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=131)** Otherwise, your user could find themselves in the undesirable situation of waiting for the GUI to respond.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=137)** There are two primary ways to configure event handlers in Tkinter.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=141)** For interactive widgets that, by their nature, generate events that essentially require a handler Tkinter provides an easy way to configure command callbacks via the command property.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=153)** An example of a widget with the command property is the button because it's unlikely you would create a button that doesn't do anything when pressed.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=161)** Configuring the command property tells Tkinter what function or method to run when that button is pressed.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=167)** For widgets that don't have command callback properties you can still configure the widget to respond to certain events by using the bind method.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=175)** Labels, for example, don't have a command property because they're not typically used for interaction.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=181)** If you wanted to execute some handler code when the user puts their mouse over the label you could bind it with the enter event, which is triggered when the mouse enters the region over the label.
>
> **[3:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=191)** There's still a variety of events that you can bind to, which are related to keyboard and mouse actions.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/handling-user-events?u=76281980&t=196)** We'll cover those in detail in the later Event Binding section of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), interface (1), require (1)
> **Analogies:** for example (4)
> **Prerequisites:** configure (4)
> **CLI Commands:** find (1)
> **Env Vars:** gui (1)
> **Definitions:** known as (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)

#### Revisiting Hello, Tkinter!
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=0)** - [Developer] We just finished a brief overview of widgets, geometry management and event handling in Tkinter.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=6)** Now, let's look at a more advanced version of the Hello Tkinter program from earlier written using object-oriented design, and our newly learned Tkinter concepts.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=16)** I'm going to open up the exercise files that are included with this course and navigate to the Chapter Two directory.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=22)** Inside there you'll find a Python file called hello_local and if you right click on that file, you can chose to open it with IDLE.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=31)** This is the IDLE text editor and from here, I can run the application by going to the Run dropdown menu, and selecting Run Module.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=38)** You'll see this creates a window similar to what we saw in the Hello Tkinter example earlier.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=44)** We have the message Hello, Tkinter, but now we also have two buttons, one labeled Texas and the other labeled Hawaii.
>
> **[0:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=50)** If I click on the Texas button, it changes the message to say: Howdy, Tkinter and if I click on the Hawaii button, it changes it to the local Hawaiian greeting of: Aloha, Tkinter.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=62)** So this is a slightly more advanced version of our hello example from earlier.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=65)** Let's dig into the code and see how it does it.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=67)** One of the first things you may have noticed looking at this code is that I written the application as a class.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=73)** This is a common design practice which is used to implement a Tkinter GUI as part of a larger object-oriented program.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=80)** I've decided to demonstrate it here with the example, and we'll use use it again for the end of course project.
>
> **[1:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=85)** All of the Tk widgets objects for the GUI are created in the init constructor method and all of the associated handler methods are self-contained within the class.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=94)** The init method takes one parameter called master which is the Tk widget to use as the parent of all other widgets in the GUI.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=102)** If we execute this Python script directly, the piece of code at the bottom with a tech that is being run as main and will execute the main function.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=111)** Inside of this main function, we use the Tk constructor method to create a top-level Tk window named root, and we pass that to the helloApp constructor method to use as the master window.
>
> **[2:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=122)** Finally, we call the main loop method on that top-level window to enter into the Tk event loop where it will sit and wait to react to the button presses.
>
> **[2:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=132)** By writing the script this way, we can also import this file as a module to be used by another Python program.
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=138)** And in that case, the calling program would create the Tk widget to be used as the master for the helloApp GUI and usually that be something that like a top-level window or a frame and then it would pass that widget to the helloApp constructor.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=150)** The first widget we create inside of the init method is a label which is a child of the master window and we assign it to the initial text value of Hello Tkinter.
>
> **[2:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=160)** We store a reference to this label in a class variable so that we can access it later to change its text.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=166)** The label is then put into place using the grid command to put it at row zero, column zero which represents the top right corner of that master window and we configure it to span across the two columns below it.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=178)** After that, we create the Texas and Hawaii buttons for the program to use, and use the grid geometry manager to place them at row one column zero and row one column one respectively.
>
> **[3:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=188)** When creating the button, we assign the command property to be the callback method to use for each one.
>
> **[3:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=195)** So if the Texas button is clicked, it will execute the texas_hello method, and if the Hawaii button is clicked, it will execute the hawaii_hello method.
>
> **[3:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=205)** You can see those two methods down below, each of which uses the config method on the label object to change its text to the appropriate local greeting.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=214)** So texas_hello changes the label to say: Howdy, Tkinter and if the hawaii hello method is called it will change the text to say: Aloha, Tkinter.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=223)** As you saw a moment ago, the result of this program is a new Tkinter window with a label spanning over two buttons.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/revisiting-hello-tkinter?u=76281980&t=230)** When either button is clicked an appropriate callback method is executed which then changes the labels text to the local greeting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (2), class. (2), function (2), pass (2)
> **Code Identifiers:** helloapp (3), texas_hello (2), hello_local (1), hawaii_hello (1)
> **Env Vars:** gui (4), idle (2)
> **Definitions:** is a  (5), is called (1)
> **UI Navigation:** click on (3), navigate to (1), dropdown (1)
> **CLI Commands:** python (3), find (1)
> **Cross-References:** as you saw (1)
> **Analogies:** similar to (1)


### 3. Basic Widgets

> [↑ Back to Table of Contents](#table-of-contents)

#### Displaying text and images with labels
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=0)** - [Instructor] One of the simplest widgets for presenting information to users is the label, which can be used to display lines of text and/or an image.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=8)** Labels are typically used to identify controls or provide visual feedback to the user.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=12)** You've already seen the label widget used earlier for text, in the Hello Tkinter example, so let's go into detail about creating and configuring a label now.
>
> **[0:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=21)** In this video, I'm going to use the Python Shell as an interactive interpreter so you can see the results of each command as I execute them.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=28)** As with all Tkinter programs, the first thing we need to do is import the Tkinter packager by typing from tkinter import asterisk, and then with the label, it exists within the themed Tk module, or .ttk module, so we'll need to import that, as well.
>
> **[0:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=45)** Now to create a top-level Tk window, I'm going to use the Tk constructor method and store that top-level window, or a reference to it, in the variable called root.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=56)** And to create a label, which I'm going to store in a variable called label, I'm going to access that themed Tk module, so I type ttk, and then I'm going to use the Label constructor method.
>
> **[1:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=66)** And note that Label is spelled with a capital L.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=68)** This is common amongst all the constructor methods.
>
> **[1:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=71)** As with all constructor methods, the first parameter is the parent widget of this label.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=75)** In this case, it's going to be the root top-level window, and then we can add additional properties.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=80)** So I'm going to go ahead and configure it to say, "Hello, Tkinter!" something we've already seen before.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=86)** And that creates the label widget object, but to make it display on the screen, I'll need to use the geometry manager, so I'm going to call the pack method to use the pack geometry manager.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=97)** I'm going to execute that.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=98)** You can see it's now displayed up here.
>
> **[1:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=100)** The size of the label object is as big as it needs to be to hold the text, and then the frame with the pack manager will be squeezed in around that label.
>
> **[1:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=108)** After I've created the label, if I later want to change the text programmatically, I can do so with the config command to change that text property.
>
> **[1:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=116)** So I type label dot config, text equal "Howdy, Tkinter!"
>
> **[2:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=124)** You notice, in realtime, as soon as I execute that command, the text in the label is changed.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=129)** I could also make that text something really long.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=131)** So say I have a very verbose welcome.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=134)** I say, "Howdy, Tkinter!
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=138)** "It's been a while since we last met.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=142)** "Great to see you again!"
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=146)** And if I enter all of that into the label, you notice that the label stretches out as long as it needs to be to contain that on a single line.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=153)** And as you could imagine, if I insert this much text into a label within another program, it could cause the GUI to stretch out in ways I might not like.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=161)** So I can cause this label to wrap the text onto multiple lines by configuring the wraplength property.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=167)** So I'll do wraplength, and you provide wraplength with a number, being the number of pixels for the text to wrap around.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=175)** So by setting wraplength to 150 here, I've configured this label to wrap the text within 150 pixels width.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=182)** You notice that, by default, the text is justified and aligned to the left side of the label.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=187)** We can configure which side it's justified to by configuring the justify property.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=192)** Options for the justify property are LEFT, RIGHT, and CENTER, and you type them in in all capital letters.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=198)** So in this case, I'm going to center the text within the label, and you can see now, instead of being justified to the left side, our text is centered.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=207)** Some other properties that we can configure for the label are the foreground and background colors.
>
> **[3:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=211)** The foreground property sets the color of the text, and the background property sets the color of the label area.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=218)** So if I set the foreground property, the input is going to be a string, and you can insert a hex value here, or the name of common colors, such as blue, red, yellow, and so on.
>
> **[3:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=228)** So I'm going to set my text to be blue, and then I can also configure the background property, which would be the color of the label itself, and I'm going to set that to be yellow.
>
> **[3:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=238)** Some Python-themed colors here.
>
> **[4:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=241)** We can also configure the font of our text by using the font property.
>
> **[4:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=245)** To set the value of font, you pass it a list with the first item being a string containing the name of the font you want to use.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=252)** So in this case, I'm going to use Courier.
>
> **[4:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=254)** The next item in that list is a number, being the size of the font, and then, after that, you can optionally pass it a third string containing additional modifiers, such as bold, underline, italic, and so on.
>
> **[4:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=267)** And that, as I execute it, changes the font.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=269)** We'll also look at another way to change the fonts of labels and other widgets using the style property in a later section on the course when we cover the style Tk object.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=279)** That covers the basics for using the label widget to display text on single or multiple lines.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=284)** Now, let's look at how we can also use the label widget to display an image instead of just text.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=290)** Before I move on, I'm going to change the text of our label to be a much shorter message.
>
> **[4:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=294)** Go back to the original "Howdy, Tkinter!"
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=298)** And then to add a image to our label, we first need to create a PhotoImage object.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=303)** And the PhotoImage class is used to display color images within Tkinter.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=307)** It can accept GIF, PGM, or PPM files, so if you need to use another file type than one of those three, you have to use an external library to convert it to one of those.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=317)** An example of this could be the Python Image Library.
>
> **[5:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=320)** There's also a bitmap image Python class, which functions similar to the PhotoImage class we'll look at in just a second, except that it only accepts two-color images in the .xbm format.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=330)** To create a Python PhotoImage, we use the PhotoImage constructor method, that's spelled with a capital P and a capital I, and then we configure the file property within that.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=341)** And for file, we pass in the path to our PhotoImage.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=343)** I have that saved to my clipboard here, and I'm going to be using python underscore logo dot gif, which is included in the exercise files for this course.
>
> **[5:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=354)** And you'll see that this call creates a Tkinter PhotoImage object.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=358)** I made a mistake there.
>
> **[5:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=359)** I actually want to save this, to be able to use it, to a variable.
>
> **[6:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=363)** So I'm going to pass it in and save it to a variable called logo.
>
> **[6:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=366)** So now that I have my image saved in a variable called logo, to apply it to my label, I need to configure the image property.
>
> **[6:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=376)** And you'll see now, we've replaced that text with the image, and it's displaying the image, instead.
>
> **[6:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=381)** So our label has two properties configured.
>
> **[6:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=383)** It has the text property configure to a value for text, and it also has an image associated with it.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=388)** We can control which one is displayed by changing the compound property.
>
> **[6:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=395)** So we can switch back to displaying that text by setting compound equal to text.
>
> **[6:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=400)** If we wanted to show the image again, we could set compound to image, or we can do something more interesting.
>
> **[6:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=405)** We can display both at the same time by using some other compound words.
>
> **[6:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=409)** So for example, if we set compound to be center, it'll display the text on the center of that image.
>
> **[6:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=416)** Some other options for compound are top, bottom, left, and right.
>
> **[7:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=420)** So a commonly used one would be compound, left, which would display the image to the left of the text, and this is something you'll commonly see in buttons and menu items, where you have a small image, an icon image, next to text.
>
> **[7:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=434)** Now, I want to finish the section up by pointing out one gotcha with images that tends to trip up new Tkinter programmers.
>
> **[7:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=440)** And I'm bringing this up because I stumbled across it myself when first learning to use Tkinter.
>
> **[7:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=445)** The call, image equal logo, to configure the image property, is not actually saving a copy or reference to the PhotoImage object.
>
> **[7:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=453)** It's only using the name of the PhotoImage object to pass to Tk.
>
> **[7:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=457)** This means if our logo image goes out of scope, Python will garbage-collect it, and Tk won't be able to display it anymore.
>
> **[7:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=463)** Everything worked fine in this example because we're operating inside a idle, and the PhotoImage object remained in scope.
>
> **[7:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=470)** However, if we had created that PhotoImage object inside of a function, and only stored it to a local variable in that function, then when the function completed, the PhotoImage object would be garbage-collected, and the image would disappear from our GUI.
>
> **[8:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=483)** Similarly, if we'd created the PhotoImage object in a class constructor method, and stored it to a class variable, when the object instance in which the PhotoImage was created and stored loses scope, it'll be garbage-collected, and the PhotoImage object will be taken away, too.
>
> **[8:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=497)** For these reasons, you should always make sure that you store the image object to a variable location that will not be garbage-collected as long as you need to use it.
>
> **[8:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=504)** One workaround to use this is to store a reference to the PhotoImage object in the Tk label widget object itself, since Tk is holding onto that widget and preventing it from being garbage-collected.
>
> **[8:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=514)** We can do that by typing label, and creating a image variable within that label object, and passing in logo so that we've stayed a reference to that logo inside that image variable.
>
> **[8:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=525)** And now that we've done that, we can configure the label to use that image instead, by typing image equal label dot image.
>
> **[8:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=535)** Now the PhotoImage object will stick around for as long as the label exists, because it's stored within that label.
>
> **[9:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=541)** You may think this is a bug in Tkinter at first, but really, it's there to help prevent accidental memory leaks due to unwanted PhotoImage objects hanging around.
>
> **[9:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/displaying-text-and-images-with-labels?u=76281980&t=549)** I wanted to point this issue out because it's one that you'll almost certainly run into at least once during your time programming with Tkinter, and now you know what to look for.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), module (3), case, (3), function (3), let (2)
> **CLI Commands:** python (7), make (3)
> **Prerequisites:** configure (10)
> **Env Vars:** gui (2), left (1), right (1), center (1), gif (1)
> **Analogies:** imagine (1), such as (1), similar to (1), for example (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), gotcha (1)
> **Cross-References:** go back to (1)

#### Capturing input with buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=0)** - [Instructor] Unlike labels, which merely display information, buttons are designed specifically for the user to interact with.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=7)** They're one of the simplest ways for a user to provide input to your program.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=10)** When the user clicks on a button, they expect something to happen.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=13)** That means, in addition to defining the look and feel of a button, our program will also need to define the action it will perform when pressed.
>
> **[0:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=21)** I'll begin by importing the tkinter package by calling from tkinter import asterisk.
>
> **[0:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=27)** And I'll also import the themed ttk module from tkinter import ttk.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=34)** After that, I'll call the tk constructor method to create my top level route window.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=38)** And now, I'm ready to begin creating buttons.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=41)** I'll create a button by calling the themed ttk button constructor method, and notice, button is spelled with a capital B.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=48)** I'll pass in it's parent, which is the first parameter, as always.
>
> **[0:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=52)** And then, I'll also configure the property for the button called text.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=56)** And I'm going to make this button say click me.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=59)** Now that I've created my button, I also need to use a geometry manager to add it to my window, so I'll call button.pack.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=67)** You'll notice that this button is themed to look like the standard buttons in Windows 8, and that's because I used a ttk themed version of the button.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=75)** If I had just used the button constructor without the ttk in front of it, it would use the original tk constructor to give the older style of button.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=83)** The button currently doesn't do anything when I click on it, and a button that doesn't do anything isn't very useful in a user interface.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=90)** So, let's fix that.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=91)** The first we'll need to do is create a function containing the code to execute when the button is pressed.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=96)** I'll define a function here, and I'm going to call it callback.
>
> **[1:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=101)** You can call the function whatever you want to.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=103)** And my function will simply print clicked.
>
> **[1:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=109)** Now that the function's been defined, we can configure the command property of the button to tell it to execute that button whenever the button is pressed.
>
> **[1:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=117)** To do that, I'll use the button.config method on my button object, and I'll set the command property to the name of the function I want to execute.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=129)** So, I'm passing in the function name to the command property, and now, when I click on my button, you'll see it's executing that callback function and printing out the text clicked.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=139)** Now, we'll cover event handling in much more detail in a later section of the course, but, for now, the main thing you need to know is that to make a button functional, you need to specify this command property.
>
> **[2:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=149)** Now that we've specified the command property, we can also programmatically simulate a button click by using the invoke method.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=156)** So, if I call the invoke method on my button object, it'll simulate a button click by calling that callback function and printing click, and then it returns a value of none from the invoke method.
>
> **[2:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=168)** Now, this can be useful if you need to execute a callback method from multiple places in your code, because you only need to configure it once, and that's when you're defining this button.
>
> **[2:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=177)** Another useful set of methods for the tk button class are the state and instate methods.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=182)** Buttons, as well as many other tk widgets, have a state, which determines whether they're active and can be used, or disabled and unusable.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=190)** To set the state of a widget, use the state method to modify it's disabled flag.
>
> **[3:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=195)** I call button.state.
>
> **[3:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=197)** And when using the state widget, I have to pass it in square brackets.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=201)** I give it the string disabled.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=204)** Close square brackets.
>
> **[3:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=205)** And close parenthesis.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=207)** So, this call will disable the button, and you can see, it's now grayed out.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=210)** And if I click on it, nothing happens.
>
> **[3:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=213)** It's not usable.
>
> **[3:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=215)** If we want to check what the current state of a button is, we can do so by using the instate method.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=220)** So, if I call button.instate, I can pass in that state description, disabled.
>
> **[3:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=227)** And this is effectively asking the question, is my button in this state?
>
> **[3:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=231)** And it will return a value of true or false on whether or not it is disabled.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=235)** So, of course, it's disabled, so the method returns true.
>
> **[3:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=239)** To re-enable my button, I'll use that state method again, but this time I'll call it with the fang disabled flag.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=249)** This is effectively saying set the state to not disabled.
>
> **[4:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=253)** Close my square brackets, and now you can see, it returned the previous state, and my button is now able the be clicked, so it's back to functioning.
>
> **[4:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=263)** And if I wanted to check that it's in the usable, woops, can't enter clicked as a command.
>
> **[4:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=267)** If I want to check to see that it's in this non-disabled state, I can also do that with the instate method by calling instate fang disabled.
>
> **[4:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=278)** And you'll see that now it's checking, is this button in the state where it's not disabled?
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=283)** That, of course, is true now.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=284)** And so, it returns true.
>
> **[4:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=286)** There are other states that are available for the button and for other widgets, such as active and focus.
>
> **[4:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=291)** For a complete listing for the potential widget states, refer to the documentation for themed tk widgets at the tcl.tk website.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=301)** The last thing I want to demonstrate about buttons is that their appearance can be configured using properties similar to what we learned about with the label widget.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=308)** For example, I can add an image to the button.
>
> **[5:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=311)** Now, as we saw with the label, before I add an image, I first need to create it using the PhotoImage constructor, and I pass in the directory to the file with that image.
>
> **[5:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=322)** I already have that saved to my clipboard.
>
> **[5:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=324)** So, this is that python_logo.gif we used in the label video.
>
> **[5:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=329)** And now that I've created my logo object, I can use the config method on the button to set the image property to that logo, and I'll configure the compound property to be left.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=343)** So, this places the logo image to the left of the text.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=346)** However, as you can see, this image is a bit too big for the button.
>
> **[5:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=350)** So, let me introduce you to another method of the PhotoImage object that we can use to resize images within tkinter.
>
> **[5:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=357)** The PhotoImage object has a method called subsample, which I pass in two values, an X and Y.
>
> **[6:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=366)** And it will use Xth and every Yth pixel in each direction.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=370)** So, for example, if I passed in the values 5 and 5, it'll subsample and take every fifth pixel in the X direction and every fifth pixel in the Y direction of that image and create a new PhotoImage object here named small logo.
>
> **[6:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=384)** So, I'll do that, and then let me reconfigure my button to use the smaller logo.
>
> **[6:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=392)** And there.
>
> **[6:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=393)** Now, that's a little more reasonable and looks like something you might actually see in a user interface.
>
> **[6:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/capturing-input-with-buttons?u=76281980&t=398)** You'll be able to modify the look of the button even more using the style properties, which we'll learn about in the later section of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), pass (5), let (3), interface (2), module (1)
> **Analogies:** for example (2), such as (1), similar to (1)
> **Prerequisites:** configure (4)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **File Paths:** button.config (1)
> **Code Identifiers:** python_logo (1)
> **Cross-References:** as we saw (1)

#### Presenting choices with check buttons and radio buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=0)** - [Instructor] When you need the user to make a selection amongst several options, the check button and radio button are excellent widgets to use.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=7)** Check buttons are a slightly more advanced version of the basic button.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=11)** In addition to executing a call back function when clicked, they can also store a binary value.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=16)** This makes check buttons ideal for when the user needs to select or unselect options from a series of choices.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=22)** Radio buttons are similar to check buttons because they also maintain a value.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=26)** However, unlike a check button, they're not limited to only two choices.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=31)** Radio buttons allow a user to make one selection from a series of mutually exclusive options.
>
> **[0:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=36)** Their ideal for when you only have a handful of choices for a user.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=39)** For example, selecting your meal choice for a banquet.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=42)** I've already imported the Tkinter package as well as the themed TK module and created my top level root window using the TK constructor method.
>
> **[0:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=50)** So let's jump straight in to creating a check button.
>
> **[0:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=54)** I'm going to use the TTK module and call the check button constructor method.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=59)** The first parameter as always is the parent, in this case the top level window and for now, I'm just going to set the text property to say SPAM.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=68)** And to display the check button on the window, I'll need to use a geometry manager.
>
> **[1:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=72)** So I'm going to use the pack method and now we've got a SPAM button over here.
>
> **[1:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=78)** I can click anywhere on this check button and it'll toggle whether or not that button is selected.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=83)** Now check buttons have many of the same features that the basic button widget has.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=87)** You can use the command property to configure a call back to be executed when the check button is clicked.
>
> **[1:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=92)** And that call back functions the same way as we saw with the regular button.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=96)** You can use the state method to enable or disable the check button and you can use the in state method to check on the current state of the button.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=103)** You can use the invoke command to programmatically execute the call back associated with the check button and you can configure the check buttons to display both images and text.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=112)** We've already covered all of those methods and properties in the previous video on the button widget so I'm not going to cover them here.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=118)** They function the exact same way for the check button and radio button as they did for the button widget.
>
> **[2:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=123)** As I mentioned before, what makes check buttons and radio buttons unique is that they can also store a value.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=129)** Before we get to that, we first need to discuss variables.
>
> **[2:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=132)** TK programs written using Tcl, allow the system to let you know when a certain variable has changed so that any widget referencing it can be updated.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=141)** Python doesn't have a similar method for tracking changes to a variable, so that TK inter module has included several classes for variable types which are wrappers to provide that change tracking functionality.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=153)** The four variable classes that are available in Tkinter are BooleanVar, DoubleVar, IntVar and StringVar.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=162)** To create a string variable for our program, I'm going to call the StringVar constructor method and I'm going to say that to a variable called SPAM.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=171)** To set the value of this variable, we can use the set method on SPAM and since it's a string type variable, we'll pass in a string, in this case I'll make it say SPAM with an exclamation point.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=182)** And if we want to check what the current value of a variable is, we can use the get method.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=187)** And this will return the string that's stored within that SPAM variable.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=190)** So now that we have a string variable, let's configure our check button to be associated with it.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=196)** Use checkbutton.config.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=198)** I'm going to set the variable property to be the name of that variable; SPAM.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=204)** And by default, the check button uses a value of one when selected and zero when not selected.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=210)** And it'll assign that to the variable SPAM.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=212)** But that doesn't make sense with the meaning of spam so we can actually specify an on value and off value that'll be assigned to the variable, depending on whether the check button is selected or not selected.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=223)** So the check button is selected.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=225)** We'll want to set the value of spam to say SPAM Please and if the check button is not selected, we'll say Boo SPAM.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=235)** Now that that's configured that way, let's test it out.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=237)** If I select the check button and I look at the value of my spam variable by using the get method, you see that it says SPAM Please.
>
> **[4:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=245)** And if I uncheck that check button and I look at the value of the spam method or spam variable, it'll say Boo SPAM.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=252)** So those are the basics of the check button.
>
> **[4:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=254)** Now let's look at radio buttons.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=256)** As I mentioned before, radio buttons store the selected value from one of several mutually exclusive options.
>
> **[4:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=262)** So let's make a radio button to select what we want to have for breakfast.
>
> **[4:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=266)** I'm going to make a variable called breakfast and create a StringVar to assign to it.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=272)** Now to create a radio button, I'm going to use the TTK module called the radio button constructor method.
>
> **[4:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=278)** Pass in the parent, which will be root.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=281)** Set the text for that radio button.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=284)** So this one will be called SPAM.
>
> **[4:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=286)** Configure the variable that's associated with that radio button.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=290)** So this variable will be breakfast.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=292)** And then we also need to specify a value which will be assigned to that variable if this radio button is selected.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=298)** So I'm going to make the value here be SPAM.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=303)** And I'm going to go ahead and just directly call the pack method on this call to the constructor method, the constructor method call here will return the object and then the pack method will be called directly on that object.
>
> **[5:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=315)** And so when I do that, you can see it automatically creates a radio button, the difference being it's round instead of square, to my window.
>
> **[5:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=323)** I'm going to copy this line and create several more similar radio buttons.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=327)** So I'm going to create one for Eggs.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=330)** We'll create one for Sausage.
>
> **[5:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=333)** Give ourselves a couple different breakfast options.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=337)** And finally, I'm going to add one more of SPAM.
>
> **[5:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=340)** And now you notice the radio buttons are not aligned here but we'll learn how to fix that later in the geometry management videos.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=346)** Each radio button is it's own object and they're all tied together by that common variable.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=351)** So you notice if I select SPAM, since two of the radio buttons are associated with the SPAM value, by selecting one, they're both selected.
>
> **[5:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=359)** But if I select Eggs, only one has that Eggs value and similarly, only one has the Sausage value.
>
> **[6:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=365)** Just like with check buttons, I can use the get method on that variable to get the value.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=370)** So we've currently selected Sausage.
>
> **[6:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=372)** If I select SPAM, call a get method, we'll see that we want SPAM for breakfast and that pretty much sums up the basics of using the check buttons and radio buttons.
>
> **[6:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=382)** Since I introduced variables in this section, there is one last trick I want to show you.
>
> **[6:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=386)** For widgets that have a text property such as labels, buttons, check buttons and so on, there's also a text variable property that you can use.
>
> **[6:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=394)** Assigning the text variable property to a StringVar will allow you to update the text of a label or button by just changing the value of that variable.
>
> **[6:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=402)** For example here, I'm going to modify the check button object to use the text variable property instead of assigning it static text.
>
> **[6:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=410)** So I do checkbutton.config and I'll say text variable = breakfast.
>
> **[6:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=419)** And so now the value of my check button is going to represent whatever the value of my breakfast variable is.
>
> **[7:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=424)** So as I choose different items for breakfast, that check button will change it's text.
>
> **[7:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=429)** Don't worry about the strange behavior for this layout for now.
>
> **[7:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/presenting-choices-with-check-buttons-and-radio-buttons?u=76281980&t=431)** We'll learn how to deal with that later in the geometry management section of the course.

> [!info]- Semantic Content
>
> **Env Vars:** spam (19), ttk (2)
> **Code Keywords:** let (6), module (4), function (2), pass (2), default, (1)
> **CLI Commands:** make (7), python (1)
> **Analogies:** for example (2), similar to (1), just like (1), such as (1)
> **Prerequisites:** configure (4)
> **File Paths:** checkbutton.config (2)
> **Cross-References:** as we saw (1), previous video (1)
> **UI Navigation:** toggle (1), select the (1)

#### Entering single-line text with the Entry widget
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=0)** - [Instructor] When you need your user to enter a short text string, for example a user name or password, you should use the entry widget.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=7)** It provides a simple one-line text entry box for the user to type in the information.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=12)** However, it is limited to only one line, so if you need the user to enter multiple lines of text then you'll need to use the text widget which is covered in later video segments.
>
> **[0:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=21)** I've already imported the tkinter package as well as the tkinter module, and created a top level root window here, so let's go ahead and create an entry widget.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=31)** We do so by calling the ttk module and then the entry constructor method.
>
> **[0:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=36)** The first parameter, of course, is the parent widget which will be my top level window.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=41)** And then I'm also going to set the property for width.
>
> **[0:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=45)** I'll set that to 30.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=47)** Let's use the pack method to add the entry widget to our top level window.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=53)** So I did here with this width method, that controls the size of the entry field.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=57)** And that's specified in number of characters, not pixels.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=61)** Now it doesn't limit the number of characters that can be entered, but it just controls how big the field will appear on the GUI.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=67)** As that font size changes, it will actually change the size of the entry field so you'll need to account for that as you lay out and scale your GUI.
>
> **[1:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=74)** The user can input text by selecting the entry field and typing text into it.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=79)** So I'll type Hello, Tkinter.
>
> **[1:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=81)** Now unfortunately the entry field does not have a command option to configure command call back when text is entered.
>
> **[1:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=88)** So if I press enter here, there's not a way for me to tie it to a command the same way that I would a button or a check button.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=94)** We'll learn how we can use the Bine method to tie it to actions in the later event handling section.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=99)** For now, let's just use the get method to retrieve the current contents directly from the entry field.
>
> **[1:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=105)** I type entry.get with open and closed parentheses it will return a string of the contents of the entry field.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=114)** Unlike variables, which for the get method also had a matching set method to change the content of that variable, the entry field does not have a set method.
>
> **[2:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=122)** If we want to change the contents of the entry field, we can do so using the insert and delete methods.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=128)** So if I call the delete method, I need to pass in two parameters, the beginning and end indices of the characters I want to delete from the entry field.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=137)** And those indices are non inclusive so whatever the last index is, that character will not be deleted.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=143)** So if enter an index of zero to one, it'll delete everything from the zeroth character at the beginning, to the first character again, non inclusive, so the first character will not be included which means it will delete the H off of my string.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=158)** So if I execute that, you can see the H is now gone and it says ello, Tkinter.
>
> **[2:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=164)** I'm using the delete command.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=166)** I can also use the keyword End, which will delete everything up to the end of that entry field.
>
> **[2:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=172)** So going from zero to end will delete the entire contents of my entry field.
>
> **[2:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=176)** To insert text into the entry field using the insert command I need to pass two parameters.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=181)** The first one is the index of character-wise where in that entry field I want to insert the newest text, and the second parameter is a string of the text to enter.
>
> **[3:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=191)** So I'm going to put enter your password and in doing so my entry field now says enter your password.
>
> **[3:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=200)** And I did this as a segue to show you that if you wanted to use an entry field as a password input field, which is a common application for it.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=207)** You may want to hide the characters that the users entered, and you can do that by using the show property for the entry widget.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=214)** So to configure a property, I use the config command, and I'm going to configure the show property.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=219)** You pass it a string.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=220)** In this case I'm going to say asterisk.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=223)** And what it does, is it takes that string that you specified and replaces every character within the entry field with that string.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=230)** So as my user types in their password, it'll be replaced with asterisks.
>
> **[3:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=234)** But if I get that contents, it'll actually be the real contents from that.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=240)** I just typed some gibberish in there.
>
> **[4:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=242)** The last thing to show you is how we can use the state method to enable and disable the entry field.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=248)** So if I type entry.state, and I set it to disabled this is very similar to what we saw earlier with the button widgets, you notice that it's now grayed out.
>
> **[4:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=258)** I can no longer select any text from it and I can't enter any text either.
>
> **[4:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=263)** If I want to undisable it, I can do so with the state command again using the bang disabled string and now it's functioning at normal again.
>
> **[4:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=275)** And the entry widget has an interesting state called read only.
>
> **[4:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=280)** These are to select texts from the field, but they can't enter any text.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-single-line-text-with-the-entry-widget?u=76281980&t=284)** So I can select and drag, and this is useful if you wan the user to be able to copy something like a generated key to their clipboard so they can use it elsewhere in another program.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (8), let (3), pass (3), module (2)
> **Prerequisites:** configure (3), you'll need (2)
> **Env Vars:** gui (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### Making selections with the Combobox and Spinbox
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=0)** - [Narrator] We already learned one way to present the user with a series of options to make a selection from with the radio button and check button widgets.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=7)** Those widgets are good to use when you only have a few options to display.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=11)** But, as the number of options increase if you use radio or check buttons they can quickly begin to clutter up your interface.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=17)** In this video we'll learn about two other types of widgets that can be used to present choices to the user in a more compact manner.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=24)** The Combobox, and Spinbox.
>
> **[0:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=27)** The Combobox widget is your basic drop-down selection tool.
>
> **[0:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=30)** The user can click on a side button which presents them with a drop down list of all the available options.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=35)** This is useful for making a selection from a series of choices that may or may not have an obvious order to them.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=41)** With the Spinbox on the other hand the user only sees one option at a time which represents their current selection.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=48)** They can cycle through the available choices by clicking the up and down arrow buttons on the side of the widget.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=53)** The Spinbox is useful for choosing from a list of options that have an inherent order.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=57)** For example, a range of numbers.
>
> **[1:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=60)** In the python shell, I've already imported my Tk enter package as well as ttk module and have created my top level root window using the tk constructor method.
>
> **[1:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=69)** Before I create a Combobox I first need to create a variable which will store the value from that Combobox.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=76)** I'm going to create a variable called month and I'm going to use the StringVar constructor method to create a string variable.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=83)** Now to create my Combobox I'll use the ttk modules themed Combobox constructor method which has the first parameter being the parent or the root window and the second parameter I'm going to set is the property for text variable.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=97)** And so this is the variable that's going to be tied to value that's selected in the Combobox.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=102)** So set that to month.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=104)** Now that I've created my Combobox I need to use a geometry manager to place it in the window so I use the pack manager and the selected value from the Combobox will be stored in that month string variable.
>
> **[1:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=115)** But at this point the combobox doesn't have any values to select.
>
> **[1:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=119)** So to configure the values that are available to select from the combobox I need to configure the values property.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=125)** So I'll used the config method to configure values and for values you pass in a list of strings which would be the optional values for that combobox.
>
> **[2:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=136)** And I've already created a list of strings here for the twelve months out of the year to save myself a little bit of typing.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=142)** And so I'll just go ahead and pass that in.
>
> **[2:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=144)** Now that I've set those values you see I can choose those and select them from the drop-down combobox.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=150)** To get the value that's currently in the combobox I can use the get method on that month variable.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=156)** So you can see I've selected March here.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=158)** And I can also use the set method on that variable to programmatically change the value that's showing up in the combobox.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=166)** So if I set it to December you see that now the combobox has changed to represent December.
>
> **[2:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=172)** This can get a little dangerous 'cause I could use this set method to set it to something that's not one of the standard values for the combobox so we set it to something that's not a month that is valid and the combobox will change to represent that and in addition to selecting drop down options from here the user can also type in whatever they want to into the combobox.
>
> **[3:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=195)** And if we check that, that does come across as a valid input to the month variable.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=201)** So this is something you'll want to make sure you check in the background as you're having the user input things with comboboxes and Spinboxes to make sure that what they input is actually a valid selection.
>
> **[3:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=211)** Now let's take a look at this spinbox.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=214)** And for the spinbox I'm going to create another variable.
>
> **[3:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=217)** This time called year using the StringVar constructor method.
>
> **[3:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=222)** I'm going to create my Spinbox unlike all the other widgets we've seen up to this point I'm not going to use the ttk preface because a Spinbox is not available as a themed tk widget, it's only available as one of the original tk widgets.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=235)** So to create it I'll just use Spinbox pass in the parameters as we expect the first one being root or the top level window.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=243)** And the properties I'm going to set are the beginning and end range of value for the Spinbox.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=248)** So I'm going to set this Spinbox for years to be able to go from 1990 up to 2014.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=256)** It's important to note here that with the from property there's an underscore on the end of it and that's because from is a protected keyword in Python we just did up here to import our modules and so we have to use that underscore to differentiate the property that's named from.
>
> **[4:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=271)** To is just regular old to, and then I'm also going to set the text variable that's associated with this Spinbox to be year.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=279)** And since I don't need to save a referance to this Spinbox I'm going to go ahead and just call the pack command directly on the output of this constructor method.
>
> **[4:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=288)** In doing so it adds this Spinbox here.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=290)** And you see I can select the up and down arrows to change the values of the Spinbox.
>
> **[4:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=295)** And if I try and push that Spinbox value outside of its range, so clicking the down arrow it won't let me go past 1990.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=303)** To get the value from a Spinbox I can use the get method on that year variable and we can also use this set value as well but we saw earlier with the month variable.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=312)** So I want to point this out what we saw with the Combobox how users can type in whatever they want to.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=317)** They can do the same thing with the Spinbox.
>
> **[5:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=319)** So if I type in 1980, the Spinbox will accept that and set the year variable be 1980.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/making-selections-with-the-combobox-and-spinbox?u=76281980&t=327)** However, if the user tries to change the value using the up and down arrows it'll switch back to within the valid range immediately if it's changing from something that's not a valid value.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (2), interface (1), module (1), protected (1)
> **CLI Commands:** make (3), python (2)
> **Prerequisites:** configure (3)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Inputting values and displaying status with the Scale and Progressbar
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=0)** - If your program is going to take a significant amount of time to perform an operation then you probably want to provide feedback to your user regarding the progress of that task.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=10)** The progress bar widget provides a familiar looking linear progress bar themed to match the standard look of your operating system.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=17)** In this video I'll show you how to configure the progress bar to provide the user feedback for tasks that you can estimate the remaining time for.
>
> **[0:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=25)** As well as for tasks that may continue to run for an indeterminate amount of time.
>
> **[0:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=29)** We'll also look at the scale widget which allows the user to select a value from within a range by moving a marker along a linear slide bar.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=37)** This type of widget input is useful for things like volume and brightness controls.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=42)** In a way you can think of the progress bar as the output equivalent for the scale input widget.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=47)** That's why I decided to include them both in the same video.
>
> **[0:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=50)** The progress bar and the scale are both available as theme tk widgets so I've imported both the tkinter package as well as the theme tk module and I've created my top level root window.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=62)** To create a progress bar I'm going to call the ttk progress bar constructor method.
>
> **[1:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=69)** I'll pass in the root as the parent widget.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=73)** And then I'm going to configure two properties.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=75)** The first is the orient property and this has two possible options.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=80)** It can be vertical or horizontal which is how that bar is going to be oriented.
>
> **[1:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=84)** The most common one is horizontal.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=86)** So I'm going to select that here and type it in all capitals.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=90)** And then the second property is the length.
>
> **[1:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=93)** And I'm going to set that to 200.
>
> **[1:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=95)** And length specifics the number of pixels in the longest direction.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=99)** So if it's a horizontal bar from the X direction and if it's a vertical bar in the Y direction.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=104)** And once I've created the progress bar I'm going to use the pack method to add it to my window.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=110)** There are two modes that the progress bar can use.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=112)** Determinate and indeterminate.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=114)** If you know how many steps the operation you're tracking will take and can calculate it's progress then using the determinate mode will allow you to manually update the value of the progress bar to represent how many steps are left.
>
> **[2:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=127)** If you cannot determine how much more time might remain for an operation then you should use the indeterminate mode where the progress bar will just show the activity as still taking place without specifying the time that remains.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=139)** To configure the progress bar for indeterminate mode I'm going to use the config method and set the mode property to be the string indeterminate.
>
> **[2:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=151)** You'll notice here now we have a little bit of green showing up here but it's not doing anything.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=156)** When we're in indeterminate mode we can use the start and stop methods to basically turn on and off the progress bar.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=162)** So I call progressbar.start, that little green box will move along and it'll just keep moving back and forth and cycle across that indeterminately.
>
> **[2:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=173)** If I need to stop it, so after my operation is completed I can call the progress bar stop method and it will stop and move that little bar over to the left.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=182)** Those are the basics of using the progress bar in indeterminate mode.
>
> **[3:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=186)** If you know how many steps are involved in the operation you're displaying the progress bar for and you can determine how many of those steps have been completed then using determinate mode will give you user more information.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=196)** So again I'm going to configure the mode property.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=201)** This time to determinate and in determinate mode you have two other properties to configure.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=207)** One called maximum, which represents the number of steps in the task you're preforming.
>
> **[3:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=213)** The default for maximum is 100.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=216)** I'm going to set it to 11, so I say there's 11 steps in this task.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=219)** And then we also set value which is our current progress along that task.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=223)** You'll notice both maximum and value are float type values.
>
> **[3:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=228)** Now that I've set the maximum to 11 and the value to 4.2 you'll notice that the progress bar shows green for a little bit over the third of it's body.
>
> **[3:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=236)** We can update the value of the progress bar programmatically by configuring the value property.
>
> **[4:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=242)** So I'll type progressbar.config, value, and say for example I set my value to 8.0.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=249)** You'll notice now the green in the progress bar increases to a little over two-thirds of the total value of the progress bar.
>
> **[4:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=255)** Addition to manually setting specific values to the value property we can also call the step function on the progress bar object.
>
> **[4:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=263)** If I call the step function without any parameters it'll increase the value of the progress bar by one.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=269)** So now the progress bar just went from eight to nine.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=273)** I can also call the step function with a parameter, being the number by which to increment the value.
>
> **[4:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=280)** And if I do that you'll notice that right now we're sitting at 9 out of 11, if I increment my step by five that'll exceed the maximum of 11 and when that happens the progress bar wraps back around so now the value is set at three.
>
> **[4:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=294)** Rather than configure the value property or using the step method to update the progress bar it can also be configured to update itself automatically using the value from a variable.
>
> **[5:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=304)** So let me create a variable called value.
>
> **[5:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=306)** And I'm going to create this as a double variable because the value is stored as a double.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=312)** And to configure the progress bar to look to that double variable I'll configure the variable property to be that value variable.
>
> **[5:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=321)** So now variable is set to look at this variable I just created here.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=326)** So now that we have the progress bar looking at that double variable.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=330)** Let's create a scale widget to control the value of the double variable.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=334)** To create a scale I'm going to use the theme tk scale constructor.
>
> **[5:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=338)** The first parameter of course is the root window.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=341)** It also has an orient parameter which functions just the same as we saw with the progress bar.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=346)** So I'm going to create this as a horizontal bar.
>
> **[5:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=350)** We set the length, this is similar, it's the number of pixels wide to make the bar.
>
> **[5:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=356)** And I'm going to set a variable which will be value just like we saw with the progress bar.
>
> **[6:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=363)** And then we set two parameters, from and to, which specify the minimum and maximum range of this scale.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=370)** So for from I'm going to set that to 0.0.
>
> **[6:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=374)** And for the to property I'm going to set that to 11.0.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=378)** You notice that the from property here has an underscore after from and that's because from is a keyword in Python that we used up here and so we have to differentiate the property from by using an underscore.
>
> **[6:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=390)** So once I've created that I can add the scale to my window by using the pack geometry manager.
>
> **[6:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=395)** And so now I have a scale showing up here below the progress bar.
>
> **[6:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=399)** And that scale is tied to my value variable.
>
> **[6:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=402)** And so whatever value I input with the scale will be assigned to that value variable.
>
> **[6:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=406)** And then that value variable will change the value of the progress bar.
>
> **[6:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=411)** So if I slide the scale up you'll see the progress bar moves up and I can slide it down it tracks with that same percentage completion.
>
> **[7:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=420)** I can also programmatically move the scale slider by using the set method to change the value of that value variable.
>
> **[7:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=427)** So if I set it to 4.2 it programmatically changes to that.
>
> **[7:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=432)** And just as you'd imagine with any other type of variable I can also use the get method to programmatically retrieve the value of it.
>
> **[7:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=439)** So one final thought here is that the scale widget doesn't actually display the value in text that it's currently set to.
>
> **[7:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/inputting-values-and-displaying-status-with-the-scale-and-progressbar?u=76281980&t=445)** So depending on your application you might find it useful to also include a label above or below the scale widget to show the user what the current value is selected.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), for. (1), continue (1), module (1)
> **Prerequisites:** configure (8)
> **Versions:** 4.2 (2), 8.0 (1), 0.0 (1), 11.0 (1)
> **CLI Commands:** make (1), python (1), find (1)
> **Analogies:** for example (1), just like (1), imagine (1)
> **File Paths:** progressbar.config (1)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)


### 4. Organizational Widgets

> [↑ Back to Table of Contents](#table-of-contents)

#### Organizing widgets with frames
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=0)** - [Instructor] Frames are one of the fundamental widgets you'll use when organizing a Tkinter GUI.
>
> **[0:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=5)** The frame is simply a rectangular region on the screen, and by itself that's not very exciting, what makes frames useful is that they can act as the parent and geometry manager to hold and organize other widgets.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=18)** You can use the frame to organize a large GUI into smaller, more reasonably manageable sub regions.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=24)** For example, we could create one frame to hold the navigation controls for our program, we could create another frame to hold the user control widgets, which might change depending on the current context of the program, and a third frame to display output information to the user.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=41)** By dividing the GUI into these framed regions, we can easily make changes to one region without it affecting the others.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=49)** If we needed to add some new buttons to the user control panel, we could do so without worrying about how it might accidentally shift things in the navigation controls, or information display frames.
>
> **[1:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=60)** Another benefit of using frames to organize our GUI is that each frame can use a different type of geometry manager to display its child widgets.
>
> **[1:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=69)** This lets us choose the best geometry manager to use for organizing the widgets in that frame.
>
> **[1:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=74)** The navigation controls bar might be easiest to organize with the pack manager, whereas the user controls frames may be best laid out using the grid manager.
>
> **[1:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=84)** Now let's go through the process of actually creating and configuring a frame.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=89)** I've already imported the Tkinter package, as well as the Tkinter module, and I've created my root top level Tk window.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=96)** To create a frame, I'm going to use the frame constructor found in the Ttk module, spelled with a capital F, and I'm going to pass in that first parameter of the top level root window to use as the parent for this frame.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=110)** And after having created the frame, I'm going to use the pack geometry manager within that top level window to place the frame inside of it.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=118)** You notice by default, the frame has a default height and width of zero, it'll stretch to fit any objects that I add to it, but if it has nothing inside, it'll shrink down.
>
> **[2:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=127)** I can manually configure the width and height of the frame by using the width and height properties.
>
> **[2:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=132)** So I use frame.config, I'm going to set my height to be 100, and my width to be 200, and when I enter this command, those values are represented in pixels, so I have a 100 pixel high, by 200 pixel wide frame.
>
> **[2:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=149)** Now you notice, the frame doesn't have any border around it.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=153)** There are six different types of frame relief that you can choose from to customize the look of your program.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=158)** There's the flat relief, which doesn't have any border, and that's the default that's chosen, you can also select a raised or sunken relief, which make the frame appear to be either elevated or depressed, and you can choose a solid, ridge, or groove border, which will provide different styles of lines around your frame.
>
> **[2:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=176)** To configure the type of relief for our frame, we use the relief property.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=181)** We can configure it to one of those six options, spelled in all capital letters, so I'm going to select the ridge outline.
>
> **[3:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=188)** You'll see now that my border has a border around it, using that ridge style.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=192)** Our frame is currently empty, so let me add a widget to it.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=196)** I'm going to create a button widget, using the Ttk button constructor.
>
> **[3:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=200)** In previous examples, we've always used the root top level window as the parent for widgets we've added, but for this button, instead of using the root window, I'm going to make its parent the frame that I created up here.
>
> **[3:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=213)** I'll also configure the text of the button to say click me, and I'm going to use the grid geometry manager here instead of the pack manager.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=223)** I can do this because we've configured the top level root window to use the pack manager by using it on the frame up here, but we haven't associated a manager with the frame yet.
>
> **[3:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=232)** So by using the grid geometry manager on this widget I'm adding to the frame, any other widgets I add to the frame later will also need to be done so by using the grid geometry manager.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=243)** Notice that when I add the button to the frame, the frame closes down to change its size to fit the button.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=249)** I can add padding to my frame to create a buffer around the button on the inside of the frame by configuring the padding property.
>
> **[4:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=258)** Padding accepts a list of two values, the number of pixels in the X direction, and the number of pixels in the Y direction of padding to add around that frame.
>
> **[4:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=268)** So now I've created a frame with 30 pixels of padding on the inside in the X direction, and 15 pixels of padding in the Y direction.
>
> **[4:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=276)** The last thing I want to demonstrate for you is another type of frame that's available called the label frame.
>
> **[4:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=282)** You create a label frame using the Ttk label frame constructor method, and notice here that both the L and F are capitalized in label frame.
>
> **[4:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=291)** I'm going to make the top level root window the parent for this frame, and the label frame has similar properties to what you saw with the regular frame, such as height, and width, but it also has an additional property of text, and so I can set the text to whatever I want to, I'll do my frame here, and I'll have to use the pack geometry manager to add this frame because its a child of the root window, and we've already established that the root window is using the pack geometry manager when we added that first frame.
>
> **[5:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=323)** You notice that when I create this label frame, it displays my text in the top left corner of it, and also creates this solid border around it.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=330)** So this is handy if you want to organize and display text around your labels.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=334)** One down side with the label frame is that you cannot modify the relief property, they always have this solid border around 'em, but they're useful because they have that text label available.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=343)** Those are the basics of creating and configuring frames in Tkinter.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/organizing-widgets-with-frames?u=76281980&t=347)** Use frames to organize the sub sections of your GUI for easy management.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (2), pass (1), default, (1)
> **Env Vars:** gui (5)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (4)
> **Analogies:** for example (1), such as (1)
> **File Paths:** frame.config (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Creating additional top-level windows
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=0)** - [Instructor] We've already seen that when we call the Tk constructor method, it automatically creates a new window for us to begin adding widgets to.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=8)** If we want to add additional windows to our program, we can do so with the top-level window widget.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=13)** Each top-level window we create is it's own Tk widget object, which we can use as the parent and geometry manager for other widgets.
>
> **[0:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=21)** You can use new top-level windows to create entire new GUI sections for your program, or even just display a simple pop-up message for the user.
>
> **[0:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=29)** I'll begin by importing the tkinter module using the from tkinter package command, but I'm not going to import the themed ttk module, because top-level windows are not part of the themed widget set.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=41)** I'm then going to use the Tk constructor method to create my root top-level window here.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=47)** And now if I wanted to create a second top-level window, I can do so with the Toplevel window constructor.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=53)** Notice that the T is capitalized, but the l is lowercase.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=57)** And I'm going to create a top-level window which is a child of that original root window, and set that to a variable called window.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=65)** And this created a new window directly on top of that original window.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=70)** Now this new window is a separate entity, it can contain its own children widgets which it will geometry manage separately, but it is still a slave to that root top level window, because we specified the root window as its parent.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=83)** And at this point we can't tell them apart, because they both have the same default title of tk, so let's fix that on the main window.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=91)** We can use the title method and pass in a string of the new title we want for that window.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=96)** So I'm just going to call it my new window.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=98)** And now we can tell the difference between them.
>
> **[1:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=100)** My new window says New Window in the title bar.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=102)** We can control how windows are stacked on each other by using the lift and lower methods to change their order.
>
> **[1:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=108)** So by default, when this new top-level window was created, it was put at the top of the stack.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=113)** If I call the lower method on it, it'll send it down to the very bottom of the stack of all of my windows.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=120)** I can also pass an optional parameter to the lift and lower methods of another window, and in doing so, it'll lift or lower that window to be just above or below the window, which I pass as a parameter.
>
> **[2:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=133)** So if I call window.lift, and I pass in the root window as a parameter, it'll lift this window to be at the position just above the root window.
>
> **[2:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=144)** Now, since I only have two windows here, really it's no different than calling lift without any parameters, but if I had multiple windows I can use that optional parameter to very carefully control their order.
>
> **[2:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=155)** We can control whether or not a window is visible by changing its state with the state method.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=161)** The default state for a window is called normal, that's what you see here.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=166)** We can also make the window maximized by setting its state to zoomed.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=170)** We pass zoomed in as a string, and in doing so, you see that the window is expanded with the geometry size to fit the entire screen.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=179)** This will expand the window to its maximum allowed size.
>
> **[3:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=183)** To hide a window, we can set its state to be withdrawn.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=187)** We pass withdrawn as a string to the state method, and now the window will be hidden from the user.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=193)** And when it's in the withdrawn state, it's not even visible in the task bar.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=198)** You notice I only have my shell here, and then the original root Tk window.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=202)** We don't see that new window I created.
>
> **[3:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=205)** If we wanted to minimize the window so that it's still accessible in the task bar, we can use the iconic state.
>
> **[3:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=211)** We pass iconic as a string.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=216)** And now you'll notice down here, I have the new window showing up as an option within that taskbar.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=223)** To programmatically return the window out of that iconic state, we can set its state back to normal.
>
> **[3:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=231)** Now you'll notice when I did that, the window didn't go back to the original size it was when I first created it, it went back to that zoomed position.
>
> **[3:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=238)** And this makes sense.
>
> **[3:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=239)** If you have a window full-screened, and you send it down to the task bar, you'd expect it to return to fullscreen if you select it from the taskbar and de-iconify it.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=249)** We can check what the current state of a window is by calling that state method without any parameters, and this verifies that, sure enough, it's still in the zoomed state.
>
> **[4:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=259)** So let me call the normal state on it one more time, and that will return it back to its original size as we created it.
>
> **[4:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=267)** There are two shortcut methods that are available to switch between the iconic and normal states.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=273)** That's window.iconify, and what this'll do is it'll send the window down so that it's visible in the taskbar.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=281)** And then I call window.deiconify.
>
> **[4:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=287)** And that'll return it back to the normal state.
>
> **[4:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=289)** So those are basically the same as calling the state method with the iconic and normal parameters respectively.
>
> **[4:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=295)** By default, when an empty window is created, it's 200 by 200 pixels.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=301)** If we want to change the size, and/or relocate the window programmatically, we can do so using the geometry method.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=308)** The geometry method takes one parameter, which is a string containing the new width and height in pixels of the window, as well as the new x and y location in pixels of the window's top-left corner.
>
> **[5:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=321)** And that position is relative to the top-left corner of the screen.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=326)** The string is formatted as width in pixels, x, height in pixels, plus symbol, the x position, plus symbol, the y position.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=337)** Let me demonstrate that for you now.
>
> **[5:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=339)** By calling the geometry method I create my string.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=343)** I want my window to be 640 pixels wide.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=347)** I want it to be 480 pixels tall.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=351)** I want its top-left corner to be 50 pixels to the right of the left-edge of the screen up here, and then I want its top-left corner to be 100 pixels down from that top-left corner of the screen.
>
> **[6:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=365)** When I execute this, you notice my new window is now 640 by 480 pixels, and that top-left corner is 50 pixels from the edge of the screen in the x direction, and 100 pixels from the top of the screen in the y direction.
>
> **[6:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=382)** In addition to programmatically resizing the window, we can control whether or not we'll allow the user to be able to resize it.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=388)** And by default, a user can select the edges, and click and drag to resize a window.
>
> **[6:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=394)** If we want to prevent them from being able to do that, we can control it using the resizable method.
>
> **[6:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=400)** Resizable takes two parameters, both of which are booleans, representing whether or not it's resizable in the x and in the y direction.
>
> **[6:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=408)** So the first parameter controls whether or not it's resizable in the x direction, and the second parameter controls the y direction.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=415)** So if I set both of those to false, you see I can no longer click and drag on the edge or corner of the window to resize it.
>
> **[7:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=423)** If I want to allow the user to resize the window, but I want to limit by how much they can resize it, I can do so by using the maxsize and minsize methods.
>
> **[7:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=432)** Maxsize takes two parameters, the x value in pixels and the y value in pixels, that's going to be the maximum allowable size of that window.
>
> **[7:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=442)** And then the minsize method also takes similar parameters, of the minimum x and y value in pixels that we want the window to be.
>
> **[7:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=451)** So here I've set the maxsize to be 640 by 480 pixels, and the minimum window size is 200 by 200 pixels.
>
> **[7:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=458)** I'm going to let my window be resizable again by calling the resizable method with true in both directions.
>
> **[7:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=466)** And so now if I expand that window, you'll notice if I try to make it larger than 640 by 480, it stops.
>
> **[7:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=471)** And if I try to make it smaller than 200 by 200, it stops as well.
>
> **[7:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=476)** The last thing I want to show you about the top-level window is how you can programmatically close it by calling the destroy method.
>
> **[8:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=483)** The destroy method can be used on all kinds of widgets, not just windows, to delete them.
>
> **[8:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=488)** When you use the destroy method, it'll also destroy all child widgets.
>
> **[8:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=493)** So if I use the destroy method on my new window, it'll only delete the new window and any widgets contained within it.
>
> **[8:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=500)** But if I use that destroy method on my top-level root window, it'll also destroy my new window because the new window is a child of that top-level window.
>
> **[8:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=508)** Let me demonstrate that for you.
>
> **[8:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=510)** You call the destroy method using root.destroy, to destroy that top-level root window, and call it with zero parameters.
>
> **[8:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-additional-top-level-windows?u=76281980&t=518)** You notice that when I did that, it closed both the top-level window as well as that new window I created which was a child of it.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), let (5), default, (3), module (2), delete (2)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** make (3)
> **Env Vars:** gui (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Separating widgets within paned windows
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=0)** - [Instructor] So far, we've learned how to create new top-level windows, and how we can use frames to organize and divide up the widgets within the window.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=9)** In this video, we'll learn about a new type of widget, which can be used to split up sections of the user interface, the paned window.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=16)** The paned window is a geometry management widget which can hold other widgets by stacking them vertically or horizontally.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=23)** The paned window then displays a divider between each of the widgets, which the user can click and drag to adjust the relative size of the widgets within the window.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=32)** Although any type of widget can be added to the pane window, it's commonly used to hold several frames next to each other to allow the user to easily re-size them.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=41)** I've already imported the Tkinter module, as well as the themed TTK module and created my root top-level window.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=47)** To create a new paned window, I'm going to use the paned window constructor method, found in the TTK themed module.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=56)** And you notice that Panedwindow is spelled with a capital P, but the W is still lower-case.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=61)** The first parameter, as always, is the parent of that widget I'm creating, and then I'm also going to use a parameter for orient.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=68)** The two options for orient are vertical or horizontal, and these represent how the widgets added to the pane will be stacked next to each other.
>
> **[1:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=77)** If I select the vertical option, it'll stack the panes on top of each other, and if I select the horizontal option, it'll put the panes next to each other.
>
> **[1:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=85)** I'm going to select horizontal here.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=87)** Notice I type it using all caps.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=90)** Now to add that paned window to my top-level window, I'm going to use the pack manager, but I'm going to add a few properties here that we haven't seen yet.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=98)** I want this paned window to expand to fill the entire space inside of the top-level window, so I'm going to set the fill property to both, and I want it to expand if that window is changed in size.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=111)** We'll cover both of those properties in a later video in detail on the pack manager.
>
> **[1:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=116)** Now that I've added that paned window, since it doesn't have anything in it, you'll notice that it shrunk down to a size of zero.
>
> **[2:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=121)** So let me create some new frames to add to the paned window.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=126)** I'm going to create a first frame, which I'll save in a variable called frame one.
>
> **[2:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=130)** I'm going to make that frame a child of the paned window by passing the paned window as the first parameter to the frame constructor method.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=139)** I'm going to set the width of that frame to be 100, and the height of that frame to be 300 pixels.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=146)** Also, its relief will be set to sunken.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=150)** So that creates my first frame.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=152)** I'm going to copy that line and reuse it to create a second frame called frame two, also a child of the paned window, except I'm going to change its width to be 400, as well as its height.
>
> **[2:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=165)** Now, to add those frames to the paned window, I'm going to use the paned windows add method.
>
> **[2:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=172)** The first parameter for the add method is the widget we want to add, so I'm going to add frame one first.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=178)** And the second parameter I'm going to use to set up property called weight.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=184)** The weight property specifies how much the frame will be scaled when the paned window is resized.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=190)** I'm setting the weight for frame one to be one here, and then I'm going to use that line again and configure the frame two weight to be four.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=201)** This means if I expand this window, frame two will be expanded at four times the rate of frame one.
>
> **[3:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=208)** Let me demonstrate that here.
>
> **[3:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=209)** So the frame on the left side is frame one.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=212)** The frame on the right side is frame two.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=214)** And if I expand it, you'll see that frame two expands proportionately four times more than frame one.
>
> **[3:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=221)** You'll also notice that both frames are 400 pixels tall, even though I specified frame one to originally only be 300 pixels tall, and that's because the paned window will expand the frame to fit the size vertically, so it's using the largest height of those two frames.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=237)** Next, I'm going to create a third frame to add to my paned window.
>
> **[4:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=241)** I'm going to copy that line again.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=243)** I'm going to name it frame number three.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=246)** Again, it's a child of the paned window.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=248)** I'm going to set its width to be 50 and its relief as sunken as well.
>
> **[4:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=254)** Now, you notice earlier when we called the add method on the paned window, it adds new widgets to the paned window to the right of existing widgets here, since we're adding them in the horizontal orientation.
>
> **[4:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=266)** If we want to add the new frame or widget to a specific location within that paned window, we can do so by using the insert method instead of the add method.
>
> **[4:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=274)** The insert method has two parameters.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=277)** The first parameter is the index at which we want to insert the new widget and these indexes start with a zero index on the left-most widget and then go one, two, and so on.
>
> **[4:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=288)** So if I use an index of one here, I'm going to insert a new widget between the zeroth and first index, so it'll be the new widget at the first index.
>
> **[4:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=297)** Then the second parameter is the widget I want to insert, so I'm going to select that frame.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=303)** You notice now I have my new frame here, which had a width of 50, and it got inserted between the other two existing frames.
>
> **[5:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=311)** Now when I called the insert method here, I left out the parameter to configure the weight and by default that frame is going to have a weight of zero, which means if I resize this window, it's not going to be resized at all.
>
> **[5:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=323)** It will always remain as 50 pixels wide.
>
> **[5:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=325)** However, the user can select the little sashes here to manually resize the windows as they deem fit, and once they've resized that, since it has a weight of zero, it'll maintain whatever size it has as the window is changed.
>
> **[5:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=339)** If you want to remove one of the widgets from the paned window, you can do so by using the forget method.
>
> **[5:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=344)** The forget method takes one parameter, and that's the index of the widget to forget.
>
> **[5:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=350)** So if I want to forget the frame that's at position one, I call forget one.
>
> **[5:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=355)** I'm going to execute that.
>
> **[5:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=356)** You'll see that frame disappeared from my pane window.
>
> **[6:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/separating-widgets-within-paned-windows?u=76281980&t=360)** Now this does not destroy the frame, it still exists in the background, that widget's still alive, so I could re-add that to my paned window, or use it elsewhere in my GUI as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (2), interface (1), case. (1)
> **Env Vars:** ttk (2), gui (1)
> **UI Navigation:** select the (3)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Grouping widgeting within a tabbed notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=0)** - [Instructor] A common mechanism for organizing multiple displays in modern GUIs, is the use of tabs.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=6)** You've probably used tabs in your web browser, to switch between multiple web pages that you have open at the same time.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=12)** In tk, the notebook widget can be used for that type of navigation.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=16)** You can add multiple frames, as the pages of a notebook and then switch between which of the those pages is displayed by selecting from the corresponding tabs.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=26)** I've already imported the tkinter package and the ttk module as well as created a top level root window using the tk constructor.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=34)** To create a notebook, I'm going to use the Notebook constructor, which is found inside the ttk module.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=41)** It's spelled with a capital N and I'm going to pass in the parent of the top level root window.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=47)** Now I'm going to use the Pack geometry manager, add it to my window.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=51)** You can see it here, it's very small because it currently doesn't have anything.
>
> **[0:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=55)** So lets create a couple frames to add to our notebook.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=58)** I name this one frame1, use the Frame constructor method.
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=63)** And it's important, this frame needs to be a child of the notebook that I'm going to be adding it to.
>
> **[1:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=69)** I'll do the same to create a second frame, called frame2.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=73)** And now to add these frames to the notebook, I'll use the add method on the notebook object.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=79)** The first parameter for the add method is the frame that I want to add.
>
> **[1:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=84)** And then the second parameter is the text which will be the label of each tab in the notebook.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=89)** So I'm going to call this label one and we see it creates a tab up here.
>
> **[1:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=95)** I'm going to copy that line, add frame2 the same way and change the text label for that tab to be two.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=104)** So now we have two tabs in our notebook, one and two.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=107)** Neither tab contains anything, so there's nothing show below them.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=111)** You also notice that when you call the add method, it adds these widgets after or to the right of all the other tabs that exist there.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=118)** So every time we call the add method, it will just continuously add tabs on and on and out to the right.
>
> **[2:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=124)** Something else I want to point out there is that you just don't have to add frames.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=128)** Frames are the most common type of widget you'll add to the notebook but you can also add any other type of widget as well, if you need to.
>
> **[2:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=135)** We can manage any of those frames as normal and the contents will appear in the correct notebook tab.
>
> **[2:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=140)** So if I wanted to add a button to frame one.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=143)** I could do so, by calling the Button constructor.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=146)** It'll be a child of frame number one and we'll make my button text just say click me.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=153)** And I'll go a head and use the Pack geometry manager on that button, to add it to frame one.
>
> **[2:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=159)** And so when I do that, you notice that frame two expanded out here and that's because now that frame one has contents, it's expanded to fill that contents.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=167)** Even though frame two doesn't have contents, it will always be the same size as the other frames.
>
> **[2:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=173)** We can insert new notebook tags at specific locations, by using the insert method.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=178)** So I'm going to create a third frame here, called frame number three, which is also a child of the notebook..
>
> **[3:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=185)** And if I call the insert method on the notebook object, I pass it in the first parameter, which is the index in which to insert a pane into the notebook.
>
> **[3:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=194)** And the notebook is zero index, starting in the left.
>
> **[3:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=197)** So the left most tab is the zero tab, the next one over is the first tab and so on.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=201)** And so by inserting at position one, it will insert it just to the right of this left most tab.
>
> **[3:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=208)** The second parameter is the widget I want to insert, so I'm going to insert my third frame widget.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=214)** And then the third parameter is the text to display on that notebook tab.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=218)** So I'm going to call this three because it contains frame three.
>
> **[3:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=222)** You'll see, because I indexed it as position one, it's now inserted between those other two existing tabs.
>
> **[3:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=228)** If we don't like where we've inserted a tab we can remove it from the notebook by using the forget method.
>
> **[3:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=233)** The forget method takes one parameter, which is the index of the tab to remove.
>
> **[3:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=239)** And so if I call forget number one, it'll remove that tab at position one.
>
> **[4:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=244)** When we call the forget method, it's not actually deleting that frame widget or any of its contents, it's just removing it form the notebook.
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=251)** So we could re-add that frame widget to another position or use it elsewhere within our program.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=256)** Let me demonstrate that now by adding frame three back to the notebook.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=261)** Using the add method and I'll set the text to three and now because I used the add method, it adds it at the right most position of the tabs in the notebook.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=272)** If we want to see which tab is currently selected by the user, we can do so by calling the notebook's select method.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=279)** And if we call it without any parameters it'll return the tab ID of the selected tab.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=284)** So notebook.select will give us an ID of that widget.
>
> **[4:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=289)** Now this may not be very easy to use and so we can convert this ID into the index number by using the notebook's index method and passing it in this tab idea.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=300)** So if we call notebook.index to use the notebook's index method, that'll convert the result of the notebook select method into a tab number.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=312)** Since I currently have the tab in position one selected, I should get a one back.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=317)** We can also programmatically select which notebook tab is selected by passing the index value of that tab to the select method.
>
> **[5:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=325)** So if I call notebook.select and I pass in two, this will cause the notebook to switch over to show the second index tab.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=334)** We can modify the properties of a notebook tab after they've been inserted by using the tab method on the notebook.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=341)** One of the things we can change, for example, is the state of a tab to make it disabled.
>
> **[5:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=345)** So if I call notebook.tab, this is similar to the config method on other widgets, except it's specific for configuration of a tab.
>
> **[5:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=355)** I pass in the first parameter, which is the index of the tab I want to configure.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=358)** So I'm going to change tab one and I want to change the property of its state, so I'm going to make that tab disabled.
>
> **[6:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=366)** You notice that in doing so, now tab one is grayed out and it won't allow me to select it.
>
> **[6:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=371)** I could also change the state of tab one to be hidden by using the tab method, state equals hidden.
>
> **[6:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=380)** And then doing so, now tab one is no longer visible on the notebook, but it still does exist in the background at index one.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=388)** To return the tab back to normal state, I'll call that notebook.tab, change one and set it's state back to normal.
>
> **[6:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=398)** If we want to check and see what the current value of a property for a specific tab is we can use that tab method, pass in the index of the tab we were considering and then pass in the name of a property.
>
> **[6:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=409)** So for example, if I wanted to see what the text property is for tab one, I could do so with the text option and you'll see that the tab at index one has the label of two and that's the answer we get back here.
>
> **[7:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=422)** If you call the tab method without specifying a specific property it will give you a list of all the properties that exist for that tab.
>
> **[7:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/grouping-widgeting-within-a-tabbed-notebook?u=76281980&t=430)** So we can see here that tab one has a padding of zero, a text of two, not underlined, sticky and so on.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), switch (3), module (2), let (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), similar to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced Widgets

> [↑ Back to Table of Contents](#table-of-contents)

#### Entering and displaying multiple lines with the Text widget
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=0)** - [Instructor] The text widget is similar to the entry widget, except that instead of just entering a single line of input, it creates a multi-line area for text entry.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=10)** This makes it useful for things like surveys and comment boxes that require free-form text input from the user, or for things like a logging window that needs to output many lines of information for the user and will extend the long enough to require a scroll bar to navigate.
>
> **[0:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=25)** The text widget is a very powerful and complex widget, which can be used for everything from creating that simple logging window into an interactive code editor, such as IDLE.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=35)** In this video and the next, we'll cover some of the most common uses and features of the text widget.
>
> **[0:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=40)** However, we won't be able to cover everything it's capable of doing.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=44)** If you're interested in learning about all of the of the rich set of features available for the text widget, then I highly recommend reading through the Tk documentation page for it.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=53)** The first thing I'm going to do, is import the Tkinter package, however, I'm not going to import the themed TTk module, because the text widget is not a themed widget.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=65)** I also need to create a top level window using Tk constructor method.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=70)** And now to create my text widget I'll use the text constructor, notice there's no TTk because it's not a themed module.
>
> **[1:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=78)** I'll pass in that root window as the parent, and then I'm going to configure two properties: one for the width and the other for the height of my text box.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=89)** Within height, are specified in the number of characters tall and the number of characters wide that my text box will be.
>
> **[1:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=95)** So, I'm going to add it to my top level window using the pack command, you'll see it's now 40 characters wide and 10 characters tall.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=103)** Even though the text box is only 40 characters wide and 10 characters tall, it can still contain arbitrarily large amounts of information.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=111)** So, if I typed a really long message in here, "So, this is a long message in the text box, "which is more than 40 characters," you notice it wrapped around and will continue on to multiple lines.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=126)** And if I typed a message down here near the bottom which ran onto another line, "This message hits the bottom of the text box, "it will run off the screen," you notice that the text box shifted down and continued adding the text below it, but the text above still exists there.
>
> **[2:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=145)** By default, the text box wraps text exactly at the end of each line, which can give you effect of it wrapping in the middle of words, such as here, where it wrapped in the middle of the word text, and up here where it wrapped in the middle of the word which.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=158)** We can control where the text box will wrap by configuring the wrap property.
>
> **[2:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=163)** We use the config method to do that, and there's three options for wrap: there's one, which is char, and that's the default option we see here, where it'll wrap at the character which hits the end of the line.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=175)** We also have an option for none, which'll cause no wrapping, and we have an option for word, which'll cause the text box to wrap at the spaces between words.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=184)** So, if I select that, you notice that it no longer breaks up my words, it'll wrap at the nearest space.
>
> **[3:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=189)** The text widget has get, insert and delete methods, which work similar to the methods for the entry widget.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=196)** The get method, for example, requires one or two input parameters, which are the indices of a place in the text.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=202)** If given one parameter, it will return the character at that index, and if given two parameters, it'll return the string of characters between those indices.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=212)** However, unlike the single-line entry widget, which can index characters with just a single number, the text widget needs to index characters across multiple lines, which is effectively a two dimensional space.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=225)** To accomplish this, it accepts indice arguments of specially formatted strings.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=230)** The syntax includes a base, which gives a starting point for reference, and zero or more optional modifiers, which adjust that index from the starting point.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=240)** There are many different ways to build these index strings, but for this course I'm going to focus on the most common.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=246)** For the base, a common format is to use the line.char, where line and char are replaced with the index numbers of the line and character you wish to index.
>
> **[4:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=257)** For example, 4.2 would refer to the position in front of character two on line four.
>
> **[4:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=264)** Keep in mind that lines are numbered starting with one, and characters are numbered starting with zero.
>
> **[4:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=271)** This is done to keep in line with historical programming conventions, so the base 1.0 would refer to the position at the beginning of the text box.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=281)** Another common base term is end, when used by itself it refers to the position after the last character in the whole text box.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=290)** When used in conjunction with a line, using the syntax linenumber.end, it refers to the position after the last character in that line.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=300)** When we refer to lines here, it's important to understand that I'm referring to logical lines, not display lines.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=307)** Keep in mind that logical lines, which always end with the invisible new line character, may be different than the lines that are displayed in the text widget due to word wrapping.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=317)** In addition to the base index, we can also add optional modifiers to the expression.
>
> **[5:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=322)** Plus or minus a number of chars or lines is commonly used to increment or decrement the character that's being indexed from the base.
>
> **[5:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=331)** We can also use the linestart or lineend modifiers to move the pointer to the start or end of the currently indexed line.
>
> **[5:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=339)** Similarly, the wordstart and wordend modifiers will move the pointer to the start or end of the word that's currently indexed.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=347)** You can string together as many of these modifiers as you need to, and they'll be evaluated in order from the left to the right.
>
> **[5:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=354)** I've just touched on some of the most common index bases and modifiers, but there are many other complex ways to express indices.
>
> **[6:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=361)** If you want to learn more about that, I recommend looking at the indices section of the Tk documentation for the text widget.
>
> **[6:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=369)** We can use the get method of the text widget with these indices, by passing them in as strings.
>
> **[6:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=374)** So, if I call text.get, I'll pass the first index of the start of the area I want to get, so I use 1.0, which represents the beginning of my text box, and then I'll enter the end index of the section I want to get.
>
> **[6:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=387)** In this case, end; this will return the entire contents of the text widget from beginning to end.
>
> **[6:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=392)** You notice that as it does it, the new lines are included as well, and IDLE displays them as /n characters.
>
> **[6:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=399)** If I wanted to get the contents of just the first line, I could do so by typing text.get, start with the index of the beginning of the first line, which is 1.0, and then go to the index at the end of the first line, using 1.end.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=415)** You can see this retrieves all of the information from that first logical line of the text, so even though this message is spread across two lines in the widget because of word wrapping, there's only one new line character at the end, and so that's one logical line.
>
> **[7:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=429)** To insert text into the text widget, I'll use the insert method, which takes two parameters.
>
> **[7:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=434)** The first parameter is the index I wish to insert, so I'm going to create an index here using 1.0 as my base, and then I'm going to add an additional modifier to that of two lines.
>
> **[7:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=446)** So, this creates an index starting from the first position in the text entry field, down two additional logical lines, which'll place us right there, and then I enter the text I want to insert, so I'll say inserted message.
>
> **[7:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=461)** I'm going to execute that, you notice it inserts it at the position down two lines from the start of the text entry field.
>
> **[7:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=469)** We can also insert a multi-line message by using the /n new line character within the message that we're inserting.
>
> **[7:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=476)** So, let me insert a message to the end of the message we just inserted a moment ago, I'll use 1.0.
>
> **[8:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=482)** I'm going to add the modifier again, of going down two lines, so I'm looking at the third line down, and then I'm going to add another modifier of lineend.
>
> **[8:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=491)** So, we're going down to that same line we originally inserted into, but now we're indexing at the end of that line, and I'm going to add in the message of and\nmore, and\nmore.
>
> **[8:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=506)** If we insert it like that, our text box now reads "inserted message, and more, and more, and more," so by having those new line characters within the inserted string, they'll be placed on separate lines and displayed that way in the text entry box.
>
> **[8:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=519)** To delete text from the text widget, use the delete method.
>
> **[8:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=524)** If you pass in only one index, it'll delete the character at that index.
>
> **[8:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=528)** So, if I pass the index of 1.0, it'll delete the first character within my text box, which is this capital T.
>
> **[8:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=535)** If you provide two indices, it'll delete the characters from the beginning index, to just before that last index; so it's a non-inclusive delete.
>
> **[9:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=545)** So, if I use the index 1.0, which represents the beginning of that first line, and then I use the index 1.0 with the lineend modifier, which represents the end of that first line, I'll delete everything up to that end of the first line.
>
> **[9:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=558)** However, it will not delete the last character in that first line, which is the new line character.
>
> **[9:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=563)** So, you notice we still have two blank lines up here.
>
> **[9:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=567)** If we want to include that new line character for deletion, we can add one more modifier to our index.
>
> **[9:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=575)** So, I'm going to delete everything from the beginning of my text box to the third line, use lineend, so I'm going to be deleting the top three lines of my text box, and then I'm going to add one additional modifier here for plus one chars.
>
> **[9:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=589)** So, this'll go down to the index at the end of this first line, it'll go one character beyond that, and that's because the delete method is not inclusive, so it won't include the last character that's referenced here in this index.
>
> **[10:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=602)** I'm going to execute that, now it deletes those top three lines and the new line character at the end of that third line as well.
>
> **[10:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=610)** I can replace sections of text within my text widget by using the replace method.
>
> **[10:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=614)** The replace method takes two indices, it takes the beginning and end of the section of text you want to replace, so I'm going to replace everything on the first line of text here.
>
> **[10:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=623)** And then the third parameter it takes is the actual string you want to replace it with.
>
> **[10:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=629)** So, I'll now make the top line, instead of saying more and, it'll say this is the first line.
>
> **[10:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=635)** This is basically the same as calling the delete command on that first line, and then inserting the text in it's place.
>
> **[10:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=641)** As I mentioned before, the text widget is not a themed widget and, therefore, it doesn't have the same state and instate methods that we saw with the entry widget.
>
> **[10:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=650)** Instead, it has a state property, which we can set to be disabled or normal by using the text.config method.
>
> **[10:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=658)** So, I'll set state equal to disabled, and now that my text field is disabled, I can no longer type text into it.
>
> **[11:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=668)** Disabling a text widget also prevents other methods from programmatically modifying the text.
>
> **[11:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=672)** So, if I had tried to delete the text while it's currently disabled, so let me try and delete everything out of my text field with 1.0 to the end, you notice it doesn't do anything because it's disabled.
>
> **[11:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/entering-and-displaying-multiple-lines-with-the-text-widget?u=76281980&t=683)** To re-enable the text field, I simply use that config method and reset my state back to normal.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (14), pass (4), require (2), module (2), let (2)
> **Versions:** 1.0 (9), 4.2 (1)
> **Analogies:** such as (2), for example (2), similar to (1)
> **Definitions:** is a  (2), refers to (2)
> **Env Vars:** idle (2)
> **Warnings:** keep in mind (2)
> **File Paths:** text.config (1)
> **CLI Commands:** make (1)

#### Adding tags, marks, images, and widgets to the Text widget
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=0)** - [Instructor] In the previous video, we learned how to use the basic methods to insert, delete, replace, and get text from the text widget.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=8)** In this video, we'll continue from where we left off in that previous example to demonstrate how we can identify and name sections of the text with tags and marks.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=18)** Tags describe a range or collection of characters, and marks specify a specific location between two characters within the text widget.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=28)** We can use those tags and marks to change properties, such as the font and color for sections of text and control where to insert or delete text.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=37)** To add a tag to the text widget, we use the add underscore tag method.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=42)** This takes three parameters.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=43)** The first parameter is the name of the tag we want to create as a string, so I'm going to call this tag my tag, and then we give it a start and end for that tag to span.
>
> **[0:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=54)** So I want my tag to span starting with the first character within my text widget, and I want it to go all the way to the end of the first word that that first character is in.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=65)** My mistake, it's not the add tag method, it's the tag underscore add method.
>
> **[1:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=72)** The order does matter there.
>
> **[1:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=74)** After we've added a tag to our text, we can configure properties about that tag using the tag underscore configure method.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=83)** We pass in the first parameter which is the name of the tag we want to configure, and then we can specify one or more properties.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=89)** For example, let me change the background here to be yellow, and since this tag spans from the beginning of the text field to the end of the first word, if I execute that, you'll see now the word this is highlighted in yellow.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=102)** Other tag configuration options include font, foreground, justify, overstrike, underline, wrap, and more other common text options.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=111)** It's possible to create multiple tags that reference the same section of text.
>
> **[1:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=116)** If the configuration options for those tags have a conflict, it'll be settled based on a priority system where the most recently created tag has the highest priority.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=126)** If you need to modify the priority of your tags, you can do so by using the tag underscore raise and tag underscore lower methods.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=134)** If you want to remove the tag from a section of text, you can do that using the tag underscore remove method.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=141)** You pass in the name of the tag you want to remove, so I'm going to remove my tag, and then you pass in the start and end index of the section you want to remove it from.
>
> **[2:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=151)** So I'm going to remove everything from character 1.1, which is line one, character one, to 1.3.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=157)** However, this index is non inclusive, so it's not actually going to remove the tag from character 1.3, so it removed the tag on character 1.1 and 1.2.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=167)** If I execute this, you notice since that tag for my tag got removed, those two characters are no longer highlighted yellow.
>
> **[2:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=174)** If you want to find out what characters are included within a tag, you can use the tag ranges method.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=181)** If you pass in the name of a tag, so I'll say my tag, it'll return to you the start and end locations of the sections covered by that tag.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=192)** So my tag currently covers character 1.0 to 1.1, and then it covers character 1.3 to 1.4.
>
> **[3:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=199)** To get a list of all of the tags that exist within my text widget, I can use the tag names method.
>
> **[3:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=209)** So this returns a list of all the tags that exist in my text.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=212)** You'll see I have the my tag here, and I also have this special tag called S-E-L, which stands for select.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=219)** This tag is automatically updated to span whatever the selected area of the text is.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=223)** You can use this select tag when binding to the virtual selection event of the text widget, which will be covered in the later virtual events section of the course.
>
> **[3:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=232)** If we provide the tag names method with an index, it'll return all of the tags that are included within that index.
>
> **[3:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=239)** So I'll provide that the index of 1.0, which is the first character, and this will return my tag because my tag is the only tag that currently covers that character.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=249)** In addition to using them to configure properties, another reason we might want to create tags is that they can be used as indices, but since tags span multiple characters, and indices have to refer to a single character, you have to specify whether you want to use the start or end of the tag for an index.
>
> **[4:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=266)** So if I wanted to use the tag as an index within the replace command, I could say my underscore tag, and I'll specify the first character within that tag.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=277)** I'll use that as the first index for my replace method, and then I can specify my underscore tag last, which refers to the last character that's within that tag.
>
> **[4:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=287)** And then since I'm using the replace method, I need to add the text I'm going to replace it with.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=292)** I'll say that because we're replacing the word this with that.
>
> **[4:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=297)** I'm going to execute it.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=298)** You see I no longer have this up there, now it says that.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=301)** The coloring has been gone because the act of replacing that also had the side effect of deleting the tag.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=307)** It's worth noting here that you can manually specify to delete a tag by using the tag delete method.
>
> **[5:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=313)** It works by taking the tag you want to delete as its only parameter.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=317)** So this would delete my tag.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=318)** In addition to using tags to reference sections of the text, we can also create marks to indicate a particular place in the text.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=326)** Unlike tags, which have a start and an end, marks specify a single position, which exists between two characters.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=334)** Marks follow that position between characters as text is inserted or deleted from the text widget.
>
> **[5:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=338)** To get a list of the marks that are present in a text widget, you can use the mark underscore names method.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=346)** The two marks we see here are two marks that TK automatically keeps track of.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=351)** One is named insert, and as the name suggests, it marks the current index of the insert cursor.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=358)** The other automatically tracked mark is named current and specifies the index that is currently under the mouse.
>
> **[6:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=366)** One of the main reasons for using marks is that you can use the mark name as the base for an index.
>
> **[6:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=372)** Let's use that automatically tracked insert mark as the index for our insert method.
>
> **[6:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=377)** So I'll set for the index of where I want to insert my text, I'll reference that insert mark by entering a string with insert in it, and then I'll pass the insert method the text I want to insert there.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=388)** So this will insert an underscore at the position of the insert marker.
>
> **[6:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=393)** I'm going to place the insert marker right here before the word first, and when I execute it, you'll see it inserts that underscore where that insert marker was.
>
> **[6:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=403)** You can also create and modify the location of marks using the mark set method.
>
> **[6:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=408)** You pass in the name of the mark you want to create, so I'll create one called my mark, and then you pass in the index of where you want that mark to be, so I'll place this mark at the end of the text widget.
>
> **[7:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=420)** As I mentioned earlier, marks follow the relative location in the text widget as additional text is inserted or deleted.
>
> **[7:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=427)** This raises an interesting question.
>
> **[7:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=430)** Since the mark only represents a single location between characters, if text is inserted at the point where the mark is, where does it go?
>
> **[7:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=437)** Does it go to the left or does it go to the right?
>
> **[7:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=441)** Marks have a property called gravity which determines whether the mark will stick to the character on its left or right if things shift around.
>
> **[7:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=449)** To configure the gravity, we use the mark underscore gravity method, we pass in the name of the mark we want to configure.
>
> **[7:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=457)** I'm going to configure my mark here, and then we pass in a string of either left or right.
>
> **[7:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=462)** Those are the two options that are available for gravity, and they specify which side the mark will follow.
>
> **[7:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=468)** I'm going to configure my mark to follow the right side.
>
> **[7:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=472)** When we're done using a mark, we can remove it by using the mark unset method.
>
> **[7:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=477)** The only parameter we need to pass here is the name of the mark to remove.
>
> **[8:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=483)** That covers the basics of using tags and marks within the text widget.
>
> **[8:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=487)** There are a few other things I want to show you about the text widget here for your knowledge.
>
> **[8:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=490)** In addition to holding text, text widget can also contain pictures and even other TK widgets.
>
> **[8:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=496)** This enables to function somewhat like a geometry manager.
>
> **[8:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=500)** To add an image to the text widget, I first need to create the image in TK enter using the photo image constructor method.
>
> **[8:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=509)** We learned about this earlier with the label and button videos, I pass in the path to my python underscore logo.gif file, and I've created this photo image object and stored it in a variable called image.
>
> **[8:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=522)** Now to add it to my text box, I'll call text.image underscore create, I'll pass in the index of where I want to insert that image, so I'm going to use the insert mark here, and then I set the image property to that image I'm going to be inserting.
>
> **[8:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=537)** So this references the image property, and this references the name of the variable I've stored that image in.
>
> **[9:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=544)** Let me insert it at the end of the first line by moving my insert cursor there.
>
> **[9:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=548)** We can see now we've added that python logo.gif.
>
> **[9:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=550)** We can also add other TK widgets to the text field in a similar fashion.
>
> **[9:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=555)** If I create a button using the button constructor, and I'm going to create this button as a child of the text widget, and the text of this button will say click me.
>
> **[9:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=565)** I can add this button to the text widget by using the window underscore create method.
>
> **[9:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=571)** Again, I need to pass in the index I wish to insert this new button, and then I set the window property to the name of the widget object, or I pass it the widget object I want to add.
>
> **[9:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=583)** So I've stored that button in a variable called button, and now I'm going to insert it here at the end of that line before the period.
>
> **[9:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-tags-marks-images-and-widgets-to-the-text-widget?u=76281980&t=592)** Now you've seen how we can add both widgets and images to a text entry field.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (14), delete (6), let (3), continue (1), raise (1)
> **Versions:** 1.1 (3), 1.3 (3), 1.0 (2), 1.2 (1), 1.4 (1)
> **Prerequisites:** configure (8)
> **CLI Commands:** python (2), find (1)
> **UI Navigation:** go to (2)
> **Definitions:** stands for (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** previous video (1)

#### Building a hierarchical treeview
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=0)** - [Instructor] The treeview widget can be used to display a list of items that the user can interact with and make selections from.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=7)** Those items can be presented on a single level or as part of a multi-tiered hierarchy.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=13)** To begin, I've already imported my tkinter package, as well as the themed Tk module.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=18)** And I've created a root window using the Tk constructor method.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=22)** To create my treeview and store it in a variable called treeview, I'm going to use the ttk Treeview constructor method and I'll pass it the root as the parent.
>
> **[0:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=33)** I'll add the treeview to my root window using the pack command.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=37)** You'll see that the treeview is created here, but it's currently empty.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=41)** To use it, you need to add one or more items to the tree.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=44)** Each item represents a node in the tree and can be referenced by a unique item name or id.
>
> **[0:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=50)** Those item names and ids can be chosen by the programmer at the time when the item is created or tkinter will automatically generate a unique id itself.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=59)** To insert an item into the tree, I call the insert method on the treeview object.
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=63)** The first parameter is the parent node of the new item I want to create.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=67)** Now since my tree doesn't currently have anything in here, the treeview widget does automatically create a root node which it gives the special id of empty string.
>
> **[1:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=77)** So I'll use that for this first item I'm adding.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=79)** The second parameter is the position in the list under the parent node in which to insert the new item.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=86)** Since there's no other items here, I'm going to insert it at the zeroth position.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=91)** The third parameter is the items id, this is where I can choose what I want to call this item I'm adding to the list.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=97)** So I'm going to call it item number one.
>
> **[1:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=100)** And then the fourth parameter, I'm going to use to set the text property to say First Item.
>
> **[1:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=106)** That's optional, you don't have to do that.
>
> **[1:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=109)** Now we have one item in our list called First Item.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=114)** I can add more items under this treeview.
>
> **[1:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=115)** So, I'm going to use the insert method again.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=118)** I'll add another item under that root node of empty string, this item I'm going to add at position one.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=125)** I'll call it item2 and I'll the give text saying that it's the Second Item.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=131)** And then I'm also going to add a third item again under that same node.
>
> **[2:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=136)** This time instead of using a zero, one, two, three, I'm going to use the end keyword.
>
> **[2:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=140)** And what this will do is it'll add it at the end of all of the items within that level of the hierarchy.
>
> **[2:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=144)** I'm going to call this one item number 3 and I'll provide it with the text property saying that it's the Third Item.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=153)** So now we have three items within our field.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=156)** They're all on the same level because they all exist under that top level, no name, root node.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=162)** We can also add images next to the text of the items if we want to.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=166)** First I need to bring an image into my tkinter program.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=169)** And I do that with the PhotoImage constructor method.
>
> **[2:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=172)** That we've learned about previously.
>
> **[2:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=174)** Pass in the path to my python logo.gif and since that python logo.gif file is so large I'm going to use the subsample method that we previously saw to shrink it down by a tenth of it's size in the X and Y direction.
>
> **[3:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=188)** So now that I have created my logo, I'm going to insert a new item into my treeview.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=193)** Instead of inserting it at the top level where I've done these other ones, I'll insert it as a sub item under item number two, by passing in item two's node name here.
>
> **[3:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=203)** I'm going to insert at the end of all the items that are under there.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=207)** Which is currently nothing else.
>
> **[3:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=208)** I'll give it a name, so that's the name of the node, and then I'll provide it with the text properties specifying what text that node will contain.
>
> **[3:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=217)** So we'll say Python.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=218)** And finally I'll set the image property to be that logo which is the photo image object we just created.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=225)** When I execute that, you notice now the Second Item, or item number two here, has a little plus sign.
>
> **[3:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=232)** And that's because our new item just got placed under it in the treeview.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=235)** And you can see that small little Python icon next to the text.
>
> **[3:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=239)** I'm going to change the height of my treeview widget to be a little bit smaller 'cause it is large for the number of items we have in there.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=248)** You can do that with the treeview config and change the height property to the number of entries you want to display.
>
> **[4:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=255)** So if I change the height to five, my treeview will be shrunk down so that it can display five entries at a time.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=261)** You can rearrange items in the treeview, by using the move method.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=265)** The only restriction is that you cannot move an item to be underneath one of its own children.
>
> **[4:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=270)** That would create an unfortunate loop.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=273)** To use the move method, we'll call it on the treeview object, and we'll pass in the first parameter of the item we want to move.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=281)** So I'm going to move item number two.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=284)** The second parameter is the new parent to move this item under.
>
> **[4:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=287)** So I'm going to move item2 to be under item1.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=292)** And then the last parameter is the position under that new parent in which you want to place it.
>
> **[4:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=297)** So, I'm going to place it at the end of the items under item1.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=301)** So, this'll take item2, move it under item1, and place it at the end of those items.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=307)** And you can see that when I did this, now we have everything located under item1.
>
> **[5:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=314)** By default, items in the treeview are created in the closed position.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=318)** We can change this by modifying the open property with the item method.
>
> **[5:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=323)** We'll use treeview.item.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=326)** I specify which item I want to modify.
>
> **[5:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=329)** So I'll say item number one and I'll set open equals true.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=334)** So this item method is very similar to the config method but it's used to configure the items within a treeview rather than configure properties of the treeview itself.
>
> **[5:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=345)** When I execute that, you see it programatically opens up the hierarchy.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=349)** We can also use the item method to check the status of the property for an item.
>
> **[5:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=353)** So if I called treeview.item.
>
> **[5:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=356)** And I'll check the status for item1 and see what is the status of the open property.
>
> **[6:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=362)** And that'll return one representing true letting me know that this tier is now open.
>
> **[6:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=367)** If we want to remove an item from the treeview, we can do so by using the detach command.
>
> **[6:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=374)** We pass in the name of the node that we want to detach.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=378)** So let me try detaching item number three.
>
> **[6:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=381)** And this'll remove that node from the treeview but it still exists and we can re-add it to the treeview by using the move method.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=388)** So, let's do that now.
>
> **[6:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=389)** Treeview.move item3 and that's the item we want to move.
>
> **[6:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=394)** We put in the second parameter, which is the node under which we want to move this item.
>
> **[6:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=398)** So, I'll put it under item2.
>
> **[6:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=400)** And then we pass in the index of where under that item we want to place it.
>
> **[6:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=404)** So, I'll place it at the top under item number two.
>
> **[6:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=407)** So, this should insert item3 under item2.
>
> **[6:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=411)** So we should show up here under the Second Item tier at position zero.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=415)** Which'll place it just above the Python entry.
>
> **[6:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=418)** And there you can see our third item is now back.
>
> **[7:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=422)** In addition to the detach command, there's also a delete command for the treeview which will completely delete an item from the view.
>
> **[7:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=429)** So if I use the delete command on item number three, it's removed from my view and the item disappears completely.
>
> **[7:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-a-hierarchical-treeview?u=76281980&t=437)** It cannot be re-added.

> [!info]- Semantic Content
>
> **CLI Commands:** node (13), python (5), make (1)
> **Code Keywords:** pass (5), delete (3), let (2), from. (1), module (1)
> **Prerequisites:** configure (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Adding columns and selecting items in the Treeview
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=0)** - [Instructor] In the previous video we learned how to add and remove items from the hierarchal structure of a treeview.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=7)** In this video we'll continue from where that example left off to learn how to add additional columns to the treeview which can be used to display information about the tree's items.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=17)** We'll also learn how to use the bind method to capture the special event that occurs when the user selects an item from the treeview.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=24)** To add new columns to the treeview, configure the columns property.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=28)** I'll say treeview.config columns and you pass the columns property a list of the names of the columns you want to include.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=37)** So I'm going to just include one additional column called version.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=41)** And you can see that got added here, it doesn't have a title yet, but you'll see a small divider in the middle between the two columns.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=48)** To configure the properties of a column we'll use the column method of the treeview.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=53)** With a column method the first paramter is the name of the column we want to modify.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=59)** And then we can pass in one or more properties to change.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=61)** So I can change the width of that version column to be 50 pixels and I'm going to anchor it so that its contents and texts are centered, using the center anchor.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=73)** You'll see how that shrunk down that column to now only be 50 pixels wide.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=79)** In addition to configuring the columns we created we can also configure the main treeview column with the column method by referring to it with the special name pound sign zero.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=89)** So I'll call treeview.column, pound sign zero, and I'm going to set the width of my main treeview column to be 150.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=99)** When I execute that command the main treview column is now 150 pixels wide.
>
> **[1:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=105)** We can configure the title to be displayed above columns by using the heading method, treeview.heading.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=112)** We pass in the name of the column that we want to configure and then we set the text property to the name we want above that column.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=120)** So I want my version column to say version above it.
>
> **[2:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=123)** And you can see that represented on the treeview.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=125)** To configure the value contained within a slot of that column use the set method.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=131)** So treeview.set, the first parameter is the item on the hierarchy to which we're going to be referencing.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=139)** So I want to reference that python item in my hierarchy.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=143)** I'm going to be placing contents into the version column and the contents I want to place in there will be 3.4.1.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=152)** That's the name of the python version we're using.
>
> **[2:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=154)** So when I call this, it will look at the python item in the treeview under the version column and it will place the specified text.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=162)** We can also add tags to treeview items to modify the properties as groups.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=167)** This is similar to what we saw with text and we'll learn with the canvas widgets.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=171)** Tags can be added to an item at the time of creation by including the tags property or later by using the item method.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=179)** I can add a tag to my python item by using the item method with the first parameter being python referencing the item I'm going to change.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=187)** And then I'll set the tags property and I'm going to create a tag in here called software.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=192)** So the tag's property accepts a list of one or more strings for the tags you want to associate with that item.
>
> **[3:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=199)** Once tags have been established you can use those tags to configure items with the tag configure method.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=207)** You pass in the first parameter which is the name of the tag you want to configure and then you can specify one or more properties.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=214)** So I'm going to change the background of that tag to be yellow so it's highlighted.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=219)** Again, the value of using tags is that you can have multiple items specified to use the same tag and so you can configure their property as groups.
>
> **[3:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=227)** The last thing I want to cover with the treeview widget is the very important matter of determining which item in the treeview has been selected by the user.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=235)** The treeview widget does not support a command callback to execute code when an item is selected.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=240)** Instead you can listen to virtual events from the treeview.
>
> **[4:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=244)** There are three virtual events that the treeview will produce for when a selection is made and when the treeview items are opened or closed.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=252)** We'll cover virtual events in detail in a later video, but for now I'll just use the bind method to execute a callback when the selection is made.
>
> **[4:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=260)** First I'm going to define a simple callback function here.
>
> **[4:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=264)** And as I mentioned we'll cover the details of how this is done in the later virtual events section.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=269)** But this callback will simply print out using the treeview selection method, the current item that is selected from the treeview.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=279)** Now to configure the virtual event with the treeview, I'm going to use the bind method and I'm going to pass in the name of that special treeview selection event that occurs.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=292)** This is unique to the treeview and needs to be spelled out just as you see here as a string with two open angle brackets and two closed angle brackets spelled TreeviewSelect with a capital T and a capital S.
>
> **[5:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=305)** And when TreeviewSelect occurs I'm going to execute that callback function that we just described.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=312)** Now that I've configured that virtual event, if I select an item from my treeview you'll see it prints out a list showing which item is selected.
>
> **[5:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=321)** Whether or not multiple items can be selected depends on the selection mode.
>
> **[5:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=325)** By default the treeview uses the extended select mode which allows for multiple items to be selected at once.
>
> **[5:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=331)** So if I hold control I can click and choose multiple items, you see that the list that's returned includes strings for each of those items that were selected.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=341)** You can modify the select mode by setting the select mode property.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=346)** Treeview.config select mode equals browse.
>
> **[5:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=353)** So the browse select mode will allow one item to be selected at a time.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=358)** If I try to hold control and click and select multiple items it won't let me.
>
> **[6:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=364)** Another useful select mode is the select mode of none.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=370)** And as the name suggests, that doesn't allow you to select any items from the tree.
>
> **[6:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=375)** So if I click it won't highlight those items to show they're selected.
>
> **[6:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=379)** We can programmatically select tree items by using the selection add, selection move, and selection toggle methods.
>
> **[6:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=386)** The selection add method will add the specified item to the selected items.
>
> **[6:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=393)** So I'll add the python item to be selected and you'll notice that the previously selected item which was first item still remains selected.
>
> **[6:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=402)** I can programmatically unselect items by using the selection remove method, passing in the name of the item I want to unselect, so I unselected python there.
>
> **[6:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=416)** And finally I can toggle whether or not an item is selected by using the selection toggle method.
>
> **[7:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=422)** Again, you pass in the name of the item you want to select and it will toggle based on the current state of that item.
>
> **[7:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/adding-columns-and-selecting-items-in-the-treeview?u=76281980&t=429)** So now my python item is selected again.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), function (2), continue (1), include. (1), this, (1)
> **Prerequisites:** configure (11)
> **CLI Commands:** python (8)
> **UI Navigation:** toggle (4)
> **File Paths:** treeview.config (2)
> **Versions:** 3.4.1 (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)

#### Building cascading menus
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=0)** - [Instructor] Drop-down menus are a ubiquitous element of windowed user interfaces, and an area that you'll want to put extra care into when planning your application.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=8)** They provide a means for organizing and presenting a multitude of actions to the user.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=13)** In this video I'll go through the process of creating and populating a standard menu bar and the ways for organizing the menu options, such as separators and sub-menus.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=23)** This video won't go into detail on human computer interface design or recommended ways to organize and layout your menus.
>
> **[0:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=30)** That's a philosophical discussion beyond the scope of this course.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=34)** In general, though, it's good to avoid letting menus grow too long or become too deeply nested, and always let other users test drive your GUI before releasing it to the wild.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=43)** Menus are not part of the theme Tk GUI set, so I only need to import the tkinter package.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=49)** Next I'm going to create my top level root window, with the Tk constructor.
>
> **[0:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=54)** And when using menus, you also want to configure a second option with the root menu, using the root.option_add method.
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=63)** Type in the syntax in a string *tearOff and set that to False.
>
> **[1:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=71)** What this line of code does is that it tells the Tk menu to not create a terrible menu.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=76)** If we don't do this, then each of the menus in our interface will have a dash line at the top, which allows it to be torn off.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=83)** Tk enter defaults to using tearOff menus because of Legacy and maintaining backwards compatibility with its original look and feel.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=90)** However, tearOff menus are not part of modern GUIs, so you'll want to include this line in your code before you start creating your menus.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=97)** Now, to actually create the menu, I'm going to create one and save it in a variable called menubar, by using the Menu constructor method, and passing it the root window as its parent.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=107)** And then once I've created that menubar, I can add it to the root window by configuring the root window itself to use that menu item as its menu.
>
> **[1:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=117)** So use the config method, and set the menu property to that menubar object I just created.
>
> **[2:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=122)** The menu is currently empty, so let's add some new menu items.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=126)** Each menu item will be a new menu object, which is a child of this menubar object we just created.
>
> **[2:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=133)** So I'm going to create one object called file.
>
> **[2:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=135)** I use the Menu constructor and pass it menubar as the parent.
>
> **[2:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=140)** I'm going to do the same to create another one called edit.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=143)** Again, I use the menubar constructor, with the menu parent.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=147)** And the last one I'm going to call help.
>
> **[2:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=149)** And I'm going to have to put help with an underscore, because help without the underscore is a keyword in Python that will cause problems.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=157)** And again, I'll pass it menubar as the parent.
>
> **[2:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=160)** To add the menu objects we just created to the parent menubar, we use the add_cascade method on the menubar object.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=169)** Notice the underscore in the name.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=171)** And here we specify the menu that we want to add to the menu property.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=175)** So I'm going to add that menu I just created and called file.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=179)** And next we add the name of the label we want to have with that menu.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=182)** So I want that menu to say File.
>
> **[3:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=186)** I'll do the same for each of those other menus I just created.
>
> **[3:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=191)** So I'll add the menu called edit.
>
> **[3:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=194)** And I'll give it the name Edit.
>
> **[3:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=197)** And I'll add the menu called help, again with that underscore, to avoid using a keyword.
>
> **[3:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=203)** And we'll give it the label Help.
>
> **[3:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=206)** Now, you can see with those added, we have those three menu options available at the top of our window.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=212)** Now that we have menus with our window, let's add some commands to the file menu.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=216)** To do that, I call the add command method, and I'm calling it on the file menu itself, not the menubar, _command.
>
> **[3:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=226)** You pass in the name of the command.
>
> **[3:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=228)** So I'm going to make a command called New.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=230)** And then I can set the command property to let it know what function to execute when the command is called.
>
> **[3:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=236)** I'm going to use a lambda function here so that I can just call the print method from a single line of code.
>
> **[4:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=241)** We'll cover how this is done and why I'm doing this in more detail in the later video on command callbacks in the event handling section.
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=251)** Now that I've added that command, if I select the File menu, I have a new option underneath.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=256)** And if I click it, I prints New File, just as I told it over here.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=261)** We can also add a separator line between menu elements by using the add_separator method.
>
> **[4:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=268)** Again, I'm calling this on the file menu itself, and I don't have to pass any parameters.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=272)** But by using this, it's now inserted a line underneath that New command.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=277)** So, let me add two more commands to the File menu.
>
> **[4:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=282)** I'm going to create a command for Open.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=285)** And it'll just say Open File.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=290)** And actually, I'm going to put three periods after that.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=293)** And I'll also create one called Save.
>
> **[4:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=299)** Now if I open up my File menu, you'll see I have all those options.
>
> **[5:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=302)** And Tk automatically takes those three periods after the Open, and converts it to an ellipsis.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=308)** If we have keyboard shortcuts associated with these commands, we can notate them on the menu by setting the accelerator property using the entryconfig method.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=318)** So I'll type file.entryconfig, configure my New command.
>
> **[5:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=323)** And then I'm going to set the accelerator property.
>
> **[5:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=325)** And I'll set it to the text of the shortcut.
>
> **[5:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=328)** So Ctrl + N is a common shortcut for creating a new file.
>
> **[5:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=332)** And when I do that, you see now it says Ctrl.N next to the new line.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=337)** Now, this does not actually set up that keyboard command, or create that key binding.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=343)** We'll cover in the later event binding section how to create those sort of shortcuts.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=346)** But this is how you can display them on your menu.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=349)** Menu commands are similar to buttons in that they can also have images added next to them.
>
> **[5:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=354)** As we've seen before, to use an image, I need to create a PhotoImage object.
>
> **[5:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=359)** I use the PhotoImage constructor method we've seen before, and I pass in the file path to my python_logo.gif.
>
> **[6:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=367)** And as I've seen before, as well, we'll use the subsample method to shrink it down to a tenth of its original size.
>
> **[6:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=373)** So now I've created a photo image object, stored in the variable called logo.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=378)** And I can add that to my file menu by using the entryconfig method.
>
> **[6:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=383)** And I might configure the Open entry.
>
> **[6:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=386)** And I'll configure the image property to point to that logo.
>
> **[6:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=389)** And I'll also set the compound property, which we've seen before with buttons and labels, to left, so that it'll place that logo to the left of the text for that entry.
>
> **[6:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=401)** After doing that, you'll see now I have my Python logo to the left of my Open text.
>
> **[6:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=406)** These menu entries can be enabled or disabled by configuring the state property using that entryconfig method.
>
> **[6:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=414)** So if I want to configure the state of the Open entry, I pass in the name of the entry, and I'll set the state to be disabled.
>
> **[7:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=424)** And now that it's disabled, you'll see it's grayed out and the user can't select it from the menu.
>
> **[7:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=428)** In addition to just adding commands to a menu, we can also add other menus effectively creating sub-menus.
>
> **[7:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=435)** For example, instead of just having one Save option here, I could create a Save sub-menu containing commands for different forms of Save, such as Save As and Save All.
>
> **[7:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=446)** First, I'm going to delete the current Save command entry.
>
> **[7:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=449)** To delete a menu item, I just use the Delete method, file.delete and then I pass in the name of the command I want to delete.
>
> **[7:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=460)** And now you see Save is no longer part of that menu.
>
> **[7:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=463)** Instead of adding another Save command to the file menu, this time I'm going to create a new menu object called Save, which will be a child of the File menu.
>
> **[7:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=473)** Save equals Menu file.
>
> **[7:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=477)** Now, I'll add that to the file menu using the add_cascade method we saw earlier.
>
> **[8:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=483)** I'll specify the menu is save, and its label will also be Save.
>
> **[8:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=491)** Now it appears under there as a sub-menu.
>
> **[8:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=493)** You notice the little arrow to the side.
>
> **[8:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=497)** Now I can add commands to that Save sub-menu by using the add_command method.
>
> **[8:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=502)** So I'll call save.add_command.
>
> **[8:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=506)** I'll give a command called Save As.
>
> **[8:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=510)** And I'll have it print Saving As.
>
> **[8:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=519)** Then I'll just copy that line, and do the same to create a command called Save All.
>
> **[8:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=527)** Now under my Save menu, I have those two options, and if I select them, they'll execute the appropriate command depending if I select Save As or Save All.
>
> **[8:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=537)** In addition to adding commands and other sub-menus to menus, we can also add radiobuttons and checkbuttons.
>
> **[9:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=543)** They behave the same as the checkbutton and radiobutton widgets.
>
> **[9:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=547)** So to use the radiobuttons, I first need to create a variable called choice here, using the IntVar constructor method.
>
> **[9:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=555)** And then I'm going to add the radiobuttons to my edit menu.
>
> **[9:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=558)** I can do so using the add_radiobutton method.
>
> **[9:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=562)** I pass in the name for the radiobutton, so I'll call this one One.
>
> **[9:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=566)** I specify the variable that's associated with that radiobutton, so it's that variable choice that I just created.
>
> **[9:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=573)** And I specify the value that this radiobutton will assign to the variable if it's selected.
>
> **[9:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=578)** So the one called One, we'll assign a value of one to my variable choice.
>
> **[9:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=582)** And then I'll copy this line and use it to create two, and to create three.
>
> **[9:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=594)** Now I have three buttons that I can choose from under my Edit menu.
>
> **[10:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=600)** You can do the same thing, as you'd expect, using the add_checkbuttons menu to add checkbuttons in a similar fashion.
>
> **[10:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=607)** The last thing I want to cover about menus is the ability to create popup menus at a specific location on the screen, by using the post method.
>
> **[10:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=616)** This is useful for creating contextual, right-click type menus.
>
> **[10:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=620)** We'll cover the process for capturing a right-click in the later event binding section, but for now I'm just going to focus on drawing the menu at a specific location on the screen.
>
> **[10:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=630)** You have to capture that location from the event handler when a right-click occurs.
>
> **[10:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=634)** To draw a menu on the screen, we use the post method.
>
> **[10:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=637)** So if I wanted to draw my file menu, I would call file.post and then pass the x, y coordinates of where I want it to draw the menu.
>
> **[10:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=647)** So this'll create a popup menu at 400 by 300 pixels.
>
> **[10:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=652)** That's 400 pixels in the x direction from the left of the screen, and 300 pixels in the y direction downwards.
>
> **[10:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/building-cascading-menus?u=76281980&t=659)** These coordinates are in relation to the entire screen, and not just in relation to the Tk window over here.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), let (5), delete (5), interface (2), this, (2)
> **Code Identifiers:** tearoff (3), add_cascade (2), add_command (2), option_add (1), add_separator (1)
> **Prerequisites:** configure (5), set up (1)
> **UI Navigation:** right-click (3), select the (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (2), similar to (1), for example (1)
> **CLI Commands:** python (2), make (1)
> **Env Vars:** gui (2)

#### Drawing a basic line on the Canvas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=0)** - [Instructor] The Canvas widget gives you space on which to draw and organize various shapes, images and even other widgets.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=7)** It's power and flexibility make it suitable for all sorts of tasks from creating a basic drawing space or displaying a diagram to building your own custom widgets with a unique look and feel.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=18)** In this video and then next one, I'll go through the process of creating a canvas and using some of the common methods for drawing lines and shapes to the canvas as well as adding images and other widgets.
>
> **[0:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=30)** Since the canvas is not one of the themed Tk widgets, we'll only need to import the Tkinter package.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=37)** Now, I'll create my top-level Tk window using the constructor method, and to create a canvas I'll use the canvas constructor method.
>
> **[0:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=46)** I'll pass at the top-level window as the parent, and I'll use the pack method to put my canvas in the window.
>
> **[0:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=54)** By default, the canvas is just a blank area of this size.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=57)** We can specify the size of the canvas by configuring the width and height properties.
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=63)** I'll set the width of my canvas to be 640 and the height to be 480, and both of these values are represented in pixels.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=73)** There are a variety of shapes that we can draw on the canvas, the simplest being a line.
>
> **[1:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=78)** I'm going to create a line and save it to a variable called line, and do to that I use the canvas.create_line method.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=87)** Now, there's several parameters that go into this.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=90)** The first one are x, y pairs of co-ordinates for the line.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=94)** So, if I want my line to be begin at the point 160, 360, that's being an x, y pair and I wanted to continue on and end at the point 480 by 120.
>
> **[1:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=106)** Again, that's another x, y pair of pixels, and those pixels are referenced from the top left corner of the canvas.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=114)** I can also set the fill property of my line to make my line blue, and I can configure the width of the line to change how thick it is, So, this'll create a line that's five pixels wide.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=126)** So, you can see that it's created a line with the start being 160 by 360 pixels from the top left corner and 480 by 120 pixels down is where it ended.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=139)** Whenever we create an item within the canvas, the create method returns an ID that we can use to reference that item later to make changes.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=146)** If we don't ever intend to modify the canvas item again, then we can just ignore the returned ID, but if we'll need to reference it later then we'll need to capture the ID in a variable as I did here with this line method.
>
> **[2:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=158)** Now, we can use that stored ID with the canvas's item configure method to modify properties about the line.
>
> **[2:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=165)** For example, if I wanted to change the color of the line, I could do so with the item configure method passing in the line object itself and then specifying the property I want to change, in this case the fill property and I'll set that line to be green.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=181)** We can also get the co-ordinates that are associated with the line by using the canvas's coords method.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=187)** We pass in that line object and it will return a list of the co-ordinates associated with that line.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=193)** If we pass co-ordinates to that coords method, we can also use it to change the co-ordinates of the line.
>
> **[3:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=199)** So, if I call canvas.coords specify the line object I want to change, I can then pass in a new set of co-ordinates for the line.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=207)** So, I'll start this line at zero, zero.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=210)** I'll add a co-ordinate of 32, 240 and then you can add multiple sets of co-ordinates.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=216)** You can actually do more than just two pairs.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=218)** So, I'm going to have this line continue on to the point 640 by zero.
>
> **[3:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=223)** So, I've created three pairs of co-ordinates, zero, zero, 320 by 240 and 640 by zero for this line, and when I draw it you'll see it's a line going from the top left corner to the center of the canvas up to the top right.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=237)** Another configuration option that's available for lines is the ability to smooth them out.
>
> **[4:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=242)** I'll call the canvas.itemconfigure method.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=246)** Specify the line I want to smooth, and then configure that smooth property to be true.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=252)** Doing this will cause the canvas to draw multiple line segments in order to create a smooth appearance of the line.
>
> **[4:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=258)** We can control how many line segments it uses to try and represent this line by configuring the splinesteps property.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=265)** So, again, I'll use my itemconfigure method on the line object and I'll set the splinesteps property to being five.
>
> **[4:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=275)** This'll draw that line using five steps to try and smooth it out.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=279)** You can see that with five splinesteps it still looks pretty rough so let's copy that line and let's try upping out splinesteps to something larger like 100.
>
> **[4:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=289)** Now, we're back to a fairly smooth looking line.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=292)** When we're done using an item on the canvas, we can delete it by using the canvas's delete method and passing in that object we want to delete.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=301)** In addition to passing in objects, we can also use the all keyword to completely clear the canvas with the delete method.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=307)** That covers some of the basic properties and methods for creating and configuring a line item on the canvas.
>
> **[5:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-a-basic-line-on-the-canvas?u=76281980&t=313)** In the next video, we'll take a look at some of the other shapes we can draw on the canvas as well as how to add images and other widgets.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), delete (4), continue (2), let (2), default, (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** create_line (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Drawing complex shapes on the Canvas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=0)** - [Instructor] In addition to drawing lines, we can also draw a number of different shapes to the canvas, including rectangles, ovals, arcs, and polygons.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=9)** In this video, we'll continue with the example canvas created in the previous video to learn how to draw those shapes, images, and other widgets to the canvas.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=18)** We'll also learn how to control the order of items on the canvas and how to apply tags to them.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=23)** The first item I want to show you is the rectangle.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=26)** To draw a rectangle on the canvas, we use the canvas's create_rectangle function.
>
> **[0:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=34)** The rectangle method takes four different parameters and those are X,Y pairs of coordinates for the two opposite corners of the rectangle.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=42)** So if I pass in the coordinates, 160 and 120, that'll represent one corner of my rectangle, and then I'll pass in two more coordinates of 480 and 360, and those will represent the other corner of my rectangle.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=56)** And so this method creates the rectangle object.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=58)** And I've stored it to a variable.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=61)** After that I can configure properties of that object by using the itemconfigure method.
>
> **[1:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=66)** I pass in the first parameter which is the object I want to configure, and then I'm going to use the fill property to change my rectangle to be yellow.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=76)** Another type of canvas item that we can create is the oval.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=80)** We do that by using the create_oval method of the canvas object.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=87)** And the oval takes a similar set of parameters as what we saw with the rectangle.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=91)** You're basically defining a bounding box around that oval by defining the top left and bottom right corners of the oval.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=98)** And it'll draw an oval within that.
>
> **[1:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=100)** So if I use that same set of points that we used for the rectangle to define my oval, you'll define an oval that sits exactly inside of that rectangular area.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=110)** Now, since we did not specify a fill, the yellow box is visible through the oval.
>
> **[1:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=115)** To create an arc, we'll use the canvas.create_arc method.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=120)** Now the parameters we pass through the arc method are the same as what we did with the oval and rectangle methods.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=126)** We're effectively defining the area in which it'll draw an oval, and with the arc, it's only going to draw a specific piece of that oval.
>
> **[2:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=133)** By default, it'll draw from zero to 90 degrees.
>
> **[2:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=136)** I'm going to set the coordinates for 160 to one being my first X and Y coordinates.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=142)** And for my second set of X,Y coordinates, I'm going to use 480 by 240.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=147)** You can see when I execute that, it creates an area that falls within those coordinates, and it'll draw my arc from zero to 90 degrees.
>
> **[2:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=155)** I can configure where my arc starts and ends by using the itemconfigure method, change the start and extent properties.
>
> **[2:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=163)** So I'll use the canvas.itemconfigure.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=166)** I'll pass it that arc item, and then I'll set the start property to be zero.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=170)** So I'll have my arc start at zero degrees, and I'll have it extend by using the extent, with a T, property for a 180 degrees.
>
> **[3:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=180)** I'm also going to, while I'm in here configuring properties, set my fill to be green.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=184)** So now I have a green arc the extends from zero to 180 degrees.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=190)** If you want, you can also draw polygons on the canvas by defining the individual points along the item.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=196)** You do that by using the canvas.create_polygon method.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=202)** And you pass a series of X,Y coordinates, defining the points along that polygon.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=207)** So I'm going to draw a triangle here with my first coordinate pair being 160 by 360.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=212)** My second coordinate pair is 320 by 480, and my third coordinate pair will be 480 by 360.
>
> **[3:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=221)** Now, I'm going to have this triangle be filled in to be the color blue.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=225)** You can add as many of these X,Y coordinate pairs as you want to for the vertices of the polygon.
>
> **[3:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=231)** It's similar to creating a line segment in which we saw we could add multiple X,Y pairs if we wanted to except that it also connects the beginning and end pairs.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=240)** So these three points created a single triangle, and since it's a closed shape, we can also use the fill property to add color to it.
>
> **[4:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=247)** Those are all of the basic shapes that we can draw on the canvas, the line, the rectangle, the oval, arc, and the polygon.
>
> **[4:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=254)** Now, let's look a few final canvas items.
>
> **[4:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=257)** We can also add text to the canvas by using the canvas's create_text method.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=265)** The first two parameters are the X and Y coordinates at which to place the text.
>
> **[4:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=270)** And those will be the center of where the text is located.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=273)** Next you can define the text to put there by using the text property.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=277)** So I'm going to display the word Python at the coordinates 320 by 240 which should put it at the center of my canvas.
>
> **[4:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=284)** And I'm also going to specify the font property to write Python using a Courier font.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=290)** And that was size 32, and we'll make it bold.
>
> **[4:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=296)** If I want to add an image to my canvas, I first need to create an image object using the PhotoImage constructor method.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=303)** We've already learned about that in some previous videos such as the label and button.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=307)** I pass in the path to my gif file, and it's created the PhotoImage object.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=312)** And stored it in a variable called logo.
>
> **[5:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=314)** And then I use the canvas.create_image method to create the image.
>
> **[5:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=320)** I pass in the coordinates at which I want to place the image, and again, just like with the text method, these coordinates represent the center of where the image will be placed.
>
> **[5:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=328)** And then I specify the image property to be that logo file we just created.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=334)** And there's my Python logo.
>
> **[5:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=336)** Items are added to the canvas in the order that they're created with the most recently created items being on top.
>
> **[5:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=342)** If we want the text to be on top of the image, we can simply move the create_text method to be after the create_image method in our program.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=349)** But as your program grows more complex, you may not always be able to control which items are created first, so you can modify their order after they've been created by using lift and lower methods.
>
> **[6:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=361)** Let's use the lift method on the text item to raise it.
>
> **[6:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=364)** To do that I'll call canvas.lift and then I'll pass in that text item which I stored in a variable called text.
>
> **[6:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=371)** You can see this raises it up to the very top position within my stack of items on the canvas.
>
> **[6:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=377)** I can also use the lower method to move the image down in the stack.
>
> **[6:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=381)** So if I call canvas.lower, and pass it the image, when I execute that, you'll see it actually pushes that image all the way down below all the objects, including the rectangle in the stack, so we can no longer see it.
>
> **[6:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=395)** If we wanted, we could use the lower method with an additional parameter of text to specify that we want to lower the image just below the text item.
>
> **[6:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=404)** So, for example, if I called canvas.lower, I say I want to lower the image, and I can also specify to where I want to lower it which is the text, executing that will put the image at the position just below the text object.
>
> **[6:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=419)** The last thing I want to show you that we can add to the canvas is that we can also include other Tk widgets.
>
> **[7:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=425)** If I create a button using the Button constructor method, I make it a child of the canvas.
>
> **[7:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=432)** And I'm going to just have this button say Click Me.
>
> **[7:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=436)** I can add it to the canvas by using the canvas.create_window method.
>
> **[7:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=441)** Again, I'll pass in the coordinates of where I want to place that button.
>
> **[7:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=444)** I'm going to place this one at 320 by 60.
>
> **[7:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=448)** And then I set the window parameter to be that button object.
>
> **[7:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=452)** When I execute that, you can see my Click Me button now appears up here at the point 320 by 60.
>
> **[7:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=458)** This allows us to use the canvas as a geometry manager.
>
> **[7:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=461)** And we can even include frames or other geometry management widgets in the canvas.
>
> **[7:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=466)** As we've seen, every item we create on the canvas, has a unique ID which we use to refer to it when using methods like lift, lower, itemconfigure, and delete.
>
> **[7:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=476)** If we want to reference multiple items at once, we can do so by creating tags.
>
> **[8:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=481)** We create tags to use as custom identifiers we attach to a canvas item.
>
> **[8:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=486)** Each canvas item can have multiple tags and the same tag can be used by multiple canvas items.
>
> **[8:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=492)** This gives us an easy way to logically group and modify multiple items at the same time.
>
> **[8:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=496)** Any of the methods we just learned about which use item IDs as parameters can also accept a tag instead of the item's ID.
>
> **[8:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=504)** This allows us to execute the method on all items having that specific tag at that same time.
>
> **[8:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=510)** You can add tags to items after creation by using the itemconfigure method.
>
> **[8:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=515)** For example, let's add a tag to our rectangle to specify that it's a shape.
>
> **[8:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=520)** I'll call canvas.itemconfigure, specify my rectangle object by passing in that ID, and then I'll set the tags property.
>
> **[8:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=529)** And the tags property takes a list of strings for the tags you want to apply to that item.
>
> **[8:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=534)** So I'm going to apply a string called shape.
>
> **[8:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=537)** Now let me do the same thing for my oval.
>
> **[9:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=541)** We'll call itemsconfigure, pass in my oval identifier.
>
> **[9:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=545)** And then set the tag property to shape and I'm actually going to add two tags here.
>
> **[9:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=550)** It'll be shape, and we'll also say that the oval is round.
>
> **[9:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=554)** So we've added a single tag to the rectangle to specify it as a shape.
>
> **[9:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=558)** And we've added multiple tags to the oval, it's a shape, and it's round.
>
> **[9:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=563)** The reason for creating tags, is that we can use them to reference groups of items at the same time.
>
> **[9:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=568)** So if I call canvas.itemconfigure and I send in shape, I can change the fill color for both the oval and the rectangle at the same time to grey.
>
> **[9:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=581)** To get a list of all the tags that are associated with an item, we can use the canvas's gettags method and pass in the name of that item.
>
> **[9:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/drawing-complex-shapes-on-the-canvas?u=76281980&t=590)** This call here returns all of the tags associated with the oval, so we see that it has both the shape tag and the round tag associated with it.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (13), let (4), continue (1), function (1), default, (1)
> **Code Identifiers:** create_text (2), create_image (2), create_rectangle (1), create_oval (1), create_arc (1)
> **CLI Commands:** python (3), make (2)
> **Analogies:** for example (2), similar to (1), such as (1), just like (1)
> **Prerequisites:** configure (3)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Attaching a scroll bar to widgets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=0)** - [Instructor] If your GUI includes widgets which are too large to view in the available space, then you can include a scroll bar to enable the user to selectively view different sections of it.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=9)** The scroll bar is commonly used to navigate a lengthy text widget or a large canvas.
>
> **[0:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=14)** Scroll bars are their own unique widgets in Tk, rather than just being a sub feature of other widgets.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=20)** The scroll bar widget interfaces back and forth with other widgets that support scrolling through a set of methods.
>
> **[0:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=27)** The scroll bar lets the widget being scrolled know its current position, and the widget that's being scrolled lets the scroll bar know what percentage of the entire area is currently visible.
>
> **[0:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=37)** For this example, I've already imported the Tkinter package and Ttk module, as well as created my root top level window.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=44)** I've also gone ahead and created a new text widget, which is a size of 40 in width, 10 lines in height, with the word wrap property, and I've placed it in that main top level window using the grid manager to place it at row zero, column zero.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=59)** I've populated by text widget with dummy text that's long enough that it necessitates scrolling.
>
> **[1:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=64)** To create a scroll bar, I'm going to use the Ttk scroll bar constructor method.
>
> **[1:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=71)** Notice that scroll bar's spelled with a capital S, but a lowercase B.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=75)** Now my scroll bar is going to be a child of the master root widget, not the text widget that it's going to be scrolling, and that's because the master will be handling the geometry management of the scroll bar.
>
> **[1:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=85)** Also configure the orient property, scroll bars can be either vertical or horizontal, for this case I'm going to create a vertical scroll bar, and then I also need to configure the command property.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=96)** This command property tells the scroll bar what command to execute whenever it's moved, and the command I'm going to execute is one that's special to the text widget, and that's called Y view.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=107)** The Y view method will tell the text widget how far the scroll bar has been moved so it can change its view accordingly.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=113)** Now that I've created my scroll bar, I'll add it to the window using the grid manager, I'll put it in row zero, column one, so that it'll be just to the right of my text widget, and I also need to specify the sticky property of the grid manager to north and south so that it'll be stretched against the top and bottom of that cell.
>
> **[2:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=133)** We'll cover all those in more detail in the later grid manager video.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=137)** Now that I've created my scroll bar, I can use it to scroll up and down within the text, but you notice the view of the scroll bar doesn't represent where in the text it's being scrolled.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=146)** That's because the text isn't currently telling the scroll bar how far up or down it is.
>
> **[2:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=151)** We can configure the text widget to communicate back with the scroll bar by configuring the Y scroll command property.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=161)** This property tells the text widget what command to call whenever it's called up or down, and I'm going to have it call the scroll bar set method.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=169)** The set method is a special method that tells the scroll bar, percentage wise, where to place the top and bottom of the scroll pad along the full length of the scroll bar.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=178)** Now that I've used that, you can see I have the scroll pad visible, and it moves proportionally to where in the text we're currently scrolling.
>
> **[3:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=186)** Creating a scroll bar in the X direction works the same way, except that you can use the X view method and configure the X scroll command property of the widget being scrolled.
>
> **[3:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=196)** Here is a list of widgets covered in this course which support X and Y direction scrolling.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=201)** As you can see, the text, canvas, and treeview widgets can all scroll in both the X and Y directions, whereas the entry, spinbox, and combobox widgets are limited to only scroll in the X direction.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=214)** I want to demonstrate one strange behavior you may run into when using the scroll bar, so I've created some example code, which creates a canvas with X and Y scroll bars.
>
> **[3:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=224)** When we create the canvas, rather than defining the width and heights for the canvas, we define the scroll region.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=230)** This is a rectangular area seen and unseen, over which the canvas will scroll.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=235)** I create the X and Y scroll bars as usual by using the scroll bar constructor method, and I configure their command property to use the canvas.x view and canvas.y view accordingly.
>
> **[4:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=247)** Once I've created the scroll bars, I can then configure the canvas' X scroll command to use my X scroll bar's set command, and I can use the canvas' Y scroll command to execute the yscroll.set method from the Y scroll bar.
>
> **[4:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=262)** Once I've created those three widgets and configured them, I then use the grid geometry manager to place the canvas, and place my X scroll bar below it, and place the Y scroll bar to the right of it.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=272)** The code down here calls the bind method on the canvas widget to bind it to whenever the user clicks their mouse button.
>
> **[4:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=279)** We'll cover event bindings in more detail in a later section, but for now know that if the user clicks on the canvas, it'll execute the canvas click method and pass in event information, which contains the X and Y location on the canvas where that click occurred.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=293)** I then have a little bit of code, which breaks out those X and Y values, and uses the canvas.create_oval method to draw and oval on that point of the canvas.
>
> **[5:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=303)** If I run this code, you'll see it creates my canvas with scroll bars, I can click around on the canvas, and it'll draw ovals at that location.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=312)** This clicking mechanism works just fine when we're in the top left area of this canvas, but if we scroll to another part of this canvas, you'll see that if I click locations, the dots are drawn not where I'm clicking.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=327)** What's happening here is that the bind method doesn't know that the canvas has been scrolled, so it's reporting the X and Y locations of the mouse clicks as if the canvas is is its original position.
>
> **[5:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=338)** We can account for this change by using the special canvasx and canvasy methods to translate the positions to the correct location on the canvas.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=346)** So if I call canvas.canvasx, and then do the same down here using canvas.canvasy, those two methods will translate those X and Y coordinates to where they actually appear on the canvas.
>
> **[6:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=361)** So if I save this code and run it again, I can now click up here in the top left section, it works just as we saw before, and if I scroll to another portion of the canvas, my clicks will be placed in the right position as well.
>
> **[6:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/attaching-a-scroll-bar-to-widgets?u=76281980&t=376)** I wanted to show you this because it's a special issue which can come up when using the scroll bar.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (6)
> **Definitions:** is a  (4)
> **Code Keywords:** module (1), pass (1)
> **Code Identifiers:** create_oval (1)
> **Env Vars:** gui (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Configuring widget styles
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=0)** - [Narrator] In this course we've learned how to create and configure a wide variety of tk widgets and up to this point we've only configured the appearance of one widget at a time by modifying it's properties.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=11)** For one or two widgets, that's fine, but as our user interfaces continue to grow in scale it can become cumbersome to individually configure the look of every widget.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=20)** Fortunately the themed tk module has a mechanism to help us with what is called styles.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=26)** A style describes how a widget will appear depending on it's state.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=31)** Tk widgets can be one or more of the ten possible states at any given time depending on how the widget has been configured and how the user is currently interacting with it.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=41)** For detailed definition of what each of these states represents refer to the tk documentation on widgets.
>
> **[0:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=47)** With the tk style you can describe how a widget might glow when the user hovers their mouse over it, or how to make it look subdued and grayed out if it's been disabled.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=56)** Since every widget type has it's own style, tk also has themes, which are collections of widget styles, which share a similar type of appearance.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=65)** In this video I'll teach you how to change the overall theme of your application, as well as, how to create and use your own custom widget styles.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=73)** I've gone ahead and imported both the regular tkinter package, as well as, the themed ttk module, created my top level window and also created two themed buttons, named button one and button two and given them the text button one and button two, so we can differentiate them.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=90)** Now, to create a style, we first need to create a style object, and I'm going to do that using the ttk style constructor method, and I'm going to store that style object into a variable called style.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=102)** To view the styles that are available on your system, we can use the style theme names method and this will return a list of all the available themes on the system.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=113)** You can see our system has a theme called winnative, one called clam, alt, default, classic, vista and xpnative.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=120)** To see which theme the system is currently using we use the theme use method and call it without any parameters.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=128)** This returns the name vista, so I know that my system is currently using the vista theme.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=134)** To change the theme that it's using I can use that same theme use method but this time I'll pass in a string for the name of the theme I want to use.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=143)** So, let's change it to use the classic theme and watch what happens to the buttons over here when I execute that.
>
> **[2:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=149)** You see these buttons now changed from our vista themed, the standard common windows theme, to the old fashioned classic themed buttons.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=157)** These classical themes buttons have a very boxy look to them, so let's return back to that vista theme.
>
> **[2:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=164)** When you select a theme you're modifying the default styles for each of the widgets to have a similar appearance.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=170)** Each of these widget styles have a specific name that we can use to refer to them.
>
> **[2:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=175)** The names for widget styles typically follow the convention of placing a capital T in front of the widgets name.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=181)** For example, TButton is the default style for the button and Tframe is the default style for frames.
>
> **[3:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=189)** There are a few exceptions to this standard.
>
> **[3:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=191)** The style for the Treeview only has one T in it so, it's just Treeview, not T-treeview.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=198)** Unlike the widgets constructor method the style for the Panedwindow only uses a lowercase w.
>
> **[3:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=205)** And finally, widgets that have a horizontal and vertical orientation option have a separate style defined for each.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=212)** Those styles are named horizontal.widget name or vertical.widget name depending on the orientation.
>
> **[3:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=219)** To find out the name of the default style that a widget uses, call the w info class method on an object.
>
> **[3:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=226)** So, I'll call on my button one object w info underscore class, with no parameters, and this tells me that as expected it uses the TButton style as it's default style.
>
> **[3:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=238)** Now, if we want to configure the TButton style to change the look of all the buttons in our program, we can do so by using that style object we created it earlier and calling the configure method.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=248)** With the configure method I pass in the first parameter, which is the name of the style I want to configure so I'll pass a string with Tbutton and then I can change one or more properties about that style.
>
> **[4:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=259)** So, I'm going to change the foreground property, which changes text color, to be blue and when I execute this it should change the text on both of my buttons to be blue because they're both using the Tbutton style.
>
> **[4:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=271)** Sure enough, there it does.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=273)** In addition to just modifying the default styles I can also create custom styles which are derived from other existing styles.
>
> **[4:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=280)** Let's create a custom button style for an alarm button that'll be bold so the user can easily find it on the interface.
>
> **[4:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=286)** To do that, I'll use the style.configure command and instead of giving it a existing style name I can define a new style name and I do it in the form of my new name dot the existing style name which it's going to be derived from.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=301)** And then I can specify some additional properties to configure so I'll change it's foreground to be orange and I'll change the font here to be Arial large, so size 24, and we'll make it bold.
>
> **[5:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=317)** By creating this alarm dot Tbutton style it's created a new style of that name, configured the foreground and the font to be orange and size 24 Arial, but all the other existing properties from the Tbutton will be inherited into my new alarm dot Tbutton style.
>
> **[5:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=332)** To use this custom style I just configure the style property of the widget object.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=337)** So, for button two I'll call the config method and I'll set the style property to the string alarm dot Tbutton and now you can see my button number two is using that style.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=351)** It's inherited all the other regular Tbutton configurations except for it has a new foreground and a new font.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=358)** We can configure different style settings depending on the state of the object by using the map method.
>
> **[6:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=363)** So, if I want to modify my alarm button to look pink when it's being pressed and gray when it's disabled I can do so by mapping those to the alarm style.
>
> **[6:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=373)** So, I'll call style dot map, I specify the style I'm going to be mapping to, which is the alarm dot Tbutton style and then I'll be changing the foreground on this style.
>
> **[6:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=384)** Now, for the map function each of the properties that I'm going to be configuring I'll pass a list of list and each of those lists inside the list of list will contain a pair of the state and value for that property.
>
> **[6:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=397)** Sounds a little crazy so let me go ahead and just demonstrate that.
>
> **[6:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=400)** I'll create one pair of lists here.
>
> **[6:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=402)** When the button is in the state of being pressed I'll change the foreground to be pink.
>
> **[6:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=407)** And then, I'll create another list here with a pair that when the button is in the state of being disabled I want the foreground to be gray.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=415)** So I can pass in as many of these different state and property value pairs as I want to and the foreground will be changed according to the state that the button's in.
>
> **[7:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=423)** Make sure I have my parentheses lined up.
>
> **[7:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=426)** I'm going to execute that.
>
> **[7:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=427)** You see if I click on this button it turns pink, so when it's in the pressed state it'll be pink and then I can disable the button by using the state command and you notice that now the text is gray.
>
> **[7:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=442)** So far, I've only demonstrated some simple style changes to the font and color of the button's text but there's a lot more that you can do to modify the widget by configuring the individual elements.
>
> **[7:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=453)** As a heads up this is where styles can get very detailed and complicated.
>
> **[7:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=457)** Each tk style is composed of one or more elements.
>
> **[7:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=460)** To see what those elements are that compose a specific style you can use the layout method.
>
> **[7:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=465)** If I call style dot layout and pass it the name of a style, so I'll use the Tbutton we've been working with.
>
> **[7:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=472)** It'll give me back a list of all of the elements within that style.
>
> **[7:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=477)** Now the output from this layout method can be a little tricky to interpret at first.
>
> **[8:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=481)** What it's telling us is that there are four elements that compose a button and they exist in a hierarchy.
>
> **[8:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=487)** The top level button element will represent the border around the widget.
>
> **[8:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=492)** The focus element is the part that changes color when the widget has input focus.
>
> **[8:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=497)** There's a padding element which is used to space things out and then finally the label element, which contains the button, text and or image.
>
> **[8:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=505)** Each of these elements has the sticky attribute set to north, south, east, west, which means that the element will expand in all four directions to fill the space around it.
>
> **[8:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=515)** To see what configuration options are available for each of these four elements.
>
> **[8:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=518)** We can use the element options method on the style object.
>
> **[8:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=522)** Element underscore options and then we pass in the name of the element we want to look at so for example let's look at the button dot label item and this returns a list of all the options that are available for that element.
>
> **[9:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=540)** With the element options method we can learn about the options that are available for elements of any widget so we can fully customize their appearance with custom styles.
>
> **[9:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=548)** Now, keep in mind, that in this video we only looked at the elements that make up a button.
>
> **[9:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=553)** Other widget types will be comprised of different elements with different associated element options.
>
> **[9:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=558)** You can use the layout and element options methods to learn what those are.
>
> **[9:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=562)** Finally, if you need to see what values have been configured to one of those options for a specific style you can do so using the lookup method.
>
> **[9:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-widget-styles?u=76281980&t=571)** If I call style dot lookup and pass it in the name of a style, I'll do Tbutton, and then also pass it in the name of a property, let's look at the foreground property, it'll return the current value of that property, which is blue, and that make sense because that's what we configured earlier.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), let (6), module (2), finally, (2), continue (1)
> **Prerequisites:** configure (10)
> **CLI Commands:** make (5), find (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (2)
> **Warnings:** heads up (1), keep in mind (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### Prompting users with the Messagebox and dialogs
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=0)** - [Instructor] If an error occurs in your program, or the user tries to perform an action, that they're not supposed to.
>
> **[0:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=5)** You might want to alert them with a pop-up message about the problem.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=8)** We've already seen how we can create a new window with the top-level widget to pop up and display information to the user.
>
> **[0:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=15)** In this video, we'll look at another way to accomplish that by using the pre-built message box methods to easily create pop-up alerts for the user.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=23)** We'll also learn how to use the file dialog, and color chooser methods to present the user with familiar selection menus from their operating system.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=31)** These dialogs and message boxes are not regular Tk widgets.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=35)** We don't need to create a root widget to assign as their parent, or even import the whole Tkinter package.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=41)** To use the message box, we only need to import the message box module from the Tkinter package.
>
> **[0:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=46)** To do that, we can type from tkinter import message box.
>
> **[0:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=52)** Now, that I've imported the message box module, I can create a message box by typing message box dot and then the name of one of the message box methods.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=62)** The simple one to display some information is called show info.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=67)** I'll pass in two parameters, one for the title.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=70)** I'll make the title here a friendly message, and then I also need to pass in the message to be contained within that window.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=79)** So, I'll set the message equal to a familiar message, hello, Tkinter.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=86)** Now, when I execute this, you'll see it creates a pop up window.
>
> **[1:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=90)** Even though the message box is not a new Tk widget, the Tk module still creates a new Tk root window in the background.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=97)** Message boxes are also modal.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=99)** If I bring back up IDLE, you'll see that it's waiting on execution.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=104)** Modal means that the execution of your program will be paused until the user has responded to the message box.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=110)** It can respond to the message box by clicking okay.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=113)** There are three variations of the message box, which can be used to deliver information to the user, the show info, show warning, and show error message boxes, each generate a pop-up window with a specified title in text, and only give the user the option to acknowledge the message with an okay button.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=131)** They each play a different sound, and display a different icon to alert the user of the severity of the message.
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=138)** We can also create message boxes which gather a simple yes-or-no-type response from the user.
>
> **[2:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=143)** An example of this, is the ask yes no message box.
>
> **[2:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=148)** I'll pass in a title, we'll ask a question, is the user hungry?
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=153)** And then I'll also pass in the message.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=156)** I'll ask them, do you want SPAM?
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=162)** Now, when I execute this window, you see it gives me a message box with two options, the ability to click a yes or no button.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=171)** If the user gives the positive response, then the dialogue box will return a true value to the program.
>
> **[2:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=176)** But if the user gives a negative response, it'll return false.
>
> **[3:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=180)** Of course, I want spam, so let me click yes, and you'll see it returns true back in IDLE.
>
> **[3:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=186)** The remaining five message box types present the user with a choice, and will return a true or false value depending on whether or not the user selects the positive or negative-type response.
>
> **[3:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=197)** For example, the ask yes no cancel message box would return true if the user selects the yes button, and it would return false if the user selected either the no or cancel buttons.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=210)** We can also prompt the user to browse for a file or dialog path by using the file dialog methods.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=216)** To use those, we need to import the file dialog module from the Tkinter package, type from Tkinter, import file dialog, and then to create a file dialog, you call file dialog dot, and we'll do ask open file.
>
> **[3:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=233)** Now, this ask open file method is going to return an IO object containing the file name in the name field.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=240)** We'll save that object to a variable called file name, and now, when I run that, you'll see it creates the standard pop up open file dialog.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=249)** I'm just going to select this license file here, hit open, and now it's stored the path to that in the file name variable, and we can access that by typing file name dot name.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=261)** You'll see there is the string with the path to that license file I selected.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=265)** There are several variations of the file dialog available to use for selecting a directory, and choosing where and how to save a file.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=273)** There are also several file dialogs available to choose one or more files to open.
>
> **[4:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=278)** Now, keep in mind, these file dialogs do not actually open or save anything.
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=283)** They simply return information to your program about the file or directory that the user selected, and then your program will need to perform the action of opening or saving the file.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=293)** The last dialog window I want to show you is the color chooser.
>
> **[4:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=296)** We can import the color chooser by typing from Tkinter import color chooser.
>
> **[5:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=304)** After importing the color chooser module, I can create a color chooser by typing color chooser dot ask color.
>
> **[5:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=312)** Now, there's several properties I can set for the color chooser.
>
> **[5:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=315)** I'm going to set one called initial color, and this will be the color that the color chooser is initially set to show.
>
> **[5:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=322)** And I'm going to define a hex value as a string here, for FFFFFF, that's the color white.
>
> **[5:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=329)** And now, when I execute that command, you'll see the color chooser is created.
>
> **[5:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=332)** By default, it's showing the white color, and then I can go in and select any other color I want to.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=337)** I'm going to select this nice shade of blue.
>
> **[5:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=339)** When I hit okay, the color chooser returns a list with two items.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=343)** The first item on that list is a list containing the RGB, or red, green, and blue values of the color that was selected.
>
> **[5:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=350)** And the other item on the list is a string, containing the hex representation of the color that was selected.
>
> **[5:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=356)** It's important to note that if the user cancels the color chooser dialog without selecting a color, it'll still return a two-element list, but both of those elements will be empty.
>
> **[6:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/prompting-users-with-the-messagebox-and-dialogs?u=76281980&t=366)** So, it's important that you check for that case, to avoid running into errors later in your program.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), pass (4), this, (2), let (1), default, (1)
> **Env Vars:** idle (2), spam (1), ffffff (1), rgb (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Warnings:** warning (1), keep in mind (1), note that (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Geometry Management

> [↑ Back to Table of Contents](#table-of-contents)

#### Using the Pack geometry manager
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=0)** - [Instructor] There are three types of geometry managers in Tk, pack, grid, and place.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=6)** Of the three Tk geometry managers, the pack manager is the simplest to use.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=11)** When you use the pack manager to display widgets and their parent frame or window the pack manager algorithm will place those child widgets against an inner edge of the parent or against other widgets that are already packed against that edge.
>
> **[0:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=24)** After all of the child widgets are packed into place, the geometry manager calculates the size of the bounding box necessary to hold them and stretches the parent widget to fit around its children.
>
> **[0:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=36)** The benefit of using the pack geometry manager is that it is simple to use and only has a few options and it's well-suited for a few specific scenarios.
>
> **[0:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=46)** If you want to have a widget be expanded to fill its entire parent or frame, if you want to stack multiple widgets vertically on top of each other, or if you want to place multiple widgets side-by-side, basically stacking them horizontally.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=58)** Beyond these specific scenarios, however, the pack geometry manager's limited features make it unsuitable for more complex layouts.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=67)** Unlike in the previous videos on widgets, where I used IDLE as an interactive shell, in these videos on geometry managers, I'm going to use IDLE as a code editor so I can easily make changes to the code to demonstrate different effects.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=80)** I'm going to navigate to the Exercise Files and in the Chapter 06 folder, I'm going to make a copy of the template python file.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=89)** I'll rename that copy to 01_pack because we're in the first video of the geometry manager section.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=97)** And then I'll right-click on that file and choose to edit it with IDLE.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=102)** You'll see that this file is a basic template which imports the standard Tkinter package as well as the ttk module.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=110)** It creates my root top-level window and down at the bottom, it calls the root.mainloop method to enter the event loop.
>
> **[1:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=117)** This is where you enter your code into the template file.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=120)** I'm going to start by creating a basic label using the ttk.Label construction method.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=126)** It'll be a child of my root window..
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=128)** I'm going to use our familiar text of Hello, Tkinter, and I'm going to set the background of my label to be yellow.
>
> **[2:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=139)** Now as we've seen before, once I create a widget, I have to use one of the geometry managers to actually display it on the window.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=147)** And so for this one, I'm going to use the pack manager, and let me move that down onto another line for space.
>
> **[2:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=155)** Now, when I execute this, I'll do Save and then Run.
>
> **[2:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=160)** You see that by default without passing any parameters to the pack manager, it'll pack the label against the center and top of its parent window.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=169)** So if I resize this window, you see the widget stays at the top and stays centered.
>
> **[2:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=174)** Excess space is exposed around the widget and Tk adds padding around it as the window resizes.
>
> **[3:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=180)** We can tell the pack manager to make this widget fill its parent space entirely by configuring the fill property.
>
> **[3:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=189)** In the pack method, I'll add the property fill.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=193)** And the options for the fill property are X, Y, and BOTH, and that represents in which direction to fill out that widget.
>
> **[3:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=200)** So if I say fill = X, and X is typed in capital letters.
>
> **[3:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=206)** I'll Save and Run that.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=210)** And you can see that now, my label is stretched out in the X direction to fill the entire space available in its parent widget.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=218)** If I did Y, it would fill it in the vertical direction as well.
>
> **[3:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=222)** Or I can choose the BOTH option, and doing that will cause the label to fill the entire space.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=230)** When the label widget is filling the space assigned to it in both directions, however, the pack manager here is not expanding the space for it to fill the window vertically.
>
> **[3:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=238)** We have to explicitly tell the pack manager to expand as well as fill, and we can do that by configuring the expand property.
>
> **[4:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=247)** We set True or False on the expand property, so now the pack manager knows to expand to fill its entire space.
>
> **[4:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=253)** Then when I Save and Run this, you'll see that now the label stretches in both the X and Y direction to fill the entire space available in that parent window.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=265)** If we use the fill and expand property with multiple widgets, Tk will do its best to expand them equally to fill the space.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=272)** Let me demonstrate that by creating a few more labels.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=277)** I'm going to copy this code.
>
> **[4:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=280)** We'll just create some duplicates.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=281)** And I'll change the color of these labels so we can tell them apart.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=285)** I'll make this one blue, and I'll make this one green.
>
> **[4:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=291)** I'm also going to take off the expand property from the blue label to demonstrate what that does.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=298)** When we add multiple widgets using the pack manager, they'll be packed in the order in which the pack manager method is called.
>
> **[5:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=304)** This is both a blessing and a curse.
>
> **[5:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=306)** It's simple, but it makes code maintenance later to add new widgets a little bit tricky.
>
> **[5:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=311)** If I Save and Run this, you'll see that it adds them in the order in which they were called.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=318)** So we packed them in the yellow one first, the blue one second, and the green one third, they were packed against the top of the widget.
>
> **[5:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=325)** You notice that if I expand it, since I did not set the expand property on the blue widget, it stays the same size in the Y direction, but the other two widgets expand equally to fill up the space.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=337)** Those are the basics of using the pack geometry manager to have a widget or widgets fill the entire parent frame or window.
>
> **[5:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=344)** As I mentioned earlier, the pack manager is also well-suited for when you want to have multiple widgets stacked vertically on top of each other or horizontally next to each other.
>
> **[5:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=355)** So far, we've seen the default behavior which is for the widgets to be packed against the top of the parent frame and the order in which the pack method is called upon them.
>
> **[6:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=364)** To change which side the widgets are packed against, we can modify the side property.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=370)** I'm going to remove the fill and expand calls, and replace that with a call to side = LEFT.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=378)** Options for the side property are TOP, BOTTOM, LEFT, or RIGHT, and those are all typed in capital letters.
>
> **[6:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=387)** This code here will cause all of the widgets to be packed against the left side.
>
> **[6:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=392)** And you'll notice they're packed in the order in which the pack command is called.
>
> **[6:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=396)** Typically, you pack all the widgets against the same side when you're using the pack manager.
>
> **[6:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=401)** It's possible to use different sides, but if you're doing that, you should probably be using another geometry manager like grid.
>
> **[6:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=408)** By default, widgets are placed in the center of their packing box, and we can change where within the area they're assigned they place themselves by modifying the anchor property.
>
> **[6:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=418)** I'm going to modify the anchor property on the yellow label.
>
> **[7:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=424)** And options for the anchor property are cardinal and inter-cardinal directions passed as a string.
>
> **[7:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=430)** So if I pass in northwest, this will cause the label to stick to top left corner of the box.
>
> **[7:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=437)** I'll Save it and Run that example.
>
> **[7:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=441)** And you can that right now, they all appear the same because they were all packed against the left side.
>
> **[7:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=445)** But if I resize this box, you can see that the yellow label is anchored to the top-left corner.
>
> **[7:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=451)** If we want to add padding around the widgets, we can do so with the padx and pady properties.
>
> **[7:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=459)** These pad properties add external padding around the outside of the widget.
>
> **[7:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=467)** In this example, it'll add 10 pixels of padding to each side in the X direction, and it'll add 10 pixels of padding to each side in the Y direction around our blue widget.
>
> **[8:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=482)** Here you can see 10 pixels.
>
> **[8:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=484)** It's hard to see right there, but there are 10 pixels of padding on each side in the X direction.
>
> **[8:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=489)** And if I close this window up, you'll also see that there's 10 pixels of padding in the Y direction.
>
> **[8:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=495)** If we want to add internal padding into the widget itself, we can also do that by using the ipadx and ipady properties.
>
> **[8:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=503)** I'll set those for the green widget here.
>
> **[8:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=505)** Ipadx = 10 and ipady = 10.
>
> **[8:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=511)** So now instead of adding padding around the outside of the widget, it'll be added internally to the widget itself.
>
> **[8:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=518)** I'll Save and Run that.
>
> **[8:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=522)** And now you can see the label up here's larger because it has 10 additional pixels on each side in the X direction and 10 additional pixels on each side in the Y direction.
>
> **[8:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=531)** Since this program has multiple widgets inside of the master window, which are being managed by the pack manager, it may be useful to get a list of all of them.
>
> **[9:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=540)** Unfortunately, the pack slaves method is available to do just that.
>
> **[9:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=545)** It'll return a list of all widgets contained within a parent widget that are using the pack manager.
>
> **[9:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=551)** This could be useful if we want to configure some property for all the widgets for a single parent.
>
> **[9:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=557)** Say, for example, I wanted to configure all of my widgets to use the fill and expand property to completely fill the space around them.
>
> **[9:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=565)** I could create a for loop over the widgets that are found in my root window, and I would call the pack_slaves method, which will return a list of all of the labels being managed by the pack manager.
>
> **[9:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=581)** For each of those widgets in pack slaves, I could call the pack_configure method and configure the properties for fill to be BOTH and expand to be True.
>
> **[9:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=596)** Here we have the pack_slaves method, which is called on the parent widget, returning a list of all the child widgets managed by the pack manager, and then on each of those widgets recalling the pack_configure method to set the packing properties of the widget.
>
> **[10:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=609)** And this for loop will cycle through all the widgets in that master window.
>
> **[10:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=613)** So I execute it.
>
> **[10:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=616)** Now you'll see that now each of them is operating with the expand and fill modes set.
>
> **[10:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=621)** If we want to find out what the current value of the packing properties are for a specific widget, we can call the pack_info method on that widget.
>
> **[10:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=630)** So inside of my for loop on each of those widgets that I get from the pack_slaves method, I'll call the pack_info method.
>
> **[10:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=639)** (electronic dinging) And I'll print that to the console.
>
> **[10:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=645)** And now if I execute this, you'll see it prints out for each of those a dictionary containing the property values that exist for that widget.
>
> **[10:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=654)** These are the properties that are related to the pack manager, not the widgets properties, such as background color, foreground color, font, and so on.
>
> **[11:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=663)** I've shown you these three methods for the pack manager, the slaves, configure, and info methods, but it's important to keep in mind that the grid and place geometry managers also have similar slaves, configure, and info methods which are named appropriately beginning with grid or place.
>
> **[11:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=681)** One last thing I want to point out for you to keep in mind when writing Tkinter programs, is when and where you use the pack method.
>
> **[11:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=689)** In fact, this concept will apply the same for all three geometry managers.
>
> **[11:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=694)** In this example, I added the pack method directly to the end of the label creation code.
>
> **[11:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=700)** Since the labels typically do not change after they've been created, this is probably fine.
>
> **[11:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=705)** However, if I need to configure or change something about that label later in my program, then I'll need to have a variable storing the name to refer to it later.
>
> **[11:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=714)** Let's see what happens if I store the output of the constructor method with a pack method attached to it.
>
> **[12:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=720)** I'll save this a variable called label, and then down here I'll print out the contents of label.
>
> **[12:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=730)** File.
>
> **[12:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=732)** Run.
>
> **[12:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=734)** Here you can see that the output of the pack method being called on the label constructor is none.
>
> **[12:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=740)** So we're not actually saving a reference to that label.
>
> **[12:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=743)** If we needed to save a reference to this label to use later, we need to save that reference first and then call the pack method on it later.
>
> **[12:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=751)** So we take the output of just the constructor method, store that in the label, and then we can call pack method on that reference later.
>
> **[12:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=758)** If I execute this, you'll see now we have the name of that label stored in the label variable.
>
> **[12:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=767)** We can now use that label variable to do things to the label later in the program.
>
> **[12:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=771)** Say, for example, we decide that we no longer want to display the yellow label, we can remove it from the GUI with the pack forget method.
>
> **[13:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=780)** I'll call after everything has been said and done, label.pack_forget, so I'm calling the pack_forget method on the label itself.
>
> **[13:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=791)** And if I Save and execute that, you'll see that by the time the GUI is actually displayed that yellow label has been forgotten.
>
> **[13:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=800)** Now, the widget is not destroyed by calling the forget method, and I can add it back later to the GUI if I want to.
>
> **[13:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-pack-geometry-manager?u=76281980&t=806)** It's important to note that the grid and place geometry managers also have similar forget methods which are appropriately named grid_forget and place_forget.

> [!info]- Semantic Content
>
> **Env Vars:** idle (3), both (3), gui (3), left (2), top (1)
> **Code Keywords:** this, (5), let (3), module (1), default, (1), pass (1)
> **Code Identifiers:** pack_slaves (3), pack_configure (2), pack_info (2), pack_forget (2), grid_forget (1)
> **CLI Commands:** make (6), python (1), find (1)
> **Prerequisites:** configure (6)
> **Definitions:** is called (4), is a  (1)
> **Exercise Files:** template (3), exercise files (1)
> **Analogies:** for example (2), such as (1)

#### Using the Grid geometry manager
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=0)** - [Instructor] The Pack geometry manager proved to be useful for simple arrangements where widgets are stacked on each other vertically or horizontally.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=8)** If we want to create something more complicated than that, then the Pack manager becomes very tedious to work with.
>
> **[0:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=14)** For organizing widgets in two dimensions, the Grid geometry manager is a better choice.
>
> **[0:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=19)** It divides the area of the parent widget into an imaginary grid and puts widgets into grid cells indexed by their row and column numbers.
>
> **[0:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=27)** The Grid geometry manager makes it easy to organize widgets relative to each other in both the horizontal and vertical direction.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=35)** This style of organization is common to modern GUIs, so the Grid manager is my typical go-to geometry manager.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=42)** Really, the only downside of using the Grid manager is that it's slightly more involved than using the Pack manager and it requires you to plan out the organization of your GUI before you begin coding.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=53)** I'll begin by going to my exercise files in the chapter six folder and making a copy of that template file.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=62)** I'll rename my copy to be 02_grid and then I'll right-click on it to edit it with IDLE.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=70)** This is the same template file we used in the previous video with the Pack geometry manager.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=75)** It imports the top level tkinter package and ttk module, creates my root window, and calls the root.mainloop method down below.
>
> **[1:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=83)** I'm going to start my code by creating a series of labels.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=87)** These labels will be children of the root window.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=91)** The text for this one will be Yellow and the background for this one will be yellow.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=97)** I should specify when I said the text will be yellow, I meant the text will say Yellow.
>
> **[1:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=101)** It will not actually be colored yellow.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=104)** And I'm going to copy this label, make four more copies.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=107)** I'll make one here a label that says Blue and it's appropriately colored blue.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=113)** We'll make a label that says Green and if you can imagine, the color will be green as well.
>
> **[1:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=119)** Fix my B there.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=120)** And the last one, let's make it orange and we'll name that label, the Orange label.
>
> **[2:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=127)** Now, I've created my four labels here.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=129)** And before I start using the Grid manager to display them, let's plan out where we want to put them.
>
> **[2:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=135)** We'll start by drawing a picture of how we want the labels to be organized and look when they're laid out on the GUI.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=141)** Then we take that picture and draw a grid over it, which places every widget in its own grid cell.
>
> **[2:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=147)** The rows and columns of the grid are indexed beginning with zero in the top left corner.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=152)** Column indices increase moving horizontally from left to right.
>
> **[2:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=155)** And the row indices increase moving vertically from the top to bottom.
>
> **[2:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=160)** With the grid overlaid, we can see that the green label belongs in row zero, column zero.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=166)** The orange label belongs in row zero, column one.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=169)** The blue label belongs in row one, column zero.
>
> **[2:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=173)** And the yellow label belongs in row one, column one.
>
> **[2:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=177)** To put the widgets in their appropriate cells, we'll configure the row and column properties of the grid method.
>
> **[3:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=185)** So for the yellow label, I'll set the row to be one and the column to be one which matches the plan we just saw.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=193)** For the blue label, we decided that the row needed to be one and the column needed to be zero.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=201)** For the green label, the row was going to be zero and the column was going to be zero.
>
> **[3:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=208)** And then finally, for the orange label, the row was zero and the column was one.
>
> **[3:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=217)** This demonstrates one of the benefits of using the Grid manager over the Pack manager.
>
> **[3:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=222)** The order in which the widgets are added to the grid does not matter because we manually specify the row and column to place each one.
>
> **[3:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=230)** If I save and run this example, you'll see that it places all four of the labels into a simple square formation and that the geometry manager squeezes all of the elements into as small of an area as possible.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=243)** If we want to, we can leave gaps as empty rows and columns, which is useful for leaving room to add things later to our Grid manager.
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=251)** If we have empty columns in the grid, the Grid manager will hide those until we put something in their place.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=256)** We can create more complicated arrangements with the Grid manager by telling certain widgets to span across multiple rows or columns.
>
> **[4:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=264)** Look at this slightly more complicated arrangement of the four labels.
>
> **[4:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=268)** Instead of putting them in a simple square formation, the blue is centered below the green and orange labels, and the yellow label is centered vertically off to the right side.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=277)** When we draw out the grid, remember that every widget must be separated from the other widgets.
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=283)** In this arrangement, the vertical line that separates the green and orange labels passes right down the middle of the blue label.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=290)** This means that the blue label spans across two columns, so we'll need to configure the columnspan property to be two.
>
> **[4:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=299)** The origin of the blue label will be the leftmost cell, so it'll be in row one, column zero with a columnspan of two.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=308)** The yellow label spans across two rows, so as you might've guessed, we'll configure the rowspan property to be two.
>
> **[5:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=316)** The yellow label's origin will be the topmost cell it's in, so it'll be in row zero, column two with a rowspan of two.
>
> **[5:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=326)** Let's update the parameters of our grid methods to reflect this new arrangement.
>
> **[5:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=330)** I'm changing my yellow label to be in row zero, column two.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=337)** We said that it'll have a rowspan equal to two.
>
> **[5:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=342)** I'm going to break this up to put it on two lines.
>
> **[5:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=346)** And then for the blue label, it'll still be in row one, column zero.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=351)** Split the line first.
>
> **[5:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=353)** But we'll give it a columnspan equal to two.
>
> **[5:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=359)** If I save and execute this, you see that this layout matches the image we had just planned out.
>
> **[6:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=368)** By default, widgets are placed in the center of the grid space allocated for them.
>
> **[6:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=373)** That's why the blue label is centered below the green and orange labels.
>
> **[6:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=377)** The yellow label is also centered vertically in the two cell areas given to it.
>
> **[6:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=383)** We can control which side of the cell the widget will be anchored to by configuring the sticky property.
>
> **[6:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=389)** The value for the sticky property is a string containing one or more cardinal directions represented as lowercase n, s, e, and w.
>
> **[6:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=399)** These refer to the top, bottom, right, and left sides of the cell respectively.
>
> **[6:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=404)** For example, let's configure the blue label to stick to the right portion of the grid area.
>
> **[6:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=411)** I'll configure sticky equals e for east on the blue label.
>
> **[6:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=418)** Save and run that.
>
> **[7:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=421)** We see now the blue label is stuck to the right side of its grid cell area.
>
> **[7:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=425)** If we want the widget to expand to fill its entire grid cell we can tell it to stick to every side.
>
> **[7:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=431)** I'm going to copy the sticky command for all four.
>
> **[7:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=435)** And we'll set all four to be nsew for north, south, east, and west.
>
> **[7:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=440)** Let me resize this window, so we can see everything going on here.
>
> **[7:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=449)** Now, if I save and run that, you see that the labels are stretched to fill their cells.
>
> **[7:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=455)** Now, note, this is not make the cells themselves resize.
>
> **[7:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=458)** So if I stretch out the window, the cells still stay as small as possible, but the labels will be expanded to fill those cells and stick to each side.
>
> **[7:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=467)** To make the cells themselves resize when the window is resized, we need to configure the weight property for each column and row.
>
> **[7:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=475)** The weight property tells the row or column how much it should grow relative to the other rows or columns to fill the space created when the parent widget is resized.
>
> **[8:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=484)** By default, all rows and columns have a weight of zero, meaning that they will not resize to fill the parent.
>
> **[8:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=491)** We can configure weights by calling the rowconfigure and columnfigure on the parent widget.
>
> **[8:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=497)** Now, since the root widget is our parent widget here, on root, we'll call root.rowconfigure and we'll configure row number zero, which is the first parameter, the index of the row.
>
> **[8:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=510)** And we set the weight property to be one.
>
> **[8:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=514)** Then we'll also configure, using the rowconfigure method, row number one by setting the first parameter to one.
>
> **[8:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=522)** And we'll set the weight for row one to be three.
>
> **[8:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=526)** So this will configure row one to expand at a rate of three pixels for every one pixel that row zero expands to fill the parent widget.
>
> **[8:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=534)** And so I'll save and run.
>
> **[8:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=539)** You see if I stretch this out, row one expands at three times the rate as row zero.
>
> **[9:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=547)** We can do the same thing for the columns by calling the columnconfigure method on the root window.
>
> **[9:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=553)** So root.columnconfigure.
>
> **[9:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=556)** Again, the first parameter is the index of the column, so I'm going to configure column two and I'll give it a weight of one.
>
> **[9:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=563)** And since this is the only column that I've configured to expand, it'll be the one to expand and fill out the parent window.
>
> **[9:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=571)** The other columns still have a default weight of zero, so they do not expand at all.
>
> **[9:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=576)** In the previous video on the Pack manager, I covered adding padding around the widget.
>
> **[9:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=581)** You can do exactly the same thing with the Grid geometry manager by using the padx and pady commands.
>
> **[9:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=588)** I'm going to add padding to the green label by using padx equals 10 and pady equals 10.
>
> **[9:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=596)** So this will add, external to the label, 10 pixels of padding on each side in the x direction and 10 pixels of padding in the y direction.
>
> **[10:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=606)** Save and run.
>
> **[10:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=608)** And now, you can see those 10 pixels of padding that surround the green label.
>
> **[10:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=612)** I can also add padding internal to the label itself by using the ipad property.
>
> **[10:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=619)** So I call ipadx and I'm going to add 25 pixels of padding around the orange label.
>
> **[10:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=626)** And I'll call ipady, add 25 pixels in the y direction.
>
> **[10:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=631)** File, save.
>
> **[10:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=634)** Run.
>
> **[10:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=635)** And now, you can see there's a large amount of padding internal to the orange label itself.
>
> **[10:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=640)** Finally, I want to point out that some of the other methods we learned about in the previous Pack geometry manager video are also available to the Grid manager.
>
> **[10:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-grid-geometry-manager?u=76281980&t=649)** Those include the grid_slaves method, the _configure, _info, and _forget methods.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (11), before you begin (1)
> **Code Keywords:** let (5), finally, (2), default, (2), module (1), this, (1)
> **CLI Commands:** make (6)
> **Analogies:** picture (2), imagine (1), for example (1)
> **Env Vars:** gui (2), idle (1)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** previous video (2)

#### Using the Place geometry manager
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=0)** - [Instructor] Both the pack and grid geometry managers allow you to insert widgets based on the relative location to other widgets, and configure options for how those widgets will respond when their parent window or frame is resized.
>
> **[0:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=13)** Those two geometry managers will easily accomplish most of your common use cases.
>
> **[0:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=18)** But when your application requires exact control or where a widget is placed, then you should turn to the place manager.
>
> **[0:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=25)** With the place geometry manager, you can specify the location and size of a widget in absolute and or relative terms, as they relate to the parent window.
>
> **[0:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=36)** A key difference here is that the pack and grid geometry managers are locating widgets relative to the locations of other child widgets within the parent, where as the place manager locates widgets relative to the parent itself.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=51)** The benefit of using the place geometry manager, is that it provides very exact control of where you want to put widgets within an area.
>
> **[0:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=58)** You can create very detailed layouts and stack widgets on top of each other in ways that would not be possible with the other geometry managers.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=67)** The downside to using the place manager, is that it can become difficult to ensure that multiple widgets maintain the proper size and location relative to each other, if the parent window or frame is resized.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=79)** For these reasons, my personal recommendation is to use the place manager when you need to craft a very specialized piece of the GUI, and to do that inside of a frame, which you prevent from changing in size if the rest of the GUI is resized.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=94)** For this demonstration, I'm going to navigate to the exercise file's folder, in the chapter six folder, and then I'mma create a copy of the template file.
>
> **[1:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=103)** I'll rename this copy to 0 3 underscore place, and then I'll right click on it to edit with IDLE.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=113)** This is the same template file we saw in the previous two videos on geometry managers.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=118)** Now one thing we'll do differently in this video, is I'm going to configure the main menu to be 640 by 480 pixels.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=125)** And I'll do that by using the geometry method, which we learned about in the previous video on top level windows.
>
> **[2:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=132)** To configure it to be 640 by 480 pixels, I pass in a string of 640 by 480, and then I provide the x, y-coordinates at which to place the window on the screen.
>
> **[2:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=144)** I'm doing this because to demonstrate the place manager, I want to start with a fixed size window.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=150)** Next, I'm going to create four labels to use in placing around the window.
>
> **[2:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=154)** They'll be children of the root, their text will be a color, and their background will be colored as well.
>
> **[2:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=163)** I'll copy this example here, create four copies of it, and change the colors to be different for each one.
>
> **[2:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=169)** So this label will be blue, this label will be green, and the last label will be orange.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=184)** Now that I've created my labels, I can use the place manager to place a label at an exact location within that master window, by providing x and y-coordinates.
>
> **[3:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=195)** I'll pace my yellow label at the x position of 100 and the y position of 50.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=204)** If I save and run this, these coordinates are in pixels relative to the top left corner of the parent window.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=214)** Positive x values move the widget to the right, and positive y values move the widget down.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=220)** So this placed the label 100 pixels to the right of the left side of the screen, and 50 pixels down from the top of the screen.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=229)** These are absolute coordinates and the label will not move relative to that corner of the screen as the window is resized.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=237)** We can also place the widget in relative locations based on the current size of the parent frame or window.
>
> **[4:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=245)** To do that, we specify the rel x and rel y properties.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=249)** So for the blue label, I'm going to put it at rel x equals 0.5, and rel y equals 0.5.
>
> **[4:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=259)** The values for rel x and rel y are fractional values between zero and one.
>
> **[4:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=264)** And they represent the percentage of the current width and height of the parent frame or window at which to place the widget.
>
> **[4:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=271)** So this will place the blue label at the center of the window.
>
> **[4:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=277)** And you'll notice that if I resize the window, the blue label stays at the center of the window.
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=283)** Now if I make this window small, you may notice that the blue label is near the middle of the window, but it's not exactly centered.
>
> **[4:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=291)** And that's because TK us placing the top left corner of the label at the location defined by the rel x and rel y properties.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=300)** You can change which part of the label is actually placed at the specified coordinates by modifying the anchor property.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=307)** The value for anchor can be any cardinal or inter-cardinal direction, or the keyword center.
>
> **[5:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=313)** These are built as a string containing the letters N, S, E, and W.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=318)** By default, widgets are configured to anchor on the north west or top left corner.
>
> **[5:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=324)** I can change my blue widget to be anchored at it's center, let me change the line there, by specifying the anchor property to be center.
>
> **[5:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=335)** Save and run.
>
> **[5:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=338)** And now if I make the window really small, you can see that the blue label is absolutely centered on that window.
>
> **[5:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=345)** You can combine relative and absolute coordinates within the place method.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=349)** When you do that, the relative location is calculated first, then the absolute coordinates are added onto that.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=358)** For the green label, I'm going to call place and pass in a relative location of 0.5 in the x, should be rel not row.
>
> **[6:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=370)** And then I'm going to set an absolute location in the x direction of 100 pixels.
>
> **[6:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=375)** I'll also pass in a relative y location of 0.5, which is the middle of the window, and then an absolute y location of 50.
>
> **[6:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=384)** This will use the rel x and rel y values to find the middle of the window, and then from that point, it'll add an additional 100 pixels in the x direction, and 50 pixels in the y direction.
>
> **[6:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=397)** You can see that the blue label always exists at the center of the window, as we previously defined, and the green label is now always 100 pixels to the right of it, and 50 pixels down.
>
> **[6:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=408)** As the window is resized, those relative x and y values keep it in relative location to the blue label.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=415)** Absolute coordinate values cans also be negative.
>
> **[6:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=419)** This will move the widget to the left in the x direction and upwards in the y direction.
>
> **[7:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=424)** An example where we might want to use negative coordinates would be to place a label in the top right corner of the window with a slight off set from the edge.
>
> **[7:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=433)** I'm going to place the orange label, and specify its relative x location to be the right side, but then I'm going to use the absolute x value with a negative value of five to off set it by five pixels from the right.
>
> **[7:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=449)** And I'll also off set it from five pixels from the top by using y equals 5.
>
> **[7:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=455)** Now, was we saw earlier, by default the label will be anchored at this point using the top left corner of the label.
>
> **[7:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=462)** So I'm going to change the anchor property to anchor this label using its top right corner.
>
> **[7:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=471)** Save and run that.
>
> **[7:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=475)** And now you can see I have a label that's five pixels off from the top, five pixels off from the right side, and as I resize the window, it keeps that distance from the edge because the relative position for the x direction is always looking at the edge minus five absolute pixels, and then we're also adding five absolute pixels down in the y direction, and we're anchoring to the top right corner.
>
> **[8:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=499)** In addition to just specifying the location of a widget within the parent frame or window, the place geometry manager can also be used to specify the widget's size.
>
> **[8:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=509)** To configure the absolute size of a widget, use the width and height properties.
>
> **[8:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=514)** I'll configure my yellow label to be a width of 100 pixels and a height of 50 pixels.
>
> **[8:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=526)** Save and execute.
>
> **[8:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=528)** You see now this label has been resized 10 be 100 pixels wide and 50 pixels tall.
>
> **[8:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=534)** This will stretch out the label to fit within that area which is given to it by the place geometry manager.
>
> **[9:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=540)** As with x and y-coordinates, the width and height values can also be represented in relative terms compared to the parent window's size.
>
> **[9:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=549)** To configure that, I'll use the rel width and rel height properties.
>
> **[9:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=555)** I'll set rel width for my blue label to be 0.5, and I'll set the rel height for my blue label to also be 0.5.
>
> **[9:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=566)** This will tell the blue label to always be half the size of the window in both the x and y directions.
>
> **[9:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=574)** So I save and run that.
>
> **[9:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=577)** You see now the blue label is resized dynamically as the window is stretched and moved around.
>
> **[9:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=583)** That concludes the basics of using the place geometry manager to place and resize widgets using both relative and absolute terms.
>
> **[9:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=592)** I want to finish by reminding you that some of the other methods we learned about in the pack and grid geometry manager video, are also available to the place manager.
>
> **[10:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/using-the-place-geometry-manager?u=76281980&t=601)** Those include the place underscore slaves method, the underscore configure, the underscore info, and the underscore forget methods.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (7)
> **Code Keywords:** pass (3), this, (1), default, (1), let (1)
> **Versions:** 0.5 (6)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** gui (2), idle (1)
> **Exercise Files:** template (2), exercise file (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Cross-References:** previous video (1)


### 7. Event Handling

> [↑ Back to Table of Contents](#table-of-contents)

#### Configuring command callbacks
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=0)** - Many of the Tk widgets need to perform an action when the user interacts with them.
>
> **[0:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=5)** A prime example of this is the button widget.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=8)** When the user clicks on a button they expect it to do something, and if you place a button on your GUI that doesn't do anything, you'll just end up frustrating your users.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=17)** To make a button, or certain other types of input widgets perform an action when the user interacts with them you need to configure a command callback for that widget.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=26)** The callback is a function or method that will be executed when the button is clicked.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=31)** We've already seen command callbacks used in some earlier videos about widgets, but I usually just glossed over what was happening when we configured the various command properties.
>
> **[0:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=41)** In this video, you'll learn how to properly use them, and know which widgets support different types of command callbacks.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=48)** I'll begin by going to the exercise folders in the Chapter Seven folder, and creating a copy of the template file.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=57)** I'll rename that copy to '01_Callback', and then I'll right-click on it, and choose to edit with IDLE.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=67)** This template imports the Tkinter package as well as the Tk module, creates my top level root window, and down below it calls the "root.mainloop" method to start the event loop.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=79)** To enter my code, I'm going to start by creating a new button, it'll be a child of the root window, and the button will simply say, 'Click Me', a message we've seen several times throughout this course.
>
> **[1:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=92)** And I can go ahead, I'll just call the pack geometry manager to place it on my window.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=97)** Now, as we've seen before, this button won't do anything yet and before I can configure the command callback for this button, I need to create a function or method to point to.
>
> **[1:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=106)** So above it, I'm going to define a method called "callback", and you can call this method whatever you want to.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=113)** And a callback is simply going to print in the callback.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=120)** To tell this button to execute the method when it's clicked, we'll configure the command property of the button widget.
>
> **[2:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=127)** So I'll set command equal callback.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=131)** Now it's important to point out here, the value for the command property is the name of the function or method to execute.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=137)** There are no parentheses after the function name, we're not executing the function here, we're just passing that name to the command callback so it knows what function to execute.
>
> **[2:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=148)** If I go and run my code, the code is entered into the main event loop, and every time I click the button, it exits that event loop, handles the callback function, and then re-enters the event loop.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=161)** So I can click the button multiple times, and each time it'll execute my callback function and return to the main loop to wait again for me to click one more time.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=170)** In this example, the callback method did not accept any parameters, it only has a simple print statement which is the same every time it gets called.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=179)** There may be occasions when you want to pass a parameter to the callback function.
>
> **[3:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=183)** For example, if we were building the GUI for a calculator app, every time the user clicks one of the numbered buttons, we would want to display that number.
>
> **[3:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=192)** In this case, we would want all ten numbered buttons to execute the same command callback, but to do it with the parameter of their value.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=201)** For simplicity sake, I'm going to create three numbered buttons instead of ten, to demonstrate this.
>
> **[3:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=207)** I'll modify my 'Click Me' button, to have a number here, and then I'll make two more copies of it, to create a button 'two', and a button 'three'.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=220)** Now I'll modify my callback function to accept the parameter of a number, and to print that to the console.
>
> **[3:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=227)** Number is it's input, and it'll print out that number.
>
> **[3:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=232)** Now the instinctive thing to do here, to pass a parameter to the callback method, would be to add parentheses to the callback containing parameter values when we configure the command property.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=243)** For example, if we did callback 'one' here, callback 'two' there, and callback 'three' here.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=252)** I'm bringing this up because it's a common mistake that new Tkinter programs often make, myself included, and let me show you what happens if you do that.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=261)** If I save and execute this code, you notice that the program runs and prints out one, two, three, and if I click on any of the buttons, nothing is happening.
>
> **[4:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=274)** This means that when the program is first executing, it goes through the code, and when it gets to this line, rather than passing the name callback to the command property, it's actually executing the callback and passing the return value of the callback function to the command property.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=290)** Now this callback function doesn't return anything, so command is being set to 'none', and since the value for the command property is none, the buttons don't do anything when they're clicked.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=301)** There is a way to work around this issue, and that's by creating a Lambda function for each of these calls.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=308)** The Lambda keyword creates an anonymous function containing the callback method, which we can use to configure the command callback.
>
> **[5:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=316)** Now we're configuring each command property to be an anonymous Lambda function, which points to the callback function, passing the correct parameters for that number.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=327)** With the Lambda functions in place, the buttons now work as we expected.
>
> **[5:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=332)** You notice that when the program first executed, it did not print out the buttons down below, because it did not execute those functions off the bat.
>
> **[5:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=341)** That covers the basics for configuring and using command callbacks with buttons.
>
> **[5:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=345)** There are several other Tk widgets in addition to buttons that also have command properties to configure a callback.
>
> **[5:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=352)** Those include the Checkbutton, Radiobutton, Spinbox, Scale, and Scrollbar widgets.
>
> **[5:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/configuring-command-callbacks?u=76281980&t=358)** In the earlier video on the Scrollbar widget, we even saw that some widgets have special x-scroll command and y-scroll command properties, which can be used specifically to interface with the Scrollbar.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), lambda (4), pass (2), module (1), case, (1)
> **Prerequisites:** configure (6)
> **CLI Commands:** make (3)
> **Env Vars:** gui (2), idle (1)
> **Definitions:** is a  (2), means that (1)
> **UI Navigation:** right-click (1), click on (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (2)

#### Binding to keyboard events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=0)** - [Instructor] In the previous video, we learned about command callbacks, which are a great way to trigger code to be executed based on user events.
>
> **[0:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=8)** However, command callbacks are only available for specific actions with a handful of widgets.
>
> **[0:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=14)** For example, clicking on a button.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=16)** There may be times when we want to trigger events based on other user actions with the mouse or keyboard.
>
> **[0:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=22)** To do that in Tkinter, we can bind our program to different types of events, and specify the handler function or method to be executed when that event occurs.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=32)** There's a wide variety of event types that you can bind your program to with Tkinter.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=38)** In this video and the next one, I'll focus on Tk events related to inputs from the keyboard and mouse, because those are the types of events that you will most frequently bind to in your program.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=49)** If you want to learn more about the other types of events that Tk generates, you can read about them in the Tcl/Tk documentation on the bind command.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=59)** For this example, I'm going to go to my exercise files in the chapter seven folder, and create a copy of the template.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=68)** I'll rename this copy to 02 underscore keyboard, because in this video we'll cover the keyboard event bindings.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=76)** Then I'll right-click on that file, and choose to edit it with IDLE.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=80)** To make my program listen for a keyboard event, I'm going to use the bind method on the master root window.
>
> **[1:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=87)** With the bind method, the first parameter is a string containing specially formatted descriptions of the events you want to listen for.
>
> **[1:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=94)** For now, I'm going to use the KeyPress event, notice the open and close angle brackets on either side, and then the second parameter is the name of the callback function or method you want to execute.
>
> **[1:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=106)** And I haven't created it yet, but I'll create a callback in a moment, called key_press.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=111)** Unlike with the command callbacks, which typically did not take any input parameters, when we create the callback function for the bind method, we need to give it one input parameter, which the event handler will use to pass an object containing information about the keyboard event.
>
> **[2:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=127)** The keyboard event handler is expecting this single input parameter, so if you forget it or add extra parameters, then Python will throw an exception.
>
> **[2:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=135)** So to create my key_press callback, I'll create that one input parameter called event, you can name it whatever you want to, and then in my callback method, I'm just going to break out the different information that's available in event, and I'll print those to the console.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=150)** The first piece of information is the type of event, and this is stored within the event object as event.type.
>
> **[2:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=161)** And I'll copy this.
>
> **[2:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=165)** The next thing we can get from it is the widget, which tells us the name of the widget which triggered the event.
>
> **[2:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=174)** The keyboard event object will also give us the character, which is the character if it's printable, that was pressed to trigger the event.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=184)** We'll get the keysym, again indexed out of the event object by event.keysym, which is the keysym that was pressed for the symbol of the key.
>
> **[3:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=195)** And finally, we'll also get a key code, which contains the numeric code of the key that was pressed.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=204)** Now that we've built our function, let's save and run this program.
>
> **[3:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=209)** Now keypresses will only be captured when the master window is the top window that I'm looking at.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=214)** For example, if I press the a key, you'll notice over here that it gives me type two, meaning that it's a keypress event, it lets me know which widget that event came from, the period, as we learned earlier, is the name for our top-level root window, it told me what character and keysym it came from, and then it gave the keycode which is 65, the code for the a key.
>
> **[3:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=234)** Now if the Python shell here has a scope, and I press keys, you'll notice they're just typed into the shell, they're not captured by my top-level window.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=243)** So let me go back to that window... Let's see what happens if I press shift and three, whoops, you'll notice there, if you hold down a key, it'll trigger multiple events just like in a text editor, so you can capture those as well, but if I hold shift-three, you'll notice down here at the bottom, that triggers a type two key event in that main window, the character that shift-three creates is the pound sign, the keysym for that is the word numbersign, and it's got a keycode of 51.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=272)** Also demonstrate here, if I press the F1 key, you'll notice that there's not a character associated with the F1 key, because it's a special type of key, but it does have a keysym and a keycode associated with it as well.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=285)** In addition to broadly binding to any key being pressed, as we did here, we can also create custom key bindings for specific combinations of keypresses and releases.
>
> **[4:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=295)** Here are some example keyboard event binding statements.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=298)** The left column contains the format for the event, and the right column contains a description of the event.
>
> **[5:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=305)** First, you'll see that both the words key and keypress, contained within angle brackets, represent the event of any key being pressed.
>
> **[5:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=314)** We can specify to only trigger an event when a specific key is pressed by using a hyphen and the keysym, as demonstrated here with keypress and delete.
>
> **[5:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=324)** The same can also be done with the keyrelease type to trigger an event when the user lets go of that key.
>
> **[5:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=331)** For keys relating to printable characters, such as letters, numbers, and symbols, we can just include that character without angle brackets.
>
> **[5:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=340)** The two exceptions to this are space and the less than symbol.
>
> **[5:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=344)** We can't use the less than symbol because itself is an angle bracket.
>
> **[5:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=348)** For special keys that don't represent a printable character, use the keysym encased in angle brackets.
>
> **[5:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=354)** In particular, I want to point out that the enter key on your keyboard is actually represented by the keysym word return.
>
> **[6:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=362)** If you put the word enter in angle brackets, you'll actually be binding to a mouse event, which we'll learn about in the next video.
>
> **[6:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=369)** And finally, you can use a series of keys together using hyphens to trigger events on custom combinations.
>
> **[6:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=378)** Let's try replacing the generic keypress event I've binded to here with a common keyboard combination, control-c.
>
> **[6:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=385)** So instead of KeyPress, I'll type Control dash c, so this'll trigger an event when the user holds control and presses c.
>
> **[6:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=393)** And instead of calling the key_press event here, I'm going to create a function called shortcut, and I'll pass in the string copy, cause that's what control-c typically refers to.
>
> **[6:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=404)** Let me also copy this bind method, and let's also bind to the event of the user pressing control-v, which typically refers to paste.
>
> **[6:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=414)** Now that I've created two bindings, I also need to create my shortcut function, so I'll define shortcut, and I'll pass in an action, and we'll do print action.
>
> **[7:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=428)** This should remind you of the situation we encountered in the previous video about command callbacks.
>
> **[7:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=433)** When we run this code... We get a syntax error, for one, but when we run this code, you'll see that, rather than passing the name of the callback method as an argument to the bind method, we're actually executing the shortcut function at this time, and passing the return value to the bind method, which is nothing.
>
> **[7:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=458)** So if I press control-c or control-v, those aren't executing anything because the bind method is bound to nothing.
>
> **[7:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=464)** The solution for this with the command callback was to use a lambda function, so let's try that here.
>
> **[7:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=471)** I'll say lambda shortcut, and lambda shortcut.
>
> **[7:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=477)** So now we're passing the anonymous lambda function to the bind method, and the lambda function is pointing to the shortcut function with the appropriate parameters.
>
> **[8:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=487)** We'll try executing this, and see what happens.
>
> **[8:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=491)** And the code didn't run off the bat, so that's a good sign, let's try hitting control-c, and we get an error.
>
> **[8:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=498)** Let's look at the error.
>
> **[8:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=501)** This error says that lambda takes zero positional arguments, but one was given.
>
> **[8:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=506)** This is occurring because the event handler is trying to pass the object with event information as an argument to the lambda function.
>
> **[8:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=513)** The lambda function isn't expecting any arguments.
>
> **[8:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=516)** To remedy this, add an argument to the lambda function to catch that event object that's being passed.
>
> **[8:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=524)** Now, if we save and run this code, everything should work correctly.
>
> **[8:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=529)** If I hit control-c, you'll see it prints copy, and if I hit control-v, it prints paste.
>
> **[8:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=536)** This format for using lambda events within the bind method will apply for all type of events, including the mouse events that we'll learn about in the next video.
>
> **[9:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-keyboard-events?u=76281980&t=545)** Remember the difference here, we can use lambda functions with the command callbacks, but for those we do not need to pass in a parameter, but when we use a lambda function within the bind method, since the bind is passing that event object, we need to include this additional variable here to capture that event object, or else we'll cause an error.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), lambda (12), let (9), pass (5), finally, (2)
> **Cross-References:** previous video (2), in the next (2), go back to (1)
> **Definitions:** refers to (2), is a  (1), is an  (1)
> **Analogies:** for example (2), just like (1), such as (1)
> **CLI Commands:** python (2), make (1)
> **Code Identifiers:** key_press (3)
> **Exercise Files:** exercise files (1), template (1)
> **Env Vars:** idle (1)

#### Binding to mouse events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=0)** - [Instructor] When binding handler functions or methods to keyboard events, we typically bind to top level window widgets so that the keyboard events are captured whenever that window has focus.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=10)** With mouse events, on the other hand, we may only want to trigger events when the user interacts with one specific widget amongst the many in our program using their mouse.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=20)** For this reason, it's more common to bind mouse events to individual widgets within the program.
>
> **[0:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=26)** In this video, I'll demonstrate this by binding mouse events to a canvas widget to create a simple drawing program.
>
> **[0:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=33)** I'm going to start by opening the exercise files, Chapter Seven folder, and creating a copy of our template Python file.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=42)** I'll rename this copy to 03_mouse, because we'll be covering mouse events.
>
> **[0:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=48)** And then I'll right click on it to edit it with idle.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=51)** Now in this template, I'll start by creating a new canvas object, which I'll assign to a variable called canvas.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=59)** It'll be a child of the root.
>
> **[1:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=61)** I'll give it a width of 640 pixels, and a height of 480 pixels, and we'll give it a background that's white.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=75)** And we'll call the canvas.pack method to place it on our window.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=79)** Now there are a variety of mouse events that we can use to bind to this canvas.
>
> **[1:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=84)** The buttons on a mouse are numbered with one, representing the left button, two, representing the middle button, which is often clicking the scroll wheel, and three, representing the right mouse button.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=96)** With those button numberings in mind, here are some of the example mouse event binding statements related to when the user clicks a mouse button.
>
> **[1:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=104)** The Button and ButtonPress keywords, by themselves, in angle brackets, refer to any mouse button being pressed.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=112)** Or, they can be modified with a hyphen and a number to represent a specific mouse button.
>
> **[1:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=118)** As a shortcut for specific mouse button press events, you can just use the button number contained within angle brackets.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=126)** As you might expect, the phrase ButtonRelease can be used to trigger an event when the user releases their mouse button, and to capture double and triple mouse clicks, you add the appropriate modifier to the front of the event statement.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=142)** The Enter and Leave mouse events correspond to when the mouse enters into or leaves the area of the widget to which the event is bound.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=150)** And finally, the Motion event will be triggered whenever the mouse is moved.
>
> **[2:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=155)** You can add a number of modifiers to the mouse statement so that it will only trigger when a specific mouse button is being held down.
>
> **[2:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=163)** Let's create an event binding for when the user clicks on the canvas with any mouse button.
>
> **[2:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=168)** We'll call this on the canvas, rather than the top level window, and we'll use the bind method, and we'll pass in the string <ButtonPress>, notice the capital B and capital P, and then the second parameter we pass is the function that will be executed when the user presses a button.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=187)** And I'm going to create a function called mouse_press.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=190)** As with the keyboard events we saw earlier, mouse events will also pass an event object containing information about the event.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=198)** However, the event object for mouse events has different fields than the one we saw earlier for the keyboard event.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=204)** So let me create my mouse_press function here to break out those events so we can see what's contained.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=210)** We'll print the values to the console.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=214)** We'll print type, and we break this out by calling event.type.
>
> **[3:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=224)** The event object will also contain information about the widget which triggered it.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=229)** We can access that with event.widget.
>
> **[3:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=233)** It'll pass in a number for the mouse button that was pressed.
>
> **[3:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=236)** We access that with event.num.
>
> **[4:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=240)** And then it'll also pass in X and Y coordinates for where the mouse was pressed.
>
> **[4:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=248)** And those are accessed as event.x and event.y.
>
> **[4:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=253)** I'll save and execute this.
>
> **[4:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=256)** It creates our canvas, and if I click on the canvas, you'll notice it triggers that event.
>
> **[4:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=262)** We see that it's a mouse click, so it's a type four event, because it's the widget and this is the widget name for the canvas I've created.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=269)** It tells me I clicked the left most mouse button, which is number one, and I clicked at the X coordinate of 204 and the Y coordinate of 73.
>
> **[4:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=278)** It's important to to note, these coordinates are in reference to a location on the widget, not on the screen.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=285)** So if I click up in the top left corner of the canvas, you'll see we get very small coordinates, seven and six here, because the coordinate system starts in the top left corner of the canvas.
>
> **[4:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=295)** Also I want to point out that since I used the bind method on the canvas, if I span the window and I click elsewhere outside the canvas, it doesn't trigger events.
>
> **[5:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=305)** It'll only trigger the mouse click event if I actually click on the canvas.
>
> **[5:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=310)** Getting the X and Y coordinates in relation to the entire screen can be useful.
>
> **[5:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=314)** If you want to do something like move a window to that location or spawn a right click menu.
>
> **[5:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=319)** We can do that by accessing, instead of just the event.x object, there's also one called event.x_root, and event.y_root.
>
> **[5:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=334)** These root values will give you the coordinates related to the entire screen.
>
> **[5:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=338)** Getting the X and Y coordinates in relation to the entire screen can be useful if you want to do something like move a window to that location or spawn a right click menu.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=347)** Let me demonstrate for you by save and run.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=351)** And so, even if I click in the top left corner of the canvas, you'll see that the canvas related X and Y values are seven and seven, but the screen relative X, Y values are 694 and 238.
>
> **[6:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=365)** So now that we understand the basics of binding to and handling mouse events, let's turn this canvas into a simple drawing tool which we can draw whenever the user clicks and drags their mouse.
>
> **[6:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=376)** To do that, I'm going to create a bind event on the canvas.
>
> **[6:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=381)** For whenever the button B1 is clicked, and it's in motion.
>
> **[6:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=388)** And I'll use this to call a function that I'll call draw.
>
> **[6:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=392)** Now to create my draw method, we'll define draw, pass in that event, and I'll call the canvas.create line method.
>
> **[6:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=407)** And I'll actually need to make sure this is after I've created the canvas, so it'll know what canvas is.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=415)** Now, it's important to note here, that whenever this mouse event occurs, it'll give us the new location of the mouse.
>
> **[7:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=421)** But in order to draw a line, we need to know not only the new location, but the previous location of the mouse.
>
> **[7:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=427)** So for our drawing utility, we need to track the previous and current locations that the mouse is at.
>
> **[7:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=433)** And we'll use a global variable to do that.
>
> **[7:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=436)** So my mouse press event handler, which occurs anytime a button is clicked.
>
> **[7:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=440)** I'm going to store a global called prev, and I'll set prev to be the value of that event.
>
> **[7:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=447)** And then down here, in my draw function, I'll also use that global prev, and I'll use it with the create_line method to draw a line from the prev.x and prev.y coordinates, to the new current event.x and event.y coordinates.
>
> **[7:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=467)** And I'll set that line to be a width of five.
>
> **[7:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=470)** And after I've used that previous X and Y coordinate, I'll save the current event to that prev variable.
>
> **[7:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=478)** Now, if I save and run this code, you see that if I click and drag my mouse, it's using that previous location and that new location to draw a line between those points and I've effectively created a simple draw program.
>
> **[8:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-mouse-events?u=76281980&t=494)** So this example demonstrates how, with just a few simple lines of code, we can turn that canvas widget into an interactive drawing surface.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), function (5), let (4), finally, (1), type, (1)
> **Code Identifiers:** mouse_press (2), x_root (1), y_root (1), create_line (1)
> **UI Navigation:** click on (3)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** python (1), make (1)
> **Speakers:** - [instructor] (1)

#### Binding to virtual events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=0)** - In addition to binding to events created by the user's mouse or keyboard, certain widgets can also trigger what are called virtual events when certain things happen.
>
> **[0:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=9)** Often these virtual events are triggered when the user interacts with the widget in a specialized way.
>
> **[0:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=14)** If you watch the earlier video about the TreeView widget, then you may remember that we use the bind method, with the TreeView select virtual event, to determine when the user has selected an item from the TreeView.
>
> **[0:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=27)** In this video, I'll teach you how to bind to virtual events by using the entry widget as an example, because it has a virtual event from when the user cuts, copies, or pastes text into it.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=38)** I'll also teach you how to create and manage your own custom virtual events.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=42)** I'll start by going to the exercise files folder, in the Chapter 7 directory, and making a copy of the template Python file.
>
> **[0:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=52)** I'll rename that copy to 04 underscore Virtual and then I'll right-click on it to edit it with IDLE.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=62)** I'll start by creating a basic text entry widget, using the ttk.Entry constructor, and putting that in the top level window, with the pack method.
>
> **[1:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=73)** Now, to bind to a virtual event, enclose the name of the event in double angle brackets.
>
> **[1:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=79)** So if we want to bind to an event for the entry box, we'll type entry dot bind, open.
>
> **[1:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=85)** As we saw with the bind command earlier, the first parameter is a string with the name of that event.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=91)** And for virtual events it has the double angle brackets, and the name of this event is copy, close string.
>
> **[1:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=98)** And then next, we provide the function that'll be executed when this event occurs.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=102)** For this example, I'm just going to use a lambda function.
>
> **[1:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=105)** We saw these in the previous keyboard and mouse event videos, and this lambda function we'll simply call the print function.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=114)** And I'll do this for copy, as well as paste.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=125)** These copy and paste virtual events are basically just pre-configured keyboard events for the entry widget.
>
> **[2:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=131)** So if I run this program, you'll see that if I select the entry widget, if I press Control + C which represents the copy shortcut, it calls my lambda function here to print copy to the console.
>
> **[2:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=145)** And if I hit Control + V which represents the paste shortcut, you can see here it pasted the contents that I had currently stored in my buffer, it prints paste to the console.
>
> **[2:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=156)** Since these event bindings basically represent a pre-configured set of keyboard and mouse events, we can create our own event bindings and we do so by using the event underscore add method.
>
> **[2:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=168)** So if I want to create a new event binding for the entry widget, I can type entry dot event underscore add.
>
> **[2:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=176)** I need to provide a name for my new event binding, so let's create an event binding that'll be triggered whenever I type in "OddNumber" into the entry field.
>
> **[3:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=183)** So I'll call this "OddNumber" and then I can pass in the various keyboard and mouse events, that will trigger this new virtual event I'm creating.
>
> **[3:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=194)** So if the user types one, or if they type three, or if they type five, seven, or nine, it'll trigger this event.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=202)** And each of this represents the syntax for keyboard events of pressing one, three, five, seven, and nine.
>
> **[3:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=208)** Now I close that statement, and after I've created my virtual event, I'll also need to bind to it.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=214)** So I'll do entry dot bind, say "OddNumber" Close string, and then I need to provide a function for the bind method to execute if OddNumber occurs.
>
> **[3:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=226)** So again I'll use a lambda function here, and I'll just print out, that we saw an odd number.
>
> **[3:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=234)** And now if I run and execute this, you'll see if I type an odd number into the field, it triggers the OddNumber event, but if I type even numbers, nothing happens.
>
> **[4:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=247)** So here's a one, a three, a five, a seven, a nine.
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=251)** But zero, two, four, six, and eight don't trigger anything.
>
> **[4:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=255)** We can bind this virtual event we just created to other types of widgets as well, such as the text widget.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=261)** We're basically just creating a shortcut for the specific key combinations we defined, when we used the event add method.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=269)** To view details about a virtual event, we can use the event underscore info method.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=273)** So after I've created my OddNumber event, I'll call print entry, and then I'll use the event info method to print out the event information about my newly created OddNumber virtual event.
>
> **[4:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=288)** I'll save and run that.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=292)** (error noise) Oops.
>
> **[4:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=294)** I need to close my parentheses.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=298)** Save and run.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=300)** You see here that it prints out the information about that virtual event, which shows you which keys will trigger the event. That's one, three, five, seven, and nine.
>
> **[5:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=309)** One nice thing about virtual events is that we can also programmatically trigger them from within our code.
>
> **[5:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=316)** So if I wanted to down here, I could call entry dot event underscore generate, and then pass in the name of a virtual event and it'll programmatically trigger that event.
>
> **[5:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=327)** So let me trigger an OddNumber event, and let me go ahead and on my entry box, I'll also generate the paste event that we used earlier.
>
> **[5:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=342)** So this should trigger the OddNumber event, which will execute print OddNumber, and also trigger the paste event.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=349)** Do file, save. And run.
>
> **[5:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=353)** And you'll see sure enough we have that call originally that gets the event info, then executes the OddNumber event.
>
> **[5:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=359)** Let me show you the code.
>
> **[6:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=362)** Our OddNumber event prints Odd Number, and then when we execute that paste event, you notice it executed the current contents of my buffer into the entry field, and also printed paste because that's what I told it to do here with the lambda function.
>
> **[6:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=375)** The final thing to cover about virtual events, is how we can get rid of them.
>
> **[6:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=379)** So if you've created a virtual event that we don't need to use anymore, we can delete it by using the event delete method.
>
> **[6:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=386)** So I'll call entry dot event underscore delete, and then pass in the name of the virtual event I want to delete.
>
> **[6:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=394)** So that syntax there would delete OddNumber and it'll no longer exist as a virtual event.
>
> **[6:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=399)** This covers the basics of creating and using virtual events in Tkinter.
>
> **[6:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-virtual-events?u=76281980&t=403)** To find out what virtual events are available for a specific widget, refer to the Tcl/Tk documentaion page for that widget.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), lambda (5), delete (5), let (4), pass (3)
> **CLI Commands:** python (1), find (1)
> **UI Navigation:** right-click (1), select the (1)
> **Exercise Files:** exercise files (1), template (1)
> **Env Vars:** idle (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Binding to multiple events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=0)** - [Instructor] Thus far, we've only used the bind method to configure event handlers for single instances of widgets.
>
> **[0:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=7)** In this video, I'm going to teach you about how widgets react if they're bound to multiple similar events, and how you can create a single event binding which is tied to multiple widgets within the program.
>
> **[0:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=19)** I'll start by accessing the exercise files, in the chapter seven directory, and creating a copy of the template Python file.
>
> **[0:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=29)** I'll rename that copy to 05_multiple, and then right-click on it and choose edit with idle.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=38)** To demonstrate multiple event bindings, I'm going to start by creating two label widgets.
>
> **[0:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=44)** Label one, which is a child of the root and has the text label one on it.
>
> **[0:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=52)** And then I'll just copy that line and create a similar label two.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=59)** And of course I also need to add those to the window, and I'll do so with the pac command.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=67)** Now, let's add an event binding to label one that'll print a message when it's clicked on.
>
> **[1:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=72)** I can do that by typing label one dot bind.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=76)** I'll use the mouse event of button press, which is triggered when any mouse button is pressed, and I'll do that, and I'll execute a lambda function, which will print the message that button press occurred for a label.
>
> **[1:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=93)** So I'll say button press label.
>
> **[1:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=96)** Now if I save and execute this code, you see that if I click on label one, it executes the button press label function, but if I click on label two, nothing happens.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=107)** And that's because I used the bind command on label one.
>
> **[1:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=111)** Now, let's add another bind to label one, but this time let's make it for something a little bit more specific.
>
> **[1:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=117)** We'll say label one dot bind and instead of just binding to any type of button press, I'm going to make this bind specific to just the left-most button, which is button one on the mouse.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=128)** We'll do a similar lambda function here, to print out that this time button one was pressed, and it was on the label.
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=138)** Now if I save and execute this, if I left-click on the label one, it executes the one label function, because I'm using button number one on the mouse.
>
> **[2:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=150)** But if I right-click on the label, now it executes the button press label function, because it's triggering a generic button press.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=157)** When multiple similar events are bound to a single instance of the widget, TK does its best to pick the binding that most closely matches the action that occurred.
>
> **[2:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=166)** So left-click is more specific than right-click.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=170)** If we wanted to configure that left mouse click event to both labels, we could bind it to the master window instead of just binding it to the label one.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=178)** Binding an event to a top-level window will propagate that binding to all of its child widgets.
>
> **[3:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=184)** In this case, I'll call root dot bind, pass in the string to trigger on the left button mouse click, which is button number one, and again we'll do a lambda function, and we'll print out that button one was pressed, and was pressed on the root instead of on a label.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=204)** Now if I save and run this, you notice that if I click on label two, with my left mouse button, it's triggering the one root function.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=214)** But if I click on label one, it actually triggered two events.
>
> **[3:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=218)** One of those events is triggered for the label, and the other is triggered for the master.
>
> **[3:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=222)** And this is important to keep in mind when building large applications where you may have multiple layered event findings.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=229)** Now, if we find ourself in this situation, we can remove a previously configured event binding by using the unbind method.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=237)** I'm going to remove those bindings from my label one, by calling label one dot unbind and pass in the binding that I had configured.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=246)** So I'll remove the left mouse button binding, and I'll also remove the general binding I created for that label with button press.
>
> **[4:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=257)** Now if I save and execute this, those bindings-- Oops. Order matters when you put brackets outside of quotes.
>
> **[4:27](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=267)** Save and execute.
>
> **[4:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=270)** And now if I click on either label, it'll execute the function that we bound with the root.
>
> **[4:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=275)** This avoids the conflict we saw earlier when we used the bind method on both the root and the label to bind to the mouse click event.
>
> **[4:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=282)** The final thing I want to show you is that if we have multiple top-level windows in our program, we can create an event binding that will apply to all of them by using the bind-all method.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=293)** So I could call root dot bind all, and then pass in my event binding.
>
> **[4:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=298)** In this case I'll bind to the escape key.
>
> **[5:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=300)** And then I'll press lambda e, and we'll print out escape.
>
> **[5:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-multiple-events?u=76281980&t=309)** And if I save and run this, if I had multiple windows in my program, no matter which window has scope, if I press the escape key, it'll execute that function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), lambda (4), this, (4), let (3), pass (3)
> **UI Navigation:** click on (6), right-click (3)
> **CLI Commands:** make (2), python (1), find (1)
> **Exercise Files:** exercise files (1), template (1)
> **Prerequisites:** configure (2)
> **Non-Speech:** (chimes) (1), (clicking) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)


### 8. Building an Application

> [↑ Back to Table of Contents](#table-of-contents)

#### Defining project requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=0)** (electronic swishes)
>
> **[0:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=3)** - For the last section of this course, I'm going to present you with a programming challenge to create a Tkinter GUI of your own.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=10)** In this video, I'll give you the basic requirements for the user interface, then in the follow on videos, I'll walk you through the development process I used to build my solution to meet those requirements from start to finish.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=23)** For this project, our client will be the fictional Explore California touring company.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=28)** Explore California offers a variety of touring packages throughout California.
>
> **[0:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=33)** Our job is to create a feedback form for customers who have completed the desert to sea tour to leave comments about their experience.
>
> **[0:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=42)** The requirements for our tour feedback form will be as follows, the form will display the circular desert to sea logo, along with a message to the user inviting them to leave feedback about the tour.
>
> **[0:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=54)** I've included the logo with the exercise files for you to use, or you can download it from the Explore California website, [explorecalifornia.org](https://explorecalifornia.org).
>
> **[1:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=63)** The user can enter their name, email address, and a multiline comment into the form's input fields, and the form will have two buttons, submit and clear.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=75)** Pressing the submit button will do three things, it will print the contents of the input fields to the console output, it will clear the current contents of the input field, and it will notify the user that their comments were successfully submitted.
>
> **[1:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=92)** And finally, if the user presses the clear button, as you might expect, it should clear the contents of those input fields.
>
> **[1:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=100)** I've intentionally left some vagueness in these requirements to leave you flexibility to be creative in the design of your survey form.
>
> **[1:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=107)** GUI design involves a bit of art, so there's not a single right or wrong answer.
>
> **[1:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=113)** If you look in the exercise files, in the chapter eight directory, you'll see that I've provided you with a GIF file of the desert to sea tour logo, as well as a feedback_template file to use as a starting point.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=126)** I'm going to right click on that and open it with IDLE.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=129)** The template is organized using a common structure for coding Python GUI applications.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=134)** The feedback form is implemented as a class, which you will need to complete by filling in the init method, and creating any other helper methods you require.
>
> **[2:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=144)** Notice that the init constructor method takes a parameter called master, which will be the top level Tk widget in which you will build the feedback form.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=153)** You can put the code to create your Tk widgets, and add them to the master widget inside of the init method.
>
> **[2:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=159)** The main function down near the bottom creates a new top level Tk window, which it passes to the feedback constructor to be used as the master widget.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=170)** The line at the very bottom is a conditional statement, which will only call that main function if this Python file is run as the main script.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=178)** By structuring the code this way, we can run our feedback script on its own and it will create a feedback form inside of the new Tk window.
>
> **[3:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=187)** Alternately, we can import this script as a module into another program, and that higher level program can then create a window or frame to use for the feedback form and pass it as the master parameter when calling the feedback constructor.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/defining-project-requirements?u=76281980&t=202)** As I mentioned before, there's not a single right way of doing GUI design, so feel free to get creative with your solution to practice using the features of Tkinter.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), interface (1), finally, (1), class, (1), require (1)
> **Env Vars:** gui (4), gif (1), idle (1)
> **Exercise Files:** exercise files (2), template (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** feedback_template (1)
> **URLs:** [explorecalifornia.org](https://explorecalifornia.org) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Planning the design
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=0)** (intensifying swooshes)
>
> **[0:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=3)** - [Instructor] Before I just start coding away, I like to first draft out a general picture of what I want the GUI to look like in the end.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=10)** This picture will be helpful in determining what widgets to create, and more importantly, where exactly to place them.
>
> **[0:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=17)** I'll start my draft of the GUI by drawing a box to represent the window containing the End Feedback form.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=23)** As the requirement stated, the form needs to display the Desert to Sea logo and the message to the user inviting them to leave their comments about the tour.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=32)** I also want to thank the customer for taking the tour, so I'm going to include a bold Thank You header line as well.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=39)** We know that we need to input fields for the user to enter their name and email address.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=43)** Since both of these can be written on a single line, I'm going to use the entry widgets for each of them.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=49)** The requirements also stated that the user should be able to enter multiple lines of comments, so I should use a text widget to implement that.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=57)** Now, our GUI has three input fields, but nothing to indicate to the user what they should do with them, so let's add labels to each of those fields.
>
> **[1:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=66)** Finally, the requirements stated that we need two buttons to submit and clear the comments of the Input fields.
>
> **[1:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=72)** I've decided to include those down below the text widget.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=76)** The GUI looks pretty good, and should meet all of the requirements for the feedback form, but there's one more thing I want to add.
>
> **[1:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=82)** To help organize the widgets and make laying them out easier, I'm going to include two frames, one to contain the top header region and the second to hold the rest of the contents.
>
> **[1:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=92)** By dividing the GUI up into smaller sub-regions, we'll be able to easily tweak the placement of widgets within each sub-region without affecting the GUI as a whole.
>
> **[1:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/planning-the-design?u=76281980&t=102)** The frames I'm using to do this will both be invisible to the user, so I've drawn them here using broken lines.

> [!info]- Semantic Content
>
> **Env Vars:** gui (6)
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** picture (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Creating the widgets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=0)** - [Instructor] Now that I've sketched out the design for what I want my GUI to look like, I'm ready to start building it.
>
> **[0:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=5)** The first thing to do when writing a new Tkinter program is create widgets.
>
> **[0:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=10)** And to determine what widgets I need to create, I'll refer back to my design drawing.
>
> **[0:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=15)** Using this drawing, I can quickly build a list of the widgets needed for the feedback form and include their parent-child relationships.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=23)** I'll start by listing the top level window, which is passed to the feedback constructor as the master widget.
>
> **[0:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=30)** Inside the master window, I have two frames, which will each be children of the master.
>
> **[0:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=35)** The top frame contains the header and has three children of its own.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=39)** It has the Desert to Sea logo, which will be a label containing an image, it has the label containing the bold header message saying thanks, and it has a label containing the instructions for the user.
>
> **[0:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=51)** The lower frame inside of the master window will contain the main contents of the feedback form.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=57)** There are three text labels for the name, email, and comments input fields.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=62)** The input fields for name and email are both entry widgets because they only contain a single line of text.
>
> **[1:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=70)** The comments field is implemented as a text widget, so it can contain multiple lines.
>
> **[1:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=76)** Finally, there are the two Submit and Clear buttons at the bottom of the contents frame.
>
> **[1:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=81)** Now that I've constructed my list of widgets and their child-parent relationships, I'm ready to begin coding.
>
> **[1:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=88)** I'll begin with the survey template that we looked at earlier.
>
> **[1:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=91)** The first thing I need to create is the header frame, which I'll define inside of my init method.
>
> **[1:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=97)** It'll be stored as a class variable, which I'll call frame header, and I'll create it using the ttk.Frame constructor method.
>
> **[1:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=106)** And as we remember, in that list we just created, the frame is a child of the master window.
>
> **[1:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=112)** Next, I'm going to create the widgets to go inside of that frame.
>
> **[1:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=115)** The first widget I want to create is the label that contains the image, so I'll first need to create that image by using the PhotoImage constructor.
>
> **[2:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=125)** I'll use the file property to point to that tour_logo.gif file, which is included in the exercise directory.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=134)** It's important that I save it to a class variable here.
>
> **[2:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=136)** Otherwise, it could be garbage collected after the init method completes.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=141)** Now that I have my logo image created, I'm ready to create those three labels for the header frame.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=146)** I'll use ttk.Label.
>
> **[2:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=148)** They will be children of the header frame.
>
> **[2:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=152)** And for the image label, I'll specify the image property with self.logo.
>
> **[2:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=159)** Next, I'll create my label with the thanks message.
>
> **[2:42](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=162)** Again, ttk.Label, it'll be a child of my header frame.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=167)** And I'll set the text for this label to say, we'll say, Thanks for Exploring!
>
> **[2:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=174)** And then last, I need to create that third label, which has the instruction message for the user.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=179)** Again, it's a child of the header frame.
>
> **[3:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=182)** And the text for that label will be, well, this is going to be a long text, so I'll use a little Python trick here.
>
> **[3:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=188)** If I want to write a string spanning multiple lines, I can actually put it in a list.
>
> **[3:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=193)** So I'll do, We're glad you chose Explore California for your recent adventure.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=204)** We can just go on to the next line here.
>
> **[3:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=206)** Please tell us what you thought about the Desert to Sea tour.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=216)** This is this little trick here, I used open and closed parentheses so I could put strings across multiple lines, and they'll be combined together as a single string.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=225)** That's just purely for code readability.
>
> **[3:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=228)** Now, as I've pointed out, all three of these labels are children of the header frame.
>
> **[3:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=234)** And since they're labels and they won't be changing their contents throughout the course of the program's execution, I don't need to store them into local variables to reference later.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=243)** So that completes the top section of the code for the frame header.
>
> **[4:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=246)** Now let's create the second frame to store the contents.
>
> **[4:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=250)** I'll call this one frame_content.
>
> **[4:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=255)** And again, we'll create it with the ttk.Frame constructor, and it'll also be a child of the master top level window.
>
> **[4:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=263)** If you remember back to our list, there are three labels that exist within this frame.
>
> **[4:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=269)** They will all be children of the new content frame we created.
>
> **[4:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=273)** The first one is for the name, and I'm just going to copy and paste this.
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=283)** The other ones were for email and, finally, comments.
>
> **[4:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=290)** Again, these are labels that aren't going to be changed, so I don't need to keep a variable reference to those label objects.
>
> **[4:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=297)** Now, to create my entry and text fields, since I will need to be accessing those later, using the Git methods, I'll need to store references to those objects into class variables.
>
> **[5:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=308)** I'll create a class variable for the entry name, self.entry_name.
>
> **[5:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=315)** And I'll create the entry widget using the ttk.Entry constructor.
>
> **[5:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=319)** The entry widget exists inside of that content frame, so it's a child of the content frame, and I'll give it a width of 24 characters.
>
> **[5:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=328)** Now I'm going to copy this line because we're going to do basically the exact same thing for the email entry field.
>
> **[5:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=337)** And then we'll also create, instead of an entry widget, we'll use a text widget to store the comments because they need to span multiple lines.
>
> **[5:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=344)** And if you remember, the text widget is not a themed Tk widget, so we'll create it without using the ttk prefix because it's not coming from the ttk module.
>
> **[5:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=354)** It's a child of the frame, for content, and we'll give it a width of 50 and a height of 10 characters.
>
> **[6:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=364)** Now, the last two widgets that I need to create for my GUI are those buttons at the bottom.
>
> **[6:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=369)** So I'll create the ttk.Button, self frame_content, and the text for that button will be Submit.
>
> **[6:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=379)** And then we'll just copy this button and create a copy of it for the Clear button.
>
> **[6:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=384)** And the Submit and Clear buttons, I don't need to store copies of those into local variables because they'll just be executing commands.
>
> **[6:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=390)** I don't need to reference those buttons once they've been created and placed.
>
> **[6:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=394)** So that completes the list of widgets I needed to create for my feedback form.
>
> **[6:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=399)** If I save this file and I run it, I have to fix my error.
>
> **[6:46](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=406)** I accidentally swapped frame and header here.
>
> **[6:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=415)** Get those in the right order, save that, and run it again.
>
> **[7:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=420)** And now you'll see it just creates a top level Tk window, but we don't have any widgets displayed because we haven't used the geometry manager yet.
>
> **[7:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/creating-the-widgets?u=76281980&t=427)** And that's exactly what we'll do in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), finally, (2), let (1), this. (1), module (1)
> **Code Identifiers:** frame_content (2), tour_logo (1), entry_name (1)
> **CLI Commands:** python (1), git (1)
> **Env Vars:** gui (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Laying out of the widgets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=0)** - [Instructor] I've created the widgets.
>
> **[0:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=2)** Now it's time to place them on the window using the Geometry Manager.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=6)** And to figure out where to put them, let's refer back to our planning diagram.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=11)** I'm going to begin by organizing the two frames which are both children of the master window.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=16)** Since the two frames stack on top of each other, the easiest geometry manager to use here would be the Pack Manager.
>
> **[0:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=23)** We'll continue editing the code from the point we left off at the end of the last video.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=28)** The place the header and content frame into my window using the Pack Manager, I'll call self.frame_header and then .pack, and I'll do the same down here for the content frame, self.frame_content.pack.
>
> **[0:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=45)** And by calling the pack method without any parameters, it'll place those frames against the top of the window and will pack them into order in which I call the pack method.
>
> **[0:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=55)** So it'll pack the header frame at the top and then the content frame just below it.
>
> **[1:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=60)** It's important to note that it did not just add the pack method to the end of the frame constructor method.
>
> **[1:05](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=65)** As you've seen in previous videos, if I did that, then the value which is returned from the pack method, which is none, is what would actually be stored here in my frame header variable.
>
> **[1:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=75)** That wouldn't work well down here when we try to create our labels 'cause they'd be told they don't have any parents.
>
> **[1:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=80)** With those two frames in place, let's just focus on the widgets contained in the top header frame.
>
> **[1:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=86)** The layout of these widgets is a bit more complex than the frames were so I'm going to use the Grid Geometry Manager to organize them.
>
> **[1:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=93)** To figure out which row and column to place each widget in, I'll draw imaginary grid lines between each widget.
>
> **[1:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=99)** With those lines in place, it's easy to see that the Header label belongs in the grid cell at row zero, column one, and the Message label belongs in the row below it, which will be cell at row one, column one.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=114)** The Logo label would be a bit trickier to organize because it spans across two rows.
>
> **[1:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=119)** We'll tell the Grid Manager to put it in the cell at row zero, column zero, and to span across two rows by setting the rowspan property.
>
> **[2:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=129)** Since we don't save these labels to variables, like we did with the frame constructor, we can add the grid method directly to the widgets constructor method.
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=138)** So here I'll add grid directly to the end of the Label constructor.
>
> **[2:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=142)** And we know that the image needs to go into row zero, column zero, and we need to specify it to have a rowspan of two.
>
> **[2:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=153)** For the header image, we'll put that in grid row zero, column one, and then for the instructional message, we'll put that in grid cell row equals one and column equals one.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=171)** To check that I put everything in the correct place, I'll save and run the program real quick.
>
> **[2:58](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=178)** Yup, all of the widgets are in the right place.
>
> **[3:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=181)** However, I don't like how this long message stretches the window horizontally so I'm going to configure the wraplength property for that label.
>
> **[3:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=190)** I'll set wraplength equal to 300 so it'll be 300 pixels wide, and now if I save and run that program, it wraps and looks a little more reasonable.
>
> **[3:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=204)** I do see a small typo I put there so I'll fix that real quick.
>
> **[3:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=210)** Let me just do a little code cleanup here to help with readability.
>
> **[3:34](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=214)** And now we'll move on to the content frame to place those widgets.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=220)** We'll have to do the same thing for the content frame that we did for the header frame.
>
> **[3:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=224)** Notice that I've given these widgets their own grid coordinates starting with zero zero.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=229)** And that's because they're being managed by different parent frame than the widgets that were in the header frame.
>
> **[3:55](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=235)** We can quickly see that the Name label belongs in row zero, column zero, the Email label belongs in row zero, column one, and the Comments label belongs in row two, column zero.
>
> **[4:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=249)** The Name entry box goes in row one, column zero and the Email entry box goes in row one, column one.
>
> **[4:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=258)** The text box is another interesting case where widget spans multiple cells.
>
> **[4:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=263)** We'll use the Grid Manager to put it in row three, column zero and set the columnspan property to make it spread across the two columns.
>
> **[4:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=272)** Finally, the two buttons are both on row four with the Submit and Clear Buttons being in column zero and column one respectively.
>
> **[4:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=281)** Now that I figured out the coordinates for each widget, I'm ready to write the code.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=285)** Since I'm not storing the labels in a variable, I can add the grid method directly to the Label constructor.
>
> **[4:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=292)** I'll scroll down here.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=293)** We know that the Name label is going in grid cell at row zero, column zero, the Email label will go in the grid cell at row equal zero, column is one, and then the Comments grid cell will go in row two, column zero.
>
> **[5:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=315)** Next I need to use the grid method on the entry and text widgets.
>
> **[5:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=319)** Now since I am saving those two variables, you don't want to call those grid methods directly on the widgets so I'll call them on the variables after the widgets have been created.
>
> **[5:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=329)** So I'll place the entry field for name at row equals one, column equals zero.
>
> **[5:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=340)** For email, we'll place it at row equal one, column equal one, and for text, we'll place that at row equal three, column equal zero, and remember with the comments field, it spanned across two columns so we need to specify the columnspan property as being two.
>
> **[6:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=364)** Now for the last two widgets, the buttons, we can directly add the grid method to those and those existed in row four, column zero, and row four, column one.
>
> **[6:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=381)** By drawing the diagram first and then drawing a grid over it, it became fairly straightforward to determine which row and column each of these widgets needed to be placed in.
>
> **[6:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=390)** So now that we've written the code, let's save and run it, and make sure everything is in the right place.
>
> **[6:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=396)** That's a good start.
>
> **[6:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=397)** All of the widgets are in the correct relative position to each other but I'm not happy with how they're spaced out.
>
> **[6:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=403)** Notice that the widgets butt right up against the side of the master window without any buffer.
>
> **[6:48](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=408)** To fix that, I'm going to add five pixels of padding in the x direction to each of the grid cells in the content frame.
>
> **[6:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=416)** I'll do that by adding the padx property and setting it to five, which stands for five pixels.
>
> **[7:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=422)** I'm just going to copy and paste this down into all of the grid methods.
>
> **[7:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=431)** Now see how that looks.
>
> **[7:15](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=435)** Better, there's a little bit of buffer around the edge.
>
> **[7:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=438)** There are still some things in regards to spacing we want to tweak but we'll fix those later with the style section.
>
> **[7:23](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=443)** Now let's tackle alignment.
>
> **[7:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=446)** By default, the Grid Geometry Manager will put widgets at the center of the grid cells.
>
> **[7:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=450)** Since the entry widgets are much wider than the labels directly above them, they're stretching out the grid cells horizontally and the labels are being centered over the entry widgets.
>
> **[7:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=460)** I want the labels to sit on the top left corner of the entry widgets.
>
> **[7:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=463)** And to accomplish that, I can use the sticky property of the Grid Manager to stick them to the southwest or bottom left corner of their cells.
>
> **[7:52](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=472)** I'll go back to where I create those labels and in the grid method, I'll add the sticky property with southwest as the value.
>
> **[8:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=483)** Copy and paste that for each of those three.
>
> **[8:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=486)** And then I also want to do something similar with those buttons.
>
> **[8:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=489)** I want to move the buttons closer to the middle of the form.
>
> **[8:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=492)** So I'm going to stick the Submit button to the east side or right edge of its cell by using the sticky equals east command.
>
> **[8:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=500)** And then I'm going to stick the Clear button to the left side of its cell by using the sticky equals west command.
>
> **[8:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=509)** We'll save that and run it.
>
> **[8:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=513)** Now that all of the widgets are more or less where I want them, the size and spacing issues will get fixed later when I apply styles to the widgets.
>
> **[8:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/laying-out-of-the-widgets?u=76281980&t=520)** In the next video, I'll make the GUI actually do something by tying actions to the buttons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (2), continue (1), finally, (1), default, (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** frame_header (1), frame_content (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1), stands for (1)
> **Env Vars:** gui (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** note that (1)

#### Binding to events
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=0)** - [Instructor] Now that the widgets are all in place it's time to make the survey form actually do something useful.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=6)** If you remember back to the initial requirements, when the submit button is pressed it'll need to do three things.
>
> **[0:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=12)** It'll print the contents of the input field to the console output.
>
> **[0:16](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=16)** It will clear the current contents of the input fields.
>
> **[0:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=19)** And, it will notify the user that their comments were successfully submitted.
>
> **[0:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=25)** When the clear button is pressed it'll just erase the contents from the entry and text widgets.
>
> **[0:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=30)** To accomplish these tasks I'm going to define a command callback method for each of the buttons that will be executed when they're pressed.
>
> **[0:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=38)** I'm going to begin by creating two methods inside of the feedback class.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=43)** I'll create them after my init method.
>
> **[0:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=45)** I'll call one method submit, and since it's inside of a class it needs to take a parameter of self.
>
> **[0:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=53)** I'll call the other method clear.
>
> **[0:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=57)** I'm going to fill out the clear method first.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=59)** To erase the contents of the entry and text fields I'll use the delete method for each one of those widgets.
>
> **[1:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=64)** For the entry field I'll do the entry.name first.
>
> **[1:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=68)** I'll call the delete method, and if you remember the delete method takes two indices, the beginning and end of the range to delete, and so I want to delete the entry field all the way from the beginning to the end.
>
> **[1:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=81)** I'll copy this line of code 'cause I want to do the exact same thing for the email field.
>
> **[1:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=88)** Now to do it for the text comments field, the delete method also takes a beginning and end index but if you remember for text widgets those indices are a little more complex.
>
> **[1:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=101)** So the index at the beginning of the text widget is 1.0 which refers to line one character zero, and the end can also be referenced using the magic end phrase.
>
> **[1:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=114)** That's everything I need for the clear method so let's move on up to the submit method.
>
> **[1:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=119)** In the submit method I'm going to retrieve the values from the entry name, email, and text comment fields and print those out to the console.
>
> **[2:08](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=128)** I'll create a print command, and I'll print out the phrase name and then I'll use a format command to insert the contents of the entry field there.
>
> **[2:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=138)** So I'll call format, access that entry field, entry_name, and then call the get method.
>
> **[2:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=146)** So the get method will retrieve the value from the entry field using the format to insert it into this string and so it'll print out a line that says name and then the input information.
>
> **[2:37](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=157)** I'll copy that and do it one more time, this time for the email.
>
> **[2:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=164)** Then we'll do it one more time for the comments.
>
> **[2:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=171)** That's a text widget and the git command for the text widget takes two parameters.
>
> **[2:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=177)** You have to provide it with a range of text to retrieve and so I want to get everything out of that comments field so I'll provide the beginning and end indices.
>
> **[3:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=186)** I just want to point out that for this example we're using print statements to print that contents to the entry field but in a real application this submit method is where you could collect the information and store it to a database or email it to a certain address, whatever your program needed to do.
>
> **[3:22](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=202)** Now, after we've printed out those values the requirements said that we need to clear the entry fields and we can do that by calling our clear command that we just created.
>
> **[3:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=212)** And then finally I need to notify the user that their comments were successfully received and a popup window would be a good way to do that.
>
> **[3:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=220)** So to use a popup window I'm going to import the tkinter message box module.
>
> **[3:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=225)** I call from tkinter, import messagebox, and we learned about this in the video on file dialogues.
>
> **[3:54](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=234)** Then I'll create a message box by calling messagebox.showinfo, and then I need to provide a title and a message for that message box.
>
> **[4:03](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=243)** So my title will say explore California feedback
>
> **[4:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=251)** and the message will just let the user know that their comments were submitted.
>
> **[4:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=259)** That should complete my two callback methods.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=261)** So now that we've created the callback methods let's connect them to those buttons.
>
> **[4:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=265)** For the submit button I'll add the command property and point it to self.submit and then for the clear button I'll also add a command property and point it to self.clear.
>
> **[4:38](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=278)** Now it's time to test.
>
> **[4:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=280)** File + save, and run.
>
> **[4:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=283)** We have our entry fields.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=285)** I can enter my name here.
>
> **[4:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=287)** I can enter my email, to barron@[example.com](https://example.com), and a little bit of feedback.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=293)** The tour was great.
>
> **[4:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=297)** If I hit submit we have an error.
>
> **[5:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=301)** I forgot the s on comments, here.
>
> **[5:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=307)** That's important.
>
> **[5:09](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=309)** We'll run that one more time.
>
> **[5:13](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=313)** Now, if I enter my input information.
>
> **[5:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=320)** The tour was great, and submit.
>
> **[5:24](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=324)** You'll see it prints out the three input fields and it also creates a popup message box letting me know that the comments were successfully submitted.
>
> **[5:33](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=333)** And you'll notice that the input information has been cleared.
>
> **[5:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=336)** Also if I just have information in there and call the clear method it'll clear out those boxes.
>
> **[5:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=343)** So everything is in place now and functioning correctly with my feedback form.
>
> **[5:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/binding-to-events?u=76281980&t=347)** There's one final step I want to take before calling it done and that's to give it some style.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), self (3), let (3), class. (1), module (1)
> **CLI Commands:** make (1), git (1)
> **Code Identifiers:** entry_name (1)
> **URLs:** [example.com](https://example.com) (1)
> **Versions:** 1.0 (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Finishing the GUI with style
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=0)** - [Narrator] At this point my feedback form is built and fully functional, but it still doesn't look that good.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=6)** The default gray background is kind of drab, and the fonts in the text and entry fields are different.
>
> **[0:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=11)** The final step in building my feedback form GUI is to modify its style and appearance to give it a unique, professional look.
>
> **[0:19](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=19)** The first thing I recommend doing when you're working with a brand new top-level window is to change the text on the window's title bar from the default Tk to something meaningful.
>
> **[0:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=31)** We can do that by calling the master root window and using the title method and we'll give a label of Explore California Feedback.
>
> **[0:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=43)** Next, I also want to prevent the user from being able to resize my survey window, and so I'll configure that by using the resizable method on the master window, and I'll pass in False, False.
>
> **[0:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=56)** The default gray background is rather boring, so I want to change it to something inline with the Explore California brand.
>
> **[1:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=62)** I can change my background color for the master window by using the configure method.
>
> **[1:07](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=67)** Type master.configure(background =, and I'm going to pass in a hex value #e1 d8 b9, and this is the hex value that corresponds to the background shade of brown which matches the desert to sea logo.
>
> **[1:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=85)** Now, that only changes the color of the master window's background.
>
> **[1:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=89)** All of the widgets still have a default gray for their background.
>
> **[1:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=92)** I'll demonstrate that by running it.
>
> **[1:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=95)** You can see a little bit of brown around the back there, but my other widgets are still covered in gray.
>
> **[1:41](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=101)** Rather than change the background of each of those widgets individually, we can use the ttk styles object to modify the default background for each widget type.
>
> **[1:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=110)** I'll create a styles objects which I'll save to a class variable called style.
>
> **[1:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=116)** Using the ttk.Style constructor method.
>
> **[2:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=120)** Now, using the style object I can configure the styles for the different widgets within my program.
>
> **[2:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=126)** So I'll call self.style.configure.
>
> **[2:10](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=130)** And first, let me configure the background that I'll use for the frames.
>
> **[2:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=134)** The name for the frame style is TFrame.
>
> **[2:17](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=137)** We learned about this in the earlier video on the style object.
>
> **[2:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=141)** And I'll configure the background for that to be the same as my master window.
>
> **[2:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=149)** I'll do the same thing with the style object to configure the background for the TButton.
>
> **[2:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=159)** To be the same.
>
> **[2:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=160)** And I'll just copy this line.
>
> **[2:43](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=163)** We'll also configure the label to have the same background color.
>
> **[2:47](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=167)** Now, all of those elements should have the same background.
>
> **[2:50](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=170)** Let's run the code to check.
>
> **[2:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=173)** Sure enough, things are starting to look a little bit better.
>
> **[2:56](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=176)** So let's focus on the font.
>
> **[2:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=179)** I want to customize my labels to use a size 11 Arial font, and I can do that here in the configure statement by configuring the font property, and I'll use a list with Arial specified as the font, and I'll use size 11.
>
> **[3:14](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=194)** So now all the labels in my program will use size 11 font.
>
> **[3:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=198)** Except that's not exactly what I want.
>
> **[3:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=201)** If I look back at the program.
>
> **[3:25](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=205)** I want this Thanks for Exploring message to be much larger and bolder than the lower instructional message to the user.
>
> **[3:31](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=211)** So let me create a unique style to use for that header statement.
>
> **[3:36](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=216)** Going back here I'm going to copy the TLabel statement, and now I'm going to create a new type of label style called Header.TLabel.
>
> **[3:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=229)** We don't need to configure the background for that because it'll be the same as the label background which'll be inherited into TLabel, but we do want to change the font.
>
> **[3:57](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=237)** Instead of using size 11 we use size 18, and we'll make it bold.
>
> **[4:02](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=242)** So now all of my labels will have the same background color, the regular labels will use size 11 font, and the header label will use size 18 bold font.
>
> **[4:12](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=252)** Now that I've created that style I also need to tell my header label to use that style, and I can do so by setting the style property.
>
> **[4:21](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=261)** Style = Header.TLabel.
>
> **[4:26](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=266)** The last thing we'll need to configure are the fonts for the input fields.
>
> **[4:30](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=270)** Since the text widget is not a themed Tk widget, we cannot use the ttk style object to configure its fonts, but we can configure the font for the Tk widget directly by configuring the font property in the constructor method.
>
> **[4:45](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=285)** Down here I'll set font = Arial, and we'll use size 10 in the text widget.
>
> **[4:53](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=293)** Now, since the entry widgets are themed Tk widgets we should be able to configure the font property for the t-entry style once to change the default font for both of them.
>
> **[5:04](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=304)** However, there's currently a bug which prevents the font configured for the t-entry style from properly displaying in the entry widget.
>
> **[5:11](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=311)** I submitted a bug report to the Python community about this issue, and it appears the problem exists somewhere within the Tk framework.
>
> **[5:18](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=318)** Hopefully that'll be resolved soon, but at the time of this recording the problem still exists so I'll have to work around it by configuring the fonts individually for each of the two entry widgets.
>
> **[5:29](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=329)** I'll specify font = ( Arial , 10 ).
>
> **[5:35](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=335)** And I'll just copy that and put that down in the e-mail entry widget as well.
>
> **[5:40](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=340)** That completes the style changes to my survey form GUI.
>
> **[5:44](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=344)** Let's save and run the program, and see how it looks.
>
> **[5:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=349)** Ah, much better.
>
> **[5:51](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/finishing-the-gui-with-style?u=76281980&t=351)** It's now clean, professional looking, and ready for the public to see.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (15)
> **Code Keywords:** let (5), pass (2), type. (1), self (1), public (1)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** gui (2)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=0)** - [Barron] Congratulations!
>
> **[0:01](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=1)** You've reached the end of this course on Python GUI Development with Tkinter.
>
> **[0:06](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=6)** In this course, we've learned how to create and configure some of the most commonly used Tk widgets, how to display and organize them with the various geometry managers, and how to tie user actions and events back to execute program code.
>
> **[0:20](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=20)** As you're writing your Tkinter applications, I recommend keeping the Tk documentation pages found at tcl.tk handy.
>
> **[0:28](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=28)** They provide detailed information about all of the capabilities of the Tcl/Tk framework.
>
> **[0:32](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=32)** I use them regularly as reference to remember the properties and commands available for the different Tk widgets.
>
> **[0:39](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=39)** For Python-specific information about the Tk intermodule, the module's Python dock provides a compact description and examples of the most commonly used Tk intermethods and properties.
>
> **[0:49](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=49)** With your knowledge from this course, and those documents as your reference, you're prepared to go forth and build custom, stylized user interfaces for all of your Python applications.
>
> **[0:59](https://www.linkedin.com/learning/python-gui-development-with-tkinter-2/next-steps?u=76281980&t=59)** Happy programming!

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** module (1)
> **Env Vars:** gui (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [barron] (1)


## Instructor

- [[Barron Stone]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Tkinter

## Path Context

### In [[Advance Your Skills in Python]]
← [[Python Automation and Testing]] | **5 of 7** | [[Create an Open-Source Project in Python]] →

## Appears In

- [[Advance Your Skills in Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)