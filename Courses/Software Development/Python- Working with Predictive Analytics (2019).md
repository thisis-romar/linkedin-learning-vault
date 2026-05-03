---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: python-working-with-predictive-analytics-2019
url: "https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019"
duration_minutes: 77
duration: 1h 17m
level: Advanced
updated: 8/12/2019
learners: 229277
skills:
  - Python (Programming Language)
  - Predictive Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG3bGexV7b4AA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134533264?e=2147483647&amp;v=beta&amp;t=vjpaM5PUTUUEblsVs0IGP6vPzfLmqaVGfwB2Uh9D3zw"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
prev_courses:
  - '[[Advanced Python- Working with Databases]]'
next_courses:
  - '[[Level Up- Advanced Python]]'
path_nav: '[{"path":"Master Your Python Skills","position":9,"total":11,"prev":"Advanced Python- Working with Databases","next":"Level Up- Advanced Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/predictive-analytics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python-%20Working%20with%20Predictive%20Analytics%20(2019).md)

![Python: Working with Predictive Analytics (2019)](https://media.licdn.com/dms/image/v2/C4E0DAQG3bGexV7b4AA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134533264?e=2147483647&amp;v=beta&amp;t=vjpaM5PUTUUEblsVs0IGP6vPzfLmqaVGfwB2Uh9D3zw)

# Python: Working with Predictive Analytics (2019)

> Data can tell many stories: where it came from and where it’s going. Predictive analytics gives programmers a tool to tell stories about the future: to extract usable information and make accurate predictions. These predictions, in turn, allow business to make more informed, impactful decisions. Join Isil Berkun, data scientist, to explore predictive analytics with Python. Discover how to prepare 

> [LinkedIn Learning](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019) | 1h 17m | Advanced | 229K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Predict data in Python](#predict-data-in-python)
  - [Road map](#road-map)
- [**1. Data Preprocessing**](#1-data-preprocessing) (6 videos)
  - [Differentiate data types](#differentiate-data-types)
  - [Python libraries and data import](#python-libraries-and-data-import)
  - [Handling missing values](#handling-missing-values)
  - [Convert categorical data into numbers](#convert-categorical-data-into-numbers)
  - [Divide the data into test and train](#divide-the-data-into-test-and-train)
  - [Feature scaling](#feature-scaling)
- [**2. Prediction Models**](#2-prediction-models) (10 videos)
  - [Introduction to predictive models](#introduction-to-predictive-models)
  - [Linear regression](#linear-regression)
  - [Polynomial regression](#polynomial-regression)
  - [Support Vector Regression (SVR)](#support-vector-regression-svr)
  - [Decision tree regression](#decision-tree-regression)
  - [Random forest regression](#random-forest-regression)
  - [Evaluation of predictive models](#evaluation-of-predictive-models)
  - [Hyperparameter optimization](#hyperparameter-optimization)
  - [Challenge: Hyperparameter optimization](#challenge-hyperparameter-optimization)
  - [Solution: Hyperparameter optimization](#solution-hyperparameter-optimization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Predict data in Python](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/predict-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/predict-data-in-python?u=76281980&t=0)** - [Isil] Have you ever wondered how real estate websites come up with housing price estimates or how companies estimate their number of sales for the next product launch or how insurance companies predict healthcare costs? Well, this is done through [[Predictive Analytics]]. It helps programmers efficiently extract information from data to make an informed guess, which then leads to calculated decisions and impactful actions, adding value for businesses. In this course, I'm going to show you how to use prebuilt [[Python (Programming Language)|Python]] libraries to make and evaluate predictive models for [[Decision-Making]]. You will learn how to prepare your data and know which models to use when and apply these concepts in your own work. I'm Isil Berkun, and I have been engineering data for about 15 years. Data tells us a story, where it came from and where it's going next. I invite you to join me in my [[LinkedIn]] Learning course about applying predictive analytics with the Python programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (2), [[Python (Programming Language)|Python]] (2), [[Decision-Making]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2), python (2)
> **Speakers:** - [isil] (1)

#### [Road map](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/road-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/road-map?u=76281980&t=0)** - [Instructor] Throughout this course, I use the term prediction. It's often used to refer an informed guess or opinion. In order to reach that goal, we will follow a roadmap. This roadmap is based on Cross Industry Standard Process for [[Data Mining]], or [[CRISP-DM]] for short, which is a widely used method for planning [[Data Science]] projects. In our roadmap there are six stages and I'll briefly describe what happens in each stage here. And then as you work through the course, you can see the stages in greater detail. The first stage is business understanding. It's really important to have an understanding of the problem you are trying to solve and the advantages it will bring to the table. A car without a destination cannot do much, even if it's a Mercedes, BMW, or Tesla. So first things first. We need a destination, a goal. For example, what will be the number of sales of a product in the next quarter? Or what's the average number of days a used car stays on the market in Oregon? Before working on a project, define your goal. Next, data understanding. You must be familiar with your data before you can work with it. If you do not have enough data for this problem, making the right plan to collect the right data is the key here. After that, understanding the types of data is key. So, you know how to process it for your predictions. Then [[Data Preparation]].
>
> **[1:35](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/road-map?u=76281980&t=95)** In this stage, it's important to make sure the data is able to processed by the prediction models. You might prepare data by handling missing values, processing the outliers, and applying normalization or standardization techniques. And finally turning categorical data into numerical data is needed, since most models only accept numerical data. Next is the modeling stage. This is when all your hard work can be put to work by making the predictions. You divide the data into test and train. Use training data to train the model and then use the test data to evaluate the model's success score. Evaluation is the next step and this is testing to see if the model does a good job using the test data. There are different evaluation methods you can use to predict the success of the model. Sometimes evaluation helps you decide that your model isn't successful. In this case, you would move back to the modeling stage. Many times in this process you may find yourself moving back and forth between modeling and evaluation stages. Finally, the last stage is deployment. All your hard work can be deployed because you found the successful model to solve your problem. A lot of the times this map is not a straight one line trail. We will have a lot of loops back and forth, especially in the evaluation and modeling parts where we will have to go back and improve the prediction in order to achieve a higher evaluation score.
>
> **[3:10](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/road-map?u=76281980&t=190)** Keep in mind, evaluation metrics are helpful, but at the end of the day there is also a human aspect, subject matter expert opinion, which needs to be taken into account before making any major final assessment. So if you are ready, let's start our journey on this prediction trail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (1), [[CRISP-DM]] (1), [[Data Science]] (1), [[Data Preparation]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** crisp (1), bmw (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 1. Data Preprocessing

[↑ Back to Table of Contents](#table-of-contents)

#### [Differentiate data types](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/differentiate-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/differentiate-data-types?u=76281980&t=0)** - [Narrator] In order to make good predictions, you need to understand the types of data we are working with. Looking at our roadmap, we are starting the Data Understanding step. Data can be either numerical or categorical. Numerical data can be expressed as an interval or as a ratio. Categorical data can be broken down as nominal or ordinal. I'll explain each of these with an example. Let's say we own a landscaping business, and we need to gather data on all the different locations we work. In order for our employees to know how much tree removing equipment to take with them, we need to know how many trees are at each location. One home with a small yard may have three trees, and another larger home might have eight trees. This is the numerical data. We also need to know where each place is located. For this data, we need information like street or the city. This is the categorical data. Starting with the first type of categorical data, let's discuss the nominal scale. For our landscaping business data, let's say we have data on what the exterior color is for each house, blue, red, and green. In a nominal scale, we can only compare if the data is equal or not equal. We cannot order, add or subtract, or multiply or divide nominal data,
>
> **[1:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/differentiate-data-types?u=76281980&t=94)** like blue is not larger than red, or green cannot be divided into blue. Categorical data can be on an ordinal scale, and for this, maybe we have the addresses of each house. Door numbers can be 1210, 1211, and 1212, and so forth. In this case, we can decide if the values are the same or not. We can order the houses by their numbers, but we cannot add or subtract, or multiply or divide the ordinal data. Numerical data on the other hand can be expressed as an interval or ratio. Let's start with the interval scale. In our houses, maybe we need to know the temperature readings at each home to know what kinds of plants will work there. Our homes can be 23, 24, and minus three degrees Celsius. We can decide if these values are the same or not, we can order the houses by temperature, and we can add, subtract the temperature. For example, the red house is 27 degrees Celsius warmer than the green one. But, interval scale does not have a true zero point. For example, zero degrees Celsius is still a temperature reading. It is not the absence of temperature. We cannot multiply or divide this data with meaning. Let's look at the other class of numerical data, which is ratio.
>
> **[3:06](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/differentiate-data-types?u=76281980&t=186)** Ratio is very similar to the interval scale, with the difference that it has a true zero point. This scale is commonly used for values that are measured in numbers, such as length, height, weight, or monetary values like cost and revenue. For example, each of our houses has a square footage, but due to the true zero point property of ratio scale, it doesn't make sense to say a house has minus 400 square feet. We can do all the operations for the ratio data. We can make equal, unequal comparison, we can order them from the largest to the smallest home, we can add and subtract, and multiply and divide this ratio scale. In this chart, we see a summary of the mathematical operations we can perform with each data type. Remember the interval scale example where we had data of temperature readings at each house? Well, yes, we can compare this data, like one house's temperature is not equal to another one, and yes, we can determine if one house is warmer than another house. And yes, we can add or subtract them, and say that one house is 27 degrees warmer than the other house. But, interval scale does not make sense for us to multiply or divide this data, and have data that will help us. When working with prediction models, it's important for you to know that they cannot process categorical data.
>
> **[4:40](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/differentiate-data-types?u=76281980&t=280)** They need numbers. So, in order to work with [[Predictive Analytics]], we will need to find ways to convert categorical data into numerical data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (3), similar to (1), such as (1)
> **Speakers:** - [narrator] (1)

#### [Python libraries and data import](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/python-libraries-and-data-import?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/python-libraries-and-data-import?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] libraries are collections of functions and methods that allow you to perform actions without writing the code from scratch. It's a time saver so you aren't writing the same code over and over. Libraries are especially important when we are working with [[Predictive Analytics]], as it will make life easier with pre-built functions. Adjusting the predictive model settings will be very user friendly. Using the libraries is important because it will come with built-in functions We can think of them like the tools, we are adding to our tool belt. For example, when we go camping, we can either bring an already built knife or we can build a knife ourselves, at the campground, using the resources from mother nature. Both will work, one will be faster. To use them, all we have to do is install and then hold the library once, using the import function and use it in your code as much as you need. Throughout this course, we are going to use Spyder to write and execute our code. It's completely free and part of the Anaconda Python Distribution package, which can be downloaded here. Select your operating system and the latest Python 3 version available. Once you have it downloaded and installed, there are three main parts of Spyder. They are the code editor, on the left side, where we write the code. The variable explorer, where we see the variables, on the upper right side
>
> **[1:35](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/python-libraries-and-data-import?u=76281980&t=95)** and the Python console, where were can see the printed items or type line by line code. The most commonly used libraries are: [[Pandas (Software)|pandas]], which gives you [[Data Structures]] and data analysis tools, NumPy, which provides computing tools with array objects, scikit-learn, which is the data pre-processing and prediction library, Matplotlib, which is the plotting tool library and Seaborn, which is data visualization library. These already come pre-installed with Anaconda. If you need to install any library, that does not exist in your system, open the terminal and command window and write pip install library name. Let's open the Spyder IDE now and start importing the libraries. Let's import pandas first. Type import pandas as ipd. Next, lets type import numpy as np. And notice that I have used shorter names here, such as, pd for pandas and np for numpy in order not to write the full library name each and every time. Let's keep typing to import more libraries. From sklearn, lets type model selection and import train and test split. And lets continue sklearn.impute and import SimpleImputer.
>
> **[3:10](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/python-libraries-and-data-import?u=76281980&t=190)** And lets also import matplotlib .pyplot as plt.
>
> **[3:21](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/python-libraries-and-data-import?u=76281980&t=201)** I found this data set at [Kaggle.com](https://Kaggle.com), it's a great resource to find and publish datasets and I encourage you to check it out here. I got the data file, we will work with in this course and I made a few modifications to the data, so that it contains, five missing values from the bmi column. So back to our code. We will load the dataset, into Python now using the pd.reads csv command. So data = pd.read_csv and we will tell it where the data file is which is the datasets folder and the name is insurance.csv. Let's now print the first 15 lines of the code. Data.head and give it how many lines of the code do you need. Then, we will go here, and click Run and to see the console better, I'm going to drag this. Here is our 15 lines of data. Python libraries will be our bread and butter during this course. It saves us time from rewriting the codes from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Pandas (Software)|Pandas]] (4), [[Predictive Analytics]] (1), [[Data Structures]] (1)
> **CLI Commands:** python (6), make (1), pip (1), find (1)
> **Tools:** anaconda (2), terminal (1)
> **Prerequisites:** install (3)
> **UI Navigation:** open the (2)
> **Analogies:** for example (1), such as (1)
> **File Paths:** insurance.csv (1)
> **Code Identifiers:** read_csv (1)

#### [Handling missing values](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/handling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/handling-missing-values?u=76281980&t=0)** - [Instructor] Looking at our roadmap, we scratch the surface of data understanding by looking at the data types in the previous videos. We will now start the [[Data Preparation]] step. It's 80% of what [[Data Science]] is. As they say, "Garbage in, garbage out," if not careful during the data prep. In real life, we seldom have completely full data sets to work with. In the [[Python (Programming Language)|Python]] world, missing values are represented as NaN, which is "not a number". Most prediction methods cannot work with missing data, thus, we need to fix the problem of missing values. We have quite a few methods to handle this. Three options we will mention here are first, drop the entire column where the NaN values exist. Secondly, drop the rows with NaN values. And finally, fill in the NaN values. There's no right answer for every data set. One or the other may be appropriate, depending on the conditions. Let's open the Begin file in Spyder. Let's look first how many missing values each column has. For that, let's type count_nan is equal to data.isnull().sum()
>
> **[1:19](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/handling-missing-values?u=76281980&t=79)** Then, we will print the count_nan values where the count_nan values are larger than zero. Let's click run, and we will see that we are missing five values from the bmi column as we can see in the console. So this time we will be filling in NaN values with the mean value of the bmi column, so let's do that. data['bmi'].fillna And this is where we specify what are we filling in the missing values with. In this case, we are filling it with the mean value. And inplace equals to true. When I say inplace equals to true, it will make the changes on the data frame. Okay, let's select this cell. Right click and run cell. So we just filled in the values. To make sure, we will do the same thing again. We will say count_nan = data.isnull and .sum() to check if we have any missing values left. Then we will print(count_nan) where count_nan is larger than zero. Let's hit run, and you will see that we have zero missing values. As I've mentioned earlier, there are quite a few other methods to fill in the NaN values. In fact, this is a very extensive topic which can be studied as its own class. Please review the Finish_ visualize version of the code,
>
> **[2:55](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/handling-missing-values?u=76281980&t=175)** to learn more about the other methods to drop or fill in the NaN values. Let's open it up now, and here you may see the other methods to fill in the NaN values. So here in the Finish_visualize code, we have other methods to handle the missing values. A picture is worth a thousand words. After we've filled in the missing values, it's important to visualize the data we are working with in order to absorb the data quickly and understand the next steps for making good predictions. Some examples of the next steps may include removal of outliers and finding trends and so on. Let's run the code and enlarge the console to see the visualization. Let's scroll up to the beginning of the visualization. Let's first see the distribution of the charges. The response variable, as we see, is right skewed. Let's scroll down to see the counterplots and we see that we have a lot smaller number of smokers versus non-smokers. And when we scroll down, then we see the pair plots. And in the pair plots, in the lower left corner, age versus charges, it seems to have a good correlation with layers. Let's look at this a little bit more closely. From the linear model plot, we can see that smokers clearly do have higher charges. Let's scroll down to see the correlation matrix. Looking at the correlation matrix, we can say that the biggest correlation is with age with .3 on the lower left corner. Handling missing values is a must,
>
> **[4:30](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/handling-missing-values?u=76281980&t=270)** as prediction models require full data sets. There are three main methods for missing value fix. We can drop the entire column, drop the rows of the NaN, or we can fill in the NaN. Looking at the data visually, also helps us gain insight.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Data Science]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** count_nan (6)
> **UI Navigation:** scroll down (3), open the (1), scroll up (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Convert categorical data into numbers](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980&t=0)** - [Instructor] We are still at the [[Data Preparation]] step in our [[Predictive Analytics]] Roadmap. We need to convert categorical data into numbers, because prediction models only accept numerical data. We have two ways to handle this. One is label encoding, the other way is one hot encoding. Label encoding works well if we have two distinct values. One hot encoding works well if we have three or more distinct values. In our insurance data set we used before, we have two distinct values for smoker, yes or no. Which means we can handle with label encoder by replacing yes with one, and no with zero. Now, let's look at what happens if we have more than two distinct values. For example, colors. Blue, red and green. When we applied label encoding here, we end up having numbers as zero, one, and two. And in this case, two is larger than zero, which means green is larger than blue. We cannot make such correlation between categorical values, thus we need another method. One hot encoding is the saver here. Unlike the label encoder, we are adding new columns here labeled as the categorical data distinct values. In this case, blue, red, and green. We place one where we satisfy the presence of that color, and zero where we don't. This shows examples of how the [[Pandas (Software)|pandas]] and sklearn [[Python (Programming Language)|Python]] libraries handle label encoding and one hot encoding. What about code?
>
> **[1:35](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980&t=95)** Let's apply what we learned so far to Python code using sklearn library. Let's open the Begin file. In our Begin file for this video, we will scroll down and we will start by creating ndarrays for label encoding with sklearn library. You will see that we have already created sex and smoker here. Then, we create a label encoder function for sex. The goal is to map each category to a different integer. We then fit and transform this function to sex. Let's run this code, and we will see that we have a mapping, as female will be encoded to zero, and male will be equal to one. And the result of variable for sex is as seen here in the console. Let's now repeat label encoding for smoker as well. First, we will define the label encoder, here. And then, we will fit and transform that for smoker. Let's put that into a data frame using the Pandas library as pd.DataFrame and then you've got a (smoker). Then let's have a name for our column, which is smoker.columns will be = to smoker Let's also define a mapping, so we can know about the assignments. Smoker yes to one, no to zero and so on. Le.classes ...
>
> **[3:12](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980&t=192)** and le.transform ... and le.classes And let's have a print line for sklearn label encoder result for smoker. Sklearn label encoder results for smoker. Sorry! And print label encoder smoker mapping. And then we will print the first 10 rows. And let's print the first 10 rows for the smoker. Let's go ahead and run this. And now, we will see the mapping. No will be mapped to zero, and yes will be mapped to one. And this is the first 10 rows for smoker. Finally, we will apply one hot encoding for region. Let's start with creating ndarray. Region will be equal to data.iloc Now we will create a one hot encoder function as ohe. That will be OneHotEncoder. And let's do the fitting and transformation here. Region equals to one hot encoder.fit_transform and we will give this as region. And let's convert this to a data frame here. pd.DataFrame and we will give that region,
>
> **[4:49](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980&t=289)** and then we will define the columns here. region.columns In this case, it will be northeast ... northwest ... southeast ... southwest. Then let's print Sklearn one hot encoder results for region.
>
> **[5:22](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/convert-categorical-data-into-numbers?u=76281980&t=322)** And let's print the first 10 rows. Okay, let's go ahead and run this. And I'm going to enlarge the console a little bit. And here we have created northeast, northwest, southeast and southwest entries here. This was one way of converting categorical data into numeric using sklearn library. We used label encoding and one hot encoding. An alternate way would be using Panda's library, which I will provide examples in the finish code for you to see. That method will use series, where as we used ndarrays for this one. As most predicted models accept numerical data as input, we need to convert categorical data into numerical data. This is how we do it in Python using label encoding and one hot encoding. And as a side note for instruction purposes, we assume that the training data set and testing data set have the same number of unique values for a given feature. In production environment, we may have different number of unique values in the unseen test data. Then, we prefer to fit the encoder function only to the training data, and only transfer the function to the test data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (2), [[Data Preparation]] (1), [[Predictive Analytics]] (1)
> **CLI Commands:** python (3), make (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Code Identifiers:** fit_transform (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Divide the data into test and train](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/divide-the-data-into-test-and-train?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/divide-the-data-into-test-and-train?u=76281980&t=0)** - [Instructor] When we look at our roadmap, we are still in the [[Data Preparation]] step. We need to divide the data into what's known as train and test. The training set contains a known output and the model learns on this data. We have the test dataset in order to test our model's prediction. Now all the data is numerical. Imagine our data now looks like separate wooden blocks stacked up as columns, like individual data frames. Then stacking multiple data frames together gives us a final data frame. In some cases, we may want to reduce the dimensions from the data to reduce process time and increase efficiency of the model, which is called dimensionality reduction. We will not talk about this concept in this course, but it's good to know this is something you can use, especially if your data has many features and comparatively few training samples. Now that we've put together the independent variables and assigned the response, which is a dependent variable, it's time to divide the data into test and train. Well we just put the data together, why do we need to split it? The training data set is the initial data set used to train a prediction model. The test data set however, is used to assess how well our prediction model was trained. Imagine we are in line at a fast food restaurant and the next in line is a six year old kid. You have a pretty good idea that kid will order from the kid's menu. While this guess was a result of different samples you have witnessed in the past,
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/divide-the-data-into-test-and-train?u=76281980&t=93)** which is the training data which created a prediction model in your brain. Test data on the other hand, that six year old in the line, is a new data different from the training data which is used to test the success of the prediction model. In this figure, we see how data is split into test and train. The common division percentages are two thirds for training and one third for test data. Let's now go and look at this in [[Python (Programming Language)|Python]]. Looking at our initial numerical variables first, they are age, BMI, and children. So X underscore num will be equal to data age, BMI, and children. We will add the encoded data we prepared earlier, which are region, sex, and smoker to X_num. We will concatenate the data and call it X_final. So X_final will be equal to pd.concat and x_num, sex, smoker, region,
>
> **[2:44](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/divide-the-data-into-test-and-train?u=76281980&t=164)** and access will be equal to one. We will then call the response variable charges from the data set and assign the variable name Y_final. So Y_final will be equal to data charges. Now let's divide the data into train and test in Python. We will use the SK Learn model selection library. We will assign the X_train, X_test, Y_train, and Y_test respectively. We will provide a test size. Here in this case we will use point 33. So X_train, X_test, Y_train, and Y_test. We will be train_test_split and we will define what the X is. In this case it's X_final and then Y is the Y_final and test size is zero point 33 and random_state will be equal to zero. Let's go ahead and run this. This is how we combine all of our independent variables and define them as X. We have assigned the response, the dependent variable, to Y. It's important that you don't use the test data for training your model because we want the model to perform well on the unseen test data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Preparation]] (1)
> **Definitions:** is a  (3), known as (1), is called (1)
> **Code Identifiers:** x_num (1), train_test_split (1), random_state (1)
> **CLI Commands:** python (2)
> **Env Vars:** bmi (2)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)

#### [Feature scaling](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=0)** - [Instructor] On our road map, we're are still preparing our data. We need to apply feature scaling to our data, mainly to prevent the features with larger magnitudes from dominating the prediction model. Lets go back to the dinosaurs age and imagine we will need to count the number of living species in an island from top down, with a drone. When we look down from a higher distance bigger animals like dinosaurs, will be quite visible. However, it will be rather difficult to count the smaller animals, like ants. In order to have a fair glass to see all variables from the same lands, we will apply some methods. This way the prediction models will preform better. Two methods we will discuss here are called normalization and standardization. These methods are commonly applied to the variables X, and scaling the target values Y, is commonly not required. Let us start with the first method, normalization. Also referred as min max scaling. Subtract the minimum value from the number and divide by maximum minus minimum. Values will be rescaled to be between zero and one, unless we define a different range using the feature range hyper parameter. This method is effected from the outliers. In the other method, standardization, we first subtract the mean value from the number and divide by the standard deviation. In this case we do not have a specific range we are
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=93)** staying in, unlike the case with the normalization. This method is less effected by the outliers. Lets do feature scaling in [[Python (Programming Language)|Python]]. For example, suppose we are looking at the age of college students. We have 20 people as listed in this [[Microsoft Excel|Excel]] file. Lets calculate the normalized and standardized values. Lets start with calculating the mean, minimum, maximum, and the standard deviation. We will then use these values in the formula. For mean, lets create a formula using the average function and lets select the ages of the students here. And for minimum we will do the same thing. And lets do the maximum. And finally, lets do the standard deviation here. Lets start with the normalized values. So for that, the equation will be X minus the minimum value.
>
> **[2:47](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=167)** Sense I want that to be a constant, I'm going to introduce a dollar sign here, divided by the maximum minus the minimum. So these are also will be constant values. Here the dollar sign goes. And we will apply this to the entire data set. So this is our normalized value. As you can see, our values are ranging from zero to one. Lets calculate the standard values. The formula is X, which is the student ages minus the mean value. Again, mean value is a constant, so put the dollar sign right here. And then we will divide this with the standard deviation. Which is again a constant. Okay, then we will apply this to the entire data set. Lets do the feature scaling in Python. Starting with the begin file, lets scroll down. And lets start coding the normalized values. So we will be say N scaler is equal to MinMaxScaler(), and then X train will be equal to n_scaler.fit_transform(X_train.astype(np.float).
>
> **[4:26](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=266)** Lets transform this to the X test data. X_test = n_scaler.transform, notice I'm not doing the fit anymore here like I did in the X_train, I'm just doing the transform, X_test.astype(np.float).
>
> **[4:51](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=291)** And here, as you see that we have an error because the parentheses are not matching. We may come across these kind of errors as we go, so we will fix that by adding one parenthesis. And as you see, the red sign disappeared. So this is how we use the normalization in Python. So lets go ahead and look at our values, and our values are now normalized. So lets do the standard scaler now. Sense we have normalized our data, I would like to run the cell 156, to bring back our original data. Lets check it, and these are the values before normalization. So we can start the standard scaler with the fresh dataset. Lets define s_scaler = StandardScaler this time, and X_train = s_scaler, again we are doing the fit_transform
>
> **[6:01](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=361)** on the train data set, X_train.astype(np.float).
>
> **[6:13](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=373)** And lets transform this to the X_test data, s_scaler.transfor(X_test.astype(np.float).
>
> **[6:28](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/feature-scaling?u=76281980&t=388)** Lets run this, and now we do have the standardized values for our data. This is how we standardize on, normalize the data. We need to do that as some prediction models require feature scaling in order to preform well. With that we achieved two things. One, we are reducing the effect of the features with larger scale, to play a more dominant role in the model. And two, we dilute the biases coming from the outliers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (1)
> **Code Identifiers:** s_scaler (3), n_scaler (2), fit_transform (2)
> **CLI Commands:** python (3)
> **UI Navigation:** select the (1), scroll down (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Prediction Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to predictive models](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/introduction-to-predictive-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/introduction-to-predictive-models?u=76281980&t=0)** - [Instructor] With our prepared data now we can start training the prediction models. Data prep part is where most engineers and data scientists spend the majority of their time and effort. So be sure to celebrate once you've finished preparing your data. Let's take a step back and talk about what prediction is, what the common use cases and examples are, and look at some of the most used models. First, let's start from the beginning. Machine learning models divide into three categories. First, supervised which are models with label data. Second, there's unsupervised which are the models without the labeled data. And finally, the [[Reinforcement Learning]], which is a method based on trial and error using feedback. So what are some examples of prediction? For [[Supervised Learning]], where we used labeled data, the most commonly used learning methods are regression and classification. What's the difference? The output variable in regression is numerical and the output variable for classification is categorical. Determining whether a credit card expense is fraud is considered as a classification model. Housing price estimates is a regression model. In this course I focus on the regression models. Now, what if we were working with unlabeled data? We will be working with unsupervised learning. Grouping or clustering are some of the methods used. It's a lot less controllable
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/introduction-to-predictive-models?u=76281980&t=93)** compared to supervised learning. The machine learns through observation and finds structures in data like clustering and association examples. As you can see here in the customer behavior one, grouping customers by their purchasing behavior without having prior knowledge is considered an example of clustering. And in the customer behavior two, people who buy product A also tend to buy product B is considered an example of association. Now that we've prepped the data in the prior sessions, we will create predictive models using this data. Followed by measuring each model's performance. If performance is not satisfying, we will look into ways to improve. There are quite a few models to work with. We will only cover a few commonly used ones in this course. They each have advantages and disadvantages based on the problem and the data we have. Some of the commonly used models we will be looking at includes [[Linear Regression]], polynomial regression, support vector regression, decision tree, and random forest regression. If the predicted output is a category, classification is the method to use. If the predicted output is a numeric, regression is the method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (2), [[Reinforcement Learning]] (1), [[Linear Regression]] (1)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)

#### [Linear regression](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=0)** - [Instructor] We are now at the modeling section. In this course, we cover regression models to make predictions. Let's start with simple [[Linear Regression]]. Simple linear regression is nothing but explaining the dependent variable Y with independent variable X. We will use the [[Microsoft Word|word]] variable and feature and dependent variable and target interchangeably throughout this course. Imagine you are recovering from an injury and had a doctor's appointment. They ask you to walk everyday and increase the duration of the walk gradually. Well, you started to record your step counts on the Post-it notes every day. Well, what happened to these Post-it notes which were supposed to be on the wall? No one would have expected that thunderstorm and you left the [[Windows]] open. Therefore, only half of your notes survived, 10 out of 20. Guess what, linear regression is here to save your back. Let's get to work. One way to fill in the missing data points would be taking the mean. So, looking at this graph, the distance between the data points and the mean is the error. Error on the negative side is as important as the error on the positive side. Thus, we will square and sum the error. Another way is to fit a linear regression line and measure the error as the distance between this line and the actual data points. Again, we will square and sum the error in order to prevent a negative error to cancel out the positive, and thus reduce the total error. This is simple linear regression.
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=93)** There is also multiple linear regression, where we have more than one independent variable X. Here are some ways we can predict the lost data before your next doctor's appointment. One way, we can take the mean. Let's open the [[Microsoft Excel|Excel]] file for a start. Using Excel's averaging function, I calculated the mean. We subtract the mean from each of the actual step count values, and get residuals. Take the squares off the residuals to find the squared residuals. Can we do better than just taking the mean? In order to fit a linear equation to the model, click on the scatter plot. Select Design, Add Chart Element, Trendline. Select Linear. And click OK. And now, right-click on the trendline and select Format Trendline. And select Display Equation on Chart, and select Display R-Squared Value on Chart.
>
> **[2:50](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=170)** Slope is 204.37 and the intercept is 6500.4 where it intersects to Y, and we got the R-squared as 0.9456. We will now calculate the sum of squared residuals on the linear regression model we just produced. Let's get the linear regression predictions together using the formula.
>
> **[3:29](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=209)** Then, let's take the difference from the actual data and finally, take the squares.
>
> **[3:51](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=231)** Let's calculate the sum of squared residuals for the linear prediction here.
>
> **[4:06](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=246)** As you can see, the linear model provided much lower SSR compared to using just the mean. Here, in order to make that statement, I'm comparing the value in the cell D13 and the value in G13. We will then calculate the R-squared here and see that we got to the same number Excel just produced. And, as you can see, in Excel, we reached to 0.9456 R-squared value, the same number as the Excel trendline provided. This was an example for simple linear regression. Now, let's get to the code for multiple linear regression on our data in [[Python (Programming Language)|Python]]. You will see that, in the start file, the linear regression library is already added at the top in line 21. Let's scroll down. We will first fit the function with LR equals linear regression, dot, fit, X train, Y train. And Y train prediction will be equal to LR, dot, predict, X train. And Y test predict will be equal to
>
> **[5:42](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/linear-regression?u=76281980&t=342)** LR, dot, predict, and in this case, X test. Finally, get the intercept on coefficients by printing LR, dot, coefficient, LR, dot, intercept, and LR tested score, as provided in cells 183, 184, and 185. Let's go ahead and run this. Let's enlarge the console to see it better. We can see them printed in the console on the right. The test score is about 78%. This is how we make a linear regression model in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (13), [[Microsoft Excel|Excel]] (5), [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (1), [[Windows]] (1)
> **CLI Commands:** make (3), python (2), find (1)
> **Versions:** 0.9456 (2), 204.37 (1), 6500.4 (1)
> **UI Navigation:** open the (1), click on (1), right-click (1), scroll down (1)
> **Env Vars:** ssr (1), d13 (1), g13 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Polynomial regression](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980&t=0)** - [Instructor] We are in the modeling section of the roadmap, starting to polynomial regression. In most cases, data does not contain a linear relationship, and we may need a more complex relationship to work with. We will look into polynomial regression in this session. You can use a linear model to fit nonlinear data. One way to do it is to add powers to each variable as if they were new variables, in other words, new features. Then, we will train a model on these variables. This model will be linear and is called polynomial regression. Suppose you want to calculate the bonus of the employees based on how many years of experience they have on the job. Please open the begin [[Microsoft Excel|Excel]] file. Here in this example we can see the years of experience and the bonus values. If we fit a quadratic equation here, which is shown in red, with degree equals to two, the most senior employees will receive a smaller bonus. That does not seem fair. Instead we will fit a more complex, a cubical equation, with degree equals to three, which will bring the bonus levels up with seniority, so let's do that. First we will click on the graph and select design, add chart element, trend line, more trend line options, and here we will select polynomial, and we will select a cubical polynomial. Then select display equation on chart
>
> **[1:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980&t=94)** on the lower right side.
>
> **[1:44](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980&t=104)** Let's review the features here. The first feature is the number of seniority years, second feature is the square of those years, and the third one is the cube of the years. Just by choosing the features that's shown, we reach to a point where it makes a lot more sense. After talking about the basics of the model, let's now apply a polynomial regression to our original dataset. We will open up the begin file in [[Python (Programming Language)|Python]], and let's scroll down. You will see a polynomial model with polynomial degree equal to two is already defined on line 190. Then it's fitted and transformed the X poly from X final on line 191. Then, we do a test train split. Then we apply scaling to the X data. Remember, we fit and transform the X train data, but we only transform the X test data. Then we will now fit the [[Linear Regression]] on the data. Notice that we are still fitting a linear model, but the features are polynomial here. So let's start. Poly underscore LR equals to linear regression dot fit X train and Y train.
>
> **[3:08](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980&t=188)** Then let's make our predictions. Y train pred equals to poly LR dot predict and use X train for the prediction. Now let's repeat that for the test prediction. Poly LR dot predict X test.
>
> **[3:39](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/polynomial-regression?u=76281980&t=219)** Then let's go ahead and run this, and I'm going to enlarge the console to see better. As we can see, the poly test score is around 87% with the quadratic fit. You may change the degree of the polynomial fit and apply it again to explore different scenarios. Let's keep in mind, in most examples we may end up with a lot of features, which will then bring the necessity of [[Feature Engineering]], transformation, and selection. For instance, we may need to use feature A multiplied by feature B as a new feature, and so on. There are [[Algorithms]] to automatically choose the important features. We will not cover them in this course but that's something you should keep in mind to explore the future step. We just added one more model to our analysis, polynomial regression. Degree is the key. It also affects under or over-fitting. Remember those bonus values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2), [[Microsoft Excel|Excel]] (1), [[Python (Programming Language)|Python]] (1), [[Feature Engineering]] (1), [[Algorithms]] (1)
> **UI Navigation:** open the (1), click on (1), scroll down (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** in other words (1), is called (1)
> **Warnings:** keep in mind (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Support Vector Regression (SVR)](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/support-vector-regression-svr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/support-vector-regression-svr?u=76281980&t=0)** - [Instructor] We are again in the modeling section of the roadmap. And now, let's discuss the Support Vector Regression. This is the third model out of five models I'll show you in this course. Imagine a bowling area. Left lane is allowed to use only blue and right lane is only allowed to use green balls. You and your friends just arrived to start your game in the middle lane. That middle lane is acting like a separator between the left and the right lanes. There is a linear separation here. Let's draw that bowling lane-like separation on the graph here. It's main goal is to create an optimal margin which can separate the maximum amount of data points. This method was first used for the classification problems. Then later it was also applied to regression problems to predict numerical data. The plane which separates two classes is called a hyperplane. The data points which are sitting closest to the hyperplane are called the support vectors. The dashed lines are called margins. If we do not allow any of the points to be in the margin area, it's called hard margin. If we do have a tolerance, then it's called soft margin. Sometimes data is not linearly separable and it's not as simple as drawing a line between them. In these cases, we use what's called kernel tricks to make them linearly separable. When this is the case, we project the data
>
> **[1:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/support-vector-regression-svr?u=76281980&t=94)** into a higher dimension and find a hyperplane to separate them that way. In Support Vector Regression, logic is very similar. Output is a continuous number. Goal is to minimize the error and obtain a minimum margin interval with maximum number of data points. To sum up, a few of the commonly used kernel options in Support Vector Regression are linear, RBF, poly, and exponential. They are called kernel trick or kernel functions. Then let's open up the [[Python (Programming Language)|Python]] Begin File and see the Support Vector Regressor as defined as SVR in line 214. Then, test train data is split, as you can see, on line 217. Since Support Vector Regression is sensitive to outliers, it's essential to apply scaling before using this method. Recall that the reason behind future scaling is to prevent the features with the largest range dominating the model like our ants versus dinosaurs metaphor. So first in line 220, we are defining a StandardScaler. Then, we fit and transform that StandardScaler to X_train, then we only transform that StandardScaler to X-test. Let's continue to the code and fit the SVR model now. So, SVR, Support Vector Regressor, will be equal to svr.fit X_train, and y_train.values.ravel.
>
> **[3:12](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/support-vector-regression-svr?u=76281980&t=192)** And then let's do the predictions, y_train pred equals to svr.predict X_train
>
> **[3:24](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/support-vector-regression-svr?u=76281980&t=204)** And then y_test predict equals to svr.predict, and we will give it X-test this time. Then let's run the code and print the score values. I'll enlarge the console. And, as we see the SVR test score is about 63%. This is how we view the Support Vector Regressor in Python. Note that we also use the graphics for the Support Vector Classifier for better visualization. Logic is similar in the regressor as well as the commonly used kernel functions and the application of the modeling in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3), make (1), find (1)
> **Env Vars:** svr (4), rbf (1)
> **Definitions:** is a  (2), is called (1), defined as (1)
> **Code Identifiers:** y_train (2), y_test (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Decision tree regression](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/decision-tree-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/decision-tree-regression?u=76281980&t=0)** - [Instructor] On our roadmap, we are again in the modeling section and we have two models left to discuss here. In this video, I'll explain the decision tree algorithm. This is also called Classification and Regression Trees or CART for short. Decisions, decisions, decisions. It's in our lives everyday. Suppose we are in the middle of a decision to whether or not to purchase a car, how would we approach it? We would start with defining the most important factors or features for us to help our decision. [[Decision Trees]] were first used in classification [[Algorithms]] or predicting categorical variables. A decision tree is a tree where each node represents a feature or attribute, each link or branch represents the decision also called a role and each leaf represents an outcome. Here is a decision tree example about a car purchase. Looking at the price range, if the price of a car is less than $30,000 we continue to the automatic transmission question. The car has an automatic transmission. Then, we move to the next question. Is the mileage less than 50,000? If the answer is no, then we decide not to purchase the car. If yes, the car does have less than 50,000 mileage, then we move on to the color. If we want a red car, so if the color is red we decide to purchase the car and if not, we do not purchase it.
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/decision-tree-regression?u=76281980&t=93)** Decision tree algorithms are similar to how we make decisions as humans. This course's focus is regression. So, in this example we will look at a decision regressor. Say we are trying to predict the number of days a car stays on the market. Here is a chart for the data with the mileage on the x-axis and the price on the y-axis. If we did not know the mileage what would be a guess of the average price? Let's say $25,000. So, we mark our chart with our line number one. This is called the root of the tree. At this point, we have either lower or higher than $25,000. The lower part is now a leaf and since we want to focus about 25,000 section, we will continue this branch. The second split will be if the mileage is less than 6,000 or not. So, we add a line number two in the top section. Then, we will do one more split for the price in that region being larger and smaller than $34,000 and we have a line number three. The nodes we do branch out from are called the decision nodes. After the split notice that we have four areas on the chart and four corresponding leaves. After reviewing one classifier and one regressor tree example, let's get to the code and train a decision tree regressor. In the [[Python (Programming Language)|Python]] begin file you'll see that we are calling the decision tree regressor with random state equals to two.
>
> **[3:06](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/decision-tree-regression?u=76281980&t=186)** To see that let's scroll down to the section 2-5. And here it is on line 237. You will see that we are calling the decision tree regressor with random state equals to zero. Then as usual we have a test train split and a scaling steps here. We do not have to repeat these steps each time if we have not changed the x-train, x-tests, y-train, and y-test, but we do that repetition to have a stand alone code which will be completed for each model for future use. We will fit the model and make predictions then print the results afterwards. So, let's start. We will fit the model and make predictions in the fit model section starting on line 248, then print the results in the next section. So, let's start. dt equals two, dt dot fit, x-train, y-train dot values dot ravel. Then, let's create the predictions for y-train pred which is equal to dt dot predict and let's give that x-train. And similarly y test pred equals to dt dot predict and x-test. Now, let's go ahead and run and enlarge the console
>
> **[4:42](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/decision-tree-regression?u=76281980&t=282)** to see the results. Okay, we see that our decision tree test score is about 70%, whereas our train score is almost 99%. Training result is turned out better than the test. So, the week side of decision trees are they're tendency to what's called over fit the model. So, the model cannot be generalized well enough for new data For this reason, it's not uncommon to achieve higher scores in training data and lower scores in test data. Especially when we do not have enough data. The closest modeling algorithm to the human brain is decision tree. It contains conditions or nodes, branches or edges, and decisions or leaves. It's easy for us to interpret but this algorithm is prone to over fit. In other words, memorize the data which hinders the generalization of this model to new data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (2), [[Algorithms]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (3), node (1), python (1)
> **Definitions:** is a  (3), is called (1), in other words (1)
> **Env Vars:** cart (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Random forest regression](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/random-forest-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/random-forest-regression?u=76281980&t=0)** - [Instructor] This is the last algorithm of the modeling section, random forest regressor. We are moving from the one deep tree to a forest of relatively shallow trees. There comes the wisdom of the crowd with the collective opinion of the trees as opposed to a single tree. Random forest consists of multiple [[Decision Trees]]. It's based on ensemble learning, which means multiple learning methods are working together as a team. In other words, there's more than one decision tree in the model. Thus, all these individual trees get to cast their own vote. The main difference between regression and classification trees are, in regression trees, we take the mean. And in the classification trees, we take the mode, which is the most occurring value when making a prediction. In other words, the majority voting. This is one of the strongest [[Algorithms]] among all, so what makes this strong? I'd like to introduce you to the term bagging. It's subdividing the data into smaller components, as if your grocery bag in the store was heavy and now you are dividing the groceries into multiple bags. This method divides the data into smaller samples, and creates multiple trees. And they, as a result of the smaller sample size, are now shallower. Let's apply the bagging logic to this tree. We take smaller samples from the original dataset, and apply learning models to each tree.
>
> **[1:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/random-forest-regression?u=76281980&t=94)** That way, these smaller trees are shallower than one big tree. We apply learning models to each one and finally apply aggregation, which means we take the mean, in this case, of regression. Another commonly used concept is boosting, that I would like to mention here. It's another machine learning ensemble method, primarily to reduce bias and variance. Let's apply this to the [[Python (Programming Language)|Python]] code and open up our begin file. Let's scroll down. Here on line 262, we see that we call a random forest regressor, and assign that to forest. There are a few different parameters in this regressor, such as n_estimators, criterion, et cetera. Although they require a lot more time to digest, in summary, n_estimators is the number of trees. Criterion is the feature selection criteria here. We are using the default one, so we can also not specify it and Python will still take it as mse, which is the mean squared error. n_jobs is the number of jobs to run in parallel for both fit and predict. Minus one means use all processors. After splitting and scaling, let's fit and predict the forest. So let's start fitting on line 275. So we will say, forest.fit, X_train, y_train.values.ravel,
>
> **[3:15](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/random-forest-regression?u=76281980&t=195)** and again we will create our predictions for train and test, so starting with the train, it will be equal to forest.predict, X_train, and do the similar prediction for test, that will be equal to forest.predict, X_test. Okay, now we will go ahead and run this, and enlarge the console to see the result. Here's an important take-away. Looking at our console, you can see that when we worked on the simple decision tree, our train score was great at 99%, but our test score was way lower, around 70%. But if you look at our forest test score, the models working together gave us a much higher score of around 85%. This is a big improvement. There are many more parameters in the random forest regressor, such as the max leaf nodes and more. Please see the official SK Learn website to learn more about this. I encourage you to read the regression section, but there are also many other resources for you to learn more. With ensemble learning and using methods like bagging and boosting, random forest generalized better than a single decision tree and resulted in reduced over-fitting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Decision Trees]] (1), [[Algorithms]] (1)
> **Code Identifiers:** n_estimators (2), n_jobs (1), y_train (1)
> **Definitions:** in other words (2), is a  (1)
> **CLI Commands:** python (2)
> **Analogies:** such as (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Evaluation of predictive models](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/evaluation-of-predictive-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/evaluation-of-predictive-models?u=76281980&t=0)** - [Instructor] Now that you've seen how to build a few regression models, we are moving on to the Evaluation section of our roadmap. I'm going to summarize the strengths and weaknesses of each model in this video. So far, we have used R squared as a way of measuring the success scores of the regression models. Please keep in mind that this score by itself is not enough to make decisions. It's recommended to further visualize, combine it with domain knowledge, and do further tests before making a final judgment. Now, let's take a look at each model. [[Linear Regression]] has an advantage when there's a linear relationship between the independent variables and dependent variable. However, we need to keep in mind that this may become a disadvantage when we do not have a linear relationship between the independent variables and the dependent variable. Polynomial regression can be a strong model when there's a nonlinear relationship between the independent variables and dependent variable. The degree of the polynomial regression is the key to define success here. If working with a nonoptimal degree, this may become a disadvantage. Support vector regressions shines when we build different models with different kernels in a relatively memory efficient way. A disadvantage of this model presents itself in the occurrence of outliers in the data, especially if data scaling is not done properly. Decision tree regression does not need data scaling, because it is resilient to outliers,
>
> **[1:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/evaluation-of-predictive-models?u=76281980&t=94)** and it's very intuitive to the human brain. It's simplistic nature makes this a great model to visualize, however it's very prone to overfitting, especially with smaller datasets and yields lower scores in new data. In other words, in test data. Random forest regression is based on [[Decision Trees]]. This also does not need scaling and is resilient to outliers. Compared to the simple decision tree regression, overfitting is reduced due to aggregations, such as taking the mean. Since we may end up with quite a few trees compared to decision tree, this hinders the simplistic visualization. It's important to keep in mind that in order to build a good model, we need to understand, prep, visualize, and analyze the data statistically, as well as study the relationship between variables to each other and to the target variable. Understanding the advantages and disadvantages of each model will better equip you with the knowledge of when to use which model in your [[Predictive Analytics]] journey. Finally, it's also important to note that this evaluation stage may not give you the scores you want from your model. When this happens, you can go back to the modeling stage to improve the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1), [[Decision Trees]] (1), [[Predictive Analytics]] (1)
> **Warnings:** keep in mind (3)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Hyperparameter optimization](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980&t=0)** - [Narrator] We came a long way from preparing our data, to working with the predictive models. In most cases this an iterative approach of evaluation and modeling until we reach a satisfactory result. We can find the best parameters by trial and error, but it will take a very long time. Imagine trying and evaluating a model on a very large data set by changing one parameter at a time. It would work, only if we had unlimited time. This is not the most time efficient option. Instead I want to introduce you to a new term, hyperparameter optimization. This is the technique of identifying an ideal set of parameters for a prediction algorithm, which provides the optimum performance. The algorithm learns which parameter provides us with better performance by iteratively working on a pre-defined set of parameters. For example, one method traditionally used is grid search. Let's say we have parameter A and parameter B. Sometimes we may have more or less depending on the learning model. We make a grid of the search space, evaluate each hyperparameter setting we've chosen, then, repeat in as many dimensions as needed. Some methods in addition to grid search include random search, Bayesian optimization, gradient-based optimization, evolutionary optimization, population based, and there are others as well.
>
> **[1:33](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980&t=93)** Let's open the [[Python (Programming Language)|Python]] challenge begin code from the exercise files. Scroll down, notice there's now a function called print_best_params in line 289 for making a pretty print for the optimum parameters. After the print function, test strain, split, and scaler is already provided. So now let's define a search space for svr in the dictionary in line 305. This search space includes parameters such as kernel function, degree C, and epsilon. Let's start typing. Parameter grid underscore svr equals to dictionary kernel equals to, we will give it two kernels. One is linear and the other one is poly. And we will give it degree equals to two, and we will define C values as 600, 700, 800, and 900.
>
> **[2:47](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980&t=167)** And let's define epsilon, which will include 0.0001, zero point- and then- Then, continue svr equals to GridSearchCV. SVR and the parameter grid here will be equal to the parameter grid we just defined, which is param underscore grid dot svr. And cv equals to five and verbose equals to three. It's worth while to do extra reading on them if you are interested but in a nutshell c is the penalty parameter of the error term and epsilon defines a margin of tolerance where no penalty is given to errors. Cv is cross validation and verbose means the higher it is, the more messages we will see on the spider console. And I do have a typo here so I will correct that. Now, let's fit the function using svr fit and then print the best parameter score. So, svr will be equal to svr dot fit.
>
> **[4:23](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980&t=263)** X underscore train and y-train dot values dot ravel.
>
> **[4:34](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/hyperparameter-optimization?u=76281980&t=274)** Let's go ahead and run this. Remember, grid search may take a while to finish depending on the computer so reduce the number of parameters if needed. And when we look at the results we scroll up and we see svr train's score is about 68% and test score is about 73%. We see a noticeable improvement compared to the prior result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Non-Speech:** (typing) (4)
> **CLI Commands:** find (1), make (1), python (1)
> **UI Navigation:** open the (1), scroll down (1), scroll up (1)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Code Identifiers:** print_best_params (1)
> **Env Vars:** svr (1)
> **Versions:** 0.0001 (1)

#### [Challenge: Hyperparameter optimization](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/challenge-hyperparameter-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/challenge-hyperparameter-optimization?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/challenge-hyperparameter-optimization?u=76281980&t=5)** - [Instructor] Now that you know about hyperparameter optimization, it's your turn, I have a challenge for you. In this challenge, I want you to first create a parameter grid for decision tree and random forest. Then, you will create the GridSearchCV with the grid created in step one. Finally, you will run the fit model and print out the best parameters and the test scores. To do this, remember to use the scikit-learn resource to look up your parameters. Finally, let me show you the begin file for this challenge. When you open the 210 begin, you will see that I have included the commanded out parameter grid with parameters. Let's scroll down to see that. So, here it is, starting on line 328. This isn't complete, so you will need to replace the asterisks with what you think should go there. Also, the GridSearch is provided on line 333. Good luck, and I'll meet you back at the solution video.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1), scroll down (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Hyperparameter optimization](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=0)** (funky music)
>
> **[0:06](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=6)** - [Instructor] Here is how I solved the hyperparameter optimization challenge. First, let's open the solution begin file and scroll down.
>
> **[0:19](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=19)** First, let's look at decision tree. We will start by uncommenting the parameter grid section So for that, I'm selecting four lines, starting from 328, right-click, and select Uncomment. We will create the parameter grid for decision tree. So let's start replacing the asterisks with the values. Minimum samples leaf is the minimum number of samples required to be at the leaf node. So I will add values between nine through 13 with step size of one. So let's start doing that. It will be equal to np.arrange. Nine through 13 with the step size of one. And integer means it's an integer. If integer was not given, it would infer the data type from the other input arguments. I could've also typed it as "9, 10, 11, 12" but suppose we are giving it a larger range in the future that we don't want to type each and every element. So we can use this method. Maximum depth is the maximum depth of the tree. We will give the values between four and seven with step size of one.
>
> **[1:45](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=105)** And minimum impurity decrease is a node will be split if this split induces a decrease of the impurity greater than or equal to this value. Let's assign it values of zero, one, and two.
>
> **[2:05](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=125)** Let's put these in the grid search with random state equals zero. So I will do that on line 333. First, right-click and select Uncomment. And we will be filling in, instead of asterisks, we will start typing DecisionTree and we will give it random_state=0. And we will define our parameter grid as the parameter grid we just created. Next, we will assign cv=5 and verbose=3.
>
> **[2:45](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=165)** As you can see in line 338, we already have the fit model line. And as you can see in the line 343 and below, we already have the print and score lines. So select this part of the code. Let's right-click and run this for decision tree.
>
> **[3:14](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=194)** Okay, it is finished. Please keep in mind that it may take a while dependent on the computer you are using. Let's look at the scores. So the scores of train and test are printed right here. And the best parameters are as shown. So let's repeat these steps for Random Forest. Let's select the parameter grid section, starting from line 350. Right-click and Uncomment. So the n_estimators is the number of trees in the forest. So let's give this one 20. We can always give a larger interval here, but also be mindful of the computational cost as it may get expensive. Maximum depth is the depth of each tree. We will give that values between one through 13 with the interval of two. Minimum samples split is the minimum number of samples required to split an internal node. We will give that two, which is the default value, because we need minimum two observations to consider a split, and increasing the number will increase the computational time. Minimum samples leaf is the minimum number of samples required to be at a leaf node. We will give this values between one through 15
>
> **[4:49](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=289)** with an interval of two. Next, we have bootsrap. Bootstrap is whether bootstrap samples are used when building trees. If false, the whole dataset is used to build each tree. This is the bagging concept we discussed. Remember the heavy grocery bag divided into multiple bags example? We will give true and false to investigate both options.
>
> **[5:25](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/solution-hyperparameter-optimization?u=76281980&t=325)** And finally, oob_score is whether to use out of bag samples to estimate the r squared on unseen data. We will assign this as false. We will then pass this parameter grid we just created to the grid search and create the forest. So let's uncomment the line 358. So select the line, right-click, and Uncomment. So we will start filling in the GridSearchCV. So we will type RandomForestRegressor. And assign random state to zero. Then define parameter grid as the parameter grid we just created. And cv=5 and verbose=3. Then we already have the fit model as you can see in line 361. As well as the print scores starting from line 365. So let's go ahead and run it. Let's scroll up to see the scores. And I will enlarge the console to see better. So we've got 86% for train and 89% for the test score. And these are our best parameters. So this is how we do a basic hyperparameter optimization through a grid search in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** right-click (5), select the (2), open the (1), scroll down (1), scroll up (1)
> **CLI Commands:** node (4), python (1)
> **Code Identifiers:** random_state (1), n_estimators (1), oob_score (1)
> **Prerequisites:** required to (3)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-working-with-predictive-analytics-2019/next-steps?u=76281980&t=0)** - [Isil] Congrats. You have completed the course. Thank you for the privilege of being your instructor and for surviving my metaphors. But this is just the beginning of a long and fun journey to [[Predictive Analytics]]. We scratched the surface using [[Python (Programming Language)|Python]] with regression problems and I encourage you to find a dataset at [Kaggle.com](https://Kaggle.com) and practice the steps you have learned during this class. Practice, practice, practice. Get your hands wet with as much data as you can. I highly recommend watching the data analytics and Python classes we have here at [[LinkedIn]] Learning. I also strongly recommend the book Hands On Machine Learning with Scikit-Learn and [[TensorFlow]]. Once you have a few projects completed on regression, a good next step would be to move on to classification [[Algorithms]]. Read more on our helpful scikit-learn website we referenced throughout this course. Feel free to reach out to me on [LinkedIn.com](https://LinkedIn.com) or from my tech consulting website at [ibuniversal.com](https://ibuniversal.com). See you next time and remember to have fun while exploring your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2), [[Predictive Analytics]] (1), [[TensorFlow]] (1), [[Algorithms]] (1)
> **CLI Commands:** python (2), find (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1), [linkedin.com](https://linkedin.com) (1), [ibuniversal.com](https://ibuniversal.com) (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [isil] (1)


## Instructor

- [[Isil Berkun]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Predictive Analytics

## Path Context

### In [[Master Your Python Skills]]
← [[Advanced Python- Working with Databases]] | **9 of 11** | [[Level Up- Advanced Python]] →

## Appears In

- [[Master Your Python Skills]]

## Related Courses

_Courses sharing skills:_

- [[Python- Working with Predictive Analytics]] — Python (Programming Language), Predictive Analytics
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)