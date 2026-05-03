---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: machine-learning-foundations-statistics
url: "https://www.linkedin.com/learning/machine-learning-foundations-statistics"
duration_minutes: 86
duration: 1h 26m
level: Beginner
updated: 6/9/2025
learners: 62657
skills:
  - Machine Learning
  - Statistical Analysis
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEvLkd_AGFL8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697490325267?e=2147483647&amp;v=beta&amp;t=_qRQujbGxYcXucHpeIUOS7qgMgh6zA3Xsos6P7AP9Sk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]'
  - '[[Foundational Math for Machine Learning]]'
prev_courses:
  - '[[Machine Learning Foundations- Probability]]'
  - '[[Machine Learning Foundations- Probability]]'
next_courses:
  - '[[Built-in Machine Learning in the Wolfram Language]]'
  - null
path_nav: '[{"path":"Machine Learning Statistical Foundations Professional Certificate by Wolfram Research","position":5,"total":6,"prev":"Machine Learning Foundations- Probability","next":"Built-in Machine Learning in the Wolfram Language"},{"path":"Foundational Math for Machine Learning","position":4,"total":4,"prev":"Machine Learning Foundations- Probability","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - skill/machine-learning
  - skill/statistical-analysis
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20Foundations-%20Statistics.md)

![Machine Learning Foundations: Statistics](https://media.licdn.com/dms/image/v2/D560DAQEvLkd_AGFL8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697490325267?e=2147483647&amp;v=beta&amp;t=_qRQujbGxYcXucHpeIUOS7qgMgh6zA3Xsos6P7AP9Sk)

# Machine Learning Foundations: Statistics

> Machine learning models have revolutionized how we work, across a multitude of industries. But going deeper with ML models and actually understanding how they work will allow you to optimize performance, innovate, troubleshoot issues, and create new and more efficient ML models. In this course, the fourth part of the Machine Learning Foundations series, Terezija Semenski explains how a deep unders

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-statistics) | 1h 26m | Beginner | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Foundations of statistics for machine learning](#foundations-of-statistics-for-machine-learning)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Statistics**](#1-introduction-to-statistics) (3 videos)
  - [Defining statistics](#defining-statistics)
  - [Applications of statistics in ML](#applications-of-statistics-in-ml)
  - [Types of data](#types-of-data)
- [**2. The Summary Statistics**](#2-the-summary-statistics) (8 videos)
  - [The mean](#the-mean)
  - [The median](#the-median)
  - [The mode](#the-mode)
  - [The percentile](#the-percentile)
  - [The percentage change](#the-percentage-change)
  - [The range](#the-range)
  - [The variance and the standard deviation](#the-variance-and-the-standard-deviation)
  - [The standard error of the mean vs. the standard deviation](#the-standard-error-of-the-mean-vs-the-standard-deviation)
- [**3. From Quantiles to Correlation**](#3-from-quantiles-to-correlation) (6 videos)
  - [The quantiles and box plots](#the-quantiles-and-box-plots)
  - [Missing data](#missing-data)
  - [The correlation](#the-correlation)
  - [The covariance](#the-covariance)
  - [The correlation coefficient](#the-correlation-coefficient)
  - [The correlation vs. causation](#the-correlation-vs-causation)
- [**4. Random Variables and Probability Distribution**](#4-random-variables-and-probability-distribution) (5 videos)
  - [Introduction to probability distribution](#introduction-to-probability-distribution)
  - [The uniform distribution](#the-uniform-distribution)
  - [The normal distribution](#the-normal-distribution)
  - [The Bernoulli distribution](#the-bernoulli-distribution)
  - [The Multinoulli distribution](#the-multinoulli-distribution)
- [**5. Sampling and Replacement**](#5-sampling-and-replacement) (3 videos)
  - [Selection with replacement](#selection-with-replacement)
  - [Selection without replacement](#selection-without-replacement)
  - [Bootstrapping](#bootstrapping)
- [**6. Linear Regression**](#6-linear-regression) (4 videos)
  - [Independent and dependent variables](#independent-and-dependent-variables)
  - [Linear regression for continuous values](#linear-regression-for-continuous-values)
  - [Fitting a line](#fitting-a-line)
  - [Linear least squares](#linear-least-squares)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundations of statistics for machine learning](https://www.linkedin.com/learning/machine-learning-foundations-statistics/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/introduction?u=76281980&t=0)** - Imagine a future where you don't just run machine learning model, but understand it. You can troubleshoot issues, optimize performance and innovate, creating a new ML model that is more efficient. Here's a secret weapon, a deep understanding of [[Statistics]]. This isn't just about crunching numbers, it's about gaining insights into the data, understanding uncertainties associated with predictions and making data-driven decisions with confidence. Hi, I'm Terezija Semenski, I'm a software developer, mathematician and a teacher with a passion for AI and machine learning. With this ML Foundation course in statistics, you'll be ready to [[Microsoft Excel|excel]] in your next machine learning project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Microsoft Excel|Excel]] (1)
> **Analogies:** imagine (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - imagine (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-foundations-statistics/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you should know. You should be familiar with the key concepts of algebra, pre-[[Calculus]], and [[Probability]]. If you struggle with basic probability concepts, I highly encourage you to take my Machine Learning Foundation Probability course before taking this course. You should have a basic [[Python (Programming Language)|Python]] programming knowledge. We'll focus on statistic capabilities and their applications in Python Code. Our focus will be on the latest versions of Python 3. You will also want to make sure you have an account installed. We are going to be working with Jupyter Notebooks, so if you have never worked with Jupyter Notebooks before, then you can go check out the Jupyter Notebooks basics video in my course, Foundations of NumPy. Fortunately, everything you need for this course that's Python and Jupyter Notebooks can be acquired simply by installing the free Anaconda 3 distribution. And that's about it, so let's roll our sleeves and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Probability]] (3), [[Calculus]] (1)
> **CLI Commands:** python (4), make (1)
> **Tools:** jupyter (4), anaconda (1)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Statistics

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining statistics](https://www.linkedin.com/learning/machine-learning-foundations-statistics/defining-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/defining-statistics?u=76281980&t=0)** - [Presenter] [[Statistics]] are all around us: from computing averaging grades in subject to filling in a sensor data or population record with personal information such as date of birth, residence, occupation, and marital status, which is used in the population service or demographic statistics, etcetera. Or every year, your health insurance asks for your age, existing medical conditions, current health status, et cetera. Statistics is a branch of mathematics that deals with the study and manipulation of data including ways to gather, review, analyze, and draw conclusions from data. [[Probability]] and statistics go hand in hand like peanut butter and jelly. We use data and probability to estimate how likely an event is to happen. Statistics are at the center of many data-driven decisions and innovations. Machine learning relies heavily on statistics, searching for possible hypothesis to correlate relationships between different variables in data. Having a powerful foundation in statistics will help you understand underlying relationships and build ML models that are optimized. It is important to recognize two major branches of statistics: descriptive and inferential statistics. The most commonly used part of statistics is called descriptive statistics.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/defining-statistics?u=76281980&t=94)** We use it to summarize data. So instead of looking at thousands and thousands of records of data, we look at the statistical measures that describe the data called the mean, the median, the mode, etcetera. For example, instead of looking at thousands of salaries for a position of software developer, we look at the median annual salary. The second branch of statistics is inferential statistics. It is used to uncover attributes about the larger population, often based on a sample. It is used in cases where we cannot get the collection of the entire data so we collect a subset of the data points called the sample. For example, if we would like to observe people working in a [[Software Development]], this population is too large, so we will take a sample and draw a conclusion about the entire population of people working in a software development. In many cases, that sample won't be representative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (13), [[Probability]] (2), [[Software Development]] (2)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [presenter] (1)

#### [Applications of statistics in ML](https://www.linkedin.com/learning/machine-learning-foundations-statistics/applications-of-statistics-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-foundations-statistics/applications-of-statistics-in-ml?u=76281980&t=3)** - I'm scrolling over photos on my phone searching for a photo of my dog, Ben. Oh, great! My phone can detect all the photos of my dog without me spending 15 to 20 minutes searching for them. Behind the scenes, image recognition identifies an object between an image and classifies it in a certain category, in our case, a dog. Data similar to photographs, we're surrounded by it, and every machine learning project relies on the data. We need [[Statistics]] to both understand the data used to train machine learning model and to interpret the results of testing different machine learning models. Now, let's see some applications of statistics in ML. Starting with the selection of the type of the method, for example, classification or regression, statistical methods play a huge role. For example, exploratory data analysis is used for summarization and visualization, and [[Data Mining]] for the automatic discovery of structural relationships and patterns in the data. For the data understanding, we use summary statistics, which are methods used to summarize the distribution and relationships between variables such as mean or median, and data visualizations, which consists of methods used to summarize the distribution and relationships between variables using visualizations such as charts, plots, and graphs. [[Data Cleaning]] refers to the process of identifying
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-statistics/applications-of-statistics-in-ml?u=76281980&t=98)** and repairing issues with the data. Examples of statistical methods which are used in this step of ML are outlier detection and imputation. Data selection is a process of reducing the amount of data to those elements that are relevant for making predictions. Feature selection and data samples play a crucial role as statistical methods used in this process. In the case of [[Data Preparation]], often it is necessary to change the structure or the shape of the data. In this case, some of the useful statistical methods are standardization, normalization, hot encoding, or the Box=Cox method. Statistics can be used by evaluating a learning method. For example, experimental design and resampling methods. We use statistical hypothesis tests and estimation statistics for the interpretation and comparison of the results between different hyperparameter configurations. Finally, when we have trained our ML model, we usually presented using estimation statistics, which quantify the uncertainty in the skill of a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Data Mining]] (1), [[Data Cleaning]] (1), [[Data Preparation]] (1)
> **Analogies:** for example (3), such as (2), similar to (1)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - i (1)

#### [Types of data](https://www.linkedin.com/learning/machine-learning-foundations-statistics/types-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-foundations-statistics/types-of-data?u=76281980&t=1)** - I wanted to find the perfect book as a gift from my friend so I Googled science fiction book and soon I was overwhelmed with data. Links to different online bookstores, good read reviews, blog posts, and even images and videos with book reviews. In the 21st century, data comes from many different sources, text, images, videos, and even sensor measurements. Data is usually unstructured. For example, texts are sequences of words and non-[[Microsoft Word|word]] characters. Images are bunch of pixels and each pixel contains RGB color information. In order to use this data in ML models, the first must process and manipulate unstructured raw data into a structured form. But why should we care about the data types? We use the data type to help determine the type of visual display, data analysis, or statistical model. And we can even use it to improve computational performance. Usually we distinguish four different types of data, nominal, ordinal, interval, and ratio which are also known as levels of measurement. The first two, nominal and oral are both categorical data that take relatively simplistic measures of a given variable. The second two, interval and ratio data are numerical data. Nominal data is the simplest data type.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-statistics/types-of-data?u=76281980&t=98)** It is often called categorical data, and it has no ordering between the different values, meaning it takes only a fixed set of values. For example, blue colors can be white, blue, red, green, and centra. Another example would be a type of smartphone display, LCD, OLED or AMOLED. Ordinal data is the data that has a ranking or order although differences aren't meaningful in a mathematical sense. For example, one person can have eight grade education and a second person university education, and we can say that the second person is more educated. Interval data is the type of data that is measured along a scale in which each point is placed at the equal distance from one another. For example, for time measurement in a 12-hour clock, the difference between 15 and 20 minutes is the same as between 25 and 30 minutes. Ratio data is the type of data that classifies and ranks data and uses measured continuous intervals, just like the interval data. The difference between interval data and ratio data is true zero. Ratio data has true zero, while interval data doesn't. This means that zero is absolute, and below which absolute zero, we don't have any meaningful values. For example, age, weight, and speed
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-foundations-statistics/types-of-data?u=76281980&t=191)** are example of ratio data since none have a negative value. We can represent all four types of data and their differences with the following table. In [[Statistics]], we should always take care when choosing the types of data we are using so we don't do something meaningless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Statistics]] (1)
> **Analogies:** for example (5), just like (1)
> **Env Vars:** rgb (1), lcd (1), oled (1), amoled (1)
> **Definitions:** known as (1), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - i (1)


### 2. The Summary Statistics

[↑ Back to Table of Contents](#table-of-contents)

#### [The mean](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mean?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mean?u=76281980&t=1)** - Data without [[Statistics]] is like the most beautiful beach in the world without a plane or car to get there. We'll visit the lens of statistics by learning some simple but important statistical measures, the mean, the median, the mode, the percentile, the range, the variance, and the standard deviation. Imagine you want to search for a holiday apartment on Airbnb. You'll probably limit your search by the number of stars. For example, you look only for apartments with ratings 4.5 and above. But how is that rating calculated? By calculating the average, adding the rating of all visitors to the apartment and dividing by how many visitors they are. This statistical measure is called arithmetic mean or unweighted arithmetic mean. So if the dataset consists of a set of values, X0, X1, until Xn-1, then the arithmetic mean is the sum of the data divided by the number of elements in the data set n. We can write it down as the following formula. In everyday life, we often call it the average, so we'll talk about the average grade in the school or the average height of a person. Let's see it at work in a simple example. Imagine you're working in a company where the average salary is $120,000 per year. However, you only earn $90,000 per year, and you're quite disappointed.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mean?u=76281980&t=96)** So before looking for another job, you go to your manager and complain about it, asking for a raise. Let's say your company is a small in size and has only 25 employees. Your manager shows you the salary list where CEO earns $230,000, four directors earn $180,000, five team leads earn 160,000, 10 senior developers earn 90,000, and 5 junior developers earn $70,000. How was that average salary calculated? By using the mean, adding salaries of all employees at that startup, it only has 25 employees. When we add all the salaries, we get $3 million, and then divide by the size of the data set, in our case, 25 employees, we get $120,000. The mean just summarizes a whole population with a single number and often doesn't tell us the whole picture. We should also mention two other types of mean, geometric mean and harmonic mean. The geometric mean of n positive numbers is the nth root of their product. It can be calculated using the following formula. It is used in the Matthews correlation coefficient, MCC. One of the metrics for evaluating [[Deep Learning]] models and in [[Image Processing]] as a filter to help reduce image noise.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mean?u=76281980&t=192)** The harmonic mean of n numbers is the reciprocal of the arithmetic mean of their reciprocals. It can be calculated using the following formula. It is usually used in deep learning for evaluating classifiers. Now that we have learned three different types of mean, we can continue to learn other commonly used summary statistics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Deep Learning]] (2), [[Image Processing]] (1)
> **Analogies:** imagine (2), for example (1), picture (1)
> **Env Vars:** ceo (1), mcc (1)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 4.5 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - data (1)

#### [The median](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-median?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-median?u=76281980&t=0)** - [Instructor] After multiple complaints about the salary expectations, the CEO decided to talk to the HR director and asked to use some other statistical measure instead of mean. The HR director recalled her [[Statistics]] class in college and said, "Okay, let's take the middle value." So how are we going to do that? Let's sort the dataset from the smallest value to the largest value. So we have 25 data points. 25 is an odd number, so our middle value is the 30th data point, meaning 90,000. Now that middle number is called the median. The median of a dataset is the middle value. When the dataset is sorted numerically, half the values are below the median, and half are above the median. Maybe you wonder what we'll do if we have a dataset where the number of data points is even. What do you think we should do? That's right. We'll take the two middle data points and calculate their average, and our median will be that value. Imagine we have a dataset consisting of eight employees ages. We would take two middle data points, in our case 26 and 30, and find their average. That is 26 plus 30 divided by 2 that is equal to 28, and that's our median.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-median?u=76281980&t=96)** So our steps to find the median, sort the data points from the smallest to largest. If the number of the data points is odd, the median is the middle data point in the list. If the number of the data points is even, the median is the average of the two middle data points in the list. As you could experience, the mean is sensitive to the values themselves while the median is sensitive to the ordinance of the values. You probably think, "When do we prefer the median over the mean?" In a situation when data is skewed by outliers, meaning we have values that are extremely large and small compared to the [[Representational State Transfer (REST)|rest]] of the values. As you could see in our previous salary example, we have salaries that are extremely large, over $150,000 but most of the employees had lower salaries, so the mean is less sensitive to outliers than the median and cuts data down to the middle based on their order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is called (1)
> **Non-Speech:** (upbeat music) (1), (upbeat music fades) (1)
> **Env Vars:** ceo (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [The mode](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mode?u=76281980&t=0)** - [Instructor] There is one more basic summary statistic called the mode. In our previous company's salary story, we could easily find the mode. The mode is the value or values that appear most often in data. In our case, it's 90,000, as 10 out of 25 employees have a yearly salary of $90,000. A dataset can have one or more modes. The mode is a different measure from the mean, which is the average of the numbers in a set. It's also different from median, which is the midpoint of a set. When we find the mode in the dataset, we know which data points occur most commonly. But why would we want to calculate the mode if we have the mean and the median? It is not affected by extreme values. It is easy to identify in a dataset and in discrete frequency distribution. It is very useful for qualitative data. So how do we calculate the mode? Calculating the mode is easy and straightforward. We have to sort the data points from lowest to highest or even highest to lowest, and then count how many times each data point appears in the set. The one that appears the most is the mode. Now let's head on to Jupyter Notebook and learn how to calculate the mean, the median, and the mode. I have already prepared everything. So we will run our code cell by cell
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-mode?u=76281980&t=94)** by using Shift + Enter. Calculating these three most popular [[Statistics]] measures is simple using NumPy and SimPy libraries. So we have already imported them, and we are going to use our famous salaries example. Third dataset is salaries. So to calculate the mean, we just have to call the mean function from the NumPy library. Similarly, to calculate the median, we have to call the median function from the same library. For the mode, NumPy likes the mode function, so we are going to code the mode function from the SimPy library. As simple as that, we get our values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** find (2)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The percentile](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentile?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentile?u=76281980&t=1)** - My friend's daughter just received her SAT results. So my friend called me to say she scored 1,340 points. "Wait, what does that mean?", I asked her. Well, her result is approximately 90th percentile, which is amazing. She'll go to the best college. But what is the 90th percentile? It means she's better than 90% of other students that took the SAT test. Whoa, that's really great result. Percentile tells us how value compares to other values. The general rule is that if value X is in the Kth percentile, than X is greater than K percent of the values. Let's look at one more example. A person has an IQ of 130, and we say this person is at 98 percentile. What does that mean? It means that their IQ is higher than 98% of other people. What is interesting to know is that the median is a special case of percentile. We say that the median or second quartile, Q2, is the 50th percentile, meaning the values of 50% of the data points are below and 50% are above the median. So median splits a dataset in half. There are two more special cases of percentiles, which are based on the division of the dataset into quarters, and their names are intuitive. The first quartile, Q1,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentile?u=76281980&t=94)** or lower quartile is the value of the 25th percentile. 25% of the data points fall below this value while 75% fall above it. The third quartile, Q3, or upper quartile is the value of the 75th percentile. 25% of the scores fall above this value while 75% fall below it. In NumPy, we can use a percentile function to calculate the nth percentiles of a given array along the specified axis. The percentile function accepts the two mandatory parameters. The first one is the source array, whose percentile we want to compute and the percentile that signifies the percentile that needs to be computed. Let's head on to Jupyter Notebook, where we have an array representing SAT results. And to find the 90th percentile. We just have to call the percentile function and pass two parameters, the name of our array, and 90 as a second parameter. After we run our code, we get the 90th percentile.

> [!info]- Semantic Content
>
> **Env Vars:** sat (3)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Tools:** jupyter (1)
> **UI Navigation:** go to (1)
> **Best Practices:** general rule (1)
> **Speakers:** - my (1)

#### [The percentage change](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentage-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentage-change?u=76281980&t=0)** - [Narrator] Imagine you work for a startup and you have both shares of a company's stock at $45 per share on January 1st. On October 1st, the stock was worth $65 per share. We are wondering by what percentage did stock share value increase? Well, this calculation is straightforward. First, we calculate the difference between the new price and the old price. So in our case, we get $65 minus $45 equals $20. To find out the increase as a percentage, we have to divide the price increase by the old price and multiply the value by 100. So we have to divide 20 by 65 and multiply by 100, which is approximately 30.77%. We can define the percentage change as the ratio of the difference in the quantity to its initial value, multiplied by 100. Percentage change is a highly valuable measure that is used to track the change in the number over time. It can be used in a balance sheet with the comparative [[Financial Statements]] or to track the price of stocks, bonds, and market indexes. For example, a company can track and report trends in its revenue or profit. For example, for the second quarter of 2023, the chocolate company reported a 25% drop in the net revenues over the same quarter in 2022.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-percentage-change?u=76281980&t=97)** The important thing to remember is the difference between percentage and percentile. If a student scores 40 points out of 50 points, then his percentage is expressed as 80%. On the other hand, if a student's percentile in exam is given as 80, this means that he scored better than 80% of the students who took the exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Statements]] (1)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 30.77 (1)
> **Speakers:** - [narrator] (1)

#### [The range](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-range?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-range?u=76281980&t=0)** - [Presenter] You have just returned from a shopping mall and bought a new smartphone and a shirt. The electronic store had enormous range of smartphone brands and a range of prices. In the clothing store, you could pick a shirt based on a range of sizes, a range of colors and a range of styles. In [[Statistics]], a range of a dataset is the difference between the maximum and the minimum values. It is the easiest measure to calculate and interpret, as it measures variability using the same units as the data. So how do we calculate it? We have to subtract the lowest value from the highest value of the data set. Let's see it in action in a simple example. I measured the outside temperature at 2:00 PM each day of the week and got these results. We want to find out the range of temperatures. Range equals highest value minus lowest value, so it's 89 minus 75, so it's equal to 89 minus 75 equals 14 Fahrenheit. We can also say that the range is the difference between the maximum and minimum data points. The range is simple to calculate but it has some limitations we have to think about. Unfortunately, outliers can influence the range considerably because it uses only the two most extreme values. For example, in case one value in the dataset is atypically low or high,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-range?u=76281980&t=94)** it changes the entire range all by itself. Let's see it in a simple example. 12 Students have taken the exam which has 100 maximum points and they have obtained the following result scores. In this case, we have three outliers four, five and 98. After we remove them, our data set is, and to calculate the range, we have to find the highest score which is 79, and the lowest score, it it 43. And the range is the difference between the highest value and the lowest value. So it is 79 minus 43 equals 36. So the range of the remaining dataset is 36. We can also use range to detect data entry errors, as the range is suspectable to outliers, a single mistake can manifest itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** find (2)
> **Ports:** :00 (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [The variance and the standard deviation](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-variance-and-the-standard-deviation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-variance-and-the-standard-deviation?u=76281980&t=0)** - [Instructor] Imagine you're interested in finding out the popularity of programming languages among developers. You could interview every software developer to find out which programming language they're using. Or a better way instead is to choose a sample of the population. For example, conducting the survey among 10,000 developers who visited the conference. We can define the population as the entire group of subjects or subjects we're interested in, and a sample is a subset of the population. We make inferences based on the data we find about our sample of developers. It is important to distinguish if you're looking at the population or at the sample when we are calculating variance and standard deviation, because our formulas to calculate both of them will be slightly different from each other. Let's explore what the variance is and how it is calculated in example. 10 students have taken the exam which has 100 maximum points, and they have obtained the following results and scores. If we want to calculate the mean, we would add all the scores and divide the sum by 10, because we have 10 data points. In our population of students is 67.9. Now, let's see how to calculate the variance. Variance is a measure of spread. It shows us how our data is spread out around the mean. The variance is the measure of dispersion
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-variance-and-the-standard-deviation?u=76281980&t=94)** of a set of data points around their mean. To compute it, we have to find the difference of each of the numbers in the data set from the mean. The variance is equal to the average of the square of these differences. Let's look at the formula for the variance. So to calculate the mean, we have to take each data point and subtract the mean from it. So we take our first lowest value, x1 equals 48, and our mean is equal to 67.9. When we subtract them, we get minus 19.9. And we repeat the process all the way to the highest value, x10 equals 98, and subtract the mean, we get 30.1. So in both cases, we got distance from the mean, and when we square the first value, we get 396.01. And by squaring the last value, we get 906.01. Now let's calculate the variance by plugging all the values in our formula. After taking the difference between each of the numbers and their mean, we get the sum. And after we square the sum, we get 2,158.9. And divided by the number of elements, in our case, 10, we get the variance 215.89. As we can see from the formula, we have to calculate the square root of the variance. It is calculated as the square root of the variance
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-variance-and-the-standard-deviation?u=76281980&t=190)** and denoted with a lowercase s or with the Greek letter sigma. So our formula for the standard deviation looks like this. Let's calculate the standard deviation. As we can see from the formula, we have to calculate the square root of the mean, 215.89, and we get a standard deviation of 14.69. We have calculated the variance and standard deviation for a population of students. In the case when we calculate standard deviation and variance for the sample, we use these formulas. So the only difference is that in the case of the population, we use the capital N, which indicates we have included everyone, the population. And in the case of the sample, we use lowercase n, which indicates we have selected just a few individuals.

> [!info]- Semantic Content
>
> **Versions:** 67.9 (2), 215.89 (2), 19.9 (1), 30.1 (1), 396.01 (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [The standard error of the mean vs. the standard deviation](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-standard-error-of-the-mean-vs-the-standard-deviation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-standard-error-of-the-mean-vs-the-standard-deviation?u=76281980&t=0)** - [Instructor] Let's explore the third measure, which is connected with the variance and the standard deviation. That measure is called the standard error of the mean or the standard error. We usually represent it with a shortcut SEM or SE. Imagine we are searching for a hotel room in London on some platform that displays all hotel rooms in the UK and there we have a sample from a population. So our dataset is all hotel rooms in London. We could calculate the mean of the sample and then choose a different city, such as Oxford and calculate the mean. If we repeat the process, we'll generate a data set of means of the samples from a population of hotel rooms. We have already explored this process in the central limit theorem. This way we get a standard error. The standard error is the standard deviation of the set of means. We can calculate the standard error by dividing the standard deviation by the square root of the number of samples by using this formula. So obviously the standard error and the number of samples are inversely proportional. Wait, what? Inversely proportional means if we reduce the sample size, the standard error will increase and opposite. If we increase the sample size, the standard error will decrease. If we calculate the mean at each step by using a high number of data points then a small deviation in one value
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-standard-error-of-the-mean-vs-the-standard-deviation?u=76281980&t=94)** will not have a significant effect on the final mean. So the standard error explains to us how the mean varies with different experiments measuring the same quantity. This is because the mean at each step is calculated using many data points, and in this case, a small deviation in one value will cause less effect on the final mean. In the case, there is no change in the data points as experiments are repeated, then the standard error of the mean will be equal to zero. But in which case would we use the standard deviation and which standard error in ML? If we deep dive into machine learning then we will use the standard deviation to describe the dataset used to train a model. In the case we want to train and test different models, we can calculate the mean or the models for some metric, for example, the accuracy. Then we would like to report the mean accuracy plus or minus the standard error.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), such as (1), for example (1)
> **Env Vars:** sem (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 3. From Quantiles to Correlation

[↑ Back to Table of Contents](#table-of-contents)

#### [The quantiles and box plots](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-quantiles-and-box-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-quantiles-and-box-plots?u=76281980&t=0)** - [Instructor] We have explored percentiles on SAT and IQ examples. For example, if your result is in 80th percentile on the test, it means you're better than 80% of other students who took the test. Quartiles are connected with percentiles. We can break every set of numerical data into quartiles, which are just a fancy name for four equal sizes segments that each contain exactly a quarter or 25% of the data. We can represent their connection visually with the following table. Q1 or the end of the first quartile is the 25th percentile. So at Q1, we have 25% of the data points below that point. Q2 or the end of the second quartile is at the 50th percentile or median. 50% of the data points are below that point and 50% of the data points are above that point. Q3 or the end of the third quartile is at the 75th percentile. So in Q3, we have 75% of the data points below that point. In order to represent our data set split into quartiles easily, we use box plots. Box plot or a whisker plot is a chart that is used to visualize how given data is distributed using quartiles. It shows the minimum, maximum, median, first quartile, and the third quartile in the data set. We use box plots to understand the distribution of the data,
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-quantiles-and-box-plots?u=76281980&t=97)** identify outliers or anomalous data points. Outliers are the data points that differ significantly from the most of other points in the dataset, and to determine if our data is skewed. Now let's see an example of the box plot. With the help of numpy and matplotlib, we can effortlessly create box plots. Let's open our Jupyter Notebook 03_01 and take a look at our box plot. Just press Shift plus Enter around the code. In the box plot, a box is created from the first quartile to the third quartile. A vertical line is also there, which goes through the box at the median. Here x-axis denotes the data to be plotted, while the y-axis shows the frequency distribution. The boxplot function provides different customization possibilities to the box plot. We are using just a few of them such as notch equals True attribute, which will create the notch format to the box plot. patch_artist equals true, which fills the box plot with colors, so that we can see different colors to different boxes. You can find out more about box plot on the matplotlib documentation page.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** patch_artist (1)
> **Env Vars:** sat (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Missing data](https://www.linkedin.com/learning/machine-learning-foundations-statistics/missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/missing-data?u=76281980&t=0)** - [Instructor] Imagine you're taking a survey. It says it will only take five minutes of your precious time, but after filling out 20 questions, you discover there are 30 more. Hey, you didn't sign up for this, so skip filling out half of the questions and finish the survey on time. You ask the colleague next to you what they did, and their answer is the same. They didn't bother filling out the whole survey. Data coming from the real world is rarely clean and homogenous. So in almost every dataset, there is some quantity of data missing. Missing data is defined as the values or data that is not stored or not present for some variables in the given dataset. You might ask yourself, "Hey, but why should I care about the missing data?" Machine learning models use a variety of statistical methods that cannot work with the missing data points. So we have to investigate how to handle the missing data. Yes, there are [[Algorithms]], like Naive Bayes and K-nearest, that support data with missing values. If you don't handle missing data, you may end up building a biased ML model, which will lead to incorrect results. We can label the missing data in many different ways. We will use approach called the sentinel-based missing data scheme. For example, in the case we have a dataset with only positive values, a missing feature might be marked historically
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/missing-data?u=76281980&t=95)** with minus 999 or with minus one. In the case the feature is a string, the string will be empty. For floating-point values, we use not a number, NaN, a special value that is a part of IEEE floating-point specification. Let's think of one more example of missing data. If you have dealt with [[Databases]], you have seen missing data. Every time there is a mismatch of variables between databases, there are missing occurrences. So how do we handle missing data? What do you think? There are three ways to deal with it: keep it, remove it, or replace it. Each of these choices has its benefits and trade-offs. If we choose to keep the missing data, its benefits are: it's easiest to do of all three approaches, we report it as not a number, NaN, and it doesn't manipulate or change the real data. The cons are: many ML models don't support NaN value, and many times, there is a necessity to put a reasonable guess instead. Removing or dropping missing data has a benefit. It is based on simple rules. The cons are the potential of losing a lot of data that holds useful information, and it limits ML-trained models for future data. The third way, replacing the missing data,
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-statistics/missing-data?u=76281980&t=189)** has the benefit of saving a lot of data for use in training an ML model. But the cons are: it's hardest approach, and it can lead to false conclusions. For example, we could replace the missing data with the mean or a median. Now that we know how to deal with missing data, let's explore correlation in-depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Algorithms]] (1)
> **Definitions:** is a  (4), defined as (1)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** ieee (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [The correlation](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation?u=76281980&t=0)** - [Narrator] Your company's HR department wants to gain insight into information about people working in [[Software Development]]. So they ask you to take a look at the data set containing information on 50,000 people in the industry. You expect a strong relationship between the number of years of experience and salary, since seniors are usually paid more than juniors. Opposite of that, there is probably a weak or no relationship between pizza consumption and salary. The statistical relationship between two variables is referred to as their correlation. A correlation can be positive, negative, or neutral. The positive correlation means both variables move in the same direction. Years of experience and salary is a case of positive correlation. The negative correlation means that when one variable increases the other variable decreases. A negative correlation could be that the factory increases safety training, so there are fewer on-the-job injuries. The neutral correlation or zero correlation means that the variables are unrelated, meaning there is no relationship in the change of variables. So when the value of one variable increases or decreases, then the value of the other variable doesn't increase or decrease. ML often uses correlation during data analysis and [[Data Modeling]]. For example, two or more independent variables
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation?u=76281980&t=96)** can have a high correlation with one another in a regression model, and we call this multicollinearity. There are some examples of multicollinearity. It can happen when new variables are created which are dependent on other variables. We can have a dataset that contains the height and weight variables of people and then create a BMI, body mass index variable. It would obviously be redundant information for a model or we can have identical variables in the dataset. For example, the height of the people in centimeters and the height of the people in feet. Multicollinearity can lead to deterioration of the performance of some [[Algorithms]]. So it's important to recognize the issue and find the appropriate solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Data Modeling]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (1), means that (1), we call this (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** bmi (1)
> **Speakers:** - [narrator] (1)

#### [The covariance](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-covariance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-covariance?u=76281980&t=0)** - [Instructor] Let's explore an interesting statistical measure that will help us understand the relationship between two data samples. Imagine a small fashion shop in Lisbon, Portugal and its owner would like to find out why some months, umbrella sales are skyrocketing and some months, they're struggling to sell a few of them. What do you think is the key factor that drives the sales? You probably got it right. It's the number of rainy days. Usually on rainy days, people come in to buy an umbrella as they need one. Let's look at the data table. The fashion shop in Lisbon keeps track on how many umbrellas they sell in a month versus the number of rainy days. Covariance is the measure of the relationship between two random variables. It can be positive, negative, or zero. The positive covariance tells us the values tend to rise together. The negative covariance tells us that one value rises as the other value falls. To calculate the covariance, we can use two types of formulas depending if we calculate the covariance for the sample or the population. In order to calculate the covariance between two samples, we can use the following formula. In the case of the population, we use this formula. We have a sample, so let's use the first formula. To calculate the covariance, we have to find the mean of the rainy days. We can do that by adding them up and dividing them
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-covariance?u=76281980&t=95)** by how many they are. As there are 12 months, we have to divide by 12, and we got 6.5. Next, we have to find the mean of the number of umbrellas sold. Similarly, we add all the values and divide them by 12 and get 259.25. Then, for each pair of values, subtract the mean of X from X and the mean of Y from Y, and multiply them together. Finally, we have to add all these numbers and divide by the sample size minus one. In our case, sample size is 12 so we have to divide by 11 and we get 798.35. We have a positive covariance, so it tells us that the X and Y values move in the same direction. But how do we understand what it means if the covariance is only 0.5, 50 or 500? To understand this, we have to discover the importance of the correlation coefficient. We'll do this in the next video.

> [!info]- Semantic Content
>
> **Versions:** 6.5 (1), 259.25 (1), 798.35 (1), 0.5 (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [The correlation coefficient](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-coefficient?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-coefficient?u=76281980&t=0)** - [Instructor] To understand the strength of the linear relationship between two data samples, we are using the correlation coefficient or the Pearson's correlation coefficient. We can calculate the correlation coefficient as the covariance of the two variables divided by the product of the standard deviation of the two variables. We can calculate it using the following formula. The correlation coefficient is a statistical measure of the strength of the linear relationship between two variables. Its values can range from -1 to one. A coefficient of one shows a perfect positive correlation or a direct relationship. An example of the positive correlation coefficient, which value is greater than zero, could be correlation coefficient calculated for the value of oil prices and prices of bus tickets. If the price of oil increases, the price of bus tickets also increases and vice versa. A correlation coefficient of -1 describes a perfect negative or inverse correlation with value in one series rising as those in the other decline and vice versa. An example of a negative correlation coefficient is the correlation coefficient for the prices of heating bills and outdoor temperatures. When temperature increases, the price of heating bill decreases. A correlation coefficient of zero means there is no linear relationship. Lastly, let's calculate the correlation coefficient
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-coefficient?u=76281980&t=94)** for our dataset from the previous video which included the number of umbrellas sold per month and the number of rainy days per month. Our covariance was 798.35. If we need to calculate the standard deviation for x and y, we will calculate the standard deviation for x, and we get 15.73 and take the square root, and we get standard deviation of approximately 3.97. Next, we'll calculate the standard deviation for y, and where we take the square root, we get the standard deviation of 205.91. Finally, let's plug in those values in our correlation coefficient formula and we get rho of x, y equals 0.98. Great, one more thing to add is that our formula for the correlation coefficient between the variables x and y is symmetrical with respect to both variables. So rho of x, y equals rho of y, x.

> [!info]- Semantic Content
>
> **Versions:** 798.35 (1), 15.73 (1), 3.97 (1), 205.91 (1), 0.98 (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The correlation vs. causation](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-vs-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-vs-causation?u=76281980&t=0)** - [Instructor] We have discovered that correlation measures how much two items are related to each other. The example that we used was the correlation between the number of rainy days per month and monthly umbrella sales. If we represent it graphically, we notice that as the number of rainy days increases, the monthly umbrella sales also increase. We obviously have a linear relationship. Our correlation coefficient equals 0.98, so there is a high positive relationship between the increase in rainy days and the increase in umbrella sales. The important thing to notice is that correlation does not imply causation. Some variables can be correlated, and still there could be zero causation. The results can be misleading. For example, we could calculate the correlation between pet ownership and living longer and get high correlation, but that still doesn't mean having a pet will increase your lifespan. People tend to have different pets, and dog owners usually lead a more active lifestyle than, for example, cat owners. So there could be some other cause. Even in the case we have a correlation between two variables, we cannot conclude that one variable causes a change in the other. This relationship could be coincidental, or there could be some other variables that are causing both variables to change. Let's think about one more example. We calculated the correlation between a higher salary
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-correlation-vs-causation?u=76281980&t=95)** and moving to a different [[Microsoft Office|office]]. However, one doesn't cause the other one. There's a third variable which is the cause, and it's the promotion. In the end, some examples and graphs clearly show that correlation does not imply causation. Global average temperatures correlate with the number of pirates. Divorce rate correlates with consumption of margarine. Even total revenue generated by arcades correlates with CS doctorates awarded in the US. Obviously, these funny examples show that correlation does not mean causation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** cat (1)
> **Versions:** 0.98 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Random Variables and Probability Distribution

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to probability distribution](https://www.linkedin.com/learning/machine-learning-foundations-statistics/introduction-to-probability-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/introduction-to-probability-distribution?u=76281980&t=0)** - [Instructor] If you have previously taken my ML [[Probability]] course, you have explored different types of probability distributions. If you haven't, I highly recommend taking it as probability and [[Statistics]] go hand in hand, like coffee and milk. But don't worry, we'll cover the basics related to statistics. In the previous chapters, we have covered the basics of descriptive statistics. And now we'll cover inferential statistics that cover methods built upon probability theory and distributions. Distribution is defined as a function that shows the possible values for a variable and how often they occur. The distribution type depends upon the types of variables. Random variables can be divided into discrete and continuous. A discrete variable takes only a limited set of values from a given range of values. For example, the number of seats in a cinema, the number of questions in a quiz, the number of pets in a family, et cetera, are all discrete variables. A continuous variable takes any value from a given range of values. For example, temperature, a person's height, a customer's waiting time at the drive-in restaurant are all continuous variables. So statisticians divide probability distributions into the following two types: discrete probability distribution and continuous probability distribution. It is important to understand the difference
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/introduction-to-probability-distribution?u=76281980&t=95)** between a distribution and a graph. As many people think they are the same. The graph is just a representation of a function. For example, here we have a graph of the most popular distribution called normal or Gaussian distribution. We define the distribution based on the underlying probabilities, and we use the graph to show the probability of every event visually. Probability distributions play a crucial role in ML as they help you make predictions in case our models involve randomness, or in the case you're uncertain about outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9), [[Statistics]] (4)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [The uniform distribution](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-uniform-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-uniform-distribution?u=76281980&t=0)** - [Instructor] Imagine you're invited to a birthday party, but your friend forgot to note the date. If you try to guess his birthday randomly, you'll struggle a lot. The [[Probability]] of guessing his birthday equals one divided by 365 as there are 365 days in a year. So every day of the year is equally likely to be his birthday. This probability follows a uniform distribution. Uniform distribution is a form of probability distribution in which an event is equally likely to occur between a certain interval. The most famous example of uniform distribution is rolling a six-sided die. The probability of getting any number from one to six is equally likely and is equal to 1/6 or approximately 0.167. (bell buzzes) Can you think of one more famous example of uniform distribution? That's right, tossing a coin. The probability of getting heads and probability of getting tails is the same and equal to 0.5. These three examples are examples of discrete uniform distribution because the probability of occurrence of the events is equally likely and falls between a finite set of values. Guessing a birthday is discrete as we have 365 possible values. The same goes for rolling a die
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-uniform-distribution?u=76281980&t=94)** as we have only six possible values. The other type of uniform distribution is called the continuous uniform distribution with an infinite number of equally likely events. An example could be a random number generator. Another example would be manufacturing a wheel of cheese between 500 grams and 1,000 grams. So the probability of getting a wheel between 500 and 650 grams is the same as probability of getting a wheel between 650 and 800 grams. So for continuous uniform distribution, the probability of the occurrence of the events is equally likely and falls between an infinite set of values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (10)
> **Versions:** 0.167 (1), 0.5 (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [The normal distribution](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-normal-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-normal-distribution?u=76281980&t=0)** - [Instructor] Teachers love explaining and sharing knowledge with their students. Some teachers even love creating and giving exams. But I'll tell you one secret they don't like to share. Most of them don't like correcting those exams. When students finally receive the results of the exam at the end of the semester, it could look something like this, where frequency indicates the number of students who have received that score. From looking at the table, the teacher can notice that the lowest score a student has received is 50% and there are only two students who got this result. Similarly, the highest score that a student received was 100%, and only two students solved the exam without making any mistakes. We will call this type of distribution the normal distribution. The normal distribution is the classic, bell curve-shaped distribution, often called the Gaussian. And it is completely determined by the two parameters, its mean, mu, and its standard deviation, sigma. It is also called a bell curve because it is shaped like a bell. Most of the data values tend to congregate around the mean so the mean will indicate where the bell is centered. The other statistical measure, standard deviation, shows us how far from the mean the distribution spreads out, so it shows us how wide it is. So the data points that are most likely
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-normal-distribution?u=76281980&t=93)** to occur are the values around the mean. The values that are very small or very large are unlikely to occur. There are many real-life examples of the normal distribution, height and weight of the people, IQ scores, person's shoe size, and blood pressure. It has the following properties. It is symmetrical, meaning if we split it by half, the left side and the right side are mirrored at the mean. The mean, the median, and the mode are approximately the same number. It has no skew, so it's perfectly centered around the mean. If we break down the normal distribution curve into six different pieces, we see that if we go down one standard deviation from the mean or one standard deviation up from the mean, approximately 68% of all data is between that range. Not only that, but if we go two standard deviations down or up from the mean, approximately 95% of all the data is going to be between that range. If we go one step further, three standard deviations from the mean, approximately 99% of all the data is going to be there. Now that we've learned the basic properties of the normal distribution, it's time to discover two more popular distributions.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [The Bernoulli distribution](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-bernoulli-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-bernoulli-distribution?u=76281980&t=0)** - [Interviewer] Imagine I wanted to check your knowledge of [[Statistics]] and the easiest way to do that is to give you a small quiz that contains only 10 questions. That could be bad news if you skipped some lessons. So if you have, go ahead and check them out. The good news is that the quiz has only true or false answers. This means that there is a 50% [[Probability]] that your answer is correct and a 50% probability that it isn't correct. In this example, we have both binomial and Bernoulli distributions taking place. Wait, how is that possible? Bear with me. The binomial distribution represents the expected number of events happening in a given number of trials if each event has a specified probability. For example, if we flip a coin 10 times we get heads or tails every trial and here we can apply the binomial distribution. If we look at the single trial, we have a Bernoulli distribution. So Bernoulli distribution is a special case of binomial distribution where we have only one trial, meaning n equals one. So the expected value of the binomial distribution suggests the number of times we expect to get a specific outcome and the expected value of the Bernoulli distribution indicates which outcome we expect for a single trial. The Bernoulli distribution returns only two possible values: zero or one. To describe the probability of success
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-bernoulli-distribution?u=76281980&t=94)** in above exam example, meaning we get the correct answer, we use the letter p, and for probability of failure we'll use 1-p, or sometimes we use the letter q. We won't cover the formulas to calculate the binomial and Bernoulli distributions. We have already covered that part in the machine learning foundation probability course. So if you still haven't taken this course, please take it as probability and statistics are interconnected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (7), [[Statistics]] (2)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [interviewer] (1)

#### [The Multinoulli distribution](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-multinoulli-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-multinoulli-distribution?u=76281980&t=0)** - [Instructor] Imagine your country's having a presidential election next year. The company workforce has conducted a survey with the following results: 35% of the eligible voters prefer candidate A, 25% of the voters prefer candidate B and 40% of the voters have no preference. You randomly sample 100 eligible voters and want to know the [[Probability]] that 35 will like candidate A, 25 will choose candidate B and 40 will have no preference. This real life scenario is the illustration of the distribution called multinoulii distribution. The multinoulii distribution is a generalization of the binomial distribution with more than two possible outcomes. Another name for it is a categorical distribution and we use it to model events with K possible outcomes. So binomial distribution has just two possible outcomes and multinoulii distribution has K possible outcomes. It has the following characteristics: the experiment consists of repeated trials and each trial is independent of the other trials, meaning the outcome of one trial doesn't impact the outcome of the other trial, the third characteristic is that the probability of each outcome must be the same. When we build the ML system to classify inputs into different categories, it is extremely useful to have a list
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/the-multinoulli-distribution?u=76281980&t=95)** of possible values where only one entry has a probability set to one and all the other entries have a corresponding probability set to zero. For example, imagine we would like to build an ML system to recognize which of the 10 different fruits appears in an image. If we want to detect an apple, we want a system that returns one as an output in the case we have an apple and zero otherwise. So in machine learning, we use the multinoulii distribution to model the expected class of one sample into the set of K classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4)
> **Analogies:** imagine (2), for example (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 5. Sampling and Replacement

[↑ Back to Table of Contents](#table-of-contents)

#### [Selection with replacement](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-with-replacement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-with-replacement?u=76281980&t=0)** - [Instructor] You are working on the research project before the upcoming elections. Obviously, you have to collect data about the residents. So you [[Jetpack Compose|compose]] a survey with a question such as, what is your household income? What is the highest educational level you have attained? Do you support a certain law or candidate? We are interested in finding the answers to these questions about the population, but when designing an experiment we don't have access to the whole population, so we will gather data on a sample of the population which is representative of the entire population. Sampling is the process of selecting a dataset from a vast collection of data to calculate the specific characteristics of the entire dataset. Statisticians collect the samples in two ways, selection with replacement and selection without the replacement. Let's explore the selection with replacement, or short, SWR. For example, suppose we have 10 objects and let's assign them numbers from zero to nine. In that case, we can randomly select one object, for example, an object with a number one, make a copy of it for a new data set, and then return the object one in the original dataset. Next, we can take the object with the number three and repeat the process. After that, we can take the object with the number six and so on. This way we can select the same object multiple times, so our dataset can have multiple copies of the same object.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-with-replacement?u=76281980&t=98)** As we don't alter the original dataset, we can continue picking elements and the new dataset can be smaller than the original, the same size, or even bigger than the original. As we can see, selections are not affected by the previous choices. There is one 10th or 10% [[Probability]] we'll pick object one, and when we return it back to the original dataset, we again have 10% probability of picking object one. So the probability of selecting any particular object remains the same in the future draws. The most important application of sampling with replacement in ML is bootstrapping, which we'll soon explore in that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Jetpack Compose|Compose]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** swr (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Selection without replacement](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-without-replacement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-without-replacement?u=76281980&t=0)** - [Instructor] Let's look at another way we can collect the samples. We will use the previous example with 10 objects with assigned numbers from zero to nine, but this time, we will randomly select one object, for example, the object with the number one, from the original dataset and place it in the new dataset. That way, the original dataset has one less object, and we repeat the process with the object with the number three and then object with the number six. We call this type of sampling the selection without replacement, or shorter, SWOR. The easiest way you can imagine this is by thinking about playing a card game. Every time we deal cards, they aren't in the original pack of cards, and we cannot give them again. The selection without replacement has the following properties: we can select an element only once after we remove it from the original dataset. The new dataset can be smaller than the original dataset or the same size. It cannot be larger than the original dataset. Element choices are dependent. Meaning, if we select one of 10 elements, then we have available only one of nine elements. Therefore, selection without replacement gives us way fewer possibilities to collect samples than selection with replacement. It is used in model validation procedures. For example, train test split procedure and cross-validation.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/selection-without-replacement?u=76281980&t=95)** The train test split procedure consists of splitting the original dataset into two parts: a training set and a testing set. For example, by using selection without replacement, we randomly select 80% of the dataset and put it in the training set. We put the [[Representational State Transfer (REST)|rest]], 20%, of the dataset into the testing set. The cross-validation method has two main steps: splitting the data into subsets that we call faults and rotating the training and validation among them. Now that we have learned the two [[Algorithms]] to collect samples, we'll move on to their practical application called bootstrapping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Algorithms]] (1)
> **Analogies:** for example (3), imagine (1)
> **Env Vars:** swor (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [Bootstrapping](https://www.linkedin.com/learning/machine-learning-foundations-statistics/bootstrapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/bootstrapping?u=76281980&t=0)** - [Instructor] Let's think of a scenario. Suppose we want to calculate the average number of years of experience of 100,000 people working in an IT industry. The first approach would be conducting a survey of 100,000 people and asking for their number of experience in the industry and then calculating the mean experience. Another approach would be to answer that question by extracting a representative subset of this dataset and conducting this survey on 1,000 people. So we find the number of years of experience for a sample of 1,000 people and hope that the mean of experience of the sample is close to the mean of the experience of the population. Let's simplify our example further. Imagine our population has only 100 elements, and we create a sample of 10 elements from the population. We could measure the mean of the sample set, let's say we got 2.7, and then use this mean as an estimate for the mean of the population, and conclude it's between 2.7 and 3.1. What we would like to measure is how confident we are that the value is in that range. We can accomplish that by using bootstrapping. Bootstrapping involves two major steps. Creating a sample set from the population using selection without replacement and then resampling the sample set to make a new set by using selection with replacement.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-statistics/bootstrapping?u=76281980&t=95)** We call these two steps bootstraps. Let's see it in more detail as an example. First, we start with a population of 10 elements. Then we make three sample sets of four elements from the population using sampling without replacement. As we randomly extracted four elements using sampling without replacement, we choose some of the elements multiple times. We then calculate the mean for each bootstrap. Next, we create bootstraps from that sample set using sampling with replacement. Our goal is to build bootstraps that have the same size as the sample sets, in our case, four elements. It is important to remember that the sample size must be small, and we should repeat the process multiple times to test the accuracy of ML model. Through the implementation of the bootstrapping method, machine learning models are rigorously tested with various sample data points to ensure their accuracy for independent data points.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Versions:** 2.7 (2), 3.1 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 6. Linear Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [Independent and dependent variables](https://www.linkedin.com/learning/machine-learning-foundations-statistics/independent-and-dependent-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/independent-and-dependent-variables?u=76281980&t=0)** - [Instructor] Imagine you're working on a clinical trial at a university about the effects on exercise on sleep patterns. You're trying to see whether the amount of physical activity affects sleep quality. So participants have different amounts of physical activity on different days and then we measure how many hours of quality sleep the participant had. From the chart, we can observe that the higher amount of exercise corresponds to higher number of quality sleep per night. What can you conclude by looking at the following chart? That's right, by increasing the minutes of exercise, we improve the quality of sleep which means we can draw a causal relationship. We will call the amount of exercise the independent variable as it is not dependent on the other variable. The other variable, sleep quality depends on the amount of exercise. In machine learning, when we are designing a statistical model, we have an outcome that is dependent variable. In our case is the sleep duration we denoted with Y and replace it on the vertical axis of the plot. The other name for the independent variable in machine learning is a feature and we usually have numerous features that predict the outcome. We usually denoted with X and place it on a horizontal axis. In our case, it's only one feature, the physical activity lever
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-statistics/independent-and-dependent-variables?u=76281980&t=92)** or amount of exercise in minutes and we use it to predict the outcome. That way we can put features and outcome in ML model and examine if there's a statistically significant relationship. The way to do this is to adjust the features so we can measure the changes in the dependent variable. Now that we understand the role of independent and independent variables in machine learning, we can continue exploring their importance in [[Linear Regression]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Linear regression for continuous values](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-regression-for-continuous-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-regression-for-continuous-values?u=76281980&t=0)** - [Instructor] One of the most taxing problems in every industry is how to retain variable employees. The main concern of every employee is the salary they receive. A machine learning engineer salary usually depends on the number of years of experience working in a field. The dependent variable is salary and the independent variable is years of experience. We could conclude that there is a causal relationship between them. The more years of experience an engineer has, it is more likely that he has a higher salary. The way to explore the relationship between dependent and independent variables is by fitting a line through observed data points. That technique is called [[Linear Regression]]. It is defined as a linear regression is a data analysis technique used to predict the relationship between two or more variables. So we fit a straight line to observe data and try to demonstrate a linear relationship between variables so we can make predictions about new data. For example, we could have a sample of 10 machine learning engineers and we want to study the relationship between the years of experience and salary. If we plot this data set, our graph could look like this. We can spot a linear correlation, which means if we increase the number of years of experience, the salary increases as well and the same works in the opposite direction.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-regression-for-continuous-values?u=76281980&t=94)** If we decrease the years, the salary decreases. Some benefits of these techniques are it allows us to make predictions of the new data. For example, we don't have an ML engineer with 20 years of experience but we could look at the graph and predict her salary. We can analyze different variables for possible relationships and create hypotheses about them. One thing to be careful about is real life data is noisy and usually won't follow straight line, so there will be an error where points will fall below or above the line. So the best approach is to make predictions inside the range of the data we have, in our case, about the salaries of ML engineers under 10 years of experience. For example, we could predict that an ML engineer with three and a half years of experience has a salary of $90,000.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2)
> **Definitions:** is a  (2), is called (1), defined as (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Fitting a line](https://www.linkedin.com/learning/machine-learning-foundations-statistics/fitting-a-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/fitting-a-line?u=76281980&t=0)** - [Instructor] When we covered [[Linear Regression]], I didn't mention two important equations, now it's time to explore them. The linear regression model is an equation that describes a linear relationship. The equation that describes the straight line is y equals mx plus b, and similar to that, our equation which describes the linear equation model is y hat equals beta zero, plus beta one x one. Where beta zero is y-intercept, or value where the line intersects the y-axis, meaning x is equal to zero. And beta one is the slope or the size of the relationship. The beta one shows us the positive or negative relationship between the independent and dependent variables. x represents the value for the independent variable. So to get the predicted value for the dependent variable, y hat, we have to plug the value x in our model. And now when we look at the graph, the point P on the graph shows us the predicted value of y hat at x. We can also represent a linear regression model with the following formula, y equals beta zero plus beta one x one plus epsilon, where the sample points aren't on the line. In this second formula, y represents the real value for the dependent variable at point x and epsilon represents the error caused by the difference between the real and predicted values.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-statistics/fitting-a-line?u=76281980&t=96)** The third important equation is called a simple linear regression equation. It is indeed a simple equation, y one hat equals b zero plus b one x one. y one hat is the estimated or predicted value. b zero is the estimate of the regression constant beta zero. And b one is the estimate of the beta one. And x one is the sample data for the independent variable. We'll soon see that error is important because we use it to find the line that best fits through the points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (4)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Linear least squares](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-least-squares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-least-squares?u=76281980&t=0)** - [Instructor] To achieve the most precise line that reflects the provided sample points, we utilize the highly effective technique of linear least squares, also known as the least squared error. This method is done simply by squaring all the errors or residuals, adding all of them, and minimizing the sum. This can sound daunting at first, but you'll discover it is straightforward when we explore it step-by-step. We can benefit from the least squared error as we can predict the outcomes based on existing data set and clear outliers in our data. Let's look at the following example. We have these x and y values that represent how many bug fixes software developers solve if they invest some number of hours. So x values represent the hours, and y values represent bug fixes. And we visualize them using a scatter plot. We want to use x to predict y. First, we have to find the regression line of y on x. We can express it with the standard formula: y equals ax plus b. The way to do this is to calculate values a and b. Now, let's figure out a. We have to calculate the mean of x and y. We can do that by summing all the values and dividing them by the total amount. So for the mean of x, we get four, and for the mean of y, we get seven. Next, we calculate the difference between x values and x mean, and we get,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-statistics/linear-least-squares?u=76281980&t=96)** and the same for the y values, and we get. And we have to calculate the following sums. And we get the sum 53, and the sum of the squared errors, we get 28. And finally, when we divide those two sums, we get our a. That is 53 divided by 28. That is equal to 1.89. We'll get our b from. So our equation is the following: seven equals 1.89 multiplied by four plus b. And b is equal to minus 0.56. And our final formula for regression equation is: y equals 1.89x minus 0.56. And we can draw our regression line. We could continue this process to find the least squared error, but we won't do this manually. We have gone through the process to understand that we can perceive the regression as the line we can use to model the sample points and make predictions. We can find the best line by minimizing the sum of the squared errors. Understanding the importance of squaring the errors or residuals cannot be overstated. This method eliminates negative values and provides more emphasis on outliers, making it a crucial step in the analysis process.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Versions:** 1.89 (2), 0.56 (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-foundations-statistics/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-statistics/next-steps?u=76281980&t=0)** - [Instructor] We are done. Congratulations. You've completed part four of Machine Learning Foundation Math Courses. If you haven't taken my previous free Machine Learning Foundation Courses, I encourage you to take them. So now you're wondering what's next. Your machine learning journey isn't complete. Perhaps you can check out the other courses in the Machine Learning Foundation Series or take NumPy Essential Training Courses. If any of these sound interesting, you can follow me here on [[LinkedIn]] for more ML content. I really hope you can make the most of the skills you've learned. I wish you all the best as you continue growing and expanding your machine learning knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Statistical Analysis
- Artificial Intelligence (AI)

## Path Context

### In [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
← [[Machine Learning Foundations- Probability]] | **5 of 6** | [[Built-in Machine Learning in the Wolfram Language]] →

### In [[Foundational Math for Machine Learning]]
← [[Machine Learning Foundations- Probability]] | **4 of 4**

## Part of

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]

## Appears In

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
- [[Foundational Math for Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)