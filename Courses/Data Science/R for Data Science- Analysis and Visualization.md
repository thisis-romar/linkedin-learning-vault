---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: r-for-data-science-analysis-and-visualization
url: "https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization"
duration_minutes: 173
duration: 2h 53m
level: Beginner
updated: 4/25/2025
learners: 17267
skills:
  - R (Programming Language)
  - Data Analysis
  - Data Visualization
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFqJNVUz0fQoQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674158733713?e=2147483647&amp;v=beta&amp;t=NAvM1qkexUSila_8hrecoe6TepNIcNlaLmLvqd6fAgs"
linkedin_topic: Data Science
learning_paths:
  - '[[Moving from Data Scientist to Data Analyst]]'
  - '[[Getting Started with R for Data Science]]'
  - '[[Advance Your Skills in R]]'
prev_courses:
  - '[[SQL for Data Analysis]]'
  - '[[Data Wrangling in R]]'
  - '[[Complete Your First Project in R]]'
next_courses:
  - '[[Python for Data Analysis- Solve Real-World Challenges]]'
  - '[[R Code Challenges- Data Science]]'
  - '[[R Code Challenges- Data Science]]'
path_nav: '[{"path":"Moving from Data Scientist to Data Analyst","position":2,"total":10,"prev":"SQL for Data Analysis","next":"Python for Data Analysis- Solve Real-World Challenges"},{"path":"Getting Started with R for Data Science","position":3,"total":4,"prev":"Data Wrangling in R","next":"R Code Challenges- Data Science"},{"path":"Advance Your Skills in R","position":3,"total":8,"prev":"Complete Your First Project in R","next":"R Code Challenges- Data Science"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/data-analysis
  - skill/data-visualization
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/R%20for%20Data%20Science-%20Analysis%20and%20Visualization.md)

![R for Data Science: Analysis and Visualization](https://media.licdn.com/dms/image/v2/C560DAQFqJNVUz0fQoQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674158733713?e=2147483647&amp;v=beta&amp;t=NAvM1qkexUSila_8hrecoe6TepNIcNlaLmLvqd6fAgs)

# R for Data Science: Analysis and Visualization

> If you want to participate in the data revolution, you need the right tools and skills. R is a free, open-source language for data science that is among the most popular platforms for professional analysts. Learn the basics of R and get started finding insights from your own data, in this course with professor and data scientist Barton Poulson. The lessons explain how to get started with R, includ

> [LinkedIn Learning](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization) | 2h 53m | Beginner | 17K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [R for data science](#r-for-data-science)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. What Is R?**](#1-what-is-r) (2 videos)
  - [R in context](#r-in-context)
  - [A note about AI in R](#a-note-about-ai-in-r)
- [**2. Getting Started**](#2-getting-started) (11 videos)
  - [Installing R](#installing-r)
  - [Installing RStudio](#installing-rstudio)
  - [Navigating the RStudio environment](#navigating-the-rstudio-environment)
  - [Entering data](#entering-data)
  - [Data types and structures](#data-types-and-structures)
  - [Comments and headers](#comments-and-headers)
  - [Packages for R](#packages-for-r)
  - [The tidyverse](#the-tidyverse)
  - [Piping commands with |](#piping-commands-with)
  - [Sample datasets](#sample-datasets)
  - [Importing data from a spreadsheet](#importing-data-from-a-spreadsheet)
- [**3. Data Visualization**](#3-data-visualization) (7 videos)
  - [Using colors in R](#using-colors-in-r)
  - [Creating bar charts](#creating-bar-charts)
  - [Creating histograms](#creating-histograms)
  - [Creating box plots](#creating-box-plots)
  - [Creating scatterplots](#creating-scatterplots)
  - [Creating line charts](#creating-line-charts)
  - [Creating cluster charts](#creating-cluster-charts)
- [**4. Data Wrangling**](#4-data-wrangling) (3 videos)
  - [Selecting cases and subgroups](#selecting-cases-and-subgroups)
  - [Recoding variables](#recoding-variables)
  - [Computing new variables](#computing-new-variables)
- [**5. Data Analysis**](#5-data-analysis) (5 videos)
  - [Computing frequencies](#computing-frequencies)
  - [Computing descriptives](#computing-descriptives)
  - [Computing correlations](#computing-correlations)
  - [Computing a linear regression](#computing-a-linear-regression)
  - [Computing contingency tables](#computing-contingency-tables)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [R for data science](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=0)** - [Barton] Every element of our professional lives and even our personal lives is being transformed by data.
>
> **[0:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=7)** But if you want to get the benefits of this data revolution, then you need to know how to work with data.
>
> **[0:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=14)** And one of the best ways to do that is with R, a free and open source language that was specifically developed for exploring and modeling data to help you find the insight that you need.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=26)** I'm Barton Poulson, and in this course, we'll take a look at how you can get started with R.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=32)** I'll show you how to install R, the R Studio Environment, additional code packages that extend R's functionality.
>
> **[0:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=40)** We'll see how to make data visualizations, how to wrangle data, and to calculate descriptive [[Statistics]].
>
> **[0:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=46)** We'll work with some powerful methods for analyzing associations in data and building statistical models to help you get insight.
>
> **[0:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=54)** We'll also see how you can document and share your work with others so they can get the same benefits of the data revolution.
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-for-data-science-25381119?u=76281980&t=62)** And so with that in mind, let's get started with R for [[Data Science]] analysis and visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Data Science]] (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [barton] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=1)** - [Instructor] If you have access to the Exercise Files for this course, then you can download them to your desktop, as I've done here.
>
> **[0:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=7)** When you open the Exercise Files folder, you'll see three folders.
>
> **[0:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=11)** The first one has the code.
>
> **[0:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=13)** These are the R scripts that I'll use inside the course.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=16)** The second is for data.
>
> **[0:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=18)** I have a dataset that I'm using as an example in two different formats, in csv format, and in [[Microsoft Excel|Excel]] xlsx format.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=32)** As well as a code book that explains what all of these variables mean.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=39)** There's also an output folder.
>
> **[0:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=40)** Now, right now, that's empty, but you could save any images and other files you create.
>
> **[0:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=45)** And, in addition to these, there's an R for [[Data Science]] README file that gives you a short explanation of these same things I just showed you, as well as an R for Data Science.Rproj file.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=59)** This is something that helps organize the documents in the software, [[RStudio]], that we'll be using.
>
> **[1:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=65)** If you don't have access to these files, that's okay.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-the-exercise-files-25379143?u=76281980&t=68)** You can still follow along by watching how I use the course files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Microsoft Excel|Excel]] (1), [[RStudio]] (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** readme (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 1. What Is R?

[↑ Back to Table of Contents](#table-of-contents)

#### [R in context](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=1)** - When it comes to working with data, you're confronted with a potentially overwhelming range of choices that are all competing for your attention.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=9)** Now, the first and most obvious choice for working with data is a spreadsheet application like [[Microsoft Excel]] or [[Google]] Sheets.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=16)** Although there are other choices, I like to think of spreadsheets as the "universal data container" because they're everywhere.
>
> **[0:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=25)** Everybody uses them.
>
> **[0:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=27)** Spreadsheets are great because they let you organize your data however you want.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=31)** They can sort, they can filter the data, they can count and summarize, and they can quickly make basic graphs.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=37)** Truthfully, spreadsheets are probably sufficient for the majority of real world data tasks that don't involve creating statistical models for your data.
>
> **[0:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=47)** But when it's time to move beyond summaries and basic graphs and start making those statistical models, then you'll need something more specialized like a statistical application.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=57)** Some of the most common statistical applications are SPSS, SAS and my personal favorite, the open source application Jamovi, all of which give user-friendly point and click interfaces for data exploration and modeling.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=71)** But you may have data that doesn't fit nicely into the rows and columns that standards statistical applications expect.
>
> **[1:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=77)** Or you may have questions that go beyond what dropdown menus are able to do.
>
> **[1:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=83)** In that case, you'll need to take the final step to a data-oriented programming language, which gives you the ultimate and control and power in analyzing data.
>
> **[1:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=92)** Now, some of the most common and interesting choices for data-oriented programming are [[Python (Programming Language)|Python]], which is a powerful general purpose programming language that has been well adapted for working with data and are a language that is developed specifically for working with data and of course, the subject of this course.
>
> **[1:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=110)** Now, I want to show you some data on the relative popularity and use of different languages.
>
> **[1:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=117)** Some of this data is very fresh, some of it is several years old, but all of it exists to put R into the context of methods for working with data.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=129)** Let's start by looking at the TIOBE index for February of 2025.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=135)** And this is a very common index on the popularity of software worldwide.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=140)** TIOBE, by the way, stands for the importance of Being Earnest, Oscar Wilde's play.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=145)** But what you see from this is that the top three are general programming, Python and C++ and [[Java]], and there's nothing specific to [[Data Science]].
>
> **[2:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=154)** That's because people use them for all sorts of things like building applications, like building in corporate software.
>
> **[2:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=162)** Those are very common choices for those things.
>
> **[2:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=165)** You have to skip down a bit to get to the data specific languages.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=169)** You see here that R is at number 15 where it counts for 1% of all software programming, and MATLAB is right below at number 16, also at about 1%.
>
> **[3:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=181)** So in the total, everybody doing anything programming with computers, R's kind of low on there, but it is one of the top ones that is specific to working with data.
>
> **[3:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=192)** Now, in terms of data science, one of the best sources has historically been KDnuggets, which has to do with [[Data Mining]].
>
> **[3:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=200)** Unfortunately, they haven't updated their data since 2019, so this is a little out of date, but the general pattern has been consistent.
>
> **[3:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=210)** And what you see here is that Python is on the top with 66% of people reporting using Python in their day-to-day data mining and data science work, followed by RapidMiner.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=222)** And then the third one is R.
>
> **[3:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=225)** So this is, again, the first specific data programming language.
>
> **[3:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=230)** I want to mention one thing, it's just one step above [[Microsoft Excel|Excel]], the spreadsheet, at 35%.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=236)** And so that is also a very common tool for use in data science projects.
>
> **[4:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=242)** Some data that's not as old but hasn't been updated since 2022 has to do with data science jobs posted on Indeed.
>
> **[4:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=250)** And what you see here is that when it comes to a job that specifically mentions data science or a closely related field, and they mention the expertise that they're looking for, well [[SQL]], the structured query language we're working with [[Databases]] in Python at the top, R is on the list, it's a little bit down low, which it would make you think that it's not really super in demand there.
>
> **[4:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=275)** On the other hand, if you take a look at a different data set for the same year in terms of statistical jobs, statistician jobs on Indeed, you see that R comes in a very close second to SAS, which are two very specific statistical languages.
>
> **[4:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=291)** And so there is a very high demand for people who are doing specifically statistical work.
>
> **[4:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=296)** And then the third piece of data also from 2022 has to do with scholarly articles published.
>
> **[5:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=302)** And what you see here is that SPSS, a menu-driven application, is the most commonly mentioned in scholarly articles.
>
> **[5:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=311)** Over 100,000 have mentioned it, but R is second.
>
> **[5:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=315)** And that lets you know that there, again, is a practical demand for the use of R and the flexibility it gives you in working with data.
>
> **[5:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=322)** Now, I want to finish by saying just a little bit about one of the most frequently occurring, if not particularly most important debates in data science.
>
> **[5:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=330)** Should you learn Python or R?
>
> **[5:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=333)** Well, I can give you some generalizations.
>
> **[5:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=336)** I mean, Python is especially strong in machine learning and database app development.
>
> **[5:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=342)** So if you're building a machine learning project or you're going to make a web application, or you're going to be serving a mobile app, Python might be something you want to look at, that's a possibility.
>
> **[5:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=355)** On the other hand, it can be nice to think about it this way.
>
> **[5:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=358)** If you're going to try to promote your business online, you wouldn't be asking, should we advertise on Facebook or on Instagram, which are respectively the first and second most popular platforms for [[Social Media Marketing]]?
>
> **[6:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=370)** The answer is both and several others at the same time.
>
> **[6:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=375)** Don't restrict your options, hit all of 'em.
>
> **[6:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=379)** Or in other words, be a professional polyglot.
>
> **[6:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=382)** If you're going to be a professional data scientist, if you're going to work in the field, you're going to be expected to work in many different languages, including R and Python.
>
> **[6:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=391)** So there's a huge advantage to learning R.
>
> **[6:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=393)** It's a great way to work with data.
>
> **[6:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/r-in-context-25380142?u=76281980&t=394)** It has a great community, and it'll get you started on your data science path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Data Science]] (8), [[Data Mining]] (2), [[Microsoft Excel]] (1), [[Google]] (1)
> **CLI Commands:** python (9), make (3)
> **Env Vars:** spss (2), sas (2), tiobe (2), matlab (1), sql (1)
> **Definitions:** is a  (6), stands for (1), in other words (1)
> **Prerequisites:** you'll need (2)
> **UI Navigation:** dropdown (1)
> **Speakers:** - when (1)

#### [A note about AI in R](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=1)** - [Instructor] Before we get too far in this course, I want to take a moment to discuss a topic that's probably on a lot of people's mind, and that is about the potential ability to use AI in R and other [[Data Science]] languages.
>
> **[0:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=14)** You know, we have this idea that we can sit there and we can talk, and we've got are little translucent AI robot friend who will solve everything for us.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=23)** And anybody who's worked with AI knows that sometimes it does amazing things and sometimes it crash and burns spectacularly.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=31)** That general rule applies to using AI for R as well.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=36)** Now, there are three different ways to access AI in R.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=41)** The first one is if you have an IDE, an interactive development environment, that can have AI baked in.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=48)** So for instance, if you use Visual Studio, you can use [[Microsoft Copilot]].
>
> **[0:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=52)** And significantly, with [[RStudio]], the environment that we're going to be using, there is a potential for integration with [[GitHub Copilot]] if you have a paid or academic account.
>
> **[1:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=65)** Now, that's a form of code suggestion, but it is based on AI, it uses a large language model, but I won't be using it for this course, in part because it gets away from the basic things that I'm trying to show you in terms of learning how to use R and RStudio at the very beginning.
>
> **[1:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=82)** I don't want to go launched off into AI doing the work for us.
>
> **[1:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=85)** We're doing things that are still pretty fundamental.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=88)** I do want to mention, there are some other options.
>
> **[1:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=91)** There's also a collection of packages that you can use in R to integrate, say for instance, [[ChatGPT]] or something like that.
>
> **[1:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=99)** But they require that you use APIs and you have access codes.
>
> **[1:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=103)** And I've tried them and it just doesn't seem to work very well, not yet.
>
> **[1:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=109)** And then there's the tried-and-true copy and paste.
>
> **[1:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=111)** Do your AI work in whatever environment you want, copy your output, put it into R and see how well it works.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=118)** Now, any one of those could theoretically work, but the standard rule of thumb with AI applies: pay attention.
>
> **[2:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=125)** Sometimes you'll get things that'll work really well, sometimes you'll have to go through 10, 20 revisions and it still isn't quite doing what you want.
>
> **[2:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=133)** I'm going to put this in the category of not yet ready for prime time, but things are developing quickly, and I imagine that especially as GitHub Copilot becomes more commonly used in RStudio that we'll see a lot more of the promise of AI and R in other data science applications.
>
> **[2:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/a-note-about-ai-in-r?u=76281980&t=152)** So all I can say for right now is pay attention, be careful, but stay posted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (3), [[Data Science]] (2), [[GitHub Copilot]] (2), [[Microsoft Copilot]] (1), [[ChatGPT]] (1)
> **Tools:** github (2), visual studio (1)
> **Analogies:** for instance (2), imagine (1)
> **Best Practices:** general rule (1), rule of thumb (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing R](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=0)** - [Instructor] One of the beautiful things about R is it gives you a lot of choices.
>
> **[0:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=4)** And like any programming language, there are many different environments that you can use to work with R.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=10)** Now, when you download the language, you'll see that you can use the native R app and it opens a set of different [[Windows]].
>
> **[0:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=18)** Like for instance, this is the script window where you write your code.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=22)** This is the console where you get your text output and other messages.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=26)** Here's a help window and here's a graphical window.
>
> **[0:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=30)** You can do it that way, but most people choose to use an interactive development environment like [[RStudio]].
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=38)** Now, RStudio is a free open source program and I'm going to show you how to download and install it a little bit later.
>
> **[0:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=45)** And it takes the same information as R.
>
> **[0:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=50)** It has a script window where you put your lines of code, it has a console where you can get text output, it has an environment, lets you know what's saved in the memory, and it has graphs and plots.
>
> **[1:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=61)** This is a very good way of working with R, it's the one I'm going to use, and it's what I recommend, but I do want you to be aware of a few other options.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=71)** One of the things you need to know is that Posit, that's the company that makes RStudio, has an online version as well, and it's free for small analyses.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=79)** For more than that, you're going to need to pay, but you can see it looks exactly the same.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=86)** You can also use [[Google]] Colab, Colaboratory, which is well known among machine learning people who work with [[Python (Programming Language)|Python]].
>
> **[1:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=93)** But if you use this shortcut, colab.to/r, that will open up Google Colab with an R runtime.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=104)** Now, it looks very different because it uses the Jupyter [[Data Science]] notebooks, but you can see that it runs the same lines of code.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=114)** Here's the first six lines of our dataset, here's our graph.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=118)** And this can be a really wonderful way to work with it because it's totally online and a lot of people are comfortable with this approach.
>
> **[2:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=125)** One other choice is an app like my favorite, the open source, free Jamovi.
>
> **[2:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=131)** It's a point and click application that looks like SPSS, but runs on R.
>
> **[2:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=136)** And with Jamovi, you can get a desktop version.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=140)** Let me show you what that looks like.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=145)** Here you can see I'm actually running some R code.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=147)** If I click on this, here's the code that runs and it works in the same way.
>
> **[2:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=155)** Now, I normally don't run R Code in Jamovi.
>
> **[2:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=157)** I use its menus and it's a great way for collaborating with people who aren't comfortable with code, but I want you to be aware it is capable of running R.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=166)** There is also an online version, Jamovi Cloud.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=171)** Now, I'll admit that right now, it's still in beta.
>
> **[2:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=174)** It's not totally ready for primetime, and it doesn't run arbitrary lines of R code, it wants to do just the dropdown menus, but it's in development and I imagine that functionality will be added in the future.
>
> **[3:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=188)** So the important thing to remember here is that you have many options.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-r?u=76281980&t=191)** You have the R app, RStudio on your local computer and online, Google Colab, Jamovi on your local computer, and at least some of the functions online, many different ways of interacting with R, but all of them give you the same functions and give you the same insights when working with your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (4), [[Google]] (3), [[Windows]] (1), [[Python (Programming Language)|Python]] (1), [[Data Science]] (1)
> **Tools:** colab (4), jupyter (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Analogies:** for instance (1), imagine (1)
> **Warnings:** be aware (2)
> **CLI Commands:** python (1)
> **Env Vars:** spss (1)

#### [Installing RStudio](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=0)** - [Instructor] Now that you have R installed on your computer, you'll also want to install [[RStudio]].
>
> **[0:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=6)** That's the environment we're going to use throughout this course to interact with R.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=10)** Fortunately, this is easy to install and it's free.
>
> **[0:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=13)** What you need to do is first go [posit.co](https://posit.co).
>
> **[0:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=17)** That's the company that makes RStudio.
>
> **[0:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=19)** And when you get there, you might be tempted to go to [[Microsoft Products|Products]], but that links to many of their other things.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=24)** You want to go instead to Open Source and then come down here to Download RStudio.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=31)** When we click on that, it'll give you links here and it lets you download RStudio.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=37)** Now, Download RStudio Server, that's for the big industrial ones, we're not doing that.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=41)** We're just dealing with RStudio Desktop.
>
> **[0:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=43)** So we click on that and then when we come down here, it's going to first make sure that you've installed R, but we've already done that, so we're good.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=53)** You simply come over and click Download RStudio Desktop.
>
> **[0:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=56)** It recognizes what operating system you're on, I'm on a Mac.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/installing-rstudio-25380143?u=76281980&t=59)** You click that and then you can download the package, you can install it like any other software, and you'll be up and ready to go in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (7), [[Microsoft Products|Products]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1)
> **URLs:** [posit.co](https://posit.co) (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Navigating the RStudio environment](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=1)** - [Instructor] If you have the Exercise Files and you open them up, you'll see R for [[Data Science]].Rproj, which is an R project file.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=9)** And if you have [[RStudio]] installed and you double-click on this, it will open up RStudio.
>
> **[0:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=15)** So it looks like this.
>
> **[0:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=18)** And I want to run you through some of the elements here that are going to be relevant to our course.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=22)** Number one is if you come over here to where it says, "Files," you'll see these same files listed, including the R for Data Science.Rproj.
>
> **[0:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=33)** And then another one that's important is way up here in the top right corner where it says, "Exercise Files."
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=38)** That includes these elements that we've accessed.
>
> **[0:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=42)** And the nice thing about using in our project is it makes it easy for R to find your various files without ha you having to specify an entire file path that might be really long cryptic.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=55)** If you come here and open up code, let's go to this first one, 02_04_Navigating.R.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=64)** And when we open that, we get this script.
>
> **[1:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=67)** This is the R program that we're going to use.
>
> **[1:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=69)** And I just want to run you through some of the things that are showing here on this screen to try to make this a little less overwhelming and hopefully a little more comfortable as we go through the course.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=79)** First off is here on the top left, this is the window that has the scripting.
>
> **[1:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=85)** These are the programs that we're actually going to run.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=89)** Now, when we run these programs, we'll run them one line at a time, and there are several ways to navigate through them.
>
> **[1:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=97)** Number one is I've created headers here.
>
> **[1:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=99)** I'll say more about headers later.
>
> **[1:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=101)** But you can see here that we have this that allows us to navigate from one part of the script to another.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=107)** If it's not showing, simply click on this button, and it will show or hide.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=112)** You can also navigate through by coming here to go through the various elements of what I've created.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=120)** So that's where you have the programming proper.
>
> **[2:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=124)** Down below it is the Console, which has the output.
>
> **[2:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=127)** Now, what it's showing right now is the default output that happens when you start RStudio.
>
> **[2:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=134)** I'm going to clear that by doing Control or Command + L.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=140)** We don't need that to show here.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=144)** Over here in the top right is the Environment.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=147)** If we save a variable or we save a data frame, it's going to show up there.
>
> **[2:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=152)** So we know that what's available for R to work with.
>
> **[2:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=156)** And then on the bottom right, we have several important elements.
>
> **[2:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=159)** Right now what we're seeing here is the list of files that are in the Exercise Files, but you also have the plot commands and you have packages, and help, and so on.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=169)** Let me show you how these work.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=171)** I'm going to start by loading a package called datasets.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=176)** And what this is is a collection of datasets that's available in R.
>
> **[2:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=179)** You just simply have to load it to make it active in memory.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=182)** And you can see down here in the Console that it has executed that command.
>
> **[3:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=187)** Now we're going to get some help on one of the datasets called Iris.
>
> **[3:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=190)** It's a well-known demonstration dataset.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=193)** And by doing the command ?iris, we'll get help on that.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=198)** And you see over here, we switch from Files to Help, and it's giving us some information about the dataset that we have.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=205)** We can also save the Iris dataset to the environment, to the working memory, and I'm going to save it as df for data frame.
>
> **[3:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=214)** And when I run that command, you'll see that we now have df, data frame, and 150 observations of five variables.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=222)** And if we click on this little thing here, it looks like a calendar, that actually shows us the data in the data frame.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=231)** And then if we want to see the first few lines of data, we can do this command, head, so the head of the file for df, and that shows in the Console where it shows text output.
>
> **[4:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=242)** Now I'm going to make a graph so you can see where that shows up as well.
>
> **[4:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=245)** I'm going to use a $ operator, which is a way of selecting a variable.
>
> **[4:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=250)** So what this is saying is make a histogram, hist for histogram, df is the data frame that I've saved here in the Environment.
>
> **[4:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=258)** The $ says, "From that object, select this variable called Sepal.Width."
>
> **[4:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=263)** That's a part of a flower.
>
> **[4:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=266)** And we're going to make that graph with a few options here, but I just kind of come down here, and I run the command by doing Command or Control + Return.
>
> **[4:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=276)** And now you see this bottom right has switched from Help to Plots.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=280)** And so we get text output here on the bottom left, we get other kind of output here on the bottom right.
>
> **[4:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=286)** And this up here in the top right lets us know within our active memory.
>
> **[4:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=290)** And again, this is where we have our active commands.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=293)** Now I want to show you just a couple of things about the settings or preferences that apply to RStudio and some of the options that we get here.
>
> **[5:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=300)** Let's start here by coming to Edit and going down to Settings.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=305)** And I want to explain a few things here.
>
> **[5:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=307)** One thing that I think is really important is by default, RStudio is going to have restore .RData into workspace at startup, and it will probably have Restore previously used.
>
> **[5:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=320)** I turn these things off.
>
> **[5:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=321)** And I think that's important because it's gives you a kind of replicability by starting RStudio fresh every time you use it, not importing things that maybe you forgot you had open.
>
> **[5:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=333)** And that can affect some of the functioning.
>
> **[5:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=335)** I think that's important.
>
> **[5:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=337)** Another thing here is under Code.
>
> **[5:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=341)** Now you can change the tab width.
>
> **[5:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=342)** I set it to 2.
>
> **[5:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=344)** But I also have a margin here.
>
> **[5:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=348)** I say Show margin, and I say show the margin column at 60.
>
> **[5:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=353)** Let me show you what that looks like.
>
> **[5:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=355)** I'm going to close that for just a moment.
>
> **[5:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=357)** You see this vertical line right here.
>
> **[6:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=360)** Now, most people would use more than 60 characters per line.
>
> **[6:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=365)** 80 is really common and some just don't set it at all.
>
> **[6:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=368)** I use 60 because I'm demonstrating and I have to use a pretty small screen in order to show everything.
>
> **[6:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=375)** 60 characters lets it fit.
>
> **[6:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=377)** And because I write my code in a vertically organized way, it's almost a little bit more like poetry haiku, it works very well for me.
>
> **[6:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=385)** One thought per line.
>
> **[6:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=387)** You can do whatever you want.
>
> **[6:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=389)** I do it 60.
>
> **[6:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=390)** And I set up this line to give me a reference so I know when I'm there.
>
> **[6:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=394)** I'm going to go back to Settings for a moment.
>
> **[6:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=397)** And there's one other thing I want to show you down here at the very bottom.
>
> **[6:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=400)** I mentioned this earlier, and it's [[Microsoft Copilot|Copilot]], [[GitHub Copilot]].
>
> **[6:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=406)** Now it says here, it's just kind of autocomplete, but this is AI-based.
>
> **[6:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=410)** This is a way of bringing in a large language model to help with your code in R.
>
> **[6:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=417)** Now, I'm not going to use it in this course because it's bringing in too much for the very basic operations that we're going to be doing.
>
> **[7:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=424)** But if you have a GitHub Copilot account, which is a paid account, then you can potentially enable that here and use it to help compliment your code and the work that you're doing in R.
>
> **[7:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=438)** Again, not using it here because we're focusing on some very basic operations, and it's better for you to see what these things look like one step at a time.
>
> **[7:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=448)** But this is the overall RStudio environment, something that'll become very, very familiar.
>
> **[7:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=454)** Again, our programming, our script are on the top left.
>
> **[7:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=457)** Text output is in the Console on the bottom left.
>
> **[7:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=462)** Our environment, with the data frames, the variables, the list that we save is on the top right.
>
> **[7:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=468)** And the lists of our files, and our plots, and our packages, and help are all going to be here on the bottom right.
>
> **[7:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=476)** You can rearrange things however works best for you.
>
> **[7:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=479)** You can change the coloring to make it light on dark instead of dark on light.
>
> **[8:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=483)** Whatever works best for you.
>
> **[8:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/navigating-the-rstudio-environment-25378162?u=76281980&t=485)** But this is the overall layout, and it's a really a nice, concise, organized way of working with R to hopefully make it easier to work with your data and get the insights that you're looking for more quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (7), [[Data Science]] (2), [[GitHub Copilot]] (2), [[Microsoft Copilot|Copilot]] (1)
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** click on (2), double-click (1), go to (1)
> **Exercise Files:** exercise files (3)
> **Tools:** github (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### [Entering data](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=0)** - [Instructor] Obviously, the reason you started working with [[RStudio]] is because you want to get some insights from data but you first have to get your data into R.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=9)** And the easiest way to do that, meaning the one that has the fewest steps is doing it manually, which works for very small amounts of data.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=16)** But let me show you some of how this works.
>
> **[0:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=20)** To do this, I'm using the file 02_05_EnteringData.R.
>
> **[0:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=27)** Now, R can do a lot of things pretty easily.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=31)** One is it can do basic math.
>
> **[0:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=34)** I just wrote two plus two here and then I press Command + Enter if you're on a Mac or Control + Enter if you're on a pc.
>
> **[0:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=42)** And what you see down here is it repeats the command two plus two along with the comment that I put next to it.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=51)** Then it gives the result four.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=53)** Now, this thing right here next to it, the one is square brackets, that's an index number.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=59)** If we had several different numbers and if it went to more than one line, you would see different index numbers.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=63)** I'll show you how that works actually with this next command.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=68)** This 1:100 prints the numbers 1 to 100 across several lines in the console.
>
> **[1:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=76)** And now you see the index commands here.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=79)** This first one is index one because it starts at one.
>
> **[1:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=82)** Other languages sometimes start at zero, and then this is item number 21, 41 and so on and so forth.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=88)** Now coincidentally, because I'm counting to 100, the index numbers and the data point are the same but this lets you navigate your output if you need to.
>
> **[1:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=101)** You can also do words with the command print and then in parentheses and quotes, you can put Hello World and that's quick and easy, and this counts as the first item in this output.
>
> **[1:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=113)** So it has the index number one right next to it but you can also save values to your environment.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=120)** Now, right here, it says the environment is empty but we're going to come here and we're going to save some values, save some data to the environment.
>
> **[2:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=128)** We do this by giving a variable name and here I'm going to use a, lowercase a.
>
> **[2:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=132)** And then I use the assignment operator, which is the less than and dash.
>
> **[2:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=137)** It reads as a left-pointing arrow.
>
> **[2:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=139)** And I'm going to give it a value of one.
>
> **[2:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=142)** People say that a gets one, so I'm going to do that one.
>
> **[2:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=148)** And now you can see we have the command down here.
>
> **[2:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=150)** And if we go up to the global environment, it says that in the object named a, we have a value of one.
>
> **[2:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=158)** Please note, unlike a lot of other languages, I don't have to say what kind of variable it is first.
>
> **[2:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=163)** I don't have to say that it's a character variable or a string variable or a integer or whatever.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=169)** I simply declare it and it's able to tell on its own.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=173)** The arrow can go the other way.
>
> **[2:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=175)** I can say two goes into b, it works but it's considered bad form in R.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=182)** You can also assign the same value to many variables at once.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=186)** Here I'm saying that c and d and e all get the value of three.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=193)** And here I have those three additional variables created right here.
>
> **[3:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=197)** If you have multiple values you want to put in, and that's a more common situation, then what you can do is use this command.
>
> **[3:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=204)** This is actually a function here.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=205)** It's c, which stands for combiner, concatenate and it says to take these four values that I've put in parentheses and separated with commas and save them into an object called x, so it can have more than one thing in it.
>
> **[3:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=221)** And if you come over here, you can see x, and it saved them as numeric.
>
> **[3:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=225)** And then we have one, two, five, and nine.
>
> **[3:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=227)** And if you want to see the values of x in the console, you simply call the name of the object, which is x.
>
> **[3:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=234)** So I write an x, I hit Command or Control + Return.
>
> **[3:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=238)** And there it is down here.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=241)** Now, for sequences, you saw me do a little bit of this already.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=244)** If you want to create a sequence, say from zero to 10, you just do the first number, zero, a colon, and then the last number, and there's my zero to 10 down here.
>
> **[4:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=257)** You can make it go the other way by putting the bigger number first, 10:0, and you can see down in the console it, flips around.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=265)** You can also use a command called seq, S-E-Q for sequence.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=270)** Now doing sequence 10, it's going to start at one, it's going to go up to 10, and I could have just done the 1:10 but sequence gives you some options.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=280)** So for instance, let's say I want to start at 20, go to negative 10 and count down by threes.
>
> **[4:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=288)** I simply use the command here.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=293)** And here are the values as a count standard.
>
> **[4:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=295)** And so you can see, there would be situations in which the flexibility of sequence could be very handy.
>
> **[5:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=302)** Next, if you want to do some math, you can, for instance, save some numbers to an object.
>
> **[5:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=307)** I'm going to use the concatenate function, c, to save these four values into an object or a variable called y.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=316)** And by putting parentheses around that whole thing, it'll simultaneously save it to the environment on the top right and print it in the console on the bottom left.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=326)** So I'm going to run that one.
>
> **[5:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=328)** And now we have the 5, 1, 0, and 10.
>
> **[5:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=333)** And then I'm going to ask it to display it again.
>
> **[5:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=336)** Now I'm going to take x and y, each of which have four elements, and I'm going to add them.
>
> **[5:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=343)** So five plus one is six, one plus two is three, and so on.
>
> **[5:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=349)** I can also multiply each of the items by using the asterisk.
>
> **[5:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=353)** X*2 means take everything in x, multiply it by two.
>
> **[6:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=360)** I can also do powers and exponents with the caret.
>
> **[6:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=365)** That's the upward-facing arrow.
>
> **[6:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=368)** So two to the power of six is equal to 64.
>
> **[6:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=372)** I can do square root with the square root function.
>
> **[6:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=374)** Sqrt, square root of 64 is eight.
>
> **[6:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=378)** And then logarithms.
>
> **[6:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=379)** If I use log of 100, it's going to do it as a natural log or the base of e.
>
> **[6:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=385)** That's the irrational number 2.71828... And the natural log of 100 is 4.60517... If I want to use base 10 logarithms, I simply have to use log10 command.
>
> **[6:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=402)** And there the answer is two.
>
> **[6:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=404)** And so these are some of the simple ways of getting values into R, and you can obviously combine these in many different ways.
>
> **[6:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/entering-data?u=76281980&t=411)** Save them into your environment, assign them variable names, do various operations on them, combine them with each other and that can get you started in your analysis in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (1)
> **Ports:** :100 (1), :10 (1)
> **Versions:** 2.71828 (1), 4.60517 (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Data types and structures](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=1)** - [Instructor] I mentioned earlier, that when you save some data into an object or a variable in R, you don't have to declare the type.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=9)** Now, R does have data types and you can specify them, but it does certain things by default.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=16)** Let me show you how this works.
>
> **[0:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=18)** I'm going to come down here and I'm going to create a variable called n1 for numeric variable one, and I'm going to assign the value of 15 to it.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=28)** Okay. You can see that the 15 has showed up over here.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=32)** I'm going to have it display that value down here in the console, and then I'm going to ask for the type of, and notice it tells me that it is double.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=41)** In other languages, if you give numbers without a decimal, it will assume that it is an integer value.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=48)** Well, R doesn't do that.
>
> **[0:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=49)** It assumes double precision by default.
>
> **[0:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=52)** Here, I'll use one that says 1.5 and I'll save it to n2 for a numeric two, and then we can see this n5, and I get its type and it is also double.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=63)** So by default, R saves numeric variables as double precision.
>
> **[1:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=69)** Integer variables, other things do exist, you have to explicitly ask for them.
>
> **[1:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=74)** This is just the default.
>
> **[1:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=76)** Then let me show you characters, since those show up every now and then.
>
> **[1:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=80)** The important thing about characters is you have to put them in quotation marks, and I'm going to save this one as just a C as c1, that's the character variable one, and you can see that it's over here now and with its quotation marks.
>
> **[1:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=95)** I'll ask to display it in the console.
>
> **[1:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=97)** There it is, and I'll ask for a type of, and here you can see that it says character.
>
> **[1:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=103)** Now I'm going to save a string of text.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=107)** So I have this little phrase, I put it all in quotations.
>
> **[1:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=111)** I'm going to save it to c2 for character two, and you can see it over here in the environment.
>
> **[1:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=116)** And we'll ask to show it down in the console.
>
> **[1:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=119)** There it is.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=120)** And then we'll ask for the type.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=122)** And the important thing here is this one is also a character.
>
> **[2:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=125)** Many other languages will call this a string variable and they will treat it separately.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=129)** That single character, character variables, and more characters get saved as string variables, and those are different, but in R, they're treated as the same thing.
>
> **[2:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=141)** Then there are logical or boolean variables.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=145)** Here I'm going to take the value true and it needs to be written without quotation marks and in all caps, and I'm going to save that into l1 for logical variable one.
>
> **[2:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=157)** And you can see it shows here as true.
>
> **[2:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=159)** And again, because it's all caps and doesn't have the quotation marks, it knows that it's a logical value.
>
> **[2:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=165)** I'll ask for the type of l1, and you can see down here it says it's logical.
>
> **[2:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=170)** Now, you don't necessarily have to write the whole [[Microsoft Word|word]] true or false, you can also use a capital T or a capital F.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=176)** Here I'm using just a capital F and I'm saving it to the object l2.
>
> **[3:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=180)** And you see over here, even though I typed F, it knows that I'm using a logical boolean value, so it saves it as false.
>
> **[3:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=188)** We can ask for it to display and then we can get the type of, it's logical as well.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=193)** Then you can have [[Data Structures]] in which you combine multiple values.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=198)** The default is a vector, that's a one-dimensional set, so it's just one row of data of the same data type.
>
> **[3:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=207)** So here I have several numeric values.
>
> **[3:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=210)** I'm using the C function, which stands for combine or concatenate, to save them into a object, I'm calling v1 for vector one.
>
> **[3:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=220)** And here you can see, there's all saved right there.
>
> **[3:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=223)** I'm going to ask for the values at the bottom, and then I ask, is.vector, so is it a vector?
>
> **[3:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=229)** And it says true.
>
> **[3:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=230)** Yes, it is a vector.
>
> **[3:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=232)** And then I can do the same thing, but this time with character variables, as long as they're all in their quotes.
>
> **[3:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=238)** And I can call it and ask, that is a vector as well.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=241)** It's just a vector of a different type.
>
> **[4:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=243)** And then I can even do it with boolean logical values.
>
> **[4:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=247)** Here I have them all written out.
>
> **[4:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=250)** I save those, I call 'em back, and then that is also a vector.
>
> **[4:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=254)** So as long as they're all of the same type, I can get them into a one-dimensional array, just a vector.
>
> **[4:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=261)** A matrix is a two-dimensional set of the same data type and the columns must be the same length, so no missing data.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=270)** Here I'm going to create a matrix.
>
> **[4:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=271)** I'm going to call it m1.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=272)** I'm using the matrix function, and I am concatenating these logical values, and then I'm telling it that I want two rows.
>
> **[4:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=281)** So when I do that, you can see that it's put it here as m1 and then it's logical and then it gives those values, and I'm going to ask it to display it.
>
> **[4:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=292)** And here you can see the two dimensional structure.
>
> **[4:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=296)** We can also arrange it so that we can tell what the structure is by entering it this way and saying, we have this many rows, and then enter it by row as opposed to by column.
>
> **[5:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=307)** I enter that and call it.
>
> **[5:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=309)** And now you can see the same index function, and so it mirrors what I entered manually there.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=316)** Then there's an array.
>
> **[5:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=317)** This is a multidimensional set of values of the same data type, so think of it as a matrix, but just in more than two dimensions.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=326)** And again, column must be the same length, so no missing data.
>
> **[5:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=330)** Here I'm going to take the values one through 24, I'm going to concatenate those and save them into an array with four rows, three columns, and two tables.
>
> **[5:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=339)** I'm going to save that as object called a1 for array one, and then we'll ask to see it.
>
> **[5:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=344)** And here you can see how it's split into those different tables.
>
> **[5:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=350)** Then let's get to a data frame.
>
> **[5:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=352)** This is the most common way of organizing data because it is very similar to a spreadsheet.
>
> **[5:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=358)** It allows you to have vectors of different data types.
>
> **[6:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=362)** On the other hand, the vectors must be the same length, so no missing values are allowed in this.
>
> **[6:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=368)** I'm going to create a vector with numeric values, a vector with character values, and a vector with logical values.
>
> **[6:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=374)** Let's do the three of those, and I've got those all saved.
>
> **[6:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=379)** And then I'm going to use a function called cbind, which is for combining or binding column values.
>
> **[6:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=387)** So I'm going to use cbind, and I'm going to take those three vectors I just barely created and I'm going to save them as df for data frame one.
>
> **[6:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=395)** And you can see that it's done that right here by showing what we have.
>
> **[6:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=399)** And then I'm going to ask it to show us df1.
>
> **[6:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=403)** Now the problem here is it actually has mangled the data just a little bit by simply binding them, and that it coerced or changed all of the values to the most basic data type which in this case is character, so it's the lowest common denominator.
>
> **[6:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=419)** What I need to do, instead of simply putting them into the same thing is I need to specifically use this command, data.frame.
>
> **[7:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=426)** And when I do that, and then save them, now you can see I have three numeric values, I have three character values, and I have three logical values.
>
> **[7:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=437)** Again, the most common way of storing data, 'cause it's most similar to a spreadsheet or a database.
>
> **[7:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=443)** There is one other important option and that is a list, and list is the most flexible.
>
> **[7:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=449)** It basically lets you do anything.
>
> **[7:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=451)** And if you were to download, for instance, certain kinds of data from the web in [[JSON]] or XML format, those are lists and they let you do all sorts of things, but they can be a little unwieldy.
>
> **[7:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=463)** So for instance, here I'm going to have an object with three numbers, and then another object with five characters, another object with four characters, and then a third object with five logical values, so they have different numbers of stuff.
>
> **[8:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=480)** And then I'm going to create a list, use the functional list to combine them into list1.
>
> **[8:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=486)** And then when I do that, you can see that the list uses the square brackets to indicate the different levels of values.
>
> **[8:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=493)** So it's flexible, it lets you put a lot of stuff in there.
>
> **[8:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=497)** In fact, you can even get sort of self-referential.
>
> **[8:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=500)** I can put that list and save it as part of a new list.
>
> **[8:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=504)** So lists within lists, and now you can see it's all there.
>
> **[8:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=509)** It just becomes a little difficult to identify how you get to a specific value.
>
> **[8:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=514)** On the other hand, if you deal with web data on a frequent basis, you're going to get really familiar with lists and learn how to identify these specific elements.
>
> **[8:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=523)** I want to finish by doing a little bit about coercing types, and what that means is changing the variables data type.
>
> **[8:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=530)** So automatic coercion goes to the least restrictive.
>
> **[8:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=533)** So if I take the number one, the character B, and the value true, and I coerced them, well, they're going to all become character variables, because that's the most basic.
>
> **[9:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=548)** On the other hand, I can tell it to make them integers.
>
> **[9:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=552)** I can take this five and I'm saving that, and I can ask it for the type that it is, and it says a double because it's numeric.
>
> **[9:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=558)** But now I can say, make it an integer as opposed to double precision.
>
> **[9:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=563)** So I use the as.integer function, and now you can see it saves it in a different format.
>
> **[9:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=570)** You can also take character variables that have numerical values in their quotation marks.
>
> **[9:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=578)** And I can ask, and it says those are characters, but now I'm going to coerce them as.numeric.
>
> **[9:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=585)** And when I do that, they come back to double precision.
>
> **[9:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=588)** I can also take a matrix and I can turn it into a data frame.
>
> **[9:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=591)** So here I'm going to take the numbers one through nine arranged in three rows, and you can see it is a matrix.
>
> **[9:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=597)** But now I'm going to say, take that same information and do it as.data.frame and save it into coerce seven.
>
> **[10:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=606)** And now I say, is it a data frame?
>
> **[10:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=608)** It is.
>
> **[10:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=609)** So that's a lot of different information, but it lets you know how you can set up both individual variables and the way that you can organize your variables in R, that you use them sometimes this way, sometimes that way to accomplish particular purposes.
>
> **[10:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/data-types-and-structures?u=76281980&t=623)** It depends on what your goals are, but the important thing there is that you do have both the flexibility and the control in R to make the data fit your particular purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Data Structures]] (1), [[JSON]] (1)
> **Definitions:** is a  (7), is an  (1)
> **Analogies:** similar to (2), for instance (2), think of it as (1)
> **CLI Commands:** make (3)
> **Env Vars:** json (1), xml (1)
> **Versions:** 1.5 (1)
> **Speakers:** - [instructor] (1)

#### [Comments and headers](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=0)** - [Instructor] I try to be an organized person, and I don't always succeed, but I'm pretty good with my code.
>
> **[0:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=6)** And you can learn to be an organized person in R too.
>
> **[0:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=11)** One way to do this is by using headers, and another way to do this is by using comments.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=16)** And truthfully, they're very closely associated.
>
> **[0:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=20)** Let me show you how these work in R.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=23)** The important thing here is this little magic pound sign, the hashtag or octothorpe.
>
> **[0:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=29)** And what this does is it lets R know usually to ignore this code.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=36)** So what I have here is I have commented out this particular line.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=41)** It tells R, don't read this, don't do anything with it.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=44)** And sometimes I use it for a line I don't want anything to happen with.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=48)** And sometimes I use it when I want to explain what's happening.
>
> **[0:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=52)** So I have an active command right here.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=55)** So I do library data sets, I run that, but this part that is in green after the pound sign, R ignores that.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=64)** That is for the human benefit.
>
> **[1:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=67)** And that's a good way of explaining what you're doing as you go through.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=72)** So for instance, here, I say that this is red three, that's a name of an R color.
>
> **[1:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=78)** And then here, I say no borders, and I explain the commands.
>
> **[1:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=83)** That can be very, very handy.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=84)** You can do them before the command.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=86)** You can do 'em off to the side of the command, but a pound sign or hashtag and then some characters after that, that gets ignored.
>
> **[1:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=94)** And so commenting is a great way of explaining the data both for yourself and if you're going to be sharing it with other people so they know what is going on.
>
> **[1:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=103)** The other thing that can be very handy here is headers.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=107)** Now, this is an [[RStudio]] thing, and what I have here is a header.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=112)** I do it by having the hashtag, then a space, then the name of something that I wrote it in all caps, and then at least four more of a few different characters.
>
> **[2:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=123)** I do hashtags afterwards, and I do 'em all the way across to the end of my 60 characters per line.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=129)** This for me, it allows me to organize the scripting into convenient blocks.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=135)** And a nice thing is it lets you use those as navigation elements when you have them set up that way, both on the side and here.
>
> **[2:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=146)** By the way, if you don't currently see the outline, just make sure you click this button to show the outline that is there.
>
> **[2:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=153)** And so this allows you to break it up into a few elements, and you can have the comments as a way of explaining what's going on.
>
> **[2:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=160)** Now, comments serve another very important function when you're developing code, and it lets you try out different things without necessarily destroying what you have.
>
> **[2:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=170)** So for instance, here I have a command for a histogram, and I'm going to run that command.
>
> **[2:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=177)** Actually, let me make sure I've got the information saved first.
>
> **[3:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=181)** And so I'm going to put the iris data set into DF, and then I come down here and tell it I want to make a histogram of DF using the sepol width variable.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=191)** And I have a few different options that give the color, the borders, the labels, and so on.
>
> **[3:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=197)** And when I run that, this is the resulting graph.
>
> **[3:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=201)** Now maybe I like that, maybe I want to try some changes.
>
> **[3:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=204)** And if I want to make some changes, I can comment out or temporarily disable certain parts of the code.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=211)** So maybe I don't want the color, and maybe I don't want the thing that turns off the borders.
>
> **[3:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=215)** I simply put the pound sign in front of them, and it temporarily disables that.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=222)** So let me show you what it's like when I run that again.
>
> **[3:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=225)** I just put the cursor in there, and then I do commander control return, and now I get a different kind.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=231)** And you can compare the two by going back and forth here with and without the options.
>
> **[3:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=235)** You can use this when you're doing lots of different functions as a way of controlling different parameters.
>
> **[4:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=240)** Now, there's also a shortcut way to do this.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=244)** You can use either coming up to code and come down to comment or uncomment lines.
>
> **[4:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=250)** But look, there's a keyboard command, shift commander control C.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=255)** And so if I come back here, and if I hit that keyboard command, now I've undone the comment and I can run this again.
>
> **[4:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=263)** And now I have the outlines.
>
> **[4:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=266)** And so I have some options on how I do that.
>
> **[4:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=268)** I'm going to set it back to how it was.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=272)** And then I want to show you one more thing about different levels of headers.
>
> **[4:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=276)** Now, this is not required, and usually when I write code I use just a level one header.
>
> **[4:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=281)** My definitions of these levels has to do with, well, the fact that I'm a psychologist and I write in APA style, that's the American Psychological Association.
>
> **[4:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=291)** And in that style, level one is all caps.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=293)** And the way you tell RStudio that it's level one is by having a single pound sign over here and then at least four other characters.
>
> **[5:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=301)** And I'm using all pound signs to get to the end.
>
> **[5:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=304)** A level two header.
>
> **[5:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=306)** I'm doing it in APA style, which is title capitalization, but it has the two pound signs.
>
> **[5:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=313)** And then I use equal signs afterwards.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=316)** Again, at least four of 'em .
>
> **[5:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=318)** That lets it know that it's a header.
>
> **[5:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=320)** And then the level three, which I don't think I've ever used, but it has three pound signs, and then in APA, that's sentence with a period at the end, and then dashes afterwards, at least four dashes, and that'll work.
>
> **[5:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=336)** But again, the advantage of these is that they show up as headers and allow you to navigate your code in quick and easy ways.
>
> **[5:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=344)** They allow you to organize your code so you know what's going on, then you can copy and paste things quickly.
>
> **[5:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=349)** And especially when you're collaborating with other people.
>
> **[5:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/comments-and-headers?u=76281980&t=352)** Commenting and organizing your code is one place where you can make both your life and other people's lives much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2)
> **CLI Commands:** make (5)
> **Env Vars:** apa (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for instance (2), it's like (1)
> **Cross-References:** coming up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Packages for R](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=0)** - [Instructor] R is a programming language.
>
> **[0:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=2)** And one of the great things about most programming languages is that you can install packages or extra bundles of code, extra functions that give you more flexibility and capability.
>
> **[0:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=14)** This is true for R as it is for anything else.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=16)** And when we go through this course, I'll be making extensive use of some common and very useful packages in R.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=23)** So I want to show you how you can find packages and some of the things that they're able to do.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=28)** The best place to start is R's homepage, [r-project.org](https://r-project.org).
>
> **[0:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=35)** And this is the same place we went to download R.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=37)** But instead of doing that, we're going to come over here to CRAN, which stands for a Comprehensive R Archive Network.
>
> **[0:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=45)** And when I click on that, we go to a mirror.
>
> **[0:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=49)** You can select any of these as a way of accessing CRAN.
>
> **[0:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=52)** We're going to do this first one 'cause it automatically redirects whatever's best.
>
> **[0:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=56)** And again, this is where we went to download R, but now we're going to do something a little bit different.
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=62)** Instead of downloading R, we're going to come over here to where it says Packages.
>
> **[1:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=66)** I'm going to click on that and then what I want to show you is this number right here.
>
> **[1:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=73)** At this exact moment, there are over 22,000 available packages to give extra functionality and capability to R.
>
> **[1:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=81)** That's really, that's mind-boggling.
>
> **[1:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=85)** And so you don't want to go through them one at a time, but let's look at it a couple of different ways.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=89)** Number one here is just sorted by data publication.
>
> **[1:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=92)** And so you can see that BuyseTest is a generalized pairwise comparison is the most recently updated one, and we can scroll down and see all of the others.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=104)** Let's back up and look at it a different way though.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=107)** You can look at them by name, but a really good one is called CRAN Task Views, which you can get either here or here.
>
> **[1:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=115)** When we click on Task Views, what it does is it breaks down the packages into a few dozen categories, ActuarialScience, Agriculture, Bayesian, and so on and so forth.
>
> **[2:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=127)** You can come down to, for instance, SportsAnalytics.
>
> **[2:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=132)** You can click on that and it will tell you what packages are available, breaking them down both by the sport, and then giving a short description and text of what those packages each do.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=144)** I've actually used this one, Lahman for doing baseball data.
>
> **[2:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=149)** But let's take a look at other ones that are more likely to get used.
>
> **[2:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=152)** So for instance, if we come here to MachineLearning, one of the biggest topics in the [[Data Science]] world, and you want to do [[Neural Networks]] and [[Deep Learning]], well, you have a neural network package, but you also have [[TensorFlow]] and torch and so, so many options.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=169)** Now again, it's large and it's overwhelming.
>
> **[2:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=172)** And so I'm going to recommend one other approach to finding packages.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=176)** And that is if you go to the [posit.co](https://posit.co) website, you can find this page, which is a quick list of useful R packages.
>
> **[3:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=185)** You can just search online for posit and quick list packages, and you'll find this one.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=193)** But they break it down into a handful of packages.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=198)** But the one I'm going to mention that is especially important is this one right here that's called tidyverse.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=205)** And the reason tidyverse is important is because A, it includes a most of these other packages as part of it.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=211)** So tidyverse is the collection of packages.
>
> **[3:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=214)** But second, it gives you a fundamentally different way of working with R that I personally find much easier to write the code, to interpret the code to troubleshoot.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=226)** And I am going to be using tidyverse functions as opposed to what's called base-R throughout the course.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=231)** Not everybody uses it, but I think it makes enough of a difference that it's worth using.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=236)** I'm going to have a separate video where I show you both how to install packages in general and more information on the tidyverse in particular.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/packages-for-r-25386008?u=76281980&t=244)** But for right now, I want you to know that you have over 22,000 additional collections of code that can make your work in our faster, more efficient and more powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Neural Networks]] (1), [[Deep Learning]] (1), [[TensorFlow]] (1)
> **UI Navigation:** click on (4), go to (2), scroll down (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Env Vars:** cran (3)
> **URLs:** [r-project.org](https://r-project.org) (1), [posit.co](https://posit.co) (1)
> **Analogies:** for instance (2)
> **Prerequisites:** install (2)

#### [The tidyverse](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=0)** - [Instructor] Packages give R its amazing flexibility and power but to benefit from a package, the extra code that gives extra functions to R, you first have to install it, which means putting it on your computer and load it, which means making it active in R's memory.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=16)** Let me show you how to do both of these by working with a package that I normally use in my own work called pacman, which is short for package manager to package that allows you to work with other packages.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=26)** A very Meta thing.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=28)** And I use it, but because it sometimes creates complications in other environments, I'm leaving it out for this time around.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=38)** Now, if your code uses a package when it's not installed, [[RStudio]] will give you this warning in yellow and you can simply click Install and it will take care of it.
>
> **[0:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=47)** Or you can make sure to install it by using the install.packages command.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=53)** And I'm going to do that right here and I want to show you that what's going to happen is if we come down here in the list of packages to the Ps, you see there's nothing there.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=64)** I'm going to run this command by doing Command + Return, and it loads and I'm going to scroll down again.
>
> **[1:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=74)** And now you can see that pacman and which previously wasn't there is now there.
>
> **[1:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=78)** It is installed, it's available, it can be used, but it's not currently loaded in the memory.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=84)** To do that, we're going to have to go through another step.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=86)** But I do need to make this important point first.
>
> **[1:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=90)** I do all of my work using what's called an interactive analysis.
>
> **[1:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=95)** It's okay to load packages in your script if you're doing interactive analysis on an open script.
>
> **[1:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=99)** That means you're going line by line.
>
> **[1:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=102)** However, as I mention here, for projects where the script is executed without being open, that's like a source file.
>
> **[1:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=108)** The code to load or install packages should be included not in that file, but in a previous file.
>
> **[1:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=115)** That way you don't have people automatically loading and installing packages without them seeing this happening.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=120)** That would be poor professional behavior.
>
> **[2:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=123)** But for scripts that you go through interactively, and this is the only kind I have ever done in working with R, loading the packages in the script is just fine.
>
> **[2:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=134)** But let's come down here.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=135)** We've installed the package but we haven't loaded it.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=138)** Now, there are two ways to do this.
>
> **[2:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=139)** One is with the command library and the other one is with the command require.
>
> **[2:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=143)** Library gives an error if a package is not installed and it stops the execution.
>
> **[2:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=150)** Require also loads the package but it's typically used inside a function.
>
> **[2:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=154)** It gives a warning but not an error message and it'll execute the code but it'll crash when the package is called.
>
> **[2:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=162)** Consequently, you usually want to use library.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=166)** It'll let you know if there's a problem.
>
> **[2:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=167)** So I'm going to hit library pacman now, and what it's going to do is it's going to make it available.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=173)** You see, we now have that check mark right there.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=176)** And so now I can use pacman.
>
> **[2:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=179)** And pacman is a neat way to do all sorts of things, to load packages, to get information about them, to unload them, and also to see, for instance, what kind of example datasets come with something.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=191)** So I'm going to use this command right here.
>
> **[3:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=195)** You can use any command in a package even without loading it as long as it's installed by giving the name of the package, two colons and then calling the function that you're using.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=205)** So what this says is from the package pacman, use the function p_data and that'll tell me what datasets are included in this other package, which is called dataset.
>
> **[3:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=217)** So I'm going to run that and here you see all of the datasets that are included in R's built-in datasets package from air passengers down through 104 women with the average heights and weights for American women.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=236)** And so there are datasets included in a number of packages that can be really handy for doing some of your own creative work.
>
> **[4:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=245)** And so that can be a nice way to go about it.
>
> **[4:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=247)** But the other thing I want to show you is how to unload packages.
>
> **[4:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=251)** Now the most proper way of doing this is with detach.
>
> **[4:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=257)** And this way I'm saying detach a package and then :pacman and then unload is T for true.
>
> **[4:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=264)** You can also write out the [[Microsoft Word|word]] true in all caps.
>
> **[4:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=266)** And when I do that, you see that the check mark has disappeared.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=272)** And really, you only need to do this manual approach where you write a line that does it for R's built-in packages.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=280)** For third-party packages, like Pacman, just restarting R will also undo them.
>
> **[4:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=286)** On the other hand, if you want to completely remove a package just get it off your computer, you can use remove.packages.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=293)** I rarely do this.
>
> **[4:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=295)** The trick with it is sometimes when you install a package, it installs a number of other packages that have dependencies.
>
> **[5:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=302)** It requires some functions from those other ones.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=305)** Remove will not remove the dependencies.
>
> **[5:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=307)** It'll only remove that one particular package.
>
> **[5:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=310)** So I find restarting to be the most thorough way of doing it 'cause it closes the dependencies as well.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=316)** But I'm going to run this command remove.packages pacman and now it has disappeared from my list over here on the side.
>
> **[5:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=328)** And that gets us back to where we started.
>
> **[5:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/the-tidyverse?u=76281980&t=329)** And so this is a way to install packages, to load packages and then to unload them and even remove them if needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (1), [[Microsoft Word|Word]] (1)
> **Prerequisites:** install (7)
> **Definitions:** is called (2), is a  (2), short for (1)
> **CLI Commands:** make (3), find (1)
> **Warnings:** warning (2)
> **Code Identifiers:** p_data (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)

#### [Piping commands with |](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=0)** - [Instructor] Sometimes code can be difficult and this can be as true for R as for anything else.
>
> **[0:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=7)** And one of the places where this is most apparent is with nested commands.
>
> **[0:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=13)** So for example, here's a command I used once for some analysis, and the important thing is that in Base R, it starts in the middle and then goes out.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=24)** So for instance, right here it says use the data from UCBAdmissions.
>
> **[0:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=30)** That's a dataset in the R datasets package.
>
> **[0:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=33)** Then I apply a function called margin.table to it.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=37)** And then I have an argument a couple steps over that says use table or margin three.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=44)** Alright, so we apply that to UCBAdmissions but then I want to do something to that.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=48)** I convert it to a proportion table and then I want to round it to two decimal places.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=55)** And you can see, those are really, really far apart from each other.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=59)** And then finally, I take the whole thing and multiply it times a hundred to get it so it's like percentages.
>
> **[1:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=65)** This is a concise way of organizing the command but it's not one that is easy to understand or easy to remember.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=71)** It's hard to read it.
>
> **[1:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=74)** And so, when you use pipes, you can rewrite the command and it goes this way.
>
> **[1:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=81)** You start with UCBAdmissions, that's the data.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=84)** And then I have a pipe character.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=86)** In this case, it's a vertical line which is actually called a pipe.
>
> **[1:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=90)** And then the greater than sign, think of it as an arrow.
>
> **[1:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=93)** So take the data and send it to margin.table.
>
> **[1:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=98)** And then I put the argument three which means take the third margin table.
>
> **[1:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=102)** And then once you've done that, send it to the next command, which is proportion table.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=107)** And then I have to put the empty parentheses there because the R pipe requires those there.
>
> **[1:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=115)** And then I take that and I send it to round(2) which means round the numbers to two decimal places.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=122)** And then I have little asterisk for multiplication, times 100.
>
> **[2:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=126)** This kind of command is much easier to see the sequence and the relationships between things, as well as putting the function and its arguments, its modifiers, right next to each other.
>
> **[2:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=141)** More generally, you can think of function applying to a data but with a pipe, you're going to take the data and then you're going to feed it into a function.
>
> **[2:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=151)** And so it's, first do this, then do that, then do that.
>
> **[2:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=157)** For more complex things, you can have function, data, and then an argument, a thing that specifies how you want to apply that function.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=166)** And you do it as data gets piped to the function and then the argument right there next to it.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=171)** So imagine you have three functions which I'll call three, two, and one and they each have an argument, a, b, and c.
>
> **[2:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=178)** Well, this is the nested native R format.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=182)** Again, it's concise but it can be very hard to follow.
>
> **[3:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=187)** With pipes, you write it as data and send that to function one with argument a, and send that to function two with argument b and send that to function three with argument c.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=198)** Again, the flow is much easier to follow and I find it much easier to write.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=205)** Now, an important thing is that in R, there are two different sets of pipes you need to be familiar with.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=211)** The first set of pipes comes from a package called magrittr as in Rene Magritte who had his painting about a pipe.
>
> **[3:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=219)** And this is included in the Tidyverse.
>
> **[3:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=220)** There are three pipes in magrittr.
>
> **[3:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=223)** They're all surrounded by percent signs and then they have the greater than sign or the less than, greater than.
>
> **[3:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=230)** And the last one's called the T pipe and they serve special functions.
>
> **[3:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=234)** On the other hand, R has only one pipe or it takes a command and feeds it into the next one.
>
> **[4:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=240)** This keeps it a little clearer.
>
> **[4:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=242)** There are also places where magrittr has something that's called a dot operator to place arguments somewhere other than the first spot.
>
> **[4:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=248)** But we're going to be using the native R pipe in this course because, first off, it builds off something that is now native to R, but it also makes it a lot clearer what we're going through.
>
> **[4:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=260)** And you don't have to be concerned about the different kinds of pipes that could be involved nor do you have to worry about the nested commands.
>
> **[4:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=267)** And so, the point of all this is that with pipes, code is easier to read.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=272)** The logic is clearer.
>
> **[4:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/4377755?u=76281980&t=273)** The connections between functions and arguments becomes more obvious and life is a little bit sweeter, and that is all good.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), for instance (1), it's like (1), think of it as (1), imagine (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Sample datasets](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=0)** - [Instructor] One of the best ways to get started working with R is to use the sample datasets 'cause they have the richness and sometimes the size of the datasets that you'll be using in your own work.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=10)** But they give you something that's already set up and can get you going right away.
>
> **[0:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=15)** Fortunately, R has a collection of datasets that are in their own dataset package and this is built into R.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=24)** So, it's already installed, but you have to load it into memory.
>
> **[0:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=27)** I'm going to use Library Datasets to load the built-in package.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=32)** Then, I'll get a little bit of information by doing the ?datasets, and that'll bring over here, the R Datasets Package.
>
> **[0:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=40)** There's not a lot of information right there, mostly you want to know what the datasets are.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=44)** So, I'm going to do Library and then help=datasets.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=48)** And this will list the actual datasets that are in that package, and it opens them up in this new window.
>
> **[0:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=56)** And there are over a hundred datasets.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=59)** Some of them are very small with just a dozen numbers or so.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=63)** Some of 'em are huge and they include a lot of different kinds of data in a lot of different formats.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=72)** I want to show you a few of these.
>
> **[1:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=74)** A very common one if you work with R and other languages is the Iris dataset.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=79)** So I'm going to get information on Iris.
>
> **[1:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=82)** And it's Edgar Anderson's or Ronald Fisher's Iris dataset.
>
> **[1:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=87)** And let's take a quick look at it by simply calling the dataset.
>
> **[1:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=92)** And I'm going to make this window a little bit bigger.
>
> **[1:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=95)** It's 150 observations of iris flowers, of four different species, and four different quantitative measurements for each.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=105)** It's a very common data set when used for a classification and categorization.
>
> **[1:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=111)** UCB admissions comes from the University of California at Berkeley student admissions data.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=118)** This is from the six largest departments in 1973.
>
> **[2:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=121)** Now, I realize that's a really long time ago, but this is an important dataset.
>
> **[2:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=126)** It's well known for illustrating something called Simpson's Paradox, actually led to a lawsuit about graduate school admissions.
>
> **[2:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=133)** But let's take a quick look at the dataset.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=135)** And what you see is this is tabular data, where it has departments A through F and indicates whether an applicant was male or female and whether they were admitted into the program or rejected.
>
> **[2:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=149)** If you ever worked with [[Python (Programming Language)|Python]], then you would be very familiar with the Titanic dataset.
>
> **[2:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=153)** This is a dataset about people who survived or died on the crash of the Titanic ship.
>
> **[2:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=162)** And when we look at that dataset, like the other one we had, it is in tabular format where it indicates the class that a person was in, whether they were male or female, and whether they survived or whether they died.
>
> **[2:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=177)** State.x77, that's a funny name, but it has to do with a dataset about the 50 United States of America.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=186)** And it actually contains a number of variables, it can be handy to work with.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=191)** And so, I'll make this one a little bit bigger.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=193)** And you can see what it involves is population, income, illiteracy, life expectancy, the murder rate, high school graduation, frost, and area.
>
> **[3:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=202)** And you can use these for correlations and regressions, or for classifications if you want.
>
> **[3:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=210)** And then finally, one that I use occasionally is called Swiss.
>
> **[3:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=215)** And this has to do with Swiss fertility and socioeconomic indicators from 1888 in Switzerland.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=222)** And that dataset is not really big, but it contains fertility, agriculture, examination scores, education level, the percentage of residents who are Catholic, and infant mortality rates.
>
> **[3:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=238)** Again, a great way of looking at correlations and regression.
>
> **[4:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=243)** And so, these are just some of the 104 datasets that are built in with R's Datasets Package.
>
> **[4:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=251)** And any one of 'em can be a great way to get started on the kind of analyses that you work with, whether it's tabular data, whether it's neural network, whether it's trees, any one of those, you can find a dataset that can get you started to see how those functions work and how you can interpret the results.
>
> **[4:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/sample-datasets?u=76281980&t=269)** So, I encourage you to take a look at some of the datasets and see what you can do as we go through this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Env Vars:** ucb (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Importing data from a spreadsheet](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=0)** - [Instructor] Now, it's great to use R's built-in sample data to see how the program works and to play around with some options.
>
> **[0:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=7)** But chances are, you're going to want to analyze your own data.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=10)** And the easiest way to deal with that is to import it, either as a CSV or comma separated values files, like a generic one-page spreadsheet, or as an [[Microsoft Excel|Excel]] XLS or XLSX file.
>
> **[0:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=25)** I'm going to be showing you how to do both of these using a package that comes as part of the tidyverse readxl.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=32)** Now let's start by loading the tidyverse and then we'll load readxl.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=39)** Now, even though this is installed as part of the tidyverse, because it's not part of the base packages, it needs to be loaded separately or explicitly.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=48)** So, I'm going to load that now.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=51)** And then I'm going to come down and first load a CSV file.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=55)** This is the most common way of sharing data.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=57)** CSV files are single sheets of rows and columns, they tend to be very easy to be imported into any program, anywhere.
>
> **[1:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=65)** They're sort of the universal data container and so they're the ones I use most often.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=71)** Now, as a note, when I import data, because I only work with one dataset at a time, most of the time, I save it as df, which is short for data frame.
>
> **[1:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=82)** And what that lets me do, is it lets me reuse commands I've written before, as long as they refer to df, it'll always refer to whatever I just saved.
>
> **[1:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=90)** I find this to be something that makes it much easier to save and reuse my code and to eliminate errors.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=96)** Now, I'm going to use a function called Read CSV and I'm going to read the state_trends.csv dataset that is in the data folder.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=105)** And as long as you're using the R Project, so it knows to go within the folder exercise files, this command is sufficient.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=112)** So I'm going to run that command, and you can see that it's used a comma delimited file.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=118)** And these are the character variables and these are the double precision variables.
>
> **[2:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=121)** If you come over here, you can see it saved it as df with 48 observations for 34 variables.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=129)** And if you click on this little rows and columns, you can see a spreadsheet version of it right here.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=135)** But a more common way to deal with it is to simply use one of these commands, either call the dataset and that'll show you the first 10 lines of it in the console.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=147)** I'm going to make the console bigger here.
>
> **[2:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=149)** Now, the reason it showed us 10 lines as opposed to 6 is because I'm using a tibble, that is a special tidyverse version of a data frame.
>
> **[2:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=158)** It has some extra structure associated with it and it also gives you the character types and it gives you a full list of all the variable names right here.
>
> **[2:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=168)** This is a nice way to work with data.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=173)** You can also use a function called Glimpse and tell it that I want to say the glimpse of df.
>
> **[2:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=178)** And that'll show it in a different way, where you get the full variable names, their variable types, as well as the first few cases values.
>
> **[3:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=187)** And so, either one of these can be a great way to check that the data imported properly and it's behaving the way you expect it to.
>
> **[3:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=196)** You can also import Excel files.
>
> **[3:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=199)** And the function we're going to use here is able to import either xls, the legacy version of the Excel file, or the xlsx version.
>
> **[3:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=209)** This one, you tell it you're going to read Excel, as opposed to read csv.
>
> **[3:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=214)** And in addition to saving things as df, although I'm going to call it df2 so I don't get these two confused, I'm also going to rename the outcome as y, this is something that I also generally do because that makes it really easy to remember which one is the variable, and I can reuse some of my commands.
>
> **[3:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=232)** So, I'm going to save it to df2, I'm going to use read Excel, I'm going to tell it the name of the file and that it's in the data folder.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=239)** And then, because Excel spreadsheets can have more than one tab, more than one worksheet on them, I actually thought I would import the second tab, which has more cases and many more variables than the one that I normally use.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=255)** And then I'm going to feed that into, specifically save it as a tibble.
>
> **[4:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=259)** And then I'm going to select a few of the variables because this is something that you can do, this is a dplyr function.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=265)** You can use it while you're importing to do some of the data prep.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=270)** I'm going to rename one of the variables that's called Psych Region as y.
>
> **[4:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=275)** And I'm going to then mutate it, which means change it into instead of just a character variable, make it a factor.
>
> **[4:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=281)** And then I'll say print at the bottom, so it'll show the first few lines in the console.
>
> **[4:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=286)** So, let me run this command, and we'll come down right here.
>
> **[4:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=291)** And here you have a data set that I've created.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=293)** It shows you some of the values and it's got the NA's right here because the second line would be for Alaska.
>
> **[4:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=299)** But one of the variables is missing data on Alaska.
>
> **[5:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=302)** So it's marking it as NA as it goes through.
>
> **[5:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/importing-data-from-a-spreadsheet?u=76281980&t=306)** But the data set is in, installed, ready to go, and either one of these, the read CSV or the read Excel, is a very quick and easy way to get your data in so you can get started with exploring your data graphically and doing some statistical modeling as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7)
> **Env Vars:** csv (5), xls (1), xlsx (1)
> **Definitions:** is a  (4), short for (1)
> **CLI Commands:** make (2), find (1)
> **File Paths:** state_trends.csv (1)
> **Code Identifiers:** state_trends (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)


### 3. Data Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Using colors in R](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=0)** - [Instructor] Humans are visual animals and one of the best way to communicate information to humans is through visuals and by guiding people through color.
>
> **[0:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=11)** So adding color to your charts in R is it going to make a big difference in their effectiveness.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=16)** Fortunately, there's a lot of different ways to deal with color in R, you've got choices, and I want to discuss some of those things right here.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=24)** I'm going to start by creating a tiny little data set.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=28)** I'm simply putting together a few numbers, saving them to X and then I'm going to use the default bar plot command.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=36)** And when we get to that, here's my chart right down here.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=41)** There's nothing special right there.
>
> **[0:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=43)** I'll [[Zoom]] in on it a little bit but you can see it's giving us the height of the different bars that I've created.
>
> **[0:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=50)** But they're all gray. Now gray's not bad on its own.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=53)** Gray on white actually works really nicely in a lot of situations, but you have the option of adding a lot of colors, especially if you want to direct attention to one point or another.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=63)** R has 657 named colors.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=68)** Now it actually has only 502 unique colors is because a lot of those colors have both UK British spellings like grey and, being spelled within E, and gray being spelled within A in the United States, as well as a little bit of repetition.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=86)** But let's get you some insight on colors by doing question mark colors and that gives us the color names here.
>
> **[1:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=93)** By the way, you can spell it with the O-R-S or O-U-R, either works, or even just C-O-L.
>
> **[1:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=101)** And then let's get a list of the color names by running this one command.
>
> **[1:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=106)** And you can see, here's our big long list.
>
> **[1:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=110)** So we have lime green and linen and maroon three and misty rose four.
>
> **[1:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=117)** Lot of choices, but it's going to be a lot easier to know what you're dealing with if you can look at both the actual colors and the many ways that they can be represented in R.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=129)** To do that, you can go to this website, it's my own website where I've created a resource that can be used for that.
>
> **[2:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=136)** You're in that command, it'll take you to this page.
>
> **[2:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=139)** And if we scroll down a little bit, here are several different ways of referring to the same color in R.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=147)** A color name, a hex code, RGB on a zero to 255 scale, RGB to zero to one scale and an index number, I'll explain each of those in a moment.
>
> **[2:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=158)** But if you come down here, here is a data sheet.
>
> **[2:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=162)** It's actually a [[Google]] Sheet that shows all the colors with their names and the various different codes that are used.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=169)** And you can access this sheet as a Google Sheet or download it as an [[Microsoft Excel|Excel]] Spreadsheet or download it as a PDF and have it available to you.
>
> **[2:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=179)** So use that as a reference on how to refer to colors in R.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=186)** Now let me come back to our code here and show you a few things.
>
> **[3:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=189)** First off, I'm going to be making variations on the bar plot.
>
> **[3:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=192)** So I'm going to make our bar plot with X, the numbers that I entered at random, but now I'm going to specify that I want all of them to be red and I'm specifically choosing red three.
>
> **[3:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=202)** You can use the color name by specifying C-O-L, that is short for color and that way you don't have to worry about whether you are using the American or the British spelling.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=211)** But COL is for color.
>
> **[3:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=212)** And you put it in quotes and I said red three.
>
> **[3:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=216)** And when I do that, now you can see that my chart is all the same as it was before, but instead of being a medium gray, it's red.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=226)** Or I can do another one, slate gray three.
>
> **[3:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=230)** And that's another option.
>
> **[3:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=232)** When you're dealing with computers, one of the interesting things about how colors are represented is at its numeric and there are a few different ways of representing them numerically, but they revolve around the use of RGB, which stands for red, green, blue codes because those three colors together can create the different colors that you see on a screen.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=255)** And so what you need to do is you need to indicate how much red, how much green, and how much blue.
>
> **[4:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=260)** And there are three common ways of doing this.
>
> **[4:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=263)** The first one is to indicate them as proportions going from zero to one.
>
> **[4:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=269)** So they're like percentages.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=272)** In this case, I'm going to say do a bar plot but use 80% red, 0% green, and 0% blue and that'll get us the same color of red that we had previously.
>
> **[4:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=284)** Or to get the slate gray, we do the .62 red, .71 green and .80 blue.
>
> **[4:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=291)** By the way, you notice I don't say red equals this, green equals this, it simply expects them in that order.
>
> **[4:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=299)** But it's more common in the computer world to represent these RGB triplets as values that go from zero to 255.
>
> **[5:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=308)** And that may seem very strange if you're not familiar with binary, but it's a common value.
>
> **[5:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=314)** And in this case, I can indicate those with 2050 and zero.
>
> **[5:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=319)** And here I need to tell it that the maximum value is 255.
>
> **[5:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=324)** And when I do that, I get the red, or if I pick these other values, I get the slate gray.
>
> **[5:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=332)** But even more common than that is the use of hex codes which are six letter codes, six letters and numbers that begin with a pound sign and that can be used to represent those same colors.
>
> **[5:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=343)** These actually can be red as these values that are up here just written in a base 16 system.
>
> **[5:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=352)** And so we have the red and the slate gray.
>
> **[5:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=356)** Finally, you can go back to R's system which is basically alphabetical and you can use the index colors.
>
> **[6:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=365)** Red three is the 555th color in that list, and while I would never want to represent it this way, I want you to know that it's available.
>
> **[6:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=375)** Slate gray three is the 602nd.
>
> **[6:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=380)** And so those are several different methods.
>
> **[6:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=382)** You can use the color names.
>
> **[6:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=383)** I use them if I'm going quickly and I don't want to look at the actual numbers.
>
> **[6:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=388)** After that, I often go to the hex codes because I know the hex codes for some of the common colors that I use.
>
> **[6:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=396)** Now if you want to use several colors, you can specify as many as you want.
>
> **[6:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=402)** Now I've got six bars that I'm going to draw but I'm only listing two colors and so it's going to cycle through them.
>
> **[6:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=408)** This will do the red and then the slate gray.
>
> **[6:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=410)** The only thing you need to notice is that I'm using the C for combine or concatenate, and then it says use those two different colors.
>
> **[6:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=417)** And then I can also do the same thing with hex codes or the other ones, and that switches it the other way.
>
> **[7:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=424)** One step beyond that is to use actual color palettes, combinations of colors.
>
> **[7:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=430)** And so we can get a little bit of information about palettes by searching for help on that, and if you come down here, it will give you some of the links that you need and some example code for how things work.
>
> **[7:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=448)** But it's going to be a little easier if we run this command palette to see what the current palette is.
>
> **[7:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=453)** And right here it's listing the first one as a name and then all the others as hex codes except for the last one, which is giving a name.
>
> **[7:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=461)** So it's bouncing back and forth in each of those.
>
> **[7:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=464)** But let's draw our bars using the different colors.
>
> **[7:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=468)** And here I'm saying, use the colors one through six from the current palette.
>
> **[7:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=477)** And there we have the black going through the various colors in the palette.
>
> **[8:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=482)** It's a little jarring with the black here at the front, but it works.
>
> **[8:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=486)** But there are other named palettes in R.
>
> **[8:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=489)** So here are a few I'm going to run through.
>
> **[8:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=491)** This one is called Rainbow.
>
> **[8:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=493)** And I'm telling you I want the first six colors from Rainbow, that's kind of pleasing and they're easy to tell from each other.
>
> **[8:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=498)** The next four palettes are for progressions.
>
> **[8:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=501)** So this is heat colors, this is terrain colors, this is topo colors, and this is CM colors, pinks to blues, that are usually used to indicate from less of something to more something, say for instance from colder to hotter or from lower to higher.
>
> **[8:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=519)** But the idea is that you can use any of these and there are specialized packages available for working with colors in R, and I encourage you to explore some of 'em.
>
> **[8:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/using-colors-in-r?u=76281980&t=529)** There's some great possibilities out there but any one of them can be used to both draw more attention to your chart and direct people to the parts that are the most important to help you get your message across.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Zoom]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** rgb (4), pdf (1), col (1)
> **Definitions:** is a  (1), short for (1), stands for (1), is called (1)
> **UI Navigation:** go to (2), scroll down (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Creating bar charts](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=0)** - [Instructor] When working with data, it's a beautiful thing to keep things simple and the simplest kind of data is nominal or simply counting data.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=9)** And the simplest kind of chart for that is a bar chart.
>
> **[0:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=13)** Let me show you how to do these in our using the base graphics that are included with her.
>
> **[0:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=19)** We'll start by loading the tidyverse and the readxl package to bring in our data set.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=24)** And I'm going to read in our state trends data set I'm also going to do a little transformation here.
>
> **[0:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=30)** I'm going to use this command mutate which means I'm going to make changes to the data across, means I'm going to use several variables and then I'm specifying here that I want to do region through psych region.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=44)** So that's actually just three variables and then I am turning them into factors.
>
> **[0:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=50)** So let's run that command.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=53)** And when we look at the data you can see that, for instance, region is now a factor.
>
> **[0:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=58)** Psych region is a factor and psy_reg is a factor.
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=62)** That's important because when you're making bar charts it wants to have factors as the things that determine the groups.
>
> **[1:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=70)** So let's get a little bit of information about the two different ways of making bar charts in Base R.
>
> **[1:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=75)** The first one is with the generic plot command, plots a neat one because you can feed it almost any kind of data and it will figure out on its own what is a likely kind of representation for that data.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=88)** It's just called Generic X-Y Plotting.
>
> **[1:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=91)** But we can also look at the specific bar plot function and there's a little more information there.
>
> **[1:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=97)** But let me demonstrate how both of these work.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=100)** This simplest thing to do is to just call plot and then give it a variable.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=104)** And this means I'm using the DF data frame that I just saved by importing the data and I'm choosing the variables psy_ reg which is for a psychological region.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=114)** And when I make that chart, it's going to show up here on the bottom right, it's a very quick and easy chart.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=120)** I'll [[Zoom]] in on it.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=122)** And we have our three regions and they are in alphabetical order.
>
> **[2:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=126)** And from this you can see that friendly is the biggest.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=129)** It's about as big as the other two put together.
>
> **[2:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=132)** And so this is extremely basic, but it already is able to give us some insight into our data.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=140)** Now you can make an identical chart using the pipes that come in R now, and so that when you start with DF and you then select a variable and use plot but it looks exactly the same.
>
> **[2:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=154)** Now, you would think that simply switching over to bar plot since what we've made is a bar plot should be easy, just take the same procedure.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=161)** But I can tell you right now it's not going to work.
>
> **[2:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=164)** And we get that because it says height must be a vector or a matrix.
>
> **[2:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=167)** And so we don't have our data in the right format 'cause it wants to have just those three measurements.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=173)** How high should this bar be?
>
> **[2:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=174)** How high should this one and how high should this one be?
>
> **[2:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=177)** We can do that by inserting one extra step and that is by creating a table.
>
> **[3:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=183)** So I'm going to take this same command but now I'm going to add this line that creates table.
>
> **[3:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=189)** And when we run that we get a bar chart that looks exactly the same but it has used the bar plot command which gives us more options for customizing a bar chart.
>
> **[3:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=200)** On the other hand maybe you want to make one small change here and that is to rearrange the bars.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=205)** Right now they're in alphabetical order and maybe there are situations where that makes sense but more common, it's best to have the tallest bar to the left next to the axis and then have them go in descending order.
>
> **[3:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=218)** Mind you, you can only do that if it's okay to rearrange your things.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=222)** If you're doing like number of children you don't want to do that.
>
> **[3:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=224)** You don't want to have five next to seven next to one, next to whatever.
>
> **[3:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=228)** But with these ones the order is arbitrary and so we can rearrange 'em however you want.
>
> **[3:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=233)** So I'm going to do the same things.
>
> **[3:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=235)** I'm going to add this one command here that says, sort decreasing equals T for true.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=241)** And now we just move the bars around from tallest to smallest.
>
> **[4:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=245)** On the other hand, you have a lot of options with the bar plot command that you saw in the help just a moment ago Here I'm going to use a few of them.
>
> **[4:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=252)** I'm going to add a title to the entire chart, I'm going to add a subtitle, I'm going to draw the bars horizontally, left to right.
>
> **[4:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=261)** I'm going to add a label on the Y-axis and the X-axis.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=265)** I'm going to change the limits from zero to 25 'cause you see right now this bar actually goes past the upper limit of 20.
>
> **[4:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=273)** I'm going to take off the border so I'm going to color the whole thing red.
>
> **[4:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=277)** And if we zoom in on it you'll be able to see all three of the labels on the left.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=280)** So let's zoom in.
>
> **[4:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=282)** And this is basically a presentation ready graph.
>
> **[4:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=285)** And so you have a lot of options and a lot of control even with the Base R graphics.
>
> **[4:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=295)** You can also make some variations on bar plots.
>
> **[4:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=297)** You can do a hundred percent stacked bar, which can be good for showing the relative proportions of categories within groups.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=305)** To do that, I'm going to select region and psy_reg which is the short version of the psychological region.
>
> **[5:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=312)** And I'm just going to use the generic plot command.
>
> **[5:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=315)** And when we zoom in on that, it's a little hard to tell because it doesn't have a legend, but uninhibited is dark gray on the bottom, friendly is medium gray in the middle.
>
> **[5:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=324)** And creative is like gray on the top.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=326)** So we can see for instance, that all of the states in the northeast region are in the uninhibited category where there are none that are uninhibited in the west.
>
> **[5:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=334)** They are all either friendly or mostly creative.
>
> **[5:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=338)** And the width of the box corresponds to how many states are in that particular category.
>
> **[5:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=343)** So this is a nice way to get a quick feel for it.
>
> **[5:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=347)** It's not a presentation ready because you don't have all the labels, but it's a good way to get started.
>
> **[5:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=353)** If you want to create stacked bars as opposed to 100% stacked bars.
>
> **[5:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=358)** You can do this in a two-step process.
>
> **[6:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=361)** What I'm going to do is I'm going to create a new data frame.
>
> **[6:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=364)** I'm going to call it df_t for data frame table where I take df I choose my two variables, I create the table and we're going to show it in the console.
>
> **[6:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=376)** And here you can see the rows and columns that are going to go into the graph.
>
> **[6:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=380)** Then I'm going to create that graph by using bar plot and I'm going to add a legend, but I'm going to tell you there's going to be a small problem here.
>
> **[6:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=387)** And that is I have my screen set on a very small resolution right now it's at 1280 by 720.
>
> **[6:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=394)** And you know if you had like an 11 or 12 inch laptop maybe you'd be working at that level.
>
> **[6:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=400)** And even when I zoom in, it just kind of stays there.
>
> **[6:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=404)** When you are using a higher resolution, then you will not have this overlapping legend problem.
>
> **[6:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=412)** So I'm actually going to recreate the graph without the legend just so you can see what it looks like.
>
> **[6:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=417)** And now instead of changing the width according to how many cases there are in each category it just has different total heights.
>
> **[7:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=425)** Finally, I want to show you side by side bar plots as opposed to stacked bar plots.
>
> **[7:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=430)** I actually prefer side by side a lot of the time.
>
> **[7:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=433)** The important difference here is this.
>
> **[7:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=436)** We're adding an argument that says beside equals T or true.
>
> **[7:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=440)** It says, instead of putting them on top of one another put them next to each other and we run it with the legend and we have the same problem again, because I'm working at a very low resolution for this recording, but if I do it without the legend you can see a little better what it looks like.
>
> **[7:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-bar-charts?u=76281980&t=456)** And again, very quick, easy way of getting started with your data getting some direction for your further analyses and giving you the initial insights that you can build on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5)
> **Definitions:** is a  (6)
> **CLI Commands:** make (5)
> **Code Identifiers:** psy_reg (2)
> **Analogies:** for instance (2)
> **Best Practices:** it's best to (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Creating histograms](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=0)** - [Lecturer] When dealing with quantitative data that is measured things that are on an interval or ratio scale, it's often best to start with histograms as a way of getting a feel for the entire distribution.
>
> **[0:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=12)** To do this, I'm going to first load the tidyverse and I'm going to load our dataset.
>
> **[0:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=19)** And so we've got our dataset right here with it's character variables and it's double precision variables.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=26)** And let's come down and get a little bit of information about histogram.
>
> **[0:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=30)** So I do question mark hist and it tells us some of the options and some of the directions that are available for histograms.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=39)** But let me demonstrate this by simply doing a default histogram where I choose the variable [[Data Science]] from df.
>
> **[0:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=46)** So what this is, is the relative popularity of data science as a [[Google]] search term in the 48 Contiguous United States over the last five years.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=57)** So I'm going to run that one.
>
> **[1:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=60)** And here we have our default histogram.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=63)** And what you can see, for instance, is that most of these are relatively low.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=68)** The majority of their scores are below 40 and it only goes up to 80.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=71)** By the way, the reason it doesn't go up to 100 is because on this particular variable, Washington DC set the high score at 100, and because I don't have the personality data for them, they're not included in this particular version of the dataset.
>
> **[1:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=85)** On the other hand, if you go to the [[Microsoft Excel|Excel]] file and you go to the second tab All Data, you will see the information on Washington DC as well as Alaska and Hawaii there.
>
> **[1:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=95)** But let's do a histogram with a few extra options.
>
> **[1:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=98)** Here I'm going to suggest the number of breaks.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=100)** Now it has seven breaks already.
>
> **[1:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=102)** And the funny thing is I say "it suggests".
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=104)** You can sometimes ask for a number and it just won't do it because it doesn't work out for whatever reason.
>
> **[1:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=110)** But I'm going to say seven breaks, that's usually a good number.
>
> **[1:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=113)** I'm going to add a title.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=114)** By the way, something I need to explain right here is this thing that has the back slash and the quotation mark.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=122)** It's because the quotation mark normally would signify that I am done with the title, and R would think I would get an error message for the things after that.
>
> **[2:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=130)** But a backslash is what's called in programming an escape character.
>
> **[2:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=137)** And what it's telling the language is don't read the next thing literally.
>
> **[2:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=142)** Don't read it as the end of a label, but rather I want you to just take it and show it exactly as it is but ignore it as a thing that carries meaning in terms of executing a program.
>
> **[2:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=155)** And so I have to escape the initial quote.
>
> **[2:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=158)** I have to escape the second quote.
>
> **[2:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=159)** And then this quote, which is not escaped is read as the end of the title.
>
> **[2:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=165)** And then I'm going to add a subtitle.
>
> **[2:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=167)** I'm going to add frequency.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=169)** I'm going to do an X label that also has the escaped quotation marks.
>
> **[2:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=174)** And then we'll turn off the borders and we'll make the whole thing red.
>
> **[2:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=177)** And when I do that I get another one.
>
> **[3:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=180)** Again, it's a little chunky and it kind of feels like 8-bit graphics but that's a good way to go.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=186)** So we've started with a histogram.
>
> **[3:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=189)** On the other hand, I personally prefer density plots 'cause they're smoother.
>
> **[3:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=195)** And if you are not familiar with density plots, you can get a little bit of information here.
>
> **[3:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=199)** It comes from a procedure called kernel density estimation which is a rather complicated sciencey topic but it makes for a better graph as far as I'm concerned, in part because histograms are very sensitive to how big you make each of the bins.
>
> **[3:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=216)** But density takes care of that by not drying bins.
>
> **[3:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=219)** And so what I'm going to do here is I'm going to take the same variable data science from the data frame, I'm adding the command Density, and then we'll plot it.
>
> **[3:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=229)** So this is a nested command.
>
> **[3:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=232)** And here you see the density plot.
>
> **[3:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=234)** It follows the same general profile as the histogram but you can see how it's smoothed out.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=239)** And we can add some options to this.
>
> **[4:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=243)** One is I'm going to, instead of using the nested commands at base R, I'm going to use piped commands.
>
> **[4:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=249)** There is one small trick, however, and that is when you're getting a single variable where you need to have all the values available as a vector, you need to use Pull instead of Select.
>
> **[4:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=260)** So I'm going to Pull Data Science I'm going to coerce it to be a numeric variable which is the kind that we need for the density chart.
>
> **[4:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=269)** Then I'm going to tell it to create the density curve.
>
> **[4:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=271)** And then I'm going to add some titles and labels.
>
> **[4:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=274)** And when I do that, the center part looks the same but now I have the titles here and I've got the titles on the bottom.
>
> **[4:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=281)** It's a little easier to read.
>
> **[4:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=282)** If you want to fill it in, you actually are going to superimpose a second graph on top of it.
>
> **[4:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=288)** So this is adding a filled density plot but we're going to do the pull the variable, convert it to numeric, do density, but now we're going to do a polygon.
>
> **[4:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=299)** And when we do that and I'm making it red, it just fills it in with a red one.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=305)** And so that's in my mind, a better way of looking at the distribution of a quantitative variable.
>
> **[5:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=312)** It's not so sensitive to the width of the bins that you give it, and it gives you still a clear impression that most of the scores are on the low end and it tapers off as you go to the right.
>
> **[5:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=322)** But histograms, density plots, both a great way to begin exploring your data.
>
> **[5:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-histograms?u=76281980&t=329)** Again, to give you insights and point you in the right direction for your analyses in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (4), [[Google]] (1), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [lecturer] (1)

#### [Creating box plots](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=0)** - [Instructor] When you have quantitative variables, a histogram or a density plot is a great place to start.
>
> **[0:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=4)** But in addition, a box plot is really good for looking at the symmetry of the distribution and especially for whether there are outliers because outliers can throw off tremendously a huge number of very common analyses.
>
> **[0:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=20)** So you're going to want to check for that.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=22)** Box plots are a good way to do it.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=23)** Let me show you how this works.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=24)** We're going to start by loading the tidyverse and readxl.
>
> **[0:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=29)** And then we're going to import our dataset.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=31)** I'm doing one small modification to the dataset in that I'm going to be including several variables that are Yes-No variables and text variables.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=41)** And by running this command, it's going to convert all of the character variables to factors.
>
> **[0:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=46)** So 'mutate' says that I want to change the data, 'across' means I'm going to use several variables, 'where' means search for variables that meet this criterion, 'is_character' means that it's a character variable, and this, by the way is from the tidyverse as opposed to the base R function.
>
> **[1:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=66)** And then convert it to 'as_factor'.
>
> **[1:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=70)** And again, the underscore version of this as opposed to 'as.factor' this tells you that is a tidyverse function which operates in a slightly more limited and easier to control way.
>
> **[1:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=81)** And then save it and print it.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=84)** So here we go.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=86)** Now I'm going to open this up right here.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=89)** And now you can see that state and state code and region and psych and so on are all factors.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=96)** And that's what I need for this particular analysis.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=100)** We're going to make box plots, and sometimes you might be able to use the generic plot command but let's get information about the specific box plot command.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=112)** And here you can see we have a number of options when we make these kinds of plots.
>
> **[1:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=116)** I'm going to make a default.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=118)** I'm going to choose the variable 'dance'.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=120)** What this means is [[Google]] searches for the term 'dance' for the 48 contiguous dates over the last five years from the DF data frame that I created and use box plot so this is a quick and easy chart.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=138)** And let me [[Zoom]] in on that chart.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=140)** And what you can tell is that we have a median that's what this line is in the middle, it's right around 70.
>
> **[2:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=148)** The box plot, the box goes from the 25th percentile score which looks like it's around 65 up to the 75th percentile score, which is maybe around 73.
>
> **[2:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=158)** These are the whiskers, and they extend to the highest and lowest non-outlying scores.
>
> **[2:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=163)** And that's just past 80 and down to just under 60.
>
> **[2:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=167)** And then we have one outlier indicated separately way up at a hundred.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=171)** This is one of the reasons you want to do box plots.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=173)** When you have a big outlier, you need to be aware of it.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=176)** Some methods like regression and correlation are extremely sensitive to outliers.
>
> **[3:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=181)** Others like [[Decision Trees]] are less susceptible.
>
> **[3:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=184)** But you still want to know what's going on with your data.
>
> **[3:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=188)** By the way, we can identify the outlier.
>
> **[3:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=190)** We can do this command, we start with the data frame and we're going to filter, which means to, I only want to see the cases where 'dance' is greater than 90.
>
> **[3:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=199)** And then 'select' means I want just these two variables state and dance it'll show them down in the console.
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=205)** And when we run those, we see that it is Utah, the state where I live, that is setting the record there, their outlier.
>
> **[3:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=212)** By the way, this is a consistent theme on almost any dance related term.
>
> **[3:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=216)** Utah has been unusually high for who knows what reasons.
>
> **[3:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=221)** I can think of a few, but it's very unusual there.
>
> **[3:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=224)** And so it's good to be aware of that happening.
>
> **[3:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=228)** But I want you to know you can also do variations on the box plot.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=231)** You don't have to do this basic vertical gray one.
>
> **[3:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=235)** I'm going to select the variable.
>
> **[3:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=237)** I'm going to do a box plot, but I'm going to make it horizontal.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=239)** I actually prefer doing them horizontal because that puts them in the same direction as the histograms and density plots.
>
> **[4:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=247)** I'm going to give it a title and it's going to have a confidence interval.
>
> **[4:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=252)** And so that is a confidence interval for the median indicated by a notch.
>
> **[4:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=256)** So T there is for true, and then I have the titles and the labels, and I'm going to color it red.
>
> **[4:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=262)** And when I do that, it's nearly presentation ready.
>
> **[4:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=267)** So here is the median right around 70.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=270)** These notches indicate a 95% confidence interval for the median going down to maybe around 68 and up to maybe 72.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=280)** The whiskers go to the same points and we still have Utah up here at the far right but we have appropriate labels and titles and this is a good graph that's ready to go.
>
> **[4:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=297)** But box plots are flexible and there are a few different variations.
>
> **[5:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=301)** Sometimes you want to look at more than one variable at a time, compare their distributions.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=305)** Box plots are very good for that.
>
> **[5:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=308)** I have several variables in the Google Trends data that have to do with searches for sports.
>
> **[5:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=313)** And we have five different sports and it's how often did people search for that exact term?
>
> **[5:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=318)** So what I'm going to do here is I'm going to start with DF.
>
> **[5:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=323)** Start with our entire data frame.
>
> **[5:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=324)** I'm going to select several variables that are all next to each other.
>
> **[5:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=328)** The first one's basketball and then the colon means go through until you get to hockey.
>
> **[5:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=333)** And then I do box plot, just the generic command.
>
> **[5:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=338)** And when I do that, I'll zoom in, you can see the five sports.
>
> **[5:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=342)** I have basketball, football, baseball, soccer and hockey.
>
> **[5:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=347)** And what you can see is that the first three are pretty similar.
>
> **[5:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=349)** Basketball, football, and baseball.
>
> **[5:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=351)** They all have a median of around 40 they're spread out about the same amount.
>
> **[5:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=356)** Soccer on the other hand is very different.
>
> **[5:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=358)** It's much higher, it is a compressed distribution.
>
> **[6:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=362)** And then hockey is also compressed much lower but with a few significant outliers.
>
> **[6:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=368)** And actually that makes me think that looking at soccer and hockey might be worthwhile.
>
> **[6:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=374)** And so let's find out for instance, who the outliers are on hockey because they are so much higher than the [[Representational State Transfer (REST)|rest]].
>
> **[6:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=380)** To do that, I'm going to start with our data frame, which I've called DF.
>
> **[6:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=383)** We're going to look for scores where hockey is more than 45 and that's just kind of eyeballing it about where the outliers begin.
>
> **[6:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=392)** And I'm going to ask for state, the name of the state and their score on hockey, which is again, their Google Trends data for relative searches on hockey.
>
> **[6:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=403)** And then we're going to arrange it in descending values.
>
> **[6:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=405)** So the highest one is at the top and we go down a few.
>
> **[6:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=409)** And what we see from that is that Minnesota, not surprisingly, searches for hockey more relatively speaking than any other state, followed by North Dakota, Massachusetts, Vermont, and New Hampshire.
>
> **[7:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=421)** But really this is Minnesota's sport as shown by this particular data set.
>
> **[7:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=428)** Another thing you might want to do is look at box plots comparing different groups.
>
> **[7:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=434)** And so for instance, let's see whether the searches for hockey are different for states that have an NHL top level professional hockey team and states that don't.
>
> **[7:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=445)** To do that, we're going to use the generic plot command.
>
> **[7:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=450)** We're going to use DF, we're going to select whether they have an NHL team and that is defined as a factor with Yes and No as the values.
>
> **[7:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=458)** And then their score on hockey and we just do generic plot, and I'll zoom in on that one.
>
> **[7:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=467)** And what you can see is, well they're both really compressed.
>
> **[7:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=470)** We have outliers on both sides.
>
> **[7:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=473)** What's interesting about that is the states, well rephrase, one thing makes sense, the states that have hockey teams have a higher median than the states that don't have hockey teams but it's not a lot higher.
>
> **[8:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=486)** On the other hand, what's surprising is that we still have some really big outliers including states without a hockey team.
>
> **[8:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=492)** So let's follow up by looking at that one again.
>
> **[8:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=496)** Who is the outlier on No?
>
> **[8:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=498)** That is who is this data point right here?
>
> **[8:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=502)** We'll do that by getting the data frame by filtering or selecting out just the cases where there is a value of No on 'has NHL'.
>
> **[8:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=511)** We'll look for scores where hockey is over 80 then we'll get the state and their score.
>
> **[8:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=515)** And what we see is it's North Dakota.
>
> **[8:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=518)** It's a very small state.
>
> **[8:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=519)** They don't have any major top level professional teams but also a great interest in hockey.
>
> **[8:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=525)** If you're a market researcher this is going to be really important to you.
>
> **[8:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=529)** You're going to find a potential market there, something you might want to look into a little more closely.
>
> **[8:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=535)** And then we can modify this by using a plot and then making it horizontal, adding notches and doing many of the other options that I had in the other charts.
>
> **[9:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=545)** I'll zoom in on that.
>
> **[9:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=548)** And here the notches get a little funny when the confidence intervals go past the boundaries of the box.
>
> **[9:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=555)** But still you get a good idea for what's going on.
>
> **[9:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=559)** Here's North Dakota right here and here's Minnesota right here that we know from earlier.
>
> **[9:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=563)** But again, box plot is a great way to start looking at your data to find out are things symmetrical?
>
> **[9:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=570)** Do they have matching distributions?
>
> **[9:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=572)** And more than anything, are there outliers and where are they?
>
> **[9:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-box-plots?u=76281980&t=576)** Because you need to know that in order to be able to accurately guide your subsequent choices about analysis and interpretation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4), [[Google]] (3), [[Decision Trees]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (9), means that (1), defined as (1)
> **CLI Commands:** make (4), find (3)
> **Env Vars:** nhl (3)
> **Code Identifiers:** is_character (1), as_factor (1)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** for instance (2)
> **Warnings:** be aware (2)

#### [Creating scatterplots](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=0)** - [Instructor] Scatter plots are one of the best ways of looking at associations between two quantitative or measured or scaled variables.
>
> **[0:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=8)** To demonstrate this in R, let's load our libraries.
>
> **[0:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=12)** And then from our data set, which is state trends, let's bring in just the five terms about searches for sports.
>
> **[0:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=20)** I do that by reading in the CSV and then selecting basketball through hockey.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=26)** That brings in five sports.
>
> **[0:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=27)** And then we'll use a glimpse.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=28)** It's a slightly different way of looking at the data from what we've used before.
>
> **[0:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=33)** And when we do that, you can see here that we have read in.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=38)** It tells us which variables are character, which ones are double, but then when we specify just the five variables from basketball through hockey, they're all double precision.
>
> **[0:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=49)** And here are the initial values and that's great.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=51)** That's what we're looking for.
>
> **[0:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=54)** Now, to make a scatter plot, we have an option of simply plotting all of the associations.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=59)** We only have five variables in our dataset right now, so that's not too many.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=63)** If we had 20, it would be a nightmare.
>
> **[1:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=65)** It'd take a long time to plot it and it would be very hard to read it.
>
> **[1:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=70)** But five is manageable so I just do DF and I feed it into plot.
>
> **[1:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=75)** And we can [[Zoom]] in on this scatter plot matrix.
>
> **[1:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=78)** So basketball is on the left and on the top, then football then baseball, then soccer, and then hockey is across the bottom and on the right.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=88)** And it's symmetrical.
>
> **[1:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=90)** And so this chart right here shows the association between football and basketball.
>
> **[1:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=95)** And this one also shows the association, except in this one basketball is across the bottom and football is up the side.
>
> **[1:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=102)** And in this one, football's across the bottom and basketball is up the side.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=105)** So they're sort of mirror images of each other.
>
> **[1:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=108)** From this, we can see a few things.
>
> **[1:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=109)** Number one of basketball, football, and baseball, there are generally uphill trends.
>
> **[1:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=116)** So it looks like states that search more for one of these sports also tend to search more for the other ones.
>
> **[2:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=123)** Soccer, on the other hand, you can see it's got a little different trend.
>
> **[2:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=127)** It's either no trend or possibly even downhill.
>
> **[2:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=130)** And hockey has some major outliers which throw things off but it looks like maybe it's a downhill association except between soccer and hockey.
>
> **[2:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=141)** And this gives you an idea of where you can look for things.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=144)** Now, if you're doing marketing, that tells you that there are important similarities possibly in your audiences for basketball, football, and baseball.
>
> **[2:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=152)** But that soccer and hockey operate a little bit differently.
>
> **[2:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=156)** Let's take a closer look by doing a bivariate, which means two variables scatter plot, using just the defaults.
>
> **[2:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=163)** So we'll take our data frame, we'll select just soccer and hockey since they seem to be operating a little differently than the others.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=169)** And we'll make a plot for those two.
>
> **[2:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=172)** And now what you can see is we have a couple of outliers which we happen to know from our previous one on box boss that's Minnesota and that's North Dakota.
>
> **[3:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=183)** And there are the [[Representational State Transfer (REST)|rest]] where it's basically uphill where there's a slight trend that states that search more for soccer, relatively speaking are also a little more likely to search for hockey but it's not really pronounced.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=198)** On the other hand, we can come back here and we can do our bivariate scatter plot again with a few options.
>
> **[3:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=203)** Mostly here we are adding a title, we're adding labels, we're going to color the points.
>
> **[3:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=209)** So instead of being these empty circles, we'll make them red and we're going to change the plotting character set it to a small circle.
>
> **[3:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=217)** Now this involves using PCH which is for plotting character and we're using character number 20, the small circle.
>
> **[3:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=224)** But now, that looks good.
>
> **[3:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=227)** If you want to know what the other characters are, by the way we can do help on PCH.
>
> **[3:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=233)** And you do have a number of options.
>
> **[3:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=237)** It'll show 'em when we get down here.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=239)** Here is the list.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=241)** And here's the small point number 20 that I'm using.
>
> **[4:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=246)** I try to keep it pretty simple.
>
> **[4:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=248)** I would really personally only use the medium or the large or the small circle, but that one's up to you.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=255)** So let's go back to our plot.
>
> **[4:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=258)** And we can also do one very common thing which is adding a regression line.
>
> **[4:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=262)** So that is a fit line, a predictor line.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=265)** And the formula for this is LM which stands for linear model, that's regression.
>
> **[4:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=271)** And you tell it what's your outcome variable what's the one going up on the Y axis?
>
> **[4:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=276)** And then use a tilde to say is a function of or as predicted by the other variable.
>
> **[4:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=283)** So here I say use hockey from our data frame as a function or as predicted by soccer in our data frame 'cause soccer is on the X and hockey's on the Y.
>
> **[4:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=292)** And then AB line which means regression line with your A and B coefficients.
>
> **[4:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=297)** And there you go.
>
> **[4:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=298)** It is a slight uphill and you can see it a little more clearly here.
>
> **[5:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=305)** It doesn't get really big.
>
> **[5:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=307)** But we have these states that just have very little interest in both of these sports up to ones that show a little more interest.
>
> **[5:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=313)** And again, with our superstar outliers of Minnesota and North Dakota that we identified earlier.
>
> **[5:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-scatterplots?u=76281980&t=320)** And so if you are looking at where you can invest your advertising dollar for a hockey or a soccer or whether there's any crossover between those markets this kind of analysis is going to give you a great start on planning your strategy and finding the people who are going to be most interested in what you have to offer them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** make (3)
> **Env Vars:** pch (2), csv (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Creating line charts](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=0)** - [Instructor] I'm a firm believer in trying to get more done with less work, less effort, and also less code.
>
> **[0:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=7)** And I tell people when they are starting to work with data that you're going to get 90% of your value from bar charts and from line charts because bar charts show you how common something is.
>
> **[0:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=20)** And line charts show you change over time.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=22)** And if you're in a business setting, that's especially interesting.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=26)** Let's take a look at line charts in R by first loading the data sets.
>
> **[0:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=30)** I'm going to be using some of the built-in data sets for this example.
>
> **[0:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=35)** And we're going to take a look at a few of them.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=36)** The first one is US population, so it's uspop.
>
> **[0:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=40)** Let's get the help on that one.
>
> **[0:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=42)** And as population in millions from 1790 to 1970, it's a time series of 19 values.
>
> **[0:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=50)** And we can actually see the entire dataset by just calling uspop.
>
> **[0:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=54)** And the frequency 0.1 lets us know that these are decades apart from each other.
>
> **[1:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=61)** And so that's a population of growth.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=64)** And fortunately it's really easy to plot a single time series element here.
>
> **[1:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=69)** And it's important to point out that it is a time series.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=72)** It tells R that this data set is time series, the year that it starts, the year that it ends and the frequency in between.
>
> **[1:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=80)** It's a special kind of data set.
>
> **[1:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=82)** But let's graph this one.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=84)** When we use plot with a time series data set, it knows to make this line.
>
> **[1:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=92)** And you can tell from this that the US population has been going up over time.
>
> **[1:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=97)** Let's [[Zoom]] in just for a second.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=100)** In fact, it's really smooth exponential growth with a little glitch here and here.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=105)** It slowed down and then it resumed what it was doing.
>
> **[1:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=109)** And in fact, we can make the same plot with a few options.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=114)** Let's give it a title and some labels and then I'm going to add some separate elements.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=120)** So you have to first make the chart, then you can add these things.
>
> **[2:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=123)** One is I'm going to add a vertical line at 1930 in light gray, and then I'm going to put some text at the bottom that says that's 1930.
>
> **[2:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=135)** Then I'll do another vertical line at 1940 and add some text there.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=140)** When we zoom in on that, you can tell this is a different population that corresponded to the depression and then picked up back after World War II.
>
> **[2:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=151)** And those are reasonable times to mark as a way of an explanation for this little glitch in the exponential growth of the population.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=161)** Now, when you're working with time series data, you do have other options in R.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=166)** We did just the generic plot command and it worked fine.
>
> **[2:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=170)** There is one that is specific to time series.
>
> **[2:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=172)** It's called ts.plot, and it can be used for a single time series, but it's going to look exactly the same.
>
> **[3:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=180)** Here we go.
>
> **[3:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=181)** And the general plot is a little easier and I would use it instead.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=186)** There is also a more powerful alternative than instead of being ts.plot, it is plot.ts.
>
> **[3:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=193)** And that gives you some more options though for our simple data set, once again, the chart's going to look exactly the same.
>
> **[3:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=201)** Things vary, however, when you're showing more than one time series at a time.
>
> **[3:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=206)** So you want to look at the changes of several different things.
>
> **[3:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=210)** In this case, I'm going to use a data set that is about the European Union stock markets and it gives us four different stock markets the [[DAX]] in Germany, the SMI in Switzerland the CAC in France, and the FTSE in the UK.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=226)** So let's get a little bit of information about that data set.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=231)** Again, it's a time series with 1,860 observations on four variables.
>
> **[3:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=237)** And it is a object of class mts which is for multiple time series.
>
> **[4:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=242)** And we can take a look at that data set by simply calling its name.
>
> **[4:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=246)** And it's only showing us the first bits and pieces of it but let's see if we can get up to the top here.
>
> **[4:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=253)** So we have the year and then we have these fractional years.
>
> **[4:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=257)** That's how it's indicating the daily values in this particular data set.
>
> **[4:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=261)** And then we have the four indexes with their values below 'em.
>
> **[4:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=267)** But this is going to be a whole lot easier to make sense of if we make a graph.
>
> **[4:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=271)** And so I'm going to use the ts.plot.
>
> **[4:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=275)** I'm going to tell it that we're charting the EU stock markets and I'm going to tell it to make the lines in four different colors by using the first four colors of the rainbow palette that we looked at a while ago.
>
> **[4:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=286)** And when we do that, you can see the exponential growth over time and that they all tend to show roughly the same percentage growth over time.
>
> **[4:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=296)** I'm also going to add a legend and I do that with a separate legend function.
>
> **[5:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=300)** I'm going to tell it to put it in the top left 'cause we have a big empty space there.
>
> **[5:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=304)** And I'm going to tell it to use the column names from the EU stock markets.
>
> **[5:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=309)** And then I'm going to give it the same four rainbow colors and tell it to use solid lines.
>
> **[5:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=315)** And when I do that, that's quick and easy.
>
> **[5:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=317)** Let's zoom in on it just for a minute.
>
> **[5:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=319)** And so this might be a sufficient graph for your internal presentation.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=326)** It shows the growth over time.
>
> **[5:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=327)** You can see for instance that the purple FTSE from the UK drops down and the bright green SMI from Switzerland picks up around 1997.
>
> **[5:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=339)** And that there might be something that is of value to you and the people that you work within that.
>
> **[5:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=345)** But this is one great way of looking at data that goes over time.
>
> **[5:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-line-charts?u=76281980&t=349)** The time series line charts in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[DAX]] (1)
> **CLI Commands:** make (6)
> **Env Vars:** smi (2), ftse (2), dax (1), cac (1)
> **Definitions:** is a  (4)
> **File Paths:** plot.ts (1)
> **Versions:** 0.1 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Creating cluster charts](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=0)** - [Instructor] A common task in working with data is finding more or less naturally occurring groups in your data of observations or cases or people who can be grouped together.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=10)** Say, for instance, you're going to do marketing campaigns and you have enough money for three different campaigns, then you want to find three different groups of people in your audience who can each receive one of the campaigns.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=22)** And the nice way to do this is with a visual diagram, a cluster chart, which is very easy to do in R.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=28)** And we actually have a few different options.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=31)** Now I'm going to start by opening this file, 03_07_clustercharts.R.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=37)** And when I do that, we get this yellow warning across the top that says there are two packages that are required but not installed.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=44)** You can either click Install right here and it'll take care of it.
>
> **[0:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=47)** But I'm also going to just run through it with the code itself.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=51)** Now we're going to be using a package that we haven't used before called ggdendro, which stands for grammar of graphics dendrograms.
>
> **[0:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=58)** That's the kind of chart that you make for clustering.
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=62)** I'm going to do cmd or ctrl + return to install that package.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=68)** And here I see it's downloaded.
>
> **[1:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=70)** It's a small package, it's there now.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=72)** And then to make that available, I have to load it using the library command.
>
> **[1:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=77)** And I do the same thing for the tidyverse.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=79)** So I'm going to do cmd or ctrl + return to load the tidyverse.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=84)** And then the same thing for ggdendro.
>
> **[1:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=87)** And now let's look at some data.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=89)** We're going to use the state dataset, so we're going to use read_csv to read it and we're going to put in the state code and a bunch of the search terms.
>
> **[1:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=98)** We'll drop missing cases, even though there aren't any missing cases, but we'll save that to df.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=105)** Great, and so that's now in there.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=107)** Now one of the things you want to do when you're working with data is you want to make sure that things are on the same scale.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=114)** Now we're already pretty good because these are [[Google]] Trends terms, and theoretically they go from zero up to 100.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=122)** But sometimes you might have things that indicate population or some other preference, and you'll have variables that are on different scales that can really wreak havoc with a cluster analysis.
>
> **[2:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=134)** And so one of the first things that we're going to do is we're going to scale the data set.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=138)** We're going to standardize it and so that it takes each of the variables and rescales them so that they have a mean of zero and a standard deviation of one.
>
> **[2:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=146)** Put them on comparable scales, which is important for getting a more accurate cluster analysis.
>
> **[2:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=154)** We're going to select everything except state code will remove that and we'll just use the scale function and save it in a new object called df_scaled.
>
> **[2:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=164)** And so you see that's over here now.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=166)** And you can see these numbers that are now Z scores.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=171)** Again, they are a mean of zero and extended deviation of one for each of the variables.
>
> **[2:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=178)** And then we're going to put the row names back on.
>
> **[3:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=180)** So we have the state codes.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=182)** Now let's come down here and let's do the cluster analysis itself.
>
> **[3:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=185)** We're going to do this in a couple of steps.
>
> **[3:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=188)** The first one is we're going to use h cluster for hierarchical clustering, which is an agglomerative method.
>
> **[3:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=195)** So it starts with everything separate.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=198)** All the cases are separate, and then it starts putting them together until the very last step.
>
> **[3:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=202)** All the cases are in one group.
>
> **[3:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=204)** This is as opposed to a method that splits them up.
>
> **[3:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=208)** And so there are a couple of different methods, but we're going to use this one.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=211)** And we use couple of functions.
>
> **[3:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=214)** We start with our scaled data.
>
> **[3:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=216)** That's the one where we make sure that things are on the same range of the data.
>
> **[3:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=221)** And we're going to calculate distances that is a distance or what's called a dissimilarity matrix.
>
> **[3:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=227)** How far is each point from the other points based on the data that we gave it.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=231)** And then we use that to compute hierarchical clusters.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=236)** And we're going to save that into an object called hc for hierarchical clusters.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=241)** We do that and it's a list over here, but we can then plot it.
>
> **[4:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=245)** So we take hc and we feed it into the command plot.
>
> **[4:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=249)** And we're going to give it some labels and a title.
>
> **[4:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=252)** And let's run that one.
>
> **[4:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=254)** And now we get a graph.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=255)** And let's [[Zoom]] in on it for just a moment.
>
> **[4:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=258)** This is what a hierarchical cluster looks like.
>
> **[4:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=260)** We have the individual 48 states listed across the bottom.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=265)** And then these are lines that join two of them at a time.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=270)** Remember, 'cause we're agglomerating.
>
> **[4:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=271)** We're simply adding two at a time.
>
> **[4:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=274)** And as it goes through the data we see, for instance, it looks like Arizona and Florida get joined very first 'cause they're the very first step.
>
> **[4:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=282)** On the other hand, we have other places like Indiana, Kentucky get joined a little bit later.
>
> **[4:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=288)** And then we start joining each of those different groups.
>
> **[4:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=293)** And so that is one way to look at your data and maybe you already see some sort of pattern in there that's going to make sense to you.
>
> **[4:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=299)** It's going to be a little easier to interpret if we draw some boxes around it.
>
> **[5:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=303)** So I'm going to use this function called rect.hclust.
>
> **[5:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=309)** And I'm going to do it first by saying k = 2, that means I want two boxes and I'm going to draw them with a gray border.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=316)** And when I do that cmd or ctrl + return, now we can zoom in on it and you can see it says, well, we've got this group of states right here.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=326)** And then over here we've got all the other states.
>
> **[5:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=329)** And it does it by splitting them where they are at these last two points, two might be helpful, but we can also do three and we can do it with different colors.
>
> **[5:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=338)** I'm doing border as two through four for the colors.
>
> **[5:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=342)** And when we do that, it just lays it over the top of it.
>
> **[5:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=345)** And now you can see three different groups.
>
> **[5:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=347)** So if you're doing a marketing campaign with three groups and you want to do states, this might be one way of divvying up your states.
>
> **[5:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=356)** Now there is alternative visualization to this.
>
> **[5:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=359)** If you're looking for something that's more presentation polished and that's using ggdendro.
>
> **[6:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=364)** Again, 'cause this kind of chart here is called a dendrogram, which is like icicles.
>
> **[6:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=368)** And we're going to use this one, the function ggdendrogram.
>
> **[6:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=373)** And we're going to tell it to rotate it to horizontal and turning off the stock theme.
>
> **[6:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=378)** But let's run that one and see what it looks like.
>
> **[6:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=380)** And you see here, it looks a lot more like ggplot2 graphics as we go through.
>
> **[6:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=386)** And it lists the states here, it's a little squished.
>
> **[6:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=388)** You'd probably want to make it taller, but it is the same organization of the data as you go through.
>
> **[6:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=394)** And what both of these have in common is a way of finding naturally occurring similarities based on the data that you gave to the algorithm.
>
> **[6:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=403)** And that's important to say.
>
> **[6:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=405)** This is simply based on a dozen or two Google search terms.
>
> **[6:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=410)** It does not include things like education and income and whatever else you might want to put in there.
>
> **[6:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=415)** But based on the limited data that I provided it, it's grouping states in this particular way.
>
> **[7:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=421)** And again, that might be appropriate depending on your purposes.
>
> **[7:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/creating-cluster-charts-25384060?u=76281980&t=424)** And so a cluster diagram, a cluster chart can be one really good way of getting a quick initial impression of the groupings in your data that can help you meet your own particular analytical goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Zoom]] (2)
> **CLI Commands:** make (6), find (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Identifiers:** read_csv (1), df_scaled (1)
> **Analogies:** for instance (2)
> **Prerequisites:** install (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 4. Data Wrangling

[↑ Back to Table of Contents](#table-of-contents)

#### [Selecting cases and subgroups](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=0)** - [Instructor] Sometimes you don't need to see everything all at once and having a little bit of focus can give you better, more useful insights in your data.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=9)** One way to do this in R is through selecting cases.
>
> **[0:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=13)** Actually, we're going to be using something called filtering to do the selection, but the idea is you can select individual cases or subgroups and give them your special attention.
>
> **[0:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=24)** Let's start by loading our two packages and then we're going to load our data set and I'm going to convert a few of the variables to factors in that process.
>
> **[0:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=35)** And so we've got our data set right here.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=38)** I've kept state, the region, the geographical region, the psych_region, and their scores on one [[Google]] Trend search, and that is data_analysis.
>
> **[0:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=47)** So this is the relative popularity of data_analysis as a search term for that state compared to other states.
>
> **[0:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=58)** So let's start by filtering out some of these cases.
>
> **[1:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=61)** We'll first look for the state where data_analysis has a score on Google Trends of over 50.
>
> **[1:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=70)** So I do filter and then I say data_analysis greater than 50.
>
> **[1:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=75)** And then I'm actually going to sort the cases, sort the states, so that the ones with the highest scores are at the top and lower scores are at the bottom.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=84)** And when I do that, we have only four states, in this particular variable, with scores greater than 50.
>
> **[1:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=90)** By the way, the way Google Trends work is that the highest area will have a score of a hundred.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=96)** The reason we don't have a hundred here is because Washington DC was the highest at a hundred and then Maryland was substantially lower than that.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=104)** But because we don't have the personality data for Washington DC, or Alaska, or Hawaii, they're not included in this particular data set.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=112)** Next, we can look, for instance, at just the cases where psych_region is Relaxed and Creative.
>
> **[1:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=119)** So the way I do that is, I say filter and then psych_region, and when you're searching for a variable that has text as its data, you do need to do this one thing, use two equal signs.
>
> **[2:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=133)** That is a common thing in computer programming languages.
>
> **[2:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=136)** And it means equivalent to, as opposed to when you're assigning a value to something.
>
> **[2:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=142)** Also, it needs to be in quotes.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=144)** And I'm going to do that and then I'm going to sort it again in descending values by data_analysis.
>
> **[2:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=151)** And when I do that, we have 10 states this time, that are Relaxed and Creative, according to this personality analysis.
>
> **[2:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=160)** And the one with the highest scoring data_analysis is Virginia and it goes down to Nevada at 27.
>
> **[2:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=170)** Now, you can filter by more than one variable at a time.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=173)** So for instance the vertical pipe character, which is over the return key, is used as an OR.
>
> **[3:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=180)** And so, this time I say take the data frame and then search for either region is equal to south, and then the pipe here means OR, psych_region is equal to, or is equivalent to, Relaxed and Creative.
>
> **[3:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=194)** And let's take a look at those and I'm going to sort them by both region and then psych_region.
>
> **[3:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=202)** When I do that, you can see our states that are in the south, here at the top, and then, in addition to the two that are Relaxed and Creative, we have additional states that are Relaxed and Creative and we also have their values for data_analysis.
>
> **[3:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=220)** If you want to do a conjunction and combine two search terms, you can say, show me the states that are both in the south, so region is equivalent to South, and, all you need's the ampersand, psych_region is equal to Relaxed and Creative.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=236)** And when I do that, we have just two states that meet both of those search requirements.
>
> **[4:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=241)** It's North Carolina and Virginia.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=244)** And then, you can also do an exclusive criterion, where you use the exclamation point, which is equal to NOT.
>
> **[4:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=252)** So what this one says is, show me the states that are in the South region, is equal to or equivalent to South, and NOT psych_region is equal to Relaxed and Creative.
>
> **[4:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=263)** So show me the other states in the South.
>
> **[4:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=266)** And then, we're going to arrange those by psych_region.
>
> **[4:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=269)** And then, we'll do descending values on data_analysis.
>
> **[4:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=274)** Now, when you look at these, all of them are in the South, 'cause that was one of the criteria I used.
>
> **[4:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=278)** And then, they are either Friendly and Conventional, or Temperamental and Uninhibited.
>
> **[4:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=283)** Not Relaxed and Creative, 'cause I specifically excluded that.
>
> **[4:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=286)** And then we sorted it by psych_region alphabetically.
>
> **[4:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=289)** And then within that, data_analysis in descending values.
>
> **[4:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=294)** And so this is a good way to start focusing in on the particular cases and groups that'll be most interesting and informative to the projects that you're doing.
>
> **[5:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/selecting-cases-and-subgroups?u=76281980&t=303)** It's a very simple process to select cases using the command filter and then combining things with the OR pipe, the AND ampersand, or the NOT exclamation point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3)
> **Code Identifiers:** psych_region (9), data_analysis (9)
> **Definitions:** is a  (2)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [Recoding variables](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=1)** - [Instructor] The data rule of thumb is that 80% of any project time is spent preparing the data, and one of the major tests that can be included in that is recoding the data, so taking it as existing categories or scores and creating new categories or scores based on that, and I want to show you a few ways of doing this very briefly in R.
>
> **[0:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=21)** We're going to do this by opening up 04_02_Recoding.R, and we're going to be using two packages.
>
> **[0:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=29)** Number one is the general purpose tidyverse, 'cause that makes a lot of other functions possible, so we're going to load that one.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=36)** We've installed it before.
>
> **[0:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=37)** The other one is readxl.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=39)** Now, interestingly, this is part of the tidyverse, but it's not loaded by default.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=44)** You have to load it explicitly, and so I'm going to load that one as well, and it's an improved way of reading CSV and [[Microsoft Excel|Excel]] files.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=53)** So the first thing we're going to do is we're going to read our dataset in.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=57)** Now, we're going to do a couple of things here.
>
> **[1:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=60)** We're going to use the read CSV because our data's in a CSV format.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=64)** We're specifying the name of it, and then one of the things we're going to do right now is we're going to convert all of the character variables to as factor.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=72)** We're going to switch them to factors, because that changes the way some of the other functions, including graphs, work, but let's come right here and run that command, and now we've saved it over here into DF for data frame, and if you want to see it, you can click on it right here and see where it looks like a spreadsheet, but we also got a short output of it down here in the console when we ran the command.
>
> **[1:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=98)** Now, the first thing I want to show you is how to combine some of the categories, so let's take this variable right here, psych region, where things are relaxed and creative, friendly and conventional, or temperamental and uninhibited.
>
> **[1:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=113)** What I'm going to do is I'm going to take the data frame, DF, and then I'm going to use the command mutate, which is what we use for changing the data, and I'm going to say, we're going to create a new variable called relaxed, and we'll use the recode command as a way of doing this, and the way we're going to recode is we're going to start with the variable psych region, and then if psych region is relaxed and creative, and you have to put the spelling and the spacing and the capitalization exactly as it appears in the dataset and put it in quotation marks, then I tell it to make that equal to yes on our new variable, relaxed.
>
> **[2:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=151)** And then I'm doing something I don't really need to do.
>
> **[2:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=155)** I'm just showing you that you can specify explicitly what the no would be.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=161)** In this case, I'm saying friendly and conventional is equal to no, because it's not the relaxed and creative, or you can just do this, and you can say .default, so everything that you didn't automatically already specify becomes no, so it would work the same.
>
> **[2:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=177)** We could remove this line, and friendly and conventional would still go to no because of this default, but I just want you to see that there are different ways of doing it.
>
> **[3:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=186)** And then we're going to select just the state code, the psych region, and this new variable we created called relaxed, and so I'm going to run that command by doing command or control return, and then let's [[Zoom]] up and look at this one a little better.
>
> **[3:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=199)** Here, you have the state codes, and here, you have the psych region and whether they are relaxed or not, and you can see that it's taking the different states, and if they're relaxed and creative, it says yes.
>
> **[3:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=209)** If they're something else, it says no, and so that's a very basic kind of recoding.
>
> **[3:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=215)** Now, if you want to get a little fancier, if you've got a lot of variables and you're creating these nuanced conditional things, you can use something called case when, and I'm going to get help on that one, so we'll do question mark case when, and you can see it is the general vectorized if else, and it's got a lot of information you can look up here.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=239)** But what we're going to do is we're going to come over here to DF, start with our data frame again, and we're going to use mutate because we're changing things, and in this case, I'm going to create a new variable called like arts, and instead of recode, I'm going to use case_when, and I'm going to say that a state likes art if their score on art in [[Google]] Trends is greater than 75, or if their score on dance is over 75, or, remember, the vertical pipe means or, if their score on museum is over 75, then I use the tilde to say, that means they get yes.
>
> **[4:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=280)** And then it says true is no for all other values, so this is a very different kind of syntax than we had for specifying the values and defaults, but this is how it works.
>
> **[4:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=294)** And then I'm going to select those variables, arrange them by like art, and print the entire thing, so let's run that particular command, and then I'm going to zoom in on this again, and you can see we have all 48 states, and the states that like arts, because this is over 75 or this or this, is going to get them at the top.
>
> **[5:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=319)** It's not scoring them or averaging them, it's just saying, really, it's doing it alphabetically, but these are the yeses, and these are the ones who did not go above 75 on any of those variables.
>
> **[5:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/recoding-variables-25385024?u=76281980&t=330)** And so this is a way of looking at possible combinations of variables as a way of creating sort of an index or a customized grouping that can best meet your needs, but these two examples will give you an idea of what is possible when recoding your data in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Microsoft Excel|Excel]] (1), [[Google]] (1)
> **Env Vars:** csv (3)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** case_when (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Computing new variables](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=0)** - [Instructor] So, I should probably be a little more explicit about some of the things that you've already seen me do, and I may have explained a little bit, and that's about creating new variables in R, and this is actually a really simple process when you use the Tidyverse approach.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=16)** Let me show you how this works and do some common tasks in working with data of the kind that I'm accustomed to.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=23)** So, I'm going to just load the Tidyverse, and what I'm going to do then is I'm going to create a little toy data set with three variables.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=31)** I'm going to save it as a tibble, that's a kind of data frame that is used in the Tidyverse, it makes certain things easier, and I'm going to have X be the values 1 through 5, I'm going to have Y be the value is 7 going down to 3.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=44)** And then for Z, third one, I'm using the C for concatenate combined, and then I just typed in a few different values, a 2, a 4, a 3, a 7, and then an NA, which is a missing value and not available, and then I'm going to save that to DF, and I'm also going to print it to the console.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=63)** So, here is my data set down here, you see X, Y, and Z as we go across, and you see the NA in the bottom right, and then we're going to average across a few variables.
>
> **[1:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=75)** So, one thing that's really common in my work, which is in the social sciences, is that you'll give somebody a questionnaire, and then you need to summarize across those different variables.
>
> **[1:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=87)** Well, the easiest way to do that in R is with rowMeans, and so I'm going to come here to my data frame DF, and then I'm going to use mutate, which means I'm changing something in the data.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=100)** and then I'm going to create three new variables.
>
> **[1:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=102)** I'm calling them mean_xy, xyz, and xz, and I'm using the function rowMeans, and then I also have to add this thing that says across, 'cause it means I'm going across the columns to make this happen, but it's pretty easy, aside from that.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=118)** RowMeans across, and this says X to Y.
>
> **[2:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=121)** This one says X to Z, which means X, Y, and Z, and this one I'm specifying just X and Z, and when we do that, you can see how it works down here.
>
> **[2:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=131)** So, it's averaging them.
>
> **[2:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=132)** One trick, however, is that if you have an NA, a not available, because it's missing data value in there, it just kind of shuts down the process, and R won't compute anything that has an NA in it.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=145)** Now, that may be appropriate in certain situations.
>
> **[2:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=148)** On the other hand, I've had lots of situations where you give somebody a questionnaire with 20 questions and they don't answer one or two of them, but you can still get close enough to what you need by averaging the [[Representational State Transfer (REST)|rest]] of what's available, and so there's a very simple way of telling R to do that.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=166)** And as you add the argument, "na.rm = T", and what that stands for is not available or missing data, rm means remove, and then the T is for true.
>
> **[2:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=178)** So, it says, please remove any missing values but otherwise do things the same, and when we do that, let me make it so you can see both of these together.
>
> **[3:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=188)** You can see we still have the NA and the original data, but it has gone ahead and created these mean values, just ignoring that one particular value, and again, depending on your circumstances this may be a very useful approach when you have nearly complete data, you have enough to make valid conclusions, and this allows you to get through that process.
>
> **[3:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=212)** Another thing that comes up sometimes is having to reverse code a variable.
>
> **[3:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=217)** So, for instance, maybe sometimes you have it so 7 means more of something on a 1 to 7 scale, but sometimes 1 means more of something.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=226)** So, to do that, we're going to again use mutate, and I'm going to create a new variable called y_r, that means Y reversed.
>
> **[3:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=236)** By the way, it's easy to simply overwrite Y, but I know from experience that it's easy to forget whether you have done that or not, and so I always create a new variable, and the _r indicates that I have reverse coded, and because I set up my data as though it were from a 1 to 7 rating scale, like strongly disagree to strongly agree, well, when you have a 1 to 7 what you do is you take your value and you subtract it from eight, one more, and that will create a reverse variable.
>
> **[4:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=265)** So, this will create my new reversed score on Y, and then I'm going to use select to tell it that I want to see the values for X and then y_r, and then Z.
>
> **[4:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=278)** So I'm actually replacing Y with y_r.
>
> **[4:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=282)** Y is still in the dataset, I'm just not going to see it at this particular moment, and then I'm going to tell it to go ahead and calculate the means, except this time using y_r as we go through, and here you see we have the reversed values, and now, in fact, they're identical to X, and it's able to go ahead and calculate the means.
>
> **[5:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=304)** This can be an extremely useful approach, a very common one in this social science research that I do, and the people I've collaborated with.
>
> **[5:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=313)** Just as a few notes, if you're using a 1 to 5, or a 1 to 7, or 1 to 10 scale, you start with one more than your high number and you subtract your value.
>
> **[5:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=323)** So, if it's a 1 to 7 use 8 - X.
>
> **[5:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=325)** If it's a 1 to 10, use 11 - X.
>
> **[5:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=328)** For a 0 to 5 scale, or a 0 to 10, or whatever, simply take the high value and subtract it.
>
> **[5:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=335)** So, for 0 to 5 to 5 - X, for 0 to 10, do 10 - X, and if you're using a scale that goes from negative to positive, all you need to do is multiply it times negative one to reverse it.
>
> **[5:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-new-variables?u=76281980&t=348)** Now, if you're going to do a lot of this, and if you're doing psychometrics work, then there is a package called Psych, which can make this this whole process much easier, much faster and give you a lot of additional insight into what's going on, say for instance, with your scale scores, and if you open this up, it'll get you that link in your browser, and then you can see what you can do extra with Psych as a way of getting the aggregate value out of your data, and so any one of these approaches should be a great start on you finding the meaning as you go across your data to help you in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4), rm (2)
> **Code Identifiers:** rowmeans (2), mean_xy (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Computing frequencies](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=1)** - [Instructor] The simplest analysis you can do is simply counting how often things happen in your dataset, and strangely, that can be really informative, and is the basis for a lot of very sophisticated approaches, but let's start with just getting the simple frequencies.
>
> **[0:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=16)** How common is each score or category in your dataset?
>
> **[0:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=21)** We'll do this by opening the script 05_01_frequencies.r.
>
> **[0:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=26)** And then the first step is to load the tidy first, 'cause we're going to rely on some of its functions.
>
> **[0:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=31)** And then we're going to load our dataset.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=32)** We're going to read the CSV of state trends.
>
> **[0:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=35)** We're going to select a few variables.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=38)** We're going to mutate or change several of them to be factors.
>
> **[0:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=43)** That's going to be important in a minute, using the as.factor command.
>
> **[0:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=47)** And then we will print it and also save it to the environment.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=51)** So we've saved it to the environment.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=53)** And we also see the three variables that we've got right here.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=57)** And so we can start looking at the frequencies.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=59)** How often do each one of these things occur?
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=64)** Now if we come right here and we hit summary(df), so that's a built-in command summary of the data frame.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=71)** Well, it actually works really nicely if you have factors.
>
> **[1:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=76)** It tells us now region was not a factor, and it just simply tells us there were 48 scores.
>
> **[1:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=81)** But these other ones, which were defined as factors, it works wonderfully.
>
> **[1:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=86)** But let's come down here and let's try a few other options for a categorical variable.
>
> **[1:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=91)** Let's do different just region using select and summary.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=96)** And again, all it does is it tells us is that we're 48 observations in there.
>
> **[1:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=100)** That's not very useful.
>
> **[1:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=101)** Table, so you select the region.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=104)** Instead of using summary, you use table.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=107)** We can do that one, and look, it sets it out in a really clean, easy way, 12 missed Western states, nine in the northeast, 16 in the south, 11 in the west.
>
> **[1:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=119)** Now we can also go to psych region, which is a factor, and we can use the summary here.
>
> **[2:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=125)** And when we do that, you see it lays it out differently, it organizes it vertically, and then it's got the colon and then the values here.
>
> **[2:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=132)** You can use either one of these, whatever works better.
>
> **[2:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=136)** And then we can also try it with table instead of summary.
>
> **[2:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=140)** Now I think this one is a little harder to read.
>
> **[2:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=143)** I wouldn't want to do it.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=144)** We can convert region to a factor and then we can see what that looks like.
>
> **[2:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=151)** Now looking at the data itself, it doesn't look very different.
>
> **[2:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=154)** You got the region over here, but now we can summarize all of the factors in the data frame all at once, summary, and then df.
>
> **[2:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-frequencies-25384059?u=76281980&t=164)** And look, it's a beautiful, concise summary of what's in there, and it's a great way to get started in terms of understanding your data and guiding you in further analysis for insight.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), defined as (1)
> **UI Navigation:** select the (1), go to (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### [Computing descriptives](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=0)** - [Instructor] For your quantitative variables, you're going to want to start with basic descriptive [[Statistics]].
>
> **[0:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=5)** That includes things like the mean, the standard deviation, and maybe the quartiles.
>
> **[0:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=9)** These, of course, are easy to do in R, which is a language designed for working with data.
>
> **[0:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=15)** I'm going to load a few packages, and then I'm going to load a data set, and I am taking several of the variables, region, psych_region, psy_reg, and then several of the sports variables at the end, and I'm going to convert them all to factors.
>
> **[0:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=29)** I'll save that as df and then print it here in the bottom.
>
> **[0:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=32)** So, here you can see that we have our data set.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=36)** It's giving us the first 10 lines.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=39)** All right, and so that looks good.
>
> **[0:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=42)** Now what we're going to do is we're just going to do summary.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=44)** Now, I did this for frequencies also, and the nice thing is it's actually a general purpose when you include quantitative or numerical variables as well.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=51)** Here I'm using a pipe to send DF into summary.
>
> **[0:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=54)** I could also do summary and then in parentheses, df.
>
> **[0:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=57)** It accomplishes the same thing.
>
> **[1:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=60)** But let's come up and see what we have here.
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=62)** Now we've got a lot of variables.
>
> **[1:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=64)** Our first one, state, is a character variable.
>
> **[1:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=66)** So it just tells us that there are 48 observations.
>
> **[1:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=69)** That's what the length means.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=71)** And the same thing for state code.
>
> **[1:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=73)** But for population, which is a numerical variable, it gives us actual numbers: the minimum, the first quartile, and the median, the mean, that's the average, and the third quartile and the maximum.
>
> **[1:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=84)** It gives us that for every one of the numerical variables.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=88)** And for the factors like region and psy_region and psy_reg, it gives us how many cases there are for each of those.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=96)** We scroll through the [[Google]] trends data, and we get those same summaries, the quartiles, and minimum/maximum, the mean.
>
> **[1:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=106)** And then we have a series of yes no questions at the end, that because I coded them as factors, it simply tells us how many yeses and nos there are.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=114)** So this actually is a great way to get a first look at the dataset.
>
> **[1:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=117)** If you want to look at just one variable, then all you need to do here is select that one variable and ask for summary.
>
> **[2:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=126)** And here we have the same thing, minimum, first quartile, median, mean, third quartile, and maximum.
>
> **[2:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=133)** And that's a good starting point for your descriptives.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=138)** Now, if you're familiar with box plots, you know that you can also get this five-number summary.
>
> **[2:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=143)** It was developed by [[John the Ripper|John]] Tukey, and we have a built-in function called fivenum, which is what he called the minimum, the lower hinge, median, upper hinge, and maximum, where the lower hinge and the upper hinge are usually identical to the first and third quartiles.
>
> **[2:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=160)** The trick is it doesn't label them.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=161)** So let's pick our one variable here.
>
> **[2:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=164)** And we see we just have these numbers.
>
> **[2:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=166)** That's the minimum, that's the maximum, and these are the quartiles in between.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=171)** It makes a little more sense if you make a box plot first.
>
> **[2:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=174)** So let's do that.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=182)** And then we can ask for boxplot.stats for the same thing.
>
> **[3:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=185)** And that's going to give us the summary numbers here that are used in creating the box plot.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=191)** The important thing here is that these numbers right here correspond to, that's the 41, that's the minimum.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=198)** This is the 53, it's the first quartile score.
>
> **[3:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=201)** That's the 55, the median.
>
> **[3:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=204)** This is the third quartile score, 62.
>
> **[3:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=206)** And then this is the maximum, which is 73.
>
> **[3:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=210)** We also have the number of observations.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=211)** There's 48 altogether, and then we have the confidence intervals that correspond to the notches for the median.
>
> **[3:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=217)** So it goes down to about 53 and up to about 57.
>
> **[3:42](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=222)** And it turns out that there are no outliers in the data.
>
> **[3:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=225)** So it doesn't have anything that it needs to report right here.
>
> **[3:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=228)** But that's a quick and easy way of describing your numerical variables.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=231)** If you want additional options, or if you want more control over what's going on, you can try using the psych package.
>
> **[3:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-descriptives?u=76281980&t=239)** Again, it's a free package that you can download and install which gives a huge additional range of descriptive statistics, and many other ways that you can look at your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Google]] (1), [[John the Ripper|John]] (1)
> **Code Identifiers:** psy_reg (2), psych_region (1), psy_region (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Computing correlations](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=0)** - [Instructor] Some of the most exciting work in looking at data comes in finding associations, these patterns, differences between groups or ways that one variable can be used to predict another.
>
> **[0:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=11)** That starts to give you some really actionable insights.
>
> **[0:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=14)** And probably one of the easiest ways to do this is with the correlation coefficient.
>
> **[0:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=19)** Now I'm going to show you some basic correlations using the quantitative variables in our dataset.
>
> **[0:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=27)** So I'm taking some of the [[Google]] Trends data, and that is again, the state by state relative popularity of some search terms.
>
> **[0:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=35)** And I'm using several that all have to do with data.
>
> **[0:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=39)** Specifically, I'm using [[Data Science]], [[Artificial Intelligence (AI)|artificial intelligence]], machine learning, data analysis, [[Business Intelligence (BI)|business intelligence]], spreadsheet, and [[Statistics]].
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=48)** And what I'm going to do right here is I'm using the select command which normally I use to just choose the variables.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=55)** But select is really handy because it does a couple of other things.
>
> **[0:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=58)** One is it lets you reorder the variables.
>
> **[1:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=61)** Now I'm keeping them in the order that they came in, but if you put the variables in in a different order and select, it will simply create 'em in that order.
>
> **[1:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=69)** But even more, it allows you to rename them.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=71)** And I'm doing that because we're going to be making some matrices and really long names like artificial intelligence get hard to read.
>
> **[1:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=80)** And so by going to the abbreviated versions, a lot of which are very familiar, DS for data science, AI for artificial intelligence, and so on.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=89)** I'm using SS for spreadsheet and stats for statistics.
>
> **[1:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=92)** But when we do that, you'll see that it makes for a very compact, concise data set and even more important, when we do some graphics or plots.
>
> **[1:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=105)** So let's start off by making a scatter plot matrix.
>
> **[1:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=108)** Let's take the data frame I just created and we'll just give it to the generic plot command.
>
> **[1:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=113)** And because I have all quantitative variables, it knows to make a scatter plot matrix.
>
> **[1:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=117)** So let's run that one and [[Zoom]] in on it.
>
> **[2:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=122)** And so what we have here is a scatter plot matrix and we have the name of each variable going down the diagonal from top left to bottom right.
>
> **[2:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=131)** And this first column is data science as a search term going across the bottom, and the first row is data science as the search term going up the vertical Y axis.
>
> **[2:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=142)** And these plots show us the combination of scores.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=147)** So for instance, there's a couple of things that we can see.
>
> **[2:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=150)** Number one is data science, artificial intelligence and machine learning, and in fact, even data analysis have very strong linear trends.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=161)** It's almost a perfect diagonal as you go up.
>
> **[2:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=164)** And what that means is states that search a lot for one of these things, relatively speaking, search a lot for all of them.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=171)** And they seem to occupy the same behavioral or cognitive elements.
>
> **[2:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=176)** So data science, AI, ML, machine learning and data analysis, very similar to each other.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=182)** Business intelligence works a little bit differently.
>
> **[3:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=184)** You see things spreading out here and the patterns are not so clear and spreadsheet operates almost completely independently.
>
> **[3:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=192)** On the other hand, there appears to be some relationship between business intelligence and spreadsheet.
>
> **[3:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=198)** And then stats or statistics can mean a lot of different things 'cause remember, as a general search term, it doesn't mean that they're wanting to know about [[Statistical Analysis]].
>
> **[3:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=205)** They might be looking for statistics about their favorite sports team.
>
> **[3:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=209)** And so it can be a very different kind of search.
>
> **[3:31](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=211)** And the scatter plots here give us an indication of that.
>
> **[3:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=215)** But let's go back to our commands here and let's get a correlation matrix.
>
> **[3:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=220)** Let's get numbers that index the strength of the linear relationship in each of those squares.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=226)** So I'm going to do that by taking our data frame and feeding it into the cor for correlation command.
>
> **[3:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=232)** And when I do that, because I gave things a short name, it all fits down here very nicely.
>
> **[3:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=238)** These are correlations, but it's going to be even easier to read if we round it off to two decimal places.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=244)** So I do the same command or I take our data frame, I feed it into cor, and then I use round two to two decimal places.
>
> **[4:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=252)** And when we do that, we can see the actual numbers that go with each of these.
>
> **[4:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=256)** So down the diagonal, we have the ones thats each variable correlated with itself.
>
> **[4:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=261)** But you can see here, for instance, AI and DS, so thats artificial intelligence and data science have a correlation of 0.91 with each other.
>
> **[4:30](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=270)** Data science and machine learning have a correlation of 0.7.
>
> **[4:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=272)** That's nearly a perfect correlation.
>
> **[4:35](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=275)** A positive one would be perfect.
>
> **[4:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=277)** These are very, very strong.
>
> **[4:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=279)** On the other hand, you can see that the association between statistics and business intelligence, well that's just a 0.31.
>
> **[4:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=288)** By the way, this is symmetrical so this is the same 0.31 right here.
>
> **[4:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=292)** That is a much weaker relationship.
>
> **[4:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=295)** It might still be enough to do something useful with but it's almost nothing compared to these identity relationships between data science, artificial intelligence and machine learning.
>
> **[5:06](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=306)** But let's take a look at something else we can do and that is if you want to look closer at a single correlation, you can use the cor.test function.
>
> **[5:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=314)** You have to specify just the two variables.
>
> **[5:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=316)** And here, I'm going to say take the variable DS from our data frame and take the variable DA, data analysis from our data frame and let's look at just those two.
>
> **[5:26](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=326)** It's going to give us the correlation coefficient hypothesis test result with a P value and a confidence interval.
>
> **[5:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=333)** And I'll open this up a little bit.
>
> **[5:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=336)** So it's doing the standard Pearson's product-moment correlation coefficient, and we have a T-test here that gives us a P value that's very, very small, which says that the true correlation is not equal to zero.
>
> **[5:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=348)** So we're rejecting the null hypothesis, and in fact, we get a confidence interval that says the 95% confidence interval, it ranges from 0.80 to 0.93, so it's very far from zero.
>
> **[6:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=360)** It's a strong positive correlation and it's all the more interesting considering it's based on only 48 data points.
>
> **[6:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=367)** And then finally, we have the actual correlation coefficient itself which is 0.88.
>
> **[6:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=372)** Again, a strong positive association.
>
> **[6:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=375)** Now there's obviously a lot more you can do with correlations.
>
> **[6:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=379)** One thing that you probably would want to do is get a correlation matrix with the [[Probability]] values for every correlation in that matrix.
>
> **[6:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=388)** The standard core function in R doesn't do that but there are packages you can download such as Hmisc, or Rstatics that are able to do those along with additional functions for analyzing correlations.
>
> **[6:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=405)** If you're interested, take a look at each one of them.
>
> **[6:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-correlations?u=76281980&t=407)** You'll find a wide range of additional functionality and power to get insight into the relationships in your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (9), [[Artificial Intelligence (AI)|Artificial intelligence]] (6), [[Statistics]] (5), [[Business Intelligence (BI)|Business intelligence]] (4), [[Google]] (1)
> **Versions:** 0.31 (2), 0.91 (1), 0.7 (1), 0.80 (1), 0.93 (1)
> **Analogies:** for instance (2), similar to (1), such as (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Computing a linear regression](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=1)** - [Instructor] When working with data, one of the most interesting things you can do is start building models, that is statistical models, where you're trying to use a group of variables to predict a particular outcome.
>
> **[0:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=12)** And the simplest and most flexible and often the most powerful way of doing this is with [[Linear Regression]], and this is a very simple thing to do in R.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=23)** Let's start by loading a couple of packages, and then let's read our dataset.
>
> **[0:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=28)** Now what I'm going to do here is I'm going to pick the personality variables on a state-by-state basis, and all of the [[Google]] Trends variables.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=38)** And when I do that, you can see that they've all loaded here, we've got a pretty big dataset, it's got 20 variables at the moment.
>
> **[0:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=48)** Let's make a scatter plot of a subset of this.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=51)** Let's take just the search term [[Data Science]], so how much that term pops up relatively speaking from state to state, along with the five personality variables on a state-by-state basis.
>
> **[1:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=63)** So data science and extroversion through openness, and let's make a scatter plot of those.
>
> **[1:12](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=72)** When we [[Zoom]] in on that, here's our term "data science," which in this first column is going to cross the bottom on the X-axis, and on the top row is going up the side on the Y-axis.
>
> **[1:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=83)** I'm interested in whether any of these personality variables can predict the relative interest in data science and I see a lot of not really strong patterns, but there is an interesting one here at the end.
>
> **[1:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=96)** This is with openness on the X-axis across the bottom and data science up the side on the Y-axis.
>
> **[1:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=103)** And so, there might be something that we can look at more closely here.
>
> **[1:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=107)** So what I'm going to do is I'm going to make another scatter plot, but this time with just openness and data science.
>
> **[1:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=115)** And it looks like there's a pattern here that it starts in the bottom left and it goes to the upper right.
>
> **[2:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=120)** Now, there is an issue here of what's called heteroscedasticity, where things fan out as it goes out, but in any case, we can tell that the really high values for data science are associated with states that have relatively higher levels of openness.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=138)** One of the nice things in a scatter plot is to add a regression line, or a straight line that can be used to predict the association between them.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=145)** What you do in R is you first create the scatter plot and then you add the line.
>
> **[2:32](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=152)** We use the LM, which is for linear model function, and I'm going to tell it that data science as predicted by openness.
>
> **[2:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=160)** Now please note, this is the opposite of the order of when we made the plot.
>
> **[2:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=165)** The plot does the X first and the Y second, but when you're making a regression, you do Y as predicted by X, so you have to flip them around and the tilde means as predicted by, and then we use AB line, which has to do with the coefficient for the regression line, so we simply run that command, and you can see there is a positive or uphill relationship between these two variables, openness and data science.
>
> **[3:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=191)** Now if you want to actually get a numerical description of that association, then you can do the linear regression, and I take that same command, LM and then data science and then tilde, meaning as a function of openness.
>
> **[3:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=203)** And I'm going to save it to an object called Fit1.
>
> **[3:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=207)** By the way, if you've worked much with R, you'll notice it's very common to take models like regression models and save them as fit, because you are fitting a model to the data.
>
> **[3:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=219)** So let's make one that we're going to call Fit1 and it's called Fit1 because I have more than one that I'm going to do.
>
> **[3:46](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=226)** And then let's show the model.
>
> **[3:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=228)** Now, when you show the model, it's a very basic thing.
>
> **[3:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=231)** It shows you the command and it gives you the intercept and the slope of any variables you included.
>
> **[3:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=237)** I only have two variables, the outcome and the predictor, so the intercept is -8, that's where this line would cross, and the slope is 0.8.
>
> **[4:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=251)** So for each step it goes up in openness, it goes up 8/10 of a step on data science.
>
> **[4:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=257)** So that's good.
>
> **[4:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=259)** If you want more information, we can simply ask for a summary.
>
> **[4:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=262)** So summary of Fit1, and I'll make this a little bigger here, it gives us the residuals, which are an important way of diagnosing what's going on with the model, and you'll be able to tell that things will be come much more spread out as the values go up.
>
> **[4:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=278)** We also get the coefficients, there's the intercept and there's the slope, along with the standard error, a T-test for each of them, and a [[Probability]].
>
> **[4:47](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=287)** And so the slope is functionally equivalent to, excuse me, and so the intercept is functionally equivalent to zero, but the slope is highly significant, very different from zero.
>
> **[4:56](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=296)** And then we also have some information about the standard error, the multiple R squared, which is about .3 in this situation, we adjusted R squared, we have a small dataset, only 48 observations, so not surprising that there's this big difference, as well as additional information about the significance of the overall model.
>
> **[5:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=314)** That would be more important if we had many variables in the predictor.
>
> **[5:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=324)** Now we can also get confidence intervals, so we use our model that we created, Fit1, but we run the conf int command on that, and when we do that, we get the 95% confidence intervals, the lower bound and the upper bound, for both the intercept and for the slope.
>
> **[5:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=341)** You can also predict values for individual cases, and if you have more than 48, this is going to be an awful lot, so you may want to do that one graphically instead.
>
> **[5:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=351)** And you can get prediction intervals for the values.
>
> **[5:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=355)** And again, we only have 48 observations, so it's possible to scroll through the whole thing, but you have the predicted value along with the lower and upper confidence bounds for that particular prediction.
>
> **[6:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=369)** And then in terms of regression diagnostics, you can run LM.influence, where you get a lot of information about the residuals and other information having to do, you can see it's a lot of output, the predicted values, and then influence.measures.
>
> **[6:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=389)** And I'll just open this one up so we can see that one a little more.
>
> **[6:33](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=393)** Again, a lot of different measures you can look at, and depending on the kind of model you're building, you may want to invest some time looking into what these individual measures mean, and how they influence the interpretation of your model.
>
> **[6:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=404)** But let's move onto multiple regression, which is the more common thing, where you have more than one predictor.
>
> **[6:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=410)** Here I'm going to create a new dataset, I'm going to redo DF, our data frame, where I do data science and then I do the five predictor variables, that is, the five personality variables.
>
> **[7:03](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=423)** So, here's the first bit of our dataset.
>
> **[7:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=429)** It's important to point out a lot of this is easier if you have your outcome variable, the thing you're trying to predict at the very front, that's your Y variable, and then everything that comes after that are the predictor variables.
>
> **[7:20](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=440)** So that can be the capital X, it's a matrix of variables.
>
> **[7:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=443)** And that makes it a lot easier to specify things in R.
>
> **[7:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=445)** So here what I'm doing is I am going to not just select the variables, but I'm going to put them in order, so data science first and then the personality variables.
>
> **[7:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=460)** By the way, another way to do this is you can also do select and then you can have your outcome variable, and then if you want to keep everything else in order, you just use everything open and closed parentheses.
>
> **[7:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=474)** Now let's come down to specifying a model.
>
> **[7:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=475)** There are three different ways that we can do this.
>
> **[7:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=477)** The easiest by far is to just run the command LM, and as long as you have your predictor variable listed first, all of your outcomes after that, and nothing else in the dataset, just runs really easily.
>
> **[8:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=489)** And here we have a multiple regression and we have the slopes associated with each one of these predictor variables.
>
> **[8:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=498)** Another way to do this is to specifically label what the outcome is.
>
> **[8:21](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=501)** Here I'm going to say data science, and then use the tilde as predicted by, dot means everything else, and then I tell it that the dataset is DF, that's the data frame that I've saved in memory.
>
> **[8:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=514)** We do that, we'll get the exact same output, and then if you want to write a lot, you can put out every single thing, data science, tilde as predicted by extroversion plus agreeableness, plus conscientiousness, plus neuroticism, plus openness, and then it all comes from the data frame, right?
>
> **[8:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=531)** Then it all comes from the dataset DF.
>
> **[8:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=534)** We run that, you'll see we get again the exact same output, and you can save the model, here I'm saving it to Fit2, then we can look at the model by simply calling the name, and then here we have the coefficients again, but the summarized regression model's going to be the thing that's probably most interesting to people, and let's zoom in on that one.
>
> **[9:13](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=553)** And here we have the residuals and we also have the coefficients, their standard errors, their T-tests, and the probability values along with the asterisks.
>
> **[9:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=563)** And so we see from this one that conscientiousness is statistically significantly correlated within the context of this multiple regression, with the relative popularity of data science as a search term, but it's negative.
>
> **[9:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=577)** The higher a state is in conscientiousness, the less interested in data science.
>
> **[9:40](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=580)** Again, this is a multiple correlation, so if we would look at them individually, we might get different things, but within the context of these five predictors, it's got a negative coefficient, and then openness has a highly significant positive association, the more open a state is, based on the one research project, the more likely they are to search for data science as a term.
>
> **[10:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=602)** And we have a multiple R squared of .46, so about 46% of the variance in data science is explained by the model, but we have a small sample size, so it's important to let the adjusted R squared, so it's about 40% total.
>
> **[10:16](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-a-linear-regression?u=76281980&t=616)** Anyhow, we could give several entire courses on conducting linear regression in general and even just in R, but this is a great way to get started in building models to try to better understand and even predict what is happening to the things of interest in your dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (19), [[Linear Regression]] (3), [[Zoom]] (2), [[Probability]] (2), [[Google]] (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** make (5)
> **Versions:** 0.8 (1)
> **Speakers:** - [instructor] (1)

#### [Computing contingency tables](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=0)** - [Instructor] The final procedure for analyzing data that I want to show to you is contingency tables, where you're dealing with two nominal or categorical variables.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=10)** And in the marketing world, this is extremely common, and fortunately, it's easy to do in R.
>
> **[0:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=17)** So, let's come and load our two libraries, and let's come down to our data set.
>
> **[0:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=22)** Now, I'm going to convert all the variables that I leave as factors, on the other hand, I'm only saving two, I'm saving region, that's the geographical variable, and then also psy_reg, which is the psychological region.
>
> **[0:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=34)** I'm saving just the two of those.
>
> **[0:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=36)** And then I'm using this command to change everything, all both of my variables, to factors.
>
> **[0:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=41)** And we'll take a quick look at it.
>
> **[0:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=44)** So, let's come right here.
>
> **[0:45](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=45)** And we have region and psy_reg, we have south, friendly, west, creative, and so on.
>
> **[0:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=50)** Great.
>
> **[0:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=53)** Now let's make a contingency table.
>
> **[0:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=55)** All you need to do is use the Table command and tell it the two variables that you want.
>
> **[0:59](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=59)** I tell it's in the data frame and I want the variable called region and in our data frame, df and psy_reg.
>
> **[1:07](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=67)** And we're going to save it to ct for contingency table.
>
> **[1:11](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=71)** And as you can see here, we have a table that has shown up.
>
> **[1:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=74)** And let's take a quick look at it by just calling the name of it.
>
> **[1:17](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=77)** And there it is arranged in rows and columns.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=79)** So, we can see, for instance, that we have 10 states that are in the South that are friendly, we have one in the Midwest that is uninhibited, and so on.
>
> **[1:28](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=88)** Now, you can also get the cell row and column percentages and we can do rounding to get two decimal places, multiply them times a hundred to make it like a percentage.
>
> **[1:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=98)** So, I'm going to take the contingency table and I'm going to ask for a prop.table.
>
> **[1:43](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=103)** That's how we get the proportions of the cases in a particular part of the table.
>
> **[1:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=108)** And one means I want row percentages.
>
> **[1:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=111)** Then I'm going to round those to two decimal places and multiply it times a hundred.
>
> **[1:55](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=115)** So here we see that the row percentages, so this is going across, so 62% of the southern states are friendly, 12% are creative, and 25% are uninhibited.
>
> **[2:09](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=129)** In the Midwest, 92% are friendly, 0% go into the creative category, and 8% go into the uninhibited category.
>
> **[2:18](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=138)** If you want column percentages that sum up to a hundred going vertically, you just need to change this argument to 2.
>
> **[2:25](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=145)** So that gives us column percentages.
>
> **[2:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=147)** And here you can see that the creative, 20% are in the South, 80% in the West, and none in the Northeast or the Midwest.
>
> **[2:36](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=156)** And then total percentages, you just leave out the argument, you don't say anything there.
>
> **[2:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=161)** And you can see that of the 48 states in our data set, 23% of them are Midwest and friendly.
>
> **[2:49](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=169)** You can also do an inferential test.
>
> **[2:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=171)** In this case, we're going to do a chi-square test.
>
> **[2:53](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=173)** And I have to start by saying, doing a 4 by 3 chi-square test with only 48 observations and with a lot of empty cells is statistically irresponsible.
>
> **[3:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=182)** You would need much better coverage to make this work properly, but the command will still function and you can adapt it to situations where your data better match the assumptions of the chi-square test.
>
> **[3:14](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=194)** So, with that caveat in mind, all we need to do is do chi-square or chisq.test, and we apply that to the table.
>
> **[3:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=204)** And I'm going to feed that into a new object called tchi, T-C-H-I.
>
> **[3:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=209)** And when we call that one, it tells us that our value of chi-squared is 50.002 with 6 degrees of freedom.
>
> **[3:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=218)** And the p-value that is very, very small.
>
> **[3:41](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=221)** And if you want to do this in one step, you can simply say table of this variable and that variable and feed that into chi-square test.
>
> **[3:50](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=230)** And see, we get the same information as well as our thing that the approximation may be incorrect, because we have not enough data going into this.
>
> **[3:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=238)** You can also get additional tables that are used for diagnosing the table, help you with the interpretation.
>
> **[4:04](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=244)** So for instance, you have the observed values, that's our original data.
>
> **[4:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=248)** You have the expected values, because remember, chi-squared looks at the difference between the expected and the observed values.
>
> **[4:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=255)** You have the residuals, which is the difference between the observed and the expected, and then you also have standardized residuals.
>
> **[4:22](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=262)** Any one of those could give you a little additional insight into how your data are functioning.
>
> **[4:27](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=267)** And so, that's going to be our final method for numerically analyzing the data in this short course on R.
>
> **[4:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/computing-contingency-tables?u=76281980&t=274)** I hope that it's been enough to really whet your appetite to get you excited and interested in learning more about how you can use the free, open-source programming language, R, to get more insight and actionable insights out of your data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Identifiers:** psy_reg (3)
> **Analogies:** for instance (2)
> **Versions:** 50.002 (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=0)** - [Barton] So we've come all the way through this introductory course on learning R.
>
> **[0:05](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=5)** I like to think it's like your suitcase is now packed and you're ready to go on an adventure.
>
> **[0:10](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=10)** So where should you go next?
>
> **[0:15](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=15)** A few possibilities that might be especially useful for you are to explore the other courses that we have available on the principles of data.
>
> **[0:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=23)** So [[Data Science]], data analytics, [[Statistical Analysis]], any one of those to give you the concepts that you'll be using when you work with a tool like R.
>
> **[0:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=34)** Second one is, in case you're not familiar with it, spreadsheets are an extremely important tool.
>
> **[0:38](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=38)** And I suggest that anybody who works with data in any capacity should be able to work comfortably and fluently with spreadsheets, [[Microsoft Excel]], [[Google]] Sheets, or some other choice that's used in your organization.
>
> **[0:51](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=51)** Also, it would make sense to take a look at other data science programming languages like [[Python (Programming Language)|Python]], being the number one choice, but maybe Julia, maybe Sass, maybe [[Stata]].
>
> **[1:02](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=62)** There are other choices, and depending on the field that you're going into, some of these are going to be more popular than others.
>
> **[1:08](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=68)** But I always recommend that you try other languages, try other applications, see how they approach data, and see what's going to fit into the workflow best to answer the questions that you have.
>
> **[1:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=79)** And then finally, basically, business strategy.
>
> **[1:23](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=83)** The point of data science and the point of working with data is to answer questions to accomplish things.
>
> **[1:29](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=89)** And in an organizational setting, you're trying to get some sort of direction on what you should do next.
>
> **[1:34](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=94)** It's good to understand how your business, your organization, the unit that you work in works and how your analyses are going to fit into the things that they're doing.
>
> **[1:44](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=104)** And so I strongly recommend getting that contextual information as well.
>
> **[1:48](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=108)** And we have a range of courses on that also.
>
> **[1:52](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=112)** You also should start connecting with people.
>
> **[1:54](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=114)** In your area, you may have an R users group.
>
> **[1:57](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=117)** We have two of them where I live.
>
> **[1:58](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=118)** And I go to them. They're wonderful.
>
> **[2:01](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=121)** And Meetup groups, both on R and on data science and on data in general, any one of them can get you a new perspective, get you connected with other people, and give you some of the possibilities of things that you can do with data and the kinds of questions that you can answer.
>
> **[2:19](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=139)** But more than anything, really, just get out there and see what you can do.
>
> **[2:24](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=144)** Get some data on a topic that's important to you and start exploring to see how you can use R to get some insight into that and to make your work both more exciting and more engaging.
>
> **[2:37](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=157)** And so that's the end of "Learning R."
>
> **[2:39](https://www.linkedin.com/learning/r-for-data-science-analysis-and-visualization/next-steps?u=76281980&t=159)** Thank you so much for joining me, and best of luck in your own data work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (4), [[Statistical Analysis]] (1), [[Microsoft Excel]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **UI Navigation:** go to (1)
> **Analogies:** it's like (1)
> **Speakers:** - [barton] (1)


## Instructor

- [[Barton Poulson]]

## Resources

- Exercise files available

## Skills Covered

- R (Programming Language)
- Data Analysis
- Data Visualization

## Path Context

### In [[Moving from Data Scientist to Data Analyst]]
← [[SQL for Data Analysis]] | **2 of 10** | [[Python for Data Analysis- Solve Real-World Challenges]] →

### In [[Getting Started with R for Data Science]]
← [[Data Wrangling in R]] | **3 of 4** | [[R Code Challenges- Data Science]] →

### In [[Advance Your Skills in R]]
← [[Complete Your First Project in R]] | **3 of 8** | [[R Code Challenges- Data Science]] →

## Appears In

- [[Moving from Data Scientist to Data Analyst]]
- [[Getting Started with R for Data Science]]
- [[Advance Your Skills in R]]

## Related Courses

_Courses sharing skills:_

- [[Build Advanced Charts in R]] — Data Visualization, R (Programming Language)
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Data Analysis, Data Visualization
- [[Creating Interactive Tableau Dashboards]] — Data Analysis, Data Visualization
- [[Complete Guide To R Wrangling Visualizing And Modeling Data]] — Data Visualization, R (Programming Language)
- [[Python in Excel for Financial Professionals]] — Data Analysis, Data Visualization

---

[↑ Back to top](#)