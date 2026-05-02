---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-wrangling-in-r-14135737
url: "https://www.linkedin.com/learning/data-wrangling-in-r-14135737"
duration_minutes: 171
duration: 2h 51m
level: Intermediate
updated: 3/10/2025
learners: 54337
skills:
  - Data Wrangling
  - R (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHwhOyy4T_E4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626807009888?e=2147483647&amp;v=beta&amp;t=yQECZR2VKEpjDC2NgOT4PC7xVLoI6VGaJ34hJU4W0So"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started with R for Data Science]]'
  - '[[Moving from Data Analyst to Data Scientist]]'
prev_courses:
  - '[[Complete Guide To R Wrangling Visualizing And Modeling Data]]'
  - '[[Intermediate Sql For Data Scientists]]'
next_courses:
  - '[[R for Data Science- Analysis and Visualization]]'
  - '[[Python Functions for Data Science]]'
path_nav: '[{"path":"Getting Started with R for Data Science","position":2,"total":4,"prev":"Complete Guide To R Wrangling Visualizing And Modeling Data","next":"R for Data Science- Analysis and Visualization"},{"path":"Moving from Data Analyst to Data Scientist","position":2,"total":11,"prev":"Intermediate Sql For Data Scientists","next":"Python Functions for Data Science"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-wrangling
  - skill/r-programming-language
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Wrangling%20in%20R.md)

![Data Wrangling in R](https://media.licdn.com/dms/image/v2/C560DAQHwhOyy4T_E4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626807009888?e=2147483647&amp;v=beta&amp;t=yQECZR2VKEpjDC2NgOT4PC7xVLoI6VGaJ34hJU4W0So)

# Data Wrangling in R

> The tidy format provides a standardized way of organizing data values within a dataset. By leveraging tidy data principles, statisticians, analysts, and data scientists can spend less time cleaning data and more time tackling the more compelling aspects of data analysis. In this course, learn about the principles of tidy data, discover how to create and manipulate data tibbles, and find out how to

> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737) | 2h 51m | Intermediate | 54K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Preparing for data wrangling](#preparing-for-data-wrangling)
  - [What you need to know](#what-you-need-to-know)
  - [Exercise files](#exercise-files)
- [**1. Tidy Data**](#1-tidy-data) (4 videos)
  - [What is tidy data?](#what-is-tidy-data)
  - [Variables, observations, and values](#variables-observations-and-values)
  - [Common data problems](#common-data-problems)
  - [Using the tidyverse](#using-the-tidyverse)
- [**2. Working with Tibbles**](#2-working-with-tibbles) (3 videos)
  - [Building and printing tibbles](#building-and-printing-tibbles)
  - [Subsetting tibbles](#subsetting-tibbles)
  - [Filtering tibbles](#filtering-tibbles)
- [**3. Importing Data into R**](#3-importing-data-into-r) (8 videos)
  - [What are CSV files?](#what-are-csv-files)
  - [Importing CSV files into R](#importing-csv-files-into-r)
  - [What are TSV files?](#what-are-tsv-files)
  - [Importing TSV files into R](#importing-tsv-files-into-r)
  - [Importing delimited files into R](#importing-delimited-files-into-r)
  - [Importing fixed-width files into R](#importing-fixed-width-files-into-r)
  - [Importing Excel files into R](#importing-excel-files-into-r)
  - [Reading data from databases and the web](#reading-data-from-databases-and-the-web)
- [**4. Data Transformation**](#4-data-transformation) (5 videos)
  - [Wide vs. long datasets](#wide-vs-long-datasets)
  - [Making wide datasets long with pivot_longer()](#making-wide-datasets-long-with-pivot_longer)
  - [Making long datasets wide with pivot_wider()](#making-long-datasets-wide-with-pivot_wider)
  - [Converting data types in R](#converting-data-types-in-r)
  - [Working with dates and times in R](#working-with-dates-and-times-in-r)
- [**5. Data Cleaning**](#5-data-cleaning) (5 videos)
  - [Detecting outliers](#detecting-outliers)
  - [Missing and special values in R](#missing-and-special-values-in-r)
  - [Breaking apart columns with separate()](#breaking-apart-columns-with-separate)
  - [Combining columns with unite()](#combining-columns-with-unite)
  - [Manipulating strings in R with stringr](#manipulating-strings-in-r-with-stringr)
- [**6. Data Wrangling Case Study: Coal Consumption**](#6-data-wrangling-case-study-coal-consumption) (5 videos)
  - [Understanding the coal dataset](#understanding-the-coal-dataset)
  - [Reading in the coal dataset](#reading-in-the-coal-dataset)
  - [Converting the coal dataset from wide to long](#converting-the-coal-dataset-from-wide-to-long)
  - [Segmenting the coal dataset](#segmenting-the-coal-dataset)
  - [Visualizing the coal dataset](#visualizing-the-coal-dataset)
- [**7. Data Wrangling Case Study: Water Quality**](#7-data-wrangling-case-study-water-quality) (8 videos)
  - [Understanding the water quality dataset](#understanding-the-water-quality-dataset)
  - [Reading in the water quality dataset](#reading-in-the-water-quality-dataset)
  - [Filtering the water quality dataset](#filtering-the-water-quality-dataset)
  - [Water quality data types](#water-quality-data-types)
  - [Correcting data entry errors](#correcting-data-entry-errors)
  - [Identifying and removing outliers](#identifying-and-removing-outliers)
  - [Converting temperature from Fahrenheit to Celsius](#converting-temperature-from-fahrenheit-to-celsius)
  - [Widening the water quality dataset](#widening-the-water-quality-dataset)
- [**8. Data Wrangling Case Study: Social Security Disability**](#8-data-wrangling-case-study-social-security-disability) (7 videos)
  - [Understanding the social security disability dataset](#understanding-the-social-security-disability-dataset)
  - [Importing the social security disability dataset](#importing-the-social-security-disability-dataset)
  - [Making the social security disability dataset long](#making-the-social-security-disability-dataset-long)
  - [Formatting dates in the social security disability dataset](#formatting-dates-in-the-social-security-disability-dataset)
  - [Fiscal years in the social security disability dataset](#fiscal-years-in-the-social-security-disability-dataset)
  - [Widening the social security disability dataset](#widening-the-social-security-disability-dataset)
  - [Visualizing the social security disability dataset](#visualizing-the-social-security-disability-dataset)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Preparing for data wrangling
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=0)** - [Mike] Hi, I'm Mike Chapple.
>
> **[0:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=2)** And I'd like to welcome you to this course on Data Wrangling in R.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=6)** R is an extremely powerful language used by data scientists, analysts, and business users to perform statistical analysis, visualization and machine learning in a wide variety of fields.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=19)** In this course, I'll explain how you can use R to perform data wrangling using concepts drawn from the field of tidy data.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=27)** You'll learn about a set of tools known as the Tidy-verse that allows you to import data for a wide variety of sources, transform it to a standardized format, and then clean it before performing your analysis.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=40)** I'll begin by covering the basic concepts of Tidy data, and then conclude with three detailed case studies that will help you learn how to apply Tidy data concepts to your own projects.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=51)** You'll finish this course with a solid understanding of this important work.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/preparing-for-data-wrangling?u=76281980&t=56)** All right, let's get rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), business (1), [[Statistical Analysis]] (1)
> **Definitions:** is an  (1), known as (1)
> **Speakers:** - [mike] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=0)** - [Instructor] I've designed this course as an introduction to the concepts of data wrangling, tidy data, and the tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=7)** You won't need any background in those fields to complete this course.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=10)** This is however, an intermediate level course, and I do assume that you already have a basic knowledge of R and R Studio.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=18)** You should know how to navigate in our studio, how to write and execute a basic R script, and how to install our packages and use them in your scripts.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=27)** If you don't already have this basic familiarity with R, I suggest that you begin by viewing the Getting Started chapter of the course, Learning R.
>
> **[0:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-you-need-to-know?u=76281980&t=36)** The six videos in that chapter will give you a basic understanding of the language that will help you with the data wrangling concepts that I cover in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3)
> **Prerequisites:** install (1), getting started (1)
> **Speakers:** - [instructor] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=0)** - [Instructor] If you have access to the exercise files for this course, you can download them to your desktop.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=5)** The folder contains sub folders corresponding to each chapter of this course, and then each video within that chapter.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=13)** Inside each videos folder, you'll find files corresponding to the start and complete states for that video.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=20)** The start file contains an R Script that shows where I started at the beginning of a video if you'd like to recreate the code yourself as you follow along.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=28)** The complete file contains the code that I wound up with at the end of each video.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=33)** Now you'll notice that there isn't a sub folder for each video in the course, you'll only find files here when I built an R Script in the video.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=41)** Introductory videos and those where I worked only at the R console without writing a script don't appear in this folder.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=48)** Now I strongly encourage you to download these files and use them to follow along as we work our way through the course.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=54)** There's no better way to learn data wrangling in R than rolling up your sleeves and coding yourself.
>
> **[0:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=59)** If you're viewing this course on a mobile device or set-top device or your membership doesn't provide access to the exercise files, that's okay.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/exercise-files?u=76281980&t=66)** I still encourage you to follow along in RStudio by recreating the code yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[RStudio]] (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1)


### 1. Tidy Data

[↑ Back to Table of Contents](#table-of-contents)

#### What is tidy data?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=0)** - [Instructor] The goal of this course is to help you use R to transform your datasets into a consistent format known as Tidy Data.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=8)** You do this through a process known as data wrangling.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=11)** Now data wrangling is the process of taking messy data and manipulating it into a format that's well suited for analysis.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=18)** It goes by many other names.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=19)** Some people call it data cleaning, data munging or data preparation.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=24)** Now whatever name you choose to use, it's important to remember that this is not a one-time task.
>
> **[0:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=30)** While it's true that most data projects will involve a lot of data wrangling upfront, data wrangling is a continuous process, and as you encounter new datasets, new problems and new ideas during the course of your project, you'll likely return to perform some new data wrangling.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=46)** Now the term Tidy Data describes data that's been put into a standardized format that facilitates future analytic work.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=56)** Hadley Wickham, a data scientist who is one of the key developers of the R language coined the term Tidy Data in this paper that he published in the Journal of Statistical Software back in 2014.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=67)** And throughout this course, I'll refer back to the principles that Wickham outlined in this paper as it's considered one of the most important works in the field of data wrangling.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=76)** I encourage you to go back and read the paper yourself after you complete this course.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=81)** You'll find that it is full of examples that help illustrate the concepts of Tidy Data.
>
> **[1:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=85)** Now one quick word of warning.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=87)** The Tidyverse is rapidly evolving.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=89)** Some of the material that I cover in this course is more recent than that covered in the paper.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=95)** Converting data from its original format into Tidy form is difficult, time-consuming work, but why would we want to spend this time and effort required to create Tidy Data?
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=105)** Well, there were three reasons.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=107)** First, Tidy Data facilitates initial exploration and analysis.
>
> **[1:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=112)** If our data is in a standardized format, it's much easier to notice trends, anomalies and other important features of datasets.
>
> **[2:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=120)** Tidy Data also improves our ability to collaborate with others.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=124)** If our data is in standard formats, we can easily share it with other people who will then be able to quickly begin analyzing it without having to go through their own data wrangling work first.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=135)** Finally, if we convert our data to Tidy format, we can take advantage of many R packages that accept Tidy Data as input without performing additional transformations.
>
> **[2:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=145)** That sounds great, right?
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=147)** But the trick is that while Tidy Data has a consistent format, you'll need to figure out how to convert your existing data into that format.
>
> **[2:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=156)** Wickham summed it up best in his paper by quoting Tolstoy, who said, "Happy families are all alike, "but every unhappy family is unhappy in its own way."
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=168)** Wickham drew the parallel to Tidy Data by saying Tidy Data are all alike, but every messy dataset is messy in its own way.
>
> **[2:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=177)** Your job in wrangling data is to develop an understanding of your unique datasets and figure out how to use data manipulation tools in R to properly structure it as Tidy Data.
>
> **[3:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=190)** Once you've done that, a whole world of data analysis tools becomes available to you.
>
> **[3:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=195)** Tidy Data unlocks a set of tools known as the Tidyverse.
>
> **[3:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=200)** Now the Tidyverse consists of a set of R packages that work together to transform, analyze and visualize Tidy Data.
>
> **[3:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-is-tidy-data?u=76281980&t=208)** The Tidyverse packages can easily share data among each other and they allow you to quickly take advantage of the power of R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (36), [[Microsoft Word|Word]] (1), parallel (1), [[Data Manipulation]] (1), power (1)
> **Definitions:** known as (3), is a  (1)
> **Prerequisites:** required to (1), you'll need (1)
> **CLI Commands:** find (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Variables, observations, and values
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=0)** - [Instructor] Datasets come in many forms, and our job is to transform them using the standard principles of tidy data.
>
> **[0:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=7)** Take a look at this dataset that Hadley Wickham provided in his paper.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=11)** This dataset describes the results of a medical experiment.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=14)** In this experiment, there were three different patients, John Smith, Jane Doe and Mary Johnson.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=21)** There were also two different treatments: treatment A and treatment B.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=25)** The experimenters tried both treatments with Jane and Mary, but only treatment B with John.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=31)** The results of all of these treatments appear in this table, which puts experiments in columns and people in rows.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=38)** We could also take the same data and display it a different way.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=42)** This table gives the same results, but puts people in columns and experiments in rows.
>
> **[0:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=49)** These two tables illustrate the need for tidy data.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=52)** Both of these tables are correct.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=54)** There isn't any data in here that's made up or erroneous.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=57)** But both tables present the data in different ways.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=61)** Tidy data uses three terms to describe the data that we structure.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=66)** Variables measure some underlying attribute of the entity that we're measuring.
>
> **[1:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=70)** For example, if we're measuring people, variables might be their height, weight and blood pressure.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=76)** Observations are the collections of all of the variable measurements related to a single entity, normally at a single point in time.
>
> **[1:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=83)** For example, we might record a person's height, weight, and blood pressure on Tuesday.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=87)** That would be a single observation.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=89)** If we measured that same person's vital statistics again on Thursday, that would be a second observation.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=96)** Values are the intersection of a variable and an observation.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=100)** For example, the value of my height on Tuesday might be 70 inches.
>
> **[1:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=104)** Now let's return to Wickham's medical treatment data.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=107)** You already saw two different ways that we could arrange this data.
>
> **[1:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=110)** Now let's transform that data into a tidy format.
>
> **[1:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=113)** Now I'll explain how we determine tidy format and perform the transformation in a little bit.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=117)** For now, just know that this is the tidy representation of the dataset.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=122)** We've organized our data so that each treatment applied to a single person appears in a row.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=128)** Using the language of tidy data, this dataset now has three variables: name, treatment type and result.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=136)** And there are also six observations recorded in the dataset.
>
> **[2:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=139)** We have a single observation for each combination of person and treatment type.
>
> **[2:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=145)** Jane received treatment A and the result was 16, that's one observation.
>
> **[2:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=150)** When she received treatment B, the result was 11, that's a second observation.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=155)** Now you might notice that we have a strange observation here.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=158)** John has a blank result for treatment A and we might not be sure what to make of this.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=163)** Does it mean that John didn't receive treatment A so there was no observation?
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=167)** If that was the case, we should probably delete this value.
>
> **[2:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=170)** However, that's not what happened here.
>
> **[2:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=172)** Actually, John did receive the treatment, but it wasn't possible to measure results.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=176)** So we have a null value in the dataset.
>
> **[2:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=179)** We'll talk more about those null values later on in the course.
>
> **[3:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=183)** Now finally, we have 18 values in this dataset.
>
> **[3:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=187)** Each observation consists of three values corresponding to each of our three variables.
>
> **[3:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=193)** The reason I chose to arrange the data in that way is that it follows the three principles of tidy data that we'll be using throughout this course.
>
> **[3:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=200)** First, each variable forms a column.
>
> **[3:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=203)** We talked about that earlier.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=204)** Our variables here are name, treatment, and result, and they are arranged in columns.
>
> **[3:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=210)** Second, each observation forms a row and we have six rows here, each corresponding to the observation of a single treatment applied to a single patient.
>
> **[3:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=220)** Now the third rule of tidy data might sound a little confusing.
>
> **[3:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=223)** It says that each type of observational unit forms a table.
>
> **[3:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=227)** All this means is that we group related data together into a single table.
>
> **[3:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=232)** If we also went out and performed weather measurements and wanted to incorporate those into our dataset, we wouldn't put them in this table.
>
> **[3:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=239)** We'd create a new table for it because weather data is a separate type of observational unit.
>
> **[4:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=244)** You now have a working knowledge of the terminology of tidy data.
>
> **[4:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=248)** Our datasets are made up of variables, observations and values.
>
> **[4:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/variables-observations-and-values?u=76281980&t=252)** When we build tidy datasets, we have to ensure that each variable is a column, each observation is a row and each observational unit is in a single table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), [[Forms]] (4), [[Statistics]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### Common data problems
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=0)** - [Instructor] Now that you have some exposure to the basic concepts of tidy data, let's spend some time talking about common problems that appear in untidy datasets.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=9)** I'm going to cover the basic issues that arise and then give you a conceptual idea of how to solve each of them.
>
> **[0:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=15)** We won't dive into the R code to resolve these situations just yet, but we're going to get there later in the course.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=21)** In his paper on tidy data, Hadley Wickham groups data problems into five categories, and we'll use those same categories in this course.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=29)** The first one is datasets where the column headers contain values instead of variable names.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=35)** The second is datasets that store multiple variables in a single column.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=40)** The third is datasets that store variables in both rows and columns.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=45)** The fourth is datasets that store different types of observational units in the same table.
>
> **[0:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=50)** And then the final one is datasets where a single observational unit is spread across multiple tables.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=57)** Let's take a look at each one of these problems in more detail.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=60)** First, you know from the concepts of tidy data that columns should contain variables.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=65)** Therefore, it makes sense that the column header would contain a variable name.
>
> **[1:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=70)** One common issue with datasets is that column headers might contain actual values instead of variable names, and this has the end result of spreading what should be a single variable across multiple columns, and makes it very hard to analyze the data.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=84)** Here's an example of a dataset that has this problem.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=87)** Wickham pulled this table from a study done on data gathered by the Pew Research Center studying religion in America.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=93)** As you can see, the table seeks to display data about the individual incomes of people who affiliate themselves with different faith traditions, or no religion at all.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=103)** Each row in the table corresponds to one religion.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=106)** For example, this row shows the income of people in the study who self-reported as Buddhist.
>
> **[1:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=112)** The columns count the number of people from the study who fall into each income range.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=117)** For example, this column shows the religious affiliations of individuals earning between $40,000 and $50,000 a year.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=124)** Now, this is a very common way to present data, but it's very difficult for a statistical package like R to ingest and analyze data in this form.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=133)** Remember the three rules of tidy data from earlier in this course: Each variable in a dataset should form a column, and we don't really have that here.
>
> **[2:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=142)** Instead, we have a single variable, income, spread across multiple columns.
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=147)** The second rule is that each observational unit should form a row.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=151)** Now, that checks out.
>
> **[2:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=152)** I consider each religion as an observational unit.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=155)** So we're okay there.
>
> **[2:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=156)** Remember, there are multiple ways that you can think about observational units.
>
> **[2:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=161)** And then the third rule is that each type of observational unit forms a table.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=165)** This is all data about religion and income, so we're okay there as well.
>
> **[2:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=169)** So how do we fix this dataset?
>
> **[2:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=171)** Well, let's transform it a little bit.
>
> **[2:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=173)** Look at this new form of the same data.
>
> **[2:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=175)** Now, it's abbreviated on the screen here.
>
> **[2:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=177)** So we're not looking at the entire set, but just enough to give you the idea.
>
> **[3:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=181)** In the tidy form, we now have only three columns: Religion, income and frequency.
>
> **[3:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=188)** This version of the table uses the combination of religion and income level as an observation, and then shows us a single variable, frequency, that counts the number of people with those two characteristics.
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=199)** This is an example of tidy data.
>
> **[3:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=202)** Now, it might look more difficult to interpret the data in this format, and it is for the human eye, but it's much easier for R to work with data in this standardized form.
>
> **[3:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=212)** Now let's turn our attention to another common data problem: Storing multiple variables in a single column.
>
> **[3:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=220)** Here's another example dataset from Wickham.
>
> **[3:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=223)** In this case, we're looking at cases of tuberculosis in different countries by year, age and gender of the patient.
>
> **[3:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=230)** For example, this small portion of the dataset tells us that in the year 2000, Afghanistan experienced 52 cases of TB in boys between the ages of zero and 14.
>
> **[4:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=242)** And you can probably see immediately that this dataset has the same problem that we saw in the last dataset: We're spreading variables across multiple columns.
>
> **[4:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=251)** So let's start by quickly fixing that the same way we did with the religion dataset.
>
> **[4:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=256)** In this new version of the dataset, we have four columns: Country, year, this strange column they just called column for now, and the number of cases of TB.
>
> **[4:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=267)** If I think about this dataset according to the tidy data rules, each row does contain an observational unit, and the table is about a single observational unit, but I have an issue with this rule about a single column containing a single variable.
>
> **[4:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=282)** The country column does contain countries, so that's okay.
>
> **[4:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=285)** The year column contains years, and the cases column contains the number of cases of TB.
>
> **[4:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=290)** But this middle column here is a mess.
>
> **[4:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=293)** It contains both gender and age.
>
> **[4:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=296)** That's two variables stuffed into a single column with odd values like M 65 for men over the age of 65.
>
> **[5:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=304)** I can fix this problem rather easily by splitting the column into two pieces.
>
> **[5:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=309)** I do this by taking the first letter and putting it into a column called sex, and putting the age information into a column called age.
>
> **[5:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=316)** Now this data is in tidy format.
>
> **[5:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=320)** Let's now turn our attention to a third problem: Storing variables in both rows and columns.
>
> **[5:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=326)** Here's another dataset from Wickham.
>
> **[5:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=328)** This one contains weather data for Mexican weather stations.
>
> **[5:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=331)** Now, it's a little complex to read at first, so let's pick this apart together.
>
> **[5:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=336)** Look at this section here that I've circled.
>
> **[5:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=338)** These two rows contain data from a single weather station, MX17004, during February, 2010.
>
> **[5:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=346)** The top row contains information about the maximum temperature recorded each day of that month, while the bottom row contains the minimum temperature.
>
> **[5:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=355)** The columns that start with D represent the days of the month.
>
> **[5:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=358)** So this data element that I've just circled tells us that the maximum temperature at this weather station on February 2nd, 2010 was 27.3 degrees.
>
> **[6:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=369)** Now, this dataset is a mess.
>
> **[6:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=371)** We have a date variable that's spread across rows and columns, and then we have data from the same temperature observation in different rows.
>
> **[6:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=379)** Let's try cleaning this up in stages.
>
> **[6:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=382)** First, I'm going to get the date information cleaned up and put this table in a form where we have a single row for each combination of date, weather station and measurement type.
>
> **[6:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=392)** That's already a lot easier to handle, but this dataset still uses multiple rows for the same observational unit.
>
> **[6:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=398)** Maximum and minimum temperatures in a location during the course of the day are really two data points about the temperature that day.
>
> **[6:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=406)** To complete the tidying of this dataset, I'm going to combine the rows that relate to the same location and date to put the maximum and minimum temperatures in the same row.
>
> **[6:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=415)** There we go.
>
> **[6:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=416)** That's tidy data.
>
> **[6:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=418)** The final two problems are less technical to understand.
>
> **[7:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=422)** First, we often see datasets where different observational units are in the same table.
>
> **[7:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=427)** For example, if we had a table that contained both the weather station readings and the TB data in a single table, that's not tidy.
>
> **[7:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=434)** And then the final problem occurs when we have a single observational unit in multiple tables.
>
> **[7:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=440)** For example, if that weather dataset that we looked at had different tables for each month, that wouldn't be tidy, and we'd want to combine them together to make analysis easy.
>
> **[7:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=448)** Now we've covered a lot of the issues associated with untidy data, and I've shown you conceptually how to solve them.
>
> **[7:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/common-data-problems?u=76281980&t=454)** Later in the course, we'll revisit these problems and learn how to correct them in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (26), [[Forms]] (1)
> **Analogies:** for example (5)
> **Cross-References:** later in (2), earlier in (1), in the last (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** mx17004 (1)
> **Versions:** 27.3 (1)
> **Speakers:** - [instructor] (1)

#### Using the tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=0)** - [Instructor] The tidyverse is a collection of R packages that help you easily work with tidy data.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=6)** Now, the tidyverse is always evolving.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=8)** The contents of the tidyverse change as developers add new packages.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=13)** I encourage you to take a moment to visit the tidyverse website and review the current components of the tidyverse.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=18)** These icons at the top of the screen each reference different components of the tidyverse, and if you click on one, it will take you to more information about that package.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=28)** So let's talk about a few of the most important components of the tidyverse.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=32)** The tibble package provides you with the tools you'll need to replace R's concept of data frames with a new data structure called tibbles that form the core of the tidyverse.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=42)** I'll talk more about tibbles in the next video.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=45)** The readr and readxl packages provide you with the ability to easily import and export data into R.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=51)** That's a key component of data wrangling, and I'll discuss it in detail in the "Importing Data Section" of this course.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=57)** Dplyr and tidyr are data manipulation libraries that contain many of the functions that we'll use to resolve issues with data sets and convert them into tidy form.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=67)** Stringr is a string manipulation library that makes it easy to work with text, while lubridate does the same thing for dates and times.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=76)** Ggplot2 is a data visualization library that produces charts and other data visualizations that are easy to create and interpret.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=84)** Fortunately, you don't need to remember all of the components of the tidyverse or install them on one by one.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=91)** It's simple to install and update the entire tidyverse all at once.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=95)** Here I am in our RStudio.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=98)** RStudio is the most popular development environment for programmers working in R.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=102)** If you don't already have R and RStudio installed on your system, you can visit [RStudio.com](https://RStudio.com) to download them for free.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=109)** I don't cover installing RStudio in this course, but you can find assistance installing it in the "Data Science with R" course on this site.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=117)** Here's how simple it is to install the tidyverse.
>
> **[1:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=119)** I'm at the console and I'm just going to type in the command install.packages and then in quotes, "tidyverse".
>
> **[2:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=130)** And away it goes!
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=131)** Now, this is going to take a few minutes to finish, depending upon the speed of your computer and your internet connection.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=137)** You may also see some errors fly by during installation.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=140)** Some of these may occur if a particular site that stores the tidyverse files is unavailable, but the installer will just try another site and continue on.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=148)** Just be thankful as all of these commands are flying by that you didn't have to do all of this yourself.
>
> **[2:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=153)** (no audio)
>
> **[2:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=164)** And you'll finally see this message that tells you the location of the downloaded binary packages.
>
> **[2:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=170)** The tidyverse is now installed on my computer and the next thing I need to do is load the library when I'd like to use it.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=176)** I can do that using the command library(tidyverse).
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=182)** Notice that I didn't put tidyverse in quotation marks, like I did for the install packages command.
>
> **[3:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=187)** That's just a quirk of R.
>
> **[3:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=188)** The install packages command requires quotation marks, while the library command does not.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=194)** Now, I did get a couple of messages here about conflicts between two packages in dplyr that mask, or have the same names, as two packages in stats.
>
> **[3:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=202)** We don't have to worry about those.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=204)** This is a normal thing to happen when you install and load the tidyverse.
>
> **[3:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=208)** At this point, the tidyverse is loaded and ready to go, so let's give it a try.
>
> **[3:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=212)** Remember, one component of the tidyverse is the ggplot2 visualization package.
>
> **[3:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=217)** That package has a function called qplot that I can use to generate a quick plot.
>
> **[3:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=221)** Let me use R's built-in mtcars dataset to make a quick scatter plot with qplot.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=226)** I'm going to call qplot, I'm going to plot horsepower on the X axis and miles per gallon on the Y axis using the mtcars dataset.
>
> **[4:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=240)** Now, don't worry about the details of that command.
>
> **[4:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=242)** I just wanted to demonstrate that the tidyverse is loaded and ready to run.
>
> **[4:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=246)** And one last thing, the tidyverse is frequently updated and you should remember to update your copy.
>
> **[4:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=252)** You can do that using the tidyverse update command.
>
> **[4:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=255)** I'll run that here at the console.
>
> **[4:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=257)** (no audio) Now, of course, I just installed the tidyverse a few minutes ago, so I get the message that all tidyverse packages are up-to-date, but running this command will update all of the packages in the tidyverse, and it's something you should do periodically.
>
> **[4:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/using-the-tidyverse-25311500?u=76281980&t=276)** That's all there is to installing the tidyverse on your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[RStudio]] (5), next (2), [[Data Manipulation]] (1)
> **Prerequisites:** install (7), you'll need (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1), make (1)
> **URLs:** [rstudio.com](https://rstudio.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Best Practices:** remember to (1)


### 2. Working with Tibbles

[↑ Back to Table of Contents](#table-of-contents)

#### Building and printing tibbles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=0)** - [Lecturer] Tibbles are like core data structure of the tidyverse.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=3)** And we use them to facilitate the display and analysis of information in tidy format.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=9)** If you've used R in the past, you're already familiar with the concept of a data frame.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=14)** Data frames are the most common data structure used to store complex data sets in base R.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=19)** They allow analysts to combine variables of different data types into the same data structure for ease of analysis.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=26)** Tibbles have a few advantages over data frames that make them much easier to use.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=31)** First, all tidyverse packages are designed to use tibbles for both input and output where applicable.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=37)** This standardized data format makes it easy for our developers to string together functions from different packages, without having to perform intermediate data conversions.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=47)** Second, tibbles include functionality that makes it much easier to print and display output than with basic data frames.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=53)** I'll show you that in more detail in just a moment.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=56)** Third, tibbles don't make the assumptions that you commonly find when creating data frames.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=60)** For example, if you've created data frames before, you might know that data frames, often convert character strings to factors, and analysts often have to override the setting.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=69)** Tibbles don't try to make those conversion automatically, they also don't mess with your variable or row names as data frames tend to do.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=77)** I want to introduce you to three different ways that you can create tibbles.
>
> **[1:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=80)** First, you can use the as_tibble function to convert an existing data frame to a tibble.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=86)** If you already have data in R, and you're just moving to the tidyverse, you'll probably create tibbles this way.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=92)** Second, you can use the tibble function to build your own tibble from scratch.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=97)** Third, you can use the tidy versus data import packages to create tibbles from external data sources, such as CSV files or databases.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=105)** I'll cover those in the next chapter of this course.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=109)** Now, let's take a look at how we can build tibbles using the first two approaches in R.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=114)** For now, I'm just going to work with some of the data sets that are built into R as examples.
>
> **[1:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=119)** In the next section of this course, I'll show you how to pull your own data sets into R, and work with them in tibbles.
>
> **[2:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=125)** R contains a data set called CO2, that contain some data about carbon dioxide uptake in some green plants.
>
> **[2:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=132)** You can take a look at this data stored in a data frame by simply typing CO2 at the console.
>
> **[2:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=139)** Now, you might not be familiar with this data, and the contents aren't that relevant.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=143)** If I scroll back up here, I can see that we have a series of variables, a plant, a type, a treatment that was applied to it, a concentration number and an uptake number.
>
> **[2:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=153)** Now, this isn't really that important to me what all of these variables actually mean, I'm just using this as a data set for exploration.
>
> **[2:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=161)** Now, let me try converting this to a tibble.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=163)** I'll create a tibble called CO2_tibble, and I'll do that by applying the as_tibble function to the CO2 dataset.
>
> **[2:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=173)** And I get no response here on the console, but I can see over in the environment pane, that I now a CO2_tibble object created.
>
> **[3:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=183)** I can view the contents of this tibble by typing in its name, CO2_tibble.
>
> **[3:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=191)** Now, notice a few things here.
>
> **[3:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=193)** First, R tells me that this is a tibble, then it shows me its size 84 by 5, but it doesn't print the entire tibble, so it easily fits this portion on the screen, and it also tells me the data types.
>
> **[3:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=207)** Now, let's say that I want to print more than this default 10 rows, I can use the print function to customize how my tibble appears on the console.
>
> **[3:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=215)** Let's first just apply the print function to the tibble.
>
> **[3:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=220)** When I do that, I get the same output that I saw before.
>
> **[3:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=223)** But, if I add the argument and equals 20, now I get 20 lines.
>
> **[3:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=228)** And if I wanted to see the entire dataset, I can put n=Inf for infinity, and the entire dataset is displayed.
>
> **[3:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=236)** I can also build my own tibble from vectors.
>
> **[3:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=239)** Let me start by just creating a few vectors that I can work with.
>
> **[4:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=242)** I'm going to build a vector called name by using the C function, and then supplying a list of names.
>
> **[4:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=250)** We'll use Mike, Renee, Matt, Chris and Ricky.
>
> **[4:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=257)** Next to build a vector of birth years called birthyear, and we'll say that these people were born in the year 2000, 2001, 2002, 2003 and 2004.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=270)** And then finally a vector of eye colors.
>
> **[4:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=274)** And we'll say these people have eyes that are blue, brown, hazel, brown and blue.
>
> **[4:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=286)** Now, I can use the tibble function to create a tibble called people from these three vectors.
>
> **[4:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=294)** And if I print this tibble, I can see that it's ready for use.
>
> **[4:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/building-and-printing-tibbles?u=76281980&t=299)** Those are the basics of building and printing tibbles in R using the tidyverse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (28), next (3), [[Databases]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** co2 (3), csv (1)
> **Code Identifiers:** as_tibble (2)
> **Cross-References:** in the next (2)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### Subsetting tibbles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=0)** - [Instructor] Analysts often need to extract a single variable from a tibble for further use in their analysis.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=5)** This is an observation called subsetting.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=8)** When we subset a tibble, we extract a single variable from that tibble in the form of a vector.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=13)** We can do this without actually storing separate vectors in R by using a few special operators.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=19)** The first way that we can do this is using the dollar sign operator.
>
> **[0:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=23)** You simply type the name of the tibble, then the dollar sign, then the name of the variable that you'd like to extract.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=29)** For an example, let's return to R.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=31)** Here, I have RStudio still set up the way we left it in the last video.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=35)** I have the people tibble that contains the name, birth years and eye colors of five people.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=40)** Let's say I just want to see the list of eye colors without any of the other data.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=44)** I can type in people, dollar sign, eye color, and then I get that vector.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=52)** I can also use this vector inside of other functions.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=55)** For example, let's say that I want to see only the list of unique eye colors without any duplicates.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=60)** I can do that by using the unique function and supplying it with the argument people, dollar sign, eye color.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=66)** And then I get back a list of the three unique eye colors that appear in that data set.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=71)** The second way that I can subset tibbles is by using square bracket operators.
>
> **[1:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=75)** Now this method is a little more complicated to type and look at, but it does have one advantage over the dollar sign approach.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=81)** I can use either the variable name or its numeric position in the tibble when using square brackets.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=87)** For example, I can access the eye color vector just like I did with the dollar sign by using the square bracket syntax.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=93)** I type people, and then two opening square brackets, and then eye color in quotations.
>
> **[1:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=101)** Or since I know that eye color is the third element in this tibble, I can use people and then put the number three inside a double set of square brackets.
>
> **[1:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/subsetting-tibbles?u=76281980&t=110)** Now subsetting tibbles isn't difficult, but it is one of the core operations that you'll need to be able to perform in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[RStudio]] (1)
> **Analogies:** for example (2), just like (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Filtering tibbles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=0)** - [Instructor] Filtering provides you with a way to reduce the number of rows in your tibble.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=5)** When performing filtering, an analyst specifies some criteria that are used to reduce the number of rows in a dataset.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=11)** For example, you might specify that you would only like to include the records from a dataset corresponding to females, fitting within a certain date range, or exceeding a threshold value.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=21)** If you're already familiar with filtering in R using the filter function, it works the same way with both tibbles and data frames.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=27)** You can simply call the filter function, provide it with the name of the tibble, and then the set of one or more conditions that the filter should use to filter the data set.
>
> **[0:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=36)** Let's take a look at how we can use the filter function in R.
>
> **[0:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=39)** Now, I still have the people tibble that I created earlier in this section loaded and ready to use.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=44)** Recall that it contains information about five people.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=48)** And let's say that I want to filter this tibble to only include people with blue eyes.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=52)** I can use the filter function applied to the people dataset, and then the argument eyecolor == "blue" When I do that, I get only the two rows, Mike and Ricky, for individuals who have blue eyes.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=68)** Now it's important to understand, the filter function doesn't alter the tibble that you supply to it, it only filters the results and provides those as output.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=76)** If I reprint the people tibble here, I can see that it still contains all five observations.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=82)** If I want to save the filter tibble for future use, I have to assign it to a new tibble.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=87)** I can do that by taking my original command, and then assigning it to a new name.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=92)** So, let's call this one blueeyes.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=97)** Now if I look at the blueeyes tibble, it has only those rows that came out of the filter function.
>
> **[1:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=104)** I can filter tibbles based on many criteria.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=106)** For example, let's say that I want to show only people who were born after the year 2002.
>
> **[1:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=111)** I can run the filter function, applying it to the people dataset, and then say, I only want birth year greater than 2002.
>
> **[1:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=118)** And that shows me the two people born after 2002.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=122)** I can also combine multiple criteria.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=124)** Let's say I want to list of people who have blue eyes, or were born after 2002.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=129)** I can combine these criteria by using the pipe symbol, which indicates the "or" operator.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=135)** I'm going to type filter, people, and then give it those two arguments.
>
> **[2:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=139)** eyecolor=="blue", or birthyear is greater than 2002.
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=147)** That gives me three people.
>
> **[2:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=149)** Mike and Ricky both have blue eyes, and Chris and Ricky were both born after the year 2002, so I get those three results in my dataset.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=158)** I can use the ampersand as an "and" function.
>
> **[2:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=161)** So, let's say I wanted people who were born after 2002 and have blue eyes.
>
> **[2:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=166)** I can just take my command here and change that pipe, which means "or," to an ampersand that means "and."
>
> **[2:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=172)** And then I get only one result, Ricky, who was born after 2002 and has blue eyes.
>
> **[2:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-tibbles?u=76281980&t=178)** Those are the basics of how you can filter tibbles in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Analogies:** for example (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)


### 3. Importing Data into R

[↑ Back to Table of Contents](#table-of-contents)

#### What are CSV files?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=0)** - [Presenter] Data scientists are often called upon to perform analysis on data stored in many different kinds of files in databases and on the web.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=9)** In these next few videos, I'll show you how you can import data from each of these environments and use it in your R code.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=16)** Let's begin with a file format known as Comma-Separated Values or CSV files also known as comma delimited format, CSV files match the standard format of a spreadsheet but place all the information in a text file that may be read by any program including a text editor.
>
> **[0:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=34)** Each line in a CSV file is a row or an observation in our tidy data language.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=40)** Now text files don't have columns.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=42)** So the CSV file uses commas to separate data that would appear in different columns.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=47)** So each row in a CSV file consists of the attribute values belonging to a single observation separated by commas.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=55)** For example, take this simple spreadsheet that shows the names, ages, genders and zip codes for a group of three people.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=62)** The file is formatted in a fairly standard way.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=65)** Each person has their own row in the table and each table column corresponds to a single variable.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=71)** If we wanted to transform this spreadsheet into a CSV file, we simply take away the table boundaries and replace them with commas.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=79)** This CSV format may then be stored in a simple text file instead of a proprietary spreadsheet format.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=86)** And here's an example of a more complex CSV file.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=89)** This particular file contains the results of restaurant inspections conducted by the city of Chicago.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=94)** It has over 140,000 lines and we're just looking at the first view here.
>
> **[1:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=99)** In this particular case, the first row contains the names of the attributes where each of the remaining rows in the file represents a single observation.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=108)** In this case, an observation is a single restaurant inspection.
>
> **[1:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=113)** Now there's one other thing I want to point out while we're looking at those file.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=117)** Sometimes data in a field might contain a comma.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=121)** Let's switch here to another window where I have one line of the file shown.
>
> **[2:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=126)** This record represents the inspection of a restaurant called steak bar.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=131)** Notice this field here that contains the listing of comments that the restaurant received during the inspection, this field contains commas and several places.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=140)** Now, if we just put that field in the file as is, any program trying to read the CSV file would be confused by the commas within the field, thinking that they marked the boundaries of new fields.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=151)** Now we can correct this by enclosing fields that contain commas inside of either single or double quotation marks.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=157)** So that gives you a quick understanding of how CSV files are formatted.
>
> **[2:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=161)** CSV files are one of the most common formats that you'll encounter counter because almost every program can read them.
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-csv-files?u=76281980&t=168)** There are the defacto standard for sharing data between systems and applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Databases]] (1), web (1), next (1)
> **Env Vars:** csv (11)
> **Definitions:** known as (2), is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Importing CSV files into R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=0)** - [Instructor] Data scientists often need to import CSV files from the web or their local systems into R.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=6)** In R, the Tidyverse includes a function called read_csv that allows you to import CSV files.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=14)** You can just give this function a file name and run it, and R will do its best to read in your file.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=19)** So let's give that a try by reading in the Chicago restaurant inspection file that I showed you in the last video.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=26)** As a quick reminder, here's what that file looks like.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=29)** It contains the results of over 140,000 restaurant inspections with each line representing a single inspection.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=37)** Let's try loading that into R.
>
> **[0:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=39)** I'm going to begin a new R script by loading the Tidyverse.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=46)** And each time I type a line, I'm going to use the run button to execute that line.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=51)** And now I'm going to try reading in the file.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=54)** I'd like to store it in a tibble called inspections, and I'm going to populate that tibble with the read_csv function and then I'm going to give it the location of a file.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=63)** Now, if you've downloaded all of the data sets from the exercise files, you can just read it from your local system by providing the path to the file, or if also stored these files on the web.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=73)** And you can provide read_csv with either a path to a file stored on your local system or a URL to a file.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=79)** So you can use the same URL that I'm using.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=82)** It's [HTTP://594442.youcanlearnit.net/inspections.csv](https://HTTP://594442.youcanlearnit.net/inspections.csv).
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=95)** When I run this command it reaches out over the web, downloads this file, and loads it into an inspections tibble.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=102)** Now the file's a little large, so it might take a minute or two to load on your system.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=106)** I can take a look at the contents of this tibble by using the glimpse command on the name of the tibble inspections.
>
> **[1:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=112)** And when I do this, I can see that the data's been loaded.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=116)** It actually looks pretty good here.
>
> **[1:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=118)** I can see that R has chosen data types for the variables and these choices look reasonable.
>
> **[2:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=123)** Now, if I scroll back up above the glimpse command, I can see that R actually told me it was making these assumptions and it informed me of the different data types that it was using for each variable.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=133)** Now, the one thing that I don't like is these variable names that have spaces in them.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=138)** Spaces make variable names hard to work with and I prefer camel case variable names where the first letter of each word is capitalized.
>
> **[2:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=145)** I just find that easier to read.
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=147)** So let's take a look at the help page for the read_csv function.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=151)** I can access that at the console by just typing in question mark, read_csv.
>
> **[2:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=159)** If I scroll through this help page, I can see that the read_csv function actually has a whole lot of arguments that I can use to customize how my file is read in.
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=168)** Now I'm interested in naming columns and I can see here that there's an argument call, col_names.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=176)** The equals true part of this description means that if I don't specify a value for column names R will use the default value of true.
>
> **[3:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=183)** Now, I don't know what that means.
>
> **[3:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=185)** So I'm going to scroll down and find the description of column names later in this file.
>
> **[3:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=190)** Down here, under col_names I can see that the values for this argument can be either true, false, or a character vector of column names.
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=199)** If it's true, the first row of the input will be used as the column names and that first row will not be included in the data frame.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=206)** If it's false, R is going to make up column names, X one, X two, X three, and so on.
>
> **[3:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=211)** Or if I supply a character vector, those values will be used as the names of the columns.
>
> **[3:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=216)** And then the first row of the data file will be the first row of data that's stored in the tibble instead of being the column names.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=222)** Now, because earlier it said column names equals true is the default value, R when you load in a file using read_csv, will assume that the first row of the file contains the column names, unless you tell it otherwise.
>
> **[3:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=236)** Now I'd like to create my own column names for this data set.
>
> **[4:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=240)** So I'm going to go ahead and use that character vector approach.
>
> **[4:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=243)** I'm going to create a character vector called names, and I'm going to include in it, the names of all these variables, the names that I would like to use.
>
> **[4:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=251)** So I'm going to use ID, DBAname, AKAname, license, facility type, risk, address, city, state, zip,
>
> **[4:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=274)** inspection date, inspection type,
>
> **[4:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=282)** results, violations, latitude, longitude, and location.
>
> **[4:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=297)** So that's my vector of names.
>
> **[4:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=299)** And the next thing I'm going to do is supply that to the read_csv command.
>
> **[5:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=303)** So I'm just going to start with the command that I already had.
>
> **[5:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=305)** I'm just going to copy and paste that.
>
> **[5:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=308)** And then I'm going to add another argument after the name of the file that I'd like to download, and it's going to be col_names equals, and then this vector that I had just created called names.
>
> **[5:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=319)** Now let's go ahead and run that.
>
> **[5:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=324)** And again, it'll take a minute to download the file and read it in.
>
> **[5:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=328)** And we're going to use the glimpse command again to take a look at the results.
>
> **[5:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=333)** Now, my variable names have changed to the names that I've specified, but now I have a new problem.
>
> **[5:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=339)** Because I provided the variable names, R now didn't use the first line of the file as variable names.
>
> **[5:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=345)** Instead it read that line in as an observation.
>
> **[5:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=348)** And if you look at the first value for each variable, that value contains the name of the variable.
>
> **[5:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=352)** That's not what I want.
>
> **[5:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=355)** Let me go back over here and at the documentation for read_csv again.
>
> **[6:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=360)** Now there was an argument called skip.
>
> **[6:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=363)** And if I go and look at the details of that argument, it says the number of lines to skip before reading data.
>
> **[6:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=369)** That's exactly what I want to do.
>
> **[6:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=370)** I want to skip the first line.
>
> **[6:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=372)** So I'm going to try reading this in again, I'm just going to copy and paste my read_csv command.
>
> **[6:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=378)** I'm going to add at the end, skip equals one, telling R that I'd like to ignore the first line of the file.
>
> **[6:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=385)** When I run it this time and then use the glimpse command to take a look, I can see that my data has now been correctly read into R.
>
> **[6:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-csv-files-into-r?u=76281980&t=395)** That's how you can read a CSV file into an R tibble.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), web (3), [[Microsoft Word|Word]] (1), next (1)
> **Code Identifiers:** read_csv (10), col_names (3)
> **Env Vars:** csv (3), url (2), http (1)
> **CLI Commands:** make (2), find (2)
> **Cross-References:** in the last (1), later in (1)
> **Exercise Files:** exercise files (1), download the (1)
> **File Paths:** 594442.youcanlearnit.net/inspections.csv (1)
> **URLs:** [http://594442.youcanlearnit.net/inspections.csv](http://594442.youcanlearnit.net/inspections.csv) (1)

#### What are TSV files?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=0)** - [Instructor] Now let's turn our attention to another common file format.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=3)** The tab-separated values or TSV file.
>
> **[0:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=7)** As you might guess from the name, TSV files are extremely similar to CSV files, except they use tabs instead of commas to separate the fields.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=16)** Now there's nothing inherently better or worse about using tabs instead of commas, it's just different and you'll need to handle it differently in R.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=25)** Here's an example of a TSV file.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=27)** We're looking at a file contains about 160,000 records gathered from the US government's Center for Medicare and Medicaid services.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=35)** It contains information about the average cost of 130 different medical services at different providers around the country.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=43)** Look, for example, at the first line here, it's telling us that if you're having one of these extracranial procedures and you're at the Southeast Alabama Medical Center, you can expect that they will bill somewhere in the vicinity of $33,000.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=57)** The next line shows us the same procedure is about half the price at the Marshall Medical Center.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=62)** And that's important information.
>
> **[1:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=64)** And you can imagine that a data scientist might be interested in analyzing the thousands of records in this file.
>
> **[1:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=70)** Now, if you look at the way this file is laid out, you can sort of tell there are tabs in here separating the fields because of the way that they're spaced.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=77)** The tabs just look like a bunch of spaces, but they're there in the file.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/what-are-tsv-files?u=76281980&t=81)** You'll often find TSV files and exports from government agencies and other sources that you'll want to use for data analysis in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), next (1)
> **Env Vars:** tsv (4), csv (1)
> **Analogies:** similar to (1), for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Importing TSV files into R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=0)** - [Instructor] Let's now take a look at how to import a TSV file into your R environment.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=5)** In R, the tidyverse includes a function called read_tsv() that allows you to import tab-separated value files.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=13)** Just like with read_csv(), you can give read_tsv() a file name and run it and R will do its best to read in your file.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=20)** So let's give that a try by loading in the Medicare charge data file that I showed you in the last video.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=27)** I begin by loading in the Tidyverse library, and let's try reading in the file.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=33)** I'm going to call it Inpatient, and I'm going to load it using the read_tsv() function.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=40)** And my file name here is similar to the last one: It's [HTTP://594442.youcanlearnit.net/inpatient.tsv](https://HTTP://594442.youcanlearnit.net/inpatient.tsv)
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=55)** We'll load in that file and then we'll take a look at the results using the glimpse command.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=62)** Now, I can see already that we have a few things that we need to correct here.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=65)** Let's start with the variable names.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=67)** They all have those spaces in them that make them difficult to work with.
>
> **[1:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=70)** So I'm going to begin by just looking at the help page for the read_tsv() function.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=78)** And I can see here that read_tsv() has basically the same arguments that read_csv() had.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=84)** So I can specify the column names the same way.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=87)** I'm going to create a vector called Names and I'm going to fill in the names that I'd like to use for each one of these columns.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=94)** I'm going to use DRG, provider ID, name, address, city, state, zip, region, discharges, average charges, average total payments and average Medicare payments.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=129)** So those are the names I'd like to use.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=131)** And then just like I did with read_csv(), I'm just going to copy my line of code up here that read in the file and then I'm going to add the argument at the end, call_names equals the names of vector I just created.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=146)** And we'll go ahead and read in that dataset and take a look at it using the glimpse command.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=154)** Now, my variable names did change, but I have the same problem here that I had with the CSV file.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=158)** Since I provided the variable names, R didn't use the first line of the file as variable names, and instead it read it in as an observation.
>
> **[2:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=166)** I solve this the same way by telling the read_tsv() function to skip the first line.
>
> **[2:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=172)** Skip equals one.
>
> **[2:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=174)** And then we take another look at the file.
>
> **[2:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=177)** Now notice that R has made some decisions about data types for me because I didn't specify the data types explicitly.
>
> **[3:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=183)** Some of these are correct, such as treating names as character strings, while others don't seem quite right.
>
> **[3:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=188)** For example, the currency values are also character strings.
>
> **[3:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=193)** Instead of allowing R to make these decisions itself, I want to specify the data types to use with this file.
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=199)** I can do this by creating a string of letters that contains the abbreviation for the data types in the order they appear in the file.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=206)** Now, if I look at this table, I basically want all of these values to be character strings, except for the number of discharges and the currency amounts.
>
> **[3:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=214)** Things like zip codes and provider IDs might contain digits, but they don't really have any significance as numbers, so I'm going to leave them as character strings.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=222)** Now, let's ignore the currency values for a moment and try to read this in so that all of the data types are characters and only the discharges field is an integer.
>
> **[3:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=230)** Discharges is the ninth field.
>
> **[3:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=233)** So I'm going to create a string that I call types that begins with eight Cs for character strings and I for an integer, to read discharges in as an integer, and then three more Cs to read the currency values in as strings for now.
>
> **[4:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=251)** And if I look over here at read_tsv() again, I can see that there's the col types argument that I can use to specify the column types.
>
> **[4:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=260)** So I'm just going to copy and paste my last read_tsv() command.
>
> **[4:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=265)** And now I'm going to add another argument at the end, col_types equals, and then the types vector that I just created.
>
> **[4:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=275)** Now I can see that the dataset has been read in exactly the way I expected.
>
> **[4:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=279)** The first eight variables are character strings, the ninth one, discharges, is an integer, and then the last three are character strings again.
>
> **[4:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=287)** All right, now for those currency values.
>
> **[4:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=290)** Now, I know that currency values are decimal numbers.
>
> **[4:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=292)** So my first temptation is to read them in that way using the double-precision floating-point number type, which is represented using the letter D.
>
> **[5:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=300)** Let's try that.
>
> **[5:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=301)** I'm going to go up here and change the type string so the last three Cs are now Ds, and then I'm going to read that file in again.
>
> **[5:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=311)** Now, look at what I get: Almost 500,000 parsing failures.
>
> **[5:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=316)** It's telling me here that, in many cases, I expected a double and then I actually got the currency amount there.
>
> **[5:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=323)** So what's going on here is that R expects only decimal numbers when you use doubles, and the dollar signs are causing the parsing operation to fail.
>
> **[5:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=331)** Now, I can fix this by using the numeric data type instead, which is a little more forgiving and it's represented by N in my character string.
>
> **[5:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=339)** So I'm going to change these last three Ds to Ns, read in the file again, and now when I take a look at the results, the data has been read in properly.
>
> **[5:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=349)** I have eight character strings followed by an integer, followed by three double-precision floating-point numbers.
>
> **[5:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-tsv-files-into-r?u=76281980&t=355)** That's how you can import a tab-separated values file in R using the read_tsv() function from the Tidyverse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8)
> **Code Identifiers:** read_tsv (9), read_csv (3), call_names (1), col_types (1)
> **Analogies:** just like (2), similar to (1), such as (1), for example (1)
> **Env Vars:** tsv (1), http (1), drg (1), csv (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (2)
> **URLs:** [http://594442.youcanlearnit.net/inpatient.tsv](http://594442.youcanlearnit.net/inpatient.tsv) (1)
> **Cross-References:** in the last (1)

#### Importing delimited files into R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=0)** - [Instructor] Comma and tab delimited files are the most common formats used to exchange data between systems but they're not the only formats used.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=8)** As you work with other organizations and software packages, you'll encounter all sorts of interesting file formats.
>
> **[0:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=15)** Let's take a look at how you can import these files.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=18)** First, you might come across files that are delimited using characters other than commas or tabs.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=25)** For example, here's a file containing information on work stoppages in the United States gathered by the U.S. Bureau of Labor Statistics.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=33)** Each row contains the number of workers affected by a stoppage in a particular month.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=38)** As with other files we've looked at, in this case, the first row contains the names of the variables.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=43)** As you can see in the first line of this file, we have only three variables: the year, the month and the number of affected workers.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=51)** Notice, however, that we don't have commas or tabs separating these fields.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=55)** In this case, we have the caret character, which is the symbol obtained by pressing Shift + 6 on a standard American keyboard.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=63)** We can use the read_delim function from the tidyverse to read in files with any type of delimiter.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=69)** In fact, you've already used this function a few times without knowing it.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=73)** The read_csv and read_tsv functions actually call read_delim behind the scenes.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=79)** So let's try to read that file in using the read_delim function.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=82)** I first need to load the tidyverse library again.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=86)** And then I'm going to begin by looking at the help page for this function.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=91)** As I look at the arguments for read_delim, I see that there are two mandatory arguments.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=96)** Now, I know this because the first two arguments in this definition, file and delim, are simply argument names and they aren't followed by an equal symbol and a value.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=105)** The other arguments do provide these defaults.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=108)** For example, the fourth argument, escape_backslash, does have a default value of false.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=114)** So I know that I need to provide at least two arguments.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=116)** The name of a file and a delimiter.
>
> **[1:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=118)** So let's try writing that in R.
>
> **[2:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=120)** I'm going create a new table called stoppages.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=124)** And I'm going to populate it using the read_delim function and provide it those two arguments.
>
> **[2:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=130)** First, the file name, which in this case is going to be [http://594442.youcanlearnit.net/workstoppages.txt](http://594442.youcanlearnit.net/workstoppages.txt).
>
> **[2:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=145)** Then I have to provide the delimiter.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=148)** Delim equals, and in this case, the delimiter is that Shift + 6 caret character.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=155)** So let's go ahead and try to load this and then look at our dataset.
>
> **[2:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=161)** It looks like the data was parsed correctly and it would now be ready for analysis.
>
> **[2:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=166)** Now, remember earlier, I mentioned that the read_csv and read_tsv functions actually call the read_delim function.
>
> **[2:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=175)** You could read CSV and TSV files using read_delim if you wanted.
>
> **[3:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=180)** In an earlier video, I used this code to read in a CSV file using read_csv.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=186)** You could have also read that file using the read_delim function with the delim equals comma argument like this.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=194)** Similarly, I used this code to read in a TV file with read_tsv and you could use this call to read_delim to do the same thing.
>
> **[3:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=203)** The \t character used here is the way we represent the tab character in code.
>
> **[3:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-delimited-files-into-r?u=76281980&t=208)** You now have the knowledge necessary to import any delimited file into R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Statistics]] (1)
> **Code Identifiers:** read_delim (9), read_csv (3), read_tsv (3), escape_backslash (1)
> **Env Vars:** csv (2), tsv (1)
> **Analogies:** for example (2)
> **File Paths:** 594442.youcanlearnit.net/workstoppages.txt (1)
> **URLs:** [http://594442.youcanlearnit.net/workstoppages.txt](http://594442.youcanlearnit.net/workstoppages.txt) (1)
> **Speakers:** - [instructor] (1)

#### Importing fixed-width files into R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=0)** - [Instructor] Legacy systems often generate fixed-with files.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=4)** You may come across these files when you're working with historical data or working with an older system.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=9)** In an earlier video, I use this example spreadsheet to show how spreadsheets can be transformed into CSV files by simply replacing the table column separators with commas.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=20)** Fixed-width files, perform a similar transformation by removing the table rows and using spacing to separate columns.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=27)** In a fixed-width file, each column is a defined number of characters.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=32)** For example, a first name column might be 20 characters.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=35)** And in that case, the first name is always 20 characters.
>
> **[0:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=39)** If you have a first name, that's longer than 20 characters, the end is truncated so that it fits in the field.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=44)** If, as in most cases, the name is shorter than 20 characters, the file simply adds spaces to the end to make it 20 characters long.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=53)** Here's an example of a fixed-width file.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=55)** This file contains the names, titles, departments, and salaries of City of Chicago employees gathered from public records.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=63)** Notice that the fields line up perfectly that's because each field has a fixed width.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=68)** In this file the name is always exactly 32 characters, the title is 50 characters and the department is 24 characters.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=77)** Now the salary may vary in length, but it's always at the end of the line.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=82)** The Tidyverse provides the read_fwf function to read in fixed-width files.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=88)** Let's take a look at how we can read in the Chicago employee's data set in R.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=93)** First, I'm going to load the Tidyverse, and then I'm going to take a look at the help page for the read_fwf function.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=103)** This tells me the argument I need to provide the file name and then a set of column positions where each data field is located in the file.
>
> **[1:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=111)** So let's go ahead and do that.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=114)** The column names in this file are name, title department, and salary.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=122)** Next I need a vector that I'm going to use to tell R the column lengths.
>
> **[2:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=126)** This is called lengths and it contains the values 32 'cause the first column has a 32 character variable.
>
> **[2:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=134)** The title is 50 characters.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=136)** The department is 24.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=138)** And then the last one salary is NA 'cause it can be any length.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=141)** It's just the rest of the line of the file.
>
> **[2:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=144)** Now the read fwf function works a little differently and that I don't pass the names directly to the function.
>
> **[2:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=150)** Instead I provide both the column lengths and names to the fwf_ widths function to create a specially formatted list first.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=158)** So I'm going to create a new object called widths that comes from fwf widths, applied to the lengths and names that I just created.
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=168)** Now I can go ahead and read this in.
>
> **[2:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=170)** I'm going to create a new table called employees that I'm going to create using read_ fwf applied to the file name, which in this is HTTP:// 5 9 4 4 4 2 .[youcanlearnit.net](https://youcanlearnit.net)/ chicagoemployees.txt And then the second argument is that widths list that I just created.
>
> **[3:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=196)** We'll go ahead and load in the file and take a look at the results.
>
> **[3:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=201)** And we can see, we have the same problem we had before with those variable names appearing in the first row of the dataset.
>
> **[3:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=207)** And we can fix that the same way we did before by adding skip=1 to our command to read on the file.
>
> **[3:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=213)** And we're all set.
>
> **[3:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-fixed-width-files-into-r?u=76281980&t=214)** You now know how to read a fixed-width file in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** read_fwf (2)
> **Env Vars:** csv (1), http (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** chicagoemployees.txt (1)
> **CLI Commands:** make (1)
> **URLs:** [youcanlearnit.net](https://youcanlearnit.net) (1)
> **Analogies:** for example (1)

#### Importing Excel files into R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=0)** - [Instructor] Microsoft Excel spreadsheets contain a large portion of the world's business information.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=5)** Let's take a look at how you can read these files directly into R.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=10)** Here's the Excel file that we'll work with.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=12)** This file, contains data from the US Department of Agriculture on the federally funded school breakfast program.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=19)** It shows by fiscal year, the number of students who participated in the program broken out by whether they pay full price, receive their meals for free or pay a reduced price.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=29)** It also shows the total number of meals served and the proportion of free and discounted meals.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=35)** Now it's important to note the information in row five, the data in columns B through F is in millions and the data stored in column G is a percentage, we'll need to know that information later.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=48)** You can read Excel files into R using the read_excel function.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=53)** Now, this function is part of the tidyverse because it works with tibbles and follows tidy data conventions, but it is not part of the core tidyverse packages.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=62)** That means that you'll need to install and load it separately as part of the read_excel package.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=68)** Let's get started trying to read in this breakfast data.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=71)** First, I'm going to go ahead and load the tidyverse as normal, and then remembering that the read_excel library, isn't part of the core tidyverse.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=78)** I need to handle it separately.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=79)** So I need to load it using the library function on the read_excel package.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=86)** Now I can try loading the file.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=88)** I'm going to start by simply calling, read_excel with the file name.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=91)** Now, for some reason read_excel doesn't allow you to read from a URL.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=95)** So you have to read a file stored in the local directory path.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=98)** So if you haven't already done so download the breakfast.xls file and save it in your R working directory.
>
> **[1:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=104)** I'm going to go ahead and load in a table called breakfast, using the read_excel function, applied to breakfast.xlsx.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=115)** All right, so that's a little bit of a mess.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=117)** Let's take a look at the actual tibble that we have.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=121)** And what I see here is that it looks like only one variable actually got a name and there's some garbage data in there.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=128)** If I look back at the Excel file, I can see why this happened.
>
> **[2:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=132)** Now, I don't want to read in the header rows at the top of the file, the headings appear in the fourth row.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=137)** So I need to skip the first three lines.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=141)** Now let's go take a look at the documentation for read_excel.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=146)** It looks like the function allows the skip argument in the same manner as read-csv and similar functions.
>
> **[2:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=152)** So let's try skipping three lines.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=154)** I'm just going to go back up here to my read Excel command and put, skip equals 3 and take a look at the results.
>
> **[2:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=162)** Well, that's closer, but I still have some junk in there.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=165)** That's because there's still this line below the header.
>
> **[2:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=169)** So we actually need to skip five lines, but we're also going to need to provide the column names ourselves because we're deleting them from the file.
>
> **[2:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=177)** So I'm going to first create a vector contained in the column names like we've done in other formats.
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=182)** And those names will be: year, free students, reduced students paid students, total students, meals served, and percent free.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=206)** And now I'm going to go ahead and try reading in this file again.
>
> **[3:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=210)** I'll just grab this line that I used before.
>
> **[3:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=214)** Change my skip from three to five, and then also provide the col_names equals names argument to specify that I'd like it to use my column names.
>
> **[3:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=224)** And if we take a look at the results that seems to have done the trick.
>
> **[3:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=230)** Now, I still need to do a couple of quick data cleaning operations here.
>
> **[3:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=234)** First, the data on student and meal counts in the file in Excel was shown in millions.
>
> **[3:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=239)** That means if I want real values in this file, I'm going to need to multiply them by 1 million.
>
> **[4:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=244)** So I'm going to use a little tidyverse code to do that.
>
> **[4:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=247)** I'm going to overwrite my current breakfast dataset with a copy of itself.
>
> **[4:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=252)** And I'm going to use the pipe operator to send this to some verbs from dplyr.
>
> **[4:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=257)** And in this case, I only need one.
>
> **[4:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=258)** I'm going to use the mutate function, which allows me to change the contents of a variable.
>
> **[4:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=263)** And I'm going to change five variables here.
>
> **[4:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=266)** I'm going to multiply all those ones that are in millions by a million to get the correct value.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=270)** So free students equals free students times 1 million.
>
> **[4:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=276)** Reduced students equals reduced students times 1 million.
>
> **[4:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=283)** Paid students equals paid students times 1 million Total students multiplied by a million.
>
> **[4:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=297)** And then meals served gets multiplied by a million.
>
> **[5:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=307)** The other thing I need to do is convert that percentage.
>
> **[5:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=310)** So right now the percentages are showing up as numbers between zero and 100, but data scientists normally express percentages as decimals between zero and one.
>
> **[5:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=319)** So I'm going to convert that by dividing the percentage by a hundred percent free equals percent free divided by 100.
>
> **[5:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=328)** So let's run that command to modify my data set, and then we'll use glimpse to take another look.
>
> **[5:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=335)** And now we have our data here and it seems to be in order.
>
> **[5:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-excel-files-into-r?u=76281980&t=338)** That's how you can import an Excel file into R using the read_excel library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), [[Microsoft Excel|Excel]] (6), [[Microsoft Excel]] (1), business (1), express (1)
> **Code Identifiers:** read_excel (9), col_names (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** url (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Reading data from databases and the web
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=0)** - [Instructor] Sometimes, the data we need isn't stored in a clean file ready for our analysis.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=5)** We need to pull it from databases or web services.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=9)** R provides facilities for both of these cases.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=12)** Now, there are several ways that data scientists can pull data from enterprise databases into R for analysis.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=18)** The most popular of these is the RODBC package.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=21)** This package includes functions that allow R to retrieve data from databases supporting the ODBC standard.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=28)** Now ODBC stands for open database connectivity, and it's a standard that's more than 25 years old.
>
> **[0:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=34)** It allows developers to access database information without worrying about the type of database underneath.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=40)** Now, ODBC is compatible with major enterprise databases, including MySQL, Oracle, and Microsoft SQL Server.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=47)** It also works with end user databases and spreadsheets like Microsoft Access and Excel.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=53)** The RODBC package provides functionality that allows developers to open connections to databases, and then either load entire tables into R or load the results of a SQL query into an R data frame.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=66)** Now, the RODBC library is not part of the tidyverse and it doesn't support tibbles, so if you use it, you'll need to convert the data yourself.
>
> **[1:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=75)** The specifics of using RODBC will vary widely based upon the type of database you're using and the structure of that database, so we're not going to go into examples here, but you can read the RODBC documentation and consult your database administrator if you'd like to give it a try.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=90)** Data scientists also sometimes need to pull data directly from the web.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=94)** Now, you've already discovered one way to do that.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=96)** Most of the tidyverse import packages, with the exception of Read Excel, allow you to specify a URL instead of a file name.
>
> **[1:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=104)** We did that in our examples, pulling files directly from the You Can Learn IT site instead of loading them onto our computer first.
>
> **[1:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=111)** In other cases, you'll want to pull data directly from web services.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=115)** You can do this using a technology known as application programming interfaces or APIs.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=121)** APIs allow you to interact directly with web services and pull data from them directly into R.
>
> **[2:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=127)** As with databases, you'll need to have knowledge of the specific API that you want to use, so we can't dive into those details here.
>
> **[2:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-data-from-databases-and-the-web?u=76281980&t=134)** If you'd like to learn more about APIs, there are many courses on this site covering APIs in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Databases]] (7), database (6), web (4), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** rodbc (5), odbc (3), sql (2), url (1), api (1)
> **Definitions:** stands for (1), known as (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** mysql (1)
> **Speakers:** - [instructor] (1)


### 4. Data Transformation

[↑ Back to Table of Contents](#table-of-contents)

#### Wide vs. long datasets
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=0)** - [Instructor] There are many different ways that you can present the same dataset to the world.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=4)** Let's take a look at one of the most important and fundamental distinctions, whether a dataset is wide or long.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=11)** Now, the difference between wide and long datasets boils down to whether we prefer to have more columns in our dataset or more rows.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=19)** A dataset that emphasizes putting additional data about a single subject in columns is called a wide dataset because as we add more columns the dataset becomes wider.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=29)** Similarly, a dataset that emphasizes including additional data about a subject in rows is called a long dataset because as we add more rows the dataset becomes longer.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=40)** Now, it's important to point out that there's nothing inherently good or bad about wide or long data.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=45)** In the world of data wrangling, we sometimes need to make a long dataset wider, and we sometimes need to make a wide dataset longer.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=53)** However, it is true that, as a general rule, data scientists who embrace the concept of tidy data generally prefer longer datasets over wider ones because they're easier to manipulate in R and other statistical analysis packages.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=68)** The key is to make sure that you're continuing to follow the rules of tidy data.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=72)** Now remember, we want to structure our datasets so that each variable is in its own column, each observation is in its own row and each type of observational unit is in its own table.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=84)** And the definition of an observation can be a little bit squishy at times, and that's where we often find the wiggle room to make a dataset wide or long.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=92)** You've already seen the concept of wide versus long datasets at play in this course, I just didn't use the terms wide and long to describe them.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=100)** Earlier, I showed you this example of a set of patient treatment data from Hadley Wickham's paper.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=105)** This dataset contains all the treatments given to a single patient, in a row, with different columns for each treatment type.
>
> **[1:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=112)** We then converted the dataset so that each treatment of a patient had its own row.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=117)** That was an example of taking a dataset that was wide and making it long.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=121)** Now this is a very small dataset, so it's not as easy to see width and length at play, so let's look back at another example where it's more clear.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=129)** Do you remember this pew data on religion from earlier in the course?
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=133)** When we first came across this dataset it had this structure, where each religion had its own row, and each income range had a column in that row.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=141)** This is an example of a wide dataset.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=143)** The portion of the dataset that we see on the screen, here, has 10 rows, each containing six data points, that's 60 data values total.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=151)** We then converted that dataset, so that each unique pairing of religion and income range had its own row.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=157)** Now that entire dataset doesn't fit on the screen so I'm showing you a small portion, but converting that entire dataset, would now put each data value in a single row, resulting in 60 rows.
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=168)** We've made our dataset much longer and narrower than its original form.
>
> **[2:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=173)** It might seem that we made the dataset more difficult to work with, and that's true when you're looking at it with the human eye, but the fact is that longer and narrower datasets are much easier to work with in R.
>
> **[3:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/wide-vs-long-datasets?u=76281980&t=184)** Now that you understand the concepts of wide and long datasets, let's talk about the tools that you can use in R to convert between them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), [[Statistical Analysis]] (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is called (2), is a  (1), is an  (1)
> **Best Practices:** general rule (1), the key is (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Making wide datasets long with pivot_longer()
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=0)** - [Lecturer] Analysts working in R often find themselves in a situation where they want to convert a wide data set into a longer version.
>
> **[0:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=7)** The pivot_longer function makes this easy.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=9)** Now, in the last video I gave you the example of this Pew Religion data set that is wide, and describes how a data scientist might prefer to convert it to a longer format.
>
> **[0:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=18)** Let's take a look at how we can perform this conversion in R.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=22)** The tidyr library within the tidyverse contains a function called pivot_longer, that takes a wide data set and makes it longer by gathering the information from columns and putting it into rows.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=35)** The pivot_longer function works using the concept of values and names.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=40)** Now, values means the same thing that it does in the world of tidy data.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=44)** It's the actual data point in a table that represents the observation of a single variable.
>
> **[0:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=49)** The names are how we identify the variable described by the value, they're the column names.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=54)** Now, let's take a look at it in an example that will make this a little more clear.
>
> **[0:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=58)** Here's the Pew data set again in wide form, and converted to long form.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=63)** When we performed this conversion, we got rid of all the columns that corresponded to different income ranges, and created two new columns for the long data set, income and frequency.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=74)** The income column contains the column headers from the wide data set, it's the names column in this data set.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=81)** The frequency column contains the number of people in that income range for the specified religion, it's the values column in this data set.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=89)** And as I mentioned, the pivot_longer function actually performs the transformation from wide to long.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=95)** Here's a quick look at the syntax for the pivot_longer function.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=98)** It takes as input the name of the table that contains the data in wide form, and a list of columns from the wide data set that you would like to include or exclude from the pivot.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=108)** If you want to pivot most of the columns, you can specify the columns that you don't want to pivot by listing them with an exclamation point in front of them.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=115)** Then we have a names_to argument, which is what you would like to name the column that you create to store the data that was originally in the column names, and a values_to argument, which is the name that you would like to use for the value column in the long data set.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=128)** Let's try converting the Pew data set in R, first, I need to load the tidyverse.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=135)** And now I can read in the data set from a CSV file.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=138)** We can go ahead and read that from the you can learn IT site, @[http://594442.youcanlearnit.net/pew.csv](http://594442.youcanlearnit.net/pew.csv).
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=151)** Now, let's take a quick look at what this produced.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=154)** As you can see, we have the same data set that we looked at earlier.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=157)** It's a wide version of the Pew data set.
>
> **[2:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=160)** Now, let's try to use the pivot_longer function to convert this from wide to long.
>
> **[2:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=164)** First, I'm going to look at the help page for that function.
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=167)** So, now let's go ahead and use this to create the longer tibble, I'm going to name it pew.long to distinguish it from the original version.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=176)** Then I'm going to call the pivot_longer function, and I need to provide it with the data set that's going to be pivoted, which is the original Pew data set.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=186)** Then I need to tell it which columns I want to include or exclude.
>
> **[3:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=189)** And I could type in all of the names of all of those columns I want included, but the bottom line is, I don't want religion, so, I'm going to put exclamation point, religion to say that I'd like to exclude religion from the gathering.
>
> **[3:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=201)** Then I have the names_to argument, that will be the name of the column that's going to contain the old column names, which is income as we discussed earlier.
>
> **[3:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=210)** And similarly, the values to column is going to be called freq for frequency.
>
> **[3:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=217)** So, let's go ahead and run this pivot_longer command, and then take a look at what we have as a result.
>
> **[3:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=223)** And as you can see, we now have the long data set that we expected.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-wide-datasets-long-with-pivot-longer?u=76281980&t=226)** We went from 18 rows of 11 columns in the wide data set to 180 rows of three columns in the long data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (24)
> **Code Identifiers:** pivot_longer (8), names_to (2), values_to (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the last (1), we discussed (1)
> **File Paths:** 594442.youcanlearnit.net/pew.csv (1)
> **URLs:** [http://594442.youcanlearnit.net/pew.csv](http://594442.youcanlearnit.net/pew.csv) (1)
> **Env Vars:** csv (1)
> **Speakers:** - [lecturer] (1)

#### Making long datasets wide with pivot_wider()
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=0)** - [Instructor] While data scientists often find themselves needing to take a wide dataset and make it longer, they sometimes need to perform the reverse operation and make a long dataset wider.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=10)** Earlier in the course, I showed you a Mexican weather dataset and walked you through an example of making it tidier.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=16)** At one point in the process, we had this intermediate result.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=19)** There were two temperature records for each weather station on each date.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=24)** One row contained the maximum temperature for that date while the other contained the minimum temperature for the same day.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=29)** Now these are really two different values, the maximum and minimum for the same observation, temperature over the course of the day.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=37)** To make this dataset tidy, I want to combine and the two rows for the same date and weather station into a single row.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=44)** The Tidy R Library within the Tidyverse contains a function called pivot wider that takes a long dataset and makes it wide by spreading the information from different rows across columns.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=56)** The pivot wider function performs this conversion using the same concept of names and values that we used in the pivot longer function but the operation is going in reverse.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=65)** In this case, we already have the names in one column and the values in another and our task is to convert the unique values from the names column into their own columns in the wider dataset.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=76)** So since we have two unique values in the long table, T max and T min, we get those two columns in the wide table and they're filled with values from the value column.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=86)** Now let's take a look at the syntax for the pivot wider function.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=90)** It's similar to the pivot longer function, but has only three required inputs.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=94)** They are the name of the table that contains the data in long form, the name of the column in the long dataset that contains the new column names and the name of the column in the long dataset that contains the values corresponding to those column names.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=108)** Let's try converting this dataset in R.
>
> **[1:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=111)** First, I need to load the Tidyverse, and now I'm going to go ahead and read in the dataset from a CSV file.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=117)** I'm going to store it in a table called weather and use the read_CSV function to read it in from the you can learn IT website.
>
> **[2:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=130)** And it's called Mexicanweather.csv.
>
> **[2:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=134)** When I go ahead and read this file in and take a look at the results, you can see that we have the Mexican weather dataset in the intermediate form that we looked at earlier.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=143)** Now we're going to try to use the pivot wider function to convert this from a long form to a wider form.
>
> **[2:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=149)** The first thing I'm doing do is take a look at the help file for pivot_wider just to refresh myself on the format.
>
> **[2:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=156)** Here's the syntax that we use for that function, and then I can call it to create a wider version of the table that I'm going to call weather.wide, and I call pivot_wider and provide the name of the long dataset, which was just weather, and then my arguments are the names from column, which in this case is element, and the values from column, which in this case is value, and run it, and then take a look at the weather.wide result that we have.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=186)** And this looks like the slightly wider dataset that we've expected.
>
> **[3:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=190)** We've gone from the table that originally had 33,712 observations to this one that is only 16,871 observations, and you'll notice that it now has columns for the maximum and minimum temperature.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-long-datasets-wide-with-pivot-wider?u=76281980&t=204)** That's how you use the pivot wider function to make a long dataset wider in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** pivot_wider (2)
> **File Paths:** mexicanweather.csv (1)
> **Env Vars:** csv (1)
> **Cross-References:** earlier in (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Converting data types in R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=0)** - [Instructor] R supports a number of different data types and it's important to have data stored in an appropriate form.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=6)** Let's take a look at some of the most common data types used in R.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=9)** The first is numeric data which is used to store decimal values.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=13)** This is the default data type for computation.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=16)** Integer data is used a store integers and you want to be careful when you use those because they follow the rules of integer arithmetic which can do unexpected things if you're not familiar with those rules.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=27)** Character data stores strings of text.
>
> **[0:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=30)** Logical data stores boolean values of true and false and factors store categorical variables.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=37)** Those are variables that have a limited number of values.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=40)** For example, eye color might be stored as a factor because there are only a limited set of possible human eye colors.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=46)** Blue, brown, green, hazel, gray, et cetera.
>
> **[0:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=50)** When you read data into R using the Tidyverse functions, the Tidyverse makes its best guess at the types of data that you're reading based upon the contents of the file.
>
> **[0:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=59)** Honestly, it does a pretty good job in most cases, far better than the functions found in base R.
>
> **[1:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=64)** However you will need to perform your own conversions from time to time, and there were a set of functions in R called the as functions that allow you to perform conversions from one data type to another provided that the values are compatible.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=77)** These are as.numeric to convert to numeric values, as.integer to convert to integer values, as.character to convert to strings, as.logical to convert to Boolean true-false values, and as.factor to convert to categorical data.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=93)** R also includes a set of functions designed to test whether a value is of the specified data type.
>
> **[1:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=99)** These are called the is functions and they work in the same way as the as functions.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=103)** is.numeric returns true if the value is numeric and false otherwise, is.integer returns true if the value is integer and false otherwise, is.character returns true for string values, is.logical returns true if the value is a Boolean true or false, and is.factor returns true if the value is a categorical factor.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=124)** You can use these functions on single values, as well as on vectors.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=128)** So let's take a look at these functions in action in R.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=131)** Suppose that we have a vector containing the number of foul shots made by the starters on a team of basketball players.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=137)** Let's go ahead and create that.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=138)** We'll call it foulshots and we'll assign to it the values 18, 22, 15, 13, and five.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=146)** Now I can easily find out the total number of foul shots made by those starters using the sum function and applying it to that vector.
>
> **[2:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=153)** When I do that down in the console, I see that the total is 73.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=157)** But what if when I created the foulshots vector, I accidentally specify them as strings instead of numeric values?
>
> **[2:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=164)** Let's go ahead and try that.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=165)** I'm going to create a new vector called foulshots_strings and I'm going to use the same values, but this time they're going to be strings instead of numbers.
>
> **[2:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=174)** I'm just doing that by enclosing them in these single quotes.
>
> **[2:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=178)** Now when go ahead and apply the sum function to foulshots_strings, I get an error telling me of course that you can't add together strings.
>
> **[3:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=189)** So I can check the reason for that error by querying the class of the vector.
>
> **[3:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=193)** I can use the class function to ask it well, what data type is foulshots_strings?
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=199)** And when I do that down on the console you can see it's a character data type.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=204)** Now I can fix this by converting the vector manually to numeric values.
>
> **[3:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=208)** I'm going to create a new vector called foulshots_converted and I'm going to populate it by applying the as.numeric function to the foulshots_strings vector.
>
> **[3:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=219)** Now if I look at the class of foulshots_converted, I see down on the console that it's numeric.
>
> **[3:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=228)** Also if I apply the sum function to foulshots_converted, I get the sum of 73.
>
> **[3:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=235)** Now let's try using some of these vectors with the is functions.
>
> **[3:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=238)** At first, we had the foulshots vector which we know contains numeric values.
>
> **[4:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=242)** And if I apply the is.numeric function to foulshots, I get back a result of true.
>
> **[4:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=249)** If I apply the is.character function to that same string which contain numeric data, I get back false.
>
> **[4:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=257)** And let's try it again using the strings vector.
>
> **[4:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=260)** I'm just going to go up here and change foulshots to foulshots_strings.
>
> **[4:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=265)** And when I run this, I get false because the strings are not numeric.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=270)** But when I run the is.character on it, I get back true because the strings are character strings.
>
> **[4:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=276)** So this gets a little more complicated when we try working with a tibble Let's contain a tibble that contains player names and team assignments.
>
> **[4:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=284)** I'm going to go ahead and create a vector of names and we'll put in Mike, Ray, Dennis, Sally, Ian, and Sue.
>
> **[4:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=299)** Those are my names and then I'm going to assign these individuals to teams, and they're going to be either team one or team two.
>
> **[5:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=306)** So I'll just put Mike, Ray, and Dennis on team one and then Sally, Ian, and Sue on team two.
>
> **[5:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=312)** And I'm going to create a tibble called assignments using the tibble function and passing it in the two vectors, names and teams.
>
> **[5:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=322)** Oops, and I got an error message here.
>
> **[5:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=323)** It says error in tibble, names, teams.
>
> **[5:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=325)** Couldn't find the function tibble.
>
> **[5:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=327)** That's because in the script, I never loaded the Tidyverse library.
>
> **[5:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=330)** So I'm going to go back up to the top and load the Tidyverse.
>
> **[5:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=336)** And now go back down to my team assignment, run it again, and now I have my tibble created. And when I look at it, I can see I have my tibble which contains the character strings for the names and the numeric values for the teams.
>
> **[5:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=349)** Now that looks okay at first, but in reality it's not because team is assigned as a numeric value when it's really a factor.
>
> **[5:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=356)** The team is categorical.
>
> **[5:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=357)** Team two is not twice as important as team one.
>
> **[6:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=360)** These are just the team names.
>
> **[6:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=362)** The assignments are one and two.
>
> **[6:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=364)** So I can fix this by converting the team variable from a numeric value to a factor.
>
> **[6:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=368)** Let's go ahead and do that.
>
> **[6:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=370)** I'm going to go ahead and take my assignments tibble and pipe it to the mutate verb and then just say I'd like to replace what's in teams with the as factor version of teams.
>
> **[6:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=383)** And if I just run this and look at it, I can see that it's converted to a factor.
>
> **[6:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=387)** So I'm going to go ahead and save this into the assignments tibble.
>
> **[6:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=395)** And there we are.
>
> **[6:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=396)** We have names as a character string and teams as a factor, and we can test this.
>
> **[6:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=401)** Let's take the is.factor function and apply it to the names first.
>
> **[6:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=408)** And we get back false because the names were character strings.
>
> **[6:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=411)** But if we apply the is.factor function to the teams, we get back true because teams is a factor.
>
> **[6:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-data-types-in-r?u=76281980&t=419)** Those are the basics of data types and type conversions in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), teams (9)
> **Code Identifiers:** foulshots_strings (5), foulshots_converted (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Working with dates and times in R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=0)** - [Instructor] Date and time values can be some of the trickiest data to manipulate in R.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=5)** Fortunately, the Lubridate Library makes it easy to work with dates and times.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=9)** Now Lubridate is an important package and it is installed with the rest of the tidyverse, but it's not part of the core tidyverse.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=17)** Therefore, while you don't need to install it separately, you do need to load it separately in your R scripts.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=22)** Let's cover two of the most important tasks that you can perform with Lubridate; deconstructing dates and times and constructing dates and times.
>
> **[0:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=30)** If you have an existing date or date time value, you can use functions from within Lubridate to pull out individual components of that date and time.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=38)** For example, the year function extracts the year from a date.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=42)** The month function extracts only the month value and the day function extracts the day of the month.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=47)** You can get more complex and derive some values from a date.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=51)** For example, the wday function tells you the day of the week while the yday function returns the day of the year.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=57)** Now I'll show you some examples of these functions in a minute.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=60)** There are similar functions for deconstructing times.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=63)** For example, the hour function returns the hour of the day.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=66)** The minute function returns the minute portion of the time.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=69)** And the second function similarly provides the number of seconds in a time value.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=74)** These functions can all help you pull specific values out of a date or date time object.
>
> **[1:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=80)** You may also need to construct a date value from component parts.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=84)** For example, you might have the month, day and year in a string and want to convert it to date format.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=89)** Now that can be more complicated than it sounds because the same date may be written different ways in many parts of the world.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=95)** Look at all these dates.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=96)** These are all different ways of writing April 1st, 2018.
>
> **[1:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=101)** Lubridate provides the date construction functions to help you construct a date or date time variable out of text strings.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=109)** Let's start with simple dates.
>
> **[1:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=110)** The functions differ based upon the order that the numbers appear in the string and they all have three letter names corresponding to the order of the date elements.
>
> **[1:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=119)** For example, if April 1st, 2018 was written this way, you can use the mdy function to read it.
>
> **[2:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=125)** That stands for month, day, year as the order of the string.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=129)** April is the month, one is the day, and 2018 is the year.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=133)** However, if the date were written like this, you'd want to use the ymd function.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=138)** Or for this date, you'd want to use the dmy function.
>
> **[2:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=142)** Now you can see the confusion here.
>
> **[2:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=144)** If you didn't tell R the order of the date elements, it wouldn't be able to tell if this string was April 1st or January 4th.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=151)** Finally, you can tack a time onto the end of a date and get a date time data element by simply adding underscore hms to the end of the mdy, ymd or dmy functions.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=163)** Let's give it a try in R.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=165)** I'm going to begin by loading the tidyverse, and then as I mentioned, Lubridate is not part of the core tidyverse, so I'm going to load that separately, and I'm going to go ahead and read in the Mexican weather data set that I used earlier in this course.
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=182)** Let's take a look at what that gives us.
>
> **[3:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=185)** And now we can extract different elements of the date into the table.
>
> **[3:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=189)** We have one date column here, but I'd like to have year, month and day columns.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=194)** Let's start with just doing that for year.
>
> **[3:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=196)** I'm going to take the weather data set and pipe it to the mutate function.
>
> **[3:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=201)** I'm going to create a variable called year and I'm going to populate it by applying the year function from Lubridate to the date value that's already in the data set.
>
> **[3:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=210)** And as you can see, that added a year column to the end of my data set.
>
> **[3:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=215)** Let's go ahead and continue this by adding a month column by applying the month function and a day column by applying the day function.
>
> **[3:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=224)** That gives me my three new columns.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=226)** So I'm going to go ahead and save this weather data set into the original table.
>
> **[3:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=231)** And we now have separate variables for each of the components of the date.
>
> **[3:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=235)** Now recall that the wday function allows you to determine the day of the week for a particular date.
>
> **[4:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=241)** I can check this date that we've been talking about by applying the wday function to the string 2018-04-01, and find out that that's the first day of the week, Sunday.
>
> **[4:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=252)** I can also use the yday function and find out that this is the 91st day of the year.
>
> **[4:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=259)** Now remember that Lubridate also allows us to build dates.
>
> **[4:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=262)** If I write my dates in the standard American format, I can use the mdy function to convert them.
>
> **[4:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=269)** And it's okay if I abbreviate the year, Lubridate will still be able to figure that out.
>
> **[4:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=274)** But if the date is instead written in a European format, I can use the dmy function to specify that the day comes first followed by the month and the year.
>
> **[4:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=283)** And then the same stream becomes January 1st instead of April 4th.
>
> **[4:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/working-with-dates-and-times-in-r?u=76281980&t=287)** Those are the basics of working with the Lubridate Library in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (5)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), stands for (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Data Cleaning

[↑ Back to Table of Contents](#table-of-contents)

#### Detecting outliers
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=0)** - [Narrator] Data scientists often run into data sets that contain values that are well outside of the norm.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=6)** These outliers can present special challenges for data analysis.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=10)** And it's important to understand what they mean when present in your data sets.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=14)** Outliers are data points that lie far outside the norm, and they may occur for two reasons.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=20)** First, outliers may indicate some type of error in the data set.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=25)** Someone may have measured the data incorrectly in the first place, incorrectly input it into a system or performed a calculation improperly.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=33)** For example, imagine that you're looking at a data set consisting of temperatures from weather stations in New York.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=38)** And you find that there's a single data point recording a value of 212 degrees Fahrenheit.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=44)** This is clearly some type of error.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=46)** Maybe the thermometer failed.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=48)** Maybe somebody wrote down the temperature incorrectly, or it could be that the thermometer is misplaced inside of an oven.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=54)** Whatever the cause, this is clearly an invalid data point for outdoor temperatures.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=60)** Outliers that are results of errors should be identified and removed from the data set.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=66)** Not all outliers are errors however.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=69)** They may be real data points that result from a skewed dataset.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=73)** For example, imagine that you have a dataset consisting of the salaries of corporate executives.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=77)** You might find that most have salaries in the hundreds of thousands of dollars, but then there's a single data point of $1.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=84)** After investigating, you might discover that a corporate CEO agreed to take a $1 salary due to the company's poor performance that year.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=92)** That's a correct data point and it should likely be retained in the dataset.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=96)** We can use a variety of visual tools to identify outliers.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=100)** You already saw how we can use a scatter plot to identify outliers for temperature data.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=106)** Histograms are another useful tool.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=108)** They group data points into bins representing different numeric ranges.
>
> **[1:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=113)** Now, if you're not familiar with the term histogram, it's basically a bar chart that works across continuous variables instead of categorical variables.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=121)** Here's a histogram of a data set containing ages.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=124)** If you look at this, you can see two outliers.
>
> **[2:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=127)** There's one outlier with an age of over 150, and that's clearly incorrect.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=133)** There's also a second outlier with an age of zero, and that one requires further investigation.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=138)** It could be that someone accidentally put a zero in the dataset or used it to represent a missing value, or it could be a newborn baby.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=146)** There's no way to tell without some knowledge of the data.
>
> **[2:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=150)** The second graphical tool that we can use is called the boxplot.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=154)** This is an interesting tool used by statisticians to help identify outliers.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=158)** Here's a boxplot of the ages data that we just looked at in that histogram.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=163)** Let's pick apart the elements of a boxplot.
>
> **[2:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=166)** First, there's this thick black line in the middle.
>
> **[2:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=169)** That line represents the median value in the dataset.
>
> **[2:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=172)** And in this particular data set, the median age is 36.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=176)** We also have a box drawn around median.
>
> **[3:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=180)** The left most line of this box represents the 25th percentile of the data set, which in this case is 18.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=186)** And the right most line represents the 75th percentile, which in this case is 68.
>
> **[3:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=192)** That means that half of the data in our dataset falls within this box.
>
> **[3:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=196)** So half of the people in our dataset fall between the ages of 18 and 68.
>
> **[3:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=202)** Next, you'll notice that we have these lines extending from the top and bottom of the box.
>
> **[3:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=207)** They're called the whiskers and they represent all of the data that falls within a reasonable distance of the box.
>
> **[3:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=213)** This reasonable distance is determined by computing a value called the interquartile range.
>
> **[3:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=218)** By subtracting the third quartile value from the first quartile value.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=222)** And then multiplying that distance by 1.5.
>
> **[3:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=225)** So in our case, we subtract 68 from 18 and get 50 and then multiply it by 1.5 to get 75.
>
> **[3:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=232)** So the whiskers then extend to include the lowest value in our data set that is at least 18 minus 75 or zero since we can't have a negative age, and the highest value in our dataset that is at most 68 plus 75 or 143.
>
> **[4:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=246)** Finally, the boxplot uses single data points to represent outlier values that fall outside of the whiskers.
>
> **[4:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=253)** In this case, we see a single data point out here at 154 that's clearly an error.
>
> **[4:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=259)** Now the decision about how to handle outliers depends upon the nature of the dataset, and the type of analysis you're performing.
>
> **[4:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=266)** No matter how you want to handle it, you should be able to identify outliers.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=270)** We'll look at a few graphical tools that can help you identify outliers in R.
>
> **[4:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=274)** We're going to do this using library called ggplot2.
>
> **[4:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=277)** That's part of the Tidyverse.
>
> **[4:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=278)** Now we won't dive deeply into ggplot2 in this course, but it's definitely worth your time to explore this library in more detail.
>
> **[4:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=285)** And I have a course elsewhere on this site dedicated entirely to ggplot2.
>
> **[4:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=291)** Let's begin by loading the Tidyverse as well as the Medicare payments data set that we used in section three of the course.
>
> **[4:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=296)** Now I have that code pre-written here and I'm going to execute it to load my data into a table called inpatient.
>
> **[5:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=303)** I can now begin exploring this using the ggplot library.
>
> **[5:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=306)** I'm going to say that the data set I'd like to use is the inpatient data set.
>
> **[5:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=310)** And I'll begin by asking for a histogram using geom_histogram and then setting my variable mapping to put average charges on the X axis of the histogram.
>
> **[5:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=322)** And when I do that, I get a histogram and I can see that there are certainly some outlier values there.
>
> **[5:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=328)** Now I can also look at this using a boxplot.
>
> **[5:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=331)** Let's give that a try.
>
> **[5:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=333)** My call is going to look similar in the beginning, ggplot data equals in-patient except now I'm going to ask for a geom boxplot.
>
> **[5:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=341)** In my mapping this time, will be charges and average charges.
>
> **[5:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=349)** And that gives me a single boxplot showing the many outlier values that appear in this dataset.
>
> **[5:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=354)** I could also ask for a series of boxplots broken out by state.
>
> **[5:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=358)** So let's say I just replaced this title that I assigned charges with a variable state, and that gives me 50 boxplots one for every state.
>
> **[6:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=370)** Now that's certainly a mess.
>
> **[6:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=371)** So I probably in most normal cases would not want to put on the X axis of a boxplot a variable with 50 values.
>
> **[6:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=378)** But you get an idea now how I can get a single boxplot or how I can break it out by another variable.
>
> **[6:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=383)** Now there's plenty to investigate here.
>
> **[6:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=385)** So let's start digging into it a little more.
>
> **[6:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=388)** Let's say I like to filter this data set a little bit.
>
> **[6:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=390)** I'm going to take my inpatient data set, and run it through a pipe to the filter verb.
>
> **[6:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=397)** And I'm going to say, I only want to look at the average charges that are over 500,000.
>
> **[6:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=401)** So I would just want cases where average charges is greater than half a million dollars.
>
> **[6:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=408)** When I just run that, of course, I get my data set dumped out to the console in table form, but then I'm going to take this and pipe it to ggplot.
>
> **[7:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=420)** Where I'm going to produce a scatter plot using the geom_point function with the variable mapping of DRG that's diagnosis related group, which is the type of procedure that was formed.
>
> **[7:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=432)** And average charges.
>
> **[7:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=436)** And then I'm just going to do a little prettying up here by working with my access text and telling ggplot that I would like to rotate that text by 90 degrees, and apply a little horizontal and vertical justification to it.
>
> **[7:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=453)** Again, you don't need to know these details of ggplot.
>
> **[7:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=455)** That's outside the scope of this course, but if you're interested, you can watch my ggplot course to learn more.
>
> **[7:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=461)** And when I go over and take a look at the plot that results, of course these DRGs are really long.
>
> **[7:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=467)** So I probably want to continue exploring that, but I can look at this and see, well, there are some really expensive procedures here.
>
> **[7:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=474)** A respiratory system diagnosis with ventilator support some bowel procedures, some types of infectious and parasitic diseases, and then severe sepsis, where there were medical bills that did indeed run over half a million dollars and in a few cases, close to a million dollars.
>
> **[8:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/detecting-outliers?u=76281980&t=491)** This is how you can use R and the Tidyverse ggplot2 library to detect outliers in your dataset and explore them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (34), next (1)
> **Analogies:** for example (2), imagine (2)
> **Definitions:** is called (1), is an  (1), means that (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** geom_histogram (1), geom_point (1)
> **Env Vars:** ceo (1), drg (1)
> **Versions:** 1.5 (2)
> **Speakers:** - [narrator] (1)

#### Missing and special values in R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=0)** - [Instructor] R uses a few special values to handle unique circumstances, such as missing data, division errors, and infinite results.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=8)** And missing values are very common in datasets.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=11)** It could be that someone failed to collect a data point or simply the data point is not relevant for a given observation.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=17)** For example, imagine that you have a dataset consisting of information about high school students.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=22)** And one of the fields is the college that they chose to attend.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=25)** Well, some high school students don't go on to college so the value in that field for those students is missing.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=31)** R indicates missing values by using the special value, NA, standing for not applicable.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=37)** There are also some functions available to help you work with these missing values.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=41)** The is.na function tests a value to see whether it's NA and returns a Boolean true if it is NA and false if it's not.
>
> **[0:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=50)** You can use the is.na function inside a filter function to identify rows with NA values for a particular variable.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=57)** Now, one word of caution, different statistical packages and data sources use different ways to indicate missing values.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=65)** Watch out for datasets that don't use the NA convention.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=68)** For example, some datasets might put a very high value such as 999,999 to represent a missing value.
>
> **[1:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=75)** You'll want to convert those to NA before working with them in R to ensure that are handled properly.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=81)** Let's take a look at how missing values work in R.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=84)** I'm going to start with this code that again, loads the Tidyverse and the restaurant inspections dataset.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=91)** And when I take a look at the summary of that dataset, I see here in the license variable there were 14 inspections where the license value was set to NA.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=102)** Let's take a look at those.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=105)** I'm going to take the inspections dataset and pipe it to the filter command and say that I'm only interested in those cases where the license value is NA.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=115)** And there I can see these values and if I look at the facility type, I can see, it looks like special events and some church related functions maybe these are special cases where license isn't required, but that tells me what those are.
>
> **[2:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=127)** Now, if I want to, I can create separate tables.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=129)** Let's go ahead and try that.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=131)** I'm going to create one table for the licensed facilities and one for the unlicensed facilities.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=136)** So we already have the unlicensed facilities here, they're created by this command that I just wrote.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=141)** So I'm just going to take the output of that command, and assign it to a new table called unlicensed.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=148)** And when I do that, you can see over in the environment that I now have an unlicensed dataset that has those 14 observations.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=155)** And similarly, I can create a licensed table by taking the inspections dataset and filtering it for the opposite case, not represented by the exclamation point is .NA license.
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=167)** So all the cases where the license value is not NA.
>
> **[2:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=170)** And when I run this, I get a licensed dataset that has all of the other observations from that inspections dataset.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=176)** So 145,606 minus is 14 is 145,592.
>
> **[3:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=183)** Now there are two other special values that you should be aware of in R.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=186)** First, the value Inf is used to represent infinite values, such as when you divide a non-zero number by zero.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=194)** Second, the value NaN is used to represent results that are not a number such as when you divide zero by zero.
>
> **[3:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=200)** There are a series of functions similar to is.na designed to help you test for these values.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=206)** Is.infinite returns true when a value is infinite and false when it's not.
>
> **[3:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=210)** And is.nan does the same thing for not a number of values.
>
> **[3:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=215)** Is.finite returns true when a number has a finite value and false when it does not.
>
> **[3:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=220)** Let's take a look at the, an example here.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=222)** I'm going to create a vector called bad math that does some interesting things.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=226)** First, it's just going to have some regular values, one, two, and three.
>
> **[3:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=230)** Then I'm going to put in four divided by zero, zero divided by zero, and then NA value.
>
> **[3:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=237)** And when I look at the resulting vector that I just created, you can see how it represented those, one, two and three were put in correctly, then four divided by zero was transformed to infinite because the result of dividing four by zero is infinity.
>
> **[4:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=251)** Zero divided by zero it gives me the not a number error because you can't do that.
>
> **[4:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=255)** And then my NA value is preserved as NA.
>
> **[4:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=258)** So now, if I apply some of these is functions to this vector.
>
> **[4:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=261)** If I do is.NA applied to bad math, I get back values that have four false values and then two true values.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=270)** So this is an important and interesting finding.
>
> **[4:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=273)** We expect the sixth value in this series, which is NA to return true, but the is.NA function also returns true for not a number of values.
>
> **[4:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=281)** So we have our last two values here returning true.
>
> **[4:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=284)** Let's try the is.nan function.
>
> **[4:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=287)** In this case, we only get one true value for the NaN value that's in the fifth position.
>
> **[4:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=293)** If we look at the is.infinite function, applied to bad math, we get like a true value only for the fourth value that was infinite.
>
> **[5:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=303)** And if I look at is.finite for bad math, I get back true value is only for the first three values, which were finite numeric values of one, two, and three.
>
> **[5:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/missing-and-special-values-in-r?u=76281980&t=313)** Now understanding missing values, infinite values, and not a number of values is important to properly working with your datasets in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Microsoft Word|Word]] (1)
> **Analogies:** such as (4), for example (2), imagine (1), similar to (1)
> **Warnings:** caution (1), watch out (1), be aware (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Breaking apart columns with separate()
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=0)** - [Instructor] Putting multiple variables in a single column violates one of the core rules of tidy data.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=6)** When performing data wrangling, we often need to break those columns apart in this separate variables.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=12)** The separate function from the tidyverse allows you to break a column into two or more parts.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=17)** Let's take a look at how the separate function works.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=20)** You call the separate function after loading the tidyverse and you give it at least four arguments.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=26)** First, you provide the name of the tibble or data frame containing the column you wish to split.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=31)** Second, you provide the name of the column from that tibble you want to split.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=35)** Third, you provide the names of the columns that you want to store the separated data in.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=40)** And finally, you can optionally provide details on the way you want R to separate the data.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=45)** This can either be by providing the character or characters that delimit your fields, or by providing the numeric positions where you want R to perform the separation.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=54)** If you don't provide any value, here R we'll split the column, any place that finds a non numeric character.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=61)** So let's take a look at how this works in R.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=63)** We're going to begin by loading the tidyverse and Medicare cost data set that we've already used several times.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=69)** And I'm going to take a look at the diagnosis related group or DRG unique values.
>
> **[1:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=75)** Now there's actually two different things here.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=78)** We have a code.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=79)** That's that three digit number that you see at the beginning of the string followed by a space, a hyphen, a space, and then a description of the diagnosis related group.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=88)** So let's try separating this.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=90)** And my first thing I'm going to do is try to separate it based upon the hyphen.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=94)** I'm going to just call the separate function on the inpatient data set and tell it I'd like to separate the DRG column.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=102)** And then I'm going to separate it into two columns.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=105)** I need to use the C function to create a vector.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=107)** That's going to contain those two column names.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=109)** The first one is DRG code, and the second one, I'm going to call DRG description.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=116)** And then finally I need to provide the delimiter, which in this case is going to be a hyphen.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=121)** And I'm just going to run that without saving it so we can see the results and it looks like it worked okay.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=128)** I have some extra spaces in there.
>
> **[2:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=130)** I do see some warning messages expected two pieces, additional pieces discarded in 3000 rows.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=137)** And then it gives me examples of the row numbers.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=140)** I want to see what's going on there.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=141)** So I'm just going to take a look at one of those.
>
> **[2:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=142)** Let's look at the first one.
>
> **[2:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=144)** I'm going to say, I'd like to see the inpatient DRG code.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=148)** And specifically I'd like to see it for observation, 45,894.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=155)** And when I look at that, I see the reason for this problem.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=158)** I told it to separate things based upon the dash, but there's actually two dashes in this field.
>
> **[2:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=164)** There's the one separating the DRG code of 246 from the description, but then there's also another dash in the word drug-eluting stent.
>
> **[2:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=173)** So what's happening here is it's trying to divide this into three pieces when it's only expecting two.
>
> **[2:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=179)** So the easiest way for me to fix this is to realize that we always have a three digit number and then the rest of what we have is the DRG description.
>
> **[3:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=189)** So instead of separating those based on a delimiter, I'm going to separate it based on character description.
>
> **[3:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=195)** So let's try that.
>
> **[3:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=196)** I'm going to call the separate function again on inpatient using the same separating, the same column into DRG code and DRG description again.
>
> **[3:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=208)** And now, instead of putting the dash in single quotes, I'm going to put the number four saying that I like to separate it based on the fourth character position.
>
> **[3:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=217)** Now, when I do that, I have my column broken into its constituent parts.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/breaking-apart-columns-with-separate?u=76281980&t=222)** So if I wanted to, I could just go ahead and save this as my new data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** drg (9)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Combining columns with unite()
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=0)** - [Instructor] In some data wrangling operations, we need to combine multiple columns into a single column.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=6)** The unite function from the Tidyverse allows you to create a single column by combining the contents of two or more existing columns.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=13)** Let's take a look at the syntax for this function.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=16)** You call the unite function after loading the Tidyverse and give it up to four arguments.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=21)** First, you provide the name of the tibble or data frame containing your data.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=25)** Second, you provide the name of the column that you want to create.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=29)** And then third, you provide the names of the columns that you want to combine into that new column.
>
> **[0:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=34)** And then finally, you can optionally provide a separator that you would like R to place between the values and the new column.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=41)** If you don't specify a separator, R will separate the values with underscores.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=46)** So let's take a look at how we do this in R.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=48)** We're going to begin by loading the Tidyverse and the Chicago restaurant inspection dataset that we've worked with a couple of times now.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=54)** And let's go ahead and then take a quick look at the data using the glimpse function.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=60)** Now let's say we want a new column in this dataset.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=62)** We currently have City and State in separate columns.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=66)** Let's say we want a column called Region that combines the city and state separated by a comma.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=72)** We can do this using the unite function.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=74)** So I'm going to call the unite function on my inspections dataset, and the new column that I'd like to create, I'm going to call Region, and I'd like to create that from the City column and the State column with the separator of a comma and then a space.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=90)** So let's just run that and see what it looks like, and then we'll go ahead and write that into a new dataset called Regional Inspections.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=100)** And then if we take a look at this using the glimpse function, we see that we now have the Region column just as we asked for, with the name of the city, a comma, a space, and then the abbreviation for the state.
>
> **[1:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=113)** Now, what if I didn't want to delete the city and the state columns because you notice they're not here anymore.
>
> **[1:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=118)** They were replaced with the region.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=121)** That's actually something I can do by just adding another argument to Unite.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=124)** Unite assumes that when you combine two columns, you want them to disappear and be replaced with the new column that combines them both.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=131)** But if I want to also leave the city and state in there, I can just add the argument remove equals false.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=136)** And now when I take a look, you can see I have my new Region column, and I also have City and State columns.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/combining-columns-with-unite?u=76281980&t=143)** That's how you can create a new column in a tibble by combining multiple existing columns with the unite function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4)
> **Speakers:** - [instructor] (1)

#### Manipulating strings in R with stringr
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=0)** - [Instructor] Data wrangling often includes performing quite a bit of work with strings.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=4)** Let's take a look at how you can trim, edit, search and replace strings using the stringr library.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=11)** Now, before we get started, one important note: stringr is part of the tidyverse, but like Lubridate, it's not one of the core tidyverse packages.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=20)** This means that it was installed when you installed the tidyverse, but it needs to be loaded separately.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=25)** One common operation in string manipulation is converting the case of a string.
>
> **[0:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=30)** You might already be familiar with three different cases: Uppercase strings have all uppercase characters, and you can convert a string to uppercase by using the str_to_upper() function.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=40)** Similarly, lowercase strings have all lowercase characters and you can convert a string to lowercase by using the str_to_lower() function.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=48)** Finally, title case strings capitalize the first letter of each word, and you can convert a string to title case by using the str_to_title() function.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=57)** There are four other string functions that we'll use from the stringr library.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=62)** Now, one common issue with strings is that they might have white space at the front or back of the string that we want to remove.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=68)** The str_trim() function does that for us.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=71)** The str_sub() function can extract a portion of a string or a sub string by specifying the starting and ending positions that you want.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=79)** The str_detect() function finds strings that match a pattern, and the str_replace() function can replace one pattern in a string with another.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=88)** Let's try putting these functions to use.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=91)** I'll begin with the Chicago restaurant-inspection data from the last video.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=94)** Now, you might recall that we combined the city and state fields in this file into a single field called region.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=100)** I have the code loaded here, and I'm going to go ahead and run it to load in that file and bring us to the point where we left the last video off.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=109)** So now, if I look at the unique values for region, you can see there are only 58, but we've got a few different issues here.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=115)** We've got inconsistent capitalization.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=117)** We have a bunch of misspellings of the word, Chicago, and some other things that we need to take care of.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=122)** So let's go ahead and start doing that.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=124)** I'm going to begin by taking care of the uppercase, lowercase issues, and the way I'm going to handle this is to convert everything to uppercase.
>
> **[2:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=132)** So let's go ahead and say we want to start with the regional inspections dataset, pipe it to mutate, and I'd like to correct the region names by saying region should now equal str_to_upper() applied to the existing region.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=148)** And what that's going to do is take all the values in region and make them all uppercase.
>
> **[2:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=153)** And then we're just going to overwrite the existing dataset with that updated copy.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=157)** And once I do that, if I take a look now at the unique values of regional inspections dollar sign region, we can see that they are all uppercase.
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=167)** So we fixed that one issue.
>
> **[2:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=169)** Now, the next thing I'd like to do is correct some of these misspellings of Chicago.
>
> **[2:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=172)** So what I'm going to do first is get down all of these misspellings and make sure that I know what they all are and that I have in a vector that I can work with.
>
> **[3:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=180)** So I'm going to create a vector called Bad Chicagos and I'm going to fill it with all the misspellings of Chicago that I saw in this dataset.
>
> **[3:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=187)** Chicago with two Cs at the beginning.
>
> **[3:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=190)** We have C-H-C-I-C-A-G-O.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=194)** We have ChicagoChicago.
>
> **[3:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=198)** We have ChoChicago and we have ChicagoI.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=206)** Those are some of the misspellings of Chicago.
>
> **[3:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=209)** And the next thing I'm going to do is modify these by replacing all of them with the correct spelling of Chicago.
>
> **[3:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=217)** So I'm going to overwrite my regional inspections data with a copy of itself, piped to a mutate to make this transformation, and I'm going to set the region field.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=226)** I'm going to use the if else function, which does a test, and then depending upon whether the test is true or false, returns a different value.
>
> **[3:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=234)** So my test is going to be to see if the current value of Chicago, the value in each row, is from that Bad Chicago field.
>
> **[4:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=241)** So I'm going to say, if the region is in my Bad Chicago's vector, that's the test, so in cases where it is, I want to replace it with the value Chicago, Illinois.
>
> **[4:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=255)** And if it's not, I want to leave it alone.
>
> **[4:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=258)** And when I run this, and now take a look at my unique values of region, you can see that I've corrected the misspellings of Chicago.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=270)** Now, one of the things that we do still have here is we have some Chicago, NA values that we can also definitely correct to be Chicago, Illinois.
>
> **[4:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=280)** So let's give that a try.
>
> **[4:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=281)** I'm going to follow my same pattern here, regional inspections is overwritten with a copy of itself that's piped to the mutate function.
>
> **[4:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=290)** And in this case, I'm going to use the if else function to say, if the region is equal to Chicago, NA, I'd like to replace it with Chicago, Illinois, and otherwise leave it alone.
>
> **[5:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=305)** Now, I could have just simply added Chicago, NA to the Bad Chicago's vector and done it that way.
>
> **[5:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=310)** I just wanted to show you a different way to do this.
>
> **[5:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=312)** And now when I look at the unique values of region, Chicago, NA is gone.
>
> **[5:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=320)** Now, I have some other problematic values in here.
>
> **[5:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=322)** I have NA, IL.
>
> **[5:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=325)** I have NA, NA, and I have inactive, IL.
>
> **[5:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=329)** Those are both weird values and certainly not things that I want in my dataset.
>
> **[5:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=333)** So I'm going to go ahead and correct them.
>
> **[5:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=335)** So we'll approach this the same way we did with the Bad Chicagos.
>
> **[5:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=338)** I'm going to create NA Chicagos which will be a vector of those values I just mentioned, NA, IL.
>
> **[5:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=346)** NA, NA.
>
> **[5:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=348)** And inactive, IL.
>
> **[5:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=353)** And in those cases, I'm going to follow this same pattern of overriding regional inspections with a copy of itself, piped to mutate, and set the region using the if else function, and now it's going to be the region is in NA Chicagos.
>
> **[6:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=375)** Now, if it is, I want to replace it this time with a value of NA.
>
> **[6:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=379)** I don't want a string in there; I want those to actually be NA values because I don't know where they're supposed to be.
>
> **[6:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=385)** And then otherwise, I'm going to leave the region alone.
>
> **[6:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=389)** And let's take a look at the unique values now, and things look a lot better.
>
> **[6:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=397)** We do have this NA value here representing all of those other cases that we just replaced and then our correct cities that are loaded into the dataset.
>
> **[6:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=406)** Now I'd like to return to another dataset: The Medicare dataset that we used to practice the separate function.
>
> **[6:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=412)** Now, I have the code here that we wrote together loaded, and I'm going to run it again to load in this dataset and perform the separate.
>
> **[7:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=421)** And you can see, here are the two fields that we created earlier: DRG code and DRG description.
>
> **[7:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=426)** We have the right data in those fields, but DRG code has a space at the end that we don't need, and DRG description begins with an unnecessary hyphen and space, and we want to get rid of all of those.
>
> **[7:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=437)** So we're going to trim them out.
>
> **[7:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=439)** I'm going to overwrite inpatient_separate with a copy of itself that's piped to the mutate function.
>
> **[7:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=449)** And the first thing I'll do is get rid of that white space in the DRG code function.
>
> **[7:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=453)** So the last character there, and as you may recall, we have the string trim, STR trim function, that does exactly that: It removes white space that appears at the beginning or end of a string.
>
> **[7:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=464)** So I'm going to overwrite DRG code by running the string trim function against DRG code.
>
> **[7:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=475)** And now, if I take a look at this file using glimpse, we can see that we've corrected the DRG codes.
>
> **[8:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=484)** So that's the DRG code.
>
> **[8:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=486)** The DRG description field has a hyphen in front.
>
> **[8:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=488)** So string trim won't work here, and we're going to need to do something a little bit different.
>
> **[8:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=493)** We're going to do a sub string.
>
> **[8:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=494)** So the format will be similar.
>
> **[8:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=496)** I'm going to take inpatient separate and overwrite it with a copy of itself, pipe it to mutate and replace DRG description that's currently in the dataset with a sub string.
>
> **[8:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=509)** So what I want to do is start the string at the third position.
>
> **[8:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=513)** So the first character is a dash, the second character is a space.
>
> **[8:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=516)** I want to start it at the third character, and I'm going to do that by using the stir sub function, applying it to DRG description and saying, I'd like to start at character position three.
>
> **[8:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=528)** And now when I take a look at that, I've trimmed the DRG description, and now I have a much nicer-looking dataset.
>
> **[8:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=538)** Now, we've looked at some of the most commonly-used functions in stringr, but the library contains many more functions.
>
> **[9:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=544)** I suggest that you read the full stringr documentation if you're trying to manipulate a string in a way that I didn't just describe.
>
> **[9:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/manipulating-strings-in-r-with-stringr?u=76281980&t=551)** There's probably a function already written that does exactly what you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Microsoft Word|Word]] (2), next (2), [[Search]] (1)
> **Env Vars:** drg (13), str (1)
> **Code Identifiers:** str_to_upper (2), str_to_lower (1), str_to_title (1), str_trim (1), str_sub (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** important note (1)
> **Speakers:** - [instructor] (1)


### 6. Data Wrangling Case Study: Coal Consumption

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding the coal dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=0)** - [Instructor] You now have all the tools and techniques that you'll need to perform data wrangling and transform messy datasets in the tidy datasets.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=8)** Now you may remember a quote from Hadley Wickham that I shared earlier in this course.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=12)** "Tidy data are all alike, but every messy dataset is messy in its own way."
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=19)** Because of this, the only way to truly learn data wrangling is by rolling up your sleeves and performing some hands-on work.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=26)** In the final three chapters of this course, I'll walk you through three real world data wrangling projects and help you understand how to assess a dataset and transform it into tidy form using the tidyverse tools in R.
>
> **[0:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=39)** The first data set that we'll work with comes from The National Renewable Energy Lab at the US Department of Energy.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=45)** It contains information on the total annual coal consumption by country from 1980 until 2012.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=52)** Now I stored a copy of this data set for you on the, You Can Learn IT site.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=57)** In the next video, I'll show you how you can pull it from that site directly into R.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=61)** In the meantime, I have it here opened an Excel.
>
> **[1:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=64)** Before I start working with this data set, I want to just take a look around to get a feel for how it's structured and the information it contains.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=71)** We can see here that we have one row for each country, a column for each year.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=76)** We also have continents like Antarctica and North America that are mixed up with the countries.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=82)** And we have a title row at the top of the table and a blank line.
>
> **[1:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=85)** So I know that I need to do a little work on this data to get it into tidy form.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=89)** I have a few problems.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=91)** First, I have many observations in the same row, and I want to get this down to a form where each row contains a single observation.
>
> **[1:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=99)** In this case, that would be the coal consumption for a single country in a single year.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=103)** I also have some records in here that represent continents instead of countries.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=107)** So I'm going to want to separate those out.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=109)** Now, overall, this seems like a straightforward data set and there aren't any problems in here that we haven't already tackled in this course.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-coal-dataset?u=76281980&t=116)** So let's move on and start importing the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), next (1), [[Microsoft Excel|Excel]] (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Reading in the coal dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=0)** - [Instructor] Here I am in R Studio, with a clean script ready to go.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=4)** Together, we'll create the code to turn this coal consumption data into a tidy data set that's ready for analysis.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=11)** We'll begin by importing the data set into R.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=13)** Now, we'll definitely be using the tidyverse extensively throughout this script, so I'll begin by loading the tidyverse packages into my R environment.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=21)** Now I can try to load the dataset.
>
> **[0:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=23)** I've stored it on the You Can Learn IT site so that you can pull down the exact same data that I'm using in this case study, that way you should see the same results that I do.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=33)** Now, recall from earlier in this course that the tidyverse includes a variety of data import functions.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=38)** In this case, I have a file of comma-separated values, so I'm going to use the read_csv function to load it in.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=44)** I'm going to store my data set in a tibble called coal.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=47)** I'm going to use read_csv to read in this file.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=51)** It's stored at [http://594442.youcanlearnit.net/coal.csv](http://594442.youcanlearnit.net/coal.csv)
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=63)** Now let's take a look at what we've loaded here.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=66)** Well, this didn't quite do what I expected.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=69)** I have all of these strange X variables, and my that has n/a values in the first observation.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=76)** Let's go back and take a look at the CSV file in Excel and see if we can figure out what happened.
>
> **[1:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=80)** Well, there was a header row, and a blank row at the top of the file.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=84)** I didn't tell R about that, so it assumed they were part of the dataset.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=88)** Let's try this again, but this time tell R skip past those rows.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=92)** I'm going to go back to my read_csv function call, and add skip=2 to skip the first two rows of the file.
>
> **[1:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=99)** And then we'll take another look at the dataset.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=102)** Well, this looks much better.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=103)** I now have a data set with a row for each region, and a column for each year.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=108)** The column names have years in them, and they're mostly fine, except I still have the first column called X1.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=114)** There wasn't any header on that column in the CSV file, so R just made up that placeholder name.
>
> **[2:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=120)** I want something more recognizable, so I'm going to rename that column to be region.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=124)** And instead of reloading in the whole file, I'm just going to edit that one.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=128)** And I can do that using the colnames function.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=131)** I'm going to call colnames on the coal dataset, and then specify that I would like the first element of those column names to have the value region.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=140)** And now if I take a look at a summary of the coal dataset, I can see the first column is named region.
>
> **[2:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=148)** I have all of my variables named properly, but now, notice that the types are all wrong.
>
> **[2:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=153)** Everything here is a character, while I expected numeric data.
>
> **[2:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-coal-dataset?u=76281980&t=157)** We'll fix that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Microsoft Excel|Excel]] (1), next (1)
> **Code Identifiers:** read_csv (3)
> **Cross-References:** earlier in (1), go back to (1), in the next (1)
> **Env Vars:** csv (2)
> **File Paths:** 594442.youcanlearnit.net/coal.csv (1)
> **URLs:** [http://594442.youcanlearnit.net/coal.csv](http://594442.youcanlearnit.net/coal.csv) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Converting the coal dataset from wide to long
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=0)** - I'm back in our studio, ready to continue work on the coal data set.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=4)** In the last video, we loaded it into R and named our variables.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=8)** Now I'd like to transform this from a wide data set with a column for every year into a long data set that has only three columns.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=16)** If we take a quick look at the dataset, we can see that it currently has one row for every region, and then a column for each year that the data was collected from that region.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=24)** That gives us more than 30 observations in each row.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=28)** For this to be tidy, we want a single observation in each row.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=32)** That means a row should consist of a region name, a year, and the amount of coal used in that year.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=38)** Now, hopefully you recall from earlier in this course that the tidyverse contains a function designed to do just that.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=44)** The pivot longer function converts a wide data set to a long data set.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=48)** Now let me refresh myself on the syntax for that function by calling up the help page.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=55)** And let's use this as a template to help us fill in the blanks.
>
> **[0:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=58)** What I'd like to do is create a long version of the coal data set by taking the pivot longer function and applying it to the existing coal data set.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=68)** I'd like to exclude the element region because I don't want that to be pivoted, and then I'm going to put the names into a column called year.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=78)** And then I'm going to put the values into a new column called coal consumption.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=84)** We'll run that, and let's take a look at our new dataset.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=89)** That looks good!
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=90)** Each row has three variables, the region, the year, and the coal consumption.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=95)** Now my data is still stored all in character strings.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=98)** That won't work very well if I want to do analysis on the data, so I need to convert it.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=103)** Let's begin by converting the year from a character string into an integer, and I can do that using the as dot integer function.
>
> **[1:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=109)** So I'm going to begin with my long data set and overwrite it with a copy of itself, pipe to mutate, and then I'm just going to set year equal to the as integer version of year.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=122)** And when I ask for a summary of my newly modified dataset, I can see that the year has now been converted.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=131)** Now, I also want to convert coal consumption because that's numeric data as well.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=135)** It's a decimal number, so I'm going to use the numeric data type instead of the integer type this time around.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=140)** The format is going to be similar.
>
> **[2:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=141)** I'm going to overwrite the coal underscore long data set with a copy of itself.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=146)** And I'm going to change in that the coal consumption field to be the same field run through the as numeric function.
>
> **[2:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=156)** And now when I ask for a summary, I can see that I have numeric data in coal consumption.
>
> **[2:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=162)** I do have 517 values that are N/A where there was no data, but this is looking good.
>
> **[2:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-the-coal-dataset-from-wide-to-long?u=76281980&t=168)** We have our data converted to a long format, and we have the correct data types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18)
> **Cross-References:** in the last (1), earlier in (1)
> **Exercise Files:** template (1)
> **Speakers:** - i (1)

#### Segmenting the coal dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=0)** - [Instructor] Let's take a deeper dive into the regions variable in this data set.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=4)** When I looked at this file in Excel earlier I noticed that it had a combination of countries and regions.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=10)** I don't want to have those included in the same table in my tidy data dataset because they represent different types of observations.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=16)** Remember one of the rules of tidy data is that each tibble should contain information about a single observational unit, combining countries and continents mixes observational units and that could cause us problems.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=29)** For example, if I tried to total up the coal consumption in this dataset, I'd wind up getting double the real number because each country's coal consumption would be counted twice.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=38)** Once as a country and once as a continent.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=41)** So to get started, let's take a look at all the unique values of the regions variable.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=46)** I'm going to apply the unique function to coal underscore long dollar sign region.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=52)** And I can see here my 232 values, I'm going to build a vector that contains all of the names that belong in the continents table instead of the countries table.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=62)** And I've already looked through this list.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=63)** You can do the same if you'd like, I'm just going to type in the names of the regions that I know are not countries from this dataset and put them into a vector called non-country.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=72)** And it's the continents North America, Central and South America, Antarctica, Europe.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=82)** We also have a region in there called Eurasia, Middle East as a region Africa, Asia and Oceana.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=93)** And then we have world as a region in there.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=97)** So that's my non countries vector.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=98)** And now I want to create two separate data sets, one for countries and one for non countries.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=103)** So I'll start with the ones that are non countries, I'll call that coal underscore region.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=108)** And I'm going to populate that by taking coal underscore long and filtering it so that I only have cases where the region is in my non countries vector.
>
> **[1:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=119)** So you can see over in the environment pane that gave me 240 observations out of my 6,960 in the long dataset.
>
> **[2:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=127)** Now, the other thing I want is coal underscore country to be the coal long data set filtered so that we have everything else.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=136)** So cases where region is not in non-country.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=140)** So I'm just going to write my same argument again, my same filter argument region in non countries.
>
> **[2:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=146)** And then I added the exclamation point in front of it to say, I want cases where that's not true, just giving me the inverse.
>
> **[2:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=152)** And that gives me the other observations.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=154)** My coal country data set over in the environment pane has 6,720 observations.
>
> **[2:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=162)** So let's go ahead and check out these results.
>
> **[2:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=164)** If I look at the unique values of region from coal underscore region, which is my non-country values, those are all continents or larger areas and the entire world.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=176)** And if I do the same thing for coal underscore country, I get a much longer list.
>
> **[3:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=181)** And everything in here are the countries that weren't listed in my non countries vector.
>
> **[3:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=185)** And you probably noticed there that my regions tibble is mostly made up of continents, but also has that record for the world.
>
> **[3:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=191)** We're still not quite following the principles of tidy data because a planet is a different observational unit than a country.
>
> **[3:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=197)** However for the sake of brevity, I'm not going to remove the world observation in this video, and I'll leave that as an exercise for you.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=204)** Other than that, I now have a tidy data set.
>
> **[3:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/segmenting-the-coal-dataset?u=76281980&t=207)** In the next video, we'll take a look at how you can use the GGplot2 package, to visualize this data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft Excel|Excel]] (1), next (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Visualizing the coal dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=0)** - We spent the last four videos, getting the coal dataset into tidy form, now comes the big payoff.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=6)** The reason we use tidy data is to make it easy, to perform other types of analysis on the dataset.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=12)** Let's go ahead and try some quick visualizations to see how the elements of the Tidyverse work together.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=17)** I'm going to use the GG plot two package, to perform these visualizations.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=21)** You can use the same commands that I do to see the same results.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=24)** Now remember GG plot two is a little complicated and we have an entire course on this site dedicated to learning it.
>
> **[0:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=30)** I don't expect that you're going to be able to create these commands on your own, and don't worry if they seem a little confusing.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=35)** I just want to give you a sense of the types of visualizations you can do once you have tidy data.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=40)** So let's begin with a simple scatter plot.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=42)** I'm going to call GG plot two.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=44)** I'm going to get my data from Cole underscore region, and I'm going to set my mapping a variable so that I put year on the X axis and coal consumption on the Y axis.
>
> **[0:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=58)** And the visualization I'm going to ask for is going to be a scatter plot or a point geometry.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=65)** And when I run this, there we go.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=67)** And if you're looking at that plot and saying to yourself, that looks like it should be a line graph. You're right.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=72)** Instead of using a scatter plot, let's ask GD plot to represent this as a line graph instead.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=78)** I'm just going to change geon point to geon underscore line and okay, Something weird happened there.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=86)** But what happened was I gave GG plot the entire dataset and told it that I wanted a line graph.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=91)** So it plotted a single line containing all of the data for every country.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=96)** And that actually doesn't make much sense.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=98)** What I really want is a separate line for each continent.
>
> **[1:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=101)** And I'd like those lines to be different colors.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=103)** So I can fix that by saying down here in geon line, that I'm going to add another mapping.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=108)** And in this case, I'm going to add an aesthetic mapping where the color represents the region.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=114)** So we'll get a separate line of a different color for each region.
>
> **[1:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=118)** And when we run that visualization, there we go.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=121)** We can look at this graph and already quickly draw some interesting conclusions, while coal consumption has increased dramatically in the last decade worldwide, as shown by the top pink line, all of that increases due to changes in the brown line, representing Asia and Oceania.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=138)** The rest of the world actually decreased its consumption over that same time period.
>
> **[2:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=142)** Now there are all sorts of other interesting analyzes.
>
> **[2:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-coal-dataset?u=76281980&t=144)** I could run on this dataset now that I have it in tidy form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Speakers:** - we (1)


### 7. Data Wrangling Case Study: Water Quality

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding the water quality dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=0)** - [Instructor] Let's now turn our attention to a second dataset.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=3)** This time, we'll be dealing with water quality data from the city of Austin, Texas.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=8)** This dataset comes directly from the city of Austin through their data portal located at data.[AustinTexas.gov](https://AustinTexas.gov).
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=14)** It contains the results of over a million water quality tests performed on creeks, springs, wells, lakes, and other bodies of water by city staff.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=24)** If we scroll down the webpage, you'll see that they provide metadata describing the contents of the dataset, as well as a preview table showing a sample of the data.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=33)** Now, this isn't designed for analysis, but just to provide you with an idea of what the entire dataset contains.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=40)** I've stored a copy of the dataset for you on the You Can Learn IT site.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=43)** In the next video, we'll import it into R and begin working with it.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=47)** In the meantime, I have it here opened in Excel.
>
> **[0:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=49)** Before I start working with this dataset, I just want to take a look around and get a feel for how it's structured and the information it contains.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=56)** And it looks like I have a row in this table for every measurement that was taken at a sampling site across dozens of different measuring parameters.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=63)** This is a lot more data than I need, so part of our work is going to be narrowing it down.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=68)** We want to perform some analysis of the temperature and pH of the water.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=71)** So we'll get rid of much of the other data from this dataset for simplicity's sake.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=76)** We'll also need to combine some of these rows because we have measurements from the same observation in different rows.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=82)** There's definitely some work to be done to get this dataset into tidy form, but we have all the tools of the Tidyverse available to help us take care of it.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-water-quality-dataset?u=76281980&t=89)** In the next video, we'll get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), next (2), [[Metadata]] (1), [[Microsoft Excel|Excel]] (1)
> **Cross-References:** in the next (2)
> **Code Identifiers:** ph (1)
> **URLs:** [austintexas.gov](https://austintexas.gov) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reading in the water quality dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=0)** - [Instructor] Here I am in our studio, with a clean script ready to go.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=4)** Together, we'll create the code to turn this Austin water quality data into a tidy data set about pH and water temperature that's ready for analysis.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=12)** Let's begin by importing the data set into R Now we need to load a few packages to get started.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=17)** I definitely need the core tidyverse, and I'm also pretty sure that I'm going to have to do some work with dates and times.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=24)** So I'm going to load the lubridate package as well.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=27)** Remember, lubridata is part of the tidyverse, but it needs to be loaded separately.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=31)** Now I'm going to go ahead and try to just load this data set.
>
> **[0:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=34)** I've stored it on the, You Can Learn IT Sites that you can pull down the exact same data that I'm using in this case study.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=40)** That way you should see the same results that I do as with the coal consumption data set.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=45)** I'm going to load this water quality data set in from a CSV file using the read underscore CSV function.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=51)** Let's just try to load it in directly.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=53)** It's stored at [http://594442.youcanlearnit.net](http://594442.youcanlearnit.net)
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=62)** /austinwater.csv.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=68)** Okay and let's take a look at what we have as a result using the glimpse function.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=74)** Well, this looks like a pretty good start.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=76)** Unlike the coal consumption dataset, it seems that read CSV did a pretty good job.
>
> **[1:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=80)** Figuring out this data set without any additional arguments.
>
> **[1:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=83)** It looks like all of my variables have reasonable names and they have the right data stored in them.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=87)** I do notice that all the data is read in using the character data type and we'll need to convert some of those to make them more useful.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/reading-in-the-water-quality-dataset?u=76281980&t=93)** But we'll get to that later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11)
> **Env Vars:** csv (3)
> **File Paths:** austinwater.csv (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ph (1)
> **URLs:** [http://594442.youcanlearnit.net](http://594442.youcanlearnit.net) (1)
> **Speakers:** - [instructor] (1)

#### Filtering the water quality dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=0)** - [Instructor] I'm back in R studio, ready to continue work on this water quality dataset.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=4)** In the last video, we loaded it into R and took a quick look at the data that you see here.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=9)** Now, one of the first things that I notice here is that there are a bunch of columns in this table that I don't need.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=14)** So I'd like to start by rebuilding this table, selecting out only the columns that I'm interested in.
>
> **[0:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=19)** So I'm going to do that by starting with the water table and then overriding it with a copy of itself, pipe to the select verb, that allows me to pick out just the columns I'm interested in.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=29)** And the ones that I would like to keep are site_name, site_type, sample_date, parameter type, parameter, result, and unit.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=47)** When I do that and take another look at the dataset, I have only those variables left.
>
> **[0:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=53)** Now I have these column names in all caps, and it looks like they're screaming at me.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=57)** So I'd like to rename them just to make them easier on the eye.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=60)** So I'm going to use the renamed verb to do that.
>
> **[1:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=63)** And I'm going to rename them using camel case.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=65)** I'm going to say a site name equals my all caps site name, the same thing for site type, sample date, parameter type, parameter, results, and unit.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=95)** And now when we take a look at it, we have some nice friendly names.
>
> **[1:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=100)** So now I'm down to seven columns, which was more manageable, but there are still a million rows in this dataset and I want to trim that down a bit.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=108)** Remember each row contain the measurement of a single parameter, and I only want information about pH and water temperature.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=114)** So let's see if I can find those.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=116)** I'm going to start by just pulling up a list of all the unique parameter names.
>
> **[2:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=126)** Wow, well, there's more than 3000 of those.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=128)** And just trying to read through that list to find what I need is not going to work.
>
> **[2:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=132)** What if I try searching for the string pH in the parameter name?
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=135)** Let's start by using the stir detect function to find the rows that contain pH.
>
> **[2:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=139)** I'm going to pipe water, to a filter and say, I'd like to stir detect, cases where the parameter variable contains pH in it.
>
> **[2:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=150)** And then I'd like to select out only the parameter so that I can see it more easily.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=155)** And then also only look at the unique values.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=158)** Well, that's still not very helpful.
>
> **[2:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=160)** There's a lot of pHs embedded in words there, and this path doesn't seem very productive.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=165)** I'm going to go ahead and try a different way.
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=167)** In addition to the parameter variable, I also had one called parameter type.
>
> **[2:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=171)** Let's take a look at the unique values there.
>
> **[2:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=176)** Okay. It's a more manageable list.
>
> **[2:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=179)** As I look at this list, two of them jump out at me.
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=182)** There's a parameter type called alkalinity hardness and pH, and a second one called conventionals.
>
> **[3:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=188)** The first one likely has my pH data and the category conventional sounds like it might have water temperature.
>
> **[3:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=195)** Let me filter my dataset down to just the rows that contain those parameter types and see what I get.
>
> **[3:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=200)** I'm going to begin by taking my water dataset and piping it to a filter where I have only cases where the parameter type is equal to alkalinity, slash hardness slash pH, or the parameter type is equal to conventionals.
>
> **[3:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=227)** And at a quick glance here, at least looking at the first few rows, it seems like I'm on the right path.
>
> **[3:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=232)** So I'm going to save this, as filtered water, and then just take a quick glimpse of filtered water.
>
> **[4:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=245)** And it looks like I'm definitely onto something here.
>
> **[4:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=248)** When I do this, I've reduced my original dataset of 1.1 million rows down to about 59,000 of interest.
>
> **[4:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=255)** Let's see what parameters exist in this filter dataset.
>
> **[4:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=264)** That's a much more manageable list than we saw earlier.
>
> **[4:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=267)** I'm down to 16 parameters that I can easily look through.
>
> **[4:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=270)** And I see there are two that I want, pH and water temperature.
>
> **[4:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=274)** Those are the first two they're on the list.
>
> **[4:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=276)** So I'm going to filter this again, this time on parameter, reducing my dataset to just pH and water temperature data.
>
> **[4:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=283)** So now I'm going to create a filtered water dataset, and I'm going to start with the whole water dataset again.
>
> **[4:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=289)** I could start with the filtered one doesn't matter, 'cause it's both going down to the same parameters.
>
> **[4:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=294)** I'm going to filter it to cases where the parameter is equal to pH or the parameter is equal to water temperature.
>
> **[5:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=304)** And if I take a glimpse of this dataset, we've down to 51,000 records and that's a great start on our work.
>
> **[5:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/filtering-the-water-quality-dataset?u=76281980&t=313)** In the next video, we'll work on these data types a little bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (1)
> **Code Identifiers:** ph (10), site_name (1), site_type (1), sample_date (1), phs (1)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** in the last (1), in the next (1)
> **Versions:** 1.1 (1)
> **Speakers:** - [instructor] (1)

#### Water quality data types
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=0)** - [Instructor] in the last video we filtered the Austin water quality dataset down to the observations and variables that are most relevant to us.
>
> **[0:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=7)** In this video, we'll convert the data types to forums that are more appropriate for analysis.
>
> **[0:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=12)** Let's begin by looking at a summary of our filtered water dataset.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=17)** One of the first things I notice here, is that there are a lot of character variables, and in fact, many of those would probably be better represented as factors.
>
> **[0:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=25)** Remember in r, a factor is a categorical variable.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=29)** That means it's a variable that has a limited number of possible choices and it's likely we might want to perform analysis based on some of the categories represented in the factor.
>
> **[0:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=38)** As I look at this list of variables site type jumps out at me as a candidate for a factor.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=43)** They're probably aren't a tremendous number of different site types.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=46)** And I'd like to be able to work with those in my analysis.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=48)** Let's convert that to a factor and do the same thing for a few other variables.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=52)** I'm going to overwrite filtered_water with a copy of itself that is sent through a pipe to the mutate function, and in that mutate function, I'm going to convert some variables to factors.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=62)** The first one is going to be siteType.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=65)** Then I'm going to do the same thing for parameterType for parameter and for unit.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=79)** Now I'm going to run that and now I'm going to look at the summary again.
>
> **[1:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=85)** And now when I do a summary and have these factors in here, you can see for the categorical variables, it's telling me how many have each level?
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=92)** This is a much more useful summary of the data and the dataset is much cleaner.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=97)** Now the last dataType issue that I noticed is that the sample date here is still listed as a string.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=102)** Let's take a look at that and see what it looks like.
>
> **[1:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=105)** From filtered water, just extract the sample date, and we can see it's a date time there, but it's all written in a character string.
>
> **[1:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=115)** I can get these into a date time data type using the Luber date library.
>
> **[1:59](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=119)** Remember Luber date contains a set of functions that convert text to dates, and they're named using the initials of the date and time elements.
>
> **[2:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=126)** I'm going to overwrite the sample date element with data from the output of Luber date.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=131)** Now, in this case, we have dates written in month, day, year forum.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=135)** So I want the mdy function and it also has time stacked on the end.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=138)** So I'm going to tack on _hms for hours, minutes, and seconds.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=143)** I'm going to take the filtered_water dataset and overwrite it with a copy of itself, piped to mutate.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=151)** And I'm going to take the sample date field and replace it with the output of the mdy_hms function applied to the sample date.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=163)** And now when I take a look at a summary, I can see that for the sample date field it's been evaluated correctly, and we can see some summary statistics.
>
> **[2:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/water-quality-data-types?u=76281980&t=174)** So now we've taken care of our data types and we're getting closer to a dataset that's tidy and ready for analysis, but we still have some work to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Statistics]] (1)
> **Code Identifiers:** filtered_water (2), sitetype (1), parametertype (1), datatype (1), mdy_hms (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Correcting data entry errors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=0)** - [Instructor] Now I'd like to take a look at the units of measurement in my dataset.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=3)** I'm going to begin by just looking at a summary of the data.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=6)** Now, some things jump out at me about the unit variable.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=9)** First, we have multiple units of measurement, I have temperature measured in both Fahrenheit and Celsius, and I have pH measured in standard units, but then I have some other strange values, feet and milligrams per liter.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=22)** Now, what are those doing in there?
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=24)** You don't measure water temperature or pH in feet or milligrams per liter.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=29)** Let me start by taking a look at the record that's measured in feet.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=32)** I'm just going to take the filtered water dataset and pipe it to the filter function and look for cases where the unit is equal to feet.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=42)** Now it says here that this is supposed to be a water temperature measurement and we have a measurement result of 78.9, which sure sounds like a degrees Fahrenheit temperature.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=52)** I bet what happened here is that somebody simply wrote down ft instead of f on a form somewhere and this was mistakenly recorded as feet, and it's reasonable to just go ahead and fix that.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=62)** So let's correct this record.
>
> **[1:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=64)** I'm going to overwrite the filtered_water dataset with a copy of itself, that's piped to the mutate function.
>
> **[1:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=70)** And in there I'm going to use the recode function to change the level of a factor.
>
> **[1:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=75)** And I'm going to recode cases where the unit is currently set to feet to be inserted equal two Deg_Fahrenheit.
>
> **[1:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=85)** So now let's take another look at a summary of this dataset, and we've gotten rid of our feet measurements and we cleaned up one piece of it.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=93)** Now we also still have those milligrams per liter data points in there as well.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=97)** And I'm not sure what to make of those, so, I'm just going to remove them from my dataset.
>
> **[1:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=101)** I'm going to overwrite filtered_water again, with a copy of itself.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=106)** That's piped through the filter function to remove cases where the unit is equal to milligrams per liter.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=116)** And if I take a look at the summary now, the milligrams per liter measurements are gone.
>
> **[2:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=120)** It's still listed there as a zero.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=122)** And that's because of the way this factor is structured, I can get rid of that zero by just using the drop levels function, to get rid of cases where there are no valid measurements for that case.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=133)** So I'm going to use the same format, overriding filtered water with a copy of itself, this time, pipe it to mutate.
>
> **[2:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=140)** And I'm going to set unit equal to droplevelsunit, which is just basically saying, remove any levels from this factor that don't have any observations on them.
>
> **[2:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=150)** And when I look at a summary, I'm now down to those three measurement types, degrees Celsius, degrees Fahrenheit, and standard units.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/correcting-data-entry-errors?u=76281980&t=158)** We've done a lot of conversion here to clean up our dataset and made some excellent headway.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Code Identifiers:** ph (2), filtered_water (2)
> **CLI Commands:** make (1)
> **Versions:** 78.9 (1)
> **Speakers:** - [instructor] (1)

#### Identifying and removing outliers
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=0)** - [Instructor] Now I want to check the water quality dataset for any outliers that might represent errors requiring correction.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=6)** I'm going to begin by doing a quick and dirty scatter plot of all of the data I'm going to use the GG plot function applied to the filtered water dataset, and set my variable mapping so that we have sample time on the X axis and the result on the Y axis.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=21)** And then just ask for a quick and dirty scatterplot, Gian point.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=26)** Now there's one point here that's clearly completely off the mark.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=29)** There's no way that a temperature or pH could be over 1 million.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=33)** So let's dig into that and take another look.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=35)** I'm going to filter this dataset so that I only showcases where the result is over 1 million.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=43)** And when I look at that, I see that it is a water temperature measurement, where the temperature is measured as over a million degrees Celsius.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=51)** And unlike some of the earlier data issues I've faced, I don't know how to correct this one so I'm just going to remove it from the dataset.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=57)** I'm just going to overwrite filtered water, with a copy of itself, piped to the filter function, where I only show results that are less than 1 million.
>
> **[1:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=68)** And now let's take a look at a summary of this dataset.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=73)** And my results now don't have anything that's over a million, but I do still have some results that are in the thousands.
>
> **[1:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=80)** Those are still some pretty high values.
>
> **[1:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=81)** And actually I'm confident that a water temperature or pH should certainly not be over a thousand.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=87)** So let's do this again.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=89)** This time I'm going to just copy and paste my code here.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=92)** And I'm going to filter out any results that are over a thousand as well.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=97)** I'll take another look at a summary and see what's left.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=102)** And now I can see my results range from zero to 78.9.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=106)** So this is much more reasonable.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=108)** I've done the quick and dirty cleaning, and now I'd like to drill into some box plots to help me further visualize the data.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=114)** The first thing I'd like to do is get a black spot by measurement unit.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=117)** So I'm going to start with my filtered water dataset in GG plot.
>
> **[2:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=121)** And I'm going to set my mapping this time so that I have on the X axis, the unit, and then on the Y axis the result.
>
> **[2:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=130)** And I'd like a box plot this time.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=133)** So when I take a look at this, we have some interesting values.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=137)** So first of all, I look at the degrees Celsius and those Celsius values over 60 degrees should probably be Fahrenheit because 60 degrees Celsius is 140 degrees Fahrenheit, and that's a little high for a water temperature.
>
> **[2:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=149)** Let's go ahead and fix those.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=151)** And because this is now a factor we're going to have to do a little bit of tricky manipulation.
>
> **[2:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=155)** I'm going to convert the unit back to text, work with it, and then convert it back to a factor again.
>
> **[2:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=162)** So I'm going to overwrite filtered water with a copy of itself, that's piped two, first a mutate where the first thing I do is that conversion unit equals as character unit.
>
> **[2:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=174)** And then from there, I'm going to look for cases.
>
> **[2:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=178)** I'm going to change the unit in some special cases, using the FLS function.
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=182)** And I'm going to look for cases where the unit is currently equal two degrees Celsius, and the result is over 60.
>
> **[3:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=191)** And in those cases, I'm going to change the unit to degrees Fahrenheit.
>
> **[3:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=196)** And in all other cases, I'm going to leave the unit alone.
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=199)** And then once I've done that, I'm going to convert the unit back to a factor.
>
> **[3:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=207)** And we'll run this, and then let's take another look at those box plots.
>
> **[3:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=211)** We'll just use the same code.
>
> **[3:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=214)** And now we still have some outliers, but these outliers don't defy credibility.
>
> **[3:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/identifying-and-removing-outliers?u=76281980&t=218)** We've done a good job handling them and we're ready to move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (1)
> **Code Identifiers:** ph (2)
> **Env Vars:** fls (1)
> **Versions:** 78.9 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Converting temperature from Fahrenheit to Celsius
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=0)** - [Instructor] In the last video, we cleaned up some outlier data points, but we still have one messy element.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=5)** There are temperatures recorded in both Fahrenheit and Celsius.
>
> **[0:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=8)** We should really clean those up so we can perform analysis on measurements taken on the same scale.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=13)** So I'm going to convert the small number of Fahrenheit records that I have to Celsius.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=17)** Let's begin by finding the Fahrenheit values in the data set.
>
> **[0:21](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=21)** I can use the which function applied to the filtered water unit field to look for cases where that field is equal two degrees Fahrenheit.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=31)** And what this function returns is a vector containing the row numbers, where we have the degrees Fahrenheit listed.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=37)** And actually I'm going to go ahead and convert those to degrees Celsius.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=41)** So I'm going to store this vector in an object called Fahrenheit where I can reference it later.
>
> **[0:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=48)** And then I'm going to convert those to Celsius by taking the filtered water result values that are listed in that Fahrenheit vector and overriding them, and then multiply by five overnight.
>
> **[1:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=64)** So now I've made that conversion.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=66)** Let's take another look at our box plots.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=69)** The measurements are all the correct values now, but I still need to fix the unit value of those converted records so that it reads Celsius instead of Fahrenheit, I'm going to take records from the filtered water dataset and particularly the unit variable that appear in the Fahrenheit vector.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=86)** And I'm going to change that unit to be degrees Celsius, and then we'll check our plots once again.
>
> **[1:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=93)** And now we have only degrees Celsius and standard units in here.
>
> **[1:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=97)** So let's take another look at a summary of this data.
>
> **[1:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=103)** And we still have a little messiness here in the unit field because there are empty factor levels.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=107)** I can use that drop levels function to get rid of them.
>
> **[1:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=110)** I'm just going to overwrite the filtered water unit with the output of applying the drop levels function to that same field.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=122)** And now if I take another look at the summary, my unit is down two degrees Celsius and standard units.
>
> **[2:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=132)** So now we've done most of the data wrangling.
>
> **[2:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=134)** The last thing I need to do is get data from the same observation into the same row.
>
> **[2:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/converting-temperature-from-fahrenheit-to-celsius?u=76281980&t=138)** And we'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (1)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### Widening the water quality dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=0)** - [Instructor] The last test that we have before declaring our dataset tidy is moving the measurements about water temperature and pH from the same time and location into a single row.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=10)** I'm going to begin that by first taking another look at the dataset here and realizing that I have two extraneous columns.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=16)** We no longer need Parameter Type which we use to do some earlier filtering.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=20)** And we also no longer need Unit, because we're down to common units.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=24)** I can remove both of those using the Select function.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=27)** So I'm going to do that by taking the filtered water dataset and overriding it with a copy of itself, piped to select.
>
> **[0:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=34)** And then I can use the select minus format, select minus parameter type to remove parameter type and then minus unit to remove unit.
>
> **[0:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=43)** And when I look at a summary of this again, I see that I'm now down to just those five variables that I'm interested in.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=51)** So now let's jump right in and try pivot wider.
>
> **[0:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=54)** I'm going to create a new table called filtered water wide that's going to contain the new dataset that I create using pivot wider.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=62)** So I'm going to then call pivot wider and give that a few arguments.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=67)** First, we needed the name of the longer dataset, filtered underscore water.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=71)** And then we need to tell pivot wider where the names are going to come from and where the values are going to come from.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=77)** So the names are going to come from the parameter field, and the values are going to come from the result field.
>
> **[1:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=85)** Now let's go ahead and run that.
>
> **[1:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=87)** And now I get a warning message.
>
> **[1:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=89)** It's telling me that values are not uniquely identified.
>
> **[1:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=92)** So we have an error here about duplicate rows.
>
> **[1:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=94)** What that means is when the pivot wider function tried to bring together records from the same site, time and measurement type, it found multiple records that need to go into the same spot, and it didn't know how to handle those duplicate records.
>
> **[1:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=106)** So let's find those.
>
> **[1:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=108)** I'm going to start by building a table that excludes the result data.
>
> **[1:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=111)** It only has the information about the parameter, the site, the date and the time, the information that excludes the result, because I want to be able to see if there's two different results in there for the same values of the other fields.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=124)** So to do that, I'm going to just create those dupe check table which is just a temporary thing I'm working with.
>
> **[2:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=129)** And I'm going to create that from filtered water, except I want everything except the last column.
>
> **[2:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=135)** So we have that.
>
> **[2:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=137)** And now I can find which records are duplicates by using a function called duplicated.
>
> **[2:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=143)** And I'm just going to run duplicated on this new dupe check that I just created.
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=147)** And this gives me a big long string of trues and falses.
>
> **[2:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=151)** That's a vector showing me true where in a row duplicates an earlier row in the table.
>
> **[2:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=156)** And those are the ones that I want to handle.
>
> **[2:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=158)** So I want to identify their row numbers.
>
> **[2:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=160)** I don't want this entire vector of trues and falses.
>
> **[2:43](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=163)** I just want the numbers of the rows, where the value is true.
>
> **[2:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=166)** So let's go ahead and get that.
>
> **[2:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=167)** I can get that by doing which duplicated dupe check, which will just return the row numbers instead of all of those trues and falses.
>
> **[2:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=177)** And then I'm going to save these in a vector called dupes.
>
> **[3:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=180)** These are the duplicate records.
>
> **[3:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=182)** Now with this many duplicate records, if I were performing this analysis for the city, I'd pick up the phone and call a subject matter expert for advice, and I'd really want to understand why all these duplicate records exist.
>
> **[3:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=193)** And maybe they routinely take two different measurements at the same time and average them.
>
> **[3:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=197)** Maybe this is an error in the dataset.
>
> **[3:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=199)** But for the simplicity of our work, I'm just going to drop these duplicates outright.
>
> **[3:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=204)** So I'm going to take my filtered water dataset and overwrite it with a copy of the filtered water dataset that removes the duplicate rows.
>
> **[3:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=215)** And now I'm going to try running my pivot again and see if it works this time.
>
> **[3:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=221)** It looks like it has, so let's take a look at what this dataset looks like.
>
> **[3:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=226)** And that looks pretty tidy to me.
>
> **[3:48](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=228)** Now I'm just going to conclude by cleaning up the column names here.
>
> **[3:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=232)** I have that water temperature that has that space in it, and I really don't want that.
>
> **[3:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=236)** So I'm just going to take filtered water wide and overwrite it with a copy of itself, that's piped to rename.
>
> **[4:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=245)** And I'm going to rename my pH column, so it has a lowercase P and a capital H instead of being all caps.
>
> **[4:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=252)** And then I'm going to change my, that water space temperature to just be a temperature column.
>
> **[4:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-water-quality-dataset?u=76281980&t=262)** And now, if I finally take a look at this dataset, I've got a nice clean dataset, ready to go for any further analysis that I'd like to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** ph (2)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 8. Data Wrangling Case Study: Social Security Disability

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=0)** - [Instructor] For our third case study, we'll turn to data that the US government collects about the Social Security Disability Program.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=6)** As you may know, the Social Security Disability Program provides insurance benefits to eligible individuals in the US who are unable to work because of physical or mental limitations.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=16)** This program is quite large and it has an intricate application process that requires multiple steps of review.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=22)** It's designed to ensure that eligible people receive benefits, but those able to work do not.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=28)** The social security administration is responsible for reviewing those applications and shepherding them through the decision process.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=35)** They receive millions of applications each year.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=37)** In 2016, they processed over 2.3 million applications.
>
> **[0:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=41)** While many of these applications come through the Social Security website, others still arrive by mail, in person, and over the phone.
>
> **[0:50](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=50)** The processing costs for Social Security are much lower if applicants use the online process because it automatically inputs data into the Social Security System, reducing administrative overhead.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=61)** Therefore since 2012, they've been pushing hard to move these applications online.
>
> **[1:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=66)** In our analysis, we'll take a look at whether they've been successful in this work.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=71)** And the Social Security Administration provides public data on the number of applications they process each month and the percentage that were online, I've stored a copy of this data set for you on the You Can Learn IT site.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=82)** In the next video, we'll import it into R and begin working with it.
>
> **[1:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=86)** In the meantime, I have it here opened in Excel.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=88)** Before I start working with this data set, I just want to take a look around and get a feel for how it's structured and the information it contains.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=95)** Now it looks like we have a row corresponding to each fiscal year from 2008 through 2017.
>
> **[1:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=102)** Then there seemed to be two columns for each month.
>
> **[1:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=104)** One contains the total number of applications received that month, while the other contains the number of applications received over the internet.
>
> **[1:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=112)** I also noticed that the first column in the spreadsheet is for October.
>
> **[1:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=116)** Now that might seem odd at first glance, but one important piece of background information that you should have as we begin our analysis is that the US government does all of their reporting on a fiscal year basis and the government fiscal year begins in October of the year before.
>
> **[2:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=131)** For example, fiscal year 2021 begins in October 2020.
>
> **[2:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=136)** Now there's definitely some work to be done to get this data set into tidy form, but we have all the tools of the Tidyverse available to help us take care of it.
>
> **[2:25](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/understanding-the-social-security-disability-dataset?u=76281980&t=145)** In the next video, we'll get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (7), data (6), next (2), application (1), [[Microsoft Excel|Excel]] (1)
> **Cross-References:** in the next (2)
> **Versions:** 2.3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Importing the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=0)** - [Instructor] Here I am in Rstudio with a clean script ready to go.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=3)** Together, we'll create the code to turn this social security disability data into a tidy dataset.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=9)** That's ready for analysis.
>
> **[0:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=11)** We'll begin by importing it into R, and as with past data sets, we need to start by loading the tidyverse.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=17)** And then we're also going to be using the lubridate package in this code.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=22)** So now I can try to load the data set.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=24)** I've stored it on the, You Can Learn IT Site, so that you can pull down the exact same data that I'm using in the case study.
>
> **[0:29](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=29)** And that way you should see the same results that I do.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=32)** As with our other data sets I'm going to load in this disability data from a CSV file using the read underscore CSV function.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=40)** Let's go ahead and try to do that in the data set stored at [http://fiveninefourfourfourtwo.youcanlearnit.net](http://fiveninefourfourfourtwo.youcanlearnit.net)/
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=51)** ssadisability.csv.
>
> **[0:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=58)** Now let's take a look at what got loaded here.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=62)** Well, this looks like a pretty good start.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/importing-the-social-security-disability-dataset?u=76281980&t=65)** The read CSV function, read the data in, stored the fiscal year as a character string, and then the application data as numeric doubles, we do have a few NA values out at the end of the data, and that's just because it appears that the dataset ended in January of fiscal year 2017.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[RStudio]] (1), [[Security]] (1), application (1)
> **Env Vars:** csv (3)
> **File Paths:** ssadisability.csv (1)
> **URLs:** [http://fiveninefourfourfourtwo.youcanlearnit.net](http://fiveninefourfourfourtwo.youcanlearnit.net) (1)
> **Speakers:** - [instructor] (1)

#### Making the social security disability dataset long
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=0)** - [Instructor] So let's just take another look at this data set and with it.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=3)** My biggest problem is the arrangement of the data.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=6)** Primarily I have data for many different observations in the same row.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=10)** So what I want to do is begin by lengthening this wide data set.
>
> **[0:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=14)** I'd like to convert it.
>
> **[0:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=15)** So I have a single data element in each row.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=17)** And as we've done with other data sets, we can accomplish this by using the pivot longer function.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=22)** Let's go ahead and give that a try.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=24)** I'm going to create a new table called ssa_long, and I'm going to create it by starting with the pivot_longer function and giving it a few arguments.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=33)** First, I need to tell it where to get the data and that's going to be from the SSA table.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=37)** And then I need to tell it that I don't want to pivot the fiscal year column.
>
> **[0:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=42)** I want to pivot all the other columns, the ones that are for different months, total or internet values, but that fiscal year I went to leave alone.
>
> **[0:49](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=49)** So I'm going to use the exclamation point fiscal year to let that column remain as is.
>
> **[0:56](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=56)** And then I need to set the names to and values to arguments, just saying where that data should go.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=61)** So the names of column headers that are being pivoted should wind up going into a new column called month and the values should go into a new column called applications.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=73)** We run that and then let's take a look at the results using the print function.
>
> **[1:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=77)** I'm going to ask for the first 20 rows here, and that looks pretty good.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=82)** I noticed that my dataset isn't quite correct yet.
>
> **[1:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=84)** I have totals and internet counts for the same months in different rows, but we'll get back to that later.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/making-the-social-security-disability-dataset-long?u=76281980&t=90)** First, I want to get some other data manipulation out of the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Data Manipulation]] (1)
> **Code Identifiers:** ssa_long (1), pivot_longer (1)
> **Env Vars:** ssa (1)
> **Speakers:** - [instructor] (1)

#### Formatting dates in the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=0)** - [Lecturer] So, now that we have a nice long data set, I'd like to start working with the date information that it contains.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=6)** I'll begin by taking a look at the month variable, specifically, I want to know all the unique month values that appear in the data set.
>
> **[0:15](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=15)** Now, this was problematic.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=16)** I do have months there, but this column also contains more information.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=20)** It tells me whether the data is the total number of applications for that month, or whether it's the number filed over the internet.
>
> **[0:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=26)** I'd like to split this into two pieces.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=28)** And as we've learned in this course, we can do that with a separate function from the tidy R library.
>
> **[0:33](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=33)** So let's go ahead and do that.
>
> **[0:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=35)** I'm going to overwrite ssa_long with a copy of itself, sent to the separate function, and then that function takes some arguments.
>
> **[0:44](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=44)** First, the column I'd like to separate is the month column, and I'd like to separate it into two columns, one called month, and one called application method.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=55)** And then I need to tell it how to do that separation, and I'm going to separate it on the underscore character.
>
> **[1:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=61)** So, let's run that, and take a look at the first 20 rows here using the print function.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=69)** And that's a great start, I have the variable separated now.
>
> **[1:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=73)** Let's take a look at all the unique values for the month variable.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=79)** These mostly look good, but there're a few that are going to cause me problems.
>
> **[1:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=83)** For some reason, October through May, all use the standard three letter abbreviations for the months, but June, July, and August have the months spelled out.
>
> **[1:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=91)** I'm going to need you to fix that before I can start working with these in date form.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=95)** Now, I can do that by simply over-writing the abbreviations with the correct values, but I'd like to do it in a little more elegant fashion.
>
> **[1:41](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=101)** I'm going to use the sub-string function to remove everything except the first three letters from all of the month values.
>
> **[1:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=107)** Let's go ahead and give that a try by taking ssa_long and over-writing it with a copy of itself, piped to mutate.
>
> **[1:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=114)** And in that mutate, I'm going to set the month equal to the sub-string extracted for month, beginning of the first character and ending of the third character.
>
> **[2:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=124)** And then I can use the unique function again, to verify that that worked.
>
> **[2:08](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=128)** And now I see that I have nice clean three-letter abbreviations for each one of these months.
>
> **[2:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=133)** Let's do the same thing by taking a look at the unique values of Fiscal Year's letter in this dataset.
>
> **[2:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=139)** Now, these are also going to cause me some issues, because they're not real years.
>
> **[2:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=142)** I want to switch these from this format into a standard year format.
>
> **[2:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=147)** Now these dates are all from the 21st century, so I can simply replace all the FYs with twenties, and that should do the trick.
>
> **[2:34](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=154)** I can use the string replace function from the string R library to do just that.
>
> **[2:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=159)** I'm going to take ssa_long and over-write it again with a copy of itself, pipe to mutate.
>
> **[2:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=165)** And I'm going to replace the Fiscal Year variable with the output of string replace on Fiscal Year, where I replace all of the occurrences of FY with 20.
>
> **[3:01](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=181)** And now, when I take another look at the unique values, I can see that they're all years.
>
> **[3:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=186)** Those are looking pretty good.
>
> **[3:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=187)** Now that I have the month and year in separate fields, I'd like to use them to compose a date value using the lubridate library.
>
> **[3:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=194)** I'm just going to put all of these in as the first day of the month that they're from.
>
> **[3:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=198)** Let's build that string using the paste function.
>
> **[3:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=200)** This function simply concatenates or combines several string variables into a single string.
>
> **[3:26](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=206)** So, I'm just going to do that here without saving it yet, just to give you an idea of what it looks like, and I'm going to put in 01, for the first day of the month, and then we're going to pull the month value out of ssa_long and the Fiscal Year value out of ssa_long.
>
> **[3:42](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=222)** And that gives me this list of date strings.
>
> **[3:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=225)** So, let's go ahead and over-write the current values in ssa_long'sDate with those new values that I just created.
>
> **[3:54](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=234)** And, we'll use the unique function just to take a quick look at the output, make sure it looks normal.
>
> **[4:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=240)** That's pretty reasonable, it looks great.
>
> **[4:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/formatting-dates-in-the-social-security-disability-dataset?u=76281980&t=242)** Now we have standard dates that are easier to work with in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), application (1), [[Jetpack Compose|Compose]] (1)
> **Code Identifiers:** ssa_long (6), sdate (1)
> **CLI Commands:** make (1)
> **Speakers:** - [lecturer] (1)

#### Fiscal years in the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=0)** - [Instructor] Let's talk about how fiscal years affect our data.
>
> **[0:03](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=3)** Now you're already familiar with the concept of a calendar year.
>
> **[0:06](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=6)** It's a 12-month period that begins in January and ends in December.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=10)** Now for accounting reasons, government agencies and businesses also use the concept of a fiscal year and a fiscal year is also a 12-month period, but it can begin in any month of the year depending upon the choice made by that business or government agency.
>
> **[0:24](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=24)** The US government uses a fiscal year that begins in October.
>
> **[0:27](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=27)** And when you compare this to the calendar year, it means that while October, 2016 is the 10th month of calendar year 2016, it's also the first month of fiscal year 2017.
>
> **[0:39](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=39)** In the last video, we created dates without paying any attention to this difference and now we need to correct that.
>
> **[0:45](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=45)** Basically, we need to take the dates that come from months that fall into the next fiscal year; that's October, November and December, and simply subtract one from the year to correct them.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=55)** So let's do this conversion in R.
>
> **[0:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=57)** What we're going to need to do is convert the fiscal year from a character string to a numeric value so we can work with it mathematically.
>
> **[1:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=65)** Subtract one from that year in cases where the month is October, November or December, and then rebuild our date string.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=72)** So we'll do that in one series of commands.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=74)** I'm going to take my SSA long dataset and overwrite it with a copy of itself that's piped to a series of three mutates.
>
> **[1:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=82)** The first one is just going to take the fiscal year and convert it to a numeric value because it's currently a character string.
>
> **[1:30](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=90)** And then the next thing we're going to do in our second mutate is perform that subtraction.
>
> **[1:35](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=95)** So we're going to take our fiscal year and use the FLS function and say in cases where the month from the date is greater than or equal to 10, so it's 10, 11 or 12, October, November or December, we're going to subtract one from the fiscal year to get back to the calendar year.
>
> **[1:53](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=113)** And in other cases for other months, the fiscal year remains the same.
>
> **[1:57](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=117)** Then once we've done that, we can rebuild our date string with the correct calendar year in there.
>
> **[2:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=122)** So we're going to say date equals and then we're going to apply the DMY function from lubridate to the output of pasting together zero one, the month and the fiscal year.
>
> **[2:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/fiscal-years-in-the-social-security-disability-dataset?u=76281980&t=134)** And when we run this, we wind up having our dates converted correctly so now everything is in calendar years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), data (1), business (1)
> **Env Vars:** ssa (1), fls (1), dmy (1)
> **Cross-References:** in the last (1)
> **Definitions:** means that (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### Widening the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=0)** - [Instructor] Now I just need to perform a few more transformations to get this dataset into its final form.
>
> **[0:05](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=5)** Let's begin by taking a look at where we are with the summary function.
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=10)** The first thing I noticed is that I have some extra variables here.
>
> **[0:13](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=13)** I use the month and fiscal year to create the date variable.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=17)** But now that I have that one, I can get rid of the two that I no longer need.
>
> **[0:20](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=20)** So we need to take the SSA long dataset and overwrite it with a copy of itself that I run through select where I select out the fiscal year and the month.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=31)** Now I also noticed the application method is stored as a character string, but it only has two values, internet or total.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=37)** So I'd rather have that as a factor.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=40)** Let's do that with mutate and we're going to set application method equal to the as factor version of application method.
>
> **[0:52](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=52)** And let's take a look at how that looks now.
>
> **[0:55](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=55)** Great, now the last thing I want to do to make this a Tidy dataset is widen it a little bit.
>
> **[1:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=60)** I currently have the number of internet applications in a given month and the number of total applications in that month as separate rows.
>
> **[1:07](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=67)** Those are part of the same observation.
>
> **[1:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=69)** So I really want to get them into the same row.
>
> **[1:11](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=71)** And I can do that with the pivot wider function.
>
> **[1:14](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=74)** I'm going to create a dataset again here.
>
> **[1:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=76)** I'm just going to call it SSA now.
>
> **[1:18](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=78)** And it's going to be the output of applying pivot wider to the SSA long dataset.
>
> **[1:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=83)** And I'm going to take the names from the application method columns.
>
> **[1:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=88)** So we'll get two columns there, one for internet and one for total, and then the values are going to come from the applications column.
>
> **[1:36](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=96)** We can run that and then let's take a look.
>
> **[1:38](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/widening-the-social-security-disability-dataset?u=76281980&t=98)** If we do print SSA and equals 20, there's our dataset and it's in its final Tidy form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4)
> **Env Vars:** ssa (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Visualizing the social security disability dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=0)** - [Instructor] Now that we have a tidy data set, we can try to answer our original question.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=4)** Have the efforts made by the Social Security Administration to move applicants online, been successful?
>
> **[0:10](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=10)** To do this, I want to add a new variable to my data set, to make the questions simpler to answer, the percentage of applications that were online.
>
> **[0:17](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=17)** I can get this by simply dividing the internet application number by the total applications.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=22)** So let's do that.
>
> **[0:23](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=23)** I'm going to overwrite SSA with a copy of itself, piped to mutate and in that mutate, I'm going to create a new variable called online percentage.
>
> **[0:32](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=32)** That's calculated by taking the internet applications, dividing it by the total applications and multiplying it by 100.
>
> **[0:40](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=40)** And then the last thing I'm going to do is plot that variable over time, to get an answer to our question in a nice, easy visual form.
>
> **[0:47](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=47)** So I'm going to use the SSA data set and my variable mapping.
>
> **[0:51](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=51)** We'll be putting date on the X axis and online percentage on the Y axis.
>
> **[0:58](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=58)** And then I'm going to ask for a nice scatter plot.
>
> **[1:02](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=62)** It looks to me like the efforts to convert applications were successful for many years at the beginning of this data set in 2007, less than 10% of applications were online.
>
> **[1:12](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=72)** And that number grew steadily until 2014 when it had exceeded 50%, but then it looks like it leveled off.
>
> **[1:19](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/visualizing-the-social-security-disability-dataset?u=76281980&t=79)** So the Social Security Administration might have some more work to do if they want to continue to increase that number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Security]] (2), application (1)
> **Env Vars:** ssa (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=0)** - [Mike] Thanks for joining me for this exploration of Data Wrangling in R.
>
> **[0:04](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=4)** I hope that you've learned quite a bit in this course and found it helpful in developing your R skills.
>
> **[0:09](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=9)** If you haven't gone through the case studies step-by-step on your own, I encourage you to go back and do that now.
>
> **[0:16](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=16)** You also might want to try starting with one of the case study datasets and building an R script to tidy it on your own.
>
> **[0:22](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=22)** You can reference the videos if it helps, but doing the work yourself will really helped solidify your skills.
>
> **[0:28](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=28)** You now have the skills that you need to perform data wrangling in R.
>
> **[0:31](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=31)** As a next step, I encourage you to try these skills on a data set from your work or school.
>
> **[0:37](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=37)** If you don't have a good data set that you can use, the U.S. government's data portal at [data.gov](https://data.gov) is a great starting point to find all sorts of interesting data.
>
> **[0:46](https://www.linkedin.com/learning/data-wrangling-in-r-14135737/next-steps?u=76281980&t=46)** Congratulations on completing this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), next (1)
> **CLI Commands:** find (1)
> **URLs:** [data.gov](https://data.gov) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [mike] (1)


## Instructor

- [[Mike Chapple]]

## Resources

- Exercise files available

## Skills Covered

- Data Wrangling
- R (Programming Language)

## Path Context

### In [[Getting Started with R for Data Science]]
← [[Complete Guide To R Wrangling Visualizing And Modeling Data]] | **2 of 4** | [[R for Data Science- Analysis and Visualization]] →

### In [[Moving from Data Analyst to Data Scientist]]
← [[Intermediate Sql For Data Scientists]] | **2 of 11** | [[Python Functions for Data Science]] →

## Appears In

- [[Getting Started with R for Data Science]]
- [[Moving from Data Analyst to Data Scientist]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide To R Wrangling Visualizing And Modeling Data]] — R (Programming Language), Data Wrangling
- [[Build Advanced Charts in R]] — R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[R Tidyverse Applications]] — R (Programming Language)
- [[Learning the R Tidyverse]] — R (Programming Language)

---

[↑ Back to top](#)