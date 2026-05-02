---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-logistic-regression-in-excel-r-and-power-bi
url: "https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi"
duration_minutes: 169
duration: 2h 49m
level: Intermediate
updated: 11/5/2021
learners: 52410
skills:
  - Machine Learning
  - R (Programming Language)
  - Artificial Intelligence (AI)
  - Microsoft Power BI
  - Microsoft Excel
  - Logistic Regression
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF32uee6WTXTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635973062525?e=2147483647&amp;v=beta&amp;t=OfQbNnodDZ0te3kzmywU4sQDH-OGQ3UP1HA2_tdenJ4"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[From Excel to SQL]]'
next_courses:
  - '[[Excel- Economic Analysis and Data Analytics]]'
path_nav: '[{"path":"Master Advanced Excel Data & Analytics Skills","position":6,"total":7,"prev":"From Excel to SQL","next":"Excel- Economic Analysis and Data Analytics"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/machine-learning
  - skill/r-programming-language
  - skill/artificial-intelligence-ai
  - skill/microsoft-power-bi
  - skill/microsoft-excel
  - skill/logistic-regression
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Machine%20Learning%20with%20Logistic%20Regression%20in%20Excel%2C%20R%2C%20and%20Power%20BI.md)

![Machine Learning with Logistic Regression in Excel, R, and Power BI](https://media.licdn.com/dms/image/v2/C560DAQF32uee6WTXTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635973062525?e=2147483647&amp;v=beta&amp;t=OfQbNnodDZ0te3kzmywU4sQDH-OGQ3UP1HA2_tdenJ4)

# Machine Learning with Logistic Regression in Excel, R, and Power BI

> Excel, R, and Power BI are applications universally used in data science and across businesses and organizations around the world. If you’ve spent any time trying to figure out how to better model your data to get useful insights from it that you can act upon, you’ve most likely encountered these applications. In this course, Helen Wall shows how to use Excel, R, and Power BI for logistic regressi

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi) | 2h 49m | Intermediate | 52K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Apply logistic regressions to solve problems](#apply-logistic-regressions-to-solve-problems)
  - [What you should know](#what-you-should-know)
  - [Introduction to the course project](#introduction-to-the-course-project)
  - [Configuring the Excel Solver Add-in](#configuring-the-excel-solver-add-in)
  - [Working with R](#working-with-r)
  - [Configuring R in Power BI](#configuring-r-in-power-bi)
- [**1. Distributions and Probabilities**](#1-distributions-and-probabilities) (6 videos)
  - [Introducing AI and logistic regression](#introducing-ai-and-logistic-regression)
  - [Differentiating between odds and probabilities](#differentiating-between-odds-and-probabilities)
  - [Differentiating between distributions](#differentiating-between-distributions)
  - [Calculating logs and exponents](#calculating-logs-and-exponents)
  - [Sigmoid curve](#sigmoid-curve)
  - [Utilizing training and testing data sets](#utilizing-training-and-testing-data-sets)
- [**2. Binomial Logistic Regression**](#2-binomial-logistic-regression) (9 videos)
  - [Calculating linear regression](#calculating-linear-regression)
  - [Working with the logit model](#working-with-the-logit-model)
  - [Calculating log likelihood](#calculating-log-likelihood)
  - [Constructing MLE](#constructing-mle)
  - [Solving MLE](#solving-mle)
  - [Predicting outcomes](#predicting-outcomes)
  - [Visualizing logistic regression](#visualizing-logistic-regression)
  - [Challenge: Calculating logistic regression](#challenge-calculating-logistic-regression)
  - [Solution: Calculating logistic regression](#solution-calculating-logistic-regression)
- [**3. Fine-Tuning the Model**](#3-fine-tuning-the-model) (7 videos)
  - [Adding more independent variables](#adding-more-independent-variables)
  - [Transforming variables](#transforming-variables)
  - [Calculating correlations](#calculating-correlations)
  - [Using statistics](#using-statistics)
  - [Configuring confusion tables](#configuring-confusion-tables)
  - [Challenge: Fine-tuning the model](#challenge-fine-tuning-the-model)
  - [Solution: Fine-tuning the model](#solution-fine-tuning-the-model)
- [**4. Multinomial Regression**](#4-multinomial-regression) (5 videos)
  - [Calculating odds for multinomial models](#calculating-odds-for-multinomial-models)
  - [Calculating probabilities for multinomial models](#calculating-probabilities-for-multinomial-models)
  - [Calculating multinomial log likelihoods](#calculating-multinomial-log-likelihoods)
  - [Running MLE](#running-mle)
  - [Making the predictions](#making-the-predictions)
- [**5. Working in Power BI with R**](#5-working-in-power-bi-with-r) (5 videos)
  - [Running R scripts in the Power Query Editor](#running-r-scripts-in-the-power-query-editor)
  - [Running R standard visuals](#running-r-standard-visuals)
  - [Interacting between visual components](#interacting-between-visual-components)
  - [Challenge: Moving into Power BI](#challenge-moving-into-power-bi)
  - [Solution: Moving into Power BI](#solution-moving-into-power-bi)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with logistic regressions](#next-steps-with-logistic-regressions)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Apply logistic regressions to solve problems
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=0)** - [Helen] You've probably spent a lot of time trying to figure out how to better model your data to get useful insights from it that you can act upon.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=8)** You can take data with a lot of columns to figure out future predictions based on results in the past.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=15)** We'll use Excel formulas, the Solver Add-in, and R to model logistic regression to visualize the model results.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=25)** We can then use R and Power BI to create scalable views that make this model accessible to a much wider group of end users.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=34)** Hi, I'm Helen Wall and I'm excited to introduce you to one type of algorithm, logistic regression, that you've likely seen modeled in your own data without even necessarily realizing it.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=47)** Logistic regression models are useful for games, medical research, and fraud detection, and much more.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=53)** You'll see how to transform the way you view data now into a model that's useful, just by starting to think about the distance and dimensionality of these models.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/apply-logistic-regressions-to-solve-problems?u=76281980&t=64)** Come join me in this LinkedIn learning course on logistic regression in Excel, R, and Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Logistic Regression]] (4), [[Microsoft Excel|Excel]] (2), power (2), bi (2)
> **CLI Commands:** make (1)
> **Speakers:** - [helen] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you start this course, you should be comfortable working in Excel.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=3)** You should also be comfortable working with tabular data.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=7)** I also recommend knowing a bit about Power BI, if you're interested in implementing logistic regression models directly in the application.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=15)** Logistic regression involves some math.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=18)** We'll be solving for the variables in a model by using calculus to find minimums and maximums.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=24)** Linear algebra is absolutely not required, but you'll find the concepts in this course more tangible.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=30)** You don't need to know much about R, but be eager to learn more.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/what-you-should-know?u=76281980&t=35)** If you want to get up to speed on these applications, please check out Excel Essential Training, and [[Power Bi Essential Training]] in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), power (2), bi (2), data (1), application (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Introduction to the course project
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=0)** - [Instructor] In our course project, we're going to work in three different applications, Excel, R, and Power BI.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=7)** In many videos, we'll be working in two of the application simultaneously, to see how they can produce the same results through different steps and processes.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=17)** For the project in this course, we'll be leveraging college basketball data, which I got from the ESPN website.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=24)** I took college basketball data for the University of Washington over the last decade.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=29)** You can see the schedule for the most recent season as of the recording date on the screen here.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=35)** But you can also navigate to earlier seasons through the dropdown menu under the season header.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=42)** We can see the results of each game.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=45)** Let's navigate to an earlier season.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=48)** We can see the results of each game on this page, but if you want to see the box score, you'll need to click on one of the hyperlinks for the game.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=59)** This takes us to the game details.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=63)** We land on the game cast page, but that doesn't contain all the data that we're looking for.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=68)** Instead, we'll navigate to the box score tab.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=72)** The box score page displays the details for the game, including the breakdown of stats for the starting players.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=79)** But for our model, we're interested in the totals for the entire team, which you can see at the bottom of the page.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=86)** I ran a script to get the data for you, which I saved to a CSV file and the exercise files for those of you with access.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=95)** I encourage you to explore some of the other data on the ESPN website or other websites.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introduction-to-the-course-project?u=76281980&t=100)** If sports data is an area that interests you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), game (6), [[Microsoft Excel|Excel]] (1), power (1), bi (1)
> **UI Navigation:** navigate to (3), dropdown (1), click on (1)
> **Env Vars:** espn (2), csv (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Configuring the Excel Solver Add-in
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=0)** - We're going to use Excel to do a substantial part of our logistic regression modeling.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=5)** In addition to having Excel on your own computer, you'll also need to install the Solver add-in directly, as well as the data analysis tool pack to run the logistic regression models and analysis within this course.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=18)** In my own current version of Excel, I access the add-ins through the file menu, and I'll then select options.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=27)** On the left, we see the add-ins, we select the add-in menu, we see there's a list of add-ins that you can choose to add to Excel.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=37)** If you already have add-ins in your Excel file, you'll see them in the active section.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=43)** We don't have any active right now, so we'll select the manage Excel add-in to the bottom.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=49)** We'll click the go button.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=51)** We'll then select to add the analysis tool pack and the Solver add-in, and we'll hit okay to confirm these choices.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=61)** Now we can access the Solver and the data analysis by going to the data ribbon, and over in the top right, we see in the analyze sub-menu options for data analysis and Solver.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=75)** Solver's a pretty straightforward process, but there may be variations between past versions and also potential future versions.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=84)** Your version of Excel may look slightly different from mine.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=88)** If yours does look different and these steps don't work, your best bet is to do an online search for the Excel Solver add-in documentation page.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=97)** Microsoft includes documentation for our Solver in several places on their website.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-the-excel-solver-add-in?u=76281980&t=104)** Once you install them, they'll also appear in all your new and existing Excel files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (9), data (4), [[Logistic Regression]] (2), hit (1), [[Search]] (1)
> **UI Navigation:** select the (2)
> **Prerequisites:** install (2)
> **Speakers:** - we (1)

#### Working with R
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=0)** - [Instructor] In this course we're going to leverage R as part of our logistic regression modeling process.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=6)** R is a statistical programming language that lets us run models and create insightful graphics.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=12)** You can see the Homepage for the R language on the screen.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=16)** We're going to write our scripts for R directly in RStudio, which is an integrated development environment or IDE for writing and checking code.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=25)** We can download RStudio directly from this website by selecting the Download link.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=31)** I'll scroll down a bit, we can see several download options to choose from both Free and Paid for this course we can leverage RStudio Desktop, the first option on the left, for our R modeling, which is a free download.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=47)** We can simply click on the Download button on the screen, to start the download process.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=54)** RStudio is a great way to write and test code, but in order to run R directly in Power BI desktop models, we need to install it on our computer.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=63)** If you're planning on uploading your work to a Power BI cloud account, like Power BI Pro, or Power BI Premium, I recommend checking the version currently used from the Microsoft Documentation you see on the screen.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=76)** If we scroll down this page, we see that as of the recording date for this course, the Power BI version used for models uploaded to the cloud accounts is version 3.4.4 for R.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=89)** You can use the same version to follow along, but you can also use a newer version, if you check the documentation page and this version number has been updated.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=99)** If you use a newer version of R will often still work in Power BI, whether that's running the model itself or creating graphics.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=107)** However some functionalities and libraries or packages may not work, so you want to be careful about using other versions just in case.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=115)** It's important to note that you can have more than one version of R on your computer, you just need to specify the version for Power BI desktop or for RStudio to connect to.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=127)** The latest version of R's easy to download from the main R page, but if you want to use older versions, we'll search for them or navigate to this webpage containing a list of the older versions to download on the screen.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=141)** We can select to download 3.4.4 directly from this website because that's the version we saw that we can use with Power BI, when it's uploaded to the cloud.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=153)** However, you can still use the latest version in this case 4.1.1, if you would like.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=160)** For our R modeling we're mostly going to be using the built-in R functions, but we'll also use an external library like mlogit.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=167)** There are a lot of R libraries available for public download, mlogit is just one of them, but we'll be using this for some of our regression modeling in this course.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=178)** There are a few different ways to download R libraries to our computer.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=182)** One way is through the RGui for this particular version of R you see on the screen.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=188)** Note that it can be any version of R, these R console window looks the same for all of them.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=194)** Once we open the RGui, we can now run a command line, to install the package.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=202)** We'll type in install.packages, and then we'll put the name of the library within the quotation marks in the screen.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=211)** In this case, we'll type in "mlogit" close the quotation marks and close the bracket.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=217)** It's key to type in the command exactly as we see it on the screen, even if we forget the quotation marks or we don't put the S on the end of packages, the R command line won't run.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=229)** Once we type in this command, we hit Enter to run it.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=234)** We'll then select our R current location, from the available locations listed, for the CRAN mirrors on the screen.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=242)** My own closest location is Texas, so I'll select this from the list.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=249)** You'll want to use the location closest to you though, once we hit OK we see the package installs automatically.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=260)** Once the package properly installs, we'll see the notifications below to indicate the library has been installed successfully.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=268)** One other technicality to note when you're using R, is that you'll want to specify the RStudio version the version of R specifically that you want to use directly in this IDE.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=281)** Because Power BI uses an older version of R then you might use in some of your models.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=287)** If you run into issues with packages perhaps not working, you can change the R version directly in RStudio, by going to the Tools menu, then selecting the option at the bottom for Global Options.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=302)** We can then change the version used by selecting the Change button to the right of the folder path.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=311)** You want to select the third radio button down, and then you'll select the particular version you want to use let's say the 64 bit R version of 3.4.4.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=324)** If you want to use another more recent version of R you can select that from the list as well.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-r?u=76281980&t=330)** We'll confirm our options, and then we will scroll to the bottom of our Global Options menu, and hit OK, once you confirm the R package you wants to use you'll want to close out of RStudio and reopen it, to use the selected version that you just updated it to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (9), bi (9), [[RStudio]] (8), cloud (3), hit (3)
> **UI Navigation:** scroll down (2), select the (2), click on (1), open the (1)
> **Versions:** 3.4.4 (2), version 3 (1), 4.4 (1), 4.1.1 (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** ide (2), cran (1)
> **Warnings:** note that (2), be careful (1)
> **Prerequisites:** install (3)
> **Tools:** command line (2)

#### Configuring R in Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=0)** - In this course, we're going to leverage Power BI to explore how to make logistic regression models more scalable and accessible.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=8)** Power BI is a Microsoft business intelligence tool enabling a data driven culture across an organization.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=16)** I personally think defining it as a communication tool, gets us thinking about how to maximize its impact across the end users.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=25)** You can learn more about Power BI on Microsoft's homepage you see on the screen.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=31)** Power BI Pro and also Premium are subscription services that enable us to share analysis with end users, as well as schedule automatic dataset refreshing.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=43)** Power BI Desktop is a free version you can download to your own computer to develop and design data models and interactive visualizations.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=53)** For this course we're using Power BI Pro account, to share work and refresh our data.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=58)** You'll need an email address specific to your organization to sign up for any of these service accounts.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=64)** But your organization may have passed to take care of this for you.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=68)** On the Power BI webpage you see on the screen, you can see the available service accounts by scrolling down.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=76)** We can see these options include Power BI Pro, Power BI Premium and Power BI Mobile.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=83)** In this course we're mostly going to leverage Power BI Pro as well as, use Power BI Desktop to develop our models.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=91)** If you don't already have Power BI Desktop installed on your computer, the link to download the most recent version is quite easy to find, on the Power BI section of the Microsoft website.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=102)** Check the limitations of your computer to determine what version you should download, but it's a pretty straightforward process otherwise.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=110)** You simply click on the link to download Power BI Desktop which is Try Power BI for free, and your computer will automatically start the download process.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=123)** To use R directly in Power BI Desktop, you'll first need to install the version of R that works with the Power BI cloud accounts.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=131)** You'll also need to install any libraries or packages necessary to run the model in R.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=137)** In the video for installing R, in this chapter, you can see how to install the, the version of R we're using and also the libraries.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=146)** Lastly, you'll need to enable R scripts directly in Power BI Desktop.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=150)** Once you upload your Power BI Desktop file, denoted with the PBIX extension, the R scripts will run from the Power BI cloud account instead of your own computer.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=163)** Once you've downloaded R in Power BI Desktop, you can enable scripts for R by going to the options menu in the file section and selecting options and settings, we'll then select options.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=181)** We'll then select the R scripting option on the left side of the screen.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=186)** We can choose the R directory that we downloaded the version, we want to use to our computer.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=193)** You can set up a new R home directory by selecting browse and choosing the folder and file paths for your own R directory.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=201)** Once you've selected this option, you want to confirm it, by selecting okay at the bottom of the screen.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-r-in-power-bi?u=76281980&t=209)** Once you select this option, you'll close out of Power BI Desktop completely and reopen it to enable R scripts to run within the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (23), bi (23), [[Microsoft]] (3), data (3), cloud (2)
> **Prerequisites:** install (3), you'll need (2), set up (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (2)
> **Env Vars:** pbix (1)
> **Exercise Files:** download the (1)
> **Speakers:** - in (1)


### 1. Distributions and Probabilities

[↑ Back to Table of Contents](#table-of-contents)

#### Introducing AI and logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=0)** - [Instructor] Artificial intelligence or AI, as it's often known, uses computer algorithms to replicate tasks normally performed by humans.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=9)** Examples of these tasks include activities like visual perception, speech recognition, and decision-making.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=16)** Statistics measures the relationship between input variables and known outcome labels for existing data.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=23)** In AI algorithms, we want to predict the outcome labels for new data, using the statistics we calculated from the existing data.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=32)** Machine learning is a type of AI algorithm that uses feedback loops to continuously update the model.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=39)** Types of machine learning algorithms include classification, regression, clustering, and anomaly detection.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=46)** Regression modeling lets us solve parameters representing the relationship between the inputs or independent variables and the outcome label, or dependent variable on existing data.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=58)** We can then use these estimated parameters to predict or forecast outcome labels on new data.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=65)** There are several different types of regression models, but two of the most common are linear and logistic regression.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=73)** Linear regression shows the relationship between the independent input variable and the dependent variable for the outcome with a straight line, while logistic regression displays this relationship with an S shaped sigmoid curve.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=88)** The outcome labels or dependent variable in linear regression are continuous numeric values.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=94)** The outcome labels and logistic regression are also numeric, but they're discrete instead of continuous, which means we'll see whole member predictions instead of decimals, for example.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=105)** There are three main types of logistic regression, binomial, multinomial and ordinal.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=111)** Binomial logistic regression is a classic linear log model with two outcome labels, zero and one, for example.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=119)** Multinomial logistic regression also has discrete outcome labels, but instead of two outcomes, it has three or more potential outcomes, but the order of them doesn't matter.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=131)** Ordinal logistic regression is another type of logistic regression model with three or more possible outcomes, but order matters in these models.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/introducing-ai-and-logistic-regression?u=76281980&t=140)** Examples of real world problems that we can apply logistic regression frameworks to include credit scoring, medical testing, and gaming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (9), data (5), ai (3), [[Algorithms]] (3), [[Statistics]] (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Differentiating between odds and probabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=0)** - [Instructor] Sometimes we may use the terms statistics and probability interchangeably under the wider umbrella of mathematics topics.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=8)** But they're not actually the same.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=10)** Statistics is when we collect, analyze, interpret, and present findings in our data.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=16)** Conversely probability is the calculated numerical likelihood of an event occurring.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=21)** They're not standalone entities though.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=24)** Within statistics, we can use probability theory to draw conclusions from our data.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=29)** Let's focus on a probability example.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=32)** Let's say we have 10 marbles where one of them is orange and the remaining nine are blue.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=37)** The formula for the probability of a certain event occurring is equal to the number of given outcomes we're trying to measure, divided by the total number of all outcomes.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=49)** The probability in the marble is orange equals the total number of orange marbles divided by the total number of marbles.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=56)** This equals 1 divided by 10, or a 10% chance the marble is orange.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=62)** Conversely, the probability the marble is blue equals the number of blue marbles divided by the same total number of marbles.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=70)** This equals 9 divided by 10 or a 90% chance the marble is blue.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=75)** At first glance, odds are sometimes mixed up with probabilities, but they're calculated quite differently.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=82)** The odds for a given outcome are the probability that a given event occurs divided by the probability this event does not occur.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=91)** The odds for getting a blue marble equals the probability the marble is blue, divided by the probability the marble is not blue.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=100)** In this case, the probability the marble isn't blue is the same as the probability it's orange, but that's not the case if we have more than two colors.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=110)** The odds of getting a blue marble equal 0.9 divided by 0.1, which equals 9.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=116)** This means we're 9 times more likely to draw a blue marble than an orange marble.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=122)** Conversely the odds for drawing an orange marble equals the probability of drawing an orange marble, divided by the probability of drawing a blue marble.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=131)** This equals 0.1 divided by 0.9 or a 1 out of 9.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=135)** To convert odds to probability P, we divide the odds by 1 plus the odds.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-odds-and-probabilities?u=76281980&t=143)** The formula for calculating odds from probability P, equals P divided by 1 minus P.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (17), [[Statistics]] (3), data (2)
> **Versions:** 0.9 (2), 0.1 (2)
> **Speakers:** - [instructor] (1)

#### Differentiating between distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=0)** - [Presenter] Let's say that we have data point observations and we're looking to analyze their distribution for a single field.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=7)** One way we can do this is through a histogram or density chart.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=11)** The chart shows the distribution of data points by their value, and the frequency at which they occur.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=19)** The chart we see looks very much like a Gaussian normal distribution curve, where the most frequently occurring values are in the middle, approximately where we would see the mean.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=30)** We see the other values distributed around the mean, but not in the same frequency.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=35)** The goal of this course isn't to become an expert statistician, but rather to understand how to spatially understand the data that goes into logistic regression.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=45)** The classic linear logistic regression model has two actual outcomes.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=50)** Zero or one, for example, which make it a binomial model.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=55)** The Bernoulli distribution is a commonly used mathematical distribution that says that for a two outcome distribution, there are two probabilities, P and Q, which equals one minus P.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=69)** Think of this distribution like a coin toss, where the outcomes are either heads or tails.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=74)** If the coin is evenly weighted, then the mean or the expected outcome for these coin tosses will be 0.5.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=83)** If the coin is not evenly weighted, we'll see the outcome somewhere between zero and one, but not equal to 0.5.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=91)** The mean itself is normally distributed, but the outcomes are not.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=96)** If we put the Bernoulli distribution on a chart, notice there are two outcomes for the model, but the distribution for the outcomes themselves isn't normally distributed.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=106)** We see a cluster of values around the probability of the outcome of zero.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/differentiating-between-distributions?u=76281980&t=111)** Conversely, we see a cluster of values around the probabilities for the outcome of one, hence why the Bernoulli distribution is for a binomial model with two outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Logistic Regression]] (2), [[Probability]] (1)
> **Versions:** 0.5 (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Calculating logs and exponents
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=0)** - [Instructor] Along with statistics and probability, exponents and logarithms are two important concepts in logistic regression models.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=9)** I think that even if this isn't a new topic to you, it's well worth reviewing before we start creating our models.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=17)** Let's say we're solving for the value of X, which equals the base of 10 raised to the third power, which gives us 1,000.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=26)** Logarithms or logs for short, effectively work as a reverse of exponent.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=32)** A logarithm lets us solve for the exponent we want to put on the base of a number to get a certain result.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=40)** For a base 10 logarithm on the number 1,000 the result is three, for example.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=47)** In logistic regression modeling, we won't be working with base 10 calculations, but instead we'll be working with one of the most important numbers in mathematics, Euler's number or E for short, which is a mathematical constant.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=63)** It's equal to one plus one divided by the factorial of n as it goes to infinity, which equals roughly 2.71828 or 2.72 if we want to round it to two decimal places.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=80)** Raising Euler's number to an exponent is the same thing as raising approximately the base of 2.72 to an exponent.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=88)** For example, Euler's number raised to the second power equals roughly 7.39.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=95)** Logarithms also work with Euler's number and specifically they're called natural logarithms or natural logs for short.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=102)** The exponent we raised the Euler's number to get a result is the result we get when we take the natural logarithm at this result.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=111)** Often log and natural log are used interchangeably.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=114)** So be careful because this often depends on the context of what you're talking about or the programming language we're utilizing.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=123)** Let's see how this works in Excel.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=127)** We have some values in the first column for base 10 and Euler's number, in the column next to that, we have the exponent we want to raise the number to, and to the right of that, we have some other columns we're going to fill in with our exponent and logarithm calculations.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=145)** In the results one column, we'll set the equation equal to the base in column A, raised to the exponent in column B.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=157)** We see the result is 100 and we can copy the rest of the formulas down.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=162)** For the formulas that use Euler's number as the base, we can set up this calculation directly using the Excel exp function which raises Euler's number to the parameter value we pass to it.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=176)** We'll create a new formula and we'll use the exp function and we'll raise it to the value in column B.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=185)** We see the formula returns the same result as the column next to it and in a more efficient way.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=191)** Now let's take the log of each of these results and it should return the same values we see in the exponent in column B.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=200)** Let's start by typing log into the formula bar.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=204)** We see a list of potential functions pop up.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=207)** There's a log function at the top where we can specify the base, let's instead use the log 10 function, which specifies 10 as the base.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=218)** We can hit Tab to select the function and we will reference our results in column C.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=225)** We see this returns the same results as we see in column B for the exponent, replacing on the base.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=233)** Let's copy this formula down to the cell below.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=237)** Now let's calculate the natural log of the results for the last two rows.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=241)** If we start typing in log, we don't see a specific natural log function pop up.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=248)** This function doesn't start with a string of letters, log like the base log 10 or of our choosing, instead we'll use the LN function, which is short for natural log and we'll reference the same results in column C.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=266)** We now see our log results in column E have the same result as the exponents in column B, our calculations for the logistic regression model, will use Euler's numbers to calculate logs and exponents.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-logs-and-exponents?u=76281980&t=279)** It's important to note that we can't take the log of a negative number or zero, so anything less and/or equal to zero, but the result of taking a log of a number between zero and one is a negative number as we see in our calculations, and this will be an important concept as we build out our logistic regression models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (4), power (2), [[Microsoft Excel|Excel]] (2), next (2), [[Statistics]] (1)
> **Versions:** 2.72 (2), 2.71828 (1), 7.39 (1)
> **Definitions:** is a  (2), short for (1)
> **Analogies:** for example (2)
> **Warnings:** be careful (1), note that (1)
> **Prerequisites:** before we start (1), set up (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Sigmoid curve
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=0)** - [Instructor] Regression is one type of model, but there are many different types of regression models, including linear regression and logistic regression, which is the focus of this course.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=10)** These models have different curves that we can visualize in a two dimensional space to see how they fit.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=17)** A linear curve in a two dimensional space is a straight line between the independent variable values on the X axis and the dependent variable values on the Y axis.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=29)** Conversely, a sigmoid curve seen in logistic regression has an S shaped curve in the same two dimensional space.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=36)** In order to model the relationship between these points in a linear regression, we use the standard formula for calculating a straight line where the dependent variable on the Y axis equals the intercept A plus the slope B multiplied by the X axis values for each data point.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=56)** Conversely, the sigmoid curve uses the function one divided by the quantity of one plus Euler's number raised to negative one multiplied by the quantity of the intercept A plus the slope B multiplied by the input on the X axis.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=74)** Lastly, the output for the linear curve can be any real number between negative infinity and infinity because the input X values can be any value between negative infinity and infinity as well.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=88)** Conversely, the sigmoid curve is between zero and one exclusive, which means the Y outcome can get very close to zero and one, but it doesn't actually equal these values.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=101)** Let's go into Excel to see how the linear and sigmoid curves compare.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=106)** I've already added starting numbers to the sheet for the independent variable X ranging from negative 10 to 10.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=113)** I also added some starting parameters for the slope and intercept denoted as B0 and B1, I initially set the intercept to zero and the slope to one, but we'll change these values once we do the calculations.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=128)** In the Y linear column, let's calculate the linear curve, which equals the intercept plus the slope multiplied by the X value.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=141)** Our result is the same as the input of X because the slope is one and the intercept is zero.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=147)** Now let's copy this formula down.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=149)** We would expect to see the same value in the Y linear column as we do in the X column, but we don't.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=157)** If we go into one of our formulas and click into it, we see in the calculation references the X value and the proper row, but the slope and the intercept values move down as we copy the formula down.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=173)** We want these values fixed.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=175)** So let's go back into the cell at the top and fix our intercept and slope value so they don't move when we copy the formula down.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=188)** On many computers, we can use the F4 key to fix these cells.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=191)** When we copy the formulas to other cells in the spreadsheet, having down the updated formula makes the rest of the outcomes in this column so the calculated Y linear values match their counterparts in the X value column.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=208)** Now let's calculate the values for the Y sigmoid curve.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=213)** In this column we'll create an equation where we divide one by one, plus the EXP function raised to the negative one, and we'll multiply it by the value in our Y linear column.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=229)** Now let's visualize both these curves directly through Excel's built-in graphing options.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=234)** Let's select the first two columns for X and Y linear we'll, then choose to insert and we'll select the top scatterplot option.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=245)** The scatter plot automatically displays.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=247)** We see the curve is a straight line with a slope of one, and an intercept of zero.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=253)** Let's add another scatterplot to the sigmoid curve in the same view.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=258)** To select two columns of data that aren't directly next to each other.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=263)** We can hold down the control key as we select both columns, this selects non-contiguous cells in our Excel sheet so we can use them in a chart.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=275)** We can then add a scatterplot for these data points in the same way we did for the Y linear points.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=285)** We now see the two curves side by side.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=288)** We see the Y sigmoid curve has an S shaped squeeze between the Y values of zero and one, without exactly equally those numbers.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=297)** The sigmoid curve intersects the Y axis at 0.5, instead of zero when X equals zero, because we can't have a sigmoid curve that equals zero.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=309)** This is the inflection point of the sigmoid curve.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=313)** Conversely, we can see that by changing the intercept value from zero to one, this changes, both the linear and sigmoid curve, but in different ways, the sigmoid curve shifts horizontally while the linear curve shifts vertically.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=331)** Conversely, let's see what happens if we change the slope value from one to three, this changes the shape of the linear curve, as well as the sigmoid curve, but in different ways, the sigmoid curve now has a steeper curve around the inflection point, but it reaches the results closer to zero and one much sooner than we saw before.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/sigmoid-curve?u=76281980&t=351)** These values aren't exactly zero or one, but because of rounding, they often look that way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Microsoft Excel|Excel]] (3), [[Linear Regression]] (2), [[Logistic Regression]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (2)
> **Env Vars:** exp (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### Utilizing training and testing data sets
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=0)** - [Professor] One of the most important facets of running machine learning models like logistic regression is splitting the entire dataset into two pieces.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=9)** The training and the testing datasets.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=12)** Typically 80% of the data is training data.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=16)** And the remaining 20% is testing.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=18)** Training data sets, let us build models by solving for the model parameters to fit.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=24)** However, we're not running our final model on the training dataset, the testing data set is what we use to validate the model, in order to best model data in the real world.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=35)** We want to hide this testing data set away until we're ready to test the model out with it.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=42)** If we fitted our model perfectly on our training data, all the data points would be mapped perfectly to their actual outcomes.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=50)** This means if we ran the model on our training data set, the total error loss would be zero because the model would perfectly fit every point.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=60)** However, algorithms deal with ambiguity.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=63)** And we want to think about making the model a good fit, but not a perfect one.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=67)** So we can actually use it in the predictions for our testing data.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=72)** We want to take the model we built using our training data set and apply these variables and parameters we selected, to run the model on the testing data set to validate it.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=84)** This means our training data set will have a higher loss error, but the testing data set will have much more reasonable error because we're not exactly fitting the model, but rather trying to find the best overall approximate fit.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=99)** There are various ways to split the data into these two separate training and testing data sets.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=105)** And the case of our model.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=107)** I took all the data points from the ESPN data and split them randomly into 80, 20 proportions using a randomized variable between one and five as an Excel function.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=119)** I then sorted a 1/5 of them to the testing data set and the remaining 4/5 the 80% to the training data.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=129)** I've added these two data sets the training and testing to our binomial model.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=136)** The key to modeling with this split data set is we don't want to peak the testing data set until we felt our model using the training dataset.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=145)** There are many ways to split data, but for the purpose of this course, because this isn't necessarily a focus of our logistic regression modeling.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/utilizing-training-and-testing-data-sets?u=76281980&t=154)** I wanted to make it as simple as possible so we could start our modeling process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (24), [[Logistic Regression]] (2), [[Algorithms]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** espn (1)
> **Speakers:** - [professor] (1)


### 2. Binomial Logistic Regression

[↑ Back to Table of Contents](#table-of-contents)

#### Calculating linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=0)** - Games like basketball are great examples of logistic regression models, but how do we know that's the case.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=7)** In our basketball dataset, I added a new sheet to note at linear X one, where I added the independent variable X one for the points scored in the first column and the dependent variable Y for the game outcome in the second column.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=23)** Notice the values and the outcome the win-loss column are either one, which means they won or zero which means they lost.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=32)** We could set win to zero and loss to one.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=35)** We just need to be consistent with the rest of the calculations in the model, as per the way we originally classified them.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=43)** It looks like this is an example of logistic regression, but let's see what this model looks like by running the standard linear regression calculations on these numbers.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=53)** If you look at the formulas in these cells, you can see they referenced the training data set.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=57)** We don't have to put our models in separate sheets within Excel, but I find doing this keeps my work more organized.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=64)** Let's start by selecting points scored as the independent variable we'll analyze against the win-loss dependent variable outcome in a two dimensional space.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=75)** Well, first create a scatter plot.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=78)** Notice the points are tightly packed into a range of values for the points scored along the X axis, but there's only two outcomes for the y-axis zero and one, and they're clustered together quite closely.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=93)** We also see an overlap between the points scored in the outcome of the game.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=98)** This occurs because sometimes even if a team scores a lot of points, if they're playing a tougher opponent, this may not be enough points to win the game.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=106)** If we add a trend line, the scatter plot by selecting the plus icon and selecting the trend line, we see that the line is a linear line through the points.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=119)** We see it estimates the relationship between the independent variable and the X-axis and the dependent variable on the Y-axis.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=128)** It's a straight line.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=129)** It doesn't appear to be a good fit for our model.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=132)** We want our model to show the relationships between either zero or a one, instead of outside of this range.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=141)** Now let's calculate the slope for the best fit line for this model to see what it gives us.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=148)** We'll use the Excel function slope, and we'll then reference our dependent variables, first the known Ys or the known Y.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=158)** And then we'll reference our known Xs, which is our one independent variable.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=165)** Let's also calculate the intercept.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=168)** We use the intercept formula in Excel and we'll reference the same Y and X values that we did for our slope calculation.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=180)** - We'll make a copy of our scatter plot and put it at the top.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=185)** If we take a closer look at the trend line compared to the slope and intercept which is calculated, we see the trend line calculates its best fit, using the linear regression slope and intercept values because the linear regression model yields results outside our expected outcome range between zero and one.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=203)** We know it's not a good fit for our own data.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=204)** So let's use logistic regression instead.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-linear-regression?u=76281980&t=207)** Unfortunately, we can't solve directly using formulas like this for the logistic regression model, but we can model it in Excel, which we'll do using solver.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (4), [[Microsoft Excel|Excel]] (4), game (3), [[Linear Regression]] (3), data (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - games (1), - we (1)

#### Working with the logit model
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=0)** - To solve logistic regression model, let's start by looking at the logit function, which is a quantile function for logistic regression models that's useful in data transformations.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=10)** It's the calculated reverse of the standard logistic function associated with the sigmoid curve, because it's the inverse of the probability function, it's often called the log-odds function.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=23)** Let's say P represents the calculated probability, logit equals the inverse of the standard logistic function.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=32)** We define it as the natural log of P divided by one minus P.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=37)** The logit or odds of our logistic regression model equals the interceptor bias, represented as the B nought value plus the B one value for our first independent variable multiplied by the independent variable plus B two, and so on.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=56)** We include all the variables we want to calculate in the current iteration of the model, so we can have more than one independent variable.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=65)** Once we calculate the logit value, we can solve for the probability by setting the logit value equal to the logit formula that uses the probability number.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=76)** We'll exponentiate both sides of the equation first, which reverses the log on the right side of the equation to solve for the P value.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=85)** Solving for the probability in our equation represents the predicted outcome for the given inputs in the model that we're solving for.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=93)** The probability equals one divided by the quantity of one plus euler's numbers raised to the negative logit value.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=101)** In Excel lets calculate logit first. In a new sheet I already added to the binomial file titled logistic X one.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=110)** To make it easier to see the calculations I already set up the X one and Y columns in the same way as the linear model.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=119)** It's important to note that we want to make sure our dependent variables are zero and one to represent losses or wins instead of W or L, because otherwise the model won't work.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=131)** If you currently have non-numeric outputs in your dependent variable, you want to convert them first into zeros and ones before running the model.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=139)** It's important to note that whether you sign them zero or one isn't important, but you want to be consistent with how you label these outcomes.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=147)** Lets first add our coefficients to the model, which we'll call B zero and B one.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=155)** And in particular, these are the coefficients for the intercept is B nought and B one is going to be the points scored.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=165)** I'll just put points for short.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=167)** We're going to reference these coefficients as we set up the calculation, we'll initially put point zero zero one in both of these coefficient values, don't worry if this seems odd.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=180)** Assigning initial values to our coefficients, lets us check that we're properly setting up the calculations.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=187)** Once we run the model using solver, these coefficient values will update to the values that solve this logistic regression model.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=195)** Next let's add a new column called logit.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=198)** The formula for these logit values is equal to B nought plus B one multiplied by our X one value, we'll also fix our J two and J three cells so the parameters, these coefficients stay fixed as we copy the cell's formula down.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=223)** Next, let's create a new column called ilogit.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=227)** Now we're going to use the exp function to raise euler's number to negative one multiplied by our logit value.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=239)** Now let's create a new column called predicted, which we'll use to calculate the probabilities of the outcome labels for this logistic regression model.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=249)** The (indistinct) value we calculated so far represents the odds for the model.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=253)** So we want to use the formula to convert odds into probability.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=258)** We'll take our (indistinct) value and use it in our probability formula by setting equal to one divided by the quantity of one plus our ilogit value.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/working-with-the-logit-model?u=76281980&t=271)** We've now created the formulas to set up for logistic regression model so we can use it to optimize the coefficient parameters when we run solver to optimize our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (8), [[Logistic Regression]] (5), next (2), data (1), [[Microsoft Excel|Excel]] (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Warnings:** note that (2)
> **Definitions:** is a  (1)
> **Speakers:** - to (1)

#### Calculating log likelihood
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=0)** - [Instructor] Before we calculate the log likelihoods for a logistic regression model, let's think about how we would calculate the mean for a binomial distribution.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=9)** The mean value for a binomial distribution with two outcomes like our model equals the probability, P that an event occurs multiplied by one plus the quantity of one minus P multiplied by zero.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=25)** The second term of the formula goes to zero so the expected outcome or mean of this model equals the probability P.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=33)** In order to ultimately optimize the coefficients in our logistic regression model, we first need to calculate the log likelihood for each data point and then sum them up and we'll minimize the distance when we solve the problem.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=49)** I find the log likelihood function makes the most sense if I separate it into the actual outcome and the alternative outcome terms.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=58)** In the first term, we multiply the actual outcome by the natural log of probability P for this outcome.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=66)** We then add the other alternative outcome possibility multiplied by the natural log of the quantity of one minus P or probability.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=77)** One way to visualize log likelihood is to think of how we would fit a line through the theoretical data points for logistic regression.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=85)** Let's say we place the sigmoid curve in our logistic regression model through these data points that we want to best fit a line to.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=92)** We can then calculate the log likelihood values for each of these data points.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=97)** While these distances don't actually represent the actual distance from each data point to its predicted label on the curve, we can see that points that are farther away from their predicted labels, the longer orange lines have a much higher log likelihood values than those that are very close to the predicted labels.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=117)** When we optimize our logistic regression model to get the solutions for these coefficients, we ultimately want to minimize the total sum of all these log likelihood distances.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=130)** When we do these calculations in Excel however, we'll see the log likelihood values don't represent actual distances, but rather relative distances to solve the model with.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=141)** This sigmoid curve represents the optimized logistic regression model that fits within these 10 data points.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=149)** One approach that I think makes it easier to understand how to calculate log likelihoods is by adding a few extra columns in our sheet to reference the different components of the log likelihood formula.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=163)** Let's first add a column in the space C which we'll call alternative Y which means this is the opposite outcome of what we have in our actual outcome.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=179)** Now let's create a conditional formula that says that if Y is equal to one, we'll set our alternative outcome equal to zero otherwise the outcome will be one.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=192)** And we'll copy these formulas down.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=195)** Will then create another column called one minus P.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=200)** We could write out prediction or call this p-r-e-d to make that shorter.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=209)** And we'll set this equation equal to one minus the value in our predicted probability column.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=217)** Now we'll add another column called log likelihood.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=222)** We'll first multiply the actual outcome in the Y column by the natural log of the predicted value column.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=234)** We'll then add another term to the formula which multiplies the alternative outcome by the natural log of one minus P or one minus the predicted value we have in the column to the left of it.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=251)** We now see the log likelihood values for each of the data points in the existing training dataset.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=258)** Let's sum all these log likelihoods up into a single value at the top of the column.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=267)** I'm going to note that this is the sum LL then I'm going to highlight this in a blue, 'cause this is going to be important in our model later.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=281)** We've now set up the formulas and parameters for our logistic regression model in Excel.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=286)** However, we haven't optimized it because we haven't solved for our coefficients in the model yet.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=293)** To do so we'll maximize the total log likelihood value to minimize the total loss because it's a negative number.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-log-likelihood?u=76281980&t=301)** Once we run the solver, we'll have coefficient values that will update the rest of the formulas we already have in the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (7), data (7), [[Probability]] (5), [[Microsoft Excel|Excel]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (1), make (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Constructing MLE
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=0)** - Unlike the linear regression model where we can solve directly for the intercept and slope values using the least squares method, we can't do the same in the logistic regression model.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=10)** This means we need to use a methodology called the maximum likelihood estimation, or MLE for short, to solve for these coefficient parameters.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=20)** The MLE is a probabilistic framework used to estimate the coefficient parameters in the classification models like logistic regression.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=29)** To solve the logistic regression model using MLE, we want to maximize the sum of the log likelihood values in the existing calculations.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=39)** Let's visualize what maximizing the MLE looks like.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=44)** On a two dimensional plane, we can put our coefficients on either axis, but for this example, I'm going to put the bias, B not, on the X axis and the B1 coefficient on the y-axis.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=58)** Let's say we calculated the log likelihoods for both of these coefficients and summed them up to get a total number.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=65)** We can place these some totals for the log losses on the two dimensional matrix.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=69)** One way to visualize which coefficients have the lowest log loss is by adding a color scale to this existing matrix.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=79)** We see the darker colors as higher values, where we were maximizing the negative sum total, which gives us an idea of this minimized loss total and at which coefficients it occurs.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=90)** To visualize the log loss function, let's start turning our two dimensional visual, our matrix, into a three-dimensional one by first turning the shape on its side.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=101)** We can visualize the maximized log total as the highest point in this three-dimensional space at the top of the bowl shape.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=109)** Where this highest point occurs is where the log loss is the least and there are X and Y coordinates, in this case the B not, and B1 values of the coefficients to solve this model.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=121)** This isn't an exact way to solve the model, at least the way we see it here, but it lets us visualize what the optimized solution looks like.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=129)** Now let's replicate this approach in our Excel logistic regression model.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=135)** I've already created a new sheet called Logistic X1 MLE where we'll approximate our coefficients before we run the model.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=143)** Notice our total log likelihood is a very negative number.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=147)** We want to maximize this number so it's the least negative.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=151)** I've already duplicated this page so we can approximate our calculations in a separate matrix table from the model configurations we've done so far.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=161)** We can nest the formulas for logit, e logit, and the predicted probability iteratively inside the log likelihood calculation to save some space on our sheet.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=172)** But first nest our logit calculation inside our e logit calculation.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=181)** Next, we'll put our e logit value into our predicted column.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=193)** And we see that when we drag the formulas down, we get the same result.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=197)** Finally, let's put the probability formula into our log likelihood calculation.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=212)** And we're going to take our alternative result.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=218)** We can use the same alternative result.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=221)** In this case, what we want to do is we actually want to update this particular calculation.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=228)** So we'll copy one minus the probability and we'll place it in the second function for the natural log.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=241)** And then we're going to take our probability and put it in the last term.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=251)** So when we copy the formulas down, we get the same log likelihood sum at the top, which is exactly what we want to see.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=258)** Now we can remove the first four columns.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=264)** I'm just going to delete them all so we know that they're still there, but we've got all our log likelihood calculations in a single column.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=272)** Now let's copy over our entire column H into the spaces to the right of it.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=281)** I've already added the coefficient values for B not and B1 in the headers of the columns to the right.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=292)** Before we copy over the sum, we also want to make sure that we fix the values for X1 and column B in this case, which is Y, so that when we copy them over, they don't all move.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=313)** So we still reference these same three columns when we copy the formulas over.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=321)** So now let's copy this entire column and we'll place it in all these columns next to it.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=330)** There's actually a hundred different parameter coefficient options that I've set up.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=339)** We want to change our reference so we're using the intercept up and the B1 and the B0 values at the top.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=352)** So in this case, what we see is that we're keeping these fixed at F2 and F3.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=358)** So we actually want to update our formulas so that they use H instead.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=366)** And we want to remove H as fixed column.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=371)** We're going to remove the dollar sign to do that.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=382)** So now let's actually remove this column next to it because it doesn't have any parameters at the top.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=391)** Let's copy this column over again.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=397)** We want to determine roughly where we think this maximized sum will occur, where the total log loss is minimized by being the least negative.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=407)** Let's add a summary table to show how these sum of the log likelihoods look compared to each other.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=417)** Let's put B0 and we'll put B1 in the rows.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=424)** And then this is going to be negative 10, negative 9, and then so on.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=431)** There's a few different ways we can calculate these totals, but using the SUMIFS function is a quick way to let us tabulate the numbers in our example.
>
> **[7:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=440)** In the value space, we'll use the SUMIFS function to calculate the total log likelihood for each of these inputs.
>
> **[7:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=459)** I'm just going put B0 as a placeholder for now and then do the same with B1.
>
> **[7:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=469)** So now we want to take our formula and for the B not values, we will set them equal to the column header.
>
> **[7:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=479)** And we're going to fix the rows, so we'll put a dollar sign before the 4.
>
> **[8:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=485)** And then for our B1 values, we'll fix the columns in that case.
>
> **[8:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=491)** So once we fix the cell references, let's copy down the formula and we want to fix this row.
>
> **[8:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=501)** We can see that we definitely do have values.
>
> **[8:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=504)** They're not zeros.
>
> **[8:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=509)** And we'll do the same for other parameter references.
>
> **[8:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=528)** Now when we copy the formula down we can see the sum of the log likelihood changes as we go between these different parameters.
>
> **[8:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=536)** We'll copy the formulas over for the rest of the table.
>
> **[8:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=539)** Lastly, let's add color formatting to our matrix tables so we can visually see where our optimized solution has its parameter values solved at.
>
> **[9:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=549)** We'll first highlight our table, and then we'll go to home and select the conditional formatting options.
>
> **[9:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=561)** I'm going to make the darkest value, the highest value, a dark blue.
>
> **[9:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=568)** And the lowest value, I'm going to make that almost white.
>
> **[9:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=572)** I'm going to go the other way.
>
> **[9:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=578)** We see our summary table shows the B not values in the columns and the B1 values in the rows.
>
> **[9:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=585)** We're looking for where the log loss for the MLE is the least, which means we're looking for the maximum value of all these coefficient combinations.
>
> **[9:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=596)** If we color code the table as we see here, we're looking for the darkest color in this table of possible coefficients.
>
> **[10:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=604)** We see that for when B not equals negative 6 and B1 equals 0.09, the total log likelihood sum is maximized, meaning it's the least negative.
>
> **[10:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/constructing-mle?u=76281980&t=616)** When we solve our logistic regression model for the bias and independent variable coefficients here represented as B not and B1, we would expect the result to be around this combination of coefficient variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (5), [[Probability]] (4), next (3), [[Linear Regression]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** mle (6), sumifs (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), select the (1)
> **Versions:** 0.09 (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)

#### Solving MLE
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=0)** - [Instructor] Unlike the linear regression model, we can't solve for the coefficients of the logistic regression model directly.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=7)** Instead, we need to run the Solver Excel add-in with our existing logit model to determine the coefficients.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=14)** I recommend configuring the formulas in Excel completely before you run solver to get the optimized solution for this model or any other model in Excel.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=25)** There are four main components to think about when configuring models in the Excel Solver add-in.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=31)** The objective is the cell we're trying to optimize in the model.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=35)** The variable cells are the numbers we're letting the algorithm change for us to optimize the model.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=42)** The constraints are the limitations we give to the model.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=45)** And the solving method is the algorithm the solver use In the solver add-in, there are three different types of solving methods.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=54)** For our problem, we're going to leverage the GRG non-linear solving method.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=60)** GRG stands for generalized reduced gradient.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=64)** This algorithm solves for the decision variables, those variable cells in the model, by optimizing the function gradient or slope as the input variables, those variable cells, change.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=76)** We're going to run our logistic regression model through an R script to compare it to the solver results.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=83)** We'll use the generalized linear model, or glm, to solve for these parameters.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=88)** This is a function that's part of the built-in stats function within R.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=93)** The parameters for the R glm function for any type of regression model are the dependent variable, the independent variables, the data, and the family type.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=104)** In our model, we're trying to maximize the log likelihood by having the solver figure out for us which coefficients would solve the model that optimize the total log loss by maximizing it.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=118)** Let's make our decision variables, the coefficients, in yellow color.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=125)** Now let's access solver through the data tab of the top ribbon.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=130)** In the pop-up window, let's configure our models so solver can get a solution for us.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=136)** We'll first select our blue cell as the check diff we're trying to maximize.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=146)** Let's make sure that we have the max radio button selected in the objective.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=152)** Next, let's select the yellow cells as the changing variable cells we want the model to run.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=161)** In our solving models, we'll select GRG Nonlinear.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=165)** from the dropdown method for the solving options.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=170)** Now let's run the solver model.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=174)** Notice that our results look kind of odd.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=177)** We see that we've got kind of a skewed predicted numbers.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=183)** And the other thing is, if you remember from our matrix calculations, we see the log likelihood looks a bit lower than what it should be.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=193)** So we'll back into our solver and we'll update the model by unchecking make unconstrained variables non-negative.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=205)** And we can hit the solve button to run the model again.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=210)** Once we solve the model, we see the coefficients in the yellow cells have changed so they optimize the total log loss in the blue cell.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=219)** We've maximized this total.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=222)** We can also see the calculations, the logit, e logit predicted columns that roll into these predicted probability and log likelihood values that have been updated since we optimized the model coefficients.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=238)** The individual log likelihood values tell us how close our prediction is to the actual.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=244)** By trying to maximize this total log loss, we see how the log likelihoods with the lowest values have predictions close to the actual outcomes, while those with high values are the opposite.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=257)** Now let's run this model in RStudio.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=261)** I've already set up the path to import the CSV file containing the dataset, the training data, and I've assigned it to the variable df, which is short for data frame.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=273)** If you're using the exercise files in this course to run the model on your own, you'll need to update the folder path in the first part of the file path function so that it references your desktop folder instead of mine.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=289)** We can display the variable, if we run the entire code, we don't see any results.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=295)** What we want to do is add another line for df and run it again.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=301)** Now we see this data frame contains the columns we saw in our Excel file.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=306)** But notice there are no spaces between the column header names.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=311)** R replaced them with periods instead of spaces when it imported the data into RStudio.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=317)** We'll need to remember this when we set up our calculations, that the field names are slightly different from what we saw earlier in Excel.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=325)** Let's first create a new variable in R called logit, which we're going to assign the glm function to.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=333)** Now within the glm function, we want to first reference our dependent variable, the win-loss outcome.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=343)** You can just copy the name of the field from the console below.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=347)** Now let's put a tilde in our expression, which is this little squiggle line.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=353)** And we'll put our independent variable after our dependent variable.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=358)** We'll reference our independent variable for the points scored by copying the field name from the console.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=365)** You can reference fields in different ways, but this is just the easiest and most straightforward way to do it for our problem.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=373)** Next, let's add a comma and we're going to set our data equal to the df variable.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=382)** We already imported as a CSV file and we set it up as a data frame so we can just set it directly equal to the data.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=391)** Lastly, we want to add another parameter into the model where we set the family equal to binomial.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=401)** We'll make sure that parentheses close this expression.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=404)** And also, binomial goes in quotation marks.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=409)** Now let's run the model and we can just highlight everything and run it.
>
> **[6:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=415)** So notice the model runs, but we don't see an outcome.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=419)** We've assigned the glm function to the logit variable, but we haven't called the variable so we can see what the results look like.
>
> **[7:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=428)** We'll use the summary function on the logit variable to view the results.
>
> **[7:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=433)** We can just highlight this single line and run the code.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=437)** Now let's scroll up and we can compare the parameters.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=441)** We see that we have -6.19, or roughly -6.2, and close to .09 in our coefficient for the points team scored.
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=454)** Now let's check this against our Excel results.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=457)** We see the same results in our Excel solver as we saw in our RStudio results.
>
> **[7:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solving-mle?u=76281980&t=466)** This is exactly what we want to see so we can build the predictions from the logit variable we just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft Excel|Excel]] (8), [[RStudio]] (3), [[Logistic Regression]] (2), next (2)
> **Env Vars:** grg (3), csv (2)
> **CLI Commands:** make (4)
> **Prerequisites:** set up (2), configure (1), you'll need (1)
> **UI Navigation:** select the (1), dropdown (1), scroll up (1)
> **Definitions:** stands for (1), is a  (1), short for (1)
> **Versions:** 6.19 (1), 6.2 (1)
> **Cross-References:** earlier in (1), as we saw (1)

#### Predicting outcomes
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=0)** - Once we solve our models for the coefficient parameters.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=3)** We need to interpret the results for the logistic regression model In Excel model.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=8)** We already sell for the coefficients as well as the predicted outcomes as the calculated probabilities.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=15)** But in order to do this in R we need to leverage the predict function, which is another function within the R stats package.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=24)** The predict function has three input parameters that will pass into it.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=28)** The Logitech variable, we already calculated using the GLM function, the data frame, which we'll set equal to the new data that we want to add our predicted field to.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=39)** And the type right now, we have our predicted probabilities as values between zero and one.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=47)** You want to round the predicted values in both Excel and R to the nearest integer so we can analyze them later for the model fit.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=54)** We can do this in multiple ways in either application, but for this project, let's use the round function in Excel and the ifelse function in R to round predicted probability to the closest integer.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=69)** Let's add another column in our Excel file, and we'll call this predicted rounded.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=79)** We can use the round function in Excel to reference the predicted outcome.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=86)** And then we'll select zero as the second parameter of the function, because we want to round it to the closest integer.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=95)** We now see that if the probability is less than 0.5, it rounds down to zero.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=101)** Well, if it's over 0.5, we see it rounds to one in our studio let's continue to add to our logistic regression model that we've written in the R script.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=113)** We're going to add a new column to our data frame called "predicted", and we'll use the kerat that points to the left and a dash to assign this predicted field.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=128)** The outcome of the predict function.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=131)** We put logit as our first parameter, we set the new data parameter equal to DF, and we set our type equal to response in quotation marks.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=147)** Let's run this code so we don't see any outcome below.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=153)** And that's because we want to call the data frame variable again and run it.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=162)** We see our predicted outcomes appear as the last column in our data frame table.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=168)** Now let's check this against our Excel model.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=171)** We see our predicted outcome in the first row matches what we see when we run the GLM and predict function in R.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=180)** - Let's also round out the predictive outcomes in the data frame as a new field, we'll create a new variable in the data frame called DF and we'll use the dollar sign to assign it to a column, we'll call it, predict zero one.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=195)** Next we'll assign the ifelse function to this variable.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=199)** We'll set up the condition so that if DF predicted is greater than 0.5, then we make this outcome one.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=210)** Otherwise we make it zero.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=214)** Let's run our code again.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=218)** We'll call the data frame once more.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/predicting-outcomes?u=76281980&t=221)** And we see a zero one values assigned in the final column and these match what we see in our Excel file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft Excel|Excel]] (7), [[Logistic Regression]] (2), [[Probability]] (2), application (1)
> **Versions:** 0.5 (3)
> **CLI Commands:** make (2)
> **Env Vars:** glm (2)
> **Speakers:** - once (1), - let (1)
> **Prerequisites:** set up (1)

#### Visualizing logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=0)** - [Instructor] Once we predict our probability outcomes for logistic progression model, I find it's immensely helpful to visualize them as graphs as part of the process to get more inside into what the model output tells us.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=13)** We can construct charts in Excel, and we can also construct them in R.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=18)** There are thousands of libraries in R and many of them support graphic capabilities, but there are actually built-in graphic commands or functions, we can leverage directly in R without having to load or import any other packages.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=31)** One example of this is the plot function.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=35)** Let's first create our scatter plots for the points scored, versus the predicted and actual outcomes in Excel.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=42)** We can select these three columns, you may hold down the Control key, select our, predicted column, we then insert a scatter plot on the same page.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=62)** Let's make this a bit smaller, move it over, and I've renamed it.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=69)** Actuals versus, predicted.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=73)** You see the actual and predicted values displayed as two separate sets of dots, along the plot in different colors.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=81)** Notice the actuals are either zero or one, but the predicted outcomes are the shape, of the Sigmoid curve between zero and one.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=91)** Now let's create the same graphic in R using the plot function.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=95)** Well first input the field we want to put on the X-axis first, which is going to be our points, the team scored, and I'll follow this with a comma, that separates the two fields, and then we'll put our, actual results, df of the, win loss.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=122)** When we run this code we see the outputs, of 0,1 on the Y-axis and the points scored on the X axis.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=130)** But say we want to add a line to the scatter plot, we just create it.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=136)** We can add a line directly on top of the existing scatter plot, using the lines function.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=146)** Inside this function we'll again put, the points scored, on the X-axis, but on the Y-axis we'll put the predicted.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=159)** Once we run the curve we see if the plotted points, appear and we also see the line on top of it.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=166)** The line goes between zero and one but notice it zigzags across the space, where we really want to see a smooth line, across our models so we can use the line to make predictions.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=178)** To straighten up the sign we need to first sort it by the points scored in the data frame before we graph the scatterplot.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=187)** We're going to reassign our data frame, df, to a variable of the same name, and we'll put the df to reference the original variable in square brackets, and inside of that, we're going to put order, and select the field we want to order the results by, in this case the points scored.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=210)** We can close off the parentheses and put a comma before the final bracket.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=216)** Now let's run the entire script again.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=220)** Now we see a smooth S shaped Sigmoid curve as the line on top of the actual scatterplot points, this shows us the best fit of the line using The Emily Model, as a Sigmoid shape.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=232)** We see how it returns predictions between zero and one as we were expected to, but as a smooth line for the probabilities of winning based on the point scored.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=243)** Let's make our plot points orange, by updating, our plot command line.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=250)** Set, Col for color, equal to, orange in quotation marks, let's also make our plot points a small dot by setting the pch, parameter equals to 20.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=271)** Let's also make the color of the Sigmoid line blue, by setting the col parameter for the color, in the same way.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=280)** Let's update the title of the visual, by setting the main parameter in the plot function, equal to the name of the title we want the visual to display.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=290)** Let's call this points scored, versus outcome in quotation marks.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=297)** Let's rename our X-axis labels so we don't see this df variable, and the dollar sign it looks very cleaner if we rename it, and I'll set this equal to points scored, and this is going to be xlab.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=312)** And then finally, we want our ylab, let's set this equal to, win or loss.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/visualizing-logistic-regression?u=76281980&t=325)** Once we run our updated plot we see an easily interpretable visual representation of our logistic progression model, that looks similar to our output or actually the same as our output in Excel apart from some of the graphics, but perhaps a more scalable approach, for those of you designing models for end-users of your work in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), data (2), [[Probability]] (1)
> **CLI Commands:** make (5), find (1)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Calculating logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=5)** - [Instructor] Here's your chance to apply what you just learned about binomial logistic regression on your own.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=12)** You're going to use the dataset we're already using for this project to select another independent variable, to run with the same variable as the dependent variable for the outcome of the game.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=25)** You'll want to think about what variables could potentially work in the model and switch them with the point scored variable to see how they compare.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=33)** Remember to use numeric inputs in the model to make sure it runs.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-calculating-logistic-regression?u=76281980&t=38)** Also think about whether you want to run the model in either Excel or R or even both, depending on how much you want to deep dive into the model to understand more of the technicalities behind how it runs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (1), game (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### Solution: Calculating logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=0)** - In our challenge, I'm going to use the same data in our script as I did for earlier videos.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=10)** But I'm going to update it for the challenge.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=12)** Let's use another column instead of the point scored.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=17)** So let's see what the name of this column as that we want to use.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=20)** We'll use the names function, which we'll call on the data frame variable.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=26)** We now see a list of the column names appear in the console.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=29)** Let's select rebounds, which just goes by the name rebounds.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=34)** So I'm going to update the GLM function that is, is assigned to logit, by deleting the points team scored and updating it with rebounds.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=45)** We can comment out the names code using the hash sign.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=49)** We can then run this model.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=51)** Summary will be updated because logit is updated.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=56)** And we see the results and the coefficients for this model.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=61)** We can then run the predictions on this model using rebounds instead of points scored.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=67)** We don't have to update any part of the code in this section because it's already updated in the logit variable that we've already modified.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=76)** If we add the df variable as another line after the function in which we reorder and reassign the data frame variable based on the points scored, we can see the updated data frame.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=89)** We want to update the point score to use rebounds.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=94)** Now let's run this code.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=98)** We see the results don't have the same range between zero and one that we saw when we use the points scored as the independent variable.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=105)** Let's see what this looks like in a graph by updating the plot functions.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=110)** We'll change the X axis variable from points team score to rebounds for both the plot and line function.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=120)** Let's also update the X lab parameter, which gives the label for the X axis to rebounds, instead of points scored.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=130)** It'll also update the main parameter and the plot function to say, rebounds versus outcome, instead of points scored.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=141)** Now let's run our code.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=147)** And sometimes if you see these functions are out, we can just run part of it.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=152)** So we see these margins are too large.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=155)** And sometimes we see these problems we run into them.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=158)** In this case, we can see that perhaps rebounds may not be the best model to use in this case.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=165)** Part of the process of using logistic regression is experimenting with different independent variables and thinking about how they fit into the model.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=173)** Let's run our lines command.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=177)** I notice we still don't see these results.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-calculating-logistic-regression?u=76281980&t=180)** We can look further into the messages that we see in the console, but for now, we can see that perhaps reducing rebounds in the model, isn't really approach that we want to take, and we can further explore other variables or other options in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Logistic Regression]] (1)
> **Env Vars:** glm (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Fine-Tuning the Model

[↑ Back to Table of Contents](#table-of-contents)

#### Adding more independent variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=0)** - [Instructor] Not only logistic regression with a single independent variable lets us visualize the data and predictions in a tangible way.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=8)** However, more realistically logistic regression models like other models often include more than one variable.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=15)** In our Excel file, I copied over the model for logistic regression as a single variable to a new sheet called logistic X1 plus X2, plus X3.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=25)** I have then inserted space for two additional independent variables.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=29)** For X2, let's set this equal to our home and away variable in our training dataset.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=41)** And I'll label this home as one and away as zero.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=49)** Now let's set our X3 variable.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=51)** The third independent variable equal to our field goal percentage.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=57)** And again, we'll get this data from our training dataset.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=66)** Now let's add another parameter, B2 and B3 to our coefficients.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=73)** We'll set all these coefficients equal to 0.0001.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=78)** Next let's update our calculations to include these new coefficients.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=83)** We'll take the logic calculation and we'll add the B2 parameter and multiplied this by our X2 variable, and then we'll also add our B3 coefficient and multiply it by our X3 variable.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=108)** We'll then make sure that we fix the cells that are in column O rather, and we'll copy the formula down.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=118)** Now let's open the solver to run the model.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=123)** Our objective is going to remain the same.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=127)** We're not going to change our variable cells so it references four of them instead of two.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=133)** So we're still maximizing the sum of the log likelihoods or in other words, we're minimizing the loss.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=140)** We'll then run our model.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=144)** Once we've run the model, we see the solver results.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=147)** If you're not too comfortable using the solver item yet, it can become intimidating.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=152)** You might be apprehensive to run your model more than once.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=156)** However, if we run the model again, we should see the same coefficient values solved for in the yellow cells, because we're not changing anything else about the model.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=167)** Let's run our model again to see what results we get.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=172)** After we run the solver again, we see the coefficients do change.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=177)** One potential reason this occurs is because we're using a gradient method to solve for the coefficients, these decision variables represented in yellow in our model.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=188)** The algorithm runs along the gradient to determine the maximized total likelihood sum.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=193)** However, it may not reach this point before it returns the results.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=198)** After we run the solver, it continues to try to maximize the objective, in this case, our log likelihood sum, until it reaches a result.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=208)** In this case, we see that it took more than one run of the model to get this result.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=214)** If we were to run the model again, we would see the same result.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=218)** Now let's check our results in Excel against the results we see when we run this model to solve for the coefficients in R.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=227)** We now see four coefficients for the logistic regression model solved instead of two.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=233)** Let's insert a scatter plot to see what it looks like.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=238)** We'll choose X1 and then we'll choose our predicted values.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=251)** We see the scatter plot looks a bit odd now because we've got more than one variable in the model, but only one of them on the x-axis of the scatter plot against the same dependent variable.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=262)** Now let's compare what this output looks like to running the model in our studio.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=269)** We're going to update our GLM function to run the model with more than one independent variable.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=274)** Right now we only have the points the team scored as the only independent variable in the model.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=280)** We want to update the model, but first we want to know the fields that we want to update it with.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=285)** One command that's really helpful for this is using the names function and we'll call the DF variables.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=294)** So this will get the names of all the columns in the data frame.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=298)** Let's run this code.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=300)** So we see a list of our columns.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=303)** We are going to choose the home and away variable.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=311)** So we add the plus sign and then we'll paste the name of the home and away variable.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=319)** Next let's get our field goal percentage.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=323)** So we'll copy and paste this in the formula after the second independent variables.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=329)** So we now have three independent variables in the model.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=334)** Now let's run the model.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=338)** Let me scroll up.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=341)** We see our coefficients.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=343)** The coefficients that the GLM function returns for our logic model match the same coefficients we see in Excel.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=353)** I can now run the predictions for this model as well.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=358)** And let's run the chart to see how it looks.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=361)** Now we see our chart looks a bit odd because we're not directly analyzing the relationship between the predicted outcome and the points scored, but we're also including two other variables for the home and away games and the field goal percentage.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=375)** Our chart with three independent variables doesn't really tell us much.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=379)** We can't visualize the relationship between the independent variable and the dependent variable because there's more than one independent variable.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/adding-more-independent-variables?u=76281980&t=388)** We can check the predictions by running that data frame as another line, and we can then compare these to the output that we see in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (4), data (4), [[Microsoft Excel|Excel]] (4), next (2)
> **Env Vars:** glm (2)
> **UI Navigation:** open the (1), scroll up (1)
> **CLI Commands:** make (1)
> **Versions:** 0.0001 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Transforming variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=0)** - Another option for working with our variables is to transform them within the model to see how they fit.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=7)** We call these transformations univariate because we're applying them to a single variable at a time.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=13)** Examples of transformations we can use in our model include logs, roots, box-cox, and other univariate transformations on the existing variables in the model.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=24)** We can apply transformations to our independent or dependent variables within the model.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=30)** But we do want to take a moment to think about what the transformation outcomes will be to make sure we actually changed the fields in a way that's feasible.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=39)** For example, logistic regression has actual outcomes of either zero or one, which means that if we were to take the natural log of these two values, we would get zero if we took the natural log of one, and you would get undefined values if we tried to take the log of zero.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=59)** In our model, the points, which is X1, is a good candidate for a log transformation, because we know we're not going to have any negative values or zeros.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=71)** So every transformed result will return a defined result as well.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=76)** I've already copied the binomial logistic regression model with one variable into a new tab in our Excel file that's denoted as logistic X1 transform.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=87)** We'll take our points scored field and we'll put the LN function around it.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=97)** And we'll update the rest of the values in the column.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=100)** Once we transform our independent variable, let's run the entire model again and solver will use the same configuration except our calculations will use the transform variable instead of variable we used before.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=117)** We don't have to make any changes in the solver in order to run the model.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=124)** Once we run the model, we can look at the output and we can use further analysis to see how it fits.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=131)** We can see how the coefficients change for both the intercept and the points because of the transformation of the variable.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=140)** Now let's do these changes in RStudio.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=146)** Let's make sure that our Logit is only using a single variable.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=158)** We need to first adjust the points scored column and the data frame before we run any part of the model.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=164)** So before the Logit variable, so we'll add a new line after we create the variable for DF.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=173)** You're going to copy our points scored variable, and I'm going to override it for this model.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=179)** So in other words, the original points team scored field will get replaced by this transformed variable.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=188)** So we're assigning the same column name, the transformed variable, and we'll use the log function to transform this field.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=201)** Notice that we're using the log function here.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=203)** And it's important to note that in R, log means the natural log for the number, so we're using Euler's number.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=213)** Now let's run our model again.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=218)** We see that the intercept and the points scored, which was transformed, match what we have when we run the model in solver.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=226)** How do we know this is a good fit?
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/transforming-variables?u=76281980&t=228)** The answer lies in analyzing statistics for this model, which we'll do later in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (2), [[Microsoft Excel|Excel]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[RStudio]] (1), data (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **CLI Commands:** make (3)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - another (1)

#### Calculating correlations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=0)** - [Instructor] As we add different independent variable fields to logistic regression model.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=5)** We want to start thinking about whether or not the field should go into the model.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=10)** We can apply various statistical tests on the overall outcomes of the model, but we want to determine if there are fields we should remove because they are too closely correlated to one another.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=22)** One way to determine this is by calculating the correlation between various fields in the model.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=29)** You've likely heard of correlation before in statistics courses, we want to remove the inputs for the model that are closely correlated to each other, because this would cause multicollinearity between the inputs if we left the in.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=44)** Think of correlation along a two-dimensional scatterplot and the points most closely in line up with the linear line, there's a strong correlation between the data points.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=54)** We see a correlation of one in this example.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=57)** If there isn't a line that we can draw to represent the strong relationship, then the correlation is around zero or it's non conclusive.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=66)** We can't quite see a line that goes through these points.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=71)** A linear line that slips downward shows a strong negative correlation of negative one in this case.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=78)** We can calculate the correlations between logistic regression model inputs using a correlation table and Excel and R as we'll see later.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=88)** Let's look at the correlations between the fields for the existing logistic regression model, with three independent variables in Excel.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=97)** We need to have the data analysis tool pack installed in Excel as an add, and to create a correlation table.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=104)** If you don't already have it installed, check out the introductory video, where I walked through how to install the Excel add ins.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=111)** We'll first select the Data Analysis options from the Data tab in the top ribbon.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=118)** Next we'll select that we want to calculate the correlation.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=124)** Now we'll select the columns we want to appear in the correlation matrix.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=130)** In the correlation matrix we want to select numeric columns because correlation calculations won't work if the inputs aren't numeric.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=139)** We'll select our first three variables X1, X2 and X3 as our input range.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=147)** We also want to make sure that we check labels in first row.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=152)** We'll also put our output on a new sheet.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=156)** Once we confirm our correlation matrix selection, we see it shows the correlation between the three independent variables in this particular logistic regression model.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=170)** We see it appear on a new page.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=172)** I'm going to title this Correlation.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=176)** We don't see correlation values between any of these variables as a particularly high value.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=182)** This means that we don't have correlation between the input space on our table we see as a result, we can keep these inputs in the model because we know that there's no multicollinearity between them.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=197)** Now let's create a correlation table in our studio.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=201)** We're going to leverage the built in core function in R to calculate the correlations between the fields in our data frame variable DF.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=214)** Once we run the code notice we get an error message in our console in red text, it tells us we're trying to create a correlation matrix with non-numeric values.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=226)** Let's instead calculate the correlations between just a few fields in the data.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=232)** We can get the names of our data frame fields by using the names function to call the entire data frame and this will tell us the column names only.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=246)** Now we're going to take our correlation calculation, and we're going to select just a few fields from the data.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=255)** We can select the three independent variables in our model by using brackets to reference just a few column names.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=263)** We'll first insert a comment because we don't have any selected rows, but we do want to select the columns so we'll use this function C to select the column names as effector.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=276)** Now, within this function we'll insert the column names, which we want to make sure are in quotation marks.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=282)** Let's copy them from the list below we'll copy the points the team scored, home and away, and the field goals.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=302)** Once we run this correlation matrix, we'll see that it matches with the results in Excel.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=309)** As I noted earlier in Excel model, we don't want to remove any of these fields because the correlation between them isn't particularly high or significant in our model.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=319)** Let's look at the correlation between rebound fields instead to see if this returns different results.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=327)** We already have the field names when we ran the names command.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=333)** So now let's copy out our correlation function let's first copy it though.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=343)** Now let's copy the rebounds field from the list below in the console.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=362)** We see the correlation between these rebound fields is much higher than those for the independent variables we originally had in the model.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=370)** Typically, if the correlation between independent variables is higher than points eight, we want to consider removing them from the model.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=378)** None of these correlations are higher than that number, but some of them are closer to it at around 0.7.
>
> **[6:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-correlations?u=76281980&t=390)** If we did want to include rebounds in the model, we would want to consider this correlation matrix to determine whether or not we wanted to include the fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft Excel|Excel]] (6), [[Logistic Regression]] (4), [[Statistics]] (1), next (1)
> **UI Navigation:** select the (5)
> **CLI Commands:** make (2)
> **Versions:** 0.7 (1)
> **Cross-References:** earlier in (1)
> **Definitions:** means that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Using statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=1)** - [Instructor] As we're building our logistic regression model, we want to pay attention to the model statistics so we know that if the model we set up is a good fit.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=10)** There are entire courses in the library that focus on statistics, but understanding the outcomes and the statistics that go along with the logistic regression model can help us develop better models in the future because we're able to put our numbers in the proper context.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=28)** We can use the logit results return when we solve that maximum likelihood estimate or MLE, and our logistic regression models will further analyze the fit and statistical significance of our model.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=44)** Let's run just the first three lines of code to see what the outcome is.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=67)** The Deviance Residuals are the difference between our model and the ideal fit for this logistic regression model.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=75)** We see our numbers seem reasonable and in line with the log likelihood distances we calculated in our Excel model.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=83)** We've already calculated the estimated coefficients for the logistic regression model using Solver and R.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=94)** We've already matched the values in the estimate column, but what do the other columns tell us?
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=100)** We see the Z value column, where a value greater than two for the Z values listed means that this independent variable, in this case the points scored and also the intercept, matter in the model.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=117)** A few examples of statistical test include the Lagrange multiplier test, the likelihood ratio test and the Wald test.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=126)** The Wald test evaluates statistical constraints on parameters or coefficients.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=130)** We calculated the model using weighted distances.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=135)** The column Pr, probability, the coefficient is greater than Z as an also called the Wald test Z value.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=146)** The closer these values are to zero, the more significant the coefficient is in the model.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=153)** AIC is an acronym for that Akike information criterion.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=158)** It's an estimate for the prediction error.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=161)** By estimating the relative amount of information lost by a model compared to others, you can use this number to make a model selection, if we run this model using several different independent variables.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=173)** If the model loses less information, then it's a higher quality model than a model that loses more information.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=180)** It's a balanced between the model fit and the model simplicity by dealing with both the risks of over-fitting and under fitting at the same time.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=189)** If we're choosing between two models, we would tend to to prefer those with lower AIC values.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=196)** You can select a model with the AIC number, but it's also recommended to check the model residuals and model prediction tests to see if it works.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=205)** We can calculate the confidence intervals for each coefficient by using another built-in R function, confint, to reference the logit results we already calculated.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=229)** We see there's confidence interval that goes from 2.5% to 97.5%, which contains 95% of the data in the range of coefficients from the model.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=243)** This tells us that not only do we have an estimate for the coefficients, but here's a range of coefficient values we can potentially expect from running the model.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/using-statistics?u=76281980&t=255)** And these values from the low end to the high end will contain 95% of the predictions for the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (5), [[Statistics]] (3), [[Microsoft Excel|Excel]] (1), [[Probability]] (1), data (1)
> **Env Vars:** aic (3), mle (1)
> **Versions:** 2.5 (1), 97.5 (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Configuring confusion tables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=0)** - [Instructor] Now let's compare the predicted outcomes with the actual outcomes in the logistic regression model.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=6)** One way to do this is through a confusion matrix, which is a technique for classification algorithms like this that lets us summarize its performance.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=16)** However, a word of caution.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=18)** A confusion matrix should be on algorithms with roughly an equal number of outcomes in each class, and also in algorithms with only two classes of outcomes, like our binomial logistic regression model.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=32)** The confusion matrix takes the actual and predicted outcomes for both these outcomes and puts it on a table with four boxes.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=42)** The confusion table contains true positives, true negatives, false negatives, and false positives.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=49)** Notice the confusion matrix uses numeric outcomes instead of probabilities, so we want to use the predicted outcomes rounded to the nearest integer, either zero or one, so they match the actual outcomes in the data.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=63)** It's also important to note that we're going to use the confusion matrix on our testing data instead of the training data we used to set up the model.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=72)** This is because we're interested in validating our model and measuring the performance instead of developing it.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=79)** We want to make sure we're not using it as a way to over fit our data, which is why we're not using it on the training data, but instead on the testing data.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=88)** When we predicted that the outcome would be false and the actual outcome is false, this is called a true negative.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=97)** Conversely, if we predicted the outcome to be true, one in this case, and predicted the actual outcome to be one, this would be an example of a true positive.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=109)** Conversely, if the predictions don't match the actuals, then these are what we call false positives and false negatives.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=118)** False positives predict a positive outcome, but we actually have a negative outcome, while false negatives predict negative outcome, but we'll actually see a positive outcome.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=129)** In Excel, I've set up a new sheet with confusion at the end of the sheet name to focus on the calculations for the confusion matrix.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=140)** Notice it looks a lot like the logistic regression models we built using the training data, except for we're going to use the testing data instead of the training data for the predicted outcomes.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=152)** However, we don't want to solve our model again, but rather use the coefficients we calculated earlier using the training data.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=161)** You can see I've referenced those parameters in the yellow cells for the coefficients in this table.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=169)** I've already put the dependent and independent variables in the X1, X2, X3 and Y for the actual outcome of this data.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=181)** Now we're going to make sure we update our model so we see the predicted column and the predicted rounded column correctly calculated.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=190)** Our logit formula refers to our X1, X2, and X3 independent variables from the testing data set, but it references the coefficients we calculated earlier using the training data set.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=205)** Is there validation?
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=206)** With this set up correctly, we can leave these numbers as is, or we could just nest the formulas inside of one another to avoid confusion.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=230)** Now that we've calculated the predicted probability, let's delete these two columns for the logit and e logit to make our analysis a bit more streamlined.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=244)** We'll copy the formulas down.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=248)** So for those of you following along with the Excel file, I just cleaned this up a bit so we could see our predicted values against our actual outcomes using the test data.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=262)** And then these are the rounded outcomes of those predictions.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=266)** We can create a confusion matrix using the summits function like we did earlier for estimating the optimized MLE model, but because we've already got several columns with the data we need, let's just create a pivot table as the fastest way to do this.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=282)** Let's first highlight our columns of data.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=287)** We'll select insert.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=290)** And I'm going to put this on the edge of this sheet.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=295)** So I'm going to put it over here, starting in column L.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=299)** And this way we don't have to create a new sheet.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=302)** And we're just trying to make sure that we have our data selected.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=308)** And in this case, I'm going to select the existing sheet and put it over here starting in column L.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=317)** Once we've added our predicted outcomes to the row labels, click select to show why this is our actual values in the columns.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=330)** We can then put the predicted, those probability numbers in the values, we want select to count them instead of summing them.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=339)** Now, what we're interested in looking at is the percentage of positive results for the actual outcome matches our predictive outcome.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=348)** We can sum up the cells where the confusion table gives us the true positive and true negative numbers as a calculation, or we can simply select to show.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=360)** In the Value Field Settings, let's show the values as a percentage of the grand total.
>
> **[6:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=369)** Now we can sum up, we'll call these our matches, and we'll sum these up where we've got zero equals zero in cell M3
>
> **[6:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=387)** plus N4 is where we have our true positive.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=391)** So we're adding the true positives and true negatives together.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=394)** And then we're adding our non-matches, and these are just labels so we know what they mean later.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=400)** We're going to add these up as M4 plus N3, and these are our false positives and false negatives.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=412)** So the total for these numbers adds up to 100.
>
> **[6:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=415)** One recommended threshold reference for this total, the number that matches between the predicted outcomes and the actual outcomes, is 70% of the data points are correctly classified.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=427)** In this case, we see 73%.
>
> **[7:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=429)** So we can say that our model looks like it's a strong representation of these predicted outcomes.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=438)** Now let's create a confusion table in R.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=441)** There are libraries in R that automatically create confusion tables with a statistics for us, but we can create a table using the built-in table function in R.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=450)** Because we're calculating our confusion matrix on the test data instead of the training data, we need to import the testing data into our model as well.
>
> **[7:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=459)** Let's rename our DF variable DF1, and we'll rename or replace our DF variable in our logit calculation with DF1 instead.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=474)** To add our DF2 variable, I'm just going to copy the DF1 and change it to DF2 And now in the name of the file, this is going to be testing instead of training.
>
> **[8:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=491)** And we'll just run these, both these lines, to make sure that they both work.
>
> **[8:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=496)** Now let's calculate our confusion matrix from the testing data.
>
> **[8:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=501)** What we want to do first is make sure that our data frame that we're adding the predicted column to is going to be a DF2 instead of the old DF1.
>
> **[8:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=514)** And we'll do the same for the rounding field.
>
> **[8:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=518)** So let's run the model and make sure it works.
>
> **[8:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=526)** So we see a warning message here.
>
> **[8:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=528)** What we want to do is just make sure that we're not running into issues running our code.
>
> **[8:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=532)** Because notice that we did, if we go down... this we did get a predicted outcome.
>
> **[9:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=544)** I'm going to make sure that I have the labels properly done.
>
> **[9:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=547)** In this case is going to be DF2 predicted as not a real field.
>
> **[9:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=555)** So let's run our outcome again.
>
> **[9:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=557)** We can also check what our outcome looks like by double clicking on variable itself, DF2 in our environment panel in the top right.
>
> **[9:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=571)** When we scroll over, we see the results and they look similar to what we saw in Excel.
>
> **[9:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=579)** Now let's calculate the confusion matrix from the testing data.
>
> **[9:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=585)** The results of the table are the counts of each of the records.
>
> **[9:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=588)** So if we use the table command and we put DF2 and then predict 0.1, and run this code, we see it returns a table of the counts for each of these rounded predictions, zero and one.
>
> **[10:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=608)** However, we can add a column to the table by adding a comma in our table function, and then referencing the rows.
>
> **[10:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=618)** In this case, we want to put our predicted in the rows.
>
> **[10:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=630)** So let's put DF2 and let's put our wins and losses in this one, in the first parameter.
>
> **[10:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=641)** So this is our actual outcome.
>
> **[10:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=644)** Let's make sure that we're referencing the same data frame.
>
> **[10:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=650)** Once we run this command, we see a table appears with the counts for each of the categories in the confusion table.
>
> **[10:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=656)** However in order to calculate the proportions, we need to use another calculation in the R script.
>
> **[11:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=662)** In this case, it's the built-in function, prop.table, which we can put around our existing table calculation.
>
> **[11:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=672)** And we'll nest it in parentheses on both sides.
>
> **[11:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=680)** Now let's compare our result to what we saw in Excel.
>
> **[11:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=690)** Right now, our values don't match.
>
> **[11:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=691)** And the reason that we want to check this is we see that we're only using one variable in our GLM function.
>
> **[11:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=699)** So let's update our calculation.
>
> **[11:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=705)** Let's run the names on our DF1.
>
> **[11:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=719)** We want to add these additional fields.
>
> **[12:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=724)** We don't need to include the quotation marks.
>
> **[12:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=727)** And we'll see an error message if we run into this issue, but it's good to know what to look out for.
>
> **[12:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=746)** And let's run our model again.
>
> **[12:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=749)** See we have 22, 27, and 9, 9 and we get the same results in Excel.
>
> **[12:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/configuring-confusion-tables?u=76281980&t=754)** So we see how there are two different ways to create confusion tables to test the performance of our logistic regression model in either Excel or R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (25), [[Microsoft Excel|Excel]] (6), [[Logistic Regression]] (4), [[Algorithms]] (3), [[Probability]] (2)
> **Env Vars:** df2 (7), df1 (5), mle (1), glm (1)
> **CLI Commands:** make (10)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** caution (1), warning (1)
> **Versions:** 0.1 (1)
> **UI Navigation:** select the (1)

#### Challenge: Fine-tuning the model
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980&t=5)** - [Instructor] Let's continue now, working on our challenge for logistic regression modeling.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980&t=10)** You can pick up where you left off on your own challenge solution, or you can use my own in the exercise files.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980&t=19)** Your challenge for this chapter is to review the performance of your binary outcome logistic regression model to see what independent variables you should include to best fit the model, test per statistical significance.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-fine-tuning-the-model?u=76281980&t=32)** And when you've perhaps gone too far into overfitting, think about how you can run models in parallel with each other and pick the best one that fits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (2), parallel (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### Solution: Fine-tuning the model
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=0)** - From my own solution, I'm going to create several confusion tables based on separately calculated logit variables that we can compare to one another.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=13)** Let's first add a ct1 variable in front of our confusion table, that we'll assign the prop table function to.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=27)** We'll also want to put data.frame around the entire prop table function so it returns it as a variable that we can view as a data frame, once we run this code.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=45)** We can see ct1 by running it as another line below.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=51)** We're looking at the results where Var1 equals Var2.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=53)** In other words, a scenario where the actual matches the prediction.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=58)** We can look at the frequency, which measures the proportion of the total data that matches this scenario.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=65)** Now let's update our existing model to remove the field goal percentage from our model.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=78)** We'll assign our confusion table a new variable.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=83)** We'll assign it ct1 so we can open them and compare them side-by-side once we run this model.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=90)** Now let's run the predictions again.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=93)** Now, if we go to our environment tab on the top right, we can see a list of the variables.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=100)** Let's double click on ct1.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=102)** We see it displayed as a new tab in our window next to this R-script in the top left corner.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=110)** Now let's open ct2, and then compare our results for ct1.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=117)** For example, we see that where the predicted outcome of a loss equals the actual outcome of loss has a frequency of about 0.33.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=127)** We can then add it to the frequency of 0.4, where the predicted outcome was a win, compared to the actual outcome of win.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=136)** So we've got about 0.73.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=140)** Conversely, in this ct2 table, where we removed the field goals, we see that we've got a match of about 0.27, for the actual outcome is a loss, and when we predicted that outcome.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=155)** And then 0.45 for the actual outcome's a win, and we predicted that outcome.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=160)** So which is slightly lower than what we would see in the other model.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-fine-tuning-the-model?u=76281980&t=166)** But this gives us an idea of how well our data model performs on the testing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (1)
> **Versions:** 0.33 (1), 0.4 (1), 0.73 (1), 0.27 (1), 0.45 (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - from (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Multinomial Regression

[↑ Back to Table of Contents](#table-of-contents)

#### Calculating odds for multinomial models
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=0)** - Modeling multinomial logistic regression is quite different from the binomial regression models we've worked with so far, the binomial logistic regression models contain two outcomes, which are binomial models.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=13)** Examples of these outcome types include true or false, or in this case for our college basketball data, win or loss, which we represent with the discrete values, zero or one.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=25)** Multinomial regression contains more than two outcomes.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=30)** But in the case of these models, the order of the outcomes doesn't matter.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=35)** To see how multinomial logistic regression models work, we're going to work with the fishing data set, which is available directly in R as a built-in data set within the mlogit package.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=47)** We'll first need to install the packages for mlogit, if you haven't already, by running the commands line, install.packages, which you can do directly in our studio, we're going to put mlogit in quotation marks.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=62)** And if you haven't installed this yet, you will see it download.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=67)** Now to see the available data sets within R, we can use the data command and run this line, and we can see the data sets built in, and we can see them specifically for the packages like mlogit we'll see toward the end.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=87)** If we want to see the packages specific to mlogit, we'll set the parameters inside the parentheses to package equals mlogit and run this line of code.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=101)** We see our fishing data set that we're going to use in our model.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=106)** We're going to use the mlogit library to run our model.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=111)** So let's import it at the top of this code.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=116)** Now let's get our data for the fishing datasets.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=119)** We'll type in data fishing, and let's say package equals mlogit.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=126)** Now let's create a new data frame variable called DF, which we will assign our mlogit fishing data set to.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=136)** If you haven't cleared out the variables you can do so by hitting this little broom icon in the environment section, this will clear out the objects so we don't accidentally use the existing DF variable from the binomial regression.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=151)** This DF variable will represent our data frame, and we're going to assign the outcome using mlogit.data.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=162)** So this is the data function from the mlogit package, refer to fishing, and the choice is going to be mode.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=171)** And we'll see what this means in a second.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=173)** And the shape is going to be equal to wide.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=176)** And we'll also see that once we run the data frame, now let's run these lines of code.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=183)** And now what we're going to do is let's see what the data frame looks like by typing in DF and running this single line of code.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=195)** We see the data frame as the output below, and this is the data frame that we're going to use to create our multinomial logistic regression model.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=206)** And what this does is the shape of it is determined by how we're going to use the model.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=215)** We'll understand more of this data set once we start working with it in Excel.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=221)** In order to see how this fishing dataset works as a multinomial model, I've downloaded it to the exercise files.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=230)** The fishing sheet of this workbook contains the data.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=235)** To save some time, I've already set up the model that we're going to work on in the model tab.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=241)** Notice we've summarized the number of individuals who prefer to fish at the beach, boat, charter, or pier.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=248)** These outcomes, which are four of them, depends on the independent variable, their income level.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=255)** To solve this multinomial logistic regression model.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=258)** We'll first need to determine the outcome we want to use as our baseline.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=263)** Let's select pier, which means we're going to set up the coefficients for beach, boat, and charter relative to our pier outcome.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=274)** We'll also set up the intercept for B not, and the income, how efficient as well, B1 which works with our independent variable income.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=288)** As dummy variables for us to check the calculations along the way, I've already put 0.0001 in all the coefficient values in the yellow cells.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=299)** But for now, we're going to use these coefficients to calculate our odds.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=305)** Let's first put one in all the rows for pier.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=311)** We're setting it relative to pier, which means that all the other outcomes, beach, boat, and charter will be measured relative to the outcome for pier.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=319)** Now let's calculate the odds for each of these alternative scenarios, beach, boat, and charter compared to the pier.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=327)** We'll first set our logit function, which equals this beach intercept plus the income multiplied by our actual income independent variable.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=343)** We'll then raise this entire calculation as the exponent of the eulers number.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=351)** Let's fix the row positions for the coefficients in this formula, but not the columns.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=357)** Which will let us copy the formulas over.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=361)** For the independent variable, in this case, for the first row of income, we want to set the column.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=368)** So we'll fix column A, but we won't fix the rows so we can copy it down.
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=374)** Now let's calculate these odds.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=380)** Just double check that we've got it properly set up.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-odds-for-multinomial-models?u=76281980&t=384)** We're going to come back to work on this model, both here in Excel and in R to build out the rest of our multinomial logistic regression model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (20), [[Logistic Regression]] (6), [[Microsoft Excel|Excel]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** set up (4), install (2)
> **Versions:** 0.0001 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Speakers:** - modeling (1)

#### Calculating probabilities for multinomial models
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=0)** - Once we calculate the logit values for a log odds in our multinomial logistic regression model, we can now calculate the probabilities for each of these outcomes for each income level.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=12)** To do so, we're going to use the formula to convert odds into probabilities.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=17)** We take the odds for a particular event and divide it by the sum of odds for all the events.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=26)** In Excel, let's calculate the probabilities using the values of the odds we calculated and the columns next to it.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=33)** We first calculate the pier probability, which is equal to J3 divided by the sum of all the odds, including pier.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=44)** Remember that we're calculating dummy values here, and the predicted probabilities will update once we run the model.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=52)** However, we do want to make sure we set up the formulas correctly in our model first.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=59)** We'll then fix bottom rows for the sum function.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=64)** And we can copy these predicted probabilities for each of the outcomes for each of the income levels.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=74)** We'll copy and paste the formulas.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=77)** And we see our total predicted probability adds up to one.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=82)** From here we can calculate the forecasted values for the predicted numbers for beach, boat, charter, and pier.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=91)** We'll multiply each front of our predicted probabilities by the total for each income level.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=99)** In this case it's going to be in column F.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=102)** We'll fix our F column reference so we can copy over the formula to use it in the rest of the forecasted values.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=113)** We can see the totals at the bottom of the forecasted values aren't a whole number, but they're instead a decimal.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-probabilities-for-multinomial-models?u=76281980&t=122)** However, we can see that we've got a total of 182 observations, which matches the total actual observed observations in our existing data that we started with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Logistic Regression]] (1), [[Microsoft Excel|Excel]] (1), next (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - once (1)

#### Calculating multinomial log likelihoods
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=0)** - To calculate the log likelihood of multinomial regression, we're going to use a formula, similar to what we saw with binomial logistic regression, except the log likelihood formula, will have a few more terms.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=13)** In Excel, one function that will really help us out in these calculations is SUMPRODUCT.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=19)** If we take the units and the unit cost for four different kinds of fruits apples, bananas, pears, and oranges.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=26)** We can calculate the total cost by multiplying, the units and the unit costs together for each row, and then adding them together to get the final result.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=37)** The SUMPRODUCT function lets us skip to the total cost in fewer steps without having to write them out in the same way that we did for each product.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=48)** For our formula we're going to take two and put a raise, although we could take more.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=53)** We'll take the units array, and the second array is the unit price.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=58)** Because these arrays are the same size, we would multiply each one of the units by the unit price, except they're not separate calculations, they're all done at the same time within the SUMPRODUCT formula.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=72)** In order for this equation to work, the arrays in other words, the units and the unit costs are both the same size, they are four rows by one column.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=82)** It cuts us to the same final calculation, but in a much more efficient way.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=88)** In Excel let's calculate the likelihood for all the outcomes in the model as a single column for the log likelihood.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=98)** In the log likelihood column, let's set up the formula using SUMPRODUCT.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=103)** We're then going to select all the observed outcomes in the first section of the table.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=110)** Next we'll reference the probabilities.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=113)** Because we're taking the natural log of the probabilities, we can actually use the LN function in Excel to reference all the predictive probabilities and take the natural log of each one of them, and use that within the SUMPRODUCT function.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=133)** You can then copy these formulas down for the rest of the income levels, and we see that it still refers to the same values.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=145)** Finally in the blue cell, at the bottom of the log likelihood column, we sum up all the log likelihoods into a single total.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=154)** In the next video, we'll optimize this total log likelihood by minimizing the log loss, to solve for the coefficients, those yellow cells for the coefficients for each of the outcomes.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/calculating-multinomial-log-likelihoods?u=76281980&t=170)** So we can solve this multinomial logistic regression model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Logistic Regression]] (2), next (2), product (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sumproduct (5)
> **Definitions:** in other words (1), refers to (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)

#### Running MLE
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=0)** - [Instructor] Once we configure our multinomial logistic regression model as formulas in Excel, we want to use Solver to figure out the coefficients of the model that maximize the sum of the Log Likelihood.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=14)** This blue cell is the sum of the Log Likelihood, similar to what we saw with the binomial logistic regression model.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=21)** We want to maximize this value to make it the least negative, in other words, we're minimizing the total loss.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=29)** We can do this again through our Solver.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=33)** For a set objective, we'll choose our blue cell for the total Log Likelihood.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=39)** We'll maximize this value, and for the changing variable cells, we'll select these yellow cells, so the intercept and the income coefficient for a beach, boat, and charter.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=56)** We'll make sure that we have the Make Unconstrained Variable Non-Negative, and we'll select the GRG Nonlinear method.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=64)** Once we confirm these choices, let's run the model to see what Solver gives us.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=74)** We see our Log Likelihood as maximized, and to make sure we have the maximized value, let's run the Solver again, and we see that it updates because there are limitations to using the Solver, so sometimes, they run the Solver again just to make sure that it is indeed maximized as the objective.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=99)** So now, let's take a look at the coefficients.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=102)** We see the intercept and income coefficients for beach, boat, and charter as separate coefficients.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=110)** We're measuring these coefficients for beach, boat, and charter relative to the pier, which we used as our benchmark observe value.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=121)** We're interested in whether these coefficients are negative or positive.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=125)** If they're positive, that means that as income rises, they're more likely to take a beach, boat, or charter fishing expedition than to fish on the pier, that they can afford a charter boat, to think of it that way.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=141)** Now, let's solve our multinomial logistic regression model in R.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=146)** We're going to add another line, which we'll call logit, and we use the mlogit function, which is from the mlogit library.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=158)** We'll first set our mode to one, using the tilde, and this means we're keeping it constant.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=165)** We'll then insert a pipe separator, and we'll refer to our income, which is the independent variable in our model.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=173)** Our data is going to equal our df, so our data frame variable.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=179)** Lastly, in this mlogit formula, we want to refer to the ref level, in this case, the ref level is pier, which we're comparing the other outcomes to.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=191)** It doesn't matter which outcome you select as the reference level, but in this case, I just selected pier because it was listed last in the column headers, but that's not necessarily something you have to do, it's a matter of running the model correctly and understanding the context of this regression model outcome.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=211)** So, run this logit code, and then, to see our outcomes, we'll select summary and refer to logit,
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=226)** and we see our coefficients.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=232)** So, for this package, when we run the mlogit function, we actually see the total of the Log Likelihood.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=240)** The total of the Log Likelihood is negative 1,477.2.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=244)** Let's see how this looks in Excel.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=247)** We see we get the same minimized loss in our total in this blue cell.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=253)** Now, let's compare the coefficients, and we see that up here, this gets a but confusing to read sometimes if the Console text is a bit um.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-mle?u=76281980&t=264)** So, the estimate here is what we want to match our regression outputs, and we see that it does in our Excel file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (3), [[Microsoft Excel|Excel]] (3), data (2)
> **CLI Commands:** make (5)
> **Definitions:** in other words (1), means that (1), is a  (1)
> **Env Vars:** grg (1)
> **Versions:** 477.2 (1)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Prerequisites:** configure (1)

#### Making the predictions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=0)** - [Instructor] In our Excel model, we see the predicted probabilities for the income independent variable for each of the four outcomes for preferred fishing spots.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=11)** We then see the forecasted values, which take the predicted profitability and multiply it by the total for each of the income levels.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=21)** We calculated the predicted profitability by using the coefficients in the yellow cells to calculate the logit log odds, and then the predicted probability outcomes for each income level.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=34)** In our R code however, we solve for the coefficients, but we haven't yet made any predictions with these coefficient parameters, that match those of our Excel model.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=45)** One way to combine the predictions with our original data frame, we're going to filter the data frame DF variable, using the subset function, so it only displays the mode values, where the labels are true as a new data frame variable called df1.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=63)** And we'll use equals-equals to set our condition equal to true.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=67)** And we'll put true inside single quotes.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=76)** We see that we only see true in the column of mode in this data frame.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=83)** Now we're going to run our predictions by creating another data frame variable called DF two, which will assign the predict function to.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=96)** We're going to assign the predicted results to this data frame, in a similar way that we did for the binomial model, except we're going to use our multinomial results.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=108)** We'll use our logit, which represents the multinomial logistic regression results.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=114)** And we'll set new data as equal to our DF, this is our data frame.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=123)** After we run these data frame variables, once we assign them, let's run them by themselves to see what their outcomes look like.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=133)** We see the second result contains all the predictions.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=139)** And the first result contains the filtered dataset that we saw in the previous step.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=146)** We can also check the number of rows in these data frames by using the nrow function, over both these data frame variables.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=157)** So we want to make sure that these are equal before we combine them.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=164)** We see that the number of rows in both the variable df1 and df2 contain 1,182 rows.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=172)** So when we combine them, their links will match up.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=175)** To combine these data frames into a single view, we can use the cbind function, which we'll assign to the outcomes variable.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=185)** So the cbind function will put the two data frames together side-by-side within the same data frame, in this case, a new data frame called outcomes.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=197)** And this will appear as a data table like we saw the other two DF variables, plus the previous DF variable as well.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=210)** Let's type Outcomes to see what the results look like.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=215)** So we see all the outcomes, but there's a lot of rows in this data frame.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=221)** We can create a summary table to show the results by the income group.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=225)** It makes it easier to read, similar to the Excel output, we predicted as probabilities.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=231)** To do this, let's use the aggregate function, and we'll use the cbind function again.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=240)** And we'll put the data frame outcomes for each of the fields, the beach, charter and pier fields as our column headers.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=256)** So now let's run this code.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=260)** So now what we want to do is we want to add another term, which is By.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=266)** We'll use this parameter in that we set up after the cbind function, so we close out the cbind function.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=275)** And then we set up the labels we want to use to group by.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=279)** So this is the row labels that all the previous column headers are grouping by.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=285)** And we're going to call this income.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=287)** And it's equal to the outcomes on the income field.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=292)** And lastly, we'll set the function equal to Sum, as our third and final term in the aggregate function.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=302)** Let's run this again.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=305)** Once we've run these results, we see the summarized outcomes.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=309)** However, we don't see the predicted column names to the outcome results, in a way that makes it easy to match to our Excel results.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=316)** We see V1 V2, V3, and V4 instead of beach, boat, charter, and pier.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=325)** In order to easily match our Excel results, let's use the function to rename the field names accordingly to the variable or those outcome names that we're looking for.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=339)** We'll use the names function to rename these fields.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=342)** So we'll say the outcome.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=344)** And then the names function, we'll call this on the outcome variable.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=349)** And we'll say the names of the outcomes equals-equals V1.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=357)** We're going to assign this to beach.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=362)** Let's see what this looks like.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=367)** Let's first assign this one, I'm going to call this Totals.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=370)** We're going to assign this table for our aggregated totals.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=376)** And then let's rename this Totals.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=386)** Now let's see what this looks like.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=392)** So we see we've renamed the first column.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=394)** So let's just do this for the rest of the columns as well.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=402)** So if it's V2, it's going to be boat.
>
> **[6:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=410)** And V3.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=412)** We're just matching them up to the order in which they appear in the aggregate and then the cbind function.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=419)** So it's going to be charter and then pier.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=424)** Once we've renamed the fields for our aggregated table summary, we can compare them to our Excel multinomial logistic results.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=435)** You want to look at the forecasted values, which we can see match what we see in our R code predicted results.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/making-the-predictions?u=76281980&t=445)** And this is exactly what we want to see in our multinomial logistic regression model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), [[Microsoft Excel|Excel]] (6), [[Logistic Regression]] (2), [[Probability]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Working in Power BI with R

[↑ Back to Table of Contents](#table-of-contents)

#### Running R scripts in the Power Query Editor
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=0)** - [Instructor] There are two places where we can run R scripts in Power BI.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=4)** We can run them in Power Query editor, and we can also run them as scripts in a standard R visual.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=12)** Here's the binomial logistic regression model run with three independent variables.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=17)** We're going to use this script in Power BI Desktop.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=21)** We know what the outcome looks like.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=24)** So first let's set up the R script and the Power Query editor, and then we'll copy and paste this script and modify it in Power BI Desktop.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=34)** In Power BI Desktop, we can access the R script data connection, by selecting Get Data.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=42)** Now let's search for R script, or we can find it in the other menu.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=51)** We'll then select the R script data connection.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=55)** In this configuration window for the R script, let's copy the R code for the binomial logistic regression model with three independent variables into this space here.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=68)** I often write the script first in RStudio, as we've already done to make sure it works properly because Power BI and Power Query editor, aren't code testing tools and so any errors we get we'll often have to go into an external application to figure out what's going on.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=87)** We need to make sure we import the entire script that we need, but it's not going to be all of the script.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=94)** We don't need the plot because we are going to let Power BI do that for us.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=100)** And we don't need to order that either.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=103)** Let's remove the names.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=107)** And we also don't need the logic summary because that's already used in the model.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=114)** So now it's connecting to the CSV file in my desktop.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=119)** We hit Okay.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=121)** We see the script runs.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=126)** We now see a list of the outputs.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=128)** In this case, let's select the DF.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=130)** This is the data frame variable.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=133)** Let's transform data, just to show what it can do.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=139)** So we don't have to load all these rows into Power BI Desktop if we don't want to.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=146)** An example is we can remove some of the information we don't need.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=154)** I'm going to remove the names here and we can see it adds another step in our Query editor applied steps.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=162)** Now let's load the data into Power BI Desktop, but let's just actually note this as our R script data.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=174)** It's important to note that this is the training dataset, so in this case, we're just to see how to build the visuals.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=180)** This isn't necessarily a finalized R model, but it lets you see how you can use R scripts in several ways in Power BI Desktop.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=190)** Let's add a scatterplot visual, and then we're going to put the predicted outcome on the Y axis, just scroll down so we can see it.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=206)** So this puts the predicted outcome on the Y axis, and we'll put the point scored.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=213)** We can put any of the fields on the X axis, but let's put the points scored because that's most, the easiest to identify and tell apart.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=224)** We also know we've got a scale for it.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=227)** Let's then add the date as our details.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=235)** So then we see the scatter plots, those points themselves appear on the chart.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=240)** However, we see it looks a bit off because we have values that are over one.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=247)** So we want to change the predicted, so we don't summarize it.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=253)** And we'll do the same for the points the team scored.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=260)** Lets actually put field goal on the details.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=264)** Here we go.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=265)** So we can see some of the details.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=268)** We don't have, actually have the detail field populated, but we can see now that the range is between zero and one.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=276)** I'm going to add a Y axis constant line at zero.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=286)** I'll make it a light gray and a dash line, then I'll add another one as well, at one instead of zero and use the same coloring options.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=302)** Let's add home and away, to our legend.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=312)** So we now see two different colors on the scatter plot.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=315)** Let's change the colors so they stand out a bit more.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=321)** Let's select to make our, so our home games are blue.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=326)** Let's make our away games an orange so they're a bit easier to see.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=332)** You can also add some of the fields to the tool tips.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=334)** Let's add a field goal as well as the date and the opponent.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=347)** Let's also add the actual outcome. (indistinct) Now when we hover over these data points, we can see the details behind each one of the games, whether it was home and away, how many points they scored.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=365)** Various details about the game.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=368)** So right now the field labels look a bit odd because we've used the field names that are imported, which have those periods between some of the field names.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=379)** I'd like for my analysis to be clean and easy to read.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=383)** Changing the labels is a quick fix that can make huge impact for end-users.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=388)** We can update the names by selecting the fields and typing in the label we want to have on the plot.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=400)** So now we see our tool tip is updated for one.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=404)** There's a lot of options that we can leverage for formatting the scatter plot, but you can see how importing the R script through the Power Query editor lets us get the data which we can then develop and design using the standard Power BI visuals, like the scatter plot.
>
> **[7:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=423)** I'm going to rename this Power Query.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-scripts-in-the-power-query-editor?u=76281980&t=427)** So we know that we connected to the R script using the data source and the sheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (10), bi (10), data (10), [[Microsoft Power Query|Power query]] (5), [[Logistic Regression]] (2)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** select the (2), scroll down (1)
> **Env Vars:** csv (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Running R standard visuals
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=0)** - [Instructor] We can think of setting up the R scripts in Power BI editor as a global solution, but that's not the only place we can configure our models within Power BI.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=10)** We can also explore configuring them locally using the R visual that's available within the standard visualization options.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=19)** It's important to note that if you're configuring in R visual, your data doesn't necessarily need to come from R, either.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=27)** You can set up the R visual through any data connection type.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=31)** Let's set up a CSV file to the same data we used in the R model.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=42)** Let's select to transform data before we load it.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=46)** So if we scroll over, we can see that the names of the fields have spaces in them, which we'll account for in our R script when we set the visual.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=56)** Let's load our data into Power BI after we rename it CSV data.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=65)** Let's create a new sheet which we'll call R visual, or we'll just call it visual.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=73)** One of my own preferences when setting up the R visual is to first set it up as a table that I can add the fields to, and then I'll convert it into an R visual.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=83)** So I'll select the table visual.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=87)** We'll add the points team scored, not to summarize it, add the win-loss, or hang on.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=98)** We can swap this out.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=99)** We want to use the CSV file data instead.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=113)** So we add the points scored and the actual outcome, the win or loss, to the table.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=119)** We're not going to include the predicted field because it doesn't exist in the visual yet.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=124)** We're going to actually run the model directly in the visual.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=128)** Select not to summarize either of these fields.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=133)** So we're going to run our logit model in the R visual, instead of in the Power Query editor, when we used it, when we got the data using R script.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=144)** So we've made sure that we're not aggregating any data points.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=147)** Now let's convert this visual into an R script visual.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=152)** We see, we have message.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=153)** If we click on this, it says, Do we want to enable the script visuals?
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=158)** We select enable.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=161)** And now we'll add our code below.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=163)** We have to select the visual in order for the R script editor to appear.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=168)** When we created this visual, a script automatically ran that was a preamble that set up the dataset and added the fields to it.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=178)** Now let's get our R code that produces a line chart on top of a scatter plot from RStudio.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=187)** I'm going to copy all this code and then edit it in the visual.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=196)** Once we've copied it into the space, we want to remove some of the fields we don't need.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=202)** We don't need to include the script for getting the data because the data's already in the visual itself.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=209)** So can remove that.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=211)** You also don't need the summary for the logit because that's not actually part of the visual.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=218)** To render the R script in R visual, we need to run it by hitting the play button in the top right of the script editor.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=226)** So we see it doesn't run.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=227)** If we click on this hyperlink, we see we have an error message that says that it could not coerce class function to a data frame.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=237)** So let's look at our details to figure out what's going on.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=241)** So we're going to go back into the R code to modify it.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=245)** Notice there's a preamble script that always runs when we create the visual.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=252)** You may notice that it uses a dataset variable containing the variables we added to the table.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=259)** This is the name of our data frame we're running in the R script in Power BI inside this visual, instead of the df name, the data frame variable, that we gave to the variable in RStudio.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=271)** Power BI automatically assigned it for us, which is why it's automatically set up at the top of the code.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=278)** We can actually modify the data set name, but let's modify the references below to refer to the dataset instead of df.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=299)** Now let's run the code and we still see an error message.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=303)** Let's see what it says on this sample.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=306)** So it's not able to identify what we're running in the glm model.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=311)** And the reason for this is that we don't have the names set up correctly for the actual columns.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=318)** Let's swap out the respective fields from the R script data with our CSV file data and use the names according to what they appear as within this visuals preamble.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=333)** So let's copy the points the team scored and we'll replace it in the code.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=340)** And we'll use this little back tick within our script so it properly runs.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=347)** I'm going to call this the outcome instead of the name it already has.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=360)** Once we do that, we want to update the name of the win and loss as well.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=367)** And the reason we use back ticks is this allows us to have spaces in the names of the fields.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=379)** So now let's run our script.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=383)** Let's see what the message says.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=385)** So it ran up through where it created the predicted new field that it added to the dataset.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=393)** See what we need to update here.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=397)** We need to update our df2 data set.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=403)** Once we've made these updates, we see that the R script runs and it produces the exact same visual we created earlier in RStudio.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=412)** If you add a new field to your model, you'll need to update the preamble that contains the assignments for the dataset variable.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=420)** The visual doesn't actually update with the new field name, but you'll have to add it in manually in the first line of the dataset variable.
>
> **[7:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=430)** You can collapse the view so we now have a much clearer view of what the model looks like.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=437)** However, one thing you may notice is that we hover over the graph, we don't see the tool tips unlike we did in the scatterplot visual.
>
> **[7:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/running-r-standard-visuals?u=76281980&t=447)** This is because R script visuals don't natively add tool tips like they do in the standard power BI visuals, so we don't see the details as we hover over the line or the scatter plot points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), power (6), bi (6), [[RStudio]] (3), [[Microsoft Power Query|Power query]] (1)
> **Prerequisites:** set up (5), configure (1), you'll need (1)
> **Env Vars:** csv (4)
> **UI Navigation:** select the (2), click on (2)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Interacting between visual components
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=0)** - [Instructor] We might ask why we would want to use the Power Query editor versus the R visual to run R scripts.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=8)** We could even create a model that goes in the database that we can connect to.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=13)** There's no right answer and what you choose to select to do depends on the situation in the context in which you're trying to use your model and act upon its outputs.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=25)** Let's say we add slicers to the existing Power BI report, which we'll do to the page that contains the R visual.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=32)** We'll then add the Season Start Year as the field.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=36)** Let's select to display this as a list, and we can make the items a bit bigger.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=50)** Notice that if we select some of the years, it impacts the model output.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=58)** We see the model output, not only does the line change, but the points displayed, those orange dots change as well.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=66)** Let's copy this slicer and put it on the Power Query page.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=75)** Let's select to not sync them for now.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=78)** So what we see here is that the model changes differently because we ran the R script in the Power Query editor.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=86)** And so the logit model was run in the query editor it's not impacted by the slicer selections on the page.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=95)** The predicted outcomes are already determined before they're loaded into the model.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=101)** The filters only impact what data points are displayed, not how the calculations are done.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=107)** In the R script visual, the filter not only impacts the data points, but it also impacts the calculations that go into the sigmoid curve.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=120)** We can see that selecting a smaller season, not only impacts the data points for the actual outcomes, but we see it changes the blue line shape as well.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=130)** Now let's upload our work to Power BI service.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=134)** We first want to save it.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=137)** We'll then select Publish.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=140)** And this connects to the workspace we're logged into.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=143)** Let's select ESPN Analysis.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=146)** Now let's go into the Power BI service to see what it looks like.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=151)** Here's our ESPN Analysis workspace, we see the Report and Dataset have been uploaded.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=159)** We click on the link, we can interact with it in the same way we did for the desktop file.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=168)** Conversely, we also see the view for the Power Query script updated and uploaded into the Power BI service as well.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=176)** There are some limitations when leveraging R scripts and Power BI both in the desktop version and here in the Power BI service.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=184)** You'll want to make sure your R scripts are compatible with R version 3.4.4 or the most recent version that works.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=193)** If you have questions on this documentation, please review the Microsoft Power BI documentation online for the most recent updates.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=202)** It's also important to look at the limitations for what you can share.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=206)** Power BI doesn't let us publicly share R script visuals for example, at least at the time of filming for this course.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=215)** R visuals and R scripts also may not work with certain workspaces or security configuration.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/interacting-between-visual-components?u=76281980&t=222)** So it's important to research this before deciding to use an R script and share it in the Power BI service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (8), bi (8), [[Microsoft Power Query|Power query]] (4), data (3), database (1)
> **CLI Commands:** make (2)
> **Env Vars:** espn (2)
> **Versions:** version 3 (1), 4.4 (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Moving into Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-moving-into-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-moving-into-power-bi?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-moving-into-power-bi?u=76281980&t=5)** - [Instructor] Your challenge for this chapter is to take one of the previous chapters challenges for logistic regression modeling and bring it into Power BI.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-moving-into-power-bi?u=76281980&t=14)** You can choose to leverage either the binomial, multinomial or ordinal logistic regression models.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/challenge-moving-into-power-bi?u=76281980&t=22)** In Power BI, you can either set up the model in the Power Query Editor or by running code in the standard R visual.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (2), power (2), bi (2), [[Microsoft Power Query|Power query]] (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Moving into Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=5)** - In my solution.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=6)** I'm going to update the Power BI Desktop model to show a different independent variable within the power query R script.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=14)** We'll select to open the Query Editor again, we then double click on the Source Step, which opens the R script and a pop-up window again.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=26)** Let's remove the Field Goal from the GLM function in the second line.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=36)** Now let's load our data again, to see how it looks, let's remove our filter selection.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=45)** We now see there are two distinct plots that separate the Home games.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=51)** In this case which is represented with blue compared to the Away games represented in orange, zero labels.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=59)** One way we can add interaction in Power BI is by creating a way to select between the models displayed.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=66)** There are a few ways to do this, but one way is by updating the query again, within the Power Query Editor to model this scenario.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=74)** This is more of a Power BI trick than anything else, but I think it's a neat one.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=79)** I'm going to again, select the R script data.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=82)** And we're going to add a column to our query, which we'll call Variables Include.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=90)** And I'm going to say this is Home or Away games, and we'll see why in a few steps.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=99)** Let's also add a conditional column called Home or Away.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=106)** It says if Home or Away equals one, let's make this Home.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=116)** And we want to put our alternative result as Away in the Else clause.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=126)** So now see that the ones are Home and the zeros are Away.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=131)** Now I'm going to duplicate this query.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=134)** By right clicking, on the name of it and let's just rename it.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=139)** We'll leave it with the suffix (2) at the end.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=143)** And this one's only going to have one independent variable.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=147)** So we'll want to go into the R script again by double clicking on the Source.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=153)** And we'll remove the Home or Away from the GLM function in the second line.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=162)** So this updates are logit variable in the R script.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=167)** And we'll double click on the Added Custom Step.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=171)** And this is going to say All Games instead of Home or Away games, because we can't differentiate between the Home or Away in this particular query.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=182)** We'll also update our conditional column to say that both of the results are All Games and this isn't necessarily the most efficient way to do this, but in the sake of time and because of the data set's not really a big.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=199)** This is an easy way to do it that's consistent with both of the queries because we're going to combine them as we see in the next step.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=206)** Now let's combine the two queries together by selecting the R script data, because this already loads into our scatterplot visual.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=215)** We'll then select the Combine option in the Home dropdown menu.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=220)** I'm going to select Append Queries.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=224)** And in this case, I'm going to select the second R scripts data with the (2) suffix on the end of it.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=233)** And we see this combines the data sets.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=236)** We scroll down a bit, we'll see the second data set below.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=240)** We see All Games and then change the data type to text for consistency.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=250)** Now, let's load our data into Power BI Desktop again.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=255)** Okay, so we got a message about duplicate value.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=259)** So.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=261)** Let's double check we want to actually remove the join between the table here.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=266)** We don't want our tables to be connected.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=269)** They're just separate data sources.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=271)** They're not connected tables.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=273)** The model.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=276)** Now let's go back into our Home menu on our Report page and Refresh the data sets.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=284)** So we now see a third line effectively on our scatterplot visual.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=291)** And what this represents is all the games.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=293)** So it's kind of the midpoint between them.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=297)** So we're going to update our legend to use the new field we added, which is Home or Away instead of the current field.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=309)** So this is the same results are very similar to them, except we're using something that's a bit more clear in the naming convention.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=319)** So we see the colors update.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=321)** So we have a lighter blue line in the middle that represents, all the games and a darker blue line that represents, Away games and an orange line that represents, Home games.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=333)** So, if we only wants to see one of these views.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=336)** Let's update our slicer to use the field we just created before we appended the query.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=346)** So this is going to be the Variables Include.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=349)** We're going to use that as our field and we'll remove the season start year.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=354)** Now, when we select one of these choices, if we select all the games, we see a single line in the view as the sigmoid curve.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=362)** If we select Home or Away Games, we see the line splits into two.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=366)** So this is a way to interact with a logistic regression model by effectively letting the end user select which view they want to see.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=375)** They can see all the games, which means that we don't separate the Home or Away independent variable as part of the model, or we can select to include the Home or Away independent variable in the model.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/solution-moving-into-power-bi?u=76281980&t=386)** And we see it update it in the scatterplot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), power (4), bi (4), [[Microsoft Power Query|Power query]] (2), next (1)
> **UI Navigation:** click on (2), select the (2), open the (1), dropdown (1), scroll down (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Env Vars:** glm (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - in (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps with logistic regressions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=0)** - [Helen] Now that you've learned about model and logistic regression, you can build out your knowledge from here.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=5)** Try out the models on some of the other built-in datasets in R, or find examples of logistic regression you can apply on your own data.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=14)** Logistic regression is a big topic area.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=17)** There's a lot more to learn about binomial and multinomial models, as well as starting to explore ordinal models, which I touched on slightly in this course.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=27)** If you want to learn more about AI and machine learning models, as well as statistical methods, check out some of the other courses in the library on these topics, like Microsoft Excel: Using Solver for Decision Analysis, R for Data Science: Lunchbreak Lessons, [[Power BI- Integrating AI]] and Machine Learning, Data Dashboards in Power BI, and Advanced Microsoft Power BI.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=53)** I'd love to stay connected, and hope you learn more about logistic regression.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-logistic-regression-in-excel-r-and-power-bi/next-steps-with-logistic-regressions?u=76281980&t=58)** Please follow me on LinkedIn to see more content on these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (4), data (3), ai (2), power (2), bi (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [helen] (1)


## Instructor

- [[Helen Wall]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- R (Programming Language)
- Artificial Intelligence (AI)
- Microsoft Power BI
- Microsoft Excel
- Logistic Regression

## Path Context

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[From Excel to SQL]] | **6 of 7** | [[Excel- Economic Analysis and Data Analytics]] →

## Appears In

- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Artificial Intelligence (AI), Machine Learning, Microsoft Excel
- [[Machine Learning with Python- Logistic Regression]] — Artificial Intelligence (AI), Machine Learning, Logistic Regression
- [[Power BI- Integrating AI]] — Artificial Intelligence (AI), Microsoft Power BI, Machine Learning
- [[Complete Guide to Excel Statistics with Copilot]] — Artificial Intelligence (AI), Microsoft Excel
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)