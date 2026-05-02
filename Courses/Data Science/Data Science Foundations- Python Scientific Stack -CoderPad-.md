---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-science-foundations-python-scientific-stack-coderpad
url: "https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad"
duration_minutes: 145
duration: 2h 25m
level: Intermediate
updated: 11/9/2022
learners: 44400
skills:
  - Python (Programming Language)
  - Data Science Foundations
  - Data Science
exercise_files: false
github: "https://github.com/LinkedInLearning/data-science-foundations-python-scientific-stack-3084641/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG2_xrJ2bSZsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582946722?e=2147483647&amp;v=beta&amp;t=jZiEOWL9RZujkXmIVtRAtwNBWlw-7GjmPTRkk1ioGDo"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python Skills for Data Science]]'
prev_courses:
  - '[[Python For Data Science And Machine Learning Essential Training Part]]'
next_courses:
  - '[[Python Data Analysis]]'
path_nav: '[{"path":"Advance Your Python Skills for Data Science","position":3,"total":6,"prev":"Python For Data Science And Machine Learning Essential Training Part","next":"Python Data Analysis"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-science-foundations
  - skill/data-science
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Science%20Foundations-%20Python%20Scientific%20Stack%20-CoderPad-.md)

![Data Science Foundations: Python Scientific Stack [CoderPad]](https://media.licdn.com/dms/image/v2/D560DAQG2_xrJ2bSZsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582946722?e=2147483647&amp;v=beta&amp;t=jZiEOWL9RZujkXmIVtRAtwNBWlw-7GjmPTRkk1ioGDo)

# Data Science Foundations: Python Scientific Stack [CoderPad]

> Join instructor Miki Tebeka as he dives into the Python scientific stack and shows you how to use it to solve problems. Miki covers the major packages used throughout the data science process: numpy, pandas, matplotlib, scikit-learn, and others. He also guides you through how to load data, analyze data, run models, and display results.This course is integrated with GitHub Codespaces, an instant cl

> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad) | 2h 25m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [The Python scientific stack](#the-python-scientific-stack)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
  - [Setup](#setup)
- [**1. Visual Studio Code**](#1-visual-studio-code) (3 videos)
  - [Use code cells](#use-code-cells)
  - [Extensions to the Python language](#extensions-to-the-python-language)
  - [Understand markdown cells](#understand-markdown-cells)
- [**2. NumPy Basics**](#2-numpy-basics) (9 videos)
  - [NumPy overview](#numpy-overview)
  - [NumPy arrays](#numpy-arrays)
  - [Slicing](#slicing)
  - [Learn boolean indexing](#learn-boolean-indexing)
  - [Understand broadcasting](#understand-broadcasting)
  - [Understand array operations](#understand-array-operations)
  - [Understand ufuncs](#understand-ufuncs)
  - [Challenge: Working with an image](#challenge-working-with-an-image)
  - [Solution: Working with an image](#solution-working-with-an-image)
- [**3. pandas**](#3-pandas) (8 videos)
  - [pandas overview](#pandas-overview)
  - [Loading CSV files](#loading-csv-files)
  - [Parse time](#parse-time)
  - [Access rows and columns](#access-rows-and-columns)
  - [Calculate distance](#calculate-distance)
  - [Display speed box plot](#display-speed-box-plot)
  - [Challenge: Taxi data mean speed](#challenge-taxi-data-mean-speed)
  - [Solution: Taxi data mean speed](#solution-taxi-data-mean-speed)
- [**4. Folium and Geospatial Data**](#4-folium-and-geospatial-data) (5 videos)
  - [Create an initial map](#create-an-initial-map)
  - [Draw a track on map](#draw-a-track-on-map)
  - [Using geospatial data with shapely](#using-geospatial-data-with-shapely)
  - [Challenge: Draw the running track](#challenge-draw-the-running-track)
  - [Solution: Draw the running track](#solution-draw-the-running-track)
- [**5. NYC Taxi Data**](#5-nyc-taxi-data) (8 videos)
  - [Examine data](#examine-data)
  - [Load data from CSV files](#load-data-from-csv-files)
  - [Working with categorical data](#working-with-categorical-data)
  - [Work with data: Hourly trip rides](#work-with-data-hourly-trip-rides)
  - [Work with data: Rides per hour](#work-with-data-rides-per-hour)
  - [Work with data: Weather data](#work-with-data-weather-data)
  - [Challenge: Graphing taxi data](#challenge-graphing-taxi-data)
  - [Solution: Graphing taxi data](#solution-graphing-taxi-data)
- [**6. scikit-learn**](#6-scikit-learn) (8 videos)
  - [scikit-learn introduction](#scikit-learn-introduction)
  - [Linear regression](#linear-regression)
  - [Understand train/test split](#understand-traintest-split)
  - [Preprocess data](#preprocess-data)
  - [Compose pipelines](#compose-pipelines)
  - [Save and load models](#save-and-load-models)
  - [Challenge: Handwritten digits](#challenge-handwritten-digits)
  - [Solution: Handwritten digits](#solution-handwritten-digits)
- [**7. Plotting**](#7-plotting) (9 videos)
  - [Overview of matplotlib](#overview-of-matplotlib)
  - [Use styles](#use-styles)
  - [Customize pandas output](#customize-pandas-output)
  - [Plotting with pandas](#plotting-with-pandas)
  - [Use Matplotlib with pandas](#use-matplotlib-with-pandas)
  - [Tips and tricks](#tips-and-tricks)
  - [Other plotting packages](#other-plotting-packages)
  - [Challenge: Stock data bar charts](#challenge-stock-data-bar-charts)
  - [Solution: Stock data bar charts](#solution-stock-data-bar-charts)
- [**8. Other Packages**](#8-other-packages) (6 videos)
  - [Other packages overview](#other-packages-overview)
  - [Go faster with Numba](#go-faster-with-numba)
  - [Understand deep learning](#understand-deep-learning)
  - [Work with image processing](#work-with-image-processing)
  - [Understand NLP: NLTK](#understand-nlp-nltk)
  - [Working with bigger data](#working-with-bigger-data)
- [**9. Development Process**](#9-development-process) (5 videos)
  - [Development process overview](#development-process-overview)
  - [Understand source control](#understand-source-control)
  - [Learn code review](#learn-code-review)
  - [Testing overview](#testing-overview)
  - [Testing example](#testing-example)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The Python scientific stack](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=0)** - [Miki] [[Data Science]] is booming, and [[Python (Programming Language)|Python]] is a major player there.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=5)** Hi, I'm Miki Tebeka, and together we'll crunch some data, train some models, create visualizations, and generally have fun with Python and data.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=16)** We'll solve many exercises while learning.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=19)** I highly recommend that you follow along and write code.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=22)** From my experience, there's some magic happening between the fingers and the brain that greatly improves the learning process.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=30)** Don't be afraid to make mistakes, Python is very forgiving language and recovering from errors is easy.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=38)** During this course we'll cover tools and techniques that I find useful in my daily work processing data and gaining insights from it.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/the-python-scientific-stack?u=76281980&t=46)** I hope you'll find these tools and techniques beneficial as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Data Science]] (1)
> **CLI Commands:** python (3), find (2), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [miki] (1)

#### [What you should know](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is about [[Python (Programming Language)|Python]] and [[Data Science]].
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=4)** It'll help if you know a bit of both.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=7)** I'm not going to teach you Python.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=8)** If you don't know Python, check out our offerings and then come back.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=14)** I'm not going to teach you the basics of data science either.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/what-you-should-know?u=76281980&t=17)** You can get by with a little math.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Data Science]] (2)
> **CLI Commands:** python (3)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]].
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=15)** It allows for real-world hands-on practice that mirrors [[Software Development]] in the workplace.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=21)** This course was created using GitHub Codespaces.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=24)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=31)** One click and you're ready to go.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=34)** First, make sure you've signed up for a free GitHub account and that you've logged in.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=38)** You just see your profile icon right here.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=41)** When you go to the repository for one of our courses, look for the Code button.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=49)** Click on Create codespace.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=51)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=57)** Once it's done, you'll enter the code editor environment.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=61)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=68)** The cloud editor's menu lives in a hamburger icon inside the activity bar.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=73)** The menu will let you see the keyboard shortcuts for your operating system.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=77)** Let's find the shortcut for the Command Palette.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=80)** Look in the hamburger menu, under View, and then look for the keyboard shortcut for your operating system.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=88)** The activity bar has the most common tools you'll need to work with projects.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=92)** You can, for example, show or hide the explorer, do a search and replace for content, manage features of the repository, and much more.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=105)** By the way, if for any reason you lose the activity bar, you can get it back using the Command Palette.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=115)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=120)** Those can be found in the Extensions panel.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=126)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=132)** If you do that, don't panic.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=134)** Codespaces saves everything you're doing on a virtual machine.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=138)** You can always get the codespace back for this repo by going to the Code menu and finding your codespace right here.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=151)** Notice that it even remembered that I had opened the Extensions panel.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=159)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=164)** You can tell because there's a single branch when you click on the Branch icon on the status bar.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=169)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=175)** Your instructor will let you know what the folder structure is for your course.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=181)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=190)** To create your own fork, you can click on the Fork button on the repository.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=197)** I'm going to hit Create fork.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=201)** I have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=213)** This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=220)** Notice that the URL of the repository is slightly different.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=224)** Let's go ahead and make a simple change to this file right here.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=234)** I'm going to save it.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=237)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=243)** In the Source Control panel, you can also see a 1 for the change that we just made.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=248)** Let's go ahead and try to commit this change.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=254)** I'm going to hit the Commit button, and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here to commit this onto my own version of the repo.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=270)** I'll hit OK.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=272)** You can also let it go ahead and run [[Git]] [[Fetch]].
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=275)** That way, it'll automatically sync with your forked repo.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=279)** Now, that change will be stored in your own version of this repository.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=284)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=288)** Codespaces will also ask you if you want to create a fork automatically.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=293)** Look for additional course-specific tips from the instructor.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-github-codespaces-with-this-course?u=76281980&t=296)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (6), [[GitHub]] (4), [[LinkedIn]] (2), [[Software Development]] (1), [[Git]] (1)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **CLI Commands:** make (2), find (1), git (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [Setup](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=0)** - [Instructor] This course is using [[GitHub]]'s [[Codespaces]], which mean everything is already preconfigured for you.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=8)** To get started, head over to the repository on GitHub.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=12)** Click on Code, check the Codespaces tab, and click on Create codespace on main.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=19)** And now you are going to wait a bit.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=22)** Once you see Visual Studio starting up, wait a bit before you jump into the code.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=28)** The sign that Visual Studio Code is ready is when you see the "Get started with Jupyter Notebooks" on the right-hand side.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=35)** And you see that the terminal now is free of output.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=39)** Now you can go on, close the terminal and these two [[Windows]], and you're ready to go.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=46)** You have a machine with [[Python (Programming Language)|Python]], all dependencies installed, and Visual Studio Code ready to run everything.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=54)** This is going to save you from all the trouble of installing Python and all the scientific applications.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=60)** But sooner than later, you will need to learn about how to install Python packages with tools such as pip, and also about managing virtual environments.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/setup?u=76281980&t=71)** Go and check our offerings on the subject.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[GitHub]] (2), [[Codespaces]] (2), [[Windows]] (1)
> **Tools:** visual studio (3), github (2), terminal (2), jupyter (1)
> **CLI Commands:** python (3), pip (1)
> **UI Navigation:** click on (2)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Visual Studio Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Use code cells](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=0)** - [Instructor] Writing code when exploring data is a bit different than writing code for applications.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=5)** You write small pieces of code and you want to see them in action.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=10)** For that end Visual Studio Code supports code cells.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=13)** They start with a special comment, so we have a comment and then the two percent signs.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=18)** And you see now that we have some actions that we can do on the top.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=22)** You can run the cell either by clicking on one cell or hitting shift and enter.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=30)** This is going to open an interactive prompt on the right.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=34)** The first time you run a cell, this might take a bit of time.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=39)** And here we see the result.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=41)** Shift and enter will also automatically advance to the next cell, so you can run the next cell again with shift and enter.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=48)** The interactive prompt can display more than just text.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=51)** Here we have a piece of code that is going to display the sin of x between minus six and six.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=56)** If you don't understand the code, don't worry about it.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=60)** We'll get to it.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=61)** So shift and enter again.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=63)** And now we can see also the chart.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=66)** Let's try and run the code from the command.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=70)** So I'm going to open a terminal with new terminal, and then [[Python (Programming Language)|python]] Ch01/01_01/code_cells.py,
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=83)** and nothing is being printed out.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=86)** The reason is that the interactive prompt is what is known as a REPL: read, eval, print and loop.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=94)** When you run code from the command line, it only does read and eval.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=98)** It's not going to print unless you explicitly print.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=101)** And it's not going to loop unless you do a loop.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=104)** Let's close the terminal.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=106)** You can also write code in the interactive terminal without adding it to your code.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=113)** So let's do 355 divided by 113, and I can hit play to run the code.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=119)** And this is an approximation of pi.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=123)** Sometimes you run Command and it takes a lot of time, and you forget to add the result to a variable.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=129)** If you look at Visual Studio Code, you will see small numbers out here.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=133)** These are the input and output numbers.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-code-cells?u=76281980&t=135)** So I can do, for example, output number 4 times 10 and run it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Tools:** terminal (4), visual studio (2), command line (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **File Paths:** ch01/01_01/code_cells.py (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** code_cells (1)
> **Env Vars:** repl (1)
> **Analogies:** for example (1)

#### [Extensions to the Python language](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=0)** - IPython which the Visual Studio Code [[Python (Programming Language)|Python]] extension is built on offers extensions to the Python language to make interactive development easier.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=11)** The first extension is called magics.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=14)** They start with a percent sign and when I'm going to run the cell, the PWD Magic is going to tell me the present working directory.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=22)** These extensions are extensions to Python.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=24)** If you're going to run Python on this file, it is going to complain and the execution will fail.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=30)** Some cells work on a single line.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=32)** This is the time magic, and it works on a single line to check how much a sleep of 0.1 seconds takes.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=40)** But this magic sometimes can work on more than a single line.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=43)** Starting with 2% signs.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=46)** These are known as cell magics and I'm going to run this one.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=50)** It is going to time the whole execution of the cell.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=53)** Another extension is running shell commands with the bank sign.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=58)** If I'm going to run this, IPython or the interactive prompt are going to execute the LS command on the Varlog directory and I'm going to see the output.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=68)** You can do fancier stuff, for example assign dirname to a viable, get the output of ls of this dirname when I'm passing it with a dollar sign as a parameter and now I have files which is like a list in Python.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=84)** So I can print out how many files I have.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=87)** Visuals to the code offers more features that will help you become more productive.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/extensions-to-the-python-language?u=76281980&t=92)** Do your homework and learn what it has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), ls (2), make (1)
> **Definitions:** is called (1), known as (1)
> **Env Vars:** pwd (1)
> **Versions:** 0.1 (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Speakers:** - ipython (1)

#### [Understand markdown cells](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=0)** - [Speaker] Markdown is a common format to add accomodation with rich text.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=5)** People even published full books using Markdown in a scientific notation.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=11)** In Visual Studio Code, you can write Markdown cells by adding the Markdown inside square brackets.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=18)** When you run the cell, Visual Studio Code is going to render the Markdown as [[HTML]].
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=23)** So, we have a header and then a list.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=27)** Markdown can do more.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=28)** Here's an example of a link and adding an image.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=34)** Right, so you have [[Python (Programming Language)|Python]].
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=35)** If you're going to click that, this is going to take us to Python and the Python image.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=40)** In scientific documentation, you write a lot of math.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=44)** There is special support for LaTex inside Visual Studio Code markdown cells.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=50)** You write laTex inside the dollar sign and this is the laTex language if I'm going to run this cell now, you are going to see the equation of Euler identity.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=61)** If you're not familiar with laTex it's a language for writing scientific paper and it's a bit out of scope of this video.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-markdown-cells?u=76281980&t=67)** There's a lot of good resource for writing Latex out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[HTML]] (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** latex (3)
> **Tools:** visual studio (3)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)


### 2. NumPy Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [NumPy overview](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=0)** - [Speaker] Let's look at one of the building blocks of the scientific [[Python (Programming Language)|Python]] stack which is NumPy sometimes pronounce NumPee.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=8)** NumPy gives us fast homogenous arrays or matrices math functions, [[Linear Algebra]], randomization, and more.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=15)** You can ask, why do we need matrices when we have python lists?
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=19)** Python lists are powerful and very fast.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=22)** However, since they need to accommodate many use cases there's a performance and memory penalty you pay.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=29)** Let's have a look.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=30)** So here's the Python integer, and if I'm going to run this one, I'm going to get two to the power of 1000, which is great.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=39)** but it's going to take a lot of memory.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=42)** in NumPy, If I'm going to take the N64 and run this cell I'm going to get zero.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=48)** Because what is known as an overflow, the number cannot fit in a 64 bit integer.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=54)** In scientific computation, Usually a 64 or 32 bit integer or float can hold all the values you need.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=62)** under the hood.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=63)** NumPy uses highly optimized C and Fortran code.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=67)** Don't look down at Fortran, the Fortran Compiler can sometimes do optimizations that the C compiler can't.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=73)** especially when dealing with arrays.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=76)** NumPy offer more than speed, selecting, reshaping multiplication and more.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=82)** It also provides a lot of scientific functions.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=84)** All of these functions work both on scalers integers or floats and on arrays.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=90)** So here we have NumPy sine and you compute the sine of 27.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=95)** or we can run sine on an array of three elements and get the sine for every element in the array.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=102)** We import NumPy as np since NumPy has a lot of functions inside.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-overview?u=76281980&t=108)** So instead of doing from NumPy import and then a long list we import NumPy as np, and then np dot np dot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Linear Algebra]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** n64 (1)
> **Definitions:** known as (1)
> **Speakers:** - [speaker] (1)

#### [NumPy arrays](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=0)** - [Instructor] Let's start looking into NumPy arrays.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=2)** So first we input numpy, as np.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=5)** And now, I'm creating an array of three elements with one, two, and three.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=11)** Run the cell.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=12)** And we have an array one, two, and three.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=14)** For starts, arrays look very much like lists.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=18)** We can ask for the len, we can get the second element.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=21)** And arrays are zero-based indexing like the [[Representational State Transfer (REST)|rest]] of [[Python (Programming Language)|Python]].
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=25)** But if you look closer, for example, type of the first element, we see that it's not a Python integer but a numpy.int64.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=33)** You can ask array what is the data type of the array using the dtype attribute.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=38)** When you create an array, NumPy will determine the default type for the array for the input.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=43)** However, you can specify explicitly the data type of the array to be created.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=48)** This here is saying, dtype=np.int32.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=53)** And we are going to get an array of int.32.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=56)** Comparing to int.64, where this takes half the memory, but you need to make sure that all of your values fit inside a 32-bit integer.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=66)** You can multiply an array by itself.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=68)** And what you're going to get is an element-wise multiplication.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=71)** So one times one, two times two, and three times three.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=75)** I talked about NumPy being fast.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=77)** Let's have a look.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=78)** So I'm creating two arrays, each one with 1 million random elements, which are floats.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=84)** And then, I'm going to use the time matrix to see how much time it takes to multiply them.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=90)** And that took 6.27 milliseconds.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=93)** If you'd like to get the dot product of a matrix, use the @ sign, which is the Python Matrix Multiplication Operator.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=102)** If you run the cell now, we are going to see 14, which is a dot product of these two arrays.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=107)** We can move to more dimensions.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=109)** So here's an array with three rows and three columns.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=114)** And we can run this one, and now we can see the array.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=117)** That's a lot of code to write for a small sample matrix.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=121)** Let's use one of the many utilities we have in NumPy to create arrays.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=125)** np.arange, it's very much like Python Range, but returns an array.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=129)** So if you do V equal arange of 12, you are going to get an array from zero to 12.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=136)** And now, we can use the reshape to reshape the array.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=139)** So if you're going to run this one, now we're going to get an array with for rows and three columns.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=146)** So in a single line, we can run mat = np.arange(12).reshape((4, 3)), and then, get our matrix.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=154)** Can call the dot shape attribute to know what is the current shape or how many rows, columns, and maybe, other dimensions the matrix has.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=162)** Let's create another matrix by reshaping the original one.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=166)** Instead of four rows and three columns, three rows and four columns.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=171)** And now, we're going to change a value in this reshaped matrix.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=175)** And then, take a look at the original one.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=178)** And we see that the original matrix is affected as well.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=181)** When you do a reshape, you get a view of the underlying data.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=185)** It's not a copy.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=187)** There are many other methods and function that work with NumPy arrays.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=190)** For example, you can transport the matrix by calling the dot T attributes.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/numpy-arrays?u=76281980&t=196)** You'll pick more as you go, but I think this is enough for understanding the basics of NumPy arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Versions:** 6.27 (1)
> **Speakers:** - [instructor] (1)

#### [Slicing](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] lists support slicing.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=2)** Here's an example.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=3)** nums is a list of 1, 2, 3, 4, 5, and we do a slice from 2 to 4.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=9)** If you're going to run it, you're going to get 3 and 4.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=14)** We start with the index number 2, index number 3, and up to but not including index number 4.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=20)** These are half-open ranges.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=22)** You can do the same for NumPy arrays, so we create a vector with a range and then get a slice of this vector or matrix.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=31)** Slicing is useful since many times you'd like to take a subset of your data for training, testing, and other tasks.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=38)** NumPy takes slicing to a whole new level.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=41)** Let's have a look.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=42)** Let's create an array with three rows and four columns.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=46)** When we take the array at location 0, we are going to get the first row.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=50)** We can also say the second element in the second row, and this is 5, so this one here.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=58)** We can also do it in another way by saying I want 1, 1 and this will give me the same element.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=66)** What happens if you want a column?
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=68)** For a column, we're going to use slicing.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=70)** Say we want all the rows but only the second element for every row, and now we're going to get 1, 5, and 9, which is the first column.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=79)** Note that we'll get a flat array and not an array of ones.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=83)** If you want to get the full array of ones, you will need to reshape, so now we get it in a vertical format.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=89)** You can do slicing on both axes, so all the rows from the second row and the columns from the third column.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/slicing?u=76281980&t=98)** You can also use slicing to set values, so I'm doing the slicing as before, but now equals 7, and now when I'm looking at the array, I'm seeing that the bottom right is all sevens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Learn boolean indexing](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=0)** - [Instructor] Sometimes you'd like to select parts of an array, not by indices but by some logic, say all the values that are bigger than some threshold.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=9)** For this we're going to use Boolean indexing, let's see how it works.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=13)** So we input NumPy and create an array with three elements, let's run it.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=19)** You can index an array with another array in the same shape containing Boolean values, true or false?
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=26)** So here's the array and I'm adding it an index with true or false, true.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=29)** And I'm going to run it, I'm going to get only the elements where the index was true.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=35)** For now this does not seem that helpful, but let's see one more thing and this will make it super useful.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=40)** If I'm doing array bigger or equal to one, I'm going to get a Boolean array with false, true and true, and now I can combine these two and say array at the location where the array is bigger or equal to one, and I'm getting one and two but not the zero.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=58)** You can combine these conditions or mask using Boolean operators.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=63)** However, these are not the normal Boolean operators that we have in [[Python (Programming Language)|Python]].
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=66)** You're going to use 1% for and, the vertical bar or and, the Tilda for no.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=72)** So I have a bigger array now with 10 and I'm saying all the elements that are bigger than two and smaller than seven, note that the parenthesis here is mandatory.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=88)** And here's an example of negation, so everything that is not bigger than seven.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=93)** Usually you're going to write it as everything that is smaller or equal to eight.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=97)** Let's do a more realistic example, we're going to find outliers using the standard score.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=103)** First we're going to create our data.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=104)** So I'm going to create an array of thousand elements with values between zero and 10 with the normal distribution, and then I'm going to add two out outliers at location 33, at location 832.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=117)** Now I'm going to calculate my mask.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=120)** So the mask is where the absolute value of the value itself minus the mean, meaning the distance from the mean, is bigger than two times the standard deviation inside the array, and then I'm going to calculate values in the mask, I'm going to see exactly my outliers over there.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=139)** I can even use this mask to change the values, let's say to the mean of the current array.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=146)** This is an example for the power of Boolean indexing.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=149)** You can do a lot of things in very few line.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=152)** Apart from the cool effect, this is also very fast.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=155)** In numerical Python, you try hard not to do any follow ups.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-boolean-indexing?u=76281980&t=160)** This method of computation is called vectorization and once you use it, everything runs at the sea or photon level of NumPy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), make (1), find (1)
> **Definitions:** is an  (1), is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Understand broadcasting](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=0)** - [Instructor] Let's have a look at the piece of code.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=2)** We input NumPY as p.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=3)** We create a range and then add four to it.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=7)** Let's run this one.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=9)** We added the scalar to a vector.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=11)** NumPY does what makes sense, it adds the scaler to every element of the array.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=14)** This is known as broadcasting.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=16)** Broadcasting work for other dimensions as well.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=20)** So we're going to create three to three matrix and then add a vector of three and then matrix plus the vector.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=29)** And this time we add the vector to every row.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=32)** We can even do a horizontal vector and a vertical vector and add them together.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=38)** NumPY will extend these vectors and when we add them, we'll get a matrix of three by three.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=44)** It'll expand V1 vertically and V2 horizontally to match each other.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=49)** Here's an image from the astroML site that will help you understand what broadcasting is doing.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=54)** This is roughly the operations we just did.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=57)** NumPY tries hard to make broadcasting possible but sometimes it is going to fail.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=63)** I highly recommend you watch "Losing your Loops" by Jake VanderPlas to understand fully what broadcasting can do for you.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=71)** Try to follow what Jake is doing in his kNN example.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-broadcasting?u=76281980&t=75)** Run the code, tinker with the data, and generally, have fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** astroml (1), knn (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Understand array operations](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=0)** - [Instructor] Let's see what an array can offer us.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=2)** So, "import NumPy as np", and then create an array of three rows and three columns.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=7)** Let's run it.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=9)** I'm going to do "v.".
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=11)** You can see a lot of things that can be accessed from the array.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=18)** Let's take a look at some of these attributes.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=20)** So, "v.T" returns the transpose of the matrix, "v.any" will return true since there is at least one element in the array which is true.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=31)** As a reminder, everything in [[Python (Programming Language)|Python]] is true except the zero value numbers, empty collections, none, and of course, false itself.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=40)** We also have "v.all", and this one is going to return false.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=45)** This is because we have one false element at the beginning, which is zero.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=50)** Any and all are useful functions, and you'll find out you're going to use them in various situations.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=55)** Know that the truth value of an array is undefined, so if I'm going to "if v:print (ok)" and run the cell, I am going to get an exception.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=65)** The Zen of Python states that, "In the face of ambiguity, refuse the temptation to guess."
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=72)** Experience shows that it's better to be safe than guess something that would lead to a wrong computation.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=78)** This is why NumPy refuses to guess the truth value of an array, and you will need to be explicit and state either any or all.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=86)** NumPy also provides some mathematicals like min, max, mean, SD, sum, prod, and others.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=92)** Let's take the product of the array, which is zero because we have zero at the beginning.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=97)** This method work by default on the whole array, but you can specify which axis you'd like the operation to happen.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=103)** For example, if you do axis equal one, you'll get the sum of the rows, and if you'll do axis equal zero, you'll get the sum of the columns.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=114)** This will work with array with more than two dimensions as well.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=117)** Just provide the right axis.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=119)** Remember we said that NumPy works hard not to copy anything, but sometimes you do want to copy and mutate an array without affecting the original one.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=130)** For this, you can use the copy method, so V1 is a copy.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-array-operations?u=76281980&t=134)** We change v1, the first element, to be minus one and then look at the original one and see that nothing has changed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understand ufuncs](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=0)** - There are many functions defined in numpy, how many, let's see, will input numpy, and then look at how many elements the dir command returned.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=10)** And you're going to see 603, this might change depending on the numpy version you have.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=16)** We are not going to cover all of the 600 plus attributes, but as you start working with numpy you'll find the ones useful for you and commit them to memory.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=24)** However, there's one aspect of numpy functions I like to discuss.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=28)** So if I'm doing the sine of 90 I'm going to return a number, remember, sine gets its values as radians and not degrees.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=36)** You might wonder when numpy is defining function that's already defined in the built-in math model, the reason is, that we can take creative vector which is np.arange from minus three to three and one numpy sine on that, and it's going to work, going to get the sine of every element in dir, the built-in math sine will not work.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=57)** A lot of numpy functions are ufuncs or universal function, it means they work both on scales, regular numbers and arrays.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=66)** This is very handy and let's us work with the same function regardless of the input type.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=71)** What happens if you like to write your own function?
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=74)** Do you need to check the type of the input every time?
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=77)** Well, you can, but numpy provides an easier way.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=80)** Let's have a look.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=81)** So let's define ReLu, which if N is less than zero return zero, otherwise return N.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=88)** And if you run it on a scaler it is going to work.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=91)** However, if you try to run it on our vector, this is going to raise an exception, it'll try to do if N smaller than zero which is going to return and numpy array, and the true value of a numpy array is not defined.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=107)** What you can do is use the np.vectorize, the N at the beginning meaning we're using the np.vectorize as a decorator.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=115)** If you're not familiar with decorators, we have several courses on the subject, so the same function, but now vectorized.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=123)** And now when we run it, we can run it on the vector but we can also run it on the number, which is something that is not familiar.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=132)** This is an array with one value, however, this array behaved just like a number, so if I'm doing our function on minus two and removing seven from it, I'm going to get minus seven.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=144)** Ufuncs are also NaN aware, which means that if they see NaN, the special floating viral, that means not a number, they will return NaN as well.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-ufuncs?u=76281980&t=153)** So we create an element with NaNs and we get the result with the NaN at that location.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - there (1)

#### [Challenge: Working with an image](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=5)** - [Instructor] Say we have this image of a flower.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=8)** We can use Matplotlib to load this image into memory.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=12)** So, we use the imread method, we create a copy to make it readable, and then I'm going to use plt to show it.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=20)** If you're going to run the cell, you're going to see the flower image.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=26)** If you look at the type of the image, you're going to see that it's a numpy array.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=31)** And when we look at the shape of the array, we see it's 1200x900 on three.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=36)** These are the number of pixels, so 1200 on 900, and three values for the color, red, green and blue.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=44)** What I want you to do is draw a blue square around the flower.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=48)** The top left should be at 190 on 350.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-working-with-an-image?u=76281980&t=51)** The bottom right should be on 680 and 850, and the line width should be five.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Working with an image](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=5)** - [Computer User] Let's have a look at my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=7)** First, we're going to run the code.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=9)** So we're going to load the image.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=11)** And we're going to print the type and the shape.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=17)** Now we're going to look at our code.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=19)** Let me hide the left side.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=21)** So we define the top left X and the top left Y, and the bottom right X and the bottom right Y and the width.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=29)** Also the color, which is blue, right?
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=32)** We have RGB, red, green, blue.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=34)** Red and green are zero and blue is full.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=37)** And now we draw the lines using slicing.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=39)** So from the top left to the top left plus width up to the top left Y to the bottom right Y equal color.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=47)** This is the top line.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=48)** Then the bottom line, which is bottom right X.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=51)** The bottom right X plus width, top left Y, bottom right Y.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=53)** And then we're doing the vertical lines.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=58)** So top left X to bottom right X, top left Y to top left Y plus the width.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=64)** And then finally the right line.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=65)** Top left X to bottom right X, bottom right Y minus width to bottom right Y.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=71)** And then we are going to show the image.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=74)** So let's scroll a bit up and run this cell.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-working-with-an-image?u=76281980&t=77)** And now we see the picture and we have a square around the flower.

> [!info]- Semantic Content
>
> **Env Vars:** rgb (1)
> **Analogies:** picture (1)
> **Speakers:** - [computer (1)


### 3. pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [pandas overview](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=0)** - [Instructor] Data in the real world is often composed from values that have mixed types.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=5)** Some can be numeric: age, for example.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=8)** Some can be textual: names, for example.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=11)** Some can be time, like the year of birth, etcetera, etcetera.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=16)** [[Pandas (Software)|Pandas]] is a library built for real-world data, data that is messy, incomplete, and from various types.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=23)** Once pandas was released, it was adopted by the scientific community as the tool for dealing with data.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=30)** Pandas also excels with working with time-series data.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=34)** You can easily select subsets of data by time and also change the frequency of the events to suit your needs.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=42)** You can think of pandas as providing in-memory [[Microsoft Excel|Excel]] data sheet, which we call DataFrame, with many, many extra features.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=51)** Panda's DataFrame can process large amount of data.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=54)** I've personally worked with millions of rows, and it can draw charts, join other DataFrames, [[Pivot Tables]], and more.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=62)** Apart from being very useful, pandas is one of the best-documented projects out there.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=67)** Documentation contains many, many code examples.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/pandas-overview?u=76281980&t=71)** It is also worth reading the book, "Data Analysis with [[Python (Programming Language)|Python]]," which was written by panda's creator, Wes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[Microsoft Excel|Excel]] (1), [[Pivot Tables]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Loading CSV files](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=0)** - [Instructor] Going to have a look at the log of one of my runs a few years back.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=5)** We'll start by looking at the data, which is in CSV format.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=9)** [[Pandas (Software)|Pandas]] is going to load the whole CSV into memory, and it's a good idea to have a quick look at the data before you load some corrupted data or a file that is too big to fit in memory.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=20)** If you don't have enough memory on your computer, you can spin a machine in the cloud with a lot of memory, do your work, and then tear it down.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=28)** This approach is usually very cost effective and much easier than using a [[Big Data]] platform.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=35)** If you think your data is too big, remember that you can spin a machine with several terabytes of memory.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=41)** So here is our data.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=42)** We have four columns, time, latitude, longitude and height.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=47)** So let's start.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=49)** First, let's look at the size of the file on this.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=52)** So I'm going to use pathlib and then define what is a kilobyte.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=56)** Define the CSV file and use the start method to get the size and divide it by kilobyte.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=62)** ST size is in bytes.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=64)** So let's run this one and I'm going to hide the sidebar.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=69)** So 42.6 kilobytes.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=72)** You can do the same thing with the shell command.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=74)** So we start with the bank sign, telling the IPython or the interactive prompt to run a shell command.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=80)** And this is an extension to [[Python (Programming Language)|Python]].
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=81)** And we pass the name of the CSV file prefixed by the dollar sign as a variable.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=86)** Note that this command will work only on [[Linux]] or on Mac, not on [[Windows]].
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=90)** Now, let's see how many lines we have.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=92)** So we do with CSV file open and you should open always file with a with statement.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=98)** This makes sure that they are closed when you are done with them.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=101)** So we're going to run it, count the lines and also print the first five lines.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=108)** And we can do the same with the shell command.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=109)** First, the head utility to see the first five lines, and then the WC dash L to see how many lines we have in there.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=117)** Now we can load the data frame into pandas.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=120)** So we input pandas as PD, and DF is PD read CSV.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=126)** The variable holding the data frame is traditionally called DF, and we are going to print how many rows are in the data frame.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=132)** So len of DF.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=135)** And now we are going to get 740, while WC showed us 741.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=142)** Pandas is loading the first row as the column names and counting only the [[Representational State Transfer (REST)|rest]] of the rows, which are the data rows.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=150)** Let's have a look at the column.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=152)** So df.columns, and we see we have time, latitude, longitude and height, which matches what we actually see in the CSV.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=160)** We can also run the info method to get some information about every column.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=165)** So the column, how many non values we have, and what is the data type of every column.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=171)** We see that the first column is an object, which means a string.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=174)** And then we have floats for latitude, longitude, and height.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=178)** You can also run the describe method, which will give you information about numerical columns.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=184)** So only the latitude, longitude, and height.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/loading-csv-files?u=76281980&t=186)** You'll get the count, the mean, standard deviations and other interesting [[Statistics]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Big Data]] (1), [[Python (Programming Language)|Python]] (1), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** csv (7)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** python (1)
> **Versions:** 42.6 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Parse time](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=0)** - [Instructor] Let's load our DataFrame.
>
> **[0:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=1)** So we import [[Pandas (Software)|pandas]], and we read the CSV, and we display the data types for each column.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=9)** You can see the latitude, longitude, and height are floats, and the time is an object, which usually means a string in Pandas.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=15)** In some cases, it's okay for data to be a string, but in our case, you expect some kind of a timestamp.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=22)** Unlike [[JSON]] and other formats, CSV don't have type information embedded with the data, which means that everything comes out as a string.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=32)** Pandas does a good job at guessing types, but here, it needs our help in parsing the time.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=38)** There are many ways to write time as a string.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=40)** Pandas parser know most of the common formats.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=44)** If you need to write time as a string, do yourself a favor and use a known format, such as RFC 3339.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=51)** Also, pick a format without spaces in it.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=54)** And have the year first, so sorting time as a string will work as intended.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=59)** Let's take a look at the read_csv method.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=61)** It has many, many arguments.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=64)** One of these arguments is parse_dates, where you can pass a list of columns to be parsed as times.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=73)** This is where our initial look at the data came handy.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=76)** You know, before loading, which column you'd like to parse as time.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=79)** Let's do this.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=80)** Going to hide the sidebar.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=82)** So now we doing pandas with CSV, with the csv_file, and tell it to parse the dates with only a single column, which is a time column.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=93)** And run the cell.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=94)** And now, we see that the time is datetime64[ns], which means a 64-bit timestamp in a nanosecond resolution.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/parse-time?u=76281980&t=103)** On your machine, this might be a little bit different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[JSON]] (1)
> **Env Vars:** csv (3), json (1), rfc (1)
> **Code Identifiers:** read_csv (1), parse_dates (1), csv_file (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Documentation:** rfc (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Access rows and columns](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=0)** - Let's access some data.
>
> **[0:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=1)** So first we load the data frame and I'm going to hide the side column.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=8)** To get a column, you can use the square bracket and the name of the column, so DF latitude and I'm getting the whole latitude column.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=16)** You can also use df.la like an attribute access but I don't recommend using the dot plantation.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=23)** In some cases, column names have spaces in them and then you can't use the dot plantation anyway, so get in the habit of using square brackets, which always works.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=33)** You can select more than a single column.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=35)** So here I'm passing a list with two column names and I'm going to get back at data frame with two columns.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=42)** If you want a specific value you can first select the column and then the row.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=46)** So selecting the latitude column and then the first value.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=51)** Remember that [[Python (Programming Language)|Python]] is zero based and not one based.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=54)** The first item is at zero location.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=57)** If you want an entire row you can use the dot lock accessor, so dot lock.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=61)** And now we get the rope.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=62)** So we see the time, latitude, longitude, and height.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=65)** Lo can also work with slices as well, so from two to seven.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=70)** Unlike slicing in Python, which are half open the dot lock in [[Pandas (Software)|pandas]] slices from the start to the end, including the end.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=79)** You can also combine slices and column selection so we're selecting only the latitude and longitude columns.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=86)** And then getting from two to seven.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=89)** This time plant is going to use the Python style slicing which is a half open range, meaning you get the first index up to, but not including the last one.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=98)** And now it's a bit confusing.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=100)** The best way to make these things sink in, is to practice take some data frames, slice and dice them until you get comfortable with the results and it'll be just fine.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=109)** Every column in Panas is as serious.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=112)** One of the differences between seriousness and regular Python lists is that they have a labeled access called an index.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=119)** All the columns in the data frame share the same index so we can do df.dot index and then run the cell.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=127)** And this is a range index starting from zero until 740 with steps of one.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=132)** However, it doesn't have to be this case.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=135)** Let's create a small example.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=136)** So we create a data frame.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=138)** We have some values with number by a range, five rows and two columns.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=143)** We specify the columns and then we say the index is A, B, C, D, and E.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=149)** If you're going to run disco code, you see now that the index series A, B, C, D, and E.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=156)** And now if you're going to use dot lock zero this is going to fail because there's no row labeled zero.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=164)** But there is a row labeled A, so I can df dot lock A.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=168)** I can also slice between A and D and Panas can handle it just as well.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=174)** As a side note, labels don't have to be unique.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=177)** If they're repeating labels, you will get all the rows with this label.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=181)** Sometimes you'd like to access the first row regardless of the label.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=185)** In this case, you can use the IOC accessor, which works by position.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=189)** So df dot I lock at location zero and this is going to work and bring us the first row.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=197)** Another kind of index you can have is time-based index.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=201)** So let's change the data frame index, which currently if we look at it is a range index and we are going to set it to the time and have a look at it.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=213)** And now it is a daytime index with all of these values.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=217)** Now, if you're going to run the lock zero we are going to see that it's going to fail because we don't have any role that is labeled with zero.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=225)** However, I can access a row by time and I can pass the time as a string.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=230)** and Panas is fine with it.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=232)** You can even access time index with the time unit.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=235)** So here we are going to access everything that is at 3:48 and we we're going to get all the roles that fall in this minute.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=243)** By the way, I'm not jogging at these crazy times.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/access-rows-and-columns?u=76281980&t=246)** These times are in Newt Sea and I'm at Israel which means the time was actually 6:48 AM. Still early, but not that early.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** is a  (5)
> **Ports:** :48 (2)
> **Env Vars:** ioc (1)
> **UI Navigation:** select the (1)
> **Speakers:** - let (1)

#### [Calculate distance](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=0)** - [Instructor] Let's calculate how slow I jog.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=2)** For speed, we need time and distance.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=5)** We have latitude and longitude, and we're going to cheat and use Euclidian distance instead of distance on a sphere.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=11)** So first, we're going to load the data with read_csv.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=18)** I'm going to hide the side frame.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=21)** So let's have a look.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=22)** One latitude in kilometers is about 92 kilometers, and one longitude in kilometers is about 111.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=29)** It varies depending on where you are on earth, but it's good enough for what we're going to do.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=34)** So we are going to define a distance function which takes the delta latitude, the lateral longitude, multiply them by the constants, and then use NumPy to get the Euclidian distance.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=46)** So, we're going to run the cell.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=48)** There is no output, but now we have the function definition.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=51)** Let's have a look.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=52)** So, let's take first longitude, then latitude, and the second one.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=56)** So we'll take 200 and 201, and we are going to calculate the distance between them, and this is going to work.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=63)** Now we need to calculate the distance between every row.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=66)** Remember, we want to avoid for loops as much as possible.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=70)** Let's use the shift method to avoid looping.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=72)** Here's an example: So, I'm creating a series of five elements, so zero to four.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=82)** Now if I'm going to run the shift operator, I'm going to get none as the first one and every element is shifted downward.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=89)** Shift can also work in the other direction if I give it minus one.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=93)** So now I have none at the bottom and everyone is shifted up.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=97)** Now we're going to use shift.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=98)** So we get a distance, we take the latitude and longitude and the shifted latitude and longitude.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=107)** If you're going to run this one, we're going to get none again for the first value and then distances which are in kilometers.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=114)** Let's do a sanity check and sum all of the distances.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=120)** 4.7 kilometers? That seems about right.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=123)** Now we'd like to calculate the difference in times.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=126)** This one, we're going to use the diff method.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=129)** And if you're going to run it now, we're going to see again, not a time for the first one and then the difference in times: 17 seconds, zero seconds, one second, et cetera.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=143)** If you look at a stick, we can specify the length of the stick in various ways, right?
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=148)** We can use centimeters, millimeters, nanometers, parsecs, and more.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=154)** Same goes for time deltas.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=156)** It's a span of time, and we need to convert it to a number by specifying the unit.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=161)** So, what we are going to do is times_hour.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=163)** We are going to take times and divide it by panda's time delta saying one hour.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=173)** And now we see the numbers as fractions of an hour.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=177)** Finally, we can calculate the speed.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=179)** So, we do distance divided by times_hour, and we are going to see the speed. Right?
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=188)** And this speed is in kilometers per hour, and I'm not running 35 kilometers per hour.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=193)** That's the speed of the fastest man alive, probably.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/calculate-distance?u=76281980&t=197)** This is an error in the measurement.

> [!info]- Semantic Content
>
> **Code Identifiers:** times_hour (2), read_csv (1)
> **Versions:** 4.7 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Display speed box plot](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=0)** - [Instructor] Let's run our code, load the data and calculate the speed.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=4)** Now we can use the describe method of the speed to get some [[Statistics]] about what is the mean standard deviation and other values.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=13)** I'd like to use box plot for first impression of the data.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=16)** So let's do that speed.plot.box.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=20)** If you're going to run this, you're going to see a box plot.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=24)** A box plot shows the distribution of data.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=26)** The line in the middle is the mean.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=28)** Now we have the quintiles and the whiskers are the inter quantile ranges.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=34)** And all of the dots outside of the whiskers are considered outliers.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=38)** These quick plots are great when exploring data, but when you present the data, you better have some nicer charts.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=45)** Don't underestimate nice, it sells.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=48)** Most of the time when I explore the data I plot basic charts, but when it's time to present I invest some time in making them nicer.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=55)** It helps the readability but also makes a better impression.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=59)** There's no end to how much you can fiddle with your charts.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=61)** Here are some basic things you can do to make your charts nicer.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=66)** So I'm going to input matplotlib, and I'm going to say that the figure size is 10 over six.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=72)** This is in inches, but will make the figure bigger.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=74)** And then I'm using style.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=77)** Matplotlib has several styles.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=78)** I like the seaborn-whitegrid and now I'm going to plot again.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=84)** And now we get slightly bigger chart.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=86)** There is a difference at look and I have these lines telling me what are the values.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=91)** It's easier to see with the grid.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=93)** I can also set some other things.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=95)** So I have a none here at the bottom.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=97)** I'd like to remove it so I'm going to say that the name is nothing.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=102)** And then I'm going to plot and give it a title.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=104)** Miki's run.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=105)** And then I'm going to set the Y label with the running speed off.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=110)** And then here between these dollar sign I'm writing later for showing equations.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=117)** When I run this one, I get a chart.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=120)** It has the label, Mickey's run, the none is gone.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/display-speed-box-plot?u=76281980&t=123)** And here you see running speed and then kilometer over hours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Taxi data mean speed](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-taxi-data-mean-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-taxi-data-mean-speed?u=76281980&t=5)** - [Instructor] I'm asking you to calculate the mean speed in miles per hour in taxi.parquet.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-taxi-data-mean-speed?u=76281980&t=11)** To get the file taxi.parquet, you will need to run the download data [[Python (Programming Language)|Python]] script in order to get it, and you're going to use the [[Pandas (Software)|Pandas]] read parquet instead of read CSV to load the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Taxi data mean speed](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=5)** - [Instructor] Let's take it, my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=7)** As a reminder, you will need to run the download data or copy taxi.parquet from the challenge in order to be able to work.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=15)** So importing [[Pandas (Software)|Pandas]] and using the read_parquet to read the file.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=21)** We have some bad lines in the data.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=23)** The good lines are the ones that the drop off time is bigger than the pickup time.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=28)** So I'm going to create a mask, a boolean mask, and then get only the rows that match this mask from the data frame.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=34)** Now I can do the calculation.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=36)** So times is the drop of time minus the pickup time.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=40)** Times in hours is the times divided by delta of one hour, and the speed is the distance, which is in miles, divided by the hour.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-taxi-data-mean-speed?u=76281980&t=51)** And now, we can get the mean speed, which is 17 miles per hour in New York.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** read_parquet (1)
> **Speakers:** - [instructor] (1)


### 4. Folium and Geospatial Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an initial map](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=0)** - [Instructor} Folium is a library for creating web-based interactive maps.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=5)** Under the hood Folium uses leaflet.js [[JavaScript]] library and leaflet.js uses Openstreetmap to render maps.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=14)** Let's load the log of one of my runs.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=17)** So we're going to load track.csv we're going to tell [[Pandas (Software)|pandas]] that the time column should be passed as a timestamp, and we also say that the index column is the time.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=27)** So now if you're going to run this you're going to see that we have only latitude, longitude, and height.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=34)** The time column is now in the index.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=37)** So we look at the index the first five rows we're going to see that.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=40)** Okay, so how are we going to work with volume?
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=43)** We're going to input volume and then get the center of the map which is the mean of the latitude and longitude.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=50)** We're going to get the center of the map which is the mean of the latitude and longitude.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=53)** and then we're going to create a map which is folium.map.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=56)** We say the location is the center and we're going to say the [[Zoom]] level which is 15.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=62)** I don't have a good rule of thumb for the initial zoom level.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=65)** Just play with it until you get it right.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=67)** So let's run this one.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=69)** And now we have an interactive map, right?
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=72)** We can move it around, zoom in, zoom out, and do everything we do with maps.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=78)** You can even save the map to an [[HTML]] file and then open this file in the browser.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=84)** If you go back to look at the files we see now that we have track.html, which is an HTML file you can open it in browser.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/create-an-initial-map?u=76281980&t=91)** You'll get an interactive map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4), [[HTML]] (3), [[JavaScript]] (1), [[Pandas (Software)|Pandas]] (1)
> **File Paths:** leaflet.js (2), track.csv (1), track.html (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor (1)

#### [Draw a track on map](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=0)** - [Instructor] Now let's draw a track on the map.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=2)** So first we're going to load the data frame, and I'm going to hide the sidebar.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=8)** And now I'm going to use volume, create a map, and then get a location, create a marker on this location, and add this marker to the map, and finally, show the map.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=21)** Right, when we run this cell now, we see a marker we can tweak around with the marker and style them.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=27)** For example, we can use a red circle.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=31)** So I'm going to use now a circle marker instead of a regular marker and say that the color is red.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=39)** And now we get a circle marker.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=41)** Another nice thing you can do is add a popup.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=44)** So we have the circle marker in the location and color is red, and I'm adding a popup with, "Hi there."
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=51)** So if I'm going to run the cell, now I have the marker.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=55)** But now when I'm clicking on the marker, I'm going to see my popup.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=60)** There are many styles of markers in volume, and the popup can be [[HTML]].
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=64)** Check out the volume documentation for more details.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=68)** Now that we know how to place one marker on the map, let's throw the entire track on the map.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=72)** For this I'm going to create a function that will add a marker from a row in the data frame.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=77)** So I'm going to get a tuple from the latitude and longitude, create a circle marker in the location, which has a radius of five, red color, and the pop-up is going to be the time.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=88)** So I'm getting it from the row name, which is the index, and I'm going to format it as our column and edit the marker.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=95)** Now check it out.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=97)** Let's take one row first and see that.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=100)** So I'm calling add marker on the 200th row, we're using the .iloc, and then showing the map.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=107)** Let's run the cell.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=108)** And now we see the marker.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=110)** And if you're going to click on the marker, we're going to see the time.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=113)** Once we see that the code is working for a single row, we can do it for the whole data frame.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=118)** So I'm going to create another map and then call apply from the data frame on end marker with access equal one, meaning do it on every row and display the map.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=131)** This took a while, and the markers overlap.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=133)** You need less data points.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=135)** And to do so, we are going to resample data.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=138)** So I'm going to create a new map.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=140)** And then I'm going to create a data frame by using resample.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=145)** And I'm going to say minute frequency and take the mean of every longitude and latitude that falls inside that minute frequency.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=153)** And now I'm going to apply this ad marker function, but on the minute df.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=160)** Again, with access equal one.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=162)** This looks much nicer.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=164)** This workflow is very typical with visualization.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=167)** You need to do some iteration until you get a good one.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=170)** To get a great one, you need to invest more time tweaking it.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/draw-a-track-on-map?u=76281980&t=173)** But for now, I think we're good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using geospatial data with shapely](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=0)** - [Instructor] Sometimes we'd like to do more than just draw points on a map.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=4)** For example, you might like to know if a location, a point, is inside the city limit.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=10)** Cities are represented as polygon.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=12)** And the question maps to, is this point inside that polygon?
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=17)** There are several libraries in [[Python (Programming Language)|Python]] to work with what is called GIS, Geographic Information System and geometry in general.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=25)** We are going to have a look at one library called Shapely.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=28)** The two main [[Data Structures]] that we're going to use are a point and a polygon.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=34)** So from shapely geometry, import point and we are going to create a point and show it.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=41)** And the interactive prompt is showing the point as, well, a point.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=45)** But you can ask the point, what is the dot X and the dot Y of the point?
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=50)** Now let's take a look at the Polygon.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=51)** So input the Polygon and create it.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=54)** And when we run it, again, the interactive prompt is going to show us a square because this is the Polygon.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=59)** You can ask Polygon several questions.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=62)** For example, what is the area?
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=64)** And what is the center of the polygon?
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=67)** You can also ask whether this point is inside the polygon by using the intersects method.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=73)** So for this point, this is true.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=74)** Let's take a point, 10, 20, which is outside the polygon, and now it's going to be false.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=80)** So let's load our tracking data.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=82)** So we're going to use [[Pandas (Software)|pandas]] read CSV from our track.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=85)** We are going to say parse the time column and use it as the index column.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=89)** Finally, we're going to resample the data in a minute frequency.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=95)** And now we're going to add a new column to the data frame.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=97)** This column is going to be a column of points.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=100)** So we only take the latitude and the longitude columns, apply point to them, and we use the head command to see what we have.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=107)** So now we can see we have a new column called point and every value inside of it is a shapely point.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=115)** So let's define our polygon.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=117)** We're going to take the middle latitude and the maxim latitude and the middle longitude and the maxim longitude.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=122)** And we're going to create our polygon.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=127)** Which again is going to look like a square.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=129)** And now we can say which rows in the data frame are inside that polygon.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=134)** So we can say data frame point and apply the polygon intersect, which is going to return us a series of Boolean values.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=141)** So Boolean indexing to find the rows.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=144)** And we're going to see several rows that are inside the polygon.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=148)** Let's plot the polygon on the map.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=150)** This can get a bit tricky since folium expects a series of latitude longitude.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=155)** While if you ask the polygon for its exterior you're going to get two arrays, one of X's and one of Y's.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=162)** We are going to do some data shifting here.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=164)** This is quite common, but lucky for us, Numpy makes it super easy.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=169)** We're going to use the stack function from Numpy.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=173)** Let's run Numpy stack on the exterior.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=178)** And this is almost what we want.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=180)** We just need to rotate the array by 90 degrees to get the pair of coordinates per row.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=185)** This is called a transpose and it's done with the dot T attribute.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=190)** Now we have the data in the right shape.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=192)** It's easy to add it to a map, right?
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=194)** So we're going to create a folium map with the location in the mean with the [[Zoom]] start.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=199)** And then do the stack to get the points.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=202)** Add a child with the poly Line from volume and show the map.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=208)** And now you see we have this polygon on the map.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=212)** Now let's draw our track using different color for points that are in the polygon or outside.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=217)** So we're going to define the center, create the map, and then we're going to add the poly Line.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=224)** And now we have our add marker that's going to get the location from the raw latitude and check if we are inside the polygon using the polygon intersects with the point.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=236)** And now we create a marker and location.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=238)** The radius is five.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=239)** And then the color is going to be yellow if you're in the polygon.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=243)** Otherwise it's going to be green.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=245)** And we also add the popup for the time.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=247)** And add the marker to the map.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=249)** We call the data frame apply with the add marker function and axis equal one, meaning running it on every row.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=258)** And let's run the cell.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=261)** And now you can see the track.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=262)** All the points outside are green and the one inside are yellow.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=267)** I think it's pretty cool what you can do with very few lines of code to show map interactive with GIS information inside of them.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/using-geospatial-data-with-shapely?u=76281980&t=275)** If you work a lot with GIS information, I suggest you look at the package called GeoPandas, which adds GIS data types to data frames.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Data Structures]] (1), [[Pandas (Software)|Pandas]] (1), [[Zoom]] (1)
> **Env Vars:** gis (4), csv (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** python (1), find (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Draw the running track](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-draw-the-running-track?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-draw-the-running-track?u=76281980&t=5)** - [Instructor] Draw the running track from track.csv.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-draw-the-running-track?u=76281980&t=8)** Sample the data to a minute interval, and then markers should be blue if the height is below 100 meters, otherwise red.

> [!info]- Semantic Content
>
> **File Paths:** track.csv (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Draw the running track](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=5)** - [Instructor] So here is my solution.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=8)** First, we're going to load the dataframe, pass the dates, the index call, and then resample permanent frequency.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=15)** Next, we're going to create the map, so importing folium, and then creating a map with the location at the mean, and the [[Zoom]] start is 15.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=25)** And now the add marker function, so getting the location from the latitude and longitude, creating a circle marker at that location with radius five.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=34)** And now the color, it is blue if the height is less than a hundred, otherwise it's going to be red.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=40)** And we are going to add a pop up for the time.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=43)** Finally, we add the marker to the map and then we call the dataframe apply method on add marker with access equal one, meaning walk on every row, and display the map.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=55)** And now, we can see the track.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=56)** Most of the dots are below 100 meters.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-draw-the-running-track?u=76281980&t=59)** The beginning is a bit higher, so the points are red.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. NYC Taxi Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Examine data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=0)** - [Instructor] We're going to look at some data about taxi rides published by the New York City.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=5)** Before you can start, you need to run the download data script in the video folder.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=11)** This will download the taxi.csv file.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=14)** It might take a little bit, so I suggest that you'll keep this file around and copy it over from chapter to chapter.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=21)** Let's see if you can safely load this data into memory.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=24)** So from pathlib we import path, we create the csv file, define what is a megabyte, and then use the stat method of the file to get the size, which is in bytes, and divide it by a megabyte.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=37)** Let's run this.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=38)** And it's about 163 megabytes.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=41)** It is safe to load into memory.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=43)** Next, we're going to have a look at few of the initial lines and see how many lines there are in total.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=49)** Initialize the number of lines, open the file, and use enumerate.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=54)** If the line is one of the first five lines, I'm going to print it out.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=57)** And always increment the counter.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=60)** Finally, print out the number of lines.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=63)** And we're going to run this one, you're going to see we have the vendor id, the pickup and drop off time, how many passenger in the passenger account, the distance, and many more attributes.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/examine-data?u=76281980&t=74)** And we have about a million lines.

> [!info]- Semantic Content
>
> **File Paths:** taxi.csv (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Load data from CSV files](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=0)** - [Instructor] Let's load the data from the csv.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=3)** You need to either run the download csv, or copy over taxi.csv from one of the other chapters.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=9)** So let's start.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=10)** Import [[Pandas (Software)|pandas]] as pd, and we are going to use pd read csv to load the file.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=15)** And finally, we're going to print out the length, adding a thousand comma separator for the number of rows.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=22)** Let's run the cell.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=25)** And you see we have a thousand rows.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=27)** Let's have a look at the first one by using the iloc accessor for row number zero.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=31)** So run the cell, and we're going to see we have a vendor ID, we have the pickup and drop off time, how many passenger, trip distance, and many other attributes.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=41)** Let's look at the data types.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=43)** So I'm calling df.dtypes, and this is going to show me the data type per column.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=50)** We see that the vendor ID is an integer, but the pickup and drop off are objects, which means strings.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=56)** Let's fix that.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=57)** We know they are time, so we define the time columns as the pickup and the drop off.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=63)** And now we use the read csv, and tell pandas to parse dates in these time columns.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=69)** And now we can look at the data type again.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=74)** Now we see that both the pickup time and the drop off time are date time as we want them.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=80)** A lot of time you'll get data which is a bit messy and not formatted properly.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/load-data-from-csv-files?u=76281980&t=84)** This is why it's important to have a look at the data and see that what you load looks okay before doing anymore work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** taxi.csv (1)
> **Speakers:** - [instructor] (1)

#### [Working with categorical data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=0)** - Let's load our data.
>
> **[0:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=1)** So we import [[Pandas (Software)|Pandas]] as pd.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=4)** We define what are the time columns and we use the read CSV method to load the data passing the time columns and looking at the data types.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=14)** And you can see that the Vendor ID is an integer.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=17)** Let's see how many unique values are there using the unique method of the column.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=25)** And we see we have only two values.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=27)** We'd like to refer them by name.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=30)** You can access the [[Metadata]] or the scheme of the data.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=33)** And here we see that Vendor one is Creative and Vendor two is Verifone.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=39)** So, let's create a map saying one is Creative, two is VeriFone.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=44)** And now we're going to add a new column, called Vendor which is applying this map on the Vendor ID.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=51)** And we're going to look at the head to see the first few values.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=55)** And you see VeriFone and Creative.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=57)** The Vendor column is a string column.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=59)** Since there are only two Vendors, it seems wasteful to generate string per row.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=63)** Let's see how much memory this column takes.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=66)** So we define a megabyte and then we call the memory usage method on the column with deep=true to calculate the strings divided by megabyte.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=77)** And you see it takes 67 megabyteS.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=80)** This kind of data, when there are few possible values that repeat is called Categorical data.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=86)** Pandas has a special type for Categorical data that is much more space efficient.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=92)** So, we are going to do data frame Vendor=df Vendor.map Vendors just as before.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=99)** But now we are going to add S type category and then look at what we have.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=105)** And you see that it looks like before, VeriFone and Creative but now the data type is a category.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=111)** Let's see how much space the Vendor column is consuming now.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=115)** So right now it's a single megabyte versus the 67, as before.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=120)** You can get the underlying data with the .codes attribute.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=124)** So if you're going to run this one, we're going to see now, that we get the underlying ones and zeros.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=130)** Not that these are different from the one and two we had in the data.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=134)** These are the categories and numbers, not what was in the CSV file.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=139)** Categories are easy to work.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=140)** For example, you can compare a category to a string.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=144)** So let's check how many rows are there, that the vendor is VeriFone.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=150)** And you see about half of them.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=152)** There are more things you can do with categories.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=154)** For example, you can order them.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-categorical-data?u=76281980&t=156)** This is useful when you have answers from a survey and you'd like to say that very much is bigger than somewhat read the excellent documentation for more details and examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Metadata]] (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Env Vars:** csv (2)
> **Analogies:** for example (2)
> **Code Identifiers:** megabytes (1)
> **Speakers:** - let (1)

#### [Work with data: Hourly trip rides](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=0)** - [Instructor} Let's plot how many rides we have on each day.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=3)** To do this, we're going to use grouping.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=6)** If you're familiar with [[SQL]], you already know about grouping, it's span equivalent of SQL's group by.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=13)** We probably want to do something like group by the date and count from the rides and group by the date again.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=21)** If you don't understand SQL, don't worry about it but I highly recommend you learn some SQL.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=27)** As a data scientist, this is practically a required language.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=31)** So, first we start by uploading the data frame.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=35)** Remember to run the download data or copy taxi dot csv.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=39)** So import [[Pandas (Software)|pandas]] as pd define the time column, read it and then set the vendor name from the vendor ID.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=47)** And let's run this.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=49)** And now we can look at the times.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=51)** So going to look at the pickup time.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=53)** So let's do the head.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=55)** And we see several times these times have hour, minute, and second component and we are only interested in hours.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=63)** Let's take a look at the timestamp.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=65)** So we create a new timestamp from November 1st, 2021 and we look at this timestamp and now we can use the floor method to round it up for days.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=77)** capital D stands for days.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=79)** Pandas has several offset aliases You should read the documentation and to know which one to use.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=85)** We are going to use, as I said, the day which is calendar day frequency.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=91)** Now let's try flooring up some rows.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=93)** So pick up daytime, take the head and we do a floor.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=98)** And this is going to fail.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=100)** Panda series can hold a lot of types and the floor makes sense only for time data.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=105)** So how can you access the timestamp object inside this specific series?
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=110)** There is a dot DT attribute that you can use.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=114)** So we are going to do the same.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=116)** Pick the column, then go ahead and then dot D and only then floor of D.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=122)** Let's run this one.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=123)** And this one is working for us.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=126)** Now that you can generate the keys, let's group.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=129)** When you group, you can either specify a column to group by or group by values, which would have the same length as the data frame.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=136)** Since you're interested in the hour we can use the latter form.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=139)** So we define the keys and then we group by the keys.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=144)** You get a group by object.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=145)** This object waits for you to tell it what to do with every group.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=150)** Extract some columns, maybe calculate some [[Statistics]].
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=153)** In this case, we'd like to count how many rides are per hour.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=156)** So we're going to use count.
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=158)** So data frame, group by keys, and then count.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=164)** We are going to get the counts for every day.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=167)** So we see first of the month, second of the month, third of the month, and then the same number for every column because we are just counting.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=175)** So what we're going to do is we're going to extract just one column.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=179)** We're going to use the vendor ID.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=181)** So we go by the keys, do the count, take only the vendor ID column and do a bar plot.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=187)** And now we have a bar plot for every day in the month, how many rides we have.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=191)** Let's tidy it up.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=193)** So we are going to run the same group by operation but we're going to change the index name for the day and we're going to call it, the date.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=202)** And then we're going to create a bar plot with a title of daily access in January 2016.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=208)** And we tell it we don't want to rotate the axis.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=212)** We get this a x object, which is the monthly access and we do set y label for the number of rides.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=219)** Once we run this cell, we have a much nicer task.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=223)** We have a title, we have labels for the X axis and the Y axis.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-hourly-trip-rides?u=76281980&t=228)** And we can see the day of the month just below.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Pandas (Software)|Pandas]] (2), [[Statistics]] (1)
> **Env Vars:** sql (4)
> **Definitions:** stands for (1), is a  (1)
> **Documentation:** the documentation (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor (1)

#### [Work with data: Rides per hour](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=0)** - Let's calculate the median hourly rides over all days.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=4)** First, we'll group the rides by day and hour, and then we'll calculate the median for each hour across all days.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=10)** To make things more complicated, let's display the results by vendor.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=15)** Let's take it one step at a time.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=17)** First, you need to either download the data or copy it over.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=20)** So you'll have taxi dot csv.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=22)** And now we're going to load our data frame.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=27)** I'm going to create two auxiliary columns.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=30)** First, is the hour column, which is taken from the hour attributes of the datetime.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=35)** And the second one is the day, again taken from the date attribute.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=41)** So if you look at them right now we have the day, and then we have the hour in the day.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=46)** And now we can do a groupby by the vendor, the day, and the hour.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=50)** And I would like to do a count and I want to extract only a single column, which is the vendor.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=57)** Oops. The vendor column is not there anymore.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=59)** What happened is that [[Pandas (Software)|pandas]] uses the groupby keys as indices, to the new generated data frame.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=66)** Let's have a look.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=67)** We see now that we have what is known a multi-index or hierarchical index.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=72)** We won't go into these practically because we have a simpler method, and partially because they make my head explodes every time I work with them.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=81)** What we're going to do is tell pandas not to place the columns from the keys as an index by using as index equal false.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=89)** So if I'm going to do df groupby and we group by vendor, day, and hour, and as index equal false.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=97)** And now we get the count and I'm going to have a look at the columns that were generated.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=101)** I'm going to run this one we are going to see now that I have the vendor, the day, and the hour as columns in the new data frame.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=109)** So now I'm going to create a daily data frame from the data frame grouping by with as index equal false and getting the count.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=118)** And then do another groupby, this time by the hour, to get the median hourly.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=122)** So we're doing the daily df, groupby, this time only with the vendor and an hour.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=127)** Again, as index equal false.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=130)** We are going to get the vendor ID, and get the median.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=133)** And we can look at the hourly df.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=138)** Right? So we get the data frame, where the columns are the vendor, the hour, and the vendor id, which is actually the amount of rights.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=146)** And the index itself is the day.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=148)** What you'd like to have is the hours in the index, the vendor as a column, and the median value from any column as the values.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=156)** To reshape the data frame like this you're going to use pivot.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=160)** If you work with [[Microsoft Excel|Excel]] or [[SQL]] you probably know or heard about pivot.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=164)** Let's see, the fancier transpose, where role becomes columns, and the other way around.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=170)** The documentation on pivoting and reshaping in pandas is excellent with a lot of visual examples.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=175)** I highly recommend you read it.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=177)** In our case, I'm going to pivot telling that the columns are the vendor the index in the hour and the values are the vendor id, which holds the count.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=187)** Then I'm going to do a plot with the bar plot rotation equals zero.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=192)** And once we have that, we have our chart.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=194)** I hope by now we can appreciate the power of pandas.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-rides-per-hour?u=76281980&t=197)** With the very few lines you can slice, dice, and reshape the data, making exploring data super easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Microsoft Excel|Excel]] (1), [[SQL]] (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** download the (1)
> **Speakers:** - let (1)

#### [Work with data: Weather data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=0)** - [Instructor] Sometimes your data will be in more than one place.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=3)** Let's add some weather data to our taxi rides and see if temperatures have a correlation with the number of rides.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=10)** First, we're going to load the weather data, reminding you either to run down data script or copy over the taxi dot CSV file.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=19)** So input [[Pandas (Software)|pandas]], define the time columns with the data, and then add the vendor column.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=25)** And let's run this out.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=28)** And now for the weather.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=29)** You will need to run the download weather script in order to get weather.csv.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=35)** Let's have a look at the weather CSV file.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=37)** Right, so we have the station, the date, latitude, longitude, elevation, and much more.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=42)** We see the date starts around 1948 and we would like the data column to be at timestamp.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=47)** So, we are going to read the CSV of the weather.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=50)** Parse dates is the date and we want to set the date as the index column.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=54)** And we're going to call this WDF for weather data frame.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=58)** So we see the date as the index, we see the station, the latitude, the longitude, and several other attributes.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=65)** Let's run describe to have a quick look at the data.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=68)** Remember, describe only shows numerical values, right?
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=72)** So we have latitude, longitude, snow, and then TMAX, and TMIN.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=78)** The values of the temperature looks interesting.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=81)** They don't match either cell use or fahrenheit .
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=83)** To understand what they are, you will need to go to the schema definition.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=87)** If you read this PDF file, you're going to see that the temperature are 10% in celsius.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=94)** Let's convert this to fahrenheit using the convert temperature function from SciPy.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=99)** So from SciPy concepts, we import convert temperature, and we're going to create a column called temp F for fahrenheit.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=107)** And we are going to take the maximal, divide it by 10, and then from celsius to fahrenheit, and we are going to look at 10 random roles from the generated column.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=119)** And now it looks better.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=120)** Now that you have the data, we can join the two data frames.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=125)** Pandas has various ways of joining data.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=128)** Like an [[SQL]], there are many kinds of joints.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=131)** Inner, outer, left.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=133)** Let's read the commentation to learn more.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=136)** By default, pandas is going to merge on the index.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=139)** However, you can specify column or other values to join by.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=144)** The weather data frame is already indexed by date.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=146)** So we're going to group by the drives index, the taxi.csv.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=150)** By the date as well.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=152)** Ddf for the daily data frame, we're going to group by and use the pickup_daytime.dt.date and get the count.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=162)** And if you're going to run ahead on this one, we are going to see that we have a date here on the index.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=167)** And then every column has the same value which is the count.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=171)** And now we are going to run our merge.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=173)** So we are going to merge the daily data frame and the weather data frame.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=179)** And we say on the left index and on the right index.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=182)** And we are going to do ahead.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=186)** So now we get the daily data frame with all the rows that has the numbers of the rides.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=192)** And then on the days that we don't have anything matching we'll get NaN's.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=197)** And we have the temperature which does match.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=200)** All that is left is to plot.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=202)** And we are going to use a scatter plot this time.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=205)** So JDF plot scatter, the X is the temperature in fahrenheit, and Y is the vendor.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=212)** And we see that there's not a lot of correlation between the weather and number of rides.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=218)** No correlation is also a good finding.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=220)** Note that the data we have here is only for one month.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=223)** Maybe if you look on a yearly data, you will see more correlation.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=227)** This might be an interesting exercise for you.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-data-weather-data?u=76281980&t=230)** Go to the taxi data website, download the files for a year, and then try to see if you find the correlation between the weather and the number of rides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[SQL]] (1)
> **Env Vars:** csv (3), wdf (1), tmax (1), tmin (1), pdf (1)
> **File Paths:** weather.csv (1), taxi.csv (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** pickup_daytime (1)
> **Exercise Files:** download the (1)
> **Warnings:** note that (1)

#### [Challenge: Graphing taxi data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-graphing-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-graphing-taxi-data?u=76281980&t=5)** - [Narrator] In this challenge, you should load the taxi data, then remove all the rows with either total amount that is less than zero or the passenger count is zero.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-graphing-taxi-data?u=76281980&t=14)** And then I would like you to create two charts.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-graphing-taxi-data?u=76281980&t=17)** One is a bar chart of the average tip per passenger count and the second one is a bar chart of the average tip per day.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-graphing-taxi-data?u=76281980&t=25)** I've included two images which show roughly how the charts should look like.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)

#### [Solution: Graphing taxi data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=5)** - [Teacher] Let's have a look at my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=7)** First, we're going to load the data frame.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=9)** So defining time columns, reading the CSV, and telling [[Pandas (Software)|pandas]] to pause the time columns.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=15)** And finally creating a vendor name from the vendor ID.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=19)** And I'm going to print out how many rows are in the data frame.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=26)** So we have a million something rows.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=29)** Now we're going to drop the bad rows.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=31)** So we define the bad rows as the data frame where the total amount is less or equal to zero, or and this is the vertical sign for or, the passenger count is zero.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=42)** And then we are going to use the data frame drop method with the index of the bad row and telling it in place equal true meaning change the current data frame.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=51)** And finally, we're going to print out again the number of rows.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=56)** So let's run this out.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=57)** And we see that we have a bit less row, about 500 less of them.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=62)** Next, for the charts.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=63)** I'm going to create an axially column, which is the tip percent.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=67)** And this is the tip amount divided by the total amount times a hundred.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=72)** And now for the chart of the tip per passenger count.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=75)** So we're going to go by the passenger count.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=78)** Get the tip percent and get the mean.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=82)** And then I'm going to do a bar plot saying the title is tip percent by the passenger count.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=88)** And finally, I'm going to set the Y label to the tip percent So let's run this one.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=94)** And for some reason, looks like groups with eight people are doing the biggest tips.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=100)** Next is the weekday.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=102)** So I'm going to get the day abbreviation function from the calendar model.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=106)** And then the day of the week is coming from the pickup daytime column, .dt.weekday.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=112)** And then by day is we are grouping by the day of the week and then taking the tip percent and mean, and now I can plot.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=121)** So first I'm going to set the index of by day to day of the week, so it'll be displayed in the resulting chart.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=127)** And now I'm going to plot, saying, the title is tip percent by day and I'd like a 45 degree rotation.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=137)** Next I'm going to change generate chart to add the Y label as tip percent and then finally set the X ticks that will show under the X-axis as a day abbreviation instead of the day number.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=149)** Let's run it.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-graphing-taxi-data?u=76281980&t=150)** And we see that there's no much different in the percent of tipping throughout the week, maybe Thursdays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** csv (1)
> **Speakers:** - [teacher] (1)


### 6. scikit-learn

[↑ Back to Table of Contents](#table-of-contents)

#### [scikit-learn introduction](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=0)** - Scikit-learn is a package for machine learning.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=2)** It implements a lot of [[Algorithms]] and tasks such as classification, regression, clustering, and more.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=11)** Apart from providing algorithms Scikit-learn also provides a lot of utilities that help us with the day to day machine learning tasks, such as pre-processing parameter selection, model evaluation, and more.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=23)** Scikit-learn documentation is one of the best there is in the open source world.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=29)** There are tutorials, examples reference to articles, and much, much more over there.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=35)** For example, for people who are new at machine learning there's a choosing an estimator section.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=41)** You can follow the flow chart until you find the right algorithm for your problem.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=45)** Scikit-learn is huge and has many parts.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=48)** The developers of Scikit-learn made the API consistent so you can learn one algorithm and it's pretty easy to use the [[Representational State Transfer (REST)|rest]] of them.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=57)** We'll cover the interesting parts and learn some guidelines on how you can use and understand Scikit-learn better.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/scikit-learn-introduction?u=76281980&t=64)** As a bonus, it's very easy to get an algorithm created by the [[Data Science]] team and put it in production as is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Data Science]] (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - scikit (1)

#### [Linear regression](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=0)** - [Instructor] In regression, we train a model to predict a continuous target such as a price.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=6)** Scikit-learn comes with several datasets.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=8)** You can learn on these datasets.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=10)** Makes it easy to start learning.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=12)** But you need to remember that they are cleaned up for you.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=15)** Real world data will be much, much messier.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=19)** We are going to predict the prices of houses using the California housing dataset.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=26)** So let's start.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=27)** So from sklearn.datasets import fetch_California_housing, and run it.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=33)** Cal_housing equal fetch_California_housing.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=36)** And let's run the cell.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=38)** Let's have a look at what we got back.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=40)** So we'll use the [[Python (Programming Language)|Python]]-type function to see what it is.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=44)** This is called a bunch.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=46)** All through datasets, you're going to load from sklearn, comes as bunches, and have some common attributes.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=52)** Bunches behave like Python dictionaries, and this is how we're going to treat them.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=57)** So we're going to have a look at the keys.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=59)** And we see we have the data, the target, the frame, target names, feature names, and the description.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=67)** If you look at the type of the data, this is a NumPy array.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=70)** And looking at the feature names, we see that every column in this NumPy array is corresponding to one of these names.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=77)** So the first column is the median income.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=79)** The second column is the house age.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=82)** The third one is the average rooms, et cetera, et cetera.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=85)** If you want to see the whole description, you can print the description.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=90)** We're going to print it out, and then we see that we get some long description.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=95)** It says the output exceeds the size limit.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=98)** And you can click on here to see the full thing in a text editors.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=102)** And now we see some description about California housing dataset, explanation about what is every attribute or feature, and some more references to have a look at.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=114)** Let's close this one.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=116)** Let's look at the target.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=118)** These target are numbers.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=120)** And these are the prices of the houses in hundreds of thousands of dollars.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=124)** And this is what we'd like to predict.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=127)** There are several regression [[Algorithms]] in Scikit-learn.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=130)** Let's go with a random forest regressor.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=133)** So from scikit-learn.ensemble, we import the random forest regressor.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=138)** We're going to extract the data and the target.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=140)** Traditionally, these are called X, with a capital X, and Y.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=144)** And then we are going to create a random forest regressor, and then train it.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=148)** The training function is called fit.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=152)** And we're going to get back a regressor.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=155)** And this is the way that the notebook is rendering it, like some kind of an image.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=160)** How well did our model do?
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=161)** You can use the score method.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=163)** So we're going to call the CLF.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=165)** CLF stands for classifier.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=167)** Score with Xs and Ys.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=169)** And we're going to get 0.97 and several digits others.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=173)** What does this number mean?
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=175)** Is it good or bad?
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=176)** It depends on the algorithm.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=178)** Each algorithm has a default scoring function that makes sense for it.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=182)** In our case, we can have a look.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=183)** So we're going to use the extension that the scientific computation does.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=188)** This is not a valid Python, but it's going to run here.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=191)** And the question mark at the end is going to show the documentation for the score function.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=200)** And this says this is the coefficient of determination for the prediction, or sometime known as R-squared.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=207)** You can go to the Scikit documentation, and see the documentation of R-squared.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=212)** And in R-squared, one is a perfect score.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=215)** We are very close to it.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=217)** Scikit-learn has many other estimators, and you should know the problem and the domain to pick the right estimator for your problem.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=224)** So what did our model learn?
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=226)** Let's run the built-in DIR command on the classifier.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=231)** And again, this is a bit too long, so we're going to open it in a text editor.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=235)** And we see a lot of attribute.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=238)** The convention in Scikit-learn is that everything that ends with an underscore.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=242)** A single underscore is something that the estimator learned.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=248)** For example, if you're going to look at n_features_in, we're going to see that it says eight features.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=255)** And if you're going to look at the shape of X, which is the data, we see that it is 20,000 rows, but we have eight columns, which are the features.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=264)** The nice thing about [[Decision Trees]], it's also easy to see the reasoning behind them.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=270)** Scikit-learn has an export_graphviz, which is exporting the graph into a .file.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=276)** This .file is the .language from the Graphviz toolkit, which is a generic toolkit for generating graphs.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=283)** It is pretty awesome.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=284)** I recommend you try it out.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=286)** This means that you will need .tool or Graphviz installed on your machine.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=291)** Of course, in code spaces, this is already done for you.
>
> **[4:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=294)** So let's do it.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=295)** First, we're going to call export_graphviz.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=298)** We're going to take the first estimator output two, tree.dot.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=302)** We're going to say where it can get the feature_names.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=305)** Won't show us, just the values.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=307)** And then I want the tree of up to five.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=310)** And let's run this one.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=312)** Going back to our explorer, now we see that we have a tree.dot here.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=317)** This is the .file for Graphviz.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=319)** And now we can use the Graphviz utility, dot.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=322)** I'm saying I want the output to be SVG.
>
> **[5:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=325)** The output file name is tree.svg.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=327)** And the input is tree.dot.
>
> **[5:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=330)** So you're going to run this one.
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=332)** Now you see, we have also tree.svg.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=335)** What I'm going to use is IPython display, and basically display the SVG in the interactive prompt.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=342)** So let's run the cell.
>
> **[5:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=344)** And now we get the picture of how the algorithm is deciding where to go, right or left, and what are the thresholds.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=352)** Once you train your model, you'd like to use it to make predictions.
>
> **[5:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=355)** Let's pick a row, and see what our model predicts.
>
> **[5:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=358)** So I'm taking row 17, and then I'm calling predict on this row.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=365)** And this is going to fail, since the predict method worked on several rows at once.
>
> **[6:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=371)** If you look at the shape of our rows, this is just eight or nothing.
>
> **[6:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=375)** We would like one row of eight features.
>
> **[6:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=378)** So we are going to use slicing to get a single row.
>
> **[6:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=382)** But this time, the row is going to have a different shape, one over eight.
>
> **[6:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=386)** And now we can call predict on this row.
>
> **[6:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=389)** And you can see the predicted value is 1.59.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=393)** Let's look at the target, which is the actual value, and see what it is.
>
> **[6:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=396)** So 1.55.
>
> **[6:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=398)** Not so bad.
>
> **[6:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=400)** This covers most of the basic functionality of Scikit-learn.
>
> **[6:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=403)** You call fit to train your model.
>
> **[6:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=405)** You call score to validate the model.
>
> **[6:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/linear-regression?u=76281980&t=408)** And you call predict to, well, predict values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Algorithms]] (1), [[Decision Trees]] (1)
> **Definitions:** is a  (4), is called (2), stands for (1), known as (1), means that (1)
> **Env Vars:** clf (2), svg (2), dir (1)
> **CLI Commands:** python (3), make (1)
> **Code Identifiers:** export_graphviz (2), n_features_in (1), feature_names (1)
> **Versions:** 0.97 (1), 1.59 (1), 1.55 (1)
> **Analogies:** such as (1), for example (1), picture (1)
> **Documentation:** the documentation (2)

#### [Understand train/test split](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=0)** - [Instructor] In real life, your model will need to predict values from data it hasn't seen yet.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=6)** It is common practice to split the data to training and testing parts.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=10)** This reduces the chances of overfitting which means your model is accurate for data itself but will behave poorly on new data.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=19)** SecondLearn makes it easy. First, let's slow the data.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=23)** So we're going to [[Fetch]] the California housing, and then we're going to take the X and the Y from the California housing.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=29)** And let's look at the shape of the X.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=33)** And you see we have 20,000 rows and eight features.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=38)** SecondLearn provides a trained test split function that splits the data into a training and testing.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=46)** So from model selection, we import the train test split, and then we are going to call the train test split with X and Y.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=55)** And say, the test size is 0.3, which means 30% and this is going to return four values: the X for the training, the X for the testing, Y for the training, and Y for the testing.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=67)** And let's look at the X train shape again.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=71)** And we see it's about 70% of the data.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=74)** And now we can train our model.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=76)** So, we take the random forest regressor, fit it only on the X train and the Y train, meaning train it on there.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=84)** And then we are going to calculate the score on the test data that it hasn't seen yet.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=90)** And we get the score of 0.8.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=93)** There are several other ways to split data, and you can look at the site documentation for splitter classes and splitter functions, things like K folding with splitter data to K parts, then take one out, and others.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=107)** Note that sometimes splitting data to test and train randomly might not be a good strategy.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=113)** For example, in fraud, most of your data will contain valid transactions.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=118)** There's a good chance that randomly you'll pick only valid samples, and then your model will learn only to say no fraud.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-train-test-split?u=76281980&t=126)** Learn about your data, and figure out the best way to split it to a good model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Versions:** 0.3 (1), 0.8 (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Preprocess data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=0)** - [Instructor] In most cases, you will need to pre-process the data before you feed it through your model.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=5)** Some [[Algorithms]] are sensitives to the range of feature values.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=9)** Let's look at our data.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=11)** So, from sklearn.datasets we import the fetch_california_housing, and we're going to load the data.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=17)** And this time saying as_frame=True, meaning we're going to get the data as a data frame instead of numpy arrays.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=24)** And then we're going to get the housing data, and call describe on the dataframe.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=30)** You can see for example that the medium income maximal value is 15.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=34)** While if you go to the population, the maximal value is more than 35,000.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=40)** It is a huge difference, and will cause problems for some algorithms.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=44)** Let's have a look.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=45)** So I'm going to get a train test split, and split the data to training data and testing data, 30% saved for testing.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=54)** Let's run this.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=55)** And now I'm going to import the SVR support vector regressor from the SVM model.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=62)** Create one, fit it on the training data, and score it on the testing data.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=69)** Ouch. This is a really bad score.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=71)** What we're going to use is the scaler from the pre-processing model.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=76)** This is going to scale all the values.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=79)** So from sklearn, we import pre-processing, and then X scaled is pre-processing scale of X.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=86)** Let's see what the scaler did.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=87)** So we're going to use [[Pandas (Software)|pandas]] for that.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=89)** So we import pandas as pd, and we create a dataframe from the scale data, telling it the column names are the feature names.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=97)** And then call describe.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=100)** And we see now, that all the values are between minus one and one.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=105)** So now we're going to split the data again, calling train test split, but instead of X, we're going to do it on X scale.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=113)** And Y is not changed with a test size, create a regressor, train it, and then score it.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=121)** And this is a much, much better score.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=123)** We have eight features in our original data.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=126)** We can try and reduce them to four.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=128)** This is known as dimensionally reduction.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=131)** One of the most common algorithms is called PCA, which stands for Principle Component Analysis.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=138)** So importing PCA from sklearn.decomposition, creating a PCA with four components, and then using the fit transform method to transform the X to a different shape.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=152)** And when we look at the shape of the resulting data, it has the same number of rows, but right now only four columns.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=159)** There are many other facilities for pre-processing data in SciKit-Learn.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=163)** It all depends on the algorithm you use, and what's the best data format for it.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=168)** Sometimes you will do the initial pre-processing in pandas.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=172)** So you're going to load the data to a dataframe, maybe join it with data from other sources, filling missing values, et cetera, et cetera.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=180)** And finally, before you move the data into SciKit-Learn, you are going to use the two numpy method to convert the data into a numpy array.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/preprocess-data?u=76281980&t=189)** And then pass this numpy array into SciKit-Learn, and continue as usual.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Pandas (Software)|Pandas]] (3)
> **Definitions:** is a  (3), known as (1), is called (1), stands for (1)
> **Env Vars:** pca (3), svr (1), svm (1)
> **Code Identifiers:** fetch_california_housing (1), as_frame (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Compose pipelines](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=0)** - There might be several steps you need to perform before you finally feed your data to your [[Algorithms]].
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=6)** (indistinct) provides us pipelines which are a way to group together several steps.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=11)** Let's create one, we'll first scale data, then reduce the number of dimensions, and then use an SVR regressor.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=18)** So first, let's load the data.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=20)** So we import California housing and we import the train test split.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=25)** We're loading the data, getting X and Y, and then splitting it to train and test.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=33)** And now we're getting PCA from the composition, pipeline for the pipeline, standard scaler from the pre-processing, and SVR from the SVM model.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=42)** And we can create a pipeline.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=44)** So pipe is now a pipeline, which have three steps.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=48)** First step is called scale and it uses a standard scaler.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=52)** The second one is doing PCA, and it's using four components for the PCA.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=57)** And the final step is the SVR, which uses an SVR.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=63)** Once we have this pipe it behaves like every other classifier in cyclic learn.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=68)** We can call fit to train the data and score to get the data.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=73)** Pipes remove air prone manual steps from your process.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=77)** You can combine as many steps as you want.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=80)** Let's look at the steps we currently have.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=82)** We can call pipe dot steps.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=85)** And you see we have three steps.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=87)** You can change the parameter of one of the steps.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=90)** We can iterate over the list of steps until we find the object we want to change the parameter.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=95)** However, there is an easy way.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=98)** We can use the get params method.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=100)** And if you see that we are going to get all the parameters for every step.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=105)** Each parameter is prefaced by the step name.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=108)** So PCA double underscore or scale double underscore or SVR double underscore.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=115)** And we can set a parameter.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=116)** So for example, if you want to set the SVRC to 0.9, we do set params and then we say SVR underscore underscore C equals 0.9.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=127)** And we can do that.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=129)** And set params returns the pipeline.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=131)** And this is how a pipeline looks inside the interactive prompt.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/compose-pipelines?u=76281980&t=136)** You can also write the pipeline parameters the configuration file and load them, and then run the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** svr (6), pca (4), svm (1), svrc (1)
> **Versions:** 0.9 (2)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Save and load models](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=0)** - [Narrator] At the end, you'd like your model to run in production.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=3)** How can you pass a model you've trained and experimented with to production?
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=7)** Scikit-learn makes it easy.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=10)** [[Python (Programming Language)|Python]] has a built in model called Pickle which can store and retrieve almost any Python object.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=16)** The Pickle Model is Python specific, so you can't save Scikit-learn Pickle Model and have [[Java]] loaded.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=23)** But if your production is using Python, let's say in the microservice architecture, this becomes a non issue.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=31)** Let's have a look.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=31)** So we have a pipeline.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=33)** So we import the California housing, the PCA, the train test split, the pipeline, the standard scaler, and the SVR.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=41)** We load the data, split it to test and train, create a pipeline, train it with the fit method, and then finally look at the score.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=54)** And let's run this cell.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=56)** Now we have our model, and we'd like to save it.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=60)** So I'm going to import Pickle, and then name the output file model.pkl.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=64)** You can pick any name you want.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=66)** And then use with open of the output file in WB Mode, which means write and binary data.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=73)** And this is important as output.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=75)** We do pickle.dump the pipe to the output.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=77)** And let's run this cell.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=81)** If you look at the files, now you see that we have also model.pkl.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=86)** You can give this file to operations, and now they can use it.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=90)** Inside the code, they just need to open the file in read and binary mode, and do pickle.load to get it.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=98)** And to make sure we got the same thing, I'm going to call the score function, and we see that we got exactly the same score.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/save-and-load-models?u=76281980&t=105)** The same way you save the model to a file, you can send it over the network, store it in a database, or do whatever you like with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Java]] (1)
> **CLI Commands:** python (4), make (1)
> **Env Vars:** pca (1), svr (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Handwritten digits](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=5)** - [Computer User] One of the data sets in scikit-learn is handwritten digits.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=9)** Let's load it.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=10)** So we import the load digits, and call the load digits extract X and Y.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=16)** One of the things inside digits is called images.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=21)** This images is the actual image.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=23)** So let's take a random image.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=25)** Let's say image 353.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=27)** We're going to print it out, and we're going to also use matplotlib to show it.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=32)** Let's take a digit.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=35)** So we're going to pick 353.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=37)** We're going to print Y, which is the label of this digit, and then take the images and print out the current image.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=44)** Once we run it, we see that the digit is 4, and this is roughly how the image looks like.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=50)** Kind of look like a 4.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=51)** If you look at the image shape, it is eight by eight pixels.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=56)** But if you look at the X shape, you see that the data is flattened.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=60)** So we have 1700 images, and they are flat vectors of 64, 8 and 8, flatten out.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=68)** What I'd like you to do, and I'm going to close the prompt.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=70)** Write a pipeline that will learn to predict digits.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=74)** Should reduce the number of features to 10 and use K neighbors classifier.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-handwritten-digits?u=76281980&t=79)** Split the data to train and test, and answer what is the score of the pipeline on the test data, and what is the size in kilobyte of the serialized pipeline?

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Speakers:** - [computer (1)

#### [Solution: Handwritten digits](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=5)** - [Instructor] Let's look at my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=7)** So load the data, take a look at an image, look at the shape, and look at the shape of the data.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=18)** And now, I'm going to create the pipeline.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=20)** So I'm going to use PCA to reduce the number of features.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=23)** Train test split the data, the pipeline to create a pipeline, and KNeighborsClassifier.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=29)** Now I'm going to create a pipeline with PCA and KNeighborsClassifier.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=35)** And then, I'm going to split the data to testing and training, call fit to train the pipeline on the training data, and print out the score for the test data.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=47)** The score is 096.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=49)** To get the size of the data, I'm going to use pickle, define what is a kilobyte, and then I'm using the pickle dumps, which is going to return bytes instead of saving to a file.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-handwritten-digits?u=76281980&t=59)** And I'm going to print out the length of the data, which is in bytes, divided by kilobytes, and we see it's about 154 kilobytes.

> [!info]- Semantic Content
>
> **Env Vars:** pca (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 7. Plotting

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of matplotlib](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=0)** - [Instructor] Displaying charts is an important part of the [[Data Science]] process and [[Storytelling]] both in the exploratory state and when presenting reports.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=10)** So far, we used [[Pandas (Software)|Pandas]]' plotting capabilities to display charts.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=15)** Under the hood, Pandas uses a library called Matplotlib.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=19)** There are several other plotting libraries in [[Python (Programming Language)|Python]], but Matplotlib is by far the most used.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=25)** Matplotlib is very powerful and has many features.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=29)** However, it can be a bit low level at times.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=32)** I prefer to use Pandas whenever I can and drop to Matplotlib only when I need to.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=38)** Pandas abstracts a lot of the low level details, but at times, you will need to work directly with Matplotlib to get optimal results.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=46)** The way I usually work is start at the gallery and then find a chart that looks like what I want to do.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/overview-of-matplotlib?u=76281980&t=52)** Click on it, and start with the code below tweaking it to my needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Data Science]] (1), [[Storytelling]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), find (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Use styles](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=0)** - [Instructor] Beauty is in the eyes of the beholder.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=2)** Let's start with some basic examples and see how you can customize Matplotlib and make it look better.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=8)** I usually get someone with a good sense of aesthetics to give me an opinion before I publish a report.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=16)** So, here's our code.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=17)** We import Matplotlib as plt and numpy.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=20)** We create linear space between -6 and 6 with a hundred points.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=25)** The Ys are the sync, which is sign X divided by X, and then we plot the Xs and the Ys.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=33)** Let's run the cell and this is going to generate a line plot.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=38)** It looks good, but sometimes we'd like to get a different look.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=41)** There are several styles available for you to use in Matplotlib.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=46)** We're going to run plt.style.available and we're going to get a list of several styles that are available.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=53)** Personally, I like to use the seaborn whitegrid style.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=56)** So, we're going to do plt.style.use seaborn-whitegrid and then do the same plot again.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=63)** And now we see a slightly different plot, with grid lines a bit more spaced.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=68)** Note that once you change the style, it's going to change the styles of all the charts from that point onward.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=74)** Let's try another style.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=75)** This is the fivethirtyeight style, and again, we use the style and then plot the same data.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=81)** Now we see that the line is wider and we still see the grid lines.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=85)** I encourage you to try out a few styles and see which one you like.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=89)** You can head over to the gallery and check them out.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=92)** If none of the styles fits your needs, you can create your own.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-styles?u=76281980&t=96)** This is a bit more involved, but is well documented.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Customize pandas output](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=0)** - [Instructor] Visual Studio Code can render [[Pandas (Software)|Pandas]] DataFrame nicely.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=4)** Let's have a look.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=5)** So we're going to load the iris dataset from scikit-learn doing load_iris with as frame equal true to get a data frame.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=13)** And we're going to get the first five rows from the data and look at this data frame.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=18)** Let's run the cell and you see it rendered nicely.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=21)** We have headers, we have different colors for even and odd rows, et cetera, et cetera.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=26)** Let's highlight the maximum value in each column.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=29)** This can be done with data frame style highlight max.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=34)** And we run this one.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=35)** We see that we get the value highlighted.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=38)** On the last column of the petal width every value is the maximal value, so all of them are highlighted.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=45)** There are several other built-in styles.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=47)** For example, instead of highlighting the maximal value you can use a gradient.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=52)** The higher the value the darker blue the cell will be painted.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=56)** So let's run this one.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=58)** And now we see that we get values.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=61)** Another nice style is displaying a bar on every cell.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=65)** The bar width is proportional to the value of the cell.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=68)** So df.style.bar.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=71)** And now we see the bars.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=72)** There are several other nice default styles.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=75)** It is also easy to create your own.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=77)** Let's say you'd like to color all the cells with a round number in blue.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=81)** So, I'm doing color blue of value.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=84)** If rounding the number equal to the number we return color column blue.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=89)** Otherwise we return none.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=91)** And we do apply map on our function.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=94)** When we run the code we're going to see only two values colored in blue.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=98)** You can combine styles by chaining them with the dot operator.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=102)** Here's another function.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=103)** This time we're coloring odd numbers.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=105)** So if integer of the value model two equal one we change the background color to orange and now we do apply map of color the round dot, apply map and then color the odds.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=119)** And if you run this one, we are going to see some cells have orange background and some cells have both orange background and blue color.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=128)** Styles can also be applied only to a subset of the columns.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=132)** So we can do apply map with coloring the odd ones and say subset is the first two columns.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=139)** If you're going to run this one, you see it affects only the first two columns and the third one is not affected.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=146)** Apply map works on every element.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=148)** You can also apply style to a whole column.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=150)** Let's make the numbers in the top 50% bold.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=154)** So top 50% of the column.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=156)** We say is top 50 equal to column bigger or equal to the median of the columns.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=162)** And then you use the list comprehension to create values per cell.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=166)** We say the font weight is going to be bold if V, otherwise the empty string meaning no change in style for every value in the top 50.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=175)** And then we apply this function.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=177)** Now let's run it.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=178)** And you see that the top 50 values are now bold.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=182)** I think you get the general idea.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=184)** When you generate report and would like to make it easier for people to find interesting point in your data frame, use styling.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=190)** The documentation is as always very good.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/customize-pandas-output?u=76281980&t=193)** And there are many more examples there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** load_iris (1)
> **Documentation:** the documentation (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Plotting with pandas](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]] bases its plotting on matplotlib.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=3)** It simplifies plotting, and also adds some advanced charts.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=8)** In order to work, you'll need to run the download data script, which will generate stocks.csv.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=14)** First, we're going to load this data.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=16)** So, import pandas as pd, and then read csv of stocks.csv, parsing the date as timestamp, inserting it to the index of the data frame, and then we're going to show the first few lines.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=31)** And we see that the index has times in it, and in the columns we have the symbol, opening, high, low, close, adjusted close, and volume.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=40)** This is a very common trading data.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=43)** Let's have a look at msft price over time.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=46)** So first, we are going to get only the rows that shows [[Microsoft]], and then we are going to plot the closing price using the .plot method, which is going to generate a line plot.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=58)** You can notice that the X axis, which is time based, is rendered nicely by pandas.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=64)** When you want to look at the distribution of a single feature, it is common to use a histogram.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=70)** Pandas also offers a KDE, Kernel Density Plot.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=74)** So you are going to look at the closing price plot, and now .kde.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=81)** And this is going to generate a density plot.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=84)** We see that most prices are around the 220 mark.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=88)** Let's show the monthly volume by stock.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=91)** So we get the data frame, we do a pivot with the columns of the symbol and the values of the volume.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=98)** We resample to monthly frequency, and we sum up the volume for month.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=103)** And finally we do a plot.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=105)** This time a bar plot.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=107)** And we say the xticks is a range of 12, and the rotation is zero.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=113)** When you have very long lines you can break them by putting parenthesis, and then putting one operation per line with the dot.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=121)** And now we can see the volume per stock.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=125)** Pandas offers much more advanced charting capabilities.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=128)** For example, scatter matrix that are great to see the initial correlation between values.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=134)** The documentation is excellent.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/plotting-with-pandas?u=76281980&t=136)** Do read it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[Microsoft]] (1)
> **File Paths:** stocks.csv (2)
> **Definitions:** is a  (2)
> **Env Vars:** kde (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Use Matplotlib with pandas](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=0)** - [[Pandas (Software)|Pandas]] does a lot of the heavy lifting when it comes to plotting.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=4)** But sometimes you'd like to have more control over the generated output.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=8)** To this end pandas returns the generated matplotlib access.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=13)** Once you have the access object you can use any method that matplotlib provides.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=18)** Let's see an example.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=20)** To run the example, you first need to run the download data.py script which is going to generate "stocks.csv".
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=27)** So we're going to use read CSV to read the CSV pass the dates on the date column and set it to the index of the data frame.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=35)** And we're going to look at the first few lines.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=38)** Let's take only the [[Microsoft]] part so query symbol equal msft.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=44)** And now we want to plot a median of the daily volume.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=48)** So daily equals msft, we take only the volume column.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=53)** We do group by, by the index weekday and take the median and finally do a bar plot.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=60)** For the data exploration stage this chart might be good enough.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=65)** When you present, you'd like to make it better.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=68)** So we are going to run the same chart, daily plot bar.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=74)** This time you're going to add a title "MSFT" and say we don't want rotation on the x-axis.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=80)** These are the numbers here that are rotated 90 degree.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=83)** And now we are going to set the tick labels to the days of the week.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=86)** So Monday, Tuesday through Friday.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=88)** We're going to set the X label to the weekday We're going to set the X label to the weekday and the Y label to the volume, and now we can run it.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=96)** Now we have the same chart but now we have a title we have labeling on the axis and we have the name of the weekday below.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=105)** matplotlib API is huge it has a lot of power but you'll need to invest some time learning it.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=112)** Lucky for you that the computation is great.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=115)** I usually start from the gallery, find something that looks like what I want to do Another way of working with matplotlib and pandas Another way of working with matplotlib and Pandas is to pass the a-x the axis of matplotlib And then pandas is going to render the chart on this provided access.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/use-matplotlib-with-pandas?u=76281980&t=132)** on this provided access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[Microsoft]] (1)
> **Env Vars:** csv (2), msft (1), api (1)
> **File Paths:** data.py (1), stocks.csv (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - pandas (1)

#### [Tips and tricks](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=0)** - [Man] Let's write the function to plot sin between a limit.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=3)** So, plot sin gets a limit.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=5)** We create Xs which is a linear space between minus limit to limit with a hundred points.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=11)** And then we use plt plot with the Xs and NP sin of Xs and we give it the label and we call this function plot sin with six and we get the generated function, but this is a static function.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=24)** Even if you click on the controls and do zooming and panning it is still going to show you only parts of this chart, and you can change the limit and see the results right away.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=35)** Jupyter Widgets, or ipy widgets, is the library that does exactly that.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=40)** It gives you widgets that you can display either in Jupyter notebook or visual to the code, interactive.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=46)** So we're going to import the interact, and we are going to use it as a decorator to our function.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=51)** And we're going to set the limit to six.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=54)** Let's run the cell, and now we see that we have a small widget here.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=59)** Once we move the widget, the chart will adjust accordingly.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=63)** However, you see that the limit is not good.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=66)** We can go below zero, which is not something we want.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=69)** So, what we're going to use is an integer slider from the widget list.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=74)** Can set the value, the maximum number, and the minimal number.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=78)** Right, so we do the IntSlider.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=80)** We do interact, and now we set limit is an integer slider between zero and twenty.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=87)** If you're going to run this one, now the limits are going to be between zero and twenty.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=92)** Right, it start with zero, which is probably not what we want.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=96)** So, let's do, value equal ten, and now when we are going to run the cell the initial value is going to be ten.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=105)** Ipy widgets comes with a lot of widget you can play with.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/tips-and-tricks?u=76281980&t=108)** Go and experiment.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2), we call this (1)
> **Tools:** jupyter (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [man] (1)

#### [Other plotting packages](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=0)** - [Instructor] Matplotlib is the library for plotting in [[Python (Programming Language)|Python]], but it's not the only player in town.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=6)** Matplotlib is old, which means it's working, but it generates static images.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=11)** Most of the newer plotting libraries, use the browser to get more interactivity.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=16)** I'm going to share an example with Plotly, and mention some other libraries you might want to have a look at.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=23)** Plotly is a graphing library that supports several programming languages.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=27)** Plotly generates interactive plots, for example, you can see here, I can see the tool tips.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=33)** I can do zooming and panning all within the browser.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=37)** Let's see an example.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=38)** I'm going to load the track data, so input [[Pandas (Software)|pandas]] as pd, and read csv.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=43)** Parse the time column and set it to the index.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=46)** And now I'm going to re-sample the data frame, with a three minute interval with mean and reset the index.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=53)** And I'm going to show you the first few rows.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=56)** Right, so we have time as a column again, due to the reset index, the latitude, longitude, and the height.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=64)** And Plotly works with data frames.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=66)** So we import plotly.express as PX, and we say we want a bar plot from the data frame.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=71)** And we say where to get the X and the Y values.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=74)** What are the column names?
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=76)** And finally show the figure.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=79)** And now I have an interactive plot, with automated tool tips and I could do zooming and panning, and all the other things you're used to do with charts.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=88)** You can even write this chart into an [[HTML]] file, using fig.write_html.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=94)** And if you're going to look back at our code, now we see we have track.html, which can be opened in the browser, and we show exactly this chart interactively.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=103)** For most sophisticated reports, look at Plotly's Dash.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=107)** Let's take a look at some other plotting libraries.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=110)** The list is long, and you should evaluate, and pick the ones that fit your needs.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=115)** Seaborn adds a lot of chart types on top of Matplotlib.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=119)** Bokeh generates interactive plots in the browser.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=123)** Also supports custom visualization.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=126)** For example, this is an interactive plot by Bokeh.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=129)** We have movies, each movie we have the title of the year and the revenue.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=134)** And we can filter out movies by number of reviews, genre and other properties.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=141)** Altair uses a concise data language, to generate interactive plots.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=146)** As rule of thumb, if you're just starting start with Pandas, it'll probably be the easiest path.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=152)** If you need some interactive plotting, probably go with Plotly.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-plotting-packages?u=76281980&t=156)** You can also consult the PyViz website, which lists a lot of plotting libraries, and their capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[HTML]] (2), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **File Paths:** track.html (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** write_html (1)
> **Env Vars:** html (1)
> **Best Practices:** rule of thumb (1)

#### [Challenge: Stock data bar charts](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-stock-data-bar-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-stock-data-bar-charts?u=76281980&t=5)** - [Instructor] For this challenge, you'll need to run the 'download_data' script in order to get stocks.csv.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-stock-data-bar-charts?u=76281980&t=12)** Once you have them, you should load the data and then create a bar chart that has the X as the month, the Y is the median closing price, and each stock should have its own chart.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/challenge-stock-data-bar-charts?u=76281980&t=24)** The output should look like this.

> [!info]- Semantic Content
>
> **File Paths:** stocks.csv (1)
> **Code Identifiers:** download_data (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Stock data bar charts](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=5)** - [Speaker] Here is my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=7)** We import [[Pandas (Software)|pandas]] as pd and we read the CSV file passing the date column as dates and let's have a look at the first few rows.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=16)** Now I'm going to create a month column by saying df month equals df date.dt.month and now I'm going to rotate the data with a pivot table.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=28)** The columns are going to be the symbol.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=30)** The index is going to be the month.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=32)** The values are going to be the closing price and the aggregation function for all the values that follow within the same month is going to be the median.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=41)** Let's have a look at the generated data frame.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=43)** So we have the stocks, the month and then the values, which are the median and now we are going to generate the plot.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=51)** So I'm going to take the month abbreviation from calendar and then I'm going to create a bar plot with a title which is median monthly close and no rotation on the X axis.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=63)** Now I'm going to set the axset labels to the month abbreviation and set the Y label for the closing price.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/solution-stock-data-bar-charts?u=76281980&t=71)** Once I run this, I have this chart with the title, the Y axis, the X axis, and the legend for every symbol.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** csv (1)
> **Speakers:** - [speaker] (1)


### 8. Other Packages

[↑ Back to Table of Contents](#table-of-contents)

#### [Other packages overview](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=0)** - [Instructor] People sometime find the world of open source intimidating.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=5)** There are many packages to choose from, some of them with overlapping capabilities.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=11)** Which one should you choose?
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=13)** Here are some guidelines I use when evaluating packages.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=17)** Ask around.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=18)** The community is helpful and most people are knowledgeable about which packages are good and which are not.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=25)** Note that people tend to like the shiny new stuff, but if you ask enough people, you will get the right idea.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=32)** Sites such as Stack Overflow are a great place for asking questions.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=38)** Most packages are hosted on [[GitHub]].
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=41)** Go over and check the activity, the number of committers, the number of stars, et cetera.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=47)** Don't be intimidated by the number of issues.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=51)** Some of them are feature requests and there are many duplicates.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=55)** In general, packages without issues are ones that nobody uses.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=60)** After you found the package you like, go and evaluate it.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/other-packages-overview?u=76281980&t=63)** Write some code using real data and see how it behaves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** find (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Go faster with Numba](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=0)** - [Instructor] NumPy will be fast enough for most of your needs, especially when you avoid for-loops and use vectorized code or ufuncs.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=9)** However, there are cases when you can't vectorize your code or that you like to squeeze even more performance.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=17)** The common approach in [[Python (Programming Language)|Python]] is to write soft, performance-sensitive code in Cython or C and use it from Python.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=25)** However, before going that route let me show you another approach that is less painful.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=31)** Numba is a JIT compiler for Python.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=35)** What a JIT compiler does, it is going to create a specific machine code for a given function.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=42)** So the first time you decorate a function with the number ngit or JIT decorator it is going to do nothing.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=49)** The first time you call the function, Numba is going to check, is there a compile code for this function with a couple of integers.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=57)** If no, it is going to generate a compiled machine code which is highly optimized for that specific type of numbers and then use it.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=67)** Next time you call a function, it is going to see that the compiled version is already there and use this version.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=74)** Under the hood, Numba uses the LLVM compiler infrastructure.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=79)** It is a mature compiler with a lot of optimization built in.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=84)** Let's have a look.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=85)** So here's our code.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=86)** This is polyn.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=88)** It gets N as an argument, set a total to zero and then for something in range of N, it is going to calculate again and again seven times N squared minus three times N plus 42, and return the total.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=102)** And we're going to use the timeit module with 10,000 iteration to see how much time it takes.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=107)** So let's run the cell.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=109)** And we see that it takes about 155 microseconds.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=114)** Now let's use Numba, so import Numba and then we decorate the function with numba.jit or numba.njit, and then we define the same function.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=123)** I just called it with another name but the coding side is exactly the same.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=128)** And again, we're going to run timeit on the function.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=133)** So right now we are at 20 microseconds.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=136)** So let's do the calculation.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=138)** 155 divided by 20.3.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=143)** And we see this is about 7.6 times faster just by adding the Numba.jit decorator.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=149)** Numba shines when we run non vectorized code like a follow in Python.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=154)** There are options to squeeze even more optimization from the JIT compiler.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/go-faster-with-numba?u=76281980&t=159)** Do read the documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **Env Vars:** jit (4), llvm (1)
> **CLI Commands:** python (4)
> **Versions:** 20.3 (1), 7.6 (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Understand deep learning](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=0)** - [Voice Over] [[Deep Learning]] is a hot subject.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=2)** In its base, Deep learning uses [[Neural Networks]] which has been around for a while.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=7)** However, it uses some new ways of utilizing [[Hardware]] such as GPUs to gain some very impressive results.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=16)** There are several deep learning libraries available.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=18)** Lucky for you, most of them are available in [[Python (Programming Language)|Python]].
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=22)** You can choose from [[TensorFlow]], [[PyTorch]], MXNet, and others.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=28)** We're going to work with Keras, which is part of TensorFlow and it's easier to start with.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=34)** We're going to identify handwritten digits.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=37)** We use a data set that comes with Scikit-Learn.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=40)** So from Scikit-Learn data sets we import "load-digits" and the digits is "load-digits" and we are going to run the cell.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=48)** Let's have a look at the digit at location 37.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=52)** And this is the image.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=53)** If you look at the target at the same location we see that this is the number 9.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=60)** The images are constructed of 8 on 8 images but the data is flattened out to vectors of 64.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=67)** Each one containing a pixel.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=70)** We are going to build a network.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=72)** They're going to have input units, and for us the input units are going to be the 64 pixels.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=77)** So this one on the left is going to be 64.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=80)** Then hidden units.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=82)** And finally the output units, with the [[Probability]] for each of them.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=86)** We are going to guess 1 of 10 digits.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=89)** So we are going to have 10 output units.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=92)** First, we're going to split and train the data but we'll need to do one extra step.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=96)** The target is one dimensional.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=98)** With values from 0 to 9.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=100)** You will need to transform each value to an array with 10 elements.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=104)** All of them 0 except the one with the digits.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=106)** Since this is a common task Keras has the utility to do just that.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=111)** Right, so if you take "to_categorical" from "tensorflow.keras.utils" and do "to_categorical" from 0, 1, 2, 0, 1 and we are going to run it.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=122)** And do ignore the warnings on my machine, it is not set up to use GPU.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=128)** We see now that we get the output as vectors of 3.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=132)** Each row has 3 elements: either 0, 1, or 2 and 1 only in the place for the right value.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=137)** So our first value is 0, we have 1 here and 0 is here.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=141)** The second value is 1, So we have 0 on the first location, 1 in the second location, and 0 at the [[Representational State Transfer (REST)|rest]], et cetera, et cetera.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=149)** So now X is Y of data and Y we're going to convert it to "to_categorical".
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=155)** So we'll get the right shape.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=157)** And now from Scikit model selections, we're going to do the train test split and split the data to training and testing data.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=164)** Now we're going to build our model.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=166)** So from Keras we import sequential and from the layers we import the Dense layer and Activation layer.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=173)** The input dimension is the shape of the X at location 1 and the output dimension is the shape of Y at location 1.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=181)** So to create a sequential model, start with a Dense of 128 and the input shape is the input dimension in our case 64.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=191)** Then an Activation layer, then another Dense with an output dimension in our case 10 and then another Activation, this time with "sigmoid".
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=201)** And we're going to compile the model telling it what is the loss, what is the optimizer, and what are the metrics that we are interested in?
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=209)** Let's run this one.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=210)** And now Keras generated a TensorFlow model.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=213)** Now we can call fit on the model and we're going to say we want it for 10 epochs.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=220)** Now that the model is trained, we can call evaluate.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=223)** This is slightly different than the score method of Scikit-Learn, but roughly the same.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=229)** So we're going to get the accuracy which is the second parameter.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=232)** So let's run this cell and we can see that we are at around 0.95 accuracy, not bad.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=238)** Now let's predict.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=239)** So we'll get X test, the first three arguments and we see we get an array with probability for each number which is what the neural network clearing.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=249)** But for us, this is not that helpful.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=251)** What we're going to do is we're going to call argmax on this input, meaning I want the location of the biggest argument and axis=1 meaning I want to work it on every row.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=262)** Once we run this one, we're going to see that it gets 5, 0, and 4.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=268)** And if you're going to do the same thing for the Y test, we're going to see it is actually 5, 0, and 4.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=275)** We can save our model to disk and load it later.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=277)** So model.save('digits.h5') We're saving it to a format known as aGF5.
>
> **[4:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=285)** Later on we can load the model from the disk and run it again, predicting the test.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-deep-learning?u=76281980&t=293)** And you see we get the same results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (4), [[Deep Learning]] (3), [[Probability]] (2), [[Neural Networks]] (1), [[Hardware]] (1)
> **Code Identifiers:** to_categorical (3), agf5 (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** python (1)
> **Env Vars:** gpu (1)
> **Versions:** 0.95 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [voice (1)

#### [Work with image processing](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=0)** - [Instructor] When it comes to [[Image Processing]] you have many options in [[Python (Programming Language)|Python]].
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=4)** Let's have a look at the few most common ones.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=7)** Inside matplotlib you have some utilities to display images.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=12)** There are some filters in the scipy.ndimage module.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=18)** Second image has many [[Algorithms]] for working with images.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=22)** Pillow can be used to reshape images and paint on them but by far the biggest and most comprehensive library is OpenCV.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=31)** Open CV is written in C++ and has great bindings to Python.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=35)** It'll perform most of the tasks you'd like to do on images and then some.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=40)** Let's have a look.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=42)** Say we have this image of a sign.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=44)** By the way, I highly recommend hiking this route.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=47)** Let's start.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=48)** So I'm going to import cv2 and then the image is cv2.imread for image read, the sign at CSV, and let's run the cell and we see that we have 1700 on 2300.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=62)** This is the image size and three and this is for every pixel the colors in it.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=68)** Let's have a look.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=70)** So we're going to use matplotlib show the image.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=73)** Matplotlib does show the image, but the colors seem off.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=78)** The reason is that OpenCV uses BGR encoding and not RGB.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=84)** So we can convert using the cv2.cvtColor the image and we tell it cv2.Color_BGR2RBG, and if you're going to show this one now it'll have the right color.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=100)** A common task is to convert images to gray scale and this task can be done again with the cvtColor functions and this time we're going to use Color_BGR2GRAY and going to show the image.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=115)** This time the image does not look like gray but the reason now is the color map that matplotlib is using.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=122)** If you're going to tell matplotlib to show the image but use the gray color map, it is going to look just fine.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=130)** Let's find the edges of the image.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=132)** We're going to use the Canny algorithm on the gray image and we're going to give it two thresholds, 80 and 150, and again we're going to show the edges image with the gray column map, and now we see that we've detected most of the edges.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/work-with-image-processing?u=76281980&t=147)** OpenVC can do much more and there are many examples and tutorials on how to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Image Processing]] (1), [[Algorithms]] (1)
> **CLI Commands:** python (2), find (1)
> **Env Vars:** csv (1), bgr (1), rgb (1)
> **Code Identifiers:** cvtcolor (2)
> **Speakers:** - [instructor] (1)

#### [Understand NLP: NLTK](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=0)** - NLP stands for [[Natural Language Processing (NLP)|Natural Language Processing]].
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=4)** NLP deals both with understanding text, and to some extent generating text.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=10)** Most of the tasks are in the understanding side but with the rise of personal assistance and the rise of chat bots, text and speech generation is on the rise as well.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=21)** In [[Python (Programming Language)|Python]], we have several libraries that work with text.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=25)** Scikit-Learn has some text processing capabilities.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=28)** [[Deep Learning]] has been used successfully in NLP, so Keras, [[TensorFlow]] and others are options as well.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=36)** NLTK, which stands for Natural Language Toolkit was originally designed for teaching NLP, and during the time gained a lot of practical tools.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=45)** And [[spaCy]], which is an industrial strength NLP package with many practical tools built over a nice API.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=52)** And this is the one we're going to have a look at.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=56)** Once you install Spacy, you will also need to download a pre-trained model.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=61)** This is done with Python, -m spacy download, and then the model name.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=65)** In our case, it's the English one, or the English core Web sm for Small.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=71)** This is already done for you in the code space so you don't have to run this command.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=75)** Let's have a look.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=76)** So we are going to take from Scikit-Learn data sets the [[Fetch]] 20 news groups, and we're going to get just a space one and remove the headers and the footers.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=87)** We'll take one single text and print it out.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=91)** And here is a text that we have.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=93)** Now we're going to import Spacy and we're going to load the core web small that we downloaded.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=99)** Then say the doc is NLP of the text and look at the doc.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=104)** Spacy is going to complain about missing libraries for working with GPUs.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=109)** You don't have to worry about that.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=111)** It is still going to work.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=113)** And if you look the output document looks very much like the original text.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=117)** But if you look at the type of the document we are going to see that this is something else.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=124)** This document contains a lot of information about the text.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=127)** For example, we can list the document sentences and get the first sentence.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=133)** Splitting text to sentences is surprisingly hard task.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=136)** We can iterate over the sentences and look at the [[Tokens]].
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=140)** So for every sentence, for every token in the sentence we're going to print the token with a text and the tag of the token, right?
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=148)** And these tags, VB for verb, et cetera is something that you will need to learn about.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=154)** The convention in Spacy is that attributes without underscore at the end are numeric and one that ends with an underscore like the tag here are textual.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=164)** Document itself also has entities or ents which are the name entities it can find.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=170)** So for every entity in the document you print the text and the label of it.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-nlp-nltk?u=76281980&t=175)** And you see that "Army" is an organization "Intelligent" is an organization, and "luck" was a person.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[spaCy]] (6), [[Python (Programming Language)|Python]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Deep Learning]] (1), [[TensorFlow]] (1)
> **Env Vars:** nlp (6), nltk (1), api (1)
> **Definitions:** is an  (3), stands for (2), is a  (1)
> **CLI Commands:** python (2), find (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - nlp (1)

#### [Working with bigger data](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]], NumPy, and most of the [[Data Science]] library in [[Python (Programming Language)|Python]] works best when the data fits in memory.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=7)** Moving outside a single machine is hard.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=11)** Try as much as you can to stay inside the limit of one machine.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=15)** If you lack memory, before you start with a [[Big Data]] solution, remember that you can rent a cloud machine with several terabytes of memory.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=23)** But sometimes you will need to deal with data that is too big to fit in memory.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=28)** Before you start the painful and expensive route to big data systems, there are some options you can try.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=35)** Most of the data is stored in [[Databases]], and Pandas can read and right to databases.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=42)** Before we start, you need to run the download data script so you'll have the taxi.csv file in this directory.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=50)** We're going to use SQLite.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=53)** SQLite is an embedded database, and it's easy to work with.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=57)** So what we're going to do is we're going to take the data from CSV, and insert it to a database.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=63)** This process is known as ETL.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=66)** ETL stands for extract, transform, and then load.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=70)** So we're going to import SQLite, Pandas, and tqdm which is a nice library for showing progress bars.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=77)** We're going to use SQLite to connect to the database.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=80)** And this is going to create a database if it does not exist.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=83)** Now we are going to read the CSV, but in chunks.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=87)** So we're going to say "chunksize=!00_000".
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=91)** Pandas is going to load up to 100,000 lines in memory at once.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=96)** And this is chunks, which is an iterable.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=97)** We can iterate over it, so we can do four chunk in tqdm of chunks, which is basically like four chunk in chunks, but it's going to show a progress bar.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=108)** And then we're going to do to_sql.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=111)** This is the data frame, to_sql method.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=114)** The [[SQL]] table is called "rides".
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=116)** Using the connection we tell it that we don't want to store data frame "index" in the database, and if the table exists, append the data into it.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=128)** Let's run this one.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=131)** And now we are done.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=132)** If we're going to look at the files again, we are going to see now that we have the taxi.db on the disc.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=141)** And now we can use SQL to query the data.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=144)** So, from "SELECT", "passenger_count", and the "COUNT of vendorID as count" from the rides where the passenger_count is bigger than one, group by the passenger_count.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=156)** And we are going to do with SQL, with this SQL statement and the connection to the database, and show the data frame.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=165)** And we see the passenger count, and how many rides with these passengers we had.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=169)** And we have very few rides with big parties.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=173)** Most databases run on strong machines and have a lot of computation power and storage capacity.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=179)** It's common practice to use the database to run some filtering and aggregation to make the data small enough to fit in memory and then continue with Pandas from there.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=189)** Which means you will need to learn SQL, which is another language.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=192)** But it is well worth the effort.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=195)** A lot of data out there is in [[Relational Databases]].
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=199)** Apart from SQL, you can also look at the HDF5 format which is designed specifically to store big matrices.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=207)** If you do need to go outside of a boundary of a single machine, you can have a look at Dask first.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=214)** Dask provides an API very similar to NumPy and Pandas.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=220)** We have an array, data frame, a bag, delayed, and futures.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=224)** But most of the time you're going to work with array or data frame.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=227)** When you run a calculation, Dask will automatically distribute the work among workers.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=233)** And these workers can be either threads on processors on the same machine, or by using Dask distributed on a pool of machines.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=241)** Let's have a look.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=243)** We import Dask data frame as dd, and now we do dd.read_csv, again, our taxi, and I'm going to help it and say that datatype for the vendorID is float64.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=256)** And we see that this cell runs very fast comparing to Pandas.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=260)** This is because Dask didn't actually load the whole data to memory.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=265)** Now we can do, for example, vendorID value_counts.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=269)** And we are going to run this one.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=271)** Again, it is going to be very fast because there's no calculation happening.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=276)** Dask is just registering, what are the calculations that need to be done?
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=279)** But until we call compute, nothing actually happens.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=283)** So now let's do value_counts with compute.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=288)** And now you see it's going to take more time, but it's going to give us a result.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/working-with-bigger-data?u=76281980&t=292)** The reason Dask works in this format is that we can chain computation, letting Dask decide how to make them parallel and only at the end run them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[SQL]] (6), [[Databases]] (3), [[Big Data]] (2), [[Data Science]] (1)
> **Env Vars:** sql (6), csv (2), etl (2), select (1), count (1)
> **Code Identifiers:** passenger_count (3), vendorid (3), to_sql (2), value_counts (2), read_csv (1)
> **Definitions:** is an  (2), known as (1), stands for (1), is a  (1), is called (1)
> **CLI Commands:** make (2), python (1)
> **Analogies:** similar to (1), for example (1)
> **File Paths:** taxi.csv (1)
> **SQL:** select (1)


### 9. Development Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Development process overview](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=0)** - [Instructor] We work in teams.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=2)** Teams allows us to do work that individuals can't do.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=6)** And in good teams, the whole is much greater than the sum of its parts.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=12)** However, working in teams means we need to do some adjustments.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=17)** There are many variants of the development process, and almost every team is a bit unique in the way it works.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=25)** I'll try to show you some of the things I think strike good balance between helping the team and letting do your thing.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=32)** Process is sometimes referred to as accidental complexity.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/development-process-overview?u=76281980&t=36)** It's the things you need to do and not strictly [[Data Science]], but are essential to get the product out of the door.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understand source control](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=0)** - There is a poem going around.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=2)** "99 little bugs in my code.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=4)** Take one down, patch it around, 117 bugs in my code."
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=9)** We do make mistakes, and sometimes we need to get back to an earlier version of the code we wrote.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=15)** This is a job for source control.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=17)** The other major job of source control is to allow several people to work on the same code.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=23)** There are many systems for source control, but [[Git]] is by far the most widely used one.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=29)** Most IDs have support for Git, and you can run Git command from inside your ID, such as visuals to the code.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=36)** Learning Git is outside the scope of this course.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=39)** Do check our offering on the subject.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=42)** Sites such as [[GitHub]] are offering more than just [[Version Control]].
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=46)** They have support for the full software life cycle.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=49)** One problem that is more specific to scientific application is data files, which tend to be large.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=56)** It's not a good idea to commit large files into Git.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/understand-source-control?u=76281980&t=61)** Take a look at Git large file support, known as LFS, or even at DVC, which is built for Machine Learning Projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[GitHub]] (1), [[Version Control]] (1)
> **CLI Commands:** git (6), make (1)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** lfs (1), dvc (1)
> **Analogies:** such as (2)
> **Tools:** github (1)
> **Speakers:** - there (1)

#### [Learn code review](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=0)** - [Instructor] Linus's law states that "given enough eyeballs, all bugs are shallow."
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=5)** It means that the more people look at your code, more bugs are likely to be found.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=11)** I teach a lot of classes, and my students catch my mistakes every time before I have a chance to find them myself.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=19)** The process of letting people look at your code and comment on it is called [[Code Review]].
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=25)** I highly recommend it will be a central part of your development process.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=30)** You'd be amazed how many bugs are caught and how many improvements people come up with.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=36)** There are many ways to do code reviews, from sitting together in a room and going over your code to online tools where people comment on the changes you make to the code.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=46)** No matter the way you're doing it, it's important to remember that people are commenting on your code and not on you.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=52)** Some people get very defensive when people comment on their code, and it makes the code review process very painful.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=60)** Getting everyone to understand you're just trying to make the code better and fix issues and keeping everything technical and professional is very important step in making good code reviews.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=72)** Some companies have checklists, such as: did you run the tests, is the code easy to understand, are there any new dependencies, and more.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=82)** Try to think of such a list from your experience, which means from the mistakes you made.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=88)** I think you'll find it useful.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=90)** In the world of hosted [[Git]], it's very common to create a pull request.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=95)** This means that you work on a feature branch, and once you're happy with your code, you create a pull request that people can comment on.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=104)** Here's an example from the [[Pandas (Software)|pandas]] project.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=107)** We have a pull request that Jeff submitted, and then they started a discussion about the pull request with comments from various people.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/learn-code-review?u=76281980&t=116)** And every time you see that the response is a new change to the code, and people can comment that, etcetera, etcetera, until finally, when the code is deemed good enough, it can be merged back to the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (2), [[Git]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** find (2), make (2), git (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Testing overview](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=0)** - [Instructor] An essential part of your process should be testing.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=4)** Testing ensures that code behaves the way it's supposed to, and that we didn't break one thing while fixing another or adding a new feature.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=13)** There are many kinds of tests, unit tests, regression tests, acceptance tests, functional tests, stress tests, fuzzers, and many more.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=23)** You don't have to be a testing expert.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=25)** Pick the areas in your code you think are most important and test them.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=30)** Tests also have a downside.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=32)** It takes time to write them, and every time we change our code, we also need to change some tests.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=37)** We say tests add math to your code and make changes more difficult.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=43)** I'd say the testing is a balance between pain and gain.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=48)** The gain is how much test you write.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=49)** The pain is the cost of an error in your code.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=53)** If you're writing an internal application for your company, bugs, as pleasant as they are, are not that critical.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=60)** However, if you write software that lives depend on it, or software that will run a device on Mars, bugs are really painful.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=69)** Note that no matter how much you test, bugs will get into production.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=74)** You need to be ready with a way to monitor your program for bugs, and a way to quickly fix and ship it to production.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=84)** The method will vary a lot depending on the system you use.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=88)** NASA has one of the most strict development process in the world and they still manage to ship bugs to outer space.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=96)** However, NASA will manage to fix bugs on Mars.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=101)** I'm sure your situation is not that difficult.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=105)** Another thing you might want to consider is [[Continuous Integration (CI)|continuous integration]], or CI system.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=111)** These systems will monitor your source control, and every time they detect a change to your source control, they will pull the code and run all the tests.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=120)** This helps avoid the problem of, "I don't care it runs on your machine; we don't sell your machine to customers," meaning it'll find integration problems quickly.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=132)** When a test fails in continuous integration, the system will alert the team, maybe with a message on a chatroom, maybe with an email.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=140)** Now the whole team know we have an integration problem and will work or fix it.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-overview?u=76281980&t=145)** Continuous integration system also used to run tests that take long time or require complicated set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** nasa (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Testing example](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=0)** - [[Python (Programming Language)|Python]] has a built in test-with.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=2)** However, most projects and companies prefer to use pytest, which is more Pythonic and is packed with features.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=10)** Let's see an example.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=12)** As soon I have my function, which scales a vector.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=15)** It gets a vector in an N and return the vector times N.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=18)** And now we're going to write a test.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=20)** Test files should either be test underscore something .py or end with _test.py.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=26)** In the code, we import numpy.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=28)** We import our scale function and then write a test.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=32)** We create an array, set the N, and this is the expected result, color code to get the output, And finally call numpy all close on the expected, the output, specifying that nans are equal.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=46)** And we use the built-in assert to make sure that this is true.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=50)** Pytest is a discovery based system.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=52)** It's going to discover all the test files and then inside the test files all the functions that start with test and run them.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=60)** At first, you need to configure Visual Studio Code to run pytest.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=64)** You do this by clicking on the hamburger menu, going to view, and then the command palette.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=72)** Here find Python: Configure Tests, pick pytest, and then say that the Root directory is dot.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=80)** And give it a minute.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=82)** Eventually you're going to see either a triangle or a check mark here.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=87)** And now you can click on it to run the test.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=90)** You are going to move to the test view.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=92)** And here you see that we have a single test inside chapter 9 0 9 0 5, and this test is passing.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=101)** Pytest has much more to offer such as parameterize tests, fixtures, and more.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=108)** Apart from testing that your code is correct, you can also run regression tests that make sure that the accuracy of your models is not degrading.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/testing-example?u=76281980&t=116)** Check out my course about testing scientific applications for more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), make (2), find (1)
> **Prerequisites:** configure (2)
> **File Paths:** _test.py (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on reaching the finish line.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980&t=4)** Now you need to practice.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980&t=6)** Grab some data and start asking questions.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980&t=10)** A good place to start is Kaggle, which offers a variety of tasks with many levels.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack-coderpad/next-steps?u=76281980&t=17)** Keep hacking, and stay curious.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


## Instructor

- [[Miki Tebeka]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/data-science-foundations-python-scientific-stack-3084641/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Science Foundations
- Data Science

## Path Context

### In [[Advance Your Python Skills for Data Science]]
← [[Python For Data Science And Machine Learning Essential Training Part]] | **3 of 6** | [[Python Data Analysis]] →

## Appears In

- [[Advance Your Python Skills for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[More Python Tips, Tricks, and Techniques for Data Science]] — Python (Programming Language), Data Science
- [[Python for Data Science and Machine Learning Essential Training Part 2]] — Python (Programming Language), Data Science
- [[Python For Data Science And Machine Learning Essential Training Part]] — Python (Programming Language), Data Science
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)

---

[↑ Back to top](#)