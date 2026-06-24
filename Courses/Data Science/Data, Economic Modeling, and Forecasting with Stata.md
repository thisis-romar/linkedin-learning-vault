---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: data-economic-modeling-and-forecasting-with-stata
url: "https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata"
duration_minutes: 49
duration: 49m
level: Beginner
updated: 2/25/2021
learners: 45408
skills:
  - Economic Modeling
  - Stata
  - Financial Forecasting
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHyC1qxZQ0_KA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614281665124?e=2147483647&amp;v=beta&amp;t=ekMtTNbTL9SpCBzLMbkphsWmsqCValEmaykopMFJc-g"
linkedin_topic: Data Science
learning_paths:
  - '[Master Key Financial Analyst Skills](../../Paths/Data%20Science/Learning%20Paths/Master%20Key%20Financial%20Analyst%20Skills.md)'
prev_courses:
  - '[Excel Modeling Tips and Tricks](Excel%20Modeling%20Tips%20and%20Tricks.md)'
path_nav: '[{"path":"Master Key Financial Analyst Skills","position":6,"total":6,"prev":"Excel Modeling Tips and Tricks","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/economic-modeling
  - skill/stata
  - skill/financial-forecasting
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%2C%20Economic%20Modeling%2C%20and%20Forecasting%20with%20Stata.md)

![Data, Economic Modeling, and Forecasting with Stata](https://media.licdn.com/dms/image/v2/C4E0DAQHyC1qxZQ0_KA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614281665124?e=2147483647&amp;v=beta&amp;t=ekMtTNbTL9SpCBzLMbkphsWmsqCValEmaykopMFJc-g)

# Data, Economic Modeling, and Forecasting with Stata

> Working with data is an important part of many jobs, and in the future, it will be important for even more. In this course, financial forecaster Jason Schenker teaches important fundamentals about data, economic modeling basics, and how to forecast with Stata. He guides you through building univariate and multivariate linear regression models in Stata, as well as interpreting statistical outputs, 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata) | 49m | Beginner | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Be prepared for the data jobs of the future](#be-prepared-for-the-data-jobs-of-the-future)
- [**1. Overview**](#1-overview) (2 videos)
  - [Purpose of modeling in Stata](#purpose-of-modeling-in-stata)
  - [The value of good data and good big data](#the-value-of-good-data-and-good-big-data)
- [**2. Modeling Basics**](#2-modeling-basics) (5 videos)
  - [Statistics and econometrics](#statistics-and-econometrics)
  - [Univariate and multivariate linear regression models](#univariate-and-multivariate-linear-regression-models)
  - [Correlation is not causation](#correlation-is-not-causation)
  - [Overly tight model fit](#overly-tight-model-fit)
  - [Models are always wrong](#models-are-always-wrong)
- [**3. Screencap Basics in Stata**](#3-screencap-basics-in-stata) (11 videos)
  - [Overview and enter data](#overview-and-enter-data)
  - [Data preparation and selection](#data-preparation-and-selection)
  - [Inputting data](#inputting-data)
  - [Mean and summary statistics](#mean-and-summary-statistics)
  - [Standard deviation and SE](#standard-deviation-and-se)
  - [Correlation](#correlation)
  - [Key output validity measures](#key-output-validity-measures)
  - [Univariate model](#univariate-model)
  - [Multivariate model](#multivariate-model)
  - [Appling univariate model to forecast](#appling-univariate-model-to-forecast)
  - [Saving and files](#saving-and-files)
- [**4. Advanced Topics**](#4-advanced-topics) (1 videos)
  - [Advanced topics](#advanced-topics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Be prepared for the data jobs of the future](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=0)** - People often say that every company is a tech company. Well in the future, every company will also be a data company, and that means every job will be a data job. Analyzing data, building statistical models, and creating forecasts will become increasingly critical parts of many jobs. I'm Jason Schenker, President of Prestige Economics and Chairman of The Futurist Institute, and I've been working with data and models for over two decades. In fact, some of the forecasts I've created have been ranked number one in the world for their accuracy by Bloomberg News. Join me in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Course Data, [Economic Modeling](../../Skills/Data%20Science/Economic%20Modeling.md), and [Forecasting](../../Skills/Data%20Science/Forecasting.md) with [Stata](../../Skills/Data%20Science/Stata.md), where we'll use the Stata software to do data analysis, build models, and forecast to help you get up that learning curve to be prepared for the data jobs of the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Economic Modeling](../../Skills/Data%20Science/Economic%20Modeling.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - people (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Purpose of modeling in Stata](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=0)** - People talk about the value in data, but it's not the data by itself that has value. It's the value in the implications that you can derive from that data. Data without analysis is like owning a car that runs on gasoline, but has an empty tank. There are many different people who analyze data, statisticians, economists, econometricians, data scientists, and other analysts. They use statistical software programs to analyze data with a number of key purposes in mind, including identifying statistical correlations, demonstrating causal relationships, building models that have future predictive value, and making forecasts. And those forecasts can be used to predict any number of things, including financial market movements, future costs and revenues, or identifying future customers. In fact, forecasts can be made around almost any kind of financial business or economic data series you can imagine. There are many different statistical software packages you can use like [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), eViews, SAS, R, MatLab, and [Stata](../../Skills/Data%20Science/Stata.md). Because I work with large data sets but not massive data sets, I prefer to work with STATA, and that's the program we'll be using in this course. But whatever statistical program you decide to use, make sure that it's sufficient for the analysis that you want to perform. But remember, you don't have to go overboard, either in terms of cost
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=94)** or something unnecessarily complicated if you don't have to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (2), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Env Vars:** stata (2), sas (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** eviews (1)
> **Analogies:** imagine (1)
> **Speakers:** - people (1)

#### [The value of good data and good big data](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=0)** - [Big Data](../../Skills/Data%20Science/Big%20Data.md)'s a term people throw around a lot. At its core, big data is very important for analysis and it's a way people talk about having a lot of data. It's related to something called sample size. And the more data you have, the bigger the sample size is and the greater the likelihood that you'll be able to derive relationships between the data and identify trends. But more important than big data is good data. After all, no matter how much data you have, if the data isn't good, then your analysis won't be very good either. Good data has been collected consistently and properly. The units are consistent and there aren't gaps in the data. Having good big data is extremely valuable because it means you have a large sample size and high quality data. And performing analysis on that kind of data means you have a higher chance of identifying meaningful implications and making accurate forecasts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (4)
> **Speakers:** - big (1)


### 2. Modeling Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Statistics and econometrics](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=0)** - Analyzing data for business implications usually falls into the fields of [Statistics](../../Skills/Data%20Science/Statistics.md) or econometrics. Statistics involves looking at data and identifying key dynamics as well as potential relationships in the data. This includes identifying things like means of data, which is another way of saying averages. Trends of data, which direction the data is going in and at what pace. Distribution of data, which is the range and how the data appear. Relationships in the data, like finding predictive relationships that influence each other in a way that allows you to make forecasts. Econometrics is a subset of statistics and it uses statistical models and methods to analyze economic data and identify relationships with either economic or business implications. Another term for econometrics is applied economics, because it's about applying statistical models in a practical way to economic data. But whether you're talking about statistics or econometrics, it's about measuring data and identifying meaningful relationships. These basics form the fundamental building blocks of [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md); machine learning, [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), and more, but in order to get to something complicated like artificial intelligence, it's important to understand some of the most important basics of statistics and econometrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (5), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - analyzing (1)

#### [Univariate and multivariate linear regression models](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=0)** - One of the most common ways people analyze data and build forecast models is using a [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) model. It's a way that you predict a data series by making the inputs fit into an equation that results in a straight line, hence the term, linear regression. These models have one or more independent variables. Those are the inputs of the model. They also have a dependent variable. That's the output of the model. There's only one output, but there can be more than one input to derive that model. For example, a dependent variable might be your income and the independent variables, the inputs that impact your income, would be things like your level of education, how many years work experience you have, your age, what city you live in, and a number of other factors. None of those is impacted by your wage, but your wage is impacted by those different independent variables. That's why your wage is dependent on them. There are two different kinds of models that use these inputs and outputs. First, there are univariate models. These have just one input and one output. This would be like [Forecasting](../../Skills/Data%20Science/Forecasting.md) your income only as a function of your education. But multivariate models have multiple sets of inputs that influence one set of outputs. This is like the model where a number of factors impact what your income is. Whether you're using a univariate model
>
> **[1:33](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=93)** or a multivariate model, the most common kind of forecasting model most people use is a linear regression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### [Correlation is not causation](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=0)** - One of the most common sayings among economists and data analysts is that correlation is not causation. Correlation is when data looks like it moves together, but causation is when one data series helps you forecast another. For example, if I told you you could predict the winner of the World Cup by the number of meteor showers that happened in the year before, that would be something that has a correlation, but I don't think you'd be able to make a pretty good forecast using that data because there isn't a causation, there's not a causal relationship. The meteor shower doesn't cause a certain team to win the World Cup. However, if I told you that the winner of the World Cup was correlated to the performance of the members on each team in the 24 months before the World Cup, that would be something that's correlated, and I suspect there'd be a causal relationship there because naturally their recent performance would likely be a leading indicator of how they'd perform in the World Cup. I mean, I hope recent past soccer performance would be indicative of how the team would perform shortly thereafter. When doing data analysis and building forecast models it's a good idea to choose variables that likely have some influence, some causal relationship, on the dependent variable. After all, you want the inputs to influence the output, because if there isn't a causal relationship there and it's just a random correlation
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=95)** it's best not to use that data in your models. In fact, if you use data that's just randomly correlated and has no reason for a causal relationship, it could put you on the wrong path when building your forecast model and the results would be a model that isn't very predictive or valid over time. The big takeaway here is choose your model inputs wisely. And just because data seem to be correlated doesn't mean they're predictive and it certainly doesn't mean you should use them in your models.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### [Overly tight model fit](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=0)** - There are several big risks when you're building forecast models. And one of the biggest risks that's also counterintuitive is that sometimes you can build a model that fits historical data too closely. I know that sounds crazy, and it's true that forecast models leverage historical data in order to help you make future predictions. But, if the models fit too tightly to historical data, that means those models may not be very effective at adapting to new changes in future data. This is something statisticians and econometricians refer to as a problem of fit. And it is a real issue where sometimes that perfect model for predicting the past is not good when data in the future is released. There are a couple of ways you can test for this. First, you could test some of the historical data to build a model and then test it against other historical data that comes after the time period for which you built the model. If it's still relatively in the right ranges and margins of error, then you have something that's likely to have a good fit going forward. Another way to test for this is to have the model in place and test it against new data as it's released. Of course, you want a forecast model that's predictive of the future, but this is one way in which an imperfect model might be better than a perfect one, because a model with too perfect a fit over the past might not be very predictive or valid when predicting the future.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### [Models are always wrong](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=0)** - One thing is true of all forecast models: they are always wrong. The question is, by how much? Some models fall well within acceptable margins of error or their predictions fall within confidence intervals. But other times, that doesn't happen, and the predictions end up wildly different from the actual data. There are four key tips to making good statistical forecast models. First, test and retest models to ensure that the models are still providing valid forecasts, even as data sets expand and new data is released. Second, measure model errors to improve your analysis and forecasts. If you don't measure errors, you can't improve upon them. Third, add more good data. If a model isn't performing well, you probably need more data and not just more data, but more good data when you're doing your analysis or [Forecasting](../../Skills/Data%20Science/Forecasting.md). A good example of this would be looking if you can add more historical data. The longer the amount of time the data you have feeds into the model, the more predictive it will be under various circumstances in the future. Fourth, iterate on analytical models to constantly improve the potential to derive implications. You don't just build models and then leave them. You have to make sure you're continually revisiting the assumptions and the data to make sure you're producing the most accurate forecast possible. By following these four tips, you can improve the validity of your forecast models
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=94)** because even if forecasts are always wrong, there's still the opportunity to make them wrong as little as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **CLI Commands:** make (3)
> **Speakers:** - one (1)


### 3. Screencap Basics in Stata

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview and enter data](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=0)** - [Jason] Now, before we get started with using [Stata](../../Skills/Data%20Science/Stata.md), we need to acclimate you to it. The most important thing to know is right in front of you. This is where you're going to see the outputs. You can't input anything there. It's just the output console. Where you are going to be inputting commands is below here in the command prompt area. And as you input commands on the left, there will be a historical running record of the commands you've been using. Once, of course, we've inputted some data on the right, you'll have a record of the names and labels of the different variables as well as other information about them. Now, there are many different software packages that you can use to analyze data. I've been using STATA for over 20 years. The reason I prefer it is it's really ideal for looking at economic data or business data, trying to analyze relationships and make forecasts. It's much stronger than eViews or [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), but it's nowhere near as expensive as some of the other much more advanced, more complicated programs that are also used for the biggest datasets. Unless you're working with millions of lines of data, STATA is probably going to be sufficient for what you need at a price point that is much more reasonable than some of the other software packages. Now, up here on the left, you can see both a header of different actions you can take and menus you can select as well as icons. Now, there are a number of graphics you can make related to your data. And there are lots of different statistical things you can do. Many of them are very, very complicated, but this course is about basics.
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=95)** And before we can do any analysis at all, we need data. And that's where we go to this table with a pencil in it, labeled the data editor. And you click that, and a window opens up. This is where we're going to input our data. Now, let's go over to Excel and grab the data we're going to input.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (3), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2)
> **Env Vars:** stata (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** eviews (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [jason] (1)

#### [Data preparation and selection](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=0)** - [Jason] Okay, so this is the actual data we're going to be pulling into [Stata](../../Skills/Data%20Science/Stata.md). In the top row you see descriptions of variables, and in the second row, you see these abbreviations. When we pull the data into the Stata data editor, we're going to leave the first row behind, and we're going to grab row two all the way down. This includes monthly data from July 2007, until October 2020. And what are we pulling in? Well actually, we're looking at aluminum prices, which are columns B through H, as well as manufacturing data in columns I through L. The dependent variables are related to aluminum prices. Because logically, there is not only a correlation between aluminum prices and manufacturing, but there's a causal relationship. And it's not that aluminum prices cause manufacturing, but it's that manufacturing strength or weakness can impact aluminum prices. So the dependent variables are all related to price of aluminum, and the independent variables are these manufacturing series. Let's walk through each of the columns very quickly. Since these are monthly data, what we're looking at are the LME aluminum monthly prices. In column B, you see the opening monthly price. Column C is the high price of the month. Column D is the low price of the month, and column E is the closing price for the month. In the next three columns, you see the price of aluminum one month ahead, three months ahead, and six months ahead. After all, if we want to be analyzing manufacturing data, in order to make a forecast about the future,
>
> **[1:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=96)** we're going to need to look at how future prices are impacted by the current manufacturing data. One month, three month, and six months out. Then there are the four categories here for manufacturing data. This takes the form of purchasing manager indices, which are surveys of purchasing managers who work at manufacturing companies by country. It includes the purchasing manager index for the Eurozone, China, and the United States. These data points have a breakeven of 50, if the number's above 50, it's usually supportive of manufacturing and indicates manufacturing's expanding, while if it's below 50, that indicates a contraction. The final category is a sum of those three PMIs, Eurozone, China, and the US. And here we have that combined number with a breakeven of 150. Again, the US ISM, Chinese Saishin manufacturing PMI, Eurozone manufacturing PMI, and this combined PMI are the independent variables, they do what they're going to do. But the expectation, when we look at the data, is that we're going to see these aluminum prices are impacted by the manufacturing data. Now we're going to highlight row two, carry that all the way down, and hit Control C.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (2)
> **Env Vars:** pmi (3), lme (1), ism (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [jason] (1)

#### [Inputting data](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=0)** - [Jason] Now that we're back in the [Stata](../../Skills/Data%20Science/Stata.md) Data Editor, we're going to go to the upper most left cell and we're going to hit control + V where we can paste in that [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) data. Now it's going to ask us what's in the first row. Remember, I had variable names in row two. That's now the top row of this data. We want to click variable names are in the top row. And you can see, all the data's come over it. We have the variable names on top. Now the date on the left, these red numbers can't be analyzed. That's okay. We're not looking to analyze the date. It's just really here for our reference when we look at the data. And we have all the other data series here that have carried over. Now, the best part about the data is we can close this Data Editor and all the data is there. You see now that the variable list has been populated and this is great. You can also see below, some information where we have 160 observations and how much size and memory it's taking up. And in the control panel, you can also see that these 12 variables with 160 observations each, have been pasted into the Data Editor. If you go back up to the Data Editor, you can browse it by clicking the magnifying glass and just look over your data. Or if you wanted to edit it and put it in a new series, you can click the graph with the pencil and put more information into your editor. Now that you've acclimated yourself and you've inputted your data, It's time to get going on some analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [jason] (1)

#### [Mean and summary statistics](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=0)** - [Instructor] The first thing we're going to analyze in this data is the mean of two of our data series. First, we're going to look at the mean of the sum of the PMIs. The command for this is very simple. You just write the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) mean, you put a space and then you put your variable. This is just one example of the mean. And when we see it, we see here's the mean estimation. The number of observations, the mean, and the standard error, which I'll talk about in a second as well as the confidence interval. The 95% confidence interval shows what 95% of the time the range will look like. And you can see that the mean for the total of those PMIs. The sum of that global manufacturing number with a breakeven of 150, the mean is around 154.5. And the range 95% of the time is between 152.7 and 156.3. This is actually quite positive because as we think about 150 is the breakeven, logically manufacturing on a global basis, over 813 plus year period should be expanding, and that's what the data shows us. Now, the next thing we want to do is compare two means. You don't just have to do one at a time. Let's do the mean of the sum of the PMIs as well as for that Aluminum LME Closing Price. Now, this is also really interesting. We see that mean data as well as the center of competence intervals from some of the PMOs but also for Aluminum Closing Prices.
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=94)** What this means is that the mean closing price of aluminum on the LME between July of 2007 and October of 2020 was $1,975 per ton. The 95% confidence interval showed a range from $1,918 to 2032$. That's where 95% of the results exist. Now, the mean estimation isn't the only way we can look at the data. We can also summarize the data which is another very useful command. If we type in summarize, and then we look at, for example, the Aluminum Closing Price three months ahead, and compare that to the sum of all the PMIs, we are going to see something different. Right? This helps with checking for clean data. For example, because the Aluminum Price is three months ahead, there's only 157 observations, which is that first column, compared to 160 observations of the PMIs. Naturally three months are missing, because we're looking three months into the future. The mean for that series is $1,964 per time with a minimum of $1,308, and a maximum of 3070. This range is much bigger than that confidence interval.
>
> **[3:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=191)** And that's because you can have tail ends to a distribution. The same thing is true with the sum of those three PMIs, although 95% of the time, they're between about 153 and 156. The minimum was 108, and the maximum across the whole series was 171. This provides us a little bit more information than just the mean. Now there's another summary which is really helpful. If we look to summarize the aluminum high price and the aluminum low price across the 160 observation. What we see logically, is that the minimum for the aluminum high price for the month is higher than the minimum for the aluminum low price for the month. We also see that the maximum aluminum high price is higher than the maximum aluminum low price. This makes a lot of sense and is another good sanity check. We make sure the data is clean, because clearly the high prices for the month, given their minimum should be higher than the low prices for the month. Additionally, we see that the aluminum high price mean is higher than the aluminum low price mean. That makes a lot of sense as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Versions:** 154.5 (1), 152.7 (1), 156.3 (1)
> **Env Vars:** lme (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Standard deviation and SE](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=0)** - [Jason] You'll notice here that there's the standard deviation in these summarize commands and a standard error in the mean commands. Well, what does that mean? First of all, the standard deviation is not the standard error. They are not the same thing. The standard deviation shows a distribution of data around the mean. On the left, you can see the mean with the distribution of readings that are not too far away. On the right, you see a mean, but the distribution of the readings are much further. The one on the left has a lower standard deviation. The one on the right has a higher standard deviation because the deviation of the reads are much bigger than they are on the left. You should also know that the standard deviation is represented by Sigma and there's an equation with it. We're not going to talk any more beyond that but that's the equation for the standard deviation. The standard error which is sometimes called the standard error of the mean, shows how far your sample mean is likely to be from the population. As the sample size increases, the standard error narrows around the mean. And I'll explain all that in just a second. But most importantly, equation-wise the standard error which is sometimes written out as the standard error of the mean or SEM, which is also sometimes shown as the Sigma of X-bar, is this equation here. Essentially you're taking the standard deviation and putting it over the square root
>
> **[1:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=92)** of the number of readings in your sample. This is important because it indicates how the precision of a model can improve with more data. On the left, we see a mean, but there's not too many readings. This is going to have a much higher standard error then on the right where there's the mean and a lot more readings. There are a few different examples of this. Like if you wanted to find out the average education level in the United States, you probably wouldn't survey four people, you'd want to survey millions of people. And if you wanted to know people's income levels, you do the same. You want as many numbers as possible in order to reduce the error, in order to make sure that the mean you derive is actually what the mean is supposed to be. This is why you take the standard deviation and put it over the square root of N, which is the number of readings. The more responses and readings you have in your data, the smaller the standard error will be. The bottom number gets bigger here. And as this gets bigger, that standard error of the mean goes down. And whether we're talking about things like income level or education or anything else where a bigger population answer will get you closer to the real mean, that's where the standard error is the smallest. This is also why, as we're looking at aluminum prices, we wanted to have a pretty robust data series.
>
> **[3:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=188)** And 160 months of aluminum price and manufacturing data's pretty good. We're probably going to have a much lower standard error than if we were to have had, I don't know, four months of aluminum prices, or even 24 months of aluminum prices in manufacturing data. In this case, we see how more data, more good data is helpful for reducing the standard error. The big, important takeaways here are that standard deviation and standard error are different. Standard error is smaller than standard deviation because you're putting standard deviation over that square root of n. The standard deviation reflects a range of values and how wide apart they are, whereas the standard error reflects variation around the mean and how accurate that mean is likely to be. As we look at the data, for example, for that sum PMI number and we see the standard error, it is no surprise, much smaller than the sum PMI standard deviation. It's a lot smaller. The standard deviation is 11.37. The standard error is less than one. This is a good sign that we have a solid sample size, and that standard error is just much, much smaller. This is why whenever you're doing analysis, one of the best things you can do is make sure you have a large enough sample size and enough good data to do your analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** pmi (2), sem (1)
> **Versions:** 11.37 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [jason] (1)

#### [Correlation](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=0)** - [Narrator] One of the goals of using the mean and summarize commands is to get familiar with your data. Another way to get familiar with your data before you begin regression analysis and [Forecasting](../../Skills/Data%20Science/Forecasting.md), is to look for correlations. The command for this in [Stata](../../Skills/Data%20Science/Stata.md) is C-O-R-R-E-L, correl. And let's take a look at some of the data we have. For example, let's look at those aluminum closing prices, one month out and compare it to that sum of the PMIs. We see here that there's a statistically significant and positive correlation. In fact, this is a correlation of almost 0.5 and because it's positively correlated, it means that when PMIs go up, aluminum prices, generally will go up as well. If this had been an inverse correlation the number would've been negative, and that would mean that, for example when the PMIs go up, aluminum prices would go down. But this is a positive correlation. Let's take a look at some of the other data series to see if we can find a correlation that's a little bit better than about 50%. Ideally we want to find something that's much more highly correlated. So let's try a few different numbers. Let's look at the correlation between the aluminum closing price three months in the future and that sum of the PMIs. And we can also look at that correlation number for the aluminum price six months ahead.
>
> **[1:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=97)** And that sum of the PMIs. What we see here when looking at the three different future periods is that the correlation is actually highest not six months out, not one month out, but three months out. Now we can dig one level further with this correlation. This is the sum of the PMIs, but perhaps the different PMI components, the individual regions or countries, have a more significant impact. So let's take a look at the correlation for that aluminum closing price three months out, and the Eurozone PMI, then we'll look at the correlation for aluminum closing price three months out, and the US ISM manufacturing PMI and then we'll look at the correlation for the aluminum closing price three months out, and the Chinese EMI. This is the privately compiled Caixin manufacturing PMI. And what we see is interestingly enough, the US ISM is less correlated with the price. The Eurozone is a bit more, but it's that Chinese manufacturing PMI that's 68.4% correlated with the aluminum price. This makes sense. China is the biggest consumer in the world of aluminum. It's really nice when you're doing analysis and you see that the numbers actually coincide with reality. And that's something we're seeing here. Whenever you're working with data, this is something you want to check, and that correlation command can help you get there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1)
> **Env Vars:** pmi (5), ism (2), emi (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** find (2)
> **Versions:** 0.5 (1), 68.4 (1)
> **Analogies:** for example (2)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [narrator] (1)

#### [Key output validity measures](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=0)** - [Jason] Now because we saw a statistical relationship and strong correlation between that three-month ahead aluminum price and the Chinese manufacturing PMI, let's do a [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) model, the command for which is R-E-G. That's just regression, that's it. And then let's put in those same things that are correlated. Let's look at that aluminum closing price, three months in and the Chinese PMI. This is what we call a univariate regression because there's one input to it. The only independent variable is the Chinese PMI. And that output, there's of course only one output in a regression, is the aluminum price. What we see here is some statistical significance as well. There are a few different points of validity that you want to look at with a univariate regression. One is the P statistic. This is related to the T statistic. This here, you want these to be at zero. For the [Probability](../../Skills/Data%20Science/Probability.md) about the F statistic, you want that to be zero. That's actually more important when you have multiple variables. When it's just one independent variable, you really want to be watching what are called these T's [Statistics](../../Skills/Data%20Science/Statistics.md). And most importantly, this probability around the T statistic. This means these are statistically significant variables. As for the R-squared and the adjusted R-squared, these actually give you some idea of what percentage of the variation is explained by the variable or variables that you're using in your model. Folks want to get this number is close to one
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=95)** as possible to have it have the greatest level of validity, but sometimes, if you get it too close, the model isn't very adaptive to new data. And that's something you want to avoid. Now that we have this regression analysis and the output, the best thing to do is to try to apply it. Let's see what it can actually mean in terms of implying aluminum prices and [Forecasting](../../Skills/Data%20Science/Forecasting.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (2), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **Env Vars:** pmi (3)
> **Speakers:** - [jason] (1)

#### [Univariate model](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=0)** - [Instructor] Now that you've done your univariate regression and you have an output I've brought this over here so we can actually begin to create forecasts out of it. We've discussed the [Statistics](../../Skills/Data%20Science/Statistics.md) that make these numbers valid, like the T statistics and the [Probability](../../Skills/Data%20Science/Probability.md) of the F statistic and the R-squared, adjusted R squared. We've talked about those but now's the time to talk about the coefficients in our outputs and there are two. The first, is the coefficient for the Chinese Manufacturing PMI number which is our one independent variable and then there's this other number. This is actually the constant. This represents the intercept of the formula that we're going to put together as we build our forecast. This all comes back to the equation of a line which you might recall is Y equals MX plus B but econometrically or statistically we talked about Y is equal to beta naught plus beta one times X one. What does that mean exactly? Well, beta naught is the line intercept. That's that constant number. Beta one is the coefficient of the independent variable that this is the coefficient of that Chinese PMI number. That's the independent variable that impacts the dependent variable, which is that price of aluminum three months in the future. When we look at the output we see that beta naught is that intercept at minus $2,780 and 40 cents. We also see that beta one
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=95)** is the coefficient at 93.07. The equation for [Forecasting](../../Skills/Data%20Science/Forecasting.md) then would be, Y is equal to that beta naught value plus the beta one times X. So if we wanted to apply this let's assume the hypothetical where X is 55 where the Chinese Manufacturing PMI is 55. We begin to plug this in. We have the intercept, we add that to the product of the coefficient beta one times the X we get that product value. We add it to the intercept, which is a negative number and we end up with a final value where Y is equal to 2338.45. What does that mean? Well actually, according to this model if the Chinese PMI is 55, the price of aluminum on the LME three months in the future would be $2,338 and 45 cents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **Env Vars:** pmi (4), lme (1)
> **Versions:** 93.07 (1), 2338.45 (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Multivariate model](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=0)** - [Instructor] Now that you've done a univariate analysis let's consider some multi-variate regression analysis. When you're doing a multivariate regression analysis just like with a univariate regression you begin by typing in our reg for regression, then you type in the dependent variable. In this case, let's use the same one aluminum closing price three months in advance and you put in then multiple independent variables with a space between each. Before we consider just the Chinese PMI, let's consider a combination of the Eurozone PMI, the Chinese PMI, and the US ISM manufacturing index. In this output, we see a few different things before we had just one intercept and one coefficient for the one independent variable but now we have the intercept and three coefficients for the three independent variables. One thing you'll notice, is that even though the R squared and adjusted R squared are a bit higher than in the model just with the Chinese PMI and the F statistic [Probability](../../Skills/Data%20Science/Probability.md) is zero which is a good sign, we see an issue with the US ISM manufacturing index. And there are two problems here; one, this probability of the T statistic number is not zero. And that makes me a bit worried because you can see in the 95% confidence interval which ranges from minus 25.6 to a positive 2.40 is actually in that confidence interval, which means maybe this
>
> **[1:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=92)** isn't a statistically significant variable to consider but more importantly, the coefficients negative. We haven't talked about coefficients yet but here's where it really matters. The positive coefficient for the Chinese PMI indicates that as that number goes up, so does the aluminum price. For the Eurozone and the Chinese PMI in the multivariate regression, that's also true. For the US ISM, as that gets higher it actually weighs on aluminum prices. And that doesn't make a lot of sense after all if US manufacturing is getting stronger, why would that maybe weigh in aluminum prices? We could come up with a number of theories about this, but maybe it's better to try a multivariate regression that just excludes the ISM for now. So let's do the same thing. Let's take that aluminum closing price three months in advance and consider just the Eurozone PMI and the Chinese PMI and we'll leave the ISM out of it. What we find is that now all the T [Statistics](../../Skills/Data%20Science/Statistics.md) look right, the coefficients make sense. When the Eurozone PMI goes up, there's a positive impact. When the Chinese PMI goes up, there's also a positive impact on aluminum prices. And we see the probability around the F statistic also showing significance and the adjusted R squared in the R-squared are very similar to what they were with the ISM but we have this added problem. There are no zero values in any of these confidence intervals which means these variables are statistically significant.
>
> **[3:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=188)** The coefficients are valid and it's explaining a decent portion of what's going on. More importantly, it's explaining more than just the Chinese PMI alone in a univariate model. Now that we've completed the multivariate regression analysis, it's time to take this output and use these coefficients to determine what the future price of aluminum could be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** pmi (11), ism (6)
> **CLI Commands:** make (2), find (1)
> **Versions:** 25.6 (1), 2.40 (1)
> **Analogies:** just like (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Appling univariate model to forecast](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=0)** - [Instructor] You can now see that multivariate regression output and now's the time to take the coefficients and the independent variables and put them together in equations to forecast future aluminum prices. This all begins with the equation for a multi-variate linear model where aluminum prices three months in the future are a function of both Chinese Manufacturing and Eurozone Manufacturing. Econometrically, this is Y equals beta naught plus beta one X one plus beta two X two. In our output, the beta naught is the intercept at minus 3025.54. Beta one is the coefficient at 81.74 that's for the Chinese PMI. Beta two is the coefficient for the Eurozone PMI at 16.25. The equation for [Forecasting](../../Skills/Data%20Science/Forecasting.md) thus would be Y equals minus 3025.54 plus that beta one times X one plus 16.25 beta two times X two. Let's now consider another hypothetical example where the Chinese Manufacturing PMI is still at 55 but maybe that Eurozone PMI is at 51. All the numbers have changed from when we had a univariate model because now it's a multi-variate model and there's a lot more going on. As we pull together the equation, we have that intercept from our multivariate model beta one times our new X one hypothetically our beta two times the X two hypothetical.
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=95)** We do the math and we end up with this figure here, 2,298 and 91. What does that mean? Well, it means that according to this model, the closing price of aluminum on the LME three months in the future, when the Chinese PMI is 55 and the Eurozone PMI is 51 will be $2298 and 91 cents. Now whether you're doing a univariate model or a multivariate model, there's an important thing to realize. When we apply the coefficients, the way we have both in a univariate equation and in the multi-variate equation we come up with point forecasts but every point forecast is wrong. In fact, every coefficient has a standard error. We see that here. We also know that each coefficient has a confidence interval a range in which it falls and while it's most common to reflect univariate and multivariate regression forecast as a point there's also sometimes a reason where you might want to show that 95% confidence interval and a range of potential outcomes for your model. In short, it's important to know that point forecasts are not the same as confidence interval forecast and that both exists and both are ways that you can discuss forecasts from your models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **Env Vars:** pmi (6), lme (1)
> **Versions:** 3025.54 (2), 16.25 (2), 81.74 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Saving and files](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=0)** - [Jason] Now the last thing you need to make sure you do when you're in [Stata](../../Skills/Data%20Science/Stata.md) is to save your work. First, there's your data. If we go back to the data editor, you can save your data as a data file. Right here, it's at DTA and we're going to just save this file as a DTA file. If we want to go back and use this, we can pull the data from there. As before, if we X out of the data file, this doesn't make the data go away. It is there. You want to make sure not to lose any of your commands or any of your data. And of course, you can always print your file in order to save the output. This is another great thing to do, especially as a PDF to make sure you don't lose your work. As with all data analysis, one of the best things you can do is save early and often.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** dta (2), pdf (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [jason] (1)


### 4. Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced topics](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=0)** - There are a number of advanced topics in econometrics, and there isn't enough time to discuss them all in this course, but you should be aware that there can be problems in your data. And that there are other models and not just linear regressions. Let's talk about some of these different topics now. They include: multicollinearity, heteroskedasticity, skewdness, kurtosis, autocorrelation, error correlation, and other models. The first important topic is multicollinearity. This is when two independent variables explain in part or in total the same thing. For example, the Chinese Manufacturing KMI, in the aluminum price models was also a part of the global manufacturing number. That's why I didn't build any models that included both the Chinese manufacturing and the global manufacturing number as two separate independent variables because the Chinese data is part of that global data. That's multicollinearity, when there's overlap between two independent variables. Another issue you can have in your data is skewedness. This is a distribution curve with skew. You can see that there is a very long tail and this doesn't sit in the middle. A normal distribution curve might look more like this. I'm sure you've seen it, it's a bell curve, but a skewed distribution tends to shift in one direction or another and have a very long tail. Another important related topic is kurtosis. This is when your distribution curve isn't normal and it has fat tails.
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=94)** You can see this doesn't look like a bell curve either, and you don't see thin tails at the end of the distribution. Everything here looks pretty fat. This can cause problems in your [Forecasting](../../Skills/Data%20Science/Forecasting.md). There's also autocorrelation. This is when variables are correlated over time. And it's also known as serial correlation. Because the data in a series tends to influence each next number in the series. Examples would be your height this year versus last year, especially if you stopped growing. Your income this year versus last year, especially if you didn't lose your job or get a new one, and the value of real estate this year versus last year, especially if you own the same house. For each of these series, it's quite likely that last year's number might be similar to this year's number. And this year's number might be similar to next year's number. And that last year's number influences this year's number and this number influences next year's. That's serial correlation. Another issue can be error correlation. That's when the errors of your model seem to be correlated with the dependent variable. This violates the notion that errors are random because the errors seem to be correlated with the dependent variable. The implication is that your model's probably missing one or more other variables, and that your error term includes some random noise but some other thing that's actually quite predictive of your dependent variable, and you need to pull it out. A final issue that can exist in the data is that you have heteroscedasticity. This exists when standard deviations
>
> **[3:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=188)** of a dependent variable, Y, are not constant over time compared to an independent variable X. This would be like if the standard deviation of aluminum prices went up as manufacturing numbers went up. You can sometimes see this in data or markets where you have exponential pricing. Which can be seen in the pricing for example of diamonds and the number of carats, as well as real estate and the square footage. Where a diamond with 10 carats is worth a lot more than 10, one carat diamonds. Ar a piece of property with 10 acres is worth a lot more than 10, one acre properties. This is something that can be solved for, but it can occur in the data and you need to be watching for it. All of these advanced topics in econometrics are things you should be aware of. And if you're building forecast models, you need to be watching for these. Because they can undermine the validity of your model, the effectiveness of your analysis, and the usefulness of your forecast. Because of the challenges these advanced topics present in modeling and forecasting, economists have developed other models. Log-linear models which use both logs and linear data, logits which use log functions as well, probits which are [Probability](../../Skills/Data%20Science/Probability.md) models, tobits which restrict some of the data you're using, and ARIMA and ARCH models which are designed to solve some of those autocorrelation serial correlation problems through autoregression. In short, there are a lot of things going on
>
> **[4:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=282)** when you're modeling and there are many advanced topics and many models you can use to address some of those bigger challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forecasting](../../Skills/Data%20Science/Forecasting.md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **Env Vars:** kmi (1), arima (1), arch (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** for example (2), similar to (1)
> **Warnings:** be aware (2)
> **Tools:** notion (1)
> **Speakers:** - there (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=0)** - Thank you for taking my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, Data, [Economic Modeling](../../Skills/Data%20Science/Economic%20Modeling.md), and [Forecasting](../../Skills/Data%20Science/Forecasting.md) with [Stata](../../Skills/Data%20Science/Stata.md). Now that you've taken this course, I hope that you're able to identify the most important priorities and pitfalls when you're working with data and you should be able to identify and describe some of the most advanced topics related to econometrics and [Statistics](../../Skills/Data%20Science/Statistics.md). Plus, having seen hands-on modeling, I hope that you're now able to analyze data in Stata and incorporate results into financial models and forecasts. As you look to build up your skills and knowledge in this area, I recommend two books as important resources. First, "A Gentle Introduction to Stata". And second, "Using Econometrics: A Practical Guide". As every job becomes a data job, I hope that this course about data makes your job easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Economic Modeling](../../Skills/Data%20Science/Economic%20Modeling.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Speakers:** - thank (1)


## Instructor

- [Jason Schenker](../../Instructors/Data%20Science/Jason%20Schenker.md)

## Resources

- Exercise files available

## Skills Covered

- Economic Modeling
- Stata
- Financial Forecasting

## Path Context

### In [Master Key Financial Analyst Skills](../../Paths/Data%20Science/Learning%20Paths/Master%20Key%20Financial%20Analyst%20Skills.md)
← [Excel Modeling Tips and Tricks](Excel%20Modeling%20Tips%20and%20Tricks.md) | **6 of 6**

## Appears In

- [Master Key Financial Analyst Skills](../../Paths/Data%20Science/Learning%20Paths/Master%20Key%20Financial%20Analyst%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training](Algorithmic%20Trading%20and%20Finance%20Models%20with%20Python%2C%20R%2C%20and%20Stata%20Essential%20Training.md) — Stata
- [Using Data in Financial Analysis](Using%20Data%20in%20Financial%20Analysis.md) — Financial Forecasting
- [Financial Forecasting with Analytics Essential Training](Financial%20Forecasting%20with%20Analytics%20Essential%20Training.md) — Financial Forecasting

---

[↑ Back to top](#)