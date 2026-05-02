---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: excel-economic-analysis-and-data-analytics-15102394
url: "https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394"
duration_minutes: 146
duration: 2h 26m
level: Intermediate
updated: 12/3/2024
learners: 273535
skills:
  - Economic Analysis
  - Microsoft Excel
  - Data Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEUJ-Ci6MPFfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661535762212?e=2147483647&amp;v=beta&amp;t=NcaEOj-bOz2znNG-TVykvQUZhKcd9aPYJ-LYduPRBkg"
linkedin_topic: Data Science
learning_paths:
  - '[[Become a Business Intelligence Specialist]]'
  - '[[Become a Data Analytics Specialist]]'
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[Data Analytics for Business Professionals]]'
  - '[[Statistics Foundations 2- Probability]]'
  - '[[Machine Learning with Logistic Regression in Excel, R, and Power BI]]'
next_courses:
  - '[[Power Bi Essential Training]]'
  - '[[Excel and ChatGPT- Data Analysis Power Tips]]'
  - null
path_nav: '[{"path":"Become a Business Intelligence Specialist","position":3,"total":9,"prev":"Data Analytics for Business Professionals","next":"Power Bi Essential Training"},{"path":"Become a Data Analytics Specialist","position":8,"total":10,"prev":"Statistics Foundations 2- Probability","next":"Excel and ChatGPT- Data Analysis Power Tips"},{"path":"Master Advanced Excel Data & Analytics Skills","position":7,"total":7,"prev":"Machine Learning with Logistic Regression in Excel, R, and Power BI","next":null}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - skill/economic-analysis
  - skill/microsoft-excel
  - skill/data-analytics
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel-%20Economic%20Analysis%20and%20Data%20Analytics.md)

![Excel: Economic Analysis and Data Analytics](https://media.licdn.com/dms/image/v2/C560DAQEUJ-Ci6MPFfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661535762212?e=2147483647&amp;v=beta&amp;t=NcaEOj-bOz2znNG-TVykvQUZhKcd9aPYJ-LYduPRBkg)

# Excel: Economic Analysis and Data Analytics

> Economics affects us all each day—from issues like inflation to the health of the economy and risk of a recession. In this course, learn how to harness economic data to do economic analysis and forecasting to gain key business insights and analyze market conditions.Join professor Michael McDonald as he demonstrates how to harness the wealth of information available on the internet to forecast stat

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394) | 2h 26m | Intermediate | 274K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Economic forecasting](#economic-forecasting)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
  - [Using the exercise files](#using-the-exercise-files)
- [**1.The Basics**](#1the-basics) (6 videos)
  - [Basics of economic analysis](#basics-of-economic-analysis)
  - [Sources of economic data](#sources-of-economic-data)
  - [Economic forecasting methods](#economic-forecasting-methods)
  - [Regression analysis in economics](#regression-analysis-in-economics)
  - [Predicting values with regressions](#predicting-values-with-regressions)
  - [Economic forecasting in the research literature](#economic-forecasting-in-the-research-literature)
- [**2. Economic Data Analysis**](#2-economic-data-analysis) (5 videos)
  - [Trend analysis in forecasting](#trend-analysis-in-forecasting)
  - [Serial correlation in data](#serial-correlation-in-data)
  - [Analyzing results](#analyzing-results)
  - [Using Gen AI in economics forecasting](#using-gen-ai-in-economics-forecasting)
  - [Gen AI and data](#gen-ai-and-data)
- [**3. Forecasting Economic Trends**](#3-forecasting-economic-trends) (6 videos)
  - [Advanced forecasting methods](#advanced-forecasting-methods)
  - [Binomial regressions](#binomial-regressions)
  - [Fixed effects regressions](#fixed-effects-regressions)
  - [Difference in differences analysis](#difference-in-differences-analysis)
  - [Stata and economic forecasting](#stata-and-economic-forecasting)
  - [Interpreting Stata results](#interpreting-stata-results)
- [**4. Using Economic Forecasts**](#4-using-economic-forecasts) (3 videos)
  - [What do the results mean?](#what-do-the-results-mean)
  - [Testing accuracy in economic forecasts](#testing-accuracy-in-economic-forecasts)
  - [Scenario analysis in economics](#scenario-analysis-in-economics)
- [**5. Economic Data**](#5-economic-data) (4 videos)
  - [Common economic variables](#common-economic-variables)
  - [Lead and lag relationships](#lead-and-lag-relationships)
  - [Seasonality and data cleaning](#seasonality-and-data-cleaning)
  - [Interpreting other's economic forecasts](#interpreting-others-economic-forecasts)
- [**Conclusion**](#conclusion) (1 videos)
  - [Projects to try next](#projects-to-try-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Economic forecasting](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=0)** - Hello, I'm Dr. Michael McDonald.
>
> **[0:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=3)** I'm a professor of finance and consultant to industry.
>
> **[0:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=6)** I've been teaching [[Forecasting]], using data for more than a decade to financial firms Fortune 500 companies and government agencies.
>
> **[0:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=14)** In this course, I'm going to show you how to effectively use economic data in practical business forecasting settings.
>
> **[0:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=23)** Data analytics is one of the hottest growth areas in business and it is a key opportunity for those looking to develop their career.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=31)** In this course, I will demonstrate how to gather data from government sources, like the federal reserve and use that data to forecast critical variables, like property prices and interest rate hikes.
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=45)** We'll explore a variety of different types of forecasts from time series exponential smoothing to fixed effects regressions to difference in differences estimators.
>
> **[0:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting?u=76281980&t=58)** Please join me now and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - hello (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Instructor] Before getting started with this course, there's a few things that you should know.
>
> **[0:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=4)** First of all, we'll be using [[Microsoft Excel|Excel]] extensively throughout the course, as a tool for making forecasts in a variety of settings.
>
> **[0:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=13)** You should be familiar with Excel.
>
> **[0:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=15)** Not only should you know how to move around Excel and navigate the tabs effectively, but it'll also be helpful if you understand how to change decimal places in Excel, how to convert numbers to currency, how to convert numbers to percentages, et cetera.
>
> **[0:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=29)** It'll also be helpful if you have some experience with the Analysis ToolPak in Excel, as we'll be relying heavily on that.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=36)** In addition to a knowledge of Excel, you'll want to have some basic knowledge of [[Statistics]], in particular, a minimal knowledge of descriptive statistics like means and medians is helpful.
>
> **[0:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=48)** It'll also be great if you have some background in regression analysis or more advanced statistics as well.
>
> **[0:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=54)** In addition to statistics, you'll need some familiarity with basic accounting and finance.
>
> **[1:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=60)** You don't have to be a professional accountant, mind you.
>
> **[1:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=62)** You don't have to have worked at a big bank, but if you have an understanding of what revenue is, interest rates are, what net profit means, it'll make a lot of what I'm talking about in this course make much more sense.
>
> **[1:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=75)** Finally, and most importantly, you'll need to be hungry for this course.
>
> **[1:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-you-should-know-before-watching-this-course?u=76281980&t=80)** You'll need a hunger for knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Statistics]] (4)
> **Prerequisites:** you'll need (3), getting started (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=0)** - [Instructor] In this course, we'll be using a variety of [[Microsoft Excel|Excel]] files as we go through the videos.
>
> **[0:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=5)** If you wish to follow along with these exercises, you'll want to download the Exercise Files folder to somewhere accessible on your Desktop.
>
> **[0:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=14)** As you enter the Exercise Files folder, you'll observe that we have a separate folder for each exercise file.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=21)** and entering any of these folders, you'll see that we have files labeled Begin and End.
>
> **[0:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=27)** In this case, we have a file for 02_01_Begin.
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=33)** This is the file the corresponds to section two, video one, and then the file at the beginning of the exercises.
>
> **[0:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-the-exercise-files?u=76281980&t=43)** The end file covers what the output should look like once you've completed the video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Exercise Files:** exercise files (2), download the (1), exercise file (1)
> **Speakers:** - [instructor] (1)


### 1.The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of economic analysis](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=0)** - [Instructor] Economic [[Forecasting]] is complex.
>
> **[0:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=2)** Most economic forecasts are built on three key parts, data, econometrics, and judgment.
>
> **[0:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=11)** These three aspects of any forecast form the stool on which our results are built.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=17)** Take away any of the three legs and this tool falls.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=21)** Our focus is going to be on understanding how to use that data and combine it with data analysis through econometrics and make judgements based on the results that are going to form the outcomes for our forecasts.
>
> **[0:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=37)** In particular, we're going to be looking at two types of data microeconomic data and macroeconomic data.
>
> **[0:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=43)** Microeconomic data is firm level data.
>
> **[0:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=46)** It's focused on data about individual consumers, individual companies, et cetera.
>
> **[0:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=52)** Microeconomic data is great for making powerful analysis but it's harder to gather.
>
> **[0:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=59)** There are simply fewer sources of microeconomic data out there, it's harder to gather as a result.
>
> **[1:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=67)** Macroeconomic data on the other hand is national level data.
>
> **[1:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=71)** Think about things like gross domestic product, unemployment rates, interest rates.
>
> **[1:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=78)** These are factors that affect everyone across the country.
>
> **[1:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=81)** This kind of data is easier to gather and find but it's harder to analyze.
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=87)** In particular if we're trying to make forecasts about GDP or unemployment or interest rates we're often going to face an insidious problem what we call omitted variables.
>
> **[1:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=100)** Omitted variables simply means that there's other factors that we can't take into account when we're trying to forecast based on macroeconomic data.
>
> **[1:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=110)** Our focus today is going to be on making forecasts, in particular, we've got someone joining us.
>
> **[1:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=117)** His name is Ed.
>
> **[1:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=118)** Ed is a business economist at an online rental property company.
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/basics-of-economic-analysis?u=76281980&t=124)** Ed is trying to forecast housing demand and interest rates to help with his firm's expansion plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** gdp (1)
> **Speakers:** - [instructor] (1)

#### [Sources of economic data](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=0)** - [Instructor] One of the first steps that you're going to take when starting any kind of [[Business Intelligence (BI)|business intelligence]] or data analytics project is to gather data.
>
> **[0:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=8)** All businesses out there have access to lots of data.
>
> **[0:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=12)** There's proprietary data, often customer-based from a particular firm, and there's publicly available data, such as that from the US Census Bureau or the Federal Reserve.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=21)** The data that you need is going to depend on the question that you're asking.
>
> **[0:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=25)** And typically, you're going to need to use a mix of public and private data.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=31)** So where can you get data like this?
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=33)** Well, there's three options.
>
> **[0:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=35)** First, you can buy it.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=36)** For a lot of [[Financial Data]] out there, or very customized and specific data, buying it is your only choice.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=42)** Second, you can build your own dataset.
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=45)** Again, if you have access to company data that's collected on say, customers, or based on specific data points about the market, you can often build a very powerful dataset.
>
> **[0:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=56)** And third, and perhaps most underappreciated by much of the market today is that you can gather data for free.
>
> **[1:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=64)** In fact, the Federal Reserve has reams of free data that's available to anyone who chooses to access it.
>
> **[1:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=72)** We're going to talk about how to gather that data in just a moment.
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=77)** Before we get to that, you might ask the question, "What type of data do I need?"
>
> **[1:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=82)** If the federal government has all this data out there, how do I know which data I should be looking for?
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=87)** Well, the answer is that your data needs are driven by your project needs.
>
> **[1:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=92)** Start by thinking about what you're trying to model.
>
> **[1:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=95)** In other words, build your model, then get your data.
>
> **[1:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=100)** Think about what the driving factors are that are going to influence the outcome you are trying to examine.
>
> **[1:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/sources-of-economic-data?u=76281980&t=107)** If you're trying to examine housing prices, as our friend Ed is, you're going to be looking for very different data than if you're trying to examine stock prices, for example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Intelligence (BI)|Business intelligence]] (1), [[Financial Data]] (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Economic forecasting methods](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=0)** - [Instructor] There are three methods of [[Forecasting]] that are commonly used in economics and [[Business Analytics]], causal methods, time series methods, and qualitative methods.
>
> **[0:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=10)** Each of these three different methods has various tools and techniques that fall underneath the silo in question.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=17)** And each of these methods is going to be appropriate in different kinds of circumstances.
>
> **[0:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=22)** Causal methods typically involves regression analysis and some of the different types of specialized regression analysis that are going to be useful in various circumstances.
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=32)** Time series methods often involves various [[Forms]] of trend analysis, things like exponential smoothing, trend prediction, et cetera.
>
> **[0:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=41)** And then qualitative methods involve using surveys and other subjective ad hoc methods of gathering data in order to make predictions.
>
> **[0:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=52)** In causal forecasting, we're relying on relationships between variables.
>
> **[0:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=57)** We're going to use statistical techniques like regression analysis, multiple regression, and various types of specialized forms of regression like logit models and probit models.
>
> **[1:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=69)** The key with all of this is that the relationships between our variables have to be strong and powerful in order to get a good predictive outcome.
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=79)** Moreover, the relationships have to be more than luck.
>
> **[1:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=84)** They have to be more than what we call spurious correlation.
>
> **[1:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=88)** There's an old story in [[Statistics]] which is perhaps apocryphal but nonetheless illustrates this concept.
>
> **[1:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=95)** The story is that the number of births in India has a very strong correlation to wind speeds in Chicago.
>
> **[1:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=103)** That doesn't mean of course that we can use the forecast for tomorrow's weather in Chicago to predict India's population.
>
> **[1:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=111)** This is just an example of spurious correlation.
>
> **[1:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=116)** In time series forecasting, we're going to be relying on trends in data over time.
>
> **[2:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=122)** These trends can be spotty.
>
> **[2:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=125)** For example, if you've ever looked at data on GDP and the business cycle, you'll find that the cycle is very irregular.
>
> **[2:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=134)** It's very difficult to spot using any kind of trend analysis.
>
> **[2:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=139)** In fact, trends and trend tools are best used with stationary data.
>
> **[2:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=145)** One example of this is risk aversion in financial markets.
>
> **[2:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=150)** In particular, there's a metric called the VIX, sometimes referred to as the fear gauge.
>
> **[2:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=155)** The fear gauge measures the level of risk aversion among investors, and it's roughly stationary over time.
>
> **[2:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=163)** We can use time series forecasting tools like moving averages, exponential smoothing, and trend decompositions to forecast the VIX.
>
> **[2:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=173)** And in fact, many financial companies do exactly that.
>
> **[2:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=178)** Finally in qualitative forecasting, we're going to be relying on a variety of different, more or less ad hoc methods of gathering data.
>
> **[3:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=188)** This data is often more subjective in nature, but it's going to include tools like the Delphi method, juries of executive opinions, sales force composites, and consumer market surveys.
>
> **[3:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=201)** This type of forecasting is best used when we have problems with our data.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=205)** It's really using human experience in place of hard, objective data sources.
>
> **[3:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=213)** This helps us to understand some of the unobservable variables issues that come up.
>
> **[3:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=219)** In particular, if we're trying to make a forecast about the broader economic activity in a particular region, some of that economic activity might be due to consumer perceptions.
>
> **[3:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-methods?u=76281980&t=231)** Those consumer perceptions are hard to capture with anything other than subjective survey data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (6), [[Forms]] (2), [[Business Analytics]] (1), [[Statistics]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** vix (2), gdp (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Regression analysis in economics](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=0)** - [Instructor] Let's talk about regression analysis.
>
> **[0:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=2)** You might not be familiar with the term, but regression analysis is a very powerful business tool that you can use to make predictions and forecasts for your firm.
>
> **[0:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=13)** In particular, a regression is simply a statistical model.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=17)** In its most basic form, a regression is defined by the equation you see here, y = ax + b.
>
> **[0:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=25)** What this is simply saying is that our dependent variable, Y, is driven by our independent variable, X, plus a Y intercept, B.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=36)** So we might think about this in, say, a situation trying to figure out how long it'll take to drive to California from somewhere else in the country.
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=44)** The time to reach California is going to be based on two factors, how fast we're traveling and where we start from.
>
> **[0:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=52)** A is the speed at which we are driving.
>
> **[0:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=56)** X is the number of hours it'll take us to reach California.
>
> **[0:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=59)** And B is where we start from.
>
> **[1:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=61)** It takes longer to reach California starting from Virginia, for example, than it does if we start from Colorado.
>
> **[1:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=69)** Similarly, it'll take us less time to reach California if we're driving 100 miles per hour versus if we're driving 10 miles per hour.
>
> **[1:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=78)** y = ax + b can help us to predict how long that trip will take.
>
> **[1:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=84)** We can use this same concept to make predictions in business as well.
>
> **[1:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=90)** This picture, showing the dependent variable Y against the independent variable X, illustrates, using a regression, based on a bunch of data points.
>
> **[1:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=100)** For example, we might think about multiple car trips having been made from different points at different places in the country and at different speeds.
>
> **[1:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=110)** That line, the red line shown here, essentially helps us to predict how long it takes to get from a particular place in the country to California, based on the speed at which we're driving, X.
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=124)** We'd gather data on multiple different car trips that were made, and we could put them onto a graph like this and then fit that line to it.
>
> **[2:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=133)** That line is called a regression line.
>
> **[2:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=136)** This is referred to as a simple regression.
>
> **[2:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=138)** We're fitting a straight line to our data and it lets us predict the dependent variable, Y, based on the value of our independent variables in X.
>
> **[2:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=148)** Now obviously in business, most predictions that we're going to make are driven by a lot more than one variable.
>
> **[2:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=155)** Unlike when driving a car, in business there are many things that could impact, say, our sales.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=161)** The business environment, the number of sales people we have, the amount we spend on marketing, it's easy to think of 10 or 20 different factors.
>
> **[2:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=168)** Well we can incorporate all of these into one larger model, which we refer to as a multiple regression.
>
> **[2:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=177)** This picture illustrates using a multiple regression to try and fit an equation, or a predictive model, to a slew of different data.
>
> **[3:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=186)** As you can see, there is a curved pattern in this data.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=191)** Our multiple regression allows us to go through and look at all of the data, and make predictions based on it.
>
> **[3:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=199)** Now regressions aren't perfect, but they do give us a way to map and to harness mounds of data that are out there.
>
> **[3:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=206)** And hence, they're very powerful in business.
>
> **[3:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=210)** Let's take a look at an example of what regression output looks like.
>
> **[3:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=215)** This is raw output for a regression.
>
> **[3:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=218)** This is going to show us, in essence, what our data looks like once it's run through software and gives us a predictive output.
>
> **[3:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=227)** In the first row, you'll see culture here.
>
> **[3:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=230)** Culture, in this case, refers to the sales culture of the firm.
>
> **[3:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=234)** Our coefficient 1.57 shows us that when we spend $1 on sales training, we get an additional $1.57 cents in sales as a result.
>
> **[4:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=246)** All of these other variables below it, t-debt, capexta, et cetera, refer to things like total debt, capital expenditures to total assets, they're characteristics of the firm.
>
> **[4:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=258)** Overall then our goal is to take this mass of data and look at just one variable that we care about, whether spending additional money on training our sales team provides additional sales results?
>
> **[4:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=271)** This regression gives us a point estimate for that investment.
>
> **[4:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=276)** We get $1.57 of additional sales for every dollar that we spent on training our sales team.
>
> **[4:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/regression-analysis-in-economics?u=76281980&t=284)** This is an example of how we can use the power of regression to make relevant predictions for our firm.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Definitions:** is a  (2), is called (1), refers to (1), is an  (1)
> **Analogies:** for example (2), picture (2)
> **Versions:** 1.57 (3)
> **Speakers:** - [instructor] (1)

#### [Predicting values with regressions](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=0)** - [Instructor] Let's talk about a specific example using regression analysis.
>
> **[0:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=4)** In this case, we're looking at predicting the estimated home heating oil use by a particular customer based on three different factors.
>
> **[0:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=15)** A variable that we call the intercept, the temperature outside, and the level of insulation in the customer's house.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=21)** Let's focus on these bottom three rows in the table.
>
> **[0:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=25)** And in particular, focus on the column labeled coefficients.
>
> **[0:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=29)** These coefficients tell us the impact on home heating oil use in a particular month given the temperature outside, and the insulation level of the person's house.
>
> **[0:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=40)** Now let's see how we would use this in a prediction.
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=44)** There's three steps to the prediction.
>
> **[0:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=46)** Run the regression, which I showed you the output from the previous slide.
>
> **[0:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=50)** Then we're going to save those coefficients.
>
> **[0:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=52)** That was those last three rows of data.
>
> **[0:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=55)** For example, this will help us to measure the impact for each additional inch of insulation in a person's house.
>
> **[1:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=63)** And then finally, we're going to use those coefficients, and our expected value for the future to get a prediction.
>
> **[1:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=71)** For example, if we were trying to forecast home heating oil use for a particular individual, we'd use our coefficients, in this case for temperature that's 5.436, and our expected value for what the temperature is going to be in the future.
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=87)** Maybe it's going to be 40 degrees outside.
>
> **[1:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=90)** We'd put in 40 where we have temperature, and we'd put in the level of insulation in the person's house where we have insulation labeled.
>
> **[1:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=98)** We then crank through the math, and this puts out the level of estimated home heating oil that the person will consume.
>
> **[1:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=106)** Now of course, this isn't going to be perfect.
>
> **[1:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=109)** There will always be some small error associated with a particular prediction.
>
> **[1:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=116)** Regressions help us to minimize that error.
>
> **[1:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=119)** And moreover, particular points in the regression are going to tell us what the expected error will be, and whether or not we have a good prediction.
>
> **[2:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=129)** So let's use this concept, and take it back to what we talked about previously when we were discussing the impact of sales culture on a company's revenue.
>
> **[2:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=141)** This regression shows us again, the impact on sales from a variety of different variables related to a company.
>
> **[2:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=150)** The sales culture of the firm, but then a variety of other baseline characteristics, like the total debt for the firm, the amount of CapEx they have, et cetera.
>
> **[2:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=159)** Our coefficient of 1.57 on culture told us that $1 invested in sales culture yielded $1.57 in additional sales.
>
> **[2:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=172)** The R squared value or R-sq that you see at the top tells us how effective our prediction is.
>
> **[3:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=180)** In particular, those numbers tell us the percentage of the time that we can perfectly predict our sales based on all of these different variables.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=191)** In this case for the overall regression, we can perfectly predict sales 30.3% of the time.
>
> **[3:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=200)** That's what that 0.3030 tells us.
>
> **[3:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=204)** Just less than one third of the time, we can perfectly predict sales given these other factors.
>
> **[3:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=210)** Now, even when we can't perfectly predict sales, we will still have only a small error term if we've done a good job of building our regression.
>
> **[3:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=219)** The second column here, P greater than T, tells us whether or not we've done a good job in picking our variables.
>
> **[3:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/predicting-values-with-regressions?u=76281980&t=226)** As long as those numbers are small, and close to zero, that indicates that those particular variables are effective in helping us make predictions.

> [!info]- Semantic Content
>
> **Versions:** 1.57 (2), 5.436 (1), 30.3 (1), 0.3030 (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Economic forecasting in the research literature](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=0)** - [Instructor] The reality is that doing forecasts in economics can be a difficult and time consuming process.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=7)** But one of the hardest elements in that process is actually coming up with the model that you're going to use for your [[Forecasting]].
>
> **[0:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=15)** However, you don't have to reinvent the wheel.
>
> **[0:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=19)** Instead, most professional forecasters lean heavily on past research efforts by other earlier researchers.
>
> **[0:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=27)** Right?
>
> **[0:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=27)** Rather than reinventing the wheel and starting from scratch every time, look at what previous forecasters have done and use their models as the basis for your own.
>
> **[0:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=38)** So let's take a look at some practical real world examples of this.
>
> **[0:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=41)** All right.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=42)** So I've got three different research studies that I've pulled here, and you can get all of these through something like [[Google]] Scholar or SSRN.
>
> **[0:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=49)** But this first one is sort of a famous paper, it's from Estrella and Mishkin.
>
> **[0:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=53)** And this is about using the yield curve as a predictor for recessions in the United States and Europe.
>
> **[1:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=60)** And what we see if we look at their particular model, down here on page two, they have kind of the crux of their model.
>
> **[1:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=69)** What they're basically showing is using a probit model that is the [[Probability]] of a recession based on the yield curve spread, they find a monotonically increasing relationship.
>
> **[1:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=80)** What that means is the probability of a recession increases significantly as the yield spread inverts.
>
> **[1:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=90)** For instance, if you have a 1.21% spread in the yield curve between your 10 year treasury notes and your three month treasury bills, you'll only have a 5% chance of a recession in the next four quarters.
>
> **[1:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=105)** However, as that yield spread shrinks and then turns negative, the probability of a recession gets bigger and bigger.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=113)** Now this, of course, is something that is very timely, currently, as we kind of look at the changing economic environment and changing economic landscape that's out there.
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=124)** Right?
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=124)** So if we think that, as an example, the yield spread is negative 50 basis points.
>
> **[2:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=131)** Well, that would imply, based on their model, and I'm just using that as an example, but that would imply a 40% chance of a recession over the ensuing four month, or excuse me, four quarter period.
>
> **[2:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=145)** That is one year period.
>
> **[2:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=147)** So basically, their model is a neat and efficient way to kind of show how the probability of a recession increases as the yield spread becomes more and more negative.
>
> **[2:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=160)** Let's take a look at another model though.
>
> **[2:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=164)** So this is from another research study, and this is looking again at the yield curve as a leading indicator.
>
> **[2:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=169)** Now, these researchers, they're looking at gross domestic product, or GDP, as a function of two factors, the yield curve and the Fed funds rate.
>
> **[3:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=181)** And what they're going to show is that if we kind of build out this model a little more, so we're not just relying on the yield spread, we get a better outcome or result.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=191)** And in particular, they show here in these charts that basically a combination of the yield spread and the Fed funds rate gives you better predictive power for GDP.
>
> **[3:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=204)** So looking at their particular model, it's what you see right here.
>
> **[3:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=209)** They're forecasting gross domestic product to be equal to some intercept term alpha and then different coefficients in a regression analysis based on the term structure, that is the yield curve spread.
>
> **[3:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=226)** That term structure squared, the Fed funds rate, the Fed funds rate squared, and then the interaction term between the yield spread and the Fed funds rate.
>
> **[3:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=238)** Now, of course, the point isn't that they have the perfect model.
>
> **[4:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=240)** Nobody ever has the perfect model when they're doing research.
>
> **[4:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=244)** This is just an example of a real world model that researchers came up with that they felt had good predictive power for gross domestic product.
>
> **[4:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=254)** And let's look at one more example here.
>
> **[4:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=256)** So this is specific to a particular state, in this case, Connecticut, and they're going to be looking at consumer sentiment.
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=265)** And if we skip on down to their model, they're using what we refer to as an ARIMA model, or an auto regressive integrated moving average.
>
> **[4:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=280)** And basically, what this looks at is saying, okay, well we are going to try and forecast an economic value, in this case consumer sentiment, based on essentially past values for that economic variable and some small disturbances or perturbations around that level over time.
>
> **[4:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=299)** So the basic idea is tomorrow's consumer sentiment is a function of yesterday's consumer sentiment plus any shocks to the system.
>
> **[5:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=309)** In other words, if we look at say yesterday's consumer sentiment, and it were really positive, it is unlikely that today's will suddenly, at the flip of a coin, become really negative.
>
> **[5:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=321)** That's the idea.
>
> **[5:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=322)** And so this kind of a ARIMA model is very helpful when we're trying to forecast what we call the stationary type variables that are out there.
>
> **[5:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=331)** Those variables that should revert to a given mean level over time.
>
> **[5:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=337)** But these are just three different examples of models the different researchers have used.
>
> **[5:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/economic-forecasting-in-the-research-literature?u=76281980&t=343)** Take a look at some other research studies on your own and see if you can identify the model that's used by the forecasters there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[Forecasting]] (2), [[Google]] (1)
> **Env Vars:** gdp (2), arima (2), ssrn (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** coming up (1), in the next (1)
> **CLI Commands:** find (1)
> **Versions:** 1.21 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Economic Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Trend analysis in forecasting](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=0)** - [Instructor] Now, that we've looked at some different methods of [[Forecasting]], let's take a look at a data example.
>
> **[0:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=6)** Recall our friend Ed the economist.
>
> **[0:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=9)** Ed worked for a real estate firm and Ed has been asked by his boss to look at property valuations for a commercial building that the company is thinking of buying.
>
> **[0:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=19)** In particular, Ed is interested in looking at valuation trends in the area of this new building.
>
> **[0:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=25)** And he's especially interested in whether past prices predict future prices.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=31)** Ed's gathered some data to help do that analysis.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=36)** I'm in the 0201 begin file from the 0201 folder under the exercise files folder.
>
> **[0:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=46)** Now, as we can see, Ed has gathered a tremendous amount of data here.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=51)** He's actually got data starting all the way back in January of 1871 and he's got monthly data on interest rates, in particular the 10 year interest rate, profit margins for real estate buildings in the area, property valuations for real estate buildings in the area in thousands of dollars and a moving average for those valuations which we'll talk about in a moment.
>
> **[1:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=76)** So if you observe, the property valuation on a building similar to what Ed's firm is thinking about buying today, the value was $85,000 in January of 1871.
>
> **[1:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=89)** Fast forward to our last available data point in March, 2015, and we see that the value has risen to roughly $2.1 million.
>
> **[1:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=100)** Now, along the way Ed has computed a 24 month moving average.
>
> **[1:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=105)** So for the first 24 months of data, we can't compute anything because again, we need 24 months to average out.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=113)** So starting in January of 1873, Ed averages the last 24 months of valuation data and this produces an average that continues all the way up through the end of the data in March of 2015.
>
> **[2:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=130)** One thing we might look at is whether or not that moving average reflects the property valuation.
>
> **[2:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=138)** What do you think the relationship is between those two values, moving average and property valuation?
>
> **[2:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=144)** If you said that the moving average is probably smoother and less volatile than the property valuation, you are spot on.
>
> **[2:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=151)** So let's take a look at this in a graphical setting.
>
> **[2:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=155)** I'm going to highlight columns E and F and then go to the insert tab and insert a line chart.
>
> **[2:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=165)** And I'm going to remove our legend and add a trend line,
>
> **[2:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=173)** along with changing our title.
>
> **[2:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=179)** And as we see here, it appears that the red line, which represents the moving average is a little bit smoother than the blue line.
>
> **[3:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=189)** The blue line tends to bounce up and down, above and below the red line.
>
> **[3:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=195)** So very simply, if Ed were interested in trying to figure out where valuations might go in the future, a moving average would be a good place to start.
>
> **[3:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=204)** But Ed wants to look a little deeper than that.
>
> **[3:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=207)** In particular, Ed is interested in applying one of the time series forecasting methods that we mentioned previously.
>
> **[3:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=214)** He's interested in what's called exponential smoothing.
>
> **[3:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=218)** So I'm going to add a new column for exponential smoothing.
>
> **[3:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=223)** Now, what exponential smoothing is going to do is use past prices on property values to forecast what future prices might be.
>
> **[3:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=233)** We're going to need a special tool to do this in [[Microsoft Excel|Excel]], that tool is called the Analysis Tool Pack.
>
> **[4:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=240)** To get the Analysis Tool Pack, we're going to click File, Options, Add-ins, Manage Excel Add-ins and Go.
>
> **[4:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=252)** And then we're going to check to make sure that the box labeled Analysis Tool Pack is checked.
>
> **[4:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=258)** If it is not checked, go ahead and check it now, then click Okay.
>
> **[4:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=263)** Once we've done that, let's move to the data tab and click Data Analysis.
>
> **[4:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=270)** We're looking for the function labeled exponential smoothing.
>
> **[4:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=275)** I'm going to click Okay.
>
> **[4:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=277)** And it wants to know what data points I'm interested in smoothing out.
>
> **[4:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=282)** I'm interested in the property valuation lines, so I'm going to highlight all of this.
>
> **[4:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=288)** Now, it wants to know what the damping factor is.
>
> **[4:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=291)** The damping factor simply tells us how much weight we're going to put on past values.
>
> **[4:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=298)** This is a range anywhere from zero to one.
>
> **[5:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=302)** Let's use a figure of 0.5.
>
> **[5:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=306)** Now, I'm going to put in my output range.
>
> **[5:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=309)** I want to start my output in column G.
>
> **[5:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=313)** So I'm going to highlight column G from G2 through G1732.
>
> **[5:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=321)** Now, I'm going to click Okay.
>
> **[5:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=324)** As we can see, Excel spit out some data for us.
>
> **[5:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=328)** To help make this a little bit more intuitive and easily readable, let's change the formatting on these numbers, shall we?
>
> **[5:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=335)** So I'm going to hit Control + Shift and Down and then hit Control + 1, and this will bring me to my formatting sales menu.
>
> **[5:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=344)** I'm going to select Number and two decimal places and the 1,000 separator with the comma and I'm going to hit Okay.
>
> **[5:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=355)** Now, this tells me that based on past data points I can predict future values.
>
> **[6:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=362)** The further we go in time, the further forward we go, that is and the more data we have, the better our estimate should be in theory.
>
> **[6:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=371)** So what we see up front is initially in February of 1871 we only have one data point to go off of, 85.02.
>
> **[6:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=380)** So we're simply going to forecast February's value based on the only information we have, January's value of 85.02.
>
> **[6:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=389)** Once we start going down though, we'll see that we're going to be able to smooth out that pattern.
>
> **[6:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=397)** In particular, we're now going to use the value from February, plus our previous smooth value.
>
> **[6:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=405)** And as we see, this is going to create a long sequence of data.
>
> **[6:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=410)** Now, let's just look visually at whether or not this exponential smoothing is more effective than a simple moving average for predicting values.
>
> **[7:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=420)** Well, as we can see, when we get to March, 2015, we're using the data available in February, 2015.
>
> **[7:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=429)** So this value in cell G1732, is something we would have access to before we actually knew what the March property values are.
>
> **[7:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=440)** And our prediction is that the property value should be 2,089.21, which of course represents roughly a $2.1 million property value.
>
> **[7:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=452)** Because again, like the property values column, our exponential smoothing column is in thousands of dollars.
>
> **[7:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/trend-analysis-in-forecasting?u=76281980&t=460)** Here we see that in March, 2015, the actual property value is $2.1 million, very similar to our forecast with the exponential smoothing technique.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Forecasting]] (2)
> **Versions:** 2.1 (3), 85.02 (2), 0.5 (1), 089.21 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Env Vars:** g1732 (2)
> **Analogies:** similar to (2)
> **Cross-References:** we mentioned (1)
> **UI Navigation:** go to (1)

#### [Serial correlation in data](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=0)** - [Instructor] Ed was intrigued by what we learned about exponential smoothing being an effective predictor for property prices.
>
> **[0:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=8)** Now, he's wondering about a concept called serial correlation, or auto correlation.
>
> **[0:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=14)** And he's wondering if this data on property values for commercial real estate might be serially correlated.
>
> **[0:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=22)** What is serial correlation?
>
> **[0:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=24)** Well, essentially serial correlation simply means that the future values of a variable are related to the past values of the variable.
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=33)** In Ed's case, this means that the future values of property are driven by whatever previous changes in property values are.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=42)** Why is this useful?
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=44)** Well, if property values are serially correlated, it means that we can look at historical changes in that property value in order to forecast what future changes might be.
>
> **[0:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=55)** Now, it's important to understand that when we're building models using serial correlation, we've got to be very careful to make sure that we're using the right kind of analysis.
>
> **[1:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=67)** We'll take a look at that in just a moment.
>
> **[1:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=71)** I'm in the 02_02_Begin file from the Exercise Files folder.
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=77)** We want to look at serial correlation as it relates to these property values.
>
> **[1:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=83)** In particular, we want to look at whether changes in future property values are related to our past property values and our forecast from exponential smoothing.
>
> **[1:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=95)** To do that, I'm going to run a regression analysis.
>
> **[1:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=98)** Before I get to that, we've got to create a new column that's going to look at the change in property values.
>
> **[1:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=105)** So I'm simply going to name column H Change, and then I'm going to subtract value E3, which is the property value in February, 1871, from value E2, the property value in January, 1871.
>
> **[2:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=122)** We see that for that month, from January to February, 1871, the value of the comparable property we're looking at fell by $1,400.
>
> **[2:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=133)** Remember, all of the values in property value in moving average and an exponential smoothing are in thousands of dollars.
>
> **[2:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=142)** And this represents the expected value of a property that is similar to the one that Ed's company is looking at.
>
> **[2:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=150)** Once I've done that, I'm going to drag and drop the formula through the bottom of the data.
>
> **[2:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=156)** This now gives us a metric which tells us how much property values have changed on a month by month basis for our sample property from March, 2015 all the way back to February, 1871.
>
> **[2:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=172)** Next, we want to use a tool called regression analysis to look at whether or not this change in property value is related to our predicted property value as determined by exponential smoothing.
>
> **[3:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=186)** To do that, we're going to, again, rely on that analysis tool pack that we talked about previously.
>
> **[3:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=193)** So I'm going to click the Data tab and then Data Analysis.
>
> **[3:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=197)** And I'm going to come down until I see the Regression function highlighted.
>
> **[3:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=202)** I'm going to click OK.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=205)** Now I'm going to highlight the data that I want to put in.
>
> **[3:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=209)** Let's put in H3, which is the first value for change, through H1732 as our Y input.
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=220)** What's this telling us?
>
> **[3:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=222)** Well, in a regression we're trying to predict our Y value based on our X values.
>
> **[3:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=229)** So in this case, we're going to try and predict future changes in property value using other variables.
>
> **[3:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=236)** What other variables are we going to use?
>
> **[3:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=239)** Well, those are our X's.
>
> **[4:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=242)** Here, we're going to use G3 through G 1732.
>
> **[4:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=249)** That corresponds to the exponential smoothing values that we came up with in the past.
>
> **[4:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=257)** Now I'm going to click OK and my regression will appear in a new page.
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=265)** I'm going to widen my columns out so that I can see the data easily.
>
> **[4:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=269)** And I'm going to eliminate columns H and I which are superfluous.
>
> **[4:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=275)** Now, to make my numbers easier to see, I'm going to highlight B17 through G18 and click Ctrl + 1.
>
> **[4:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=287)** This will enable me to change my numbers so that they're easier to see and understand.
>
> **[4:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=293)** And I'm going to set this at three decimal places and click OK.
>
> **[4:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=297)** Now what we see here is that our X variable, X1, has a positive and statistically significant relationship with changes in future property values.
>
> **[5:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=312)** We know that it's statistically significant because our T stat is greater than 1.5.
>
> **[5:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=319)** And our P value is less than 0.1.
>
> **[5:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=323)** In this case, the relationship between our X variable, which was our exponential smoothing prediction, and the change in property values is relatively weak.
>
> **[5:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=334)** A number greater than 0.1 in the P value, that is cell E18, would mean that the value is not statistically significant.
>
> **[5:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=345)** In this case, cell E18, 0.086.
>
> **[5:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=351)** So slightly less than 0.1.
>
> **[5:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=354)** This tells us it's a statistically significant factor in determining future price changes in the property, but the relationship is somewhat weak.
>
> **[6:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=363)** We can observe the same thing looking at the coefficient.
>
> **[6:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=367)** Our X variable here was the exponential smoothing value.
>
> **[6:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=372)** What this tells us is that a one unit rise in exponential smoothing leads to a 0.002 rise in the change of property prices going forward.
>
> **[6:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=385)** In other words, if our exponential smoothing value is $1,000 higher, or one unit, then the change in the future is an average of $20 higher.
>
> **[6:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=397)** That's not particularly meaningful economically.
>
> **[6:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=402)** It is statistically significant, but it's not all that meaningful from an economic standpoint.
>
> **[6:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=407)** What we do observe is there appears to be a relationship between past prices and future prices.
>
> **[6:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=414)** Overall, though, we still haven't found a great tool to let us forecast what those changes are going to be in the future.
>
> **[7:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/serial-correlation-in-data?u=76281980&t=422)** It appears we do have some serial correlation, but we haven't found exactly the right tool to deal with that yet.

> [!info]- Semantic Content
>
> **Versions:** 0.1 (3), 1.5 (1), 0.086 (1), 0.002 (1)
> **Env Vars:** e18 (2), h1732 (1), b17 (1), g18 (1)
> **Definitions:** means that (3), in other words (1), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** we talked about (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing results](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=0)** - [Instructor] While helping Ed to analyze the expected value of a commercial property his firm is thinking of buying, we ran a regression analysis.
>
> **[0:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=8)** The regression analysis has several key features of interest.
>
> **[0:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=12)** The first of these is a coefficient.
>
> **[0:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=15)** Recall that coefficients determine the predicted effect one variable has on another.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=21)** In other words, the coefficient value tells us the impact of a one unit change in the right hand side variable on the left hand side variable.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=31)** What that means is what impact does a one unit change in our X have on our Y?
>
> **[0:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=39)** We also looked at the significance and standard errors.
>
> **[0:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=43)** Typically in a regression analysis we measure significance or standard error through a T stat and a P value.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=51)** Larger T [[Statistics]] indicate greater significance for a particular variable and tell us that we have a stronger regression.
>
> **[1:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=60)** We also looked at R squared values.
>
> **[1:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=63)** The level of the R squared ranging from zero to one tells us how good the regression is at analyzing the data we are looking at.
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=73)** In particular, a regression with an R squared value of 1.0 would tell us that we were effectively able to capture all of the variation in our data using the model in question.
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=87)** Standard errors and significance are very important when we're making predictions, like what Ed's trying to do.
>
> **[1:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=94)** In particular they tell us whether or not one variable is a driver of changes in another variable.
>
> **[1:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=101)** Our standard errors help us to understand how big that error is, how big the variation is in a particular variable, and how confident we can be in our estimates around the importance of that variable.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=113)** If we have a variable or an X value with a very wide standard error, a large standard error relative to the coefficient itself, that tells us that that variable isn't all that useful for prediction.
>
> **[2:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=127)** Similarly, the R squared is critical in letting us know whether or not we can really build a good, strong prediction model using this particular regression.
>
> **[2:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=137)** The R squared tells us how accurate our overall prediction model is.
>
> **[2:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=141)** R squared with a value of one means we can always predict the left hand side variable with 100% accuracy using our right hand side variables or our X variables, at least based on the data that we've gathered.
>
> **[2:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=157)** Let's take a look at what this means for Ed with another regression.
>
> **[2:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=164)** I'm in the 0203 begin file from the exercise files folder.
>
> **[2:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=171)** As we can see, Ed's gone through and he's added a couple of additional columns for us since we last talked with him He's added columns I, J and K, which are labeled lag one, lag two, and lag three.
>
> **[3:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=187)** These are the property values lagged one month, two months, and three months in the past.
>
> **[3:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=195)** What Ed is really trying to help us to understand is whether or not past values of the property are related to future values of the property.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=205)** So what we'd like to do now is run another regression which will give us a better sense for what kind of serial correlation might be in the data.
>
> **[3:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=213)** In this case, we are going to regress the change in property values on our lagged past property values.
>
> **[3:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=222)** One month, two months, and three months previously.
>
> **[3:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=228)** Do you recall how to run a regression in [[Microsoft Excel|Excel]]?
>
> **[3:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=231)** Great.
>
> **[3:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=232)** As a reminder, click the data tab and then click data analysis.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=237)** Now scroll down to where it says regression and click okay.
>
> **[4:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=244)** What do we want to put in for input Y range?
>
> **[4:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=247)** Do you remember?
>
> **[4:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=248)** Oh, that's right.
>
> **[4:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=250)** Yes, let's put in the value that we're trying to predict.
>
> **[4:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=253)** In this case, the change in property prices.
>
> **[4:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=258)** Because of the way Ed has structured our data, let's start with H1 through H1729.
>
> **[4:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=268)** How about for our X's, what should we use here?
>
> **[4:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=272)** You're absolutely right.
>
> **[4:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=273)** We want to use values for X that we think might be able to predict Y, so we're going to use I1 through K1 all the way down to I1729 through K1729.
>
> **[4:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=294)** Let's also check the labels box here to make it easier to read our regression, shall we?
>
> **[5:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=301)** Once we've done that, let's click okay.
>
> **[5:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=305)** And again, let's neaten up our regression a little bit by widening these columns and then converting our figures down here to have fewer decimals showing.
>
> **[5:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=326)** And finally, let's drop these last two columns, H and I, which are superfluous.
>
> **[5:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=334)** Now, what do we see here?
>
> **[5:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=336)** Well, first, let's take a look at our R squared.
>
> **[5:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=340)** What we see is that overall this regression is relatively weak.
>
> **[5:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=344)** We only have an R squared of slightly under 0.05.
>
> **[5:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=350)** That's not particularly strong.
>
> **[5:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=353)** On the other hand we are trying to forecast a change in price in the future using simple historical changes in price.
>
> **[6:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=362)** So what this does tell us is that it's probably going to be difficult to get a strong R squared in the first place.
>
> **[6:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=369)** We're also going to go down, and let's look at the coefficients now for our lagged one month, two month, and three month prices.
>
> **[6:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=379)** Recall that lag one was simply the valuation on the property or the price on the property one month ago.
>
> **[6:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=387)** Lag two was the price on the property two months ago.
>
> **[6:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=391)** And lag three was the price on the property three months ago.
>
> **[6:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=396)** What we see is the coefficient on lag one is positive and it looks like it's highly statistically significant.
>
> **[6:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=403)** The P value is zero and the T stat is nearly nine.
>
> **[6:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=408)** Lag two is negative.
>
> **[6:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=411)** It's similar in magnitude to lag one, but it's negative.
>
> **[6:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=415)** And the T stat is also very strong.
>
> **[6:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=418)** Again, in this case, it's significantly over the absolute value of three, it's -6.664.
>
> **[7:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=426)** And our P value is again zero.
>
> **[7:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=429)** Finally lag three is much smaller.
>
> **[7:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=432)** Lag three is positive, but only positive 0.035.
>
> **[7:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=437)** Our T stat is slightly under 1.5, which means it's not statistically significant.
>
> **[7:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=443)** And that's reflected in our P value, which is greater than 0.10.
>
> **[7:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=448)** What's this tell us?
>
> **[7:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=450)** Well, one interpretation of these data are that when we have a recent increase in property value one month ago, that leads to a higher property value this month.
>
> **[7:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=463)** In other words, it looks like property prices here are showing short term momentum.
>
> **[7:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=469)** A higher price last month leads to a higher price this month.
>
> **[7:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=475)** Over the more medium term, two months out however, that trend starts to change.
>
> **[8:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=481)** So we see a medium term reversal.
>
> **[8:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=484)** When we had higher prices two months ago, that leads to a lower price today.
>
> **[8:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=490)** This would indicate that there is a relationship between past prices and future prices for the property.
>
> **[8:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=499)** What do you think that Ed might suggest his firm do in this circumstance?
>
> **[8:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=504)** Any thoughts?
>
> **[8:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=506)** Remember, this is a subjective question.
>
> **[8:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=509)** Well, one answer would be that Ed's firm should look for periods where property values two months ago were relatively low and then buy today.
>
> **[8:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=522)** If he does that, short term improvement in property values should follow.
>
> **[8:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=527)** Put differently, a lower value for lag two, that is, a negative value for lag two, will lead to a higher or positive value today.
>
> **[8:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=539)** In essence, you can think about this as Ed's firm should buy when property prices appear abnormally distressed.
>
> **[9:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/analyzing-results?u=76281980&t=548)** Anytime that property value is much lower than we would've expected, it's probably a good time to invest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft Excel|Excel]] (1)
> **Versions:** 1.0 (1), 0.05 (1), 6.664 (1), 0.035 (1), 1.5 (1)
> **Definitions:** is a  (4), in other words (2)
> **Env Vars:** h1729 (1), i1729 (1), k1729 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Using Gen AI in economics forecasting](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=0)** - [Narrator] [[Artificial Intelligence (AI)|Artificial intelligence]], and especially [[Generative AI]] is a tool that has the potential to revolutionize the way that we do [[Economic Analysis]] and [[Forecasting]].
>
> **[0:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=10)** But let's take a look at what it can do right now and where some of the challenges are.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=17)** Okay, so I've pulled up three popular AI tools, Perplexity, Claude from Anthropic and [[ChatGPT]], and we're going to look at each of these in turn.
>
> **[0:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=29)** So I'm starting with Perplexity.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=31)** I'm giving it a basic task, right?
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=32)** Perplexity is supposed to be the equivalent of a gen AI search engine, right?
>
> **[0:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=38)** Meaning it has access to the internet.
>
> **[0:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=39)** So I want it to give me GDP data on a quarterly basis for the US from 1980 to present, not something that's particularly difficult.
>
> **[0:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=48)** We could probably do this using the [[Microsoft Excel|Excel]] add in from FRED, or even the FRED online portal in, I don't know, five minutes tops, right?
>
> **[0:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=57)** So if perplexity could cut time from that, it's useful.
>
> **[1:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=62)** All right, tells me, here's a summary of the US GDP data on a quarterly basis from 1980 to present.
>
> **[1:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=70)** Well, I wasn't really looking for a summary, okay?
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=73)** And I don't really know what its definition of a summary is, but it says, here's two points in 1980, then one point in 1989, a couple points in 1990 and 2000, 2010 and 2020.
>
> **[1:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=86)** And the last one is Q2 2023.
>
> **[1:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=91)** Not really sure what to do with that, okay?
>
> **[1:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=94)** And it says, here's some notable stuff that happened along the way.
>
> **[1:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=97)** Well, that's great, you know, maybe I didn't know anything about economics, but you know, I was really looking for some data here.
>
> **[1:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=104)** So, okay, I'm going to tell it.
>
> **[1:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=106)** Try putting this into a chart form.
>
> **[1:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=108)** And I was hoping that maybe it would go through and maybe it had all the information, it was just summarizing it, right?
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=113)** And it tells me, no, I can't actually create a visual chart.
>
> **[1:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=119)** And maybe it just didn't like the [[Microsoft Word|word]] chart that I'm using where I'm kind of thinking of a table.
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=124)** But you know, I can give you a text-based representation of the data, and that's fine with me.
>
> **[2:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=129)** But again, it's literally just giving me mostly the same data points, not all the same data points.
>
> **[2:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=135)** This one, 1985 was not up there above, and it left out, say Q1 of 1980.
>
> **[2:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=141)** But it's just giving me a couple data points along the way.
>
> **[2:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=144)** So that's not great, okay, let's turn to Claude.
>
> **[2:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=149)** So now with Claude, I've said, okay, well I'm going to give it a slightly different task.
>
> **[2:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=154)** What correlations do we see in this data?
>
> **[2:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=157)** And I've pulled up some data and I'll show you the data that I'm using.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=161)** And I've simply pulled this data in using FRED and it didn't take very long, right?
>
> **[2:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=167)** 1930 through 2022, inflation, T bill, rates, T bonds, things like that.
>
> **[2:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=173)** Nothing earth shattering here, but I populate that into Claude and I say, what correlations do you see?
>
> **[3:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=181)** Hmm, let me look at the data.
>
> **[3:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=184)** Nope, can't find anything.
>
> **[3:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=185)** Looks like there was an issue, I'm going to try again.
>
> **[3:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=188)** Nope, can't do it, I'm going to save us some time.
>
> **[3:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=192)** Claude was not able to even read the data.
>
> **[3:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=194)** Now I put this in in CSV format.
>
> **[3:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=197)** I tried putting it in an Excel format and it said no, it has to be in a CSV file.
>
> **[3:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=202)** So I go back and I put it in in CSV and it still can't read the data.
>
> **[3:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=206)** So, okay, all right.
>
> **[3:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=208)** Well let's switch over to ChatGPT now.
>
> **[3:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=211)** maybe I'm doing some sort of a presentation and I want to talk about or highlight say inflation in recent years and how that's changed and things like that.
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=220)** So I asked to create an image of inflation and a chicken.
>
> **[3:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=223)** That's a pretty good image, I like it.
>
> **[3:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=226)** It's kind of colorful and nice looking.
>
> **[3:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=228)** All right, fair enough.
>
> **[3:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=229)** What if I switch gears though, now on another slide, I need a, an image of a chicken buying a car.
>
> **[3:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=236)** Okay, well that does look like a chicken.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=237)** He's a different chicken.
>
> **[3:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=238)** That's okay, I suppose.
>
> **[4:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=240)** And he's buying a car, and I did tell it to take that chicken specifically, but you know, he's changed colors I guess, maybe in the sun or something, he's buying a car.
>
> **[4:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=249)** But you'll notice the text in the background, a little distorted, right?
>
> **[4:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=253)** I assume bales is supposed to be sales and PICE.
>
> **[4:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=257)** Maybe that's supposed to be price, I'm not quite sure.
>
> **[4:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=260)** But you know, overall pretty good images, they look nice certainly, I'd put these into a [[Microsoft PowerPoint|PowerPoint]].
>
> **[4:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=264)** So, all right, now how about if you give me the GDP data on a quarterly basis from 1980 through present, it instead gives me links.
>
> **[4:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=272)** Here's FRED, the BEA and Y charts.
>
> **[4:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=276)** Well that's great, I already knew about FRED, the BEA and Y charts, I just wanted you to pull the information for me and save me some time, right?
>
> **[4:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=284)** No, we can't do that.
>
> **[4:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=286)** So I thought maybe this was an issue with math.
>
> **[4:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=289)** Historically, ChatGPT has had trouble with doing math problems.
>
> **[4:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=292)** So I give it a quick math test here, right?
>
> **[4:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=294)** Present value of $5,000 in 1980 to 2024.
>
> **[4:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=299)** Then another one with a few numbers, seems to do okay with the math test.
>
> **[5:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=303)** These are the correct answers.
>
> **[5:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=304)** So I'm going to try again, still gives me the same result.
>
> **[5:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=308)** Now I say, okay, how about if you pull the data for me?
>
> **[5:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=312)** And it said, okay, well here's three websites, exactly the same websites it has continued to give me, well, that's nice, but all right, yeah, but I want you to give me the data.
>
> **[5:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=326)** Okay, so ChatGPT is able to do this successfully kind of, it goes through and notice, it's pulling values in.
>
> **[5:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=337)** So we at least did get a, you know, table of values.
>
> **[5:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=341)** But notice, all of these quarterly values are identical.
>
> **[5:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=348)** Obviously that's not correct, right?
>
> **[5:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=351)** I don't even know if these underlying units are correct necessarily, right?
>
> **[5:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=356)** But they're certainly not quarterly.
>
> **[5:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=357)** In other words, the current quarterly GDP for the US is not 29 trillion.
>
> **[6:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=364)** It hasn't even specified what these units actually are, but obviously the numbers are wrong.
>
> **[6:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=369)** So clearly still some issues along the way.
>
> **[6:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=373)** And then I try to get it to key in on this, pointing out, hey, what's the average quarterly growth rate each year based on that data?
>
> **[6:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=380)** Oh, well it did manage to do that math right.
>
> **[6:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=384)** It's 0%, so that's good, I suppose.
>
> **[6:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=391)** But you know, still not exactly what I was looking for in the sense that I wanted correct information from 1980 through present, but at least we got a table.
>
> **[6:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=404)** So obviously still some opportunities for improvement in generative AI when it comes to pulling in data and doing basic data analysis.
>
> **[6:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/using-gen-ai-in-economics-forecasting?u=76281980&t=413)** But on the plus side, it can produce pretty nice images of chickens to help us to understand inflation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Generative AI]] (2), [[Microsoft Excel|Excel]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Economic Analysis]] (1)
> **Env Vars:** fred (5), gdp (4), csv (3), bea (2), pice (1)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Gen AI and data](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=0)** - [Narrator] [[Artificial Intelligence (AI)|Artificial intelligence]] clearly still has some limits, but that doesn't mean it's not useful for [[Economic Analysis]].
>
> **[0:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=6)** Let's take a look at an example.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=7)** Now, I'm going to use [[ChatGPT]], because historically I've had the best luck with that.
>
> **[0:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=11)** But I fed it in some data from [[Microsoft Excel|Excel]] and I ask it, "What kind of correlations do you see in this data?"
>
> **[0:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=18)** And this is data on inflation, T. bill rates, GDP, things like that, right?
>
> **[0:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=24)** It's going to go through and highlight a series of different correlations for me.
>
> **[0:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=28)** And then I said, "Okay, well, let's put that into a correlations matrix."
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=32)** And we see it produces a pretty nice looking graphic when we get done.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=36)** And I went through it, and I'll tell you right now that just to be careful, I spot checked some of these values.
>
> **[0:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=41)** I won't go through and belabor doing it in front of you, but I've spot checked some of these values and they are correct.
>
> **[0:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=48)** So, so far, so good.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=51)** Alright, well now let's do a regression of inflation on GDP and T. bill rates, or T. bond rates, excuse me.
>
> **[0:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=59)** And it goes through and it's going to correctly run that regression.
>
> **[1:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=63)** Again, these coefficients are correct.
>
> **[1:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=64)** I re-ran it myself.
>
> **[1:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=66)** GDP, coefficient against inflation 0.1725.
>
> **[1:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=74)** Statistically significant at the 5% level, right?
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=77)** P-value of 3.5%. Pretty good.
>
> **[1:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=80)** T. bonds, again, 0.005, not statistically significant.
>
> **[1:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=86)** This is not a super complex regression.
>
> **[1:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=89)** We're not running fixed effects here or random effects, no two-stage least squares, none of that.
>
> **[1:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=93)** But at a basic level, it's pretty good that it was able to go through and run this regression.
>
> **[1:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=97)** So I said, "Okay, well, now here's really the acid test.
>
> **[1:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=99)** What would you forecast inflation to be next year and explain your approach?"
>
> **[1:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=104)** And it says, okay, well I'm going to use that regression and these coefficients, and then we're going to assume, say 2% GDP growth and a T. bond rate of 3%.
>
> **[1:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=115)** Reasonable assumptions.
>
> **[1:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=117)** Our assumptions could differ, but that's a reasonable starting point.
>
> **[2:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=120)** And based on that, we then go through and get from here inflation of 2.94%.
>
> **[2:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=130)** And we can see their arithmetic is correct, right?
>
> **[2:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=133)** So overall that's not bad, you know.
>
> **[2:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=137)** Is it perfect? No.
>
> **[2:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=139)** Is this at the level of what a professional economist would produce?
>
> **[2:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=142)** Probably not.
>
> **[2:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=143)** But this is the starting point for artificial intelligence systems like ChatGPT.
>
> **[2:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/gen-ai-and-data?u=76281980&t=149)** And so if that's where they are today, think about based on the improvement and the trend over time, we could see something quite powerful within a year or two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[ChatGPT]] (2), [[Economic Analysis]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** gdp (4)
> **Versions:** 0.1725 (1), 3.5 (1), 0.005 (1), 2.94 (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)


### 3. Forecasting Economic Trends

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced forecasting methods](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=0)** - [Instructor] Regression analysis is a great tool for making forecasts and predictions, but it's not perfect.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=7)** In particular, there's a number of problems that often come up with regression analysis, and one of the most pernicious problems is what we call omitted variables or omitted variables bias.
>
> **[0:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=19)** In particular, what sometimes happens is that we lack data on one factor that might impact the variable we're trying to predict.
>
> **[0:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=28)** Recall our friend Ed who is looking at predicting the value of a commercial property building.
>
> **[0:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=35)** One thing that might impact that commercial property building is a zoning change.
>
> **[0:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=40)** If the building Ed is looking at has historically been zoned as a commercial property, but the Town Zoning Committee has recently rezoned the property for a landfill, that's probably going to have an impact on valuation, right?
>
> **[0:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=56)** Just makes sense.
>
> **[0:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=57)** We lack data on zoning changes.
>
> **[1:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=61)** Now, in some cases, we can try and deal with the omitted variables problems by looking at gathering additional data.
>
> **[1:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=69)** For example, data on zoning changes and how that might impact predicted values historically.
>
> **[1:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=76)** But in other cases, we simply can't realistically find the right kind of data to deal with this.
>
> **[1:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=82)** One opportunity that we have then to deal with omitted variables is a powerful technique that we call fixed effects.
>
> **[1:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=91)** Fixed effects or a fixed effects regression, lets us deal with omitted variables using a special modeling technique.
>
> **[1:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=99)** What is a fixed effects regression?
>
> **[1:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=102)** Well fixed effects is a statistical technique that essentially creates a placeholder variable for a unit of interest and lets us avoid problems with omitted variables.
>
> **[1:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=112)** Here's an example.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=113)** Let's pretend we're trying to predict a particular salesperson's sales next month.
>
> **[1:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=118)** Well, the problem is that no matter how much data we capture, we're still probably going to be missing that human element.
>
> **[2:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=126)** Maybe this person feels really motivated next month, and so they're able to sell better.
>
> **[2:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=131)** Well, we're going to be missing that particular data point.
>
> **[2:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=134)** We have an omitted variable there.
>
> **[2:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=137)** One way to deal with this is to create a fixed effects variable, in essence, to create a single dummy variable or binary variable that will capture each individual person.
>
> **[2:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=149)** So if we have 10 different salespeople, we will have a variable for salesperson one, for salesperson two, for salesperson three, et cetera, and it'll capture the intangibles related to that particular salesperson, intangibles such as likability.
>
> **[2:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=166)** In essence then, fixed effects lets us capture individual elements that are unique and specific to a particular individual, be it a person or a company, for example.
>
> **[2:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/advanced-forecasting-methods?u=76281980&t=179)** Fixed effects is a very powerful tool that we can use in our predictions in regressions going forward.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Binomial regressions](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=0)** - [Instructor] Another common problem that comes up when using regressions to try and predict the outcome of variables that we care about is that the variable we care about might be unique.
>
> **[0:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=10)** It might have what we refer to as a binary outcome.
>
> **[0:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=15)** Meaning that the final outcome can go one of two possible distinct ways.
>
> **[0:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=20)** For example, if we're trying to predict the [[Probability]] of a default on a bank loan, we can have a customer who defaults, or they don't default.
>
> **[0:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=31)** There's no in between.
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=32)** Either the customer pays back the bank over time, or they do not.
>
> **[0:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=37)** Similarly, perhaps we're trying to predict the risk of a heart attack.
>
> **[0:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=41)** Either an individual has a heart attack, or they don't.
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=45)** We call these type of one or zero outcomes if you will, binary variables.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=51)** When we're trying to predict a binary outcome, we need to use special models.
>
> **[0:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=57)** The two most common models are logit and probit models.
>
> **[1:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=62)** These [[Forms]] of regression allow us to predict discrete variables with a mix of other types of variables, both continuous and discrete as predictors.
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=73)** In essence, these types of regressions are answering the same question as a multiple regression is, but in a cleaner and more statistically correct fashion.
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=87)** When we use logit or probit regressions, it's typically because we're trying to model a variable where, again, it has a binary outcome, and we're looking at a nonlinear relationship between that outcome and its predictors.
>
> **[1:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=102)** So, for example, we might ask how we can predict the probability of heart disease given other factors.
>
> **[1:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=109)** The answer is that we'd use a logit or probit regression and then regular predictors like blood pressure.
>
> **[1:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=117)** How does this work in practice?
>
> **[1:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=119)** Well, the answer is that our Y variable will be a one or zero for each of our data points.
>
> **[2:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=126)** We might have 100 individuals, and we give them a one if they have heart disease and a zero if they do not.
>
> **[2:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/binomial-regressions?u=76281980&t=134)** Then we'd collect data on other factors related to those individuals, such as their blood pressure, their age, their gender, et cetera.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Forms]] (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Fixed effects regressions](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=0)** - [Instructor] Ed's boss has asked him to help the firm understand what drives changes in interest rates.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=7)** In particular, because Ed works for a real estate company, one of the primary interest rates that they're concerned about is the Federal Reserve rate.
>
> **[0:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=16)** Ed wants to understand what factors drive the Federal Reserve rate so that he can apply that understanding to projects the company he's working on.
>
> **[0:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=26)** I'm in the 0303 Begin file from the Exercise Files folder.
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=33)** Ed's gather data using FRED, the Federal Reserve Economic Database on the Federal Reserve rate, inflation, industrial production numbers, and unemployment figures.
>
> **[0:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=47)** In particular, he's gathered this data on a monthly basis from 1960 through present.
>
> **[0:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=54)** Let's go ahead and clean up the data a little bit, just to help make it more understandable for us.
>
> **[0:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=59)** So this first two columns, A and B, is the effective federal funds rate and value is the value for that.
>
> **[1:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=67)** I'm going to relabel this column, Fed Funds Rate.
>
> **[1:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=71)** These next two columns, C and D, are the changes in the consumer price index on a core level.
>
> **[1:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=78)** That means after excluding food and energy prices.
>
> **[1:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=81)** So I'm going to relabel value to CPI.
>
> **[1:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=86)** And columns E and F, we have industrial production index values and the changes in those on a monthly level.
>
> **[1:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=94)** So again, I'm going to label this Industrial Production.
>
> **[1:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=100)** And then finally in columns G and H, we have non-farm payrolls changes in every month.
>
> **[1:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=107)** So I'm going to label this Payrolls.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=113)** Having done that, I'll delete these rows because we don't need them anymore.
>
> **[1:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=119)** Now, Ed is very kindly gathered the data for us on a monthly basis so that we don't have to merge it together.
>
> **[2:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=127)** So I'm going to remove the extra date columns, which we no longer need.
>
> **[2:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=132)** And if you notice, Ed has gathered the change in each value every month.
>
> **[2:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=139)** Now, what Ed is interested in is not the change in the federal funds rate, but rather what leads the Federal Reserve to raise rates.
>
> **[2:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=150)** His firm is happy if the Federal Reserve cuts rates.
>
> **[2:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=153)** If interest rates fall, that makes it more feasible for them to pursue various projects.
>
> **[2:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=159)** Ed is really only interested in what happens if the Federal Reserve raises rates.
>
> **[2:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=164)** If the Federal Reserve lowers rates, that's good for his real estate company.
>
> **[2:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=170)** So we are going to add a new column that we're going to label Fed Rate Hike, and we're going to set it equal to one if the Federal Reserve increases rates.
>
> **[3:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=181)** So we're going to use an IF function here.
>
> **[3:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=184)** I've typed equals, if, open parenthesis.
>
> **[3:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=187)** Now I'm going to specify the B column.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=191)** In this case, B2, and say, if B2 is greater than zero, then we have one, otherwise, zero.
>
> **[3:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=202)** And I'm going to drag and drop through the bottom.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=205)** Now we see that since 1960, there have been 342 occasions where the Fed raised rates.
>
> **[3:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=214)** That's out of a total of 687 months.
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=220)** Now that we've done that, what we're looking at is a binary variable.
>
> **[3:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=227)** Recall, that when we're using a binary variable and we're trying to predict a binary outcome, we are really only interested in using a probit or logit style regression.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=237)** That's why we had to change this variable to be equal to a one or zero.
>
> **[4:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=244)** Now, in this case, [[Microsoft Excel|Excel]] has limited capability to do more advanced types of regression analysis.
>
> **[4:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=252)** So we are going to use our standard regression that's available under the Data tab.
>
> **[4:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=260)** We're going to click Data Analysis and come down and set up our regression.
>
> **[4:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=266)** Please note that if you're interested in doing more advanced types of regressions like logit and probit regressions, like fixed effects regressions, there are many statistical software packages out there.
>
> **[4:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=278)** SAS, Data, and R are all examples of software that you can use, just to name a few.
>
> **[4:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=284)** In our case, we're going to stick with Excel because it's simple, straightforward, and easy to use.
>
> **[4:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=291)** So our Y input range is going to be from C1 through C687.
>
> **[4:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=299)** And our X input ranges are going to be D1 to F1, all the way down to row 687.
>
> **[5:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=307)** And again, we're going to have labels.
>
> **[5:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=310)** When we're ready, let's click Okay.
>
> **[5:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=314)** Now I'm going to neaten up our regression a little bit while widening the columns and trimming the last couple of columns, which we, again, don't need.
>
> **[5:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=326)** Next, I'm going to go through and clean up our numbers to shrink the number of decimal places.
>
> **[5:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=334)** And I'm going to change our R squared values so that they're in percentage terms.
>
> **[5:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=342)** Now, what we see here is that we have a relatively modest R squared, only about 7%.
>
> **[5:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=349)** What this is really telling us is that, the variables we've selected, inflation, industrial production, and payroll have only limited ability to predict Federal Reserve fund rate changes, at least based on the frequency of data that we've collected.
>
> **[6:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=366)** We might try lagging some of the variables to see if that was more effective, but for right now, we'll just stick with the existing regression.
>
> **[6:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=375)** However, we also see that two of our variables, payroll and industrial production do, in fact, have a statistically significant impact on whether the Fed hikes rates.
>
> **[6:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=388)** Industrial production measures the strength of the economy and that it measures how much is being produced by manufacturing firms across the economy.
>
> **[6:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=397)** Payrolls, of course, are also a good measure of strengthen the economy.
>
> **[6:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=401)** The higher those payroll rates are, that is the more positive the payroll growth is, the stronger the economy is.
>
> **[6:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=408)** It indicates the economy is adding new jobs at a faster rate.
>
> **[6:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=412)** What we see here, is that industrial production is statistically significant.
>
> **[6:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=416)** The P value is less than 0.10, although only marginally so, and payrolls is highly statistically significant.
>
> **[7:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=424)** It has a P value of zero.
>
> **[7:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=427)** What this in essence tells us, is that when payrolls are higher, that is when there's a positive change in payrolls and more people are being employed, or when there's a positive change in industrial production, the Fed is also more likely to raise interest rates.
>
> **[7:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=444)** That's a powerful insight that Ed can use to help his firm understand what interest rates might be like in the future.
>
> **[7:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/fixed-effects-regressions?u=76281980&t=452)** If he identifies payroll and industrial production trends that indicate that both those figures are likely to be strong going forward, his firm should also be aware there will probably be Fed interest rate hikes coming along the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Env Vars:** fred (1), cpi (1), sas (1), c687 (1)
> **Warnings:** note that (1), be aware (1)
> **CLI Commands:** make (1)
> **Versions:** 0.10 (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Difference in differences analysis](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=0)** - [Instructor] In addition to fixed effects regressions and binary regressions like logit and probit, we also run into what's called a difference-in-differences estimator.
>
> **[0:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=10)** A difference-in-differences estimator is another way to make predictions in special circumstances.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=17)** In particular, we often run into circumstances where we have a two-group comparison, and we're trying to make a prediction across two points in time.
>
> **[0:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=27)** For example, perhaps we're looking at real estate in two different cities before and after a tax cut that occurs in one city versus another.
>
> **[0:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=38)** Well, in this set of circumstances, we might be interested in understanding how a tax cut impacts property values in, say, city A, while city B does not have a tax cut.
>
> **[0:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=52)** In order to look at this type of analysis, we would use a difference-in-differences estimator, which looks at the change in property values between the two cities before and after that tax rate hike.
>
> **[1:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=66)** Now we can also do much more complicated types of analysis involving many groups over many time periods.
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=73)** For example, we could look at what happens over the course of two or three years across several different cities.
>
> **[1:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=81)** Some of which raise taxes, some of which lower taxes, and some of which do nothing.
>
> **[1:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=87)** Whatever type of analysis we choose to do, a difference-in-differences approach is a unique opportunity that gives us a more powerful, predictive value.
>
> **[1:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=97)** In particular, when we're using a difference-in-differences estimation approach, we need to start by identifying what's called a control group.
>
> **[1:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=106)** A control group is a group of variables that do not undergo what we call a treatment.
>
> **[1:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=113)** In my example, where we have two cities, one of which undergoes a tax change and the other does not, the city in which taxes do not change is our control group.
>
> **[2:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=125)** We're going to compare what happens when taxes rise or fall in another city to what happens to our control city, where taxes don't change.
>
> **[2:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=136)** That's our basic key assumption underlying the difference-in-differences estimator.
>
> **[2:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=142)** We call this an identifying assumption.
>
> **[2:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=145)** Now, as I said, what we need to assume to begin with is that that control group is essentially the same as our non-control or treatment groups other than this one single change.
>
> **[2:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=160)** For example, let's put some specific figures on this.
>
> **[2:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=164)** We might use Chicago and Los Angeles as two paired cities.
>
> **[2:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=169)** Chicago undergoes a tax hike, let's say.
>
> **[2:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=172)** And Los Angeles has no tax hike.
>
> **[2:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=175)** We would assume, in this case, that if Chicago had not changed their taxes, the trend in real estate prices in Chicago would've been the same as the trend in real estate prices in Los Angeles.
>
> **[3:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=189)** That doesn't mean the prices would be identical, just that they would be moving in the same direction at the same rate.
>
> **[3:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=195)** I've illustrated that point in the figure you see here.
>
> **[3:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=199)** Before our tax hike, we have the green city, and its real estate prices are higher.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=205)** We have the red city with lower real estate prices.
>
> **[3:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=209)** Now, in this case, we have a change in tax rates.
>
> **[3:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=213)** Let's say here taxes are lower.
>
> **[3:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=215)** In the green city, real estate property values rise because taxes fall.
>
> **[3:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=221)** In the red city, real estate property values also rise, but not as quickly because there is no tax change.
>
> **[3:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=229)** In essence, what we're trying to do is measure the effect of the tax program using only pre and post data from our treatment group.
>
> **[4:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=241)** That is the city that underwent the tax change.
>
> **[4:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=244)** We're ignoring the general time trend.
>
> **[4:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=248)** Once we've done that, we want to compare how that program changed prices in the treatment group versus the control group.
>
> **[4:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=258)** In other words, we are looking at before versus after that tax hike.
>
> **[4:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=264)** This leads us to create what's, in essence, a hypothetical situation.
>
> **[4:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=269)** Assume that the green group had never lowered taxes.
>
> **[4:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=273)** What would their prices be like today?
>
> **[4:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=275)** This dotted line illustrates it.
>
> **[4:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=278)** Now we can isolate the effect of our tax change.
>
> **[4:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=283)** In this case, by lowering taxes, the green city went from the dotted line to the solid straight line.
>
> **[4:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=292)** That's the impact of lower taxes on real estate prices.
>
> **[4:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=297)** We're taking into account the difference-in-differences between green and red, pre and post, the tax hike.
>
> **[5:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=306)** This illustrates how we can use difference-in-differences estimation to identify changes in very unique sets of circumstances.
>
> **[5:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/difference-in-differences-analysis?u=76281980&t=316)** Once we've identified the impact historically of a tax hike, we can look at making predictions on how a tax hike would change real estate prices in other cities in the future, where such a tax hike has not yet occurred.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), we call this (1), in other words (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Stata and economic forecasting](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=0)** - [Instructor] One of the most common practical software packages that you'll run into when doing economic [[Forecasting]] is [[Stata]].
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=7)** Let's take a look at how you use Stata, at least at a high level.
>
> **[0:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=12)** Now, this video by no means is going to tell you exactly how to use Stata.
>
> **[0:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=16)** This is just kind of a gentle introduction to the software itself.
>
> **[0:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=20)** There are several courses here on [[LinkedIn]] Learning that do deal with Stata, including one that I have.
>
> **[0:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=26)** Okay, so when you open up Stata, you basically have kind of four different sections.
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=32)** Over here in the center, you have your output section.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=36)** This is going to show you kind of output from any commands you type in, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=42)** Down below that, you have the command bar.
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=44)** And you can kind of alter the size of these things as you'd like.
>
> **[0:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=48)** But the command bar is where you go to put in any commands or coding that you have.
>
> **[0:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=53)** All right, over here on the right side, you're going to have different variables that are in your dataset.
>
> **[1:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=61)** And on the left side, you'll have a history of different commands you've entered over time.
>
> **[1:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=65)** Now with Stata, you can go and save a record of your commands using what's called a do-file.
>
> **[1:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=71)** So I'm going to pull up an example do-file that I have from a research project I've done.
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=77)** So here, we have an example do-file.
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=79)** And basically, as you're going to see, it's a lot of coding, or you might even call it pseudo coding.
>
> **[1:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=86)** We have certain keywords, as an example, that are used in Stata, and they operate with different mathematical operators to let you go through and clean up your dataset.
>
> **[1:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=98)** Now I'm going to go ahead and I'm going to pull this dataset, and I can do that using this line here.
>
> **[1:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=107)** Now, if I wanted to, I could just execute this command line right from this do section, but I'm going to illustrate kind of how we would put it into the command bar itself.
>
> **[2:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=121)** And what you see here is we've got a series of different variables, maybe two dozen or so, related to this particular dataset.
>
> **[2:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=130)** If you wanted to go through and kind of drill down and understand the data a little bit better, you could use one of these two buttons, either the Data Editor or the Data Browser.
>
> **[2:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=140)** All right, now I'm always going to use this Data Editor Browse button, the one with the magnifying glass, rather than the Data Editor Edit button, the one with the pencil.
>
> **[2:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=149)** And that's largely because you don't want to be changing the data in the sheet itself.
>
> **[2:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=155)** You want to use the command line to change those data.
>
> **[2:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=158)** But when you open this up, what you'll really see is that Stata has kind of built in, behind the scenes an [[Microsoft Excel|Excel]] type spreadsheet.
>
> **[2:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=166)** And this lets you go through and look at all of your different variables and the different observations related to those variables over time.
>
> **[2:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=176)** So this is a list of companies over time, for different dates, as an example.
>
> **[3:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=182)** And you can see if we come to the bottom here, I have roughly 1.2 million observations.
>
> **[3:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=190)** That is 1.2 million rows of data, and maybe about 30 or so variables.
>
> **[3:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=196)** So Stata has a lot more horsepower for kind of dealing with this type of, I'm going to call it a medium-sized dataset, versus something like Excel.
>
> **[3:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=206)** Technically, Excel can handle around a million rows of data, at least newer versions of Excel can.
>
> **[3:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=212)** But in practice, unfortunately, it's often pretty slow when it runs into a lot of challenges.
>
> **[3:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=218)** Some are obvious, some are not obvious.
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=220)** When we start having 10, 20, 30, 40, 50 different variables that we're dealing with, and then we're trying to make operations or changes to that data, based on say, a wholesale command across all of Excel, you're going to run into problems.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=237)** So Stata's great for this kind of heavy duty data analytics.
>
> **[4:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=243)** We're not talking about tens of millions of observations.
>
> **[4:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=247)** This isn't really [[Big Data]] per se, but it is a large amount of data, very reasonable dataset to be looking at.
>
> **[4:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=254)** In a nutshell though, that's how you're going to go about getting started with Stata, kind of pulling some data in, and then from there, we could go through and manipulate these different variables as we wanted to.
>
> **[4:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=266)** For instance, if we just wanted to drop one of our variables.
>
> **[4:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=270)** I'd put in the key command drop here, and voila, it disappears from my dataset.
>
> **[4:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=277)** And there's all sorts of transformations, additions new variables that I could do, et cetera, to this data.
>
> **[4:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/stata-and-economic-forecasting?u=76281980&t=284)** But hopefully at this point, you now have a better understanding, at least at a superficial level, of what Stata is, how it works, and why it's useful for economic forecasting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stata]] (12), [[Microsoft Excel|Excel]] (5), [[Forecasting]] (2), [[LinkedIn]] (1), [[Big Data]] (1)
> **Versions:** 1.2 (2)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** getting started (1)

#### [Interpreting Stata results](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=0)** - [Instructor] Even if you are not likely to be running the [[Economic Analysis]] yourself in [[Stata]], it's often important to be able to interpret the data or the output that comes from Stata or programs like it.
>
> **[0:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=13)** So let's take a look at how this is done.
>
> **[0:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=16)** Now, I've got my Stata program open, and we've got a dataset involving about 100 and, yeah, about 165,000 different observations, and maybe about 30 to 40 variables or so, right.
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=32)** So kind of a medium size dataset here.
>
> **[0:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=35)** Now, we're going to go through and run some output.
>
> **[0:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=37)** Now, the nice thing about Stata is that it's very easy to do any sort of manipulation of the data.
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=44)** It's also very easy to spit out different commands that will allow you to do regressions or things like that.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=51)** You generally just use the reg command, and then put in the variables you're interested in.
>
> **[0:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=56)** For example, I could regress, say, share price on number of shares outstanding and the spread and valuated return, for instance, right.
>
> **[1:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=67)** You can also do fixed effects regressions using the xtreg command, okay.
>
> **[1:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=74)** So let's take a look at a couple of these.
>
> **[1:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=76)** I'm going to pull up my Do file to help me do this.
>
> **[1:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=80)** So again, there's nothing special about this particular Do file.
>
> **[1:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=83)** It's simply a file that I'd previously created for some research that I was doing.
>
> **[1:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=89)** I'm going to go ahead and execute this initial regression statement.
>
> **[1:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=94)** And then I'm going to also go ahead and put out a year fixed effects dummy using the xtset command.
>
> **[1:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=105)** And then, I'll go ahead and use the year fixed effects regression.
>
> **[1:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=115)** Now, what we're going to see if we kind of look at the output here, so we have up above, here's our initial regression.
>
> **[2:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=124)** Now, we're looking at this variable, k_g_M2.
>
> **[2:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=129)** And the economic meaning of the variables isn't particularly important for our purposes.
>
> **[2:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=133)** What we care about instead, though, is just kind of looking at what Stata is telling us.
>
> **[2:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=137)** So here's our R-squared and Adj R-squared.
>
> **[2:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=140)** And this tells us that basically our regression is reasonable, seems to have some predictive power.
>
> **[2:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=146)** About 62% of the variation in the Y variable is explained by these X variables.
>
> **[2:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=153)** And we see most of the X variables are statistically significant based on the P values and the t scores here.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=161)** And here's our coefficients, and the associated standard errors down below.
>
> **[2:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=166)** Now, again, maybe this is a good regression, maybe it's not, but this is basically what Stata is going to put out for you in a typical regression analysis.
>
> **[2:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=175)** If we wanted to go, and you could do this in [[Microsoft Excel|Excel]] too, to be clear, right?
>
> **[2:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=179)** A basic regression like this, you can do in Excel.
>
> **[3:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=183)** However, where Excel gets limited is if we want to get to more complicated kinds of regressions, right?
>
> **[3:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=190)** For instance, maybe I want to use a year fixed effects regression, right?
>
> **[3:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=196)** It's reasonable in a lot of datasets to think that we've got some sort of seasonality or some sort of fixed effects over time based on, say, time period that we're looking at.
>
> **[3:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=207)** So in this case, we're using year fixed effects, and we could use multiple different fixed effects if we wanted to.
>
> **[3:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=214)** But again, we see our R-squareds and overall right around 0.73, meaning 73, 74% of the variation in the Y, explained by those Xs.
>
> **[3:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=227)** And very high R-squared between the different fixed effects.
>
> **[3:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=231)** That's pretty typical though.
>
> **[3:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=232)** I don't necessarily read too much into that.
>
> **[3:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=235)** But then down below, we again have our coefficients, our t stats, and our P variables.
>
> **[4:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=240)** So this is really useful if we want to go through and kind of create a more robust set of regression possibilities.
>
> **[4:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=251)** And we can do this in a variety of ways.
>
> **[4:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=254)** So for instance, let's just say that I take this xtreg command and I take off the fixed effects at the end.
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=265)** Well, now, I've just transformed this from a fixed effects within regression to a random effects, GLS regression, Generalized Lease Squares.
>
> **[4:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=277)** So again, it's going to give me kind of similar output, which probably makes intuitive sense if we kind of understand what the economic variables are, but just big picture.
>
> **[4:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=286)** If we haven't changed the regression form, certainly we wouldn't necessarily expect wildly different R-squareds and wildly different coefficients between our two different kind of statistical functional [[Forms]] here.
>
> **[5:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=301)** But we can use a lot of different techniques in Stata that we simply don't have access to in Excel.
>
> **[5:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=308)** In a nutshell, though, that's how we go through and kind of interpret what we're going to be looking at when it comes to the output from Stata.
>
> **[5:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=316)** It looks complicated at first.
>
> **[5:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=318)** In practice, it's really not that hard to use.
>
> **[5:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=321)** Pretty simple if you learn a few key commands.
>
> **[5:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=323)** You can be putting out regression results and interpreting them on your own in no time at all.
>
> **[5:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=328)** So if you have an Excel spreadsheet, I would recommend going and importing some of this data.
>
> **[5:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=335)** You can do it right there with the Import command, and then just try playing around with some of this on your route.
>
> **[5:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=341)** All right.
>
> **[5:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-stata-results?u=76281980&t=342)** Give it a try and see how you make out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stata]] (8), [[Microsoft Excel|Excel]] (5), [[Economic Analysis]] (1), [[Forms]] (1)
> **Analogies:** for instance (3), for example (1), picture (1)
> **CLI Commands:** make (1)
> **Env Vars:** gls (1)
> **Versions:** 0.73 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Using Economic Forecasts

[↑ Back to Table of Contents](#table-of-contents)

#### [What do the results mean?](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=0)** - [Instructor] Ed is stumped.
>
> **[0:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=1)** Ed's boss has asked him to forecast flows in and out of REITs.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=7)** If you recall, Ed is our economist friend who works for a commercial real estate firm, and his boss is concerned that flows in and out of real estate investment trusts might have something to do with the level of funding and level of competition that Ed's company faces.
>
> **[0:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=23)** So Ed's gone through and he's gathered data on real estate investment trust asset inflows and outflows, along with a variety of other potentially related variables from the period 1986 through 2012.
>
> **[0:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=38)** Here's Ed's problem though.
>
> **[0:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=41)** One of the primary factors he believes that drives flows in and out of tax-sensitive asset classes like REITs is the long-term capital gains rate.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=51)** Ed's gathered long-term capital gains data from 1986 through 2012.
>
> **[0:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=58)** And he's observed that it appears there's roughly four different tax regimes that have been in place during that period.
>
> **[1:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=66)** Prior to 1987, tax rates, according to Ed's data, were roughly 20%.
>
> **[1:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=72)** After 1987, long-term capital gains rates rose to 28%.
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=79)** Subsequently, in the late 1990s, after several rises and small falls, tax rates fell substantially to 21.19% as the effective rate.
>
> **[1:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=93)** After a few more tax changes along the way, in the early 2000s, rates fell again into the mid-teens, starting at 16.05% according to Ed's data and then subsequently falling to roughly 15.7%.
>
> **[1:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=108)** Now Ed's not sure how to deal with these regime changes in long-term capital gains rates.
>
> **[1:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=116)** Do you have any ideas on what he might be able to do here?
>
> **[2:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=120)** Well, one option we could explore for Ed is creating a binary variable for each of the long-term capital gains rate regimes.
>
> **[2:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=129)** In particular, we'd like to create a variable with a one or zero value that represents each of these long-term capital gains rates regimes.
>
> **[2:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=140)** So let's do that now.
>
> **[2:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=143)** So I'm going to name my variables LTR for long-term regime, and then one, two, three, and four.
>
> **[2:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=158)** Now, for technical reasons, we will only use three of these four binary variables when running our regression.
>
> **[2:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=166)** In particular, whenever we have a series of binary variables, we need to exclude one of those variables when running the regression.
>
> **[2:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=175)** Doing that creates a status quo or a default if you will.
>
> **[3:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=180)** If we include all four of the binary variables in our regression, the regression output won't run correctly.
>
> **[3:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=189)** So let's go through right now and create our binary variables.
>
> **[3:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=194)** For example, for long-term regime one, our data is going to start in 1986 in the middle of the year and we will have a one value on that variable through the end of the year, starting in January of 1987 when we switch to the new long-term rates regime.
>
> **[3:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=215)** We'll have a zero value.
>
> **[3:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=218)** Similarly, LTR2 is going to be zero up through the start of 1987 when the new regime is put in place.
>
> **[3:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=232)** And then it's going to run as a value of one up until June of 1997.
>
> **[3:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=239)** And thereafter, it switches back to zero.
>
> **[4:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=244)** Similarly, LTR3 becomes one in June of 1987 and runs up until the start of LTR4, which is going to be in June of 2003.
>
> **[4:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=263)** And then it's a zero in all other cases.
>
> **[4:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=267)** Now, once we've filled this out, we'll have a complete dataset that we can reveal.
>
> **[4:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=276)** So now for our fourth regime, that's going to run up until the end of our dataset.
>
> **[4:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=282)** It starts in 2003.
>
> **[4:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=288)** Right there.
>
> **[4:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=291)** And then it is a zero during the [[Representational State Transfer (REST)|rest]] of our data points.
>
> **[4:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=297)** Now, why did we go through and create all of these binary variables?
>
> **[5:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=301)** Well, you recall that we talked about fixed effects before.
>
> **[5:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=305)** One of the things that Ed was concerned about is that the tax rate change might simply be a symptom of broader changes across the United States.
>
> **[5:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=317)** In particular, long-term capital gains rates might be endogenously related to other factors.
>
> **[5:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=325)** What do we mean by endogenously related?
>
> **[5:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=327)** Well, it means that there are a variety of factors that come together and influence that particular change and disentangling those factors is very difficult.
>
> **[5:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=339)** So what we're trying to capture here is all of that motley array of factors.
>
> **[5:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=345)** For example, political upheaval or dissatisfaction with high tax rates or changes in the underlying economy.
>
> **[5:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=352)** All kinds of things that we can't necessarily effectively capture easily with other data, we're going to try to proxy for or capture using each of our long-term regimes.
>
> **[6:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=365)** Now that we've created our binary variables, let's clean up our dataset a little bit.
>
> **[6:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=371)** We no longer need the long-term regime data point.
>
> **[6:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=375)** And as I said, we're actually only going to need three of our four variables.
>
> **[6:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=382)** Do you see why?
>
> **[6:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=384)** If you said that because when LTR2, 3 and 4 are all zero, that means that LTR1 must be equal to one, you're absolutely correct.
>
> **[6:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=396)** So now we're ready to go.
>
> **[6:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=399)** Let's go and run a regression.
>
> **[6:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=403)** Do you recall how to do a regression?
>
> **[6:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=406)** If you said we should go to the Data tab, you're absolutely correct.
>
> **[6:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=411)** So let's go to the Data tab and click Data Analysis.
>
> **[6:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=415)** From here, we'll click Regression and then OK.
>
> **[7:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=421)** What shall we put in for Y inputs?
>
> **[7:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=423)** Well, in this case, we're trying to predict our REIT flows.
>
> **[7:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=428)** So we're going to run that data from B1 to B315.
>
> **[7:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=435)** Our Xs are going to range from C to M and from row one to row 315.
>
> **[7:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=445)** Let's make sure our label radio button is checked.
>
> **[7:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=450)** And for output range, rather than using a new worksheet, let's put our output here in this worksheet where it's easier to read.
>
> **[7:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=459)** To do that, make sure that we click the output range box, and then let's scroll down and find a good spot to put this in.
>
> **[7:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=468)** How about cell O26?
>
> **[7:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=473)** Once you've done all that, let's click OK and see what happens.
>
> **[7:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=478)** Okay.
>
> **[7:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=479)** Now that we've got our output, let's neaten it up a bit by widening our rows and columns.
>
> **[8:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=488)** And then remove these last two columns that we don't need.
>
> **[8:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=494)** And neaten up our variables by changing the number of decimal points.
>
> **[8:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=500)** To do that, we're going to highlight it and hit Control + 1, and then change it to a number with two decimals and a thousands separator.
>
> **[8:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=512)** What do we observe about this regression?
>
> **[8:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=514)** Well, it looks like a reasonable estimator.
>
> **[8:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=518)** We've got an R squared of roughly 46%, .46.
>
> **[8:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=523)** An adjusted R squared, which takes into account the number of variables that we're using of 44.1%.
>
> **[8:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=529)** That's not bad, especially given the type of data that we're looking at.
>
> **[8:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=534)** Now, looking down below, we see that many of our variables are statically significant.
>
> **[9:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=540)** For example, it looks like total flows, which represents the flows of assets into and out of all types of investments, that's highly statistically significant, as is the Fed Funds Rate unsurprisingly.
>
> **[9:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=554)** But what we were really interested in are these regime variables.
>
> **[9:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=559)** LTRs 2, 3 and 4.
>
> **[9:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=562)** Now, remember, what we're comparing against, in this case, is LTR1, so the very start of our data.
>
> **[9:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=570)** Well, LTR2 resulted in capital gains rates rising.
>
> **[9:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=575)** It appears that that resulted in a fall or it was associated with a fall in the level of fund flows into REITs.
>
> **[9:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=585)** That effect though is not statistically significant.
>
> **[9:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=589)** Later on, once we entered regimes three and four, fund flows did significantly increase.
>
> **[9:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=597)** In particular, the effect of a lower capital gains tax rate resulted in an average inflow of $33,239.
>
> **[10:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=608)** Now, these numbers are represented in millions of dollars.
>
> **[10:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=612)** And they're on a monthly basis.
>
> **[10:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=613)** So what this is telling us is that fund flows into REITs increased by an average of $33 billion per month once we changed to a lower capital gains tax rate.
>
> **[10:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=625)** When we switched again to regime four, and capital gains tax rates became still lower, inflows increased even more.
>
> **[10:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=635)** Can we say that the lower capital gains tax rate caused an increase in REIT flows?
>
> **[10:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=643)** Well, no, we can't because again, remember, there are probably other variables that changed at the same time these long-term capital gains rates changed.
>
> **[10:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=653)** Maybe political environments changed.
>
> **[10:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=656)** Maybe the overall economy was stronger and so the government didn't need to collect as much tax revenue.
>
> **[11:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=661)** There could be many possible factors that might have driven both the change in capital gains rates and the change in REIT flows.
>
> **[11:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=670)** What we do now is that whatever drove the change in long-term capital gains rates also drove a large statistically and economically significant change in the flow of funds into REITs.
>
> **[11:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=685)** How do we know it was statistically significant?
>
> **[11:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=688)** Our P-values are less than 0.1.
>
> **[11:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=693)** Now that we have analyzed the data, we need to go through and we need to come up with a prediction model for what would actually happen in the future.
>
> **[11:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=701)** How could we do that?
>
> **[11:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=703)** Well, one answer is to build a Hedonic model.
>
> **[11:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/what-do-the-results-mean?u=76281980&t=707)** We'll take a look at that coming up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ltr2 (3), reit (3), ltr1 (2), ltr (1), ltr3 (1)
> **Versions:** 21.19 (1), 16.05 (1), 15.7 (1), 44.1 (1), 0.1 (1)
> **UI Navigation:** go to (2), switch to (1), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (3)
> **Cross-References:** coming up (1)

#### [Testing accuracy in economic forecasts](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=0)** - [Instructor] I'm in the 04_02_Begin file from the Exercise Files folder.
>
> **[0:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=7)** Now that we've developed the regression analysis and put together some binary variables representing fixed effects across our dataset, it's time to go through and make a forecast.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=21)** If you recall, Ed, the economist, is trying to forecast REIT flows and the impacts that different economic variables will have on flow funds into and out of REITs.
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=33)** So you'd like to use the data that he has gathered between the year 1986 and the year 2012 to make that forecast.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=42)** To do this, we're going to use the regression that we developed last time.
>
> **[0:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=48)** So I'm going to start by setting up what this forecast is going to look like.
>
> **[0:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=54)** I'm going to label cell 01 Forecast and place my variables into the cells below.
>
> **[1:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=68)** Doing that will look something like this, and then I'm going to have my forecasted REIT flow in cell 02.
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=79)** Now, from here, we need to add in our coefficients.
>
> **[1:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=85)** To do that, I'm going to copy and paste them from our regression below into the space above.
>
> **[1:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=94)** Our forecasted REIT flow, of course, doesn't have a coefficient.
>
> **[1:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=97)** That's what we're trying to predict.
>
> **[1:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=99)** Now I'm going to add my values, which are the Xs.
>
> **[1:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=104)** Now, what kind of value should I put in for the Xs?
>
> **[1:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=107)** Well, certainly for Intercept, I'll put in 1, but the other values, they will vary depending on where we are in the dataset.
>
> **[1:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=116)** And in fact, this is going to give us a tool to allow us to make those forecasts.
>
> **[2:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=121)** For right now, though, I just want to come up with a reasonable value for all of these.
>
> **[2:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=126)** So what I'm going to do is go to the bottom of the data and I'm going to add an additional row that I'll call Average.
>
> **[2:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=136)** And I'm just going to take the average or mean for all of the data points shown.
>
> **[2:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=145)** And I'll do that even for REIT flows, just to be consistent, although to be clear, we're not going to use all of these.
>
> **[2:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=154)** In fact, the only values that we want to use are those for the coefficients that we need to input.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=161)** So TaxBond Flow up through GDP growth and long-term capital gains rates.
>
> **[2:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=169)** Now, you might ask, why are we not using our LTR2, 3, and 4 variables?
>
> **[2:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=176)** Well, the answer is that we can't simultaneously exist in all three of those states.
>
> **[3:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=181)** In fact, if you recall, there are actually four different long-term capital gains rates regimes.
>
> **[3:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=188)** We can only exist in one of those four states at any given point in time.
>
> **[3:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=193)** And Ed is interested in understanding how those states impacted the flows into and out of REITs.
>
> **[3:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=201)** So what I'm going to do now is just copy the values from C317 to J317, and I'm going to paste those into the space with our coefficients.
>
> **[3:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=216)** Now, don't just hit Paste or hit Control + V here, because again, those values right now are in a horizontal form when we want them vertically.
>
> **[3:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=226)** So I'm instead going to hit Alt + E, S, E, to transpose them, and I'm also going to type V for values.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=237)** And doing that should produce the following result.
>
> **[4:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=241)** As you see, all of our coefficients are now nicely, neatly laid out for us.
>
> **[4:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=246)** I'm also going to change the numbers here so that they have only two decimal places.
>
> **[4:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=252)** I'm going to do that by hitting Control + 1, and then the Number tab, and let's check the box for thousands separators, as well, and make sure our decimal places are set to 2.
>
> **[4:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=264)** Now let's assume that we are in LTR2 for just a moment, and that means we have a 0 value for 3 and 4.
>
> **[4:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=273)** Well, what's our predicted value going to be?
>
> **[4:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=278)** Well, to determine that, we're going to multiply each cell in column P by the cells in column Q, as you see, and go down the column.
>
> **[4:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=289)** Now, again, I'm going to neaten up our numbers a little bit by hitting Control + 1, and changing to two decimal places with a thousands separator, and voila.
>
> **[4:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=299)** Now, all this sounds great, but how do we get to a predicted value for our forecasted REIT flow?
>
> **[5:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=307)** And I just realized we've got a typo in here, which we'll change, for forecasted.
>
> **[5:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=314)** Now, to get our forecasted value for REIT flows, we are going to sum up all of these figures, as you see.
>
> **[5:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=325)** So under these circumstances, that is, for the average across all the data we've collected, we expect outflows of 29,426.66.
>
> **[5:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=339)** Since these numbers are in millions, that's going to correlate to $29 billion in outflows in any given period.
>
> **[5:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=347)** Now, that's not to say that's what we're expecting in the future.
>
> **[5:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=351)** This is just the average across all of our data points.
>
> **[5:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=355)** But we can make a forecast for what we'd expect REIT flows to be if we have some kind of a view on any of these variables.
>
> **[6:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=364)** For example, if we say we're going to switch from LTR2 to LTR4, we can simply change cell Q12
>
> **[6:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=376)** from 1 to 0 and cell Q14 from 0 to 1, and that'll automatically update the forecasted REIT flows, as we see.
>
> **[6:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=387)** We could also go through and change our top marginal tax rate.
>
> **[6:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=390)** So at present, the top marginal tax rate is roughly 39.6%.
>
> **[6:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=395)** Let's see how that impacts our REIT flows.
>
> **[6:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=398)** Maybe we want to say the growth in GDP next year we expect to be 1.8%.
>
> **[6:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=403)** What impact will that have?
>
> **[6:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=405)** At this stage, the top capital gains rate might be 15%, so what impact will that have?
>
> **[6:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=411)** As you can see, we can dynamically update our forecasts based on any changes we want to make to these values.
>
> **[7:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=420)** How about accuracy?
>
> **[7:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=421)** How accurate is our forecast?
>
> **[7:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=423)** Well, we can scroll down and we can look at our regression output to determine that.
>
> **[7:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=427)** In particular, let's take a look at these columns labeled Lower 95% and Upper 95%.
>
> **[7:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=434)** These represent the lower and upper bounds, respectively, on each of our point estimates for the coefficient in question.
>
> **[7:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=444)** So for example, we're confident, in fact, we're 95% confident that the accurate value for the coefficient on growth in GDP is between 643.88 and 1,697.57.
>
> **[7:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=463)** That might seem like a wide range, and it is, but again, this is a 95% confidence interval.
>
> **[7:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=472)** So it's giving us a substantial amount of certainty about where the actual value of that coefficient is.
>
> **[7:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=479)** We can use the upper and lower bounds for each of our variables if we want to stress-test our results or get an estimate for how accurate they are.
>
> **[8:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=490)** For example, perhaps we're concerned that the federal funds effective rate, that coefficient that we've got might be too low.
>
> **[8:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=498)** Maybe that's a critical variable for us.
>
> **[8:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=500)** So maybe we want to update that to the upper bound of 1,829.71.
>
> **[8:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/testing-accuracy-in-economic-forecasts?u=76281980&t=509)** To do that, I'll go up here and simply take the coefficient that I copied from the upper bound and update it in my forecast, and that produces the new forecasted REIT flow that you see here.

> [!info]- Semantic Content
>
> **Env Vars:** reit (10), gdp (3), ltr2 (3), c317 (1), j317 (1)
> **CLI Commands:** make (6)
> **Versions:** 426.66 (1), 39.6 (1), 1.8 (1), 643.88 (1), 697.57 (1)
> **Analogies:** for example (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scenario analysis in economics](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=1)** - [Instructor] I'm in the 04_03_Begin file from the exercise files folder.
>
> **[0:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=8)** Ed is concerned about tax reform in Washington.
>
> **[0:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=11)** His boss has asked him to analyze three possible scenarios that might occur if tax reform moves forward.
>
> **[0:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=19)** And in particular, Ed's firm is trying to understand the impact this might have on REIT flows from investors.
>
> **[0:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=27)** So in the first scenario, Ed expects that the top marginal tax rate would fall from 39.6% to 35%.
>
> **[0:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=38)** This reduced tax rate should boost GDP growth from their current forecast of 1.8% to a new level of 2%.
>
> **[0:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=49)** In order to offset this tax reduction, the long term capital gains rate would be raised to 20%.
>
> **[0:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=57)** In scenario two, Ed is [[Forecasting]] that the top marginal tax rate might fall all the way to 30%.
>
> **[1:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=65)** This in turn would lead to GDP growth of 2.3%.
>
> **[1:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=69)** But again, long term capital gains rates would have to rise.
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=73)** And in this case, they would increase to 25%.
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=77)** Finally in scenario three, the top marginal tax rate would fall even more.
>
> **[1:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=82)** In this case, to 25%.
>
> **[1:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=85)** While GDP growth in this case would rise to a sizzling 2.7%.
>
> **[1:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=91)** However, again, in order to offset the lost revenue from lower marginal tax rates, long term capital gains rates would rise to 25%.
>
> **[1:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=101)** Ed wants to forecast how each of these scenarios might impact flows into and out of REITs.
>
> **[1:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=107)** To do that he assumes that several of our coefficients are not going to change.
>
> **[1:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=114)** In particular, the intercept coefficient, the flows into and out of taxable bonds, total flows by investors, the fed funds rate, and then the CBOE By Write Index, and S&P 100 volatility index, which measure factors related to the securities markets overall, are all unlikely to change.
>
> **[2:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=135)** Ed realizes that these coefficients, of course, are simply marginal coefficients in the regression, but they do represent our best point estimate for the impact that these particular factors have on our forecast.
>
> **[2:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=152)** Ed realizes that to the extent they want to stress test their forecast in the future, they could move these coefficients up and down based on, for example, the upper and lower bounds as shown by the 95% confidence interval range below, lower 95% to upper 95%.
>
> **[2:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=174)** For now, Ed wants to focus on the three factors that he is confident will change, the top marginal tax rate, growth in GDP, and the long term capital gains rate.
>
> **[3:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=185)** Again, Ed is assuming that the coefficients will largely stay the same, why?
>
> **[3:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=190)** Well, he feels that in the absence of other data or other indicators, the marginal impact from a change in tax rate is unlikely to be reduced or increased by tax reform.
>
> **[3:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=205)** Finally, Ed is concerned about the possible impacts from a regime change and how that could impact the model he's set up for this regression analysis.
>
> **[3:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=216)** If you recall, in order to capture the fixed effects that Ed has modeled around regime change for capital gains he set up three different dummy variables LTR2, three, and four.
>
> **[3:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=229)** Ed realizes that any tax reform is likely to create a new regime change.
>
> **[3:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=235)** His best idea for modeling this, however, is to simply alter the impact from LTR4.
>
> **[4:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=243)** For example, he might assume that this new higher capital gains rate would result in the equivalent of LTR4 times 1.5 or times 0.7.
>
> **[4:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=257)** Whatever choice he makes, he still needs to model the impacts from the changes in marginal tax rates, growth in GDP, and long term capital gains rates.
>
> **[4:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=269)** Now to make that forecast, let's start by taking into account the variables that will not change.
>
> **[4:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=279)** So I'm going to sum up all of our coefficients that Ed has no reason to believe will change.
>
> **[4:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=286)** And in order to make it easy to move across the four scenarios, I'm going to anchor these cells by hitting F4 when my mouse cursor is in place on one of the cell references.
>
> **[4:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=299)** Next, I'm going to take into account the new expected scenarios.
>
> **[5:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=305)** So we expect that the marginal tax rate in scenario one will fall to 35% and our coefficient is going to be unchanged.
>
> **[5:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=317)** So I'll anchor my coefficient, and then we're going to take into account the long term capital gains rate.
>
> **[5:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=326)** And again, anchor that.
>
> **[5:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=330)** And finally, perhaps our trickiest challenge is to decide how this might impact the regime change.
>
> **[5:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=336)** Ed's best estimate after thinking about it is that this might look a lot like the regime in LTR2, so he's going to use LTR2 as our estimated regime going forward.
>
> **[5:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=351)** And to do that we're going to need to make a small change up here in our X values, switching from LTR4 to LTR2.
>
> **[6:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=364)** If we've set this up correctly, we should be able to simply drag and drop.
>
> **[6:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=369)** We have one small change to make.
>
> **[6:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=371)** We need to anchor LTR2.
>
> **[6:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=375)** Now we can drag and drop.
>
> **[6:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=379)** And cleaning up our numbers by reducing the number of decimal points and adding our thousands separator, we see that the estimate has changed dramatically.
>
> **[6:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=389)** Assuming that one of Ed's new scenarios holds, we see that we can now expect substantial fund outflows from REITs.
>
> **[6:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=400)** The highest outflows occur under scenario one, but even under scenario two and three the outflows are still substantial.
>
> **[6:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=409)** This might be either positive or negative for Ed's firm overall.
>
> **[6:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=413)** That's outside the purview of the forecast.
>
> **[6:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=416)** If the fund flows into REIT's fall that might raise the cost of capital for Ed's firm, which would be a bad thing.
>
> **[7:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=424)** On the other hand, it might also reduce competition from other players in the industry, which could be a good thing.
>
> **[7:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/scenario-analysis-in-economics?u=76281980&t=431)** Overall though, making this forecast gives Ed's firm the tools to understand what might be coming down the road and help to prepare them for what could be a significant change in the industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1)
> **Env Vars:** gdp (5), ltr2 (5), ltr4 (3), reit (2), cboe (1)
> **Versions:** 39.6 (1), 1.8 (1), 2.3 (1), 2.7 (1), 1.5 (1)
> **CLI Commands:** make (4)
> **UI Navigation:** drag and drop (2)
> **Analogies:** for example (2)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)


### 5. Economic Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Common economic variables](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=0)** - [Instructor] As a practical matter when you're doing economic [[Forecasting]], the first thing that you'll often have to do is go and get the data on whatever it is you're trying to forecast, right?
>
> **[0:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=11)** This means that you'll need to not only collect information about what it is you're trying to forecast but also related explanatory variables that might allow you to build a model.
>
> **[0:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=21)** So where can you get this kind of data?
>
> **[0:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=24)** Well, there's a few options out there.
>
> **[0:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=26)** The first option would be to go to various government websites.
>
> **[0:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=30)** For example, the Bureau of Labor [[Statistics]], as you might infer from their name, the BLS produces data related to unemployment and generally what the labor market is doing within the United States.
>
> **[0:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=44)** So if we come to the BLS's website, [bls.gov](https://bls.gov), we can come over to the data tools tab and they have a variety of different tools that we might use to gather the data.
>
> **[0:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=56)** For example, we could go through and get information on say, the civilian labor force, for instance, productivity, you know, perhaps based on output per hour or something similar, and maybe something on say, the producer price index of finished goods.
>
> **[1:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=72)** And then we could go through and retrieve that data that we were interested in.
>
> **[1:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=77)** Now, the only challenge with this in actually doing it practically speaking is the data is, it comes out messy and you have kind of a limited set of variables that you might choose from.
>
> **[1:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=89)** For example, if we're interested in unemployment we probably want to look at how that relates to other measures of how the economy is doing like gross domestic product for instance, or maybe the stock market or financial conditions or something similar.
>
> **[1:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=106)** For that type of data we'll frequently have to turn to the BEA or Bureau of [[Economic Analysis]] at [bea.gov](https://bea.gov), as you see here.
>
> **[1:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=116)** Now, like the BLS, the BEA also has a data section and we could go through and kind of pull data based on different topics we're interested in or different areas, you know, that is whether we're looking at say individual states versus the United States or county level information, et cetera.
>
> **[2:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=135)** But if we wanted to go through, we can pull information on say, gross domestic product and we could pull it for a period of time and the BEA's website is helpful for this, it certainly produces a lot of great graphics but actually getting the specific data that we want in a convenient and machine readable form is not always easy.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=161)** The BEA puts out press releases related to the data that we are looking for and they also have the raw data itself but actually getting it in a machine readable form is not as easy as we might like, right?
>
> **[2:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=176)** If we're trying to get a long series of data, for instance across many different variables, we probably don't want to have to go through and kind of pull a variable here, a variable there, et cetera.
>
> **[3:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=187)** So another option is FRED.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=191)** Now, FRED or Federal Reserve Economic Database comes from the St. Louis FED.
>
> **[3:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=196)** Now, FRED is something I've been excited about for a long time.
>
> **[3:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=199)** Basically it's a [[Microsoft Excel]] add-in that lets you pull data for almost any type of economic analysis you want to do.
>
> **[3:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=209)** They have lots and lots of different data series and different data variables that are useful.
>
> **[3:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=215)** There's two ways to get FRED, historically FRED was downloadable in an [[Microsoft Excel|Excel]] format, in an Excel add-in format I should say, from the FRED St. Louis FED's website, okay?
>
> **[3:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=229)** However, a couple of years ago that changed and now you can no longer download the FRED Excel add-in directly, okay?
>
> **[3:59](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=239)** You can still find it in some corners of the internet but instead the FRED add-in is available through the [[Microsoft Office]] add-in store and it's available for free.
>
> **[4:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=255)** But the key here is in order to do this you're going to need to have Excel 2019 or later for your computer, okay?
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=265)** When you do that, you can then use the insert tab, get Excel add-ins and pull in FRED.
>
> **[4:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=272)** If you don't have Excel 2019 or earlier, you're going to need to try to find the downloadable version of FRED, which is not officially supported anymore and so hence, it's getting harder and harder to find.
>
> **[4:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=287)** You may have it backed up on some old machines or you might have colleagues who have it, things like that, all right?
>
> **[4:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=293)** Now let's take a look at FRED once you've actually got it into Excel.
>
> **[4:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=297)** All right, so I've pulled in FRED and I'm actually using the older version that's downloaded directly into Excel, but it works functionally the same when you're using it through the [[Microsoft]] store, right?
>
> **[5:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=312)** So you can do it either way you'd like, but the nice thing about FRED is it lets you go through and pull different data points of interest for long periods of time.
>
> **[5:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=323)** So let's say I'm interested in gross domestic product and I want to relate this to, I don't know, how about non-farm payroll and let's say consumer price indexes and I don't know, maybe the SP500 level, I pull in these data points, I click get FRED data and after just a moment, voila, it spits out all of the data that I'm interested in for the four variables I chose for the period that it's available for.
>
> **[5:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=356)** And we can see the frequency that this data comes in with, quarterly for GDP, monthly for payroll data, monthly for CPI, and daily for the SP500.
>
> **[6:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=369)** But maybe I want to go through and I want to change this for instance, so that it's only, so that the frequencies match up.
>
> **[6:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=376)** Well, I can do this easily enough if I simply go through and change these variables, and I'm going to set everything from, let's say, 1990 through present and then I can click get FRED data and it'll update my data set.
>
> **[6:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=404)** Now, what you'll see is that for GDP it says wait a minute, sorry, we can't disaggregate the data.
>
> **[6:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=410)** So we can't give you the monthly data, so you'll have to make a choice then and this is a common challenge that'll come up in economic forecasting.
>
> **[6:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=418)** Do we want to use our, and I'm going to go back and get the quarterly data to illustrate this.
>
> **[7:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=425)** Do we want to use a linear interpolation for the data over time or do we want to use kind of a stepwise function?
>
> **[7:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=432)** What I mean by that is, let's just pull this data down slightly to kind of illustrate this but I could put in here for example, that my monthly data and obviously we could automate this in Excel but I could make my monthly data the same for these three months in the quarter or I could do a linear interpolation between these two data points.
>
> **[7:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=461)** That is between January 1st, 1990 and April 1st, 1990 assuming constant linear change between those two points, that is for February and March.
>
> **[7:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=472)** And that would again make my data set match across these different points.
>
> **[7:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=477)** Now, of course we also have to be careful about availability.
>
> **[8:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=481)** I asked for data from 1990 on, well, for the SP500, FRED doesn't have that data from 1990 on, there's other data sources we could get that do have it but their data only starts in July of 2012.
>
> **[8:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=497)** So we'd have to decide kind of how we want to handle that, do we want to use a different variable?
>
> **[8:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=502)** Like for example, maybe including something like the Dow Jones Industrial Average as our alternative?
>
> **[8:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=510)** Do we want to stick with the S and P but limit our data set, et cetera.
>
> **[8:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=514)** There's lots of different choices that we can make when constructing our data sets, but FRED is very, very useful for gathering this information up.
>
> **[8:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=523)** Now, if for whatever reason you don't want use FRED or can't use FRED, the BLS and the BEA are great starting points to gather the data, it just requires a little bit more manual work than you'd have to do if you used FRED instead.
>
> **[8:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/common-economic-variables?u=76281980&t=538)** Give this a try though, try pulling FRED in for Excel or else visit the BLS and the BEA's website and try pulling a few data points for yourself and see how you make out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10), [[Forecasting]] (2), [[Economic Analysis]] (2), [[Statistics]] (1), [[Microsoft Excel]] (1)
> **Env Vars:** fred (21), bea (6), bls (5), sp500 (3), fed (2)
> **Analogies:** for example (5), for instance (4)
> **CLI Commands:** make (5), find (3)
> **URLs:** [bls.gov](https://bls.gov) (1), [bea.gov](https://bea.gov) (1)
> **Definitions:** means that (1), is a  (1)
> **Exercise Files:** download the (1)
> **Warnings:** be careful (1)

#### [Lead and lag relationships](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=0)** - [Instructor] One of the most common approaches to examining economic relationships and creating forecasts is using leading and lagging variables.
>
> **[0:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=10)** Let's take a look at some practical examples.
>
> **[0:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=12)** So one of the best known leading economic indicators comes from the US Conference Board.
>
> **[0:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=20)** And basically this concept, the leading economic indicator, is simply a series of variables that the Conference Board feels provide predictive power to the broader economy.
>
> **[0:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=32)** But if we take a look at the research study that I've pulled up from the Conference Board, I want to drill down on how the forecasters are using lead and lag economic variables, right?
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=45)** So what they're trying to do is basically go through and improve the leading economic indicator index.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=51)** And in particular they've created a forecast, essentially looking at a new leading economic indicator index.
>
> **[1:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=60)** And they want to try and compare that to the existing LEI, the leading economic indicator index.
>
> **[1:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=66)** And what you see in their data set is they're going to go through and lag their new model compared to the old model and see which one has essentially more [[Forecasting]] power.
>
> **[1:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=81)** They're running a horse race between the new LEI versus the old LEI.
>
> **[1:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=86)** And you can kind of see they're using a variety of different lags, one month, three month, and six month lags.
>
> **[1:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=92)** And then they're looking out over a given time horizon, one month, three months, and six months down the road.
>
> **[1:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=98)** And they're doing this for both in sample and out of sample periods, right, over a period of time.
>
> **[1:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=105)** And this is a pretty common approach to building economic models, trying to understand whether these leading and lagging variables are useful.
>
> **[1:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=115)** And of course this can then lead to changes in how the economic variables or how the economic models are presented to the public going forward.
>
> **[2:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=126)** Right?
>
> **[2:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=127)** So for instance, we've got revisions being made to the leading economic index put out by the Conference Board based on the forecasts they've done.
>
> **[2:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=137)** So what does this look like kind of on a nuts and bolts mechanical level?
>
> **[2:21](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=141)** Well, let's take a look at this in [[Stata]] just to illustrate it.
>
> **[2:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=145)** So I'm here in Stata and I've opened up a kind of a simple research project I was working on.
>
> **[2:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=152)** But what you'll see in my do file is I went through and created a number of lagged variables, in particular PX is price.
>
> **[2:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=161)** This is looking at stock prices related to other variables.
>
> **[2:44](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=164)** And we created lags on those prices, one period lags and two period lags for each stock in question.
>
> **[2:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=175)** So you had to have the same ticker symbol.
>
> **[2:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=178)** And we're basically going through and looking and saying, okay, if it's the same company, just to make sure cause we're doing this mechanically across the whole data set to make sure we're not mixing between different firms, then yesterday's price becomes today's one period lagged price.
>
> **[3:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=196)** The price from two days ago becomes today's two day lagged price.
>
> **[3:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=202)** That's in essence what we've done here.
>
> **[3:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=204)** And so use the syntax that you see here, right?
>
> **[3:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=208)** Generate a new variable, price, PX, lag two is equal to the price from that particular period, but two rows above.
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=220)** So what does this look like in the model?
>
> **[3:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=222)** Well, we can go through and see, here's our price variable for say, Agilent Technologies.
>
> **[3:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=228)** And this is on February 28th, 2017.
>
> **[3:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=233)** And we can go and see, okay, now for a couple months later, cause we're doing this on a month by month basis, let's look at the lag one variable.
>
> **[4:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=243)** So for March, 2017, for Agilent, the one period lagged price, $51.30.
>
> **[4:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=256)** The two period lag price in April, 2017, $51.30.
>
> **[4:23](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=263)** So it's not particularly complicated.
>
> **[4:26](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=266)** It's really just a way of saying we want to stagger these prices to see whether or not past prices have predictive power for the future.
>
> **[4:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=275)** And then we could do this testing in a variety of different ways, but we could start with a simple regression.
>
> **[4:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=282)** For instance, just looking at whether our price variable, PRC, is related to prior prices from one month ago and from two months ago.
>
> **[4:58](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=298)** And what we're going to see is unsurprisingly, there is a big relationship there.
>
> **[5:04](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=304)** In other words, a stock that had a high price a month or two months ago probably has a high price today.
>
> **[5:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=310)** And a stock that had a low price a month or two months ago probably has a low price today.
>
> **[5:15](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=315)** So there's not necessarily a lot of economic content behind this, but that's how you go through and kind of create general leading or lagging variables.
>
> **[5:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=325)** And then of course we have to just make sure that our economic model makes sense.
>
> **[5:29](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=329)** But this is very, very useful when we're dealing with variables that have some level of stationarity built in.
>
> **[5:37](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=337)** This could be anything from stock prices to consumer sentiment to risk aversion to a variety of other variables that are out there.
>
> **[5:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/lead-and-lag-relationships?u=76281980&t=345)** But keep these concepts, the leading and lagging economic indicators, or leading and lagging variables, I should say, in mind as you are building economic models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stata]] (2), [[Forecasting]] (1)
> **Env Vars:** lei (3), prc (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), in other words (1)
> **Versions:** 51.30 (2)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [Seasonality and data cleaning](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=0)** - [Instructor] A lot of the economic data that you'll run into out there involves elements of what's called seasonality.
>
> **[0:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=6)** Basically the data might be higher or lower on an easily understood and forecastable basis simply because of whatever period of the year it is.
>
> **[0:17](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=17)** For instance, retail sales are likely to be higher in the fourth quarter, i.e around Christmas than they are in the first quarter, that is January through March.
>
> **[0:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=28)** This is so common that you see the BEA, the Bureau of [[Economic Analysis]], going through and applying seasonal adjustments to much of the data that we take for granted every day.
>
> **[0:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=40)** As this paper illustrates though, it's important that you are able to actually go through and take raw data and make those seasonal adjustments on your own when necessary.
>
> **[0:51](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=51)** This is not an easy process.
>
> **[0:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=53)** The BEA goes through and does these comprehensive updates periodically to their data to adjust the seasonality and the trends that they use in that seasonality.
>
> **[1:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=66)** So let's take a look at a simple example of how you might apply seasonal adjustments to a set of raw data.
>
> **[1:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=73)** So I'm in the [[Microsoft Excel|Excel]] file labeled 0503 Begin.
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=79)** And what you'll see is I've got a fictitious set of data and this might be data for any product that's out there.
>
> **[1:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=85)** And we've got it for two years.
>
> **[1:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=88)** The first year, January through December, and then our second year, January through December.
>
> **[1:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=96)** Now, in order to seasonally adjust this data, we're going to have to do a few computations.
>
> **[1:41](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=101)** But just starting by kind of eyeballing the raw data, it is pretty clear that there's some level of seasonality here, right?
>
> **[1:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=109)** We see relatively low sales in January, they grow throughout the year, and then they spike in particular around November and December before falling off again in January.
>
> **[2:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=121)** So this fall off compared to say where it was earlier in the year is a dead giveaway of seasonality.
>
> **[2:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=130)** Now, of course, this is hypothetical sample data.
>
> **[2:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=133)** We'd want to look at more than just one, two year period but we can see these kinds of patterns or trends pretty easily by charting things in Excel using a simple line graph or something similar here, right?
>
> **[2:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=148)** So that's what we see here.
>
> **[2:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=150)** Very quick, seasonal adjustments are going to be needed.
>
> **[2:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=155)** Now, how could we make these seasonal adjustments?
>
> **[2:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=158)** Well, we need to first start by establishing what our trend line looks like.
>
> **[2:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=162)** So I'm going to use a moving average to do this.
>
> **[2:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=165)** I'm looking at the average over the previous 12 months.
>
> **[2:49](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=169)** So my trend in January is based on the previous 12 months worth of data.
>
> **[2:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=175)** And then I'm going to do the same thing in February, March, et cetera, okay?
>
> **[3:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=180)** And we could reasonably either do the average based in the last 12 months or including the current month depending on what it is we're trying to capture and kind of when that data comes available.
>
> **[3:11](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=191)** But either way, won't make a big difference in most cases.
>
> **[3:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=196)** Then from there, we need to go through and compute the ratio of our original data, our aggregate data, in this case for column B, to the trend data in column C.
>
> **[3:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=210)** And that ratio is kind of a seasonal indicator, right?
>
> **[3:34](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=214)** For our particular period.
>
> **[3:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=216)** So this shows that for instance, for our one year period, in January, that ratio is 0.96.
>
> **[3:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=223)** By the time we get to December, it's 1.11.
>
> **[3:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=227)** So for this particular year, the ratio of the moving average ranges from less than one to more than 1.1.
>
> **[3:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=237)** And this just gives us an idea of the relative strength of kind of that seasonal factor.
>
> **[4:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=242)** Now, the problem is we can't necessarily go through and just use this year's ratio to calculate a seasonal adjustment.
>
> **[4:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=252)** That's going to be messy, and it's going to involve a lot of idiosyncratic noise that might be specific to this particular January, or this particular April, or this particular August.
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=265)** So instead, what we'd like to do over time then, is go through and take for instance for a 10 year period, the ratio for those 10 Januarys and average them out.
>
> **[4:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=280)** Now, I've just created kind of a fictitious number because we don't have 10 January's worth of data.
>
> **[4:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=285)** But we would take the average for April every year for five years, 10 years, 20 years, whatever period we felt was relevant.
>
> **[4:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=295)** And that's what gives us this seasonal index, okay?
>
> **[5:01](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=301)** Then from there, I can go through and I can adjust my raw data based on that seasonal index.
>
> **[5:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=312)** So now for example, my January aggregate value divided by my seasonal index, gives me my seasonally adjusted data and I can apply this all the way down the column.
>
> **[5:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=327)** Again, the key is having done the ratio correctly based on this moving average.
>
> **[5:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=332)** And we've got to be careful about what the relevant period is for the moving average.
>
> **[5:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=336)** If it's quarters, it's different than months.
>
> **[5:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=339)** And of course, we've got to be concerned about what that correct time period is.
>
> **[5:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=343)** But once we've got that and we have a series of data, a time series over time, we can put in that seasonal index based on the averages and then it spits out our seasonally adjusted data.
>
> **[5:57](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=357)** And so we can see then, looking at December, for example, it might be 384 in the aggregate, but the seasonally adjusted value is 338.74.
>
> **[6:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=368)** So this gives us a much neater and cleaner estimate for how strong our sales data is, for example, for this particular period after accounting for normal seasonal fluctuations.
>
> **[6:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=384)** It might look like December is in great shape compared to January.
>
> **[6:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=388)** And on an aggregate basis, it is.
>
> **[6:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=391)** But once we account for the seasonal adjustments, you see that sales are basically the same throughout the year.
>
> **[6:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=399)** They haven't really grown from the start of the year through the end of the year.
>
> **[6:43](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=403)** And that's how we'd go through and make a simple seasonal adjustment to our raw data.
>
> **[6:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/seasonality-and-data-cleaning?u=76281980&t=408)** Give this a try on your own and see how you make out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Economic Analysis]] (1)
> **Analogies:** for instance (3), for example (3)
> **CLI Commands:** make (5)
> **Versions:** 0.96 (1), 1.11 (1), 1.1 (1), 338.74 (1)
> **Env Vars:** bea (2)
> **Cross-References:** earlier in (1), in the last (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)

#### [Interpreting other's economic forecasts](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=0)** - [Instructor] When it comes to economic [[Forecasting]], it's important to recognize the reality is we're all human.
>
> **[0:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=6)** We make forecasts, and we do the best job we possibly can, but inevitably those forecasts are frequently going to have issues with them.
>
> **[0:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=14)** We're unlikely to be correct most of the time, and in fact, if we get a lot of different forecasters together, reasonable minds, all using the same basic tools and the same basic approaches, can often come up with different results, even for high profile economic variables.
>
> **[0:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=33)** Let's take a look at an example.
>
> **[0:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=35)** So, I've got here three different outlooks for the US economy for the year 2022.
>
> **[0:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=42)** One from Merrill Lynch owned by Bank of America.
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=45)** One from MUFG, and one from Deloitte.
>
> **[0:50](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=50)** So, all three very reputable firms.
>
> **[0:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=53)** Now, what does each firm see happening?
>
> **[0:55](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=55)** Well, they go through kind of their analysis depending on the firm, and look at it in a little bit different way in each case.
>
> **[1:02](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=62)** But if we look at Bank of America Merrill Lynch here to start with, what we're going to find is their forecast for GDP shows for the full year of 2022,
>
> **[1:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=79)** about 3.3% expected growth, right?
>
> **[1:24](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=84)** And they have CPI inflation at 7.5%, and this is based on the growth rates that you see here.
>
> **[1:31](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=91)** 1% in Q1, three and 1/2 in Q2, two and 1/2 in Q3, and 1.8 in Q4.
>
> **[1:38](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=98)** All right, now, if we turn to MUFG, a name that's perhaps better known in Asia than in the US, but still a very big and reputable firm globally.
>
> **[1:52](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=112)** Well, I'm going to come on down here to their forecast, and we see their forecasting for the US, growth of 3.5%.
>
> **[2:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=127)** All right.
>
> **[2:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=128)** So, similar to Deloitte, but a little bit higher.
>
> **[2:12](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=132)** Both reputable firms using reputable models, but coming up with numbers that are somewhat different.
>
> **[2:19](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=139)** How about Deloitte looking at a third result?
>
> **[2:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=142)** Well, Deloitte takes a more pragmatic approach, and they recognize that they can't actually figure out what the GDP is going to be with any degree of precision.
>
> **[2:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=153)** So, instead they're going to present some different scenarios for us to look at here, and I'm just coming down to kind of the end of their report, and we're going to see they've got a baseline scenario, and a relapse scenario as they call it, and a back to the '70s scenario, and then a new recession scenario.
>
> **[3:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=180)** And they've assigned a [[Probability]] to each of these 15% for new recession or next recession.
>
> **[3:08](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=188)** Back to the '70s, meaning kind of a stagflation type approach with a lot of inflation is 25%.
>
> **[3:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=194)** A relapse is 5%, and then their kind of baseline model is 55%.
>
> **[3:20](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=200)** So, they've got these different scenarios, and then they've got a forecast around it, and we'll see their baseline model shows 2.4% GDP growth.
>
> **[3:32](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=212)** Real GDP, 2.4% for 2022.
>
> **[3:35](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=215)** Markedly lower than either Bank of America Merrill Lynch, or MUFG, right?
>
> **[3:40](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=220)** And again, this is Deloitte.
>
> **[3:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=222)** We're not talking about some small firm, or somebody's doing something wrong, et cetera.
>
> **[3:46](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=226)** Right?
>
> **[3:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=227)** They know what they're doing.
>
> **[3:48](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=228)** Similarly, we look at the relapse, they're at 1.7%, and we look at their back to the '70s, they're at 2%, and unsurprisingly of course, their last model, the next recession is at 2%.
>
> **[4:07](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=247)** So, all of these models that they have, they come up with different levels of GDP growth, right?
>
> **[4:14](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=254)** And on some level that shouldn't necessarily be a big surprise, there's all sorts of events that, as an economist, you just have no ability to forecast whatsoever, right?
>
> **[4:25](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=265)** Think about some of the geopolitical events that go on around the world.
>
> **[4:30](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=270)** These are impossible in most cases to predict.
>
> **[4:33](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=273)** Wars, pandemics, famines, all sorts of events come up and impact real economic variables, and thus, our forecasts.
>
> **[4:42](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=282)** Now, you might ask, okay, well, given the wide range of different outcomes between these three reputable firms does that mean that forecasting is not useful?
>
> **[4:54](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=294)** Well, of course not, no.
>
> **[4:56](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=296)** We need to do the best forecast that we can, and hopefully it'll give us kind of a guidepost, right?
>
> **[5:03](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=303)** A path that we expect to go down.
>
> **[5:06](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=306)** In good years, our forecast will probably be pretty accurate.
>
> **[5:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=309)** In bad years, our forecast won't be as accurate, all right?
>
> **[5:13](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=313)** But at least we're going in with some degree of planning and foresight.
>
> **[5:18](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=318)** Our forecast doesn't need to be perfect to be useful to a variety of decision makers, both within a firm and outside the firm, right?
>
> **[5:27](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=327)** So customers, stockholders, management, a variety of different stakeholders in any company will often rely on our forecast for everything from revenue and profits to, for instance, market share gains, or the total addressable market for a particular firm.
>
> **[5:47](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=347)** What we've talked about here, of course, is GDP, and that's relevant to all firms, but as a professional forecaster, you'll often be called upon to make much more specific and detailed forecasts related to particular variables.
>
> **[6:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/interpreting-other-s-economic-forecasts?u=76281980&t=360)** In any event, you should now have a good handle on how wide-ranging these forecasts can be and how they're presented by professional firms in a professional setting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (3), [[Probability]] (1)
> **Env Vars:** gdp (6), mufg (3), cpi (1)
> **Versions:** 2.4 (2), 3.3 (1), 7.5 (1), 1.8 (1), 3.5 (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** similar to (1), for instance (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Projects to try next](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=0)** - [Michael] In this course, we've talked about using economic data in [[Forecasting]] and a number of different methods and techniques you can use to do those forecasts.
>
> **[0:09](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=9)** We've demonstrated using the FRED [[Microsoft Excel|Excel]] add-in to pull in a variety of data based on different project needs.
>
> **[0:16](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=16)** And we've explained how to make forecasts with serially correlated data and techniques like exponential smoothing.
>
> **[0:22](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=22)** We've also discussed advanced forecasting tools like binary and fixed effects regressions.
>
> **[0:28](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=28)** If you keep these lessons in mind, I forecast a bright future ahead for you in the dismal science.
>
> **[0:36](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=36)** So where should we go from here?
>
> **[0:39](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=39)** Well, remember, economic forecasting is imperfect and there are always new challenges arising.
>
> **[0:45](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=45)** So keep developing your skills, and be creative when looking at questions you can answer with a forecast.
>
> **[0:53](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=53)** Look for ways to use macro and microeconomic data in forecasts for your day-to-day role.
>
> **[1:00](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=60)** Think about how forecasting fits into the broader data analytics world.
>
> **[1:05](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=65)** And of course, keep an eye out for new courses to come in the future in the library.
>
> **[1:10](https://www.linkedin.com/learning/excel-economic-analysis-and-data-analytics-15102394/projects-to-try-next?u=76281980&t=70)** Thank you very much for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (4), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** fred (1)
> **Speakers:** - [michael] (1)


## Instructor

- [[Michael McDonald]]

## Resources

- Exercise files available

## Skills Covered

- Economic Analysis
- Microsoft Excel
- Data Analytics

## Path Context

### In [[Become a Business Intelligence Specialist]]
← [[Data Analytics for Business Professionals]] | **3 of 9** | [[Power Bi Essential Training]] →

### In [[Become a Data Analytics Specialist]]
← [[Statistics Foundations 2- Probability]] | **8 of 10** | [[Excel and ChatGPT- Data Analysis Power Tips]] →

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] | **7 of 7**

## Appears In

- [[Become a Business Intelligence Specialist]]
- [[Become a Data Analytics Specialist]]
- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Power Query for Beginners]] — Microsoft Excel
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)