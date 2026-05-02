---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: r-tidyverse-applications
url: "https://www.linkedin.com/learning/r-tidyverse-applications"
duration_minutes: 246
duration: 4h 6m
level: Intermediate
updated: 8/13/2024
learners: 36639
skills:
  - R (Programming Language)
  - tidyverse
exercise_files: true
github: "https://github.com/LinkedInLearning/R-Tidyverse-Applications-5902139"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEp1pHIgntiFQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722974816242?e=2147483647&amp;v=beta&amp;t=B_wOqROSj33k_k-5quXZECGj5jiStz9d160yU2WujPg"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in R]]'
prev_courses:
  - '[[Learning the R Tidyverse]]'
next_courses:
  - '[[Creating Maps with R]]'
path_nav: '[{"path":"Advance Your Skills in R","position":6,"total":8,"prev":"Learning the R Tidyverse","next":"Creating Maps with R"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/tidyverse
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/R%20Tidyverse%20Applications.md)

![R Tidyverse Applications](https://media.licdn.com/dms/image/v2/D560DAQEp1pHIgntiFQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722974816242?e=2147483647&amp;v=beta&amp;t=B_wOqROSj33k_k-5quXZECGj5jiStz9d160yU2WujPg)

# R Tidyverse Applications

> Are you an R programmer looking to take your R tidyverse knowledge to the next level? In this course, Megan Silvey aims to provide R programmers with a better overall understanding of the R tidyverse and how to utilize its packages. Megan uses practical, real-world examples that showcase concepts that you can use in your own work. Using a dataset from KinetEco’s sales, customer, and product data, 

> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications) | 4h 6m | Intermediate | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to R](#introduction-to-r)
  - [What is RStudio?](#what-is-rstudio)
- [**1. Load Data**](#1-load-data) (9 videos)
  - [Introducing the R tidyverse](#introducing-the-r-tidyverse)
  - [The R tidyverse packages](#the-r-tidyverse-packages)
  - [Introducing KinetEco](#introducing-kineteco)
  - [Understanding KinetEco Data](#understanding-kineteco-data)
  - [What is a tibble?](#what-is-a-tibble)
  - [Loading data with the tidyverse](#loading-data-with-the-tidyverse)
  - [Load and write data with readr](#load-and-write-data-with-readr)
  - [Load data with readxl and write with writexl](#load-data-with-readxl-and-write-with-writexl)
  - [Solution: Load data](#solution-load-data)
- [**2. Manipulate Data**](#2-manipulate-data) (8 videos)
  - [Dealing with missing values with tidyr](#dealing-with-missing-values-with-tidyr)
  - [Reshaping data with tidyr](#reshaping-data-with-tidyr)
  - [Mutate strings with stringr](#mutate-strings-with-stringr)
  - [Manipulate strings with stringr](#manipulate-strings-with-stringr)
  - [Join and split strings with stringr](#join-and-split-strings-with-stringr)
  - [Understanding dates with lubridate](#understanding-dates-with-lubridate)
  - [Edit dates with lubridate](#edit-dates-with-lubridate)
  - [Solution: Manipulate data](#solution-manipulate-data)
- [**3. Factor and Map Data**](#3-factor-and-map-data) (6 videos)
  - [Factor categorical data with forcats](#factor-categorical-data-with-forcats)
  - [Inspect and mutate factors with forcats](#inspect-and-mutate-factors-with-forcats)
  - [Adjust factor levels with forcats](#adjust-factor-levels-with-forcats)
  - [Map functions with purrr](#map-functions-with-purrr)
  - [Other functions with purrr](#other-functions-with-purrr)
  - [Solution: Factor data](#solution-factor-data)
- [**4. Analyze and Visualize Data**](#4-analyze-and-visualize-data) (8 videos)
  - [Summarize data with dplyr](#summarize-data-with-dplyr)
  - [Group data with dplyr](#group-data-with-dplyr)
  - [Mutate data with dplyr](#mutate-data-with-dplyr)
  - [Filter data with dplyr](#filter-data-with-dplyr)
  - [Join data with dplyr](#join-data-with-dplyr)
  - [Plot one variable visualizations with ggplot2](#plot-one-variable-visualizations-with-ggplot2)
  - [Plot two variable visualizations with ggplot2](#plot-two-variable-visualizations-with-ggplot2)
  - [Solution: Perform data analysis](#solution-perform-data-analysis)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to R
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=0)** Are you ready to stand out to employers who are actively seeking professionals skilled with the R Tidyverse?
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=6)** Then join me in my LinkedIn learning course and take your knowledge of the R Tidyverse to the next level.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=14)** Hi, I'm Megan Silvey, a data scientist who enjoys using data to solve real world problems.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=20)** I invite you to join me in this course where you'll gather practical experience using the R Tidyverse and its various packages.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=28)** You'll work through a real world scenario using the Tidyverse to efficiently load, clean, analyze, and visualize data.
>
> **[0:36](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=36)** Ready?
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/introduction-to-r?u=76281980&t=37)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[LinkedIn]] (1), next (1)

#### What is RStudio?
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=0)** In this video, I will show you the tools and applications you need in order to be successful in this course.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=6)** In this course you'll be using GitHub, R, and RStudio.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=11)** Let's begin by exploring the GitHub repository.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=14)** The GitHub repository you can find on the LinkedIn learning course or via this link, where it is the R Tidyverse applications.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=21)** And this should contain all the coding files and the data sets you need for this course.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=26)** You'll notice the GitHub is organized by different files where you have chapter one, chapter two, chapter three, and chapter four.
>
> **[0:35](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=35)** If you navigate inside each of these chapter folders, you'll be able to see the coding files for each of the different videos that you'll be watching, along with any data sets that are needed for these particular coding files.
>
> **[0:49](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=49)** Most of these data sets are going to be the same, but a few of them have some updated files that you'll be creating within your coding files.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=57)** The naming convention for the coding files you'll notice it has, for example, 01_05B.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=63)** What this means it is the first number is the chapter it is in.
>
> **[1:09](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=69)** So this is for the first chapter.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=71)** The second number is the video number.
>
> **[1:13](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=73)** It is.
>
> **[1:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=74)** So this would be the fifth video.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=75)** And then you'll notice it typically has a B or an E.
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=79)** You want to start with the B files when you are coding, because this will contain any important code you need to run before you begin following along when you are coding in this course.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=89)** If you get lost or need some help on figuring out the code, you can always check out the E file which is the ending file, and that should contain all the code that is shown in that particular video.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=100)** The main files that are a little different are going to be challenge and solution files.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=104)** There should be one challenge and one solution for each of these chapters.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=108)** The challenge file is the one that you will want to use when you are coding in your code for that particular challenge.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=115)** The solution file will contain all the code needed for the solution to run the code properly.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=121)** If you wish to download a file, you can simply click on it and then click on the download raw file to the right, and it should download that file to your computer.
>
> **[2:11](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=131)** Note that there are many files in this course though, so if you download it one by one, that may take you a while to go through.
>
> **[2:17](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=137)** Let's go back out to the main repository, and I'll show you how to download all the files in the repository at once.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=145)** You can simply go over to the coding button here.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=148)** And sure you're on the local tab and click Download ZIP.
>
> **[2:31](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=151)** This should zip all the files in the GitHub repository to your computer.
>
> **[2:36](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=156)** If you open this on your computer, you want to make sure that you unzip the file, so there may be an option here to click to unzip it whether you're on a mac or PC.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=165)** And then once it's unzipped, you can then copy and paste these files wherever you wish on your computer.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=173)** Next, let's head over to the website where you can download R and RStudio.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=180)** You'll need both R and RStudio for this course, because you'll need the R based coding language in order to actually do the coding, and RStudio since that is the suggested platform to use to actually perform your coding.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=192)** You can go to the link [posit.co/download/rstudio-desktop](https://posit.co/download/rstudio-desktop)/ to download both of these for your computer.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=200)** Once you get here, you can scroll down and go to the Install R section and click on the Download and Install R button.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=207)** Once you go here, you should have the main options here to download R for Linux, macOS or Windows.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=214)** You should be able to click on the one for your appropriate device.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=218)** So let's say for my computer it is a mac OS.
>
> **[3:41](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=221)** So I will click on this option.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=223)** Once you go to this page, it should give you a variety of options of different packages you can download for your computer.
>
> **[3:50](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=230)** Most likely you will want to select the option at the top.
>
> **[3:54](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=234)** For example, this one should be between an M1 to M3 Mac.
>
> **[3:58](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=238)** If you have an older Intel Mac, you'll download this version instead.
>
> **[4:02](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=242)** So to download it on this computer I simply click on this.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=245)** It should download that for me.
>
> **[4:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=248)** And so when I click to open this, you can then simply click through all the default options it has here.
>
> **[4:13](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=253)** So you just click continue, continue, agree.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=256)** And then you'll select Install.
>
> **[4:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=258)** Once you do that it should install R to your computer.
>
> **[4:21](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=261)** And then you are ready to go to begin programming in R.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=264)** Now that you have R installed on your computer you'll want to also install RStudio.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=270)** It should show here the correct RStudio version for your computer.
>
> **[4:34](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=274)** But if for some reason you need a previous version or a different version, you can simply click down here to get a different version.
>
> **[4:42](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=282)** So I'll click here.
>
> **[4:43](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=283)** This will download it to my computer.
>
> **[4:45](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=285)** Since I am on a Mac, I can simply drag and drop the RStudio to the Applications folder on my page to download it.
>
> **[4:51](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=291)** If you are on Windows, you can simply go through the default options to install it to your computer.
>
> **[4:57](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=297)** Now that you have RStudio downloaded, you're ready to begin coding with this course.
>
> **[5:03](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=303)** When you open our studio, it should look something like this with a variety of different windows where you can begin typing in your code.
>
> **[5:10](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=310)** If you go up to the top left for file, you can either create a new file in a variety of different ways, or you can open a file.
>
> **[5:17](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=317)** Let's open a file for this course.
>
> **[5:19](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=319)** So I'll go to documents our coding files chapter one.
>
> **[5:22](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=322)** And let's look at 0105B and click open.
>
> **[5:27](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=327)** And now you'll see my file is open and ready to go.
>
> **[5:31](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=331)** Now that your file is open you'll notice that you have four main windows inside RStudio.
>
> **[5:37](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=337)** In this first window is where you will see your actual coding files.
>
> **[5:40](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=340)** So this will contain any comments or markdown, your outputs and your actual code. In the top right is where you have your global environment.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=350)** So this will show any variables or data sets that you have saved.
>
> **[5:55](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=355)** In the bottom right is a navigation panel where you can navigate through the different files inside your computer.
>
> **[6:01](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=361)** So for example, I can go to User and then go to Documents.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=365)** Go to R Coding Files,Chapter 1.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=368)** And then I can see the different coding files I have in here along with my different data sets.
>
> **[6:13](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=373)** And finally, at the bottom left you have the Console terminal and Background Jobs.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=378)** I usually leave the console up just to ensure the code is running properly, but it is not necessarily for the type of R file you are using for this video.
>
> **[6:26](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=386)** So if you want to get rid of it, you can simply click this button to collapse it.
>
> **[6:30](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=390)** Regarding the particular R files you will be using for this course They will be in RMD file, also known as R markdown format.
>
> **[6:39](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=399)** The nice thing with these is you can have markdown such as this and different code chunks with the outputs all in one space versus a typical R coding file.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=409)** You only have the code in it with any comments, and then you will have all your outputs in the console or terminal.
>
> **[6:56](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=416)** And so this way it provides a better, more cohesive experience.
>
> **[7:00](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=420)** Let's show real quick what it will look like when you program in R.
>
> **[7:04](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=424)** So let's say you have a variable x and you assign it to the value of seven.
>
> **[7:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=428)** And you want to print out your result x.
>
> **[7:10](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=430)** If you wish to run your code, you can click the run option here.
>
> **[7:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=434)** There's also the run option up here where you have a variety of options to run different chunks of code.
>
> **[7:20](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=440)** And if you're having issues running your code or something is stuck in an infinite for loop, you can simply click restart R and either run all the chunks or clear all the output in the process.
>
> **[7:31](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=451)** Once you run your code, you then should be able to see the output of the code right below that coding chunk.
>
> **[7:37](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=457)** So again, each chunk should have its output right below it.
>
> **[7:40](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=460)** Since you've created a variable, you can now see in your global environment that you have a variable of x with a value of seven.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=468)** You can also see on the bottom with the console that you have some values in here now, because again you have those different values that have been run and the associated output.
>
> **[7:58](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=478)** So again this is similar to what you'll see up here.
>
> **[8:01](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=481)** But again because it's an R markdown file it's all put in one place for you.
>
> **[8:05](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=485)** Let's say as you're going along you wish to clean up some of your spaces.
>
> **[8:09](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=489)** If you wish to rerun some of your code and you want it to start on a fresh slate for your global environment, you simply go up here to this little broom, click it and click yes that yes, you do want to remove those variables from your global environment.
>
> **[8:26](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=506)** And now if you try and call on the value x down here and run it, it will say, hey, there's no object found because you have now cleared it out.
>
> **[8:34](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=514)** So again, if you're also having issues with an error like that, double check to see if your global environment does indeed have those variables.
>
> **[8:41](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=521)** The same thing goes for the console down here.
>
> **[8:43](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=523)** If you wish to clear it out, you can click the broom, but you'll notice this time when you do it, it does not come up with a message asking if you really want to do it.
>
> **[8:51](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=531)** So just make sure when you clear the console that you really do want to actually clear it out.
>
> **[8:55](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=535)** Let's say you are done working with your file for the day.
>
> **[8:59](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=539)** You can simply click the save button here to save your file.
>
> **[9:03](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=543)** Or there are some different saving icons up here.
>
> **[9:06](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=546)** If you need to open multiple files at a time, you can go up here File, Open File and let's navigate to another coding file.
>
> **[9:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=554)** Let's say 17B.
>
> **[9:16](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=556)** Click on that and you'll notice if you have multiple files open you can simply tab between the different ones like this.
>
> **[9:23](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-rstudio?u=76281980&t=563)** Up next you'll be introduced to the R Tidyverse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (10), [[GitHub]] (5), data (5), [[Windows]] (4), next (2)
> **UI Navigation:** go to (8), click on (7), scroll down (1), select the (1), drag and drop (1)
> **Prerequisites:** install (6), you'll need (2), before you begin (1)
> **Tools:** github (5), terminal (2)
> **CLI Commands:** make (2), unzip (2), find (1)
> **Analogies:** for example (3), such as (1), similar to (1)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** zip (1), rmd (1)


### 1. Load Data

[↑ Back to Table of Contents](#table-of-contents)

#### Introducing the R tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=0)** What is the R Tidyverse?
>
> **[0:02](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=2)** You may have heard of some of the R Tidyverse packages and use them in your previous coding work.
>
> **[0:09](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=9)** The R Tidyverse is a collection of R packages designed to primarily use for data science purposes.
>
> **[0:17](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=17)** This ecosystem of packages is built to optimize functionality for common data science tasks.
>
> **[0:24](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=24)** The main data science tasks these Tidyverse packages work with are data importing, data cleaning and wrangling, data analysis and data visualization.
>
> **[0:36](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=36)** Why would you want to use Tidyverse packages to complete these tasks instead of the base R language?
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=42)** Generally, the Tidyverse packages have functions that make it easier, quicker, and simpler to accomplish tasks in R.
>
> **[0:50](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=50)** Instead of having to programme these tasks from scratch, you can simply call on a function from the package and insert any necessary parameters to accomplish your task.
>
> **[1:00](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=60)** Using functions from Tidyverse packages can also make it easier to collaborate with others on your code.
>
> **[1:07](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=67)** Instead of everyone having a different way to accomplish a certain task with code that needs to be explained and documented, you can simply use standardized functions from these packages to accomplish the same task with the same format each time.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=81)** Are R Tidyverse packages dependable?
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=84)** Anyone can make a package for R, but this leaves a lot up in the air regarding the usability and maintainability of using a package on a long term basis.
>
> **[1:33](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=93)** Thankfully, the development and maintenance of the core Tidyverse packages are done so by the RStudio team.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=100)** This also ensures the packages work well with this software, since it tends to be a top choice for many R programmers to use.
>
> **[1:47](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=107)** The Tidyverse is also openly developed on GitHub, making it easy to find documentation and code.
>
> **[1:54](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=114)** The R Tidyverse has a website they maintain that contains a lot of great information and documentation about these different packages.
>
> **[2:02](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=122)** Let's head over to the R Tidyverse website to learn more about this collection of packages.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=129)** On the R Tidyverse home page, you will see a brief introduction to the packages.
>
> **[2:13](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=133)** You will also see the code you need to run to install all Tidyverse packages in your R code, such as in RStudio, so you can view that here where it's install.packages("Tidyverse"); If you navigate to the packages section, you can learn more about the individual packages in this ecosystem.
>
> **[2:31](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=151)** At the top, you will see brief instructions on how to import the Tidyverse and how to learn more about it.
>
> **[2:36](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=156)** Let's click on this link here to learn more about the Tidyverse.
>
> **[2:41](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=161)** On this page you can learn more about the Tidyverse in a condensed manner.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=165)** At the top are installation instructions.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=167)** So here you can see how to install packages for the Tidyverse.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=170)** Below that is usage where it lists out the core Tidyverse packages and their uses.
>
> **[2:55](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=175)** For example, you have ggplot2, which is used for data visualization.
>
> **[2:59](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=179)** Once you scroll down some more towards the bottom, you can view some less frequently used tidyverse packages.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=186)** In this course, you will learn about the functioning of all the main Tidyverse packages along with the readxl package.
>
> **[3:13](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=193)** Let's navigate back to the packages page.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=196)** Here you can see the core Tidyverse packages.
>
> **[3:18](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=198)** So here we have ggplot2, dplyr, tidyr, readr, purrr tibble, stringr, and forcats. Near the bottom, you can view more resources regarding importing, wrangling, programming, and modeling data with the Tidyverse.
>
> **[3:41](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=221)** Let's scroll back up to the tidyr package.
>
> **[3:45](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=225)** If you click on the word tidyr, or the go to docs link, it will take you to the tidyr information page.
>
> **[3:54](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=234)** Each of the main Tidyverse package pages will be formatted similar to this one.
>
> **[4:00](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=240)** At the top you'll see an overview of the package and what type of functionality it has.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=245)** Below that, you can view some installation instructions on how to install all packages for the Tidyverse along with that particular package.
>
> **[4:13](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=253)** Below that is a link to a cheat sheet for that package, which I will dive into later in this course as I review each package.
>
> **[4:23](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=263)** And below that you'll see some other content regarding the package, for example usage, getting started, some examples, related work and getting help.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=272)** Let's navigate back to the Tidyverse website.
>
> **[4:35](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=275)** In the navigation you will see a Blog page.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=279)** So if you click here, this will show you a variety of blog posts including updates regarding the Tidyverse.
>
> **[4:46](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=286)** Next, if you click on the Learn section, you can find some common learning tools for the Tidyverse packages.
>
> **[4:52](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=292)** This includes some books that are listed here, along with some workshops and some teaching materials.
>
> **[4:59](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=299)** If you click on the Help section, you can learn how to make a reprex, also known as a reproducible example to get help with your R Tidyverse code.
>
> **[5:09](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=309)** If you scroll down to the bottom, you will also find some common resources on how to get help with your R Tidyverse code, for example StackOverflow and their community website.
>
> **[5:21](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=321)** In the last section called Contribute, you can view how you can contribute to the R Tidyverse once you get more comfortable with it.
>
> **[5:28](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=328)** This includes helping answer questions, filing issues, contributing to documentation, and contributing to code.
>
> **[5:38](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=338)** I suggest taking a few minutes to familiarize yourself with this website, especially the packages section, since I will often reference it throughout this course.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=348)** You can also learn more about the R Tidyverse via LinkedIn learning courses such as Charlotte Hadley's course [[Learning the R Tidyverse]].
>
> **[5:56](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-the-r-tidyverse?u=76281980&t=356)** Up next, I will walk you through the main packages that will be discussed in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[RStudio]] (2), next (2), [[GitHub]] (1), [[Programming]] (1)
> **UI Navigation:** click on (4), scroll down (2), navigate to (1), go to (1)
> **CLI Commands:** make (4), find (3)
> **Analogies:** for example (3), such as (2), similar to (1)
> **Prerequisites:** install (4), getting started (1)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** later in (1), in the last (1)
> **Tools:** github (1)

#### The R tidyverse packages
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=0)** Let's take a moment to dive a bit deeper into the different Tidyverse packages you will use in this course.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=6)** The ten packages you will use in this course are.
>
> **[0:09](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=9)** readr, readxl, tibble, tidyr, stringr, lubridate, forcasts, purrr, dplyr and ggplot2.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=21)** Let's start with the readr and readxl packages.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=25)** The readr package allows you to import data that is in a tabular format from delimited files, such as comma separated values and tab separated values.
>
> **[0:36](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=36)** The readxl package also allows you to import data that is in a tabular format, but this package focuses on Microsoft Excel files such as XLS and XLSX.
>
> **[0:47](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=47)** Something to keep in mind is that both of these packages will import your data into your code as a tibble.
>
> **[0:54](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=54)** The tibble package allows you to create and convert data into tibbles.
>
> **[0:59](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=59)** A tibble is a modern reimagining of a data frame.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=63)** Tibbles are the main data format that will be used throughout this course, and they will be thoroughly explained in a later video.
>
> **[1:10](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=70)** Note that you can use other data types with the Tidyverse packages, but I will focus on mainly showing you how to use these functions with tibbles, since they are a common data type to use.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=81)** Next is the tidyr package which helps you create tidy data.
>
> **[1:25](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=85)** This package has a wide range of functions, allowing you to tidy your data to meet the standards needed to use a lot of other packages with minimal to no errors.
>
> **[1:35](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=95)** This includes reshaping data, dealing with missing values, and dealing with nested data.
>
> **[1:41](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=101)** The stringr packages all about strings, hence the name.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=105)** String data is often prevalent in data sources, but it is usually very messy after being imported into your code.
>
> **[1:52](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=112)** This package aims to help you clean and prepare your string data for analysis by doing tasks such as mutating, manipulating, joining, and splitting strings.
>
> **[2:02](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=122)** Then there's the lubridate package.
>
> **[2:05](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=125)** This package focuses on cleaning and preparing date time data.
>
> **[2:08](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=128)** This type of data also tends to be messy and loaded in a variety of formats.
>
> **[2:14](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=134)** This package helps you streamline all your dates and times to ensure they are ready to go for analysis.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=141)** Next is the forcats package.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=144)** This package helps you deal with categorical variables by using what is called factors.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=148)** The goal of this package is to provide you with a set of tools to interact with factors and solve common issues you may run into when interacting with them.
>
> **[2:37](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=157)** After that, you have the purrr package to help you with mapping data.
>
> **[2:42](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=162)** This mapping allows you to replace for loops with code that is much easier to use.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=167)** This is great to use with functions and vectors.
>
> **[2:51](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=171)** Then there's the dplyr package, which helps you with data transformation and some basic data analysis.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=177)** The dplyr package is powerful and key to many data analyses, so you'll most likely heavily use it after this course.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=185)** You will learn how to summarise, group, mutate, filter, and join data with this package.
>
> **[3:11](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=191)** Finally, you have the ggplot2 package.
>
> **[3:15](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=195)** This is your data visualization hub in the Tidyverse.
>
> **[3:18](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=198)** There are dozens of different visualizations you can create with one or more variables using this package, along with a wide range of customizations you can make to these visualizations.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=209)** You will only scratch the surface at visualizing data with ggplot2 in this course. I suggest checking out my Chappell's LinkedIn learning course Data Visualization in R with ggplot2 to learn more about how to visualize data with this package.
>
> **[3:44](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=224)** I know this may seem overwhelming with so many packages to keep track of, but don't worry, I will walk you through each package, show you some of their common functions, and provide you with tools and resources you need to continue expanding your knowledge.
>
> **[3:58](https://www.linkedin.com/learning/r-tidyverse-applications/the-r-tidyverse-packages?u=76281980&t=238)** Before I show you the power of the Tidyverse, let's take a moment to learn more about the data you will be using in this course and the company it comes from, KinetEco.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (27), next (2), [[Microsoft Excel]] (1), [[LinkedIn]] (1), power (1)
> **Analogies:** such as (3)
> **Env Vars:** xls (1), xlsx (1)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** make (1)

#### Introducing KinetEco
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=0)** In this course, you'll be working with data from the company KinetEco.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=4)** KinetEco is a fictitious company that provides eco-friendly products that are focused on renewable energy to individuals and businesses.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=13)** They have solar, wind, and consumer products available for purchase.
>
> **[0:17](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=17)** You can navigate to KinetEco's website by going to the URL [kinetecoinc.com](https://kinetecoinc.com).
>
> **[0:23](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=23)** Once you navigate to the website, you should see the home page of KinetEco.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=28)** The home page shows a few menu options, including information about their company, products, a blog, and how to contact them.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=37)** If you scroll down, you can learn more about KinetEco along with watch a quick PSA video.
>
> **[0:45](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=45)** Let's navigate to the company page.
>
> **[0:49](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=49)** Here you can learn more about the headquarters located in downtown Los Angeles.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=55)** You will also learn more about their locations where they research, design, manufacture, distribute, and install their products.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=63)** Let's navigate to the products page.
>
> **[1:07](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=67)** On this page you can see there are three main product lines.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=71)** This includes consumer, solar and wind.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=75)** There are also a few reviews about the company and their products.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=80)** Let's click on this consumer link to go to the consumer page.
>
> **[1:25](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=85)** On this page you can view a list of the consumer products they sell.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=89)** This includes their K-Eco solar panel, the K-Eco Energy Bulb, the K-Eco Phone Charger, and finally the K-Eco Mini Panel.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=100)** Let's navigate to the Solar products page next.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=104)** On this page, you can learn more about how their solar panels can help provide power to your home or business.
>
> **[1:51](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=111)** You can see in the chart how their solar panel compares to other models on the market.
>
> **[1:56](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=116)** If you scroll down, you can also see a brief explanation on how solar power works once it is installed.
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=124)** After that, let's go to the Wind products page.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=129)** This page explains how wind turbines work to provide energy to your business.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=136)** It also mentions their product, the K-Eco Wind Tunnel, which is a wind turbine system that can be used to power an office building of 40 people for 20% of each workday.
>
> **[2:26](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=146)** Next, let's navigate to the blog page.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=150)** On this page, you can view a variety of blog posts about the company and renewable energy sources and products they support.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=158)** Finally, let's go to the contact page.
>
> **[2:42](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=162)** On this page you can send inquiries directly to the company along with view the company's contact information.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/introducing-kineteco?u=76281980&t=170)** Now that you are familiar with KinetEco and the types of renewable energy products they provide, you can begin exploring the data sets you'll be using throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (11), power (3), data (2), product (2), next (2)
> **UI Navigation:** navigate to (6), go to (3), scroll down (2), click on (1)
> **Env Vars:** url (1), psa (1)
> **Definitions:** is a  (2)
> **URLs:** [kinetecoinc.com](https://kinetecoinc.com) (1)
> **Prerequisites:** install (1)

#### Understanding KinetEco Data
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=0)** Let's begin by familiarizing yourself with the KinetEco data you will be analyzing in this course.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=6)** You'll be using RStudio in this course to use the Tidyverse packages, but I will show you the data sets using Microsoft Excel.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=13)** You will use three data sets in this course that include sales, product, and customer data.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=19)** Let's first take a look at the sales data set.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=22)** This is the first page of the sales data set.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=25)** This data set will be the core data set where everything is connected to.
>
> **[0:29](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=29)** You will notice there are three tabs in this file.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=32)** They include sales, sales reps, and sales regions.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=37)** Let's begin with the sales data set.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=39)** You will notice there's employee information of who sold the product, for example their ID, name, title, and the sales region.
>
> **[0:48](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=48)** Then there's order information such as the order number, order date and order type.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=55)** After that is customer information of who bought the product, for example, the customer type, customer ID, name and state.
>
> **[1:05](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=65)** If we scroll over, we can view some product information about the product that was sold.
>
> **[1:10](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=70)** This includes product category, product number, and product name.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=75)** Finally, you have the quantity, price, any discount and the order total for the order that was made for the products purchased.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=84)** Let's go to the Sales Reps tab.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=86)** This data includes more information about each sales rep, and this can be matched to the main sales table by the employee ID column.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=96)** So here you'll see you have the employee ID, employee name, job title, region.
>
> **[1:42](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=102)** And when they started working at the company.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=105)** Let's head to Sales Regions next.
>
> **[1:47](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=107)** And this is the final tab in this sales data file.
>
> **[1:52](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=112)** This tab shows the state and the associated sales region.
>
> **[1:58](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=118)** You won't use the sales region data set often in this course, since this information is already in the main sales table, which you can connect to with the state column.
>
> **[2:08](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=128)** The next data set is all about KinetEco's customers.
>
> **[2:12](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=132)** In this data set, you will notice two tabs Individual and Business.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=136)** Let's begin with the individual tab.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=139)** On this tab you will see a list of KinetEco's Retail customers by their customer ID.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=144)** You'll then see the customer type, which should all be individual for this particular tab.
>
> **[2:32](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=152)** You'll also see the customer's name, state, the sales rep they work with, the sales region, and the order type.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=160)** The order type for this tab should be all retail because again, it is for individuals who are purchasing items.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=167)** Note that you can connect this to the main sales data set by the customer ID.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=172)** Let's go to the businesses tab next.
>
> **[2:56](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=176)** This tab has all the business customers for KinetEco.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=180)** Like before, you can see the customer ID and customer type along with the customer name.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=186)** This time though, the name should be the name of the business instead of the actual person's name.
>
> **[3:11](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=191)** Then you have the customer state, the sales rep, the sales region, and the order type, which you will notice can be either retail or wholesale depending on what types of products they ordered.
>
> **[3:23](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=203)** Finally, you have the products data set.
>
> **[3:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=205)** This data set contains more information regarding the 75 products KinetEco sells.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=210)** First, you'll see the product ID, which you can use to connect to the sales data set you saw earlier.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=216)** Then you have the product category, the name of the product which is under item, the price of the product, and the target customer.
>
> **[3:44](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=224)** With target customer, you'll see there's a mix of whether certain products are generally marketed to personal, which is also known as individual, corporate, which is known as business or both, where it would show as corporate and personal.
>
> **[3:58](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=238)** This should give you a general overview of the data you'll be working with throughout the course.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=244)** As you notice, there's a wide range of data, including strings and dates where the Tidyverse packages will showcase their use.
>
> **[4:11](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-kineteco-data?u=76281980&t=251)** I highly recommend taking some time on your own to continue exploring and understanding the KinetEco data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (21), product (12), [[Microsoft Products|Products]] (5), business (4), next (3)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (2)
> **Definitions:** known as (1)
> **Warnings:** note that (1)

#### What is a tibble?
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=0)** What is a tibble?
>
> **[0:02](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=2)** A tibble is what you use to store data in the Tidyverse, and it comes from the tibble package.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=8)** It is essentially a reimagined data frame with a more robust and visually appealing output for our users.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=14)** For example, tibbles include column information when printed out.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=18)** Most Tidyverse functions can be used on data frames, but many of them are meant to be used on tibbles as their default setting.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=25)** Tibbles seek to provide a better experience for our coders by forcing them to deal with problems such as variables not existing much earlier on in the coding process compared to when they use a data frame.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=37)** Tibbles offer no partial matching when subsetting columns.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=41)** They also tend to have a prettier and more concise output than data frames, where they include column information.
>
> **[0:47](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=47)** Make large data sets easier to work with and manage complex objects well.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=52)** This all comes together to maintain what is called tidy data.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=57)** Tidy data is a way to consistently organize tabular data to make it useful for the different packages you will use with it.
>
> **[1:04](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=64)** A data set is tidy if each variable is in its own column.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=68)** Each observation is in its own row.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=71)** You can access variables as vectors and you can preserve cases in vectorized operations.
>
> **[1:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=78)** Throughout this course, I will share different resources with you for the different packages you will use.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=84)** This will include where you can find information on the Tidyverse website, GitHub repositories, and cheat sheets. For tibbles, let's head over to the tibble Tidyverse webpage, which you can find via this URL.
>
> **[1:37](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=97)** On the Tibble package page, you'll see there is an overview of what a tibble is and what the package does.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=103)** Then you can see some installation instructions on how to install the tibble package.
>
> **[1:49](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=109)** Below that are instructions on how to use the package along with some basic examples.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=115)** You can use this web page for reference, and I will share with you how to access the tibble portion of the Tidy R cheat sheet in a later video.
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=124)** Let's head over to RStudio to begin exploring tibbles.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=127)** Let's begin by learning how to import these different Tidyverse packages.
>
> **[2:12](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=132)** If you wish to install all Tidyverse packages at once, you can use the code install packages(), and then you will specify you want to install the 'tidyverse'.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=144)** Let's click run to install all the Tidyverse packages.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=148)** When installing packages, remember you only need to install them once on your computer.
>
> **[2:33](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=153)** If R needs you to reinstall something later on, it will usually have an error message show right above your file so it would be right above here.
>
> **[2:42](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=162)** If you wish to bring in all the tidyverse packages at once into your code, you can use the code library() with 'tidyverse'.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=172)** I will personally comment this out of my code, since I want to show you how to install just the tibble package for your reference.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=180)** If you wish to install just the tibble package, you can use the code install packages() and this time you will specify 'tibble'.
>
> **[3:09](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=189)** When you run this, it'll install just the tibble package.
>
> **[3:14](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=194)** Once you run this, you can now load in the tibble package into your R code.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=200)** So you'll do that with library(tibble), and then you'll click run.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=204)** And now your tibble package is ready to go for you to start making tibbles.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=210)** Let's begin by creating a simple tibble.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=214)** You'll be calling on the tibble function to create your tibble.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=218)** And let's create a column called x with the values between 1 and 5.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=223)** Then let's create another column called y, and we will equal this to a list of fruits.
>
> **[3:49](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=229)** So you can do that by calling on C and parentheses to make your list.
>
> **[3:53](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=233)** And let's look at apple, banana, pear, peach, and strawberry.
>
> **[4:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=248)** Once you run this, you can now view your first tibble.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=252)** At the top left, you can see your output is notated as a table where it has five rows and two columns.
>
> **[4:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=258)** So here you'll see your have your x column which is an integer with your values one through five.
>
> **[4:23](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=263)** And then your y column which is a character column with your five different fruits listed out.
>
> **[4:29](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=269)** If you wish to create your tibble by row, you can use the function tribble with an R instead.
>
> **[4:36](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=276)** So let's call on tribble.
>
> **[4:38](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=278)** And this time you'll add a tilde before each column name.
>
> **[4:41](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=281)** So you'll create columns ~x and ~y.
>
> **[4:44](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=284)** And then now you will list out your data by row.
>
> **[4:50](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=290)** When you run this you will notice that your output should be pretty similar to above, but you'll notice this time it has the x column as a double instead of an integer since sometimes when you make it a tibble instead of a tribble it can interpret those values a little differently.
>
> **[5:07](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=307)** Generally, it is easier to code a tibble by column, by the first method, but it is good to know how to do it by row with a tribble depending on the dimensions of your data.
>
> **[5:18](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=318)** Next, let's show you how to convert a data frame into a tibble, so you'll copy and paste your first tibble code.
>
> **[5:25](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=325)** You'll bring it down here to the Create Data Frame section.
>
> **[5:29](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=329)** Paste it here.
>
> **[5:30](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=330)** And now let's assign it to a new variable called data, and change tibble to data.frame to create a data frame instead of a tibble.
>
> **[5:40](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=340)** And below that you will call out your new data set data.
>
> **[5:44](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=344)** When you run this, you will see it is now a data frame instead of a tibble with DF.
>
> **[5:52](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=352)** If you wish to convert a data frame to a tibble, you can use the function as_tibble, so you can use that on your data variable and run this.
>
> **[6:02](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=362)** And now you will see the data frame you just had has been converted into a tibble.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=368)** Let's copy and paste this code and bring it down here to now save your converted data frame to your new tibble variable.
>
> **[6:16](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=376)** So let's call it new_tibble.
>
> **[6:19](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=379)** Add that arrow and add in your as_tibble for your data.
>
> **[6:24](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=384)** And then you'll look at new_tibble.
>
> **[6:28](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=388)** Run this.
>
> **[6:30](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=390)** And so again, now you will see your new_tibble variable has your new tibble saved into it that was converted from a data frame.
>
> **[6:37](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=397)** Once you do this now you could check out to see if a variable is a tibble or not with the function is_tibble .
>
> **[6:44](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=404)** So you'll use is_tibble .
>
> **[6:46](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=406)** And let's first look at the data variable.
>
> **[6:51](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=411)** After that you can use is_tibble on your new_tibble variable.
>
> **[6:59](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=419)** When you run this, you'll see the first output is false because the first variable you have data is a data frame.
>
> **[7:08](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=428)** The second one should show as true because your new_tibble is a tibble.
>
> **[7:13](https://www.linkedin.com/learning/r-tidyverse-applications/what-is-a-tibble?u=76281980&t=433)** Let's put your new-found tibble knowledge to use by importing some data into tibbles in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (30), [[GitHub]] (1), web (1), [[RStudio]] (1), next (1)
> **Code Identifiers:** new_tibble (5), is_tibble (3), as_tibble (2)
> **Prerequisites:** install (10)
> **Definitions:** is a  (5), is an  (2), is called (1)
> **CLI Commands:** make (4), find (2)
> **Analogies:** for example (1), such as (1), similar to (1)
> **Env Vars:** url (1)
> **Tools:** github (1)

#### Loading data with the tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=0)** In this video, I will introduce how you can load and write data with a few different R Tidyverse packages.
>
> **[0:07](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=7)** First up is the readr package.
>
> **[0:09](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=9)** This package provides a simple and easy way to load data from delimited files in a tabular format, such as comma separated values denoted as CSV, or tab separated values, denoted as TSV files.
>
> **[0:24](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=24)** This package can load in a variety of data types within these tabular formatted data sets.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=30)** This package also provides detailed problem reports if your loading process does not go as expected.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=37)** The other main package you will use to read in data is the readxl package.
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=42)** This package also loads in tabular data with a variety of data types, but this one focuses on loading data from Excel files.
>
> **[0:49](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=49)** This package supports both the .XLS legacy format and the newer .XLSX format.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=57)** It also has no external dependencies, making it easy to install and use.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=62)** One resource you can use for the readr and readxl packages is the Tidyverse website.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=68)** You can navigate to either of these URLs to get an overview of the readr or the readxl packages, along with some examples of the different functions they have.
>
> **[1:17](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=77)** Let's head over there now.
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=79)** We'll begin by exploring the readr package page.
>
> **[1:23](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=83)** On this page you'll see there is an overview of what this package does.
>
> **[1:27](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=87)** Below that you can view some instructions on how to install the package along with the cheat sheet.
>
> **[1:33](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=93)** We'll come back to this cheat sheet in a minute.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=96)** Below that are some instructions on how to use the package, including the different functions you can use with it.
>
> **[1:42](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=102)** Below that are a few examples, some additions, some alternatives you can use, and a few acknowledgements.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=113)** Next, let's navigate to the readxl Tidyverse web page.
>
> **[1:56](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=116)** Remember you can navigate to this URL readxl.[tidyverse.org](https://tidyverse.org) to get to this web page.
>
> **[2:02](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=122)** This web page is formatted very similarly to the readr web page.
>
> **[2:06](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=126)** But again this time it'll show you information on the readxl package.
>
> **[2:10](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=130)** So you'll see the overview, installation, the cheat sheet, and some usage with some different functions.
>
> **[2:17](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=137)** If you wish to learn more about a particular function on these Tidyverse web pages, for example, readxl, you can click on the function here and it'll show you more information about that function.
>
> **[2:27](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=147)** For example usage with its default parameters.
>
> **[2:32](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=152)** Below are the different parameters explained.
>
> **[2:37](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=157)** The value that it produces, along with some examples.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=163)** Let's navigate back to that cheat sheet on this web page.
>
> **[2:48](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=168)** You can either click on the cheat sheet here to download it to your computer.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=172)** Sometimes it'll download it directly, other times it'll take you directly to the GitHub page where the cheat sheet lives, and you can click download here to download the file.
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=181)** Sometimes the cheat sheet will not be in the Tidyverse website, so you can navigate to the GitHub directly, which should usually have the cheat sheet for each of these packages.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=192)** For example, you can navigate to the readr GitHub.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=196)** So let's go over there.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=197)** Now here you'll see the readr GitHub page where you can view the code behind the readr package.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=204)** Below that you will find some similar information to the Tidyverse web page, including that cheat sheet that you can find here.
>
> **[3:32](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=212)** Note that these Tidyverse cheat sheets will be extremely helpful for you to find and understand the different functions you can use with each package.
>
> **[3:42](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=222)** I highly recommend you download these cheat sheets as you go along in the course.
>
> **[3:46](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=226)** Let's take a moment to look at the cheat sheet you just downloaded.
>
> **[3:50](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=230)** The cheat sheet you downloaded should look similar to mine, but note that it may have some updates or changes from when this course was posted.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=237)** So here you'll see the main reading function and a few common variances of it, such as read_csv and read_tsv and its different parameters.
>
> **[4:07](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=247)** You can also see how you can save data with readr and then some information regarding the different column types.
>
> **[4:14](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=254)** If you scroll down to the next page, you'll see a similar cheat sheet, but now it is for the readxl package.
>
> **[4:21](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=261)** So again, this one will show you how to read data in from the Excel files using read_excel or read_xls or read_xlsx.
>
> **[4:29](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=269)** It'll also give you some information regarding specifying the columns and the column types.
>
> **[4:35](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=275)** Working with writing data to different sheets, and a few other packages that may be helpful to use in tandem with this one.
>
> **[4:43](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=283)** These cheat sheets will be super helpful for you to have on hand during and after this course.
>
> **[4:48](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=288)** So again, I strongly recommend downloading these and keeping them on hand for your reference.
>
> **[4:55](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=295)** Let's take a moment to review the functions for the readr package.
>
> **[4:59](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=299)** There are a few different functions you can use to read data with the readr package, depending on the file type you are reading in with.
>
> **[5:06](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=306)** This includes read_csv for comma separated value files, read_tsv for tab separated value files, read_csv2 for semicolon separated values with a comma as a decimal mark.
>
> **[5:20](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=320)** read_delim for other delimited files outside of CSV and TSV, read_fwf for fixed width files, read_table for whitespace separated files, and finally read_log for web log files.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=334)** When reading in data with the readr package, this will be the standard format for the reading function you will use along with the default parameters.
>
> **[5:42](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=342)** So you'll see here it's read underscore and a star.
>
> **[5:45](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=345)** So that star will be for example CSV, TSV or any of the other functions you just saw.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=350)** When it comes to using the parameters, the file parameter at the top, you need to make sure you specify each time you use this function, but the rest of the parameters you don't have to specify if you just want to use them in their default format.
>
> **[6:04](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=364)** If you do want to change them, that is when you will need to specify them in your code and specify how you want to change it.
>
> **[6:10](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=370)** If you wish to learn more about the different default parameter options for this, I highly recommend doing what I showed you earlier.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=378)** Where on the Tidyverse web page you click on that read_, for example, read_csv function and it'll show you more information about the default parameters associated with it.
>
> **[6:28](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=388)** Next, there are some different column types you may need to call out in the different functions you will use with readr.
>
> **[6:35](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=395)** There are two formats you may see these in when working with readr and column types.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=400)** The first one is col_ and then the column type, and the other is as a letter or character.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=409)** So this includes col_logical, which would also be an l, col integer which would also be an i, col_double as a d, col_number as an n, col_character as a c, col_factor as an f, col_DateTime as an uppercase T, col_date as an uppercase D, col_time as a lowercase t, col_skip as a dash or an underscore, and finally col_guess as a question mark.
>
> **[7:18](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=438)** Let's look at the read_excel function next. When reading in data with the readxl package, this again will be the standard format for the reading function you will use along with the default parameters.
>
> **[7:30](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=450)** Note that you can use read_excel, read_xls, or read_xlsx depending on the file type you're reading in.
>
> **[7:37](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=457)** Often we will use read_excel because this works for both Microsoft Excel file types.
>
> **[7:43](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=463)** Here are the default parameters.
>
> **[7:45](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=465)** Again, like I showed prior, if you wish to learn more about the default parameters, you can click on the function in the R Tidyverse website to show you more information about them.
>
> **[7:56](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=476)** And for this one, kind of like the last one, you just need to make sure you specify the path name or again your file name.
>
> **[8:02](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=482)** Otherwise, if you are not changing any of the parameters, you can leave them as is and you don't need to specify them unless if you are changing something about them.
>
> **[8:11](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=491)** Finally, there are some different column types you may need to call out in the different functions when you are using your readxl package.
>
> **[8:19](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=499)** There are two formats.
>
> **[8:20](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=500)** You may see these in. One with how you will see them in R, and the other is how you will request them in the call types parameter.
>
> **[8:28](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=508)** And so you'll see the first column is how they are notated in Microsoft Excel.
>
> **[8:32](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=512)** The second column is how they are notated in R.
>
> **[8:35](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=515)** And the third type is how they are notated in that col types parameter.
>
> **[8:39](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=519)** This includes the anything type which in R is non-existent and called types is skip the empty type, which is logical but all null values for R, and then for col types you are not able to request that.
>
> **[8:55](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=535)** Then there's boolean which is logical for both are and called types.
>
> **[9:00](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=540)** Numeric which is the same across R and col types.
>
> **[9:03](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=543)** DateTime which is posIX and then a lowercase ct for R and then denoted as date in col types.
>
> **[9:11](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=551)** Text, which is denoted as a character in R and text and col types.
>
> **[9:17](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=557)** And then you have another anything type for Excel which in R is going to be a list.
>
> **[9:22](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=562)** So in R it'll show as list.
>
> **[9:24](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=564)** And in col types it'll also show as list.
>
> **[9:26](https://www.linkedin.com/learning/r-tidyverse-applications/loading-data-with-the-tidyverse?u=76281980&t=566)** Let's head over to RStudio to start loading in some data with that readr package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (15), web (9), next (4), [[GitHub]] (4), [[Microsoft Excel|Excel]] (3)
> **Code Identifiers:** read_excel (4), read_csv (3), read_tsv (2), read_xls (2), read_xlsx (2)
> **UI Navigation:** navigate to (5), click on (4), scroll down (1)
> **Env Vars:** csv (3), tsv (3), xls (1), xlsx (1), url (1)
> **Analogies:** for example (5), such as (2), similar to (1), kind of like (1)
> **CLI Commands:** find (3), make (2)
> **Tools:** github (4)
> **Warnings:** note that (3)

#### Load and write data with readr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=0)** Let's begin by learning how to import the different packages to use the readr package.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=6)** At the top, you can view the code of how to install and load the entire Tidyverse with install packages('tidyverse') and library(tidyverse).
>
> **[0:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=15)** This is like I showed you in the previous video, and you are welcome to load in the packages this way.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=20)** But in this video I will show you how to load in just the readr package in case you wish to just use that one in your code.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=26)** In order to do that, let's use install packages() on the 'readr' package.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=32)** You click here to run and remember you only need to install this package once.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=39)** In case you need to reinstall this package, RStudio should let you know to do that.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=44)** Now that it's all installed, you can load it in using library(readr), and now you're good to go to use readr and its functions.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=55)** Now let's take some time to learn about the functions used to read in data using the readr package.
>
> **[1:01](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=61)** Let's create a new tibble called products where you will use the read_csv function, since it is a CSV file, to load in your KinetEco products.csv file, and then you can call products to make sure it gets all printed out.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=81)** And when you run this you should have two outputs of data.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=86)** So the first output should show you some information regarding the rows, columns, any specifications with the columns such as if they are characters, doubles, how many there are, what their names are, what the delimiter is, and then in the second output is where you will see your actual data set.
>
> **[1:41](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=101)** So you'll see it is also notated as a tibble with 75 rows and five columns.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=106)** And again here you can see that product information you learned about prior with the product ID, category, item name, price, and target customer.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=115)** You'll also notice again with each of these product columns, below them you'll have chr for character or dbl for double, again denoting the different column types.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=127)** If you wish to see the specifications for the columns in your tibble, you can use the function spec on your tibble you just created.
>
> **[2:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=135)** So we'll use it on products.
>
> **[2:18](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=138)** And here you can see the different columns and products where you have product ID which is a character column, and then down to price where it has a double column.
>
> **[2:27](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=147)** And you'll see that when there are spaces in the names of the column names, for example, target customer, it has a little quotation mark at the top to denote that versus item and price don't, so they don't have any of those.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=163)** Let's copy and paste our original read_csv code and work through some of the different parameters you can adjust with this.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=172)** Let's say you wish to specify the column types of the data you are loading into your tibble.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=177)** In this case, you will change the target customer to a factor data type with three different levels.
>
> **[3:04](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=184)** You can do so with the following code, where you have your read_csv and you'll add a comma, and then you're going to add in your column types parameter, and you're going to equal that to columns.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=196)** And then now you'll be specifying each column name.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=201)** So for example we have product ID and you will equal that to a column character, add a comma, and then you will keep doing this until you get down to your target customer column.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=216)** And now that you're at your target customer column, you can equal this to a col_factor column type.
>
> **[3:45](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=225)** Since it is a factor column type, you will need to specify the levels inside your factor column.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=231)** So you'll create a list of values, and let's have you equal them to corporate, corporate & personal, and finally personal.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=244)** Note that as you are doing this again, you only change the column type for one of the columns.
>
> **[4:09](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=249)** But when you use the col types parameter, typically you need to specify all the column types for each of your columns, even if they say the same except for one.
>
> **[4:19](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=259)** Once you load this, you can now see the target customer column is notated as a factor with those different factors that you have specified.
>
> **[4:29](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=269)** If you run the spec or spec function on your products variable again and load this again, you will see that your target customer column is now a factor column type, and it will list out the three levels you specified earlier.
>
> **[4:47](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=287)** Another way you can specify the column types is by using the shorthand way to reference the column types with the parameter col_types.
>
> **[4:55](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=295)** So copy and paste your code in from above and this time add in col_types and you will equal this to the column types for each of your specified columns.
>
> **[5:07](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=307)** So let's have it be cccdf.
>
> **[5:09](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=309)** So this will be three character columns one double column and one factor column.
>
> **[5:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=315)** So when you run this your column types notated up here should match appropriately to the ones you specified in col_types.
>
> **[5:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=321)** You'll notice that this was much faster and easier than the previous method, so this method is often preferred over the other one.
>
> **[5:29](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=329)** Let's say you want to get rid of that column types message.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=334)** Once you copy and paste in your code, you can add in the parameter show_col_types and equal that to false.
>
> **[5:43](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=343)** So when you run this, it shouldn't have that first message that shows you the information regarding the column types.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=350)** Next, let's say you wish to list out the particular columns you wish to bring into your R code.
>
> **[5:57](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=357)** So once you copy and paste that in, you can then specify the column types by using the parameter col_select.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=365)** And you can list out using c and parentheses your different column names you wish to bring in.
>
> **[6:10](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=370)** So let's bring in product ID, item and price.
>
> **[6:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=375)** When you load this in, you will see that only these three columns have been brought into your code versus all of them at once.
>
> **[6:23](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=383)** This is really helpful to use by reducing the amount of data you are loading into your code initially, and this can help make it run more efficiently.
>
> **[6:34](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=394)** Let's say your data set does not contain any column names.
>
> **[6:38](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=398)** You can notate this by having column names equal to false.
>
> **[6:43](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=403)** And so when you run this, it will not use the top row of values as column names.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=409)** It will simply put in placeholder names such as x1 and x2.
>
> **[6:54](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=414)** Note that for the data you have, this is not necessary, but I just wanted to show you how to use this in case you need it in the future when you come across data that does not have column names, and this will avoid some issues when it comes to accidentally having data as column headers.
>
> **[7:11](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=431)** Let's say you wish to provide the names for the columns.
>
> **[7:14](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=434)** You can do so by adding in the col_names parameter.
>
> **[7:18](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=438)** So add in col_names and equal that to the list of your new column names.
>
> **[7:24](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=444)** I will list them out as a, b, c, d, and e to keep it simple, but note that you could change these to whatever names you so desire.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=456)** Just make sure that the number of column names you have matches the total number of columns in your tibble.
>
> **[7:42](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=462)** So when you run this, you'll now see your new column names of a, b, c, d, and e.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=468)** Let's say you wish to skip some rows of data when loading it into R.
>
> **[7:53](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=473)** You can do this by copying your code and then adding in the parameter skip equal ten.
>
> **[8:01](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=481)** So when you run this, you'll notice you only have 65 rows of data because it is skipping the first ten rows of data.
>
> **[8:09](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=489)** Note that in that skip parameter where the ten is, that is where you specify how many rows of data you wish to skip in your data set.
>
> **[8:16](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=496)** And remember, it'll start at the top when it comes to skipping the rows.
>
> **[8:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=501)** Now let's do the opposite of that and say you only want to keep a certain number of rows of data.
>
> **[8:27](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=507)** So instead of saying skip now you'll say n_max.
>
> **[8:31](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=511)** And let's equal that to ten again to only keep the first ten rows of data.
>
> **[8:35](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=515)** So now you'll see your tibble only has these ten rows of data specified here.
>
> **[8:41](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=521)** Another parameter that may come in handy is the na parameter.
>
> **[8:47](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=527)** If you copy and paste your code in, you will have na, and you can equal this to any parameter you wish to be marked as null in your data set, instead of the current value that is showing.
>
> **[8:59](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=539)** Let's say you want to have the string Personal be listed here, so this means any time the exact string 'Personal' shows up in your data set, it will now fill it in with a null value.
>
> **[9:11](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=551)** So if you run this, you'll see in the target customer column there are null values where Personal used to be.
>
> **[9:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=557)** You'll notice though that Corporate & Personal is still in there because again it needs to be equal to that value exactly.
>
> **[9:24](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=564)** So again because Corporate & Personal is not exactly Personal, it will keep that value in there.
>
> **[9:29](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=569)** Finally, let's write your data into a CSV file.
>
> **[9:34](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=574)** You can use the write_csv function to do this, and you'll want to run this for your products variable.
>
> **[9:41](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=581)** And let's call the new data set KinetEco Products Updated, and make sure you add your .csv at the end to make sure it is a proper CSV file.
>
> **[9:53](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=593)** You can click to run this, and once it is executed, you can navigate to your new CSV file to check it out.
>
> **[10:01](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=601)** Here you can see the updated CSV file with the last version of the products tibble, which if you remember, is when you remove the Personal entries for the target customer columns.
>
> **[10:10](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=610)** So again you'll see these values are now NA instead of Personal.
>
> **[10:14](https://www.linkedin.com/learning/r-tidyverse-applications/load-and-write-data-with-readr?u=76281980&t=614)** Now that you have seen some common functions for the readr package and how to adjust those parameters, let's switch gears and do the same with the readxl package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (22), [[Microsoft Products|Products]] (9), product (6), [[RStudio]] (1), next (1)
> **Code Identifiers:** read_csv (3), col_types (3), col_names (2), col_factor (1), show_col_types (1)
> **CLI Commands:** make (5)
> **Env Vars:** csv (5)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), for example (2)
> **Warnings:** note that (4)
> **Prerequisites:** install (4)

#### Load data with readxl and write with writexl
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=0)** Let's move on to using the readxl package.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=3)** Like with the readr package, you can install and load in all the Tidyverse packages at once using install packages('tidyverse') and library(tidyverse).
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=12)** Let's take a moment to just install the readxl package.
>
> **[0:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=15)** You could do so by using install packages() and this time you want to specify 'readxl'.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=22)** Sometimes if you're installing a package that you have already uploaded, it will ask if you wish to update these loaded packages.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=32)** In order to do this, you may need to restart R in order to successfully update the package.
>
> **[0:38](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=38)** In this case, you could click Yes or No.
>
> **[0:40](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=40)** Up to you.
>
> **[0:40](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=40)** I will click Yes and it will restart R and make sure that it is loaded in appropriately.
>
> **[0:48](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=48)** Now let's load in the readxl package using the library.
>
> **[0:53](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=53)** And now you're ready to go to use the readxl package.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=57)** Let's begin by viewing the different Excel sheet names in the KinetEco Sales xlsx data set.
>
> **[1:04](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=64)** You could do so by using excel_sheets, and inside this function you will call on your KinetEco sales data set with the xlsx file name.
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=76)** And when you run this it will show you there are three different sheet names within this Excel file.
>
> **[1:23](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=83)** These include sales, sales reps and sales regions.
>
> **[1:28](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=88)** In this course, you will mainly focus on the sales and sales rep sheets, since the sales regions' data is already in the sales sheet.
>
> **[1:37](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=97)** Let's create a new tibble called sales and then use the read_excel function to load in your KinetEco sales data set.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=106)** So you'll look at the KinetEco sales data set for the Excel file.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=113)** And then you will need to specify the sheet name since there's more than one sheet in your data set.
>
> **[1:59](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=119)** So you'll have sheet and let's call it by its name sales.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=123)** It is a good habit to specify the sheet name, since many Excel files have more than one sheet in them.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=129)** Note that if you do not specify the sheet name, it will default to whatever the first sheet is in your data set.
>
> **[2:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=135)** Note that it is also unnecessary to have the sheet parameter if your Excel file only has one sheet, but again, it won't hurt if you specify it.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=144)** Let's call the sales data set to print it out, and when you run this, you will then be able to view your tibble with all of your sales data.
>
> **[2:32](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=152)** You'll see there are 5,448 rows and 18 columns to this data set.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=158)** And you'll see there are the first ten rows and the first eight columns.
>
> **[2:41](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=161)** And if you click here to scroll to the right, you can view the different column names and their values.
>
> **[2:46](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=166)** And down here you can scroll through the different row values.
>
> **[2:49](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=169)** So that's the second page.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=170)** That's the third page and so on.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=173)** Let's look at the sales rep sheet next.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=177)** Go ahead and copy and paste your code from above.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=180)** But this time you're going to change sales to be sales reps for both of these values.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=185)** And then this time you're going to be specifying the sheet by the sheet number instead of the sheet name.
>
> **[3:11](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=191)** So instead of sales you'll put the value 2.
>
> **[3:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=195)** Note that sheets are numbered in increments of one, beginning with the number 1 for the first sheet.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=201)** So again, because sales reps is the second sheet, you will be specifying it as a 2 to reference that particular sheet in your Excel file.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=209)** When you run this, you will notice your tibble has 44 rows and five columns of data with the different sales reps information.
>
> **[3:39](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=219)** Go ahead and copy and paste your sales reps code from above.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=223)** But this time, instead of using the read_excel function, you can backspace and use the read_xlsx function.
>
> **[3:50](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=230)** When you run this, it should have the same output.
>
> **[3:52](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=232)** Just note that this is the particular function to read just xlsx Excel files instead of both xlsx and xls files.
>
> **[4:02](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=242)** In this course I will mainly focus on using the read_excel function, even though you can use these interchangeably just because it recognizes both types of Excel files, hence making it easier and more consistent when it comes to using it in the future.
>
> **[4:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=257)** Let's say you want to specify or change the column types as you are loading in your data.
>
> **[4:23](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=263)** Once you copy and paste the code from above, you can then add in the parameter called types and then equal this to the column types you wish to have.
>
> **[4:33](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=273)** Just make sure the number of column types matches the number of columns in your tibble.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=279)** So let's have a list of values.
>
> **[4:42](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=282)** And you can have numeric, text, and then go ahead and have text two more times, and then finally date.
>
> **[4:54](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=294)** When you run this you'll see the column types are named differently within the tibble.
>
> **[5:00](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=300)** So dblrepresents double or numeric, chr represents character or text, and then finally the POSIXct represents date.
>
> **[5:12](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=312)** Remember you can use the resource from earlier on in the chapter with that table to let you know the different column types and how they are notated in R versus Excel versus in this col_types parameter.
>
> **[5:25](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=325)** Let's go ahead and work with the sales code again.
>
> **[5:28](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=328)** And let's change the sheet to reference it as a 1 for the sheet number instead of the sheet name.
>
> **[5:35](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=335)** Let's say you want to pull in just the first five columns of your data set.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=339)** You could do this with the range parameter and equal it to cell_cols and have it indexed from the values 1 - 5.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=350)** When you do this, you will notice you still have your same amount of rows of data, but now you only have those first five columns of data listed in from employee ID to order number.
>
> **[6:02](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=362)** Go ahead and copy and paste that code from above.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=365)** But instead of cell_cols, let's have it be cell_rows.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=368)** And so this way you will only load in the first four rows of data.
>
> **[6:13](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=373)** So when you run this you'll notice only the first four rows are loaded.
>
> **[6:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=377)** So remember what the cell_cols 1 - 5 is going to include that fifth value.
>
> **[6:22](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=382)** But for rows it is only going to include the values 1 to the value right before that last specified value.
>
> **[6:29](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=389)** So again this would be between 1 to 4.
>
> **[6:32](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=392)** Let's copy and paste the sales data again.
>
> **[6:36](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=396)** But this time let's say your data set does not have any column names in it.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=400)** You could specify column names equal to false and run this.
>
> **[6:46](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=406)** And what this will do is it will put in placeholder column headers and put in each row of data in that Excel file into an actual row in the data set.
>
> **[6:58](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=418)** Note again, this particular data set does not need this, but again, it is good to know for future cases where you have data sets that have no column headers to ensure it doesn't actually put data as a column header.
>
> **[7:10](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=430)** You'll see R puts in base column names such as ...1, ...2, and so on for the different column names.
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=437)** So it's a little different than how the readr package does it.
>
> **[7:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=441)** Like with readr, let's say you wish to specify the column names. Copy and paste the base sales reps code, and this time you'll want to specify your column names with the col_names parameter.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=456)** And I will just use a simple list of values of a, b, c, d, and e.
>
> **[7:45](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=465)** Note you can call these column names whatever you wish.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=468)** I'm just using simple letters for now.
>
> **[7:51](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=471)** If you run this though, you will notice all the column names are classified as characters, which is not necessarily correct.
>
> **[7:58](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=478)** For example, with that start date.
>
> **[8:01](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=481)** This will happen if you don't specify the column types when naming the columns with the readxl package.
>
> **[8:08](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=488)** The way you get around this is by specifying the column types.
>
> **[8:12](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=492)** So here you'll have the column types and you'll equal that to your list of values.
>
> **[8:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=497)** So you have numeric, text.
>
> **[8:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=501)** And again make sure you have text three times.
>
> **[8:26](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=506)** And then finally date.
>
> **[8:28](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=508)** When you run this again it looks like your values should be good to go, it has the double, the characters and the date value at the end.
>
> **[8:38](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=518)** Let's say you want to skip the first ten rows of data in your data set.
>
> **[8:42](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=522)** Copy and paste your sales rep code, and this time have the skip parameter equal to ten.
>
> **[8:48](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=528)** So again, similar to the reader package where you run this, you will now see only 34 rows of data.
>
> **[8:55](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=535)** Next when you copy and paste in your code this time around, let's have you just bring in the top ten rows of data.
>
> **[9:03](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=543)** So you'll use n_max like you did with readr and specify ten.
>
> **[9:07](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=547)** And now you'll see only the top ten rows of data in your sales reps data set.
>
> **[9:13](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=553)** After that, copy and paste your code in again.
>
> **[9:17](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=557)** But this time let's play around with that na parameter.
>
> **[9:20](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=560)** So again, this will fill in any values that you specify with a null value instead when it brings it into the data set.
>
> **[9:27](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=567)** Let's have any Central East values filled in with NA.
>
> **[9:31](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=571)** So when you run this you'll see a lot of region values are notated as NA.
>
> **[9:35](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=575)** Again, like before the N Central East is going to stay because that is not the exact value that was specified to have as null.
>
> **[9:45](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=585)** There are a few different packages you can use to write Excel data to a file since the read Excel package does not have this functionality like the readr package does. These packages include openXLSX, writexl and tidyxl.
>
> **[10:01](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=601)** Let's use the writexl package like before.
>
> **[10:05](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=605)** To install this package, use install packages and let's install the writexl package.
>
> **[10:11](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=611)** So you click run and this should install the package for you.
>
> **[10:15](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=615)** Once it is installed again you can use library to load it in.
>
> **[10:19](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=619)** So let's load in the package writexl.
>
> **[10:21](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=621)** And now it is ready to go to write data to a file.
>
> **[10:25](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=625)** To write the sales reps data to an Excel file, you will use the function write and xlsx and you will want to call in your sales reps variable.
>
> **[10:36](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=636)** Then let's call on the KinetEco sales reps updated.xlsx and this will be your new file name.
>
> **[10:45](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=645)** When you run this, this should save the updated file name to your computer.
>
> **[10:50](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=650)** Here you could see the updated Excel file with the last version of the sales reps tibble you made.
>
> **[10:56](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=656)** So if you remember correctly, we took out the Central East region.
>
> **[11:00](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=660)** And so that is why these values are now blank.
>
> **[11:04](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=664)** You can find more information about the writexl package via the URL docs.[ropensci.org/writexl](https://ropensci.org/writexl)/ This will give you more information such as how to install and get started with a package, along with some basic examples.
>
> **[11:22](https://www.linkedin.com/learning/r-tidyverse-applications/load-data-with-readxl-and-write-with-writexl?u=76281980&t=682)** Let's put this knowledge of loading data to the test with a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (34), [[Microsoft Excel|Excel]] (14), next (2)
> **Code Identifiers:** read_excel (3), cell_cols (3), excel_sheets (1), read_xlsx (1), col_types (1)
> **Prerequisites:** install (9), make sure you have (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (2), for example (1), similar to (1)
> **Warnings:** note that (4)
> **UI Navigation:** go to (2)
> **URLs:** [ropensci.org](https://ropensci.org) (1)

#### Solution: Load data
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=5)** Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=6)** Great job unloading the customer data for KinetEco.
>
> **[0:09](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=9)** If you felt overwhelmed with this challenge, that is totally okay.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=13)** I will explain step by step what should have been filled in and what each line of code is doing.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=18)** Let's head over to RStudio.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=20)** You will begin by loading in the readxl package, which you can use the library function for with 'readxl'.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=28)** This will load in the package for your R code.
>
> **[0:33](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=33)** Now that the package is loaded in, you can view the sheet names for the customer data in your Excel file.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=39)** So you'll call in the excel_sheets function and look at your KinetEco customer.xlsx data set.
>
> **[0:49](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=49)** When you run this, you'll see there are two sheet names.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=52)** So you have Individual and then Business.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=55)** Note that the order of the sheet names corresponds with the order the sheets are inside the actual Excel file.
>
> **[1:01](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=61)** Note that you may need to adjust the path name for this file if you do not have the data set inside the same folder as your coding file.
>
> **[1:10](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=70)** Let's first load in the business customer data.
>
> **[1:13](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=73)** You will use the readxl function for this.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=75)** And so let's call this data set Business Customer.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=80)** And you will assign this to that readxl function with your KinetEco customer data set.
>
> **[1:27](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=87)** Since you want to find the business customer data by sheet name, you'll specify a sheet and equal it to Business.
>
> **[1:34](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=94)** Remember, you can gather the sheet name from that Excel sheets function that you had earlier.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=100)** Finally, you only want to return the first 50 rows of data, so you can use the n_max function and assign the value 50 to that to only return the first top 50 rows of data of your data set.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=115)** Go ahead and call on business customer to print it out, and when you run this, you'll be able to view the first 50 rows of your data set for your business customer data.
>
> **[2:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=126)** You'll see in customer type, it looks like the values are all business, which means that it should be the correct sheet of data since it should only have business customers in it.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=136)** Next, let's pull in the individual customer data.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=139)** You can copy and paste the code from above and edit it.
>
> **[2:23](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=143)** Or you could type this from scratch.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=145)** You will call the variable individual customer instead of business customer.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=150)** So you can edit that there.
>
> **[2:33](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=153)** And then instead of referencing the sheet by the sheet name, this time you'll reference it by the sheet number.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=160)** Since individual is the first sheet, as you saw in the excel_sheets function, you'll type in a 1 to reference the individual customer's sheet inside your data set.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=170)** Next, you only want to bring in the columns customer type to sales region.
>
> **[2:55](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=175)** You can either determine these values from the data set above, since it should be similar to the business customer one up here, or using the actual Excel file to determine the positions of these columns.
>
> **[3:08](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=188)** So let's use the range parameter with the cell_cols function, and let's index these values from 2 - 6 to get the second through these six columns.
>
> **[3:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=199)** Finally, you will want to skip the first 25 rows of data.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=204)** You could do this by adding in the parameter skip equal to 25.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=209)** When you run this, you should see there are only five selected columns of data.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=214)** So again you have your over 2000 rows of data, but you only have your five columns.
>
> **[3:40](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=220)** If you look at the customer type column, they are all shown as individual, which means that it should be the correct sheet from your data set.
>
> **[3:47](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=227)** As far as checking if you did successfully skip the first 25 rows of data, you can either remove that parameter to check to see if the values match up, or by just looking at the Excel file.
>
> **[3:58](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=238)** Now you have a better understanding of how to load in data for KinetEco.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=244)** I hope you enjoyed this challenge and that it helps you reinforce how to load in data using these R packages.
>
> **[4:10](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=250)** If you struggled or weren't able to get the code to run properly on your own, that is totally okay.
>
> **[4:15](https://www.linkedin.com/learning/r-tidyverse-applications/solution-load-data?u=76281980&t=255)** Programming takes practice to get better at, so keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (24), business (11), [[Microsoft Excel|Excel]] (5), next (2), [[RStudio]] (1)
> **Code Identifiers:** excel_sheets (2), n_max (1), cell_cols (1)
> **Definitions:** means that (2)
> **Warnings:** note that (2)
> **CLI Commands:** find (1)
> **Cross-References:** as you saw (1)
> **Analogies:** similar to (1)


### 2. Manipulate Data

[↑ Back to Table of Contents](#table-of-contents)

#### Dealing with missing values with tidyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=0)** In this chapter, I will dive into different ways you can manipulate data in R using the Tidyverse.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=6)** I will show you how to use the tidyr, stringr and lubridate packages.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=11)** Let's begin with the tidyr package.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=14)** The tidyr package has a wide range of functions, allowing you to create tidy data to meet the standards needed to use a lot of other packages with minimal to no errors.
>
> **[0:24](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=24)** This includes reshaping data, dealing with missing values, and dealing with nested data.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=30)** This works on the concept of tidy data.
>
> **[0:33](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=33)** Remember from the earlier tibble video that data is tidy if each variable is in its own column, each observation is in its own row.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=41)** You can access variables as vectors and you can preserve cases in vectorized operations.
>
> **[0:48](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=48)** An operator you will begin using frequently is the pipe operator.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=52)** This is denoted with a percentage sign, a greater sign, and another percentage sign.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=57)** The short explanation of this is it allows you to chain multiple operations together within your code.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=63)** In your case, it will allow you to use different Tidyverse functions within your data sets.
>
> **[1:09](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=69)** One resource you can use for the tidyr package is the Tidyverse website.
>
> **[1:13](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=73)** You can navigate to the URL tidyr.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[1:22](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=82)** Let's head over there now.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=84)** On the tidyr package page, you'll see there is an overview of what the package does, including what makes tidy data.
>
> **[1:32](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=92)** Below that, you'll view some installation instructions for installing the entire Tidyverse along with just the tidyr package.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=100)** And below that is the cheat sheet, which you can either save here or on the GitHub page.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=105)** Below that is some information on how to get started using the tidyr package, along with some common functions.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=113)** Below that is some related work dealing with the tidyr package.
>
> **[1:58](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=118)** And finally, how to get some help using this package.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=121)** Let's head over to the tidyr GitHub by going to [github.com/tidyverse/tidyr](https://github.com/tidyverse/tidyr).
>
> **[2:08](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=128)** On this GitHub page you can view the code behind the tidyr package.
>
> **[2:13](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=133)** If you scroll down, you can view some information similar to the Tidyverse web page, including your cheat sheet.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=141)** I highly recommend you download this cheat sheet for your reference.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=144)** Let's take a moment to look at the cheat sheet you just downloaded.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=148)** The cheat sheet you downloaded should look similar to mine, but it may have some updates from when this course was posted.
>
> **[2:35](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=155)** You'll notice the tidyr cheat sheet contains the tibble information as mentioned earlier, and this will be on the left hand side with the tibble explanation along with some functions.
>
> **[2:46](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=166)** The first page of this tidyr cheat sheet focuses on reshaping data, splitting cells, expanding tables, and handling missing values.
>
> **[2:55](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=175)** The second page focuses on dealing with nested data.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=178)** Nested data will not be covered in this course, but I highly recommend using this cheat sheet and other resources to explore this on your own.
>
> **[3:07](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=187)** Let's head over to RStudio to begin using the tidyr package.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=192)** Once you're in RStudio, go ahead and run the top portion of your code that is, run first to load in your readxl package along with your customer data set.
>
> **[3:23](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=203)** Like before, you can use the whole Tidyverse to install and load your packages.
>
> **[3:28](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=208)** This code is shown in comments for your reference here and here.
>
> **[3:32](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=212)** But let's say you just want to install the tidyr package.
>
> **[3:37](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=217)** To do that you can do install.packages() and you will call just the 'tidyr' package.
>
> **[3:45](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=225)** And once you run this, this should install the package. Again, if it is already installed, you can either restart R to upload it and make sure it's updated, or you could click Cancel or No to not do that.
>
> **[3:56](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=236)** Next you'll be loading in the tidyr package and you can do this by typing in library tidyr and run this.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=245)** And now your package is ready to go to use.
>
> **[4:08](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=248)** Let's begin by exploring this package by dealing with null values.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=252)** First, let's check to see if there are any null values in the data set.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=256)** Using the base R function is.na.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=260)** And let's look at your customer variable.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=264)** The result for this is not super helpful due to the wide expanse of true and false values you see throughout your data set.
>
> **[4:33](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=273)** Go ahead and copy and then paste this code into your next coding cell, but this time add in the sum function around this to sum up the number of null values.
>
> **[4:47](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=287)** When you run this, you will see there are 34 null values that occur in your data set.
>
> **[4:52](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=292)** This is definitely much more helpful than the previous output, but this does not tell you where those null values are occurring.
>
> **[5:01](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=301)** Go ahead and copy and paste this code and put it here.
>
> **[5:05](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=305)** But this time, instead of just summing the value, you're going to do a column sums value.
>
> **[5:12](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=312)** And what this will do is it will sum up the null values by column.
>
> **[5:16](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=316)** When you run this you will see there are nine null values in customer type, six null values and customer name, and 19 null values in SalesRegion.
>
> **[5:26](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=326)** All the rest of the columns have zero null values, so that means that they are good to go.
>
> **[5:30](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=330)** Let's begin by dealing with the null values in the SalesRegion column.
>
> **[5:36](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=336)** Go ahead and call on your customer variable and assign it to itself, and then use the pipe operator so you can use the fill function for your SalesRegion column.
>
> **[5:49](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=349)** What this will do is it will fill the null values based on the previous or next value, depending on which direction you specify.
>
> **[5:57](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=357)** Let's have the direction equal to down.
>
> **[6:00](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=360)** What this will do is it will use the previous value in the data set.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=365)** So again the row above it and it will use that value to fill in the null value below it.
>
> **[6:10](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=370)** You can copy and paste the sum(is_na) code for customers.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=378)** Paste it down here.
>
> **[6:20](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=380)** And this time you will look at the customer SalesRegion column in particular to sum up those null values.
>
> **[6:29](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=389)** Finally, you can print out the customer results.
>
> **[6:34](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=394)** When you run this, your first output should be summing any null values in your SalesRegion column.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=400)** You'll see that that is a zero.
>
> **[6:42](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=402)** So that means that you have successfully filled in all those null values with something.
>
> **[6:47](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=407)** Your second output should show your updated tibble.
>
> **[6:52](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=412)** So with the SalesRegion, wherever there is a null value before, it will then use that previous value to fill it.
>
> **[6:59](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=419)** So for example, if there's a null value here, it would then fill in central east as that value because that is the one that shows before it.
>
> **[7:08](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=428)** Next let's work with the customer CustomerType column and you can assign it to itself.
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=437)** This time you'll have your pipe operator and you will use the replace_na function.
>
> **[7:23](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=443)** What this will do is it will specify what exact value you wish to replace all those values inside your tibble column.
>
> **[7:32](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=452)** So let's replace them with Individual.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=456)** Like before, you can copy and paste the code from above and instead of summing the values for SalesRegion, you could sum them for CustomerType, and this will then view how many null values are left in this column.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=468)** Along with viewing your updated customer tibble. With your results, your first value should be zero, meaning that the CustomerType column now has zero.
>
> **[7:57](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=477)** No values left.
>
> **[7:58](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=478)** Here you'll see your updated tibble.
>
> **[8:01](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=481)** And so in the CustomerType column, wherever there is a null value before should be filled in with the value Individual instead.
>
> **[8:10](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=490)** Now let's drop rows where null values occur in the CustomerName column.
>
> **[8:16](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=496)** So call on your customer variable and your customer variable again.
>
> **[8:22](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=502)** Use the pipe operator.
>
> **[8:23](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=503)** In this time you will use the drop_na function.
>
> **[8:26](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=506)** So what this will do is it will drop any rows that contain a null value in this particular column of CustomerName.
>
> **[8:33](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=513)** So even if there are non null values in that same row, if there's a null value in that CustomerName column, it's going to drop the entire row from the data set.
>
> **[8:41](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=521)** You can copy and paste that summing code from above.
>
> **[8:44](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=524)** But again make sure to change this to CustomerName to ensure that it sums up any null values left in that column.
>
> **[8:53](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=533)** When you run this, your first output should show a zero to show that there are no null values left in your CustomerName column, and then in your data frame.
>
> **[9:02](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=542)** This should be six rows less than it was previously, as far as the number of rows in your data set, because it has removed those six null values from your data set by removing the entire row of data.
>
> **[9:15](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=555)** For a final sanity check, let's sum up the total number of null values in your data set.
>
> **[9:21](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=561)** So you'll do sum(is_na) on the customer variable.
>
> **[9:27](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=567)** This should show a zero, which means that you are good to go when it comes to having any null values in your tibble.
>
> **[9:33](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=573)** So great work by getting rid of all those null values using different techniques.
>
> **[9:38](https://www.linkedin.com/learning/r-tidyverse-applications/dealing-with-missing-values-with-tidyr?u=76281980&t=578)** In the next video, I will expand on the tidyr package by showing how you can reshape data with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), next (5), [[GitHub]] (4), [[RStudio]] (2), web (1)
> **Definitions:** means that (3), is a  (2), is an  (1)
> **Code Identifiers:** is_na (2), replace_na (1), drop_na (1)
> **Tools:** github (4)
> **Prerequisites:** install (4)
> **UI Navigation:** navigate to (1), scroll down (1), go to (1)
> **Analogies:** similar to (2), for example (1)
> **CLI Commands:** make (2)

#### Reshaping data with tidyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=0)** Let's continue exploring the tidyr package by exploring some of the functions, including pivoting, splitting, and expanding your data.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=8)** To begin, run the top block of code to load in your packages and sales data.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=14)** Let's begin by splitting the EmpName column into first and last names.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=19)** You could do this by calling on the sales variable, your pipe operator, and let's use the separate wider delim function.
>
> **[0:27](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=27)** And so what this will do is it will allow you to split values in the column into multiple columns.
>
> **[0:34](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=34)** The column you want to split is the EmpName column.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=37)** And the delimiter you will want with the split is going to be a space.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=41)** So just make sure you have quotation marks and a space.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=44)** Finally, you'll want to name your new columns using the parameter names and equal that to your list of two new column names.
>
> **[0:53](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=53)** So let's call them EmpFirstName and then EmpLastName.
>
> **[1:01](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=61)** Once you run this, you should be able to see your second and third column contain the first and last name for each employee.
>
> **[1:09](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=69)** You'll also note that the default setting is to remove the column that you split the values from, so you won't see that original EmpName column.
>
> **[1:17](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=77)** You'll just see the employee first name and last name columns.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=81)** Next, you'll do the opposite of the last task and you will unite two columns together.
>
> **[1:28](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=88)** Go ahead and call on the sales variable, your pipe operator, and then use the unite function on the Product column.
>
> **[1:38](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=98)** And let's unite ProdNumber and ProdName.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=104)** And so these will be the two columns that are uniting together to create your new column Product.
>
> **[1:50](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=110)** Let's have the separator for them equal to a dash and a space.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=115)** Finally add in the parameter remove = false to allow you to keep the original columns in the data set, ProdNumber and ProdName, along with your new column called Product.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=127)** When you run this and scroll to the right, you can view again your product column, which has your combined product number, a dash and space, and then the product name.
>
> **[2:18](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=138)** But you'll see you still have your ProdNumber and your ProdName columns.
>
> **[2:23](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=143)** Next, let's split the Product column by expanding the data.
>
> **[2:27](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=147)** Copy and paste the code from above, but change the separator to be a slash Instead of a dash and a space.
>
> **[2:37](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=157)** You'll save this to a new variable called sales_product.
>
> **[2:44](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=164)** And then now you can call on your sales_product variable in a pipe operator.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=172)** And then you can use the separate_longer_delim function.
>
> **[2:59](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=179)** What this will do is it will separate your data and expand it vertically instead of horizontally, like you did earlier.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=186)** Go ahead and call on that Product column and have the delimiter equal to a slash.
>
> **[3:14](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=194)** When you run this, you'll note there are double the rows from before, so now there are over 10,000 rows of data.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=201)** If you look through this, you'll see that each row of data has been duplicated to be showing up two times instead of one.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=210)** If you scroll to the right, you'll see that the product column now has two different entries for each two rows of data.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=216)** So first it'll have the product number and then it'll have the product name.
>
> **[3:40](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=220)** So again this will go for each row entry that you used to have is now split into two with these two different values for the product column.
>
> **[3:49](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=229)** Note that this for particular use case this function is not very useful. But this technique may be helpful in other data you may interact with where you need to vertically expand it when you are splitting your data.
>
> **[4:02](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=242)** Next, you will view the unique values occurring in a column.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=246)** So go ahead and call on your sales variable, your pipe operator, and use the expand function on your ProdCategory column.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=256)** When you run this, you'll see there are seven unique options for product category of values that can occur throughout the data set.
>
> **[4:25](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=265)** You can use the same technique on multiple columns to view all the possible combinations of those columns.
>
> **[4:31](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=271)** So call your sales variable again your pipe operator and your expand function.
>
> **[4:36](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=276)** But this time look at OrderType and CustType.
>
> **[4:41](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=281)** When you run this, you'll see there are four different combinations of OrderType and CustType with retail and wholesale and then business and individual.
>
> **[4:51](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=291)** Note that for multiple variables, this particular expand function will include all possible combinations of these variables, even if those combinations do not occur in your data set.
>
> **[5:02](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=302)** Let's move on to pivoting some data.
>
> **[5:05](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=305)** This is another way you can expand your data horizontally or vertically in reference to specific columns.
>
> **[5:11](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=311)** Let's call on the sales variable, your pipe operator, and let's use the pivot_wider function to pivot your data horizontally.
>
> **[5:20](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=320)** You'll want to specify your names from parameter.
>
> **[5:24](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=324)** And let's get these from order type.
>
> **[5:27](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=327)** This is where you will gather values for your new columns.
>
> **[5:32](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=332)** After that it's going to be the values from parameter.
>
> **[5:36](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=336)** Let's have those values be from Order Total.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=339)** This will have the values from Order Total appear in your new pivoted columns.
>
> **[5:46](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=346)** When you run this and scroll all the way to the right, you can view your pivoted data.
>
> **[5:52](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=352)** So you'll see there is a column called retail and a column called wholesale where it has those pivoted, ordered total values in each of those columns respectively.
>
> **[6:04](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=364)** Next, load an order type quantity as a new tibble of data.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=368)** This code has been provided for you for your ease.
>
> **[6:12](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=372)** If you look at this data set, you'll see it's a tibble with seven rows and three columns with product category, along with the retail and wholesale values.
>
> **[6:21](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=381)** Next, let's pivot your data longer instead of wider.
>
> **[6:25](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=385)** Call on your new variable order_type_quantity.
>
> **[6:31](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=391)** Use your pipe operator and this time use pivot_longer instead of pivot_wider.
>
> **[6:38](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=398)** You will first want to specify the columns you wish to pivot on.
>
> **[6:42](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=402)** So let's specify the columns equal to the columns 2 and 3, which will be retail and wholesale.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=409)** This time have the names_to parameter equal to OrderType.
>
> **[6:56](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=416)** This will be the new column you create from your expanded data using the current column headers. For your values_to parameter, you can equal this to TotalQuantity.
>
> **[7:10](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=430)** This will gather the values from the data that you will be expanding vertically.
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=437)** When you run this, you'll see the data is now twice as long with those two new columns.
>
> **[7:23](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=443)** So up here remember you had the retail and wholesale values in their two separate columns.
>
> **[7:28](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=448)** Now you'll see for each of these product categories the order type is listed whether it's retailer wholesale instead of them being column headers, and then the TotalQuantity is now listed in its own column for each of these values.
>
> **[7:43](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=463)** Copy and paste this code from above, but let's slightly adjust this.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=468)** This time, instead of specifying the columns you wish to pivot using the columns parameter.
>
> **[7:54](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=474)** You can simply state which column you wish to not pivot.
>
> **[7:58](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=478)** So you could take out this cols = 2 - 3 and instead add an exclamation point and ProdCategory to say that is the column you wish to not have pivoted.
>
> **[8:08](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=488)** When you run this, the result should look the same as before.
>
> **[8:12](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=492)** But again, sometimes it is a little simpler to state which column you wish to not pivot versus which columns you wish to pivot.
>
> **[8:20](https://www.linkedin.com/learning/r-tidyverse-applications/reshaping-data-with-tidyr?u=76281980&t=500)** Next up, let's dive into the stringr package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (22), product (15), next (6), business (1)
> **Code Identifiers:** sales_product (2), pivot_wider (2), separate_longer_delim (1), order_type_quantity (1), pivot_longer (1)
> **Warnings:** note that (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** make sure you have (1)

#### Mutate strings with stringr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=0)** Let's take a look at the stringr package.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=3)** The stringr package helps you manage strings in the tidyverse, hence the name containing string.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=8)** Since string data is often messy, this package aims to help you clean and prepare your string data for analysis by doing tasks such as mutating, manipulating, joining, and splitting strings.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=20)** This package is built off of the stringi package.
>
> **[0:23](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=23)** stringr focuses on providing fast and easy implementations of the most common string functions used in that stringi package.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=32)** Note that many of the stringr functions shown in these few videos will be more helpful with tibbles when used with later packages such as dplyr.
>
> **[0:40](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=40)** One resource you can use for the stringr package is the Tidyverse website.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=44)** You can navigate to the url stringr.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=52)** Let's head over there now.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=55)** On the stringr package page, you'll see there is an overview of what the package does.
>
> **[1:00](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=60)** Then you can view the installation instructions down here of how to install the whole Tidyverse or just stringr, along with the cheat sheet.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=68)** Again, note you can download the cheat sheet directly here or on the GitHub page.
>
> **[1:12](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=72)** Below that are some instructions on how to use the package with some of its common functions, and then finally some other information dealing with RStudio Addin compared how it is to using base R, and learning more about some of the other functions.
>
> **[1:28](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=88)** Let's head over to the stringr GitHub page, which is [github.com/tidyverse/stringr](https://github.com/tidyverse/stringr).
>
> **[1:35](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=95)** On this GitHub page you can view the code behind the stringr package. If you scroll down This information should be similar to what is shown on the Tidyverse web page, including that cheat sheet which you can find right here.
>
> **[1:49](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=109)** I highly recommend you download this cheat sheet for your reference.
>
> **[1:52](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=112)** Let's take a moment to look at this cheat sheet that you just downloaded.
>
> **[1:56](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=116)** The cheat sheet you downloaded should look similar to mine, but it may have some updates from when this course was posted.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=123)** The main page focuses on detecting string matches, mutating strings, subsetting strings, joining and splitting strings, managing strings links, ordering strings, and some helper functions.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=136)** The second page focuses on string expressions.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=139)** This will not be thoroughly covered in this course, but I highly recommend using this cheat sheet and other resources to study these strings expressions on your own.
>
> **[2:27](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=147)** Let's head over to RStudio to begin using the stringr package.
>
> **[2:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=152)** Begin by running the top portion of your code to load in your data and your readxl package.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=158)** Like before, you can use the whole Tidyverse to install and load your packages with this code that's commented out.
>
> **[2:44](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=164)** Or you could simply just install the stringr package.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=167)** To install the stringr packages, you can use the install packages() function with the 'stringr' package in particular. You can click run and again you can update the package.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=177)** You click Yes, Cancel or No.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=178)** Since it looks like the package is already downloaded, I'll just click cancel here since I already have it loaded in.
>
> **[3:04](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=184)** To load on the stringr package, you can use Library and stringr, and now your package is ready to go.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=192)** Let's begin by exploring how to mutate strings.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=197)** I'll start off by getting a subset of the strings in the OrderNum column.
>
> **[3:22](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=202)** So look at these cells, OrderNum column and assign it to itself.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=209)** So again, the sales OrderNum column.
>
> **[3:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=212)** And let's use the pipe operator to then use the str_sub function.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=216)** And what this will do is it will gather a subset of strings on index values.
>
> **[3:41](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=221)** So let's index them from values 4 to 7.
>
> **[3:44](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=224)** Finally, let's print out your sales variables so you can view the results.
>
> **[3:50](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=230)** Now when you look at your OrderNum column, you'll see that the order numbers are now only four characters long.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=237)** Because again it should have values 4 or 5, six and seven from that particular subset string.
>
> **[4:03](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=243)** Next let's replace some values.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=245)** Call on the sales variable and then your OrderType column and assign it to itself.
>
> **[4:14](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=254)** So sales OrderType .
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=256)** And let's add in your pipe operator for your next string operation.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=260)** So this time you'll use the string operation.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=262)** str_replace.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=264)** And what you'll want to do is you'll want to replace whenever Wholesale shows up in your string, you instead want it to say B2B.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=272)** This stands for Business to Business.
>
> **[4:36](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=276)** Again, make sure you print out your sales variables so you can view the results.
>
> **[4:40](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=280)** With your results, you will see that B2B should now show up instead of wholesale inside your order type column.
>
> **[4:47](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=287)** So again, as you scroll through you should see B2B show up throughout.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=293)** Now let's do something similar for the sales SalesReg column by assigning it to itself.
>
> **[4:59](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=299)** So you have sales, SalesReg, assign it to itself.
>
> **[5:05](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=305)** And add in your pipe operator.
>
> **[5:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=308)** But this time, instead of just using replace, you will use the replace_all function.
>
> **[5:15](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=315)** The main difference between these functions is replace just replaces the first occurrence, versus replace_all does for all the occurrences.
>
> **[5:23](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=323)** This sometimes does not matter as much in tibbles as you saw earlier, but with other data types this can be very important and impactful.
>
> **[5:31](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=331)** So again, just keep in mind that sometimes you will want to just use replace to get that first instance.
>
> **[5:36](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=336)** Other times you want to use the replace_all function to make sure you get all of the instances.
>
> **[5:41](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=341)** This time let's replace wherever there is an a with the string of a zero.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=348)** And then make sure to print out your sales variable to view your results.
>
> **[5:53](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=353)** In your result, you should see in the SalesReg column, wherever there is an a, there is now a zero.
>
> **[5:59](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=359)** So again, you'll see how with the str_replace or replace_all function, you can replace even just one character versus an entire string.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=368)** And again, it should do that for all those values that you specified.
>
> **[6:13](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=373)** Let's pivot to change some character casing with your strings.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=378)** Let's look at that SalesReg column again and then assign it to itself and add in your pipe operator.
>
> **[6:28](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=388)** And this time you're going to use the str_to_upper function.
>
> **[6:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=392)** And so what this will do is it will uppercase all the string values in the SalesReg column.
>
> **[6:39](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=399)** So if you type out sales and then you look at the SalesReg column, you'll see that all these values are now completely uppercase because of that str_to_upper function.
>
> **[6:52](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=412)** Next, let's look at the ProdCategory column.
>
> **[6:56](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=416)** So you'll use the sales ProdCategory.
>
> **[6:58](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=418)** Assign it to itself.
>
> **[7:02](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=422)** Add in your pipe operator.
>
> **[7:05](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=425)** And this time instead of upper casing everything let's go ahead and lowercase everything with str_to_lower and make sure to add in your sales variables so you can view the results.
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=437)** So let's scroll over to ProdCategory.
>
> **[7:20](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=440)** And so now you'll see all these values in this column are going to be all lowercase versus before they were title cased.
>
> **[7:28](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=448)** Finally let's look at the ProdName column.
>
> **[7:32](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=452)** And so for this one you'll add in your ProdName again and your pipe operator.
>
> **[7:41](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=461)** And this time what you'll do is you'll do str_to_title.
>
> **[7:44](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=464)** And so what this will do is it will title case your values instead of fully upper casing or lower casing them.
>
> **[7:52](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=472)** When you run this and scroll over to the ProdName column, you'll see that everything should be title case, which means the first letter in each word inside this column should be uppercase now.
>
> **[8:03](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-strings-with-stringr?u=76281980&t=483)** In the next video, you will continue exploring the stringr package by learning how to manipulate strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[GitHub]] (4), next (4), [[RStudio]] (2), business (2)
> **Code Identifiers:** replace_all (4), str_replace (2), str_to_upper (2), str_sub (1), str_to_lower (1)
> **CLI Commands:** make (4), find (1)
> **Prerequisites:** install (5)
> **Tools:** github (4)
> **Definitions:** is an  (3), stands for (1)
> **Analogies:** such as (2), similar to (2)
> **Env Vars:** b2b (3)

#### Manipulate strings with stringr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=0)** Let's continue exploring working with strings with the stringr package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=4)** This video will focus on a variety of ways to manipulate strings.
>
> **[0:07](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=7)** First, run the top portion of your code to load in your packages and your sales data.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=13)** For some of the functions shown in this video, I will demonstrate how you can use them on a basic level, but note that you can use them by saving them to a new column or in combination with other packages such as dplyr, which will be shown in later videos.
>
> **[0:27](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=27)** For the first function, let's see where a certain string occurs.
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=31)** Go ahead and call str_detect.
>
> **[0:34](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=34)** And then let's do this for the CustName column.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=39)** And the string you wish to find is Price.
>
> **[0:46](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=46)** When you run this you'll see mainly a lot of false values with the occasional true values such as here.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=52)** The main thing to keep in mind with the str_detect function is it is detecting where that exact string occurs within your data, and this means the spelling, the casing, the spaces, everything in it needs to match exactly.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=68)** So even if there is, let's say a lowercase price or a fully uppercase PRICE, that would not show up as true because it does not match exactly.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=75)** You'll notice the output is very large, so it may be more useful to use this when it's saved to a column, or when it's used in tandem with another package, such as dplyr.
>
> **[1:25](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=85)** You can click the arrows on the right hand side to collapse the output.
>
> **[1:30](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=90)** Copy and paste this code from above, but this time put a sum around it, so this way it will sum how many times the string occurs inside your CustName column.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=103)** When you run this, you'll see the number 18.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=106)** So that means there are 18 occurrences of Price in the CustName column.
>
> **[1:51](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=111)** Copy and paste that first set of code again, but instead of doing str_detect let's do str_subset.
>
> **[1:59](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=119)** What this will do is it will return the values of where that particular string occurs.
>
> **[2:05](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=125)** So when you run this, you'll view all 18 sets of values of these different customers where it has the name Price in there.
>
> **[2:12](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=132)** You'll notice that some of these customer names are repeats.
>
> **[2:15](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=135)** So it may be someone who has the same name or a customer that just has made multiple purchases.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=142)** Go ahead and copy and paste the code again, but this time change str_detect to be str_extract.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=150)** What this will do is it will return a vector with each value in the column with nulls, except where that string occurs.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=158)** So when you run this, you'll see again all those different values.
>
> **[2:42](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=162)** And then you'll just notice where just exactly that string Price occurs.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=165)** So it won't include the rest of the name.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=167)** It's just that particular string that you are looking for.
>
> **[2:51](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=171)** Copy and paste the code again, but this time change it to be str_match.
>
> **[2:59](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=179)** When you run this, you'll notice the output is similar to the previous one, but this time it is returned as a matrix instead of a vector.
>
> **[3:10](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=190)** Now let's detect if a string occurs in a particular location within a string.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=196)** Let's begin by looking at the function str_starts for the sales SalesReg column, and let's see where it starts with the string Central.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=209)** When you run this again, you'll get that full list of different true and false values where that particular string Central occurs.
>
> **[3:37](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=217)** Note that this will only include any occurrence where the string begins with Central - it won't include it if Central is, for example, in the middle or the end of the string, only when it's the very first thing that occurs.
>
> **[3:50](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=230)** Next, let's look at where a specified string occurs at the end of a string with the function str_ends.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=237)** So let's look at the sales ProdName column.
>
> **[4:01](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=241)** And you want to find where any of the strings end with the number 250.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=245)** Again, make sure that 250 is still in a string.
>
> **[4:09](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=249)** So again, you'll have those different true and false values.
>
> **[4:11](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=251)** But again, remember this time is it will only include occurrences where the string is the very last thing that occurs, not including if it begins the string or if it's in the middle of the string.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=264)** Let's say you wish to know the position in a string where a certain string occurs.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=270)** To do that, you can use the function str_locate.
>
> **[4:34](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=274)** And let's use this on the sales EmpTitle column for the string Sales.
>
> **[4:42](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=282)** When you run this, you will see the index position of where this specific string occurs in each row of data, where it has the starting index position and the ending index position.
>
> **[4:52](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=292)** Note that this will have no values in any rows where the string does not occur, but in this case the Sales string is very common in this particular column.
>
> **[5:03](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=303)** Now let's count how many times a string occurs in the data using the function str_count.
>
> **[5:10](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=310)** Let's run this on your sales order num_column and find how many times the number 3 occurs in this column.
>
> **[5:22](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=322)** When you run this, you'll see there are a mainly mix of zeros, ones and twos occasionally number higher than that for your result.
>
> **[5:30](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=330)** What this is showing is how many times that value three occurs in the order number for each entry of data.
>
> **[5:38](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=338)** So if there is a one there, that means the number three occurs once in that value.
>
> **[5:42](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=342)** If it's two it occurs twice, and so on.
>
> **[5:46](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=346)** Next, let's index a string in a column.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=350)** Call on the sales OrderNum column and assign it to str_sub
>
> **[6:00](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=360)** for the sales OrderNum column.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=365)** And let's look at the index position 4 and onwards.
>
> **[6:09](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=369)** What this will do is it will gather a substring from your current string residing in that column, again by that index value that you specify.
>
> **[6:17](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=377)** So again it'll be from the index position four and onwards.
>
> **[6:22](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=382)** Let's add in your sales tibble to view the results.
>
> **[6:25](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=385)** And when you run this you'll see the OrderNum column is showing the index position 4 and onwards, hence removing the first three numbers in your OrderNum column.
>
> **[6:37](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=397)** Next, let's look at some string lengths.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=400)** You could do this using the str_length function.
>
> **[6:45](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=405)** And let's use it on the sales ProdName column.
>
> **[6:50](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=410)** When you run this, you'll see the number of characters in each string value in that column.
>
> **[6:55](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=415)** So it's a pretty wide range of characters in each of those strings.
>
> **[7:02](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=422)** After that, let's pad a column.
>
> **[7:07](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=427)** You can call on the sales ProdName column and assign it to itself, sales ProdName, and add in your pipe operator.
>
> **[7:19](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=439)** Let's add on the string function str_pad.
>
> **[7:22](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=442)** And let's do this for 20 characters.
>
> **[7:25](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=445)** So this will make sure the minimum width of the padding is 20 characters.
>
> **[7:30](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=450)** Then you will specify the direction you wish to have the padding occur.
>
> **[7:34](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=454)** So let's have it occur to the right.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=456)** Let's call on your sales prod name column to view the results for this. When you run it, you'll notice that your strings now have that minimum padding of 20 characters.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=468)** So some of these shorter strings now have these extra spaces between them, between where the word ends for the last string and the end of the full string inside the data.
>
> **[7:59](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=479)** For the longer ones, you'll notice they are the same as before because they are longer than those 20 characters.
>
> **[8:07](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=487)** Go ahead and copy and paste the code from above, but this time let's trim back that ProdName column. This time, change str_pad to str_trim and remove the different parameters inside of it.
>
> **[8:21](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=501)** When you run this now, you'll notice that the different string values inside that column should be back to where they were before, where they don't have any of that extra padding after the string.
>
> **[8:34](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=514)** Copy and paste the code one more time, but this time let's do the opposite where you're going to truncate the string.
>
> **[8:43](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=523)** So change str_pad to str_trunc and let's trunc it to ten characters.
>
> **[8:51](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=531)** When you run this, you'll notice that it will truncate it to the first ten characters of that string.
>
> **[8:58](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=538)** If for some reason that string is longer than ten characters, the last three characters in that string are going to be replaced by three dots.
>
> **[9:07](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=547)** This function is great if you have longer string data, such as multiple sentences worth of data in one data point that you wish to truncate.
>
> **[9:14](https://www.linkedin.com/learning/r-tidyverse-applications/manipulate-strings-with-stringr?u=76281980&t=554)** Join me in the next video to learn how to join and split strings with stringr.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (4), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** str_detect (4), str_pad (3), str_subset (1), str_extract (1), str_match (1)
> **Analogies:** such as (4), similar to (1), for example (1)
> **CLI Commands:** find (3), make (2)
> **Warnings:** note that (3), keep in mind (1)
> **Env Vars:** price (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Join and split strings with stringr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=0)** Let's finish exploring strings with the stringr package.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=3)** This video will focus on a variety of ways to join and split strings.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=8)** First, run the top portion of your code to load in your packages along with your data set.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=14)** Let's begin by combining strings from two different columns.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=18)** Create a new column called Sales Product and assign this to the str_c function.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=26)** What this function will do is it will allow you to join multiple strings strings together into one combined string.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=32)** Let's say you wish to join these sales ProdNumber string and the sales ProdName string.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=41)** And let's have these values separated by a colon and a space.
>
> **[0:46](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=46)** Go ahead and print out your sales variable to view the results.
>
> **[0:50](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=50)** When you run this and scroll over to the right, you can view your new product columns.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=55)** So again you'll have the product number.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=57)** Your colon, a space and then the product name.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=62)** Next let's join a column and flatten it in the process with the str_flatten function.
>
> **[1:09](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=69)** Let's do this for the sales quantity column.
>
> **[1:13](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=73)** And for this one let's have the values separated by a dash.
>
> **[1:18](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=78)** When you run this you'll see all the quantity column values separated by a dash.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=84)** This is because it turns the column of values into one large string.
>
> **[1:30](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=90)** Copy and paste the code from above, but this time use str_flatten comma, and remove your dash separator that you had prior.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=100)** This will automatically add a comma and a space between each of the values being flattened.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=106)** When you run this, you will now view all your quantity values in that flattened state in that one string.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=113)** But now they have a comma and a space separating each of the values.
>
> **[1:58](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=118)** Next, let's join a string to itself by duplicating it.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=123)** Let's call on the sales ProdNumber column and assign it to the function str_dup to duplicate this column.
>
> **[2:13](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=133)** So let's call on that sales ProdNumber column again, and let's duplicate it two times.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=139)** Call on your sales variable to view the results.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=142)** When you run this and scroll over to the right, you should view your new ProdNumber column where you have your two values put together where, again, it should be the same value duplicated twice.
>
> **[2:35](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=155)** Next, let's split a string in a column.
>
> **[2:39](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=159)** To do this, you can use the function str_split.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=163)** And let's do this on the sales CustName column.
>
> **[2:48](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=168)** And the way you want these split up is whenever there is a space in the string in this column.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=173)** When you run this you'll see you now have Kennedy and Richardson as two separate strings, because it has split the one string of customer name into two separate ones, split again where it had that space.
>
> **[3:07](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=187)** Go ahead and copy and paste this code from above, but this time change str_split to be str_split fixed and then this time add a number 2 after it.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=200)** What this will do is it will return a matrix of each substring with the specified number of splits, which in this case is two.
>
> **[3:28](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=208)** When you run this, you will now see your new matrix, where you have your first column with the first name and the second column with the last name.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=218)** Finally, let's join some data together by gluing it.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=223)** Create a new column for sales called RegionState and assign this to your sales variable and a pipe operator.
>
> **[3:53](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=233)** And let's use the str_glue_data function.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=237)** What this will do is it will combine strings together using string and expressions denoted by the curly brackets.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=245)** Inside your string, you'll have curly brackets to denote your different column names, so you'll have SalesReg.
>
> **[4:10](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=250)** Close your curly brackets, add a space, a dash, another space, and some more curly brackets to call on the CustState.
>
> **[4:19](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=259)** Close those curly brackets and call on your sales column to view the results.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=266)** When you scroll to the right and view your results for RegionState, at the very end, you'll notice you now have your SalesReg column, a space to dash in another space, and then your customer state column all combined into one string.
>
> **[4:43](https://www.linkedin.com/learning/r-tidyverse-applications/join-and-split-strings-with-stringr?u=76281980&t=283)** In the next video, I will dive into how to work with dates using the Tidyverse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), next (4), data (2)
> **Code Identifiers:** str_split (3), str_flatten (2), str_dup (1), str_glue_data (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Understanding dates with lubridate
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=0)** Let's explore the lubridate package.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=3)** The lubridate package helps you clean and prepare date time and date time data to ensure they are streamlined into standardized formats.
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=12)** This package helps you do more than base R code by helping you handle odd date time data such as leap dates, time zones, and daylight savings times.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=21)** This package also allows you to do math with date time data.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=26)** One resource you can use for the lubridate package is the Tidyverse website.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=30)** You can navigate to the URL lubridate.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[0:38](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=38)** Let's head over there now.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=39)** On the lubridate package page, you'll see there is an overview of what the package does.
>
> **[0:45](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=45)** Below that you can scroll to view some installation instructions for the Tidyverse and specifically the lubridate package, the cheat sheet, which you can download here or on the GitHub page.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=55)** Some common features and some examples with some of the common functions.
>
> **[1:00](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=60)** Let's head over to the lubridate GitHub using the link [github.com](https://github.com) [github.com/tidyverse/lubridate](https://github.com/tidyverse/lubridate).
>
> **[1:07](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=67)** On this GitHub page you can view the code behind the lubridate package.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=71)** Down here you should see some information similar to the Tidyverse web page for the lubridate package.
>
> **[1:17](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=77)** And below that again you can view that cheat sheet again.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=80)** I highly recommend you download this cheat sheet for your reference.
>
> **[1:23](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=83)** And now let's take a moment to look at that cheat sheet you just downloaded.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=89)** The cheat sheet you downloaded should look similar to mine, but it may have some updates from when this course was posted.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=96)** The main page focuses on dealing with date time data along with functions for rounding data, creating timestamps, and dealing with time zones.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=104)** The second page focuses on doing math with date and date time data.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=108)** Date time math will not be covered in this course, but I highly recommend using this cheat sheet and other resources to study these expressions on your own.
>
> **[1:57](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=117)** Before I show you how to use the lubridate package in R, let's take a moment to better understand date time data.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=123)** When you have date time data, it may look something like this.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=127)** You will have up to six components.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=129)** This includes year which is denoted by a y, month, which is denoted by an m, day, that is denoted by a d, hour, that is denoted by an h, minute, which is also denoted by an m, and finally the second, which is denoted by an s.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=145)** There are multiple ways date time and date time data can be formatted.
>
> **[2:31](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=151)** Here you could see a few different examples where you have a date, you have a date time, you have another date, and finally you have a time.
>
> **[2:39](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=159)** There are three data formats you will work with when using lubridate.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=163)** The first option is a date, and so this will be stored in the number of days since January 1st of 1970.
>
> **[2:51](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=171)** Second is time.
>
> **[2:54](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=174)** This is stored as the number of seconds since 000000.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=178)** Finally, there's date time, which is determined from the number of days since January 1st, 1970.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=185)** As 000000 UTC.
>
> **[3:08](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=188)** Let's head over to RStudio to begin using the lubridate package.
>
> **[3:14](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=194)** In this video, I will focus on showing you how to work with some general lubridate functions.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=200)** The following video will show you how to incorporate lubridate functions with your KinetEco data.
>
> **[3:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=205)** Like before, you can use the whole Tidyverse to install and load your packages, or you could just install them one by one.
>
> **[3:32](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=212)** So again that code is there.
>
> **[3:33](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=213)** Commented out for your reference.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=216)** If you want to just install the lubridate package, you can use install.packages() and you will call out specifically the 'lubridate' package.
>
> **[3:46](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=226)** When you run this, like usual, if you need to install it, you can do that.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=231)** If it has that pop up message and it's already installed and it's just asking for an update, you can update it or you cannot, it's up to you.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=237)** Next, you will want to load in your lubridate package.
>
> **[4:01](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=241)** So use the library function on lubridate.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=244)** Run this and now you are good to go to use that lubridate package.
>
> **[4:09](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=249)** Let's dive in to working with some date time data with your lubridate package and some common functions used with it.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=256)** Let's begin by getting the current date.
>
> **[4:19](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=259)** You could do so by using the function today(), and that should get whatever current date it is when you run this.
>
> **[4:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=265)** For me it is June 21st of 2024.
>
> **[4:28](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=268)** But again for you that should be different on whatever the current date is when you run that code.
>
> **[4:33](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=273)** Let's say you want to get the current date and time instead of using today(), you will use the function now().
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=279)** So when you run this you will see the current date and time for me is June 21st, 2024 and the time is 14:33:04 Pacific Standard Time.
>
> **[4:51](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=291)** Next you will gather a date time using the function as_datetime() So you can use as_datetime() and let's get it for the value 123456789 and 0 When you run this, this will translate to 2009.
>
> **[5:10](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=310)** And it will be February 13th from that year with that particular time at that UTC timestamp.
>
> **[5:17](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=317)** Remember this value is counting from that original 1970 value by the number of seconds.
>
> **[5:25](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=325)** Let's say you want to get the date from one of those values, so you'll do as_date().
>
> **[5:30](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=330)** And let's do this for 12345.
>
> **[5:32](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=332)** Again since this will just be a date, this is counting the number of days from that January 1st, 1970 date that I mentioned earlier.
>
> **[5:41](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=341)** So when I run this, it should show October 20th of 2003.
>
> **[5:45](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=345)** Let's say you want to get the time to do that.
>
> **[5:49](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=349)** You will use hms, two colons and then as_hms() And then let's do this again for 12345, again that will be counting the number of seconds from that zeroed out timestamp.
>
> **[6:00](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=360)** So it's showing at three hours, 25 minutes and 45 seconds.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=368)** If you wish to convert a value such as a string to a date time, you can use the parsing date functions with the date time abbreviation such as y and m in the corresponding locations to make that conversion.
>
> **[6:21](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=381)** Again, remember what I showed you earlier as far as the y, m, d, h, m and s, how those relate to those different pieces of the date and time data.
>
> **[6:30](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=390)** Let's use the function ymd_hms() and let's use it on this time stamp that is currently a string of 2025-5-1 and have the timestamp be 13:05:00.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=409)** Then you can copy and paste this, but this time you can put the function class, run it to view the class of that to make sure that it got appropriately converted into a date time data type.
>
> **[7:03](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=423)** When you run this, you should be able to view your new date time and see that it is the correct date data type.
>
> **[7:11](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=431)** Another way to parse date time is by using the function parse_date_time().
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=437)** So let's call parse_date_time().
>
> **[7:20](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=440)** And let's use this on the date 2024-5-1.
>
> **[7:26](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=446)** And then you'll want to do this where you have the year, the month and the day.
>
> **[7:33](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=453)** Again copy and paste this.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=456)** And again make sure you have the class function to ensure that it has been converted appropriately.
>
> **[7:42](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=462)** So again you'll see that this should be converted for this along with it being the correct data type as far as a date.
>
> **[7:50](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=470)** Some databases store their dates as decimal values.
>
> **[7:55](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=475)** If this is the case, you can convert a decimal into a date using the function date_decimal().
>
> **[8:01](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=481)** And let's convert the decimal 2024.7 What this converts into is the year 2024.
>
> **[8:09](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=489)** On September 13th for this particular timestamp in UTC.
>
> **[8:14](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=494)** To do the opposite and convert a date into a decimal value, you can use the function decimal_date().
>
> **[8:21](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=501)** And let's do it for the year day month value of 2024-04-05.
>
> **[8:30](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=510)** So when you run this, this should be the corresponding decimal value for that date that you just gave it.
>
> **[8:36](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=516)** Let's wrap up by looking at time zones to get the current time zone.
>
> **[8:41](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=521)** Use the function sys.timezone() and then click run.
>
> **[8:47](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=527)** Mine says the current time zone is America/Los Angeles.
>
> **[8:52](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=532)** Yours should show whatever your current time zone is.
>
> **[8:55](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=535)** Let's say you want to get a list of all the valid time zones for this particular package.
>
> **[9:01](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=541)** To do that, you can look at olsonnames() and then run this.
>
> **[9:07](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=547)** And here you will see all the different potential valid time zones that you can use.
>
> **[9:11](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=551)** So again you can feel free to scroll through it, find which ones might match your location or locations nearby you.
>
> **[9:20](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=560)** Finally, let's convert the time zone of a date time value.
>
> **[9:26](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=566)** We want to start by creating a new date time value.
>
> **[9:29](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=569)** Let's just call it y to keep it nice and easy.
>
> **[9:32](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=572)** And you will use the ymd_hms() function to convert this string into a date.
>
> **[9:39](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=579)** So you'll have a 2024-09-27 for 12:30:01.
>
> **[9:46](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=586)** And we'll put a comma and add tz for timezone to specify what time zone it is, and have it be for US/Pacific.
>
> **[9:55](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=595)** Let's say you want to convert this to the Eastern time zone as in US/Eastern.
>
> **[10:03](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=603)** To do this, you can use the with_tz function for your value x.
>
> **[10:08](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=608)** And then let's do this for the US/Eastern time zone.
>
> **[10:15](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=615)** In your results you should see your date should stay the same at September 27th, 2024, but the time should be three hours later to be converted appropriately from Pacific to Eastern time from a 12 to 15 or also known as three in the afternoon. I will show you how to use the lubridate package with your KinetEco data in the next video.
>
> **[10:38](https://www.linkedin.com/learning/r-tidyverse-applications/understanding-dates-with-lubridate?u=76281980&t=638)** Let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), [[GitHub]] (5), next (3), web (1), [[RStudio]] (1)
> **Code Identifiers:** as_datetime (2), ymd_hms (2), parse_date_time (2), as_date (1), as_hms (1)
> **Ports:** :33 (1), :04 (1), :05 (1), :00 (1), :30 (1)
> **Prerequisites:** install (5), make sure you have (1)
> **Tools:** github (5)
> **Analogies:** such as (3), similar to (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** utc (3), url (1)

#### Edit dates with lubridate
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=0)** Let's continue exploring working with date time data with the lubridate package.
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=5)** This video will focus on working with date time data with the KinetEco sales dataset.
>
> **[0:10](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=10)** Begin by running the top portion of your code to load in your libraries and your sales data.
>
> **[0:16](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=16)** Let's begin by adding a new column for the sales variable with a stagnant date.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=21)** Let's call this new column ReviewDate, and you will assign it to your new date that you'll create with ymd().
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=31)** And let's have it be 2024-05-01.
>
> **[0:35](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=35)** Let's call your sales variable to view the results.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=41)** If you scroll all the way to the right, you'll now see you have your review date column and it has that given date value for all of the values in your data set.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=52)** Next, I will show you how to work with your order date column.
>
> **[0:56](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=56)** Let's begin by pulling different portions of the date and putting them into new columns.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=62)** Let's begin by creating a new column for your sales data set called OrderYear, and you'll assign this to the function year() for the SalesOrderDate.
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=79)** Make sure to print out your sales variable so you can view the results.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=84)** When you scroll all the way to the right, you will see you now have your OrderYear column, and again that should correspond to the year in your OrderDate column.
>
> **[1:34](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=94)** Go ahead and copy and paste the code from above.
>
> **[1:37](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=97)** But this time instead of OrderYear, let's have it be OrderMonth and then use the month() function on your sales OrderDate.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=104)** When you run this and scroll all the way to the right, you will now see you have your OrderMonth column as a double type, and this should have a number corresponding to each month in that order date column.
>
> **[1:59](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=119)** Copy and paste the code again, but instead of doing OrderYear this time you will do OrderWeek and you'll use the week() function instead of the year() function.
>
> **[2:10](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=130)** So run this, scroll the way to the right and here you'll see you'll have your double data type for your OrderWeek column where again, these values should be corresponding to the week numbers for each of the OrderDate values you have.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=145)** Copy and paste that code one more time, but instead of doing year() this time do day(), so have it be OrderDay and use the day() function on your sales OrderDate.
>
> **[2:36](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=156)** Scroll all the way over to the right and now you'll see you have your OrderDay column.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=160)** And again this should be corresponding with the day in your OrderDate column.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=165)** Let's switch to doing some rounding with the date data you have.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=170)** Go ahead and create a new column for your sales variable called OrderDateFloor and assign this to the function floor_date().
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=181)** What this will do with your OrderDate column is round the month down to the nearest month. For for date, let's look at the sales OrderDate column and for month.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=192)** What this will do is it will round down the OrderDate column to the nearest month.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=197)** And let's call your sales variable to view the results.
>
> **[3:23](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=203)** If you scroll all the way over to the right, your order date floor should be rounded down to that nearest month.
>
> **[3:29](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=209)** So again should be January 1st, 2022 for those first few ones.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=214)** And then once you get a little bit later in the data, then it'll begin showing for February and so on.
>
> **[3:39](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=219)** You'll also notice with this data that it should change the day to be the first day of that month that you have now rounded down to.
>
> **[3:48](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=228)** Let's do the opposite of that and copy and paste the code from above.
>
> **[3:52](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=232)** But this time, instead of getting the floor, you will be doing the ceiling.
>
> **[3:55](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=235)** So let's change OrderDateFloor to be OrderDateCeiling and change floor_date to be ceiling_date.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=244)** You can leave everything else as is and click run.
>
> **[4:07](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=247)** When you scroll all the way to the right and view your OrderDateCeiling column, you will now see that it will round up to the nearest month.
>
> **[4:15](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=255)** One thing to notice though, is if it is the first of the month, for example January 1st it will stay as that month.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=262)** If not, then it will round up to that month above it.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=266)** So you'll see for those first few values, it does show as January 1st of 2022 because that is the order date.
>
> **[4:33](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=273)** But as it goes up that one day to January 2nd of 2022, it's going to round it up all the way to February 1st of 2022.
>
> **[4:41](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=281)** Go ahead and copy and paste the code again.
>
> **[4:44](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=284)** But this time let's do a general rounding statement.
>
> **[4:48](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=288)** So instead of having OrderDateFloor, you'll have OrderDateRound.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=293)** And instead of floor_date you'll have round_date.
>
> **[4:55](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=295)** This time though, let's have it round by the week instead of the month.
>
> **[5:00](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=300)** When you run this and scroll all the way to the right.
>
> **[5:04](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=304)** What this will do is it will round the week in either direction, depending on which is closest.
>
> **[5:09](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=309)** So it may round it up, or it may round it down to the nearest week.
>
> **[5:13](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=313)** So as you go along, you'll see it will go up in those week increments.
>
> **[5:18](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=318)** Finally, copy and paste the code one more time, but instead of OrderDateFloor, have it be OrderDateRollback, and use the rollback function on your SalesOrderDate.
>
> **[5:33](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=333)** And then go ahead and get rid of this parameter here.
>
> **[5:36](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=336)** What this will do is it will roll back the date to the last day of the previous month.
>
> **[5:41](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=341)** So if you run this and click all the way to the right, you can view your OrderDateRollback column.
>
> **[5:47](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=347)** So here you'll see the January dates that you just had are going to be rolling back to December 31st of 2021.
>
> **[5:54](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=354)** And as you go a little bit further on in your data, you should then be able to see January 31st of 2022 where there used to be February date values.
>
> **[6:03](https://www.linkedin.com/learning/r-tidyverse-applications/edit-dates-with-lubridate?u=76281980&t=363)** Let's put your knowledge of manipulating data to the test with a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), next (1)
> **Code Identifiers:** floor_date (3), ceiling_date (1), round_date (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### Solution: Manipulate data
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=5)** Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=6)** Excellent work with manipulating the KinetEco sales representatives data.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=11)** If you feel overwhelmed with this challenge, that is completely okay.
>
> **[0:15](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=15)** I will explain step by step what should have been filled in and what each line of code is doing.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=19)** Let's head over to RStudio.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=22)** You'll start off by running the code at the top of your coding file to load in all the packages from the Tidyverse, along with the sales representative data.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=32)** When you run this, you will see the data for each sales representative, including their employee ID, employee name, job title, region, and start date.
>
> **[0:45](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=45)** For the first task, you need to expand the Region column to view all the possible unique values contained in it.
>
> **[0:52](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=52)** You could do so by calling on your sales_reps variable, using a pipe operator and the expand function on your region column.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=62)** In these results, you can see there are nine different possible regions that occur in the data set.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=68)** You'll notice the word Central frequently occurs in these options.
>
> **[1:12](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=72)** Let's move on to the next test for the region column to remove this Central value.
>
> **[1:17](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=77)** For this task you will remove where the string Central occurs in the region column.
>
> **[1:23](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=83)** To do this you can call on these Sales Reps Region column.
>
> **[1:30](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=90)** And assign this to itself.
>
> **[1:33](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=93)** So you can copy and paste that.
>
> **[1:35](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=95)** And then you will use a pipe operator to call on your string function.
>
> **[1:41](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=101)** There are a few methods you can use for this task, but I will use the str_replace_all method to replace all the strings for the Central value.
>
> **[1:51](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=111)** Let's have this Central value equal to a blank value instead.
>
> **[1:58](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=118)** So again, the way you get this blank value is simply by having quotation marks with nothing at it, not even a space.
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=124)** Remember, in this case you will want to use the all version here for the string replace.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=129)** That way you are replacing every time Central occurs in your data set versus just the first time it occurs.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=136)** If you call on your sales reps variable, you should be able to view the results of this.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=142)** Now when you look at your Region column, you can see the values are east and east and so on.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=148)** So again that central value has now been removed.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=150)** Let's switch gears and work on the Employee ID column.
>
> **[2:35](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=155)** This time you will want to index the Employee ID column from the index position five and onwards.
>
> **[2:41](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=161)** Again, there are a few different methods you can use to accomplish this, but I will show one of the methods here.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=167)** So type in your Sales Reps Employee ID column and you will assign it to the str_sub function.
>
> **[2:56](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=176)** Inside this function you will call on your Sales Reps Employee ID column and the value 5 to index it from the position 5 onwards.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=186)** This way it will cut off any values before that specified index position.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=192)** If you call on your sales reps variable, you can view your results when you run this.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=197)** So now you can see the Employee ID column is a lot shorter than it used to be, showing those main numbers in that Employee ID, removing those first five, that seemed a little unnecessary due to the repetitiveness.
>
> **[3:31](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=211)** For the next task, you will create a new column called Sales Reps Employee.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=218)** So let's call it Sales Reps Employee.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=223)** And what you will do is you will be combining the Employee ID and employee name columns together and adding a dash and space between them.
>
> **[3:52](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=232)** Like the last few tasks, there are multiple methods you can use to accomplish this task, but I will show just one in the solution.
>
> **[3:59](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=239)** Let's use the str_c method.
>
> **[4:03](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=243)** So call on your Sales Reps Employee ID column, then your Sales Reps Employee Name column.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=252)** And remember with this column you will want quotation marks because it has a space.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=256)** And then finally you will want to have your separator equal to a dash and a space.
>
> **[4:21](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=261)** So again this is what will be separating these two strings from each other.
>
> **[4:25](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=265)** In this new column you have created.
>
> **[4:28](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=268)** Below that you can call your sales reps data set to get the final result.
>
> **[4:34](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=274)** Now you'll see you have your updated ID column over here from prior, along with the updated employee column where it has the employee ID, a dash, a space, and then the employee name as you specified.
>
> **[4:49](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=289)** All right, let's move on to the last task.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=293)** Let's get the year from the StartDate.
>
> **[4:57](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=297)** You could do this by creating a new column for your sales reps variable called StartYear.
>
> **[5:04](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=304)** and let's assign it to the year() function from your lubricate package and call these Sales Reps StartDate column.
>
> **[5:15](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=315)** You can then call on your Sales Reps data set and run this.
>
> **[5:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=319)** And now you have your Start Your column where it just has the year that should be matching the one on the start date column.
>
> **[5:25](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=325)** So again first one's 2014, 2010, 2007 and so on.
>
> **[5:31](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=331)** Now you have a better understanding of how to manipulate data using the R Tidyverse for KinetEco.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=339)** I hope you enjoyed this challenge and that it helped you reinforce what you learned in this chapter.
>
> **[5:43](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=343)** If you struggled or were not able to get the code to run perfectly on your own, that is okay.
>
> **[5:49](https://www.linkedin.com/learning/r-tidyverse-applications/solution-manipulate-data?u=76281980&t=349)** Programming takes practice to get better at, so keep up the hard work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), next (2), [[RStudio]] (1), [[Microsoft Word|Word]] (1), [[Programming]] (1)
> **Code Identifiers:** sales_reps (1), str_replace_all (1), str_sub (1)
> **Definitions:** is a  (1)


### 3. Factor and Map Data

[↑ Back to Table of Contents](#table-of-contents)

#### Factor categorical data with forcats
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=0)** In this chapter, I will dive into different ways you can factor and manipulate data in R using the Tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=7)** I will show you how to use the forcats and per packages.
>
> **[0:10](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=10)** Let's begin with the forcats package.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=14)** The forcats package helps you deal with categorical variables by using what is called factors.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=20)** The goal of this package is to provide you with a set of tools to interact with factors and solve common issues you may run into when interacting with them.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=28)** Let's take a moment to better understand what a factor is.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=32)** In order to understand what a factor is, you need to know what a categorical variable is.
>
> **[0:37](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=37)** A variable is categorical if it has a fixed and known set of possible values.
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=42)** These categorical variables are often brought in as strings or integers, but you can do more with data if you factor it.
>
> **[0:49](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=49)** A factor is an integer vector that stores integer levels mapped to associated values.
>
> **[0:55](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=55)** You can set a variable to a factor where you will define the levels contained in that factor, along with its associated values.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=63)** For example, you can set a variable to be a factor that denotes the grade a high schooler's in. The levels for this factor could be freshman, sophomore, junior, and senior.
>
> **[1:15](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=75)** One resource you can use for the forecats package is the Tidyverse website.
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=79)** You can navigate to the URL forcats.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[1:27](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=87)** Let's head over there now.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=89)** On the forcats package page you'll see there is an overview of what the package does.
>
> **[1:35](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=95)** Below that you can view some installation instructions to install the whole Tidyverse or just the forcats package, the cheat sheet, which you can download here or on the GitHub page, and some information for getting started.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=106)** This includes some different examples, along with some visualizations that are often used with the forcats package.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=113)** There's also a few extra resources at the bottom.
>
> **[1:57](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=117)** Let's head over to the forcats GitHub using the URL [github.com/tidyverse/forcats](https://github.com/tidyverse/forcats).
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=124)** On this GitHub page, you can view the code behind the forcats package.
>
> **[2:08](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=128)** If you scroll down, you should be able to view some similar information to the Tidyverse webpage, including that cheat sheet which you can find here.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=136)** Again, I highly recommend you download this cheat sheet for your reference.
>
> **[2:20](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=140)** Let's take a moment to look at that cheat sheet you just downloaded.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=145)** The cheat sheet you downloaded should look similar to mine, but note that I may have some updates from when this course was posted.
>
> **[2:31](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=151)** This cheat sheet focuses on creating, inspecting, combining, and adjusting factors for the different levels, including changing the order of levels, changing the value of levels, and adding or dropping levels.
>
> **[2:44](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=164)** Let's head over to RStudio to begin using the forcats package.
>
> **[2:48](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=168)** You'll begin by running the top portion of your code to load in your data using the readxl package, so you'll be looking at the sales data for this one.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=178)** Like before, you can use the whole Tidyverse to install and load your packages, which you could view in this commented code here.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=185)** Or you can install and load just the forcats package to install just the forcats package.
>
> **[3:11](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=191)** You can use the install packages function for the forcats package and click run. Like before, again, you can just install it one at a time.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=201)** Or again, if it has that pop up message, you can then click Yes or No if you wish to update it or not.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=207)** When it comes to loading the forcats package, you will use the library function and forcats. Now you're ready to go to begin exploring how to use this package to create and work with factors.
>
> **[3:42](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=222)** Let's begin by creating a factor from scratch.
>
> **[3:46](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=226)** Let's call this factor x and use the factor function to create your factor.
>
> **[3:52](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=232)** You want to begin by specifying the values of this particular factor.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=237)** You can do this by having a list with C, and let's have the values be 1, 2, 3, 4, 1, and 3.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=246)** Next you will specify the levels of your factor.
>
> **[4:10](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=250)** Note that you'll want to ensure the factor levels match all the possible values in your factor, because otherwise you will have null values show up in your data.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=260)** Let's specify the factor levels as 1, 2, 3, and 4.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=266)** Finally, print out your new variable x.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=270)** In your result, you'll see all your different values in your factor, along with the levels that should be associated to a value from the factor.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=279)** Let's switch over to using your sales data set for KinetEco.
>
> **[4:44](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=284)** I'll begin by having you look at the sales OrderType column, and let's make that a factor by using the factor function.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=293)** And again just look at the sales OrderType variable.
>
> **[4:58](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=298)** And with this let's look at the class of this particular column OrderType to ensure that it is changed appropriately.
>
> **[5:07](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=307)** And you can also look at the sales output.
>
> **[5:10](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=310)** When you run this your first output should be showing the class as factor, meaning that you did appropriately convert it to a factor.
>
> **[5:19](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=319)** When you go to the second output and scroll over to OrderType, you should see FCTR, which should be representing it as a factor data type now.
>
> **[5:30](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=330)** This time let's convert the sales EmployeeTitle column into a factor.
>
> **[5:37](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=337)** So look at the sales EmployeeTitle.
>
> **[5:41](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=341)** And use the factor function on the sales EmployeeTitle column.
>
> **[5:47](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=347)** but this time let's exclude a value in the process.
>
> **[5:51](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=351)** So let's say you want to exclude where there's the value of Senior Sales Associate, and look at your sales variable for the results.
>
> **[6:03](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=363)** When you print out your sales tibble, you will see the EmployeeTitle column is now denoted as a factor with fctr, and wherever you had Senior Sales Associate occur, now it is filled in with a null value or NA.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=378)** Next, let's convert the sales CustType column to a factor using the factor function.
>
> **[6:25](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=385)** So look at your sales CustType column and assign it to the factor function for sales CustType.
>
> **[6:34](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=394)** This time though, let's change the labels of your factor.
>
> **[6:39](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=399)** So instead of having them be Business and Individual, you can have them be B2B and B2C.
>
> **[6:44](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=404)** So you have your labels parameter equal to C in parentheses of your list of values.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=409)** So you have B2B and then you have B2C.
>
> **[6:53](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=413)** And again print out your sales tibble to view the results.
>
> **[7:01](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=421)** So now when you scroll over to CustType, you'll see the labels or again the values that you have with your different levels are now going to be B to C and B to B.
>
> **[7:12](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=432)** Finally, let's convert the sales SalesReg column.
>
> **[7:17](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=437)** But you'll be using a different function this time.
>
> **[7:20](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=440)** So you'll have sales SalesReg.
>
> **[7:23](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=443)** And this time instead of using factor you'll be using the function as_factor on your sales SalesReg column, and again print out your sales tibble one more time.
>
> **[7:35](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=455)** And now when you look at your SalesReg, it should be showing as a factor.
>
> **[7:41](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=461)** This function works very similar to the factor function you saw used previously, but as_factor often provides a quicker return, along with keeping all factor levels, regardless if they have associated values.
>
> **[7:54](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=474)** You're welcome to use these functions interchangeably with converting columns, but be aware if you are using other functions that may cause null values or unused levels to occur, that there may be differences in how these two functions interact.
>
> **[8:09](https://www.linkedin.com/learning/r-tidyverse-applications/factor-categorical-data-with-forcats?u=76281980&t=489)** In the next video, I will demonstrate how you can more thoroughly inspect along with mutate factors with forcats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[GitHub]] (4), next (3), [[RStudio]] (1), business (1)
> **Env Vars:** url (2), b2b (2), b2c (2), fctr (1)
> **Prerequisites:** install (6), getting started (1)
> **Tools:** github (4)
> **UI Navigation:** go to (2), navigate to (1), scroll down (1)
> **Definitions:** is an  (2), is called (1)
> **Analogies:** similar to (2), for example (1)
> **Warnings:** note that (2), be aware (1)

#### Inspect and mutate factors with forcats
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=0)** In this video, I will show you how to inspect and mutate factors with the forcats package.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=6)** To begin, run the top block of code to load in your packages and sales data.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=11)** This code will also create factors for many of your categorical columns, such as customer type and employee title.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=19)** Let's say you aren't sure what the factor levels are or what order they are in for a certain factor column.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=26)** If you wish to view the levels in your factor, you can simply use the function levels.
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=31)** And let's look at the SalesReg column.
>
> **[0:35](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=35)** Here you could see the different factor levels listed out in their respective order for the SalesReg column.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=41)** The way factor orders levels for columns is on a first come, first serve basis, where the first time a value occurs it makes a new level, then it'll make the next unique value a level, and so on.
>
> **[0:54](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=54)** Let's say you want to get the unique values and associated levels for a factor.
>
> **[1:00](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=60)** Let's use the function fct_unique to do this.
>
> **[1:04](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=64)** And let's look at the sales SalesReg column again.
>
> **[1:09](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=69)** The first part of this output will show all the unique values inside that factor.
>
> **[1:14](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=74)** The second part of the output should show all the levels for the factor, in this case the factor values and levels should match.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=81)** But note that sometimes you may have unused levels that don't have a matching unique value inside the actual data set.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=89)** Next, let's get the count of values in each factor level.
>
> **[1:35](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=95)** Go ahead and use the function fct_count on the sales EmpTitle column.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=103)** When you run this, you'll see one decimal value at the top that you can ignore for now, but the rest of the values, such as Sales Associate and Sales Representative, should have the number of times they occur in your EmpTitle factor column.
>
> **[1:57](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=117)** According to this, it looks like Sales Representative at 1,172 occurs the most frequently out of all these different values.
>
> **[2:06](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=126)** Let's say you want to know where a certain level occurs in a factor.
>
> **[2:11](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=131)** You can use the function fct_match.
>
> **[2:14](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=134)** And let's look at the sales CustType column for this.
>
> **[2:18](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=138)** And for this one let's say you want to see where the string Business matches inside this factor.
>
> **[2:26](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=146)** When you run this you'll see a bunch of different true and false values, which is not super helpful since this is a lot to digest.
>
> **[2:35](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=155)** Let's go ahead and copy and paste this code.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=158)** But this time let's add a sum around it to sum the amount of times this occurs.
>
> **[2:44](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=164)** So this looks like the value business occurs 1,132 times in your CustType column.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=173)** Next let's add a level to a factor column.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=177)** For this.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=178)** Let's look at the sales OrderType column and assign it to the function fct_expand to expand the levels of your column.
>
> **[3:08](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=188)** So you want to look at sales OrderType again and let's expand it to add the level Online. You want to check your levels for sales OrderType to ensure the new level has been added.
>
> **[3:22](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=202)** And finally, you can look at your sales tibble when you run this and look at your first output, you should see that you now have retail, wholesale and online as your three levels for your factor column OrderType.
>
> **[3:35](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=215)** When you go to your tibble and scroll over to OrderType, it should look the same as always because again, you're just changing the levels of the factor.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=223)** You are not changing any of the actual values.
>
> **[3:47](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=227)** Go ahead and copy and paste this code, but instead of fct_expand, change this to fct_drop and get rid of Online.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=237)** What this function will do is remove any unused levels in your factors.
>
> **[4:02](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=242)** So this means when you do not have any unique values that are matched to it inside the actual data set for that level, it will then remove that level.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=252)** So when you run this, your levels should now just be back to Retail and Wholesale.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=256)** And again when you look at your sales tibble, OrderType should be the same as always.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=262)** Finally let's combine some factor levels.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=266)** You can use the function fct_c to do this.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=270)** Let's combine the sales OrderType and the sales CustType factor levels.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=279)** When you run this, you'll see the list starts off with the Retail and Wholesale levels from OrderType.
>
> **[4:45](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=285)** But note that the omitted values will contain the CustType ones.
>
> **[4:51](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=291)** Once you scroll all the way down to the bottom, you can see the levels are now combined to include Retail, Wholesale, Business and Individual.
>
> **[5:00](https://www.linkedin.com/learning/r-tidyverse-applications/inspect-and-mutate-factors-with-forcats?u=76281980&t=300)** In the next video, I will demonstrate how you can adjust factor levels in detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), data (3), business (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** fct_expand (2), fct_unique (1), fct_count (1), fct_match (1), fct_drop (1)
> **Analogies:** such as (2)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Adjust factor levels with forcats
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=0)** In this video, I will show you how to adjust factor levels with the forcats package.
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=5)** To begin, run the top block of code to load in your packages and sales data, along with factoring some of your columns.
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=12)** Let's start off by learning how you can adjust the order of levels.
>
> **[0:17](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=17)** Begin by running the levels for the sales order type column, which the code should be provided here for you.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=22)** You'll see that your current options are retail and wholesale for these two levels.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=28)** Let's say you want to manually change the order of the levels of this column.
>
> **[0:33](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=33)** Go ahead and call your sales order type column and assign it to the function fct_relevel.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=44)** For this you'll want to again look at the sales order type column, and then you will want to manually order all of the levels inside your factor column.
>
> **[0:53](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=53)** So let's switch them to be Wholesale and then Retail.
>
> **[0:58](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=58)** Below that, let's check the levels of sales order type one more time to ensure that they were switched appropriately.
>
> **[1:05](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=65)** When you run this, you will now see Wholesale is shown as the first level and Retail is showing at the second level.
>
> **[1:12](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=72)** Now let's check out the levels of the SalesReg factor column.
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=76)** So you'll see there are multiple different regions here that you can choose from for the different levels.
>
> **[1:22](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=82)** Let's say you want to change the order of the levels by frequency for this column.
>
> **[1:28](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=88)** Go ahead and assign your sales SalesReg variable to the function fct_infreq and have it be for sales SalesReg.
>
> **[1:39](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=99)** And you want to look at the levels for your sales.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=103)** SalesReg column.
>
> **[1:46](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=106)** When you execute this you'll see the levels are now ordered with the highest frequency levels shown first, and then slowly going down from there level by level.
>
> **[1:57](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=117)** Next, let's change the order of levels by the order of appearance for that column.
>
> **[2:02](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=122)** So copy and paste your code and this time change your function to be fct_inorder.
>
> **[2:10](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=130)** When you run this, this should be when they first appear in the data set.
>
> **[2:15](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=135)** So South Central East is the first level.
>
> **[2:17](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=137)** So that means it is the first one to appear in your data set.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=141)** Copy and paste your code again, but this time change your function to be fct_rev.
>
> **[2:26](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=146)** to get the reverse order or the exact opposite order of whatever your last output was.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=154)** So when you run this, you'll see it should look the opposite of the order you just had.
>
> **[2:39](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=159)** Copy and paste your code again, but this time let's use the function fct_shift to shift the order of your levels.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=167)** So you'll see Southwest used to be the second level.
>
> **[2:49](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=169)** Now it's the first level.
>
> **[2:50](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=170)** Southeast used to be the third down second, and so on.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=173)** And it moved the North Central West level to be the last level.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=177)** Copy and paste your code again, but this time let's use the fct_shuffle function.
>
> **[3:04](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=184)** What this will do is it will randomly shuffle your levels.
>
> **[3:09](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=189)** Note that when you run this, your order levels may be different than mine because it will randomly shuffle it every single time.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=197)** Finally, let's change the order of levels by another column, so copy and paste your code and change your function to be fct_reorder.
>
> **[3:26](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=206)** And this one.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=207)** You will also want to add your column you want to reorder by.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=210)** So let's reorder it by the Order Total column.
>
> **[3:35](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=215)** Now your levels are ordered based on the values of the Order Total column.
>
> **[3:41](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=221)** Let's switch to change the names of the levels themselves.
>
> **[3:46](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=226)** Note that I will interchangeably call the names of levels, either names or values.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=231)** Let's check out the levels of the CustType column.
>
> **[3:54](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=234)** Here you'll see you have the options of Business and Individual.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=237)** Let's mainly change the values or names of these levels. To manually change the level of values for your CustType column begin by calling it and assigning it to the function to fct_recode.
>
> **[4:11](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=251)** And again you'll want to do this on your sales CustType column.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=256)** And let's have your new level be B2B and have that be what used to be Business.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=264)** And then your other level to be B2C and equal that to Individual.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=270)** Let's check out the levels of your sales CustType column to view the results.
>
> **[4:37](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=277)** Now you'll see you have your two new level values of B2B and B2C.
>
> **[4:44](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=284)** Next, let's check out the levels of the Employee Title Factor column.
>
> **[4:49](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=289)** So here you'll see you have a variety of values including that odd 4.0 value.
>
> **[4:56](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=296)** Let's say you want to collapse some of these levels to combine them into a new level.
>
> **[5:02](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=302)** You could do this by calling on your sales EmpTitle column and assign that to the function fct_collapse and call on that same column again EmpTitle.
>
> **[5:16](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=316)** Let's have your new value be Senior Associate and equal that to the list of values that you wish to combine into this new one.
>
> **[5:27](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=327)** So let's have the value Senior Sales Associate and Senior Sales Representative be the two values you are combining into your new value.
>
> **[5:41](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=341)** Go ahead and check the levels of your Sales EmpTitle column to view your results.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=348)** Now you'll see instead of having Senior Sales Representative and Senior Sales Associate like you did up here, you'll just have Senior Associate as that one level value down here.
>
> **[5:59](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=359)** Note that you do not need to specify every single level in this function, just the ones you wish to combine, since the others will remain how they were before.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=368)** Let's copy and paste this code.
>
> **[6:11](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=371)** But this time let's switch the function to be fct_other.
>
> **[6:17](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=377)** What this will do is it will combine all levels you do not specify within this function to be in one new level called Other.
>
> **[6:26](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=386)** You'll change your parameter to be keep and you will equal this to the list of values you wish to keep.
>
> **[6:35](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=395)** So that'll be Senior Associate, Sales Associate, Sales Associate 1.
>
> **[6:47](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=407)** Sales Associate 2 and Sales Associate 3.
>
> **[6:56](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=416)** When you run this, you should now have these six new values for your employee title column.
>
> **[7:02](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=422)** So again, you'll have those values that you specified and then everything else will be lumped into that other level.
>
> **[7:09](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=429)** Copy and paste the code one more time and then change your parameter from FCT collapse to fct_anon.
>
> **[7:16](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=436)** Go ahead and get rid of that extra parameter that you don't need anymore.
>
> **[7:20](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=440)** And again, make sure you get rid of the extra parentheses at the end too.
>
> **[7:24](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=444)** When you run this, you'll see this function has now assigned a numeric value starting at 1 and increasing in increments of 1 for each level.
>
> **[7:33](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=453)** So now you have levels 1, 2, 3, 4, 5, and 6.
>
> **[7:36](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=456)** This is a great way to quickly convert your levels to numerical values, if that is what you so desire.
>
> **[7:42](https://www.linkedin.com/learning/r-tidyverse-applications/adjust-factor-levels-with-forcats?u=76281980&t=462)** In the next video, you will begin exploring how to map with the purrr package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (3), business (2)
> **Code Identifiers:** fct_relevel (1), fct_infreq (1), fct_inorder (1), fct_rev (1), fct_shift (1)
> **Env Vars:** b2b (2), b2c (2), fct (1)
> **Warnings:** note that (3)
> **CLI Commands:** make (1)
> **Versions:** 4.0 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)

#### Map functions with purrr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=0)** In this video I will show you the purrr package.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=3)** The purrr package helps you with mapping data.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=6)** This mapping will allow you to replace for loops with code that is much easier and succinct to use.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=11)** This is great to use with functions and vectors.
>
> **[0:15](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=15)** Let's take a moment to better understand what mapping is.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=18)** Mapping is when you transform an input by applying a function to each element of a list or atomic vector, and returning an object of the same length as the input.
>
> **[0:29](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=29)** This can be a user defined function or formula, or a function already made with base R or an R package.
>
> **[0:38](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=38)** One resource you can use for the purrr package is the Tidyverse website.
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=42)** You can navigate to the URL purrr.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions that it has.
>
> **[0:50](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=50)** Let's head over there now.
>
> **[0:53](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=53)** On the purrr package page, you'll see there is an overview of what the package does.
>
> **[0:58](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=58)** As you scroll down, you'll see instructions for how to install the Tidyverse or just the purrr package along with the cheat sheet.
>
> **[1:05](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=65)** Below that is some information on how to use the package, along with a quick example.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=71)** Let's head over to the GitHub using the link [github.com/tidyverse/purrr](https://github.com/tidyverse/purrr).
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=76)** On this GitHub page you can view the code behind the purrr package.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=80)** If you scroll down, you will see some information similar to what you saw on the Tidyverse web page.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=86)** This includes the cheat sheet for the purrr package.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=89)** Again, I highly recommend you download this cheat sheet for your reference.
>
> **[1:33](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=93)** Let's take a moment to look at this cheat sheet.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=96)** The cheat sheet you downloaded.
>
> **[1:38](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=98)** It should look similar to mine, but it may have some updates from when this course was posted.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=103)** The first page of this cheat sheet focuses on how to map with one, two, or many inputs.
>
> **[1:50](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=110)** The second page of this cheat sheet focuses on a variety of other purrr functions.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=115)** This includes modifying, reducing, plucking, concatenating, and reshaping data.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=121)** It also includes some vector and predicate functions.
>
> **[2:05](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=125)** Let's head over to RStudio to begin using the purrr package.
>
> **[2:09](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=129)** Begin by running the top portion of your code to load in your sales data using the readxl package.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=136)** Note that you'll be using a function from the dplyr package in this code.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=142)** This function will be more thoroughly explained in the next chapter.
>
> **[2:28](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=148)** Like before, you can use the whole Tidyverse to install and load your packages.
>
> **[2:33](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=153)** Or you could do it just for the purrr package.
>
> **[2:37](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=157)** If you want to just install the purrr package, you'll use install.packages() and you will do this for just the 'purrr' package.
>
> **[2:44](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=164)** So again click to run that.
>
> **[2:46](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=166)** If it comes up with that pop up, you can just either say Yes or No if you wish to update the package or not.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=172)** Now that your package is downloaded, you can load in your purrr package using the library function on your purrr package.
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=181)** Now you are ready to go!
>
> **[3:03](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=183)** Let's begin exploring this package by learning how to create a basic map.
>
> **[3:09](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=189)** Let's call on your sales data, set a pipe operator, and then the map function.
>
> **[3:15](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=195)** And let's map for class.
>
> **[3:18](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=198)** What this will do is it will provide an output for the classes of each column in your data set.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=204)** When you run this, you will now see each column name.
>
> **[3:28](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=208)** For your data set sales such as employee ID and the class of that particular column.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=214)** For example, this one is numeric.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=218)** Next I will show you a few ways to return other outputs when mapping.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=223)** Note that the general method is fairly standard for using mapping functions to get a certain output.
>
> **[3:49](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=229)** Go ahead and call on your sales data.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=231)** Set a pipe operator, and this time let's map it into an integer in particular.
>
> **[3:58](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=238)** And this time let's use n_distinct to find all the distinct values.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=244)** When you run this, you can now view each column name such as employee ID and then a number, for example 44.
>
> **[4:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=251)** This tells you how many distinct values there are in that particular column.
>
> **[4:18](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=258)** You can combine the two mappings you just did into one with a data frame.
>
> **[4:23](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=263)** Go ahead and call on your sales data set.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=266)** Your pipe operator.
>
> **[4:28](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=268)** And this time use the map df function to map it into a data frame.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=272)** Use a tilde and add another set of parentheses to create your data frame within this.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=279)** So you'll create a new column called n_distinct and you will equal that to the n_distinct function.
>
> **[4:48](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=288)** And for this you'll be putting a period x that will be denoting that you want to do this for each of those values.
>
> **[4:58](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=298)** Next add in a class column and equal it to the class function.
>
> **[5:03](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=303)** Again, you want to do that on period x for those different values.
>
> **[5:08](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=308)** Go out to just before the last parentheses.
>
> **[5:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=311)** Add another comma and add in .id = 'column'.
>
> **[5:16](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=316)** When you run this, you will have a data frame with the column classes and their number of distinct values.
>
> **[5:22](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=322)** So again your ID column is going to be the column name that you have now created.
>
> **[5:28](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=328)** And then you have n distinct is going to be all those distinct values for each column.
>
> **[5:32](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=332)** And then finally the class for each of the classes in those different columns.
>
> **[5:38](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=338)** Now let's create a function to map an extra $25 charge called add25.
>
> **[5:45](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=345)** You will assign this to your function.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=350)** You will create with period x and then you'll use curly brackets to tell you what you want your function to return.
>
> **[5:58](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=358)** So let's have it return your value x plus the value 25.
>
> **[6:06](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=366)** So run this and now your add25 function is ready to go.
>
> **[6:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=371)** Let's map a double output into a new column into your sales tibble.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=378)** Go ahead and call these sales order total column.
>
> **[6:21](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=381)** Make sure you have your quotation marks around that and then assign it to the map double function to return it as a double value.
>
> **[6:30](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=390)** So you have sales OrderTotal again, and then you want to add a comma and call on your add25 function.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=400)** Once this is done you will want to look at your sales variable again.
>
> **[6:45](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=405)** When you scroll all the way over to the right for your Order Total, it should be $25 more than it was previously.
>
> **[6:57](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=417)** If you wish to map two inputs into an output, you can use the same functions as before, but this time you will add the number 2 after the map portion and specify two inputs that you want to map.
>
> **[7:09](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=429)** Otherwise, it generally works the same as those functions you just saw.
>
> **[7:14](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=434)** For example, you can call on the sales data set in a pipe operator.
>
> **[7:18](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=438)** And this is where you'll be using the dplyr function mutate again.
>
> **[7:22](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=442)** This will be more thoroughly explained in the next chapter.
>
> **[7:25](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=445)** Let's create a new column called Max and equal it to a double mapping.
>
> **[7:32](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=452)** So you'd have map2 instead of just map again, you'll add the 2 because you have two inputs going into the output, and you'll have double to have it be a double output.
>
> **[7:44](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=464)** Go ahead and call in your Price column and your Order Total column.
>
> **[7:49](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=469)** Again make sure you have those quotation marks and then the maximum between those two values.
>
> **[7:56](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=476)** So what this will return is it's bringing in those two input values of Price and Order Total, and it's going to return which value between those two is greater.
>
> **[8:06](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=486)** When you run this and go over to your new column called Max, it should have the maximum value between order total and price.
>
> **[8:16](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=496)** So most of the time it is going to just be Order Total.
>
> **[8:19](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=499)** That is most likely going to be the larger one.
>
> **[8:22](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=502)** But again, maybe if there is a discount and there's just one quantity ordered, then the price column would most likely be the maximum value.
>
> **[8:31](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=511)** If you wish to map three or more inputs into an output, you can use the same functions as before, but this time you will add a P before the map portion and specify three or more inputs.
>
> **[8:43](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=523)** Otherwise, it generally works the same as the previous functions.
>
> **[8:47](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=527)** For example, you can call on the function pmap to do just just a general mapping.
>
> **[8:52](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=532)** And let's map the sales tibble that you created and let's use the function paste.
>
> **[9:00](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=540)** When you run this, you'll see that all the columns are pasted together into one, so that each row of data is just one long row of information.
>
> **[9:11](https://www.linkedin.com/learning/r-tidyverse-applications/map-functions-with-purrr?u=76281980&t=551)** In the next video, I will review some other popular purrr functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), next (5), [[GitHub]] (3), web (1), [[RStudio]] (1)
> **Analogies:** for example (4), similar to (2), such as (2)
> **Prerequisites:** install (4), make sure you have (2)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** n_distinct (3)
> **Cross-References:** in the next (2), next chapter (1)
> **Tools:** github (3)
> **UI Navigation:** scroll down (2), navigate to (1)

#### Other functions with purrr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=0)** In this video, I will show you some other popular functions for the purrr package.
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=5)** To begin, run the top block of code to load in your packages and products data.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=11)** Let's start off by learning how to use a few predicate functions to check if inputs pass a logical test or not, with true and false as the potential outcomes.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=22)** Let's call on the products data, set, your pipe operator and then look at the keep function for is.numeric.
>
> **[0:32](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=32)** This will only keep numeric columns from your products tibble.
>
> **[0:36](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=36)** When you run this you'll notice price is the only column left in this tibble, since that is the only one that is numeric.
>
> **[0:43](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=43)** Copy and paste this code, but this time, instead of saying keep, go ahead and say discard.
>
> **[0:51](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=51)** Now you'll see you only have the four other columns and not price because it is discarding any numeric columns.
>
> **[0:59](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=59)** Copy and paste the code again, but this time use the function head_while and change is.numeric to is.character.
>
> **[1:12](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=72)** This way when you run it, it should only return columns until they stop being a character type.
>
> **[1:18](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=78)** So you'll see it has the first four columns and then it stops returning them after that.
>
> **[1:24](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=84)** This is because the fourth column is that price column and hence it is not a character.
>
> **[1:32](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=92)** Next, let's create a function to check if values are even or not.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=96)** Let's call this function is.even and assign it to the function you will create for x.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=104)** And then your function is going to be checking if x divided by two is equal to zero.
>
> **[1:51](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=111)** And so what the two percentage signs is going to do is it's going to check for the remainder.
>
> **[1:58](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=118)** So if the remainder is zero, that means when you divide it by two it is even.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=121)** If not then it is odd.
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=124)** Go ahead and run to save this function.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=127)** And now it's ready to use with your new function.
>
> **[2:11](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=131)** Let's begin detecting the first occurrence of where the price is an even number.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=136)** Call on your products Price column and use your pipe operator with the detect function for is.even.
>
> **[2:26](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=146)** When you run this, you'll get the result of 654, since that is the first even value that has no decimal value associated with it in that particular column.
>
> **[2:37](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=157)** Let's review three different functions where you check to see if elements pass a logical test.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=163)** Copy and paste this code.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=167)** And so initially you will detect to see if every value in the Price column is even with the function every.
>
> **[2:55](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=175)** When you run this it should be false because there are decimal and odd values inside that column.
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=181)** Copy and paste your code again, but this time have it be for some.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=185)** When you run this, this should be true, because this means that at least one of the values should match your is.even function.
>
> **[3:14](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=194)** If not, then it'll be false.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=196)** Finally, copy and paste and change this to none is.even.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=201)** And when you run this, this should be false, because this function is.even is true in some cases.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=207)** Hence there are some values in there that meet that requirement.
>
> **[3:33](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=213)** Let's switch gears to review a few modifying functions where you can apply a function to elements.
>
> **[3:39](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=219)** Let's first modify the price to increase it by a value of ten.
>
> **[3:42](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=222)** Go ahead and call on your products Price column.
>
> **[3:47](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=227)** and assign it to the modifying function for the products Price column.
>
> **[3:55](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=235)** And the function you will use with this will be adding ten to it.
>
> **[4:00](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=240)** Then you can call products to view your results.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=245)** So now the price column should be ten more than it was before.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=252)** This time let's use the modify function modify_if to apply a function to elements only if they pass a certain test.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=262)** You'll apply this to your products data set, and you want to check to see if a column is a character.
>
> **[4:31](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=271)** If it is a character, let's convert it to a factor. And if not, so you have this be the .else, and you'll equal this to as.double.
>
> **[4:43](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=283)** So your results should have the product ID, the product category, and the item as factors, your price as a double, and finally your target customer as a factor.
>
> **[4:56](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=296)** Now let's use a similar function called reduce, where you can apply a function recursively to each element to return one result.
>
> **[5:05](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=305)** Go ahead and apply this to the products Price column and gather the mean or average value of this.
>
> **[5:14](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=314)** When you run this, you should get $598.60 as your mean or average value for the price column.
>
> **[5:24](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=324)** Next, you will use a concatenate function to combine elements together.
>
> **[5:29](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=329)** Use the function list underscore C to combine elements into one long vector.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=334)** Next, you will want to add the list function to create a list of values to combine.
>
> **[5:40](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=340)** So you'll have your products ProductID column, and then you will have your products Item column.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=350)** When you run this, you will see two column values have now been combined into one long vector with the ProductID one shown first and then the Item ones.
>
> **[6:02](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=362)** Finally, let's flatten some columns into two vectors.
>
> **[6:07](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=367)** You can use the function list_flatten to do this.
>
> **[6:13](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=373)** So again make sure you create another list of values and you'll be looking again at your products ProductID and your products Item.
>
> **[6:26](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=386)** This time when you run it, you will see two flattened vectors for each of these columns.
>
> **[6:33](https://www.linkedin.com/learning/r-tidyverse-applications/other-functions-with-purrr?u=76281980&t=393)** In the next video, you will learn about the challenge you will have to factor more data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (13), data (4), next (4), product (2)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Code Identifiers:** head_while (1), modify_if (1), list_flatten (1)
> **CLI Commands:** make (1)
> **Versions:** 598.60 (1)
> **Cross-References:** in the next (1)

#### Solution: Factor data
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=5)** Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=6)** Great job factoring categorical data for KinetEco's customers.
>
> **[0:11](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=11)** If you felt overwhelmed with this challenge, that is completely okay.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=14)** I will explain step by step what should have been filled in and what each line of code is doing.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=19)** Let's head over to RStudio.
>
> **[0:22](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=22)** You'll start off by running the code at the top of your coding file that says, run first to load in your tidyverse packages and your customer's data set.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=30)** Let's begin by factoring the customers State column and exclude the District of Columbia level to have it be states only.
>
> **[0:39](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=39)** So you want to call on the customers CustomerState column, and you can copy and paste this after you use the factor function to factor this column into a factor data type.
>
> **[0:56](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=56)** Note that you can use the as_factor function instead if you prefer, either one works.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=62)** So you'll paste your CustomerState column again, and this time you want to add an exclude parameter to exclude the District of Columbia.
>
> **[1:14](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=74)** Then you can call in your customers data set to view the results.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=80)** So you'll see here in CustomerState this entry used to be District of Columbia.
>
> **[1:25](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=85)** Now it is filled in with a null value.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=89)** Next let's get the levels for the CustomerState column.
>
> **[1:33](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=93)** You can use the levels functions for this on your customers CustomerState column.
>
> **[1:39](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=99)** And when you run this you can see that there are 48 customer states listed.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=104)** The two missing states are Maine and Vermont.
>
> **[1:47](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=107)** Let's remedy that.
>
> **[1:49](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=109)** You'll call on the customers CustomerState column again, and this time you'll assign it to the function fct_expand And what this will do is it will expand your factor levels.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=123)** So you want to call in your customers CustomerState column again and then you will add a list of values which will include Maine and Vermont.
>
> **[2:14](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=134)** Then you can check the levels of your column CustomerState again to ensure that these new levels have been added.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=141)** So when you run this, you can view Maine and Vermont at the end.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=145)** And now you have all 50 US states added.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=150)** Now that all 50 US states are ready to go in your CustomerState column, you can change the order of the levels by frequency for this column.
>
> **[2:39](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=159)** So you call on your customers CustomerState column.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=163)** You'll call in your fct_infreq function.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=167)** And what this will do is it will sort your levels with the highest frequency at the top and the lowest frequency at the bottom.
>
> **[2:54](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=174)** So you want to do that for your customers CustomerState column.
>
> **[2:58](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=178)** And again check the levels to see how this changes your results.
>
> **[3:02](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=182)** So when you run this, it looks like California, Texas, Florida and New York have the highest frequency.
>
> **[3:10](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=190)** Finally, let's see just how frequently these different levels occur in the data set.
>
> **[3:16](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=196)** And this will help you verify if California, Texas, Florida and New York do have the highest frequency.
>
> **[3:21](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=201)** What you could do is you could use the fct_count function on your customers CustomerState column.
>
> **[3:28](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=208)** When you run this, you can see each factor level is listed in the column to the left, and then the column to the right shows how many times they appear in the data set.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=218)** So California appears 265 times, Texas 219 times, Florida 167 times, and New York 112 times.
>
> **[3:49](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=229)** Now you have a better understanding of how to factor data for KinetEco.
>
> **[3:54](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=234)** I hope you enjoyed this challenge and that it helped you reinforce what you learned in this chapter when it comes to factoring your data.
>
> **[4:00](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=240)** If you struggled or were not able to get the code to run properly on your own, that is perfectly okay.
>
> **[4:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-factor-data?u=76281980&t=245)** Programming takes practice to get better at, so keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[RStudio]] (1), next (1), [[Programming]] (1)
> **Code Identifiers:** as_factor (1), fct_expand (1), fct_infreq (1), fct_count (1)
> **Warnings:** note that (1)


### 4. Analyze and Visualize Data

[↑ Back to Table of Contents](#table-of-contents)

#### Summarize data with dplyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=0)** In this chapter, I will dive into different ways.
>
> **[0:02](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=2)** You can analyze, transform and visualize data in R using the Tidyverse.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=8)** I will show you how to use the dplyr and ggplot2 packages.
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=12)** Let's begin with the dplyr package.
>
> **[0:15](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=15)** The dplyr package helps you with data transformation and some basic data analysis.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=20)** The dplyr package is powerful and key to many analyses.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=25)** You will learn how to summarize, group, mutate, filter and join data with this package.
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=31)** Something to keep in mind when using the dplyr package is that it expects your data to be tidy, so you can use the previous packages to tidy up your data to make sure it is ready to be transformed and analyzed.
>
> **[0:45](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=45)** One resource you can use for the dplyr package is the Tidyverse website.
>
> **[0:50](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=50)** You can navigate to the url dplyr.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[0:58](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=58)** Let's jump over there now.
>
> **[0:59](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=59)** On the dplyr package page, you'll first see there's an overview of what the package does with some of its common functions, along with some information on the back ends.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=71)** Below that, you'll view some instructions on how to install the tidyverse and the dplyr package the cheat sheet, which you can download here or on the GitHub page, and some usage instructions, along with a few examples of how to use some of the common functions of this package.
>
> **[1:27](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=87)** Let's head over to the dplyr GitHub using the link [github.com/tidyverse/dplyr](https://github.com/tidyverse/dplyr).
>
> **[1:34](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=94)** On this GitHub page, you can view the code behind the dplyr package.
>
> **[1:38](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=98)** When you scroll down, you'll be able to view some information similar to what you saw on the Tidyverse webpage, and this will include the cheat sheet that you could find there as well.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=108)** Like always, I highly recommend you download this cheat sheet for your reference.
>
> **[1:52](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=112)** Let's take a moment to look at this cheat sheet.
>
> **[1:56](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=116)** The cheat sheet you downloaded should look similar to mine, but note that I may have some updates from when this course was posted.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=123)** The first page of this cheat sheet focuses on summarizing, grouping, and manipulating data.
>
> **[2:10](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=130)** The second page of this cheat sheet focuses on a variety of vectorized functions that you can use with the mutate function, along with some summarizing functions you can use with the summary function.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=141)** It also contains information on how to join data.
>
> **[2:25](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=145)** Let's take a moment to look a bit closer at the summarizing functions.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=150)** The summarize function allows you to get summary statistics from your data.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=154)** The types of summary statistics you can get are accounts, averages, sums, order, rank, and spreads such as variance and interquartile range.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=163)** Let's head over to RStudio to begin using the dplyr package.
>
> **[2:48](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=168)** Begin by running the top portion of your code to load in your data using the readxl package.
>
> **[2:54](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=174)** Like always, you can use the whole Tidyverse to install and load your packages with the code that's been commented out here.
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=181)** Or you could do it for just the particular package.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=186)** If you want to just install the dplyr package, you can use install.packages and specify 'dplyr'.
>
> **[3:14](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=194)** When you run this, it'll install the package along with any other requirements.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=200)** Like before, if it does have a message, pop up asking if you wish to update the package.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=204)** You could either click Yes to update it or No/Cancel if you don't want to update it.
>
> **[3:28](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=208)** Next, you can load in your dplyr package using the function library and calling on your dplyr package.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=216)** Now you are ready to go to begin using this package.
>
> **[3:41](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=221)** Let's begin by exploring this package by learning how to use the summarize function.
>
> **[3:47](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=227)** You'll start off by getting the average order total call on your sales tibble, a pipe operator, and the summarize function.
>
> **[3:57](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=237)** Note that you can spell the summarize function with an S or Z, and either version will work.
>
> **[4:03](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=243)** Let's create a new column for your output called AverageOrder, and equal it to the mean of the order total.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=252)** Note the Backtick is used to call on your order total column.
>
> **[4:16](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=256)** Some instances, such as this one.
>
> **[4:18](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=258)** You may need to use a Backtick to properly call on a column that has one or more space in it, versus typical quotation marks. In your output, you should be able to see a new tibble with one value in it for your average order total.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=272)** So this means the mean of the order total is 917, along with those decimal values.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=279)** This is a super easy way to use the summarize function to get summary statistics for a column in a tibble.
>
> **[4:48](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=288)** This time, let's gather two different summary statistics for a column.
>
> **[4:54](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=294)** Go ahead and call on your sales variable again.
>
> **[4:57](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=297)** Use your summarize function.
>
> **[4:59](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=299)** And this time let's gather the first and last values from the Price column.
>
> **[5:04](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=304)** So call your first column FirstPrice, equal it to the first function for your Price column, add a comma and then add the last price as your second column.
>
> **[5:15](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=315)** Use the last function on your price column.
>
> **[5:20](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=320)** When you run this, you should be returning the first value that appears at the top of the price column, which should be 654, along with the last price that views at the bottom of your price column, which should be 13.99.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=334)** This is nice, since the summarize function allows you to return both of these values in just one tibble output.
>
> **[5:42](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=342)** Go ahead and copy and paste your code from above.
>
> **[5:45](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=345)** But this time, instead of getting the first and last price, let's get the minimum and maximum price.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=350)** So change your first price to min price and use the min function to gather the minimum value.
>
> **[5:56](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=356)** Change last price to max price and use the max function to get the maximum value for your price column.
>
> **[6:03](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=363)** Like before, you should have two outputs in your new tibble.
>
> **[6:07](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=367)** So 7.53 is your minimum price and 13,233 is your maximum price.
>
> **[6:16](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=376)** Next let's get the standard deviation and interquartile range of the quantity column.
>
> **[6:22](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=382)** Use your sales variable a pipe operator and the summarize function again.
>
> **[6:27](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=387)** And let's call the first column total dev for the total standard deviation, equal it to SD, which is the function for standard deviation of the quantity column.
>
> **[6:38](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=398)** Next, let's get the total interquartile range, which you can call total IQR and equal that to the IQR function for the quantity column.
>
> **[6:48](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=408)** Just make sure your IQR function here is all capitalized.
>
> **[6:54](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=414)** When you run this, you should be able to see the standard deviation for the quantity column, which is 1.45, along with those other decimal values.
>
> **[7:02](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=422)** And the total interquartile range is three.
>
> **[7:06](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=426)** Now you will get two different values, with one being on the overall tibble, and the other focusing on a certain column.
>
> **[7:14](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=434)** So use your sales variable, a pipe operator and your summarize function.
>
> **[7:19](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=439)** And for the first one let's get the number of rows in your data set.
>
> **[7:23](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=443)** So you call this column rows and use the function n to get that the second one.
>
> **[7:28](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=448)** Let's look at the unique categories for the products.
>
> **[7:32](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=452)** So call that unique categories and equal it to the n_distinct function of the ProdCategory column.
>
> **[7:40](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=460)** When you run this again, even though you are gathering values from the overall data set and a particular column, it will just show the results in one tibble with those two values.
>
> **[7:50](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=470)** So it looks like you have 5,448 rows and seven unique categories inside your ProdCategory column.
>
> **[7:59](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=479)** Let's look at another function called across, where you can run a summary function across multiple columns at once.
>
> **[8:07](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=487)** So go ahead and call in your sales variable, a pipe operator and your summarize function.
>
> **[8:14](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=494)** Then use that across function and have it go across everything.
>
> **[8:19](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=499)** So again that'll go across all the different columns you have.
>
> **[8:23](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=503)** For that let's get the distinct values for each of those columns.
>
> **[8:27](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=507)** So you'll use the end distinct function. When you run this, you should get the distinct number of values for each of the columns in your data set.
>
> **[8:36](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=516)** So again you'll have your tibble with 18 different values, where again, each column will be showing how many unique values it has in the data set.
>
> **[8:43](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=523)** And you can click to the right.
>
> **[8:44](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=524)** And that should show you the rest of those values.
>
> **[8:48](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=528)** Finally, let's use the count function, which will count the number of rows in each group of a variable.
>
> **[8:54](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=534)** Call on your sales variable, the pipe operator, and the count function, and let's count for the column CustomerState.
>
> **[9:01](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=541)** When you run this, you'll have your tibble with 50 different values, with all the different states and the number of times they occur in the data set.
>
> **[9:10](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=550)** So for example, Alabama occurs 107 times in the data set.
>
> **[9:15](https://www.linkedin.com/learning/r-tidyverse-applications/summarize-data-with-dplyr?u=76281980&t=555)** In the next video I will show you how to group data with dplyr.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[GitHub]] (4), [[Statistics]] (4), next (4), [[Data Transformation]] (1)
> **Analogies:** similar to (2), such as (2), for example (1)
> **Prerequisites:** install (5)
> **Tools:** github (4)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** iqr (3)
> **Versions:** 13.99 (1), 7.53 (1), 1.45 (1)
> **UI Navigation:** navigate to (1), scroll down (1), go to (1)

#### Group data with dplyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=0)** In this video, I will show you how to group data with the dplyr package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=4)** This is similar to using pivot tables in Microsoft Excel, where you aggregate data together based on one or more distinct column values.
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=12)** Begin by running the top portion of your code to load in your packages and sales dataset.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=18)** Let's begin with a simple group_by function to group some data together and tally them up.
>
> **[0:24](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=24)** This will provide a similar result to how you use the count function in the previous video.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=30)** Call on your sales tibble, a pipe operator, and then the group by function, and you'll do this on your SalesReg column for the sales region.
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=42)** Add another pipe operator and then call on the tally function.
>
> **[0:47](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=47)** When you run this, you'll see there are nine different regions that occur in the data set, along with how many times they occur.
>
> **[0:57](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=57)** Next, let's combine the summarize function with the group_by function to get the total quantity by product category.
>
> **[1:06](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=66)** Call on your sales tibble, a pipe operator and your group by function and have it be on the product category.
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=76)** Then you'll add another pipe operator and your summarize function.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=81)** And let's call this new column total quantity and equal it to the sum of the Quantity column.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=89)** When you run this, your results will show the total quantity sold for all orders for each of those unique product categories.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=96)** So for example, with batteries there are 1,874 of them sold.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=103)** Copy and paste the code from above, but this time you will adjust the inside of the summarize function to get two different summary statistics.
>
> **[1:53](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=113)** So this time have your first column be average, total and equal it to the mean of the OrderTotal.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=121)** Again, make sure you have your backticks for this one.
>
> **[2:05](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=125)** Put a comma and then instead of getting the total quantity, let's get the average quantity and use the mean function on your quantity column.
>
> **[2:20](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=140)** In your results, you should show all seven of the different product categories along with their average total and their average quantity.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=150)** Go ahead and copy and paste your code from above.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=154)** But this time, instead of grouping by ProdCategory, let's group by the OrderType.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=160)** Then let's change the second column to be the Total and equal it to the sum of the Order Total column.
>
> **[2:52](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=172)** And again, make sure you use your Backticks for this one again.
>
> **[2:56](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=176)** When you run this, you will see the average and summed order totals for Retail and Wholesale order types.
>
> **[3:04](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=184)** You'll notice the average for Wholesale is a lot higher than Retail, but their total amounts are very similar.
>
> **[3:13](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=193)** Go ahead and create a new variable called group data and assign it to your sales tibble.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=200)** a pipe operator, and the group by function on your OrderType and your ProdCategory columns.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=210)** Add another pipe operator and let's use the summarize function to get some summary statistics.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=216)** Let's get the average Total and equal it to the mean of the Order Total.
>
> **[3:44](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=224)** And then the total of the Order Total.
>
> **[3:48](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=228)** So you'll call that one total and use the sum function on Order Total.
>
> **[3:54](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=234)** Finally, you will want to add the parameter groups equal to drop, since this will avoid any errors or warning messages due to grouping on multiple columns.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=246)** Go ahead and run this and then in the space below print out your group data variable to view the results.
>
> **[4:15](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=255)** In your first column, you should have the order type, and the second column should be the product category.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=260)** And you'll see there are 14 total rows of values. For each combination of these, it will then show the average order total and the summed order total.
>
> **[4:31](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=271)** When it comes to combining these values together, it will show you all the combinations that it finds in the data set with your corresponding values.
>
> **[4:40](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=280)** It will not include any potential combinations that can occur that are not inside the actual data set.
>
> **[4:47](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=287)** Next, let's sum two columns together to demonstrate a point in the next set of code.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=293)** Go ahead and call on the sale variable, a pipe operator, and let's use the summarize function on two different columns.
>
> **[5:02](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=302)** Let's call it QuantityDiscount as your new column name, and equal it to the sum of the Quantity column and the Discount column.
>
> **[5:17](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=317)** When you run this, you'll notice there's only one output with the Quantity and Discount column values all summed together in this one big value.
>
> **[5:26](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=326)** I will show you how to adjust this code to have it sum by row instead, since often that is the result that you will want instead of one giant summarize value, go ahead and copy and paste your code into this last cell, and let's add the function rowwise and another pipe operator before your summarizing function.
>
> **[5:49](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=349)** This function allows you to group data together individually by rows and set up by a unique column value, like a typical group by function.
>
> **[5:58](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=358)** Now when you run this, you will get an output of quantity and discount summed up for each row in the data set.
>
> **[6:07](https://www.linkedin.com/learning/r-tidyverse-applications/group-data-with-dplyr?u=76281980&t=367)** In the next video, I will show you how to mutate data with dplyr.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), product (5), next (4), [[Statistics]] (2), [[Pivot Tables]] (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** group_by (2)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** make sure you have (1), set up (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### Mutate data with dplyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=0)** In this video, I will show you how to mutate data with the dplyr package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=4)** Begin by running the top portion of your code to load in your packages, and two data sets for sales and sales regions.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=13)** Let's begin by arranging the sales data set by a particular column.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=18)** So call on your sales tibble, the pipe operator, and let's use the arrange function for this to arrange it by quantity.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=25)** When you run this and scroll all the way to the right, you'll see the quantity column now begins at one and it'll be going up in ascending order.
>
> **[0:34](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=34)** Copy and paste your code, but this time let's add in the function desc before your quantity column.
>
> **[0:43](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=43)** And what this will do is it will now sort your data in descending order for quantity.
>
> **[0:48](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=48)** So when you run this and scroll all the way to the right, you now see quantity starts at 14 and goes down from there.
>
> **[0:56](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=56)** Next, let's add a new row of data to your sales regions data set.
>
> **[1:01](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=61)** So call on your sales region's data set.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=63)** Use the pipe operator and call on the function add row.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=68)** With this particular function, you'll need to make sure that you have a value entered in for each of the columns in your data set.
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=76)** So let's start with the State column and add in the value Puerto Rico.
>
> **[1:21](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=81)** Add in a comma and then you'll want to look at the region column.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=86)** And let's have it be in the Southeast region.
>
> **[1:31](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=91)** When you run this and scroll all the way to the last row, you'll see Puerto Rico and the Southeast region have been successfully added to your data set.
>
> **[1:41](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=101)** Next, let's rename a column in your data set.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=105)** Call on your sales regions.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=108)** Add your pipe operator and use the rename function on your Region column.
>
> **[1:56](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=116)** So let's call this column SalesRegion instead.
>
> **[1:59](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=119)** And you'll want to equal this to the Region column.
>
> **[2:02](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=122)** When you run this you'll now see the column is now called SalesRegion.
>
> **[2:06](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=126)** Note that you will need to save this to that sales region's variable if you want to have it stay long term.
>
> **[2:12](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=132)** Let's head over to the dplyr cheat sheet for a moment to more thoroughly explore the mutate function.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=139)** The mutate function allows you to apply vectorized functions to columns.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=144)** Specifically, the mutate function usually creates new columns from the functions you run on it.
>
> **[2:29](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=149)** Here you could see a few of the common vectorized functions you could use with your mutate function.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=154)** This includes offsetting elements, calculating cumulative aggregates, ranking elements, performing mathematical operations, and a variety of other functions such as case statements.
>
> **[2:46](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=166)** Let's head back over to RStudio to begin using this mutate function.
>
> **[2:51](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=171)** The first mutate function you will run is with a simple division operation.
>
> **[2:55](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=175)** Call on your sales variable, a pipe operator, and the mutate function.
>
> **[3:01](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=181)** For this, let's call the new column NewPrice, and equal it to the Order Total - with your backticks - and have that divided by the Quantity column.
>
> **[3:13](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=193)** When you run this and scroll all the way to the right, you'll see your new column New Price, and it should have the Order Total divided by the Quantity.
>
> **[3:22](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=202)** This will properly reflect the price per product with any of the discounts that were applied in this discount column.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=210)** Next, call in your sales variable, a pipe operator, and let's do a mutating function to get the employee type.
>
> **[3:37](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=217)** So let's have employee type equal to the if else function.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=223)** And let's use a string function called str_detect to detect a value from the EmpTitle column.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=231)** From this column, let's detect to see where the string associate occurs.
>
> **[3:56](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=236)** If that string occurs, let's have the return value be associate.
>
> **[4:00](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=240)** If not, let's have it be representative.
>
> **[4:02](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=242)** This will greatly reduce the amount of different employee titles to just the type of whether they are an associate or a representative.
>
> **[4:10](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=250)** When you run this, you can scroll all the way to the right to view your new EmployeeType column, where it should have an associate and representative listed out accordingly.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=260)** Now let's create a new column using a summary function.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=264)** Call on your sales variable, your pipe operator, and the mutate function.
>
> **[4:28](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=268)** And let's get the mean total.
>
> **[4:30](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=270)** And for this equal it to the mean of your Order Total column.
>
> **[4:35](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=275)** Again, like always, make sure you have your backticks for this, and click run.
>
> **[4:40](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=280)** When you scroll all the way over to the right, you will now see the mean total is put in for every single row value.
>
> **[4:47](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=287)** So again it should look the same for all of them.
>
> **[4:50](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=290)** This is because it is returning the mean value for the entire column at once.
>
> **[4:55](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=295)** And again, it's going to be putting that in for each row.
>
> **[5:00](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=300)** Let's say instead of providing one summarized value, you want to gather a cumulative one instead.
>
> **[5:06](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=306)** This time calling your sales variable your pipe operator and mutate function.
>
> **[5:11](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=311)** And this time let's do this on the quantity column and have the new column called quantity sum.
>
> **[5:16](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=316)** This time you want to use a cumsum function on the quantity column to get that cumulative sum.
>
> **[5:23](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=323)** When you run this and scroll all the way to the right, you can get your quantity sum column and you'll see it's going to be incrementing up and adding those quantity values each time to where it's slowly just going to get larger and larger.
>
> **[5:35](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=335)** Finally, let's use a ranking function.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=339)** Use your sales tibble, your pipe operator and the mutate function.
>
> **[5:43](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=343)** And let's call this new column Order Rank.
>
> **[5:46](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=346)** And let's equal it to the percent rank function on your Order Total column.
>
> **[5:54](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=354)** When you run this and scroll all the way to the right to your order rank column, it will rank the value for the Order Total column as a percentage between the values of 0 to 1.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=365)** So again, 0.88 is going to be 88%.
>
> **[6:08](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=368)** For example, the second row is showing that it is almost 82%, which means it's a pretty high order total versus if you look a little lower to the ninth value here, it's closer to 2%, which makes sense because this order total is a lot lower than the other ones.
>
> **[6:26](https://www.linkedin.com/learning/r-tidyverse-applications/mutate-data-with-dplyr?u=76281980&t=386)** In the next video, I will demonstrate how to filter data with the dplyr package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), next (4), [[RStudio]] (1), product (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** you'll need (1), make sure you have (1)
> **Code Identifiers:** str_detect (1)
> **Versions:** 0.88 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Filter data with dplyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=0)** In this video, I will show you how to filter data with the dplyr package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=4)** Begin by running the top portion of your code to load in your packages and two data sets.
>
> **[0:12](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=12)** Let's begin by filtering sales data for orders that have a quantity of 5 or more.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=18)** You could do so by calling on your sales variable, pipe operator and the filter function.
>
> **[0:24](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=24)** Let's do this where the quantity is greater than or equal to the value 5.
>
> **[0:30](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=30)** When you run this, you should get 198 rows of data.
>
> **[0:35](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=35)** Where if you scroll over to the Quantity column, they should be at 5 or more.
>
> **[0:41](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=41)** Next, let's filter using a stringr function. Call on your sales variable, a pipe operator in your filter function again, and this time add in the function str_starts to determine for the sales SalesRegion column, where it starts with the word Central.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=62)** When you run this, you should get 763 rows of data, and it should be only where the sales region starts with Central.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=71)** So even if Central is somewhere else in the screen, it will not count it, only when it starts with the word Central.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=80)** Now let's filter your sales data for values only above the mean of the Price column.
>
> **[1:25](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=85)** Calling your sales data a pipe operator, and use the filter function where you are having the Price column be greater than the mean of the Price column.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=96)** You'll also want to add in the parameter na.rm equal to true.
>
> **[1:41](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=101)** This is a good habit to have to remove any null values from the calculation, in case if there are any in your data set.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=108)** Once you run this, your result should have 1,397 rows, and if you scroll over to your price column, they should all be higher values again greater than the mean and won't even include the mean.
>
> **[2:00](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=120)** It'll be everything above that.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=123)** Let's combine the group_by function with the filter function.
>
> **[2:08](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=128)** Copy and paste your code from above, but this time let's add in a group by function on the ProdCategory column.
>
> **[2:16](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=136)** Make sure to add in another pipe operator and you could leave everything else as is.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=142)** This time what it's going to do is it's going to go by product category and look at the price values for each category by itself.
>
> **[2:30](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=150)** So it's going to gather the average price or again the mean price for each category.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=154)** And make sure it only returns values greater than that for that particular product category.
>
> **[2:41](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=161)** Let's move on to some other filtering functions.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=165)** Let's pull the distinct customer names from your sales data.
>
> **[2:48](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=168)** To do this, you can call in your sales data set, a pipe operator, and use the distinct function on your customer name column.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=177)** When you run this, you should get 2,103 results with all the different names pulled for you.
>
> **[3:05](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=185)** Next, let's slice your data set by index values.
>
> **[3:10](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=190)** Call on your sales data set, the pipe operator and use the slicing function to get index values 26 to 100.
>
> **[3:20](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=200)** When you run this, you should be getting 75 values between these two index values in your data set.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=207)** Now let's do a variation of slicing, where you slice the bottom percentage of data based on a certain column.
>
> **[3:34](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=214)** Go ahead and call on your sales tibble.
>
> **[3:36](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=216)** Your pipe operator.
>
> **[3:38](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=218)** And let's use the slice min function instead of just the slice function.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=223)** This time let's look at the Order Total with your backticks and then you will have prop, which is the proportion equal to 0.05.
>
> **[3:52](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=232)** To have it be the bottom 5% of orders that you are returning.
>
> **[3:56](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=236)** So when you run this, you should have 281 rows.
>
> **[3:59](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=239)** If you scroll over to Order Total, they should all be pretty low values because again you're getting that bottom 5% of orders.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=246)** Let's say you wish to you do the opposite.
>
> **[4:08](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=248)** Go ahead and copy and paste that.
>
> **[4:10](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=250)** But instead of having the slice min switch it to slice max.
>
> **[4:13](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=253)** And now if you scroll over to the right you'll be getting those top 5% of ordered total values.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=260)** So again these values should be a lot higher than they were before.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=264)** And you'll notice with both of these they should either sort it in ascending order if it is the minimum or descending order if it is the maximum version.
>
> **[4:35](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=275)** Next, let's do some slicing with the customer's data set.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=279)** Call on your customers variable.
>
> **[4:42](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=282)** Use the pipe operator and get your slice head for n = 20.
>
> **[4:49](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=289)** So what this will do is it will return the first 20 values in your data set.
>
> **[4:54](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=294)** So again you should just have 20 rows of data and that's it.
>
> **[4:58](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=298)** Go to copy and paste this.
>
> **[5:00](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=300)** But this time change slice head to be slice sample.
>
> **[5:03](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=303)** What this will do is it will randomly gather 20 samples of data from your entire data set to return.
>
> **[5:10](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=310)** Note that the sample will be random each time you run it, unless if you see the numbers.
>
> **[5:14](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=314)** So again, your samples will most likely look different than mine.
>
> **[5:18](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=318)** Finally, let's look at a few functions to extract columns from your customer's data set.
>
> **[5:24](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=324)** Call on your customers variable, your pipe operator and use the pull function for the customer name column.
>
> **[5:33](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=333)** What this will do is it will pull this column into a vector.
>
> **[5:40](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=340)** Next, let's select multiple columns and put them into a new tibble.
>
> **[5:46](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=346)** Go ahead and call on your customers tibble.
>
> **[5:49](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=349)** Your pipe operator.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=350)** And this time you will use the function select.
>
> **[5:53](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=353)** So let's select Customer ID. Again, make sure you have your backticks with that one, your customer name and your customer state.
>
> **[6:02](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=362)** When you run this, you should get a new tibble that has all the information for just these three columns from your data set.
>
> **[6:11](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=371)** Lastly, let's relocate one of your customer columns.
>
> **[6:17](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=377)** Call on your customers variable, the pipe operator, and then this time use the relocate function.
>
> **[6:25](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=385)** And let's relocate the customer type column and do period after to have it be located now after the customer state column.
>
> **[6:35](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=395)** When you run this and look at your results, you should have the data be the same as always is, but your customer state will now have customer type right after it.
>
> **[6:45](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=405)** Note that any of the filtering changes you made in this video will need to be saved to a variable, if you wish to have them stay long term.
>
> **[6:53](https://www.linkedin.com/learning/r-tidyverse-applications/filter-data-with-dplyr?u=76281980&t=413)** In the next video, I will show you how to join data with dplyr.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), next (5), [[Microsoft Word|Word]] (2), product (2)
> **CLI Commands:** make (3), rm (1)
> **Code Identifiers:** str_starts (1), group_by (1)
> **Warnings:** note that (2)
> **Versions:** 0.05 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Join data with dplyr
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=0)** In this video, I will show you how to perform some joins with the dplyr package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=4)** Let's take some time to understand joins in general.
>
> **[0:08](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=8)** There are four main types of joins in R.
>
> **[0:10](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=10)** This includes inner, full, left and right.
>
> **[0:14](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=14)** The types of joins specify exactly what data is gathered from each data set.
>
> **[0:19](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=19)** The inner join will only return data that has matching values in both data sets.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=25)** This means it will leave out any data from either data set that does not match on the column or columns being joined on.
>
> **[0:33](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=33)** A left join returns all records from the left data set, also known as the data set on the left side of the statement, and only the match records on the right data set.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=44)** A right join is essentially the opposite of a left join, where it returns all records from the right data set, also known as the data set on the right side of the statement, and only the match records on the left data set.
>
> **[0:56](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=56)** I suggest you only use left or right joins in your statements instead of mixing them.
>
> **[1:01](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=61)** In this course you will focus on using the left joins in your code.
>
> **[1:06](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=66)** A full join returns all the records from both data sets.
>
> **[1:10](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=70)** For all the rows of data that don't match in a join, R will fill in those empty spaces with null values.
>
> **[1:16](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=76)** The same goes for the join data set and left and right outer joins.
>
> **[1:20](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=80)** Finally, there are two special cases of left join and are with dplyr.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=86)** They are called the semi join and the anti join.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=89)** These joins work like a left join does, but they only return the data on the left side of the statement instead of both data sets join together.
>
> **[1:38](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=98)** The semi join only returns values that match while the anti join only returns values that don't match.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=105)** Let's jump over to RStudio to begin joining data.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=108)** Let's begin by running the code at the top of your coding file to bring in five sets of data.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=115)** This will include sales, products, individual_customer, business_customer, and sales_reps.
>
> **[2:03](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=123)** Before you begin joining, you will want to bind together your individual customer and business customer data sets together to make one long customer data set.
>
> **[2:14](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=134)** To do this, create a new tibble called customers and assign it to the function bind rows.
>
> **[2:21](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=141)** Then call on your individual customer and your business customer data sets.
>
> **[2:27](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=147)** What this function will do is it will set your individual customer data on top of your business customer data.
>
> **[2:35](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=155)** When you do this, generally you want to make sure that the number of columns for those two data sets you are putting together are the same number and generally match.
>
> **[2:45](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=165)** Finally, call on your customers variable to view the results.
>
> **[2:51](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=171)** Now you should have one long tibble with 2,449 values with your seven different columns for your customers.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=180)** Let's start off by doing a left join by using the left join function.
>
> **[3:07](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=187)** You can do this on the sales and the sales reps data sets.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=192)** You will join these two data sets by the employee ID column.
>
> **[3:17](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=197)** Since both of these data sets have that particular ID that will allow you to match them appropriately.
>
> **[3:26](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=206)** When you run this, it should show your sales data set first.
>
> **[3:30](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=210)** And if you scroll all the way over to the right, you will then see the information from these sales reps data set so the employee name, job title, region, and so on.
>
> **[3:40](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=220)** Note that since this is a left join, it will keep all the values from the sales data set and it will only gather in values from the sales reps data set that have a match in that sales data set.
>
> **[3:53](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=233)** Next, let's do an inner join by using the inner join function.
>
> **[3:59](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=239)** For this one, you can join these sales and the customer's data sets.
>
> **[4:04](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=244)** Because these two data sets are joined by columns with different names, you want to have the BY and have the C in parentheses to create a list of values.
>
> **[4:14](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=254)** So you'll have the cust ID equal to the customer ID.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=262)** When you run this, you should get your new table where again it'll have the sales data set first.
>
> **[4:28](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=268)** And if you scroll to the right you'll have your information regarding your customers data set.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=272)** And since it is an inner join, it will only return values where it has a match on both the sales and customer side.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=279)** In this case, it looks like all the values from the sales data set matched accordingly, because you still have your 5448 rows of data.
>
> **[4:49](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=289)** Next, let's perform a full join or also known as a full outer join on your sales and products data sets.
>
> **[4:58](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=298)** Again, since you need to join them by two columns that have different names, you'll want to do the C in parentheses to have it be a list of values, and have the prod number equal to the product ID.
>
> **[5:12](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=312)** When you run this, this should return all values from these two data sets, whether they match or not.
>
> **[5:19](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=319)** Note that if a row does not match with the data, it will simply fill in those values with nulls.
>
> **[5:25](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=325)** So you'll see your sales data set first, scroll to the right and then you should be able to view your Price data set.
>
> **[5:32](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=332)** Next, let's do the special cases of the left join with the semi join and anti join.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=339)** Let's have your sales variable and your pipe operator and use the semi join function on your products data set.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=348)** And then use your buy parameter.
>
> **[5:50](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=350)** And this time you'll want to add in this join by parameter.
>
> **[5:53](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=353)** Because you're doing this semi join and you'll want to join it on the price column.
>
> **[5:59](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=359)** When you run this, you'll notice only 5,346 values are returned to your tibble.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=365)** Remember, this will only return values from your sales data set.
>
> **[6:10](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=370)** So if you scroll all the way to the right, you'll notice there's no other columns from that particular product's data set, because it is only returning those filtered values where the price matches from that data set.
>
> **[6:23](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=383)** You can copy and paste this code, but instead of doing a semi join, let's do an anti join to essentially do the opposite.
>
> **[6:32](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=392)** So when you run this you will have 102 values.
>
> **[6:35](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=395)** And this means that this is where values did not match from that product's data set.
>
> **[6:40](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=400)** So again it's only going to return values from your sales data set.
>
> **[6:44](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=404)** And it is where it did not find a match for the price column in that product's data set.
>
> **[6:49](https://www.linkedin.com/learning/r-tidyverse-applications/join-data-with-dplyr?u=76281980&t=409)** In the next video, you will begin exploring how to visualize data with the ggplot2 package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (52), next (4), product (4), [[Microsoft Products|Products]] (3), business (3)
> **Definitions:** known as (3), is a  (1), is an  (1), means that (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** individual_customer (1), business_customer (1), sales_reps (1)
> **Warnings:** note that (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** before you begin (1)

#### Plot one variable visualizations with ggplot2
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=0)** In this video I will show you the ggplot2 package.
>
> **[0:04](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=4)** The ggplot2 package is your data visualization hub in the Tidyverse.
>
> **[0:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=9)** There are dozens of different visualizations you can create with one or more variables using this package, with a wide range of customization.
>
> **[0:17](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=17)** This course will focus on giving you a general introduction to visualizing data with this package, but note that the visualizations and customizations you can program are vast.
>
> **[0:28](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=28)** One resource you can use for the ggplot2 package is the Tidyverse website.
>
> **[0:33](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=33)** You can navigate to the URL ggplot2.[tidyverse.org](https://tidyverse.org) to get an overview of the package, along with some examples of the different functions it has.
>
> **[0:43](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=43)** Let's head over there now.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=44)** On the ggplot2 package page you'll see there's an overview of what the package does.
>
> **[0:51](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=51)** Below that are some instructions on how to install the tidyverse and specifically the ggplot2 package and the cheat sheet, which you can download here or on the GitHub page.
>
> **[1:02](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=62)** Below that is some information on how you can use the package, including a visualization example, some information about the life cycle and how to learn ggplot2.
>
> **[1:12](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=72)** Let's head over to the ggplot2 GitHub using the link [github.com/tidyverse/ggplot2](https://github.com/tidyverse/ggplot2).
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=79)** On this GitHub page you can view the code behind this package.
>
> **[1:23](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=83)** Below that is similar information that you can find on the Tidyverse website, including the cheat sheet.
>
> **[1:29](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=89)** Like always, I highly recommend you download this cheat sheet for your reference.
>
> **[1:34](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=94)** Let's head over to check out this cheat sheet.
>
> **[1:37](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=97)** The cheat sheet you downloaded should look similar to mine, but it may have some updates from when this course was posted.
>
> **[1:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=104)** The first page of this cheat sheet focuses on the basics of visualizing data.
>
> **[1:48](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=108)** Then there are some common visualization functions for one, 2 or 3 variables.
>
> **[1:55](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=115)** The way this cheat sheet is structured is you have your basic section over here.
>
> **[2:01](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=121)** On the bottom left you have some common aesthetic values.
>
> **[2:04](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=124)** So when it comes to the color or fill values, you can often either type in the name of the color, such as red or the RGB value in its correct code.
>
> **[2:15](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=135)** When it comes to line types, you can either state the name, such as solid or dashed, or put the associated number with it.
>
> **[2:22](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=142)** With size, it is usually as an integer, and that's denoted in millimeters for size of points and text.
>
> **[2:29](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=149)** For line width, it's same thing as size.
>
> **[2:31](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=151)** And then finally for shape, usually you put in the number of the shape.
>
> **[2:36](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=156)** So if you wish to find a particular shape to use in your visualization, check out the sheet sheet.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=160)** And then just type in the according numbers.
>
> **[2:43](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=163)** So for example 23 is going to be a filled in diamond.
>
> **[2:47](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=167)** When it comes to the visualizations themselves, you'll notice that there's a lot of information on here.
>
> **[2:53](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=173)** Typically it has the function to create the visualization.
>
> **[2:56](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=176)** For example, this one is how you would create a box plot.
>
> **[2:59](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=179)** And then below that is going to be all the different parameters you can adjust or change for that particular visualization.
>
> **[3:06](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=186)** Most of the time you'll need certain ones in there, such as x.
>
> **[3:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=189)** You'll need to fill that in with some sort of value to create it.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=192)** But other things, such as fill or shape or weight, that will have a default value that you won't have to put in.
>
> **[3:18](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=198)** But if you wish to change it, this is how you'll know what parameters you can change.
>
> **[3:24](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=204)** Below that is the second page, which focuses on dealing with statistical transformations and scaling data when visualizing.
>
> **[3:32](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=212)** There are also some ways you can customize your visualizations with managing coordinate systems, adjusting positions, changing themes, making subplots, dealing with labels and legends, and zooming in and out.
>
> **[3:48](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=228)** Let's head over to RStudio to begin using the ggplot2 package.
>
> **[3:53](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=233)** Let's begin by running the top portion of your code to load in your data using the readxl package.
>
> **[4:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=240)** Like before, you can install it and load in the Tidyverse all at once with the code that is commented out here.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=246)** Or you could do it just for the ggplot2 package.
>
> **[4:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=249)** To do that, use install packages() on the 'ggplot2' package.
>
> **[4:15](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=255)** When you run this again, it should install it, or if it shows up with a popup asking if you wish to update it or not.
>
> **[4:21](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=261)** Again, feel free to click Yes or No.
>
> **[4:22](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=262)** Up to you.
>
> **[4:24](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=264)** Below that, you can load in your ggplot2 package by using the library function and calling in ggplot2.
>
> **[4:31](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=271)** Now you're ready to start visualizing with this package.
>
> **[4:35](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=275)** Let's first make a bar plot for the quantity column.
>
> **[4:39](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=279)** Generally, you will begin your visualization by calling the ggplot function.
>
> **[4:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=284)** Then you will specify your data set, which in this case is sales, and then you will add the function aes to help with the aesthetic mapping of your variable or variables that you are plotting.
>
> **[4:55](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=295)** Let's set your variable to be x and equal it to the column Quantity.
>
> **[5:01](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=301)** Next you will add a plus sign and then the specific graphing function you wish to use.
>
> **[5:07](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=307)** For this one, let's use geom bar.
>
> **[5:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=309)** That way you can create a bar plot from this.
>
> **[5:12](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=312)** There are a variety of parameters you can customize for each graph and for the bar graph.
>
> **[5:17](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=317)** This includes the alpha, color, fill line type, size, and weight.
>
> **[5:22](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=322)** Let's set the color equal to black, and you'll notice when you type in the color for each of these different visualizations, it should show up as the actual color on the text.
>
> **[5:35](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=335)** Next, let's set the fill color to be red.
>
> **[5:40](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=340)** When you run this, your output will show your visualization.
>
> **[5:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=344)** In this case, it should show your bar graph for the quantity column where the bars are outlined in black and filled in with red like you specified.
>
> **[5:51](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=351)** It looks like most of the quantity values range from 1 to 4, and it greatly drops off from there to the higher values.
>
> **[6:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=360)** Next, let's make a density plot for the Order Total column with a filter.
>
> **[6:05](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=365)** When using a filter, your plotting structure will be a little different than it was before.
>
> **[6:10](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=370)** This time, you'll first start off by calling your sales data, set, a pipe operator, and then you'll be using your filter function.
>
> **[6:18](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=378)** For this one, you have your order total and you want it to be less than a thousand.
>
> **[6:25](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=385)** Add another pipe operator and now you can add in your ggplot function with that aes function, and have x equal to Order Total.
>
> **[6:36](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=396)** And then let's use a plus sign to add in your specific plotting function.
>
> **[6:42](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=402)** Let's use the geom_density function to create your density plot.
>
> **[6:46](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=406)** The parameters you can adjust for this function are alpha, color, fill, group, line type, size, and weight.
>
> **[6:55](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=415)** Let's have the color equal to purple.
>
> **[7:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=420)** The line type equal to dotted.
>
> **[7:06](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=426)** And the size equal to two.
>
> **[7:11](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=431)** Your resulting visualization will show your density graph for the Order Total column with a large spike kind of near the beginning, which means that a lot of the orders were kind of on that lower value for the total.
>
> **[7:27](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=447)** And then it kind of tears off from there.
>
> **[7:29](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=449)** And you'll notice it should be that dotted line with a little bit larger chunks for the size of the line, and that it should be that purple color that you specified.
>
> **[7:39](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=459)** Lastly, let's create a boxplot for the price column with a filter.
>
> **[7:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=464)** Call your sales variable again, your pipe operator and the filter function for your price column, and let's have it be for values less than 100.
>
> **[7:54](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=474)** Call your pipe operator again and your ggplot function with aes and have x equal to price.
>
> **[8:03](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=483)** This time add in the geom box plot function to make your box plot.
>
> **[8:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=489)** The parameters you can adjust for this function are lower, middle, upper, y-max, y-min, alpha, color, fill, group, line type, shape, size, and weight.
>
> **[8:24](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=504)** Let's have the color equal to black.
>
> **[8:28](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=508)** The fill equal to blue.
>
> **[8:32](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=512)** The outlier fill.
>
> **[8:35](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=515)** And make sure you have a period between outlier and fill equal to red.
>
> **[8:39](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=519)** The outlier shape equal to 23 and the outlier size equal to five.
>
> **[8:50](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=530)** Your resulting boxplot will show your minimum and maximum values, which the minimum will be on the left.
>
> **[8:56](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=536)** The maximum will be on the right, along with any outlier values, which should be those red diamonds that you specified.
>
> **[9:03](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=543)** And again, in the middle is going to be the interquartile range that is shaded in blue, with the line in the middle being the median.
>
> **[9:11](https://www.linkedin.com/learning/r-tidyverse-applications/plot-one-variable-visualizations-with-ggplot2?u=76281980&t=551)** In the next video I will show you how to visualize with two variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[GitHub]] (4), next (4), [[RStudio]] (1)
> **Analogies:** such as (4), for example (2), similar to (1)
> **Prerequisites:** install (4), you'll need (2), make sure you have (1)
> **CLI Commands:** make (4), find (2)
> **Tools:** github (4)
> **URLs:** [tidyverse.org](https://tidyverse.org) (1), [github.com](https://github.com) (1)
> **Env Vars:** url (1), rgb (1)
> **Code Identifiers:** geom_density (1)

#### Plot two variable visualizations with ggplot2
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=0)** In this video, I will show you how to visualize data with two variables using the ggplot2 package.
>
> **[0:07](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=7)** Begin by running the top portion of your code to load in your packages and sales data set.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=13)** Note the structure of visualizing two variables will be very similar to that of visualizing one variable.
>
> **[0:20](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=20)** Let's begin by creating a point plot for the Price and Order Total columns.
>
> **[0:25](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=25)** Call your ggplot function, your sales data and the AES function.
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=31)** And this time let's have x equal to Price and y equal to Order Total with your backticks.
>
> **[0:40](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=40)** Then you'll add in your function geom_point to create your point plot.
>
> **[0:46](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=46)** The parameters you can adjust for a point plot are alpha, color, fill, shape, size, and stroke.
>
> **[0:54](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=54)** Let's have the color equal to red.
>
> **[0:58](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=58)** The shape is equal to eight, which is going to be a pointed star.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=63)** And finally the size equal to two.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=68)** Your resulting visualization will have your Price data on the x axis and the Order Total data on the y axis.
>
> **[1:17](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=77)** Your point plot looks fairly dense in the bottom left, where it has the lower Order Total and Price values, and it gets more sparse as it goes up from there.
>
> **[1:28](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=88)** Next, let's create a counting plot for the Quantity and Discount columns.
>
> **[1:34](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=94)** Call on your ggplot function again, your sales variable and your aes function.
>
> **[1:40](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=100)** And let's have x equal to quantity and y equal to discount.
>
> **[1:45](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=105)** This time let's add in the geom_count function.
>
> **[1:50](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=110)** The parameters you can adjust for counting point plot are alpha, color, fill, shape, size and stroke.
>
> **[1:59](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=119)** Let's have the alpha equal to 0.7, and this will have the coloring be a little bit more transparent.
>
> **[2:07](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=127)** Let's have the fill of the shapes be green.
>
> **[2:11](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=131)** And the shape equal to 22.
>
> **[2:14](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=134)** This will be a filled in square.
>
> **[2:19](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=139)** Your resulting plot will have quantity on the x axis and discount on the y axis.
>
> **[2:26](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=146)** It will also have a legend to the right showing the size of each square and around how many values that contains.
>
> **[2:34](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=154)** It looks like most of the values have a low quantity with no discount with them.
>
> **[2:40](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=160)** Now you will create an area plot for Price and Quantity, with a filter. Like with one variable, you will want to call the sales variable first, your pipe operator and then the filter function.
>
> **[2:54](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=174)** And let's have price be less than 100.
>
> **[2:57](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=177)** Another pipe operator.
>
> **[3:00](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=180)** And now you can call in your ggplot function.
>
> **[3:03](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=183)** So have aes and x equal to price, y equal to quantity.
>
> **[3:12](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=192)** And then let's add in the geom_area function this time. The parameters you can adjust for an area plot are alpha, color, fill, line type, and size.
>
> **[3:23](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=203)** Let's have the color equal to black.
>
> **[3:27](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=207)** The fill equal to blue.
>
> **[3:31](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=211)** The line type equal to a long dash.
>
> **[3:37](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=217)** And the size equal to 0.5.
>
> **[3:43](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=223)** Your resulting visualization will have price on the x axis and quantity on the y axis.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=231)** Your area of visualization looks like it has multiple spikes in different areas, where there is a high quantity for some of these price points.
>
> **[4:01](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=241)** Let's switch to plotting continuous and discrete variables together.
>
> **[4:06](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=246)** First, note that for these next three visualizations, the figure width and height have been adjusted in the markdown to allow values to not overlap in the visualizations.
>
> **[4:18](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=258)** Let's start off by getting a bar plot for the ProdCategory and Order Total columns.
>
> **[4:23](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=263)** Call on your ggplot function your sales variable and have aes and have x equal two prod category and then y equal to order total.
>
> **[4:37](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=277)** And this time let's add in the geom_call function and the parameters you can adjust for this bar plot are alpha, color, fill, group line type, and size.
>
> **[4:49](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=289)** Let's have the fill color equal to orange.
>
> **[4:54](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=294)** and the size equal to two.
>
> **[4:58](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=298)** Your resulting visualization should look something like this, where it's summed the Order Total for each product category in these different bars.
>
> **[5:08](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=308)** So it looks like solar panels has the highest dollar amount sold total.
>
> **[5:14](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=314)** Next let's make some box plots for the quantity column by the sales region, call on your ggplot function, your sales variable and as with x equal to the sales region column and the y equal to the quantity column.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=334)** And then let's add in the geom box plot function to create your box plot.
>
> **[5:39](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=339)** Note the parameters you can adjust for box plots are the same as mentioned before.
>
> **[5:45](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=345)** Let's have the color equal to black.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=348)** The fill equal to cyan.
>
> **[5:52](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=352)** The outlier dot color equal to red.
>
> **[5:57](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=357)** The outlier dot shape equal to four, which should be an x.
>
> **[6:03](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=363)** And finally the outlier dot size equal to four.
>
> **[6:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=369)** Your result should have nine boxplots by region with their associated quantities.
>
> **[6:16](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=376)** So you notice many of them are fairly similar as far as the quantity sold for each of these regions.
>
> **[6:21](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=381)** It looks like some of them, though have more outliers than others, and that most are around this median value.
>
> **[6:28](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=388)** But it looks like southeast has the median value equal to the lower quartile value as well.
>
> **[6:35](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=395)** Finally, let's visualize two discrete variables.
>
> **[6:41](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=401)** Call on your ggplot function.
>
> **[6:44](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=404)** The sales variable.
>
> **[6:45](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=405)** Your aes function and have x equal to the SalesRegion, and y equal to the ProdCategory.
>
> **[6:54](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=414)** And let's use the geom_count plot for this, and the parameters you can adjust for a discrete count plot are alpha color, fill shape, size, and stroke.
>
> **[7:09](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=429)** Let's have alpha equal to 0.5, the color equal to purple.
>
> **[7:18](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=438)** And finally the stroke equal to two.
>
> **[7:22](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=442)** The stroke being two will increase the line size in your visualization.
>
> **[7:28](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=448)** Your resulting visualization shows a counting plot for sales, region, and product category with how many times each combination occurs in the data set.
>
> **[7:38](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=458)** The legend to the right will help you understand the sizing of the different circles.
>
> **[7:42](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=462)** So generally, the smaller the circle, the less frequently occurs, and the larger the circle, the more frequently it occurs.
>
> **[7:48](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=468)** So it looks like certain ones, such as South Central East with landscape lighting occurs much more frequently than northeast and EV chargers.
>
> **[7:59](https://www.linkedin.com/learning/r-tidyverse-applications/plot-two-variable-visualizations-with-ggplot2?u=76281980&t=479)** In the next video, you will begin a challenge to put all that you've learned in this chapter together to analyze and visualize some product data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), next (4), product (3)
> **Code Identifiers:** geom_count (2), geom_point (1), geom_area (1), geom_call (1)
> **Versions:** 0.5 (2), 0.7 (1)
> **CLI Commands:** make (1)
> **Env Vars:** aes (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)

#### Solution: Perform data analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=5)** Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=6)** Excellent job analyzing data for KinetEco products.
>
> **[0:10](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=10)** If you feel overwhelmed with this challenge, that is completely okay.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=13)** I will explain step by step what should have been filled in and what each line of code is doing.
>
> **[0:18](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=18)** Let's head over to RStudio.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=21)** Begin by running the top portion of your code to load in your Tidyverse libraries and your products data set.
>
> **[0:27](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=27)** After that, you'll be gathering the median and variance of the Price column from products in one tibble output.
>
> **[0:34](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=34)** You can do this by calling on your products variable, using a pipe operator, and using the summarize function to gather these two values.
>
> **[0:44](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=44)** First, let's call the first column median price and you can equal that the median of your Price column.
>
> **[0:53](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=53)** Next, your second column will be VarPrice, and you'll equal that to the variance of your price column.
>
> **[1:03](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=63)** When you run this, you should have two values in two different columns with your new tibble.
>
> **[1:08](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=68)** So your median price should be $58.99.
>
> **[1:11](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=71)** And then your VAR price should be $4,091,193.
>
> **[1:19](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=79)** Next, you'll be combining the group by and the summarized functions on your products tibble.
>
> **[1:26](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=86)** So to do this you can use the products variable, a pipe operator.
>
> **[1:32](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=92)** And let's begin by using the group_by function on two columns.
>
> **[1:36](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=96)** So you'll do this on the target customer column and the product category column.
>
> **[1:43](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=103)** And this one makes sure category is lower cased, and that you have your two different quotation marks for both of these columns.
>
> **[1:51](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=111)** Go ahead and add a pipe operator here, and let's tab to the next line to view this a little easier.
>
> **[1:57](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=117)** Next, you'll be adding in your summarize function to summarize your price column to get the average or the mean and the maximum values from it.
>
> **[2:06](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=126)** Let's begin by creating an average price column and equalling that to the mean of the price column.
>
> **[2:13](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=133)** After that, you can get the maximum price by calling max price as your new column and using the maximum function on your Price column.
>
> **[2:24](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=144)** Finally, add the parameter groups equal to drop, and what this will do is it will remove any potential errors that may show up when it comes to summarizing your data this way.
>
> **[2:38](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=158)** When you run this, you should have a tibble with 16 rows and four columns where everything is summarized by target customer and product category where it has the average or again the mean price and the maximum price for each of these values.
>
> **[2:56](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=176)** After that, you'll mutate the products data set to update the target customer column.
>
> **[3:02](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=182)** So you will be assigning your variable products to products.
>
> **[3:08](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=188)** And let's use a pipe operator and the mutate function.
>
> **[3:13](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=193)** And you'll be using this on Target Customer.
>
> **[3:18](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=198)** And you'll equal this to an if else statement.
>
> **[3:23](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=203)** So in your if else statement you'll also be using the str_detect function to detect if your string Target Customer contains Corporate.
>
> **[3:37](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=217)** And then make sure you go outside that first parentheses.
>
> **[3:40](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=220)** Add another comma.
>
> **[3:42](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=222)** And so if this is the case, if it does detect Corporate let's keep it as Corporate.
>
> **[3:48](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=228)** Otherwise let's change it to personal.
>
> **[3:51](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=231)** What this will do is it will remove the combined Corporate & Personal options.
>
> **[3:56](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=236)** Finally, let's call on the products variable one more time to view the results.
>
> **[4:03](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=243)** Now when you look at target customer, you should only be seeing values of Personal, and Corporate, instead of any of those combined versions that you had before.
>
> **[4:12](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=252)** Lastly, let's create a bar plot using the ggplot2 package for the Price column by Target Customer.
>
> **[4:20](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=260)** You can do this by calling on the products variable using your pipe operator.
>
> **[4:26](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=266)** And then let's begin by filtering the Price column to only show values that are greater than 25.
>
> **[4:32](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=272)** After that, add another pipe operator and look at your ggplot function.
>
> **[4:38](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=278)** Add an aes and then let's have your x equal to Target Customer and then your y equal to Price.
>
> **[4:48](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=288)** Then you'll add a plus sign and then the geom_call function.
>
> **[4:53](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=293)** And this one you will want to add the parameter fill equal to blue.
>
> **[4:59](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=299)** And again this should show up as a blue color for the text.
>
> **[5:02](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=302)** And then you will want the size to equal three.
>
> **[5:05](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=305)** Remember these are the different parameters mentioned inside the actual challenge file that you viewed previously.
>
> **[5:12](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=312)** When you run this, you should get a bar plot where it has these two blue bars for corporate and personal, where again the target customer is the x value with those two options.
>
> **[5:23](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=323)** And then the y value is the price for each of these values.
>
> **[5:29](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=329)** Now you should have a better understanding of how to analyze data for KinetEco.
>
> **[5:34](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=334)** I hope you enjoyed this challenge and it helped to reinforce what you learned in this chapter when it came to analyzing and visualizing data.
>
> **[5:42](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=342)** If you struggled or were not able to get the code to run properly on your own, that is totally okay.
>
> **[5:48](https://www.linkedin.com/learning/r-tidyverse-applications/solution-perform-data-analysis?u=76281980&t=348)** In the next video, I will review the next steps you can take to use these new Tidyverse skills you have learned throughout the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (11), data (6), next (6), product (2), [[RStudio]] (1)
> **Code Identifiers:** group_by (1), str_detect (1), geom_call (1)
> **CLI Commands:** make (1)
> **Env Vars:** var (1)
> **Versions:** 58.99 (1)
> **Cross-References:** in the next (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=0)** Great job.
>
> **[0:01](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=1)** You've reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=3)** Now go take what you've learned and use the power of the R Tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=7)** I encourage you to take the following next steps.
>
> **[0:10](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=10)** Continue improving your R skills.
>
> **[0:13](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=13)** Explore the R Tidyverse and its various functions.
>
> **[0:17](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=17)** Use community resources to guide your R Tidyverse journey.
>
> **[0:21](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=21)** This includes the Tidyverse website, cheat sheets, and GitHub.
>
> **[0:26](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=26)** A clickable list of these resources will be included after this video.
>
> **[0:31](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=31)** Be sure to connect with me on LinkedIn to share your experience with this course.
>
> **[0:35](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=35)** And lastly, check out my other LinkedIn learning courses found on my LinkedIn profile.
>
> **[0:40](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=40)** Again, I'm Megan Silvey.
>
> **[0:42](https://www.linkedin.com/learning/r-tidyverse-applications/next-steps?u=76281980&t=42)** Thank you for joining me and learning how you can use the R tidyverse to enhance your data analysis skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), power (1), next (1), [[GitHub]] (1), data (1)
> **Tools:** github (1)


## Instructor

- [[Megan Silvey]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/R-Tidyverse-Applications-5902139)

## Skills Covered

- R (Programming Language)
- tidyverse

## Path Context

### In [[Advance Your Skills in R]]
← [[Learning the R Tidyverse]] | **6 of 8** | [[Creating Maps with R]] →

## Appears In

- [[Advance Your Skills in R]]

## Related Courses

_Courses sharing skills:_

- [[Learning the R Tidyverse]] — R (Programming Language), tidyverse
- [[Build Advanced Charts in R]] — R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[Complete Your First Project in R]] — R (Programming Language)
- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — R (Programming Language)

---

[↑ Back to top](#)