---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-cleaning-in-python-essential-training-17061364
url: "https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364"
duration_minutes: 60
duration: 1h
level: Intermediate
updated: 10/10/2025
learners: 99574
skills:
  - Python (Programming Language)
  - Data Cleaning
exercise_files: false
github: "https://github.com/LinkedInLearning/data-cleaning-in-python-essential-training-3086536/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG16fbd1_fa8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582799961?e=2147483647&amp;v=beta&amp;t=oq32b6x6vB4v0vfTtYMIsLW3eygzC_BuGdpxcn2chmA"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)'
  - '[Become a Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Become%20a%20Data%20Analyst.md)'
prev_courses:
  - '[Python for Data Science and Machine Learning Essential Training Part 2](../Artificial%20Intelligence%20(AI)/Python%20for%20Data%20Science%20and%20Machine%20Learning%20Essential%20Training%20Part%202.md)'
  - '[Complete Guide To R Wrangling Visualizing And Modeling Data](Complete%20Guide%20To%20R%20Wrangling%20Visualizing%20And%20Modeling%20Data.md)'
next_courses:
  - '[Apache Spark Essential Training- Big Data Engineering](Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md)'
  - null
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":4,"total":7,"prev":"Python for Data Science and Machine Learning Essential Training Part 2","next":"Apache Spark Essential Training- Big Data Engineering"},{"path":"Become a Data Analyst","position":12,"total":12,"prev":"Complete Guide To R Wrangling Visualizing And Modeling Data","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/python-programming-language
  - skill/data-cleaning
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Cleaning%20in%20Python%20Essential%20Training.md)

![Data Cleaning in Python Essential Training](https://media.licdn.com/dms/image/v2/D560DAQG16fbd1_fa8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582799961?e=2147483647&amp;v=beta&amp;t=oq32b6x6vB4v0vfTtYMIsLW3eygzC_BuGdpxcn2chmA)

# Data Cleaning in Python Essential Training

> If you’re looking for more efficient ways to prepare your data for analysis, it’s time to level up your skill set and reassess your approach to data cleaning. In this course, instructor Miki Tebeka shows you some of the most important features of productive data cleaning and acquisition, with practical coding examples using Python to test your skills. Learn about the organizational value of clean 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364) | 1h | Intermediate | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why is clean data important?](#why-is-clean-data-important)
  - [Using Codespaces](#using-codespaces)
- [**1. Bad Data**](#1-bad-data) (4 videos)
  - [Types of errors](#types-of-errors)
  - [Missing values](#missing-values)
  - [Bad values](#bad-values)
  - [Duplicates](#duplicates)
- [**2. Causes of Errors**](#2-causes-of-errors) (5 videos)
  - [Human errors](#human-errors)
  - [Machine errors](#machine-errors)
  - [Design errors](#design-errors)
  - [Challenge: UI design](#challenge-ui-design)
  - [Solution: UI design](#solution-ui-design)
- [**3. Detecting Errors**](#3-detecting-errors) (8 videos)
  - [Schemas](#schemas)
  - [Validation](#validation)
  - [Finding missing data](#finding-missing-data)
  - [Domain knowledge](#domain-knowledge)
  - [Subgroups](#subgroups)
  - [Using Copilot to build schema](#using-copilot-to-build-schema)
  - [Challenge: Find bad data](#challenge-find-bad-data)
  - [Solution: Find bad data](#solution-find-bad-data)
- [**4. Preventing Errors**](#4-preventing-errors) (8 videos)
  - [Serialization formats](#serialization-formats)
  - [Digital signature](#digital-signature)
  - [Data pipelines and automation](#data-pipelines-and-automation)
  - [Transactions](#transactions)
  - [Data organization and tidy data](#data-organization-and-tidy-data)
  - [Process and data quality metrics](#process-and-data-quality-metrics)
  - [Challenge: ETL](#challenge-etl)
  - [Solution: ETL](#solution-etl)
- [**5. Fixing Errors**](#5-fixing-errors) (8 videos)
  - [Renaming fields](#renaming-fields)
  - [Fixing types](#fixing-types)
  - [Joining and splitting data](#joining-and-splitting-data)
  - [Deleting bad data](#deleting-bad-data)
  - [Filling missing values](#filling-missing-values)
  - [Reshaping data](#reshaping-data)
  - [Challenge: Workshop earnings](#challenge-workshop-earnings)
  - [Solution: Workshop earnings](#solution-workshop-earnings)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why is clean data important?](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=0)** - [Miki] Real world data is messy. It contains bad values, spelling mistakes, and missing data. It is estimated that data scientists spend between 80 to 90% of their time cleaning data. Lucky for you, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) are great tools for cleaning data. In this course, we'll cover many methods of cleaning data. We'll also cover how to avoid some common mistakes, detect bad data and monitor the quality of your system. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [miki] (1)

#### [Using Codespaces](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=0)** - [Instructor] This is Ravi Del Lobos senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) Code Spaces. Code Spaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub code spaces. Using code spaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a code space directly from the course overview page. First, click open next to GitHub Code Spaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Code Spaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create Code Space on main. The first time you open up a code space it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that don't panic,
>
> **[1:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=93)** code spaces saves everything you're doing on a virtual machine. You can always get the code space back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a code space is directly from one of our courses GitHub repositories. From here, click code and then create code space on main. You can also restart a previous code space from this location. GitHub Code Spaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=187)** on chapter two and the third video. I'll choose the beginning branch. As you work through a course you might make some changes on a branch. I'm going to make a minor edit on the index [HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say, 0703E, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the code space. To create your own fork, you can click on the fork button on their repository. I'm going to hit Create Fork. I have my own copy of this repository, and if I want to I can start a new code space on that fork. This fork version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=281)** like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run, get [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Code spaces will also ask you if you want to create a fork automatically. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (3), click on (2), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 1. Bad Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of errors](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=0)** - [Instructor] You will have errors in your data. We'll discuss the cause for these errors in another video, but for now, let's have a look at some of the common errors. One of the most common errors is missing values. For example, if you have our shopping cart data, when you look closely, you can see that on the third line, the amount is missing. Another type of errors are bad values. For example, in this shopping cart data, you can see that $217 for three pounds of carrot is a bit extreme. And the last type I'm going to mention is duplicated data. If you look at this data, you will see that line number three and number five are duplicated. These three kinds of errors are the ones I find most in data sets, and we'll cover how to detect and how to fix them.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Missing values](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=0)** - [Instructor] Let's have a look at shopping cart data. Here is the data in a CSV format. We have the date, the name, the amount and the price. And sometimes we see things that are missing. For example, the date from here and the name from here. Let's load the data. So we import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. And then we load the data frame and read in the data. I'm going to hide the menu on the side. And now we run the cell, we're reading the cart and we say parse_dates of the date column. And we look at the data frame. And we see several missing values. Here we see NaN, not a number, and here we see NaN again. In the date column, we see NaT, not a time. Pandas is trying to use the right missing value per type. Pandas also treat [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s none as a missing value. If you look at the amount column, you will see that it is a float. You can do it also by writing data frame.dtypes and hit Enter. And you see that the amount is float64. The problem is that integers do not have missing values. So pandas will convert integers to floating points in order to accommodate missing values. Panda also have an IntegerArray type,
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=95)** which you can have integers with missing values. Let's do df amount astype Int32. And if you're going to run this cell, you're going to see now we get integer and another missing value, NA. How can you programmatically find out where are these missing values? You can use the pandas.isnull function or the isnull method of the data frame. So if I'm going to run data frame isnull, I'm going to get a data frame with true and false per cell but this is usually not what we want. In my case, I want to find out rows that have a missing value. So I'm going to do isnull and then ask any, so any of the value in the row in the first axis, the rows. If I'm going to run this cell, I'm going to see the rows that have missing values in them. Note that the empty string is not considered a missing value. You will need to use Boolean indexing to find this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** find (3), python (1)
> **Code Identifiers:** parse_dates (1)
> **Env Vars:** csv (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Bad values](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=0)** - [Instructor] Your data will have bad values. When I say bad, I mean data that was generated by error. It can be out of scale values such as a thousand degrees for our body temperature, maybe spelling mistakes, and others. Let's have a look at some metrics data. Here we have a CSV with time, name of the metric, and a value. Let's load it up. So we start by importing [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd, and I'm going to hide the bar on the left side. And now, I'm going to read a CSV and parse the time column as date. And I'm going to sample 10 random rows. And we see some memory, some cpus, and some values. Let's use groupby to have a look at [Statistics](../../Skills/Data%20Science/Statistics.md) per metric. So let's run the cell, groupby name and describe. And we see that the CPU has one count with the mean, and we see that minus 32.14 is probably an error for a metric value, either CPU or memory. The value count method is a great way to find problems in categorical data such as the name. So let's run df name, values count. And we say we have 50 of memory, but 49 of cpu with a lowercase, and a single CPU with the uppercase. Some people find it easier to spot bad values on a chart. I'm going to pivot the DataFrame
>
> **[1:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=94)** where the index is the time, the columns are going to be the name, and I'm going to plot with subplots equal True. And here we see the CPU with uppercase, cpu with lowercase, values, and the memory. And we see that the cpu is going below the zero, which is a problem. If you know the range of valid values in your data, you can find out values that are outside of this range. Let's take a look at cpu, which is the load in percent. It should be between zero and hundred. So I'm going to run DataFrame query where the name is cpu and the value is either less than zero or bigger than a hundred. If you're going to run it, we are going to find two rows that are problematic. Sometimes you're going to use more complex methods to find bad data. The standard score is a distance of a data point from the mean in units of standard deviation. It's a good way to find outliers in data that is normally distributed. You should know your data distribution characteristics. So let's have a look. We are going to get only the memory and calculate the z score, which is the distance from the mean, and get the bad values. To find the rows, we are going to use the DataFrame .loc with the index of the bad memory. And we found the one row with some bad data. There are even more sophisticated ways
>
> **[3:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=187)** of detecting bad data. See scikit-learn section about Novelty and Outlier Detection if you want to go deeper.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** find (7)
> **Env Vars:** cpu (4), csv (2)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Versions:** 32.14 (1)
> **Speakers:** - [instructor] (1)

#### [Duplicates](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=0)** - [Instructor] Duplicate data will make your calculations go wrong. Even worse, if you process the same transaction twice, you're going to lose a customer. Let's have a look at the shopping cart data. So we have date, name, amount, and price. Let's load it up. So we import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd and I'm going to hide the left column. And now we're going to read the csv passing the date column as date. And you can see we have several columns like one and two, and four and five that looks the same. Pandas come with a duplicated method. Let's run it. And you see it's going to catch only the last two. So five is a duplicate of four. If you look closely, you see that in rows one and two, the price is different, 1.70 and 1.20. By default, duplicated will consider values from all columns, but you can tell it to look for a subset of columns. In database terms, we call this the key. So let's run again duplicated, this time looking only at the date and the name column. And now we've found that line two is also a duplicate of line one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Versions:** 1.70 (1), 1.20 (1)
> **Definitions:** is a  (1), we call this (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Causes of Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Human errors](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=0)** - [Instructor] Humans are by far the most common cause of errors. If only we can remove them from the equation. The most common place where we humans make errors is when entering data. Let's have a look at an input form for a payment. So, we have a donation for Scrooge McDuck. The name looks like it's missing a space, but actually there is a zero with Unicode space there. This is mostly caused by copy and paste error. The country has a typo. The credit card number is missing a digit. The expiration is in year and month, and not month and year, and the amount is two and then a capital O, and not 20. Most of these mistakes can be avoided by creating a good UI which does validation before submitting. However, in some cases, such as names and emails, it's hard to do a good validation.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Machine errors](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=0)** - [Instructor] Machine errors can come from various causes. Some values are calculated, say BMI, and the code that calculates them might have bugs. Make sure you save raw data if you ever need to recalculate. Other errors can be caused by faulty sensors or machines. A very common error is clock accuracy. A computer clock drifts away from the accurate time, and will need to sync with an NTP server from time to time. Other sensors can go wrong, from dirt on camera lens, a faulty network transfer, and even cosmic rays. Some machine errors are serialization error. You might transfer data in a big-endian format but the other side will read them as little-endian format.

> [!info]- Semantic Content
>
> **Env Vars:** bmi (1), ntp (1)
> **CLI Commands:** make (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### [Design errors](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=0)** - [Instructor] There are two aspects to design. One is the UI for collecting data. For example, in our payment form, instead of writing the country, you can have the user pick a country from a dropdown list to avoid errors. The second is system design. For example, when we talk about payments, you can say that the payment has both the currency and the amount. And this will help the UI design with the [Data Validation](../../Skills/Software%20Development/Data%20Validation.md). You can go further and say that the amount must be bigger than zero. There is a field called ontology engineering, which formally defines the relationships between all the pieces of the data in your organization. It might seem theoretical, but once you find you have several different definitions in your company for what a customer is, you will understand the need to be precise in your definitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: UI design](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980&t=0)** - [Instructor] Improve our current payment form and try to make it error proof as possible. Don't go fancy. Paper to sketch the UI, and write the limitations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: UI design](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=0)** - [Instructor] Here's my solution. For the name field, there's nothing much we can do. In the country name, I'm going to use a drop down menu from the list of all the countries. The card number is split with four sections so it's easier for the user to see that they're missing a digit, and it's going to stay red until they fill the whole digits. The expiration day is, again, a dropdown for the month and the year, or we can do one of these fancy date selector menus. The amount I put the currency at the beginning, and we're going to limit the input box only to numbers. And the button is going to be disabled until the form is valid.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Detecting Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Schemas](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=0)** - [Instructor] A Schema defines constraints and relationships in your data. Some formats such as [JSON](../../Skills/Web%20Development/JSON.md), do not have a formal schema. Others like [Protocol Buffers](../../Glossary/Standard/Protocol%20Buffers.md), do have a schema. Even if your data does not have a formal schema it is still out there as your assumptions about what is valid data. If you don't use formal schemas most likely these assumptions will be scattered throughout the code and in developer's head and that is not good. Say writing a code to track ships in the ocean. For every observation of a ship, you'll have the following data. The name and the location is latitude and longitude. Let's take a look. Here's an example csv file. We have the Black Pearl, Cobra, Flying Dutchman and the Empress at an unknown location. Most schemes have constraints about the type of data. For example, you can see that latitude is a floating point number. There are various ways to check the data confines to schema. If you have control over the data pipeline you can use tools such as JSON Schema, a database schema or even validation specific language like CUE. Or in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use libraries such as pydantic and marshmallow. In my experience, eventually you will write your own validation code at one point or another,
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=95)** and none of these tools will cover all of your needs. Let's load the data and have a look at the types. So import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd and then we are going to read the csv file. And now we are going to run the df.dtypes which shows us the data type per column. And we see that the name is an object, which means a string in pandas and then the latitude and longitude are floating points. Let's have a look at what an [SQL](../../Skills/Data%20Science/SQL.md) schema might look like for this kind of data. So the name is a text and latitude and longitudes are floats. You need to think if you allow NULL values in any of the fields. In SQL, this is done by adding a NOT NULL constraint to a column definition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Protocol Buffers](../../Glossary/Standard/Protocol%20Buffers.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** json (2), sql (2), null (2), cue (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Validation](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=0)** - [Instructor] Once you define a schema, you can use it to find out bad values. I'm going to use the Pandera library, but there are other libraries you can use, or you can write your own validation code. Let's have a look. Here's our ship data with the name, the latitude, and the longitude. First, let's start by importing [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and loading the csv. And we see we have the names, and the latitude, and the longitude. Now we can import pandera as pa. You can ignore the numpy input. And we define a schema which is a data frame schema, where the name is a string, and latitude and longitude are both floats. And now we can call schema.validate on the data frame. And when we run it, you are going to see an error. By default, Pandera does not allow missing values in columns. Let's fix that by saying nullable=True, for the latitude, and for the longitude, nullable=True. And now let's run it again. And this time without an error, we get a DataFrame back. Should you have null values in some of your columns? There's no good general answer. You should know your data and decide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Finding missing data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=0)** - In some cases, some features will be missing. Missing data can come from users refusing to answer a question or data that is missing a feature and other reasons. Let's have a look at our shipping data. We have the name of the ship, the latitude and the longitude. We have the Black Pearl, the Cobra, the Flying Dutchman and then the Empress at an unknown location and a mysterious ship at another location. Let's find rows with missing data. So we input [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd and load using read_csv the CSV file. And I'm going to hide the bar on the left. And we see that we have several missing values. Let's run the isnull with axis equal one to find rows with missing values. And we see we got only one row. Why are we getting just one row? Let's have a look at the name of the last ship? When we look at it, we see it's not truly an empty string. There is a space in it. So let's strip out all the names so we won't have spaces either to the left or to the right. And if you run this cell, we see that now this is an empty string. Let's run isnull again. And we still get only the Empress. If you look at the documentation of pandas.isnull, you will see that the empty string is not considered as missing values. Let's replace the empty string with nan
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=95)** and try again. So we create the mask, which is all the strings, all the names that are empty and then set them to nan. Once we do that, we can run isnull again. This time we're going to see both rows. Question of what is missing value is trickier than it seems. Apart from the ones pandas thinks are missing values and the empty strings, user might enter a phrase, such as I don't know. Over time, you'll gather a set of missing values per column. Make sure to update this set and use it in your code. You can also have missing rows of data. This can be harder to detect in most cases. Let's have a look at location information. So looking here and looking at locations.csv. And you see here we have date, latitude and longitude. And if you look closely, you see that between the 8th and the 10th, we're missing a whole day. If you have time series-based data, it might be easier to detect missing rows. I highly encourage you to read the working with missing data section in the pandas user guide. It has a lot of excellent advice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** locations.csv (1)
> **Code Identifiers:** read_csv (1)
> **Env Vars:** csv (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)

#### [Domain knowledge](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=0)** - [Instructor] Domain knowledge will help you know what are valid values for a column. Let's say we have our shipping data. We have the name, the latitude and the longitude. If you look at latitude and longitude, which are location on earth, they have a range of values. Latitudes are between minus 90 and 90, and longitude are between minus 180 to 180. Let's load the data and add this domain knowledge. So ships.py, we first import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd, and read the csv. So, run the cell. I'm going to hide the left column. And now, we're going to define a pandera schema. The pandera schema is going to say that the name is a string, and then, the latitude is a column of floats. It can be nullable, and we should check that the values are between minus 90 and nine. And we say that it is element_wise check, meaning we check every element in the column. And the same goes for the longitude just with minus 180 and 180. And now we can run it and validate that we have valid data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Definitions:** is a  (2)
> **File Paths:** ships.py (1)
> **Code Identifiers:** element_wise (1)
> **Speakers:** - [instructor] (1)

#### [Subgroups](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=0)** - [Instructor] Say you want to measure student heights. Let's have a look at the data. We have a csv with the name, grade, and the height. Let's load it. It does start from here. So we import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and reading the csv. And I'm going to hide the left column. And we see Adam, Beth, Chris, and Dana. If you'd like to validate the height, you can go over, for example, to Wikipedia, and find out that the tallest person alive was 107.1 inches. Looking at all the heights, they seem okay. However, Beth seems like awfully tall for a first grader. You do some research and find out that first grade height are up to 32 inches. So first, create data frame with the maximal heights. We're going to do just a single row for the first grade, so first and 32. And now we are going to merge the data frame with the values with the data frame of the maximal heights with the left join. When we run the cell, now we are going to get the name, the grade, the height, and also the maximal height. And now we can check the data frame where the height is bigger than the maximal height, and find out that Beth is unusually tall.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **CLI Commands:** find (3)
> **Versions:** 107.1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using Copilot to build schema](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=0)** - [Instructor] Nowadays, we also have AI to help us. So in Visual Studio Code, you can click on the [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) button and get a new chat. And here now, you can ask it something. So I can ask it, find more rules for the schema.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=22)** It give me some examples. And now I have a code that I can copy and paste. This is great, but you know, it's less than ideal. So what I can do is I can, instead of asking mode, go to edit mode. And now I can do again, find more rules for the schema. So I can do it manually. I just says, ships.csv, which is added to the context, and now I'm going to run it. And now this is adding it directly to the file. You can look at the code and once you're happy, you can do keep. And now it's there. Don't forget, always, always check what copilot is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), go to (1)
> **File Paths:** ships.csv (1)
> **Tools:** visual studio (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find bad data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=0)** - [Instructor] Here we have some data about rides. We have the name of the driver, the license plate, and the distance. You need to validate the data. You should find out all the rows that have bad values. Missing values are not allowed. A plate must be a combination of at least three uppercase letters or digits. And the distance must be bigger than zero.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Find bad data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=5)** - Let's have a look at my solution. First, we're going to input [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and read the csv. And now for every constraint I'm going to create a mask. So the first mask is missing values. So we say data frame is now any access one. If I'm going to run this one, I'm going to see we have two rows with name values. Second one is the plate mask. The plate mask is going to use the str match with three or more letters or numbers. So, and we're going to use the tilde sign meaning we want to negate this one. Anything that does not match that. And if you're going to run this one we are going to see if we have an hand plate another empty one, and Wednesday has just a letter 'A'. The final one is the distance mask, which is easy, the distance is lower than zero. And if you run this cell we're going to see we have one which is for Lurch. Finally, we can combine all of these using the OR sign. And this is the null mask, or the plate mask, or the distance mask. And if you run this one, we see that almost all of the columns have bad values in them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Speakers:** - let (1)


### 4. Preventing Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Serialization formats](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=0)** - [Narrator] There are many ways and formats to store your data. Some serialization formats such as CSV are only text. When [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) reads from a CSV file, it'll guess the types. In some cases, such in time columns, you'll need to explicitly tell Pandas which columns to convert. Some civilization format such as [JSON](../../Skills/Web%20Development/JSON.md) have types. However, JSON has only a single numerical type. JSON also don't have a schema embedded in the data, which means you will need an external schema to tell you if the data is valid. The best utilization formats have both types and a formal schema, such as [SQL](../../Skills/Data%20Science/SQL.md). We're going to have a look at the Apache Parquet format, which is a binary format with types and a schema. To use Parquet with Pandas, you'll need to have the Apache Arrow package installed, which is called, PyArrow. Let's have a look. So, we are going to create a data frame with five rows, which have time, name, and a value. Let's run the cell. And I'm going to hide the left column. And now we import PyArrow as PA, and define a schema for the data. So PA dot schema, the time is a timestamp
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=95)** in milliseconds, a string, and a float64 for the value. And now we can save the data frame to a file. We define the output file as metrics dot Parquet and we say data frame to Parquet to the out file with our schema. And if you look back at our files we see now that we have metrics dot Parquet. We hide this again, if you want to read it we just need to do PD read Parquet and the output file. If you're going to do a different type, for example we convert the time to a string and then try to save it, you will see that Parquet is going to raise an exception, which is going to guard you against saving bad data into a Parquet file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** json (3), csv (2), sql (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** apache (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [narrator] (1)

#### [Digital signature](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=0)** - Files can get corrupted. It can be due to various reasons, such as network errors, disk failures, and more. A common practice is to calculate the file digital signature, also known as the hash, and store it next to the data file. This way you can validate the integrity of your data file before processing it. There are several digital signatures, such as MD5, SHA1, SHA256, CRC32, and many more. Pick one that is secure, and depending on your performance goals, not too slow. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Standard Library has most of the hashes and digital digests in the hashlib model. But for others, let's say the CRC32, you will need to use a different library. In this case, the zlib Library. Here is our metrics file. It has several values and you would like to calculate the digital signature. I'm going to calculate the digital signature from the command line, so terminal and new terminal. And then let's change directory to chapter 4, 04, 02. And now I can use the command line utility sha256sum on the file. And I'm getting a long digital signature for the file. I can also save it now as the sha256sum.txt right next to the file.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=95)** And now we can check the file integrity. So sha256sum dash C for check and the sha256 text, And you tell us that this is okay. Let's change a value. So I'm going to change a value and save the file. And let's run it again. And you see this time it failed meaning there was some error in the file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** crc32 (2), md5 (1), sha1 (1), sha256 (1)
> **Tools:** command line (2), terminal (2)
> **Analogies:** such as (2)
> **File Paths:** sha256sum.txt (1)
> **CLI Commands:** python (1)
> **Definitions:** known as (1)
> **Speakers:** - files (1)

#### [Data pipelines and automation](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=0)** - [Narrator] Data pipeline is a series of steps each consuming input and producing output. There are many systems for creating [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) such as [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md). Writing your own is not that hard but I recommend investing time in an existing one. The main advantage of using a pipeline is that each step is small, self-contained, and easier to check. Some data pipeline systems also allow you to resume a pipeline from the middle, which can save you a lot of time. When designing data pipelines, it's important to add [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) and cleaning into the pipeline. Once you have these in place, you can quickly detect errors and stop the pipeline. Editors start from here. I'm going to use Invoke which is a small system of running tasks. It is simple and easy to use. For a real production system, you'll probably pick a system with more features such as airflow. Let's have a look. So we have our CSV file with some rides data. The car name, start of the ride, end of the ride and what was the charge. And we'd like to load it to a CSV. So here is our code. We import sqlite3. This is the database we're going to use. It's small embedded database, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and Invoke. We define a function to load the CSV from the file.
>
> **[1:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=96)** We read the CSV. We tell pandas that the start and end columns are dates. We also define a validation step. In this one we query if the start is not bigger than the end, and if it is, we raise a value error. And finally, we define our task, which is an ETL. ETL stands for extract, transform, and load. We extract the data from the CSV, transform it, for example timestamps, and then load it into the database. So we load the CSV, we validate, we create a database file we connect to it with sqlite, and we use the data frame to [SQL](../../Skills/Data%20Science/SQL.md) into the right table with a connection. Don't store the index of the database. And if the data exists, we append to the table. And now let's start a terminal. So terminal, new terminal. And then I'm going to change directory to chapter 4, 04, 03. And now I can run invoke--list. And you see I have a single task, which is the ETL. Now I can run it. So invoke, ETL, and then --CSV-file. This one is going to match the CSV_file parameter to the CSV. And we're going to say rides.csv. Once we've done that you see we have rides.db now added.
>
> **[3:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=193)** Let's use the sqlite3 command line tool to check it out. So rides.db, and we can do .schema to check what's inside the database. We see a rides table with the courage text. The start and end are timestamps and the charge is real which is a floating point number. We can even do select star from rides just to see the data. Don't do it if the data is really large.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** csv (8), etl (4), sql (1)
> **Definitions:** is a  (3), is an  (1), stands for (1)
> **Tools:** terminal (3), command line (1)
> **CLI Commands:** sqlite3 (2), apache (1)
> **Analogies:** such as (2), for example (1)
> **File Paths:** rides.csv (1)
> **Speakers:** - [narrator] (1)

#### [Transactions](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=0)** - There are many ways why I like [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). They are an old and established technology. There's a lot of knowledge and tooling around them. They provide a schema and you can query data with [SQL](../../Skills/Data%20Science/SQL.md), which a lot of people know. But one of the most important features when talking about [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) is transactions. A transaction mean either all of your changes go in or none of it. Say you insert data and suddenly there's an invalid record and you get an exception. Without a transaction, you need to manually figure out which records made it to the database and which ones you need to try again. Also, if you have a downstream system that process the data for a given day, how will it know that the upstream process is done inserting the data? With transaction, the data is either there or it's not. Let's have a look at some introductions. So we have our ship data with the name of the ship, latitude and longitude, and the last record is an invalid record. And now we have our ETL process. First we're going to load the data from the CSV. Let's run the cell. And now we are going to insert the data. So import sqlite. We create a schema with the name and latitude and longitude and we say they are not null, they're not allowed to be null. Here we have a database file which is ship. We connect to it with sqlite, and we execute script to create schema. And now we try with statement
>
> **[1:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=96)** to insert the data using data frame to SQL to the connection. And if the table exists, append the data and don't store the data frame index. The context manager. I will do a rollback operation if there is an exception or a commit if there's no exception, and rephrase, adding all of the data into the database. So, let's run this cell. And because there's invalid data, we see not now constraint on the latitude. Let's open the command line, so terminal, new terminal, and then CD to Chapter 4 04_04. And then we can do sqlite3 ships.db. The file was created, but if you do SELECT * FROM ships, we are going to see no data came in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** sql (2), etl (1), csv (1), select (1)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** cd (1), sqlite3 (1)
> **Definitions:** is an  (2)
> **SQL:** select (1)
> **UI Navigation:** open the (1)
> **Speakers:** - there (1)

#### [Data organization and tidy data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=0)** - [Instructor] One of the worst thing you can do for data for data is let it grow organically. I worked with companies that had no idea what some columns mean and how the data in them got populated. You need to think about your [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), relations, and more, and actively maintain your data schema. One good way to organize data, known as Tidy Data, also, narrow data. In Tidy Data, each row has only a single observation. Let's have a look. Here, we have the data in a wide format. We have time, CPU, and memory, which means that each row has two observation, one for CPU and one for memory. If you're going to a narrow format we'll have the time, the metric name, and then the value. And now, each row has only one observation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Env Vars:** cpu (2)
> **Definitions:** known as (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Process and data quality metrics](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=0)** - Your data will never be 100% okay. You need to decide what to do with bad data and set [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) metrics. You should ask yourself questions, such as what should you do if you have more than a 10% of bad records? Should you reprocess bad data or just ignore it? When should you stop everything and raise an alert? Let's say we have this order information, we have the time of the order, the symbol, the price and the side, bid or ask Inner code. First we're going to load the data with pd read CSV and tell it that the time column is a timestamp, we're going to hide the left column. So now we have a data frame with the data. Now we can say which is a valid row and we have several rules, the time must be after the 1900's, the symbol shouldn't be null, or the MP string, and the price shouldn't be less than zero. And now we can get the OK data frame which is the data frame apply that is valid row on axis equal one, meaning on the rows. Once we run this we have the OK rows inside, and now we can run some calculations. So the number of bad records is the length of the original data frame minus the length of the OK. We can also calculate the percent and if you have some bad rows we are going to display them. In real life these prints should be logging.
>
> **[1:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=98)** Let's run the cell. We see you have 5% of bad rows and reprinting it which is a singular out of the 20. In production, instead of printing you will send these metrics to a system such as Prometheus or InfluxDB. And then you should probably add some alerting on top of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Env Vars:** csv (1)
> **Speakers:** - your (1)

#### [Challenge: ETL](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=5)** - [Instructor] So we have some traffic information. So we have the IP of the incoming request, the time, the path on the server, such as /images, the status, which is the HTP code, and the size of the return data. You need to create an ETL from this CSV file into an sqlite3 database. You should drop and report invalid row. An IP should be a valid IP. See the IP address module. Time must not be in the future. Path cannot be empty. The status code must be a valid HTP status code. See HTP status request enumerate for list of status codes. And size cannot be negative or empty. At the end of the ETL, report the percentage of bad rows and fail the ETL if there are more than 5% bad rows.

> [!info]- Semantic Content
>
> **Env Vars:** htp (3), etl (3), csv (1)
> **CLI Commands:** sqlite3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### [Solution: ETL](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=0)** - [Instructor] Let's have a look at my solution. I'm importing sqlite3 to save to sqlite. Importing the HTTP statuses to get the status. And from ipaddress, I'm importing the ip_address function, so I can check if something is a valid IP. I create a set of all the valid status code with set(HTTPStatus) and define the maximal bad percent. Now I can define what is a valid row. First, we try to use the ip_address to parse the ip, which is a string, into an ip_address. If you fail, it is false, meaning not a valid row. Next, we take the current time and compare it to the time in the row, which should be smaller than what we have. We check that the path is not null, the status is a valid status code, and that the size cannot be negative or empty. And now we do the etl. First, we load the DataFrame. And now, we do bad_rows, which is DataFrame and the negation with a tilde sign of df.apply is_valid_row with axis=1 And if you had some bad row, we calculate the percentage, print out, and if it's bigger than the maximal value, we're raising an exception. Otherwise, we take only the valid rows and save them to the database. Making sure to close the connection.
>
> **[1:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=93)** Starting a transaction. And then with the connection, so we'll get either a rollback or a commit. We do df.to_sql into the connection, append if the table is already there, and don't store the index. Finally, we run our etl from traffic.csv to traffic.db. Let's have a look. So we start the Terminal and New Terminal. And then, we're going to Ch04/solution/. And then, we are going to run [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) etl.py. We see that we have five bad rows, which are three point nine one percent of the rows, which is still okay. And we have traffic to be created. We can use sqlite3 on the traffic.db. Look at the schema. And we, let's do SELECT COUNT of ip FROM traffic. And we see that we have 123 rows inside.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** ip_address (3), bad_rows (1), is_valid_row (1), to_sql (1)
> **Definitions:** is a  (4)
> **CLI Commands:** sqlite3 (2), python (1)
> **Env Vars:** http (1), select (1), count (1)
> **File Paths:** traffic.csv (1), etl.py (1)
> **Tools:** terminal (2)
> **SQL:** select (1)


### 5. Fixing Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Renaming fields](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=0)** - [Narrator] Sometimes the names in the data do not match names we'd like to use, and you would like to rename them. For example, say you have some weather data. It looks like this. We have DATE, TMIN, and TMAX. We would like to make all the names of the column lowercase and change TMIN and TMAX to min_temp and max_temp. Here's our code. First, we're going to load the data frame, and as we can see the column names are the original one in the data. Now we can run the rename method of the data frame. We say that we want to rename the columns and then we give a dictionary saying the date should go to date in lowercase. And TMIN and TMAX go to min_temp and max_temp. And finally, we say in place equal true means we want to change the current data frame, not get a new one. If you're going to run the cell, now we have the column names as we want them. Sometimes this transformation can be a bit trickier. Say we have some donation data. Right, so we have the first name, the last name and donation amount. And we would like to get rid of the numbers, make everything lowercase and use underscore instead of spaces. So again, first we are going to load the donation data and we see the column names, our first name, last name and donation amount. And now we can define a function. Let me hide the left side.
>
> **[1:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=94)** So, fix a column. We do substitute with a regular expression, saying anything that is a number, one or more and a dot. And after that space, one or more, we want convert it to nothing. Basically remove it. Then, convert to lowercase. And finally, replace the space with an underscore. And now we say data frame, rename, columns. And now we give our function instead of the dictionary we used above and again in place through to change the current data frame. If you're going to run this cell, we see now we have first, underscore name last, underscore name, and donation underscore amount. All in lower case.

> [!info]- Semantic Content
>
> **Env Vars:** tmin (3), tmax (3), date (1)
> **Code Identifiers:** min_temp (2), max_temp (2)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Fixing types](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=0)** - Such formats, such as CSV, do not have type information. When [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) loads the data, it will guess what are the data types, but sometimes we need to give it some extra help. Let's have a look at some data about points and their colors. So, here's our CSV, we have X and Y, which are the coordinates, and then the color, and is it visible or not. And here is our code. Let's start by loading the data frame and showing the data types. And I'm going to hide the bar on the left. And we see that the points X and Y are int 64. The color and the visible are object, which means a string. Let's fix the color first. So I'm defining function asint, which uses the built-in int function on the value and says base equal zero, meaning get the base from the string itself. Since our data has zero X at the beginning, it is going to use base 16. And if you run it now, we see now that the color is an integer. Now let's fix the visibility, which would be a boolean. So created the dictionary that the string yes is true and the string no is false. And now I can do DF visible equal and I'm using the map method of the series to convert the values to boolean. And we run it, and now we get the right types. Finally,
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=92)** we can look at the resulting data frame. Let's click on run. And we see that the value is X and Y. Color is shown as a decimal value, while in the CSV, it's in hexa decimal. So, it looks a bit different. And the visibility is a boolean of true enforce.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** csv (3)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - such (1)

#### [Joining and splitting data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=0)** - In some cases, the raw data will be in a format that is not suitable for us. We will need to either join or split and maybe do both, in order to make the data usable for us. Let's say that you're a freelancer, and you're writing the time that you work for each client. You would like to know how much time you worked this month. Let's have a look. So, the CSV has the day, the time, and the time has a start and an end, in the same column, and the client name. Note also, that the CSV file name, 2021-06, contains the date. Let's make it usable. So we start by importing [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and loading the CSV file. And we have day, we have time, which is a string, and we have the client. I'm going to add a column with a date, which is taken from the CSV file. So I'm taking the CSV file, and then I'm trimming the .csv at the end, and adding it to the date column. And now we have another date column here, with the date. Next, I'm going to set the times. So I'm going to split the time column, into a start and an end column by the dash. And I'm going to do it with the str.split and say, expand equal true. I'm going to get a new data frame with two columns, which I'm going to call start and end. Once I have this data frame with the start time and the end time, I'm going to use concat,
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=92)** to join it to the original data frame, and get a data frame with all the columns. The axis equal one meaning, I want to do it horizontally. And now I have the day, the client, the date, the start and the end. Now for every row, I'm going to join the date and the start, and the date and the end, to generate a value that pandas can pass as a time. So, I'm going to use pd.to_datetime, which passes a string, and then I'm taking the date string, doing cat, concatenating with the start and adding a separator called T. So I'm going to have 2021-06, T, 09:00. And when I'm going to run this one, now I have a data frame, where the start and end, are actually timestamps. Finally, I can run my calculation. I can do end minus start, and calculate the sum. And I see that on that month, I worked 23 hours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Env Vars:** csv (5)
> **CLI Commands:** make (2), cat (1)
> **Code Identifiers:** to_datetime (1)
> **Ports:** :00 (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Deleting bad data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=0)** - One of the easiest ways to deal with bad rows is to delete them. Say we have some rides data and we would like to ignore or delete the rows that are not valid. So here is our data. We have the name, the plate, and the distance, and we would like to ignore rows that either the distance is less than zero or that we're missing the name. So here is our code. First, let's load the csv. And we can see that here the distance is lower than zero, and here we do not have a name. So I'm going to create a mask using the eval method of the data frame, which is either the name is null or the distance is smaller or equal to zero. If I'm going to run it, I'm going to get a true or false per roll, and I'm seeing that row three and four are bad ones. Now I'm going to say the data frame is the data frame and I'm going to negate the mask using the still design, meaning I want all the rows that are not considered bad. When I'm running this, now I'm going to get the data frame with only valid rows. Note that the index has some gaps in it right now. We're jumping from two to five. You can use the reset index if you want to get a new index.

> [!info]- Semantic Content
>
> **Warnings:** note that (1)
> **Speakers:** - one (1)

#### [Filling missing values](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=0)** - [Instructor] In some cases you would like to fill out missing values by some heuristic. Let's say we have some shopping information. We have the date, the name of the item being bought, the amount and the price. And you can see that in some cases we are missing the amount, in some the date, and in some the name. First, let's load the data frame and have a look at it. And we see that we have a data frame. Here we are missing the time in the name column. We have a missing name here on the last one. In the amount, row two, we have a missing amount in the price. We have a missing price. Let's start with the amount. We're going to fill one where the amount is missing. So, we're are going to use Panda's fill N A method. Which has a lot of options. First, we fill it with a fixed value Saying in place, equal true meaning we want to change the current data frame, not generate a new one. And if you run this one, and now we can see that the amount line three is one. Next we are going to fill out the name. And the heuristic we're going to use is we're going to pick the most common name. So, we're taking most common as D F name, mode, and then pick the first one. And now again, we're going to use fill N A with the most common name in place one. And let's run the cycle. And we can see that the last row we get potato now. Next we're going to handle the dates. For time series, you can use the F fill or B fill method.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=95)** F fill stands for forward fill, and it means that we are going to take the value from the row before and place it there. Which is great for time series data. So, let's run the cell. And now we see in row four we have the same date as row three. The price is going to get tricky. What we're going to do is we're going to find the average price per item and then fill it. So, first we're going to do a group buy on the name, get the price column, doing a transform using the mean from Numpy. And if you look at the prices, let's run it. We see now that we get price per row. And if you look, for example, at the last two lines, which are potato, they have the same amount, which is the mean price per potatoes. And now we can tell the price to fill N A, this time from the prices. Meaning if there's no value it is going to use the value from prices. Otherwise, it's going to leave the value that is in the data frame in place through again and run the cell. And now we don't have any more missing values in our data frame.

> [!info]- Semantic Content
>
> **Definitions:** stands for (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Reshaping data](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=0)** - [Instructor] Sometimes, the data will be in the wrong shape, and you will need to reshape it to the right shape in order to work with it effectively. Say we have some metrics data. In the metrics data, we have for every row both the CPU and the memory. This is known as a wide format. We would like to convert it to a long or narrow format with a single observation per row, what is called also, tidy data. To do that, we are going to use the [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) melt function, which takes the wide format and converting it to a narrow one. So, here's the metrics. Let's load them into a data frame. And now, we're going to use pandas melt. We say, use it on the data frame. Take the values from the CPU and the memory, the identity variables are the time, and call the new variable metric. Now we have a data frame in a narrow format. We have the time, we have the metric name, and then we have the value. A single observation per row. Pandas also have a pivot table function, that can also transform and reshape your data in various ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3)
> **Env Vars:** cpu (2)
> **Definitions:** known as (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Workshop earnings](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=0)** - [Instructor] Let's say I'm using [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) to track earnings in some workshops. This is how the Excel looks like. We have the year, then the month, and for athe month, I have the start day, the end day, the name of the course, and the earnings. When I export this Excel to a CSV, this is how it looks like. I have a year, month, start, end, name, and earnings, and then a lot of missing values, but also that the earnings are a string. What I'd like you to do is fix the data frame. At the end, each row should have the following columns: a start and an end, which are timestamps in [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), a name which is a string, a topic which is a string, either [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or Go. And you can get that from the course name. If there's a Go, it's a Go course. if there's a Python, it's a Python course. And finally, the earnings which should be a floating point number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Workshop earnings](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=6)** - [Instructor] Let's have a look at my solution. First, we're going to load the data frame, surround the cell. What I'm going to do is I'm going to fill the year and the month with fill an A with forward filling and do it in place. So once I run the cell now the year and the month are filled. Next I'm going to drop the rows that had only the year or only the month. In the CSV file, these row are going to have nan in the start and the name and the earnings. I'm going to pick the earnings. I'm going to say it's the data frame when the earning is not now. And I'm going to copy it, create a new data frame. Next, I'm going to fix the dates. So I'm going to say as date, which gets a row and column. And I'm going to say the year is from the row year column. The month is from the month column and the day is from the column that is being passed as a parameter to the function. Now I'm going to create a timestamp using an F stringing. So the month, the day, the year and then I'm using the two day time from [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) with this generated string and telling it what is the right format. You can check the SGF time documentation for all these percent, B percent D percent Y, and other ones. And now I'm going to create two new columns start and end by applying this function access equal one meaning role wise and passing the argument
>
> **[1:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=97)** which is what column should we look for the day. And once we run this one, we have data frame. And you can see at the end we have the start and end as data. Next, let's extract the topic. So I'm going to look at the name column convert it to lowercase because I have go [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) but I have also go in lowercase. So if go is in the name returning Go. Otherwise it's Python. And we do DF name, we do SDL to lower to get the lowercase. And then we're going to apply the topic. And now we have another column called Topic which has Python. Now we're going to take care of the earnings which are strings because of these dollar sign graphics. So I'm going to say Pandas to numeric. I'm going to take the earning columns as a string and I'm going to replace the dollar sign and the comma with an empty string basically removing them from the string. And I'm going to say that I want it as a flow 64 type. And now at the end of the data frame we have an earnings column. Finally, I'm going to generate the data frame that I want. So I'm going to take only the columns that interest me. So these are the start, the end, the name, the topic and the earnings. And to help my O C D I'm converting the name to a lower case. Again, replacing it in the data frame itself. And we can run the cell. And now we have the data frame as we want it. The start, the end, the name, the topic, and the earnings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **CLI Commands:** python (3)
> **Env Vars:** csv (1), sgf (1), sdl (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=0)** - [Narrator] We've covered a lot of ground in this course. Next, you should try to implement what you learned in your own project. Grab some data, and start cleaning it up. If you don't have data, go and search for it. There's a lot of free data out there. For example, Kaggle is a great place to find real world data. And feel free to reach out. I'd love to hear your war stories about messy data, and how you managed to tackle it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [Miki Tebeka](../../Instructors/Data%20Science/Miki%20Tebeka.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/data-cleaning-in-python-essential-training-3086536/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Cleaning

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
← [Python for Data Science and Machine Learning Essential Training Part 2](../Artificial%20Intelligence%20(AI)/Python%20for%20Data%20Science%20and%20Machine%20Learning%20Essential%20Training%20Part%202.md) | **4 of 7** | [Apache Spark Essential Training- Big Data Engineering](Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md) →

### In [Become a Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Become%20a%20Data%20Analyst.md)
← [Complete Guide To R Wrangling Visualizing And Modeling Data](Complete%20Guide%20To%20R%20Wrangling%20Visualizing%20And%20Modeling%20Data.md) | **12 of 12**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
- [Become a Data Analyst](../../Paths/Data%20Science/Learning%20Paths/Become%20a%20Data%20Analyst.md)

## Related Courses

_Courses sharing skills:_

- [Data Cleaning and Manipulating with Python in Excel](Data%20Cleaning%20and%20Manipulating%20with%20Python%20in%20Excel.md) — Python (Programming Language), Data Cleaning
- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](Using%20SQL%20with%20Python.md) — Python (Programming Language)

---

[↑ Back to top](#)