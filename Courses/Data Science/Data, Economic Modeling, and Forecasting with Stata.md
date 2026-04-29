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
  - '[[Master Key Financial Analyst Skills]]'
prev_courses:
  - '[[Excel Modeling Tips and Tricks]]'
path_nav: '[{"path":"Master Key Financial Analyst Skills","position":6,"total":6,"prev":"Excel Modeling Tips and Tricks","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/economic-modeling
  - skill/stata
  - skill/financial-forecasting
status: not-started
created: 2026-04-29
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
  - Be prepared for the data jobs of the future
- [**1. Overview**](#1-overview) (2 videos)
  - Purpose of modeling in Stata
  - The value of good data and good big data
- [**2. Modeling Basics**](#2-modeling-basics) (5 videos)
  - Statistics and econometrics
  - Univariate and multivariate linear regression models
  - Correlation is not causation
  - Overly tight model fit
  - Models are always wrong
- [**3. Screencap Basics in Stata**](#3-screencap-basics-in-stata) (11 videos)
  - Overview and enter data
  - Data preparation and selection
  - Inputting data
  - Mean and summary statistics
  - Standard deviation and SE
  - Correlation
  - Key output validity measures
  - Univariate model
  - Multivariate model
  - Appling univariate model to forecast
  - Saving and files
- [**4. Advanced Topics**](#4-advanced-topics) (1 videos)
  - Advanced topics
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Be prepared for the data jobs of the future
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=0)** - People often say that every company is a tech company.
>
> **[0:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=3)** Well in the future, every company will also be a data company, and that means every job will be a data job.
>
> **[0:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=11)** Analyzing data, building statistical models, and creating forecasts will become increasingly critical parts of many jobs.
>
> **[0:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=19)** I'm Jason Schenker, President of Prestige Economics and Chairman of The Futurist Institute, and I've been working with data and models for over two decades.
>
> **[0:27](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=27)** In fact, some of the forecasts I've created have been ranked number one in the world for their accuracy by Bloomberg News.
>
> **[0:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/be-prepared-for-the-data-jobs-of-the-future?u=76281980&t=34)** Join me in the LinkedIn Learning Course Data, Economic Modeling, and Forecasting with Stata, where we'll use the Stata software to do data analysis, build models, and forecast to help you get up that learning curve to be prepared for the data jobs of the future.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - people (1)


### 1. Overview

> [↑ Back to Table of Contents](#table-of-contents)

#### Purpose of modeling in Stata
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=0)** - People talk about the value in data, but it's not the data by itself that has value.
>
> **[0:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=6)** It's the value in the implications that you can derive from that data.
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=12)** Data without analysis is like owning a car that runs on gasoline, but has an empty tank.
>
> **[0:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=18)** There are many different people who analyze data, statisticians, economists, econometricians, data scientists, and other analysts.
>
> **[0:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=28)** They use statistical software programs to analyze data with a number of key purposes in mind, including identifying statistical correlations, demonstrating causal relationships, building models that have future predictive value, and making forecasts.
>
> **[0:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=44)** And those forecasts can be used to predict any number of things, including financial market movements, future costs and revenues, or identifying future customers.
>
> **[0:54](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=54)** In fact, forecasts can be made around almost any kind of financial business or economic data series you can imagine.
>
> **[1:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=62)** There are many different statistical software packages you can use like Excel, eViews, SAS, R, MatLab, and STATA.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=72)** Because I work with large data sets but not massive data sets, I prefer to work with STATA, and that's the program we'll be using in this course.
>
> **[1:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=81)** But whatever statistical program you decide to use, make sure that it's sufficient for the analysis that you want to perform.
>
> **[1:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/purpose-of-modeling-in-stata?u=76281980&t=89)** But remember, you don't have to go overboard, either in terms of cost or something unnecessarily complicated if you don't have to.

> [!info]- Semantic Content
>
> **Env Vars:** stata (2), sas (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** eviews (1)
> **Analogies:** imagine (1)
> **Speakers:** - people (1)

#### The value of good data and good big data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=0)** - Big data's a term people throw around a lot.
>
> **[0:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=3)** At its core, big data is very important for analysis and it's a way people talk about having a lot of data.
>
> **[0:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=11)** It's related to something called sample size.
>
> **[0:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=14)** And the more data you have, the bigger the sample size is and the greater the likelihood that you'll be able to derive relationships between the data and identify trends.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=26)** But more important than big data is good data.
>
> **[0:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=29)** After all, no matter how much data you have, if the data isn't good, then your analysis won't be very good either.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=37)** Good data has been collected consistently and properly.
>
> **[0:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=41)** The units are consistent and there aren't gaps in the data.
>
> **[0:45](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=45)** Having good big data is extremely valuable because it means you have a large sample size and high quality data.
>
> **[0:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/the-value-of-good-data-and-good-big-data?u=76281980&t=52)** And performing analysis on that kind of data means you have a higher chance of identifying meaningful implications and making accurate forecasts.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1)
> **Speakers:** - big (1)


### 2. Modeling Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### Statistics and econometrics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=0)** - Analyzing data for business implications usually falls into the fields of statistics or econometrics.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=7)** Statistics involves looking at data and identifying key dynamics as well as potential relationships in the data.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=16)** This includes identifying things like means of data, which is another way of saying averages.
>
> **[0:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=22)** Trends of data, which direction the data is going in and at what pace.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=26)** Distribution of data, which is the range and how the data appear.
>
> **[0:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=31)** Relationships in the data, like finding predictive relationships that influence each other in a way that allows you to make forecasts.
>
> **[0:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=39)** Econometrics is a subset of statistics and it uses statistical models and methods to analyze economic data and identify relationships with either economic or business implications.
>
> **[0:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=53)** Another term for econometrics is applied economics, because it's about applying statistical models in a practical way to economic data.
>
> **[1:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=64)** But whether you're talking about statistics or econometrics, it's about measuring data and identifying meaningful relationships.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/statistics-and-econometrics?u=76281980&t=72)** These basics form the fundamental building blocks of predictive analytics; machine learning, artificial intelligence, and more, but in order to get to something complicated like artificial intelligence, it's important to understand some of the most important basics of statistics and econometrics.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - analyzing (1)

#### Univariate and multivariate linear regression models
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=0)** - One of the most common ways people analyze data and build forecast models is using a linear regression model.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=7)** It's a way that you predict a data series by making the inputs fit into an equation that results in a straight line, hence the term, linear regression.
>
> **[0:17](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=17)** These models have one or more independent variables.
>
> **[0:20](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=20)** Those are the inputs of the model.
>
> **[0:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=23)** They also have a dependent variable.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=26)** That's the output of the model.
>
> **[0:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=28)** There's only one output, but there can be more than one input to derive that model.
>
> **[0:33](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=33)** For example, a dependent variable might be your income and the independent variables, the inputs that impact your income, would be things like your level of education, how many years work experience you have, your age, what city you live in, and a number of other factors.
>
> **[0:51](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=51)** None of those is impacted by your wage, but your wage is impacted by those different independent variables.
>
> **[1:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=60)** That's why your wage is dependent on them.
>
> **[1:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=63)** There are two different kinds of models that use these inputs and outputs.
>
> **[1:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=68)** First, there are univariate models.
>
> **[1:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=70)** These have just one input and one output.
>
> **[1:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=74)** This would be like forecasting your income only as a function of your education.
>
> **[1:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=79)** But multivariate models have multiple sets of inputs that influence one set of outputs.
>
> **[1:25](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=85)** This is like the model where a number of factors impact what your income is.
>
> **[1:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-and-multivariate-linear-regression-models?u=76281980&t=90)** Whether you're using a univariate model or a multivariate model, the most common kind of forecasting model most people use is a linear regression.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### Correlation is not causation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=0)** - One of the most common sayings among economists and data analysts is that correlation is not causation.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=7)** Correlation is when data looks like it moves together, but causation is when one data series helps you forecast another.
>
> **[0:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=15)** For example, if I told you you could predict the winner of the World Cup by the number of meteor showers that happened in the year before, that would be something that has a correlation, but I don't think you'd be able to make a pretty good forecast using that data because there isn't a causation, there's not a causal relationship.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=37)** The meteor shower doesn't cause a certain team to win the World Cup.
>
> **[0:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=41)** However, if I told you that the winner of the World Cup was correlated to the performance of the members on each team in the 24 months before the World Cup, that would be something that's correlated, and I suspect there'd be a causal relationship there because naturally their recent performance would likely be a leading indicator of how they'd perform in the World Cup.
>
> **[1:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=68)** I mean, I hope recent past soccer performance would be indicative of how the team would perform shortly thereafter.
>
> **[1:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=74)** When doing data analysis and building forecast models it's a good idea to choose variables that likely have some influence, some causal relationship, on the dependent variable.
>
> **[1:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=86)** After all, you want the inputs to influence the output, because if there isn't a causal relationship there and it's just a random correlation it's best not to use that data in your models.
>
> **[1:38](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=98)** In fact, if you use data that's just randomly correlated and has no reason for a causal relationship, it could put you on the wrong path when building your forecast model and the results would be a model that isn't very predictive or valid over time.
>
> **[1:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=113)** The big takeaway here is choose your model inputs wisely.
>
> **[1:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation-is-not-causation?u=76281980&t=118)** And just because data seem to be correlated doesn't mean they're predictive and it certainly doesn't mean you should use them in your models.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### Overly tight model fit
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=0)** - There are several big risks when you're building forecast models.
>
> **[0:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=3)** And one of the biggest risks that's also counterintuitive is that sometimes you can build a model that fits historical data too closely.
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=12)** I know that sounds crazy, and it's true that forecast models leverage historical data in order to help you make future predictions.
>
> **[0:20](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=20)** But, if the models fit too tightly to historical data, that means those models may not be very effective at adapting to new changes in future data.
>
> **[0:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=31)** This is something statisticians and econometricians refer to as a problem of fit.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=37)** And it is a real issue where sometimes that perfect model for predicting the past is not good when data in the future is released.
>
> **[0:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=46)** There are a couple of ways you can test for this.
>
> **[0:48](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=48)** First, you could test some of the historical data to build a model and then test it against other historical data that comes after the time period for which you built the model.
>
> **[0:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=58)** If it's still relatively in the right ranges and margins of error, then you have something that's likely to have a good fit going forward.
>
> **[1:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=67)** Another way to test for this is to have the model in place and test it against new data as it's released.
>
> **[1:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overly-tight-model-fit?u=76281980&t=74)** Of course, you want a forecast model that's predictive of the future, but this is one way in which an imperfect model might be better than a perfect one, because a model with too perfect a fit over the past might not be very predictive or valid when predicting the future.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### Models are always wrong
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=0)** - One thing is true of all forecast models: they are always wrong.
>
> **[0:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=4)** The question is, by how much?
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=7)** Some models fall well within acceptable margins of error or their predictions fall within confidence intervals.
>
> **[0:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=14)** But other times, that doesn't happen, and the predictions end up wildly different from the actual data.
>
> **[0:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=21)** There are four key tips to making good statistical forecast models.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=26)** First, test and retest models to ensure that the models are still providing valid forecasts, even as data sets expand and new data is released.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=37)** Second, measure model errors to improve your analysis and forecasts.
>
> **[0:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=42)** If you don't measure errors, you can't improve upon them.
>
> **[0:45](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=45)** Third, add more good data.
>
> **[0:48](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=48)** If a model isn't performing well, you probably need more data and not just more data, but more good data when you're doing your analysis or forecasting.
>
> **[0:56](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=56)** A good example of this would be looking if you can add more historical data.
>
> **[1:01](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=61)** The longer the amount of time the data you have feeds into the model, the more predictive it will be under various circumstances in the future.
>
> **[1:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=71)** Fourth, iterate on analytical models to constantly improve the potential to derive implications.
>
> **[1:17](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=77)** You don't just build models and then leave them.
>
> **[1:20](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=80)** You have to make sure you're continually revisiting the assumptions and the data to make sure you're producing the most accurate forecast possible.
>
> **[1:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/models-are-always-wrong?u=76281980&t=89)** By following these four tips, you can improve the validity of your forecast models because even if forecasts are always wrong, there's still the opportunity to make them wrong as little as possible.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - one (1)


### 3. Screencap Basics in Stata

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview and enter data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=0)** - [Jason] Now, before we get started with using STATA, we need to acclimate you to it.
>
> **[0:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=4)** The most important thing to know is right in front of you.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=7)** This is where you're going to see the outputs.
>
> **[0:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=10)** You can't input anything there.
>
> **[0:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=11)** It's just the output console.
>
> **[0:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=13)** Where you are going to be inputting commands is below here in the command prompt area.
>
> **[0:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=19)** And as you input commands on the left, there will be a historical running record of the commands you've been using.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=26)** Once, of course, we've inputted some data on the right, you'll have a record of the names and labels of the different variables as well as other information about them.
>
> **[0:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=34)** Now, there are many different software packages that you can use to analyze data.
>
> **[0:38](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=38)** I've been using STATA for over 20 years.
>
> **[0:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=40)** The reason I prefer it is it's really ideal for looking at economic data or business data, trying to analyze relationships and make forecasts.
>
> **[0:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=49)** It's much stronger than eViews or Excel, but it's nowhere near as expensive as some of the other much more advanced, more complicated programs that are also used for the biggest datasets.
>
> **[1:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=62)** Unless you're working with millions of lines of data, STATA is probably going to be sufficient for what you need at a price point that is much more reasonable than some of the other software packages.
>
> **[1:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=73)** Now, up here on the left, you can see both a header of different actions you can take and menus you can select as well as icons.
>
> **[1:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=82)** Now, there are a number of graphics you can make related to your data.
>
> **[1:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=86)** And there are lots of different statistical things you can do.
>
> **[1:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=89)** Many of them are very, very complicated, but this course is about basics.
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=95)** And before we can do any analysis at all, we need data.
>
> **[1:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=99)** And that's where we go to this table with a pencil in it, labeled the data editor.
>
> **[1:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=104)** And you click that, and a window opens up.
>
> **[1:48](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=108)** This is where we're going to input our data.
>
> **[1:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/overview-and-enter-data?u=76281980&t=112)** Now, let's go over to Excel and grab the data we're going to input.

> [!info]- Semantic Content
>
> **Env Vars:** stata (3)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** eviews (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [jason] (1)

#### Data preparation and selection
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=0)** - [Jason] Okay, so this is the actual data we're going to be pulling into Stata.
>
> **[0:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=4)** In the top row you see descriptions of variables, and in the second row, you see these abbreviations.
>
> **[0:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=10)** When we pull the data into the Stata data editor, we're going to leave the first row behind, and we're going to grab row two all the way down.
>
> **[0:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=18)** This includes monthly data from July 2007, until October 2020.
>
> **[0:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=24)** And what are we pulling in?
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=26)** Well actually, we're looking at aluminum prices, which are columns B through H, as well as manufacturing data in columns I through L.
>
> **[0:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=35)** The dependent variables are related to aluminum prices.
>
> **[0:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=39)** Because logically, there is not only a correlation between aluminum prices and manufacturing, but there's a causal relationship.
>
> **[0:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=46)** And it's not that aluminum prices cause manufacturing, but it's that manufacturing strength or weakness can impact aluminum prices.
>
> **[0:56](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=56)** So the dependent variables are all related to price of aluminum, and the independent variables are these manufacturing series.
>
> **[1:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=64)** Let's walk through each of the columns very quickly.
>
> **[1:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=67)** Since these are monthly data, what we're looking at are the LME aluminum monthly prices.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=72)** In column B, you see the opening monthly price.
>
> **[1:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=75)** Column C is the high price of the month.
>
> **[1:17](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=77)** Column D is the low price of the month, and column E is the closing price for the month.
>
> **[1:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=82)** In the next three columns, you see the price of aluminum one month ahead, three months ahead, and six months ahead.
>
> **[1:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=90)** After all, if we want to be analyzing manufacturing data, in order to make a forecast about the future, we're going to need to look at how future prices are impacted by the current manufacturing data.
>
> **[1:43](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=103)** One month, three month, and six months out.
>
> **[1:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=106)** Then there are the four categories here for manufacturing data.
>
> **[1:50](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=110)** This takes the form of purchasing manager indices, which are surveys of purchasing managers who work at manufacturing companies by country.
>
> **[1:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=118)** It includes the purchasing manager index for the Eurozone, China, and the United States.
>
> **[2:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=125)** These data points have a breakeven of 50, if the number's above 50, it's usually supportive of manufacturing and indicates manufacturing's expanding, while if it's below 50, that indicates a contraction.
>
> **[2:17](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=137)** The final category is a sum of those three PMIs, Eurozone, China, and the US.
>
> **[2:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=143)** And here we have that combined number with a breakeven of 150.
>
> **[2:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=148)** Again, the US ISM, Chinese Saishin manufacturing PMI, Eurozone manufacturing PMI, and this combined PMI are the independent variables, they do what they're going to do.
>
> **[2:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=160)** But the expectation, when we look at the data, is that we're going to see these aluminum prices are impacted by the manufacturing data.
>
> **[2:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/data-preparation-and-selection?u=76281980&t=169)** Now we're going to highlight row two, carry that all the way down, and hit Control C.

> [!info]- Semantic Content
>
> **Env Vars:** pmi (3), lme (1), ism (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [jason] (1)

#### Inputting data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=0)** - [Jason] Now that we're back in the Stata Data Editor, we're going to go to the upper most left cell and we're going to hit control + V where we can paste in that Excel data.
>
> **[0:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=10)** Now it's going to ask us what's in the first row.
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=12)** Remember, I had variable names in row two.
>
> **[0:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=14)** That's now the top row of this data.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=16)** We want to click variable names are in the top row.
>
> **[0:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=19)** And you can see, all the data's come over it.
>
> **[0:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=21)** We have the variable names on top.
>
> **[0:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=23)** Now the date on the left, these red numbers can't be analyzed.
>
> **[0:25](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=25)** That's okay.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=26)** We're not looking to analyze the date.
>
> **[0:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=28)** It's just really here for our reference when we look at the data.
>
> **[0:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=31)** And we have all the other data series here that have carried over.
>
> **[0:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=35)** Now, the best part about the data is we can close this Data Editor and all the data is there.
>
> **[0:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=41)** You see now that the variable list has been populated and this is great.
>
> **[0:45](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=45)** You can also see below, some information where we have 160 observations and how much size and memory it's taking up.
>
> **[0:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=52)** And in the control panel, you can also see that these 12 variables with 160 observations each, have been pasted into the Data Editor.
>
> **[1:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=60)** If you go back up to the Data Editor, you can browse it by clicking the magnifying glass and just look over your data.
>
> **[1:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=67)** Or if you wanted to edit it and put it in a new series, you can click the graph with the pencil and put more information into your editor.
>
> **[1:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/inputting-data?u=76281980&t=76)** Now that you've acclimated yourself and you've inputted your data, It's time to get going on some analysis.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Speakers:** - [jason] (1)

#### Mean and summary statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=0)** - [Instructor] The first thing we're going to analyze in this data is the mean of two of our data series.
>
> **[0:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=6)** First, we're going to look at the mean of the sum of the PMIs.
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=12)** The command for this is very simple.
>
> **[0:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=14)** You just write the word mean, you put a space and then you put your variable.
>
> **[0:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=19)** This is just one example of the mean.
>
> **[0:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=21)** And when we see it, we see here's the mean estimation.
>
> **[0:25](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=25)** The number of observations, the mean, and the standard error, which I'll talk about in a second as well as the confidence interval.
>
> **[0:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=32)** The 95% confidence interval shows what 95% of the time the range will look like.
>
> **[0:38](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=38)** And you can see that the mean for the total of those PMIs.
>
> **[0:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=42)** The sum of that global manufacturing number with a breakeven of 150, the mean is around 154.5.
>
> **[0:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=49)** And the range 95% of the time is between 152.7 and 156.3.
>
> **[0:56](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=56)** This is actually quite positive because as we think about 150 is the breakeven, logically manufacturing on a global basis, over 813 plus year period should be expanding, and that's what the data shows us.
>
> **[1:09](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=69)** Now, the next thing we want to do is compare two means.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=72)** You don't just have to do one at a time.
>
> **[1:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=74)** Let's do the mean of the sum of the PMIs as well as for that Aluminum LME Closing Price.
>
> **[1:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=84)** Now, this is also really interesting.
>
> **[1:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=86)** We see that mean data as well as the center of competence intervals from some of the PMOs but also for Aluminum Closing Prices.
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=94)** What this means is that the mean closing price of aluminum on the LME between July of 2007 and October of 2020 was $1,975 per ton.
>
> **[1:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=109)** The 95% confidence interval showed a range from $1,918 to 2032$.
>
> **[1:57](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=117)** That's where 95% of the results exist.
>
> **[2:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=122)** Now, the mean estimation isn't the only way we can look at the data.
>
> **[2:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=127)** We can also summarize the data which is another very useful command.
>
> **[2:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=135)** If we type in summarize, and then we look at, for example, the Aluminum Closing Price three months ahead, and compare that to the sum of all the PMIs, we are going to see something different.
>
> **[2:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=150)** Right?
>
> **[2:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=151)** This helps with checking for clean data.
>
> **[2:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=155)** For example, because the Aluminum Price is three months ahead, there's only 157 observations, which is that first column, compared to 160 observations of the PMIs.
>
> **[2:48](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=168)** Naturally three months are missing, because we're looking three months into the future.
>
> **[2:54](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=174)** The mean for that series is $1,964 per time with a minimum of $1,308, and a maximum of 3070.
>
> **[3:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=187)** This range is much bigger than that confidence interval.
>
> **[3:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=191)** And that's because you can have tail ends to a distribution.
>
> **[3:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=195)** The same thing is true with the sum of those three PMIs, although 95% of the time, they're between about 153 and 156.
>
> **[3:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=204)** The minimum was 108, and the maximum across the whole series was 171.
>
> **[3:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=209)** This provides us a little bit more information than just the mean.
>
> **[3:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=214)** Now there's another summary which is really helpful.
>
> **[3:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=217)** If we look to summarize the aluminum high price and the aluminum low price across the 160 observation.
>
> **[3:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=227)** What we see logically, is that the minimum for the aluminum high price for the month is higher than the minimum for the aluminum low price for the month.
>
> **[4:01](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=241)** We also see that the maximum aluminum high price is higher than the maximum aluminum low price.
>
> **[4:09](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=249)** This makes a lot of sense and is another good sanity check.
>
> **[4:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=253)** We make sure the data is clean, because clearly the high prices for the month, given their minimum should be higher than the low prices for the month.
>
> **[4:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=264)** Additionally, we see that the aluminum high price mean is higher than the aluminum low price mean.
>
> **[4:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/mean-and-summary-statistics?u=76281980&t=271)** That makes a lot of sense as well.

> [!info]- Semantic Content
>
> **Versions:** 154.5 (1), 152.7 (1), 156.3 (1)
> **Env Vars:** lme (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Standard deviation and SE
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=0)** - [Jason] You'll notice here that there's the standard deviation in these summarize commands and a standard error in the mean commands.
>
> **[0:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=10)** Well, what does that mean?
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=12)** First of all, the standard deviation is not the standard error.
>
> **[0:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=15)** They are not the same thing.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=16)** The standard deviation shows a distribution of data around the mean.
>
> **[0:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=22)** On the left, you can see the mean with the distribution of readings that are not too far away.
>
> **[0:27](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=27)** On the right, you see a mean, but the distribution of the readings are much further.
>
> **[0:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=32)** The one on the left has a lower standard deviation.
>
> **[0:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=36)** The one on the right has a higher standard deviation because the deviation of the reads are much bigger than they are on the left.
>
> **[0:45](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=45)** You should also know that the standard deviation is represented by Sigma and there's an equation with it.
>
> **[0:51](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=51)** We're not going to talk any more beyond that but that's the equation for the standard deviation.
>
> **[0:56](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=56)** The standard error which is sometimes called the standard error of the mean, shows how far your sample mean is likely to be from the population.
>
> **[1:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=66)** As the sample size increases, the standard error narrows around the mean.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=72)** And I'll explain all that in just a second.
>
> **[1:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=75)** But most importantly, equation-wise the standard error which is sometimes written out as the standard error of the mean or SEM, which is also sometimes shown as the Sigma of X-bar, is this equation here.
>
> **[1:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=88)** Essentially you're taking the standard deviation and putting it over the square root of the number of readings in your sample.
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=95)** This is important because it indicates how the precision of a model can improve with more data.
>
> **[1:43](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=103)** On the left, we see a mean, but there's not too many readings.
>
> **[1:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=107)** This is going to have a much higher standard error then on the right where there's the mean and a lot more readings.
>
> **[1:55](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=115)** There are a few different examples of this.
>
> **[1:57](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=117)** Like if you wanted to find out the average education level in the United States, you probably wouldn't survey four people, you'd want to survey millions of people.
>
> **[2:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=127)** And if you wanted to know people's income levels, you do the same.
>
> **[2:11](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=131)** You want as many numbers as possible in order to reduce the error, in order to make sure that the mean you derive is actually what the mean is supposed to be.
>
> **[2:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=143)** This is why you take the standard deviation and put it over the square root of N, which is the number of readings.
>
> **[2:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=150)** The more responses and readings you have in your data, the smaller the standard error will be.
>
> **[2:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=159)** The bottom number gets bigger here.
>
> **[2:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=160)** And as this gets bigger, that standard error of the mean goes down.
>
> **[2:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=167)** And whether we're talking about things like income level or education or anything else where a bigger population answer will get you closer to the real mean, that's where the standard error is the smallest.
>
> **[3:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=182)** This is also why, as we're looking at aluminum prices, we wanted to have a pretty robust data series.
>
> **[3:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=188)** And 160 months of aluminum price and manufacturing data's pretty good.
>
> **[3:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=193)** We're probably going to have a much lower standard error than if we were to have had, I don't know, four months of aluminum prices, or even 24 months of aluminum prices in manufacturing data.
>
> **[3:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=204)** In this case, we see how more data, more good data is helpful for reducing the standard error.
>
> **[3:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=211)** The big, important takeaways here are that standard deviation and standard error are different.
>
> **[3:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=216)** Standard error is smaller than standard deviation because you're putting standard deviation over that square root of n.
>
> **[3:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=224)** The standard deviation reflects a range of values and how wide apart they are, whereas the standard error reflects variation around the mean and how accurate that mean is likely to be.
>
> **[3:55](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=235)** As we look at the data, for example, for that sum PMI number and we see the standard error, it is no surprise, much smaller than the sum PMI standard deviation.
>
> **[4:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=244)** It's a lot smaller.
>
> **[4:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=246)** The standard deviation is 11.37.
>
> **[4:09](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=249)** The standard error is less than one.
>
> **[4:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=252)** This is a good sign that we have a solid sample size, and that standard error is just much, much smaller.
>
> **[4:20](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/standard-deviation-and-se?u=76281980&t=260)** This is why whenever you're doing analysis, one of the best things you can do is make sure you have a large enough sample size and enough good data to do your analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** pmi (2), sem (1)
> **Code Keywords:** this. (1), case, (1)
> **Versions:** 11.37 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [jason] (1)

#### Correlation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=0)** - [Narrator] One of the goals of using the mean and summarize commands is to get familiar with your data.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=7)** Another way to get familiar with your data before you begin regression analysis and forecasting, is to look for correlations.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=16)** The command for this in Stata is C-O-R-R-E-L, correl.
>
> **[0:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=21)** And let's take a look at some of the data we have.
>
> **[0:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=24)** For example, let's look at those aluminum closing prices, one month out and compare it to that sum of the PMIs.
>
> **[0:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=36)** We see here that there's a statistically significant and positive correlation.
>
> **[0:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=42)** In fact, this is a correlation of almost 0.5 and because it's positively correlated, it means that when PMIs go up, aluminum prices, generally will go up as well.
>
> **[0:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=53)** If this had been an inverse correlation the number would've been negative, and that would mean that, for example when the PMIs go up, aluminum prices would go down.
>
> **[1:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=62)** But this is a positive correlation.
>
> **[1:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=65)** Let's take a look at some of the other data series to see if we can find a correlation that's a little bit better than about 50%.
>
> **[1:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=73)** Ideally we want to find something that's much more highly correlated.
>
> **[1:17](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=77)** So let's try a few different numbers.
>
> **[1:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=79)** Let's look at the correlation between the aluminum closing price three months in the future and that sum of the PMIs.
>
> **[1:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=88)** And we can also look at that correlation number for the aluminum price six months ahead.
>
> **[1:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=97)** And that sum of the PMIs.
>
> **[1:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=101)** What we see here when looking at the three different future periods is that the correlation is actually highest not six months out, not one month out, but three months out.
>
> **[1:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=113)** Now we can dig one level further with this correlation.
>
> **[1:55](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=115)** This is the sum of the PMIs, but perhaps the different PMI components, the individual regions or countries, have a more significant impact.
>
> **[2:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=124)** So let's take a look at the correlation for that aluminum closing price three months out, and the Eurozone PMI, then we'll look at the correlation for aluminum closing price three months out, and the US ISM manufacturing PMI and then we'll look at the correlation for the aluminum closing price three months out, and the Chinese EMI.
>
> **[2:27](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=147)** This is the privately compiled Caixin manufacturing PMI.
>
> **[2:31](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=151)** And what we see is interestingly enough, the US ISM is less correlated with the price.
>
> **[2:38](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=158)** The Eurozone is a bit more, but it's that Chinese manufacturing PMI that's 68.4% correlated with the aluminum price.
>
> **[2:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=167)** This makes sense.
>
> **[2:48](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=168)** China is the biggest consumer in the world of aluminum.
>
> **[2:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=172)** It's really nice when you're doing analysis and you see that the numbers actually coincide with reality.
>
> **[2:59](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=179)** And that's something we're seeing here.
>
> **[3:01](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/correlation?u=76281980&t=181)** Whenever you're working with data, this is something you want to check, and that correlation command can help you get there.

> [!info]- Semantic Content
>
> **Env Vars:** pmi (5), ism (2), emi (1)
> **Code Keywords:** let (6)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** find (2)
> **Versions:** 0.5 (1), 68.4 (1)
> **Analogies:** for example (2)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [narrator] (1)

#### Key output validity measures
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=0)** - [Jason] Now because we saw a statistical relationship and strong correlation between that three-month ahead aluminum price and the Chinese manufacturing PMI, let's do a linear regression model, the command for which is R-E-G.
>
> **[0:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=14)** That's just regression, that's it.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=16)** And then let's put in those same things that are correlated.
>
> **[0:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=18)** Let's look at that aluminum closing price, three months in and the Chinese PMI.
>
> **[0:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=24)** This is what we call a univariate regression because there's one input to it.
>
> **[0:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=30)** The only independent variable is the Chinese PMI.
>
> **[0:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=34)** And that output, there's of course only one output in a regression, is the aluminum price.
>
> **[0:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=39)** What we see here is some statistical significance as well.
>
> **[0:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=44)** There are a few different points of validity that you want to look at with a univariate regression.
>
> **[0:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=49)** One is the P statistic.
>
> **[0:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=52)** This is related to the T statistic.
>
> **[0:55](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=55)** This here, you want these to be at zero.
>
> **[0:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=58)** For the probability about the F statistic, you want that to be zero.
>
> **[1:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=63)** That's actually more important when you have multiple variables.
>
> **[1:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=66)** When it's just one independent variable, you really want to be watching what are called these T's statistics.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=72)** And most importantly, this probability around the T statistic.
>
> **[1:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=75)** This means these are statistically significant variables.
>
> **[1:20](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=80)** As for the R-squared and the adjusted R-squared, these actually give you some idea of what percentage of the variation is explained by the variable or variables that you're using in your model.
>
> **[1:33](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=93)** Folks want to get this number is close to one as possible to have it have the greatest level of validity, but sometimes, if you get it too close, the model isn't very adaptive to new data.
>
> **[1:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=104)** And that's something you want to avoid.
>
> **[1:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=106)** Now that we have this regression analysis and the output, the best thing to do is to try to apply it.
>
> **[1:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/key-output-validity-measures?u=76281980&t=113)** Let's see what it can actually mean in terms of implying aluminum prices and forecasting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** pmi (3)
> **Speakers:** - [jason] (1)

#### Univariate model
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=0)** - [Instructor] Now that you've done your univariate regression and you have an output I've brought this over here so we can actually begin to create forecasts out of it.
>
> **[0:09](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=9)** We've discussed the statistics that make these numbers valid, like the T statistics and the probability of the F statistic and the R-squared, adjusted R squared.
>
> **[0:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=18)** We've talked about those but now's the time to talk about the coefficients in our outputs and there are two.
>
> **[0:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=26)** The first, is the coefficient for the Chinese Manufacturing PMI number which is our one independent variable and then there's this other number.
>
> **[0:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=36)** This is actually the constant.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=37)** This represents the intercept of the formula that we're going to put together as we build our forecast.
>
> **[0:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=46)** This all comes back to the equation of a line which you might recall is Y equals MX plus B but econometrically or statistically we talked about Y is equal to beta naught plus beta one times X one.
>
> **[0:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=58)** What does that mean exactly?
>
> **[1:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=60)** Well, beta naught is the line intercept.
>
> **[1:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=63)** That's that constant number.
>
> **[1:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=65)** Beta one is the coefficient of the independent variable that this is the coefficient of that Chinese PMI number.
>
> **[1:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=74)** That's the independent variable that impacts the dependent variable, which is that price of aluminum three months in the future.
>
> **[1:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=83)** When we look at the output we see that beta naught is that intercept at minus $2,780 and 40 cents.
>
> **[1:33](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=93)** We also see that beta one is the coefficient at 93.07.
>
> **[1:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=100)** The equation for forecasting then would be, Y is equal to that beta naught value plus the beta one times X.
>
> **[1:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=109)** So if we wanted to apply this let's assume the hypothetical where X is 55 where the Chinese Manufacturing PMI is 55.
>
> **[2:01](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=121)** We begin to plug this in.
>
> **[2:02](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=122)** We have the intercept, we add that to the product of the coefficient beta one times the X we get that product value.
>
> **[2:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=132)** We add it to the intercept, which is a negative number and we end up with a final value where Y is equal to 2338.45.
>
> **[2:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=141)** What does that mean?
>
> **[2:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/univariate-model?u=76281980&t=142)** Well actually, according to this model if the Chinese PMI is 55, the price of aluminum on the LME three months in the future would be $2,338 and 45 cents.

> [!info]- Semantic Content
>
> **Env Vars:** pmi (4), lme (1)
> **Versions:** 93.07 (1), 2338.45 (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Multivariate model
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=0)** - [Instructor] Now that you've done a univariate analysis let's consider some multi-variate regression analysis.
>
> **[0:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=6)** When you're doing a multivariate regression analysis just like with a univariate regression you begin by typing in our reg for regression, then you type in the dependent variable.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=16)** In this case, let's use the same one aluminum closing price three months in advance and you put in then multiple independent variables with a space between each.
>
> **[0:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=28)** Before we consider just the Chinese PMI, let's consider a combination of the Eurozone PMI, the Chinese PMI, and the US ISM manufacturing index.
>
> **[0:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=40)** In this output, we see a few different things before we had just one intercept and one coefficient for the one independent variable but now we have the intercept and three coefficients for the three independent variables.
>
> **[0:56](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=56)** One thing you'll notice, is that even though the R squared and adjusted R squared are a bit higher than in the model just with the Chinese PMI and the F statistic probability is zero which is a good sign, we see an issue with the US ISM manufacturing index.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=72)** And there are two problems here; one, this probability of the T statistic number is not zero.
>
> **[1:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=78)** And that makes me a bit worried because you can see in the 95% confidence interval which ranges from minus 25.6 to a positive 2.40 is actually in that confidence interval, which means maybe this isn't a statistically significant variable to consider but more importantly, the coefficients negative.
>
> **[1:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=100)** We haven't talked about coefficients yet but here's where it really matters.
>
> **[1:45](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=105)** The positive coefficient for the Chinese PMI indicates that as that number goes up, so does the aluminum price.
>
> **[1:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=113)** For the Eurozone and the Chinese PMI in the multivariate regression, that's also true.
>
> **[1:58](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=118)** For the US ISM, as that gets higher it actually weighs on aluminum prices.
>
> **[2:04](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=124)** And that doesn't make a lot of sense after all if US manufacturing is getting stronger, why would that maybe weigh in aluminum prices?
>
> **[2:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=133)** We could come up with a number of theories about this, but maybe it's better to try a multivariate regression that just excludes the ISM for now.
>
> **[2:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=143)** So let's do the same thing.
>
> **[2:24](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=144)** Let's take that aluminum closing price three months in advance and consider just the Eurozone PMI and the Chinese PMI and we'll leave the ISM out of it.
>
> **[2:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=154)** What we find is that now all the T statistics look right, the coefficients make sense.
>
> **[2:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=161)** When the Eurozone PMI goes up, there's a positive impact.
>
> **[2:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=164)** When the Chinese PMI goes up, there's also a positive impact on aluminum prices.
>
> **[2:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=169)** And we see the probability around the F statistic also showing significance and the adjusted R squared in the R-squared are very similar to what they were with the ISM but we have this added problem.
>
> **[3:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=180)** There are no zero values in any of these confidence intervals which means these variables are statistically significant.
>
> **[3:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=188)** The coefficients are valid and it's explaining a decent portion of what's going on.
>
> **[3:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=194)** More importantly, it's explaining more than just the Chinese PMI alone in a univariate model.
>
> **[3:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/multivariate-model?u=76281980&t=202)** Now that we've completed the multivariate regression analysis, it's time to take this output and use these coefficients to determine what the future price of aluminum could be.

> [!info]- Semantic Content
>
> **Env Vars:** pmi (11), ism (6)
> **Code Keywords:** let (5), case, (1), this, (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 25.6 (1), 2.40 (1)
> **Analogies:** just like (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Appling univariate model to forecast
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=0)** - [Instructor] You can now see that multivariate regression output and now's the time to take the coefficients and the independent variables and put them together in equations to forecast future aluminum prices.
>
> **[0:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=12)** This all begins with the equation for a multi-variate linear model where aluminum prices three months in the future are a function of both Chinese Manufacturing and Eurozone Manufacturing.
>
> **[0:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=23)** Econometrically, this is Y equals beta naught plus beta one X one plus beta two X two.
>
> **[0:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=32)** In our output, the beta naught is the intercept at minus 3025.54.
>
> **[0:40](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=40)** Beta one is the coefficient at 81.74 that's for the Chinese PMI.
>
> **[0:46](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=46)** Beta two is the coefficient for the Eurozone PMI at 16.25.
>
> **[0:52](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=52)** The equation for forecasting thus would be Y equals minus 3025.54 plus that beta one times X one plus 16.25 beta two times X two.
>
> **[1:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=65)** Let's now consider another hypothetical example where the Chinese Manufacturing PMI is still at 55 but maybe that Eurozone PMI is at 51.
>
> **[1:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=75)** All the numbers have changed from when we had a univariate model because now it's a multi-variate model and there's a lot more going on.
>
> **[1:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=83)** As we pull together the equation, we have that intercept from our multivariate model beta one times our new X one hypothetically our beta two times the X two hypothetical.
>
> **[1:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=95)** We do the math and we end up with this figure here, 2,298 and 91.
>
> **[1:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=101)** What does that mean?
>
> **[1:43](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=103)** Well, it means that according to this model, the closing price of aluminum on the LME three months in the future, when the Chinese PMI is 55 and the Eurozone PMI is 51 will be $2298 and 91 cents.
>
> **[2:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=120)** Now whether you're doing a univariate model or a multivariate model, there's an important thing to realize.
>
> **[2:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=126)** When we apply the coefficients, the way we have both in a univariate equation and in the multi-variate equation we come up with point forecasts but every point forecast is wrong.
>
> **[2:18](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=138)** In fact, every coefficient has a standard error.
>
> **[2:21](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=141)** We see that here.
>
> **[2:22](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=142)** We also know that each coefficient has a confidence interval a range in which it falls and while it's most common to reflect univariate and multivariate regression forecast as a point there's also sometimes a reason where you might want to show that 95% confidence interval and a range of potential outcomes for your model.
>
> **[2:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/appling-univariate-model-to-forecast?u=76281980&t=164)** In short, it's important to know that point forecasts are not the same as confidence interval forecast and that both exists and both are ways that you can discuss forecasts from your models.

> [!info]- Semantic Content
>
> **Env Vars:** pmi (6), lme (1)
> **Versions:** 3025.54 (2), 16.25 (2), 81.74 (1)
> **Code Keywords:** function (1), let (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Saving and files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=0)** - [Jason] Now the last thing you need to make sure you do when you're in Stata is to save your work.
>
> **[0:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=5)** First, there's your data.
>
> **[0:08](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=8)** If we go back to the data editor, you can save your data as a data file.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=16)** Right here, it's at DTA and we're going to just save this file as a DTA file.
>
> **[0:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=23)** If we want to go back and use this, we can pull the data from there.
>
> **[0:27](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=27)** As before, if we X out of the data file, this doesn't make the data go away.
>
> **[0:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=30)** It is there.
>
> **[0:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=32)** You want to make sure not to lose any of your commands or any of your data.
>
> **[0:37](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=37)** And of course, you can always print your file in order to save the output.
>
> **[0:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=42)** This is another great thing to do, especially as a PDF to make sure you don't lose your work.
>
> **[0:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/saving-and-files?u=76281980&t=47)** As with all data analysis, one of the best things you can do is save early and often.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Env Vars:** dta (2), pdf (1)
> **Code Keywords:** this, (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [jason] (1)


### 4. Advanced Topics

> [↑ Back to Table of Contents](#table-of-contents)

#### Advanced topics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=0)** - There are a number of advanced topics in econometrics, and there isn't enough time to discuss them all in this course, but you should be aware that there can be problems in your data.
>
> **[0:10](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=10)** And that there are other models and not just linear regressions.
>
> **[0:13](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=13)** Let's talk about some of these different topics now.
>
> **[0:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=16)** They include: multicollinearity, heteroskedasticity, skewdness, kurtosis, autocorrelation, error correlation, and other models.
>
> **[0:27](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=27)** The first important topic is multicollinearity.
>
> **[0:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=29)** This is when two independent variables explain in part or in total the same thing.
>
> **[0:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=34)** For example, the Chinese Manufacturing KMI, in the aluminum price models was also a part of the global manufacturing number.
>
> **[0:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=42)** That's why I didn't build any models that included both the Chinese manufacturing and the global manufacturing number as two separate independent variables because the Chinese data is part of that global data.
>
> **[0:54](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=54)** That's multicollinearity, when there's overlap between two independent variables.
>
> **[0:59](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=59)** Another issue you can have in your data is skewedness.
>
> **[1:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=63)** This is a distribution curve with skew.
>
> **[1:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=65)** You can see that there is a very long tail and this doesn't sit in the middle.
>
> **[1:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=72)** A normal distribution curve might look more like this.
>
> **[1:16](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=76)** I'm sure you've seen it, it's a bell curve, but a skewed distribution tends to shift in one direction or another and have a very long tail.
>
> **[1:26](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=86)** Another important related topic is kurtosis.
>
> **[1:29](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=89)** This is when your distribution curve isn't normal and it has fat tails.
>
> **[1:34](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=94)** You can see this doesn't look like a bell curve either, and you don't see thin tails at the end of the distribution.
>
> **[1:41](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=101)** Everything here looks pretty fat.
>
> **[1:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=104)** This can cause problems in your forecasting.
>
> **[1:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=107)** There's also autocorrelation.
>
> **[1:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=109)** This is when variables are correlated over time.
>
> **[1:51](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=111)** And it's also known as serial correlation.
>
> **[1:54](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=114)** Because the data in a series tends to influence each next number in the series.
>
> **[1:59](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=119)** Examples would be your height this year versus last year, especially if you stopped growing.
>
> **[2:05](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=125)** Your income this year versus last year, especially if you didn't lose your job or get a new one, and the value of real estate this year versus last year, especially if you own the same house.
>
> **[2:15](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=135)** For each of these series, it's quite likely that last year's number might be similar to this year's number.
>
> **[2:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=139)** And this year's number might be similar to next year's number.
>
> **[2:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=143)** And that last year's number influences this year's number and this number influences next year's.
>
> **[2:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=148)** That's serial correlation.
>
> **[2:30](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=150)** Another issue can be error correlation.
>
> **[2:32](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=152)** That's when the errors of your model seem to be correlated with the dependent variable.
>
> **[2:38](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=158)** This violates the notion that errors are random because the errors seem to be correlated with the dependent variable.
>
> **[2:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=164)** The implication is that your model's probably missing one or more other variables, and that your error term includes some random noise but some other thing that's actually quite predictive of your dependent variable, and you need to pull it out.
>
> **[3:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=180)** A final issue that can exist in the data is that you have heteroscedasticity.
>
> **[3:06](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=186)** This exists when standard deviations of a dependent variable, Y, are not constant over time compared to an independent variable X.
>
> **[3:14](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=194)** This would be like if the standard deviation of aluminum prices went up as manufacturing numbers went up.
>
> **[3:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=203)** You can sometimes see this in data or markets where you have exponential pricing.
>
> **[3:28](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=208)** Which can be seen in the pricing for example of diamonds and the number of carats, as well as real estate and the square footage.
>
> **[3:36](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=216)** Where a diamond with 10 carats is worth a lot more than 10, one carat diamonds.
>
> **[3:42](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=222)** Ar a piece of property with 10 acres is worth a lot more than 10, one acre properties.
>
> **[3:49](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=229)** This is something that can be solved for, but it can occur in the data and you need to be watching for it.
>
> **[3:53](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=233)** All of these advanced topics in econometrics are things you should be aware of.
>
> **[3:59](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=239)** And if you're building forecast models, you need to be watching for these.
>
> **[4:03](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=243)** Because they can undermine the validity of your model, the effectiveness of your analysis, and the usefulness of your forecast.
>
> **[4:12](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=252)** Because of the challenges these advanced topics present in modeling and forecasting, economists have developed other models.
>
> **[4:19](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=259)** Log-linear models which use both logs and linear data, logits which use log functions as well, probits which are probability models, tobits which restrict some of the data you're using, and ARIMA and ARCH models which are designed to solve some of those autocorrelation serial correlation problems through autoregression.
>
> **[4:39](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/advanced-topics?u=76281980&t=279)** In short, there are a lot of things going on when you're modeling and there are many advanced topics and many models you can use to address some of those bigger challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), include: (1), this. (1), for, (1)
> **Env Vars:** kmi (1), arima (1), arch (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** for example (2), similar to (1)
> **Warnings:** be aware (2)
> **Tools:** notion (1)
> **Speakers:** - there (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=0)** - Thank you for taking my LinkedIn Learning course, Data, Economic Modeling, and Forecasting with Stata.
>
> **[0:07](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=7)** Now that you've taken this course, I hope that you're able to identify the most important priorities and pitfalls when you're working with data and you should be able to identify and describe some of the most advanced topics related to econometrics and statistics.
>
> **[0:23](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=23)** Plus, having seen hands-on modeling, I hope that you're now able to analyze data in Stata and incorporate results into financial models and forecasts.
>
> **[0:35](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=35)** As you look to build up your skills and knowledge in this area, I recommend two books as important resources.
>
> **[0:44](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=44)** First, "A Gentle Introduction to Stata".
>
> **[0:47](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=47)** And second, "Using Econometrics: A Practical Guide".
>
> **[0:50](https://www.linkedin.com/learning/data-economic-modeling-and-forecasting-with-stata/next-steps?u=76281980&t=50)** As every job becomes a data job, I hope that this course about data makes your job easier.

> [!info]- Semantic Content
>
> **Speakers:** - thank (1)


## Instructor

- [[Jason Schenker]]

## Resources

- Exercise files available

## Skills Covered

- Economic Modeling
- Stata
- Financial Forecasting

## Path Context

### In [[Master Key Financial Analyst Skills]]
← [[Excel Modeling Tips and Tricks]] | **6 of 6**

## Appears In

- [[Master Key Financial Analyst Skills]]

## Related Courses

_Courses sharing skills:_

- [[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]] — Stata
- [[Using Data in Financial Analysis]] — Financial Forecasting
- [[Financial Forecasting with Analytics Essential Training]] — Financial Forecasting

---

[↑ Back to top](#)