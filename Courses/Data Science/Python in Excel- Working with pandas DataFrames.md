---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-in-excel-working-with-pandas-dataframes
url: "https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes"
duration_minutes: 107
duration: 1h 47m
level: Intermediate
updated: 4/11/2024
learners: 82631
skills:
  - Pandas (Software)
  - Python (Programming Language)
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH4uk98MNH5IA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712361684240?e=2147483647&amp;v=beta&amp;t=RoWpQoF2FnYjGfPy0dgZqqxG_ZsY0Qjg8hxViN_Bg5U"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python in Excel Skills]]'
prev_courses:
  - '[[Python In Excel Getting Started With Data Analysis]]'
next_courses:
  - '[[Data Cleaning and Manipulating with Python in Excel]]'
path_nav: '[{"path":"Advance Your Python in Excel Skills","position":2,"total":7,"prev":"Python In Excel Getting Started With Data Analysis","next":"Data Cleaning and Manipulating with Python in Excel"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/pandas-software
  - skill/python-programming-language
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20in%20Excel-%20Working%20with%20pandas%20DataFrames.md)

![Python in Excel: Working with pandas DataFrames](https://media.licdn.com/dms/image/v2/D560DAQH4uk98MNH5IA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712361684240?e=2147483647&amp;v=beta&amp;t=RoWpQoF2FnYjGfPy0dgZqqxG_ZsY0Qjg8hxViN_Bg5U)

# Python in Excel: Working with pandas DataFrames

> Python and Excel are both some of the most popular “programming languages”, especially for data analytics/data science. Combined, they are even more powerful. In this course, author and Excel expert Felix Zumstein explains how to work with pandas DataFrames in Excel. pandas DataFrames are the backbone of every Python-based data analysis in Excel. Get a thorough introduction to DataFrames. Learn ho

> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes) | 1h 47m | Intermediate | 83K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Python in Excel and pandas DataFrames](#python-in-excel-and-pandas-dataframes)
  - [What you should know](#what-you-should-know)
  - [About Python in Excel](#about-python-in-excel)
- [**1. Introduction to pandas**](#1-introduction-to-pandas) (7 videos)
  - [Hello World](#hello-world)
  - [pandas DataFrame and Series](#pandas-dataframe-and-series)
  - [Data selection](#data-selection)
  - [Calculations, vectorization, and empty cells](#calculations-vectorization-and-empty-cells)
  - [Row filtering](#row-filtering)
  - [Manipulating DataFrames](#manipulating-dataframes)
  - [Python editor and magic commands](#python-editor-and-magic-commands)
- [**2. Data Analysis**](#2-data-analysis) (5 videos)
  - [Data cleaning](#data-cleaning)
  - [Working with text data](#working-with-text-data)
  - [Combining DataFrames](#combining-dataframes)
  - [Data aggregation](#data-aggregation)
  - [Plotting](#plotting)
- [**3. Time Series Analysis**](#3-time-series-analysis) (6 videos)
  - [Introduction to time series](#introduction-to-time-series)
  - [Time series analysis with pandas DataFrames](#time-series-analysis-with-pandas-dataframes)
  - [Shifting and percentage changes](#shifting-and-percentage-changes)
  - [Comparing time series](#comparing-time-series)
  - [Resampling and correlation](#resampling-and-correlation)
  - [Case study: Sales dashboard](#case-study-sales-dashboard)
- [**Conclusion**](#conclusion) (1 videos)
  - [The next steps for learning more about Python in Excel](#the-next-steps-for-learning-more-about-python-in-excel)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python in Excel and pandas DataFrames](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=0)** - [Felix] [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] are two of the most popular tools used in [[Data Science]]. And finally, [[Microsoft]] brings them together in a brand-new feature called Python in Excel. While Python offers you a powerful programming language, Excel gives you an intuitive spreadsheet interface. In this course, I will teach you all about [[Pandas (Software)|pandas]] data frames, the core building blocks of Python in Excel. The fun part, we never have to leave Excel. Hi, I'm Felix, and I'm excited to introduce you to Python in Excel. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (5), [[Data Science]] (1), [[Microsoft]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5)
> **Speakers:** - [felix] (1)

#### [What you should know](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=0)** - [Narrator] This course builds on top of the introductory course "[[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]]" so I would recommend you to watch it before starting with this one. If you don't have at least a basic Python knowledge, please watch a course about Python first. There are various beginner courses here on [[LinkedIn]] Learning such as "Python for Non-Programmers" or "Learning Python." In every video, I will be using an exercise file in the form of an Excel workbook. You can download these files from the course page. There will be two versions of each file. The name of the first version will finish with _begin, and the other one with _end. To follow along the course, use the one named begin. The file version that is named end represents how the file should look like at the end of the corresponding video. Here is a typical sample file. Most of the time, I will walk you through the Python cells from top to bottom. To see the Python code, I will edit the cell. And to edit a cell, either double click it or hit the F2 key. Alternatively, you can always also see the code here in the formula bar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (7)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [About Python in Excel](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=0)** - [Instructor] While I'm recording this course, [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] is still in preview. Right now it's only available on [[Windows]] for [[Microsoft 365]] subscribers who are on the beta channel. It's possible though that by the time you're watching this, it will be available on macOS and the web version of Excel as well. You can always check if you have access by going to the Formulas tab and checking out if you have this Python section over here in the menu. Bear in mind that when Python in Excel becomes generally available, you might need to buy an extra subscription on top of Microsoft 365. Python in Excel runs in the cloud. What this means for you is that you will need to be connected to the internet when you run Python code in the cells. Also, a few things will likely change in the future. However, the concepts in code shouldn't be affected by this. Most likely, you will notice differences along the following lines. It could be that the display or formatting of data frames in Excel will be slightly different, especially around empty cells or how NAN values are displayed. Or the Python in Excel ribbon menu will be organized in a different way, or placed on a different ribbon tab. Also, the Python editor that I will install
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=98)** in one of the videos via Excel's add-in store should be available natively in the future without the need for any add-ins. Despite these changes, I'm confident that you will still be able to follow along easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (7), [[Microsoft 365]] (2), [[Windows]] (1)
> **CLI Commands:** python (7)
> **Code Identifiers:** macos (1)
> **Env Vars:** nan (1)
> **UI Navigation:** in the menu (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Hello World](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=0)** - [Instructor] When exploring a new technology such as [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]], it's crucial to know what tools we have at our disposal. So let's explore them using the classic Hello World example. To use Python in Excel, you need to activate the Python mode in a cell. The quickest way is to write equals PY and hit the tab key. You can also go to the formulas tab over here and click on insert Python, or you can hit the keyboard shortcut, control, alt, shift, and P. Let's write "Hello World" as a simple string into the cell. Since these PY cells are really Jupyter notebook cells, we don't need to wrap this in a print function. Note that hitting enter will add a new line in the Python code, but it won't run your code just yet. So let's make the formula bar a little bigger so we can see multiple lines. Now, to run the cell you need to hit control, enter. The cell automatically shows a representation of the last object in the cell, which in our case is the "Hello World" string. Unlike the default behavior in Jupyter Notebooks, though, Python in Excel will still show that output even if you assign the object to a variable. So if we do hello equals "Hello World" and run that cell again, we can see that Hello World
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=97)** is still printed in that cell. This card icon here means that the cell is in object mode. This, as we've just seen, shows the Python object from the last line of code. By switching it here to value mode, you will get the Python object transformed into a native Excel cell value. There's also a keyboard shortcut for toggling the two modes, CTRL, alt, shift, and M. So here we have object mode and hitting that control, alt, shift, M again gives us back the value mode. In this case, it's just text in a single cell, so there isn't a big difference between object and values. But as we will see in the next video, data frames will spill over multiple cells. Unlike a classic Jupyter notebook, though, when you print something or get an error, Python in Excel will give you the output in the diagnostics pane that opens on the side. So let's call the print function here with the hello variable. Running it opens that diagnostics pane on the right hand side where you can see the printed value. Now since the print function doesn't return a value, Excel now shows none as the output of that cell. Another important thing is the row major order
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=195)** of cell execution. In plain English, this means that Python cells are executed from left to right and top to bottom. Importantly, this includes the sheets as well, meaning that sheets are also run from left to right. So let's add and run another cell with the hello variable below our first cell. This works as expected, however, if I do this on top of that first cell, I am getting an error as the hello variable isn't defined at this point. Like printed output errors are shown here in the diagnostics pane, but they are printed in red. So to fix this and to see how sheets are evaluated from left to right, cut the cell here and paste it anywhere in the sheet number two, and now this works again. Well, this was a quick overview of how Python in Excel works. This means that we are now ready to dive into [[Pandas (Software)|Pandas]] DataFrames.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Microsoft Excel|Excel]] (7), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (11), make (1)
> **Tools:** jupyter (3)
> **Definitions:** means that (3)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** ctrl (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### [pandas DataFrame and Series](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] is all about working with [[Pandas (Software)|Pandas]] DataFrames. So let's see what a DataFrame is and how you can create one from your Excel data. Pandas is Python's go-to library for [[Statistics]], data analysis and time-series analysis. The core data structure that Pandas uses is called DataFrame and it looks and behaves a lot like a spreadsheet or a range of a spreadsheet. A DataFrame has three parts. There's the actual data and then there are column headers and row indices. We normally just call them columns and index. It's usually easy to use meaningful column names such as first name or last name where the schema here shows A, B, C, but the index is often used in its default state, which is an integer index starting at zero and incrementing by one with every row, exactly as shown here on the slide. Importantly, a DataFrame column can only host a single data type, so the whole column must be either strings or floats or Booleans, et cetera. When you extract a single column from a DataFrame, you get a series. You should remember that a DataFrame is two dimensional and has an index and column headers. While the series is one dimensional and only has an index,
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=94)** but no column headers. To turn Excel data into a DataFrame, Python in Excel supports the following sources, multi-cell ranges, named ranges, Excel tables, dynamic arrays, and power queries. We will use all of these sources throughout the course, but for now, let's just focus on a simple range. The exercise file has a small dataset that represents a few fictitious participants of a [[LinkedIn]] Learning course. For each student, it shows a few details such as the score for each chapter quiz and whether the student completed the course. I like to use these tiny datasets to introduce basic concepts as they make it much easier to follow along. No worries, we'll be using bigger and more real world datasets later in this course. Let's create a PY cell and select the range. As you can see, Excel automatically wraps the range with the Excel function. The Excel function returns a DataFrame as soon as the data source contains more than one cell. It also has correctly recognized that the data has a head row, so it has set the header's argument here to true. Let's assign that DataFrame to a variable df,
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=193)** and hit Ctrl + Enter. When you click on the card icon here, you will get a preview of that DataFrame. Because we have set headers to True, the top row is turned into the column headers of the DataFrame. The preview just shows the first couple of top and bottom rows, so to get the full DataFrame switch from object to value mode, like this. As you can see, Excel spills the values across multiple cells, but where's the index? Well, Pandas in Excel is a bit of magic here. When your DataFrame uses the default integer index, it hides it. Don't get fooled by that though. The index is still very much here. If you prefer to look at the data in the Excel grid but your DataFrame is huge, you could use the head or tail methods to only show the top or bottom five rows. Let's see how it's done. So in a PY cell, just say df.head, Ctrl + Enter, and then turn it into the values here, and you can see the top five rows. Or instead of head, use tail to get the bottom five rows from over here.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=283)** Instead of referencing an Excel range, you could also create a Pandas DataFrame from code. Let's switch over to the code tab here. So to create the DataFrame from the introductory slide, you can run the following code here. And as you will see here in the preview, you will get that DataFrame displayed. Alternatively, you could provide a dictionary in this cell, which will get us the same DataFrame as we can see again here by clicking on the icon in the preview. But wait a minute, why could I just do pd.DataFrame without having to import Pandas as pd first? Well, the answer is the initialization script, and you can find this one here. And as you can see in this initialization script, there is import pandas as pd, which is then available in every PY cell throughout the whole workbook. Creating a series works in a very similar way, but you only need to provide a simple list for the data part. So again, we can look at the preview and this is our series. However, we hardly need to construct our own DataFrame with Python in Excel, as we mostly just reference data
>
> **[6:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=378)** that sits in a sheet or in a [[Microsoft Power Query|power query]]. And that's the full roundtrip. We've turned Excel data into a Pandas DataFrame via the Excel function and back into an Excel range again by selecting the values mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (16), [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (4), [[Statistics]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (4), make (1), find (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **UI Navigation:** select the (1), click on (1)
> **Analogies:** such as (2)
> **Prerequisites:** initialization (2)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise file (1)

#### [Data selection](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=0)** - [Instructor] If you want to work with [[Pandas (Software)|Pandas]] data frames, you need to know how to access that part of the data that you need, such as a specific row or column. Let's see how it's done. So data frames allow you to extract subsets by label or position. Label refer to row and column names and position refers to row and column indices. Okay, let's see how this works with labels. You use the loc attribute on your data frame variable, which is df here on the slide. Loc stands for location and accepts both a row and column selection. To understand what we can use for row selection and column selection, let's run through a couple of examples in [[Microsoft Excel|Excel]]. But first we need to turn our sample data from over here into a data frame. In cell L1, we turn the Excel table into a Pandas data frame. You'll notice that the reference in the Excel function isn't a range address now. Instead, it uses the so-called structured reference of an Excel table. Using an Excel table as source has the advantage that the data frame is automatically updated whenever you resize the table. Looking at the preview, it only covers the first couple of rows now, but when I extend my table to cover all the rows
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=94)** and we look back at the preview, you can now see that it covers all the rows now. Like with standard cell references, you don't have to write this formula manually. So let's just rewrite the cell real quick. Select the table here, and as you can see, it automatically pulls in the table name and sets the headers to true. In cell L4, we select multiple columns by providing a list of column names as the column selection and the column for the row selection. Clicking on the object icon here confirms that the code indeed selects the correct two columns. So what does the column mean? The column works the same way as when you slice a [[Python (Programming Language)|Python]] list, so it means that you want all the rows from start to finish. Since selecting columns is such a common operation, there's a shorthand notation for it. So instead of using the loc attribute and providing a column for the row selection, you can directly index and slice the data frame itself. Let's run this in Excel. In cell L5, we have this short annotation in action, and you can see again,
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=190)** it selects the proper two columns. By the way, if you ever need to reorder the columns of a data frame, just select them like this in the order you want. At this point I'd like to make you aware of an important caveat. In the next cell, we select a single column by giving it a simple list. This will return a data frame, as you will see here. Now in the cell below that, we will select a single column by providing a simple string. Now as you can see, this returns a series. The caveat here is that when you look at the preview or when you turn this into cell values, you don't see any difference in the data. So it's important to know that when you want a data frame, use the list for selecting, specifying the columns. And if you want a series, use just a simple string as the column selection. Most of the time, we want a series when we work with a single column. If you don't like the type square brackets, you could also use this notation here, which is the dot notation.
>
> **[4:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=284)** However, this doesn't work with user ID as it has a space or with completed as it has a question mark. So I'll be using the square bracket notation in this course to use a single consistent notation everywhere. And finally, to get a single value from a data frame, we specify the row and column like this. Remember that zero here refers to the index labels that Excel hides from us as we use the default integer index. If you rather want to access data via position, meaning by integer indices, you use the iloc attribute. Again, with row selection and column selection. Let's go back to Excel and have a look at a few examples. In cell L12, I am selecting the first two columns. So we provide the column indices as a list of integers. Looking at the preview confirms that we get indeed the first two columns here. In the next cell below, we do the same, but we use the slicing notation instead. We could also use a slice notation for the same two columns. Again, this should feel familiar from slicing a Python list. Let's just double check it here in the preview
>
> **[6:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=382)** and this looks correct. To get the first entire row specify index zero as the row selection and the column as the column selection. And this gives us the following here in the preview. Well, this may be presented in an unexpected way as the row is turned upside down into a vertical orientation. So Python in Excel shows all one dimensional objects, such as a series or a list, also vertically. So to keep the orientation of our table, we could use a list for the row selection so that we get a two dimensional data frame back. And so this is done in the last cell over here. And when we look at the preview here, you can see that it returns our data frame in the expected orientation here. Again, this is a series where we use a scaler here for that row selection as opposed to below here where we use a list as the row selection. And again, we get a one dimensional series or we get a two dimensional data frame back. And this is how you select subsets of your data frame
>
> **[7:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=476)** by label or position. This will allow you to extract the relevant data for your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (9), [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (2)
> **CLI Commands:** python (3), make (1)
> **Cross-References:** in the next (2), go back to (1), in the last (1)
> **Definitions:** refers to (2), stands for (1), is a  (1)
> **Warnings:** caveat (2)
> **Env Vars:** l12 (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### [Calculations, vectorization, and empty cells](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=0)** - [Instructor] Now that we know how to select columns from data frames, it's a good moment to do some simple calculations. On the way, we'll learn what vectorization means and how empty cells are treated. First things first, as usual, we need to put the source data into a data frame. This time we're using the named range students from over here. Like with [[Microsoft Excel|Excel]] tables, the Excel function here in M1 automatically adds a reference to the named range, so let's quickly rewrite the cell to see that in in action. As you can see, selecting that range automatically pulls in the name of the range, which is students in this case. Now we are ready for some basic math. Having the score for the two quizzes over here in columns F and G naturally asks us to calculate the total score by summing them up. For comparison, let's sum these two columns up first using native Excel formulas. So I would do most likely something like that, summing up these two fields and then applying the formula down over each row. In [[Pandas (Software)|Pandas]], we don't need to iterate over each row. When we look at the code in cell M2, we can see that we can simply sum up the two columns in the form of a Pandas series.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=97)** Looking at the preview, we will see the result. Ignore the num error for now, as we will get back to that in just a minute. The fact that we don't have to iterate over each row when summing up these two columns is called vectorization or a vectorized notation. This really shouldn't be a big deal though, as you can actually work in Excel in the same way, especially nowadays with dynamic arrays. So let me delete that formula from over here and rewrite that formula using Excel arrays. Hitting enter gives me back a dynamic array, and you can see that the concept is really the same as when summing up two Pandas columns. Now let's assume that the system was set up the wrong way and hasn't accounted for one point in the quiz one score. To add the missing point, we can simply write the following code here in cell M3. Note that we don't have to turn the number one into a series or any kind of array first. Again, this is no different from what we can do with dynamic arrays in Excel. Let's put that here for comparison. We can simply sum up the array here with a scaler number one.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=192)** Comparing the results also gives us the same numbers. But let's now go back to the sum of the two quizzes where we jumped over that num error here, because summing up 2.2 plus an empty cell definitely doesn't give us a num over here in the case of the Excel formulas. So to understand what's going on here, we first have to understand how [[Python (Programming Language)|Python]] in Excel handles empty cells when it translates them to Pandas data frames. In string columns, empty cells are translated to none, and for numbers we get NaN, which stands for not a number. The thing is in the floating point world, anything plus NaN returns NaN again. And finally, Excel transforms NaN into the num cell error on the way back from Python to Excel. None is converted to zero, but formatted so it displays none in the cell. Pendas uses NumPy's none object internally, so you sometimes see NaN represented as np.nan. NumPy is one of the libraries that Pandas uses under the hood. And before we go back to Excel, bear in mind that this is one of the areas where Python in Excel may do things slightly differently in future versions.
>
> **[4:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=288)** So to get the same behavior as with native Excel, we'll need to switch the addition to use the add methods here in cell M4. The add method allows us to specify that NaN should be replaced with zero, which is precisely what Excel does behind the scene. So we do that here in the formula by using .add and then say fill value equals to zero. Now, when we run that cell and have a look at the result here, then we can see that we end up again having 2.2 as the result for summing up 2.2 plus an empty cell. And that definitely is the result that you are used to as an Excel user. The same principle applies to all the other added method operations. So here in this overview, we see that we can use mul for multiplication, add for the addition as we've just seen, sub for subtraction, and finally, we have div for division and pow for the to the power of operator. To conclude, we demystified the term vectorization and found out that data frame methods for arithmetic operations allow us to treat empty cell the same way as native Excel formulas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (16), [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Versions:** 2.2 (3)
> **Cross-References:** go back to (2)
> **Definitions:** is called (1), stands for (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Row filtering](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=0)** - [Instructor] When using an [[Microsoft Excel|Excel]] table, the most common operations are filtering and sorting rows. Let's see how this is done with data frames. As usual, in the first cell, K1, we turn our Excel data into a data frame. Now in cell K2, I would like to filter the rows to those students who have completed the course. Previously, we have already used the lock attribute with column names, but lock also accepts a series or list of Booleans. Wherever the Boolean is true, the row or column will be included. So in this statement, we use the complete column to only show those students who have completed the course. As you can see by looking at the preview, this filters the result to only those students who finished the course. But what if we want to show only students from Italy? In this case, we first need to create a Boolean series where true means Italy and falls means every other country. The next cell, K3, shows you that we can accomplish this by comparing the country column with the string Italy. The preview shows us that we get a true everywhere where the country is Italy. So now we can move on to the next cell and use this as our filter.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=96)** And looking at the preview accordingly shows the desired rows. What about if we are only interested in those students from Italy who scored at least five points in quiz one? Let's first look at the score in isolation. The Boolean expression looks like this in cell K5. Now we need to combine this Boolean series with the Boolean series of whether the country is Italy or not. In [[Python (Programming Language)|Python]], we would use the and keyword for this, but in [[Pandas (Software)|Pandas]] we need to use the ampersand like this in cell K6. Why though, do we need to use parenthesis here? When working with Boolean expressions, we need to use parenthesis, as otherwise the ampersand here would compare Italy with the score of quiz one, and this would lead to a rather cryptic error. Let's try it out real quick by removing the parenthesis. The error pops up on the diagnostics pane. So let's reintroduce this parenthesis again to fix that. To use this expression within TF.lock, it may become a bit long, so we could assign it to a variable first,
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=189)** as I am doing here in cell K7. TF stands for true false, but you can obviously also use a more descriptive name. In cell K8, we can now use the Boolean series TF to filter the rows. And as we can see in the preview, this leaves us with just the two rows where the country is Italy and the score of quiz one is over five. Similar to how we use the ampersand instead of writing and, here is how or and not works with Pandas data frames. So, and becomes the ampersand as we've just seen, or becomes the pipe character, and instead of not, we're using the tilde. Let's now look at sorting. To sort the rows of a data frame, we can use the sort values data frame method. To first sort by city, then quiz one, we can write the following in cell K9. Sort values is a data frame method, and I'll say more about data frame methods in the next video. Before we come to an end of this video, let's turn the result into the Excel value so we can look at the full table
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=283)** sorted by city and quiz. All right, from this session, let's remember that parentheses are important in Boolean expressions, that Pandas uses symbols such as the ampersand for Boolean operators, and that using Boolean series is a great way to filter rows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** similar to (1), such as (1)
> **File Paths:** tf.lock (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Manipulating DataFrames](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=0)** - [Instructor] To change data in a data frame or add new column, we can use the lock and I lock attributes that we are already familiar with. Let's get started. Datasets often have issues, so let's assume that [[John the Ripper|John]] over here in row 11 has actually completed the course, but for some reason the data just won't reflect that properly. Luckily, we can fix this in our data frame. As usual, we start in cell K1 by turning our [[Microsoft Excel|Excel]] table into a data frame. However, this time we call the data frame source. Now in the next cell, K2, we copy that source data frame by using the copy method and we call the copy DF. We'll see why we are doing this in just a moment. In cell K3, we want to find out if John completed the course and we can do this exactly the same way as we learned it in the previous video by using a Boolean series for the row selection, along with the name of the column of interest. As the preview shows, this is false, but we know that it actually should be true. So to fix this, we simply have to assign true to the lock attribute as we do here in cell K four. Now this shows non-SD output, so we need to explicitly use the data frame variable DF either in the same cell or as I do here in a, in a separate cell,
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=100)** so we can look again at the preview. As you can see, the value for complete is now true here for the row, for John. This is very important. When we assign a value, we had a lock or I lock attributes, it changes the data frame directly, which is obviously the reason why we are working on a copy of the source data frame. So when we look back at a unchanged source data frame here, then I can see that John still has the false in the complete column. Now, if we often have to look up a user by the user id, it becomes tedious to always write DF user ID equals equals to something for the row selection as we did here in cell K three. Instead, we can set the index of the data frame to the user ID column. Remember, by default a data frame has the default index zero, one, two, et cetera, so we want to change that to be the user id instead. We do this by using the set index method in cell K seven. Just to be sure let's have a look at the index by writing in the next cell, VF index. Looking at the preview, we can see though
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=195)** that this is still the default integer index though, so what's going on? One important caveat with panas data frames is that data frame methods such as set index always return a copy of the data frame with those changes. So you need to assign it back to the DF variable here in cell K nine. If you want to change the data frame DF. Now in the next cell, we can look at DF index again here in the preview. And this time the index indeed shows the user ID. Because it's so important, let's repeat this again. Assigning values via lock, or I lock changes the data frame directly, but using a data frame method such as set index returns a copy. So you need to always assign it back to the data frame variable if you want to change that original data frame. As usual there are a few exceptions to that rule where a data frame method actually changes the original data frame, but for our purposes we can ignore this. So with the user ID being the index of the data frame, we can now simplify our code to select a specific value
>
> **[4:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=290)** as shown here in cell K 11. In the next cell, we can again double check the DF here in the preview just to make sure that John has still a true in the complete column. Next, I'd like to recalculate the total score for the two quizzes here from an earlier video, but now added to the data frame as an additional column. So in cell K 13, we're calculating the total score as we did in an earlier video. And in the cell below, we can now assign the total score series to a new column name by using the lock attribute. Again, remember, this changes the data frame DF directly. To double check this, let's turn the DF variable here on the last cell into values. And scrolling here a little bit to the right, we can see that we now have this additional total score column appended to our data frame. All right, from this video, let's remember two things. First, assigning values via lock and I lock changes the data frame directly. And second, calling a method on a data frame returns a copy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (5), [[Microsoft Excel|Excel]] (1)
> **Cross-References:** in the next (4), previous video (1)
> **CLI Commands:** find (1), make (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Python editor and magic commands](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=0)** - [Instructor] While following the first couple of videos, you may have been wondering if there was a better option than editing the code in the cell or in the formula bar. Yes, there is, and it's called [[Python (Programming Language)|Python]] Editor. Let me show you how to use it. With the beta version of Python in [[Microsoft Excel|Excel]], the Python Editor has to be installed manually via Excel's add in store. In the future though, this will most likely be integrated directly here in the Python menu in the ribbon so you won't have to install the add-in anymore. If you're still on the beta version, though, as I am, here is how you get the Python editor. Go to file, get add-ins, and then search for Excel labs. Hit enter. Then here it is, click on add and continue. It'll turn up here on the side pane. If you close it, you can go to home and then here, activate it again. The Excel labs add-in is basically hosting a couple of different add-ins. So for the Python editor, scroll to the very bottom. Click on open and you'll see this editor here with cells similar to a Jupyter notebook. Let's make this a bit bigger by dragging the bar to the left. One advantage you get is that you can see all your Python cells from top to bottom. So even if you have a Py cell hidden away
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=95)** in a column to the far right, it'll turn up right here. One caveat though is that the Python Editor currently doesn't automatically populate the Excel function here with the cell reference. However, this may change when Python in Excel gets out of beta, so make sure to double check this on your end. To keep things simple, I will stick to the cell and formula bar for this course. However, I encourage you to try out this Python Editor, as you will get better code completion, as well as a preview here of the output. Sometimes you'll need to click on show more to see what's going on. I've already mentioned that the editor is similar to a Jupyter notebook, but even without the editor, Python Excel is really a Jupyter notebook, which means that you can also use magic commands. Cell magics start with two percentage signs and one of the most wildly used cell magic is %%time, which measures how long it takes the cell to calculate. So to measure the execution time of a cell, simply put %%time in its first line. So let's search for a good cell for us to try this out. For example, we can use the set index cell here on K7. Hit enter to insert an empty line
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=191)** and then say %%time. Now hit on Ctrl enter and it'll print the time it took. So Python in Excel shows it under the diagnostics pane. Usually you are interested in the wall time, as this represents the time it took to run the whole cell from start to finish. However, since this result will vary greatly with every run, you can execute a cell multiple times and take the average time to get a more reliable result. That is what time it is here for. So let's change this here from time to time it and rerun the cell again by clicking control enter. Now you can see that the cell has been run a thousand times, and we do have more reliable numbers here. So in this video we've learned that Py cells are really Jupyter notebook cells and that the Python Editor can make it easier for you to write Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (14), [[Microsoft Excel|Excel]] (8)
> **CLI Commands:** python (14), make (3)
> **UI Navigation:** click on (3), go to (2)
> **Tools:** jupyter (4)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** install (1), you'll need (1)
> **Definitions:** means that (1)
> **Best Practices:** make sure to (1)


### 2. Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Data cleaning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=0)** - [Instructor] Data is almost always in a messy state, so let's see how we can clean it by handling missing and duplicate data. As usual, in sale K1, we're turning the data into a data frame. Nothing special here, so let's jump right into the next cell below, which shows the usual first step in a data analysis calling the info method on a data frame. So let's run this cell by hitting control enter. This gives you an idea about the index and about the number of observations and data type for each column. Now may actually be a good time to mention that [[Pandas (Software)|Pandas]] shows the data type object for strings. However, because the output is printed, it appears here on the diagnostics pane, far away from the [[Python (Programming Language)|Python]] cell. Printing also has the side effect of making the diagnostics pane show over and over again whenever the sheet is recalculated. That's why I tend to avoid printing in Python, in [[Microsoft Excel|Excel]], if anyhow possible. In this case, we can do the following. We can show the index here by turning it into a string and in the 2 Py cells below, we can call the D types and count attributes. The preview of D types is a little hard to read, but maybe that improves in the future. By looking at the preview of count, I can see
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=97)** that some columns have more records than others. For example, quiz 1 has 12 while quiz 2 has only 11 records. To calculate some [[Statistics]], I may decide that I only want to include students who have a score for both quizzes. To do this, Pandas offers the drop NA method that we can use in cell K6. Instead of looking at the values in the preview, let's see how many records we get. We can directly append count to drop NA here in cell K7. Putting one method after the other is called method chaining. This works because as you may remember, methods return a copy of the changed data frame, which then serves again as the input for the next method call. Now looking at the preview, this gives us 10 records across all columns. I would've expected 11 though, as this is the number of records for quiz 2. What's happening here is that drop NA drops a row as soon as there is an NAN value anywhere in the row. So a missing city will also cause the row to be dropped. To prevent that, we can provide quiz 1 and 2 as the subset parameter here in cell K8. Looking at the preview again now returns 11 records for both quizzes as expected.
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=191)** So let's drop the rows with missing quiz scores and assign the result back to the DF variable here in the next cell. By looking at the preview, we can confirm that Emel who is missing a score for quiz 2 now doesn't show up anymore. As a next step, we want to remove any duplicate signups. We'll consider a user to be the same if they have the same name, year of birth and city. In our dataset, we have Martina here who signed up two times, once in row 9 and once in row 13. The drop duplicates method here allows us to fix this in cell K10, and since this is a long line, it may be easier to read here in the formula bar. As the preview shows, this leaves us with the first observation, so let's sort by user ID first so that we keep the account with the lower user ID. And you can see here in cell K11 how this is done. Again, this is a long line, so maybe easier to read here in the formula bar. And that's it. Now we have a clean dataset free of duplicates, and with only those rows where the student has a score for both quizzes.
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=285)** And with a clean dataset, we can run the describe method in cell K12. So let's turn this into values to see what's going on. Describe gives us a few statistical key measures. For example, we can see that quiz 2 has a higher mean and standard deviation than quiz 1, but a lower median. To conclude, with only a few commands, we cleaned the dataset and got some descriptive statistics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (2), [[Statistics]] (2), [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Env Vars:** nan (1), k10 (1), k11 (1), k12 (1)
> **CLI Commands:** python (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Working with text data](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=0)** - [Instructor] One thing [[Python (Programming Language)|Python]] is really good at is text manipulation. So let's see how we can access Python's string methods to clean up messy DataFrame columns. When you let users type in their name or address, you'll end up with a bunch of malformed text, like, we can see here in column B. There's always someone who has caps lock on and spaces at the beginning or end of the text is also very common. As usual, in the first cell K1 here, we are merely turning the data into a DataFrame. So let's get straight into cell K2. That shows us how to access Python's string methods from a DataFrame column. So to strip off any white space at the beginning and end of the [[Microsoft Word|word]], we can use the strip method, but importantly, to do so, we need to use the str attribute on the DataFrame column. In the preview, we can see that all names are now properly aligned. However, there is still something going on with the capitalization. To make every word start with a capital letter, we can use the title method. I am appending this right after the strip method here in the cell below. Remember, this is called method chaining. With method chaining, however, we need to make sure to repeat the str attribute
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=95)** if we are using string methods. In the preview, we can see that the name column looks good now. Remember though that methods return copies of the DataFrame or series. So we need to assign the clean series back to the Name column like we do here in cell K4. As this is a long line of code, it may be easier to look at here in the formula bar. In the cell below, I have df, which means we can look at the original DataFrame here and can confirm that the name column has been cleaned up indeed. So let's go ahead and split the name up into two separate columns in the next cell, K6, one for the first name and one for the last name. [[Pandas (Software)|Pandas]] offers the split method that we can use for this, and again, it's a long line of code, so this may be easier to read in the formula bar. The first argument is a space, which defines the character we use for splitting. n=1 means that we just want a single split. So after the first space, it allocates the [[Representational State Transfer (REST)|rest]] of the string to the last name. And finally, expand=True is required
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=189)** to split the parts into new columns. Looking at the DataFrame now in the cell below gives us two additional columns if we scroll to the very right where we have the first and last name in a separate column. One caveat when working with text is string concatenation. When using DataFrame columns, we can't just use the usual f-strings from Python directly. So to combine the city and the country into a single column like we do here in cell K8, we have to use the plus sign as an easy way to combine the different columns. When we look at the preview though, we probably want to get rid of those angle brackets around the country name. To do this, in the next cell, I can simply slice off the first and the last character of the country. Again, to do this I have to use the str attribute. And when we look at this in the preview, it has now the city name and the country name, combined in a single column. There's really a lot you can do by just using string methods.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=283)** For example, if you want to filter the table for names that contain the name [[John the Ripper|John]], you can use the contains method as I show here. Again, long line of code, easier to read here in the formula bar. So turning it into lowercase first, make sure that we find John, no matter the capitalization in our DataFrame. So this expression will turn a Boolean series with true where the cell contains John and false where it doesn't. And from an earlier video, you probably remember that we can use this to filter the DataFrame to only those rows that contain the name John, like shown here in the last cell. And as this is our last cell, let's go ahead and turn it into values so that we can look at the filtered table in [[Microsoft Excel|Excel]]. And that is how you can use Python's string methods on DataFrame columns. This should hopefully save you from one or the other complex Excel formula.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[John the Ripper|John]] (4), [[Microsoft Word|Word]] (2), [[Microsoft Excel|Excel]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5), make (3), find (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Cross-References:** in the next (2), in the last (1)
> **Analogies:** for example (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Combining DataFrames](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=0)** - [Instructor] Most of the time, your data doesn't come in one piece. Instead it is split up across different [[Microsoft Excel|Excel]] ranges, sheets, or files. Let's see how we can combine these parts into a single data frame using the [[Pandas (Software)|Pandas]] functions concat and merge. In this version of the exercise file, we have a separate tab for students who took the course in January, February, and March. And, as so often with data in Excel, the format isn't consistent across the sheets. In February, the order of the columns was mixed up, and in March, the complete column is missing altogether. However, this is not something we need to worry about as Pandas has a superpower called data alignment. This means that columns are aligned according to their column names when being glued together. On this slide, we have a data frame one and a data frame two. To glue them together vertically, we can use the concat function. "Concat" stands for concatenation and is the technical term for gluing something together. In the resulting data frame, column C and B from data frame two are aligned with the respective columns from data frame one and, since column A doesn't exist in data frame two, it will be filled with NaNs. Let's now switch back to Excel and get some practice. First of all, let's put the individual parts
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=98)** into a data frame variable in cell K1. Then we can stitch them together in cell K4 using the concat function. We call the combined data frame quarter one. As you can see in the preview, it takes over the column order of the January data frame and matches the columns up with February and March data frames. Where we had a missing column in March, Pandas fills in NaNs, which turned up as NUM cell errors here. Now we have another sheet here called quiz three. This only has a few user IDs with the score from an additional quiz, three. To add this as an extra column to our quarter one data frame, you'd probably use something like VLOOKUP or XLOOKUP in native Excel. In Pandas, we can use the merge function. But first, let's put the data into a data frame here in cell K7. We call the data frame quiz three, and this is how it looks when we have a quick look at the preview. So now we can merge that data frame with our data frame, quarter one, in the cell below in cell K8. To do this, we're using the merge function, which accepts the two data frames
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=192)** as the first two arguments. The on argument defines which column is used to align the rows. When looking at the preview, we can see that this only returns two rows. So what happened to the other rows of the quarter one data frame? By default, the merge function uses a so-called inner join, which means that it only returns rows where the user ID exists in both data frames. If we want everything from our quarter one data frame, which is on the left of the quiz three data frame in our merge expression, we can supply how="left" as we do here in cell K9. Let's turn this into values. Now we have every row for the quarter one data frame with the additional information wherever we have them for quiz number three in this additional column. This may have been a little fast, so let's look at how merge works in a little more detail. On the merging tab, I have prepared two small and schematic data sets so we can see exactly what the different merge types are doing. I am calling the two tables df1 and df2 here in cell J1.
>
> **[4:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=281)** We are joining the tables on the ID column. So when we go for the inner join here, in cell J3, it only finds one row the, ID1, which exists on both tables and returns it. By the way, I have already turned all these PI cells into value mode, so you can see what's going on without having to click on the preview icon. When we go for the left join in cell J6, it takes the IDs from the data frame that comes first or is on the left here in the merge function and matches up all rows from the right data frame using the ID column. Where it doesn't find the same ID on the right data frame, it inserts an NaN value that Excel here displays as NUM cell error. The right join here in cell J11 goes the other way around. It takes all the rows from the right table, which means our df2, and matches them up with rows from the left table, which is our df1. And finally, the outer joint here in cell J15 takes the unique values of the combined ID columns from both sides and, again, fills in those cells where we don't have a match with NaNs. So we've learned that Pandas data alignment
>
> **[6:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=375)** is a real killer feature and is responsible for making the combination of multiple Excel ranges or tables a lot less error prone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Pandas (Software)|Pandas]] (5)
> **Env Vars:** num (2), vlookup (1), xlookup (1), id1 (1), j11 (1)
> **Definitions:** means that (2), stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Data aggregation](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=0)** - [Felix] To calculate statistical measures across a subset of your data, you can use the DataFrame method groupby. Let's see how it works. As usual, we start in cell K1 by turning our [[Microsoft Excel|Excel]] table into a DataFrame that we call df. To calculate the average score for each quiz, we can use the mean method. First, let's select the Quiz columns here in cell K4. As the preview shows, this returns a DataFrame with the expected columns. Now let's call the mean method on that DataFrame in the cell below. This returns a series, and the preview shows us that Quiz 2 has a slightly higher mean than Quiz 1. By default, the mean and other descriptive [[Statistics]] ignore NaN values. Luckily, this is in line with how Excel treats empty cells when calculating the average, which is the corresponding Excel formula to calculate the mean. Now, I'd like to dig a bit deeper and calculate the average score per country. To do this, we need to first select the columns we need, then group by country, and finally calculate the mean. Let's start in cell K8 by picking the required columns. A quick look at the preview shows the DataFrame
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=94)** with the selected columns. Now let's use the groupby method on that DataFrame in the cell below. This returns a DataFrameGroupBy object, which isn't giving us anything just yet. To get something useful out of groupby, we need to add an aggregation method, basically a method that does something with the values in each group. In our case, we're calling the mean method here in cell K10. Since this is a long line of code, you may want to look at it in the formula bar. Instead of mean, you could also use other aggregation methods, such as min, max, or count. One caveat here is that [[Pandas (Software)|pandas]] drops rows where the grouping key is NaN, or, in our case, an empty cell. To prevent that, add the argument dropna=False, as you can see here in the cell below. Looking at the preview, you can see that we now also get the average score for those students who haven't provided a country, here in the last row. Alternatively, we can replace NaNs with a string in the DataFrame before applying the groupby method. K12 shows you how you can replace NaNs with the string "Other" in the country column.
>
> **[3:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=194)** In the cell below, we are grouping by country and taking the mean again, which now includes the empty cells as we have replaced them with the other labels. And because this is the last cell, we have room to turn this into values, and we can see that the row with the Other label is turning up here. And that's how groupby works. It's a great way to get insight into meaningful subsets of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Statistics]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** k10 (1), k12 (1)
> **UI Navigation:** select the (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** caveat (1)
> **Speakers:** - [felix] (1)

#### [Plotting](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] gives you access to the plotting libraries Matplotlab and Seaborn. In comparison to native Excel charts, they offer additional and more complex chart types and they can plot bigger datasets. Matplotlib is Python's go-to library for static plotting. By static, I mean that the plot is really a picture without any interactivity. However, Matplotlib is a low-level library, so it can take a lot of code to achieve a fairly simple thing. This is why [[Pandas (Software)|Pandas]] makes it easy for us to create a plot from a data frame without having to use Matplotlib directly. Seaborn is also built on top of Matplotlib. It provides a simpler way to generate complex statistical plots. We'll use Seaborn in the last part of this course, but in this video we're going to concentrate on using Matplotlib via Pandas. To learn how to use Pandas for plotting, let's visualize how many students come from each country. After turning the Excel table into a data frame in cell K1, we can use the value counts method on the country column here in cell K4. As the preview shows, value counts counts the unique values. In our case, it counts how many students we have
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=95)** from each country. However, to keep those students who haven't provided a country, we need to replace NaNs before calling value counts here in the cell below. I am using unknown instead of NaNs, but you can use any other string. And as this is a long line of code, you may want to look at it in the formula bar. To visualize this, you absolutely can use a native Excel chart in this case. So let's turn this cell into value mode and then insert a chart. As simple as that. Let's make it a bit smaller and move it to the side. Now let's do the same with Pandas. The only thing I have to do is to call the plot method here in cell K13, and I'm calling the plot method here on the value counts series that we have stored in that previous cell, K5. The preview shows us the plot, but to get a proper picture, you need to right click on it and say display plot over cells. Now we have a dynamic plot which updates whenever the source data changes. However, the plot is a line plot by default. Let's turn it into a bar chart
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=191)** by adding kind equals bar. And while we're at it, let's also add a title here in that cell, K14. Again, we can look at the preview or we can just simply repeat that command again, right click and say display plot over cells. So now we have the bar chart with the country title. And finally, the default style of Matplotlib is really a bit boring, I would say. So we can set a style here in cell K14. We can write PLT style use and then use a style name. I'm choosing BMH. And rerun this again. And you can see that there is a slightly nicer looking plot turning out. Note that PLT here is pre-imported in the initialization script from over here. And PLT stands for the so-called pyplot interface of Matplotlib. If you don't like this specific style, you'll find more styles in the Matplotlib documentation, but the important thing here is to set the style before using the plot method.
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=287)** So Matplotlib is a fantastic addition to Excel, but since it's a low-level library, I would recommend you to use the plot method of Pandas data frames to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** plt (3), k14 (2), k13 (1), bmh (1)
> **Definitions:** is a  (4), stands for (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Analogies:** picture (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)


### 3. Time Series Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to time series](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=0)** - [Instructor] [[Pandas (Software)|Pandas]] was born at a hedge fund and that's why it's really good at working with time-series. So let's go ahead and learn the very basics of time-series analysis. First of all, what is a time-series? A time-series is a series of data points along a time-based axis. Honoring the roots of Pandas, we'll use historical stock prizes for this last part of the course. The things we are learning though could be applied to any time-series, whether that's data from a fitness tracker or a thermometer. Now, [[Microsoft Excel|Excel]] doesn't have its own data type for a date and time. Instead, it simply formats a number as a date. So when I turn this date in cell A1 into a general format instead of a date format, you can see that it's just a float. The integer part represents the date and the decimal part represents the time. Let's undo this so it shows the date again. Cell C1 simply references that date formatted cell. And so far we can only see that it shows the same date and time as the naive Excel cell. But when we wrap this into repr in the cell below, we can see how [[Python (Programming Language)|Python]] in Excel
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=95)** translated this into a Python datetime object. repr stands for object representation and you see datetime twice, because the datetime class lifts in a module with the same name. The lack of any time zone information in the object representation here tells us that it is a so-called naive datetime object. This makes perfect sense as Excel doesn't support any time zones. But in Python, you would have the option to attach a time zone to these datetime objects if you need to. We're not getting into that though. Instead, let's move on to the time series sheet where we have a mini time-series on the top left with only two data points. Naturally, we first have to turn the Excel table into a DataFrame here in cell E1. When working with time-series, you want to do three things before anything else. Check the data types, set the index, and sort the index. Let's run through them one by one. Check the data types. Well, this isn't really specific to time-series, but things are much more likely to go wrong when time-based data is involved.
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=189)** So make sure that the data type of the time-based column is datetime. Otherwise, Pandas has no idea that this is supposed to be a time-series. When looking at the preview, we can see that this looks good as we have datetime over here. If that wouldn't be the case, you would either have to format your cells properly with date format, or alternatively, you can use the Pandas function, which is called to_datetime to fix this. The next point is set the index. Set the relevant column with the timestamps as the index. This will make it easier to select specific timeframes and is required for some time-series related calculations. And finally, sort the index. We need to sort the index so that the timestamps are properly ordered. Sorting is important as time-series data has an explicit order. For example, looking at unordered time-series data in a plot wouldn't make sense. When we now look at the DataFrame in cell E8, then we get a properly sorted time-series when we turn this into the Excel value mode. And that's how the very basics of time-series work with Python in Excel.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=283)** This means we are now ready to play around with historical stock prices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (3)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Code Identifiers:** to_datetime (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Time series analysis with pandas DataFrames](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=0)** - [Instructor] Let's get started with some real-world [[Time Series Analysis]] using the historical price data of the [[Microsoft]] stock. To get our historical stock data, we can use the stock history formula here in cell B5. Just in case you don't have access to this formula in your version of [[Microsoft Excel|Excel]], you can use the data from the value sheet instead. The stock history formula accepts a stock ticker and a start and end date. This gives us the close price of the Microsoft stock for each trading day. As usual, let's turn this into a data frame here in cell F1. Since the stock history function returns a dynamic array, Excel will refer to it by the top left cell, followed by a hash sign. This is great, as the data frame's source will adjust dynamically according to the data returned by the stock history function. As we previously learned when working with time series data, we want to double check the data types. So let's do that here in cell F4. Looking at the preview, we can see that we are lucky because the date column has the proper date time data type. Then let's set the date column as the index in the cell below, and finally, make sure that the index is properly sorted here in cell F6.
>
> **[1:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=101)** Now to get a sense for the data or spot any obvious errors, it's always good to have a quick look at the plot. The preview here shows a reasonable chart for the recent history of the Microsoft stock performance. A great feature with a time-based index is that you can easily select specific timeframes. So I want to look at the year 2023 here in isolation. So to do that, I can use the .lock attribute with the year. It's important to use a string and not a number for the year, though. The preview shows us that the data goes now from January to December, 2023 and covers 250 trading days. Similarly, if you want to know how the stock performed in the last quarter of 2023, you can use this string format here as shown in cell F9. Let's append the plot method to that expression from the previous cell. We can either look at the preview or right click on the cell and select display plot over cells. And this will give us the chart for just the last quarter of 2023. Now, if you'd like to know the weekday for each date,
>
> **[3:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=200)** you can use the day, name, date, time method. So in cell F13, I am using the day name method directly on the data frames index. Looking at the preview, we can see that our time series starts on a Thursday, but here's the thing. To use date time methods on a regular column, you need to use the DT attribute. To see this in action, let's copy the index back as a regular column in cell F14. And to get the day name again from that date column, we now have to use the DT attribute as shown here in cell F15. Turning this into Excel values will give us the name of the day for each trading day. So from this video, let's remember that [[Pandas (Software)|Pandas]] makes it easy to select specific timeframes via strings, and that date time methods require you to use the DT attribute on regular columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Microsoft Excel|Excel]] (3), [[Time Series Analysis]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** f13 (1), f14 (1), f15 (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Shifting and percentage changes](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=0)** - [Felix] Calculating percentage changes is a core part of [[Time Series Analysis]], but the way you do it with data frames is a bit different from the classic spreadsheet formula. So let's see how it works. I have pulled the open and close prices here for the [[Microsoft]] stock using the stock history function, but I have stored the data as values. I have, however, left the formula in a comment here for your reference. Let's run through the first couple of cells quickly as this is just the usual preparation for working with time series data. So we're turning the source data into a data frame here in cell G1. Then we double check the data types in cell G4, and we also set the index and sort the index as usual. The only other thing we're adding here is dropping rows with NaN values in cell G7. So we are left with only rows that have both an open and close price. Now to find out if a stock did well over a certain period of time, we can look at its percentage change. In order to calculate this, [[Pandas (Software)|pandas]] offers the pct_change method, as we can see here in cell G10. Looking at the preview, we can see reasonable positive and negative percentage changes.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=96)** The percentage change is also called the simple return. However, financial analysts often use the logarithmic return instead as it is easier to work with and is often assumed to follow a normal distribution. And here's the definition. Log returns are defined as the natural logarithm of the ratio of the current and previous price. Pandas doesn't have a built-in method for this, so we will have to calculate it ourselves. And with pandas, it works a little different from what you would expect coming from a spreadsheet. With data frames, we work with shifted time series like you can see here in cell G13. In the preview, you can see that the shift method pushes the values down by the provided periods, in our case, one, while it keeps the index unchanged. This allows us to stay on the same row for the calculation in the next step, or in more technical terms, we can use the vectorized notation. What I mean by that is that in cell G14, we can simply divide the original data frame by the shifted one without having to write any loops. And looking at the preview, we can see that here is data alignment at work, one of pandas' killer features,
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=192)** which we introduced in an earlier video. What's happening here is that pandas aligns both the index and columns for the division according to their labels. By the way, we can use the division operator here instead of the diff method as we got rid of the NaN values previously. What's left now is to take the natural logarithm of this ratio here in cell G15. We can do this by using NumPy's log function. NumPy is one of the packages that pandas built upon, and it's imported in the initialization pane with the alias NP. Now, NumPy's log function is a so-called universal function, which just means that it works on every element of a pandas data frame. A little caveat here, in NumPy, log is the natural logarithm, so it corresponds to what [[Microsoft Excel|Excel]] calls LN. And finally, to visualize all these log returns, we can plot a histogram here in cell G18. And we could either look at the preview here or simply right click and say Display Plot over Cells. And this already gives us a good first idea about the distribution of the daily log returns. And just like that, we went from stock prices
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=287)** to plotting the histogram of daily log returns in a very clean and concise way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[Time Series Analysis]] (1), [[Microsoft]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** g10 (1), g13 (1), g14 (1), g15 (1), g18 (1)
> **Definitions:** is a  (3), defined as (1), means that (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** pct_change (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)

#### [Comparing time series](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=0)** - [Instructor] The more the merrier. So, let's use the historic prices of a couple of tech stocks to compare their performance. In addition to the [[Microsoft]] stock from before, we have the tickers for [[Google]], Apple, Amazon, Meta, Netflix and Tesla. I loaded the historic prices using the stock history function and then converted the data into values. However, I'll have the formulas here as cell comments for your reference. You will notice that Meta and Tesla start at a later date than the [[Representational State Transfer (REST)|rest]] of the stocks, and the reason is simple. They just weren't traded before that date. Now, to compare these stock prices, we need to create a data frame for each ticker along these lines here. This will then allow us to align the values according to their dates by using the CONCAT function. So, let's switch over to the calculation sheet. In the first cell, B1, we are reading in the first row with the stock tickers. Squeeze turns a single column data frame into a series, and by using drop NA, we are getting rid of the empty cells. Accordingly, we are looking at a series of tickers here in the preview. In cell B2, we are reading in all the prices
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=96)** starting from the second row of the prices sheet. We are calling the data frame source. And let's have a quick look at the preview. So you can see, it reads in all of the time series for all the tickers. Now we need to split the source data frame up into the individual stocks here in cell B3. There's a few things going on here. Basically, we are looping through the columns in pairs because there's always a date and a close column particular. Then we set the index and we also set the ticker as the column name and drop rows with NANs. And finally, we are adding that single stock data frame to a list with the name parts. And now we can combine all the data frames in the parts list again in cell B4 Before using CONCAT. We are also sorting the index in the same cell. Since we are concatenating the individual data frames along the vertical axis, we need to provide axis equals one as an argument. This will give us a data frame where all the rows are now properly aligned as the preview here shows.
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=191)** So when we scroll to the right, we see that Meta and Tesla start with NANs, as their history doesn't go back As far as the history of the other stocks. To restrict the data frame to a timeframe where all the price histories overlap, we can use drop NA in cell B5. Let's plot this in the cell below to see what we got so far. The preview looks pretty reasonable. The only issue here is that every stock starts at a different price, so we can't yet compare them on this chart. Let's fix this by setting the start price for all stocks to the same starting price of 100, a process that is called re-basing. Here in cell B7, we are dividing the prices data frame by its first row. While the prices data frame is two-dimensional, the first row is a one-dimensional series. However, [[Pandas (Software)|Pandas]] automatically copes with the difference in dimension, so it can perform an element wise division. Technically, this process is called broadcasting. Since we've dropped the rows with NANs previously, we can use the arithmetic operator here instead of using the respective methods like diff or mull. Now, we can plop this again in cell B8.
>
> **[4:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=291)** Let's right click on this and select display plot over cells. This allows us to look at the chart and see where we should have invested our money back in 2012. And that's how you leverage the power of Pandas to be able to compare the individual stock prices that the stock history function returns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Microsoft]] (1), [[Google]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (2), is a  (1)
> **Env Vars:** concat (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Resampling and correlation](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=0)** - [Instructor] Changing the frequency of time series and looking at their mutual correlation coefficient are important concepts in [[Time Series Analysis]]. Let's see how it's done. On the Prices sheet here, I have the data of the prices data frame from the previous video. In other words, it's already a clean dataset. So, let's switch over to the Calculations sheet and turn it back into a data frame with the date as the index here in cell B1. Having a quick look at the data here in the preview shows us that these are daily time series, but if you are a long-term investor, a daily time series may be too noisy for [[Statistical Analysis]]. So, we want to change the frequency of the observations from daily to weekly. This is called resampling. And accordingly, [[Pandas (Software)|pandas]] has a method called resample, as we can see here in cell B4. As an argument, you have to provide the desired frequency. In our case, I am choosing weekly on Fridays. For other possible frequency strings, you can check the pandas' docs. Then, you need to chain another method to define how you resample in the cell below here. In my case, I am using last,
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=95)** so if Friday is a holiday, it takes the value of the last business day of that week, which might be Thursday or even earlier in the week. We're storing the result and the variable weekly prices. And looking at the preview here confirms that the index now has a weekly frequency. With weekly prices, we can move on to calculate the weekly log returns here in cell B6 using the formula from an earlier video. So, to get an idea about how much the various stock prices move together over time, we can look at the correlation coefficient of the returns. As a quick recap, the correlation coefficient moves between -1 and +1, where 1 means the strongest correlation and 0 means no correlation at all. In pandas, to calculate a correlation matrix, all I have to do is use the core method here in cell B9 on the data frame with our log returns. Looking at the preview gives us the full correlation matrix where you can read off the correlation of each stock with the other one. I personally love this functionality as the built-in [[Microsoft Excel|Excel]] function CORREL only accepts two datasets
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=188)** and can't calculate a full correlation matrix. Now, looking at all these numbers may make you a bit dizzy, so to make things easier, we can visualize this correlation matrix as a heat map. To do so, we will use seaborn here in cell B12. As mentioned in an earlier video, seaborn is built on top of Matplotlib. And it makes statistical plotting a lot easier, including our heat map. Seaborn is already imported with the alias sns in the initialization pane, so we can directly use it in cell B12 here. Looking at the preview, this gives us something, but it isn't really usable just yet. What we want is a literal heat map, so the more red, the hotter or bigger the number. We can fix this by giving it the cool warm color map here in the cell below. Looking at the preview now gives us a red and blue color scheme. But the correlations move between -1 and +1. So, we want to fix the scale to those values by providing the vmin and vmax argument here. So, let's right click on it
>
> **[4:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=281)** and select Display over Cells. And as you can see, this is a pretty decent heat map. So, now you can see for example here between Apple and Netflix, there is a lower correlation than in many of the other areas. And you could use that information to pick the right stocks for your portfolio. All right, that was how you can have some fun with correlation matrices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Time Series Analysis]] (1), [[Statistical Analysis]] (1), [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (4), in other words (1), is called (1)
> **Env Vars:** b12 (2), correl (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), earlier in (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)

#### [Case study: Sales dashboard](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=0)** - [Instructor] Let's build a sales dashboard. We will use [[Microsoft Power Query|Power Query]] to load data into a data frame, and we will see how [[Pivot Tables]] work in [[Pandas (Software)|Pandas]]. So here's what we're going to build. A dashboard that shows the total sales amount per store location, with the ability to change the year of the analysis. But let's start at the beginning. Within the exercise files, there's a folder called Sales Data. It contains the [[Microsoft Excel|Excel]] files with our sales data, so it's one file per month, and we have files covering two years. Let's open this sample file from April 22. The data is from a fictitious mobile phone provider offering various plans. These plans are sold via physical store location throughout the US, as shown in column B. Other than that, we will need the transaction date and amount columns for our analysis. Remember, in the dashboard, we want to show how much each store sold in total per month. In the main exercise file, here on the dashboard sheet, we're going to add a table and chart showing the total sales per month, and store. We have already added a title and the year for which we want to run the analysis. Now, let's switch over to calculations. As you can see, it is currently full of errors,
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=95)** but that will be fixed once we replaced the todo in cell B1 here with actual [[Python (Programming Language)|Python]] code. But first, we need to load our data files with Power Query. In the meantime, let's close the diagnostics pane. We access Power Query via the Data tab, Get Data, From File, and then From Folder. Navigate to wherever you have stored your exercise files. In my case, it's on the desktop. Click into it and open the sales data folder. Click on OK. Now click on Combine and Combine & Load To. Click on sheet one for the preview, then OK. Now, importantly, select Only Create Connection. And OK. This opens the Power Query task pane on the right hand side, and you can see that it created the sales data connection here at the very bottom. We can now close the task pane and replace the todo here with a Python cell. Let's create a data frame called sales, and type XL, parenthesis, and quote, and this gives us a list of the power queries that we can select. So since sales data is already selected, we can hit the Tab key, and then CTRL, Enter, to recalculate the Python cells.
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=190)** Now the errors are gone. The preview here in cell B1 shows us that we're looking at roughly 160,000 rows. Now we can move on to the usual first steps in a [[Time Series Analysis]], which is setting the index and sorting it. In cell B3, we are writing out the years that are covered in the external files, so we can use them later for the year selection. Since this is a one dimensional series, Excel writes it out vertically when you change it to values, as I have done over here. So, to write it out horizontally, we have to wrap it into a list here. In cell B4, we are filtering the data frame to only the year that we choose on the dashboard. Remember, to filter by year, we need to use a string, not a number, which is why we have to use the STR function here. In cell B5, we are grouping the data per store, and then summing it up, per month, using the sum function, over here. As the preview shows, we now have one row for each store and month. This is hard to read, though, so let's turn this into a pivot table by using the pivot table method here in cell B6.
>
> **[4:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=288)** First, we need to reset the index so that we have all information available as regular columns. We're also building a column with a string for the month and year. This will save us from having to do manual date formatting on the chart and table. The pivot table arguments work similar to how an Excel pivot table works. You have to say which column goes into the index, which one into the columns, and which one into the body of the pivot table, as indicated here with the values argument. You also need to provide the name of a function that is used to aggregate the data. The margins argument will add a total row and column like the Excel pivot table does. And finally, we remove the column and index name so that the output is easier to read. Looking at the preview here, the information is now much easier to read, and fits on a dashboard. Let's visualize this pivot table in cell B7. Using ILOC makes it trivial to leave out the total row and column from the plot. And as usual, right click on the plot cell, and select Display Plot over Cells. Right click again, select Cut, and go to the dashboard,
>
> **[6:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=383)** and paste it over here. You can obviously also use the CTRL X and CTRL V shortcuts. So let's make this a little smaller, and we're almost done. So let's create a Py cell here, and type sales summary, which is our pivot table data frame. Hit CTRL, Enter to run the Python code. and we get that data frame back, so now just turn it into values, and style it a little bit, so maybe the numbers, we can go here and select the numbers, accounting style here. And then for the headers, we can obviously bold them both here, and there, and maybe right align the header row. And that's pretty much it. So, the last step is to turn the year, here, for the selection into a dropdown. Select this cell, and then go to data and [[Data Validation]]. Say Allow List, and for the source, go to Calculations, select only the first cell, and then add a hash key here, and select OK. The hash sign will make sure that it refers to the full dynamic array,
>
> **[7:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=477)** no matter how many years we cover in our source file. And so now we can switch back and forth between the different years of the analysis, and have the table and chart updated accordingly. If you have any changes in the source files, just hit CTRL, Shift, and F9 to recalculate the whole sheet, or go to the Data tab and click the Refresh All button. And that was how you build a dashboard with Python in Excel. I hope that I could inspire you to go out there now, and build your very own dashboard with Python in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (6), [[Microsoft Power Query|Power query]] (4), [[Pivot Tables]] (1), [[Pandas (Software)|Pandas]] (1)
> **UI Navigation:** click on (4), go to (4), navigate to (1), open the (1), select the (1)
> **CLI Commands:** python (6), make (2)
> **Env Vars:** ctrl (5), str (1), iloc (1)
> **Exercise Files:** exercise files (2), exercise file (1)
> **Definitions:** is a  (1), refers to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The next steps for learning more about Python in Excel](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=0)** - [Instructor] Congratulations on reaching the end of the course. If you want to learn more about [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]], it's always a good idea to check out the official documentation. If there are things where you got stuck or where you need more information, there's a Q and A section on the course page that you can use. I do hope you enjoyed learning about Python in Excel. However, we touched on many different topics and were only able to scratch the surface. There are other courses that go into more detail on [[Data Science]] and data analysis like Python for Data Science Essential Training, or [[Python Data Analysis]]. Other courses like [[Python for Data Visualization]], focus on Matplotlib and other plotting libraries. You can also move on to more advanced topics we haven't touched at all in this course, such as machine learning with Psychic Learn, a package that is also available with Python in Excel. If you are interested in my own work with Python on Excel, you can check out my project xlwings on [xlwings.org](https://xlwings.org). xlwings is a Python package that allows you to do a ton of things with Excel. You can write user-defined functions, macros or automation scripts. It also allows you to do advanced things like calling VBA functions from Python and vice versa. A key difference to Python in Excel is that it runs locally
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=97)** or on your self-hosted server. If these things sound interesting to you, you may want to have a look at my book "Python for Excel", which covers [[Pandas (Software)|Pandas]] and xlwings, as well as other libraries such as Openpyxl and XLsxWriter. And finally, I'm posting regularly about Python and Excel. So make sure to follow me on [[LinkedIn]] or Twitter or on YouTube. I hope to see you there!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Microsoft Excel|Excel]] (8), [[Data Science]] (2), [[Pandas (Software)|Pandas]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (12), make (1)
> **Analogies:** such as (2)
> **URLs:** [xlwings.org](https://xlwings.org) (1)
> **Env Vars:** vba (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Felix Zumstein]]

## Resources

- Exercise files available

## Skills Covered

- Pandas (Software)
- Python (Programming Language)
- Microsoft Excel

## Path Context

### In [[Advance Your Python in Excel Skills]]
← [[Python In Excel Getting Started With Data Analysis]] | **2 of 7** | [[Data Cleaning and Manipulating with Python in Excel]] →

## Appears In

- [[Advance Your Python in Excel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Analysis Using Python in Excel Copilot]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Microsoft Excel
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Microsoft Excel

---

[↑ Back to top](#)