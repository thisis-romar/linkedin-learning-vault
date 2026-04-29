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
created: 2026-04-29
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
  - Getting started in the R tidyverse
  - How to use the exercise files
- [**1. Tidyverse Fundamentals**](#1-tidyverse-fundamentals) (12 videos)
  - What is the tidyverse?
  - Installing, loading, and working with the tidyverse packages
  - Introducing data.frame and tibbles
  - What are %>% and |> for in the tidyverse
  - Using the %>% pipe in your code
  - Using the |> pipe in your code
  - Datasets built into the tidyverse packages
  - Using the select() function to obtain columns from data
  - Using the filter() function to filter data by conditions
  - Using the mutate() function to modify and add columns
  - Challenge: Rewrite this code to use the pipe of your choice
  - Solution: Rewrite this code to use the pipe of your choice
- [**2. Tidy Data: The Fundamental Idea behind the Tidyverse**](#2-tidy-data-the-fundamental-idea-behind-the-tidyverse) (6 videos)
  - What is tidy data?
  - Why does ggplot2 want tidy data?
  - Using pivot_longer() to tidy data into a long format
  - Cleaning column names with the janitor package
  - Tidying columns containing multiple values with separate_*()
  - List columns and nested tibbles
- [**3. Reading Data In and Out of the Tidyverse**](#3-reading-data-in-and-out-of-the-tidyverse) (4 videos)
  - Using projects to simplify file paths
  - Using read_csv() to read CSV files
  - Using read_excel() to read data from Excel files
  - Using haven to import from SPSS and other formats
- [**4. Grouping and Summarizing Data with the Tidyverse**](#4-grouping-and-summarizing-data-with-the-tidyverse) (10 videos)
  - Grouping and summarizing data by column or row
  - Cross tabulations with count()
  - Column-wise groups: group_by() and mutate()
  - Column-wise groups: group_by() and summarize()
  - Column-wise groups: group_by() and reframe()
  - Column-wise groups: Using the .by argument instead of group_by()
  - Row-wise groups: rowwise() and c_across()
  - Remember to ungroup()
  - Challenge: Find maximum penguin dimension by island
  - Solution: Find maximum penguin dimension by island
- [**5. Important Packages and Functions in the Tidyverse**](#5-important-packages-and-functions-in-the-tidyverse) (5 videos)
  - ggplot2 for beautiful data storytelling
  - stringr for friendly string manipulation
  - lubridate for manipulating dates and times
  - forcats for manipulating factors
  - purrr for doing many things like iteration
- [**6. Working Smart with the Tidyverse**](#6-working-smart-with-the-tidyverse) (8 videos)
  - Handling NAs in the tidyverse with drop_na() and replace_na()
  - Use case_when() instead of nested if or ifelse()
  - Use tidy-select functions to work with many columns at once
  - Using across() in mutate() to modify multiple columns at once
  - Filtering many columns at once with if_any() and if_all()
  - Understanding how the tidyverse evolves and deprecates
  - Challenge: Find all love songs remaining below position 80 in the top 10
  - Solution: Find all love songs remaining below position 80 in the top 10
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Getting started in the R tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=0)** - [Charlie] The Tidyverse is an incredibly powerful and flexible ecosystem of over 30 packages, designed to work together as a toolkit for every part of the data analysis workflow.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=12)** In this course, I'm going to start by introducing everything you need to know about tidy data and I'll also introduce you to the nine core Tidyverse packages you need to get going.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=25)** I'll then introduce specialized packages for working with strings, factors, and dates, as well as advanced Tidyverse topics, including nesting, targeting many columns with across and pivoting between column-wise and row-wise operations on your data.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=43)** Hello, I'm Charlie, this course will give you everything you need to thrive with the Tidyverse, to feel confident and prepared for working with your real world data sets.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/getting-started-in-the-r-tidyverse?u=76281980&t=54)** Let's get started!

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [charlie] (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] All of the exercise files and everything you need to follow along with this course are available in this GitHub repository.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=7)** You do not need a GitHub account or any experience with Git or GitHub to use these materials effectively.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=16)** If you go to the link that we'll provide you to the repository, you'll see this green Code button.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=21)** I want you to click on that and I want you to select Download ZIP That's going to download the entire repository as a ZIP to your Downloads folder.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=32)** Let's go and look in our Downloads folder.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=36)** Here we have our ZIP.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=37)** Let's unzip our ZIP.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=39)** And within that folder, we can see many folders.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=43)** There's a folder for every video that contains code.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=47)** Let's say that you're watching video 02_04, and you want to see the code that I start with at the beginning of the video.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=56)** You need to go to the folder 02_04b, and you want to open the R Studio project file.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=63)** That's the file with the extension .Rproj.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=66)** So if we double click on that file, that's going to open up R Studio, and we're in the project, and you can follow along with the video.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=75)** In the course, I also explain what R Studio project files are for a little bit.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=81)** Now, you'll also have noticed that there is a folder 02_04e.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=86)** Let's look at that.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=89)** The E folder represents the code at the end of the video, so if you weren't able to follow along typing with me during the video, then you can get the end state of the code in the E folder.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=102)** The B folder is the code as it starts when I first share my screen showing code.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=108)** That's everything you need to know.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=111)** I hope you enjoy the course and using the exercise files.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/how-to-use-the-exercise-files?u=76281980&t=114)** Thanks.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2), open the (1)
> **Code Keywords:** let (4)
> **Env Vars:** zip (4)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), download the (1)
> **CLI Commands:** git (1), unzip (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Tidyverse Fundamentals

> [↑ Back to Table of Contents](#table-of-contents)

#### What is the tidyverse?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=0)** - [Instructor] The tidyverse is a collection of packages.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=3)** What makes it special is how they're designed as an ecosystem for doing data science.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=8)** The tidyverse packages are built to work consistently and in tandem with one another.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=14)** The tidyverse provides a consistent workflow for working with your data.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=18)** You'll reuse the same techniques again and again, independent of the exact structure of your data.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=25)** By investing and learning how to use the tidyverse, you'll equip yourself to work with increasingly complex problems.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=32)** For instance, your data might be split across multiple sources.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=37)** You can use the same powerful data manipulation packages and functions to wrangle these data sets and then combine them together with the eponymous tidyr package.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=49)** You may be familiar with the incredible ggplot2 package for creating truly beautiful and impactful data visualizations.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=57)** It's also a first class member of the tidyverse.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=61)** All of the fundamental principles behind the ecosystem mean that your wrangled data is ready to be visualized with ggplot2.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=69)** Tidy data is the backbone of the tidyverse.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=72)** It's this central tenant which provides the ecosystem with all of its flexibility, ability to scale for complex, multi-component problems, and to do so with reproducible workflows.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=85)** However, there is some negativity around the idyverse, which is well summarized by how the official documentation describes itself.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=94)** For tidyverse is an opinionated framework.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=97)** It requires you to approach problems from the tidy data perspective, and that means that slotting it to some data pipelines or methodologies requires a lot bit of extra work.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=110)** But I cannot unsell how much data science value there is in the structured problem solving approach that tidyverse provides you.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=118)** The tidyverse ecosystem has been extended by many packages, including tidygraph to support network analysis.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=125)** You have excellent tools for time series forecasting thanks to Fable and text mining capabilities thanks to tidytext.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-the-tidyverse?u=76281980&t=133)** And finally, there's a fully featured machine learning framework from tidymodels that integrates with all of the skills you'll learn in this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Code Keywords:** finally, (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Installing, loading, and working with the tidyverse packages
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=0)** - [Instructor] The tidyverse ecosystem is designed from the ground up for simplicity and consistency, including how you get the packages into your machine and load them into your R sessions.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=11)** Let's look at how we would install the tidyverse in R by moving over to our project 01_01b.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=19)** I have inside of the Files tab a script called ggplot2.R, and what I'm trying to do is replicate your situation.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=30)** So you may have been running code already and you want to install the tidyverse.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=34)** So I've got this code, I'm going to run it.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=37)** To pretend I was working on this before, I wanted to install the tidyverse.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=42)** So to install the tidyverse, I would come to the console and I would type install.packages tidyverse.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=51)** And I get this warning about updating loaded packages.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=55)** This is because I've already loaded ggplot2.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=60)** And when we do install.packages, that's going to go and get the most up-to-date version of ggplot2.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=66)** That's an issue.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=67)** The best practice is to always restart your R session before installing new packages.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=73)** Let me show you how to do that.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=75)** So we'll click on Cancel.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=77)** We'll go to Session in the menu bar and we'll select Restart R.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=83)** We now have a completely fresh R session.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=87)** Let's go to our console and type install.packages tidyverse.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=94)** And when I hit Enter, it's going to go away to cron install all the packages that I don't have on my machine.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=101)** And when you run it, it will install all the packages that you don't have.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=107)** So I'll hit Enter.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=109)** And I already have many of these packages installed, so it doesn't take that long for all of the remaining tidyverse packages to be installed.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=118)** So the installation is finished when you get to this point here.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=122)** So you have the prompt and the flashing cursor.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=125)** It might take longer on your machine.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=128)** Great.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=129)** Now we've got these packages installed, let's talk about how we would use them.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=134)** The tidyverse packages are split into two very distinct groups.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=138)** There's the core tidyverse and there're specialized tidyverse packages.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=144)** The core tidyverse packages are loaded all at the same time with library tidyverse, whereas the specialized packages need to be loaded individually.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=154)** As we progress through the course, we'll get to grips with all of the core tidyverse packages and a fair few of the specialized ones.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=162)** Don't worry if you are unfamiliar with most of these packages for the time being.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=168)** So let's go over to RStudio and load our packages.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=172)** In fact, let's change line one from library ggplot2 to library tidyverse.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=178)** And when I run this, it's going to load the tidyverse and the tidyverse package, it's quite noisy.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=184)** It likes to tell you which packages have been loaded.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=187)** And so it says that it's attaching the core tidyverse packages and you can see those nine core tidyverse packages.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=196)** Now, how about for other packages?
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=198)** readxl was one of those.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=200)** readxl is a great package for reading in an Excel file.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=204)** To load that package, we would need to explicitly load it.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=208)** So I would type library readxl, and run that code.
>
> **[3:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=215)** And that's loaded the package.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=218)** And now, in my autocompletion, if I type read_excel, we can see this function read_excel from the readxl package.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=229)** Now that we understand the tidyverse's split into core and specialized packages and how to load those packages, it's important to know what does the core tidyverse give us?
>
> **[4:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=240)** It's easiest to split the core packages into groups of packages.
>
> **[4:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=245)** The first group, tibble, dplyr, and tidyr equip us with the high-level tools we need to wrangle, manipulate, and transform rectangular data.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=255)** The second group, stringr, lubridate, and forcats are low-level tools that we can use alongside the first group of packages to clean, sanitize strings and dates, as well as manipulating the order of factor variables.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=272)** The remaining packages kind of live on their own.
>
> **[4:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=276)** readr gives us everything we need to read flat files, including .CSV files.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=282)** purrr provides a toolkit for functional programming, which admittedly, many tidyverse users never need to use.
>
> **[4:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/installing-loading-and-working-with-the-tidyverse-packages?u=76281980&t=291)** And the final package, ggplot2, is a fully-featured package for data visualization and that is why the core tidyverse is so powerful.

> [!info]- Semantic Content
>
> **Prerequisites:** install (9)
> **Code Keywords:** let (6), this, (1), function (1)
> **UI Navigation:** go to (2), click on (1), in the menu (1)
> **Code Identifiers:** read_excel (2)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)
> **Best Practices:** best practice (1)
> **Warnings:** warning (1)

#### Introducing data.frame and tibbles
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=0)** - [Instructor] We're starting this video in 01_03b and the data frame and tibbles to R script.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=7)** It's more than likely that if you've used R before, you've come across iris, mtcars, and quakes.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=14)** All three of these are examples of data.frame.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=18)** Let's take iris. Let me run this object or print it.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=23)** So, I'll put my cursor at the end of the object name and I'll hit Command + Enter or Ctrl + Enter in Windows, and that prints the data frame to the console.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=33)** Now, it's kind of annoying to work with.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=36)** If I went to see the column names of this data frame, I will need to scroll all the way up through those 150 rows to find the names of the columns.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=46)** And that gets to one of the benefits of tibbles over data.frame.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=53)** But how do we know that these things are data frame?
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=57)** Well, we can use the function class.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=60)** So, if I put class at the beginning of iris, an open bracket and an closed bracket here, and I run that, that tells me that we have a data frame.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=71)** And that's true for all three of these datasets.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=75)** data.frame has been fundamental to the popularity of R in the data science community.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=82)** It is a huge setting feature of the language.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=85)** There are some folks who use or began using R simply because of data.frame.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=90)** And that's because most data sets that we work with day-to-day are rectangular, they contain rows and columns.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=98)** And base R has included data.frame for more than two decades.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=103)** It's an excellent general purpose data structure for rectangular data.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=108)** And data.frame has been a crucial component of the CRAN ecosystem of packages ever since.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=116)** Now, let's get to tibble.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=118)** The official documentation for the tibble package proposes tibble as a modern re-imagining of the data frame.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=126)** But it's a lot less dramatic than that.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=129)** And tibbles won't break your code.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=131)** Instead, tibbles are designed to provide additional features and user-friendliness over data.frame.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=140)** From our perspective, these are the three biggest differences or features of tibble compared to data frame, prettier printing, nested data, and grouped data.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=151)** Tibble is an incredibly friendly data structures to work with in a console compared to data frame.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=158)** I've used as_tibble to convert quakes from a data frame into a tibble, and I get a glanceable overview of the dataset.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=165)** That means I don't need to scroll through 200 rows in the console.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=171)** I think it's important you know why these two objects look different.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=176)** It's because they have different print methods.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=179)** And the tibble print method is console size-aware.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=183)** Let's go over to our studio and see this in action.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=187)** To use tibble, we need to load for tidyverse and it's always best practice to load packages at the top of your script.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=195)** So, if we go up here and we type library("tidyverse") and let's convert mtcars into a tibble.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=206)** So, we'll use the function as_tibble, and that prints the object to the console.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=216)** And we can see the really nice print method there showing the summary at the top, 32 rows and 11 columns.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=223)** Now, I want to make my console quite narrow.
>
> **[3:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=228)** And let's rerun that code on line six.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=232)** And we can see that we get fewer columns printed in the summary.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=236)** This is because the print method knows how wide a console is and chooses an appropriate number of columns to print.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=244)** The remaining columns are summarized below.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=247)** This is such a great, great feature of tibble.
>
> **[4:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=253)** Now, there are many data sets built into the tidyverse that are already stored as tibbles.
>
> **[4:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=260)** One of those is starwars.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=264)** So, if I print the starwars data set to the console, it doesn't have very much room to breathe, so it's only showing the first four columns.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=272)** Let me expand the console and run line eight once again.
>
> **[4:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=279)** Now, I want to bring your attention to those last three columns in the tibble, films, vehicles, and starships.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=288)** Those columns aren't like the other ones.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=290)** They're not like any columns that you see in a data.frame.
>
> **[4:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=294)** Those are list columns.
>
> **[4:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=296)** Let's break down what's happening inside of those columns.
>
> **[5:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=301)** If we took the first four rows from a dataset for Luke, C-3PO, R2-D2, and Darth Vader, and we looked at the starships column, that list column, we can see that Luke has <chr (2)>, which tells us that there are two strings within that list column.
>
> **[5:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=318)** There are two starships associated with Luke.
>
> **[5:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=322)** There are zero starships associated with C-3PO or R2-D2.
>
> **[5:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=327)** There's one ship that's associated with Darth Vader.
>
> **[5:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=330)** So, if we were to unnest this dataset, we would only return three rows from the non-empty values in the list column.
>
> **[5:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=341)** So, we'd get two values for Luke and one value for Darth Vader.
>
> **[5:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=345)** In my experience, the majority of tidyverse users I work with don't make use of nested data and wouldn't particularly benefit from it.
>
> **[5:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=354)** However, it unlocks completely new capabilities, particularly in modeling that are just not possible with base R's data.frame data structure.
>
> **[6:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=365)** Now, I want to go back to our studio to talk about the final feature of tibble's grouped data, which is incredible and everyone I know who uses tibble's mix use of grouping.
>
> **[6:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=377)** Let's make my console a little bit more sensibly sized.
>
> **[6:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=382)** And let's, for the last time, get the iris dataset.
>
> **[6:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=386)** Now, the iris dataset contains information about several different species.
>
> **[6:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=391)** Let's say that we wanted to summarize the sepal length, we wanted to find a maximum sepal length within each species.
>
> **[6:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=401)** We would make use of the function group_by.
>
> **[6:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=407)** So, if I group_by species, that's going to print to me the console, a tibble, which has the same summary as before, 150 rows and 5 columns, but are now has groups inserted.
>
> **[7:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=421)** So, it's identified that there are three different values within species.
>
> **[7:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=425)** Groups are amazing. You can create hierarchical groupings.
>
> **[7:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=430)** So, we could group by multiple columns if we wanted to.
>
> **[7:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=433)** So, if we thought back about the starwars dataset that has both home worlds and species, so we could group by both of those.
>
> **[7:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=441)** But for iris, we've grouped by species alone.
>
> **[7:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=445)** And then, what can we do with that?
>
> **[7:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=447)** Well, we can summarize the data.
>
> **[7:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=450)** So, let's summarize by creating a new column, max_sepal_length.
>
> **[7:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=458)** And we'll use the function, max(Sepal.length) column.
>
> **[7:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=465)** And when I run that, I get back a summarized tibble.
>
> **[7:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=469)** So, the maximum sepal length for each of those species.
>
> **[7:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=473)** This is such an incredible feature of tibbles, which is just not possible with data.frame.
>
> **[7:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=479)** Everyone I know that uses the tidyverse makes use of groups day-to-day in their code.
>
> **[8:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=487)** So, to summarize, tibble is the extensions of the already incredible data.frame data structure.
>
> **[8:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/introducing-data-frame-and-tibbles?u=76281980&t=493)** The three most prominent features that you'll use are the massively improved and console size-aware print method, nested data where you need it, and you will make use of group data almost every time that you use the tidyverse, and the reason you can is thanks to tibble.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (4), class. (1)
> **CLI Commands:** make (5), find (2)
> **Code Identifiers:** as_tibble (2), group_by (2), max_sepal_length (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** cran (1)
> **Cross-References:** go back to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### What are %>% and |> for in the tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=0)** - Code for working with data is very messy.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=3)** Before we can do what we want to do with our data, we'll first need to clean, wrangle and reshape it a lot.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=11)** If we break this down into tasks, it might feel like we need to do this, then that, another thing to clean the data, and then something else fancy before the final complicated step.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=24)** What would that look like in normal R code?
>
> **[0:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=28)** The answer is, it would look backwards.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=30)** Traditionally written R code nests functions inside a one another.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=35)** This can make code both hard to initially write and to read.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=39)** It might be quite challenging to read somebody else's code and to understand what they were doing with their dataset.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=46)** Oh, and did you notice which dataset we're working with?
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=51)** It's nested at the deepest point in the code.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=54)** I've tried to use line breaking to make it a little bit clearer what's happening in the code, but you're more likely to come across nested code that looks like this, and that's where the pipe comes into play.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=68)** The pipe allows us to write our code in the exact same order as the operations are performed.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=74)** We even start by specifying which dataset we're using, so we know what our data task is from the beginning.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=82)** There are two big things to keep in mind about pipes.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=85)** The first is, verse syntactic sugar.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=89)** They're designed to make code more convenient to write and easier to read.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=94)** It's okay if you don't really want to write your own code with pipes, but, and it's a big but, the tidyverse documentation and ecosystem is completely full of pipes.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=109)** You need to have pipe fluency in order to read for documentation and truly learn to use the tidyverse effectively.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=117)** Things change dramatically in 2021 with the release of R Version 4.1.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=124)** R now has two pipes.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=127)** I'm going to take a very short amount of time to explain why R needs two pipes, and then the two following videos we'll deep-dive into how to use each of the pipes.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=139)** Mostly, it doesn't matter which pipe you prefer, and I don't personally have strong opinions on the subject.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=147)** It's only really habit that keeps me using the pre-2021 pipe.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=152)** The pipe that I use is a right angle bracket, nestled between two percentage symbols.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=158)** It was first introduced in magrittr package back in 2014, and it became tremendously popular, eventually getting baked directly into the tidyverse.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=169)** After loading the tidyverse package, you have access to this pipe.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=173)** Base R finally got a pipe baked into it in 2021 from version 4.1, onwards.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=180)** The pipe was added because of how popular the magrittr pipe was, even amongst our users who don't use tidyverse.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=189)** This means that you can use this pipe without loading any packages at all.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=195)** Amusingly, the first character of the Base R pipe is also called pipe, and it's followed by a right angle bracket.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=204)** You might need to search how to type this character on your own keyboard.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=210)** So, since 2021, R has got two pipes.
>
> **[3:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=215)** It's kind of a personal preference which one folks use, so it's important that you are comfortable with them both.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/2016046?u=76281980&t=222)** And I've given you the basics you need to switch between them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** this, (2), switch (1)
> **Versions:** version 4 (2)
> **Definitions:** is a  (1), means that (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - code (1)

#### Using the %>% pipe in your code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=0)** - [Instructor] This video is about the pipe constructed from a right-angle bracket between two percentage symbols, more commonly known as the magrittr pipe.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=10)** To use this pipe, you need to load a package containing the pipe, such as the Tidyverse.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=16)** However, it's important to keep in mind that the magrittr pipe works with any function, not just those on the Tidyverse, and that's because the pipe works as syntactic sugar by rewriting your code.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=31)** More technically, the pipe takes the left-hand side of itself and forces it into the first argument of the right-hand side of itself and runs the resultant code.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=43)** Let's go over to project 01_06b to see this in action.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=48)** My magrittr pipe to R script has got some code on lines 2 to 3 that uses a magrittr pipe.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=55)** And if I run this code by putting my cursor at the end of the pipe chain and hitting Command + Enter or Control + Enter, we get an error, and the error is that R could not find the function %>%.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=70)** That's because we haven't loaded a package that contains the magrittr pipe.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=76)** Let's load the Tidyverse by going to the top of our script, typing out library, and loading the Tidyverse.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=87)** And now I can put my cursor at the beginning of the pipe chain, and if I run the pipe chain, I get "Hello world" printed out five times as I would expect.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=98)** Now, I want to do something a little bit more serious with the pipe.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=101)** So let's summarize the msleep dataset.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=105)** So I'm going to type msleep, and then I'm going to type out my pipe, %>%.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=112)** I'll hit Enter.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=112)** That's going to automatically indent my code.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=115)** I'm going to type out count(conservation) and run the code.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=121)** So that pipe has worked, but it was really frustrating having to type out that pipe letter by letter or character by character.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=130)** So there is a keyboard shortcut for that.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=132)** So if I type out msleep space, and then you use the keyboard shortcut Command + Shift + M or Control + Shift + M in Windows, that's going to insert the pipe.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=144)** And then we can put count and (vore) this time to summarize the data by vore.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=150)** Now, we can combine together multiple pipes.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=152)** So let's take this, and let's pipe it into the function arrange.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=159)** So we'll arrange by descending n like that.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=165)** Now, it's important to remember that the output of the pipe chain has only been printed over a console, so our results haven't been stored.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=175)** If we wanted to store the results of a pipe chain, the easiest and most reliable way to do that is to create an assignment at the beginning.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=184)** So let's call this vore_summary.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=189)** We'll type out the assignment operator. We'll run that code.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=193)** And now we can see in our environment, we have vore_summary.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=198)** That's everything you need to know about using the magrittr pipe in RStudio.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=204)** But I want to give you some stylistic advice on using the pipe.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=208)** This will help you when writing code and help others read your code, too.
>
> **[3:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=213)** When pipes are combined together, we call them pipe chains.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=218)** It's difficult to understand very long pipe chains.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=222)** It's recommended to split your chains into short, meaningful blocks.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=227)** A good rule of thumb is pipe chains should never have more than 15 pipes in them.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=232)** Very realistically, you're unlikely to use more than around 10 pipes in a row.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=239)** It's strongly recommended that you create a newly named object when your data changes fundamentally.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=246)** In this fictionalized code, I've stored the contents of my file as raw_data and then cleaned the columns to create clean data.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=256)** Your data might contain data for several time periods that need to be visualized or analyzed separately.
>
> **[4:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=262)** It's a good idea to store filtered subsets of your data as separate objects, which I've done with data_2020s.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=272)** I then wrangled the data and pivoted it into a tidy format.
>
> **[4:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=276)** This would be a fundamental change to the structure of the data, so I created a new object, making clear the data has been pivoted.
>
> **[4:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=285)** This is somewhat more of an art than a science.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=289)** The biggest takeaway from this advice is don't just pipe everything together.
>
> **[4:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3913046?u=76281980&t=294)** Take some time to think about how objects are named when you're using pipes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), this, (1)
> **Code Identifiers:** vore_summary (2), raw_data (1)
> **Best Practices:** recommended (2), rule of thumb (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using the |> pipe in your code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=0)** - [Instructor] This video is about the pipe constructed from the pipe character, followed by a right angle bracket, more commonly known as the base R pipe.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=10)** To use this pipe, you need to be using R version 4.1 or later.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=15)** You can use this pipe with any function in R including functions from the tidyverse.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=21)** The pipe is syntactic sugar for rewriting your code.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=26)** The pipe takes the left-hand side of itself and forces it into the first argument of the right-hand side of itself and runs the resultant code.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=37)** Let's go over to project 01_06b to see this in action.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=43)** So I have my script base-r-pipe.R open, and I have some code.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=48)** Hello World is being piped into rep five, and if I run this code by putting my cursor at the end of this pipe chain and hitting Command + Enter or Control + Enter in Windows, that's going to run the code, and it works successfully without loading any packages because it's the base R pipe.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=66)** It only works because I'm on a version of R that's after 4.1.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=71)** How do you know which version of R you're on?
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=74)** You need to scroll to the top of a console when you open up RStudio, and it will tell you what version number you're on.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=80)** So I'm currently on version 4.3.1.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=84)** Unfortunately, if you're using an older version of R, some folks work at organizations that are using older versions of R for security or other reasons, you will not be able to use the base R pipe.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=98)** Instead though, you do have access to the tidyverse pipe, the magrittr pipe.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=104)** So this is a very simple example of using the base R pipe.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=108)** Let's use something a little bit more complicated.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=111)** So let's load the tidyverse.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=114)** So we'll do library tidyverse.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=117)** And then what we want to do is we want to summarize the msleep dataset by conservation status.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=123)** So I'm going to type a space, the pipe character, the right angle bracket, and hit Enter.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=129)** That's going to automatically indent my code.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=132)** And then let's type count and put conservation status.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=136)** And that's going to summarize my data by conservation status.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=140)** Now that was pretty annoying having to write out each individual character of the pipe.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=147)** There's a keyboard shortcut for pipe in RStudio.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=150)** So let me show you that.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=152)** If I type msleep, space, and then I use Command + Shift + M or Control + Shift + M in Windows, that's going to insert a pipe character.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=164)** Now the default behavior of RStudio is it will use the magrittr pipe.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=169)** Let's swap that by going to Tools in the menu bar, Global Options, selecting code from the left vertical nav.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=180)** And we want to click this checkbox here, Use native pipe operator there.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=187)** And then if we scroll down and hit OK, let's delete this magrittr pipe, and let's use that keyboard shortcut again.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=196)** So that's Command + Shift + M or Control + Shift + M in Windows.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=201)** And now we get the base R pipe.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=203)** And let's summarize my data by vore, and let's pipe this again into a range.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=214)** Perfect, in descending order of N.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=217)** So that's summarizing the msleep dataset by vore and arranging in descending order.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=223)** Now it's important to remember, all we've done with this pipe chain is output them link into the console.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=229)** We haven't stored the results.
>
> **[3:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=231)** If we wanted to store the results against an object, we wanted to make an assignment, the easiest, most flexible way to do that is to go to the beginning of the pipe chain.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=243)** Let's call this vore_summary.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=247)** We'll use the assignment operator, and then we will run that code, and we can see now in the environment, we've got that vore_summary object.
>
> **[4:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=257)** So if you want to make an assignment of the result of your pipe chain, then you put your assignments at the beginning of the pipe chain to inform the code reader and yourself that you are going to create an object.
>
> **[4:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=270)** That's everything you need to know about using the base R pipe in RStudio.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=275)** But I want to give you some stylistic advice on using the pipe.
>
> **[4:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=281)** This will help you in writing code, and it will help others read your code more easily.
>
> **[4:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=286)** When pipes are combined together, we call them pipe chains.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=290)** It can be difficult to understand very long pipe chains.
>
> **[4:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=295)** Please split your chains into short, meaningful blocks.
>
> **[5:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=300)** A good rule of thumb is that pipe chains should never be more than 15 pipes in length.
>
> **[5:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=306)** Though, realistically, you're unlikely to use more than 10 pipes in a row.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=311)** It's strongly recommended that you create a newly named object when your data changes fundamentally.
>
> **[5:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=319)** In this fictionalized code, I store the contents in my file as raw_data, and then clean the columns to create clean data.
>
> **[5:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=329)** Your data might contain data for several time periods that need to be visualized or analyzed separately.
>
> **[5:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=336)** It's a great idea to store filtered subsets of your data as separate objects, which I've done with data_2020s.
>
> **[5:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=346)** I then wrangled the data and pivoted it into a tidy format.
>
> **[5:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=350)** This would be a fundamental change to the structure of the data.
>
> **[5:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=354)** So I created a new object, making clear the data has been pivoted.
>
> **[6:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=360)** This is somewhat more of an art than a science.
>
> **[6:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=363)** The biggest takeaway from this advice is don't just pipe everything together into one long pipe shape.
>
> **[6:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/3911163?u=76281980&t=371)** Take some time to think about how objects are named as you move through your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1), delete (1)
> **Versions:** version 4 (2), 4.1 (1), 3.1 (1)
> **UI Navigation:** in the menu (1), checkbox (1), scroll down (1), go to (1)
> **Code Identifiers:** vore_summary (2), raw_data (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is a  (1)
> **Best Practices:** rule of thumb (1), recommended (1)
> **Speakers:** - [instructor] (1)

#### Datasets built into the tidyverse packages
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=0)** - [Instructor] In this course, we're going to depend a lot on dataset built into the tidyverse, so I want to make sure we're all on the same page.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=7)** And as a bonus, you're going to learn about the vcdExtra package.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=12)** So we're in project 01_07b and I'm in the tidyverse-datasets.r script and the dataset that we will use a lot because it's my favorite is msleep.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=25)** Now if I run msleep, I'm going to get an error message, "Object msleep not found."
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=30)** And that's because it's from the tidyverse.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=33)** Let's load the tidyverse.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=35)** So when we run that, it's going to load the core tidyverse packages, including ggplot2, which contains msleep.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=42)** So now if I run line four, I'm going to get that tibble printed to the console.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=49)** But what other datasets are available in that package?
>
> **[0:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=53)** Well, that brings me to the vcdExtra package.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=57)** So if we load that package, and then I'm going to call the function datasets from vcdExtra, we can see in the order completion, and I'm going to give it the name of the package ggplot2.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=71)** I'm going to run that.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=72)** It's going to give me a tibble summarizing all of the datasets built into the package.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=79)** But that's a dataframe, it's not very user friendly.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=82)** So let's pipe that into as_tibble.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=87)** And now we can see that there many datasets built in and we can see the titles of them.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=93)** How about all of the packages in the tidyverse?
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=97)** Well, what we need is we need the names of the packages to provide to the datasets function.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=103)** And hopefully in the tidyverse package, there is an object tidyverse_packages, which is a vector of the package names in the tidyverse.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=114)** So let's go and pipe that into the function datasets, oh, I forgot my brackets.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=124)** And then pipe that into the function as_tibble, and that's going to give me a tibble that shows me all of the datasets built into the tidyverse.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=137)** It's a little bit annoying looking at that in a console.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=140)** So if you're not already aware, there's an excellent function built into R called view.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=148)** The view function gives you an interactive view of a dataframe or of a tibble.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=153)** So if I take this tibble and pipe it into view, it's going to give me a new tab which allows me to interactively explore all of the tibbles, the datasets across the tidyverse, and I could, for instance, filter for those datasets in the tidyr package.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=173)** So that's all you need to know about the datasets built into the tidyverse.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=177)** If you get the error object not found, it's because you've not loaded for tidyverse or the package that contains that object yet.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/datasets-built-into-the-tidyverse-packages?u=76281980&t=185)** And the vcdExtra package contains a really nice function datasets that will summarize all dataset objects from a package.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3)
> **Code Identifiers:** vcdextra (4), as_tibble (2), tidyverse_packages (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Using the select() function to obtain columns from data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=0)** - [Instructor] Select() is one of the most useful and frequently-used functions on the dplyr package in the tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=7)** It's used for extracting or excluding columns from a dataset based on column names.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=13)** Let's go over to project 01_08b to see it in action.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=18)** I have a script in there, selecting-columns.R, And, at the top, we're going to load the tidyverse as per usual.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=24)** And then, we've got a midwest dataset.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=27)** Let me make my console a little bit bigger and print this object to the console.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=33)** And so we can see that this is a tibble, it comes from the ggplot2 package, and it's got lots and lots of columns in here, and that's why I've chosen it.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=42)** So I can demonstrate lots of the things that are possible with the select() function.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=47)** So let's make my console a little bit smaller.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=51)** Let's pipe out object midwest into the function select().
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=56)** And let's say that I want the state and the county columns.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=62)** That's going to print them out to my console.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=65)** Now I can also refer to columns by their index.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=69)** So if I copy and paste this code, and I could refer to column one and column two.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=75)** If I run that code, I'm going to get PID and county.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=80)** It's not recommended to refer to columns by their index in general, as column order might change unexpectedly.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=88)** But if you need to refer to columns by their index, it is possible in select().
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=94)** How about if we wanted a range of columns?
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=96)** Well, that's also possible.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=97)** So let me paste from my clipboard again.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=101)** And let's say that I want from the column PID to the column poptotal.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=108)** Notice that the auto-completion in RStudio auto-completes the column names in the dataset as well, which is a great feature of RStudio.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=118)** Select poptotal and run that code, and that's going to give me all of the columns from PID through to poptotal.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=127)** Now let's say that in addition to these columns, in addition to these fields, I also need any columns that contains a percentage, and in our column names, percentage is represented by perc.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=142)** So we can make use of one of many tidy selection helpers inside of select().
>
> **[2:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=149)** So we'll go here and we're going to make use of the function contains(), and we'll provide the string "perc", perc for percent.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=158)** And if I run that code, we're going to get back that first range of columns, PID through poptotal, and we'll get back all of the columns that contain perc as well.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=169)** How about if I wanted the opposite of that?
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=171)** So how about if I wanted to remove the percentage columns?
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=175)** Well, we can make use of the !, which we read as bang.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=181)** So this would be PID:poptotal, !contains.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=185)** If I run that code, that's going to exclude any columns that contain percentage.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=194)** Let's pipe this into select() again.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=198)** And there are other tidy selection functions available to us.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=202)** So let's make use of starts_with(), and let's select only those columns that start with pop.
>
> **[3:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=212)** If I run that code, I get back those columns.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=216)** So how do you know this as possible?
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=218)** Well, if we bring up the documentation for select(), it will show us we can use tidy selection helpers.
>
> **[3:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=225)** We can bring the documentation up for a function in RStudio by selecting the name of the function, and pressing F1 on our keyboard.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=234)** If I make this a little a bit bigger, then we can see there's a handy overview of all of the selection features available to us for tidy selection features.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=244)** So it mentions the :, the ! for excluding, and it also shows us that we've got starts_with(), ends_with(), and contains().
>
> **[4:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-select-function-to-obtain-columns-from-data?u=76281980&t=254)** And that is everything that you need to know about using select() to get the columns that are interesting or uninteresting out of your data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (5)
> **CLI Commands:** make (7)
> **Env Vars:** pid (5)
> **Code Identifiers:** starts_with (2), ends_with (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Using the filter() function to filter data by conditions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=0)** - Filter is a crucial component of almost all tidyverse scripts and is part of a deepyr package.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=7)** Filter is used to extract or exclude row from a data frame based on their values.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=14)** Let's go over to project 0109B to get going with the function.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=18)** In the filter to R script at the top, I'm going to load the tidyverse and we're going to start by applying some simple filters to the gss_cat dataset.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=30)** And then when I finished explaining how to use the filter function in general, I'm going to show you my advanced filter example at the end that's currently on line 10 and 11.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=42)** So let's get started with gss_cat and print it to the console.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=48)** Going to make the console a little bit bigger.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=51)** We can see we've got lots of columns there.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=53)** And let's start by saying that the first filter that we are interested in is the age column.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=60)** So let's pipe this object gss_cat into filter and let's say that we are interested in those individuals whose age is greater than or equal to 30.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=74)** If I run the code, that's going to reduce the dataset to only look at those individuals who responded to the gss_cat survey when they were 30 or older.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=83)** Let's add an additional condition to the R income column.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=90)** So I only want to look at those R income values that include a dollar symbol in the text.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=98)** So we're going to make use of a function from the string R package for that.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=104)** So I'll add an additional argument to filter and I'll use SDR detect on VR income field and I will search for the dollar symbol.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=120)** But that doesn't quite look like it worked.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=125)** Can you see on line two and three ,we've got the R income values not applicable?
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=131)** This is because the SDR detect function is using regular expressions and dollar has a specific meaning there.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=140)** So when we're applying filters with filter and we're using string R functions, we need to be aware of regular expressions and symbols that have meaning.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=152)** So instead of searching for this, let's search for the character dollar sign.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=160)** And now if I run that code, we can see that we only have those values in our income that contain a dollar symbol.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=169)** So we now only have data about those individuals where the income is known.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=175)** Let's add an additional condition to the year column.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=181)** Now I've got a choice here.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=182)** I could either continue to add arguments to the filter function, or, if I wanted to, I could pipe my object into another call of the filter function and apply my condition here you have a choice.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=198)** Do what makes sense to you.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=199)** What you might want to do is you might want to group together filters that are doing the same kind of thing into one filter call and use a second filter call when you're applying another set of conditions.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=211)** So let's say that I'm interested in values for 2005 to 2010.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=219)** I could write some inequalities or I can make use of the really awesome between function from deepyr.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=227)** So I'm interested in filtering for those values where year is between 2005 and 2010.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=236)** Okay, and my final condition that I want to apply is I want to remove those records where TV hours is NA.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=244)** NA and R is a special kind of entity.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=249)** And so we need to treat it with the is.na function.
>
> **[4:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=253)** So let's pipe this into another filter call and we'll use is.na on the TV hours column.
>
> **[4:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=265)** And now we only have those, those where TV hours is na.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=272)** If I wanted to negate that condition, I wanted the opposite, then I could use an exclamation mark here to mean not is.na.
>
> **[4:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=283)** So if I run that code, I get back all 2,196 individuals with an age of 30 or greater that income was known.
>
> **[4:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=292)** The year they responded was between 2005 and 2010 inclusive, and TV hours is not NA.
>
> **[5:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=301)** That's everything you need to know for basic usage of the filter verb.
>
> **[5:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=306)** And we've seen how the tidyverse packages work together to make filtering easy.
>
> **[5:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=311)** I think it's important you also know about if any and if all, but we'll look at them in detail again later in the course.
>
> **[5:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=321)** Often, we'll want to apply the same filter condition to many columns.
>
> **[5:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=326)** For instance, if the religion or denomination column contains the string, other.
>
> **[5:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=332)** So in lines 14 through 15, I'm making use of the function, if any, to detect if religion or denomination passes this predicate test str_detect other.
>
> **[5:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=346)** And I've now returned all 3,113 individuals where the religion or the denomination field contain other.
>
> **[5:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=355)** So not both.
>
> **[5:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=357)** If any of them contained it.
>
> **[5:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-filter-function-to-filter-data-by-conditions?u=76281980&t=358)** I could swap this for if all, and I'll see that there are no individuals in the set where both religion and denomination is other.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (9), this, (1), continue (1)
> **Code Identifiers:** gss_cat (4), str_detect (1)
> **CLI Commands:** make (4)
> **Env Vars:** sdr (2)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)

#### Using the mutate() function to modify and add columns
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=0)** - [Instructor] mutate() is your friend when it comes to wrangling data sets with a tidyverse and is from the dplyr package.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=7)** mutate() allows us to modify existing columns or to create new columns in data.frame and tibble.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=15)** Let's take a look at how to use the function in the 01_10b project.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=19)** At the top of the script, we're loading the tidyverse as always, and then on lines 11 and 12, I've got an advanced option that I'll get to after the basics of using mutate().
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=31)** So, we're going to be looking at the msleep dataset.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=34)** Let's print that to the console and make the console a little bit bigger, and we can see that we've got many columns about sleep.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=45)** What we don't have at the moment is we don't have a non-REM sleep column.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=51)** So we have sleep_total, we have sleep_rem, but we don't have a non-REM sleep.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=56)** So, let's create that new column with mutate().
>
> **[0:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=59)** We'll pipe our dataset and sleep into the mutate() function and we're going to create a new column, sleep_non_rem, and we'll calculate sleep_total.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=73)** You can see that the autocompletion from RStudio is populated by the columns from our object, which is quite nice.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=79)** So, we have sleep_total and we're going to subtract sleep_rem from that.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=86)** And if we run that code, we're going to get our new column.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=90)** If I make my console slightly less wide, if I move it over here, then still it's not quite wide enough to see, so I will make it even wider.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=102)** There we go.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=103)** So we can see that the new column, sleep_not_rem gets added to the very right-hand side of our data frame by mutate().
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=112)** Now, mutate() isn't just for creating new columns.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=116)** We can modify existing columns.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=119)** So, let's say that we wanted to change that column sleep_total to be a percentage of the day, so we'll take sleep_total and we'll divide it by 24, by the 24 hours in a day.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=135)** And when we run that code, we can now see that the column sleep_total is a percentage or a fraction.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=142)** But what if we wanted to apply that to all of the columns that contain sleep?
>
> **[2:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=149)** That's advanced mutate() functionality that requires a cross, and I'm going to demonstrate that.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=156)** But so far, we've seen what most, the majority of R users are using mutate() for, creating new columns and for modifying existing columns.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=167)** So, let's get to that advanced example here.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=170)** We've got a cross and within that, we're using the tidy selection function contains() to target all of the column names that contain sleep, and then we're dividing those columns by 24.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=182)** And when I run this code, we can see that all of the columns with sleep total are now fractions.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=190)** Notice that the column that we created, sleep_non_rem, isn't in there.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=196)** This is, again, because we haven't created an assignment.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=201)** So up here, I could call this msleep_processed, maybe, make my assignments, and then on line 13, I could swap msleep for msleep_processed.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=219)** And if I make that even wider, then we can see all of the columns that contain the word sleep are now divided by 24.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-the-mutate-function-to-modify-and-add-columns?u=76281980&t=230)** And that is everything that you need to know about using mutate() to modify existing columns in your tibbles and to create new ones as well.

> [!info]- Semantic Content
>
> **Code Identifiers:** sleep_total (6), sleep_rem (2), sleep_non_rem (2), msleep_processed (2), sleep_not_rem (1)
> **Code Keywords:** let (5), function (3), for, (1)
> **CLI Commands:** make (5)
> **Env Vars:** rem (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Rewrite this code to use the pipe of your choice
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=5)** - [Instructor] This challenge is designed to test your knowledge of the tidyverse functions that we've introduced so far and your understanding of how to use the pipe.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=14)** Please feel free to solve this challenge using either the magrittr pipe from the tidyverse or the base R pipe.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=22)** Let's go over to the 01_11b project to see the code that you'll use in this challenge.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=28)** I've used traditional notation to wrangle the msleep dataset.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=34)** Let's take a look at what happens if I run the code.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=37)** So if I select from lines one through to 17 and I run this code, it's going to load a tidyverse and it's going to wrangle the data, and I get back a subset of the msleep animals.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=48)** I've got their conservation status, their name, sleep_total, sleep_rem, and I've got a new column which I calculated, sleep_total_perc.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=58)** Now, this might feel like a lot of code.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=63)** That's a consequence of the traditional R notation style.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=68)** When we translate this into pipe code, it's much shorter.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=72)** There are many fewer lines here.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=74)** It looks like there's 10 plus lines, but there are fewer lines when we use the pipe notation.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=80)** So, what I'm going to do is I'm going to tell you the steps that this code completes.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=86)** So when you come to solve this challenge, you could either start with this code and rewrite this code as pipes, or take the description of the problem and convert that into code.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=100)** And then, you can see if you could do it the other way round as well.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=105)** So, the steps that the wrangling should complete.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=108)** The first steps are the code should start off by restricting which columns are being used.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=114)** Then, you'll need to create a new column that calculates the percentage of the day that each animal spends asleep.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=121)** Next, you'll need to exclude rows where conservation status and time in REM sleep are unknown, and also those animals that sleep 50% or more of the day.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=131)** And finally, you'll need to reorder the rows of the table from most to least time in sleep.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=139)** I'm biased, but I quite like this challenge.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=142)** It should give you a fairly realistic example of things that you'll do with your own data sets and code that you might come across that's not written in pipes that you might want to translate to pipe, okay.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Code Identifiers:** sleep_total (1), sleep_rem (1), sleep_total_perc (1)
> **Prerequisites:** you'll need (3)
> **Env Vars:** rem (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Rewrite this code to use the pipe of your choice
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=5)** - [Instructor] Okay, let's get started with solving this challenge.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=9)** I'm in 09_12b and I've got my solution.R script up.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=14)** And this is the same code as you had in your challenge script.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=18)** So, I'm going to solve this the hard way.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=22)** I'm going to translate the codes into pipe code.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=26)** So I'm going to load the tidyverse, so that I have all of the functions and the pipe.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=31)** And then, what I need to do is I need to find the most deeply nested part of the code, and that's this bit here.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=39)** So, I can see here that I've got msleep.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=43)** Let's copy this.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=46)** Let's paste it down here.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=48)** And actually, let's take msleep and let's put that here so that the dataset we're using is clear from the beginning.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=57)** I'll use the keyboard shortcut to insert the pipe.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=60)** I'm using the magrittr pipe, but feel free to use the base R pipe if you want to.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=65)** Now, let's use the Delete key and then Enter to get the indentation right.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=70)** We'll get rid of that comma that we don't need anymore, and we can put all of this on the same line.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=77)** So, there we go.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=78)** We've turned those several lines into two lines, and that's selecting out the columns that we're interested in.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=86)** Okay, so then, we want to pipe, and the next part of our code, we can see up here, is mutate, so we'll use the function mutate().
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=97)** And what we want to do is we want to create a new column, sleep_total_percentage, which is the sleep_total divided by 24.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=105)** Let's go and grab that actually from here, pop that there, and there we've got that new column, sleep_total_perc, put at the far right-hand side of the dataset.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=115)** That's what mutate() does by default.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=118)** And then, the next thing that we're doing is we're filtering the dataset, so we'll add another pipe here.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=126)** We'll call the function filter().
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=128)** Let's copy my conditions.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=130)** So, I'll copy those and put them there.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=133)** I can run that code, and now I only have 27 rows.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=137)** That's how many I expected to have.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=139)** And then finally, I wanted to arrange the data in descending order with respect to that sleep_rem column.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=152)** There we go.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=152)** So, that is the solution to the challenge.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=156)** And you can see that the pipe code is much shorter than the traditionally written, nested R code.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=165)** It's also much clearer the order in which operations are being completed, because we start with our dataset, we select columns of interest, we mutate, we filter, and then we arrange.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=178)** Whereas when we look at the challenge code, the first thing that we see is a range.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=183)** And then, we need to scan to find out which data set it is that we're working with.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=189)** So, hopefully you feel good after this challenge.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=192)** If you didn't quite get there, let's try again and I'll see you in the next chapter.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-re-write-this-code-to-use-the-pipe-of-your-choice?u=76281980&t=197)** Thank you, folks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (2), this. (1), delete (1), default. (1)
> **Code Identifiers:** sleep_total_percentage (1), sleep_total (1), sleep_total_perc (1), sleep_rem (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Tidy Data: The Fundamental Idea behind the Tidyverse

> [↑ Back to Table of Contents](#table-of-contents)

#### What is tidy data?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=0)** - [Instructor] So what is tidy data, and why is the tidyverse named after it?
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=6)** Understanding this is crucial to learning how to use the tidyverse for problem-solving.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=12)** Tidy data has a very specific definition.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=16)** Each column represents a single variable, and each row represents a single observation.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=22)** Whereas untidy data has no sense to how it's organized.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=28)** This is a screenshot of an Excel file I made of data from the United Nations.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=33)** Does this data feel tidy to you?
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=36)** It's not for two reasons.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=38)** There is a unique column for each month, and there's nothing in the data to tell us what the values represent.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=45)** This could be any variable.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=47)** It could be GDP, millions of internet users, or even hectares of agricultural land per country.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=54)** This is the same data tidied up.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=57)** Each column represents a unique variable, country, year, month, and we now know that the values represent births per month.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=67)** Now, how would we add deaths to this dataset?
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=72)** That's an interesting question.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=74)** When we talk about tidy data in the tidyverse, we also talk about data being wide or long.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=82)** It's not a simple one-to-one relationship between untidy and wide.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=87)** If I described a dataset as being wide, I'd often be talking about a dataset that is in many ways quite tidy, but there are a few columns that could be made tidier.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=100)** In our example, I've added a new column called deaths, which has added some width to the dataset.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=108)** The theoretical tidy data representation of this dataset would collapse the birth and death columns into a new column to record which UN measure each value represented.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=120)** Admittedly, when we're working with just two variables, this doesn't feel like a big difference.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=126)** But if I add 10 variables, it would be very clear that the first approach creates wide data, and the second creates long data.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=136)** The tidyverse is fully equipped to transform your data between wide and long formats through the pivoting functions.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=143)** So that's tidy data.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=145)** Why is it useful?
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=148)** This beautiful cartoon from Allison Horst explains it.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=153)** Tidy datasets all look alike and are fairly literate, whereas messy or wide datasets are all messy or wide in different unique ways.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=163)** In our example, we didn't know our data was about births in the initial wide representation.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/what-is-tidy-data?u=76281980&t=170)** Tidying data forces us to sensibly name our variables and have them structured, ready for wrangling, visualizing, or modeling with the tidyverse.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Env Vars:** gdp (1)
> **Speakers:** - [instructor] (1)

#### Why does ggplot2 want tidy data?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=0)** - [Instructor] I want you to understand fundamentally why ggplot2 depends on long data.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=6)** And to do that, we're going to be in project 02_02b.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=10)** If you've not used ggplot2 much before, that's okay.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=14)** I recommend watching this video to better understand tidy data and watching one LinkedIn Learnings dedicated videos to ggplot2 later.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=23)** So let's load the tidyverse on line one, and we're going to read two data sets, UN data long and UN data wide.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=31)** Then on line 10 through 14, I've got a skeleton of a ggplot2 chart, which has got a fairly nicely formatted X-axis.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=40)** So I need to add a Y-axis, which means I need to choose which column for my data set to use for the Y aesthetic.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=49)** So let's print UN data wide to the console and we can see that this data is wide with respect to births and deaths.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=58)** So we have a separate column for birth and death data.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=62)** So the only way for me to visualize this is for me to add geom line.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=69)** I'll add a plus at the end here.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=72)** I'll go back inside of geom line and add aes and Y is equal to births.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=80)** Now this chart looks weird.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=81)** The value appears to be going up and down each month.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=84)** That's because we've got multiple countries worth of data in our datasets and that data's long.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=91)** So in the country column we've got multiple countries.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=95)** So let's go into geom line and inside of aes and we'll add color is equal to country.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=105)** And now we get a separate line for both the countries, Australian France in this dataset.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=111)** But how would I go around adding the death data to this chart?
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=117)** I would need to add another geom line call.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=120)** So if I select this code and I copy it and I paste it and I replace births with deaths, I'm now visualizing both the birth and death data for both countries.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=135)** But this isn't what ggplot2 was designed for.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=139)** It's going to be really painful to label these lines.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=143)** Ggplot2 wants tidy data.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=146)** So let's look at the code that we have on lines 24 through 28.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=152)** So we have our chart set up again with our X-axis.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=156)** Let's look at the data and we can see that we have our values stored in the value column and the name of our metric of our measure in the name column.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=168)** So let's go into aes here and we can set a ggplot2 level aesthetic instead of a geom specific aesthetic because of tidy data.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=180)** So I'll set Y is equal to value and we'll set color is equal to name.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=189)** So that's got my Y aesthetic added into my charts.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=193)** Now let's add geom line, which is going to make use of those aesthetics.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=200)** And we now have a separate line for births and deaths.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=204)** The chart looks weird again.
>
> **[3:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=205)** We're going up and down each month, and that's because of the longness of the country column.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=210)** So we can make use of another excellent tool of ggplot2 and that's faceting.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=217)** So let's add facet wrap and we'll wrap by country.
>
> **[3:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=225)** And now we have a pretty good looking chart.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=227)** We can compare our different countries and the birth and death rates for those countries.
>
> **[3:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=233)** This isn't specific to just geom line, I could say, okay, I want an area chart.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=239)** So I'll swap this for area and I'll swap color for fill.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=246)** And now I get a stacked area charts.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/why-does-ggplot2-want-tidy-data?u=76281980&t=249)** Ggplot2 is an incredibly powerful toolkit for building charts because it's designed around tidy data and therefore fits really neatly in a Tidyverse workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), for. (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Using pivot_longer() to tidy data into a long format
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=0)** - For Tidyverse contains a pair functions that work in tandem for pivoting data between wide and long format, pivot_longer and pivot_wider.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=11)** It's important to note that before 2020, these processes were achieved with a pair of functions called gather() and spread().
>
> **[0:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=20)** It's becoming less and less common to see those functions gather() and spread() in the wild, and that's because the new pivot functions are more powerful and come with lots of features that just weren't available in these old deprecated functions.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=36)** So I'm going to demonstrate how to use pivot_longer as it's the most complex and the most useful function of the two.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=44)** And then at the end of this video, I'll quickly demonstrate, pivot_wider to undo all of our work, making our data longer.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=52)** So let's go over to project O2_O3B to see this in action.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=57)** Okay, the top of the script, let's load the Tidyverse and let's read in my dataset UN data.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=64)** Let's take UN data, let's print it to the console.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=69)** And we can see that we've got four columns containing birth data for different countries.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=74)** So this data is wide with respect to these columns.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=78)** Let's make it longer with pivot_longer.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=84)** And what we need to do in the first argument to pivot longer is specify the columns that need to be made long.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=90)** And we can do that with any tidy selection function.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=94)** So let's to begin with, say I want births_australia is to birth_sweden, which I do with a colon, and that's going to pull all of those four columns together into two new columns, name and value.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=113)** Now we might want to do this with a different tidy selection function.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=117)** Maybe not all of our columns are after one another.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=119)** They're not continuous in the dataset.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=122)** So let's swap this for contains("births").
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=129)** And so we get the same output as before, but our tidy selection is a little bit more explicit.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=135)** Now those new columns that were created are named name and value, but we can change that within the pivot_longer function.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=143)** So let's add names to country and let's set values to births.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=155)** And if we run that, we can see that those two columns, country and births get renamed.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=159)** Well they were previously name and value.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=161)** They are now country and births.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=164)** That country column though, it contained births_australia, instead of the actual name of the country, pivot_longer allows us to get rid of that through the names_prefix argument.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=179)** So if I use names_prefix, and I type here the string that we want to remove the prefixing string from the named columns.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=189)** And if we run that, we now get a really nicely formatted long dataset.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=195)** Let's store this as un_long.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=201)** And we can now throw this into our GG plot two charts to make a nice chart of our long dataset and we're done.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=210)** That's how Pivot Longing can be used to pivot real world dataset from wide to long format.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=216)** There are even more advanced things that you can do, if your column names contain multiple variables, which they will in real data sets.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=223)** There are really good examples of how to do that in the documentation.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=227)** But let's finish off by using pivot_wider to undo all of our work.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=232)** So let's get un_long.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=236)** We'll pipe this into pivot_wider.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=239)** We need to specify which columns and names come from.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=243)** So names come from country, our values come from births, and if we run that code, we can see now that we have the wide version of our data.
>
> **[4:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-pivot-longer-to-tidy-data-into-long-format?u=76281980&t=261)** And that is the full cycle between pivot_longer and pivot_wider.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (4), throw (1), from. (1)
> **Code Identifiers:** pivot_longer (6), pivot_wider (5), births_australia (2), names_prefix (2), un_long (2)
> **CLI Commands:** make (2)
> **Env Vars:** o2_o3b (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - for (1)

#### Cleaning column names with the janitor package
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=0)** - [Instructor] I need to show you both an annoying real world problem and a solution to that in the same video.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=7)** To do so, we are in 0204B, and we're taking a look at the clean names.r script.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=13)** Let's load the tidyverse on line one and we'll read in our dataset on line three.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=19)** And let's print that dataset to the console.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=22)** I want to take a look at those column names, and those are some pretty messy column names.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=28)** We've got spaces in them, we've got inconsistent capitalization, and this column here, source year one, we've got brackets in it as well.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=38)** It would be really frustrating to work with these columns as they are.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=43)** So if I were to pipe UN data into select and I wanted that country or area column, I would need to type back ticks.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=52)** So I would need to write country, or area, and select the column like that because of the spaces in the column names.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=63)** So there's a package that can help with this called janitor.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=67)** Janitor isn't in the tidyverse, so we need to install it separately.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=71)** And remember my general advice, when we're installing packages, restart your R session.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=78)** So let's do session, restart R.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=82)** Let's go and do install dot packages janitor.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=90)** And then we will change our script by loading janitor.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=95)** Here I'll run line one, two and three.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=100)** And now let's strip off that pipe for the time being.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=104)** And let's get UN data.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=107)** We've got those messy columns.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=109)** Notice here those brackets around the one.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=112)** And we're going to pipe the dataset into the function clean names from janitor.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=118)** And now look at those column names.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=120)** They are so much tidier.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=122)** There's consistent capitalization.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=125)** Everything is lowercase.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=126)** That first column, country or area, has underscores instead of spaces.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=131)** And that source year one column, those brackets have gone away.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=135)** So clean names in the janitor package standardizes the capitalization, it uses snake case to remove spaces, and it removes non alphanumeric characters.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=146)** But that source year one column, it's still a little bit annoying to work with.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=152)** So we're going to make use of another function from the tidyverse.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=157)** So we're going to make use of rename.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=160)** So rename.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=163)** Source year is going to be the new name of our column.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=167)** And then source year one is the old name.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=172)** If I run that code and look at my column names, we can see that we've got nice clean column names ready for wrangling, visualizing, or modeling our data.
>
> **[3:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=184)** Janitor is such an incredible valuable tool for when you're working with real world data sets.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cleaning-column-names-with-the-janitor-package?u=76281980&t=190)** Rename will allow you to rename individual columns, and if you need to do complex renaming, then the rename wave function from dplyr will help you out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3)
> **CLI Commands:** make (2)
> **Prerequisites:** install (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Tidying columns containing multiple values with separate_*()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=0)** - [Instructor] Let's take a look at a slightly more unusual and uncommon type of untidy data that you might come across.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=7)** This table contains information about the devices that customers have insured and it's untidy in two ways.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=16)** The address column contains multiple variables, the city and country the customer lives in.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=23)** In a realistic data set, there might be even more information here, including street address and zip code.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=30)** For devices insured column is different.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=34)** Instead of multiple variables, there are multiple values for the device insured variable.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=41)** Let's take a theoretical look at how we tidy these columns and then write the R code to tidy the actual data.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=50)** If we wanted to convert the location column into tidy data, we need to make the data wider with the separate wider functions.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=61)** I've color coded each of the customers so we can see those customers as we move from the untidy data to the tidy representation.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=70)** Whereas to make the devices insured column tidy, we need to make the data longer with the separate longer functions.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=80)** This process will be particularly relevant for you if you are working with survey data with multiple choice questions, but though of the situations that you might find yourself in when you come across similarly formatted data.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=96)** Now I've demonstrated why these functions are valuable.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=100)** Let's use them with some data.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=103)** So I'm in the O2_05b project with the separate.r script open.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=109)** I'm going to load vital Tidyverse line 1 and read in my data about customers on line 3.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=116)** And let's print that object to the console data customers.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=121)** And it looks exactly like that data set that we just saw in my slides.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=126)** So we've got location as a column that needs to be made wider and devices as a column that needs to be made longer.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=134)** So let's pipe data customers into separate wider.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=143)** And we can see that there are several different separate wider functions, we want to separate by a delimiter.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=150)** So in our location column, the city and the country are deliminated by a comma.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=156)** So let's use separate wider dilemma.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=160)** We need to specify in the first argument which column we are going to split or separate.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=168)** And then we need to specify add delimination.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=171)** So let's put a comma and then we need to name the new columns that come as a result of separating our location column.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=180)** So let's name these as city and country.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=188)** Now let's take a look at that output in the console.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=192)** That country column doesn't just contain the country.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=195)** It contains a space before the country name, and it's going back up.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=200)** We can see why that is.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=202)** So location column has both a comma and a space deliminating the city and the country.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=209)** So for this specific example, a delimination should be a comma and a space.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=217)** Now I can see where we have nicely formatted city and country columns.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=223)** So we finished making the location column tidy by making it wider, we need to, well, what I want to do now is I want to take that devices column and make it tidy by making it longer.
>
> **[3:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=237)** So we'll pipe our object into separate longer.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=244)** And here we only have two choices.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=246)** Delim or position.
>
> **[4:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=248)** We want to go with delim once again.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=251)** We're going to specify our column name.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=255)** So that's devices.
>
> **[4:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=257)** And we want to specify our deliminator.
>
> **[4:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=260)** And in this case, our deliminator is a semicolon without a space.
>
> **[4:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=265)** So if I run that code, we can now see that that customer, customer one in Columbia, has both a games console and a tablet.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/tidying-columns-containing-multiple-values-with-separate?u=76281980&t=275)** Nice, we now have a completely tidy dataset with each field corresponding to a unique variable thanks to the two separate functions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### List columns and nested tibbles
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=0)** - [Instructor] We need to talk about Star Wars or more specifically the Star Wars dataset and the tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=7)** I'm in O206B in the list columns and nesting.r script.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=12)** We're going to load the tidyverse, we'll load Gapminder as well.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=15)** We're going to use Gapminder for an advanced example of lists, columns, and nesting in a few minutes.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=21)** But let's start with this Star Wars dataset.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=25)** I'm going to make my console very wide before I print it to the console.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=31)** And I'll make my console a little bit bigger.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=33)** And here we can see on the far right-hand side of a dataset, we have these list columns.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=41)** We know they're list columns because it says that they're list underneath the column names.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=45)** But we can also select those list columns, using the select function and a tidy selection helper, where.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=54)** So we can use the tidy selection helper where, and we'll use the predicate function, is list, and that's going to return us just the list columns.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=66)** It's not too helpful.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=67)** So let's also return the name as well.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=70)** So we've got the names of characters, the films and the vehicles and the star ships they're associated with.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=77)** Let's say that we wanted to know how many films each character appeared in, according to this dataset, at least.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=86)** Well, we could use mutate.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=88)** Mutate is how we create new columns.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=91)** So we'll use mutate and new column is going to be called n_films.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=97)** And we're going to make use of the function lengths to tell us the lengths of the lists within films.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=105)** And that's going to give us that Luke Skywalker appeared in five films and C3PO appeared in six.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=111)** Again according to this dataset.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=114)** So this data is nested.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=116)** How about if we wanted to extract out all of the vehicles associated with these characters?
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=124)** Well we would need to make use of a nest.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=127)** So let's pipe this dataset into a nest and will un-nest the vehicles column.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=135)** And that's going to un-nest that from a list column into a nice long, formatted column.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=141)** So we can see that Luke is associated with a snow speeder and an imperial speeder bike, in this data set.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=148)** List columns definitely fall into a slightly more advanced part of the tidyverse.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=154)** But it's really important you know they exist in case you come across them, particularly as they're widely used in the Star Wars example dataset.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=163)** But there's some really advanced things that we can do with nesting.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=168)** And list columns are one example of nested columns.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=171)** We can have other nested columns including tables.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=175)** So on lines 15 through 17, I'm summarizing the Gapminder data set by continent and calculating the mean life expectancy per continent.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=186)** So if I print the object of a console, we can see the data is grouped by continent and we've got a mean life expectancy, per year, per continent.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=197)** Now what we can do is we can nest this data.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=202)** So nesting pulls in multiple columns into one column, and we can see that our new data column is a list column, and within that list are tables.
>
> **[3:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=215)** That's really useful if we wanted to generate many models.
>
> **[3:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=221)** So if we wanted to generate a model for the life expectancy for each of these continents, nested data helps us.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=230)** So I have some code here which is, which is fairly long, so lines 28 through 34.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=235)** What that does is it generates me many models.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=239)** So if I print this object for a console, we can see that for Africa, I've got a list column data, which contains my table, that's the original data, and there's a new list column model life expectancy, which contains the linear model object.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=255)** We can now take this model data, which is nested, we can pipe it into the code on lines 36 through 47.
>
> **[4:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=265)** That's going to extract out predictions for my model.
>
> **[4:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=268)** It's then going to pivot that into a longer format and eventually generate this ggplot2 chart here.
>
> **[4:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=277)** That allows me to compare the mean life expectancy per continent with my prediction for my linear model.
>
> **[4:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=285)** This is all thanks to nested data inside of tables.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/list-columns-and-nested-tibbles?u=76281980&t=290)** This is definitely on the advanced side of things, but it's so useful if you want to do many things within amalgamations of your data to nest it like this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), this. (1)
> **CLI Commands:** make (4)
> **Env Vars:** o206b (1), c3po (1)
> **Code Identifiers:** n_films (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Reading Data In and Out of the Tidyverse

> [↑ Back to Table of Contents](#table-of-contents)

#### Using projects to simplify file paths
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=0)** - [Instructor] If you've not written much R code before, you may not have met the setwd function.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=6)** I'm here to tell you, it is not your friend.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=9)** And if you have used the function before, I'm also here to tell you setwd is not your friend.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=16)** In this video, we need to write code that's going to read in this data file from the project directory 03_01b.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=24)** Let's try and do that by opening up RStudio and not an RStudio project.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=30)** What many our users will do is write setwd at the top and then they to find the directory that contains the the files that they want to read in.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=43)** So I'm going to use the Tab key to get autocompletion of my file directory.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=48)** I'm going to go inside of documents, inside of GitHub and use my Tab key for autocompletion after each slash and I'm going to go to learning-the-r-tidyverse, then I'm going to go to /03_01b, and then I'll press Tab one more time and press data.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=68)** And then if I were to run this code, it would set my working directory to this directory.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=74)** We have an immediate problem.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=77)** Your file path is almost guaranteed to not look the same as mine, which means if I were to save this code into the project files and for you to download it, you couldn't without modifying the path.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=93)** And that is the drawback of using setwd.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=97)** It makes your code non-reproducible because it requires manual tinkering of your code to work.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=105)** So instead, we recommend using RStudio projects.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=109)** And what we're going to do is we are going to turn the folder 03_01b into an RStudio project.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=117)** So to do that, we need a project menu.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=121)** And the project menu is up here in the top right-hand corner of RStudio.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=125)** We can see currently we are not in a project.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=128)** It says Project None.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=130)** If I click on this pull-down list, you can see I've been recording the other videos in this course, so all of the projects that I've accessed most recently are available to me.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=140)** But what we want to do is create a new project.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=143)** So let's select New Project.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=146)** We don't need to save this script file because there's nothing in it a value.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=150)** There's only the setwd function and it's no longer our friend.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=155)** So we'll press Don't Save.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=157)** And then what RStudio gives us is a little wizard.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=160)** It asks us, do we want to create a project from a new directory, in the existing directory, or version control?
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=167)** And for this example, we are going to use the folder that you downloaded 03_01b.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=173)** So we'll choose existing directory and then what we need to do is browse to that folder.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=179)** So let's browse.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=182)** I need to go inside of my documents, inside of GitHub.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=189)** Then I need to go inside of this folder here.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=192)** And this is my project directory.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=195)** So I'm going to select that folder, click Open and hit Create Project.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=202)** What that's going to do is it's going to create a little file inside of that folder with the extension .Rproj, which you can see in the Files tab.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=211)** So there's a new file in there named after the folder 03_01b.Rproj.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=217)** That's the RStudio project file.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=219)** So that was created when we clicked Create Project, and it also opened that project, which we can see in the top right-hand corner of RStudio where it says 03_01b.
>
> **[3:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=231)** Great, let's create a new script file.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=234)** So I'm going to go to File, New File, R Script.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=240)** And instead of starting my script with setwd, I'm going to load the tidyverse.
>
> **[4:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=250)** And I'm going to use the function read_csv.
>
> **[4:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=254)** And I want to read in my data file.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=256)** When I hit Tab, the file path autocompletion starts from the RStudio project directory.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=264)** So now, I can use my Down arrow key to go down to my un_data.csv file, hit Enter.
>
> **[4:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=272)** And when I run that code, it's going to read in that data file.
>
> **[4:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=276)** And if I saved this and I made it available to you, you could run this code without having to manually set the arguments that you provide to setwd.
>
> **[4:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-projects-to-simplify-file-paths?u=76281980&t=286)** So I hope that's persuaded you why setwd isn't your friend, and why RStudio projects provide you a more reproducible approach to code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (4)
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** read_csv (1), un_data (1)
> **Tools:** github (2)
> **File Paths:** un_data.csv (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using read_csv() to read CSV files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=0)** - [Instructor] If you want to read CSV files into R, then readr and its function read_csv() is your friend, and it's much better than read.csv().
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=11)** Let's jump into project 03_02b and see two very practical examples of why read_csv() is preferable to read.csv().
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=22)** So let's start by loading the tidyverse on line one, and we'll read in our data file, sample-data.csv, using read.csv(), and we'll assign that to the object data_baser.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=37)** Let's print that object to the console.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=41)** We can see it's a data frame because base R only creates data frame and not tables.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=46)** That's okay. Let's leave it as a data frame for now.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=50)** I want you to notice how sex for the third row is empty.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=55)** Let's compare that with the table produced by read_csv().
>
> **[1:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=61)** So I'll run the code on line six, and I'll print that object to the console.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=69)** And we can see this is a table, read_csv()-generated table instead of a data frame, but line three, the sex is no longer blank.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=78)** Instead, it contains an NA value.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=81)** That's important when we start to wrangle and understand the data.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=87)** Let's say I wanted to exclude rows when sex was unknown.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=92)** That's achieved with the filter() function.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=94)** So let's get data_baser.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=99)** Pipe it into the function filter().
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=102)** And we'll use the function is.na() on sex to return only those rows where the sex is NA.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=113)** There are no rows where sex is NA in that dataset because of how read.csv() works.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=120)** However, let me copy and paste this code and replace data_baser with data_readr.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=131)** That is going to return me that single row which does contain an NA value.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=137)** So what's going on?
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=139)** read_csv() is designed to automatically make intelligent decisions about how to handle missing data and lots of other important data-parsing decisions.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=151)** There's also so much flexibility in the function to correctly import your data.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=157)** The read.csv() function has some flexibility.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=160)** For instance, there is an na.strings argument, but it's more manual and less advanced.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=167)** The second benefit of read_csv() comes from its speed compared to read.csv().
>
> **[2:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=174)** Because read.csv() is built on base R, it's limited in what it can depend on, whereas read_csv() sits on top of highly optimized packages for quickly reading in large datasets.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=188)** I've a small example of this back in our project.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=191)** I've included a dataset that's 41 megabytes and includes 170,000 rows.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=198)** That's a fairly middling size dataset.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=201)** We need a way to measure how fast R does something.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=206)** I'm going to make use of the lovely tictoc package.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=209)** I'll load the package on line 16, and then we create a timer with tic(), and we give it a label.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=218)** So we're going to give it a label ("How long to wait?"), and then toc() ends the time and prints how long it took for that code to run.
>
> **[3:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=226)** So I'll select lines 18 through 20. I'll run that code.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=232)** Sys.sleep() sleeps for 1.5 seconds, and it took 1.504 seconds for this code to run.
>
> **[4:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=242)** Let's compare read.csv() and read_csv() with tictoc.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=249)** So let's run line 25 through 27 using read.csv().
>
> **[4:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=256)** And it took 0.925 seconds, so almost a second to read in the data file.
>
> **[4:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=263)** And then if we use read_csv() from the readr package, that ran much more quickly.
>
> **[4:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=270)** So that took 0.256 seconds.
>
> **[4:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=273)** That took almost a quarter amount of time as it took with the base R function.
>
> **[4:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=278)** So that's why I recommend using readr's function read_csv().
>
> **[4:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-csv-to-read-data-csv-files?u=76281980&t=284)** It's intelligent, highly customizable, and faster than the base R function read.csv().

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (9)
> **Code Identifiers:** read_csv (10), data_baser (3), data_readr (1)
> **File Paths:** read.csv (10), sample-data.csv (1)
> **Versions:** 1.5 (1), 1.504 (1), 0.925 (1), 0.256 (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** csv (1)
> **Analogies:** for instance (1)

#### Using read_excel() to read data from Excel files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=0)** - [Instructor] I've got more good news.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=2)** If your data is stored in Excel files, then the readxl package from the tidyverse is your friend.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=8)** Let's see how to use it in the 03_03b project.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=13)** I'm here in the read-excel-data.R script and I'm going to load the tidyverse, the core tidyverse.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=19)** And let's just once come back to the console output.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=24)** And we can see there that readr is loaded as part of a core tidyverse, but readxl isn't.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=30)** It's a specialized package, so we need to load it explicitly.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=35)** So let's do that, library('readxl').
>
> **[0:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=40)** And then, what I'm going to do is I'm going to use read_excel And we can see we have this function loaded from the read_excel package.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=48)** We're going to open a quotation and we'll use the Tab key to get the file path autocompletion, and we'll use the Down Arrow key to go to our Excel file.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=60)** And we'll run that code and that's going to import my data.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=65)** But a good question is, which sheet in my data is imported?
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=71)** Well, there's a function inside of the readxl package which comes to our aid here.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=77)** excel_sheets will tell us what sheets exist inside of our file, so let's use a quotation, the Tab key, and get our file path again.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=89)** And if we run that, we can see that there are two sheets in here, animal data and un data.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=97)** So, how would we go about importing in a specific sheet?
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=102)** Well, I used the same thing in the first argument, the file path to the sheet.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=107)** And then the second argument, I'll use the named argument sheet and we'll put "un data" and that's going to import that sheet from the Excel workbook.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=119)** And that's everything you need to know to start wrangling your Excel files with the tidyverse.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=125)** There is some customizability to the function that you can find in the documentation.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-read-excel-to-read-data-from-excel-files?u=76281980&t=129)** If your data is in Excel files, readxl really is your friend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3)
> **Code Identifiers:** read_excel (2), excel_sheets (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using haven to import from SPSS and other formats
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=0)** - [Instructor] Let's finish this chapter on reading data into the tidyverse by introducing the excellent Haven package.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=7)** This package is going to be your friend if you are working with data that's in SPSS, SAS or Stata data files.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=15)** The process is almost exactly the same for all file types, so we'll look at SPSS as it's a lot bit more common than the other two.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=23)** Let's do that in project O3_04b.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=27)** So inside of this project we have a script called SPSS data.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=31)** At the top we're going to load the core tidyverse and the specialized tidyverse package, Haven.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=38)** And we're going to work with a dataset I've pre downloaded from this DOI.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=43)** So line six, we're going to use read_SPSS to read in our .sav data file and let's print this data file to the console.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=57)** So I want to make this a little bit wider because I want to look at the marital column as well as other columns.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=65)** So let me print that again and here, can you see how many of the columns here have a strange type?
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=74)** So the ID column is DBL for double, for numeric, but a Work Stat column, that's double plus LBL, and that's true for marital as well.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=86)** So we've got many, many columns.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=88)** The majority of columns in this dataset in fact, are labeled.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=93)** Let's take a look at that Marital column in more detail.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=98)** So we'll pipe survey data into select and let's select that Marital column.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=105)** So we have in here a column that contains the numeric values one through five, but those values have got labels.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=115)** In the original question in the survey, most SPSS data comes from surveys.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=121)** The option three was labeled divorced.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=125)** And what we need is we need a way to be able to convert this from a labeled double vector into a factor so that we can visualize the data with ggplot2.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=137)** So let's pipe our table into the function mutate, so that we can modify that Marital column.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=148)** And we're going to make use of the function as_factor.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=153)** Notice that there is an as_factor function and an as.factor function.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=160)** We need as_factor from the Haven package, as it's designed to work with labeled vectors.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=169)** We'll give it the column, Marital, make my console slightly less wide, and let's run that code.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=179)** And now we can see that we get a factor column.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=183)** Those labels have disappeared and we have a column that we can use in our normal data wrangling within the tidyverse.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=190)** And we could visualize this column easily with ggplot2.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=194)** Now I'm going to move on to a little bit more advanced working with SPSS data files.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=199)** I mentioned that most data that you'll work with from SPSS, comes from survey data, and stored within the .sav file, is the original question text.
>
> **[3:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=212)** And I've provided you this little code snippet that's going to pull out the question label and the col_name from your data.
>
> **[3:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=221)** So if I run this code, we can see that col_name year has the question label, year of survey, and the work stack column has the question, "Last week were you working full-time, part-time, going to school, keeping house, or what?
>
> **[3:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=237)** That's really useful when you're working with survey data and you want the labels to the questions.
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=244)** Now another thing that you might want to do, is to convert all of the labeled columns into factors.
>
> **[4:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=252)** Here I've provided you code that I cover later in the course that uses a cross within mutate to target all columns that pass the tidy selection test is.labeled.
>
> **[4:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=267)** So if I run for code on line 23 through 25, we can see that my output table now has all of these columns as FCT as they were previously labeled.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=282)** And that is everything you need to know how to use the Haven package to read in your SPSS data files.
>
> **[4:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-haven-to-import-from-spss-and-other-formats?u=76281980&t=290)** And you can use this same process to work with SAS and Stata data files, too.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), pass (1)
> **Env Vars:** spss (7), sas (2), doi (1), dbl (1), lbl (1)
> **Code Identifiers:** as_factor (3), col_name (2)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Grouping and Summarizing Data with the Tidyverse

> [↑ Back to Table of Contents](#table-of-contents)

#### Grouping and summarizing data by column or row
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=0)** - [Instructor] Grouping and summarizing data are closely related activities, particularly in a tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=7)** We'll get extremely different summaries and groupings when we switch between grouping our data by row or column.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=15)** To compare the differences between column and row grouping, I'm going to use two data sets in this course, the "Star Wars" dataset and a tibble containing exam results for several students.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=27)** Our "Star Wars" data is in long format.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=31)** Any kind of summary that we'd want to make would be column-wise.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=34)** For instance, we might want to count the total number of characters by home world, or we might want the height of the tallest character from each home world, or potentially from each combination of home world and species.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=49)** Column-wise grouping is the most common type of grouping that you'll use with your data, and it's for default.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=56)** But sometimes we care about row-wise grouping.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=60)** Our exams data has been stored in a slightly wide format, which can be really useful.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=66)** By grouping the data row-wise, I could answer interesting questions such as what was the lowest score achieved each year, or the average score per year per student.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=79)** Let's get back to comparing column-wise and row-wise groups side by side.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=84)** For tidyverse defaults to column-wise operations, we can create quick columnar cross-tabulations with count, and we can insert our own columnar groups into our data with the group_by function or the .by argument.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=99)** And then once you've inserted your groups, you have three very different wrangling functions to use.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=104)** Mutate, summarize, and reframe.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=107)** In comparison, the only way to group data by row is to use the rowwise function in place of group_by.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=115)** It's much less common, but very, very powerful.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=119)** The last thing to mention before we start grouping and summarizing our data is you need to be careful.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=125)** If you don't explicitly use the ungroup function, then your data might still be grouped, and that could cause issues.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/grouping-and-summarising-data-by-column-or-row?u=76281980&t=133)** It's best practice to use ungroup as soon as you're finished with your groups and move on to the next part of your data wrangling journey.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), switch (1), default. (1), let (1)
> **Code Identifiers:** group_by (2)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Warnings:** be careful (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Cross tabulations with count()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=0)** - [Instructor] This video is about count, a function from dplyr that I love.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=5)** It's one of my first functions that I use when I'm trying to understand a new dataset.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=10)** Let's see how to use it in the 04_02b project.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=14)** So in the count.r script, we're loading the tidyverse on line one as per usual.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=19)** And then we're dealing with a new dataset here, billboard.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=23)** billboard contains the songs that enter the Billboard Top 100 through the year 2000.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=29)** Let's print it to the console and we can see that we've got the artist, the track title, and the date for the song entered for Top 100.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=39)** Let's count how many times each artist appeared in the dataset by piping billboard into count and we'll count by artist.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=50)** So we can see there are 228 unique artists in the dataset and we can see that most of them only appeared once.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=59)** How about if we wanted to order this dataset for most common artists to least common artists?
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=65)** We can make use of the argument sort in count.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=70)** So let's add sort is equal to TRUE.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=76)** So we can see that Jay-Z is the most common artist in this dataset.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=81)** One of the great things about count is that we can do cross-tabulations.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=85)** We can count by multiple columns.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=88)** So let me show that by copying this code, let's paste it, and I'm now interested to see did any artist have more than one song appear in the Top 100 in the same week?
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=103)** So I'm going to add date.entered, and I can see there are two artists, Whitney Houston and Limp Bizkit, that had two songs enter the Top 100 in the same week, which is great, but count froze throws away.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=124)** What about if we wanted to just add a count column to our data?
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=128)** Well, we can do that too with the function add count.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=133)** So let's get billboard.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=136)** Let's use select to select just for columns artist through date.entered.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=145)** So that's going to return us these three columns here and notice there are 317 rows in the data and let's pipe that into the function add_count and we're going to count how many times the artist appeared in the dataset, so the column that we'll specify is artist.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=167)** And then the name argument allows us to name the count column, so as the default value N, but we're going to give it the Value times_artist_in_top_100.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=185)** And when we run that, we get this new column times_artist_in_top_100.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=191)** That's everything I wanted to show you about count and its sibling add_count.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/cross-tabuations-with-count?u=76281980&t=195)** I think they're really useful when you're starting to get to grips with a new dataset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3)
> **Code Identifiers:** add_count (2)
> **CLI Commands:** make (1)
> **Env Vars:** true (1)
> **Speakers:** - [instructor] (1)

#### Column-wise groups: group_by() and mutate()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=0)** - [Instructor] We've just met the count function for cross tabulation, but a much more general tool is to combine together, group_by, and mutate for column wise grouping and summarizing of data.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=12)** Let's look at how we use these two functions together in the 04_03b project.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=18)** In the mutate.R script, we're going to load the tidyverse on line one, and we've got a little bit of code here, which is selecting some columns of interest from the Star Wars dataset, name, homeworld, species, and we're getting back the numeric columns as well.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=34)** How about we were interested in the character from each homeworld that was born earliest in the time period of the movies.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=45)** Well, we could pipe this into the function group_by to group the data by homeworld so that our new take calculations are going to be performed within groups.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=56)** So if we group_by homeworld, our table tells us it's now grouped, so we can see groups homeworld 49, the 49 unique homeworlds in the dataset.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=69)** And then we're going to pipe this into mutate.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=74)** We'll create a new column here called earliest_birth_year,
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=83)** and we'll use the function min on birth_year and let's run that code.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=90)** Now most of those values are NA.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=94)** Do you know why?
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=96)** in Base R, most of the stats functions are designed to return NA values if they see any NA values in a vector.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=106)** We can change that, so if we go into the min function, and we add na.rm = TRUE.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=115)** That's going to ignore any NA values.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=118)** So if we're looking at the data, we can see that for Tatooine, we don't know the birth year for the character R5-D4, so that's why we were getting NA values for all individuals from Tatooine because that one value was NA, but with na.rm is equal to true, we're going to get back the earliest birth year for Tatooine.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=140)** But we get a new error message here.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=143)** This error message is telling us that within the group "Aleen Minor", that's the second group when we've ordered groups alphabetically, there is no non missing value and so it's returning infinite.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=159)** When you are working with your real data sets, that's something else for you to consider.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=165)** But let's pull back and think more generally about group_by and mutate.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=170)** group_by works like counts in that we can create groups by multiple columns at the same time, and we do that with a comma.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=179)** So let's go here and add a comma.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=182)** So we're going to group_by homeworld and species.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=187)** We'll run that code.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=189)** And now we're going to get different values in those columns than we saw last time.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=194)** But I want to scroll up here and I want to show you that the output table is still grouped.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-mutate?u=76281980&t=201)** And this is your reminder that whenever you're using group_by, always remember to use ungroup when you're finished with your groups so you can carry on and not slip up by accidentally calculating values within group as opposed to across the entire dataset.

> [!info]- Semantic Content
>
> **Code Identifiers:** group_by (7), earliest_birth_year (1), birth_year (1)
> **Code Keywords:** function (4), let (4)
> **CLI Commands:** rm (2)
> **Env Vars:** true (1)
> **UI Navigation:** scroll up (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Column-wise groups: group_by() and summarize()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=0)** - [Instructor] In the previous video, we saw how group_by() and mutate() work together.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=5)** This video is going to look at mutate()'s sibling, summarise(), and how it works with group_by().
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=11)** Let's do that in the 04_04b project.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=15)** So in summarise.R script, we're loading the tidyverse on line one, and then we're selecting out three columns in the starwars dataset, species, homeworld, and height.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=26)** And let's say that we're interested in the tallest individual from each species.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=31)** We need to start answering that question with group_by() because we want to calculate statistics within the grouped species.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=39)** So we'll group_by(species), and then we'll pipe this into summarise(), and we're going to create a new column, max_height.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=52)** We'll use the function max() and the height column, and we're going to add na.rm is equal to TRUE to remove those NA values, and I'm going to run that code.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=64)** Now, did you notice a difference between how mutate() worked in a previous video and summarise()?
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=72)** Let's copy and paste that code and swap summarise() for mutate().
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=82)** mutate() creates or modifies columns within groups and it adds new columns to the far right-hand side of the table by default.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=92)** Whereas summarise(), summarise() throws away rows and columns which aren't used, so we end up with only the species and the max_height column.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=104)** Species was a grouping column and max_height is our calculation.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=109)** Now, we can add multiple columns to group_by(), so let's add homeworld here.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=117)** Just before I run that, notice that our output is a table, but it's not grouped.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=124)** When I add this second grouping to group_by() and I run the code, you can see that our output now is still grouped.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=132)** So, summarise() throws away one level of grouping but not all levels of grouping.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=138)** So this is yet another reminder, as soon as you are finished with your groups, use the function ungroup(), and that's going to guarantee that your data is no longer grouped.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=152)** One last thing to mention about summarise() is there is both the British English spelling of summarise() with an S and the US spelling with a Z.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=164)** So, if I copy this code and I paste it, and I've replaced that S with a Z, we'll get the same output.
>
> **[2:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=174)** The tidyverse is really friendly in this capacity.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=177)** All of the functions have both an American English and a British English spelling of functions.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-summarise?u=76281980&t=183)** Okay, that is everything that you need to know about using summarise() with group_by().

> [!info]- Semantic Content
>
> **Code Identifiers:** group_by (7), max_height (3)
> **Code Keywords:** let (4), function (2), default. (1)
> **Cross-References:** previous video (2)
> **CLI Commands:** rm (1)
> **Env Vars:** true (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Column-wise groups: group_by() and reframe()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=0)** - [Instructor] There's one last function designed to work with group_by(), and that's reframe().
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=5)** Let's see how to use this function in the 04_05b project.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=10)** In the reframe.R script, we're loading the tidyverse on line one.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=14)** In lines three through six, we're summarizing the starwars dataset after grouping by species and homeworld to calculate the mean height for each combination of species and homeworld.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=26)** Now, let's say we were also interested in calculating the density of these individuals.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=33)** So, let's add to summarise() a comma.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=37)** We'll create a new column, density, and we'll divide mass by height.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=45)** When we run this code, we get an error message or warning message.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=49)** It says, returning more or less than one row per summarized group was deprecated in dplyr version 1.1.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=57)** Please use reframe() instead.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=59)** So, summarise() is now designed to only work with functions that return one row per group.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=66)** mean() is a great example of that.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=69)** So, mean() is going to take a vector and return us just a single value that is the mean of that vector.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=75)** But our density column, that's got the column mass divided by height, so we're going to get as many rows per group as there are rows in that group.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=86)** So, let's copy this code, and let's paste it, and replace summarise() with reframe().
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=98)** When we run this code, we don't get any error messages and the only columns that are returned are species and homeworld, our grouping columns, and the columns that we create within reframe(), so we have mean height and density.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=113)** Let's also compare this with mutate().
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=121)** So if I swap summarise() for mutate(), then what mutate() does is mutate() creates those new columns, it puts them on a far right-hand side of the dataset.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=135)** So, reframe() is a slightly unusual function that sits halfway between mutate() and summarise().
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=144)** If you're watching this course and have never heard of reframe() before, that's okay.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=150)** It was only introduced in early 2023 and it fits a very particular niche.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=156)** Something that's unusual about reframe() is did you notice the groups went away?
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=162)** So if I rerun lines nine through 13, the output table only has the columns that were grouped and the columns within reframe(), but the groups have gone.
>
> **[2:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=174)** It is much more common to use mutate() and summarise() in your data wrangling.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-group-by-and-reframe?u=76281980&t=180)** reframe() provides a very generalizable tool that guarantees your data is ungrouped afterwards.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** group_by (1)
> **Versions:** version 1 (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Column-wise groups: Using the .by argument instead of group_by()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=0)** - [Instructor] I need to tell you about the .by argument and how you could use that instead of group_by if you wanted to.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=9)** Let's understand how this argument works by going to the project 04_06b and we'll open the by-argument.R script.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=18)** Let's load the tidyverse on line one.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=21)** In lines four through seven, we're making use of group_by and summarise to find the mean height of each combination of species and homeworld.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=32)** This is the traditional way to work with groups.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=36)** But recently the summarise, mutate, and the new reframe function got a .by argument.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=44)** Let's see that in action.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=46)** Let's copy this code, let's paste it, and let's add the argument .by.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=59)** And we need to give it a vector of the columns to group by, so we're going to group by species and homeworld.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=68)** Then, we can get rid of our group_by function core.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=72)** And now when we run this code, we're going to get the same output as before in terms of we will have the mean height per combinations of species and homeworld.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=85)** But by using the .by argument, we don't need to remember to use ungroup.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=93)** Our data is only grouped when summarise is running.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=97)** We don't have group_by and need to follow it with ungroup later up.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=102)** So why have these functions been equipped with a .by argument?
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=108)** Well, some tidyverse users don't like that they need to remember to ungroup after using group_by.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=114)** And very, very good point in some ways.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=117)** It does add an additional line to your code.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=121)** The .by argument simplifies that problem away.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=125)** However, if you were repeatedly using the same groups, you need to repeat the .by arguments each time.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=135)** I want you to know that both methods exist, so that you can understand and use code that uses either approach to columnized grouping.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/column-wise-groups-by-argument-instead-of-group-by?u=76281980&t=144)** If you need me to make a recommendation, I'd stick with group_by as it's the most commonly used approach and your code will be more quickly understood than if you use the .by argument, which is very new and seldom seen.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2)
> **Code Identifiers:** group_by (6)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** remember to (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Row-wise groups: rowwise() and c_across()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=0)** - [Instructor] We finished looking at how to do column-wise grouping within your data in a tidyverse.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=6)** It's time to look at row-wise grouping with row-wise and c_across.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=11)** Let's see how to use these functions and do row-wise grouping in the project 04_07b.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=18)** In our row-wise script, let's load the tidyverse on line one and we'll read in our dataset exam_data on line three.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=27)** Let's print that dataset to the console and take a look at it.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=32)** So what we have is we have some students and we have the exam scores on various different subjects across different year groups.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=43)** Now, what if we wanted the average result by row, so for each student within each year, instead of across the columns?
>
> **[0:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=52)** Well, we need to start with row wise.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=56)** So we pipe our data into the function rowwise.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=59)** And when we run this, scroll to the top of the tibble, we can see that our tibble is now row-wise grouped.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=69)** We're now going to use mutate to create a new column on the far right-hand side of the dataset.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=76)** So we'll use mutate and our new column is going to be max_score, so that's going to be the maximum score for each row.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=86)** And we're going to use the max function and we're going to specify the range of columns using score_music:score_science.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=105)** I'll run that code.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=107)** And now we can see we've calculated the max score within each row.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=113)** But how about if our columns weren't in order?
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=117)** We can make use of tidy selection in row-wise operations for the use of c_across.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=126)** So let's copy this code, let's paste it, and inside of max, we're going to call the function c_across.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=140)** Within c_across, we can now use tidy selection functions to target specific columns.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=147)** Let's target those columns that starts_with score_.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=158)** And now I'll run that code and we're going to get the same output as before, but c_across has allowed us to use tidy selection to more neatly target those columns that we're interested in.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=171)** Okay, so now I've calculated the max score within each row.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=176)** How about if I wanted to find max score within each subject across all of the year groups?
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=185)** Well, I need to combine together group_by and c_across.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=190)** So let's do that. Let's get exam_data.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=194)** Let's pipe that into group_by and we'll group by student_id.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=199)** And then we'll pipe this not into mutate, summarize, as all we're interested in that max score column.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=207)** So we'll use summarize max_score, we'll call max, and we'll use that function c_across again so that we can target row-wise columns with tidy selection functions.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=223)** And we'll use starts_with score.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=230)** And when we run that, we now get a tibble that gives us the maximum score for each student across all of those year groups.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/row-wise-groups-rowwise-and-c-across?u=76281980&t=239)** And that's everything that you need to know about row-wise grouping and how to combine row-wise grouping with columnar grouping for the use of c_across within group_by.

> [!info]- Semantic Content
>
> **Code Identifiers:** c_across (8), group_by (3), exam_data (2), max_score (2), starts_with (2)
> **Code Keywords:** let (9), function (4), this, (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### Remember to ungroup()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=0)** - [Instructor] Let's finish off this chapter with a reminder.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=3)** Don't forget to ungroup your data.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=6)** Let's go over to project 04_08b.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=10)** and within our script, ungroup.R, we're going to load the tidyverse on line one.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=15)** We'll read in our dataset line three.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=17)** Five through seven, we're going to summarize our dataset.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=21)** And line nine, let's print out this dataset.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=25)** So what do we have here?
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=27)** We've got student ID, year group, and average score.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=31)** So the average score has been calculated for each student within each year group.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=37)** Now on line 11, I've written some code to find the maximum score across the data.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=44)** So which student had the highest score across all of the year groups?
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=49)** So let's run that code on line 11 through 12.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=54)** And I get back a result for every single student.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=58)** I get back a single result for each student because my data is still grouped.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=64)** The tibble says it's grouped by student ID, and we have five groups, so we've forgotten to ungroup our data.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=72)** Where in our code should we have put ungroup?
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=75)** We should have put ungroup here after summarize so that our assignments, our assigned variable, our assigned object, student_year_averages, is ungrouped.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=89)** So if I rerun this code now and I rerun that code lines 12 through 13, I'm going to get back one student, the single student who scored the highest average score.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/remember-to-ungroup?u=76281980&t=103)** And that is why you need to remember to always use ungroup when you're finished with your groups.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **CLI Commands:** find (1)
> **Code Identifiers:** student_year_averages (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find maximum penguin dimension by island
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=0)** - [Instructor] To solve this challenge, you'll need to use both a tidyverse and palmerpenguin packages.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=12)** To correctly solve this task, your output must contain exactly one row after following these steps.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=19)** calculate the maximum dimension of penguins grouped by islands and species.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=27)** Filter the results to show only those values greater than the mean of the return values.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=35)** If your output doesn't contain one row, then make sure you remember to follow all of the advice from this chapter on grouping.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=45)** You'll find in the project 04_09 at script challenge.R, which will load the packages you need and start your off with the penguin dataset.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=56)** Good luck with the challenge.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-maximum-penguin-dimension-by-island?u=76281980&t=58)** I'll see you in the next video with my solution to the problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Find maximum penguin dimension by island
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=0)** - [Instructor] Okay folks, let's look at solving this challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=8)** We need to find the maximum dimension of penguins grouped by island and species, and then filter those results to show only those values greater the mean of the max dimension.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=21)** Let's go over to project 04_10b to take a look at writing that code.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=26)** So in our solution.r script, we're going to load the tidyverse and the palmerpenguins package, which contains the penguins dataset.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=35)** If we take a look at that dataset, each individual row represents a penguin, we have the species and the island that that penguin belongs to.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=43)** And then we have three columns that contain the dimensions for the penguin: bill_length, bill_depth, and flipper_length.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=51)** So the first thing to do is to group the data by species and island.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=60)** And then we want to choose between mutate, reframe, and summarize.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=66)** All we want is the max dimension by species and island.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=71)** We don't want any of the other columns.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=73)** So we're going to make use of summarize, I'll create a new column, max_dimension.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=82)** We'll use the function max.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=84)** And we're doing a row-wise calculation here because we're calculating the maximum for each individual penguin, which corresponds to each individual row in the data.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=95)** So we make use of c_across to be row wise.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=98)** And then we can use any tidy selection function that we want to target our columns of interest.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=105)** Let's go with ends_with_millimeter.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=111)** I'm going to run that code and I get back now the maximum dimension for each combination of species and island, but I've got NA values in there.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=120)** So let's remove those.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=123)** I'm going to make sure that I add the na.rm argument to right function.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=128)** So I'm going to put my cursor inside of max.
>
> **[2:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=131)** It highlights the closing bracket.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=134)** I'll add a comma here, I'll add na.rm is equal to true.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=139)** I'll run that code. That's great.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=142)** And let's store this as penguins_max_dimensions.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=150)** And let's take that dataset and let's filter that for max_dimension is greater than the mean of max_dimension.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=163)** And when I run that code, I get two rows.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=167)** But in the challenge, I said you should only get one.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=171)** What's happening here?
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=173)** It's those pesky groups again.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=175)** We haven't ungrouped our data and we can see that in what's been to the console.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=180)** It says groups species one.
>
> **[3:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=182)** We're getting those values that are greater than the mean of the max dimension within each grouping.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=189)** So what we need is to add ungroup here.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=196)** And now if we rerun lines 11 and 12, we get back just this individual record, Gentoo Biscoe 231.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=206)** How did you find that challenge?
>
> **[3:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-maximum-penguin-dimension-by-island?u=76281980&t=207)** It's a little bit abstract, but if you follow the solution, you've understood a fairly advanced topic in the tidyverse, combining together column-wise and row-wise grouping.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), abstract (1)
> **Code Identifiers:** max_dimension (3), bill_length (1), bill_depth (1), flipper_length (1), c_across (1)
> **CLI Commands:** make (3), find (2), rm (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Important Packages and Functions in the Tidyverse

> [↑ Back to Table of Contents](#table-of-contents)

#### ggplot2 for beautiful data storytelling
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=0)** - [Instructor] It's difficult to undersell how powerful ggplot2 is for creating data visualizations.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=6)** It's such a flexible tool for exploratory data analysis and allows us to create beautiful and rich data stories.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=14)** I'm going to try to do the package justice in this video, but I strongly recommend taking a dedicated course from the LinkedIn Library to understand just how flexible the package is and exactly how it works.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=27)** But let me show you what I can in this video by going to project 05_01b, and we're going to open the ggplot2.R script.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=37)** Let's load the tidyverse on line one and let's load the fivethirtyeight package.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=43)** The fivethirtyeight package contains a dataset called bechdel.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=47)** Let me print that to the console.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=50)** Let's make my console slightly bigger.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=52)** This dataset contains information about the profitability of over 1,700 movies and whether or not they passed the Bechdel test.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=62)** The Bechdel test is a media metric of whether movies contain women with agency, and we're going to visualize the dataset a little bit with ggplot2.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=72)** So to do that, we need to pipe bechdel into ggplot().
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=76)** If we run that, that's going to give us a gray rectangle, and that is the start of our ggplot2 chart.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=84)** The next thing that we need to do is we need to create aesthetics.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=88)** Aesthetics are the bindings between the columns in our data and the coordinate systems of the chart.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=96)** Let's create an X aesthetic or coordinate system, and that's going to be the budget_2013 column.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=103)** And the Y aesthetic is going to be the domgross_2013, domestic gross in 2013 dollars.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=111)** Let me run that code.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=112)** That gray rectangle now has got an x-axis and a y-axis, and we want to start adding layers to our chart that use those aesthetics.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=123)** We add layers to ggplot2 charts with a plus operator, not with the pipe.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=129)** And the elements that we add to our chart that make use of our aesthetics are called geoms.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=135)** There's lots and lots of geoms as you can see.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=138)** The one that I want is geom_point(), so that creates us a scatterplot.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=144)** And now, what I want to do is I want to color these data points by the year that the movie was made.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=151)** So, let's go inside of geom_point() and let's add an aesthetic just of those points and let's set the color of those points equal to a year column.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=163)** Now, I'm making use of the British English spelling of colour which has a U in it, but ggplot2 also supports the American English spelling, which is color without a U.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=175)** You can use either.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=176)** I'm going to use colour with a U as that's what I'm more familiar with.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=181)** Let me run this code and that's going to give me a default scale for that aesthetic.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=189)** And it's not the best in the world, so let me swap that.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=194)** Let me change scale color.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=196)** And again, you can see the American English spelling and the British English spelling here.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=202)** So let's use scale_colour_viridis and let's use bins, which is what the b stands for.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=211)** And if I run that, we can see the data points now are colored by decade.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=216)** Okay, what else could I do with this chart in ggplot2?
>
> **[3:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=220)** Well, I could facet it by the clean_test column, so let's go and do that.
>
> **[3:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=226)** Let's add a plus, facet_wrap, a tilde, and then a clean_test column.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=236)** And I've now started to get a visualization that allows me to explore the data.
>
> **[4:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=243)** ggplot2 is such an exceptional tool for exploratory data analysis.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=247)** It's so fast to quickly prototype and explore your data.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=251)** And without too much effort, we could finesse this chart to make something that's truly beautiful and impactful.
>
> **[4:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=258)** What makes ggplot2 really powerful is we can extend ggplot2 with a huge number of packages.
>
> **[4:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=266)** So, the ggplot2 extensions gallery contains more than 133 extensions which are designed to work with ggplot2 to help you in your exploratory data analysis or further finesse your data stories.
>
> **[4:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=281)** I want to show you how we could combine together three packages.
>
> **[4:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=286)** Let me go back to my script.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=288)** So I've made use of ggrepel, hrbrthemes, and ggtext.
>
> **[4:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=296)** And I'll run lines 23 through 25.
>
> **[4:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=299)** And then, I've got quite a long visualization code here, in lines 27 through to 85.
>
> **[5:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=308)** And if I run that code, I get here a chart that uses ggtext for our colored title, ggrepel for our labeled points.
>
> **[5:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=320)** so those labels are designed to automatically repel one another so they're not overlapping.
>
> **[5:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=325)** And the hrbrthemes has affected the style of the chart as well.
>
> **[5:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=331)** This chart maybe has a little bit too much going on for it, I think, for it to be useful as a data story, but I wanted to show you just how much we can do with ggplot2 with some extensions.
>
> **[5:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=344)** One last extension to tell you about is gganimate.
>
> **[5:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=350)** gganimate allows you to make animated GIF with ggplot2.
>
> **[5:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=355)** And I have one pre-made in the 05_01b folder.
>
> **[6:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=360)** So, here in the folder we can see gg_animated.gif and if we open that, we can see that the chart animates the data points over time.
>
> **[6:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=369)** We can see them come in.
>
> **[6:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=371)** Now, ggrepel, I've deliberately left this chart, so ggrepel is automatically trying to make sure that those labels aren't overlapping as different frames of the GIF are added.
>
> **[6:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=383)** We could customize that away, but I really wanted you to understand what ggrepel is doing first in ggplot2.
>
> **[6:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=391)** And that's everything I want to cover in this short video about why ggplot2 is such a powerful part of the tidyverse.
>
> **[6:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=400)** A previous video in this course described why ggplot2 relies on tidy data.
>
> **[6:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/ggplot2-for-beautiful-data-storytelling?u=76281980&t=407)** These two videos should hopefully give you all the encouragement you need to go and watch dedicated courses on ggplot2 in the LinkedIn Learning catalog.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), for. (1)
> **Code Identifiers:** geom_point (2), clean_test (2), scale_colour_viridis (1), facet_wrap (1), gg_animated (1)
> **CLI Commands:** make (5)
> **Env Vars:** gif (2)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (1), stands for (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### stringr for friendly string manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=0)** - [Instructor] The stringr package is an incredibly useful and powerful tool for wrangling strings and even tidying them up for data presentation.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=8)** Let's look at some of the things that we can do with stringr in the 05_02b project.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=14)** Here I am in the stringr.r script.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=17)** We're going to load the tidyverse on the first line, and we're going to work with a billboard dataset.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=24)** The billboard dataset contains information about the top 100 songs for the year 2000, and I'm going to select out the artist and the track columns.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=36)** And let's say I'm interested in those tracks that contain the word love.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=40)** Love is a really common title in pop songs and the year 2000, the top 100 was very much populated by pop songs.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=49)** So, we use the function filter from the b.R package to filter data by row contents.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=57)** So we'll use filter, and then we'll use str_detect from the stringr package.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=66)** We're going to detect within the track column the string, L-O-V-E, and let's run that code.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=76)** Now we only get back one song, and if we look at the title for that song, it doesn't contain the word love.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=84)** Instead it contains the word clover.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=88)** So stringr is great, but you do need to know a little bit about regular expressions to catch exactly what you want from your data.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=98)** I want to show you another function in stringr.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=101)** Let me copy this code. Let's paste this.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=106)** And let's say that I'm only interested in those songs that begin with the word love.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=112)** So I can swap str_detect for str_starts.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=118)** Now if I've run that code, I'm not going to get back any songs.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=122)** Why is that?
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=124)** Well let's take a look at the billboard dataset.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=128)** The track column is in title case, so the first letter of love is always going to be a capital letter.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=135)** Now what I could do is I could change my string here, so that's a capital L, but a good data science thing to do is to lowercase all of my column.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=146)** So I'm going to use str_to_lower, again, from the stringr package.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=153)** There I can see all three songs in a billboard dataset that start exactly with the word love.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=160)** Let's go back here.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=162)** If I was interested in finding those songs that contain the word love in isolation, then I would need to make use of a little bit of regular expression knowledge, or RegEx knowledge.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=175)** //b means word boundary.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=181)** So we're looking for the start of a word, love.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=185)** We're looking for the end of a word //b.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=189)** Let me use str_to_lower here, and that's going to return me all 19 songs that contain the word love somewhere in a track title, not right at the beginning, because //b isn't going to allow for the start of a string.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=209)** So stringr is really good for wrangling strings, but there's a little bit about RegEx that you need to know to finesse using stringr.
>
> **[3:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=219)** But I mentioned that we can use stringr for formatting our charts.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=223)** Let's go down to the code I've provided here, starting on line 19, and that's going to make a ggplot2 chart of some of the GSS cat data sets.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=234)** Now those labels on my y axis, I would like those to be in title case.
>
> **[4:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=240)** So I can use str_to_title (indistinct) around partyid.
>
> **[4:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=248)** And if I run that, I can see I've now got nice title case titles for my y axis.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=255)** I would really like, where it says end comma near rep and end comma near dep, I'd really like to replace that comma with a comma and a space.
>
> **[4:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=266)** I can use another function from stringr for that.
>
> **[4:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=270)** So I'll go inside of here, and I'll add str_replace.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=275)** The first argument of str_replace is the thing I want to target, and I want to target a comma, and I want to replace that with a comma and a space.
>
> **[4:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=287)** And the only thing I'm missing now is a closing bracket for that new function call.
>
> **[4:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=292)** If I run that code, I've now got nice labels for my bar chart.
>
> **[4:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=297)** Can you notice though that the label for the actual y axis isn't that great?
>
> **[5:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=302)** That's okay, let's go and fix that.
>
> **[5:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=305)** So I'll add a plus labs(y = "Party ID"), and that's going to give me a nice usable chart.
>
> **[5:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=315)** So, stringr is great for filtering text.
>
> **[5:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=318)** It's also great for formatting your text in ggplot2 charts.
>
> **[5:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=322)** One last thing I wanted to show you for data processing, this is a little bit more advanced, but I think it's useful to cover.
>
> **[5:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=330)** str_extract allows us to extract patterns from text.
>
> **[5:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=336)** So I have a data file here, data-file_2005.csv, and I want to extract that year.
>
> **[5:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=342)** And the year matches the pattern of four numeric characters following one another.
>
> **[5:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=349)** So if I run that code, that's going to print for consult 2005.
>
> **[5:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=354)** Now in this project, there's a data folder which contains many files.
>
> **[5:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=359)** Let's go and look at that, so files, data.
>
> **[6:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=363)** All of those data files contain the year in the file name.
>
> **[6:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=368)** And what I would like to be able to do is import that data and take the file name out and insert that as a column into the data.
>
> **[6:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=377)** That's possible by combining together stringr and the per package.
>
> **[6:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=383)** So the first thing to do is to use list.files to get my data files, and that's going to generate me a vector data files.
>
> **[6:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=392)** And then I want to show line 35, but I can apply str_extract to all of those data files to show that year coming out.
>
> **[6:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=402)** I'm going to load the janitor package.
>
> **[6:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=404)** You may remember the janitor package from earlier, contains a really nice function, clean names for cleaning up column names.
>
> **[6:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=412)** Lines 40 through 51, I'm creating a function called read_and_clean, which reads in a data file.
>
> **[7:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=420)** It uses str_extract to extract the year, and it uses mutates on line 46 to insert that year as a column.
>
> **[7:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=430)** So let's run that code in lines 40 through 51 and then lines 53 through 57.
>
> **[7:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=439)** I'm making use of map from the per package to apply my function across all of my files in the data folder.
>
> **[7:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=448)** And then I'm using bind_rows to join all of that together.
>
> **[7:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=451)** Let's run that code.
>
> **[7:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=454)** Let's print data_gapminder_data to the console, and now we can see that we've got that nice column there year, which contains the information from the file path.
>
> **[7:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=466)** So this video shows how stringr can be used for filtering data.
>
> **[7:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/stringr-for-friendly-string-manipulation?u=76281980&t=471)** It can be used for tidying up your ggplot2 charts, and you can combine it together with all of the functions in the tidyverse to do some really nice data wrangling and data cleaning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (7), this. (1), case, (1), case. (1)
> **Code Identifiers:** str_extract (3), str_detect (2), str_to_lower (2), str_replace (2), str_starts (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), cat (1)
> **File Paths:** data-file_2005.csv (1)
> **Env Vars:** gss (1)
> **Speakers:** - [instructor] (1)

#### lubridate for manipulating dates and times
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=0)** - [Instructor] The lubridate package from the Tidyverse contains a full suite of tools for wrangling, cleaning, and formatting both dates and times.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=9)** Let's jump into some of the things that you can do with the package in the 05_03b project.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=15)** Here I am in the lubridate.r script and I want to load the core tidyverse on line one, and I want you to concentrate on the output in your console.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=27)** Can you see lubridate?
>
> **[0:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=29)** If not, you might be using an old version of the Tidyverse.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=34)** lubridate was only added to the core tidyverse in 2023.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=39)** So if you can't see lubridate there in the output, please use instore.packages to update for Tidyverse, restart R and then load the Tidyverse again.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=50)** We're also going to load the janitor package in line two and we'll make use of the clean_names function on line five.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=58)** So let's run line four and five to read in my insurance data.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=62)** Let's print that to the console.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=64)** There are lots and lots of dates in the data.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=68)** Now, these dates have different formats.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=71)** quote_date is the new American date format.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=74)** We've got month, day, year.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=77)** Policy start dates and policy end dates are in the non-American date format.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=83)** That's day, month, year.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=85)** lubridate contains functions for modifying that.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=89)** So what we're going to do is we're going to take our dataset and we're going to pipe it into the mutate verb, which we always use in the Tidyverse for modifying existing columns.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=100)** So let's get quote_date, and let's use the function mdy for month, day, year, and let's give it quick date.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=112)** Let's run that code and we can see now that quote_date column is of the type date instead of character.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=119)** Let's do the same for the other columns.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=123)** So policy_start_date, we're going to use the function dmy because it's date, month, year on policy_start_date.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=137)** And for the last thing, policy_end_date, we're going to make that equal to dmy, day, month, year for policy_end_date.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=149)** Let's run that code and we can see those columns now are also in the date format.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=155)** Note those NA values are still NA values.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=160)** lubridate doesn't just contain these functions for wrangling string dates into dates.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=166)** We can also do date arithmetic.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=169)** Let's say that we were interested in the policy length, so let's pipe this into mutate.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=177)** Let's create a new column, policy_length_days.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=183)** And what we're going to do is we're going to take policy_end_date and we're going to subtract policy_start_date.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=192)** Let's run that and we get back a duration column.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=196)** So that's the policy_length and that is calculated thanks to the lubridate package.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=203)** One last thing, I want to send folks a policy renewal reminder five weeks before the policy end.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=210)** That's something else that I can do with lubridate.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=214)** So let's add a comma here to mutate, so another argument to mutate, and I'm going to create a new column renewal_reminder_date.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=227)** What I'm going to do is I'm going to get the policy_end_date, and I'm going to subtract off weeks five.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=236)** so five weeks before that date, I want to send out my reminder.
>
> **[4:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=241)** Let's run that code, and I've got that column now.
>
> **[4:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=245)** It's just chopped off.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=246)** Let me make my console a little bit wider.
>
> **[4:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=250)** Let's run that code again.
>
> **[4:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=252)** And now I can see that new renewal_reminder_date.
>
> **[4:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=256)** This is just scratching the surface of what's possible with lubridate.
>
> **[4:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/lubridate-for-manipulating-dates-and-times?u=76281980&t=261)** It will make your life so much easier during a Tidyverse for any and all date/time operations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (3)
> **Code Identifiers:** policy_end_date (4), quote_date (3), policy_start_date (3), renewal_reminder_date (2), clean_names (1)
> **CLI Commands:** make (4)
> **Speakers:** - [instructor] (1)

#### forcats for manipulating factors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=0)** - The forcats package is part of a core Tidyverse and it simplifies absolutely everything about working with factors.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=9)** It will change your life compared to base R, however, you might well be completely new to factors.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=16)** So let's get to grips with both factors and the forcats package by opening up the 05_04b project.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=25)** Here I am in a forcats.r script.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=27)** We're going to load the Tidyverse on line one and then I've got some code here to make a ggplot2 chart of the M sleep dataset and it's going to show me the different kinds of diets of the animals in the M Sleep dataset.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=44)** Now what determines the order in which the bars are displayed?
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=49)** Do you know?
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=51)** Well, let's print M sleep.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=54)** Well, let's actually print this part of a code of a console.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=58)** So we can see that this tibble contains a vore, an N column, and a vore column is a character column.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=65)** So all that ggplot2 can do is use character order to determine the order of the bars.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=73)** So the bars are shown in reverse alphabetical order.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=76)** NA is a little bit special, so NA is there at the end.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=82)** So if in ggplot2 we want to change the order in which bars are displayed or the order in which any genomes are displayed, we need to make use of factors.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=95)** So let's put ourself here and let's add mutate because we want to modify the vore column from a character column into a factor column.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=108)** So let's write vore equals and then fct_, this accesses the functions and the forcats package.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=117)** So all these functions start with fct_ for factor.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=121)** We are going to make use of a really useful function fact_reorder().
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=126)** This allows us to order one column by another column.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=132)** So we're going to reorder vore by n, and let's run that code and what we get back is a factor.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=142)** Now what I want to do is I want to pull that factor out so I can take a look at it.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=148)** So I'm going to use the pull() function from the Tidyverse, which pulls a column out as a vector.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=154)** So let's pull out that column and we can see that that's a factor.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=159)** So a factor is a type of data which is made available to us thanks to base R.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=165)** So just like base R provides this data frames and data frames are crucial for doing data science inside of R, factors are also really crucial to what makes R such a popular programming language.
>
> **[2:59](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=179)** So inside of this factor we have the observations carni, herbi, insecti, omni, and we have the order insecti, carni, omni, herbi.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=191)** So let's drop out that pull and pipe add dataset now containing a factor into ggplot2.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=200)** And now what we can see is our bars have been reordered so that we've got the largest bar at the top except for that NA.
>
> **[3:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=209)** NA is a little bit special. So let's handle that.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=214)** Let's make use a mutate here.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=216)** Let's use vore and let's use fct_explicit_na.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=224)** This is the function I used to use.
>
> **[3:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=227)** So fct_explicit_na has been renamed recently.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=230)** We can see it's been deprecated and it's been renamed to this really long function name So fct_na_value_to_level..
>
> **[3:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=238)** So fct_na_value_to_level.
>
> **[4:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=246)** So we'll take vore and we're going to replace the NA with unknown diet.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=255)** Let's run that code and we can see that we get a factor back and that NA has been replaced with unknown diet.
>
> **[4:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=263)** We haven't used factory order yet, so those levels haven't been modified.
>
> **[4:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=267)** That's okay. Let's add a pipe here.
>
> **[4:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=271)** Now let's run all of that code and we can see we've got a ggplot2 chart now that goes from longest bar to shortest bar.
>
> **[4:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=279)** So factors are how we control the order in which things are displayed.
>
> **[4:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=284)** And a ggplot2 chart and we can make use of forcats to modify the levels inside of factors.
>
> **[4:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=291)** Now that's working with a factor we've created from a character column.
>
> **[4:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=296)** How about if you already have a factor?
>
> **[5:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=300)** Well, I've got here another ggplot2 chart making use of the GSS CAT dataset.
>
> **[5:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=307)** In here I can see that I've got income level and my Y axis and I've got lots and lots of other.
>
> **[5:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=317)** So I've got these different income levels and then I've got not applicable, refused, don't know, no answer.
>
> **[5:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=325)** It'd be really useful if I could combine all of those together into one other category.
>
> **[5:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=331)** And forcats makes that easy for the use of the function fact collapse.
>
> **[5:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=337)** So let me add the select verb here.
>
> **[5:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=342)** So I'm going to select just the R income column.
>
> **[5:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=347)** bring my console around a little bit.
>
> **[5:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=350)** And then what I want to do is I want to mutate this.
>
> **[5:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=354)** I want to modify our income and I want to use fct_collapse.
>
> **[6:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=360)** I want to collapse that factor R income.
>
> **[6:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=362)** It's already a factor.
>
> **[6:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=365)** And what I want to do is I want to create a new level called Unknown income.
>
> **[6:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=374)** And I want to give this a vector.
>
> **[6:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=377)** And so if I see the value not applicable, move that over again.
>
> **[6:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=385)** I want to replace that with unknown income.
>
> **[6:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=388)** If I see no answer, the same, don't know, and also refused.
>
> **[6:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=403)** So if I run this, we can see now I've got on those three, four, and five unknown income.
>
> **[6:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=410)** That's great.
>
> **[6:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=412)** We can add a pipe here to rejoin this with the rest of the pipe chain that's going to count the different levels of our income.
>
> **[7:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=420)** And then pipe it into ggplot2.
>
> **[7:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=422)** And we get back this really nice ggplot2 chart here with the levels of income at the top from smallest to largest.
>
> **[7:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=430)** And then we've got unknown income at the bottom.
>
> **[7:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=433)** So forcats is an excellent package for manipulating factors.
>
> **[7:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/forcats-for-manipulating-factors?u=76281980&t=438)** Factors are part of base R and we use factors in ggplot2 to order the elements of the chart.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (5), this. (1), this, (1)
> **CLI Commands:** make (5), cat (1)
> **Code Identifiers:** fct_explicit_na (2), fct_na_value_to_level (2), fact_reorder (1), fct_collapse (1)
> **Definitions:** is a  (5), is an  (1)
> **Env Vars:** gss (1), cat (1)
> **Analogies:** just like (1)
> **Speakers:** - the (1)

#### purrr for doing many things like iteration
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=0)** - [Instructor] The purrr package is the most tricky of the Tidyverse core packages to explain.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=5)** At its simplest, purrr is for doing many things repeatedly.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=10)** A little bit more specifically, purrr provides tools for iteration and the iteration is controlled from a functional programming paradigm.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=20)** Let's take a look at what that means practically by opening up the 05_05b project.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=27)** So I'm in the purrr.r script here and let's load the Tidyverse on line one and the janitor package line two.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=36)** And what I want to do is I want to read in the data files, in the data folder.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=42)** Let's take a look at those data files so we can see we've got many data files and we've got within the path of the data file the year that the data corresponds to.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=55)** So in order to read this data in, I need the file paths.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=60)** So let's use list.files.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=65)** We'll look inside of a data folder and we want to return the full names to full paths to these files.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=72)** So full.names is equal to true.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=75)** If I run that, that's going to generate me a vector of the 12 data file data paths.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=81)** Let's store that as vec data files.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=87)** And now I want to take vec data files and I want to map it across the function.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=94)** So map is from the purrr package, it allows us to apply a function across a list or a vector of arguments.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=103)** The second argument is a function which we apply across those elements.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=108)** And the is easiest way to write a function is with the tilde notation.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=113)** So I'm going to write ~read_csv and then to refer to the elements that we're currently iterating over, we are going to use .x.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=126)** So if I run that code, that's going to read in each of those data files and it's going to output me a list of data files.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=136)** So this 12th tibble here, this says that a 12th element from that vector.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=143)** One of the really nice things about purrr is there's several flavors of map.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=148)** So if I wanted the end output of my map to be a data frame, I can make use of map_df and if I run that, it's going to concatenate, it's going to bind all of those tibbles together so I get one tibble at the end of my code, which is great.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=168)** Now I mentioned that those file names contain the year that the data corresponds to.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=173)** So I've written a function on line 12 through 21, which reads in a data file's file path, extracts the year then reads in that data and inserts a new column called year.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=187)** So let's get once again vec data files.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=192)** Let's pipe it into map df and the function that we're going to apply this time is read and clean and we'll use .x to refer to the current path that we're iterating over.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=207)** I'll run that code and we can see our n output now is a tibble with the same number of rows as before, but we have that new column, yeah.
>
> **[3:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=217)** Let's store that as data_gapminder.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=229)** Now let's say that I wanted to generate a chart for each of the continents in the data.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=235)** I've written a function to do that, so plot continent aligns 27 through 40.
>
> **[4:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=242)** If I give plot continent for continent Europe and I run that code, that's going to generate a ggplot2 showing me the life expectancy changes in Europe since 1952.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=255)** It'd be really useful if we could generate a ggplot2 chart for all of the continents and save those as separate images.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=264)** That's doing the same thing repeatedly over a number of values, which is iteration and we can achieve that using purrr.
>
> **[4:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=274)** So we need to obtain the distinct continents.
>
> **[4:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=278)** So so let's use data_gapminder.
>
> **[4:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=282)** Let's pipe this into distinct and get the distinct values in a continent column.
>
> **[4:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=289)** And then we want to pull this out as a vector.
>
> **[4:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=293)** So we'll use pull continent.
>
> **[4:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=297)** And now what I want to do is I want to map over this vector and I want to generate a data frame this time, I want to generate a ggplot2 chart.
>
> **[5:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=308)** There isn't a special map_ggplot2 function.
>
> **[5:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=312)** So we are going to use the generic map function and we're going to use tilde as before.
>
> **[5:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=320)** And the function that we're going to use is ggsave and let's save that as gg image.png we'll add a comma and will we use .x to refer to the current continent name that we are iterating over.
>
> **[5:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=339)** Let me run that code and we can see that I have an error and the reason that I have an error is because I haven't used my function here.
>
> **[5:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=348)** So when you are using map, you need to be a little bit careful with your code.
>
> **[5:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=353)** So all I'm calling in the second argument is .x.
>
> **[5:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=356)** So the value of the continent, I need to use my function plot continent, add a closing bracket here.
>
> **[6:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=366)** And if I run that code, that's going to map it over each of the values.
>
> **[6:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=372)** Now my output is a list.
>
> **[6:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=375)** So a list of five elements, each with the the output image .png.
>
> **[6:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=379)** So what I'm doing is I'm actually overwriting my image each time.
>
> **[6:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=384)** So if I look at my files tab, if I go up one level, we can see I only have one data file in there, image .png.
>
> **[6:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=392)** I want to generate a new image each time.
>
> **[6:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=396)** So let's make use of a really nice function from the stringr package to help us.
>
> **[6:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=405)** So let's use sdr glue here.
>
> **[6:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=414)** Let's change image to life expectancy for,
>
> **[7:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=426)** and I want to insert the continent's name here.
>
> **[7:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=429)** The continent name is going to be pulled in to .x and within sdr glue we can refer to R code inside of braces.
>
> **[7:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=440)** So inside of these braces we can run R code including .x.
>
> **[7:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=446)** So if I type .x here and I run this code, this is going to output me an image for each of those continents.
>
> **[7:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=455)** One last thing.
>
> **[7:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=457)** Map is designed for outputting something to the console, but what we want as a result of that iteration is a side effect.
>
> **[7:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=466)** All we want is our charts to be generated.
>
> **[7:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=469)** So map generates output, which goes to the console.
>
> **[7:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=474)** A function from purrr that only generates side effects after iteration is walk.
>
> **[8:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=482)** So if I run the code with walk, I'm going to get those messages from gg save, but I'm not going to get that vector anymore and I've got my images out.
>
> **[8:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=494)** So that's a short demonstration of what's possible with purrr, it's a really beautiful way to do iteration in a functional programming paradigm.
>
> **[8:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=504)** It does allow you to map with multiple arguments.
>
> **[8:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=507)** So there is a map to and a P map function, which will allow you to map over an arbitrary number of arguments and that is well explained in the documentation.
>
> **[8:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/purrr-for-doing-many-things-ie-iteration?u=76281980&t=518)** Now that you know how to use map and walk.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (15), for, (1), type . (1)
> **Definitions:** is a  (5)
> **Code Identifiers:** data_gapminder (2), read_csv (1), map_df (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 6. Working Smart with the Tidyverse

> [↑ Back to Table of Contents](#table-of-contents)

#### Handling NAs in the tidyverse with drop_na() and replace_na()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=0)** - [Instructor] We're going to look at two extremely useful tools for handling NA values in your data that are baked into the Tidyverse.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=8)** I'm inside of the handle-nas.R script in the 06_01b project.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=14)** Let's load up the Tidyverse, and let's print the msleep dataset to the console.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=21)** We can see there are NA values in many of the columns.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=25)** Let's remove all of these NA values at once by taking msleep and piping it into the function drop_na.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=35)** So now when I run this code, we're going to only get back those animals that have no NA values at all.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=43)** So we're only looking at complete rows in the data, and there are only 20 rows in the data that match this condition.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=53)** So this is really useful, but how about if we wanted to drop only NAs in a specific column?
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=60)** Well, we can use tidy selection in drop_na.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=64)** So I could write here the argument (conservation) and run that code, and that's going to drop only those rows that contain NA in the conservation column.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=75)** I could say that I wanted (conservation:awake), and that's going to be the span of columns conservation through awake, and that gets us to 21 rows, so one more row than if we dropped all of the NA values.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=91)** But remember, with tidy selection, we can use any tidy selection helper, including contains.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=99)** We could target those columns that contain the word sleep, to only drop those rows containing NA values in these columns.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=108)** I love using drop_na on my data.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=110)** It's really useful, but you might need to do the opposite.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=115)** You might need to inspect those rows which do contain NA values.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=120)** To solve that problem, you'll need to use if_any, which I cover later in this chapter.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=126)** But let's switch gear and think about replacing NA values in a tibble.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=133)** Tidy R contains a really great function for this called replace_na.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=138)** So let's get msleep.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=141)** Let's pipe it into the function replace_na, and then we provide it with a list of our replacements.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=149)** So let's target the conservation column, and any NAs here, I want to replace with unknown conservation.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=162)** And then in the vore column, I want to put "Unknown diet".
>
> **[2:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=171)** Let's run that code, and we can now see that the vore column and the conservation column have been updated with our NAs replaced with our strings that we've provided.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=183)** Now, the last thing that we might want to do is we might want to replace a specific value with NA.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=191)** So let's get msleep, and let's select just for columns name through order.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=201)** And what I want to do is I want to replace omni in the vore column with NA.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=208)** To do that, we want to make use of the mutate function.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=214)** We'll be updating vore, and we'll be using the function na_if.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=223)** So if vore contains omni, we want to replace that with an NA value.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=229)** And if I run this code, we can see that all of those omnivorous animals have a vore value replaced with NA.
>
> **[3:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/handling-nas-in-the-tidyverse-with-drop-na-replace-na?u=76281980&t=238)** These are three really incredibly useful and powerful tools for handling NA values in your data with the Tidyverse so that you can concentrate on the data that you need to in your wrangling, visualizing, or modeling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (5), switch (1)
> **Code Identifiers:** drop_na (3), replace_na (2), if_any (1), na_if (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Use case_when() instead of nested if or ifelse()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=0)** - [Instructor] Let's take a look at how to handle complex conditions in the tidyverse by the case_when function.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=6)** I'm in the case-when.R script in the 06-02b project.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=11)** I'm going to load the tidyverse in line one.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=14)** Line three to four, I'm selecting out some specific columns from the msleep dataset.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=19)** Line five to nine, I'm making use of the if-else function to categorize my animals by how much they sleep.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=28)** At the moment, my condition is if sleep_total is less than or equal to 12, I get less than or equal to 1/2 a day asleep, and when I get more than 1/2 a day's sleep.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=39)** How about if I wanted to add a condition, another condition, if it was false?
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=45)** So if sleep_rem was above or below a certain fraction of sleep total, you might answer that by saying, "Well, I'd nest if-else conditions."
>
> **[0:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=57)** If so, I want to introduce you to a better way with case_when.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=62)** So let me grab this part of the code, let me pipe it into mutate and I'm going to create a new column called sleep_category.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=79)** And I'm going to use the function case_when.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=85)** In case_when we supply our conditions as follows: so if sleep_total is less than four, I want to insert the value barely any sleep, and we do that with a tilda.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=103)** So if I write this out, "Barely any sleep."
>
> **[1:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=109)** The left-hand side of a tilda is my condition and the right-hand side of my tilda is what's inserted if that condition yields true.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=120)** So let me run that code and we can see that we only have one animal there, Roe deer with the value Barely any sleep.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=129)** All of the other animals have NA values.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=132)** And that's because we've not told case_when how to handle NA or anything other than sleep_total is less than four.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=142)** So what I want to do is I want to handle all of the values.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=148)** So I'm going to add another argument to case_when.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=151)** Let's write TRUE ~ "Other".
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=159)** So the left-hand side of tilda is my condition.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=162)** If TRUE is true and TRUE is always true, we want to insert Other.
>
> **[2:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=168)** So let me run that code and we can see that all those values of a previously NA are now Other.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=175)** So here comes the good thing about case_when, if we wanted to apply more conditions, it's just more arguments to case_when instead of nesting if-else.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=186)** So let's say that if sleep_total is less than 16
>
> **[3:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=194)** and if sleep_rem is more than 10% of the sleep_total.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=201)** So we use ampersand to refer to the logical operator.
>
> **[3:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=206)** So if sleep_rem is greater than or equal to 0.1 times sleep_total,
>
> **[3:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=218)** let's move my console slightly.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=224)** Let's insert the value Dreamy sleep and a comma.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=232)** Let me run that code and I get an error message.
>
> **[3:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=236)** And my error message is a really common error message that you get when using case_when.
>
> **[4:01](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=241)** Can you spot my error?
>
> **[4:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=244)** My error is I've used an equals here.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=247)** We need to use a tilda in case_when.
>
> **[4:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=251)** So if we've replaced that with a tilda and I run the codes, we can now see other Dreamy sleep and Barely any sleep for Roe deer.
>
> **[4:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=262)** Now I want to add another condition.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=264)** So if brainwt is NA, I want to put unknown brainwt.
>
> **[4:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=270)** So I'm going to go here and add another argument.
>
> **[4:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=274)** So is.na(brainwt), let's replace that with Unknown brain weight.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=288)** Let's add my comma and let's run that code.
>
> **[4:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=292)** Now something strange is happening or potentially strange if you've not used it before.
>
> **[4:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=298)** We've got the cheetah being labeled as Unknown brain weight.
>
> **[5:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=302)** Brain weight was NA, but we can see that the Three-toed sloth and the Northern fur seal, they both have brainwt NA, but they're being labeled as dreamy sleep.
>
> **[5:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=315)** So what's happening?
>
> **[5:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=317)** case_when applies its conditions in the order that you see them as arguments.
>
> **[5:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=324)** So this condition is going to be applied first and if it yields true, then this is going to be inserted then the next argument, then the next argument.
>
> **[5:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=334)** So you need to be careful and put your most restrictive definitions at the top.
>
> **[5:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=341)** And so let me cut this, let me paste it here.
>
> **[5:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=347)** Get rid of this empty line now to tidy up my code.
>
> **[5:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=351)** And if we rerun this code, we'll now see that all of those rows where brainwt is NA are labeled as Unknown brain weight because that's the first condition.
>
> **[6:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=363)** So this has been a slightly more bizarre example for me than usual.
>
> **[6:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=368)** I wanted you to understand that case_when is really useful for categorizing the data in many categories, I wanted you to see that was the ampersand for the AND operator.
>
> **[6:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=379)** You can use the pipe for the OR operator.
>
> **[6:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=382)** I wanted you to see a mistake where you use equals instead of tilda.
>
> **[6:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-case-when-instead-of-nested-if-or-ifelse?u=76281980&t=387)** And I also wanted you to go away being careful to make sure that your most restrictive conditions at the top of case_when.

> [!info]- Semantic Content
>
> **Code Identifiers:** case_when (13), sleep_total (6), sleep_rem (3), sleep_category (1)
> **Code Keywords:** let (15), function (3), else. (1), this, (1)
> **Env Vars:** true (3)
> **Warnings:** common error (1), be careful (1)
> **CLI Commands:** make (1)
> **Versions:** 0.1 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use tidy-select functions to work with many columns at once
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=0)** - [Instructor] Tidy selection is one of the superpowers provided by the tidyverse.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=5)** Let's take a look at exactly what tidy selection is and how we can use it in a tidy select the R script in the 0603B project.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=14)** So as per usual, let's load the tidyverse.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=17)** That's going to give us the core tidyverse packages and tidy selection.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=22)** In lines three through four we're going to make use of the select verb, and we are using tidy selection here to refer to the columns name through order.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=33)** So that colon is tidy selection.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=36)** Where is also a tidy selection helper.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=39)** This allows us to target columns that meet a specific condition.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=44)** So if we run lines nine through 10, that's going to return me the name column and all of the columns containing numeric data.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=53)** Lines 14 and 15 I'm making use of the contains tidy selection helper to target all of the columns that contain the substring sleep.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=64)** Now I want to show you the documentation for select.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=68)** So let's highlight that function name and press F1.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=73)** I'll make the documentation slightly bigger and the select function is really helpful.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=80)** It gives you an overview of selection features.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=84)** So here it's showing you all of the different tidy selection helpers that you can make use of.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=90)** So it's showing the colon, the exclamation mark, the complement, which means the opposite of, and we can see everything.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=98)** Last call, starts with, ends with, contains, all these different tidy selection helpers.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=105)** Drop NA is a really useful function for getting rid of NA values, and we can use that with tidy selection.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=112)** So if I run this code, make my console slightly bigger for a moment, that's going to drop all of the rows, which contain sleep in their column name and rows containing NA.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=126)** Now if I bring it for documentation for NA, so I've highlighted the function name and I press F1.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=133)** Remember, documentation isn't like select.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=135)** Select is kind of introducing the concept of tidy selection.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=140)** But if we scroll down, we can see that three dots is labeled with tidy select.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=146)** So this is indicating to us that this function allows tidy selection, and any function documentation page that says tidy selection is telling you, you can make use of all of these features.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=159)** Things are a little bit different with mutate.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=163)** So I have a mutate example here.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=166)** And in order to use tidy selection, you need to make use of the across function.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=172)** So across takes two arguments.
>
> **[2:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=174)** The first argument is our tidy selection.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=176)** On line 27, I'm making use of contains sleep, and I'm applying the function in the second argument of across.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=185)** So I'm going to divide all of the values by 24.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=188)** So let me run that code.
>
> **[3:11](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=191)** And I can see now that all of those columns that contain sleep have now been divided by 24 to make them into a fraction of the day.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=200)** So we can see that there are two animals on line three and six that slept 60% of the day.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=207)** When it comes to tidy selection with filter, things are even more complicated.
>
> **[3:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=213)** So here on lines 32 through 33, I am filtering if any of the columns that contain sleep have NA values.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=224)** There's a video later in this chapter that goes into this in detail, but from a high level, this is tidy selection.
>
> **[3:52](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=232)** It's incredibly powerful.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/use-tidy-select-functions-to-work-with-many-columns-at-once?u=76281980&t=234)** Many, many of the functions in the tidyverse allow you to use it, and you can even add tidy selection into your packages if you wanted to.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (4)
> **CLI Commands:** make (7)
> **Documentation:** the documentation (2)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using across() in mutate() to modify multiple columns at once
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=0)** - [Instructor] Let's take a look at how we can modify many columns at once in a dataset in a tidyverse through across.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=8)** I'm in the 06_04b project, I've got the across to R script open, and on line one we're going to load the tidyverse, line three and four, let's concentrate on a small number of columns from the msleep dataset.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=23)** Let's pretend I was interested in converting all of the sleep columns to percentages.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=30)** What we know how to do at the moment is to pipe this into mutate.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=35)** We could write out each of these column names and ask to convert each of those into a percentage in 10.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=42)** It's much more efficient to use across.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=47)** The first argument of across is where we write our column specification, which we can do with tidy selection.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=54)** So let's use starts with sleep.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=62)** And then the second argument of across is where we provide our function.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=67)** The simplest way to write an anonymous function is with tilde, dot, or period with those that are column contents.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=76)** And we want to divide the column contents by 24.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=81)** Let's run that code.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=83)** And what we'll get back is a percentage in each of those sleep columns.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=90)** That's great, that's already so much more efficient than having to write out each of those column names explicitly.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=97)** How about if we didn't want to modify those columns, we wanted to create new columns?
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=103)** Well, let's copy and paste this code.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=108)** And we need to change the second argument of across.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=113)** If we want to create new columns, we need to make a list, and inside of our list, we're going to provide the suffixes to the columns that we're targeting that are going to be created.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=127)** So we want to create a percent column, so we're going to add the suffix percent.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=134)** And for this suffixed column, we're going to apply the same formula, so tilde, dot, divided by 24.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=144)** And if I run that code, you can see now that I've got a new column added for each of those columns that match our tidy selection.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=152)** So that's incredibly powerful.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=155)** Maybe you don't want to calculate percentage, maybe you want to do a more complicated calculation, you can do that really easily with across and mutate.
>
> **[2:44](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=164)** We can also use across within summarize.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=167)** So let's take this code, let's modify this to look at vore and the weight columns.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=178)** And let's say that we were interested in finding the maximum value within all of the weight columns within each group.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=187)** Well, we need to group the data by vore, there we can see our groups have been inserted, and then we're going to go and pipe this into summarize, we'll call across, the first argument is tidy selection and we'll use contains "wt".
>
> **[3:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=211)** And the second argument of across, we want to create new columns, because we want to communicate what that column contains.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=222)** So we'll write list, our suffix is going to be max, and our function is going to be max. to refer to the column.
>
> **[3:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=234)** We already know there are na values here, so let's add na.rm is equal to true to remove those na values.
>
> **[4:02](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=242)** And let's run this code, and we'll get an error message.
>
> **[4:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=247)** This is a really common error message that you'll get when you're working with across, and it's because we've forgotten something.
>
> **[4:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=255)** Have you spotted what we forgot? We forgot the tilde here.
>
> **[4:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=259)** So we haven't created a function to apply across these columns.
>
> **[4:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=264)** So let's add that tilde in, and run the code, and now we can see the maximum brain weight and the maximum body weight within each of these groups.
>
> **[4:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=275)** I love using across, it saved me so much time and made my code much less fragile than writing out each column name explicitly and the operation many times.
>
> **[4:48](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=288)** I do want to make a final comment about the difference between column-wise and row-wise when we're using across.
>
> **[4:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=296)** So let me read in the exam data on line 21, and let's print that to the console.
>
> **[5:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=305)** And what I have is, I have scores for students across the four year groups, one through four, and let's say that what I wanted was the maximum score that each student achieved across each year.
>
> **[5:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=323)** To do that, I need to do a row-wise operation.
>
> **[5:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=328)** So let's pipe exam data into group by, we'll group by student ID, we'll then group by year group.
>
> **[5:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=350)** And then we want to summarize, and we're not going to use across, because across is designed to work column-wise, we want to work on those individual rows.
>
> **[6:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=364)** So we're going to create a new column, max_score, we'll use the max function, and within here we'll use the function c_across.
>
> **[6:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=378)** We can use tidy selection here, so we'll target those columns containing score, and then when we run this code, we can see that we get the maximum score for each combination of student ID and year group.
>
> **[6:38](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/using-across-in-mutate-to-modify-multiple-columns-at-once?u=76281980&t=398)** So across is fantastic for saving you time and making your code less fragile when you're working column wise, but if you're working row-wise, you'll need to use see across with group by.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (6)
> **CLI Commands:** make (2), rm (1)
> **Code Identifiers:** max_score (1), c_across (1)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)
> **Warnings:** common error (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Filtering many columns at once with if_any() and if_all()
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use the tidyverse to efficiently apply filter conditions to many columns at once.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=8)** I'm in the 06_05b project and I've got the filter-multiple-columns.R script open.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=14)** Let's load the tidyverse and let's print the msleep dataset to the console and we can see, as we know by now, there are many N/A values in this dataset.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=27)** Let's filter this dataset to see only those rows that contain an N/A value in a sleep column.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=36)** So let's pipe msleep into filter and we're going to make use of if_any.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=45)** The first argument of if_any is our column specification.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=50)** As always, in the tidyverse, we can use tidy selection where we're doing the column specification.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=56)** So let's target those columns that contain sleep.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=63)** And our filter condition is a function, so we use tilda and we're going to use is.na and then . to represent the column that we're looking at.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=77)** And if we run this code, then we can see those 51 animals that contain at least one N/A value in a sleep column.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=89)** How about if we were interested in only those rows where all sleep columns contain N/A values?
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=97)** Well, we could swap this if_any for if_all.
>
> **[1:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=101)** So let's run that code and we can see there are no animals that contain N/A values in all sleep columns.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=110)** Let's copy this code and let's swap sleep for weight.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=118)** And we can see again, there are no columns that contain N/A values in both weight columns.
>
> **[2:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=126)** If we changed this to be the specific columns, vore and conservation, there are some animals that contain N/A values in all of these columns.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=141)** I think it's really important that you understand that if_all and if_any, they're not just for scanning for N/A values.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=150)** So let's take this code and let's go for targeting columns that contain weight.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=166)** And the condition that we want to check is if the value, so if dot is greater than one.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=177)** If I run that code, then we can see there are three animals in the dataset where all of the weight columns are greater than one.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=188)** I found if_any and if_all to be really powerful for me, when I want to filter down my dataset by conditions on multiple columns.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=198)** It saves time on having to write up the column names many times.
>
> **[3:22](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/filtering-many-columns-at-once-with-if-any-and-if-all?u=76281980&t=202)** This is very valuable if you've got hundreds of columns in your dataset and it also means that your data is less fragile using if_all or if_any, instead of writing out each column name explicitly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1)
> **Code Identifiers:** if_any (6), if_all (4)
> **Documentation:** specification (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding how the tidyverse evolves and deprecates
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=0)** - [Instructor] The Tidyverse is an incredibly powerful toolkit for doing data science with R.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=6)** The reason it's so powerful is that it's still growing and evolving, and it's not a stagnant collection of functions.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=15)** Sometimes when you look at the documentation for functions, you'll find a lifecycle badge that says superseded.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=23)** Two really important examples are gather and spread.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=27)** These used to be the functions used for transforming data between wide and long formats.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=34)** But in 2019, the Tidyverse was augmented with two powerful new functions, pivot_longer and pivot_wider, which I've introduced in this course.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=46)** Gathering and spread will not be removed from the Tidyverse because they are marked, superseded, and the documentation pages for the functions makes clear the functions will continue to work, but you are encouraged to transition to the new and improved functions.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=63)** A small number of functions will be marked deprecated.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=67)** This indicates the function will be removed from the Tidyverse at some point in the future.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=73)** It happens rarely, and you'll receive warnings in your code if a function you are using has been marked for deprecation.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=81)** The documentation will also give you advice on why the function has been deprecated and what to use instead.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=88)** You'll also come across some functionality marked as experimental.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=93)** For instance, the .by and .groups arguments for mutate and summarize are marked experimental at the time of recording.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=103)** This gives you insight into new possibilities that aren't quite ready for primetime in the Tidyverse.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=110)** I approach experimental functions with caution.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=114)** If I'm writing code that's unlikely to be used again, particularly if I'm doing exploratory data analysis, I might use an experimental feature.
>
> **[2:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=124)** I'd recommend approaching experimental functionality with caution.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=130)** Wait until it's fully baked if you're going to use it in packages or in production code.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=137)** Here's an overview of the lifecycle process.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=139)** Some functions are introduced as experimental, and most will get properly introduced at the Tidyverse and will be considered stable.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=148)** Infrequently functions get superseded, and a better or more modern alternative gets added.
>
> **[2:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=155)** These superseded functions won't be removed, but they won't get improved in the future either.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=162)** Rarely, a function will get truly deprecated.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=167)** This means it will get deleted at some point in the future.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/understanding-the-tidyverse-evolves-and-deprecates?u=76281980&t=170)** These are the only functions to truly approach with caution and consider rewriting code that uses them at the moment.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), continue (1)
> **Documentation:** the documentation (3)
> **Warnings:** caution (3)
> **Code Identifiers:** pivot_longer (1), pivot_wider (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find all love songs remaining below position 80 in the top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=0)** (engaging synth music)
>
> **[0:06](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=6)** - [Instructor] For this challenge, all you need is the core tidyverse and the Billboard dataset contained within it.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=12)** What I need you to do is to find the three songs in the dataset that match these two conditions.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=20)** The song title contains the word "love," and every week that the song was in the top 100, it was in position 80 or better.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=31)** If you go over to project 06_07b, I've started you off in challenge.R, and all I've done is loaded the tidyverse and given you the dataset Billboard.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=42)** There are lots of different approaches to how you can solve this problem using the skills that you've learned during this course.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=49)** Good luck.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=51)** In the next video, you'll see my approach to the problem, and it'll be interesting for you to compare how you've approached it with my approach.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=60)** Good luck.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/challenge-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=60)** See you in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (engaging synth music) (1)

#### Solution: Find all love songs remaining below position 80 in the top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=0)** - [Instructor] Hello folks, I've set you the challenge of finding the three songs in a billboard dataset that match these two conditions: the track title contains love with case insensitivity, and every week that the track was in the top 100, it placed better than position 80.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=25)** Let's go and look at how to solve this in the 06_08b project.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=31)** So all we need is the core tidyverse, so let's load library tidyverse and let's print the billboard dataset to the console.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=41)** So our first condition concerns the track title and we want to filter the datasets and it's a character column, so we want to use the function from the string R package.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=54)** We want to use str_detect.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=58)** I remember when I also see that a track title is written in title case.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=64)** So let's use sdr_to_lower on the track column.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=72)** And then we want to search for the word love.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=76)** So those are all of the 22 songs that contain the word love with case insensitivity.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=84)** And now I want to pipe this into filter again to apply my condition for every week that the song was in the top 100, it had placed in position 80 or better.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=97)** So I'm going to make use of if_all.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=102)** For my tidy selection column specification, I'm going to use contains and target the week columns.
>
> **[1:51](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=111)** And then the second argument of if_all is my predicate test, so a test which is going to yield true or false.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=120)** And so we use a tilde to start off our function and our test is going to be if dot the values in a column are less than or equal to 80.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=132)** Let's run that code.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=134)** And this is where you might have got to and you might have gotten stuck because it looks like there aren't any songs that match this condition.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=144)** But what we're forgetting is NA values.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=148)** So I didn't require that the song was in the top 100 every week.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=154)** All I required was when it is in the top 100, it needed to be placed at position 80 or better.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=162)** So our if_all also needs to contain a condition of NA, and specifically, it needs to be an OR condition.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=173)** So if we add the pipe operator here to stand for the logical operator OR, or is .na, and then dot again to refer to the column contents.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=185)** And if I run that code, I can see the three songs which contain love in their title.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=193)** And every week that they placed in the top 100, they placed at position 80 or better, or they simply weren't in the top 100.
>
> **[3:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=203)** I hope you found that challenge challenging, but also rewarding.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=208)** We're using several different features of the tidyverse here.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/solution-find-all-love-songs-remaining-below-position-80-in-the-top-10?u=76281980&t=211)** We're using tidy selection, we're using stringer, and we're using if_all within filter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), case. (1), yield (1), require (1)
> **Code Identifiers:** if_all (4), str_detect (1), sdr_to_lower (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=0)** - [Charlotte] Thank you so much for joining me for this introduction to the Tidyverse.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=4)** My goal was to get you confident with how the Tidyverse works and how to get your data files into R and to combine Tidyverse functions to begin to understand and explore your datasets.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=17)** You should now feel equipped to clean, wrangle, and process your data frames and tibbles with the Tidyverse.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=24)** You've seen how to use stringr, lubridate and forcats, designed specifically for the complexities of handling strings, dates, and factors respectively.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=35)** I also had the pleasure of introducing you to ggplot2, simply the best tool for data storytelling with R.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=42)** If you're interested in learning more, I have two recommendations.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=46)** The LinkedIn Learning catalog has dedicated ggplot2 courses, and you can also search LinkedIn for the hashtag tidytuesday and ggplot2 every Tuesday for an impressive showcase of what's possible with ggplot2 thanks to the Tidyverse.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=65)** If you're looking for courses on specific data analysis or data science topics with R, there's a great collection in the course catalog.
>
> **[1:14](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=74)** If modeling is your thing, then tinymodels is another ecosystem of our packages designed around the Tidyverse that I'd thoroughly recommend.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-r-tidyverse-24332729/next-steps?u=76281980&t=83)** Thanks again, and please do follow me on LinkedIn or X @charliejhadley to learn more about R, the Tidyverse, and data storytelling.

> [!info]- Semantic Content
>
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