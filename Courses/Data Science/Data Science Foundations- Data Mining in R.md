---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-science-foundations-data-mining-in-r
url: "https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r"
duration_minutes: 231
duration: 3h 51m
level: Intermediate
updated: 2/12/2021
learners: 86316
skills:
  - Data Mining
  - R (Programming Language)
  - Data Science Foundations
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHjJxJhmYJGMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1612992297885?e=2147483647&amp;v=beta&amp;t=ayYTfsmYeq9wAnRjyfpi3yoH3isr6sq6pERT_Salfmg"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Data Analysis Skills]]'
prev_courses:
  - '[[Python Data Analysis]]'
next_courses:
  - '[[SQL Tips and Tricks for Data Science]]'
path_nav: '[{"path":"Develop Your Data Analysis Skills","position":6,"total":10,"prev":"Python Data Analysis","next":"SQL Tips and Tricks for Data Science"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/data-mining
  - skill/r-programming-language
  - skill/data-science-foundations
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Science%20Foundations-%20Data%20Mining%20in%20R.md)

![Data Science Foundations: Data Mining in R](https://media.licdn.com/dms/image/v2/C4E0DAQHjJxJhmYJGMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1612992297885?e=2147483647&amp;v=beta&amp;t=ayYTfsmYeq9wAnRjyfpi3yoH3isr6sq6pERT_Salfmg)

# Data Science Foundations: Data Mining in R

> Data science continues to grow in sophistication and demand at an exponential rate. Data mining is the area of data science that focuses on finding actionable patterns in large and diverse datasets: clusters of similar customers, trends over time that can only be spotted after disentangling seasonal and random effects, and new methods for predicting important outcomes. Instructor Barton Poulson fo

> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r) | 3h 51m | Intermediate | 86K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [R for data mining](#r-for-data-mining)
  - [Who should watch this course](#who-should-watch-this-course)
  - [Exercise files](#exercise-files)
- [**1. Preliminaries**](#1-preliminaries) (4 videos)
  - [Tools for data mining](#tools-for-data-mining)
  - [The CRISP-DM data mining model](#the-crisp-dm-data-mining-model)
  - [Privacy, copyright, and bias](#privacy-copyright-and-bias)
  - [Validating results](#validating-results)
- [**2. Dimensionality Reduction**](#2-dimensionality-reduction) (7 videos)
  - [Dimensionality reduction overview](#dimensionality-reduction-overview)
  - [Dataset: Handwritten digits](#dataset-handwritten-digits)
  - [PCA](#pca)
  - [LDA](#lda)
  - [t-SNE](#t-sne)
  - [Challenge: PCA](#challenge-pca)
  - [Solution: PCA](#solution-pca)
- [**3. Clustering**](#3-clustering) (7 videos)
  - [Clustering overview](#clustering-overview)
  - [Dataset: Penguins](#dataset-penguins)
  - [Hierarchical clustering](#hierarchical-clustering)
  - [K-means](#k-means)
  - [DBSCAN](#dbscan)
  - [Challenge: K-means](#challenge-k-means)
  - [Solution: K-means](#solution-k-means)
- [**4. Classification**](#4-classification) (7 videos)
  - [Classification overview](#classification-overview)
  - [Dataset: Spambase](#dataset-spambase)
  - [K-nn](#k-nn)
  - [Naive Bayes](#naive-bayes)
  - [Decision trees](#decision-trees)
  - [Challenge: K-nn](#challenge-k-nn)
  - [Solution: K-nn](#solution-k-nn)
- [**5. Association Analysis**](#5-association-analysis) (7 videos)
  - [Association analysis overview](#association-analysis-overview)
  - [Dataset: Groceries](#dataset-groceries)
  - [Apriori](#apriori)
  - [Eclat](#eclat)
  - [CBA](#cba)
  - [Challenge: Apriori](#challenge-apriori)
  - [Solution: Apriori](#solution-apriori)
- [**6. Time-Series Mining**](#6-time-series-mining) (7 videos)
  - [Time-series mining overview](#time-series-mining-overview)
  - [Dataset: AirPassengers](#dataset-airpassengers)
  - [Time-series decomposition](#time-series-decomposition)
  - [ARIMA](#arima)
  - [MLP](#mlp)
  - [Challenge: Decomposition](#challenge-decomposition)
  - [Solution: Decomposition](#solution-decomposition)
- [**7. Text Mining**](#7-text-mining) (7 videos)
  - [Text mining overview](#text-mining-overview)
  - [Dataset: The Iliad](#dataset-the-iliad)
  - [Sentiment analysis: Binary classification](#sentiment-analysis-binary-classification)
  - [Sentiment analysis: Sentiment scoring](#sentiment-analysis-sentiment-scoring)
  - [Visualizing Word pairs](#visualizing-word-pairs)
  - [Challenge: Sentiment scoring](#challenge-sentiment-scoring)
  - [Solution: Sentiment scoring](#solution-sentiment-scoring)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [R for data mining](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=0)** - [Barton] Back in 1890, William James, the founder of American psychology and my professional hero, wrote about how newborn babies were inundated with sensory stimuli.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=12)** He called it a great blooming, buzzing confusion.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=17)** That takes time and effort for the baby to make sense of what's me, what's not me, what matters and what can be safely ignored?
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=24)** That's a feeling that comes to a lot of people when they start working with data especially large and diverse data sets.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=31)** The problem is that data which holds the secrets to so much value can be an embarrassment of riches.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=38)** You have so much data available to you with so much more coming in, but you don't know what to do with it.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=46)** How can you make sense of it?
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=47)** How can you find the real value in such an enormity of raw materials?
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=53)** What matters, what can be safely ignored?
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=55)** But rather than having to wait like a newborn for the very slow processes of cognitive and social development, we can find some immediate answers to our questions by turning to [[Data Mining]].
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=70)** I'm Barton Poulson and in this course, we'll explore some of the most important principles and techniques in modern data mining to help you cut through the noise.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=80)** We'll look at some of the most useful methods for dealing with the DeLucia data.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=84)** Those methods include dimensionality reduction to help you sort through the noise and find reliable indicators in your data, clustering techniques to help you sort cases into useful groups, classification to automate some of the most difficult work of categorization, association analysis to find if/then predictions in your data, time series techniques to describe and predict valuable temporal patterns, and methods for mining texts with a special focus on locating the critical evaluations that people leave in their [[Unstructured Data]].
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=119)** We'll focus on the hands-on practices of mining data using one of my favorite tools, the R programming language and the associated [[RStudio]] environment.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=128)** You'll see how you can quickly use both simple and sophisticated methods to get a better understanding of how to mine data for value and in turn, reach the goals that are important to you.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=141)** All of these will help you sort through the great blooming and buzzing confusion of the data world.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/r-for-data-mining?u=76281980&t=148)** And with that, let's get started with [[Data Science Foundations]]: Data Mining with R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (3), [[Unstructured Data]] (1), [[RStudio]] (1), [[Data Science Foundations]] (1)
> **CLI Commands:** find (4), make (2)
> **Speakers:** - [barton] (1)

#### [Who should watch this course](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=0)** - [Instructor] While this course is designed as an accessible introduction to the field of [[Data Mining]], it works best if there were a few things you already know and are comfortable with.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=10)** The first thing is that you should already be familiar with the R programming language and the R Studio environment.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=18)** If you'd like some help getting up to speed on those, I recommend that you take a look at the course, Learning R, or the pair of courses that make up R Essential Training.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=27)** Part one looks at wrangling and visualizing data and part two looks at modeling data.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=34)** In addition, it's helpful if you're familiar with basic statistical concepts.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/who-should-watch-this-course?u=76281980&t=38)** If you'd like a refresher, I recommend the course Data Fluency: Exploring and Describing Data, as well as several other courses available in our online learning library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Exercise files](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=0)** - [Instructor] If you have access to the exercise files for this course, you can download them to your desktop, as I've done here.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=7)** When you open this exercise files folder, you will see that there are three sub-folders.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=11)** One for all of the code or R scripts that I use in this course.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=15)** Another folder called data that contains several example datasets, and a third folder called output that's currently empty, but you can use it to save any images or files you create.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=26)** In addition, there are two other files in this exercise files folder.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=31)** One is a read me file that explains these same folders and files and another is an R project file which helps organize the code and data files in R Studio, that's the environment that we'll use in this course.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=44)** If you don't have access to the exercise files, that's okay.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/exercise-files?u=76281980&t=47)** You can still follow along by watching how I use the course files.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (4)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Preliminaries

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools for data mining](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=0)** - If you're going to go out mining then you need the right tools.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=5)** When you're mining for data gold, that means software.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=8)** And the two most common tools for that are [[Python (Programming Language)|Python]] and R.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=13)** Now as it happens, we have two versions of this course, with one showing how to mine data in Python and the other one in R.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=21)** There are good reasons for choosing these two languages.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=25)** Python is currently the most popular language for [[Data Science]] and machine learning.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=31)** It has an advantage of being a general purpose language, which means millions of people know how to use it because it can program basically anything.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=39)** It's also well adapted for data.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=41)** Python also is really easy to learn, it's got a clean readable syntax.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=47)** R is a different kind of language.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=50)** It's a programming language that's specifically developed for data analysis.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=54)** Consequently, it's very popular with scientists and researchers.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=58)** So it's what I learned first as a way of working with data.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=62)** Either one works great for mining data, but I do want you to be aware of some of the other options.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=69)** I want to make sure to mention applications with point and click GUIs or Graphical User Interfaces that are developed with data work in mind.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=77)** Some of these are free, some are expensive.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=80)** Some are similar to spreadsheets, some have extensive programming abilities.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=84)** They include apps like SPSS, very popular for analyzing data in the social sciences, which is where it was first developed.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=94)** Or SAS, which also has strong programming abilities, jamovi, a free open source application that resembles SPSS but runs on R is one of my personal favorites.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=105)** JASP is another free open source application that strongly resembles SPSS and jamovi.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=111)** And then there's [[Tableau]], which is specifically for data visualization, but it's one of the Go to Tools for people who are trying to get a feel for large data sets.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=122)** In addition to these apps, one language that anybody who's going to work with data should learn is [[SQL]], that Structured Query Language and it's usually pronounced sequel.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=132)** This is for accessing [[Databases]].
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=134)** And especially if you're working in a large organizational setting, you're going to have a lot of data in databases.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=140)** SQL has a great learning ROI or Return On Investment.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=144)** It doesn't take much to get most of the things that you're going to need in SQL and get ready accessing and cleaning and querying data.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=155)** I also want to mention spreadsheets.
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=158)** So the rows and columns of [[Microsoft Excel]] and [[Google]] Sheets.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=163)** The reason these are important is A, they're the single most common data tools in the world, and that's my personal belief.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=171)** Everybody has 'em and good chances if you're working with a client, they may provide you with data in spreadsheets, they may want the results back.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=179)** They're great for browsing data, they're great for making very simple graphs, and anybody who's going to work with data owes it to themselves to be very comfortable with both of these spreadsheets.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=190)** Now, I want to give you my personal philosophy about data tools, I see an order to things.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=196)** Generally, I recommend that people start with the simplest tools, and that would be spreadsheets, until the data you're working with or the analysis you need to do become unwieldy.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=207)** Then consider the next step up, that's an application like jamovi or SPSS.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=212)** These allow you to do a lot of specialized procedures for analyzing and mining data or use a [[Data Mining]] specific application like RapidMiner or [[Knime]].
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=222)** But only then should you consider taking the final step to programming languages.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=226)** They are of course, the most flexible and powerful, but often they're also the most difficult to learn and to use proficiently.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=233)** I do want to give you a little bit of data about programming languages and apps for context.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=239)** KDnuggets is one of the most common and popular sites for information about data mining.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=246)** KD stands for Knowledge Discovery, and this is their most recent survey of software use among practicing data miners.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=254)** And what you'll see here is that Python is number one on the list, where 66% of the respondents said that they used Python on a regular basis.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=262)** 51% said they used a software application called RapidMiner and it's popular but the survey people say that may have been because this survey was actively promoted on a RapidMiner discussion list.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=275)** R is third at 47.
>
> **[4:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=278)** Please note that [[Microsoft Excel|Excel]], the spreadsheet is here with 35.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=281)** Anaconda is really a distribution of Python, and then there's the language SQL here at the end.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=287)** So it lets you know some of the things that are frequently used in data mining.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=292)** Another perspective on this is postings for data science jobs on the job site Indeed.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=298)** And this is from 2017, so it's a little old, but the pattern is consistent over time.
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=304)** What you see again is Python is here at the top, SQL is close behind, it is still an important thing in data science.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=311)** And then if you come down here, you'll see that R is still in demand.
>
> **[5:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=315)** Any one of these can be very useful tools for data mining.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=320)** And so consequently, I want you to choose your tools wisely.
>
> **[5:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=325)** You have great flexibility and choices.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=328)** I'm going to be emphasizing Python and R in the two versions of this data mining course, but you have a lot of other options.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=335)** Almost any tool you can choose can do almost any analysis if you give it enough work, but do some things, look at the client's requirements, do they use a particular software application or language that they want you to use?
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=349)** Obviously, you'd want to work with that.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/tools-for-data-mining?u=76281980&t=352)** Python and R are common but use what works best for you and the particular project you're working on, and that can get you started on getting some insight from your data as you mine through it for the valuable insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[SQL]] (5), [[Data Mining]] (5), [[Data Science]] (3), [[Databases]] (2)
> **Env Vars:** sql (5), spss (4), sas (1), jasp (1), roi (1)
> **CLI Commands:** python (10), make (1)
> **Definitions:** is a  (1), stands for (1)
> **Warnings:** be aware (1), note that (1)
> **Tools:** anaconda (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### [The CRISP-DM data mining model](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=0)** - [Instructor] I know this course focuses substantially on how to program analyses to mine data, but it also is important to think about the context in which that programming takes place, that is the project as a whole.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=14)** And when it comes to [[Data Mining]], there is, in fact, a well-established framework for projects.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=19)** It's called [[CRISP-DM]], and that stands for Cross Industry Standard Process for Data Mining.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=30)** And it describes six phases to data mining.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=34)** I'll give you a quick overview of each of these.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=37)** The first phase is business understanding.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=41)** This is where you do things like determine the business objectives, the thing you're trying to accomplish, the situation assessment, determine data mining goals, and produce the project plan.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=52)** The second phase is data understanding.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=55)** This is where you collect the initial data, you describe the data, explore the data, verify the [[Data Quality]].
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=64)** The third phase is [[Data Preparation]].
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=67)** This includes describing the data set, selecting the data, including the rationale for including or excluding particular cases, cleaning the data, constructing the data, which means things like derived attributes and generated records, and then integrate the data, so merging it with other sources.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=87)** And then formatting the data to make it so it fits with the existing data and so it fits the software that you're going to be using.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=96)** The fourth phase in CRISP-DM is modeling.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=100)** This is where you select the modeling technique and check the assumptions, generate the test design, build the model, including looking at parameter settings, the model description.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=113)** Then you can assess the model.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=115)** That's looking at things like how well does it fit the data and do you need to revise any of the parameters that you used.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=121)** The fifth phase is evaluation.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=124)** This is where you can evaluate the results, see how well the results work with regards to the business success criteria.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=131)** And then you can review the process, determine the next steps, that's a list of possible actions or perhaps a final decision.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=140)** And then the sixth and final phase of CRISP-DM is deployment where you apply the conclusions to the problem to be solved, the reason you designed the project in the first place.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=151)** So this includes plan deployment and plan monitoring and maintenance, see how well it holds out, producing the final report or presentation, and reviewing the project, including the documentation of the entire process so it can be evaluated and possibly replicated in the future.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=169)** So that is CRISP-DM, one of the most common process descriptions for data mining.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=176)** If you'd like another take on the organization of a data project, I've described my own personal system, which I called the [[Data Science]] Pathway, in the course [[[[Data Science Foundations]]- Fundamentals]].
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/the-crisp-dm-data-mining-model?u=76281980&t=187)** But with either approach, the industry standard CRISP-DM or the Data Science Pathway, you're going to be better able to set up, run, and get actionable insights from your data mining projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (6), [[CRISP-DM]] (5), [[Data Science]] (2), [[Data Quality]] (1), [[Data Preparation]] (1)
> **Env Vars:** crisp (5)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** select the (1)
> **Definitions:** stands for (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Privacy, copyright, and bias](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=0)** - [Instructor] I know we're here for some technical training, but I want to take a minute and remind you that [[Data Mining]], like basically everything else, takes place in a human social context.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=12)** It's important to respect the people who provided the data, or who will benefit from your work.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=18)** And there are a few important dimensions to that respect.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=23)** The first important issue is [[Privacy]], which affects how you gather data, how you store data, and what you share.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=30)** This is both an issue of good manners, and as it happened, several major laws.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=37)** For instance, in the European Union, there's the GDPR, that's the General Data Protection Regulation.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=45)** In California, there's the California Consumer Privacy Act, or CCPA.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=51)** In the U.S., there's also, at the federal level, HIPAA, the Health Insurance Portability and [[Accountability]] Act, which is going to affect health records.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=60)** And then there's FERPA, this is the U.S. Family Educational Rights and Privacy Act.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=65)** So if you're working with any educational data, this is another important set of regulations you're going to have to work with.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=71)** And all of these are regulations that have teeth.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=74)** They are very specific about some of the things that you can use, what you can't use, or how you have to process the data to meet privacy regulations.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=84)** And there's a lot more details on each of these, but if you're working with data from the European Union, or in California, or health records or education, you owe it to yourself to take a little bit of time, to see how each of these regulations deal with privacy.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=99)** There's also copyright.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=101)** And this is important because data mining often uses data that's found on the web.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=105)** And you know how you can't, for instance, just use any picture or a video you find online because they may still belong to the people who created them.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=114)** You need to have the proper license.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=117)** Now, it may be that they put a creative commons license on there and make it so anybody can use it, but it may be restricted and proprietary, in which case, you need permission, or possibly to pay a fee.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=128)** The same thing is true of data.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=129)** You can't assume that data can be freely used just because it's on the web.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=134)** Just because you see the numbers in front of you, doesn't mean you can take them.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=138)** That data belongs to somebody.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=140)** They put it there and you have to check the license to make sure that what you're doing is permissible.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=148)** And then there's the issue of whether your data is potentially biased.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=152)** And I think of a few elements in this.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=154)** Number one, anybody who's worked in computer programming knows GIGO which stands for Garbage In, Garbage Out.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=160)** And what that means is if you have bad data, well, you may have a great algorithm, but if you start with bad data, you're going to end up with bad conclusions, even if you have very sophisticated approaches.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=173)** So you need to check the quality of your data before going in.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=175)** And that includes the representativeness, specifically, do you have a sufficiently diverse data set that the data set that you train your model on matches the data that will be coming in once you put your model out there in the wild?
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=193)** So you wonna look at the diversity, the spread, both of people and of situations, and the weighting, how much emphasis you put on each kind of case in your training sets, so it can transfer well to the testing data.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=208)** And then there's an issue of construct validity.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=211)** And that really means, are you measuring what you think you're measuring?
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=215)** And it has to do with interpretation because there's often a gap, or at least a slight mismatch between what you want and what you have, especially in data mining 'cause you're frequently using what's already there.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=228)** And so it's very important to interpret things in the most precise manner that reflects what it actually meant when the data was gathered.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/privacy-copyright-and-bias?u=76281980&t=238)** Now, if you want more information on some of these [[Privacy Issues]] and social issues, you can take a look at another course, AI Accountability Essential Training, which is available here, which goes into all of these issues in more depth and we'll make it so you can construct, plan, conduct, and implement your data mining project while getting more meaningful and accurate data and avoiding some common pitfalls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (5), [[Data Mining]] (4), [[Accountability]] (2), [[Privacy Issues]] (1)
> **Env Vars:** gdpr (1), ccpa (1), hipaa (1), ferpa (1), gigo (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for instance (2), picture (1)
> **Definitions:** stands for (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Validating results](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=0)** - [Instructor] Here where I live in Utah, I can see the world's largest copper mine from my kitchen window.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=6)** Actually, you can see the Bingham Canyon Mine, better known as the Kennecott Copper Mine, from pretty much anywhere in Salt Lake County.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=12)** I mean, it's several miles across.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=14)** You can even see it from a NASA satellite photo like this one.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=18)** Now, mining is hard.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=20)** If the things you wanted were sitting there right on top of the ground like watermelons, you wouldn't have to dig up so much dirt to get the valuable things that are hidden.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=30)** The same thing is true in [[Data Mining]], except now, instead of looking for copper, we're looking to find the signal that's hidden in the noise of the data.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=39)** We're trying to find the meaningful and actionable patterns in the randomness.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=45)** But there are a few things you need to be aware of, and one of the most important is that, with enough parameters, with a sufficiently complicated model, your model can fit any dataset perfectly, but that doesn't mean it's going to work well in practice.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=61)** This is known as the danger of overfitting, in getting a model that is much too specific to the data that you currently have.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=70)** The problem is that, when the model is too closely meshed with the data, it doesn't work well with new data.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=77)** This issue can go by several names.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=79)** You can call it statistical model validation.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=82)** You build a model on your sample data or your training data, but is it valid?
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=88)** Does it work well with the testing data or with new data?
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=91)** In some circumstances it's called external validity.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=95)** How well does your model work when you go out the door from your lab to the real world?
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=102)** And then there's the catchall term of generalizability?
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=105)** How well does your model, the thing that you did all this work and data mining for, how well does that work with new people, the enormous variety that you can encounter, for example, when you launch a new social platform?
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=118)** Now these are important issues.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=120)** Fortunately, there are several ways to assess the validity of your model to try to estimate how well it's going to work when you go beyond the data that you built the model on.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=133)** The standard method from laboratory sciences, like the one I am trained in, is usually done manually and in great detail.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=140)** It says, check the data.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=142)** So you're actually going to do a hands-on verification of the distributions, whether you have outliers, whether you have anomalies.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=152)** And then you might check the fit.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=153)** How well does your data match the assumptions of your statistical procedures?
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=160)** How well do the data fit the particular model?
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=165)** Then you can check the sample.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=167)** You're going to look at it more closely.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=169)** Does it appear to be representative of the overall population?
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=171)** Are there unusual cases of missingness in the data?
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=176)** And then, when you're all done with that, you just like do the study, get more data, do it again.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=182)** Now, you can think about validation happening at two points in time, the standard model that I just described, as soon as the validation happens in the future.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=191)** So you do this study again with a new sample.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=194)** This is replication, and maybe you'll do it in a different place or maybe with a slightly different method.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=202)** And when you're done, you can combine the results, or at least compare them to see how consistent they are over time.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=208)** On the other hand, you might want to do things right now.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=212)** With enough data, you can do replications with what you currently have.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=217)** And there are a few general ways that this is done.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=221)** One is referred to as holdout validations, and the other is referred to as cross-validation.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=227)** I'll describe each of these.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=229)** With holdout validation, what you do is you split the dataset into two parts.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=235)** One is called a training dataset, and that might be 70% of the data.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=240)** Sometimes it's 80, sometimes it's 90.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=242)** And the other part is the testing dataset, and that's the [[Representational State Transfer (REST)|rest]] of the data.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=248)** And the idea here is that you train the model, you build your model, you do all your mining on the first part, the training dataset.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=258)** And then, once you've come up with a really good model that you're confident in, you test that model on the second part.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=264)** And the idea is you only touch the second part once.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=268)** You do all of your work, all of your evaluations on the training dataset.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=274)** And sometimes, you can have a third part that goes in between, called a validation dataset, which lets you compare several different methods that you're exploring and evaluate them on another dataset, and then pick the best one and apply it to the testing dataset.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=288)** Now, I'll use this method in many of the demonstrations in this course, but I also want you to be aware of cross-validation, and this is where you split your dataset into k-folds or segments.
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=301)** K's a number that you choose, and it might be, for instance, 3, 5, 10, 20.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=307)** And the idea here is that you take all of the parts except one, you take k minus 1 parts, and you train the model on those, and then you test the model on the remaining fold, and then you rotate through the dataset k times, so each fold can serve as a test set.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=327)** You can think of it this way.
>
> **[5:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=329)** Cross-validate many models on 60% of your data, or maybe it's 50% or maybe it's 80, some percentage.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=338)** And then, you validate the model on 20%, but you rotate through and you try it again each time.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=346)** And then, you find a good model, the best one, and you test that on the last 20%.
>
> **[5:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=351)** And I will demonstrate this approach with a few of the procedures that we have in this course.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=357)** The idea here is that all of your work in data mining, that's the digging, the sorting and the sifting through the data and the models, allows you to find the greatest value.
>
> **[6:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/validating-results?u=76281980&t=366)** And then, these validation methods allow you to verify your findings and proceed to implementation with confidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (4)
> **Definitions:** known as (2), is called (1)
> **Analogies:** for example (1), just like (1), for instance (1)
> **Warnings:** be aware (2)
> **Env Vars:** nasa (1)
> **Speakers:** - [instructor] (1)


### 2. Dimensionality Reduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Dimensionality reduction overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=0)** - [Narrator] [[Data Mining]] comes into its own when you're dealing with lot's of data.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=5)** You may be familiar with the three V's that define [[Big Data]], volume, velocity and variety of the data.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=13)** But it turns out that paradoxically, you can have too much of a good thing, having lot's of cases or observations is generally good.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=22)** But things get much more complicated when you have many, many dimensions or fields or features or variables.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=31)** And there are a few reasons why that can be a special challenge, some of the problems that come up with high dimensionality include an exponentially increasing complexity and demands.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=44)** You have so many more possibilities now, and it becomes so much harder to compute it.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=50)** That's because each dimension isn't additive, it's multiplicative.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=54)** Also with each variable you have idiosyncratic error, that means, each variable doesn't perfectly represent the thing that your hoping that it measures, it represents something close to it, but it brings in it's own little bit of noise.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=69)** And when you have lot's of different noise, it becomes harder to find the signal in the data.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=75)** And consequently, you also have the risk of overfitting, if you have a thousand variables in there, and just at random, 17 of them are super correlated with your outcome, your algorithm's going to latch on to those.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=88)** But if those 17 variables are affected by noise, it's not going to generalize well when you go to another situation.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=95)** And finally, when you have a lot of variables or dimensions, you have issues with interpretability.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=101)** If you're building a model that a human has to understand, and it's got 700 variables that interact in very complex ways, it's nearly impossible to make heads or tails of it for human driven decision making.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=115)** And so there are some solutions to these particular problems one is to combine variables to reduce the complexity or dimensionality of your data set, one interesting thing about this is, in general, the errors associated with each variable tend to cancel out when those variables are combined.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=134)** This give you more stable measurement, and it gives you better generalization of your model from the current data to conceivable new data.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=145)** Also, because you now have a smaller number of dimensions that you're dealing with, it may be easier to interpret the model and have human decision makers apply it in their processes.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=157)** The general concept we're dealing with here is dimensionality reduction or fewer dimensions.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=163)** And the idea is to project the data into a lower-dimensional space, while preserving as much as the useful variability and interrelationships as possible.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=175)** There are a couple of metaphors for this, one is to think of a hands shadow, a hand is a three-dimensional object but a shadow is two dimensions.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=184)** Now depending on the position of the hand, the light source and the surface, you can get a shadow, that might be a little ambiguous like we have here on the left.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=194)** But the shadow on the right is readily identifiable as a hand, even though you've lost one of the dimensions in the process.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=202)** A similar process can happen with data and you can get the data shadow, as a way of thinking about it.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=208)** For example, a scatter plot like this, show a two-dimensional representation, we got our variable X across the bottom, our variable Y up the side.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=216)** And each dot represents a pair of values for each case, so we have two dimensions.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=224)** Now, you can see here on the vertical dimension, we've got a fair amount of variability, it goes from negative four to positive four.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=232)** And we have the same thing on the horizontal, it goes from negative four to positive four.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=237)** And so we have two distinct dimensions, but if we were to rotate the plot, so it goes on this regression line that's in the middle, then we have almost no vertical variability, and we have enhanced variability on the horizontal access.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=255)** And at this point, instead of talking about two dimensions, we can talk about a single common component or dimension, and it makes it much easier to deal with the data.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=267)** Now there are many choices, many [[Algorithms]] for dimensionality reduction, but there are three I want to show you in this course.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=274)** The first one is PCA, which stands for principal component analysis, it's far and wide the most common method, along with the closely related factor analysis, and what PCA does is it looks for components, those are like combined dimensions.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=292)** They can account for several factors or variables at once, the same way we rotated the scatter plot and then we saw one clear dimension that we could use instead of two.
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=304)** That actually shows you that the rotation is an important part of the interpretation and implementation of PCA.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=311)** Another method that we're going to look at is LDA, which stands for linear discriminant analysis.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=317)** And what this does, is it's designed to separate cases or your observations into different classes or categories, so it's actually a method of classification, but it uses these underlying components to do it.
>
> **[5:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=331)** It combines the variables and the data set into dimensions that can separate the classes cleanly.
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=339)** And then a particularly sophisticated method is t-SNE, which is short for t-distributed stochastic neighbor embedding.
>
> **[5:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=348)** This is an example of a nonlinear dimension reduction.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=352)** And it's good for showing probabilities of pairs being connected in points, and if you have data that's arranged in a helix like his one or you have circles or ones enclosed in the other.
>
> **[6:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=363)** Then t-SNE can be a very powerful method for finding the dimensions, even when you can't draw a straight line between things.
>
> **[6:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dimensionality-reduction-overview?u=76281980&t=371)** Anyone of these methods, PCA, LDA, t-SNE and many many others, can be ways to help you sort through a very large number of dimensions or variables in your data set, and combine them into smaller, more stable and more generalizable factors or components that can help you more easily find the value in your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (1), [[Big Data]] (1), [[Algorithms]] (1)
> **Env Vars:** pca (4), sne (3), lda (2)
> **Definitions:** stands for (2), is an  (2), is a  (1), short for (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Dataset: Handwritten digits](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=0)** - [Instructor] For our demonstrations of dimensionality reduction I'm going to be using a dataset that is handwritten digits is a very well known data dataset within the machine learning world.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=11)** And it describes images like this where people have written by hand a number and we're trying to get the computer to figure out what that number is.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=22)** Now, let's [[Zoom]] in on it a little bit.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=24)** And let me show you how the dataset works.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=27)** It's super imposes this number on a grid of pixels.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=31)** And what I have here is a 16 by 16 pixel.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=34)** The dataset actually uses 32 by 32 but this will give the idea.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=39)** It goes through this grid on four pixels, by four pixels 16 pixels at a time.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=46)** And it simply indicates how many of those pixels are activated.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=49)** How many of them are not just pure white.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=52)** This one has one, so this first variable that represents this 16 pixel grid would get a value of one.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=60)** This has nine pixels turned on, so it would get nine.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=64)** This has 12, so it would get 12.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=67)** This has five.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=69)** And it goes all the way through until we get to the end.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=71)** And this little four by four grid has none.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=74)** So it gets a value of zero.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=76)** And the last variable in the data set is a class label that indicate what the digit is a representation of, and in this case, it's a five.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=84)** But let me show you how this works in R.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=88)** To do this in R we'll use the handwritten digits dot R script.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=92)** And I'm going to be loading a few packages including janitor, which allows us to clean up the data a little bit.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=97)** Let me install those.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=100)** Now the data set that we're going to be using comes from the University of California Irvine Machine Learning Repository, very well known within the machine learning world.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=109)** And the optical recognition of handwritten digits dataset.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=113)** Here's a shortcut URL to that dataset.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=116)** We'll be using the op digits dot TRA, which is for training.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=120)** You can download it from there but you might lose the labels.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=123)** I've downloaded this directly into R and then saved it as a CSV file.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=127)** So it saves the variable names.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=130)** This is the code you can use if you want to uncomment this.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=133)** And if you have an internet connection you can download it directly, but I've saved it as op digits dot CSV in our exercise folders.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=141)** And I'm going to use this command to import the data into an object I'm calling DF that stands for data frame.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=148)** And I use that name all the time for my data so I can reuse the code.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=153)** So, I've saved it as a table.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=155)** Let's look at the first few, rows.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=161)** So we have variables that go from XO to X16 all the way to XO dot 26.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=167)** And you see there numbers that go from zero to 16 in most cases because that is how many pixels are turned on.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=175)** We have 3,822 observations or cases on 65 variables.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=182)** But let's clean up the data a little bit.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=184)** Let's take the last variable, which is the class label and rename it from X zero dot 26 to Y.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=190)** Just, I use that as a generic class label and then put it as a factor and then use it to overwrite the data frame using the assignment pipe.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=200)** Let's take a look, by pulling Y that gives us a vector instead of select which gives us a data frame and do factor count.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=207)** And here you can see the class labels zero through nine and how many cases there are of each.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=213)** And it's about even.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=215)** To simplify for our demonstrations, I'm going to use just three of the digits, one, three, and six.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=221)** And so I'm going to filter out keep just those the vertical pipe here means, or and then I'm going to drop the unused levels.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=228)** We can look at it again.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=230)** And now you see we have just the three class labels, one, three, and six.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=235)** And then I'm going to remove all of the columns that are constant.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=238)** Say for instance, the corners of the images where nobody wrote anything those are all blanks.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=243)** So right now you see we have 65 variables over here.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=247)** We're going to remove the constants and we go down to 56.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=250)** Now some of the demonstrations we'll use training datasets and testing data sets.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=254)** Some of them will use it all together.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=256)** So I'm going to split the data.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=258)** Because partitioning uses a random component, it's helpful to set a random seed.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=263)** I'm going to use the number one.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=265)** You can use anything here as a way of making things easy to replicate.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=271)** Now, as a way of splitting things without repeating or arbitrarily dropping cases that are similar I'm going to add an ID variable, which gives a row number.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=282)** Then I'm going to put 70% of the data in a training dataset called TRN for train.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=288)** Then I'm going to use anti join which is a way of saying use the original data frame and then use everything that we didn't put in the other one matching by ID which is unique by rows, and then remove that ID variable 'Cause we don't want that in our eventual dataset.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=307)** Then remove the ID variable from our training data set and then lastly remove it from the data frame.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=312)** And then we'll save the data in a format that's easy to reuse which is the R data serialized format RDS.
>
> **[5:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=321)** So I'm going to save the data frame as op digits dot RDS, the TRN with the underscore.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=328)** So we have our training dataset and the testing data set.
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=332)** And then I'm going to clear out the [[Windows]] and clear the packages.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=335)** We don't have any graphics clear to the console.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=338)** One important thing is if you have trouble with the code as you're running through, it may be a really good idea to clear your R session.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=346)** To do that you come up to session and say, restart R that'll give you a clean slate to start off.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-handwritten-digits?u=76281980&t=352)** And with that, we can start looking at dimensionality reduction in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Windows]] (1)
> **Env Vars:** csv (2), trn (2), rds (2), url (1), tra (1)
> **Definitions:** is a  (5), stands for (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [PCA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=0)** - [Instructor] The first method of dimensionality reduction I want to show you is the most common, probably the most useful.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=6)** It's PCA, or principal component analysis.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=10)** To do this, I'm going to load a few packages.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=13)** One is ggbiplot, which allows me to create biplots or two dimensional plots for components.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=19)** I'm going to load that, and then I'm going to load the training and test data sets for the opdigits that we created and saved in the R data serialized format.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=30)** We'll load the first one into TRN for train, and the second one into TST for test.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=36)** Now, there are several ways to do principal components in R.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=39)** The most common is prcomp which is built in.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=42)** You also have princomp.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=44)** Principle comes from the psych package and then PCA comes from the facto minor.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=48)** All of these are common choices but I'm going to stick with the most common prcomp.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=52)** What I'm going to do is I'm going to take the training data, I'm going to exclude the class variable, the one that actually says what the digit is, and then I'm going to use the prcomp command with these two qualifications.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=65)** I went to center and scale the variables.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=67)** This makes it so they all have the same mean, which will be zero, and they all have the same variant or standard deviation of one.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=73)** This is important because if one of the variables has a much larger range, then the principal component algorithm's going to latch on to that.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=81)** We don't want that, so we're going to standardize all of them.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=85)** And then I will save that analysis into an object called PC for principal component.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=91)** You can see, we have that over here.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=92)** It's a list, let's get the summary stats of our PC and model.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=98)** And what I have are 55 components because there were 55 variables that have fed in.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=104)** You'll get the same number of components as you have variables.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=107)** But, not all of them are equally important.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=109)** The goal here is to look for a principal or sort of the meaningful ones.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=113)** Now, if each variable contributed one unit of variance or standard deviation, you can see that some of these principal components account for more than that.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=122)** The first principal component accounts for three and a third unit of standard deviation.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=127)** So it's over three times as helpful as an individual variable.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=131)** The second one counts for 2.7, the third one, 2.11 and so on.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=135)** Now, this lets us know that we're able to take these 55 variables that we had and compress them into different components that have different levels of information in them.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=147)** What I'm going to do is plot the eigenvalues which are actually variances, which are the square of the standard deviations we have in this list.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=156)** And when I do that, you can see that some of these are more useful than others.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=161)** It's not labeled and it's not showing all 55, but this is the first component, and you can see it's got an icon value of over 10, the second one little lower, the third one a little lower than that, and then things seem to taper off.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=174)** But let's come back here and see how these components work by looking at the biplot.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=178)** Again, this going to be a two dimensional plot of the cases and the variables on these components.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=185)** To do this, I take the PC object, I feed it into ggbiplot and I tell it that I want to color things by their group and then show you how to group them.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=194)** So let's run that command and then we'll [[Zoom]] in on that.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=198)** And the really fascinating thing here is that our two components, the first component goes across the bottom explains 20% of the variance.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=206)** The second component goes up the side, it explains 13.5% of the variance.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=211)** These are the variables and how they associate with each of the components.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=216)** You can see the kind of look scattered all over, but the important thing is the groups.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=219)** These are the digits, the ones are in red.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=222)** You can see they're right here, the threes are in green, they're right here, and the sixes are in blue right here.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=228)** We have really good separation taking our original 55 variables and boiling them down to two principal components.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=237)** If you want to test the model, you can, you don't always do that because principal components is often a descriptive procedure as opposed to an inferential or classifying procedure, but we can do this.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=250)** If we take our principal components analysis, and use the predict function and apply the test data, we can save that to new data, then we can modify that object.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=261)** We can say feed in the principal component, but replace the X values, the predicted values with the new data.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=272)** And then we can use a generic plot.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=274)** Now I'm using some base, our commands for selecting things.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=277)** This means take the PC object, select the variable X, and then in brackets, this means use all of the rows but take just columns one and two.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=288)** Color them in gray circles, you'll see that we get a chart over here, and then on top of that, we're going to add the testing data in red.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=298)** And what you can see from this, is that the training data in gray and the testing data in red have very similar spreads on the two components.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=308)** That lets us know that we have a good degree of generalized ability, we have a pretty solid response in terms of taking these 55 individual variables and collapsing them into two meaningful dimensions to separate the cases in our data.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/pca?u=76281980&t=322)** And that's the overall goal of principal components analysis, probably the single most useful method of dimensionality reduction that you'll have in your toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** pca (2), trn (1), tst (1)
> **Versions:** 2.7 (1), 2.11 (1), 13.5 (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [LDA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=0)** - [Instructor] Our next example of dimensionality reduction and practice is LDA or linear discriminant analysis.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=8)** Now curiously, this isn't really a dimensionality reduction method, it's a classification method but it relies on dimensionality reduction under the hood.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=19)** And I want to show you how that works so you can see one of the benefits of dimensionality reduction in general.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=26)** To do this, we'll load a few packages and including CAR which stands for a companion to apply to regression.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=31)** That gives us a scatterplot matrix function.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=34)** Carrot, which gives us some training and testing functions and mass, which gives us the actual LDA function.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=42)** So let's load all of these packages and then we're going to load the training and the testing datasets that we created earlier.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=51)** TRN is train and TST is testing and then it's a good idea to set a random seed for any time that we might have randomization functions in there.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=61)** So I'm going to set the random seed, I'm going to use the number one is the seed you can use anything.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=67)** And then I'm going to explore the data a little bit with this scatterplot matrix function.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=72)** And here, I'm going to pick three variables out of the 56 that we have X, Y, and X four and X five.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=78)** I'm going to plot them as a function of Y.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=83)** We'll use the test data set, I'm going to say no regression lines, no smoother and then use colors four through six from CAR palette.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=92)** And when we do that, we got this graphic and we [[Zoom]] in on it and you can see that we have most of the variables.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=102)** At least these three are asymmetrically distributed that the observations tend to be on the low end and just a few of them go up on the high end and you can see the differences between the three digit classes, the ones, the threes and the sixes.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=117)** They're definitely different from each other.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=119)** But let's model the data on the training data using the LDA function, and I'm going to save it to fit.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=127)** That's a generic name for any kind of model you can create.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=131)** I want to say model Y that's the class variable that says whether the digit is a one, a three or a six as a function of dot that means everything else in the dataset.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=142)** Use the training data and then tolerance is a parameter that you can use to help set this up.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=148)** It actually has to do with the tolerance for the singularity of a matrix.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=152)** You can change it to something else if you want but I'm going to do that.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=156)** And then let's take a look at the LDA model that's been saved in fit by simply calling fit and then opening this up and what you see here, it tells us what the model was that we requested.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=172)** It gives us the prior probabilities, which really is the proportions of cases in each of their groups, they're about even.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=178)** And then it says for the three groups which are the digits one, three, and six, what their means are on each of these 55 predictor variables and the important thing is to see that they're not all the same.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=190)** And this is the dimensionality reduction.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=194)** What has happened here is that the LDA function has created these two linear discriminants.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=200)** What these are, are combinations of the variables that allow our to best distinguish between the classes.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=210)** And we have two discriminant functions because we're distinguishing between three classes but you see here that says, take the variable X one multiply it times 0.13 for the first discriminant function and then times 0.04 for the second.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=228)** This is our dimensionality reduction and we're going from 55 predictor variables to two discriminant functions.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=234)** And then we have little bit descriptive variable down here where you see these two numbers add up to one.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=239)** Let's go back to the next step in the code and let's now try to predict how well things work on the training data.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=247)** That's the one that we've just been used, we are going to take the model fit, apply it to the training data and save it under TRN pred for training predicted.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=257)** And the neat thing about that is we can then use the LDA hist function from mass.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=262)** This gives us histograms of the distributions on the discriminant functions for these three classes.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=271)** So we're going to do this when we say X is the discriminant functions we want just the first one and we're going to group it by classes.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=279)** Now, we're actually going to get an error message when I do this, because it says the figure margins are too large, that's simply because this window is too small.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=286)** I'm recording at 1280 by 720 pixels, it wants more than 720 pixels vertically.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=293)** So if we make that bigger and then we can run it again and you can see it, that group one which is the ones, group three is the threes, group six, you can see that these three groups are well distinguished on the first discriminant function.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=308)** If you want to see the second one, we do the same command but we change the two here to say we want the second column which is the second discriminant function.
>
> **[5:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=316)** And you can see that one is very well distinguished from three and six on this one.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=322)** Now what we can do is we can also plot how well all of this works together.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=327)** We're going to take the fit, we're going to use the generic blot, use the colors four through six and then group it by Y the class on the training dataset.
>
> **[5:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=337)** It takes a moment and then what you can see here are the threes down here, the one's up here and the six is over here and there's a tiny little bit of overlap.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=346)** Here's a six and six that went into the region of the ones, here's the three that went over into that region.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=352)** But otherwise based on just these two dimensions, there's really nice separation the categories.
>
> **[5:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=358)** And now we can test this model because this is a predictive classification model.
>
> **[6:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=363)** And what we're going to do is we're going to take the fit, that's the linear discriminant analysis that we did and what we're going to do is we're going to take the model fit that we say, that's the LDA, and we're going to apply it to the test data and save it to pred for predicted values.
>
> **[6:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=380)** I'm going to run that.
>
> **[6:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=382)** We can see what things are in there, it gives us class the posterior [[Probability]] and the predicted class.
>
> **[6:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=388)** And then we are going to do the histograms again this time using the test data.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=393)** And again, you can see nice separation on the first discriminant and good separation between one, three and six on the second discriminant.
>
> **[6:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=402)** Now what we can do, is we can plot the projected data onto both LD1 and LD2, color it according to the class labels.
>
> **[6:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=410)** And so again, you see the nice discrimination here.
>
> **[6:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=414)** We add the labels, you'll see that there's a little bit of crossover, now we just have this three over here and then we can check the accuracy of the data.
>
> **[7:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=424)** To do this, I'm going to create a table that says the true outcome or actual class is the Y variable from the test data set and then the predicted class is class coming from the pred object that we created earlier.
>
> **[7:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=438)** We'll create a confusion matrix and look at the results.
>
> **[7:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=442)** When we get that, you see that it says the actual class and predicted class.
>
> **[7:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=447)** You can see they're almost on the diagonal which means they were accurately categorized.
>
> **[7:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=450)** In fact, there's only one exception.
>
> **[7:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=453)** We had a three that was miscategorized as a one.
>
> **[7:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=455)** You can see it right here, it's that one.
>
> **[7:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=458)** And so we have 99.7% accuracy overall, and then you have some more information you can use like sensitivity and specificity to help you interpret the model.
>
> **[7:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=468)** But what this is, is a classification routine that uses dimensionality reduction as part of its method defined combinations of the variables that best separate the classes that we have.
>
> **[8:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/lda?u=76281980&t=480)** That's the huge advantage of using LDA with the underlying dimensionality reduction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Probability]] (1)
> **Env Vars:** lda (8), car (2), trn (2), tst (1), ld1 (1)
> **Definitions:** is a  (4), stands for (1)
> **Versions:** 0.13 (1), 0.04 (1), 99.7 (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [t-SNE](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=0)** - [Instructor] The final method of dimensionality reduction I want to demonstrate in R is t-SNE, which is short for, t-distributed stochastic neighbor embedding.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=12)** This is a relatively new, very sophisticated approach and what it has as its great virtue is the ability to do nonlinear separation.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=21)** When you can't draw straight lines between groups or you have one group that's completely surrounded by another, or you have overlapping curves, t-SNE is usually able to separate them because of the algorithm that it uses.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=33)** Now t-SNE is generally used for visualization, and so let me show you how this works.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=39)** We're going to load a few packages.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=40)** The important one here is rtsne.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=44)** So we're going to load those.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=47)** And then I'm going to use the complete dataset, again, it's because t-SNE is primarily an exploratory approach, so we're not going to do the training and testing, but we'll just use all of the data at once.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=58)** So I'll import the complete dataset into df.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=62)** And because there is randomization that goes on here, it's helpful to set a random seed so we can get repeatable results.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=71)** The one thing that really matters in t-SNE is the parameter for perplexity.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=78)** And I'm going to run this analysis several times with different values for perplexity.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=82)** This is it right here, and right now I'm going to start with 1, which is really no perplexity.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=87)** And then we're going to go up as we go.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=90)** So what it does is it starts with the data frame, it says exclude the class label, use the rtsne function, set perplexity at 1, verbose means tell us what's happening as you work on it.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=103)** It's an iterative function, and I'm telling it to go to 500, 1000 is the default.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=109)** Then plot those results, send them to plot.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=112)** And we're going to say select Y from the results.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=115)** The dot means to take what you got here before and then select Y from it.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=119)** That's two columns and then use the generic XY plot, color them by the label and draw them as solid circles.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=126)** We do this and it'll take more or less time depending on you machine.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=131)** And you can see it iterating here, and then we come over here, and what you really see, this is the important thing is a blob.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=138)** And that the black, the red, and the green, which represent the different digits are just all mixed up.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=144)** You can't tell them apart, but watch what happens.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=146)** The only thing I'm changing here is the perplexity parameter, and I'm changing it to 2.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=152)** When I do that, it iterates through and suddenly we have distinguishable distributions.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=160)** What it has done is it's found a way to separate the three different digit classes.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=166)** Now there's a little bit of error.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=168)** We have a green one over here, we've got a black one over here, but the [[Representational State Transfer (REST)|rest]] of them, considering there's over a thousand, are well separated.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=177)** Normally, a perplexity parameter of 2 is not sufficient.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=181)** Common values range from 5 to 50, so let's do it again with 5.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=187)** It takes a moment, and you'll see we have, again, good separation with just a little bit of overlap.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=194)** We can do it with 10.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=198)** Same thing, and then we can go up to 50.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=200)** I mean, you can go higher if you want, but there's really no need to.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=204)** And we can look at that, and we've got this great separation between the classes with just a few overlaps and dots, but the vast majority of cases have been well separated using t-SNE, which again allows us to do nonlinear combinations of our variables to separate groups that might otherwise be difficult or impossible to separate using a conventional linear approach.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/t-sne?u=76281980&t=227)** One of the huge advantages of t-SNE as a method of dimensionality reduction with complicated data sets and sophisticated goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sne (7)
> **Definitions:** is a  (2), short for (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: PCA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=0)** - [Instructor] And now I wan you to take a moment to try doing dimensionality reduction on your own using an example dataset from R.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=15)** To do this you need to load a few packages including R's built in datasets.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=21)** Once we do that, you can access the Swiss dataset.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=26)** And I'm going to use question mark Swiss to get some information on that dataset.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=31)** And what this is is Swiss fertility and socioeconomic indicators from 1888.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=37)** So you know it's 140 years old almost and it has six variables in it, 47 observations, so it's a small data set.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=47)** And it tells us about the fertility in each of 47 French speaking provinces in Switzerland, the percent of males involved in agriculture, the percent of draftees receiving the highest mark on an army examination, education, the percent Catholic as opposed to Protestant, and infant mortality, that's the live birth who live less than one year.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=69)** So the question is whether these six variables can be reasonably and usefully collapsed into a smaller number of dimensions.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=79)** For this I'm going to ask you to use the principal component analysis.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-pca?u=76281980&t=84)** Try it on your own and then I'll show you how I solve this in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: PCA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=0)** - [Narrator] In the previous video, I invited you to do dimensionality reduction with principal component analysis on one of our's, built-in datasets the swiss data set.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=15)** I'm going to be using the code based off of the principle components demonstration we had earlier.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=21)** To do this am going to load a few packages, car for the scatterplot matrix, dataset which is where the data set is and gg biplot in addition to the other ones that I load every time.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=33)** So let me begin by loading those packages.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=37)** And then we'll take a quick look at the Swiss dataset.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=41)** Again, it's 47 observations from the 1880s on six variables.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=47)** And the idea is to see if these variables can be collapsed into a smaller number of dimensions.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=53)** I'm going to begin by importing the Swiss dataset as a tibble, that's an enhanced data frame that prints a little better and saving it as DF.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=63)** That's how I usually save things.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=65)** It stands for data frame, and then let's take a quick look at it and what we have are these variables, fertility, agriculture, and so on.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=76)** And we're seeing the values for each of the 47.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=79)** So we've got variability and we can also see that they're double or integer as we go through.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=87)** Let's explore the data by doing a scatterplot matrix of all the variables.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=91)** So I take the data frame and I feed the whole thing into scatterplot matrix.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=97)** And I'm going to [[Zoom]] in on that and what you see are the distributions of each variable, and they're kind of normal, this one's a little skew, this one's bi-modal, and you can see the associations.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=109)** Some of them are pretty strong.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=112)** Here's a good, strong relationship.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=114)** Some of them are kind of all over the place, like this one, but we don't have massive outliers and it gives us something to start with.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=123)** Now, I'm going to do the actual principal components analysis.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=126)** I'm going to be using pr comp the most common method.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=129)** And all I'm going to do is center and scale the variables.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=133)** So they all have a mean of zero and a standard deviation or variance of one.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=137)** So they all can have equal influence potentially in the model.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=141)** I'll feed DF into that and save it as PC for principal components.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=147)** Then I'll get the summary [[Statistics]] for that analysis.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=152)** And you see that we have six components that's because we started with six variables and it tells us how much each one of them contributed.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=159)** And you can see it's not equal.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=161)** It's easiest to get a scree plot of the eigenvalues.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=165)** And you can see that the first one accounts for a lot, the second one, much less and the others less than that.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=172)** We may have a one dimensional solution or sort of one and a half, but let's plot it with the biplot, That's going to be the most useful thing that we can do.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=181)** So I take a PC and I feed it into biplot.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=184)** Also, I'm not adding any extra arguments because I don't have a class or a category that I'm trying to model.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=191)** I'm just looking at the associations between the variables.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=193)** So let me zoom in on this one.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=195)** And what you can see is that we have two dimensions, the first dimension accounts for over 50% of the variance in the original data set, the second accounts for about 20%.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=207)** And what you can see here is a dot for each of the 47 observations, these are regions in French speaking, Switzerland in 1888, and then these are the variables.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=217)** And you can see for instance, that education and examination scores go very closely together.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=222)** And they're sort of standing in opposition to the percentage of adult males who are working in agriculture, the percentage of the residents who are Catholic and the fertility rate, infant mortality stands aside as a separate thing.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=237)** It's a little bit associated with fertility and Catholic, which explains why it's a second dimension, but really it looks like we can have a good two dimensional solution here, going from our original six dimensions or variables down to two principle components as a way of summarizing the data.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-pca?u=76281980&t=256)** And that is how I solved the dimensionality reduction problem using the Swiss dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Statistics]] (1)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** previous video (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Clustering

[↑ Back to Table of Contents](#table-of-contents)

#### [Clustering overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=0)** - [Instructor] Libraries are the original, [[Big Data]] and a great place to go mine data for insights.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=6)** But the value of a library is only partly in the books that it holds.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=11)** What makes the library useful is that the books are organized in a meaningful way.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=16)** But as you might guess, there are many different ways to organize books or to put them into meaningful clusters.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=21)** For example, there is the library of Congress classification system where QA276 is where I often end up looking for [[Statistics]] books, or there's the Dewey Decimal system.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=33)** The same books might be under 006.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=36)** There's the Harvard-Yenching classification.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=39)** This is English classification system for Chinese language materials.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=43)** I know other people who classified books by size or by color.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=47)** You can do ISBNs, the name of the author, the publisher, and so on.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=52)** The point is there are a lot of different ways to bring in order, but the thing that matters is that you bring order.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=59)** And you do that by putting like with like, putting similar things together.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=63)** The goal of any system is to put these together, like sorting flowers at the market.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=68)** So you can find what you're looking for and find similar things next to it.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=72)** But as you might guess, there are a few important things to keep in mind about how you cluster things and the systems that you use.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=81)** Number one is that with clustering there is no correct answer.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=84)** This is not "Do you match with the correct classification?"
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=89)** There's no correct way to categorize your music.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=93)** You can do it by genre.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=94)** You can do it by how often you listen to it.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=95)** You can do it by the time of year you listen to it.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=97)** Any of those work, there's no correct system.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=100)** That's different from classification.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=103)** Also any clustering system is going to be based on the data that you actually provide to it.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=108)** If you only provide a little bit of data, the clustering is going to be limited in its effectiveness.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=114)** And then also clustering is designed to serve practical goals.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=118)** Again, there's not a single correct answer, but it's something like if you have enough marketing budget to do two marketing campaigns, then, well, try to get two clusters.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=128)** And then those will allow you to tailor your campaigns towards those two groups of people who have at least something in common with each other.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=138)** All of these systems rely on some concept of similarity between the cases or observations.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=145)** Typically the data is represented as though it we're in a multi-dimensional space, X, Y, Z and so on where you have one dimension for each variable in your dataset.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=157)** If you have a hundred variables you have a hundred dimensions.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=159)** If you have a thousand variables you have a thousand dimensions.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=163)** Now, when you're looking at these dimensions, one thing that's very handy is to standardize the dimensions because say, for instance, you're measuring people's height in feet and they are six feet, and you're measuring their weight in pounds and they're 180 pounds, those are very different numbers.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=180)** And larger numbers tend to dominate, and so you want to standardize them usually so each variable has a mean of zero and each variable has a variant or standard deviation of one.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=191)** That gives them the potential for equal influence.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=195)** Then what you do is in this multidimensional space, you measure the distance between two points.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=201)** And there are different ways of measuring that distance, but they all come down to how close are these.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=206)** And then one thing you do is you look for dense areas.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=209)** Are there places in this multidimensional space where a lot of points are clumping?
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=213)** That would be a cluster.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=216)** Now I want to cover three common ways of doing clustering in this course.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=221)** The first one, and the one I probably use the most often is hierarchical clustering.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=226)** This is where you take all the cases and then you arrange them in a hierarchy.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=232)** Now you might have an agglomerative method.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=235)** This is where all the cases start separately.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=238)** They're each in their own little category, and then the two cases that are most similar get joined into a group that now just has two.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=246)** Then you look for the two cases after that that are most similar and you go on and on until all the cases are joined.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=254)** The flip side of this is a divisive method.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=257)** All cases start in one super category and they are gradually split off one case at a time in the network.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=265)** And then a graph, like the one you see here, is a dendrogram.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=270)** This shows is all the individual levels of splits and it allows you to focus on the levels that are most useful for your particular purposes.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=281)** Another very common method for clustering is called k-Means, where k is a number.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=287)** It's how many groups you want.
>
> **[4:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=290)** So if you want two groups, k is equal to two.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=291)** If you want 10 groups, k is equal to 10.
>
> **[4:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=294)** And what your algorithm is going to do is find k-centroids in a multidimensional space.
>
> **[5:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=300)** A centroid is like a mean, but in several dimensions and you can think of it as each of these balls as representing a center in space.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=310)** And then what the algorithm does is it assigns cases to the closest centroid.
>
> **[5:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=314)** And then it may recalculate the centroids as it goes through.
>
> **[5:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=318)** Now, as you might guess, this system works really well when your data falls into these nice balls.
>
> **[5:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=323)** It works best for a spherical, non-overlapping clusters, but that may very well be the case.
>
> **[5:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=330)** In that situation, you can get very clean separation and you can specify, again, how many clusters you want.
>
> **[5:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=336)** You want two, you want five, you want 10, it's up to you.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=340)** Another method I want to demonstrate, even though it's less common, is called DBSCAN, which stands for density-based spatial clustering of applications with noise.
>
> **[5:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=351)** And I picked this picture because I like to think of it as banana scan.
>
> **[5:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=355)** And the reason for that is it works on local density.
>
> **[5:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=358)** If you're trying to find a point in space and assign it to one of these bananas, well DBSCAN's going to work well because it works with nonconvex and nonlinearly separable clusters.
>
> **[6:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=370)** DBSCAN can tell that a point in the banana at the end belongs to that whole elongated curvy banana and not to the other banana, that's closest to it.
>
> **[6:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=380)** Also, it can get points that are classified as noise.
>
> **[6:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=384)** Like these individual banana slices.
>
> **[6:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=386)** They're no longer part of one of the bananas.
>
> **[6:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=388)** And so the algorithm will know to ignore those and not cluster them with anything else.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=393)** And so we're going to look at three methods.
>
> **[6:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=395)** We're going to look at hierarchical clustering and k-Means, both of which are exceptionally common, and then we'll look at DBSCAN as an interesting alternative.
>
> **[6:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/clustering-overview?u=76281980&t=403)** There are of course other methods, but these three are going to get you a very long way in terms of finding useful and hopefully actionable clusters in your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Statistics]] (1)
> **Definitions:** is a  (3), is called (2), stands for (1)
> **Env Vars:** dbscan (4), qa276 (1)
> **Analogies:** think of it as (2), for example (1), for instance (1), picture (1)
> **CLI Commands:** find (4)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Dataset: Penguins](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=0)** - [Instructor] For our demonstrations on clustering, we're going to use a new data set called the penguins data set, or the Palmer penguins.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=8)** To use this in R, you can simply load the palmerpenguins package.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=14)** I'm going to load that.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=17)** And you can get more information about this data set either through the R package or at this website.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=25)** But I'm going to show you that the Palmer penguins dataset has two data sets in it.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=30)** One is just penguins and it has size, and penguins_raw has a bunch more information.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=35)** If you want to see the first data set and that's the one we're going to be using, it looks like this, species, island, and then various measurements on the penguins bodies as well as a factor for their sex.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=48)** The raw data set has a lot more variables in it, but we're not going to be dealing with that one right now.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=54)** What I'm going to do is I'm going to save the penguins dataset to an object called df, and by wrapping this command in parentheses, I'll also print the output to the console.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=66)** So we've got it saved over here, 344 observations of eight variables.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=71)** And here you can see it again in the console.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=74)** Let's get a quick summary of what's in our data set.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=79)** And what you see here is we have species where we have more Adelie penguins than very small number of chinstrap, and good number of gentoo.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=88)** We have the three islands that they come from and then the descriptives for the quantitative measurements on their body, 165 female, 168, and then 11 not available.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=99)** They didn't have that.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=100)** And then the year in which the measurement was taken.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=105)** What I'm going to do in terms of preparation here is a few small things.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=108)** I'm going to save this as a tibble.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=110)** I'm going to take the variable species and rename it as y.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=113)** That is what I usually call the outcome variable or class variable, and allows me to reuse code.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=118)** And then I'm going to remove three of the variables.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=121)** I'm going to remove island and sex and year.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=125)** And then I went to remove the incomplete cases.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=128)** And then I'll overwrite the data frame.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=131)** And we'll look at the first few cases of that dataset.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=135)** And you see now we don't have anything missing, and we have just the variables we want.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=140)** I'll save this as an R data serialized format, which makes it easier to use than other ones.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=149)** Calling it just penguins.rds.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-penguins?u=76281980&t=152)** And that's where we're going to finish the preparation of the dataset that we can use for our three demonstrations of clustering in R.

> [!info]- Semantic Content
>
> **Code Identifiers:** penguins_raw (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hierarchical clustering](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=0)** - [Instructor] Our first demonstration of clustering will be hierarchical clustering.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=5)** This is where you're looking for associations all through the data at as many different levels as possible to common and useful exploratory procedure.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=15)** To do this, I'm going to load a few packages, including car for a scatterplot matrix, cluster and facto extra, which allow us to do a little bit of extra work with clusters.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=28)** Then I'm going to load the penguins dataset that we wrangled previously.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=33)** I'll start by setting the seed for any processes that involve randomness, and then import the data.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=39)** Now, one thing I'm doing here may seem a little strange is I'm reducing the dataset.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=44)** It was previously much larger.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=46)** But I reduced it to 100 cases, because hierarchical clustering likes to show you the results with every individual case labeled.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=56)** Now, let's come down and look at the first few rows of the dataset.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=61)** And you see that we again have the species of the penguin along with four physical measurements.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=67)** The length of the bill, the depth of the bill, the length of the flipper, all in millimeters and the body mass in grams.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=78)** I'm going to separate the class labels, that is the species.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=82)** Pull it from DF.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=83)** Pull just that one variable and put it into a separate vector called Y.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=88)** Then I will change the data frame and I'll use the assignment pipe to remove Y and then standardize the variables.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=97)** 'Cause right here, you see they're on very different scales.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=100)** These are in the 49, 50.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=102)** These are in 10, 16.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=104)** These are in the 100s, and these are in the 1000s.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=106)** This doesn't have such a big influence on the clustering methods that we might be using in this one.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=112)** But it never hurts to standardize the variable so that they have approximately equal influence on some of the procedures.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=119)** And scale will take care of that for us.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=124)** Now, what I'm going to do is I'm going to make a scatterplot matrix to explore.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=129)** I'm going to take the three measurements in millimeters and then the body grams.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=134)** And then the pipe here says that I want to group those by Y, that's the species.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=141)** We you can use data frame.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=142)** We don't need regression lines or smoothing.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=144)** And this says, use the pointing up and pointing down triangles.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=150)** What you can see on this is that we have reasonable separation on bill depth.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=155)** It looks like we have some separation on the length.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=159)** There are some crossover here.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=161)** We may have something to work with.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=163)** They're not enormous differences between the three species on these particular form measurements that we have though.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=172)** But let's start doing the hierarchical clustering.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=175)** It's a pretty simple procedure in R.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=177)** We're going to first take data frame which has just the quantitative measurements.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=183)** And then we're going to get a distance or dissimilarity matrix from that.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=187)** And then finally, we send that into H class for hierarchical clustering.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=191)** And we'll save that into an object called HC for hierarchical clusters.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=196)** Then I'm going to set the class label.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=199)** So it knows how to label the things that are at the end.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=202)** And I do that by referring to why and saving that here.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=205)** And then we're going to plot a dendrogram.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=208)** Dendro means branches.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=210)** And you'll see exactly how this work.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=212)** I'm going to use plot.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=214)** (indistinct) tell it, I want to line names up at the bottom.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=217)** I'm going to make the font a little bit smaller with this command.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=221)** And this is a classic dendrogram.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=223)** So, what we have are all the 100 cases that we're using listed here across the bottom.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=229)** You can see, we have Gentoo penguins over here.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=231)** Then we have chinstrap, a little Adelie in there and then mostly Adelie down here.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=237)** So, they appear to be clustering relatively well.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=240)** Now, there is no correct level here.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=243)** A hierarchical dendrogram like this gives you the options of cutting things off where they seem to work best for you.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=252)** So, let's find one way of looking at the optimal number of clusters.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=256)** There are several different standards here.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=258)** I'm going to use this factor here for the elbow method.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=263)** We're going to use a function from factoextra.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=266)** We have a method for clustering.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=267)** And we're going to use the within cluster summit squares.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=270)** And then I've done this before.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=271)** So, I actually know where to draw a reference line.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=275)** But let's run through that.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=277)** And what you see here is a curve that looks at how well things fit.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=282)** And we have a little bit of an elbow, thing seemed to flatten out right here around three clusters.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=287)** Which makes sense, 'cause we actually have three different species.
>
> **[4:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=290)** But there are alternative methods.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=292)** We can also use a silhouette method, where we're looking for what's called the maximum width of the silhouette.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=298)** That's why I specify that there.
>
> **[5:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=300)** And it draws its own line.
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=301)** It says that the silhouette, really, the projection, the shadow of the data is greatest at two clusters.
>
> **[5:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=309)** And then finally, there's a gap method.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=311)** This looks at intro cluster variation.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=313)** And then does Monte Carlo simulations to see whether that greater than what we would observe at random.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=319)** For this, I have to specify the method H cut.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=322)** I have to tell the maximum number of clusters and how many Monte Carlo or bootstrap samples to do.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=328)** When we do that, we can see that this one after it finishes iterating, suggest maybe five.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=335)** Now that's interesting 'cause we had three species going in.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=338)** But let's take a look at how some of this works.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=340)** Let's start by going back to our dendrogram, which we drew before.
>
> **[5:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=343)** This is the same command.
>
> **[5:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=345)** But now, we're going to draw some boxes around it.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=347)** We're going to do rect.hclust.
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=349)** We're going to tell it we want three boxes.
>
> **[5:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=351)** And we tell it to use colors three through actually five to draw them.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=357)** And then I'll [[Zoom]] in on that one.
>
> **[5:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=359)** And this says, well, if you draw it at three, you can see how it cuts it.
>
> **[6:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=362)** So, it's one, two, three here.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=365)** And then, they are mostly uniform within each group.
>
> **[6:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=368)** This is Gentoo over here.
>
> **[6:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=369)** This is mostly Chinstrap.
>
> **[6:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=370)** And this is mostly Adelie over here.
>
> **[6:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=372)** So, the hierarchical method seems to be working well with this particular dataset.
>
> **[6:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=379)** If you want to see one more way of doing this, we can take those groups that we defined by our boxes.
>
> **[6:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=385)** And by using this function and specify in three groups, we can save that.
>
> **[6:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=390)** And then we can visualize it in 2D space.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=393)** This is a slightly complicated command.
>
> **[6:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=396)** But it says from the cluster function, we're going to identify the clusters using the variable we just created.
>
> **[6:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=402)** The data is the DF.
>
> **[6:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=403)** We're going to put points on it.
>
> **[6:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=405)** We're going to put some labels on.
>
> **[6:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=408)** Let me draw that.
>
> **[6:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=409)** And then we'll zoom in.
>
> **[6:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=411)** And what you see are our three clusters with boxes drawn around them.
>
> **[6:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=416)** These are the Gentoos over here.
>
> **[6:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=417)** They seem to be well distinguished by two of their dimensions.
>
> **[7:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=421)** Chinstrap and Adelie.
>
> **[7:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=422)** So in this cluster analysis, they seem to be well distinguished.
>
> **[7:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=426)** And it allows us to separate them even though we have only four measurements that we're using to separate these particular groups.
>
> **[7:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=434)** That's another one of the advantages of hierarchical clustering.
>
> **[7:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=437)** It lets you explore options.
>
> **[7:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=438)** We could do this with two groups, five groups, if we wanted.
>
> **[7:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/hierarchical-clustering?u=76281980&t=441)** But the three groups seems to match up very well with what we know are in fact, three different species.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [K-means](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=0)** - [Instructor] In our last demonstration, we looked at hierarchical clustering, which is great when you want to look at as many different ways of clustering as possible.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=8)** It goes from one cluster for every single case, or it puts each case in its own individual cluster, and you can look at any variation in between.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=18)** On the other hand, there are times when you know in advance how many clusters you want.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=22)** It might be either 'cause you know, for instance, you're dealing with three species, or it might be that you're doing audience segmentation in marketing, but you know you only have enough time or money for three different campaigns, and so you have to limit the number of different clusters you're dealing with.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=38)** In that situation, K-means is a great way where K is a number of groups that you want, and then you put each group around the multidimensional means.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=51)** Let's take a look at this with the penguins dataset that we did earlier.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=54)** For this I'm going to load a few packages.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=57)** Then I'm going to open up the penguins dataset.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=60)** Actually, I'll begin by setting the random seed, make things repeatable.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=64)** And then I'll load the penguins data.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=66)** Again, I'm reducing the number of observations to 100 to help with the visualization that we're going to be doing a little bit later.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=73)** We can look at the first few rows of the prepared data.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=75)** This is what we saw before.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=77)** We have four physical measurements and the species indicated.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=81)** And I'm going to take the species which I had originally changed from species to Y and put it back to species 'cause that's going to help with one of our visualizations.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=91)** And then I'm going to standardize all of the quantitative variables and save that as df.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=98)** And we're going to look again at the optimal number of clusters.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=101)** This is something we did before, so I'm going to go through it pretty quickly.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=104)** There's the elbow method where you're looking for a bend in the curve, and it looks like it's occurring right around three.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=108)** Makes sense 'cause we have three species.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=111)** There's the silhouette method where you're looking for what is maximum width.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=114)** It suggests maybe two.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=116)** And then we have a gap statistic method that iterates through and suggest maybe as many as five.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=124)** But because we know that there are three species, it might make the most sense to actually specify three different clusters.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=132)** So I'm going to take the data frame, then use the kmeans function and specify that we want three groups, and we'll save it to km and print the output.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=142)** When I do that, you can see that we have our three different groups and it gives us the means of each group on these four variables.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=150)** And then as specifies what cluster it put each case in.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=154)** And then we have the within cluster sum of squares by cluster, as well as various components that we can look at.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=162)** But let's visualize the clusters.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=165)** To do this, we're going to take the K-means cluster that we just saved and use the fviz_cluster.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=171)** We're going to tell it we want to draw points and we're using the df dataset and that we want to add some text to the labels.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=178)** When we run that, and we pull it out over here, you see that we get a kind of dramatically different result than we did with a hierarchical cluttering when we told that one we wanted three clusters.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=191)** What's curious this time is it took one species, the Gentoo penguins, and split it into two separate clusters, so it found some kind of difference between those two.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=201)** And then it took the other two species, the Adelie and the chinstrap, and put them in one big cluster.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=206)** This is a very different kind of result.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=208)** And what it suggests in this case is that the K-means algorithm is not very happy with just the four physical measurements that we put into the algorithm.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=217)** We might want to add additional data to get it so that the Gentoo group together and that the Adelie and chinstrap split apart.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=226)** But this is a very simple method to apply to many different situations.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=230)** It says that well, even if we know that there are different species, they still have important things in common that separate them from the two different groups of Gentoo penguins.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=239)** And that's one of the virtues, and it's a functional approach to clustering that it meets the clusters based on the data that you're giving to it.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-means?u=76281980&t=249)** Again, interesting results here with the penguins, but can be very useful results in something as practical as a market segmentation.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Code Identifiers:** fviz_cluster (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [DBSCAN](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=0)** - [Instructor] The final demonstration of clustering is a newer method called DBSCAN, which stands for density based spatial clustering of applications with noise.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=11)** And as I've mentioned elsewhere it's really good for finding clusters with unusual shapes.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=18)** Most methods are looking for things that are circular or spherical.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=22)** But DBSCAN can find very different kinds of shapes because of the algorithm it uses for finding density within the multi-dimensional space.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=31)** To do this I'm going to start by loading a few packages.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=34)** The most important of which is this one right here, DBSCAN.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=37)** There is more than one package for doing DBSCAN in R, but this one's particularly fast, and so it's helpful.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=45)** I'm going to set the random seed to one.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=50)** You can use any number you want, it just makes things reproducible.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=53)** And then I'll import the penguins dataset that we already cleaned up elsewhere.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=58)** I'll save that to DF.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=61)** Sorry, you see over here in the environment, we now have that 342 observations and take a quick look at the data.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=70)** All right, we've got our factor, that's the species, it's Y.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=75)** Then we have four physical measurements.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=81)** Let's get a quick summary of the data.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=85)** So we have of an uneven distribution among the species and you can see that the measurements are on different scales.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=91)** We're going to do the same two things we've done elsewhere.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=94)** First is we're going to remove the class labels and that's the species label Y.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=99)** So we're going to pull that, which brings you out as a vector and I'm actually going to save it into one called species and then we're going to take the [[Representational State Transfer (REST)|rest]] of the data frame.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=109)** We'll remove the species and scale or standardize all the variables, so they have a mean of zero and a standard deviation of one that gives them equal influence in the algorithm.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=118)** Now we come down to the actual DBSCAN.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=122)** There are two parameters that we have to specify.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=124)** One is called mean points and the other one is EPS and you get to choose each one of these.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=130)** So one of them is kind of an arbitrary choice.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=132)** So we get to choose a value for mean points which is usually just called K.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=137)** This is the minimum number of neighboring points for clustering.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=141)** Now this value should be odd, so you don't end up with ties and it should have a value of at least three with higher values for larger data sets.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=149)** Our data sets only 342 cases, so it's not really large, but we'll use five.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=154)** So that's an arbitrary choice.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=156)** Second, once we've chosen mean points we have a chosen value of K is equal to five.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=162)** Then we find the optimal value of EPS which is actually just short for Epsilon neighborhood radius.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=169)** That looks at the graphing distances.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=171)** How far in the multidimensional space the algorithm should look for neighbors to cluster each point with.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=178)** So we're going to do is we're going to graph the distances and we're going to look for a pronounced knee or bend in the chart.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=185)** So I'm going to take our data frame.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=187)** We've already scaled it, but we'll run it through this KNNdistplot with K is equal to five.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=193)** And let's take a look right over here.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=197)** You can see that this one pops up right here as it gets the points sorted by distance.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=205)** To me, it looks like there's a band right about here.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=208)** And because I've done this before, I know that that corresponds to a value of 0.8 over here.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=218)** So I'm going to draw a line and let's [[Zoom]] in on that for just a second.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=223)** This over here means five nearest neighbors.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=225)** That's the K the five that we chose and how far it is to each one.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=230)** And the eight that seems like a reasonable one.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=232)** You could go a little higher, you could go a little lower but you could try different values.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=238)** But I'm going to use the five.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=240)** And now what I'm going to do is I'm actually going to run the DBSCAN algorithm using these two parameters.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=245)** The mean points, that's the number of sort of nearest neighbors, five that we chose and the EPS, the Epsilon, or the diameter in which it looks that's the 0.8 that we got from this graph.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=257)** And that's pretty quick.
>
> **[4:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=259)** I'm going to save it to an object called DB for DBSCAN.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=263)** You can see that over here now, it's a list of three.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=267)** Let's print the object and actually all it's going to tell us is that it decided that there were two clusters which is simply labeling one and two and five noise points.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=279)** Those are zero, clusters here I mean to, they're not in a cluster.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=283)** And then we have some other information in cluster EPS and mean point.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=287)** What I'm going to do now, just as our final step is to visualize these clusters using the F viz cluster command that we've seen before.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=295)** So I take the DB object for the DBSCAN that we just barely created feed it into F viz cluster, tell it that the data is in DF for data frame, we're going to do points.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=308)** And then we're going to add labels for each of these elements in there.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=313)** And now it's going to be a complicated graph, lot of overriding.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=317)** But when we zoom in on it, you'll be able to see first off that we have two clear clusters.
>
> **[5:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=325)** Now, right now, it's only showing us two dimensions when I gave it four dimensions to work on.
>
> **[5:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=329)** So we're not seeing everything here but you can see that all the Gentoo penguins are over here grouped together.
>
> **[5:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=336)** And that the two other species, the Adeline and the chin strap are over in this other cluster.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=342)** And then we have five noise points.
>
> **[5:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=344)** These are the black dots that well, these three for instance, fall directly within this cluster because there are two other dimensions.
>
> **[5:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=353)** They are separate from that cluster in those other dimensions.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=357)** But DBSCAN is a good way of getting non-spherical clusters that could have shapes like being long and rectangular or ring shaped or going up and down.
>
> **[6:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dbscan?u=76281980&t=368)** You can see that we're pretty close to a convex shape on these ones anyhow but the actual algorithm is pretty quick and easy to implement in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dbscan (9), eps (4)
> **Definitions:** is a  (2), stands for (1), is called (1)
> **CLI Commands:** find (2)
> **Versions:** 0.8 (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: K-means](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=0)** - [Instructor] Now that we've covered several ways of clustering data, I want to give you a challenge and invite you to do some clustering of your own.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=13)** The method we're going to use is K means.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=17)** And so this is the one where you specify in advance how many clusters you're looking for.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=21)** And for this example we're going to use an extremely well-known dataset that comes from the R built in datasets package.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=29)** So let's load all of these including datasets, and then we'll use the Iris dataset.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=36)** It's been used millions of times.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=38)** Let's get a little bit of information on this.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=41)** And what this is is Edgar Anderson's or Ronald Fisher's Iris Data.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=47)** It's the measurement in centimeters of several different species of Iris flowers.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=54)** We can take a look at the first few lines.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=57)** What we have are the sepal length and sepal width, the petal length and the petal with, and then the species.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=63)** And we can get the entire summary [[Statistics]].
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=66)** And you can see these are on slightly different scales, not massively different.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=71)** And then here are the three species listed here at the end.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=75)** What we're going to do is a K means cluster where we're going to set it up for three clusters so K is equal to three that hopefully it will match these three species using these four measurements.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=87)** Give it a whirl and then we'll meet again in just a moment to compare how we each did K means clustering on the Iris data.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-means?u=76281980&t=95)** I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: K-means](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=0)** - [Instructor] When I extended this challenge to you, I invited you to use the iris data to do [[k-means clustering]] with a value of three for k because there are three different species of iris.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=16)** Let me show you how I solved this, and you can compare your own answers.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=22)** Now, not surprisingly, this one follows the example we had very closely of k-means clustering earlier.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=29)** So in fact, I'm going to be loading the same packages here, including car for the scatterplotMatrix, cluster, datasets, and so on.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=39)** And once those are loaded, I'm going to come down and get the iris dataset.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=44)** I'm going to set the random seed because that can work into things, and I'll save the iris dataset to df as a tibble, so I've got it over there in my environment.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=55)** We'll check the data quickly.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=59)** There we have the four physical measurements and the Species class variable there at the end.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=67)** Now, I'm going to separate the class variable.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=69)** I'm going to use pull, and take Species and save it into its own variable.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=75)** You can see it right here. It's a factor.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=79)** And then, I'm going to overwrite df to remove Species and to scale the other variables.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=85)** Even though they're all pretty close to the same scale, ranging in values from one point something to about seven in terms of centimeters, it is still helpful to give them all the same mean of zero and standard deviation of one, so they have potentially equal influence in the clustering.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=102)** So I'm going to do that.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=104)** Now, let's explore the data with scatterplotMatrix.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=107)** These are the four physical measurements and the species.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=112)** And we can [[Zoom]] in on this very colorful chart.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=116)** And we're just trying to see if there are patterns here.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=119)** We see, for instance, there's a strong association between sepal length and petal length.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=124)** We can see that there's one cluster over here.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=126)** This is the setosa.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=128)** That's very much by itself in terms of petal length and width.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=134)** And it actually looks like we're going to be able to get nice clean separation between the species based on these physical measurements.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=141)** So now, let's go to the k-means clustering algorithm.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=146)** So I'm going to take the data frame that has just the four measurements.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=149)** I'm going to use the kmeans function and specify three, that I only want three clusters.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=155)** We're going to save it to km for k-means, and we're going to also print the output at the bottom here.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=162)** So you can see that it's saved over here as a list.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=164)** I'm going to make this bigger.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=167)** It says that we have clusters of 53, 47, and 50.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=170)** So we know something a little interesting has happened because in the dataset, there are 50 of each species.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=176)** This gives us the k-means, the three different means for each of the groups that it created.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=184)** Not the original species, but the three different clusters.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=188)** And then, we have a clustering vector here that tells us what cluster it put each case in.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=193)** And we've got a few other elements in terms of what sort of things are available to us.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=200)** But what's going to be easiest to deal with is simply visualizing the clusters.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=203)** So I'm going to take km, that's the object with the k-means results, send that into fvix_cluster, tell it we're using the data frames, we want points, and we're going to put labels on things.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=216)** So let me run that one right now.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=219)** And when we do that, you can see that we have setosa over here, we have versicolor and virginica in here, and this is mostly versicolor here but virginica over here.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=234)** And so what we found is that the setosa, which was dramatically different in terms of two of the four measurements, is cleanly separated from the others, but there are some overlap between the other two, the versicolor and the virginica iris flowers.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=247)** This dot right here is actually the mean and these dimensions for that particular cluster.
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=253)** And so we see that this was reasonably effective in identifying groups that could be set off separately.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=260)** Now, one thing that you can do at this point is you can try some of the other [[Algorithms]] that we used, and see how well they cluster the datasets, and to see if you can get a clean separation, for instance, between these two species that are very similar.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=274)** Remember, clustering, even though we have a particular outcome in this variable, is usually a descriptive procedure, a measure of convenience.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=283)** For instance, you only have enough money to run two different ad campaigns, so you can only have two different clusters.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=288)** It's often more a matter of interpretation and usability when you're evaluating the effectiveness of the clusters.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=296)** This is one method.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=297)** If we simply wanted to isolate setosa from the others, then we've accomplished it.
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-means?u=76281980&t=301)** But again, I encourage you to explore the other procedures with the same dataset and to see what kind of insights you can get into the iris dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (3), [[Zoom]] (1), [[Algorithms]] (1)
> **Code Identifiers:** scatterplotmatrix (2), fvix_cluster (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Classification

[↑ Back to Table of Contents](#table-of-contents)

#### [Classification overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=0)** - [Instructor] We've talked about clustering, which is putting similar things in similar piles, but sometimes similar is not enough.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=9)** For example, when it comes to the mail, you can group things by size or shape or postage, but that's not what you're going for.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=18)** Your one job is to put things into the right box.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=23)** So if you want to think about clustering versus classifying, which are probably the two most important things happening in [[Data Science]], clustering is just trying to find similarities, and the data is referred to as unlabeled, because it doesn't have a correct category that you're trying to match.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=40)** That also means that the answers are subjective.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=42)** What that really means is, you could do things in different ways, and the usefulness, or the utility, is the outcome by which things are judged.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=52)** It's also an example of what's called unsupervised learning.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=56)** Unsupervised means, again, there's not a correct category here.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=59)** It's just trying to find things that are relatively similar to each other.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=63)** Contrast that with classification.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=66)** This is where you have existing categories, like this is this person's mailbox, or this is a photo of a toy, this is a photo of a tree.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=76)** You want to place new objects into existing categories.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=80)** And so the data here is labeled, which means there actually is a correct answer, and in many cases, it's there in the data.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=88)** Also, the answers are more or less objective because there is a correct answer.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=93)** Does this mail go in this mailbox, or does it go in that one?
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=98)** And in that case, you can judge the effectiveness of the algorithm by how accurate it is.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=104)** Were the positive cases labeled as positive, were the negative cases classified as negative?
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=109)** And it's also generally referred to as [[Supervised Learning]], because you have this label, this correct category, that is used to teach the algorithm how to process the data to get to that final outcome.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=124)** Now, there are several methods that are used for classification, in fact, there's an enormous number.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=129)** But I want to show you a few that are really common.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=132)** The first one is called k-NN, which stands for k-nearest neighbors, where k is a number that you choose, it could be 3, it could be 5, it could be 11.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=142)** And the idea here is that existing categorized cases are located in a multidimensional space.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=149)** If you have 10 variables and you have 10 dimensions, then each dot in that 10-dimensional space is where a known observation goes.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=157)** And then what you're trying to do is you're trying to locate a new case in that 10-dimensional space, and then compare it to the k closest points in that physical space.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=168)** Those are its nearest neighbors.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=170)** You generally choose an odd number, and again, maybe from 3 to 9 to 21, something, and you simply assign that new case to the same category, to the most common category, as its k nearest neighbors.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=185)** It's like deciding with berries.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=187)** If you find a berry in the wild, these are all berries, would you eat them?
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=192)** Now, some of these, I know what they are.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=194)** I know blueberries, I know raspberries, I know blackberries.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=197)** But two of those are not very familiar to me, and I would probably stay away from them because I do not have a ready categorization system for deciding whether they're safe or not.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=207)** Another approach that's often used in classification tasks is called naive Bayes.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=214)** This uses a formula developed by the Reverend Thomas Bayes, that's why it's called Bayes, to calculate probabilities.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=221)** And the major breakthrough that Bayes had was a method that combines base rates, how common something is overall, and prior probabilities to get posterior probabilities.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=233)** So it's often used, as an example, in diseases.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=237)** How common is a disease overall? That's its base rate.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=241)** And if a person has a disease, what's the [[Probability]] of getting a positive test result?
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=246)** That's a prior probability.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=248)** The posterior probability is, if somebody gets a positive test result, what's the probability they have the disease?
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=253)** And that's usually the one that most people are interested in.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=256)** And so it's used in a lot of situations, including classification.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=261)** And it's called naive, not because it's simplistic, but because it assumes that each of the predictors operates independently.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=268)** It's like rolling these dice over here.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=270)** You roll them, what happens on one does not affect what happens on the others, but you can calculate the probabilities between them.
>
> **[4:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=278)** And the last method I want to show to you is [[Decision Trees]].
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=283)** This is a series of yes/no decisions, binary decisions.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=288)** And the algorithm chooses the most informative split at each point.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=293)** Think, for instance, if you're playing the game Hangman, where you're guessing a [[Microsoft Word|word]], you choose letters that are diagnostic.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=299)** E is going to be the most common, A, those will give you an idea what's probably going to be in the word.
>
> **[5:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=306)** On the other hand, if you first guess X and it says no, you haven't eliminated very much, that wasn't an informative choice.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=312)** So the algorithm goes through the data, chooses the most informative split at each point.
>
> **[5:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=318)** The neat thing about it is it works with basically any kind of data and almost any kind of pattern.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=324)** It can use quantitative data, it can use categorical data, it can use binary, multiple categories, it can use skewed data.
>
> **[5:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=330)** It can work with almost anything, often in its raw condition.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=335)** Also, because you have this graphical output, decision trees are exceptionally easy to interpret.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=342)** So, there are many, many more choices.
>
> **[5:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=345)** You don't have just one pencil in one color, you've got a lot.
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=349)** This is because classification is one of the most important tasks in data science, and an area of very active research and development.
>
> **[5:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=356)** And in [[Data Mining]], you do have a choice of dozens or possibly hundreds of methods.
>
> **[6:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/classification-overview?u=76281980&t=362)** But the three that I mentioned are the ones that I want to demonstrate that I think will be probably of greatest use to you as soon as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[Data Science]] (2), [[Decision Trees]] (2), [[Microsoft Word|Word]] (2), [[Supervised Learning]] (1)
> **Definitions:** is a  (7), is called (2), means that (1), stands for (1)
> **Analogies:** it's like (2), for example (1), similar to (1), for instance (1)
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)

#### [Dataset: Spambase](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=0)** - [Instructor] For our demonstrations of classification, we're going to be using the large dataset that is called spambase.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=7)** And to show this to you I'm going to first load a few packages, including one that gives us some plotting options.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=13)** The dataset spambase comes from the machine learning repository at the university of California, Irvine.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=19)** This is the URL to that site.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=22)** The spambase datasets URL is right here.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=27)** Now you can download the data, we're using the one that's called spambase.data.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=31)** I have already downloaded it in a way that saves the variable names, but you can download it doing this command if you'd like.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=39)** I've already done that and saved it here in the data folder.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=43)** So we can simply say import from data spambase.CSV, save it as a table into an object called DF.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=51)** And you can see it's got 4,600 observations on 58 variables.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=55)** Now let's look at the variable names.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=58)** And you can see that they're cryptic.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=60)** Each of these mean something, like how many capital letters there are, or how many spaces in row, or how many numbers, or does this [[Microsoft Word|word]] appear?
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=70)** Does this word appear?
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=72)** And that can be useful, but because we're simply doing a [[Data Mining]] project where we actually want to see do any of these variables work to predict whether something is spam or not, I'm going to clean it up a little bit.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=85)** First, I'm going to rename the variables.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=88)** So they're just A 1-57, fine.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=91)** And then we look at the variable names.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=93)** So, it's still a cryptic but at least it's more orderly.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=96)** Then we're going to make a couple of changes.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=98)** The last variable A58 is the one that has the class variable that indicates whether something is spam or not.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=104)** So we're going to rename that as Y, because I often just call my class variables the outcome Y because that lets me reuse code.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=113)** And then we're going to change that from zeros and ones to not spam and spam using the if else command.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=119)** So if Y is equal to zero, then it's not spam.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=123)** If it's not equal to zero, then it's spam.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=126)** And then finally we'll record it as a factor.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=129)** We do those things.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=131)** And then finally, let's check that class variable by point, getting a factor count, 2,788, not spam 1,812 is spam.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=140)** Now it's very common in classification methods and in machine learning in general to do training and testing.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=147)** So we need to split the data.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=149)** Because it's uses randomization, I'm going to set the random seed here.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=154)** And just in case there are two rows of data that look the same, I don't want R to throw one of them out.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=161)** So I'm going to start by creating an ID number.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=164)** So each row will be unique.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=167)** Then I'll take 70% of the data randomly using slice sample and put it into the training data set.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=174)** Then the testing data set will be then anti joined, says whatever's not in to train and goes into tests, but matching by ID, that's our unique variable, and then delete the ID variable from everything else.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=189)** And now we have our two mutually exclusive, but comprehensive data sets of training data and testing data.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=198)** Now I do want to take a moment and explore the data just a little bit.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=203)** We're going to get a bar chart here of the class variable, whether something is spam or not.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=208)** And you can see not spam, we've got more of it.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=210)** And we've got a fair amount of spam.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=211)** It's nice that it's not like 99% and 1%.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=216)** And then let's take a look at a few randomly chosen variables and see how they relate to our class variable, Y.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=223)** We'll do this with ggpairs.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=224)** It takes just a moment to do this one.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=227)** And then I'll [[Zoom]] in on it.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=230)** And so this one right here, the orangish/coral color is not spam.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=234)** And this one, the blue/green/teal is spam.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=238)** What we're trying to do here is to see whether these two groups differ on anything And you can see, yeah the distributions look different on these variables.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=247)** And so we may be able to distinguish these things rather nicely.
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=253)** We can also get a stacked histogram of a few variables and this is going to be useful to just see what the sparse nature of the data is, what that is is, if I zoom in on this, there's a lot of things here that we've got empty space in the variables, but those can be used to distinguish the values.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=274)** I know it's hard to tell if there's anything there, but that's because we have a large dataset, relatively large.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=280)** And then finally that we've done this work, we're going to save these datasets in the native RDS format.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=287)** That's R data serialized.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=289)** We'll save the entire data frame.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=291)** We'll save the training dataset and the testing data set.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-spambase?u=76281980&t=295)** And then we can get started with our three demonstrations of clustering in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Zoom]] (2), [[Data Mining]] (1)
> **Env Vars:** url (2), csv (1), a58 (1), rds (1)
> **File Paths:** spambase.csv (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [K-nn](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=0)** - [Instructor] The first method of classification that we'll look at, is actually one of the simplest in theory.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=6)** And that's kNN, which stands for k-nearest neighbors.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=10)** And this is really simple to execute in R.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=14)** To do this, I'm going to come down load a few packages including caret, which has several testing and training functions.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=21)** E1071, which actually comes from a class name, which has several machine learning functions, as well as the other packages we normally get.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=30)** I'll load those and I will also set the random seed because we're going to have some randomization going on in here.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=36)** And then, let's import our two datasets that we already prepared at the training data set from Spambase and the testing data set, TST.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=47)** Now we're going to compute our model on the training data.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=50)** And to do this, we first have to tell the algorithm exactly how we want to do this.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=55)** So we're going to set up stat control.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=58)** That is methods of setting up the training algorithm.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=62)** We're going to be using what's called repeatedCV, which is repeated cross validation.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=67)** So we're using two [[Forms]] of validation in this.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=69)** Cross validation means we're splitting up the dataset into several different folds.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=74)** Here we're going to have five folds and then three complete sets of folds.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=80)** And it's going to repeatedly take one fold and have that be the testing data.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=86)** Use the other ones to build the model, see which model works best and then rotate through several times to get all this.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=92)** So this is a nice thorough strategy.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=95)** Let's do this stat control.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=98)** And then we have to tell it what parameters we want to try specifically the values of k.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=103)** And I have a command here that all it really does is it specifies the odd numbers from three through 19.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=109)** So, do a sequence, start at three and go to 20 actually to 19 going by 2.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=116)** so here we go.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=118)** We're going to get our sequence.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=119)** You can see it right over here.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=122)** And that's good.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=123)** So that's what we've got right there.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=125)** By the way, I intentionally did not include one here because I've done this before.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=130)** We actually can get an algorithm that chooses one nearest neighbor in the multi-dimensional space.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=135)** And while it's possible, that that is in fact the best model it is usually associated with overfitting as a bad thing.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=141)** So I've ensured that there are at least three neighbors chosen in the multidimensional space.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=146)** Now what we're going to do is we're going to apply the model.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=148)** We use train, and we say y that's our class variable.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=152)** That is whether something is spam or not.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=154)** As a function of everything else, use the training data we're going to do kNN, k-nearest neighbors, use the parameters that we specified and process the data so that things are set to a mean of zero and a standard deviation of one, I meant missing cases.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=172)** All right, we'll do this and it can take a little while to run depending on your own machine.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=179)** Okay and now you see over here, the fit, that's a general term for fitting a model to something.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=187)** It's all there.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=188)** Now what I'm going to do is I'm going to see what value of k we should use.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=192)** And I'm going to do that by taking fit and do plot.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=196)** That's just the generic thing.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=198)** And here you can see the number of neighbors.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=200)** We've got some substantial variation in terms of how many neighbors get us the most accurate models in repeated cross-validation.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=208)** Although you should notice, this is a very compressed scale.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=211)** If we do it again with the 0 to 1 scale, it's almost impossible to tell which ones are better than the others.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=218)** But if we want the final model as chosen by the computer, we just say fit and print.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=224)** And it tells us to start with 3,220 observations, 57 predictor variables and two classes, and the class variable.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=232)** We have centered and scaled, then we did the cross validation.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=236)** And then we have the accuracy numbers based on the k that we did.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=242)** And the highest value it says right here is when k was equal to 7 as the 0953416 It's really close to the others.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=252)** But that's the one that the model is going to choose automatically.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=256)** So let's lower this, and now we can take that model and we can apply it to the testing data.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=265)** To do this, I'm going to create a new object called pred for predicted and where you use the predict function, say, take the model that we just created with kNN, and instead of using the data that it was developed on, apply it to the test data.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=282)** And once we get that, we can get what's called the confusion matrix, which is the more things classified correctly or not.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=289)** So I'm going to save that as CM for confusion matrix and use this function and say we want the predicted and then reference is the true value.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=298)** And that means in testing, what was the actual value of y?
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=302)** That's whether something was spam or not.
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=304)** And so we've calculated that over here, we're going to plot it using what's called a four-fold plot.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=310)** It's a nice way of visualizing what we have here.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=313)** I'll actually [[Zoom]] in on that.
>
> **[5:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=316)** And what we have here is whether something was predicted to be not spam.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=320)** Those are these two on top, and whether it was predicted to be spam, that's on the bottom.
>
> **[5:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=325)** Reference means the true value wasn't really spam.
>
> **[5:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=329)** And over here, was it really not spam?
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=332)** And we an see is, the blue ones are accurate.
>
> **[5:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=336)** Those are the true positives, true positives for spam and true negatives.
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=339)** And that's much bigger than our false positives and false negatives.
>
> **[5:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=344)** But, we can also get numerical descriptions of those.
>
> **[5:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=348)** If we simply print the confusion matrix.
>
> **[5:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=353)** This is the same data in table format.
>
> **[5:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=356)** This is the prediction spam and not spam and the reference.
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=360)** And from that, you can see that we have this overall accuracy of 91%, .9109 as a proportion.
>
> **[6:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=369)** We have a confidence interval, we have several other values.
>
> **[6:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=372)** These two down here are also important.
>
> **[6:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=374)** Sensitivity has to do with how likely is it to trigger a prediction of spam.
>
> **[6:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=380)** And specifically it has more to do with true negatives.
>
> **[6:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=384)** How likely is it, if it is something is not spam, then it will be classified as not spam and that's 95% nearly.
>
> **[6:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=391)** And specificity means that when we have a prediction of spam, how many of them really are a spam?
>
> **[6:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=396)** So what percent of the positives are true positives and it's 85%.
>
> **[6:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=400)** And you can see those numbers right here.
>
> **[6:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=402)** Now we're going to be doing three different classification models using the same data set.
>
> **[6:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=407)** And so I want to be able to compare their results.
>
> **[6:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=410)** And so I'm going to be adding to this little section results as we go across.
>
> **[6:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=415)** We have 91% accuracy with a sensitivity of 95 and a specificity of 84.
>
> **[7:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=422)** This was a good predictive model.
>
> **[7:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=425)** Over 90% accurate, using very simple code in R, but let's go and see how well the other methods perform.
>
> **[7:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/k-nn?u=76281980&t=432)** So we can have an informed comparison of categorization and classification methods in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Zoom]] (1)
> **Code Identifiers:** knn (3), repeatedcv (1)
> **Definitions:** is a  (2), stands for (1), means that (1)
> **Env Vars:** e1071 (1), tst (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Naive Bayes](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=0)** - [Instructor] It's strange to talk about something being naive when we're trying to do serious [[Data Science]] but Naive Bayes , which again means that is treating each of the variables as independent, is an important and useful method for classification exercises in data science and here in [[Data Mining]].
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=18)** To do this, I'm going to start by learning a few packages, including this one, Naive Bayes , along with some of our other testing functions.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=27)** I'll set the random seed, and I'm going to import the training and testing datasets that we got from the spam basic data set, so trn for train and tst for test.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=40)** I'm then going to set up some control parameters.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=43)** I'm going to be using the same information I used in the k-nearest neighbors model.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=48)** It says we want to do repeated cross-validation with five folds and three sets of folds.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=55)** This gives us a very comprehensive way of doing internal testing with our training data before we moved on to the final validation with the testing data.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=65)** When you do Naive Bayes , you have a number of parameters you can set up on what's called a search grid where it's looking for different ways of constructing the model.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=75)** We have for instance, the laplace correction or laplace smoothing which is used for the categorical data.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=82)** They have several different values here that I can try out.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=85)** We have, whether it should use a kernel method and whether it should have an adjustment for the bandwidth as it goes through.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=93)** I've got some likely values for each of these and we're asking it to use all of these combinations as it tries to build the best model.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=102)** So I'm going to save that set of information and then I'm going to come down and build our nb for Naive Bayes object.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=111)** Use the train function, say we want Y, that's the class variable whether an email is spam or not as a function of everything else, you use the training data.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=121)** The method is Naive Bayes , use control parameters, use the grid parameters and omit cases that have missing values.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=130)** This is actually very similar to the command that we use when we did k-NN.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=136)** I'm going to run this, it takes a moment.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=137)** So depending on your machine, you may have a second to go check some of your own spam email.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=144)** When it finally pops up with the results, we can then plot the parameter values against accuracy.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=151)** And let's [[Zoom]] in on this.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=154)** And what this is showing us is for instance whether it's doing the laplace correction, going from values of zero up to one, and whether it's using the adjust or whether it's using the kernel and we get this accuracy over here.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=172)** And what we're looking for is what is highest on the top and truthfully, it looks like the ones that are not using the kernel are the highest and that the adjustment and the laplace correction don't make a difference, so it probably both leave those at their minimum values.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=187)** And in fact, we can simply ask R, what's the best model, which one should we use?
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=194)** And here's the data that it just graphed for us.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=198)** Here's the description of the commands that it did the predictor, the classes, the cross validation.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=207)** Whether it's using the kernel or adjusting.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=209)** And this says the final model that it shows was laplace correction is equal to zero using the kernel is set to false and the adjust is left at 0.1.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=222)** And so having developed this Naive Bayes model with our training data and with extensive cross validation, we can now apply it to our testing data.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=232)** We do this in the exact same way we did before, we use predict.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=237)** We tell it what model we're using, we saved it as nb for Naive Bayes .
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=241)** And to apply it to new data, the tst for test data and save that as pred for predicted.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=248)** We do that and then we can get the confusion matrix which shows us the accurate and inaccurate predictions.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=257)** We can then plot that matrix using the fourfold plot, it's a nice visualization of it.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=263)** Where the light blue tells us correct predictions and the red tells us incorrect predictions.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=270)** And we can see we've got some incorrect prediction, specifically this one right here with the 374, that's a little problem.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=277)** Let's get the confusion matrix printed and look at a little more detail.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=282)** So what we have here is probably not the spam filter you would want to use.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=287)** So it predicts something as spam but it's only slightly more likely to actually be spam.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=292)** We've got a lot of false positives.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=295)** On the other hand, it's only letting a very small number of spam messages through thinking that they are not spam.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=302)** So it's not going to have a lot of spam in your inbox but it's going to have a lot of legitimate message in your spam folder.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=308)** So that's the thing you're going to want to look at.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=310)** The overall accuracy is 71%, that's not really good.
>
> **[5:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=314)** And you can see that the sensitivity that has to do with the false positives is really low, but the specificity in terms of letting spam into your inbox, this is performing very well.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=328)** And we can compare this with the other model we had, the k-nearest neighbors.
>
> **[5:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=334)** You can see here, 71% overall accuracy to 91.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=338)** So at least on this particular dataset, the k-nearest neighbors is performing much better.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=346)** On the other hand, there are different situations in which each model will perform better.
>
> **[5:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=350)** So I strongly encourage you, anytime you can to try as many different models for your classification to see what works best with your model.
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/naive-bayes?u=76281980&t=360)** That's going to give you better range of options and hopefully better performance as you go through both your classification and the data mining to find out what works best as predictors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Data Mining]] (2), [[Zoom]] (1)
> **Analogies:** for instance (2), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (2)
> **Versions:** 0.1 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Decision trees](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=0)** - [Instructor] The final method for classification that we're going to look at, there are many, many other possibilities, but the one that we're going to look at in this [[Data Mining]] course is [[Decision Trees]].
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=11)** This is actually one of the most useful ways of visualizing what's happening in the decision process.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=18)** To do this, I'm going to load a few functions caret and e1071, which I use for almost all classification as well as rattle which makes very pretty plots for decision trees.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=30)** So I'm going to load those packages and set the random seed because we have randomness going on in this.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=37)** Then I'll import the training data set and the testing data set that we created earlier.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=44)** We need to do the training control parameters.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=46)** These are the exact same parameters we've had before that say repeated CV for cross validation, five folds and three sets of folds.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=57)** Then we're actually going to do the decision tree itself.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=60)** Again, we use the train function, say y, that's whether something is spam as predicted by that's what the tilde means.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=68)** Dot means everything else in the dataset.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=71)** Use the training data, and then we're actually going to do two kinds of decision trees.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=77)** The first one where we specify our part here.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=79)** That means that we want to have our try tuning, what's called the complexity parameter.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=85)** Then we tell it to use these control parameters that we said earlier for the cross validation and the tuning length 10 says, try 10 different parameters when it's tuning the complexity parameter.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=97)** So we're going to do this and it'll take a moment to actually do all the calculations.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=102)** And then we can look at the processing summary for this first one, dt is for decision tree one.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=109)** And so we look at that, and we have the sample size number predictors that we have two classes in the outcome variable.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=119)** Five folds repeated three times.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=123)** And then we have the accuracy of the various complexity parameters.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=128)** And it said that the final value was this one up at the tippy top the 07751938 for the complexity parameter gave us an accuracy of 89.44 and that's really close to the others but it is higher.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=146)** Now what we'll do is we will plot that.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=149)** We'll simply take it, feed it into plot and you can see that, yeah, there's a difference there but again it's a compressed scale.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=155)** So if we do it on the zero to one range, there's a difference.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=159)** And this one right here, the complexity parameter we'll leave it right there.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=164)** Now we're going to do a second decision tree.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=166)** So I'm going to say that as dt decision tree two.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=170)** The difference in this one is this.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=172)** Instead of our part, we have our part two.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=174)** And this says instead of changing the complexity parameter, try the maximum tree depth.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=181)** How far it can go, how many branches as it can have.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=184)** And here we're saying try up to 10.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=187)** So we run that model and then we can look at it's processing summary and this one increases as it adds more levels to the tree.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=199)** We can plot that.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=201)** You can see it increasing as the tree depth, the more decisions that includes in the tree, and then we can show that on the zero to 100 range it's still a detectable increase.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=213)** And then just as a little trick, we're going to actually create an object called the final decision tree, finaldt.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=220)** And it says, well, if the accuracy for the first model is greater than the second one, then put the first model in here, otherwise put the second model in.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=229)** It's just an automated way of comparing the highest accuracy of the two.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=234)** We can get the description of the final training model.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=238)** And this is what the text version of a decision tree looks like.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=242)** It tells us how many cases we have that are spam and not spam.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=246)** And then it starts looking at the variables.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=249)** Now, unfortunately the variables here have these cryptic names.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=251)** A52, A7 and so on.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=255)** If you were to go back to the original file description, you could see what those actually referred to.
>
> **[4:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=259)** Again, it's like, does this [[Microsoft Word|word]] appear or how many capital letters are there?
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=263)** How many numbers are there?
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=265)** And those are the predictors but a better way to look at this is with a graph.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=271)** And we're going to plot it using the fancyRpartPlot.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=276)** And when we do that, I can [[Zoom]] in on that.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=280)** This our decision tree where we have each node and you can see it makes a decision at each level branches off to the left or the right depending on the specific criteria for that decision.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=291)** And it says not spam, spam, not spam, getting down until we get to our classification here.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=298)** And that gives us our overall decision process.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=302)** And so it turns out that decision trees are a really great way of doing this because you have this visual output.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=310)** But we can also take this model and we can apply it to our testing data which is something we've done with our other approaches.
>
> **[5:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=318)** So we're going to take our final model here and we're going to apply it to the new testing data.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=324)** Save it to pred for predicted.
>
> **[5:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=326)** Then we'll get the accuracy, the confusion matrix.
>
> **[5:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=331)** And we can plot that confusion matrix.
>
> **[5:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=334)** The blue ones are the true positives meaning they really are spam and the true negatives meaning they really aren't spam.
>
> **[5:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=341)** The red are the false positive negatives, and you can see we've got pretty good accuracy here.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=347)** But if you want the actual numbers, we can print the result.
>
> **[5:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=351)** And we have a 90.29% total accuracy with good levels of both sensitivity and specificity.
>
> **[6:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=362)** And if you want to compare these, we can come up here.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=365)** I'll make that a little larger here.
>
> **[6:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=369)** This is very similar to the accuracy we had overall with the K-nearest neighbors and both are much better than the Naive Bayes.
>
> **[6:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=377)** Although interestingly, the highest specificity was with the Naive Bayes.
>
> **[6:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=382)** And we have small variations in these.
>
> **[6:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=384)** So you can use the decision tree because you can actually see a graphic of what's happening or the kNN which is conceptually the simplest by simply looking at neighbors in a multidimensional space.
>
> **[6:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=396)** But any one of these is going to get you very far and where you need for classification using these simple datasets but they are eminently scalable.
>
> **[6:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=406)** They can go to much larger, more complex datasets, and variations on them.
>
> **[6:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/decision-trees?u=76281980&t=411)** A good method, again, is to try all three of these when you're doing the classification task to find the method that works best for your particular dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (4), [[Data Mining]] (1), [[Microsoft Word|Word]] (1), [[Zoom]] (1)
> **CLI Commands:** node (1), make (1), find (1)
> **Code Identifiers:** fancyrpartplot (1), knn (1)
> **Versions:** 89.44 (1), 90.29 (1)
> **Analogies:** it's like (1), similar to (1)
> **Env Vars:** a52 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Challenge: K-nn](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=5)** - [Narrator] Now that we've covered several methods of classification within a [[Data Mining]] context.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=10)** I want to give you the opportunity to try doing this with a new dataset.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=15)** To do this we're going to use a data set that comes from a package called mlbench which stands for machine learning benchmark.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=24)** I'm going to load that package along with a few others.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=27)** And then I'll set the random seed.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=30)** Now I'm going to do a little bit of [[Data Preparation]] here.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=33)** So you have things ready to go for the actual classification task.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=40)** We're going to use a dataset that's about breast cancer that comes from the mlbench package.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=45)** So let's get information on that one.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=49)** The Wisconsin Breast Cancer Database and what it does is it looks at cells and it classifies them by clump thickness, uniformity of cell size, bare nuclei, mitoses and so on.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=63)** And then finally class is whether it is benign or malignant.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=67)** And let's start by loading the data, and then summarizing the data.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=72)** Now there are 699 observations so it's not an enormous dataset.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=78)** But it gives us something useful to work with.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=80)** We've got our variables here.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=83)** Now you see they're being listed in terms of descending frequencies so it's a little curious.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=89)** And then we have benign and malignant down here at the bottom.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=95)** I want to do a little bit of data preparation before I hand this particular task off to you.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=101)** I'm going to take breast cancer, and then remove the ID variable.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=105)** I'm going to take the class variable which says whether a growth is benign or malignant.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=111)** I'm going to rename that as Y.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=113)** And then I'm going to mutate the variables.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=116)** I'm going to go across several of them, except for the Y and turn all the [[Representational State Transfer (REST)|rest]] of them into numeric.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=122)** Because at this exact moment they're actually being categorized as categorical variables.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=127)** Which is not going to work well for the method that we want to use.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=131)** We're going to use K-Nearest Neighbors which likes to put things in a multidimensional space.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=136)** And that works best when you have quantitative or measured variables.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=140)** We're going to omit cases with missing data save it as the table and print in the console below.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=145)** And once we do that, you see that these are now all double variables, that's a quantitative variable.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=152)** And then I'm going to split into training and testing by adding a row number and then slicing off 70% to proportion, 70% in training.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=165)** Put the rest in the testing using the ID number, and then removing the ID number from everything.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=174)** Finally, I'm going to do a little bit of data exploration on our mutual behalves.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=179)** So let's make a bar chart of the training data.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=183)** And all this tells us is that we have about twice as many benign growths as we have malignant.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=190)** And then we'll look at a few variables in a pairs plot to see what that's like.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=198)** And I'll [[Zoom]] in on this.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=201)** And so the orange coral color is benign and the green blue teal color is malignant.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=210)** The nice thing is you can see that there are some strong differentiations.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=214)** There's almost no overlap here.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=217)** We got good differences on these variables.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=221)** So I think we'll be able to get a clean model.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=224)** And so what I want to invite you to do is then using this prepared dataset.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=230)** Just running through these commands again is to apply a K-Nearest Neighbors model to predict whether a growth is classified as benign or malignant.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=241)** I'll see you here in just a moment and show you how I solved the same problem.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-k-nn?u=76281980&t=245)** See you momentarily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Data Mining]] (1), [[Zoom]] (1)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: K-nn](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=0)** - [Narrator] I invited you to do a k-nearest neighbors classification analysis on a breast cancer data set.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=12)** Let me show you how I did this and we can compare our approaches and the results you may have gotten.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=18)** I'm going to start by repeating the things I did in the challenge by loading the packages, setting the seed loading the data set from the ML bench package and then preparing the data by selecting variables transforming some to numeric and so on.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=39)** Splitting into training and testing data sets and then exploring to get a bar chart of benign versus malignant.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=49)** And then the Parris plot that lets me know that it looks like we're going to have good separation on the variables.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=56)** I invited you to do a K nearest neighbors analysis on this one.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=61)** And so I'm actually going to be using many of the same approaches that we had in our earlier example of kNN.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=68)** I wanted to set up the stack control by doing repeated cross validation with five folds and five sets of folds.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=76)** I'll save that, then for the parameters we're going to have it do numbers three through actually 19 I've got 20 here, but it has to go up by two.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=87)** We're going to do those numbers and then we're going to fit the model to the training data.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=94)** This can take a moment.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=97)** It's not a very large data set.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=98)** So it goes pretty quickly.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=101)** All of this is the same as what I have done earlier.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=105)** Now let's look and see how accurate it was.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=106)** We can plot the accuracy of the various values of K.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=110)** We can see it jumps up dramatically.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=113)** Although truthfully, when I say dramatically if we look at the zero to 100% range, it's all really close.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=119)** We have very high levels of accuracy.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=122)** Let's print the final model, that said we had 478 cases in our training data set, nine predictor variables two classes.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=135)** It says it did the pre-processing.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=136)** These are the values of accuracy that went over to the chart on the right.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=141)** And it said the accuracy was a highest when we had 15 neighbors used in the multidimensional space to classify a new observation as either benign or malignant.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=153)** So let's go back and let's apply that model to the test data.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=157)** Again, same approach we've used before.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=159)** We'll use the predict function tell it to use the saved model which I called fit, a generic name, use new data the test data, and save it as pred for predicted values.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=172)** Then we can get the confusion matrix which will save as, see him, and we can both plot that.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=179)** And what you see here by the way is the light blue are true positives and true negatives.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=185)** Those are huge compared to the red which are the false positives and false negatives.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=191)** In fact, when we get the overall [[Statistics]], you see again that we had 96.59% accuracy.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=200)** This is an amazingly accurate model.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=202)** And that was helpful because we had several variables which there was very clear differentiation between the two classes benign and malignant on those measurements.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=212)** And so this is a great example of how something like K nearest neighbors can be used as a classification and approach.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-k-nn?u=76281980&t=218)** And not just any problem, like whether it's spam, but even in life and death situations like identifying people who are at greatest need for cancer treatment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** knn (1)
> **Versions:** 96.59 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Association Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Association analysis overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=0)** - [Presenter] Association analysis also known as association rules mining is actually better known as a market basket analysis because it's used to figure out the things that people are going to buy when they're shopping in the market.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=14)** The idea is you're trying to find some sort of, if this, then that, logic to build up rules.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=20)** If a person buys an orange, what's the [[Probability]] they'll buy a grape fruit?
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=23)** If they get both of those, what's the probability they'll get a lime or a lemon?
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=27)** And the ability to specify those rules, so as associations allows you, for instance, to place things near each other in the store or to offer an incentive, if you bought this, we'll give you a discount on this one over here.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=39)** And so association analysis or association rules mining can be extraordinarily useful within commercial settings, but within many other situations.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=48)** I'll give you a few examples of those.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=51)** Now, most of the time when we think about working with data, we think about data in a tabular format with rows and columns.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=58)** And so here, for instance, you might have customers listed in one, you see we've got our four customers with Ava coming again at the bottom, we have the date of the transaction and maybe you just have one column for each item that they could purchase apples, bananas, cherries and dates.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=73)** You put a one if they purchase it in that transaction and you don't put anything if they didn't, then it gives you kind of a sparse data set where you could fill it in with zeros.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=82)** But this is the rows and columns that most of the time when we work with data, this is what we're used to.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=88)** An association analysis can work with this kind of data but more often the data is provided in a transactional data format.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=96)** So we have the customer here on the left, we have the date of the transaction and then we have this single entry that is items with all the things that they bought maybe just separated with a comma.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=107)** And sometimes it's going to be a really long list.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=110)** This is a very different kind of data.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=112)** And while you can't split it into the columns, most of the [[Algorithms]] that we're going to be using work really well with this transactional data format.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=121)** I want to show you two really common methods for doing this kind of analysis and one less common application of it.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=130)** By far, the most common is an algorithm known as Apriori and the most common method.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=136)** And it really just involves counting things, counting individual items and items sets or collections of items.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=143)** You can do some of this on your fingers.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=144)** One here, two here, it's pretty straight-forward.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=148)** You then create conditional probabilities.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=151)** If they bought this, what's the probability that they bought that?
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=155)** The nice thing about it is, it's super easy to interpret the results.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=160)** A very closely related algorithm is called Eclat, which is actually a portmanteau for equivalent class transformation.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=167)** Although it is also the French [[Microsoft Word|word]] that refers to the gleam or the glare of the sun.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=172)** So I've got the sun here.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=175)** It's a similar method to Apriori, but the math is a little different and it worked better for large data sets because it's able to do it by going through the dataset, wants to create item sets and then it works on those.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=188)** It's interpreted in the same way.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=190)** And depending on the nature of your dataset, specifically if you have a really large one, you may want to try Eclat instead of Apriori.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=196)** Now with either of these methods, you're going to get three things.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=200)** In addition to items, as the say, if the person bought A and B then they also bought C.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=207)** If we look at just two items, A and B, you get a measure of support.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=211)** And that is how often do A and B appear together in the data?
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=215)** How often does a person get both A and B in the transaction?
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=218)** So you simply add up the number of transactions that have both A and B divided by the total, that gives you a proportion, that's your support.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=226)** How often does it happen?
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=227)** And then confidence, how often does B appear when A appear?
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=232)** So now you're looking at just the transactions that have A so just the ones where people bought apples, how often when people bought apples, do they also buy bananas?
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=241)** That's confidence, it's also a proportion.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=245)** And then Lyft gets a little more complicated.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=248)** It's the confidence in the rule, if they bought an apple then they bought a banana compared to the support for that one item.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=256)** So it looks at the confidence that how often did they get an apple and a banana compared to just apples and then divide that or compare it to how often did they buy bananas overall?
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=267)** that's lift.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=268)** And so these three numbers support confidence and lift are the main outcomes when you do an Apriori or an Eclat analysis.
>
> **[4:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=278)** Now there is one other different use of association rules and it's called CBA, which stands for classification based on association rules.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=288)** As you might guess, this is a classification method.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=291)** It's used for placing new cases into known classes or categories.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=296)** Think about recycling.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=299)** Do you recycle a piece of plastic?
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=301)** Well, where I am, you need to say, is it hard plastic?
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=304)** cause only certain kinds of plastics can get recycled.
>
> **[5:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=306)** If it is, great.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=308)** Is it clean?
>
> **[5:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=309)** It has to be clean enough.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=310)** And you have a few rules to decide before you can put something in the recycling there.
>
> **[5:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=315)** And so I am classifying things as recyclable or not recyclable based on these rules that apply to them.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=322)** And so what CBA does is it uses association rules.
>
> **[5:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=326)** If this, then that, to classify cases the same way you might use something like Cain's nearest neighbors to classify cases.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=335)** It's got the same goal, but it uses a different method behind it.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=338)** I'm going to demonstrate all three of these.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=340)** I'm going to show you how to do standard association analysis or association rules mining with both the Apriori and the Eclat algorithms.
>
> **[5:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=348)** And then this application where classification is based on association rules.
>
> **[5:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/association-analysis-overview?u=76281980&t=354)** You'll see that this is a very different approach and a very flexible approach and a great thing to add to your [[Data Mining]] toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Algorithms]] (2), [[Microsoft Word|Word]] (1), [[Data Mining]] (1)
> **Definitions:** is a  (4), known as (3), is an  (1), is called (1), stands for (1)
> **Env Vars:** cba (2)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)

#### [Dataset: Groceries](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=0)** - [Instructor] For two of our three demonstrations of association rules mining, I want to use a dataset called Groceries.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=7)** That's actually a good thing because association rules mining is often known as market basket analysis because it's done within a shopping context.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=16)** To do this, I'm going to load several packages, including this one, arules, which is for association rules mining.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=24)** From there, I'm going to load a data set called Groceries with a capital G.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=29)** We can get some information on that and you can see that it's one month of transactions at a real world, 9,835 transactions, 169 categories.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=41)** We'll load the data and you'll see that it's not a data frame.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=46)** It's a list.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=47)** It's formal class transactions.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=48)** If we come back here to see the structure, you can see it's got a nested structure and we've got these various cryptic things in here, but down here you can actually see what some of the things are, those make sense.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=64)** And then we can get a summary of the data that includes the five most frequent items.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=70)** And when we look at that one, you can see it gives us how many rows there are, how many columns, different items, that the most frequent items are whole milk, other vegetables, rolls and buns, soda, yogurt, and other.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=84)** This tells us how many of the purchases, how many of the transactions, had a single item, over 2,000, or two items, up to 32 items in a single transaction.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=95)** And I'll mention, by the way, 'cause I have sometimes had glitches with this, if you get an error message as you're doing this simply come up to Session and Restart.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=106)** It'll load properly.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-groceries?u=76281980&t=108)** But this is the data set that we're going to use for our first two demonstrations of association rules of mining and it'll come together more clearly when you see it in practice.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Apriori](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=0)** - [Instructor] For our first demonstration of association rule mining, we'll use what is by far the most common approach, which is the Apriori algorithm.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=10)** To demonstrate this, I'm going to load a few packages, including arules for association rules mining, as well as arulesViz, which is for visualizing some of the association rules.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=21)** So let's load those.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=25)** Going to set a random seed.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=29)** And then, let's get the transactional data about groceries from the package.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=34)** So you see it's loaded there in the environment on the top right.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=38)** I'm going to save that to df because that lets me reuse some of my code.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=43)** And then, we'll come down to actually getting the rules.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=46)** Now, what I'm going to do is I'm going to take the data frame, which has the groceries transactions.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=52)** I'm going to use the Apriori algorithm, and then I have two parameters that I need to specify.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=58)** One is the minimum level of support.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=61)** That is, how common is this overall in the dataset?
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=64)** And I'm going to put 001.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=67)** And then, the minimum level of confidence.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=70)** And that has to do with a conditional [[Probability]].
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=74)** I'm saying 0.75.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=77)** And so with those two parameters, and the apriori function working on our data, which is the groceries just renamed as df, I can save that into an object called rules.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=90)** Now, when I do that, you can see that it's giving me a range of output [[Statistics]].
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=99)** The important thing down here is that it's running through, it's creating an object.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=103)** We have 777 rules right there that it made from this dataset.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=109)** Let's come back here.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=109)** In fact, if we want the number of rules, we can just type the [[Microsoft Word|word]] rules, and it just tells us how many there are instead of showing us what the actual rules are.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=117)** To see the rules printed in the console, we're going to do two things.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=122)** First off, I'm going to change the number of digits, just to two.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=126)** By the way, you'll want to reset R when you're done, otherwise that option will maintain.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=131)** And then, we're going to inspect the rules, the first 20, but I'm going to make the console a lot bigger while I do this.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=140)** Come back here to inspect rules.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=144)** And here you see them, the first 20 rules that are ordered by confidence, and support, and lift.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=152)** The first rule here is that if a person buys both liquor and red or blush wine, then they are likely to buy bottled beer.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=160)** And we get a high degree of confidence from that and very high level of lift as well.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=167)** And so this is a pretty reliable thing.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=169)** The second one is if a person buys curds and cereals, they're likely to buy whole milk.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=174)** In fact, you can see whole milk, which is our single most likely item in the entire transaction list, shows up in a lot of these.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=181)** And so these are what association rules look like, and the support, confidence, coverage, and lift are statistics to tell you how strong that particular association is.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=193)** Now, let me bring this all back here.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=197)** And we're going to look at a few different ways of graphing these particular results.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=202)** Let's come down here and simply use the generic plot on the rules.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=208)** And when we do that, we get an interesting kind of scatter plot.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=211)** I'll [[Zoom]] in on that.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=213)** And you'll see, it's showing us three variables.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=215)** It's showing us, for each of the 777 rules, the level of support going all the way up to 0045, the level of confidence, which is a conditional probability, and then the level of lift, another kind of conditional probability in terms of assessing each one of these.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=235)** And you can see that we have variations in these, but we have enough here that these are rules that can be useful to work with.
>
> **[4:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=244)** Another graph actually is sort of a network kind of graph, like a spider web.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=249)** And we'll do plot, and we'll say we want rules 1 through 20, and the method is graph.
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=253)** Again, think of like social network kind of graph.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=257)** And when we run that one, this is the rules that we see.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=261)** We have very strong support for liquor and red or blush wine getting bottled beer.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=269)** Over here, we have the other associations.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=273)** We have vegetables, other vegetables.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=275)** We have instant food [[Microsoft Products|products]] and cereals.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/apriori?u=76281980&t=277)** And so this is a way of visualizing the sort of cause and effect or predictor and outcome relationships between the different items in the association rules analysis using the Apriori algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Statistics]] (2), [[Microsoft Word|Word]] (1), [[Zoom]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** arulesviz (1)
> **Versions:** 0.75 (1)
> **Speakers:** - [instructor] (1)

#### [Eclat](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=0)** After Apriori, what is probably the second most common approach to association rules mining, is the Eclat algorithm.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=9)** And this one actually runs very similarly.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=13)** And in fact, under certain settings they are guaranteed to give identical responses.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=18)** But, it goes through the data a little differently and it can be faster with larger data sets.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=24)** But, for this demonstration I'm going to use the same data set we had before.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=28)** And we get the Eclat algorithm from the same arules package that we've loaded previously.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=36)** So I'm going to load that and then set the random seed and then bring in the groceries data set from arules package.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=44)** So there's our information about it.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=47)** We've loaded it over there.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=48)** We'll get the structure and the summary.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=51)** And this we've all seen before.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=53)** Now we're going to come down to the rules and this is where Eclat differs a little bit from Apriori.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=58)** Eclat first creates item sets and that allows it to process the data a little more efficiently than the Apriori approach.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=66)** As with Apriori, you need to specify a minimum level of support but in this case, we're going to do a little differently and also specify the maximum length of items in a rule.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=78)** You can do that in either approach.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=79)** But I'm going to do that one here with the Eclat.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=83)** So, our results are going to be a little different because I'm specifying things differently here.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=88)** So let's run this one and get the item sets and then we can get the rules from that using the ruleinduction.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=98)** So I'm going to take the item sets, run that through and let's actually see how many rules we made.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=105)** This time we have 258 rules.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=107)** I'm looking down here at the bottom as opposed to the 777 that we had before.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=112)** But I also specified the maximum length of rules as being limited to four, this time around.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=118)** Let's get a print out of the rules similar to what we had before.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=122)** I'm going to set the options to two digits again and then I'm going to make the window wider so we can see all of those.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=132)** And here are our rules and you can see we actually have this very same rule at the top that if a person buys both liquor and red or blush wine then, they are likely to buy a bottled beer.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=145)** And we have these same [[Statistics]] over here that are very similar to what we had before.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=151)** And then we have curd and cereals to whole milk.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=155)** Again, same general results but the Eclat algorithm tends to work better with larger data sets because of the way it pre-processes the data.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=166)** We'll, bring this back in and then we can look at the rules that we had again.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=173)** This is the scatterplot that shows support across the bottom, confidence at the side and colored things by Lyft, very similar to what we had before.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=183)** And we'll get a graph meaning a network graph of the top 20 rules.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=189)** This one looks a little bit different but that's also because there's a random element in how things are structured.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=194)** But over here, you can see our big one here that if somebody buys liquor and red or blush wine they are very high [[Probability]] of buying bottled beer and that makes it easier to interpret what's going on.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/eclat?u=76281980&t=208)** Again, I've restricted it by limiting the maximum length of the rules but the Eclat algorithm is another very prominent method for doing association rules of mining in our or in any other language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Probability]] (1)
> **Analogies:** similar to (3)
> **CLI Commands:** make (1)

#### [CBA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=0)** - [Instructor] For our third and final demonstration of Association Rules of Mining, I want to do something completely different.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=7)** And what it is, is Classification Based on Association or CBA.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=12)** And this is actually a classification technique.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=16)** It's used for assigning cases to this category or that category.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=19)** The difference is, it does base on association rules that's the underlying method behind the classifications.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=28)** And so I want to demonstrate how this works using a dataset we use for classification, the penguins data set from before.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=37)** To do this I'm going to first load a few packages, including arulesCBA, that's for classification based on association as well as carrot, which lets us do a confusion matrix.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=50)** So let's load those packages.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=53)** We'll set the random seed and we'll import the penguins data that we wrangled previously.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=62)** Here's the penguins data, you see we've got Y which is our class variable where we have three different species of penguins.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=69)** And then we have four physical measurements.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=75)** Now we're going to have to do a little bit of [[Data Preparation]] here.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=78)** And part of that is because the CBA approach is much happier with categories as opposed to these quantitative measurements.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=86)** So we're going to have to take the data on these categorical variables, like how much of the penguin weighs and we're going to have to put them into discreet categories that is, we're going to discretize the data, using the algorithm that's called the Minimum Description Length Principle, MDLP.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=105)** So I'm going to come down here.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=107)** I'm going to use the discretize DF under supervised which means that we have categories that we're trying to assign things to.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=116)** And it says that the outcome, the classification that matters is why that's the species of the penguin predicted by everything else use the DF data frame and the method is MDLP, the Minimum Distance Length Principle.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=132)** And we'll save that to DF.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=135)** And then we can check the first few rows of the data and let me [[Zoom]] this up.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=140)** You can see it looks a little different.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=141)** Here we have these quantitative measurements.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=144)** Here we have them broken down into categories.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=148)** And this is the kind of data that's going to work better for the CBA analysis that we're going to do.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=156)** We're doing a classification task and so it's helpful to take the data and break it into training and testing datasets.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=164)** To do that I'm going to temporarily add a row ID sample 70% of the data for training, and then put the [[Representational State Transfer (REST)|rest]] into the testing and then remove the ID.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=178)** Then we'll come here.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=180)** To model the data we'll create a CBA model using the CBA function from the arulesCBA package.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=189)** And we say, CBA where we're predicting the Y that's the species by everything else in the dataset we're using the training data set, and we're going to save that model to fit a generic model used for anytime you fit a model to something.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=206)** So now we have fit over here.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=207)** It's a list object.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=209)** Let's get some basic information on that model.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=213)** It tells us that it used the CBA classifier and it's got 10 rules.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=217)** Okay, that's fine.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=218)** Let's actually see what the rules are.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=220)** I'm going to change the number of digits to two.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=224)** You'll want to reset when you're done to get that back normal.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=228)** And then I have to make this window really wide 'Cause we're going to inspect the rules that are in fit.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=235)** And when you get that, you see we have a rule here that says if the bill length is in this range, and if the bill depth is in this range, then it's likely to be an Adelie penguin.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=249)** And we have the same [[Statistics]], support, confidence, coverage, lift as well as a few others that are covered transactions in total errors that we have because it's a classification problem.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=262)** We have another one here that says just bill depth that ignores the other things.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=266)** And it says that's likely to be a Gentoo.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=269)** And so we have these kinds of rules that go through.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=272)** These are our 10 rules.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=273)** It finishes with this last one that basically says put everything else into Chinstrap.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=281)** But because this is a classification model we can also check the accuracy of our classifications.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=287)** We can create a confusion matrix.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=289)** Now this is for the training data.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=291)** This is the one that we just developed it on.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=293)** And if I make that a little bigger and if you come here references the actual observation the real species and this is the predicted species.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=302)** In terms of reference some of the Adelie penguins got misclassified as Chinstrap when it's Gentoo.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=307)** Only one in the Chinstrap penguins got misclassified and none of the Gentoos.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=311)** So the Adelie seems to overlap a little bit with the others But overall that's 96.7% accuracy.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=317)** That's really extraordinary accuracy based on just four physical measurements.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=322)** But what's more important is how well this model works with the testing dataset.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=328)** Not the training one though, not the one that was built on.
>
> **[5:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=330)** So we're going to create a new confusion matrix.
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=332)** And this time we're going to say, use the true values in the testing dataset but predict using the fit applied to the testing data.
>
> **[5:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=344)** So we're doing this all in one shot.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=347)** We run that and now you see that again we have 96% accuracy, 96.1% accuracy.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=357)** And this situation, we have three Adelie penguins misclassified, one Chinstrap and no Gentoo.
>
> **[6:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=363)** This is a very effective model.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=365)** Again, the point of CBA is classification like the things we did earlier, like K nearest neighbors.
>
> **[6:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=374)** But in this case, instead of being based on where a point is located in multidimensional space, it uses the association rules that are developed through a process like operatory as the basis for assigning cases to particular categories.
>
> **[6:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=390)** This is a really ingenious use of the method.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/cba?u=76281980&t=393)** And it's something that can be very effective, both in terms of making a use case for association rules but also giving you one more tool in your toolkit for doing classification analysis in your [[Data Mining]] projects

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Zoom]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Statistics]] (1), [[Data Mining]] (1)
> **Env Vars:** cba (8), mdlp (2)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** arulescba (2)
> **Versions:** 96.7 (1), 96.1 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Apriori](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=0)** - [Instructor] Now we've covered several methods of association rules of mining, I want to invite you to try some of these methods on your own, specifically, I want to give you a challenge here with Apriori.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=16)** And to do this, we're going to use a dataset that comes from the arules package.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=22)** So let's load these packages, and I just set the random seed as a matter of course, and we're going to use the EPUB data set from arules package.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=34)** Now let's get a little bit of information about that one.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=37)** This is a download history of documents from the Electronic Publication Platform at the Vienna University of Economics and Business Administration from 2003 to 2008.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=49)** And it's over 15,000 transactions over 900 items.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=53)** And the ideas are cryptic, they're just these little shortcuts, so we don't actually know exactly what's being downloaded, except we can use those IDs as a way of studying the interrelationships between the items.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=65)** So let's load the data here, you can see that we've got the transactions loaded over here, it's in list format, or similar to lists, we'll get the structure.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=77)** Again down here are the actual codes for the documents.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=84)** And then let's get a summary of the five most frequent items.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=90)** Again, similar to what we had with the market basket analysis earlier, this tells us that 11,000 of the requests had just a single item, 2,189 had two items, and then we had, you know, one with 58 electronic requests all at once.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=106)** And these are the names of the most frequent ones.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=111)** All right, now I'm going to save the data to DF, and then from here, I'm going to invite you to do an operatory analysis on this data, and then we'll meet back in just a moment and compare how we each analyze the data and the results that we got from it.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-apriori?u=76281980&t=126)** I'll see you soon.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2)
> **Env Vars:** epub (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Apriori](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=0)** - I invited you to conduct an Apriori association analysis on a dataset called EPUB from the A rules package.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=13)** Let's take a look at how I solved this one and we can compare our work.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=18)** I'm going to start by loading the packages, setting a random seed and then getting that same information about the EPUB dataset that we had before.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=26)** We'll get loaded into data, get the structure get the summary with the top five items and save it to an object called DF.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=36)** The important part here is getting the rules and this is where we use the Apriori algorithm.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=40)** And we specify the parameters of support minimum level of support, which I've set to O O one and minimum level of confidence, point seven five.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=50)** We'll run that and save it in rules.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=54)** Then let's get the number of rules that were created.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=57)** It actually created only three rules from this particular dataset three rules that met those particular parameters that I specified.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=66)** So let's come down here and see what those rules are.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=69)** Now, a couple of things you need to know is that when I did this originally in Apriori I had to specify show me just the first 20 rules while we only have three rules.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=77)** So I've removed that, but I'm still going to set it for two digits and then I'm going to make a wide window here and we will inspect the rules.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=90)** And what this is telling us is if a person ordered this doc and this doc, then they are also likely to order this doc with this level of support, confidence, coverage, and lift.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=101)** And actually it's interesting it's the same three docs that seem to be associated with each other.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=106)** And so things appear to have been very spread out in terms of what people can order, but let's take a look at a plot and see what it shows us there.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=113)** We'll do the plot of the rules, there's that.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=117)** And you can see actually, since it has just the three rules they all have the same level of support, but they vary in confidence and we have similar levels of lift.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=127)** We can get a graph, a network graph.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=129)** Again, we have just a few things here but it shows us the interconnections between them.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-apriori?u=76281980&t=136)** And so this is a quick and easy way of implementing an association rules analysis using the Apriori algorithm in our on a novel dataset.

> [!info]- Semantic Content
>
> **Env Vars:** epub (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Time-Series Mining

[↑ Back to Table of Contents](#table-of-contents)

#### [Time-series mining overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=0)** - [Instructor] Perhaps you've seen on an old clock, the saying, "Tempus Fugit," Latin for, "Time flies."
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=7)** And that is that the crux of an important issue in analyzing temporal data.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=13)** The idea is that it doesn't stay still, it's moving, and the problem is, it's only moving in one direction.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=18)** Time only moves forward, and that gives you special analytical challenges.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=24)** Fortunately, there are several methods, within analysis in general and [[Data Mining]] in particular, to deal with this temporal orientation of time-based data.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=35)** The first one that we're going to look at, and the most basic, is called decomposition.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=39)** It's like taking that phone apart to see what it's made of.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=43)** With decomposition, or uncomposing, taking apart, you're going to separate time series data into several elements, a smooth trend, seasonal variation and noise, that's not adequately explained by those other two elements.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=60)** Time series decomposition is generally a descriptive procedure to way of getting the big picture of what's going on.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=66)** The nice thing about it is a visual procedure gives you a graph that's very clear and easy to see what's happening.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=73)** Also, you have some choices.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=74)** You can have additive models for things where forces accumulate over time, or multiplicative models, where you're looking at things like rates of change over time, and I'll demonstrate both of those.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=87)** Another very common method for working with temporal data is ARIMA.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=93)** I like to think of this as looking backwards.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=95)** ARIMA is a portmanteau for autoregressive integrated moving average model.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=101)** And here's what each of those things mean.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=103)** The AR, the autoregressive part, means that later values are predicted by earlier or lagged values.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=111)** To lag means you go back one step in time, or two steps or three steps, to try to predict what happens later.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=119)** The I in ARIMA is for integrated, and that means that the absolute values in your data are replaced by differences in the data.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=128)** So for instance, sometimes when they report stock market prices, they'll tell you what the value is today, but then they'll say how big the change is from yesterday.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=136)** That's the difference, the integrated part.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=139)** And then finally, the MA in ARIMA stands for a moving average, and that's where the regression errors are linear combinations of current and previous values.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=149)** Please note, this is not to be confused with the standard moving average, which is used to smooth time series data.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=155)** It's a moving average model, it's a little more sophisticated.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=159)** Now, there are lots of variations on ARIMA.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=161)** There's ARMA, which doesn't have the I for difference in, there's SARIMA, which includes seasonal components, that's actually what I'm going to demonstrate, and many other things that allow you to stand where you are, to look back and use that to predict the future.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=177)** Finally, we're going to look at something called MLP, which stands for a multilayer perceptron, and that's an entire class of feedforward [[Artificial Neural Networks]], and [[Neural Networks]] have been where so much of the amazing developments in [[Data Science]] have been.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=195)** A neural network is designed to have an input layer, which you see here on the left, one or more hidden layers, which you see here, the second and third columns of data, and then an output layer, which gives you the prediction.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=208)** Now, the nice thing about MLPs is while they're based on regular perceptrons, they do several things.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=215)** Number one, they can have several layers, we're going to demonstrate that, and they can also have what's called a non-linear activation function.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=223)** One of the benefits of that is it makes it so that MLPs, like several other kinds of neural networks, can distinguish non-linearly separable data.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=233)** Another example is a recurrent neural network or RNN, that's also frequently used, but MLPs are a little more flexible and apply very well to the data that we'll be demonstrating.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-mining-overview?u=76281980&t=242)** But any one of these approaches, the descriptive practice of decomposition, the ARIMA class of models, or a neural network like MLP, will give you a great way to find meaning in your temporally structured data that is always moving in one direction towards the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (2), [[Data Mining]] (1), [[Artificial Neural Networks]] (1), [[Data Science]] (1)
> **Env Vars:** arima (6), mlp (2), arma (1), sarima (1), rnn (1)
> **Definitions:** is a  (3), means that (2), stands for (2), is called (1)
> **Analogies:** it's like (1), picture (1), for instance (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Dataset: AirPassengers](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=0)** - [Instructor] For our three demonstrations of time series mining, I want to use an example data set that actually comes packaged in R, in the datasets package.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=10)** And it's called AirPassengers.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=13)** Now to look at this, we'll load a few packages, including the datasets package.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=19)** And then we simply get a little information by doing the ?Air Passengers.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=23)** Remember capitalization matters here and this is a well-known dataset that says the number of monthly air passengers from 1949 to 1960 in thousands.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=35)** And if you want to load the data, we just simply do data("AirPassengers").
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=40)** You can see it has an empty value over here, but let's show the data just by writing its name.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=46)** A time series data set is often laid out in a very compact way, especially when it's a univariate time series.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=52)** This just shows just the number of passengers and nothing else.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=56)** And so what you see here is we have the years listed down the left, that's normally where we would have an index row.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=61)** And then it's arranged in a second dimension here, with the month, January through December.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=67)** And then the numbers are the number of thousands of passengers that flew international airline that month.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=75)** The interesting thing about it is it's not actually a two-dimensional dataset.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=79)** You can see right here, it's a time series that kind of goes out like this.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=83)** Let's get this structure by simply doing AirPassengers into STR.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=89)** You can see, it's the same thing.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=90)** It actually is a unidimensional dataset.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=92)** It's got all of these numbers in a row, but it knows that these are for the years, 1949 to 1961.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=100)** So it knows to break them up into months.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=102)** We can get a summary of the data by just feeding it into summary, and this only shows us the summary of the data numbers, the values.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=112)** So they go from a minimum of 104,000 in one month to 622,000 passengers in one month.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=120)** And we can plot it, which is actually the best way to deal with time series data.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=124)** I'm using the R's generic X Y plot function, and I'm just putting on some labels and I'm changing the limits on the Y axis so they go all the way down to zero and up to 700.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=135)** And so what you see here is a strong, upward pattern.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=139)** Starting back here in 1949, you can see it's increasing steadily as we go to 1960.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=145)** This is the end of 1960, but you can also see that there's a strong cyclical pattern.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=151)** It's a seasonal pattern.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=152)** It goes up during the summer, comes down and the winter, up in the summer and down in the winter every year.
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=158)** And this is one of the great things about the approaches we're going to use for looking at this data, that we have a strong linear pattern going up over time and a strong seasonal pattern.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=169)** And we'll get several methods for analyzing that and predicting values even when you have these variations that occur constantly.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-airpassengers?u=76281980&t=180)** And so let's go get started with the first of our methods, decomposition.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Env Vars:** str (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Time-series decomposition](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=0)** - [Instructor] Sometimes when you're presented with complex data, it's nice to break things down.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=5)** And the analytical term here is decomposition where we're going to decompose or separate into its elements a time series data set.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=15)** To do this, we're going to import the dataset we use as well as a special package called change point.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=21)** That's not necessary for decomposition but it's something else I want to show you.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=24)** So we'll load those packages, and we'll use the air passenger's dataset I presented previously, and we'll save the data to DF.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=33)** Here you can see the time series data.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=34)** If you want to see the entire data set, we can just call DF.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=39)** And there's the years, and the months, and the number of air passengers in thousands.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=46)** We'll plot the time series.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=49)** And you can see we've got an upward pattern and it's jagged where it goes up each summer and comes down during the winter.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=56)** Now to decompose the times here is to break it into its constituents.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=61)** We're going to use a really simple function is called decompose.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=65)** So I'm going to take the data frame which is a univariate time series, put into decompose and we're going to plot the results.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=73)** And once we do that, you can see that here on the top, we have the original data set and that's little compressed vertically but you can see it's going up over time and it has got the up and down of each season.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=85)** And what the decomposition does is it removes two elements.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=90)** Let me come down here to this third one.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=92)** First it removes the seasonal element because it goes up and down predictably.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=96)** This is the summer where it rises and then it goes down, and you can see it makes it so it's the exact same amount each of these seasons.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=106)** And then to that, we have a linear trend.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=109)** Now it's not a straight line, but you can see that as basically a straight line going up over time.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=115)** And when you add the trend and the seasonal together, you still have a little bit of leftover.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=122)** It's not a lot.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=122)** Remember cause this one is in hundreds.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=125)** This one goes from negative 40 to positive 60.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=129)** And this one goes from negative 40 to positive 60 also.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=132)** This is the random or unexplained component.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=135)** It's simply the part of the observations that can not be attributed to a seasonal variation or an overall trend.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=142)** This is a great descriptive procedure.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=144)** It's a great way of seeing in a very macro way what's happening with the dataset.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=150)** Now there are some options here.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=153)** One is, we use an additive time series.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=156)** It says that right there on the title.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=157)** And that means you take the trend.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=159)** You add the seasonal amount and you add the random amount, to get the observed amount.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=163)** But in certain situations where things are increasing by a percentage each time round which actually appears to be the case here, you may want to use a multiplicative formula.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=174)** And so here we're going to use this same command decomposed.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=176)** But this time is a multiplicative, additive is the default, you don't have to specify it.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=182)** But let's do the multiplicative decomposition and get the plot, and you can see it looks really similar.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=189)** We have the same data on the top.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=191)** We have the same linear trend right here.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=193)** We have a seasonal pattern, which looks very similar to what we had, and we have the random at the bottom.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=199)** Now there's two things to note.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=200)** Number one is they're very slightly different.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=202)** Let me go back to the additive one, to the seasonal, do it again.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=206)** Additive, seasonal, you can see they change slightly.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=210)** What's more significant here are the numbers on the side.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=213)** On the additive, those were all in thousands of passengers, but in the multiplicative, these are coefficients.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=219)** These are numbers that you multiply the other things by.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=222)** So you come right here, you get a number of about 250,000, and then you multiply it times 1.1.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=230)** And then you multiply that times 1.13, to get your observed value up here.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=236)** So two different ways of doing decomposition depending on the nature of your data, one may work better than the other.
>
> **[4:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=244)** A final thing I want to show you is a change point analysis.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=247)** This isn't really common, but I like it.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=249)** I think it's really helpful especially when you have data that seems to be rising to a new level and maybe staying there.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=256)** What we're going to do right here is we're going to use the change points function.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=260)** Now we have three choices here.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=262)** You can do it either based on variations in the mean, which is the default.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=266)** You can look at changes in the variance, or both the mean and the variance.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=272)** We're going to use the standard one.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=274)** We're going to take the data frame, I'm going to look at changes in the mean.
>
> **[4:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=278)** Now I have to tell it what standard I'm going to use.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=280)** We're going to do a normal distribution statistical test.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=284)** And then I'm using a T pipe that's from margarita which means feed the results of that both to this plot and to print it.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=291)** So we're going to plot the change point analysis and we're going to see where that change point location is in the data.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=296)** So I'm going to run that one, come down here you can see it switches at 1955, and one third of the way through the year.
>
> **[5:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=303)** And then when we [[Zoom]] in on that, it says you have kind of a uniform trend for these first many years but then the mean has changed enough that it makes sense to talk about it jumping up to here.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=317)** Again, we have a pretty strong linear trend.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=320)** And so it's not like it flattens off at any point, but a changed point analysis can be a really nice way of looking at when have things changed enough that we can talk about an overall shift for instance in the market that we're dealing with.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/time-series-decomposition?u=76281980&t=333)** And so between these methods, an additive decomposition, a multiplicative decomposition, and a change point analysis, you can get a great descriptive big picture view of your time series data, which we then can do a more detailed a nuanced numerical analysis with the other methods that I'll demonstrate to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Definitions:** is a  (4), is called (1)
> **Analogies:** similar to (1), for instance (1), picture (1)
> **Versions:** 1.1 (1), 1.13 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [ARIMA](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=0)** - [Instructor] When you have time series data with a strong pattern over time, you can use a purely descriptive visual method like decomposition, which I had showed you elsewhere, but one of the most useful methods is called ARIMA which is a portmanteau for Auto Regressive Integrated Moving Average.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=20)** And it's able to make very good predictions with this kind of seasonal variations or changes over time.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=28)** Now to do this, we're going to load a few new packages we're going to load forecast, which is used for [[Time Series Analysis]], ggfortify, which allows us to do some kinds of graphs.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=39)** So I'm going to load all those packages, and set the random seed.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=43)** That's something you're going to need here, that makes it so things can be more repeatable over time.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=48)** We'll use the air passengers data.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=50)** Again, we can get some information, it's monthly airline flights from 1949 to 1960 in thousands.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=57)** We can save the data to DF and see the data down here.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=60)** There we go.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=62)** And we can plot the data.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=63)** This is the same curve we've seen a few times.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=66)** There's a trend going up over time, and there are strong seasonal variation in it as well.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=71)** One thing we're going to do is we're actually doing a predictive analysis here and so it's helpful to split the dataset into a training component and a testing component.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=83)** With time series data, you don't split it randomly, what we're going to do is we're going to take the years 1949 through 1957, and we'll use the window function and this says go through the 12th month, December of 1957.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=98)** And I can show you the data here, you say go from 1949 to 1957, and we can plot that data the same kind of plot we had before you can see it's a little flatter, because it's not showing all of it.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=110)** And then we take the last three years, 58, 59 and 60 for the testing data.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=114)** We're going to try to predict the number of passengers for those three years based on the pattern we saw in the previous years.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=120)** So again, we'll use the window function which they just started 1958, show the data in the console, here are the 36 values we're going to use.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=129)** Plot the data, and you see it still has that seasonal variation looks pretty similar to what we had.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=136)** Now, there's one thing we need to do first, and that is, this approach involves something called stationarity.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=143)** A stationary time series is one that is equally predictable over time.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=149)** Now there is one other thing I need to mention.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=151)** ARIMA needs non-stationary data.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=154)** I talked about what stationary means elsewhere.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=157)** That's data where the mean, the variance, and all the co-variants change or vary over time.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=163)** And the easiest way to do this is with a graph called a correlogram or as in correlations which looks at the degree of correlations at different values of lag.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=172)** So this point in time, minus one point in time, minus two points in time, minus three points in time.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=177)** And really what you want, is to have significant correlations all the way through.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=182)** So we're going to run that one with the ACF function, and over here, what you can see is that, these are correlations and they go from positive one and they stay really strong, they do get smaller but these blue lines indicate the non-significant region and we're outside of that, that's at plus or minus 1.96, and so we're good, we're meeting this assumption for ARIMA.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=208)** Now, just to show you, a linear model can be useful but not always.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=213)** What we're going to do is simply take our training data set and stick a straight regression line through it with a smoother and say, yeah, well, you know it kind of predicts, but we're losing all of the seasonal variation.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=225)** And so we're going to use the ARIMA model.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=228)** The nice thing is, even though ARIMA is a very sophisticated approach, our has an auto ARIMA function.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=234)** And this is going to tell us what parameters to use.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=237)** So we're going to take the training data and just send it into auto ARIMA.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=241)** And here's our results, and this right here is the part we care about, those are our parameters.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=246)** What those are, are two sets because we have both an overall trend and we have a seasonal trend.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=252)** The first number the one, is the auto regressive order that's the AR in ARIMA, the second one is the integrate or the degree of differencing that we use.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=264)** In this case it's one, and then the last one is the moving average order, the MA order, we have zero in this case.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=271)** The second set of numbers is for the seasonality.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=274)** Again, it's the auto regressive and integrate and moving average.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=277)** And then this last number that's in bracket it's usually written as a subscript underneath the second set and that's the model period, the seasonality.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=284)** So we have a 12 month season here.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=287)** You could have something that's quarterly, you could have something that's weekly instead, we have 12 months in our period here.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=295)** So now what we're going to do is we're going to get some diagnostic plots by taking the same command, the training data run it through auto ARIMA and this time say get the diagnostic plots for the time series.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=308)** And when we get those, we have three things.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=311)** Number one is we have residuals and it's nice to see that they're kind of scattered uniformly around zero.
>
> **[5:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=316)** No major trend in that, which means that our model seems to be fitting it well.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=320)** The ACF of the residuals has to do with the correlations and we'll ignore this first one but the [[Representational State Transfer (REST)|rest]] of them are basically in here, and they're not significant.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=328)** Again, it means our model is fitting the data well.
>
> **[5:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=331)** Then our P values for the lag box statistic, all of them are above the statistically significant level of O5, which means again, this is what we want.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=340)** Where our model is fitting the data well, there are no statistically significant deviations.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=346)** And so now what we can do, is we can use auto ARIMA to create predictions.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=352)** We're going to do this by taking the training data, using auto ARIMA and telling it we want to forecast, we want 95% confidence intervals, and we want to forecast 36 months into the future, 36 months past the data.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=365)** And then we'll print it, and we'll plot it.
>
> **[6:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=368)** And so I'm going to run that one, and this is our prediction.
>
> **[6:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=373)** This is the observed data right here up to 1958 and then this is ARIMA's estimate of what's going to happen in the next three years.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=381)** The blue line is the point estimate, and the gray indicates the confidence intervals.
>
> **[6:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=385)** But now let's compare it with the actual data that we set aside into the testing data set.
>
> **[6:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=390)** I'm going to just add lines to this one, and what you see is it's almost a perfect match.
>
> **[6:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=397)** The pattern was enormously consistent based on the first several years, and we're able to predict with a high degree of accuracy what would happen in the next three by using a seasonally adjusted ARIMA model.
>
> **[6:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/arima?u=76281980&t=410)** And it's a great way of working with your data, when you have these trends over time and especially, when you have this seasonal variations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Time Series Analysis]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** arima (13), acf (2)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Versions:** 1.96 (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [MLP](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=0)** - [Instructor] So much of the progress in [[Data Science]] has been attributable to the rise of [[Neural Networks]], sophisticated [[Algorithms]] that mimic in certain ways the functioning of the biological brain by having lots of input going through lots of internal processing and coming to a final conclusion.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=17)** And while most neural networks are associated with classification algorithms, they also work very well with time series data.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=26)** And one of these, the multi layer perceptron kind of neural network is particularly well adapted to the data that we've been using for demonstrations in this chapter.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=36)** Let's start by loading a few packages, including this one, nnfor, Neural networks for time series data.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=44)** You're going to need to set the random seed for this one, because randomness plays a big role in some of these procedures.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=49)** This makes it repeatable, so we'll get the same results.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=53)** We're going to use the Airpassengers data that's from the R data sets package, you can save it to df, you can see the data, we've seen it before.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=63)** Number of passengers in thousands in international plane travel from 1949 to 1960.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=69)** We can plot the data, see the overall pattern here.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=73)** And what we're going to do is what we did with AREMA.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=76)** That is we're going to split the data set into a training data set and a testing data set because we're actually going to try to predict the last three years.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=84)** So let's do this, we'll take 1949 through 1957, we'll use the window function.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=90)** And you can see that's the data that we've put into the training data set, we can plot it, and then we'll use the window function to get the last three years 58, 59 and 60.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=100)** You can see it displayed there in the console.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=103)** And there it is plotted out.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=104)** So we're going to try to use the first several years to predict these last three.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=109)** To do this, we're going to create neural networks using the Multi Layer Perceptron, MLP, and we're going to do three versions of this with some small variations.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=121)** And so I'm going to save them as fit.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=123)** That's where I put any model I used for data, we're going to take the training data and run MLP.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=130)** Now this can take a little bit of time, let's see how long it takes on this one.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=136)** And what we're going to do now is we're going to save the predictions.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=139)** So we're going to take that model fit one that we just created, we're going to tell it to forecast h means 36 steps into the future because our steps are months, that means 36 months or three years into the future, we'll save those in pred for predictions one, and then we'll show the predictions.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=157)** Here they are, those are our predicted values.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=160)** And then we'll plot those predictions.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=163)** Now, what you see over here is our main prediction is in blue.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=169)** And then because there's this randomness that's going on, you sometimes get individual predictions that go really high really low and if you had a different random seed, you would get different results on these.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=180)** I've done it several times.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=182)** But this is our overall prediction here in the blue.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=185)** And again, let's see what the actual observed data look like by overlaying it in red.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=193)** And we can see is, those are pretty close.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=195)** Pretty close, it's certainly got the seasonal variation across the three years.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=200)** But now let's do a different method.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=203)** This first one, the default MLP has a set number of hidden nodes, it's just five.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=209)** The second one says choose the number of nodes based on a validation, holdout validation with 20% validation.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=217)** And so I specify do the hidden auto type and use valid.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=224)** And on one machine, this took about 35 seconds, let's see how long it takes on this one.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=232)** On this machine that took about a minute I paused it so you wouldn't have to sit there.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=238)** But now we can take those new predictions, take the fit and say again, go 36 steps into the future, which is 36 months or three years.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=247)** Let's show those predictions here there at the bottom.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=250)** Let's plot those.
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=253)** And now one of the things you can see by the way is that the confidence intervals, the variations, there's very little variation, everything is really close to the overall prediction the blue line.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=264)** And if you want to put the observed data to see how well the predictions match the observed data, we can simply overlaid the red line for the observed data.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=274)** And now you can see, again, the seasonal pattern's really similar.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=277)** In fact, it looks like the observed data is a little more extreme on the top and the bottom than the predictions but overall, this is a very precise model.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=286)** We're going to do a third and final variation.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=289)** This is where we let the MLP algorithm choose the number of hidden nodes based on a five fold cross validation and on my other faster machine this took three minutes.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=299)** I am predicting this is going to be six or seven or eight on this one.
>
> **[5:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=303)** So maybe tell it to get running and then go get yourself a nice cup of tea or something.
>
> **[5:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=309)** But I'm going to run that by hitting play.
>
> **[5:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=314)** And so about five and a half minutes later on this machine, we're able to get some predictions that come from this third fit, the MLP model that used cross validation to determine the number of nodes that should be in the neural network.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=328)** We'll get those by asking it to take the fit and forecast 36 steps or 36 months into the future and save those into pred three, then we'll show those predictions.
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=339)** Here they are at the bottom, and we'll plot them.
>
> **[5:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=343)** And what you see is, again, very tight predictions with the random variation being really close to the blue line and then we can compare it to the actual observed values for those three years by laying them over on the top and you actually see that the blue ones, it got the seasonal variation, but not quite to the extremes that we had in the observed data.
>
> **[6:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=367)** And to compare these three methods, we can simply go back in our charts here.
>
> **[6:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=371)** This is the cross validation.
>
> **[6:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=373)** This is the holdout validation.
>
> **[6:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=375)** And this is the original model was simply used as five levels.
>
> **[6:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=379)** All three of them were useful.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=381)** Although you can see this one had a lot more variation, and the predictions did not track the real ones as close.
>
> **[6:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=389)** We had a much better job with the holdout validation and the five fold cross validation.
>
> **[6:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=395)** But what all of this shows you is that neural networks in this case, through a multi layer perceptron, can be a really useful and accurate way of predicting trends and timelines even in the presence of strong seasonal variation.
>
> **[6:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=411)** Again, when you are trying to predict an outcome, it behooves you to have as many tools as possible available.
>
> **[6:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/mlp?u=76281980&t=417)** But also you can choose one that is best adapted to your data, but then you can compare the results of different methods to each other and have more confidence in your final selected model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (5), [[Algorithms]] (2), [[Data Science]] (1)
> **Env Vars:** mlp (5), arema (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Decomposition](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=0)** - [Instructor] At this Point, I want to invite you to try your hand at working with time series data and to do this, we'll do time series decomposition a really fabulous big picture analysis of what's happening with your data.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=21)** We're going to use a dataset that comes from our the EU stock markets data that's from the datasets package.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=29)** So let's come down here and get a little bit of information on that.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=33)** It's the daily closing prices of several major European stock indices from 91 to 98.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=40)** You can see the data.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=43)** And one of the funny things about it is that it has decimal dates.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=47)** These indicate how far into the year you are.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=50)** So let's come back up to the top here.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=57)** So we started in 1991 about halfway through and we have four different indices, the [[DAX]] which is in Germany, SMI, which is in Switzerland, the CAC in France, and the FTSE in the UK.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=73)** We can plot the data and we can actually plot all four times series at once by simply taking it and feeding it into ours generic X, Y plot command.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=83)** When we do that, you can see that they all have a kind of a similar thing bumping up around 94 dipping down a little bit, and then going up.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=94)** Now an interesting one is the CAC has a more pronounced dip here around 98.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=99)** So I'd like to invite you to focus on the CAC dataset.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=104)** Part of that is because decomposition is a lot easier with just one time series, the CAC which stands for Cotation Assistee en Continu or continuous assisted trading.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=115)** We'll take that, save it to DF by using the square brackets and then three here says, take just the third column and we can plot just that data by itself.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=126)** And here's the pattern that we're going to work with.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=128)** And your challenge is to take this dataset and see what kind of overall trend there is what kind of seasonal trend there is and what kind of random variation there's leftover.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-decomposition?u=76281980&t=139)** Take a couple of minutes, give it your best shot and then we'll meet together again to compare responses and decomposing [[Financial Data]] from the French CAC.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1), [[Financial Data]] (1)
> **Env Vars:** cac (5), smi (1), ftse (1)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Decomposition](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=0)** - Invited you to look at some [[Financial Data]] and see what kind of patterns you could find, by decomposing a time series.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=14)** Let me show you how I did this.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=16)** Let's start by loading some packages and then getting some information about the EU stock markets data set as part of the ours built in datasets.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=27)** We'll see the data right there and plot the data.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=30)** So here's our data plotted out.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=32)** We're going to focus on this third one, the French CAC.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=37)** And I want to just save that into DF and then we can explore that dataset by seeing the time series.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=44)** So here are all the values for just the French CAC.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=48)** We can get the structure.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=50)** It's a dataset of almost 2000 observations.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=54)** Let's get the histogram.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=55)** Now this ignores the time.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=57)** So I take DF and ask for a histogram and then putting a main title on and a label on the X axis.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=64)** And so you can see is that the closing prices were generally pretty close to 2000.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=70)** Although it's skewed, there are some that go much higher and this makes sense when you actually plot the time series by taking the data frame and just running it through the generic plot command with some titles and some limits on it.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=81)** And you can see it's hovering around 2000 for much of the time until right around 96, 97.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=87)** It takes a strong turn up, which is a similar pattern that we saw in the other three major European financial indices.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=95)** But let's decompose this time series.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=96)** Let's see what's going on in.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=99)** To do this, it's really simple.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=100)** We just use the decomposed function that comes from ours built in stats package.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=105)** And we're going to use the additive function which is the default.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=108)** So I take DF, run it through [[Jetpack Compose|compose]] and plot the results.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=113)** And when we do that, you can see this is the general pattern and things kind of staying down where they are and then taking this strong turn up around 96.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=123)** Here as a seasonal pattern.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=125)** Now, what you see is both an annual pattern and then a smaller pattern than that.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=131)** But you can see a pretty strong annual pattern where it's going up, maybe mid year coming down right before a new year.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=138)** Now we can also try this with a multiplicative trend which is often better when you look at something like financial data, because it grows in an exponential way a certain percentage over a period of time to do that.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=150)** All we have to do is add type is equal to multiplicative and we do the same thing.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=155)** And again, you see the same pattern here and the same seasonal variation and it appears to be pretty consistent and the randomness appears to be pretty consistent as well.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=164)** So I think we found something good here.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=167)** And then as an added bonus I'm going to do the change points analysis 'cause I really liked doing that.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=172)** We simply take the DF where you say, we're going to look for changes in the mean, the average value we'll do normal.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=178)** And then we're both going to plot it.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=180)** And we're going to get the change point locations printed in the console.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=184)** And what you see here is the saying that it was basically the same until about halfway through 97, at which point the mean had shifted enough to give it a new value.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=195)** Obviously, it'd be nice to draw an angle here but if we're simply looking for a change in this state that happened right about 1/3 of the way through 1997, that's another great way of breaking down a time series and getting a big picture review on it.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=209)** Hopefully you're able to do something similar and get other insights into it as well.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-decomposition?u=76281980&t=214)** And now you've got something additional to put into your data, mining toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (2), [[Jetpack Compose|Compose]] (1)
> **Env Vars:** cac (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - invited (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Text Mining

[↑ Back to Table of Contents](#table-of-contents)

#### [Text mining overview](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=0)** - [Instructor] Text is not like other data and when it comes to [[Data Mining]], it poses some very special challenges.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=9)** Those challenges include things like the fact that there are enormous quantities of text.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=15)** There is so much open text in terms of books, in terms of news articles, and in terms of social media.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=22)** It's completely overwhelming.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=24)** Also it's enormously variable.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=28)** There are so many different words.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=29)** There are so many phrases.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=30)** There are so many misspellings and colloquialisms.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=33)** There's a lot there.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=35)** What this all tells you also is that it's unstructured.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=38)** It doesn't fall into nice little rows and columns of data, it just kind of is what it is, that makes it a very difficult thing to mine for.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=46)** And when you're mining for data, you're trying to get value.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=49)** You're trying to get more than like Hamlet saying that he is reading words, words, words, you're trying to get meaning and actionable insight out of your data.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=59)** Now, there are three ways that I can think of that data mining with text is particularly important.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=65)** One application is in modeling topics where [[Algorithms]] are used to say what a news article is about or what the topic of a social media or blog post is.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=78)** Another one is summarizing content.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=80)** Can it take an entire scientific article and boil it down to a paragraph?
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=85)** Or can it take a text of a political speech and reduce it to a few sentences that have the essential meaning of it?
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=93)** And then another one is classifying texts.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=95)** Taking unstructured text and putting it into nice neat groups.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=98)** The prototypical example is a spam filter but anything that sorts the data is going to be enormously useful and save a lot of human time and effort.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=109)** In the demonstrations that we're going to look at, I'm going to focus on another element of [[Text Mining]] which is called sentiment analysis.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=116)** This is where you're trying to find the emotional content of data and the place where this is really significant is in online marketing.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=125)** You want to know if people are saying positive or negative things about the product or the service you're offering.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=131)** That allows you to tailor both the product or service you offer, as well as the appeal that you make and who your audience is.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=139)** We're going to start by looking at binary sentiments.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=143)** And this is where you're simply looking at whether somebody says something that is positive or negative, this or that, either/or.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=149)** Now to do this, it's not like you sit around and decide whether somebody is positive or what, you use a published lexicon.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=156)** This is some information you import into your computer program that's a list of words and their associated sentiments.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=164)** Now what's nice about this is simply categorizing things as positive or negative is by far the quickest and the easiest analysis of sentiment and text.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=173)** If you want to go beyond that and I'm going to go beyond that, you can also look at the scoring of sentiments and this is not just positive or negative yes or no, but it's where words are scored by the strength of the emotions.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=187)** For instance, we're going to use a negative five for most negative up to positive five for most positive scale.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=195)** And what are you relying on here is another lexicon.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=198)** This time it has associations for individual words.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=201)** And the fact that they're individual is important.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=203)** It's looking at one [[Microsoft Word|word]] at a time.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=206)** You can develop other systems for looking at associations between the word or for instance, a negation of a topic or a phrase that has a double meaning.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=217)** In fact, that gets us to the final thing I want to look at which isn't sentiment analysis per se but it's word pairs or the association between words.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=225)** It answers the question, which words go with which ones and are there unexpected associations in the text?
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=232)** It's like trying to sort through with your socks and see, this goes with this, this goes with that.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=237)** And is there a predictable structure to your data?
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=240)** And what you'll find sometimes is that different texts pair things differently, that they tend to use it with a negation or they tend to use it in a positive or negative way.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=252)** In the demonstrations we look at, we will look at all three of these methods for finding meaning in unstructured text.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=260)** We'll look at binary sentiment.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=262)** We'll look at scored sentiment and we'll look at the structure of word pairs through visual methods.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/text-mining-overview?u=76281980&t=267)** And all of these can get you started on finding useful and actionable meaning from your text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Data Mining]] (2), [[Algorithms]] (1), [[Text Mining]] (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for instance (2), it's like (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Dataset: The Iliad](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=0)** - [Narrator] I may be a data person but it turns out that I really love art.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=5)** I have a background in design, I'm married to an artist and I'm really happy to be working on this section of [[Text Mining]], because it allows me to engage a little bit with some literature.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=17)** In this particular case I'm going to be using an example of the Iliad by Homer, as a way of demonstrating three different approaches to text mining.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=30)** To do this, we're going to download the Iliad from Project Gutenberg, an online site that has over 60,000 free books.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=39)** They're free from copyright, and one of the great places for learning how to work with data.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=46)** Now, the easiest way to do this is with a package called gutenbergr which imports Gutenberg texts, and helps get them set up.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=54)** I've actually done some of this for you already but let's start by loading these packages.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=59)** And I'm also making a point of downloading tidytext.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=63)** This is one of the great packages for working with text data in R.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=69)** To download the Iliad from Project Gutenberg, you need to know the book's site.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=76)** Its URL is here and its ID is 6150.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=80)** I'm going to use the function gutenberg_download.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=84)** You simply give it the site.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=86)** And then you can tell it to strip headers and footers which the book may or may not have.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=91)** And we can run that one.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=95)** And you can see it's shown up right here.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=98)** We can look at the first few rows by simply asking cdf.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=102)** And this is the title page.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=105)** This first column is the ID number and it's going to be 6150 on all 20,000 rows, 'cause that's the book that it comes from.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=112)** This is the Iliad of Homer and this is to indicate a row with no text on it.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=116)** And we can see that it was rendered into English blank verse by Edward Earl of Derby.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=123)** You can get some summary [[Statistics]].
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=125)** It's kind of a silly thing to do here, because it has one variable that doesn't vary.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=130)** That's the ID is 6150 all the way through.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=132)** And when you have texts it simply tells you how many rows there are.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=136)** There's 20,128 rows.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=140)** But what I'm going to do is do a little bit of data prep for you.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=143)** I'm going to take this information.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=145)** I'm going to save it into the data folder under the name Iliad.txt.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/dataset-the-iliad?u=76281980&t=152)** And once we've gotten that, we've got the data that we need for the next three demonstrations of text mining in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (3), [[Statistics]] (1)
> **Exercise Files:** download the (2)
> **File Paths:** iliad.txt (1)
> **Code Identifiers:** gutenberg_download (1)
> **Env Vars:** url (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Sentiment analysis: Binary classification](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=0)** - [Instructor] Our first demonstration of [[Text Mining]] in R is going to be the simplest case.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=4)** We're going to look at sentiment that is emotional evaluations of texts, which is the binary positive or negative evaluation.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=15)** And to do this with the Iliad, I'm going to start by importing some packages in Gutenberg and tidy text are the important ones.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=26)** And then we're going to import the data.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=28)** Now this is from project Gutenberg which is available online, but I've already saved the data and I'm going to simply import it from our data folder where it's elliod.txt and save it as tibble into DF.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=42)** And that stands for data frame and just makes it easy for me to reuse my commands.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=47)** Let's take a look at the first few rows and what you see here, are, this is the ID number for the text 60 150.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=55)** And these are the first few rows from the title page.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=60)** Now, the first thing we need to do is prepare the data and that involves tokenizing the data.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=64)** A token is an element of texts and usually it refers to a [[Microsoft Word|word]].
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=70)** You can have [[Tokens]] of multiple words or even sentences or paragraphs or what have you, but most common, it's a word.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=77)** And so what we're going to do is we're going to take our data frame.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=81)** We're going to select just the text variable.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=84)** That's just this variable on the right.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=87)** So we're going to drop the Gutenberg ID and we're going to use a function called unnest tokens and that says split them apart.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=96)** So we're going to split the text into words and save it as text format.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=102)** So, let's do that right here.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=104)** And I'm going to overwrite the data frame.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=106)** That's what the special assignment operator means here.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=111)** And so now you see, I have a lot more observations, 146,000 but this time just one variable.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=118)** And if you want to see how common each word is, we can take the data frame and we can use count to count the words and to sort by their frequency.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=128)** So, not surprisingly "the" is the most common word, the conjunction "and" is the most common, "of" "to."
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=136)** And most of these are really not very interesting words although there have been interesting projects done using these little words.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=144)** These are called stop words.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=146)** They're little common words, the two and so on.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=151)** And for our purposes, we're going to remove those because if we're looking at sentiment these usually have no sentiment or emotional value.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=159)** So we're simply going to remove them.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=162)** When we brought in tidy text, we also brought in something called stop_words.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=166)** It's an index, a lexicon of words and we're going to do an anti_join.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=170)** It says, use data frame and then remove anything that's in stop_words.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=177)** So once we do that, you'll see we go from 146,000 observations over here.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=182)** We do that, now we have only 70,000.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=185)** So we lost half of them because the stop words accounted for 50% of the text in this.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=190)** Now, let's see the revised tokens by frequency and in the Iliad, the most common is going to be son and then thou and thy, greeks, achilles, and hector that main characters, ships, thee, jove and so those ones make sense for what we're dealing with.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=211)** In terms of categorizing the sentiments.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=214)** You have to have a lexicon.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=215)** You have to have something that actually says, this is a positive word, this is a negative word.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=220)** And when we bring in tidy texts, we also access several lexicons.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=225)** We're going to use one that's called bing and this gives us the positive and negative evaluations of words.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=231)** So what we're going to do now is we're going to find which words are positive and negative by doing what's called an inner_join which means find all the words in DF that have sentiments that are listed in bing.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=246)** So we're just going to run that and as an example, you can see that modern is positive, success is positive, sufficiently is positive.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=254)** Meanwhile diffidence is negative, regret is negative and those generally make sense.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=261)** Now it is of course the case that we're using a book that is very very old and even a translation that is old.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=267)** And so some of the words will have changed their meaning in terms of context and usage, but this gets us close.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=276)** Now what we're going to do is we're going to sort the sentiment words by their frequency.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=281)** So the most frequently occurring, positive, negative words I'm going to use the same command that we had before, except this time I'm going to add count word and then sort.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=292)** And when we look at that, the most common word was sentiment value, is death which will be negative, brave which is positive, fell which will be negative, mighty and valiant which are positive.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=305)** These are the most common words.
>
> **[5:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=306)** By the way, death is in there lot because this is a story about a war, the Trojan War.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=313)** Now, let's summarize these.
>
> **[5:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=315)** All I'm going to do, is I'm going to take our data frame that is the text with just the words.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=320)** We're going to do the inner_join again, this time we're going to group by sentiment.
>
> **[5:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=325)** We're going to put the positive words together, the negative words together, and we're going to summarize how many, and then the proportions of the total.
>
> **[5:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=334)** And when we do this, you can come down here and see that we have 6,386 negative words, which is 60% of the words that have sentiment value in the text.
>
> **[5:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=346)** And we have 4,206, or not quite 40% of the words.
>
> **[5:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=351)** Now this isn't surprising because the Elliot's a heavy story.
>
> **[5:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=354)** It's warfare and it's things going badly.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=357)** And so of the emotionally laden words, we have 60% negative, 40% positive.
>
> **[6:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=362)** And that actually is a good reflection of the tone of the book.
>
> **[6:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=367)** Doesn't tell us anything about the plot of the characters of the storyline, but it lets us know that we are generally focusing on topics that have negative valiance or effect or emotion associated with them.
>
> **[6:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-binary-classification?u=76281980&t=378)** So that's a very quick binary classification in text in R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Tokens]] (3), [[Text Mining]] (1)
> **Definitions:** is a  (4), stands for (1), is an  (1), refers to (1)
> **Code Identifiers:** stop_words (2), inner_join (2), anti_join (1)
> **CLI Commands:** make (2), find (2)
> **File Paths:** elliod.txt (1)
> **Speakers:** - [instructor] (1)

#### [Sentiment analysis: Sentiment scoring](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=0)** - [Tutor] In the last video I showed you how to do binary classification of sentiment, either positive or negative, in this demonstration, we're going to get a little more sophisticated and actually score, not just whether it's positive or negative, but how positive or how negative.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=18)** We're going to use the same text, the Iliad and we'll use the same packages, but a different lexicon.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=24)** And it allows us to do different things.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=27)** Let's come down here and load our packages which include gutenbergr and tidy texts.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=33)** Now we're also loading text data which allows a little bit of extra functionality.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=41)** We'll bring in the iliad.txt which I've already saved for us.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=46)** And we'll put it into a table and we'll look at the first few rows.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=50)** This is the data we've seen before.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=52)** We have the gutenbergr ID.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=53)** That is the ID for the Iliad.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=56)** And here is the first few lines on the title page.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=61)** We need to we do a little bit of [[Data Preparation]].
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=63)** The first thing I'm going to do is I'm going to add line numbers to the texts.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=69)** This is important because it's going to allow me to split up the text in a moment.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=73)** I'm also going to remove the gutenbergr ID and then we'll take a look at it and we'll overwrite the data using the assignment operator.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=83)** So here we have just a text.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=87)** That's the same text we had here before but now we have line numbers.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=91)** So you can see that we got one, two, three, four, five, and so on.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=96)** Then we're going to tokenize the data?
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=98)** That means we're going to split it into the elements that we're looking for.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=101)** Usually that's one [[Microsoft Word|word]] and that's what we're going to do here but it could be pairs or triplets of words or sentences or so on.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=109)** We're going to break it down into individual words and we'll save it into words.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=117)** Now I've got that over here.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=118)** You see that we've gone from 20,000 lines to 146,000 words.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=123)** And at this point we can calculate the scores the sentiment scores we're going to use the Afn lexicon.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=131)** And this gives a value of on sentiment to many words from negative five which is the most negative up to positive five the most positive, it doesn't give zeros.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=141)** Those ones are just kind of left out and again so it's going to be only words that have some sort of emotional or affective value, and I'm going to create a new object called score freak for frequency.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=153)** So we'll take the word.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=154)** We'll do an inner join with the Afn lexicon to find out the sentiments of each of these.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=160)** We're going to group them by their values all the negative fives together the negative fours together and so on.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=166)** And then we'll summarize them by counting how many there are in each value.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=170)** And we'll print that down here.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=172)** And so now what you see is we have the sentiment value here going from negative five.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=178)** We have only 12 that are negative five but if you get up to like a one, we have 1076 words we have 2,353 words that have a sentiment score of two.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=189)** And so on.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=192)** What's neat about this is we can graph these.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=195)** And what we're going to do is we're going to look at a bar chart.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=199)** This is simply going to take the score frequencies that we just created.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=203)** We'll do it into GG plot and we'll get the number of scores in each category.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=208)** I'm going to set it to go from negative five to plus four with space one apart.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=213)** And we have titles and labels here.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=215)** So once we get that, you can see it's pretty easy.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=219)** We have a lot of words with a sentiment score of negative two.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=222)** We have a lot of words with a sentiment score of positive two.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=226)** We have fewer at one, we have none as zero because it simply skips those.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=229)** And you can see, we do go a little further in the negative range down to negative five than we do in the positive range up to only four.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=238)** But now comes the really neat part.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=240)** You may know that stories and especially Epic stories of the heroic story of the Iliad have what's called a narrative arc.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=249)** And this is where you look at the building up by the action.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=252)** Then you have a crisis and things tumbled down.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=255)** Then you have a resolution.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=258)** We can actually look at that by looking at the changes in sentiment.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=261)** As you go through the book to do this I'm going to split the texts into arbitrary sections of 100 lines.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=269)** This is actually why I needed to do the line numbers earlier.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=272)** And then we'll calculate a sentiment score, an average sentiment score for each of those sections.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=279)** So I'm going to create an object called score arc.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=282)** This is where I take the words.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=284)** And then for each of the words I get it sentiment value from the Afn lexicon.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=289)** And then I group it by section.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=292)** And what this says is take the line to embrace them into hundreds.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=295)** So the first hundred to go together the second hundred go together and so on.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=299)** And then for each of those sections, summarize it by getting the average value that is the sentiment value and then print the whole thing.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=308)** So let's see what we get right here.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=311)** What we have are the sections going from zero up to about 200.
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=317)** And these are the average sentiment for each of those sections.
>
> **[5:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=322)** Now a much better way to look at this as you might guess, is to graph it.
>
> **[5:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=326)** So we're going to plot those scores bisection and get a visualization of the emotional narrative arc of the Iliad.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=335)** We do that by taking this score arc that we just calculated.
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=339)** We're going to get bisection and show the scores.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=342)** This says we're going to put a reference line in there at zero.
>
> **[5:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=345)** So we can see where zero sentiment is.
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=349)** We'll put a gray line in to show us the average values and we'll put in a smoother.
>
> **[5:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=354)** And then some titles.
>
> **[5:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=356)** When we run that this is our payoff.
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=360)** So the red line is zero means neutral sentiment.
>
> **[6:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=364)** And what you see in this one are this line that goes up to the average sentiment for each section.
>
> **[6:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=372)** This is the first 25 up to 50, 200.
>
> **[6:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=375)** And you can see it's kind of bouncing all over the place, but then we have a smoother here which shows us the moving average.
>
> **[6:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=383)** And it starts out generally positive.
>
> **[6:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=386)** And itd very positive here in about the 15th section of a hundred lines but then you see it starts to move downhill.
>
> **[6:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=394)** And then about halfway through the book it crosses over to negative.
>
> **[6:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=397)** Then it drops down.
>
> **[6:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=399)** This would be the most intense part of the book.
>
> **[6:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=402)** It's a book about war and this is what's going to be going on here.
>
> **[6:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=405)** But then as we get that resolution, it picks back up.
>
> **[6:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=409)** It's not a super happy book, so it comes back up to zero.
>
> **[6:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=412)** But the point here is we now have a visualization of the emotional component of the narrative arc of the Iliad, which we got by scoring sections of the book and then visualizing it all the way through.
>
> **[7:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/sentiment-analysis-sentiment-scoring?u=76281980&t=427)** To me this is a fabulous use of sentiment, scoring and [[Text Mining]] and the packages that we have, especially tidy texts make this a very simple and informative approach to looking for meaning in data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Data Preparation]] (1), [[Text Mining]] (1)
> **CLI Commands:** find (1), make (1)
> **File Paths:** iliad.txt (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### [Visualizing Word pairs](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=0)** - [Instructor] Our final demonstration of [[Text Mining]] is actually going to look at a visualization of the association between words, and in this case, [[Microsoft Word|word]] pairs.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=9)** To do this I'm going to begin by loading a few packages including ggraph, which allows us to visualize networks.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=16)** That's going to be important for what we do here.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=18)** So I going to load those packages.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=20)** I'll set a random seed 'cause that can affect the graphs.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=24)** And then we're going to use "The Iliad" the same data we've used before.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=27)** We'll bring it in from the data folder, save it as a tibble and we'll look at the first few rows.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=31)** We've seen this several times, it's the same.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=35)** And then we'll prepare the data.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=37)** We're going to tokenize the data by unnesting it, and except this time we're going to save it into something called wordpairs, not word, but wordpairs.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=46)** We're going to start with the text and we're going to split it into ngrams.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=50)** An ngram is a word that means this many words at a time.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=55)** And in this case, the n is two.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=58)** I've also seen these called bigrams but I'll just call them wordpairs.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=62)** So let's do that by overriding our data with wordpairs.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=67)** And then we can see the [[Tokens]] are words by frequency.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=73)** And this time you see two words at a time, "to the" happens 527 times, "of the" is 453, "in the", "from the" these are things that are not necessarily interesting.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=85)** We have an issue again with what are called stop words.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=88)** These are the small words that make up a substantial portion of the text, but they're just connectors and they're usually not the ones that we're interested in, especially if we're doing something that involves like sentiment.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=99)** And so what we're going to do is we're going to get rid of these entries that have stop words in them.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=106)** Now, because we have two words this gets a little more complicated.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=111)** What we're going to do is we're first going to separate the word pairs into two variables, word1 and word2, where we're going to use a space as the separator.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=121)** We'll also remove the gutenberg id and we'll print the results and we'll overwrite the data.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=128)** And once we've done that, you see that the word pairs are "the iliad", "iliad of", "of homer", "homer rendered", and so we haven't gotten rid of the stop words just yet, but we've made it possible.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=139)** Now what we're going to do is remove any word pairs that have stopped words.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=144)** We do this in a slightly unusual way.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=146)** We take our data frame and then we're going to filter.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=149)** We're saying the exclamation mark is a negation here.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=153)** It means where word1 is not included in stop words and then the word actually refers to an element of the stop words library.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=163)** And then we're going to say the same thing for word2 that word2 is not in the stop words and we'll print it.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=168)** Now, this is going to reduce the number of observations dramatically.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=172)** Right now we have 146,000, it's going to reduce it to 81% to 28,000.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=177)** But let's run that command and get rid of the word pairs that include at least one stop word.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=184)** Now we can see the sorted counts by saying count word1 and word2 sort them and print them.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=191)** And here is our stop-word-free data.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=196)** "Peleus's son", "saturn's son", "atreus son".
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=199)** These are phrases that appear a lot of times because in "The Iliad" characters are frequently referred to as somebody else's son.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=205)** We have "battle field", "immortal gods", and these are phrases that make sense.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=211)** The next thing we can do is we can look at the frequencies and get both the number and the proportions.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=217)** So let's take a look at that.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=222)** And what we see is that there are many pairs of words that appear only once.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=227)** And in fact that's 16,000 and that's a large proportion.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=231)** We have some that appear 10 times, that's only 23 pairs that appear 10 or more times.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=237)** And this is a way of seeing really the distribution of frequencies of pairs.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=243)** But now let's visualize the data.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=245)** What we're going to do is we're going to take the data frame and I'm actually going to filter out any pair that appears less than 12 times.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=254)** I'm doing this because I've run through this a few times and this is a number that's arbitrary but it seem to work well.
>
> **[4:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=259)** So we want only word pairs that appear more than 12 times.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=265)** And then we'll just print it here in the bottom.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=268)** And here there "peleus's son", "saturn's son", "atreus son", "achilles [[Swift (Programming Language)|swift]]", "godlike son", "fair hair'd".
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=277)** Great, but now let's chart. Let's graph the pairs.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=282)** This is the more interesting part.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=284)** Now we use the same set, where we're going to filter things that have happened at least 12 times but we use this long function graph_from_data_frame.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=293)** That's what gave us this data but now we're going to use ggraph and we get to choose the layout and we're using fr there are about four different choices.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=302)** This is the one that seems to be the most intelligible.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=305)** We're going to tell it, we want to see the links.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=307)** We want to see the points or the nodes and we want to add some texts so we know what's there and we're going to move it so it's not right on top of the point.
>
> **[5:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=315)** And this can take a moment depending on your machine.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=319)** But let's [[Zoom]] in on this graph.
>
> **[5:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=321)** And what you see here are "paris, bulls hide, "heav'n born, lofty wall, the trojan host", but then you see other ones that appear more often.
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=332)** So for instance, here, we have "son" refers to this when we have "priam's son" and "saturn's son" and "peleus's son".
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=339)** We have "noble paris", "noble hector" and we have the "fair hair'd greeks", "clad brass".
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=349)** And this is a great way of visualizing some of the connections between the ideas.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=357)** Now, this is going to work better the more data you have, I chose a long epic poem, "The Iliad".
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=365)** If you wanted to put "The Iliad" and "The Odyssey" together, that would be great.
>
> **[6:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=369)** If you wanted to take all of the books by one particular author then you can get an even richer display of the connections.
>
> **[6:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/visualizing-word-pairs?u=76281980&t=377)** But the word pairs, this is a great way of mining for meaning and association in your data using the text mining facilities that come with tidy text and graphing them out in a way that is easily accessible and a great way to get visual insight into your text data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Text Mining]] (2), [[Tokens]] (1), [[Swift (Programming Language)|Swift]] (1), [[Zoom]] (1)
> **Definitions:** is a  (6), refers to (2)
> **CLI Commands:** make (2)
> **Code Identifiers:** graph_from_data_frame (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Sentiment scoring](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=0)** - [Instructor] For our final challenge, I want to invite you to try graphing the narrative arc of a book using sentiment scoring.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=13)** And to do this, I'm going to give you a different book to use.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=17)** Instead of "The Iliad," we'll use "Little Women" by Louisa May Alcott, also from Project Gutenberg.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=23)** You can download it from this site, but I've already downloaded it and prepared the data a little bit and saved it in our data folder as littlewomen.text.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=31)** So let me invite you to open up these packages and then come and import the data.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=40)** And then let's take a look at the first few lines.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=43)** This is just the title page.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=44)** And so we have the Gutenberg ID, which indicates the book ID.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=47)** And we see it's "Little Women" by Louisa May Alcott.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=51)** But what I want you to do is take the entire text of the book, break it into sections, get the sentiment scoring, that goes from negative five to positive five, and get a visualization of the emotional arc of the story.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/challenge-sentiment-scoring?u=76281980&t=67)** Come back here in a moment and we'll compare results on this challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Sentiment scoring](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=0)** - [Instructor] Hopefully, you've taken up the challenge to do a little bit of exploration of the text of Little Women and specifically to do sentiment scoring and find the emotional arc of the story.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=16)** Let me show you how I did this one.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=19)** I'm going to start by loading the packages and then coming down and importing the data, that is, the text of Little Women, and save it as a Tibble.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=28)** We'll take a look at the first few lines and it's just the title page here.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=32)** Let's prepare the data and I'm going to be using code that's very similar to what we used for the Iliad.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=38)** I'm going to begin by adding line numbers because this is going to allow me to split up the text into lines and I'll remove the Gutenberg book ID number.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=48)** We'll overwrite the data and now you can see Little Women and we have the first 10 lines there.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=52)** And then we'll tokenize the data.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=54)** We'll take the text and split it into words and we'll call that new variable "words."
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=62)** And now you can see it right here.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=63)** We have the line number and we have the [[Microsoft Word|word]].
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=66)** Little and women are on the same line.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=70)** What we can do now is we can calculate the sentiment frequencies.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=74)** We're going to use the AFINN lexicon, which we used before, which scores emotionally-laden words from negative five, most negative, to positive five, most positive.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=86)** And we do this by taking the words and then going to an inner join with the sentiment lexicon that says find all the words that have a value in this lexicon, group them by that value, summarize how many there are of each, print it and save it as score freq for frequency.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=107)** And here you see that we have two words that are a negative five on sentiment.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=111)** We've got a lot that are negative two, 2,785, but we have a huge number that are positive two and we go all the way up to positive five in this case.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=121)** So let's graph the frequencies.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=123)** This is just a bar chart of each of these frequencies.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=126)** And what you see in this one... By the way, I had to change the limits to allow it to go up to positive five.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=132)** Is that we have a peak here at negative two but then we've got a much stronger peak here.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=137)** And this makes sense because Little Women is a happy story.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=140)** It has some sad things that happen in it, but it's mostly an encouraging, wonderful story.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=147)** But let's look at the sentiment arc.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=149)** To do this, I'm going to use this method of splitting the text into sections of 100 lines.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=156)** We'll get the sentiment words.
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=158)** We'll split them into groups of 100 lines using this operation.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=163)** We'll calculate the average sentiment of each of those sections.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=167)** And then we'll print it at the bottom to see what it's like.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=169)** And we'll save that as score arc.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=173)** And when we look at that, you can see that we start with a near zero score and then it goes up to over one and one and then we have about 200 rows in this.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=186)** But the real payoff here is the graph, where we're going to take the data we just put it into score arc, and we're going to plot it by charting the score broken down by section.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=199)** We'll put a red reference line in at zero.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=201)** We'll put in a line that shows where the average score is and we'll smooth it out and put some titles on it.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=208)** And when we do that, what you can see is that this is an overwhelmingly positive book, especially compared to the Iliad which we had before.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=216)** The red line here is zero, which would be balanced positive and negative sentiment.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=221)** We're well above that.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=223)** It does vary substantially, but you can see that it becomes more positive as it goes through.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=229)** And this gives us an idea of the trajectory of the story in Little Women.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/solution-sentiment-scoring?u=76281980&t=236)** This is a very simple and effective way of evaluating the meaning in text, mining the evaluation, something that makes so easy to do in R and so easy to understand and share the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Analogies:** similar to (1), it's like (1)
> **Env Vars:** afinn (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=0)** - [Barton] So we've come to the end of [[Data Mining]] with R.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=4)** Now, where are you going to go?
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=6)** It's a little bit like, you're getting ready for a trip.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=8)** What's your actual plan?
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=10)** What's your map?
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=11)** Well, I want to make a few suggestions for both the immediate and the longer term future.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=16)** For the immediate, I recommend that you go through our online learning library and learn more about [[Data Science]], both the concepts and the specific practices strongly associated with data mining and learning more about data science will make you better at data mining tasks.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=35)** In particular, you may want to play some special emphasis on machine learning [[Algorithms]].
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=40)** We covered several of those in this course.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=43)** Things like, the [[Neural Networks]].
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=45)** But you're going to want to look at more of these so you have a wide range of tools to help you when you're working on your data mining projects.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=53)** And of course you want to think about the actual programming tools that you use.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=58)** [[Python (Programming Language)|Python]] and R are the two most common tools within data mining and we have versions of this course for both Python and R.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=67)** You finish watching one?
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=69)** I strongly recommend you take a look at the other so you have a more diverse range of opportunities ahead of you.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=75)** And then finally, because data mining usually happens within an applied and frequently commercial organizational context, it's a good idea to go and learn more about how businesses are run, about the questions that are important to them and how value can be derived from the insights that data mining gives you.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=94)** Now, apart from that, I'm actually going to encourage you to get creative.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=99)** We've been talking about a lot of technical details but there's a lot of room for originality and for experimentation.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=107)** Try different datasets.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=108)** Try changing some of the commands.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=111)** See what happens, bring in something new.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=113)** See what insights you can find through these iterations, through these variations.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=118)** You may surprise yourself.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=121)** If you want some good inspiration I recommend that you go try meeting with user groups and meetup groups either in person or online.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=128)** The kind of social networking and the spontaneous influence you can get from other people can be enormous help in finding new and creative ways to work with data and data mining.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=142)** But most importantly, get your tools together, get going and see where it takes you.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=147)** You'll be surprised by what you find.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-mining-in-r/next-steps?u=76281980&t=151)** Thanks so much for joining me and best of luck in your data mining projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (9), [[Data Science]] (2), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1), [[Neural Networks]] (1)
> **CLI Commands:** make (2), python (2), find (2)
> **Cross-References:** we covered (1)
> **Speakers:** - [barton] (1)


## Instructor

- [[Barton Poulson]]

## Resources

- Exercise files available

## Skills Covered

- Data Mining
- R (Programming Language)
- Data Science Foundations

## Path Context

### In [[Develop Your Data Analysis Skills]]
← [[Python Data Analysis]] | **6 of 10** | [[SQL Tips and Tricks for Data Science]] →

## Appears In

- [[Develop Your Data Analysis Skills]]

## Related Courses

_Courses sharing skills:_

- [[Build Advanced Charts in R]] — R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[R Tidyverse Applications]] — R (Programming Language)
- [[Learning the R Tidyverse]] — R (Programming Language)
- [[Complete Your First Project in R]] — R (Programming Language)

---

[↑ Back to top](#)