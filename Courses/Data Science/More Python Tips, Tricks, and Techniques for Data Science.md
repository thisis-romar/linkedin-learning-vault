---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: more-python-tips-tricks-and-techniques-for-data-science
url: "https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science"
duration_minutes: 135
duration: 2h 15m
level: Intermediate
updated: 9/13/2024
learners: 11101
skills:
  - Python (Programming Language)
  - Data Science
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE3cDnAJ16QlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726086903104?e=2147483647&amp;v=beta&amp;t=0-KWDw7fjT57ZIVgGCqV9Hk66YUrFWar4Ca-s_Qhf_k"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python Skills for Data Science]]'
prev_courses:
  - '[[Python Data Analysis]]'
next_courses:
  - '[[Level Up- Python Data Acquisitions, Prep, and EDA]]'
path_nav: '[{"path":"Advance Your Python Skills for Data Science","position":5,"total":6,"prev":"Python Data Analysis","next":"Level Up- Python Data Acquisitions, Prep, and EDA"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-science
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/More%20Python%20Tips%2C%20Tricks%2C%20and%20Techniques%20for%20Data%20Science.md)

![More Python Tips, Tricks, and Techniques for Data Science](https://media.licdn.com/dms/image/v2/D560DAQE3cDnAJ16QlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726086903104?e=2147483647&amp;v=beta&amp;t=0-KWDw7fjT57ZIVgGCqV9Hk66YUrFWar4Ca-s_Qhf_k)

# More Python Tips, Tricks, and Techniques for Data Science

> The power and versatility of Python—coupled with its large ecosystem of third-party packages—make it indispensable to data scientists. In this course, instructor Harshit Tyagi shares practical tips and techniques that can help you enhance your own Python data science workflow. Harshit covers how to work with IPython notebooks, including how to debug errors. He shows how to use NumPy to manipulate 

> [LinkedIn Learning](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science) | 2h 15m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Tips and tricks in Python](#tips-and-tricks-in-python)
  - [How to use the CoderPad environment](#how-to-use-the-coderpad-environment)
- [**1. IPython and Jupyter Notebook**](#1-ipython-and-jupyter-notebook) (3 videos)
  - [Accessing methods and documentation](#accessing-methods-and-documentation)
  - [Errors and debugging](#errors-and-debugging)
  - [Code profiling and timing](#code-profiling-and-timing)
- [**2. NumPy and Pandas**](#2-numpy-and-pandas) (7 videos)
  - [Essentials of NumPy arrays](#essentials-of-numpy-arrays)
  - [Broadcasting](#broadcasting)
  - [Comparison, masks, and Boolean logic](#comparison-masks-and-boolean-logic)
  - [Pandas indexing and subsetting](#pandas-indexing-and-subsetting)
  - [Handling missing data](#handling-missing-data)
  - [Aggregation and grouping](#aggregation-and-grouping)
  - [Querying and filtering data](#querying-and-filtering-data)
- [**3. Visualization with Matplotlib**](#3-visualization-with-matplotlib) (3 videos)
  - [General plotting tips](#general-plotting-tips)
  - [Adding text and annotations](#adding-text-and-annotations)
  - [Multiple subplots](#multiple-subplots)
- [**4. Machine Learning Tips**](#4-machine-learning-tips) (4 videos)
  - [sklearn Estimator API](#sklearn-estimator-api)
  - [Model validation and hyperparameter tuning](#model-validation-and-hyperparameter-tuning)
  - [Feature engineering](#feature-engineering)
  - [Creating machine learning pipelines](#creating-machine-learning-pipelines)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Tips and tricks in Python](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=0)** - [Narrator] Over the past two decades, [[Python (Programming Language)|Python]] has emerged as an indispensable tool for scientific computing tasks.
>
> **[0:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=6)** It is one of the easiest and most versatile programming languages in use today.
>
> **[0:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=10)** The usefulness and credibility of Python for [[Data Science]], stems primarily from the large inactive ecosystem of third party packages.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=19)** Hi, I'm Harshit Tyagi, and in this course, we are going to learn tips and techniques for using Python in our Data Science workflow.
>
> **[0:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=27)** We'll start by learning to work with iPads and notebooks, including accessing documentation, debugging errors, and profiling code.
>
> **[0:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=36)** Then we'll learn to use scientific computing package, NumPy, to create and manipulate arrays.
>
> **[0:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=41)** Then we'll dig into working with the data using the [[Data Manipulation]] package, [[Pandas (Software)|Pandas]].
>
> **[0:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=47)** Will subsequently look at how to make insightful data visualizations using Matplotlib.
>
> **[0:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=53)** Lastly, we'll dive into machine learning best practices with the psychic learn package.
>
> **[1:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=60)** Note that you will need to have some familiarity with Jupiter notebooks to follow along with me in this course.
>
> **[1:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=67)** But of course, the Python code can be executed in other dev environments as well.
>
> **[1:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python?u=76281980&t=72)** Alright, let's get right to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Data Science]] (2), [[Data Manipulation]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4), make (1)
> **Code Identifiers:** ipads (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [How to use the CoderPad environment](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the course's Table of Contents.
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=9)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=18)** These challenges are hosted by Codeapart and they appear in the same area of the course page where you've watched the course's videos.
>
> **[0:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=28)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=38)** The code challenge has four areas, instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=57)** You can use these drag handles to allocate space as you like.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=64)** To get even more horizontal space for the code editors, you can collapse the course's Table of Contents on the left.
>
> **[1:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=72)** Each challenge has instructions that include a description of the challenge and the challenge's parameters and result.
>
> **[1:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=82)** Parameters are values that will be passed into your code and they have to be of a particular data type.
>
> **[1:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=89)** The return value also has to be of a particular type, and you will also see that noted in the instructions.
>
> **[1:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=97)** The examples show different parameter values and what result would be returned for each of those test cases.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=106)** Create your answer in the top right code editor.
>
> **[1:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=110)** There are comments in the starting code showing where to put your solution.
>
> **[1:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=116)** When you click Test my code, you will see a message indicating whether your code returned a correct result.
>
> **[2:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=125)** If your code is not successful, for example, if I switch it to plus and click Test my code, you will get incorrect answer, and you can toggle this show_expected_result and show_hints to True in order to see the expected response and hints.
>
> **[2:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=148)** The code editor in the lower right shows how your solution is used.
>
> **[2:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=154)** You can change that code to experiment with different test cases.
>
> **[2:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=158)** Regardless of whether your answer is successful, you will see messages in the console output in the lower left.
>
> **[2:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=167)** If any messages are too long to fit in that area, you can scroll sideways to see all the text.
>
> **[2:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/how-to-use-the-coderpad-environment?u=76281980&t=174)** When you have finished each code challenge, return to the course's Table of Contents, and click the next lesson to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Code Identifiers:** show_expected_result (1), show_hints (1)
> **UI Navigation:** click on (1), toggle (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. IPython and Jupyter Notebook

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessing methods and documentation](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=0)** - One of the key things that you should know as a data scientist is how to figure out the right methods and attributes to be used for a particular kind of scenario.
>
> **[0:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=10)** Now in this video, we'll be looking at different methods and short codes for accessing documentation of functions, and object.
>
> **[0:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=18)** So first off, we have the Help Function.
>
> **[0:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=21)** Now, [[Python (Programming Language)|Python]] has this built in function that can access the doc strings of the functions and objects defined in Python or any of the imported packages.
>
> **[0:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=32)** So for example, let's say, I want to learn about the sum function in Python.
>
> **[0:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=37)** So all I need to do is simply type Help, and then pass the name of the function.
>
> **[0:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=42)** So let's say SAM here, then run the cell.
>
> **[0:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=45)** And it will display the doc string, the documentation that is defined in the SAM function in Python.
>
> **[0:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=52)** Now, similarly, if I want to learn about the read CSV function from the [[Pandas (Software)|pandas]] package, so all I need to do is first of all, import the read CSV function.
>
> **[1:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=63)** So let's say I import from pandas, import read underscore CSV, and then I can pass on this function, read underscore CSV, to my Help function, run the cell, and it will display the doc strings that are defined inside the read CSV function in pandas package.
>
> **[1:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=83)** Now, I have the shorthand for this Help function.
>
> **[1:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=88)** That is a question mark character.
>
> **[1:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=89)** So let's say if I want to learn about the SAM function without using the Help function, so all I need to do is simply add a question mark ahead of it, and run the cell.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=101)** And a pop up from the bottom of the screen comes up.
>
> **[1:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=104)** And it'll give you all the information about the signature of that function.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=109)** Doc string, that is the documentation and its type.
>
> **[1:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=113)** You can exit by clicking on the cross map.
>
> **[1:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=116)** Now, we can use this shorthand of question mark to learn about objects as well.
>
> **[2:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=122)** So let's say I create my list with the three elements, let's say one three five.
>
> **[2:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=128)** And now I want to learn about this list.
>
> **[2:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=130)** What is it?
>
> **[2:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=131)** So all I need to do is simply type the name of the list and add this shorthand, which is the question mark, and run the cell and it will pop up.
>
> **[2:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=143)** Again, the type is list, we have a list object, the string farm, which is the values that the list contains length, and there are doc strings.
>
> **[2:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=152)** Now, the next part is TAB to AutoComplete.
>
> **[2:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=155)** Now many at times you are not aware of what all you can do with an object or what classes and functions you can import from a package.
>
> **[2:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=164)** For this Ipython has a very useful interface, which is the use of the TAB key for auto completion and exploration of the contents of objects, modules, and namespaces.
>
> **[2:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=176)** So let's say we have this list object with us.
>
> **[2:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=179)** So all I need to do is simply type my list Dot Operator, and then I hit TAB key on my keyboard to list down all the methods that are available for me to use with this list object.
>
> **[3:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=191)** So I have been clear copy, so on and so forth.
>
> **[3:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=194)** Now let's say I want to use the Append function, but I do not really know what that function does.
>
> **[3:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=200)** So I can again, use the question mark character, the shorthand, so simply use Append function, but I don't know how to use it.
>
> **[3:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=209)** So add the question mark character head of it, run the cell.
>
> **[3:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=213)** And again, you can see the signature, the doc string, and the type comes up from the bottom.
>
> **[3:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=218)** And it will tell you what that function does.
>
> **[3:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=222)** Now similarly, we can use the TAB AutoComplete for importing different functions classes from packages.
>
> **[3:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=229)** So let's say I want to import something, but I don't really know what so I can simply do from pandas input.
>
> **[3:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=237)** And I will list down all the functions and classes that I can import from pandas.
>
> **[4:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=241)** So hit TAB on the keyboard, and it will display lists down all the functions and classes for you to use and import.
>
> **[4:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=251)** Now, if you want to narrow down the list, as in, you're not actually remembering the right method to import.
>
> **[4:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=259)** So simply Type R and then hit TAB.
>
> **[4:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=262)** So it will list down all the methods that are starting from R.
>
> **[4:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=267)** Accordingly, you can pick up whichever one you want to use.
>
> **[4:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=270)** So that's how TAB to AutoComplete works.
>
> **[4:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=272)** Now if we try out these methods on our Custom function, so we have this Custom function here, define, which is list of squares.
>
> **[4:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=281)** Now this function returns a new list containing squares of all the elements of the list that is passed to it.
>
> **[4:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=287)** So let's say I invoke this method or if I want to learn about list of squares, and you should make sure that you run the cell, list of squares, add a question mark ahead of it, run the cell.
>
> **[5:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=306)** And you see the doc string that we define is now available in the doc string read key in the pop up.
>
> **[5:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=314)** So the pop up tells you that this is a function that returns a new list.
>
> **[5:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=318)** All right?
>
> **[5:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=319)** So if we want to access the source code.
>
> **[5:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=322)** Now, besides the documentation, if you want to view the source code of a function, for debugging purposes, or to understand the underlying code, you can access the source code of a Python function with double question marks.
>
> **[5:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=335)** So let's say we are again, using the same function list of squares, add two question marks instead of one, run the cell.
>
> **[5:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=345)** And this pop up will now contain the source the code for that function that you would want to look at.
>
> **[5:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=352)** So that's how you can access the source code for Python function.
>
> **[5:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=355)** But the limitation with this is that you can only access the documentation or the source code of the function that is defined in Python.
>
> **[6:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=364)** So if I want to actually learn about the sum function, and it's code, I won't be able to do that, because this function is actually defined in C.
>
> **[6:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=373)** So that's why I do not see the source here.
>
> **[6:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=377)** So that's the limitation.
>
> **[6:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=378)** All right.
>
> **[6:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=379)** So we saw how we can use a few functions and shorthands to access documentation, listing available methods and view source code of a function or class in Python.
>
> **[6:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=391)** Now, go ahead and get some hands on practice.
>
> **[6:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/accessing-methods-and-documentation?u=76281980&t=394)** And I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Pandas (Software)|Pandas]] (5)
> **Env Vars:** tab (7), csv (5), sam (3)
> **CLI Commands:** python (8), make (1)
> **Exercise Files:** source code (6)
> **Documentation:** the documentation (4)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Errors and debugging](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=0)** - [Instructor] In this video, we'll begin discussing some of the enhancements that IPython adds on top of the normal [[Python (Programming Language)|Python]] syntax.
>
> **[0:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=7)** These are known as magic commands, and these are prefixed with the % character.
>
> **[0:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=12)** These magic commands are designed to succinctly solve various common problems in standard data analysis.
>
> **[0:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=20)** Now, these come in two flavors, first one is line magics which are denoted by a single % prefix and operate on a single line of input.
>
> **[0:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=30)** Now, the second type is called cell magics which are denoted by a double % prefix and operate on multiple lines of input.
>
> **[0:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=39)** So first off, we have the % run magic command which is used to run Python script inside the Jupyter Notebook itself.
>
> **[0:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=47)** So, to demonstrate this, I have this example.py Python script.
>
> **[0:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=52)** And in this I have defined two variables, a and b.
>
> **[0:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=56)** Both of them are equal to five.
>
> **[0:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=57)** And then I have four functions, sum, product, divide and subtract.
>
> **[1:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=61)** So, let's say I want to run this script inside my Notebook.
>
> **[1:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=65)** So, all I need to do is simply type my command %run and then pass the part to my Python script.
>
> **[1:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=73)** I run the cell.
>
> **[1:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=75)** Now, in order to check if the script has run successfully, I'll try to access the variables defined in it and also one function.
>
> **[1:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=83)** Let's say we call the divide function, parse a and b, run it, and you see, we got the results as they are defined in the script, a equals five, b equals five and the division of them equals one.
>
> **[1:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=98)** So next step, we have the %load magic command which is used to load the script into the Jupyter Notebook.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=106)** So, let's say I want to load the same example.py script, simply write %load path to the file, and then run the cell and you see that the entire code base of the script is now loaded into our Jupyter Notebook which we can now refer to and then use it.
>
> **[2:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=125)** So, the next step we have is %magic and %lsmagic.
>
> **[2:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=131)** So, to read the documentation of any magic command, we just need to type the command and we'll get the documentation of it and everything about it.
>
> **[2:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=140)** Now, in order to access general description of all the available magic functions, including examples, you need to type %magic, run it and you'll get all of the information about all the magic functions along with the examples of each.
>
> **[2:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=159)** In order to access the list of all the magic commands, simply type %lsmagic, run it and you'll get the list of all the magic commands available.
>
> **[2:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=170)** Next up, we have error reporting in Notebooks.
>
> **[2:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=173)** So whenever we get an error in Python we get a trace back which tells us where that error occurred, why that occurred.
>
> **[3:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=180)** And we can basically control the amount of information that is displayed in that trace back using the %xmode magic command.
>
> **[3:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=189)** Now to demonstrate this, I have two functions defined here, divide which is returning the division of two numbers.
>
> **[3:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=195)** And the second function is initialize, which is initializing two numbers and then returning the division of the two numbers.
>
> **[3:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=202)** All right, so first of all, run the cell, define it.
>
> **[3:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=206)** And now I'm calling the initialize function with x equals two, run it.
>
> **[3:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=212)** And I got the zero division error because b was x minus two, and x is equals two.
>
> **[3:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=219)** So, that was zero.
>
> **[3:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=222)** Now, I can basically control the amount of information that was displayed here.
>
> **[3:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=225)** Because xmode has three different modes to display this information.
>
> **[3:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=230)** So first one is plain mode.
>
> **[3:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=232)** Now, it is more compact and it gives us less information, hides a bit of information from the trace back.
>
> **[3:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=239)** So this is the second mode, which is the context mode.
>
> **[4:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=243)** Now the default mode is the context mode.
>
> **[4:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=247)** And the third mode is the verbose mode which gives us detailed information, gives us more information as compared to the context, the default mode.
>
> **[4:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=257)** Now let's check them out one by one, %xmode.
>
> **[4:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=261)** Set xmode to plain, run the cell, call the same function with x equals two, run it and you see that if you compare it with the context mode trace back, a few of the lines are hidden over here because of the plain mode.
>
> **[4:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=280)** Let's check out the verbose mode.
>
> **[4:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=283)** %xmode verbose.
>
> **[4:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=286)** Call the function again, initialize two.
>
> **[4:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=291)** If you'll compare this trace back with the context mode.
>
> **[4:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=294)** Now this has a little bit more information as compared to the context trace back.
>
> **[5:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=300)** Now, the last thing that we have is interactive debugging.
>
> **[5:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=303)** So, when we will be hitting an exception, we can actually debug it on the fly using the %debug magic command.
>
> **[5:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=311)** So let's say we get initialize x equals two call this function.
>
> **[5:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=318)** We get an error.
>
> **[5:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=319)** Now, if I write %debug and run it, I get an ipdb debugger.
>
> **[5:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=326)** So here I can simply check the value of each of the variables inside the function.
>
> **[5:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=331)** So let's say I want to check what was a that I got an error.
>
> **[5:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=335)** So a was two.
>
> **[5:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=336)** I can also print the value of b.
>
> **[5:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=340)** So you see b was zero, and I was actually dividing them.
>
> **[5:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=344)** So that's why I got the error.
>
> **[5:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=347)** In order to quit, you can simply type q and hit enter.
>
> **[5:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=352)** Now, in case you want the debugger to launch every time you hit an exception, you simply need to do %pdb which is Python debugger, set it to on.
>
> **[6:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=363)** And now if you will call this function, initialize with x equals two, the debugger will open up on its own automatically and you won't have to call the %debug command.
>
> **[6:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=376)** So, this was an introduction to magic commands and how we can use them to run and load scripts, control the amount of information and add a trace back, and how to use the interactive debugger to debug errors on the fly.
>
> **[6:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=390)** Now, there are many more interesting commands and you should definitely check them out.
>
> **[6:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/errors-and-debugging?u=76281980&t=394)** So, go ahead and get some hands-on practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6)
> **Tools:** jupyter (3)
> **File Paths:** example.py (2)
> **Documentation:** the documentation (2)
> **Definitions:** known as (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Code profiling and timing](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=0)** - [Instructor] Once you have your code working, it's always a good practice to dig into its efficiency.
>
> **[0:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=5)** To do that, you should check for the execution time of your operations and determine where the bottleneck is.
>
> **[0:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=12)** And when we talk about efficiency, timing and code profiling are the two best practices that every data scientist should know how to do.
>
> **[0:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=21)** In this video, I will walk you through the array of functionalities that IPython offers to profile and time your code.
>
> **[0:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=29)** So first off we have the percentage time magic command which is used to time the execution of single statement of code.
>
> **[0:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=37)** So, let's say I want to time the file reading operation by [[Pandas (Software)|pandas]], all I need to do is first import pandas as PD.
>
> **[0:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=46)** And then I want to time the reading operation.
>
> **[0:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=49)** So, first I will type my magic command which is %time and then the command to read the file.
>
> **[0:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=58)** So pd.read_csv function and pass the bot to the file.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=64)** So I have in my data directory advertising.csv.
>
> **[1:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=72)** Now if I run this cell, now this would time the operation.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=77)** So I've got CPU time 3.89 millisecond, system time 652 microsecond, and the total time, basically the addition, and it also gives us the wall time which is the time that our wall clock would display.
>
> **[1:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=90)** Great.
>
> **[1:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=91)** Next up, we have %timeit.
>
> **[1:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=94)** Now we'll %timeit command is used to learn about the time it took for repeated execution of a single line of code.
>
> **[1:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=102)** Now this is more accurate measure as it runs multiple times and returns the average time.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=109)** So it automatically decides the number of repetitions based on the execution time of a single line of code.
>
> **[1:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=116)** So let's say I want to time some operation of a hundred numbers.
>
> **[2:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=122)** So I simply type %timeit command and then I use the sum function.
>
> **[2:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=128)** Percentage 100 numbers, let's say range of 100.
>
> **[2:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=131)** And when I run this, so here I get 1.96 microsecond plus minus 65.8 nanosecond, which is the standard deviation.
>
> **[2:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=141)** So 1.96 is the mean of seven runs and each run basically had a hundred thousand loops each.
>
> **[2:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=152)** So now if I use it to time the sorting operation over a list, so I have a_list here which is containing thousand random values.
>
> **[2:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=165)** Now if I time the sorting operation, so simply type the command and then a_list.sort called the sort method.
>
> **[2:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=177)** Run the cell and this will again give you the time it took for seven runs and each of the run had a hundred thousand loops.
>
> **[3:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=185)** So 4.82 microsecond is the average.
>
> **[3:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=190)** Now repeating an operation is not always the best option.
>
> **[3:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=193)** Sorting an unsorted list is different from sorting a sorted list.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=199)** And thus you may have skewed results because of the repetition.
>
> **[3:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=203)** You have a slow performing command or when the system delays may not have a direct effect on the results, it's better to use percentage time magic command.
>
> **[3:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=213)** So instead we should here use percentage time, a_list.sort and then this would give us the CPU time, the wall time and the total time.
>
> **[3:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=228)** So now if you want to profile a code, we have the %prun command.
>
> **[3:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=235)** Now this command runs the code with the profiler giving us all the details of the total number of function calls, time it took to complete each function call, along with the cumulative time as well.
>
> **[4:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=248)** So I have defined this function, create square matrices.
>
> **[4:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=253)** Now this is simply accepting number of rows that I want to use.
>
> **[4:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=258)** And again, it will create equal number of columns and rows to create a square 2D list with random integers.
>
> **[4:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=267)** So here if I first run the cell, if I try to profile this function, all I need to do is simply type %prun and then call the function.
>
> **[4:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=279)** So I'm going to profile the function for a thousand rows.
>
> **[4:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=282)** So call the function, create_sq_matrices with 1000 as my input, run it,
>
> **[4:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=293)** and this will give us a popup from the bottom and you can see that it has number of calls, the first column total time, second column per call time, that is how much time did it take to complete each call, and then cumulative time.
>
> **[5:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=309)** Great.
>
> **[5:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/code-profiling-and-timing?u=76281980&t=310)** So we learn how to time individual operations, how to time the repetitive executions, and lastly how to profile our code, record the efficiency of our code, so now you know how to time and profile your code snippets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Code Identifiers:** a_list (3), read_csv (1), create_sq_matrices (1)
> **Versions:** 1.96 (2), 3.89 (1), 65.8 (1), 4.82 (1)
> **Env Vars:** cpu (2)
> **File Paths:** advertising.csv (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 2. NumPy and Pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Essentials of NumPy arrays](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=0)** - [Instructor] In this video, we're going to talk about some very important and basic operations of NumPy.
>
> **[0:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=5)** Now, NumPy is short for Numerical [[Python (Programming Language)|Python]], which provides an efficient interface to store and operate on dense data buffers.
>
> **[0:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=13)** Now, starting from the basics, we'll see how to create NumPy arrays, use their attributes to learn about ndarray object, then we'll look at indexing and slicing to access sub-arrays.
>
> **[0:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=26)** So, first off, we'll import the NumPy package as np, as per the convention.
>
> **[0:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=31)** Then it's very important and very basic to create NumPy arrays.
>
> **[0:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=36)** So, in some ways, NumPy arrays are like Python's built-in list type, but NumPy arrays provide much more efficient storage and data operations as the array grows larger in size.
>
> **[0:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=50)** So let's say if... The first method is very simple, so we can use the Python list to create NumPy arrays.
>
> **[0:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=58)** So let's say I create a list with elements three, comma, four, comma, five, and then I can use the array method, pass this list to it, and it'll create a NumPy array with all the elements.
>
> **[1:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=71)** Now, apart from these, we have some placeholder functions that can create data following some conditions.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=77)** So let's say if I want to create an array of linearly space elements, so I can use the arrange function and I have to provide the range within which I want all the values and the step size.
>
> **[1:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=91)** So let's say I want a gap of three between every two or consecutive values.
>
> **[1:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=96)** So this would give me those values.
>
> **[1:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=99)** So the last value is excluded.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=101)** So I have values from zero up til 27 and the gap is three, the step size is three.
>
> **[1:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=107)** Now, if I want to create an array and dividing the entire range into a number of parts, depending upon the number of elements that I want in the array, I can use the linspace function, which takes the range.
>
> **[2:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=121)** Let's say I want to divide zero to 10 into five parts.
>
> **[2:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=125)** So this is how I'm going to do it.
>
> **[2:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=127)** The first value is zero and then 2.5 and five.
>
> **[2:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=131)** So basically equal values and equally spaced values where the number of items is equal to five.
>
> **[2:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=140)** So when I know the number of elements I want in an array, so this is how I'm going to define it, using the linspace function.
>
> **[2:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=148)** Now, if I want to create a 2D array, we can also create normally distributed random values using NumPy.
>
> **[2:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=154)** So we'll use the NumPy random function and then inside it I have the normal method.
>
> **[2:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=160)** It takes mean, so let's say I keep the mean at zero and the standard deviation at one.
>
> **[2:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=166)** If I'm creating a 2D array, I provide the shape.
>
> **[2:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=168)** So let's say I want three cross three 2D array.
>
> **[2:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=171)** If I run this, so I get all the values which have the mean equals to zero and standard deviation at one.
>
> **[2:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=179)** So this would be my 2D array which is normally distributed.
>
> **[3:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=184)** Now, the next important part is to learn about the useful array attributes.
>
> **[3:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=188)** So NumPy has the ndarray objects that not only provides efficient storage for array-based data, but also offers useful and efficient operations on the data.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=199)** So let's say I create three types of array.
>
> **[3:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=202)** So here I'm creating 1D, 2D and 3D areas.
>
> **[3:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=206)** So I've set the seed to zero, basically so that I could create the same values on every run.
>
> **[3:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=212)** So I'm creating a 1D array using the random integer function.
>
> **[3:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=217)** All the values should be less than 10 and the size is six.
>
> **[3:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=220)** So I want six elements.
>
> **[3:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=222)** I'm creating a 2D array of shape three cross four.
>
> **[3:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=225)** Then I'm creating a 3D area of shape three cross four cross five.
>
> **[3:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=229)** Run the cell and our arrays are created.
>
> **[3:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=232)** Now I can actually learn about the array.
>
> **[3:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=235)** So let's say if we talk about the 3D array, I can get the dimension using the ndim attribute.
>
> **[4:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=242)** I can get the shape using the shape attribute, size using the size attribute, and then I can also find out the space that this area is taking using nbytes attribute.
>
> **[4:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=256)** So you see that the dimensionality is three because it's a 3D array, shape is three cross four cross five, as we saw, then size is 60 and number of bytes is 480.
>
> **[4:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=266)** That is 60 into eight.
>
> **[4:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=268)** Now, if I talk about indexing, the indexing is basically to access a particular element in my array, and the slicing is used to get a sub-array of the 2D array that we have.
>
> **[4:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=282)** Now, if I want to print the first 1D array, let's say I want to print the entire array first.
>
> **[4:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=289)** Then if I want to access the first element, I can simply do arr1 with zero in my square brackets.
>
> **[4:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=296)** Now, last index is simply negative index.
>
> **[4:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=299)** So, let's say if I do array of minus one, so that'll give me the last value.
>
> **[5:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=304)** If I do the first three elements of the array, so that is very simple, I can use the slicing here.
>
> **[5:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=311)** So slicing works like I have to provide the starting index, the stop index and then, at the end, the step size.
>
> **[5:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=318)** So let's say I start, so here, I want the first three elements.
>
> **[5:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=322)** So at the start, we don't have to provide the starting element, we just need to provide the ending index.
>
> **[5:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=327)** That is three.
>
> **[5:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=328)** Then if I want to access all the elements after fourth, here, the starting index would become four up til the end, so you don't need to provide the ending index.
>
> **[5:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=336)** If you want a sub-array between, let's say, three, third index to seventh index, so here, the start and stop would become three and eight because the ending index is actually excluded.
>
> **[5:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=348)** Then if we want alternative elements in the array, it's very simple.
>
> **[5:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=354)** You don't have to provide start stop because we want to cross the entire array.
>
> **[5:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=358)** And then step size is two because we want alternative elements.
>
> **[6:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=362)** And we can also use slicing to reverse the array, and it's very simple, the step size should be minus one and it'll get the results for you.
>
> **[6:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=372)** So this is our 1D array, first element five, last element nine, all correct.
>
> **[6:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=377)** Three elements, first three elements, elements after fourth index, sub-array, alternative elements and reversed array.
>
> **[6:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=384)** Now, if we look at the same concept for 2D array, first I'm printing the 2D array, then if I want to access the second element of the third row, third row means second on index, and then after a comma, I can add values for columns.
>
> **[6:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=399)** So, for second element, I would access the first index column.
>
> **[6:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=403)** Then slicing an array to get the second and third rows.
>
> **[6:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=407)** So for that, I will have to slice along the rows, so that'll be very simple.
>
> **[6:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=413)** I want to just skip the first row.
>
> **[6:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=415)** That is how I'm going to skip the first row.
>
> **[6:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=418)** I want all the columns, so that will simply be colon and it'll get all the columns.
>
> **[7:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=422)** And if I want to get alternative columns, so that'll be all the rows and alternative columns, mean I provide a step size of two.
>
> **[7:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=432)** So you see 2D array, second element of the third row, and then slicing the array to get second and third rows, skipping the first one, and then alternative columns.
>
> **[7:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/essentials-of-numpy-arrays?u=76281980&t=440)** So we saw how to create NumPy arrays using different methods, placeholder methods, learning about the attributes and then indexing and slicing to access sub-arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), find (1)
> **Versions:** 2.5 (1)
> **Cross-References:** as we saw (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### [Broadcasting](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=0)** - [Instructor] Now we'll discuss broadcasting, which is a very important topic that replaces the slow button loops and provides a means of vectorizing operations.
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=9)** A broadcasting is simply a set of rules for applying binary universal functions, like addition, subtraction, multiplication, division on arrays of different sizes.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=19)** So, first off let's input the numpY library as np, around a cell.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=25)** Now, if I try to add two arrays, let's say I create an aray, np.array using the array method, past the list elements three, four, five.
>
> **[0:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=37)** Then I create another array b, using the same method.
>
> **[0:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=42)** And then pass, let's say seven, eight, nine.
>
> **[0:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=45)** And if I have to add these two arrays, I don't have to write any pattern loop.
>
> **[0:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=50)** I can simply do a plus b and I have the results here.
>
> **[0:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=55)** So the additional operation takes place on an element by element basis.
>
> **[0:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=59)** So If have seven plus three, 10, eight plus four, 12, nine plus five 14.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=64)** Now, when I have arrays of different sizes, here, let's say I try to add n to the array a, so, we can think of this as an operation that stretches or duplicate the value 10 into the array of size three.
>
> **[1:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=82)** And all of the elements would be 10.
>
> **[1:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=83)** So 10, 10, 10, and then add the result.
>
> **[1:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=87)** So then add one element by element basis.
>
> **[1:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=91)** Now, the advantage of this NumpY broadcasting feature is that this duplication of values does not actually take place, but it is a useful mental model for our interpretation.
>
> **[1:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=104)** So if I do a plus 10, you see that 10 has been added to each element of array a.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=109)** Now building over the same concept.
>
> **[1:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=112)** If I try to add a 2D array to a 1D array, let's try, and to create an array first, and let's try to keep all the elements as ones.
>
> **[2:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=121)** I'm using the place holder function np.ones.
>
> **[2:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=126)** And I simply have to pass the size, the shape of my 2D array, so I'm creating a three cross three array, let's say, this is the array that I have with all the elements as ones.
>
> **[2:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=140)** Now, if I try to add array a, which is a 1D array ones, which is a 2D array, so let's say ones, plus a here also it'll try to match the higher dimension, which is the 2D array, and then add all the elements correspondingly.
>
> **[2:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=159)** So how does that happen?
>
> **[2:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=160)** We have a few rules.
>
> **[2:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=162)** So the NumpY, the broadcasting feature follows a strict set of rules to determine how the interaction between the arrays would be.
>
> **[2:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=169)** So the first rule is that if the two arrays differ in their number of dimensions, the shape of the one with fewer dimension is padded with ones on its leading left side.
>
> **[3:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=181)** So let's take a look at the first example of rule number one.
>
> **[3:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=185)** So I have the array a, which is of two cross three, and then I have an array b, which is 1D and contains only three elements.
>
> **[3:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=194)** And if I try to add these, if I try to run this, so you see that the first array a has all ones, which is a two cross three.
>
> **[3:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=203)** So the shape is two cross three of array a, and the shape of b is three.
>
> **[3:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=209)** Cause it's some 1D array.
>
> **[3:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=211)** Now as per rule number one, the shape of the one with fewer dimension is padded with one on its leading left.
>
> **[3:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=218)** So after applying rule number one, I have the shape of b, which is 1,3.
>
> **[3:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=225)** And if we look at rule number two, it states that if the shape of the two arrays does not match in any dimension, the array with shape equal to one in that dimension is scratched to match the others.
>
> **[4:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=241)** So here, if we look at the shape of b after applying rule number one, which is 1,3, now it has the shape one here, so it would stretch itself to match the other shape.
>
> **[4:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=253)** So after applying rule number two, the shape of b becomes 2,3, and then the element by element addition takes place.
>
> **[4:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=261)** And we get the value, 1,2,3, 1,2,3 which is a plus b, all right.
>
> **[4:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=267)** Now let's take a look at the example of rule number two, I've created a 2D of shape three cross one, then a 1D array of simply three elements.
>
> **[4:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=280)** And then if I do a plus b, you see that I get the results accordingly.
>
> **[4:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=285)** Now head also, if we try to unpack the rule.
>
> **[4:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=288)** So originally the shape of a was three cross one, b was simply three.
>
> **[4:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=293)** After applying rule number one, the shape of b becomes one cross three.
>
> **[4:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=298)** Now here also after applying rule number two, since both of these arrrays have shaped one in one of the dimensions, each of these would match the other shape.
>
> **[5:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=310)** So a shape would become three cross three, and b shape would also become three cross three to match the other shape and then element by element addition takes place.
>
> **[5:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=321)** And we get the value of a plus b.
>
> **[5:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=325)** Now let's take a look at the example of rule number three.
>
> **[5:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=328)** So head Alto, rule number three states that if in any dimension, the sizes disagree and neither is equal to one then an array is raised.
>
> **[5:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=341)** So if we take a look at this, so we have a 2D array, which shape three cross two, and then a 1D array.
>
> **[5:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=348)** So we have an array edit here, which says that operations could not be broadcast together, which ships three cross two and three comma.
>
> **[5:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=357)** So if you try to unpack this, so originally a's shape is three cross two, b's shape is three, just 1D array.
>
> **[6:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=365)** Applying rule number one, we get the shape of b as one cross three.
>
> **[6:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=370)** And after applying rule number two, the shape of b would become three cross three to match the shape of a, but the shape of a in the other dimension is two.
>
> **[6:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=385)** So this is incompatible.
>
> **[6:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=387)** So that's why the addition actually gives us an edit.
>
> **[6:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=391)** Now, here we have seen how the broadcasting tools actually apply to vectorize operations, like addition, subtraction, multiplication, and you can build over these look at a few more examples.
>
> **[6:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=405)** If you get more hands on practice.
>
> **[6:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/broadcasting?u=76281980&t=408)** Again, a very important topic for machine learning and [[Data Science]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **Definitions:** is a  (6)
> **Code Identifiers:** numpy (1)
> **Speakers:** - [instructor] (1)

#### [Comparison, masks, and Boolean logic](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=0)** - [Instructor] In this video, we're going to understand Boolean operations and NumPy arrays.
>
> **[0:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=6)** We'll be covering how to use comparison operators as element-wise universal functions.
>
> **[0:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=12)** We'll see how to use Boolean arrays with composite conditions, and at last we'll see how to filter values using masking.
>
> **[0:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=22)** First off again, let's import the NumPy package.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=25)** Here I have created an array with 10, 20, 30, 40, 50.
>
> **[0:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=29)** Now, if I want to see or check which array values are greater than 20 let's say, I can do this.
>
> **[0:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=38)** I can do arr, array, greater than equal to 20, and this will check on each of the element of my array, if their value is greater than 20 or not.
>
> **[0:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=50)** You see?
>
> **[0:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=51)** It returns a Boolean array, which tells me that if that particular element was greater than equal to 20 or not.
>
> **[0:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=59)** I got true for all the values that are greater than or equal to 20.
>
> **[1:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=65)** Similarly, I can use use any of the comparison operator, equal to equal to, greater than equal to, less than equal to, less than, greater than.
>
> **[1:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=74)** Let's say I check for all the values that are equal to 30, so I'll get false except for the value 30, which we see that is the second index, basically the third value here.
>
> **[1:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=88)** And corresponding to which we have got, true.
>
> **[1:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=91)** We can also use the equivalent universal function, so let's say if I do np.greater, which is the universal function for greater than, you parse the array and the threshold so let's say again 30, this would also give us the Boolean Array, which would have true for the values greater than 30, which was the last two values, which is 40 and 50.
>
> **[1:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=114)** Similarly, talking about Boolean Arrays, again take this concept forward.
>
> **[2:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=120)** Let's say if I create a 2D array of random integers with values less than 10, so here let's say using the random function and here calling the integers, random integer function, parsing value is 10 because I want all the antidotes to be less than 10 and then size of the 2D array, let's say size equals.
>
> **[2:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=147)** I want a (3,4) 2D array, and if we take a look at this array, I've got three rows and four columns.
>
> **[2:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=156)** If I want to count the number of values that are greater than five, I can use the np.sumfunction, all I need to do is use the method, sum and inside, I have to parse the condition.
>
> **[2:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=168)** Let's say I want to check has the value greater than five, it gives me seven, which means that there are seven values that are greater than five.
>
> **[2:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=178)** It is basically adding up all the true values in array greater than five.
>
> **[3:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=182)** That is the Boolean array making use of the Boolean array that we got from the condition.
>
> **[3:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=187)** Similarly, we can count the number of values that are greater than five in each row.
>
> **[3:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=192)** It's performing the same operation for each row, np.sum parse the condition edit greater than five, and then you have to parse this extra parameter, which is axis equal to one, which specifies that you have to carry out this operation on each row, and we got the result for each row.
>
> **[3:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=213)** That is, we have three rows, so in the first one we have four elements greater than five, and the second row we have zero element and in the third row, we have three elements greater than five.
>
> **[3:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=224)** Similarly, we can check if any, or all the values are above or below a particular threshold.
>
> **[3:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=233)** You can simply do np.any, use the any method here and then parse the condition, let's say array greater than five, and this gives us two, basically we have values that are greater than five in our array, that's why it's true, and if we want to check if all the values are greater than five or not, then we can do as the all method, parse the condition, and this should be false because we have values less than five as well.
>
> **[4:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=260)** You see, we have fault here.
>
> **[4:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=262)** Our next step is Boolean operators to handle multiple conditions.
>
> **[4:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=267)** Let's say, I have a test score single one array, contains all the values less than a 100, and basically we have 30 schools present in it. All right?
>
> **[4:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=280)** These are the test scores that we have, now, if I want to access the number of students who scored more than 50, but less than 75, all I do is, np.sum and then parse the condition.
>
> **[4:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=294)** First condition is test underscore scores, it should be more than 50, and then the second condition is using an hand operator, but less than 75, so test_scores and value should be less than 75, And if we run this, we'll get the values that are between 50 and 75.
>
> **[5:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=321)** These are the total number of values.
>
> **[5:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=322)** And now if you want to actually extract the indices, which comply with these conditions, we can use the vhere function and then copy the same condition, parse it here, and this will give us all the indices that follow this condition.
>
> **[5:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=342)** The last step is masking.
>
> **[5:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=345)** Masking is basically used to extract elements or to filter out elements from the array.
>
> **[5:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=350)** Let's say if I define a mask that is test_ schools, I want all the scores that are above 75.
>
> **[5:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=359)** This is my mask, and I can use this mask to fill out my values, this will give us the values themselves.
>
> **[6:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=368)** If I parse mask here, run it, and these are the only values that are greater than 75 in my test scores, array.
>
> **[6:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=379)** That was all about Boolean operations using composite conditions and numPy arrays, and then masking.
>
> **[6:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=388)** There's a lot to it, you should definitely practice it out because you'd be using a lot well manipulating and cleansing your dataset in your [[Data Science]] predict.
>
> **[6:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/comparison-masks-and-boolean-logic?u=76281980&t=398)** Go on and get some hands on practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **Code Identifiers:** test_scores (1), numpy (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Pandas indexing and subsetting](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=0)** - Now that we have covered NumPy, we should talk about the next very important package and batons [[Data Science]] stack that is [[Pandas (Software)|pandas]].
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=9)** In this video will focus on indexing and subsetting in a pandas data frame.
>
> **[0:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=13)** Pandas is the most widely used [[Data Manipulation]] [[Python (Programming Language)|Python]] package that is built on top of NumPy, and it provides an efficient implementation of a special data structure called data frame.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=25)** Now here, I've imported a few libraries that will lead.
>
> **[0:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=29)** So NumPy as np pandas, as pd, then I've imported random and, string libraries that I'm using to create IDs.
>
> **[0:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=38)** And my students scores dictionary.
>
> **[0:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=41)** So here I'm creating this dictionary that is storing the student's roll number, ID, Maths scores, physics scores, and chemistry scores, and for creating ID.
>
> **[0:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=52)** I'm using the random and string library, creating five letters strings, four 30 students, creating 30 roll numbers using the NumPy arrange method.
>
> **[1:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=60)** And then I'm creating random scores that are below hundred, but for 30 students using the Rand integer function.
>
> **[1:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=69)** If we look at this dictionary, this is what our dictionary looks like with five keys and 30 arrays corresponding to each. Now, if you want to convert this scores dictionary to a pandas Data Frame, all we need to do is use the pandas Data Frame method, pd dot Data Frame, pass those scores dictionary to it.
>
> **[1:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=94)** And then look at the first few rules, df dot head.
>
> **[1:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=98)** So this is our data frame.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=101)** Our data frames are essentially multi-dimensional areas with attached rows and column labels, and often with heterogeneous types.
>
> **[1:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=110)** aah Whereas a dictionary maps, a key to a value, a data frame on the other hand, maps, a column name to a series of column data.
>
> **[2:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=120)** So here as we can see, the keys in the dictionary are converted as column names, ID, role, match scores, physics scores, and chemistry scores. So we have five columns.
>
> **[2:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=130)** Now, if we want to set one of the column, which is basically let's say, ID column as the index of this data frame, we can do that using the set index method, df dot set, underscore index.
>
> **[2:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=143)** And we set this index basically to be able to pass through and identify and gave identity to each row.
>
> **[2:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=152)** So df dot set index pass the ID column, which is unique to the data frame.
>
> **[2:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=159)** And then if we want to look at the information of this data frame, has it been converted to an index column?
>
> **[2:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=166)** We can use the info method. So as we can see now, we only have four columns starting from roll, Maths score, physics scores, chemistry scores, and the ID column has been converted to the index column.
>
> **[2:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=177)** Now, if you want to access individual columns, we can do that using two methods.
>
> **[3:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=182)** So first is the square brackets and then pass the name of the column that you want to access as strings.
>
> **[3:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=190)** So maths scores, this will give you all the math scores in the data frame, the other method is using the dot operator, followed by the name of the column that you want to access.
>
> **[3:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=200)** This again, will give you the math scores, but the better method is to use string and square brackets because that avoids the conflict between object methods and the name of the columns.
>
> **[3:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=215)** Now, if you want to convert this data frame into NumPY, 2d array, you can do that using df dot values attribute, run this, and this value convert your data frame into a 2d array.
>
> **[3:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=226)** You going to access the first or any row using indexing.
>
> **[3:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=229)** So this will give you the first row.
>
> **[3:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=232)** Now we have indexers in pandas, pandas provide some special indexer attributes, that explicitly exposed certain indexing team.
>
> **[4:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=240)** These are not functional methods, but attributes that expose a particular slicing interface to the data and the series.
>
> **[4:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=247)** So here we have the first method, which is the iloc attribute.
>
> **[4:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=251)** That allows indexing and slicing that always references the implicit Python style index, which is basically the numerical index. So here, if you want to access the tenth row, all you need to do is use the iloc attribute, pass the tenth index, and it will get you the data for the tenth row.
>
> **[4:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=270)** So this is the data for the tenth row. Now, if you want to access only the maths scores for the tenth row, you can do that using again, the iloc attribute and you pass the tenth row And followed by a comma.
>
> **[4:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=285)** And then the maths scores column is the second column in the data frame. So indexing starts from zero.
>
> **[4:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=292)** So Maths, if you want to access maths scores, that would be column index. Number one, you get the scores, which is Math scores is 50 as we can see above.
>
> **[5:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=302)** So here you can get the row and column combination like this using the iloc attribute.
>
> **[5:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=310)** And, if let's say you want to access the first five rows of the first two columns you can use slicing as we did in NumPy simply using the iloc attribute, first five rows that is, stop index becomes five, for rows and followed by stop index for columns becomes two, and we run it and we'll get the first two columns.
>
> **[5:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=335)** And the first five rows, the other attribute is the loc attribute that allows indexing and slicing that always references the explicit index. So that is the labeles.
>
> **[5:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=347)** So let's say you want to access all the rolls after the label 29 VMZ.
>
> **[5:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=353)** So, here, you can mention the label, which is 29 VMZ and you want to get all the values after that, run this, and you get all the values after the 29 VMZ that is included as well.
>
> **[6:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=371)** Then if you want to simply add all the columns before the physics scores column, you can do that as well, using slicing.
>
> **[6:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=384)** Run it and you get all of them before the physics scores.
>
> **[6:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=389)** So this is how loc attribute works.
>
> **[6:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=391)** Now, here, we have seen different ways of indexing and subsetting the data frame.
>
> **[6:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=397)** Now there are a bunch of more attributes that you can use.
>
> **[6:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/pandas-indexing-and-subsetting?u=76281980&t=400)** So get some hands on practice with these methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (2), [[Data Science]] (1), [[Data Manipulation]] (1)
> **Env Vars:** vmz (3)
> **CLI Commands:** python (2)
> **Speakers:** - now (1)

#### [Handling missing data](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=0)** - [Instructor] The difference between detail found in many tutorials and data in the real world is that the real world data is rarely clean and homogenous.
>
> **[0:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=8)** In particular, many interesting data sets will have some amount of data missing, to make matters worse different data sources may indicate missing data in different ways.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=19)** So in this video, we're going to talk about ways to represent missing values and methods to detect and impute them.
>
> **[0:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=27)** So, first off I am importing the libraties, numpy, panda's, random, string around a cell.
>
> **[0:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=33)** Now, if you talk about ways to represent missing values, basically there are two ways.
>
> **[0:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=38)** First one is masked boolean, it is.
>
> **[0:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=41)** So separated area is basically created, which represents all the missing values as booleans.
>
> **[0:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=46)** And the drawback of this method is that it adds additional storage and computational complexity.
>
> **[0:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=53)** Now, the second method is sentinel values.
>
> **[0:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=56)** So the hair, we use a data specific convention to indicate missing values, basically using a value which is readily valid, or we can use a bit pattern.
>
> **[1:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=67)** And the most commonly used method is basically the Itripoli floating point value, which is NAN which stands for not a number.
>
> **[1:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=76)** So here I have created a numpy array called values.
>
> **[1:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=80)** Now all the elements are integers except one element, which is NP dot NAN.
>
> **[1:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=86)** Now, if I check the data type of this area, if I run the cell, so the data type comes out to be floating point number, and it's because NP dot NAN, it is from Itrioli floating point standards.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=101)** That's why we have the data type, which is typecasted from integer to floating point.
>
> **[1:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=107)** Now, if I try to perform any operation with NAN, if we try to add something to NAN or if you multiply zero with NAN the value still remains the same, we get NAN.
>
> **[2:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=120)** Now, if we talk about missing data in [[Pandas (Software)|pandas]], so let's say I have created a sample dictionary over here, which is containing one key, which is called scores, and, I have an eddy overhere, which is containing all the integers and it contains one non-value and one NP dot NAN.
>
> **[2:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=141)** Now, if I create a data frame of this deck, so let's say we call the data frame method and boss the deck.
>
> **[2:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=155)** If we look at the data frame, we see that the non-value also got converted to NAN.
>
> **[2:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=163)** So that's how pandas interpret different types of missing values.
>
> **[2:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=168)** Now, if I check the data type of this data frame, DF dot D type, it's actually D types.
>
> **[2:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=179)** So you see that score's column is floating point number, that is the data type of our C's, which is because of the NAN values.
>
> **[3:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=190)** Now, how can we detect null values?
>
> **[3:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=193)** So here I am using this advertising dot CSV file that I have in the data directory.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=199)** If I read this file using the read CSV method, we see that there are four columns, TV, radio, newspaper sales, and there are some missing values that are represented by NAN.
>
> **[3:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=209)** Now, if I want to detect the null values, I can use the isnull method.
>
> **[3:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=216)** Now, if I print this, we see that all the values that are null are actually marked as two, and all the failed values are false.
>
> **[3:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=227)** If we try to sum this up, we sum up all the null values, so that is cascading and some function ahead of the isnull method.
>
> **[3:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=238)** So we get the total number of missing values in each column that is TV contains zero, radio contains six missing values, newspaper contains five missing values and sales column contains three missing values, that's how we detect null values.
>
> **[4:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=254)** So if your data contains a lot of missing values, so you can also use the not null method, DF dot not null.
>
> **[4:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=262)** And this will Mark all the field values as true, and all the null values as false, does the opposite of the isnull method.
>
> **[4:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=270)** Now, how do we deal with these missing values?
>
> **[4:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=273)** The first method is that we can drop these missing values using the drop NA method that comes with the data frame object.
>
> **[4:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=282)** Now you see that all the missing values are dropped from this data frame.
>
> **[4:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=287)** As you can see from the index zero two, the first row, had some values that's why they have been dropped.
>
> **[4:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=295)** Now, if you want to drop the entire column, if it contains another value, we can simply do DF drop any and then pass excess equals one, and it will drop all the columns that contains even one single null value.
>
> **[5:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=313)** But that is a little too harsh.
>
> **[5:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=314)** We don't want to do that, it's probably not a good idea.
>
> **[5:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=317)** So we can do something like if a Golem contains all null values, then there's no purpose to have it in the data frame.
>
> **[5:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=326)** So here I have added another value column, which contains all NAN values.
>
> **[5:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=332)** And what I'm going to do is I'm going to pass the how argument to the drop any method.
>
> **[5:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=339)** And I'll Mark it as all for basically, if any of the columns contain all null values, that column would be dropped.
>
> **[5:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=348)** And as you can see that I had null values column in my data frame, but after dropping, using the drop any method and the how parameter that null values column got dropped and output does not contain the null values column anymore.
>
> **[6:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=365)** Now we can use different methods to fill the null values.
>
> **[6:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=368)** The most common way is to use the fill any method N pass zero.
>
> **[6:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=374)** So this would simply fail all the values with zero, as we can see in the output.
>
> **[6:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=379)** Now there are different other ways.
>
> **[6:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=381)** One of those strategy is the forward fill method, which is specifying the previous value to be propagated forward.
>
> **[6:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=388)** So here you use the fill NAN method, but you pass an argument called method, which contains a fill.
>
> **[6:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=396)** It stands for forward fill and here the previous value, as you can see in the radio column, we have 37.8 in the second row as well, replacing the null value, and so on and so forth.
>
> **[6:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=409)** As you can see in the third row as well, 41.3 is propagated forward to the fourth index row, which contains a null value.
>
> **[6:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=419)** Similarly, we have different strategies to fail or impute the missing values with mean or any other [[Statistics]] that you want to fill it up with.
>
> **[7:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=427)** So let's say if I want to impute my null values with the mean of the column, so I can simply do DF dot mean, and this will fill up all my values with the mean of that particular column.
>
> **[7:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=443)** Similarly, if there are a lot of outliers in your data, you can use the median strategy as well, following the same concept and method, fill NA, and you fill them up with DF dot median.
>
> **[7:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=456)** And that's all your not values would be filled up or imputed with the median.
>
> **[7:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=462)** So the main points to take away from this video, are it's to represent missing values, how to detect them, and then, ways to drop and impute those missing values.
>
> **[7:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/handling-missing-data?u=76281980&t=472)** So definitely go ahead, and try out these methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Statistics]] (1)
> **Env Vars:** nan (13), csv (2)
> **Definitions:** stands for (2), is called (1), is a  (1)
> **Versions:** 37.8 (1), 41.3 (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Aggregation and grouping](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=0)** - [Tutor] So when we're working with large datasets, an essential piece of analysis is efficient summarization.
>
> **[0:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=7)** So concepts like computing aggregations using sum, mean, median, minimum, maximum, in which a single number gives insight into the nature of a potentially large dataset.
>
> **[0:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=21)** So in this video, we'll explore aggregations in [[Pandas (Software)|pandas]] from simple operations, to more sophisticated operations based on the concept of a GroupBy.
>
> **[0:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=33)** So here, we are going to use Seaborn Library.
>
> **[0:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=36)** Basically, we are using the dataset called penguins.
>
> **[0:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=40)** So C one library has this method called load dataset, which can be used to load or use a dataset.
>
> **[0:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=48)** So they have couple of datasets available, I'm going use the penguins dataset.
>
> **[0:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=53)** And then let's look at what we have in the dataset here, and the dataframe, so it returns a dataframe.
>
> **[1:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=61)** And let's look at the first few rows.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=64)** So if you see that we have Species, Island, Culmen_Length, and then Flipper_Lengths, Body_ Mass, Sex.
>
> **[1:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=73)** So these are the columns that we have available in the dataset.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=77)** Now, we'll build over it.
>
> **[1:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=78)** So we'll see what can we do.
>
> **[1:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=80)** So first of all, we have the aggregate functions for a dataframe, so we can directly use the aggregate functions.
>
> **[1:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=87)** So let's say I want to calculate the mean, for the entire dataframe.
>
> **[1:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=93)** So all I can do is use the dataframe, invoke the main method, and then run it, and it will give me the average for all the numerical variables in the dataframe, great.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=106)** Now, that was easy.
>
> **[1:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=108)** Now one of the most convenient method to compute common aggregates is the describe method, very important.
>
> **[1:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=116)** So what you need to do is simply all the dataframe and then invoke the method, describe over it, run it, and it gives you the summary [[Statistics]] for all the numerical variables.
>
> **[2:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=131)** And of course, you can use it for categorical variables as well.
>
> **[2:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=134)** So by default, it gives you the data for numerical variables, and it gives you count, mean, standard deviation, minimum value of the column, 25th percentile, 50th percentile, 75th percentile, and then the maximum value of that column.
>
> **[2:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=151)** Pretty intuitive function to use.
>
> **[2:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=153)** So next up we have is GroupBy.
>
> **[2:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=157)** Now, simply aggregations can give you a gist of your dataset.
>
> **[2:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=160)** But often, we would prefer to aggregate conditionally on some label or index.
>
> **[2:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=166)** So this is implemented in a so called GroupBy operation, and the operation is simply, put three steps.
>
> **[2:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=175)** So first is the split step, which involves breaking up and grouping a dataframe depending on the value of the specified key as we'll see, second is the apply operation, which is the step that involves in computing sum function, usually an aggregate transformation or filtering within the individual group.
>
> **[3:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=193)** And then the last step is the combined step that merges the results of these operations into an output array.
>
> **[3:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=201)** So let's say I want to group the penguins dataset on Species column.
>
> **[3:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=205)** So, this is how I'm going to use the GroupBy method.
>
> **[3:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=210)** So .groupby and then you have to specify the key.
>
> **[3:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=217)** So let's say I want to group all the penguins by Species.
>
> **[3:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=221)** So run it, and it gives you a GroupBy object.
>
> **[3:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=225)** Now, this object is a very flexible abstraction.
>
> **[3:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=228)** And many ways, you can simply treat it as if it's a collection of dataframes, and it does all the difficult things under the hood.
>
> **[3:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=237)** So you might want to use it the way you require for your use case.
>
> **[4:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=241)** So let's say if I want to use the body_mass column, in this groups, so let's say again, copy this from here, paste it here.
>
> **[4:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=256)** Now I want to use the body_mass_ g column.
>
> **[4:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=262)** And this again, would give me GroupBy series.
>
> **[4:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=265)** And now if I want to calculate the average or perform any aggregate function, to compute the statistics of this body_mass column of this body mass feature in the species, I can do that like this, body_mass_g, and then invoke the mean method, it will give you the average of that particular species.
>
> **[4:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=291)** Now we can also iterate over the species or the groups that we create.
>
> **[4:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=298)** So we run this by mistake.
>
> **[5:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=301)** So, yeah, let's say I want to basically get the specie and the group.
>
> **[5:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=308)** So here also, what I'm doing is I'm first printing the specie and then the shape of my group.
>
> **[5:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=318)** Run this, and you will see that you have the species over here on the left, and you have the particular shape on the right, which means that they have 152 rows and seven columns or seven features.
>
> **[5:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=331)** Again, similarly 68, 124, so on and so forth.
>
> **[5:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=335)** Now have want to compute some summary statistics on these groups.
>
> **[5:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=339)** Again, I can simply invoke the describe method, run it and I will get my summary statistics for each of those groups that we have on species.
>
> **[5:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=351)** Now I can compute different aggregates for different columns using the aggregate function.
>
> **[5:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=356)** So let's say for body_mass column, so this takes a dictionary as input, I provide the key, which is the column name, and then I provide the aggregate function that I want to perform.
>
> **[6:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=370)** For body_mass am performing average and then for flipper_length_millimeter.
>
> **[6:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=381)** For this, let's say we calculate the median.
>
> **[6:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=384)** Now if I run this, you see that for body_mass, I have the average and for flipper_length, I have the median for that particular column for each specie, again, add some filters on to these groups.
>
> **[6:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=397)** So let's say this is what I am printing the average of each specie, average of the body_mass column.
>
> **[6:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=404)** And now I can add some filter onto it.
>
> **[6:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=407)** So let's say I want to filter all the species with average body_mass created then some value, some threshold, let's say 3710 here.
>
> **[6:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=418)** So here, I'm going to use the filter function and add a Lambda function to it, where I am going to extract the body_mass column and invoke the mean method over it.
>
> **[7:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=435)** And the condition is basically the average should be greater than 3710.
>
> **[7:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=440)** So this is my condition inside my filter function.
>
> **[7:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=444)** So if I run this, now you see that first off, it has printed the average as for the for statement of code.
>
> **[7:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=451)** And then we have the filter data, which is basically data for only the species, which have average body_mass grater than 3710.
>
> **[7:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=462)** Pretty easy and intuitive as well.
>
> **[7:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=464)** So now we know how to use aggregate functions, create groups and apply transformations like aggregations and filtering operation on those groups.
>
> **[7:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/aggregation-and-grouping?u=76281980&t=474)** So go ahead and get some hands on practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** body_mass (9), body_mass_g (1), flipper_length_millimeter (1), flipper_length (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [tutor] (1)

#### [Querying and filtering data](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=0)** - [Instructor] The power of [[Python (Programming Language)|Python]] [[Data Science]] tech is built upon the ability of NumPy and [[Pandas (Software)|pandas]] to push basic operations into C via an intuitive syntax.
>
> **[0:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=10)** Now, pandas include tools that allow you to directly access C speed operations without costly allocation of intermediate arrays.
>
> **[0:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=20)** Now, these are the eval and the query functions.
>
> **[0:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=23)** And in this video we will walk you through the use case and give some rules of thumb about when you might want to use them.
>
> **[0:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=32)** Now, first off I have imported the libraries NumPy and pandas.
>
> **[0:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=37)** So once you have done that, here I am using this file called advertising.csv, which contains revenues for TV, radio and different other media.
>
> **[0:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=47)** So let's see what we have in the dataset.
>
> **[0:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=50)** So you see, we have four columns, TV, radio, newspaper and the total sales.
>
> **[0:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=55)** Now these are scaled down.
>
> **[0:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=57)** Basically the numbers are much bigger than these.
>
> **[0:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=59)** So these are the revenues for each day for a particular month.
>
> **[1:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=66)** Now, if I look at operating or calculating some simple arithmetic operations.
>
> **[1:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=73)** Then let's say, if I want to add the total revenue of all the three columns.
>
> **[1:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=78)** So what I can do is simply use result1, let's say, and I would add the revenue of all the columns.
>
> **[1:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=86)** So TV + df and you can say radio and add the revenue of newspaper column.
>
> **[1:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=94)** So df['Newspaper'].
>
> **[1:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=97)** So this would give me the result, basically the sum.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=101)** If we look at the head, so you see that we've got the values for this particular operation simple arithmetic addition operation.
>
> **[1:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=112)** Now using the evaluate keyword we can also evaluate expressions from string expressions to efficiently compute operations using data frames.
>
> **[2:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=124)** Now, how do we use the eval function?
>
> **[2:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=126)** So it's very simple.
>
> **[2:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=128)** Let's say we store the results of the eval operation in result2.
>
> **[2:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=132)** And what we need to do is simply call the eval method on the data frame.
>
> **[2:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=137)** And it's very simple.
>
> **[2:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=138)** It takes a string expression.
>
> **[2:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=140)** So let's say we want to add TV + radio.
>
> **[2:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=145)** So these are the column names that I am providing + newspaper.
>
> **[2:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=150)** And that is it.
>
> **[2:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=151)** It's as simple as that.
>
> **[2:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=153)** Now if we print result2, that would be same as result1.
>
> **[2:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=160)** And if we want to simply check if the values are actually same, we can use the allclose method from NumPy.
>
> **[2:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=169)** So basically the allclose method returns true if two arrays are element wise, equal within a tolerance.
>
> **[2:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=178)** So I provide result1 and I want to compare it with result2.
>
> **[3:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=184)** And let's say we have some NaN values.
>
> **[3:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=187)** So equal_nan.
>
> **[3:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=189)** So this is the parameter then I'm setting to true.
>
> **[3:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=192)** So I've got the result true which means that my result1 is equal to result2.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=199)** Now we can use eval to assign values to a new/existing column which means we can create new columns as well using the eval method like this.
>
> **[3:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=210)** So let's say I want to create a new total revenue column.
>
> **[3:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=215)** Let's call it total = TV + radio + newspaper.
>
> **[3:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=223)** And let's say inplace = True because we are adding a new column.
>
> **[3:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=229)** And let's say we look at the first few rows.
>
> **[3:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=235)** So we have the total column here, as you can see.
>
> **[3:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=237)** And this is as simple as that, and it is done with C speed.
>
> **[4:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=242)** So C language speed.
>
> **[4:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=244)** And we have seen the results of NumPy and pandas that they push those operations into C using this very simple syntax.
>
> **[4:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=256)** Now, another thing that we can use here is we can actually use local variables within these expressions.
>
> **[4:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=265)** So let's say I calculate the average TV revenue here in the first line, then and result1.
>
> **[4:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=270)** What I'm doing is I'm simply adding the TV column to the average revenue.
>
> **[4:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=274)** So that's what I'm doing here.
>
> **[4:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=276)** And if I wanted to do this using eval method I would simply do TV + @ And then I would refer to my local variable which is avg_tv_rev.
>
> **[4:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=292)** And if I check the results both of the results are actually similar.
>
> **[4:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=297)** And that's why you would want to use eval method rather than the simple arithmetic operations to calculate or evaluate such expressions.
>
> **[5:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=306)** The other important function is query function.
>
> **[5:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=308)** Now the data frame has another method based on the evaluated strengths which is called the query method.
>
> **[5:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=314)** And whenever you want to filter out data which is probably very common in data science projects.
>
> **[5:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=321)** So here is a very simple example of that.
>
> **[5:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=324)** Let's say, I call calculate the average TV revenue again and simply invoke the mean method on the TV column.
>
> **[5:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=336)** So that's my average TV revenue.
>
> **[5:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=338)** Now I want to query all the rules that have TV revenue greater than the average TV revenue.
>
> **[5:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=345)** So that would be my query.
>
> **[5:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=347)** Again, I have to pass the string expression.
>
> **[5:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=350)** So that is TV greater than the average.
>
> **[5:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=354)** So I'm referring to the local variable here, avg_tv_rev and that's all.
>
> **[6:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=361)** So I'll get all the rules which have TV revenue greater than the average TV revenue.
>
> **[6:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=367)** Now again, if we want to add composite or multiple conditions, we can do that as well.
>
> **[6:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=373)** So here I have calculated the average radio revenue as well.
>
> **[6:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=377)** And now what I'm going to do is I'm going to extract all the rules which have TV revenue greater than the average TV revenue.
>
> **[6:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=387)** And so this is the syntax and radio revenue, less than the average radio revenue.
>
> **[6:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=400)** We run this and you see the composite condition has also run successfully.
>
> **[6:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=405)** And we have got all the rules which have TV revenue greater than the average TV revenue and radio revenue less than the average radio venue.
>
> **[6:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=414)** So that was all about this video.
>
> **[6:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/querying-and-filtering-data?u=76281980&t=417)** We learned how to use eval function to evaluate expressions and how to use query method to query and filter out the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Data Science]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** avg_tv_rev (2), equal_nan (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **File Paths:** advertising.csv (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 3. Visualization with Matplotlib

[↑ Back to Table of Contents](#table-of-contents)

#### [General plotting tips](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=0)** - [Instructor] A crucial part of [[Data Science]] is data visualization, which makes it all worthwhile by plotting useful insights on different charts and in different formats.
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=9)** We're going to look at the Matplotlib library, which is a multi-platform data visualization tool built on NumPy.
>
> **[0:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=17)** It's one of the most common visualization tools out there.
>
> **[0:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=20)** And the reason why Matplotlib has become so common is its strength as a well-tested cross-platform graphics engine.
>
> **[0:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=29)** In this video, we're going to discuss a few general tips for using Matplotlib on how to set different stylesheets for plotting.
>
> **[0:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=36)** What are the methods to display plots in different contexts?
>
> **[0:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=39)** Like in a script, IPython shell, or IPython Notebook?
>
> **[0:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=44)** And lastly, we're going to look at how we can save a figure to a file.
>
> **[0:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=48)** So let's first look at the important conventions for Matplotlib.
>
> **[0:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=52)** So generally, we import Matplotlib as MPL, but most often you'll find yourself using the pyplot module of the Matplotlib library, which is abbreviated as plt over here.
>
> **[1:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=65)** And then you can set the context, which we'll talk about in a bit.
>
> **[1:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=69)** Then I am importing the NumPy library as np.
>
> **[1:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=73)** Let's run the cell, import all the required libraries.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=77)** Now next up, is setting different stylesheets.
>
> **[1:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=79)** So we can use the plt.style directive to choose an appropriate aesthetic styles for our figures.
>
> **[1:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=87)** So here we'll use the classic style.
>
> **[1:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=89)** So for that, all you need to do is set your style, plt.style.use method and specify the stylesheet.
>
> **[1:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=99)** So let's say classic over here.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=101)** Now, let's create some random values.
>
> **[1:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=104)** X = np.random, using the rand and function.
>
> **[1:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=110)** And let's say we create 1000 values over here.
>
> **[1:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=113)** And if I plot a histogram for X, so this is the classic stylesheet where I'm plotting some random values and a histogram.
>
> **[2:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=124)** Great. Now, if I want to plot this data in a different stylesheet, all I need to do is specify the stylesheet again, plt.style.use and let's mention seaborn-pastel over here.
>
> **[2:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=138)** And again we'll have to plt, call the plot function, plt.hist and plotting a histogram. So pass X.
>
> **[2:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=149)** So this is again the histogram in a seaborn-pastel stylesheet.
>
> **[2:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=154)** Now, you'll be wondering what all stylesheets are available.
>
> **[2:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=157)** So you can check that out using plt.styles.available.
>
> **[2:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=165)** All right. So use style.
>
> **[2:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=169)** Yeah. So this will list down all the stylesheets that are available in the library.
>
> **[2:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=175)** Okay. So next up we have plotting graphs in different contexts.
>
> **[3:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=180)** So first off, whenever you are plotting, you would be working either through a script, or through an IPython shell, or through an IPython Notebook.
>
> **[3:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=191)** So here we are going to talk about IPython Notebook, but if you're plotting through a script, you have to use plt.show.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=199)** If you are plotting through an IPython shell, you have to use simply plotting this matplotlib.
>
> **[3:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=205)** And if we are using an IPython Notebook, then we'll have to either use the inline context or the notebook context.
>
> **[3:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=212)** So let's first look at the notebook context, which is used for plotting interactive charts.
>
> **[3:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=218)** So let's look at that.
>
> **[3:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=219)** So again, it is denoted by the plot and the sign.
>
> **[3:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=223)** So plotting this matplotlib, and then specify the context.
>
> **[3:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=228)** So here we are using notebook and I've defined some random data, linearly spaced values, 100 values between one and 30.
>
> **[3:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=236)** And then let's provide the values.
>
> **[3:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=239)** X let's call the sign function, np.sin and then plus X.
>
> **[4:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=247)** So these are my X and Y values.
>
> **[4:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=249)** Let's run this. So here I have the sign function plotted for me.
>
> **[4:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=256)** And as you can see, this is all interactive.
>
> **[4:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=259)** As I move my [[Cursor]] along the chart, you see the X and Y values changing, and then I have different methods.
>
> **[4:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=265)** So this is for downloading the figure, this is for zooming, this is for panning axes on left mouse, even on [[Zoom]] with right.
>
> **[4:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=273)** So all of those things are available for us.
>
> **[4:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=275)** Now, if we look at the inline context, so again, simply pass plotting this matplotlib and specify the context again, plotting the inline chart.
>
> **[4:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=288)** So this is generally for static plots.
>
> **[4:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=292)** So this is how our plot looks like in inline context.
>
> **[4:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=296)** Great. Now the last part is saving the figure to a file.
>
> **[5:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=301)** Now, most often you'll find yourself using a file in our report chart.
>
> **[5:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=305)** So you'll have to download all those files.
>
> **[5:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=308)** So you can do that using the save figure method.
>
> **[5:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=311)** So here we are plotting the same X that we have defined above.
>
> **[5:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=315)** So let's call the cost function first, np.cos X and let's denote it by a single solid line.
>
> **[5:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=323)** And then let's also plot sign function.
>
> **[5:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=329)** Pass X and let's denote it by a double dash.
>
> **[5:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=333)** And to save this figure, we have initialized the figure above using the figure method and you will have to use the save figure function and pass the part where you want to save the file.
>
> **[5:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=347)** So let's call the file sinecos.png in PNG format when I run the cell.
>
> **[5:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=355)** So this is the plot that I have.
>
> **[5:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=357)** Now the figure is saved, and you can look it up here as I have the sinecos.png saved in my directory.
>
> **[6:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=365)** So we saw how we can use different stylesheets.
>
> **[6:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=368)** What are the important conventions?
>
> **[6:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=370)** Then we looked at what are the different contexts that we can use, and lastly, how we can save the file.
>
> **[6:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/general-plotting-tips?u=76281980&t=377)** So do check out all of the methods although they're stylesheets, and get some hands-on practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Zoom]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** mpl (1), png (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding text and annotations](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=0)** - [Instructor] Good visualizations guide the readers to get the complete story that the data has to tell.
>
> **[0:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=6)** Now, to create guided plots using matplotlib we can add labels to the plot.
>
> **[0:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=12)** The basic types of annotations you will use are access labels and titles, but we have more options to make the plots more informative.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=19)** So in this video, I'll walk you through methods of adding text highlights, annotating plots, and adding arrows to point to a specific location in a plot.
>
> **[0:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=28)** So, first off we are importing the required libraries matplotlib, [[Pandas (Software)|pandas]], NumPy.
>
> **[0:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=34)** And for this video, we are going to be using the advertising.csv file that we have, which contains the revenue for all the media sources, TV, radio, newspaper.
>
> **[0:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=44)** Let's look at the average revenue that we have from each one of them.
>
> **[0:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=50)** So, all of these values are in a hundred thousand.
>
> **[0:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=53)** TV has been 49.79 radio has 23.09, and then newspaper has turned 29.64.
>
> **[1:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=60)** So let's go ahead and plot these averages on a bar chart.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=64)** So first I have initialized the plot figure providing the size using the fixed size attribute and then to calculate the revenue mean we have to create a list.
>
> **[1:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=73)** So use the same mean method.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=77)** And we are going to skip the last column which is the sales Column, we not interested in that.
>
> **[1:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=82)** Then we're going to extract all the column names, all the media sources names.
>
> **[1:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=85)** So for this, this is simple, Simply pass the data frame to the list and it'll get you the quiet column names.
>
> **[1:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=93)** And we're going to skip the last one.
>
> **[1:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=95)** So here we are going to plot the bar chart.
>
> **[1:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=98)** So the bar chart contains the mode.
>
> **[1:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=100)** We have calculated the column names on x axis and revenue, mean, average for each one of them.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=106)** And color is orange for each of the bar chart.
>
> **[1:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=110)** Now we are adding some title and labels.
>
> **[1:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=112)** Title of the plot as revenue generation from media sources, X label is medium and then revenue on the Y axis.
>
> **[2:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=120)** Now in order to add average.
>
> **[2:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=123)** So the text for the revenue, average revenue for each of those media sources we are going to use the plt.text method.
>
> **[2:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=132)** Now I have created a loop.
>
> **[2:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=134)** The loop is basically to annotate each of the bar with the respective average mean.
>
> **[2:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=139)** So the plt.text method, it takes the x and y coordinates for where you want to place your text.
>
> **[2:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=146)** So we want to place, so first you have to define your x axis, the x coordinate and that would be our x axis plus the weight of the bar divided by two, so that it is at the middle of the bar.
>
> **[2:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=163)** And we want to place the text on top of the bar.
>
> **[2:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=166)** So that would be, get_height of the bar.
>
> **[2:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=170)** So it would place it on top.
>
> **[2:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=173)** And we want only two decimal places and the floating bar number.
>
> **[2:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=176)** So that is that these denoting the revenue for that particular bar for that particular media source.
>
> **[3:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=182)** Then horizontal alignment is center and vertical alignment is bottom.
>
> **[3:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=186)** And when we run this, so we get this plot with the average revenue for each of the media sources placed on top of their respective bars.
>
> **[3:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=195)** This is how you can add text using the text method from the plot object.
>
> **[3:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=200)** Now we can use the access.text method to add text and specify let's say in a time series you can specify the month or the day.
>
> **[3:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=210)** So here we are plotting the average or not the TV revenue data for every five days.
>
> **[3:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=218)** So the slicing method here five States that we had are plotting for every five days and then we are passing the plot method, the access that we have initialized on top.
>
> **[3:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=229)** Now to plot the text or to annotate the plot.
>
> **[3:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=232)** The texts that we have to use would be having some formatting styles.
>
> **[3:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=238)** So here we have defined the style or the size to be 10 and color of the text to be black.
>
> **[4:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=246)** So this is the style that would controls the text formatting.
>
> **[4:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=250)** And we'll have to add this dictionary to the access.text method.
>
> **[4:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=256)** So I'm creating the labels over here.
>
> **[4:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=259)** So for 30 on the x axis, basically for 30th day, I would be the marking it as month one for 60th day, I would be marking it as month two, 50 is basically telling us that we want where do we want the text to be placed on the plot So that is the y coordinate.
>
> **[4:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=277)** And then 90 is month three, so on and so forth, you can keep adding labels.
>
> **[4:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=282)** Then I'll add horizontal alignment for the last two.
>
> **[4:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=286)** Horizontal alignment is center.
>
> **[4:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=288)** And when we plot this, you can see that month one, month two and month three have been added onto the plot as per the values, the x and y by values that we have specified in the access.text method.
>
> **[5:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=303)** You can go on and keep creating these annotations for your plots to make them more informative.
>
> **[5:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=310)** Now, the last thing is we can also add arrows to specify to a particular location on the plot.
>
> **[5:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=317)** So again, initialize the plot, create some random values.
>
> **[5:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=320)** I have created thousand values, In the range zero to 20.
>
> **[5:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=323)** All of these are linearly spaced.
>
> **[5:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=326)** And I'm creating a plot for the sine function.
>
> **[5:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=329)** So simply calling the plot method with the sine function and x axis, I want the axis to be equal.
>
> **[5:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=335)** Now in order to add arrows for the local minimum and the four local maximum on the sine plot, I'll have to define the x and y coordinates.
>
> **[5:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=345)** And I am using the access.annotate method.
>
> **[5:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=349)** Which provides us with various options to plot and annotate the plots flexibly.
>
> **[5:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=355)** And we do have some functions as well.
>
> **[5:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=358)** So we have an arrow function, but that creates an SVG object and we have to deal with many other issues there.
>
> **[6:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=364)** So we'll be using the annotate method.
>
> **[6:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=367)** So x and y coordinates, So we have 1.71 for local maximum and the value would be one for sine function.
>
> **[6:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=375)** x, y takes, where do we want to place the text 10,4 for would be the coordinator for that.
>
> **[6:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=381)** Then facecolor, we can define the color of our arrow.
>
> **[6:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=386)** Let's say black.
>
> **[6:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=388)** And the shrink size is let's say 0.05.
>
> **[6:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=393)** And this will plot the arrow for us.
>
> **[6:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=395)** now for local minimum, I have a different kind of arrow head.
>
> **[6:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=400)** So again, providing the X and Y coordinates for a local minimum, then the text coordinates and the arrowprops dictionary, basically governs What the style of that arrow is going to be.
>
> **[6:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=413)** so Arrowstyle, facecolor, shrink size, and then we have connection style.
>
> **[6:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=418)** If you want to provide some curve to your arrow.
>
> **[7:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=421)** So you can do that.
>
> **[7:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=422)** And all of these options are actually well documented in the matplotlib documentation.
>
> **[7:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=427)** So if we run this, you'll see we will have two different kinds of arrow.
>
> **[7:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=431)** So for local maximum which is facecolor black and shrink size 0.05 that is how we are plotting those arrows and local minimum, this is containing the connectionstyle that we have provided with angle B equals minus 90.
>
> **[7:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=446)** So that style is basically adding that curve.
>
> **[7:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=449)** Now, there are a bunch of other ways a bunch of other methods and styles that you can use.
>
> **[7:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=454)** So go ahead and get some practice.
>
> **[7:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=456)** And we have learned how to add text highlights how to add arrows on the plots and how we can add text to a particular plot to specify the month in a time series or day in a time series.
>
> **[7:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/adding-text-and-annotations?u=76281980&t=470)** So that was all about this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Versions:** 0.05 (2), 49.79 (1), 23.09 (1), 29.64 (1), 1.71 (1)
> **CLI Commands:** make (2)
> **File Paths:** advertising.csv (1)
> **Code Identifiers:** get_height (1)
> **Env Vars:** svg (1)
> **Speakers:** - [instructor] (1)

#### [Multiple subplots](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=0)** - [Instructor] Sometimes it is helpful to compare different plots of data side by side.
>
> **[0:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=4)** To avail this Matplotlib has the concept of subplots, that is, grouping of smaller axes that can exist together within a single figure.
>
> **[0:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=13)** These subplots might be in sets or grids of plots or other complicated layouts.
>
> **[0:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=20)** So in this video, we'll explore different methods of creating subplots using matplotlib.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=25)** So first off, we have imported the matplotlib and numpy libraries.
>
> **[0:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=29)** And then we're going to look at very simple method of creating a subplot using the axes method.
>
> **[0:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=34)** So we're going to simply create an inset axes inside another axes.
>
> **[0:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=39)** So, first off I have the axis one, which is a simple axis.
>
> **[0:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=43)** Now I'm going to specify another axes inside the axes one by specifying the X and Y coordinates 0.65, 0.65 then 0.2 and 0.2.
>
> **[0:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=56)** So all these values.
>
> **[0:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=58)** So this is creating an inset at the top right corner of axes one by setting the X and Y positions to 0.65, that is starting at 65% of the width and 65% of the height of the figure.
>
> **[1:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=74)** And then X and Y extends to 0.2, that is the size of the axes is 20% of the width and 20% of the height of the figure.
>
> **[1:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=85)** So if you run this, we get an inset on the top right corner of axis one.
>
> **[1:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=90)** So that's how we can create a simple subplot.
>
> **[1:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=93)** Another way of creating a subplot is add_axes method.
>
> **[1:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=97)** So first off we have initialized our figure using the figure method.
>
> **[1:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=101)** Then the figure method has this method called add_axes method.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=106)** Now, here we are creating a vertically stacked plot.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=109)** So the calling signature of add_axes method is that it takes a rectangle.
>
> **[1:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=114)** Now this rectangle is basically a list that we have here, which contains X-coordinate, Y-coordinate, width and height, which is denoting the lower left point on the new axes, in the figure coordinates and its height and its width.
>
> **[2:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=130)** So the axes is positioned in absolute coordinates on the canvas.
>
> **[2:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=133)** So let's say if I define, I start from 0.1 then 0.5, which is the upper plot that I'm defining.
>
> **[2:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=143)** Then 0.8 and let's say 0.4.
>
> **[2:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=147)** These are the coordinates of our rectangle.
>
> **[2:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=149)** Then for axis two, let's say the X-coordinate would remain the same, then for Y let's say, this is the lower plot, so let's bring it down to 0.1 and width and height should remain the same.
>
> **[2:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=162)** So that is how we're going to plot it.
>
> **[2:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=165)** Now I'm creating some random linearly spaced values, ranging from zero to 30 and axes one plotting, let's say cos and sine function.
>
> **[2:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=175)** So, np.cos(x) and similarly you can pass np.sine(x).
>
> **[3:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=186)** Run it.
>
> **[3:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=188)** So we've got the vertically stack plot over here.
>
> **[3:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=191)** The upper plot is basically the cos function and the lower part is the sine function.
>
> **[3:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=197)** And you can see the values that we have defined.
>
> **[3:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=200)** It is all complying with those X and Y and width and height of the plot.
>
> **[3:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=206)** Great.
>
> **[3:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=206)** Now the next thing is creating subplots.
>
> **[3:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=209)** We have aligned columns or rows of subplots, which is used quite often.
>
> **[3:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=214)** matplotlib has several convenience routines that make them easy to create.
>
> **[3:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=219)** So the lowest level of these routines is plt.subplot method, which creates a single subplot within a grid.
>
> **[3:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=227)** So here a very simple method is, returns the figure in axes.
>
> **[3:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=231)** So we are going to use the subplot method here.
>
> **[3:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=235)** Now the subplot takes the number of rows and columns that we want to create.
>
> **[3:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=238)** Let's say I want to create three rows of four figures, so four columns, and you can define if you want to share the X-axis or not.
>
> **[4:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=247)** So sharex is the attribute.
>
> **[4:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=250)** Let's say I want to share the axes with columns, each column, and share, let's say, Y-axis with each row.
>
> **[4:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=259)** So you can provide those parameters around it.
>
> **[4:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=262)** And it will create three rows of four plots and it takes a few seconds, so yeah.
>
> **[4:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=268)** As you can see, we have got three rows of four plots each, and the axes are shared along columns and axes and rows.
>
> **[4:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=279)** So here, we have the X-axes.
>
> **[4:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=282)** So I've created a simple plot, just to demonstrate how this would look like in a general real-life scenario.
>
> **[4:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=290)** So I'm creating a sine plot.
>
> **[4:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=292)** Once that is done, I'm again, simply creating a figure, simple subplot and setting the title, plotting X and Y values.
>
> **[5:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=302)** So this is my simple sine plot.
>
> **[5:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=304)** Now, if I want to create two plots side by side, so again, I can unpack the output array, so this would create two axes for me.
>
> **[5:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=313)** So let's say I consume the first one as axis one, and then axis two, unpacking them in this particular manner.
>
> **[5:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=321)** So this would be, I have provided one row and two columns to the subplots method and I'm sharing the Y-axis.
>
> **[5:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=329)** So I've shared Y equals True, plotting the X and Y that I've calculated above and in the right, which is the axes two, I am plotting a scatter plot.
>
> **[5:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=339)** So if I run this, I have two plot side-by-side, two views of the same plot.
>
> **[5:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=346)** And I have scatter plot on the right, and I have shared the Y-axis.
>
> **[5:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=351)** So this is how you can use the subplot.
>
> **[5:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=353)** Now there are different combinations that you can use.
>
> **[5:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=356)** We can create a polar axes like this.
>
> **[5:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=359)** So here I am unpacking, I'm not unpacking, I'm simply consuming it in the axes function, axs variable that I've created over here.
>
> **[6:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=368)** And the subplot is basically having two cross two.
>
> **[6:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=372)** So two rows of two plots each I'm providing the polar axes or subplot_kw.
>
> **[6:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=378)** So I'm setting the dictionary parameter polar to True.
>
> **[6:21](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=381)** So this would create polar axes for me, and I can manipulate each of those graphs using indexing.
>
> **[6:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=387)** So I am plotting the X and Y values in the top left and the bottom right plots.
>
> **[6:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=393)** So if I run this, you'll see the sine plot in the top left and the bottom right, which you can see, I used indexing to manipulate and access those graphs.
>
> **[6:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=405)** Zero comma zero is the top left and one comma one is the bottom right.
>
> **[6:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=409)** Accordingly, you can manipulate each one of these charts.
>
> **[6:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=413)** Now we have some other combinations.
>
> **[6:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=416)** So based on how you want to share the axes.
>
> **[6:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=419)** So if you want to share X, you can say column, this would create a two cross two grid for you.
>
> **[7:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=426)** And similarly for Y-axis, you can say column, so share the Y-axis for each row.
>
> **[7:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=433)** And this would share the Y-axis with each row of the subplots.
>
> **[7:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=439)** If you want to share the Y and X-axis for all the plots, you can do that as well, specify all, and this will be sharing X and Y both to all the axes, like this.
>
> **[7:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=452)** That was great.
>
> **[7:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=453)** So that was all about subplots.
>
> **[7:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=455)** We saw how we can create an inset graph, how we can create a vertically stacked plot, how we can create subplots using the subplots routine.
>
> **[7:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=463)** And this is how you can create different combinations of layouts.
>
> **[7:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/multiple-subplots?u=76281980&t=467)** So go ahead and get some hands on practice with each one of these layouts.

> [!info]- Semantic Content
>
> **Versions:** 0.65 (3), 0.2 (3), 0.1 (2), 0.5 (1), 0.8 (1)
> **Code Identifiers:** add_axes (3), subplot_kw (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Machine Learning Tips

[↑ Back to Table of Contents](#table-of-contents)

#### [sklearn Estimator API](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=0)** - The primary means for the manifestation of [[Data Science]] is machine learning.
>
> **[0:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=5)** In this video, I'll give you a brief refresher on machine learning vocabulary, what are the basic steps to solve a particular machine learning problem, and how we can use the scikit learn estimator API to perform all those tasks.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=19)** So first let's go through the basics of machine learning.
>
> **[0:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=22)** So there are basically two basic types of machine learning.
>
> **[0:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=27)** And the first one is supervised machine learning problems, where we develop models that can predict labels after learning from a labeled dataset.
>
> **[0:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=37)** Whereas the second type is unsupervised, where we develop models that identify the structure in unlabeled data set.
>
> **[0:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=46)** So we have two types of [[Supervised Learning]] problems.
>
> **[0:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=49)** First one is classification where we are solving problems that require predicting labels as two or more discrete categories.
>
> **[0:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=58)** Whereas the other kind of problem is regression problems where we are required to predict continuous labels.
>
> **[1:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=67)** Now, we also have two types of unsupervised learning problems, which include clustering, where we develop models that detect an identified distinct groups in the data.
>
> **[1:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=78)** And the other type of problem is dimensionality reduction, where we develop models that detect and identify lower dimensional structure and higher dimensional data.
>
> **[1:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=90)** So the scikit-learn library is basically developed on certain design principles and these include consistency inspection nonproliferation of classes, composition and sensible defaults for each of the estimator API and methods.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=109)** Now the general flow for solving a typical machine learning problem is basically you have to first collect data for [[Data Collection]].
>
> **[1:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=118)** Then you have to prepare that data for model training.
>
> **[2:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=121)** Then you select and train a few models, and at the end, you predict and evaluate each of the model to see which one is the best.
>
> **[2:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=130)** So we're going to look at each of these tasks here.
>
> **[2:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=133)** So first we are collecting the data from the C one package.
>
> **[2:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=136)** So we are using the penguins data here.
>
> **[2:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=139)** I have loaded the data in penguins variable.
>
> **[2:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=142)** So let's first drop all the na values, using the dropna method.
>
> **[2:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=147)** Let's look at a few rules penguines.head.
>
> **[2:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=153)** So this will give us all the information that this data frame contains.
>
> **[2:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=156)** We have species column, Island, length of Culmen , flipper, body mass, and sex.
>
> **[2:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=162)** So here, the feature matrix is basically the penguins information that includes Island culmen length, and body mass, and all of those things.
>
> **[2:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=172)** Then the target variable here for this machine learning problem is the species column.
>
> **[2:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=178)** So this is going to be a classification problem.
>
> **[3:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=181)** Where we'll have to classify a penguin based on the information into a particular species.
>
> **[3:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=187)** So first let's create a pair plot to learn about the correlation between variables, so we can use sns.pairplot method, pass the penguins data frame and we can set some parameters like hue, let's give it species and height equals let's say 2.5 And here, with this pair plot, we'll be able to figure out the correlation between different variables.
>
> **[3:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=216)** So as we can see, we have flipper length, culmen length, culmen depth, body mass, and accordingly we can see that the body mass and flipper length have a positive correlation, or we can see that the culmen length and flipper length also have kind of a positive relationship, positive correlation, great.
>
> **[3:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=238)** Now next step is basically [[Data Preparation]], where we try to segregate features and target variables from the data set.
>
> **[4:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=245)** So what we are doing is we are simply dropping all the categorical variables, which is sex and Island and species is our target variable.
>
> **[4:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=254)** So we'll drop that as well from the dataset and the x_peng variable would contain simply our feature data and the target variable we are storing it in the y_peng variable.
>
> **[4:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=267)** So that is all about data preparation for this particular problem.
>
> **[4:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=272)** Now, the next step is we have to split the data for training and testing.
>
> **[4:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=276)** So accordingly, we are going to use the train_test_split function from the scikit learn model selection module.
>
> **[4:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=284)** Now we'll call the function train_test_split.
>
> **[4:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=291)** Now we'll have to pass the feature matrix that we have created, peng x_peng and the label, which is y_peng.
>
> **[5:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=300)** And we define the test size, which is typically 20%, 0.2.
>
> **[5:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=308)** And we can also mention the random state, which would be let's keep it any arbitrary value.
>
> **[5:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=317)** So let's keep it one.
>
> **[5:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=319)** And if we look at x_train.head, we can also look at that.
>
> **[5:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=324)** So basically this train_test_split function gives us x_train, x_test, that is training features and testing features and y_peng and y_test, which is training labels and testing labels.
>
> **[5:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=340)** So accordingly now that our data is all prepared and split now is the time to select and train a particular model.
>
> **[5:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=347)** So we have picked decision tree classifier.
>
> **[5:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=351)** There are basically three steps.
>
> **[5:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=352)** You have to choose a model class, you have to instantiate a model, and then you have to fit the model to the data.
>
> **[5:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=359)** we have already chosen the model which is decision tree classifier, let's instantiate the class or the model.
>
> **[6:07](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=367)** So the decision tree classifier and we haven't instantiated it.
>
> **[6:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=375)** And now let's call the fit method to fit the data.
>
> **[6:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=378)** All right, model.fit, pass x_train you're training feature and training labeled y_train around the cell and model is now ready.
>
> **[6:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=391)** So we can now move to the next step, which is prediction and evaluation.
>
> **[6:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=395)** So here we'll try to predict moldel.predict and pass the testing features x_test, and let's look at the predictions.
>
> **[6:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=407)** So these are the predictions made by the model, the classifier.
>
> **[6:50](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=410)** So these are all the x_test and accordingly the model has predicted the species.
>
> **[6:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=416)** So we can also check how accurate our model is, so we'll basically try to evaluate this model using accuracy score, which is from the scikit learn metrics model.
>
> **[7:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=428)** And it's very simple to use.
>
> **[7:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=430)** You can simply do accuracy_score and pass y_test.
>
> **[7:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=436)** That is the predictions that are the original values.
>
> **[7:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=440)** And the predictions is basically the second argument.
>
> **[7:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=444)** y_pred comes next.
>
> **[7:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=445)** And if we look at the accuracy score, this is 95.52%.
>
> **[7:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=452)** Now we do this for a couple of models until we get the best results.
>
> **[7:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=457)** So that concludes this video, where we have learned basics of machine learning.
>
> **[7:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=463)** We looked at the basic tasks and how we can use scikit learn library.
>
> **[7:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/sklearn-estimator-api?u=76281980&t=467)** So go ahead and get some hands on practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (2), [[Data Science]] (1), [[Supervised Learning]] (1), [[Data Collection]] (1)
> **Code Identifiers:** y_peng (3), train_test_split (3), x_train (3), x_test (3), x_peng (2)
> **Versions:** 2.5 (1), 0.2 (1), 95.52 (1)
> **Env Vars:** api (2)
> **Prerequisites:** required to (1)
> **Speakers:** - the (1)

#### [Model validation and hyperparameter tuning](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=0)** - [Instructor] For our machine learning model to make an informed decision, we need a way to validate data model and the set of hyperparameters are a good fit for the data.
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=9)** So this may sound very simple, but there are a few pitfalls that we must avoid.
>
> **[0:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=14)** So to demonstrate this, we are going to look at the load Iris data set and a few models to validate using different methods.
>
> **[0:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=23)** So, I've got the load Iris data set.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=25)** So this is a classic plant data set, which is a very easy multi-class classification problem.
>
> **[0:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=31)** And we've got a few features.
>
> **[0:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=33)** So, let's store the features in X using the data attribute and store the labels in Y using the target attribute.
>
> **[0:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=41)** And if you want to look at the shape of the data, so it contains 150 rows and four columns.
>
> **[0:47](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=47)** If you want to learn more about the data set, you can use the describe attribute and it will give you all the information about the plant data set, the Iris data set from the sacred land library.
>
> **[0:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=59)** Now, we're creating a KNN classifier to predict the flower species.
>
> **[1:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=64)** So here we have defined or instantiated the model by passing number of numbers equals one.
>
> **[1:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=71)** Now we are training the model using the fit method by providing the data set X and Y, the features and the labels.
>
> **[1:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=77)** And then we're going to predict the results by passing the feature sets.
>
> **[1:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=80)** So, storing the results and storing the predictions in Y_pred variable.
>
> **[1:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=87)** Now to calculate the accuracy score, we'll pass Y and the prediction the actual labels and the predicted labels.
>
> **[1:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=94)** So, we have got an accuracy score of 1.0.
>
> **[1:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=98)** And which indicates that 100% of the points were correctly labeled by our model.
>
> **[1:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=103)** So, have we really come upon a model that we expect to be 100% correct all of the time.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=109)** As of now, there does not exist a perfect model.
>
> **[1:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=113)** So, the problem here is that this approach contains a fundamental flaw.
>
> **[1:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=118)** It trains and evaluates the model on the same data.
>
> **[2:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=122)** Now to address this, we're going to carry out validation using a holdout set.
>
> **[2:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=126)** So we are going to split the data into training and testing set by reserving 50% of the data for testing.
>
> **[2:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=134)** So first of all, we are training the model by passing the training set, which is X train and Y train.
>
> **[2:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=139)** And we're going to predict using X_test.
>
> **[2:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=143)** So we'll be evaluating the model on unseen testing set.
>
> **[2:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=147)** To calculate the accuracy scores, we'll compare Y_test with the predictions which is Y_pred.
>
> **[2:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=155)** So here we have got an accuracy score of 19.66%.
>
> **[2:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=159)** But one disadvantage of using a holdout set for model validation is that we have lost a portion of our data to model training.
>
> **[2:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=169)** And we could only train the model on 50% of the data set.
>
> **[2:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=173)** So to address this, we have cross validation.
>
> **[2:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=176)** So here, what we'll do is we will train the model both on training as well as on testing set.
>
> **[3:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=182)** So we'll create two subsets of data.
>
> **[3:05](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=185)** So to show this graphically, we will have two trials and two subsets of data.
>
> **[3:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=189)** First subset in the first trial would be treated as training set, and the second subset would be treated as validation set.
>
> **[3:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=196)** For trial two, we will create the first subset as the validation set and the second subset as the training set.
>
> **[3:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=204)** So here, in the first line, we are going to train the model on training set, and then predict the result for X test.
>
> **[3:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=212)** And in the second line, what we're going to do is we're going to train the model on testing set, and we're going to predict the result for training features.
>
> **[3:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=220)** So here we'll have two scores, because we are training the model twice.
>
> **[3:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=224)** So the two scores would be, first of all, pass Y_train, and Y_training predictions.
>
> **[3:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=233)** And then we'll have Y_test and Y_test_pred.
>
> **[4:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=240)** So these are the two scores.
>
> **[4:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=241)** And calculating the mean of these two scores would give us the final model accuracy score.
>
> **[4:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=248)** Now to expand on this idea, we could create more number of trials and more number of folds.
>
> **[4:14](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=254)** So, if we want to split the data into five groups, we can use each one of them in turn to evaluate the model fit on the other four upon five of the data.
>
> **[4:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=266)** So here, we have split the data into five subsets.
>
> **[4:29](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=269)** Now in each trial, we are using four subsets of the data for training purposes.
>
> **[4:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=274)** And we're using one subset for validation purposes.
>
> **[4:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=278)** And we have total number of five trials, which is equal to the number of folds that we want to create.
>
> **[4:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=284)** So to do this by hand, it would be a lot tedious.
>
> **[4:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=288)** So, we have the Cross Val score function from scikit-learn model selection module, which takes the model that you want to test and you would have to pass the data which is X and Y for us.
>
> **[5:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=300)** And we are creating 10 fold cross validation by passing CV as Cross Val, cross validation, and we are setting it to 10.
>
> **[5:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=309)** So we'll get 10 scores each for each trial.
>
> **[5:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=312)** And calculating the mean of all these scores would give us the final accuracy score of the model, which has turned out to be 0.96.
>
> **[5:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=322)** Now next up, we have hyperparameter tuning with GridSearchCV.
>
> **[5:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=326)** So, if you look at the same problem, if we had to optimize our model, for example, a decision tree classifier model, which takes a range of parameters as input, it would be a long monotonous routine to check the (indistinct) results for each configuration of hyperparameters.
>
> **[5:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=342)** But GridSearchCV has got our back as it provides ways to run the model for each permutation of the hyperparameters configuration.
>
> **[5:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=352)** So it performs exhaustive search over specified parameter values for an estimator.
>
> **[5:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=357)** So here we have defined the parameter values that we want to test.
>
> **[6:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=360)** So we have set criteria, minimum sample, max depth range, min samples leaf, minimum leaf nodes.
>
> **[6:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=368)** And it takes the parameter grid, which we have defined here.
>
> **[6:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=371)** So, the parameter grid takes criterion, minimum samples, split max depth, minimum sample leaf, max leaf nodes, and we have set the range as we have defined above.
>
> **[6:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=382)** So, let's run these.
>
> **[6:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=385)** So here, we'll have to set the grid.
>
> **[6:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=388)** So, let's set the estimator first.
>
> **[6:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=391)** This is decision tree classifier.
>
> **[6:39](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=399)** And the parameter grid is as defined above, param_ grid.
>
> **[6:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=405)** Now the Cross Val, so let's test it for five fold and the scoring method would be accuracy.
>
> **[6:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=413)** So let's run this.
>
> **[6:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=414)** Our model is defined.
>
> **[6:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=415)** Now we'll have to train it.
>
> **[6:57](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=417)** So, let's pass the data.
>
> **[6:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=419)** So features, I restored data and labels, which is iris.target.
>
> **[7:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=426)** And now in order to get the best parameters and the best score, we can use the attribute best_score_.
>
> **[7:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=436)** This would give us the best score and the best parameter attribute which is best_params_.
>
> **[7:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=442)** So this would give us the best score as well as the best parameters for the decision tree classifier to get the results for our Iris data set.
>
> **[7:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=451)** So we learn the smarter ways to validate models using cross validation and how to optimize model performance using GridSearchCV.
>
> **[7:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/model-validation-and-hyperparameter-tuning?u=76281980&t=460)** Now it's time for you to try these out on a real data set.

> [!info]- Semantic Content
>
> **Versions:** 1.0 (1), 19.66 (1), 0.96 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** knn (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=0)** - [Instructor] So up until now, we have seen data that was tidy and cleaned out for us.
>
> **[0:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=4)** But in the real world, data is rarely clean and correctly formatted.
>
> **[0:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=8)** So with this in mind, one of the more important steps in practicing machine learning is [[Feature Engineering]], and here in this video we'll cover a few commonly occurring data types, and we'll talk about what are the methods to transform each of those types.
>
> **[0:24](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=24)** So first of all, we have numerical features.
>
> **[0:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=27)** Our numerical data is the easiest to work with and it's ready to be fed to the model for training.
>
> **[0:33](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=33)** So feature engineering here mostly means that we are dealing with missing values or we want to derive new features out of the existing ones.
>
> **[0:41](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=41)** For example, I have two arrays over here, two features.
>
> **[0:45](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=45)** Distance and time.
>
> **[0:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=46)** Both of them are numpy arrays.
>
> **[0:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=49)** Now we can actually create a new feature.
>
> **[0:51](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=51)** Let's say we want to create speed.
>
> **[0:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=53)** Now this would be very simple.
>
> **[0:55](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=55)** We could actually divide distance by time, and if you look at speed, this would be a new feature, that would be created for us, using these existing features, distance and time.
>
> **[1:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=68)** Our next step, we have textual data, so, one of the common requirements of feature engineering here, is to convert text to a set of representative values, which further relies on some form of encoding the text to numbers.
>
> **[1:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=83)** Now, one of the simplest methods of encoding is [[Microsoft Word|word]] count.
>
> **[1:28](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=88)** We take a snippet of text and we count the occurrences of each word within it and we record it in a table, and we're going to use the CountVectorizer class here.
>
> **[1:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=98)** For this, we have defined some random text, three sentences, and a [[Python (Programming Language)|Python]] list called text.
>
> **[1:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=106)** So, first off we instantiate the class... (keys clicking) CountVectorizer, from the feature extraction module, in the psychic learn package.
>
> **[1:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=118)** Next up, we are going to transform the features, basically the textural data that we have, using the object that we have defined above.
>
> **[2:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=126)** So, we're going to invoke the method called, fit_transform, pass the text through it, and if we look at x, this is a sparse matrix that basically the fit transform method has returned, and we can actually look at what the data contains by using the two array method, which would convert it into a 2D array.
>
> **[2:27](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=147)** And we can actually create a data frame for the textual data that we have.
>
> **[2:32](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=152)** So, the data should be x.toarray.
>
> **[2:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=156)** So this would be the 2D array.
>
> **[2:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=158)** and we can actually extract the feature names which would be the words.
>
> **[2:43](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=163)** So, here columns equals... Vic... dot get underscore feature names.
>
> **[2:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=172)** So this is the method to extract all the feature names which will be set as column names.
>
> **[2:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=179)** So let's make it capital X.
>
> **[3:02](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=182)** So as you can see, we have the data frame and each word here has been converted into a column and it contains the number of times it has occurred in a sentence.
>
> **[3:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=193)** So that's how we can transform textual data.
>
> **[3:16](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=196)** Coming to the last type, which is categorical data.
>
> **[3:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=199)** Now, this is a common non-numerical data type.
>
> **[3:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=202)** For example, if we are trying to analyze sales, here in this particular example, on a particular day of the week, so we have a feature called day, which we might think of in coding this as one to seven, but the psychic learn package model, make this fundamental assumption, that numerical features reflect algebraic quantities.
>
> **[3:46](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=226)** So, we use the proven technique instead, which is called one hot encoding, and it's very effective, to create extra columns indicating the presence or absence of a category, with a value of one or zero respectively.
>
> **[4:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=244)** So, here we can again, use the DictVectorizer class, from the feature extraction module again.
>
> **[4:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=251)** So, we have sales numbers and day of the week for the data, and in order to first one hot encode the categorical column, we can first instantiate the class DictVectorizer, and here we can set sparse... Equals false, so that we would directly get the array.
>
> **[4:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=274)** And we can also set dtype equals int.
>
> **[4:38](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=278)** And then we call the fit transform method past the sales data that we have defined above.
>
> **[4:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=284)** So if you look at it, so you see that three columns have been created, three new columns have been created for us, except for the day column.
>
> **[4:53](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=293)** So these three columns are basically three unique labels, three unique categories that are available in the day column for each of them, Monday, Wednesday and Thursday, Wednesday's occurring twice.
>
> **[5:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=304)** So that's why we have only three columns for the four rows that we have in the data.
>
> **[5:10](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=310)** And the value, basically denotes if that was available or if that value was present in that particular rule or not.
>
> **[5:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=317)** And it is denoted by zero or one.
>
> **[5:20](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=320)** We can actually get the feature names as well.
>
> **[5:22](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=322)** So again, using the get feature names method, and you see that we have got day Monday, Thursday, and Wednesdays.
>
> **[5:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=330)** So these are the three features that we have created for our categorical column.
>
> **[5:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=334)** And then lastly, we have sales column.
>
> **[5:36](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=336)** So that was how we can handle numerical, textural and categorical data using Cyclotron library.
>
> **[5:44](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/feature-engineering?u=76281980&t=344)** And the next steps for you should be to practice these exercises on a real dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (3), [[Microsoft Word|Word]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2)
> **Code Identifiers:** fit_transform (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keys clicking) (1)

#### [Creating machine learning pipelines](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=0)** - [Instructor] Handling multiple [[Feature Engineering]] or transformational steps can quickly become very tedious.
>
> **[0:06](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=6)** Especially if we want to string these steps together.
>
> **[0:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=9)** For example, in a machine learning project, we often want to impute missing values, scale numerical attributes, handle outliers and then train the model in that particular order.
>
> **[0:19](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=19)** So, to automate such tasks, we can actually create processing pipelines and [[Python (Programming Language)|Python]] offers this using the circuit learn package and we have a pipeline class from the pipeline module to create such pipelines.
>
> **[0:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=35)** So, to demonstrate this, I have created some sample data X which is a containing some missing values.
>
> **[0:42](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=42)** And then I have VI which contains five values for each of the firewalls defined in X.
>
> **[0:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=48)** So let's create this random data, now to create a pipeline.
>
> **[0:52](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=52)** We have imported a few classes.
>
> **[0:54](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=54)** So first of all, we have pipeline and we have simple imputed class for imputing missing values.
>
> **[1:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=61)** We have standard scaler class for scaling the numerical attributes and we have [[Linear Regression]] which would be our model for training.
>
> **[1:11](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=71)** So to create a pipeline which would serve as our model.
>
> **[1:15](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=75)** So we will define pipeline, which will take a list of steps and each step would be a topple, defining the name of that step and the method.
>
> **[1:26](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=86)** So here, this would take a list.
>
> **[1:30](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=90)** So the first step would be the importer step.
>
> **[1:35](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=95)** So have you impute the missing values?
>
> **[1:37](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=97)** So let's name it.
>
> **[1:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=100)** Name is just a string and the method would be simple in Butoh and we can specify the strategy head.
>
> **[1:49](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=109)** So the strategy is mean, we want to actually impute a missing values with average.
>
> **[1:56](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=116)** So, that is done.
>
> **[1:59](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=119)** The next step would be scaling the numerical features.
>
> **[2:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=121)** So here we'll name it skill.
>
> **[2:04](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=124)** And we can mention this step.
>
> **[2:08](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=128)** We will use the standard scaler class so that is done as well.
>
> **[2:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=133)** And now the last step would be to create the model.
>
> **[2:17](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=137)** So this is our model linear regression.
>
> **[2:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=143)** And once this is done, our pipeline is now defined containing topples of steps, and we will run the cell.
>
> **[2:31](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=151)** Now we can actually use this model to train.
>
> **[2:34](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=154)** So let's train it using the fit method boss X and labeled Y.
>
> **[2:40](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=160)** And once that is done, model is ready and we can actually print Y and the predictions as well.
>
> **[2:48](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=168)** So let's print the predictions as well to compare them more model dot predict and boss X do it.
>
> **[2:58](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=178)** So these are the results of the pipeline.
>
> **[3:01](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=181)** We have 1150 minus three.
>
> **[3:03](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=183)** So the first area is the actual values and the secondary is the predicted results.
>
> **[3:09](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=189)** So we have learned how we can create processing pipelines.
>
> **[3:13](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/creating-machine-learning-pipelines?u=76281980&t=193)** And for the next steps you should be building a pipeline for a more complex dataset with multiple transformational steps and model training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2), [[Feature Engineering]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980&t=0)** - [Harshit] You've just learned a wide range of [[Python (Programming Language)|Python]] techniques; from using iPad and notebooks, to manipulating data frames, to plotting informative charts, and even creating useful machine learning pipelines.
>
> **[0:12](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980&t=12)** The journey isn't over however; there are many more concepts and tools to master.
>
> **[0:18](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980&t=18)** With the skills learned here you are well on your way to becoming a competent data scientist.
>
> **[0:23](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980&t=23)** Feel free to connect with me online.
>
> **[0:25](https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/next-steps?u=76281980&t=25)** Thanks for watching, and I'll catch you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** ipad (1)
> **Speakers:** - [harshit] (1)


## Instructor

- [[Harshit Tyagi]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Science

## Path Context

### In [[Advance Your Python Skills for Data Science]]
← [[Python Data Analysis]] | **5 of 6** | [[Level Up- Python Data Acquisitions, Prep, and EDA]] →

## Appears In

- [[Advance Your Python Skills for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Data Science Foundations- Python Scientific Stack -CoderPad-]] — Python (Programming Language), Data Science
- [[Python for Data Science and Machine Learning Essential Training Part 2]] — Python (Programming Language), Data Science
- [[Python For Data Science And Machine Learning Essential Training Part]] — Python (Programming Language), Data Science
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)

---

[↑ Back to top](#)