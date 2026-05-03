---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-analysis-2020
url: "https://www.linkedin.com/learning/python-data-analysis-2020"
duration_minutes: 150
duration: 2h 30m
level: Intermediate
updated: 3/11/2020
learners: 71951
skills:
  - Python (Programming Language)
  - Data Analysis
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50"
linkedin_topic: Data Science
learning_paths:
  - '[[Anaconda Python for Data Science Professional Certificate]]'
prev_courses:
  - '[[Learning Python (2021)]]'
path_nav: '[{"path":"Anaconda Python for Data Science Professional Certificate","position":5,"total":5,"prev":"Learning Python (2021)","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20Data%20Analysis%20(2020).md)

![Python Data Analysis (2020)](https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50)

# Python Data Analysis (2020)

> Data science is transforming the way that government and industry leaders look at both specific problems and the world at large. Curious about how data analysis actually works in practice? In this course, instructor Michele Vallisneri shows you how, explaining what it takes to get started with data science using Python.Michele demonstrates how to set up your analysis environment and provides a ref

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-2020) | 2h 30m | Intermediate | 72K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Get started in data analysis with Python](#get-started-in-data-analysis-with-python)
  - [What you need to know](#what-you-need-to-know)
  - [What's new in this update](#whats-new-in-this-update)
- [**1. Installation and Setup**](#1-installation-and-setup) (5 videos)
  - [Install Anaconda Python on OS X](#install-anaconda-python-on-os-x)
  - [Install Anaconda Python on Windows](#install-anaconda-python-on-windows)
  - [Working with Jupyter Notebooks](#working-with-jupyter-notebooks)
  - [Using the exercise files](#using-the-exercise-files)
  - [Using Python in the cloud](#using-python-in-the-cloud)
- [**2. Data Structures in Pure Python**](#2-data-structures-in-pure-python) (5 videos)
  - [Warmup with Python loops](#warmup-with-python-loops)
  - [Sequences: Lists, tuples, and the slicing syntax](#sequences-lists-tuples-and-the-slicing-syntax)
  - [Dictionaries and sets](#dictionaries-and-sets)
  - [Comprehensions](#comprehensions)
  - [Advanced Python containers](#advanced-python-containers)
- [**3. Wordplay: Anagrams and Palindromes**](#3-wordplay-anagrams-and-palindromes) (5 videos)
  - [Anagrams overview](#anagrams-overview)
  - [Loading a dictionary](#loading-a-dictionary)
  - [Finding anagrams](#finding-anagrams)
  - [Challenge: Palindromes](#challenge-palindromes)
  - [Solution: Palindromes](#solution-palindromes)
- [**4. Arrays with NumPy**](#4-arrays-with-numpy) (5 videos)
  - [NumPy overview](#numpy-overview)
  - [Creating NumPy arrays](#creating-numpy-arrays)
  - [Indexing NumPy arrays](#indexing-numpy-arrays)
  - [Doing math with NumPy arrays](#doing-math-with-numpy-arrays)
  - [Special arrays: Records and dates](#special-arrays-records-and-dates)
- [**5. Use Case: Weather Data**](#5-use-case-weather-data) (7 videos)
  - [Overview of use case](#overview-of-use-case)
  - [Loading station and temperature data](#loading-station-and-temperature-data)
  - [Filling missing values](#filling-missing-values)
  - [Smoothing time series](#smoothing-time-series)
  - [Weather charts](#weather-charts)
  - [Challenge: Weather anomalies](#challenge-weather-anomalies)
  - [Solution: Weather anomalies](#solution-weather-anomalies)
- [**6. pandas**](#6-pandas) (4 videos)
  - [pandas overview](#pandas-overview)
  - [DataFrames and Series](#dataframes-and-series)
  - [Indexing in pandas](#indexing-in-pandas)
  - [Plotting](#plotting)
- [**7. Use Case: Baby Names**](#7-use-case-baby-names) (6 videos)
  - [Overview of use case](#overview-of-use-case)
  - [Loading data sets](#loading-data-sets)
  - [Comparing name popularity](#comparing-name-popularity)
  - [Yearly top ten names](#yearly-top-ten-names)
  - [Challenge: Unisex baby names](#challenge-unisex-baby-names)
  - [Solution: Unisex baby names](#solution-unisex-baby-names)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started in data analysis with Python](https://www.linkedin.com/learning/python-data-analysis-2020/get-started-in-data-analysis-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/get-started-in-data-analysis-with-python?u=76281980&t=0)** - [[Data Science]], it powers so much of modern life, the internet, social media, [[Artificial Intelligence (AI)|artificial intelligence]]. But also on a personal level, the [[Statistics]] from your Fitbit or the next song recommended by Pandora. And, truly, data science is driving a personal and social evolution. We're constantly learning and getting better and accomplishing monumental goals. However, do you feel like you're missing the boat? Maybe you're watching all these advances, but you don't really know how to get in the game. And you wonder, "What goes on under the hood? "How does someone one do data science?" You don't know where to start. Do not worry, this is where I can help. My name is Michele Vallisneri, and I'm a research scientist at NASA. I use data science concepts and tools every day to analyze astronomy datasets, and my tool of choice is [[Python (Programming Language)|Python]]. It's an expressive and pragmatic computer language that has its own spirit and style. And it's supported by a diverse and helpful user community. My goal with this course is to get you started with data science, and more specifically, data analysis with Python, in a friendly and approachable way. It's not all encompassing. I don't recommend applying for a PhD program right after this course, but it will get you started, and I really hope inspired. That's what matters, and that's what you need, a jumping off point. I will take you through the foundations of doing data analysis with Python. We will look at the most important programming constructs,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/get-started-in-data-analysis-with-python?u=76281980&t=94)** [[Data Structures]], and third party packages. With this, you will be able to complete simple data analysis tasks, and you will be ready to move on to more advanced topics. I like to teach by example rather than in the abstract, so throughout this course, we will write and execute practical code and analyze real-world data. So let's enter the friendly but exciting world of [[Python Data Analysis]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (5), [[Python (Programming Language)|Python]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Statistics]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** nasa (1)
> **Best Practices:** recommended (1)
> **Speakers:** - data (1)

#### [What you need to know](https://www.linkedin.com/learning/python-data-analysis-2020/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/what-you-need-to-know?u=76281980&t=0)** - Before getting started with this course, you want to have a basic working knowledge of programming in [[Python (Programming Language)|Python]]. Although we will review the aspects of the language that are essential to any data analysis task, I will not teach you about every feature of Python that we will meet. It will also be helpful to have an understanding of basic mathematical and statistical concepts, for example logical operations, functions, averages, minima and maxima. If you are familiar with these topics I recommend you start with beginner level Python and [[Statistics]] courses in the library or with a textbook that suits your learning style.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Statistics]] (1)
> **CLI Commands:** python (3)
> **Analogies:** for example (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - before (1)

#### [What's new in this update](https://www.linkedin.com/learning/python-data-analysis-2020/what-s-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/what-s-new-in-this-update?u=76281980&t=0)** - This is a new version of this course in which I have incorporated user feedback from many learners like you. Like the original version this course covers the foundations of data analysis with [[Python (Programming Language)|Python]], [[Data Structures]] and the num pi, [[Pandas (Software)|pandas]], and map log packages using practical, real world examples. I have also updated the course to reflect changes in those modules and new useful features in recent versions of Python 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (2)
> **Versions:** python 3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - this (1)


### 1. Installation and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Install Anaconda Python on OS X](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-os-x?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-os-x?u=76281980&t=0)** - [Instructor] For this course, we need an up to date installation of [[Python (Programming Language)|Python]] 3, and a few third party packages including Jupyter, NumPy, [[Pandas (Software)|Pandas]], and Matplotlib. In this video I show you how to install everything you need on MacOS 10. If you are a [[Windows]] user, feel free to jump to the next video. Later I will also show you how to use Python in the cloud using only your web browser. If you already use Python on your machine and you know how to install extra packages, please do so. Otherwise I suggest you follow me and install the free Anaconda Python Distribution, which includes everything that we will need. To install we go to [anaconda.com](https://anaconda.com). We find the download link at the top. Scroll down to our platform and select the Anaconda graphical installer which is currently at version 3.7. Any later version will also work fine. As of January 2020, Python 2 is no longer supported, so you should definitely be using version three which is mature, efficient, and introduces many exciting new features compared to version two. Once the download has completed, we click on the installer and proceed through a standard installation which will require several clicks. We are asked also whether we wish to install the PyCharm IDE, which is very complete and powerful.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-os-x?u=76281980&t=95)** We will not be using it for this course, but you can give it a try. We can trash the installer, and we can now try out our new python installation, by opening up a terminal and typing Python. This gets us into the standard Python shell where we can write an execute code interactively. The prompt informs us that this is indeed the Anaconda version of Python 3.7. It's traditional to just say hello. We can also verify that all the packages we need are already installed by attempting to import them. NumPy, Pandas, and Matplotlib.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-os-x?u=76281980&t=148)** No news is good news. All done. We are now ready to start experimenting with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[Pandas (Software)|Pandas]] (2), [[Windows]] (1)
> **CLI Commands:** python (10), find (1)
> **Tools:** anaconda (4), jupyter (1), pycharm (1), terminal (1)
> **Prerequisites:** install (5)
> **Versions:** python 3 (2), version 3 (1), python 2 (1)
> **UI Navigation:** go to (1), scroll down (1), select the (1), click on (1)
> **URLs:** [anaconda.com](https://anaconda.com) (1)
> **Env Vars:** ide (1)

#### [Install Anaconda Python on Windows](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-windows?u=76281980&t=0)** - [Narrator] For this course, we need an up to date installation of [[Python (Programming Language)|python]] three. And a few third party packages. Including jupyter notebook, numpy, [[Pandas (Software)|pandas]], and matplotlib. In this video, I show you how to install everything you need on [[Windows]]. However, you can also experiment with Python in the cloud from your web browser. I explain how to do so at the end of this chapter. If you are already using Python on your machine and you know how to install extra packages, you are free to do so. Otherwise, I suggest you follow me and install the free Anaconda Python distribution. Which includes everything that we need. To install, we go to the [anaconda.com](https://anaconda.com) website, we find a download link on the top. Verify that we have the right platform. And then download the 64 bit graphical installer. This is currently at version 3.7, but any later version will also work fine. Once the download has completed, we click on installer and proceed through an installation. This requires a few clicks. (mouse clicks) As of January 2020, Python two is no longer supported. So you should definitely be using version three.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-windows?u=76281980&t=94)** Which is mature, efficient, and introduces many exciting new features compared to version two. The final phase of the installation takes a few minutes.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-windows?u=76281980&t=112)** It looks like the setup is finished, and we now can get started with Python. We can now try out our new Python by opening up the Anaconda prompt, and typing python. This gets us into the standard python shell, where we can write and execute code interactively. The prompt, informs us that this is indeed the Anaconda version of Python 3.7 It's traditional to say hello. We can also verify that all the packages that we need are already installed by attempt to import them. Numpy, pandas, and matplotlib.
>
> **[2:45](https://www.linkedin.com/learning/python-data-analysis-2020/install-anaconda-python-on-windows?u=76281980&t=165)** No news is good news. All done. We are now ready to start experimenting with python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Pandas (Software)|Pandas]] (2), [[Windows]] (1)
> **CLI Commands:** python (11), find (1)
> **Tools:** anaconda (4), jupyter (1)
> **Prerequisites:** install (4), setup (1)
> **Versions:** version 3 (1), python 3 (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [anaconda.com](https://anaconda.com) (1)
> **Exercise Files:** download the (1)

#### [Working with Jupyter Notebooks](https://www.linkedin.com/learning/python-data-analysis-2020/working-with-jupyter-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/working-with-jupyter-notebooks?u=76281980&t=0)** - [Narrator] Jupyter notebooks, offer a very convenient way to write code, run it, and collect the results including plots, in a single document. You can even write formatted text and equations. This is my favorite way of using [[Python (Programming Language)|Python]], because it lets me experiment with data and code, document my work, and go back to it later. You start Jupiter notebook from the Anaconda navigator, by clicking on launch. If you don't have an Anaconda, you can go to a terminal, and type Jupyter notebook. A web browser opens, and I can choose if I wish to load an existing notebook from the file system, or to start a new one, which I do at the top right of the screen. New, Python three notebook. Here's the notebook. See the green box at the top?. It's a cell. It's ready for me to write some Python, for instance, (keyboard typing) The customary equating. I execute the code, by pressing Shift + Enter, or Shift + return depending on your keyboard. The output is printed immediately below it. I can click inside the cell, modify it, and execute it again, with shift enter. If a cell has a blue border, I need to press ENTER before I can edit it.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/working-with-jupyter-notebooks?u=76281980&t=94)** Or I can click inside a different cell, to edit that one. In addition to a simple command, I can write a function over multiple lines. The editor, will color the Python source keywords, appropriately. Again, I execute with Shift + Enter cells, can also contain text rather than code. For that, I can use the drop down menu cell, to change the cell type to markdown. Then I click in the cell and start writing. Markdown is a simple but powerful text format that can do basic formatting, bold, italic, bullet points, hyperlinks, and even mathematical formulas. For instance, bold, (keyboard typing), with two asterisks. (keyboard typing) URLs, which are recognized, (keyboard typing) a bullet point, and a formula in the LaTeX language, between dollar signs. When I execute the cell, with shift Enter, everything is formatted in prettified. To copy a cell, I can click inside it, or use the arrow keys to select it, and then press escape C, to copy and then escape V, to paste. To cut a cell, I can do escape X
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-2020/working-with-jupyter-notebooks?u=76281980&t=191)** To delete a cell ctrl M, and then D, and again D,
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-2020/working-with-jupyter-notebooks?u=76281980&t=199)** Jupyter wants to be sure you really want to delete that cell. Or you can use the menus, of course, I gave you only the most useful keyboard shortcuts, but there are many more, look under the Help menu. The notebook is saved periodically for us, but I can also do that at any time with command S, ah, and I can give this notebook a name, such as learning Jupyter, by clicking at the top of the window. Go find the Jupyter notebook documentation, at [Jupiter.org](https://Jupiter.org). You will also learn about Jupyter lab, and even more powerful, and complete interface than notebooks. For this course however, we will stay with Jupyter notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **Tools:** jupyter (7), anaconda (2), terminal (1)
> **CLI Commands:** python (4), find (1)
> **Non-Speech:** (keyboard typing) (4)
> **Analogies:** for instance (2), such as (1)
> **URLs:** [jupiter.org](https://jupiter.org) (1)
> **Env Vars:** enter (1)
> **Cross-References:** go back to (1)

#### [Using the exercise files](https://www.linkedin.com/learning/python-data-analysis-2020/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/using-the-exercise-files?u=76281980&t=0)** - [Instructor] For most of the videos in this course, we will be working through one of the Jupyter Notebooks that I prepare for you. For each notebook, we will go through the path and code that it contains. We will discuss what the code does and why I wrote it that way. We will execute it and examine the resulting output. At any time, you're welcome to pause the video, inspect the code, make changes and run your own experiments. All the notebooks are collected in your exercise files, organized by course chapter. They are the files with .ipynb file ending. You will also see some of the data files that we will be analyzing. In Chapter Five, I have included a subfolder named Downloaded. These are files that we will download from the web using [[Python (Programming Language)|Python]], but I am including them here in case something goes wrong with the download. We open a notebook by finding it within the Jupyter Notebook file browser and clicking on it. The notebook cell that we're discussing and running will always be the one enclosed by a blue or green box. Once we're done with the notebook, you can close the browser tab and shut down the notebook in the Jupyter file browser by clicking on the box and then clicking Shutdown.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Tools:** jupyter (3)
> **CLI Commands:** make (1), python (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Using Python in the cloud](https://www.linkedin.com/learning/python-data-analysis-2020/using-python-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/using-python-in-the-cloud?u=76281980&t=0)** - [Instructor] An exciting, recent development in the [[Python (Programming Language)|Python]] ecosystem is that it has become possible to run notebooks in the cloud using services such as [[Google]] Colaboratory and [[Microsoft Azure]] Notebooks. With both, you get a rather functional environment for free. If you'd like to follow along with this course using Python in the cloud, I suggest you use [[Microsoft Azure|Azure]] Notebooks. Let me show you how to. We start at notebooks.[azure.com](https://azure.com). We sign in, which you can do using an existing [[Microsoft]] account or creating one. You may also be asked to create a user name for your profile. In Azure Notebooks, notebooks are organized in projects, so we create a new one. I will call it [[Python Data Analysis]]. The easiest way to get the exercise files into Microsoft Azure is to upload the zip file that contains all of them. The Upload button is here on the top right. So I go find a file and upload it.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-2020/using-python-in-the-cloud?u=76281980&t=79)** To unzip the archive, I open the Azure terminal. I type cd library to move into the project directory and then unzip exercise\ files.zip.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-2020/using-python-in-the-cloud?u=76281980&t=101)** This will take a moment. Once it's done, we can type exit, and close this tab. If I refresh the window, I see that the exercise files have appeared. We are now ready for our course. For instance, I can look inside the exercise files for chapter two and select the first notebook. Azure Notebooks can be somewhat slow when loading and writing files, but don't worry. You'll get there. Also, as we speak, the default Python on Azure is 3.5, which is too old for this course. Hopefully that will change soon. In the meantime, please remember to switch the kernel to Python 3.6 after you open each notebook. You do that from the Kernel menu, go into Change kernel, and select Python 3.6 There are many options out there to use Python in the cloud. Please feel free to use the one that works out best for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Azure|Azure]] (6), [[Microsoft Azure]] (2), [[Google]] (1), [[Microsoft]] (1)
> **CLI Commands:** python (7), unzip (2), find (1), cd (1)
> **Exercise Files:** exercise files (3), zip file (1)
> **Versions:** python 3 (2), 3.5 (1)
> **UI Navigation:** open the (1), select the (1)
> **Analogies:** such as (1), for instance (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** terminal (1)


### 2. Data Structures in Pure Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Warmup with Python loops](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980&t=0)** - [Instructor] We will begin every video by importing a standard set of [[Python (Programming Language)|Python]] modules that we need. This is a typical list. It's expedient to load often used modules by giving them a shorter alias. NP is the community standard for NumPy, PD for [[Pandas (Software)|pandas]]. We also load this simple commander entity interface to matplotlib, pyplots, and finally, we ask the Jupyter notebook to keep the plots that we make in the notebook itself instead of opening a different window. So I shall now execute this cell by pressing Shift + Return. If you've worked in programming before, you must be familiar with loops. They allow us to automate repetitive operations. And loops are a good topic to start a quick review of the Python core language, which will focus on the features that are most important to work with data. So, how exactly do loops work in Python? We see them in a concrete example. Consider the combinatorial problem of breaking a U.S. dollar into all possible combinations of coins. For instance, $1 coin, two half-dollar coins, one half-dollar coins and two quarters, and so on. You can already see how we're going to need several nested loops for this. The basic structure of a loop in Python is for variable in iterable followed by a block that is executing multiple times
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980&t=94)** with the variable that can own the values provided by the iterable. But what is an iterable? We can think of it as a black box that keeps providing new values until it runs out. A simple example is a Python container such as a list or a dict. Perhaps the most important iterable is range, which provides integer value from a start to a stop, exclusive of the stop. That means that range zero 10 counts from zero to nine. There are many reasons for this convention about the end value. For instance, by looking at the end value, we see immediately that the total number of elements in the range is 10. In the end, however, we just have to accept this as one of the building assumptions of Python. Range has a couple more interesting features. We can omit the stat value, and then it's assumed to be zero. We can provide a step argument to move through the range in increments larger than one. And if I give the step, I must also give the initial value to avoid confusion. Notice that the step is the third argument that I give in line four. Let's go back to the dollar. To generate all possible ways to break it up, we will use a very simple minder strategy. We will consider all possible candidate combinations, including the zero to one $1 coins, zero to two half-dollar coins,
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980&t=187)** zero to four quarters, and so on. And at the end for each, we will check whether it adds up to a dollar. Therefore we need six nested loops. A loop within a loop within a loop. Luckily, it's Python that will keep track of them. This means that the first loop will be over range two. So, looping over zero and one. To keep the maximum number of each coin inside, we'll write it as range(1+1). We then proceed with the other coins, one loop for each. Each nested loop is indented with respect to its parent. Inside the innermost loop, we will check whether the total amount is $1. If so, we will add this combination to a list called combinations, which will start that. Let's try this out. And let's look at the results. The first few combinations seem to check out fine. It turns out there are 293 ways to get a dollar in change. That's a solution to the problem we posed. However, in data analysis, it often happens that the solution raises a new question. For instance, how many ways to make $2 out of change or three? Does the number of combinations increase linearly or quadratically with the amount we're breaking up? What we need to do, then, is to take the code we wrote and generalize it to answer those questions.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980&t=281)** Creating a function, we'll call it, say, find combinations, that will take a dollar amount in cents and return all possible ways to do it. Before we do so, we make a couple of changes to our code to make it faster and to make it easier to generalize. This is an example of refactoring. The first change is that we will not loop by count, but by value, using the step argument of the range. For instance, instead of looping over quarters with count 25 between zero and four, we will loop over the amount from zero to 100 in steps of 25. So, I have rewritten all the loops in these terms. As you see, the end of the range is always a dollar, 100 cents plus one. So the dollar is included. And the step is 100 for $1, 50 for half dollar, 25 for the quarter, and so on. The second change we're making is that we don't actually need the innermost loop over the pennies. As long as the total up to that point is less or equal than a dollar, we can always make up the difference. Therefore, we compute the dollar and write a different test. The result is again the same. Now we can take our code and turn it into the function find combinations by replacing the value 100 with a variable argument. We'll call it total.
>
> **[6:16](https://www.linkedin.com/learning/python-data-analysis-2020/warmup-with-python-loops?u=76281980&t=376)** We do need to indent our code to make up the body of the function. So, here we go, $2. Or $3. You may be curious to know how fast this number grows. A plot will give us an idea. So let's plot 100 through 500, and we use a comprehension, which we will explain later, to find a corresponding number of combinations. Matplotlib will give us a quick plot. In fact, the number grows approximately as the fifth power of the total. You will find the loops are everywhere in data analysis, so it's good to get familiar with them. In Python, you can do a lot with the for construct and with range.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (8), make (7), find (4)
> **Definitions:** is a  (2), is an  (2), means that (2)
> **Analogies:** for instance (4), think of it as (1), such as (1)
> **Cross-References:** go back to (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Sequences: Lists, tuples, and the slicing syntax](https://www.linkedin.com/learning/python-data-analysis-2020/sequences-lists-tuples-and-the-slicing-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/sequences-lists-tuples-and-the-slicing-syntax?u=76281980&t=0)** - [Instructor] In this movie, we are going to review lists. They are the quintessential [[Python (Programming Language)|Python]] container. They provide a way to store an arbitrary number of Python objects such as strings, floating-point numbers, other lists, or any other object and to access them using a numerical index. In Python lists are denoted by brackets and their elements are separated by commas. The length of a list is obtained with len. Indexing, individual list elements can be accessed by index. Starting with zero for the first element and ending at the length of the list minus one. This convention of starting from zero comes from C, the language that inspired Python and that was used to write the standard Python interpreter known as CPython. For instance, the first nephew is Huey. We can also look for the last nephew and we can even look for a nephew beyond the end of the list which in this case will yield an error. We can also index from the end. Starting at minus one and going down. That gets us Louie and Dewey. The bracket indexing notation, can also be used to reassign elements. Let's do that for all the nephews with a simple loop. Here we're just adding their last name. It's important to remember that lists do not need to have homogeneous content such as all strings or all numbers.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-2020/sequences-lists-tuples-and-the-slicing-syntax?u=76281980&t=91)** We can mix it up. To add a single element at the end of the list, we use append. You see that here we are using Python in an object-oriented way. By accessing the method, specifically append, of the list object. It's so easy that we barely notice it. To add multiple elements in one go, we can use extend. To concatenate two lists, we use a plus. That's an example of operator overloading in Python where plus does different things for numbers and for lists. Last, we can insert elements at any position in a list using the insert method. How about removing elements? We can delete them based on their index with del or based on the value with remove. If we want a list sorted we can do this in place. So we modify an existing list with sort. Or we can make a new sorted list out of an existing one with sorted. Which demonstrates also how to sort backwards. All of this should be very basic to you if you work with Python in the past. Moving on to slices. Beyond working with individual list elements, we can manipulate them in groups. The convention is the same as for Python loops. The first index is included, the last is not.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-2020/sequences-lists-tuples-and-the-slicing-syntax?u=76281980&t=187)** It's useful sometimes, to think of the indices as being placed at the edges of the cells in a list. We make an example based on the first few squares of the natural numbers. If we want the first two squares, we'd write a slice that goes from zero to two. There are a few more tricks that we can use in slicing. For instance we can omit the starting index to start at the beginning, omit the ending index to include elements to the end. Omit both, to get a copy of the list. Move through the indices in steps. And even use negative indices to count from the end. Slices can also be used to reassign a subset of items or to delete them. When we introduce NumPy arrays in chapter four, we will see that this basic slicing syntax carries over. So it's good to understand it fully on lists first. The empty list is written with an empty set of brackets and obviously it has length zero. Now for tuples, which look like lists but with parentheses instead of brackets. They are sometimes described as immutable versions of lists. We can do the same indexing and slicing tricks, but we cannot modify the elements or add new ones. One context in which one sees tuples often is tuple unpacking, where Python statements or expressions are automatically evaluated in parallel over a tuple.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-2020/sequences-lists-tuples-and-the-slicing-syntax?u=76281980&t=281)** For instance, to assign multiple variables at once. The parentheses can even be omitted when there is no room for ambiguity. Tuples appear also when we iterate over multiple variables at once. For example using the enumerate iterator on a list. Which lets us loop over list index and list element together. We can also unpack a tuple to pass it to a function that requires multiple arguments such as three args. It takes a tuple if we prefix it with an asterisk. This ends our review of lists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10)
> **CLI Commands:** python (10), make (2)
> **Analogies:** such as (3), for instance (3), for example (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Dictionaries and sets](https://www.linkedin.com/learning/python-data-analysis-2020/dictionaries-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/dictionaries-and-sets?u=76281980&t=0)** - [Instructor] While lists give us a way to retrieve values by their index. [[Python (Programming Language)|Python]] dictionary or dicts associate keys with values. After my imports, let me write a simple dictionary. Dicts are written with curly braces, separating items with commas and prefixing them by their key in a column. For instance, the capitals of a few countries. Just as we do with lists, values are accessed with a bracket notation. But instead of a number, we're going to use a key. For instance, we may wish to look at the capital of Italy. The same notation can be used to add items to a dictionary. Accessing a nonexistent item results in a key error. We can also check whether an item exists or not with the in operator. So we have Italy, but not Germany. Combining two dictionaries requires a little more thought than combining two lists. Unlike lists, we cannot just use the plus to add them. That's because we need to specify what happens if both dictionaries define the same key. What we then do is to update a dict using another, which will replace existing items as appropriate. This happens in place and modifies the dict.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-2020/dictionaries-and-sets?u=76281980&t=97)** Similarly to lists, we can delete items by key. In fact, keys do not need to be strings. Any Python object that is hashable may be used as a name. Hashable means that Python can convert it to a number. That's true for many types of objects. For instance, tuples which may be used to encode a birthday. We can see the internal representation of the keys with hash. Just very large numbers. The empty dictionary is written with an empty set of braces and has length zero. Looping over a dictionary is very similar to looping over a list. However, there are three different kind of loops you may want to write. The most straightforward syntax loops over the keys, for key in dictionary. Here, I'm using bold to denote language keywords. Whereas Roman words are the names of the variables that you will be using. You can loop also explicitly over the keys, you can loop over the values, and you can loop over the keys and values together. Let's see an example of each of these For country in capitals, we loop over keys. So will for country in capitals keys. Note that capitals dot keys is not a list,
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-2020/dictionaries-and-sets?u=76281980&t=195)** but a special iterator object. We can make it into a list though by feeding it to the list constructor list. The other two dict loops are over values, dot values, and over keys and values together using tuple unpacking. Beginning in Python 3.6 for the C Python interpreter, and in python 3.7, for the very language definition, the order of insertion is preserved for dicts. This means then when we loop over the keys or the items, we get them in the order in which we originally added them to the dict. That was not the case in previous versions of Python and in fact, the standard library defined a special object called order dict to preserve that order. That is not necessary now. Last, I want to mention sets. You can think of them as bags of item, which can be of mixed types and which do not have duplications. For instance, the continents. Sets are written with braces, but without columns. You can see that Africa only appears once, even if we had it twice when we define the set. We can check if an item exists in a set. We can add items or remove them
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-2020/dictionaries-and-sets?u=76281980&t=287)** or loop over the set. but there's no way to do indexing. Sets and especially dicts are very important in Python, since they underlie many aspects of the language itself. For instance, the methods and attributes of classes are stored internally in dicts, and a dict key based interface is also used in many third party packages, including [[Pandas (Software)|pandas]]. So it's very good to become familiar with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (8), make (1)
> **Analogies:** for instance (5), similar to (1)
> **Versions:** python 3 (2)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Comprehensions](https://www.linkedin.com/learning/python-data-analysis-2020/comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/comprehensions?u=76281980&t=0)** - [Instructor] In [[Python (Programming Language)|Python]], especially when you're dealing with data, there are many cases where you want to iterate over a list or a dict performing operation on every element and then collect all the results in a new list, or dict. You can certainly do that with a loop. For instance, picking up the example from the last video, let's compute the first 10 squares, starting with an empty list and adding elements in the body of the loop with append. This works, but we can do better. We can be more pythonic, that is, we can respect Python's specific style and spirit. Python offers a great feature, comprehensions, that let us write shorter, more easily readable code, that achieves the same effect as the loop. In fact, the comprehension is a compressed version of the loop. Let's go through the steps to write one. It's a list we want, so we have brackets. Next, we have the loop. And then we backtrack to the beginning of the expression and we write code for the computation that we want to collect. In this case, taking the square. The result is the same, but we managed to write it in a very readable and efficient way. We can also filter the list of elements that we are creating by adding an if clause.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/comprehensions?u=76281980&t=93)** For instance, we may want to collect only the squares that are divisible by four, which in fact, I need to do with the modulus operator. Again, quick and readable. In Python three, comprehension largely replace the map and filter built-in functions, which are important and so called functional languages, but did not really belong in Python. The syntax for dictionary comprehensions is also rather intuitive. For instance, let's create a dictionary that will get us the square of an integer from the integer itself. It's a dictionary, so we need braces. The loop part is the same for variable and iterable. But now, instead of the list items, we need to write key colon value pairs. We can also add an if clause if we want. I don't need one here. Here is the result in dict. Dict comprehensions are sometimes used to transpose an existing dict. Going back to our capitals, which we wrote as a dictionary index by country, we can get the countries index by capital. In the comprehension, we loop over the dict items, so we get tuples of country and capital,
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-2020/comprehensions?u=76281980&t=189)** and we invert them by writing capital colon country. Sometimes, you see what look like naked comprehensions without the brackets. Those are in fact generator expressions, which are useful when you want to generate a sequence and consume the elements one by one without ever storing them in a list or a dict. For instance, to take the sum of the first 10 squares, we may write the interior part of our comprehension without the brackets and feed it directly to sum. Doing this, saves memory and time which is important if you deal with large amounts of data. In fact, the built-in range which we used earlier to demonstrate loops does something very similar. It never builds a list, but it keeps adding new values to the loop. If you don't currently use comprehension, I'm sure that if you try them you'll become addicted quickly. And you'll start doing all sorts of acrobatics, such as nested looping comprehensions. For instance, look at this nested loop, which creates a list of one, one two, one two three, one two three four, and so on. We can do the same with a nested comprehension just by writing the two loops in the same order in sequence. Comprehensions are incredibly useful to manipulate lists, dicts, and data. You should be familiar with both,
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-2020/comprehensions?u=76281980&t=281)** understanding and writing them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **Analogies:** for instance (5), such as (1)
> **CLI Commands:** python (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Advanced Python containers](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=0)** - [Instructor] As I mentioned in the video about sequences, tuples are similar to lists, but we cannot change the arguments after creating the tuple. The formal way of saying that is that tuples are immutable. Tuples are very useful to store data records when we think that we are not going to modify the values. For instance, a list of people with their first names, last names, and birthdays. For each element in this list, for each person, we access the data fields by index. Zero for the name, one for the family name. This lets us write useful list comprehensions. For instance, to find all the people with a given birthday. We loop over every person in People, and for each we check if the third element of the tuple, index two, is July 15. I share a birthday with a very famous astronomer, Jocelyn Bell Burnell. Field access by index means that we have to remember which is which, creating the potential for bugs, and certainly reducing the expressiveness of our code. To help us out, the module Collections in the standard [[Python (Programming Language)|Python]] library offers a name tuple that lets you create a specialized object, a specialized tuple, that has a name and that associates labels with fields. For instance, a person type would be called Person and have fields first name, last name, and birthday. We can then create instances of the Name tuple
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=97)** by using the type and giving the field values sequentially. Or we can even use the field names, which lets us shuffle the fields if we need to. Name tuples have the advantage that they print nicely. Now let's look at accessing the fields. Indices still work. So we get a zero, one and two gives me first name, last name, and birthday. But field names using the object-oriented DOS syntax are now what we're going to use, because they make our intentions clear in the code we write. Let's convert our little database to name tuples. We can't use a standard tuple directly and feed it person type, because person type needs three arguments. Here, Python is complaining that two are missing. So this is a case where tuple unpacking comes useful. I use a star to unpack tuple zero into its three elements. To do all of them, we will, of course, use a list comprehension. Now our birthday search reads better. It shows me explicitly that I'm looking at the birthday field of each tuple. Python 3.7 introduced an alternative to tuples index for storing data records, data classes. To use them, we need to import data class
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=194)** from the data classes module. If you are for some reason in Python 3.6, you can still use data classes, but you need to install them explicitly as a package. For instance, with PIP Install. So I do my import, and this is how we would set up a personal record with first name, a string, last name, a string, and a birthday, and say again a string, with the default value for the birthday. If you're not familiar with Python classes, class decorators, the At data class that appears at the top, and if you're not familiar with that annotation the syntax will look somewhat alien. But basically, we're instructing Python to create the type of records that will have fields called first name, last name, and birthday, all of which will be strings. We'll create an instance of this class, a person, making the fields sequentially or by keywords. You see here that the field of that known birthday is applied, since I didn't provide a birthday to the definition. We can access the field by name but not by index. And again, the data class prints nicely. In contrast to name tuple, data classes are full Python classes, so we can define methods that operate on the fields, such as a method that returns a person's full name. If you're not familiar with [[Object-Oriented Programming (OOP)|object-oriented programming]] in Python, do not worry.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=286)** We will not need this feature in what follows. Nevertheless, for person class two, calling full name as a method runs the code that we wrote and returns my full name. Data classes have many other useful features, such as freezing, disallowing modifications, ordering, allowing the comparison of class instances, defining data classes by inheritance, and a lot more. So I encourage you to learn more about them if you are somewhat familiar with object-oriented programming and specifically classes in Python. Now we move on to our last topic about data extractions in Python. In a video about dict, I discussed how a special variant of dictionary, collections order dict, is now much less useful because the standard dict preserves the order in which elements were inserted. There's another variant of dict that remains useful, collections default dict. The point here is to define a default for values that will be returned if we ask for a key for which there was no entry. More precisely, we have to provide a function that returns that default. Let me write out the function that we will use. We'll call it mydefault, and it will return a simple string.
>
> **[6:14](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=374)** So here's my default dict. If I go in and ask for a key that doesn't exist yet, I will just get the default back. Not only, that key will be now part of the dictionary. This makes default dict useful when we want to build a dictionary where each key can correspond to a list of items. Let's make an example based on birthdays. With standard dict, we need to write code that behaves differently if the birthday has been seen already, and then we can append to the list of people with the same birthday or if the birthday has not been seen, in which case we need to create a list with one element. That is quite inconvenient. The repetition of code is annoying and prone to bugs. We'll use the full dict instead, and we will take advantage of the fact that list called as a function returns the empty list. So we can use it to provide a default. Thus, we can write birthdays as collection_defaultdict with list as the default maker, and then simply look over person in our name tuple and constraint to get in that key the birthday and appending to the resulting list. There are more useful container types in the standard library module collections. I encourage you to look them up
>
> **[7:48](https://www.linkedin.com/learning/python-data-analysis-2020/advanced-python-containers?u=76281980&t=468)** and to use them in your work instead of reinventing those wheels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** python (10), make (2), find (1), pip (1)
> **Analogies:** for instance (4), such as (2), similar to (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** dos (1), pip (1)
> **Versions:** python 3 (2)
> **Definitions:** means that (1), is a  (1)
> **Code Identifiers:** collection_defaultdict (1)


### 3. Wordplay: Anagrams and Palindromes

[↑ Back to Table of Contents](#table-of-contents)

#### [Anagrams overview](https://www.linkedin.com/learning/python-data-analysis-2020/anagrams-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/anagrams-overview?u=76281980&t=0)** - [Instructor] In chapter two, we have reviewed [[Python (Programming Language)|Python]] loops, data containers, and comprehensions. Now we will set them to work in a simple, practical project, finding anagrams in the English dictionary. As you know, two words are anagrams of each other when their letters can be rearranged to turn one [[Microsoft Word|word]] into the other. For instance, elvis and lives. We will use this simple strategy to find anagrams. We defined a signature of a word as the sorted list of its letters, including duplicates. So the signature of post would be opst. And then we find that spot, stop, tops, pots, and opts have the same signature as post and therefore they're all anagrams of each other. We're going to make a Python dict of all the words in the dictionary indexed by signature. And then to find out if a word has an anagram, we will just compute the signature and look it up in the dict. Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** find (3), python (2), make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Loading a dictionary](https://www.linkedin.com/learning/python-data-analysis-2020/loading-a-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/loading-a-dictionary?u=76281980&t=0)** - [Instructor] We begin. By loading a list of words from a file. Your exercise files. Already contain a list that we can use as an example. The file is words.txt and it sits in the same folder as this Jupyter notebook. That file is, in fact, the nineteen thirty four dictionary. That is distributed with many UNIX systems. If you wish, you can find a better one and use that instead. Now in [[Python (Programming Language)|Python]]. We talk of idioms to refer to code constructs. That have become the preferred way to achieve a certain goal. A classical example is looping through all the lines of a text files. To do so. We open the file for reading. Let's open with a mode of "R" and then, we can use the file as an iterable. In a fold loop. Which has the result or giving us the lines one by one. For the moment. All that we will do with each line, is just collect it in a list. What did we get? More than two hundred thousand words. Let's look at the first few using slicing. As we learned in chapter two. That's good. I see two problems though. Every [[Microsoft Word|word]] ends in the new line character. Denoted in "C" and in Python as backslash "n". Also some of the words are capitalized.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/loading-a-dictionary?u=76281980&t=93)** Which will interfere with our scheme of computing signatures. We can fix both issues using Python string methods. To strip leading and trailing whitespace. Including new lines. We can apply strip. let's take our own for example. The new line is stripped away. Now to switch the entire string to lowercase. Who use the method lower. So now. There's something more interesting to do in the body of a loop. Will append to the empty list is stripped and lowercase version of each line. Now I see a duplicate. Which comes from "a" appearing both in uppercase and lowercase. One way to get rid of duplicates is to build not a list but a set. so I will do my loop once more. Replace the empty initial list with the empty set and replace a pen with ADD and given that the body of the loop is just one line. There is an even more idiomatic way of writing it. You probably guessed it already as a comprehension. The comprehension will have the expression I want to collect and then the loop over lines in the file. Here it is. If we wish to restore the alphabetical order. We can just wrap the set in the Python built-in sorted. Which produces a list.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-2020/loading-a-dictionary?u=76281980&t=186)** A list however without duplications. We are now ready to make Anna Graham's. By the way. If you want to try in a different language such as French. You can follow along what we did with the appropriate file. The good thing is that in Python three all strings are natively unicode. Meaning that they can handle international character sets transparently. The characters are encoded internally using multiple bytes as needed. They only care that we need to take is to tell Python which encoding to use for the files we read and write. There are multiple mappings between character sets and bytes. So we need to know which one was used. Your exercise files include a French dictionary. Written using the iso-eighty eight five nine encoding also known as latin one. Let's read all of its lines. In this case instead of a loop. We use the built-in method with lines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Word|Word]] (1)
> **CLI Commands:** python (6), find (1), make (1)
> **Env Vars:** unix (1), add (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (1), known as (1)
> **Analogies:** for example (1), such as (1)
> **File Paths:** words.txt (1)
> **Tools:** jupyter (1)

#### [Finding anagrams](https://www.linkedin.com/learning/python-data-analysis-2020/finding-anagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/finding-anagrams?u=76281980&t=0)** - [Instructor] We pick up our exercise where we left it in the last video. We have made a sorted list of lowercase words. lets load it up. Now, remember our strategy of comparing signatures. Those are the sorted lists of the component letters of each [[Microsoft Word|word]]. We need a function to make them. Taking the string N again as an example, let's see what happens if we sort it. Which we do with the built-in sorted. Indeed, we get a sorted list of the letters, which is already the signature. We can use it to verify say that Elvis is an anagram of lives, but not of sings. For convenience, we will collate the list of characters back into a single signature to string. The way this is achieved in [[Python (Programming Language)|Python]] looks a little strange, since we need to call the method join on a string that specifies the connector so to speak of the join. If it's a dash, we get a-a-n-o-r. So the connector we really want is the empty string. We're ready to make a function that performs this operation in general. Now, I remind you that our anagram finding strategy is to build a dictionary of words indexed by signature. Of course, we could also try a brute-force search that loops to the dictionary,
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/finding-anagrams?u=76281980&t=93)** computes the signature for every word and compares it with the signature of the word we want to anagram. That's what find anagram does. This works and seems fast enough to see just how fast we can use the IPython magic %time. So 200 milliseconds, that is not a long time to wait but we become unbearable if we need to compute long lists of anagrams. So let's do this the smart way. As we said, we will build the Python dict of words indexed by signatures. In fact, the values in the dict will be set, that indeed, contain all the words with the same signature. We call it words by SIG. If you think about it, this is the perfect application for default dict. Which we introduced in chapter two. Since the first time that we meet the signature, we have to somehow produce an empty set and add to it, perfect. Perhaps we could perform one last filtering operation by removing signatures with a single word. After all, every word is an anagram of itself, but that's not very interesting. To do the filtering, we can use a dictionary comprehension. Remember, to iterate on both key and value we use dict items. Then with the clause to select non-trivial anagram sets
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-2020/finding-anagrams?u=76281980&t=191)** will length greater than one. Excellent, we can allow the simple function find anagram first that looks up a word in the dict by signature. This works fine, let's see for my name. Nothing, I didn't really expect one, But perhaps we shouldn't get an error when no anagram is found just the empty set. To fix that, we'll use a try except close. And we'll catch the key error exception with accept key error and just return the empty set in that case. If you're not familiar with exceptions in Python, I encourage you to go look them up in the Python documentation. So let's try again to anagram my name and get the empty set. This new function is much, much faster. Now that we have set this machinery up, there are many interesting investigations we could do. For instance, how about finding the sets of anagrams with the longest words? We get that by sorting the signatures, which we get from keys applied to anagrams by SIG using length. So we use the sorted built-in, given a sorting key of Len and a sync for reverse order. These are the longest signatures, but to see the actual anagrams, we can wrap it in a list comprehension. The longest anagrams have 22 letters.
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-2020/finding-anagrams?u=76281980&t=288)** Looking at this list though, I must say that these are compound medical words that are not too creative in anagrammatical terms. How about the set of anagrams with the most words? For this, we will sort the dict values instead of the keys. And again use Len as the sorting key. The two longest groups have 10 elements, though some of these words are not very easily recognizable. Well done, this completes our exercise. Next, let's put what you learned to good use and take on a challenge again about wordplay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (2), find (2)
> **Env Vars:** sig (2)
> **Definitions:** is an  (2)
> **Cross-References:** in the last (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Palindromes](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-palindromes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-palindromes?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-palindromes?u=76281980&t=5)** - [Instructor] For your challenge, you should extend the anagram machinery that we built together to find all palindromic pairs of words in the English language, or at least, in our dictionary. That is, you should find pairs of words that become each other when we reverse the order of their letters. For instance, reward and drawer. That will also include true palindromes, such as radar, where the reverse of the [[Microsoft Word|word]] is the word itself. I'll give you a hint, to reverse a string, go back to what we learned about slicing sequences in [[Python (Programming Language)|Python]]. This challenge should take you 10 minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Analogies:** for instance (1), such as (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Palindromes](https://www.linkedin.com/learning/python-data-analysis-2020/solution-palindromes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/solution-palindromes?u=76281980&t=0)** - [Narrator] Here is my solution to the challenge. You were asked to find all palindromic pairs of words in the English dictionary. We start by loading our list of words with the one line of comprehension. We will explore the fact that if two words are palindromic, then they are also anagrams of each other. We will also need the code we wrote in this chapter to compute signatures and to associate words to signatures. In [[Python (Programming Language)|Python]], there is no built-in function or method to reverse a string, but we can achieve it easily by slicing. The slicing step will need to be negative backwards. We will omit the slice start and stop to get the entire string. So for Mickela, we do a slice of colon, colon, minus one. We now look over all the [[Microsoft Word|word]] sets, one for each signature, and then overall pairs of words in the word set, checking if one of them equals the reverse of the other. It's a little annoying to write the loops, so that we are only checking the same pair twice, in reversed orders. One way is to check pairs on if they are sorted. Here's the list. It includes also the true palindromes where in order, reverse order, equals itself. But manual dis-sorts do not seem very common.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-2020/solution-palindromes?u=76281980&t=96)** I'm going to give you, also, more elegant solution. Using the stand a library module, intertools. Intertools includes an iterator combinations which return all combinations, say of two items, from a list of three. We can then simplify our solution, by again looping over word sets, and then by selecting pairs of words in the word set using intertools combinations. The code is cleaner and more expressive. But the solution is the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), python (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Arrays with NumPy

[↑ Back to Table of Contents](#table-of-contents)

#### [NumPy overview](https://www.linkedin.com/learning/python-data-analysis-2020/numpy-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/numpy-overview?u=76281980&t=0)** - [Instructor] In this chapter, we introduce NumPy, a third-party package for [[Python (Programming Language)|Python]] that extends the language with multi-dimensional arrays that are fast, memory-efficient, and that can manage very large data sets. NumPy is an important part of the Python ecosystem. It has become a fundamental package for data analysis, and for any kind of mathematical application with Python. Let's talk about how NumPy arrays are different from Python containers, such as lists. Python variables are often described as labels. They are not little boxes in computer memory ready to receive a value. Rather, the values are independent objects with their own space in memory, and Python variables are labels or names that are attached to the values. So you can have more than one variable, referring to the same object. It's a very flexible mechanism, and it makes it possible to have lists and dictionaries with heterogenous elements. However, it's not very efficient when we need to deal with many values of the same type. In that case, you want to reserve space in memory, and store all the values side by side, and that's exactly what a NumPy array is. Organizing data in this way is both faster and more efficient in memory. It's also a necessary step if you want to interface Python with other languages, such as C or Fortran, which count on data being laid out in memory like this. In this slide, I'm showing you a schematic representation
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-2020/numpy-overview?u=76281980&t=96)** of a one dimensional and a two dimensional array. The actual data items sit side by side in memory, and they all have the same size. If there is one dimensional, we identify items by a single index, or two indices for a two dimensional array. The index ranges from 0 to one minus one, where N is the dimensional array. In the case of a two dimensional array, the dimensions can be different of course. Since, as we said, all the data items in an array need to have the same size, NumPy needs to be very precise about identifying data types. In fact, more precise than Python. While Python has just one type of integer, and one type of floating-point number, NumPY has several. NumPY identifies different types of integers, dependent on the number of bits that each of them takes up in memory, int8, int16, int32, and int64 the most common. There are also unsigned version of the integers. As for floating-point numbers, we have float16, 32, 64, and on some platforms 128. The most common is float64. There are other more special I-Types, complex numbers, booleans, true or false, bytes, unicode strings, for which you need to specify lengths, void, used for record arrays, and object, which is in effect a pointer
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-2020/numpy-overview?u=76281980&t=190)** to arbitrary Python objects. So let's see NumPY arrays in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10)
> **CLI Commands:** python (10)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Creating NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-2020/creating-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/creating-numpy-arrays?u=76281980&t=0)** - [Instructor] The easiest way to get a NumPy array is to load it from a file. NumPy recognizes several file formats, including, of course, simple text files. I have prepared one for you that describes a very well-known painting. The file is called monalisa.txt and it's included in your exercise files in the same directory as this notebook. Let's have a look at the content. We open the file with open in reading mode, and we use the readlines method to get all the lines of the file. So we see that we have 200 lines and that each line is a sequence of integers. NumPy loads the file without any trouble using loadtxt. The result is a two-dimensional array. If we display it, NumPy omits some rows and columns so it fits on the screen. We can query the object, the array, for the number of dimensions, which are two, the shape, which is 200 by 134, 200 rows by 134 columns, the total number of elements, and the type of element. In this case it's the very common 64 bit floating point number. Okay, so we have a two-dimensional array called monalisa. I wonder, is it an image that we can display? We can use the Matplotlib function imshow to display two-dimensional arrays as images.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-2020/creating-numpy-arrays?u=76281980&t=97)** Although, we should perhaps use a better column map, such as gray. I've also prepared a colored version of the painting and I have saved it in NumPy's native binary format, which works across all platforms. The file is monalisa.mpy. This is now a three-dimensional array, where the last dimension is used to store red, green and blue components. Imshow understands this without any problem. We have lots of pixels, so we can make the image bigger by instructing Matplotlib to have a larger figure size. Five by eight refers to inches, although how that turns out in pixels depend on the resolution of your screen. We now know how to load the NumPy array. How about making one ourselves? The easiest way is to take a [[Python (Programming Language)|Python]] list or a nested list of lists and pass it to NumPy array. The data type is automatically set. And we can query the object as we did before. Another common way to create an array is to make an empty one. We give the shape and the data type. For instance, we can do a one-dimensional array a vector of length eight. Here d is just a shorthand for a float 64, an 8-byte float. We can do a two-dimensional array, a matrix. And we can query these objects for their [[Metadata]],
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-2020/creating-numpy-arrays?u=76281980&t=192)** and plot them on the same line. It is sometimes useful to make an array of zeros in the shape of another existing array. That's done with zeroes_like. Otherwise, we can make a really empty array. Here, the memory is allocated, but not even cleaned, so we get some nonsensical values. We can also create a regularly spaced array of number with linspace with specified extrema, for instance, zero and one, and the total number of elements, here 16. We can't show a one-dimensional array as an image, but we can certainly plot it with Matplotlib. Here, I will use a thick marker as specified by lowercase o. Instead of choosing the number of elements between two extrema as we did with linspace, we can use NumPy arange, which has the same convention as Python's built-in range. In this case, we have elements between zero and 1.5 spaced by 0.1. NumPy can also give us an array of random numbers. We just need to specify the shape. By default, we get numbers uniformly distributed between zero and one. If we plot them with color, they look suitably random. We could also use random.randint and NumPy random.randn to get either integers in a given range or normally distributed numbers. To close this video, let me show you
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-2020/creating-numpy-arrays?u=76281980&t=287)** how to save an array to a file. Np.save will create a cross-platform binary file. The file ending is conventionally .mpy, but it doesn't need to be. Numpy savetext, instead, will create a readable ASCII table. And if we load it, we see that it's all there. Now that we've created our arrays, let's see what we can do with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Metadata]] (1)
> **CLI Commands:** make (4), python (2)
> **Definitions:** is a  (2), is called (1), refers to (1)
> **Analogies:** for instance (2), such as (1)
> **Versions:** 1.5 (1), 0.1 (1)
> **File Paths:** monalisa.txt (1)
> **Code Identifiers:** zeroes_like (1)
> **Env Vars:** ascii (1)

#### [Indexing NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-numpy-arrays?u=76281980&t=0)** - [Instructor] Let's see how we can access individual elements and ranges of elements in NumPy. We will demonstrate on our good old friend Mona Lisa. So let me load up the file. I remind you, this is a three-dimensional NumPy array with dimensions that correspond to height 1198 pixels with 804, and color three, for red, green and blue. Imgshow shows us the picture. The syntax to get that individual pixels is just an extension of [[Python (Programming Language)|Python]] list indexing, except that we can now include multiple indices among brackets. For instance, a point roughly in the middle would be on row 600, column 400 and we grabbed the red component. If we wish to go to the bottom right corner, we may count back from the boundary of the array, just that we would do for a list. This should be the same as 1148, 754 and one. If we try to index elements beyond the boundary, we get an index error. And of course, we can use indexing to assign values to the elements. Once you get used to multi-indexing like this, you'll have the temptation of trying it on nested Python lists, but there it doesn't work. So let me demonstrate with a rather uninspired list. We cannot ask for element one comma two,
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-numpy-arrays?u=76281980&t=93)** rather, we need to ask for list number one, and then element two. One more reason to like NumPy arrays. Slicing also works in a very similar way to Python lists. For instance, we could grab a section in the middle of the painting from rows 400 to 800, columns 200 to 600s. Here's the detail. Often we want to grab the entire range over one or more axes, in which case, we can use the shorthand column for the full slice. There's an even shorter hand for multiple full slices, ellipses sign. We can also specify a step, which has the effect of reducing the resolution of the picture because we've taken every 20th pixel. See the black dot in the middle? It's there because earlier we assigned zero to all three color channels for pixel 600 and 400, the single pixel was invisible at higher resolution, but it's one of those selected by this slice with steps of 20. How about slicing backwards? That works too. And in this case, it inverts the rows. And if we mix slicing and indexing, we reduce the dimensionality of the array. In this case, it becomes just a vector. We can show a vector as an image or we can plot it. Note that fixing one of the indices is not the same as asking for a slice of one.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-numpy-arrays?u=76281980&t=187)** In that case, the array remains two-dimensional. Slicing can also be used on the left side of an assignment statement. We can use this to modify elements in bulk, such as deleting a square in the top corner of the image. Doing so, assign the same value to all the pixels there. But we can also match slices on both sides of the assignment. So let's replace the white square with a random set of pixels. NumPy arrays also support an especially useful form of indexing that is not available with lists. This is known as fancy indexing. It means that we're using arrays to index another array. To demonstrate that, let me grab my lower resolution grayscale image. I'm going to threshold this image by first figuring out all the pixels that are darker than a certain value. The result is a two-dimensional Boolean array, the same size as monalisa_bw. I can then use this Boolean array to select the corresponding subset of pixels and modify only those. Here's the thresholded image. Finally, let me point out another very important difference between lists and NumPy arrays. Whenever you slice a list, you make a copy of it. Say I have a simple list of six elements
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-numpy-arrays?u=76281980&t=281)** and I take a slice of the first four. Assigning to the slice does not modify the original list. By contrast, a slice of a NumPy array is a new NumPy object that points to the same area of memory, but we modified meta data that represents the different boundaries. So if I assigned to the slides, I'm also assigning to the underlying object. If we want a true copy pointing to new memory, you have to make the copy explicitly. Acting on the copy does not affect the original.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (2)
> **Definitions:** is a  (3), known as (1), means that (1)
> **Analogies:** picture (2), for instance (2), such as (1)
> **UI Navigation:** go to (1), select the (1)
> **Code Identifiers:** monalisa_bw (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Doing math with NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-2020/doing-math-with-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/doing-math-with-numpy-arrays?u=76281980&t=0)** - [Instructor] NumPy is extremely useful in numerical calculations. That's because in addition to packing numbers efficient in memory, NumPy makes it easy to perform mathematical operations with entire arrays. For instance, in a study of mathematical functions, we may start with a vector of equally-spaced real values between say zero and five times pi. Here it is. Note that with the list space, the extreme of zero and five pi are included. Then we may want to complete the sine of all these values. We cannot do this with a function in the standard math library. Math dot sin. But we can with the NumPy version, which is called the universal function for this reason. It can operate on any array, in element by element fashion. There is always another NumPy array with the same shape as X. Using map dot lib, I can now plot sine X against X. Specifying first the coordinates along the horizontal axis and then the coordinates along the vertical. Map dot lib takes care of setting the Y range automatically. By repeating the plot statement, I can show multiple functions together. Map dot lib will automatically cycle through colors so it can distinguish the lines. So let's try our sine together with a cosine and then logarithm. We can add labels to remind us which is which,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/doing-math-with-numpy-arrays?u=76281980&t=94)** and then collect the labels in a legend. There are many more options in map dot lib regarding the style of the lines, the formatting of the plot, and more. You can look at the documentation to learn more. We can also perform operations that involve more than one array and everything goes smoothly if we match array shapes. So let's make the cosine in addition of the sine, and let's try combining the two. By contrast, operations between arrays of different shapes generally fail. NumPy doesn't quite know what to do. There is one important exception, which is known as broadcasting. NumPy, when it can, makes sense of operations between arrays of different dimensions rather than shapes. The simplest case, which is rather intuitive, is just to add a single number to an entire array. We see that W is offset by 1.5 with respect to sine X. The plot would also be self-explanatory. Let's go up to two dimensions and then we'll straighten our friend, the Mona Lisa. The image is 200 rows by 134 columns. I can multiply every column by a different number by making a vector of length 134. In this case, NumPy matches the second dimension of the array, with a single dimension of the vector.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-2020/doing-math-with-numpy-arrays?u=76281980&t=191)** I want to show you the result side by side with the original image. So I need to do a little work with math dot lib. I will start with a larger figure size, figure and fix size, and then I set up one row with two plots using subplot. The arguments to subplot go one row, two columns, and then the subplot that I want to make. Multiplying the array in this way had the effect of applying horizontal gradient. What about the other way around? If I make a vector of length 200, you'd think we could apply it on the left to multiply every row by a single value. That however doesn't work. What works is to add a new dimension of length one to the gradient vector, which we can do with a special indexing notation, NP dot new axis. The shape of Y grad is now 200 by one. NumPy broadcasting then matches the first dimension of the two arrays, Mona Lisa BW and Y grad, and broadcasts the second dimension of Y grad to fill up the corresponding range in Mona Lisa. The result is the vertical gradient. NumPy supports many other useful mathematical operations, including fast fully transforms, random numbers, [[Statistics]], interpolation, and [[Linear Algebra]]. If you need any of them,
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-2020/doing-math-with-numpy-arrays?u=76281980&t=284)** you can go read the NumPy documentation. There is one thing I want to show you here. It's that since version 3.5, [[Python (Programming Language)|Python]] implements a special matrix multiplication operator. The at symbol, which is put to good use by NumPy. For instance, we can use it to make the dot product of two vectors. A and B, each of three elements. This is the same as writing NumPy dot dot AB. Or we could write the [[Microsoft Products|products]] of a three by three matrix in a three vector.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Linear Algebra]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (4), python (1)
> **Versions:** 1.5 (1), version 3 (1)
> **Definitions:** is called (1), known as (1)
> **Analogies:** for instance (2)
> **Documentation:** the documentation (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Special arrays: Records and dates](https://www.linkedin.com/learning/python-data-analysis-2020/special-arrays-records-and-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/special-arrays-records-and-dates?u=76281980&t=0)** - [Instructor] In the last video for this chapter, I want to show you two NumPy features that are not always covered in tutorials, but they're still very useful. One is record arrays, where we can mix different data types and give descriptive names to fields. The other is date time objects, which as the name says, can encode a date and time. Let us load up a simple example of a record array, which I have prepared in the NumPy binary format. This is a partial David Bowie discography. Each entry shows the record name, the date of release and the top rank in the UK charts. Let's look at the data type. It's a list which shows the name of each field and the actual D type. For title, it's U32, which denotes a Unicode string of maximum length 32. For release, it's M eight brackets D which denotes a date time object with granularity of days. It could be as small as a nanosecond in fact. The eight refers to the size in bytes of each date time object. Last, the top rank, is an eight byte integer data type. If you're wondering about the less symbol in each of these, those refer to the endianness of the data types, the order in which the bytes are stored in memory. Inter-processors are little endian. So what can we do with a record array?
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-2020/special-arrays-records-and-dates?u=76281980&t=92)** Each record looks like a [[Python (Programming Language)|Python]] tuple, and we can extract the elements as we would for a tuple but we can also modify them. We can also use a dict like interface using the field names in brackets. This, in fact, will also get us a full column. To create a record array, you have to be a little careful in specifying the D type. It's useful to go read about data type descriptors in the NumPy documentation. But let's try one. We specify a subset of the information we have in discography, just the title and release date. This array is empty right now, but we can copy over the two columns. Here we see that the title strings have been truncated to 16 characters. Since all the data is stored contiguously in memory, the lengths that we prescribe for the fields are very important and set the limit for the data that we can store. We see also that we specified a finer granularity for the date time object, seconds, although it's all zeros because the discography array didn't have that information. We move on to the date time object, which is called datetime64 to avoid confusion with the object in the standard library, and also to remind us that each element takes 64 bits. We can initialize date time object with strings, and we can give it as much detail as we want,
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-2020/special-arrays-records-and-dates?u=76281980&t=186)** just the year, a full date, and date and hour minute combination, or even beyond that. Date times can be compared, so noon came before 6 p.m. on that day, like any day. Date times can also be subtracted, resulting in a time delta object, which here is specified in minutes. The nice thing about these date time objects is that they are understood across NumPy. For instance, we can use the NumPy function diff, which computes the differences between successive elements of a vector to see how long it took David Bowie to come up with a new record after each one. Ziggy Stardust was especially quick. Another example may be making a range of these. NumPy in a range understand date times. And we see that the last day is excluded consistently with the conventions of range and a range. This functionality is extended even further in [[Pandas (Software)|Pandas]]. And in fact, the whole idea of record arrays has a much stronger implementation in Pandas DataFrames. We'll learn about those later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (1), refers to (1), is an  (1), is called (1)
> **Cross-References:** in the last (1), later in (1)
> **CLI Commands:** python (1)
> **Env Vars:** u32 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 5. Use Case: Weather Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of use case](https://www.linkedin.com/learning/python-data-analysis-2020/overview-of-use-case-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/overview-of-use-case-2?u=76281980&t=0)** - [Instructor] In this chapter, we are going to experiment with NumPy on a real world use case, analyzing weather data from NOAA, the National Oceanic and Atmosphere Administration. The GHCN, the Global Historical Climatology Network Daily is an integrated database of daily climate summary from land surface stations across the globe. Many in big cities for instance. Climate summaries, in this case, means variables such as the minimum and maximum temperatures, the total precipitation, and so on. The data files that we will be using can be obtained from the NOAA website. Together we will download a station list and use it to locate temperature data for cities. We will load the data files, fill missing values, and smooth time series. Finally, we will create a visualization of daily temperatures inspired by the New York Times weather plots.

> [!info]- Semantic Content
>
> **Env Vars:** noaa (2), ghcn (1)
> **Analogies:** for instance (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Loading station and temperature data](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980&t=0)** - [Instructor] In this chapter, we download several data files from the web. However, all the files that we analyze are also included in your exercise files, in case they became unavailable online, or you're unable to download them for any other reason. And before we load the data itself, it's also a good idea to start by looking at it's documentation. Browsing through the file listing at the NOAA website, we see a README file, and we start there. Instead of clicking on that link in our browser, let's use [[Python (Programming Language)|Python]] to download the file. There are several Python modules we could use, but for a simple download, the standard library module, urllib, is quite appropriate. urllib.request.urlretrieve needs the URL and the name of a local file. It's done already. We can use the Jupyter Notebook to look at the README file, by clicking on it. We see that it describes the contents of the directory, the format of DLY data files, which contain data for a single station, and are formatted with fixed-width columns. And the format of a file, GHCND stations, thank you, says the location, elevation, and ID for each station in the network. That's where we need to start, so we download that file with urllib. I've copied the description of the format
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980&t=97)** into a text field in this Notebook, for our reference. To load a fixed-width text file, such as this, we can use NumPy genfromtxt. It needs rather precise information. We specify the width of each field in the parameter delimiter. We can derive the widths from the table above, or we need to increase them to include the spaces between the columns. Next, we provide the name, a descriptive name for each column. And we specify the dtype, the NumPy data type for each column. For the first field, for instance, we need a string of 11 characters. Then, we have three floats, and a few more strings of various lengths. And last, we'll tell NumPy to remove all the leading and trailing spaces from all the strings it parses. There result is a NumPy record array with more than a hundred thousand entries. Thankfully, Jupyter chooses to show us only a few lines at the top and the bottom. By plotting longitude against latitude, we get an idea of the impressive global coverage of the database. We need to make the dots small, so that they're not too crowded. Even so, the US and Europe are basically just solid masses of ink. How about stations in California?
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980&t=189)** We can use fancy indexing with a Boolean expression, stations state equals equals CA to downselect our dataset. Coverage is still impressive. What if we need a specific station? Fancy indexing again comes to the rescue. We select all stations, for which it is true that the name field equals 'Pasadena'. We find one. If we want all stations that start with a given string, the syntax would be more esoteric. What np.char.find does, is to return the index at which a certain substring, 'Pasadena' in this case, appears in the field, or minus one if the substring is not there. If we required the index to be zero, that's the same as saying that the station name begins with 'Pasadena'. So, we see that there are several stations, a few of them in Pasadena, Texas and Pasadena, Maryland. Only one, however, is in the quality-controlled HCN network. Let's get that one. I've built this URL by looking at the structure of the directories on the website. You see that it ends in Pasadena's ID, USC00046719.dly.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980&t=276)** Locally, we'll download to the file Pasadena.dly. Let's look at that file. Again, with Jupyter Notebook. It's quite messy, but we recognize the station ID in the beginning of each line, followed by year and month. Here, we are in 1918. The name of an element, such as TMAX, and 31 data points, one for each day of the month. Each data point itself, consists of the value and three flags. We could use genfromtxt again, but it's going to take us a while, so, I prepared a small module for you, getweather.py, that takes care of parsing the file and returning consecutive daily values for a year. The module uses [[Pandas (Software)|Pandas]] to clean and reformat data, but returns it as a pure NumPy array. After you've learned about Pandas later in this course, I encourage you to go look at getweather.py and see what I did there. We import the module and then we look at the help, known as docstring. This function does what I described, returning data for one year, for one station. Let's try it out on Pasadena. We request both TMIN and TMAX for year 2000. Some measurements are missing, and they are here represented as 'nan', nan, not a number. This function would be a great foundation
>
> **[6:09](https://www.linkedin.com/learning/python-data-analysis-2020/loading-station-and-temperature-data?u=76281980&t=369)** for our work in the next few videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (2)
> **Env Vars:** readme (2), url (2), tmax (2), noaa (1), dly (1)
> **CLI Commands:** python (2), find (2), make (1)
> **Tools:** jupyter (3)
> **Analogies:** such as (2), for instance (1)
> **File Paths:** getweather.py (2)
> **Cross-References:** later in (1), in the next (1)
> **Exercise Files:** exercise files (1), download the (1)

#### [Filling missing values](https://www.linkedin.com/learning/python-data-analysis-2020/filling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/filling-missing-values?u=76281980&t=0)** - [Instructor] We pick up where we left and load temperature data for Pasadena, California using our getweather module. This is a time series, a sequence of values, organized chronologically, usually with equal cadence, that is the same time interval between every two consecutive samples. To get a sense of the data, one of them begins by computing its average value and perhaps its extreme, the minimum and maximum. With NumPy, we can use mean, min, and max. But wait, in this case, we seem to get NaNs. What's going on? It shouldn't be surprising, if we remember that the data contains missing values, which are indeed represented as NaNs. And NaNs can't really participate in any mathematical operation, NaN plus one is still NaN. In fact, how many do we have? The NumPy function isnan, creates a Boolean array of NaN-ness, so to speak. We can then count the instances of true in this array by using a neat trick. If we do arithmetics with Booleans in [[Python (Programming Language)|Python]], they are converted to integers with false counting as zero and true as one. So, for instance, false plus true plus true is two. It follows that we can count the trues in a Boolean array just by summing it up with NumPy sum.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-2020/filling-missing-values?u=76281980&t=98)** So what can we do? Missing values are so common, in fact, the NumPy offers versions of its functions that simply ignore them. For instance, NumPy nanmin and nanmax. If we do need an uninterrupted series of numbers, we could just set the NaNs to the average of the column. This is yet another application of fancy indexing because we want to modify only the NaN elements. So we write something like Pasadena to mean fancy indexed to the true NaN Boolean mask is set equal to the NaN mean of the same variable. This works fine. We can tell which elements we changed because they have more digits than all the others, which were encoded with limited precision in the GHCN data. The integrated dataset can now be plotted without discontinuities. A more powerful approach to restoring missing values is to interpolate. That is, we can use neighbor values to compute a plausible number for the values that are missing. Let me demonstrate in a tall problem. Let's say we measure a function y, defined at integers x between zero and eight, but we don't have some of the values. In this case, we don't have value set x of two, three, and six. Let me show you all of this in a plot.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-2020/filling-missing-values?u=76281980&t=194)** I will now define an array of the integers at which we do want new interpolated values. I use NumPy linspace, so if I sat down and I said zero and eight, it's nine elements total. The function of NumPy interp takes as arguments the desired location, my xnew, followed by the data we have, x and y. It returns values that are interpolated linearly by fitting segments between existing data points. Here I'm plotting interpolated points as orange squares. This seems to make sense and to be rather conservative. The newx sequence, if you needed to, could well be the answer. 30 points between zero and eight. So let's use interpolation to fill missing values in the Pasadena temperature data. I need to load it again, since I fixed it already by replacing NaNs with nints. Here, now it's broken again, so to interpolate, we select the good data points, those that are not NaNs, and a tilde in this expression denotes logical notation. Then we make an array of the x-values for which we want interpolation. All days from one through 365, and then we can apply NumPy interp. This seems to work well. We celebrate by generalizing our Pasadena-centric code, so that it can fill up holes in any array by interpolation.
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-2020/filling-missing-values?u=76281980&t=292)** It's just a question of replacing Pasadena with a generic array argument, and 365 with the length of that array. Finally, we can plot interpolated temperature series in all their glory using our new function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **Analogies:** for instance (2)
> **Env Vars:** ghcn (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Smoothing time series](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980&t=0)** - [Instructor] Now we know how to load temperature data from any station, how to compute basic summaries such as mean, min and max, and how to integrate missing data points using interpolation. We'll continue with more data analysis in NumPy. I've copied your fill NaNs function here since we will need it. We looked at data for Pasadena in the last video, now let's move to even sunnier skies by looking at weather in the town of Hilo, big island Hawaii. We use our custom loader and again, I encourage you to go look under the hood. This is data in fact from Hilo International Airport we now fill the missing data for both T min and T max. Once more two pole unpacking is very useful. Let's look at some data summaries. The yearly average which gives us a sense of the typical value for T min, and it's min and max. Will span the range of variation of these measurements. We can plot the summaries together with the time series. The map load live function adds each line, plots a horizontal line that spans the entire graph. Also useful for reference values, and we'll make them dotted. Another common way to measure the range of variation of a time series is to compute the standard deviation defined at the square root of the values. If you don't know about this you can go to [[Statistics]],
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980&t=94)** text book, or to Wikipedia. Mean and variance are computed in NumPy with NP Mean and NP Var, we can plot the time series again using the mean and the mean minus and plus the standard deviation as references. Most of the time the temperatures are included in this range and given that this is Hawaii it's also interesting to look at precipitation. We grab those values with Get Weather and just plot them. The rainy season starting in November is quite evident. Now looking at the data this way is very informative, but we also see lots of noise, rapid variations between one day and the next, which can obscure underlying trends. To remove the noise, we can smooth the data. So that we see the slower long-term behavior below those still issues and the simplest approach to smoothing is replacing each value with the average of a set of its neighbors. With NumPy we can do this with correlate. I will demonstrate first with a very simple and short data set consisting of two peaks over a background of zeroes. I then define a roughly triangular correlation mask which is highest in the middle and drops down to the sides and I have arranged the values so they sum to one, next I write the correlation.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980&t=189)** What it does is to multiply each element in the series with the mask and then sum up all the resulting short series. Sliding them so they are centered around the sample that we multiply, thus as you see in this figure, each peak generates a triangle centered on its location. I have not explained the keyword same that we gave to correlate, what it does is to request that the output of the correlation be the same length as the input. Even as this means that the points on the boundaries get sums from fewer masks. So we may see some anomaly there. To smooth our temperature series we will use an even simpler mask, uniform values normalized so that they sum to one. We're going to get that in NumPy with NumPy once, let's try this out. We plot the regional temperature series as dots, maybe a little smaller than usual, and the smoothed series has a continuous line. This works fine, we are reducing oscillations while emphasizing the underlying slower trend. We do see something strange happening at the beginning and end of the data set. The values are going way low. That has to do with the keyword same, and we detect that the values on the boundaries have fewer neighbors than everybody else.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980&t=284)** If we can do without a few points at the end and at the beginning we can change our request to amply correlate to valid and avoid this problem. We can now make a function to apply smoothing of any length to any array. The length of the smoothing mask is sometimes called window and by default we'll use valid mode. We then plot T min and T max together for Hilo. It's an interesting plot and I'd like to see it for other cities, so once again let's take a code and generalize it to arbitrary station and year. So we get the data, we fill in the NaNs and we plot both the original data and a smooth version. We need to offset the plot a bit since we lose points with valid mode, so the range if the smoothing is over 20 days would just be from day 10 to day 356 of the year. Let me try this out, for instance over multiple years for Hilo to see if the Hawaii climate is stable. Quite so. How about comparing cities in different climates? Let me look over Pasadena, New York, San Diego, and Minneapolis and then create a sub-plot in two rows and two columns for each one of them. I'll focus on the year 2000. There's some downloading and then we see the plots
>
> **[6:20](https://www.linkedin.com/learning/python-data-analysis-2020/smoothing-time-series?u=76281980&t=380)** come out together, if you can choose based on weather alone where would you live?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for instance (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Weather charts](https://www.linkedin.com/learning/python-data-analysis-2020/weather-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/weather-charts?u=76281980&t=0)** - [Instructor] We're going to conclude a NumPy practice, by making a quick but impressive weather visualization, that showcases the power and flexibility of NumPy and Matplotlib. It's inspired by the New York Times weather chart shown here. And it shows daily minima and maxima, the proper band in the context of their normal range, dark gray and of their records, light gray. We will again use Pasadena as an example, but you can do your own city, if it's included in the NOAA data set. Remember, we want to show Records, which means that we need all the data we can get. The Gateway, the module, that's a query for one year of data at a time. So, we'll call it repeatedly collecting the results in a comprehension and feeding that to NumPy vstack, which makes a two-dimensional array formally so one-dimensional arrays. The result can be visualized with matchshow. We've added also a colored bar to provide a reference of the mapping of values to color. And we have specified the extent to get more informative labels on the axis. We see some missing data, the white patches, and we can observe winter and summer nights getting warmer towards the end of the century. For simplicity, we will forego filling a nance and use NaN robust functions. We want record temperatures for every day of the year. This means that we can use NumPy nanmin on the demand data and specify axis equals zero,
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-2020/weather-charts?u=76281980&t=97)** so that the minimum will be taken across all rows for each column. We do the same for tmax using NumPy nanmax. Let's see the records. Now for the normals. In the New York Times plot the normal temperature range for each day is defined as the average of the low and high from 1981 to 2010. So we build another stacked array with a reduced year range. And again, we take nan robust means, across rows. So that's axis equals zero. Here's the normal range. We're ready to get the plot together. We do Pasadena in 2018, just like the Times, so I'd better get that data. To plot the band, we use Micro-LIBS fill between which needs an x-axis to coordinate the array. It needs also the lower and upper lines that delimit the band. So for the x-axis, I will use the day of the year for one to 365. Here it is, I will do similar bands for the records and normal ranges. I also want to show the average temperature for the year. I have to compute that though. That would be the mean of the minimum temperature plus the mean of the maximum all across the year, divided by two. In 2018, that was 19.46 degrees Celsius.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-2020/weather-charts?u=76281980&t=194)** I'm going to put this average temperature in the title, so I need to build up a string for that. For that, I will use the very convenient formatted string literals introduced in [[Python (Programming Language)|Python]] 3.6. If I start the string with an "F" before the quotes, I can include variable names in braces, which are then replaced by their values. I can also specify formatting instructions as I would, using the string format interface. For instance, two decimal digits for the average temperature. Let me put everything together. I plot the three bands for record normal and current year. I have also looked up the red green blue, the composition of the New York Times colors, which Matplotlib bonds as values between zero and one. The optional step equals myth makes the band look blocky so the individual days are in evidence. And last, the alpha setting makes the current year band partially transparent. I set reasonable access limit and finally add a title. Let's fire it off, very nice. In 2018, some values are missing, we see the purple band is interrupted and those are actually the hottest days. So you can play with other cities we'll turn this example into a function that can plot any year in any station. So here's New York in 2018. NumPy is extremely powerful and flexible, so you should learn about it in depth.
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-2020/weather-charts?u=76281980&t=287)** Coupled with Matplotlib it offers a direct route to beautiful and informative visualizations. In my course, [[Python Statistics Essential Training]], explores statistical plots in more detail and with more examples. You are now ready for your challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Statistics]] (1)
> **Definitions:** means that (2), defined as (1)
> **CLI Commands:** python (2)
> **Env Vars:** noaa (1), libs (1)
> **Versions:** 19.46 (1), python 3 (1)
> **Analogies:** just like (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Weather anomalies](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-weather-anomalies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-weather-anomalies?u=76281980&t=0)** - For your challenge, I'm asking you to plot the temperature anomaly for New York by computing yearly temperature averages for each year and comparing those with a mid-century average in the 1945-1955 decade. You can make yearly averages just as we did for the title of the New York Times inspired plot. TMIN plus TMAX over two averaged across the year. To make the mid-century average, just sum up results for 1945 through 1955 and then take the difference. This challenge should take about 15 minutes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** tmin (1), tmax (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat chime) (1)

#### [Solution: Weather anomalies](https://www.linkedin.com/learning/python-data-analysis-2020/solution-weather-anomalies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/solution-weather-anomalies?u=76281980&t=0)** - [Instructor] We start by importing getWeather, since we need temperature data. It will also be good to show smoothed plots, so we'll grab the smooth function that we made. We need all the available historical data for New York, say 1880 through 2019, which we collect in a stacked array. We sum TMIN and TMAX for this large array and then take the average across the columns. So x is equal one, so that we get a value for each year. The shape isn't yet what we expect. Next, the mid-century average. We need to figure out the index of 1945 and 1955, in this all avg array. For lists, we can use index to figure out the location of an element. But unfortunately, that doesn't work for NumPy arrays. However, we can turn array into lists quite easily by feeding them to the list constructor, and then index works. So now we can perform the mid-century average over the correct slice of the array. It's 12.8 degrees. And here's the plot. The anomaly is all avg minus the mid-century mean. It's quite noisy, so let's smooth it out. If we use valid mode to avoid artifacts at the edges, we need to remove some years from the x-coordinate.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-2020/solution-weather-anomalies?u=76281980&t=98)** The solution is complete really, but we can collect this code in a more general function so we can compare a few cities. So here's the comparison, with some complaints from NumPy by way of Jupiter that there's really no data before 1910 for Pasadena, and 1940 for Minneapolis. Still, the upward trend for all these three locations is quite evident.

> [!info]- Semantic Content
>
> **Env Vars:** tmin (1), tmax (1)
> **Code Identifiers:** getweather (1)
> **Versions:** 12.8 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [pandas overview](https://www.linkedin.com/learning/python-data-analysis-2020/pandas-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/pandas-overview?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]] has gained broad acceptance in the [[Python (Programming Language)|Python]] community as the data analysis tool for Python. As of January 2020, it should reach version 1.0 very soon, signaling the stability of its API, its programming interface. Pandas is built on top of NumPy so it's very fast. And it extends NumPy in ways that are extremely useful to data analysis. For instance it attaches labels to table columns and rows. It lets us access data using indexes built from any variable. It allows us to modify table structure by adding and dropping columns and by performing other transformations. It recognizes many common data formats. It handles missing data easily. It implements database operations such as joins and it can even make plots. So if you want to do data analysis or [[Data Science]] with Python, I really recommend that you learn Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (3), [[Data Science]] (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for instance (1), such as (1)
> **Env Vars:** api (1)
> **Versions:** version 1 (1)
> **Speakers:** - [instructor] (1)

#### [DataFrames and Series](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980&t=0)** - [Instructor] The two key objects in [[Pandas (Software)|pandas]] are the DataFrame and the Series. A DataFrame is basically a table of data. Each column has a name and an assigned data type as a NumPy. In addition though, the DataFrame has an index, which is not necessarily the ordinal number of the row. In this example, where the columns contain name, date of birth and city, the index could be the social security number or an alphanumerical employee ID. A Series is effectively a single column from a DataFrame with its own index. Having an index makes it more powerful than a simple NumPy array. For instance, if we have two time Series that have partially overlapping indices, times, we can still combine them and pandas will figure out which entries it can actually compute. Just as for NumPy arrays the easiest way to get a pandas DataFrame is to load it from a file. And pandas can read and write an even larger variety of formats than NumPy These include ASCII tables, [[JSON]], [[Microsoft Excel|Excel]], the hierarchical data format HDF using many scientific application, SAS, SAS, Strata, [[Big Data]] storage formats, such as Apache Feather and Parquet [[SQL]] and even [[HTML]] tables, which is great if you want to scrape data from a website.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980&t=95)** In this table, I show you the formats with the pandas functions that read and write them. Some of them may require the assistance of another package that you need to install separately. We start with a simple text file. Nobels.CSV, which contains a list of Nobel Laureates with a year in discipline in which they were awarded their prize. We can have a look. This is quite simple, the values are separated by commas. Pandas read CSV with this without breaking a sweat. We do need to provide names for the columns since the file itself doesn't have that information. Read CSV has many other options including specifying separators other than commerce, skipping columns or rows, converting dates and more. Let's look at the DataFrame. The method Info gives us basic information. And the method Head prints the first few rows, Tail the last. We have a total of 950 records. And we see that indeed the columns are named year discipline and the Nobelist. The data types are integer for the year and [[Python (Programming Language)|Python]] object for discipline and Nobelist. That's an important observation while in NumPy, we represent strings as fixed with runs of characters. In panda strings are effectively the immutable strings of Python, which are more versatile.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980&t=190)** As I mentioned, the index plays a very important role for data frames, but this one in particular, is a boring Numerical index. To grab the individual columns, which become Series, we use a dict like syntax with brackets, or a class like syntax with dot. Either way, the result is a pandas series, the object there represents a column. Consequently, the series has a name, ID type, and it carries with it the index of the original DataFrame. If we need a naked NumPy array of the values, we can still get it with dot values. Here's a small slice. Sometimes it's useful to get a list or really a NumPy array of all the unique values in a column. Other times, it's useful to have counts of the times each item appears. This accounting confirms that three scientists were awarded two prizes. To select records, we can use fancy indexing, building a Boolean expression that involves the columns. For instance, select the Nobels in Physics. Or you can use the convenient and fast Query Interface which takes a logical expression given as a string. We have to mind our quotes here making sure that we use single quotes for the query and double quotes for any values inside it. Sometimes it's not evident how to write a filtering operation.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980&t=284)** For instance, if we seek all the Nobelists whose name contain Curie, we like to write something like this, Nobel's fancy indexed by Curie in Nobel's Nobelist but that fails quite spectacularly. Instead we need to dig down in the string methods supported by the series to find Contains, which does what we need. The selection confers incredible winning streak of the Curie family. Marie her husband Pierre, her daughter Irine and her son in law Frederic Be sure how to create a data frame yourself. First from a NumPy record array. For instance, the David Bowie discography that we use as an example in chapter four. This is almost like cheating because NumPy record arrays are in fact the very back end of pandas. Nevertheless, the fixed length strings are converted to Python objects, when we get a DataFrame. Starting from scratch, we may build a DataFrame from a list of dictionaries, which means that we'll be repeating the column names over and over. Or from a list of tuples by providing names for the columns here title and top rank. Name tuples would also work great here. Otherwise, we can build the DataFrame in the other direction from a dictionary of vectors or lists. Here I'm just copying information
>
> **[6:17](https://www.linkedin.com/learning/python-data-analysis-2020/dataframes-and-series?u=76281980&t=377)** from the NumPy record array to make actual lists. And then I feed them to DataFrame. We have DataFrames, let's move on to using them. Now that we know how to load or make DataFrames, let's do something interesting with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (3), [[JSON]] (1), [[Microsoft Excel|Excel]] (1), [[Big Data]] (1)
> **Env Vars:** csv (3), sas (2), ascii (1), hdf (1), sql (1)
> **CLI Commands:** python (3), make (2), apache (1), find (1)
> **Analogies:** for instance (4), such as (1)
> **Definitions:** is a  (2)
> **File Paths:** nobels.csv (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** install (1)

#### [Indexing in pandas](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-in-pandas?u=76281980&t=0)** - [Instructor] We have seen how to load and create dataframes and how to select records based on boolean conditions both with fancy indexing and with a string expression-based query interface. Now we'll see how we can make selections even more directly and more efficiently using indices. So let's load up our Nobel list data set again. The index is currently the simplest possible just numbers from zero through 949. We elevate the years to serve as index. We do this with a set index method which does not work in place but other creates a new dataframe. Now the years appear as the index at the front of each row. And here's the index itself. This shows that in [[Pandas (Software)|Pandas]], indices do not need to have unique values. That's a feature, not a bug. It lets us select all records for a year, for instance, using the indexing notation and here things get a bit complicated. There are several ways to do indexing and slicing in Pandas, some equivalent to each other, some not. I'm going to show you the two interfaces that I think are the least confusing. To select all records for a given index, we use .loc followed by brackets, not parentheses, with the index value. For instance, 1901.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-in-pandas?u=76281980&t=93)** We can also add a column name just as if we were selecting a cell in a numpy array. The result is a series. In addition to selecting individual index values .loc allows for slices. But in a break from [[Python (Programming Language)|Python]] new search, the range is inclusive of its end value. If we choose the years of the great war, 1914-1918, then 1918 appears in the selection. We are not limited to all micro-indices. We can set up a dataframe indexed by discipline, for instance. And it's always best to keep the index sorted which we do with sort_index. Then we can select not just individual index values, but also ranges, which again, are inclusive. So physics, or medicine through peace. Here there are 353 rows but Pandas is only showing us a few at the beginning and at the end. That's what the ellipses symbols mean in the middle. If you want numpy style indexing, looking only the progressive count of the records, you can have it with .iloc, again, brackets. Here we get the first 10 records, whatever they are, in the dataframe in its current order. But this is not the end of the story.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-in-pandas?u=76281980&t=187)** Pandas supports multi indices. For instance, a dataframe indices nobelists by year first, and then discipline. It looks like this. The underlying index is a very complicated beast. But we can isolate the values set at two levels using, appropriately, get level values. Armed with this multi-index dataframe, we can select records by both year and discipline. Passing it two-pole to .loc. For instance, physics and 2017. Slicing however, can get complicated. Say we want chemistry prizes between 1901 and 1910. What we would like to do is to write a slice with a column in a two-pole. But Python doesn't allow that. How about we use the long-hand expression for the slice? Slice by indices start and end value. That's still confusing to Pandas because then it tries to use chemistry as a column name. What works is to request the set of columns explicitly in the .loc expression. In this case, all of them with a comma. Fancy indexing works also. Here, slice none means that we're taking all the years but we select a list of the disciplines.
>
> **[4:43](https://www.linkedin.com/learning/python-data-analysis-2020/indexing-in-pandas?u=76281980&t=283)** And again, all the fields. Finally, while multi-indexing is powerful, it can be confusing. And so you may have to resort to trial and error. Any selection that you make that way, however, you can also achieve without multi-indexing by using criteria on the values in the columns. For instance, chemistry prizes between 1901 and 1910. Where I have built a three boolean arrays, years are going to equal the 1901, years less or equal to 1910, and discipline equals equals chemistry and I have taken the logical end with the ampersand. Or again, with query, which lets me write the same selection in a more intuitive form. Note, however, that all these queries return new dataframes. So you cannot use them to modify values in the original table as you could do with the indices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (2)
> **Analogies:** for instance (6)
> **CLI Commands:** make (2), python (2)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** sort_index (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Plotting](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980&t=0)** - [Instructor] We have seen how to load and create data frames, and how to select records or ranges of records, but we have not done much with the values in the tables. In many data analysis tasks, you're interested in running computations with the columns and then making plots. Let's try that with [[Pandas (Software)|Pandas]]. We'll load the data set consisting of global population health and wealth [[Statistics]], from the amazing Gapminder website. Gapminder is a Swedish foundation created by the late Hans Rosling to promote a fact-based worldview and to fight misconceptions about global development. If you want to make plots in the Gapminder style internalize their data in some depth, you can try my [[LinkedIn]] learning course, [[Python Statistics Essential Training]]. In this video we'll do simpler things but still learn a lot. So we load the comma-separated file. And we see that the data set includes a number of global statistics. Each row identifies a country, a year, the corresponding region, and then they count us population, life expectancy, the percentage of children born alive who survive to age five, the average number of babies per fertile woman and the domestic product per person in 2011 dollars. We can ask Pandas to compute single statistics on all the fields.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980&t=95)** We do that with data frame describe. We see that there are almost 15,000 records in the data set for years ranging from 1800 to 2015. We can read off the minimum, maximum, mean, and standard deviation for all the fields as well as the 25th, 50th, and 75th percentiles. If you don't know about these don't worry. They give us an idea of the typical values and typical range of variation of a quantity. One of the points that Gapminder makes to great effect is that life expectancy improves with wealth, the Gross Domestic Product per person, GDP, and that the correlation is even clear if we look at the logarithm of the GDP per person per day. We don't have a column with that information, but it's very easy to compute it and to store it in a new data frame column. So we divide GDP per capita by the average number of days in a year, apply a non-pi log 10, and store that in a new column which then appears in the data frame. To see global trends as a function of time or to examine individual countries, it makes sense to index by year and then country. We will have two versions of the data frame with those two indices. Pandas has its own plotting interface which focuses on choosing the variables with which to plot. Say for instance we want to show life expectancy
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980&t=192)** is a function of log GDP. So we select data for 1960 with dot log, and then generate a scatter plot of those two variables, it's sufficient to give the column names to Pandas. If we want to compare a more recent year in the same plot, we need to grab a map of lib axis object from the first plot and then pass it to the second. This is the kind of solution you find on [http://www.stackoverflow.com](http://www.stackoverflow.com). You should also change colors and label the two clouds of points. We see that in going between 1960 and 2015, the dots flatten towards the top, towards higher life-expectancies. Thanks to significant progress in [[Public Health]] policy and practice. The trend is the same for other statistical indicators such as survival by age five. The data frame index by country lets us make easy plots of the chronological evolution of an indicator such as life expectancy for a country such as Italy. But the result is jumbled if we don't first sort the values by year. I'll do it here with sort values. The style of coding where I concatenate one Pandas method after the other is in fact quite idiomatic for Pandas, if not for [[Python (Programming Language)|Python]]. So when we say that Pandas speaks
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980&t=285)** its own Python dialect. Here's a comparative plot for three countries. Again we grab the math.lib axis and pass them to the second or third plots. We see that Italy caught up with the United States in terms of life expectancy and China is coming close after the disastrous 1960 famine. Another interesting and important correlation was between fertility rate and survival to age five. To look at this question globally we can compute the average fertility rate over all records, that however doesn't mean much, since it misses data from many years. We can use the Panda's group by functionality to segment the data frame by year before computing the average. The result is a series indexed by year which shows the average fertility rate as a function of time and we plot it against age five survival, treated in the same fashion. The Pandas plot allows us to add a second axis on the right to show the range of the second variable that we plot. This shows forcefully that high natality is a consequence of infant mortality, and that women have many fewer children when they believe they will survive. On a small scale, we see that post 1950 baby boom. To gain even more insight we can create a pivot table. This segments the fertility means by both year
>
> **[6:21](https://www.linkedin.com/learning/python-data-analysis-2020/plotting?u=76281980&t=381)** and geographical region. Pandas is very happy to plot the resulting timelines. The drop in fertility came after the baby boom for Africa, America, and Asia. Europe was already low and decreasing since the beginning of the 20th century. And here's the corresponding plot for age five survival. Africa is now roughly where Europe was in 1950. Using Pandas plotting functions is the quickest way to make insightful statistical illustrations. But for maximum flexibility, you can always extract the values from the frames as non-pras and pass those to standard math.lib functions, which are fully customizable. There's a lot more you can do in Pandas, and there's a lot more to learn that I can cover in this course. I try instead to give you a feel for what is possible and practical. I encourage you to start working on a data set that interests you and to pick up more techniques and knowledge using the many resources available on the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (11), [[Statistics]] (4), [[Python (Programming Language)|Python]] (3), [[LinkedIn]] (1), [[Public Health]] (1)
> **CLI Commands:** make (3), python (3), find (1)
> **Env Vars:** gdp (4)
> **Definitions:** is a  (4)
> **Analogies:** such as (3), for instance (1)
> **URLs:** [http://www.stackoverflow.com](http://www.stackoverflow.com) (1)
> **Speakers:** - [instructor] (1)


### 7. Use Case: Baby Names

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of use case](https://www.linkedin.com/learning/python-data-analysis-2020/overview-of-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/overview-of-use-case?u=76281980&t=0)** - [Instructor] We are now going to apply [[Pandas (Software)|pandas]] to an intriguing real world use case. We will analyze the U.S. Social Security Baby Name Catalog, which reports the names given to male and female newborns for every year since 1880. This is a very simple data set, but it's great fun to play with, and it has been mined, analyzed, and visualized in many publications and websites. Specifically, I will show you how to load it, how to track the popularity of a name across all years, and how to extract the 10 most popular names every year. Your challenge will be about finding the most common unisex names.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Loading data sets](https://www.linkedin.com/learning/python-data-analysis-2020/loading-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/loading-data-sets?u=76281980&t=0)** - [Instructor] You can download the Social Security name data set from their website. But I have also included the archive names.zip in your exercise files. We need to uncompress it, which we can do in [[Python (Programming Language)|Python]] using the ZipFile module. The interface is object oriented. You first create a ZipFile object, then called extract all in the current directory. That's the dot. Jupiter lets us browse the contents of the current directory with ls. We see that names.zip, unpacked into a directory with many text files, presumably one for every year. Let's have a look at one. We open it in read mode and print out the first few lines. It's a very simple comma separated format. Name, sex, presumably F or M, and then the number of babies born that year with that name. [[Pandas (Software)|Pandas]] read CSV shouldn't have any problems. But we did do something wrong. The first record in the file, Sofia, was used to set the names of the columns. We need to provide the column names explicitly, since they're not in the file. We've already done this for the Nobel data set. Better. We will need to load all the tables and concatenate them in a single data frame. To avoid confusing data from different years,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-2020/loading-data-sets?u=76281980&t=94)** we can prepare the individual data frames by adding a new column that specifies the year. To do it on the fly, directly from the output of read CSV, by chaining a method, we can use data frame assign. In this case, a new column year appears with value 2011. Excellent. We managed to load the file in a one liner, so you can see that I'm going to use a comprehension to concatenate all the data frames. There are several things happening here. So let's look at this carefully. We loop over all the years between 1880 and 2018. We build up the file name using an f-string, and feed that to read CSV. We specify the column names, and we add the column that gives the correct year from the loop variable. Finally, we pass all the resulting data frames to pd concat, pandas concat. You see there are no brackets here, so this is in fact a generator expression, not the comprehension, which pd concat accepts quite happily. It's a very efficient way to build a data frame, and it's all there. Almost two million entries. The year range is what we expect. We can save the merged data frame using to CSV. We don't need to say the index
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-2020/loading-data-sets?u=76281980&t=189)** and if we specify a file name that ends in .gz, the resulting file will be automatically compressed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** csv (4)
> **CLI Commands:** python (1), ls (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Comparing name popularity](https://www.linkedin.com/learning/python-data-analysis-2020/comparing-name-popularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/comparing-name-popularity?u=76281980&t=0)** - [Instructor] We are ready to start analyzing this data. How we load and look at the combined data frame we just created. We want to examine the change in popularity of a name. So we need to reframe the data in a way, that will make this easier. We will use a multi-index. We will index the date on sex first, then name, and then year. And we will also sort the index. Getting the data for any given name is then a simple exercise of indexing with dot loc. For instance Mary, this series is ready to plot. Notice how Metro-lib automatically uses the index to set the x-axis. We see two peaks. At approximately 1920 and 1950. It probably makes sense also to consider the frequency of a name as a fraction of the number of babies born in a year. To get that, we can apply group by on the un-indexed data frame and take the sum. Then we can normalize Mary by all the newborns in every year. So as a percentage of all babies, Mary was actually more popular at the beginning of the 20th century. But there were altogether more Marys born in the 1920s and 50s. For simplicity, we continue with unnormalized counts. So let's make a generic function plot name
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-2020/comparing-name-popularity?u=76281980&t=93)** to make a plot like this. In another function compare names to plot a few names together. You see that we pass a list of names through compare names. We look over the list called plot name for each of them and then add a legend, which is always good. Let's for instance compare Michael, [[John the Ripper|John]], David and Martin. Or for girls Emily, Anna, Claire and Elizabeth. It's already a popularity contest that we make in here. Another interesting investigations is to compare variance of the same name. For instance, there are two spellings of Claire. There's an older version Clara, and an Italian and Irish spelling for the pronunciation Ciara. Here's the plot. Notice how Metro-lib tries to put the legend out of the way. Claire is now dominant, but Clara is having a resurgance after having been the dominant variant at the beginning of the 20th century. We can make a slightly different cumulative or stacked plot that adds up the counts on top of each other. For that, we need a table of the frequencies for all the variance as a function of time. That would be an exercise in multi-indexing. We start by selecting all the Claires and then we can apply data frame and stack to move one of the index levels to a column name.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-2020/comparing-name-popularity?u=76281980&t=187)** In this case the year is level two of the multi-index. So the years become the columns. I must say that sometimes it's hard to make sense of what unstack does, so expect some trial and error. By contrast, unstacking level one would have made columns corresponding to the name variance. We can now try this stack plot. On the x-axis we will have the years just a simple range will suffice. And on the y-axis, the stacked values. This works but we see that the plot is truncated around 1974. That must be because of some of the Nans in the table, which do not lend themselves to be summed up. That's easy to fix with data frame fill and A. We'll replace the Nans with zeros. And here's the final plot. I have also added a legend, seeded by the labels given to stack plot. And I've restricted the x-axis, quite nice and informative. Except perhaps for the garish different colors chosen by map plot lib.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1)
> **CLI Commands:** make (6)
> **Analogies:** for instance (3)
> **Speakers:** - [instructor] (1)

#### [Yearly top ten names](https://www.linkedin.com/learning/python-data-analysis-2020/yearly-top-ten-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/yearly-top-ten-names?u=76281980&t=0)** - [Instructor] In this video, we will create yearly top 10s for male and female names. We load the data, and this time, we index it slightly differently, by sex and year only since we will need to compare all the names in the database. We now build up a query by chaining [[Pandas (Software)|pandas]] methods. Getting males in 2018 is a simple matter of a multiindex.log. Then we get the most popular names by sorting our number in descending order. Head gives us a top 10. In 2018, Liam was king, followed closely by Noah. How about girls? We index sex with f, and the year is still 2018. For girls, it was Emma and Olivia. If we to build a table of the top 10 names over multiple years, we should get rid of the index with Reset Index, and select the name, Column Only. I will make this into a generic function. As I was saying, in pandas, one sees this operator chaining style often. And we can make the code clear by giving each method it's own line. It's a good idea, however, to add comments to explain what you're doing, either for your collaborators or your future self since pandas can be obscure.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-2020/yearly-top-ten-names?u=76281980&t=96)** To form a table, we collect the series for different years as the columns of the data frame, labeled by the year. So in effect, we're creating a data frame from a dict comprehension. For males, you can see Liam gaining popularity and Jacob dropping. For females, we see that Emma has been dominant for a few years while Sophia dropped. Olivia is there, waiting to take the crown. How about the popularity plot for the 2018 top 10? For a change, we'll use the query interface, which conveniently lets us use the values of variables with the Add Notation. So here, we're passing sex and name to the function. And we select in All The Records where the sex column equals the sex argument, and the name column equals the name argument. This is not very pythonic, but it's nice to have once you know about it. Once we have the records, we plot number against year. So let's loop over the 2018 female top 10 and plot each. It's interesting to see that all the top names seem to have surged quite recently except perhaps for Evelyn, which was popular in the 1920s. As for the male names, two are classics, William and James. Let's look at the others then.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-2020/yearly-top-ten-names?u=76281980&t=195)** This is the list, and I will copy a subset of it to the loop over which I plot. So now, I'm excluding William and James. And I see that, yes, the other eight have also been recent discoveries. How about all-time favorites? We get there quickly by selecting females, say, grouping by name, summing the numbers, sorting by the values, and then taking the top 10. Mary is in fact the all-time favorite among girls. If we look at the popularity over time of these names, we see that they've gained their spots in the first half of the 20th century except for Jennifer. Now that given the structure of the all-time f data frame, I'm looping over the index rather than the value. Next, you'll be asked to use what you learned in a challenge about unisex names.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Unisex baby names](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-unisex-baby-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-unisex-baby-names?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-2020/challenge-unisex-baby-names?u=76281980&t=5)** - [Narrator] For your challenge, I would like you to find a top ten unisex names and to plot their popularity throughout the years for both the male and female usage of the name. We will define unisex names as those for which the total number of boys and a total number of girls born across all years and within a factor of two. That means that you're going to compute the total number of boys, divide by the total number of girls, and verify that that's between 0.5 and two. Given the technical nature of some [[Pandas (Software)|Pandas]] computations, I have some hints for you. Try using DataFrame.groupby(). Take advantage of the fact that Pandas can execute a mathematical operation between two series even if they have different indexes. And finally, if you need to drop not a number, nan values, use DataFrame.dropna.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (playful music) (1)

#### [Solution: Unisex baby names](https://www.linkedin.com/learning/python-data-analysis-2020/solution-unisex-baby-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/solution-unisex-baby-names?u=76281980&t=0)** - As I mentioned already, in [[Pandas (Software)|Pandas]] there are often several ways to get the same result. So if your results are similar to mine, but you get them in a different way, don't worry, your solution may even be better. We'll load our data set as usual. We need to compute the total number of boys and girls for a given name. This seems a good place to use group by, which lets us segment the data before applying an aggregation, in this case, the sum of the number of babies. So we use group by over sex and name, we select the number column and we take the sum. From this list with a multi-index, we can grab the males and females respectively, using dot lock. As you see, the two indices are going to be different. Epon doesn't appear in the females. Nevertheless, we can combine the two series and pandas will align the indices for us. The results would be none where either series doesn't have an element. For instance we check where the ratio between males and females is less than two. We can certainly get rid of those nones with drop in A. Now, remember the definition of unisex names as those with a ratio between .5 and two. This is a good expression for fancy indexing,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-2020/solution-unisex-baby-names?u=76281980&t=95)** and after we apply it, we see that 1660 names pass the test. Here, I've taken the index, because we don't actually need the ratio itself, but just the names. The next thing to do is to find the ten most common unisex names, so we sum the male and female counts using the unisex array to index our two totals. We sort the resulting series, and we cut it off at the top. Jessie seems to be the winner of this particular contest, followed by Reilly, Casey, and Jackie. Now to clock popularity, it's convenient to use a fully indexed data frame. We also remember to sort that index. Now we'll loop over the most common unisex names, which remember, are the index of the common series, and we plot by selecting male or female in the name. Matplotlib type layout helps improve the spacing of the subplots, while Jessie is the absolute winner, it appears to have fallen out of favor somewhat. Reilly is ascendant, but not for boys anymore, and Casey, which peaked around 1990, may be the most unisex name of all, with the male usage of the name tracking the female usage very closely. Great, we've been through a lot in this course, and I hope you've gained an understanding
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-2020/solution-unisex-baby-names?u=76281980&t=191)** of what is possible with NumPy and Pandas and matplotlib, and more generally, with [[Python (Programming Language)|Python]] as a language for data analysis. I hope you'll go out to discover and learn even more and that you use Python happily in your every day work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1)
> **Analogies:** similar to (1), for instance (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - as (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-data-analysis-2020/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-2020/next-steps?u=76281980&t=0)** - Well done. Thank you for following along through some rather challenging material. You are at the start of your road to mastery. You can now move on to my more advanced courses on programming efficiently in [[Python (Programming Language)|Python]] and on [[Statistics]] with Python. Back to the topic of this course, here are some resources that can help you learn more. You can find the answer to any question about Python or about NumPy, Matploylib and [[Pandas (Software)|pandas]] on the official websites. These packages are also discussed in "Python [[Data Science]] Handbook" by Jake Vanderplas, a very insightful and no-nonsense textbook. If you get stuck, look for help in an internet forum such as Stack Overflow. You'll find that Python has a very helpful and supportive community. Many have said that the best thing about Python is that it's a language that makes you happy. I agree so have fun and do great things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Statistics]] (1), [[Pandas (Software)|Pandas]] (1), [[Data Science]] (1)
> **CLI Commands:** python (6), find (2)
> **Documentation:** stack overflow (1)
> **Analogies:** such as (1)
> **Speakers:** - well (1)


## Instructor

- [[Michele Vallisneri]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Analysis

## Path Context

### In [[Anaconda Python for Data Science Professional Certificate]]
← [[Learning Python (2021)]] | **5 of 5**

## Part of

- [[Anaconda Python for Data Science Professional Certificate]]

## Appears In

- [[Anaconda Python for Data Science Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis
- [[Python Functions for Data Science]] — Python (Programming Language), Data Analysis
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis
- [[Python for Data Analysis- Solve Real-World Challenges]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)