---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-the-r-tidyverse-24332729
url: "https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729"
duration_minutes: 198
duration: 3h 18m
level: Intermediate
updated: 7/12/2024
learners: 9413
skills:
  - R (Programming Language)
  - tidyverse
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-the-r-tidyverse-4377003"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHGV1Nm-0E3TQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719510264274?e=2147483647&amp;v=beta&amp;t=eVRhPVTH6kak7pbszlU3DUDoWMn_MAM1qlo4kTj3gPA"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in R]]'
prev_courses:
  - '[[R Code Challenges- Data Science]]'
next_courses:
  - '[[R Tidyverse Applications]]'
path_nav: '[{"path":"Advance Your Skills in R","position":5,"total":8,"prev":"R Code Challenges- Data Science","next":"R Tidyverse Applications"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/tidyverse
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20the%20R%20Tidyverse.md)

![Learning the R Tidyverse](https://media.licdn.com/dms/image/v2/D560DAQHGV1Nm-0E3TQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719510264274?e=2147483647&amp;v=beta&amp;t=eVRhPVTH6kak7pbszlU3DUDoWMn_MAM1qlo4kTj3gPA)

# Learning the R Tidyverse

> R is an incredibly powerful and widely used programming language for statistical analysis and data science. The "tidyverse" collects some of the most versatile R packages like ggplot2 and forcats, which are all designed around the concepts of tidy data, a framework for problem-solving and writing R code for everything—from data wrangling and analysis to visualization and modeling.This course intro

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729) | 3h 18m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started in the R tidyverse](#getting-started-in-the-r-tidyverse)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Tidyverse Fundamentals**](#1-tidyverse-fundamentals) (12 videos)
  - [What is the tidyverse?](#what-is-the-tidyverse)
  - [Installing, loading, and working with the tidyverse packages](#installing-loading-and-working-with-the-tidyverse-packages)
  - [Introducing data.frame and tibbles](#introducing-dataframe-and-tibbles)
  - [What are %>% and |> for in the tidyverse](#what-are-and-for-in-the-tidyverse)
  - [Using the %>% pipe in your code](#using-the-pipe-in-your-code)
  - [Using the |> pipe in your code](#using-the-pipe-in-your-code)
  - [Datasets built into the tidyverse packages](#datasets-built-into-the-tidyverse-packages)
  - [Using the select() function to obtain columns from data](#using-the-select-function-to-obtain-columns-from-data)
  - [Using the filter() function to filter data by conditions](#using-the-filter-function-to-filter-data-by-conditions)
  - [Using the mutate() function to modify and add columns](#using-the-mutate-function-to-modify-and-add-columns)
  - [Challenge: Rewrite this code to use the pipe of your choice](#challenge-rewrite-this-code-to-use-the-pipe-of-your-choice)
  - [Solution: Rewrite this code to use the pipe of your choice](#solution-rewrite-this-code-to-use-the-pipe-of-your-choice)
- [**2. Tidy Data: The Fundamental Idea behind the Tidyverse**](#2-tidy-data-the-fundamental-idea-behind-the-tidyverse) (6 videos)
  - [What is tidy data?](#what-is-tidy-data)
  - [Why does ggplot2 want tidy data?](#why-does-ggplot2-want-tidy-data)
  - [Using pivot_longer() to tidy data into a long format](#using-pivot_longer-to-tidy-data-into-a-long-format)
  - [Cleaning column names with the janitor package](#cleaning-column-names-with-the-janitor-package)
  - [Tidying columns containing multiple values with separate_*()](#tidying-columns-containing-multiple-values-with-separate_)
  - [List columns and nested tibbles](#list-columns-and-nested-tibbles)
- [**3. Reading Data In and Out of the Tidyverse**](#3-reading-data-in-and-out-of-the-tidyverse) (4 videos)
  - [Using projects to simplify file paths](#using-projects-to-simplify-file-paths)
  - [Using read_csv() to read CSV files](#using-read_csv-to-read-csv-files)
  - [Using read_excel() to read data from Excel files](#using-read_excel-to-read-data-from-excel-files)
  - [Using haven to import from SPSS and other formats](#using-haven-to-import-from-spss-and-other-formats)
- [**4. Grouping and Summarizing Data with the Tidyverse**](#4-grouping-and-summarizing-data-with-the-tidyverse) (10 videos)
  - [Grouping and summarizing data by column or row](#grouping-and-summarizing-data-by-column-or-row)
  - [Cross tabulations with count()](#cross-tabulations-with-count)
  - [Column-wise groups: group_by() and mutate()](#column-wise-groups-group_by-and-mutate)
  - [Column-wise groups: group_by() and summarize()](#column-wise-groups-group_by-and-summarize)
  - [Column-wise groups: group_by() and reframe()](#column-wise-groups-group_by-and-reframe)
  - [Column-wise groups: Using the .by argument instead of group_by()](#column-wise-groups-using-the-by-argument-instead-of-group_by)
  - [Row-wise groups: rowwise() and c_across()](#row-wise-groups-rowwise-and-c_across)
  - [Remember to ungroup()](#remember-to-ungroup)
  - [Challenge: Find maximum penguin dimension by island](#challenge-find-maximum-penguin-dimension-by-island)
  - [Solution: Find maximum penguin dimension by island](#solution-find-maximum-penguin-dimension-by-island)
- [**5. Important Packages and Functions in the Tidyverse**](#5-important-packages-and-functions-in-the-tidyverse) (5 videos)
  - [ggplot2 for beautiful data storytelling](#ggplot2-for-beautiful-data-storytelling)
  - [stringr for friendly string manipulation](#stringr-for-friendly-string-manipulation)
  - [lubridate for manipulating dates and times](#lubridate-for-manipulating-dates-and-times)
  - [forcats for manipulating factors](#forcats-for-manipulating-factors)
  - [purrr for doing many things like iteration](#purrr-for-doing-many-things-like-iteration)
- [**6. Working Smart with the Tidyverse**](#6-working-smart-with-the-tidyverse) (8 videos)
  - [Handling NAs in the tidyverse with drop_na() and replace_na()](#handling-nas-in-the-tidyverse-with-drop_na-and-replace_na)
  - [Use case_when() instead of nested if or ifelse()](#use-case_when-instead-of-nested-if-or-ifelse)
  - [Use tidy-select functions to work with many columns at once](#use-tidy-select-functions-to-work-with-many-columns-at-once)
  - [Using across() in mutate() to modify multiple columns at once](#using-across-in-mutate-to-modify-multiple-columns-at-once)
  - [Filtering many columns at once with if_any() and if_all()](#filtering-many-columns-at-once-with-if_any-and-if_all)
  - [Understanding how the tidyverse evolves and deprecates](#understanding-how-the-tidyverse-evolves-and-deprecates)
  - [Challenge: Find all love songs remaining below position 80 in the top 10](#challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10)
  - [Solution: Find all love songs remaining below position 80 in the top 10](#solution-find-all-love-songs-remaining-below-position-80-in-the-top-10)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started in the R tidyverse](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=0)** - [Charlie] The Tidyverse is an incredibly powerful and flexible ecosystem of over 30 packages, designed to work together as a toolkit for every part of the data analysis workflow. In this course, I'm going to start by introducing everything you need to know about tidy data and I'll also introduce you to the nine core Tidyverse packages you need to get going. I'll then introduce specialized packages for working with strings, factors, and dates, as well as advanced Tidyverse topics, including nesting, targeting many columns with across and pivoting between column-wise and row-wise operations on your data. Hello, I'm Charlie, this course will give you everything you need to thrive with the Tidyverse, to feel confident and prepared for working with your real world data sets. Let's get started!

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [charlie] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] All of the exercise files and everything you need to follow along with this course are available in this [[GitHub]] repository. You do not need a GitHub account or any experience with [[Git]] or GitHub to use these materials effectively. If you go to the link that we'll provide you to the repository, you'll see this green Code button. I want you to click on that and I want you to select Download ZIP That's going to download the entire repository as a ZIP to your Downloads folder. Let's go and look in our Downloads folder. Here we have our ZIP. Let's unzip our ZIP. And within that folder, we can see many folders. There's a folder for every video that contains code. Let's say that you're watching video 02_04, and you want to see the code that I start with at the beginning of the video. You need to go to the folder 02_04b, and you want to open the R Studio project file. That's the file with the extension .Rproj. So if we double click on that file, that's going to open up R Studio, and we're in the project, and you can follow along with the video. In the course, I also explain what R Studio project files are for a little bit. Now, you'll also have noticed that there is a folder 02_04e. Let's look at that. The E folder represents the code at the end of the video, so if you weren't able to follow along typing with me
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=97)** during the video, then you can get the end state of the code in the E folder. The B folder is the code as it starts when I first share my screen showing code. That's everything you need to know. I hope you enjoy the course and using the exercise files. Thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (1)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **Env Vars:** zip (4)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), download the (1)
> **CLI Commands:** git (1), unzip (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Tidyverse Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the tidyverse?](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=0)** - [Instructor] The tidyverse is a collection of packages. What makes it special is how they're designed as an ecosystem for doing [[Data Science]]. The tidyverse packages are built to work consistently and in tandem with one another. The tidyverse provides a consistent workflow for working with your data. You'll reuse the same techniques again and again, independent of the exact structure of your data. By investing and learning how to use the tidyverse, you'll equip yourself to work with increasingly complex problems. For instance, your data might be split across multiple sources. You can use the same powerful [[Data Manipulation]] packages and functions to wrangle these data sets and then combine them together with the eponymous tidyr package. You may be familiar with the incredible ggplot2 package for creating truly beautiful and impactful data visualizations. It's also a first class member of the tidyverse. All of the fundamental principles behind the ecosystem mean that your wrangled data is ready to be visualized with ggplot2. Tidy data is the backbone of the tidyverse. It's this central tenant which provides the ecosystem with all of its flexibility, ability to scale for complex, multi-component problems, and to do so with reproducible workflows. However, there is some negativity around the idyverse, which is well summarized by how the official documentation describes itself.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=94)** For tidyverse is an opinionated framework. It requires you to approach problems from the tidy data perspective, and that means that slotting it to some [[Data Pipelines]] or methodologies requires a lot bit of extra work. But I cannot unsell how much data science value there is in the structured problem solving approach that tidyverse provides you. The tidyverse ecosystem has been extended by many packages, including tidygraph to support network analysis. You have excellent tools for time series [[Forecasting]] thanks to Fable and [[Text Mining]] capabilities thanks to tidytext. And finally, there's a fully featured machine learning framework from tidymodels that integrates with all of the skills you'll learn in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Data Manipulation]] (1), [[Data Pipelines]] (1), [[Forecasting]] (1), [[Text Mining]] (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Installing, loading, and working with the tidyverse packages](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=0)** - [Instructor] The tidyverse ecosystem is designed from the ground up for simplicity and consistency, including how you get the packages into your machine and load them into your R sessions. Let's look at how we would install the tidyverse in R by moving over to our project 01_01b. I have inside of the Files tab a script called ggplot2.R, and what I'm trying to do is replicate your situation. So you may have been running code already and you want to install the tidyverse. So I've got this code, I'm going to run it. To pretend I was working on this before, I wanted to install the tidyverse. So to install the tidyverse, I would come to the console and I would type install.packages tidyverse. And I get this warning about updating loaded packages. This is because I've already loaded ggplot2. And when we do install.packages, that's going to go and get the most up-to-date version of ggplot2. That's an issue. The best practice is to always restart your R session before installing new packages. Let me show you how to do that. So we'll click on Cancel. We'll go to Session in the menu bar and we'll select Restart R. We now have a completely fresh R session. Let's go to our console and type install.packages tidyverse. And when I hit Enter,
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=96)** it's going to go away to cron install all the packages that I don't have on my machine. And when you run it, it will install all the packages that you don't have. So I'll hit Enter. And I already have many of these packages installed, so it doesn't take that long for all of the remaining tidyverse packages to be installed. So the installation is finished when you get to this point here. So you have the prompt and the flashing cursor. It might take longer on your machine. Great. Now we've got these packages installed, let's talk about how we would use them. The tidyverse packages are split into two very distinct groups. There's the core tidyverse and there're specialized tidyverse packages. The core tidyverse packages are loaded all at the same time with library tidyverse, whereas the specialized packages need to be loaded individually. As we progress through the course, we'll get to grips with all of the core tidyverse packages and a fair few of the specialized ones. Don't worry if you are unfamiliar with most of these packages for the time being. So let's go over to [[RStudio]] and load our packages. In fact, let's change line one from library ggplot2 to library tidyverse. And when I run this, it's going to load the tidyverse and the tidyverse package, it's quite noisy. It likes to tell you which packages have been loaded. And so it says
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=188)** that it's attaching the core tidyverse packages and you can see those nine core tidyverse packages. Now, how about for other packages? readxl was one of those. readxl is a great package for reading in an [[Microsoft Excel|Excel]] file. To load that package, we would need to explicitly load it. So I would type library readxl, and run that code. And that's loaded the package. And now, in my autocompletion, if I type read_excel, we can see this function read_excel from the readxl package. Now that we understand the tidyverse's split into core and specialized packages and how to load those packages, it's important to know what does the core tidyverse give us? It's easiest to split the core packages into groups of packages. The first group, tibble, dplyr, and tidyr equip us with the high-level tools we need to wrangle, manipulate, and transform rectangular data. The second group, stringr, lubridate, and forcats are low-level tools that we can use alongside the first group of packages to clean, sanitize strings and dates, as well as manipulating the order of factor variables. The remaining packages kind of live on their own. readr gives us everything we need to read flat files, including .CSV files.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=282)** purrr provides a toolkit for [[Functional Programming]], which admittedly, many tidyverse users never need to use. And the final package, ggplot2, is a fully-featured package for data visualization and that is why the core tidyverse is so powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [[RStudio]] (1), [[Microsoft Excel|Excel]] (1), [[Functional Programming]] (1)
> **Prerequisites:** install (9)
> **UI Navigation:** go to (2), click on (1), in the menu (1)
> **Code Identifiers:** read_excel (2)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)
> **Best Practices:** best practice (1)
> **Warnings:** warning (1)

#### [Introducing data.frame and tibbles](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=0)** - [Instructor] We're starting this video in 01_03b and the data frame and tibbles to R script. It's more than likely that if you've used R before, you've come across iris, mtcars, and quakes. All three of these are examples of data.frame. Let's take iris. Let me run this object or print it. So, I'll put my cursor at the end of the object name and I'll hit Command + Enter or Ctrl + Enter in [[Windows]], and that prints the data frame to the console. Now, it's kind of annoying to work with. If I went to see the column names of this data frame, I will need to scroll all the way up through those 150 rows to find the names of the columns. And that gets to one of the benefits of tibbles over data.frame. But how do we know that these things are data frame? Well, we can use the function class. So, if I put class at the beginning of iris, an open bracket and an closed bracket here, and I run that, that tells me that we have a data frame. And that's true for all three of these datasets. data.frame has been fundamental to the popularity of R in the [[Data Science]] community. It is a huge setting feature of the language. There are some folks who use or began using R simply because of data.frame. And that's because most data sets
>
> **[1:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=92)** that we work with day-to-day are rectangular, they contain rows and columns. And base R has included data.frame for more than two decades. It's an excellent general purpose data structure for rectangular data. And data.frame has been a crucial component of the CRAN ecosystem of packages ever since. Now, let's get to tibble. The official documentation for the tibble package proposes tibble as a modern re-imagining of the data frame. But it's a lot less dramatic than that. And tibbles won't break your code. Instead, tibbles are designed to provide additional features and user-friendliness over data.frame. From our perspective, these are the three biggest differences or features of tibble compared to data frame, prettier printing, nested data, and grouped data. Tibble is an incredibly friendly [[Data Structures]] to work with in a console compared to data frame. I've used as_tibble to convert quakes from a data frame into a tibble, and I get a glanceable overview of the dataset. That means I don't need to scroll through 200 rows in the console. I think it's important you know why these two objects look different. It's because they have different print methods. And the tibble print method is console size-aware. Let's go over to our studio and see this in action.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=187)** To use tibble, we need to load for tidyverse and it's always best practice to load packages at the top of your script. So, if we go up here and we type library("tidyverse") and let's convert mtcars into a tibble. So, we'll use the function as_tibble, and that prints the object to the console. And we can see the really nice print method there showing the summary at the top, 32 rows and 11 columns. Now, I want to make my console quite narrow. And let's rerun that code on line six. And we can see that we get fewer columns printed in the summary. This is because the print method knows how wide a console is and chooses an appropriate number of columns to print. The remaining columns are summarized below. This is such a great, great feature of tibble. Now, there are many data sets built into the tidyverse that are already stored as tibbles. One of those is starwars. So, if I print the starwars data set to the console, it doesn't have very much room to breathe, so it's only showing the first four columns. Let me expand the console and run line eight once again. Now, I want to bring your attention
>
> **[4:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=281)** to those last three columns in the tibble, films, vehicles, and starships. Those columns aren't like the other ones. They're not like any columns that you see in a data.frame. Those are list columns. Let's break down what's happening inside of those columns. If we took the first four rows from a dataset for Luke, C-3PO, R2-D2, and Darth Vader, and we looked at the starships column, that list column, we can see that Luke has <chr (2)>, which tells us that there are two strings within that list column. There are two starships associated with Luke. There are zero starships associated with C-3PO or R2-D2. There's one ship that's associated with Darth Vader. So, if we were to unnest this dataset, we would only return three rows from the non-empty values in the list column. So, we'd get two values for Luke and one value for Darth Vader. In my experience, the majority of tidyverse users I work with don't make use of nested data and wouldn't particularly benefit from it. However, it unlocks completely new capabilities, particularly in modeling that are just not possible with base R's data.frame data structure. Now, I want to go back to our studio to talk about the final feature of tibble's grouped data, which is incredible and everyone I know who uses tibble's mix use of grouping.
>
> **[6:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=377)** Let's make my console a little bit more sensibly sized. And let's, for the last time, get the iris dataset. Now, the iris dataset contains information about several different species. Let's say that we wanted to summarize the sepal length, we wanted to find a maximum sepal length within each species. We would make use of the function group_by. So, if I group_by species, that's going to print to me the console, a tibble, which has the same summary as before, 150 rows and 5 columns, but are now has groups inserted. So, it's identified that there are three different values within species. Groups are amazing. You can create hierarchical groupings. So, we could group by multiple columns if we wanted to. So, if we thought back about the starwars dataset that has both home worlds and species, so we could group by both of those. But for iris, we've grouped by species alone. And then, what can we do with that? Well, we can summarize the data. So, let's summarize by creating a new column, max_sepal_length. And we'll use the function, max(Sepal.length) column. And when I run that, I get back a summarized tibble. So, the maximum sepal length for each of those species.
>
> **[7:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=473)** This is such an incredible feature of tibbles, which is just not possible with data.frame. Everyone I know that uses the tidyverse makes use of groups day-to-day in their code. So, to summarize, tibble is the extensions of the already incredible data.frame data structure. The three most prominent features that you'll use are the massively improved and console size-aware print method, nested data where you need it, and you will make use of group data almost every time that you use the tidyverse, and the reason you can is thanks to tibble.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [[Windows]] (1), [[Data Science]] (1), [[Data Structures]] (1)
> **CLI Commands:** make (5), find (2)
> **Code Identifiers:** as_tibble (2), group_by (2), max_sepal_length (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** cran (1)
> **Cross-References:** go back to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [What are %>% and |> for in the tidyverse](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=0)** - Code for working with data is very messy. Before we can do what we want to do with our data, we'll first need to clean, wrangle and reshape it a lot. If we break this down into tasks, it might feel like we need to do this, then that, another thing to clean the data, and then something else fancy before the final complicated step. What would that look like in normal R code? The answer is, it would look backwards. Traditionally written R code nests functions inside a one another. This can make code both hard to initially write and to read. It might be quite challenging to read somebody else's code and to understand what they were doing with their dataset. Oh, and did you notice which dataset we're working with? It's nested at the deepest point in the code. I've tried to use line breaking to make it a little bit clearer what's happening in the code, but you're more likely to come across nested code that looks like this, and that's where the pipe comes into play. The pipe allows us to write our code in the exact same order as the operations are performed. We even start by specifying which dataset we're using, so we know what our data task is from the beginning. There are two big things to keep in mind about pipes. The first is, verse syntactic sugar. They're designed to make code more convenient to write and easier to read.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=94)** It's okay if you don't really want to write your own code with pipes, but, and it's a big but, the tidyverse documentation and ecosystem is completely full of pipes. You need to have pipe fluency in order to read for documentation and truly learn to use the tidyverse effectively. Things change dramatically in 2021 with the release of R Version 4.1. R now has two pipes. I'm going to take a very short amount of time to explain why R needs two pipes, and then the two following videos we'll deep-dive into how to use each of the pipes. Mostly, it doesn't matter which pipe you prefer, and I don't personally have strong opinions on the subject. It's only really habit that keeps me using the pre-2021 pipe. The pipe that I use is a right angle bracket, nestled between two percentage symbols. It was first introduced in magrittr package back in 2014, and it became tremendously popular, eventually getting baked directly into the tidyverse. After loading the tidyverse package, you have access to this pipe. Base R finally got a pipe baked into it in 2021 from version 4.1, onwards. The pipe was added because of how popular the magrittr pipe was, even amongst our users who don't use tidyverse.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=189)** This means that you can use this pipe without loading any packages at all. Amusingly, the first character of the Base R pipe is also called pipe, and it's followed by a right angle bracket. You might need to search how to type this character on your own keyboard. So, since 2021, R has got two pipes. It's kind of a personal preference which one folks use, so it's important that you are comfortable with them both. And I've given you the basics you need to switch between them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Versions:** version 4 (2)
> **Definitions:** is a  (1), means that (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - code (1)

#### [Using the %>% pipe in your code](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=0)** - [Instructor] This video is about the pipe constructed from a right-angle bracket between two percentage symbols, more commonly known as the magrittr pipe. To use this pipe, you need to load a package containing the pipe, such as the Tidyverse. However, it's important to keep in mind that the magrittr pipe works with any function, not just those on the Tidyverse, and that's because the pipe works as syntactic sugar by rewriting your code. More technically, the pipe takes the left-hand side of itself and forces it into the first argument of the right-hand side of itself and runs the resultant code. Let's go over to project 01_06b to see this in action. My magrittr pipe to R script has got some code on lines 2 to 3 that uses a magrittr pipe. And if I run this code by putting my cursor at the end of the pipe chain and hitting Command + Enter or Control + Enter, we get an error, and the error is that R could not find the function %>%. That's because we haven't loaded a package that contains the magrittr pipe. Let's load the Tidyverse by going to the top of our script, typing out library, and loading the Tidyverse. And now I can put my cursor at the beginning of the pipe chain, and if I run the pipe chain, I get "Hello world" printed out five times
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=96)** as I would expect. Now, I want to do something a little bit more serious with the pipe. So let's summarize the msleep dataset. So I'm going to type msleep, and then I'm going to type out my pipe, %>%. I'll hit Enter. That's going to automatically indent my code. I'm going to type out count(conservation) and run the code. So that pipe has worked, but it was really frustrating having to type out that pipe letter by letter or character by character. So there is a keyboard shortcut for that. So if I type out msleep space, and then you use the keyboard shortcut Command + Shift + M or Control + Shift + M in [[Windows]], that's going to insert the pipe. And then we can put count and (vore) this time to summarize the data by vore. Now, we can combine together multiple pipes. So let's take this, and let's pipe it into the function arrange. So we'll arrange by descending n like that. Now, it's important to remember that the output of the pipe chain has only been printed over a console, so our results haven't been stored. If we wanted to store the results of a pipe chain, the easiest and most reliable way to do that is to create an assignment at the beginning. So let's call this vore_summary. We'll type out the assignment operator. We'll run that code.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=193)** And now we can see in our environment, we have vore_summary. That's everything you need to know about using the magrittr pipe in [[RStudio]]. But I want to give you some stylistic advice on using the pipe. This will help you when writing code and help others read your code, too. When pipes are combined together, we call them pipe chains. It's difficult to understand very long pipe chains. It's recommended to split your chains into short, meaningful blocks. A good rule of thumb is pipe chains should never have more than 15 pipes in them. Very realistically, you're unlikely to use more than around 10 pipes in a row. It's strongly recommended that you create a newly named object when your data changes fundamentally. In this fictionalized code, I've stored the contents of my file as raw_data and then cleaned the columns to create clean data. Your data might contain data for several time periods that need to be visualized or analyzed separately. It's a good idea to store filtered subsets of your data as separate objects, which I've done with data_2020s. I then wrangled the data and pivoted it into a tidy format. This would be a fundamental change to the structure of the data, so I created a new object, making clear the data has been pivoted. This is somewhat more of an art than a science.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=289)** The biggest takeaway from this advice is don't just pipe everything together. Take some time to think about how objects are named when you're using pipes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (2), [[Windows]] (1), [[RStudio]] (1)
> **Code Identifiers:** vore_summary (2), raw_data (1)
> **Best Practices:** recommended (2), rule of thumb (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using the |> pipe in your code](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=0)** - [Instructor] This video is about the pipe constructed from the pipe character, followed by a right angle bracket, more commonly known as the base R pipe. To use this pipe, you need to be using R version 4.1 or later. You can use this pipe with any function in R including functions from the tidyverse. The pipe is syntactic sugar for rewriting your code. The pipe takes the left-hand side of itself and forces it into the first argument of the right-hand side of itself and runs the resultant code. Let's go over to project 01_06b to see this in action. So I have my script base-r-pipe.R open, and I have some code. Hello World is being piped into rep five, and if I run this code by putting my cursor at the end of this pipe chain and hitting Command + Enter or Control + Enter in [[Windows]], that's going to run the code, and it works successfully without loading any packages because it's the base R pipe. It only works because I'm on a version of R that's after 4.1. How do you know which version of R you're on? You need to scroll to the top of a console when you open up [[RStudio]], and it will tell you what version number you're on. So I'm currently on version 4.3.1. Unfortunately, if you're using an older version of R, some folks work at organizations that are using older versions of R
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=93)** for security or other reasons, you will not be able to use the base R pipe. Instead though, you do have access to the tidyverse pipe, the magrittr pipe. So this is a very simple example of using the base R pipe. Let's use something a little bit more complicated. So let's load the tidyverse. So we'll do library tidyverse. And then what we want to do is we want to summarize the msleep dataset by conservation status. So I'm going to type a space, the pipe character, the right angle bracket, and hit Enter. That's going to automatically indent my code. And then let's type count and put conservation status. And that's going to summarize my data by conservation status. Now that was pretty annoying having to write out each individual character of the pipe. There's a keyboard shortcut for pipe in RStudio. So let me show you that. If I type msleep, space, and then I use Command + Shift + M or Control + Shift + M in Windows, that's going to insert a pipe character. Now the default behavior of RStudio is it will use the magrittr pipe. Let's swap that by going to Tools in the menu bar, Global Options, selecting code from the left vertical nav. And we want to click this checkbox here, Use native pipe operator there.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=187)** And then if we scroll down and hit OK, let's delete this magrittr pipe, and let's use that keyboard shortcut again. So that's Command + Shift + M or Control + Shift + M in Windows. And now we get the base R pipe. And let's summarize my data by vore, and let's pipe this again into a range. Perfect, in descending order of N. So that's summarizing the msleep dataset by vore and arranging in descending order. Now it's important to remember, all we've done with this pipe chain is output them link into the console. We haven't stored the results. If we wanted to store the results against an object, we wanted to make an assignment, the easiest, most flexible way to do that is to go to the beginning of the pipe chain. Let's call this vore_summary. We'll use the assignment operator, and then we will run that code, and we can see now in the environment, we've got that vore_summary object. So if you want to make an assignment of the result of your pipe chain, then you put your assignments at the beginning of the pipe chain to inform the code reader and yourself that you are going to create an object. That's everything you need to know about using the base R pipe in RStudio. But I want to give you some stylistic advice on using the pipe.
>
> **[4:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=281)** This will help you in writing code, and it will help others read your code more easily. When pipes are combined together, we call them pipe chains. It can be difficult to understand very long pipe chains. Please split your chains into short, meaningful blocks. A good rule of thumb is that pipe chains should never be more than 15 pipes in length. Though, realistically, you're unlikely to use more than 10 pipes in a row. It's strongly recommended that you create a newly named object when your data changes fundamentally. In this fictionalized code, I store the contents in my file as raw_data, and then clean the columns to create clean data. Your data might contain data for several time periods that need to be visualized or analyzed separately. It's a great idea to store filtered subsets of your data as separate objects, which I've done with data_2020s. I then wrangled the data and pivoted it into a tidy format. This would be a fundamental change to the structure of the data. So I created a new object, making clear the data has been pivoted. This is somewhat more of an art than a science. The biggest takeaway from this advice is don't just pipe everything together into one long pipe shape. Take some time to think about how objects are named
>
> **[6:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=374)** as you move through your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (4), [[Windows]] (3), cursor (1)
> **Versions:** version 4 (2), 4.1 (1), 3.1 (1)
> **UI Navigation:** in the menu (1), checkbox (1), scroll down (1), go to (1)
> **Code Identifiers:** vore_summary (2), raw_data (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is a  (1)
> **Best Practices:** rule of thumb (1), recommended (1)
> **Speakers:** - [instructor] (1)

#### [Datasets built into the tidyverse packages](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=0)** - [Instructor] In this course, we're going to depend a lot on dataset built into the tidyverse, so I want to make sure we're all on the same page. And as a bonus, you're going to learn about the vcdExtra package. So we're in project 01_07b and I'm in the tidyverse-datasets.r script and the dataset that we will use a lot because it's my favorite is msleep. Now if I run msleep, I'm going to get an error message, "Object msleep not found." And that's because it's from the tidyverse. Let's load the tidyverse. So when we run that, it's going to load the core tidyverse packages, including ggplot2, which contains msleep. So now if I run line four, I'm going to get that tibble printed to the console. But what other datasets are available in that package? Well, that brings me to the vcdExtra package. So if we load that package, and then I'm going to call the function datasets from vcdExtra, we can see in the order completion, and I'm going to give it the name of the package ggplot2. I'm going to run that. It's going to give me a tibble summarizing all of the datasets built into the package. But that's a dataframe, it's not very user friendly. So let's pipe that into as_tibble. And now we can see that there many datasets built in and we can see the titles of them.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=93)** How about all of the packages in the tidyverse? Well, what we need is we need the names of the packages to provide to the datasets function. And hopefully in the tidyverse package, there is an object tidyverse_packages, which is a vector of the package names in the tidyverse. So let's go and pipe that into the function datasets, oh, I forgot my brackets. And then pipe that into the function as_tibble, and that's going to give me a tibble that shows me all of the datasets built into the tidyverse. It's a little bit annoying looking at that in a console. So if you're not already aware, there's an excellent function built into R called view. The view function gives you an interactive view of a dataframe or of a tibble. So if I take this tibble and pipe it into view, it's going to give me a new tab which allows me to interactively explore all of the tibbles, the datasets across the tidyverse, and I could, for instance, filter for those datasets in the tidyr package. So that's all you need to know about the datasets built into the tidyverse. If you get the error object not found, it's because you've not loaded for tidyverse or the package that contains that object yet. And the vcdExtra package contains
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=187)** a really nice function datasets that will summarize all dataset objects from a package.

> [!info]- Semantic Content
>
> **Code Identifiers:** vcdextra (4), as_tibble (2), tidyverse_packages (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Using the select() function to obtain columns from data](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=0)** - [Instructor] Select() is one of the most useful and frequently-used functions on the dplyr package in the tidyverse. It's used for extracting or excluding columns from a dataset based on column names. Let's go over to project 01_08b to see it in action. I have a script in there, selecting-columns.R, And, at the top, we're going to load the tidyverse as per usual. And then, we've got a midwest dataset. Let me make my console a little bit bigger and print this object to the console. And so we can see that this is a tibble, it comes from the ggplot2 package, and it's got lots and lots of columns in here, and that's why I've chosen it. So I can demonstrate lots of the things that are possible with the select() function. So let's make my console a little bit smaller. Let's pipe out object midwest into the function select(). And let's say that I want the state and the county columns. That's going to print them out to my console. Now I can also refer to columns by their index. So if I copy and paste this code, and I could refer to column one and column two. If I run that code, I'm going to get PID and county. It's not recommended to refer to columns by their index in general, as column order might change unexpectedly. But if you need to refer to columns by their index, it is possible in select().
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=94)** How about if we wanted a range of columns? Well, that's also possible. So let me paste from my clipboard again. And let's say that I want from the column PID to the column poptotal. Notice that the auto-completion in [[RStudio]] auto-completes the column names in the dataset as well, which is a great feature of RStudio. Select poptotal and run that code, and that's going to give me all of the columns from PID through to poptotal. Now let's say that in addition to these columns, in addition to these fields, I also need any columns that contains a percentage, and in our column names, percentage is represented by perc. So we can make use of one of many tidy selection helpers inside of select(). So we'll go here and we're going to make use of the function contains(), and we'll provide the string "perc", perc for percent. And if I run that code, we're going to get back that first range of columns, PID through poptotal, and we'll get back all of the columns that contain perc as well. How about if I wanted the opposite of that? So how about if I wanted to remove the percentage columns? Well, we can make use of the !, which we read as bang. So this would be PID:poptotal, !contains. If I run that code, that's going to exclude any columns
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=189)** that contain percentage. Let's pipe this into select() again. And there are other tidy selection functions available to us. So let's make use of starts_with(), and let's select only those columns that start with pop. If I run that code, I get back those columns. So how do you know this as possible? Well, if we bring up the documentation for select(), it will show us we can use tidy selection helpers. We can bring the documentation up for a function in RStudio by selecting the name of the function, and pressing F1 on our keyboard. If I make this a little a bit bigger, then we can see there's a handy overview of all of the selection features available to us for tidy selection features. So it mentions the :, the ! for excluding, and it also shows us that we've got starts_with(), ends_with(), and contains(). And that is everything that you need to know about using select() to get the columns that are interesting or uninteresting out of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (3)
> **CLI Commands:** make (7)
> **Env Vars:** pid (5)
> **Code Identifiers:** starts_with (2), ends_with (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Using the filter() function to filter data by conditions](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=0)** - Filter is a crucial component of almost all tidyverse scripts and is part of a deepyr package. Filter is used to extract or exclude row from a data frame based on their values. Let's go over to project 0109B to get going with the function. In the filter to R script at the top, I'm going to load the tidyverse and we're going to start by applying some simple filters to the gss_cat dataset. And then when I finished explaining how to use the filter function in general, I'm going to show you my advanced filter example at the end that's currently on line 10 and 11. So let's get started with gss_cat and print it to the console. Going to make the console a little bit bigger. We can see we've got lots of columns there. And let's start by saying that the first filter that we are interested in is the age column. So let's pipe this object gss_cat into filter and let's say that we are interested in those individuals whose age is greater than or equal to 30. If I run the code, that's going to reduce the dataset to only look at those individuals who responded to the gss_cat survey when they were 30 or older. Let's add an additional condition to the R income column. So I only want to look at those R income values that include a dollar symbol in the text.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=98)** So we're going to make use of a function from the string R package for that. So I'll add an additional argument to filter and I'll use SDR detect on VR income field and I will search for the dollar symbol. But that doesn't quite look like it worked. Can you see on line two and three ,we've got the R income values not applicable? This is because the SDR detect function is using regular expressions and dollar has a specific meaning there. So when we're applying filters with filter and we're using string R functions, we need to be aware of regular expressions and symbols that have meaning. So instead of searching for this, let's search for the character dollar sign. And now if I run that code, we can see that we only have those values in our income that contain a dollar symbol. So we now only have data about those individuals where the income is known. Let's add an additional condition to the year column. Now I've got a choice here. I could either continue to add arguments to the filter function, or, if I wanted to, I could pipe my object into another call
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=193)** of the filter function and apply my condition here you have a choice. Do what makes sense to you. What you might want to do is you might want to group together filters that are doing the same kind of thing into one filter call and use a second filter call when you're applying another set of conditions. So let's say that I'm interested in values for 2005 to 2010. I could write some inequalities or I can make use of the really awesome between function from deepyr. So I'm interested in filtering for those values where year is between 2005 and 2010. Okay, and my final condition that I want to apply is I want to remove those records where TV hours is NA. NA and R is a special kind of entity. And so we need to treat it with the is.na function. So let's pipe this into another filter call and we'll use is.na on the TV hours column. And now we only have those, those where TV hours is na. If I wanted to negate that condition, I wanted the opposite, then I could use an exclamation mark here to mean not is.na. So if I run that code,
>
> **[4:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=284)** I get back all 2,196 individuals with an age of 30 or greater that income was known. The year they responded was between 2005 and 2010 inclusive, and TV hours is not NA. That's everything you need to know for basic usage of the filter verb. And we've seen how the tidyverse packages work together to make filtering easy. I think it's important you also know about if any and if all, but we'll look at them in detail again later in the course. Often, we'll want to apply the same filter condition to many columns. For instance, if the religion or denomination column contains the string, other. So in lines 14 through 15, I'm making use of the function, if any, to detect if religion or denomination passes this predicate test str_detect other. And I've now returned all 3,113 individuals where the religion or the denomination field contain other. So not both. If any of them contained it. I could swap this for if all, and I'll see that there are no individuals in the set where both religion and denomination is other.

> [!info]- Semantic Content
>
> **Code Identifiers:** gss_cat (4), str_detect (1)
> **CLI Commands:** make (4)
> **Env Vars:** sdr (2)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - filter (1)

#### [Using the mutate() function to modify and add columns](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=0)** - [Instructor] mutate() is your friend when it comes to wrangling data sets with a tidyverse and is from the dplyr package. mutate() allows us to modify existing columns or to create new columns in data.frame and tibble. Let's take a look at how to use the function in the 01_10b project. At the top of the script, we're loading the tidyverse as always, and then on lines 11 and 12, I've got an advanced option that I'll get to after the basics of using mutate(). So, we're going to be looking at the msleep dataset. Let's print that to the console and make the console a little bit bigger, and we can see that we've got many columns about sleep. What we don't have at the moment is we don't have a non-REM sleep column. So we have sleep_total, we have sleep_rem, but we don't have a non-REM sleep. So, let's create that new column with mutate(). We'll pipe our dataset and sleep into the mutate() function and we're going to create a new column, sleep_non_rem, and we'll calculate sleep_total. You can see that the autocompletion from [[RStudio]] is populated by the columns from our object, which is quite nice. So, we have sleep_total and we're going to subtract sleep_rem from that. And if we run that code, we're going to get our new column. If I make my console slightly less wide,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=93)** if I move it over here, then still it's not quite wide enough to see, so I will make it even wider. There we go. So we can see that the new column, sleep_not_rem gets added to the very right-hand side of our data frame by mutate(). Now, mutate() isn't just for creating new columns. We can modify existing columns. So, let's say that we wanted to change that column sleep_total to be a percentage of the day, so we'll take sleep_total and we'll divide it by 24, by the 24 hours in a day. And when we run that code, we can now see that the column sleep_total is a percentage or a fraction. But what if we wanted to apply that to all of the columns that contain sleep? That's advanced mutate() functionality that requires a cross, and I'm going to demonstrate that. But so far, we've seen what most, the majority of R users are using mutate() for, creating new columns and for modifying existing columns. So, let's get to that advanced example here. We've got a cross and within that, we're using the tidy selection function contains() to target all of the column names that contain sleep, and then we're dividing those columns by 24. And when I run this code, we can see that all of the columns with sleep total
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=188)** are now fractions. Notice that the column that we created, sleep_non_rem, isn't in there. This is, again, because we haven't created an assignment. So up here, I could call this msleep_processed, maybe, make my assignments, and then on line 13, I could swap msleep for msleep_processed. And if I make that even wider, then we can see all of the columns that contain the [[Microsoft Word|word]] sleep are now divided by 24. And that is everything that you need to know about using mutate() to modify existing columns in your tibbles and to create new ones as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** sleep_total (6), sleep_rem (2), sleep_non_rem (2), msleep_processed (2), sleep_not_rem (1)
> **CLI Commands:** make (5)
> **Env Vars:** rem (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Rewrite this code to use the pipe of your choice](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=5)** - [Instructor] This challenge is designed to test your knowledge of the tidyverse functions that we've introduced so far and your understanding of how to use the pipe. Please feel free to solve this challenge using either the magrittr pipe from the tidyverse or the base R pipe. Let's go over to the 01_11b project to see the code that you'll use in this challenge. I've used traditional notation to wrangle the msleep dataset. Let's take a look at what happens if I run the code. So if I select from lines one through to 17 and I run this code, it's going to load a tidyverse and it's going to wrangle the data, and I get back a subset of the msleep animals. I've got their conservation status, their name, sleep_total, sleep_rem, and I've got a new column which I calculated, sleep_total_perc. Now, this might feel like a lot of code. That's a consequence of the traditional R notation style. When we translate this into pipe code, it's much shorter. There are many fewer lines here. It looks like there's 10 plus lines, but there are fewer lines when we use the pipe notation. So, what I'm going to do is I'm going to tell you the steps that this code completes. So when you come to solve this challenge, you could either start with this code and rewrite this code as pipes, or take the description of the problem and convert that into code.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=100)** And then, you can see if you could do it the other way round as well. So, the steps that the wrangling should complete. The first steps are the code should start off by restricting which columns are being used. Then, you'll need to create a new column that calculates the percentage of the day that each animal spends asleep. Next, you'll need to exclude rows where conservation status and time in REM sleep are unknown, and also those animals that sleep 50% or more of the day. And finally, you'll need to reorder the rows of the table from most to least time in sleep. I'm biased, but I quite like this challenge. It should give you a fairly realistic example of things that you'll do with your own data sets and code that you might come across that's not written in pipes that you might want to translate to pipe, okay.

> [!info]- Semantic Content
>
> **Code Identifiers:** sleep_total (1), sleep_rem (1), sleep_total_perc (1)
> **Prerequisites:** you'll need (3)
> **Env Vars:** rem (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Rewrite this code to use the pipe of your choice](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=5)** - [Instructor] Okay, let's get started with solving this challenge. I'm in 09_12b and I've got my solution.R script up. And this is the same code as you had in your challenge script. So, I'm going to solve this the hard way. I'm going to translate the codes into pipe code. So I'm going to load the tidyverse, so that I have all of the functions and the pipe. And then, what I need to do is I need to find the most deeply nested part of the code, and that's this bit here. So, I can see here that I've got msleep. Let's copy this. Let's paste it down here. And actually, let's take msleep and let's put that here so that the dataset we're using is clear from the beginning. I'll use the keyboard shortcut to insert the pipe. I'm using the magrittr pipe, but feel free to use the base R pipe if you want to. Now, let's use the Delete key and then Enter to get the indentation right. We'll get rid of that comma that we don't need anymore, and we can put all of this on the same line. So, there we go. We've turned those several lines into two lines, and that's selecting out the columns that we're interested in. Okay, so then, we want to pipe, and the next part of our code, we can see up here, is mutate, so we'll use the function mutate(). And what we want to do
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=98)** is we want to create a new column, sleep_total_percentage, which is the sleep_total divided by 24. Let's go and grab that actually from here, pop that there, and there we've got that new column, sleep_total_perc, put at the far right-hand side of the dataset. That's what mutate() does by default. And then, the next thing that we're doing is we're filtering the dataset, so we'll add another pipe here. We'll call the function filter(). Let's copy my conditions. So, I'll copy those and put them there. I can run that code, and now I only have 27 rows. That's how many I expected to have. And then finally, I wanted to arrange the data in descending order with respect to that sleep_rem column. There we go. So, that is the solution to the challenge. And you can see that the pipe code is much shorter than the traditionally written, nested R code. It's also much clearer the order in which operations are being completed, because we start with our dataset, we select columns of interest, we mutate, we filter, and then we arrange. Whereas when we look at the challenge code, the first thing that we see is a range. And then, we need to scan to find out which data set it is that we're working with. So, hopefully you feel good after this challenge.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=192)** If you didn't quite get there, let's try again and I'll see you in the next chapter. Thank you, folks.

> [!info]- Semantic Content
>
> **Code Identifiers:** sleep_total_percentage (1), sleep_total (1), sleep_total_perc (1), sleep_rem (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Tidy Data: The Fundamental Idea behind the Tidyverse

[↑ Back to Table of Contents](#table-of-contents)

#### [What is tidy data?](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=0)** - [Instructor] So what is tidy data, and why is the tidyverse named after it? Understanding this is crucial to learning how to use the tidyverse for problem-solving. Tidy data has a very specific definition. Each column represents a single variable, and each row represents a single observation. Whereas untidy data has no sense to how it's organized. This is a screenshot of an [[Microsoft Excel|Excel]] file I made of data from the United Nations. Does this data feel tidy to you? It's not for two reasons. There is a unique column for each month, and there's nothing in the data to tell us what the values represent. This could be any variable. It could be GDP, millions of internet users, or even hectares of agricultural land per country. This is the same data tidied up. Each column represents a unique variable, country, year, month, and we now know that the values represent births per month. Now, how would we add deaths to this dataset? That's an interesting question. When we talk about tidy data in the tidyverse, we also talk about data being wide or long. It's not a simple one-to-one relationship between untidy and wide. If I described a dataset as being wide, I'd often be talking about a dataset
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=93)** that is in many ways quite tidy, but there are a few columns that could be made tidier. In our example, I've added a new column called deaths, which has added some width to the dataset. The theoretical tidy data representation of this dataset would collapse the birth and death columns into a new column to record which UN measure each value represented. Admittedly, when we're working with just two variables, this doesn't feel like a big difference. But if I add 10 variables, it would be very clear that the first approach creates wide data, and the second creates long data. The tidyverse is fully equipped to transform your data between wide and long formats through the pivoting functions. So that's tidy data. Why is it useful? This beautiful cartoon from Allison Horst explains it. Tidy datasets all look alike and are fairly literate, whereas messy or wide datasets are all messy or wide in different unique ways. In our example, we didn't know our data was about births in the initial wide representation. Tidying data forces us to sensibly name our variables and have them structured, ready for wrangling, visualizing, or modeling with the tidyverse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** gdp (1)
> **Speakers:** - [instructor] (1)

#### [Why does ggplot2 want tidy data?](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=0)** - [Instructor] I want you to understand fundamentally why ggplot2 depends on long data. And to do that, we're going to be in project 02_02b. If you've not used ggplot2 much before, that's okay. I recommend watching this video to better understand tidy data and watching one [[LinkedIn]] Learnings dedicated videos to ggplot2 later. So let's load the tidyverse on line one, and we're going to read two data sets, UN data long and UN data wide. Then on line 10 through 14, I've got a skeleton of a ggplot2 chart, which has got a fairly nicely formatted X-axis. So I need to add a Y-axis, which means I need to choose which column for my data set to use for the Y aesthetic. So let's print UN data wide to the console and we can see that this data is wide with respect to births and deaths. So we have a separate column for birth and death data. So the only way for me to visualize this is for me to add geom line. I'll add a plus at the end here. I'll go back inside of geom line and add aes and Y is equal to births. Now this chart looks weird. The value appears to be going up and down each month. That's because we've got multiple countries worth of data in our datasets and that data's long. So in the country column we've got multiple countries.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=95)** So let's go into geom line and inside of aes and we'll add color is equal to country. And now we get a separate line for both the countries, Australian France in this dataset. But how would I go around adding the death data to this chart? I would need to add another geom line call. So if I select this code and I copy it and I paste it and I replace births with deaths, I'm now visualizing both the birth and death data for both countries. But this isn't what ggplot2 was designed for. It's going to be really painful to label these lines. Ggplot2 wants tidy data. So let's look at the code that we have on lines 24 through 28. So we have our chart set up again with our X-axis. Let's look at the data and we can see that we have our values stored in the value column and the name of our metric of our measure in the name column. So let's go into aes here and we can set a ggplot2 level aesthetic instead of a geom specific aesthetic because of tidy data. So I'll set Y is equal to value and we'll set color is equal to name. So that's got my Y aesthetic added into my charts.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=193)** Now let's add geom line, which is going to make use of those aesthetics. And we now have a separate line for births and deaths. The chart looks weird again. We're going up and down each month, and that's because of the longness of the country column. So we can make use of another excellent tool of ggplot2 and that's faceting. So let's add facet wrap and we'll wrap by country. And now we have a pretty good looking chart. We can compare our different countries and the birth and death rates for those countries. This isn't specific to just geom line, I could say, okay, I want an area chart. So I'll swap this for area and I'll swap color for fill. And now I get a stacked area charts. Ggplot2 is an incredibly powerful toolkit for building charts because it's designed around tidy data and therefore fits really neatly in a Tidyverse workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using pivot_longer() to tidy data into a long format](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=0)** - For Tidyverse contains a pair functions that work in tandem for pivoting data between wide and long format, pivot_longer and pivot_wider. It's important to note that before 2020, these processes were achieved with a pair of functions called gather() and spread(). It's becoming less and less common to see those functions gather() and spread() in the wild, and that's because the new pivot functions are more powerful and come with lots of features that just weren't available in these old deprecated functions. So I'm going to demonstrate how to use pivot_longer as it's the most complex and the most useful function of the two. And then at the end of this video, I'll quickly demonstrate, pivot_wider to undo all of our work, making our data longer. So let's go over to project O2_O3B to see this in action. Okay, the top of the script, let's load the Tidyverse and let's read in my dataset UN data. Let's take UN data, let's print it to the console. And we can see that we've got four columns containing birth data for different countries. So this data is wide with respect to these columns. Let's make it longer with pivot_longer. And what we need to do in the first argument to pivot longer is specify the columns that need to be made long. And we can do that with any tidy selection function.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=94)** So let's to begin with, say I want births_australia is to birth_sweden, which I do with a colon, and that's going to pull all of those four columns together into two new columns, name and value. Now we might want to do this with a different tidy selection function. Maybe not all of our columns are after one another. They're not continuous in the dataset. So let's swap this for contains("births"). And so we get the same output as before, but our tidy selection is a little bit more explicit. Now those new columns that were created are named name and value, but we can change that within the pivot_longer function. So let's add names to country and let's set values to births. And if we run that, we can see that those two columns, country and births get renamed. Well they were previously name and value. They are now country and births. That country column though, it contained births_australia, instead of the actual name of the country, pivot_longer allows us to get rid of that through the names_prefix argument. So if I use names_prefix, and I type here the string that we want to remove the prefixing string from the named columns.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=189)** And if we run that, we now get a really nicely formatted long dataset. Let's store this as un_long. And we can now throw this into our GG plot two charts to make a nice chart of our long dataset and we're done. That's how Pivot Longing can be used to pivot real world dataset from wide to long format. There are even more advanced things that you can do, if your column names contain multiple variables, which they will in real data sets. There are really good examples of how to do that in the documentation. But let's finish off by using pivot_wider to undo all of our work. So let's get un_long. We'll pipe this into pivot_wider. We need to specify which columns and names come from. So names come from country, our values come from births, and if we run that code, we can see now that we have the wide version of our data. And that is the full cycle between pivot_longer and pivot_wider.

> [!info]- Semantic Content
>
> **Code Identifiers:** pivot_longer (6), pivot_wider (5), births_australia (2), names_prefix (2), un_long (2)
> **CLI Commands:** make (2)
> **Env Vars:** o2_o3b (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - for (1)

#### [Cleaning column names with the janitor package](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=0)** - [Instructor] I need to show you both an annoying real world problem and a solution to that in the same video. To do so, we are in 0204B, and we're taking a look at the clean names.r script. Let's load the tidyverse on line one and we'll read in our dataset on line three. And let's print that dataset to the console. I want to take a look at those column names, and those are some pretty messy column names. We've got spaces in them, we've got inconsistent capitalization, and this column here, source year one, we've got brackets in it as well. It would be really frustrating to work with these columns as they are. So if I were to pipe UN data into select and I wanted that country or area column, I would need to type back ticks. So I would need to write country, or area, and select the column like that because of the spaces in the column names. So there's a package that can help with this called janitor. Janitor isn't in the tidyverse, so we need to install it separately. And remember my general advice, when we're installing packages, restart your R session. So let's do session, restart R. Let's go and do install dot packages janitor. And then we will change our script by loading janitor. Here I'll run line one, two and three.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=100)** And now let's strip off that pipe for the time being. And let's get UN data. We've got those messy columns. Notice here those brackets around the one. And we're going to pipe the dataset into the function clean names from janitor. And now look at those column names. They are so much tidier. There's consistent capitalization. Everything is lowercase. That first column, country or area, has underscores instead of spaces. And that source year one column, those brackets have gone away. So clean names in the janitor package standardizes the capitalization, it uses snake case to remove spaces, and it removes non alphanumeric characters. But that source year one column, it's still a little bit annoying to work with. So we're going to make use of another function from the tidyverse. So we're going to make use of rename. So rename. Source year is going to be the new name of our column. And then source year one is the old name. If I run that code and look at my column names, we can see that we've got nice clean column names ready for wrangling, visualizing, or modeling our data. Janitor is such an incredible valuable tool for when you're working with real world data sets. Rename will allow you to rename individual columns, and if you need to do complex renaming,
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=196)** then the rename wave function from dplyr will help you out.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** install (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Tidying columns containing multiple values with separate_*()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=0)** - [Instructor] Let's take a look at a slightly more unusual and uncommon type of untidy data that you might come across. This table contains information about the devices that customers have insured and it's untidy in two ways. The address column contains multiple variables, the city and country the customer lives in. In a realistic data set, there might be even more information here, including street address and zip code. For devices insured column is different. Instead of multiple variables, there are multiple values for the device insured variable. Let's take a theoretical look at how we tidy these columns and then write the R code to tidy the actual data. If we wanted to convert the location column into tidy data, we need to make the data wider with the separate wider functions. I've color coded each of the customers so we can see those customers as we move from the untidy data to the tidy representation. Whereas to make the devices insured column tidy, we need to make the data longer with the separate longer functions. This process will be particularly relevant for you if you are working with survey data with multiple choice questions, but though of the situations that you might find yourself in when you come across
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=94)** similarly formatted data. Now I've demonstrated why these functions are valuable. Let's use them with some data. So I'm in the O2_05b project with the separate.r script open. I'm going to load vital Tidyverse line 1 and read in my data about customers on line 3. And let's print that object to the console data customers. And it looks exactly like that data set that we just saw in my slides. So we've got location as a column that needs to be made wider and devices as a column that needs to be made longer. So let's pipe data customers into separate wider. And we can see that there are several different separate wider functions, we want to separate by a delimiter. So in our location column, the city and the country are deliminated by a comma. So let's use separate wider dilemma. We need to specify in the first argument which column we are going to split or separate. And then we need to specify add delimination. So let's put a comma and then we need to name the new columns that come as a result of separating our location column. So let's name these as city and country.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=188)** Now let's take a look at that output in the console. That country column doesn't just contain the country. It contains a space before the country name, and it's going back up. We can see why that is. So location column has both a comma and a space deliminating the city and the country. So for this specific example, a delimination should be a comma and a space. Now I can see where we have nicely formatted city and country columns. So we finished making the location column tidy by making it wider, we need to, well, what I want to do now is I want to take that devices column and make it tidy by making it longer. So we'll pipe our object into separate longer. And here we only have two choices. Delim or position. We want to go with delim once again. We're going to specify our column name. So that's devices. And we want to specify our deliminator. And in this case, our deliminator is a semicolon without a space. So if I run that code, we can now see that that customer, customer one in Columbia, has both a games console and a tablet. Nice, we now have a completely tidy dataset with each field corresponding to a unique variable thanks to the two separate functions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [List columns and nested tibbles](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=0)** - [Instructor] We need to talk about Star Wars or more specifically the Star Wars dataset and the tidyverse. I'm in O206B in the list columns and nesting.r script. We're going to load the tidyverse, we'll load Gapminder as well. We're going to use Gapminder for an advanced example of lists, columns, and nesting in a few minutes. But let's start with this Star Wars dataset. I'm going to make my console very wide before I print it to the console. And I'll make my console a little bit bigger. And here we can see on the far right-hand side of a dataset, we have these list columns. We know they're list columns because it says that they're list underneath the column names. But we can also select those list columns, using the select function and a tidy selection helper, where. So we can use the tidy selection helper where, and we'll use the predicate function, is list, and that's going to return us just the list columns. It's not too helpful. So let's also return the name as well. So we've got the names of characters, the films and the vehicles and the star ships they're associated with. Let's say that we wanted to know how many films each character appeared in, according to this dataset, at least. Well, we could use mutate. Mutate is how we create new columns. So we'll use mutate
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=94)** and new column is going to be called n_films. And we're going to make use of the function lengths to tell us the lengths of the lists within films. And that's going to give us that Luke Skywalker appeared in five films and C3PO appeared in six. Again according to this dataset. So this data is nested. How about if we wanted to extract out all of the vehicles associated with these characters? Well we would need to make use of a nest. So let's pipe this dataset into a nest and will un-nest the vehicles column. And that's going to un-nest that from a list column into a nice long, formatted column. So we can see that Luke is associated with a snow speeder and an imperial speeder bike, in this data set. List columns definitely fall into a slightly more advanced part of the tidyverse. But it's really important you know they exist in case you come across them, particularly as they're widely used in the Star Wars example dataset. But there's some really advanced things that we can do with nesting. And list columns are one example of nested columns. We can have other nested columns including tables. So on lines 15 through 17, I'm summarizing the Gapminder data set by continent and calculating the mean life expectancy per continent. So if I print the object of a console,
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=189)** we can see the data is grouped by continent and we've got a mean life expectancy, per year, per continent. Now what we can do is we can nest this data. So nesting pulls in multiple columns into one column, and we can see that our new data column is a list column, and within that list are tables. That's really useful if we wanted to generate many models. So if we wanted to generate a model for the life expectancy for each of these continents, nested data helps us. So I have some code here which is, which is fairly long, so lines 28 through 34. What that does is it generates me many models. So if I print this object for a console, we can see that for Africa, I've got a list column data, which contains my table, that's the original data, and there's a new list column model life expectancy, which contains the linear model object. We can now take this model data, which is nested, we can pipe it into the code on lines 36 through 47. That's going to extract out predictions for my model. It's then going to pivot that into a longer format and eventually generate this ggplot2 chart here. That allows me to compare the mean life expectancy per continent with my prediction for my linear model.
>
> **[4:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=285)** This is all thanks to nested data inside of tables. This is definitely on the advanced side of things, but it's so useful if you want to do many things within amalgamations of your data to nest it like this.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Env Vars:** o206b (1), c3po (1)
> **Code Identifiers:** n_films (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Reading Data In and Out of the Tidyverse

[↑ Back to Table of Contents](#table-of-contents)

#### [Using projects to simplify file paths](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=0)** - [Instructor] If you've not written much R code before, you may not have met the setwd function. I'm here to tell you, it is not your friend. And if you have used the function before, I'm also here to tell you setwd is not your friend. In this video, we need to write code that's going to read in this data file from the project directory 03_01b. Let's try and do that by opening up [[RStudio]] and not an RStudio project. What many our users will do is write setwd at the top and then they to find the directory that contains the the files that they want to read in. So I'm going to use the Tab key to get autocompletion of my file directory. I'm going to go inside of documents, inside of [[GitHub]] and use my Tab key for autocompletion after each slash and I'm going to go to learning-the-r-tidyverse, then I'm going to go to /03_01b, and then I'll press Tab one more time and press data. And then if I were to run this code, it would set my working directory to this directory. We have an immediate problem. Your file path is almost guaranteed to not look the same as mine, which means if I were to save this code into the project files and for you to download it, you couldn't without modifying the path. And that is the drawback of using setwd.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=97)** It makes your code non-reproducible because it requires manual tinkering of your code to work. So instead, we recommend using RStudio projects. And what we're going to do is we are going to turn the folder 03_01b into an RStudio project. So to do that, we need a project menu. And the project menu is up here in the top right-hand corner of RStudio. We can see currently we are not in a project. It says Project None. If I click on this pull-down list, you can see I've been recording the other videos in this course, so all of the projects that I've accessed most recently are available to me. But what we want to do is create a new project. So let's select New Project. We don't need to save this script file because there's nothing in it a value. There's only the setwd function and it's no longer our friend. So we'll press Don't Save. And then what RStudio gives us is a little wizard. It asks us, do we want to create a project from a new directory, in the existing directory, or [[Version Control]]? And for this example, we are going to use the folder that you downloaded 03_01b. So we'll choose existing directory and then what we need to do is browse to that folder. So let's browse. I need to go inside of my documents, inside of GitHub. Then I need to go inside of this folder here.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=192)** And this is my project directory. So I'm going to select that folder, click Open and hit Create Project. What that's going to do is it's going to create a little file inside of that folder with the extension .Rproj, which you can see in the Files tab. So there's a new file in there named after the folder 03_01b.Rproj. That's the RStudio project file. So that was created when we clicked Create Project, and it also opened that project, which we can see in the top right-hand corner of RStudio where it says 03_01b. Great, let's create a new script file. So I'm going to go to File, New File, R Script. And instead of starting my script with setwd, I'm going to load the tidyverse. And I'm going to use the function read_csv. And I want to read in my data file. When I hit Tab, the file path autocompletion starts from the RStudio project directory. So now, I can use my Down arrow key to go down to my un_data.csv file, hit Enter. And when I run that code, it's going to read in that data file. And if I saved this and I made it available to you, you could run this code without having to manually set the arguments that you provide to setwd.
>
> **[4:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=286)** So I hope that's persuaded you why setwd isn't your friend, and why RStudio projects provide you a more reproducible approach to code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (10), [[GitHub]] (2), [[Version Control]] (1)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** read_csv (1), un_data (1)
> **Tools:** github (2)
> **File Paths:** un_data.csv (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using read_csv() to read CSV files](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=0)** - [Instructor] If you want to read CSV files into R, then readr and its function read_csv() is your friend, and it's much better than read.csv(). Let's jump into project 03_02b and see two very practical examples of why read_csv() is preferable to read.csv(). So let's start by loading the tidyverse on line one, and we'll read in our data file, sample-data.csv, using read.csv(), and we'll assign that to the object data_baser. Let's print that object to the console. We can see it's a data frame because base R only creates data frame and not tables. That's okay. Let's leave it as a data frame for now. I want you to notice how sex for the third row is empty. Let's compare that with the table produced by read_csv(). So I'll run the code on line six, and I'll print that object to the console. And we can see this is a table, read_csv()-generated table instead of a data frame, but line three, the sex is no longer blank. Instead, it contains an NA value. That's important when we start to wrangle and understand the data. Let's say I wanted to exclude rows when sex was unknown. That's achieved with the filter() function.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=94)** So let's get data_baser. Pipe it into the function filter(). And we'll use the function is.na() on sex to return only those rows where the sex is NA. There are no rows where sex is NA in that dataset because of how read.csv() works. However, let me copy and paste this code and replace data_baser with data_readr. That is going to return me that single row which does contain an NA value. So what's going on? read_csv() is designed to automatically make intelligent decisions about how to handle missing data and lots of other important data-parsing decisions. There's also so much flexibility in the function to correctly import your data. The read.csv() function has some flexibility. For instance, there is an na.strings argument, but it's more manual and less advanced. The second benefit of read_csv() comes from its speed compared to read.csv(). Because read.csv() is built on base R, it's limited in what it can depend on, whereas read_csv() sits on top of highly optimized packages for quickly reading in large datasets.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=188)** I've a small example of this back in our project. I've included a dataset that's 41 megabytes and includes 170,000 rows. That's a fairly middling size dataset. We need a way to measure how fast R does something. I'm going to make use of the lovely tictoc package. I'll load the package on line 16, and then we create a timer with tic(), and we give it a label. So we're going to give it a label ("How long to wait?"), and then toc() ends the time and prints how long it took for that code to run. So I'll select lines 18 through 20. I'll run that code. Sys.sleep() sleeps for 1.5 seconds, and it took 1.504 seconds for this code to run. Let's compare read.csv() and read_csv() with tictoc. So let's run line 25 through 27 using read.csv(). And it took 0.925 seconds, so almost a second to read in the data file. And then if we use read_csv() from the readr package, that ran much more quickly. So that took 0.256 seconds. That took almost a quarter amount of time as it took with the base R function. So that's why I recommend using readr's function read_csv().
>
> **[4:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=284)** It's intelligent, highly customizable, and faster than the base R function read.csv().

> [!info]- Semantic Content
>
> **Code Identifiers:** read_csv (10), data_baser (3), data_readr (1)
> **File Paths:** read.csv (10), sample-data.csv (1)
> **Versions:** 1.5 (1), 1.504 (1), 0.925 (1), 0.256 (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** csv (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Using read_excel() to read data from Excel files](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=0)** - [Instructor] I've got more good news. If your data is stored in [[Microsoft Excel|Excel]] files, then the readxl package from the tidyverse is your friend. Let's see how to use it in the 03_03b project. I'm here in the read-excel-data.R script and I'm going to load the tidyverse, the core tidyverse. And let's just once come back to the console output. And we can see there that readr is loaded as part of a core tidyverse, but readxl isn't. It's a specialized package, so we need to load it explicitly. So let's do that, library('readxl'). And then, what I'm going to do is I'm going to use read_excel And we can see we have this function loaded from the read_excel package. We're going to open a quotation and we'll use the Tab key to get the file path autocompletion, and we'll use the Down Arrow key to go to our Excel file. And we'll run that code and that's going to import my data. But a good question is, which sheet in my data is imported? Well, there's a function inside of the readxl package which comes to our aid here. excel_sheets will tell us what sheets exist inside of our file, so let's use a quotation, the Tab key, and get our file path again. And if we run that, we can see that there are two sheets in here,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=93)** animal data and un data. So, how would we go about importing in a specific sheet? Well, I used the same thing in the first argument, the file path to the sheet. And then the second argument, I'll use the named argument sheet and we'll put "un data" and that's going to import that sheet from the Excel workbook. And that's everything you need to know to start wrangling your Excel files with the tidyverse. There is some customizability to the function that you can find in the documentation. If your data is in Excel files, readxl really is your friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6)
> **Code Identifiers:** read_excel (2), excel_sheets (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Using haven to import from SPSS and other formats](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=0)** - [Instructor] Let's finish this chapter on reading data into the tidyverse by introducing the excellent Haven package. This package is going to be your friend if you are working with data that's in SPSS, SAS or [[Stata]] data files. The process is almost exactly the same for all file types, so we'll look at SPSS as it's a lot bit more common than the other two. Let's do that in project O3_04b. So inside of this project we have a script called SPSS data. At the top we're going to load the core tidyverse and the specialized tidyverse package, Haven. And we're going to work with a dataset I've pre downloaded from this DOI. So line six, we're going to use read_SPSS to read in our .sav data file and let's print this data file to the console. So I want to make this a little bit wider because I want to look at the marital column as well as other columns. So let me print that again and here, can you see how many of the columns here have a strange type? So the ID column is DBL for double, for numeric, but a Work Stat column, that's double plus LBL, and that's true for marital as well. So we've got many, many columns. The majority of columns in this dataset in fact, are labeled. Let's take a look at that Marital column in more detail.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=98)** So we'll pipe survey data into select and let's select that Marital column. So we have in here a column that contains the numeric values one through five, but those values have got labels. In the original question in the survey, most SPSS data comes from surveys. The option three was labeled divorced. And what we need is we need a way to be able to convert this from a labeled double vector into a factor so that we can visualize the data with ggplot2. So let's pipe our table into the function mutate, so that we can modify that Marital column. And we're going to make use of the function as_factor. Notice that there is an as_factor function and an as.factor function. We need as_factor from the Haven package, as it's designed to work with labeled vectors. We'll give it the column, Marital, make my console slightly less wide, and let's run that code. And now we can see that we get a factor column. Those labels have disappeared and we have a column that we can use in our normal [[Data Wrangling]] within the tidyverse. And we could visualize this column easily with ggplot2.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=194)** Now I'm going to move on to a little bit more advanced working with SPSS data files. I mentioned that most data that you'll work with from SPSS, comes from survey data, and stored within the .sav file, is the original question text. And I've provided you this little code snippet that's going to pull out the question label and the col_name from your data. So if I run this code, we can see that col_name year has the question label, year of survey, and the work stack column has the question, "Last week were you working full-time, part-time, going to school, keeping house, or what? That's really useful when you're working with survey data and you want the labels to the questions. Now another thing that you might want to do, is to convert all of the labeled columns into factors. Here I've provided you code that I cover later in the course that uses a cross within mutate to target all columns that pass the tidy selection test is.labeled. So if I run for code on line 23 through 25, we can see that my output table now has all of these columns as FCT as they were previously labeled. And that is everything you need to know how to use the Haven package to read in your SPSS data files.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=290)** And you can use this same process to work with SAS and Stata data files, too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stata]] (2), [[Data Wrangling]] (1)
> **Env Vars:** spss (7), sas (2), doi (1), dbl (1), lbl (1)
> **Code Identifiers:** as_factor (3), col_name (2)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Grouping and Summarizing Data with the Tidyverse

[↑ Back to Table of Contents](#table-of-contents)

#### [Grouping and summarizing data by column or row](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=0)** - [Instructor] Grouping and summarizing data are closely related activities, particularly in a tidyverse. We'll get extremely different summaries and groupings when we switch between grouping our data by row or column. To compare the differences between column and row grouping, I'm going to use two data sets in this course, the "Star Wars" dataset and a tibble containing exam results for several students. Our "Star Wars" data is in long format. Any kind of summary that we'd want to make would be column-wise. For instance, we might want to count the total number of characters by home world, or we might want the height of the tallest character from each home world, or potentially from each combination of home world and species. Column-wise grouping is the most common type of grouping that you'll use with your data, and it's for default. But sometimes we care about row-wise grouping. Our exams data has been stored in a slightly wide format, which can be really useful. By grouping the data row-wise, I could answer interesting questions such as what was the lowest score achieved each year, or the average score per year per student. Let's get back to comparing column-wise and row-wise groups side by side. For tidyverse defaults to column-wise operations, we can create quick columnar cross-tabulations with count, and we can insert our own columnar groups into our data
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=95)** with the group_by function or the .by argument. And then once you've inserted your groups, you have three very different wrangling functions to use. Mutate, summarize, and reframe. In comparison, the only way to group data by row is to use the rowwise function in place of group_by. It's much less common, but very, very powerful. The last thing to mention before we start grouping and summarizing our data is you need to be careful. If you don't explicitly use the ungroup function, then your data might still be grouped, and that could cause issues. It's best practice to use ungroup as soon as you're finished with your groups and move on to the next part of your [[Data Wrangling]] journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Wrangling]] (1)
> **Code Identifiers:** group_by (2)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Warnings:** be careful (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Cross tabulations with count()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=0)** - [Instructor] This video is about count, a function from dplyr that I love. It's one of my first functions that I use when I'm trying to understand a new dataset. Let's see how to use it in the 04_02b project. So in the count.r script, we're loading the tidyverse on line one as per usual. And then we're dealing with a new dataset here, billboard. billboard contains the songs that enter the Billboard Top 100 through the year 2000. Let's print it to the console and we can see that we've got the artist, the track title, and the date for the song entered for Top 100. Let's count how many times each artist appeared in the dataset by piping billboard into count and we'll count by artist. So we can see there are 228 unique artists in the dataset and we can see that most of them only appeared once. How about if we wanted to order this dataset for most common artists to least common artists? We can make use of the argument sort in count. So let's add sort is equal to TRUE. So we can see that Jay-Z is the most common artist in this dataset. One of the great things about count is that we can do cross-tabulations. We can count by multiple columns. So let me show that by copying this code, let's paste it,
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=94)** and I'm now interested to see did any artist have more than one song appear in the Top 100 in the same week? So I'm going to add date.entered, and I can see there are two artists, Whitney Houston and Limp Bizkit, that had two songs enter the Top 100 in the same week, which is great, but count froze throws away. What about if we wanted to just add a count column to our data? Well, we can do that too with the function add count. So let's get billboard. Let's use select to select just for columns artist through date.entered. So that's going to return us these three columns here and notice there are 317 rows in the data and let's pipe that into the function add_count and we're going to count how many times the artist appeared in the dataset, so the column that we'll specify is artist. And then the name argument allows us to name the count column, so as the default value N, but we're going to give it the Value times_artist_in_top_100. And when we run that,
>
> **[3:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=186)** we get this new column times_artist_in_top_100. That's everything I wanted to show you about count and its sibling add_count. I think they're really useful when you're starting to get to grips with a new dataset.

> [!info]- Semantic Content
>
> **Code Identifiers:** add_count (2)
> **CLI Commands:** make (1)
> **Env Vars:** true (1)
> **Speakers:** - [instructor] (1)

#### [Column-wise groups: group_by() and mutate()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=0)** - [Instructor] We've just met the count function for cross tabulation, but a much more general tool is to combine together, group_by, and mutate for column wise grouping and summarizing of data. Let's look at how we use these two functions together in the 04_03b project. In the mutate.R script, we're going to load the tidyverse on line one, and we've got a little bit of code here, which is selecting some columns of interest from the Star Wars dataset, name, homeworld, species, and we're getting back the numeric columns as well. How about we were interested in the character from each homeworld that was born earliest in the time period of the movies. Well, we could pipe this into the function group_by to group the data by homeworld so that our new take calculations are going to be performed within groups. So if we group_by homeworld, our table tells us it's now grouped, so we can see groups homeworld 49, the 49 unique homeworlds in the dataset. And then we're going to pipe this into mutate. We'll create a new column here called earliest_birth_year,
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=83)** and we'll use the function min on birth_year and let's run that code. Now most of those values are NA. Do you know why? in Base R, most of the stats functions are designed to return NA values if they see any NA values in a vector. We can change that, so if we go into the min function, and we add na.rm = TRUE. That's going to ignore any NA values. So if we're looking at the data, we can see that for Tatooine, we don't know the birth year for the character R5-D4, so that's why we were getting NA values for all individuals from Tatooine because that one value was NA, but with na.rm is equal to true, we're going to get back the earliest birth year for Tatooine. But we get a new error message here. This error message is telling us that within the group "Aleen Minor", that's the second group when we've ordered groups alphabetically, there is no non missing value and so it's returning infinite. When you are working with your real data sets, that's something else for you to consider. But let's pull back and think more generally about group_by and mutate. group_by works like counts in that we can create groups by multiple columns at the same time, and we do that with a comma.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=179)** So let's go here and add a comma. So we're going to group_by homeworld and species. We'll run that code. And now we're going to get different values in those columns than we saw last time. But I want to scroll up here and I want to show you that the output table is still grouped. And this is your reminder that whenever you're using group_by, always remember to use ungroup when you're finished with your groups so you can carry on and not slip up by accidentally calculating values within group as opposed to across the entire dataset.

> [!info]- Semantic Content
>
> **Code Identifiers:** group_by (7), earliest_birth_year (1), birth_year (1)
> **CLI Commands:** rm (2)
> **Env Vars:** true (1)
> **UI Navigation:** scroll up (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Column-wise groups: group_by() and summarize()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=0)** - [Instructor] In the previous video, we saw how group_by() and mutate() work together. This video is going to look at mutate()'s sibling, summarise(), and how it works with group_by(). Let's do that in the 04_04b project. So in summarise.R script, we're loading the tidyverse on line one, and then we're selecting out three columns in the starwars dataset, species, homeworld, and height. And let's say that we're interested in the tallest individual from each species. We need to start answering that question with group_by() because we want to calculate [[Statistics]] within the grouped species. So we'll group_by(species), and then we'll pipe this into summarise(), and we're going to create a new column, max_height. We'll use the function max() and the height column, and we're going to add na.rm is equal to TRUE to remove those NA values, and I'm going to run that code. Now, did you notice a difference between how mutate() worked in a previous video and summarise()? Let's copy and paste that code and swap summarise() for mutate(). mutate() creates or modifies columns within groups and it adds new columns to the far right-hand side of the table by default. Whereas summarise(),
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=94)** summarise() throws away rows and columns which aren't used, so we end up with only the species and the max_height column. Species was a grouping column and max_height is our calculation. Now, we can add multiple columns to group_by(), so let's add homeworld here. Just before I run that, notice that our output is a table, but it's not grouped. When I add this second grouping to group_by() and I run the code, you can see that our output now is still grouped. So, summarise() throws away one level of grouping but not all levels of grouping. So this is yet another reminder, as soon as you are finished with your groups, use the function ungroup(), and that's going to guarantee that your data is no longer grouped. One last thing to mention about summarise() is there is both the British English spelling of summarise() with an S and the US spelling with a Z. So, if I copy this code and I paste it, and I've replaced that S with a Z, we'll get the same output. The tidyverse is really friendly in this capacity. All of the functions have both an American English and a British English spelling of functions. Okay, that is everything that you need to know about using summarise() with group_by().

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Code Identifiers:** group_by (7), max_height (3)
> **Cross-References:** previous video (2)
> **CLI Commands:** rm (1)
> **Env Vars:** true (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Column-wise groups: group_by() and reframe()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=0)** - [Instructor] There's one last function designed to work with group_by(), and that's reframe(). Let's see how to use this function in the 04_05b project. In the reframe.R script, we're loading the tidyverse on line one. In lines three through six, we're summarizing the starwars dataset after grouping by species and homeworld to calculate the mean height for each combination of species and homeworld. Now, let's say we were also interested in calculating the density of these individuals. So, let's add to summarise() a comma. We'll create a new column, density, and we'll divide mass by height. When we run this code, we get an error message or warning message. It says, returning more or less than one row per summarized group was deprecated in dplyr version 1.1. Please use reframe() instead. So, summarise() is now designed to only work with functions that return one row per group. mean() is a great example of that. So, mean() is going to take a vector and return us just a single value that is the mean of that vector. But our density column, that's got the column mass divided by height, so we're going to get as many rows per group as there are rows in that group. So, let's copy this code, and let's paste it,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=93)** and replace summarise() with reframe(). When we run this code, we don't get any error messages and the only columns that are returned are species and homeworld, our grouping columns, and the columns that we create within reframe(), so we have mean height and density. Let's also compare this with mutate(). So if I swap summarise() for mutate(), then what mutate() does is mutate() creates those new columns, it puts them on a far right-hand side of the dataset. So, reframe() is a slightly unusual function that sits halfway between mutate() and summarise(). If you're watching this course and have never heard of reframe() before, that's okay. It was only introduced in early 2023 and it fits a very particular niche. Something that's unusual about reframe() is did you notice the groups went away? So if I rerun lines nine through 13, the output table only has the columns that were grouped and the columns within reframe(), but the groups have gone. It is much more common to use mutate() and summarise() in your [[Data Wrangling]]. reframe() provides a very generalizable tool that guarantees your data is ungrouped afterwards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Wrangling]] (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** group_by (1)
> **Versions:** version 1 (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Column-wise groups: Using the .by argument instead of group_by()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=0)** - [Instructor] I need to tell you about the .by argument and how you could use that instead of group_by if you wanted to. Let's understand how this argument works by going to the project 04_06b and we'll open the by-argument.R script. Let's load the tidyverse on line one. In lines four through seven, we're making use of group_by and summarise to find the mean height of each combination of species and homeworld. This is the traditional way to work with groups. But recently the summarise, mutate, and the new reframe function got a .by argument. Let's see that in action. Let's copy this code, let's paste it, and let's add the argument .by. And we need to give it a vector of the columns to group by, so we're going to group by species and homeworld. Then, we can get rid of our group_by function core. And now when we run this code, we're going to get the same output as before in terms of we will have the mean height per combinations of species and homeworld. But by using the .by argument, we don't need to remember to use ungroup. Our data is only grouped when summarise is running.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=97)** We don't have group_by and need to follow it with ungroup later up. So why have these functions been equipped with a .by argument? Well, some tidyverse users don't like that they need to remember to ungroup after using group_by. And very, very good point in some ways. It does add an additional line to your code. The .by argument simplifies that problem away. However, if you were repeatedly using the same groups, you need to repeat the .by arguments each time. I want you to know that both methods exist, so that you can understand and use code that uses either approach to columnized grouping. If you need me to make a recommendation, I'd stick with group_by as it's the most commonly used approach and your code will be more quickly understood than if you use the .by argument, which is very new and seldom seen.

> [!info]- Semantic Content
>
> **Code Identifiers:** group_by (6)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** remember to (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Row-wise groups: rowwise() and c_across()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=0)** - [Instructor] We finished looking at how to do column-wise grouping within your data in a tidyverse. It's time to look at row-wise grouping with row-wise and c_across. Let's see how to use these functions and do row-wise grouping in the project 04_07b. In our row-wise script, let's load the tidyverse on line one and we'll read in our dataset exam_data on line three. Let's print that dataset to the console and take a look at it. So what we have is we have some students and we have the exam scores on various different subjects across different year groups. Now, what if we wanted the average result by row, so for each student within each year, instead of across the columns? Well, we need to start with row wise. So we pipe our data into the function rowwise. And when we run this, scroll to the top of the tibble, we can see that our tibble is now row-wise grouped. We're now going to use mutate to create a new column on the far right-hand side of the dataset. So we'll use mutate and our new column is going to be max_score, so that's going to be the maximum score for each row. And we're going to use the max function and we're going to specify the range of columns using score_music:score_science.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=105)** I'll run that code. And now we can see we've calculated the max score within each row. But how about if our columns weren't in order? We can make use of tidy selection in row-wise operations for the use of c_across. So let's copy this code, let's paste it, and inside of max, we're going to call the function c_across. Within c_across, we can now use tidy selection functions to target specific columns. Let's target those columns that starts_with score_. And now I'll run that code and we're going to get the same output as before, but c_across has allowed us to use tidy selection to more neatly target those columns that we're interested in. Okay, so now I've calculated the max score within each row. How about if I wanted to find max score within each subject across all of the year groups? Well, I need to combine together group_by and c_across. So let's do that. Let's get exam_data. Let's pipe that into group_by and we'll group by student_id. And then we'll pipe this not into mutate, summarize,
>
> **[3:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=203)** as all we're interested in that max score column. So we'll use summarize max_score, we'll call max, and we'll use that function c_across again so that we can target row-wise columns with tidy selection functions. And we'll use starts_with score. And when we run that, we now get a tibble that gives us the maximum score for each student across all of those year groups. And that's everything that you need to know about row-wise grouping and how to combine row-wise grouping with columnar grouping for the use of c_across within group_by.

> [!info]- Semantic Content
>
> **Code Identifiers:** c_across (8), group_by (3), exam_data (2), max_score (2), starts_with (2)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Remember to ungroup()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=0)** - [Instructor] Let's finish off this chapter with a reminder. Don't forget to ungroup your data. Let's go over to project 04_08b. and within our script, ungroup.R, we're going to load the tidyverse on line one. We'll read in our dataset line three. Five through seven, we're going to summarize our dataset. And line nine, let's print out this dataset. So what do we have here? We've got student ID, year group, and average score. So the average score has been calculated for each student within each year group. Now on line 11, I've written some code to find the maximum score across the data. So which student had the highest score across all of the year groups? So let's run that code on line 11 through 12. And I get back a result for every single student. I get back a single result for each student because my data is still grouped. The tibble says it's grouped by student ID, and we have five groups, so we've forgotten to ungroup our data. Where in our code should we have put ungroup? We should have put ungroup here after summarize so that our assignments, our assigned variable, our assigned object, student_year_averages, is ungrouped. So if I rerun this code now and I rerun that code lines 12 through 13,
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=96)** I'm going to get back one student, the single student who scored the highest average score. And that is why you need to remember to always use ungroup when you're finished with your groups.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** student_year_averages (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find maximum penguin dimension by island](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=0)** - [Instructor] To solve this challenge, you'll need to use both a tidyverse and palmerpenguin packages. To correctly solve this task, your output must contain exactly one row after following these steps. calculate the maximum dimension of penguins grouped by islands and species. Filter the results to show only those values greater than the mean of the return values. If your output doesn't contain one row, then make sure you remember to follow all of the advice from this chapter on grouping. You'll find in the project 04_09 at script challenge.R, which will load the packages you need and start your off with the penguin dataset. Good luck with the challenge. I'll see you in the next video with my solution to the problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Find maximum penguin dimension by island](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=0)** - [Instructor] Okay folks, let's look at solving this challenge. We need to find the maximum dimension of penguins grouped by island and species, and then filter those results to show only those values greater the mean of the max dimension. Let's go over to project 04_10b to take a look at writing that code. So in our solution.r script, we're going to load the tidyverse and the palmerpenguins package, which contains the penguins dataset. If we take a look at that dataset, each individual row represents a penguin, we have the species and the island that that penguin belongs to. And then we have three columns that contain the dimensions for the penguin: bill_length, bill_depth, and flipper_length. So the first thing to do is to group the data by species and island. And then we want to choose between mutate, reframe, and summarize. All we want is the max dimension by species and island. We don't want any of the other columns. So we're going to make use of summarize, I'll create a new column, max_dimension. We'll use the function max. And we're doing a row-wise calculation here because we're calculating the maximum for each individual penguin, which corresponds to each individual row in the data.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=95)** So we make use of c_across to be row wise. And then we can use any tidy selection function that we want to target our columns of interest. Let's go with ends_with_millimeter. I'm going to run that code and I get back now the maximum dimension for each combination of species and island, but I've got NA values in there. So let's remove those. I'm going to make sure that I add the na.rm argument to right function. So I'm going to put my cursor inside of max. It highlights the closing bracket. I'll add a comma here, I'll add na.rm is equal to true. I'll run that code. That's great. And let's store this as penguins_max_dimensions.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=150)** And let's take that dataset and let's filter that for max_dimension is greater than the mean of max_dimension. And when I run that code, I get two rows. But in the challenge, I said you should only get one. What's happening here? It's those pesky groups again. We haven't ungrouped our data and we can see that in what's been to the console. It says groups species one. We're getting those values that are greater than the mean of the max dimension within each grouping. So what we need is to add ungroup here. And now if we rerun lines 11 and 12, we get back just this individual record, Gentoo Biscoe 231. How did you find that challenge? It's a little bit abstract, but if you follow the solution, you've understood a fairly advanced topic in the tidyverse, combining together column-wise and row-wise grouping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1)
> **Code Identifiers:** max_dimension (3), bill_length (1), bill_depth (1), flipper_length (1), c_across (1)
> **CLI Commands:** make (3), find (2), rm (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Important Packages and Functions in the Tidyverse

[↑ Back to Table of Contents](#table-of-contents)

#### [ggplot2 for beautiful data storytelling](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=0)** - [Instructor] It's difficult to undersell how powerful ggplot2 is for creating data visualizations. It's such a flexible tool for exploratory data analysis and allows us to create beautiful and rich data stories. I'm going to try to do the package justice in this video, but I strongly recommend taking a dedicated course from the [[LinkedIn]] Library to understand just how flexible the package is and exactly how it works. But let me show you what I can in this video by going to project 05_01b, and we're going to open the ggplot2.R script. Let's load the tidyverse on line one and let's load the fivethirtyeight package. The fivethirtyeight package contains a dataset called bechdel. Let me print that to the console. Let's make my console slightly bigger. This dataset contains information about the profitability of over 1,700 movies and whether or not they passed the Bechdel test. The Bechdel test is a media metric of whether movies contain women with agency, and we're going to visualize the dataset a little bit with ggplot2. So to do that, we need to pipe bechdel into ggplot(). If we run that, that's going to give us a gray rectangle, and that is the start of our ggplot2 chart. The next thing that we need to do is we need to create aesthetics. Aesthetics are the bindings between the columns in our data and the coordinate systems of the chart.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=96)** Let's create an X aesthetic or coordinate system, and that's going to be the budget_2013 column. And the Y aesthetic is going to be the domgross_2013, domestic gross in 2013 dollars. Let me run that code. That gray rectangle now has got an x-axis and a y-axis, and we want to start adding layers to our chart that use those aesthetics. We add layers to ggplot2 charts with a plus operator, not with the pipe. And the elements that we add to our chart that make use of our aesthetics are called geoms. There's lots and lots of geoms as you can see. The one that I want is geom_point(), so that creates us a scatterplot. And now, what I want to do is I want to color these data points by the year that the movie was made. So, let's go inside of geom_point() and let's add an aesthetic just of those points and let's set the color of those points equal to a year column. Now, I'm making use of the British English spelling of colour which has a U in it, but ggplot2 also supports the American English spelling, which is color without a U. You can use either. I'm going to use colour with a U as that's what I'm more familiar with. Let me run this code and that's going to give me a default scale for that aesthetic.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=189)** And it's not the best in the world, so let me swap that. Let me change scale color. And again, you can see the American English spelling and the British English spelling here. So let's use scale_colour_viridis and let's use bins, which is what the b stands for. And if I run that, we can see the data points now are colored by decade. Okay, what else could I do with this chart in ggplot2? Well, I could facet it by the clean_test column, so let's go and do that. Let's add a plus, facet_wrap, a tilde, and then a clean_test column. And I've now started to get a visualization that allows me to explore the data. ggplot2 is such an exceptional tool for exploratory data analysis. It's so fast to quickly prototype and explore your data. And without too much effort, we could finesse this chart to make something that's truly beautiful and impactful. What makes ggplot2 really powerful is we can extend ggplot2 with a huge number of packages. So, the ggplot2 extensions gallery contains more than 133 extensions which are designed to work with ggplot2 to help you in your exploratory data analysis or further finesse your data stories. I want to show you
>
> **[4:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=283)** how we could combine together three packages. Let me go back to my script. So I've made use of ggrepel, hrbrthemes, and ggtext. And I'll run lines 23 through 25. And then, I've got quite a long visualization code here, in lines 27 through to 85. And if I run that code, I get here a chart that uses ggtext for our colored title, ggrepel for our labeled points. so those labels are designed to automatically repel one another so they're not overlapping. And the hrbrthemes has affected the style of the chart as well. This chart maybe has a little bit too much going on for it, I think, for it to be useful as a data story, but I wanted to show you just how much we can do with ggplot2 with some extensions. One last extension to tell you about is gganimate. gganimate allows you to make animated GIF with ggplot2. And I have one pre-made in the 05_01b folder. So, here in the folder we can see gg_animated.gif and if we open that, we can see that the chart animates the data points over time. We can see them come in. Now, ggrepel, I've deliberately left this chart, so ggrepel is automatically trying to make sure
>
> **[6:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=378)** that those labels aren't overlapping as different frames of the GIF are added. We could customize that away, but I really wanted you to understand what ggrepel is doing first in ggplot2. And that's everything I want to cover in this short video about why ggplot2 is such a powerful part of the tidyverse. A previous video in this course described why ggplot2 relies on tidy data. These two videos should hopefully give you all the encouragement you need to go and watch dedicated courses on ggplot2 in the LinkedIn Learning catalog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2)
> **Code Identifiers:** geom_point (2), clean_test (2), scale_colour_viridis (1), facet_wrap (1), gg_animated (1)
> **CLI Commands:** make (5)
> **Env Vars:** gif (2)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (1), stands for (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [stringr for friendly string manipulation](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=0)** - [Instructor] The stringr package is an incredibly useful and powerful tool for wrangling strings and even tidying them up for data presentation. Let's look at some of the things that we can do with stringr in the 05_02b project. Here I am in the stringr.r script. We're going to load the tidyverse on the first line, and we're going to work with a billboard dataset. The billboard dataset contains information about the top 100 songs for the year 2000, and I'm going to select out the artist and the track columns. And let's say I'm interested in those tracks that contain the [[Microsoft Word|word]] love. Love is a really common title in pop songs and the year 2000, the top 100 was very much populated by pop songs. So, we use the function filter from the b.R package to filter data by row contents. So we'll use filter, and then we'll use str_detect from the stringr package. We're going to detect within the track column the string, L-O-V-E, and let's run that code. Now we only get back one song, and if we look at the title for that song, it doesn't contain the word love. Instead it contains the word clover. So stringr is great, but you do need to know a little bit about regular expressions to catch exactly what you want
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=96)** from your data. I want to show you another function in stringr. Let me copy this code. Let's paste this. And let's say that I'm only interested in those songs that begin with the word love. So I can swap str_detect for str_starts. Now if I've run that code, I'm not going to get back any songs. Why is that? Well let's take a look at the billboard dataset. The track column is in title case, so the first letter of love is always going to be a capital letter. Now what I could do is I could change my string here, so that's a capital L, but a good [[Data Science]] thing to do is to lowercase all of my column. So I'm going to use str_to_lower, again, from the stringr package. There I can see all three songs in a billboard dataset that start exactly with the word love. Let's go back here. If I was interested in finding those songs that contain the word love in isolation, then I would need to make use of a little bit of regular expression knowledge, or RegEx knowledge. //b means word boundary. So we're looking for the start of a word, love. We're looking for the end of a word //b. Let me use str_to_lower here,
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=195)** and that's going to return me all 19 songs that contain the word love somewhere in a track title, not right at the beginning, because //b isn't going to allow for the start of a string. So stringr is really good for wrangling strings, but there's a little bit about RegEx that you need to know to finesse using stringr. But I mentioned that we can use stringr for formatting our charts. Let's go down to the code I've provided here, starting on line 19, and that's going to make a ggplot2 chart of some of the GSS cat data sets. Now those labels on my y axis, I would like those to be in title case. So I can use str_to_title (indistinct) around partyid. And if I run that, I can see I've now got nice title case titles for my y axis. I would really like, where it says end comma near rep and end comma near dep, I'd really like to replace that comma with a comma and a space. I can use another function from stringr for that. So I'll go inside of here, and I'll add str_replace. The first argument of str_replace is the thing I want to target, and I want to target a comma, and I want to replace that with a comma and a space. And the only thing I'm missing now
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=288)** is a closing bracket for that new function call. If I run that code, I've now got nice labels for my bar chart. Can you notice though that the label for the actual y axis isn't that great? That's okay, let's go and fix that. So I'll add a plus labs(y = "Party ID"), and that's going to give me a nice usable chart. So, stringr is great for filtering text. It's also great for formatting your text in ggplot2 charts. One last thing I wanted to show you for [[Data Processing]], this is a little bit more advanced, but I think it's useful to cover. str_extract allows us to extract patterns from text. So I have a data file here, data-file_2005.csv, and I want to extract that year. And the year matches the pattern of four numeric characters following one another. So if I run that code, that's going to print for consult 2005. Now in this project, there's a data folder which contains many files. Let's go and look at that, so files, data. All of those data files contain the year in the file name. And what I would like to be able to do is import that data and take the file name out and insert that as a column into the data. That's possible by combining together stringr and the per package.
>
> **[6:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=383)** So the first thing to do is to use list.files to get my data files, and that's going to generate me a vector data files. And then I want to show line 35, but I can apply str_extract to all of those data files to show that year coming out. I'm going to load the janitor package. You may remember the janitor package from earlier, contains a really nice function, clean names for cleaning up column names. Lines 40 through 51, I'm creating a function called read_and_clean, which reads in a data file. It uses str_extract to extract the year, and it uses mutates on line 46 to insert that year as a column. So let's run that code in lines 40 through 51 and then lines 53 through 57. I'm making use of map from the per package to apply my function across all of my files in the data folder. And then I'm using bind_rows to join all of that together. Let's run that code. Let's print data_gapminder_data to the console, and now we can see that we've got that nice column there year, which contains the information from the file path. So this video shows how stringr can be used for filtering data. It can be used for tidying up your ggplot2 charts, and you can combine it together
>
> **[7:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=475)** with all of the functions in the tidyverse to do some really nice [[Data Wrangling]] and [[Data Cleaning]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (10), [[Data Science]] (1), [[Data Processing]] (1), [[Data Wrangling]] (1), [[Data Cleaning]] (1)
> **Code Identifiers:** str_extract (3), str_detect (2), str_to_lower (2), str_replace (2), str_starts (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), cat (1)
> **File Paths:** data-file_2005.csv (1)
> **Env Vars:** gss (1)
> **Speakers:** - [instructor] (1)

#### [lubridate for manipulating dates and times](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=0)** - [Instructor] The lubridate package from the Tidyverse contains a full suite of tools for wrangling, cleaning, and formatting both dates and times. Let's jump into some of the things that you can do with the package in the 05_03b project. Here I am in the lubridate.r script and I want to load the core tidyverse on line one, and I want you to concentrate on the output in your console. Can you see lubridate? If not, you might be using an old version of the Tidyverse. lubridate was only added to the core tidyverse in 2023. So if you can't see lubridate there in the output, please use instore.packages to update for Tidyverse, restart R and then load the Tidyverse again. We're also going to load the janitor package in line two and we'll make use of the clean_names function on line five. So let's run line four and five to read in my insurance data. Let's print that to the console. There are lots and lots of dates in the data. Now, these dates have different formats. quote_date is the new American date format. We've got month, day, year. Policy start dates and policy end dates are in the non-American date format. That's day, month, year. lubridate contains functions for modifying that. So what we're going to do is we're going to take our dataset and we're going to pipe it into the mutate verb,
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=95)** which we always use in the Tidyverse for modifying existing columns. So let's get quote_date, and let's use the function mdy for month, day, year, and let's give it quick date. Let's run that code and we can see now that quote_date column is of the type date instead of character. Let's do the same for the other columns. So policy_start_date, we're going to use the function dmy because it's date, month, year on policy_start_date. And for the last thing, policy_end_date, we're going to make that equal to dmy, day, month, year for policy_end_date. Let's run that code and we can see those columns now are also in the date format. Note those NA values are still NA values. lubridate doesn't just contain these functions for wrangling string dates into dates. We can also do date arithmetic. Let's say that we were interested in the policy length, so let's pipe this into mutate. Let's create a new column, policy_length_days. And what we're going to do is we're going to take policy_end_date and we're going to subtract policy_start_date.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=192)** Let's run that and we get back a duration column. So that's the policy_length and that is calculated thanks to the lubridate package. One last thing, I want to send folks a policy renewal reminder five weeks before the policy end. That's something else that I can do with lubridate. So let's add a comma here to mutate, so another argument to mutate, and I'm going to create a new column renewal_reminder_date. What I'm going to do is I'm going to get the policy_end_date, and I'm going to subtract off weeks five. so five weeks before that date, I want to send out my reminder. Let's run that code, and I've got that column now. It's just chopped off. Let me make my console a little bit wider. Let's run that code again. And now I can see that new renewal_reminder_date. This is just scratching the surface of what's possible with lubridate. It will make your life so much easier during a Tidyverse for any and all date/time operations.

> [!info]- Semantic Content
>
> **Code Identifiers:** policy_end_date (4), quote_date (3), policy_start_date (3), renewal_reminder_date (2), clean_names (1)
> **CLI Commands:** make (4)
> **Speakers:** - [instructor] (1)

#### [forcats for manipulating factors](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=0)** - The forcats package is part of a core Tidyverse and it simplifies absolutely everything about working with factors. It will change your life compared to base R, however, you might well be completely new to factors. So let's get to grips with both factors and the forcats package by opening up the 05_04b project. Here I am in a forcats.r script. We're going to load the Tidyverse on line one and then I've got some code here to make a ggplot2 chart of the M sleep dataset and it's going to show me the different kinds of diets of the animals in the M Sleep dataset. Now what determines the order in which the bars are displayed? Do you know? Well, let's print M sleep. Well, let's actually print this part of a code of a console. So we can see that this tibble contains a vore, an N column, and a vore column is a character column. So all that ggplot2 can do is use character order to determine the order of the bars. So the bars are shown in reverse alphabetical order. NA is a little bit special, so NA is there at the end. So if in ggplot2 we want to change the order in which bars are displayed or the order in which any genomes are displayed, we need to make use of factors.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=95)** So let's put ourself here and let's add mutate because we want to modify the vore column from a character column into a factor column. So let's write vore equals and then fct_, this accesses the functions and the forcats package. So all these functions start with fct_ for factor. We are going to make use of a really useful function fact_reorder(). This allows us to order one column by another column. So we're going to reorder vore by n, and let's run that code and what we get back is a factor. Now what I want to do is I want to pull that factor out so I can take a look at it. So I'm going to use the pull() function from the Tidyverse, which pulls a column out as a vector. So let's pull out that column and we can see that that's a factor. So a factor is a type of data which is made available to us thanks to base R. So just like base R provides this data frames and data frames are crucial for doing [[Data Science]] inside of R, factors are also really crucial to what makes R such a popular programming language. So inside of this factor we have the observations carni, herbi, insecti, omni, and we have the order insecti, carni, omni, herbi.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=191)** So let's drop out that pull and pipe add dataset now containing a factor into ggplot2. And now what we can see is our bars have been reordered so that we've got the largest bar at the top except for that NA. NA is a little bit special. So let's handle that. Let's make use a mutate here. Let's use vore and let's use fct_explicit_na. This is the function I used to use. So fct_explicit_na has been renamed recently. We can see it's been deprecated and it's been renamed to this really long function name So fct_na_value_to_level.. So fct_na_value_to_level. So we'll take vore and we're going to replace the NA with unknown diet. Let's run that code and we can see that we get a factor back and that NA has been replaced with unknown diet. We haven't used factory order yet, so those levels haven't been modified. That's okay. Let's add a pipe here. Now let's run all of that code and we can see we've got a ggplot2 chart now that goes from longest bar to shortest bar. So factors are how we control the order in which things are displayed. And a ggplot2 chart
>
> **[4:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=286)** and we can make use of forcats to modify the levels inside of factors. Now that's working with a factor we've created from a character column. How about if you already have a factor? Well, I've got here another ggplot2 chart making use of the GSS CAT dataset. In here I can see that I've got income level and my Y axis and I've got lots and lots of other. So I've got these different income levels and then I've got not applicable, refused, don't know, no answer. It'd be really useful if I could combine all of those together into one other category. And forcats makes that easy for the use of the function fact collapse. So let me add the select verb here. So I'm going to select just the R income column. bring my console around a little bit. And then what I want to do is I want to mutate this. I want to modify our income and I want to use fct_collapse. I want to collapse that factor R income. It's already a factor. And what I want to do is I want to create a new level called Unknown income. And I want to give this a vector. And so if I see the value not applicable,
>
> **[6:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=383)** move that over again. I want to replace that with unknown income. If I see no answer, the same, don't know, and also refused. So if I run this, we can see now I've got on those three, four, and five unknown income. That's great. We can add a pipe here to rejoin this with the [[Representational State Transfer (REST)|rest]] of the pipe chain that's going to count the different levels of our income. And then pipe it into ggplot2. And we get back this really nice ggplot2 chart here with the levels of income at the top from smallest to largest. And then we've got unknown income at the bottom. So forcats is an excellent package for manipulating factors. Factors are part of base R and we use factors in ggplot2 to order the elements of the chart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5), cat (1)
> **Code Identifiers:** fct_explicit_na (2), fct_na_value_to_level (2), fact_reorder (1), fct_collapse (1)
> **Definitions:** is a  (5), is an  (1)
> **Env Vars:** gss (1), cat (1)
> **Analogies:** just like (1)
> **Speakers:** - the (1)

#### [purrr for doing many things like iteration](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=0)** - [Instructor] The purrr package is the most tricky of the Tidyverse core packages to explain. At its simplest, purrr is for doing many things repeatedly. A little bit more specifically, purrr provides tools for iteration and the iteration is controlled from a [[Functional Programming]] paradigm. Let's take a look at what that means practically by opening up the 05_05b project. So I'm in the purrr.r script here and let's load the Tidyverse on line one and the janitor package line two. And what I want to do is I want to read in the data files, in the data folder. Let's take a look at those data files so we can see we've got many data files and we've got within the path of the data file the year that the data corresponds to. So in order to read this data in, I need the file paths. So let's use list.files. We'll look inside of a data folder and we want to return the full names to full paths to these files. So full.names is equal to true. If I run that, that's going to generate me a vector of the 12 data file data paths. Let's store that as vec data files. And now I want to take vec data files and I want to map it across the function. So map is from the purrr package, it allows us
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=97)** to apply a function across a list or a vector of arguments. The second argument is a function which we apply across those elements. And the is easiest way to write a function is with the tilde notation. So I'm going to write ~read_csv and then to refer to the elements that we're currently iterating over, we are going to use .x. So if I run that code, that's going to read in each of those data files and it's going to output me a list of data files. So this 12th tibble here, this says that a 12th element from that vector. One of the really nice things about purrr is there's several flavors of map. So if I wanted the end output of my map to be a data frame, I can make use of map_df and if I run that, it's going to concatenate, it's going to bind all of those tibbles together so I get one tibble at the end of my code, which is great. Now I mentioned that those file names contain the year that the data corresponds to. So I've written a function on line 12 through 21, which reads in a data file's file path, extracts the year then reads in that data and inserts a new column called year. So let's get once again vec data files. Let's pipe it into map df and the function
>
> **[3:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=197)** that we're going to apply this time is read and clean and we'll use .x to refer to the current path that we're iterating over. I'll run that code and we can see our n output now is a tibble with the same number of rows as before, but we have that new column, yeah. Let's store that as data_gapminder.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=229)** Now let's say that I wanted to generate a chart for each of the continents in the data. I've written a function to do that, so plot continent aligns 27 through 40. If I give plot continent for continent Europe and I run that code, that's going to generate a ggplot2 showing me the life expectancy changes in Europe since 1952. It'd be really useful if we could generate a ggplot2 chart for all of the continents and save those as separate images. That's doing the same thing repeatedly over a number of values, which is iteration and we can achieve that using purrr. So we need to obtain the distinct continents. So so let's use data_gapminder. Let's pipe this into distinct and get the distinct values in a continent column. And then we want to pull this out as a vector. So we'll use pull continent. And now what I want to do is I want to map over this vector and I want to generate a data frame this time, I want to generate a ggplot2 chart. There isn't a special map_ggplot2 function. So we are going to use the generic map function and we're going to use tilde as before. And the function that we're going to use is ggsave
>
> **[5:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=325)** and let's save that as gg image.png we'll add a comma and will we use .x to refer to the current continent name that we are iterating over. Let me run that code and we can see that I have an error and the reason that I have an error is because I haven't used my function here. So when you are using map, you need to be a little bit careful with your code. So all I'm calling in the second argument is .x. So the value of the continent, I need to use my function plot continent, add a closing bracket here. And if I run that code, that's going to map it over each of the values. Now my output is a list. So a list of five elements, each with the the output image .png. So what I'm doing is I'm actually overwriting my image each time. So if I look at my files tab, if I go up one level, we can see I only have one data file in there, image .png. I want to generate a new image each time. So let's make use of a really nice function from the stringr package to help us. So let's use sdr glue here.
>
> **[6:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=414)** Let's change image to life expectancy for,
>
> **[7:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=426)** and I want to insert the continent's name here. The continent name is going to be pulled in to .x and within sdr glue we can refer to R code inside of braces. So inside of these braces we can run R code including .x. So if I type .x here and I run this code, this is going to output me an image for each of those continents. One last thing. Map is designed for outputting something to the console, but what we want as a result of that iteration is a side effect. All we want is our charts to be generated. So map generates output, which goes to the console. A function from purrr that only generates side effects after iteration is walk. So if I run the code with walk, I'm going to get those messages from gg save, but I'm not going to get that vector anymore and I've got my images out. So that's a short demonstration of what's possible with purrr, it's a really beautiful way to do iteration in a functional programming paradigm. It does allow you to map with multiple arguments. So there is a map to and a P map function, which will allow you to map over an arbitrary number of arguments and that is well explained in the documentation. Now that you know how to use map and walk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (2)
> **Definitions:** is a  (5)
> **Code Identifiers:** data_gapminder (2), read_csv (1), map_df (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 6. Working Smart with the Tidyverse

[↑ Back to Table of Contents](#table-of-contents)

#### [Handling NAs in the tidyverse with drop_na() and replace_na()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=0)** - [Instructor] We're going to look at two extremely useful tools for handling NA values in your data that are baked into the Tidyverse. I'm inside of the handle-nas.R script in the 06_01b project. Let's load up the Tidyverse, and let's print the msleep dataset to the console. We can see there are NA values in many of the columns. Let's remove all of these NA values at once by taking msleep and piping it into the function drop_na. So now when I run this code, we're going to only get back those animals that have no NA values at all. So we're only looking at complete rows in the data, and there are only 20 rows in the data that match this condition. So this is really useful, but how about if we wanted to drop only NAs in a specific column? Well, we can use tidy selection in drop_na. So I could write here the argument (conservation) and run that code, and that's going to drop only those rows that contain NA in the conservation column. I could say that I wanted (conservation:awake), and that's going to be the span of columns conservation through awake, and that gets us to 21 rows, so one more row than if we dropped all of the NA values. But remember, with tidy selection,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=93)** we can use any tidy selection helper, including contains. We could target those columns that contain the [[Microsoft Word|word]] sleep, to only drop those rows containing NA values in these columns. I love using drop_na on my data. It's really useful, but you might need to do the opposite. You might need to inspect those rows which do contain NA values. To solve that problem, you'll need to use if_any, which I cover later in this chapter. But let's switch gear and think about replacing NA values in a tibble. Tidy R contains a really great function for this called replace_na. So let's get msleep. Let's pipe it into the function replace_na, and then we provide it with a list of our replacements. So let's target the conservation column, and any NAs here, I want to replace with unknown conservation. And then in the vore column, I want to put "Unknown diet".
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=171)** Let's run that code, and we can now see that the vore column and the conservation column have been updated with our NAs replaced with our strings that we've provided. Now, the last thing that we might want to do is we might want to replace a specific value with NA. So let's get msleep, and let's select just for columns name through order. And what I want to do is I want to replace omni in the vore column with NA. To do that, we want to make use of the mutate function. We'll be updating vore, and we'll be using the function na_if. So if vore contains omni, we want to replace that with an NA value. And if I run this code, we can see that all of those omnivorous animals have a vore value replaced with NA. These are three really incredibly useful and powerful tools for handling NA values in your data with the Tidyverse so that you can concentrate on the data that you need to in your wrangling, visualizing, or modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** drop_na (3), replace_na (2), if_any (1), na_if (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Use case_when() instead of nested if or ifelse()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=0)** - [Instructor] Let's take a look at how to handle complex conditions in the tidyverse by the case_when function. I'm in the case-when.R script in the 06-02b project. I'm going to load the tidyverse in line one. Line three to four, I'm selecting out some specific columns from the msleep dataset. Line five to nine, I'm making use of the if-else function to categorize my animals by how much they sleep. At the moment, my condition is if sleep_total is less than or equal to 12, I get less than or equal to 1/2 a day asleep, and when I get more than 1/2 a day's sleep. How about if I wanted to add a condition, another condition, if it was false? So if sleep_rem was above or below a certain fraction of sleep total, you might answer that by saying, "Well, I'd nest if-else conditions." If so, I want to introduce you to a better way with case_when. So let me grab this part of the code, let me pipe it into mutate and I'm going to create a new column called sleep_category.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=79)** And I'm going to use the function case_when. In case_when we supply our conditions as follows: so if sleep_total is less than four, I want to insert the value barely any sleep, and we do that with a tilda. So if I write this out, "Barely any sleep." The left-hand side of a tilda is my condition and the right-hand side of my tilda is what's inserted if that condition yields true. So let me run that code and we can see that we only have one animal there, Roe deer with the value Barely any sleep. All of the other animals have NA values. And that's because we've not told case_when how to handle NA or anything other than sleep_total is less than four. So what I want to do is I want to handle all of the values. So I'm going to add another argument to case_when. Let's write TRUE ~ "Other". So the left-hand side of tilda is my condition. If TRUE is true and TRUE is always true, we want to insert Other. So let me run that code and we can see that all those values of a previously NA are now Other.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=175)** So here comes the good thing about case_when, if we wanted to apply more conditions, it's just more arguments to case_when instead of nesting if-else. So let's say that if sleep_total is less than 16
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=194)** and if sleep_rem is more than 10% of the sleep_total. So we use ampersand to refer to the logical operator. So if sleep_rem is greater than or equal to 0.1 times sleep_total,
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=218)** let's move my console slightly. Let's insert the value Dreamy sleep and a comma.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=232)** Let me run that code and I get an error message. And my error message is a really common error message that you get when using case_when. Can you spot my error? My error is I've used an equals here. We need to use a tilda in case_when. So if we've replaced that with a tilda and I run the codes, we can now see other Dreamy sleep and Barely any sleep for Roe deer. Now I want to add another condition. So if brainwt is NA, I want to put unknown brainwt. So I'm going to go here and add another argument. So is.na(brainwt), let's replace that with Unknown brain weight. Let's add my comma and let's run that code. Now something strange is happening or potentially strange if you've not used it before. We've got the cheetah being labeled as Unknown brain weight. Brain weight was NA, but we can see that the Three-toed sloth and the Northern fur seal, they both have brainwt NA, but they're being labeled as dreamy sleep. So what's happening? case_when applies its conditions in the order that you see them as arguments. So this condition is going to be applied first
>
> **[5:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=326)** and if it yields true, then this is going to be inserted then the next argument, then the next argument. So you need to be careful and put your most restrictive definitions at the top. And so let me cut this, let me paste it here. Get rid of this empty line now to tidy up my code. And if we rerun this code, we'll now see that all of those rows where brainwt is NA are labeled as Unknown brain weight because that's the first condition. So this has been a slightly more bizarre example for me than usual. I wanted you to understand that case_when is really useful for categorizing the data in many categories, I wanted you to see that was the ampersand for the AND operator. You can use the pipe for the OR operator. I wanted you to see a mistake where you use equals instead of tilda. And I also wanted you to go away being careful to make sure that your most restrictive conditions at the top of case_when.

> [!info]- Semantic Content
>
> **Code Identifiers:** case_when (13), sleep_total (6), sleep_rem (3), sleep_category (1)
> **Env Vars:** true (3)
> **Warnings:** common error (1), be careful (1)
> **CLI Commands:** make (1)
> **Versions:** 0.1 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use tidy-select functions to work with many columns at once](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=0)** - [Instructor] Tidy selection is one of the superpowers provided by the tidyverse. Let's take a look at exactly what tidy selection is and how we can use it in a tidy select the R script in the 0603B project. So as per usual, let's load the tidyverse. That's going to give us the core tidyverse packages and tidy selection. In lines three through four we're going to make use of the select verb, and we are using tidy selection here to refer to the columns name through order. So that colon is tidy selection. Where is also a tidy selection helper. This allows us to target columns that meet a specific condition. So if we run lines nine through 10, that's going to return me the name column and all of the columns containing numeric data. Lines 14 and 15 I'm making use of the contains tidy selection helper to target all of the columns that contain the substring sleep. Now I want to show you the documentation for select. So let's highlight that function name and press F1. I'll make the documentation slightly bigger and the select function is really helpful. It gives you an overview of selection features. So here it's showing you all of the different tidy selection helpers that you can make use of. So it's showing the colon, the exclamation mark, the complement, which means the opposite of,
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=97)** and we can see everything. Last call, starts with, ends with, contains, all these different tidy selection helpers. Drop NA is a really useful function for getting rid of NA values, and we can use that with tidy selection. So if I run this code, make my console slightly bigger for a moment, that's going to drop all of the rows, which contain sleep in their column name and rows containing NA. Now if I bring it for documentation for NA, so I've highlighted the function name and I press F1. Remember, documentation isn't like select. Select is kind of introducing the concept of tidy selection. But if we scroll down, we can see that three dots is labeled with tidy select. So this is indicating to us that this function allows tidy selection, and any function documentation page that says tidy selection is telling you, you can make use of all of these features. Things are a little bit different with mutate. So I have a mutate example here. And in order to use tidy selection, you need to make use of the across function. So across takes two arguments. The first argument is our tidy selection. On line 27, I'm making use of contains sleep, and I'm applying the function in the second argument of across. So I'm going to divide all of the values by 24. So let me run that code.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=191)** And I can see now that all of those columns that contain sleep have now been divided by 24 to make them into a fraction of the day. So we can see that there are two animals on line three and six that slept 60% of the day. When it comes to tidy selection with filter, things are even more complicated. So here on lines 32 through 33, I am filtering if any of the columns that contain sleep have NA values. There's a video later in this chapter that goes into this in detail, but from a high level, this is tidy selection. It's incredibly powerful. Many, many of the functions in the tidyverse allow you to use it, and you can even add tidy selection into your packages if you wanted to.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Documentation:** the documentation (2)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using across() in mutate() to modify multiple columns at once](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=0)** - [Instructor] Let's take a look at how we can modify many columns at once in a dataset in a tidyverse through across. I'm in the 06_04b project, I've got the across to R script open, and on line one we're going to load the tidyverse, line three and four, let's concentrate on a small number of columns from the msleep dataset. Let's pretend I was interested in converting all of the sleep columns to percentages. What we know how to do at the moment is to pipe this into mutate. We could write out each of these column names and ask to convert each of those into a percentage in 10. It's much more efficient to use across. The first argument of across is where we write our column specification, which we can do with tidy selection. So let's use starts with sleep. And then the second argument of across is where we provide our function. The simplest way to write an anonymous function is with tilde, dot, or period with those that are column contents. And we want to divide the column contents by 24. Let's run that code. And what we'll get back is a percentage in each of those sleep columns. That's great, that's already so much more efficient than having to write out
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=94)** each of those column names explicitly. How about if we didn't want to modify those columns, we wanted to create new columns? Well, let's copy and paste this code. And we need to change the second argument of across. If we want to create new columns, we need to make a list, and inside of our list, we're going to provide the suffixes to the columns that we're targeting that are going to be created. So we want to create a percent column, so we're going to add the suffix percent. And for this suffixed column, we're going to apply the same formula, so tilde, dot, divided by 24. And if I run that code, you can see now that I've got a new column added for each of those columns that match our tidy selection. So that's incredibly powerful. Maybe you don't want to calculate percentage, maybe you want to do a more complicated calculation, you can do that really easily with across and mutate. We can also use across within summarize. So let's take this code, let's modify this to look at vore and the weight columns. And let's say that we were interested in finding the maximum value within all of the weight columns within each group. Well, we need to group the data by vore,
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=192)** there we can see our groups have been inserted, and then we're going to go and pipe this into summarize, we'll call across, the first argument is tidy selection and we'll use contains "wt". And the second argument of across, we want to create new columns, because we want to communicate what that column contains. So we'll write list, our suffix is going to be max, and our function is going to be max. to refer to the column. We already know there are na values here, so let's add na.rm is equal to true to remove those na values. And let's run this code, and we'll get an error message. This is a really common error message that you'll get when you're working with across, and it's because we've forgotten something. Have you spotted what we forgot? We forgot the tilde here. So we haven't created a function to apply across these columns. So let's add that tilde in, and run the code, and now we can see the maximum brain weight and the maximum body weight within each of these groups. I love using across, it saved me so much time and made my code much less fragile than writing out each column name explicitly and the operation many times.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=288)** I do want to make a final comment about the difference between column-wise and row-wise when we're using across. So let me read in the exam data on line 21, and let's print that to the console. And what I have is, I have scores for students across the four year groups, one through four, and let's say that what I wanted was the maximum score that each student achieved across each year. To do that, I need to do a row-wise operation. So let's pipe exam data into group by, we'll group by student ID, we'll then group by year group. And then we want to summarize, and we're not going to use across, because across is designed to work column-wise, we want to work on those individual rows. So we're going to create a new column, max_score, we'll use the max function, and within here we'll use the function c_across. We can use tidy selection here, so we'll target those columns containing score,
>
> **[6:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=389)** and then when we run this code, we can see that we get the maximum score for each combination of student ID and year group. So across is fantastic for saving you time and making your code less fragile when you're working column wise, but if you're working row-wise, you'll need to use see across with group by.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), rm (1)
> **Code Identifiers:** max_score (1), c_across (1)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)
> **Warnings:** common error (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Filtering many columns at once with if_any() and if_all()](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use the tidyverse to efficiently apply filter conditions to many columns at once. I'm in the 06_05b project and I've got the filter-multiple-columns.R script open. Let's load the tidyverse and let's print the msleep dataset to the console and we can see, as we know by now, there are many N/A values in this dataset. Let's filter this dataset to see only those rows that contain an N/A value in a sleep column. So let's pipe msleep into filter and we're going to make use of if_any. The first argument of if_any is our column specification. As always, in the tidyverse, we can use tidy selection where we're doing the column specification. So let's target those columns that contain sleep. And our filter condition is a function, so we use tilda and we're going to use is.na and then . to represent the column that we're looking at. And if we run this code, then we can see those 51 animals that contain at least one N/A value in a sleep column. How about if we were interested in only those rows where all sleep columns contain N/A values?
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=97)** Well, we could swap this if_any for if_all. So let's run that code and we can see there are no animals that contain N/A values in all sleep columns. Let's copy this code and let's swap sleep for weight. And we can see again, there are no columns that contain N/A values in both weight columns. If we changed this to be the specific columns, vore and conservation, there are some animals that contain N/A values in all of these columns. I think it's really important that you understand that if_all and if_any, they're not just for scanning for N/A values. So let's take this code and let's go for targeting columns that contain weight. And the condition that we want to check is if the value, so if dot is greater than one. If I run that code, then we can see there are three animals in the dataset where all of the weight columns are greater than one. I found if_any and if_all to be really powerful for me,
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=192)** when I want to filter down my dataset by conditions on multiple columns. It saves time on having to write up the column names many times. This is very valuable if you've got hundreds of columns in your dataset and it also means that your data is less fragile using if_all or if_any, instead of writing out each column name explicitly.

> [!info]- Semantic Content
>
> **Code Identifiers:** if_any (6), if_all (4)
> **Documentation:** specification (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding how the tidyverse evolves and deprecates](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=0)** - [Instructor] The Tidyverse is an incredibly powerful toolkit for doing [[Data Science]] with R. The reason it's so powerful is that it's still growing and evolving, and it's not a stagnant collection of functions. Sometimes when you look at the documentation for functions, you'll find a lifecycle badge that says superseded. Two really important examples are gather and spread. These used to be the functions used for transforming data between wide and long formats. But in 2019, the Tidyverse was augmented with two powerful new functions, pivot_longer and pivot_wider, which I've introduced in this course. Gathering and spread will not be removed from the Tidyverse because they are marked, superseded, and the documentation pages for the functions makes clear the functions will continue to work, but you are encouraged to transition to the new and improved functions. A small number of functions will be marked deprecated. This indicates the function will be removed from the Tidyverse at some point in the future. It happens rarely, and you'll receive warnings in your code if a function you are using has been marked for deprecation. The documentation will also give you advice on why the function has been deprecated and what to use instead. You'll also come across some functionality marked as experimental.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=93)** For instance, the .by and .groups arguments for mutate and summarize are marked experimental at the time of recording. This gives you insight into new possibilities that aren't quite ready for primetime in the Tidyverse. I approach experimental functions with caution. If I'm writing code that's unlikely to be used again, particularly if I'm doing exploratory data analysis, I might use an experimental feature. I'd recommend approaching experimental functionality with caution. Wait until it's fully baked if you're going to use it in packages or in production code. Here's an overview of the lifecycle process. Some functions are introduced as experimental, and most will get properly introduced at the Tidyverse and will be considered stable. Infrequently functions get superseded, and a better or more modern alternative gets added. These superseded functions won't be removed, but they won't get improved in the future either. Rarely, a function will get truly deprecated. This means it will get deleted at some point in the future. These are the only functions to truly approach with caution and consider rewriting code that uses them at the moment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **Documentation:** the documentation (3)
> **Warnings:** caution (3)
> **Code Identifiers:** pivot_longer (1), pivot_wider (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find all love songs remaining below position 80 in the top 10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=0)** (engaging synth music)
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=6)** - [Instructor] For this challenge, all you need is the core tidyverse and the Billboard dataset contained within it. What I need you to do is to find the three songs in the dataset that match these two conditions. The song title contains the [[Microsoft Word|word]] "love," and every week that the song was in the top 100, it was in position 80 or better. If you go over to project 06_07b, I've started you off in challenge.R, and all I've done is loaded the tidyverse and given you the dataset Billboard. There are lots of different approaches to how you can solve this problem using the skills that you've learned during this course. Good luck. In the next video, you'll see my approach to the problem, and it'll be interesting for you to compare how you've approached it with my approach. Good luck. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (engaging synth music) (1)

#### [Solution: Find all love songs remaining below position 80 in the top 10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=0)** - [Instructor] Hello folks, I've set you the challenge of finding the three songs in a billboard dataset that match these two conditions: the track title contains love with case insensitivity, and every week that the track was in the top 100, it placed better than position 80. Let's go and look at how to solve this in the 06_08b project. So all we need is the core tidyverse, so let's load library tidyverse and let's print the billboard dataset to the console. So our first condition concerns the track title and we want to filter the datasets and it's a character column, so we want to use the function from the string R package. We want to use str_detect. I remember when I also see that a track title is written in title case. So let's use sdr_to_lower on the track column. And then we want to search for the [[Microsoft Word|word]] love. So those are all of the 22 songs that contain the word love with case insensitivity. And now I want to pipe this into filter again to apply my condition for every week that the song was in the top 100,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=93)** it had placed in position 80 or better. So I'm going to make use of if_all. For my tidy selection column specification, I'm going to use contains and target the week columns. And then the second argument of if_all is my predicate test, so a test which is going to yield true or false. And so we use a tilde to start off our function and our test is going to be if dot the values in a column are less than or equal to 80. Let's run that code. And this is where you might have got to and you might have gotten stuck because it looks like there aren't any songs that match this condition. But what we're forgetting is NA values. So I didn't require that the song was in the top 100 every week. All I required was when it is in the top 100, it needed to be placed at position 80 or better. So our if_all also needs to contain a condition of NA, and specifically, it needs to be an OR condition. So if we add the pipe operator here to stand for the logical operator OR, or is .na, and then dot again to refer to the column contents. And if I run that code, I can see the three songs
>
> **[3:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=190)** which contain love in their title. And every week that they placed in the top 100, they placed at position 80 or better, or they simply weren't in the top 100. I hope you found that challenge challenging, but also rewarding. We're using several different features of the tidyverse here. We're using tidy selection, we're using stringer, and we're using if_all within filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Code Identifiers:** if_all (4), str_detect (1), sdr_to_lower (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=0)** - [Charlotte] Thank you so much for joining me for this introduction to the Tidyverse. My goal was to get you confident with how the Tidyverse works and how to get your data files into R and to combine Tidyverse functions to begin to understand and explore your datasets. You should now feel equipped to clean, wrangle, and process your data frames and tibbles with the Tidyverse. You've seen how to use stringr, lubridate and forcats, designed specifically for the complexities of handling strings, dates, and factors respectively. I also had the pleasure of introducing you to ggplot2, simply the best tool for [[Data Storytelling]] with R. If you're interested in learning more, I have two recommendations. The [[LinkedIn]] Learning catalog has dedicated ggplot2 courses, and you can also search LinkedIn for the hashtag tidytuesday and ggplot2 every Tuesday for an impressive showcase of what's possible with ggplot2 thanks to the Tidyverse. If you're looking for courses on specific data analysis or [[Data Science]] topics with R, there's a great collection in the course catalog. If modeling is your thing, then tinymodels is another ecosystem of our packages designed around the Tidyverse that I'd thoroughly recommend. Thanks again, and please do follow me on LinkedIn or X @charliejhadley to learn more about R, the Tidyverse, and data storytelling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Data Storytelling]] (2), [[Data Science]] (1)
> **Speakers:** - [charlotte] (1)


## Instructor

- [[Charlie Joey Hadley]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-the-r-tidyverse-4377003)

## Skills Covered

- R (Programming Language)
- tidyverse

## Path Context

### In [[Advance Your Skills in R]]
← [[R Code Challenges- Data Science]] | **5 of 8** | [[R Tidyverse Applications]] →

## Appears In

- [[Advance Your Skills in R]]

## Related Courses

_Courses sharing skills:_

- [[R Tidyverse Applications]] — R (Programming Language), tidyverse
- [[Build Advanced Charts in R]] — R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[Complete Your First Project in R]] — R (Programming Language)
- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — R (Programming Language)

---

[↑ Back to top](#)