---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practical-python-for-algorithmic-trading
url: "https://www.linkedin.com/learning/practical-python-for-algorithmic-trading"
duration_minutes: 114
duration: 1h 54m
level: Intermediate
updated: 8/1/2023
learners: 100337
skills:
  - Algorithmic Trading
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/practical-python-for-algorithmic-trading-4403633/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGJu6wunUGBDg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690825887820?e=2147483647&amp;v=beta&amp;t=WzT3lm10MFL6SpZcfh5Z_kj4-4m5x4Z5hIo62L4-nB8"
linkedin_topic: Data Science
learning_paths:
  - '[[Python for Data Professionals in Finance]]'
prev_courses:
  - '[[Advanced Python in Excel for Finance- A Hands-On Approach]]'
next_courses:
  - '[[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]]'
path_nav: '[{"path":"Python for Data Professionals in Finance","position":4,"total":5,"prev":"Advanced Python in Excel for Finance- A Hands-On Approach","next":"Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/algorithmic-trading
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Practical%20Python%20for%20Algorithmic%20Trading.md)

![Practical Python for Algorithmic Trading](https://media.licdn.com/dms/image/v2/D560DAQGJu6wunUGBDg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690825887820?e=2147483647&amp;v=beta&amp;t=WzT3lm10MFL6SpZcfh5Z_kj4-4m5x4Z5hIo62L4-nB8)

# Practical Python for Algorithmic Trading

> If you work in finance or have any interest in investing and trading, you know that there’s a treasure trove of financial data available to you at any moment. But how can you use all that information to your advantage? Algorithmic trading using machine learning techniques can help you make trading decisions based on data. In this course, Jesus Lopez teaches you about data preprocessing, feature en

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading) | 1h 54m | Intermediate | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Algorithmic trading using machine learning](#algorithmic-trading-using-machine-learning)
  - [Maximize your learning](#maximize-your-learning)
- [**1. Working with Stock Market Data**](#1-working-with-stock-market-data) (2 videos)
  - [Download and export data](#download-and-export-data)
  - [Filter rows and create columns for trading strategies](#filter-rows-and-create-columns-for-trading-strategies)
- [**2. Backtesting with Classification Models**](#2-backtesting-with-classification-models) (5 videos)
  - [Compute machine learning classification model](#compute-machine-learning-classification-model)
  - [First configurations of the strategy class](#first-configurations-of-the-strategy-class)
  - [Simulate the investment strategy step by step](#simulate-the-investment-strategy-step-by-step)
  - [Run the backtest on the strategy](#run-the-backtest-on-the-strategy)
  - [Challenge: Backtest with other tickers](#challenge-backtest-with-other-tickers)
- [**3. Backtesting with Regression Models**](#3-backtesting-with-regression-models) (4 videos)
  - [Compute machine learning regression model](#compute-machine-learning-regression-model)
  - [How to evaluate regression models](#how-to-evaluate-regression-models)
  - [Configure and run the backtest with the regression model](#configure-and-run-the-backtest-with-the-regression-model)
  - [How to interpret the backtesting dashboard](#how-to-interpret-the-backtesting-dashboard)
- [**4. Backtesting Optimization**](#4-backtesting-optimization) (4 videos)
  - [Optimizing strategy parameters](#optimizing-strategy-parameters)
  - [Pandas reporting with heatmaps](#pandas-reporting-with-heatmaps)
  - [Smart optimization to save computing time](#smart-optimization-to-save-computing-time)
  - [Challenge: Optimization with other datasets](#challenge-optimization-with-other-datasets)
- [**5. The Overfitting Problem in Backtesting**](#5-the-overfitting-problem-in-backtesting) (8 videos)
  - [Why machine learning models overfit the data](#why-machine-learning-models-overfit-the-data)
  - [How to train models within the backtest](#how-to-train-models-within-the-backtest)
  - [Challenge: Train test with other tickers](#challenge-train-test-with-other-tickers)
  - [Walk forward validation in machine learning](#walk-forward-validation-in-machine-learning)
  - [Anchored walk forward validation in backtesting](#anchored-walk-forward-validation-in-backtesting)
  - [Create library for backtesting strategies](#create-library-for-backtesting-strategies)
  - [Interpret reports from walk forward validation approaches](#interpret-reports-from-walk-forward-validation-approaches)
  - [Challenge: Walk forward with other tickers](#challenge-walk-forward-with-other-tickers)
- [**Conclusion**](#conclusion) (2 videos)
  - [Course summary](#course-summary)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Algorithmic trading using machine learning](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/algorithmic-trading-using-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/algorithmic-trading-using-machine-learning?u=76281980&t=0)** - [Instructor] [[Algorithmic Trading]] using machine learning techniques enables you to make data-driven trading decisions. Learn all about data, pre-processing, [[Feature Engineering]] and how to use powerful machine learning models. I'm going to walk you through hands-on exercises and give you practical insights that will enhance your trading strategies. You'll be able to optimize your strategies, understand back testing techniques and interpret performance reports with confidence. Want to elevate your trading skills and unlock the potential of machine learning? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithmic Trading]] (1), [[Feature Engineering]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Maximize your learning](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/maximize-your-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/maximize-your-learning?u=76281980&t=0)** - [Instructor] Thank you for choosing this learning journey with us. To maximize your learning experience and truly immerse yourself in this rich world of [[Python (Programming Language)|Python]] and finance here are some key steps you can take. Firstly, to access the materials needed for this course you open this link. You get into the [[GitHub]] repo to access the materials and over the green button, create a new code space which is the preferred platform and is optimized for your learning experience. It may take a while, so be patient and wait for the code space to be ready. Once you're here hover over the notebooks course folder where you will find around 10 notebooks with the 10 practical exercises that we will cover during this course. You may have wondered why these notebooks are titled A, B, C and D. Each letter signifies the type of notebook, A refers to the blank notebook that I use while showing you the tutorial on the video. The B notebook is the completed version of the A notebook and whenever you find a C notebook, is an empty notebook that we have left for you to work on a challenge. If you ever find yourself stuck on the problem you can go to the D.
>
> **[1:34](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/maximize-your-learning?u=76281980&t=94)** Where is the problem with a code solved. If you get a stuck while working on the challenge you may take a look on the D notebook where we have the challenge completed. I encourage you to delve into each notebook unpack the ideas, run the code and don't be afraid to get your hands dirty. The best way to learn is by doing. To maximize your learning. We first recommend to watch the tutorials. This will guide you and offer insights into the application of the concepts. Run the code on your own but remember to not get stuck on the results. The aim here is to learn, explore, and understand. Besides the Python code runs random processes which may end up in different results. Treat the challenges as an exam and do your best and force yourself to not look at the tutorials all the time to not look up the solutions as much as possible. Feel free to innovate. Try out different stocks, experiment with new machine learning models and let your imagination run wild. Never hesitate to ask any question, no matter how small. The only foolish question is the one that isn't asked. We are here to assist you on this journey. Remember, the purpose of this course is not just to teach but to inspire and ignite a passion for Python and finance within you. So buckle up and get ready for an exciting journey ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[GitHub]] (1)
> **CLI Commands:** python (3), find (3)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Stock Market Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Download and export data](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/download-and-export-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/download-and-export-data?u=76281980&t=0)** - [Instructor] In this tutorial, I will show you how to download and export data tables with [[Python (Programming Language)|Python]]. You may observe the [[Microsoft]] daily stock prices which we download by using the Yahoo Finance Library. So we import YFinance, we abbreviated as YF, and we access the function download. The first parameter they ask is tickers, therefore tickers equals to the code for the Microsoft stock. If we go to Yahoo Finance, we search for Microsoft and we see the ticker MSFT. We go to Python, MSFT, we execute. And there we have the historical daily prices for Microsoft. Let's save the data frame into a variable that we will call df_msft, and to make the code more legible, we will substitute a variable that we create up here, ticker equals MSFT. Now, if we would like to download any other ticket, such as the Bitcoin, we apply the same thinking process. Going to Yahoo Finance, looking for Bitcoin, we see the ticker is BTC_USD. So in the Python code BTC_USD, we execute,
>
> **[1:38](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/download-and-export-data?u=76281980&t=98)** and there we have the historical daily prices for the Bitcoin. One thing is to visualize the data in a table and another very different in a chart. We will use the Plotly library that makes interactive charts as the one that you see here, where you can select a date range and a specifically observe the information for a given day. We copy this snippet of code, we paste it in our Python, and now we need to adapt this code to our problem as we want to plot the Microsoft stock. The data frame that we are using is df_msft. Therefore, instead of reading a new CSV file, we just put our data frame. And now they are using the ticker in the names of the columns, but we don't have the name of the column, therefore we remove this. And one last modification is the date, which is not really a column because it's on another level of the data frame which is the index. Therefore the df.index. We don't need these two libraries. We execute. And here we can see the candlestick for the Microsoft data. The same process would apply for the Bitcoin that we can execute and see the variation
>
> **[3:12](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/download-and-export-data?u=76281980&t=192)** of the stock over time. Now, what if you would like to export the data into a CSV file or an [[Microsoft Excel|Excel]]? We can create a new folder. Let's find out in the following lines of code. We will drop the adjust close price to not confuse it with the close. And the first thing we need to do is create a folder called data. So we see the notebooks course we create a folder called data. And then with the data frame, df_MSFT, we access the functions with a dot. We look for a function name, Excel. There we have it, to Excel. And now we pass the name of the Excel. So within the folder data, we will call the Excel, Microsoft Stock Price Historical Daily, and the Excel format. We execute and then we see in the folder, we see the Excel. Now, if we would like to use a CSV, which occupies less memory, we apply the same thinking process. We look for CSV function, and there we have it. And now the name of the file, instead of being in format of an Excel, in the Excel format,
>
> **[4:44](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/download-and-export-data?u=76281980&t=284)** it should be on a CSV. We execute. And there we see the CSV file. Wrapping up everything step by step. First, let's do it with the Bitcoin. We define the ticker, we download the data frame, we create the file path, we create the file path with a ticker, then we export it into an Excel, and into a CSV. And there we see the two files. So with this snippet of code, you can access any stock data from Yahoo Finance and export it into an Excel or a CSV. Let's say that instead of Bitcoin you would like to put the Tesla. There you have it. Now let's move on to the following tutorial, where I will show you how to pre-process the data to calculate the columns that we will use to decide when to buy or sell the stock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (11), [[Microsoft]] (7), [[Python (Programming Language)|Python]] (4)
> **Env Vars:** csv (8), msft (3), btc_usd (2)
> **CLI Commands:** python (4), make (1), find (1)
> **Code Identifiers:** df_msft (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Filter rows and create columns for trading strategies](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=0)** - [Instructor] If we want to build an investment strategy, we need to calculate what will happen in the future. In our case, if the stock will go up or down based on the current data that we have for the stock on a given date. Where do we start in this tutorial? With the [[Microsoft]] daily stock price since 1986. We have the usual columns that we can expect from a stock data and we need to write the lines of codes that will take us to have this column. In the next chapter, we will create a machine learning model that will be able to predict this column based on these features. To make a case study more practical, we will focus on when Microsoft acquired [[LinkedIn]]. That was on December 8th, 2016 for $26.2 billion. Our dataset contains the information since 1986. To filter the rows, we need to locate the data frame. Now we separate between rows and columns. We want all of the columns, so we place a colon. And in the rows, we start from 2016, December 8th. And the [[Representational State Transfer (REST)|rest]] of the rows, we place a colon again. Now we execute, and we can see our data frame
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=97)** is starting from 2016. Since we are going to work with this data frame in the future, we will save it into a new variable, so df_microsoft_linkedin. Now to compute if the stock went up or down, first, we need to calculate the daily difference based on the close price. So we select the column, Close. To calculate the daily difference, in this field, we always talk about percentage change. Therefore, we will use the function pct_change(). To make it easy to understand, we will multiply by a hundred and here, we can see that the stock increased 1.5% from the 8th of December to the 9th of December. If we want to calculate what will happen tomorrow based on today's data, we should have this column back. To do so, we can tell the pct_change() to be done on -1. We've got a small problem because from the 8th to the 9th, the stock goes up. But as we have put the -1, it's calculating this backwards. So we can multiply again by -1, and now we have the daily percentage change
>
> **[3:11](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=191)** correctly computed. We save this into a new variable, so df_microsoft_linkedin, and we will call it change_tomorrow.
>
> **[3:27](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=207)** There is one small change we need to do in the data frame because we have got missing data because on the last day, we don't have any future day to calculate what will happen tomorrow. Therefore, we will drop this row, dropna(). Now, we don't see it. And we save it back into the variable. So df_microsoft_linkedn. And now we have the changes computed. Did the stock go up or down? If the number in change_tomorrow is positive, it means that the stock went up and otherwise it went down. To calculate this, we need to use the numpy library. Concretely, the where() function. We need to pass the condition that is the change_tomorrow is greater than zero, and if it's greater than zero, we put UP and otherwise, DOWN. Now we create a new column that we will call change_tomorrow_direction. And we can see it in the data frame in the last column. To see if there is a balance of ups and downs, we can make a value_counts(), and we can see that the stock went up 849 days whereas it went down 727.
>
> **[5:08](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=308)** If we want to create a plot to see how the stock behaved, we can access the column, Close, and now we can create a plot. And here we can see the variation across the days from 2016 until nowadays, and we have many variations where the stock goes up and down. In the next tutorial, we will work with this data frame to create a machine learning model that will calculate the change_tomorrow_direction based on these features. Therefore, we need to save this file into an [[Microsoft Excel|Excel]], and we will save it into the folder, data, and we will call it Microsoft_LinkedIn_Processed.
>
> **[6:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/filter-rows-and-create-columns-for-trading-strategies?u=76281980&t=360)** We execute, here, we can see the new file. So we are ready to go on the next tutorial to compute that machine learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Excel|Excel]] (1)
> **Code Identifiers:** change_tomorrow (3), df_microsoft_linkedin (2), pct_change (2), change_tomorrow_direction (2), df_microsoft_linkedn (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (2), in the last (1)
> **Versions:** 26.2 (1), 1.5 (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** down (1)
> **UI Navigation:** select the (1)


### 2. Backtesting with Classification Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Compute machine learning classification model](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=0)** - In our investment strategy, we'll use machine learning models to predict the future. Nevertheless, the models are not perfect, because some days we got it wrong. For the 14th of March, the price will go up tomorrow. Nevertheless, the machine learning model classified as down. In this tutorial, we'll show you how to create machine learning models with the secret learn library so that in the future you'll be able to create better machine learning models by applying the same reasoning. As always, we are start with the historical data and the data that we pre-processed in the previous tutorial. And the first question we need to ask when we are developing machine learning models is which variable do we want to predict? That is the change tomorrow direction. Therefore, we should save this column into a new variable that we will call it target, and then we need to choose which variables we will pass to the model so that we can predict the tomorrow's direction. Those are going to be open, highest, lowest, closed, and volume. So we can drop these two and take the [[Representational State Transfer (REST)|rest]]. Drop columns.
>
> **[1:28](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=88)** We execute. Now we can see these common columns. We save it as explanatory. Now it's time to compute the machine learning model. Where can we find the code of the machine learning [[Algorithms]] within the SK Learn library? We can see many options in this library, because there are many machine learning models, but we want the three models, concretely the decision tree. Here you can see classifier and regressor. Since the variable that we want to predict is a category up or down, we need to use classifiers. So we import the class, we create the instance for this class, and now we are ready to get inside the objects and find the function that will calculate the mathematical equation which is fit, and we can see in the documentation that they are asking for the X and the Y. The X is explanatory variables and the Y, the target variable. The variable that we want to predict. So X equals to explanatory, which are these columns, and the Y equals to the targets which is this column. We execute. We would have expected to have here a mathematical equation or a tree, but we get this output.
>
> **[3:02](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=182)** Don't worry, it's fine, we haven't gotten any error, so the mathematical equation of the machine learning model has been correctly computed. If we want to execute different operations with the machine learning model, we need to execute different functions. It's not necessary to get into the details. For example, we can visualize the model by executing the following lines of code. It will take some time, so be patient until we see the output. Here we can see this massive decision tree. In this chapter, we won't get into the details of how to interpret this visualization, so we stick to what we do so far and in future tutorials, we'll talk about this. To make the example easier to understand, let's shorten this three so we can apply max depth and we will set five levels on the tree. And here we can see the shorter tree. Now it's time to calculate the predictions. This is based on the explanatory columns. We will pass the information for each day and calculate what will happen in the price of the stock tomorrow. So we find the function in the same object that we computed the machine learning model, and if we had a function to compute the mathematical equation,
>
> **[4:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=275)** we will have another function to calculate the prediction. Within the function, we can see that they ask for the X parameter, the explanatory. We execute, and here we can see the predictions. We save it into a new variable, let's call it Y breadth, and now let's put the Y breadth into a data frame to see how it compares the prediction with the reality. We can observe that we have got all of them right in this case, but in the middle probably we'll have some misclassifications. So how can we evaluate the machine learning model? We get inside the change direction tomorrow, and we check is this equal every row to the prediction, here we see all of them true. In the middle we will have some falses, so we save the results in a variable and if we sum the rows, the truth will be taken as one and the falses as zero. So we get 900 rights from the total of elements that are 1500, and if we calculate the ratio, it will give us the accuracy of the model, which tells that our model got 59% of the days right.
>
> **[6:15](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=375)** Now I want you to reflect on one particular thing about machine learning models. We had a function to calculate the mathematical equation fit. We also had another function to calculate the predictions with that mathematical equation. Shouldn't be there a function to compare the predictions with the reality automatically? We have it and that is a score. Now this pattern that I have just shown you, it will be on any machine learning model of the secret learn library. So from this small example, you can apply it to any of the hundreds of machine learning model in the ticket learn library. Now to calculate the score, X equals to the explanatory and the Y equals to the target as they ask in the documentation. Now we execute and we get the same number that we had before calculated by hand. Now there is one more thing to reflect. We could improve the accuracy of the machine learning model that ideally should be above 80%. How can we make it? If we go to the three, we can see that is short. This three doesn't capture a lot of patterns within the data, but if we make the three larger, for example, 15 levels, it'll capture better the patterns within the data
>
> **[7:47](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-classification-model?u=76281980&t=467)** so that it can make better predictions. And here we can see that now we have 80% of accuracy. There are many more machine learning concepts to learn, but don't worry, we will explain all of them in the following chapter. Now in the following tutorial, we will use the mathematical equation that we have just computed. So how can we save this object within a file to use it in a different file for the following tutorial? We can create a pickle file that contains this object. Before, let's create a folder that will be called models. And now you will see it in this part of the screen. You see now the folder models, and to save with a pickle file, we will go to the models folder and name the file model DT classification. We pass the object where we have the mathematical equation, we execute, and in this file we have saved the mathematical equation. Now let's move on to the following tutorial where I will show you how to pass this machine learning model to an investment strategy for back testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (4), find (3)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - in (1)

#### [First configurations of the strategy class](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/first-configurations-of-the-strategy-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/first-configurations-of-the-strategy-class?u=76281980&t=0)** - [Instructor] In this tutorial we will use the machine learning model that we computed before to create an investment strategy that will be summarized in this table. You can see the returns of a 300000%. Now, which lines of code did we write to come up with this table? Let's find out. The first thing that we need to do is to load the model which is on the models folder, model_dt, classification pickle. The only difference that we have now is that we are reading the file. We are not writing the file as we did in the previous tutorial. Instead of using the function dump, we use the function load. We save the model in a variable model_dt and when we execute the variable, we can see the decision tree classifier we computed before. Now we load the dataset of the [[Microsoft]] stock and we need to think about how to implement the investment strategy. We will use the back testing later and the object that we will do the back testing report is backtest. We import it and if we go to the documentation of the file we can see that they ask for data and a strategy which is another class that we can find in the library. So how do we create our own strategy? We need to define a class for which we will use a name
>
> **[1:36](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/first-configurations-of-the-strategy-class?u=76281980&t=96)** that will be classificationUp and Down. The subclass that we create from a strategy must contain two fundamental functions, init and next. Within init, we define the initial objects that we will use in our investment strategy which is the model_dt. And within next, we need to write the lines of codes that will take the decision to sell or buy the stock. Since we will use the machine learning model, we need to get from the data frame the critical columns, which are open, high, low, close, and volume that we'll use to predict what will happen tomorrow. So we select them by dropping these two,
>
> **[2:38](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/first-configurations-of-the-strategy-class?u=76281980&t=158)** and we save it as df_explanatory. Now we can calculate the predictions with df_explanatory, but I get as many predictions as rows I have in the data frame. Nevertheless, the next function will take the observation that will be at the last day each time. So I need to locate the rows by the last position. I separate by rows and columns, I want to take all of the columns and the last row, and when I execute, I will get from the last day, as we can see here. Now the object needs to be in a data frame style not as this object, which is a series. So we'll use brackets here, and we get now the data frame object. It'll be the equivalent to explanatory_today, that we'll use to calculate the prediction. The prediction is returning an array. Nevertheless, I only want the unique value. So I get inside and I access the first element. And this is what we will call the forecast of tomorrow. We place these two lines within the class.
>
> **[4:22](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/first-configurations-of-the-strategy-class?u=76281980&t=262)** Before we continue with our investment strategy, I need to explain you in a different tutorial how to put the logic of the conditions to sell or buy the stock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Code Identifiers:** model_dt (3), df_explanatory (2), classificationup (1), explanatory_today (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Simulate the investment strategy step by step](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/simulate-the-investment-strategy-step-by-step?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/simulate-the-investment-strategy-step-by-step?u=76281980&t=0)** - [Instructor] In this data frame, we can see when the stock will go up or down. The logic goes like this. If we predict that the stock will go up, we will buy. And if we predict that the stock goes down, we will sell. To check these conditions, we need to access the values of the columns separately. So we create a forward loop for tomorrow direction and access the values individually, as we can see in these outputs, now to only show the values when the stock goes up, we will put the condition. If tomorrow direction is up, we print and now we see all of the values up. But if tomorrow direction is down, we will print tomorrow direction as well. And now we can see up and downs. Nevertheless, I want to see one or minus one whether we buy or sell the stock. So one and minus one. Now, since I want these values to be on a new column of the data frame, we need to create an empty list that accumulates the values. So instead of using the print, we'll append the values to the list.
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/simulate-the-investment-strategy-step-by-step?u=76281980&t=97)** So that we can see all of them in the buy sell list that we have here. Now I create a new column within the data frame that will be called "buy_sell".
>
> **[1:56](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/simulate-the-investment-strategy-step-by-step?u=76281980&t=116)** We show it next to the change tomorrow direction so that we can reason about the algorithm. On the 8th of December, the stock will go up on the ninth therefore we should buy the stock and the same will happen for the following day. Nevertheless, I shouldn't buy again the stock if I haven't yet sold the stock. So how can we take this into account? First, let's copy these cells of code and paste it down here. The first thing I need to do is create a flag to see if I have already bought the stock or not. Initially it's false because I haven't bought anything yet. And now if I predict that tomorrow will go up and already_bought is false I will buy the stock and therefore the flag already_bought will be changed to true. Now, when will I sell the stock? If tomorrow goes down and already_bought is equals to true and if I sell the stock the already_bought flag should be equal to false. And finally, in any other case
>
> **[3:30](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/simulate-the-investment-strategy-step-by-step?u=76281980&t=210)** we will append zero because we are not taking any action we execute these lines. We will call the new column, "buy_sell_track". We execute. And now let's see what will happen in this new column. The first day the stock goes up so we buy the stock, the following day it also goes up but we don't buy the stock because we have already bought the stock until the 13th when the stock will go down and then we sell the stock. The following day it also goes down. But as we haven't bought this stock, we cannot sell and the same conditions will apply for the [[Representational State Transfer (REST)|rest]] of the days. Now let's move on to the following tutorial where we will adapt these lines of code to the class that we created before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** already_bought (4), buy_sell (1), buy_sell_track (1)
> **Speakers:** - [instructor] (1)

#### [Run the backtest on the strategy](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/run-the-backtest-on-the-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/run-the-backtest-on-the-strategy?u=76281980&t=0)** - [Instructor] So far in the investment strategy, we have these lines of code and we need to add the conditions to sell or buy that we calculated previously in this part of the notebook. So we copy them and we bring it here. I don't need the for loop because this time the next function will do the direction for us. What we call before tomorrow_direction is what we have forecast tomorrow which is the prediction of our machine learning model. And the flag to see if we already bought the stock or not should be accessible through an initial element of the class. By default is false. And we need to access this element from self. In the for loop we were appending the elements to an empty list, but now we need to take action with a function within the class strategy to buy or sell the stock. Here we buy the stock because it will go up. So self.buy, we don't need the list. And instead of having the list -1, we will put self.sell. And in any other case we'll just pass,
>
> **[1:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/run-the-backtest-on-the-strategy?u=76281980&t=95)** in other words, we won't take any action. We finally execute, we have already our class of the investment strategy that we will use in the Backtest class to run the backtesting report. If we go to the documentation the first parameter is asking for a dataframe. If we go down, it will tell us that we need columns such as open, high, low, close, and optionally the volume. We have those columns on df_explanatory. So data = to df_explanatory. Before moving on to the following parameter, we need to change the algorithm because we have the global variable, df_explanatory and not the initialized variable data that we access from self. Now, the following parameter is the strategy that we previously created in this class. And finally we pass the cash parameter to be $10,000 which is the initial amount of our investment. We instantiate the Backtest class into the variable bt to later access the function run that executes the backtest in our investment strategy.
>
> **[3:15](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/run-the-backtest-on-the-strategy?u=76281980&t=195)** We can see the results in this output, but we better save them into a variable, let's call it results, and show it into a data frame with this line of code. And show it in a data frame With this line of code. We observed that the return is quite good, is over 300000%. The return is so high because the model already knew what happened with the [[Microsoft]] stock from 2017 until nowadays. And we are backtesting the strategy on the same period of time. But don't worry about this just yet, we will uncover the problem and the solution later in this course. Right now, you need to master the skills that we have explained in this chapter. We have prepared a challenge for you to complete, in the following video I will explain the mental models you should apply to solve the challenge faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Code Identifiers:** df_explanatory (3), tomorrow_direction (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Backtest with other tickers](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-backtest-with-other-tickers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-backtest-with-other-tickers?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-backtest-with-other-tickers?u=76281980&t=5)** - [Instructor] In this challenge, you will apply the concepts acquired so far by creating a backtest on another data set. And finally, reproducing the report of the backtest with the dashboard that you see to the right, which simulates the investment strategy. Before getting to it, I would like to tell you some tricks about how to develop this exercise without copy, pasting. The titles of the exercises contain the names of the functions that you need to use. For example, we import the Yahoo Finance. We get inside the library, and then within the dot, we start typing download, because it's the keyword of the title that I am asking. So we write download, and then look at the documentation, because it will tell you what you need to put inside the parenthesis. The first thing they ask is the tickers, which is the code for the stock. That, if we look for Netflix, we see that the code is here, the ticker. So we copy it and then, within the function, we paste it. We execute, and there we have the data frame from the Netflix stock over time. And there we have the data frame of the Netflix stock, that represents the information of the daily prices. We save it into a variable, "df." And apply the same thinking process for the [[Representational State Transfer (REST)|rest]] of the exercises.
>
> **[1:39](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-backtest-with-other-tickers?u=76281980&t=99)** If I tell you here percentage change, you get inside the data frame, you look for change, and there you have the name of the function. Then for drop, you would look up df dot drop. Then moving on to computing the machine learning model, I tell you the Random Forest within ensemble from sklearn. So, from sklearn dot ensemble and then you import the Random Forest. By the time that you want to compute the strategy, you apply the same thinking process. From back testing, import the strategy and you have it there. You show the report in a data frame, and finally you plot the back test report. Remember that if I tell you the name "Plot," it's probably because the function you need is called "Plot." By the time you want to put something inside the parenthesis, first look at the documentation and you will see that you can put a file name. So file name equals backtest report, for example. Remember to put [[HTML]], because that's the format of the report. And then if you go down, you have the file, backtest report, you open with live server. And you will see this nice dashboard, that simulates the investment strategy that you would have created. After producing this report, we have prepared
>
> **[3:13](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-backtest-with-other-tickers?u=76281980&t=193)** the following chapter, where we will tell you how to create investment strategies that take into account, not if the stock will go up or down, but the numerical increase. But now it's time to focus on this challenge and complete it as best as you possibly can, without copy, pasting. And if you have any doubt, let me know in the comments. And I will do my best, to give you an answer that will help you solve these problems faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[HTML]] (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)
> **Env Vars:** html (1)
> **Definitions:** is called (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 3. Backtesting with Regression Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Compute machine learning regression model](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980&t=0)** - [Instructor] The previous investment strategy took into account a classification model that calculated the direction of the stock, the categories up and down. But we are missing good characteristics on the prediction because the continuous prediction will give us the amount of percentage increase, which may give us better clues about whether to invest or not. In this tutorial, I will show you the differences between classification and regression models and develop the regression model for our investment strategy. So we load the datasets. We separate the variables in Target and Explanatory. This time, we are using the change_tomorrow, the numerical variable, instead of the categorical variable. We execute. We create the machine learning model from the SK Learn library within the three module deficient tree regressor. Because this time, we want to calculate a numerical variable. As always, we create the instance deficient tree regressor, and now we access the function to compute the mathematical equation. X, explanatory, Y the target. We execute, the mathematical equation has been computed.
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980&t=97)** We can visualize the machine learning model with these lines of codes. It will take a lot of time because the tree is very big.
>
> **[1:51](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980&t=111)** To make a shorter tree, we can limit the max depth to be 15, as previously.
>
> **[2:01](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980&t=121)** Now we pass the explanatory variables to the machine learning model so that we can calculate the predictions. We save the predictions in a new variable, y_pred, and create a data frame to see how they change. We can observe how the predictions defer from the reality in a higher or lower degree. To have the metric on how good is the model, we need to calculate the score. So model_dt score explanatory, and the target.
>
> **[2:46](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/compute-machine-learning-regression-model?u=76281980&t=166)** We get 54%, which tells us that our model is able to capture 54% of the target's variability.

> [!info]- Semantic Content
>
> **Code Identifiers:** change_tomorrow (1), y_pred (1), model_dt (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [How to evaluate regression models](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-evaluate-regression-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-evaluate-regression-models?u=76281980&t=0)** - [Instructor] We continue with the data frame where we left off in the previous tutorial to explain you how to interpret the error of a regression model. Forget about mathematical formulas during this explanation and think about a rough way to calculate the difference between the predictions of the model and the reality. We would take this column and we would simply calculate the difference with the other column. This is what we call the error. So we will create a new column for the error, to evaluate the model. We don't need the error of each day. We need to aggregate all of the errors. The rough way to do this is to calculate the sum of the error. Nevertheless, we get some number elevated to minus 15 which is practically zero. This happens because we have got errors above zero and below zero. How can we solve this issue? We could take the error and do the absolute value or the squared value. Now all of the numbers are positive. This is what we normally call the squared error.
>
> **[1:33](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-evaluate-regression-models?u=76281980&t=93)** Now, we can easily aggregate the errors by calculating the sum and this is what we call the sum of squared errors. Nevertheless the best metric is to calculate the mean squared error. So we calculate the mean and we put it into a variable. We need to counter attack the effect of squaring the error by calculating the root square. We import numpy and now np.sqrt, and we get 1.2. We save this value as the root mean squared error and we calculate the histogram for the errors to better interpret this number.
>
> **[2:40](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-evaluate-regression-models?u=76281980&t=160)** The histogram of the error follows a normal distribution where the majority of the errors fall around zero. And the typical difference from the error is the root mean squared error which could be interpreted as the standard deviation because for any prediction, we subtract the reality. We calculate the sum of the squares divided by the total which is the mean value of the squared errors and we finally calculate the root. So we can associate the standard deviation with 1.2. And taking a look at the normal distribution chart we have minus one standard deviation and one standard deviation that falls within a range of 68% which is the addition of 34 and 34%. This means that for any prediction our models do 68% of them will fall within a range of 1.2% and minus 1.2% of the increase of the stock tomorrow. If instead of calculating one standard deviation we do two standard deviations, we have 2.4% which would make up to the 95%, as we are giving intervals. This is what we normally know as the confidence interval
>
> **[4:17](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-evaluate-regression-models?u=76281980&t=257)** and this is how you measure the error of the regression models. In the following tutorial. We will put this model to work in our back testing process so we need to save it into a file that we will call within the models folder that we have here. We will name it as model_dt_regression.pkl as a PKL file. We execute here, we have the model, and now let's move on to the following video to develop an investment strategy based on the regression model.

> [!info]- Semantic Content
>
> **Versions:** 1.2 (4), 2.4 (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** model_dt_regression (1)
> **Env Vars:** pkl (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Configure and run the backtest with the regression model](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/configure-and-run-the-backtest-with-the-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/configure-and-run-the-backtest-with-the-regression-model?u=76281980&t=0)** - [Instructor] So far, we have developed an investment strategy with a machine learning model that classifies whether the stock will go up or down and we saw the returns of that algorithm. Now we will work with an investment strategy with regression models where we will predict the numerical increase of the stock for tomorrow. Now, let's explain the lines of code to develop this table. The first thing that we need to do is to load the regression model we saved previously. We can see the efficient tree regressor and the dataset. We import the backtesting library to define our investment strategy. We can copy paste the code we developed in the classification strategy. We paste it here. We'll call it regression. Now we need to adapt this code to a regression problem because our forecast from the prediction won't be up or down. It will be a numerical column. Therefore, instead of using equals to up, we can establish a superior threshold. For example, if it goes above a 5% increase, we will buy and if it goes down minus 5% increase, we will sell. We execute to define the class. We create the DF explanatory that we need to pass
>
> **[1:34](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/configure-and-run-the-backtest-with-the-regression-model?u=76281980&t=94)** to the back test class. We instantiate into a variable. We run the back test with this new investment strategy and we can see the results.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [How to interpret the backtesting dashboard](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980&t=0)** - [Instructor] How has our investment strategy performed over time? We can see this dashboard from December 16 when [[Microsoft]] acquired [[LinkedIn]], until nowadays, 14th of March. We have four charts, the equity, the profit and loss, the trades and the volume. The strategy made 17 trades, operations or transactions, as you may understand it better. To understand the details of the operations, let's click on the [[Zoom]] button and go to this first periods. In the profit loss chart, we have these two markers and the first one tells us size 153 trades, with an increase of 58% from the date that they were bought around mid June. Now, if we zoom on this area, we will see two operations. We will see the details of the next operation because we short the stock. In other words, we sold 153 shares to later buy them on the 25th of October and earn 1.5% on the equity. We see that this is a short operation because the symbol is down. We may observe that before, when we bought the stock
>
> **[1:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980&t=95)** to sell later, that the market is up. Now we reset the dashboard and getting to the middle of these operations.
>
> **[1:51](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980&t=111)** If we go at the beginning of the equity, we start on a 100%, and as we haven't taken any decision, we remain on a 100%, and then when we buy the shares, we start going up, and because all of the operations accumulate the value, we are increasing the equity over time by huge margins until we finally get at the end of the period to 548%, resulting on a return of 448% that we saw in the previous table. The peak of the strategy was reached at this point, 19th of November with 610% of equity. Then the max draw down was reached at this day. Then the max draw down, which is minus 31.3%, was reached at this point because it's the biggest fall from a peak that we can see going down. As we can see in this area where we had a peak and then we fall until this bottom. Then the max draw down duration was 481 days that we can observe in this period because we reached a peak, but we couldn't get back to that point in the following days.
>
> **[3:24](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980&t=204)** In the profit loss chart, we may observe the maximum up and downs that we have had on the profit reaching almost 60%, and the losses reaching around minus 10%, and this is how you can interpret this dashboard and all of the concepts that we have. If we would like to show the dashboard of the classification based strategy, we can go to the notebook and drag all of the lines of codes.
>
> **[4:02](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-interpret-the-backtesting-dashboard?u=76281980&t=242)** Until we create the back testing reports that we will call classification.[[HTML]] and we will save it on the folder report back testing. We open the live server, and we may observe how we had more activity based on the classification machine learning model than the regression model. Which is normal because we made transactions based on whether the stock will go up or down. Whereas on the regression, we buy the stock if it goes above 1% or below, and we sell if it goes below minus 5%. The maximum profits that we have on the classification is 25%, the minimum is minus 10%, but we reach an equity of almost 400000%. Is there a way that we can improve the regression strategy with the code such that we get a higher equity? Yes, if you remember in the notebook, we change the limits that we had on above one or below minus five, we may change for any other numbers in these two parameters and the equity will change. Nevertheless, we won't change them one by one. Instead, we will use the optimized function of the back testing library that I will explain on the following tutorial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Microsoft]] (1), [[LinkedIn]] (1), [[HTML]] (1)
> **UI Navigation:** go to (2), click on (1), open the (1)
> **Versions:** 1.5 (1), 31.3 (1)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** classification.html (1)
> **Speakers:** - [instructor] (1)


### 4. Backtesting Optimization

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimizing strategy parameters](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/optimizing-strategy-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/optimizing-strategy-parameters?u=76281980&t=0)** - [Instructor] In previous tutorials, we used the regression model within the investment strategy. As the regression model forecasts a numerical value, we need to set the limit above which when to buy the stock, or below the limit, when to sell the stock. We chose one and minus five respectively. But we could have written any value in this line of code. Instead of using random numbers, we should try a lot of them at once and optimize the results, to have the maximum returns. In the right table, you can see how we tried from zero to minus 10 in the limit sell, and from zero to 10 in the limit buy. From which we can clearly see that the best combination is limit buy zero and limit sell minus one. So now it's time to uncover the lines of code that will get us to this nice table. Now the big question is, which are the lines of code that will optimize the backtesting strategy to get this nice table? Let's go with them, step by step. We load the machine learning model, the data sets. We run the same investment strategy we perform in the previous tutorial. We can see the results, where the return gives us 448%. And now it's time to think about how we should change the class, so that we
>
> **[1:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/optimizing-strategy-parameters?u=76281980&t=95)** can optimize different limits at once. Any new parameter that we want to create within the investment strategy should go right below the declaration of the class. Here we can put one number for the limit to buy. That is one. And now we should put instead of one here, self, because we are accessing to an attribute of the class, dot limit by. And we do the same for limit sell. So we put minus five limit sell. And below we change it to self dot limit sell. We run the cell of code, we created the df, explanatory, the backtest class. And now it's time to think which is the function that will allow us to try many different numbers in the limit buy and limit sell? If we look inside the backtest class, we will find a function called "optimize." And the first parameters of the function is this (indistinct). And the first parameter that the function is asking for is this (indistinct), which are the parameters that we created within the class, limit sell and limit buy. As we want to try different numbers, we will create two lists, one for limits buy
>
> **[3:10](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/optimizing-strategy-parameters?u=76281980&t=190)** and another for limits sell. And we pass it to the function respectively, limit buy, the lists of limits buy and limit sell the list of limits sell. Now the other interesting parameter of the function is maximize, because we can maximize any of the values that we can see in these left side. Such as Equity Final, the Return, the Annual Return. In our case, we will use the Return, so we copy and paste here, without the value. And we execute the optimize function. It will take a while, because it's running the different configurations that we gave on the list buy and the list sell, during all the time that we passed on the data frame. Now that the computer have finished, after three minutes, let's find out about the results that we have gotten. If we bring them here, we observe that [[Python (Programming Language)|Python]] returns many objects. Because we see a parenthesis here, which is an object that contains many others inside. So if we look at the first one, we get this result. If we look at the second one in this output, we can see the different returns that we get after trying the different configurations of limit buy and limit sell. In the following tutorial, I will show you a way to display this information in a nice table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Pandas reporting with heatmaps](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/pandas-reporting-with-heatmaps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/pandas-reporting-with-heatmaps?u=76281980&t=0)** - [Instructor] In the previous tutorial, we calculated the returns for each combination of limit buy and limit sell that we had on the investment strategy. To better interpret these results we will process these objects and turn it into a data frame. With the function reset_index, we save it into a variable and we will make it pivot
>
> **[0:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/pandas-reporting-with-heatmaps?u=76281980&t=37)** so that we can see all the results with this layout, now we save it back into a variable.
>
> **[0:48](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/pandas-reporting-with-heatmaps?u=76281980&t=48)** We would like the columns to start from zero to minus 10 so we need to sort the index by the columns. That's why we put axis y in ascending false. Now, we will style the data frame to represent the information without decimals and to create a heat map with the function background_gradient. The cells of the data frame are color based on each column's minimum and maximum values but we would like the cells to be darker based on the overall maximum value. Therefore, we use the parameters vmin, DFF values minimum and then Vmax equals to DFF values max and we can clearly observe that the best combination is limit buy zero. and limit sell minus one. If we look at the overall results, we see some tendencies within the combinations of limit buy and limit sell. One question we could ask ourselves is is there a way to use the optimized function so that it avoids the values of limit buy and limit sell that gets lower results? Of course there is, because this is programming and anything that can be automated, it's possible. Let me show you in the following video.

> [!info]- Semantic Content
>
> **Code Identifiers:** reset_index (1), background_gradient (1)
> **Env Vars:** dff (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Smart optimization to save computing time](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/smart-optimization-to-save-computing-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/smart-optimization-to-save-computing-time?u=76281980&t=0)** - [Instructor] In the previous tutorial we performed the grid search optimization where some of the values of limit buy and limit sell were constrained to have bad results. To save computing time, we could perform a smart search where we strategically select the limit sell and limit buy that gives the best results based on numerical methods. Without further ado, let's uncover the lines of code that will get us to the smart search. We first load the machine learning model then we load the dataset we run the cells to create the back testing class to create the strategy class that we also did in the previous tutorial, the back testing and now the important part optimizing the back testing with multiple combinations. In this case, we establish the limit buy from zero to 10 limit sell from minus 10 to zero to maximize the returns. To perform the smart search we need to set a specific method. If we look at the documentation of the function we see here the method that by default is grid and if we go down below, they show the meaning of grid and a sculpt, which could be the smart search. We change the default value of methods to a sculpt and before executing we need to run these two lines of code.
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/smart-optimization-to-save-computing-time?u=76281980&t=97)** Otherwise, we will get an error, so we execute. We wait for a bit until the optimization has been computed. After 40 seconds, we get the results and we will work with the heat map that contains the values that we see here and we apply the pre-processing to clean the data and show this nice data frame to later apply the colors and because we have some missing values we'll use highlight null with a background transparent as you can see in this table and then we'll go over the data. We can corroborate that the algorithm has performed in a smart search because it hasn't tried many of the combinations that we told were limit buy and limited sell, and finally found a return which is optimal in this case over 10,000% which processes has been way faster than the one we saw in the previous tutorial with the grid search. If we would like to dig deeper on this method you may check this article where they explain it in detail. I'll give you an overview. The following chart is plotting the evaluations of the algorithm. You can see the dots, which are the combinations of all possible numbers on limit sell and limit buy and there is a red star in the corner showing the point 00
>
> **[3:13](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/smart-optimization-to-save-computing-time?u=76281980&t=193)** which is the optimal number that the algorithm found. Then if you see these historians are the number of samples that has been randomly selected on limit buy and limit sell, then we can plot the density with these lines of code where we see a heat map of the algorithm convergence towards the optimal value in the clearer area where it finally finds the optimal point on the red star. This picture gives us an indication of which values limit sell and limit buy will be likely to give you higher returns. Everything looks pretty clear when watching the tutorials. Nevertheless, you need to put in the practice. We have prepared a challenge to apply the concepts covered in this chapter. In the following video I will tell you the mental model that you should apply to master the knowledge that we have covered in this tutorial.

> [!info]- Semantic Content
>
> **Documentation:** the documentation (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Optimization with other datasets](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-optimization-with-other-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-optimization-with-other-datasets?u=76281980&t=5)** - [Instructor] In this challenge, optimization on other datasets, we will apply the concepts learned in this chapter, back test optimization. We'll download the data from Yahoo Finance. In this case, I propose the [[Zoom]] stock, but you're free to use whichever you want. At the end of this challenge, you should have optimized your strategy to learn which are the best parameters on limit sell and limit buy so that you get the best results, as in this case, is zero limit buy and zero limit sell. Now let me give you some advices to develop this exercise as smooth as possible. So first, you filter the data, which I have already put the code because it's the same that we covered previously. To compute the machine learning model, you still need to practice with the hint I gave you in the previous challenge. And then by the time you create the strategy class, remember that you first need to import from back testing the strategy class. And then the structure of the strategy is you create the class to which you can put whichever name you want, in this case, regression. It inherits the strategy and then it follows this structural functions def init. Inherits the self, also def next. Within the init, you should define the model that you previously compute.
>
> **[1:40](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-optimization-with-other-datasets?u=76281980&t=100)** Within next, you need to prepare the data like the explanatory variables. So serve data df, but you shouldn't take all of the columns, just the last one because you're going to make the decision about the last observation. So minus one, and then you take all of the columns. Later, you need to calculate the prediction with the model you defined previously. So, self model predict with the explanatory variable. And then you should define the conditions when to buy the stock. You put self buy. And what will happen if you need to sell the stock. And so far you should know which lines of code you need to. And because you have made the lines of code needed to complete this class, you should develop it with the concepts learned on the previous tutorials. Then you create the back test class, you run the back test optimization, you find out which are the best numbers for the limit sell and limit buy parameters that these parameters remember that should be defined just below the regression because they will be optimized. So limit sell equals to some number at the beginning and limit buy, the same. And once you complete these exercises, you plot these charts that shows the journey of the optimization to find
>
> **[3:15](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-optimization-with-other-datasets?u=76281980&t=195)** the best numbers for the parameters. Once you finish this challenge, get ready for the following one where we will explain to you the overfeeding problem in back testing. Meanwhile, if you have any doubt, let me know in the comments and I will do my best to solve your questions and give you some advices on how to apply the best mental models to solve these exercises as smooth as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 5. The Overfitting Problem in Backtesting

[↑ Back to Table of Contents](#table-of-contents)

#### [Why machine learning models overfit the data](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980&t=0)** - [Instructor] Imagine that today is the 20th of May, 2021. We know what happened with the stock of [[Microsoft]] when it acquired [[LinkedIn]] in 2016 until today. We already know how the investment strategy performs, which gives us a return of over 500%. And now, we would like to apply this investment strategy in the future until the 15th of March, 2023. We would've thought that the returns we'd expect is 500% or proportional to the times that we have, but we end up getting 10%, which is way lower than could have been expected. Why is this happening? Well, the machine learning model that predicts what will happen tomorrow was trained from 2016 until 2021. If we evaluate the model in the same period of time, they already know what happens. So it's likely that they will have a better performance than in the future whose data is unknown for the model. And that's why we get poorly results. In conclusion, every time that you are evaluating, your investment strategy needs to be with data out of the sample where the machine learning model was trained. To learn the procedure, let me explain it to you with the [[Python (Programming Language)|Python]] code. First, we load the dataset between 2016 and 2023. Now,
>
> **[1:36](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980&t=96)** we separate the data between target and explanatory and perform the train test split for which we need to calculate the number of days, one and a half thousand. And we will split it in 70% for the training and 30% for the test. With these lines of code, we tell that within the explanatory variable we want to get until the number of days split; the 70%, 1103 days. And in the test set, we will go from that day until the [[Representational State Transfer (REST)|rest]] of the rows. So we execute. And now, in the train, we can see from 2016 until 2021.
>
> **[2:27](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980&t=147)** And in the test sets, we can see from 2021 until 2023.
>
> **[2:36](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980&t=156)** Now, we train the mathematical equation on the training set as you can see the code on the fit. And we should evaluate how good is the model? To do so, we need to import from sklearn within the metrics module, the function mean_squared_error. If we use it and we look at the documentation, we can see that they ask for y_true and y_pred. Y_true is the real data; in our case, the test set of the target variable, the y. And y_pred needs to be calculated with the mathematical equation trained on the training sets, but this time we will predict it on the test sets, x_text. We save the predictions in y_pred. And now, we give it to the function. We get a mean_squared_error of almost $10; whereas on the training sets we get 0.73. And as we explained before, the training set is invalid because the model already knew the data when it was fitted. So we should always pay attention to the evaluation of the model on the test set. Let me change the variable, y_pred test. And here as well to have the variables legible.
>
> **[4:10](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/why-machine-learning-models-overfit-the-data?u=76281980&t=250)** And now, the big question is, how good these models have performed within the investment strategy? I will show it to you in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** y_pred (4), mean_squared_error (2), y_true (1), x_text (1)
> **CLI Commands:** python (1)
> **Versions:** 0.73 (1)
> **Documentation:** the documentation (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [How to train models within the backtest](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-train-models-within-the-backtest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-train-models-within-the-backtest?u=76281980&t=0)** - [Instructor] To create a back test report from an investment strategy where we train the model within the strategy and evaluate on another dataset, we need to modify the init function of the strategy class. The first thing is to declare the decision tree regressor with the max depth of 15 and the random state to be 42, as before. And now we should train the model with self model fit. We need to pass X equals to the X train and Y equals to the Y train. We execute to create the strategies and now at the time to run the back test on a dataset that we need to choose now. And we will choose the X test where we have the required data frame for the back test class. Therefore X test, we set the limit by one, limit cell minus five, with the following lines of code. We get the results, select until the return percentage, change the name of the column, and here we have the report. We do the same on the training back test. Instead of using X test, we use X train. And here we see the results where the return is 529%, way higher than on the test set where we had just 10%.
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/how-to-train-models-within-the-backtest?u=76281980&t=97)** We would've liked the returns of the training set, but remember that this is a false assumption because we want investment strategies that are good in data that was unknown for the model at the time of training the mathematical equation. If you would like to see both of these tables in the same data frame, we use the function concat with a list that contains both of the data frames, and here we can see a nicer picture of the two back tests that we have run before. Now that you understand that back testing on the same data that the model used for training is a misleading conclusion because obviously we won't get a 500% return. Every time we should run the back test out of the sample data where we will achieve a reasonable return, in this case 10%. Now it's time to practice to master the knowledge that I have presented to you in this tutorial. So follow me on the following video where I will show you the mental models to solve this challenge faster.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Train test with other tickers](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-train-test-with-other-tickers?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-train-test-with-other-tickers?u=76281980&t=5)** - [Instructor] In this new challenge, you will learn why we should always run the backtest on data not seen by the model. Otherwise, we would incur in the problem of over fitting. At the end of the challenge, you will produce these plots one for the training set and the other for the test set to interpret which are the differences between these two sets on the backtest, and which are the implications. But before getting to these plots we should run these lines of code. In this case, we are working with the META stock. We run these lines to filter the dates, create the new target column, drop the missing data and then in the machine learning section we should select the target and explanatory variables. And by the time we want to train, test and split the data. We should think that all of the machine learning [[Algorithms]] are within sklearn. So from sklearn. and because this is an algorithm to select the best possible model this is within the model_selection. And then you play around with the title and probably the function will be named something like train_test_split. And once that you execute to import the function if you try to use it, you will have the documentation in the sidebar and you will see an example down below. That you could copy, paste, and implement in your code.
>
> **[1:45](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-train-test-with-other-tickers?u=76281980&t=105)** After that, you should fit the model on the training set and then evaluate how good is the model first on the test set and then on the training set. One thing is to evaluate how good is the model with respect to the data. But the other thing is how to evaluate the model within the backtesting strategy that we previously defined. In this case, the most notable difference with respect to other tutorials is that we declare the model within the init function of the strategy. We should split the data in this part of the code and then calculate the predictions in the next function to tell when to buy or sell the stock. Then once the class is created, you run the backtest on the test dataset and then on the training dataset. You compare both of them first on a single data frame and then you plot the backtest reports that I had shown to you previously. If you have any doubt, let me know in the comments of the video and I will do my best to give you an answer with mental models to learn these concepts better. Meanwhile, I'll wait for you on the next tutorial where I will show you the work forward validation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **UI Navigation:** select the (2), in the sidebar (1)
> **Code Identifiers:** model_selection (1), train_test_split (1)
> **Env Vars:** meta (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Walk forward validation in machine learning](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=0)** - [Instructor] Let's imagine for a second that we have a data set whose rows start at the beginning of 2016 and they finish at the end of 2022, which are the different [[Algorithms]] that we can use to evaluate our investment strategy? In previous tutorials we covered the train test split where we choose a splitting point to separate the data between the training set, the blue area, and the test set, the yellow area, based on all the time range. In this tutorial we are introducing the walk-forward validation, both anchored and unanchored. The walk-forward divides the data in a specific number of splits. In this example is five, and you can see that for the anchored walk-forward the first split we separate the data at the end of 2017 and take 2018 as the validation set to evaluate our investment strategy. As you may observe we get an error of 9.4, and in the third split to validate for 2020 we get 33 as the error, which is very high compared to the train test split. Nevertheless, the walk-forward validation is a better approach because it's more realistic. It is validating your strategy across different time ranges instead of just splitting the data at one particular time with only one split. Also, at other years, such as 2021 and 2022, the walk-forward validation performs better than the [[Representational State Transfer (REST)|rest]].
>
> **[1:38](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=98)** We could make more adjustment to the investment strategy to control for the years where the model doesn't perform quite as well. But in this tutorial I want to show you a new approach to validate your investment strategy, so let's focus on uncovering the lines of [[Python (Programming Language)|Python]] code that we need to develop both the anchored walk-forward validation and the unanchored walk-forward validation. Once we have the data set loaded with these lines of code how can we divide these rows into five splits? We use the walk-forward validation, we use the time series split from sklearn. Let's import it from sklearn. Dot, this is a model selection technique, import time series split. The first step is to instantiate the class, ts equals time series split. And if we look at the documentation of the function they ask for the number of splits, five. We leave the default value, the max train size, and the test size. For the test size we will set 200 days. Now we use the function split to which we need to pass the x, which is an array of the data, so equals df. We execute and we get a generator. To understand what the split function returns I will use a Python trick that you don't need to learn. We save the result into a variable, let's call it splits.
>
> **[3:15](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=195)** And now for the split1, next splits. If we take a look at split1 we get these outputs, we open it in a text editor, let's put it below and the image here. The first split returns an array, and if we go down another array. Which are these two arrays? If we look at the image, the first split goes from 2016 until 2017, and we get the test data for the following 200 days. According to the code we wrote we set the test size to 200 days. Therefore, in the second array we have 200 days for the test set, which related to the example is the yellow area for 2018 in the first split. And the first array is the blue area, the data from 2016 until 2017. For the first array we start on the day zero, and we finish the training sets in the day 575. We start the test set on the following day until the 775. Now, what would happen if we go to the second split? We use a split2, we execute again.
>
> **[4:50](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=290)** Now we see the outputs. We move it to the downside of the screen, put the image above, and now let's compare both of them. The first split to the left and the second split to the right, they both start at day zero. In the first split it finishes at 575, but the second split finishes at 775, which is the last day of the previous test set. So, we are advancing 200 days for every split that we perform on the data. And this is how the anchored walk-forward validation is developed with the Python code. If we would have chosen the unanchored walk-forward in the training set of the second split we wouldn't have the days starting from the zero but from 200. We will explain it later. Now let's focus on develop the machine learning model to evaluate the errors across each split. Now, if we develop the Python code to create the data sets in the for loop we can see that we are taking the df iloc with the index train, which is the first element of the array, and the index test, which is the second element of the array. If we execute the for loop
>
> **[6:23](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=383)** and now we take a look at the df train we see here the 576 days. And for the test set we see the 200 days. If we go to the second split we observe in the train 776. We are adding 200 days to the training set from the previous split, but we continue with 200 days on the test set. Once we understand how to split the data with the Python code we need to add the machine learning model within the for loop. So, first, we separate the data between the target and the explanatory variables, and now develop the machine learning computation where we import the objects, we declare the class, then compute the mathematical equation, calculate the predictions on the test set, and calculate the error with the mean squared error between the target variable of the test set and the predictions. If we execute we get an error of 5.3, but we need to get five different splits of the data. So, we add these lines of code within the for loop. Here we declare the machine learning model, we start with the for loop. In the first split we train the model, we calculate the predictions, evaluate the error on the test set, and aggregate those errors into the empty list we had created before the loop.
>
> **[7:58](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/walk-forward-validation-in-machine-learning?u=76281980&t=478)** We execute these lines of codes, we get the errors, this many, the same that we saw on the illustration. And to evaluate the overall error of the machine learning model we compute the average, which is $13.38. Now that we understand the Python code to implement the walk-forward validation with a machine learning model, it is time to learn how to introduce the walk-forward evaluation within the back testing, which I will explain in the following tutorial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (6), make (1)
> **Versions:** 9.4 (1), 5.3 (1), 13.38 (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **Analogies:** imagine (1), such as (1)
> **Cross-References:** we covered (1)
> **Documentation:** the documentation (1)

#### [Anchored walk forward validation in backtesting](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/anchored-walk-forward-validation-in-backtesting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/anchored-walk-forward-validation-in-backtesting?u=76281980&t=0)** - [Instructor] To use the anchored walk forward validation in the backtesting strategy, we need to pre-process the data within the strategy class. First, we pre-process the training set whose data is taken from the backtest class. Therefore, self.data DF iloc to locate by the position from the very first day until let's say 600 days. And because this is the explanatory variable, I want all of the columns, but the last one. Remember that we take the data from DF. With this part of the code we are telling to take all of these columns. Now for the Y train, we do the same, but this time we select the last column. So far, we are only training the model on the first 600 days but we need to take action whether to buy or sell the stock. Even though we have those steps in these lines of code, they don't contain the anchored walk forward procedure. To do so, we need to create a new class, which I named walk forward anchored, and very important, inherits the regression, which is the strategy that we previously defined. Now, the strategy that will go on the second parameter of the backtest is not the regression strategy, but the walk forward anchored strategy.
>
> **[1:37](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/anchored-walk-forward-validation-in-backtesting?u=76281980&t=97)** What will we happen in the backtest if we pass the walk forward anchored? Let's explain it step by step. The class only contains the next function. Nevertheless, it's inheriting the regression class, which is initializing the backtest by training the model with the first 600 days. And once this object have been initialized, the walk forward backtest starts. The first condition is the length of the data is less than 600 days. If it is, we don't take any action. We return nothing because for the first 600 days we have trained the model. And once that we overcome the 600 days, we start with this condition. We ask the following condition, is the length of the data divisible by 200? This means that we will only retrain the model each 200 days. In other words, for the 800th, the 1000, and so on. The [[Representational State Transfer (REST)|rest]] of the days, we'll call the next function from the super class, which is the one that will inherited the regression. And we will proceed with the same logic we have uncovered in previous tutorials. We take the explanatory data for the last day, we calculate the prediction on what will be the forecast tomorrow. And based on these conditions, we buy or sell the stock.
>
> **[3:13](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/anchored-walk-forward-validation-in-backtesting?u=76281980&t=193)** And that, my friend, is how the anchored walk forward validation is implemented within the investment strategy. Now, to parameterize these classes better, we will substitute the 600 by the self end train. We do the same for the Y and now we create a variable which is going to be equal to 600. But here we don't need the self. And the same for the retraining coefficient, the 200. So we will use self coef retrain, and we create it up here. Coef retrain equals 200. And one last change, the end train 600 can be also passed here. Self end train. One last change we need to do in the code is that the data that we select for the explanatory today is taking all of the columns of the data frame that we pass initially, but with the work forward, we need to add all of the columns including the target variable, which is a new concept that we haven't covered in the tutorial so far. So we need to change the code here, and tell it to go until the last column and tell [[Python (Programming Language)|Python]] to take all of the columns but the last one. Now we execute the sales of codes and we execute the optimization
>
> **[4:46](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/anchored-walk-forward-validation-in-backtesting?u=76281980&t=286)** on the walk forward anchored approach to see which are the best coefficients for limit buy and limit sell such that the return is optimized. Let's execute. And here we have the results where the return is 36% with these two coefficients on limit buy and limit sell, which indeed improves the performance that we had on the previous tutorial where we reached 10% of return in the test set. Now let's move on to the following tutorial where I will show you how to develop the unachored walk forward validation in the backtest strategy and also how to create a library of strategies to organize your code efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** means that (1), in other words (1), is a  (1)
> **CLI Commands:** python (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Create library for backtesting strategies](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/create-library-for-backtesting-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/create-library-for-backtesting-strategies?u=76281980&t=0)** - [Instructor] To create a library of strategies, we only need to create a new file that is encoded with dot pi. And we will call it, for example, strategies. Now within this file, we will copy paste the strategies that we previously created, the regression, and also the WalkForwardAnchored.
>
> **[0:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/create-library-for-backtesting-strategies?u=76281980&t=35)** And, we need to import the objects we are using, such as the DecisionTreeRegressor and the strategy. So from back testing, import Strategy. And from sklearn.tree import DecisionTreeRegressor. Let's close the panel, to have a clearer view. And now it's time to create the unanchored walk forward class. Which, instead of anchoring a fixed day at the beginning of the dataset to train the model, the days in the anchored approach are moving along with the test set. We create the class in the strategies lettering. We can duplicate this class. We call it Unanchored. And the only thing that changes in this approach is how we select the X and Y train, to compute the machine learning model. As we are moving according to the n train, we will go from the minus n train 600 days, until the last day on the iteration of the next function. And the same for the Y. Now if we want to use this class in another file we will import the library, which is the same name of the file. And now we can access strategies, WalkForwardUnanchored.
>
> **[2:12](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/create-library-for-backtesting-strategies?u=76281980&t=132)** We pass it to the back test class, and we run the optimization with this new approach. With this new approach, we are getting better results because the return is 46%. Nevertheless, it is always a good practice to look at the visual reports, that these lines of code generates, to compare the performance of both strategies, the anchored WalkForward, and the unanchored WalkForward, which we will do in the following tutorial.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** select the (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Interpret reports from walk forward validation approaches](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/interpret-reports-from-walk-forward-validation-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/interpret-reports-from-walk-forward-validation-approaches?u=76281980&t=0)** - [Instructor] To interpret the reports that we had previously generated, we go to the folder, reports backtesting, and within the files walk forward anchored and unanchored, we open the live server. The final equity from the anchored walk forward validation is 137%, whereas the unanchored is 146%. We should notice that the anchored walk forward, it starts very late to take decisions on the investment, almost at the end of 2022. But the unachored walk forward validation starts taking decisions from May, 2019, and since the stock went up during this time, the investment strategy is very successful. Now that we have interpreted both walk forward validation [[Algorithms]], it is time for you to put in the practice and we have prepared a challenge where in the following video I will show you the mental models to master the knowledge required to solve this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Walk forward with other tickers](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-walk-forward-with-other-tickers?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-walk-forward-with-other-tickers?u=76281980&t=5)** - [Instructor] In this new challenge, Walk Forward on other data sets. You will apply the concepts learned during the previous tutorials. The ultimate goal is to optimize the investment strategy to get the highest return based on the limit buy and limit sell parameters based on a back test that uses the walk forward validation process. The most important thing is not to get these results but the thinking process that you apply during this exercise. As always, we start with a ticker. In this case, Apple stock. We pre-process the data and then for the machine learning model this time we are using the time series split. Remember that this is a method to choose the best model so it will be on model selection. And from here you import the time series split. Remember always that if you don't know how to use it you can always check out the documentation as you can see in this part. Another important idea is how you construct the for loop. Do not start by writing the four sentences. Instead create a sample of the first iteration. In this case, they're telling you to evaluate the model by using the mean square error, MSE. Therefore, you first import the machine learning model. You can use any from the SK learning library. In our case, we will use the random forest.
>
> **[1:42](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-walk-forward-with-other-tickers?u=76281980&t=102)** Now we declare the variable We compute the mathematical equation and now we evaluate the model with the MSE. So from sklearn.metrics import mean squared error, always by looking up the documentation. Here you should know what to create y_true and y_pred And you place it inside the parenthesis to create a variable for the result. And then once you have the metric you want to return on the for loop, you merge the cells you put all of them together. So And now it's the time that you use the four loop. So you indent these lines of code then you start with the four and you need to think about which elements you use to iterate which are the same ones that we used in the tutorials which are the same ones as we explained in the tutorials of this chapter. And then the last idea is that you want to accumulate these errors. Therefore you need some list that appends the errors of the MSE. And you need to create it above the for loop. Once you know how to implement the walk forward validation with the machine learning model, it is time to put it
>
> **[3:17](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-walk-forward-with-other-tickers?u=76281980&t=197)** on the back testing and the investment strategy. The most difficult ideas to reason are how to choose the training set which parameters does the strategy needs. The next function remains the same. And then you need to create a new function that inherits the regression we previously created. And in this new class you need to define the conditions to retrain the model and when you should call to the next function of the inherited class. After you finish the walk forward anchored validation you will run the optimization process and by the time you want to create the unanchored walk forward instead of having the code in a simple notebook you will create a library of strategies in a new file applying the same concepts that we covered in the previous tutorial. In this case, you will be able to create any library of strategies for your work. If you learn how to develop this library of strategies you will learn how to store all of your investment strategies so that you can carry them to any notebook that you want. Once you create your library of strategies and you use it within the back test class now it is time for you to put in the work. So open the Jupyter notebook, then C and if you have any doubt while you work on these exercises let me know in the comments and I will do my best to give you an answer along
>
> **[4:50](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/challenge-walk-forward-with-other-tickers?u=76281980&t=290)** with a mental model to understand this concepts better. Meanwhile, I'll be waiting for you in the course conclusion. What I will tell you the next steps that you could take on your learning journey.

> [!info]- Semantic Content
>
> **Env Vars:** mse (3)
> **Code Identifiers:** y_true (1), y_pred (1)
> **Documentation:** the documentation (2)
> **Cross-References:** we covered (1)
> **Tools:** jupyter (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980&t=0)** - [Instructor] We have learned many things during this course. Let me summarize the key concepts of this course in eight concise points. We know how to download Any Ticker from the stock market. For example, if we want a table where every row represents one day and the columns, the prices for a particular stock, we go to Yahoo Finance and identify the ticker for the company. In this case: [[Microsoft]] Corporation, the ticker, MSFT. We put it into the [[Python (Programming Language)|Python]] codes and we downloaded it with the library, Yahoo Finance, to finally get this data frame. The same mental model would apply for any ticker that you want to download in the stock market. Reprocessing data for the investment strategy. We need to apply some computations to the data frame if we want to create an investment strategy with machine learning. In this case, we want to calculate the percentage change for tomorrow for a given period of time. Therefore, the two calculations is first filtering the rows and second, creating a new column. We use the function log to filter the rows from 2016, then with the function assign, we create a new column and we remove the missing data that have been produced. We execute and then we get the data frame we wanted. The third one is the machine learning system. If you want to calculate the best possible model,
>
> **[1:35](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980&t=95)** don't think that you will need to learn all of the mathematical equations because in Python code, we always follow the same steps. In this case, we will compute a [[Linear Regression]] decision tree and random forest to predict the change of tomorrow based on these columns. The first thing we do is separate the data between the target, the Y, and the explanatory, the X, and then for any of the three models, we apply the same procedure: fit, predict, and score. The only thing that changes is how do we import any of the [[Algorithms]]. Once we know, we execute and we are ready to get this data frame. The same process that I have explained is applicable to any of the machine learning models that you see on SKlearn library: fit, predict, and score. Another concept is the different types of machine learning models. It is not the same to calculate a category up or down than the number. Based on the type of variable that we want to predict, we will use one decision tree or another. If the target variable we use is categorical, change up or down, we use decision tree classifier. On the other hand, if we want to calculate a numerical variable change numeric, we use the regressor models to finally get the predictions right. This mental model is applicable
>
> **[3:08](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980&t=188)** to most machine learning algorithms. Decision tree, random forest, k-nearest neighbor, support vector machine, they all have two versions: classifier and regressor. Now, backtesting.py, the library we use to create investment strategies; the library we use to create investment strategies to see the performance on historical data, both in this dashboard, on in this summary table. Based on a data frame with the prices of a stock for each day, we create an investment strategy from backtesting library and we need to define two functions: init and self. Within init, we create the objects of the investment strategy; and within next, we need to decide when to buy or sell the stock. And once we create the strategy, we pass it to the strategy parameter in the backtest class. We also add the conditions of the backtesting, we run the report, and finally we get the performance in a table, both in a data frame and in a dashboard. Another key point of this course is optimizing investment strategy with custom parameters. Let's say that we want to set a limit when to buy or sell. For example, based on different limits of buy and sell, we get different returns. Based on the investment strategy,
>
> **[4:41](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980&t=281)** the conditions to buy or sell the stock are based on the forecast tomorrow if they are above a limit or below a limit. We create them as custom parameters within the strategy. We reference them in the conditions, and finally, we use the function optimize with a range of numbers from zero to 10 and from -10 to zero to maximize the return. We execute and we can get this table that summarizes the optimization of the strategy. Another key idea we learned is creating custom libraries that we can use in many scripts without adding too many lines of code. Instead of repeating the strategies within each notebook, we create a single file, a strategies.py, where we add the investment strategies, and then we are ready to use it in any other notebook that is on the same folder. And finally, out-of-sample validation walk forward, with the walk forward algorithms as a realistic approach to backtesting. We see in the following diagram how to validate the investment strategies on the yellow areas, which reference data that was not seen by the machine learning model during training. Why do we need these validation algorithms? Because if we backtest the strategy within sample data, we may get unrealistic returns such as 500%,
>
> **[6:20](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/course-summary?u=76281980&t=380)** whereas in out-of-sample data, we get a more realistic return, 10%. In the Python code, we need to select the training data, in this case 600 days, and later create a new class for the walk forward validation. Because we are retraining the model, it's X number of days. In this case, the given by self coef train. And remember that we have two versions: walk forward anchored and unanchored. And that's how we create the validation algorithms in Python. Follow me to the next video where I will tell you some advices to optimize your learning journey in [[Algorithmic Trading]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Python (Programming Language)|Python]] (4), [[Microsoft]] (1), [[Linear Regression]] (1), [[Algorithmic Trading]] (1)
> **CLI Commands:** python (4)
> **Analogies:** for example (2), such as (1)
> **File Paths:** backtesting.py (1), strategies.py (1)
> **UI Navigation:** go to (1), select the (1)
> **Env Vars:** msft (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [What's next](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-python-for-algorithmic-trading/what-s-next?u=76281980&t=0)** - [Instructor] Thank you all for embarking on this enlightening journey through the realms of [[Python (Programming Language)|Python]] and Finance. But remember, our adventure doesn't have to end here. I warmly invite you to stay connected with me on [[LinkedIn]] where I share updates, industry insights and more exciting opportunities to broaden your horizons. For those eager to apply their newfound knowledge. The official Backtesting.py library offers incredible tutorials. This will enable you to experiment, simulate and analyze your trading strategies, further enhancing your practical skills, and be sure to watch out for upcoming courses on LinkedIn learning. These will dive even deeper into Python and finance catering to learners of all levels. The path to mastery is an ongoing journey. Let's continue to navigate it together, forever curious and ever learning. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2)
> **CLI Commands:** python (2)
> **File Paths:** backtesting.py (1)
> **Definitions:** is an  (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jesus Lopez]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/practical-python-for-algorithmic-trading-4403633/codespaces)

## Skills Covered

- Algorithmic Trading
- Python (Programming Language)

## Path Context

### In [[Python for Data Professionals in Finance]]
← [[Advanced Python in Excel for Finance- A Hands-On Approach]] | **4 of 5** | [[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]] →

## Appears In

- [[Python for Data Professionals in Finance]]

## Related Courses

_Courses sharing skills:_

- [[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]] — Python (Programming Language), Algorithmic Trading
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)