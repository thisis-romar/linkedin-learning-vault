---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-in-excel-data-analysis-and-visualization
url: "https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization"
duration_minutes: 48
duration: 48m
level: Advanced
updated: 12/4/2025
learners: 45318
skills:
  - Python (Programming Language)
  - Data Analysis
  - Microsoft Excel
  - Data Visualization
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-in-excel-data-analysis-and-visualization-4560553"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQENZljX71ArEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721771083260?e=2147483647&amp;v=beta&amp;t=NzkW1NlgfhULhS4HI4-zbAQZNMRODJgY5P7aBcmHf9c"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python in Excel Skills]]'
prev_courses:
  - '[[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]]'
next_courses:
  - '[[Advanced Python in Excel- Machine Learning]]'
path_nav: '[{"path":"Advance Your Python in Excel Skills","position":5,"total":7,"prev":"Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms","next":"Advanced Python in Excel- Machine Learning"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
  - skill/microsoft-excel
  - skill/data-visualization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Python%20in%20Excel-%20Data%20Analysis%20and%20Visualization.md)

![Advanced Python in Excel: Data Analysis and Visualization](https://media.licdn.com/dms/image/v2/D4D0DAQENZljX71ArEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721771083260?e=2147483647&amp;v=beta&amp;t=NzkW1NlgfhULhS4HI4-zbAQZNMRODJgY5P7aBcmHf9c)

# Advanced Python in Excel: Data Analysis and Visualization

> In this course, learn how to use Python to go beyond Excel’s limited functionalities to perform complex data analysis and visualizations. Instructor Sarah Om details how Python’s integrations with Excel bring new dimensions of functionality, allowing for more advanced data manipulation, automation, and visualization than ever before. Sarah shows you how to leverage Python’s powerful libraries for 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization) | 48m | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Do more with data using Python in Excel](#do-more-with-data-using-python-in-excel)
  - [What you should know](#what-you-should-know)
- [**1. Exploratory Data Analysis**](#1-exploratory-data-analysis) (3 videos)
  - [Data used in this course](#data-used-in-this-course)
  - [Data preparation for analysis](#data-preparation-for-analysis)
  - [Augment data: Turn trends into insights](#augment-data-turn-trends-into-insights)
- [**2. Trends**](#2-trends) (4 videos)
  - [Natural language processing](#natural-language-processing)
  - [Python or Excel?](#python-or-excel)
  - [Visualize trends](#visualize-trends)
  - [Final project: Step 1](#final-project-step-1)
- [**3. Predictions**](#3-predictions) (5 videos)
  - [Predictive tools: Shaping future strategies](#predictive-tools-shaping-future-strategies)
  - [ARIMA](#arima)
  - [Advanced visualizations](#advanced-visualizations)
  - [Outlier detection](#outlier-detection)
  - [Final project: Step 2](#final-project-step-2)
- [**4. Dashboard for Consistent Monitoring**](#4-dashboard-for-consistent-monitoring) (3 videos)
  - [Build an effective dashboard](#build-an-effective-dashboard)
  - [Build an effective dashboard: Apply your skills](#build-an-effective-dashboard-apply-your-skills)
  - [Final project: Step 3](#final-project-step-3)
- [**5. Final Project**](#5-final-project) (1 videos)
  - [Final project walk-through](#final-project-walk-through)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Do more with data using Python in Excel](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/do-more-with-data-using-python-in-excel?u=76281980)

> [!transcript]- Transcript

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Python (Programming Language)|Python]] (4), [[Data Manipulation]] (1)
> **CLI Commands:** python (4)
> **Speakers:** - have (1)
> **Non-Speech:** (upbeat music) (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/what-you-should-know?u=76281980&t=0)** - Before getting started, I recommend a quick refresher on the basics of [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] and having your environment set up with the Python formula feature enabled. As a part of this course, you'll be asked to complete a [[Capstone]] project. I'll provide guideposts and suggestions along the way on how you can apply the knowledge you've gained in each chapter. By the end, you should have a project worth showcasing that contains all of the skills that you've learned. You can find more details about the capstone project and access the dataset on the [[GitHub]] repo. You can fork the repo and upload your work directly to your personal repository. From there, I encourage you to use this as a tool to share and get feedback on your project to continuously improve. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Capstone]] (2), [[Microsoft Excel|Excel]] (1), [[GitHub]] (1)
> **CLI Commands:** python (2), find (1)
> **Prerequisites:** getting started (1), set up (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - before (1)


### 1. Exploratory Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Data used in this course](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-used-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-used-in-this-course?u=76281980&t=0)** - [Instructor] The data that we will use for this course is open source crime data for the city of Los Angeles, taken from the Los Angeles Open Data Catalog. This dataset contains incidents of crime dating back to 2020. I have made some minor adjustments to the dataset, including dropping and modifying some of the variables to meet [[LinkedIn]] content rules and regulations. Additionally, to help the code run quicker, I have sampled the dataset to 5% of the original. If you'd like to leverage the work in this course on the original dataset, you can download it directly from their website at data.[lacity.org](https://lacity.org). There, you can also learn more about the data provider, the refresh rate, as well as descriptions for each column. Let's take a look at the adapted dataset together. We've preserved things like the DR number. This is the case number for each incident, and it's unique per row. We also have things like the date and time of the incident, the city, description of the incident, and other interesting features. We'll work on producing some interesting insights, leveraging this data in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **URLs:** [lacity.org](https://lacity.org) (1)
> **Speakers:** - [instructor] (1)

#### [Data preparation for analysis](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=0)** - [Instructor] Let's dive into the dataset to understand where the data might need cleaning or transformation. If you'd like to learn more about the importance of data prep, cleaning, and domain knowledge prior to analysis, you can refer to my course, "[[Python for Data Analysis- Solve Real-World Challenges]]." Let's begin by creating a new sheet and label it Initial Data Checks. From here, we can define our data. I'll also add rows and columns where we'll look at our shape. In cell C3, we'll open up a [[Python (Programming Language)|Python]] cell and start to define our data. We can go back to our input sheet and use Ctrl + Shift + Left and Down to capture our dataset. As you can see, it's stored as a Python DataFrame, and we can hover over the DataFrame to see what's been stored. This looks right. In the following cell, we'll open up another Python cell and type in data.shape, and return the output as an [[Microsoft Excel|Excel]] value. Now, let's check for missing values. We can do this simply by looking at where there are null values and dividing by the length of the dataset. Again, we'll return an Excel value. This returns a percentage of missing values by variable.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=94)** We can easily convert to percentages and visually inspect the output. We noticed that there are several columns with many missing values, Cross Street and the Crm Cds 2, 3, and 4. Let's delete this and use the information we gained to help clean our dataset. We'll start by defining the columns we'd like to preserve.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=125)** We'll store these here. And we can always come back and change this later if we change our mind. And here, we'll begin to define our clean function. For now, all we're doing is subsetting the data and returning the new DataFrame. The formatting in this cell is still showing up as a percentage, so I'm going to just clear this out. Next, we'll return our cleaned data.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=167)** We'll also need to make some minor adjustments to the data types, which we can easily do within our function as well. We'll need to convert the Date Rptd column to a date type, since right now, it's stored as a string. We can see this by checking the data type of a single Date Rptd cell.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=190)** As you can see, it returns a string. So let's add that date conversion into our function. Let's open up our data prep function. Open up a couple new lines, and add in this conversion. So this will take our Date Rptd variable and convert it to a datetime, and specifically, a date format. We'll also add some other useful features that might help us later. Let's take one final look at our DataFrame.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/data-preparation-for-analysis?u=76281980&t=231)** It looks great. We'll leverage this more later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (2)
> **CLI Commands:** python (4), make (1)
> **Cross-References:** go back to (1), later in (1)
> **Speakers:** - [instructor] (1)

#### [Augment data: Turn trends into insights](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/augment-data-turn-trends-into-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/augment-data-turn-trends-into-insights?u=76281980&t=0)** - [Instructor] Using the features we created in the last video, let's produce a yearly time trended view to start to understand some of the time trends. In a couple lines of code, we can pivot and plot. We'll return an [[Microsoft Excel|Excel]] output and also expand. We are seeing a jump in 2022, and we might be interested to understand why crime in LA has gone up so much since the pandemic. Was this partly related to COVID, and are 2020 numbers just deflated due to lockdowns? Maybe the increase isn't real, or maybe it was due to population increase. Let's see if we can unpack these trends. Thankfully, we have sources that track the Los Angeles population, and we can use those data sources to map or join to our dataset to calculate a per-capita rate. Here, I'll leverage the Los Angeles Almanac for population data. For reference, I'll copy and paste data that spans back to 2010. Here, I've added a new sheet and pasted over the data with some minor edits. Now, let's bring these two datasets closer together, starting with the time series data. Let's return back our time series data frame and using the SUMIF function to pull the population by year.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/augment-data-turn-trends-into-insights?u=76281980&t=115)** Let's bring the point home by adding in a visualization of what we just found. We can choose to add in another [[Python (Programming Language)|Python]] chart or leverage Excel here. Let's do the latter, since simple charts can easily be produced in Excel. Here, we'll add in a double-axis chart. We'll start by highlighting our data frame. Going over to Insert and choosing a Combo chart. We'll select Data, uncheck Year, add in our axis labels, and click OK. We'll go back into Change Chart Type. Make sure that we have a line chart for both of our metrics and use a secondary axis. We'll click OK. We'll also go through and improve some of our formatting here. For ease of readability, we'll move the charts closer together and also add a helpful title.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/augment-data-turn-trends-into-insights?u=76281980&t=185)** Looking at this trend, it's clear that LA was contracting versus growing in the years following the pandemic. This is confirmed by articles which suggest that rising prices are a reason why Angelenos are leaving. Most of our formatting at this point looks great. We can do some minor things, like reducing the font size on our chart, moving over our data table, improving readability by adding some colors to our chart, as well as some borders and removing grid lines. Great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), make (1)
> **Env Vars:** covid (1), sumif (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 2. Trends

[↑ Back to Table of Contents](#table-of-contents)

#### [Natural language processing](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/natural-language-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/natural-language-processing?u=76281980&t=0)** - [Instructor] In this video, we will highlight some of the power of [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]], leaning on Python's text analysis capabilities, though we will barely scrape the surface as Python has some very powerful libraries and capabilities. We will start with segmenting the incident descriptions into different categories based on themes. Going back to our input data, this is the description variable that we're going to be categorizing. Upon inspection of the various descriptions, we can formulate a dictionary of category mappings. Let's put a version of what this may look like in our Initial Data Checks tab. You can see that each key value pair consists of a theme and associated keywords. Once we have this mapping, which is a critical step in the segmentation process, we can then begin to define our categorized function. (keyboard tapping) This categorized function efficiently labels crime descriptions by converting them to lowercase for case sensitive matching and iterating through our dictionary of categories and their associated keywords. If any keyword from a category's list is found in the description, the function assigns that category. If no match is found, it defaults to other. We can apply this function to our new description variable
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/natural-language-processing?u=76281980&t=94)** directly in our data prep function. Before we do that, we'll need to make a small change to the order of our parameters and functions since the data prep function will depend on the outputs we just defined. We'll open up our data prep function and add in the categorization.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/natural-language-processing?u=76281980&t=120)** Once it's complete, we can hover over our data frame to ensure that the categories have been reflected appropriately. Python has some very powerful [[Natural Language Processing (NLP)|natural language processing]] libraries that allow us to apply many advanced techniques such as NLTK, Spacey, Gensim, and others. Some common steps in natural language processing that we can apply here are tokenization, which refers to the breaking up of a sentence into words or a paragraph into sentences. We can remove stop words, which are common words like the, is, and and, which don't add much meaning to a sentence. Removing stop words means taking out these common words from the text to focus on the more meaningful words. Lastly, lemmatization. This is like finding the root form of a [[Microsoft Word|word]]. For example, walking, walks or walked all come from the root word walk. Lemmatizing a word means converting it into its base or root form so that different [[Forms]] of the same word are treated as one, which can be helpful for text analysis. Since the current version of Python in Excel doesn't allow you to download the data sets generally required by NLTK, I'm sharing some example code that could be used for text analysis once NLTK is supported. Great work, in this video, we reviewed two different ways to work with text data by leveraging Python in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Word|Word]] (4), [[Microsoft Excel|Excel]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Forms]] (1)
> **CLI Commands:** python (6), make (1)
> **Env Vars:** nltk (3)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Python or Excel?](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/python-or-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/python-or-excel?u=76281980&t=0)** - [Presenter] Let's bring what we've developed in the last video to life through some visualizations. There will be various types of visuals we can produce and at every step we'll have options on which tool to leverage. [[Microsoft Excel|Excel]] has extensive visualization capabilities, while [[Python (Programming Language)|Python]] offers visualization libraries that allow us to customize nearly every detail in a chart. So you'll always have the option to move back and forth between different tools and as Python capabilities within Excel expand, you'll have even more flexibility with tools like Plotly, geo-plotting, and other advanced visualization techniques. This integration will enable us to create more dynamic and interactive visualizations, enhancing our ability to analyze and present data effectively. For simple charts, we'll want to use Excel capabilities, since it might be unnecessary to produce extra code unless there are clear motivators like consistency or deep customization needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [presenter] (1)

#### [Visualize trends](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/visualize-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/visualize-trends?u=76281980&t=0)** - Let's apply what we've learned in the prior video to make some decisions on [[Python (Programming Language)|Python]] or [[Microsoft Excel|Excel]], given various charts we'd like to plot. For example, if we're interested in visualizing reported incidents by category over time, we have a couple of options. Since this will be a simple line plot, let's leverage Excel. On a new tab, let's start by building a pivot table with the total number of reported incidents by year and category. Great. Now that we have our pivot chart, let's go up to our ribbon and insert a line chart. We will right-click, switch rows and columns, remove year, and change our axes labels, and click OK. We notice that the jump in 2022 incidents looks to be driven by theft. Let's add that as our chart title. From here, we can right-click, change chart type, and toggle between any other visualization option. For now, we'll keep it as a line chart. Now, instead, let's say we were interested to know what time of day or week most crimes occur. To achieve this, we might be looking to add a heat map, which may be best suited for Python and a seaborn heat map. Let's start by adding in day of week and time of day variables into our crime dataset. Adding day of week is as simple
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/visualize-trends?u=76281980&t=95)** as using a string from time method. And since our time OCC variable is recorded in military time, and we can confirm this using the LA city landing page, we can bucket the timestamps accordingly in our data prep function.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/visualize-trends?u=76281980&t=124)** We can hover over our data frame to ensure that this has been accurately reflected. We have time of day, day of week. Now, let's build the base data frame by creating our pivot table. You'll notice, I've added column order and index order to ensure readability of our heat map pivot table. I'll just scoot over here. And now, we can leverage our out of the box heat map functionality in seaborn to plot our heat map.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/visualize-trends?u=76281980&t=166)** As you can see in the title, I've added the general insight here, so crime is gradually increasing as it gets dark. So towards the evening and nighttime, we can see that our heat map is showing higher incidents of crime, and we observe relatively lower crime rates on the weekends. I'm going to quietly improve some of the formatting on the sheet, removing grid lines, adding borders, and other small edits. Amazing work! We've successfully decided between Python or Excel, depending on the needs, and produce some pretty meaningful charts. Whether you're a part of the police force or a person in the community, the above charts can inform actions taken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (3), make (1)
> **UI Navigation:** right-click (2), toggle (1)
> **Env Vars:** occ (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Final project: Step 1](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-1?u=76281980&t=0)** - At this point in the course, we have learned some best practices for leveraging [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]], we've gotten some exposure to different Python libraries supported in the current release, and developed some meaningful insights as a part of our learning journey. Let's keep this going and put what we've learned to the test. I challenge you to continue to refine the data set, cleaning and transforming other variables. Take a deeper look into the input data for this course to find where there may be some interesting nuggets to uncover. You may be surprised at what you find in such a simple data set. And as you work through this first step of the [[Capstone]], I encourage you to always focus on the insights being generated from the outputs you're aiming to develop. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Excel|Excel]] (1), [[Capstone]] (1)
> **CLI Commands:** python (2), find (2)
> **Speakers:** - at (1)


### 3. Predictions

[↑ Back to Table of Contents](#table-of-contents)

#### [Predictive tools: Shaping future strategies](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/predictive-tools-shaping-future-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/predictive-tools-shaping-future-strategies?u=76281980&t=0)** - Predictions are the bedrock of our expectations for the future, forming the basis for strategic [[Decision-Making]] and risk management. Through [[Forecasting]] techniques, we can glean insights from historical data to anticipate trends and plan accordingly. Moreover, outlier detection mechanisms act as our early warning systems highlighting potential disruptions or opportunities that require immediate attention. In today's dynamic landscape, embracing these predictive tools isn't just advantageous. It's essential for staying ahead and making informed decisions. Forecasting methods vary depending on the data and the context. We have qualitative forecasting. These are based on expert opinions, surveys, or [[Market Research]], and are usually useful when historical data is scarce or when there's significant qualitative factors at play. We have [[Time Series Analysis]], which analyzes past data to make future predictions. We have methods like moving averages, exponential smoothing, and ARIMA. We'll cover more on ARIMA in the next video. We also have regression analysis, which predicts future outcomes based on relationships between variables, useful for understanding how one variable changes when another variable changes. And lastly, we have run rates which extrapolate current trends into the future based on historical data. It's a simple method, but can be very effective for short-term forecasts
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/predictive-tools-shaping-future-strategies?u=76281980&t=93)** when historical data is relatively stable. In the next couple of videos, we'll leverage ARIMA modeling to predict future crime, and I'll introduce isolation forest as a mechanism for anomaly detection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (3), [[Decision-Making]] (1), [[Market Research]] (1), [[Time Series Analysis]] (1)
> **Env Vars:** arima (3)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Speakers:** - predictions (1)

#### [ARIMA](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/arima?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/arima?u=76281980&t=0)** - [Instructor] ARIMA Modeling is a statistical technique used for making predictions based on time series data. It combines information about past values and how they've changed over time to forecast future values. The AR in ARIMA stands for autoregressive, which means it looks at how previous observations relate to one another. The I stands for integrated, which refers to making the data stationary or more consistent for analysis. The MA stands for moving average, which helps smooth out random fluctuations in the data. Thankfully, one of [[Python (Programming Language)|Python]] for [[Microsoft Excel|Excel]]'s out of the box libraries, Stats Model, supports ARIMA modeling. To set up our model predictions, we'll first need to define the data parameters and look forward time horizon. For our parameters, we can use some base assumptions so we can always adjust or adapt later. If you'd like to learn more about ARIMA modeling and tuning, you can refer to the [[Data Science]] Foundation's [[Data Mining]] and Python course. Here we'll define our inputs as 1 1 0 and use a time horizon of 14 days. Now let's begin to define our model, starting with some import statements. Here, we'll explicitly import our ARIMA package. If we wanted to learn more about which libraries come out of the box in this environment, we can go up
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/arima?u=76281980&t=94)** to our formulas tab, click on initializations and preview which libraries come out of the box in this environment. Let's come back to our command prompt and continue defining our model. (keyboard clacks) We'll use the parameters we defined above (keyboard clacks) and return our results. Great. Now we can make our predictions. (keyboard clacks) We'll define our ARIMA forecast (keyboard clacks) and use our fitted model to forecast using the steps defined above. We'll rename our columns (keyboard clacks) and return back our data frame. At this point, we can check that things operated as we expected by hovering over our data frame. Amazing work. These predictions will be critical for our understanding of incident rates, especially to identify any trends of growth or decline. But based on our output, we can see that the crime rates have stabilized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Excel|Excel]] (1), [[Data Science]] (1), [[Data Mining]] (1)
> **Env Vars:** arima (6)
> **Definitions:** stands for (3), is a  (1), refers to (1)
> **CLI Commands:** python (2), make (1)
> **Tools:** command prompt (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Advanced visualizations](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/advanced-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/advanced-visualizations?u=76281980&t=0)** - [Instructor] Now that we've produced some predictions, let's combine everything together into a visualization that can show us our historical trends along with our forecast. Visuals when done well, can be very impactful, spring people into action, and guide strategy. Let's work to pull it all together in a new predictions tab. We'll open up a [[Python (Programming Language)|Python]] cell and our goal here is to develop a dataframe that allows us to see our historical data along with our predictions. To do this, we'll add another column representing the ARIMA prediction that doesn't apply to our historicals, but we will need to union the dataframe later. We'll take a similar approach for the ARIMA forecast dataframe. And lastly, we'll union them together.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/advanced-visualizations?u=76281980&t=63)** Let's take a look at our Python dataframe as an [[Microsoft Excel|Excel]] output. Great. Taking a look at the output, we can see that we have all of our historicals as well as the predictions at the very end, so it did exactly what we expected. We'll fix this error by filling in our missing values and also filtering to more recent data. I will use 95% of the dataset and return back just those.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/advanced-visualizations?u=76281980&t=105)** I'll also go through and rename the columns really quickly and fill missing values.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/advanced-visualizations?u=76281980&t=119)** Awesome. As we can see, we're starting closer to the beginning of the year instead of all the way back to 2020, and if we go all the way down, we see that our predictions are here as well, and we filled in all of our NAs as zeros. From here, we can add a line chart. In this case, we'll leverage Python's Seaborn library for a more advanced visualization goal. We'll aim for in figure annotations in our forecast and despining the chart. In the code that I've just pasted here, we are iterating through the two time series and adding in annotations as needed, as well as despining at the bottom. Let's take a look at what this looks like. This is a great start. There are many more customizations that we can make to this chart, and you can continue to play around with the code to add things like a title, subtitle, access labels, et cetera. Additionally, now that you have the infrastructure for this model as well as the plot setup, you can work to iterate and improve your forecasts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** python (3), make (1)
> **Env Vars:** arima (2)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Outlier detection](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=0)** - Isolation Forest is a machine learning algorithm designed for anomaly detection. It works by isolating anomalies, or outliers, within a dataset by constructing a forest of [[Decision Trees]]. Unlike traditional methods that rely on normal data points being densely packed together, the Isolation Forest focuses on isolating anomalies that are few in number and differ significantly from the majority of data points. I find anomaly detection especially helpful when aiming to democratize access to information within an organization. Usually, the subject matter expert is the most familiar with diagnosing abnormalities in the metrics, but by allowing machine learning models and automation scripts to identify those abnormalities, you can now allow anyone to identify a deviation in the metrics. One difference in this application versus others we've run so far is that we'll be using a machine learning approach. So for this, we'll need training and testing data. Let's simply define this as 95% of our data, which, for the range we have now, will cut this off at the start of the year like we saw in the last video, which will also be convenient for plotting, as well. We'll define our X train, leveraging our historical data,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=95)** and the 95%.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=105)** Similarly, we'll define our X test and it'll be everything else. Wonderful. Here we can see we have the X test data, which starts from about the beginning of the year. I'll go up to formulas. Under calculation options, I'll change it to Partial so we don't have to run everything every time. Next, we'll need to train our model. Before we do that, we'll need to import Isolation Forest.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=154)** We can instantiate our model with some basic parameters
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=170)** and proceed to fit our model.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=182)** Awesome. The last step for us is to predict on our testing set. Let's do that now.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=206)** After we've run our predictions, we can take a look at the output. All normal data points will show up as a positive one, and any abnormal outliers will show up encoded as a negative one. After we've made the predictions, we could do something very helpful for ourselves, which is identifying and labeling those data points that are positive or negative deviations and label them as such. So let's go ahead and do that. We'll start by defining the median metric value.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=244)** We will do this within our predictions code cell.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=256)** We'll use the training set to define what our median should be. We next add the median and predicted values to our test data frame. It'll look something like this. Our predictions are in this preds array, and our median is what we just calculated above. Now the next thing we'll do is label positive or negative outliers as above or below, based on the logic here. So if it's negative one and less than the median, then it's below, and if it's negative one, meaning it's an outlier, and above the median, then we'll label it "above". We'll go ahead and commit this code. We'll also return back anomaly for good measure.
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=320)** We can take a look at our data frame and see that we have our data points labeled as such.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=330)** At this point, we have everything we need to plot our trend along with the outlier labels. This is yet another chart that is much easier to produce in [[Python (Programming Language)|Python]], so let's use Seaborn plotting for this. We'll go over to our predictions tab and start our plotting. Here's the code that we'll use to make our chart. As you can see, we've added scatter plots for our above and below outlier data points and despined our figure.
>
> **[6:08](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/outlier-detection?u=76281980&t=368)** Let's make it a little bit bigger, and as we can see, this generally looks very good, showing that things are improving over time. Things look to have come down quite significantly since the beginning of the year as shown with the red labels, signaling things were worse than normal and the green data points, the signal that crime is coming down to a lower than normal level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), find (1), python (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - isolation (1)

#### [Final project: Step 2](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-2?u=76281980&t=0)** - With predictive capabilities in your back pocket, let's see if you can apply this knowledge to help refine our views for the LA City of your choice. See if you can modify the code for this chapter to return a filtered view for a city or neighborhood of LA. Hint, you might not have enough data points per city and might want to find a creative way to group the cities to produce a meaningful result with the data we have.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - with (1)


### 4. Dashboard for Consistent Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Build an effective dashboard](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard?u=76281980&t=0)** - [[Dashboards]] are essential tools that provide visual representations of complex data, and when done well, they can be actionable at any level in an organization. At the heart, they enable closer to [[Real-Time]] monitoring compared to ad hoc or one-off analysis and can help centralize information. They can also offer customizable features and interactivity for in-depth exploration and more of a self-serve style of consumption for end users. When constructing a dashboard, considerations that might influence the metrics and level of granularity will be the audience and the business questions that they or you aim to solve. Given our crime dataset, there are two use cases that stand out. For a member of the community, they may be interested in drilling into specific details of crimes in their communities, various hotspots or times to avoid being in specific areas. Whereas for law enforcement, they may be interested in understanding overall crime trends and how this may impact resource allocation, skills training, and things of that nature. With this data set and those considerations in mind, let's attempt to develop a dashboard that addresses the questions for the law enforcement persona. It's always best to start with questions we might be interested in answering and what types of actions we might want to take off of that data. For example, are we properly resourced based on the volume of crime?
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard?u=76281980&t=93)** Should we be hiring or are we well staffed? Are we servicing the right areas appropriately? And are we properly trained based on the types of crimes on the rise or on the decline? Based on this, we can construct something like the following, a dashboard that contains total incidents this week and last week, as well as the week over week change. We'll also want to include our forecasts with our incident rates as well as any outliers to help identify any abnormally high or low crime rates. We'll include an area view to address the question around resourcing by area, and lastly, we'll include a category view to address any skill gaps and help identify how things are evolving over time. Of course, this is just the beginning. There'll be many more views you can add to this dashboard to refine the insights. In the next video, we'll build this together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1), [[Real-Time]] (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - dashboards (1)

#### [Build an effective dashboard: Apply your skills](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=0)** - [Presenter] We've spent most of this course building the foundations for what we will leverage in this video. As we construct our dashboard, we'll always ensure that the most important stuff is at the top. We'll begin with the inputs, outlining the week horizons that we'll want to reference. For our purposes, we'll calculate one complete week ago, two complete weeks ago, and these two will be used to calculate a week over week view, as well as seven complete weeks ago, just to give us a time horizon that's relatively recent so that we can look at time trends a bit better. For one complete week ago, we'll add in the code. We'll first start by defining our week's array and indexed to get our last full week. We'll keep going by defining our second complete week and similarly for our seven weeks ago. As we're going, you may see some warnings pop up, these are related to the predictions tab and is referring to the text being off of the visualization. You can ignore these for now. Now that we have our timeframes defined, we can now create our data sets, for one complete week ago and for two complete weeks ago.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=105)** At this point, we've defined our dates and our data frames, we can now begin creating our dashboard. We'll start with some formatting by merging some cells together so we can add values for the reported incidents one complete week ago, the reported incidents for two complete weeks ago, as well as the week over week change. These numbers are pretty straightforward to calculate by leveraging the date frames we created in the data prep file, so I'll go ahead and add them now. Also, make sure that we're returning [[Microsoft Excel|Excel]] values. I'll do some simple formatting here. Below this, we can add our forecast from the prior page, as well as the anomaly output.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=166)** Lastly, we will add by area and by category, week over week charts. Since the data will be very similar for these tables, let's develop a function and add it to our data prep tab.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=183)** This function will create a pivot table, fill in missing values, run our week over week calculation, and return a sorted data frame. Now that we have this function, let's add one more data set.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=205)** This will be our filtered view that just has last week and the week prior. We can now go over to our dashboard and start calculating our week over week views.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=224)** The first one we'll do is by area name, we'll return an Excel value. Great, now that we have this, I'm just going to hide this column, since the data actually just starts from column C and right adjacent to it, we'll add our by category view.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/build-an-effective-dashboard-apply-your-skills?u=76281980&t=256)** At this point, I'm going to make some small formatting changes, things like hiding the extra columns, center lining all of the text, and adding some conditional formatting. We can now see the trends of crime over time and get some insights into high level areas and category trends. This also gives us a way to be proactive, if the tides start to ebb in the other direction and crime starts to move up into the right instead of the current downward trend it's moving now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **CLI Commands:** make (2)
> **Speakers:** - [presenter] (1)

#### [Final project: Step 3](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/capstone-step-3?u=76281980&t=0)** - From here, I encourage you to think deeply about the community member persona. What can help them understand the safety of their neighborhood better? Are there other data points that we haven't considered yet? Maybe other visualizations that might be worth developing. Can we make this even more actionable by substituting the original dataset that included all reported incidents? Remember, I've intentionally reduced the dataset to help the code run quicker.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - from (1)


### 5. Final Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Final project walk-through](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/final-project-walk-through?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/final-project-walk-through?u=76281980&t=0)** - [Instructor] Working backwards from what we might want on this dashboard, we can think about what someone in the community might be interested in knowing. Similar to the law enforcement persona, you might be interested in total volume week over week, general trends and forecasts, also, the week over week changes in types of crime. Additional views you might be interested in as a member of the community are, what types of crimes are happening and where, how your city is doing compared to other surrounding areas, and days of the week where there's more or less crime and if that's changing week over week. Let's work to add some of these additional views in. I will start by adapting the dashboard we created earlier to allow for filtering by area. Our dataset is too small by area, especially for [[Forecasting]] purposes. So actually what we might be interested in is broadening our cities into LA neighborhoods. Looking at our sheet, I'm going to take a couple steps to clean it up. We'll next define our LA groupings, as well as the function that'll help us map our cities into these groupings. We'll also add this into our data prep function.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/final-project-walk-through?u=76281980&t=98)** And ensure it's been added into our data frame. We'll do that by going to Formulas and turning our calculations on. Here we could see that we've successfully added our new areas variable with our groupings. Up at the top, we can add an area filter. Here I will filter for Central Los Angeles. To make sure this gets reflected on our dashboard, we'll go over to our data frame and add one quick line
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/final-project-walk-through?u=76281980&t=141)** and go over to our dashboard to watch get it updated. Next, we'll aim to create a visual that addresses what types of crimes are happening and where. I'm going to do some minor formatting changes here, so we can add that below. To do this, we'll take what we learned in chapter 2 and apply it to our premise description. We can do that by developing a mapping for our premise description, adapting our category function accordingly, and adding it into our data prep function. Let's do that together. Here I'm adding a sample mapping, but you can develop any of your own. For our existing categorized function, to avoid repeating ourselves multiple times and developing a separate mapping, I've just adapted this one to accommodate both use cases for our category mapping as well as our premise. We'll go through and adapt this in our categorized function.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/final-project-walk-through?u=76281980&t=220)** We'll update our cleaning function accordingly. And lastly, we can move to our dashboard and add our heat map. This dashboard can now be leveraged by someone in the community to understand general trends in their areas, how their city is doing compared to others in the area, and if there are any types of crime that are on the rise or decline. Of course, this is just the tip of the iceberg of what you can develop with the data set, and I'm excited to see what you all create as a part of this [[Capstone]] project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Capstone]] (1)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-in-excel-data-analysis-and-visualization/next-steps?u=76281980&t=0)** - Congratulations, you've made it to the end of the course, and we've covered a lot of ground. If you have additional questions, you can reach out and connect with me directly on [[LinkedIn]]. And finally, you can extend your knowledge even more by monitoring the LinkedIn Learning Library for [[Python (Programming Language)|Python]] specific content. Thanks for joining me, and I look forward to seeing what you create in your [[Capstone]] projects. See you in my next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Python (Programming Language)|Python]] (1), [[Capstone]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Sarah Om]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-in-excel-data-analysis-and-visualization-4560553)

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Microsoft Excel
- Data Visualization

## Path Context

### In [[Advance Your Python in Excel Skills]]
← [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] | **5 of 7** | [[Advanced Python in Excel- Machine Learning]] →

## Appears In

- [[Advance Your Python in Excel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis, Data Visualization
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Data Visualization, Microsoft Excel
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis, Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Data Analysis, Microsoft Excel
- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)