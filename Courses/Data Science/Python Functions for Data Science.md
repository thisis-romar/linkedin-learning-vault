---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-functions-for-data-science-28584261
url: "https://www.linkedin.com/learning/python-functions-for-data-science-28584261"
duration_minutes: 95
duration: 1h 35m
level: Intermediate
updated: 1/6/2026
learners: 12401
skills:
  - Python (Programming Language)
  - Data Analysis
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGnFiXiVWQong/learning-public-crop_675_1200/B56ZrwV5.nL8AY-/0/1764968865986?e=2147483647&amp;v=beta&amp;t=FS5a1mj0v5I-XnALS8VwfOTkLuhu3d63sUVvDz-LQLc"
linkedin_topic: Data Science
learning_paths:
  - '[Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)'
prev_courses:
  - '[Data Wrangling in R](Data%20Wrangling%20in%20R.md)'
next_courses:
  - '[Basics of Data Visualization Analysis](Basics%20of%20Data%20Visualization%20Analysis.md)'
path_nav: '[{"path":"Moving from Data Analyst to Data Scientist","position":3,"total":11,"prev":"Data Wrangling in R","next":"Basics of Data Visualization Analysis"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/python-programming-language
  - skill/data-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20Functions%20for%20Data%20Science.md)

![Python Functions for Data Science](https://media.licdn.com/dms/image/v2/D560DAQGnFiXiVWQong/learning-public-crop_675_1200/B56ZrwV5.nL8AY-/0/1764968865986?e=2147483647&amp;v=beta&amp;t=FS5a1mj0v5I-XnALS8VwfOTkLuhu3d63sUVvDz-LQLc)

# Python Functions for Data Science

> Explore the capabilities of Python in data science as you learn about its most essential functions. Get familiar with core Python tools that support real analysis and decision-making, with a focus on making your code more readable and reusable. Dive into data manipulation with NumPy and pandas. Master the art of visualization using matplotlib and seaborn to spot trends and relationships. Discover 

> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261) | 1h 35m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Use Python like a data scientist](#use-python-like-a-data-scientist)
  - [Getting started with Python](#getting-started-with-python)
- [**1. Core Python Essentials**](#1-core-python-essentials) (4 videos)
  - [Inspect data for validation](#inspect-data-for-validation)
  - [Handle magnitudes and precision in data](#handle-magnitudes-and-precision-in-data)
  - [Aggregate data with basic functions](#aggregate-data-with-basic-functions)
  - [Sort, filter, and transform your data](#sort-filter-and-transform-your-data)
- [**2. NumPy and SciPy Fundamentals**](#2-numpy-and-scipy-fundamentals) (7 videos)
  - [Create NumPy arrays in Python](#create-numpy-arrays-in-python)
  - [Index and slice NumPy arrays](#index-and-slice-numpy-arrays)
  - [Reshape NumPy arrays](#reshape-numpy-arrays)
  - [Transform and scale NumPy arrays](#transform-and-scale-numpy-arrays)
  - [Extract key values with NumPy](#extract-key-values-with-numpy)
  - [Solve matrix-based problems with SciPy](#solve-matrix-based-problems-with-scipy)
  - [Run statistical functions with SciPy](#run-statistical-functions-with-scipy)
- [**3. pandas for Data Manipulation**](#3-pandas-for-data-manipulation) (6 videos)
  - [Create pandas series and dataframes](#create-pandas-series-and-dataframes)
  - [Extract data subsets from pandas objects](#extract-data-subsets-from-pandas-objects)
  - [Modify pandas objects](#modify-pandas-objects)
  - [Combine data from pandas objects](#combine-data-from-pandas-objects)
  - [Group data from pandas objects](#group-data-from-pandas-objects)
  - [Transform data with pandas apply()](#transform-data-with-pandas-apply)
- [**4. Visualization Essentials**](#4-visualization-essentials) (5 videos)
  - [Create line and scatter plots](#create-line-and-scatter-plots)
  - [Display categorical distributions](#display-categorical-distributions)
  - [Explore numerical distributions](#explore-numerical-distributions)
  - [Visualize pairwise relationships](#visualize-pairwise-relationships)
  - [Organize your visualizations](#organize-your-visualizations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Apply functions to data science](#apply-functions-to-data-science)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use Python like a data scientist](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=0)** There are numerous functions in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) that support [Data Science](../../Topics/Data%20Science.md), and taking time now to get familiar with some of the most powerful functions can help sharpen your Python and data science skills and advance your career. Hi, I'm Lavanya Vijayan. I'm a data scientist and a STEM educator. In this course, I'll show you the functions that are most commonly used in Python by data scientists. You'll get to explore essential built-in functions, then dive into libraries like NumPy for working with numerical data, SciPy for statistical methods, and [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) for [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md). You'll also get familiar with data visualization techniques with Matplotlib and Seaborn. By the end of this course, you'll be well-prepared with a toolkit of functions and best practices to improve your versatility in working with data in Python. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Science](../../Topics/Data%20Science.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **CLI Commands:** python (4)
> **Env Vars:** stem (1)

#### [Getting started with Python](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=0)** To make the most of this learning experience, it's important to begin with a strong foundation. Before you get started, make sure your coding environment is set up so you can practice each concept in real time. In this course, you'll be applying what you learn through hands-on exercises, so having everything ready will help you follow along smoothly. To get the most out of each lesson, I have a few quick tips to share. First, I recommend that you start by making sure [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is set up on your computer. You can go to [python.org/downloads](https://python.org/downloads) and download the installer for the latest version of Python for your operating system. Next, I recommend that you get Jupyter set up on your computer. For installation instructions, go to [jupyter.org/install](https://jupyter.org/install). Next, download the exercise files provided with this course so you can easily follow along. As you move through each lesson, open the matching exercise files to practice the concepts in real time, and feel free to pause and rewind at any point to revisit a concept or block of code. Throughout the course, you'll need to run each code cell in the Jupyter Notebook as you follow along. Note that to do this on a Mac, you'll press Shift + Return, and on a [Windows](../../Glossary/Service/Windows.md) or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), you'll press Shift + Enter. Finally, I highly recommend that you practice the techniques you're learning as you go and try things out with your own data. And once you've got Python and Jupyter set up and exercise files open, you're ready to dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** python (4), make (2)
> **Prerequisites:** set up (4), install (1), you'll need (1)
> **Tools:** jupyter (4)
> **Exercise Files:** download the (2), exercise files (2)
> **UI Navigation:** go to (2), open the (1)
> **URLs:** [python.org](https://python.org) (1), [jupyter.org](https://jupyter.org) (1)
> **Warnings:** note that (1)


### 1. Core Python Essentials

[↑ Back to Table of Contents](#table-of-contents)

#### [Inspect data for validation](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=0)** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) has several fundamental built-in functions that come in handy when working with data. In this lesson, I'll show you how to use three essential built-in functions in Python so you can work with your data more efficiently and effectively. Print() is the first one. The print() function takes in data as input and displays that data to the screen. Let's say that I have a variable named “temps” containing a list of temperature values. To display this data to the screen, I would call the print() function and pass in the variable temps. Another useful built-in function that's fundamental in Python is input(). The input() function takes in a prompt, displays the prompt on the screen, allows the user to type a response to the prompt, and returns the response as a string. When you're running experiments or simulations in [Data Science](../../Topics/Data%20Science.md), you'll often need to decide how many samples to generate. You can use the input() function to capture that number directly from the user. Here, I've called the input() function and passed in the prompt “Enter the number of samples to generate:” and I've saved the output in a variable named “sample_size”. Then I've printed sample_size. When I run this, I'll be prompted and I'll go ahead and type in “5” as a sample size and hit enter. Then my response gets printed. Another commonly used built-in function in Python is type(). You can use the type() function to quickly inspect what kinds of objects you're dealing with. The type() function takes in an object
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=93)** and tells you the data type of that object. Here are some values that might come from a CSV file or user input. I've defined the variables “age”, “scores”, and “avg_score”, which represents the average of the scores. It's good practice to check the data types of the objects you're working with. I've called the type() function on each variable I define to get its data type. Check out the output. Note that age is a string here instead of a number. CSV files typically load all values as strings. So when you're working with data from CSVs, it's good to check the data types early on so you're informed and prepared. For example, if you need age to be a numerical value for your data analysis, you could then convert it into an integer or a float when needed. Next, scores is a list. More specifically, it's a list of integers. So the first element in scores, for example, is an integer. Lastly, avg_score is a float. Now that you know how to use the print(), input(), and type() functions, take a few minutes to practice them in your own code. Getting comfortable with these basics will make every future data task faster and smoother.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** python (4), make (1)
> **Code Identifiers:** sample_size (2), avg_score (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** csv (2)
> **Analogies:** for example (2)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)

#### [Handle magnitudes and precision in data](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=0)** Properly handling magnitudes and controlling numeric precision is essential for interpreting your data and keeping your results readable when using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). In this lesson, I'll introduce you to two built-in Python functions that help you do this: abs() and round(). The abs() function returns the absolute value of a number. In other words, its distance from zero on the number line, regardless of whether it's positive or negative. This is useful in situations when you only care about magnitudes-- for example, the size of an error or the distance between two values. Let's say you're analyzing monthly [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) of a business, and you're working with profit values. Your goal is to get the magnitude of the gain or loss for each month. Here I've defined the variables: sept_profit and oct_profit. They represent the profit value for September and October respectively. And I've called the abs() function on each variable to get the absolute value of the profit for September and then for October. I've also printed out the variables and the absolute values. Here, profit in September is negative, which represents a loss. Then in October, profit is positive, which represents a gain. Applying abs() gives you the magnitude of each value. The magnitude of the value in September is 250, while the magnitude of the value in October is 400. Next is the round() function, which allows you to control decimal precision. By default, it rounds to the nearest integer, but you can also round
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=92)** to a specified number of decimal places. You'd pass in a second argument to specify how many decimal places to keep. In [Data Science](../../Topics/Data%20Science.md), you often perform calculations that produce long floating point numbers. For example, if you measure the accuracy score of a model, Python might return something like this. Here, the variable accuracy has the value 0.918372645. That's the raw value, but it's not easy to read. You can apply the round() function to make it more readable, and you have options for how you round. For instance, you can pass in 2 as a second argument to round to two decimal places, and you can pass in 3 to round to three decimal places. This makes the result easier to interpret and report. The same principle applies to percentages, monetary values, or statistical results. By combining abs() and round(), you can better control the way numeric data is represented and interpreted in your analysis. These small adjustments can make your results clearer and easier to communicate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** python (3), make (2)
> **Analogies:** for example (2), for instance (1)
> **Code Identifiers:** sept_profit (1), oct_profit (1)
> **Versions:** 0.918372645 (1)
> **Definitions:** in other words (1)

#### [Aggregate data with basic functions](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=0)** Aggregating data into quick summary [Statistics](../../Skills/Data%20Science/Statistics.md) is often the first step in exploratory data analysis. It's important to start with getting a high-level sense of your data. In this lesson, I'll show you how to aggregate values in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using four built-in functions: min(), max(), sum(), and len(). You'll leave knowing how each works and how to use them to help summarize your data efficiently. Suppose you have a list of daily temperatures. Here I've defined a variable-- temps --and assigned it to a list of temperature values. You can use min() to find the smallest value in the dataset. Here I've called the min() function and passed in temps. I've also used the print() function so that the minimum value gets printed. This tells you that the coldest temperature reading from the series is 68. Next, you can use max() to identify the largest value. Here I've called the max() function and passed in temps. I've also used the print() function again to print out the maximum value. This shows you that the hottest temperature reading in this dataset is 76. Then you can use len() to get the length of this list, which also tells you how many values are in the dataset. Here I've called the len() function and passed in temps and I've printed the result. Running it tells you that you have 10 temperature readings. Now let's say you want to get the average temperature reading from this data. To do this, you'll need to divide the sum of the temperatures by the number of temperature values. First, you can use sum()
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=94)** to calculate the total of all the values in temps. Here I've called the sum() function and passed in temps. Next you can incorporate sum() and len() together to calculate the average temperature. Here I divide two values. The first value is the result of calling the sum() function on temps. The second value is the result of calling the len() function on temps, and I use print() to display the final result. So the average temperature reading from this data is 71.9. So with just a few lines of code, you can start summarizing a dataset and build intuition before moving on to more-advanced analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), find (1)
> **Versions:** 71.9 (1)
> **Prerequisites:** you'll need (1)

#### [Sort, filter, and transform your data](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=0)** Raw data isn't always in the form you need. Often you'll want to sort it, filter out certain values, or transform it into a new structure before moving on to deeper analysis. In this lesson, you'll learn how to use four built-in functions that help you rearrange and prepare data: sorted(), map(), zip(), and filter(). These functions are powerful tools for ordering, pruning, and transforming sequences in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Let's start with sorted(), which arranges values in ascending order by default. Here I've defined a variable named “scores” that's assigned to a list of scores. I've printed the scores as they are. Then I've called the sorted() function, passed in scores and printed the result. This quickly ordered the data. You can easily tell that the lowest score was 79 and the highest score was 93. Now it's also possible to sort in descending order. You can call sorted(), pass it scores, and then pass in reverse=True. This will sort the values in reverse from largest to smallest value. And it worked. Next on the agenda is the map() function. Map() lets you apply a function to every item in a sequence. For example, suppose you want to convert a list of temperatures from Fahrenheit to Celsius. Here I've defined the variable temps_f, which represents a list of temperature values in Fahrenheit. Then I've defined the variable temps_c by converting the values in temps_f to Celsius.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=93)** Starting from the inner to outer expressions, I've called the map() function. First, I passed in a lambda function which takes in an argument x and returns (x - 32) in parentheses times five divided by nine, which converts x from Fahrenheit to Celsius. As a second argument for map(), I've passed in temps_f, which indicates that the lambda function will be applied to every value in the temps_f list. Outside of that, I've called the list() function, which ensures that the final output is in the form of a list. Each Fahrenheit value has been transformed using the conversion formula. The zip() function combines multiple sequences into pairs. Imagine you have a list of student names and a list of their scores. Here I've defined the variable “names”, assigned to a list of student names, and the variable “scores”, assigned to a list of the students' scores. To pair up each student's name and score, I first called a zip() function and passed in names, followed by scores. Outside of that, I've called the list() function to ensure that the final output is in the form of a list. I've saved this in the variable “paired”, which I can print to get the result. In the list that's displayed, there are tuples representing each pair of elements aligned from the two original lists. Finally, filter() selects only the values that meet a condition. For example, suppose you want to extract only the passing scores. Let's say for this example
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=185)** that passing is 75 or higher. Here I've defined the variable “scores”, which is again the list of scores. Then I've defined the variable “passing”. To do this I've first called the filter() function, passing in a lambda function that takes in an argument x and returns whether x is greater than or equal to 75, followed by scores. So filter() will use the lambda function to evaluate which values in the scores list meet the condition you want to filter by, and those values will be kept. Other values will be excluded. Outside of that, I've called the list() function to ensure that the final output is a list. There. The output is a filtered list containing just the scores that are 75 or higher. By using sorted(), map(), zip(), and filter(), you can sort, transform and restructure your data efficiently-- all essential steps in preparing your data for meaningful analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)


### 2. NumPy and SciPy Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Create NumPy arrays in Python](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=0)** NumPy arrays are the foundation of numerical computing in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and the performance-optimized backbone of nearly every [Data Science](../../Topics/Data%20Science.md) workflow. They make it possible to handle large volumes of numeric data efficiently. In this lesson, you'll learn how to create one-dimensional and multi-dimensional arrays using the NumPy library. Let's start with one-dimensional arrays. A one-dimensional array is a sequence of values arranged in a single row, similar to a list, but optimized for numerical operations. First import NumPy. The convention is to import it using the alias “np”. The np.array() function converts existing Python [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), like lists or lists of lists, into NumPy arrays. Here I've defined a variable named “array1”. I've called the np.array function and passed in a list of numeric values. Running this prints a one-dimensional NumPy array containing the same values. Even though this looks like a Python list, NumPy arrays are much faster and more memory-efficient, which is why they're used for numerical computations in data science. You can also create multi-dimensional arrays, which are arrays that contain rows and columns-- essentially, a matrix. NumPy can be used to represent these multi-dimensional structures. Here I've created a two-dimensional array by passing in a list of lists, where each inner list represents a row. This array represents some data across two variables. I called np.array and passed in a list of lists
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=92)** where the first row is 1, 2, 3. The second row is 4, 5, 6, and the third row is 7, 8, 9. This produces a three-by-three array or a three-row by three-column grid of numbers. NumPy also provides several functions for generating arrays filled with specific types of values. These are especially useful when you need to initialize data structures or generate test data. Here I've defined four arrays using functions from NumPy. I've called np.zeros() and passed in 5, which creates a NumPy array containing five 0s. I've called np.ones() and passed in the tuple 2, 3, which creates a two-by-three NumPy array filled entirely with 1s. The next function is np.arange(), which creates an array by stepping through values with a fixed increment. I've called np.arange and passed in the arguments 0, 10, 2, which creates a one-dimensional NumPy array by stepping through values starting at 0, stopping before 10, with a fixed increment of 2 each step. Finally, I've called np.arange() and passed in the arguments 1, 10, 2, which creates a one-dimensional NumPy array by stepping through values starting at 1, stopping before 10, with a fixed increment of 2 each step. Check out what gets displayed. As you can see, the variable zeros is an array of five 0s. The variable ones is a two-by-three array of 1s. The variable
>
> **[3:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=184)** evens is an array containing 0, 2, 4, 6, 8. And the variable odds is an array containing 1, 3, 5, 7, 9. Another function to know is np.linspace(), which creates an array by dividing a range into a fixed number of evenly spaced points. While np.arange() steps through a range by a fixed increment, np.linspace() divides a range into a specified number of points. This is often used when plotting or sampling data. Here I've defined a variable named “evenly_spaced”, and I've called the function np.linspace() and passed in 0, 1, 5. This produces five evenly spaced values between 0 and 1, including both end points. So while np.arange() is based on step size, np.linspace() is based on number of values. For simulations, experiments, or generating sample data, NumPy’s random module is extremely useful. The np.random.randint() function generates random integers within a specified range. Here I've defined a variable named “random_integers”, and I've called the function np.random.randint(). Here's what this does. The first two arguments 0 and 100 specify the range: random integers from 0 up to, but not including, 100. The size=(3, 4) argument creates a three-by-four array of random integers. Great job!
>
> **[4:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=277)** You've created arrays from lists using np.array(); arrays filled with zeros or ones; evenly spaced arrays using np.arange() and np.linspace(); and arrays with random integers using np.random.randint(). These are the essential building blocks for everything else you'll do with NumPy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Data Science](../../Topics/Data%20Science.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **Definitions:** is an  (3), is a  (2)
> **CLI Commands:** python (3), make (1)
> **Code Identifiers:** evenly_spaced (1), random_integers (1)
> **Analogies:** similar to (1)

#### [Index and slice NumPy arrays](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=0)** When you're working with arrays in [Data Science](../../Topics/Data%20Science.md), you'll often need to access and extract specific values or subsets of data. NumPy makes this easy with indexing and slicing. In this lesson, you'll learn how to use both techniques to extract individual elements and portions of data from NumPy arrays. First, let's import NumPy and create a simple array to work with. You can access an individual element by its index. Just like lists in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), NumPy uses 0-based indexing. That means the first element is at position 0, the second element is at position 1, and so on. To get the element at a specific index, you type in the name of the array, followed by the index position within square brackets. If you run this, the first element printed is 10 and the third element is 30. You can also use negative indices to access elements starting from the end. For example, to get the last element you'd type in array1d[-1]. This prints 50, the final value in the array. Now let's talk about slicing. Slicing lets you extract a range of values instead of a single element. NumPy slicing follows the same start index inclusive and index exclusive rule as Python lists. To slice a NumPy array, you type in the name of the array followed by the start index, colon, end index in square brackets. Here array1d[0:3] gives you elements at position
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=94)** 0, 1, and 2. Then array1d[1:4] gives you elements at positions 1, 2, and 3. You can also omit one side of the slice to select everything before or after a point. Here, array1d[2:] extracts all elements from index 2 onward. Then array1d[:3] extracts all elements up to but not including index 3. For multi-dimensional arrays, you can use a comma-separated notation to index rows and columns. Array2d[1] returns the entire second row, which is the array 40, 50, 60. Array2d[:, 2] Array2d[:, 2] returns all rows, but only the third column, which is the array 30, 60, 90. Indexing and slicing are some of the most common operations you'll perform when working with arrays. They allow you to isolate exactly the data you need so you can clean and prepare your data for analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** python (2)
> **Analogies:** just like (1), for example (1)

#### [Reshape NumPy arrays](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=0)** Being able to inspect and reorganize an array is crucial in [Data Science](../../Topics/Data%20Science.md), especially when preparing data for computations or machine-learning models. In this lesson, you'll learn how to check the dimensions of an array and reshape it into a new structure using .shape and .reshape. Let's start with importing NumPy and creating a simple two-dimensional array. To inspect this array's dimensions, use the .shape attribute. Do array.shape and print it out. This tells you that the array has two rows and three columns. Now you can change the shape of the array using the .reshape method. Here I'll convert this two-by-three array into a three-by-two array. I've called array.reshape and passed in 3, 2. When you reshape, the total number of elements must stay the same. The original array has six elements and the reshaped version also has six. You can also use negative one as a placeholder when you only want one dimension to be inferred automatically. Here I've used np.arange to define an array with 12 values. Then I've called array.reshape and passed in 3, -1. NumPy automatically calculates that the second dimension should be four, given that the original array has length 12, and you want to make three rows. This output contains the same values as the original array, but reorganized from a flat array
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=92)** to a three-by-four array. Using .shape and .reshape helps you control the structure of your data. This flexibility becomes especially important when feeding arrays into [Algorithms](../../Skills/Software%20Development/Algorithms.md) that expect specific input types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (1)

#### [Transform and scale NumPy arrays](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=0)** [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) is an important step of preparing your data for analysis or modeling. Transformations can include adjusting values, shifting them, or combining arrays to create new features. Another key preprocessing step is scaling, which means changing the size or range of your values in a consistent, proportional way. NumPy makes both transformation and scaling easy to perform using vectorized operations, which apply calculations to entire arrays at once. In this lesson, you'll learn how to transform and scale arrays using NumPy. Let's start by importing NumPy and creating a NumPy array representing some numerical data. I've defined the variable data using np.array and passing in a list of numbers. A helpful feature of NumPy is that you can perform operations directly on entire arrays without using loops. These operations apply element by element, which is known as vectorization. Let's look at a few examples with the data array that was just defined. Data + 5 creates an array where 5 has been added to each value from the original array. Data - 5 creates an array where 5 has been subtracted from each value from the original array. Data * 2 creates an array where each value comes from the original array multiplied by 2, and data / 10 creates an array where each value comes from the original array divided by 10. Each operation is applied
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=92)** element by element. It's much faster than looping through individual elements in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Each of these is an example of transforming the data, modifying the values using arithmetic operations. The multiplication and division examples also demonstrate scaling because they change the size or range of all values proportionally. You can also combine arrays through element-wise operations. I've defined a second array called data2 using np.array and passing in a list of numbers. Then I've multiplied data one times data2 and printed the result. Here, each value in data is multiplied by the value at the same position in data2. This is another vectorized element-wise transformation. Vectorized operations make NumPy efficient and concise, allowing you to transform and scale entire arrays with a single line of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** known as (1), is an  (1)

#### [Extract key values with NumPy](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=0)** Summarizing numerical data is essential for understanding patterns and making decisions. In this lesson, you'll learn how to compute summary [Statistics](../../Skills/Data%20Science/Statistics.md) and identify extreme values using NumPy's built in methods. Let's start with importing NumPy and creating an array of data. Now let's calculate some key statistics about this data using functions from NumPy. Each of these functions summarizes the values in the dataset in a different way. To compute the mean value of the data, I've called np.mean. To compute the median value of the data, I've called np.median. To compute the variance of the values in the data, I've called np.var. To compute the standard deviation of the values in the data, I've called np.std. To compute the minimum value in the data, I've called np.min. And to compute the maximum value in the data, I've called np.max. I've passed in data when calling each of these functions. You can also find the index position of the minimum and maximum values by using functions from NumPy and passing in data. Here I've called np.argmin, which tells me that the smallest value in the dataset is located at index 1. I've also called np.argmax, which tells me that the largest value in the data is located at index 7. This is especially useful when you want to locate where those extreme values occur. Computing these statistics
>
> **[1:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=91)** gives you a quick overview of your data’s range and variation, an essential step before modeling or visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3)
> **CLI Commands:** find (1)

#### [Solve matrix-based problems with SciPy](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=0)** Matrix operations are at the core of many [Data Science](../../Topics/Data%20Science.md) and machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md). In this lesson, you'll use SciPy's [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) module to compute determinants, inverses, and solutions for matrix equations. First, import NumPy and SciPy’s linear algebra module. Let's define a two-by-two matrix using np.array. You can save it in a variable named A. You can calculate the determinant by calling the function linalg.det and passing in matrix A. If the determinant is not 0, that means the matrix is invertible. To find the inverse, call the function linalg.inv and pass in matrix A. Save the result in a variable named A_inverse. You can verify the inverse by multiplying the matrix by its inverse, which would result in the identity matrix. To perform this dot product, call the function np.dot and pass in A and A_inverse. You can also solve a system of linear equations directly by calling the function linalg.solve() and passing in a square coefficient matrix and a vector or matrix of constants. Linalg.solve() is a function that solves a system of linear equations of the form ax = b, where a is a matrix containing the coefficients of the system, b is a vector of constants,
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=92)** and x is the unknown vector that you want to find. Here I've defined an array b using np.array and passed in a list of numbers. Then I've defined a variable x, which is the unknown vector that I want to solve for. To solve for x, I've called linalg.solve and passed in a as my square coefficient matrix and b as my vector of constants. Lastly, I make sure to print the solution vector so I can check it out. With SciPy’s linear algebra functions, you can efficiently perform essential matrix computations. These skills are key to regression, transformations, and dimensionality reduction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (3), [Data Science](../../Topics/Data%20Science.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Best Practices:** make sure to (1)

#### [Run statistical functions with SciPy](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=0)** [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) is a core part of drawing inferences and validating insights in [Data Science](../../Topics/Data%20Science.md). In this lesson, you'll use SciPy stats module to work with [Probability](../../Skills/Data%20Science/Probability.md) distributions and hypothesis tests. Probability distributions are at the heart of [Statistics](../../Skills/Data%20Science/Statistics.md) in data science. They describe how values in your dataset are expected to be distributed, or in other words, how likely certain outcomes are. Understanding distributions helps you make predictions, run simulations, and calculate probabilities that guide data-driven decisions. The most common of these is a normal distribution, also known as the Gaussian distribution. It's the familiar bell-shaped curve that shows up in many contexts, from measurement errors to test scores to model residuals. In SciPy, the stats module gives you tools to work with these distributions directly. Import the stats module first. Let's start with a normal distribution. You can compute the probability density function, also known as a PDF, for a specific value. The PDF represents the height of the curve at a given point. It tells you how dense the probability is around that value. Here I've called the function stats.norm.pdf and passed in 0, which returns the height of the standard normal curve at x=0. This value peaks at about 0.3989, which corresponds to the center of the bell curve. It's not the probability of x=0 itself, but rather the relative likelihood of values near 0.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=93)** Next, you can find cumulative probabilities using the cumulative distribution function, also known as the CDF. The CDF tells you the probability that a random variable is less than or equal to a certain value. Here I've called the function stats.norm.cdf and passed in 1.96, which returns the probability that a random variable from the standard normal distribution is less than or equal to 1.96. This returns roughly 0.975, meaning that about 97.5% of values in a standard normal distribution fall below 1.96. This is why 1.96 is used as a cutoff for 95% confidence intervals, because the middle 95% of the curve lies between -1.96 and positive 1.96. Next, you can calculate percentile scores with the function stats.scoreatpercentile(). This function calculates the value, or score, below which a given percentage of the data falls. It takes in two arguments. The first argument is your dataset, and the second argument is the percentile you want. Here I've defined a variable data and assigned it to a list of numbers, and I've called the function stats.scoreatpercentile() and passed in 80. This gives me the 80th percentile in my data. The output is 8.4, so 80% of the values in the dataset are less than or equal to 8.4. Finally, let's run a hypothesis test. Imagine you're comparing the performance
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=187)** of two groups of students who took different approaches for studying before a test. Group one represents scores from students who used a new learning tool. Group two represents scores from students who follow traditional learning methods. You want to know whether the difference in their average scores is statistically significant. That is, whether it's likely due to the study method rather than random chance. To answer that question, you would conduct an independent samples t-test. An independent samples t-test compares the means, or averages, of two independent groups to determine if they’re significantly different from each other. It assumes the two groups are independent, as in no overlap in participants or measurements; the data in each group is approximately normally distributed; and the variances between groups are roughly equal. Before running the test, it's standard practice to choose a significance level, often written as alpha. This is the p value threshold you will use to decide whether the difference between groups is statistically meaningful. A common choice is 0.05. Setting this cutoff before computing the p value helps avoid bias when interpreting the results. It's also important to define the hypotheses you're testing. The null hypothesis states that the two groups have the same mean score. In other words, the study method has no effect. The alternative hypothesis states that the two groups have different mean scores. In other words, the study method does affect performance.
>
> **[4:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=280)** SciPy provides the function stats.ttestind() for running an independent samples t-test. It takes in two arguments. The first argument is the first sample-- in other words, group one. The second argument is a second sample-- in other words, group two. It returns two values: the t-statistic, which measures how far apart the group means are relative to their variability, and the p-value, which tells you the probability of observing that difference or a larger one if the two groups truly had the same mean. Here I've defined the variables group1 and group2. Group1 is a list of scores from students who used the new learning tool. Group2 is a list of scores from students who followed traditional learning methods. Then I've called stats.ttest_ind() and passed in group1 and group2. This returns the t-statistic and the p-value, each of which I've saved in its own variable. Afterwards, I've printed t_stat and p_value. The t-statistic, which is approximately 4.2, shows a difference between group means is quite large relative to the variability within the groups. The p-value, which is approximately 0.002, is less than 0.05. So there's less than a 0.2% chance that this difference happened by random chance. So it looks like the group of students who used the new learning tool performed significantly
>
> **[6:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=371)** better on their tests than the group who used the traditional method. With the functions from SciPy stats module, you can efficiently perform statistical computations that are essential components for evaluating models in data science.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (8), [Data Science](../../Topics/Data%20Science.md) (3), [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Versions:** 1.96 (6), 8.4 (2), 0.05 (2), 0.3989 (1), 0.975 (1)
> **Definitions:** is a  (5), in other words (5), known as (3)
> **Env Vars:** pdf (2), cdf (2)
> **Code Identifiers:** ttest_ind (1), t_stat (1), p_value (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** imagine (1)


### 3. pandas for Data Manipulation

[↑ Back to Table of Contents](#table-of-contents)

#### [Create pandas series and dataframes](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=0)** The [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) library makes it easy to work with tabular data. In other words, data that's in a tabular format similar to spreadsheets with rows and columns. Pandas is one of the most widely used tools in [Data Science](../../Topics/Data%20Science.md) because it allows you to load, explore, and manipulate data efficiently. In this lesson, you'll learn how to create Series and DataFrames, and how to load data directly from a CSV file, which is one of the most common file formats for datasets. The first step is to import Pandas. The convention is to import it using the alias “pd”. A Pandas series is a one-dimensional array that supports both integer-based and label-based indexing. You can think of it like a single column of data. Here I'll create a Pandas series of student scores. I've called pd.series() and passed in a list of scores as data. You can see the series default indexing here, starting from 0 and increasing incrementally by 1. Another option is to create the score series using letters for the indexing. Here is how you could do that. First, create a dictionary that maps each letter index to the score. Then call pd.series() and pass in that dictionary as data. When you run this, you'll see that this series has the letters a, b, c, d as the indexes, and the scores 88, 92, 79, 93 as the values. Another incredibly useful object in Pandas is the Pandas DataFrame, which is a two-dimensional table
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=93)** made up of rows and columns. One approach is to create the DataFrame manually from a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) dictionary. I've defined a variable d and assigned it to a dictionary that maps the name label to a list of student names, and maps the score label to a list of student exam scores. Then I've called pd.DataFrame() and passed in that dictionary as data. I've saved the result in a variable df, which I display afterwards. This created a DataFrame with columns for name and score. Pandas automatically aligns the rows and labels everything for you. Also, you can check out summary details about the DataFrame using the functions .info() and .describe(). .info() gives you the column names, data types, and number of non-null values, while .describe() provides quick summary [Statistics](../../Skills/Data%20Science/Statistics.md) for numeric columns. First I've called df.info. Next I've called df.describe. Now, in most data science workflows you won't usually type your data by hand. You'll load it from a file. The most common format for this is a CSV file, short for comma-separated values. You can load a CSV file directly into a Pandas DataFrame using the pd.read CSV function. Here I've called pd.read_csv() and passed in the string scores.csv. This reads the exercise file scores.csv located in your current directory.
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=187)** The result is a Pandas DataFrame containing all the data from that file, and I've saved it in a variable named df_csv. Then I've called df_csv.head(). This displays the first five rows, which is helpful when you're inspecting large datasets. Check out the output. You can also specify additional parameters in read_csv to handle more complexity, like changing the delimiter, skipping rows, or specifying which columns to read. For example, I've called pd.read_csv(), passed in scores.csv as a first argument, and then passed in the parameter usecols assigned to the list Name, Score. This loads only the name and score columns from the file. Creating Series and DataFrames, and being able to load data directly from CSV files are fundamental steps in any data science workflow. These tools give you a clean, structured starting point for analysis and transformation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (10), [Data Science](../../Topics/Data%20Science.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** is a  (4), in other words (1), short for (1)
> **Code Identifiers:** read_csv (3), df_csv (2)
> **Env Vars:** csv (5)
> **File Paths:** scores.csv (3)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise file (1)

#### [Extract data subsets from pandas objects](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=0)** A big part of effective data analysis is isolating the information that matters most. Maybe you want to compare just two features, examine a single record, or focus on values that meet specific criteria. [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) gives you the tools to target exactly the data you need. In this lesson, you'll practice how to select specific columns, specific rows, and filtered subsets from a Pandas DataFrame. First, import Pandas and load the data from the exercise file scores.csv. So I've imported Pandas with the alias pd, and I've called pd.read_csv() and passed in scores.csv as a string and saved the resulting dataframe in the variable df. After running this cell, take a quick look at the data. You can extract a single column using square brackets and the column name. Here I've extracted the score column. I've typed df[score]. This returns a Pandas series containing only the score values. To select multiple columns, pass in a list of column names inside another set of square brackets. Here I've extracted the name and score columns. I've typed df\[\[”Name”, “Score”]].
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=85)** This gives you a smaller data frame with just the columns you specified. To select specific rows by index, use slicing just like you would with lists in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Here I've typed df[0:2]. This returns the first two rows of the DataFrame corresponding to indices 0 and 1. You can also extract specific rows using Pandas’ two main indexers: .iloc and .loc. These look similar at first, but they work differently-- and knowing the difference is essential when you're working with DataFrames. First, let's work with .iloc. This method uses position-based indexing, which selects rows based on their numeric position in the DataFrame. These positions start at 0 for the first row, then increase to 1, 2, 3, and so on-- just like standard Python indexing. Here, I've done df.iloc[0], which selects the row at index position 0. In other words, the first row. Next let's look at .loc. .loc is used for label-based indexing, meaning it selects rows based on the index labels. To make this distinction clearer, let's create a version of the DataFrame where the index is set to the student names, and you'll use that version to call .loc. Here I've called df.set_index() and passed in name, which creates a new DataFrame
>
> **[2:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=178)** where the name column becomes the index, and I've saved it in a variable df_by_name. Then I've called df_by_name.head() to preview the new DataFrame. As you can see in this DataFrame, each student's name serves as a row label. Now you can select rows using these labels, meaning you can look up rows by student name. In this example, I'll use .loc on df_by_name to select the row for the student named Diana. Now let's say you want to select that same row by using the index position instead of the index label. And you happen to know that Diana's row is located at position 3. You would call df_by_name.iloc[3]. Filtering allows you to extract only the rows that meet specific conditions-- one of the most common data operations in Pandas. For example, you want to select only the students who scored above 90. So you'll do df[df[”Score”] > 90]. Save that in a variable high_scores and then display high_scores. This will filter out the values and isolate the scores that meet the condition of being greater than 90. To filter based on multiple conditions, you can use logical operators. The & symbol works as the “and” logical operator.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=272)** The | symbol works as the “or” logical operator. For example, you want to filter by the students who scored above 80 and studied more than 10 hours. So you'll do df[(df[”Score”] > 80) & (df[”Hours_Studied”] > 10)]. Save this in a variable “filtered” and then display filtered. This will filter the values by two conditions: score being greater than 80 and hours studied being greater than 10. You can also extract a specific cell using .loc or .iloc with both row and column arguments. Here I've done df.loc[1, “Name”] which extracts the value at row index 1 and column Name. You can see that the value extracted is Bob. Then I've done df.iloc[2, 1] which extracts the value at row index 2 and column index 1. The next value extracted is 79. When you're working with larger datasets, you can use .head and .tail to preview just the first or last few rows. Here I've called df.head() and passed in 2, which extracts the first two rows. And I've called df.tail()
>
> **[6:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=365)** and passed in 2, which extracts the last two rows of the DataFrame. Being able to extract specific subsets of data, whether that's through columns, rows, or conditional filters, gives you control and flexibility in how you explore your dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Code Identifiers:** df_by_name (4), high_scores (2), read_csv (1), set_index (1)
> **Analogies:** just like (2), for example (2)
> **CLI Commands:** python (2), make (1)
> **File Paths:** scores.csv (2)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** in other words (1)

#### [Modify pandas objects](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=0)** As you continue working with data in [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), you'll often need to make updates such as filling in missing values, adding or dropping columns, or renaming them for clarity. Updating data in place helps keep your data pipeline clean and reduces errors later on. In this lesson, you'll learn how to handle missing values and modify Pandas DataFrames by adding, dropping, and renaming columns. Start by importing Pandas and loading the exercise file scores.csv into a DataFrame. Take a quick look at the data. Missing data is extremely common in datasets-- for instance, when survey responses are incomplete or certain values weren't recorded. Pandas provides several ways to detect and handle missing values. Let's first add an example missing value so you can see how Pandas handles it. Here I'll create a missing value by using .loc to assign the value at row index 2 in the Hours_Studied column to None. Then I'll display df to make sure this change was applied. The missing value shows up in the DataFrame as NaN, which is how Pandas shows missing values. This change means that Charlie’s study hours are missing now. To check for missing data, you can use the .isna() function or the .isnull() function. Both work the same way and return a Boolean mask. This is a grid of true and false values that match the shape of your DataFrame.
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=94)** Each true indicates that the corresponding cell contains a missing value, while false means it's not missing. Here I've called df.isna().
>
> **[1:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=109)** To count how many missing values there are in each column, use .isna().sum(). This shows you that there is one missing value, and that missing value is in the Hours_Studied column. To fill missing values, you can use .fillna and pass in the value you want to fill with-- for example, the average study hours. To get the average study hours, you would access the Hours_Studied column and call .mean() at the end. You can save the result in a variable “mean_hours” and print it out. Then access the Hours_Studied column and call .fillna() at the end, passing in mean_hours as the first argument, followed by inplace=True as the second argument. Then display df to check that the replacement worked. Now the missing value has been replaced with the average of the column. The inplace=True argument ensures that the update happens directly in the DataFrame. You can also remove rows that contain missing values using the .dropna method. For the purposes of this example, let's now load in a version of this dataset that includes some missing values. Call pd.read_csv and pass in that file name and save the DataFrame in a variable.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=213)** Next, call .dropna on that DataFrame. This time, practice saving the modified DataFrame in a separate variable instead of updating the existing DataFrame in place. This makes a copy of the DataFrame, drops any rows that contain at least one missing value, and assigns the result to a new variable named df_clean. So df_with_missing still contains the missing values, while df_clean holds the clean data. You can easily add new columns to a DataFrame by assigning a new series or list. For example, let's create a new column called Passed, which is based on whether each student's score is 80 or higher. Let's resume working with the initial DataFrame df. This adds a column named Passed containing Boolean values, where True means that the student passed, and False means they didn't. You can also perform calculations on existing columns to create new ones. For example, you could calculate Score_per_Hour to measure how efficiently each student performed relative to their study hours. This gives you a quick way to compare how much performance each hour of study produced-- a measure of efficiency. Here, I've added a new column, Score_per_Hour, by indexing df and assigning it to the result of dividing the values in the Score column by the values in the Hours_Studied column. Check out the result. To remove columns you no longer need,
>
> **[5:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=308)** use the .drop method and pass in the parameter columns assigned to the list of names of columns you want to remove. You can also pass in a second parameter inplace=True if you want the update to be applied directly to your existing DataFrame. Here's how to drop a single column. I've called df.drop() and passed in columns=[”Passed”] followed by inplace=True. In the resulting DataFrame, you can see that the Passed column is no longer there. You can also drop multiple columns at once. For example, if you no longer need Score_per_Hour and Hours_Studied for the data analysis you're working on, you can use .drop to remove those columns. Here I've called df.drop() passed in columns=[”Score_per_Hour”, “Hours_Studied”], inplace=True.
>
> **[6:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=367)** Sometimes you'll want to rename columns to make them more descriptive or consistent. Use the .rename method and pass in a dictionary, mapping old names to new names. Here I've called df.rename and passed in columns equals a dictionary mapping Score to Exam_Score followed by inplace=True. This updates the column name while preserving the DataFrame structure. You can combine these techniques, checking for missing values, filling or dropping them, adding new columns, and renaming columns to clean and organize your datasets efficiently before analysis. Modifying DataFrames in Pandas helps ensure that your data is well-structured, complete, and ready for further analysis or visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (7)
> **Code Identifiers:** mean_hours (2), df_clean (2), read_csv (1), df_with_missing (1)
> **Analogies:** for example (4), such as (1), for instance (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** scores.csv (1)
> **Exercise Files:** exercise file (1)

#### [Combine data from pandas objects](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=0)** In data analysis, you'll often work with data that’s split across multiple tables or files. Combining these tables is an essential step towards creating a complete dataset that supports deeper insights. In this lesson, you'll learn two main ways to combine [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) DataFrames. The first is merging, which combines data based on matching keys or columns. The second is concatenating, which stacks or joins DataFrames together. Start by importing Pandas and creating two small DataFrames to work with. Check out both to confirm what they look like.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=50)** Merging is used to combine two DataFrames based on shared column values, similar to performing a join in [SQL](../../Skills/Data%20Science/SQL.md). In this case, both DataFrames have a column named Name, so that will be the key for the merge. Here I've called pd.merge() and passed in scores followed by hours followed by on=”Name”. I've saved the resulting DataFrame in a variable named “merged”. Check out the result. This merges the two DataFrames side by side, aligning rows where the name values match. The resulting DataFrame includes all columns from both input DataFrames: Name, Score, and Hours_Studied. You can also specify different types of joins using the how parameter. Inner keeps only matching rows, which is the default. Left keeps all rows from the left DataFrame. Right keeps all rows from the right DataFrame. And outer keeps all rows from both, filling in missing values with NaN. Here is an example of an outer join where one table has an extra student. I've defined the variable scores_extra as a DataFrame with columns Name and Score. Then I've called pd.merge() and passed in scores_extra, followed by hours, followed by on=”Name”, followed by how=”outer”. I've saved the result in a variable, “merged_outer”. Notice how Evan appears in the result, but their Hours_Studied value is missing. That's because their name existed
>
> **[2:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=144)** only in the first DataFrame. Compare it to the default inner join, which would only keep rows for Alice, Bob, Charlie, and Diana, as it includes only matching records that exist in both DataFrames. Concatenation is another method for combining data in Pandas. Concatenating is different from merging. Instead of joining by a shared key, it simply stacks DataFrames together. To stack rows one DataFrame below another, use pd.concat(), and pass in a list of DataFrames. Here I've defined variables class_A and class_B as two DataFrames with columns Name and Score, where class_A contains data about students in class A, and class_B contains data about students in class B. Then I've called pd.concat() and passed in a list containing class_A and class_B. I've saved the result in a variable named “combined”. This vertically concatenates the rows, giving you one combined DataFrame. You can also concatenate horizontally by specifying axis equals one. This stacks the columns side by side instead of stacking the rows. Here I've defined the variables left and right as two DataFrames, each with one column. Then I've called pd.concat and passed in a list containing left and right, followed by axis=1. This produces a DataFrame with both columns
>
> **[3:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=236)** A and B aligned by their index positions. The axis parameter controls how Pandas combines the DataFrames. By default, axis is equal to zero, which means Pandas stacks the DataFrames vertically by adding more rows. When you set axis=1, Pandas stacks them horizontally by adding more columns side by side. This parameter appears in many Pandas functions and always follows the same logic. Axis=0 operates down the rows and axis=1 operates across the columns. When concatenating DataFrames vertically, the original row indexes are preserved. You can reset them if needed using .reset_index, passing in drop=True. Here I've called pd.concat passed in a list containing class_A and class_B, and at the end called .reset_index, passing in drop=True. I've saved the result in a variable “combined_reset”. This gives you clean sequential indexing from zero onward. The parameter drop=True indicates that the original indices will be dropped, and only new indices will be kept in the resulting DataFrame. Merging and concatenating are fundamental techniques for combining datasets in Pandas. They allow you to integrate data from multiple sources, align related records, and prepare unified tables for analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (8), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** scores_extra (2), reset_index (2), merged_outer (1), combined_reset (1)
> **Definitions:** is an  (2)
> **Env Vars:** sql (1)
> **Analogies:** similar to (1)

#### [Group data from pandas objects](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=0)** One of the easiest ways to spot patterns in your data is by grouping it. Grouping lets you compare categories-- for example, seeing which department has the highest average salary or the most experience. In this lesson, you'll learn how to use the groupby() method in [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) to group your data by categories and compute summary [Statistics](../../Skills/Data%20Science/Statistics.md) for each group. Start by importing Pandas and creating a sample dataset.
>
> **[0:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=31)** Here you have a sample dataset showing employees, their departments, salaries, and years of experience. To group the data by department, call the groupby method and pass in the column name to groupby. I've called df.groupby() and passed in Department, and I've saved the output in a variable named “grouped”. At this point, grouped is a groupby object, which stores information about how the data is split into groups. But you won't see much if you display it directly. To actually view the results, you need to apply an aggregation function. You can apply built-in functions such as mean, sum, count, and max to calculate summary statistics for each group. I've called .mean() on the salary column in grouped. This gives you the average salary within each department. You can also compute other metrics. Here I've called .sum() on the Salary column in grouped, which gets the total salary by department. And then I've called .max() on the Years_Experience column in grouped, which gets the highest years of experience by department. Each of these functions produces a series with one value per department. Another thing you can do is you can aggregate multiple columns at once by passing a list to the aggregation function. For example, I've called .mean() on a subset of the data-- specifically on the columns Salary and Years_Experience in grouped. This returns a DataFrame showing the average salary
>
> **[2:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=124)** and average years of experience for each department. The .agg method lets you apply multiple aggregation functions at once, either to all columns or specific ones. I've called grouped.agg and passed in a dictionary that maps salary to a list of built-in functions consisting of mean, min, and max, and maps Years_Experience to a list of functions consisting of mean and max. I've saved the output in a variable named “summary”. This gives you a more detailed summary table with several metrics per department. After grouping, the group labels such as Sales and HR become the data frame index. If you want to keep them as a regular column, use .reset_index(). Here I've called summary.reset_index() and saved the output in a variable named summary_reset. Now Department appears as a regular column again, which can be helpful when preparing data for visualization or further analysis. You can also define your own custom functions and apply them to groups. For example, to calculate the salary range within each department, I've defined a function named salary_range that takes in an argument x that represents a Pandas series and returns the difference between the maximum and minimum values in that series. Then I've called .apply() on the Salary column in grouped and passed in salary_range. This computes the difference between the highest and lowest
>
> **[3:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=216)** salary for each department. Grouping and aggregating data helps you summarize large datasets and uncover patterns that aren't obvious at the individual record level. With groupby and aggregation functions, you can quickly move from raw data to meaningful insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Code Identifiers:** reset_index (2), salary_range (2), summary_reset (1)
> **Analogies:** for example (3), such as (2)
> **Definitions:** is a  (1)

#### [Transform data with pandas apply()](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=0)** Sometimes, the built-in [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) methods don't give you exactly what you need for the data transformations or [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) that you're trying to do. When that happens, you can create your own custom functions and use .apply() to apply them directly to your DataFrame. In this lesson, you'll learn how to use the .apply() method to run your own functions on Pandas series and DataFrames. Start by importing Pandas and setting up a sample dataset. Here you have a DataFrame containing student names, their scores, and study hours. Let's say you want to convert the score column into a new metric, a percentage grade out of 100. You can define a function that adds context to or transforms each value, and then use .apply() to apply it across the column. I've defined a function named to_percentage that takes in an argument x, which is a numeric value, and returns a formatted string using an f string. This adds a percent sign after the numeric value. Then I've indexed df to add a new column named Score_Percent and assigned it to the result of calling .apply() on the Score column, passing in to_percentage. Here, Pandas applies the to_percentage function to every value in the Score column, producing a new column of formatted percentage strings. .apply() takes care of looping through all the rows for you. No manual iteration needed. For shorter or one-off transformations, you can use a lambda function,
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=94)** which is an inline, unnamed function that you define directly within your code without needing to write a full def block. In other words, instead of defining a separate function above your code, you can write it in a single line right where you need it. Lambda functions are great for quick operations that you don't plan to reuse. Here's an example that calculates Score_per_Hour, showing how much each student achieved for every hour of study. I've called df.apply() and passed in a lambda function that takes in row as an argument and returns the value in the Score column divided by the value at the Hours_Studied column from that row, followed by axis=1. I've added a new column in df named Score_per_Hour, and assigned it to the output from the call to .apply(). So the function inside .apply() is run once for every row in df. Setting axis=1 means it operates across columns within each row. Each row is passed in as a Pandas series so you can reference columns by name. This adds a new column that measures performance efficiency for each student. You can also use .apply() to operate down columns instead of across rows. This is the default behavior equivalent to axis=0. For example, you could find the range of each numeric column. Here I've called .apply() on a subset of df-- just columns Score and Hours_Studied-- and passed in a lambda function that takes in call as an argument which represents a column,
>
> **[3:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=186)** and returns the column’s maximum value minus the column's minimum value. I've saved the output in a variable named “ranges.” This outputs a brief summary showing the difference between the highest and lowest values in each numeric column in the DataFrame. Also, you can use .apply() to apply more complex logic that depends on multiple columns. Student performance can be measured by not just results but also effort. In this example, you'll use both Score and Hours_Studied to assign a Performance label. Students with high scores and consistent study effort will be labeled High, while others will fall into Average or Low categories. First, define a function named performance_label that takes in a row. Use a conditional statement to determine whether to return High, Average, or Low. Here's an example of what that conditional logic could be. If Score is greater than or equal to 90, and Hours_Studied is greater than or equal to 10, return High; elif Score is greater than or equal to 80, and Hours_Studied is greater than or equal to 8, return Average; else return Low. Then add a new column to df named Performance and assign it to the result of calling .apply() on df, passing in performance_label followed by axis=1. So the performance_label function is applied to every row of the DataFrame. The axis=1 argument
>
> **[4:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=279)** tells Pandas to apply this function across columns, making both the Score and Hours_Studied columns available inside the function. This adds a new column that assigns a categorical performance label to each student, combining both their results and their study effort. Using .apply() gives you full control over your transformations, letting you define exactly how each value or row should be processed. It's especially powerful when you need to go beyond built-in methods and design your own [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) or feature engineering logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2)
> **Code Identifiers:** to_percentage (3), performance_label (3)
> **Definitions:** is a  (1), is an  (1), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)


### 4. Visualization Essentials

[↑ Back to Table of Contents](#table-of-contents)

#### [Create line and scatter plots](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=0)** Visualizing quantitative data is one of the most powerful ways to uncover patterns and relationships in your datasets. Charts can reveal trends that might not be obvious from raw numbers alone. In this lesson, you'll learn how to use matplotlib, one of the most popular visualization libraries in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), to create line plots and scatter plots. First, import matplotlib.pyplot module, which provides essential plotting functions. The convention is to import it using the alias plt. Let's start by creating some sample data. Here I've defined two lists, one for Study Hours and one for Scores. A line plot is useful for visualizing trends, for example, how one variable changes with another. You can create a line plot using the plt.plot() function. Here I've called plt.plot() and passed in hours followed by scores. This creates a line plot connecting the data points with hours on the x axis and scores on the y axis. I've called plt.title() and passed in Study Hours vs. Exam Score. This adds a title to the plot. I've called plt.xlabel() and passed in Hours Studied. This labels the x axis of the plot. I've called plt.ylabel and passed in Score. This labels the y axis of the plot. Finally, I've called plt.show(), which displays the figure. Running this produces a line plot showing how exam scores increase with study time--
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=92)** a positive association. While line plots are great for showing trends, scatter plots are better for showing individual data points and the strength of relationships between variables. You can create a scatter plot using the plt.scatter() function. Here I've called plt.scatter() and passed in hours followed by scores. This creates a scatter plot with hours on the x axis and scores on the y axis. I've called plt.title() and passed in Study Hours vs. Exam Score, which titles the plot. I've called plt.xlabel() and passed in Hours Studied which labels the x axis. I've called ylabel and passed in Score which labels the y axis. Lastly, I've called plt.show() to display the figure. This displays each pair of values as a point on the plot without connecting them. Scatter plots are especially useful when you're analyzing correlations or model predictions, where the relationships may not be perfectly linear. You can customize your plots easily by adding color, line style, or markers. In this next example, I'll use both color and markers to make the plot more readable. I've called plt.plot() and passed in hours, scores, color=”green”, marker=”o”, followed by linestyle=”--”. Here's what the new arguments do. Color=”green” changes the line color to green. Marker=”o” adds a circular marker at each data point.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=185)** Linestyle=”--” makes the line dashed instead of solid. These small adjustments make your visualizations clearer and easier to interpret. Now you can enhance your plots with titles, axis labels, and formatting options like color, line style, and markers. With just a few core functions from matplotlib, plt.plot() for line plots, and plt.scatter() for scatter plots, you can quickly visualize numerical relationships in your data. These functions form the foundation of data visualization in Python, giving you the flexibility to explore and present trends directly from your datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), make (2)
> **Analogies:** for example (1)

#### [Display categorical distributions](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=0)** Visualizing categorical data helps you compare groups and understand proportions within your dataset. It's a key part of exploratory data analysis, helping you see which categories stand out and how they relate to the whole. In this lesson, you'll learn how to create bar plots and pie charts using matplotlib. Start by importing matplotlib.pyplot module. Let's define some sample data. Here I've created a list of categories representing different student grades, and another list showing how many students earned each grade. A bar plot is perfect for comparing quantities across categories. You can create one using plt.bar(). Here I've called plt.bar() and passed in grades followed by counts. This creates a bar plot with vertical bars for each grade, where the height of each bar is determined by the count. Then I've called plt.title() and passed in Distribution of Grades, which adds this as a title to the plot. I've called plt.xlabel() and passed in Grade, which adds this as the label for the x axis of the plot. I've called plt.ylabel() and passed in Number of Students, which adds this as a label for the y axis. There's your bar plot. The x axis shows the categories A, B, C, D, F. The y axis shows how many students earned each grade. The tallest bar represents the most common category. You can also customize the appearance of your bar plot-- for instance, changing colors
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=92)** or adding grid lines. Here I've called plt.bar() and passed in grades, counts, and a new argument-- color=”teal”. I've called plt.title(), plt.xlabel() and plt.ylabel() as I did earlier, to add title and x axis and y axis labels. Then I've called plt.grid() and passed in axis=”y”, linestyle=”--”, followed by alpha=0.7. Lastly, I've called plt.show(). This version uses teal bars and adds light horizontal grid lines to make comparisons easier. If your category labels are long or you want a different layout, you can create a horizontal bar plot using the function plt.barh(). Here I've called plt.barh() and passed in grades, counts, followed by color=”orange”. Then I've called plt.title() and passed in Distribution of Grades (Horizontal) for adding the title. I've called plt.xlabel() and passed in Number of Students for labeling the x axis. I've called plt.ylabel and passed in Grade for labeling the y axis. I've called plt.show() afterwards for displaying the figure. And there's the horizontal bar plot. Horizontal bars can make labels more readable when working with text-heavy categories. While bar plots are best for comparisons, pie charts are useful for showing proportions-- how each category contributes to the whole.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=185)** You can create one using plt.pie(). Here I've called plt.pie() and passed in counts, labels=grades, autopct=%1.1f%%, startangle=90. Breaking that line down: counts provides the data to be plotted. Labels=grades adds the category names, which are the grades. The autopct argument assigned in this way displays percentages with one decimal place. And the startangle=90 rotates the chart so that the first slice starts at the top. There's the pie chart. This gives you a clean visual breakdown of how each grade contributes to the overall distribution. You can also highlight a category using the explode parameter, for example to emphasize top grades. Here I've defined a variable named slice_offsets, which is a list of offsets-- one value per pie slice in the same order as grades. A value of 0.1 pulls that slice outward by 10% of the pie's radius. Zero leaves a slice in place. Then I've called plt.pie() and passed in counts, labels=grades, autopct assigned to the same expression as before, startangle=90, and explode=slice_offsets. The first slice representing A grades is pulled out slightly, drawing attention to high performers.
>
> **[4:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=279)** Matplotlib’s categorical plotting functions plt.bar(), plt.barh(), and plt.pie() make it easy to explore group-level patterns and proportions in your data. These tools also give you flexibility to customize with parameters such as color, labels, autopct, and explode, helping you communicate categorical insights and emphasize what matters most in your analysis. Go ahead and try out these functions to visualize categorical data of your own.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** for instance (1), for example (1), such as (1)
> **Code Identifiers:** slice_offsets (2)
> **Versions:** 0.7 (1), 0.1 (1)
> **Definitions:** is a  (1)

#### [Explore numerical distributions](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=0)** Understanding the shape, spread, and density of numerical data is essential for exploratory data analysis. Visualizing these distributions helps you detect patterns, outliers, and potential skew in your data before moving on to modeling. In this lesson, you'll use Seaborn, a visualization library built on top of matplotlib to plot histograms, box plots, KDE curves, and violin plots. Start by importing seaborn, matplotlib, and [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). Seaborn provides the plotting functions and matplotlib.pyplot is useful for customizing and displaying plots. The convention is to import Seaborn using the alias sns, matplotlib.pyplot using the alias plt, and Pandas using the alias pd. Next, let's create a sample dataset. Here I'll use a dictionary representing exam scores for students and convert it into a Pandas DataFrame. This gives you a DataFrame with a single column of numeric data that you can now visualize in different ways. A histogram groups data into bins and shows how many values fall into each range. You can create one using Seaborn’s histplot() function. Here I've called sns.histplot and passed in the Score column from df, bins=8, and kde=False. Bins=8 divides the data into eight intervals. kde=False turns off the density curve so you can focus just on frequency counts. Then I've used plt.title(), plt.xlabel(),
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=95)** and plt.ylabel() to add the title and labels to the x axis and y axis for the plot. Lastly, I've used plt.show() to display the figure. There's the histogram. This histogram helps you quickly visualize where most scores fall and whether the distribution looks symmetric, skewed, or concentrated around certain values. You can add a KDE curve, short for kernel density estimate, to visualize the [Probability](../../Skills/Data%20Science/Probability.md) density, which is a smooth curve representing the distribution's shape. Here, when calling sns.histplot(), I've passed in kde=True and color=”skyblue”. kde=True adds the density curve on top of the histogram. Color=”skyblue” changes the colors of the bars and the density curve, making the plot visually clearer and easier to interpret. This creates a histogram with light blue bars and a smooth KDE curve overlaid, showing both the frequency and the overall shape of the data distribution. Also, I've called plt.title(), plt.xlabel(), plt.ylabel(), and plt.show() to add a title, x axis and y axis labels, and to display the figure. This helps you visualize how the data might be distributed if you smoothed it out, making patterns easier to interpret. A box plot summarizes data using its quartiles, showing the median, spread, and potential outliers. Here I've called sns.boxplot()
>
> **[3:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=189)** and passed in the Score column from df and color=”lightgreen”. The color=”lightgreen” parameter sets the box color, making the plot easier to read and helping key features like the median line and whiskers stand out clearly. I then use plt.title(), plt.xlabel(), and plt.show() to add the title, add the x axis label, and display the figure. There's the box plot. As you take a look at it, I'll talk through what each part represents. The box shows the interquartile range-- in other words, the middle 50% of data. The line inside the box marks the median. Whiskers extend to show variability, and dots outside indicate potential outliers. Box plots are perfect for comparing variability and spotting extreme values at a glance. The next type of plot I want to talk about is a violin plot. A violin plot combines the benefits of a box plot and a KDE curve. It shows both the distribution shape and summary [Statistics](../../Skills/Data%20Science/Statistics.md) in one visualization. Here I've called sns.violinplot and passed in the parameter x assigned to the Score column from df, followed by the parameter color=”orchid”. The color=”orchid” parameter changes the fill color to a soft purple shade, making the distribution shape stand out more clearly. I've then called plt.title(), plt.xlabel(), and plt.show() to add a title, add an x axis label, and display the figure.
>
> **[4:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=284)** There's the violin plot. The width of each section in the violin indicates data density. Wider areas mean more data points fall within that range. Seaborn’s distribution functions histplot(), boxplot(), and violinplot() give you versatile ways to visualize and interpret numerical data. By exploring the shape, spread, and density of your variables, you can identify outliers, understand variation, and prepare for deeper [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md). Go ahead and experiment with these functions on your own datasets to get an intuitive feel for how your data is distributed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) (1)
> **Env Vars:** kde (4)
> **Definitions:** is a  (2), short for (1), in other words (1)

#### [Visualize pairwise relationships](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=0)** Mapping pairwise relationships helps you detect correlations, clusters, and anomalies across multiple variables at a glance. A heatmap is one of the most effective ways to visualize these relationships, especially when working with numerical datasets that contain many columns. In this lesson, you'll use Seaborn to create and annotate heatmaps that reveal how different variables relate to one another. First, import the libraries that you'll need. NumPy, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), matplotlib, and Seaborn. Next, let's create a sample dataset with several numeric variables, such as hours studied, test scores, project completion rates, and attendance rates. This DataFrame includes several related variables-- perfect for exploring correlations visually. Before plotting, you need a correlation matrix, a table that shows how strongly each pair of variables is related. You can compute this easily with Pandas .corr() method. Here I've called df.corr() and saved the result in a variable named “corr”. This outputs a four-by-four table of correlation coefficients with values between -1 and 1. A value close to one means a strong positive relationship, while a value close to negative one means a strong negative relationship. Now that you have the correlation matrix, you can visualize it with Seaborn’s heatmap function. Here I've called sns.heatmap() and passed in corr. Then I've called plt.title() to add a title to the plot, and plt.show() to display the figure. This creates a straightforward heatmap
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=95)** where darker colors indicate stronger relationships. You also have options to make the plot more readable and visually appealing, using some additional parameters. In this next example, you'll enhance the heatmap by adding a color gradient, labels, and numeric annotations. Call sns.heatmap() and pass in corr, annot=True, and the cmap parameter assigned to a string that sets the color palette as yellow to green to blue. The annot=True displays the actual correlation values inside each cell of the heatmap. The cmap parameter set to this color palette shown here, makes it easier to distinguish weak and strong correlations. There's your annotated heatmap. The result is a labeled grid that shows not just which variables are related, but also how strongly. You can control how the numeric annotations are displayed by specifying the number of decimal places. Here, when calling sns.heatmap() I've passed in cmap=”coolwarm” and fmt=”.2f”. The coolwarm color map transitions from blue, which will represent negative correlation, to red, which will represent positive correlation. This makes it easier to see directionality in the relationships between variables. fmt=”.2f” limits the annotation to two decimal places. This helps highlight which variables move together, indicating a positive correlation, and which variables move in opposite directions, indicating a negative correlation. Since correlation
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=187)** matrices are symmetrical, you can mask the upper triangle to reduce redundancy and keep the visualization cleaner. I'll break down what each function does in this next example. np.ones_like() creates a new NumPy array the same shape as corr, which is your correlation matrix. It fills it with 1s, then casts to Boolean so every element becomes true. So if corr is four-by-four, you get a four-by-four array of trues. np.triu() takes the array you just created and returns its upper triangular part, including the diagonal, leaving everything below the diagonal as false. Since the input is Boolean trues, np.triu() effectively keeps true in the upper triangle and sets the lower triangle to false. The result is a mask, which is a Boolean matrix where the upper triangle and diagonal are filled with true, and the lower triangle is filled with false. When you pass in the mask parameter to sns.heatmap(), Seaborn hides the true positions, so you can only see the lower triangle of the correlation matrix. This is a nice way to avoid duplicating symmetric information. This makes it easier to focus on the unique pairs of relationships without visual clutter. The Seaborn heatmap function gives you a clear, color-coded way to interpret pairwise relationships in your data. By combining it with Pandas .corr() method, you can quickly visualize correlations, spot patterns, and identify potential multicollinearity before moving into modeling or feature selection.
>
> **[4:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=278)** Try experimenting with different color maps, annotations, and masking options to tailor your heatmaps to the patterns you want to emphasize.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Code Identifiers:** ones_like (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### [Organize your visualizations](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=0)** When you're analyzing data, it's often helpful to display multiple visualizations side by side. Arranging related plots in one figure makes it easier to compare patterns and build cohesive [Dashboards](../../Skills/Data%20Science/Dashboards.md). In this lesson, you'll use matplotlib’s plt.subplots() function to create grid layouts, share or separate axes, and adjust spacing for clear, organized multi-plot figures. Start by importing matplotlib.pyplot module and Seaborn, which you'll use to generate sample data. Let's use one of Seaborn’s built-in datasets for this example-- tips, which contains restaurant tipping data. The plt.subplots() function is the easiest way to create multiple plots in a single figure. Here I've called plt.subplots() and passed in 1, 2. And I've saved the result in the variables fig, ax. plt.subplots() returns two objects. The first is fig, which is the overall figure-- the canvas that holds everything. The second is ax, an array of axes objects, one for each plot. The arguments 1, 2 create one row and two columns-- so basically two plots side-by-side. You can access and plot on each subplot using its index. Here I've called sns.histplot() and passed in the Total Bill column from the tips dataset, ax=ax[0], and color=”skyblue”. Then I've called set_title on the first axis to add the title
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=92)** Total Bill Distribution. Afterwards I've called sns.boxplot() and passed in y= the tip column from the tips dataset, ax=ax[1], and color=”lightgreen”. I've called set_title on the second axis to add the title Tip Amounts. Lastly, plt.show() to display all the plots from this figure. Check out the plots. Note how each subplot gets its own axes and title all within the same figure. You can add more plots by changing the number of rows and columns. For example, to create a two-by-two grid of subplots, I've called plt.subplots() and passed in 2, 2, and figsize=(10, 8). This gives you a two-row, two-column grid, essentially four plotting areas. Let's fill in each one with a different visualization. In the upper-left quadrant, I'll use the sns.histplot() to create a histogram displaying the distribution of total bill. In the upper-right quadrant, I'll use sns.boxplot() to create a box plot of the tips. In the lower-left quadrant, I'll use sns.scatterplot() to create a scatter plot of bill versus tip. And in the lower-right quadrant, I'll use sns.barplot() to create a bar plot showing average bill by day. Here's what's happening. Each ax[row, col] specifies a position in the grid. Figsize controls
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=187)** the overall figure size in inches. plt.tight_layout() automatically adjusts spacing to prevent titles and labels from overlapping. The result is a neatly arranged dashboard of four different visualizations. Sometimes you want subplots to share the same scale-- for example, when comparing distributions. You can set this using the sharex or sharey parameters. Here, sharey=True ensures both subplots use the same y axis scale, making it easier to compare frequencies between male and female customers. And plt.subtitle() adds a centered supertitle to the figure.
>
> **[4:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=244)** To control spacing between plots, you can use plt.subplots_adjust(). This gives you fine-grained control over margins and spacing. The wspace parameter adjusts the horizontal distance between subplots. Here, wspace=0.4 increases the horizontal space between the two subplots. This extra spacing prevents the axis labels and titles from overlapping, and makes each chart easier to read when they're displayed side by side. Now there's another parameter, hspace, that adjusts vertical spacing. Here, hspace=0.4 increases the vertical space between the two rows of subplots, preventing the lower title and upper X labels from crowding each other. Matplotlib’s plt.subplots() function gives you control over how multiple visualizations are organized within one figure. By customizing layout, shared axes, and spacing, you can build clean, comparison-ready dashboards that clearly communicate multiple aspects of your data. Go ahead and try experimenting with different grid sizes and layouts to find the most effective way to visualize your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2)
> **Code Identifiers:** set_title (2), tight_layout (1), subplots_adjust (1)
> **Versions:** 0.4 (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Apply functions to data science](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=0)** Congratulations on completing this course. You've now built a solid function in using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s built-in functions: NumPy, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), Matplotlib, Seaborn, and SciPy-- all essential tools in a modern [Data Science](../../Topics/Data%20Science.md) workflow. Across this course, you've learned how to leverage Python functions to inspect and validate your data; aggregate, sort, filter, and transform sequences; work with data frames for cleaning, combining, grouping and transforming data; and create visualizations to explore and communicate insights and more. These skills represent the core of practical, hands-on data analysis, and you're now equipped to dig into more complex datasets and data science applications. And the learning definitely does not stop here. The most important next step is practice. Try applying these functions to your own projects or datasets. That's where the concepts really stick. I also recommend that you check out the following resources. The first resource is the official documentation for Python. And you can find this at docs.[python.org](https://python.org). It's where you'll find information about Python's built-in features like functions, data types, and the standard library, along with examples that explain how to use them. If there's a particular function that you don't feel confident using yet, or you want more details on how it works, you can look it up through the Quick Search feature here to get more information. The next resource is Kaggle. Kaggle is an online community of data scientists
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=92)** and other developers who participate in contests, share their datasets, discuss their findings, and more. Kaggle offers free public datasets, so explore those that interest you and try applying the functions from this course to your chosen data. And another great resource is the website Towards Data Science. This site is a platform for people to stay updated on cool advancements in the field of data science, exchange ideas, and access step-by-step tutorials on a range of technical topics. You can find links to these resources in the resource file for this course. And feel free to follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). I look forward to seeing how this course helps you in your journey. As you continue learning, remember that data science is an iterative process. You build intuition by exploring data, asking questions, testing ideas, and improving your approach over time. Thank you for joining me in this course, and I hope you feel empowered to keep building, innovating, and applying these functions to the data you encounter. Best of luck on your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Data Science](../../Topics/Data%20Science.md) (5), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (5), find (3)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [python.org](https://python.org) (1)


## Instructor

- [Madecraft](../../Instructors/Data%20Science/Madecraft.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Analysis

## Path Context

### In [Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)
← [Data Wrangling in R](Data%20Wrangling%20in%20R.md) | **3 of 11** | [Basics of Data Visualization Analysis](Basics%20of%20Data%20Visualization%20Analysis.md) →

## Appears In

- [Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)

## Related Courses

_Courses sharing skills:_

- [Python Data Analysis (2020)](Python%20Data%20Analysis%20(2020).md) — Python (Programming Language), Data Analysis
- [Advanced Python in Excel- Data Analysis and Visualization](Advanced%20Python%20in%20Excel-%20Data%20Analysis%20and%20Visualization.md) — Python (Programming Language), Data Analysis
- [Python In Excel Getting Started With Data Analysis](Python%20In%20Excel%20Getting%20Started%20With%20Data%20Analysis.md) — Python (Programming Language), Data Analysis
- [Python in Excel for Financial Professionals](Python%20in%20Excel%20for%20Financial%20Professionals.md) — Python (Programming Language), Data Analysis
- [Python for Data Analysis- Solve Real-World Challenges](../Software%20Development/Python%20for%20Data%20Analysis-%20Solve%20Real-World%20Challenges.md) — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)