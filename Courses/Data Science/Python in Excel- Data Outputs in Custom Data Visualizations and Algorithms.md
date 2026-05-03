---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms
url: "https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms"
duration_minutes: 122
duration: 2h 2m
level: Advanced
updated: 6/21/2024
learners: 56243
skills:
  - Python (Programming Language)
  - Microsoft Excel
  - Data Visualization
exercise_files: true
github: "https://github.com/LinkedInLearning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms-4538083/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHYRfBFhnycFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718310054393?e=2147483647&amp;v=beta&amp;t=HMte7c-tAkAHVFCQLDz6JNJJ99G44pLIOUv7lg7edbk"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python in Excel Skills]]'
prev_courses:
  - '[[Data Cleaning and Manipulating with Python in Excel]]'
next_courses:
  - '[[Advanced Python in Excel- Data Analysis and Visualization]]'
path_nav: '[{"path":"Advance Your Python in Excel Skills","position":4,"total":7,"prev":"Data Cleaning and Manipulating with Python in Excel","next":"Advanced Python in Excel- Data Analysis and Visualization"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/microsoft-excel
  - skill/data-visualization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20in%20Excel-%20Data%20Outputs%20in%20Custom%20Data%20Visualizations%20and%20Algorithms.md)

![Python in Excel: Data Outputs in Custom Data Visualizations and Algorithms](https://media.licdn.com/dms/image/v2/D560DAQHYRfBFhnycFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718310054393?e=2147483647&amp;v=beta&amp;t=HMte7c-tAkAHVFCQLDz6JNJJ99G44pLIOUv7lg7edbk)

# Python in Excel: Data Outputs in Custom Data Visualizations and Algorithms

> Excel is a powerful tool for data and business analysis, and Python is one of the world’s most popular and dynamic programming languages. Python in Excel works as a sandbox environment. It enables developers and business users to test small parts of code by creating visuals and running algorithms on existing data. In this course, data analytics and business analysis expert Helen Wall focuses on ho

> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms) | 2h 2m | Advanced | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introducing the power of Python in Excel](#introducing-the-power-of-python-in-excel)
  - [What you should know](#what-you-should-know)
  - [Enabling Python in Excel](#enabling-python-in-excel)
- [**1. Introducing Excel and Python**](#1-introducing-excel-and-python) (11 videos)
  - [Breaking down Excel and Python processes](#breaking-down-excel-and-python-processes)
  - [Leveraging Power Query](#leveraging-power-query)
  - [Using the PY Excel function](#using-the-py-excel-function)
  - [Using the XL Excel function and Python variables](#using-the-xl-excel-function-and-python-variables)
  - [Determining calculation order](#determining-calculation-order)
  - [Importing Python libraries into Excel](#importing-python-libraries-into-excel)
  - [Managing errors](#managing-errors)
  - [Working with Python objects](#working-with-python-objects)
  - [Transforming DataFrame objects](#transforming-dataframe-objects)
  - [Challenge: Creating table objects in Excel](#challenge-creating-table-objects-in-excel)
  - [Solution: Creating table objects in Excel](#solution-creating-table-objects-in-excel)
- [**2. Applying Algorithms**](#2-applying-algorithms) (9 videos)
  - [Introducing AI and machine learning algorithms](#introducing-ai-and-machine-learning-algorithms)
  - [Determining trends for linear regression with Excel functions](#determining-trends-for-linear-regression-with-excel-functions)
  - [Leveraging Excel Solver for logistic regression](#leveraging-excel-solver-for-logistic-regression)
  - [Determining trends for logistic regression with Python code](#determining-trends-for-logistic-regression-with-python-code)
  - [Grouping data with hierarchical clustering](#grouping-data-with-hierarchical-clustering)
  - [Grouping data with the K-Means algorithm](#grouping-data-with-the-k-means-algorithm)
  - [Determining anomalies with anomaly detection algorithms](#determining-anomalies-with-anomaly-detection-algorithms)
  - [Challenge: Running algorithms with Python in Excel](#challenge-running-algorithms-with-python-in-excel)
  - [Solution: Running algorithms with Python in Excel](#solution-running-algorithms-with-python-in-excel)
- [**3. Creating Visuals**](#3-creating-visuals) (9 videos)
  - [Visualizing data](#visualizing-data)
  - [Leveraging Excel line charts](#leveraging-excel-line-charts)
  - [Leveraging Excel scatter plots](#leveraging-excel-scatter-plots)
  - [Configuring Python in Excel with dynamic parameters](#configuring-python-in-excel-with-dynamic-parameters)
  - [Creating Python visuals](#creating-python-visuals)
  - [Visualizing hierarchical clustering with dendrograms](#visualizing-hierarchical-clustering-with-dendrograms)
  - [Breaking down time series models into components](#breaking-down-time-series-models-into-components)
  - [Challenge: Comparing time series components to anomalies](#challenge-comparing-time-series-components-to-anomalies)
  - [Solution: Comparing time series components to anomalies](#solution-comparing-time-series-components-to-anomalies)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with Python in Excel](#continuing-on-with-python-in-excel)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the power of Python in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/introducing-the-power-of-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/introducing-the-power-of-python-in-excel?u=76281980&t=0)** - [[Microsoft Excel|Excel]] is a super powerful tool, but it can't do everything. You've probably seen some of the cool things [[Python (Programming Language)|Python]] can do, like creating visuals, running prediction models, and fixing data, but maybe it's a little intimidating or you don't want to open up the command line. The good news is that you don't have to be a full Python developer to use Python. You can run Python right in your existing Excel workbooks. I'm Helen Wall, I'm a data enthusiast who loves helping people learn more about Python and Excel. If you're ready to bridge the technical and business worlds, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (5)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - excel (1)

#### [What you should know](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should be proficient at [[Microsoft Excel|Excel]], including [[Microsoft Power Query|Power Query]]. You should also be proficient with the [[Python (Programming Language)|Python]] programming language, especially its [[Data Science]] libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Microsoft Power Query|Power query]] (1), [[Python (Programming Language)|Python]] (1), [[Data Science]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Enabling Python in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/enabling-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/enabling-python-in-excel?u=76281980&t=0)** - [Instructor] As of filming for this course, in May, 2024, the [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] feature is currently in development mode, and it's not generally available. This means it's not automatically available in Excel even if you have the most recent version of the application. Instead, you need to do a few things to enable it. First, you need to sign up for the [[Microsoft]] Beta Channel from the 365 account that you're using Excel with. Second, you need to use a [[Windows]] computer and the desktop version of Excel. It currently doesn't work on either Mac or Excel online. If you don't have access to either, I've used it on my own Mac via virtual machine that runs Windows as an alternative approach. Third, you need to enable it directly within your Excel application. Once we've performed the previous steps, Excel will ask us whether we want to preview the functionality within Excel. Once we confirm this, we can start writing Python expressions directly within Excel cells when we start formulas with the Excel function, py. Once we hit Tab, this opens the code to write Python directly within Excel. From here we can start incorporating the capabilities of Python directly in our Excel formulas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (12), [[Python (Programming Language)|Python]] (4), [[Windows]] (2), [[Microsoft]] (1)
> **CLI Commands:** python (4)
> **Speakers:** - [instructor] (1)


### 1. Introducing Excel and Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Breaking down Excel and Python processes](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-excel-and-python-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-excel-and-python-processes?u=76281980&t=0)** - The idea behind [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] is that Python extends the capabilities of Excel rather than replacing it. Just because we can use Python, that doesn't necessarily mean we should. Before we dive into Excel and Python, let's talk about how the modeling process and data in general works on a high-level tool agnostic view. This process involves extracting data, cleaning, organizing, analyzing, modeling, and visualizing it. Excel can perform a lot of these steps, Python can also perform a lot of these steps. However, there are some parts of the process that Python is much better suited for, because as a [[Data Science]] programming language, it's built for working with data. It's much more efficient and scalable for running these models like anomaly detection and clustering. We can also use Python to create visuals for time series models and dendrograms for hierarchical clustering. The idea behind Excel and Python is to focus on the business users who might not be that familiar with Python. The goal for this course is to show how this functionality can bridge the two. Developers can write Python code, and then put it in Excel so that it connects between the Python code and Excel. Business users can adjust inputs or look at the outputs of running Python without having to know a lot of the code themselves. A question that I get all the time is, "Is the cloud secure?" The cloud for running Python in Excel is hosted and built by [[Microsoft]],
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-excel-and-python-processes?u=76281980&t=93)** so the answer is yes as it's supported by [[Microsoft Azure|Azure]]. Now we know a little bit more about both Python and Excel. Let's start talking about how to extract, transform, and load data in [[Microsoft Power Query|Power Query]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (14), [[Microsoft Excel|Excel]] (9), [[Data Science]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** python (14)
> **Speakers:** - the (1)

#### [Leveraging Power Query](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980&t=0)** - [Instructor] To get our data into [[Microsoft Excel|Excel]], we can either start with our data already in the model or connect to external data sources. It's important to emphasize that we cannot connect directly to a database or API within [[Python (Programming Language)|Python]] code in Excel. Instead, we want to leverage the power of [[Microsoft Power Query|Power Query]] to bring our data into the Excel model. Power Query is a built-in part of [[Microsoft Power BI|Power BI]] in Excel that enables us to easily set up ETL frameworks to read the data into our Excel models. It enables us to efficiently replicate and update our queries to create data tables. In Excel, one way we can access Power Query is from the Data ribbon tab. Then we'll choose Launch Power Query Editor from the dropdown menu. I've already set up two data queries in Power Query on the left side, one for the average temperatures by city and the other for the daily temperatures for the Santa Barbara airport. We're not going to get into the granular detail for the actual steps for creating the data tables ultimately loaded into Excel but we'll take a high-level look at them. I manually inputted the data table for the actual temperatures for a few California cities and set the data type for each column, which we can change if we need to. This data source weren't refreshed because it doesn't connect to a dynamic data source. Let's connect to a data source that is dynamic though. The daily temperatures for Santa Barbara use daily weather data from the Santa Barbara airport.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980&t=95)** Because it connects to an outside data source, we'll want to click on the option to edit credentials for it first. There are no access credentials for this data, part of the reason as to why I chose it, so let's stick with the anonymous option for connection. Once we confirm this selection, we see our data updates to use the latest data. In the source step, we can see where I obtained this data from. We can obtain this data from the NOAA zip data on their website. This particular folder contains all the weather stations and within each of the files it contains all the weather data for that station. We can tell which station each of these links pertains to because it contains the NOAA station ID. We can select the weather data to use by right-clicking on the link and choosing to copy the link address. We can also look up other NOAA station IDs to use through other resources on their website, like the CDO Online search options for the daily weather data. We set up this connection through the web connection option, which we can see in the formula bar where it says web.content. It's a zipped CSV file, so we can't read it directly within Power Query but we can set up functions that enable us to do so. We add the binary.decompress function around our web.contents function that references the URL for the Santa Barbara data. Conversely, we also need to add compression.gzip
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980&t=192)** as our second parameter to specify that we're referencing the GZ format in our URL connection. We see there's a section for CSV as an icon in the middle of our query. We don't see any data here though. So instead, when we click on this, it imports it as a CSV. Once we have our data table, we can then change our data types. We filter the rows so they only display Tmax and Tmin for the minimum and maximum temperatures respectively. However, if we look at the temperatures in column four, we see that they're way too high for degrees Fahrenheit and certainly for degrees Celsius. We then add a new column for the temperature. We can divide by 10 to get degrees Celsius. To convert it to degrees Fahrenheit, we then multiply it by 1.8, add 32, and we'll lastly round this number to the nearest integer. We'll then remove all the columns other than the first three plus the temperature. To make our data easier to work with, we put the minimum and maximum temperatures in their own fields. We do so by pivoting the data type column as the header with the values field as the respective values for each column. To make sure it displays the values,
>
> **[4:46](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980&t=286)** we choose not to aggregate them when we set up the pivoting options. We then rename the columns to station ID, date, high temperature, and low temperature respectively. We'll then change the data types and we'll filter the data to only use the data after the 1st of January in 1970. For enriching our data, let's add a column for the average temperature by averaging the low temperature and high temperature fields within the calculation. Finally, we'll put the low temperatures before the high temperatures, which will make our Excel modeling and Python code smoother once we start modeling it. One of the fantastic things about Power Query is that it automatically writes M code behind the scenes for us as we build the ETL framework. It creates a linear framework that we can see in the applied steps we just walked through. But conversely, we can go back and make changes and adjustments to these steps. In the Advanced Editor window, we can see what this code looks like altogether. Once we build this ETL framework, let's then load it into our Excel model. To refresh our data after loading it, we'll do so through the Queries & Connections panel. If you don't see yours available, you can access it through the data ribbon. We'll then click on the Refresh button next to the daily temperatures 'cause we want to update this query. And you can expand it so you see
>
> **[6:19](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-power-query?u=76281980&t=379)** the Refresh button on the right. We'll then click on this button and Excel will run the entire refresh process within Power Query automatically for us on command so we have the latest data in our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10), [[Microsoft Power Query|Power query]] (8), [[Python (Programming Language)|Python]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** etl (3), noaa (3), csv (3), url (2), api (1)
> **CLI Commands:** make (4), python (2)
> **UI Navigation:** click on (4), dropdown (1), select the (1)
> **Prerequisites:** set up (5)
> **Versions:** 1.8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the PY Excel function](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-py-excel-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-py-excel-function?u=76281980&t=0)** - [Instructor] To write [[Python (Programming Language)|Python]] code directly in [[Microsoft Excel|Excel]] cell will leverage the PY or PY function, which creates output from running Python code. This function is two parameters, the Python code we want to run in the selected cell and the return type of the Python output. In the intro sheet of our Excel file, let's check out some examples. We'll first type in the PY function into a cell in our workbook where we want to put our Python code. We'll then hit Tab and notice it opens the Python Code Editor. We can also choose to insert Python code directly into a cell through the Python button in the top ribbon's Formula menu options. Alternatively, we can hold down the keys Control + Alt + Shift and P simultaneously to open the Python editor for the selected worksheet cell. We'll then input our Python code into the formula bar that appears. Let's start with a classic first line of programming code by inputting hello world as a text string. Once we finish typing our Python code, to commit it, we need to hold down the Control and Enter key simultaneously. Running this cell returns the results of our Python code. There's an icon to the left of the results indicating the output type. By default, this function displays the result as a Python object.
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-py-excel-function?u=76281980&t=93)** Your object icon might look slightly different, but it still represents the same thing. Using the built-in Excel function FORMULATEXT enables us to see the entire formula input that we just created. We'll type this into the cell below that and we'll reference the cell above it. Now we can see the entire formula input that we just created. Notice the Python expression is a string within a string using multiple quotations. The second value has the parameter expression of one, which represents the Python object type as the type of output the cell currently returns. Let's create the same formula with the PY function and hello world in the next set of cells below that as well. We can convert it into Excel values by choosing that option from the selected cell's left-hand dropdown toggle menu. We'll change it from Python Object to an Excel Value. Let's then use the FORMULATEXT Excel function again to get the formula for the cell. We see a zero in the second parameter of this cell because we're displaying an Excel value as the output. If we go into our previous cell and toggle the output to Python object, we see our FORMULATEXT output updates as well. We'll change it back so we can see this as a comparison. We can add multiple lines of Python code just by using the Enter key
>
> **[3:05](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-py-excel-function?u=76281980&t=185)** to move the [[Cursor]] within the formula bar to the next line. Unlike writing Excel formulas explicitly without the Python function, hitting the Enter key doesn't return the results. Instead, it takes us to a new line. Let's put hello world in the first line, followed by one plus one in the second line.
>
> **[3:30](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-py-excel-function?u=76281980&t=210)** We'll then confirm our results using Control + Enter. Notice that in our return results, it only displays the last line of Python code, the number two, because that was the last line of Python code executed in the Excel cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (21), [[Microsoft Excel|Excel]] (9)
> **CLI Commands:** python (21)
> **UI Navigation:** toggle (2), open the (1), dropdown (1)
> **Env Vars:** formulatext (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the XL Excel function and Python variables](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-xl-excel-function-and-python-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-xl-excel-function-and-python-variables?u=76281980&t=0)** - [Instructor] If we want to use [[Microsoft Excel|Excel]] objects like worksheet cells within our [[Python (Programming Language)|Python]] in Excel code blocks, we can use the Excel function within the Python function PY to reference these input parameters. Within our Python code in Excel, we can set variables in the same way we would for Python code run in another IDE. In our first line of code, let's set A = 1. In the second line of code we'll create a new Python variable X and set it equal to A + 1. The output as expected, returns two here. We can also use the Python code variables in other Excel cells. In the third row of our results table where it says X squared, we'll again use the Python function where we'll reference the X variable. Notice, we see it appear from the dropdown menu as we type in the variable name, we can then choose Tab to select it and we'll confirm these results. Now let's square the output. We'll use the double asterisk followed by two, and we'll hit Ctrl + Enter again to update our formula. As we expect, this returns a result of four, which equals two squared. We can also reference this variable in another worksheet of our workbook. Instead of storing our Python code outputs
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-xl-excel-function-and-python-variables?u=76281980&t=93)** in variables though, what if we store them in the cells themselves? Let's first make D4 equal to the Python value of two, and this is the exact same formula that we inputted in the cell directly to the left of it. Another way we can reference the value in an Excel cell is by referencing it directly within the Python code. For our X squared variables, let's create another Python code formula. Now, instead of referring to the variable X, we'll select cell D4 as the variable instead. By clicking directly on the cell we want to use within the Excel worksheet. Notice the formula uses the function xl() to reference the cell storing the value we're referencing in the formula. We can then square it and we'll do so using the Python code for squaring results. This returns the same output as the cells to the left. It just references the Excel cell itself rather than the variable it created. Unlike developer IDEs, we don't see all the variables in a consolidated panel as we're building out our Python code in this version. Because we're looking to build Python code piece by piece as a way to both understand and better communicate how models work, we want to avoid as much confusion as possible, and it can become confusing to keep track of Python variables. The potential for overriding existing code increases greatly, especially as we build out a lot of Python code within Excel.
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/using-xl-excel-function-and-python-variables?u=76281980&t=188)** For example, in cell C5, let's create another block of Python code where we'll set X = 3. Since this occurs before we square X, we end up with a result of nine instead of four. This is an organized example where we can clearly see the issue immediately. However, this isn't always the case and we can otherwise easily override our Python variables in Excel and not even realize it. Conversely, if we put the same input of three into cell D5 to the right, it won't override the squared results. We can see how the second approach gives us an exact way to pinpoint the output of other cells to subsequently reference in other formulas. Each cell in Excel has a unique location, so even if we navigate to another page or position, the results stored in these Excel cells work like built-in unique variable names referencing each unique cell within the worksheet. We can also just make the outputs of the top two cells in cells D4 and D5 to two and three instead of Python objects, and we notice that our Python calculations in the last row still pick up the same results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (20), [[Microsoft Excel|Excel]] (12)
> **CLI Commands:** python (20), make (2)
> **UI Navigation:** dropdown (1), navigate to (1)
> **Env Vars:** ide (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Determining calculation order](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-calculation-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-calculation-order?u=76281980&t=0)** - [Instructor] When we write [[Python (Programming Language)|Python]] code in our [[Microsoft Excel|Excel]] cells, we want to be careful about where we place our code and, subsequently, the cells that reference other pieces of Python code. These Python code cells need to execute in an order where they go across and down from the previous references in a Z shape. Excel also reads from the first sheets to the last in that order, so we want to think about this order strategically as we build out our models by optimally putting the calculations in the pages after the data, especially for Python code. In the order tab of our Excel file let's see how this works for better context. Let's set the blue cell in the middle of the grid for the Excel cell calculation order to three. We'll then display the calculation that we want to put into the eight cells surrounding it. We're going to take the cell C five and add two to it. Here's the formula we're going to put in these gray cells surrounding the blue one in the calculation table above it. We'll then copy and paste this formula into all the cells surrounding the blue one above. Pasting this formula into these eight cells returns the result of five as the Excel value. It returns the same results for all the Excel cells and the value we expect to see. However, this doesn't hold for Python code and it's important to remember this as you set up your Python models in Excel. Let's create a Python code with the value
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-calculation-order?u=76281980&t=95)** of three for its output. We're going to place this in the blue cell in the middle of the Python cell calculation order table. Now, let's use the P Y function to reference this cell automatically with the Excel function in our Python formula and add the number two to it. Again, we'll put the formula in a cell below so we can copy and paste it into the other cells. Let's again copy and paste the formula below the table into all the gray cells surrounding the blue one in the Python cell calculation order table. We get an error message here, but that's intentional as we'll see shortly. We get a circular message here because we're trying to reference another Python cell from this position, which violates the calculation order rules for Python cells. We're going to click okay to commit this formula, and we're going to come back to it after we fill out the [[Representational State Transfer (REST)|rest]] of the table. This blue line here indicates a circular reference. Now, we don't want to ignore this, but we will revisit it in a few steps. We'll then paste the formula into the remaining cells.
>
> **[2:57](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-calculation-order?u=76281980&t=177)** When we try to confirm our Python code in the four cells, F four, G four, H four, and F five, we receive an error message because this is an example of a circular reference. We also see all the other cells in this table error out because there is a calculation order error. If we ignore this error message, they all return Excel values of zero, even though we would expect to see five. The reason is because these top three cells use circular references. We'll remove the formulas from the top three cells above the blue cell, as well as the one on the left. We now see the cells below and to the right of the blue one return the python value of five as we expect to see. Let's highlight the ones we just deleted orange, because these cells are off limits for returning Python results in Excel relative to the blue cell in the middle. This is an important concept to remember when you're setting up your own Python and Excel models. In this course, I set up the Python code and the spaces to add the code to strategically already in the cells that I knew would work to reference the previous cells I wanted to use in these later ones. This is a key technical concept that has big implications for the way we design our Excel models to incorporate Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (18), [[Microsoft Excel|Excel]] (12), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (18)
> **Definitions:** is an  (2), is a  (2)
> **Prerequisites:** set up (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Importing Python libraries into Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/importing-python-libraries-into-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/importing-python-libraries-into-excel?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] has existing functions that we can tap into for writing and running Python code. However, in order to maximize what the language should do, we want to tap into Python packages and libraries and their functions. There's some debate about what's a library and what's a package, but I'm just going to call them all libraries for simplicity. This includes functionalities for [[Data Science]] and data visualization like [[Pandas (Software)|pandas]], numpy scipy, sklearn, and matplotlib. We find them in commonly used Python IDs and notebook environments, so they're already vetted quite well for general use. Here in this text file are the libraries that we're going to import for this course. I've already divided them based on how we're going to use them in the course. We'll copy all these imported libraries from the text file and the [[Microsoft Excel|Excel]] file, we'll navigate to the libraries tab and let's import our libraries in C4 in this page. We can import our Python libraries on each worksheet or altogether in a consolidated code cell on one worksheet. For the sake of simplicity and learning in Python, I'm going to import them all at the same time, similar to what we do with Python code in other environments where we import them all at the top of the code file. If we navigate to the formula's ribbon, we can see the preloaded import statements in this initialization view. For the sake of simplicity, I'm including all the libraries in cell C4. Some of them like pandas and numpy are redundant
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/importing-python-libraries-into-excel?u=76281980&t=94)** to the initial setup, but it's not going to break anything. It's going to make it easier later because we're able to locate the libraries directly in the Excel file that we're importing. So I'll close the initialization tab, and then in cell C4, I'll input the Python libraries as a Python code cell, and let's expand this so we can see all the libraries that we're importing. When we hit Ctrl +Enter the code cell runs. Notice it returns a Python object output of none. Importing the Python libraries doesn't return any objects. However, this makes it difficult to tell what libraries we've imported because we don't see any results in this cell. One suggestion is to instead include a texturing at the end of this Python code that denotes the libraries that we imported. We will say, imported pandas, numpy, scipy, statsmodels, sklearn, seaborn, and matpilotlib. We'll then run this code cell again. Even though we already imported the libraries earlier when we ran the code cell, running it again displays a printed statement that enables us to easily see the libraries that we imported without having to select the Excel cell and look into it directly
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/importing-python-libraries-into-excel?u=76281980&t=189)** to see what these libraries are. Let's then expand this space so we can see all the libraries in a single cell without having issues with text wrapping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Pandas (Software)|Pandas]] (3), [[Microsoft Excel|Excel]] (3), [[Data Science]] (1)
> **CLI Commands:** python (12), find (1), make (1)
> **Prerequisites:** initialization (2), setup (1)
> **UI Navigation:** navigate to (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Managing errors](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/managing-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/managing-errors?u=76281980&t=0)** - [Instructor] In [[Microsoft Excel|Excel]], we run into error messages frequently if there's an issue with our formulas. Similarly, we can encounter additional errors specifically when we write [[Python (Programming Language)|Python]] code in Excel. There's a diagnostics pane to show errors. Let's go into the Python menu in the Excel formula ribbons tab and turn this feature on. This opens a pane on the right side where we will see a list of errors that run when we execute our Python code. Let's select the checkbox to show it automatically. Now let's create some errors. If we create code that takes a long time to run, we'll see a busy message like running a loop 10 million times when we put a formula like this in cell C3. To cancel this Python execution, let's just delete it. If we're not able to connect to the [[Microsoft]] server that runs Python, we'll see a #CONNECT! error, like we see and cell B four. If a Python integration isn't set up to run in our version of Excel, we'll conversely see a value or unknown error message. Conversely, if we're able to connect to Python, but there's an error in the code, then we'll see a Python error message in our cell instead. Let's set this up by saying we're going to pint("Hello world") instead of print.
>
> **[1:29](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/managing-errors?u=76281980&t=89)** This means that Python connects, but there's an issue in the Python code itself that we need to fix, like the incorrect syntax of pint instead of print for our Hello world string. There are nice built-in functionalities within Excel that can do more research as to why these errors occur in the application. If we go to the warning message dropdown menu, we can select help on this error to get more details. We can also select to show the error message, and we can get more details in the diagnostic pane on the right. The diagnostics pane will open when it runs into an error like this if it's not already open, like we have in our page. It cumulatively displays these errors that we need to fix. It tells us that we're getting a name error here, for example, and what cell and what page within the Excel file that this error occurs on. A #CALC! error typically indicates too much data, and in our case, we see the #CALC! error when we haven't finished writing the formula for Python in our cell. Lastly, let's create a #SPILL! error message. This appears when there's data in the cells we want to expand our output into. Let's create Python code that represents the values for the X labels in our [[Logistic Regression]] table. We'll highlight all these values directly. Now, let's display the output as Excel values
>
> **[3:05](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/managing-errors?u=76281980&t=185)** instead of a Python object. This takes up more than a single cell. We'll then change it back to a Python object. In the cells below the orange cell where we just entered our formula, let's enter text impediment one and impediment two. These are blocking the options we have for expanding our cells. Let's again convert our Python object into Excel values. We then receive a #SPILL! error message that the range of cells that we want to expand these cells into isn't blank. We see this because there's a dashed line around the cells where this expanded python object would go as Excel values. To avoid this problem, we want to either remove the impediments or put them in another cell where we have enough space. I prefer to give myself a lot of space when working in Python and Excel so that I can see the values in the objects when I need to. So once we understand why error messages occur, we can better troubleshoot these issues and plan out our code more efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (17), [[Microsoft Excel|Excel]] (10), [[Microsoft]] (1), [[Logistic Regression]] (1)
> **CLI Commands:** python (17)
> **Env Vars:** calc (2), spill (2), connect (1)
> **UI Navigation:** select the (1), checkbox (1), go to (1), dropdown (1)
> **Warnings:** warning (1), troubleshoot (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Working with Python objects](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=0)** - [Instructor] Objects and programming bundle data and functions together to manipulate data. They work like programs within a program with their own rules and behavior. We can create objects manually or from other objects. Examples of [[Microsoft Excel|Excel]] objects include cells, ranges, array, and tables. In [[Python (Programming Language)|Python]], everything is technically an object, including strings and integers, as well as lists, tuples, arrays, data frames, series and functions to name a few. Let's say we create a new Python object. Once we create this object, we can then call methods or functions on it. We're going to be using [[GitHub]] [[Codespaces]] in this course. When you see Codespaces on the screen, it will correspond to a branch within Codespaces itself. It's a way for you to see how Python Code works first and then integrate it into Excel. We're here in the Creating Objects file within our Codespace. We can see how to create an ETL framework that uses Python Code with functions from the [[Pandas (Software)|Pandas]] Library to get this data. However, when we're using Python Excel, extracting and transforming the data is a task that we use [[Microsoft Power Query|Power Query]] for instead. This Python code returns daily temperature data for Santa Barbara as well. The output from Power Query in our Excel file matches the data frame object variable DF output that we see at the end of the ETL framework section within our Python notebook file.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=94)** You can try this out on your own as well. Once we create the data frame object, we can then call methods from the Pandas Library on this data frame, like head to get the first five rows, tail to get the last 1,000 rows, as well as its shape, column names, and data types. Now let's translate these functions in Python within the notebook file into their counterparts running Python Code in Excel. Within Python Code, we can create Python list objects in a few different ways. Let's manually create one by putting the values two, four, six, and eight inside square brackets. Similarly, a NumPy array also stores values. We can create an array by calling this eponymous function from the NumPy library and putting the values two, three and four inside square brackets within the function. Now we can expand these list and array options within our Excel file. We see they both return similar looking outputs from different objects. Data frame objects are the cornerstone of working with Python Excel because they create tables that enable us to model tabular data. Let's create a data frame object in cell C-15 to reference the daily temperatures for Santa Barbara
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=189)** that we loaded into Excel from Power Query. Let's reference the table's first three columns and rows, including headers. The selection automatically uses the Excel function to create a table from the reference cells by wrapping the function around those selected cells. By default, the data frame object sets the header parameters within the function to true, but we can change it to false if we don't have headers in our data table. These cell references, however, refer to a selected section of the table. Instead, we want to select the entire table. So let's select all the data within our daily temperatures tab. The updated syntax now references all the data in the Power Query table. When the data updates in the future, it will include an expanded data set, for example, and the Excel function will automatically pick up those additional rows. Once we create the data frame object to reference this query, let's obtain the most recent numbers by chaining tail to the end of the data frame and specifying that we want to see the last 1,000 rows of daily temperatures. Similarly to what we saw in Codespace, we can just chain it directly to the end of the data frame. And we want to make sure that we use a period here instead of a comma. We can also reference this new data frame object directly in another cell of Python Code. Let's reference our new Python data frame.
>
> **[4:48](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=288)** We'll then display it as a table with Excel values to see what the output looks like. Let's find this data frame shape by referencing it directly in another Python Code cell. We'll then change shape to the end of this data frame reference. This returns a tuple object that we can expand to values to see the data frame contains 1,000 rows and five columns as we expect to see. We can also chain other methods to our new data frame. We can chain the columns method to it to see the column names.
>
> **[5:37](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=337)** We can get the data types by chaining D types to the end of the data frame in the same way.
>
> **[5:50](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/working-with-python-objects?u=76281980&t=350)** Lastly, we can also reference the data frame objects in other sheets, like the time series for the data frame that we'll use in algorithm calculations. We'll set cell C-8 equal to the output of cell C-18 in the objects tab. When we reference the table, however, that doesn't pick up the data frame object, but instead points to the column name of the first column in the table that we expanded. Instead, let's reference the data frame object in cell C-15 of the same sheet. And I'm just going to update this manually in our formula bar. We can also access proceeding calculations within Python formulas in the same way that we would trace formulas within normal Excel files. We'll hold down the control key and the open bracket, and this navigates us back to the object sheet where we created the initial data frame object. Dividing the Python Code into Excel cells emphasizes the object-oriented nature of Python. It's easier to see these smaller blocks of code in Excel and conversely in Codespaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (18), [[Microsoft Excel|Excel]] (14), [[Codespaces]] (4), [[Microsoft Power Query|Power query]] (4), [[Pandas (Software)|Pandas]] (2)
> **CLI Commands:** python (18), make (1), find (1)
> **Env Vars:** etl (2)
> **Tools:** github (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Transforming DataFrame objects](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=0)** - [Instructor] A DataFrame object contains fields with the names denoted in the column headers. Once we create a DataFrame object storing this table data, we can then reference it in other code. This includes extracting a column from the DataFrame as a series object. Each column represents a series object that we can use within [[Python (Programming Language)|Python]] code. The index of a DataFrame refers to an index column starting at zero to N minus 1 number of rows in the DataFrame unless we otherwise specify. For example, we can use an existing field in the DataFrame object as the index. We can create a series object from any DataFrame object, but let's create one in the Time series tab so we can use it in modeling later. Let's first directly reference the output of the DataFrame object stored in cell C8. We'll then put the name of the column to reference Average Temperature inside square brackets to reference this column. We'll add this to the end of our [[Microsoft Excel|Excel]] reference.
>
> **[1:12](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=72)** This returns a series object representing the average temperature values for that particular column. Now let's aggregate our data. There are multiple approaches to aggregating data. I found that trying to pivot the data in Excel and reference that in Python doesn't work really well, so let's instead aggregate the data using Python code instead. Let's return to codespace to play with some Python code before we input it into Excel. In the previous video, we connected to Daily Weather for Santa Barbara from an online FTP folder. This mirrors the daily weather data for Santa Barbara that we've downloaded into Excel through [[Microsoft Power Query|Power Query]]. We can see the steps for extracting and transforming this data. Now let's aggregate it to the monthly level. We can select the columns from this DataFrame by putting them inside double brackets. It first selects the Date and Average Temperature fields from this DataFrame. We can then drop any NAs from the selected rows. It then groups by the Date field on a monthly basis and aggregates the summary as a mean for each month and year over the multiple decade time period. Now let's reset the index of the new grouped DataFrame object. This moves the Date field from the index
>
> **[2:49](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=169)** into an actual field in the model. This resets the index for the aggregated DataFrame. Lastly, let's just display the last 10 years of data by chaining the tail function to the end of it to refer to 120 periods because there are 12 months within each year. Let's then copy this Python code to use in our Excel file. We'll then input this aggregated DataFrame in our Objects tab. In cell C15, we'll create a new block of Python code and paste the code that we copied from codespace into it. In place of the df variable though, let's refer to the data, in this case, the daily temperatures, stored in our Daily Temperatures tab.
>
> **[3:46](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=226)** This returns a Python error like we learned about earlier in this chapter. The reason this occurs is because of the version of [[Pandas (Software)|pandas]] that we're using in the Excel application. To fix this, we can change the frequency of ME, which represents month end, to just M and run the code block again. Now this returns a DataFrame object. Let's reference it in the Excel cells below.
>
> **[4:23](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=263)** We'll then expand it into the space below by displaying it as Excel values. Let's then reference this aggregated DataFrame in our Time series tab.
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=287)** We can then reference a series object from the new aggregated DataFrame object in the same way that we did for the daily data. We'll again refer to the DataFrame object and we'll reference Average Temperature as well.
>
> **[5:10](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=310)** Going back to our codespace, let's explore another aspect of resetting the index. Notice that when we created our monthly average temperature, that we reset the index as our second to last step. Another thing you may have noticed when we inputted this code into Excel is that it drops the index column, so in other words, we don't see the column that starts at zero and goes through the Nth minus 1 row. These Excel tables don't include the index. This doesn't mean that we can ignore them though. For example, we can see what this looks like when we run the city temperatures by California City. Now, this is comparable to the city averages that we see in Excel that we loaded from Power Query. So notice how this displays the index followed by the Station, High Temperature, Low Temperature, and Average Temperature. We'll see later when we run the model for dendrograms that we want to put the labels in the index to properly cluster the data without it causing problems with the numbers that are in the model. Let's set the index explicitly to use it later in these labels by using the set_index function to refer to the Station field that's in our existing DataFrame. Now, let's recreate this in Excel. We'll first create a table object from our City Averages Power Query input.
>
> **[6:51](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/transforming-dataframe-objects?u=76281980&t=411)** Now let's refer to this object, and we'll choose to set the index. We'll chain the set_index function to the end and refer to the Station field. Now, when we expand this, we see that it returns the same output that we saw in codespace. Let's convert this back to a Python object. This video, as well as the previous one, are incredibly important to reference as we work with Python and Excel. The concept of the DataFrame object is a cornerstone to working effectively with Python and Excel because it creates an object that we can further transform and use in our modeling and visuals as we build out the [[Representational State Transfer (REST)|rest]] of our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (14), [[Python (Programming Language)|Python]] (10), [[Microsoft Power Query|Power query]] (3), [[Pandas (Software)|Pandas]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (10)
> **Cross-References:** previous video (1), earlier in (1), later in (1)
> **Definitions:** refers to (1), in other words (1), is a  (1)
> **Code Identifiers:** set_index (2)
> **Env Vars:** ftp (1), c15 (1)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)

#### [Challenge: Creating table objects in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-creating-table-objects-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-creating-table-objects-in-excel?u=76281980&t=0)** - [Instructor] Now you'll have a chance to try out what you've learned so far in this course on your own. For the challenge in this course, let's continue to use Santa Barbara airport weather data, but instead of daily data, we'll use hourly data for the same location. We can get this data through the National Weather Service, and specifically this is the Aviation Weather Center. They have an API that we can explore and use without even having to sign up for an API token or key. I already set up an [[Microsoft Excel|Excel]] file to include a template for getting this hourly weather data. You can use the query for the data table in your own challenge problem. If you refresh your data in the model, it won't look like mine because you'll see the latest 15 days of hourly weather measurements in your view. Alternatively in the text file, this is the API query that I use to get the data. You can use this query directly in [[Microsoft Power Query|Power Query]] to get the data if you want an additional challenge of importing the data into the model yourself. This is the API query from the NWS API page that we just saw. Your task once you connect to this data and load it into Excel is to create a data frame object to store the results from the table. You'll then want to use the [[Pandas (Software)|PANDAS]] methods that we can apply to data frame objects to get the dimensions of the new data frame object storing this data. You can store your outputs in the analysis tab of the Excel file, or you can create a file of your own
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-creating-table-objects-in-excel?u=76281980&t=92)** that looks similar to this one. If you do decide to create your own data query, it's helpful to note that you'll need to convert the observed time field from Unix to UTC by subtracting the numeric value on January 1st, 1970 from the current date time, then dividing what remains of that difference by 86,400. Additionally, the temperatures are in degrees Celsius, so you can convert them into degrees Fahrenheit using the formula where we multiply degrees Celsius by 1.8 and add 32 to it. If you prefer to use degrees Celsius, you can use the temperature field as is. Good luck and I'll see you in the next video to explore a few solutions to this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Microsoft Power Query|Power query]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** api (5), nws (1), pandas (1), utc (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Versions:** 1.8 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Solution: Creating table objects in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-creating-table-objects-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-creating-table-objects-in-excel?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-creating-table-objects-in-excel?u=76281980&t=5)** - [Instructor] For those of you who chose to create your own query with Empower Query to get the data, here's how I connected to these hourly Santa Barbara weather measurements. In the source step, I input the API URL string by setting up a web data connector and referring to the API connection we found in the text file. Because we're connecting to data stored in a [[JSON]] structure, it returns a [[Microsoft Power Query|power query]] list of record objects. You don't have to worry about what power query objects mean, but we do want to transform this into a table object and then expand all the rows in the table into their own rows. When you run this query yourself, it will automatically change the data type. I chose to remove the clouds field in this query because it contains list objects. I wanted to streamline the query without potentially adding more rows to it. There's a new column for the UCC date time consisting of the formula to convert the observe time uptime field from Unix date times to a recognizable date time format on our end for the UTC date time. There's also a column to convert the temp field in Celsius to degrees Fahrenheit. The query then changes these two new fields into date time and numeric values respectively, and deletes the original columns to avoid confusion. After transforming this hourly weather data,
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-creating-table-objects-in-excel?u=76281980&t=100)** we'll then load it from Power Query into [[Microsoft Excel|Excel]]. In the analysis tablets, use the PY function to reference all the data on the tab containing Santa Barbara weather.
>
> **[1:56](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-creating-table-objects-in-excel?u=76281980&t=116)** Notice that we can create a data frame object from the [[Pandas (Software)|Pandas]] Library directly in Excel even though we haven't imported the Pandas library. This is because pandas is preloaded into the [[Python (Programming Language)|Python]] and Excel functionality. However, we'll later add libraries in future challenges. Once we create this data frame object, let's then reference it directly in another line of Python code below that. Within the Python function, let's change the shape method to the end of it. Once we confirm our results, we see the code successfully returns a tubal object. Let's then display it as Excel values. In my example, this returns results telling us there are 422 rows in the data and 34 columns, but yours may look slightly different depending on what you chose to include and remove in your query. I encourage you to experiment more with Power Query and using the Python functions within Excel to explore how the data works more on your own. We'll continue to use this data throughout the challenges in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Microsoft Power Query|Power query]] (4), [[Python (Programming Language)|Python]] (4), [[Pandas (Software)|Pandas]] (3), [[JSON]] (1)
> **Env Vars:** api (2), url (1), json (1), ucc (1), utc (1)
> **CLI Commands:** python (4)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 2. Applying Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing AI and machine learning algorithms](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/introducing-ai-and-machine-learning-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/introducing-ai-and-machine-learning-algorithms?u=76281980&t=0)** - Let's say that we're baking cookies. We have our ingredients, flour, sugar, butter, and chocolate chips. We then need to figure out how to combine them together into the final product. To get there, we'll follow the steps in a recipe. Now, the great thing about using recipe is that we expect to see the same output each time we make it, unless of course, we change something or a piece of the recipe is missing. Much like a recipe, an algorithm's a series of steps to solve a problem. You probably use [[Algorithms]] all the time in your own work, regardless of whether that's in [[Microsoft Excel|Excel]], [[Python (Programming Language)|Python]], or any other tool. An algorithm could be as simple as converting a temperature value from degrees Fahrenheit to degrees Celsius and vice versa. In using AI algorithms on data, we're looking for trends, groups, or outliers and anomalies. Algorithms have finite sequences of steps. We can apply the logic of these steps to find a solution. We can then quantitatively compare these solutions. We repeat these steps to solving an algorithm until we arrive at the optimized solution for an AI algorithm or machine learning model, for example. While we can solve these algorithms using Excel, either manually or with the help of the built-in solver, add-in, using Python instead here can greatly streamline our modeling process. It's important to emphasize that this isn't a course focusing on the details of how a specific algorithm
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/introducing-ai-and-machine-learning-algorithms?u=76281980&t=94)** or visualization works. We focus on examples of how Python code can help us run algorithms or create visuals that aren't otherwise possible in the built-in functionalities of Excel. We want to integrate Python into Excel, not replace it. Algorithms are often used together with many others in technical ecosystems like social media algorithms. Recommendation systems, for example, can filter, rank, and select the content shown to users. They can then make decisions of their own with these recommendations. In Excel, we're not going to be building out large recommendation systems because there are limitations with working with data points within the application. We can, however, understand how much smaller pieces of it work by breaking them into components that we can play with in Excel. Now that we know what algorithms are, let's get started building them in Excel with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (8), [[Microsoft Excel|Excel]] (7), [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5), make (2), find (1)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)
> **Speakers:** - let (1)

#### [Determining trends for linear regression with Excel functions](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determing-trends-for-linear-regression-with-excel-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determing-trends-for-linear-regression-with-excel-functions?u=76281980&t=0)** - [Instructor] One way we can find trends in data is by running regression models. For example, if we have data points on a scatterplot, we can use these regression models to fit a line that best predicts future data points. [[Linear Regression]] is when we run a straight line that fits these data points. The good news is that while we can calculate linear regression model coefficients in [[Python (Programming Language)|Python]], we can also set them up directly in [[Microsoft Excel|Excel]]. Especially from an Excel perspective, it's more efficient to use built-in Excel functions and functionalities to do this. There's also a scatterplot on the linear regression tab in Excel. This is a one-dimensional model because we're referencing the low temperature as the independent variable plus the interceptor bias as the other coefficient. Just to see how this works, let's say that we have the high temperature as this dependent Y variable and the low temperature as the independent X variable. We can calculate the intercept of a one-dimensional linear regression model using its eponymous Excel function. We'll reference the high temperatures as our Y values and the low temperatures as our X values. We'll then navigate to our Daily Temperatures data that we imported via [[Microsoft Power Query|Power Query]] and reference these analogous fields. Once we calculate the intercept, let's use the analogous eponymous Excel function to calculate the slope for this one-dimensional model.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determing-trends-for-linear-regression-with-excel-functions?u=76281980&t=97)** We'll then input the same fields as the ranges in the same order as our intercept calculation. We can check our calculations by referring to the linear regression best fit line that's already on the scatter plot on the right. Both the intercept and slope coefficients match the formula on the trend line. Notice, however that the line doesn't perfectly fit. We can measure the strength and direction between the data points using correlation calculations. Within Excel we can do this using the same fields, using those correlation function, CORREL. We can then input the arrays in any order, but let's use the same order that we did before. A correlation just short of 0.5 indicates there's some correlation between the two temperature fields. To calculate the R-squared value for comparison, let's square the correlation output. We see this matches the R-squared value on our formula for the best fit line. Another way we can do these calculations is using the Data Analysis add-in that's an option to turn on within Excel. We can select this option from the top ribbon in the Data tab. Now, if you don't see yours turned on here, we can go into the Excel Options menu and we can turn on the Analysis ToolPak. Now we can select Data Analysis
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determing-trends-for-linear-regression-with-excel-functions?u=76281980&t=190)** from the Data ribbon at the top. Let's select the option for multiple regression, and we'll choose this from the Regression option. We can then select the fields we want to use in the output. For example, we can reference the high temperature again as the dependent Y values. Alternatively, we could also reference the average temperature. And we'll hit enter to confirm this selection. For the input range, let's choose the low temperature and again, hit enter. Now we can actually include more than one independent variable here. To do so, we'll select the low temperature and high temperature. We'll indicate that our labels are in the top columns, and then we'll run linear regression on this model. Now, we can choose what else we want to include with this output, but when we click OK, this returns a summarized sheet for the linear regression model that includes more than one independent variable, unlike the options for running the slope and intercept functions. This new sheet contains information about the regression results, including coefficients for the intercept, as well as for the two independent variables. In this case, low temperature and high temperature. Using the Data Analysis add-in gives us the option
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determing-trends-for-linear-regression-with-excel-functions?u=76281980&t=287)** to run multiple regression models, which expands the capabilities of the existing function to run linear regression directly in Excel. This is an example of where I think Excel is more effective than Python for running these type of analysis because it uses built-in tools and functions to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (11), [[Linear Regression]] (8), [[Python (Programming Language)|Python]] (2), [[Microsoft Power Query|Power query]] (1)
> **UI Navigation:** select the (3), navigate to (1)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **Env Vars:** correl (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging Excel Solver for logistic regression](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-solver-for-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-solver-for-logistic-regression?u=76281980&t=0)** - [Instructor] As we saw in the previous lesson, regression models enable us to find trends in data. Sometimes a [[Linear Regression]] model is a good fit for data points, and sometimes it isn't, like what we see in this scatterplot. [[Logistic Regression]] models display best fit lines as S shaped curves instead. Classic binomial logistic regression models have two possible actual outcomes. Zero represents one outcome like loss or the response, no. Conversely, one represents another outcome like a winner, yes. The orange line we see on this logistic regression chart represents the predicted probabilities for each X value. Unfortunately, in [[Microsoft Excel|Excel]], we can't directly predict the outcomes in the same way we would for linear regression by calculating the regression coefficients directly through formulas or the data analysis added. In the logistic regression tab, we see the predicted probabilities in column G, which range from zero to one as an open interval. The predictive probabilities from a logistic regression model can get very close to zero and one, but they never actually equal either value. We solve for the coefficients in the logistic regression model for the interceptor bias and one independent variable X from the inputs in column B and C of the outline table. We maximize the total sum of log likelihood values in cell K3 to solve for the model coefficients. The details of how logistic regression works are outside the scope of this course,
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-solver-for-logistic-regression?u=76281980&t=92)** but there are entire courses in the library on this topic. We find these coefficients by running the solver add-in on the logistic regression model through the data ribbon. If you don't see it available in your version of Excel, you want to enable it through the options menu in the same way we enabled the data analysis add-in. We'll navigate to the add-in options menu then check the box next to the solver add-in to confirm the selection. We can then open the solver add-in in the data analysis section. Because they already configured the solver parameters, we see inputs to run logistic regression already set up if you want to learn more about them. When we find a solution for a logistic regression model, we're letting Excel iterate through the potential coefficients to solve the model. It ultimately finds the solutions when the coefficients in the yellow cells maximize the total in the blue cells for the sum of the log likelihoods. It uses a solving methodology to get there. This is the top of the three dimensional curve if we have a one dimensional model like we have here. This approach is a great way to understand the intricacies of the model under the hood, but we can streamline this modeling process by using [[Python (Programming Language)|Python]] code instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (10), [[Microsoft Excel|Excel]] (3), [[Linear Regression]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (3), python (1)
> **UI Navigation:** navigate to (1), open the (1)
> **Definitions:** is a  (2)
> **Cross-References:** as we saw (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Determining trends for logistic regression with Python code](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-trends-for-logistic-regression-with-python-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-trends-for-logistic-regression-with-python-code?u=76281980&t=0)** - [Instructor] We are going to use the [[Logistic Regression]] function from the linear model section of SK Learn and the standard scaler function from the pre-processing section of the same library in addition to [[Pandas (Software)|Pandas]] and NumPy. In [[Microsoft Excel|Excel]], we already imported all the libraries we're using in this course at once through the libraries sheet. Let's note in the blue cell the libraries we're using specifically for logistic regression. In Codespace, we create a data frame object stored in variable df that's exactly the same as the data table referenced in the logistic regression model in Excel. In Excel, let's create a [[Python (Programming Language)|Python]] code cell for the data frame object to reference the cells B2 through C12 directly on the same sheet. Now let's create our logistic regression model in Python. We'll create a logit variable and instead it equal to the logistic regression function, where we'll set the fit intercept penalty and class weight parameters inside it. Now let's scale the X values in our logistic regression model to ultimately return predicted [[Probability]] results that are very close to our solver results. We'll use the standard scaler function we imported through the SK Learn library. We'll then fit our logit object using the scaled X values as our X value input and our actual Y outcomes as the Y values.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-trends-for-logistic-regression-with-python-code?u=76281980&t=96)** We then call the predicted probability method on our logit object and returns the results as a two dimensional NumPy array. We're interested in the second item within each item representing the predicted probability P, which starts very close to 0 and ends very close to 1. To extract these probabilities, we'll use a Python list comprehension to iterate through these results and extract the second item in each iteration into a list object. Let's then add another column for probability to our data frame that equals the probability results we just calculated as a list object. Now let's translate these steps of the logistic regression modeling process into Python code in Excel. We'll set up Python code for running each of the sections within Excel. We'll need to modify these formulas to reference Excel cells instead of Python variables inherited from the [[Codespaces]] code. The log variable only sets the logistic regression parameters and it doesn't reference any other variables, so it remains the same as we saw in Codespaces. We do need to adjust the DF reference for the scaled X variable, though to reference the data frame object cell C19. Now for logit.fit, let's reference the logit variable in cell C20. Within the fit method, we're calling on this object.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-trends-for-logistic-regression-with-python-code?u=76281980&t=192)** Let's then reference the scaled X values in C21 and the Y values from its eponymous Y field in the data frame object referenced in C19. We'll then calculate the probabilities after fitting logit in cell C22 by predicting the scaled X values from cell C21. Let's then create a list object to store the probability results for each row in the data table. Lastly, let's add these probabilities as a new data frame column to our existing data frame. Let's then expand the table to make sure the results look correct. Notice how Excel displays the object types for each Python cell that we store our model variables in. This is an extremely helpful way to build out these models step by step in a way that's more accessible and visible to end users who aren't familiar with Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (8), [[Python (Programming Language)|Python]] (8), [[Microsoft Excel|Excel]] (7), [[Probability]] (6), [[Codespaces]] (2)
> **CLI Commands:** python (8), make (1)
> **Env Vars:** c19 (2), c21 (2), c12 (1), c20 (1), c22 (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Grouping data with hierarchical clustering](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=0)** - [Instructor] When we run [[Algorithms]], we're looking for outcomes like how data points group together. One way we can group data is by using clustering algorithms. Hierarchical clustering algorithms pair up the closest data points or existing clusters with each iteration to create essentially a matrix of distance calculations. [[k-means clustering]] algorithms, group data to K clusters by minimizing the total distance between each data point and their assigned centroid. Let's first explore hierarchical clustering and code spaces and then translate the [[Python (Programming Language)|Python]] code into [[Microsoft Excel|Excel]] Python code cells. In addition to the [[Pandas (Software)|Pandas]] library, we're also using the linkage function from the cluster hierarchy part of the SciPy library. We already have code to create a data frame that stores the average temperature for several cities in California. We'll run this code and then we'll start modeling hierarchical clustering using this data. In order for this model to work, we need to create a list of tuples for each data point that we can pass as an input parameter into the hierarchical clustering algorithm. We first create this list object for a one dimensional model consisting of just the temperature. It's a bit easier to see how this works when we use two dimensions like low temperature and high temperature for each city. We use the pandas two list function to convert the specified data frame column from a pandas series object to a Python list object. We then credit zip object, which is an iterator of tuples
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=93)** to pair items together. Notice this creates a zip object in order to see the output of the zip object, we nest it inside the list function. It's now much easier to see that each tuple represents a cross section of the values for the low and high temperatures for each city. It also creates a two dimensional object storing these temperatures. We'll also create a variable data 2D to store the two dimensional data. Now let's run the distance calculations to determine how these data points pair up. We'll do this using the linkage function from the SciPy library. We'll set the method parameters toward, and we'll set the metric parameters to Euclidean to indicate that we're using a Euclidean distance calculation. We'll do the same for the two dimensional data as we did for the 1D data on its respective data. If these calculations seem confusing, we'll revisit this in the next chapter when we create a visual that will really help us understand what's going on in these systems calculations. Let's then translate our Python output and code space into Excel formulas, starting with the one dimensional data. In Excel will start by noting that we're using the linkage function from the SciPy library in these hierarchical clustering calculations. We'll then put the data from the variable data 1D into the dendrograms tab. Let's adjust our formula to reference cell C6 in our code
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=188)** instead of referencing the data frame like we did in [[Codespaces]]. And actually we're referencing cell C7, we will reference the average temperature as our single field.
>
> **[3:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=213)** We can then expand this object into a list so we can see the results. Once we create an updated one dimensional list object, let's then calculate distances between each of the cities and the list based on the average fields as another Python and Excel output. We'll reference C20, which stores the data in our distance calculation, and we'll just include the metric here for the Euclidean distance.
>
> **[4:16](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=256)** We can see what the output looks like. We'll then create the two dimensional data and distances in the same way that we did for the single dimension. Except we'll use low temperatures and high temperatures instead of average temperatures. We're still referring to the same data frame though.
>
> **[4:52](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-hierarchical-clustering?u=76281980&t=292)** We'll then calculate the distances by referring to this new Python list object output in our formula instead of the two dimensional data list object that we refer to in Codespaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Algorithms]] (4), [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (3), [[Codespaces]] (2)
> **CLI Commands:** python (6)
> **Env Vars:** c20 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Grouping data with the K-Means algorithm](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-kmeans-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-kmeans-algorithm?u=76281980&t=0)** - [Instructor] The scikit-learn, or sklearn library, is a [[Data Science]] AI machine learning library for running models. To make our modeling more efficient, we'll just import the k-means function from the clusters section of the sklearn library. We'll import this along with [[Pandas (Software)|Pandas]] and NumPy. We already have an ETL framework in this file to create a data frame object storing the daily temperatures for Santa Barbara. We'll run this code to create the data frame. Now, let's translate our [[Python (Programming Language)|Python]] code into Python [[Microsoft Excel|Excel]] code. We'll note in the k-means tab that we're using the k-means function from the sklearn library. Let's first reference the daily data frame object that we created in the objects tab of our workbook. So, make this a bit bigger. We'll then select to just include the columns for date, low temperature, and high temperature by chaining it to the end of our code. We also need to create a data list object to use in our k-means algorithm within Excel. We'll do so using the Python function, then list and zip, and we'll create this zip object in the same way that we did in [[Codespaces]]. And we'll swap out the reference to the data frame in Excel
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-kmeans-algorithm?u=76281980&t=96)** with our DF variable that we saw earlier.
>
> **[1:49](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-kmeans-algorithm?u=76281980&t=109)** In cell C11, let's then set the initial k-means object with two clusters. In the cell below, it will then call this object and fit it using the data. We'll then determine the cluster labels in cell C13. Lastly, let's add this new cluster column to the data frame.
>
> **[2:22](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/grouping-data-with-kmeans-algorithm?u=76281980&t=142)** We'll then expand it to the values instead of just the data frame object to see what the results look like. We'll also just display the most recent 1000 rows. This is how clustering works on a high level. If these results look confusing, don't worry, because they'll make a lot more sense when we use these outputs to create really neat visuals, like dendrograms and scatter plots in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (3), [[Data Science]] (1), [[Pandas (Software)|Pandas]] (1), [[Codespaces]] (1)
> **CLI Commands:** make (3), python (3)
> **Env Vars:** etl (1), c11 (1), c13 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Determining anomalies with anomaly detection algorithms](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=0)** - [Presenter] On a high level, we can define an outlier as a deviation from where we are, while an anomaly is a deviation from where we expect to be. If we line up all the daily temperatures within a year for any given location, we would see a distribution where a lot of the data points are in the middle, but there are some at the ends. These outliers represent very hot or very cold days within the year, for example. However, within each season, sometimes we experience hotter or colder than expected average temperatures for that particular time of year. For example, a temperature of 80 degrees Fahrenheit might be hot for New York in the middle of winter, so it's an anomaly, but then in the summer, it might be an expected temperature that we see, so it's not. These outliers represent anomalies as temperatures. Let's check out how to run anomaly detection [[Algorithms]] using [[Python (Programming Language)|Python]] code and [[Codespaces]] first. We'll use the DBSCAN section of the SK-Learn library to run the anomaly detection algorithm. It's a clustering algorithm and we see that it calls from the cluster section of the library. We can then run the ETL framework to get the daily temperatures into the anomaly detection model. We'll only use the last 1000 days of data to match the output that we're using in our data frame object within [[Microsoft Excel|Excel]]
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=93)** to calculate things like outliers. Next, we create a NumPy array to store our average temperatures from the data frame that we want to determine our anomalies over. We can then see what the output looks like. We chain the method to reshape the NumPy array at the end. If we run it without it, we see that it creates an array that looks much like a list, but if we reshape it, we can then use it in algorithms like anomaly detection. We'll then initialize our anomaly detection results using the DBSCAN function. Within this function, we'll set the epsilon parameter equal to 2 and the minimum samples equal to 14. We then chain the fit_predict method to the end of this function and reference X, which stores our NumPy array for the temperatures. It's important to note here that we see that most of the values returned are 0s. If the data point isn't an anomaly, then we'll see it returns as 0. Anomalies, however, don't return labels of 1, they actually return cluster labels of -1, which we can see as we scroll down through our array. The clusters variable itself returns a NumPy array. We see that it returns values of 0 or -1. You might be wondering why we're using this
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=190)** as anomaly detection when we studied clustering algorithms in the previous video, however, the way these algorithms work is they often rule things out as a way to rule them in. For example, with the clustering algorithm, what we're doing here is we're finding clusters, so then the data points that are within those clusters, they are not anomalies. But the data points outside those groups or clusters are what we can consider anomalies because they're outside the temperature range where we expect to see on any given day as an example. Now, let's translate this into Excel. On the anomalies page, let's first reference the DBSCAN library we're using here. Now we've already imported it, we're just adding this as a reference so we know what libraries we're using within this particular worksheet. We'll then set our data frame equal to the Python code that we have in our objects page that creates this data frame object. Once we refer to the data frame object that returns the most recent 1000 days of Santa Barbara temperatures, we can then set up a NumPy array to store the average temperatures. We'll reference the data frame variable that we just brought in the cell C6 above this one, and we'll reference the average temperature field within it, and then we'll reshape this NumPy array
>
> **[4:50](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=290)** like we saw earlier in Codespace. And cell C12 will store the clustering output. We use the same function that we saw in code space. We'll set our EPS parameter equal to 2, and the min samples equal to 14. We'll then fit_predict to reference the NumPy array storing those temperatures.
>
> **[5:21](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=321)** Lastly, let's add a flag column to the data frame so we can identify the anomalies as either 0 or -1.
>
> **[5:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/determining-anomalies-with-anomaly-detection-algorithms?u=76281980&t=333)** That output displays a single data frame object in an Excel cell. Let's expand this to Excel values. Now we have too many fields. We're really only interested in the date, average temperature, and anomaly, so let's update the columns we're referencing to just reference date, average temperature, and our new anomalies column will then be added when we assign it to the existing data frame object. Once we calculate these anomalies, we can then make decisions to remove the data points or to annotate them to emphasize that there were anomalies at that point in time. We can also make adjustments to the inputs of this algorithm. For example, we can set this equal to 1, and then the [[Representational State Transfer (REST)|rest]] of our outputs will update, as well. Anomaly detections are very helpful in modeling because they enable us to determine if a data point should be included or excluded in our analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (2), [[Codespaces]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dbscan (3), etl (1), c12 (1), eps (1)
> **CLI Commands:** python (2), make (2)
> **Analogies:** for example (4)
> **Code Identifiers:** fit_predict (2)
> **Cross-References:** previous video (1), earlier in (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### [Challenge: Running algorithms with Python in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-running-algorithms-with-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-running-algorithms-with-python-in-excel?u=76281980&t=0)** (lively upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-running-algorithms-with-python-in-excel?u=76281980&t=5)** - [Instructor] Now you're going to try this out on your own. We're going to continue to work with our hourly weather data for the Santa Barbara airport to find anomalies for the temperatures. Your objective for this chapter's challenge is to run the anomaly detection algorithm that we explored earlier in this chapter using the DBSCAN function from the [[Python (Programming Language)|Python]] sklearn.cluster library. I encourage you to experiment with the parameters and the function to see how this changes the model results. The weather data spans back 15 days relative from whatever date today is for you, so your data and results will look slightly different than mine. You can use it as a comparison to run the code both in [[Codespaces]] and [[Microsoft Excel|Excel]] if you refresh the underlying data at the same time. In Codespaces, I set up the ECL framework to get the data from the National Weather Service API for weather data, if you want to start there and run your anomaly detection on this data, or you can input it directly in Excel to see how it works in that environment, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (2), [[Microsoft Excel|Excel]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** dbscan (1), ecl (1), api (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively upbeat music) (1)

#### [Solution: Running algorithms with Python in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980&t=5)** - [Instructor] In [[Codespaces]], I already set up the ETL framework to get the weather data from the National Weather Service API. We discussed earlier that for security concerns, we want to get data into [[Microsoft Excel|Excel]] via the web data connector and [[Microsoft Power Query|Power Query]] instead of directly within [[Python (Programming Language)|Python]] code. However, in ids like this one, we'll make the request directly in our Python code through the request library. I'm going to first import the libraries that we want to use. We'll then run the steps to create the data frame object to use in the anomaly detection algorithm directly in the notebook. Next, let's create a NumPy array to store the temperatures that we'll use in the algorithm. We'll then reshape it to work in the algorithm by chaining reshape to the end of it. Next, let's call the DBSCAN function and assign it to a new clusters variable. Within this function, let's set our epsilon parameter to two and our minimum samples parameter to 12. We'll then call the fit_predict method on it to determine the anomalies on the temperature field that we earlier put into a reshaped NumPy array. And it's stored in the x variable, so we can just call it directly. Next, let's update our data frame
>
> **[1:39](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980&t=99)** to only display the UTC and temperature fields to avoid confusion about what fields we're using to determine these anomalies with. We're only selecting two of the fields because we still need to assign a new column for the anomalies. We'll call it Anomaly and we'll set it equal to clusters.
>
> **[2:09](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980&t=129)** Before we transfer this code into Excel though, let's check whether this returns anomalies by filtering the data frame only to the values where the anomaly column equals negative one. We see there are a few anomalies in this data. We changed the parameters in the DBSCAN function. We can see how this impacts the anomaly calculations quite easily by directly filtering them to display in the consolidated anomaly list. Like Python and Excel, Python notebook files are a sandbox environment for playing around with Python code in. Now let's transfer this code to the Python code in Excel. We first need to import the libraries into Excel that we're going to use. Even though [[Pandas (Software)|Pandas]] and NumPy are preloaded, let's import those along with the DBSCAN function from the sklearn library. We'll use all the libraries we saw in codespaces except the request library, because we already use Power Query to bring the data in. Now, let's build the Python code directly in Excel by modifying what we saw in codespaces to reference Excel cells instead of Python variables. We already have the data frame variable storing the data we want to use, so let's reference it directly in our new Python code cell. We'll first calculate x to store the temperatures in a reshaped NumPy array. Instead of referencing the variable df, we'll reference the cell C6
>
> **[3:45](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-running-algorithms-with-python-in-excel?u=76281980&t=225)** and we'll then reference the temperature column from this data frame. We'll then reshape it and return the results. We'll then calculate the anomalies using the DBSCAN function in the same way we saw in codespace. You can put your own choice of parameters in this function, but I'm going to set them to one and 12 to mimic the codespace Python code that we just ran. Now, instead of referencing x directly in the fit predict method on this function, we'll reference the NumPy array we just calculated in the row above. Once we create this array storing the anomalies, let's create a data frame to only include the UTC and temperature fields from the initial data frame object we set up in cell C6. We'll then assign the new anomaly column to it to make it three columns. Now let's see what the output looks like by expanding it. We see a few anomalies on the screen so far, and we also see the temperatures and the UTC time at which they occurred. I encourage you to play around more with this algorithm and the others in this course using both codespaces if you would like, and then writing the code in Python Excel to see how it compares and to see how you can use it as a playground and a sandbox in its own way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Microsoft Excel|Excel]] (8), [[Codespaces]] (4), [[Microsoft Power Query|Power query]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (11), make (2)
> **Env Vars:** dbscan (4), utc (3), etl (1), api (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** fit_predict (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Creating Visuals

[↑ Back to Table of Contents](#table-of-contents)

#### [Visualizing data](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-data?u=76281980&t=0)** - Data visualizations enable us to visually communicate trends, groups, and key outliers or anomalies in data, much like the intended outputs for [[Algorithms]] for machine learning and AI. But remember, just because you can do it in [[Python (Programming Language)|Python]] doesn't mean you should. Visuals are a great way to better understand algorithm outputs, which include finding trends, groups, or anomalies and outliers. There are loads of visuals out there that we can tap into, but I find there are three key visuals that I use most of the time when I can. Bar charts, for example, can help us identify the largest group or groups in our data line. Line charts can help us understand trends over time, for example, and scatter plots can help us identify groups, and they can also help us identify outliers and anomalies in our data. When we create visuals, we can use the outputs, whether they involve using Python or not, to build visuals. My own general guideline is to use the built-in [[Microsoft Excel|Excel]] chart options when I can, and to tap into Python code to build visuals when Excel doesn't offer the visuals that we need. Visuals can help us understand more about the data. They can also help us communicate the results to others. They can be tied directly to an algorithm, like a Dentro grand visual, or they can visualize the results of the algorithm through a known visual, like adding anomalies
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-data?u=76281980&t=94)** to a line chart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (2), [[Algorithms]] (1)
> **CLI Commands:** python (3), find (1)
> **Analogies:** for example (2)
> **Speakers:** - data (1)

#### [Leveraging Excel line charts](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-line-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-line-charts?u=76281980&t=0)** - [Instructor] When we're working with [[Microsoft Excel|Excel]] charts, there are a few key peculiarities to keep in mind to make these workflows easier. In line charts and scatterplots, for example, the x-axis is categorical and not numerical. It's helpful to sort the axes and the data table or pivot table beforehand, so these order labels flow into the chart itself. We can use legends in Excel charts, but a separate series rather than using the labels in a single field to apply color groups to the data points. Excel charts also interpret blank values as zeros, which means we want to put NAs, for example, in these empty cells. Let's first create a line chart for the temperature anomalies over the last several years. (inhales) We can reference the values and the data frame object that we expanded into a table in Excel formulas of their own. We'll add a column to this table that we'll call, Label. To display the anomalies on the chart at the point at which they occurred and the value they occurred at, we want to create an Excel formula to say that if the value in this row's column E equals negative one, then it's an anomaly. We then want to give it the value of the temperature on that day. Alternatively, we'll say that if the value in E equals zero, then we'll have this formula return a blank. Let's then copy this formula down, so it covers all 1000 rows in this table. (inhales) (keyboard clicking) Let's then put the results
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-line-charts?u=76281980&t=92)** of our anomaly detection algorithm in a line chart. We'll highlight the columns for the date and temperature, and then hold down the Control key and arrows to select the Label column we just created for this table. The Label column is what we'll use to label the anomalies, not the anomaly flag column we created with the help of [[Python (Programming Language)|Python]] code. This is because we want to display the anomaly at the temperature at which it occurs on the y-axis. Once we highlight these cells, then in the Insert menu, let's insert a line chart that includes these three fields. Excel automatically creates a line chart. If the data isn't what we expect to see in the line chart, we can make adjustments to the selected data by right-clicking on the chart and choosing Select Data from the dropdown menu. Our line chart displays the data we want to see. We just need to do some formatting and updates to make it appear the way we want it to. First, I'm going to make this chart a bit bigger so we can see it on the entire page. I like displaying the anomalies as orange because then they pop out against the backgrounds. We'll select the legend on the bottom and we'll choose to delete it. We already see the legend values and labels in the line chart, and it's not particularly helpful in this scenario. Let's also rename the chart, Temperature anomalies determined through the DBSCAN algorithm. (keyboard clicking) Notice the orange anomaly series represents values
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-line-charts?u=76281980&t=187)** that are blank as zeros. If we hover over them to display tool tips, we see that it displays a zero as a value when it should be a blank. The tool tips are a very neat feature that are a bit newer to Excel, and I really like using them for instances like this. (inhales) To fix this issue, let's suggest our label formula that identifies the anomalies, so that instead of returning an empty blank string, it returns the NA function from Excel. We'll then copy the formula down for all the rows in the table. We now see a line chart where the orange points annotate the anomalies, so they jump out within the visual immediately when we look at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), python (1)
> **UI Navigation:** select the (2), dropdown (1)
> **Analogies:** for example (2)
> **Non-Speech:** (keyboard clicking) (2)
> **Env Vars:** dbscan (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging Excel scatter plots](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=0)** - [Instructor] Next, let's create a visual for the predicted outcomes of the KMean clustering algorithm. Like the anomaly detection line chart we just created, in order to display the clusters separately with different colors in the visual, we need to first separate the labels into their own individual series. We ran the KMeans algorithm with two clusters, which return cluster labels of either zero or one. We'll first create a new column called "cluster zero" to say that if the result in column F has a value of zero, then it will return the high temperature value in column E, otherwise, it will return the NA [[Microsoft Excel|Excel]] function. And because this cluster is one, I'm actually going to copy this one over as an example to reference cluster one. I'm going to say that if G17 equals one, then we return F17. There's a problem with their cell references here, but the good news is that it's a pretty straightforward fix to make. We'll first update our column reference for the first condition to say that if our cluster column equals one, we're going to return the high temperature. As we copy our formulas over, we want to continue to return the columns in this position, so let's fix column F so it doesn't move as we copy the formula over,
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=94)** and we'll do the same for column E. The other thing we want to do here is to make it possible to use the column name referencing the cluster in our cluster labels. First though, we'll add three more columns for our clusters. We're going to create a sandbox environment to make this fun to work with later, but we first want to create five columns for the cluster labels by adding "cluster 2", "cluster 3",
>
> **[2:04](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=124)** and "cluster 4". Even though we only have two clusters right now, when Excel sets up the chart, it will just ignore the values of NA in these columns. The other thing we want to do in our cluster label calculation, we want to set up the formula to reference the number at the end of the cluster label. To set this up, let's use Excel's right function on the column name to extract the right most character, so this returns a single character when we use this function. We'll then make this formula fixed so that as we copy the formula down, the fixed reference for the row number, in this case row 16, will stay fixed as we copy the formula down the rows in this column. After we update our formula, notice it still doesn't return any results. This is because we need to add the value function around our text extraction function to get the cluster number so that it matches the numeric values for the clusters in column F. Once we confirm this formula works, let's copy it to the [[Representational State Transfer (REST)|rest]] of the columns in this row, and we should see that only column H returns values. We'll then copy this formula down to the remainder
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=222)** of the rows in the table.
>
> **[3:50](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=230)** And notice that we're just copying the formulas and not the formatting. We can format our NA results, so they appear in white text, but I personally like to make them visible so I can see them and viscerally understand what's going on in the Excel sandbox like this. Now let's create a visual. We'll select the low temperature field, and we'll also select all the cluster columns we just created by holding down the control shift and the arrow key to select these six different fields. We'll then insert this as a scatterplot. Let's also change the name of the chart to "KMeans Clustering Output". Actually, I'll call this "Algorithm". Once we create the scatterplot, we see the colors associated with the cluster appear within the visual. Let's also make these points smaller by formatting the data series and then for the marker, let's make them a bit smaller so they stand out more against each other.
>
> **[5:06](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/leveraging-excel-scatter-plots?u=76281980&t=306)** We'll do the same for both of the colors that are currently in the visual. We see here how powerful Excel charts are. We'll continue to work with these charts in this chapter to create some neat interactions that we can do directly in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (7)
> **Env Vars:** g17 (1), f17 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Configuring Python in Excel with dynamic parameters](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/configuring-python-in-excel-with-dynamic-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/configuring-python-in-excel-with-dynamic-parameters?u=76281980&t=0)** - [Instructor] Now let's have some fun in the [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] sandbox environment by making our [[Algorithms]] and visuals dynamic. The K means clustering model currently sets the number of clusters to two. We fixed it in the Python formula when we created the K means object, but we can make it dynamic by having it referenced another cell in our Excel model. We see there's an orange cell in the middle of the K means modeling steps. This is where we'll input the number of clusters. Because I set the maximum number of clusters for the scatter plot to five through five series in the chart, I already validated the cell, so it's a whole number between one and five. If we enter six or 2.5 for example, then it throws an error message in Excel. In the K means modeling process, we can use an elbow chart to determine the optimal number of clusters. That's out of the scope of this course, however, but there are courses in the library that talk about this topic. Instead, let's use this dynamic input to visualize how the K means algorithm works. We'll set the K clusters variable equal to five, so we can use it in our K means model. Let's adjust the formula for the K means object by going into the K means function. We'll reference the value in the orange cell in cell C9. Now, when we change the number of clusters in the orange cell, let's see if the output that it has on the clustering algorithm diagram for K means. Let's move our plot so we can see it in the same space.
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/configuring-python-in-excel-with-dynamic-parameters?u=76281980&t=98)** Now when we change the number of clusters in the orange cell, we see it updates the K mean scatterplot by moving the boundaries for the clusters in the data. Now let's do the same for the anomaly detection algorithm. The DB scan function currently uses the parameters where EPS equals one and the min samples equals 14. Let's update our DB scan object in the same way we did for K means by replacing the fixed parameters in the function with their respective values in the orange cells. Let's move our line chart up so we can see it in the same space as these two parameters. If we change it to two, for example, we see there are fewer anomalies, and if we change the minimum samples to 28, we see how this impacts the anomalies that we see on the line chart. Another neat trick that we can do in Excel is to reference these parameters in the chart title. Just outside the line chart, let's create a formula for the title. We can later hide it in our Excel model, but I want to make it visible our examples so we can see how it works and we can tell that it's there. We'll set this formula in the cell equal to the texturing of the current title on this chart. We'll then add a colon followed by EPS equals and a space.
>
> **[3:15](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/configuring-python-in-excel-with-dynamic-parameters?u=76281980&t=195)** We'll then use an ampersand to reference the EPS parameter in cell C9. We'll then add another ampersand to reference the text for the min sample input, and we'll reference cell C10, which contains the parameter we want to use. Now let's set the name of our line chart equal to this. We'll click on the chart title first. Next, let's navigate into the formula bar where we want to say equals, and we'll set this title equal to the cell that stores the title, which is C13, and we'll confirm this formula in the same way we would for a regular Excel formula. We can then update our title as needs be, as well. This gives us a dynamic title to go in our dynamic line chart. We see the title as well as the anomalies change as we change the parameters in the orange cells. Similar to the K means modeling, we now see the number of anomalies on the line chart change as we adjust the input numbers according to the ranges that are set up in the validation. It's a very neat and quite fun way to play around in Excel with the help of Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[Python (Programming Language)|Python]] (3), [[Algorithms]] (1)
> **CLI Commands:** python (3), make (2)
> **Env Vars:** eps (3), c10 (1), c13 (1)
> **Analogies:** for example (2), similar to (1)
> **Versions:** 2.5 (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating Python visuals](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/creating-python-visuals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/creating-python-visuals?u=76281980&t=0)** - Common libraries for creating [[Python (Programming Language)|Python]] Visuals include maplotlib and seaborn. There are also libraries that include functions for creating data visualizations like scipy and [[Pandas (Software)|pandas]]. Let's explore a few of them. Let's use our average city temperatures again to create our first Python visuals. We first import the libraries we want to use to create Python visualizations. We import the dendrogram function from the cluster section of the scipy library, as well as the pyplot section at the matplotlib library, and the entire seaborn library. I've already run this code along with the steps for the ETL framework to get the data into the model. We can now create a visual with it like a bar chart. In this first example, I'm going to tap into the matplotlib functions that are available as part of the pandas library as well. Let's create a horizontal bar chart to rank the average temperatures by California City. For those familiar with MATLAB, matplotlib uses much of the same logic. We first create a bar chart with the bar H function on the average temperatures. Because we already set up the data frame DF with the station name as the index, it uses these index values as the data labels. It also sorts the temperature values from largest to smallest. In addition, this code also taps into some of the matplotlib formatting options like adding a title. Let's run this code to see what it displays. This returns a bar chart to tell us
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/creating-python-visuals?u=76281980&t=96)** that Burbank has the warmest temperatures of the cities we're looking at, and San Francisco has the coolest. As we saw earlier in this chapter, [[Microsoft Excel|Excel]] offers a lot of powerful visualization options just from the charts that are built into the application. I think that out of the box, Excel visuals are better than the matplotlib ones because we have more flexibility with the formatting and they're already built into Excel to start with. It's not always the best approach to use Python visuals. Just because we can use Python visuals, that doesn't make it the best approach, especially if we're centering our work in Excel like we are in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (2)
> **CLI Commands:** python (5), make (1)
> **Env Vars:** etl (1), matlab (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - common (1)

#### [Visualizing hierarchical clustering with dendrograms](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=0)** - [Instructor] One of the benefits of using [[Python (Programming Language)|Python]] visuals is that it enables us to tap into visuals that we wouldn't otherwise be able to natively create in [[Microsoft Excel|Excel]]. Dendrograms are a great example of these visuals. This order bar chart gives us an idea of what we can expect in our next visualization that will create in Python. We'd expect Burbank and Bakersfield, the hotter cities in this data, to be grouped together. While we expect cooler cities like San Francisco, Santa Barbara, and Sacramento would be grouped together at the other end. We already calculated the distances as output for one and two dimensional data in the previous chapter for clustering [[Algorithms]]. Let's then call the dendrogram function on these distance objects. Within the dendrogram function, we call our one dimensional distance object first. To display the plot, we add plt.show for the last line of Python code in our cell and run it all together. Dendrograms are visuals that look a lot like trees with paired connections between each of the data points until they all pair up together once it iterates through the entire algorithm. It visualizes how closely related different data points are. We see that we have the labels for this dendrogram. However, if we just run the dendrogram function on the distances, we don't see these labels.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=95)** Setting the labels parameter equal to the stations representing the cities makes our dendrogram clearer to see. We also see how we've changed the colors and the orientation of the dendrogram using the formatting options. I encourage you to experiment with dendrogram formatting yourself if you're interested. Remember how we noted that Santa Barbara and San Francisco were two of the cooler cities in California? We see the dendrogram groups them together at the bottom of the visual. We'll then repeat the same steps with the two dimensional data and its distances by putting it into a dendrogram in the same way. Notice that this output measures that we're calculating the two dimensional distances and it doesn't have anything to do with the actual appearance of the dendrogram. We can create a dendrogram that shows the relationship between the fields for the temperatures. To do so, we'll create a dendrogram through the Seaborn library using the clustermap function. Let's [[Zoom]] out a bit to see the entire chart. Running this visual creates a visual that's really similar to the dendrogram that we created using the dendrogram function from the SciPy library. It also adds the element of a color gradient to distinguish the magnitude of temperature differences between the individual cities for the low average and high temperatures for each city. Let's copy the Python code from the one dimensional dendrogram
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=187)** in [[Codespaces]] so that we can paste it into Excel.
>
> **[3:16](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=196)** Let's first note in the dendrogram's tab that we're using the Seaborn Matplotlib and SciPy libraries for these visuals. Let's start by creating the one dimensional dendrogram in Excel. We'll paste our example code that we copy from Codespaces. We'll swap out the one dimensional distances variable with the distances object in cell C29. We'll also replace the index column of the DataFrame variable with the object in cell C17. We get an error here. If we open this up to show the error message, we can get a hint about perhaps where the error comes from. Now if I look up at the location's cell, it returns a DataFrame. I actually want to get the index from the DataFrame. So after the labels parameter, which I set equal to the station's name and specifically the DataFrame that it creates that uses the stations as the index, I then want to reference the index of the DataFrame instead of the entire DataFrame. Now we see that the code works. Python returns an image object. From here, we can right click on it. Then choose display plot over cells. We now see the Python visual
>
> **[4:49](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=289)** created directly in Excel. The formula itself remains under the plot image. Let's also create a visual for the two dimensional dendrogram. We'll copy this code, then put it in cell I40. This time, we only need to swap out the reference distance calculations, which are now in I29.
>
> **[5:27](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=327)** Let's also create the cluster map visual from the Seaborn library. And here, we'll reference the locations DataFrame and we'll set our colors equal to Oranges.
>
> **[5:53](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/visualizing-hierarchical-clustering-with-dendrograms?u=76281980&t=353)** And again, we'll expand to display the plot over the cells. Now if we find that our image is too big, we can simply click on it and drag it to size it to the size that we want it to be. I recommend holding down the Shift key as you resize it so the proportions of the image remain the same. Now any updates we make to the underlying data in Excel will be reflected in the dendrogram visual that we created. This is a great example of how Python can expand our Excel capabilities rather than perhaps making them more complicated along the way. It adds functionalities to Excel that otherwise wouldn't exist by writing Python code to create really interesting visuals like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Microsoft Excel|Excel]] (7), [[Codespaces]] (2), [[Algorithms]] (1), [[Zoom]] (1)
> **CLI Commands:** python (8), find (1), make (1)
> **Env Vars:** c29 (1), c17 (1), i40 (1), i29 (1)
> **UI Navigation:** click on (2)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Breaking down time series models into components](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=0)** - [Instructor] We can analyze Time Series Models by time Units, like year, month, day, or hour. We can also break them down into separate components for trends, seasonality, and anomalies and outliers. [[Python (Programming Language)|Python]] has libraries like stats models that enables to break down the components of time series models through functions like seasonal_decompose. Let's import this library, as well as Matplotlib into our model, in addition to the [[Pandas (Software)|Pandas]] and NumPy libraries we're already using. I already ran all the steps in the ETL framework section to create a daily data frame object DF, and a monthly data frame object called monthly that we can use in our time series models. Let's then reference the average temperature series from the data frame in our seasonal decompose function. We'll create a new variable called series and set it equal to the average temperature from the data frame object DF. We'll also show only the most recent 1000 rows of data by chaining tail to the end of our series. We'll then create a result object to store the results of our seasonal decompose function that we'll perform on the series, the variable we just created. We'll set the model parameter to additive and the period parameter to 365 because we're using daily data. I encourage you to try this out on your own as well. Once the Python code assigns this output to the result variable, it then calls the plot function on it, followed by the plot.show function
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=93)** from the Matplotlib library. This displays a really neat visual that breaks down the initial time series model into three components. We see the original line chart on the top. Under it, we see the trend, seasonality, and the residuals. This chart looks a bit odd though, especially when we look at the residual section and the trend section. Let's call the same seasonal decompose function on the monthly data frame this time. Using the same additive model parameter, we'll set the period parameter to 12 because there are 12 months in the year. I find this decompose time series model for the monthly data really fascinating because the results are really meaningful. If we start with a seasonality line chart in the third row, we see how the monthly average temperatures oscillate from hotter in the summer to colder in the winter almost in a perfect pattern over 10 years. The residuals can help us identify outliers or anomalies over this time period. Finally, we see the overall trends over time, which aren't a straight line like [[Linear Regression]], but rather what remains from the original data time series once we remove seasonalities and anomalies and account for them in the context of our analysis. In [[Microsoft Excel|Excel]], let's revisit our time series decomposition tab to learn more about these options. We already have a data frame storing the daily and monthly temperatures
>
> **[3:06](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=186)** for Santa Barbara. Now let's add a new object to the model to store the decompose time series data result. We'll use the seasonal_decompose function for this. Let's also note that we're using stats tools here. We'll then reference the series object stored in cell C9 in our model. We'll set the parameters equal to the same parameters we saw in Codespace.
>
> **[3:42](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=222)** Once we successfully create this decompose result object, let's then create the four part line chart over time to visualize the decomposed object. To do this will go to the plot section, set up Python code. We'll then reference the result object. We'll then chain the plot function to the end of it and use the Matplotlib PLT.show to change the end of it.
>
> **[4:17](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=257)** We'll then right click and choose to display the plot over the cells. Let's then repeat this process for the monthly data, except we'll refer to the objects in column H instead of column C, in this iteration of the time series decomposition. We can also see that as we call the function, we can choose the parameters to input. When we see them pop up, we can use the tab button to select them. And this one we'll set to 12 because it's monthly.
>
> **[4:58](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/breaking-down-time-series-models-into-components?u=76281980&t=298)** The time series decomposition is a really interesting visual because I really like seeing the breakdown of a line chart over time like this. We can't create a chart like this directly in Excel, and we certainly couldn't create one like this as efficiently as we could with Python code either. It's not that Excel isn't an incredible tool for ad hoc analysis, it's just that it doesn't do everything. Knowing when to scale out to languages like Python within Excel are a game changer for analysis like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (1), [[Linear Regression]] (1)
> **CLI Commands:** python (5), find (1)
> **Code Identifiers:** seasonal_decompose (2)
> **Env Vars:** etl (1), plt (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Challenge: Comparing time series components to anomalies](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-comparing-time-series-components-to-anomalies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/challenge-comparing-time-series-components-to-anomalies?u=76281980&t=0)** - [Instructor] Now let's tie what you've learned in this course with the final part of the challenge. We'll, again, continue to work with the hourly Santa Barbara weather data, focusing on temperature measurements. In the last chapter, you ran an anomaly detection algorithm on the temperatures to determine when these anomalies occurred. As we saw in this chapter, we can put time series data in a chart to visualize it. We can then break down this line chart into components for trend, seasons, and anomalies. Now, your task is to use time series decomposition on the same data to not only create a time series decomposition, but compare the anomalies seen in the residuals plot to the anomalies we calculated in the previous chapter. Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), as we saw (1), previous chapter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Comparing time series components to anomalies](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980&t=0)** - [Instructor] So how did it go? Let's explore how to create this output in code spaces first before translating it into [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] code. Let's first import the parts of the statsmodel library, as well as the matplotlib library into our model that we want to use in addition to the libraries we already imported into our solution. We already ran the steps to create the hourly data frame. Now let's create a result variable to store the output of the seasonal decompose function to reference the temperature field from this hourly data. We'll set the model parameter as additive and the period parameter to 24, because each day has a 24-hour cycle within it. We'll then follow the necessary steps we learned in this chapter to chain the plot function to the decompose result variable that's called result, and display the visual. Now in Excel, let's translate these steps. Let's first import the libraries that we used within the code spaces into our Excel file. Next, let's add a new object to the model to store the decompose time series data result. We'll use the seasonal decompose function that we just imported for this. We'll use the same parameters that we set up this model
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980&t=96)** with in our code spaces. We'll then create a plot on the decompose result to visualize what it looks like directly in Excel. We'll reference the decompose result instead of the variable this time, but we'll chain the same plot function to it, and put the code in to show the plot. Once we display this plot, we can then compare it to the anomaly detection algorithm we ran on the data in the last chapter. We'll go into our analysis tab, then we'll choose to add the label, and we'll say that if our anomaly field equals -1,
>
> **[2:30](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980&t=150)** then we're going to display the temperature. Otherwise, we're going to display N/A.
>
> **[2:42](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980&t=162)** We'll then choose the UTC and temperature fields along with the new label column we created to insert a line chart. We see that it looks kind of like an odd stepped line chart. So instead, I'm going to add an index column to the data and copy it down to the end of the cells. I'll then go into the chart, and I'm going to copy this to the visualization page, and actually edit it directly next to it from here. We'll right click and choose to select the data. Now for the categorical access, we're going to instead use
>
> **[3:39](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/solution-comparing-time-series-components-to-anomalies?u=76281980&t=219)** column B instead of column C. Once we update our chart, we can then compare it to the chart at the bottom for the anomalies. Now, you can put this in a few different locations, but I want to kind of get an idea of when these occurred. We see, for example, there's anomalies that occur around the same time about quarter of the way into our time series. We see our anomaly detection algorithm pick them up as orange points, and we see that there are analogous anomalies in a residual plot. Your line chart will likely look totally different, and that's as expected, because as we get newer weather data, the anomaly detection algorithm will update to reflect the most recent 15 days instead of the 15 days that you see here. Now we see how we can fit these different components of the [[Algorithms]] and the visuals together in an impactful way directly within Excel using Python code. It's a powerful functionality that enables us to extend Excel into the [[Data Science]] space. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1), [[Data Science]] (1)
> **CLI Commands:** python (2)
> **Analogies:** kind of like (1), for example (1)
> **Env Vars:** utc (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with Python in Excel](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/continuing-on-with-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms/continuing-on-with-python-in-excel?u=76281980&t=0)** - Now that you've seen how to use [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]], it's time to try it out on your own. You can use this functionality to create amazing custom visuals with Python code, run [[Algorithms]] to make predictions, and fix frustratingly messy data. It's a great sandbox environment for learning more about Python. And if you want to learn even more, check out other courses in the library too. Don't forget to follow me on [[LinkedIn]] for more content on Python, Excel, and other tools, languages, and topics. and check out my other courses in the LinkedIn Learning library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (2), [[LinkedIn]] (2), [[Algorithms]] (1)
> **CLI Commands:** python (4), make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - now (1)


## Instructor

- [[Helen Wall]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-in-excel-data-outputs-in-custom-data-visualizations-and-algorithms-4538083/codespaces)

## Skills Covered

- Python (Programming Language)
- Microsoft Excel
- Data Visualization

## Path Context

### In [[Advance Your Python in Excel Skills]]
← [[Data Cleaning and Manipulating with Python in Excel]] | **4 of 7** | [[Advanced Python in Excel- Data Analysis and Visualization]] →

## Appears In

- [[Advance Your Python in Excel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Visualization, Microsoft Excel
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Visualization, Microsoft Excel
- [[Advanced Analysis Using Python in Excel Copilot]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Working with pandas DataFrames]] — Python (Programming Language), Microsoft Excel

---

[↑ Back to top](#)