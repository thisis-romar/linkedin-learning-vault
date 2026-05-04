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
  - '[Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)'
prev_courses:
  - '[Python Data Structures- Trees](Python%20Data%20Structures-%20Trees.md)'
path_nav: '[{"path":"Master Python for Data Science","position":8,"total":8,"prev":"Python Data Structures- Trees","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/pandas-software
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Advanced%20Pandas.md)

![Advanced Pandas](https://media.licdn.com/dms/image/v2/D4D0DAQE_2nqqsEL3YA/learning-public-crop_675_1200/B4DZg98QqGHAAc-/0/1753385864731?e=2147483647&amp;v=beta&amp;t=K9lXeGO78NRb4L8Qpj0FDdJ3Rkt628QLvVNQIg7m0DE)

# Advanced Pandas

> If you've worked in Python, you're likely familiar with the basics of pandas. In this advanced course, instructor Brett Vanderblock shares how you can take advantage of the advanced functions of pandas—such as working with dates, dealing with missing data, merging DataFrames, and more—to work more effectively with your data. First, Brett introduces you to DataFrames, identifies the top functions i

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pandas-29724107) | 1h 2m | Advanced | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Take pandas to the next level](#take-pandas-to-the-next-level)
- [**1. From Beginner to Advanced pandas**](#1-from-beginner-to-advanced-pandas) (4 videos)
  - [Getting started with pandas](#getting-started-with-pandas)
  - [Intro to DataFrames using pandas](#intro-to-dataframes-using-pandas)
  - [Top functions using pandas](#top-functions-using-pandas)
  - [Configuring options using pandas](#configuring-options-using-pandas)
- [**2. Advanced Calculations**](#2-advanced-calculations) (5 videos)
  - [Data type conversions using pandas](#data-type-conversions-using-pandas)
  - [Working with strings using pandas](#working-with-strings-using-pandas)
  - [Working with dates using pandas](#working-with-dates-using-pandas)
  - [Dealing with missing data using pandas](#dealing-with-missing-data-using-pandas)
  - [Using the apply, map, and applymap functions](#using-the-apply-map-and-applymap-functions)
- [**3. Transforming DataFrames**](#3-transforming-dataframes) (4 videos)
  - [Groupby and aggregations using pandas](#groupby-and-aggregations-using-pandas)
  - [Reshaping DataFrames with pivot or stack](#reshaping-dataframes-with-pivot-or-stack)
  - [Merging (merge, join) and concatenating (concat) DataFrames](#merging-merge-join-and-concatenating-concat-dataframes)
  - [Mapping variables into groups](#mapping-variables-into-groups)
- [**4. Exploratory Data Analysis and Visualization**](#4-exploratory-data-analysis-and-visualization) (2 videos)
  - [Plotting with pandas](#plotting-with-pandas)
  - [Correlations and statistical functions](#correlations-and-statistical-functions)
- [**5. Beyond pandas**](#5-beyond-pandas) (3 videos)
  - [Accelerate exploratory data analysis with pandas-profiling](#accelerate-exploratory-data-analysis-with-pandas-profiling)
  - [Explore geographic data with GeoPandas](#explore-geographic-data-with-geopandas)
  - [Beyond pandas with Dask and Koalas (Spark)](#beyond-pandas-with-dask-and-koalas-spark)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your path forward using advanced pandas functions](#your-path-forward-using-advanced-pandas-functions)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take pandas to the next level](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/take-pandas-to-the-next-level?u=76281980&t=0)** - [Brett] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) without [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is like skiing without skis. You could do it, but it'd be a heck of a lot harder. In this course, we're going to take Pandas from the basics to the next level. I am Brett Vanderblock, data scientist, and Pandas has been there every step of my journey to becoming a data scientist and producing insightful analytics. We'll be covering the most critical functions Pandas has to offer, from transforming data frames to advanced calculations, to techniques for rapid exploratory data analysis. We'll also take a peek beyond Pandas for geospatial and [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing. I want you to get the most out of your data. Now let's dive in to Advanced Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [brett] (1)


### 1. From Beginner to Advanced pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/getting-started-with-pandas?u=76281980&t=0)** - [Instructor] Import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. This is probably the single most common line of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code you'll find in [Data Science](../../Topics/Data%20Science.md), and there's a reason for that. pandas is the easiest and most intuitive Python package for dealing with your data. With it, you can transform, clean, visualize, and extract insights from your data with relative ease. Throughout this course, we'll explore the most fundamental aspects of pandas to make your work flow more easily and efficiently. Then, we'll expand to more advanced applications of pandas and showcase a few other packages related to pandas that can take your work to the next level. Depending on your Python distribution, you may already have the pandas package installed. If not, there's two options to install the package. You can PIP install pandas via command line, or, if using the Conda installer, conda install pandas. This course consists of Jupyter Notebooks, like the one you see here, and requires a Python installation. If you don't have Jupyter or Python, I recommend you download the distribution from Anaconda. The link for this download is available here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** python (5), find (1), make (1), pip (1)
> **Tools:** jupyter (2), command line (1), anaconda (1)
> **Prerequisites:** install (3)
> **Env Vars:** pip (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Intro to DataFrames using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=0)** - [Instructor] The most fundamental aspect of [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is the DataFrame. This is how your data is stored, and it's a tabular format with rows and columns, as you'd find in a spreadsheet or a database table. So before we dive into some more advanced pandas topics, let's review the DataFrame concept. After importing pandas as pd, we're going to create a dictionary called scores. Now, a dictionary is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) structure which stores key-value pairs. In this dictionary, the keys are name, city, and score, and the values are lists, as denoted by the square brackets, which map to their corresponding key. After running this cell, we're going to turn this dictionary into a pandas DataFrame using the DataFrame function. Note the capitalization of the F in DataFrame. Great, now let's see our data. Here, you can see a table with name, city, and score as column headers and three rows of corresponding data. Each column is a series, and notice the values zero, one, and two to the left. These are the index of our DataFrame and are useful for referencing and subsetting our data. If we wanted to just return one column in our DataFrame, the notation is your DataFrame and then the column name or names in square brackets. Here let's take a look at score. Great.
>
> **[1:32](https://www.linkedin.com/learning/advanced-pandas-29724107/intro-to-dataframes-using-pandas?u=76281980&t=92)** Note in this example, you can also call df.score to return the same result. Similarly, you can also create new columns in your DataFrame by passing a new column name into the square brackets and assigning it. Here, we're creating a new column that combines the name and city columns. Now, let's say we wanted to subset our data to only show those folks with scores above, say, 90. To do that, we can create a Boolean expression which returns true for scores greater than 90 and only return those records where this condition is true. After running, we returned a DataFrame with just Japhy and Zosa's records. Also note our new column name_city. All this only scratches the surface of what you can do when your data is in a DataFrame, but this is an excellent start for us to build on for future lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), python (1)
> **Code Identifiers:** name_city (1)
> **Speakers:** - [instructor] (1)

#### [Top functions using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=0)** - [Instructor] As you use [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), you'll find there's certain functions that prove their worth time and time again. In this lesson, we'll cover some of the most important functions that you can use to get more from your data. Pandas is very flexible in that you can import data from a wide variety of data sources, including CSVs, [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) files, JSONs, [Databases](../../Skills/Software%20Development/Databases.md), parquet files, you name it. For this lesson, we'll use Pandas' read CSV function to import the Iris data set as a data frame. This is a common sample data set for practicing [Data Science](../../Topics/Data%20Science.md). Import Pandas as PD. Next, we'll read the Iris CSV into a data frame called Iris. Data frames have an attribute called shape, which tells us the dimensionality of our data. By calling Iris.shape, we can see the number of rows and columns that our data frame has. There you go, we have 150 rows and five columns in our data. To preview our data, the head function will return the top rows of our data frame. Let's check out the top three rows of the Iris data. You can see this data contains measurement data for different Iris species. Similarly, you can also view the bottom rows with the tail function. Now, when working with data in Pandas, you'll find that the data types
>
> **[1:32](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=92)** that Pandas assigns to your data is important and will influence what operations you can perform. I've found Pandas to be pretty intelligent in how it assigns data types, but you'll want to check to be sure. To do this call the dtypes attribute on your data frames. We see two data types represented in our data frame, float for all the measurement data and object for the species. Often when using Pandas, you'll want to subset your data. Loc allows you to subset your data based on index labels, so either the row indexes or column names. Iloc subsets by position, so the row number or column order. So here we're going to subset our data frame based on row indexes three, four, and five, which are the fourth through sixth rows of our data. Note, indexing begins at zero. We can also return a single cell value by passing a row and column name separated by a comma. This returns 4.6, which is the measurement for sepal_length for the row at index three in our data frame. Using iloc, we can return the same value by referencing the same row index of three, but a column index of zero.
>
> **[3:02](https://www.linkedin.com/learning/advanced-pandas-29724107/top-functions-using-pandas?u=76281980&t=182)** Often after you've done a whole host of [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) with Pandas, you want to export your data frame for analysis or visualization. A handy way to do this is the to CSV function. Note you may want to include index equal to false, so the index isn't included in your CSV. Great, this will have generated a CSV named iris-output in your working directory. These functions are so beneficial in data analysis, and if you aren't using them currently, I highly recommend you give them a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (9), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **Env Vars:** csv (5)
> **CLI Commands:** find (2)
> **Code Identifiers:** sepal_length (1)
> **Versions:** 4.6 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configuring options using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=0)** - [Instructor] So another [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) feature I want you to take advantage of is to configure your own options. Pandas has an option system which allows you to customize how the package works for you. Most often, this can be useful to change how results are displayed in Pandas. So here's an example. We'll start with a sample data frame of the top three nations in 2018 by global carbon dioxide emissions. The first option which comes in handy is to configure the maximum row size to display for a Pandas data frame. If we set the max row size to two, here's what we get. So you see two rows displayed separated by an ellipses. That's what this option does. You can either use it to limit the screen space your displayed data frames take up, or conversely to expand the row size to reveal more of your data. Similarly, the max columns display option will reveal or hide columns. I find this most useful when viewing the head of a data frame that has a lot of columns as Pandas will truncate these by default. Now we see another set of ellipses between our first and third columns. Another trick worth checking out is to suppress scientific notation for displaying floats. You'll notice the scientific notation makes it difficult to readily compare carbon dioxide emissions figures in our table. By modifying the float_format option, you can display these values normally,
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/configuring-options-using-pandas?u=76281980&t=94)** and even add in a comma as a thousands separator. So there you have it. Now you've got one more trick up your sleeve by customizing your options in Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** float_format (1)
> **Speakers:** - [instructor] (1)


### 2. Advanced Calculations

[↑ Back to Table of Contents](#table-of-contents)

#### [Data type conversions using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=0)** - [Instructor] One area where you might encounter some hurdles with [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is dealing with data types. Pandas is generally pretty good at assigning proper data types, but nonetheless, you'll find many instances when you need to convert data types. In this lesson, we'll leverage the planet's dataset as it has a good variety of data types. After importing Pandas, we'll read the planet's data as a CSV. Now let's have a peek at the data. From looking over the data frame, you can probably infer what the data type assignments will be, but to be sure we can access the D types attribute of planets. Now we see data types varying from an object to integers to floats. How Pandas handles your data depends on the data types you've designated. For example, we'll use the mean function to return the average for all float and integer values in our dataset. Everything looks pretty good, though you might question whether it really makes sense to take an average of a year as we've done here. Let's see how different data types interact. Here we'll divide an integer column by a float. The result is a float. Great. That's what you'd hope for. We also have the ability to change data types using the AS type function. For instance, we can convert the integer value of the number column to a float.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/data-type-conversions-using-pandas?u=76281980&t=94)** It's useful to see what happens when you convert a float to an int. In this case, we've lost the decimal point, and it's worth noting that this approach would effectively round down any floats as you convert to integers. We could also convert the year to an object by calling the As type STR for string. To take advantage of the date time data type in Pandas, we can convert our integer year value to a date time using to date time. Then we specify how the data is currently formatted. So you see here, our integer year has been converted to an actual date time corresponding to the first day of the year. I want you to unlock the full potential of Pandas, but before you can, there's a good chance you'll encounter some data type issues and now you'll be ready to solve them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6)
> **Env Vars:** csv (1), str (1)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with strings using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=0)** - [Instructor] Text data can be an incredibly rich source of data for analysis, and [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is well equipped for working with cleaning and processing text data in string format. Let's dive into some useful methods. For this lesson, we'll start with a series of three names, organized last comma first, and you might notice some inconsistencies in how these names are stored. In Pandas, the string accessor, denoted by .str, enables a host of useful string transformations. Let's start by replacing that semicolon. Great. You can see the replace function easily replaced the semicolon with the comma. Now, another string operator that can be useful is calling the length, the number of characters of each string in your series. Great. So we see the first two names have 14 characters apiece, and the third name has 10 characters. Now, I noticed some trailing and leading spaces in the names, so this is a great opportunity to use strip to remove those spaces. We'll also return the length so we can see the difference. Looks like we trimmed a leading or trailing space off of each of the first two names. For consistency, we'll also go ahead and convert to entirely lowercase using the .str.lower. Note .str.upper acts exactly as you think it might.
>
> **[1:37](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-strings-using-pandas?u=76281980&t=97)** Next, I want to reverse the order of first and last name. Thankfully, we have a comma delimiting first and last, so we can use str.split to separate these two. This creates what is known as a tuple of last name, then first name for each of our names. This next trick is a clever method using list comprehension to swap the order of last name and first name for each name. Our last step is to, again, join first and last name separated by a space. This gives us a list of names in order of first, then last, and it's all been tidied up a bit. Now, when you encounter text data in your work, I encourage you to put these Pandas string functions to work for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)

#### [Working with dates using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=0)** - [Instructor] Time series data is one of the most interesting and essential types of data that we work with, but dates can be tricky to deal with. Thankfully, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) has some excellent methods that we can put to use. To get started, we're going to generate a series of dates. The period_range function in Pandas allows us to do just that. By specifying the starting date, followed by the frequency and the number of periods, we return a series of dates which we'll pass into a data frame. Great, now we've got a data frame of four dates starting January 1st, 2020, and each is separated by 30 days. One useful function when working with time series data is the diff function. Diff will calculate the difference from a prior period, and in this sense, operates similar to a [SQL](../../Skills/Data%20Science/SQL.md) lag function. Let's see the difference from the prior date in our data. Sure enough, our dates are 30 days apart. Now often, you'll want to take a date and convert it to the first day of the month, similar to using a date trunc function in SQL. One easy method is to access the values property of our date column, then use astype datetime 64 to convert to a date time. By passing M between the square brackets,
>
> **[1:35](https://www.linkedin.com/learning/advanced-pandas-29724107/working-with-dates-using-pandas?u=76281980&t=95)** our date is now at the first of the month. There we go. Now let's quickly check our data types. You'll notice our original date is actually a period data type. We'll go ahead and convert that to a datetime64 timestamp using the DT accessor and the to_timestamp function. This will help with some further transformations we'll want to use. Now to subtract two dates, no special treatment is involved, just subtract them. Here, we'll see the number of days between our date and the first of the month. Make sense? In a similar fashion, we can even subtract our date difference from above and get the expected outcome. Similarly, you can use the Timedelta function to specify a time span you want to add or subtract from your date. Lastly, when working with date data types, Pandas has several quick tricks accessible with the DT accessor. Here, we'll return the actual day name corresponding to each of our dates with the dt_day_name function. Very cool. Well, that's it for dates. Definitely check out the many other useful DT functions which are detailed in Pandas' thorough documentation online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Code Identifiers:** period_range (1), to_timestamp (1), dt_day_name (1)
> **Env Vars:** sql (2)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Dealing with missing data using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=0)** - [Instructor] When you first dive into your dataset, you may be surprised to find that some data simply isn't there at all. How you proceed to treat your data will have important ramifications down the line in your analysis. Let's review some approaches to dealing with missing data in [pandas](../../Skills/Software%20Development/Pandas%20(Software).md). First, we'll create a data frame with temperature measurements. Here it is. Note the two missing values in sequence number four.
>
> **[0:33](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=33)** One method to quickly identify all missing values in your data frame is to call isna. This will return true for any cells containing a missing value. Generally, the default parameters in pandas functions are built to handle null values. For example, sums will treat nulls as zero and means ignore null values by default. Let's see an example using a cumulative sum down our data frame. By default, the cumulative sum skips nulls. Now, if we set skipna=False, the cumulative sum will null all subsequent results after the first null. One case where you'll need to be mindful of how pandas treats nulls is when aggregating your data using groupby. The default behavior is to exclude any records with null values for any dimensions you're grouping by. Let's see an example. Notice our entry with a null measurement was not included. To prevent the groupby from dropping nulls, pass dropna=False.
>
> **[1:54](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=114)** Great. Now let's review some methods to treat these nulls. Before you get too far along in your analysis,
>
> **[2:06](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=126)** the most straightforward method is to simply drop records with null using dropna. Note, this method isn't without repercussions, and you should consider this carefully before using this approach. By calling dropna, the default behavior is to drop any rows which contain null values in any column. Here you can see that sequence four was dropped. Now, if you only want to drop rows with nulls in certain columns, you can use the subset parameter. A less common approach is to drop any columns with null values, which you can do by passing axis=1 in dropna. Now you can see we're left with just one remaining column without any nulls. Another method is to actually fill null values using fillna. To see this in action, we'll fill our nulls with 0s. At first glance, this could be problematic. Imagine if we were to calculate the mean for our temperature column. It would be heavily biased by the 0 we just introduced. Another more nuanced approach is to use the pad method. This will carry over values from a prior row. Now, this method poses its own issues, largely because we've simply created data out of thin air. Given the drop from 91 degrees to 50 degrees that we see, we might expect sequence four
>
> **[3:39](https://www.linkedin.com/learning/advanced-pandas-29724107/dealing-with-missing-data-using-pandas?u=76281980&t=219)** to fall somewhere in the middle. This brings us to our final method called interpolate. While interpolate allows for several different methods, the default approach will create a straight line estimate for our missing temperature value. There you go, now the estimate lies halfway between the two values. So before you get too far along analyzing your data, be sure to check for null values and put these methods to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using the apply, map, and applymap functions](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) functions can be applied with great impact in [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) to alter data in your dataframes. Thankfully, you don't have to create a for loop to iterate through every row in your data to do this. In fact, it's not encouraged if you can help it. Pandas has frameworks that are simpler and more performant known as apply, map, and apply map. Let's dig in. We'll start off with a dataframe, including revenue and cost data for certain regions, teams, and squads. Now, let's say you want to determine whether each squad was returning of profit or not. This means revenue exceeds their loss. This is an excellent application for apply. Apply allows you to harness functions to alter values along anis in your dataframe or in your series. We'll save a bit more time by using a Lambda function. This allows you to create the function in the apply statement without having had to create it in advance. Our Lambda function will return the string Profit if Revenue is greater than Cost, otherwise, it will return Loss. The application of this Lambda function will return a series which we will use to populate the Profit column in our dataframe. After running, we see it worked as intended. In cases where revenue exceeds cost, we show profit and vice versa. Our next approach is called map, and you can use it to alter values in a series only using a function, dictionary, or series. Here we'll create a dictionary
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=94)** that maps teams to their corresponding color. Now, we can map the values in the team column to a new column, which we'll call Team Color. Looks great. Another way to alter data in your dataframe is to use apply map. This applies a function to each element in your dataframe. To show an example, we'll create a simple Lambda function, which returns the character length of each value in our dataframe. Now, of course, there may be times where it's simply conceptually easier to formulate your logic as a for loop rather than one of the above. And that's okay. Let's see an example in action. Below, we're going to calculate each squad's revenue as a percent of the region's overall revenue. We'll start with an empty list that we populate as we iterate through each row in our dataframe. To construct the four loop, we loop through each i in the range from zero up to the length of our dataframe. Rev represents the revenue value for that particular row divided by the sum of all revenue in our dataframe where the region equals this particular squad's region. Lastly, we append this value before continuing the loop. Next, we set a new column, Revenue Share of Region equal to this list. Let's check out the result. The output looks great and the revenue share within each region sums up to a hundred percent.
>
> **[3:07](https://www.linkedin.com/learning/advanced-pandas-29724107/apply-map-applymap?u=76281980&t=187)** The methods we just implemented are among the most powerful in pandas. Between them, there's enough flexibility for just about any application you'll come across. Remember, apply can be used for both dataframes and series. Map works for series only. Apply map affects each element in a dataframe. And when in doubt, a for loop should do the trick.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** known as (1), is an  (1), is called (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 3. Transforming DataFrames

[↑ Back to Table of Contents](#table-of-contents)

#### [Groupby and aggregations using pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=0)** - [Instructor] Arguably, the most fundamental transformation you can perform in [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is the groupby function. Time and time again, this function proves it's worth. So let's dive in. We'll start with the iris data. Now let's apply groupby to iris. In a groupby, you determine the dimensions you want to group by, then specify an aggregation method. As a simple example, let's group by species and apply the maximum aggregation. The result gives us the max for each measurement, and we see we have three total species in our dataset. With groupby, we can pass several different types of aggregations to multiple variables. To do this call .ag after the groupby and pass a dictionary with the variables you are interested in along with their associated aggregations. So for the sepal_length, we return the mean, min, and max, and we'll count sepal_width. Now, here's our output. Notice the hierarchical column index that's created as a result. It's useful to see how this type of column index works. Let's select the sepal_length column from our data. The result that's returned is all three aggregation types we chose for sepal_length. Often, you'll want to flatten hierarchical indexes
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=94)** for simplicity. This approach uses join to concatenate the top and bottom level of our column index. The result combines our variable name with the aggregation used. You can also specify groupings without first applying any aggregation at all. Here, we'll create a grouping of iris by species called groupings. Now with the groupings configured, you can reference the groupings for aggregating and filtering your data. The get_group function operates like a WHERE clause in [SQL](../../Skills/Data%20Science/SQL.md), filtering our data that is a part of the group you specify. Let's return the setosa group. Great. This yields all rows in our data with species of setosa. After defining your groups, you can later call aggregate functions. Here, we'll call max, and this returns an identical output to our max aggregation above. You can also apply Lambda functions to your groupings. For simplicity, we'll apply the max aggregation, which again is identical to the output above. With groupings configured, you can use what is called filter to filter your data frame on an aggregate constraint. This is quite similar to a HAVING clause you might find in SQL. In our example, we are going to filter our data frame for only those species that have a maximum petal_length below 5.
>
> **[3:08](https://www.linkedin.com/learning/advanced-pandas-29724107/groupby-and-aggregations-using-pandas?u=76281980&t=188)** Looking at the table above, we can expect this will only return setosa species. The result is all 50 measurements from the setosa species. So there you have it! You're now equipped to transform your data using panda's powerful groupby function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Code Identifiers:** sepal_length (3), sepal_width (1), get_group (1), petal_length (1)
> **Env Vars:** sql (2), where (1), having (1)
> **SQL:** where (1), having (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Reshaping DataFrames with pivot or stack](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=0)** - [Instructor] After you've got your data and you've begun the data prep phase of your work, there's often a hurdle you've got to jump before you can really extract insight. Often, your data simply is not in the appropriate format or level of granularity needed to begin creating those snazzy visualizations or machine learning models. Luckily, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) offers several easy to use and flexible functions for you to reshape your data. The first of these is called pivot. This allows you to take away a level of granularity from your rows and pivot that to your columns. You simply identify the index you want to use, the variable you want to pivot from your rows to your columns, and which values you want to populate your data frame. Note pivot doesn't perform any kind of aggregation, so for this to work, the index and columns you choose will have to be unique combinations. To show this, we'll create the following data frame. Notice there's two teams per region and revenue and cost data for each region and team. Great. Now let's pivot team to columns using region as our index. For values, we'll use revenue. Now you see region as our index and teams is now up top. The values here represent revenue. Next, we'll use stack to work in the opposite direction.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=99)** That is we'll pivot column labels to our rows, but first, we need to set a multi-index for our data frame. To do this, we use set index and specify region and team.
>
> **[1:59](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=119)** All right, now I'll call the stack function and create a new data frame called stacked.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=132)** Excellent. So now you can see individual rows for revenue and cost and the values for both now lives within the same column.
>
> **[2:26](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=146)** Similarly, we can reverse this process with unstack. That is we'll pivot row labels back to our columns.
>
> **[2:41](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=161)** And now you see revenue and cost each have their own column once again. Note that this is simply the default behavior and you can actually specify at what level in your multi-index you want to unstack. The default is negative one or the innermost index, and we could change that to negative two or negative three to unstack by team or region respectively. Or better yet, you can specifically name the index you want to unstack. For example, let's specify region.
>
> **[3:28](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=208)** Great, now we've got region up top. One other way to reshape your data frames to be mindful of is melt. This allows you to specify ID variables from your columns which will stay intact. All remaining columns or measure variables will be pivoted from the column to the row level. Returning to our original data frame, we're going to designate region and team as our ID variables, then pivot revenue and cost back to the row level.
>
> **[4:20](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=260)** Great. Now, all of the reshaping approaches so far require that we have unique combinations of the row and column variables that we're pivoting. If that's not the case in your data, so for example, say we had multiple revenue entries for each region and team, you'd want to use the handy pivot table function. Here, we set an index, determine which variables we want pivoted to the columns, if any. Then designate our values. We'll go with revenue here. By default, pivot table uses mean to aggregate, but you can specify the method you want to use as well. Excellent. The average revenue by region is higher for team one than for team two. Now, one last thing. Let's add region to columns to see how that changes it.
>
> **[5:27](https://www.linkedin.com/learning/advanced-pandas-29724107/reshaping-dataframes-pivot-stack?u=76281980&t=327)** Now we have the average for each region and team. Basically, pivot table acts like a pandas groupby then unstacks by the variable you specify in columns. Between these methods, there is always a way to get your data in the format you need to take it to the next level. When in doubt, pivot table is the most flexible of the bunch and is a great place to start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Merging (merge, join) and concatenating (concat) DataFrames](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=0)** - [Instructor] Soon after you've gone through the steps to clean up your data frame, you may find it's time to incorporate other data alongside it. Here we'll discuss the many options for emerging and combining data from different data frames. Let's dive in. We'll start by creating two different data frames consisting of letters and numbers. Note the overlap between these two. If you're familiar with [SQL](../../Skills/Data%20Science/SQL.md), you've heard of joins, specifically left joins versus inner joins versus right joins. We'll start by performing a left join between our two data frames. And the function to use in [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is called merge. To merge two data frames, start with your first data frame, a.k.a the left data frame. Then call merge and pass in the second data frame, a.k.a the right data frame. You'll also want to specify the join type. In this case, a left join, and the join criteria. Here we'll match on the number column in both data frames. Excellent. So you see df1 shows up in its entirety and only those letters in df2 that had numbers matching into df1 came through. That's the definition of a left join. Note the underscore X and underscore Y suffixes that have been added as a result of the merge. We'll address that next. The next type of join to use is an inner join.
>
> **[1:39](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=99)** Here we'll only capture the overlap between our two data frames. Often, the column you'll be joining on will have different names in your two data sources. In this example, we use left on and right on to specify the join criteria for each of our data frames. Note, you can join on multiple columns here as well. Great, we see two rows where the numbers match into both data frames. We can also perform what's called a right join, which essentially reverses the order of the left join. Also, we're going to use the suffixes argument to specify how we want our columns to look after joining.
>
> **[2:24](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=144)** There you go. Note that all data from df2, our right data frame was returned along with those that matched from df1. Also see the underscore right suffix applied to the letter column from df2. Another cool operation in Pandas is to union your data frames. Essentially, stacking them on top of each other. We'll use pd.concat to do this. When using pd.concat pass a list of the data frames you want to combine and be sure to reset the index and specify drop equals true.
>
> **[3:06](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=186)** Now we have eight rows of data from both data frames one on top of the other. Note the indexes have been reset. You'll notice that D and C are repeated in our dataset and often we want to ensure uniqueness when unioning data frames. To do this, we can rerun and specify drop duplicates.
>
> **[3:42](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=222)** This drop two rows, and now we have uniqueness in our data frame.
>
> **[3:52](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=232)** You can also use pd.concat to stack data frames horizontally by specifying access equals one, which refers to our column access.
>
> **[4:08](https://www.linkedin.com/learning/advanced-pandas-29724107/merging-merge-join-and-concatenating-concat-dataframes?u=76281980&t=248)** The append function is another handy way to stack data frames vertically. Here, we'll append a series as a new row to our data frame. When creating this series, I'll pass the columns from df3 into the index to simplify the append process. There you go. Now we've got one more row at the bottom with letter Z in number 26. The last topic we'll cover is joining data frames using the index values. To do this, use the join function. We'll create another data frame then join that to our df2. We don't need to specify the join criteria since it will be matching by index, but we do need to add in a suffix for repeated column names. Fantastic. We've run through the most fundamental ways you can join data frames. When you've mastered these approaches, you'll find just about anything is possible with Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is called (1), is an  (1), refers to (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Mapping variables into groups](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=0)** - [Instructor] Sure enough, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) has loads of capabilities to create categories, labels, and buckets within your datasets, all with the goal of deriving insights from your qualitative data. Let's investigate a few options. First, we'll create a DataFrame for counts of salmon on the Skokomish River in Washington State. Here we have species of salmon, where the population is from, and the count recorded for those fish. One really handy function in pandas is called cut. This allows you to create bins for numerical data, then apply those to your DataFrame. We're going to create bins of 2,000 for our count data. Notice here, I import NumPy to make use of numpy.inf, or infinity, for the top end of our buckets. We label each of the buckets as well, from low return to high return. Next, we create a new column in our DataFrame called Count Category, and we pass the count column along with the bins and the labels we've created. This creates our buckets. Great, now you can see the bucketing was successful. Another useful tactic is to create a dictionary which maps values in your DataFrame into groupings.
>
> **[1:36](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=96)** Here we'll create a dictionary mapping species to its federal endangered species status. Next, we'll apply the mappings to our species column using map. It looks good. pandas even has a specific categorical data type that's useful for us as well. We're going to convert our count category column using pandas' .categorical. notice, we passed the column of our DataFrame, ordered equals true, which will make this variable ordinal, meaning high return has a higher order, and pass our labels from above to categories. In the printout, you can see this hierarchy taking place: low returns, less than below-average return and so on. In fact, we can even use this ordering to sort our data. To do this, we'll use sort values by the count category column, and it'll be descending. Look at that, the data is now sorted from the highest return category to the lowest. Another function which is especially useful for [Statistics](../../Skills/Data%20Science/Statistics.md) and machine learning is get_dummies. This allows us to take a categorical variable
>
> **[3:10](https://www.linkedin.com/learning/advanced-pandas-29724107/mapping-variables-into-groups?u=76281980&t=190)** and perform what's called one-hot encoding, by which we create a column for each category and place a one if that is true or zero if not. Here's an example of how that looks. So there you have it. Go forth and categorize your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** get_dummies (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 4. Exploratory Data Analysis and Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Plotting with pandas](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=0)** - [Narrator] [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) is not a data visualization library by any stretch of the imagination. However, it does have built-in functionality to make use of map plot lib on the fly. This is especially useful when performing exploratory data analysis and you want a quick visual representation of your data. As a general rule, if you're presenting your findings with non-technical audiences, there are better options for crafting your visuals. To start us off, we're going to create a time series data frame with two randomly generated values per period. There you go. Now, it couldn't be simpler for us to visualize this data in Pandas, simply call plot. Now we see a graph with two lines spanning the 50 periods in our dataset. An auto-generated legend has been placed on our visual as well. Notice the use of the semicolon at the end of our function. This is included to prevent messy code output from being printed out along with our graph. Now, let's review a few more options for visuals. Here, we'll generate an area graph, which is similar to our line chart above, but it's filled. Note, we pass stacked equals false, but a stacked area of vis is an option as well.
>
> **[1:35](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=95)** Now you can see our lines have actually been stacked one upon the other. Next, let's import the iris dataset. We can see histograms for our dataset very simply by calling dot hist on our data frame. Here, the output shows a histogram for each variable in the iris dataset. This is the type of visual that can really speed along your process by calling out trends in a clean visual manner. Now by instead calling plot dot hist, we can overlay the histograms of our variables on the same axis. Note, when you overlay visuals, you'll want to increase the transparency by altering the alpha parameter. Here, alpha is set to 0.5. The next visualization we'll generate is a scatter plot. We'll designate sepal width for the x axis and sepal length for the y axis. We can then plot each iris observation and assign a color corresponding to the species. Notice here we use dot map to translate each species to a color for our plot. This is another insightful visual. We see pretty definitive clusters forming between our three species. The last plot type for us to review is called the scatter matrix. It will generate scatter plots showing the relationship between each of your variables, and along the diagonal you'll see histograms
>
> **[3:08](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=188)** showing how your observations are distributed.
>
> **[3:22](https://www.linkedin.com/learning/advanced-pandas-29724107/plotting-with-pandas?u=76281980&t=202)** Notice the fig size in our scatter matrix. This parameter allows you to better fit your visuals to the space available on your screen. Reviewing our visual, we can see that petal length and petal width have a very strong positive correlation. This histogram is simply showing the distribution of observations for petal width. Overall, this is a very nice visual to get a very quick understanding of your data. While Panda's visuals may not be the snazziest you'll find, their simplicity and ease of use are hard to beat when you need insights on the fly. Next time you're performing exploratory data analysis, try some of these features out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 0.5 (1)
> **Analogies:** similar to (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [narrator] (1)

#### [Correlations and statistical functions](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=0)** - [Instructor] Long before machine learning and AI became the buzzwords of the century, the humble discipline of [Statistics](../../Skills/Data%20Science/Statistics.md) established the foundation for drawing inference and insight from our data. With [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), you have several statistical functions right at your fingertips. Before we explore the statistics capabilities of pandas, let's import the iris dataset. First, let's explore some of the built-in measures for central tendency. By simply calling .mean on our DataFrame, pandas computes the average for each of our numeric variables. We can similarly return the median values with .median. Now, if we want to return the most frequent observations for each of our variables, we can utilize the mode function. This output takes a moment to interpret. Knowing that a dataset can have multiple modes per variable in the case of a tie, we see that our output returns the mode at index zero, but in the case of a tie, it will add additional rows to represent that. In the iris dataset, there is a three way tie for species, as there are 50 records a piece, so all three show up. We also have a tie for frequency in petal length, so you see two values there as well. Measures of central tendency are valuable, but without also knowing how your data is distributed, they can be misleading.
>
> **[1:37](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=97)** With pandas, you can easily return the standard deviation for variables in your DataFrame. This will tell you the extent to which these variables deviate from their mean. There you go. These are the standard deviations for all our measures. It's often even more helpful to have a visual representation of how your data is distributed. That's where the box plot visual comes in handy. You can easily produce this visual by calling .boxplot() on your DataFrame. There it is. In this visual, the rectangles represent the extent from the first quartile to the third quartile in your data. Remember, one quartile represents 1/4 of your distribution. The whiskers extending beyond are meant to show the range of your data. Dots exceeding the whiskers are considered outliers. Now, the quickest way to get an understanding of your data is the describe function. Simply call this on your DataFrame to yield a thorough list of descriptive statistics. Many of the calculations we performed above are provided, and quartile values show up as well. For more advanced analysis in statistical modeling, it becomes really important to understand how variables in your dataset interact with each other, specifically how well correlated they are to each other. Correlation simply shows the extent and direction in which two variables are related. You can see pairwise correlations between all your variables with .corr().
>
> **[3:13](https://www.linkedin.com/learning/advanced-pandas-29724107/correlations-and-statistical-functions?u=76281980&t=193)** Our output allows you to see the correlation between any two variables. A positive number demonstrates that as one variable increases, the other tends to as well, while negative shows the opposite. The closer to one or negative one, the stronger the relationship. Note the diagonal is all ones as we're correlating variables with themselves. The usefulness of this output can't be overstated. It's referred to as the correlation matrix, and is often a good first step before proceeding to machine learning or statistical modeling. To make this even easier to interpret, we can create a heat map from this matrix. In pandas, calling style.background_gradient on our correlation matrix yields this snazzy visual. Now, with color, it's very clear how strongly and in which direction our variables are correlated. pandas has really made its reputation as an all-around one-stop-shop for data analysis, and with access to these functions, you can probably see why. In your next project, incorporate these statistical techniques and you'll be well rewarded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (6), [Statistics](../../Skills/Data%20Science/Statistics.md) (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** background_gradient (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Beyond pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Accelerate exploratory data analysis with pandas-profiling](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=0)** - [Instructor] The popularity and usefulness of [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) has put it at the center of the [Python Data Analysis](../Data%20Science/Python%20Data%20Analysis.md) universe, so it's no surprise that it spawned countless sister packages and dependencies throughout the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) ecosystem. One related package, which I highly encourage you to use, particularly if you want to accelerate your exploratory data analysis, is pandas-profiling. This simple and intuitive package will effectively take your data frame and output an interactive and highly-comprehensive profile for each variable in your data. It surfaces the descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) for each variable, provides a correlation matrix, and assesses the [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and more. Much of the proceeding work in this course can more readily be done with pandas-profiling. Excited? Me too. Let's dive in. In addition to importing pandas, we'll want to import profile report from pandas-profiling. If you don't have this installed, you can simply install it via pip. Let's profile our iris dataset. To create a profile, use the ProfileReport function, pass in your data frame, and provide it with a title. Next, we'll output the profile in our notebook. Notice the handy progress bar updating. Okay, now let's investigate. To start, we get an overview of our data, the number of observations,
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=94)** how many variables there are, whether there's no values, duplicate rows, everything. You'll notice there's even warnings that are surfaced, which you can see by clicking here. These warnings may or may not be a problem for you, but nonetheless, they're good to be mindful of. We can see profiles of each of our variables in the Variables section. Here you see some descriptive statistics for sepal_length. There's also a histogram of values to the right. We can toggle details to see even more detail. Here we see very in-depth descriptive statistics. You can even see a histogram, common values, and the extreme values in your dataset. This continues for each variable. We can also see interactions between variables. Below, you'll see a scatterplot of the two variables of your choosing. This plot shows all the values of sepal_width and sepal_length. This allows you to eyeball any correlations or relationships that you think are meaningful. Speaking of, we can also output a correlation matrix. This simple visual can tell you whether your variables are correlated to one another and the direction of that correlation. Blue is a positive correlation, and red is a negative correlation. The darker the color, the stronger the relationship. Another handy feature is to see your missing values. Thankfully, we're not missing any in this dataset.
>
> **[3:12](https://www.linkedin.com/learning/advanced-pandas-29724107/accelerate-eda-with-pandas-profiling?u=76281980&t=192)** At the tail end here, you also see a head of your data frame and a tail. Lastly, if you have duplicate rows, you'll find them here. Our dataset has one duplicate. After reviewing your profile, you can output this as an easily shareable [HTML](../../Skills/Web%20Development/HTML.md) file. To do this, use the to_file function and name your HTML file. Using pandas-profiling has become second nature for me, and to get the most out of pandas, I highly recommend you incorporate it into your projects as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (7), [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** python (2), pip (1), find (1)
> **Code Identifiers:** sepal_length (2), sepal_width (1), to_file (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (2)
> **UI Navigation:** toggle (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Explore geographic data with GeoPandas](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=0)** - [Instructor] Some of the most rewarding work I've been a part of has surrounded geospatial data, that is any data that has some locational component to it. It creates opportunities both for analysis and especially in data visualization to do something really cool. In this lesson, I want to introduce you to a sister package of [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) called GeoPandas. As the name suggests, GeoPandas is an extension of Pandas that makes working with geospatial data simple and intuitive. To start us off, we'll import both Pandas and GeoPandas, then create a data frame that has a geospatial component. Here, we're including latitude and longitude readings for five different peaks in Colorado. Now we're going to take this Pandas data frame and convert it to a geodata frame, the GeoPandas equivalent. We pass in the data frame and point the geometry to the longitude and latitude readings. We're using a function called points_from_xy to interpret the latitude and longitude. Notice the output of our geodata frame, geometry is represented as a point containing our coordinates. This is what makes the geodata frame geo. Once you have your geometry configured, you can really begin to do the exciting work. For example, you could overlay a polygon and determine whether your points are inside or outside of it. And of course, now you can map these data points, which is what we'll do next. To map our peak data,
>
> **[1:34](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=94)** we're going to use an excellent data visualization package called Plotly. Specifically we'll import Plotly Express, which is a lightweight and easy-to-use API that is light on the syntax. To visualize our data, we're going to create a Mapbox scatter plot. This requires an access token from Mapbox, which is completely free. When creating Plotly visuals, you want to create a figure, denoted as fig here, which is essentially a dictionary passing our data and customizations in a way that Plotly can easily configure into a visual. The lat and lon in our figure are pointed to our freshly minted geometry field, and we're going to color by peak.
>
> **[2:22](https://www.linkedin.com/learning/advanced-pandas-29724107/explore-geographic-data-with-geopandas?u=76281980&t=142)** Check it out. We can see each of our peaks here denoted by a circle. And if you hover over the circle, you'll see a tool tip with detail. Visualizations in Plotly are interactive, meaning you can move them around, you can hover over them, and you can filter as well. So we've turned our geo data frame into an interactive map. This only scratches the surface of what you can do with GeoPandas. Now, if your work doesn't involve geospatial data, I recommend you seek out some data sources and start to apply these techniques. It's a lot of fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** points_from_xy (1)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Beyond pandas with Dask and Koalas (Spark)](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=0)** - [Instructor] There may come a time when the volume of your data has become so large that you find using [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) to be constraining. Thankfully, there have been rapid advancements in [Big Data](../../Skills/Data%20Science/Big%20Data.md) processing, and in this lesson, we will discuss two frameworks: Dask and Spark, that have proven to be especially useful. We'll also see how pandas can be easily translated into these cutting-edge approaches. So what is Dask? At a high level, Dask is a framework to speed up your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) workload using parallel computing. So instead of running all tasks sequentially, the Dask scheduler allows for simultaneous computing. This takes full advantage of all the compute you have available. One of the key benefits of Dask is it is very compatible with all the existing work you do with Python and pandas In particular. Dask has a DataFrame concept just as Pandas does. In fact, you can think of a Dask DataFrame as consisting of a series of pandas DataFrames. Let's import our Iris dataset as a Dask DataFrame using the read_csv function, which should look pretty familiar to us. Generally speaking, this DataFrame will behave just like we're used to. The next framework to learn about is [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). Spark is written in a language called [Scala](../../Skills/Software%20Development/Scala.md) and is easily called in Python using what's called [PySpark](../../Skills/Data%20Science/PySpark.md). It's also optimized for big data and distributes computing across clusters of compute for fast [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). To aid in the transition from pandas,
>
> **[1:36](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=96)** there's a package cleverly named Koalas, which is the pandas API on top of Apache Spark.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pandas-29724107/beyond-pandas-with-dask-and-koalas-spark?u=76281980&t=107)** This is the standard block to import Koalas, which will import as ks. Now, let's create a pandas DataFrame. Here we have a randomly generated DataFrame with four columns and five rows. To transition a pandas DataFrame into Koalas', you can use the from_pandas function. Sure enough, it looks and acts pretty similarly, but now you can take advantage of the distributed computing powers of Spark. Dask and Spark are each entire courses unto themselves. So if you need to scale up your efforts to process big data, this is where you should look. You can easily get started with Dask on your local machine, and to get a fully-managed Spark experience, you can sign up for the free Community edition of Databricks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (9), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (2), [Scala](../../Skills/Software%20Development/Scala.md) (1)
> **CLI Commands:** python (3), apache (2), find (1)
> **Code Identifiers:** read_csv (1), from_pandas (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your path forward using advanced pandas functions](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pandas-29724107/your-path-forward-using-advanced-pandas-functions?u=76281980&t=0)** - [Brett] Congratulations. You've worked your way through Advanced [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), and we've covered a lot of material. As you continue to work with pandas, you'll find, as I have, that there's always something more to learn and to try out for yourself. One way to hone your pandas skills is to have a textbook to work through in reference. Wes McKinney's "[Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) for Data Analysis" is an excellent resource. And please feel free to reach out to me, Brett Vanderblock, and I'm happy to help you along the way. Once you feel you've mastered pandas, [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured there's plenty more still to learn. For starters, you can work with geospatial data and GeoPandas, and definitely be sure to experiment with [Big Data](../../Skills/Data%20Science/Big%20Data.md) frameworks such as Dask and Spark. I hope you've enjoyed this course, and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **CLI Commands:** find (1), python (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [brett] (1)


## Instructor

- [Brett Vanderblock](../../Instructors/Database%20Management/Brett%20Vanderblock.md)
- [Madecraft](../../Instructors/Data%20Science/Madecraft.md)

## Resources

- Exercise files available

## Skills Covered

- Pandas (Software)

## Path Context

### In [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)
← [Python Data Structures- Trees](Python%20Data%20Structures-%20Trees.md) | **8 of 8**

## Appears In

- [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)

## Related Courses

_Courses sharing skills:_

- [Python in Excel- Working with pandas DataFrames](../Data%20Science/Python%20in%20Excel-%20Working%20with%20pandas%20DataFrames.md) — Pandas (Software)

---

[↑ Back to top](#)