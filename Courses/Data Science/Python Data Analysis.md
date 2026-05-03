---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-analysis-24296803
url: "https://www.linkedin.com/learning/python-data-analysis-24296803"
duration_minutes: 223
duration: 3h 43m
level: Intermediate
updated: 1/9/2025
learners: 101584
skills:
  - Python (Programming Language)
  - Data Analysis
  - Statistical Data Analysis
exercise_files: true
github: "https://github.com/LinkedInLearning/complete-guide-to-python-data-analysis-4571000/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Data Analysis Skills]]'
  - '[[Advance Your Python Skills for Data Science]]'
prev_courses:
  - '[[Using Tableau to Discover Powerful Business Insights]]'
  - '[[Data Science Foundations- Python Scientific Stack -CoderPad-]]'
next_courses:
  - '[[Data Science Foundations- Data Mining in R]]'
  - '[[More Python Tips, Tricks, and Techniques for Data Science]]'
path_nav: '[{"path":"Develop Your Data Analysis Skills","position":5,"total":10,"prev":"Using Tableau to Discover Powerful Business Insights","next":"Data Science Foundations- Data Mining in R"},{"path":"Advance Your Python Skills for Data Science","position":4,"total":6,"prev":"Data Science Foundations- Python Scientific Stack -CoderPad-","next":"More Python Tips, Tricks, and Techniques for Data Science"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
  - skill/statistical-data-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20Data%20Analysis.md)

![Python Data Analysis](https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50)

# Python Data Analysis

> Data science has transformed the way that government and industry leaders look at both specific problems and the world at large. Curious about how data analysis works in practice? In this course, instructor Michele Vallisneri explains what it takes to get started with data science using Python. Michele demonstrates how to set up your analysis environment and provides a refresher on the basics of w

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803) | 3h 43m | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [From data to insight with Python](#from-data-to-insight-with-python)
  - [What you need to know](#what-you-need-to-know)
  - [What is new in this update](#what-is-new-in-this-update)
  - [Set up: Using Codespaces](#set-up-using-codespaces)
  - [CoderPad challenges](#coderpad-challenges)
- [**1. Python Data Structures**](#1-python-data-structures) (5 videos)
  - [Warmup with Python loops](#warmup-with-python-loops)
  - [Tuples, lists, and the slicing syntax](#tuples-lists-and-the-slicing-syntax)
  - [Dictionaries and sets](#dictionaries-and-sets)
  - [Comprehensions](#comprehensions)
  - [Data classes](#data-classes)
- [**2. Project: Finding Anagrams**](#2-project-finding-anagrams) (4 videos)
  - [Overview: Finding anagrams](#overview-finding-anagrams)
  - [Loading dictionaries from text files](#loading-dictionaries-from-text-files)
  - [Finding anagrams](#finding-anagrams)
  - [Solution: Find palindromes](#solution-find-palindromes)
- [**3. NumPy**](#3-numpy) (5 videos)
  - [NumPy overview](#numpy-overview)
  - [Creating NumPy arrays](#creating-numpy-arrays)
  - [Indexing NumPy arrays](#indexing-numpy-arrays)
  - [Doing math with NumPy arrays](#doing-math-with-numpy-arrays)
  - [Special arrays: Records and dates](#special-arrays-records-and-dates)
- [**4. Project: Weather Data**](#4-project-weather-data) (6 videos)
  - [Overview: Analyzing weather](#overview-analyzing-weather)
  - [Loading station and temperature data](#loading-station-and-temperature-data)
  - [Cleaning weather data](#cleaning-weather-data)
  - [Smoothing and plotting time series](#smoothing-and-plotting-time-series)
  - [Weather charts](#weather-charts)
  - [Solution: Temperature anomaly](#solution-temperature-anomaly)
- [**5. pandas**](#5-pandas) (5 videos)
  - [pandas overview](#pandas-overview)
  - [pandas DataFrames and Series](#pandas-dataframes-and-series)
  - [Indexing in pandas](#indexing-in-pandas)
  - [Math and plotting in pandas](#math-and-plotting-in-pandas)
  - [Database operations in pandas](#database-operations-in-pandas)
- [**6. Project: Baby Names**](#6-project-baby-names) (5 videos)
  - [Overview: Analyzing baby names](#overview-analyzing-baby-names)
  - [Loading name datasets](#loading-name-datasets)
  - [Comparing name popularity](#comparing-name-popularity)
  - [Compiling top tens](#compiling-top-tens)
  - [Solution: Unisex names](#solution-unisex-names)
- [**7. Importing and Wrangling Data with pandas**](#7-importing-and-wrangling-data-with-pandas) (6 videos)
  - [Overview: The structure of data](#overview-the-structure-of-data)
  - [Importing data with pandas](#importing-data-with-pandas)
  - [Cleaning data](#cleaning-data)
  - [Filtering, reshaping, and tidying data](#filtering-reshaping-and-tidying-data)
  - [Simulating data](#simulating-data)
  - [Solution: Country rankings](#solution-country-rankings)
- [**8. Summarizing and Visualizing Data**](#8-summarizing-and-visualizing-data) (5 videos)
  - [Overview: Exploring data](#overview-exploring-data)
  - [Summarizing quantitative data](#summarizing-quantitative-data)
  - [Visualizing distributions](#visualizing-distributions)
  - [Comparing quantitative variables](#comparing-quantitative-variables)
  - [Summarizing and visualizing categorical data](#summarizing-and-visualizing-categorical-data)
- [**9. Introduction to Data Modeling**](#9-introduction-to-data-modeling) (6 videos)
  - [Overview: Understanding data](#overview-understanding-data)
  - [Fitting models to data](#fitting-models-to-data)
  - [Model evaluation and selection](#model-evaluation-and-selection)
  - [Testing hypotheses with Monte Carlo](#testing-hypotheses-with-monte-carlo)
  - [A taste of machine learning](#a-taste-of-machine-learning)
  - [Solution: Gapminder model fit](#solution-gapminder-model-fit)
- [**10. Project: COVID-19 Data**](#10-project-covid-19-data) (4 videos)
  - [Overview: COVID-19 data](#overview-covid-19-data)
  - [Summarizing COVID-19 data](#summarizing-covid-19-data)
  - [Visualizing COVID-19 data](#visualizing-covid-19-data)
  - [Modeling COVID-19 data](#modeling-covid-19-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Extending your Python data analysis skills](#extending-your-python-data-analysis-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [From data to insight with Python](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] is an excellent tool for data analysis because it's friendly, pragmatic, and powerful. But what I like the most about Python is that it can be a lot of fun. Whether you're interested in data analysis for work, school, or for your own personal interest, Python can make it enjoyable. We will start this course by looking at tools for data analysis with three rapid tutorials, each followed by a practical project. We will review Python [[Data Structures]] and their manipulation in the core language. Then we will switch to the three typical phases of a data analysis project, importing and wrangling data to prepare for your analysis, summarizing and visualizing to explore and understand the dataset, and building statistical models to explain the data. Hi, I'm Michele Vallisneri. Let's get started with a complete guide to Python data analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Data Structures]] (1)
> **CLI Commands:** python (5), make (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before you take this course, you'll want to have a basic working knowledge of programming in [[Python (Programming Language)|Python]]. Although we will review the aspects of Python that are essential to any data analysis task, I will not teach you every feature that we will need. It will also be helpful to have an understanding of basic mathematical and statistical concepts, such as logic operations, functions, averages, minima and maxima, and so on. In the future, as you move from basic data analysis into [[Data Science]], you will need a deeper knowledge of mathematics and [[Statistics]] and a familiarity with the particular field that you are studying. However, a strong programming foundation and being able to rely on a robust tool such as Python will make it easier for you to learn mathematics and statistics, not just by studying and reading, but also by practical experimentation. Nowadays, in addition to many resources on the web and in the literature, you can rely on assistance from [[Large Language Models (LLM)|large language models]]. They seem to know a lot about programming and even about data analysis libraries. I encourage you to take full advantage of them. However, the basic knowledge and context that you will learn here will help you ask the right questions and identify cases where the neural network is just making things up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Statistics]] (2), [[Data Science]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [What is new in this update](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=0)** - [Instructor] The first part of this course, which covers the core language NumPy and [[Pandas (Software)|pandas]], is an update to my [[Python (Programming Language)|Python]] data analysis course, and it reflects the most recent changes and improvements in the core language and in the libraries. The second part of this course is entirely you. It is based on my real-world experience in analyzing data, and it covers the typical workflow of data analysis in Python. In addition, this updated course was created using [[GitHub]] [[Codespaces]] where you have all that you need to experiment without complex installation or tools on your computer. I have also created five CoderPad interactive challenges in which you will be able to demonstrate your new skills on the same data sets that we analyzed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1), [[GitHub]] (1), [[Codespaces]] (1)
> **CLI Commands:** python (2)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Set up: Using Codespaces](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=0)** - [Instructor] The exercise files for this course are collected in a [[GitHub]] repository organized by chapter. You can clone the [[Git]] repository or download the files to your computer using the code button. From that same button, you can also start an online codespace, a full development environment hosted in the cloud. That's what I recommend you do to follow along with this course. Here, I have one going already named Glorious Winner, but I'll create a new one. If you're not logged into GitHub yet, you will be prompted to log in or create a free GitHub account. And the first time you open a codespace, it will take a few minutes to set up. You now have control over a virtual [[Linux]] machine in the cloud, which connects to an instance of [[Microsoft]] Visual Studio Code in your browser. This is a powerful editor and programming environment. This virtual machine is pre-installed with the [[Python (Programming Language)|Python]] distributions with all the packages that we need. The editor is preloaded with extensions that will help our work in Python. Let me close the terminal at the bottom and focus on the files in Explorer on the left. These are all our exercise files organized by chapter, along with all the data files that we will analyze. To follow along with each video, you will click on the corresponding Jupyter Notebook file. The notebook opens in the editor on the right,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=95)** and it is prefilled with the code that we will be running organized in cells. Before I can run code, I need to select a Python executable kernel on the top right. In this course, we will always use the default Python 3.12. To select the cell, I click into it, or I use the arrows to go up and down within the notebook. To run the code in a cell, I hit Shift + Return on the keyboard. The cell output will appear just below it. Jupyter Notebook will happily display figures as well as text. Some cells may take a few seconds to run, but they're usually pretty fast. To edit the content of a cell, I select it, then hit Return. We'll mouse click inside the cell. Then I can edit its content and run it again. The notebook is automatically saved with your code and the resulting output. You can learn more about using notebooks in many tutorials on the web. The completed folder within each directory holds the completing notebooks in the state that we have after we've gone through them in each video. If you should happen to close this browser window, don't worry. The codespace is automatically saved in the cloud and you can get it back from the repository. You can also restart the codespace from here
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=191)** if you return to the course after a pause. GitHub [[Codespaces]] work on mobile devices, but if you can, I recommend that you practice along with this course on a laptop or desktop computer. If you wish to create your own copy of the repository, you can do so by forking the repository on the top right of the GitHub screen. Then if you start a codespace from the fork, you'll be able to commit the changes that you make in the codespace. For that, you'd use the Source Control tab. You're, of course, free to download the code and use your own Python installation instead. In that case, you will need to install all the packages listed in the requirements.txt file within the repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Python (Programming Language)|Python]] (5), [[Git]] (1), [[Linux]] (1), [[Microsoft]] (1)
> **Tools:** github (5), jupyter (2), visual studio (1), terminal (1)
> **CLI Commands:** python (5), git (1), make (1)
> **Exercise Files:** exercise files (2), download the (2)
> **UI Navigation:** click on (1), select the (1)
> **Prerequisites:** set up (1), install (1)
> **File Paths:** requirements.txt (1)
> **Versions:** python 3 (1)

#### [CoderPad challenges](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. The challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas: Instructions in the top left. A code editor for your answer in the top right. Another code editor where you see how your code is used in the bottom right. And a console for output in the bottom left. You can use these drag handles to allocate space as you like. To get even more horizontal space, you can collapse the course's table of contents on the left. A challenge has instructions that include the description of what you need to do with the parameters and desired results. Here we are told that we need to find the largest number in the list and we need to provide the function find_largest, that takes a list, as discussed in the parameters, and returns the maximum, as discussed in the result. You create your answer in the top right code editor. There are comments in the starting code showing where to put your solution. We can just use the built-in function max. When you click Test my code,
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=93)** you see a message indicating whether your code return the correct result. Here it did. But if your code is not successful, you can ask for help. The show_expected_result and show_hints variables determine whether you see the expected result. And possibly some hints. Changes variables to control the output. Good luck with the challenges in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** find_largest (1), show_expected_result (1), show_hints (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Python Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Warmup with Python loops](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=0)** - [Instructor] We begin every video by importing the standard set of [[Python (Programming Language)|Python]] modules that we will need throughout this course. This cell does that, so we execute it by selecting it with a cursor and pressing Shift + Return. If you've written computer code before, you must be familiar with loops. They occur in many different computing problems, and they allow us to automate repetitive operations. They're also a good topic to start a quick review of the Python code language. We see loops in a concrete example. Consider a combinatorial problem of breaking $1 U.S. into all possible combinations of coins. For instance, four quarters, two quarters and five 10 cent dimes, and so on. Now, if we have to add coins up to $1, we can use at most $1 coin, two 50 cent coins, four quarters, and so on. We can also mix different values. You can already see how we're going to need several nested loops to figure out all the combinations. We start with a very simple-minded strategy. For each face value, we enumerate all possible quantities, zero to one $1 coins, zero to two half dollar coins, and so on. So we'll need six nested loops. Luckily, Python will keep track of them. The basic structure of a loop in Python is for variable in iterable. We follow that with a block of code that we are repeating
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=95)** with a variable taking on the values provided by the iterable. But what is an iterable? We can think of it as a black box that keeps providing new values until it runs out. A simple example is a Python list. Perhaps the most commonly used iterable is range, which provides integer values from a start value to an end value, exclusive of the end value. This means that range 0 to 10 counts from zero to nine. There are many reasons for this convention. For instance, by looking at the end value, we see immediately the total number of elements, in this case, 10. In the end, we just have to accept this as one of the building assumptions of the language. Range has a couple more interesting features. If we omit the start value, it is assumed to be zero. And also we can provide a step argument to move through the range in increments larger than one. When we do that, we also need to specify the initial value to avoid confusion. Let's go back to our dollar and build out our nested loops. We need from zero to one $1 coins, which means that the first range object will be range two. We write it here as 1 + 1. We then proceed with other coins, one loop for each. Each nested loop is indented with respect to its parent. We do this with a tab. Inside the innermost loop,
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=189)** we will check whether the total amount is $1. If so, we had the combination to a list, which we initialize as the empty list. So let's try this out. Very good. The first few combinations seem to check out fine. It turns out that there are 293 ways to get $1 out of change. This is the solution to the problem that we post. However, in this analysis, it often happens that the solution raises a new question. For instance, how many ways to make $2 out of change, or three? Does the number of combination increase linearly or quadratically? What we need to do is to take the code we wrote and generalize it to answer those questions. Before we do so, we make a couple of changes to our code to make it faster and easier to generalize. This is an example of refactoring. The first change is that we will not loop by count, but by value using the step argument. For instance, instead of the loop over quarters from zero through four, we will loop over the values. The second change is to recognize that we don't actually need the innermost loop. As long as the total up to that point is less or equal $1, then we can always make up the difference with pennies. So we write one fewer loop.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=286)** This looks all right. We're almost done. Now we can take our code and make it into a function find_combinations by replacing the value 100 everywhere with a variable argument. We also wrap our computation with def and return statements as appropriate for a function. So let's see how we can make 2 and $3. You may be curious to know how fast this number grows. A Matplotlib plot should give us an idea. In fact, this number grows approximately as the fifth power of the total value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), cursor (1)
> **CLI Commands:** make (6), python (5)
> **Definitions:** is an  (2), means that (2), is a  (1)
> **Analogies:** for instance (4), think of it as (1)
> **Code Identifiers:** find_combinations (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Tuples, lists, and the slicing syntax](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=0)** - [Instructor] That was a good warmup about loops. We now move on to review lists and tuples, which are perhaps the quintessential [[Python (Programming Language)|Python]] [[Data Structures]]. They're very useful on their own, but they're also foundational for [[Data Science]] because they set the standard interface for accessing elements and ranges of elements, but they're all in an index. Python calls that slicing. The same interface is used in NumPy, the most important Python library to manipulate large amounts of numerical data. So about lists, as you know, they provide a way to store an arbitrary number of Python objects, such as strings, floating point numbers, other lists, or any other object, and to access them using a numerical index. In Python, lists are denoted by brackets, and their elements are separated by commas For instance, the tree of nephews from the Disney universe. The length of a list is obtained with len. The empty list is written with an empty set of brackets, and obviously it has length zero. Individual list elements can be accessed by index, starting with zero for the first element and ending at the length of the list minus one. For instance, the first nephew is Huey, so the last nephew would be at index two. If we look beyond the end of the list, we get an error. We can also index from the end,
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=97)** starting at minus one and going back. The last nephew is Louie, and the penultimate nephew is Dewey. This bracket indexing notation can also be used to reassign elements. Let's do it for all these ducks with a simple loop. An important point is that lists do not need to have homogeneous content, such as all strings or all numbers. We can mix it up. We can have a list consisting of a number, another list, and a string. We can verify that an element exists in a list using the in operator. Huey alone does not belong in nephews, but Huey Duck does. To add a single element at the end of a list, we use append. You see that here, we're using Python in an object-oriented way by accessing a method, specifically append, of the list object. It sounds sophisticated, but it's actually very natural. To add multiple elements in one go, we use extend. To concatenate two lists, we use a plus. Last, we can insert elements at any position in a list using the insert method. We have seen how to build up lists,
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=191)** now let's break them down. We can delete elements either by their index, with del. So we took out Scrooge, or by their value, with remove, and so we took out Uncle Donald. We may want our list sorted, and we can do this in place modifying an existing list with sort, or we can make a new sorted list out of an existing one with sorted. This demonstrates also how to sort backwards. It's very easy to loop over a list. We don't even need indices for that. Moving on to slices. Beyond working with individual list elements, we can manipulate them in contiguous groups. We'll take a numerical example, the first few squares of the natural numbers. The convention to select the slice in Python is the same as for loops. The first index is included, the last is not. It pays to imagine that the indices sit on the edges of the elements. So if we want the first two squares, we'd write a slice that goes from zero to two. There are a few more tricks and shortcuts that we can use in slicing. We can omit the starting index to start at the beginning. We can omit the ending index to include elements to the end.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=284)** We can omit both to get a copy of the entire list. We can move through the indices in steps. And finally, we can use negative indices to count from the end. One last trick is reversing a list using a negative step. We also use slices to reassign a subset of items or to delete them. At this point, I think I've ruined my list of squares. Now for tuples, which look like lists, but with parenthesis instead of brackets. Tuples are sometimes described as immutable versions of lists. Once a tuple is defined, we cannot modify its element, so add new ones. This is a feature, not a bug. It ensures the integrity and makes it possible to use tuples as keys in dictionaries or indices. Nevertheless, we can perform the same indexing and slicing tricks as for lists, just not assignment. One context in which one sees tuples often in Python is triple unpacking, where Python statements or expressions are automatically evaluated in parallel over a tuple. For instance, we assign multiple variables at once. And the parenthesis can even be omitted when there's no room for ambiguity. Tuples appear also when we iterate over multiple variables at once. For example, using the enumerate iterator,
>
> **[6:18](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=378)** which lets us loop over list index and list elements together. One final useful trick is unpacking a tuple to pass it to a function that requires multiple arguments. That's done with an asterisk. Conversely, the asterisk or star operator can also be used to define functions with a variable number of arguments which then are collected into a single tuple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Data Structures]] (1), [[Data Science]] (1)
> **CLI Commands:** python (9), make (1)
> **Analogies:** for instance (3), such as (2), imagine (1), for example (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dictionaries and sets](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=0)** - [Instructor] The other super important data structure in [[Python (Programming Language)|Python]] is the dictionary or dict. While lists and tuples give us a way to retrieve values by their numerical index, dictionaries associate values to unique keys. Dicts are written with curly braces separating items with commas. Each item is given as key colon value. For instance, here are the capitals of some of my favorite countries. The length of a dictionary is obtained with len, and the empty dictionary is denoted by empty braces. Just as we do with lists, values are accessed with a bracket notation, but instead of a number, we're going to use a key, which is usually a string. The same notation can be used to add items to a dictionary. Trying to access a non-existent item results in a key error. To avoid that, we can check beforehand whether an item exists in a dictionary using the in operator. Combined two dictionaries, we can unpack them within the same braces using the double star unpacking operator, which works in a similar way to the star operator for lists. If keys are repeated, the last one is used. We can also update a dict in place using another dict. Similarly to lists, we can delete items by key. In fact, keys do not need to be strings.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=95)** Any Python object that is hashable may be used as a name. Hashable means that Python can convert the object to a number. That's true for strings, numbers, and tuples, but not for lists. We can see the internal representation of the keys with hash. Looping over a dictionary is very similar to looping over a list. However, there are three different kinds of loops you may want to write. Over keys, over values, and over both together. The pairs are known as items. The most straightforward syntax loops over the keys, but we can also write this more explicitly. Here are the keys of this dictionary. This is a special iterable object, much like range, which can however be turned into a list. The other two dict looping constructs are over values or over keys and values together using tuple unpacking. Values and items are also special iterable objects. Beginning in Python 3.6 for the C Python interpreter and Python 3.7 for the very language, the order of insertion is preserved for dicts. This means that when we loop over keys or items, we get them in the order in which we originally inserted them. That's not the case in previous version of Python. So the standard library defined a special object,
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=190)** ordereddict, to preserve the order. That's not necessary now. There is, however, another specialized dictionary data structure that is very useful. That is the defaultdict, which you set up to return a default value instead of an error when an item has not been set. Our default will be, I don't know. Now let me add the original capitals into this object and demonstrate that, what's the capital of Canada? I don't know. Dicts are very important in Python since they underlie many aspects of the language itself, such as the methods and attributes of classes which are stored internally in dicts. And the interface by which we access dict values using keys is also adopted in the Python data analysis library [[Pandas (Software)|Pandas]], so it's good to be familiar with it. Last, I want to mention sets. You can think of them as bags of items. These can be of any immutable types and they're never duplicated. So adding Africa twice does nothing. You can check if an item exists in a set. You can add an item, you can remove it, and you can loop over a set, but there's no indexing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (9)
> **Definitions:** means that (2), known as (1), is a  (1)
> **Versions:** python 3 (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Comprehensions](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=0)** - [Instructor] When working with data in [[Python (Programming Language)|Python]], there are many cases when we want to iterate over a list or dict, perform an operation on every element, and then collect all the results into a new list or dict. We can certainly do that with a for loop. For instance, we can compute the first 10 squares, starting with an empty list, and adding elements to the list in the body of the loop. But we can do better. We can be more Pythonic. Python offers a great feature comprehensions that lets us write shorter, more easily readable code. In essence, the comprehension will be a compressed version of the for loop. Let's go through the steps. We want a list, so we have brackets. In front, we have the body of the loop, the square. In the back, we write the looping construct for variable in iterable. Here, it's a range. The result is the same as writing out the loop, but we managed to express the same meaning in a very readable and very efficient way. We can also filter the list of elements that we are creating, adding an if close. For instance, we may want to collect only the squares that are divisible by four. Again, quick and readable. In Python 3, comprehensions largely replace the map and filter built-in functions, which are important in so-called functional languages,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=94)** but did not really belong in Python. The syntax for a dictionary comprehension is also rather intuitive. For instance, let's create a dictionary that will get us the square of an integer from the integer itself. It's a dictionary, so we need braces. In front, we have the key colon value pair. In the back, the looping construct. We can also add an if close if we want, but I don't need one here. Dict comprehensions are sometimes used to transpose an existing dict. Let's go back to our capitals, which we wrote as a dictionary index by country. Here's the transpose. Countries indexed by capital. Sometimes you see a naked comprehension with the body and loop without the brackets. That's called a generator expression, and it's useful to generate a sequence and immediately consume the elements one by one without ever storing them in a list or dict. For instance, to take the sum of the first 10 squares, we may write the interior part of our earlier list comprehension and feed it directly to the Python built-in sum. Doing this saves memory and time, which is important if you deal with large amounts of data. Comprehensions are incredibly useful when we manipulate lists, dicts, and sets of data. Here's a summary of their syntax.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=189)** In addition to lists and dicts, you can also use them for sets and tuples. Once you start taking advantage of comprehensions, you're now going to stop. You start doing all sorts of acrobatics, such as nested comprehensions to make a list of lists, which you can think of as a matrix, or a single comprehension with nested loops to flatten the matrix into a list. The only difference is that we have only one set of brackets. Nowadays, comprehensions are a key part of the core Python language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6), make (1)
> **Analogies:** for instance (4), such as (1)
> **Versions:** python 3 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Data classes](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=0)** - [Instructor] Let us look at [[Python (Programming Language)|Python]] [[Data Structures]] from the perspective of a data scientist or a data analyst. What are the options to store tabular data, such as a table of famous people with their names and birthdays? A list of Python dicts is certainly a possibility. It's easy to access the columns by the key and to query the rows using comprehensions. For instance, famous people with a birthday on July 15. Another possibility are tuples, or even better, the namedtuples from the collections module in the Python starter library. With these, we create a specialized tuple that associates labels with columns. The syntax to create a person is intuitive. We can also meet the labels. The columns can be accessed with a dot notation of Python object attributes. Although regular tuple indices would also work. We can convert these tuples from and to a dictionary using ** unpacking, and the namedtuple method asdict. If you're wondering about the underscore is there to avoid confusion in case you really want to use asdict as a label. Python 3.7 introduced an alternative to tuples and dicts
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=95)** for storing records, dataclasses, in the module dataclasses. In a dataclass, we list the fields in order and specify their type, such as int or string. We can also provide a default value. This is how we would set up a person record with name, last name, and birthday. The syntax to initialize a dataclass is intuitive and we can either use or omit the labels. As with tuples, we access fields by name. So far, this is very similar to namedtuple, however, dataclass is a full Python class, so we can define methods that operate on the fields, just as we do in any Python class. The first compulsory variable in a method refers to the particular instance of the class. For instance, a person. Let's do methods that return a person's full name by combining name and last name, and that provide a prettier printout. Let's see them in operation. Dataclasses have a number of other useful features, such as freezing, so that fields cannot be changed, sorting, which works by comparing fields in their order or with a custom comparison function, and special computed fields.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=191)** Here, I encourage you to stop the video for a moment and experiment in your notebook with this variance.
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=202)** One thing that we have not seen is how the type of a field, such as string, is used with dataclasses. In fact, by default, it's not. But it is made available to third-party packages, for instance, to validate data entry. An excellent package for that purpose is Pydantic. To use it, we replace the standard dataclass decorator with its equivalent in Pydantic. We also write a custom validator for the birthday, which we'll try to convert it to a Python datetime object, and raise an exception if that's not possible. Here are two examples of failed validation. Pydantic is a very sophisticated and powerful package with many features. It's also compatible with many data analysis and [[Data Science]] packages. If your project requires substantial [[Data Validation]], it'll pay to dig into Pydantic. This completes our overview of basic data structures in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Data Structures]] (2), [[Data Science]] (1), [[Data Validation]] (1)
> **CLI Commands:** python (9)
> **Analogies:** such as (4), for instance (3), similar to (1)
> **Definitions:** is a  (2), refers to (1)
> **Versions:** python 3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Project: Finding Anagrams

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Finding anagrams](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=0)** - [Instructor] In chapter one, we have reviewed [[Python (Programming Language)|Python]] loops, data containers, and comprehensions. We will get some practice with these elements of the core language in a simple, practical project, finding anagrams in the English dictionary. As you know, two words are anagrams of each other when their letters can be rearranged to turn one [[Microsoft Word|word]] into the other. For instance, stop can be anagrammed into post, spot, tops, pots, and opts. We'll use this simple strategy. We define the signature of a word as the sorted list of its letters including duplicates. So the signature of Python would be hnopty. Two words are anagrams of each other if they have the same signature. Thus, we are going to make a Python dict of all the words in a dictionary indexed by the signature. Looking up if a word has an anagram would then be as simple as computing its signature and looking it up in the dict. Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Word|Word]] (3)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Loading dictionaries from text files](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=0)** - [Instructor] We begin by loading a dictionary from a file. The repository contains the 1934 English dictionary that is distributed with many Unix systems. We will load it into a list. In [[Python (Programming Language)|Python]], we talk of idioms when we think of code constructs that have become the preferred way to achieve a certain goal. One example is looping through all the lines of the text files. For that, we open the file for reading and use the file as a notable in a for loop, which has the result of giving us the lines one by one. For the moment, we will just collect all the lines into a list. We get more than 200,000 words. Let's look at the first 10. Very good. I do see two problems, though, every [[Microsoft Word|word]] ends in the new line character, and also some words are capitalized, which will interfere with our signature scheme. We can fix both issues using Python string methods. To strip leading and trailing white space, including new lines, we can apply strip. And to switch the entire string to lowercase, we use the method lower. We now have something more interesting to do in the body of the loop. Ah, I do see a duplicate, which comes from the A appearing both in uppercase and lowercase. One way to get rid of that is to build not a list, but a set. So once again, we iterate through the file, but we replace the initial empty list with an empty set, and we replace the method append with add.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=99)** Given that the body of the loop is just one line, we can do it more idiomatically with a comprehension. Finally, to get the list in alphabetical order, we can just wrap the set in the Python built-in sorted. We are now ready to make anagrams. By the way, if you want to try a different language, such as French, you just need the right dictionary. Now, Python strings are natively Unicode, meaning that they can handle international character sets transparently. We need some accents for the French language. The characters are encoded internally using multiple bytes, either one, two, or four, as needed. The only care that we need to take is to tell Python which encoding to use for the files we read and write. The Unicode standard includes multiple encodings that map character sets to their representations in bytes. We just need to know the right one. The most common are UTF-8 and UTF-16, but a few legacy encodings are also useful. And indeed, the French dictionary included in your exercise files was written using ISO 8859, known also as Latin-1. So all we need to do is to tell Python to open the file with that Latin-1 encoding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Word|Word]] (1)
> **CLI Commands:** python (6), make (1)
> **Env Vars:** utf (2), iso (1)
> **UI Navigation:** open the (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Finding anagrams](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=0)** - [Narrator] We pick up our project where we left it In the last video. We have made a sorted list of lowercase words. Now remember our strategy of comparing signatures. A signature is the sorted list of the component letters. We need a function to make signatures. Taking again, the string aaron as an example, let's see what happens if we sort it, which we can do with a built-in sorted. We get a sorted list of the letters. We can use this as a signature to verify, say that Elvis lives. Or at least it lives, as anagram of Elvis. Unfortunately, David Bowie does not. For convenience, we will collate the list of characters back into a single signature string. The way this is achieved in [[Python (Programming Language)|Python]] looks a little strange. Since we need to call a method join on the string that specifies the connector. The connector that we want is really the empty string. (keyboard clatters) Finally, we make a function that performs this operation in general, and not just on aaron. Our strategy is based on building a python dictionary of words indexed by signatures. That is the keys will be signatures, and the values will be sets of words. We'll call it words_by_signature. We can make it with loop. This works fine, but we should improve on this awkward
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=95)** and repetitious code. The problem is that if a signatory is not already in the dictionary, then we need to create a set with a single [[Microsoft Word|word]]. But if it is there, we need to add a new word to the existing set. We can avoid this complication by using a default dict that will automatically initialize a signature with an empty set. The argument to default dict must be a function that makes the default value. We call it a factory sometimes. So in this case, set will do. If you call it without parameters, you just get the empty set. Perfect. This code is much nicer. We can save some memory and CPU by removing all signatures that correspond to a single word. Every word is an anagram of itself, but that's not very interesting. A dict comprehension will do the job. Remember to iterate on both key and value, we use dict items. And we use an if clause to select the non-trivial anagram set. So finding the anagrams of python is as simple as looking for its signature in our dictionary. We can do this with a simple function. Works fine. What about my name? Nothing. I didn't really expect one. But perhaps we shouldn't get an error when no anagram is found. How about we just return the empty set?
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=189)** We can do that by catching the exception and doing otherwise. (keyboard clicks) That works fine. Now that we have set up this machinery, there are many interesting investigations we could do. For instance, we could find the longest anagrams, which we get by sorting the signatures by length. We can use sorted, but we need to tell it to sort by length, not alphabetical order, and to reverse the result. We can wrap this list into comprehension to see the actual anagrams. The longest have 22 letters. Looking at this list, I must say that these are all compound medical words that are not very creative. They really mean the same thing. How about the set of anagrams with the most words? For this, we sort the dict values instead of the keys. The two longest groups have 10 elements, though some of these words are not easily recognizable. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** make (3), python (3), find (1)
> **Code Identifiers:** words_by_signature (1)
> **Env Vars:** cpu (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### [Solution: Find palindromes](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=0)** - [Instructor] We need to find all palindromes of length seven or above in the dictionary. We know that two palindromes will also be anagrams, so we loop over all sets of anagrams, which we find in the anagrams_by_signature input. One way to consider all pairs of words is to use itertools.combinations. To test if the words are palindromes we can just reverse the order of one of them and check for equality. Then we make a list of the palindromes we found. Remember that we need to return sets, hence the braces. Let's try this out. Hmm, what's wrong? I see, I forgot to check the length. Perfect.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** anagrams_by_signature (1)
> **Speakers:** - [instructor] (1)


### 3. NumPy

[↑ Back to Table of Contents](#table-of-contents)

#### [NumPy overview](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=0)** - [Instructor] In this chapter, we introduce NumPy, a powerful library that supports large multidimensional arrays with a vast collection of mathematical functions to operate on them efficiently. NumPy is a fundamental part of the [[Python (Programming Language)|Python]] ecosystem, and it provides the foundation for many data analysis and numerical libraries in applications, including SciPy for mathematics, Matplotlib for plotting, [[Pandas (Software)|pandas]] and statsmodels for [[Statistics]], scikit-learn for machine learning, and scikit-image for [[Image Processing]]. NumPy is also crucial in interfacing with compiled code in C, C++, or Fortran. In addition, if you learn NumPy, you will be able to use [[Deep Learning]] frameworks such as [[PyTorch]] and JAX, which share the same array interface, as well as specialized array libraries that are interoperable with NumPy. For instance, CuPy to work with arrays on fast GPUs, Dask to spread arrays across computers, Xarray for arrays with labels, and by PyData/Sparse for sparse arrays with many zeros and efficient memory layout. So let's talk about how NumPy arrays are different from Python containers. Python variables are often described as labels. They are not little copies in computer memory ready to receive a value. Rather, the values are independent objects with their own space and memory, and Python variables are just names associated with the values. So you can have more than one variable
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=94)** referring to the same object. This mechanism is very flexible, and it makes it possible to have lists and dictionaries with heterogeneous elements. In fact, you can think of a list as a numbered sequence of labels. However, this scheme is not very efficient when we need to deal with many values of the same type. In that case, you want to reserve space in memory and store all the values side by side, and that's exactly what a NumPy array is. Organizing data in this way is both faster and more memory efficient, and it's also necessary to interface Python with other languages such as C or Fortran, which count on data being laid out in memory in this fashion. Here I'm showing you a schematic representing one dimensional and two dimensional NumPy arrays. The actual data items sit side by side in memory, and they all have the same size. We identify them by one index in the case of a one dimensional array, two indices for a two dimensional array, and so on. The index ranges from zero to N minus one, where N is the dimension of the array. In the case of a two dimensional array, the dimension, of course, can be different. Since, as we said, all the data items in an array need to have the same size, NumPy needs to be precise about identifying data types, in fact, more precise than Python. While Python has just one type of integer and one type of floating point number, NumPy has several. NumPy identifies different types of integers
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=187)** depending on the number of bits that each of them takes up in memory, int8, int16, int32, int64. The most common of these is int64. There are also unsigned versions of these integers. As for floating point numbers, we have float16, 32, 64, and on some platforms, float128. The most common floating point type is float64, a double precision floating point number, which is also the same as a standard Python float. There are other more specialized types such as booleans, true or false, bytes, unicode strings, void, which is used for record arrays, and object, which is an effective pointer to arbitrary Python objects. The underscores in their names are there to differentiate the types from the python built-in types. So let's see NumPy arrays in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[Pandas (Software)|Pandas]] (1), [[Statistics]] (1), [[Image Processing]] (1), [[Deep Learning]] (1)
> **CLI Commands:** python (10)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** jax (1)
> **Speakers:** - [instructor] (1)

#### [Creating NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=0)** - [Instructor] Let's get started with NumPy arrays. The easiest way to get one is to load it from a file. NumPy recognizes several file formats. These include, of course, simple text files. I have prepared one for you that describes a very well known lady. The file is called monalisa.txt. Let's have a look at its contents. So we see that each line is a sequence of integers and we have 200 lines all together. NumPy will load this file without any trouble. The result is a two-dimensional array. When we display it, NumPy omits some rows and columns so it fits on the screen. We can query this object for the number of dimensions. Two, since it's an array. For the shape, 200 by 134. For the total number of elements and the number of bytes in memory. And for the type of the array elements. An eight byte floating point number. Okay, so clearly this is an image and we can use the matplotlib function imshow to display a two dimensional and NumPy array as an image. Although we should probably use a better color map, gray scale. I have also prepared a color version of the painting and I have saved it in NumPy's native binary format, which works across platforms. Let's load it up.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=95)** The NumPy comment is np.load as opposed to load text. This is now a 3D array, where the last dimension is used to store red, green, and blue components. Imshow understands this without any problem. Now that we know how to load a NumPy array, how about making one ourselves? This sway is from a [[Python (Programming Language)|Python]] list or a nested list of lists. NumPy automatically sets a data type that can fit all the elements that we provide. The shape is three by three and the D type is int64. Another common operation is creating an empty array. Let's do a one-dimensional array, a vector. We use NumPy zeros with the shape and the data type. D is a shorthand for an eight byte float. We can also do a two-dimensional array, a matrix, by giving the shape eight by eight is a tuple. Here we give the data type more explicitly as flow64, but it's really the same thing. All the array [[Metadata]] are as expected. It is sometimes useful to make an array of zeros in the shape of another existing array, using zeros like. Otherwise, we can make an empty array. Here, the memory is allocated but not initialized, so we may get some random looking values
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=190)** or sometimes just zeros. We can also create an array of regularly spaced numbers. For that, we use np.linspace and specify the extreme, for instance, zero and one, as well as the total number of elements. We can't show a 1D array as an image, but we can certainly plot it with matplotlib. I will use a thick marker specified by lowercase o. Another way to make a regularly spaced array is with arange, an extension of Python range that is not limited to integers. Know that the end of the range is still excluded just as it would be in range. NumPy can also give us arrays of random numbers. We just need to specify the shape. By default, we get numbers uniformly distributed between zero and one. Matplotlib can show us that this looks suitably random. The np.random submodule offers a lot more, for instance, randomrandint, to get integers in a specified range. Or random.standard_normal to get normally distributed numbers. It's always good to show those with a simple matplotlib histogram. To close this video, let me show you how to save an array to file. Np.save will create a cross-platform binary file. The file ending is conventionally NPY, but it doesn't need to be.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=285)** On the other hand, savetxt will create a readable ASCII table. It's all there. I'll leave you with a one page cheat sheet covering creating arrays from files out of zeros and from random numbers. The cheat sheets from this chapter are collected in the document numpy.pdf in your exercise files. But of course there are many good tutorials about NumPy on the web and the official documentation is also excellent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Metadata]] (1)
> **Definitions:** is a  (4), is called (1), is an  (1)
> **CLI Commands:** make (3), python (2)
> **Env Vars:** npy (1), ascii (1)
> **Analogies:** for instance (2)
> **File Paths:** monalisa.txt (1)
> **Code Identifiers:** standard_normal (1)
> **Exercise Files:** exercise files (1)

#### [Indexing NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=0)** - [Instructor] Let's see how we can access individual elements and ranges of elements in NumPy. We will demonstrate on our good old friend Mona Lisa. So I will start by loading that array. This is a three dimensional NumPy array with dimensions that correspond to height 1,198 pixels with 804 pixels and color, the red, green, and blue components. The syntax to get an individual pixel is just an extension of [[Python (Programming Language)|Python]] list indexing, except that we include multiple indices among brackets. For instance, a point roughly in the middle would be on row 600 and column 400, and we'll grab the red component. Since version two of NumPy, the D type of the element is displayed explicitly. Here, it's an eight bit integer. It's usually possible to use these values interchangeably with Python objects. Should you want to convert the NumPy number to a standard python object, you can do it with the constructor's int and float. Back to the picture. If we wish to look at pixels at the bottom right corner, we may count back from the boundary of the array just as we would do for a list. This will be the same as computing the actual indices. If we try to index elements beyond the boundaries, we get an index error as we should, and of course, we can use indexing
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=94)** to assign values to the elements. Once you get used to multi-indexing, you have the temptation of trying it on nested Python lists, but it doesn't work there. Let me demonstrate with a very uninspired list. Yes, that doesn't work. To work with a list of lists, we first need to extract an entire row, and then the element from that. Slicing also works in a very similar way to Python lists. For instance, we could grab a section in the middle of the painting. We can omit either the starting or the ending index that will default to the beginning or the end respectively. To grab the entire range across the dimension, we use a lonely colon. There is an even shorter hand for multiple food slices. The lips is sign. We can also specify a step such as every 20th pixel. This of course, reduces the resolution of the picture. Now, see the black dot in the middle? It's there because earlier we assign zero to all three color channels for pixel 600, 400. That single pixel was invisible at high resolution, but it's one of those selected by the slice with steps of 20. How about slicing backwards? That works too and creates a reflection. If we mix slicing and indexing,
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=187)** we reduce the emotionality of the array. This is a single row. Since this is now a vector, a one dimensional array, we can't show it as an image, but we can still plot it. It's quite random looking. Note that fixing one of the indices is not the same thing as asking for a slice of one, which will preserve that dimension. Slicing can also be used on the left side of an assignment statement. We can do that to modify elements in bulk and kind of deface our painting. Here, I assign the same value to all array elements in this slice, but I can also set them with another array of the right shape. Instead of boring gray, we'll make some noise. NumPy arrays support also an especially useful form of indexing that is not available with lists. This is known as fancy indexing. That is, using arrays to index other arrays. To demonstrate, let me grab my low resolution grayscale Mona Lisa. I'm going to threshold this image by zeroing out all the pixels with gray values darker than approximately 50%. So first I need to figure out which ones they are. The result of this condition is a two dimensional Boolean array with the same size as monalisa_bw. I use this Boolean array to select the dark pixels alone
>
> **[4:42](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=282)** and modify only those. So here's the thresholded image. Finally, I want to point out another very important difference between lists and NumPy arrays. Whenever you slice a list, you are making a copy of it. Say, I have a simple list of six elements. I take a slice of the first four. Now, assigning to the slice does not modify the original list. By contrast, a slice of a NumPy array is a new array object that points to the same area of memory with modified bookkeeping to represent the different boundaries. So if I modify the slice, say, to make it darker, here's my slice. A vertical segment from 300 to 500. Here's making it darker by dividing all the color values by three. And here's the original image showing that modifying the slice also affected the original memory area. If you want a true copy instead, pointing to new memory, which can be modified without effect in the original, you have to make that copy explicitly. Also, fancy indexing will also create a new array with independent memory. Again, here's a quick cheat sheet on slicing and number. As you see, it starts the same as vital lists,
>
> **[6:18](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=378)** but adds the complication of multiple dimensions and the powerful idea of fancy indexing using other arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), make (3)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Analogies:** for instance (2), picture (2), such as (1)
> **Code Identifiers:** monalisa_bw (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Doing math with NumPy arrays](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=0)** - [Instructor] NumPy is very good at math. While interpreted languages such as [[Python (Programming Language)|Python]] have a reputation of being slow, we can do math very fast in Python as long as we write code that operates on entire arrays. That's because the loops that are needed to perform math over the array are then implemented in compiled C within the NumPy library. So how do we do math with arrays? Let's start by creating a one-dimensional vector of equally spaced real values between say, zero and five times pi. We wish to compute the sine of all those values. The regular function in the math library, one, two. Instead, we use the NumPy function of the same name. The result is another NumPy array with the same shape as X. Here's a plot. NumPy has a function for pretty much everything you can find in the standard math library. The NumPy functions are known as universal functions, and they operate element-wise across entire arrays. They include arithmetics, logical operations, trigonometry, hyperbolic functions, exponentials and logarithms, checking for infinity and for not a number, rounding, and much more. We created a plot of a function by giving two vectors to matplotlib so that it would use one for the x-axis and one for the y-axis.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=96)** The Y range was set automatically. By repeating the plot statement, we can show multiple functions together. Matplotlib will automatically cycle through colors so that we can distinguish the curves. So let's try our sine together with a cosine in a logarithm. To see which is which we add labels and request a legend. There are many more options in matplotlib regarding the style of the lines and the formatting of the plot. We'll see more in the [[Representational State Transfer (REST)|rest]] of this course, and you can look up many examples and docs online. We can also perform operations that involve more than one array. Everything goes smoothly if we match array shapes. By contrast, operations between arrays of different shapes will generally fail. NumPy doesn't know what to do. There is one important exception, which is known as broadcasting. With broadcasting, NumPy tries to make sense of operations between arrays of different dimensions. The simplest case, which is rather intuitive, is adding a single number to an entire array, which adds it to every element. So we would say that the addition of the number is broadcast through the array. To make an example in two-dimensions, we'll use our friend Mona Lisa again. The image is 200 rows by 134 columns.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=190)** I can multiply every column by a different number by making a vector of length 134. In this case, NumPy matches the second dimension of the array with a single dimension of the vector, broadcasting the values along the rows. My vector will be a gradient that modifies the luminosity of the columns across the image. Let's see the images side by side. Here I've used matplotlib's subplot to make a one by two arrangement. What about the other way around? If I make a vector of length 200, you'd think we could apply it on the left to multiply every row by a single value, but that does not work. What happens with broadcasting is that NumPy matches array shapes starting from the last dimension on the right, expanding missing dimensions into size of one, and broadcasting along all dimensions of size one. So to match the rows of the image with those of the gradient, we need the y grad to have shape 201, which we can do with the slicing syntax and with NumPy new axis. So we turn the vector into a two-dimensional array. Now, NumPy can broadcast along the second dimension and apply the same multiplication along each row. Since Python version 3.5,
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=285)** Python includes a special matrix multiplication operator, which is the @ symbol. It is put to good use by NumPy. In fact, it means different things for different array shapes. For two vectors of the same size, it returns the top product. Whereas the standard multiplication sign would perform an element by element product. The @ symbol can also denote a matrix by vector product. Here, a two by three array multiplying a three vector. The @ symbol can also denote matrix by matrix multiplication. NumPy supports many other useful operations, including manipulations to reshape and combine arrays, statistical operations, [[Linear Algebra]], logical operations, sorting, searching, counting, and fast Fourier transforms. We see some of them in action in the weather data project and in the rest of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Linear Algebra]] (1)
> **CLI Commands:** python (4), make (4), find (1)
> **Definitions:** known as (2)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Special arrays: Records and dates](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=0)** - [Instructor] In the last video for this chapter, I want to show you two NumPy features that are not always covered in tutorials but are still very useful. The first is record arrays, which allow us to mix different data types and give descriptive names to fields. We see a much more powerful version of this in the [[Pandas (Software)|Pandas]] library, but sometimes it's good to use it within NumPy. The other feature is datetime objects, which as the name says, can encode a date and a time. I will load a simple example of a record array, which I have saved in the NumPy format. This is a partial David Bowie discography. Each entry shows a record's name, date of release, and top rank in the UK charts. The data type is a list, which shows the name and D type of each field. For title, it's U32, which denotes a Unicode string of length 32. For release date, it's M8D, which denotes a NumPy datetime object with the precision of a day. There's an eight because the datetime objects are eight bytes. Finally, the top rank is an eight byte integer. Oh, and if you're wondering about the less than symbols, those refer to the endianness of the data types, the order in which the bytes are stored in memory. A less than sign denotes little endian numbers. This table, which you can also find
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=92)** in the NumPy cheat sheet, shows the most common NumPy data types, their memory usage, and the data type string. Do remember that in NumPy, all strings have fixed length and that assigning a longer string than the defined length will truncate it. We'll cover the datetime and timedelta D types in a moment. But back to David Bowie and record arrays. We could also load his discography from a text file. That takes a little more work because we have to specify the D type of every field as well as the field delimiter. Here, it's a comma. But the result is the same. So once we have a record array, what can we do? Each record looks like a [[Python (Programming Language)|Python]] tuple, and we can extract or modify the elements as we would for a tuple using two indices. But we can also use the dictionary interface using field names. Using the field names on the entire array will give us a view of a column. To create a record array in Python code, we have to provide the data records as tuples, and we need to be careful about describing the data types. For a discography, it would look like this. Now, for dates and times in NumPy. The D type that we need is called datetime64, to avoid confusion with the datetime object in the Python standard library and to remind us that each element takes 64 bits.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=187)** We initialize datetime objects from strings, and we can give as much detail as we want. The string format is ISO A601, which goes from larger to smaller units. That is from year to month to day, and so on. So here are three dates of increasing precision. We can also create a NumPy datetime from a standard library datetime object. We specify a granularity of D to avoid setting the time at exactly midnight. The Python datetime module has a lot of functionality that can be useful before we bring data into NumPy. For instance, if we need to pass a generic string format, we can do so by specifying the format itself. NumPy datetime objects can be compared, and they can be subtracted, resulting in a time delta object. Here it's specified in minutes. The nice thing about these datetime64 objects is that they work across NumPy. For instance, we can use the NumPy function diff, which computes the difference between successive array elements to see how long it took David to come up with each new record. It seems that 'Ziggy Stardust' was especially quick. Another example of using standard NumPy functions with datetime64 is making a range of date. Consistently with the usual convention in Python, the last day in the range is excluded.
>
> **[4:43](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=283)** This completes a quick overview of NumPy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5), find (1)
> **Env Vars:** u32 (1), m8d (1), iso (1), a601 (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** for instance (2)
> **Cross-References:** in the last (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 4. Project: Weather Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Analyzing weather](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=0)** - [Instructor] In this chapter, we are going to experiment with NumPy on a real world use case, analyzing weather data from NOAA, the National Oceanic and Atmosphere Administration. The GHCN Daily is an integrated database of daily climate summaries from land surface stations across the globe. Summaries in this case means variables, such as the minimum and maximum temperatures, the total precipitation, and so on. Digging through the portal, we find the location of the data files. From here, we will download the station list and use it to locate data for a station. We will load data, fill missing values, and smooth time series. Finally, we will create a visualization of daily temperatures inspired by the "New York Times" weather plots.

> [!info]- Semantic Content
>
> **Env Vars:** noaa (1), ghcn (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Loading station and temperature data](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=0)** - [Instructor] Before loading the data, it's always a good idea to start by looking at the documentation. Browsing through the file listing at the noaa repository we see a readme.txt. We'll start there. The readme file is also included in this chapters directory. It describes the content of the repository, the format of the weather data files, which have an ending DLY, and which contain data for a single station formatted with fixed width columns. Lots of detail here. Next, the readme file describes the format of a file ghcnd stations.txt. That gives us the location, elevation, and ID for each station in the network. We'll start with this station's database. For your reference, I have copied the description of the files format into this notebook. To load a fixed width text file such as this, we can use numpy genfromtext. It needs rather precise information. We specify the width of each field in the parameter delimiter. We can direct the widths from the table above, but we need to increase them to include the spaces between columns. Next, we provide names for each column and we specify the D type of each column.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=94)** We'll need a string of 11 characters, three double precision floats, and a few more strings. And last, with auto strip, we instruct numpy to remove leading and trailing spaces from all the strings it passes. The result of running his is a numpy record array with more than a hundred thousand entries. Thankfully, numpy shows us only a few lines at the top and bottom. By plotting longitude against latitude, we get an idea of the impressive global coverage of the database. We need to make the dots small so that they are not too crowded. Even so, the US and Europe are just masses of ink or colored pixels. How about stations in California? We can use fancy indexing with a boolean condition to downselect our dataset. Coverage is still impressive. What if we need a specific station? Fancy indexing, again, comes to the rescue. We select all stations for which it is true that the name field equals Pasadena. There's only one. There must be more stations whose name begins with Pasadena. We can find them using the string function starts with which in numpy sits without string functions in the submodule numpy.char. So there are several. We will stay with the first station that we found for Pasadena, which belongs to the HCN network
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=187)** and is likely to have more data. I've copied the Pasadena file into this repository. So let's have a look at the first few lines. It's rather messy, but we recognize the station ID at the beginning of each line, followed by year and month, the name of an element, such as a minimum or maximum temperature, and 31 data points, one for each day of the month. Each data point consists of a value and a flag which we will mostly ignore. We could use genfromtext again, but I don't want to waste your time setting it up. So I prepared a small [[Python (Programming Language)|Python]] module, get weather, which takes care of parts in the file, and returning consecutive daily values for a year. For simplicity, we will forget about February 29th in leap years. The module uses the library [[Pandas (Software)|Pandas]] to clean and reform data, but it returns pure numpy arrays. After we introduce Pandas later in this course, I encourage you to go back and look at getweather.pi and see what I did there to pass the file. So we import that module and look at the help text. Seems straightforward enough. Let's try it on Pasadena. Requesting TMIN and TMAX, the minimum and maximum temperature. Excellent. We see that the result is a numpy record array with two double precision fields, TMIN and TMAX. The values are in degrees Celsius.
>
> **[4:40](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=280)** Some measurements are missing, and they're represented as nan, not a number. This function will be a great foundation for our work in the [[Representational State Transfer (REST)|rest]] of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** tmin (2), tmax (2), dly (1), hcn (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Documentation:** the readme (2), the documentation (1)
> **File Paths:** readme.txt (1), stations.txt (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Cross-References:** later in (1)

#### [Cleaning weather data](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=0)** - [Instructor] We pick up where we left and load temperature data for Pasadena, California. This is a time series, a sequence of values organized chronologically, usually with equal cadence, that is the same time interval between every two consecutive samples. To get a sense of the data, one of them begins by computing its average value and its extreme, the minimum and the maximum. With NumPy, we use mean, min, and max. But wait, we get nans. What's going on here? Some values are missing from the data file, and indeed they're represented as nans. I can see some here. Now, the mean of a sequence that includes a nan is going to be, well, a nan. In fact, how many values are missing? The NumPy function is nan, creates a Boolean array of nans. We can then count the instances of true values here by using a neat trick. If it were arithmetic with Booleans in [[Python (Programming Language)|Python]], they are converted to integers with false counting as zero and true as one. It follows that we can count the trues in a Boolean array by obtaining its sum with numpy_sum. 15 days. What can we do? Missing values are so common that NumPy offers versions of its functions
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=94)** that simply ignore them, nanmin and nanmax, for instance. This works, but for some applications, we do need an uninterrupted series of numbers. We could just set the nans to the average of the column. This is yet another application of fancy indexing because we want to modify only the nan elements. This works, and we can tell which values we change because they have more digits than all the others, which were encoded with limited precision in the GHCN file. This integrated dataset can now be plotted without discontinuities. A more powerful approach to restoring missing values is interpolation. We use neighbor values to compute a plausible number for the values that are missing. Let me demonstrate in a toy problem. Let's say we measure a function Y defined as an integer X between zero and eight, except for some of the values. By interpolating, we can compute values for the series at smaller X intervals. We first define the desired X values using numpy.linspace. And then to interpolate with NumPy, we use numpy.interp, which takes three arguments: the desired X values, the existing X values, and the existing Y data. This yields linear interpolation, which is in effect fitting straight segments
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=188)** between the existing data points. I will plot the new interpolated data and superimpose the original points in orange to show that interpolation at an existing location yields the same value. For more sophisticated interpolation schemes, you can look at what's available in the scientific computation library SciPy, and specifically in SciPy interpolate. Let's use interpolation to fill missing values in the Pasadena temperature data. I need to load the data again since we fixed it using mean values. Here, now it's broken again. To interpolate, we select the good data points, those that are not nan. Then we make an array of the X's for which we want values, all days from 1 to 365, and then we apply np.interp. It seems to work well. We celebrate by generalizing our Pasadena center code so that it can fill up holes in any array by interpolating it. And finally, we can plug the interpolated temperature series in all their glory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1), defined as (1)
> **Code Identifiers:** numpy_sum (1)
> **Env Vars:** ghcn (1)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Smoothing and plotting time series](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=0)** - [Instructor] So now, we know how to load temperature data from any station, how to compute basic summaries such as mean, min, and max, and how to integrate missing data points using interpolation. Here's the code we need. In the last video, we looked at data for Pasadena. Let's move to even sunnier skies now by looking at weather in the town of Hilo in big island, Hawaii. We'll use a custom loader, and we fill the missing data for both T-min and T-max. Once more, tupple unpacking is very useful. To summarize the data, we obtain the yearly average, which gives us a sense of a typical value for T-min and the min and max which span the range of variation of these measurements. We can plot these values on top of the time series. The matplotlib function, XH line for axis, horizontal line, plots a horizontal lines that spans the entire graph, just what we need. Another common way to measure range of variation of a time series is to compute the standard deviation defined as the square root of the variance. If you need a refresher, Wikipedia will help. We then plot the time series, the mean and values one standard deviation above and below the mean. Most of the time, the temperatures are included in this range. Given that this is Hawaii, it's also interesting to look at the precipitation.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=94)** The rainy season, which starts in November, is evident. Looking at the data this way is very informative, but we also see a lot of noise and rapid variations between one day and the next, which can obscure underlying trends. To remove the noise, we can smooth the data, so that we see the slower long-term behavior below the oscillations. The simplest approach to smoothing is replacing each value with the average set of its neighbors, including itself. With numpy, we can do so with numpy convolve which slides a mass across a vector of data, multiplying the elements of the mask with the elements of the vector and summing the map. We're going to use a very simple constant mask, normalized, so that it sums to one. If you think about it, the resulting convolution vector is going to be shorter than the original because at the boundaries, we cannot perform the full convolution. So here's my mask. Let's try it out. We'll plot the original temperature series as dots and the smoothed series as a continuous line. This works fine. We are reducing the quick oscillations while emphasizing the underlying, slower trend. By specifying that the convolution mode is valid, we are accepting that the result is indeed a shorter vector than the original time series. By contrast, if the mode is same,
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=187)** we get the full output vector, but we observe anomalies at the beginning and the end. As the mask slides over the boundary of the data, effectively, it is multiplying zeros. With a little more work, we could pat the data, the boundaries, using measurements from the previous and following year. But for simplicity, we'll just use shorter time series. Here's a function that performs the smoothing with a constant mask of arbitrary length. So we plot TMIN and TMAX together for Hilo. This is an interesting plot. I'd like to see it for other cities. So we take our code and generalize it to a function. We get the data, and for both TMIN and TMAX, we fill in missing values, smooth, and plot. We'll also add a title and reasonable limits for the access. Let's try this out. We can try to plot multiple years to see if the Hawaii climate is stable. In fact, for such nice weather, I can reduce the plotting range. Now, let's compare cities in different climates. Let's say, Pasadena, New York, San Diego, and Minneapolis. To make a 2x2 array of plots, I use matplotlibs subplot which takes the shape of the array in the number between one and the maximum index over the figures. So I loop over cities using the enumerate iterator, which returns pairs consisting
>
> **[4:42](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=282)** of a numerical index and the list item. This is a very Pythonic construction. This is a very informative, comparative plot. If you could choose based on the weather alone, where would you live?

> [!info]- Semantic Content
>
> **Env Vars:** tmin (2), tmax (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Weather charts](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=0)** - [Instructor] We're going to conclude our experimentation by making a quick but impressive weather visualization that showcases the power and flexibility of NumPY and Matplotlib. A visualization is inspired by the New York Times weather chart shown here, and it'll present daily minimum and maximum, the purple band. In the context of their normal range, dark gray, and of the historical records, light gray. By the way, let me show you how to add images to a Jupyter Notebook. If I double click on the cell containing the New York Times visualization, we see that it's just a markdown cell with a small chunk of [[HTML]], which in this case refers to a file in the current directory, but we could also use a full URL. A shift+enter in the cell and it goes back to showing the image. So let's make a plot. We will again use Pasadena as an example, but you will be able to do your own city if it's represented in the noaa data sets. And since we want records across many years, we need all the data that we can get. The Get Weather module lets us query for one year of data at a time, so we'll call it repeatedly and collect the results with the list comprehension. Once we have that, we can stack up the one dimensional arrays so they become the rows of a two dimensional array using NumPY vstack. So we have 114 years. The results can be visualized with mat show. We use a color bar to provide a reference to the mapping of values to color,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=95)** and we can specify the extent to get more informative labels on the axis. We see some missing data, the white patches, and we see that the middle of the year is generally warmer. We can also observe that winter and summer minimum are getting warmer toward the end of the century. For simplicity, we will forego filling nans and use nan robust functions. We want the record temperatures for every day of the year. This means that we can use NumPY nan min on the teaming data and specify axis zero so that the minimum will be taken across each row of 114 years. Then we do the same for TMAX using NumPY nan max. So let's see the records. Now for the normals. In the New York Times visualization, the normal temperature range for each day of the year is defined as the average of the low and high from 1981 to 2010. So we build another stacked array with this reduced range. And again, we take means across rows. So axis is zero. Let's have a look. We are ready to get this plot together. We'll do Pasadena in 2020. To plot a field band, we use matplotlibs fill between, which needs X axis coordinates and the lower and upper lines that delimit the band.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=189)** For the X axis coordinate, I will use the day of the year from one through 365. The colors that I picked are my best approximation to the New York Times graphic. In the title, I'd like to show the average temperature for the year. I will compute it as the average of the mean minimum and mean maximum temperatures. And to build a string for the title, I can use the very convenient formatted string literal introduced in [[Python (Programming Language)|Python]] three six. If we start a string with an F before the quotes, we can include variable names in braces, which will be replaced by the values. We can also specify format and instructions that we would use in the string format interface. For instance, two decimal digits for the average temperature. Here it is. This is the best way to build up strings that include values. Okay, let me put everything together in a function and white plot. If you wish, you can stop the video here and review the details. And here's New York in 2022. NumPY is extremely powerful and flexible. You should learn about it in depth. Coupled with matplotlib, it offers a direct route to beautiful and informative visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** html (1), url (1), tmax (1)
> **Definitions:** refers to (1), means that (1), defined as (1)
> **CLI Commands:** make (1), python (1)
> **Tools:** jupyter (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Temperature anomaly](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=0)** - [Instructor] We need to compute the temperature anomaly in New York for all years in the dataset. The anomaly is defined from averages along a year, so I'll be using NumPy mean along the second axis, which has length 365. In fact, I need another mean between the minimum and the maximum. Next, I need my reference, which is the mean between 1945 and 1955.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=44)** We are told that these are rows 65 to 75, and I don't need the access keyword since we're averaging over everything. Then I round and return. Oh, I actually need to subtract this reference mean from my result first. Let's test. Perfect.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 5. pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [pandas overview](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]] has gained broad acceptance in the [[Python (Programming Language)|Python]] community as the leading data analysis library in the [[Data Science]] stack. It's especially useful for [[Statistics]], but also to prepare data for visualization and machine learning. While NumPy works with arrays, pandas deals with data tables, which are known in the library as data frames. The main difference is that array rows, columns and elements are identified by integers, while data frame rows and columns can be indexed by strings, dates, floating point numbers, and other python objects. In fact, any data frame column can be promoted to act as the index. That is just one of many table manipulations that are possible. In addition, pandas can read and write many common data formats. It provides a consistent way to handle missing data. It implements powerful database operations such as joins, and it can even make plots. Historically, pandas used NumPy to store data behind the scenes. But since version 2.0, pandas has introduced Apache Arrow as an alternative backhand. Arrow handles missing data, strings, and categorical data more efficiently than NumPy. It's optimized for memory efficiency and performance, and it supports data formats that are interoperable with many other data science libraries and applications. If you want to do data analysis or data science with Python,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=95)** I really recommend pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Python (Programming Language)|Python]] (3), [[Data Science]] (3), [[Statistics]] (1)
> **CLI Commands:** python (3), make (1), apache (1)
> **Versions:** version 2 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [pandas DataFrames and Series](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=0)** - [Instructor] The central object in [[Pandas (Software)|pandas]] is the DataFrame, a data table with named and typed columns and with an index that identifies the rows. The default index is just a range of numbers, but it can be any type of data. Index sample in this slide where the DataFrame columns are name, date of birth, and city, the index could be the Social Security number or an alphanumerical employee ID. A series is effectively a single column from a DataFrame with its own index. It is the index that makes DataFrames and Series more powerful than NumPy arrays. For instance, we can combine two Series indexed by timestamps even if the indices are only partially overlapping. Pandas a will figure out which entries we can actually compute. The easiest way to make a pandas DataFrame is to load it from a file. We start with a simple text file, Nobels.csv, which contains a list of Nobel laureates. With a year and discipline in which they were awarded their prize as well as their date of birth. Pandas reads CSV, reads this without breaking a sweat. We do need to provide names for the columns since the file itself doesn't have them. Read CSV has many other options including specifying separators other than commas, skipping columns or rows,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=95)** converting dates and more. Now that we have a DataFrame, let's examine it. The method info gives us basic information, including the number of non-null values in each column, the Dtype of each column, and the total memory usage. The method head prints the first few rows. While tail print the last few rows, we have a total of a thousand records and we see that the columns are indeed year, discipline, nobelist, and date of birth. The columns have pyarrow Dtypes, which are more powerful than the NumPy or [[Python (Programming Language)|Python]] counterparts. Unlike NumPy and Python, integers support a null value which can be used for missing data. Unlike NumPy, pyarrow strings have variable length. Unlike Python, those strings are stored continuously and efficiently in memory. Last, pyarrow types for dates and times are more extensive than those in NumPy. In this case, while reading the CSV file, the arrow library elected to use the memory efficient date32 with the precision of a day. As I mentioned, the index plays a very important role for DataFrames. This DataFrame has the default integer index ranging from zero to a thousand.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=191)** We look at indexing in detail in the next video. To grab individual DataFrame columns, we can use the Python dictionary syntax. We can also use class attribute syntax with a dot. Either way, the result is a pandas series. The series inherits the name and Dtype of the column and the index of the whole DataFrame. If we need a naked array of the values, we get that with the property values. This now is an arrow object, but we can also turn it into a NumPy array. The method is to NumPy. Sometimes it's useful to get a list or actually an array of all the unique values in a column. Other times, it's useful to have counts of the times each value appears. This accounting confirms that the three scientists were awarded two prizes. Linus Pauling for chemistry and peace, Marie Curie for physics and chemistry. [[John the Ripper|John]] Bardeen for physics twice, and Frederick Sanger and Barry Sharpless for chemistry twice. To select records we can use also fancy indexing, building a Boolean expression that involves the columns, let's say prices in physics after 2019. We can also use the convenient, if not very Pythonic query interface,
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=285)** which takes the Boolean condition as a string. We have to mind our quotes here as it were, making sure that we use single quotes for the query and double quotes for the values inside it or vice versa. Don't worry about the warning, which has to do with the internal workings of pyarrow. Sometimes it's not evident how we should write a filter in operation, with either a fancy indexing or a query. For instance, if we seek all the nobelists from the Curie family, we will be tempted to write something like this, checking whether Curie is in the string nobelist. This, however fails rather spectacularly. Instead, we need to find the pandas string method contains, which produces the Boolean array that we need. The selection confirms the incredible winning streak of the Curie family. Marie, her husband Pierre, and daughter Irene. Let me show you how to create a DataFrame yourself. First of all, you could make one from a NumPy record array, for instance, the David Bowie discography that we use that as an example in chapter four. This is almost too easy since we already have all the information that we need in the right place, and we just need to pass the record array to pandas DataFrame.
>
> **[6:21](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=381)** The resulting DataFrame uses NumPy for storage. If we want a more efficient arrow backend, we can use convert Dtypes. Starting from scratch, instead, we may build the DataFrame from a list of dictionaries, which means that we need to repeat the column names over and over. Or from a list of tools by providing names for the columns. Otherwise, we can build a DataFrame column by column rather than record by record from a dictionary of NumPy vectors or lists. It's also possible to use name tools or data classes. I leave you with a one page cheat sheet covering the basics of DataFrame [[Metadata]], as well as selecting columns and rows. The cheat sheets from this chapter are collected in the document pandas-cheatsheet.PDF in the exercise files. But of course, there are many good tutorials about pandas on the web, and the official documentation is also excellent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (9), [[Python (Programming Language)|Python]] (4), [[John the Ripper|John]] (1), [[Metadata]] (1)
> **CLI Commands:** python (4), make (2), find (1)
> **Env Vars:** csv (3), pdf (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Analogies:** for instance (3)
> **File Paths:** nobels.csv (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### [Indexing in pandas](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=0)** - [Instructor] We have seen how to load and create data frames and how to select records based on Boolean conditions. However, for anything more complex than a simple selection, you want to use [[Pandas (Software)|pandas]] indices. You will also need to use indices wherever you need to modify values within a data frame. So let's load up our Nobels list database again. Here, the index is the default integer range. We can instead use the nobel here. To elevate the column to serve as index, we use the set index method, which creates a new data frame. The data frame is now shown with the year at the front of each record. And here's the index itself. Pandas indices do not need to have unique values, and that's a feature, not a bug, because we may very well want to select all Nobels awarded in a given year. The pandas indexing notation is a bit surprising. To select all the records with a given index, we use .lock followed by the index value in brackets, not by parenthesis. We can also add a column name just as if we were selecting a cell in a NumPy array. The result is a series. In addition to selecting individual index values, .lock allows for slices. In a break from [[Python (Programming Language)|Python]] usage, the range is inclusive of its end value.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=96)** If we choose the years of the Great War, 1914 to 1918, then 1918 appears in the selection. This makes sense though, because if the indices are not integers, it will be very unclear what is included in a Python style index. We are not limited to numerical indices. We could index by discipline. We can only request a slice of indices if the index itself is sorted. That's achieved with the method sort index. Fancy indexing, that is indexing with an array, also works. And if you want NumPy style position based indexing, you can get it with .ilock. And then slices are exclusive as in NumPy. Here are the first 10 records, whatever they are in the data frame in its current order. This is still far from the end of the story. Pandas supports multiple indices known as multi-indexes. For instance, we could have a data frame that's indexed by year and by discipline. Here's the multi-index. If you need individual levels, you can use get level values, years and disciplines respectively. Now, armed with this multi-index, we can select records by both year and discipline by passing a tuple to .lock.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=190)** Using only the first level of the index results in a new data frame with a simple index. Slicing with multi-indexes can get confusing because it's hard to tell the lock indexer, which rows and which columns we are really interested in. Your best bet is to use pandas index slice and then also specify the columns that you need or use a column for all of them. So here, we requested years from 1901 to 1910, specifically for chemistry. If we want all years, but a single discipline, we just use a column. And again, request all columns. Multi-indexing is powerful, but it can be confusing and sometimes you'll have to resort to trial and error or ask Stack Overflow or even [[ChatGPT]]. Here's a one page summary of basic indexing in pandas. It's included in the PDF cheat sheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Python (Programming Language)|Python]] (2), [[ChatGPT]] (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** python (2)
> **Env Vars:** pdf (1)
> **Documentation:** stack overflow (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Math and plotting in pandas](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=0)** - [Instructor] We have seen how to load and create data frames and how to select roles, but we have not done much with the values in the table. Many data analysis tasks require that we perform computations on the data and visualize the data. Let's try that with [[Pandas (Software)|Pandas]]. We will use a data set consisting of global population health and wealth [[Statistics]] from the amazing Gapminder website. Gapminder is a Swedish foundation created by the late statistician, Hans Rosling, to promote a fact-based worldview and to fight misconceptions about global development. I have prepared a comma separated file with a selection of Gapminder data. The data set includes a number of global statistics. For a country and a year, we get population, life expectancy, the percentage of children born alive who survived to age five, the average number of babies preferred by a woman, and the early domestic product per person in 2017 dollars. We also get the geographical region. We can ask Pandas to compute simple statistics on all the fields. The method describe does that. We see that there are almost 42,000 records in the datasets for years ranging from 1800 to 2023. This summary gives us the minimum, maximum, mean, and standard deviation for all fields, as well as the 25th, 50th, and 75th percentiles,
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=95)** which represent the typical range of variation for a quantity. Hans Rosling stresses that life expectancy improves with wealth and that the correlation is even clearer if we look at the logarithm of GDP per person per day. We don't have a column in the database with that information, but it's very easy to compute it. I divide the GDP per capita by the average number of days in a year, and I use a Nampa Universal function, which works fine with Pandas to get the logarithim. By assigning values to a new column name, a new column is created in the data frame. To see global trends as a function of time or to examine individual countries, it makes sense to index by year and by country. Pandas has its own plotting interface, which was designed to display multiple variables together. We want to show life expectancy as a function of logarithmic cost domestic product, so we select data for 1960 with lock and then generate a scatterplot of those two variables. The situation in 1960 is pretty clear with a clear correlation between the two variables across all countries. To compare with the more recent year in the same plot, we need to grab a mat plot lib axis object, from the first plotting function and pass it to the second.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=188)** We also change colors and label the two clouds of points. In 2015, everyone is richer and can look forward to a longer life. Being rich is still helpful, but we observe a flattening or life expectancy for the richest countries. The trend is the same for other statistical indicators such as survival to age five. The data frame index by country lets us make easy plots of the chronological evolution of an indicator such as life expectancy for a country, such as Italy. Before we plot, we sort the index, the result may be jumbled otherwise. The style of programming where I concatenate methods one after the other is in fact quite a dramatic for Pandas, if not for [[Python (Programming Language)|Python]]. One may even say that Pandas speaks its own Python dialect. Here's a comparative plot for three countries. Italy caught up with the United States in 1960 and China is now coming closer despite the disasters 1960 famine. Another interesting and important correlation is between fertility rate and survival to age five. To look at the question globally, we can compute the average fertility rate overall records, but it doesn't mean much since it mixes data from
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=281)** many different years. We can use the Pandas group by functionality to segment the data frame by year before computing the average. The result is a series index by year, which shows the average fertility rate as a function of time. I will plot the series against the time series of survival to age five. The plot methods allows us to add a second axis on the right to show the range of a second variable. This plot shows forcefully that high natality is a consequence of infant mortality and that women have many fewer children when they believe they will survive. On a smaller scale, we see the post 1950 baby boom. To gain even more insight, we can create a pivot table that segments the fertility means by both year and geographical region. And Pandas offers a quick way to plot such a pivot table. We see that the drop in fertility came after the baby boom for Africa, America, and Asia. Europe was already low and decreasing since the beginning of the century. Here's the corresponding plot for age five survival. Africa is now roughly where Europe was in 1950. Using Pandas built-in plotting functions is the quickest way to make insightful statistical illustrations, but for maximum flexibility,
>
> **[6:15](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=375)** you can always use the standard mapplotlib functions, which are fully customizable on Pandas series. Mapplotlib will recognized column names and will try to use the index as the X coordinate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (10), [[Statistics]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (2), python (2)
> **Definitions:** is a  (3)
> **Env Vars:** gdp (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Database operations in pandas](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]] is not a database. It's a library to manipulate structured data and, specifically, tables in memory. Unlike a database, it does not provide persistent storage, and it does not support concurrency and access control. However, it does implement some of the functions of a database. As we have seen, we can select records by imposing conditions on the index or on the fields. For a database, this will be called a query. In this video, we'll show you how Pandas performs another operation typical of [[Databases]], merging tables by matching indices or fields. For a database, that's called a join. We are going to experiment with the dataset from [kaggle.com](https://kaggle.com) containing all the Oscars awarded since the inception of the Academy Awards in 1928. Since we want to explore merging tables, I have split the data set into a few pieces. We'll put them back together. The first two pieces are tables of actors and actresses that have been nominated for a movie. We see that we have fields for the year of the award, for the award category, the name of the film, and the name of the performer. In the initial years of the Oscars, there was a single actor category, but then it got split into leading and supporting roles. Same story for the actresses.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=95)** The simplest way to combine these tables is to concatenate them, which we do with pandas concat. Then we can re-sort the table by year and category and reset the index, which otherwise would have duplicated entries. Another file hosts a table of the years in which each movie was filmed. We can use the data in this table to add the year of production into the table of nominations. That's not super interesting because the production year is usually the year before the award, but it will show you how to merge tables horizontally, aligning the rows based on the film name. We use the pandas function, merge, and we specify that we want to match records by film name. This works great, but there is a subtlety that we should consider. The standard form of merge returns only records for which a key is found in both tables. If we artificially remove some records from the movie table, here I'm using iloc, the corresponding nominations disappear from the merge. It will be better for us if the year was left empty, but the records survived, and that's what we get if we ask for a left merge with the keyword how. More generally, there are four possibilities for merge, which are illustrated in this simple Venn diagram.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=192)** If we want only the records for which we found the key in both tables, that's called an inner merge, and that's the default in pandas. If we want all the records in the left array match with records from the right when one with the right key is present, that's a left merge. Vice versa, that would be a right merge. Last, if we want all records for the left and all those on the right match when possible, that's an outer merge. So here, if we try a right merge, we would have records for all the movies that had no nominations for best actor. We will use an inner merge, the default. By the way, this is a many-to-one merger because multiple nominations for the same movie are matched with the same record from the movie's table. This happens automatically. There are many fun things we can do with this data set. For instance, we could see which actor had the most nominations by counting the frequency of their names. Clearly, Meryl Streep, but for how many did she actually get an Oscar? For that, we need a table of all awards, yet another file. It turns out that Meryl Streep had three Oscars. Did anybody do better? Hmm, counting the frequency of names in the award table doesn't help because some prizes don't go to actors and actresses. We can achieve what we need instead
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=287)** by merging the two series of counts for nominations and awards, using the indexes of names as the key. All the non-acting awards will disappear, given that this is an inner merge. So Katharine Hepburn actually did one better than Meryl Streep, even if she was nominated less. This type of merge by index, inner, and one-to-one is so common, that in pandas, it can also be achieved by concatenating tables horizontally. That's axis equals one. Let's look at the movies with the most awards. Three are tied with 11, and let's see what awards they got. For that, we merge the awards table with the counts using the film name as the key. Since the film is a column in the award table, but it's the index for the series of counts, we need to tell pandas merge. After the merge, we limit the output to the largest counts. These big films have only one acting award among all of them. I wonder why. One last merge. By first selecting the category of acting awards only, we can see which actors won awards together. Indeed, a couple of movies in 2023 and 2024
>
> **[6:22](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=382)** had quite some luck in that respect. Pandas merges are best learned by experimentation. I'm sure that once you do a few, you'll find them popping up everywhere in your data analysis work. This concludes our overview of pandas. There's a lot more that you can do with it, and there's a lot more to learn than I can cover in this course. I tried instead to give you a feel for what is possible and practical. I encourage you to start working on a data set that interests you and to pick up more techniques and knowledge using the many resources available on the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (9), [[Databases]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 6. Project: Baby Names

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Analyzing baby names](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=0)** - [Instructor] In this chapter, we are going to practice using [[Pandas (Software)|Pandas]] with an intriguing real-world use case. We will analyze the US Social Security baby name catalog, which lists the names given to male and female newborns for every year since 1880. This is a very simple data set, but it's great fun to play with, and it has been mined, analyzed, and visualized in many publications and websites. We will use the social security data to track the popularity of names across all years, and to extract the 10 most popular names in a year. All of this with Pandas, of course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Loading name datasets](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=0)** - [Instructor] You can download the social security name dataset from their website. We'll use the national data file, which gives you a Zip archive containing files for each year since 1880. I have already unpacked them in your exercise files in this chapter's directory under names. However, you could unzip a file in [[Python (Programming Language)|Python]] using the zip file standard library module. Jupyter lets us browse the contents of the names directory. Let's see, what are these files like? We open one of them in read mode and print out the very first few lines. It's a very simple comma-separated format, name, sex, and the number of babies born that year with that name. [[Pandas (Software)|Pandas]] read_csv shouldn't have any problem, except that the CSV reader used the first record, Olivia, to name the columns. We will instead set the column names explicitly, better. We will load all the tables and concatenate them into a single data frame. To avoid confusing data from different years, we can prepare the individual data frames by adding a new column that specifies the year. To do that on the fly, directly on the output of read_csv, we can use data frame assign.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=93)** Here's an example. Excellent. Maybe you have guessed that I arranged to load each file with a one-liner so that we can use comprehension to concatenate the data frames. There are several things happening here, so let's look at this carefully. We loop over all years between 1880 and 2024, excluded. We build up the file name using an fstring and feed that to read_csv. We had the column specifying the correct year from the loop variable and we pass all the resulting data frames to Pandas concat. In fact, there are no brackets here, so we're using a generator expression, which concat accepts quite happily. It's a very efficient way to build the data frame. It's all there, more than 2 million entries. If we want to squeeze out the last drop of performance, we can make sure that all the types are backed by pyarrow. And instead of CSV, we will save this data frame to the very efficient arrow feather format. It's compact and loads incredibly fast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** unzip (1), python (1), make (1)
> **Code Identifiers:** read_csv (3)
> **Env Vars:** csv (2)
> **Exercise Files:** exercise files (1), zip file (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Comparing name popularity](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=0)** - [Instructor] We are ready to start analyzing the data. Let's load it up. We wish to examine the changing popularity of a name. So we can index the data to make that easier. We'll use a multi-index, indexing on sex first, then name, then year. We will also sort the index. Getting the data set for any given name is, then, a simple exercise of indexing with the loc. This series is ready to plot. Notice how matplotlib automatically uses the index to set the x-axis. Mary and [[John the Ripper|John]] had peaks in the 1920s and then again in the 1950s or '60s. It makes sense to consider the frequency of a name as a fraction of the number of babies born in a year. To get that, we use groupby to group the unindexed frame by sex and year and sum the number column. This gives us the total number of births indexed by sex and year, which is itself an interesting thing to plot. We see the baby boomers coming on stage in the '50s and '60s. We can now create a new column in all years indexed set to the relative frequency of a name in a year. Let's look at Mary and John again. As a percentage of all babies, Mary and John have steadily lost popularity. In 1880, more than 8% of all baby boys was a John.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=97)** Let's make a generic function plot name to make this kind of plot and another function to plot a few names together. We'll be interested in absolute numbers and percentages of births. For instance, let's compare Michael, John, David and Martin, or for girls, Emily, Anna, Claire and Elizabeth. Another interesting investigation is to compare variants of the same name. Let's take the two spellings of Claire, the older version, Clara, and Italian and Irish spellings, Chiara and Ciara. Notice how matplotlib does its best to put the legend out of the way. Claire is dominant, but Clara is having a resurgence. Notice the purple spike just after 2004 when the singer Ciara release her first album. We can make a slightly different cumulative or stack plot that adds up the counts on top of each other. For that, we need a different table where the rows are the Claire variants and the columns are years. First, indexing gives us the data we need. Notice we're using a fancy index to get all the Claires. Now, [[Pandas (Software)|pandas]]' data frames have methods stack and unstack, which can switch labels from columns
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=191)** to the index and vice versa. Using unstack will give us a table from this series. We have unstacked stacked level two of the index, so we got new columns from the years. Using unstack on level one of the index, the name, would've given us a transposed table. Stack does the inverse operation, bringing us back to a series with a three level multi-index, except that now we are swapped around the index levels. But let's go back to the unstacked table. This is just what we need. We may as well lose the index label for sex, which doesn't do anything. We do that with droplevel. And while we're massaging this table, we may as well replace the missing values with zeros, which we do with the fillna. We are chaining operations, leaving one on each line. Some pandas pros really like this style. The backslashes at the end of each line are needed so that [[Python (Programming Language)|Python]] sees the whole expression as a single line. We should be good now. Let's go to matplotlib's stack plot. Ah, matplotlib, which still lives in the NumPy universe, cannot quite handle the PyArrow integers. The error we get is about applying a specific NumPy function to a type that is not understood. No big deal.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=285)** We just convert everything to NumPy integers using astype. The column names give us labels for the x-axis, while the index makes a suitable legend, quite nice and informative, except perhaps for the garish default colors chosen by matplotlib. Surely we can do better by selecting a different colormap. And here it is, a history of Claires.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (5), [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), python (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Compiling top tens](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=0)** - [Instructor] In this video, we will create yearly top tens for male and female names. We once again load the data for all years, but this time we index it slightly differently, by sex and year only. We'll keep the names as a data column. We now build up our query by chaining [[Pandas (Software)|Pandas]] methods. Getting boys in 2000 is a simple matter of a multi-index lock. Then we get the most popular names by sorting the DataFrame on number in descending order. Then Head gives us the top 10. In 2023, Liam was king, followed closely by Noah. How about girls? It's Olivia and Emma. Let's build up a table to compare the top 10 names over multiple years. We only need the names, so we get rid of the index and of the number column. Working from this example, let us create a generic function to return the top 10 for each year. Now, to form a table, we collect the series as the columns as the DataFrame, labeled by year. We use a dictionary comprehension to structure the data. We see that Liam took over from Noah, but Noah kept a decent second place. Oliver rose rapidly, while William is now losing favor.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=97)** For females, Olivia has overtaken Emma. And maybe Charlotte is on its way up. Let's take the 2023 top 10 and plot their progress across the history of the database. For that, I first need to reindex the DataFrame to grab individual names more easily. So we loop over the top 10, request the corresponding name from our DataFrame and plot the resulting history. This is interesting. All the top female names have surged quite recently, except for Evelyn, and to some extent Emma and Charlotte. Looking at males, William and James are classics, but the [[Representational State Transfer (REST)|rest]] are recent discoveries. How about all-time favorites? We get there quickly by selecting females, say, grouping by name, summing the numbers, and sorting by value. I will use a chaining style to code this up. So Mary and Elizabeth. Compare with the modus totals of the 2023 top 10. We see if they have staying power. Plotting histories for the overall top 10 names shows that they gained their spots in the first half of the 20th century and lasted through decades.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Unisex names](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=0)** - [Instructor] We need to find the top unisex names in 2023. Doing so will require a decent amount of [[Pandas (Software)|pandas]] manipulations, which I'm sure you could achieve in different ways. What I'm going to show you is just one possibility. First, setting an index of sex and name will help us.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=26)** Next, we separate the boys and the girls.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=35)** You may have guessed that a merge operation will give us records for unisex names. We need to rename the two columns with a number of names that come from the left and the right data frames.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=57)** Next, we compute the total frequency of the names, as well as the boys to girls ratio. This will be our factor to condition. You see that we use a logical and to combine the two pieces. We use the resulting Boolean array to down select the data frame. Last, we sort. And we skim off the top. Let's try this out. Oops. What did I do wrong here? I see. I need to apply my condition on the ratio of the numbers and not on the entire data frame. Here we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 7. Importing and Wrangling Data with pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: The structure of data](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=0)** - [Instructor] So far, we've been casual in the way we speak about data. As we move into the second part of this course, we should get more precise with our terminology. The [[Microsoft Word|word]] data is plural. That's appropriate because we're usually interested in the variability of our observations. We need to establish how things are different from each other. So a data set is like a catalog or a collection. For instance, for a planetary scientist, the data set of interest would be the planets of the solar system. The data set consists of cases, the planets, and each case has attributes called variables. For instance, the mass of the planet, or the period of its orbit around the sun. It is standard practice to organize data in a data frame, in effect a table where each row or record refers to one case and each column or field to one variable. It is not by chance that the [[Pandas (Software)|Pandas]] table object is also called a data frame. Variables can be quantitative, represented by a number, or categorical, a description that can be put in words selected from a fixed set of levels. Usually, quantitative variables are given as pure numbers with standard units described in the codebook or data dictionary for the data frame. Likewise, the codebook would describe the levels that are available for a categorical variable. This arrangement, known as case variable organization,
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=98)** is very simple, but it can accommodate many different sorts of data. It is also affected directly in the [[Data Structures]] used by statistical software. In our case, Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Microsoft Word|Word]] (1), [[Data Structures]] (1)
> **Definitions:** refers to (1), known as (1)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [Importing data with pandas](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=0)** - [Instructor] We have already used [[Pandas (Software)|pandas]] read_csv to load simple text tables into pandas. In this video, we look in detail at the task of importing textual data. We'll continue with example of planets. Let's have a look at the file planets.csv included in the exercise files. We see that all values are indeed separated by commas and that each line is a case, a record. The names of the columns or variables is given in the first line. Some values include commas as thousands separators and they are enclosed in quotes. A simple pandas code does a good job with this. However, looking at the structure of the data frame, we see that some columns that should be numbers have become strings instead, probably because of the commons, and that the date FirstVisited is also a string rather than a date. Luckily, pandas has options for that. We can specify the thousands separator and we can tell pandas explicitly that the FirstVisited column holds dates. For consistency, we can also require that the Diameter and MeanTemperature fields should be floats and that Rings and MagneticField should be categories since they have only two possible values. Perfect. This is now a very clean, accurately encoded table. It would've been harder to load this file
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=97)** using the PyArrow backend since in that case, read_csv does not support thousands or par states. We can, however, convert the data frame to PyArrow types after loading. Let me show you a couple of common variants of read_csv that you may need in everyday code. If the columns are separated by spaces rather than commas, as in this file, we use sep to specify the separator. Here, /s+ means any number of space like characters, and we need a row string starting with an R so that [[Python (Programming Language)|Python]] does not try to interpret the backslash. If the column names were missing in the first row, as in the file Planets-noheader.csv, we need to tell that to read_csv, so it won't try to use the first row as names for the columns. Here, we did not tell it, and now we do. Even better, we provide the column names ourselves. Pandas read_csv has many other useful options, such as skipping rows at the top and bottom, reading a fixed number of rows, selecting columns. There are options about parsing dates and floating numbers. We may also provide a custom Python function to parse specific columns, and a lot more. These options are mirrored in the writing function to CSV.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=192)** For instance, we can specify the separator. We can instruct pandas to write out null values instead of skipping them. That's generally a good idea. We can omit the index or we can omit the header or we can change the date format and so on. There's no substitute for the documentation. Although these days, you can also ask for help from your favorite large language model. This table summarizes the most useful read_csv options. It's included in the pandas cheat sheet PDF document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** read_csv (6)
> **File Paths:** planets.csv (1), planets-noheader.csv (1)
> **CLI Commands:** python (2)
> **Env Vars:** csv (1), pdf (1)
> **Analogies:** such as (1), for instance (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)

#### [Cleaning data](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=0)** - [Instructor] In addition to simple ASCII tables, [[Pandas (Software)|Pandas]] supports many other formats: [[JSON]], using web applications, [[HTML]] and XML, which we may scrape directly from my website, [[Microsoft Excel]] spreadsheets, HDF, the hierarchical format for scientific data, the very efficient binary formats from the Apache Software Foundation, such as Feather and Parquet, proprietary statistic software formats such as [[SaaS]], [[Stata]], and SPSS, [[SQL]] [[Databases]], and finally, the internal binary [[Python (Programming Language)|Python]] format, Pickle. In some cases, you need to install other packages to support that functionality. I've indicated those packages in this table, but Pandas itself will tell you if you need them. This list is not exhaustive. Other formats are supported by third party packages, so it's always worth Googling or asking your favorite large language model. In this video, we'll concentrate on a few useful formats, but our considerations will apply more generally. Let's first talk about saving. Say we did the work of loading a very clean table. How can we save it and preserve all this detail? The simplest way to do so is with Python's serializing capability known as pickling. to_pickle will save, read_pickle will load back. Occasionally, you may find that Pickles
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=99)** are not compatible across different versions of Python or Pandas, so this format is best used internally within an application rather than to exchange data with others. Personally, I like the very efficient and portable formats developed by the Apache Arrow project, Feather and Parquet. For large data files, this can be several times faster than Pickle and many times faster than text. So we can save with to_feather and read with read_feather, similarly for Parquet. Let's move on to JSON, the native [[JavaScript]] data format. This is, strictly speaking, a text format, but it is meant more for machine reading and writing than for people. In addition, the JSON syntax is very close to Python lists and texts. We'll use a simplified version of the planet's dataframe to exemplify JSON reading. The important point is that there are different ways to organize a dataframe using dicts and lists, and therefore JSON. Perhaps the most straightforward way is having one dict for each record. This is also what we would need, for instance, in the JavaScript plotting library, [[D3.js]]. So have a look at this file, Planets-records.json. Pandas has no problems loading this. To write out this variant of JSON, we'd use to_json with the option orient='records'.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=196)** If you have an explicit index, you'd probably use a dictionary of dictionaries as in the file, Planets-index.json. To parse this, you need to tell Pandas with orient='index'. Otherwise, you end up getting the transpose of the table. To reduce file size, a JSON file may be organized to separate labels, both the index and the column, and condense the values in a list of lists as in file Planets_split.json. This is known as a split orientation. And again, we can load it by telling Pandas that's what we have. Other JSON options are similar to Read CSV, for instance, to set how dates and floats are parsed. Missing values are always rendered as null in JSON, which is mapped back to the correct missing data value in Pandas. Last, I want to show you how Pandas can parse HTML. We look at a page from Wikipedia about athletics at the 2024 Summer Olympics. There are several tables here. You don't even need the file. You can just provide a URL to Pandas. But for convenience, I have dumped the page and included the file in the repository.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=289)** If we just use Read HTML, Pandas tries to parse all the tables in the webpage, and we get back a list of dataframes. But we can use match to look for a specific [[Microsoft Word|word]] and thus select a subset of tables. We could also use an HTML attribute such as ID, but that doesn't help us with these Wikipedia tables. In this page, by looking for rank, we get a table of medals listed by country. Parsing options are similar to Read CSV. For instance, we can indicate which columns should provide the index. And we can remove the last row since we know how to make our own totals. You can imagine how useful it can be to grab data on the internet and get it into Pandas for analysis. However, as we'll see in the next video, HTML data often needs significant cleaning and reorganization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (12), [[Pandas (Software)|Pandas]] (11), [[HTML]] (5), [[Python (Programming Language)|Python]] (4), [[JavaScript]] (2)
> **Env Vars:** json (9), html (5), csv (2), ascii (1), xml (1)
> **Analogies:** such as (3), for instance (3), similar to (2), imagine (1)
> **CLI Commands:** python (4), apache (2), find (1), make (1)
> **Code Identifiers:** to_pickle (1), read_pickle (1), to_feather (1), read_feather (1), to_json (1)
> **File Paths:** d3.js (1), planets-records.json (1), planets-index.json (1), planets_split.json (1)
> **Definitions:** known as (2)
> **Cross-References:** in the next (1)

#### [Filtering, reshaping, and tidying data](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=0)** - [Instructor] To demonstrate cleaning and reorganizing data, we look at another table from the Wikipedia Paralympic page, specifically the table of medals in the 23 events for men. We locate it with rate [[HTML]] using the name of one of the medalists as a match. Now this Wikipedia HTML tables are made for display, not for data transfer. So there are several things here that we need to fix. First, we know that some records have no data that comes from HTML table dividers. We drop those records with dropna. Next, I'm bothered by the [[Microsoft Word|word]] details attached to every event name. We get rid of that with appenda string function that selects a slice within each value. So we cut out the last eight characters. Before we get to work on separating athletes and countries and normalizing the performance values, we recast this data frame following the principles of tidy tables. Tidy tables were popularized by Hadley Wickham and the basic idea is that each variable [[Forms]] and column and each observation forms a row. Tidy data is easier to manipulate, filter, and summarize using tools like [[Pandas (Software)|Pandas]] in [[Python (Programming Language)|Python]] and it's easier to plot and visualize.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=93)** The problem with that data frame is that if we wish to find an athlete, we need to look in three separate columns, gold, silver, and bronze. Furthermore, the type of medal won by an athlete is not a variable, but it is encoded by the column in which we find the athlete. We want to recast the table so that each medal and athlete will get a separate record. The pandas data frame method melt is just what we need. Let's focus on the athletes first. We want the values from three columns, gold, silver, and bronze to be condensed into a single column athlete. And we want the names of those columns, gold, silver, and bronze to become another column, medal. With pandas melt, the columns listed under ID VARs are preserved and play the role of an index. The value VARs are the columns that provide the values and their column names are saved in the new column, VAR name. So you see that the first record in the original table, here, becomes three records in the melted version. Let's try that out. Excellent. Now every athlete gets his own row. We'll do the same for the performance results, the times, heights, and lengths. And you see where this is going.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=188)** Now we need to merge these two tables, but first we need to remove those annoying dot one from the medal column. The panda string function replace works fine here. So here's the merge. We merge on both event and medal. What's left to do? We need to separate athlete and country and to do that, we notice that the athlete field, actually, includes a unicode non-breaking space between the two. We can then split the strings on that. To do so, we use the string function split, followed by get. Get perhaps is not the most obvious naming for taking an element in a two pole, so you'll have to remember it. Now we have athlete and country. Are we quite done? Well, the relay events have different formatting without the non breaking space and it's not easy to split those because some countries are one word and some are two. So we will define a custom function to extract the country, taking different paths for individual and relay events. We could get a proper table of countries, but since this is Python and we prize pragmatism, we write our code only for the countries we actually have. Now for the relay events records only, we apply this function to the athlete column and assign the result back to the column itself.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=284)** Okay, now for the result field, let's see what values it takes. The parenthesis just give higher precision for the results, so we may as well get rid of them. For that, we'll use a regular expression that matches anything within parenthesis. It's outside the scope of discourse for me to explain regular expressions, but you can learn more about them in the [[LinkedIn]] learning course by Kevin Skoglund, or from many resources on the web. We also get rid of PTS or M for meters. We can figure out the units based on the event. All that's left to do is to split off the two letter annotations that denote records such as PB, AR. For that, we need to chain three string methods, splitting at the space, taking all the resulting items except for the first and joining them back into a string. Here we go, OR, WR, AR and NR are Olympic, world, continental and national record. PB is personal best and SB is season's best. Beautiful. Our table is fully cleaned up and tidied up. We can celebrate by asking a few questions from the data. We ask, "Which gold medals were also Olympic records?" Just six of them. We ask, "How many bronzes were personal bests or season bests?"
>
> **[6:19](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=379)** See the logical and, and the logical or, that we used to combine these conditions. Well, we're down to those athletes. And which male athletes won the most medals in individual events? If you follow the 2024 Olympics, you'd know already. It's Grant Fisher and Noah Lyles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Pandas (Software)|Pandas]] (3), [[Microsoft Word|Word]] (2), [[Forms]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** html (3), var (1), pts (1)
> **CLI Commands:** python (2), find (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Simulating data](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=0)** - [Instructor] Sometimes you need to develop a data analysis application before you have access to the data. In that case, a good approach is creating fake data with the right structure and realistic content. Then you can use that to populate your tables and test your [[Algorithms]]. However, making these records by hand can be very time-consuming. Of course, the [[Python (Programming Language)|Python]] ecosystem can help with that. The Faker package is a popular library to generate random, realistic-looking fake data, such as names, addresses, dates, and more. Let's have a look at what it can do. Note, there's a lot of detail in this code, so it may help you to occasionally stop the video and parse the code to make sure we understand what's happening. We start by creating an instance of the Faker class. Then we can call its methods to make up a person, a name, address, date of birth, city, and state. To make this a bit more interesting, we're going to create a database of imaginary musical performers of their songs and of the songs rankings in a weekly billboard. We start with an imaginary performer. In addition to name and date of birth, we put together a city and state of birth, and we pick a random genre from a list using random element. Here's an artist that's a Python dictionary. We collect 100 random artists in a DataFrame. The index is just a simple ordinal range. That's just fine as a unique ID,
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=93)** which we will use to link to other tables. So we'll name the index explicitly artist_id. Now for imaginary songs, we'll include a random artist, a random title of up to 20 characters, the date of release in the last two years, and the appropriate genre. Well, yes, I agree that the title could be more incisive. Let's try another one. Maybe better. I'll make a table with 500 songs. And again, I'll adopt the a automatically generated index. Now we're get into the weeds a bit. I'd like to create a history of plays, say on the radio for each song. The history will start from the release date, continue for a random number of weeks, and so that's how I compute the end date. I will create a range of dates that covers the weeks. We use the [[Pandas (Software)|Pandas]] function date_range. A frequency parameter of W-MON gets us a Monday every week. We simulate a very simple history, declining linearly from a random initial value, and multiplying by random coefficients between 0.8 and 1.2 to add some noise. If you want to play with this, you can get as fancy as you wish. Great. Let's pull all of this together. Looks good. I'll make such a history for each song. The index from each history will be useful
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=187)** because it gives us the number of weeks since the release of the song, so we'll turn it into a regular column with reset_index and change its name to week. We will concentrate on the last year only, downselecting our table using a Boolean condition. We also need to sort this table by date, earliest first, and by number of plays, largest first, because we want to get the top 10 each week. To collect all the top 10s, we group by date, take the first 10 records, and then set the data as index. We can then use loc to get the top 10 for a given week. With another groupby operation. We can compute the rank of each top 10 song every week. Finally, we merge with a song and artists tables using a song_id and artist_id to get titles and performers. Remember that those IDs are actually in the index of the tables so merge, we'll need options to reflect that. We are done. We have all the top 10s in a DataFrame with titles and artists. So we may ask, is there any performer who has been as the top of the billboard more than once? Oh yes. Tammy Morris took four first spots with two songs, "Nor Control Attack" and "Whose of Small Send."
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=284)** Let's save our work. Not all the Pandas output formats can save multiple tables together. Pickles are always an option, and so is one format that we did not discuss in detail, HDF5. With HDF5, the DataFrame method to HDF keeps app appending tables to the same file. You can give a key, which is how the individual tables are found in the file. In fact, HDF5 files can have a hierarchical structure similar to a file system. To read the tables back into the Pandas, we'd use HDFStore with a simple dictionary syntax. And that is all for a foray in faking data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1)
> **CLI Commands:** make (5), python (2)
> **Code Identifiers:** artist_id (2), date_range (1), reset_index (1), song_id (1)
> **Env Vars:** hdf5 (3), mon (1), hdf (1)
> **Versions:** 0.8 (1), 1.2 (1)
> **Analogies:** such as (1), similar to (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)

#### [Solution: Country rankings](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=0)** - [Instructor] So we need to return a table of the top four countries in athletics, ranked by medal count. This is complicated enough that I will do it in steps, returning a partial result every time. CoderPad will continue to scold me, but too bad. First, I will group by medals.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=30)** The array is called medals, and counts the occurrence of each country's name. Let's try this. Good. This gets me a series with a multi-index. Remember, we can move a level of the index to columns using unstack. Removing the first level, here it goes. Better. Good progress. I also want to get rid of those NaNs. They should be zeros. Next, we compute totals for each country by summing over the columns. Good. Last, we sort. And we take the first few. Perfect. Well done.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 8. Summarizing and Visualizing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Exploring data](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=0)** - [Instructor] Once we have imported our dataset and we are satisfied that it is clean and refactored, it's time to start exploring it, summarizing it, and visualizing it. We'll be trying to understand the typical values and the range of variation of our variables, and to identify which variables are correlated. In this chapter, we will again work with datasets from the Gapminder project. Let's have a look at the dataset. For all the countries in the world and for years starting in 1900, the dataset encodes a few basic trends: the approximate population, the expected lifetime, the percentage of children surviving to age five, the average number of babies per woman, and the gross national product divided by population. The unit is 2017 equivalent dollars. We also look at the second dataset that describes the distribution of incomes in China and in the USA in 1965 and 2015.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=70)** The Gapminder website includes a number of beautiful and powerful visualizations. We will use [[Python (Programming Language)|Python]] to reproduce some of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** usa (1)
> **Speakers:** - [instructor] (1)

#### [Summarizing quantitative data](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=0)** - [Instructor] To understand the dataset, we begin by summarizing it. That is, we quantify both the typical trends of the variables and the variations around them. In short, the distribution of the data. In this video, we'll look at a few simple ways to summarize the distribution of a numerical variable. We'll examine Gapminder data that describes the distribution of incomes in China and in the US in 1965 and 2015. These distributions are not very accurate, but they will be sufficient for our example. For each country and year, we have 1,000 entries corresponding to a sample of 1,000 representative people. One way to describe the variation of a variable is by quantifying its range. However, focusing on these extremes, the minimum and the maximum, is usually not very insightful. It's also imprecise, given that our set is a limited sample of a population rather than a complete census. Both minimum and maximum are [[Statistics]], descriptive numbers that we compute from the data and that summarize the data. Of course, another very important statistic is the mean, computed by summing up all the data points and dividing them by the number of points. In symbols, we write a sum of the data points, xi, divided by how many we have. In [[Pandas (Software)|Pandas]], we just type mean.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=97)** We can use groupby with the index variables to compute the statistics separately for each country and year. The variance is a measure of variation tied closely to the mathematical concept of normal distribution To compute it, we obtain divisions from the mean, square them, and take the average. And for a technical reason, we actually divide by the number of points minus 1. In Pandas, it's just var. The standard deviation is the square root of the variance. Taken together with a mean, it gives a pretty good idea of the center and spread of a distribution. In Pandas, it's std. Next, the quantile. The quantile is a statistics that describes the value for which we know that a certain percentage of the data points lie below. We computed with quantile. Taken together, the 25th and 75th quantiles specify a coverage interval that includes 50% of the data points. The 50th quantile is known as the median. From this table, we say that in 2015, approximately half of the Chinese population made less than $2,800, and approximately 25% made less than 1,800. Last, the inverse of the quantile
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=192)** consists in finding the percentage of the population at which a given value or score lies. To find it, we need to go outside Pandas to SciPy stats. And to compute a non-Pandas statistic we group by, we use apply. In China in 1965, no one in our sample made $5,000 a year. By contrast, it was a very low income in the States in 2015. 4.5%. The Pandas method, describe, returns several summary statistics at once. Between 1965 and 2015, China made great strides, but it still had some way to go. We see this clearly if we take USA 2015 values as a reference and use them to normalize, to divide the other entries. Very good. In the next video, we move on to plotting these distributions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Statistics]] (4)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1)
> **Env Vars:** usa (1)
> **Versions:** 4.5 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Visualizing distributions](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=0)** - [Instructor] We continue to analyze the income distributions in the US and in China be plotting them. Hans Rosling argues convincingly that the logarithm of daily income is the number that's really descriptive of the lifestyle available to a person anywhere in the world. So we compute that and plotted alongside yearly income. The summary [[Statistics]] that we described in the last video are brought together visually in a box plot, a [[Pandas (Software)|PANDAS]] plot of kind box. The box itself extends from the 25th to the 75th quantiles with the line at the median. The so-called whiskers have a complicated definition. They're the minimum and maximum values in the dataset, but only if those do not stray too far from the 25th and 75th quantiles. Precisely, not more than one and a half times the inter-quantile range between them. If they do stray out, they're considered outliers and they're plotted individually. That's what we see in the US income data for some wealthy individuals. Remember, these are just representative points, not actual people. To compare China and the US in 1965, we reset the index of the dataset and we tell PANDAS to stratify the plot by year and country, the scales here are so different that we don't see much. It's better to make box plots of the logarithm
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=97)** of the income. From this plot, we understand that both countries improved between 1965 and 2015. In 2015, China is not too far from the US of 1965. Remember that the log 10 of zero means $1 and a log 10 of two, $100. A much richer visualization of a distribution is a histogram, which divides the data into a set of continuous bins of equal width, and then for each bin shows a rectangle with high proportional to the number of data points that belong there. This shows that in 1965, most people in China had daily incomes slightly below a dollar. We can enhance the histogram by marking the locations of a few descriptive statistics using vertical lines, XV line in map plot label. To distinguish between one line and the other, we use different line styles. So here we showing the mean, the median, and the 25th and 75th quantiles. A density plot is effectively a smooth histogram, which associates an estimated frequency with every value on the X axis. Here I'm comparing the histogram and the density plot, so I have normalized the histogram by setting density equal true. Then the area under the curves is the same for both. Remember that the smooth line is just an approximation.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=194)** It's also dependent on the scale of the smoothing, which is chosen automatically by which we can set directly. Let's compare histograms for China and the US using log income. In 1965, there is basically no overlap. The poorest Americans are richer than the richest Chinese. In 2015, the situation is very different. Both the Chinese and the Americans are richer, but there's also significant overlap, and of course there are many more Chinese than Americans. To see how that may affect our understanding of the data, we rescale the histograms using the respective populations. To do that, we need an array of weights of the same length of the data that we are plotting. This is complicated enough to do that I'm going to show you to you step by step. So here's the data that I need to histogram. I also need the main gapminder dataset to get populations, and here's the population of China in 2015. This query produces a series of length one, I actually need a single value, so I take the first and only record. I will multiply that value by an array of once and divide by the length of the series. This weight means that every sample will represent approximately 1.4 million people. Finally, my weighted histogram. I can repeat this for the two countries together.
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=291)** Rosling points out correctly that there's a lot of purchasing power at the richer end of the Chinese population, so corporations will do well to tap that market. You may have noticed that PANDAS plots are rather drab. Of course, you're free to fine tune them using Matplotlib. An alternative is using the plotting functions of the Seaborn library, which pays much more attention to presentation. Later in this course, I will introduce another plotting package, Plotly, which has the added advantage of allowing interactivity. In Seaborn, the names and options of the plotting functions are slightly different than in PANDAS or Matplotlib. However, it's easy to [[Google]] them or to ask your favorite AI assistant. Let's look at 2015. Here are box plots and density plots, respectively. Picking two of Seaborn's figure styles. Seaborne plots are rather elegant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Statistics]] (2), [[Google]] (1)
> **Env Vars:** pandas (4)
> **Cross-References:** in the last (1), later in (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Versions:** 1.4 (1)
> **Speakers:** - [instructor] (1)

#### [Comparing quantitative variables](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=0)** - [Instructor] Plotting two variables together helps us identify possible relations between them. Do they rise and fall together? Is it possible that changes in one may cause or be caused by changes in the other? We often pick one column in a dataset as the explanatory variable, and see if indeed it explains the variation in a response variable. Let's once again load the gapminder dataset. For data with timestamps, the simplest thing to do is to plot a variable using the date as the explanatory variable. That is, to plot a time series. I will focus on my country of birth, Italy, and show you a time series of population. So here's the restricted dataset, and here's a scatterplot of population against year. The rate of change of the population doesn't change very much across two centuries. The same plot will be different for China or India, especially after 1950. Here I am superimposing two plots by reusing the matplotlib axis returned by the first one. Going back to Italy, let's look at income per person in 2017 equivalent dollars, again, as a time series. We will actually plot the logarithm of the income by specifying logy=True. Here one can see a big dip during World War II, and in the top corner,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=94)** a dip after the 2008 financial crisis, and a smaller one for COVID-19. All in all, the last 20 years in Italy have been rather disappointing. What if we plot log income against the variable related to quality of life, such as life expectancy? We see that they are generally correlated with some turnarounds. We can get a better sense of those by adding color, which is mapped to the year. An important point, whenever you use color to communicate information, you should be mindful of colorblindness. The matplotlib color map varied this, was designed to be safe for various types of color deficiencies. Plot in a time series of life expectancy confirms that dips happened with the two wars, and a much smaller dip in 2020 with COVID-19. Plots on a monitor or on paper are intrinsically two dimensional, so it's hard to go beyond showing two variables. In addition to exposition, white position, and color, which we just use to encode the year, we can also encode variables using the size of markers, the shape, the contour, and perhaps their texture. All these dimensions are sometimes called scales. We will reproduce a classic Gapminder plot.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=190)** We take the entire world in 2015 and plot log income, life expectancy, and population using the size of the markers. This size argument S specifies the areas in point squared, so we need to scale the population column appropriately. Here it is. To make it a bit clearer, we set a white contour for the markers. We can then use color to distinguish between continents. For that, we need to map the region column to a color name and pass the resulting [[Pandas (Software)|Pandas]] series to scatter. Here's the map and here's the colorful plot. Last, we'll emphasize a single country by changing the edge color. The USA has a black circle around the green. This is very pretty and very promising, but to understand how things are changing across the century, we can animate this plot by creating a function that takes a year as an argument and passing that function to a Jupyter widget. In this case, we will use a simple slider ranging from 1950 to 2023 to select a year. And a dropdown selector to decide which country should be emphasized. Here's the generic plotting function, here's the Jupyter Library pywidgets, and here's the interactive plot
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=285)** where we set the argument's year and country equal to a widget. Now the slider gives us interactivity. The progress of all countries is evident in income and life expectancy, but especially so for Asia. Orange, which now hosts more than half of the world's population.
>
> **[5:18](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=318)** Indeed, interactivity is now a further element that we can exploit to visualize that effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** covid (2), usa (1)
> **Tools:** jupyter (2)
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Summarizing and visualizing categorical data](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=0)** - [Instructor] We move on to categorical variables, those that take a value from a finite, discrete set. How do we describe variation in categorical variables? Well, of course, with tables. We switch from Gapminder to the Whickham dataset discussed by Kaplan in his excellent textbook "Statistical Modeling." The table records interviews with women in Whickham, England in 1973 who were asked if they were smokers. The interviews were followed up 20 years later. When it was recorded, if the women were still alive. The categorical variables in this case, smoker and outcome, are both binary, yes or no. Here are the first five rows of the dataset. Using value counts, we can tally the explanatory and response variable separately. Smoker is the explanatory variable. Outcome is the response. This doesn't tell us much. Other than that all the groups are represented fairly well, smokers and non-smokers, women who survived for 20 years and those who didn't. If we want to see the values as fractions of the total number of records, we add normalize equals true. These fractions are known in [[Statistics]] as proportions. We are looking for an association. That is, we wish to evaluate a claim that the groups of smokers and non-smokers are different
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=96)** with regards to their longevity. So we break down the proportion of outcomes by smoker group, using group by. The resulting series has a two level multi-index. To organize the proportions in a table, we move the inner index to a column using unstack. This stable in fact is a bit surprising. It seems that smoking improves the chance of being alive 20 years later. The problem is that we're not controlling for other variables such as age. If smokers are younger on average at the beginning of the study, then it stands to reason that more of them will be alive after 20 years no matter what. To investigate this puzzle, we use the method that statisticians call stratification. We divide the people in the table, our cases, into age groups. The [[Pandas (Software)|pandas]] function to do this is cut, and we get to pick the boundaries of the bins. We see that the result is another categorical variable, age group. Let's see the counts in each group. We see the young and middle aged women in 1973 are equally represented. Older women, less so. This time, we will first group the data by age group and then by smoker status. In each age group, non-smokers have a better life expectancy. So this data represent an example of Simpson's paradox,
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=193)** a phenomenon in [[Probability]] in statistics in which a trend appears in several different groups of data, but disappears or reverses when these groups are combined. Let's plot. We start by plotting counts separately for our response and explanatory variables. This is a bar plot. The bars could also be horizontal. For that, we switch the kind from bar to bar H. We could even use a pie chart. Now let's try to break up the visualization so we show the outcome by smoker status. We have already created a table group by outcome. Here it is. We can plot that as bars. We can also do a stacked histogram by specifying stacked equals two. This plot illustrates the original suspicious finding that smoking improves the outcome. So let's do stratification. We first create a table, group by age group, and then plot with bars. This is a decent first try, but the multi-labels on the x-axis make this confusing and difficult to parse. We can do better by plotting only the fraction of people who are alive. We select them using lock. We plot with bars again. And here, we do see that in every age group, non-smokers have a slight edge in outcomes.
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=288)** That is Simpson's paradox at work. This completes our tour of summarizing and visualizing distributions with pandas and Matplotlib.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Pandas (Software)|Pandas]] (2), [[Probability]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 9. Introduction to Data Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: Understanding data](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=0)** - [Instructor] In this chapter, we will focus on the task of understanding the meaning of data by modeling. Given a data set with multiple variables, we seek to capture the way in which the variation in one or more response variables is caused by the variation of one or more explanatory variables. A model can be seen as a function that takes explanatory variables as input and outputs response variables. The model will depend on a number of parameters which are usually not known in advance. So to fit a model to the data, we apply to the explanatory variables for each case in our data frame, and we compare the response variables as predicted by the model with the corresponding observed variables. We then modify the parameters of the model until the difference, the residual between the predicted and observed values, is minimized in a precise mathematical sense. Once we have fit a model, it becomes useful for two different goals. First, its parameters may reveal important qualities of the population and the study. Second, we can use the model to predict the response value for sets of explanatory variables that we have not yet observed. Perhaps they're in the future. To choose between alternative models, we can compare the goodness of fit,
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=93)** which is usually a single number derived from the residuals. This is known as in sample goodness of fit, because it tells us how well the model does on the data that was used to fit it. Doing so will tend to overstate goodness of fit, especially with very complex models, the fit will tailor the model to the specific data set that we got rather than the general characteristics of the data. There are mathematical techniques that can adjust in sample goodness of fit by accounting for the complexity of the model. Alternatively, we can set apart some of the data, excluding it from the fit, and then evaluators for those testing data. Doing so is known as out of sample goodness of fit, and it provides a more accurate measure of performance. But enough talk, let's get to our data and to [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Definitions:** known as (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Fitting models to data](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=0)** - [Instructor] To demonstrate model fitting, we return to our gapminder data. We will take the year 1985 and study the relation of child survival rates and number of babies per woman. We tell [[Pandas (Software)|Pandas]] explicitly that the region is a categorical variable. Let's make a quick scatter plot as we learn to do in chapter eight. We map the continents to colors and populations to areas of markers, and since we'll use this plot repeatedly, let's make it into a function. We immediately observe that the numbers of babies per woman decreases with the [[Probability]] of their survival. This makes sense in a sad, pragmatic way. We will fit models using the extensive [[Python (Programming Language)|Python]] package stats models where we'll only sketch the surface of what stat models can do, and we will default to its OLS method, which is found in the formula.api module. OLS stands for Ordinary Least Squares. Least squares means that models are fit by minimizing the sum of square differences between model predictions and observations. Ordinary means that the model coefficients appear linearly in the model formulas, so they multiply the explanatory variables or functions of the explanatory variables. For ordinary least squares,
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=96)** the best fit parameters can be found using the formulas of [[Linear Algebra]]. You can learn about that in any course or textbooks of [[Statistics]]. However, the nice thing about python and stat models is that you don't even need to remember them. In stats models, we specify models using formulas in the teal denotation introduced by Chambers and Hasty in 1992 for the language S. The formulas go like response variable, tilde, model terms. And the simplest possible linear model is just a numerical constant which is denoted one in a tilde formula. Once the model is defined, we fit it and see the result in parameters. There's only one. The conventional number for this concept parameter is intercept. The intercept is in fact just the mean of the data points. Applying the model to our data, which we do with predict, returns the intercept for every case, kind of boring. Still, we can plot this prediction against the original data and evaluate the goodness of fit, clearly not the greatest, since we do not capture any variation. A slightly more complicated model involves separate constants for every continent. In tilde notation, we include the categorical variable on the right hand side of the equation.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=192)** We get one common constant, they intercept, plus offsets for all the groups, minus one of them. To get all the groups, we write the constant as minus one. These parameters are in fact the same as the means of the data grouped by region. Plotting this shows that each constant set the average for a continent. However, Asia for one, has a huge variability here that begs to be explained. Moving to more sophisticated models, we add child survival. We use its value directly, so we call it a main term of the model. Here, the fifth parameter, H5 surviving, tells us that for every additional percent of surviving children, the number of babies per woman, decreases by .15. The constants are now larger, and they have a different meaning. They give us the number of babies per woman for a hypothetical five-year survival rate of 0%. At least visually, our fit is improving. If we wish to have a different slope for every region, we can replace the main term with an interaction term between H5 surviving and region. That's denoted by a colon until the notation. When we do that, we see that the fact of survivor rates is weaker in Africa than in the other continents. And here's the plot of the predictions,
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=287)** where now the slope is different for every continent. India and China, the two larger orange circles seem to be outliers with respect to the fit. Perhaps we can account for them by including another main term for population. The best fit parameter here looks very small because population is in millions, but basically one additional billion people reduces the number of babies per woman by two. The prediction is spot on for India, but a bit too low for China. Here's a quick cheat sheet for setting up models in the tilde notation, which is used in Python stats models, but also statistical languages such as RNS. The one thing we haven't demonstrated explicitly is a so-called interaction where two explanatory variables enter the model multiply together. We also haven't seen that we can include a function of an explanatory variable. Well done. We've learned quite a bit. In the next video, we'll discuss how we can evaluate the goodness of fit of a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (1), [[Probability]] (1), [[Linear Algebra]] (1), [[Statistics]] (1)
> **CLI Commands:** python (3), make (2)
> **Definitions:** is a  (2), means that (2), stands for (1)
> **Env Vars:** ols (2), rns (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Model evaluation and selection](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=0)** - [Narrator] When we analyze data, we often have many different choices in setting up a model, how do we pick the best? Let's resume things where we left them in the last video, with the Gapminder 1985 data and our dataset plotting function, we also add another function to plot the predictions of the models. We consider three different fits, one constant for every region, constants by region plus H5 surviving, and the most complex fit we set up so far, which includes constants by region, H5 survival, group by region, and population. Let's see these three in action. Visually, it looks like the most complex model does best, but we should dig into details. The first thing to do is to compare the residuals. This is how we compute them manually, but we can also get them from the fit object. Histogramming all these residuals together shows that the distribution of errors for the group constant fit is a bit broader, but not by much, and that the other two models are very similar. To distill the comparison into a single number, we can look at the mean squared error of the residuals, which is conveniently available in the fit object. This is in a sense the typical error,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=94)** and it includes a very simple correction for the complexity of the model. These numbers though, are similar and even the best model has a typical error of one child per woman, not great. Beyond the mean square there, there are various more sophisticated ways the statisticians have devised to evaluate goodness of fit. Explaining the mathematics is outside the scope of this course, but we can still try them out. One is the R square statistic, which qualitatively describes the fraction of data variation that is explained by the fit. For a perfect model, R squared would reach one. Again, the R squared for three models are similar. With the most complex model perhaps winning. The R square statistic, however, does not take into account the number of fit parameters, so it'll not penalize over fitting. A model that is very good on the data used to train it but not predictive. The F statistic includes such a correction. The F statistic measures how much each fit parameter contributes to R squared compared to an explanatory variable that has nothing to do with the dataset, in fact, which takes random values. If F is zero, the model explains nothing for a fit of one, the model explains about half of the variation and the larger DF,
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=188)** the greater the explanatory power of the model. With this statistic, we see that the intermediate model, surviving fit, seems to hit the sweet spot. Step models can compute many measures of goodness of fit. Asking for a summary of a fit, we collect them in a nice tabular format. The table includes also the best fit parameters and there estimated errors. The table is where you'd go after you've taken a nice course in [[Statistics]], but before you go off and study a lot of math, let me show you a pragmatic approach to goodness of fit that is typical of machine learning. The idea is to evaluate out of sample goodness of fit. That is, we exclude some of the data from the fit to test the true predictive power of the model. We start by shuffling our data. The [[Pandas (Software)|Pandas]] method sample is really meant to draw a number of random rows, but if we set the number to the length of the dataset, the effect will be the same as shuffling. Then we take 90% of the data for training and the [[Representational State Transfer (REST)|rest]] for testing. Let's train our three models on the training data. The best fit parameters are a bit different than in the original fit, and so are the mean square errors of the residuals. We need to compute them by hand for the test data.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=286)** Here we see that the testing means square error is actually lowest for surviving fit. The same result we found with the F statistic. To get accurate results, it's best to repeat from many different random partitions of the dataset and take the average. This is a very pragmatic, straightforward approach. I recommend it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Pandas (Software)|Pandas]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Testing hypotheses with Monte Carlo](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=0)** - [Instructor] In this chapter, we have seen how modeling can help us understand data by giving us estimates of model parameters. This understanding is necessarily imperfect, because models are never faithful representations of reality. Nevertheless, they can be very useful. But we can also ask a different type of question, a question about the real property of an underlying population to which we have access only through a sample, for instance, the number of voters in a district that support a certain politician. This number really exists, and we could compute it if we could ask any single voter, and if they replied, of course. But in practice, we will have access only to a limited sample, say 1,000 randomly chosen voters. So our estimate is going to be uncertain, but how uncertain? [[Statistics]] offers sophisticated mathematical methods to tackle these kinds of questions. Since, however, this is not a course about statistics, what I want to show you is that we can get answers with a little mathematics by resorting to simulations based on random numbers. Physicists call this Monte-Carlo, because it's very much like gambling. So imagine a very important election is taking place in your city, pitting incumbent mayor, Mr. Brown, against a local celebrity chef, Mrs. Green. You work for the local newspaper, and you're asked to poll your co citizens for their vote. To make things easy for you, we assume you can reach every voter by phone
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=93)** and that every poll voter replies truthfully. Laboriously, you call 1,000 voters and ask for their voting intention. Here's a file of their answers. And here are the measured proportions of vote for the two candidates. It seems that Brown will remain mayor. However, the proportion is going to depend on the specific sample that we drew, how much. Let's simulate 1,000 voter sample when the true proportion is 51 to 49. NumPy has a very handy function for this, random choice. We tell you the votes, and we get the result that's a little different as you expect. If we do it again, we'll get again a different number. So let's repeat the [[Simulation]] many times, 2,000, and collect Brown's share. Plotting a histogram of this sampling distribution, we see that the two share of 51% may result in infractions between roughly 48 and 54 in a sample of 1,000. This means also that if you observe a majority of 51% for Brown in the sample, the winner may very well be Green. Computing summary statistics shows that the error is about 1.5%, and the interquartile range is 50 to 52. Indeed, that means that a true Brown majority of 51% could lead to a poll where Green is a winner
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=189)** about 25% of the times. Journalists must be careful. The fun thing is that once we simulate, it's easy to verify our intuition. For instance, we could check that the slightly stronger true majority for Brown, 55, would almost never result in a poll that is uncertain. And we can show that the larger poll of 10,000 voters would be more precise than a poll of 1,000. Statisticians make precise statements about the uncertainty of polling by giving confidence intervals. They will say, "Given the sampling, 95% of the times, "the true value would fall within this range." How do we get that? A 95% confidence interval means that we can be wrong 5% of the time. We split that equally between too high and too low. So we look for the true vote fraction for which the lowest 2.5% of the sampling distribution lies below .51. 55 is a bit too high. 54 is right. And we look for the true vote fraction for which the highest 2.5% of the sampling distribution lies above .51. That's not 47, that's about 48. So the 95% confidence interval for a finding of 51% in a 1,000 voter poll is between 48 and 54%.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=285)** This is a simple analysis, but it gives you a good sense of how professional pollsters actually estimate their errors, except they have to deal with the complications of reality, such as the fact that any polling may over represent some segments of the population and under represent others. This would be a selection bias, as well as the fact that voters may not respond thoughtfully. This would be a response bias.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Simulation]] (1)
> **Definitions:** is a  (3), means that (2)
> **Analogies:** for instance (2), imagine (1), such as (1)
> **Versions:** 2.5 (2), 1.5 (1)
> **CLI Commands:** make (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [A taste of machine learning](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=0)** - [Instructor] If you're taking this course, there's a good chance you're thinking about moving on to [[Big Data]] and machine learning. That's a technology of huge importance to the world today. It's also a huge subject, covered by many excellent courses in the [[LinkedIn]] library, so all I want to do here is to give you a small taste of machine learning using the tools that we have discussed and using the very comprehensive scikit-learn library. The name machine learning is in fact very descriptive. It's the science of getting computers to learn from data. Machine learning covers many different tasks and use cases. Perhaps the most straightforward application of [[Supervised Learning]] is classification. We teach an algorithm to analyze an input and assign it to one of a few predefined classes by providing a number of examples, inputs that are already labeled. The algorithm will then try to guess the correct label for a set of unlabeled examples. That would be inference. Once more, we will use our Gapminder data and focus on 2023. We'll try to answer a simple enough question. Can we tell the continent of a country just by looking at the macro variables of population, life expectancy, child survival, babies per woman, and GDP per capita? We collect these explanatory variables into a [[Pandas (Software)|Pandas]] DataFrame,
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=94)** and we make a series from the response variable, which will be our class label, the continent. We want the series to be categorical. A categorical variable can be turned into numerical codes as needed by the scikit-learn algorithm. These are the codes. We have already seen the standard modus operandi of machine learning. Divide your dataset into training data and testing data, use the training data to train a model or algorithm, and then use the testing data to verify performance. scikit-learn conveniently provides a function to the divided dataset into training and testing. We will use a classifier known as decision tree. This is an algorithm that splits data into branches, based on the explanatory variables, creating a tree-like model of decisions. Here's an example where we need to distinguish between breeds of dogs. At each node, we are making a decision based on a variable, and we follow different branches based on that, until we find a leaf that matches the input to a class. The point of machine learning is that we don't know what decisions we need to make, which branches. We have to learn them from examples. The machine learning algorithm adjusts the branching point of the decision tree until the labels predicted for the examples match the actual labels, or at least they match them as well as possible.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=191)** So we create our decision tree classifier object and we train it. It only takes a moment. We use the trained tree to assign labels to our test examples. These are integer numbers, but we can match them back to categories. Let's see how we did. Several predictions are indeed correct, but some are just wrong. In fact, scikit-learn tells us that 69% of the predictions are correct. We could have computed this ourselves. scikit-learn can give us a much more detailed report, which answers questions that may be important in practical use cases. A look at Africa, specifically, to explain what these are. The precision number says that out of all the times the classifier chose Africa, 83% were correct. The recall number says that out of all the examples from Africa, 87% were correctly identified. The f1-score is an average of these two, and the support is a number of test dataset examples from Africa. Finally, the averages at the bottom are taken across classes, without weights, and by waiting for the number of examples in each class. We can also plot the confusion matrix, which shows which two levels, the rows, ended up in which estimated class. We want the diagonal here to light up, clearly.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=285)** We see that the classifier did okay with Africa and Europe, but it found it hard to distinguish between America and Asia. Also, some countries in Asia and Oceania ended up classified into Africa. Can we do better? There are many different classification [[Algorithms]] of various degrees of sophistication. One step up from a tree is a random forest, which combines multiple [[Decision Trees]] to improve classification accuracy and to control overfitting. The algorithm builds multiple trees during training and using voting, or averages, to combine their outputs during inference. In scikit-learn, we only have to change, then, the definition of our model, but we train it in exactly the same way. Here's the prediction. The accuracy went up a few percent, but the confusion matrix is similar. This is probably limitation of the data themselves. People can thrive or fail to, in similar ways, in different places on earth. I was glad to serve you this machine learning appetizer. It's a fascinating discipline, and I know that if you're interested, you will find many excellent resources on LinkedIn Learning in the literature and all websites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Big Data]] (1), [[Supervised Learning]] (1), [[Pandas (Software)|Pandas]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (2), find (2), node (1)
> **Definitions:** is an  (2), is a  (2), known as (1)
> **Env Vars:** gdp (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Gapminder model fit](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=0)** - [Instructor] Okay, so we need to find a model for the babies_per_woman variable that has a sufficiently high explanatory power as measured by the F statistic. Let's set up a formula. We'll use the region and age5_surviving. I define a model, fit it, and return the resulting object. Test. Okay, this is almost right. The F value is not quite there, so this may take some experimentation. We could add a second explanatory variable, but the result is actually worse. In fact, we find that using a different function of the age5_surviving variable is just what we need. How about the second power, the square? Perfect.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Identifiers:** babies_per_woman (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 10. Project: COVID-19 Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview: COVID-19 data](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=0)** - [Instructor] In this chapter, we are going to practice what we learned so far in terms of wrangling, summarizing, visualizing, and modeling data using a very rich dataset from the Our World in Data Project: the COVID-19 dataset. COVID-19 was one of the most significant global events of recent history, affecting almost every person on the planet. The dataset offers the opportunity to study the pandemic's progress and its societal impact in real time. This dataset gathers metrics from authoritative organizations like the WHO, CDC, and National Health Ministries, and it includes data from nearly every country in the world. To reduce the size of the file, I kept only some of the variables of the original dataset. Looking at the dataframe shows several familiar macroeconomic indicators as well as a few COVID-specific measurements. In the next three videos, we'll work to summarize, visualize, and model this dataset, and there will be wrangling throughout. For visualizations, we'll use a modern plotting package, Plotly, which can make interactive [[JavaScript]]-based plots that can be exported very easily to webpages. To give you a taste of what Plotly can do, let's look at the impact of the first year of the pandemic in Europe. I down select the dataset by choosing countries in Europe and the date of December 31st, 2020.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=96)** Here it is. A choropleth plot is a map where the colors of geographic features, here countries, are mapped to a variable. This is very impressive with so little code. The interactivity allows us to [[Zoom]] and pan and to get dataset specific information as we hover. In the spectrum of visualization packages, Plotly is less about exploring data than about presenting them to others in a clear and coherent fashion. Let's get started with our dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Zoom]] (1)
> **Env Vars:** covid (3), cdc (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Summarizing COVID-19 data](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=0)** - [Instructor] Let's start our analysis of the COVID-19 dataset. We will look at cumulative quantities such as total cases and total deaths at the end of the pandemic. Grouping by country, and asking for the last value gets us variables in 2024 indexed by country. Maybe the most obvious question we can ask of the data is which country had the most cases? [[Pandas (Software)|PANDAS]] offers a convenient built-in method and largest to see the largest entries in a series. Here it is, the United States on the top. As printed, this series looks a bit [[Vanilla]] and it's not so easy to parse. We get a cleaner look by converting it to a dataframe. Even better, we can apply some styling to the numbers using style format. I like this very readable look. I will make generic functions to apply to series and dataframes, and I will stick those functions into PANDAS, adding methods to the series and data frame classes. These methods are written as anonymous Lambda functions. This trick is known as monkey patching, which is not entirely nice, but sometimes it's just too easy not to do. Here it is at work. So it's clear that the US had the most cases. What about the most deaths though?
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=96)** Let's look at those and compare. The method enlarges generalizes nicely to a dataframe if we pick a column to sort by, again the US, you may be thinking that the US had such a large number of cases and deaths just because it has a larger population than other countries. That's a good point. We should then look at cases and deaths per million people of population. We add columns for those new variables to our data frame and make the table again. Ah, this changes the picture significantly. With a few smaller countries looking definitely worse. Dividing deaths by cases gives us the death rate. Let's create that column on the fly using the method assign on the dataframe, the death rate needs to be shown with at least one decimal, so I changed the style. Given to the nice method. Peru has a very high death rate compared to other countries. Perhaps Peru had special challenges in healthcare access. The other reason may be that the cases were under-reported, but the deaths were not. In fact, for some countries, both the number of cases and deaths due to Covid may be suspect, cases may go unreported depending on the testing on healthcare logistics. While the criteria for Covid-attributed deaths may be different in different countries.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=189)** To sidestep these limitations and get a sense of the true impact of the pandemic across the world, the data set includes numbers for excess deaths, which are calculated by comparing cumulative deaths from all causes during the pandemic, with a projected baseline of expected deaths based on previous years. These statistic captures not only deaths directly attributed to COVID-19, but also those that may have occurred due to healthcare disruptions, changes in behavior and other pandemic-related factors. We look at the normalized total excess deaths, computed per million people. Note that this number, however, is not available for all the countries. So the top 10 again, and this confirms Peru as a country that was heavily and in fact it's the only country where the excess deaths are less than their reported Covid deaths. The statistic highlights a few other countries that had severe damage, including Russia, Bolivia, and other Central American countries. There are many more summaries and explorations you can do. Do try a few.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Vanilla]] (1)
> **Env Vars:** covid (2), pandas (2)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), picture (1)
> **Definitions:** known as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Visualizing COVID-19 data](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=0)** - [Instructor] Ready to visualize? We load our dataset and compute the normalized cumulative quantities. We left our exploration with the countries that showed the most estimated excess deaths. What do these countries have in common? It's a question for modeling, but one that we can begin to explore by plotting. So is population predictive? Is a continent especially bad? We plot those variables against excess deaths, encoding their values with horizontal position, X, and color, respectively. We don't seem to see much correlation here. To improve this plot, we exclude points without a defined excess death rate. We drop now so that the axes are scaled right, and we ask Plotly to use country names when we hover around the point. Then it will be clear which point is which country. What about income? That's not very predictive, either, and surely vaccinations may be indicative. They're not. Most of the deaths occurred before vaccinations were available. It seems we're not getting anywhere. Let's take a different tack and plot total cases as a functional date grouped and colored by country. This plot certainly has lots of color, but it's hard to see much here,
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=92)** other than the large number of cases in the US and in China from 2023. So let's focus on the first two years by setting the range of the plot. Plotly is smart enough to accept dates given as strings. Better, but I would say that the trends are obscured by the different times at which the pandemic began in each state. Let's fix that. We find a date at which each country reached at least five total cases. Ah, this is a bit tricky to do in [[Pandas (Software)|Pandas]]. It didn't work to do the easy thing, group the data by country and then apply our condition. A group series doesn't support that. This is the kind of problem in Pandas where you need to search the internet extensively to find a solution. Sometimes it's easier to just go around it, so you can then filter first, then group by country, and take the first role. This works. From this dataset, we need only date and country, and we use the country's index. We will call this the T0 of the pandemic for each country. Next, for each role, we compute the time elapsed from the appropriate T0. Since the COVID-19 data frame and the T0 series are both indexed by country, Pandas will now match each row to the correct T0. Very good.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=186)** We'd better convert this time deltas to integers, though, otherwise we may have trouble plotting. We use a method from the Pandas daytime accessor DT to extract the day from the time delta, and we assign the resulting value to new column. Okay, we are ready to plot using this new time variable. Ah, pandemics develop exponentially, at least at the start, so it's appropriate to plot these numbers logarithmically by setting log_y equals True. We're getting there, and interactivity helps us make sense of this plot, but I still think there are too many traces and too much is happening here. Effective visualization often requires a careful selection of what we wish to show. We will concentrate on larger countries, more than 50 million people, and over the first six months of the epidemic. Here's the plot. This is almost publication ready. We can compare different countries by looking for the traces and hovering over them. We will recolor by continent. We will add the country name to the tool tip that you get when you hover. We will change the color scheme and the labels along the axis. We can see here from the color that the number of cases grew very rapidly in Europe and perhaps fastest in the US, whereas it was more slow in Africa.
>
> **[4:39](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=279)** Again, this would be correct for countries in which testing was not too incomplete. France here is strange. Maybe cases were reported differently. We can provide more context by showing straight lines corresponding to the number of cases, doubling every two, five, and 10 days. We compute the data points for those lines manually using an exponential formula. From day zero to day 150, the initial number of cases, five, is multiplied by two with an exponent given by the number of doublings, so that's 150 divided by the doubling times. We add those lines to the plot using add_scatter, and we also annotate those lines using update_layout with the annotations keyword. I will admit that I've picked the coordinates of these annotations manually. This is beautiful. We write it out to an [[HTML]] file. Then we can download the file, which is pure HTML, and look at it in our browser. This is ready for inclusion on a website or within a dashboard or anywhere you need it, and interactivity is preserved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[HTML]] (2)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** html (2), covid (1)
> **Code Identifiers:** add_scatter (1), update_layout (1)
> **Definitions:** is a  (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Modeling COVID-19 data](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=0)** - [Instructor] In this video, we will try to explain the number of total deaths from Covid using an ordinary [[Linear Regression]] on a variety of explanatory variables. Here's our dataset again. As we already discussed in this chapter, it would be more representative to look at the number of excess deaths, since differences in the reporting of total deaths may distort the picture. However, the total excess value is only available for a smaller number of countries, too few to fit the model accurately. We will augment the dataset by adding the normalized number of deaths, and look at all values at the end of the dataset in 2024. The final recorded incidence was about 1,000 per million. With a standard deviation of approximately another 1,000. This is the variation that we are looking to explain. We can also look at it in a histogram, where we'll try a number of different explanatory variables. Most of these are self-explanatory, in fact, but let me tell you that extreme poverty is the percentage of humans with income or consumption per person below about $2 in 2017 dollars, and the human development index is a summary measure of lifespan, health, education, and standard of living. Trying a couple of models randomly gives us very high mean square residuals, and low F value [[Statistics]].
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=93)** Let me remind you that models here are set using the tilde denotation, where the outcome variable goes on the left, and the explanatory variables that we are considering on the right. After we fit, we can look at square residual, MSC (indistinct), we can look at the R squared and F statistics, and we use the F statistic to find the best model. Not the model with the least residuals, but the model with the most explanatory power. We can't just start from one explanatory variables and add all the others in sequence. This surely will keep producing the residuals, but it will weaken the explanatory power of the fit. Instead, we will systematically try every combination of the explanatory variables. We can do this with either tools combinations, which returns all the combination, the subsets of a given length. So here's a function to fit the model given as a list of variables. We build the tilde formula by joining strings with pluses. This works fine. Next, we iterate over the number of variables and all the combination of that length using a double (indistinct) comprehension. Isn't it lovely? From each fit, we collect the F statistic. To find the best model in the dictionary, we use max over the dictionary keys, providing a custom key function, get, that will access the value.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=186)** Median age. That's very interesting. Older countries had more deaths. In fact, from the summary of the fit, we see that one additional year in the median aged increased deaths per million, by almost 100. Makes sense. We may ask if the explanation have changed during different phases of the pandemic. To find out, we'll divide up the dataset by the year. The date column can provide the year if we use the method dot year in the data frame accessor DT. And here's a function to select values for each country at the end of a given year. Finally, we iterate the fitting over all the combinations of variables. It turns out that median age is a very predictive variable that works best alone, at least within the limits of this dataset. Only the first year of the pandemic, we see that the human development index is a better predictor. Interesting. The fit coefficient there is positive. In that first year, it was the countries with the highest development index that had the most deaths. Could it be just because of a bias in the reporting, which was more accurate in more developed countries? Perhaps that's the case. If we look instead at excess deaths, although the data set is smaller, the sign of the regression is reversed. More developed countries had fewer deaths. This completes our exploration of the COVID-19 dataset, but you can certainly continue on your own.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=281)** There's a lot here that can be learned and understood.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Linear Regression]] (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Env Vars:** msc (1), covid (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Extending your Python data analysis skills](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=0)** - [Instructor] We've reached the end of this course. Congratulations on following along through some rather challenging material. My goal in this course was to show you how standard [[Python (Programming Language)|Python]], NumPy, and [[Pandas (Software)|pandas]] can be used as robust and flexible tools for many data analysis applications. And now we can use them together to acquire, summarize, visualize, and model real-world data sets. You can continue on your road to mastery with the many excellent courses in the [[LinkedIn]] Learning library. The LinkedIn Learning AI coach will recommend the course that's most useful for you. If you like the style of this course, you may enjoy my other course on Python: Programming Efficiently. And if you're an engineer or scientist or a student of those disciplines, you could check out my course on Python for engineers and scientists. If you like to learn on books, I recommend "Think Python" by Allen Downey. now in its third edition, and the "Python [[Data Science]] Handbook" by Jake VanderPlas. If you get stuck, you can get help in internet forums. You'll find that Python has a very helpful and supportive community. Or ask your favorite large language model, but be sure to check the answer with a critical eye. And finally, be Pythonic. Python is an expressive and elegant language, and it's worth taking the time to find the most direct and inspired solutions to your programming problems. Many have said that what's best about Python
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=95)** is that it's a language that makes you happy. I agree. So go out and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[LinkedIn]] (2), [[Pandas (Software)|Pandas]] (1), [[Data Science]] (1)
> **CLI Commands:** python (8), find (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Michele Vallisneri]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/complete-guide-to-python-data-analysis-4571000/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Statistical Data Analysis

## Path Context

### In [[Develop Your Data Analysis Skills]]
← [[Using Tableau to Discover Powerful Business Insights]] | **5 of 10** | [[Data Science Foundations- Data Mining in R]] →

### In [[Advance Your Python Skills for Data Science]]
← [[Data Science Foundations- Python Scientific Stack -CoderPad-]] | **4 of 6** | [[More Python Tips, Tricks, and Techniques for Data Science]] →

## Appears In

- [[Develop Your Data Analysis Skills]]
- [[Advance Your Python Skills for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis
- [[Python Functions for Data Science]] — Python (Programming Language), Data Analysis
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)