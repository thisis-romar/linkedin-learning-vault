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
  - Moving from Data Analyst to Data Scientist
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/python-programming-language
  - skill/data-analysis
status: not-started
created: 2026-04-20
---

![Python Functions for Data Science](https://media.licdn.com/dms/image/v2/D560DAQGnFiXiVWQong/learning-public-crop_675_1200/B56ZrwV5.nL8AY-/0/1764968865986?e=2147483647&amp;v=beta&amp;t=FS5a1mj0v5I-XnALS8VwfOTkLuhu3d63sUVvDz-LQLc)

# Python Functions for Data Science

> Explore the capabilities of Python in data science as you learn about its most essential functions. Get familiar with core Python tools that support real analysis and decision-making, with a focus on making your code more readable and reusable. Dive into data manipulation with NumPy and pandas. Master the art of visualization using matplotlib and seaborn to spot trends and relationships. Discover 

> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261) | 1h 35m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Analysis

## Table of Contents

### Introduction

#### Use Python like a data scientist
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=0)** There are numerous functions in Python that support data science, and taking time now to get familiar with some of the most powerful functions can help sharpen your Python and data science skills and advance your career.
>
> **[0:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=12)** Hi, I'm Lavanya Vijayan.
>
> **[0:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=14)** I'm a data scientist and a STEM educator.
>
> **[0:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=18)** In this course, I'll show you the functions that are most commonly used in Python by data scientists.
>
> **[0:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=24)** You'll get to explore essential built-in functions, then dive into libraries like NumPy for working with numerical data, SciPy for statistical methods, and Pandas for data manipulation.
>
> **[0:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=35)** You'll also get familiar with data visualization techniques with Matplotlib and Seaborn.
>
> **[0:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=40)** By the end of this course, you'll be well-prepared with a toolkit of functions and best practices to improve your versatility in working with data in Python.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/use-python-like-a-data-scientist?u=76281980&t=50)** Now, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (1)
> **Env Vars:** stem (1)

#### Getting started with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=0)** To make the most of this learning experience, it's important to begin with a strong foundation.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=5)** Before you get started, make sure your coding environment is set up so you can practice each concept in real time.
>
> **[0:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=11)** In this course, you'll be applying what you learn through hands-on exercises, so having everything ready will help you follow along smoothly.
>
> **[0:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=20)** To get the most out of each lesson, I have a few quick tips to share.
>
> **[0:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=24)** First, I recommend that you start by making sure Python is set up on your computer.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=29)** You can go to [python.org/downloads](https://python.org/downloads) and download the installer for the latest version of Python for your operating system.
>
> **[0:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=38)** Next, I recommend that you get Jupyter set up on your computer.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=41)** For installation instructions, go to [jupyter.org/install](https://jupyter.org/install).
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=48)** Next, download the exercise files provided with this course so you can easily follow along.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=54)** As you move through each lesson, open the matching exercise files to practice the concepts in real time, and feel free to pause and rewind at any point to revisit a concept or block of code.
>
> **[1:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=65)** Throughout the course, you'll need to run each code cell in the Jupyter Notebook as you follow along.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=71)** Note that to do this on a Mac, you'll press Shift + Return, and on a Windows or Linux, you'll press Shift + Enter.
>
> **[1:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=79)** Finally, I highly recommend that you practice the techniques you're learning as you go and try things out with your own data.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/getting-started-with-python?u=76281980&t=86)** And once you've got Python and Jupyter set up and exercise files open, you're ready to dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (2)
> **Prerequisites:** set up (4), install (1), you'll need (1)
> **Tools:** jupyter (4)
> **Exercise Files:** download the (2), exercise files (2)
> **UI Navigation:** go to (2), open the (1)
> **Code Keywords:** return, (1), finally, (1)
> **URLs:** [python.org](https://python.org) (1), [jupyter.org](https://jupyter.org) (1)
> **Warnings:** note that (1)


### 1. Core Python Essentials

#### Inspect data for validation
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=0)** Python has several fundamental built-in functions that come in handy when working with data.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=5)** In this lesson, I'll show you how to use three essential built-in functions in Python so you can work with your data more efficiently and effectively.
>
> **[0:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=13)** Print() is the first one.
>
> **[0:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=15)** The print() function takes in data as input and displays that data to the screen.
>
> **[0:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=20)** Let's say that I have a variable named “temps” containing a list of temperature values.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=25)** To display this data to the screen, I would call the print() function and pass in the variable temps.
>
> **[0:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=32)** Another useful built-in function that's fundamental in Python is input().
>
> **[0:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=37)** The input() function takes in a prompt, displays the prompt on the screen, allows the user to type a response to the prompt, and returns the response as a string.
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=48)** When you're running experiments or simulations in data science, you'll often need to decide how many samples to generate.
>
> **[0:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=55)** You can use the input() function to capture that number directly from the user.
>
> **[1:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=60)** Here, I've called the input() function and passed in the prompt “Enter the number of samples to generate:” and I've saved the output in a variable named “sample_size”.
>
> **[1:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=69)** Then I've printed sample_size.
>
> **[1:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=73)** When I run this, I'll be prompted and I'll go ahead and type in “5” as a sample size and hit enter.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=80)** Then my response gets printed.
>
> **[1:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=82)** Another commonly used built-in function in Python is type().
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=86)** You can use the type() function to quickly inspect what kinds of objects you're dealing with.
>
> **[1:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=91)** The type() function takes in an object and tells you the data type of that object.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=95)** Here are some values that might come from a CSV file or user input.
>
> **[1:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=100)** I've defined the variables “age”, “scores”, and “avg_score”, which represents the average of the scores.
>
> **[1:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=106)** It's good practice to check the data types of the objects you're working with.
>
> **[1:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=110)** I've called the type() function on each variable I define to get its data type.
>
> **[1:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=115)** Check out the output.
>
> **[1:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=117)** Note that age is a string here instead of a number.
>
> **[2:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=121)** CSV files typically load all values as strings.
>
> **[2:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=125)** So when you're working with data from CSVs, it's good to check the data types early on so you're informed and prepared.
>
> **[2:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=131)** For example, if you need age to be a numerical value for your data analysis, you could then convert it into an integer or a float when needed.
>
> **[2:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=140)** Next, scores is a list.
>
> **[2:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=142)** More specifically, it's a list of integers.
>
> **[2:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=145)** So the first element in scores, for example, is an integer.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=149)** Lastly, avg_score is a float.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=153)** Now that you know how to use the print(), input(), and type() functions, take a few minutes to practice them in your own code.
>
> **[2:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/inspect-data-for-validation?u=76281980&t=160)** Getting comfortable with these basics will make every future data task faster and smoother.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), type( (5), let (1), pass (1), this, (1)
> **CLI Commands:** python (4), make (1)
> **Code Identifiers:** sample_size (2), avg_score (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** csv (2)
> **Analogies:** for example (2)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)

#### Handle magnitudes and precision in data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=0)** Properly handling magnitudes and controlling numeric precision is essential for interpreting your data and keeping your results readable when using Python.
>
> **[0:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=9)** In this lesson, I'll introduce you to two built-in Python functions that help you do this: abs() and round().
>
> **[0:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=16)** The abs() function returns the absolute value of a number.
>
> **[0:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=19)** In other words, its distance from zero on the number line, regardless of whether it's positive or negative.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=25)** This is useful in situations when you only care about magnitudes-- for example, the size of an error or the distance between two values.
>
> **[0:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=34)** Let's say you're analyzing monthly financial data of a business, and you're working with profit values.
>
> **[0:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=39)** Your goal is to get the magnitude of the gain or loss for each month.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=44)** Here I've defined the variables: sept_profit and oct_profit.
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=48)** They represent the profit value for September and October respectively.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=52)** And I've called the abs() function on each variable to get the absolute value of the profit for September and then for October.
>
> **[0:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=59)** I've also printed out the variables and the absolute values.
>
> **[1:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=63)** Here, profit in September is negative, which represents a loss.
>
> **[1:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=67)** Then in October, profit is positive, which represents a gain.
>
> **[1:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=72)** Applying abs() gives you the magnitude of each value.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=75)** The magnitude of the value in September is 250, while the magnitude of the value in October is 400.
>
> **[1:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=83)** Next is the round() function, which allows you to control decimal precision.
>
> **[1:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=88)** By default, it rounds to the nearest integer, but you can also round to a specified number of decimal places.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=95)** You'd pass in a second argument to specify how many decimal places to keep.
>
> **[1:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=99)** In data science, you often perform calculations that produce long floating point numbers.
>
> **[1:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=104)** For example, if you measure the accuracy score of a model, Python might return something like this.
>
> **[1:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=111)** Here, the variable accuracy has the value 0.918372645.
>
> **[1:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=118)** That's the raw value, but it's not easy to read.
>
> **[2:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=122)** You can apply the round() function to make it more readable, and you have options for how you round.
>
> **[2:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=128)** For instance, you can pass in 2 as a second argument to round to two decimal places, and you can pass in 3 to round to three decimal places.
>
> **[2:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=136)** This makes the result easier to interpret and report.
>
> **[2:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=140)** The same principle applies to percentages, monetary values, or statistical results.
>
> **[2:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=146)** By combining abs() and round(), you can better control the way numeric data is represented and interpreted in your analysis.
>
> **[2:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/handle-magnitudes-and-precision-in-data?u=76281980&t=154)** These small adjustments can make your results clearer and easier to communicate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), pass (3), this: (1), let (1), default, (1)
> **CLI Commands:** python (3), make (2)
> **Analogies:** for example (2), for instance (1)
> **Code Identifiers:** sept_profit (1), oct_profit (1)
> **Versions:** 0.918372645 (1)
> **Definitions:** in other words (1)

#### Aggregate data with basic functions
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=0)** Aggregating data into quick summary statistics is often the first step in exploratory data analysis.
>
> **[0:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=6)** It's important to start with getting a high-level sense of your data.
>
> **[0:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=10)** In this lesson, I'll show you how to aggregate values in Python using four built-in functions: min(), max(), sum(), and len().
>
> **[0:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=19)** You'll leave knowing how each works and how to use them to help summarize your data efficiently.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=25)** Suppose you have a list of daily temperatures.
>
> **[0:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=28)** Here I've defined a variable-- temps --and assigned it to a list of temperature values.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=33)** You can use min() to find the smallest value in the dataset.
>
> **[0:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=37)** Here I've called the min() function and passed in temps.
>
> **[0:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=40)** I've also used the print() function so that the minimum value gets printed.
>
> **[0:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=45)** This tells you that the coldest temperature reading from the series is 68.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=50)** Next, you can use max() to identify the largest value.
>
> **[0:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=53)** Here I've called the max() function and passed in temps.
>
> **[0:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=57)** I've also used the print() function again to print out the maximum value.
>
> **[1:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=62)** This shows you that the hottest temperature reading in this dataset is 76.
>
> **[1:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=67)** Then you can use len() to get the length of this list, which also tells you how many values are in the dataset.
>
> **[1:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=74)** Here I've called the len() function and passed in temps and I've printed the result.
>
> **[1:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=79)** Running it tells you that you have 10 temperature readings.
>
> **[1:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=82)** Now let's say you want to get the average temperature reading from this data.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=87)** To do this, you'll need to divide the sum of the temperatures by the number of temperature values.
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=92)** First, you can use sum() to calculate the total of all the values in temps.
>
> **[1:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=97)** Here I've called the sum() function and passed in temps.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=101)** Next you can incorporate sum() and len() together to calculate the average temperature.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=107)** Here I divide two values.
>
> **[1:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=109)** The first value is the result of calling the sum() function on temps.
>
> **[1:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=113)** The second value is the result of calling the len() function on temps, and I use print() to display the final result.
>
> **[2:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=121)** So the average temperature reading from this data is 71.9.
>
> **[2:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/aggregate-data-with-basic-functions?u=76281980&t=126)** So with just a few lines of code, you can start summarizing a dataset and build intuition before moving on to more-advanced analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (1), this, (1)
> **CLI Commands:** python (1), find (1)
> **Versions:** 71.9 (1)
> **Prerequisites:** you'll need (1)

#### Sort, filter, and transform your data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=0)** Raw data isn't always in the form you need.
>
> **[0:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=3)** Often you'll want to sort it, filter out certain values, or transform it into a new structure before moving on to deeper analysis.
>
> **[0:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=11)** In this lesson, you'll learn how to use four built-in functions that help you rearrange and prepare data: sorted(), map(), zip(), and filter().
>
> **[0:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=20)** These functions are powerful tools for ordering, pruning, and transforming sequences in Python.
>
> **[0:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=26)** Let's start with sorted(), which arranges values in ascending order by default.
>
> **[0:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=31)** Here I've defined a variable named “scores” that's assigned to a list of scores.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=36)** I've printed the scores as they are.
>
> **[0:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=38)** Then I've called the sorted() function, passed in scores and printed the result.
>
> **[0:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=42)** This quickly ordered the data.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=44)** You can easily tell that the lowest score was 79 and the highest score was 93.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=50)** Now it's also possible to sort in descending order.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=54)** You can call sorted(), pass it scores, and then pass in reverse=True.
>
> **[1:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=60)** This will sort the values in reverse from largest to smallest value.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=66)** And it worked.
>
> **[1:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=68)** Next on the agenda is the map() function.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=71)** Map() lets you apply a function to every item in a sequence.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=75)** For example, suppose you want to convert a list of temperatures from Fahrenheit to Celsius.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=80)** Here I've defined the variable temps_f, which represents a list of temperature values in Fahrenheit.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=86)** Then I've defined the variable temps_c by converting the values in temps_f to Celsius.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=93)** Starting from the inner to outer expressions, I've called the map() function.
>
> **[1:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=98)** First, I passed in a lambda function which takes in an argument x and returns (x - 32) in parentheses times five divided by nine, which converts x from Fahrenheit to Celsius.
>
> **[1:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=111)** As a second argument for map(), I've passed in temps_f, which indicates that the lambda function will be applied to every value in the temps_f list.
>
> **[2:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=121)** Outside of that, I've called the list() function, which ensures that the final output is in the form of a list.
>
> **[2:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=127)** Each Fahrenheit value has been transformed using the conversion formula.
>
> **[2:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=132)** The zip() function combines multiple sequences into pairs.
>
> **[2:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=136)** Imagine you have a list of student names and a list of their scores.
>
> **[2:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=140)** Here I've defined the variable “names”, assigned to a list of student names, and the variable “scores”, assigned to a list of the students' scores.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=149)** To pair up each student's name and score, I first called a zip() function and passed in names, followed by scores.
>
> **[2:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=156)** Outside of that, I've called the list() function to ensure that the final output is in the form of a list.
>
> **[2:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=162)** I've saved this in the variable “paired”, which I can print to get the result.
>
> **[2:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=168)** In the list that's displayed, there are tuples representing each pair of elements aligned from the two original lists.
>
> **[2:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=175)** Finally, filter() selects only the values that meet a condition.
>
> **[2:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=179)** For example, suppose you want to extract only the passing scores.
>
> **[3:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=183)** Let's say for this example that passing is 75 or higher.
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=187)** Here I've defined the variable “scores”, which is again the list of scores.
>
> **[3:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=191)** Then I've defined the variable “passing”.
>
> **[3:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=194)** To do this I've first called the filter() function, passing in a lambda function that takes in an argument x and returns whether x is greater than or equal to 75, followed by scores.
>
> **[3:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=205)** So filter() will use the lambda function to evaluate which values in the scores list meet the condition you want to filter by, and those values will be kept.
>
> **[3:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=215)** Other values will be excluded.
>
> **[3:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=218)** Outside of that, I've called the list() function to ensure that the final output is a list.
>
> **[3:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=224)** There.
>
> **[3:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=225)** The output is a filtered list containing just the scores that are 75 or higher.
>
> **[3:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/sort-filter-and-transform-your-data?u=76281980&t=231)** By using sorted(), map(), zip(), and filter(), you can sort, transform and restructure your data efficiently-- all essential steps in preparing your data for meaningful analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), lambda (4), let (2), pass (2), default. (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)


### 2. NumPy and SciPy Fundamentals

#### Create NumPy arrays in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=0)** NumPy arrays are the foundation of numerical computing in Python, and the performance-optimized backbone of nearly every data science workflow.
>
> **[0:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=8)** They make it possible to handle large volumes of numeric data efficiently.
>
> **[0:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=13)** In this lesson, you'll learn how to create one-dimensional and multi-dimensional arrays using the NumPy library.
>
> **[0:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=19)** Let's start with one-dimensional arrays.
>
> **[0:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=22)** A one-dimensional array is a sequence of values arranged in a single row, similar to a list, but optimized for numerical operations.
>
> **[0:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=30)** First import NumPy.
>
> **[0:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=32)** The convention is to import it using the alias “np”.
>
> **[0:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=37)** The np.array() function converts existing Python data structures, like lists or lists of lists, into NumPy arrays.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=44)** Here I've defined a variable named “array1”.
>
> **[0:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=47)** I've called the np.array function and passed in a list of numeric values.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=52)** Running this prints a one-dimensional NumPy array containing the same values.
>
> **[0:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=57)** Even though this looks like a Python list, NumPy arrays are much faster and more memory-efficient, which is why they're used for numerical computations in data science.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=66)** You can also create multi-dimensional arrays, which are arrays that contain rows and columns-- essentially, a matrix.
>
> **[1:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=74)** NumPy can be used to represent these multi-dimensional structures.
>
> **[1:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=78)** Here I've created a two-dimensional array by passing in a list of lists, where each inner list represents a row.
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=85)** This array represents some data across two variables.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=89)** I called np.array and passed in a list of lists where the first row is 1, 2, 3.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=95)** The second row is 4, 5, 6, and the third row is 7, 8, 9.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=101)** This produces a three-by-three array or a three-row by three-column grid of numbers.
>
> **[1:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=106)** NumPy also provides several functions for generating arrays filled with specific types of values.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=112)** These are especially useful when you need to initialize data structures or generate test data.
>
> **[1:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=118)** Here I've defined four arrays using functions from NumPy.
>
> **[2:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=122)** I've called np.zeros() and passed in 5, which creates a NumPy array containing five 0s.
>
> **[2:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=128)** I've called np.ones() and passed in the tuple 2, 3, which creates a two-by-three NumPy array filled entirely with 1s.
>
> **[2:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=137)** The next function is np.arange(), which creates an array by stepping through values with a fixed increment.
>
> **[2:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=144)** I've called np.arange and passed in the arguments 0, 10, 2, which creates a one-dimensional NumPy array by stepping through values starting at 0, stopping before 10, with a fixed increment of 2 each step.
>
> **[2:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=159)** Finally, I've called np.arange() and passed in the arguments 1, 10, 2, which creates a one-dimensional NumPy array by stepping through values starting at 1, stopping before 10, with a fixed increment of 2 each step.
>
> **[2:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=174)** Check out what gets displayed.
>
> **[2:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=176)** As you can see, the variable zeros is an array of five 0s.
>
> **[3:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=180)** The variable ones is a two-by-three array of 1s.
>
> **[3:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=183)** The variable evens is an array containing 0, 2, 4, 6, 8.
>
> **[3:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=188)** And the variable odds is an array containing 1, 3, 5, 7, 9.
>
> **[3:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=193)** Another function to know is np.linspace(), which creates an array by dividing a range into a fixed number of evenly spaced points.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=202)** While np.arange() steps through a range by a fixed increment, np.linspace() divides a range into a specified number of points.
>
> **[3:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=210)** This is often used when plotting or sampling data.
>
> **[3:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=214)** Here I've defined a variable named “evenly_spaced”, and I've called the function np.linspace() and passed in 0, 1, 5.
>
> **[3:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=223)** This produces five evenly spaced values between 0 and 1, including both end points.
>
> **[3:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=230)** So while np.arange() is based on step size, np.linspace() is based on number of values.
>
> **[3:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=237)** For simulations, experiments, or generating sample data, NumPy’s random module is extremely useful.
>
> **[4:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=244)** The np.random.randint() function generates random integers within a specified range.
>
> **[4:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=251)** Here I've defined a variable named “random_integers”, and I've called the function np.random.randint().
>
> **[4:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=258)** Here's what this does.
>
> **[4:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=259)** The first two arguments 0 and 100 specify the range: random integers from 0 up to, but not including, 100.
>
> **[4:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=269)** The size=(3, 4) argument creates a three-by-four array of random integers.
>
> **[4:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=276)** Great job!
>
> **[4:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=277)** You've created arrays from lists using np.array(); arrays filled with zeros or ones; evenly spaced arrays using np.arange() and np.linspace(); and arrays with random integers using np.random.randint().
>
> **[4:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-numpy-arrays-in-python?u=76281980&t=292)** These are the essential building blocks for everything else you'll do with NumPy.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (1), finally, (1), module (1)
> **Definitions:** is an  (3), is a  (2)
> **CLI Commands:** python (3), make (1)
> **Code Identifiers:** evenly_spaced (1), random_integers (1)
> **Analogies:** similar to (1)

#### Index and slice NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=0)** When you're working with arrays in data science, you'll often need to access and extract specific values or subsets of data.
>
> **[0:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=7)** NumPy makes this easy with indexing and slicing.
>
> **[0:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=10)** In this lesson, you'll learn how to use both techniques to extract individual elements and portions of data from NumPy arrays.
>
> **[0:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=18)** First, let's import NumPy and create a simple array to work with.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=23)** You can access an individual element by its index.
>
> **[0:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=26)** Just like lists in Python, NumPy uses 0-based indexing.
>
> **[0:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=30)** That means the first element is at position 0, the second element is at position 1, and so on.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=36)** To get the element at a specific index, you type in the name of the array, followed by the index position within square brackets.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=44)** If you run this, the first element printed is 10 and the third element is 30.
>
> **[0:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=49)** You can also use negative indices to access elements starting from the end.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=54)** For example, to get the last element you'd type in array1d[-1].
>
> **[1:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=62)** This prints 50, the final value in the array.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=66)** Now let's talk about slicing.
>
> **[1:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=68)** Slicing lets you extract a range of values instead of a single element.
>
> **[1:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=73)** NumPy slicing follows the same start index inclusive and index exclusive rule as Python lists.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=80)** To slice a NumPy array, you type in the name of the array followed by the start index, colon, end index in square brackets.
>
> **[1:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=88)** Here array1d[0:3] gives you elements at position 0, 1, and 2.
>
> **[1:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=96)** Then array1d[1:4] gives you elements at positions 1, 2, and 3.
>
> **[1:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=104)** You can also omit one side of the slice to select everything before or after a point.
>
> **[1:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=110)** Here, array1d[2:] extracts all elements from index 2 onward.
>
> **[1:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=117)** Then array1d[:3] extracts all elements up to but not including index 3.
>
> **[2:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=124)** For multi-dimensional arrays, you can use a comma-separated notation to index rows and columns.
>
> **[2:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=131)** Array2d[1] returns the entire second row, which is the array 40, 50, 60.
>
> **[2:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=139)** Array2d[:, 2] Array2d[:, 2] returns all rows, but only the third column, which is the array 30, 60, 90.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=149)** Indexing and slicing are some of the most common operations you'll perform when working with arrays.
>
> **[2:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/index-and-slice-numpy-arrays?u=76281980&t=155)** They allow you to isolate exactly the data you need so you can clean and prepare your data for analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **CLI Commands:** python (2)
> **Analogies:** just like (1), for example (1)

#### Reshape NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=0)** Being able to inspect and reorganize an array is crucial in data science, especially when preparing data for computations or machine-learning models.
>
> **[0:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=9)** In this lesson, you'll learn how to check the dimensions of an array and reshape it into a new structure using .shape and .reshape.
>
> **[0:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=17)** Let's start with importing NumPy and creating a simple two-dimensional array.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=25)** To inspect this array's dimensions, use the .shape attribute.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=29)** Do array.shape and print it out.
>
> **[0:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=32)** This tells you that the array has two rows and three columns.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=36)** Now you can change the shape of the array using the .reshape method.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=41)** Here I'll convert this two-by-three array into a three-by-two array.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=46)** I've called array.reshape and passed in 3, 2.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=50)** When you reshape, the total number of elements must stay the same.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=54)** The original array has six elements and the reshaped version also has six.
>
> **[0:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=59)** You can also use negative one as a placeholder when you only want one dimension to be inferred automatically.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=66)** Here I've used np.arange to define an array with 12 values.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=71)** Then I've called array.reshape and passed in 3, -1.
>
> **[1:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=77)** NumPy automatically calculates that the second dimension should be four, given that the original array has length 12, and you want to make three rows.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=86)** This output contains the same values as the original array, but reorganized from a flat array to a three-by-four array.
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=94)** Using .shape and .reshape helps you control the structure of your data.
>
> **[1:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/reshape-numpy-arrays?u=76281980&t=99)** This flexibility becomes especially important when feeding arrays into algorithms that expect specific input types.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)

#### Transform and scale NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=0)** Data transformation is an important step of preparing your data for analysis or modeling.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=5)** Transformations can include adjusting values, shifting them, or combining arrays to create new features.
>
> **[0:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=12)** Another key preprocessing step is scaling, which means changing the size or range of your values in a consistent, proportional way.
>
> **[0:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=20)** NumPy makes both transformation and scaling easy to perform using vectorized operations, which apply calculations to entire arrays at once.
>
> **[0:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=30)** In this lesson, you'll learn how to transform and scale arrays using NumPy.
>
> **[0:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=35)** Let's start by importing NumPy and creating a NumPy array representing some numerical data.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=41)** I've defined the variable data using np.array and passing in a list of numbers.
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=48)** A helpful feature of NumPy is that you can perform operations directly on entire arrays without using loops.
>
> **[0:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=55)** These operations apply element by element, which is known as vectorization.
>
> **[1:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=60)** Let's look at a few examples with the data array that was just defined.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=64)** Data + 5 creates an array where 5 has been added to each value from the original array.
>
> **[1:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=70)** Data - 5 creates an array where 5 has been subtracted from each value from the original array.
>
> **[1:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=76)** Data * 2 creates an array where each value comes from the original array multiplied by 2, and data / 10 creates an array where each value comes from the original array divided by 10.
>
> **[1:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=90)** Each operation is applied element by element.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=93)** It's much faster than looping through individual elements in Python.
>
> **[1:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=97)** Each of these is an example of transforming the data, modifying the values using arithmetic operations.
>
> **[1:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=104)** The multiplication and division examples also demonstrate scaling because they change the size or range of all values proportionally.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=112)** You can also combine arrays through element-wise operations.
>
> **[1:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=116)** I've defined a second array called data2 using np.array and passing in a list of numbers.
>
> **[2:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=122)** Then I've multiplied data one times data2 and printed the result.
>
> **[2:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=127)** Here, each value in data is multiplied by the value at the same position in data2.
>
> **[2:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=134)** This is another vectorized element-wise transformation.
>
> **[2:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-and-scale-numpy-arrays?u=76281980&t=138)** Vectorized operations make NumPy efficient and concise, allowing you to transform and scale entire arrays with a single line of code.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), make (1)
> **Code Keywords:** let (2)
> **Definitions:** known as (1), is an  (1)

#### Extract key values with NumPy
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=0)** Summarizing numerical data is essential for understanding patterns and making decisions.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=5)** In this lesson, you'll learn how to compute summary statistics and identify extreme values using NumPy's built in methods.
>
> **[0:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=13)** Let's start with importing NumPy and creating an array of data.
>
> **[0:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=19)** Now let's calculate some key statistics about this data using functions from NumPy.
>
> **[0:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=24)** Each of these functions summarizes the values in the dataset in a different way.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=29)** To compute the mean value of the data, I've called np.mean.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=33)** To compute the median value of the data, I've called np.median.
>
> **[0:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=38)** To compute the variance of the values in the data, I've called np.var.
>
> **[0:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=43)** To compute the standard deviation of the values in the data, I've called np.std.
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=48)** To compute the minimum value in the data, I've called np.min.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=54)** And to compute the maximum value in the data, I've called np.max.
>
> **[0:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=59)** I've passed in data when calling each of these functions.
>
> **[1:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=63)** You can also find the index position of the minimum and maximum values by using functions from NumPy and passing in data.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=71)** Here I've called np.argmin, which tells me that the smallest value in the dataset is located at index 1.
>
> **[1:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=78)** I've also called np.argmax, which tells me that the largest value in the data is located at index 7.
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=85)** This is especially useful when you want to locate where those extreme values occur.
>
> **[1:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-key-values-with-numpy?u=76281980&t=90)** Computing these statistics gives you a quick overview of your data’s range and variation, an essential step before modeling or visualization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), var (1)
> **CLI Commands:** find (1)

#### Solve matrix-based problems with SciPy
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=0)** Matrix operations are at the core of many data science and machine learning algorithms.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=5)** In this lesson, you'll use SciPy's linear algebra module to compute determinants, inverses, and solutions for matrix equations.
>
> **[0:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=14)** First, import NumPy and SciPy’s linear algebra module.
>
> **[0:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=19)** Let's define a two-by-two matrix using np.array.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=23)** You can save it in a variable named A.
>
> **[0:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=27)** You can calculate the determinant by calling the function linalg.det and passing in matrix A.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=36)** If the determinant is not 0, that means the matrix is invertible.
>
> **[0:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=40)** To find the inverse, call the function linalg.inv and pass in matrix A.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=46)** Save the result in a variable named A_inverse.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=50)** You can verify the inverse by multiplying the matrix by its inverse, which would result in the identity matrix.
>
> **[0:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=57)** To perform this dot product, call the function np.dot and pass in A and A_inverse.
>
> **[1:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=68)** You can also solve a system of linear equations directly by calling the function linalg.solve() and passing in a square coefficient matrix and a vector or matrix of constants.
>
> **[1:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=79)** Linalg.solve() is a function that solves a system of linear equations of the form ax = b, where a is a matrix containing the coefficients of the system, b is a vector of constants, and x is the unknown vector that you want to find.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=95)** Here I've defined an array b using np.array and passed in a list of numbers.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=101)** Then I've defined a variable x, which is the unknown vector that I want to solve for.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=107)** To solve for x, I've called linalg.solve and passed in a as my square coefficient matrix and b as my vector of constants.
>
> **[1:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=116)** Lastly, I make sure to print the solution vector so I can check it out.
>
> **[2:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=123)** With SciPy’s linear algebra functions, you can efficiently perform essential matrix computations.
>
> **[2:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/solve-matrix-based-problems-with-scipy?u=76281980&t=129)** These skills are key to regression, transformations, and dimensionality reduction.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), module (2), pass (2), let (1), for. (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Best Practices:** make sure to (1)

#### Run statistical functions with SciPy
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=0)** Statistical analysis is a core part of drawing inferences and validating insights in data science.
>
> **[0:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=6)** In this lesson, you'll use SciPy stats module to work with probability distributions and hypothesis tests.
>
> **[0:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=13)** Probability distributions are at the heart of statistics in data science.
>
> **[0:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=17)** They describe how values in your dataset are expected to be distributed, or in other words, how likely certain outcomes are.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=25)** Understanding distributions helps you make predictions, run simulations, and calculate probabilities that guide data-driven decisions.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=33)** The most common of these is a normal distribution, also known as the Gaussian distribution.
>
> **[0:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=39)** It's the familiar bell-shaped curve that shows up in many contexts, from measurement errors to test scores to model residuals.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=46)** In SciPy, the stats module gives you tools to work with these distributions directly.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=52)** Import the stats module first.
>
> **[0:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=55)** Let's start with a normal distribution.
>
> **[0:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=58)** You can compute the probability density function, also known as a PDF, for a specific value.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=64)** The PDF represents the height of the curve at a given point.
>
> **[1:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=67)** It tells you how dense the probability is around that value.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=71)** Here I've called the function stats.norm.pdf and passed in 0, which returns the height of the standard normal curve at x=0.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=80)** This value peaks at about 0.3989, which corresponds to the center of the bell curve.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=86)** It's not the probability of x=0 itself, but rather the relative likelihood of values near 0.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=93)** Next, you can find cumulative probabilities using the cumulative distribution function, also known as the CDF.
>
> **[1:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=99)** The CDF tells you the probability that a random variable is less than or equal to a certain value.
>
> **[1:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=105)** Here I've called the function stats.norm.cdf and passed in 1.96, which returns the probability that a random variable from the standard normal distribution is less than or equal to 1.96.
>
> **[1:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=119)** This returns roughly 0.975, meaning that about 97.5% of values in a standard normal distribution fall below 1.96.
>
> **[2:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=130)** This is why 1.96 is used as a cutoff for 95% confidence intervals, because the middle 95% of the curve lies between -1.96 and positive 1.96.
>
> **[2:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=143)** Next, you can calculate percentile scores with the function stats.scoreatpercentile().
>
> **[2:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=148)** This function calculates the value, or score, below which a given percentage of the data falls.
>
> **[2:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=154)** It takes in two arguments.
>
> **[2:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=156)** The first argument is your dataset, and the second argument is the percentile you want.
>
> **[2:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=162)** Here I've defined a variable data and assigned it to a list of numbers, and I've called the function stats.scoreatpercentile() and passed in 80.
>
> **[2:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=171)** This gives me the 80th percentile in my data.
>
> **[2:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=174)** The output is 8.4, so 80% of the values in the dataset are less than or equal to 8.4.
>
> **[3:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=182)** Finally, let's run a hypothesis test.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=185)** Imagine you're comparing the performance of two groups of students who took different approaches for studying before a test.
>
> **[3:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=192)** Group one represents scores from students who used a new learning tool.
>
> **[3:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=196)** Group two represents scores from students who follow traditional learning methods.
>
> **[3:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=200)** You want to know whether the difference in their average scores is statistically significant.
>
> **[3:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=205)** That is, whether it's likely due to the study method rather than random chance.
>
> **[3:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=210)** To answer that question, you would conduct an independent samples t-test.
>
> **[3:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=214)** An independent samples t-test compares the means, or averages, of two independent groups to determine if they’re significantly different from each other.
>
> **[3:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=223)** It assumes the two groups are independent, as in no overlap in participants or measurements; the data in each group is approximately normally distributed; and the variances between groups are roughly equal.
>
> **[3:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=237)** Before running the test, it's standard practice to choose a significance level, often written as alpha.
>
> **[4:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=244)** This is the p value threshold you will use to decide whether the difference between groups is statistically meaningful.
>
> **[4:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=251)** A common choice is 0.05.
>
> **[4:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=255)** Setting this cutoff before computing the p value helps avoid bias when interpreting the results.
>
> **[4:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=261)** It's also important to define the hypotheses you're testing.
>
> **[4:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=265)** The null hypothesis states that the two groups have the same mean score.
>
> **[4:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=269)** In other words, the study method has no effect.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=272)** The alternative hypothesis states that the two groups have different mean scores.
>
> **[4:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=276)** In other words, the study method does affect performance.
>
> **[4:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=280)** SciPy provides the function stats.ttestind() for running an independent samples t-test.
>
> **[4:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=286)** It takes in two arguments.
>
> **[4:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=289)** The first argument is the first sample-- in other words, group one.
>
> **[4:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=293)** The second argument is a second sample-- in other words, group two.
>
> **[4:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=297)** It returns two values: the t-statistic, which measures how far apart the group means are relative to their variability, and the p-value, which tells you the probability of observing that difference or a larger one if the two groups truly had the same mean.
>
> **[5:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=314)** Here I've defined the variables group1 and group2.
>
> **[5:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=317)** Group1 is a list of scores from students who used the new learning tool.
>
> **[5:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=322)** Group2 is a list of scores from students who followed traditional learning methods.
>
> **[5:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=328)** Then I've called stats.ttest_ind() and passed in group1 and group2.
>
> **[5:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=335)** This returns the t-statistic and the p-value, each of which I've saved in its own variable.
>
> **[5:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=341)** Afterwards, I've printed t_stat and p_value.
>
> **[5:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=347)** The t-statistic, which is approximately 4.2, shows a difference between group means is quite large relative to the variability within the groups.
>
> **[5:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=356)** The p-value, which is approximately 0.002, is less than 0.05.
>
> **[6:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=362)** So there's less than a 0.2% chance that this difference happened by random chance.
>
> **[6:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=367)** So it looks like the group of students who used the new learning tool performed significantly better on their tests than the group who used the traditional method.
>
> **[6:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/run-statistical-functions-with-scipy?u=76281980&t=375)** With the functions from SciPy stats module, you can efficiently perform statistical computations that are essential components for evaluating models in data science.

> [!info]- Semantic Content
>
> **Versions:** 1.96 (6), 8.4 (2), 0.05 (2), 0.3989 (1), 0.975 (1)
> **Code Keywords:** function (8), module (4), let (2), finally, (1)
> **Definitions:** is a  (5), in other words (5), known as (3)
> **Env Vars:** pdf (2), cdf (2)
> **Code Identifiers:** ttest_ind (1), t_stat (1), p_value (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** imagine (1)


### 3. pandas for Data Manipulation

#### Create pandas series and dataframes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=0)** The Pandas library makes it easy to work with tabular data.
>
> **[0:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=3)** In other words, data that's in a tabular format similar to spreadsheets with rows and columns.
>
> **[0:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=9)** Pandas is one of the most widely used tools in data science because it allows you to load, explore, and manipulate data efficiently.
>
> **[0:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=17)** In this lesson, you'll learn how to create Series and DataFrames, and how to load data directly from a CSV file, which is one of the most common file formats for datasets.
>
> **[0:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=27)** The first step is to import Pandas.
>
> **[0:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=30)** The convention is to import it using the alias “pd”.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=33)** A Pandas series is a one-dimensional array that supports both integer-based and label-based indexing.
>
> **[0:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=40)** You can think of it like a single column of data.
>
> **[0:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=42)** Here I'll create a Pandas series of student scores.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=46)** I've called pd.series() and passed in a list of scores as data.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=52)** You can see the series default indexing here, starting from 0 and increasing incrementally by 1.
>
> **[0:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=58)** Another option is to create the score series using letters for the indexing.
>
> **[1:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=63)** Here is how you could do that.
>
> **[1:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=65)** First, create a dictionary that maps each letter index to the score.
>
> **[1:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=70)** Then call pd.series() and pass in that dictionary as data.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=75)** When you run this, you'll see that this series has the letters a, b, c, d as the indexes, and the scores 88, 92, 79, 93 as the values.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=87)** Another incredibly useful object in Pandas is the Pandas DataFrame, which is a two-dimensional table made up of rows and columns.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=95)** One approach is to create the DataFrame manually from a Python dictionary.
>
> **[1:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=99)** I've defined a variable d and assigned it to a dictionary that maps the name label to a list of student names, and maps the score label to a list of student exam scores.
>
> **[1:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=109)** Then I've called pd.DataFrame() and passed in that dictionary as data.
>
> **[1:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=114)** I've saved the result in a variable df, which I display afterwards.
>
> **[1:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=119)** This created a DataFrame with columns for name and score.
>
> **[2:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=123)** Pandas automatically aligns the rows and labels everything for you.
>
> **[2:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=128)** Also, you can check out summary details about the DataFrame using the functions .info() and .describe().
>
> **[2:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=135)** .info() gives you the column names, data types, and number of non-null values, while .describe() provides quick summary statistics for numeric columns.
>
> **[2:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=146)** First I've called df.info.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=153)** Next I've called df.describe.
>
> **[2:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=157)** Now, in most data science workflows you won't usually type your data by hand.
>
> **[2:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=161)** You'll load it from a file.
>
> **[2:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=163)** The most common format for this is a CSV file, short for comma-separated values.
>
> **[2:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=169)** You can load a CSV file directly into a Pandas DataFrame using the pd.read CSV function.
>
> **[2:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=176)** Here I've called pd.read_csv() and passed in the string scores.csv.
>
> **[3:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=182)** This reads the exercise file scores.csv located in your current directory.
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=187)** The result is a Pandas DataFrame containing all the data from that file, and I've saved it in a variable named df_csv.
>
> **[3:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=196)** Then I've called df_csv.head().
>
> **[3:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=199)** This displays the first five rows, which is helpful when you're inspecting large datasets.
>
> **[3:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=204)** Check out the output.
>
> **[3:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=206)** You can also specify additional parameters in read_csv to handle more complexity, like changing the delimiter, skipping rows, or specifying which columns to read.
>
> **[3:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=216)** For example, I've called pd.read_csv(), passed in scores.csv as a first argument, and then passed in the parameter usecols assigned to the list Name, Score.
>
> **[3:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=229)** This loads only the name and score columns from the file.
>
> **[3:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=236)** Creating Series and DataFrames, and being able to load data directly from CSV files are fundamental steps in any data science workflow.
>
> **[4:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-pandas-series-and-dataframes?u=76281980&t=245)** These tools give you a clean, structured starting point for analysis and transformation.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1), short for (1)
> **Code Identifiers:** read_csv (3), df_csv (2)
> **Env Vars:** csv (5)
> **Code Keywords:** pass (1), this, (1), while . (1), function (1)
> **File Paths:** scores.csv (3)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise file (1)

#### Extract data subsets from pandas objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=0)** A big part of effective data analysis is isolating the information that matters most.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=5)** Maybe you want to compare just two features, examine a single record, or focus on values that meet specific criteria.
>
> **[0:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=12)** Pandas gives you the tools to target exactly the data you need.
>
> **[0:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=16)** In this lesson, you'll practice how to select specific columns, specific rows, and filtered subsets from a Pandas DataFrame.
>
> **[0:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=24)** First, import Pandas and load the data from the exercise file scores.csv.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=29)** So I've imported Pandas with the alias pd, and I've called pd.read_csv() and passed in scores.csv as a string and saved the resulting dataframe in the variable df.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=41)** After running this cell, take a quick look at the data.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=46)** You can extract a single column using square brackets and the column name.
>
> **[0:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=51)** Here I've extracted the score column.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=54)** I've typed df[score].
>
> **[1:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=61)** This returns a Pandas series containing only the score values.
>
> **[1:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=65)** To select multiple columns, pass in a list of column names inside another set of square brackets.
>
> **[1:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=71)** Here I've extracted the name and score columns.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=75)** I've typed df\[\[”Name”, “Score”]].
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=85)** This gives you a smaller data frame with just the columns you specified.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=89)** To select specific rows by index, use slicing just like you would with lists in Python.
>
> **[1:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=96)** Here I've typed df[0:2].
>
> **[1:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=102)** This returns the first two rows of the DataFrame corresponding to indices 0 and 1.
>
> **[1:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=108)** You can also extract specific rows using Pandas’ two main indexers: .iloc and .loc.
>
> **[1:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=116)** These look similar at first, but they work differently-- and knowing the difference is essential when you're working with DataFrames.
>
> **[2:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=124)** First, let's work with .iloc.
>
> **[2:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=126)** This method uses position-based indexing, which selects rows based on their numeric position in the DataFrame.
>
> **[2:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=134)** These positions start at 0 for the first row, then increase to 1, 2, 3, and so on-- just like standard Python indexing.
>
> **[2:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=143)** Here, I've done df.iloc[0], which selects the row at index position 0.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=149)** In other words, the first row.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=153)** Next let's look at .loc.
>
> **[2:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=155)** .loc is used for label-based indexing, meaning it selects rows based on the index labels.
>
> **[2:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=162)** To make this distinction clearer, let's create a version of the DataFrame where the index is set to the student names, and you'll use that version to call .loc.
>
> **[2:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=172)** Here I've called df.set_index() and passed in name, which creates a new DataFrame where the name column becomes the index, and I've saved it in a variable df_by_name.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=185)** Then I've called df_by_name.head() to preview the new DataFrame.
>
> **[3:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=190)** As you can see in this DataFrame, each student's name serves as a row label.
>
> **[3:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=196)** Now you can select rows using these labels, meaning you can look up rows by student name.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=202)** In this example, I'll use .loc on df_by_name to select the row for the student named Diana.
>
> **[3:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=210)** Now let's say you want to select that same row by using the index position instead of the index label.
>
> **[3:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=217)** And you happen to know that Diana's row is located at position 3.
>
> **[3:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=221)** You would call df_by_name.iloc[3].
>
> **[3:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=228)** Filtering allows you to extract only the rows that meet specific conditions-- one of the most common data operations in Pandas.
>
> **[3:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=237)** For example, you want to select only the students who scored above 90.
>
> **[4:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=241)** So you'll do df[df[”Score”] > 90].
>
> **[4:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=251)** Save that in a variable high_scores and then display high_scores.
>
> **[4:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=256)** This will filter out the values and isolate the scores that meet the condition of being greater than 90.
>
> **[4:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=262)** To filter based on multiple conditions, you can use logical operators.
>
> **[4:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=267)** The & symbol works as the “and” logical operator.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=272)** The | symbol works as the “or” logical operator.
>
> **[4:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=277)** For example, you want to filter by the students who scored above 80 and studied more than 10 hours.
>
> **[4:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=283)** So you'll do df[(df[”Score”] > 80) & (df[”Hours_Studied”] > 10)].
>
> **[5:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=300)** Save this in a variable “filtered” and then display filtered.
>
> **[5:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=304)** This will filter the values by two conditions: score being greater than 80 and hours studied being greater than 10.
>
> **[5:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=314)** You can also extract a specific cell using .loc or .iloc with both row and column arguments.
>
> **[5:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=321)** Here I've done df.loc[1, “Name”] which extracts the value at row index 1 and column Name.
>
> **[5:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=331)** You can see that the value extracted is Bob.
>
> **[5:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=334)** Then I've done df.iloc[2, 1] which extracts the value at row index 2 and column index 1.
>
> **[5:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=346)** The next value extracted is 79.
>
> **[5:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=348)** When you're working with larger datasets, you can use .head and .tail to preview just the first or last few rows.
>
> **[5:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=356)** Here I've called df.head() and passed in 2, which extracts the first two rows.
>
> **[6:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=363)** And I've called df.tail() and passed in 2, which extracts the last two rows of the DataFrame.
>
> **[6:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/extract-data-subsets-from-pandas-objects?u=76281980&t=370)** Being able to extract specific subsets of data, whether that's through columns, rows, or conditional filters, gives you control and flexibility in how you explore your dataset.

> [!info]- Semantic Content
>
> **Code Identifiers:** df_by_name (4), high_scores (2), read_csv (1), set_index (1)
> **Code Keywords:** let (4), pass (1)
> **Analogies:** just like (2), for example (2)
> **CLI Commands:** python (2), make (1)
> **File Paths:** scores.csv (2)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** in other words (1)

#### Modify pandas objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=0)** As you continue working with data in Pandas, you'll often need to make updates such as filling in missing values, adding or dropping columns, or renaming them for clarity.
>
> **[0:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=10)** Updating data in place helps keep your data pipeline clean and reduces errors later on.
>
> **[0:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=15)** In this lesson, you'll learn how to handle missing values and modify Pandas DataFrames by adding, dropping, and renaming columns.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=23)** Start by importing Pandas and loading the exercise file scores.csv into a DataFrame.
>
> **[0:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=31)** Take a quick look at the data.
>
> **[0:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=34)** Missing data is extremely common in datasets-- for instance, when survey responses are incomplete or certain values weren't recorded.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=41)** Pandas provides several ways to detect and handle missing values.
>
> **[0:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=46)** Let's first add an example missing value so you can see how Pandas handles it.
>
> **[0:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=51)** Here I'll create a missing value by using .loc to assign the value at row index 2 in the Hours_Studied column to None.
>
> **[1:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=61)** Then I'll display df to make sure this change was applied.
>
> **[1:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=67)** The missing value shows up in the DataFrame as NaN, which is how Pandas shows missing values.
>
> **[1:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=76)** This change means that Charlie’s study hours are missing now.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=80)** To check for missing data, you can use the .isna() function or the .isnull() function.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=86)** Both work the same way and return a Boolean mask.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=89)** This is a grid of true and false values that match the shape of your DataFrame.
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=94)** Each true indicates that the corresponding cell contains a missing value, while false means it's not missing.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=101)** Here I've called df.isna().
>
> **[1:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=109)** To count how many missing values there are in each column, use .isna().sum().
>
> **[1:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=118)** This shows you that there is one missing value, and that missing value is in the Hours_Studied column.
>
> **[2:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=124)** To fill missing values, you can use .fillna and pass in the value you want to fill with-- for example, the average study hours.
>
> **[2:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=133)** To get the average study hours, you would access the Hours_Studied column and call .mean() at the end.
>
> **[2:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=139)** You can save the result in a variable “mean_hours” and print it out.
>
> **[2:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=143)** Then access the Hours_Studied column and call .fillna() at the end, passing in mean_hours as the first argument, followed by inplace=True as the second argument.
>
> **[2:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=156)** Then display df to check that the replacement worked.
>
> **[2:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=165)** Now the missing value has been replaced with the average of the column.
>
> **[2:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=170)** The inplace=True argument ensures that the update happens directly in the DataFrame.
>
> **[2:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=176)** You can also remove rows that contain missing values using the .dropna method.
>
> **[3:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=181)** For the purposes of this example, let's now load in a version of this dataset that includes some missing values.
>
> **[3:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=188)** Call pd.read_csv and pass in that file name and save the DataFrame in a variable.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=213)** Next, call .dropna on that DataFrame.
>
> **[3:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=217)** This time, practice saving the modified DataFrame in a separate variable instead of updating the existing DataFrame in place.
>
> **[3:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=224)** This makes a copy of the DataFrame, drops any rows that contain at least one missing value, and assigns the result to a new variable named df_clean.
>
> **[3:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=234)** So df_with_missing still contains the missing values, while df_clean holds the clean data.
>
> **[4:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=240)** You can easily add new columns to a DataFrame by assigning a new series or list.
>
> **[4:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=245)** For example, let's create a new column called Passed, which is based on whether each student's score is 80 or higher.
>
> **[4:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=253)** Let's resume working with the initial DataFrame df.
>
> **[4:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=258)** This adds a column named Passed containing Boolean values, where True means that the student passed, and False means they didn't.
>
> **[4:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=267)** You can also perform calculations on existing columns to create new ones.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=272)** For example, you could calculate Score_per_Hour to measure how efficiently each student performed relative to their study hours.
>
> **[4:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=280)** This gives you a quick way to compare how much performance each hour of study produced-- a measure of efficiency.
>
> **[4:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=286)** Here, I've added a new column, Score_per_Hour, by indexing df and assigning it to the result of dividing the values in the Score column by the values in the Hours_Studied column.
>
> **[5:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=301)** Check out the result.
>
> **[5:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=306)** To remove columns you no longer need, use the .drop method and pass in the parameter columns assigned to the list of names of columns you want to remove.
>
> **[5:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=315)** You can also pass in a second parameter inplace=True if you want the update to be applied directly to your existing DataFrame.
>
> **[5:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=322)** Here's how to drop a single column.
>
> **[5:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=325)** I've called df.drop() and passed in columns=[”Passed”] followed by inplace=True.
>
> **[5:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=335)** In the resulting DataFrame, you can see that the Passed column is no longer there.
>
> **[5:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=340)** You can also drop multiple columns at once.
>
> **[5:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=343)** For example, if you no longer need Score_per_Hour and Hours_Studied for the data analysis you're working on, you can use .drop to remove those columns.
>
> **[5:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=352)** Here I've called df.drop() passed in columns=[”Score_per_Hour”, “Hours_Studied”], inplace=True.
>
> **[6:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=367)** Sometimes you'll want to rename columns to make them more descriptive or consistent.
>
> **[6:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=371)** Use the .rename method and pass in a dictionary, mapping old names to new names.
>
> **[6:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=377)** Here I've called df.rename and passed in columns equals a dictionary mapping Score to Exam_Score followed by inplace=True.
>
> **[6:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=390)** This updates the column name while preserving the DataFrame structure.
>
> **[6:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=397)** You can combine these techniques, checking for missing values, filling or dropping them, adding new columns, and renaming columns to clean and organize your datasets efficiently before analysis.
>
> **[6:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/modify-pandas-objects?u=76281980&t=409)** Modifying DataFrames in Pandas helps ensure that your data is well-structured, complete, and ready for further analysis or visualization.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), function (2), continue (1)
> **Code Identifiers:** mean_hours (2), df_clean (2), read_csv (1), df_with_missing (1)
> **Analogies:** for example (4), such as (1), for instance (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** scores.csv (1)
> **Exercise Files:** exercise file (1)

#### Combine data from pandas objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=0)** In data analysis, you'll often work with data that’s split across multiple tables or files.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=5)** Combining these tables is an essential step towards creating a complete dataset that supports deeper insights.
>
> **[0:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=12)** In this lesson, you'll learn two main ways to combine Pandas DataFrames.
>
> **[0:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=16)** The first is merging, which combines data based on matching keys or columns.
>
> **[0:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=22)** The second is concatenating, which stacks or joins DataFrames together.
>
> **[0:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=28)** Start by importing Pandas and creating two small DataFrames to work with.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=33)** Check out both to confirm what they look like.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=50)** Merging is used to combine two DataFrames based on shared column values, similar to performing a join in SQL.
>
> **[0:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=58)** In this case, both DataFrames have a column named Name, so that will be the key for the merge.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=64)** Here I've called pd.merge() and passed in scores followed by hours followed by on=”Name”.
>
> **[1:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=73)** I've saved the resulting DataFrame in a variable named “merged”.
>
> **[1:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=77)** Check out the result.
>
> **[1:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=78)** This merges the two DataFrames side by side, aligning rows where the name values match.
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=85)** The resulting DataFrame includes all columns from both input DataFrames: Name, Score, and Hours_Studied.
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=92)** You can also specify different types of joins using the how parameter.
>
> **[1:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=97)** Inner keeps only matching rows, which is the default.
>
> **[1:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=100)** Left keeps all rows from the left DataFrame.
>
> **[1:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=104)** Right keeps all rows from the right DataFrame.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=107)** And outer keeps all rows from both, filling in missing values with NaN.
>
> **[1:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=113)** Here is an example of an outer join where one table has an extra student.
>
> **[1:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=118)** I've defined the variable scores_extra as a DataFrame with columns Name and Score.
>
> **[2:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=123)** Then I've called pd.merge() and passed in scores_extra, followed by hours, followed by on=”Name”, followed by how=”outer”.
>
> **[2:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=134)** I've saved the result in a variable, “merged_outer”.
>
> **[2:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=137)** Notice how Evan appears in the result, but their Hours_Studied value is missing.
>
> **[2:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=143)** That's because their name existed only in the first DataFrame.
>
> **[2:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=146)** Compare it to the default inner join, which would only keep rows for Alice, Bob, Charlie, and Diana, as it includes only matching records that exist in both DataFrames.
>
> **[2:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=157)** Concatenation is another method for combining data in Pandas.
>
> **[2:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=161)** Concatenating is different from merging.
>
> **[2:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=164)** Instead of joining by a shared key, it simply stacks DataFrames together.
>
> **[2:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=168)** To stack rows one DataFrame below another, use pd.concat(), and pass in a list of DataFrames.
>
> **[2:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=176)** Here I've defined variables class_A and class_B as two DataFrames with columns Name and Score, where class_A contains data about students in class A, and class_B contains data about students in class B.
>
> **[3:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=190)** Then I've called pd.concat() and passed in a list containing class_A and class_B.
>
> **[3:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=197)** I've saved the result in a variable named “combined”.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=202)** This vertically concatenates the rows, giving you one combined DataFrame.
>
> **[3:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=207)** You can also concatenate horizontally by specifying axis equals one.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=213)** This stacks the columns side by side instead of stacking the rows.
>
> **[3:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=218)** Here I've defined the variables left and right as two DataFrames, each with one column.
>
> **[3:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=223)** Then I've called pd.concat and passed in a list containing left and right, followed by axis=1.
>
> **[3:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=233)** This produces a DataFrame with both columns A and B aligned by their index positions.
>
> **[4:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=240)** The axis parameter controls how Pandas combines the DataFrames.
>
> **[4:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=245)** By default, axis is equal to zero, which means Pandas stacks the DataFrames vertically by adding more rows.
>
> **[4:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=252)** When you set axis=1, Pandas stacks them horizontally by adding more columns side by side.
>
> **[4:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=259)** This parameter appears in many Pandas functions and always follows the same logic.
>
> **[4:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=265)** Axis=0 operates down the rows and axis=1 operates across the columns.
>
> **[4:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=271)** When concatenating DataFrames vertically, the original row indexes are preserved.
>
> **[4:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=276)** You can reset them if needed using .reset_index, passing in drop=True.
>
> **[4:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=282)** Here I've called pd.concat passed in a list containing class_A and class_B, and at the end called .reset_index, passing in drop=True.
>
> **[4:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=294)** I've saved the result in a variable “combined_reset”.
>
> **[4:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=299)** This gives you clean sequential indexing from zero onward.
>
> **[5:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=303)** The parameter drop=True indicates that the original indices will be dropped, and only new indices will be kept in the resulting DataFrame.
>
> **[5:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=312)** Merging and concatenating are fundamental techniques for combining datasets in Pandas.
>
> **[5:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/combine-data-from-pandas-objects?u=76281980&t=317)** They allow you to integrate data from multiple sources, align related records, and prepare unified tables for analysis.

> [!info]- Semantic Content
>
> **Code Identifiers:** scores_extra (2), reset_index (2), merged_outer (1), combined_reset (1)
> **Code Keywords:** case, (1), match. (1), default. (1), pass (1), default, (1)
> **Definitions:** is an  (2)
> **Env Vars:** sql (1)
> **Analogies:** similar to (1)

#### Group data from pandas objects
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=0)** One of the easiest ways to spot patterns in your data is by grouping it.
>
> **[0:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=4)** Grouping lets you compare categories-- for example, seeing which department has the highest average salary or the most experience.
>
> **[0:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=12)** In this lesson, you'll learn how to use the groupby() method in Pandas to group your data by categories and compute summary statistics for each group.
>
> **[0:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=21)** Start by importing Pandas and creating a sample dataset.
>
> **[0:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=31)** Here you have a sample dataset showing employees, their departments, salaries, and years of experience.
>
> **[0:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=39)** To group the data by department, call the groupby method and pass in the column name to groupby.
>
> **[0:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=45)** I've called df.groupby() and passed in Department, and I've saved the output in a variable named “grouped”.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=52)** At this point, grouped is a groupby object, which stores information about how the data is split into groups.
>
> **[0:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=59)** But you won't see much if you display it directly.
>
> **[1:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=62)** To actually view the results, you need to apply an aggregation function.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=66)** You can apply built-in functions such as mean, sum, count, and max to calculate summary statistics for each group.
>
> **[1:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=74)** I've called .mean() on the salary column in grouped.
>
> **[1:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=78)** This gives you the average salary within each department.
>
> **[1:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=82)** You can also compute other metrics.
>
> **[1:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=84)** Here I've called .sum() on the Salary column in grouped, which gets the total salary by department.
>
> **[1:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=92)** And then I've called .max() on the Years_Experience column in grouped, which gets the highest years of experience by department.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=101)** Each of these functions produces a series with one value per department.
>
> **[1:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=105)** Another thing you can do is you can aggregate multiple columns at once by passing a list to the aggregation function.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=112)** For example, I've called .mean() on a subset of the data-- specifically on the columns Salary and Years_Experience in grouped.
>
> **[2:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=121)** This returns a DataFrame showing the average salary and average years of experience for each department.
>
> **[2:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=127)** The .agg method lets you apply multiple aggregation functions at once, either to all columns or specific ones.
>
> **[2:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=135)** I've called grouped.agg and passed in a dictionary that maps salary to a list of built-in functions consisting of mean, min, and max, and maps Years_Experience to a list of functions consisting of mean and max.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=149)** I've saved the output in a variable named “summary”.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=153)** This gives you a more detailed summary table with several metrics per department.
>
> **[2:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=158)** After grouping, the group labels such as Sales and HR become the data frame index.
>
> **[2:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=165)** If you want to keep them as a regular column, use .reset_index().
>
> **[2:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=170)** Here I've called summary.reset_index() and saved the output in a variable named summary_reset.
>
> **[2:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=177)** Now Department appears as a regular column again, which can be helpful when preparing data for visualization or further analysis.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=185)** You can also define your own custom functions and apply them to groups.
>
> **[3:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=190)** For example, to calculate the salary range within each department, I've defined a function named salary_range that takes in an argument x that represents a Pandas series and returns the difference between the maximum and minimum values in that series.
>
> **[3:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=206)** Then I've called .apply() on the Salary column in grouped and passed in salary_range.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=213)** This computes the difference between the highest and lowest salary for each department.
>
> **[3:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=218)** Grouping and aggregating data helps you summarize large datasets and uncover patterns that aren't obvious at the individual record level.
>
> **[3:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/group-data-from-pandas-objects?u=76281980&t=226)** With groupby and aggregation functions, you can quickly move from raw data to meaningful insights.

> [!info]- Semantic Content
>
> **Code Identifiers:** reset_index (2), salary_range (2), summary_reset (1)
> **Analogies:** for example (3), such as (2)
> **Code Keywords:** function (3), pass (1)
> **Definitions:** is a  (1)

#### Transform data with pandas apply()
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=0)** Sometimes, the built-in Pandas methods don't give you exactly what you need for the data transformations or feature engineering that you're trying to do.
>
> **[0:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=8)** When that happens, you can create your own custom functions and use .apply() to apply them directly to your DataFrame.
>
> **[0:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=16)** In this lesson, you'll learn how to use the .apply() method to run your own functions on Pandas series and DataFrames.
>
> **[0:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=22)** Start by importing Pandas and setting up a sample dataset.
>
> **[0:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=31)** Here you have a DataFrame containing student names, their scores, and study hours.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=36)** Let's say you want to convert the score column into a new metric, a percentage grade out of 100.
>
> **[0:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=43)** You can define a function that adds context to or transforms each value, and then use .apply() to apply it across the column.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=50)** I've defined a function named to_percentage that takes in an argument x, which is a numeric value, and returns a formatted string using an f string.
>
> **[1:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=60)** This adds a percent sign after the numeric value.
>
> **[1:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=63)** Then I've indexed df to add a new column named Score_Percent and assigned it to the result of calling .apply() on the Score column, passing in to_percentage.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=75)** Here, Pandas applies the to_percentage function to every value in the Score column, producing a new column of formatted percentage strings.
>
> **[1:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=84)** .apply() takes care of looping through all the rows for you.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=87)** No manual iteration needed.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=89)** For shorter or one-off transformations, you can use a lambda function, which is an inline, unnamed function that you define directly within your code without needing to write a full def block.
>
> **[1:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=101)** In other words, instead of defining a separate function above your code, you can write it in a single line right where you need it.
>
> **[1:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=108)** Lambda functions are great for quick operations that you don't plan to reuse.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=112)** Here's an example that calculates Score_per_Hour, showing how much each student achieved for every hour of study.
>
> **[1:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=119)** I've called df.apply() and passed in a lambda function that takes in row as an argument and returns the value in the Score column divided by the value at the Hours_Studied column from that row, followed by axis=1.
>
> **[2:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=133)** I've added a new column in df named Score_per_Hour, and assigned it to the output from the call to .apply().
>
> **[2:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=141)** So the function inside .apply() is run once for every row in df.
>
> **[2:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=146)** Setting axis=1 means it operates across columns within each row.
>
> **[2:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=151)** Each row is passed in as a Pandas series so you can reference columns by name.
>
> **[2:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=156)** This adds a new column that measures performance efficiency for each student.
>
> **[2:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=161)** You can also use .apply() to operate down columns instead of across rows.
>
> **[2:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=166)** This is the default behavior equivalent to axis=0.
>
> **[2:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=170)** For example, you could find the range of each numeric column.
>
> **[2:55](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=175)** Here I've called .apply() on a subset of df-- just columns Score and Hours_Studied-- and passed in a lambda function that takes in call as an argument which represents a column, and returns the column’s maximum value minus the column's minimum value.
>
> **[3:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=191)** I've saved the output in a variable named “ranges.”
>
> **[3:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=194)** This outputs a brief summary showing the difference between the highest and lowest values in each numeric column in the DataFrame.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=202)** Also, you can use .apply() to apply more complex logic that depends on multiple columns.
>
> **[3:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=210)** Student performance can be measured by not just results but also effort.
>
> **[3:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=214)** In this example, you'll use both Score and Hours_Studied to assign a Performance label.
>
> **[3:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=219)** Students with high scores and consistent study effort will be labeled High, while others will fall into Average or Low categories.
>
> **[3:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=228)** First, define a function named performance_label that takes in a row.
>
> **[3:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=232)** Use a conditional statement to determine whether to return High, Average, or Low.
>
> **[3:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=237)** Here's an example of what that conditional logic could be.
>
> **[4:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=241)** If Score is greater than or equal to 90, and Hours_Studied is greater than or equal to 10, return High; elif Score is greater than or equal to 80, and Hours_Studied is greater than or equal to 8, return Average; else return Low.
>
> **[4:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=260)** Then add a new column to df named Performance and assign it to the result of calling .apply() on df, passing in performance_label followed by axis=1.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=272)** So the performance_label function is applied to every row of the DataFrame.
>
> **[4:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=277)** The axis=1 argument tells Pandas to apply this function across columns, making both the Score and Hours_Studied columns available inside the function.
>
> **[4:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=287)** This adds a new column that assigns a categorical performance label to each student, combining both their results and their study effort.
>
> **[4:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=296)** Using .apply() gives you full control over your transformations, letting you define exactly how each value or row should be processed.
>
> **[5:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/transform-data-with-pandas-apply?u=76281980&t=304)** It's especially powerful when you need to go beyond built-in methods and design your own data cleaning or feature engineering logic.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), lambda (4), let (1), elif (1)
> **Code Identifiers:** to_percentage (3), performance_label (3)
> **Definitions:** is a  (1), is an  (1), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)


### 4. Visualization Essentials

#### Create line and scatter plots
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=0)** Visualizing quantitative data is one of the most powerful ways to uncover patterns and relationships in your datasets.
>
> **[0:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=7)** Charts can reveal trends that might not be obvious from raw numbers alone.
>
> **[0:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=11)** In this lesson, you'll learn how to use matplotlib, one of the most popular visualization libraries in Python, to create line plots and scatter plots.
>
> **[0:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=20)** First, import matplotlib.pyplot module, which provides essential plotting functions.
>
> **[0:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=26)** The convention is to import it using the alias plt.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=29)** Let's start by creating some sample data.
>
> **[0:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=32)** Here I've defined two lists, one for Study Hours and one for Scores.
>
> **[0:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=38)** A line plot is useful for visualizing trends, for example, how one variable changes with another.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=44)** You can create a line plot using the plt.plot() function.
>
> **[0:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=49)** Here I've called plt.plot() and passed in hours followed by scores.
>
> **[0:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=54)** This creates a line plot connecting the data points with hours on the x axis and scores on the y axis.
>
> **[1:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=61)** I've called plt.title() and passed in Study Hours vs.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=64)** Exam Score.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=66)** This adds a title to the plot.
>
> **[1:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=68)** I've called plt.xlabel() and passed in Hours Studied.
>
> **[1:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=72)** This labels the x axis of the plot.
>
> **[1:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=75)** I've called plt.ylabel and passed in Score.
>
> **[1:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=79)** This labels the y axis of the plot.
>
> **[1:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=81)** Finally, I've called plt.show(), which displays the figure.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=87)** Running this produces a line plot showing how exam scores increase with study time-- a positive association.
>
> **[1:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=94)** While line plots are great for showing trends, scatter plots are better for showing individual data points and the strength of relationships between variables.
>
> **[1:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=103)** You can create a scatter plot using the plt.scatter() function.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=107)** Here I've called plt.scatter() and passed in hours followed by scores.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=112)** This creates a scatter plot with hours on the x axis and scores on the y axis.
>
> **[1:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=118)** I've called plt.title() and passed in Study Hours vs.
>
> **[2:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=121)** Exam Score, which titles the plot.
>
> **[2:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=124)** I've called plt.xlabel() and passed in Hours Studied which labels the x axis.
>
> **[2:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=130)** I've called ylabel and passed in Score which labels the y axis.
>
> **[2:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=134)** Lastly, I've called plt.show() to display the figure.
>
> **[2:19](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=139)** This displays each pair of values as a point on the plot without connecting them.
>
> **[2:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=145)** Scatter plots are especially useful when you're analyzing correlations or model predictions, where the relationships may not be perfectly linear.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=153)** You can customize your plots easily by adding color, line style, or markers.
>
> **[2:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=158)** In this next example, I'll use both color and markers to make the plot more readable.
>
> **[2:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=164)** I've called plt.plot() and passed in hours, scores, color=”green”, marker=”o”, followed by linestyle=”--”.
>
> **[2:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=174)** Here's what the new arguments do.
>
> **[2:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=177)** Color=”green” changes the line color to green.
>
> **[3:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=180)** Marker=”o” adds a circular marker at each data point.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=185)** Linestyle=”--” makes the line dashed instead of solid.
>
> **[3:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=190)** These small adjustments make your visualizations clearer and easier to interpret.
>
> **[3:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=195)** Now you can enhance your plots with titles, axis labels, and formatting options like color, line style, and markers.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=202)** With just a few core functions from matplotlib, plt.plot() for line plots, and plt.scatter() for scatter plots, you can quickly visualize numerical relationships in your data.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/create-line-and-scatter-plots?u=76281980&t=213)** These functions form the foundation of data visualization in Python, giving you the flexibility to explore and present trends directly from your datasets.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), module (1), let (1), finally, (1)
> **CLI Commands:** python (2), make (2)
> **Analogies:** for example (1)

#### Display categorical distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=0)** Visualizing categorical data helps you compare groups and understand proportions within your dataset.
>
> **[0:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=6)** It's a key part of exploratory data analysis, helping you see which categories stand out and how they relate to the whole.
>
> **[0:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=13)** In this lesson, you'll learn how to create bar plots and pie charts using matplotlib.
>
> **[0:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=18)** Start by importing matplotlib.pyplot module.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=23)** Let's define some sample data.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=25)** Here I've created a list of categories representing different student grades, and another list showing how many students earned each grade.
>
> **[0:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=33)** A bar plot is perfect for comparing quantities across categories.
>
> **[0:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=37)** You can create one using plt.bar().
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=41)** Here I've called plt.bar() and passed in grades followed by counts.
>
> **[0:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=45)** This creates a bar plot with vertical bars for each grade, where the height of each bar is determined by the count.
>
> **[0:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=52)** Then I've called plt.title() and passed in Distribution of Grades, which adds this as a title to the plot.
>
> **[0:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=59)** I've called plt.xlabel() and passed in Grade, which adds this as the label for the x axis of the plot.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=66)** I've called plt.ylabel() and passed in Number of Students, which adds this as a label for the y axis.
>
> **[1:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=74)** There's your bar plot.
>
> **[1:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=76)** The x axis shows the categories A, B, C, D, F.
>
> **[1:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=80)** The y axis shows how many students earned each grade.
>
> **[1:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=84)** The tallest bar represents the most common category.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=87)** You can also customize the appearance of your bar plot-- for instance, changing colors or adding grid lines.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=95)** Here I've called plt.bar() and passed in grades, counts, and a new argument-- color=”teal”.
>
> **[1:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=102)** I've called plt.title(), plt.xlabel() and plt.ylabel() as I did earlier, to add title and x axis and y axis labels.
>
> **[1:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=111)** Then I've called plt.grid() and passed in axis=”y”, linestyle=”--”, followed by alpha=0.7.
>
> **[2:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=120)** Lastly, I've called plt.show().
>
> **[2:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=125)** This version uses teal bars and adds light horizontal grid lines to make comparisons easier.
>
> **[2:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=131)** If your category labels are long or you want a different layout, you can create a horizontal bar plot using the function plt.barh().
>
> **[2:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=140)** Here I've called plt.barh() and passed in grades, counts, followed by color=”orange”.
>
> **[2:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=147)** Then I've called plt.title() and passed in Distribution of Grades (Horizontal) for adding the title.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=153)** I've called plt.xlabel() and passed in Number of Students for labeling the x axis.
>
> **[2:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=158)** I've called plt.ylabel and passed in Grade for labeling the y axis.
>
> **[2:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=164)** I've called plt.show() afterwards for displaying the figure.
>
> **[2:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=169)** And there's the horizontal bar plot.
>
> **[2:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=172)** Horizontal bars can make labels more readable when working with text-heavy categories.
>
> **[2:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=177)** While bar plots are best for comparisons, pie charts are useful for showing proportions-- how each category contributes to the whole.
>
> **[3:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=185)** You can create one using plt.pie().
>
> **[3:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=188)** Here I've called plt.pie() and passed in counts, labels=grades, autopct=%1.1f%%, startangle=90.
>
> **[3:20](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=200)** Breaking that line down: counts provides the data to be plotted.
>
> **[3:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=205)** Labels=grades adds the category names, which are the grades.
>
> **[3:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=210)** The autopct argument assigned in this way displays percentages with one decimal place.
>
> **[3:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=216)** And the startangle=90 rotates the chart so that the first slice starts at the top.
>
> **[3:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=223)** There's the pie chart.
>
> **[3:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=224)** This gives you a clean visual breakdown of how each grade contributes to the overall distribution.
>
> **[3:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=231)** You can also highlight a category using the explode parameter, for example to emphasize top grades.
>
> **[3:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=237)** Here I've defined a variable named slice_offsets, which is a list of offsets-- one value per pie slice in the same order as grades.
>
> **[4:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=246)** A value of 0.1 pulls that slice outward by 10% of the pie's radius.
>
> **[4:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=252)** Zero leaves a slice in place.
>
> **[4:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=254)** Then I've called plt.pie() and passed in counts, labels=grades, autopct assigned to the same expression as before, startangle=90, and explode=slice_offsets.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=272)** The first slice representing A grades is pulled out slightly, drawing attention to high performers.
>
> **[4:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=279)** Matplotlib’s categorical plotting functions plt.bar(), plt.barh(), and plt.pie() make it easy to explore group-level patterns and proportions in your data.
>
> **[4:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=290)** These tools also give you flexibility to customize with parameters such as color, labels, autopct, and explode, helping you communicate categorical insights and emphasize what matters most in your analysis.
>
> **[5:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/display-categorical-distributions?u=76281980&t=304)** Go ahead and try out these functions to visualize categorical data of your own.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** module (1), let (1), function (1)
> **Analogies:** for instance (1), for example (1), such as (1)
> **Code Identifiers:** slice_offsets (2)
> **Versions:** 0.7 (1), 0.1 (1)
> **Definitions:** is a  (1)

#### Explore numerical distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=0)** Understanding the shape, spread, and density of numerical data is essential for exploratory data analysis.
>
> **[0:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=6)** Visualizing these distributions helps you detect patterns, outliers, and potential skew in your data before moving on to modeling.
>
> **[0:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=14)** In this lesson, you'll use Seaborn, a visualization library built on top of matplotlib to plot histograms, box plots, KDE curves, and violin plots.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=25)** Start by importing seaborn, matplotlib, and Pandas.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=29)** Seaborn provides the plotting functions and matplotlib.pyplot is useful for customizing and displaying plots.
>
> **[0:36](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=36)** The convention is to import Seaborn using the alias sns, matplotlib.pyplot using the alias plt, and Pandas using the alias pd.
>
> **[0:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=47)** Next, let's create a sample dataset.
>
> **[0:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=49)** Here I'll use a dictionary representing exam scores for students and convert it into a Pandas DataFrame.
>
> **[0:58](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=58)** This gives you a DataFrame with a single column of numeric data that you can now visualize in different ways.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=64)** A histogram groups data into bins and shows how many values fall into each range.
>
> **[1:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=69)** You can create one using Seaborn’s histplot() function.
>
> **[1:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=73)** Here I've called sns.histplot and passed in the Score column from df, bins=8, and kde=False.
>
> **[1:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=82)** Bins=8 divides the data into eight intervals.
>
> **[1:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=85)** kde=False turns off the density curve so you can focus just on frequency counts.
>
> **[1:31](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=91)** Then I've used plt.title(), plt.xlabel(), and plt.ylabel() to add the title and labels to the x axis and y axis for the plot.
>
> **[1:42](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=102)** Lastly, I've used plt.show() to display the figure.
>
> **[1:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=109)** There's the histogram.
>
> **[1:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=110)** This histogram helps you quickly visualize where most scores fall and whether the distribution looks symmetric, skewed, or concentrated around certain values.
>
> **[2:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=120)** You can add a KDE curve, short for kernel density estimate, to visualize the probability density, which is a smooth curve representing the distribution's shape.
>
> **[2:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=129)** Here, when calling sns.histplot(), I've passed in kde=True and color=”skyblue”.
>
> **[2:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=137)** kde=True adds the density curve on top of the histogram.
>
> **[2:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=141)** Color=”skyblue” changes the colors of the bars and the density curve, making the plot visually clearer and easier to interpret.
>
> **[2:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=149)** This creates a histogram with light blue bars and a smooth KDE curve overlaid, showing both the frequency and the overall shape of the data distribution.
>
> **[2:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=159)** Also, I've called plt.title(), plt.xlabel(), plt.ylabel(), and plt.show() to add a title, x axis and y axis labels, and to display the figure.
>
> **[2:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=173)** This helps you visualize how the data might be distributed if you smoothed it out, making patterns easier to interpret.
>
> **[3:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=180)** A box plot summarizes data using its quartiles, showing the median, spread, and potential outliers.
>
> **[3:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=187)** Here I've called sns.boxplot() and passed in the Score column from df and color=”lightgreen”.
>
> **[3:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=194)** The color=”lightgreen” parameter sets the box color, making the plot easier to read and helping key features like the median line and whiskers stand out clearly.
>
> **[3:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=204)** I then use plt.title(), plt.xlabel(), and plt.show() to add the title, add the x axis label, and display the figure.
>
> **[3:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=215)** There's the box plot.
>
> **[3:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=217)** As you take a look at it, I'll talk through what each part represents.
>
> **[3:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=220)** The box shows the interquartile range-- in other words, the middle 50% of data.
>
> **[3:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=225)** The line inside the box marks the median.
>
> **[3:49](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=229)** Whiskers extend to show variability, and dots outside indicate potential outliers.
>
> **[3:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=234)** Box plots are perfect for comparing variability and spotting extreme values at a glance.
>
> **[4:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=240)** The next type of plot I want to talk about is a violin plot.
>
> **[4:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=244)** A violin plot combines the benefits of a box plot and a KDE curve.
>
> **[4:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=248)** It shows both the distribution shape and summary statistics in one visualization.
>
> **[4:14](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=254)** Here I've called sns.violinplot and passed in the parameter x assigned to the Score column from df, followed by the parameter color=”orchid”.
>
> **[4:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=264)** The color=”orchid” parameter changes the fill color to a soft purple shade, making the distribution shape stand out more clearly.
>
> **[4:32](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=272)** I've then called plt.title(), plt.xlabel(), and plt.show() to add a title, add an x axis label, and display the figure.
>
> **[4:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=284)** There's the violin plot.
>
> **[4:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=285)** The width of each section in the violin indicates data density.
>
> **[4:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=290)** Wider areas mean more data points fall within that range.
>
> **[4:54](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=294)** Seaborn’s distribution functions histplot(), boxplot(), and violinplot() give you versatile ways to visualize and interpret numerical data.
>
> **[5:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=303)** By exploring the shape, spread, and density of your variables, you can identify outliers, understand variation, and prepare for deeper statistical analysis.
>
> **[5:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/explore-numerical-distributions?u=76281980&t=312)** Go ahead and experiment with these functions on your own datasets to get an intuitive feel for how your data is distributed.

> [!info]- Semantic Content
>
> **Env Vars:** kde (4)
> **Definitions:** is a  (2), short for (1), in other words (1)
> **Code Keywords:** let (1), function (1)

#### Visualize pairwise relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=0)** Mapping pairwise relationships helps you detect correlations, clusters, and anomalies across multiple variables at a glance.
>
> **[0:08](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=8)** A heatmap is one of the most effective ways to visualize these relationships, especially when working with numerical datasets that contain many columns.
>
> **[0:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=16)** In this lesson, you'll use Seaborn to create and annotate heatmaps that reveal how different variables relate to one another.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=23)** First, import the libraries that you'll need.
>
> **[0:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=25)** NumPy, Pandas, matplotlib, and Seaborn.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=29)** Next, let's create a sample dataset with several numeric variables, such as hours studied, test scores, project completion rates, and attendance rates.
>
> **[0:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=41)** This DataFrame includes several related variables-- perfect for exploring correlations visually.
>
> **[0:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=47)** Before plotting, you need a correlation matrix, a table that shows how strongly each pair of variables is related.
>
> **[0:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=53)** You can compute this easily with Pandas .corr() method.
>
> **[0:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=57)** Here I've called df.corr() and saved the result in a variable named “corr”.
>
> **[1:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=62)** This outputs a four-by-four table of correlation coefficients with values between -1 and 1.
>
> **[1:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=69)** A value close to one means a strong positive relationship, while a value close to negative one means a strong negative relationship.
>
> **[1:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=77)** Now that you have the correlation matrix, you can visualize it with Seaborn’s heatmap function.
>
> **[1:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=82)** Here I've called sns.heatmap() and passed in corr.
>
> **[1:26](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=86)** Then I've called plt.title() to add a title to the plot, and plt.show() to display the figure.
>
> **[1:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=93)** This creates a straightforward heatmap where darker colors indicate stronger relationships.
>
> **[1:39](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=99)** You also have options to make the plot more readable and visually appealing, using some additional parameters.
>
> **[1:45](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=105)** In this next example, you'll enhance the heatmap by adding a color gradient, labels, and numeric annotations.
>
> **[1:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=113)** Call sns.heatmap() and pass in corr, annot=True, and the cmap parameter assigned to a string that sets the color palette as yellow to green to blue.
>
> **[2:03](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=123)** The annot=True displays the actual correlation values inside each cell of the heatmap.
>
> **[2:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=129)** The cmap parameter set to this color palette shown here, makes it easier to distinguish weak and strong correlations.
>
> **[2:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=136)** There's your annotated heatmap.
>
> **[2:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=138)** The result is a labeled grid that shows not just which variables are related, but also how strongly.
>
> **[2:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=144)** You can control how the numeric annotations are displayed by specifying the number of decimal places.
>
> **[2:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=150)** Here, when calling sns.heatmap() I've passed in cmap=”coolwarm” and fmt=”.2f”.
>
> **[2:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=158)** The coolwarm color map transitions from blue, which will represent negative correlation, to red, which will represent positive correlation.
>
> **[2:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=166)** This makes it easier to see directionality in the relationships between variables.
>
> **[2:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=171)** fmt=”.2f” limits the annotation to two decimal places.
>
> **[2:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=176)** This helps highlight which variables move together, indicating a positive correlation, and which variables move in opposite directions, indicating a negative correlation.
>
> **[3:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=186)** Since correlation matrices are symmetrical, you can mask the upper triangle to reduce redundancy and keep the visualization cleaner.
>
> **[3:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=193)** I'll break down what each function does in this next example.
>
> **[3:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=197)** np.ones_like() creates a new NumPy array the same shape as corr, which is your correlation matrix.
>
> **[3:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=204)** It fills it with 1s, then casts to Boolean so every element becomes true.
>
> **[3:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=209)** So if corr is four-by-four, you get a four-by-four array of trues.
>
> **[3:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=213)** np.triu() takes the array you just created and returns its upper triangular part, including the diagonal, leaving everything below the diagonal as false.
>
> **[3:43](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=223)** Since the input is Boolean trues, np.triu() effectively keeps true in the upper triangle and sets the lower triangle to false.
>
> **[3:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=231)** The result is a mask, which is a Boolean matrix where the upper triangle and diagonal are filled with true, and the lower triangle is filled with false.
>
> **[4:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=240)** When you pass in the mask parameter to sns.heatmap(), Seaborn hides the true positions, so you can only see the lower triangle of the correlation matrix.
>
> **[4:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=250)** This is a nice way to avoid duplicating symmetric information.
>
> **[4:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=255)** This makes it easier to focus on the unique pairs of relationships without visual clutter.
>
> **[4:21](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=261)** The Seaborn heatmap function gives you a clear, color-coded way to interpret pairwise relationships in your data.
>
> **[4:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=267)** By combining it with Pandas .corr() method, you can quickly visualize correlations, spot patterns, and identify potential multicollinearity before moving into modeling or feature selection.
>
> **[4:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/visualize-pairwise-relationships?u=76281980&t=278)** Try experimenting with different color maps, annotations, and masking options to tailor your heatmaps to the patterns you want to emphasize.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (2), let (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Code Identifiers:** ones_like (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### Organize your visualizations
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=0)** When you're analyzing data, it's often helpful to display multiple visualizations side by side.
>
> **[0:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=5)** Arranging related plots in one figure makes it easier to compare patterns and build cohesive dashboards.
>
> **[0:11](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=11)** In this lesson, you'll use matplotlib’s plt.subplots() function to create grid layouts, share or separate axes, and adjust spacing for clear, organized multi-plot figures.
>
> **[0:23](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=23)** Start by importing matplotlib.pyplot module and Seaborn, which you'll use to generate sample data.
>
> **[0:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=29)** Let's use one of Seaborn’s built-in datasets for this example-- tips, which contains restaurant tipping data.
>
> **[0:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=38)** The plt.subplots() function is the easiest way to create multiple plots in a single figure.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=44)** Here I've called plt.subplots() and passed in 1, 2.
>
> **[0:48](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=48)** And I've saved the result in the variables fig, ax.
>
> **[0:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=53)** plt.subplots() returns two objects.
>
> **[0:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=56)** The first is fig, which is the overall figure-- the canvas that holds everything.
>
> **[1:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=61)** The second is ax, an array of axes objects, one for each plot.
>
> **[1:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=66)** The arguments 1, 2 create one row and two columns-- so basically two plots side-by-side.
>
> **[1:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=73)** You can access and plot on each subplot using its index.
>
> **[1:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=77)** Here I've called sns.histplot() and passed in the Total Bill column from the tips dataset, ax=ax[0], and color=”skyblue”.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=89)** Then I've called set_title on the first axis to add the title Total Bill Distribution.
>
> **[1:35](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=95)** Afterwards I've called sns.boxplot() and passed in y= the tip column from the tips dataset, ax=ax[1], and color=”lightgreen”.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=107)** I've called set_title on the second axis to add the title Tip Amounts.
>
> **[1:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=112)** Lastly, plt.show() to display all the plots from this figure.
>
> **[1:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=119)** Check out the plots.
>
> **[2:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=120)** Note how each subplot gets its own axes and title all within the same figure.
>
> **[2:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=127)** You can add more plots by changing the number of rows and columns.
>
> **[2:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=130)** For example, to create a two-by-two grid of subplots, I've called plt.subplots() and passed in 2, 2, and figsize=(10, 8).
>
> **[2:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=144)** This gives you a two-row, two-column grid, essentially four plotting areas.
>
> **[2:30](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=150)** Let's fill in each one with a different visualization.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=153)** In the upper-left quadrant, I'll use the sns.histplot() to create a histogram displaying the distribution of total bill.
>
> **[2:40](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=160)** In the upper-right quadrant, I'll use sns.boxplot() to create a box plot of the tips.
>
> **[2:46](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=166)** In the lower-left quadrant, I'll use sns.scatterplot() to create a scatter plot of bill versus tip.
>
> **[2:52](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=172)** And in the lower-right quadrant, I'll use sns.barplot() to create a bar plot showing average bill by day.
>
> **[2:59](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=179)** Here's what's happening.
>
> **[3:01](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=181)** Each ax[row, col] specifies a position in the grid.
>
> **[3:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=186)** Figsize controls the overall figure size in inches.
>
> **[3:10](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=190)** plt.tight_layout() automatically adjusts spacing to prevent titles and labels from overlapping.
>
> **[3:22](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=202)** The result is a neatly arranged dashboard of four different visualizations.
>
> **[3:28](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=208)** Sometimes you want subplots to share the same scale-- for example, when comparing distributions.
>
> **[3:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=214)** You can set this using the sharex or sharey parameters.
>
> **[3:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=218)** Here, sharey=True ensures both subplots use the same y axis scale, making it easier to compare frequencies between male and female customers.
>
> **[3:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=227)** And plt.subtitle() adds a centered supertitle to the figure.
>
> **[4:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=244)** To control spacing between plots, you can use plt.subplots_adjust().
>
> **[4:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=249)** This gives you fine-grained control over margins and spacing.
>
> **[4:13](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=253)** The wspace parameter adjusts the horizontal distance between subplots.
>
> **[4:18](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=258)** Here, wspace=0.4 increases the horizontal space between the two subplots.
>
> **[4:24](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=264)** This extra spacing prevents the axis labels and titles from overlapping, and makes each chart easier to read when they're displayed side by side.
>
> **[4:37](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=277)** Now there's another parameter, hspace, that adjusts vertical spacing.
>
> **[4:41](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=281)** Here, hspace=0.4 increases the vertical space between the two rows of subplots, preventing the lower title and upper X labels from crowding each other.
>
> **[4:57](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=297)** Matplotlib’s plt.subplots() function gives you control over how multiple visualizations are organized within one figure.
>
> **[5:05](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=305)** By customizing layout, shared axes, and spacing, you can build clean, comparison-ready dashboards that clearly communicate multiple aspects of your data.
>
> **[5:16](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/organize-your-visualizations?u=76281980&t=316)** Go ahead and try experimenting with different grid sizes and layouts to find the most effective way to visualize your data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), module (1)
> **Code Identifiers:** set_title (2), tight_layout (1), subplots_adjust (1)
> **Versions:** 0.4 (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)


### Conclusion

#### Apply functions to data science
> [LinkedIn Learning](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=0)** Congratulations on completing this course.
>
> **[0:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=2)** You've now built a solid function in using Python's built-in functions: NumPy, Pandas, Matplotlib, Seaborn, and SciPy-- all essential tools in a modern data science workflow.
>
> **[0:15](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=15)** Across this course, you've learned how to leverage Python functions to inspect and validate your data; aggregate, sort, filter, and transform sequences; work with data frames for cleaning, combining, grouping and transforming data; and create visualizations to explore and communicate insights and more.
>
> **[0:34](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=34)** These skills represent the core of practical, hands-on data analysis, and you're now equipped to dig into more complex datasets and data science applications.
>
> **[0:44](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=44)** And the learning definitely does not stop here.
>
> **[0:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=47)** The most important next step is practice.
>
> **[0:50](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=50)** Try applying these functions to your own projects or datasets.
>
> **[0:53](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=53)** That's where the concepts really stick.
>
> **[0:56](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=56)** I also recommend that you check out the following resources.
>
> **[1:00](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=60)** The first resource is the official documentation for Python.
>
> **[1:04](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=64)** And you can find this at docs.[python.org](https://python.org).
>
> **[1:07](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=67)** It's where you'll find information about Python's built-in features like functions, data types, and the standard library, along with examples that explain how to use them.
>
> **[1:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=77)** If there's a particular function that you don't feel confident using yet, or you want more details on how it works, you can look it up through the Quick Search feature here to get more information.
>
> **[1:27](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=87)** The next resource is Kaggle.
>
> **[1:29](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=89)** Kaggle is an online community of data scientists and other developers who participate in contests, share their datasets, discuss their findings, and more.
>
> **[1:38](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=98)** Kaggle offers free public datasets, so explore those that interest you and try applying the functions from this course to your chosen data.
>
> **[1:47](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=107)** And another great resource is the website Towards Data Science.
>
> **[1:51](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=111)** This site is a platform for people to stay updated on cool advancements in the field of data science, exchange ideas, and access step-by-step tutorials on a range of technical topics.
>
> **[2:02](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=122)** You can find links to these resources in the resource file for this course.
>
> **[2:06](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=126)** And feel free to follow me on LinkedIn.
>
> **[2:09](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=129)** I look forward to seeing how this course helps you in your journey.
>
> **[2:12](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=132)** As you continue learning, remember that data science is an iterative process.
>
> **[2:17](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=137)** You build intuition by exploring data, asking questions, testing ideas, and improving your approach over time.
>
> **[2:25](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=145)** Thank you for joining me in this course, and I hope you feel empowered to keep building, innovating, and applying these functions to the data you encounter.
>
> **[2:33](https://www.linkedin.com/learning/python-functions-for-data-science-28584261/apply-functions-to-data-science?u=76281980&t=153)** Best of luck on your journey.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (3)
> **Code Keywords:** function (2), public (1), continue (1)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [python.org](https://python.org) (1)


## Path Context

### In [[Moving from Data Analyst to Data Scientist]]
← [[Data Wrangling in R]] | **3 of 11** | [[Basics of Data Visualization Analysis]] →

## Appears In

- [[Moving from Data Analyst to Data Scientist]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis
- [[Python for Data Analysis- Solve Real-World Challenges]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)