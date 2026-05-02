---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: build-advanced-charts-in-r
url: "https://www.linkedin.com/learning/build-advanced-charts-in-r"
duration_minutes: 103
duration: 1h 43m
level: Advanced
updated: 8/22/2023
learners: 1617
skills:
  - R (Programming Language)
  - Data Visualization
exercise_files: true
github: "https://github.com/LinkedInLearning/build-advanced-charts-in-r-4405613"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHDgvGBnVrA3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692390095857?e=2147483647&amp;v=beta&amp;t=O4GASJztQQ9RHPg7gemZ9An0qCC32UK3t4EQVJAXzOc"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in R]]'
prev_courses:
  - '[[Creating Maps with R]]'
path_nav: '[{"path":"Advance Your Skills in R","position":8,"total":8,"prev":"Creating Maps with R","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/data-visualization
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Build%20Advanced%20Charts%20in%20R.md)

![Build Advanced Charts in R](https://media.licdn.com/dms/image/v2/D560DAQHDgvGBnVrA3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692390095857?e=2147483647&amp;v=beta&amp;t=O4GASJztQQ9RHPg7gemZ9An0qCC32UK3t4EQVJAXzOc)

# Build Advanced Charts in R

> If you’re looking to improve your data visualization skills, this course was designed for you. Join instructor Rita Giordano to explore the basics of building advanced charts in R such as lollipop plots, sparklines, dot charts, slope charts, chord diagrams, and more.Learn how to create a theme function and combine multiple plots for more effective storytelling with data. The course will also cover

> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r) | 1h 43m | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building advanced charts](#building-advanced-charts)
  - [What you should know](#what-you-should-know)
  - [Using exercise files](#using-exercise-files)
- [**1. Explore the Data**](#1-explore-the-data) (2 videos)
  - [Load and inspect your data](#load-and-inspect-your-data)
  - [Exploratory charts](#exploratory-charts)
- [**2. Chords Diagrams**](#2-chords-diagrams) (6 videos)
  - [Introduction to {circlize} package](#introduction-to-circlize-package)
  - [Prepare your data](#prepare-your-data)
  - [Create a chord diagram](#create-a-chord-diagram)
  - [Customize your chord diagram](#customize-your-chord-diagram)
  - [Customization options](#customization-options)
  - [Create a function](#create-a-function)
- [**3. Other Advanced Charts**](#3-other-advanced-charts) (4 videos)
  - [Create advanced charts](#create-advanced-charts)
  - [Create a sparkline chart](#create-a-sparkline-chart)
  - [Create a lollipop plot](#create-a-lollipop-plot)
  - [Create a slope graph](#create-a-slope-graph)
- [**4. Accessibility and Annotations**](#4-accessibility-and-annotations) (4 videos)
  - [Accessible color palettes](#accessible-color-palettes)
  - [Add charts on the same figure](#add-charts-on-the-same-figure)
  - [Add annotations and backgrounds](#add-annotations-and-backgrounds)
  - [Further annotation](#further-annotation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Building advanced charts
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=0)** - [Rita] R is very powerful to produce data visualization.
>
> **[0:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=4)** With it, you can create a different kind of chart and showcase your data.
>
> **[0:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=9)** In this course, you will learn how to create a chart diagram and how to design alternative charts to bar chart and line chart.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=18)** At the end of the course, you will be able to create simple infographics, adding a different chart together, and also, you will learn how to add the notations.
>
> **[0:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=29)** Hi, I'm Rita Giordano, a data visualization consultant and R practitioner.
>
> **[0:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/building-advanced-charts?u=76281980&t=35)** Join me to learn now to create advanced chart with R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Infographics]] (1)
> **Speakers:** - [rita] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=0)** - [Instructor] This course will help you to create advanced chart with R.
>
> **[0:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=3)** To follow along in this course, you need to know R quite well, especially the function from the base library and how to create a function yourself.
>
> **[0:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=13)** Also, good knowledge of the RStudio environment are important.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=18)** For example, how to create a script, how to open a script, and how to run the code.
>
> **[0:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=26)** It's also important to know how to install packages, that you can do it directly in RStudio using the Install Package manager here.
>
> **[0:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=34)** Or you can do it doing the function install.packages with the name of the package that you need to install.
>
> **[0:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=42)** It is significant to have some basic knowledge of tidyverse and a good command of ggplot2 for this course.
>
> **[0:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=50)** Most of the library that we will use are based on ggplot2.
>
> **[0:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=54)** So, if you need a refresher on ggplot2, you can go on the library of LinkedIn Learning and here, you will find several course where you can refresh your knowledge.
>
> **[1:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=66)** And also, if you need something about Tidyverse, you can also explore the LinkedIn Learning library.
>
> **[1:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=73)** Before starting the course, please install the package that we will use.
>
> **[1:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=78)** These are circlize, cowplot, tidyverse, ggrepel, and ggsci, ggpp, RColorBrewer, colorblindr, ggpubr, and recolorize.
>
> **[1:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/what-you-should-know?u=76281980&t=92)** Install them before moving on and start to create our charts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2), [[LinkedIn]] (2)
> **Prerequisites:** install (6)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=0)** - [Instructor] All the codes I will use in this course are stored on a GitHub repository.
>
> **[0:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=6)** The codes are separated into branches for each video.
>
> **[0:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=11)** To access the code for the corresponding video, first, select the branch.
>
> **[0:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=16)** You'll notice that if we select 01_01, there are two branches, one ending with B and one ending with E.
>
> **[0:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=25)** Well, we have that B stand for the beginning so we will have the script at the beginning of the video, and E stand for end.
>
> **[0:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=36)** At the beginning of each video, you will see the name of the branch.
>
> **[0:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=40)** So if you are seeing the video 01_01, you will see this name.
>
> **[0:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=45)** To download the code on your machine, simply go on Code, then click on Download ZIP, and then proceed to the download into the folder on your local machine.
>
> **[0:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=57)** Another way is to use Rstudio.
>
> **[1:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=60)** So we can copy this, the link, and if we go in RStudio, we can create here a new project, and we will click on Version Control, we select Git, and here we paste the name of the repository, we select our folder and we create our repository.
>
> **[1:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/using-exercise-files?u=76281980&t=84)** Now we are ready to start our course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2), [[GitHub]] (1), [[Version Control]] (1), [[Git]] (1)
> **UI Navigation:** click on (2), select the (1)
> **CLI Commands:** git (1)
> **Env Vars:** zip (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 1. Explore the Data

[↑ Back to Table of Contents](#table-of-contents)

#### Load and inspect your data
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=0)** - [Instructor] Exploring data represent a fundamental part of every data visualization task.
>
> **[0:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=5)** To help you with this course, I create a data set containing information about renewable energy across the world.
>
> **[0:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=14)** The data is already clean and the source is our word in data.
>
> **[0:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=19)** Let's start to explore our data.
>
> **[0:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=23)** To load the dataset, I use the library which include either library we'll use later, we'll read now the data using the function read_csv.
>
> **[0:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=39)** We give the path our data with the name of the data set and I add show_col_types equal FALSE.
>
> **[0:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=52)** This will avoid printing on the console, the column type which we'll see later.
>
> **[0:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=58)** We can explore and check the dataset name when containing all the variable.
>
> **[1:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=65)** The first variable name territory includes the country and continents.
>
> **[1:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=70)** The next variable country code which is an A for continents.
>
> **[1:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=75)** If we scroll down, we see for Algeria that we have a country code.
>
> **[1:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=82)** After we have type, which indicate whether a target is a country or continent here that span from 1990 to 2021.
>
> **[1:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=97)** There is share of electricity that show the percentage of primary energy from renewable sources.
>
> **[1:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=104)** And here we have the renewable sources, the last four variables, and we have geo_biomass_other which indicate geothermal, biomass and other energies.
>
> **[1:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=118)** Solar generation, which is solar energy, wind generation, wind energy, hydro generation, which is hydropower.
>
> **[2:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=128)** And this source of energy are in TWh.
>
> **[2:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=133)** Another way to check the name of the column is to use the function names(ren), and when we run, we see in the console the name of our column, targeter type and so on.
>
> **[2:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=150)** We can also now check the column using the function spec(ren).
>
> **[2:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=158)** And we see here that we have free column that are character and the other columns that are double numerical.
>
> **[2:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=171)** To have a quick statistics, we use the function summary and we type (ren) but this time we saw that the three variable are character.
>
> **[3:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=186)** So I only type from column 4 to column 9 because I wanted the summary only of the variables that are numeric.
>
> **[3:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=196)** So I run, and I can see here in the console, the minimum,
>
> **[3:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=205)** the maximum first quantile, third quantile, median and main for all my numerical variable.
>
> **[3:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=213)** We can observe that the share of renewable energy use for electricity is 100.
>
> **[3:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=224)** It'll be interesting to check which countries has this share.
>
> **[3:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=229)** Looking at other variables, we see that hydropower generation as a maximum of 1980 and this could be another further exploration to see which are the countries that use the most of hydropower.
>
> **[4:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/load-and-inspect-your-data?u=76281980&t=246)** Now that we understand our dataset, in our next video, let's make the chart using this dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (2), [[Microsoft Word|Word]] (1), [[Statistics]] (1)
> **Code Identifiers:** read_csv (1), show_col_types (1), geo_biomass_other (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** false (1)
> **Cross-References:** next video (1)
> **Documentation:** spec (1)
> **UI Navigation:** scroll down (1)

#### Exploratory charts
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=0)** - [Instructor] It's time to check our data from a visual point of view.
>
> **[0:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=4)** In this lesson, we will create some charts to get a better idea of our data.
>
> **[0:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=9)** Throughout the course, we will load the same library tidyverse and we will use the data on renewable energies.
>
> **[0:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=19)** Let's start exploring the shell primary energy.
>
> **[0:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=22)** We can create a histogram and to do this, we type ren, our dataset and we filter between the year in 2020:2021.
>
> **[0:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=44)** We add the function ggplot to create the base for our chart and we use the function geom_histogram and our variable, share_electricity.
>
> **[1:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=68)** I use a binwidth of one that is quite low but I want to check the peak.
>
> **[1:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=77)** So to do this, I run here my function and I can see that there are some, a big peak at zero and there is a peak of 100.
>
> **[1:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=89)** So this means that there are some countries that use more than 90% of their renewable energy for electricity.
>
> **[1:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=99)** So we can try to see which are this country.
>
> **[1:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=103)** A way to compare different categorical variable is with geom_freqpoly, and at this time so we will copy this part here.
>
> **[1:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=114)** So here now we add the function geom_freqpoly and we add our variable, share_electricity and the colour = Continent.
>
> **[2:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=135)** Here in this chart we can see that the peak around 100 is Europe and the peak around zero is Asia.
>
> **[2:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=146)** Now we can check which of this country that use more than 90% of energy since the continent is Europe.
>
> **[2:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=155)** I want to draw for each country a line chart and to see the comparison between these two.
>
> **[2:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=162)** So here I type Continent == "Europe"
>
> **[2:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=170)** and the share_electricity greater than 90%.
>
> **[2:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=179)** And now to create our line charts, I first use ggplot and I define my X and Y variable.
>
> **[3:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=190)** So year, share_electricity and colour = territory.
>
> **[3:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=202)** As I said before, I can see these countries and I add geom_line, we want and now we can see which are these countries in Europe that count for more than 90% of energy that are Iceland and Norway.
>
> **[3:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=221)** As you can see, exploring data visually gives you a better understanding of the data.
>
> **[3:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=227)** You want to think about how to best showcase your data.
>
> **[3:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=230)** For example, you could create several chart to display the data from Europe or chart diagram to display the share of different source of energy for selected countries.
>
> **[4:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=241)** We have a great number of possibilities and we'll start to think about them in the next lesson.
>
> **[4:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=248)** Now it's your turn.
>
> **[4:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=250)** I invite you to further investigate your data.
>
> **[4:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=253)** For example, you can choose a different threshold for the share of primary energy.
>
> **[4:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=257)** You could focus your attention on your country or your continent.
>
> **[4:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/exploratory-charts?u=76281980&t=262)** There are many possibilities that you can consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), next (1)
> **Code Identifiers:** share_electricity (4), geom_freqpoly (2), geom_histogram (1), geom_line (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (2)
> **Ports:** :2021 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 2. Chords Diagrams

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to {circlize} package
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=0)** - [Instructor] In this chapter we will learn how to create a circular visualization with the library circlize.
>
> **[0:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=7)** The goal is to create a chart diagram with the data we explored to show relationship between different element.
>
> **[0:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=15)** One advantage of circlize is that it's very customizable.
>
> **[0:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=19)** When we talk about the circular diagram we have that circlize make a transformation between the Cartesian coordinate system of the data to polar coordinate.
>
> **[0:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=30)** Last, circlize transform into canvas coordinate, and this goes for the x and y-axis from minus one to one and minus one to one.
>
> **[0:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=43)** Another important feature to understand before building our chart diagram is tracks, sector, and cell.
>
> **[0:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=51)** This space between the two circle represent the track.
>
> **[0:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=56)** A sector is a space between two radii.
>
> **[1:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=60)** And the intersection between the sectors and the track is the cell.
>
> **[1:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=65)** And the cell has it's own C coordinate system x and y.
>
> **[1:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=71)** Now we pass in the script.
>
> **[1:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=73)** We first load the library circlize.
>
> **[1:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=79)** And now here we define some sectors.
>
> **[1:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=83)** Here you see I take a vector, and I put inside some name of some countries.
>
> **[1:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=90)** And this is to show the example how to build the circular diagram, so I want the sector.
>
> **[1:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=95)** And first of all, I need to initialize my layout.
>
> **[1:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=100)** To initialize my layout I use the function circos.initialize.
>
> **[1:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=107)** And I give the sectors that we already define and also the xlim that in this case I put to equal to the year range from 2000 to 2021.
>
> **[2:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=124)** The xlim is the range on the x-axis inside the cell, as we saw in the previous slide.
>
> **[2:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=133)** And when we run we see that we initialize our layout that we see an empty plot.
>
> **[2:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=140)** Now that we have this empty canvas we can, to create the plotting region we use the function circos.track.
>
> **[2:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=154)** And I define again the sectors.
>
> **[2:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=158)** And this time I give it ylim.
>
> **[2:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=162)** The ylim is the range on the y-axis, and that is equal to 15 and 100 because I want to span the value between 15 and 100.
>
> **[2:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=177)** This is sort of a simulation of the data that we saw in the previous chapter, but of course are not the real data.
>
> **[3:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=186)** Now, we can use the argument panel.fun, and when we use the parameter panel.fun I'll pass it to create the graphics for each cell.
>
> **[3:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=200)** In this case we want to add the sector name and the axis on each cell in order that we can understand how this works.
>
> **[3:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=208)** To do this I create a function, x, y.
>
> **[3:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=214)** And inside this function I add the circos.text
>
> **[3:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=223)** because here I want to define the parameter for the text.
>
> **[3:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=229)** So, I start with CELL_META that here I want to take all the parameter of the cell, and I type xcenter.
>
> **[4:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=240)** This is because I want that my text is on the center of the cell.
>
> **[4:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=248)** After I type CELL_META, cell.ylim plus mm_y.
>
> **[4:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=262)** And inside we type six.
>
> **[4:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=265)** Here we define the y position of the text, and we use this cell.ylim that create the y position of the extended cell padding.
>
> **[4:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=277)** And the mm_y, it converts the unit in the y direction in millimeters.
>
> **[4:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=284)** In fact, mm stand for millimeter.
>
> **[4:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=287)** And I define the last parameter for myself for the text.
>
> **[4:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=293)** That is sector.index.
>
> **[4:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=298)** And in this case I want that the label will stand outside but not to attach to the text.
>
> **[5:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=308)** And I also put the circos.axis, and I give the dimension labels.cex.
>
> **[5:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=319)** So, that is equal to 0.6.
>
> **[5:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=325)** Now, if I run I can see my circular diagram.
>
> **[5:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=332)** In fact, what we can see that the x-axis, in fact, we have the range from 2000 to 2021.
>
> **[5:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=338)** We have the text as I define in the code that is at the center of the cell.
>
> **[5:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=343)** And I also define here is the dimension of the text on the x-axis.
>
> **[5:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=353)** Now you know how to build the circular diagrams and add the labels for each sector.
>
> **[5:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=359)** If you want to deep dive with all parameter of circlize I invite you to go in the package, click on circlize, go in user guide, and click here where there is circlize vignette.
>
> **[6:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/introduction-to-circlize-package?u=76281980&t=375)** Here you have the website of circlize where you can deep dive and discover more function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), feature (1), [[Simulation]] (1)
> **Env Vars:** cell_meta (2)
> **Cross-References:** as we saw (1), previous chapter (1)
> **CLI Commands:** make (1)
> **Versions:** 0.6 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Prepare your data
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=0)** - [Instructor] Now let's start seeing how to shape the data to create a chart diagram.
>
> **[0:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=5)** I want to show the relationship between the countries and the different source of renewable energy.
>
> **[0:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=11)** We load the library tidyverse and we read the data.
>
> **[0:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=15)** To create the chart diagram, I want to look at the data for 2021 and they want to remove the countries that have a share of energy equal to zero.
>
> **[0:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=26)** So I run this data and score zero where I selected this data.
>
> **[0:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=32)** Now we can run a summary statistics for this dataset
>
> **[0:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=42)** and we can see that in 2021, average share of electricity is 35%.
>
> **[0:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=50)** So I want to select all the data where the countries have a share of renewable energy per electricity, bigger than 35%.
>
> **[1:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=61)** That is the mean value in 2021.
>
> **[1:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=65)** So we create a new data set that we call data_35.
>
> **[1:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=72)** And I use data_0
>
> **[1:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=81)** and I filter because at this time, as I said, I want the share is greater than 35%.
>
> **[1:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=96)** So now I have my new data set, but now this data are not still ready to be converted in the matrix.
>
> **[1:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=106)** So I need to make some good shape of this dataset.
>
> **[1:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=110)** I will call this dataset renewable_wider and I will call the data, let's call 35.
>
> **[2:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=123)** So I use select because I want to remove all the variable data I will not need to create the chart diagram.
>
> **[2:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=132)** And these are country_code, year, continent.
>
> **[2:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=152)** Now I want to remove all the punctuation in the name of the countries.
>
> **[2:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=159)** So I use mutate territory equal, I use str_remove.
>
> **[2:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=169)** And from territory, I want to be sure that there is no punctuation in the name because after when we will print our label, I don't want that.
>
> **[3:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=185)** There will be, for example, "new.zealand".
>
> **[3:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=189)** I wanted that it will be New Zealand without the dot.
>
> **[3:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=192)** So to avoid this here, I put punct and I now
>
> **[3:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=201)** rename some variable because if you see here, we have long name for the variable that are for the renewable energy.
>
> **[3:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=212)** So in order to avoid to have this long name, I will rename.
>
> **[3:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=217)** So I will call other equal
>
> **[3:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=234)** solar for solar_generation, wind for wind generation
>
> **[4:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=256)** and hydro for hydro generation.
>
> **[4:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=269)** So in this case, I will not have the long name for the label.
>
> **[4:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=275)** And now what I want is in software I have transformed to a matrix.
>
> **[4:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=280)** I want that the territory will be my row names.
>
> **[4:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=284)** Now I use the function column_to_rownames to transform the territory in row name so that we can have that our country as row names.
>
> **[5:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=301)** And I also add rownames_to_column.
>
> **[5:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=305)** Now I will do some trick to be able to have our data in the format that can be easily converted to a matrix.
>
> **[5:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=315)** And I also will use pivot_longer minus rowname and pivot_wider.
>
> **[5:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=332)** Well, I will use names_from rowname and values_from value.
>
> **[5:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=345)** And when I run, now I have my data set that I have here, the name of the renewable energy and the country that I put first as a rownames.
>
> **[6:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=362)** I after put as a column name.
>
> **[6:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=364)** So, and in this case during this tweak, using pivot_longer and pivot_wider, I'm sure that my data are the format that are suitable for matrix.
>
> **[6:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=377)** In this lesson, we filter our data to only have 2021 countries that have a share of electricity from renewable energy greater than 35%.
>
> **[6:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=389)** And we put our data in a shape that will be easily to convert to a matrix.
>
> **[6:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/prepare-your-data?u=76281980&t=395)** Now we're ready to create the chart diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Statistics]] (1)
> **Code Identifiers:** pivot_longer (2), pivot_wider (2), renewable_wider (1), country_code (1), str_remove (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create a chord diagram
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=0)** - [Instructor] The third diagram show relationship between element.
>
> **[0:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=3)** For example, if the relationship between C and D is eight we represented with a ribbon or with eight.
>
> **[0:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=11)** Now let's pass to our studio and create our first chard diagram.
>
> **[0:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=17)** We run the library tidyverse and circlize.
>
> **[0:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=20)** And, using the data that we create previously, we create the matrix.
>
> **[0:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=26)** Now we can create a very basic chard diagram using the function chard diagram from circlize.
>
> **[0:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=34)** And, in this case, we only add the name of the matrix and we run.
>
> **[0:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=41)** So, we create the image and we see our chart diagram where we have the source of energy and the country name.
>
> **[0:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=52)** But we need to further customize this chard diagram because after Canada is not possible to distinguish the country name, we can get the information about this diagram using the function circos, dot, info.
>
> **[1:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=68)** And, here we see that how many tracks we have and the name of each sectors.
>
> **[1:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=76)** Now before to start to customize our chard diagram, we need first to clear the environment.
>
> **[1:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=84)** And this is a very important part because we have to be sure that no other circos are loaded in our environment.
>
> **[1:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=92)** Now I want to be sure that I have a circos that start a minus 90 degree.
>
> **[1:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=99)** So, I use the function circos, dot, par and I add the parameter start degree that is equal minus 90 and here in my chard diagram, I add the matrix but I want also to increase the gap between the tracks.
>
> **[2:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=120)** And to do this, I type big gap equal, 70.
>
> **[2:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=125)** If now we run, we can see already how our chard diagram change and we see that between the track, now we have a big gap.
>
> **[2:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=135)** We clear the environment and we start to add for the customization.
>
> **[2:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=143)** So, now I want to also to add a gap between the sectors.
>
> **[2:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=149)** So, and to do this, I go here.
>
> **[2:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=153)** So, first I add here again, minus 90, my matrix, my big gap equal, 70 and we add a small gap equal, three.
>
> **[2:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=172)** I add now annotation track equal, grid.
>
> **[3:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=182)** In order that it will show the tracks and the sector without the name.
>
> **[3:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=187)** Because I want to add the label later using the function circos, dot, track that we saw before.
>
> **[3:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=195)** So, now we add an annotation track height here
>
> **[3:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=203)** that is equal to 0.03 and 0.01.
>
> **[3:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=211)** And, this reduce the height of the annotation track.
>
> **[3:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=216)** Let's now create some pre-allocated tracks.
>
> **[3:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=221)** Here I create a list to customize the chard diagram.
>
> **[3:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=228)** And for the track height,
>
> **[3:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=238)** I use the max of the width of the string given by the matrix name, row and column.
>
> **[4:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=244)** So, how we will write this so the max of the strw, width of unlist, dimnames of the matrix.
>
> **[4:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=268)** And we'll run again.
>
> **[4:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=272)** And we see that now we have our chard diagram without any label.
>
> **[4:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=278)** Now to create the label, we will use the function circus, dot, track that we already saw in the previous lesson.
>
> **[4:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=290)** And here what we give the track index equal one.
>
> **[5:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=300)** And we start to use again the panel, dot, fun that will use again, the function.
>
> **[5:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=312)** And here start to add the parameter for the label.
>
> **[5:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=316)** Circos, dot, text that here we add cell, meta, sector, dot, index.
>
> **[5:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=332)** And now we will add the phasing in order that we can read our label clockwise facing equal clockwise.
>
> **[5:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=348)** And to make sure that the label on the left fit out the human eye with we can add the nice facing also.
>
> **[5:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=358)** Nice facing equal true.
>
> **[6:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=363)** And last, we add an offset with the parameter adj that is equal to zero, zero, dot, five.
>
> **[6:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=380)** This is to avoid that the text overlap the track.
>
> **[6:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=386)** So now that we add all the parameter inside the functional panel fun, we add the last parameter here.
>
> **[6:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=396)** That is that bg, dot, border is equal to NA.
>
> **[6:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=404)** This is important because this parameter doesn't show the border of the label.
>
> **[6:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=409)** So, now we can run and we can see that now our label in a way that we can read and we can distinguish each one.
>
> **[7:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=420)** In this video, you learn how to create your first chard diagram and how to customize the labels.
>
> **[7:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-chord-diagram?u=76281980&t=427)** Now join me in the next video as I show you how to customize the color.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), functional (1), next (1)
> **Versions:** 0.03 (1), 0.01 (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Customize your chord diagram
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=0)** - [Instructor] In the last video, we learned how to create a chord diagram.
>
> **[0:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=4)** Now, we will find out how to change the colors of the title and include footnotes.
>
> **[0:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=11)** First, we will change the default color of our chord diagram, and we will use five different colors.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=18)** Here we can see the five different color that I chose.
>
> **[0:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=22)** Well, we will have four color for the source of energy, and the blue, only one color for the countries.
>
> **[0:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=31)** Now we will start to load our library, the data, and the palette for the chord diagram.
>
> **[0:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=38)** Now what we need to do is to create a structure in order that we can assign to each color the name of the corresponding renewable energy, and to do this, I create a variable source_color,
>
> **[0:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=59)** and I use the function structure(source_palette), and I add names wrote names of the row names of the matrix,
>
> **[1:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=76)** and I run and I create my source color here.
>
> **[1:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=79)** Now, I create also a country color,
>
> **[1:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=87)** and I do the same thing.
>
> **[1:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=88)** So I use again the function structure, but I now replicate my color, this one,
>
> **[1:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=100)** where there is here the hex code.
>
> **[1:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=104)** So we copy the hex code from here, 8B4,
>
> **[1:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=113)** and we define that the length of our replication is the col names of the matrix.
>
> **[2:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=124)** Now, we give here again us names that I want the col names in order that I have all the countries defined here.
>
> **[2:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=140)** And last, I create a color grid for the chord diagram.
>
> **[2:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=147)** Now that we have defined the colors, we define our last variable that is called col_grid, and this variable contains the two-color vector that we defined before, and then we create this variable to pass later to circlize.
>
> **[2:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=168)** So in this variable, we add the source color and the country color.
>
> **[2:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=178)** We run, and we can inspect col-grid and see that now, for each of our variable, we have a color assigned.
>
> **[3:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=191)** So renewable energies have their color, and our country that are here, they have the same color.
>
> **[3:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=199)** Now, we have to pass this function here after the small gap, and we use the parameter grid.col equal to our variable col_grid.
>
> **[3:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=220)** And for the rest, we don't need to add any other variable, because this is the same code of before.
>
> **[3:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=229)** So we run.
>
> **[3:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=236)** And here, we obtain our chord diagram, where now the colors are the one that we define at the beginning, and then for the country, we have only one color.
>
> **[4:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=247)** This is more easy to recognize for the reader.
>
> **[4:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=253)** Now that we changed the color of our chord diagram, we can add title and footnotes, and we will use the function title and text from base R.
>
> **[4:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=264)** So here we go.
>
> **[4:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=267)** At the title, we will use the function title, and here, I will give the title "Renewable source of energy per countries".
>
> **[4:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=288)** And with cex, I can define the size that I give 10.
>
> **[4:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=296)** And if I run, we can see that now, on the plot window, that we have our title, and we can add the footnote using text, minus 0.6 and minus one.
>
> **[5:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=316)** So here, I'm giving the coordinate of my footnote.
>
> **[5:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=321)** This is this important, because when you use the text function, you have to tell the function in which part of the canvas you want to add the text.
>
> **[5:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=331)** So now that we set up the coordinate where we want to that the text will go on the canvas or the chart, we add our footnote.
>
> **[5:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=339)** And the footnote that I want to add is for this variable other, because when people will look at our chart they can ask, "What is other?"
>
> **[5:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=347)** We can add this, "'other' include geothermal, biomass, and other sources."
>
> **[6:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=370)** So in this case, we run, and now here we have the footnote, "'other' include geothermal, biomass, and other sources."
>
> **[6:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=384)** We can add a second footnote that will be for the source, and the same things we use for the function text.
>
> **[6:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=394)** We give the coordinate, 0.8, minus one, and the position equal four, because I want that this footnote is on the right corner.
>
> **[6:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=410)** If we remember the canvas, we remember that on the X, we have that the value goes from minus one to one, and for the Y axis, from minus one to one.
>
> **[7:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=425)** And here, I add my source, "Our World in Data".
>
> **[7:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=440)** I run again, and I have also my source, that is, "Our World in Data".
>
> **[7:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=448)** So in this case, we learn how to add the title and two footnote on the same canvas, one on the left and the other on the right.
>
> **[7:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=461)** As last, we run circos.clear.
>
> **[7:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=465)** Now you should be able to change the color of sectors at the title and the footnotes.
>
> **[7:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/customize-your-chord-diagram?u=76281980&t=471)** Now, I invite you to take some time to explore different colors, to create your own palette, and to try to be confident with circlized canvas coordinate in order to know where to put the text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** col_grid (2), source_color (1), source_palette (1)
> **Versions:** 0.6 (1), 0.8 (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Customization options
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=0)** - [Instructor] There are several ways to customize the chart diagram.
>
> **[0:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=3)** In this video, I want to show you one of them and the use of highlights and how to label them.
>
> **[0:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=10)** So first we run our script and that is the same that we create in the last lesson.
>
> **[0:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=20)** And here we will have our chart diagram.
>
> **[0:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=24)** Now the data are ordered by continent.
>
> **[0:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=29)** In fact, if you see here at the country we have Sri Lanka that is from Asia after we have Austria from Europe and so on.
>
> **[0:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=39)** So now we'll define the variable continents because I wanted to show you how to create a box that surround the countries for each continent and also that surround the renewable energy here.
>
> **[0:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=56)** So first of all, we will create the variables, continents.
>
> **[1:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=61)** So we start with Asia and we use the function colnames,
>
> **[1:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=69)** the matrix and we want from 1:3.
>
> **[1:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=75)** We have Europe colnames (matr).
>
> **[1:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=83)** And we want the column from 4:23.
>
> **[1:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=90)** North America, colnames (matr) 24, here.
>
> **[1:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=106)** Oceania colnames matrix 25
>
> **[1:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=119)** and the last one, South America, colnames (matr) 26:31.
>
> **[2:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=137)** Now we define our continent.
>
> **[2:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=139)** What we have to do now is to create the highlights for the sector.
>
> **[2:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=144)** We'll use the function highlight.sector.
>
> **[2:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=149)** And here we have to give first the name of the sector that we want to highlight.
>
> **[2:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=155)** And in this case I will start with source of energy.
>
> **[2:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=160)** So I will create a vector and here I will add hydro, wind, solar, other.
>
> **[2:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=177)** Col, that is the color for the highlight equal NA, because I don't want to give any color, but I want to give a border that would be grey95, a light color.
>
> **[3:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=192)** Now, and here we give the lwd.
>
> **[3:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=195)** That is the width of the the border that we give = 2.
>
> **[3:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=201)** Now we give the perimeter for the text because we want to add the label.
>
> **[3:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=205)** So we'll add the text equal source of renewable slash n
>
> **[3:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=214)** so that we can go to the other line, energy.
>
> **[3:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=220)** We will use our facing equal clockwise, niceFacing
>
> **[3:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=234)** as we saw when we build our two diagram equal to.
>
> **[3:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=239)** And we'll add a text adjustment.
>
> **[4:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=245)** So to do this we use the perimeter text.vjust that will fix the vertical adjustment equal in this case 18 millimeters.
>
> **[4:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=257)** And last we adjusted the size of the text with the parameter cex equal 1.2.
>
> **[4:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=266)** And now if I run, I can see already my first sector here with the label.
>
> **[4:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=274)** Now we have to add all other sector here.
>
> **[4:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=279)** So to do this, since we will use approximately, the same parameter for the our highlight sector function, we can copy here and change the name of the sector because now we need Asia, col, border and lwd will remain the same.
>
> **[4:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=297)** The text here, we will put Asia facing clockwise, text vertical adjustment 80 millimeters and cex equal 1.2.
>
> **[5:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=312)** We have to leave it like this.
>
> **[5:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=313)** But now I have to add a new parameter because here the highlighted sector, can overlap between them.
>
> **[5:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=324)** So in order to not overlap, I will add the variable padding and I'll give the dimension.
>
> **[5:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=333)** So in this case, I'm sure that when I will run my highlights that the two border will not overlap each other.
>
> **[5:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=343)** And for Asia I give this value 0.01, 0.15, 0, 0, 0.1.
>
> **[6:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=360)** And here we fix the typo and we go.
>
> **[6:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=366)** And here we miss the comma.
>
> **[6:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=369)** So be always careful when you see the X means that you miss something.
>
> **[6:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=373)** So, and you immediately know where there was the missing or the typo.
>
> **[6:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=378)** So we come back again.
>
> **[6:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=379)** Now we have to add the other continent.
>
> **[6:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=382)** So I copy and paste again this one because this is what I need now and I start with Europe.
>
> **[6:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=391)** So here in the padding we have to change some parameter.
>
> **[6:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=395)** For example, this will be became 0.02.
>
> **[6:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=401)** This will stay 0 and this will stay 0.01.
>
> **[6:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=406)** And here we change the label with Europe and we increase slightly the vertical adjustment to 20.
>
> **[6:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=417)** Now we do the same things for the other continents.
>
> **[7:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=423)** So here we add North America and we go again to check the padding.
>
> **[7:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=431)** That will will reduce to 0, 0.01, 0 and 0.
>
> **[7:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=443)** Now the text is North America
>
> **[7:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=451)** and the vertical adjustment, we will increase to 22.
>
> **[7:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=458)** And now we add the Oceania here and then we change again the padding of Oceania.
>
> **[7:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=466)** So we will leave the first value will be this.
>
> **[7:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=470)** The second value we change to 1, we leave here 0 and we change here to 1.5.
>
> **[8:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=482)** And last we add South America.
>
> **[8:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=490)** And again we go to change the padding.
>
> **[8:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=493)** So for South America we leave 0.01.
>
> **[8:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=497)** This will change to 0.01, this will leave to 0.
>
> **[8:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=501)** And this we will change to 0.04.
>
> **[8:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=506)** We change the label to South America and we go to see the vertical adjustment.
>
> **[8:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=514)** We reduce slightly to 80 millimeters and we check if we forgot here, for example, the text, we forgot to change it to Oceania.
>
> **[8:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=525)** When we do copy and paste, it's easy but always we have to check that we don't forget something.
>
> **[8:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=532)** So now that we create all the sector, if we run, we can see how the sector are showing.
>
> **[9:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=546)** Here we see better our chart.
>
> **[9:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=550)** Now we see that all the border for the continent separate the countries.
>
> **[9:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=555)** Now that you saw how to add the highlights on the chart diagram, I invite you to customize your chart diagram.
>
> **[9:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=563)** Now it's your turn.
>
> **[9:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=565)** Try to highlight only some countries, for example here or try to change the color of the border or try to see if you can reduce the highlights as well.
>
> **[9:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/customization-options?u=76281980&t=578)** Then think about how you can improve the image that we already created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Versions:** 0.01 (5), 1.2 (2), 0.15 (1), 0.1 (1), 0.02 (1)
> **UI Navigation:** go to (3)
> **Analogies:** for example (3)
> **Ports:** :23 (1), :31 (1)
> **Cross-References:** in the last (1), as we saw (1)
> **Code Identifiers:** nicefacing (1)
> **Best Practices:** don't forget (1)

#### Create a function
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=0)** - [Instructor] In the previous videos we explored how to create the chart diagram.
>
> **[0:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=4)** Now in this video I want to show you how to create your function that will allow you to recreate several chart diagram, avoiding copy and paste this code from line 27 to line 52.
>
> **[0:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=22)** To do this, I create for you an empty file that is named circos_function_b.R that is in the repository.
>
> **[0:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=32)** And here we will create our function circos_function, function and we give the parameter, the matrix, the col_grid for the colors big_gap equals 70 and small_gap equal 3.
>
> **[0:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=57)** Big gap, small gap. I will leave the default to value.
>
> **[1:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=61)** But what does it mean that if we don't give these parameters the function, we'll use the value 70 and 3.
>
> **[1:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=70)** If we give other parameters, it will use the new one.
>
> **[1:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=76)** Now we come back to our script and we go to copy from line 26 to line 51 and we paste here.
>
> **[1:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=91)** And now we go to do some adjustment.
>
> **[1:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=94)** So here we have to add matrix.
>
> **[1:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=98)** That is the name of our parameter col_grid.
>
> **[1:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=101)** We can keep like this, 70 and 3, here, we don't change.
>
> **[1:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=106)** And here we don't change anything.
>
> **[1:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=110)** We save and we run this function.
>
> **[1:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=113)** Now in this panel, we see that we have now functions and here there is the function.
>
> **[2:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=120)** If we will click on, we will leave the function surface and the circos function in the global environment.
>
> **[2:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=129)** Now what we can do is we can go to test our function.
>
> **[2:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=134)** So if we run our library, and again the colors here,
>
> **[2:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=146)** we can go to write circos_function and we give the matrix,
>
> **[2:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=155)** the col_grid and the other parameter I leave it as default.
>
> **[2:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=163)** I run.
>
> **[2:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=164)** And we can see that we have the chart diagram that we created previously.
>
> **[2:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=172)** And here you can add the title, the footnotes, and the second footnotes here.
>
> **[3:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=180)** So we recreate our previous chart diagram.
>
> **[3:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=186)** So as you see that the code of before was quite long but when you create your own function with one line of code, you can recreate the short diagram.
>
> **[3:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=198)** And this is very useful when you will have long code.
>
> **[3:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=202)** Now it's your turn.
>
> **[3:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=204)** Try to modify this function, try to improve what we created and see what you can come up.
>
> **[3:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=211)** You can play for example here with the argument because here we define only four.
>
> **[3:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=220)** You can, for example, try also to put other argument here.
>
> **[3:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=226)** You can, for example can use the start degree if you want to add here.
>
> **[3:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=231)** So try to think about and see how you can improve this function.
>
> **[3:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=236)** Another thing, so you can try is to write a second function to add the title and footnotes.
>
> **[4:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-function?u=76281980&t=243)** In this case, you will have a code only with two line to create the chart diagram and the title.

> [!info]- Semantic Content
>
> **Code Identifiers:** col_grid (3), circos_function (2), circos_function_b (1), big_gap (1), small_gap (1)
> **UI Navigation:** go to (4), click on (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)


### 3. Other Advanced Charts

[↑ Back to Table of Contents](#table-of-contents)

#### Create advanced charts
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=0)** - [Instructor] In this chapter, I will guide you through different types of advanced chart.
>
> **[0:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=4)** You are already familiar with bar chart, line chart, and scatter plot.
>
> **[0:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=10)** These are the basic visualization in every day that are very easy to make and very easy to understand for your audience.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=18)** What we will learn in this chapter is to create some alternative to bar chart, line chart.
>
> **[0:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=24)** You'll learn how to use a sparkline.
>
> **[0:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=27)** That is basically a line chart, but there are some difference.
>
> **[0:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=31)** First, you can see here that we have a minimum, a light in the blue point and the maximum, a light in the red point, and there are no x and y-axis.
>
> **[0:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=43)** We use sparkline when we want to highlight variation as for example, this one, and in fact, this is our wide use in the stock market.
>
> **[0:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=53)** I think that you already see this before.
>
> **[0:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=56)** Another advantage to create sparkline is that you can create small multiples, for example, as in this chart here, where we have four different sparkline to highlight the difference between countries, and this will be also what we will do with our data.
>
> **[1:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=73)** Another chart we will explore is the lollipop chart.
>
> **[1:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=76)** This chart is an alternative to the bar chart and visually encodes the length as in the bar chart.
>
> **[1:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=83)** There is a dot at the end of each line, and this dot can help better compare the length of the different segments.
>
> **[1:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=91)** For example, it's also possible to use as an alternative when we have a complex stacked bar chart because it can help to create a more readable chart.
>
> **[1:41](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=101)** Another chart that we will encounter is the slope graph that we see here, and this can help to compare variable and short trends, and for example, we can compare different countries and short trends over time.
>
> **[1:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-advanced-charts?u=76281980&t=117)** By the end of this chapter, you will be able to use different charts as an alternative to classic bar chart or line chart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Analogies:** for example (4)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Create a sparkline chart
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=0)** - [Instructor] In this lesson, we'll learn how to create spark lines with GG Plot two.
>
> **[0:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=6)** So we run the library tide diverse and our data.
>
> **[0:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=11)** We need now to check which are the maximum and minimum of renewable energy for each countries.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=18)** So, we have to create two separate data frame.
>
> **[0:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=22)** One for the minimum, that is data.
>
> **[0:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=28)** So, we group by territory and we use the function slice which minimum of the share of electricity and we run.
>
> **[0:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=46)** And then, we do the same things for the maximum, data, group by territory.
>
> **[1:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=60)** And, again the function slice.
>
> **[1:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=63)** Then, we will use which max for the share of electricity.
>
> **[1:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=72)** So, now we have this two data frame.
>
> **[1:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=74)** Now we can start to create the spark line.
>
> **[1:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=77)** Here, I already create the colors that I want to use for the minimum and the maximum.
>
> **[1:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=85)** So now we can go to concentrate on build the spark line.
>
> **[1:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=89)** So, in the X-axis, we put the variable here and, on the Y-axis, we put the share of electricity.
>
> **[1:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=100)** Now I want that the output will show all the countries in this data set because my idea is to create a small multiples.
>
> **[1:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=111)** To do this, I use the function facet wrap.
>
> **[1:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=116)** So I want to divide by territory so that I have a spark line for each territory.
>
> **[2:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=125)** I add the scale that is equal to three.
>
> **[2:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=131)** Why?
>
> **[2:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=132)** Because I wanted each spark line as each own scale and that I define that I want this small multiples in three column.
>
> **[2:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=145)** Now that we define how to create the small multiples, we'll start now adding the parameters to create the spark line.
>
> **[2:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=153)** So, geom line with the line width of 0.3,
>
> **[2:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=164)** we add the geom point.
>
> **[2:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=168)** And this time, this geom point is for the minimum, the maximum.
>
> **[2:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=172)** So, we define here which data is needed to use.
>
> **[2:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=177)** So, here first we put the minimum and we start to give the color, equal, min.
>
> **[3:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=188)** And, we do the same for the maximum.
>
> **[3:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=196)** So, data is max df and then aesthetic we define color, equal, max.
>
> **[3:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=209)** So, now if we want to run the code to have an idea what we are doing, we can see that we already start to see some spark line here.
>
> **[3:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=219)** And here we have a warning because I make a typo.
>
> **[3:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=224)** So, this sometimes can happen.
>
> **[3:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=226)** So, here we go immediately to change the typo and we run again and we don't have the warning.
>
> **[3:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=236)** So, and we can see here our spark line.
>
> **[3:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=238)** So, now that this is the basic, our spark line.
>
> **[4:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=242)** We go to add now the text for the spark line and the theme in order to remove this gray and to customize.
>
> **[4:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=251)** So, here we continue so we add.
>
> **[4:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=255)** We also to add the text we use the function geom, text and the data is from the minimum.
>
> **[4:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=265)** And, in this case, in the aesthetic, we say that the label is equal the ground value of the share of electricity and then we round to one and then we can add other parameter here So for example, we can add the size equal five and the vertical adjustment that is equal minus one.
>
> **[5:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=302)** We add another geom text.
>
> **[5:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=307)** This time for the maximum and we do the same.
>
> **[5:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=313)** We define which label and is the share of electricity that we round to one.
>
> **[5:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=325)** And also here, yeah, there is a typo.
>
> **[5:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=329)** And also here, we add the size equal five
>
> **[5:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=339)** and the vertical adjustment equal 1.5 and we add also the horizontal adjustment equal 0.5.
>
> **[5:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=353)** And, we give a theme, minimal because now we will go to add some customization of this theme.
>
> **[6:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=363)** So, we define Y lab, empty and also X lab empty because we try to minimize and we say that the coordinate, the Cartesian, clip, equal, off.
>
> **[6:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=390)** Now give the scale X continuous and we define the breaks that are from 2000 to 2021.
>
> **[6:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=403)** We define the scale color, manual.
>
> **[6:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=409)** We don't want to give any name for the legend because we already know name equal, empty.
>
> **[6:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=418)** We define the breaks that are our minimum and maximum.
>
> **[7:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=428)** And, values, that is the parameter, col, that we define here, line 17, that is the colors.
>
> **[7:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=443)** And so, here now we continue with the customization of the theme.
>
> **[7:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=449)** So, I add that the axis, dot, text, X are element text because I give the size equal 12, axis, text, Y.
>
> **[7:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=478)** Since we add the minimum maximum, we can add element blank for the text on Y axis.
>
> **[8:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=486)** I want to also remove the tick.
>
> **[8:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=489)** So, I will add axis, dot, tick, equal, element blank.
>
> **[8:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=497)** I want to remove the panel grid.
>
> **[8:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=500)** I will add panel grid, equal, element blank.
>
> **[8:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=507)** And, I want to use strip, dot, text.
>
> **[8:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=512)** This because I want to increase the name of the countries here.
>
> **[8:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=519)** And I will use element text, size equal 14.
>
> **[8:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=528)** I add also the parameter panel, dot, spacing, in order that I can have the some space between, unit, two lines.
>
> **[9:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=547)** And the last, I will put the legend on the bottom and I will use the perimeter, legend, dot, position.
>
> **[9:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=561)** So, now we check that everything is closed and we don't forgot anything.
>
> **[9:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=565)** And especially that we run the function call for the colors.
>
> **[9:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=570)** Now if we run, we have created our small multiples with the spark line.
>
> **[9:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=578)** So, we put this bigger and we can see that there is a trend for each country now.
>
> **[9:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=586)** So, here we can see the minimum and the maximum.
>
> **[9:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=589)** Here we have our legend for minimum and maximum.
>
> **[9:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=592)** And this is how we created the spark lines with GG plot two.
>
> **[9:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=596)** Now that you learn how to do it, it's your time to play with it.
>
> **[10:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-sparkline-chart?u=76281980&t=602)** I invite you to add some modification to this chart then join me in the next video and I show you how to create a lollipop plot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (1)
> **Versions:** 0.3 (1), 1.5 (1), 0.5 (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Create a lollipop plot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=0)** - [Instructor] This lesson, we will create a lollipop plot as an alternative to a bar chart and we'll use the package ggpubr to create it and I'll show how to use it.
>
> **[0:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=13)** ggpubr is a ggplot2-based package designed to prepare chart for publication and we'll see also to use it in combination with ggplot2.
>
> **[0:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=24)** So here we run the library, our data and to create the lollipop I want to select the top 10 countries that use the most solar energy in 2021.
>
> **[0:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=42)** Here I already write this line of code for you to create this data frame top 10 that we have the data for 2021 and there is a subset to look for the top 10 country that use the most of solar energy.
>
> **[0:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=59)** Now to create the lollipop chart we'll use the function gg.chart.
>
> **[1:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=68)** Here inside we'll go to give the data.
>
> **[1:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=72)** The x that is territory, y equal solar
>
> **[1:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=83)** and color equal continent.
>
> **[1:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=94)** So in this case I have that each continent will have a different color and I will define this color using palette equal jco.
>
> **[1:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=105)** jco is a built-in palette inside ggpubr.
>
> **[1:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=111)** And I add the legend and using the parameter legend title I call it continents.
>
> **[2:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=123)** To sort the data I use a parameter sorting equal descending and I use rotate equal true in order that the label of the countries are on the vertical axis so they are easy to read.
>
> **[2:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=146)** And I add the segment to connect the dot and I use here segments and I define some parameter for the segments.
>
> **[2:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=158)** So I create a list and I give color equal black and size equal at 0.5.
>
> **[2:55](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=175)** I also give a size for the dot using dot size equal eight.
>
> **[3:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=184)** In addition, we can add some label directly on the dot.
>
> **[3:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=189)** And to do this we use round because I want to give the value of the solar energy.
>
> **[3:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=197)** So I take the variable solar.
>
> **[3:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=201)** Note that the number are printed on the dot.
>
> **[3:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=206)** And I give some parameter using font label.
>
> **[3:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=209)** I create again list and I give color equal gray 95,
>
> **[3:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=219)** size equal 10, vertical adjustment equal 0.5
>
> **[3:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=229)** and face equal bold.
>
> **[3:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=238)** Last we set the theme using the parameter ggtheme and we use the theme from ggplot2.
>
> **[4:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=246)** In this case, I use the theme void.
>
> **[4:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=249)** If now we run we see already our lollipop plot with the different colors.
>
> **[4:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=258)** But now we can add using ggplot2 for the customization.
>
> **[4:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=263)** So we will go to add the title using ggtitle and we will type solar energy in 2021 in TWh.
>
> **[4:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=278)** And I can use theme to remove the number on the x axis because since we added the number directly on the dot we don't need the x axis.
>
> **[4:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=290)** So we type axis.text.x equal element blank.
>
> **[5:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=302)** We do the same for the ticks.x equal element blank.
>
> **[5:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=315)** And the last, we set the size for the title using element text and we type h just equal 0.5 to be in at the center and the size equal 22.
>
> **[5:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=333)** If we run again, we see that we have the title.
>
> **[5:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=336)** We don't have any more the x axis.
>
> **[5:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=339)** In this lesson you saw how to use the main parameters to create the lollipop plot in combination with ggplot2.
>
> **[5:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=347)** Now it's your turn.
>
> **[5:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=349)** Try to change the color palette and play with the parameter here.
>
> **[5:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=354)** For example, the size, the vertical adjustment to personalize your chart.
>
> **[6:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-lollipop-plot?u=76281980&t=362)** Then in the next video I'll talk about the third advanced chart, the slope graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (1)
> **Versions:** 0.5 (3)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create a slope graph
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=0)** - [Instructor] In this lesson we will create the slope graph using ggplot2 and we will also use the package ggrepel and ggpp to create the label.
>
> **[0:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=10)** And I want to compare the solar energy in 2021.
>
> **[0:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=18)** Now we start to build the slope graph.
>
> **[0:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=20)** So we define ggs, the data and we add ggplot
>
> **[0:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=29)** where we define x equal year and y equal share of electricity.
>
> **[0:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=39)** We group by territory and we add the color equal continent.
>
> **[0:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=54)** And this part goes in the aesthetic.
>
> **[0:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=59)** So we close and we add the geom line
>
> **[1:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=68)** using a line width of two and an alpha of 0.5.
>
> **[1:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=84)** This line will connect to the dot.
>
> **[1:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=86)** Now we will add the dot using the geom point and we give the size equal three.
>
> **[1:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=96)** We use the same colors that we use for the lollipop plot and then we use the function scale color manual and we give the name equal continents.
>
> **[1:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=117)** The values.
>
> **[1:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=119)** And in this case I will use the package ggsci because I want to use the same palette that we use for the lollipop plot.
>
> **[2:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=133)** And here put default.
>
> **[2:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=137)** And four, because I need four colors.
>
> **[2:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=146)** On the x axis we need only the year 2021.
>
> **[2:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=150)** So I use the function scale x continuous equal breaks 2021.
>
> **[2:46](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=166)** And I add the theme void because we don't need any backgrounds and after we will use the theme to customize the chart.
>
> **[2:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=176)** And in fact here in the function theme we go to define the axis.text x equal element text size 16.
>
> **[3:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=195)** We define the legend position on the bottom.
>
> **[3:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=205)** The legend text equal element text size equal nine.
>
> **[3:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=216)** And per the plot title element text,
>
> **[3:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=225)** we define the size of the text to 30.
>
> **[3:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=232)** Face equal bold.
>
> **[3:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=236)** h just equals 0.5.
>
> **[4:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=243)** And also define the margin because I don't want that my text is to attach to the chart.
>
> **[4:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=251)** So I wanted that there is enough space and so I use the function margin and I give this value.
>
> **[4:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=263)** And the last I use plot.margin and this because since I will add the label, so that was label graph for each side, I wanted that there is enough space on the side.
>
> **[4:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=280)** Unit, I created this vector.
>
> **[4:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=287)** Eight and type lines.
>
> **[4:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=294)** So and now we can recall and see our slope graph.
>
> **[5:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=301)** So this is the basic on our slope graph.
>
> **[5:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=303)** Now we need to add all the label here.
>
> **[5:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=307)** And to do this we'll use the function geom text repel.
>
> **[5:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=312)** And so we will write here ggs plus geom text repel.
>
> **[5:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=322)** And here we go to add the data.
>
> **[5:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=328)** And in aesthetics we define x equal year, then y equal share of electricity.
>
> **[5:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=342)** And now we add the label.
>
> **[5:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=345)** And here we give the name of the countries and the corresponding share of electricity and we use paste zero territory.
>
> **[6:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=367)** We add this symbol and we add the share of electricity.
>
> **[6:22](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=382)** And I want to show that this is in percentage.
>
> **[6:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=384)** So I will add also this symbol here.
>
> **[6:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=388)** Now I use the parameter force inside because I want that there is no overlap.
>
> **[6:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=397)** So I will give this value of 20 to be sure that the label will not overlap.
>
> **[6:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=402)** And also we use show legend equal false.
>
> **[6:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=408)** This will avoid to have a double legend, because we already created here on our chart the legend and I give the size equal five.
>
> **[7:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=420)** And now we define the position and we use the function position nudge two
>
> **[7:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=435)** from the package ggp.
>
> **[7:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=438)** And here I can give where I want this position.
>
> **[7:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=443)** So here I can set the position of the label on the x.
>
> **[7:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=448)** So I will define x equal c.
>
> **[7:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=452)** So I want to these, the year 2000 minus 13 and 2021 plus 13.
>
> **[7:42](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=462)** So in this case, what I want say that I want that the label on this side will have some space and will not be attached to this point.
>
> **[7:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=471)** And the same things here so that there is some space that don't overlap with the dot.
>
> **[7:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=479)** And now we can give the title using the function the ggtitle.
>
> **[8:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=483)** And I will define the title as a share of renewable energy
>
> **[8:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=493)** for the \n top 10 countries
>
> **[8:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=503)** that use the most of solar energy.
>
> **[8:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=510)** So now we run and we can see our label.
>
> **[8:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=515)** So here if we expand this chart now we can see that we have all the label that we can see now that we can clearly see for each point which is the country.
>
> **[8:51](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=531)** And we can distinguish the continent.
>
> **[8:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=534)** This is auto chart and plots making comparison.
>
> **[8:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=537)** It is possible to see which country increase its share of renewable energy.
>
> **[9:01](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=541)** So for example, we see that South Korea passed from 1% to 8% and we can see that for example Vietnam passed from 55 to 43%.
>
> **[9:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=551)** Now that you learn how to create this slope graph I invite you to change sample meter to change the colors.
>
> **[9:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=559)** Try to work with the labels to see if you can find a way to improve how we create a label.
>
> **[9:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/create-a-slope-graph?u=76281980&t=566)** So play with this and try to create your own slope graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Versions:** 0.5 (2)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 4. Accessibility and Annotations

[↑ Back to Table of Contents](#table-of-contents)

#### Accessible color palettes
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=0)** - [Instructor] We already saw in the previous lesson how to change color using a scale color manual from ggplot2.
>
> **[0:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=7)** Here we will see how to add different palette using other function from ggplot2 and how to test for accessibility using the package colorblindr and how to change a brand color palette.
>
> **[0:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=21)** So first, we read that the slope graph that we created previously.
>
> **[0:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=26)** I want to show you where this color scale where this is a package that contains a different scale of colors that are color blind friendly.
>
> **[0:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=39)** And to do this, there is a function in ggplot2 that scale_colour_viridis.
>
> **[0:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=49)** And here we use the name equal empty and there are several option that there are the scales that we saw before.
>
> **[1:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=60)** Here for this lesson I choose the color of scale magma, we run and we can see now our slope graph change but we can now test for the color of blindness.
>
> **[1:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=75)** To test for the color of blindness, we'll use the function cvd_grid from the package colorblindr and we'll copy and paste this code.
>
> **[1:28](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=88)** And here now we have the four different color blindness and see how the color is perceived.
>
> **[1:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=97)** And in this case for the color blindness we have deuteranomaly and protonomaly are the red and green color blindness.
>
> **[1:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=107)** Tritanomaly, the blue-yellow and desaturated is when there is the reduction in color vision to poor gray scale as we can see here.
>
> **[1:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=117)** So in this case the color are good because we use a colorblind friendly palette.
>
> **[2:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=122)** But this is good that you know to use it when you have your own color palette.
>
> **[2:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=127)** Maybe this is not the only one that task colorblind friendly.
>
> **[2:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=132)** There is also RColorBrewer colour palette.
>
> **[2:16](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=136)** And here I printed only the colorblind friendly.
>
> **[2:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=140)** To use it, to change the color of our slop graph, we use again a built-in function in ggplot2 that is called colour_brewer.
>
> **[2:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=152)** And here we add the parameter palette and I choose set2.
>
> **[2:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=163)** Here, there is different colorblind friendly palette.
>
> **[2:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=165)** So I invite you to choose the other one and to test.
>
> **[2:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=169)** So now we can run and we can see how the colors change for our slope graph.
>
> **[2:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=176)** So now that we saw to change the color using viridis are color blue and how to test for the colorblindness.
>
> **[3:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=183)** I want to show you another example.
>
> **[3:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=186)** So imagine that we have this brand color palette that is not colorblind friendly.
>
> **[3:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=192)** So we use the function palette_plot from colorblindr to see our color palette.
>
> **[3:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=203)** And now we can check for the colorblindness using cvd_grid.
>
> **[3:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=215)** And here I can change also the size of the label.
>
> **[3:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=224)** So now we see again the four different type.
>
> **[3:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=228)** And for deutanomaly and protanomaly, we see that blue and purple are not very distinguishable and then deutanomaly red and dark green are not distinguishable.
>
> **[3:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=239)** So we can use the package we colorize that allow us to change this parameter to improve accessibility and we can play with the saturation and brightness.
>
> **[4:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=253)** First of all, we need to convert our palette in RGB.
>
> **[4:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=260)** And to do this I use the function col2rgb.
>
> **[4:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=267)** I give my name and I divide for 255.
>
> **[4:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=272)** Now that I have converted, I can create another variable brand_sat where I will use the function adjust_color because I want to adjust the second and the third color.
>
> **[4:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=288)** So I use brand_rgb, indicate which color I want to change.
>
> **[4:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=294)** So 2 and 3 and I changed the value for the saturation to 0.3 and the brightness to 0.9
>
> **[5:09](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=309)** and I add the plotting equal TRUE to have the output here.
>
> **[5:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=315)** So yeah, we can see how the color change for the second and the third.
>
> **[5:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=320)** Now to test for colorblindness we have to convert to Xcode.
>
> **[5:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=325)** So, and we use the function rgb on the variable brand_sat.
>
> **[5:36](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=336)** Now we can use cvd_grid to check.
>
> **[5:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=340)** Now our brand palette is now change
>
> **[5:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=348)** and we add also palette_plot
>
> **[5:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=356)** so now we obtain a color palette that is accessible and we can distinguish the color.
>
> **[6:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=364)** Now it's your turn.
>
> **[6:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=366)** Try to play with different color palette and check if they are accessible.
>
> **[6:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/accessible-color-palettes?u=76281980&t=371)** Try to create your own color palette that is colorblind friendly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1)
> **Code Identifiers:** cvd_grid (3), palette_plot (2), brand_sat (2), scale_colour_viridis (1), colour_brewer (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** rgb (1), true (1)
> **Versions:** 0.3 (1), 0.9 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Add charts on the same figure
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=0)** - [Instructor] Now we're ready to add together two chart in one panel.
>
> **[0:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=3)** And to do this we'll use the library cowplot.
>
> **[0:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=7)** First we, we load our metrics and we source the script colgrid.
>
> **[0:15](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=15)** Colgrid contains all the line of code that we used previously to create the grid of colors for the chart diagram.
>
> **[0:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=23)** Since we already learned now to create a function I already created this function for you and here we created a variable color grid that will call the function colgrid that we'll pass to the chart diagram.
>
> **[0:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=43)** For the chart diagram we'll source the function that we created previously that the circlize is not a ggplot format.
>
> **[0:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=54)** So in order that we can add together in a cowplot we need to create a new variable called cd and transform our chart diagram to a formula using this symbol.
>
> **[1:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=68)** And here we will call circos function, our matrix and the colgrid that we define previously and we can run these.
>
> **[1:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=85)** Now I want to add the circlize chart diagram with the sparkline that we create.
>
> **[1:31](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=91)** So I'll call the sparklines here using the function readRDS from the path data sparkline.
>
> **[1:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=109)** Now that we add all our function we can start to build together.
>
> **[1:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=113)** First we run a circos clear to be sure that our environment is clear.
>
> **[2:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=120)** When we put everything together, we don't have warning.
>
> **[2:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=123)** To add together to chart in cowplot we use the function plot grid.
>
> **[2:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=128)** And if I add the sparkline and the chart diagram without any parameters, we have that now our charts are together on the same panel.
>
> **[2:24](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=144)** Run again circos.clear.
>
> **[2:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=146)** Now we will customize this and we define the variable plot panel.
>
> **[2:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=154)** We use again the function plot grid.
>
> **[2:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=158)** And inside this function we add the sparkline and the chart diagram.
>
> **[2:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=165)** I add the parameter label because I want to add a label for each chart here.
>
> **[2:55](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=175)** So I type the first label.
>
> **[2:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=178)** I want share of okay, renewable energy
>
> **[3:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=187)** and the second label, renewable source of energy in 2021.
>
> **[3:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=197)** To adjust the position of the label I use the parameter label x equal 0.1 and label y equal 1.03.
>
> **[3:37](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=217)** We can also adjust the position of the label using hjust, which is the horizontal adjustment and we will add the value 0.1.
>
> **[3:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=229)** We can scale the column using the parameter rel width so that I have 1.2, the first and 2, the second and also the high using as value 0.5, 2.
>
> **[4:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=250)** And this is my plot panel.
>
> **[4:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=252)** Now I can use the theme function from ggplot2 and we'll give theme and I will use plot margin and they want to set the top margin to 20 in order to have enough space for my labels.
>
> **[4:35](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=275)** Now we run.
>
> **[4:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=278)** We run also circos.clear and we recall plot panel.
>
> **[4:52](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-charts-on-the-same-figure?u=76281980&t=292)** Now we created a figure where we have the chart diagram and the sparkline and we have add also the label.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cd (1), data (1)
> **Versions:** 0.1 (2), 1.03 (1), 1.2 (1), 0.5 (1)
> **CLI Commands:** cd (1)
> **Code Identifiers:** readrds (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Add annotations and backgrounds
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=0)** - [Instructor] In this one we'll learn how to add notation such as the title and subtitle.
>
> **[0:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=5)** And to change the color background, we'll use the same script as the last lesson so we can source everything.
>
> **[0:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=14)** And here we will start to add the title and subtitle.
>
> **[0:20](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=20)** To add the title and subtitle, we'll create a ggplot object.
>
> **[0:25](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=25)** We define the variable title and the score gg to indicate the ggplot object.
>
> **[0:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=33)** We add the first layer of ggplot and we use the function labs where we create the title that is equal "Use of renewable energies per country".
>
> **[0:59](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=59)** And the subtitle is "Share of renewable energy greater
>
> **[1:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=73)** than 65% in 2021".
>
> **[1:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=83)** So now that we define with the function labs, now we will use theme to change the parameter for the plot title and we will add in element text the size
>
> **[1:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=100)** equal 24, hjust equal 0.5.
>
> **[1:48](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=108)** That is at the center.
>
> **[1:50](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=110)** Face equal bold.
>
> **[1:57](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=117)** And we do the same things for the subtitle using plot.subtitle.
>
> **[2:04](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=124)** In element text we define the size equal 16 and hjust equal 0.5.
>
> **[2:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=137)** I add gained plot margin using margin equal 18, 0, 12, 0
>
> **[2:30](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=150)** so that my title and subtitle are not to attach to the chart and in fact, I'm increasing the top and the bottom margin.
>
> **[2:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=163)** Now I define also the background and I use plot.background equal element_rect
>
> **[2:56](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=176)** and I will use fill equal gey92 and color equal NA.
>
> **[3:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=188)** And we can run this title.
>
> **[3:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=201)** We create the variable panel and we use the function plot_grid from colplot where we add together the title and our plot where there is the spark line and the short diagram.
>
> **[3:44](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=224)** This time I add that I need one column because I want that the title is on top of the plot.
>
> **[3:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=233)** And I use the variable rel_heights that is equal 0.1
>
> **[4:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=242)** and 1 so that the title will be proportionate to the figure.
>
> **[4:11](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=251)** We add the parameter align equal V, that stand for vertical.
>
> **[4:21](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=261)** We use again, the function theme.
>
> **[4:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=269)** Here, for the title, we use the function plot.background to give this color.
>
> **[4:33](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=273)** Now we have to do the same things with for the function plot grid.
>
> **[4:39](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=279)** So in this case we will use a plot.background equal element_rect, and inside we define the same color fill equal "grey92" and color equal NA.
>
> **[5:06](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=306)** So now we will call our function panel.
>
> **[5:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/add-annotations-and-backgrounds?u=76281980&t=310)** We'll see that our charts now has a title and subtitle.

> [!info]- Semantic Content
>
> **Code Identifiers:** element_rect (2), plot_grid (1), rel_heights (1)
> **Versions:** 0.5 (2), 0.1 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Further annotation
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=0)** - [Instructor] In this lesson, we will add the footnote, some text, here on our figure that we create previously.
>
> **[0:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=7)** This is the previous code and here we will add the footnote.
>
> **[0:13](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=13)** So we create the variable, panel footnote and we'll use the function add sub from cowplot.
>
> **[0:27](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=27)** So we will type inside, panel, that is our figure, and the label that we want to add as a footnote.
>
> **[0:34](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=34)** And in this case, is the source, our world in data.
>
> **[0:43](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=43)** We define the fontface, equal bold, and the size equal 10.
>
> **[0:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=53)** And we add the horizontal adjustment of minus 1.2.
>
> **[1:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=62)** So that our footnote can go here.
>
> **[1:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=65)** I want to also to add the text because here I want to add an annotation for the variable other.
>
> **[1:12](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=72)** And first I will define variable txt and I will add this text, other, in the chord diagram, refers to geothermal,
>
> **[1:40](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=100)** biomass and others.
>
> **[1:47](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=107)** And now we will add this text here in this part, other.
>
> **[1:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=114)** And to do this, we will use the function ggdraw.
>
> **[2:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=122)** We add as argument, panel footnote.
>
> **[2:07](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=127)** This function draw an image into ggplot object and so that we can use the function geom text.
>
> **[2:17](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=137)** And here we define the coordinate, X equals 0.55, Y equal 0.2, and label equal txt.
>
> **[2:32](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=152)** We give the horizontal alignment, equal 0.5, and the vertical alignment of 0.5.
>
> **[2:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=165)** And the size of the text, we will use 12 pt.
>
> **[2:54](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=174)** This case we use this formula because we need to divide for pt because geom text interprets the size in millimeters.
>
> **[3:03](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=183)** In this case, we will have the size in 12 points.
>
> **[3:08](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=188)** We run, and we can see the final image that has the footnote.
>
> **[3:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=194)** And so here, there is the annotation for other.
>
> **[3:18](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=198)** In this lesson you learn how to add the footnote, some text on the canvas.
>
> **[3:23](https://www.linkedin.com/learning/build-advanced-charts-in-r/further-annotation?u=76281980&t=203)** Now it's your turn to play with this function and change the parameters and the text we use here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Versions:** 0.5 (2), 1.2 (1), 0.55 (1), 0.2 (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=0)** - [Rita] Thanks for completing this course.
>
> **[0:02](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=2)** Well done on applying what you learn to a real data project.
>
> **[0:05](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=5)** Now, that you have taken this course so you can create a customized chart diagram.
>
> **[0:10](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=10)** You are also able to add the different charts to create the simple infographics.
>
> **[0:14](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=14)** I hope that you find the course available and applicable to your work.
>
> **[0:19](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=19)** If you'd like to continue developing your skill I recommend you to have a look at the course [[Creating Maps with R]].
>
> **[0:26](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=26)** You could also try to add the map to your project.
>
> **[0:29](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=29)** You could also explore the Patchwork package to combine the charts together or explore the function ggarrange from ggpubr.
>
> **[0:38](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=38)** And I also encourage you to apply the lesson you have learned to create more complex infographics using R.
>
> **[0:45](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=45)** If you are happy with the outcome please share it on LinkedIn.
>
> **[0:49](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=49)** You can tag me so I can comment on it and celebrate your achievements.
>
> **[0:53](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=53)** You can also reach me through my website or following me on LinkedIn.
>
> **[0:58](https://www.linkedin.com/learning/build-advanced-charts-in-r/next-steps?u=76281980&t=58)** Thanks again for taking my course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infographics]] (2), [[LinkedIn]] (2), data (1)
> **CLI Commands:** find (1)
> **Speakers:** - [rita] (1)


## Instructor

- [[Rita Giordano]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/build-advanced-charts-in-r-4405613)

## Skills Covered

- R (Programming Language)
- Data Visualization

## Path Context

### In [[Advance Your Skills in R]]
← [[Creating Maps with R]] | **8 of 8**

## Appears In

- [[Advance Your Skills in R]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide To R Wrangling Visualizing And Modeling Data]] — Data Visualization, R (Programming Language)
- [[R for Data Science- Analysis and Visualization]] — Data Visualization, R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[R Tidyverse Applications]] — R (Programming Language)
- [[Learning the R Tidyverse]] — R (Programming Language)

---

[↑ Back to top](#)