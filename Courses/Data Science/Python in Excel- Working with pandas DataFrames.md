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
created: 2026-05-02
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

#### Python in Excel and pandas DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=0)** - [Felix] Python and Excel are two of the most popular tools used in data science.
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=5)** And finally, Microsoft brings them together in a brand-new feature called Python in Excel.
>
> **[0:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=13)** While Python offers you a powerful programming language, Excel gives you an intuitive spreadsheet interface.
>
> **[0:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=21)** In this course, I will teach you all about pandas data frames, the core building blocks of Python in Excel.
>
> **[0:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=28)** The fun part, we never have to leave Excel.
>
> **[0:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=32)** Hi, I'm Felix, and I'm excited to introduce you to Python in Excel.
>
> **[0:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-in-excel-and-pandas-dataframes?u=76281980&t=38)** Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (5), data (2), [[Microsoft]] (1), feature (1)
> **CLI Commands:** python (5)
> **Speakers:** - [felix] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=0)** - [Narrator] This course builds on top of the introductory course "Python in Excel" so I would recommend you to watch it before starting with this one.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=10)** If you don't have at least a basic Python knowledge, please watch a course about Python first.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=17)** There are various beginner courses here on LinkedIn Learning such as "Python for Non-Programmers" or "Learning Python."
>
> **[0:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=27)** In every video, I will be using an exercise file in the form of an Excel workbook.
>
> **[0:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=33)** You can download these files from the course page.
>
> **[0:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=37)** There will be two versions of each file.
>
> **[0:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=40)** The name of the first version will finish with _begin, and the other one with _end.
>
> **[0:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=48)** To follow along the course, use the one named begin.
>
> **[0:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=53)** The file version that is named end represents how the file should look like at the end of the corresponding video.
>
> **[1:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=62)** Here is a typical sample file.
>
> **[1:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=66)** Most of the time, I will walk you through the Python cells from top to bottom.
>
> **[1:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=71)** To see the Python code, I will edit the cell.
>
> **[1:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=75)** And to edit a cell, either double click it or hit the F2 key.
>
> **[1:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/what-you-should-know?u=76281980&t=81)** Alternatively, you can always also see the code here in the formula bar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (2), [[LinkedIn]] (1), hit (1)
> **CLI Commands:** python (7)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### About Python in Excel
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=0)** - [Instructor] While I'm recording this course, Python in Excel is still in preview.
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=5)** Right now it's only available on Windows for Microsoft 365 subscribers who are on the beta channel.
>
> **[0:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=14)** It's possible though that by the time you're watching this, it will be available on macOS and the web version of Excel as well.
>
> **[0:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=23)** You can always check if you have access by going to the Formulas tab and checking out if you have this Python section over here in the menu.
>
> **[0:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=35)** Bear in mind that when Python in Excel becomes generally available, you might need to buy an extra subscription on top of Microsoft 365.
>
> **[0:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=46)** Python in Excel runs in the cloud.
>
> **[0:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=50)** What this means for you is that you will need to be connected to the internet when you run Python code in the cells.
>
> **[0:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=59)** Also, a few things will likely change in the future.
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=63)** However, the concepts in code shouldn't be affected by this.
>
> **[1:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=68)** Most likely, you will notice differences along the following lines.
>
> **[1:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=74)** It could be that the display or formatting of data frames in Excel will be slightly different, especially around empty cells or how NAN values are displayed.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=86)** Or the Python in Excel ribbon menu will be organized in a different way, or placed on a different ribbon tab.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=94)** Also, the Python editor that I will install in one of the videos via Excel's add-in store should be available natively in the future without the need for any add-ins.
>
> **[1:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/about-python-in-excel?u=76281980&t=107)** Despite these changes, I'm confident that you will still be able to follow along easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (7), [[Microsoft 365]] (2), [[Windows]] (1), web (1)
> **CLI Commands:** python (7)
> **Code Identifiers:** macos (1)
> **Env Vars:** nan (1)
> **UI Navigation:** in the menu (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to pandas

[↑ Back to Table of Contents](#table-of-contents)

#### Hello World
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=0)** - [Instructor] When exploring a new technology such as Python in Excel, it's crucial to know what tools we have at our disposal.
>
> **[0:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=7)** So let's explore them using the classic Hello World example.
>
> **[0:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=11)** To use Python in Excel, you need to activate the Python mode in a cell.
>
> **[0:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=16)** The quickest way is to write equals PY and hit the tab key.
>
> **[0:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=22)** You can also go to the formulas tab over here and click on insert Python, or you can hit the keyboard shortcut, control, alt, shift, and P.
>
> **[0:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=36)** Let's write "Hello World" as a simple string into the cell.
>
> **[0:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=43)** Since these PY cells are really Jupyter notebook cells, we don't need to wrap this in a print function.
>
> **[0:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=50)** Note that hitting enter will add a new line in the Python code, but it won't run your code just yet.
>
> **[0:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=57)** So let's make the formula bar a little bigger so we can see multiple lines.
>
> **[1:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=64)** Now, to run the cell you need to hit control, enter.
>
> **[1:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=69)** The cell automatically shows a representation of the last object in the cell, which in our case is the "Hello World" string.
>
> **[1:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=78)** Unlike the default behavior in Jupyter Notebooks, though, Python in Excel will still show that output even if you assign the object to a variable.
>
> **[1:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=87)** So if we do hello equals "Hello World" and run that cell again, we can see that Hello World is still printed in that cell.
>
> **[1:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=101)** This card icon here means that the cell is in object mode.
>
> **[1:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=106)** This, as we've just seen, shows the Python object from the last line of code.
>
> **[1:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=113)** By switching it here to value mode, you will get the Python object transformed into a native Excel cell value.
>
> **[2:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=124)** There's also a keyboard shortcut for toggling the two modes, CTRL, alt, shift, and M.
>
> **[2:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=132)** So here we have object mode and hitting that control, alt, shift, M again gives us back the value mode.
>
> **[2:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=140)** In this case, it's just text in a single cell, so there isn't a big difference between object and values.
>
> **[2:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=147)** But as we will see in the next video, data frames will spill over multiple cells.
>
> **[2:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=155)** Unlike a classic Jupyter notebook, though, when you print something or get an error, Python in Excel will give you the output in the diagnostics pane that opens on the side.
>
> **[2:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=167)** So let's call the print function here with the hello variable.
>
> **[2:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=174)** Running it opens that diagnostics pane on the right hand side where you can see the printed value.
>
> **[3:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=182)** Now since the print function doesn't return a value, Excel now shows none as the output of that cell.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=192)** Another important thing is the row major order of cell execution.
>
> **[3:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=198)** In plain English, this means that Python cells are executed from left to right and top to bottom.
>
> **[3:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=205)** Importantly, this includes the sheets as well, meaning that sheets are also run from left to right.
>
> **[3:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=212)** So let's add and run another cell with the hello variable below our first cell.
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=222)** This works as expected, however, if I do this on top of that first cell, I am getting an error as the hello variable isn't defined at this point.
>
> **[3:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=237)** Like printed output errors are shown here in the diagnostics pane, but they are printed in red.
>
> **[4:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=246)** So to fix this and to see how sheets are evaluated from left to right, cut the cell here and paste it anywhere in the sheet number two, and now this works again.
>
> **[4:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=262)** Well, this was a quick overview of how Python in Excel works.
>
> **[4:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/hello-world?u=76281980&t=266)** This means that we are now ready to dive into Pandas DataFrames.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Microsoft Excel|Excel]] (7), hit (3), next (1), data (1)
> **CLI Commands:** python (11), make (1)
> **Tools:** jupyter (3)
> **Definitions:** means that (3)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** ctrl (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### pandas DataFrame and Series
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=0)** - [Instructor] Python in Excel is all about working with Pandas DataFrames.
>
> **[0:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=4)** So let's see what a DataFrame is and how you can create one from your Excel data.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=10)** Pandas is Python's go-to library for statistics, data analysis and time-series analysis.
>
> **[0:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=19)** The core data structure that Pandas uses is called DataFrame and it looks and behaves a lot like a spreadsheet or a range of a spreadsheet.
>
> **[0:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=29)** A DataFrame has three parts.
>
> **[0:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=31)** There's the actual data and then there are column headers and row indices.
>
> **[0:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=38)** We normally just call them columns and index.
>
> **[0:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=42)** It's usually easy to use meaningful column names such as first name or last name where the schema here shows A, B, C, but the index is often used in its default state, which is an integer index starting at zero and incrementing by one with every row, exactly as shown here on the slide.
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=63)** Importantly, a DataFrame column can only host a single data type, so the whole column must be either strings or floats or Booleans, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=76)** When you extract a single column from a DataFrame, you get a series.
>
> **[1:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=81)** You should remember that a DataFrame is two dimensional and has an index and column headers.
>
> **[1:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=88)** While the series is one dimensional and only has an index, but no column headers.
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=98)** To turn Excel data into a DataFrame, Python in Excel supports the following sources, multi-cell ranges, named ranges, Excel tables, dynamic arrays, and power queries.
>
> **[1:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=114)** We will use all of these sources throughout the course, but for now, let's just focus on a simple range.
>
> **[2:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=124)** The exercise file has a small dataset that represents a few fictitious participants of a LinkedIn Learning course.
>
> **[2:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=132)** For each student, it shows a few details such as the score for each chapter quiz and whether the student completed the course.
>
> **[2:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=143)** I like to use these tiny datasets to introduce basic concepts as they make it much easier to follow along.
>
> **[2:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=151)** No worries, we'll be using bigger and more real world datasets later in this course.
>
> **[2:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=157)** Let's create a PY cell and select the range.
>
> **[2:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=164)** As you can see, Excel automatically wraps the range with the Excel function.
>
> **[2:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=170)** The Excel function returns a DataFrame as soon as the data source contains more than one cell.
>
> **[2:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=178)** It also has correctly recognized that the data has a head row, so it has set the header's argument here to true.
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=187)** Let's assign that DataFrame to a variable df, and hit Ctrl + Enter.
>
> **[3:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=197)** When you click on the card icon here, you will get a preview of that DataFrame.
>
> **[3:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=204)** Because we have set headers to True, the top row is turned into the column headers of the DataFrame.
>
> **[3:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=212)** The preview just shows the first couple of top and bottom rows, so to get the full DataFrame switch from object to value mode, like this.
>
> **[3:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=225)** As you can see, Excel spills the values across multiple cells, but where's the index?
>
> **[3:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=232)** Well, Pandas in Excel is a bit of magic here.
>
> **[3:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=236)** When your DataFrame uses the default integer index, it hides it.
>
> **[4:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=241)** Don't get fooled by that though.
>
> **[4:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=242)** The index is still very much here.
>
> **[4:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=247)** If you prefer to look at the data in the Excel grid but your DataFrame is huge, you could use the head or tail methods to only show the top or bottom five rows.
>
> **[4:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=259)** Let's see how it's done.
>
> **[4:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=260)** So in a PY cell, just say df.head, Ctrl + Enter, and then turn it into the values here, and you can see the top five rows.
>
> **[4:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=273)** Or instead of head, use tail to get the bottom five rows from over here.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=283)** Instead of referencing an Excel range, you could also create a Pandas DataFrame from code.
>
> **[4:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=289)** Let's switch over to the code tab here.
>
> **[4:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=292)** So to create the DataFrame from the introductory slide, you can run the following code here.
>
> **[5:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=301)** And as you will see here in the preview, you will get that DataFrame displayed.
>
> **[5:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=308)** Alternatively, you could provide a dictionary in this cell, which will get us the same DataFrame as we can see again here by clicking on the icon in the preview.
>
> **[5:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=322)** But wait a minute, why could I just do pd.DataFrame without having to import Pandas as pd first?
>
> **[5:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=333)** Well, the answer is the initialization script, and you can find this one here.
>
> **[5:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=342)** And as you can see in this initialization script, there is import pandas as pd, which is then available in every PY cell throughout the whole workbook.
>
> **[5:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=355)** Creating a series works in a very similar way, but you only need to provide a simple list for the data part.
>
> **[6:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=364)** So again, we can look at the preview and this is our series.
>
> **[6:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=370)** However, we hardly need to construct our own DataFrame with Python in Excel, as we mostly just reference data that sits in a sheet or in a power query.
>
> **[6:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=383)** And that's the full roundtrip.
>
> **[6:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/pandas-dataframe-and-series?u=76281980&t=384)** We've turned Excel data into a Pandas DataFrame via the Excel function and back into an Excel range again by selecting the values mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (16), data (12), [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (4), [[Statistics]] (1)
> **CLI Commands:** python (4), make (1), find (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **UI Navigation:** select the (1), click on (1)
> **Analogies:** such as (2)
> **Prerequisites:** initialization (2)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise file (1)

#### Data selection
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=0)** - [Instructor] If you want to work with Pandas data frames, you need to know how to access that part of the data that you need, such as a specific row or column.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=10)** Let's see how it's done.
>
> **[0:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=12)** So data frames allow you to extract subsets by label or position.
>
> **[0:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=18)** Label refer to row and column names and position refers to row and column indices.
>
> **[0:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=24)** Okay, let's see how this works with labels.
>
> **[0:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=28)** You use the loc attribute on your data frame variable, which is df here on the slide.
>
> **[0:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=35)** Loc stands for location and accepts both a row and column selection.
>
> **[0:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=41)** To understand what we can use for row selection and column selection, let's run through a couple of examples in Excel.
>
> **[0:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=50)** But first we need to turn our sample data from over here into a data frame.
>
> **[0:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=58)** In cell L1, we turn the Excel table into a Pandas data frame.
>
> **[1:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=65)** You'll notice that the reference in the Excel function isn't a range address now.
>
> **[1:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=69)** Instead, it uses the so-called structured reference of an Excel table.
>
> **[1:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=74)** Using an Excel table as source has the advantage that the data frame is automatically updated whenever you resize the table.
>
> **[1:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=84)** Looking at the preview, it only covers the first couple of rows now, but when I extend my table to cover all the rows and we look back at the preview, you can now see that it covers all the rows now.
>
> **[1:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=102)** Like with standard cell references, you don't have to write this formula manually.
>
> **[1:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=108)** So let's just rewrite the cell real quick.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=112)** Select the table here, and as you can see, it automatically pulls in the table name and sets the headers to true.
>
> **[2:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=124)** In cell L4, we select multiple columns by providing a list of column names as the column selection and the column for the row selection.
>
> **[2:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=137)** Clicking on the object icon here confirms that the code indeed selects the correct two columns.
>
> **[2:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=148)** So what does the column mean?
>
> **[2:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=151)** The column works the same way as when you slice a Python list, so it means that you want all the rows from start to finish.
>
> **[2:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=160)** Since selecting columns is such a common operation, there's a shorthand notation for it.
>
> **[2:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=168)** So instead of using the loc attribute and providing a column for the row selection, you can directly index and slice the data frame itself.
>
> **[2:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=179)** Let's run this in Excel.
>
> **[3:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=181)** In cell L5, we have this short annotation in action, and you can see again, it selects the proper two columns.
>
> **[3:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=194)** By the way, if you ever need to reorder the columns of a data frame, just select them like this in the order you want.
>
> **[3:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=205)** At this point I'd like to make you aware of an important caveat.
>
> **[3:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=210)** In the next cell, we select a single column by giving it a simple list.
>
> **[3:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=218)** This will return a data frame, as you will see here.
>
> **[3:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=223)** Now in the cell below that, we will select a single column by providing a simple string.
>
> **[3:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=234)** Now as you can see, this returns a series.
>
> **[3:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=237)** The caveat here is that when you look at the preview or when you turn this into cell values, you don't see any difference in the data.
>
> **[4:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=249)** So it's important to know that when you want a data frame, use the list for selecting, specifying the columns.
>
> **[4:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=258)** And if you want a series, use just a simple string as the column selection.
>
> **[4:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=266)** Most of the time, we want a series when we work with a single column.
>
> **[4:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=274)** If you don't like the type square brackets, you could also use this notation here, which is the dot notation.
>
> **[4:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=284)** However, this doesn't work with user ID as it has a space or with completed as it has a question mark.
>
> **[4:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=294)** So I'll be using the square bracket notation in this course to use a single consistent notation everywhere.
>
> **[5:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=303)** And finally, to get a single value from a data frame, we specify the row and column like this.
>
> **[5:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=312)** Remember that zero here refers to the index labels that Excel hides from us as we use the default integer index.
>
> **[5:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=322)** If you rather want to access data via position, meaning by integer indices, you use the iloc attribute.
>
> **[5:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=332)** Again, with row selection and column selection.
>
> **[5:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=337)** Let's go back to Excel and have a look at a few examples.
>
> **[5:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=342)** In cell L12, I am selecting the first two columns.
>
> **[5:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=349)** So we provide the column indices as a list of integers.
>
> **[5:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=355)** Looking at the preview confirms that we get indeed the first two columns here.
>
> **[6:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=362)** In the next cell below, we do the same, but we use the slicing notation instead.
>
> **[6:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=369)** We could also use a slice notation for the same two columns.
>
> **[6:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=374)** Again, this should feel familiar from slicing a Python list.
>
> **[6:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=379)** Let's just double check it here in the preview and this looks correct.
>
> **[6:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=384)** To get the first entire row specify index zero as the row selection and the column as the column selection.
>
> **[6:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=395)** And this gives us the following here in the preview.
>
> **[6:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=400)** Well, this may be presented in an unexpected way as the row is turned upside down into a vertical orientation.
>
> **[6:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=410)** So Python in Excel shows all one dimensional objects, such as a series or a list, also vertically.
>
> **[7:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=420)** So to keep the orientation of our table, we could use a list for the row selection so that we get a two dimensional data frame back.
>
> **[7:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=431)** And so this is done in the last cell over here.
>
> **[7:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=435)** And when we look at the preview here, you can see that it returns our data frame in the expected orientation here.
>
> **[7:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=446)** Again, this is a series where we use a scaler here for that row selection as opposed to below here where we use a list as the row selection.
>
> **[7:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=464)** And again, we get a one dimensional series or we get a two dimensional data frame back.
>
> **[7:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=472)** And this is how you select subsets of your data frame by label or position.
>
> **[7:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-selection?u=76281980&t=478)** This will allow you to extract the relevant data for your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (20), [[Microsoft Excel|Excel]] (9), [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (2), next (2)
> **CLI Commands:** python (3), make (1)
> **Cross-References:** in the next (2), go back to (1), in the last (1)
> **Definitions:** refers to (2), stands for (1), is a  (1)
> **Warnings:** caveat (2)
> **Env Vars:** l12 (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### Calculations, vectorization, and empty cells
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=0)** - [Instructor] Now that we know how to select columns from data frames, it's a good moment to do some simple calculations.
>
> **[0:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=8)** On the way, we'll learn what vectorization means and how empty cells are treated.
>
> **[0:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=14)** First things first, as usual, we need to put the source data into a data frame.
>
> **[0:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=19)** This time we're using the named range students from over here.
>
> **[0:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=25)** Like with Excel tables, the Excel function here in M1 automatically adds a reference to the named range, so let's quickly rewrite the cell to see that in in action.
>
> **[0:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=39)** As you can see, selecting that range automatically pulls in the name of the range, which is students in this case.
>
> **[0:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=48)** Now we are ready for some basic math.
>
> **[0:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=51)** Having the score for the two quizzes over here in columns F and G naturally asks us to calculate the total score by summing them up.
>
> **[1:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=62)** For comparison, let's sum these two columns up first using native Excel formulas.
>
> **[1:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=69)** So I would do most likely something like that, summing up these two fields and then applying the formula down over each row.
>
> **[1:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=81)** In Pandas, we don't need to iterate over each row.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=86)** When we look at the code in cell M2, we can see that we can simply sum up the two columns in the form of a Pandas series.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=97)** Looking at the preview, we will see the result.
>
> **[1:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=101)** Ignore the num error for now, as we will get back to that in just a minute.
>
> **[1:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=107)** The fact that we don't have to iterate over each row when summing up these two columns is called vectorization or a vectorized notation.
>
> **[1:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=118)** This really shouldn't be a big deal though, as you can actually work in Excel in the same way, especially nowadays with dynamic arrays.
>
> **[2:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=127)** So let me delete that formula from over here and rewrite that formula using Excel arrays.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=139)** Hitting enter gives me back a dynamic array, and you can see that the concept is really the same as when summing up two Pandas columns.
>
> **[2:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=150)** Now let's assume that the system was set up the wrong way and hasn't accounted for one point in the quiz one score.
>
> **[2:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=159)** To add the missing point, we can simply write the following code here in cell M3.
>
> **[2:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=168)** Note that we don't have to turn the number one into a series or any kind of array first.
>
> **[2:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=175)** Again, this is no different from what we can do with dynamic arrays in Excel.
>
> **[3:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=181)** Let's put that here for comparison.
>
> **[3:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=184)** We can simply sum up the array here with a scaler number one.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=192)** Comparing the results also gives us the same numbers.
>
> **[3:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=198)** But let's now go back to the sum of the two quizzes where we jumped over that num error here, because summing up 2.2 plus an empty cell definitely doesn't give us a num over here in the case of the Excel formulas.
>
> **[3:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=220)** So to understand what's going on here, we first have to understand how Python in Excel handles empty cells when it translates them to Pandas data frames.
>
> **[3:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=230)** In string columns, empty cells are translated to none, and for numbers we get NaN, which stands for not a number.
>
> **[3:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=239)** The thing is in the floating point world, anything plus NaN returns NaN again.
>
> **[4:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=247)** And finally, Excel transforms NaN into the num cell error on the way back from Python to Excel.
>
> **[4:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=255)** None is converted to zero, but formatted so it displays none in the cell.
>
> **[4:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=262)** Pendas uses NumPy's none object internally, so you sometimes see NaN represented as np.nan.
>
> **[4:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=270)** NumPy is one of the libraries that Pandas uses under the hood.
>
> **[4:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=276)** And before we go back to Excel, bear in mind that this is one of the areas where Python in Excel may do things slightly differently in future versions.
>
> **[4:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=288)** So to get the same behavior as with native Excel, we'll need to switch the addition to use the add methods here in cell M4.
>
> **[5:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=300)** The add method allows us to specify that NaN should be replaced with zero, which is precisely what Excel does behind the scene.
>
> **[5:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=312)** So we do that here in the formula by using .add and then say fill value equals to zero.
>
> **[5:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=320)** Now, when we run that cell and have a look at the result here, then we can see that we end up again having 2.2 as the result for summing up 2.2 plus an empty cell.
>
> **[5:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=337)** And that definitely is the result that you are used to as an Excel user.
>
> **[5:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=345)** The same principle applies to all the other added method operations.
>
> **[5:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=350)** So here in this overview, we see that we can use mul for multiplication, add for the addition as we've just seen, sub for subtraction, and finally, we have div for division and pow for the to the power of operator.
>
> **[6:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/calculations-vectorization-and-empty-cells?u=76281980&t=371)** To conclude, we demystified the term vectorization and found out that data frame methods for arithmetic operations allow us to treat empty cell the same way as native Excel formulas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (16), data (5), [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (3), power (1)
> **CLI Commands:** python (3)
> **Versions:** 2.2 (3)
> **Cross-References:** go back to (2)
> **Definitions:** is called (1), stands for (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Row filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=0)** - [Instructor] When using an Excel table, the most common operations are filtering and sorting rows.
>
> **[0:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=6)** Let's see how this is done with data frames.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=10)** As usual, in the first cell, K1, we turn our Excel data into a data frame.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=17)** Now in cell K2, I would like to filter the rows to those students who have completed the course.
>
> **[0:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=25)** Previously, we have already used the lock attribute with column names, but lock also accepts a series or list of Booleans.
>
> **[0:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=36)** Wherever the Boolean is true, the row or column will be included.
>
> **[0:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=42)** So in this statement, we use the complete column to only show those students who have completed the course.
>
> **[0:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=51)** As you can see by looking at the preview, this filters the result to only those students who finished the course.
>
> **[0:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=59)** But what if we want to show only students from Italy?
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=63)** In this case, we first need to create a Boolean series where true means Italy and falls means every other country.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=72)** The next cell, K3, shows you that we can accomplish this by comparing the country column with the string Italy.
>
> **[1:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=82)** The preview shows us that we get a true everywhere where the country is Italy.
>
> **[1:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=89)** So now we can move on to the next cell and use this as our filter.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=96)** And looking at the preview accordingly shows the desired rows.
>
> **[1:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=102)** What about if we are only interested in those students from Italy who scored at least five points in quiz one?
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=112)** Let's first look at the score in isolation.
>
> **[1:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=116)** The Boolean expression looks like this in cell K5.
>
> **[2:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=123)** Now we need to combine this Boolean series with the Boolean series of whether the country is Italy or not.
>
> **[2:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=134)** In Python, we would use the and keyword for this, but in Pandas we need to use the ampersand like this in cell K6.
>
> **[2:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=146)** Why though, do we need to use parenthesis here?
>
> **[2:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=151)** When working with Boolean expressions, we need to use parenthesis, as otherwise the ampersand here would compare Italy with the score of quiz one, and this would lead to a rather cryptic error.
>
> **[2:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=165)** Let's try it out real quick by removing the parenthesis.
>
> **[2:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=171)** The error pops up on the diagnostics pane.
>
> **[2:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=174)** So let's reintroduce this parenthesis again to fix that.
>
> **[3:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=180)** To use this expression within TF.lock, it may become a bit long, so we could assign it to a variable first, as I am doing here in cell K7.
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=195)** TF stands for true false, but you can obviously also use a more descriptive name.
>
> **[3:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=203)** In cell K8, we can now use the Boolean series TF to filter the rows.
>
> **[3:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=211)** And as we can see in the preview, this leaves us with just the two rows where the country is Italy and the score of quiz one is over five.
>
> **[3:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=226)** Similar to how we use the ampersand instead of writing and, here is how or and not works with Pandas data frames.
>
> **[3:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=236)** So, and becomes the ampersand as we've just seen, or becomes the pipe character, and instead of not, we're using the tilde.
>
> **[4:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=248)** Let's now look at sorting.
>
> **[4:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=251)** To sort the rows of a data frame, we can use the sort values data frame method.
>
> **[4:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=257)** To first sort by city, then quiz one, we can write the following in cell K9.
>
> **[4:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=265)** Sort values is a data frame method, and I'll say more about data frame methods in the next video.
>
> **[4:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=274)** Before we come to an end of this video, let's turn the result into the Excel value so we can look at the full table sorted by city and quiz.
>
> **[4:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/row-filtering?u=76281980&t=286)** All right, from this session, let's remember that parentheses are important in Boolean expressions, that Pandas uses symbols such as the ampersand for Boolean operators, and that using Boolean series is a great way to filter rows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Microsoft Excel|Excel]] (3), next (3), [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** similar to (1), such as (1)
> **File Paths:** tf.lock (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Manipulating DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=0)** - [Instructor] To change data in a data frame or add new column, we can use the lock and I lock attributes that we are already familiar with.
>
> **[0:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=9)** Let's get started.
>
> **[0:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=11)** Datasets often have issues, so let's assume that John over here in row 11 has actually completed the course, but for some reason the data just won't reflect that properly.
>
> **[0:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=24)** Luckily, we can fix this in our data frame.
>
> **[0:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=28)** As usual, we start in cell K1 by turning our Excel table into a data frame.
>
> **[0:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=34)** However, this time we call the data frame source.
>
> **[0:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=39)** Now in the next cell, K2, we copy that source data frame by using the copy method and we call the copy DF.
>
> **[0:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=49)** We'll see why we are doing this in just a moment.
>
> **[0:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=53)** In cell K3, we want to find out if John completed the course and we can do this exactly the same way as we learned it in the previous video by using a Boolean series for the row selection, along with the name of the column of interest.
>
> **[1:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=70)** As the preview shows, this is false, but we know that it actually should be true.
>
> **[1:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=76)** So to fix this, we simply have to assign true to the lock attribute as we do here in cell K four.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=86)** Now this shows non-SD output, so we need to explicitly use the data frame variable DF either in the same cell or as I do here in a, in a separate cell, so we can look again at the preview.
>
> **[1:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=104)** As you can see, the value for complete is now true here for the row, for John.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=112)** This is very important.
>
> **[1:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=114)** When we assign a value, we had a lock or I lock attributes, it changes the data frame directly, which is obviously the reason why we are working on a copy of the source data frame.
>
> **[2:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=128)** So when we look back at a unchanged source data frame here, then I can see that John still has the false in the complete column.
>
> **[2:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=142)** Now, if we often have to look up a user by the user id, it becomes tedious to always write DF user ID equals equals to something for the row selection as we did here in cell K three.
>
> **[2:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=159)** Instead, we can set the index of the data frame to the user ID column.
>
> **[2:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=165)** Remember, by default a data frame has the default index zero, one, two, et cetera, so we want to change that to be the user id instead.
>
> **[2:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=176)** We do this by using the set index method in cell K seven.
>
> **[3:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=182)** Just to be sure let's have a look at the index by writing in the next cell, VF index.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=192)** Looking at the preview, we can see though that this is still the default integer index though, so what's going on?
>
> **[3:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=202)** One important caveat with panas data frames is that data frame methods such as set index always return a copy of the data frame with those changes.
>
> **[3:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=215)** So you need to assign it back to the DF variable here in cell K nine.
>
> **[3:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=224)** If you want to change the data frame DF.
>
> **[3:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=229)** Now in the next cell, we can look at DF index again here in the preview.
>
> **[3:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=237)** And this time the index indeed shows the user ID.
>
> **[4:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=242)** Because it's so important, let's repeat this again.
>
> **[4:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=248)** Assigning values via lock, or I lock changes the data frame directly, but using a data frame method such as set index returns a copy.
>
> **[4:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=261)** So you need to always assign it back to the data frame variable if you want to change that original data frame.
>
> **[4:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=269)** As usual there are a few exceptions to that rule where a data frame method actually changes the original data frame, but for our purposes we can ignore this.
>
> **[4:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=280)** So with the user ID being the index of the data frame, we can now simplify our code to select a specific value as shown here in cell K 11.
>
> **[4:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=294)** In the next cell, we can again double check the DF here in the preview just to make sure that John has still a true in the complete column.
>
> **[5:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=308)** Next, I'd like to recalculate the total score for the two quizzes here from an earlier video, but now added to the data frame as an additional column.
>
> **[5:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=321)** So in cell K 13, we're calculating the total score as we did in an earlier video.
>
> **[5:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=329)** And in the cell below, we can now assign the total score series to a new column name by using the lock attribute.
>
> **[5:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=340)** Again, remember, this changes the data frame DF directly.
>
> **[5:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=347)** To double check this, let's turn the DF variable here on the last cell into values.
>
> **[5:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=355)** And scrolling here a little bit to the right, we can see that we now have this additional total score column appended to our data frame.
>
> **[6:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=367)** All right, from this video, let's remember two things.
>
> **[6:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=371)** First, assigning values via lock and I lock changes the data frame directly.
>
> **[6:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/manipulating-dataframes?u=76281980&t=376)** And second, calling a method on a data frame returns a copy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (29), next (5), [[Microsoft Excel|Excel]] (1)
> **Cross-References:** in the next (4), previous video (1)
> **CLI Commands:** find (1), make (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Python editor and magic commands
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=0)** - [Instructor] While following the first couple of videos, you may have been wondering if there was a better option than editing the code in the cell or in the formula bar.
>
> **[0:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=11)** Yes, there is, and it's called Python Editor.
>
> **[0:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=14)** Let me show you how to use it.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=17)** With the beta version of Python in Excel, the Python Editor has to be installed manually via Excel's add in store.
>
> **[0:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=24)** In the future though, this will most likely be integrated directly here in the Python menu in the ribbon so you won't have to install the add-in anymore.
>
> **[0:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=36)** If you're still on the beta version, though, as I am, here is how you get the Python editor.
>
> **[0:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=41)** Go to file, get add-ins, and then search for Excel labs.
>
> **[0:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=49)** Hit enter.
>
> **[0:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=50)** Then here it is, click on add and continue.
>
> **[0:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=54)** It'll turn up here on the side pane.
>
> **[0:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=57)** If you close it, you can go to home and then here, activate it again.
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=63)** The Excel labs add-in is basically hosting a couple of different add-ins.
>
> **[1:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=67)** So for the Python editor, scroll to the very bottom.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=72)** Click on open and you'll see this editor here with cells similar to a Jupyter notebook.
>
> **[1:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=81)** Let's make this a bit bigger by dragging the bar to the left.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=86)** One advantage you get is that you can see all your Python cells from top to bottom.
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=92)** So even if you have a Py cell hidden away in a column to the far right, it'll turn up right here.
>
> **[1:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=99)** One caveat though is that the Python Editor currently doesn't automatically populate the Excel function here with the cell reference.
>
> **[1:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=108)** However, this may change when Python in Excel gets out of beta, so make sure to double check this on your end.
>
> **[1:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=117)** To keep things simple, I will stick to the cell and formula bar for this course.
>
> **[2:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=122)** However, I encourage you to try out this Python Editor, as you will get better code completion, as well as a preview here of the output.
>
> **[2:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=134)** Sometimes you'll need to click on show more to see what's going on.
>
> **[2:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=140)** I've already mentioned that the editor is similar to a Jupyter notebook, but even without the editor, Python Excel is really a Jupyter notebook, which means that you can also use magic commands.
>
> **[2:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=156)** Cell magics start with two percentage signs and one of the most wildly used cell magic is %%time, which measures how long it takes the cell to calculate.
>
> **[2:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=170)** So to measure the execution time of a cell, simply put %%time in its first line.
>
> **[2:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=178)** So let's search for a good cell for us to try this out.
>
> **[3:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=182)** For example, we can use the set index cell here on K7.
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=187)** Hit enter to insert an empty line and then say %%time.
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=195)** Now hit on Ctrl enter and it'll print the time it took.
>
> **[3:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=199)** So Python in Excel shows it under the diagnostics pane.
>
> **[3:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=204)** Usually you are interested in the wall time, as this represents the time it took to run the whole cell from start to finish.
>
> **[3:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=214)** However, since this result will vary greatly with every run, you can execute a cell multiple times and take the average time to get a more reliable result.
>
> **[3:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=228)** That is what time it is here for.
>
> **[3:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=231)** So let's change this here from time to time it and rerun the cell again by clicking control enter.
>
> **[4:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=241)** Now you can see that the cell has been run a thousand times, and we do have more reliable numbers here.
>
> **[4:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/python-editor-and-magic-commands?u=76281980&t=251)** So in this video we've learned that Py cells are really Jupyter notebook cells and that the Python Editor can make it easier for you to write Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (14), [[Microsoft Excel|Excel]] (8), hit (3), [[Search]] (2)
> **CLI Commands:** python (14), make (3)
> **UI Navigation:** click on (3), go to (2)
> **Tools:** jupyter (4)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** install (1), you'll need (1)
> **Definitions:** means that (1)
> **Best Practices:** make sure to (1)


### 2. Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### Data cleaning
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=0)** - [Instructor] Data is almost always in a messy state, so let's see how we can clean it by handling missing and duplicate data.
>
> **[0:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=9)** As usual, in sale K1, we're turning the data into a data frame.
>
> **[0:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=14)** Nothing special here, so let's jump right into the next cell below, which shows the usual first step in a data analysis calling the info method on a data frame.
>
> **[0:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=26)** So let's run this cell by hitting control enter.
>
> **[0:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=30)** This gives you an idea about the index and about the number of observations and data type for each column.
>
> **[0:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=41)** Now may actually be a good time to mention that Pandas shows the data type object for strings.
>
> **[0:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=48)** However, because the output is printed, it appears here on the diagnostics pane, far away from the Python cell.
>
> **[0:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=56)** Printing also has the side effect of making the diagnostics pane show over and over again whenever the sheet is recalculated.
>
> **[1:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=64)** That's why I tend to avoid printing in Python, in Excel, if anyhow possible.
>
> **[1:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=69)** In this case, we can do the following.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=72)** We can show the index here by turning it into a string and in the 2 Py cells below, we can call the D types and count attributes.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=86)** The preview of D types is a little hard to read, but maybe that improves in the future.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=94)** By looking at the preview of count, I can see that some columns have more records than others.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=100)** For example, quiz 1 has 12 while quiz 2 has only 11 records.
>
> **[1:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=106)** To calculate some statistics, I may decide that I only want to include students who have a score for both quizzes.
>
> **[1:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=115)** To do this, Pandas offers the drop NA method that we can use in cell K6.
>
> **[2:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=122)** Instead of looking at the values in the preview, let's see how many records we get.
>
> **[2:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=128)** We can directly append count to drop NA here in cell K7.
>
> **[2:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=134)** Putting one method after the other is called method chaining.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=139)** This works because as you may remember, methods return a copy of the changed data frame, which then serves again as the input for the next method call.
>
> **[2:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=149)** Now looking at the preview, this gives us 10 records across all columns.
>
> **[2:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=155)** I would've expected 11 though, as this is the number of records for quiz 2.
>
> **[2:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=161)** What's happening here is that drop NA drops a row as soon as there is an NAN value anywhere in the row.
>
> **[2:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=169)** So a missing city will also cause the row to be dropped.
>
> **[2:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=175)** To prevent that, we can provide quiz 1 and 2 as the subset parameter here in cell K8.
>
> **[3:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=184)** Looking at the preview again now returns 11 records for both quizzes as expected.
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=191)** So let's drop the rows with missing quiz scores and assign the result back to the DF variable here in the next cell.
>
> **[3:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=203)** By looking at the preview, we can confirm that Emel who is missing a score for quiz 2 now doesn't show up anymore.
>
> **[3:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=215)** As a next step, we want to remove any duplicate signups.
>
> **[3:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=220)** We'll consider a user to be the same if they have the same name, year of birth and city.
>
> **[3:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=228)** In our dataset, we have Martina here who signed up two times, once in row 9 and once in row 13.
>
> **[3:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=239)** The drop duplicates method here allows us to fix this in cell K10, and since this is a long line, it may be easier to read here in the formula bar.
>
> **[4:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=252)** As the preview shows, this leaves us with the first observation, so let's sort by user ID first so that we keep the account with the lower user ID.
>
> **[4:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=265)** And you can see here in cell K11 how this is done.
>
> **[4:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=269)** Again, this is a long line, so maybe easier to read here in the formula bar.
>
> **[4:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=276)** And that's it.
>
> **[4:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=278)** Now we have a clean dataset free of duplicates, and with only those rows where the student has a score for both quizzes.
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=285)** And with a clean dataset, we can run the describe method in cell K12.
>
> **[4:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=292)** So let's turn this into values to see what's going on.
>
> **[4:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=298)** Describe gives us a few statistical key measures.
>
> **[5:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=301)** For example, we can see that quiz 2 has a higher mean and standard deviation than quiz 1, but a lower median.
>
> **[5:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-cleaning?u=76281980&t=312)** To conclude, with only a few commands, we cleaned the dataset and got some descriptive statistics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (4), [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (2), [[Statistics]] (2)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Env Vars:** nan (1), k10 (1), k11 (1), k12 (1)
> **CLI Commands:** python (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Working with text data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=0)** - [Instructor] One thing Python is really good at is text manipulation.
>
> **[0:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=4)** So let's see how we can access Python's string methods to clean up messy DataFrame columns.
>
> **[0:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=12)** When you let users type in their name or address, you'll end up with a bunch of malformed text, like, we can see here in column B.
>
> **[0:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=22)** There's always someone who has caps lock on and spaces at the beginning or end of the text is also very common.
>
> **[0:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=30)** As usual, in the first cell K1 here, we are merely turning the data into a DataFrame.
>
> **[0:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=38)** So let's get straight into cell K2.
>
> **[0:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=41)** That shows us how to access Python's string methods from a DataFrame column.
>
> **[0:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=47)** So to strip off any white space at the beginning and end of the word, we can use the strip method, but importantly, to do so, we need to use the str attribute on the DataFrame column.
>
> **[1:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=62)** In the preview, we can see that all names are now properly aligned.
>
> **[1:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=69)** However, there is still something going on with the capitalization.
>
> **[1:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=73)** To make every word start with a capital letter, we can use the title method.
>
> **[1:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=80)** I am appending this right after the strip method here in the cell below.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=86)** Remember, this is called method chaining.
>
> **[1:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=89)** With method chaining, however, we need to make sure to repeat the str attribute if we are using string methods.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=100)** In the preview, we can see that the name column looks good now.
>
> **[1:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=105)** Remember though that methods return copies of the DataFrame or series.
>
> **[1:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=110)** So we need to assign the clean series back to the Name column like we do here in cell K4.
>
> **[2:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=122)** As this is a long line of code, it may be easier to look at here in the formula bar.
>
> **[2:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=129)** In the cell below, I have df, which means we can look at the original DataFrame here and can confirm that the name column has been cleaned up indeed.
>
> **[2:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=143)** So let's go ahead and split the name up into two separate columns in the next cell, K6, one for the first name and one for the last name.
>
> **[2:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=156)** Pandas offers the split method that we can use for this, and again, it's a long line of code, so this may be easier to read in the formula bar.
>
> **[2:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=170)** The first argument is a space, which defines the character we use for splitting.
>
> **[2:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=176)** n=1 means that we just want a single split.
>
> **[3:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=180)** So after the first space, it allocates the rest of the string to the last name.
>
> **[3:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=186)** And finally, expand=True is required to split the parts into new columns.
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=193)** Looking at the DataFrame now in the cell below gives us two additional columns if we scroll to the very right where we have the first and last name in a separate column.
>
> **[3:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=209)** One caveat when working with text is string concatenation.
>
> **[3:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=215)** When using DataFrame columns, we can't just use the usual f-strings from Python directly.
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=222)** So to combine the city and the country into a single column like we do here in cell K8, we have to use the plus sign as an easy way to combine the different columns.
>
> **[4:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=240)** When we look at the preview though, we probably want to get rid of those angle brackets around the country name.
>
> **[4:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=249)** To do this, in the next cell, I can simply slice off the first and the last character of the country.
>
> **[4:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=261)** Again, to do this I have to use the str attribute.
>
> **[4:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=268)** And when we look at this in the preview, it has now the city name and the country name, combined in a single column.
>
> **[4:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=279)** There's really a lot you can do by just using string methods.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=283)** For example, if you want to filter the table for names that contain the name John, you can use the contains method as I show here.
>
> **[4:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=293)** Again, long line of code, easier to read here in the formula bar.
>
> **[4:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=298)** So turning it into lowercase first, make sure that we find John, no matter the capitalization in our DataFrame.
>
> **[5:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=308)** So this expression will turn a Boolean series with true where the cell contains John and false where it doesn't.
>
> **[5:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=317)** And from an earlier video, you probably remember that we can use this to filter the DataFrame to only those rows that contain the name John, like shown here in the last cell.
>
> **[5:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=332)** And as this is our last cell, let's go ahead and turn it into values so that we can look at the filtered table in Excel.
>
> **[5:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=343)** And that is how you can use Python's string methods on DataFrame columns.
>
> **[5:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/working-with-text-data?u=76281980&t=349)** This should hopefully save you from one or the other complex Excel formula.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Word|Word]] (2), next (2), [[Microsoft Excel|Excel]] (2), data (1)
> **CLI Commands:** python (5), make (3), find (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Cross-References:** in the next (2), in the last (1)
> **Analogies:** for example (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Combining DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=0)** - [Instructor] Most of the time, your data doesn't come in one piece.
>
> **[0:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=3)** Instead it is split up across different Excel ranges, sheets, or files.
>
> **[0:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=9)** Let's see how we can combine these parts into a single data frame using the Pandas functions concat and merge.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=17)** In this version of the exercise file, we have a separate tab for students who took the course in January, February, and March.
>
> **[0:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=27)** And, as so often with data in Excel, the format isn't consistent across the sheets.
>
> **[0:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=33)** In February, the order of the columns was mixed up, and in March, the complete column is missing altogether.
>
> **[0:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=43)** However, this is not something we need to worry about as Pandas has a superpower called data alignment.
>
> **[0:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=51)** This means that columns are aligned according to their column names when being glued together.
>
> **[0:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=58)** On this slide, we have a data frame one and a data frame two.
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=63)** To glue them together vertically, we can use the concat function.
>
> **[1:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=68)** "Concat" stands for concatenation and is the technical term for gluing something together.
>
> **[1:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=74)** In the resulting data frame, column C and B from data frame two are aligned with the respective columns from data frame one and, since column A doesn't exist in data frame two, it will be filled with NaNs.
>
> **[1:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=90)** Let's now switch back to Excel and get some practice.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=95)** First of all, let's put the individual parts into a data frame variable in cell K1.
>
> **[1:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=102)** Then we can stitch them together in cell K4 using the concat function.
>
> **[1:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=110)** We call the combined data frame quarter one.
>
> **[1:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=114)** As you can see in the preview, it takes over the column order of the January data frame and matches the columns up with February and March data frames.
>
> **[2:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=126)** Where we had a missing column in March, Pandas fills in NaNs, which turned up as NUM cell errors here.
>
> **[2:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=137)** Now we have another sheet here called quiz three.
>
> **[2:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=142)** This only has a few user IDs with the score from an additional quiz, three.
>
> **[2:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=148)** To add this as an extra column to our quarter one data frame, you'd probably use something like VLOOKUP or XLOOKUP in native Excel.
>
> **[2:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=159)** In Pandas, we can use the merge function.
>
> **[2:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=163)** But first, let's put the data into a data frame here in cell K7.
>
> **[2:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=169)** We call the data frame quiz three, and this is how it looks when we have a quick look at the preview.
>
> **[2:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=176)** So now we can merge that data frame with our data frame, quarter one, in the cell below in cell K8.
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=187)** To do this, we're using the merge function, which accepts the two data frames as the first two arguments.
>
> **[3:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=196)** The on argument defines which column is used to align the rows.
>
> **[3:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=200)** When looking at the preview, we can see that this only returns two rows.
>
> **[3:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=206)** So what happened to the other rows of the quarter one data frame?
>
> **[3:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=210)** By default, the merge function uses a so-called inner join, which means that it only returns rows where the user ID exists in both data frames.
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=222)** If we want everything from our quarter one data frame, which is on the left of the quiz three data frame in our merge expression, we can supply how="left" as we do here in cell K9.
>
> **[3:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=238)** Let's turn this into values.
>
> **[4:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=241)** Now we have every row for the quarter one data frame with the additional information wherever we have them for quiz number three in this additional column.
>
> **[4:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=255)** This may have been a little fast, so let's look at how merge works in a little more detail.
>
> **[4:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=262)** On the merging tab, I have prepared two small and schematic data sets so we can see exactly what the different merge types are doing.
>
> **[4:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=271)** I am calling the two tables df1 and df2 here in cell J1.
>
> **[4:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=281)** We are joining the tables on the ID column.
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=285)** So when we go for the inner join here, in cell J3, it only finds one row the, ID1, which exists on both tables and returns it.
>
> **[4:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=298)** By the way, I have already turned all these PI cells into value mode, so you can see what's going on without having to click on the preview icon.
>
> **[5:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=308)** When we go for the left join in cell J6, it takes the IDs from the data frame that comes first or is on the left here in the merge function and matches up all rows from the right data frame using the ID column.
>
> **[5:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=327)** Where it doesn't find the same ID on the right data frame, it inserts an NaN value that Excel here displays as NUM cell error.
>
> **[5:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=339)** The right join here in cell J11 goes the other way around.
>
> **[5:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=344)** It takes all the rows from the right table, which means our df2, and matches them up with rows from the left table, which is our df1.
>
> **[5:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=356)** And finally, the outer joint here in cell J15 takes the unique values of the combined ID columns from both sides and, again, fills in those cells where we don't have a match with NaNs.
>
> **[6:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/combining-dataframes?u=76281980&t=372)** So we've learned that Pandas data alignment is a real killer feature and is responsible for making the combination of multiple Excel ranges or tables a lot less error prone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (31), [[Microsoft Excel|Excel]] (6), [[Pandas (Software)|Pandas]] (5), feature (1)
> **Env Vars:** num (2), vlookup (1), xlookup (1), id1 (1), j11 (1)
> **Definitions:** means that (2), stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Data aggregation
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=0)** - [Felix] To calculate statistical measures across a subset of your data, you can use the DataFrame method groupby.
>
> **[0:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=8)** Let's see how it works.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=10)** As usual, we start in cell K1 by turning our Excel table into a DataFrame that we call df.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=17)** To calculate the average score for each quiz, we can use the mean method.
>
> **[0:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=23)** First, let's select the Quiz columns here in cell K4.
>
> **[0:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=29)** As the preview shows, this returns a DataFrame with the expected columns.
>
> **[0:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=35)** Now let's call the mean method on that DataFrame in the cell below.
>
> **[0:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=41)** This returns a series, and the preview shows us that Quiz 2 has a slightly higher mean than Quiz 1.
>
> **[0:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=50)** By default, the mean and other descriptive statistics ignore NaN values.
>
> **[0:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=58)** Luckily, this is in line with how Excel treats empty cells when calculating the average, which is the corresponding Excel formula to calculate the mean.
>
> **[1:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=70)** Now, I'd like to dig a bit deeper and calculate the average score per country.
>
> **[1:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=77)** To do this, we need to first select the columns we need, then group by country, and finally calculate the mean.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=86)** Let's start in cell K8 by picking the required columns.
>
> **[1:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=91)** A quick look at the preview shows the DataFrame with the selected columns.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=97)** Now let's use the groupby method on that DataFrame in the cell below.
>
> **[1:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=104)** This returns a DataFrameGroupBy object, which isn't giving us anything just yet.
>
> **[1:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=111)** To get something useful out of groupby, we need to add an aggregation method, basically a method that does something with the values in each group.
>
> **[2:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=123)** In our case, we're calling the mean method here in cell K10.
>
> **[2:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=129)** Since this is a long line of code, you may want to look at it in the formula bar.
>
> **[2:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=134)** Instead of mean, you could also use other aggregation methods, such as min, max, or count.
>
> **[2:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=143)** One caveat here is that pandas drops rows where the grouping key is NaN, or, in our case, an empty cell.
>
> **[2:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=152)** To prevent that, add the argument dropna=False, as you can see here in the cell below.
>
> **[2:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=161)** Looking at the preview, you can see that we now also get the average score for those students who haven't provided a country, here in the last row.
>
> **[2:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=174)** Alternatively, we can replace NaNs with a string in the DataFrame before applying the groupby method.
>
> **[3:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=184)** K12 shows you how you can replace NaNs with the string "Other" in the country column.
>
> **[3:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=194)** In the cell below, we are grouping by country and taking the mean again, which now includes the empty cells as we have replaced them with the other labels.
>
> **[3:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=210)** And because this is the last cell, we have room to turn this into values, and we can see that the row with the Other label is turning up here.
>
> **[3:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=224)** And that's how groupby works.
>
> **[3:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/data-aggregation?u=76281980&t=226)** It's a great way to get insight into meaningful subsets of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), data (2), [[Statistics]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** k10 (1), k12 (1)
> **UI Navigation:** select the (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** caveat (1)
> **Speakers:** - [felix] (1)

#### Plotting
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=0)** - [Instructor] Python in Excel gives you access to the plotting libraries Matplotlab and Seaborn.
>
> **[0:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=7)** In comparison to native Excel charts, they offer additional and more complex chart types and they can plot bigger datasets.
>
> **[0:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=16)** Matplotlib is Python's go-to library for static plotting.
>
> **[0:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=21)** By static, I mean that the plot is really a picture without any interactivity.
>
> **[0:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=27)** However, Matplotlib is a low-level library, so it can take a lot of code to achieve a fairly simple thing.
>
> **[0:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=36)** This is why Pandas makes it easy for us to create a plot from a data frame without having to use Matplotlib directly.
>
> **[0:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=45)** Seaborn is also built on top of Matplotlib.
>
> **[0:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=49)** It provides a simpler way to generate complex statistical plots.
>
> **[0:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=55)** We'll use Seaborn in the last part of this course, but in this video we're going to concentrate on using Matplotlib via Pandas.
>
> **[1:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=65)** To learn how to use Pandas for plotting, let's visualize how many students come from each country.
>
> **[1:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=74)** After turning the Excel table into a data frame in cell K1, we can use the value counts method on the country column here in cell K4.
>
> **[1:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=86)** As the preview shows, value counts counts the unique values.
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=92)** In our case, it counts how many students we have from each country.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=97)** However, to keep those students who haven't provided a country, we need to replace NaNs before calling value counts here in the cell below.
>
> **[1:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=110)** I am using unknown instead of NaNs, but you can use any other string.
>
> **[1:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=116)** And as this is a long line of code, you may want to look at it in the formula bar.
>
> **[2:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=122)** To visualize this, you absolutely can use a native Excel chart in this case.
>
> **[2:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=129)** So let's turn this cell into value mode and then insert a chart.
>
> **[2:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=137)** As simple as that.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=139)** Let's make it a bit smaller and move it to the side.
>
> **[2:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=145)** Now let's do the same with Pandas.
>
> **[2:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=148)** The only thing I have to do is to call the plot method here in cell K13, and I'm calling the plot method here on the value counts series that we have stored in that previous cell, K5.
>
> **[2:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=166)** The preview shows us the plot, but to get a proper picture, you need to right click on it and say display plot over cells.
>
> **[2:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=179)** Now we have a dynamic plot which updates whenever the source data changes.
>
> **[3:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=185)** However, the plot is a line plot by default.
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=189)** Let's turn it into a bar chart by adding kind equals bar.
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=195)** And while we're at it, let's also add a title here in that cell, K14.
>
> **[3:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=203)** Again, we can look at the preview or we can just simply repeat that command again, right click and say display plot over cells.
>
> **[3:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=215)** So now we have the bar chart with the country title.
>
> **[3:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=221)** And finally, the default style of Matplotlib is really a bit boring, I would say.
>
> **[3:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=228)** So we can set a style here in cell K14.
>
> **[3:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=234)** We can write PLT style use and then use a style name.
>
> **[4:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=241)** I'm choosing BMH.
>
> **[4:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=244)** And rerun this again.
>
> **[4:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=247)** And you can see that there is a slightly nicer looking plot turning out.
>
> **[4:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=254)** Note that PLT here is pre-imported in the initialization script from over here.
>
> **[4:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=264)** And PLT stands for the so-called pyplot interface of Matplotlib.
>
> **[4:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=272)** If you don't like this specific style, you'll find more styles in the Matplotlib documentation, but the important thing here is to set the style before using the plot method.
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/plotting?u=76281980&t=287)** So Matplotlib is a fantastic addition to Excel, but since it's a low-level library, I would recommend you to use the plot method of Pandas data frames to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Pandas (Software)|Pandas]] (5), data (4), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** plt (3), k14 (2), k13 (1), bmh (1)
> **Definitions:** is a  (4), stands for (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Analogies:** picture (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)


### 3. Time Series Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to time series
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=0)** - [Instructor] Pandas was born at a hedge fund and that's why it's really good at working with time-series.
>
> **[0:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=7)** So let's go ahead and learn the very basics of time-series analysis.
>
> **[0:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=13)** First of all, what is a time-series?
>
> **[0:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=16)** A time-series is a series of data points along a time-based axis.
>
> **[0:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=22)** Honoring the roots of Pandas, we'll use historical stock prizes for this last part of the course.
>
> **[0:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=30)** The things we are learning though could be applied to any time-series, whether that's data from a fitness tracker or a thermometer.
>
> **[0:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=39)** Now, Excel doesn't have its own data type for a date and time.
>
> **[0:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=44)** Instead, it simply formats a number as a date.
>
> **[0:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=49)** So when I turn this date in cell A1 into a general format instead of a date format, you can see that it's just a float.
>
> **[1:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=61)** The integer part represents the date and the decimal part represents the time.
>
> **[1:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=67)** Let's undo this so it shows the date again.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=72)** Cell C1 simply references that date formatted cell.
>
> **[1:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=79)** And so far we can only see that it shows the same date and time as the naive Excel cell.
>
> **[1:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=88)** But when we wrap this into repr in the cell below, we can see how Python in Excel translated this into a Python datetime object.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=100)** repr stands for object representation and you see datetime twice, because the datetime class lifts in a module with the same name.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=112)** The lack of any time zone information in the object representation here tells us that it is a so-called naive datetime object.
>
> **[2:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=122)** This makes perfect sense as Excel doesn't support any time zones.
>
> **[2:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=127)** But in Python, you would have the option to attach a time zone to these datetime objects if you need to.
>
> **[2:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=136)** We're not getting into that though.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=139)** Instead, let's move on to the time series sheet where we have a mini time-series on the top left with only two data points.
>
> **[2:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=151)** Naturally, we first have to turn the Excel table into a DataFrame here in cell E1.
>
> **[2:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=160)** When working with time-series, you want to do three things before anything else.
>
> **[2:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=166)** Check the data types, set the index, and sort the index.
>
> **[2:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=173)** Let's run through them one by one.
>
> **[2:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=177)** Check the data types.
>
> **[2:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=178)** Well, this isn't really specific to time-series, but things are much more likely to go wrong when time-based data is involved.
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=189)** So make sure that the data type of the time-based column is datetime.
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=195)** Otherwise, Pandas has no idea that this is supposed to be a time-series.
>
> **[3:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=202)** When looking at the preview, we can see that this looks good as we have datetime over here.
>
> **[3:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=209)** If that wouldn't be the case, you would either have to format your cells properly with date format, or alternatively, you can use the Pandas function, which is called to_datetime to fix this.
>
> **[3:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=225)** The next point is set the index.
>
> **[3:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=229)** Set the relevant column with the timestamps as the index.
>
> **[3:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=234)** This will make it easier to select specific timeframes and is required for some time-series related calculations.
>
> **[4:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=244)** And finally, sort the index.
>
> **[4:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=248)** We need to sort the index so that the timestamps are properly ordered.
>
> **[4:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=253)** Sorting is important as time-series data has an explicit order.
>
> **[4:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=258)** For example, looking at unordered time-series data in a plot wouldn't make sense.
>
> **[4:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=264)** When we now look at the DataFrame in cell E8, then we get a properly sorted time-series when we turn this into the Excel value mode.
>
> **[4:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=278)** And that's how the very basics of time-series work with Python in Excel.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/introduction-to-time-series?u=76281980&t=283)** This means we are now ready to play around with historical stock prices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Microsoft Excel|Excel]] (7), [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (4), next (1)
> **CLI Commands:** python (4), make (3)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Code Identifiers:** to_datetime (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Time series analysis with pandas DataFrames
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=0)** - [Instructor] Let's get started with some real-world time series analysis using the historical price data of the Microsoft stock.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=10)** To get our historical stock data, we can use the stock history formula here in cell B5.
>
> **[0:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=17)** Just in case you don't have access to this formula in your version of Excel, you can use the data from the value sheet instead.
>
> **[0:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=26)** The stock history formula accepts a stock ticker and a start and end date.
>
> **[0:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=33)** This gives us the close price of the Microsoft stock for each trading day.
>
> **[0:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=39)** As usual, let's turn this into a data frame here in cell F1.
>
> **[0:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=46)** Since the stock history function returns a dynamic array, Excel will refer to it by the top left cell, followed by a hash sign.
>
> **[0:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=57)** This is great, as the data frame's source will adjust dynamically according to the data returned by the stock history function.
>
> **[1:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=67)** As we previously learned when working with time series data, we want to double check the data types.
>
> **[1:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=73)** So let's do that here in cell F4.
>
> **[1:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=78)** Looking at the preview, we can see that we are lucky because the date column has the proper date time data type.
>
> **[1:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=87)** Then let's set the date column as the index in the cell below, and finally, make sure that the index is properly sorted here in cell F6.
>
> **[1:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=101)** Now to get a sense for the data or spot any obvious errors, it's always good to have a quick look at the plot.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=112)** The preview here shows a reasonable chart for the recent history of the Microsoft stock performance.
>
> **[2:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=121)** A great feature with a time-based index is that you can easily select specific timeframes.
>
> **[2:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=128)** So I want to look at the year 2023 here in isolation.
>
> **[2:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=133)** So to do that, I can use the .lock attribute with the year.
>
> **[2:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=140)** It's important to use a string and not a number for the year, though.
>
> **[2:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=146)** The preview shows us that the data goes now from January to December, 2023 and covers 250 trading days.
>
> **[2:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=158)** Similarly, if you want to know how the stock performed in the last quarter of 2023, you can use this string format here as shown in cell F9.
>
> **[2:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=172)** Let's append the plot method to that expression from the previous cell.
>
> **[2:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=178)** We can either look at the preview or right click on the cell and select display plot over cells.
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=188)** And this will give us the chart for just the last quarter of 2023.
>
> **[3:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=196)** Now, if you'd like to know the weekday for each date, you can use the day, name, date, time method.
>
> **[3:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=204)** So in cell F13, I am using the day name method directly on the data frames index.
>
> **[3:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=217)** Looking at the preview, we can see that our time series starts on a Thursday, but here's the thing.
>
> **[3:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=225)** To use date time methods on a regular column, you need to use the DT attribute.
>
> **[3:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=233)** To see this in action, let's copy the index back as a regular column in cell F14.
>
> **[4:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=242)** And to get the day name again from that date column, we now have to use the DT attribute as shown here in cell F15.
>
> **[4:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=256)** Turning this into Excel values will give us the name of the day for each trading day.
>
> **[4:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/time-series-analysis-with-pandas-dataframes?u=76281980&t=266)** So from this video, let's remember that Pandas makes it easy to select specific timeframes via strings, and that date time methods require you to use the DT attribute on regular columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), [[Microsoft]] (3), [[Microsoft Excel|Excel]] (3), [[Time Series Analysis]] (1), feature (1)
> **Env Vars:** f13 (1), f14 (1), f15 (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Shifting and percentage changes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=0)** - [Felix] Calculating percentage changes is a core part of time series analysis, but the way you do it with data frames is a bit different from the classic spreadsheet formula.
>
> **[0:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=12)** So let's see how it works.
>
> **[0:14](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=14)** I have pulled the open and close prices here for the Microsoft stock using the stock history function, but I have stored the data as values.
>
> **[0:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=24)** I have, however, left the formula in a comment here for your reference.
>
> **[0:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=31)** Let's run through the first couple of cells quickly as this is just the usual preparation for working with time series data.
>
> **[0:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=39)** So we're turning the source data into a data frame here in cell G1.
>
> **[0:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=45)** Then we double check the data types in cell G4, and we also set the index and sort the index as usual.
>
> **[0:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=56)** The only other thing we're adding here is dropping rows with NaN values in cell G7.
>
> **[1:03](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=63)** So we are left with only rows that have both an open and close price.
>
> **[1:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=70)** Now to find out if a stock did well over a certain period of time, we can look at its percentage change.
>
> **[1:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=78)** In order to calculate this, pandas offers the pct_change method, as we can see here in cell G10.
>
> **[1:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=89)** Looking at the preview, we can see reasonable positive and negative percentage changes.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=96)** The percentage change is also called the simple return.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=100)** However, financial analysts often use the logarithmic return instead as it is easier to work with and is often assumed to follow a normal distribution.
>
> **[1:54](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=114)** And here's the definition.
>
> **[1:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=117)** Log returns are defined as the natural logarithm of the ratio of the current and previous price.
>
> **[2:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=125)** Pandas doesn't have a built-in method for this, so we will have to calculate it ourselves.
>
> **[2:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=132)** And with pandas, it works a little different from what you would expect coming from a spreadsheet.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=139)** With data frames, we work with shifted time series like you can see here in cell G13.
>
> **[2:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=147)** In the preview, you can see that the shift method pushes the values down by the provided periods, in our case, one, while it keeps the index unchanged.
>
> **[2:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=160)** This allows us to stay on the same row for the calculation in the next step, or in more technical terms, we can use the vectorized notation.
>
> **[2:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=171)** What I mean by that is that in cell G14, we can simply divide the original data frame by the shifted one without having to write any loops.
>
> **[3:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=184)** And looking at the preview, we can see that here is data alignment at work, one of pandas' killer features, which we introduced in an earlier video.
>
> **[3:16](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=196)** What's happening here is that pandas aligns both the index and columns for the division according to their labels.
>
> **[3:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=204)** By the way, we can use the division operator here instead of the diff method as we got rid of the NaN values previously.
>
> **[3:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=214)** What's left now is to take the natural logarithm of this ratio here in cell G15.
>
> **[3:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=223)** We can do this by using NumPy's log function.
>
> **[3:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=226)** NumPy is one of the packages that pandas built upon, and it's imported in the initialization pane with the alias NP.
>
> **[3:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=236)** Now, NumPy's log function is a so-called universal function, which just means that it works on every element of a pandas data frame.
>
> **[4:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=247)** A little caveat here, in NumPy, log is the natural logarithm, so it corresponds to what Excel calls LN.
>
> **[4:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=257)** And finally, to visualize all these log returns, we can plot a histogram here in cell G18.
>
> **[4:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=267)** And we could either look at the preview here or simply right click and say Display Plot over Cells.
>
> **[4:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=275)** And this already gives us a good first idea about the distribution of the daily log returns.
>
> **[4:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/shifting-and-percentage-changes?u=76281980&t=284)** And just like that, we went from stock prices to plotting the histogram of daily log returns in a very clean and concise way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Pandas (Software)|Pandas]] (7), [[Time Series Analysis]] (1), [[Microsoft]] (1), next (1)
> **Env Vars:** g10 (1), g13 (1), g14 (1), g15 (1), g18 (1)
> **Definitions:** is a  (3), defined as (1), means that (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** pct_change (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)

#### Comparing time series
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=0)** - [Instructor] The more the merrier.
>
> **[0:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=2)** So, let's use the historic prices of a couple of tech stocks to compare their performance.
>
> **[0:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=9)** In addition to the Microsoft stock from before, we have the tickers for Google, Apple, Amazon, Meta, Netflix and Tesla.
>
> **[0:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=20)** I loaded the historic prices using the stock history function and then converted the data into values.
>
> **[0:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=27)** However, I'll have the formulas here as cell comments for your reference.
>
> **[0:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=34)** You will notice that Meta and Tesla start at a later date than the rest of the stocks, and the reason is simple.
>
> **[0:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=42)** They just weren't traded before that date.
>
> **[0:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=46)** Now, to compare these stock prices, we need to create a data frame for each ticker along these lines here.
>
> **[0:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=56)** This will then allow us to align the values according to their dates by using the CONCAT function.
>
> **[1:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=64)** So, let's switch over to the calculation sheet.
>
> **[1:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=68)** In the first cell, B1, we are reading in the first row with the stock tickers.
>
> **[1:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=75)** Squeeze turns a single column data frame into a series, and by using drop NA, we are getting rid of the empty cells.
>
> **[1:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=84)** Accordingly, we are looking at a series of tickers here in the preview.
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=92)** In cell B2, we are reading in all the prices starting from the second row of the prices sheet.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=100)** We are calling the data frame source.
>
> **[1:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=102)** And let's have a quick look at the preview.
>
> **[1:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=105)** So you can see, it reads in all of the time series for all the tickers.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=112)** Now we need to split the source data frame up into the individual stocks here in cell B3.
>
> **[2:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=120)** There's a few things going on here.
>
> **[2:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=124)** Basically, we are looping through the columns in pairs because there's always a date and a close column particular.
>
> **[2:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=133)** Then we set the index and we also set the ticker as the column name and drop rows with NANs.
>
> **[2:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=145)** And finally, we are adding that single stock data frame to a list with the name parts.
>
> **[2:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=155)** And now we can combine all the data frames in the parts list again in cell B4 Before using CONCAT.
>
> **[2:44](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=164)** We are also sorting the index in the same cell.
>
> **[2:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=169)** Since we are concatenating the individual data frames along the vertical axis, we need to provide axis equals one as an argument.
>
> **[3:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=180)** This will give us a data frame where all the rows are now properly aligned as the preview here shows.
>
> **[3:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=191)** So when we scroll to the right, we see that Meta and Tesla start with NANs, as their history doesn't go back As far as the history of the other stocks.
>
> **[3:26](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=206)** To restrict the data frame to a timeframe where all the price histories overlap, we can use drop NA in cell B5.
>
> **[3:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=217)** Let's plot this in the cell below to see what we got so far.
>
> **[3:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=223)** The preview looks pretty reasonable.
>
> **[3:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=225)** The only issue here is that every stock starts at a different price, so we can't yet compare them on this chart.
>
> **[3:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=235)** Let's fix this by setting the start price for all stocks to the same starting price of 100, a process that is called re-basing.
>
> **[4:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=246)** Here in cell B7, we are dividing the prices data frame by its first row.
>
> **[4:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=253)** While the prices data frame is two-dimensional, the first row is a one-dimensional series.
>
> **[4:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=260)** However, Pandas automatically copes with the difference in dimension, so it can perform an element wise division.
>
> **[4:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=269)** Technically, this process is called broadcasting.
>
> **[4:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=273)** Since we've dropped the rows with NANs previously, we can use the arithmetic operator here instead of using the respective methods like diff or mull.
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=287)** Now, we can plop this again in cell B8.
>
> **[4:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=291)** Let's right click on this and select display plot over cells.
>
> **[4:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=297)** This allows us to look at the chart and see where we should have invested our money back in 2012.
>
> **[5:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/comparing-time-series?u=76281980&t=307)** And that's how you leverage the power of Pandas to be able to compare the individual stock prices that the stock history function returns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), [[Pandas (Software)|Pandas]] (2), [[Microsoft]] (1), [[Google]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (2), is a  (1)
> **Env Vars:** concat (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Resampling and correlation
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=0)** - [Instructor] Changing the frequency of time series and looking at their mutual correlation coefficient are important concepts in time series analysis.
>
> **[0:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=9)** Let's see how it's done.
>
> **[0:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=11)** On the Prices sheet here, I have the data of the prices data frame from the previous video.
>
> **[0:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=18)** In other words, it's already a clean dataset.
>
> **[0:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=22)** So, let's switch over to the Calculations sheet and turn it back into a data frame with the date as the index here in cell B1.
>
> **[0:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=34)** Having a quick look at the data here in the preview shows us that these are daily time series, but if you are a long-term investor, a daily time series may be too noisy for statistical analysis.
>
> **[0:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=49)** So, we want to change the frequency of the observations from daily to weekly.
>
> **[0:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=56)** This is called resampling.
>
> **[0:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=58)** And accordingly, pandas has a method called resample, as we can see here in cell B4.
>
> **[1:08](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=68)** As an argument, you have to provide the desired frequency.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=72)** In our case, I am choosing weekly on Fridays.
>
> **[1:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=77)** For other possible frequency strings, you can check the pandas' docs.
>
> **[1:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=82)** Then, you need to chain another method to define how you resample in the cell below here.
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=92)** In my case, I am using last, so if Friday is a holiday, it takes the value of the last business day of that week, which might be Thursday or even earlier in the week.
>
> **[1:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=106)** We're storing the result and the variable weekly prices.
>
> **[1:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=110)** And looking at the preview here confirms that the index now has a weekly frequency.
>
> **[1:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=118)** With weekly prices, we can move on to calculate the weekly log returns here in cell B6 using the formula from an earlier video.
>
> **[2:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=132)** So, to get an idea about how much the various stock prices move together over time, we can look at the correlation coefficient of the returns.
>
> **[2:23](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=143)** As a quick recap, the correlation coefficient moves between -1 and +1, where 1 means the strongest correlation and 0 means no correlation at all.
>
> **[2:35](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=155)** In pandas, to calculate a correlation matrix, all I have to do is use the core method here in cell B9 on the data frame with our log returns.
>
> **[2:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=171)** Looking at the preview gives us the full correlation matrix where you can read off the correlation of each stock with the other one.
>
> **[3:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=180)** I personally love this functionality as the built-in Excel function CORREL only accepts two datasets and can't calculate a full correlation matrix.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=192)** Now, looking at all these numbers may make you a bit dizzy, so to make things easier, we can visualize this correlation matrix as a heat map.
>
> **[3:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=202)** To do so, we will use seaborn here in cell B12.
>
> **[3:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=209)** As mentioned in an earlier video, seaborn is built on top of Matplotlib.
>
> **[3:34](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=214)** And it makes statistical plotting a lot easier, including our heat map.
>
> **[3:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=221)** Seaborn is already imported with the alias sns in the initialization pane, so we can directly use it in cell B12 here.
>
> **[3:52](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=232)** Looking at the preview, this gives us something, but it isn't really usable just yet.
>
> **[4:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=240)** What we want is a literal heat map, so the more red, the hotter or bigger the number.
>
> **[4:09](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=249)** We can fix this by giving it the cool warm color map here in the cell below.
>
> **[4:17](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=257)** Looking at the preview now gives us a red and blue color scheme.
>
> **[4:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=264)** But the correlations move between -1 and +1.
>
> **[4:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=268)** So, we want to fix the scale to those values by providing the vmin and vmax argument here.
>
> **[4:39](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=279)** So, let's right click on it and select Display over Cells.
>
> **[4:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=286)** And as you can see, this is a pretty decent heat map.
>
> **[4:49](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=289)** So, now you can see for example here between Apple and Netflix, there is a lower correlation than in many of the other areas.
>
> **[4:59](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=299)** And you could use that information to pick the right stocks for your portfolio.
>
> **[5:06](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/resampling-and-correlation?u=76281980&t=306)** All right, that was how you can have some fun with correlation matrices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Pandas (Software)|Pandas]] (3), [[Time Series Analysis]] (1), [[Statistical Analysis]] (1), business (1)
> **Definitions:** is a  (4), in other words (1), is called (1)
> **Env Vars:** b12 (2), correl (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), earlier in (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)

#### Case study: Sales dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=0)** - [Instructor] Let's build a sales dashboard.
>
> **[0:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=2)** We will use Power Query to load data into a data frame, and we will see how pivot tables work in Pandas.
>
> **[0:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=10)** So here's what we're going to build.
>
> **[0:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=12)** A dashboard that shows the total sales amount per store location, with the ability to change the year of the analysis.
>
> **[0:22](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=22)** But let's start at the beginning.
>
> **[0:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=25)** Within the exercise files, there's a folder called Sales Data.
>
> **[0:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=30)** It contains the Excel files with our sales data, so it's one file per month, and we have files covering two years.
>
> **[0:38](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=38)** Let's open this sample file from April 22.
>
> **[0:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=43)** The data is from a fictitious mobile phone provider offering various plans.
>
> **[0:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=48)** These plans are sold via physical store location throughout the US, as shown in column B.
>
> **[0:55](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=55)** Other than that, we will need the transaction date and amount columns for our analysis.
>
> **[1:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=62)** Remember, in the dashboard, we want to show how much each store sold in total per month.
>
> **[1:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=70)** In the main exercise file, here on the dashboard sheet, we're going to add a table and chart showing the total sales per month, and store.
>
> **[1:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=81)** We have already added a title and the year for which we want to run the analysis.
>
> **[1:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=87)** Now, let's switch over to calculations.
>
> **[1:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=91)** As you can see, it is currently full of errors, but that will be fixed once we replaced the todo in cell B1 here with actual Python code.
>
> **[1:43](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=103)** But first, we need to load our data files with Power Query.
>
> **[1:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=108)** In the meantime, let's close the diagnostics pane.
>
> **[1:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=113)** We access Power Query via the Data tab, Get Data, From File, and then From Folder.
>
> **[2:01](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=121)** Navigate to wherever you have stored your exercise files.
>
> **[2:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=125)** In my case, it's on the desktop.
>
> **[2:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=127)** Click into it and open the sales data folder.
>
> **[2:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=131)** Click on OK.
>
> **[2:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=133)** Now click on Combine and Combine & Load To.
>
> **[2:19](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=139)** Click on sheet one for the preview, then OK.
>
> **[2:24](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=144)** Now, importantly, select Only Create Connection.
>
> **[2:28](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=148)** And OK.
>
> **[2:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=150)** This opens the Power Query task pane on the right hand side, and you can see that it created the sales data connection here at the very bottom.
>
> **[2:41](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=161)** We can now close the task pane and replace the todo here with a Python cell.
>
> **[2:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=168)** Let's create a data frame called sales, and type XL, parenthesis, and quote, and this gives us a list of the power queries that we can select.
>
> **[3:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=180)** So since sales data is already selected, we can hit the Tab key, and then CTRL, Enter, to recalculate the Python cells.
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=190)** Now the errors are gone.
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=193)** The preview here in cell B1 shows us that we're looking at roughly 160,000 rows.
>
> **[3:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=201)** Now we can move on to the usual first steps in a time series analysis, which is setting the index and sorting it.
>
> **[3:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=211)** In cell B3, we are writing out the years that are covered in the external files, so we can use them later for the year selection.
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=222)** Since this is a one dimensional series, Excel writes it out vertically when you change it to values, as I have done over here.
>
> **[3:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=231)** So, to write it out horizontally, we have to wrap it into a list here.
>
> **[3:58](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=238)** In cell B4, we are filtering the data frame to only the year that we choose on the dashboard.
>
> **[4:05](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=245)** Remember, to filter by year, we need to use a string, not a number, which is why we have to use the STR function here.
>
> **[4:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=255)** In cell B5, we are grouping the data per store, and then summing it up, per month, using the sum function, over here.
>
> **[4:30](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=270)** As the preview shows, we now have one row for each store and month.
>
> **[4:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=277)** This is hard to read, though, so let's turn this into a pivot table by using the pivot table method here in cell B6.
>
> **[4:48](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=288)** First, we need to reset the index so that we have all information available as regular columns.
>
> **[4:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=296)** We're also building a column with a string for the month and year.
>
> **[5:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=300)** This will save us from having to do manual date formatting on the chart and table.
>
> **[5:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=307)** The pivot table arguments work similar to how an Excel pivot table works.
>
> **[5:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=312)** You have to say which column goes into the index, which one into the columns, and which one into the body of the pivot table, as indicated here with the values argument.
>
> **[5:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=327)** You also need to provide the name of a function that is used to aggregate the data.
>
> **[5:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=333)** The margins argument will add a total row and column like the Excel pivot table does.
>
> **[5:42](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=342)** And finally, we remove the column and index name so that the output is easier to read.
>
> **[5:50](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=350)** Looking at the preview here, the information is now much easier to read, and fits on a dashboard.
>
> **[5:57](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=357)** Let's visualize this pivot table in cell B7.
>
> **[6:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=362)** Using ILOC makes it trivial to leave out the total row and column from the plot.
>
> **[6:11](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=371)** And as usual, right click on the plot cell, and select Display Plot over Cells.
>
> **[6:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=378)** Right click again, select Cut, and go to the dashboard, and paste it over here.
>
> **[6:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=385)** You can obviously also use the CTRL X and CTRL V shortcuts.
>
> **[6:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=393)** So let's make this a little smaller, and we're almost done.
>
> **[6:37](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=397)** So let's create a Py cell here, and type sales summary, which is our pivot table data frame.
>
> **[6:46](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=406)** Hit CTRL, Enter to run the Python code.
>
> **[6:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=411)** and we get that data frame back, so now just turn it into values, and style it a little bit, so maybe the numbers, we can go here and select the numbers, accounting style here.
>
> **[7:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=427)** And then for the headers, we can obviously bold them both here, and there, and maybe right align the header row.
>
> **[7:18](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=438)** And that's pretty much it.
>
> **[7:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=440)** So, the last step is to turn the year, here, for the selection into a dropdown.
>
> **[7:29](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=449)** Select this cell, and then go to data and data validation.
>
> **[7:36](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=456)** Say Allow List, and for the source, go to Calculations, select only the first cell, and then add a hash key here, and select OK.
>
> **[7:51](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=471)** The hash sign will make sure that it refers to the full dynamic array, no matter how many years we cover in our source file.
>
> **[8:02](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=482)** And so now we can switch back and forth between the different years of the analysis, and have the table and chart updated accordingly.
>
> **[8:13](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=493)** If you have any changes in the source files, just hit CTRL, Shift, and F9 to recalculate the whole sheet, or go to the Data tab and click the Refresh All button.
>
> **[8:27](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=507)** And that was how you build a dashboard with Python in Excel.
>
> **[8:31](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/case-study-sales-dashboard?u=76281980&t=511)** I hope that I could inspire you to go out there now, and build your very own dashboard with Python in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (20), [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (6), [[Microsoft Power Query|Power query]] (4), hit (3)
> **UI Navigation:** click on (4), go to (4), navigate to (1), open the (1), select the (1)
> **CLI Commands:** python (6), make (2)
> **Env Vars:** ctrl (5), str (1), iloc (1)
> **Exercise Files:** exercise files (2), exercise file (1)
> **Definitions:** is a  (1), refers to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### The next steps for learning more about Python in Excel
> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=0)** - [Instructor] Congratulations on reaching the end of the course.
>
> **[0:04](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=4)** If you want to learn more about Python in Excel, it's always a good idea to check out the official documentation.
>
> **[0:12](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=12)** If there are things where you got stuck or where you need more information, there's a Q and A section on the course page that you can use.
>
> **[0:21](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=21)** I do hope you enjoyed learning about Python in Excel.
>
> **[0:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=25)** However, we touched on many different topics and were only able to scratch the surface.
>
> **[0:32](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=32)** There are other courses that go into more detail on data science and data analysis like Python for Data Science Essential Training, or [[Python Data Analysis]].
>
> **[0:45](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=45)** Other courses like [[Python for Data Visualization]], focus on Matplotlib and other plotting libraries.
>
> **[0:53](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=53)** You can also move on to more advanced topics we haven't touched at all in this course, such as machine learning with Psychic Learn, a package that is also available with Python in Excel.
>
> **[1:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=67)** If you are interested in my own work with Python on Excel, you can check out my project xlwings on [xlwings.org](https://xlwings.org).
>
> **[1:15](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=75)** xlwings is a Python package that allows you to do a ton of things with Excel.
>
> **[1:20](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=80)** You can write user-defined functions, macros or automation scripts.
>
> **[1:25](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=85)** It also allows you to do advanced things like calling VBA functions from Python and vice versa.
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=93)** A key difference to Python in Excel is that it runs locally or on your self-hosted server.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=100)** If these things sound interesting to you, you may want to have a look at my book "Python for Excel", which covers Pandas and xlwings, as well as other libraries such as Openpyxl and XLsxWriter.
>
> **[1:56](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=116)** And finally, I'm posting regularly about Python and Excel.
>
> **[2:00](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=120)** So make sure to follow me on LinkedIn or Twitter or on YouTube.
>
> **[2:07](https://www.linkedin.com/learning/python-in-excel-working-with-pandas-dataframes/the-next-steps-for-learning-more-about-python-in-excel?u=76281980&t=127)** I hope to see you there!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Microsoft Excel|Excel]] (8), data (5), [[Automation]] (1), [[Pandas (Software)|Pandas]] (1)
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