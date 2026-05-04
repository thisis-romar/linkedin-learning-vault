---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-logistic-regression
url: "https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 4/29/2024
learners: 207068
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
  - Logistic Regression
exercise_files: false
github: "https://github.com/LinkedInLearning/machine-learning-with-python-logistic-regression-3211129/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHCaIAahatY6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245442931?e=2147483647&amp;v=beta&amp;t=jIdzp5-QT8j6P4PzTQgzBa-k8Qjhva10k_DgyvttfaA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop with Python for AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20with%20Python%20for%20AI%20and%20Machine%20Learning.md)'
  - '[Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)'
  - '[Machine Learning with Python Professional Certificate by Anaconda](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20with%20Python%20Professional%20Certificate%20by%20Anaconda.md)'
prev_courses:
  - '[Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md)'
  - '[Machine Learning with Python- Association Rules](Machine%20Learning%20with%20Python-%20Association%20Rules.md)'
  - '[Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md)'
next_courses:
  - '[Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md)'
  - '[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions](Machine%20Learning%20and%20AI%20Foundations-%20Producing%20Explainable%20AI%20(XAI)%20and%20Interpretable%20Machine%20Learning%20Solutions.md)'
  - '[Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md)'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":3,"total":6,"prev":"Machine Learning with Python- Decision Trees","next":"Machine Learning with Python- k-Means Clustering"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":4,"total":9,"prev":"Machine Learning with Python- Association Rules","next":"Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions"},{"path":"Machine Learning with Python Professional Certificate by Anaconda","position":4,"total":6,"prev":"Machine Learning with Python- Decision Trees","next":"Machine Learning with Python- k-Means Clustering"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/logistic-regression
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20Logistic%20Regression.md)

![Machine Learning with Python: Logistic Regression](https://media.licdn.com/dms/image/v2/D4D0DAQHCaIAahatY6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245442931?e=2147483647&amp;v=beta&amp;t=jIdzp5-QT8j6P4PzTQgzBa-k8Qjhva10k_DgyvttfaA)

# Machine Learning with Python: Logistic Regression

> Are you looking for a practical way to use machine learning to solve complex real-world problems? Logistic regression is an approach to supervised machine learning that models selected values to predict possible outcomes. In this course, Notre Dame professor Frederick Nwanganga provides you with a step-by-step guide on how to build a logistic regression model using Python. Learn hands-on tips for 

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression) | 1h 19m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Classifying data with logistic regression](#classifying-data-with-logistic-regression)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Regression**](#1-regression) (3 videos)
  - [What is regression?](#what-is-regression)
  - [The anatomy of a regression model](#the-anatomy-of-a-regression-model)
  - [Common types of regression](#common-types-of-regression)
- [**2. Logistic Regression**](#2-logistic-regression) (4 videos)
  - [What is logistic regression?](#what-is-logistic-regression)
  - [Making predictions with logistic regression](#making-predictions-with-logistic-regression)
  - [Interpreting the coefficients of logistic regression](#interpreting-the-coefficients-of-logistic-regression)
  - [Why and when to use logistic regression](#why-and-when-to-use-logistic-regression)
- [**3. Classifying Data with Logistic Regression**](#3-classifying-data-with-logistic-regression) (4 videos)
  - [How to explore data for logistic regression in Python](#how-to-explore-data-for-logistic-regression-in-python)
  - [How to prepare data for logistic regression in Python](#how-to-prepare-data-for-logistic-regression-in-python)
  - [How to build a logistic regression model in Python](#how-to-build-a-logistic-regression-model-in-python)
  - [How to interpret a logistic regression model in Python](#how-to-interpret-a-logistic-regression-model-in-python)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Classifying data with logistic regression](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=0)** - [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is one of the simplest and most commonly-used classification approaches in machine learning. It allows us to model the relationship between a set of predictors and the [Probability](../../Skills/Data%20Science/Probability.md) of a categorical response. Not only is it great for prediction; it also allows us to make statistical inference. Hi. I'm Fred Nwanganga. I'm a data scientist, teacher and author with a passion for AI and machine learning. Welcome to "Machine Learning with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md): "Logistic Regression." In this course, I explain what regression analysis is, the anatomy of a regression model, and common types of regression. I also discuss when logistic regression is most useful, and when it's not. Finally, I walk through the process of importing, exploring and preparing data for logistic regression, as well as how to build, evaluate and interpret a logistic regression model in Python. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **CLI Commands:** python (2), make (1)
> **Speakers:** - logistic (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course. First, I assume that you have a fundamental understanding of what machine learning is, specifically supervised machine learning. If you don't, I recommend that you review my introductory [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, [Machine Learning with Python- Foundations](Machine%20Learning%20with%20Python-%20Foundations.md). Second, it would be helpful if you have some entry-level experience with coding in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). I will assume that you know how to import a Python package, refer to the attributes of an object, and call the methods of an object. Next, it would also be helpful if you have some familiarity with the [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and sklearn packages. If you don't, no worries. I will explain exactly what I'm doing when we do use external packages in the course. Finally, I do assume that you know how to use the Jupyter notebook interactive Python environment. Specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **CLI Commands:** python (4)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you. This means that you can follow along with any of the code examples in the lessons. I recommend that you do so. The best way to become proficient in building [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) models in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is to practice doing it yourself. This course is delivered using [Codespaces](../../Skills/Software%20Development/Codespaces.md), a development environment that is hosted in the cloud. The exercise files are available on [GitHub](../../Skills/Software%20Development/GitHub.md) and organized by branches. Within each branch is a data file and two notebooks a beginning and an ending notebook. Let's take a look at an example. The files in the 03_01 branch are what we use in the first video of the third chapter. As you can see within the SRC folder we have a data file called Loan CSV. We also have two notebooks for the lesson videos. The 03b notebook is the beginning notebook. This is the notebook you should code in when following along with the lesson videos. The 03e notebook is the ending notebook. It is a completed version of the beginning notebook. Just for your reference. Now, let's get a quick [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) from [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=94)** about using Codespaces for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** src (1), csv (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=281)** like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way, it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [What is regression?](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=0)** - [Instructor] Regression or regression analysis refers to a family of machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) that are used to quantify the size and strength of the relationship between two or more numerical values. Regression is one of two major categories of supervised machine learning. The other is known as classification. Classification problems are supervised machine learning problems where the dependent variable is categorical or qualitative. For example, a machine learning model that predicts whether a tumor is benign or malignant is a classification model. The values benign or malignant are categorical. In contrast to classification, regression problems are supervised machine learning problems where the dependent variable is continuous or quantitative. For example, a machine learning model that predicts the annual sales numbers for a particular product based on advertising spend is a regression model. Annual sales is a continuous value. It has an infinite number of possible values between the lower and upper bounds. To further illustrate how regression analysis is used, let's assume that we work for a bike rental company and are trying to build a machine learning model that estimates how many bikes to deliver to a location to meet anticipated customer demand. To build such a model, we need some historical data
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=96)** or what is known as ground truth data. Suppose that over the last month, our company kept a record of the average daily temperature and the number of bikes rented. Shown here is a 10 day sample of that data. To build a regression model using this data, we could assume that the average daily temperature has a direct impact on the number of bikes rented. As a result, we will designate the column that holds the average daily temperature as the independent variable. Because our objective is to predict the number of rentals based on temperature, the rentals column would serve as the dependent variable. Using the independent and dependent variables as input, a regression algorithm would attempt to estimate a function, F of X beta, that models the relationship between the values of the independent variable and the values of the dependent variable. The estimated function is what we refer to as a regression model. With a regression model, we can do one of two things. The first is prediction. If we know the estimated daily temperature for any given day, we can simply pass it to our regression model and it'll predict the number of bikes it expects customers to rent on that day. Regression models are also useful for inference.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=192)** With a regression model, we can approximate the impact that a unit change in a predictive variable would have on the response. For example, we can use our bike rental model to answer a question such as how many more or how many fewer bikes would customers rent if the average daily temperature rose by one degree?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (4), known as (2)
> **Analogies:** for example (3), such as (1)
> **Speakers:** - [instructor] (1)

#### [The anatomy of a regression model](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=0)** - [Instructor] By quantifying the size and strength of the relationship between two or more numerical values, regression models allow us to predict or forecast an output value based on a set of input values. The anatomy of a regression model is made up of three components. The first is a continuous value. We intend to predict. Why? This is the dependent variable and it's also known as the response variable. The second component is a collection of one or more numeric variables X, that we intend to use to predict the response variable. These are known as the predictors or independent variables. The third component is a set of coefficient beta which describe the relationships between the predictors and the response variable. To help motivate our understanding of the anatomy of a regression model, let's assume that we work for a bike rental company and would like to build a regression model that estimates how many bikes to deliver to a location to meet anticipated customer demand. Suppose that what is shown here is a sample of the historical data that we intend to build a model with, the column with the values that we're trying to predict rentals, represents the first component, Y, of a regression model. This is the response.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=93)** It is known. The second component, X, of a regression model is represented by the temperature column. This is a predictor. This is also known. The third component of a regression model, beta, is unknown. It is estimated based on the values of both the predictor and the response. How does a regression algorithm estimate these values? An illustration would help. If we create a scatter plot of the historical data with the predictor on the X-axis and the response on the Y-axis, we get a plot that looks like this. Regression models are parametric models. Parametric models require that we make assumptions about the nature of the data in order to choose the right function to model the data. If we make the assumption that the relationship between the predictor and the response is linear then we use a [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) algorithm to find a straight line like this one, that best fits the data. Mathematically, the equation for the line of best fit is usually written in this format. The goal of a linear regression algorithm is to estimate the optimal values for beta given a set of X and Y values. The position and slope of the line vary depending on the values for beta. Beta zero is a intercept
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=186)** and it impacts the position of the line on the Y-axis. Increasing the value shifts the line upwards and reducing the value shifts the line downwards. Beta one is the slope, and it impacts the line's angle of tilt. A positive value implies an upward slope, while a negative value implies a downward slope. As you can imagine, there are infinite possible values for beta zero and beta one with each combination resulting in a different line. Linear regression [Algorithms](../../Skills/Software%20Development/Algorithms.md) often use an approach known as ordinary lease squares or OLS to estimate the optimal values for beta zero and beta one. The mechanics of OLS are beyond the scope of this course. However, the general idea is that the optimal beta values are ones that result in a line with the least sum of squared distances or residuals between the observed data and corresponding points on a linear regression line as shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (6), known as (3)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** ols (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Common types of regression](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=0)** - [Instructor] Depending on the nature of our data and the type of value we want to predict, we can use one of several [Forms](../../Skills/Web%20Development/Forms.md) of regression. Let's assume once again that we work for a bike rental company and are trying to build a regression model that estimates how many bikes will be rented based on weather conditions. If our historical data consists of a single predictor variable X, and we assume that the relationship between the predictor variable and the response Y is linear, then we use simple [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) to model this relationship. The line equation for this approach is beta0 + beta1 X as shown here. Simple linear regression is useful when we only have one predictor variable in our Ground truth data. However, we often have to consider several predictors in order to reliably estimate the values of a response variable. To accomplish this, we use a different type of linear regression to model the relationship. If we have more than one predictor variable X and assume that the relationship between the predictor variables and the response Y is linear, then we use the approach known as multiple linear regression to model the relationship. The multiple linear regression line equation is beta0 + beta1 X1 + beta2 X2, up to beta-p Xp,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=96)** where P is a number of predictors we intend to consider. With linear regression, their linear relationship between the predictor and the response, implies that a constant change in the predictor variable leads to a constant change in the response variable. Let's consider the regression line shown here, that models the relationship between the average daily temperature and the number of bikes that customers rent. According to the regression line, a constant change in temperature will lead to a constant change in the number of bikes rented. In other words, if delta1 is equal to delta2, then delta3 will also be equal to delta4. Linear regression also assumes that the values of the response variable are normally distributed, and that they can vary indefinitely in either direction, with no fixed zero value. However, we know that these two assumptions are not quite true in this scenario. For example, the value of the response variable cannot be negative. Customers cannot rent a negative number of bikes. A more appropriate expectation of our data is that that a constant change in the predictor variable would result in a geometric or exponential change in the response variable. For example, a 10-degree change in temperature
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=191)** would more likely result in the doubling or tripling of the number of bikes rented as shown here. In other words, delta3 is not equal to delta4, even though delta1 is equal to delta2. To model a response variable, that is never zero, and that varies exponentially in response to a constant change in a predictor variable, we need a different type of regression technique. If we assume that the relationship between the predictor variable X, and the response Y is exponential or log linear, then we use the approach known as Poisson Regression to model the relationship. The Poisson Regression line equation is shown here. Notice that it is very similar to the linear regression equation with the difference being that instead of estimating Y, we estimate the log of Y. Poisson Regression is especially useful when our predictor is positive and the response variable is a count that ranges in value from zero to infinity. For example, we can use Poisson Regression to predict the number of people who buy tickets to a concert based on predictors such as ticket price, time of year, and the number of people who follow the band on social media. Now let's consider a slight variation to the bike rental scenario.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=284)** What if instead of trying to predict how many bikes customers would rent, we decide to predict whether a given customer will or will not rent an E-bike based on their age. A scatter plot of the historical data for this type of problem could look like this. The response values are binary and not continuous, like in the previous scenario. A linear regression model would fit this data poorly, so would a Poisson Regression model. To model this type of relationship, we need a technique that allows us to create an S-shaped curve like this one that is bounded on both ends. This type of curve is known as a sigmoid curve. If we assume that the relationship between the predictor variable X and the response Y is binary or dichotomous, then we use the approach known as [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) to model the relationship. The Logistic Regression line equation is shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (9), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** known as (4), is a  (2), in other words (2)
> **Analogies:** for example (3), such as (1)
> **Speakers:** - [instructor] (1)


### 2. Logistic Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [What is logistic regression?](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=0)** - [Instructor] [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is a supervised machine learning technique that models the relationship between one or more predictors, and the [Probability](../../Skills/Data%20Science/Probability.md) of a categorical response. To help motivate our understanding of how logistic regression works, let's suppose that we intend to build a regression model that predicts whether a particular customer will or will not rent an e-bike, as a function of their age. A sample of the historical data that we use to such a model could look something like this. If we plot this data, we get a scatter plot that looks like this. Note, that the response values yes and no, a categorical values, they are not continuous values as we normally expect for regression problems. To deal with this, instead of modeling the response values directly, logistic regression models the probability of a particular response value. In this example, a logistic regression algorithm would model the probability that the value of the response variable rent is yes given an age value, because the probability of an event goes from zero to one, if we represent yes as one and no as zero, the objective now becomes predicting the probability of one given an age value. Notice, by approaching the problem this way, the response is no longer categorical, it has become continuous. The logistic regression algorithm uses
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=95)** a nonlinear function, known as a logistic function to fit a curve to the data. The curve is bounded on both ends by zero and one, and is known as a sigmoid curve. Similar to other regression [Algorithms](../../Skills/Software%20Development/Algorithms.md), the logistic regression algorithm uses a series of mathematical transformations to find the better coefficients, that result in a curve that best fits the data. The process it uses is known as maximum likelihood estimation or MLE. The mechanics of how MLE works is beyond the scope of this course. Using the curve of best fit, we can visually estimate the probability of an event for any given X, by projecting from the x-axis to the y-axis. For example, according to the fitted curve, the probability of a 35 year old renting an e-bike is essentially 0%, while the probability of a 45 year old renting an e-bike is 100%. To convert these predicted probability values to a categorical response, logistic regression algorithms use what is known as a cutoff threshold. In this example, response values at or above the threshold are interpreted as yes, while response values below the threshold are interpreted as no. So we can interpret the prediction for a 35 year old customer as no, and that of a 45 year old customer as yes.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=190)** It's important to note that while most logistic regression models use 0.5 as a default cutoff, we can adjust this threshold depending on our data, and how conservative we want to be with our interpretation. In the example shown here, with a threshold set at 0.9, our response of 0.8 would still be interpreted as no. Logistic regression is a very popular technique for solving classification problems. Depending on the characteristics of the response variable, the logistic regression model we build will likely fall into one of three subcategories. The most common type of logistic regression is binomial logistic regression. This type of model is useful in predicting outcomes that only have two possible values, such as yes or no, true or false, one or zero. Most problems fall into this category. Our e-bike rental example is one of them. The second type of logistic regression is known as multinomial logistic regression. These types of models are useful when our response has more than two possible values. For example, a multinomial logistic regression model would be useful in predicting which one out of three medical conditions a patient is at the highest risk for. With multinomial logistic regression,
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=283)** we typically break down the problem by modeling the probability of each response value independently. Then we choose the one with the highest probability. The third type of logistic regression is ordered logistic regression. This approach is very similar to multinomial logistic regression with one key difference, the response values have a logical order. An example of an ordered response is a Likert scale of one to five. An ordered logistic regression model would be useful in predicting the rating or the number of stars, a student would give to a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course based on the number of coding examples in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (20), [Probability](../../Skills/Data%20Science/Probability.md) (11), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** known as (4)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Versions:** 0.5 (1), 0.9 (1), 0.8 (1)
> **Env Vars:** mle (2)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Making predictions with logistic regression](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=0)** - [Narrator] [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is most often used to solve classification problems because that allows us to predict the [Probability](../../Skills/Data%20Science/Probability.md) of a categorical value Y for any given X. For example. Suppose that we have a logistic regression function like this that models the probability of a customer renting an e-bike as a function of their age. By doing the math, we can predict that the probability of a 35 year old customer renting an e-bike is 14.8%. If we use a 50% cutoff threshold then we interpret the prediction of 0.148 as no. According to this model, a 35 year old customer is unlikely to rent an e-bike. Statistically speaking, modeling the value of a variable with a restricted range, such probability can be challenging. It is also rather difficult to properly interpret the non-linear relationship that exists between predictors and the response as represented by the logistic function. So instead of using the logistic function, most logistic regression [Algorithms](../../Skills/Software%20Development/Algorithms.md) actually model the Log Odds of the response as a linear combination of the predictors as shown here. In this equation, P is a logistic function and the Log Odds of the logistic function is known as a Logit, unlike probability, which ranges from zero
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=96)** to one, Log Odds values range from negative infinity to positive infinity, they are not bounded on either side. The idea of odds, Log Odds and probability can sometimes be confusing. To help clear up some of the confusion, let's explore the relationship between all three measures. Odds ratios are commonly used in domains such as horse racing, sports, epidemiology, and gambling. In sports, instead of stating the probability of winning, people will often talk about the odds of winning. The odds or odds ratio of an event is a probability that the event will occur expressed as a proportion of the probability that the event will not occur. So if the probability of an event is P, then the odds of the event is P divided by one minus P. To illustrate, let's suppose that out of 10 basketball games, team A won eight and team B won two. Based on these results, we can say that the probability of team A winning a game against team B is eight divided by 10 or 80%. Conversely, the probability of team A losing a game to team B is 20%. Note that this is also the probability of team B winning a game against team A. In terms of odds, we say
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=191)** that the odds of team A winning a game against team B is four to one, which is 0.8 divided by 0.2. In other words, team A's odds of winning is four times that of Team B. Taking the log of the odds of an event gives us the Logit function. To go from Log Odds to odds, we exponentiate. And to go from odds to probability, we divide the odds by one plus the odds. Notice that this is the Logistic Function. As I mentioned earlier, instead of modeling the probability of a response, most logistic regression algorithms model the Log Odds of the response as a linear combination of the predictors. The scikit-learn [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package which we will use later in this course, uses this approach. So if we train a model in Python that estimates the probability of a customer renting an e-bike as a function of their age, the function would look like this. To predict the probability of a 35 year old customer renting an e-bike, the model would first calculate the Log Odds of the event which is negative 1.75. To get the odds, it exponentiates the Log Odds, which turns out to be 0.1738. Finally, it divides the odds by one
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=285)** plus the odds to get a probability of 0.148. As you can see, we end up with the same probability: 14.8% as we did earlier in the video when we used the logistic function directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (19), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Versions:** 14.8 (2), 0.148 (2), 0.8 (1), 0.2 (1), 1.75 (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** python (2)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Interpreting the coefficients of logistic regression](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=0)** - [Instructor] [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is most often used to solve classification problems because that allows us to predict the [Probability](../../Skills/Data%20Science/Probability.md) of a categorical value Y for a given X. However, instead of simply predicting an outcome, we sometimes want to understand the quantitative impact that a unit change in X has on Y. This is known as inference. To infer meaning from a model, we need to understand what a beta coefficients mean. The way we interpret the beta coefficients depends on whether a predictor X is continuous like age or categorical like gender. Let's start with this scenario where the predictor is continuous. The equation for such a model is shown here. Because the predictor age is a continuous variable, we interpret the beta zero coefficient of -5.95 as a log odds of a customer of age zero renting an e-bike. To understand the intuition behind this interpretation, simply substitute the value zero for age in the equation. This gives us -5.95. Since we are not particularly interested in the log odds of babies renting e-bikes, we'll ignore the beta zero coefficient for the remainder of this analysis. The beta one coefficient is the change in log odds as a result of a unit change in X.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=95)** For this model, a beta coef-, one coefficient of 0.12 tells us that the log odds of renting an e-bike increases by 0.12 for each unit change in age. As you can tell, this is not a natural way to communicate this type of information. Let's interpret the beta one coefficient in terms of odds instead. To do so, we'll exponentiate. Now we can interpret the exponentiated beta one coefficient of 1.13 to mean that for every unit change in age, the odds of renting an e-bike increases by 13%. In other words, if we knew the odds of a 30 year old renting an e-bike, then the beta one coefficient tells us that the odds of a 31 year old renting an e-bike would be 13% higher than that of the 30 year old. Note that we arrived at 13% or 0.13 by subtracting one from 1.13. We did this because exponents beta one is greater than one. If exponent beta one were less than one, we would've subtracted it from one instead. For example, if exponent beta one was 0.84, we would interpret the coefficient to mean that for every unit change in age
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=188)** the odds of renting an e-bike decreases by 16%. We may be tempted to also interpret the beta coefficient in terms of probability by dividing exponent beta one by one plus exponent beta one, which gives us 0.53. However, this value is not the constant change in probability as a result of a unit change in X nor is it the percentage at which the probability changes as a result of a unique change in X. Because the relationship between X and the probability of Y is non-linear the amount of the probability changes due to a unique change in X is dependent on the value of X. To understand the relationship between the beta coefficient and probability, we need to look at the value of the beta one coefficient. What we can infer from the coefficient is that regardless of the value of X, if beta one is positive, then increase in X will result in an increase in the probability of Y. Conversely, if beta one is negative, then increase in X will result in a decrease in the probability of Y. Now, let's go one step further and look at how we interpret the beta one coefficient for a categorical predictor.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=281)** This time, let's assume we have a logistic regression model like this one, that models the probability of a customer renting an e-bike as a function of their gender. Generally, when we use categorical predictors in regression analysis, the algorithm dummy codes the values of the predictor into binary form as zero and one. For example, instead of a categorical variable called gender with values, male and female, we end up with a dichotomous variable with values zero and one. Where zero means male and one means female. Because the predictor gender is a categorical variable and because the value of the variable is zero for males, we interpret the beta zero coefficient of -0.17 as the log odds of a male customer renting an e-bike. To understand the intuition behind this interpretation, simply substitute the value zero for gender in the equation and we end up with -0.17. The beta one coefficient of 0.6 is the change in log odds between males and females in terms of renting an e-bike. As we came to realize previously, interpreting coefficient in terms of log odds is rather clumsy. Let's look at the odds instead. If we exponentiate beta zero, we get 0.84. This means that according to our model,
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=378)** the odds of a male customer renting an e-bike is 0.84. Because this value is less than one, it means that men are less likely than women to rent an e-bike. If we exponentiate beta one, we get 1.82. This means that according to our model, the odds of a female customer renting an e-bike in comparison to a male customer is 1.82 to one. In other words, women are 82% more likely to rent an e-bike than men. Similar to the interpretation for a continuous predictor, if beta one is positive, then we can infer that being female, which is denoted by X equal to one, increases the probability of renting an e-bike. Conversely, if beta one were negative, then we would infer that being female would decrease the probability of renting an e-bike. The inference we make based on probability will always be consistent with that of the odds ratio. As a result, we often do not attempt to interpret the coefficients in terms of probability. Odds are enough.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (14), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (2)
> **Versions:** 0.84 (3), 5.95 (2), 0.12 (2), 1.13 (2), 0.17 (2)
> **Definitions:** is a  (2), in other words (2), means that (2), known as (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Why and when to use logistic regression](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=0)** - [Narrator] In order to know when to and when not to use [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md), we need to understand its strengths and weaknesses. In terms of strengths, similar to other regression methods, logistic regression models are easy to train. They do not require hyper parameter tuning. Logistic regression models are efficient in that they are not computationally expensive. Unlike some other machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md), the predictive variables we use to train a logistic regression model do not have to be scaled before being used. The predictive value and the coefficients of a logistic regression model are easy to understand and interpret. Logistic regression models work best with continuous predictive variables, however they can handle a reasonable number of categorical predictors as well. There are some weaknesses inherent in logistic regression models. Logistic regression models tend to underperform when there are multiple or non-linear decision boundaries within the data. As a parametric model, logistic regression requires that we make assumptions about the form of the data before beginning the modeling process. For example, we have to decide which type of regression to use based on the assumed relationship between the predictors and the response variable. As a result of the assumptions we make
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=95)** in logistic regression, our model may not be able to capture some of the complex or subtle patterns in the data. Logistic regression is sensitive to outliers and cannot deal with missing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (10), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [narrator] (1)


### 3. Classifying Data with Logistic Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [How to explore data for logistic regression in Python](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=0)** - [Speaker] [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is one of the simplest and most commonly used classification approaches in machine learning. It is a supervised machine learning approach that allows us to model the relationship between a set of predictors and the [Probability](../../Skills/Data%20Science/Probability.md) of a categorical response. In this video, you will learn how to import and explore data prior to building a logistic regression model in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Note that this video is the first in the four video sequence that also teaches you how to prepare data, train a logistic regression model, evaluate the model, and interpret the model in Python. I would also like to highlight that the Python packages we use in these four tutorials [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), Matplotlib, Seaborn, NumPy and SKLearn have all been pre-installed for you as part of your code spaces environment. Let's get started. The first thing we're going to do is import our data. Before we import our data, we must first import the Pandas package. So, I've pre-written that code for you. So, let's go ahead and run that cell. So, now that we have imported our package, now we can import our data into a data frame called loan. So we're going to go ahead and import our data. We're going to call the data frame loan, and I'm going to use the read_csv function from Pandas. So, I'm going to use the alias PD.read_csv.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=96)** So, I have that here. I'm going to specify that the name of the file is loan.csv. So, I think everything looks good. So, I'm going to run the code. To verify that the import worked as expected, let's use the head method of the pandas data frame to preview the data. So, our data frame is called loan. So, we're going to use, type loan.head, that's the method and let's run that. All right. So, our dataset has three columns. The first two, income and loan amount, are the predictors or independent variables. While the last one, default, is the response or dependent variable. In this exercise, we're going to use this loans data to train a logistic regression model to predict whether a borrower will default or not default on a new loan based on their income and the amount of money they intend to borrow. Now that we have our data, let's go ahead and try to understand it. First, let's get a concise summary of the structure of the data by calling the info method of the loan data frame. So once again, we start with loan.info Okay, that is the method. So, let's run that. By looking at the range index value from the summary, we can tell that there are 30 instances or rows in the dataset. The data columns, value, which we see here, shows that the dataset consists of three features
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=188)** or columns. Looking at a D type column within this section, we see that the income and loan amount columns hold integer values which is int64, while the default column holds text which here is listed as object. Next, let's get a summary, some summary [Statistics](../../Skills/Data%20Science/Statistics.md) for the numeric features in the data. This time we're going to use a describe method of the data frame. So, we're going to say loan, sorry about that, that's loan.describe. So, let's run that. So, we don't need this cell. I added that mistakenly, so I'm going to delete that cell. All right, so from the statistics, we can see the average standard deviation, minimum and maximum values, for both the income and loan amount variables. We also get the 25th, 50th and 75th percentile values for both variables. Note that the values are in the thousands. So, the minimum and maximum income values are $12,000 and $34,000 respectively. All right. So, now that we've described our data structurally and numerically with the summary statistics, let's describe our data visually as well. So, we're going to start with some box plots. So, before we create the plots, we must first import a couple of packages. The first is the Matplotlib package and the second is the Seaborn package. So, I have pre-written that code for you, as well.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=282)** So, let's run that. Okay. So, let's start by creating a box plot that highlights the difference in annual income between those that did not default on their loan, which is no, and those that did default on their loan, which is yes. So, we're going to call our object ax. So, we're going to start with ax, and we're going to use Seaborn, so, the alias is sns. So, we're going to start with sns., so we're going to do a box plot, so boxplot, and our data is loan, and within our boxplot function we're going to specify the x as the, x axis will be default, and the y axis, we're going to specify as income. Okay, I think we have everything we need. So, we have our data as loan, we have our x axis as default, and we have the y axis as income. So, let's run that. And, let's see what we have here. So, the chart shows that those that did not default on their loans tend to have a higher annual income than those that did default on their loans. So next, let's create another box plot to highlight the difference in amount borrowed between those that did not default on their loans and those that did. So, we're going to do something very similar. So, we're going to say ax = sns.boxplot.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=380)** All right. So, our data again is loan. Our x is default. This time, our y is little different. Our y, this time, is loan amount. Loan amount. All right. So, let's make sure we have everything we need. So, we have our data as loan, we have x as default and we have y as loan amount. Let's run our code. All right, so this time around we see that the charge shows that those that defaulted on their loan tend to have borrowed more money than those that did not default. We can see that from the plot. Next, let's look at some scatter plots to see what that provides, what insight we can derive from those. So, if we recode the default feature values, no and yes, to zero and one, we can use a scatter plot to get a slightly different perspective of our data. So, what we're going to do here, we need the NumPy package. So, I've pre-written that import for you, as well. So, let's go ahead and run that. So, we're going to import NumPy as np. Now, we can create a scatter plot that describes the relationship between the annual income of borrowers and loan outcomes. So, within our code cell, we're going to start again with ax as our object name. So, we're going to start with sns, and this time around we're going to say scatter plot.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=474)** All right. So, here we're going to do something a little different. We're going to specify the x and say x is equal to the loan, which is the data frame, and we're going to index the income for the income column, right? So, that's what we're going to specify as our x. Okay. So, the next line of code, I am going to type, just let me bring this back here, I am going to type the y, a Y is np.where. So, because we're going to recode it, so, we're going to say np.where, loan default, which is the column, so, we're going to index for that, when it's equal to no return zero else one. And, we're going to specify another argument, which we call s, which is going to be the size of the dots in the scatter plot. So, let's make sure we have everything we need. So, we're going to say the x is loan, is the income column, y is recoded, is the default column recoded where if the default columns value is no, we recode that as zero, else it should be one. And we specify the s argument, which is the size of the point in our scatter plot, and we say the size we're going to go for is 150. So, let's go ahead and run that.
>
> **[9:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=572)** So, now we can see a scatter plot that shows income on the x axis, and on the y axis, we see a recoded set of values for default. Okay. So, we can also describe this relationship between the amount borrowed and loan outcomes. So, let's do that as well. So, ax, So, this is going to be similar, sns.scatterplot. All right. So, x equal to loan. This time we're doing the same thing. So, we're going to say, actually, this time around we're going to say it's loan amount because the other one was income. So, we're going to say loan amount as the x axis, on the y, we're going to do the recode just like we did before. So, where loan default, if default is equal to no, then return zero, return one, and then we're going to specify the s is equal to 150 as well. So, let's make sure we have everything we need here. So, we have x equal to loan amount, and then y is recoding the loan, the default column, and no, return zero, else, return one. I think we're good to go. So, let's run that. All right.
>
> **[11:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=664)** So, now we have two scatter plots. Looking at these two charts, we can easily imagine a sigmoid curve, which we learned about in our tutorial videos earlier that fits the data. This kind of tells us that the logistic regression function would model the relationship between the predictors, income and loan amount, and the response, default, pretty well. So, there you have it. We successfully imported the dataset, then we explored the data structurally, numerically and graphically in order to better understand it. In the next video I will illustrate how to prepare this data before we can use it to train a logistic regression model. See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (6), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **CLI Commands:** python (3), make (3)
> **Code Identifiers:** read_csv (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** just like (1), imagine (1)
> **Warnings:** note that (2)
> **File Paths:** loan.csv (1)
> **Cross-References:** in the next (1)

#### [How to prepare data for logistic regression in Python](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=0)** - [Instructor] In this video, you will learn how to split data into training and test sets prior to training a [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) model in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Note that this video is the second in a four-video sequence that also teaches you how to import and explore data, train a logistic regression model, evaluate the model, and interpret the model in Python. If you have not done so, watch the previous video for a detailed explanation of the prior code. Before we begin, let's run the code we created in that video to get our environment up to speed. So I'm going to go to the top here and click on run all. All right. So our code is done running the previous code. So our primary objective in this step is to split our data into training and test sets. The training set will be used to train the model, while the test set will be used to evaluate the model. Before we split the data, we first need to separate the dependent variable from the independent variables. Let's start by creating a [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) Series called y for the dependent variable. So I'm going to come in here. Here I'm going to say y is equal to loan and I'm going to now specify the column I want which is default to create a series. Okay? So I'm going to run that.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=95)** All right, then we create a Pandas DataFrame called X for the independent variables. So X is equal to loan, this time, we have income, and we also have loan amount. Notice that I use the two square brackets because this is a DataFrame, X is a DataFrame and y is a series. Next, we import the train_test_split function from the sklearn.model_selection sub-package. So I've pre-written this code for you so let's go ahead and run that. All right, using the train_test_split function, we can split X and y into X_train, X_test, y_train, and y-test. Know that within the train_test_split_function we will set train size to 0.7. This means we want 70% of the original data to be assigned the training data, while 30% is assigned to the test data. We'll also set stratify as y, which means that we want the data split using a stratified random sampling approach based on the values of y. Finally, we're going to set the random state's argument to one, two, three. We do this so that we get the same results every time we do this split. So let's go ahead and write our code.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=189)** So we're going to get four variables returned from the train_ test_split function. So the first is X_train. So this holds the independent variables for the training data. Then we have X_test, which are the independent variables for the test data. We have y_train, so you can imagine, that's the dependent variable for the training data and y_test, which is also the dependent variable for the test data. And so this is going to be equal to train_ test_split, and within our function we are going to specify X, specify y. We're going to say train_size is equal to 0.7, like we mentioned earlier. We're going to specify stratify is equal to y, got it? And random_state is equal to one, two, three. Let's make sure we have everything we need in our code before we run it. So X, we have y, we have train_size 0.7, we have stratify is equal to y and random_state is equal to 1, 2, 3. So let's run our code. After the data is split, the newly created X_train and X_test data sets hold the independent variables for the training and test sets, respectively, while the y_train and y_test data sets
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=281)** hold the dependent variable for the training and test sets, respectively. We can refer to the shape attribute of any of the newly created data sets to know how many instances or records are in each. Let's look at the training data. All right, so for our training data we're going to say X_ train.shape. So let's run that. So the result that we get here, 21 and two, is a tuple that holds a number of rows and columns in the X_train DataFrame. It tells us that 21 out of the 30 instances in the loans data were assigned to the training set. Let's go to test_set as well. So we're going to go and do that same thing here. X underscore test.shape, so the shape attribute gives us nine and two. So these results tell us that nine out of the 30 instances in the loans data were assigned to the test set. Okay? So in this video, we successfully split the historical data into training and test sets. We also verified how many instances or rows are in each set. The next step is to train and evaluate our logistic regression model. That is what we'll do in the next video. See you on other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Code Identifiers:** y_train (3), train_test_split (2), test_split (2), y_test (2), train_size (2)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** python (2), make (1)
> **Versions:** 0.7 (3)
> **Cross-References:** previous video (1), we mentioned (1), in the next (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** imagine (1)

#### [How to build a logistic regression model in Python](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=0)** - [Narrator] In this video you will learn how to train a [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) model in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and how to evaluate the model's performance against a test data set. Know that this video is a third in a four-video sequence that also teaches you how to import, explore, and prepare data for logistic regression as well as how to interpret the results of a logistic regression model in Python. If you have not done so, watch the previous two videos for a detailed explanation of the prior code. Before we begin, let's run the code we created in the last two videos to get our environment up to speed. So I'm going to go up to the top and click on, 'Run All'. Okay, so our previous code is done running. So we are going to use the logistic regression class from the SKLearn.linear model sub-package to train our model. Let's import this. We can now instantiate a new object called classifier from the logistic regression class. So we're going to create a new object called 'classifier' and I'm going to say classifier=LogisticRegression. That is a class we just imported. So let's run that. To train a model, we pass the training data, which is X train and Y train,
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=93)** to the fit method of the classifier object. So I'm going to call it model = classifier. And so classifier.fit, I'm going to call the fit method. And within the method we pass two arguments, such as X train and we're going to pass Y train as well. Okay, I think we're good to go. So let's run that. So recall that there are nine instances, or rows in the test set. To predict labels for the test instances, we pass the independent variables of the test set, which is X test to the predict method of the model, the model we just trained. So let's go in here and say model.predict and we're going to pass to it X_test. So let's run that. So the output list of predictions made by the model in the order in which the instances appear in the test set. So you can see that what we have here is an array an umpire array that has yes, yes, yes, and then no, based on the prediction. To evaluate how accurate our model is, we pass the test data, which is X test and Y test to the score method of the model. So let's come down here and say model.score. So within this method, we're going to pass x_test
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=188)** and we're also going to pass y_test. The result tells us that our logistic regression model is able to correctly predict eight out of nine, or 89% of the labels in the test set. The accuracy of a model only gives us a one-dimensional perspective of performance. To get a broader perspective, we need to generate a confusion, or error matrix, of the model's performance. To do this, we need to import the confusion matrix function from the SKLearn.metrics sub-package. So let's run that again. Then we pass the dependent variable from the test set, which are the actual labels, and the models predicted labels to the confusion matrix function. So let's type in confusion_matrix. That's the function that we want to run. And we're going to pass through it Y test and the model's prediction. So model.predict, and going to say X_test, okay? So make sure we have everything we need. So confusion matrix, the first argument is Y_test, the actual labels and then the second argument are the predicted labels. So let's run that. And we get an array. So the array we get is a 2X2 array that shows how many instances the model predicted correctly, or incorrectly, as either yes or no. So to make things easier to look at,
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=285)** I created a little visual, a little table illustration of the confusion matrix. So looking at the illustration, we see that the first row of the matrix shows that of the four instances that were actually 'no', the model predicted three of them as 'no', but one of them as 'yes'. The second row of the matrix shows that of the five instances that were actually 'yes', the model predicted all five correctly as 'yes'. So now that we've successfully trained and evaluated a logistic regression model, the next step is to interpret the model. In the next video, I illustrate how to do exactly that. See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), make (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** x_test (1), y_test (1), confusion_matrix (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [How to interpret a logistic regression model in Python](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=0)** - In this video, you will learn how to interpret the coefficients of a [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) model in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Know that this video is the fourth in a four video sequence that also teaches you how to import, explore, and prepare data for logistic regression as well as how to train and evaluate a logistic regression model in Python. If you have not done so, watch the previous three videos for a detailed explanation of the prior code. Before we begin, let's run the code we created in the last three videos to get our environment up to speed. So I'm going to go up to the menu and click on Run All. All right, so now that we've built a logistic regression model, and evaluated the performance of the model on the test data, we can now interpret the model's output. Specifically, the model coefficients. The relationship between the dependent and independent variables in the logistic regression model is generally represented as follows: So we have here the logit as a linear combination of the predictors. In this representation, the left hand side of the equation is known as a logit, or the log odds of the [Probability](../../Skills/Data%20Science/Probability.md) of an outcome or Class P. Beta 0 is the intercept. Beta 1 to beta N are the coefficients of the independent variables X1 to Xn. To get the intercept, or beta zero,
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=97)** we refer to the intercept underscore attributes of our model. So let's go ahead and get that. So our model is called 'model.' And we get the intercepts underscore attributes. Okay, so let's run that. So we get 15.467. To get the other model coefficients, Beta 1 and beta 2, we refer to the coef underscore attributes of our model. So model dot coef underscore. So let's run that. Okay. The model coefficients correspond to the order in which the independent variables are listed in the training data. So the first one there corresponds to income, and the second corresponds to loan amount. This means that the equation for our logistic regression model can be written as shown here. To make our coefficients easier to work with, let's convert them from a two-dimensional array to a one-dimensional array, and round the values to two decimal places. So we're going to say log odds. We're going to say np dot round. So numpy dot round. I'm going to use a round function from numpy. And I get the model dot coef. And so for the model dot coef, notice that what we had before was a two-dimensional array. So I'm just going to index the first dimension and I'm going to round two decimal places,
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=193)** and I'm going to output this so we can see what our data looks like. Okay, so log odds. Good to go. So now, we have the same thing that we had before with a little bit cleaner. So we now have a one-dimensional array, and our values are rounded. So the first one is negative 1.02, and the second is 0.15. So next, let's create a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) DataFrame using the coefficient values and the column names from the training data as row indexes. So we're going to create a pandas DataFrame. So pd.DataFrame. I'm going to use a DataFrame constructive function. So within the function, I'm going to pass a few things. So the first is, I'm going to specify a dictionary where I'm going to say 'log odds.' In here I'm going to say that's going to be equal to log of odds. So the value that we had from our previous cell. And then we're going to say the index, which is the row index is going to be the column names from X. Okay, so make sure we have everything we need here. So we have our DataFrame constructive function. We specify the values. Log odds is column. And I'm going to use the log odds values that we created in the previous code cell. And in the index or the roll column names I'm going to use X dot columns value for those values.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=286)** And so now we have this. So the first coefficient tells us that when all other variables are held constant, right, it's the income one, a $1 increase in the borrowers income decreases the log odds that they will default on their loan by 1.02. Likewise, the second coefficient tells us that a $1 increase in the amount a customer borrows increases the log odds that they will default on their loan by 0.15 when all other variables are held constant. As we discussed, in the tutorial videos, interpreting the coefficients in terms of log odds is a bit confusing. A more intuitive approach would be to look at them in terms of odds. To get to odds, we need to exponentiate the coefficients so we can interpret our results in terms of odds instead. So let's do something similar here. So we're going to first of all create the odds. So I'm going to say odds is equal to np dot round. And I'm now going to use np dot exp function to exponentiate our log odds from our previous calculation and I'm going to round to two decimal places. Okay, so now I'm going to use the pd.DataFrame constructive function just like we did before. I am going to specify the column odds. The value would be odds,
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=383)** and then I am going to specify that the index should be X, sorry, X dot columns. All right, so make sure we have everything we need. So the first line, we convert our log odds to odds exponentiating, and then we also round it. And in the second line of code we use a DataFrame constructive function from pandas to create a new DataFrame. So our results are more pleasant to look at. So let's run our code. All right, so we have something similar, but this time around our results are in odds. So the first coefficient tells us that for every $1 increase in a borrower's income, the odds that they will default on their loan reduces by 64%, which is one minus 0.36. When all other variables are held constant. Earning more money decreases the odds of default. The second coefficient tells us that assuming all other variables are held constant, for every dollar increase in the amount borrowed, the odds that a borrower will default on their loan increases by 16%. This time it's 1.16 minus one. Borrowing more money increases the odds of default. We can also interpret the second coefficient as saying that for every dollar increase in the amount borrowed, the odds that a borrower will default on their loan increases by a factor of 1.16,
>
> **[8:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=480)** assuming all other variables are held constant. There you have it. You've successfully, in Python, import historical loan data. You've explored the data both numerically and graphically. You prepared the data. Trained and evaluated a logistic regression model using the data. And now you've learned how to interpret the coefficients of the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **Versions:** 1.02 (2), 0.15 (2), 1.16 (2), 15.467 (1), 0.36 (1)
> **CLI Commands:** python (3), make (3)
> **Definitions:** known as (1), is called (1), means that (1), is a  (1)
> **Cross-References:** in the last (1), we discussed (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=0)** - [Frederick] Congratulations. You now know what [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), Poisson regression, and [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) are. You've learned how logistic regression works, how it makes predictions, how to interpret its coefficients, and when to use it. You also know how to import, explore, and prepare data for logistic regression in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Finally, you learned how to train, evaluate, and interpret a logistic regression model in Python. The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning. Specifically, it should serve as a launching pad for solving more complex supervised machine learning problems using logistic regression. Here are a few recommended next steps. Logistic regression is one of many supervised machine learning models you can build in Python. I encourage you to continue to explore other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses that illustrate the use of different types of machine learning models. As a starting point, you can check out my other courses in the Machine Learning with Python series on LinkedIn Learning. Besides courses that explore other models, I also encourage you to explore LinkedIn Learning courses that help you understand some of the issues around algorithmic bias and fairness in AI.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=96)** An example of such a course is [Foundations Of Responsible Ai](Foundations%20Of%20Responsible%20Ai.md). If you are interested in broadening your skillset into other languages such as R, then also check out my book Practical Machine Learning in R. Finally, I recommend that you continue to practice what you've learned. Find new problems to solve, find interest in datasets on which to practice your new skills. The journey into the world of machine learning with Python is a lifelong one. Thanks for coming along with me on this journey. I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **CLI Commands:** python (5), find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [frederick] (1)


## Instructor

- [Frederick Nwanganga](../../Instructors/Artificial%20Intelligence%20(AI)/Frederick%20Nwanganga.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/machine-learning-with-python-logistic-regression-3211129/codespaces)

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)
- Logistic Regression

## Path Context

### In [Develop with Python for AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20with%20Python%20for%20AI%20and%20Machine%20Learning.md)
← [Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md) | **3 of 6** | [Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md) →

### In [Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)
← [Machine Learning with Python- Association Rules](Machine%20Learning%20with%20Python-%20Association%20Rules.md) | **4 of 9** | [Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions](Machine%20Learning%20and%20AI%20Foundations-%20Producing%20Explainable%20AI%20(XAI)%20and%20Interpretable%20Machine%20Learning%20Solutions.md) →

### In [Machine Learning with Python Professional Certificate by Anaconda](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20with%20Python%20Professional%20Certificate%20by%20Anaconda.md)
← [Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md) | **4 of 6** | [Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md) →

## Part of

- [Machine Learning with Python Professional Certificate by Anaconda](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20with%20Python%20Professional%20Certificate%20by%20Anaconda.md)

## Appears In

- [Develop with Python for AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20with%20Python%20for%20AI%20and%20Machine%20Learning.md)
- [Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)
- [Machine Learning with Python Professional Certificate by Anaconda](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20with%20Python%20Professional%20Certificate%20by%20Anaconda.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python in Excel- Machine Learning](../Data%20Science/Advanced%20Python%20in%20Excel-%20Machine%20Learning.md) — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [Machine Learning with Logistic Regression in Excel, R, and Power BI](../Data%20Science/Machine%20Learning%20with%20Logistic%20Regression%20in%20Excel%2C%20R%2C%20and%20Power%20BI.md) — Artificial Intelligence (AI), Machine Learning, Logistic Regression
- [Machine Learning with Python- Association Rules](Machine%20Learning%20with%20Python-%20Association%20Rules.md) — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md) — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md) — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)