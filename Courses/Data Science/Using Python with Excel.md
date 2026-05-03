---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: using-python-with-excel-22676328
url: "https://www.linkedin.com/learning/using-python-with-excel-22676328"
duration_minutes: 56
duration: 56m
level: Intermediate
updated: 8/3/2023
learners: 616218
skills:
  - Python (Programming Language)
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQENrV8UgGZ-Iw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690919454982?e=2147483647&amp;v=beta&amp;t=NY6sWyz6S_iNa30ChUHPWBh-7TgOc0rNlOXfbRRA9Hc"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[Excel- Working Together with Power Query and Power Pivot]]'
next_courses:
  - '[[From Excel to SQL]]'
path_nav: '[{"path":"Master Advanced Excel Data & Analytics Skills","position":4,"total":7,"prev":"Excel- Working Together with Power Query and Power Pivot","next":"From Excel to SQL"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/python-programming-language
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Using%20Python%20with%20Excel.md)

![Using Python with Excel](https://media.licdn.com/dms/image/v2/D560DAQENrV8UgGZ-Iw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690919454982?e=2147483647&amp;v=beta&amp;t=NY6sWyz6S_iNa30ChUHPWBh-7TgOc0rNlOXfbRRA9Hc)

# Using Python with Excel

> Python is one of the world's most widely used object-oriented programming languages. It's a powerful tool that can help you streamline workflows as a developer and a data scientist. In this course, join instructor George Mount to learn how to combine the power of the Python language with the data analysis and reporting tools built into Microsoft Excel.Discover how to leverage the pandas and openpy

> [LinkedIn Learning](https://www.linkedin.com/learning/using-python-with-excel-22676328) | 56m | Intermediate | 616K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Managing Excel with Python](#managing-excel-with-python)
- [**1. Python and pandas**](#1-python-and-pandas) (6 videos)
  - [Jupyter Notebooks basics](#jupyter-notebooks-basics)
  - [Introducing the Python pandas library](#introducing-the-python-pandas-library)
  - [Loading and saving data with pandas](#loading-and-saving-data-with-pandas)
  - [Viewing and inspecting data with pandas](#viewing-and-inspecting-data-with-pandas)
  - [Manipulating data with pandas](#manipulating-data-with-pandas)
  - [Working with dates and times in pandas](#working-with-dates-and-times-in-pandas)
- [**2. openpyxl**](#2-openpyxl) (4 videos)
  - [Using openpyxl with Workbooks](#using-openpyxl-with-workbooks)
  - [Selecting cells, rows, and columns](#selecting-cells-rows-and-columns)
  - [Adding workbook formatting](#adding-workbook-formatting)
  - [Creating names, ranges, and tables](#creating-names-ranges-and-tables)
- [**3. Working with Reports**](#3-working-with-reports) (5 videos)
  - [Managing multiple sheets](#managing-multiple-sheets)
  - [Working with large worksheets](#working-with-large-worksheets)
  - [Conditional formatting](#conditional-formatting)
  - [Creating Excel plots in Python](#creating-excel-plots-in-python)
  - [Exporting Python plots to Excel](#exporting-python-plots-to-excel)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing Excel with Python](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-excel-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-excel-with-python?u=76281980&t=0)** Despite the rise of so many [[Business Intelligence (BI)|business intelligence]] and [[Data Science]] tools, much of the business world's reporting still lives in [[Microsoft Excel|Excel]]. That won't be changing any time soon. So if you can't beat them, join them. Use [[Python (Programming Language)|Python]] to create even the most complex workbooks without even opening Excel. Hi, my name is George Mount. I'm the founder of Stringfest Analytics where I specialize in teaching Python, Excel, and more to professionals like you. I'm a [[Microsoft Excel]] MVP and the author of Advancing Into Analytics from Excel to Python and R. In this course, I'll go over tools for integrating Excel with Python, in particular [[Pandas (Software)|Pandas]], a [[Data Manipulation]] powerhouse, and openpyxl, which lets you both read and write Excel files and Python with flair. I'm excited to get you moving on your Python and Excel journey. If you love the idea of automating anything in Excel using Python, you won't want to miss this. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[Python (Programming Language)|Python]] (7), [[Business Intelligence (BI)|Business intelligence]] (1), [[Data Science]] (1), [[Microsoft Excel]] (1)
> **CLI Commands:** python (7)
> **Env Vars:** mvp (1)


### 1. Python and pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Jupyter Notebooks basics](https://www.linkedin.com/learning/using-python-with-excel-22676328/jupyter-notebooks-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/jupyter-notebooks-basics?u=76281980&t=0)** If you don't think code can be beautiful, you'll have to check out Jupyter Notebooks. After watching this video, you'll be able to navigate the interface used for working with [[Python (Programming Language)|Python]] in this course. The first step is to download the exercise files and open the demo file for this lesson. 01_01_demo.ipynb. This file extension is short for Interactive Python Notebook, which is now known as the Jupyter Notebook. This is a popular interface for data analysts to work with Python code. I've included a guide to download and load this and all the required software in the resource file. It's time to launch the Jupyter Notebook for the first time and navigate to the course files. If you're on PC, you can do this by hitting the |"[[Windows]]" key, search for Jupyter Notebook and you should see this icon pop up, hit "Enter" and a browser window will open. You can do the same on Mac by going to your launchpad. Search for terminal. Then once a window appears type Jupyter Notebook and hit "Enter". You should now see the same browser window. Congrats on launching Jupyter for the first time. From here, you need to navigate to wherever your demo folder was saved, which I suggest should be Downloads for now. Make sure you've decompressed the demo folder then click on it From here, you will see all the folders and files used in the course. Click on the "start" folder, "module _01", then "01_01_demo", and finally "01_01_demo" to get started. If this is your first time using Jupyter Notebooks, I'd suggest going to help on the menu bar and then user interface tour to get a look around.
>
> **[1:34](https://www.linkedin.com/learning/using-python-with-excel-22676328/jupyter-notebooks-basics?u=76281980&t=94)** This is not a course on Jupyter, so I'll just be showing you the basics to run the code in this course. Now go to this gray cell down here. This is where you will actually code in Python. One thing you are going to see a lot in this course is the code to import the [[Pandas (Software)|pandas]] and open pyexcel packages. So give it a try for the first time here. First I'm going to import pandas giving it the alias of pd. Next is the openpyxl package, no alias for this one. If you're not familiar with either of these packages, well, you're in the right place. Press "Run" and you'll see the code is executed and a new cell is placed beneath it. The keyboard shortcut for running code is Shift + Enter. I'll run that here on a blank cell and you'll see that nothing runs but a new cell is returned. The Jupyter Notebook is really meant to provide a clean, modular, modern interface for working with your Python code. There's a lot more you can do with it, but for now, this should be enough to get you up and running for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Pandas (Software)|Pandas]] (2), [[Windows]] (1)
> **Tools:** jupyter (9), terminal (1)
> **CLI Commands:** python (5), make (1)
> **UI Navigation:** navigate to (2), click on (2), open the (1), go to (1)
> **Definitions:** short for (1), known as (1), is a  (1)
> **Exercise Files:** download the (1), exercise files (1)

#### [Introducing the Python pandas library](https://www.linkedin.com/learning/using-python-with-excel-22676328/introducing-the-python-pandas-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/introducing-the-python-pandas-library?u=76281980&t=0)** [[Pandas (Software)|Pandas]] is a [[Python (Programming Language)|Python]] library that provides powerful data analysis features from reshaping tables to analyzing missing values to descriptive [[Statistics]] and more. After watching this video, you'll be able to import pandas and describe its key features. Open the demo file for this lesson. 01_02_demo. Just as with most demos in this course, I'm going to start things off with import pandas as pd. Go to the toolbar and click "Run" and pandas is now ready to use. But used for what exactly? What is pandas good for? Well, to answer this, I'm going to pull up some documentation which can be done by typing the question mark operator and then pd. Run this line of code. You can either go back to the menu bar to click "Run", or from here on out I'll be using the keyboard shortcut, Shift + Enter. In either case, you should see a pop-up saying something about the pandas package, that it is meant for data analysis and manipulation in Python. It also lists some cool features and benefits. So this is really saying that pandas aims to be the tool for analyzing data in Python and considering its popularity, I'd say it's doing a pretty good job. This course will make use of one particular data structure in pandas called the DataFrame. Learn more by running the code ?pd.DataFrame. This pop-up says that DataFrames are two-dimensional. These are a lot of big words, so I'm going to keep scrolling and look at an example instead. I see here a tiny DataFrame called df. Don't worry too much about how it was made, but instead what the output looks like. It wouldn't be out of place in something you'd have in [[Microsoft Excel|Excel]],
>
> **[1:33](https://www.linkedin.com/learning/using-python-with-excel-22676328/introducing-the-python-pandas-library?u=76281980&t=93)** right? You've got a table of data with rows and columns, variable headers, and so forth. This is what the documentation meant by tabular two-dimensional data. Whenever you're looking to manipulate spreadsheet-like data in Python, pandas is your best bet. And I'll show you a few techniques for doing so in this module. After that, you'll learn how to send the resulting data out to Excel and then format it with openpyxl.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (9), [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (2), [[Statistics]] (1)
> **CLI Commands:** python (4), make (1)
> **UI Navigation:** open the (1), go to (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Loading and saving data with pandas](https://www.linkedin.com/learning/using-python-with-excel-22676328/loading-and-saving-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/loading-and-saving-data-with-pandas?u=76281980&t=0)** [[Pandas (Software)|Pandas]] can read data and from a variety of sources, including [[Microsoft Excel|Excel]] workbooks. In this video, you'll learn how to import and export Excel data to [[Python (Programming Language)|Python]] using pandas. Open the demo file for this lesson, 01_03_demo. There's an Excel workbook named superstore.xlsx available in your resource folder. The first step is to load data into Python using the pandas function, read_excel. I've now read this in and assigned the results to orders. The next thing I'm going to do is print the first few rows of this data set just to get a glimpse of it with orders.head. () . Now, I was expecting a data set consisting of order quantities and sales, so it looks like something didn't go right here. All I see is it returns data. I'm going to open my Excel workbook to find out. And it looks like this workbook actually has two worksheets. One with the order data called orders and another with returns data called returns. So basically, I need a way to open a specific worksheet and I can do this by adding sheet_name = 'orders' to the read_excel function. And I actually do also want to read in the returns worksheet. So I'll create the object returns, then read_excel again, read in superstore.xlsx and finally set sheet name to returns. Print the head, and there is that DataFrame.
>
> **[1:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/loading-and-saving-data-with-pandas?u=76281980&t=96)** Now I'd like to rename the column headers of the returns DataFrame. Do I need to go back into Excel and retype the headers to do that? Fortunately, not. There is actually another argument I can provide here in read_excel called names and I'll pass in return then details both in lowercase. Run the head method and you'll see these columns have been renamed. There is, of course, a lot more you could do to transform this data. For example, you probably want to split the Details column into an Order ID column and a Details column. But for now, I'm going to export this data out to a new Excel workbook. And the way to do that is returns.to_excel('returns.xlsx').
>
> **[2:27](https://www.linkedin.com/learning/using-python-with-excel-22676328/loading-and-saving-data-with-pandas?u=76281980&t=147)** Open up Excel and check out the results. Things look pretty good, but I am not loving these numbers running along Column A. This is actually the index column of the pandas DataFrame and it's probably not necessary to load it into Excel. So I'm going to set index = false. Reopen the returns.xlsx workbook, and that looks better. Your exported workbook is looking good, but what if you wanted to do things like add a chart, adjust a column, or apply conditional formatting? Pandas has pretty limited functionality when it comes to actually manipulating the objects of the Excel workbook. That's where openpyxl will come in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (9), [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** read_excel (4), sheet_name (1), to_excel (1)
> **CLI Commands:** python (2), find (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)

#### [Viewing and inspecting data with pandas](https://www.linkedin.com/learning/using-python-with-excel-22676328/viewing-and-inspecting-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/viewing-and-inspecting-data-with-pandas?u=76281980&t=0)** When analyzing data in [[Pandas (Software)|pandas]], you might be working with thousands of rows or more. It's just too much to scroll through and make sense of it manually. You'll need some methods to summarize the data, and that's what this lesson is all about. Open the demo file for this lesson, 01_04_demo. This demo will be using a sample data set of penguin measurements from the Seaborn package which should already be downloaded if you have installed Anaconda. Now again, pandas DataFrames are generally just too big to print everything, so typically you'll use the head method just to print the first few rows. In this case, the code is penguins.head(). You'll see nearly every analysis of a DataFrame start with this method. By default, head prints the first five rows of the DataFrame. If you want to see more, just specify how many such as penguins.head(20) to get the first 20 rows. On the flip side, run penguins.tail(20) to get the last 20 rows. Next, try the info method by typing penguins.info(). This provides a useful summary of the DataFrame and each column in it. For example, you'll see the data type for each column along with a count of non-null values. If all you want to know is the dimensions of the data set, check out the shape attribute with penguins.shape. This tells you there are 344 rows and seven columns.
>
> **[1:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/viewing-and-inspecting-data-with-pandas?u=76281980&t=96)** Next, you can derive summary or descriptive [[Statistics]] with the describe method. Type and run penguins.describe() As a result, you'll see measures like the mean, standard deviation, and quartiles of each column. Perhaps you notice that not every column of penguins is represented here. The categorical variables like species and island are excluded because a lot of these summary statistics are only relevant to quantitative variables. If you still want to include them, however, you can run penguins.describe(include = 'all')
>
> **[2:18](https://www.linkedin.com/learning/using-python-with-excel-22676328/viewing-and-inspecting-data-with-pandas?u=76281980&t=138)** You'll notice a lot of the results are missing or NaNs because, again, they are just not relevant measurements. If you're coming from [[Microsoft Excel|Excel]], it can take some getting used to exploring your data via methods and functions rather than simply through scrolling it. But the advantage of exploring your data this way is that it scales to data sets that could get too large and complex for Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Statistics]] (2), [[Microsoft Excel|Excel]] (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Tools:** anaconda (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** you'll need (1)

#### [Manipulating data with pandas](https://www.linkedin.com/learning/using-python-with-excel-22676328/manipulating-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/manipulating-data-with-pandas?u=76281980&t=0)** As you manage DataFrames of growing complexity, you'll need additional methods to organize, compare, and sort your data. In this lesson, you will learn some basic row and column operations using [[Pandas (Software)|pandas]]. Open the demo file for this lesson, 01_05_demo. This demo will be using the tips sample data set from Seaborn. Now think of all the tasks you perform to analyze data in [[Microsoft Excel|Excel]]. You might add or remove columns or maybe sort and filter the results, or probably both and then some more. Pandas makes these types of operations a breeze. For example, this dataset shows the tip and total bill for each transaction. But what about the tip percentage? To create this new column, type tips and then in square brackets and quotes, tip_pct. This is the notation to refer to an individual column in pandas. Then, = tips['tip'] divided by tips['total_bill'].
>
> **[1:11](https://www.linkedin.com/learning/using-python-with-excel-22676328/manipulating-data-with-pandas?u=76281980&t=71)** I'm going to print out the first few rows of tips again with head, and that column is there, but it's a little messy. It's rounded out to a lot of percentage points. So I'm going to clean this up by reassigning tip_pct and then set it equal to tips[tip_pct].round(2)
>
> **[1:35](https://www.linkedin.com/learning/using-python-with-excel-22676328/manipulating-data-with-pandas?u=76281980&t=95)** Reprint, and that looks much better. But maybe you've decided, you know what, I don't really need this percentage column after all, and just want to drop it. Fair enough, the command to do so is tips.drop(' tip_pct', axis = 'columns', inplace = True). This time I'm going to run tips.columns just to get a list of the columns in this DataFrame and tip_pct is no longer there. So those are a couple of basic steps for working with columns. Now onto rows. Perhaps you are doing an analysis of the dinner shift of this restaurant so you only want the transactions from this time of day. Just like in Excel, there are typically many ways to do the same thing in pandas. For sorting rows, I like the query method and I will set time = dinner. I'm going to run the unique method on the time column and confirm that the only category left in this column is dinner. Finally, I want to find the ten biggest transactions from this shift. First step here will be to sort the data. I will create a new DataFrame called dinner_sorted, then dinner.sort_values (by = 'total_bill', ascending = False).
>
> **[3:12](https://www.linkedin.com/learning/using-python-with-excel-22676328/manipulating-data-with-pandas?u=76281980&t=192)** By default, pandas sorts ascending, but the goal is descending. So I will set that parameter to false. Now, if I use the head method and specify I want ten rows, I'll get the ten biggest transactions in this DataFrame. There is much more you can do to manipulate and analyze your data in pandas, and I'd suggest doing as much of your analysis in this package as you can before moving the work out to excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Microsoft Excel|Excel]] (3)
> **Code Identifiers:** tip_pct (5), total_bill (2), dinner_sorted (1), sort_values (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** you'll need (1)

#### [Working with dates and times in pandas](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=0)** The name [[Pandas (Software)|pandas]] isn't just for cute animals. This library is named after working with panel data or a type of time series data. After this lesson, you'll be able to work with dates and times using pandas. Open the demo file for this lesson, 01_06_demo. This demonstration will use the seattle weather sample data set from the vega data sets package imported as seattle. If you do not have vega data sets installed, remove the hash sign and run the first cell. You'll see that this data consists of daily weather measurements, making it time series data. If you've ever worked with dates in [[Microsoft Excel|Excel]], you've probably gotten pretty frustrated. I'm happy to tell you that pandas is much better with dates and times. To give you an example, I'm going to create a date object and set it to pd.to_datetime('8th sep, 2019 11:15 AM').
>
> **[1:09](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=69)** Now, this is a pretty oddly structured date, but print it and you'll see pandas parsed it perfectly. Not only that but print out things like day.hour and day.minute, and you'll see it's very easy to extract individual elements from this timestamp. So this is looking pretty promising, right? Time to try similar things with the seattle dataset. First thing to do is to confirm that the date column is indeed formatted as a datetime object. Run seattle.dtypes for this and that looks good. There are a number of things you could do with this column. Maybe you want a column that just prints what month of the year each day falls in. There is a whole family of dt accessors in pandas that makes these conversions simple. So create seattle['month_name']
>
> **[2:01](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=121)** Then set it equal to seattle['date'].dt.month_name() Print the first few rows and you'll see they are all
>
> **[2:22](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=142)** set to January. Be sure to check the documentation for more possibilities with dt. Maybe your goal is to figure out when this data set was last updated. In this case, try seattle['date'].max() And you'll see the resulting timestamp indicates this data goes
>
> **[2:49](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=169)** through the end of 2015. Perhaps you're really interested not only in the last day, but the last month this data was collected. Back to dt, try seattle['date'].dt.to_period('M').max()
>
> **[3:11](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=191)** And the results indicate the last period is December of 2015 and
>
> **[3:31](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=211)** it's reported as a month. Finally, perhaps you want to summarize this data at a weekly rather than daily level. This practice is known as resampling. The first step is to set the index of the data frame to date, which can be done with seattle.set_index(['date'], inplace = True). For example, I want to find the total rainfall by month.
>
> **[4:07](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=247)** The code here will be seattle['precipitation'].resample('W').sum()
>
> **[4:22](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=262)** W of course stands for week and you can check the documentation
>
> **[4:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-dates-and-times-in-pandas?u=76281980&t=276)** for all the different time periods to resample by. Excel isn't the best at working with dates, so when you're considering what to automate with [[Python (Programming Language)|Python]], keep the datetime features of pandas in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Microsoft Excel|Excel]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** month_name (2), to_datetime (1), to_period (1), set_index (1)
> **Definitions:** is a  (2), known as (1), stands for (1)
> **CLI Commands:** find (1), python (1)
> **Documentation:** the documentation (2)
> **Ports:** :15 (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** open the (1)


### 2. openpyxl

[↑ Back to Table of Contents](#table-of-contents)

#### [Using openpyxl with Workbooks](https://www.linkedin.com/learning/using-python-with-excel-22676328/using-openpyxl-with-workbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/using-openpyxl-with-workbooks?u=76281980&t=0)** Several packages exist for working with [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] together, but openpyxl is a great all-around choice because of its rich features for both reading from and writing to workbooks. Ready to see for yourself? Time to jump into Jupyter and get started with an introduction to openpyxl. Open the demo file for this lesson, 02_01_demo. You should also have a workbook called regions.xlsx available in the exercise files. First, I'll import the relevant openpyxl modules for this lesson, workbook.workbook which will be used to create workbooks and load_workbook, which you guessed it, will load them. I'm going to create an Excel workbook from scratch via openpyxl, which again can be done with the workbook function. And I'll name this object wb so I can easily refer to it later. Now, creating a workbook directly from Python is pretty cool, but that workbook is pretty useless without a worksheet to put data into. So my next step is to create a worksheet object ws = wb.active or the active sheet of the current workbook. Now that I've defined this object, I can use it to do things like give the worksheet a specific name, which can be done by setting ws.title to 'MySheet'. Just like Excel, openpyxl can handle multiple worksheets. I'm going to create a second worksheet ws with the create_sheet function, naming this worksheet 'Another', and then this zero at the end of the function is going to order this worksheet at position zero in the workbook or the first sheet.
>
> **[1:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/using-openpyxl-with-workbooks?u=76281980&t=96)** You can confirm that this workbook has two worksheets with wb.sheet names and there you see 'Another' and 'MySheet' in the proper order. Last thing to do is save the results back to Excel with wb.save and I'll call the file 'hello-openpyxl.xlsx'. Open it up in Excel and you'll see the two worksheets properly named and in the proper order. Nice work. Now, openpyxl doesn't just work with brand-new workbooks, it can also modify existing workbooks. I'm going to do that with the regions.xlsx workbook, assigning it to wb2 with the load_workbook function. Same as before, I'm going to start by defining the active worksheet of the workbook. This time I'll call it active_sheet. Next, I'm going to do something a little dastardly, which is to write over the existing good data in regions.xlsx with some bad test data by setting cell A1 of the active sheet to zero. You'll learn more about adding data to cells and ranges in future videos. Okay. Go ahead and save your work. In general, I don't like saving directly over my original data source in case I want to go back and edit it, so I'll save as a new name, regions-modified.xlsx. Head over to Excel to open this workbook and it does appear that a zero is written over where it should say region. And you can confirm this with the original file. By manipulating Excel's underlying object model of workbooks, worksheets and more, openpyxl can operate on both the data itself and properties of
>
> **[3:10](https://www.linkedin.com/learning/using-python-with-excel-22676328/using-openpyxl-with-workbooks?u=76281980&t=190)** both new and existing files. Some tasks will get more complex, but they really do all come down to defining the right things in Excel, then modifying them properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** load_workbook (2), create_sheet (1), active_sheet (1)
> **CLI Commands:** python (2)
> **Tools:** jupyter (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Selecting cells, rows, and columns](https://www.linkedin.com/learning/using-python-with-excel-22676328/selecting-cells-rows-and-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/selecting-cells-rows-and-columns?u=76281980&t=0)** Just like in biology, cells are the building blocks of life in your [[Microsoft Excel|Excel]] workbook. After watching this video, you'll be able to work with individual cells, then whole rows and columns from openpyxl. Open the demo file for this lesson, 02_02_demo. You should also have a workbook called regions.xlsx available in this folder. To get started, import the workbook and load_workbook functions from openpyxl. Next, use the load_workbook function to read in the regions.xlsx file. I'm going to define the active worksheet as ws. And now that it's an Excel object, I can index it to access individual cells. For example, I can access cell A1 of this worksheet by indexing ws at A1. Print my_cell and you'll see the results give the cell location. But what about its underlying value? That can be found by accessing the value attribute of my_cell. So there's working with individual cells and you'll see some additional techniques in future lessons. But for now, onto working with rows and columns which, like cells, are possible to index. I'm going to start with rows. First, create a variable called cell_range then specify which row to grab with the index position 1 or the first row in the workbook. So now cell_range contains all the cells with data in Row 1. You could extend this out to rows 1 through 3 with ws[1:3].
>
> **[1:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/selecting-cells-rows-and-columns?u=76281980&t=96)** I can do the same with my column data, except this time I will index by column letter. For example, Column C will give you all those cells in the third column. If you prefer to index columns by number, not letter, it's as simple as bringing in the get_column_letter function and indexing the worksheet that way. And, of course, you can index multiple columns just like rows by, for example, printing everything in columns 1 through 3 like in col_range. Okay. Now it's pretty cool that openpyxl can go through your rows and columns printing which contain data, but you probably want to know what that data actually is. There are a number of ways to do this, but I'm going to use a loop to run through a specified range of cells and print the row contents of each. That's going to be the iter_rows function. And I'll say that I want to start at Row 1, Column 1, then go to Row 2, Column 3 and print the value of each cell. Run that and you'll see some of the column headers print out, first, from Row 1 then some data from Row 2. And there you have it. You can now access any point of an Excel workbook with these operations. You've already moved from accessing just one cell to whole rows, columns, and ranges. You'll use this when you work not just with the workbooks data,
>
> **[3:10](https://www.linkedin.com/learning/using-python-with-excel-22676328/selecting-cells-rows-and-columns?u=76281980&t=190)** but with its many properties such as fonts, conditional formats, and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Code Identifiers:** load_workbook (2), my_cell (2), cell_range (2), get_column_letter (1), col_range (1)
> **Analogies:** for example (3), just like (1), such as (1)
> **UI Navigation:** open the (1), go to (1)

#### [Adding workbook formatting](https://www.linkedin.com/learning/using-python-with-excel-22676328/adding-workbook-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/adding-workbook-formatting?u=76281980&t=0)** In the business world, a spreadsheet's numbers are often as only good as their formatting. After watching this video, you'll pick up some techniques to tweak the presentation of your workbook, such as setting column widths, cell formats, and more. Open the demo file for this lesson, 02_03_demo. The first step is to load in the relevant openpyxl submodules. You will see quite a few coming from styles which will be used to format the workbook. Next, of course, it's necessary to define a workbook and worksheet with wb and ws respectively. For now, I'm going to define some individual cells in this worksheet so that I can add some data and then format. First will be cell1 and cell A1, then cell2 and cell B2. Finally, I'll create cell3, but a little differently. This time I'll use the cell function and set this to row 3, column 3, which would be equivalent to C3. With these cells defined, it's easy to add some values to them. Cell1 is 'Hello', cell2 is '0.5', and cell3 is 'World'. Now in everyday life, it's unlikely that you'll be working with just one cell of data at a time, but with a little finesse, these methods can easily scale to entire ranges in worksheets. So you just add a data to different cells in this worksheet based on different cell objects. It's possible to do the same thing to add cell formatting. Now there are a ton of ways to format a spreadsheet. I'll show you some common ones. First, changing the cell font can be done with the font function. So cell1.font get set equal to
>
> **[1:36](https://www.linkedin.com/learning/using-python-with-excel-22676328/adding-workbook-formatting?u=76281980&t=96)** font(name = 'Georgia', size = 16, color = 'CF3338')
>
> **[1:57](https://www.linkedin.com/learning/using-python-with-excel-22676328/adding-workbook-formatting?u=76281980&t=117)** This will resize, recolor, and change the cell's font. Next, I want to format that 0.5 in cell2 as a percentage. That means setting cell2.number_format to numbers.FORMAT_PERCENTAGE. Finally, I'm going to change the alignment of cell3 with the alignment function and set vertical = bottom. Okay. I've said it before and I'll say it again, there are a ton of ways to format in [[Microsoft Excel|Excel]], so be sure to dig around the openpyxl documentation and the Internet, because if you're asking, can I do X formatting technique with openpyxl, the answer is probably yes. One more task here, and that is resizing rows and columns in the worksheet. This time, rather than changing an individual cell, the operation applies to the entire row or column. So first set ws.column_dimensions, then column A, then the width to 20. Do the same to the rows. I'll pick row 3, and set that height to 70. I'm going to save the results to 'formatting.xlsx' and take a look. Okay. I see my sheet, I see red font, I see a formatted percentage, and I see a bottom-aligned world. Nice work. As an Excel user, you can often feel as much a graphic designer as a data analyst. With openpyxl, you can fully automate all of
>
> **[3:31](https://www.linkedin.com/learning/using-python-with-excel-22676328/adding-workbook-formatting?u=76281980&t=211)** that tedious formatting. Be sure to check out the openpyxl documentation to review the possibilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Code Identifiers:** number_format (1), column_dimensions (1)
> **Env Vars:** cf3338 (1), format_percentage (1)
> **Versions:** 0.5 (2)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)

#### [Creating names, ranges, and tables](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-names-ranges-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-names-ranges-and-tables?u=76281980&t=0)** [[Python (Programming Language)|Python]] code is so much easier to work with when objects are given clean, sensible names. And [[Microsoft Excel|Excel]] is no different. After watching this video, you'll be able to create named ranges and tables in Excel using openpyxl. Open the demo file for this lesson, 02_04_demo. Now this notebook has been loaded with quite a bit of code, lots of it from openpyxl, and I've also pulled a sample of rows from the penguins practice data set in Seaborn to use here. First thing I want to do is get a list of all the unique values in the species column of penguins and export that to an Excel range. Now this is easily done if your Python source data is stored as a list. So my code here will be penguins['species'].unique()
>
> **[0:54](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-names-ranges-and-tables?u=76281980&t=54)** This part will give me the unique values in species. Then .tolist(). This part will convert the results from a numpy array to a list. Time to bring this data over to Excel. I will create a worksheet called ws1 and add the list with ws1.append(species). Now I'm going to define a range using openpyxl with the following code. So basically what this just did is specify what the new range should be called in Excel and what cell should constitute that range. Now that the range has been defined in openpyxl, I need to actually add it to this workbook with wb.defined_names.append(new_range). Great. Now, named ranges can be very useful, especially if you are working with one-dimensional data like lists, but what about a data set that has rows and columns, those rows have headers and so forth? In cases like that, you should be storing your data as an Excel table, and fortunately it's possible to create those in openpyxl as well. First, I'm going to create a new worksheet, 'penguins'. Next, I need to get the penguins DataFrame into this worksheet, and this can be done with a loop and the dataframe_to_rows function.
>
> **[2:27](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-names-ranges-and-tables?u=76281980&t=147)** Okay. So the DataFrame has been added to the penguins worksheet, but now, just like with the range, I need to define a table object and then state which range of cells constitute that object. Unlike ranges, tables come with their own style options. So the first thing I'm going to do is take care of that with style = TableStyleInfo( name = 'TableStyleMedium9', showRowStripes = True).
>
> **[3:03](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-names-ranges-and-tables?u=76281980&t=183)** There are a ton of ways to style a table, so feel free to experiment and check the documentation for more. Next, it's time to define the table with the table function. Here, I'm going to define what this table should be called in Excel. I'll call it "penguins". And I also need to specify the range that it covers, which I can do here with some clever openpyxl references to extend to as many active rows and columns as are found in this worksheet. The table has now been defined, so I'm going to apply the preferred style to it, then, last but not least, go ahead and add this table to the penguins worksheet with ws2.add_table(table) and close this workbook as ranges-tables.xlsx. Take a deep breath, open the workbook in Excel, then head to formulas in the home ribbon and the name manager. You'll see the table and range are now ready to use. If you're not using ranges and tables in Excel already, I hope being able to create them quickly from openpyxl gives you some incentive. This sets the foundation for even more ways to combine [[Pandas (Software)|pandas]] with openpyxl to create rich analyses and reports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (9), [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** defined_names (1), new_range (1), dataframe_to_rows (1), showrowstripes (1), add_table (1)
> **CLI Commands:** python (2)
> **UI Navigation:** open the (2)
> **Documentation:** the documentation (1)
> **Analogies:** just like (1)


### 3. Working with Reports

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing multiple sheets](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-multiple-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-multiple-sheets?u=76281980&t=0)** [[Pandas (Software)|Pandas]] makes it quite easy to create new columns in your DataFrame, but this can be done in openpyxl as well. You just need to access the data differently. In this video, you'll learn how to load multiple [[Microsoft Excel|Excel]] worksheets into a DataFrame as well as how to export and calculate on this data using openpyxl alone. Open the demo file for this lesson, 03_01_demo. You should also have two workbooks, shift.xlsx and shift_3.xlsx available in your download folder. I've loaded in the relevant pandas and openpyxl modules already, but I still need to load in some DataFrames. So create df_1 as the sheet worksheet of shifts.xlsx, df_2 as the sheet1 worksheet of shifts.xlsx, then df_3 will be what's in shift_3.xlsx. These are records from three different shifts. My goal is to combine the data from all three of these shifts into one DataFrame. I can do that with the concat function. I'll parse in df_1, df_2, and df_3 as a list and include sort = False so the results don't get sorted once appending. If I print the df_all DataFrame, I can see results for shift 1 and shift 3, so this looks promising. But one more thing that I'm going to do just to ensure that
>
> **[1:35](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-multiple-sheets?u=76281980&t=95)** everything went to plan is to check that the number of rows in df_all, which can be found with the shape[0] attribute, is equal to the number of rows in df _1, df_2, and df_3. And the result is true. So that was a successful append, nice job. Go ahead and save df_all to an Excel workbook called all_shifts.xlsx. You can get rid of the index here as well by setting index to false. At this point, I'm going to load the data back to Excel and name the resulting workbook object to wb and worksheet to ws. Say you want to use openpyxl to add a new column in this worksheet called total, indicating the amount of money each sales representative has made. I'm going to create a reference to cell G1, which is the header for that total column. I'll also set the font to bold and give it a value of total. Now it's time to multiply the values in columns E and F. First thing I'm going to do is create two variables to refer to each column. Next, I'll create a for loop to iterate through the rows and multiply. I'll set the range from 2-300. This will skip the header row in the data. Next, grab the results_cell. That will be each cell in column G as the loop iterates.
>
> **[3:11](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-multiple-sheets?u=76281980&t=191)** In a similar manner, grab the cell values in column E and F as e_value
>
> **[3:20](https://www.linkedin.com/learning/using-python-with-excel-22676328/managing-multiple-sheets?u=76281980&t=200)** and f_value, respectively. Now that the values in columns E and F are accessed in the loop, the final step is to multiply them together to populate the results cell. Very nice. It's time to save the workbook as total.xlsx. Go ahead and open it in Excel to enjoy the view. You'll see that a new total column was created and filled out with the desired values. In general, it's more efficient to create new rows and columns of data in pandas than openpyxl. But every so often, openpyxl is the convenient candidate and can perform many of the same tasks, if with a little more elbow grease.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (3)
> **Code Identifiers:** df_all (3), all_shifts (1), results_cell (1), e_value (1), f_value (1)
> **UI Navigation:** open the (1)

#### [Working with large worksheets](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=0)** Openpyxl is slow in working with large workbooks because it carries so many more features compared to the relatively fewer in [[Pandas (Software)|pandas]]. After watching this video, you'll be able to tame a large data set with pandas, then write the results to a template using openpyxl. Open the demo file for this lesson, 03_02_demo. You should also have files called template.xlsx, and crime.csv available in your download folder. I've loaded in the relevant pandas and openpyxl modules already. Next, I'll load template.xlsx to wb then set ws to the active worksheet. Aren't you importing crime csv? This is a relatively [[Big Data]] set with about 280,000 rows. My goal is to use pandas to parse and trim this data so it fits into the report template. So I'll create an object df then use read_csv to import it. I'll need to specify a few more things to make this go smoothly. First, I'll set the encoding so pandas knows how to read this file. Next, I'm going to explicitly define the data types of each column. This is a lot of typing and I have already prepared it here. When handling large files, data type casting is almost always necessary to conserve memory. When initially reading the file, pandas tries to guess what type of object each column should be based on its values. By explicitly casting each column's data type, pandas doesn't have to do that, so memory is saved. In this case, I've read in every column as a string. I'm particularly interested in exploring these
>
> **[1:34](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=94)** data sets, counterfeiting crimes, so I'm going to create a new DataFrame, df1 that consists only of this offense code group using df.query. Next, I can find the total number of crimes overall and the total number of counterfeiting crimes with the len function. From here, I can create an object perc_crimes which measures what percent of crimes are counterfeiting. I'll round this to two decimals as well. Back in the template, there were slots to place these total and percentage figures, so I'm going to fill those now into cells 08, P8, and Q8 respectively.
>
> **[2:33](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=153)** The [[Representational State Transfer (REST)|rest]] of the report has to do with the number of counterfeiting crimes per district for each year. I'm going to derive this table in pandas. To do so, I'll create a count column, setting each row's value to 1 so I can easily count up the number of rows using this column. Now I'm going to create a new DataFrame, df2, grouping df1 by district, then year, and count up the number of records found in each group using the count column just created. Print out df2, and it's not exactly what I had in mind. I want the districts to be displayed along the columns here and not the rows. Fortunately, this is easily done by chaining unstack to the end of the groupby, and I'm going to specify level = 0 to indicate it's the district category I want to unpivot or unstack the data by.
>
> **[3:31](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=211)** Now that the data is in the right shape,
>
> **[3:40](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=220)** it's time to send it out to [[Microsoft Excel|Excel]] using the dataframe_to_rows function. This data should start at row 8 in the template, so I'm going to adjust for that in the for loop.
>
> **[4:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=240)** The last step is to save the workbook.
>
> **[4:10](https://www.linkedin.com/learning/using-python-with-excel-22676328/working-with-large-worksheets?u=76281980&t=250)** I'm ready to take a look. And there it is, the start of a nicely formatted Excel report. One question I get a lot from Excel users is how big of a data set can I work with in [[Python (Programming Language)|Python]]? There's really no one answer here. It all depends on how much memory your computer can afford. But by using practices covered in this video, such as using typecasting and filtering out unnecessary rows, you can easily work with hundreds of thousands of rows or more, consolidate your results, and send them over to Excel without ever opening a workbook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Microsoft Excel|Excel]] (4), [[Big Data]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Exercise Files:** template (6)
> **CLI Commands:** make (1), find (1), python (1)
> **Code Identifiers:** read_csv (1), perc_crimes (1), dataframe_to_rows (1)
> **Definitions:** is a  (2)
> **File Paths:** crime.csv (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)

#### [Conditional formatting](https://www.linkedin.com/learning/using-python-with-excel-22676328/conditional-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/conditional-formatting?u=76281980&t=0)** Did you know that humans process visual data thousands of times faster than text? Adding conditional formatting to your workbook really aids in comprehension. And the best part is, you can build conditional workbooks in [[Microsoft Excel|Excel]] right from [[Python (Programming Language)|Python]]. Open the demo file for this lesson, 03_03_demo. This time you will have the tips data set loaded in from Seaborn. First thing to print here is tips.style. At first, this just looks like a regular old DataFrame that you've seen throughout the course. It turns out that it's actually possible to add custom styles such as conditional formatting to a DataFrame, and those results will be visible when you print this style attribute. For example, I want to highlight all of the cells where tip is greater than three as green. To do this, I'll create a function, highlight_cells(), then map that function to the desired part of the DataFrame, which is the tip column. Here it goes. def highlight_cells(val): then set color to green if the value is greater than three, otherwise, it's blank. The function will then return the given background color to the specified cells, either green or blank. Now that the function is defined, apply it to tips with tips.style.applymap(). The function to apply, of course, is to highlight the cells. Then the subset of the DataFrame to apply this can be accessed by pd.IndexSlice[:, ['tip']])
>
> **[1:46](https://www.linkedin.com/learning/using-python-with-excel-22676328/conditional-formatting?u=76281980&t=106)** Now this looks pretty good, but I think what would really make this formatting useful is if the entire row that meets the criteria were highlighted. So I'm going to write a new, slightly more complex function to do that. I'll call this one highlight_rows as well. First thing I'm going to define is an object value, which will come from row.loc['tip']. So basically, you'll see this function will loop down every row of the tip column and then apply conditional formatting to the entire row. Now it's time to add the conditional logic. If the value is greater than 5, use this green hex code. If it's greater than 3, use this yellow hex code, otherwise, set it to the hex code for white.
>
> **[2:48](https://www.linkedin.com/learning/using-python-with-excel-22676328/conditional-formatting?u=76281980&t=168)** Now that those rules are spelled out, I can tell the function what to return, which will be highlight_rows to apply these rules as a background color to each row in the DataFrame. Finally, I can apply these rules to the tips DataFrame. Print the results and you'll indeed see that this time the entire row has been highlighted for each applicable observation. Okay. The last step is to actually export this style DataFrame to Excel. Repeat the tips.style.apply code from before, but this time add to_excel. I'll call this file style_tips.xlsx, then specify which engine to use to write the DataFrame. This should be openpyxl. I don't want an index in this DataFrame, so I'll set it to false. Open the style_tips workbook and you'll see the conditional formatting has indeed been transferred over to Excel. Excel's native conditional formatting menu is great for small ad hoc processes, but for scalable reporting, nothing beats the coded reproducibility of a Python script. Now you've got the skills to make your work even faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** highlight_cells (2), highlight_rows (2), style_tips (2), to_excel (1)
> **CLI Commands:** python (2), make (2)
> **UI Navigation:** open the (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Creating Excel plots in Python](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=0)** Data visualization is a crucial way to make your reports and analyses more interpretable. After watching this video, you'll be able to create dynamic [[Microsoft Excel|Excel]] charts using openpyxl. Open the demo file for this lesson, 03_04_demo. You should also have the file nyc-pop.xlsx available in the course downloads. This is a data set consisting of the population for each borough of New York City, and the goal is to send this data out to Excel along with a matching bar chart. The first step I'm going to take, which is optional but a nice touch, is to sort this data from high to low. This will make the bar chart just a little easier to read. The code here is nyc.sort_values(by = 'pop', ascending = False, inplace = True). Next, I need to send this DataFrame out to Excel via openpyxl, so I'm going to create this workbook, then the worksheet, then finally run dataframe_to_rows. Okay. Now the nyc data is in Excel and I'm going to need to refer to this data when creating the bar chart, specifically which rows and columns of the population and borough data is in. I'm going to locate the column number of the pop column with pop_col = nyc.columns.get_loc('pop') + 1.
>
> **[1:45](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=105)** I'm adding 1 here because [[Python (Programming Language)|Python]] uses zero-based indexing and Excel does not. Same thing with the location of the borough column in my data, borough_col = nyc.columns.get_loc('borough') + 1.
>
> **[2:09](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=129)** One more thing, I also want to know how many rows this data extends out to which can be found with max_row = nyc.shape[0] + 1.
>
> **[2:24](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=144)** Okay. So I have the basic coordinates of the DataFrame. Now it's time to plug these into a bar chart. So set chart1 to bar chart. Now I need to specify where the data is for this chart. That's going to be the data in the population column, and I can use the coordinates I created earlier to find it. Reference(ws, min_col = pop_col, min_row = 1, max_row = max_row). Same thing to get the categories for this data or the borough names, Reference(ws, min_col = borough_col,
>
> **[3:19](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=199)** min_row = 2, max_row = max_row).
>
> **[3:35](https://www.linkedin.com/learning/using-python-with-excel-22676328/creating-excel-plots-in-python?u=76281980&t=215)** Okay. Now it's time to add the data to the chart with add_data, then do the same for the categories with set_categories. I'm going to give this chart a title, 'NYC population by borough'. Then add this chart to cell A10 of the worksheet. Finally, it's time to save the workbook and check it out. Looks like a pretty typical Excel chart. There's no way of knowing it was created from Python, although you have the script to prove it and redo it. Excel-Plus can be notoriously difficult to customize and redo through endless pointing, clicking, and menus. Openpyxl lets you script the entire process, making the steps much easier to audit and reproduce.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** max_row (5), pop_col (2), get_loc (2), borough_col (2), min_col (2)
> **CLI Commands:** make (2), python (2), find (1)
> **Env Vars:** nyc (1), a10 (1)
> **Definitions:** is a  (2)
> **UI Navigation:** open the (1)

#### [Exporting Python plots to Excel](https://www.linkedin.com/learning/using-python-with-excel-22676328/exporting-python-plots-to-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/exporting-python-plots-to-excel?u=76281980&t=0)** Some data visualizations are difficult or perhaps impossible to create in [[Microsoft Excel|Excel]]. In these cases, [[Python (Programming Language)|Python]] plots offer an alternative. After watching this video, you'll be able to export Python plots directly to Excel. Open the demo file for this lesson, 03_05_demo. This time you have the mpg data set loaded in from Seaborn. I have also loaded in matplotlib.pyplot, which should already be available to you from Anaconda and created a blank workbook. Excel's visualization features are solid but a little outdated. For example, really the only two options to visualize a variable's distribution are the histogram and the box plot. The seaborn package includes quite a few modern alternatives worth checking out. First, the violin plot. I'm going to create a worksheet called 'violin'. Next, I'll run the violin plot function, set x to 'origin', y to 'mpg', and data to 'mpg'. Run this plot and you'll see it's part histogram, part box plot. You can see the overall distribution of the variable from the violin-like outline with the median and quartiles displayed in the inner bar. There is an intermediate step to give this chart to Excel, which is saving the figure to disk, and you can do that with plt.savefig. I'm going to call this plot violin.jpg. The next steps to actually load into Excel involve locating this file on your computer, then telling openpyxl where to insert that file into the workbook. So locate this image as
>
> **[1:38](https://www.linkedin.com/learning/using-python-with-excel-22676328/exporting-python-plots-to-excel?u=76281980&t=98)** img = openpyxl.drawing.image.Image('violin.jpg').
>
> **[1:48](https://www.linkedin.com/learning/using-python-with-excel-22676328/exporting-python-plots-to-excel?u=76281980&t=108)** Then specify where to place this image with img.anchor = 'A1' Finally, call ws1.add_image(img) and the violin plot will have been added to the workbook. Before previewing this plot in Excel, I want to repeat these steps to show you two more simple plot alternatives. Next is called a strip plot, and I'm going to repeat all the steps here except replace violin with strip. Print out this strip plot and you'll see it's like a scatter plot in that each observation is represented as a single dot, but it's only measuring these values along the Y-axis, the values along the X-axis are just randomly jittered. So this visualization is great if you really want to see the individual values for each observation in your distribution. One last plot type, and this will be called a swarm plot. Again, I'll switch everything from strip to swarm and you'll see this one is like a hybrid of the violin plot and the strip plot. Each observation is plotted separately, but in a way where you are able to make out the overall distribution of the variable as well. There's a lot more that could be said about these plots, but this isn't a data visualization course. So for now, go ahead and save this workbook as 'python-viz.xlsx' Scroll through each worksheet and you'll see the resulting charts. And again, these charts would have been difficult,
>
> **[3:21](https://www.linkedin.com/learning/using-python-with-excel-22676328/exporting-python-plots-to-excel?u=76281980&t=201)** if not impossible, to build in Excel alone. The downside with using Python plots is that these are just static images, so if I try to double click on them, for example, to view the data source, it's not possible. So should you plot with Excel or Python? There are so many pros and cons to each method that it's hard to say, but now you know how to do both and can make a decision given your unique circumstances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), make (2)
> **Analogies:** for example (2), it's like (1)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is an  (1), is called (1)
> **Code Identifiers:** add_image (1)
> **Tools:** anaconda (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/using-python-with-excel-22676328/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-python-with-excel-22676328/next-steps?u=76281980&t=0)** Congratulations on reaching the end. Now that you've completed this course on using [[Python (Programming Language)|Python]] with [[Microsoft Excel|Excel]], I hope you feel ready to build your next workbook with ease. You'll be operating on data faster, building more impressive visualizations and automating tedious reports in no time, all thanks to Python. And if your coworkers ask how you produce such quick and accurate workbooks, just tell them there's a snake in my spreadsheet. Before we finish, I'd like to share a few resources with you to help continue on your Python-powered Excel journey. If you'd like a full masterclass about the topics covered in this course and more, check out Felix Zumstein's Python for Excel. Or if you'd like to compliment your Python and Excel skills with more advanced analytics, check out my book, Advancing into Analytics. While you're at my website, be sure to subscribe and I'll share lots of other resources, events, and even memes on data analytics. And feel free to connect with me on [[LinkedIn]] too. If you apply the lessons from this course to your own Excel reports and analyses, be sure to let me know how it goes. May your Excel spreadsheets fly like the wind through the power of Python. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Excel|Excel]] (6), [[LinkedIn]] (1)
> **CLI Commands:** python (6)


## Instructor

- [[Madecraft]]
- [[George Mount]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Microsoft Excel

## Path Context

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[Excel- Working Together with Power Query and Power Pivot]] | **4 of 7** | [[From Excel to SQL]] →

## Appears In

- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Analysis Using Python in Excel Copilot]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Working with pandas DataFrames]] — Python (Programming Language), Microsoft Excel

---

[↑ Back to top](#)