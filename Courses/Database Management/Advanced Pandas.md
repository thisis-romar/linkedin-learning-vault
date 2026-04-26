---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-pandas-29724107
url: "https://www.linkedin.com/learning/advanced-pandas-29724107"
duration_minutes: 62
duration: 1h 2m
level: Advanced
updated: 7/30/2025
learners: 15826
skills:
  - Pandas (Software)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE_2nqqsEL3YA/learning-public-crop_675_1200/B4DZg98QqGHAAc-/0/1753385864731?e=2147483647&amp;v=beta&amp;t=K9lXeGO78NRb4L8Qpj0FDdJ3Rkt628QLvVNQIg7m0DE"
linkedin_topic: Database Management
learning_paths:
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Python Data Structures- Trees]]'
path_nav: '[{"path":"Master Python for Data Science","position":8,"total":8,"prev":"Python Data Structures- Trees","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/pandas-software
status: not-started
created: 2026-04-21
---

![Advanced Pandas](https://media.licdn.com/dms/image/v2/D4D0DAQE_2nqqsEL3YA/learning-public-crop_675_1200/B4DZg98QqGHAAc-/0/1753385864731?e=2147483647&amp;v=beta&amp;t=K9lXeGO78NRb4L8Qpj0FDdJ3Rkt628QLvVNQIg7m0DE)

# Advanced Pandas

> If you've worked in Python, you're likely familiar with the basics of pandas. In this advanced course, instructor Brett Vanderblock shares how you can take advantage of the advanced functions of pandas—such as working with dates, dealing with missing data, merging DataFrames, and more—to work more effectively with your data. First, Brett introduces you to DataFrames, identifies the top functions i

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107) | 1h 2m | Advanced | 16K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Brett Vanderblock]]
- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Pandas (Software)

## Table of Contents

### Introduction

#### Take pandas to the next level
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=0)** - [Brett] Python without Pandas is like skiing without skis.
>
> **[0:03](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=3)** You could do it, but it'd be a heck of a lot harder.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=6)** In this course, we're going to take Pandas from the basics to the next level.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=11)** I am Brett Vanderblock, data scientist, and Pandas has been there every step of my journey to becoming a data scientist and producing insightful analytics.
>
> **[0:20](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=20)** We'll be covering the most critical functions Pandas has to offer, from transforming data frames to advanced calculations, to techniques for rapid exploratory data analysis.
>
> **[0:31](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=31)** We'll also take a peek beyond Pandas for geospatial and big data processing.
>
> **[0:37](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=37)** I want you to get the most out of your data.
>
> **[0:40](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=40)** Now let's dive in to Advanced Pandas.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - [brett] (1)


### 1. From Beginner to Advanced pandas

#### Getting started with pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=0)** - [Instructor] Import pandas as pd.
>
> **[0:02](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=2)** This is probably the single most common line of Python code you'll find in data science, and there's a reason for that.
>
> **[0:09](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=9)** pandas is the easiest and most intuitive Python package for dealing with your data.
>
> **[0:15](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=15)** With it, you can transform, clean, visualize, and extract insights from your data with relative ease.
>
> **[0:23](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=23)** Throughout this course, we'll explore the most fundamental aspects of pandas to make your work flow more easily and efficiently.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=32)** Then, we'll expand to more advanced applications of pandas and showcase a few other packages related to pandas that can take your work to the next level.
>
> **[0:42](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=42)** Depending on your Python distribution, you may already have the pandas package installed.
>
> **[0:47](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=47)** If not, there's two options to install the package.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=51)** You can PIP install pandas via command line, or, if using the Conda installer, conda install pandas.
>
> **[0:59](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=59)** This course consists of Jupyter Notebooks, like the one you see here, and requires a Python installation.
>
> **[1:07](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=67)** If you don't have Jupyter or Python, I recommend you download the distribution from Anaconda.
>
> **[1:13](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=73)** The link for this download is available here.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (1), make (1), pip (1)
> **Tools:** jupyter (2), command line (1), anaconda (1)
> **Prerequisites:** install (3)
> **Env Vars:** pip (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Intro to DataFrames using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=0)** - [Instructor] The most fundamental aspect of pandas is the DataFrame.
>
> **[0:03](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=3)** This is how your data is stored, and it's a tabular format with rows and columns, as you'd find in a spreadsheet or a database table.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=11)** So before we dive into some more advanced pandas topics, let's review the DataFrame concept.
>
> **[0:17](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=17)** After importing pandas as pd, we're going to create a dictionary called scores.
>
> **[0:22](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=22)** Now, a dictionary is a Python structure which stores key-value pairs.
>
> **[0:27](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=27)** In this dictionary, the keys are name, city, and score, and the values are lists, as denoted by the square brackets, which map to their corresponding key.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=39)** After running this cell, we're going to turn this dictionary into a pandas DataFrame using the DataFrame function.
>
> **[0:46](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=46)** Note the capitalization of the F in DataFrame.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=51)** Great, now let's see our data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=54)** Here, you can see a table with name, city, and score as column headers and three rows of corresponding data.
>
> **[1:01](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=61)** Each column is a series, and notice the values zero, one, and two to the left.
>
> **[1:07](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=67)** These are the index of our DataFrame and are useful for referencing and subsetting our data.
>
> **[1:17](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=77)** If we wanted to just return one column in our DataFrame, the notation is your DataFrame and then the column name or names in square brackets.
>
> **[1:27](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=87)** Here let's take a look at score.
>
> **[1:31](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=91)** Great.
>
> **[1:32](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=92)** Note in this example, you can also call df.score to return the same result.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=99)** Similarly, you can also create new columns in your DataFrame by passing a new column name into the square brackets and assigning it.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=107)** Here, we're creating a new column that combines the name and city columns.
>
> **[1:53](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=113)** Now, let's say we wanted to subset our data to only show those folks with scores above, say, 90.
>
> **[2:00](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=120)** To do that, we can create a Boolean expression which returns true for scores greater than 90 and only return those records where this condition is true.
>
> **[2:11](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=131)** After running, we returned a DataFrame with just Japhy and Zosa's records.
>
> **[2:17](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=137)** Also note our new column name_city.
>
> **[2:22](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=142)** All this only scratches the surface of what you can do when your data is in a DataFrame, but this is an excellent start for us to build on for future lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), python (1)
> **Code Identifiers:** name_city (1)
> **Speakers:** - [instructor] (1)

#### Top functions using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=0)** - [Instructor] As you use Pandas, you'll find there's certain functions that prove their worth time and time again.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=6)** In this lesson, we'll cover some of the most important functions that you can use to get more from your data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=12)** Pandas is very flexible in that you can import data from a wide variety of data sources, including CSVs, Excel files, JSONs, databases, parquet files, you name it.
>
> **[0:25](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=25)** For this lesson, we'll use Pandas' read CSV function to import the Iris data set as a data frame.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=32)** This is a common sample data set for practicing data science.
>
> **[0:36](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=36)** Import Pandas as PD.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=39)** Next, we'll read the Iris CSV into a data frame called Iris.
>
> **[0:45](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=45)** Data frames have an attribute called shape, which tells us the dimensionality of our data.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=51)** By calling Iris.shape, we can see the number of rows and columns that our data frame has.
>
> **[0:59](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=59)** There you go, we have 150 rows and five columns in our data.
>
> **[1:03](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=63)** To preview our data, the head function will return the top rows of our data frame.
>
> **[1:09](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=69)** Let's check out the top three rows of the Iris data.
>
> **[1:13](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=73)** You can see this data contains measurement data for different Iris species.
>
> **[1:18](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=78)** Similarly, you can also view the bottom rows with the tail function.
>
> **[1:28](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=88)** Now, when working with data in Pandas, you'll find that the data types that Pandas assigns to your data is important and will influence what operations you can perform.
>
> **[1:38](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=98)** I've found Pandas to be pretty intelligent in how it assigns data types, but you'll want to check to be sure.
>
> **[1:45](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=105)** To do this call the dtypes attribute on your data frames.
>
> **[1:51](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=111)** We see two data types represented in our data frame, float for all the measurement data and object for the species.
>
> **[2:00](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=120)** Often when using Pandas, you'll want to subset your data.
>
> **[2:04](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=124)** Loc allows you to subset your data based on index labels, so either the row indexes or column names.
>
> **[2:11](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=131)** Iloc subsets by position, so the row number or column order.
>
> **[2:16](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=136)** So here we're going to subset our data frame based on row indexes three, four, and five, which are the fourth through sixth rows of our data.
>
> **[2:26](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=146)** Note, indexing begins at zero.
>
> **[2:32](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=152)** We can also return a single cell value by passing a row and column name separated by a comma.
>
> **[2:40](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=160)** This returns 4.6, which is the measurement for sepal_length for the row at index three in our data frame.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=167)** Using iloc, we can return the same value by referencing the same row index of three, but a column index of zero.
>
> **[3:02](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=182)** Often after you've done a whole host of data transformation with Pandas, you want to export your data frame for analysis or visualization.
>
> **[3:11](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=191)** A handy way to do this is the to CSV function.
>
> **[3:15](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=195)** Note you may want to include index equal to false, so the index isn't included in your CSV.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=202)** Great, this will have generated a CSV named iris-output in your working directory.
>
> **[3:28](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=208)** These functions are so beneficial in data analysis, and if you aren't using them currently, I highly recommend you give them a try.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), try. (1)
> **Env Vars:** csv (5)
> **CLI Commands:** find (2)
> **Code Identifiers:** sepal_length (1)
> **Versions:** 4.6 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Configuring options using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=0)** - [Instructor] So another Pandas feature I want you to take advantage of is to configure your own options.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=6)** Pandas has an option system which allows you to customize how the package works for you.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=11)** Most often, this can be useful to change how results are displayed in Pandas.
>
> **[0:16](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=16)** So here's an example.
>
> **[0:18](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=18)** We'll start with a sample data frame of the top three nations in 2018 by global carbon dioxide emissions.
>
> **[0:30](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=30)** The first option which comes in handy is to configure the maximum row size to display for a Pandas data frame.
>
> **[0:37](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=37)** If we set the max row size to two, here's what we get.
>
> **[0:42](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=42)** So you see two rows displayed separated by an ellipses.
>
> **[0:46](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=46)** That's what this option does.
>
> **[0:48](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=48)** You can either use it to limit the screen space your displayed data frames take up, or conversely to expand the row size to reveal more of your data.
>
> **[0:57](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=57)** Similarly, the max columns display option will reveal or hide columns.
>
> **[1:03](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=63)** I find this most useful when viewing the head of a data frame that has a lot of columns as Pandas will truncate these by default.
>
> **[1:12](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=72)** Now we see another set of ellipses between our first and third columns.
>
> **[1:16](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=76)** Another trick worth checking out is to suppress scientific notation for displaying floats.
>
> **[1:22](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=82)** You'll notice the scientific notation makes it difficult to readily compare carbon dioxide emissions figures in our table.
>
> **[1:29](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=89)** By modifying the float_format option, you can display these values normally, and even add in a comma as a thousands separator.
>
> **[1:40](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=100)** So there you have it.
>
> **[1:41](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=101)** Now you've got one more trick up your sleeve by customizing your options in Pandas.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Code Keywords:** default. (1)
> **Code Identifiers:** float_format (1)
> **Speakers:** - [instructor] (1)


### 2. Advanced Calculations

#### Data type conversions using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=0)** - [Instructor] One area where you might encounter some hurdles with Pandas is dealing with data types.
>
> **[0:05](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=5)** Pandas is generally pretty good at assigning proper data types, but nonetheless, you'll find many instances when you need to convert data types.
>
> **[0:15](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=15)** In this lesson, we'll leverage the planet's dataset as it has a good variety of data types.
>
> **[0:21](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=21)** After importing Pandas, we'll read the planet's data as a CSV.
>
> **[0:28](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=28)** Now let's have a peek at the data.
>
> **[0:31](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=31)** From looking over the data frame, you can probably infer what the data type assignments will be, but to be sure we can access the D types attribute of planets.
>
> **[0:43](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=43)** Now we see data types varying from an object to integers to floats.
>
> **[0:48](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=48)** How Pandas handles your data depends on the data types you've designated.
>
> **[0:53](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=53)** For example, we'll use the mean function to return the average for all float and integer values in our dataset.
>
> **[1:01](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=61)** Everything looks pretty good, though you might question whether it really makes sense to take an average of a year as we've done here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=69)** Let's see how different data types interact.
>
> **[1:12](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=72)** Here we'll divide an integer column by a float.
>
> **[1:17](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=77)** The result is a float.
>
> **[1:19](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=79)** Great. That's what you'd hope for.
>
> **[1:21](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=81)** We also have the ability to change data types using the AS type function.
>
> **[1:27](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=87)** For instance, we can convert the integer value of the number column to a float.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=94)** It's useful to see what happens when you convert a float to an int.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=99)** In this case, we've lost the decimal point, and it's worth noting that this approach would effectively round down any floats as you convert to integers.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=109)** We could also convert the year to an object by calling the As type STR for string.
>
> **[1:57](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=117)** To take advantage of the date time data type in Pandas, we can convert our integer year value to a date time using to date time.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=127)** Then we specify how the data is currently formatted.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=132)** So you see here, our integer year has been converted to an actual date time corresponding to the first day of the year.
>
> **[2:20](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=140)** I want you to unlock the full potential of Pandas, but before you can, there's a good chance you'll encounter some data type issues and now you'll be ready to solve them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), for. (1), case, (1)
> **Env Vars:** csv (1), str (1)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with strings using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=0)** - [Instructor] Text data can be an incredibly rich source of data for analysis, and Pandas is well equipped for working with cleaning and processing text data in string format.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=11)** Let's dive into some useful methods.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=14)** For this lesson, we'll start with a series of three names, organized last comma first, and you might notice some inconsistencies in how these names are stored.
>
> **[0:25](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=25)** In Pandas, the string accessor, denoted by .str, enables a host of useful string transformations.
>
> **[0:34](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=34)** Let's start by replacing that semicolon.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=39)** Great.
>
> **[0:40](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=40)** You can see the replace function easily replaced the semicolon with the comma.
>
> **[0:49](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=49)** Now, another string operator that can be useful is calling the length, the number of characters of each string in your series.
>
> **[0:58](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=58)** Great.
>
> **[0:59](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=59)** So we see the first two names have 14 characters apiece, and the third name has 10 characters.
>
> **[1:05](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=65)** Now, I noticed some trailing and leading spaces in the names, so this is a great opportunity to use strip to remove those spaces.
>
> **[1:14](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=74)** We'll also return the length so we can see the difference.
>
> **[1:17](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=77)** Looks like we trimmed a leading or trailing space off of each of the first two names.
>
> **[1:23](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=83)** For consistency, we'll also go ahead and convert to entirely lowercase using the .str.lower.
>
> **[1:31](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=91)** Note .str.upper acts exactly as you think it might.
>
> **[1:37](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=97)** Next, I want to reverse the order of first and last name.
>
> **[1:41](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=101)** Thankfully, we have a comma delimiting first and last, so we can use str.split to separate these two.
>
> **[1:51](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=111)** This creates what is known as a tuple of last name, then first name for each of our names.
>
> **[1:58](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=118)** This next trick is a clever method using list comprehension to swap the order of last name and first name for each name.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=127)** Our last step is to, again, join first and last name separated by a space.
>
> **[2:13](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=133)** This gives us a list of names in order of first, then last, and it's all been tidied up a bit.
>
> **[2:20](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=140)** Now, when you encounter text data in your work, I encourage you to put these Pandas string functions to work for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)

#### Working with dates using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=0)** - [Instructor] Time series data is one of the most interesting and essential types of data that we work with, but dates can be tricky to deal with.
>
> **[0:08](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=8)** Thankfully, Pandas has some excellent methods that we can put to use.
>
> **[0:12](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=12)** To get started, we're going to generate a series of dates.
>
> **[0:17](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=17)** The period_range function in Pandas allows us to do just that.
>
> **[0:21](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=21)** By specifying the starting date, followed by the frequency and the number of periods, we return a series of dates which we'll pass into a data frame.
>
> **[0:37](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=37)** Great, now we've got a data frame of four dates starting January 1st, 2020, and each is separated by 30 days.
>
> **[0:49](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=49)** One useful function when working with time series data is the diff function.
>
> **[0:54](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=54)** Diff will calculate the difference from a prior period, and in this sense, operates similar to a SQL lag function.
>
> **[1:02](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=62)** Let's see the difference from the prior date in our data.
>
> **[1:06](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=66)** Sure enough, our dates are 30 days apart.
>
> **[1:13](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=73)** Now often, you'll want to take a date and convert it to the first day of the month, similar to using a date trunc function in SQL.
>
> **[1:22](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=82)** One easy method is to access the values property of our date column, then use astype datetime 64 to convert to a date time.
>
> **[1:33](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=93)** By passing M between the square brackets, our date is now at the first of the month.
>
> **[1:38](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=98)** There we go.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=99)** Now let's quickly check our data types.
>
> **[1:44](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=104)** You'll notice our original date is actually a period data type.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=109)** We'll go ahead and convert that to a datetime64 timestamp using the DT accessor and the to_timestamp function.
>
> **[1:58](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=118)** This will help with some further transformations we'll want to use.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=127)** Now to subtract two dates, no special treatment is involved, just subtract them.
>
> **[2:13](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=133)** Here, we'll see the number of days between our date and the first of the month.
>
> **[2:21](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=141)** Make sense?
>
> **[2:22](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=142)** In a similar fashion, we can even subtract our date difference from above and get the expected outcome.
>
> **[2:30](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=150)** Similarly, you can use the Timedelta function to specify a time span you want to add or subtract from your date.
>
> **[2:42](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=162)** Lastly, when working with date data types, Pandas has several quick tricks accessible with the DT accessor.
>
> **[2:50](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=170)** Here, we'll return the actual day name corresponding to each of our dates with the dt_day_name function.
>
> **[2:59](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=179)** Very cool.
>
> **[3:00](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=180)** Well, that's it for dates.
>
> **[3:01](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=181)** Definitely check out the many other useful DT functions which are detailed in Pandas' thorough documentation online.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2), pass (1), type. (1)
> **Code Identifiers:** period_range (1), to_timestamp (1), dt_day_name (1)
> **Env Vars:** sql (2)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Dealing with missing data using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=0)** - [Instructor] When you first dive into your dataset, you may be surprised to find that some data simply isn't there at all.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=6)** How you proceed to treat your data will have important ramifications down the line in your analysis.
>
> **[0:13](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=13)** Let's review some approaches to dealing with missing data in pandas.
>
> **[0:17](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=17)** First, we'll create a data frame with temperature measurements.
>
> **[0:23](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=23)** Here it is.
>
> **[0:24](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=24)** Note the two missing values in sequence number four.
>
> **[0:33](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=33)** One method to quickly identify all missing values in your data frame is to call isna.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=39)** This will return true for any cells containing a missing value.
>
> **[0:44](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=44)** Generally, the default parameters in pandas functions are built to handle null values.
>
> **[0:50](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=50)** For example, sums will treat nulls as zero and means ignore null values by default.
>
> **[0:56](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=56)** Let's see an example using a cumulative sum down our data frame.
>
> **[1:03](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=63)** By default, the cumulative sum skips nulls.
>
> **[1:06](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=66)** Now, if we set skipna=False, the cumulative sum will null all subsequent results after the first null.
>
> **[1:16](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=76)** One case where you'll need to be mindful of how pandas treats nulls is when aggregating your data using groupby.
>
> **[1:23](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=83)** The default behavior is to exclude any records with null values for any dimensions you're grouping by.
>
> **[1:29](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=89)** Let's see an example.
>
> **[1:32](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=92)** Notice our entry with a null measurement was not included.
>
> **[1:36](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=96)** To prevent the groupby from dropping nulls, pass dropna=False.
>
> **[1:54](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=114)** Great.
>
> **[1:54](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=114)** Now let's review some methods to treat these nulls.
>
> **[1:57](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=117)** Before you get too far along in your analysis,
>
> **[2:06](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=126)** the most straightforward method is to simply drop records with null using dropna.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=132)** Note, this method isn't without repercussions, and you should consider this carefully before using this approach.
>
> **[2:18](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=138)** By calling dropna, the default behavior is to drop any rows which contain null values in any column.
>
> **[2:27](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=147)** Here you can see that sequence four was dropped.
>
> **[2:30](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=150)** Now, if you only want to drop rows with nulls in certain columns, you can use the subset parameter.
>
> **[2:37](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=157)** A less common approach is to drop any columns with null values, which you can do by passing axis=1 in dropna.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=167)** Now you can see we're left with just one remaining column without any nulls.
>
> **[2:53](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=173)** Another method is to actually fill null values using fillna.
>
> **[2:58](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=178)** To see this in action, we'll fill our nulls with 0s.
>
> **[3:05](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=185)** At first glance, this could be problematic.
>
> **[3:09](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=189)** Imagine if we were to calculate the mean for our temperature column.
>
> **[3:13](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=193)** It would be heavily biased by the 0 we just introduced.
>
> **[3:17](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=197)** Another more nuanced approach is to use the pad method.
>
> **[3:21](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=201)** This will carry over values from a prior row.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=205)** Now, this method poses its own issues, largely because we've simply created data out of thin air.
>
> **[3:32](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=212)** Given the drop from 91 degrees to 50 degrees that we see, we might expect sequence four to fall somewhere in the middle.
>
> **[3:41](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=221)** This brings us to our final method called interpolate.
>
> **[3:45](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=225)** While interpolate allows for several different methods, the default approach will create a straight line estimate for our missing temperature value.
>
> **[3:56](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=236)** There you go, now the estimate lies halfway between the two values.
>
> **[4:01](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=241)** So before you get too far along analyzing your data, be sure to check for null values and put these methods to use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default. (1), default, (1), pass (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using the apply, map, and applymap functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=0)** - [Instructor] Python functions can be applied with great impact in pandas to alter data in your dataframes.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=6)** Thankfully, you don't have to create a for loop to iterate through every row in your data to do this.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=11)** In fact, it's not encouraged if you can help it.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=14)** Pandas has frameworks that are simpler and more performant known as apply, map, and apply map.
>
> **[0:21](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=21)** Let's dig in.
>
> **[0:23](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=23)** We'll start off with a dataframe, including revenue and cost data for certain regions, teams, and squads.
>
> **[0:34](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=34)** Now, let's say you want to determine whether each squad was returning of profit or not.
>
> **[0:40](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=40)** This means revenue exceeds their loss.
>
> **[0:42](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=42)** This is an excellent application for apply.
>
> **[0:46](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=46)** Apply allows you to harness functions to alter values along anis in your dataframe or in your series.
>
> **[0:52](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=52)** We'll save a bit more time by using a Lambda function.
>
> **[0:55](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=55)** This allows you to create the function in the apply statement without having had to create it in advance.
>
> **[1:01](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=61)** Our Lambda function will return the string Profit if Revenue is greater than Cost, otherwise, it will return Loss.
>
> **[1:08](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=68)** The application of this Lambda function will return a series which we will use to populate the Profit column in our dataframe.
>
> **[1:16](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=76)** After running, we see it worked as intended.
>
> **[1:20](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=80)** In cases where revenue exceeds cost, we show profit and vice versa.
>
> **[1:24](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=84)** Our next approach is called map, and you can use it to alter values in a series only using a function, dictionary, or series.
>
> **[1:32](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=92)** Here we'll create a dictionary that maps teams to their corresponding color.
>
> **[1:40](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=100)** Now, we can map the values in the team column to a new column, which we'll call Team Color.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=107)** Looks great.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=109)** Another way to alter data in your dataframe is to use apply map.
>
> **[1:53](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=113)** This applies a function to each element in your dataframe.
>
> **[1:57](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=117)** To show an example, we'll create a simple Lambda function, which returns the character length of each value in our dataframe.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=127)** Now, of course, there may be times where it's simply conceptually easier to formulate your logic as a for loop rather than one of the above.
>
> **[2:16](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=136)** And that's okay.
>
> **[2:17](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=137)** Let's see an example in action.
>
> **[2:19](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=139)** Below, we're going to calculate each squad's revenue as a percent of the region's overall revenue.
>
> **[2:25](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=145)** We'll start with an empty list that we populate as we iterate through each row in our dataframe.
>
> **[2:31](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=151)** To construct the four loop, we loop through each i in the range from zero up to the length of our dataframe.
>
> **[2:37](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=157)** Rev represents the revenue value for that particular row divided by the sum of all revenue in our dataframe where the region equals this particular squad's region.
>
> **[2:48](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=168)** Lastly, we append this value before continuing the loop.
>
> **[2:53](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=173)** Next, we set a new column, Revenue Share of Region equal to this list.
>
> **[2:58](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=178)** Let's check out the result.
>
> **[3:01](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=181)** The output looks great and the revenue share within each region sums up to a hundred percent.
>
> **[3:07](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=187)** The methods we just implemented are among the most powerful in pandas.
>
> **[3:11](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=191)** Between them, there's enough flexibility for just about any application you'll come across.
>
> **[3:16](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=196)** Remember, apply can be used for both dataframes and series.
>
> **[3:20](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=200)** Map works for series only.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=202)** Apply map affects each element in a dataframe.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=205)** And when in doubt, a for loop should do the trick.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (4), lambda (4), this. (1)
> **Definitions:** known as (1), is an  (1), is called (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 3. Transforming DataFrames

#### Groupby and aggregations using pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=0)** - [Instructor] Arguably, the most fundamental transformation you can perform in pandas is the groupby function.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=6)** Time and time again, this function proves it's worth.
>
> **[0:10](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=10)** So let's dive in.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=11)** We'll start with the iris data.
>
> **[0:16](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=16)** Now let's apply groupby to iris.
>
> **[0:18](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=18)** In a groupby, you determine the dimensions you want to group by, then specify an aggregation method.
>
> **[0:25](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=25)** As a simple example, let's group by species and apply the maximum aggregation.
>
> **[0:34](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=34)** The result gives us the max for each measurement, and we see we have three total species in our dataset.
>
> **[0:43](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=43)** With groupby, we can pass several different types of aggregations to multiple variables.
>
> **[0:49](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=49)** To do this call .ag after the groupby and pass a dictionary with the variables you are interested in along with their associated aggregations.
>
> **[0:59](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=59)** So for the sepal_length, we return the mean, min, and max, and we'll count sepal_width.
>
> **[1:08](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=68)** Now, here's our output.
>
> **[1:10](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=70)** Notice the hierarchical column index that's created as a result.
>
> **[1:15](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=75)** It's useful to see how this type of column index works.
>
> **[1:18](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=78)** Let's select the sepal_length column from our data.
>
> **[1:23](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=83)** The result that's returned is all three aggregation types we chose for sepal_length.
>
> **[1:31](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=91)** Often, you'll want to flatten hierarchical indexes for simplicity.
>
> **[1:35](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=95)** This approach uses join to concatenate the top and bottom level of our column index.
>
> **[1:43](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=103)** The result combines our variable name with the aggregation used.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=107)** You can also specify groupings without first applying any aggregation at all.
>
> **[1:52](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=112)** Here, we'll create a grouping of iris by species called groupings.
>
> **[2:00](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=120)** Now with the groupings configured, you can reference the groupings for aggregating and filtering your data.
>
> **[2:06](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=126)** The get_group function operates like a WHERE clause in SQL, filtering our data that is a part of the group you specify.
>
> **[2:14](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=134)** Let's return the setosa group.
>
> **[2:18](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=138)** Great.
>
> **[2:18](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=138)** This yields all rows in our data with species of setosa.
>
> **[2:25](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=145)** After defining your groups, you can later call aggregate functions.
>
> **[2:29](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=149)** Here, we'll call max, and this returns an identical output to our max aggregation above.
>
> **[2:37](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=157)** You can also apply Lambda functions to your groupings.
>
> **[2:41](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=161)** For simplicity, we'll apply the max aggregation, which again is identical to the output above.
>
> **[2:48](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=168)** With groupings configured, you can use what is called filter to filter your data frame on an aggregate constraint.
>
> **[2:56](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=176)** This is quite similar to a HAVING clause you might find in SQL.
>
> **[3:00](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=180)** In our example, we are going to filter our data frame for only those species that have a maximum petal_length below 5.
>
> **[3:08](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=188)** Looking at the table above, we can expect this will only return setosa species.
>
> **[3:15](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=195)** The result is all 50 measurements from the setosa species.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=202)** So there you have it!
>
> **[3:23](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=203)** You're now equipped to transform your data using panda's powerful groupby function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), pass (2), lambda (1)
> **Code Identifiers:** sepal_length (3), sepal_width (1), get_group (1), petal_length (1)
> **Env Vars:** sql (2), where (1), having (1)
> **SQL:** where (1), having (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Reshaping DataFrames with pivot or stack
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=0)** - [Instructor] After you've got your data and you've begun the data prep phase of your work, there's often a hurdle you've got to jump before you can really extract insight.
>
> **[0:09](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=9)** Often, your data simply is not in the appropriate format or level of granularity needed to begin creating those snazzy visualizations or machine learning models.
>
> **[0:20](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=20)** Luckily, pandas offers several easy to use and flexible functions for you to reshape your data.
>
> **[0:30](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=30)** The first of these is called pivot.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=32)** This allows you to take away a level of granularity from your rows and pivot that to your columns.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=39)** You simply identify the index you want to use, the variable you want to pivot from your rows to your columns, and which values you want to populate your data frame.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=51)** Note pivot doesn't perform any kind of aggregation, so for this to work, the index and columns you choose will have to be unique combinations.
>
> **[1:03](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=63)** To show this, we'll create the following data frame.
>
> **[1:06](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=66)** Notice there's two teams per region and revenue and cost data for each region and team.
>
> **[1:14](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=74)** Great.
>
> **[1:15](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=75)** Now let's pivot team to columns using region as our index.
>
> **[1:20](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=80)** For values, we'll use revenue.
>
> **[1:25](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=85)** Now you see region as our index and teams is now up top.
>
> **[1:29](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=89)** The values here represent revenue.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=94)** Next, we'll use stack to work in the opposite direction.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=99)** That is we'll pivot column labels to our rows, but first, we need to set a multi-index for our data frame.
>
> **[1:48](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=108)** To do this, we use set index and specify region and team.
>
> **[1:59](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=119)** All right, now I'll call the stack function and create a new data frame called stacked.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=132)** Excellent.
>
> **[2:13](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=133)** So now you can see individual rows for revenue and cost and the values for both now lives within the same column.
>
> **[2:26](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=146)** Similarly, we can reverse this process with unstack.
>
> **[2:31](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=151)** That is we'll pivot row labels back to our columns.
>
> **[2:41](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=161)** And now you see revenue and cost each have their own column once again.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=167)** Note that this is simply the default behavior and you can actually specify at what level in your multi-index you want to unstack.
>
> **[2:56](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=176)** The default is negative one or the innermost index, and we could change that to negative two or negative three to unstack by team or region respectively.
>
> **[3:08](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=188)** Or better yet, you can specifically name the index you want to unstack.
>
> **[3:13](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=193)** For example, let's specify region.
>
> **[3:28](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=208)** Great, now we've got region up top.
>
> **[3:35](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=215)** One other way to reshape your data frames to be mindful of is melt.
>
> **[3:41](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=221)** This allows you to specify ID variables from your columns which will stay intact.
>
> **[3:47](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=227)** All remaining columns or measure variables will be pivoted from the column to the row level.
>
> **[3:58](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=238)** Returning to our original data frame, we're going to designate region and team as our ID variables, then pivot revenue and cost back to the row level.
>
> **[4:20](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=260)** Great.
>
> **[4:21](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=261)** Now, all of the reshaping approaches so far require that we have unique combinations of the row and column variables that we're pivoting.
>
> **[4:30](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=270)** If that's not the case in your data, so for example, say we had multiple revenue entries for each region and team, you'd want to use the handy pivot table function.
>
> **[4:45](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=285)** Here, we set an index, determine which variables we want pivoted to the columns, if any.
>
> **[4:52](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=292)** Then designate our values.
>
> **[4:54](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=294)** We'll go with revenue here.
>
> **[4:56](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=296)** By default, pivot table uses mean to aggregate, but you can specify the method you want to use as well.
>
> **[5:04](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=304)** Excellent.
>
> **[5:05](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=305)** The average revenue by region is higher for team one than for team two.
>
> **[5:12](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=312)** Now, one last thing.
>
> **[5:13](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=313)** Let's add region to columns to see how that changes it.
>
> **[5:27](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=327)** Now we have the average for each region and team.
>
> **[5:31](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=331)** Basically, pivot table acts like a pandas groupby then unstacks by the variable you specify in columns.
>
> **[5:40](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=340)** Between these methods, there is always a way to get your data in the format you need to take it to the next level.
>
> **[5:47](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=347)** When in doubt, pivot table is the most flexible of the bunch and is a great place to start.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), function (2), require (1), default, (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Merging (merge, join) and concatenating (concat) DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=0)** - [Instructor] Soon after you've gone through the steps to clean up your data frame, you may find it's time to incorporate other data alongside it.
>
> **[0:08](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=8)** Here we'll discuss the many options for emerging and combining data from different data frames.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=14)** Let's dive in.
>
> **[0:15](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=15)** We'll start by creating two different data frames consisting of letters and numbers.
>
> **[0:21](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=21)** Note the overlap between these two.
>
> **[0:24](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=24)** If you're familiar with SQL, you've heard of joins, specifically left joins versus inner joins versus right joins.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=32)** We'll start by performing a left join between our two data frames.
>
> **[0:37](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=37)** And the function to use in Pandas is called merge.
>
> **[0:44](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=44)** To merge two data frames, start with your first data frame, a.k.a the left data frame.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=51)** Then call merge and pass in the second data frame, a.k.a the right data frame.
>
> **[0:57](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=57)** You'll also want to specify the join type.
>
> **[1:00](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=60)** In this case, a left join, and the join criteria.
>
> **[1:04](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=64)** Here we'll match on the number column in both data frames.
>
> **[1:09](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=69)** Excellent.
>
> **[1:10](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=70)** So you see df1 shows up in its entirety and only those letters in df2 that had numbers matching into df1 came through.
>
> **[1:20](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=80)** That's the definition of a left join.
>
> **[1:22](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=82)** Note the underscore X and underscore Y suffixes that have been added as a result of the merge.
>
> **[1:30](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=90)** We'll address that next.
>
> **[1:36](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=96)** The next type of join to use is an inner join.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=99)** Here we'll only capture the overlap between our two data frames.
>
> **[1:44](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=104)** Often, the column you'll be joining on will have different names in your two data sources.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=109)** In this example, we use left on and right on to specify the join criteria for each of our data frames.
>
> **[1:57](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=117)** Note, you can join on multiple columns here as well.
>
> **[2:02](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=122)** Great, we see two rows where the numbers match into both data frames.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=127)** We can also perform what's called a right join, which essentially reverses the order of the left join.
>
> **[2:13](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=133)** Also, we're going to use the suffixes argument to specify how we want our columns to look after joining.
>
> **[2:24](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=144)** There you go.
>
> **[2:25](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=145)** Note that all data from df2, our right data frame was returned along with those that matched from df1.
>
> **[2:34](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=154)** Also see the underscore right suffix applied to the letter column from df2.
>
> **[2:39](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=159)** Another cool operation in Pandas is to union your data frames.
>
> **[2:44](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=164)** Essentially, stacking them on top of each other.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=167)** We'll use pd.concat to do this.
>
> **[2:51](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=171)** When using pd.concat pass a list of the data frames you want to combine and be sure to reset the index and specify drop equals true.
>
> **[3:06](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=186)** Now we have eight rows of data from both data frames one on top of the other.
>
> **[3:11](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=191)** Note the indexes have been reset.
>
> **[3:14](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=194)** You'll notice that D and C are repeated in our dataset and often we want to ensure uniqueness when unioning data frames.
>
> **[3:23](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=203)** To do this, we can rerun and specify drop duplicates.
>
> **[3:42](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=222)** This drop two rows, and now we have uniqueness in our data frame.
>
> **[3:52](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=232)** You can also use pd.concat to stack data frames horizontally by specifying access equals one, which refers to our column access.
>
> **[4:08](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=248)** The append function is another handy way to stack data frames vertically.
>
> **[4:12](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=252)** Here, we'll append a series as a new row to our data frame.
>
> **[4:17](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=257)** When creating this series, I'll pass the columns from df3 into the index to simplify the append process.
>
> **[4:27](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=267)** There you go.
>
> **[4:28](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=268)** Now we've got one more row at the bottom with letter Z in number 26.
>
> **[4:35](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=275)** The last topic we'll cover is joining data frames using the index values.
>
> **[4:40](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=280)** To do this, use the join function.
>
> **[4:44](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=284)** We'll create another data frame then join that to our df2.
>
> **[4:49](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=289)** We don't need to specify the join criteria since it will be matching by index, but we do need to add in a suffix for repeated column names.
>
> **[5:01](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=301)** Fantastic.
>
> **[5:02](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=302)** We've run through the most fundamental ways you can join data frames.
>
> **[5:06](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=306)** When you've mastered these approaches, you'll find just about anything is possible with Pandas.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (3), this, (2), let (1), type. (1)
> **Definitions:** is called (1), is an  (1), refers to (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Mapping variables into groups
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=0)** - [Instructor] Sure enough, pandas has loads of capabilities to create categories, labels, and buckets within your datasets, all with the goal of deriving insights from your qualitative data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=12)** Let's investigate a few options.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=14)** First, we'll create a DataFrame for counts of salmon on the Skokomish River in Washington State.
>
> **[0:24](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=24)** Here we have species of salmon, where the population is from, and the count recorded for those fish.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=32)** One really handy function in pandas is called cut.
>
> **[0:36](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=36)** This allows you to create bins for numerical data, then apply those to your DataFrame.
>
> **[0:43](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=43)** We're going to create bins of 2,000 for our count data.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=51)** Notice here, I import NumPy to make use of numpy.inf, or infinity, for the top end of our buckets.
>
> **[0:59](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=59)** We label each of the buckets as well, from low return to high return.
>
> **[1:06](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=66)** Next, we create a new column in our DataFrame called Count Category, and we pass the count column along with the bins and the labels we've created.
>
> **[1:17](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=77)** This creates our buckets.
>
> **[1:21](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=81)** Great, now you can see the bucketing was successful.
>
> **[1:29](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=89)** Another useful tactic is to create a dictionary which maps values in your DataFrame into groupings.
>
> **[1:36](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=96)** Here we'll create a dictionary mapping species to its federal endangered species status.
>
> **[1:44](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=104)** Next, we'll apply the mappings to our species column using map.
>
> **[1:51](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=111)** It looks good.
>
> **[1:53](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=113)** pandas even has a specific categorical data type that's useful for us as well.
>
> **[2:05](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=125)** We're going to convert our count category column using pandas' .categorical.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=132)** notice, we passed the column of our DataFrame, ordered equals true, which will make this variable ordinal, meaning high return has a higher order, and pass our labels from above to categories.
>
> **[2:28](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=148)** In the printout, you can see this hierarchy taking place: low returns, less than below-average return and so on.
>
> **[2:38](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=158)** In fact, we can even use this ordering to sort our data.
>
> **[2:42](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=162)** To do this, we'll use sort values by the count category column, and it'll be descending.
>
> **[2:52](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=172)** Look at that, the data is now sorted from the highest return category to the lowest.
>
> **[3:00](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=180)** Another function which is especially useful for statistics and machine learning is get_dummies.
>
> **[3:07](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=187)** This allows us to take a categorical variable and perform what's called one-hot encoding, by which we create a column for each category and place a one if that is true or zero if not.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=202)** Here's an example of how that looks.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=205)** So there you have it. Go forth and categorize your data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), pass (2), let (1), from, (1), return. (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** get_dummies (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 4. Exploratory Data Analysis and Visualization

#### Plotting with pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=0)** - [Narrator] Pandas is not a data visualization library by any stretch of the imagination.
>
> **[0:05](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=5)** However, it does have built-in functionality to make use of map plot lib on the fly.
>
> **[0:11](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=11)** This is especially useful when performing exploratory data analysis and you want a quick visual representation of your data.
>
> **[0:20](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=20)** As a general rule, if you're presenting your findings with non-technical audiences, there are better options for crafting your visuals.
>
> **[0:28](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=28)** To start us off, we're going to create a time series data frame with two randomly generated values per period.
>
> **[0:40](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=40)** There you go.
>
> **[0:41](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=41)** Now, it couldn't be simpler for us to visualize this data in Pandas, simply call plot.
>
> **[0:48](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=48)** Now we see a graph with two lines spanning the 50 periods in our dataset.
>
> **[0:54](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=54)** An auto-generated legend has been placed on our visual as well.
>
> **[0:58](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=58)** Notice the use of the semicolon at the end of our function.
>
> **[1:02](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=62)** This is included to prevent messy code output from being printed out along with our graph.
>
> **[1:08](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=68)** Now, let's review a few more options for visuals.
>
> **[1:11](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=71)** Here, we'll generate an area graph, which is similar to our line chart above, but it's filled.
>
> **[1:22](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=82)** Note, we pass stacked equals false, but a stacked area of vis is an option as well.
>
> **[1:35](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=95)** Now you can see our lines have actually been stacked one upon the other.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=99)** Next, let's import the iris dataset.
>
> **[1:44](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=104)** We can see histograms for our dataset very simply by calling dot hist on our data frame.
>
> **[1:50](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=110)** Here, the output shows a histogram for each variable in the iris dataset.
>
> **[1:57](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=117)** This is the type of visual that can really speed along your process by calling out trends in a clean visual manner.
>
> **[2:05](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=125)** Now by instead calling plot dot hist, we can overlay the histograms of our variables on the same axis.
>
> **[2:13](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=133)** Note, when you overlay visuals, you'll want to increase the transparency by altering the alpha parameter.
>
> **[2:19](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=139)** Here, alpha is set to 0.5.
>
> **[2:23](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=143)** The next visualization we'll generate is a scatter plot.
>
> **[2:27](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=147)** We'll designate sepal width for the x axis and sepal length for the y axis.
>
> **[2:34](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=154)** We can then plot each iris observation and assign a color corresponding to the species.
>
> **[2:40](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=160)** Notice here we use dot map to translate each species to a color for our plot.
>
> **[2:48](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=168)** This is another insightful visual.
>
> **[2:50](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=170)** We see pretty definitive clusters forming between our three species.
>
> **[2:55](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=175)** The last plot type for us to review is called the scatter matrix.
>
> **[3:00](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=180)** It will generate scatter plots showing the relationship between each of your variables, and along the diagonal you'll see histograms showing how your observations are distributed.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=202)** Notice the fig size in our scatter matrix.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=205)** This parameter allows you to better fit your visuals to the space available on your screen.
>
> **[3:31](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=211)** Reviewing our visual, we can see that petal length and petal width have a very strong positive correlation.
>
> **[3:43](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=223)** This histogram is simply showing the distribution of observations for petal width.
>
> **[3:49](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=229)** Overall, this is a very nice visual to get a very quick understanding of your data.
>
> **[3:54](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=234)** While Panda's visuals may not be the snazziest you'll find, their simplicity and ease of use are hard to beat when you need insights on the fly.
>
> **[4:04](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=244)** Next time you're performing exploratory data analysis, try some of these features out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), pass (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 0.5 (1)
> **Analogies:** similar to (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [narrator] (1)

#### Correlations and statistical functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=0)** - [Instructor] Long before machine learning and AI became the buzzwords of the century, the humble discipline of statistics established the foundation for drawing inference and insight from our data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=12)** With pandas, you have several statistical functions right at your fingertips.
>
> **[0:17](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=17)** Before we explore the statistics capabilities of pandas, let's import the iris dataset.
>
> **[0:27](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=27)** First, let's explore some of the built-in measures for central tendency.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=32)** By simply calling .mean on our DataFrame, pandas computes the average for each of our numeric variables.
>
> **[0:41](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=41)** We can similarly return the median values with .median.
>
> **[0:47](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=47)** Now, if we want to return the most frequent observations for each of our variables, we can utilize the mode function.
>
> **[0:55](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=55)** This output takes a moment to interpret.
>
> **[0:58](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=58)** Knowing that a dataset can have multiple modes per variable in the case of a tie, we see that our output returns the mode at index zero, but in the case of a tie, it will add additional rows to represent that.
>
> **[1:13](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=73)** In the iris dataset, there is a three way tie for species, as there are 50 records a piece, so all three show up.
>
> **[1:21](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=81)** We also have a tie for frequency in petal length, so you see two values there as well.
>
> **[1:27](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=87)** Measures of central tendency are valuable, but without also knowing how your data is distributed, they can be misleading.
>
> **[1:37](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=97)** With pandas, you can easily return the standard deviation for variables in your DataFrame.
>
> **[1:42](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=102)** This will tell you the extent to which these variables deviate from their mean.
>
> **[1:48](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=108)** There you go.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=109)** These are the standard deviations for all our measures.
>
> **[1:52](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=112)** It's often even more helpful to have a visual representation of how your data is distributed.
>
> **[1:58](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=118)** That's where the box plot visual comes in handy.
>
> **[2:01](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=121)** You can easily produce this visual by calling .boxplot() on your DataFrame.
>
> **[2:07](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=127)** There it is.
>
> **[2:08](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=128)** In this visual, the rectangles represent the extent from the first quartile to the third quartile in your data.
>
> **[2:16](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=136)** Remember, one quartile represents 1/4 of your distribution.
>
> **[2:20](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=140)** The whiskers extending beyond are meant to show the range of your data.
>
> **[2:25](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=145)** Dots exceeding the whiskers are considered outliers.
>
> **[2:31](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=151)** Now, the quickest way to get an understanding of your data is the describe function.
>
> **[2:35](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=155)** Simply call this on your DataFrame to yield a thorough list of descriptive statistics.
>
> **[2:41](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=161)** Many of the calculations we performed above are provided, and quartile values show up as well.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=167)** For more advanced analysis in statistical modeling, it becomes really important to understand how variables in your dataset interact with each other, specifically how well correlated they are to each other.
>
> **[3:00](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=180)** Correlation simply shows the extent and direction in which two variables are related.
>
> **[3:06](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=186)** You can see pairwise correlations between all your variables with .corr().
>
> **[3:13](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=193)** Our output allows you to see the correlation between any two variables.
>
> **[3:17](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=197)** A positive number demonstrates that as one variable increases, the other tends to as well, while negative shows the opposite.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=205)** The closer to one or negative one, the stronger the relationship.
>
> **[3:30](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=210)** Note the diagonal is all ones as we're correlating variables with themselves.
>
> **[3:35](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=215)** The usefulness of this output can't be overstated.
>
> **[3:38](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=218)** It's referred to as the correlation matrix, and is often a good first step before proceeding to machine learning or statistical modeling.
>
> **[3:46](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=226)** To make this even easier to interpret, we can create a heat map from this matrix.
>
> **[3:52](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=232)** In pandas, calling style.background_gradient on our correlation matrix yields this snazzy visual.
>
> **[4:02](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=242)** Now, with color, it's very clear how strongly and in which direction our variables are correlated.
>
> **[4:08](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=248)** pandas has really made its reputation as an all-around one-stop-shop for data analysis, and with access to these functions, you can probably see why.
>
> **[4:17](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=257)** In your next project, incorporate these statistical techniques and you'll be well rewarded.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), yield (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** background_gradient (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Beyond pandas

#### Accelerate exploratory data analysis with pandas-profiling
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=0)** - [Instructor] The popularity and usefulness of pandas has put it at the center of the [[Python Data Analysis]] universe, so it's no surprise that it spawned countless sister packages and dependencies throughout the Python ecosystem.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=14)** One related package, which I highly encourage you to use, particularly if you want to accelerate your exploratory data analysis, is pandas-profiling.
>
> **[0:23](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=23)** This simple and intuitive package will effectively take your data frame and output an interactive and highly-comprehensive profile for each variable in your data.
>
> **[0:33](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=33)** It surfaces the descriptive statistics for each variable, provides a correlation matrix, and assesses the data quality and more.
>
> **[0:41](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=41)** Much of the proceeding work in this course can more readily be done with pandas-profiling.
>
> **[0:46](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=46)** Excited?
>
> **[0:48](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=48)** Me too.
>
> **[0:48](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=48)** Let's dive in.
>
> **[0:52](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=52)** In addition to importing pandas, we'll want to import profile report from pandas-profiling.
>
> **[0:58](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=58)** If you don't have this installed, you can simply install it via pip.
>
> **[1:02](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=62)** Let's profile our iris dataset.
>
> **[1:05](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=65)** To create a profile, use the ProfileReport function, pass in your data frame, and provide it with a title.
>
> **[1:13](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=73)** Next, we'll output the profile in our notebook.
>
> **[1:19](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=79)** Notice the handy progress bar updating.
>
> **[1:24](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=84)** Okay, now let's investigate.
>
> **[1:30](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=90)** To start, we get an overview of our data, the number of observations, how many variables there are, whether there's no values, duplicate rows, everything.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=99)** You'll notice there's even warnings that are surfaced, which you can see by clicking here.
>
> **[1:44](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=104)** These warnings may or may not be a problem for you, but nonetheless, they're good to be mindful of.
>
> **[1:49](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=109)** We can see profiles of each of our variables in the Variables section.
>
> **[1:54](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=114)** Here you see some descriptive statistics for sepal_length.
>
> **[1:59](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=119)** There's also a histogram of values to the right.
>
> **[2:01](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=121)** We can toggle details to see even more detail.
>
> **[2:08](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=128)** Here we see very in-depth descriptive statistics.
>
> **[2:11](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=131)** You can even see a histogram, common values, and the extreme values in your dataset.
>
> **[2:20](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=140)** This continues for each variable.
>
> **[2:25](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=145)** We can also see interactions between variables.
>
> **[2:30](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=150)** Below, you'll see a scatterplot of the two variables of your choosing.
>
> **[2:34](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=154)** This plot shows all the values of sepal_width and sepal_length.
>
> **[2:38](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=158)** This allows you to eyeball any correlations or relationships that you think are meaningful.
>
> **[2:44](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=164)** Speaking of, we can also output a correlation matrix.
>
> **[2:48](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=168)** This simple visual can tell you whether your variables are correlated to one another and the direction of that correlation.
>
> **[2:55](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=175)** Blue is a positive correlation, and red is a negative correlation.
>
> **[2:59](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=179)** The darker the color, the stronger the relationship.
>
> **[3:02](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=182)** Another handy feature is to see your missing values.
>
> **[3:07](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=187)** Thankfully, we're not missing any in this dataset.
>
> **[3:12](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=192)** At the tail end here, you also see a head of your data frame and a tail.
>
> **[3:18](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=198)** Lastly, if you have duplicate rows, you'll find them here.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=202)** Our dataset has one duplicate.
>
> **[3:25](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=205)** After reviewing your profile, you can output this as an easily shareable HTML file.
>
> **[3:34](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=214)** To do this, use the to_file function and name your HTML file.
>
> **[3:40](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=220)** Using pandas-profiling has become second nature for me, and to get the most out of pandas, I highly recommend you incorporate it into your projects as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), pass (1), this, (1)
> **CLI Commands:** python (2), pip (1), find (1)
> **Code Identifiers:** sepal_length (2), sepal_width (1), to_file (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (2)
> **UI Navigation:** toggle (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Explore geographic data with GeoPandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=0)** - [Instructor] Some of the most rewarding work I've been a part of has surrounded geospatial data, that is any data that has some locational component to it.
>
> **[0:08](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=8)** It creates opportunities both for analysis and especially in data visualization to do something really cool.
>
> **[0:15](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=15)** In this lesson, I want to introduce you to a sister package of Pandas called GeoPandas.
>
> **[0:20](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=20)** As the name suggests, GeoPandas is an extension of Pandas that makes working with geospatial data simple and intuitive.
>
> **[0:28](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=28)** To start us off, we'll import both Pandas and GeoPandas, then create a data frame that has a geospatial component.
>
> **[0:36](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=36)** Here, we're including latitude and longitude readings for five different peaks in Colorado.
>
> **[0:43](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=43)** Now we're going to take this Pandas data frame and convert it to a geodata frame, the GeoPandas equivalent.
>
> **[0:50](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=50)** We pass in the data frame and point the geometry to the longitude and latitude readings.
>
> **[0:55](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=55)** We're using a function called points_from_xy to interpret the latitude and longitude.
>
> **[1:03](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=63)** Notice the output of our geodata frame, geometry is represented as a point containing our coordinates.
>
> **[1:10](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=70)** This is what makes the geodata frame geo.
>
> **[1:14](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=74)** Once you have your geometry configured, you can really begin to do the exciting work.
>
> **[1:19](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=79)** For example, you could overlay a polygon and determine whether your points are inside or outside of it.
>
> **[1:25](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=85)** And of course, now you can map these data points, which is what we'll do next.
>
> **[1:33](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=93)** To map our peak data, we're going to use an excellent data visualization package called Plotly.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=99)** Specifically we'll import Plotly Express, which is a lightweight and easy-to-use API that is light on the syntax.
>
> **[1:46](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=106)** To visualize our data, we're going to create a Mapbox scatter plot.
>
> **[1:50](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=110)** This requires an access token from Mapbox, which is completely free.
>
> **[1:55](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=115)** When creating Plotly visuals, you want to create a figure, denoted as fig here, which is essentially a dictionary passing our data and customizations in a way that Plotly can easily configure into a visual.
>
> **[2:09](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=129)** The lat and lon in our figure are pointed to our freshly minted geometry field, and we're going to color by peak.
>
> **[2:22](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=142)** Check it out.
>
> **[2:23](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=143)** We can see each of our peaks here denoted by a circle.
>
> **[2:26](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=146)** And if you hover over the circle, you'll see a tool tip with detail.
>
> **[2:32](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=152)** Visualizations in Plotly are interactive, meaning you can move them around, you can hover over them, and you can filter as well.
>
> **[2:40](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=160)** So we've turned our geo data frame into an interactive map.
>
> **[2:44](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=164)** This only scratches the surface of what you can do with GeoPandas.
>
> **[2:48](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=168)** Now, if your work doesn't involve geospatial data, I recommend you seek out some data sources and start to apply these techniques.
>
> **[2:55](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=175)** It's a lot of fun.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), function (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** points_from_xy (1)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Beyond pandas with Dask and Koalas (Spark)
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=0)** - [Instructor] There may come a time when the volume of your data has become so large that you find using pandas to be constraining.
>
> **[0:07](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=7)** Thankfully, there have been rapid advancements in big data processing, and in this lesson, we will discuss two frameworks: Dask and Spark, that have proven to be especially useful.
>
> **[0:18](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=18)** We'll also see how pandas can be easily translated into these cutting-edge approaches.
>
> **[0:24](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=24)** So what is Dask?
>
> **[0:26](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=26)** At a high level, Dask is a framework to speed up your Python workload using parallel computing.
>
> **[0:32](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=32)** So instead of running all tasks sequentially, the Dask scheduler allows for simultaneous computing.
>
> **[0:39](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=39)** This takes full advantage of all the compute you have available.
>
> **[0:42](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=42)** One of the key benefits of Dask is it is very compatible with all the existing work you do with Python and pandas In particular.
>
> **[0:51](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=51)** Dask has a DataFrame concept just as Pandas does.
>
> **[0:54](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=54)** In fact, you can think of a Dask DataFrame as consisting of a series of pandas DataFrames.
>
> **[1:00](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=60)** Let's import our Iris dataset as a Dask DataFrame using the read_csv function, which should look pretty familiar to us.
>
> **[1:11](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=71)** Generally speaking, this DataFrame will behave just like we're used to.
>
> **[1:16](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=76)** The next framework to learn about is Apache Spark.
>
> **[1:19](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=79)** Spark is written in a language called Scala and is easily called in Python using what's called PySpark.
>
> **[1:26](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=86)** It's also optimized for big data and distributes computing across clusters of compute for fast data processing.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=94)** To aid in the transition from pandas, there's a package cleverly named Koalas, which is the pandas API on top of Apache Spark.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=107)** This is the standard block to import Koalas, which will import as ks.
>
> **[1:53](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=113)** Now, let's create a pandas DataFrame.
>
> **[1:58](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=118)** Here we have a randomly generated DataFrame with four columns and five rows.
>
> **[2:02](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=122)** To transition a pandas DataFrame into Koalas', you can use the from_pandas function.
>
> **[2:10](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=130)** Sure enough, it looks and acts pretty similarly, but now you can take advantage of the distributed computing powers of Spark.
>
> **[2:17](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=137)** Dask and Spark are each entire courses unto themselves.
>
> **[2:21](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=141)** So if you need to scale up your efforts to process big data, this is where you should look.
>
> **[2:26](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=146)** You can easily get started with Dask on your local machine, and to get a fully-managed Spark experience, you can sign up for the free Community edition of Databricks.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), apache (2), find (1)
> **Code Keywords:** let (2), function (2)
> **Code Identifiers:** read_csv (1), from_pandas (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Your path forward using advanced pandas functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=0)** - [Brett] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=1)** You've worked your way through Advanced Pandas, and we've covered a lot of material.
>
> **[0:06](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=6)** As you continue to work with pandas, you'll find, as I have, that there's always something more to learn and to try out for yourself.
>
> **[0:14](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=14)** One way to hone your pandas skills is to have a textbook to work through in reference.
>
> **[0:19](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=19)** Wes McKinney's "Python for Data Analysis" is an excellent resource.
>
> **[0:24](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=24)** And please feel free to reach out to me, Brett Vanderblock, and I'm happy to help you along the way.
>
> **[0:29](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=29)** Once you feel you've mastered pandas, rest assured there's plenty more still to learn.
>
> **[0:35](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=35)** For starters, you can work with geospatial data and GeoPandas, and definitely be sure to experiment with big data frameworks such as Dask and Spark.
>
> **[0:44](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=44)** I hope you've enjoyed this course, and happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), python (1)
> **Code Keywords:** continue (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [brett] (1)


## Path Context

### In [[Master Python for Data Science]]
← [[Python Data Structures- Trees]] | **8 of 8**

## Appears In

- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python in Excel- Working with pandas DataFrames]] — Pandas (Software)

---

[↑ Back to top](#)