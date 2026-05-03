---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-for-data-visualization-2023
url: "https://www.linkedin.com/learning/python-for-data-visualization-2023"
duration_minutes: 81
duration: 1h 21m
level: Intermediate
updated: 1/16/2024
learners: 13999
skills:
  - Python (Programming Language)
  - Data Visualization
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH_5u3PhUB7TQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705014364462?e=2147483647&amp;v=beta&amp;t=uMO1O5O85F94TvNQs5ElVRvzqxcsygEaVhXed49wDQA"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Visualization]]'
prev_courses:
  - '[[Power BI Data Dashboards]]'
next_courses:
  - '[[Visualizing Advanced Charts and Graphs]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Visualization","position":6,"total":7,"prev":"Power BI Data Dashboards","next":"Visualizing Advanced Charts and Graphs"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-visualization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20for%20Data%20Visualization.md)

![Python for Data Visualization](https://media.licdn.com/dms/image/v2/D560DAQH_5u3PhUB7TQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705014364462?e=2147483647&amp;v=beta&amp;t=uMO1O5O85F94TvNQs5ElVRvzqxcsygEaVhXed49wDQA)

# Python for Data Visualization

> Data visualization is incredibly important for data scientists, as it helps them communicate their insights to nontechnical peers. But you don’t need to be a design pro. Python is a popular, easy-to-use programming language that offers a number of libraries specifically built for data visualization. In this course from the experts at Madecraft, you can learn how to build accurate, engaging, and ea

> [LinkedIn Learning](https://www.linkedin.com/learning/python-for-data-visualization-2023) | 1h 21m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Effectively present data with Python](#effectively-present-data-with-python)
  - [Before you start](#before-you-start)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Data Visualization Overview**](#1-data-visualization-overview) (3 videos)
  - [Value of data visualization](#value-of-data-visualization)
  - [Leverage programming languages](#leverage-programming-languages)
  - [Overview of Jupyter Notebooks](#overview-of-jupyter-notebooks)
- [**2. Leverage pandas for Analysis**](#2-leverage-pandas-for-analysis) (12 videos)
  - [Introduction to pandas](#introduction-to-pandas)
  - [Create sample data](#create-sample-data)
  - [Load sample data](#load-sample-data)
  - [Basic operations](#basic-operations)
  - [Simplify with slicing](#simplify-with-slicing)
  - [Filter and clean data](#filter-and-clean-data)
  - [Rename and delete columns](#rename-and-delete-columns)
  - [Aggregate functions](#aggregate-functions)
  - [Identify missing data](#identify-missing-data)
  - [Remove or fill in missing data](#remove-or-fill-in-missing-data)
  - [Convert pandas DataFrames](#convert-pandas-dataframes)
  - [Export pandas DataFrames](#export-pandas-dataframes)
- [**3. Simplify Visualization with Matplotlib**](#3-simplify-visualization-with-matplotlib) (8 videos)
  - [Basics of Matplotlib](#basics-of-matplotlib)
  - [Set marker type and colors](#set-marker-type-and-colors)
  - [MATLAB-style vs. object syntax](#matlab-style-vs-object-syntax)
  - [Set titles, labels, and limits](#set-titles-labels-and-limits)
  - [Add grids](#add-grids)
  - [Create legends](#create-legends)
  - [Save plots to files](#save-plots-to-files)
  - [Create plots with Matplotlib wrappers](#create-plots-with-matplotlib-wrappers)
- [**4. Customize Visualizations with Matplotlib**](#4-customize-visualizations-with-matplotlib) (3 videos)
  - [Create heatmaps](#create-heatmaps)
  - [Create histograms](#create-histograms)
  - [Create subplots](#create-subplots)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Effectively present data with Python](https://www.linkedin.com/learning/python-for-data-visualization-2023/effectively-present-data-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/effectively-present-data-with-python?u=76281980&t=0)** - In this vast ocean of data, there hides many treasures. How do you find, let alone unlock, these treasure chests? Everyone is on the same quest, wondering how to leverage this data to gain understanding, see trends, and gain competitive advantages. [[Data Science]] is the key to solving what businesses need today. Finding the right tool is critical. This is where [[Python (Programming Language)|Python]] comes in. You can create compelling and publishable visualizations using Python's powerful data science libraries. By creating your own visualizations, you'll be able to explore the data in a new way. My name is Michael Galarnyk. I'm a Data Scientist, Python Instructor, YouTuber, and Blogger. In this course, you will be able to create compelling data visualizations using Python. We'll take a look at some of the various tools available, and you'll learn how to manipulate data using [[Pandas (Software)|Pandas]]. Also, you get a chance to create your own visualizations using Matplotlib. You'll review how to create box plots, heat maps, histograms, and more. By the end of this course, you'll feel confident and ready to go build your own powerful visualizations using Python. So, if you're ready to dive in, then let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Data Science]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5), find (1), go build (1)
> **Speakers:** - in (1)

#### [Before you start](https://www.linkedin.com/learning/python-for-data-visualization-2023/before-you-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/before-you-start?u=76281980&t=0)** - There are a few things I'd like you to be aware of as we get started. First, you should be able to understand basic [[Python (Programming Language)|Python]] [[Data Structures]], such as lists, tuples, and dictionaries. Also, you get more out of this course if you have a basic understanding of Jupyter Notebooks. I'll be programming using Jupyter in this course. Having said that, don't worry if you're feeling a little shaky and unsure where to begin. As you proceed through this course, it'll provide you with a number of tips and resources. As you follow along, you'll quickly see how powerful Python visualizations can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Structures]] (1)
> **CLI Commands:** python (2)
> **Tools:** jupyter (2)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - there (1)

#### [Using the exercise files](https://www.linkedin.com/learning/python-for-data-visualization-2023/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/using-the-exercise-files?u=76281980&t=0)** - A folder of exercise files has been included to help you make the most of this course. You will be using them throughout the course. Please download those now so that you're prepared for when you need them. Check out your operating system's download folder, find the downloaded course exercise folder, and unzip these files. You'll see this folder here, which contains the contents of this course. Once you have done this, you'll be ready to code along.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1), unzip (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - a (1)


### 1. Data Visualization Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Value of data visualization](https://www.linkedin.com/learning/python-for-data-visualization-2023/value-of-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/value-of-data-visualization?u=76281980&t=0)** - [Instructor] At the core of it, data visualization is all about communicating results from data. It's about simplifying data, cleaning data with the end goal of helping you, and your stakeholders understand data on a more intuitive level. To bring this to life, I want to give you an example. Suppose you take out a loan, and you're given a payment table like this. When you look at this, what you really want to do is find out how much you're paying interest over time. Now, this table is not really a great way to see this data. Instead, we might look to create a visualization like this. And as you can see, you actually pay more interest at the beginning of a loan, and this wouldn't have been clear if we didn't see this graph. And just like this example, visualizations can help change our perspectives or behavior. Another way to look at this is by using a visualization like we see here. It's easy to see. The longer the term the loan, the more you end up paying an interest overall. And just like that, data visualizations can be really powerful, and that's a reason why you should use visualizations in your day-to-day work.

> [!info]- Semantic Content
>
> **Analogies:** just like (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Leverage programming languages](https://www.linkedin.com/learning/python-for-data-visualization-2023/leverage-programming-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/leverage-programming-languages?u=76281980&t=0)** - [Instructor] There are a lot of great reasons to use a programming language like [[Python (Programming Language)|Python]] to build data visualizations. First, there are a lot of different types of visualizations you can make, including boxplots, bar graphs, line graphs, histograms, et cetera. Second, using a programming language to build the data visualization allows you to quickly iterate and improve on a visualization, as well as try out many different visualizations. To get you started, I want you to first understand a data visualization process. You first have to have data, where you clean it, you simplify it, and sometimes even augment your data source if your data source is not rich enough. From there, you can use that understanding from your visualization to improve your [[Data Quality]] or to explore other aspects of your data, and this process can keep on going until you have a visualization that tells a compelling story. So there are a few common tools and libraries in Python to build data visualizations. In this course, we're going to utilize the Anaconda Python distribution, and second, I encourage you to use Jupyter Notebooks. That's the program I'll be using throughout this course. Next, there are two major plotting libraries in Python, Matplotlib and Seaborn. And lastly, we'll go over the NumPy and [[Pandas (Software)|Pandas]] libraries, as before you can visualize data, you have to get it, you have to clean it, and sometimes even augment it, and NumPy and Pandas help you do it. So as far as why we use the Anaconda Python distribution, Python has a solid claim to be the fastest-growing major programming language, and Anaconda is the strongly recommended way
>
> **[1:35](https://www.linkedin.com/learning/python-for-data-visualization-2023/leverage-programming-languages?u=76281980&t=95)** of installing Jupyter Notebooks. So what Anaconda is really is a package manager, an environment manager, and Python distribution. Think of it as kind of like an app store for Python. Data visualization projects require many different packages and libraries. What's great is that Anaconda comes pre-installed with many of them. So what about Jupyter? Jupyter Notebooks contain both code and rich text elements, such as visualizations, links, and equations. So right here is a Jupyter Notebook in action, and you'll see a lot of that throughout this course. So I want to quickly tell you about NumPy and Pandas. Before we can plot data, we first need data in a portable form. NumPy and Pandas can be used to efficiently load, store, manipulate, and export in memory data. Pandas can also be used as a wrapper for Matplotlib, which brings us to Matplotlib and Seaborn. They're very popular Python plotting libraries. Matplotlib's API is relatively low-level. This allows for a lot of customization, but also a lot of code. A way around this is to utilize a Seaborn wrapper, which offers high-level graphics and integrates well with Pandas' library. It's also important to keep in mind that with every Matplotlib wrapper like Seaborn is still often useful to dive into Matplotlib's syntax to adjust the final plot output. And that's it. These are a couple common tools you can use to build data visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Pandas (Software)|Pandas]] (6), [[Data Quality]] (1)
> **CLI Commands:** python (9), make (1)
> **Tools:** anaconda (5), jupyter (5)
> **Analogies:** think of it as (1), kind of like (1), such as (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Best Practices:** recommended (1)
> **Warnings:** keep in mind (1)

#### [Overview of Jupyter Notebooks](https://www.linkedin.com/learning/python-for-data-visualization-2023/overview-of-jupyter-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/overview-of-jupyter-notebooks?u=76281980&t=0)** - [Instructor] To get started with the Jupyter Notebook, you first have to open it. I'm working on a Mac, and on a [[Windows]] and a Mac, you can open up a Jupyter Notebook through Anaconda Navigator. I'll click on Anaconda Navigator. If you're using a PC, it should look pretty similar. To open it, I go ahead and click Launch. As you can see, Anaconda run a process, and it's open at Jupyter Notebook here in Chrome. Depending on what your default browser is, it could open up in a different browser such as Firefox, Safari, or [[Microsoft]] Edge. I'll go ahead and make this full screen. I'll click on Desktop. I'm going to open up a Jupyter Notebook by clicking New, [[Python (Programming Language)|Python]] 3, and traditionally, like you always do, I'll go ahead and print Hello World. I'll press Shift + Enter to run the cell, and there we go. Jupyter also allows you to do markdown cells, which are very useful for annotating your code. So to annotate your code, go to Sell, Sell Type, and click on Markdown. Using Markdown, I made a secondary header, and I said loading data. And the reason why I did that is that oftentimes, it's good to use markdown to organize your code and to communicate with feature users of your Jupyter notebook. In this case, it'll allow others to know that the cells below are for loading data. You can also add new cells by doing Insert Above or Insert Below. So really, that's all you can know right now.
>
> **[1:34](https://www.linkedin.com/learning/python-for-data-visualization-2023/overview-of-jupyter-notebooks?u=76281980&t=94)** If you're new to Jupyter Notebooks, don't worry, you're going to learn a lot more as we go through this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Microsoft]] (1), [[Python (Programming Language)|Python]] (1)
> **Tools:** jupyter (7), anaconda (3), firefox (1), safari (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1), python (1)
> **Versions:** python 3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Leverage pandas for Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to pandas](https://www.linkedin.com/learning/python-for-data-visualization-2023/introduction-to-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/introduction-to-pandas?u=76281980&t=0)** - [Instructor] In order to make a visualization, we need data, and we usually need it in organized tabular form suitable for plotting. The [[Pandas (Software)|Pandas]] library provides easy to use [[Data Structures]] and data analysis tools you can use to make your data easier to plot. Pandas data frames are multidimensional, labeled data structures similar to tables and spreadsheets with rows and columns. With it, you can store and manipulate data in a table format, providing a convenient way to analyze and visualize it. An important data structure of the Panda's library is a fast and efficient object for [[Data Manipulation]] called a data frame. You can manipulate and transform data frames easily with various Pandas methods. You can perform operations such as filter rows based on certain conditions, sort the data, pick specific columns, merge or join multiple data frames, and aggregate data. Another useful feature of Pandas is its ability to deal with missing data. With Pandas, you can detect missing values, fill them with appropriate values, or remove them all together. It's crucial to have this capability when dealing with incomplete or messy datasets. The image below is a Pandas data frame. A row represents an observation, and a column represents a feature. Rows have labels called indexes. So for example, this row is the row with index zero. This row is a row with index one. Columns also have column names. So we have the month column. We have the starting balance column, the repayment column, and so on. Once you create a Pandas data frame, you will more easily be able to manipulate and clean your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[Data Structures]] (2), [[Data Manipulation]] (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1), such as (1), for example (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Create sample data](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-sample-data?u=76281980&t=0)** - [Instructor] In order to create visualizations, you first need to have data to work with. So in this video I'll teach you how to create sample data in the form of a car loan table. So what we have here is a car loan of $34,690 with a 7.02% interest rate over 60 months. There are multiple approaches to structure your data and to a form acceptable by [[Pandas (Software)|Pandas]] DataFrame. One approach is by using a nested list where in the first row, we have the first month of our car payment. So we have one for the month, we have our starting balance, we have a repayment, which is $687.23. We have how much of that repayment is going toward interest. We have how much of that payment is going toward the principal of the loan. And then after a payment we have how much is our new balance? We have the terminal loan, which is how many months we're going to be paying this loan for in total. We have the interest rate for the loan and we also have the car type. In this case it's a Toyota Sienna. And then we also have the column names, which are what I just told you before in the form of a [[Python (Programming Language)|Python]] list where we have the month, the starting balance, the repayment, et cetera. And then once we have the data in a nice clean format, we're going to press shift enter to run the cell. From here we're going to use the PD.DataFrame method and we're going to insert our carLoans variable into the data parameter and our colNames variable into the columns parameter. And then we're going to press shift enter to initialize our DataFrame. And from here we're going to press shift enter again. And we have our data in a nice clean format.
>
> **[1:35](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-sample-data?u=76281980&t=95)** And obviously this is more readable than a nested list, but there's also other ways to do this as well. We could have also structured our data in the form of a NumPy array. And this looks very similar to a nested list, except for a NumPy array is more efficient than a Python list. And similarly, we have the same colNames as before. So now that we have the data in a format that we like, we're going to press shift enter. And just as before, we're going to have our carLoans variable assigned to the data parameter and our colNames variable assigned to our columns parameter. We're then going to press shift plus enter to initialize our dataframe. And as before, we have our data in a nice clean format, which is obviously easier to look at than an NumPy array. The third approach is to use a Python dictionary. And while this may not seem like as clean for a format to structure your data, there are times when you're already going to have your data in a Python dictionary. It'll just be easier to use that Python dictionary to then initialize the panda's DataFrame. So we have our carLoans data, and like before, we're going to press shift plus enter to initialize our carLoans variable. And from here we're initialize our Pandas DataFrame by having our carLoans variable assigned to our data parameter. And our colNames variable assigned to our columns parameter. And then we're going to press shift plus enter to initialize our dataframe. And like before you can see that we have our payment table, which is clearly an easier to look at format than our Python dictionary. So as you can see, building tables like these aren't all that difficult. However, there are some limitations of these approaches that I'd like you to be aware of. For example, if you have a larger data set, like the entire payment table for a particular car loan,
>
> **[3:09](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-sample-data?u=76281980&t=189)** for example, like what I'm showing here, it would be painfully slow to type this out and get it correctly, for one, and two, it'd be very memory intensive. And now that I've painfully typed out this payment table, we're going to run this cell by doing shift plus enter. And as before, we're going to initialize our DataFrame and voila, we have our entire payment table. This is a very tedious approach and I do not recommend it. I should note that if you don't know what a command does, for example PD.dataframe, you can always use the inbuilt Python function help to find out what the parameters accept as valid, and that's it. In order to create data visualizations, you need to have data and now you know how to create it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Pandas (Software)|Pandas]] (2)
> **Code Identifiers:** carloans (5), colnames (4)
> **CLI Commands:** python (7), find (1)
> **Analogies:** for example (3), similar to (1)
> **Versions:** 7.02 (1), 687.23 (1)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), note that (1)
> **Tools:** terminal (1)

#### [Load sample data](https://www.linkedin.com/learning/python-for-data-visualization-2023/load-sample-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/load-sample-data?u=76281980&t=0)** - [Instructor] In my line of work as a [[Python (Programming Language)|Python]] instructor, one question I often get from students is, "How do you load your own data?" In this video, I'm going to show you how to load CSV and [[Microsoft Excel|Excel]] files using the [[Pandas (Software)|Pandas]] library. So the first thing you have to do is you have to find out where your files are located. I've provided some exercise files included with the course. So inside the folder Exercise Files, inside the Pandas folder, under Data, I have two files, car_financing.csv and car_financing.xlsx. In this cell, we have a path to the file car_financing.csv. And what this here is is a relative path. So relative to the notebook load_data.ipynb I have the Data folder and inside the Data folder is the CSV file that we want to load. From here, we're going to use the pd.read_csv method to load that file into a Pandas DateFrame. And I'm going to press Shift + Enter. And then from here, we can look at the data frame. You can also load files from Excel. Inside the Exercise Files folder, we have a folder called Data, and inside that folder is a file called car_financing.xlsx. And what we're going to do now is we're going to read the Excel file using the method pd_read_excel into a Pandas DateFrame. And like before, we've loaded the file
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/load-sample-data?u=76281980&t=93)** into a Pandas DateFrame. I should note that if you need help or if you don't understand what a method does, you can always use the in-built Help command to understand the documentation for a given method. And then I'll press Shift + Enter and I can see what the read_excel method takes in as parameters because sometimes your file may not load as perfectly as you may wish. So that's how you load data into Pandas DateFrames. And one more note, there are many different file types you can load than just CSV and Excel files into Pandas DateFrames. If you're curious about what other kind of files you can load, I encourage you to do pd.read_ to see what other kind of files you can load. And there you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** car_financing (4), load_data (1), read_csv (1), pd_read_excel (1), read_excel (1)
> **Env Vars:** csv (3)
> **Exercise Files:** exercise files (3)
> **File Paths:** car_financing.csv (2)
> **CLI Commands:** python (1), find (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)

#### [Basic operations](https://www.linkedin.com/learning/python-for-data-visualization-2023/basic-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/basic-operations?u=76281980&t=0)** - [Narrator] After reading the contents of a file into your [[Pandas (Software)|Pandas]] DataFrame, it's important to examine your data for a couple of reasons. First, you need to ensure that you've correctly loaded the data. Second, you have to see what kind of data you have. And third, you have to check the validity of your dataset, and I'll go through a couple ways we can do this. So one of the first things you do after loading your data is look at the head and the tail of your dataset. The method head selects the top N number of records from your dataset. The method tail selects the bottom N number of records from your dataset. This is really important to do as oftentimes your data format could change throughout your dataset. Another important thing to do is to check your column data types. You can do this by using the dtypes attribute. One thing we'll notice is that certain columns are ints, certain columns are floats, whereas others can be objects and you can think of objects as strings. Another important thing to do is to find out how many rows and columns you have in your dataset. To do this, you can use the shape attribute, and you see that we have 408 rows and 9 columns. A really important thing to do that is often forgotten is to use the info method. And the reason why this is very valuable is that you can see how many non-null values you have in your dataset as oftentimes, data analysis tasks and data visualizations will not work if you have null values in your dataset. As you can see in the dataset over here
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/basic-operations?u=76281980&t=93)** for the interest paid column, we have one null value, because we have 407 non-null values versus every other column has 408. What this tells me is that I'll either have to remove the row or fill in the missing data with some sort of amputation technique. In the end, it is really important to remember to verify your data. Use the techniques I just showed you to make sure that everything looks good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [narrator] (1)

#### [Simplify with slicing](https://www.linkedin.com/learning/python-for-data-visualization-2023/simplify-with-slicing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/simplify-with-slicing?u=76281980&t=0)** - [Instructor] When working with large data sets, oftentimes you're only interested in a smaller subset of your data, and that's why slicing is so important. And in this video, I'll teach you how to select columns in [[Pandas (Software)|pandas]], because oftentimes, you're only interested in a smaller subset of columns in your data, and I'll also show you how to use slicing operations in pandas. I'm working with a car loans dataset, where I have the DataFrame df, and I'm looking at the first five rows. Let's say you're only interested in looking at a few columns of your dataset. So let's go over how to use brackets to select just a few columns. What the code here does is we're using double square brackets to only output one column of our data set. And as you see, I've only pulled out the car_type column. Now, we can also select multiple columns using double brackets. And let me show you how that's done. So right here, you notice that we have a list within these brackets. So I'm looking at the car_type column, and I'm looking at the Principal Paid column. So I run this, and now I have the car_type column and the Principal Paid column. And notice that when I use the inbuilt type function, that this is still a pandas DataFrame. One thing a lot of beginners often have difficulties with when working with pandas is if they just have single brackets, they end up with something that looks like this. This is called a pandas series, and what this is is a one-dimensional array, which can be labeled. In this case, our labels are zero or one or two or three and a four.
>
> **[1:32](https://www.linkedin.com/learning/python-for-data-visualization-2023/simplify-with-slicing?u=76281980&t=92)** These are called indexes. And notice when I use the inbuilt type function, I have a pandas series. Keep in mind that when you use pandas series, you cannot select multiple columns. This will result in a key error as you can see here. And this is a really common error that a lot of beginners run into. And this usually results from people wanting to select multiple columns. And the simple solution to this is simply to use a pandas DataFrame. In other words, use double brackets. So I have my DataFrame, I'm selecting my car_type column, and I'm selecting my Principal Paid column. One reason why you might use a pandas series as opposed to a DataFrame is that with a pandas series, you can select rows using slicing, where you have the series, the start index of what you want to select, the end index of what you want to select. And keep in mind, the end index is not inclusive, and this behavior is very similar to [[Python (Programming Language)|Python]] lists. So I have a pandas series here, where I'm looking at the car_type column. And this is the entire car_type column. Say I'm only interested in, let's say index zero up until but not including index 10, in other words, from here to here. I can use a slicing operation. So over here, I have my car_type column, and this is a pandas series, and here's my slice. And I'm just selecting from index zero up until but not including index 10.
>
> **[3:07](https://www.linkedin.com/learning/python-for-data-visualization-2023/simplify-with-slicing?u=76281980&t=187)** So from zero to nine. Keep in mind you can also select columns using dot notation. However, this is not the recommended syntax. And as you'll see in this cell over here, this can result in an error, as there's a space in this column name. Keep in mind that this also fails if your column name is the same as the pandas DataFrame's attributes, or methods. So a safer syntax is just to use single brackets. And lastly, I wanted to show you the preferred syntax for selecting columns. And this is by using the loc attribute. And this allows you to select columns, index, as well as slice your data. So over here, I'm selecting all the rows of my pandas DataFrame. I'm specifically saying I just want the car_type column, and then I want the first five rows. Similarly, if you just want a pandas series, you just take out the square brackets around your column name. So that's it. If in the future you're presented with a [[Big Data]] set and you want to look at a subset of it, consider slicing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (15), [[Python (Programming Language)|Python]] (1), [[Big Data]] (1)
> **Code Identifiers:** car_type (8)
> **Definitions:** is a  (3), in other words (2), is called (1)
> **Warnings:** keep in mind (4), common error (1)
> **CLI Commands:** python (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Filter and clean data](https://www.linkedin.com/learning/python-for-data-visualization-2023/filter-and-clean-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/filter-and-clean-data?u=76281980&t=0)** - [Instructor] When working with a dataset, oftentimes you're only interested in a smaller subset of your data. For example, say I have a car loan dataset and I want to filter out the data to only have a car type of Toyota Sienna with an interest rate of 7.02%. So the first thing I'm going to do is I'm look at the first five rows in my dataset, and while it appears that the first five rows are only Toyota Siennas, that doesn't mean the [[Representational State Transfer (REST)|rest]] of my dataset is all of car type Toyota Sienna. The first thing I'm going to do is I'll use the value counts method on the car type column to see what other kind of cars I have my dataset. I have my data frame, I have square brackets, I have the column I'm interested in. I'm going to close those brackets, and then I have the value counts method. When I press shift enter, you'll see that I have 120 Toyota Siennas. Say for example, I was interested in Toyota Corollas instead, I would have to fix the data entry errors because I have 111 Toyota Carollas, instead of Corollas. This is a really important thing to take note of, as oftentimes you'll have misspellings in your dataset, you'll have errors, you'll have things you don't quite understand, but that's all part of the data exploration process. And what I'll do now is I'll create a car filter, and the way this works is I have a data frame, I have square brackets, I have the column that I'm interested in. I close those single brackets. I have two equal signs because this is equality, and I have the type of car I'm interested in,
>
> **[1:35](https://www.linkedin.com/learning/python-for-data-visualization-2023/filter-and-clean-data?u=76281980&t=95)** in this case, Toyota Sienna. And what this produces is a [[Pandas (Software)|pandas]] series of true and false values. There's a couple different ways to utilize this pandas filter of true and false values to get a data frame of just Toyota Siennas. One way is to have your data frame, square brackets, your car filter, which is your pandas series, you close those brackets, and then I'm just going to look at the first five rows. The second way is to use a lock attribute, and the way this works is I have a data frame, I have .loc, I have single brackets, I have my pandas series of true and false values, and this colon just means that I want to look at all the columns and I'll press shift plus enter, and these two approaches are equivalent in the result they produce, but oftentimes the second approach is more legible. As you can see, I have identical outputs for the two different approaches. One thing to keep in mind is that if I try to use the value counts method again on the pandas series, for the car type column, it'll seem like nothing changed. And the reason why it looks like nothing changed is because we didn't assign the filtered data frame back to the original data frame. And the way to fix this is by assigning the filtered data frame back to the original data frame. And now if you look at the value counts, it looks like we have a filtered data frame. Now that we've taken care of the car type filter, we also have to make an interest rate filter.
>
> **[3:09](https://www.linkedin.com/learning/python-for-data-visualization-2023/filter-and-clean-data?u=76281980&t=189)** And if I look at the pandas series for the interest rate column, and the value counts for it, you'll see that we have 60 rows with a 7.02% interest rate, and 60 rows with a 3.59% interest rate. And what I want to do in this section is filter the data frame to only have the 7.02% interest rate. The code here is a filter that produces a pandas series of true and false values, where the rows that are true are the ones with the 7.02% interest rate, and the false ones will be the rows with the 3.59% interest rate. So I have the data frame, I have single brackets, I have a string of the column that I'm interested in. I close those brackets. I have two equal signs, and then the 7.02% interest rate, and this produces a pandas series of true and false values. What I'm going to do next is I'm going to assign that pandas series of true and false values to the variable interest filter. To utilize my interest filter, I'm going to use the lock attribute, followed by single brackets. I'll have my pandas series of true and false values, and then I'm going to select all the columns, and I'm going to take this filtered data frame and assign it back to the original data frame. I'm going to do shift plus enter to create the filtered data frame.
>
> **[4:42](https://www.linkedin.com/learning/python-for-data-visualization-2023/filter-and-clean-data?u=76281980&t=282)** To check that my interest filter worked as intended, I'm going to look at the pandas series of the interest rate column. I'll use the value counts method, and I'm going to press shift plus enter, and you'll see that I have 60 rows with the 7.02% interest rate. In the previous sections, we created a car filter and an interest filter and used a lock command to filter the data by first applying the car filter and then the interest filter. A more concise way to do this is shown below. I have my data frame, I have the lock attribute, I have single brackets, I have my car filter, and then I use the and bitwise logic operator, along with my interest filter, and then I say, I want all the columns. And this would've worked just as well as applying each of the filters individually. As you can see, by using filtering, you can get the data that you're just interested in looking at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (11), [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** 7.02 (6), 3.59 (2)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Rename and delete columns](https://www.linkedin.com/learning/python-for-data-visualization-2023/rename-and-delete-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/rename-and-delete-columns?u=76281980&t=0)** - [Instructor] When you have a data set, it's often the case where you want to change your column names to make them more legible, more understandable, or more easy to program with, or sometimes you want to remove unnecessary columns. An advantage of removing unnecessary columns is it can free up RAM on your computer and it's also a good [[Data Science]] practice. There are two popular ways to rename data frame columns. The first is dictionary substitution, which is very useful if you only want to rename a few of your columns. There's also a list replacement, which requires a full list of names. And in my experience, this is more error prone. The data set we're going to work with is the car loan data set, and we'll look at the first five rows using the head method. And one reason why I want to rename a column, in this case the principle paid column, is if I try to use the dot notation where the data frame and a dot and the column I'm interested in, this will yield an error. The reason why I have an error is that there's a space in my column name. This would've worked if I had single brackets and a string of the column name I'm interested in and closed brackets. However, I still want to fix this as someone else could run into the same error with this dataset. One approach is dictionary substitution using the rename method. And the way this works is that I have my data frame, I have a dot, I have rename, and I have columns here because I want to rename my columns as opposed to an index.
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/rename-and-delete-columns?u=76281980&t=93)** I have the original column name, in this case starting balance, and I want to rename it to starting_balance. Additionally, I want to rename the interest paid column, the principle paid column, and the new balance column. And after I rename the columns, I want to take that data frame and assign it back to the original data frame. And now you can look at the data frame after renaming columns. And as you see, there's no longer a space between many of the columns. There's another approach to renaming columns, and this is through list replacement. In the case of the code below, I want to change the month column where it starts with a capital M to our lowercase m. However, with this technique, I still need to list the [[Representational State Transfer (REST)|rest]] of the columns and assign it back to the df.columns attribute. And now as you can see, I have a lowercase m for the month column. There are also times where you may want to delete your columns. Approach one for doing this is to use the drop method where I have the data frame, I have .drop and I'm specifying that I want to drop my columns. In this case, I only want to drop the term column. But keep in mind that using this approach, you can drop multiple columns at a time. And now looking at the data frame, you can see that I no longer have the term column. The second approach to deleting columns is by using the Dell command. In this case, I'm going to delete the repayment column.
>
> **[3:07](https://www.linkedin.com/learning/python-for-data-visualization-2023/rename-and-delete-columns?u=76281980&t=187)** As you see below, I no longer have the repayment column. And that's it. The next time you find that you want to rename your columns or delete them, consider some of these approaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** starting_balance (1)
> **Env Vars:** ram (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Aggregate functions](https://www.linkedin.com/learning/python-for-data-visualization-2023/aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/aggregate-functions?u=76281980&t=0)** - [Instructor] When working with a dataset, it's often a good idea to compute summary [[Statistics]]. Summary statistics can tell you about your outliers, if your data is symmetrical, and how tightly grouped your data is. For the car loan dataset where we have a payment table for a $34,690 loan at a 7.02% interest rate for a Toyota Sienna over 60 months, it would be interesting to find out how much total interest paid would be over the course of the loan. For this, we're going to use a sum method. And what the sum method does is it sums the values in a column. And the way this works is I have the name of the data frame, DF. I have single brackets, I have the column I'm interested in. In this case, interest_paid, closing single brackets, and I do .sum. And what this gives me is a total amount of interest paid over the course of the loan. And as you see, over the course of the loan, the interest paid is $6,450 and 27 cents. You can also use a sum method on an entire data frame to sum across all the values across all the columns. While the sum for the interest paid column is what we had before when we just summed across the interest paid column, the car type column seems to be a bit different. And the reason why this is the case is if you recall with [[Python (Programming Language)|Python]], when you add two strings together, they can concatenate. It's important to note that if you ever don't know exactly what a method does, I encourage you to use the help method
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/aggregate-functions?u=76281980&t=93)** where you have help, open parenthesis, the name of the data frame, in this case DF, open brackets, the name of the column, .sum, shift plus enter. The way the sum method works is it sums down all the values in a column. However, by default, it ignores all NAs or null values when computing the result. So if this interest paid column had any NAs or NANS in them, it ignored them. And that's why it's always important to know exactly what a method does or an aggregate function in this case, as are some potentially did include any NANs. And the way to check if you have NANs in your data frame is by using the inbuilt info method. And as you see here, I have one NAN in the interest paid column. When working with a dataset, it's often a good idea to use aggregate functions on your various columns. This can tell you how well grouped your dataset is, what your outliers are, and potentially useful information like how much interest you'll pay over the course of a loan by using the sum method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** nans (1), nan (1)
> **Code Identifiers:** interest_paid (1)
> **Versions:** 7.02 (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Identify missing data](https://www.linkedin.com/learning/python-for-data-visualization-2023/identify-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/identify-missing-data?u=76281980&t=0)** - [Instructor] When working with a dataset, you'll often run into missing values. Values can be originally missing from a dataset or be a product of [[Data Manipulation]]. In [[Pandas (Software)|pandas]], missing values are typically called NaN or none. Missing data can hint at [[Data Collection]] errors, indicate improper conversion or manipulation of data, or they can actually not be considered missing at all. For some datasets, missing data can be listed as zero, false, not applicable, entered an empty string, among many other possibilities. This is a really important subject as before you can graph data, you need to make sure you aren't trying to graph some missing values, as that can cause an error or misinterpretation of the data. And in this notebook, we'll see where missing data can cause misinterpretation of our results. The first thing we're going to do is we're going to use the car loan data set and we're going to identify how many missing values we have by using the Pandas info method. So I have data frame here, and then I have the info method. I'll press shift enter, and then as you see here, for every other column, except for interest paid, I have 60 non-null values. But for the interest paid column, I have 59. This means I have one NaN value in that column, this will cause a problem. Two common methods to indicate where values are missing are isna and isnull. They're exactly the same methods, but with different names. The reason why this is the case is in the R language, NA and null are two different things.
>
> **[1:35](https://www.linkedin.com/learning/python-for-data-visualization-2023/identify-missing-data?u=76281980&t=95)** This is to make our programmers have an easier time when working with [[Python (Programming Language)|Python]]. I tend to prefer isna as this tends to be similar in naming to other Python methods. As you see it in the code over here I have the Panda Series interest_paid. I'm using the isna method, and what this does is this is producing a Panda Series of true and false values. It'll be true where I have a NaN value, and it'll be false where I don't. I'll then press shift and enter. And as you see in the first five rows, I don't have any NaN values. The next thing I'm doing is I'm assigning this true and false filter to the variable interest_missing. And the reason why I'm doing this is I want to take that filter and eventually use it to isolate my missing data. What the code here is doing is I want to look at the row where I have the missing values. And what you see here is I have a missing value in the interest paid column. This will be a problem for later. It's important to keep in mind, that you can also use the knot operator to negate the filter so that every row that's returned doesn't have a NaN. And as you see in the Pandas DataFrame, the row with index 35 is no longer here. It's important to note, you'll often see code similar to what you see here. What we have is that same Pandas filter of true and false values. And then after, you have the aggregate function sum, which then sums all the true and false values
>
> **[3:09](https://www.linkedin.com/learning/python-for-data-visualization-2023/identify-missing-data?u=76281980&t=189)** to produce a result. The reason why this works is in Python, Boolean are a subtype of integer where true are ones and falses are zero. So in the code here, I essentially have one plus zero plus zero. And the reason why I have a one here is that I have one NaN in the interest paid column. When working with a dataset, it's important to identify your missing values, as missing values can cause data misinterpretation errors, or even cause you an error when you try to graph your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (3), [[Data Manipulation]] (1), [[Data Collection]] (1)
> **CLI Commands:** python (3), make (2)
> **Code Identifiers:** interest_paid (1), interest_missing (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Remove or fill in missing data](https://www.linkedin.com/learning/python-for-data-visualization-2023/remove-or-fill-in-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/remove-or-fill-in-missing-data?u=76281980&t=0)** - [Instructor] Once you've identified missing data, it's really important to either remove that data or fill in the missing data with a reasonable value. This is a really important subject, as before you can graph data, you need to make sure you aren't trying to graph some missing values, as that can cause an error or cause a misinterpretation of the data. We're working with the car loan dataset and the first thing we're going to do is we're going to utilize the info method. And what the info method does is it shows us how many missing values we have in each of our columns. And as you see, we have 60 non-null values for every column except for the interest paid column. This means that we have one null value. There are a couple different ways to deal with missing data. The first way is simply to remove the missing values. And in [[Pandas (Software)|pandas]] you can remove the missing values by using the drop NA method. And what the code here does is I have a pandas data frame from index 30 up until, but not including index 40, and I'm dropping the rows where I have any NAN values. And as you see here, I don't have a row at index 35 because I had a NAN value here. The other way to deal with missing values is simply to fill them in and there are a variety of ways to fill in missing values. The first thing we're going to do is we're going to look at where the missing data is located by using a pandas series and then slicing it to look at indexes 30 up until, but not including index 40.
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/remove-or-fill-in-missing-data?u=76281980&t=93)** As you see here, I have a NAN at index 35. The first thing we're going to try is we're going to try to fill the NAN with a zero by using the fill NA method. The reason why filling in a NAN with a zero is often not a good idea, is originally the NAN could have been something else. A zero could help you misinterpret the data. It's just one option. The other method we could use is to fill in with a backfill. And the way this works is perhaps better to show you. Where at Index 35, before I had a zero or a NAN, now I have an 89.77. This is because the index after it was an 89.77. This is very commonly done with time series data when you have a missing value. Another way is to forward fill in your value. And this is also done with time series data. The difference between backfill and forward fill is backfill takes the value after the missing value and inserts it at the value that's missing. And what forward fill does is it takes the value before the missing value and inserts it where the missing value is. The reason why you use one versus the other is really dependent on your domain knowledge and your application. This is also a current area of research. It's called data imputation. Another way to fill in missing values
>
> **[3:07](https://www.linkedin.com/learning/python-for-data-visualization-2023/remove-or-fill-in-missing-data?u=76281980&t=187)** is through linear interpolation. And what this does is it uses a linear model to fill in the missing value. And as you see here, this 93 is between the 96 and the 89. What the code here is doing is I'm finding the total interest paid over the course of a loan by using the sum method. And I should note, the sum method doesn't account for NANs. And as you see here, this is the total amount of money paid toward interest over the course of a loan. It's important to keep in mind that the sum method by default ignores NANs. So after we fill in the NAN value with a real value, this might change. What the code here is doing is this is producing a Boolean array of true and false values where I'll have a true value where I have a NAN and a false value where I don't, and I'm assigning it to the variable interest_missing. From there, I'm utilizing the LOC operator and filling in that missing N value with the value 93.24. Now, when I sum over the entire column, I'll get a different number. This is perhaps more accurate, and I should note the value of removing or filling in your data is that oftentimes you get more accurate calculations. In this case, the reason why I filled in the value with 93.24 is because I knew what the actual value should have been.
>
> **[4:38](https://www.linkedin.com/learning/python-for-data-visualization-2023/remove-or-fill-in-missing-data?u=76281980&t=278)** This is due to my domain knowledge of loans. For whatever application you're working with, it's often best to try to get the most accurate value to fill in for your missing values. And as you can see here, we don't have NAN values in the data frame anymore. Once you've identified your missing values, removing them or filling them in often gives you more accurate calculations and makes the results more interpretable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3)
> **Env Vars:** nan (10), loc (1)
> **Versions:** 89.77 (2), 93.24 (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** interest_missing (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Convert pandas DataFrames](https://www.linkedin.com/learning/python-for-data-visualization-2023/convert-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/convert-pandas-dataframes?u=76281980&t=0)** - [Instructor] When working with [[Pandas (Software)|Pandas]] DataFrames, you'll oftentimes find you want to convert them to NumPy arrays or [[Python (Programming Language)|Python]] dictionaries. The reason why is because certain libraries prefer NumPy rays or Python dictionaries as inputs to their methods as opposed to Pandas DataFrames. In this video, we'll work with the car loan dataset again, and we're going to look at the first five rows. There are two ways to convert Pandas DataFrames to NumPy arrays. The first approach is to use the two underscore NumPy method, and what this outputs is a NumPy array. The second approach is to use the values attribute, and this also produces a NumPy array. I should note that either of these approaches works just as well as the other. You can also convert Pandas DataFrames to Python dictionaries. You can do this by using the two underscore dict method, and the reason why you'd want to do this versus convert your Pandas DataFrame to a NumPy array is oftentimes you're interested in preserving the indices of your Pandas DataFrame. In this video, we've gone over how to convert Pandas DataFrames to NumPy arrays in Python dictionaries. The practicality of this is that sometimes certain libraries don't accept Pandas DataFrames as inputs to their methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), find (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Export pandas DataFrames](https://www.linkedin.com/learning/python-for-data-visualization-2023/export-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/export-pandas-dataframes?u=76281980&t=0)** - [Instructor] When working with Panda's DataFrames it's often a good idea to export them to either CSV or [[Microsoft Excel|Excel]] files. This is because it's a great way to share your results with others. In [[Pandas (Software)|Pandas]], you can export your DataFrame to a CSV file by using the to_CSV method. In this case, I have a relative path where inside my current working directory, there's a folder called data, and inside that folder is where I'm exporting the CSV file. The parameter index equals false, just means I don't want to export the Pandas DataFrames indexes. You can export your DataFrame to an Excel file by using the to_Excel method. And in this case, I have a relative path where inside my current directory, there's a folder called data, and then inside that folder is where I'm writing the Excel SX file. The index equals false parameter, just means I don't want to have the indexes from my DataFrame export to the file. And keep in mind, if you ever don't know what a method does, you can always look them up using the help command. In this case, I'm looking up the to_CSV method.
>
> **[1:14](https://www.linkedin.com/learning/python-for-data-visualization-2023/export-pandas-dataframes?u=76281980&t=74)** In this video, we've gone over how to export your Pandas DataFrames to CSV and Excel files. Keep in mind, it's also a good idea to check your exported files, in the sense that sometimes, when you export a file, it may not always be what you expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (3)
> **Env Vars:** csv (4)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)


### 3. Simplify Visualization with Matplotlib

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of Matplotlib](https://www.linkedin.com/learning/python-for-data-visualization-2023/basics-of-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/basics-of-matplotlib?u=76281980&t=0)** - [Instructor] In this video, we're going to learn about the Matplotlib library, which is a powerful tool capable of producing complex publication-quality figures with fine layout control in two or three dimensions. While this is an older library, so many libraries are built on top of it and use its syntax. The first thing we have to do is import the libraries we're going to use. We're going to utilize the [[Pandas (Software)|pandas]] and NumPy libraries to manipulate data in a format that's suitable for plotting. We're going to import matplotlib.pyplot as PLT, and PLT is just an alias for the matplotlib.pyplot module. And lastly, we're going to import the seaborn library, which is a wrapper for Matplotlib as SNS. Before we can graph data, we have to have data in a form that's suitable for graphing. So we're first going to import the car loan data into a pandas data frame. We're next going to look at the first five rows of the data frame as this is a good practice. Next we're going to check to make sure we don't have NANs in our data frame, as it is not easy to directly plot data that contains NANs. And to do this, we're going to use the info method. And as you can see, we have 60 entries in our data frame, and we have 60 non-null values for each column. In this video, we're going to graph month number on the X axis and interest paid and principle paid on the Y axis. But to first do that, we have to have our data in the form of NumPy array. And what this code over here does is I have my data frame, I'm using the LOC operator, I'm saying I want all the rows,
>
> **[1:36](https://www.linkedin.com/learning/python-for-data-visualization-2023/basics-of-matplotlib?u=76281980&t=96)** and I just want the month column. So this is a panda series, and I'm turning this panda series into a NumPy array by using the values attribute and assigning this entire thing to the month number variable. And similarly, I'm doing the same for the interest paid column and the principle paid column. Keep in mind, you can also check that the values attribute converts a column of values into a NumPy array by using the inbuilt type function. Once you have data in an appropriate format, you can begin to plot it. In this case, we're going to plot month number on the X axis and principle paid on the Y axis. As a reminder, if you don't know what a method does, you can always use the inbuilt help function. Now it is time for our first plot and we're going to do PLT.plot. And for our X axis we're going to have our month number. And for our Y axis, we're going to have our interest paid. And as you can see, it's not the prettiest plot. You can also plot another line on the same graph. So before we only graphed month number and interest paid, but we can also graph month number and principle paid. This is also not the prettiest plot. One way to make our plots more aesthetically pleasing is to choose a figure style. We'll use PLT.style.available to select an appropriate aesthetic style for a figure. The default style is not the most aesthetically pleasing. On this line, I'm doing PLT.style.available
>
> **[3:10](https://www.linkedin.com/learning/python-for-data-visualization-2023/basics-of-matplotlib?u=76281980&t=190)** and pressing shift enter to see the different styles I can choose from. The style of classic is very similar to what we've already plotted. However, the 538 style is more aesthetically pleasing. If you're coming from R, you can also use the GG plot style as you can see here. You can also use different styles like [[Tableau]] colorblind. You can also use the seaboard style, which is a wrapper for Matplotlib, as you can see here. In this video, we've gone over how to use Matplotlib.plyplot to make line graphs. And we saw how when you change style, you can make your graphs more aesthetically pleasing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Tableau]] (1)
> **Env Vars:** plt (5), sns (1), loc (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (4)
> **Best Practices:** good practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Set marker type and colors](https://www.linkedin.com/learning/python-for-data-visualization-2023/set-marker-type-and-colors?u=76281980)

#### [MATLAB-style vs. object syntax](https://www.linkedin.com/learning/python-for-data-visualization-2023/matlab-style-vs-object-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/matlab-style-vs-object-syntax?u=76281980&t=0)** - [Instructor] A potentially confusing part of the Matplotlib library is that it has two different styles of syntax. There's the MATLAB style, and this is a scripted interface designed to feel like MATLAB, where Matplotlib maintains a pointer to the current figure and sends commands to it. There's the object oriented syntax, and this is more often used in situations where you want more control over your figure. An important note is that you can and often will have plots that will be created through a combination of the MATLAB style and the object-oriented style. We'll start by looking at the MATLAB style syntax, and this typically starts by using the PLT plot command, where you have something in the x axis, you have something in the Y axis, and you have a bunch of parameters that you set. In this case, I'm setting the parameter C, which is color equal to K, which is the color black, and you can also have additional PLT dot plot commands to plot on top of the figure. And you can see the result here. The object oriented syntax is as follows. You have PLT subplots. In this case, I just want one plot, so I'm making n rows equal to one and n columns equal to one, and this returns a topple. And I'm topple unpacking the figure and the axes. And then from there, I'm just doing axes plot what I want in the X axis, what I want in the Y axis, and additional other parameters. Similar to the MATLAB style syntax, you can also plot additional things on the same plot.
>
> **[1:36](https://www.linkedin.com/learning/python-for-data-visualization-2023/matlab-style-vs-object-syntax?u=76281980&t=96)** It's important to note that you can and often will see the MATLAB style and the object oriented style used together. So in this case, I have the object oriented style, I have the MATLAB style, and I have the object-oriented style, and it still produces the same plot. This video showed that there's two separate styles of Matplotlib syntax. There's a MATLAB style and there's the object-oriented style, and that sometimes they're used in combination with each other.

> [!info]- Semantic Content
>
> **Env Vars:** matlab (8), plt (3)
> **Warnings:** important note (1), note that (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Set titles, labels, and limits](https://www.linkedin.com/learning/python-for-data-visualization-2023/set-titles-labels-and-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/set-titles-labels-and-limits?u=76281980&t=0)** - [Instructor] In this video, I'll show you how to create plot titles, labels, and limits. Plot titles and plot labels are very important to convey what you're graphing and plot limits are very important as, oftentimes, the default limits aren't always ideal with Matplotlib. The first thing we're going to do is we're going to go for the MATLAB style for how to set plot titles, labels, and limits. So here's a normal MATLAB-style plot. Notice in the graph that there's no title in the plot. There's no y label, there's no x label, and the limits could be a little bit better on the x-axis where it looks like the plot should start at one and should end at 60. To change the x limit and the y limit, you can do .xlim where you have your limit on the left and your limit on the right. To change your y limit, you can do .ylim, you can have your lower limit and you can have your upper limit, and you can do Shift + Enter. And obviously, this is not the most practical use of changing the y limit, as before, it looked a little bit better. You can also set your x label and y label. To set your x label, you can do .xlabel and the name you want for your x label. For your y label, you can do .ylabel and the name you want for your y label. And as you see here, we have something on our y-axis now and something on our x-axis.
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/set-titles-labels-and-limits?u=76281980&t=93)** To set the title, you can do plt.title and the name of your title. And as you can see, we have our title here now in addition to our y label and our x label. If you find that your x label, y label, or your title have too small of a font, you can always make it bigger by adjusting the font size. In this case, I clearly made it too big, so feel free to play around with the parameters, and you can continue to iterate on this almost indefinitely, and that looks a lot better. You can also change the size of your x ticks using .xticks and your y ticks using .yticks. So notice now that the title is too big, the x and y label is too big, as well as the x ticks and y ticks, so feel free to iterate. Graphing is a very iterative process. The object-oriented approach for changing the titles, the labels, and limits is very similar. Where I first have a graph, setting the x limits and the y limits is very similar to before. Where before I did plt.xlim, now I have axes.set_xlim, and I have axes.set_ylim for the y limits. Setting the x label and the y label is also a similar process to the MATLAB style. Where before I had plt.xlabel and plt.ylabel, now I have axes.set_xlabel and axes.set_ylabel.
>
> **[3:19](https://www.linkedin.com/learning/python-for-data-visualization-2023/set-titles-labels-and-limits?u=76281980&t=199)** Similarly, before with the MATLAB style, I had plt.title and now I have axes.set_title. And as before, you can change the font size by adding the font size parameter. One difference with the object-oriented style is that you have to do axes.tick_params to change the tick font size. In this case, I'm changing the tick font size for the x-axis, making them font size of 20, in this case, it's called label size. And for the y ticks, I simply change axes to make it equal to the string y and make the label size equal to 20. In this video, I went over how to change the titles, labels, and limits for both Matplotlib styles of syntax. The benefit of this is that having labels, limits, and titles can make your graphs more interpretable and easier to understand.

> [!info]- Semantic Content
>
> **Code Identifiers:** set_xlim (1), set_ylim (1), set_xlabel (1), set_ylabel (1), set_title (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** matlab (4)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Add grids](https://www.linkedin.com/learning/python-for-data-visualization-2023/add-grids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/add-grids?u=76281980&t=0)** - [Instructor] In this video, we'll go over how to make grid lines in Matplotlib. Grid lines can't be visually appealing, but they could also help you determine fine differences between two quantities in a graph. The first thing we're going to do is we're going to create a plot without grid lines where we have month number in the x-axis, interest paid in the y-axis, and then we have a secondary y-axis where we have month number in the x-axis and principal paid in the y-axis, and we're going to plot it. This is the graph without grid lines. So now let's see how it looks with grid lines. In the MATLAB-style syntax in Matplotlib, you can add grid lines by using .grid. And as you can see, we have grid lines here. Keep in mind, you can also only have horizontal grid lines by specifying axis equals y and you can also only have vertical grid lines by specifying axis equals x. If you want more customization, you can also change the color of your grid lines. You can change the transparency of your grid lines. And keep in mind for alpha, lower means more transparent and up to one means not transparent at all. You can also change the line style of your grid lines, and this is not going to look too good because the green seems to really clash with the blue here. You can also add grid lines using the Matplotlib object-oriented syntax where you just do axes.grid. You can also specify that you only want
>
> **[1:32](https://www.linkedin.com/learning/python-for-data-visualization-2023/add-grids?u=76281980&t=92)** horizontal grid lines by doing axis equals y. You can also specify that you just want vertical grid lines by setting axis equals to x. And similar to the MATLAB-style syntax, you can also specify what color you want your grid lines to be, how transparent you want them, and the line style. Keep in mind if you're finding setting grids to be tedious, use a style that already has grids in them by default. For example, the seaboard style has white grid lines by default as you can see here. Matplotlib allows you to set grid lines to make your graph more visually appealing and to help distinguish quantities across the graph. It's also important to keep in mind that just because you can set grid lines doesn't mean you have to. You can also use a style of Matplotlib that has them in by default.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (4)
> **CLI Commands:** make (2)
> **Env Vars:** matlab (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Create legends](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-legends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-legends?u=76281980&t=0)** - [Instructor] In this video, we're going to learn about plot legends. Plot legends assist in assigning meaning to your various plot elements. It's therefore important to make sure your legend doesn't cover up your plot elements. We'll first start by utilizing Matplotlib's MATLAB-style syntax to create a plot legend. As you see in this image, the legend is not in an ideal location. You can use the lock parameter to change where your legend is located. In this case, I'm telling it to go to the center right. It's important to note you can also move your legend outside the plotting area. What the code here is doing is I'm moving the legend slightly outside to the right of my plot, because all the way to the right would be 1.00, and I'm moving it all the way at the base of my plot. And as you see here, my legend is outside the plotting area. Keep in mind, you can also use Matplotlib's object-oriented syntax to create a legend. In the case of the code over here, I'm doing axes.legend. Similar to Matplotlib's MATLAB-style syntax, the object-oriented syntax also allows you to move the legend's location. As you see here, I have the legend in the center right, and over here, just like before, I have it outside the plot. In this video, we learned some tools to not only create a legend in Matplotlib, but also to change its location.

> [!info]- Semantic Content
>
> **Env Vars:** matlab (2)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Versions:** 1.00 (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Save plots to files](https://www.linkedin.com/learning/python-for-data-visualization-2023/save-plots-to-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/save-plots-to-files?u=76281980&t=0)** - [Instructor] In this video, we're going to go over how to save your plots to files. Saving your visualizations outside your Jupyter Notebook is important as it allows you to show your visualizations to others. Equally important is checking your saved visualization because there's always a possibility the graph doesn't look the same in the notebook as in the image file. So the first thing we're going to do is for this notebook, we're going to use a seaborn style in Matplotlib. This will make our graph more aesthetically pleasing. Using the MATLAB style of Matplotlib, we're going to save our file using plt.savefig. This is where we're saving our image. This is our DPI, you can think of it as resolution, and it's really important now that we have this outputted image in our Jupyter Notebook, let's now see how the image saved. Let's start by looking inside the Images folder for the filename MS Legend Cutoff. You'll see that the legend is cut off here. This is obviously a problem. You'll also notice that it looks like month is almost cut off here. Let's now learn how to fix this. So we're going to head back over to our Jupyter Notebook. The way we're going to solve this problem is we're going to utilize the plt.layout method. What this does is it automatically adjusts subplot parameters so that the subplot fits into the figure area. And we run the same code before with this new addition. And here we have the figure. Now looking inside the Images folder, we now see that the image is not cut off.
>
> **[1:36](https://www.linkedin.com/learning/python-for-data-visualization-2023/save-plots-to-files?u=76281980&t=96)** Now there's another way to do this and that's by using the object-oriented Matplotlib syntax. And the only thing that differs is instead of doing plt.savefig, we now have fig.savefig. And in this image, it'll be cut off just like we had before. So inside the Images folder, we can look for Object Legend Cutoff. And as you see here, the legend's still cut off and the month is still cut off. So let's fix that. The way to fix this is by doing fig.tight_layout. Let's go ahead and run that. And now you'll notice in our Images folder, the objectlegend.png file doesn't have anything cut off. And here's the image. It looks like nothing's cut off. And that's it, the next time you want to export your images, consider using some of these techniques.

> [!info]- Semantic Content
>
> **Tools:** jupyter (3)
> **Env Vars:** matlab (1), dpi (1)
> **Analogies:** think of it as (1), just like (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** tight_layout (1)
> **Speakers:** - [instructor] (1)

#### [Create plots with Matplotlib wrappers](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-plots-with-matplotlib-wrappers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-plots-with-matplotlib-wrappers?u=76281980&t=0)** - [Lecturer] Matplotlib is a very popular data visualization library, but definitely has its flaws. So in this video, we'll learn about two Matplotlib wrappers, [[Pandas (Software)|pandas]] and seaborn. Matplotlib defaults are not ideal. There's no grid lines, there's a white background, et cetera. The libraries also relatively low level, so doing anything complicated takes quite a bit of code. In this video, we are going to make a more complicated visualization called a boxplot to show how helpful it is to work with the Matplotlib wrappers, pandas and seaborn. But first, we have to know what a boxplot is. And a boxplot is a standardized way of displaying the distribution of data based on a five-number summary. The "minimum", the first quartile, the median, the third quartile, and the maximum. A boxplot can tell you by your outliers and what their values are. It can also tell you if your data is symmetrical, how tightly your data is grouped, and if and how your data is skewed. If you want to learn more about boxplots, you can learn more here. The data we're going to use to demonstrate boxplots is the Breast Cancer Wisconsin Diagnostic Data Set. The goal of the visualization is to show how the distributions for the column area_mean differs for benign versus malignant diagnosis. So the first thing have to do is you have to load our data into a pandas data frame. So here is a relative path and inside the data folder, there's the Wisconsin Breast Cancer CSV file. And we're putting this into a pandas data frame, cancer_df. As we're looking at the first five rows of the dataset,
>
> **[1:34](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-plots-with-matplotlib-wrappers?u=76281980&t=94)** notice how we want to find how the column area_mean differs for diagnosis of malignant versus benign. If we're looking at the distribution of the dataset in terms of diagnosis, notice that we have a significant amount of benign and malignant cancer diagnosis. Before we can make a boxplot using Matplotlib, we have to isolate our malignant diagnosis and our benign diagnosis. And what the code over here is doing is if a filter for malignant and have a filter for benign, and so this and this, they're just pandas series for area_mean for benign diagnosis and malignant. And what the values attribute does is it just turns this pandas series into a NumPy array. And then from here, you do plt.boxplot. You have one of your NumPy arrays, you have your other, and then you have a label for each of your NumPy arrays. As you see here, we don't have the prettiest boxplot, but it's pretty clear there's a significant difference between malignant and benign in terms of area mean. You can also create a boxplot using pandas, and one reason why you might want to use pandas is that it requires less code. For the code over here, all you have to do is have the name of your data frame. In this case, cancer_df. Use the boxplot method. Specify you want to look at the area_mean column and you want to separate it out by diagnosis.
>
> **[3:11](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-plots-with-matplotlib-wrappers?u=76281980&t=191)** As you see in this image, it was less code to create the boxplot. It looks like there's something weird going on over here. And one important point to mention is that sometimes even if you're using pandas as a wrapper around Matplotlib, oftentimes you can also incorporate Matplotlib syntax to adjust the final plot. And the code below removes the titles using pure Matplotlib syntax. You can also make boxplots using the seaborn library, and seaborn can be seen as a wrapper on top of Matplotlib. And seaborn's website lists a bunch of advantages of using seaborn, including close integration with pandas [[Data Structures]], a dataset oriented API for examining relationships between multiple variables, specialized support for using categorical variables to show observations or aggregate [[Statistics]], concise control over Matplotlib figure styling with several built-in themes, and tools for choosing color palettes that faithfully reveal patterns in your data. The first thing you have to do if you want to use seaborn is import seaborn. I'm importing seaborn as SNS. And over here, I'm using the boxplot method where I'm passing in the cancer data frame into the parameter data and I'm looking at the diagnosis column versus the area mean column. And I'll press Shift + Enter. And then what you see here is that unlike the plots from before, this is more colorful, but perhaps more importantly, the malignant and the benign boxplots are closer together
>
> **[4:45](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-plots-with-matplotlib-wrappers?u=76281980&t=285)** so it's easier to make a comparison between the two of them. In this video, I showed you how to use two Matplotlib wrappers, pandas, which is normally used for [[Data Manipulation]], can also be used for data visualization, and seaborn, which makes plotting in Matplotlib a lot easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (11), [[Data Structures]] (1), [[Statistics]] (1), [[Data Manipulation]] (1)
> **Code Identifiers:** area_mean (4), cancer_df (2)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** csv (1), api (1), sns (1)
> **Definitions:** is a  (3)
> **Speakers:** - [lecturer] (1)


### 4. Customize Visualizations with Matplotlib

[↑ Back to Table of Contents](#table-of-contents)

#### [Create heatmaps](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-heatmaps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-heatmaps?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to create heatmaps using matplotlib and Seaborn, a matplotlib wrapper. So what is a heatmap? A heatmap is a graphical representation of data where values are depicted by colors. Heatmaps allow you to easier spot where something happened and where it didn't. Consequently, what we choose for our color palette is important. Two types of color palettes are sequential, and this is appropriate when data ranges from relatively low values to relatively high values. There's qualitative, and this is best when you want to distinguish discrete chunks of data that do not have inherent ordering. To create a heatmap, we first have to import our libraries. We're going to make sure matplotlib is inline, which means that our graphics will display inline in the notebook. We're going to import NumPy as np, as well as [[Pandas (Software)|Pandas]] as pd. To make a heatmap, we first have to import our libraries. We're importing matplotlib, seaborn, NumPy and Pandas. The data that we're going to load is the data from a confusion matrix, which is a table that is often used to describe the performance of a machine learning classification model. It tells you where your predictions went wrong. This particular table is derived from predicting labels for digits from zero to nine. For an understanding of the data, you can think of your columns as predictions for zero, for one, two, three, et cetera. You can think of your rows as their actual values. So this row would be actual value of zero, actual value of one, two, three, et cetera.
>
> **[1:37](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-heatmaps?u=76281980&t=97)** So for this number, this is when we predicted a zero, and we predicted this 37 times, and the actual value was zero. For this column, this is when we predicted a one, and we predicted it correctly 39 times, because the actual value is one here. However, we have some misclassifications where we've made some bad predictions. In this case, three times we predicted an eight, when it was actually a one. To create a heatmap with Seaborn, you do .heatmap, you import your data. In this case, I want annotations, and you'll see what that looks like in a second. I'm specifying my color map. In this case, I'm choosing a sequential color map because my data ranges from relatively low values to relatively high values. I'm setting my X and Y labels, and here's our color map. 37 times we predicted a zero when it was actually a zero. 39 times we predicted a one when it was actually a one, but a couple times, we definitely did mess up, where we predicted a one when it was really an eight. This heatmap allows us to easily pick out our higher numbers, like this 51, from our lower numbers, like these zeros. This is because we have a sequential color palette. The only difference with the code here from before is before, we had a sequential color map that was called blues. In this case, we have a qualitative color map, which is called pastel.
>
> **[3:08](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-heatmaps?u=76281980&t=188)** And as you see here, it's harder to determine which is a higher number based on color alone using this qualitative color map. It's important to keep in mind that you can also create a heatmap using pure matplotlib. This just happens to be a lot of code, and as you see the image, even though we had a lot of code, there's still other things that we could change to make it equal to our Seaborn color map. For example, the color here is black instead of white, which makes it harder to distinguish this 51 from this dark blue. In this video, we've learned how to create heatmaps using Seaborn and matplotlib. It's important to note what you choose for your color palette can make your visualization more or less interpretable. Additionally, sometimes it's easier to use a matplotlib wrapper like Seaborn, as it involves less code, and it's easier to make it aesthetically pleasing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Definitions:** is a  (4), means that (1), is called (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Create histograms](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-histograms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-histograms?u=76281980&t=0)** - [Narrator] In this video, we'll learn how to create histograms using Matplotlib. When first evaluating a dataset, it's a common practice to create histograms to explore your data, as it can give you a general idea of what your data looks like. A histogram is a summary of the variation in a measured variable. It shows the number of samples that occur in a category. A histogram is a type of frequency distribution. Histograms work by binning the entire range of values into a series of intervals and then counting how many values fall into each interval. While the intervals are often of equal size, they're not required to be. If you look at our import statements, we have Matplotlib inline. We're going to import [[Pandas (Software)|pandas]] as pd, as not only can we manipulate data with pandas, we'll see how to create a histogram using the plotting functionality of the Pandas library. We're also going to import matplotlib.pyplot as plt. And even though we'll be creating a histogram through the plotting functionality of the Pandas library, you can always use base matplotlib to tune your figure. The data that we'll use to demonstrate histograms is the house sales in King County USA dataset. For convenience, I put a CSV file of this dataset into your data folder. We're going to load this data into a Pandas DataFrame by using pd.read_csv, and here's our relative path. And as you can see, we have various features of a home in this data set. And what we'll be doing is visualizing a histogram of the price column. To do this, we can use the hist method. And as you can see, this is not very readable.
>
> **[1:35](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-histograms?u=76281980&t=95)** One way to fix this is by rotating our x tick labels. To do this, we can do plt.xticks and specify that we want the rotation to be 90 degrees. And as you can see, we no longer have our x tick labels overlapping. Alternatively, you could have changed the default plot style, as oftentimes, different plot styles have different defaults. And in this case, we're specifying the plot style to be seaborn. And as you can see, we don't have overlapping x tick labels. One problem with our current visualization is that we seem to have a lot of white space. This is most likely due to outliers. Oftentimes, you're only interested in a subset of your data. Say for example, you're only interested in visualizing a subset of your data of homes under $3 million. To remove homes under $3 million, we're going to do df.loc and specifying that we want the price column and that we only want homes under $3 million. We're going to assign this Pandas series of true-false values to the variable price filter. From there, we can utilize our price filter by doing df.loc, inserting our filter of true and false values, specifying that we only want to look at the price column, and then creating a histogram off it. As you can see, we have less white space in our figure. One important thing to keep in mind
>
> **[3:08](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-histograms?u=76281980&t=188)** is that data visualization is an iterative process, so there's always something else you can tune. Say, for example, I want to be able to distinguish my bars from each other. You can do this by specifying the edge color. In this case, I want to be black. As you can see here, I can now distinguish my bars from each other. You can also keep on tuning your graph to be more and more visually appealing. Just make sure that it's worth the effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** usa (1), csv (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** read_csv (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)

#### [Create subplots](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-subplots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-subplots?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to create subplots using Matplotlib. It is often useful to compare different subsets of your data side by side. To demonstrate this, we're going to visualize images. We're going to have our figures appear inline in the notebook, so we're specifying inline. We're going to import [[Pandas (Software)|pandas]], NumPy, and Matplotlib. The next thing we have to do is you have to load our dataset, and our dataset is the digits dataset from scikit-learn. They have arranged into a CSV file for convenience. The dataset consists of pixel intensity values for 1,797 images that are eight-by-eight pixels. This means that the dataset has 64 total values per image, and each image is labeled with a number from zero to nine. We're going to load our dataset into panda's data frame by using the read_csv method. With any dataset, it's always good to check the first couple rows to make sure everything loaded properly. Columns zero to 63 are pixel intensity values for an eight-by-eight image. The label column is what the image is supposed to be. Each row in the dataset represents one image. Before we can create a subplot, it's a good idea to know how to visualize one image. To get all the column names for the pixel intensity values, we're going to utilize the df.columns attribute, and what this slice does is it says we want every column except for the last column, which happens to be our labels. The next thing we're going to do is we're going to do df.lock. We're going to specify that we want the first image
>
> **[1:33](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-subplots?u=76281980&t=93)** in our data dataset, and we want all of its pixel intensity values. I should note that this is not yet the correct form for viewing the images. As you can see, we don't yet have an eight-by-eight array. A lesson you can take from this is that isn't important. Keep in mind that just because a dataset is stored in a certain way doesn't mean it was meant to be viewed that way. To fix this problem, we're going to utilize the reshape method to reshape it into an eight-by-eight array. As it's not easy to understand pixel intensity values by looking at an array, let's visualize the image. To do this, we're going to utilize the imshow method, and we're going to specify that we want a gray color map. As you see here, this image looks like a zero. The reason why it looks a little blurry is because it's only an eight-by-eight image, We're now going to create a five-by-five subplot. The way to create a subplot is by utilizing the dot subplot command, specifying how many rows you want, how many columns you want. The one here is an index, so out of our five plots, this is saying that this is the first one. The next thing we have to do is we have to create our image values. This bit of code are the image values for our first image, as you can see here. What this code is doing is we're specifying that we want the first image and we want its label, and we are assigning it to the variable image_label. And then from here, we're visualizing our image, and as before, we're reshaping our array
>
> **[3:06](https://www.linkedin.com/learning/python-for-data-visualization-2023/create-subplots?u=76281980&t=186)** to be eight-by-eight. Next, we're going to insert a title on our plot, so that we know what the image is supposed to be of. From here, the next bit of code says that this is going to be the second image in our subplot. We also want the image at index one. We want the label for the image at index one, and similarly, we're going to do the same thing for the third image, the fourth image, and the fifth image. And as you see here, we have five plots side by side. As you've probably noticed in the code, we seem to have a lot of duplication of effort. Let's eliminate that with a for loop. In this code, what range is doing is in the first iteration, zero is assigned temporarily to the variable index. We're doing one plus our index, which happens to be one, so we're saying that this is the first subplot. What this next code is doing is it's saying that we want all the pixel intensity values for the row with the index label of zero. In the next iteration of the loop, we're taking one, and we're temporarily assigning it to the variable index. We're doing one plus one, which is two, which is saying that this is the second subplot. And what this next bit of code is doing is it's saying that we want all the pixel intensity values for the index label of one. A similar process happens for the [[Representational State Transfer (REST)|rest]] of the for loop. As you see here, we now have our images side by side with a lot less code. In this video, we've learned not only how to visualize images, but also how to visualize images side by side by using subplots. It's important to note that there are cases where we can use a lot less code by utilizing for loops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Warnings:** note that (2), keep in mind (1)
> **Code Identifiers:** read_csv (1), image_label (1)
> **Definitions:** means that (1), is an  (1)
> **File Paths:** df.lock (1)
> **CLI Commands:** make (1)
> **Env Vars:** csv (1)
> **Cross-References:** in the next (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-for-data-visualization-2023/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-for-data-visualization-2023/next-steps?u=76281980&t=0)** - I'd like to congratulate you on finishing the course. I hope you've enjoyed taking this course as much as I've enjoyed creating and teaching it. As you probably know, your learning doesn't stop here. [[Python (Programming Language)|Python]] is a very expansive topic, and there's a lot of resources available that can help you keep learning. Here are a few resources to help with your journey. First, check out the Matplotlib gallery. Here you can find a whole host of plots you can create. Next, check out interactive data visualization libraries like Folium and Boca. Also, be sure to check out my blogs or visit my YouTube channel. On my blog, I cover everything from installations to basic Python to advanced machine learning. If you're looking for a [[Data Science]] job, I encourage you to check out my blog post titled "How to Build a Data Science Portfolio" to help you on your way. And finally, stay in touch. You can connect with me on [[LinkedIn]]. I'd love to hear from you. So that's it. Thanks again for watching this course. Now get out there and go create compelling day visualizations. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Science]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)


## Instructor

- [[Michael Galarnyk]]
- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Visualization

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Visualization]]
← [[Power BI Data Dashboards]] | **6 of 7** | [[Visualizing Advanced Charts and Graphs]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Visualization]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Visualization
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Data Visualization
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Visualization
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)

---

[↑ Back to top](#)