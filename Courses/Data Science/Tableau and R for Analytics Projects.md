---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: tableau-and-r-for-analytics-projects-27845131
url: "https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131"
duration_minutes: 142
duration: 2h 22m
level: Intermediate
updated: 11/7/2025
skills:
  - R (Programming Language)
  - Tableau
  - Data Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFFoYIleBMMdw/learning-public-crop_675_1200/B4EZpV8quNIQAY-/0/1762378559126?e=2147483647&amp;v=beta&amp;t=5jSkZdb6FaCFkkDPOQ6Xp0Y7J_lLI8l-VmdXFo3Fxrg"
linkedin_topic: Data Science
learning_paths:
  - '[Develop Your Tableau Skills](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Tableau%20Skills.md)'
prev_courses:
  - '[Creating Interactive Tableau Dashboards](Creating%20Interactive%20Tableau%20Dashboards.md)'
path_nav: '[{"path":"Develop Your Tableau Skills","position":4,"total":4,"prev":"Creating Interactive Tableau Dashboards","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/r-programming-language
  - skill/tableau
  - skill/data-analytics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Tableau%20and%20R%20for%20Analytics%20Projects.md)

![Tableau and R for Analytics Projects](https://media.licdn.com/dms/image/v2/D4E0DAQFFoYIleBMMdw/learning-public-crop_675_1200/B4EZpV8quNIQAY-/0/1762378559126?e=2147483647&amp;v=beta&amp;t=5jSkZdb6FaCFkkDPOQ6Xp0Y7J_lLI8l-VmdXFo3Fxrg)

# Tableau and R for Analytics Projects

> On its own, Tableau is a powerful tool that helps professionals analyze, display, and generally make sense of the data at their fingertips. With the addition of R—a free, open-source language for data science—you can glean even more insights from your data. In this course, learn how to combine the analytical strengths of R with the visualization power of Tableau to analyze and present data more ef

> [LinkedIn Learning](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131) | 2h 22m | Intermediate
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Gain valuable insights using Tableau and R](#gain-valuable-insights-using-tableau-and-r)
- [**1. Introducing Tableau and R**](#1-introducing-tableau-and-r) (5 videos)
  - [Compare the strengths of Tableau and R](#compare-the-strengths-of-tableau-and-r)
  - [How Tableau and R can work together](#how-tableau-and-r-can-work-together)
  - [Install R on a computer](#install-r-on-a-computer)
  - [Download and install CRAN packages in R](#download-and-install-cran-packages-in-r)
  - [Run RServe and establish a connection to Tableau](#run-rserve-and-establish-a-connection-to-tableau)
- [**2. Preparing for Analysis Using Tableau and R**](#2-preparing-for-analysis-using-tableau-and-r) (5 videos)
  - [Import data into R](#import-data-into-r)
  - [Create calculations in R](#create-calculations-in-r)
  - [Import data into Tableau](#import-data-into-tableau)
  - [Create a visualization in Tableau](#create-a-visualization-in-tableau)
  - [Create a calculated field in Tableau](#create-a-calculated-field-in-tableau)
- [**3. Creating and Visualizing Linear Regression Models**](#3-creating-and-visualizing-linear-regression-models) (5 videos)
  - [Describe linear regression and multiple regression models](#describe-linear-regression-and-multiple-regression-models)
  - [Create single- and multiple-variable linear regression models](#create-single--and-multiple-variable-linear-regression-models)
  - [Analyze regression variables for significance](#analyze-regression-variables-for-significance)
  - [Visualize data for linear regression in Tableau](#visualize-data-for-linear-regression-in-tableau)
  - [Add an R regression model to a Tableau viz](#add-an-r-regression-model-to-a-tableau-viz)
- [**4. Classifying Data Using Logistic Regression**](#4-classifying-data-using-logistic-regression) (4 videos)
  - [Describe logistic regression algorithms](#describe-logistic-regression-algorithms)
  - [Create a logistic regression model](#create-a-logistic-regression-model)
  - [Visualize data for logistic regression in Tableau](#visualize-data-for-logistic-regression-in-tableau)
  - [Add an R logistic regression model to a Tableau viz](#add-an-r-logistic-regression-model-to-a-tableau-viz)
- [**5. Classifying Data Using Support Vector Machines**](#5-classifying-data-using-support-vector-machines) (4 videos)
  - [Describe support vector machine algorithms](#describe-support-vector-machine-algorithms)
  - [Create a support vector machine model](#create-a-support-vector-machine-model)
  - [Visualize support vector machine data in Tableau](#visualize-support-vector-machine-data-in-tableau)
  - [Add an R support vector machine model to a Tableau viz](#add-an-r-support-vector-machine-model-to-a-tableau-viz)
- [**6. Grouping Data Using Cluster Analysis**](#6-grouping-data-using-cluster-analysis) (4 videos)
  - [Describe cluster analysis](#describe-cluster-analysis)
  - [Do cluster analysis in R](#do-cluster-analysis-in-r)
  - [Troubleshoot cluster analysis in Tableau](#troubleshoot-cluster-analysis-in-tableau)
  - [Write cluster data to a CSV file for use in Tableau](#write-cluster-data-to-a-csv-file-for-use-in-tableau)
- [**7. Classifying Data Using Random Forests**](#7-classifying-data-using-random-forests) (3 videos)
  - [Describe random forest analysis](#describe-random-forest-analysis)
  - [Create a random forest analysis model in R](#create-a-random-forest-analysis-model-in-r)
  - [Visualize data for random forest analysis in Tableau](#visualize-data-for-random-forest-analysis-in-tableau)
- [**Conclusion**](#conclusion) (1 videos)
  - [Further resources](#further-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Gain valuable insights using Tableau and R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/gain-valuable-insights-using-tableau-and-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/gain-valuable-insights-using-tableau-and-r?u=76281980&t=0)** - [Curt] [Tableau](../../Skills/Data%20Science/Tableau.md) is a versatile tool for visualizing data within your business or organization. Adding the power of the R analysis language makes Tableau even better. In this course, I'll use real-world examples to demonstrate how you can apply the incredible power of Tableau and R to your data. I'm Curt Frye. Join me at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning for an introduction to the essential skills that will let you unlock the power and flexibility that comes when you combine Tableau and R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [curt] (1)


### 1. Introducing Tableau and R

[↑ Back to Table of Contents](#table-of-contents)

#### [Compare the strengths of Tableau and R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/compare-the-strengths-of-tableau-and-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/compare-the-strengths-of-tableau-and-r?u=76281980&t=0)** - [Instructor] [Tableau](../../Skills/Data%20Science/Tableau.md) is one of the best data visualization software packages around, while R is a powerful command line-driven analytical language. The two environments have more in common than you would think, but their strengths lie in two different areas. In this movie, I will show you what the two environments look like and compare them. I've started out with an R console, and I've already typed in a command to read data from an external file into a variable that I will call sales. I can see information about the sales variable just by typing sales and Enter, and I get a printout of the data. I can also get a summary of what's in the sales data frame, as it's called. So, I'll do summary, and then in parentheses, I'll type sales and Enter, and I get a summary of the information. So, I have the Minimum, 1st Quartile, Median, Mean, 3rd Quartile, and Maximum values for each of my sales. Tableau, on the other hand, lets turn raw data into powerful visualizations. You can use those to illustrate patterns and trends in your data. To demonstrate, I will switch to Tableau, and here, I have data for a number of customers. I have the number of orders they have placed. That's called Order Count, and I have that for columns or the horizontal axis, and then the total value of sales. And if we look,
>
> **[1:32](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/compare-the-strengths-of-tableau-and-r?u=76281980&t=92)** we can see that there is quite a bit of distribution. We have a customer who apparently came in, placed one order, and bought over $1,300 worth of goods. And then we have a few who have placed about 30 orders, 26, and bought about 1/3 of that. And then finally, we have customers who apparently come in very often and buy a small amount of items, but we really like have them coming in, because they spend a lot of money in our store. It's evident that R and Tableau are very different programs, and environments. However, when you combine the two of them together, you can create some powerful analyses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (4)
> **Tools:** command line (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How Tableau and R can work together](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/how-tableau-and-r-can-work-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/how-tableau-and-r-can-work-together?u=76281980&t=0)** - [Instructor] [Tableau](../../Skills/Data%20Science/Tableau.md) and R seem to represent two ends of the data analysis spectrum. Tableau is a user-friendly data visualization program, while R is a [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) language you mainly access through the command line. These differences are significant, but they make the combination of the two environments much stronger than either one by itself. In this movie, I will demonstrate one way to use Tableau and R together. The sample file that I'm using is 01_02_TableauAndR. You can find that in the Chapter01 folder, along with the data sources in the exercise file collection. However, in the interest of time, I am not going to show you how to connect to R in the background. Instead, I encourage you to watch this movie, and then later on, if you need to practice connecting to outside data sources with R, you can do so. In this workbook, I have information about customers, and I assume that they have made purchases in the past. And I want to know, based on their past data, whether they are likely to respond positively to an offer that I send out. So I have their customer IDs, their ages, their incomes, and also a prediction. And the prediction is based on their response to the previous five offers that I sent out. How do we do that? Well, I created a calculated field, which you can see here in the sidebar. It is named Prediction. And you can tell it's a calculated field
>
> **[1:33](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/how-tableau-and-r-can-work-together?u=76281980&t=93)** because it has an equal sign next to, in this case, the hashtag, indicating it's a number. I will edit that calculated field so that we can see exactly what I did to create it. This is a script. In this case, a script written in R. And actually, I will increase the size of the box just a little. It returns an integer. So we have the script returning an integer. And then the commands tell Tableau and R as a response which CRAN package to use, where the training data should be drawn from, how it should be analyzed using which model. And then, because this is a [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) algorithm, we need to test it against values with known results. So actually what we're doing is we are taking two years of data and then trying to predict the next year. So we already know what happened in year 3, but we are trying to predict based on what will happen next time. So we have our predictions based on our model, and the -4 means that we have left out our final column of data. So the prediction we're making will be added to the field that we create. And at the bottom, we have all of the values that are incorporated. The first is whether they purchased or not. That's either a one or a zero. Then Income and Age, which we're using as input variables. And then finally, we have a -1.
>
> **[3:07](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/how-tableau-and-r-can-work-together?u=76281980&t=187)** And we subtract 1 because when we run this R algorithm through Tableau, it actually returns either a one or a two. One meaning no, and two meaning yes. So to correspond to the data that we already have in our system with a zero or one, we need to subtract 1 to get the expected result. There are a lot of little differences between R, the way that you run it in the console and the way that you run it in Tableau, and this is just one of them. I'll try to point out as many as I can along the way. We're done here, so I can close out and continue with my work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (6), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** cran (1)
> **Tools:** command line (1)
> **UI Navigation:** in the sidebar (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Install R on a computer](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/install-r-on-a-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/install-r-on-a-computer?u=76281980&t=0)** - [Instructor] R, the analytical language we will integrate with [Tableau](../../Skills/Data%20Science/Tableau.md) in this course, is an [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) package you can use for free. All you need to do is download it onto your computer and install it. In this movie, I will show you where to find the R distribution for [Windows](../../Glossary/Service/Windows.md), and install it on my computer. I have opened the webpage at CRAN, cran.[r-project.org](https://r-project.org).
>
> **[0:29](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/install-r-on-a-computer?u=76281980&t=29)** From here, you can download R for Windows, macOS, and various flavors of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). As the note on the page indicates, oftentimes, R is included in a Linux distribution, so you might not need to install it at all, it would already be there. But we will focus on Windows. To download and install R for Windows, click Download R for Windows, straightforward enough. But then, on the next page, you should click the base subdirectory. So that's listed here. And of course, the link is in purple, because I have already clicked it. So I'll click there. And now, you can download R-4.5.1 for Windows. When you watch this course, it is very likely that your version number will be higher. So if you don't see 4.5.1, don't worry, just take the last stable distribution that you can. I have already downloaded R, so we won't have to sit through that. I'll minimize my window. And I have the R-4.5.1-win installer here. So I'll double click that, and the installer runs. Do I want to make changes? Yes, I do. I will select English. There are many other languages available, click OK. Accept the software agreement, click Next. That's a fine place to install it, click Next again. I'll install everything,
>
> **[2:01](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/install-r-on-a-computer?u=76281980&t=121)** so I don't need to customize at all, click Next again. Do I want to customize? Nope, I will accept the defaults, click Next. Start menu folder, R is fine. And now, I can create a desktop shortcut, save the version number in registry, and associate R with .RData files, that's great. I won't worry about a quick launch shortcut. So I've clicked Next, and we are in the process of installation. And looks like we're done. So I have, Click Finish to exit Setup. That's the option I will take, I'll click Finish. And now, I have R installed on my computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (6), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Tableau](../../Skills/Data%20Science/Tableau.md) (1), [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) (1)
> **Prerequisites:** install (6), setup (1)
> **Versions:** 4.5.1 (3)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** macos (1)
> **URLs:** [r-project.org](https://r-project.org) (1)
> **Env Vars:** cran (1)
> **Definitions:** is an  (1)

#### [Download and install CRAN packages in R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/download-and-install-cran-packages-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/download-and-install-cran-packages-in-r?u=76281980&t=0)** - [Narrator] The basic R package that you install on your computer comes with a lot of built-in [Algorithms](../../Skills/Software%20Development/Algorithms.md) for data analysis, but there are literally thousands of other packages that you can download to extend those capabilities. In this movie, I will show you how to download a package and add it to your R Library. I will also talk you through some warning messages that you might see, but not everyone will. I have run the RGui interface by double clicking the executable that was on my desktop, and now I can use a command to download a specific package. So, I will do install.packages, then a left parentheses and double quote, and the package is a popular one called ggplot2, and that will be used for plotting. Then I'll press Enter, and I get a warning message saying that the library and program files is not writeable, and asking if I want to use a personal library instead. I'll click Yes. Do I want to create a personal library? Yes, I do. So I click yes again. And now I can go to what's called a CRAN mirror site. Cran mirror sites are sites where you can download packages with functions that you add to R. So, I'm in the US,
>
> **[1:32](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/download-and-install-cran-packages-in-r?u=76281980&t=92)** and I'll look for the one that's closest to me. So, I'll scroll down and ah, there's one in Oregon, which is where I live. So, I've clicked the server I want to use. I'll click Okay, and we are downloading the package and other packages that are required. And there we are. The downloaded binary packages are in the directory that we show here, and I am ready to use ggplot2 as part of my R programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Warnings:** warning (2)
> **Prerequisites:** install (2)
> **Env Vars:** cran (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Run RServe and establish a connection to Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/run-rserve-and-establish-a-connection-to-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/run-rserve-and-establish-a-connection-to-tableau?u=76281980&t=0)** - [Instructor] In this course, we will use R in combination with [Tableau](../../Skills/Data%20Science/Tableau.md), the data visualization program. Installing R isn't enough for you to use it in combination with Tableau however. When you're ready to use a Tableau workbook that includes an R calculation, you need to run RServe and establish a connection between Tableau and R using RServe as the server connection. I have R running in the R GUI environment. Just double clicking the executable file to run R. And the first thing you need to do is to install the RServe package. So I'll do install.packages. Then in parentheses and double quotes, I'll type Rserve, so R-S-E-R-V-E, close the double quotes, close the parentheses, and enter. And I need to find my mirror site. So I'll scroll down, and I'm in Oregon in the USA, abbreviated OR, that's my closest one, I'll click OK. And with luck, we will get our download going. There we go. And it will take a moment to install. I have my downloaded binary package, so now I can do library, again, parentheses and double quotes, Rserve. And the R is uppercase
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/run-rserve-and-establish-a-connection-to-tableau?u=76281980&t=95)** because the R environment is case-sensitive. Then enter. Okay. That's done and now I can run it as a process. So I'll do Rserve, and then an open and close parentheses. Oh, wrong order. Left parentheses, right parentheses. That looks good. Press enter, and RServe is now running. That means I can switch over to Tableau and create a connection. I will use alt tab to bring up Tableau. And then rather than going into a workbook, I will open the Help menu, point to Settings and Performance, and then click Manage Analytics Extension Connection. Now I can select my connection type. And you see there are plenty of options. I will use RServe. For the host name, I'll just type in localhost, and port 6311, 6311 is correct. I don't need anything else so I'll click Test Connection. Successfully connected to the analytics extension. I'll click OK, click Save. And now I have my connection while I have Tableau and RServe running. If I wanted to disconnect, I could click that. Otherwise I can click Save and then click Close, and I have my connection, and I'm ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (7)
> **Prerequisites:** install (3)
> **Env Vars:** gui (1), usa (1)
> **UI Navigation:** scroll down (1), open the (1)
> **CLI Commands:** find (1)
> **Ports:** port 6311 (1)
> **Speakers:** - [instructor] (1)


### 2. Preparing for Analysis Using Tableau and R

[↑ Back to Table of Contents](#table-of-contents)

#### [Import data into R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-r?u=76281980&t=0)** - [Instructor] We will do a lot of our analysis in this course using [Tableau](../../Skills/Data%20Science/Tableau.md), but it's also worth knowing how to import data into R by itself. So in this movie, I will demonstrate the most fundamental R skill, importing data into a data frame. Once you have created a data frame, you can write R expressions to analyze your data. I have opened R, and I'll start by typing in a command to assign data that we import to a variable name. So that will be revenue, because we're working with sales data. And then the assignment operator is a less than sign, followed by a hyphen. This looks like a left pointing arrow, and it indicates that we are assigning a particular value or set of values to that variable. And I like it as a convention. The command we'll use or the method is read table followed by a left parentheses and a single quote. And now we need to get the address to the file. I'm working on a [Windows](../../Glossary/Service/Windows.md) system, so the method that I show you will work in Windows. So I'll press alt tab to move to the File Explorer. And the file I want to use is named sales Trend. You can find that in the chapter two folder of the exercise files collection. I will right click that file and I see copy as path. I can also press shift C,
>
> **[1:37](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-r?u=76281980&t=97)** so I will click the file and this time, I'll use the keyboard shortcut. So control shift C to copy. Then I'll go back to the R console and press control V to paste. So there, I have the full path. I won't read it out, but there are a couple of changes that I need to make. The first is that rather than double quotes, I need to have single quotes. So I will either erase or replace the double quotes. So I have single quotes. And the second is that I need to have each of these back slashes, which occur between chapter two and sales trend. And here between exercise files and chapter two, I need to have two of them instead of only one. And the reason is that in R, a backslash is known as a command or control character, and if we didn't have a second backslash, then R would try to read backslash S backslash C as commands they needed or that the engine needed to perform. That's not the case. So I will add a backslash before or after each of the existing ones so that they are doubled up. And R will know that we are not looking for commands. Instead, we are treating the backslash as an actual backslash. Now I will have a comma. The separator for a comma separated value file is
>
> **[3:12](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-r?u=76281980&t=192)** in fact a comma. And I'll actually make the window a little bit wider so I have room to type. I can indicate the separator character, using the SEP argument equal, then the single quotes, a comma, then a comma again to move to the next argument. And I know that my data has a header, so I'll type header equals capital T. So that means that there is a header because I've set the header argument to true. Then a right parentheses, and if I did everything right, then I should have R import my table to revenue. I didn't get an error. So let's see what the revenue variable looks like. You can do that using the DIM function. So DIM, and then in parentheses, revenue, press enter, and they get a summary of 36 rows and two columns. That sounds like the data that I wanted to import. So I've brought it into R successfully and can perform calculations on it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Tableau](../../Skills/Data%20Science/Tableau.md) (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** dim (2), sep (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise files (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Create calculations in R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-calculations-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-calculations-in-r?u=76281980&t=0)** - [Narrator] After you have loaded your data into an R data frame, you can analyze it. These specific expressions you create will depend on your data, and the insights you want to gain. So I will give you a couple of example expressions using data that we will load into a data frame. I have started the RGY interface. And by example, I will assign a value of a calculation to a variable. So I might have total, and then to assign a number or the result of a calculation, I type a less than sign, followed by a hyphen. It looks like a left pointing arrow, and indicates that whatever we type next will be assigned to that variable. And I'll do minus 14, times 19. I press Enter, but I don't see the results. I'll type total to display it, and it's minus 266. To bring data in from an outside source, I can assign it to another variable, and use the read.table method to bring it in. My variable will be revenue, and I will assign it values that we read in from an external file. The method we'll use is read.table, followed by a left parentheses, and now I need the full path to the file on my system. So I will go to File Explorer,
>
> **[1:37](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-calculations-in-r?u=76281980&t=97)** and then in the chapter two folder from the Exercise Files collection, I will click Sales Trend. And then I can either right click it, that is right click the Sales Trend file, and click copy as path. Or I can press Control+Shift+C. I'll press Control+Shift+C. So I'll do that there. And then go back to R, and press Control+V. So there I have the full path to the file. There are a couple of changes I need to make though. And the first is to change the double quotes and two single quotes. And that is a convention within R. The second thing I need to change is to add a backslash to each of the existing backslashes, so I have two in a row. And the reason is that R uses a backslash, followed by a character as a command character, also called a control character. In this case, I want to indicate that R should treat them as actual backslashes, so I need to type two of them in a row. So I have the backslash for the first one, and then I'll just pair the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them up using my keyboard. There we go. And that is everything for the file path. But I also need to identify the separator character for the values, and whether there is a header or not.
>
> **[3:13](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-calculations-in-r?u=76281980&t=193)** The separator is a comma, that's why I'm using a comma separated value file. So I'll type sep for the separator, equal. Then in single quotes a comma, close out the single quotes, type another comma before the last argument, and that will indicate that the presence of a header is true. So I typed header, all lower case, equals T. Then a right parentheses and enter. And it looks like my value has been read in correctly. If I want to summarize the table that I just read in, I can use the summary command. So that'll be summary, revenue. Revenue is in parentheses, and Enter. And there I have my period. So that indicates that I have 36 sales period. They might be same months across three years. And then I have my sale summary over on the side. Minimum and maximum for each of the individual periods. And first quartile, median, mean and third quartile. What I don't have is a sum. So for that, I will assign the value that we calculate to a new variable called total rev, short for total revenue. And then use the assignment operator, less than sign, followed by a hyphen. And that will be the sum of values in the sales column for the revenue table that we read in.
>
> **[4:50](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-calculations-in-r?u=76281980&t=290)** So the function we'll use is sum. Then in parentheses, revenue, which is the name of the data frame. And then we indicate a column within the table, or within the data frame using a dollar sign. And it is named Sales. And note that the first S in sales is capitalized. If you don't remember, you can always do a summary, and look here, 'cause I have the columns name, period, and sales. So that's good. Press Enter, and total rev to see the value there. Looks like 7,648,067. You can also summarize the values in only one column at a time by identifying the column within the data frame. So for example, you do summary, and then in parentheses, revenue, dollar sign, sales, Enter. And instead of having the values or the summary laid out in a column, it's laid out in a row because there is only one column to summarize. And that is how you create calculations and data summaries in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (4), short for (1)
> **CLI Commands:** make (1)
> **Env Vars:** rgy (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Import data into Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-tableau?u=76281980&t=0)** - [Narrator] If you want to create a [Tableau](../../Skills/Data%20Science/Tableau.md) visualization, you need data for the program to work with. Tableau lets you bring in data from a wide range of sources, and in this movie I will show you some of the sources available and demonstrate how to import data from an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) workbook. I have opened Tableau and I'm on the usual start screen. Over on the left I have the Connect panel and underneath To a File there is [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), a text file, a [JSON](../../Skills/Web%20Development/JSON.md) file, Access, PDF, spatial file if you're doing map work, and also servers such as [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), [MySQL](../../Skills/Software%20Development/MySQL.md), Oracle, and others. So I just wanted you to know that those are the connection sources available to you. If you need more, you can click more and see a much larger list, but in this case, we will stay with Excel. So I'll click Microsoft Excel, and Tableau opened the last folder that I used, which is chapter two. And for this I'm going to work with the AllData workbook. So I will double-click that and we have our connection. On the left side of the display, I have nine fields and 274 rows. And on the right I have a summary or rather a preview of the first 100 rows. So over on the right I can scroll down and take a look at the data. I could also scroll to the right if I wanted to.
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/import-data-into-tableau?u=76281980&t=95)** Then to see what the data looks like in Tableau, I can go to sheet one, and here I have in the navigation pane over on the left, the dimensions, and these are facts about my data, such as customer name, the date of an order, and below I have measures which are numerical values. So that would be order total, price, and quantity. If I want to add a specific field to the visualization, I can drag say quantity over, then I get the total number of items ordered, and I can break that down by adding a field to either the rows or columns area. In this case, I'll drag a product category to the rows shelf. And there I have bottles and cases. So I had 556 bottles that were ordered separately, and 116 cases of olive oil that my company sells. Connecting to a file on your local computer is fairly straightforward. All you do is select the type of file you want to connect to and identify that file on your system. If you need to connect to a server, it's possible you might need to enter your credentials such as a username or a password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (5), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **UI Navigation:** double-click (1), scroll down (1), go to (1), select the (1)
> **Env Vars:** json (1), pdf (1), sql (1)
> **Analogies:** such as (3)
> **CLI Commands:** mysql (1)
> **Speakers:** - [narrator] (1)

#### [Create a visualization in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-visualization-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-visualization-in-tableau?u=76281980&t=0)** - [Instructor] Once you have linked to a data source in [Tableau](../../Skills/Data%20Science/Tableau.md), you can use it to create a visualization. The available vis types depend on your data and what you add to the worksheet, but you'll probably have lots of types to choose from. The sample file that I'll use to demonstrate the process is O204, Create Vis, and you can find it in the chapter two folder of the exercise files collection. Over on the left, I have data that I have imported. At the top, under tables, I have just the one table and I have facts or dimensions about the data. So customer name, order date, order number, continuing on. At the bottom, I have measures which are numerical values associated with each order. So I have the order total price and quantity of items within each order. I'm going to start by creating a chart or visualization based on product category by year and by quarter. So I'll drag product category to the row shelf. I could also drag it here, so I have bottle and case. And then for the columns area, I will drag order date. So when I drag that up there, I get year. I want to summarize the order total, which is the sum of the spend that my customers have done, and that will be the order total, which is the total amount spent by my customers.
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-visualization-in-tableau?u=76281980&t=95)** So order total to the data area. And there we go. I wanted it to display my data by quarter, and it's currently done by year. However, if I go up to the column shelf and look next to year, I see that there is a show detail button. It looks like a box with a plus sign in it. And if I click that, I expand. So I now get a second level of detail. So that is the quarter. I could go down further by clicking the quarters. Show detail button, and there I have month and it can go down even further. In this case, I only want to look at my data by quarter. So I'll drag month off of the shelf and I go back to year and quarter for each of my two product categories. I currently have a text table, but I can change the visualization type by going to the Show Me button, clicking it, and looking at the panel to see what is available to me. And it looks like just about everything is, actually, I think it all is. And the reason that it's available is because the data that I have fits the requirements for each of these individual data types. I'll start with a stacked bar chart, so I'll click that and click Show Me to get rid of that. And here I have my sales broken down by year and by quarter, and then also inside, by product category.
>
> **[3:10](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-visualization-in-tableau?u=76281980&t=190)** So I have 2024 and 2025. Then each of the quarters are laid out here on the horizontal axis and category is summarized using color. So bottle is in blue and case is in orange. I can change the visualization type by going back up to Show Me. And in this case, because my data source includes date information about the orders, I can have a line chart. So I'll click a continuous line and then click the Show Me button again. And here I have my values broken down again, by product category, and I have the trend over time, which you can see here 2024 Q1, all the way up to 2025 Q4. If I want to have a single line of data for all sales, then I can drag product category off of the Marks card. And then I just have a single line that shows the trend for sales for this particular set of [products](../../Skills/Software%20Development/Microsoft%20Products.md) within my company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** o204 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a calculated field in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-calculated-field-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-calculated-field-in-tableau?u=76281980&t=0)** - [Instructor] One of the key techniques when it comes to integrating R in [Tableau](../../Skills/Data%20Science/Tableau.md) is to create a calculated field in Tableau that calls an R function. Rather than jump in and create that advanced kind of calculated field, I wanted to show you how to combine two fields within Tableau to calculate a value that is not included in your original dataset. We'll get to specific examples of using R later on in the course. The sample file that I'm using is 02_05_CalculatedField, and you can find it in the chapter two folder of the exercise files collection. Over on the left I have the navigation pane, and I have facts or dimensions about my data, such as the customer name, product category, and product name. And below that I have two values, price and quantity. So that is the price of the item that was purchased. We're assuming only one product per order, just to keep things simple, and then the quantity. What we don't have is the total amount spent by a customer in a specific order, but we can calculate that. To create that calculation, I'll go to the Analysis menu, and then click Create Calculated Field. I have Calculation1 as the default name. I will call it Order Total, and it's okay to have a space, so I'll do that. And I want to multiply price by quantity. The Price field is indicated
>
> **[1:33](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-calculated-field-in-tableau?u=76281980&t=93)** by typing a left square bracket that indicates that we are looking at a field, and then a capital P, and Price is highlighted. So I'll press Tab to accept that. And I have Price within square brackets. I want to multiply that by quantity, so I'll use an asterisk, and then left square bracket and quantity. I'll add that the same way that I added Price when it was highlighted, and I can see at the bottom left that the calculation is valid, so I will click OK. As a result, the new measure or calculated field appears in the Measure Names section of the navigation pane, also called the sidebar. So now I can drag Order Total to the data area, and I have the sum of everything that was spent, and now I can break that down, for example, by product name, dragging that to the row shelf, and I could break it down even further by adding order date for the year to columns. And there are all of those bits of data broken down. I could also extend my analysis perhaps by clicking the Show Detail button next to YEAR to go down the quarter. One thing to note is that the calculated field you create only exists inside of this Tableau file. It is not written back to the data source that you used to power the worksheet.
>
> **[3:06](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-calculated-field-in-tableau?u=76281980&t=186)** So please remember that any calculation you create here will not appear in the original data source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (4)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** year (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 3. Creating and Visualizing Linear Regression Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe linear regression and multiple regression models](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-linear-regression-and-multiple-regression-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-linear-regression-and-multiple-regression-models?u=76281980&t=0)** - [Narrator] [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) models identify trends in your data, whether it's sales over time, the length of time a customer has made purchases versus yearly sales, and so on. In this movie, I will describe the process behind linear regression models and how to evaluate them. The goal is to create the line of best fit to describe data. So you go through a procedure to generate an equation that is used to draw a line, and the goal is to minimize the total errors over all points. So you want to find the line of best fit, and then you will evaluate it based on how well it does, and you can use one or multiple variables. Let's see an example of linear regression that I have created using sales data. So on the X axis, I have the number of orders, and then that is the number of times a customer bought from us in a given year. And then on the Y or vertical axis, I have the total of their sales. So that would be the value. And what you can see if you look to the left is that for individuals who made a small number of purchases, there is absolutely no pattern. However, the more that they buy, the higher the correlation between the number of purchases and the total value of their sales. The equation that was used to draw this line is 8.0339x plus 573.59, and that means that the sales total can be approximated,
>
> **[1:39](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-linear-regression-and-multiple-regression-models?u=76281980&t=99)** that is the line of best fit, by multiplying X, the number of orders by 8.0339, and adding 573.59. So if I had a customer with one order, then we would predict that their total sale would be about $582. The R squared value tells you approximately how much of sales value is explained by the X variable. In this case, that is the number of orders. So here it appears that we have an R squared of about 0.42 or about 42%. So while this model seems to do well beyond about 20 orders, it does terribly when we're looking at single orders because those values, as you see, are all over the place. So the lesson to take away from this is that linear regression is a powerful tool, but you need to be careful about how you use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (4)
> **Versions:** 573.59 (2), 8.0339 (1), 0.42 (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)

#### [Create single- and multiple-variable linear regression models](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980&t=0)** - [Instructor] [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), which finds the line that best fits a data set is one of the most useful [Forms](../../Skills/Web%20Development/Forms.md) of data analysis you can perform. In this movie, I will show you how to perform linear regression, using one or more input variables in R. I have run R in the console and now I can assign data from an external file to a variable and then create a linear regression model. I'll start by having our data one as the variable that will hold my data table or data frame. And then I will assign using a less than sign and a hyphen value from the method read table. And then in parentheses, I need to give the full file path on my system to the file I want to use. So I'll press alt tab to move to the chapter three file of the exercise files archive. And the file that I want to use is sales data dot CSV, so I'll right click that and then click copy as path. I could also press control shift C. So I'll click there, and then go back into R and press control V to paste. I have the file path within my directory system, but I need to make a couple of changes to it before I can use it. I'm going to start by changing the double quotes
>
> **[1:37](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980&t=97)** that surround the text string with the file path from double quotes to single quotes. That's just a convention in R. And then I also need to double up each of the backslashes that indicate folders. And the reason I have to do that is that when R sees a backslash, it assumes that a control character is coming next. So if you want to have a backslash be interpreted as a backslash, then you need to have two of them in a row. So I will use my keyboard to enter those.
>
> **[2:16](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980&t=136)** And last one, there we go. So I'll go to the end and after the closing single quote for the file path, I'll type a comma. Now I need to identify the separator character and tell R that there is a header. So I will type SEP equal, and then in single quotes, a comma, that's for the comma separated value field, then a comma, and then header equals capital T. So that tells R that there is a header. I'll press enter and the data has been read successfully. Now I can define my model. So for this, I'll type model one. And once again, we need to do the assignment operation. That will be LM, which is short for linear model. The variable we're trying to predict is sales from within the dataset. And then type a tilde, that's the wavy line that goes over an N in Spanish and other languages. We're going to work only on distance, then a comma and data equals our data one, which is the variable that we defined earlier. And I'll press enter. So there, I have my model and I'll type model one, enter. And there, I have my data.
>
> **[3:49](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980&t=229)** For sales predicted by distance, the intercept is 733.6 basically, and then distance is 0.507. So we start by assuming that a typical sale will have a value of about $733.60. And for every mile that a customer traveled, they will spend an additional 57 cents. So if they travel a hundred miles, they would spend an additional $57 on average. We can do the same thing using multiple variables just by adding them to the model. So I still have our data one, so I don't need to read that. And again, instead I can just assign it to R data two. So I'll do R data two, then we will assign it the value from R data one, and enter. Model two, we'll be assigned the output of another linear model. Once again, we are predicting sales. And then it's tilde to indicate what we are using as our input fields. And those will be distance plus order count, then a comma. And the data of course will be equal to data two, right? And enter. Ah, it's R data two. So that will be model two. Assign an LM.
>
> **[5:24](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-single-and-multiple-variable-linear-regression-models?u=76281980&t=324)** Sales tilde distance plus order count, comma data equals R data two. So that was a mistake on my part. Then enter. Looks like everything worked this time. It helps when you type it correctly. And then I'll type model two, and here, I have an intercept of 378.23. And then for every mile traveled, we go up by $2.45. And for every order, we increase again by $10.62. So it appears that distance doesn't add a lot. In other words, the distance that someone travels doesn't really tell us much about how much they're going to spend. But order count is a predictive variable, and that one makes sense. A customer who buys from you more frequently is very likely to spend more over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Versions:** 733.6 (1), 0.507 (1), 733.60 (1), 378.23 (1), 2.45 (1)
> **Definitions:** is a  (3), short for (1), in other words (1)
> **Env Vars:** csv (1), sep (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you need to have (1)

#### [Analyze regression variables for significance](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980&t=0)** - [Instructor] When you perform [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) in R, the routine you call creates the equation that best fits your data using all the variables you provide. Not every variable will be statistically significant though, so it makes sense to remove the ones that R identifies as insignificant from your model. In this movie, I will show you how to analyze your regression variables and identify which ones are significant. I have started in the R console and I'm going to read data into a data frame. So the variable that I will use will be called R data two and it doesn't matter what you call it as long as you're consistent. And then the assignment operator of a less than sign followed by a hyphen, which looks like a left pointing arrow. And then I will use read.table followed by a left parentheses. Next I need to give R the full file path to the data that I want to use and I can get that by going into File Explorer. So I'll press alt + tab to move to the chapter three folder of the exercise files collection. And the data that I want to bring in is the sales data CSV file. So I will right click that and then from the shortcut mini that appears, I'll click copy as path. I could have also clicked the file and press control + shift + C on the keyboard, but in this case I will use the mouse.
>
> **[1:36](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980&t=96)** I'll go back to R and then press ctrl + V to paste. And there's the full path to the file as a text string. But there are two changes that I need to make. The first, and this is just something specific to R, I need to change the double quotes around this text string to single quotes. There we go. And then I need to double up each of the backslashes. So each of the backslashes indicates a subdirectory. However, a backslash in R is used to indicate a control character. That is something that causes something else to happen. So if I want the backslashes to be interpreted as backslashes, I need to have two of them. So there's the first one, and I won't comment as I go along. I will just change each of them to not one backslash, but two. Now I'll go to the end of the line and I need to identify the separator character using the SEP argument, and that will be equal and then a comma within a single quotes. Then another comma to move to the final argument, which indicates there is a header. So header equals capital T for true and enter. So our data has been read in. Now I can define a model based on that data. So I'll do model2 assigning that the output of a linear model.
>
> **[3:10](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980&t=190)** So LM left parentheses sales data, then a tilde, which again is just what you do on R for this particular command. And then we're going to use as input variables, distance plus order count, and then the data source is equal to our data2, then a right parentheses and enter. And we have created our model. I can see the coefficients by typing model2 and enter. So there I have an intercept of 378.233. So that is where we start and what we assume the average value, or rather the starting value of an order will be. And for every mile traveled, that will go up in dollars by about $2.45. And for every additional order that a customer has placed, then that will be an increase of 10.621 for each order. So it appears that order count has a much higher impact than distance traveled based on total sales. If I want to see how well each of these variables that is distance and order count are at predicting, I can find a summary of the model. So I'll create that summary by typing summary model2. That's in parentheses and enter. And there we are.
>
> **[4:43](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980&t=283)** So let's take a look at what we have. The residuals, which are here, are the errors. So it appears that we have quite a large range in our errors. We are too low by $543.30. The average error isn't too bad, it's about $32.8, but the maximum is 369.16. So what that tells me is that this model as a whole is not terribly predictive. Now we can go down and look at our coefficients. So the intercept we don't need to worry about. And now let's take a look at how well distance and order count predict. So the R value, which tends to be considered 0.05 or lower as significant for distance is 0.01. So that's actually better than I thought it would be. So it is reasonably predictive. Perhaps customers who drive farther to come to the store are more likely to spend more money and those who live closer make a number of small purchases. Order count, however, is extremely significant and has a very low R value. So what that tells me is that the two values combined do a pretty good job, but if I had to pick only one, it would be order count. Now let's take a look down below at the multiple R squared and adjusted R squared value. R squared tells you as a percentage about how much of the predicted variable, in this case sales,
>
> **[6:18](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/analyze-regression-variables-for-significance?u=76281980&t=378)** is actually predicted by the model. And of course, it's a mathematical estimate. So here we have a multiple R squared of about 61 or 0.61 or 61%. However, because we have multiple input variables, we need to use the adjusted R squared. And the reason for that is when you run the basic R squared calculation with multiple inputs, R squared always goes up. It's a part of the process. So instead we corrected that using adjusted R squared. And so we have a predictive capacity of about 56%. That's not too bad for only two variables, but it is very likely that we could do better by collecting more data about our customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1)
> **Versions:** 378.233 (1), 2.45 (1), 10.621 (1), 543.30 (1), 32.8 (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** csv (1), sep (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Visualize data for linear regression in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-linear-regression-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-linear-regression-in-tableau?u=76281980&t=0)** - [Instructor] [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) identifies an equation that best describes your data. That is, it's a single line with the minimum amount of error between each of the points and the line itself. In this movie, I will show you how to plot data in [Tableau](../../Skills/Data%20Science/Tableau.md) so it makes sense to do a linear regression. The sample file I'm using is 0304 Scatter, and you can find it in the chapter three folder of the exercise files collection. When you create a scatter plot, you need to have two numerical values, and those will go onto a graph that we will create in the second. I'll start by dragging sales, which is the total value of sales to the rows shelf. So there's that, and then I will drag order count to the column shelf. That gives me a single dot, and that has the sum of order count and sum of sales. What I want though is to have a graph with all of the individual sales and order count pairs. So for that, I need to modify how the data is managed within the vis. I'll go up to the column shelf and click the order count fields down arrow, and change it from a measure to a dimension. We're at an intermediate step, so don't worry about the graph. This doesn't actually give us any useful data. So I'll go up to rows, click these sales fields down arrow, also change the dimension.
>
> **[1:34](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-linear-regression-in-tableau?u=76281980&t=94)** And there I have my individual sales and order count pairs. I personally prefer not to have open circles. I prefer them to be closed and a little bit smaller, so I'll make two changes. I'll go to the Marks card and click shape, and then click the filled circle. So to me, that looks much better already, but I also prefer the circles to be a bit smaller, so I will click size and drag to the left. I'll make them a little bit larger and a little bit larger. There we go. That looks good for me. And I'll click away. So here I have a scatter chart within Tableau, and I can use this as the base to add linear regression that we will calculate in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Tableau](../../Skills/Data%20Science/Tableau.md) (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Add an R regression model to a Tableau viz](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=0)** - [Instructor] After you have created a scatterplot, you can visualize a line of best fit based on a [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) model that you create an R. In this movie I will show you how to do that. My sample file is 0305 linear regression, and you can find it in the chapter three folder of the exercise files collection. The scatterplot that we see here visualizes each of the pairs of order count and sales value for customers with our company. What I want to do is use R to create a linear regression model. To start, I will need to go to the R console to run the R process. So I'll press Alt + Tab to move to the R console to make sure that Rserve is loaded in. I will type library and then in parenthesis and double quotes, library("Rserve") Enter. So that's been added to the library and now I can run it. So that will be Rserve() because we are not passing any arguments. Enter and it has been started. Now I can switch to [Tableau](../../Skills/Data%20Science/Tableau.md) and connect to this R service process. So Alt + Tab to move back to Tableau, then go to the Help menu, point to Settings and Performance, and then click Manage Analytics Extension Connection.
>
> **[1:38](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=98)** That opens the dialogue box of that name. I want to use Rserve so I'll click that, and then for a new connection for the host name, I will type localhost because I am on my own computer running R and the port number will be 6311. This might be filled in if you have used Rserve before, but if not, I just showed you how it works. I'll test the connection to ensure that we can go forward. All right, successful. I'll click Okay and click Save and click Close. So there we have our connection. I can now define a calculated field that will use a model to perform linear regression and then add that model to this Tableau vis, to create a calculated field. I'll go to the analysis menu and then click create calculated field, and I'll just call it LinReg for linear regression and click in the editing area below. I'm using an R script to perform the calculation for this field. So I need to use a script variable. We're operating with real values. That means that they can include a decimal point. So I will highlight SCRIPT_REAL, press tab, and it's been added. Then I'll start by typing a double quote because I'm entering in a string, which will be my script.
>
> **[3:14](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=194)** And then I'll press enter a number of times to give myself some white space to edit. We'll use a variation of R that is designed to work within Tableau. So the syntax will be a little different than what we've seen earlier in this chapter, but a lot of it will be familiar and it's just something you need to know. So I'll type model, which will be my variable. Then the assignment operator, of a less than sign, followed by a hyphen so it's a left pointing arrow, and we will give it the input of a linear model. So LM followed by a left parentheses, and then we will have three arguments. So the first one I'll write as .arg1, followed by a space and a tilde. And .arg1 is the variable that we want to predict. So in this case it will be sales. And we'll do that based on values from two fields. And those are argument two and argument three, which I'll write the same way. So .arg2 plus .arg3, followed by left parentheses.
>
> **[4:32](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=272)** Then press enter twice to give myself some more space, and the output variable will be model followed by a dollar sign fitted and a double quote. So we have our prediction variable based on two input variables, and we're creating a new column called model underscore, or rather model$fitted. Then I'll type a comma and we need to define the values that will be used for the arguments. So those will be AVG() for the average of sales values. So in the parentheses, I'll type sales then a comma, then the average left square bracket of distance, comma, and then the average of order count. And the fields have to match the order above. Although what's really important is that sales be argument one, because that's what we're trying to predict. And then distance and order count could technically go in either order. So we're good there and I have a calculation that is valid, that's good, and everything appears to be correct. So I will click okay, and we have the table calculation. So here is the actual tricky part
>
> **[6:07](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=367)** of adding a linear regression line to a scatter plot. You can't mix lines and dots unless you create what's called a dual axis visualization. And then we need to modify things a bit afterwards. But once you understand the process, it's actually fairly straightforward. So I will drag the new calculated field all the way to the right edge of the visualization. And you see that I have a vertical dashed line that indicates that I'm about to create a dual axis visualization. So I will release the left mouse button and we get a calculation where I have two lines. And of course, that is not what I want. I have the LinReg and no measure value. Instead, what I want are my order count and sales pairs to be displayed as circles. So if I go to the Mark card, you'll see that I have all, and they're currently automatically made into lines, but below I have the two fields that I can work with. So I have sales, which is a line which is incorrect, and the linear regression model, which is represented as a table calculation, that is also a line. So it's okay to have linear regression as a line, but what I want to change is sales. So I will click sales,
>
> **[7:41](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=461)** and that gives me a Marks card that is specific to that variable, and I'll change it from automatic to circle and the visualization updates. So I have my original scatter plot, and then I also have the linear regression line. However, it is not linear in the sense that it is not a straight line. And the reason is that I use two variables. So Tableau, or actually in this case R used both distance and order count and drew this line, which is not linear. If I want to use only order count, which I believe is a stronger variable, then I need to edit my calculated field. So I'll go over to the sidebar and click the LinReg fields down arrow and click Edit, and I will remove argument three and the plus sign. So I'm just down to a single variable trying to predict the total sales. And because I believe that distance is the less important of the two, I will delete that. And now I just have sales being predicted by order count calculation is valid. I'll click Okay and hopefully this will update and I have my straight line. So as you can see, there are several steps required to get a linear regression line from R into Tableau. However, the techniques that you've learned here
>
> **[9:16](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-regression-model-to-a-tableau-viz?u=76281980&t=556)** will be very useful when you add other R calculations to your Tableau visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (10), [Tableau](../../Skills/Data%20Science/Tableau.md) (7)
> **UI Navigation:** go to (4), switch to (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** script_real (1), avg (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Classifying Data Using Logistic Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe logistic regression algorithms](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-logistic-regression-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-logistic-regression-algorithms?u=76281980&t=0)** - [Instructor] [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is a supervised training algorithm that builds a model to distinguish between categories of information. Supervised means that you have a set of known results, for example, customers who donated last year versus those who didn't, and then you build a model to try to predict based on past data. Again, the goal is to separate entities into groups, and it is possible to perform logistic regression on more than two groups, but we'll stay with the base case. You train your model, and then test and evaluate it. Typically, you will divide your data into about 70% training and 30% test sets. And again, because you know the results in advance, you'll have a very good idea of how well your algorithm is performing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (2)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create a logistic regression model](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-logistic-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-logistic-regression-model?u=76281980&t=0)** - [Instructor] When you collect data about customers or another group you'd like to examine, you can build a model that uses past behavior to determine which of two outcomes is more likely for the future. No model will be completely accurate, but R can tune the model so it best describes your past data. In this movie, I will show you how to create such a model in R. I have opened the R console, and I can start by importing data into a data frame using the read.table() method. This will be my training data set. So I'll do train, and then the assignment operator is a less than sign followed by hyphen. It looks like a leftward pointing arrow. Then I'll type read.table, then a left parenthesis, and then I need to get the file path for the training data set, which is a comma-separated value file. So I'll press Alt + Tab to move to the chapter four folder of the exercise files collection. And I want to work based on my training data, which is here. So click the comma-separated value file, then right click the file name and click Copy as path. I could also have clicked the file and press Control + Shift + C. So Copy as path. Then I will go back to the R console, press Control + V, and there is the path, but I need to make some changes.
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-logistic-regression-model?u=76281980&t=95)** And the first change will be to change the double quotes to single quotes. This is just the way that you do these things in R. And then because back slashes can be used as control characters, that is, commands, I need to double them up. So that way R will know that I mean the backslash to be read as a backslash. And I'll just do a couple more. There we go. And I'll go to the end of the line and type a comma. Now I need to identify the separator character, which, because this is a comma-separated value file, is a comma. So I'll type sep, equals, then a single quote, a comma, then another single quote. Then we'll go to the last argument. So I'll type another comma, and this is to indicate that there is a header row. So header equals capital T and Enter. And I typed everything correctly so the data was read in. Now I can generate the model, and for this, I'll name it model and assign the output of a general linear model. So it would be glm. And this is built into the basic R package that I installed. Then a left parenthesis, and we want to predict last year based on, so I'll type a tilde,
>
> **[3:08](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-logistic-regression-model?u=76281980&t=188)** the fields year one through year five, so year one plus year two, plus year, oh, sorry, there should not be a space between the year and the number. Year two, year three plus year four. Keep wanting to type that. Plus year five. Then a comma. The data set that we'll train on is the train variable that I created earlier. So data equals train, then a comma, and this will be either zero or one, yes or no, whether someone donated in last year. So that will be a member of the family, which equals binomial. And binomial just means that there are two choices. Then I'll close that out with the right parenthesis and Enter. And the model's been created. For larger data sets, it will take longer, but this is a fairly small sample. Now we can do the test data. So the test will be test, and we will read in a table named testdata.csv. So I will copy what I had above. So I selected it, press Control + C, Control + V, and then I will edit TrainingData to TestData,
>
> **[4:42](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-logistic-regression-model?u=76281980&t=282)** go to the end, Enter. The data's been read in, and now I can run a prediction routine and output that to a set of predictions. So the variable I will use is test. So that will be a new column added to the test data frame. So I've typed a dollar sign and PRED, that's for prediction. Then I will assign that the output of a model. So predict, left parenthesis, model, which is what we created earlier, comma, new data equals tests. So that's the source for the data that we use to make our prediction. Then a comma, and then type equals response, right parenthesis and Enter. Good. That ran. So now I will type summary and then, in parentheses, model to check the output. And I am looking at the data and it appears that for the most part, the only year that is statistically significant is year five, and that is very interesting. So it appears based on this data that if a patron did not donate in the last year, it's likely they won't going forward. But if they did, then it's more likely than not that they will continue to do so at least for the next year.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), means that (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the last (1)
> **File Paths:** testdata.csv (1)
> **Env Vars:** pred (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Visualize data for logistic regression in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-logistic-regression-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-logistic-regression-in-tableau?u=76281980&t=0)** - [Instructor] Creating a [Tableau](../../Skills/Data%20Science/Tableau.md) workbook for [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is a bit different from other workbooks that you'll create. So in this movie, I will show you how to do it using the specific data from our test set. My sample file is 0403 setup, and you can find it in the chapter four folder of the exercise files collection. So here I have data over on the left that is broken down by patron ID for our nonprofit, and then indications of whether they donated in years one through five, that will be either a zero or a one. And then the last year field was used for logistic regression training, and that was described in other movies in this chapter. So I'll start by adding patron ID to the rows shelf. There we go. And now I want to add years one through five to the data area. However, you'll see that they are not in fact measures, so I need to convert them to that. I'll click the year one field, hold down the shift key and click year five, then right click any of them, and I will convert to measure. So they have been moved down into the measures area and I will now drag them onto the data area. So you can see here that I have my patrons and a one indicates that they donated in a specific year,
>
> **[1:38](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-logistic-regression-in-tableau?u=76281980&t=98)** and a zero indicates that they did not. And our goal with logistic regression is to take our best guess as to whether a specific patron will donate next year or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (3), [Tableau](../../Skills/Data%20Science/Tableau.md) (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Add an R logistic regression model to a Tableau viz](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980&t=0)** - [Instructor] After you test your [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) model in R and visualize your data in [Tableau](../../Skills/Data%20Science/Tableau.md), you can create a calculated field that includes your R code. From there, you can use color, shape, or another characteristic to distinguish the two classes in your viz. We are going to use R as our calculation engine, so I need to start the Rserve process in R so we can't connect to it. I have opened a new R console, so I'll type library, library, and then in parenthesis and double quotes ("Rserve"), the initial R is capitalized and Enter. Rserve has been added to our session. And then I'll type Rserve, and we're not passing it any information so I have an open and closed parentheses and Enter, and it's been run. Now I can connect to it from inside of Tableau. So I'll press Alt + Tab to move to Tableau, and note that I don't currently have any workbooks open, and that is intentional so I can show you what happens when you open a file like the one we're using here. But first, I will connect to Rserve. So I'll go to the Help menu, point to Settings and Performance and click Manage Analytics Extension Connection. Because I don't have an active connection, I can select the one that I want, so I'll click Rserve.
>
> **[1:34](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980&t=94)** And the host name is localhost because I am running Rserve on my own computer. And the port number, that is the internal instruction for connection, is 6311. I'll test the connection to make sure it's okay. It is successful, so I'll click Save. We're good, and I'll click Close. So I am now connected to Rserve in my R instance. Now let's open our sample file. And you could do this from File Explorer, but I've already worked with it so I will click 04_04_LogisticRegression. You can do exactly the same thing from the Exercise Files folder. So I'll click there, and Tableau displays an information box. It says, The document contains one or more calculated fields with scripts for an analytics extension. Do I want to run it?" I do so I'll click Yes. And here, I have the workbook. This is the same workbook that I created in the previous movie with one addition, and that is a calculated field called NextYear. NextYear is a calculated field that predicts whether a patron will donate next year or not, and it does it by providing a percentage. And we're assuming that .5 or higher means they will probably
>
> **[3:07](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980&t=187)** and below .5 means they probably won't. So let's take a look at that calculation. So I'll click the NextYear pill's down arrow and then click Edit. And here, I have the Tableau version of the R code that I need to download my training data. From the file address you see here, assign it to the variable train, then create a general model that predicts Last Year based on the inputs of Year1 through Year5. It trains on the data that we brought into the Train variable, and it is binomial, meaning 0 or 1. Then we import the test data from the same directory and then we generate a result for each patron by predicting what they will do based on what we brought in. If you added this calculated field to the visualization now, you would almost certainly receive an error. And that's because you file is almost certainly not in a directory called Users\\CurtFrye\\Desktop \\Exercise Files\\Chapter04. So instead, you need to replace this file string here with the file path from your computer. And again, to do that, you go to File Explorer and then right-click the TrainingData comma-separated value file,
>
> **[4:41](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980&t=281)** then click Copy as path. I won't do that, but if I did, it would be copied to the clipboard and then I could go back into Tableau and paste over and replace this file path. And then I would do the same here, except that I would edit training so it says test, that way we don't work with the same set of data twice, which would not be useful. So everything looks good. And normally I type these things out by hand so you can see exactly what's going on, but it took a very long time, so I wanted to save you the trouble. I'll click OK, and now I can add NextYear to the Measure Values card below Year5. And with luck, the calculation will show a percentage of how likely it is that a specific patron will donate next year based on our training data. So any patron with a value of .5 or greater is, according to the model, more likely than not to donate. However, if they're below .5, they're not. And you can go through and look at the numbers or perhaps sort the results, but instead, let's apply a color. So I will go back to the sidebar and drag NextYear to the Color square. And now each of the rows has a specific color assigned to it.
>
> **[6:14](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-logistic-regression-model-to-a-tableau-viz?u=76281980&t=374)** The darker the color, the more likely it is that someone will donate. And lighter colors means that it is less likely that a patron will donate. What I don't have are two colors, and that is a firm cutoff to distinguish between more likely or less likely, so let's make that change now. I'll go over to the Color card or the legend, click this down arrow and then click Edit Colors. So I currently have an automatic palette, that's fine, I can stay with the same colors, but let's say that I want to have stepped color, but instead of five steps, I want to have only two, and that will give me my yes or my no. So with that applied, I can close the Edit Colors box, and now I have a pretty clear distinction for patrons that are more likely to donate and those that are less likely. And if I scroll down, I can get information about each of them. So, as you can see, this type of analysis is very useful when you are evaluating customers. If you're a cell phone provider, you might look at customer churn, whether someone is more likely to leave than not. Of course, if you are running a nonprofit, you definitely want to know if a patron who donated last year is likely to do so next year.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (6), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1)
> **UI Navigation:** go to (2), select the (1), right-click (1), scroll down (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (2)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 5. Classifying Data Using Support Vector Machines

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe support vector machine algorithms](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-support-vector-machine-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-support-vector-machine-algorithms?u=76281980&t=0)** - [Narrator] In the previous chapter, we looked at [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) as a means of predicting whether a customer, patient, or other entity would be more likely than not to be part of a class of objects. We can also use support vector machines. There are two basic ways that you can define your models. The first is the linear model, where you try to separate items using a straight line. Or, if you want to add more parameters, you don't have to have a straight line, and that is non-linear. I will concentrate on a straightforward, linear, either/or case. It's a great way to be introduced to support vector machines, and I think you'll see immediately how useful they are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [narrator] (1)

#### [Create a support vector machine model](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=0)** - [Narrator] Support vector machines use input variables to classify training set data by placing each value into one of two categories. In this movie, I will show you how to create linear support vector machine models in R. I have opened the R Console, and the first thing I need to do is install the package that will allow me to run support vector machine code. And that will be install.packages and then in the parentheses and double quotes, e1071. So, those are the number's 1071 after the letter e. I'll press Enter, and it's installing it or at least it's trying to. I do have to download the file. So, I can find that CRAN package from my local archive or mirror site. And I'll click Okay, and hopefully my download will be successful. Alright, I have successfully installed the e1071 package and I can add it to my active library. So, I'll type library and then in double quotes, after parentheses, e1071, close the double quotes, close the parentheses, and Enter, and it's active. Support vector machines are [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) [Algorithms](../../Skills/Software%20Development/Algorithms.md). You have a set of known options and you train your data based on the known outcomes.
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=95)** I'll start by downloading a data frame from an external file to a variable that I will call train. And that's just what I will call my training data. The assignment operator is a less than sign followed by hyphen. The method is read.table, then a left parentheses, and now I need to get the path that is the directory path to the file. So, I'll press Alt + Tab to move to the Chapter5 folder of the Exercise Files collection. And I want the Comma Separated Values File for SVM_Training. So click that, then right-click it and click Copy as path. I could also press Control + Shift + C after clicking the file. I'll click there, go back to the R Console, and press Control + V to paste. That looks good. There are a number of changes I need to make. First is I need to change double quotes to single quotes. That's just the way that this works in R. So that's done. And then I need to double each of my back slashes. And the reason is that when R sees a backslash, it thinks that a control character or command character or escape character is coming next. In this case, I wanted to treat the back slashes as back slashes, so I need to double them up. There we go. Then a comma.
>
> **[3:11](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=191)** To specify the separator character I will type sep=, then in double quotes, I'll type a comma, and then close that with another double quote, then a comma. The final argument is to indicate that there is a header row. So I'll type header=T for true, Enter, and the data's been read in. Now to create my model, which I will assign the output to model. So, model followed by the assignment character. The method is svm, for support vector machine, left parentheses and the formula is equal to the dependent variable, which is whether someone purchased a product. Then a till day indicating that the income and age variables follow, which are the independent variables. So, I've Income plus Age, then a comma. The data will we will use, so I have data = train, that's the variable we downloaded before. Then a comma, and the type = and then a single quote C-classification. Classification. Good. Then a single quote and a comma. And the kernel will be the model that we use.
>
> **[4:44](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=284)** And that's just a term that this particular CRAN package developer used. So, we have the kernel = and then in single quotes, linear, and right parentheses. And if I typed everything correctly, we should get our model. So, I'll press Enter. Good. It's always nice when that works the first time. Now we can read in our test data. And for that, rather than retype what I have above, I will press the up arrow key until I see train, and then read table, and the other data you see there. The file I want to use is called svm_test. And actually, I will switch back to, yeah, svm_test.csv. So that's there. I was just making sure that the file name was correct. And then I'll use the arrow key to go back and instead of train, I will rename this variable test. So, that will save us a bunch of time. Then Enter, and we're good. Now I can generate a set of predictions. I will assign that to the variable I will name predictions. Assignment an operator. The method is predict. The left parentheses. We'll use our model, then a comma. And the newdata is equal to the test data minus the fourth column. So, the fourth column is the known outcome,
>
> **[6:17](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=377)** and we want to undo that, or leave that out of the prediction set. So, that'll be newdata = test left square bracket -4. That means that we are excluding the fourth column. Right square bracket, right parentheses, and Enter. And it's run. We can see how well we did by creating what's called a confusion matrix. And this will give us a two-by-two matrix of predictions and outcomes. So, I will do confmatrix. So, it's a confusion matrix. You will also hear some people refer to it as a confirmation matrix. It's the same thing, but I believe confusion matrix is the preferred term. So, I will do table, and we'll base that, after left parentheses, on the testdata. We're going to include all the rows, so I'll type a left square bracket, comma, and then 4, then a right square bracket, a comma, and then predictions. So, what we're doing after the right parentheses, is to compare the value from the actual outcomes, column 4 of our test set versus the predictions that we just generated from the model. So I'll press Enter. It's been run, and I'll type confmatrix. And there are our predictions.
>
> **[7:51](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-support-vector-machine-model?u=76281980&t=471)** So, it appears that when we thought a customer or a contributor would purchase a certain package, if they didn't, then 140 times they did in the next year, but 12 times they did. And if they did purchase in a previous year, then we have a split. Half of them did and half of them didn't. And that checks out. People's life experiences change, or perhaps they have decided to contribute to other causes. So, having a 50% success rate year-on-year probably isn't that bad. But it also tells us who to talk to, because they already gave to us once and it might be worth asking again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** svm_test (2)
> **Env Vars:** cran (2)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Prerequisites:** install (2)

#### [Visualize support vector machine data in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-support-vector-machine-data-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-support-vector-machine-data-in-tableau?u=76281980&t=0)** - [Presenter] When you create a support vector machine model to distinguish between two classes of objects in a dataset, you can list the algorithm's results as our output, or visualize it in [Tableau](../../Skills/Data%20Science/Tableau.md). In this movie, I will show you how to take the first step toward visualizing the data used in your SVM analysis in a Tableau workbook. My sample file is 0503 SVM data, and you can find it in the chapter five folder of the exercise files collection. The data set for this workbook contains four items. The first is the customer ID, and then we have information we know about each customer, which is their age, their approximate income, and whether they purchased a product last year. And our goal is to try to predict how often a previous purchase indicates a future purchase. So I want to fill out this worksheet into a text table. I will drag customer ID to the rows area. So I have labels for each of the customers, and then I will select age, income, and purchased. And it's useful that purchased is in the final position because that's what we will be comparing our support vector machine output in the next movie too, and I will drag those onto the column shelf. So I currently have a list, or rather I have a set of horizontal bar charts, and what I'll do instead is change it to a text table.
>
> **[1:36](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-support-vector-machine-data-in-tableau?u=76281980&t=96)** So I'll click the show me button, click text, click show me again, and there I have my information. So I will widen the column so I can see all of purchase, and I have the base from which I can add my support vector machine model based on an R calculation that we will create in a calculated field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (2)
> **Env Vars:** svm (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [presenter] (1)

#### [Add an R support vector machine model to a Tableau viz](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=0)** - [Instructor] After you create a [Tableau](../../Skills/Data%20Science/Tableau.md) visualization that contains data you want to analyze using a support factor machine, you can add the R statement to a calculated field. With that calculation in place, you can add as the results to your viz and see the results. The sample file that I'm using is 0_04_SVM Calculation, and you can find it in the chapter five folder of the exercise files collection. This is the vis that we created in the previous movie, and it's just a straightforward display of customer data. Specifically, we have whether they made a purchase in the most recent product cycle. From here, we can create a calculated field running an R script, but first I need to make sure of two things, first, that I have the Rserve process running in R, and second, that I have linked to it. I already have the R console open, so I'll press alt tab to move to that. I'll start by adding Rserve to the library, so I'll type library, then in parentheses and double quotes, Rserve, the first R is capitalized, and enter. That's good, and then I will run the Rserve process by typing Rserve and an open and closed paretheses, because I am not passing any arguments, then enter, and it's been run. Now I can connect to Rserve from within Tableau. So I'll press alt tab and go to the help menu,
>
> **[1:36](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=96)** point to settings and performance, and then click manage analytics extension connection. In that dialogue box, I'll click Rserve, and then in the new Rserve connection dialogue, for the host name, I'll type localhost, because I am working on my local computer. That's where Rserve is running. And the port number, which you just have to know, is 6,311, so six three one one. I will test the connection. Successful, so I'll click OK, click save, and then click close. So now I can successfully create a calculated field using R. I'll go to the analysis menu and then click create calculated field, and for the calculation name, I will call it SVM_Prediction. (keys clicking) Then in the editing area, I'm going to put in a fairly long script. We will use script for an integer number. It will be either zero or one, although I will tell you later that it's actually one or two. So I have SCRIPT_INT. (keys clicking) Then after the left parenthesis, I will click down, or rather, press enter several times to give myself some space.
>
> **[3:12](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=192)** I need to add the e1071 package to the library, so I will type a single quote, then library, left parenthesis, then double quote, e1071, close the double quote, then right parenthesis and enter. I will assign the data we read in to a variable called train. The assignment operator is a less than sign, followed by a hyphen. The method is read.table, then left parenthesis, and I need to get the file path for the dataset we're reading in, and that will be training.csv. I have that in the chapter five folder of the exercise files collection, so I will use alt tab to go to that folder, and then SVM Training is the data I want to use. I'll make sure I click the comma-separated value version of the file. Then right click it and click copy as path. I could also press control shift C. So click there, and then I'll go back to Tableau, and I have the file path there. There is one change I need to make, and that is to add a second backslash to each of the existing backslashes. And that's because when R sees a backslash in this context,
>
> **[4:49](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=289)** it expects a control character or escape character. Because I want Tableau and R to interpret them as actual backslashes, I need to double them up. So I have that, then a comma and the separator character. So I'll type S-E-P followed by an equals sign. (keys clicking) It's a comma, so double quote, comma, double quote, then a comma again, and there is a header, so I'll type header equals capital T for true, then right parentheses, and press enter twice. Now we can create our model, so that will be model, the variable that will contain the model's output, then assignment SVM for support vector machine, formula equals, and here is where we need to use a bit of R syntax, so that's .arg1. That will be the dependent variable. Then a tilde, then .arg2 plus .arg3, and those will be the input fields that we define later in this definition. Then a comma, data equals train, which is a variable we read into before, then a comma. Type equals, then double quote C-classification.
>
> **[6:20](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=380)** Yep, that's spelled correctly. I usually get that one wrong, so I'm glad I got it right on the first try. Then a comma, and then the kernel, which is the type of comparison we're going to do, equal is linear. That will go in double quotes as well. Then a right parenthesis, then press enter a couple of times. The test data, we will read in from the same folder, but instead of SVM_Training, it will be SVM_Test. So I will copy the line where we read in the training data, and paste it in. (keys clicking) The variable we'll read this into is test, and then instead of SVM Training, SVM_Training, it will be SVM_Test. That looks good. Yep, I managed to copy everything correctly. So we're almost to the end. We need to create a prediction model and write those to a variable, so that'll be predictions. Then the assignment operator will be the predict method, left parenthesis model comma the new data (keys clicking) equals the test variable above, which remember is a data frame, but we don't want to include the actual outcome. So that means I need to exclude the fourth column, so I have test then a left square bracket minus four. So we're bringing in columns one through three, but leaving out column four.
>
> **[7:55](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=475)** Right square bracket, right parenthesis, and then a single quote and a comma. (keys clicking) And finally, we can list the fields and calculations that will supply data for arguments one through three, and those will be the sum of values in the purchase field comma, sum of values in the income field comma, sum of values in the age field. (keys clicking) All right, all that looks good, and I see below that the calculation is valid, but there is one more thing that I need to do, so I will click to the right of the final right parenthesIs and type minus one. The reason is that the way that Tableau runs this R script, instead of having zero or one, it provides a value of one or two. So one means they did not purchase, it was a negative outcome, whereas two indicates a positive outcome. My original data has zero and one, so I need to subtract one from this result, and I will click OK, and I will add SVM_Prediction to the measure values card. Tableau thinks for a moment. Ugh, could not find function library. Okay, so I thought something more serious had gone wrong, so I will remove the calculated field.
>
> **[9:32](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/add-an-r-support-vector-machine-model-to-a-tableau-viz?u=76281980&t=572)** And let's see, I will go to SVM_Prediction. Yes, I was very worried that something serious had gone wrong. Yep, library, okay. SVM_Prediction Measure Values card, let's see if it works this time. It did, and from here, I can compare actual purchases versus the model's prediction. And I see two differences here, and they're both in the positive direction where they didn't purchase last year, but they did this year. And I'm sure that if I scrolled through the data, I would find several examples in the other direction as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (6)
> **Non-Speech:** (keys clicking) (7)
> **CLI Commands:** find (3), make (3)
> **Env Vars:** svm (3), script_int (1)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (4)
> **Exercise Files:** exercise files (2)
> **File Paths:** training.csv (1)


### 6. Grouping Data Using Cluster Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe cluster analysis](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-cluster-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-cluster-analysis?u=76281980&t=0)** - [Instructor] When you examine a dataset, you will often notice that customer's [products](../../Skills/Software%20Development/Microsoft%20Products.md), or competitors tend to fall into one of several groups. In data analysis, these groups are called clusters. And in this movie, I will describe cluster analysis and how one popular technique to identify those clusters works. These sample file that I'm using is named [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) VBA cluster, and that is a macro-enabled Excel workbook that you can find in the chapter six folder of the exercise files collection. If you're not able to run Excel VBA macros on your computer due to security settings, then you can follow along, and I'll describe what we have. So in this workbook, I have a series of customers and the data that I have just has two points: one x value and a y value. And those are plotted here in blue on the scatter chart. Then I also have a number of centroids, in this case, three, with their starting positions to their right, and those are displayed in orange. And the goal is to use distance calculations to move these centroids to the middle of groups and use those to identify clusters. The final column on the right in my initial dataset lists the centroid that is closest to a particular point, and of course, that can change as the calculations go on. The formulas that I've created, both here and in Excel VBA, will update the positions of the centroids.
>
> **[1:33](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-cluster-analysis?u=76281980&t=93)** And I see here that the next ones will be here. So we have 5.28 and 4.14 and the others below. So I'll click update centroids and they move. So two things have happened. The first is that I have my three centroids that have moved closer to the clusters that, as humans, we can visually identify as likely clusters, and none of them appear to be in exactly the right position yet. So I'll click update centroids again. So they've moved, and it looks like this centroid is probably in the middle and where it's supposed to be. This one is close and this one is closer than it was. And I can see from the updates that the first two centroids will change position a little bit, but the third one already appears to be in place and it probably won't move, given what we know about the data. So I'll click update centroids again, and the centroids have moved and they appear to be in the middle. And in fact, I can see that the centroid update values are exactly the same as the current position for the centroids. So I can see that we have correctly identified our three clusters of data using this method, and we can continue our analysis based on what we know about those values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** vba (3)
> **Versions:** 5.28 (1), 4.14 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Do cluster analysis in R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/do-cluster-analysis-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/do-cluster-analysis-in-r?u=76281980&t=0)** - [Instructor] Many R packages implement cluster analysis [Algorithms](../../Skills/Software%20Development/Algorithms.md), but I've selected one that uses a centroid-based method to identify its clusters. In this movie, I will show you how to identify clusters in R using data that you import from a CSV data file. I have opened an R Console window, and I can start by reading in data from an external file. We're working with sales data, so I will type sales and then the assignment operator, which is a less than sign followed by a hyphen. It looks like a left pointing arrow. Then read.table because we're reading in tabular data, then a left parentheses. The data we'll use is in the Chapter 06 folder of the Exercise Files collection, so I'll press Alt + Tab, and the data is in the ClusterData [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) CSV file. So I will right-click that file and then from the shortcut menu that appears, click Copy as path. After I click the file, I could also have pressed Ctrl + Shift + C. But in this case, I'll click Copy as path, then go back to the R Console and press Ctrl + V to paste. There are a couple of changes that I need to make because of the R syntax. And the first is that the file path needs to be enclosed in single quotes. That's just part of what you need to know. And the other part you need to know
>
> **[1:33](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/do-cluster-analysis-in-r?u=76281980&t=93)** is that each of the backslashes, which indicate folder levels, need to be doubled up. And that's because a backslash indicates a control or escape character in R, so you need to have two backslashes right after each other to indicate that R should interpret a backslash as in fact a backslash, then a comma. We have a separator character of a comma, so sep, short for separator, equals, single quotes, a comma, close the single quotes, another comma, and then header equals capital T, indicating that we have a header row. So Enter, and we have read in our data. Now, I can use the k-means algorithm, which is built into the stats package of the basic R installation. I'll call it result, that will be the output. So I result then an assignment operator k means, we'll use the data from sales, and we'll guess that we're looking at five clusters. Press Enter, and it's been run. Now, I can type result, and we'll get a summary of what just occurred. So here we have the five clusters, and they have sizes of 24, 7, 21, 24, and 20. So four of them are very good in the sense that they're almost equal in size, and 7 indicates that we have one group
>
> **[3:06](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/do-cluster-analysis-in-r?u=76281980&t=186)** that's different from the others. The means are listed below in cluster means, and that's based on sales and profit data. And I see that we have a sum of squares ratio of 90.3%, and that is actually a very good number. So it means that we probably have a pretty good separation based on five clusters. And there you have it. We have a good result this time, but I encourage you to experiment with different clustering methods, there are several algorithms available, and also different numbers of clusters. You never know what you're going to find out about your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** is a  (1), short for (1), means that (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** csv (2)
> **Versions:** 90.3 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Exercise Files:** exercise files (1)

#### [Troubleshoot cluster analysis in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/troubleshoot-cluster-analysis-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/troubleshoot-cluster-analysis-in-tableau?u=76281980&t=0)** - [Instructor] In this movie, I will show you how to create a visualization on which you can base your cluster analysis, and also how it can go wrong when you are using a script within [Tableau](../../Skills/Data%20Science/Tableau.md). Then in the next movie, I will show you how to work around that problem. The sample file I'm using is 0603 cluster attempt, and you can find it in the chapter six folder of the exercise files collection. I have data broken down by customer with the amount of profit and sales for each one. To create the scatter chart that I want, I will move profit to columns, and then sales to rows. I have the sum of profit and sales in my single point, and I want to make profit and sales both dimensions, so I can use them on the scatter chart. So I'll click the profit fields down arrow and click dimension, and I'll do the same thing for sales, and there I have my individual points. And I will change the shape to a filled in circle, and that's because we'll be using color. Now to show you what can happen if you use certain methods in R. Within Tableau, I'll create a calculated field. So I'll go to the analysis menu, click create calculated field, and then I'll rename it to Clusters. And I will start with a script that returns a value of type integer. So we will have, hopefully, five different clusters.
>
> **[1:37](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/troubleshoot-cluster-analysis-in-tableau?u=76281980&t=97)** Those will be numbered one through five. There are no decimals, so we can use integer. Then after a single quote, I'll type predictions, and I'll use the assignment operator, a less than sign followed by a hyphen to assign at the value of K-means, which is the algorithm we will use. Then X is data.frame. Then a left parentheses, and then .arg1, .arg2. then a right parentheses. Argument one and argument two, refer to fields that we will enter later in the script. So I have that, then a comma five because we want five fields, or rather five clusters. Then a right parentheses, and enter. And then we will assign the cluster numbers to the predictions variable. So that would be predictions. And because it's the data frame, we add a new column by typing a dollar sign, and then cluster. Then a single quote and a comma. Then we need to identify the two fields that we will use for arguments one and two. And the first will be sales, and the second will be profit. So we'll have sum of sales, then a comma, and sum of profit. And I see at the bottom left that the calculation is valid, and I'll click okay.
>
> **[3:11](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/troubleshoot-cluster-analysis-in-tableau?u=76281980&t=191)** Over in the sidebar, I see an exclamation mark next cluster. So I'll hover my mouse pointer over it, and it says, "The calculation, Clusters, contains a script function that requires an analytics extension. Configure an analytics extension to enable the script. So let's do that. And the reason we see that is because I do not have R serve running yet within the R console. So I'll press alt tab, and I've already opened up an R console. I need to add the R serve capability as a library. So I will type library, and then in parentheses and double quotes, ("Rserve"). So enter. And then I will run the R serve process by typing Rserve, again a capital R, and then open and closed parentheses with nothing in between. Enter, and it's running. I'll press alt tab to move back to Tableau, and then I will connect to that service. So I'll go to help, point to settings and performance, and then click manage analytics extension connection. I'll click Rserve, the host name because R is running on the same computer as Tableau, as local host, and the port number is 6311, and that's something that you can get from the documentation. I'll click save. test the connection. It's good. Click okay.
>
> **[4:45](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/troubleshoot-cluster-analysis-in-tableau?u=76281980&t=285)** Click close, and you'll see that the warning or information message is gone, and Clusters is now a field that we can try to use. So if I were to use Clusters to identify Clusters by color, based on my data, I would drag Clusters to the color square on the marks card. Then Tableau thinks for a moment, and we get a message box, saying it's unable to complete the action, and the script is invalid for the error that we see here. And when I checked online, it became apparent that this is a common problem that no one has found a way to run this particular script with this particular method, using Tableau and the current release of R. So it doesn't look like this method will work, but there is a way that we can use K-means, or any other process to write data out and then read that data into Tableau and use it as part of our visualization. So to learn how to get around this particular problem, join me in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (7)
> **Cross-References:** in the next (2), later in (1)
> **UI Navigation:** go to (2), in the sidebar (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** warning (1)

#### [Write cluster data to a CSV file for use in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=0)** - [Instructor] In the previous movie, I showed you how to perform clustering analysis in R, except that in [Tableau](../../Skills/Data%20Science/Tableau.md), we ran into a problem applying the results to a visualization. In this movie, I will show you how to work around that problem and then show you how to work around another problem that comes up when you do your analysis in Tableau. The sample file I'm using is 06_04_ClusterWorkaround, and you can find it in the Chapter06 folder of the exercise files collection. This workbook brings in data from the ClusterData [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) file, and if I go down to Data Source to preview the data, I'll see that I have three columns, Cluster, Sales, and Profit. I want to do my clustering based on sales and profit only, so I'll focus on columns two and three of the Data Source. And this is one thing that I did incorrectly when I was rehearsing this video. I included all three, including customer numbers, and I don't think it made a difference in the analysis, but it's important that you only include the data that you want. So let's go back to R and do our calculations and output cluster analysis based on this data. So I already have an R console running and I pressed Alt + Tab to move to it, and I'll make this window a little bit wider. We'll read in our data to the sales variable and assign it using the assignment operator. It's a less-than sign, followed by a hyphen,
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=95)** looks like a left-pointing arrow. Then we'll do read.table as our method. Then, I need the file path. So I'll use Alt + Tab to move to the Chapter06 folder of the exercise files collection. And the data I want is in ClusterData, which is the Excel comma-separated values file version of this dataset. So I'll right click that file and then click Copy as path after I clicked ClusterData.csv, I could also have pressed Ctrl + Shift + C. But I like doing it this way when I demonstrate a process so that you can see what's going on. So Copy as path, go back into the R console, Ctrl + V, and then I need to edit the file path. So I'm going to change each of the double quotes to single quotes, and again, this is just something that you need to know. And then also, all of the backslashes need to be written as two consecutive backslashes. The reason is that R, when it sees a backslash, expects a control character, also called an escape character, that would have R perform a command. I want to have the backslashes read as backslashes, so I need to put two in a row. The separator character is a comma, so sep= and then a single quote's a comma. Another comma for the final argument, which is to indicate that my data does have a header row. So header=T, right parentheses and Enter, and the data's been read in.
>
> **[3:10](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=190)** Now I can do my K-means analysis, and this is where I need to focus on only columns two and three of what is now the data in the sales variable as part of its dataframe. So that will be predictions, with an S, and we will assign that the output of the K-means, kmeans, K-M-E-A-N-S, then left parentheses, and the data will come from columns two and three of Sales. So sales[2:3], and we're guessing that we want to have five clusters. So I'll type a five in a right parentheses and Enter, and the analysis has been done. And I'll type predictions to take a look at the data and I do in fact have just sales and profit. We're not doing the customer number at all. And we have five clusters, most of them of about equal size. So we have one at seven. So we can take a look at our data to see why that's the case. And below, I have a list of available components and that includes cluster. And we're going to use that to write our data out. So we're going to write out the contents of predictions. So we'll use write.csv, we want to create another CSV file, then a left parentheses, then predictions, which includes both a row number and the cluster prediction.
>
> **[4:46](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=286)** And we can do this in this case because our customer number and row number are the same. We started both from one and we have the same number in each of them. Otherwise you would have to create a different relationship within your Tableau workbook. So I have write.csv predictions, and the file, so file= and then I'm going to copy the file path from above and edit it. So I'll click down there, so Ctrl + C and then Ctrl + V. And I will call it ClusterAssignment. And that's all I need, so I'll type a right parentheses and Enter, cannot coerce class '"kmeans"' to a data.frame. Oh, so it needs to be prediction, predictions$cluster, which is one of the available components. So I will write that again. So I'll press the up arrow key. And instead of predictions by itself, type a dollar sign, and then cluster, and Enter. And it's been written out. And if I press Alt + Tab to move back to the dataset, I see that I have ClusterAssignment here. I also have a different file, ClusterAssignmentBackup, that you can use if you were not able to get this R code to work. So now let's go back to Tableau and add this data source to our existing visualization. So I'm back in my Tableau workbook
>
> **[6:23](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=383)** and I want to add the file that I just created. So I'll click Data Source, click Add, it is a text file, and then I have ClusterAssignment. So I'll double click there. And then over on the left, I have ClusterAssignment.csv. I'll drag that onto the relationship window and I get an error saying that it can't find a field with the same name and it's not close enough to identify. So let's see what we have in ClusterData, the original dataset, I have customer number, and then in ClusterAssignment, it will be field number one. And I have the F1 there and then X as the output. And actually, I will rename X to ClusterAssigned, Enter. Right, that looks good, and if I scroll down, I see that I have ClusterAssignments and I don't see anything greater than five, so that's good. I'll switch back to sheet number one and I'll drag ClusterAssigned to the color square on the marks card. And I see 10 clusters, which is strange. And I currently have this done as a sum. And when we look at five and get 10, we know something's wrong.
>
> **[7:55](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/write-cluster-data-to-a-csv-file-for-use-in-tableau?u=76281980&t=475)** But what I can do is go to the marks card, click the ClusterAssigned field's down arrow, and change it from measure to dimension. And that finally changes us back to five clusters assigned and I can see each of the clusters here. And it looks like the cluster with only seven members was here and that's because they have extremely high sales. Although this customer who bought almost 2,000, excuse me, $3,000 worth of product, and we only made a profit of 30, we might look at giving them a smaller discount. So this lengthy process demonstrates a couple of things. First, it can be difficult to use R and Tableau together. However, if you have an existing R routine that you trust, there are ways to take the data into Tableau and use it to analyze your data. It might not always be easy, but it can certainly be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (7), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2)
> **File Paths:** write.csv (2), clusterdata.csv (1), clusterassignment.csv (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)


### 7. Classifying Data Using Random Forests

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe random forest analysis](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-random-forest-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/describe-random-forest-analysis?u=76281980&t=0)** - [Instructor] In this chapter, we will look at random forest [Algorithms](../../Skills/Software%20Development/Algorithms.md), which classify entities according to characteristics contained within a dataset. Specifically, random forest classifies objects by creating [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md), but it doesn't just create a single decision tree. What it does is randomly generate trees and test their performance against a test set of data. So what will happen is that the algorithm will generate a bunch of random solutions, get rid of the ones that don't work well, and recombine the ones that do to try to find ever better solutions. If you have category data represented as numbers, you need to add in a specific command to ensure that the R package does what it needs to do correctly, but it's just a single bit of code and takes no time at all to add. The dataset we'll use is from the Glass Identification Dataset that is hosted at the University of California Irvine Machine Learning Repository. That's available online, and you can go to the URL shown above and through the generosity of UC Irvine if we scroll down, we see that the license allows us to use the data for any purpose whatsoever as long as appropriate credit is given. So to the University of California Irvine, I thank you and I look forward to working with your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Create a random forest analysis model in R](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=0)** - [Narrator] Performing random forest analysis in R requires building a model based on training data and then testing it on a separate dataset with known values. Testing your values lets you guard against overfitting, which happens when you build a model that is too closely tied to your training dataset and could provide inaccurate results on data you collect later. The sample file that I'm starting with is GlassTrain.csv, and that is a comma-separated value file that you can find in the Chapter07 folder of the Exercise Files collection. It is the first of two comma-separated value files that we'll use. So here, I have a list of glass items or glass types. We have their ID here in column 1 or column A, and then we have values across nine attributes. And then, in the final column, which is column 11, we have the class. So we have type 1 all the way down to type 7. So our goal is to build a model that we can use on a test set to predict which class a particular glass will be based on values in these nine attributes. To start, I will close this file. And I already have our console running in the background. I need to start by installing the random forest package. So I'll do install.packages, and then in parentheses and double quotes, randomForest, all lowercase except for the F in the middle.
>
> **[1:37](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=97)** Then Enter. I need to download it from a mirror site. My closest is USA in Oregon, so I'll click that, click OK. And hopefully in a second, it will download and install. Great. And then I can add it to the active library. So that will be library. Then in parentheses and double quotes, randomForest, again with a capital F, all else lowercase. Enter. And it's been added. Now, I can read data in from the GlassTrain file that I had earlier. I'll assign it to a variable named train. The assignment operator is a less than sign followed by a hyphen. Looks like a left pointing arrow. The method is read.table. Then a left parenthesis, and I need to get the full path to the file on my computer. So I'll press Alt+Tab. That takes me to the Chapter07 folder of the Exercise Files collection. And then I'll right-click GlassTrain. And from the shortcut menu, click Copy as path. I could have also pressed Control+Shift+C. So I'll click Copy as path. Go back and then press Control+V to paste. And I have the full path to the file. The one change I need to make is to double up the backward slashes. And the reason is that in R,
>
> **[3:13](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=193)** when the interpreter sees a backslash, it expects a command character, also called an escape character. If you want the interpreter to see the back slashes as back slashes, you need to have two of them in a row. So I've done that. Now we need to identify the separator character. It's a comma-separated value file, so it's going to be a comma. So that'll be sep equals, then in all quotes, comma, then a comma. And the final argument is that there is a header, so header equals capital T. Then a right parenthesis that looks like it. Enter. And the data has been read in. Now I can have R create the model. So I will assign it to variable name model. And then the method is randomForest, spelled as before. Left parenthesis. We're doing a classification, so I need to use as.factor. And then in parentheses, Class with a capital C. It's a very common error to have class, in this case, with a lowercase C, and you'll get an error that, frankly, doesn't explain what happened. Then a tilde to indicate that we have a number of arguments or attributes coming in, and those will be the nine attributes from our worksheet. So that'll be Attrib1+, and I'm going to copy the Attrib text. So I can do Control+V, plus.
>
> **[4:51](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=291)** Control+V, take it up to three, plus. And I'm going to do this for all nine of our attributes. And this is one of the joys of data analysis. When you are building these commands for the first time, you have to write out everything. However, if you cut and paste intelligently, you can make the work a lot less for yourself in the future. So there I have the nine attributes. I have plus signs between them, just read through, then a comma, and the data will come from the train variable. So equal train, right parenthesis and Enter, and the model has run successfully. Now we can read in our test data. And for that, I'll actually press the up arrow key a couple of times. And I go to the train line. So you can see I'm reading in the train data. And I will edit it so that instead of reading GlassTest.csv into a variable called train, or GlassTrain into a variable called train. I will read GlassTest into a variable called test, and everything else is exactly the same. So, Enter. And we've read the data in. Now we can generate our predictions, which I will sign to a variable called predictions. And that will be predict, left parenthesis, model, newdata equals,
>
> **[6:28](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=388)** and this will be columns 2 through 10 of the test data that we just read in. So that'll be test, then a left square bracket, 2:10, followed by a right square bracket and a right parenthesis, indicating that we are only using columns 2 through 10 of the dataset. So we still have our glass ID in column 1 and the actual type of the glass in column 11, and we're ignoring those for the predictions. Then Enter, and it's run. I can see the results by typing predictions to see the data. And there we have it. It's hard to tell from this output what the correspondences actually are. So what I'll do is combine my predictions with column 1 from the test data. And then later in [Tableau](../../Skills/Data%20Science/Tableau.md), we can combine the actual type, that is the actual glass type, with what was predicted. So in R, I will write my predictions and the test column 1 to an output variable. I'll call that output1, and I will assign it the results of cbind, which combines two dataframes. And that'll be test, then in square brackets, 1. So the first column of the test data, which is the glass ID, then a comma, and predictions. Predictions.
>
> **[8:04](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=484)** Make sure that's spelled right. That's good. Right parenthesis and Enter. So we have everything into a single variable, a dataframe, and now we can write it out to a CSV file. The method for that is write.csv. Then left parenthesis. And output1 will be the output variable. And then the file will be equal to, and I will copy one of the file paths from above. And edit it. So we're there, Control+V, looks good. And my output will be called predictions.csv.
>
> **[8:49](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/create-a-random-forest-analysis-model-in-r?u=76281980&t=529)** And then I need to end with a right parenthesis and Enter. And the data has been written out. And if I press Alt+Tab and move to Chapter07, I see that, in fact, I do have predictions here, so it's been written out. I also have a file named PredictionsBackup, and I created that in case you either didn't work through this movie, or for some reason, you weren't able to write a file onto your computer. So, don't worry, when you move to the next movie to look at the predictions and how they match up to the actual test set, you'll be able to use PredictionsBackup if you don't have predictions already in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (1)
> **File Paths:** glasstrain.csv (1), glasstest.csv (1), write.csv (1), predictions.csv (1)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** randomforest (3)
> **Definitions:** is a  (3)
> **Prerequisites:** install (2), you need to have (1)
> **Env Vars:** usa (1), csv (1)
> **UI Navigation:** right-click (1), go to (1)

#### [Visualize data for random forest analysis in Tableau](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-random-forest-analysis-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-random-forest-analysis-in-tableau?u=76281980&t=0)** - [Instructor] When you perform random forest analysis in R, you can classify objects within a set of categories. In this movie, I will show you how to visualize data for random forest analysis in [Tableau](../../Skills/Data%20Science/Tableau.md), and also how to bring in your results for that random forest output. My sample file is 0703 Random Forest, and you can find it in the chapter seven folder of the exercise files collection. I have already connected to my glass test data set. Well, what I want to do is add a second connection to this data sheet, and that will be the output or predictions of the random forest analysis. I will add the data source by going to the data source button at the bottom left corner that is clickable, and next to connections at the top of the sidebar I will click add. In the add a connection panel, I will click more. Then in the chapter seven folder of the exercise files collection, I will double click predictions backup, and this is a file that was the output of the R process we ran in the last movie. If you put the file somewhere else, or if you didn't run it and you're just reviewing, then you can double click predictions backup to use this data. So I'll double click there and it's been added to my files list, and I'll drag predictions back up into the relationship window.
>
> **[1:35](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-random-forest-analysis-in-tableau?u=76281980&t=95)** And because sheet one, which is the glass test and predictions backup, which is treated as a text file, have a field in common that is glass id, Tableau is able to make a connection or join, create a relationship between the two of them. So go back to sheet one, and I will add my fields to the visualization. I'll drag class ID to the rose area. Then under sheet one, I'll drag class there, so that is the known class value. And then I'll go back up to predictions backup, and drag over predictions. And here we can identify which predictions were correct and which were not. So I see we had a couple of errors mistaking type one for type two, although we did get a lot of correct guesses up there. Then type three has been variously identified as type one and type two and type five identified as type seven. So it appears that there are a fair number of errors. So that means that even though our model did pretty well on type one and it looks like type two, for the other areas it doesn't seem like it did very well at all. So we can use that as information about how well our algorithm is performing and whether we want to perform another type of analysis. This is the last movie in this chapter. In other chapters, I have shown you how
>
> **[3:09](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/visualize-data-for-random-forest-analysis-in-tableau?u=76281980&t=189)** to create a calculated field using the output of your R processes within a Tableau script. However, in this case, it has proven to be exceedingly difficult. So what I hope you'll remember and what I will review again, is to output your data to a CSV file. Make sure that you have a field in common with your test data and bring the results into Tableau, create a relationship and visualize it as I have shown you here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (4)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the last (1), go back to (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Further resources](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/further-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tableau-and-r-for-analytics-projects-27845131/further-resources?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course. Before I go, I would like to point you to some additional resources that you can use to learn more about [Tableau](../../Skills/Data%20Science/Tableau.md) and R separately and together. First, be sure to visit [tableau.com](https://tableau.com). There you can find links to community resources and also documentation for the program. Also, if you're looking for data sets, go to the University of California Irvine Machine Learning Repository. You see the web address there. I used their glass identification data set here, and I'm grateful that they allowed us to do so. Two books to recommend. The first one is the R. Cookbook, 2nd Edition by JD Long and Paul Teetor. It's an excellent book that offers recipes that you can use for R calculations. You might have to modify them a bit to use them with Tableau, but you can also use them to expand your R knowledge. The same is true for Practical [Data Science](../../Topics/Data%20Science.md) with R Second Edition by Nina Zumel and [John](../../Glossary/Tool/John%20the%20Ripper.md) Mount. This is another book that rather than providing cookbook solutions, trains you to do practical data science with R, as the name says. It's a very useful book, I've learned a lot from it, and it will take you a long way in your career. Thanks again. I appreciate you taking the opportunity to learn about using Tableau and R, and I wish you nothing but the best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (4), [Data Science](../../Topics/Data%20Science.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **CLI Commands:** find (1)
> **URLs:** [tableau.com](https://tableau.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Curt Frye](../../Instructors/Data%20Science/Curt%20Frye.md)

## Resources

- Exercise files available

## Skills Covered

- R (Programming Language)
- Tableau
- Data Analytics

## Path Context

### In [Develop Your Tableau Skills](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Tableau%20Skills.md)
← [Creating Interactive Tableau Dashboards](Creating%20Interactive%20Tableau%20Dashboards.md) | **4 of 4**

## Appears In

- [Develop Your Tableau Skills](../../Paths/Data%20Science/Learning%20Paths/Develop%20Your%20Tableau%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Creating Interactive Tableau Dashboards](Creating%20Interactive%20Tableau%20Dashboards.md) — Data Analytics, Tableau
- [Complete Guide to Tableau for Data Scientists](Complete%20Guide%20to%20Tableau%20for%20Data%20Scientists.md) — Data Analytics, Tableau
- [Tableau Essential Training](Tableau%20Essential%20Training.md) — Data Analytics, Tableau
- [Build Advanced Charts in R](Build%20Advanced%20Charts%20in%20R.md) — R (Programming Language)
- [Creating Maps with R](Creating%20Maps%20with%20R.md) — R (Programming Language)

---

[↑ Back to top](#)