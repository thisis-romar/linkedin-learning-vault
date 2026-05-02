---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: fundamentals-of-data-transformation-for-data-engineering
url: "https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering"
duration_minutes: 210
duration: 3h 30m
level: Intermediate
updated: 12/2/2025
learners: 23578
skills:
  - Data Engineering
  - Data Transformation
exercise_files: true
github: "https://github.com/LinkedInLearning/fundamentals-of-data-transformation-4554074/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGHrL3djyQWzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718396996140?e=2147483647&amp;v=beta&amp;t=Q5THMwNIRY5I0DIxHzXG6T6rSoqVzn8BpCQkvy_ehHM"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Data Engineering Skills]]'
prev_courses:
  - '[[ETL in Python and SQL]]'
next_courses:
  - '[[Complete Guide to Data Lakes and Lakehouses]]'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":4,"total":10,"prev":"ETL in Python and SQL","next":"Complete Guide to Data Lakes and Lakehouses"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - skill/data-engineering
  - skill/data-transformation
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Fundamentals%20of%20Data%20Transformation%20for%20Data%20Engineering.md)

![Fundamentals of Data Transformation for Data Engineering](https://media.licdn.com/dms/image/v2/D560DAQGHrL3djyQWzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718396996140?e=2147483647&amp;v=beta&amp;t=Q5THMwNIRY5I0DIxHzXG6T6rSoqVzn8BpCQkvy_ehHM)

# Fundamentals of Data Transformation for Data Engineering

> Fundamentals of Data Transformation with pandas and DuckDB SQL presents the most essential concepts and best practices in a clear and concise format that allows students to side-step the noise and complexity. While this course is wide rather than narrow, it was designed to help you understand your options for development and make an informed choice about where to drill down. Instructor Matt Palmer

> [LinkedIn Learning](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering) | 3h 30m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome to data transformation](#welcome-to-data-transformation)
  - [What we'll cover and what you should know](#what-well-cover-and-what-you-should-know)
- [**1. Setup and Beyond**](#1-setup-and-beyond) (4 videos)
  - [Codespaces and setup](#codespaces-and-setup)
  - [Why SQL? Why Python? Why not Spark?](#why-sql-why-python-why-not-spark)
  - [Types of data transformation](#types-of-data-transformation)
  - [The goal of data transformation](#the-goal-of-data-transformation)
- [**2. Data Transformation with SQL and DuckDB**](#2-data-transformation-with-sql-and-duckdb) (12 videos)
  - [DuckDB basics and query structure](#duckdb-basics-and-query-structure)
  - [Wrangling unstructured data](#wrangling-unstructured-data)
  - [Joins and comparisons](#joins-and-comparisons)
  - [Aggregations](#aggregations)
  - [Windows functions: A quick refresher](#windows-functions-a-quick-refresher)
  - [Window functions](#window-functions)
  - [Advanced filters](#advanced-filters)
  - [Advanced joins](#advanced-joins)
  - [Lambdas and UDFs](#lambdas-and-udfs)
  - [Data generation](#data-generation)
  - [SQL challenge](#sql-challenge)
  - [SQL solution](#sql-solution)
- [**3. Data Transformation with Python and pandas**](#3-data-transformation-with-python-and-pandas) (10 videos)
  - [DataFrame basics](#dataframe-basics)
  - [Wrangling unstructured data](#wrangling-unstructured-data)
  - [Select and filter](#select-and-filter)
  - [Order and aggregate](#order-and-aggregate)
  - [Advanced filters](#advanced-filters)
  - [Data generation](#data-generation)
  - [Windows](#windows)
  - [Apply](#apply)
  - [pandas challenge](#pandas-challenge)
  - [pandas solution](#pandas-solution)
- [**Conclusion**](#conclusion) (3 videos)
  - [What you learned, how to practice and grow, and next steps](#what-you-learned-how-to-practice-and-grow-and-next-steps)
  - [SQL bonus challenge](#sql-bonus-challenge)
  - [SQL bonus solution](#sql-bonus-solution)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to data transformation](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=0)** - Data is always changing, but there is a constant, the patterns.
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=4)** The patterns for taking data from source to insight.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=7)** That's [[Data Transformation]].
>
> **[0:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=9)** In this course, we'll cover data transformation with [[SQL]] and [[Pandas (Software)|Pandas]].
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=12)** We'll take what you already know about SQL and Pandas and we'll equip you with the tools you need to be a data transformation expert.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=19)** You'll get hands-on experience with aggregations, window functions, time series, and user defined functions.
>
> **[0:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=26)** Hi, I'm Matt and I've been working in data for over half a decade as a product analyst and analytics engineer.
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/welcome-to-data-transformation?u=76281980&t=32)** Join me as we put the fun in fundamentals of data transformation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (4), [[SQL]] (2), [[Pandas (Software)|Pandas]] (2)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1)
> **Speakers:** - data (1)

#### [What we'll cover and what you should know](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=0)** - [Instructor] So before we jump in, it's important to talk about where [[Data Transformation]] is today.
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=5)** And the first point I'd like to make is that data is ever-evolving, and that means that new libraries, tools, frameworks, and even data backends are always emerging, they're always coming out.
>
> **[0:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=16)** And that's pretty evident when we look at things like new [[Databases]], trends in LLMs, and AI, which are changing largely how we do most of our jobs today, and even methods for data transformation and analysis.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=28)** But there are some things that stay the same, and really those things are the patterns and intuition for taking data from source to insight.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=36)** So even though our workflows might change, even though the sources we use, the destinations we use might shift, the patterns that we're going to use for extracting data, transforming it, loading it to a source, and then performing additional analysis, or even building machine learning models or LLMs, those patterns largely stay the same over time.
>
> **[0:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=57)** And so it's with that context that I want to talk about the course a little bit.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=61)** And when we look at the tools that we'll be learning, we're going to frame those in concepts, patterns, and methods for data transformation.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=70)** Because who knows, right, (chuckles) you might not be using [[Pandas (Software)|pandas]] or [[SQL]] forever to transform data, even though those are two very dominant methods today.
>
> **[1:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=77)** And the fact of the matter is that tools change often, but outcomes change less.
>
> **[1:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=83)** And that's what I'm trying to get at in this course welcome.
>
> **[1:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=86)** And so our goal is to give you a basis for transforming data regardless of what tools you're using.
>
> **[1:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=91)** It's really more about critical thinking and pattern matching than anything else.
>
> **[1:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=95)** And so that's going to happen with SQL and pandas here because they are extremely popular and widely adopted.
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=102)** But what you learn can be applied to any language, whether that's [[Rust (Programming Language)|Rust]], whether that's Polars in [[Python (Programming Language)|Python]], or whatever new data transformation framework emerges in the next few years.
>
> **[1:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=113)** And so I want to cover some expected knowledge, what you should be bringing to this course, maybe some background that you've had before.
>
> **[2:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=120)** So this is an intermediate level course, and that means we expect you to understand a bit about the concepts but not to be an expert.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=127)** So ideally you'll have some familiarity of the SQL, the basics of a query structure, for example, what a SELECT statement is, how a typical query is formatted, as well as an understanding of left and inner joins.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=141)** Now, that should also include some knowledge of Python, for example, what variables and functions are, how a typical Python file works.
>
> **[2:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=149)** This entire course is actually going to be in Jupyter Notebooks that are hosted in [[GitHub]] [[Codespaces]].
>
> **[2:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=155)** So you'll need an account on GitHub.
>
> **[2:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=158)** Ideally, you'll understand, you know, how to interact with the Jupyter Notebook, and you should also be familiar with pandas.
>
> **[2:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=164)** So maybe know what a data frame is, how to select some data.
>
> **[2:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=168)** Very basic stuff.
>
> **[2:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=170)** Just understanding what some of the fundamentals are so when we jump right into transforming data, you don't feel lost.
>
> **[2:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=178)** Now, if that's not the case, don't worry.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=181)** Just brushing up on these concepts a little bit should be enough to help you get started.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=186)** But this course is going to move pretty quickly.
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=188)** And so with that in mind, here are some resources if any of those concepts seem unfamiliar.
>
> **[3:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=194)** The Data School has a really great Learn SQL page, LearnPython, you can check out some Pandas basics there.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=200)** And lastly, throughout the course, the pandas docs, the DuckDB docs, are really great resources too.
>
> **[3:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=206)** And that's something I'd love to emphasize as well.
>
> **[3:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=209)** If you ever get lost, first checking documentation, second, performing a [[Google]] search, as basic as that sounds, checking Stack Overflow.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=217)** These are really good ways to learn.
>
> **[3:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=218)** And finally, asking LLMs because that's kind of the future.
>
> **[3:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=222)** So let's talk a little bit about the course structure if all of that sounds good.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=226)** First, we're going to start with an introduction to the course.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=228)** Next, we're going to jump into transforming data with SQL.
>
> **[3:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=231)** Specifically, we'll be using DuckDB, which is an in-memory analytical database that's column-oriented and optimized for typically the operations we use in data transformation.
>
> **[4:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=243)** Once we're done with SQL, there will be a challenge at the end of that as well.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=247)** We'll move on to pandas, and we'll go into the basics of data transformation with Python and pandas that will very closely mirror our work in SQL.
>
> **[4:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=256)** So my goal for this course is to show you a bunch of ways to transform data with SQL, and then do pretty similar transformations with pandas so you get an idea of what's good in terms of SQL transformations, what you prefer when you're operating on data with SQL, and maybe the equivalent in Python and pandas.
>
> **[4:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=274)** And I think that comparison will show you when SQL shines, when PANDAS shines, and where you can use the most effective method for transforming data.
>
> **[4:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=283)** Because often, as a practitioner, you find yourself switching between SQL, switching between pandas.
>
> **[4:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=289)** Sometimes data lives in a database, and you need to write SQL to get it out.
>
> **[4:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=293)** Other times, the opposite's true, right?
>
> **[4:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=294)** Data's in the cloud somewhere, and you need to use Python to extract it, and then you can manipulate it with whatever language you choose.
>
> **[5:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=301)** Finally, we'll wrap up with a conclusion.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=303)** We'll talk about some next steps and what you can do to continue your data transformation journey.
>
> **[5:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=309)** Now, for each lesson, that is two and three on the preceding slide, so for the SQL and pandas, there'll be a familiar structure.
>
> **[5:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=316)** And each lesson's going to have between eight and 10 videos on data transformation, on different methods of transforming data.
>
> **[5:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=323)** Some will be more introductory, others will be more advanced, but we're going to walk through things pretty in detail.
>
> **[5:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=329)** The videos are exploratory in nature.
>
> **[5:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=331)** That means we're going to walk through analyzing a data set to achieve an objective or answer a question.
>
> **[5:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=336)** And at the end of each lesson, so once we're done with all of SQL, and then again once we're done with pandas, there'll be a challenge or an exercise for you to push yourself with.
>
> **[5:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=346)** And the materials follow directly for the lesson, so you shouldn't worry about anything not being in there.
>
> **[5:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=351)** And all of the code in the videos is also available in the course repo.
>
> **[5:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=355)** So you can check that out at any time.
>
> **[5:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=357)** There'll also be guided solutions to these exercises available.
>
> **[6:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=362)** And finally, I want to talk a little bit about how to be successful in this course.
>
> **[6:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=367)** So first, there's a focus on critical thinking and not taking notes or memorizing what we're discussing.
>
> **[6:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=373)** So when you watch the videos, ideally, really engage with what we're talking about and try to follow along with how we're approaching the problem.
>
> **[6:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=382)** Don't worry about memorizing any code or anything, 'cause the code will always be there.
>
> **[6:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=386)** And second, feel free to play around with that code as you go along.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=390)** So tinker with the examples, ask your own questions.
>
> **[6:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=393)** The course is set up in such a way that you can write arbitrary code in between the cells in these Jupyter Notebooks.
>
> **[6:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=400)** So if you're following along in a notebook and something's interesting to you, pause the video, play around, write a query, visualize some data, you know, have fun with it.
>
> **[6:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=409)** That's the whole point.
>
> **[6:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=410)** And as I mentioned earlier, the internet, Stack Overflow, and [[ChatGPT]] or Claude, they're your friends, right?
>
> **[6:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=416)** Don't limit the information you have access to, because when you're working, when you're doing your own projects, you're going to be using the internet.
>
> **[7:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=423)** I use the internet all the time to help me out with syntax that I forget I use ChatGPT all the time because it makes the whole process easier and it helps you learn more.
>
> **[7:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=431)** And lastly, there isn't much handholding, but that's sort of the point.
>
> **[7:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=436)** I have a lot of belief specifically in people who take the initiative to take courses like this.
>
> **[7:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=440)** So congratulations.
>
> **[7:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=442)** But I know that you can do it.
>
> **[7:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=443)** And even if you get to a point where you feel stuck, even if you get to a point where you feel like things are difficult, I would really encourage you to give it your best and try to press through because that's where personal growth happens.
>
> **[7:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-ll-cover-what-you-should-know?u=76281980&t=456)** So with all of that, we'll move on and get started with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (15), [[Pandas (Software)|Pandas]] (13), [[Data Transformation]] (8), [[Python (Programming Language)|Python]] (6), [[GitHub]] (2)
> **Env Vars:** sql (15), select (1), pandas (1)
> **CLI Commands:** python (6), make (1), find (1)
> **Tools:** jupyter (3), github (2)
> **Definitions:** is an  (2), means that (1)
> **Documentation:** stack overflow (2)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (1), set up (1)


### 1. Setup and Beyond

[↑ Back to Table of Contents](#table-of-contents)

#### [Codespaces and setup](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=0)** - [Instructor] So here we're going to talk about how to set up the course, and we'll be using [[GitHub]] [[Codespaces]] so it should be pretty straightforward.
>
> **[0:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=6)** So what is GitHub Codespaces?
>
> **[0:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=8)** Well, GitHub Codespaces is a containerized environment.
>
> **[0:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=11)** That means every experience is identical.
>
> **[0:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=14)** You can think of Codespaces like a separate virtual machine, and Docker means that everyone's environment will be the same.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=21)** That means that the interactions with this course can take place entirely in the browser, regardless of what kind of browser you're using through GitHub.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=29)** And if you want to run the code locally, you can.
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=32)** You can just pull it down, create a new virtual environment.
>
> **[0:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=35)** I have all of the files configured in the course itself to use it either a virtual environment or Docker, but we won't be going into depth on how to set that up.
>
> **[0:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=44)** We'll let you do that if that's what you desire though.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=47)** And finally, code will always be available for you to reference.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=50)** That means when you're done tinkering with this course, learning, playing, you won't have to go back and manually make sure that you save this off somewhere.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=58)** You'll always be able to reference the GitHub repo, and if you pull this down locally, it'll always be on your device.
>
> **[1:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=63)** I really encourage you to play with the code to tinker, but then also know that you'll always be able to reuse the snippets in your own personal projects if you'd like to or reference them for projects that you do in the future.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=75)** Next, we'll talk a little bit about the dataset that we'll be using, and then we'll jump into GitHub Codespaces where we'll actually configure the environment and you can follow along.
>
> **[1:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=84)** So for this course, we used a dataset from the US National Parks Service API, and that means we'll be focused on the idea of parks and campgrounds as relational data, and Parks is a table, Campgrounds is a table, but we'll also dig into alert data for some time series experience.
>
> **[1:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=103)** And the great thing about this dataset is that you can explore the dataset on your own too.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=108)** So every table in this dataset, every endpoint in that API, will be saved off in our database, and I'll show you how you can explore that data and play around, select, or query the data on your own in the next video.
>
> **[2:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=122)** So, we'll jump right into a video walkthrough of how you can set up GitHub Codespaces and get started with the course.
>
> **[2:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=130)** So, this is the course GitHub Repo, and everything's pretty straightforward.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=135)** All of the course data will be contained in this course folder, and on the front of the repo we have a README that explains the overview of the course, that talks about why we're learning what we're learning, my philosophy around learning, and learning through doing, as well as walks through the course structure if you forgot from the last video.
>
> **[2:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=155)** There's also a repo structure at a high level if any of that is confusing as well as a getting started guide and a guide to running code and the repo walkthrough.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=165)** So this all should be pretty straightforward.
>
> **[2:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=167)** To create a new Codespaces, we're going to click this Code button and select Create codespace on main.
>
> **[2:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=173)** What that's going to do is create that container that I mentioned and pull in all of these files into a virtual VS Code environment.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=181)** So, you'll see the screen when you click that button.
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=184)** It should open in a new tab.
>
> **[3:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=185)** If it doesn't, maybe check if your popups allow that sort of thing or your browser is configured in such a way that that might not be possible, but hopefully this is the screen you'll see next, and you should notice that on the left there we have all of the files that were present in the GitHub version of the course previously.
>
> **[3:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=202)** So if you click Course, you'll see the different sections of the course, an intro and then our two core lessons on [[SQL]] and [[Pandas (Software)|pandas]] as well as an appendix for next steps and continuing your data journey.
>
> **[3:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=215)** Now you'll notice that in the terminal there's a updateContentCommand running.
>
> **[3:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=220)** This is configuring the environment for your course, so once you run the code space, you'll want to wait for that command to finish, and when that command finishes, you'll just see a terminal and a blank command line.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=232)** I'll highlight that once it's done.
>
> **[3:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=234)** But once that command is done running, the environment will be entirely configured, every package you need will be installed there.
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=240)** You can see that those commands are done running.
>
> **[4:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=243)** Every package you need will be installed, and you should be able to jump right in.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=247)** So I'm going to show you how to run SQL cell in this environment just to kick things off, and then we can also talk about how to run a pandas cell too.
>
> **[4:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=256)** So, clicking SQL, there are two folders, exercises and lessons.
>
> **[4:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=261)** You'll get started with the lessons folder, and we can just jump into that first lesson, duckdb-basics.
>
> **[4:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=268)** For each lesson I included some helpful notes just to help you work through these notebooks if you want to in the future without the videos or just to remind you exactly what's going on.
>
> **[4:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=278)** I probably won't cover those in the videos though.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=280)** So this cell you'll see present at the beginning of every DuckDB notebook here, and this just initializes the notebook in our environment.
>
> **[4:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=289)** So what we're doing is importing the library, import duckdb, we're loading the SQL extension for Jupyter, which allows us to run SQL in our Jupyter Notebooks.
>
> **[4:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=297)** This percent symbol is what's called a magic command, so that just lets us run something that's not code in the notebook, that does something a little special basically.
>
> **[5:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=306)** Next, we're initializing our connection with the DuckDB database, which will run in memory on this virtual machine, and then last, we're connecting to the database and importing the actual data we'll be using for the code.
>
> **[5:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=320)** So if I run this, we'll get a popup the first time asking us which [[Python (Programming Language)|Python]] environment we want to use.
>
> **[5:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=325)** There's only one Python environment in this container, but if you're running this locally, you'd want to create your own.
>
> **[5:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=331)** So I'll select the only Python environment on the list, and you'll notice that the environment's connecting to the kernel and then executing the cell.
>
> **[5:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=337)** It should load the data in five or six seconds.
>
> **[5:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=339)** So if you see this message, everything worked as it should, and the count is the number of tables that we have.
>
> **[5:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=345)** Navigating to the next cell, we can then interact with the data, so Select *FROM nps_public_data.parks is going to pull in the first row from our parks data, which we can see is a national memorial called Federal Hall.
>
> **[5:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=359)** At any time, if you want to examine what other data lives in the course, you can just type in DESCRIBE after loading everything else, and we're going to describe the dataset that's loaded into memory.
>
> **[6:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=371)** So you can see here we have our schema nps_public_data and a bunch of tables, so park hours, parking lots, parks, et cetera.
>
> **[6:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=380)** Once you run this command, it kind of gives you a blueprint for what you can then query.
>
> **[6:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=385)** For example, if I wrote Select *FROM nps_public_data.campgrounds LIMIT 1,
>
> **[6:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=395)** we'll get data from the Campgrounds table, which is also loaded in our dataset.
>
> **[6:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=399)** And the way this works, if you'll note in the earlier cell, is that there's actually a data directory in our course with this nps dataset.
>
> **[6:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=408)** And these are just Parquet files, and you can think of Parquet like a compressed CSV file.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=413)** So, when we run this initial command, we're actually loading this entire data directory into memory and we're able to query these as though it was a database, a schema, and some tables, and that's really cool.
>
> **[7:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=425)** That's what DuckDB lets us do, and that's how it's making this course more powerful.
>
> **[7:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=429)** So that's it for how to run a SQL cell.
>
> **[7:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=433)** So if you'd like to run pandas cells, the process is just as simple, maybe even a bit more straightforward, and if we head on over to the pandas section of our course lessons, the first pandas lesson where we're loading this dataset will be in Lesson One, and if I open that up, we're going to import pandas as pd.
>
> **[7:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=449)** Again, we have to select that kernel when we load a new notebook, and you'll notice that in this instance we're actually loading a individual file, not the entire database, so we'll be using the pandas function read_parquet, and then selecting the data that we need to select, and you don't have to worry because this is already pre-read in all of the lesson and exercise notebooks, so it'll be as simple as running this cell.
>
> **[7:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=473)** In this cell we're loading the nps_public_data_parks dataset and displaying the first five rows of that dataset.
>
> **[8:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=480)** One command and we're all set.
>
> **[8:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/codespaces-and-setup?u=76281980&t=482)** So that's how you'll load data using pandas and DuckDB in this course, it's really straightforward, and now it's time to get into things and start building with our dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (9), [[Pandas (Software)|Pandas]] (8), [[Codespaces]] (7), [[SQL]] (6), [[Python (Programming Language)|Python]] (3)
> **Tools:** github (9), terminal (2), jupyter (2), vs code (1), command line (1)
> **Env Vars:** sql (6), api (2), readme (1), describe (1), limit (1)
> **CLI Commands:** python (3), docker (2), make (1)
> **Code Identifiers:** nps_public_data (3), updatecontentcommand (1), read_parquet (1), nps_public_data_parks (1)
> **Definitions:** is a  (4), means that (2)
> **Prerequisites:** set up (2), configure (1), getting started (1)
> **Exercise Files:** github repo (2)

#### [Why SQL? Why Python? Why not Spark?](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=0)** - [Instructor] In this course, we'll be concerned with two major languages for [[Data Transformation]], and that is [[SQL]], or "sequel," and [[Pandas (Software)|pandas]].
>
> **[0:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=8)** But I think it's important that we take some time and discuss why we're focused on those two languages as well as what else exists and what's likely to be popular in the future.
>
> **[0:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=17)** So why SQL?
>
> **[0:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=18)** Well, SQL is time tested and [[Databases]] have been around since 1970, and that means so has SQL.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=24)** So this is probably one of the only, if not the only, programming language that people have been using consistently, or variance of consistently, for the last 50 plus years.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=33)** And SQL is excellent for relational data.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=36)** The way the language is defined makes it a great choice for joining, unioning, and combining data.
>
> **[0:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=43)** And most data is relational today, though that's quickly changing as we'll discuss in a later exercise.
>
> **[0:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=49)** But SQL also runs at scale, and that means from a thousand rows to a billion rows, you can be using SQL or a SQL variant to select and join that data with minimal switches in syntax.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=62)** SQL accents [[Python (Programming Language)|Python]] well, sort of like a hammer and a screwdriver.
>
> **[1:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=66)** You use a hammer for certain tasks like pounding a nail and a screwdriver for others.
>
> **[1:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=71)** SQL is really good at certain data manipulations, as we'll discuss in this course, where Python falls short, and the opposite is true as well.
>
> **[1:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=80)** Python's really great at certain things that SQL does not [[Microsoft Excel|excel]] at.
>
> **[1:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=83)** So lastly, SQL's a standard, and if you work as a data analyst or a data engineer, you will need to know how to write SQL, and that's really what makes it important.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=92)** Everyone that works in this field knows how to use it, and it's sort of a network effect.
>
> **[1:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=97)** That means that the value of understanding SQL is increased by the fact that most professionals use this language, too.
>
> **[1:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=107)** So that's why we use SQL. But what about Pandas?
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=110)** Well, pandas is actually a subset of Python.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=112)** Pandas is its own library, as I'm sure you're familiar, but it's also time tested, and it's been the tool of choice for about 15 years now, which, in Python's lifetime, is quite a while.
>
> **[2:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=123)** And I think one of the underrated aspects of Python is that there's a ton of community support, and everything that you need to know about the pandas library, you'll be able to find online through Stack Overflow, the pandas documentation, or [[ChatGPT]] or other AI models since those are indexed on existing data.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=141)** Pandas is also incredibly flexible, and because Python is a relatively straightforward language, that means you can do many things very simply, which is important for being able to transform data and iterate on the transformations that you write.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=154)** Lastly, pandas is really well suited to handle [[Unstructured Data]] as we'll see in some of our upcoming lessons.
>
> **[2:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=161)** Now, I would be remiss if I didn't mention the pitfalls associated with these two languages, of which there are many, but we'll focus on a couple.
>
> **[2:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=168)** And it's important to remember that there's no such thing as a perfect tool, but we're trying to get as close as possible, and in data transformation, that's why we're using two languages.
>
> **[2:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=178)** But with SQL, expressions can be limited.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=181)** You can't really even think about SQL as a programming language.
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=184)** There isn't a concept of variables or modules or many of the other more complete functionalities that other programming languages like Python or [[JavaScript]] contain, and that means that it has a very narrow scope.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=198)** It can also have a pretty steep learning curve.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=200)** People always get tripped up by window functions, which we'll discuss a little bit in this course, but SQL can be intimidating at first, especially some of the more advanced concepts.
>
> **[3:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=208)** And admittedly, it's not the easiest to read.
>
> **[3:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=211)** Now, pandas has its own faults.
>
> **[3:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=213)** It doesn't perform super well on big datasets.
>
> **[3:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=216)** It requires a lot of memory, and, at times, it can have an odd syntax and also a steep learning curve.
>
> **[3:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=223)** And you'll notice that these both can have a steep learning curve, which means that a course on data transformation might be challenging.
>
> **[3:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=230)** And we're going to tackle that as best as we can.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=232)** We're going to make this as approachable as possible, but it's important to note that many of these concepts, or the way that you do things in these two languages, might seem foreign at first, and that's okay, but we're going to take it step by step, and we'll tackle it together.
>
> **[4:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=246)** So it's important to note what else is out there because there are some new, exciting trends in technology and data transformation, but they're mainly concerned with distributed, compute, or different languages.
>
> **[4:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=258)** So frameworks like Polars, [[Rust (Programming Language)|Rust]], Ray, Dask, they're primarily performance-oriented and they have a lot of promise, but they're not as popular as pandas or plain Python.
>
> **[4:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=269)** And for SQL, new languages and frameworks or new syntaxes, basically new databases, require different variants of SQL, and maybe even the promise of AI writing your SQL for you are on the horizon.
>
> **[4:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=281)** Unstructured data sources also pose a bit of a challenge for SQL workflows, but newer languages tackle those sources really well, DuckDB being one of those as we'll discuss.
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=290)** And if we think about the history of programming languages, or even just go back in the last 20 years, Python has been the most dominant language for a majority of that, and while newcomers like Rust show a lot of promises for data transformation, the network effect of popularity, both within data infrastructure and also among practitioners using the language in their job, is really important for community support, learning and development, and being able to build the best data systems possible.
>
> **[5:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/why-sql-why-python-why-not-spark?u=76281980&t=319)** And that's why we'll be using SQL and Python in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (23), [[Python (Programming Language)|Python]] (11), [[Pandas (Software)|Pandas]] (10), [[Data Transformation]] (5), [[Databases]] (2)
> **Env Vars:** sql (23)
> **CLI Commands:** python (11), find (1), make (1)
> **Definitions:** means that (3), is a  (1)
> **Cross-References:** in the last (1)
> **Documentation:** stack overflow (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Types of data transformation](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=0)** - [Instructor] So there are a number of types of [[Data Transformation]] that we'll be discussing in this course, but I wouldn't get too hung up on what specific type of data transformation we'll be performing at any given time because data transformation is pretty fluid.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=12)** And often, we'll be combining these methods, chaining them together.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=15)** So this is really more of an overview for you to understand the types of iterations we'll be performing.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=21)** And the first is just ordering and grouping.
>
> **[0:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=23)** And so that looks like sorting data, rearranging the order, ordering it by different columns, and grouping it or organizing the data into groups by a particular column or set of columns.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=33)** Second, filtering.
>
> **[0:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=34)** Often we don't want an entire dataset, right?
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=37)** We need to exclude records or perform joins to get at the specific, to drill down into the specific view that we'd like to see.
>
> **[0:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=45)** Third, renaming.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=47)** A lot of times, data comes in messy.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=48)** We need to clean it up, make it readable, make it understandable so we can share it with our peers.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=54)** Additionally, there'll be aggregations, for example, minimums, maximums, or more complex segregations, like window functions and the like.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=62)** We'll also be applying or performing Lambda functions on our data.
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=67)** And you can think of an apply function like a map.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=69)** The term applying just comes from the [[Pandas (Software)|pandas]] method apply.
>
> **[1:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=73)** That is very common in [[Python (Programming Language)|Python]] data transformation, but effectively, applying or mapping is just taking a function and applying it to each row of data in a transformation.
>
> **[1:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=84)** And lastly, a subset of aggregation are window clauses or windowing over our data, and that means calculating aggregates within groups, within partitions or more complex functions.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=96)** We'll discuss that in more detail as we get to the specific subject of windowing in both [[SQL]] and pandas.
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=102)** Now, there are a few other types of transformation that we will be covering in this course, and it should be noted that we'll be covering types of transformation that I'm not listing here.
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=110)** But some other important methods of data transformation are cleaning, like handling nulls, formatting data, if statements, slicing, which is kind of like a filter, but it can be across any axis, for example, taking only a subset of rows that exist in our data frame.
>
> **[2:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=125)** So we'll also be generating data, that is creating consecutive or unconsecutive series and ranges that will help us, that will accent the transformations we'll be performing in later videos.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=136)** We'll talk about that more later.
>
> **[2:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/types-of-data-transformation-we-ll-cover?u=76281980&t=138)** And as I discussed, mapping, which is similar to applying through applying UDFs or user defined functions, custom functions, and other maps to our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (5), [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1), [[SQL]] (1)
> **Analogies:** for example (2), kind of like (1), similar to (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [The goal of data transformation](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=0)** - [Instructor] It's important to take some time and think about what the goal for this course will be.
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=4)** So I'd love for you to take a minute, sit down, and think about what you'd like to get out of this course.
>
> **[0:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=8)** But briefly, I'll describe what I consider to be the course mission or why I wrote this course and what I hope you're able to take away from it.
>
> **[0:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=16)** So my goal in creating The Fundamentals of [[Data Transformation]] is to provide a basis for transforming data with [[SQL]] and [[Pandas (Software)|pandas]] that really focuses on the underlying concepts of data transformation.
>
> **[0:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=27)** In technology, things change pretty fast, but often, the underlying concepts are the things that will be true for a very long time or evergreen, in a sense, and through hands-on learning and a focus on doing rather than repeating or memorizing, I really hope that you'll glimpse into the life of a practitioner, whether that be a data analyst or a data engineer and a tinkerer, not just a robot.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=50)** So I really hope you enjoy this course, and I hope you learn a lot.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/the-goal-of-data-transformation?u=76281980&t=53)** And most importantly, I hope you have fun and take lots away from it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (2), [[SQL]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 2. Data Transformation with SQL and DuckDB

[↑ Back to Table of Contents](#table-of-contents)

#### [DuckDB basics and query structure](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=0)** - [Instructor] In our first lesson, we'll be learning [[Data Transformation]] in [[SQL]] with DuckDB.
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=4)** And this will be pretty straightforward, this video.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=7)** We'll just be walking through how to run SQL in each cell, we'll be talking about how our SQL exercises work, we'll talk about how to tinker in this framework, and we'll also give an introduction to the first lesson and get started.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=21)** So we can jump right into it.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=24)** And once we're in our code space, we need only open the SQL folder and navigate to the Lessons directory to see a list of the lessons that we'll be interacting with.
>
> **[0:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=35)** So clicking into the first lesson, DuckDB Basics, is pretty straightforward and all we need to do is run the first cell.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=42)** And that's going to prompt us to choose an environment in our code space.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=46)** So we'll select the only environment that exists and all of the necessary libraries should be loaded and we're ready to start running the cells in our course.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=54)** So running the first cell should display this message when it succeeds.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=58)** And all we've done is import DuckDB, load the SQL extension, connect to the DuckDB database, and import our parks data.
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=67)** As we just discussed earlier, we're just loading the Parquet files that live in this course directory.
>
> **[1:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=71)** From there, we'll be able to interact with the cells in our notebook by hitting Shift + Enter to execute them individually.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=78)** So running the cell, we return the first row from the parks data set.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=82)** But at any time, you can simply run the command DESCRIBE to understand what the data set looks like.
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=89)** And that'll give you a list of the tables, the list of the columns in those tables, as well as the column types of those columns.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=96)** And this can help us explore.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=98)** It can help us dig around and find new data sets.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=101)** For example, if I wanted to query park hours, I would need only run the the last query and change parks to park hours.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=108)** And now I'm selecting from the park hours data set.
>
> **[1:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=111)** And it might be interesting to play around with that data, see what else exists in that data set, and maybe even understand a little bit about how the data is structured and see if I can clean it up.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=121)** So that's just an example of how you can tinker in this repository and maybe learn a bit on your own.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=127)** And from there, we can go on to learn a little bit more about DuckDB.
>
> **[2:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=131)** Well, DuckDB is pretty similar to other types of SQL transformation engines.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=136)** And if you already know the basics of SQL, every query is structured with a SELECT clause and a FROM clause.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=142)** We're selecting some subset of data from a table, and that table lives inside of a schema, and the schema is inside of a database.
>
> **[2:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=149)** Between those two clauses, we'll be listing to names of our columns as well as using aliases to rename the columns to more readable versions, specifically if we're mixing uppercase and lowercase letters or if we're dealing with ambiguous column names.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=165)** You can see here we're renaming our columns to things that are a bit more sensical, as well as really naming our table to something that's maybe not sensical.
>
> **[2:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=172)** But if there's anything you don't know about SQL, feel free to poke around online or play around with the parks data in this notebook.
>
> **[2:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=179)** Otherwise, I've emphasized this throughout the course.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=181)** I encourage learning by observing and playing.
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=184)** Feel free to open up a new cell, open up a new file, drop in that %SQL and query some sample data.
>
> **[3:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=191)** You can find out more about the database by running DESCRIBE, as I mentioned, by running SHOW ALL TABLES, which is the same command in DuckDB.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=198)** If I run this, it'll show us the same thing we saw earlier.
>
> **[3:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=202)** And the only other important thing to talk about here is query structure.
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=205)** Now, you'll notice that my queries are structured and formatted very precisely.
>
> **[3:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=209)** When I write a query, it usually contains capital letters, there are nice indentations, I'm listing columns on separate lines.
>
> **[3:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=215)** This is important from a readability aspect and, as you progress in your role and mature as a data practitioner, it'll be important for sharing your work with others.
>
> **[3:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=224)** Now, there are tools that can automatically format your code for you, but it's best practice, especially in a learning environment like this, to practice writing readable and consistent code.
>
> **[3:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=235)** But that's all for now.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/duckdb-basics-query-structure?u=76281980&t=236)** Next, we'll jump into wrangling [[Unstructured Data]] with DuckDB, and things will pick up a bit from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Data Transformation]] (1), [[Unstructured Data]] (1)
> **Env Vars:** sql (9), describe (2), select (1), show (1), tables (1)
> **UI Navigation:** open the (1), navigate to (1), select the (1)
> **CLI Commands:** find (2)
> **SQL:** select (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Wrangling unstructured data](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=0)** - [Narrator] In this section, we're going to talk about how to wrangle [[Unstructured Data]].
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=4)** And that means taking data that might not be in perfect tabular format, transforming it into a more approachable format, and then saving it off somewhere to re-access it.
>
> **[0:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=13)** We'll be using CTEs, common table expressions, which we'll talk about in a bit, aliases and case statements.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=19)** We'll also preview some concepts like Boolean Logic, coalesce, not in all, and a few other [[Forms]] of filtering.
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=25)** But to get started, we'll load up our database and jump right into it.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=28)** So we'll be taking a look at the parks dataset for this exercise.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=33)** If we select the top three rows, we can see a preview of the dataset.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=37)** We need to scroll horizontally to see all the columns.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=40)** There are quite a few, but off-the-bat, we can notice there's some interesting things going on.
>
> **[0:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=45)** So we'll note that certain columns appear to have lists of [[JSON]], which is a type of data, JSON data listed in those columns.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=54)** And in particular, we're going to investigate the operating hours column.
>
> **[0:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=57)** So we can take a peek at operating hours and notice that it's of struck type or nested JSON in [[SQL]] speak.
>
> **[1:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=64)** And selecting the first row there, we seem that we have a name parameter kind of nested within this row.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=70)** So we have nesting of unstructured data within our structured data frame.
>
> **[1:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=76)** So what if we want to create an operating hours table?
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=79)** This is actually a pretty common exercise where there's data that's being stored in the tabular format somewhere with nested records stored inside of a column.
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=89)** And we want to take that column, explode that data, or expand it out, unpack it using some type of query language, and then store that off.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=98)** So in Duct DB SQL, the UNNEST operation is what's going to allow us to do that.
>
> **[1:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=105)** So if we take that query and put it into a CTE, then select from it, we can perform our UNNEST operation and specify recursive to be true, and that's letting Duct TB know that there might even be more nested elements inside of that JSON data.
>
> **[2:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=120)** Finally, we can select from that and exclude a few columns, the columns that are nested in that JSON to get our result.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=127)** And you can see what we're doing here is actually taking this adjacent data and expanding it into our resulting data frame.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=135)** And that's going to let us perform more manipulations on the data and store it off so that we're able to select from it later.
>
> **[2:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=144)** So notice how we're using a CTE here or common table expression to make this query very readable and to keep the structure so that we can reference it later.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=154)** We're also using Select Star with the exclude syntax to remove certain columns from what we're selecting.
>
> **[2:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=161)** So we're excluding the name column as well as exceptions, which is stored inside of the JSON data.
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=169)** Finally, what we can do with this data, and this is a common pattern, is create a new table that stores our park hours so we can access it later.
>
> **[2:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=179)** So again, we're just going to take the query that we already had and we're going to wrap it with this create or replace table syntax.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=186)** And what that's going to do is it's going to take our duct DB database, and if a table already exists, it doesn't, but if it did exist, it would overwrite it.
>
> **[3:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=195)** Since it does not exist, we're going to create a new table.
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=197)** And so running this is going to select what we just created into its own table and return the number of rows.
>
> **[3:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=204)** And so this pattern in [[Data Transformation]], creating tables with dimensions, it's a kind of a data transformation term, like operating hours, lets us easily join to access information and improves the readability of the queries that we'll be writing.
>
> **[3:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=219)** So you can imagine building on this query, the syntax would get pretty complicated very quickly, but from what we just created, if we wanted to get the park hours from Thursday, for example, the following query would do just that in only five or six lines of SQL where we select from our new park hours data set, we create a left join and bring in our parks data set on the park ID, and we filter by the category being hours of operation.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=247)** So this is a really handy way for improving the readability of the queries, making things accessible and storing them off for later.
>
> **[4:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=254)** But if we wanted to know all the values that Thursday can take in our dataset, we could use the distinct syntax to return a list, that's kind of like using set in [[Python (Programming Language)|Python]].
>
> **[4:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=264)** We're just saying, for all of these values, what are the unique values that exist in this column?
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=270)** And we'll order that by the Thursday column and limit it to just 10 values.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=275)** And you'll notice that a few of these values kind of look off.
>
> **[4:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=278)** So there's an unknown value that's probably not right.
>
> **[4:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=282)** There's a closed value as well as an all-day-value, pretty ambiguous.
>
> **[4:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=287)** So this data isn't really what we consider clean, and in order to clean it up, we can use case functions to alter how data's returned and create entirely new columns.
>
> **[4:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=295)** So we're going to take the code that we just wrote and we're going to create a new table.
>
> **[5:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=300)** We're going to replace that NPS Public Data Parks hours table we just used and rename the columns as we go.
>
> **[5:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=307)** And this is an example of cleaning a data set.
>
> **[5:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=310)** So end-to-end, we're taking unstructured data, reading it in, performing transformations on it, cleaning it up, and then storing it for re-access later.
>
> **[5:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=319)** And that's a really common pattern in data transformation.
>
> **[5:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=323)** So we will assume unknown hours are closed park resources for this example, and this query might look a little daunting, but really, this is just the components that we went over before.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=333)** So we're selecting from our parks data set, then we're reading in the park name, ID, description, category, and then using that casing syntax, which is case, column name, when value, then alternate value, else, the original column name.
>
> **[5:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=353)** And so all we're saying here is, okay, for the Monday column, when it equals unknown, then we're going to return closed.
>
> **[6:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=360)** Otherwise, we're just going to return the original column value and we're going to call that new value Monday hours.
>
> **[6:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=365)** We're doing the same for every other day of the week here.
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=369)** And finally, we're saying, well, if all of the values, all of the days of the week do not equal closed, then we're going to say, "Hey, the park's open seven days a week", and we're assigning that value true for a Boolean column.
>
> **[6:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=383)** So if you run this column, again, we get the number of rows, so that we know it ran well, since we created that Boolean column, open seven days a week.
>
> **[6:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=393)** That tells us if a park's open every day or not.
>
> **[6:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=395)** Now, that might seem repetitive given that the information's technically already contained in the table, but it unlocks a precise, easily readable query filter.
>
> **[6:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=405)** So we can say something like, select star from nps_public_data.park_hours where open seven days a week.
>
> **[6:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=411)** And that seems like a simple, small thing, but your teammates, and even you when you go back to re-access this data, are going to thank yourself because it's super easy and super readable to say, select star.
>
> **[7:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=423)** Wear open seven days a week and filter data on that attribute.
>
> **[7:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=426)** So a good pattern, a good pattern to follow as a data or analytics engineer is to make those queries as readable as possible.
>
> **[7:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=433)** And to think, oh, what will I be querying for in advance if I'm always writing queries to return parks that are open every day?
>
> **[7:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=440)** Maybe it would make sense to write a column that bakes the logic in to my table if those parks are open.
>
> **[7:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=447)** So another maybe a little side quest here.
>
> **[7:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=450)** Can we find parks that are closed on Thursday?
>
> **[7:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=454)** Well, in order to do that, we can define a few helper columns.
>
> **[7:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=459)** So selecting from our parks dataset and joining in that parks dataset that we defined.
>
> **[7:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=465)** Note that we're aliasing the dataset to be named closed_thurs on the fact that the park IDs are equal and Thursday hours equal closed effectively filters that data set.
>
> **[7:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=478)** It filters the parks data set for those values where parks are closed on Thursday.
>
> **[8:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=484)** And so we can simply return the resulting data frame and add in a couple more columns that give us some descriptive information.
>
> **[8:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=491)** For example, we'll return either the Thursday hours or open if the park is closed, we'll return not the Thursday hours or null as is closed, and we'll order the parks randomly.
>
> **[8:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=505)** So we get different parks every time.
>
> **[8:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=506)** And so you can see the resulting parks, in fact, are all closed on Thursday.
>
> **[8:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=511)** And this is just an example of how you can filter a data set using a join to return information about a question or a hypothesis.
>
> **[8:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=519)** So, it's important to notice how we can represent the information in multiple ways.
>
> **[8:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=525)** For example, is closed, closed, open, and Thursday, technically all contain the same information, but in different formats and with different logic powering the result of the query.
>
> **[8:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=536)** There's no correct format.
>
> **[8:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=537)** It really just depends on how you're going to use the data.
>
> **[9:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=540)** So bullying columns, true-false, are really easily readable for filters, right?
>
> **[9:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=545)** Select star from Thursday where is closed is a simple and natural way to express a query.
>
> **[9:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=552)** But human readable text might also make it easier for your coworkers or your colleagues to intuit data.
>
> **[9:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=559)** For example, select star from parks where Thursday hours equals closed is a very natural way of writing that query.
>
> **[9:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=564)** Now finally, we're going to export this database to make sure we save off the tables that we created.
>
> **[9:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=570)** And once that's done, we'll have that accessible for later.
>
> **[9:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=574)** But an important thing to notice is the pattern of this lesson.
>
> **[9:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=577)** We're selecting data, we're asking ourselves questions about it, and then we're investigating that data, identifying useful facts and dimensions that might be useful downstream.
>
> **[9:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=586)** We're doing a little bit of [[Data Modeling]] in creating columns, creating column names for queries that we think will perform often.
>
> **[9:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=593)** We're transforming that data so that it's easy to re-access and we're storing it.
>
> **[9:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=597)** Now, a few other things.
>
> **[9:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=599)** Data modeling is a useful skill that we're not really going to talk about in this course because it's a bit of an advanced topic.
>
> **[10:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=605)** But, I'd highly recommend checking out data modeling courses when you're done with this one.
>
> **[10:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=610)** And second, automating transformations, that is doing what we're doing in a scalable and sustainable way is another useful tactic that also won't be discussed in this course.
>
> **[10:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=619)** There'll be some resources in the appendix, but there's also a lot of really great resources on how you can automate data transformation out there.
>
> **[10:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data-24030008?u=76281980&t=627)** Onto the next lesson, joining and comparing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6), [[Data Transformation]] (4), [[Unstructured Data]] (3), [[SQL]] (3), [[Data Modeling]] (3)
> **Env Vars:** json (6), sql (3), unnest (2), cte (2), nps (1)
> **CLI Commands:** make (5), python (1), find (1)
> **Definitions:** is a  (6), is an  (1)
> **Analogies:** for example (4), imagine (1), kind of like (1)
> **Code Identifiers:** nps_public_data (1), park_hours (1), closed_thurs (1)
> **Warnings:** note that (2)
> **UI Navigation:** select the (1)

#### [Joins and comparisons](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=0)** - [Instructor] In this lesson, we're going to jump into joins and comparisons, and those are ways of filtering your data and comparing them for future [[Data Transformation]] steps.
>
> **[0:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=8)** So we'll start by loading our data set, and in our previous examples, we used where to filter queries, but we can also do that with joins.
>
> **[0:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=17)** But there's a caveat, and that is that we need to be very careful with how joins work.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=21)** So if I run this query, we're selecting parks, we're joining in our visitor centers table.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=28)** And you can imagine there might be many visitor centers in one park.
>
> **[0:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=31)** That is, there's a one-to-many relationship between parks and visitor centers, and we're joining those in on parkcode.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=37)** But more importantly, we're filtering where the designation equals national monument, and the visitor center is a passport stamp location.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=46)** Now, there's an important piece here.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=48)** Also, I'll call out that I use this one equals one syntax quite often.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=52)** Obviously, one does in fact equal one.
>
> **[0:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=55)** That's just to be sure that the structure of this where clause is nice and lined up, and everything's very readable.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=61)** But an important question to ask ourselves if we're performing a left join and a filter in the where clause is, what happens to parks without visitor centers?
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=70)** And we can find the answer by looking at sort of a toy query here, where we do the same thing.
>
> **[1:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=76)** We select from visitor centers and we inner join the visitor centers to the parks.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=81)** And then we also select from parks, and left join the visitor centers and then perform that filter in the where clause like we just did.
>
> **[1:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=88)** And if we get the count of the rows, that is the number of parks, rather the number of visitor centers in either of these queries, when we run that, we'll see that they're exactly the same.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=98)** So what does that tell us?
>
> **[1:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=100)** Well, it tells us that performing an inner join is the same as filtering in a where clause.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=106)** So it's important to consider where we're performing our filters.
>
> **[1:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=111)** And if we're left joining data and then performing a filter in the where clause as we did in the example above here, we're actually removing rows that have null values in that join.
>
> **[2:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=122)** So if there's a park that doesn't have a visitor center, we're losing out on that data.
>
> **[2:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=125)** And it's important to keep that in mind when you're performing data transformations.
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=129)** But moving on, there's some common ways of filtering data that we'll discuss here, and that includes comparisons between in, is null, like, ilike, and regexp, which is a regular expression.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=141)** So we'll talk a little bit about these in order.
>
> **[2:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=143)** First, we can filter numbers and dates with comparisons or between statements.
>
> **[2:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=147)** And so this first example runs a comparison.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=150)** We want events where the recurrence start date is greater than the first and less than the 23rd.
>
> **[2:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=156)** We could do the same thing, maybe a bit simpler with between, but you might be asking, "Well, what's the difference?"
>
> **[2:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=162)** And there is a difference.
>
> **[2:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=163)** Well, between is inclusive, and that means those first dates, the first date and the last date, are included where they might not be or they aren't if we're using a greater than sign.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=174)** So if I run this example to compare the number of rows in both queries, you see that between is going to return more rows.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=181)** And that means that we might be capturing unexpected data if we're not aware of that functionality.
>
> **[3:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=187)** So we can also nest logic, and this is a big advantage of using [[SQL]].
>
> **[3:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=191)** You can do this really clean nesting, we can nest logic for multiple data timeframes.
>
> **[3:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=195)** So in this example, you can see we're saying, "Select data where one equals one and then two timeframes are being selected."
>
> **[3:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=203)** So where the recurrence start data is between the first and the 31st, or it's between the first and the 31st of March, and we're ordering that randomly in our data set.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=214)** So another handy way to filter data sets is through string matching.
>
> **[3:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=218)** And if you're familiar with [[Python (Programming Language)|Python]], you probably know regex, but SQL has a few other simple ways to filter strings.
>
> **[3:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=224)** The first is like, and like is simply a way of asking if a string is in a column.
>
> **[3:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=231)** So where title, like, stroll is asking, well, is the [[Microsoft Word|word]], stroll, anywhere in our title?
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=240)** And if I run this, we should get titles where stroll is in the title of the event.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=245)** Couple important things about this way of matching strings, the percentage symbols signify the start and the end of the string.
>
> **[4:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=252)** So using percentage on either padding that on either end of the string says, "Stroll exists anywhere inside of the string."
>
> **[4:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=259)** Now, an important point to note is that if I wanted strings where stroll was at the start, that's a mouthful, but I could simply remove the starting percentage symbol.
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=270)** If I wanted stroll at the end, I could remove the other percentage symbol.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=275)** And the one gotcha with like is that it's case sensitive.
>
> **[4:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=278)** So it can be easy to mixed results.
>
> **[4:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=279)** For example, if I wanted events where the title was like hike, we might not get any events, but if we use ilike, which is case insensitive, we would.
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=290)** So it's important to remember the case sensitivity of the function that we're using in SQL, and that'll be a constant through most of these lessons as well.
>
> **[5:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=300)** But like can also be really good for cleaning up messy columns.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=303)** For example, if we select parking lots from our part public dataset here, you can see that there's not a lot of consistency in the managed by organization and even in the parking lot names.
>
> **[5:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=314)** So for some simple clean parking lot names here, we could combine a concept we talked about in the last lesson, which is using case one statements with that string matching.
>
> **[5:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=324)** Like, I like to say, "Hey, when our name contains this visitor, we're going to call it a visitor center.
>
> **[5:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=330)** And when our name contains parking, we're going to say it's a parking lot, otherwise we'll just call it other for our categorization."
>
> **[5:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=336)** And similarly, we can combine those with if statement to say, hey, if our managed by organization contains NPS, then we'll call it National Park Service.
>
> **[5:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=347)** Otherwise, we can just say managed by organization.
>
> **[5:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=350)** Running this query should clean that data up, and it should look a lot more like a categorization, which is exactly what we want, right?
>
> **[5:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=357)** The whole point of data transformation is to standardize and clean data, so that when it's free access later, when it's visualized, it makes more sense, and it's more consistent.
>
> **[6:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=366)** Now, depending on your flavor of SQL, there might be other ways to pattern match.
>
> **[6:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=370)** DuckDB also has a glob and regex matching, but those are sort of outside the scope of this class, and they can get pretty complex.
>
> **[6:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=376)** I highly encourage you to read on if those are interesting to you as well.
>
> **[6:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=381)** But for our next section, when we talk about the parks dataset, there are some interesting filters that occur when we have a list of attributes within a park.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=390)** So here you can see selecting the full name and the states that a park is in.
>
> **[6:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=395)** And those are like the state boundaries that a park might cross.
>
> **[6:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=399)** So you notice like something like a historic trail, might wind through quite a few states.
>
> **[6:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=403)** But the important point here is that this is returned as a string.
>
> **[6:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=406)** So this is just one single string.
>
> **[6:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=409)** It's actually a list of states separated by commas, but DuckDB doesn't know that.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=413)** Our database doesn't know that.
>
> **[6:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=414)** And so to perform more robust filtering on something like this, we need to split that string by commas to tell us which states things exist in.
>
> **[7:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=424)** And we can cast the result to a list of strings to turn the state's field into effectively a list, and then perform more on complex filters on that.
>
> **[7:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=434)** And so, in this course, we're going to challenge you to think really critically about the structure of your data and how you can manipulate it to achieve the outcome that you're looking for.
>
> **[7:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=441)** So when you sit down and you think, "Okay, well, I need to filter this data set by the state, maybe I need to split the string, maybe I don't need to split the string."
>
> **[7:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=448)** That's kind of up to you, but I'm going to show you how to do both.
>
> **[7:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=451)** And so if we wanted to answer the question, well, hey, what parks are fully or partially in Utah?
>
> **[7:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=456)** We could first select from our parks dataset and use the DuckDB split function to split the states on this, the comma, that is delimiting the individual states, and then casting that to a list of strings.
>
> **[7:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=471)** And this is the syntax for casting something to a list of strings.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=475)** Then we could use the list contains function to say, "Hey, does the state's list contain UT, which is Utah?"
>
> **[8:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=482)** And I'm going to show you the intermediate step here 'cause it's going to be a bit tricky.
>
> **[8:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=485)** So if I create a new code cell and we drop that SQL in and run this, you can see now our new state's list is going to be a list of strings instead of just one long string.
>
> **[8:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=497)** And so when we're running this second function that's looking at the list contains DuckDB function, we're effectively filtering these trails for only those that have Utah in the states list.
>
> **[8:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=508)** And that's what we're getting back here, so you can see we have five parks where Utah's in the states list, and that allows some pretty nifty queries in DuckDB for cross-border parks.
>
> **[8:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=518)** For example, we could do the same thing, and say, "Hey, which parks have both Utah and Wyoming in that states list?"
>
> **[8:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=526)** Something that might be really hard to do if we were just looking at strings.
>
> **[8:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=530)** And in that way, we could return here three trails, all of which are that cross both Utah and Wyoming borders.
>
> **[8:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=538)** So we could also say, "Well, hey, which parks are in Utah and or Wyoming instead of in both?"
>
> **[9:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=544)** And this query is going to return list has any, not list has all.
>
> **[9:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=548)** And so there we get a list of parks where Utah or Wyoming might be in the states list.
>
> **[9:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=554)** Now, we can also filter values in a list using in, and this can be pretty handy for picking out multiple values.
>
> **[9:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=560)** For example, if I wanted to select parks where the name is in the list, so the name could be one of Arches or Bryce Canyon or Zion, we can do that using the in syntax, and that returns exactly what we'd expect it to.
>
> **[9:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=575)** When we return cells, we can also order the results using the order by clause.
>
> **[9:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=578)** That's pretty straightforward, but it's important to do.
>
> **[9:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=580)** We can also group results and use distinct and other grouping variants to really refine what we're after.
>
> **[9:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=587)** But we're going to talk about that more in next lessons.
>
> **[9:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=590)** For now, we'll just show an example.
>
> **[9:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=591)** Hey, we can order by the full name of the park or we can select distinct states, so distinct values for state that exist in the park's dataset.
>
> **[10:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=602)** And that's it.
>
> **[10:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=603)** That's a bit about joins, it's a bit about comparisons, and a bit about filtering.
>
> **[10:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=606)** That'll show up in the exercises, and it's really important foundational work to understand when you're investigating a data set and you want to drill down into a specific piece of data.
>
> **[10:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/joins-and-comparisons?u=76281980&t=615)** Up next, we'll be talking a bit about aggregations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Transformation]] (2), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (5), nps (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** we talked about (1), in the last (1)
> **Warnings:** caveat (1), gotcha (1)
> **Speakers:** - [instructor] (1)

#### [Aggregations](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=0)** - [Instructor] In this lesson we're going to talk about aggregations.
>
> **[0:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=2)** And aggregations are really important.
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=4)** They might be the meat and kind of core of [[Data Transformation]] because aggregations help us describe things by the group that they exist in.
>
> **[0:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=13)** And we'll get started by loading our dataset and we're going to have some fun digging into the parks table here.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=19)** But we'll start with maybe the most basic aggregation, and that is count.
>
> **[0:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=22)** And so if you run a count star, if you're just counting the number of rows that exists for some dataset.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=28)** Here, we're counting the number of parks with a national park designation, but we can also count by state.
>
> **[0:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=34)** And so if we run this query, which is grouping by state and ordering by the number of parks, so theoretically the states with the most parks should be at the top, you can see we get a nice result here.
>
> **[0:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=45)** But this might not be the most accurate because as we saw before, states is actually a list of strings.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=52)** Or rather it's just a single string separated by commas.
>
> **[0:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=55)** And if it were a list of strings, we might have a different result.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=58)** Here you can see that row 16 is showing CA,NV, which we might want to be counted in California.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=65)** We might want that park to be attributed to being in both California and Nevada.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=69)** So if we're not careful about how our data's organized for the data types that exist in certain columns, we could actually miscount data.
>
> **[1:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=76)** And that might be really bad for downstream consumers or making a mistake in an analysis that we're doing.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=82)** So since states are defined by this comma separated strings, and if you watched the last video, you might be thinking, hey, I know how to fix that problem, right?
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=89)** We can get a list of states for each park and then explode or unnest that list into a table that has a row per park, per state.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=101)** So for example, if a park was in both California and Nevada, that our new table would show a row with the park in California and a row with the park in Nevada.
>
> **[1:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=111)** I'm going to run this cell here because it does just that.
>
> **[1:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=114)** And you can see the only extra step is that we're taking that split function that we used in the last lesson, and then we're unnesting that.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=121)** And unnests means that we're expanding that list of states into a row per state.
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=129)** Now you might be saying, "Well, hey, that's kind of like duplicate data in a sense," and you'd be right.
>
> **[2:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=134)** But for certain types of groups and certain types of aggregations, we actually want that duplicate data.
>
> **[2:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=139)** So we're intentionally duplicating the names of certain parks because we want to count them at the state level.
>
> **[2:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=145)** And that's an important part of data transformation in that sometimes it's necessary to duplicate records or alter the groups of data that we're analyzing in order to perform an accurate calculation over the groups we want.
>
> **[2:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=160)** So now that we have our list of parks by state, we can perform a more accurate aggregation by grouping by state and performing the count as we did earlier.
>
> **[2:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=172)** But what we'll notice this time is that there are actually six parks in California and more in each other state.
>
> **[2:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=177)** So second place, Utah, third place, Arizona.
>
> **[3:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=180)** This is different information than what we've previously had because of those cross border parks and the way that our state were forming.
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=188)** Again, this is a pattern, and this is something that's important to note because it'll resurface through the [[Representational State Transfer (REST)|rest]] of this course.
>
> **[3:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=193)** And that is, in order to count what we need to, we have to derive one row per state per park.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=198)** Our original query was at a different grain.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=200)** It was at a different level, and that meant that we were getting incorrect information when we transformed our data.
>
> **[3:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=207)** So first we inspect our data and determine what aggregation we want to perform.
>
> **[3:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=211)** In this example, it was counting parks by state.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=214)** Then we note the current shape or format of the data.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=217)** For example, is it at the state level, is it at the park level?
>
> **[3:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=221)** Then we know the desired format.
>
> **[3:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=223)** So in this example, we wanted the data to be at the state park level, and then we transformed the data to get it to the desired format, then aggregated.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=232)** So that might seem like a lot, but really this is just a pattern of analysis, a pattern of introspection for understanding the types of transformations we want to make and the way that we want to approach these problems.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=245)** And if you follow these steps, and if you think logically like this, soon you'll do it.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=250)** It'll be second nature, right?
>
> **[4:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=251)** If you do this for long enough, looking at the query, you'll just begin to think, oh, well, I need to get this to the certain grain, I need a row per state per park.
>
> **[4:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=260)** And it becomes like a habit.
>
> **[4:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=263)** But that can take some time, and that's why I'm breaking it down for you here.
>
> **[4:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=266)** So we could also ask the question, well, how do we find the campgrounds with the least and most sites using aggregations?
>
> **[4:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=272)** And this is going to be a bit more of a challenging problem.
>
> **[4:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=274)** So I'm going to walk through this because it can get confusing.
>
> **[4:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=277)** But if we break it down using the logic that we just talked about, we're first going to obtain the total number of campsites for each campground.
>
> **[4:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=285)** Well, we're only going to consider campsites in campgrounds for national parks.
>
> **[4:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=289)** We're then going to get the minimum and maximum numbers for those campgrounds, the minimum and maximum campsites.
>
> **[4:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=296)** And finally, we'll filter the results by those numbers.
>
> **[4:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=299)** And [[SQL]] is really great for this because with CTEs, we can actually do this in logical steps.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=303)** So here I have a CTE that does that, and we'll walk through exactly what we're doing.
>
> **[5:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=308)** So we're defining the query, park campgrounds, as selecting from nps_public_data.campgrounds, and joining in parks.
>
> **[5:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=317)** So we're taking our campgrounds, we're getting that ancillary park data on each campground.
>
> **[5:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=321)** And we can assume there's a one-to-one relationship here.
>
> **[5:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=324)** Actually, there's a one-to-many relationship.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=326)** There are many campgrounds in each park, but we don't have to worry about filtering out rows with this join is all I'm saying, basically.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=333)** So we're only looking for parks that are designated as national parks, and then we're getting the campground name, the park name, and the total number of sites by combining two other site fields.
>
> **[5:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=346)** Now, the cool thing about CTEs is that we can select directly from that, the preceding CTE, as if it were its own table.
>
> **[5:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=354)** So we're going to select from that park campground, CTE, and say, okay, well, I want the minimum number of sites and we'll call that min_sites.
>
> **[6:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=361)** And I want the maximum number of sites where sites are greater than 0.
>
> **[6:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=365)** And now we have our two numbers to filter on.
>
> **[6:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=367)** And so finally, we can select back from our original park campgrounds query and join in our min_max_site intermediate step on the total number of sites is equal to the minimum number of sites, or the total number of sites is equal to the maximum number of sites.
>
> **[6:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=386)** And then finally, we can order by the number of sites in the campground name.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=390)** And you can see we added in this little case 1 to designate exactly how we wanted to describe each result.
>
> **[6:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=396)** And so this is maybe a bit of a contrived example, but it's a really good way of showing the modular nature of SQL queries and the way that we can walk through the data step by step to achieve at a desired result.
>
> **[6:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=408)** Hey, I only want sites.
>
> **[6:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=410)** I only want campgrounds that have either the least or the most number of sites.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=413)** Well, if we break that down, it's really just three steps and we can get there really simply.
>
> **[6:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=418)** Now, this is something that'll be really good for using window functions, but we'll talk about that in the next lesson.
>
> **[7:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=424)** In the meantime, what if we wanted parks with the least and most number of sites?
>
> **[7:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=430)** Well, it's actually really similar logic.
>
> **[7:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=431)** There are just a few extra steps.
>
> **[7:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=433)** So we'll do something very similar where we get our park campgrounds, and then we're going to get the minimum and maximum number of sites.
>
> **[7:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=440)** Similarly, there's just one intermediate step, and that is that for each park, we're getting the total number of sites from park campgrounds, and that's it.
>
> **[7:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=450)** We're doing a similar join.
>
> **[7:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=452)** We're bringing that data all together, and we're running that cell to get the parks with the most sites and the least sites.
>
> **[7:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=459)** And the example here is really just to showcase that with any problem, if you break it down logically into the components that are sort of within that problem, you can get to a result pretty simply.
>
> **[7:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=469)** So another important aggregation pattern is using Boolean logic within aggregations, and you can do that as filters.
>
> **[7:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=476)** So we talked a bit about filters earlier in the course, but if you do a COUNT DISTINCT, or COUNT CASE WHEN, you can actually filter data only within that aggregation, and this could be really useful because sometimes we don't want to perform those filters in the left join or the inner join or even the WHERE clause, right?
>
> **[8:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=495)** But we do want to aggregate that data within the column that we're analyzing.
>
> **[8:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=501)** And so we can use an important aggregation pattern, which is Boolean logic within aggregations, for example, a COUNT DESTINCT or a COUNT CASE WHEN, that lets us filter out our count without filtering the underlying data.
>
> **[8:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=513)** And our example here is a similar query to what we just performed, where we're selecting from campgrounds, joining in parks, and then counting the number of reservable campgrounds as well as the number of first come first serve campgrounds for each park.
>
> **[8:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=527)** But we're doing that entirely within the count aggregation.
>
> **[8:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=531)** So you can see we're saying, hey, let's count the case when the number of sites reservable is greater than 0 then 1, end.
>
> **[8:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=538)** So what we're saying here is when the number of campsites is greater than 0, this statement will return the value 1.
>
> **[9:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=546)** When it's not greater than 0, it will return 0.
>
> **[9:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=550)** And so in that way, we can actually count how many sites are reservable because each campsite that has a reservable site will return 1 and we'll get the number of campgrounds.
>
> **[9:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=560)** The same thing is true for the second query.
>
> **[9:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=563)** So running this is going to get a count for the number of reservable campgrounds and a count for the number of reservable first come first serve sites.
>
> **[9:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=570)** Now that, again, might seem a little trivial, but it is a very useful way for filtering data and returning those counts.
>
> **[9:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=577)** So there are a lot more to aggregations, but they're pretty simple.
>
> **[9:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=581)** And we showed you a few ways to get started here, but the best way is going to be to practice.
>
> **[9:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=586)** So remember the basics, which is aggregations collapse rows, and that's what we've seen in these examples.
>
> **[9:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=592)** Rows that aren't being aggregated have to be grouped.
>
> **[9:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=595)** It's important to use that GROUP BY syntax.
>
> **[9:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=598)** Group statements appear at the end of the query, and duplicate rows can skew aggregates if they're not properly accounted for.
>
> **[10:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=604)** So be sure to understand what grain you're aggregating at and be sure to properly check your results.
>
> **[10:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/aggregations?u=76281980&t=610)** Give a quick sanity check, make sure that you're getting what you expect from your query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (2), [[SQL]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** count (4), cte (3), sql (2), case (2), distinct (1)
> **Cross-References:** as we saw (1), in the last (1), in the next (1), earlier in (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** nps_public_data (1), min_sites (1), min_max_site (1)
> **SQL:** where (1), group by (1)

#### [Windows functions: A quick refresher](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=0)** - [Instructor] So before we jump into window functions, I want to provide a quick refresher if you're a bit rusty or if you haven't worked with Window functions in a while, because they can be tricky.
>
> **[0:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=9)** And [[SQL]] [[Windows]] are kind of just like aggregates, but they're aggregates within these things called partitions.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=15)** So taking MAX, you know, performing that aggregation is both a window and an aggregate, but if you don't specify any partition, you're just taking the MAX of the entire data set and the order is predefined by the function.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=30)** There is an order in a MAX function.
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=32)** But something like a FIRST_VLAUE can have an order because the FIRST_VALUE function returns the first value of what you're selecting from just like the name would suggest.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=42)** It can have an order, a partition or a frame, and we'll talk more about those attributes later.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=48)** But comparing the two are MAX, which is just getting the largest value in a column.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=53)** And something like a FIRST_VALUE, which is over some frame where we might order by a number or partition by a group.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=62)** The two are pretty similar, but we can compare and contrast.
>
> **[1:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=64)** So you can just think about MAX as being a MAX over paren.
>
> **[1:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=68)** And because we're not specifying anything in that parenthesis clause, we're just taking a MAX of the entire data set.
>
> **[1:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=74)** So the order is predefined by the MAX function, and the window is the entire dataset.
>
> **[1:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=80)** By contrast, this other more complex window function, we're ordering by a unique column, num in that example, and we're partitioning by a group, which means we're breaking the data up into chunks and we can get multiple first values.
>
> **[1:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=95)** And this might feel a bit abstract, but we're going to jump into a tangible example in a second that should be more clear.
>
> **[1:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=100)** So there's also the possibility of a frame, which can shift groups within windows, and that can be complicated so we'll talk through that.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=108)** But it's important to understand this concept that aggregate functions on the left here, where we're just collapsing groups into one aggregate, are pretty similar to window functions only that window functions are aggregates over multiple partitions or multiple frames, and I'm sort of using those terms interchangeably, but we'll define each of them.
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=128)** So it's important to recognize that a lot of aggregates right on the left here, we're taking the max number of sites reservable and grouping by the parkcode is actually the same as the aggregate on the right or the window on the right where we're selecting the distinct parkcode and we're taking the max number of sites reservable over partition by parkcode.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=150)** And the reason those are the same is because of the way that aggregates and windows work.
>
> **[2:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=155)** And that is that in a window, the data's broken up into these partitions, which you can think about like groups.
>
> **[2:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=162)** And then there's a frame that can slide over the partitions depending on the order of the data.
>
> **[2:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=168)** So if we asked a question, for example, for each park, how many sites are in the five largest campgrounds?
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=174)** First we would have to say, okay, well we're taking a sum here, but we want the sum to be over the partition of our parks.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=183)** We're summing over the space of our parks.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=186)** And since we're looking for how many sites are available in the five largest campgrounds by number of sites, we need to order by the number of sites descending.
>
> **[3:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=195)** So in each partition, in each group, we're ordering by the number of sites in a descending order.
>
> **[3:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=201)** And then we're saying, okay, we only really want to sum the rows between, this is the syntax is a little funny, right, four rows preceding and the current row.
>
> **[3:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=211)** And that's just how window functions are phrased.
>
> **[3:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=213)** The rows are described as the last row to select and the first row to select.
>
> **[3:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=219)** So we're saying we want the rows between the fourth row from the current row, and this is an inclusive between statement.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=226)** So this statement is saying, let's sum the number of sites reservable over each park, and we're going to order by the number of sites reservable and only get the top five of those.
>
> **[3:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=238)** So that's exactly what we described with this graphic, although it can be pretty confusing.
>
> **[4:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=244)** Again, I'm going to walk through this one more time in more of a visual way so you can understand exactly what window functions are doing.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=250)** So in our example, we're saying, okay, we're going to partition by park, and you can think of partitions as the blue boxes in this example.
>
> **[4:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=258)** We're breaking the data up into independent chunks, and that's what a partition is.
>
> **[4:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=263)** Now, the second part of our clause is saying we need to order by the number of sites reservable.
>
> **[4:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=269)** So descending from greatest to least, we're going to order the data within each partition, that's an important point, from the most sites to the least sites.
>
> **[4:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=278)** Next, we're taking the rows between the fourth row proceeding and the current row, the current row being the first row of the data set.
>
> **[4:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=288)** So these red boxes are selecting the top five rows.
>
> **[4:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=291)** And then finally, the aggregation actually, the first thing that occurs in the window function, we're summing these rows.
>
> **[4:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=298)** And so that's it. That's this syntax.
>
> **[5:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=301)** And it can be confusing because in SQL, the aggregate comes first when in reality it's the last thing that's being performed in the operation.
>
> **[5:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=308)** But hopefully this visual example shows you just how we can break this transaction down and say, okay, well, we're going to sum over each partition where we're ordering by the number of sites for those top five rows.
>
> **[5:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=322)** And that's an overview of window functions, maybe a bit of a refresher.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=326)** If you're a bit rusty, I highly recommend writing some window functions or taking a look at other window functions online if you need some more practice.
>
> **[5:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows-functions-refresher?u=76281980&t=334)** But without further ado, we'll jump right into our part of the course on windows for DuckDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[SQL]] (2)
> **Env Vars:** max (8), sql (2), first_value (2), first_vlaue (1)
> **Analogies:** just like (2), similar to (1), for example (1)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Window functions](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=0)** - [Instructor] In this lesson, we're going to jump into window functions.
>
> **[0:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=3)** So hopefully had a chance to take a look at the window function refresher to understand a bit more about how window functions work, and maybe shake off a bit of the [[Rust (Programming Language)|rust]].
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=10)** So as usual, we'll get started with loading our database and we'll start with some sample questions that are well suited to window functions.
>
> **[0:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=18)** So a good idea is understanding the types of questions that one might ask when they need a window function, and then mapping that pattern as you come across different types of data.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=28)** For example, if we're asking which park has the most campsites?
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=32)** It may be in a data set of all the parks, that might be a good candidate for a window function, but more specifically, asking what's the second largest campsite in each park?
>
> **[0:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=41)** Or what's the running total of alerts for all parks?
>
> **[0:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=44)** Or even what's the seven day moving average of all alerts?
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=48)** These are all very well suited to window functions, because they involve having a perspective over taking another step back from an aggregation or looking within a group.
>
> **[0:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=59)** So in what's the second largest campsite in each park?
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=62)** Well, first we have to have a list of the largest campsites in each park and select from that list.
>
> **[1:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=68)** So that's an operation where a window function would save us a step.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=72)** Or what is the running total of alerts for all parks?
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=75)** First, we need to get a sum of the number of alerts for each park, and then perform a cumulative operation across those sums.
>
> **[1:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=84)** Again, another really good candidate for a window function.
>
> **[1:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=87)** And as we discussed, window functions are made up of three parts.
>
> **[1:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=90)** There's the function, there's a partition clause, and then there's also an order, and those are being aggregated.
>
> **[1:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=97)** So we discussed that already a bit in our refresher on window functions.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=101)** We're going to jump right into some examples.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=104)** So in this example, we're computing two different window functions.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=108)** First, just the MAX OVER each park, and then second, the first value or FIRST OVER each park.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=115)** And we're just looking at those values by different attributes, so we'll discuss each.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=121)** In the MAX clause here, you can see we're partitioning by the park name.
>
> **[2:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=124)** So what we're saying is for each park, which site has the maximum number of first come first serve sites?
>
> **[2:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=133)** Now you can think of this as identical actually to a GROUP BY column one, and then selecting the max value of that column.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=141)** And that's something I've tried to emphasize throughout this course.
>
> **[2:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=143)** And that is that certain window functions are identical to their aggregate counterparts.
>
> **[2:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=147)** And this is a great example.
>
> **[2:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=148)** And so for that operation, this first line here, FIRST value clause is actually returning the name of that campsite.
>
> **[2:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=157)** So we're saying, okay, what's the max number of first come first sites over our park name?
>
> **[2:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=164)** So for each park.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=165)** And then we're saying, well, actually, what's the name of that park?
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=169)** And if we take those campsites and order them by the number of first come first serve sites, and then select the first value, we're getting the name of the campground with the maximum number of sites.
>
> **[3:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=180)** And so you can think of this as equivalent to the operation we performed way back a couple lessons ago that took us three steps, right?
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=188)** We had to get a list of our parks, we had to perform that aggregate operation, and then filter where campsites were equal to the minimum or maximum value.
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=197)** Here we're actually doing that, but in one step, and we're doing it for both the number of first come first serve sites, the number of reservable sites, and the number of total sites.
>
> **[3:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=206)** And so this query's already been run.
>
> **[3:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=208)** You can see that for each park we're able to get that value and the name of the camp site that it is matched up to.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=217)** And that's really powerful.
>
> **[3:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=218)** Now, there are a few other functions that we're going to talk about that can be particularly useful.
>
> **[3:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=222)** Those are LEAD, LAG, and NTH_VALUE functions.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=226)** And so the names pretty much tell us exactly what they do.
>
> **[3:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=229)** LEAD returns the next value, LAG returns the previous value from a particular position, and NTH_VALUE returns a value at the index that you're going to tell it to.
>
> **[3:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=238)** And an important concept here is that these are all pretty much the same functions.
>
> **[4:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=243)** So it's important to keep in mind that things can get a bit confusing.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=247)** This example shows how to use LEAD and LAG and when they're equivalent to NTH_VALUE.
>
> **[4:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=252)** So LEAD is just going to get the next value, LAG, the previous value, and you can also specify a number of rows by which to kind of iterate on that function.
>
> **[4:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=262)** NTH_VALUE just takes the number of rows off the bat.
>
> **[4:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=265)** So here we're saying, okay, what's the previous campsite from our current row ordered by the number of sites here?
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=270)** Here we're getting the next campsite.
>
> **[4:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=272)** And that's relative to the original query.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=275)** So this can be a bit confusing, which is why I highly recommend taking a look at this query, kind of picking it apart, and logically looking at how these results differ in each query.
>
> **[4:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=286)** So for example, you know, when the current campsite is Thorndike campground, the previous result is Eureka Dunes, the previous previous result is none.
>
> **[4:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=295)** And you can see that that lines up with what we'd expect in the next row where the previous previous campsite is equal to the previous campsite.
>
> **[5:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=304)** An important call out.
>
> **[5:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=305)** The next group of window functions we're going to jump into are RANK functions.
>
> **[5:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=310)** And RANK functions can be really useful, but there are three of them.
>
> **[5:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=313)** So I'm going to run this cell and we'll dig back into those RANK functions.
>
> **[5:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=317)** So RANK, ROW_NUMBER and DENSE_RANK get confused pretty frequently, which is understandable, because they all kind of sound like the same thing, but they're slightly different.
>
> **[5:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=325)** ROW_NUMBER monotonically increases no matter what.
>
> **[5:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=329)** So if you have a list of values, we'll go down and take a look at this one.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=333)** You can see ROW_NUMBER is going to count up in all instances.
>
> **[5:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=337)** The difference in these three functions happens when there are ties in the number of values.
>
> **[5:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=341)** So you can see where we have 10 campsites for certain campgrounds, RANK is going to return the same value.
>
> **[5:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=349)** So 1, 2, 3, 4, 5, 6, 7, 7, 7.
>
> **[5:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=353)** DENSE_RANK does the same thing as a matter of fact, 7, 7, 7.
>
> **[5:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=356)** How do those two differ?
>
> **[5:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=358)** Well, DENSE_RANK continues to count up.
>
> **[6:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=360)** So we go 7, 8, 9, 10, whereas RANK skips those values 7 straight to 10.
>
> **[6:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=366)** So you can think of this as continuing to increment 7, 8, 9, 10, 11, 12.
>
> **[6:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=371)** And that's the only difference between those three functions.
>
> **[6:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=374)** So all three ROW_NUMBER, RANK, and DENSE_RANK are going to count the number, the current position of your row.
>
> **[6:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=383)** They're just going to handle ties and conflicts a bit differently.
>
> **[6:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=387)** And that's another really important concept for filtering data or selecting particular rows of data that you're going to come across a lot in [[Data Transformation]], and that we'll cover in our exercise.
>
> **[6:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=397)** But now we can talk about rolling averages.
>
> **[6:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=399)** And rolling averages are a concept that's actually surprisingly easier in [[SQL]] than [[Python (Programming Language)|Python]], thanks to the row based layout and language characteristics of SQL.
>
> **[6:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=411)** So in this example, we're going to select alerts from our table, and if we run that query, we're going to get our date and the number of alerts on each date from our alerts data.
>
> **[7:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=423)** And you can see that there aren't a ton of alerts each day.
>
> **[7:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=426)** So we can get a cumulative count, or which would be the first step to a rolling average.
>
> **[7:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=431)** We can get a cumulative count of these alerts by performing a sum on that COUNT(*) over all of the values and ordering by date time.
>
> **[7:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=440)** So this is a particular type of window function that lets us get a cumulative number of those alerts, which can be useful.
>
> **[7:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=447)** But rolling averages come in handy with all kinds of time series data.
>
> **[7:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=451)** For example, in financial metrics or in daily active users reporting, we might want to know a rolling weekly active users or a rolling monthly active users.
>
> **[7:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=461)** And that's a really useful metric, but we can't actually compute that here, because the dates are not consecutive.
>
> **[7:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=467)** We don't have an alert for every date.
>
> **[7:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=470)** So the average would be difficult and inaccurate, but we can generate a series to better get around this.
>
> **[7:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=476)** And this is a bit of a foreshadowing, 'cause we're going to talk about data generation later in our SQL lesson, but to kind of discuss how we would go about doing that, DuckDB has a really great function called generate series, which lets us specify two timestamps and an interval to generate dates between.
>
> **[8:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=494)** So when we go and SELECT our COUNT, and SUM OVER that COUNT, just like we were doing before, we can select from this date array.
>
> **[8:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=503)** And by joining in our national parks alerts data, we can then achieve basically continuous range of dates where for the dates without any alerts, we're getting a zero.
>
> **[8:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=516)** And for the dates with alerts, we're maintaining that accuracy.
>
> **[8:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=519)** So now that we have that continuous date range, getting a rolling average is really straightforward.
>
> **[8:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=524)** We just need to, as we discussed earlier, use that frame clause to get the rows between six rows proceeding and the current row since those are inclusive.
>
> **[8:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=536)** So here we're saying, doing exactly what we did before.
>
> **[9:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=540)** We're getting the cumulative number of alerts, and then we're saying SUM COUNT(a.id) OVER ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.
>
> **[9:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=548)** And that's going to give us a sum of those numbers.
>
> **[9:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=551)** Actually, this isn't even the average we're looking for.
>
> **[9:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=553)** We'd change this to average to get that rolling average.
>
> **[9:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=556)** Or identically, we could say SUM and divide by seven, because we're looking at seven rows in each frame.
>
> **[9:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=564)** And so that'll then give us the seven day rolling average of the alerts.
>
> **[9:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=569)** So it's important to see how the frame clause is sort of instrumental in building these window functions and instructing that SQL query planner, which rows to aggregate.
>
> **[9:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=580)** And that's pretty much it.
>
> **[9:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=581)** That's the basics of window functions.
>
> **[9:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=582)** If you can understand how to break down the question that you're trying to answer into these concepts of aggregates, partitions, and frames, you've really mastered [[Windows]].
>
> **[9:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=591)** That's all there is to it.
>
> **[9:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=593)** And it can definitely be intimidating at first.
>
> **[9:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=595)** It can definitely take some time to get used to them, but I really advise you to play around in the exercise and practice on your own with writing window functions, because I think once you get it, once you understand how they work, it'll just totally click and make sense.
>
> **[10:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=609)** So that's it for window functions.
>
> **[10:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/window-functions?u=76281980&t=610)** In the next lesson, we'll jump into some more advanced concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Rust (Programming Language)|Rust]] (1), [[Data Transformation]] (1), [[Python (Programming Language)|Python]] (1), [[Windows]] (1)
> **Env Vars:** rank (7), lead (4), lag (4), nth_value (4), row_number (4)
> **Cross-References:** we discussed (3), in the next (2), later in (1)
> **Analogies:** for example (3), just like (1)
> **Definitions:** is a  (3)
> **CLI Commands:** python (1), make (1)
> **SQL:** group by (1), select (1)
> **Versions:** go 7 (1)

#### [Advanced filters](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=0)** - [Instructor] So now that we've talked about window functions, we can jump into some advanced filtering concepts.
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=4)** And when I say advanced filtering concepts, I just mean filters that act on groups or window functions.
>
> **[0:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=11)** And those are QUALIFY and HAVING in [[SQL]], and you'll see this less often than the WHERE clause, but you can think about them as very similar to that clause.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=21)** But HAVING is like a WHERE clause for aggregates and QUALIFY is like a WHERE clause for window functions.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=28)** So we'll load our database here, and in this first sample query, you can see we're selecting the number of campsites, the total number of campsites from our campgrounds, very familiar query.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=40)** But if we tried to filter WHERE the number of campsites are greater than 100, we won't be able to run that query.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=47)** And the error that we're going to get is because number of campsites is actually an aggregate function.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=52)** It's a sum.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=54)** So in this case, if you wanted to filter on this, you'd have to create a CTE.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=58)** And we can do that here, you know, you'd create something like WITH num_campsites AS, and drop a paren around this.
>
> **[1:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=66)** Then we'd have to SELECT from that, that CTE.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=69)** SELECT * from num_campsites, WHERE num_campsites.
>
> **[1:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=74)** And this is pseudo code, right, where num_campsites is greater than 100.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=78)** And we'd be able to filter that, but that's a little bit long for our taste, right?
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=81)** We don't want to go through all of that.
>
> **[1:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=83)** We just like to do it in one function.
>
> **[1:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=85)** So the way that we do that, the way we get around that is by using the HAVING clause.
>
> **[1:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=90)** And it seems kind of like magic, but all we're doing here, the HAVING clause is just executed after that aggregation occurs.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=98)** So we can run this function and we're going to get our parks that have greater than 100 campsites.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=104)** So again, really simple concept, but can come in handy when you're building queries.
>
> **[1:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=109)** Similarly, qualified is just like that, but for window functions.
>
> **[1:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=113)** And a really powerful combination is using qualified with row number or rank.
>
> **[1:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=119)** So in our example here, as we talked about in our last lesson on window functions, row number and rank can ascribe a number, can iterate over the results of that function.
>
> **[2:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=130)** And we can use the QUALIFY clause to say, okay, well like, let's get the number where, get the campground, where that rank is equal to two.
>
> **[2:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=139)** So in this example, we're getting our campgrounds, we're getting the total number of sites, and then we're calculating these values.
>
> **[2:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=145)** Our QUALIFY value's going to filter on the second largest, I believe, number, second largest park by number of campsites, second largest campground, rather, because we're ordering by the campground number of sites and running this, you can see that for each park, we're getting the second largest campground.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=165)** And this is actually a calculation we've performed earlier in the course, but we're doing it in a really concise way.
>
> **[2:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=172)** So those are two advanced filters for you.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=174)** And hopefully, those help you in your queries be a bit more concise, maybe avoid an extra CTE, avoid a few extra lines of SQL and get to the answer you're after much quicker.
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=184)** And that's it for advanced filters.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters-24030013?u=76281980&t=186)** Up next, we have some advanced JOIN concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** where (5), qualify (4), having (4), cte (3), sql (2)
> **SQL:** where (5), having (4), select (2), join (1)
> **Code Identifiers:** num_campsites (4)
> **Analogies:** just like (2), similar to (1), kind of like (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Advanced joins](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=0)** - [Instructor] So now that we've discussed some advanced methods of filtering data, it's time to talk about how we can join data in some advanced, or maybe uncommon ways.
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=10)** And there are two main things I want to cover here.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=12)** First is going to be how to use a cross join, and second, the importance of self joins.
>
> **[0:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=17)** So joins can be really useful, actually just bringing data onto itself can be really useful for generating combinations of data, but then also simulating events or interactions, and I'll show you a few examples of what we mean here.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=30)** But the one thing that's important to remember is that cross joins join every record in one column to every record in another.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=40)** And so the note I have here, right, if you cross join two 1000-record tables, two 1000-record rows, you'll produce a million rows in the resulting dataset.
>
> **[0:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=49)** So it's important to consider magnitude when you're doing cross joins.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=53)** If we're looking at something like national parks, it's okay, because there are only like 60 or so parks and you know, [[SQL]] and even embedded [[Databases]] like DuckDB can handle even a million rows.
>
> **[1:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=63)** That's not a huge deal.
>
> **[1:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=64)** But as a practical example, say we wanted to go to Joshua Tree Campground and camp at two different campsites.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=70)** Let's think about those combinations and the second campsite should be different than the first.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=75)** We don't want to go to the same campsite twice.
>
> **[1:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=77)** So how could we write a cross join that gives us all of the combinations of campgrounds we could possibly attend?
>
> **[1:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=83)** And in [[Data Transformation]], it's not often that we'll be looking at combinations and permutations like this, but you'd be surprised the number of cases where cross joins come in handy.
>
> **[1:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=94)** For example, if you have one table that has multiple types of records that you need to compare against each other.
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=102)** And the way that we'd approach this question is first using a CTE to define our list of records.
>
> **[1:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=107)** So we're selecting from public data campgrounds and parks, and then we're filtering where the full name of the park equals Joshua Tree Campground.
>
> **[1:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=116)** And you'll notice something I haven't done before in this course is that I'm defining that inner join with the using parameter.
>
> **[2:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=122)** And that just says it's the same as an inner join where we're saying p.parkcode = c.parkcode.
>
> **[2:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=132)** So that's all the using syntax is, is it's just a shorthand where both of the column names are the same in both tables.
>
> **[2:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=138)** And then for the cross join, I'm going to select the name from the first join, and then I'm aliasing the cross join separately and saying, okay, the first name can't be equal to the second name.
>
> **[2:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=149)** And all I'm doing in this case is generating those unique rows for each column.
>
> **[2:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=153)** So it can be helpful to like visualize these.
>
> **[2:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=155)** And if you see a cross join, again, I'll probably say this again, but it can be helpful to visualize what's happening in the join for a single row.
>
> **[2:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=163)** So I don't think I initialized this connection here.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=165)** I'm going to run that cell quickly and then I'll execute this to see what we get.
>
> **[2:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=170)** But this is a really good example because you can see here for say, White Tank Campground, every other campground in the park is going to be cross joined into this record.
>
> **[2:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=179)** So you could imagine White Tank right, on one line, and then we have a list of each other campground, but that happens for every single campground.
>
> **[3:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=187)** And then we're filtering the final record to say that the name of the first can't be equivalent to the name of the second.
>
> **[3:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=194)** And again, if we're looking at these results, it's really helpful to visualize them for just one record.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=200)** So we'll say AND name, well, jtc.name = "White Tank Campground".
>
> **[3:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=208)** So running this, we get the errors.
>
> **[3:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=211)** Let's see what we did wrong.
>
> **[3:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=212)** Binder error, not found in from clause.
>
> **[3:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=213)** Okay, jtc.name, drop this.
>
> **[3:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=221)** Oh, so here's something you might encounter in working with DuckDB, you actually have to use single quotes in the filters.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=228)** The double quotes are reserved for column names.
>
> **[3:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=230)** So that's actually important to call out.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=232)** But if we filter this on only one campsite, you can see that every other campsite in the park is listed that doesn't have the name equal to White Tank.
>
> **[4:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=241)** So we're getting all of the combinations if this was the first attendance.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=245)** And so now imagine duplicating these results for every single campground.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=250)** That's effectively what we're doing with the cross join here.
>
> **[4:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=252)** And I just want to make that really clear because this can be a tricky concept.
>
> **[4:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=255)** But if we go back to our original question, our original example, running that query, we see that there are actually 72 different combinations that you could attend using this method and this generalizes.
>
> **[4:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=266)** So if I said the same thing, well, what about three nights at this campground, right?
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=270)** What are three different campsites we could camp at that aren't the same in that order?
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=275)** We could do the same thing.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=275)** So we're going to cross join again, exactly what we just did, and we're going to pull in a third campground record.
>
> **[4:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=281)** We're going to cross join twice and then filter where the name of the first night isn't equal to the name of the second night, the name of the first night isn't equal to the name of the third night, and then the second night isn't equal to the third night either.
>
> **[4:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=294)** So running that, we're going to get something similar.
>
> **[4:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=296)** And hopefully you're starting to build a mental model for how this is working and what we're filtering out.
>
> **[5:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=300)** But you can see here there are about 504 combinations.
>
> **[5:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=304)** So we can also use that earlier example of unnesting states to aggregate on cumulative counts.
>
> **[5:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=311)** So since our parks table, if you haven't noticed yet, also contains trails, it contains national parks and a few other types of monuments or trails, we could perform a self join on an unnested state CTE.
>
> **[5:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=324)** So we're going to, you know, aggregate on those states.
>
> **[5:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=327)** And then as we did in a earlier lesson, unnest them.
>
> **[5:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=330)** That is expand them into one row per state, per park.
>
> **[5:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=334)** And then answer the question, well, for states with a national park, how many national trails are in that state?
>
> **[5:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=340)** So in our first CTE here, we're using UNNEST and SPLIT as we did in an earlier lesson to get a list of parks by state.
>
> **[5:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=350)** And this is kind of what I was referring to earlier in the lesson when I said, in a table there might be records with multiple designations.
>
> **[5:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=356)** So there are both national parks and national trails, and we're going to define this CTE in two ways.
>
> **[6:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=364)** So we can say, okay, the parks part of that CTE, let's ignore the left join.
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=369)** So imagine this isn't here for now.
>
> **[6:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=370)** The parks part of this CTE are the records where the designation equals national park.
>
> **[6:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=376)** So those are our parks.
>
> **[6:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=377)** Now we're going to say you can ignore everything except for this left join here, right?
>
> **[6:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=381)** We're joining in the same data, right?
>
> **[6:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=383)** And we're joining it on state because each record is by row, by state.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=390)** And we're saying the designation is like a trail.
>
> **[6:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=393)** So we have both our parks and we have our trails.
>
> **[6:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=397)** They're coming from the same data, but we're defining them slightly differently.
>
> **[6:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=400)** And so we're virtually, you could think of this as like virtually creating two different data sets, but then joining them into themselves to count the distinct parks and trails.
>
> **[6:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=412)** And an important point is that we're using states as sort of the unique value.
>
> **[6:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=417)** So there will be duplicate records and that's why count distinct works here.
>
> **[7:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=422)** But if I uncomment this and execute it, you see we get states and a count of the distinct number of national parks as well as national trails.
>
> **[7:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=431)** And so it's important to note that the filters are really important, like we just talked about.
>
> **[7:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=437)** The base query is selecting those parks.
>
> **[7:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=439)** So the filter is going to appear in the where clause as I just showed you.
>
> **[7:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=442)** Now the self join is pulling in trails, so the filter's in the join clause there.
>
> **[7:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=448)** And that's why we need to use that distinct count to make sure that the names are accounting for multiple records with the same value, because there will be duplicate values in this join and that's okay because it's helping us accomplish what we need to in the end.
>
> **[7:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=461)** So the two patterns here that we're talking about are one, self joins, and two, cross joins, and there's a little summary of what those are for you there.
>
> **[7:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=469)** And they can be really helpful in helping you manipulate data into a format that lets you unlock some other analysis.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=475)** And those will both be covered in our exercise as well.
>
> **[7:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=479)** But this is a bit about advanced joins.
>
> **[8:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=481)** Up next, we're going to cover Lambdas and UDFs.
>
> **[8:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-joins?u=76281980&t=483)** It should be a little bit of a shorter lesson and it is a bit more specific to DuckDB, but we'll talk about that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Databases]] (1), [[Data Transformation]] (1)
> **Env Vars:** cte (6), sql (1), unnest (1), split (1)
> **Analogies:** imagine (3), for example (1)
> **Cross-References:** go back to (1), earlier in (1), in the next (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Lambdas and UDFs](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=0)** - [Instructor] So, we've covered most of the advanced [[SQL]] concepts that we're going to talk about.
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=5)** And this lesson's a little different.
>
> **[0:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=6)** It talks about two things specific to DuckDB or specific to the SQL dialect you'll be working with.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=12)** And so, that's an important point to note that different variants of SQL, so if you're writing against maybe a cloud native database like BigQuery or Redshift, these variants of SQL have different functionalities and so, you can do some things in certain variants that you can't in others.
>
> **[0:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=27)** But one of the cool things about DuckDB is that it has a lot of functionality.
>
> **[0:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=31)** So we can simulate some of the features that you'll bump into as you explore different SQL [[Databases]] whether that be [[PostgreSQL|Postgres]], or [[MySQL]], or SQL Light.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=40)** But the two concepts we're going to talk about here are Lambdas and UDFs.
>
> **[0:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=44)** And UDFs stands for user-defined functions.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=47)** The name is pretty much exactly what it sounds like.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=50)** They're functions that we define and execute arbitrarily.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=53)** I'll run the first cell, we'll get into this lesson.
>
> **[0:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=55)** So if you know, the note here says if you end up working in data and [[Data Transformation]], it's pretty likely UDFs are going to come in handy at some point.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=62)** And this lesson is mainly to let you know they exist and show you some basic functionality.
>
> **[1:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=68)** So DuckDB supports [[Python (Programming Language)|Python]] user defined functions.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=70)** This is pretty cool.
>
> **[1:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=71)** It means you can use that function like it was SQL on any dataset.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=75)** So any Python library, any Python transformation that you can do can be done in DuckDB effectively.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=82)** And the important point is that these can be a bit slow to run, but it's just another tool in our toolkit, our data transformation toolkit as we're thinking about how to execute different transformations, right?
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=96)** Can I do something easily in SQL? Maybe the answer is no.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=98)** And then if you can do it easily in Python, maybe you're thinking now, oh, hey, well, I can build a user-defined function and execute it in DuckDB.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=106)** And in some instances, that'll make more sense than exporting a SQL data frame and then performing Python on it somewhere else, right?
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=115)** You can do that all within the same interaction if we're defining these user-defined functions.
>
> **[2:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=120)** So here's an example of how you can do that.
>
> **[2:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=122)** The DuckDB docs also have a really good example for this particular transformation, but I'm going to import a few libraries.
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=128)** The Faker Library is just a Python library that lets me generate fake data or random data.
>
> **[2:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=134)** And here, we're adding a provider emoji.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=136)** And so, this is going to let us generate random emojis with the Faker library.
>
> **[2:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=140)** So running that create function command on our connection.
>
> **[2:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=144)** So conn is defined, we're defining the initial DuckDB connection and then we're registering the function random emoji.
>
> **[2:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=152)** So we're naming the function random emoji registering that function under this name.
>
> **[2:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=158)** This is just a default value, it's of type varchar.
>
> **[2:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=162)** We haven't talked a lot about database types, but that's just like a string type that's necessary for the emoji.
>
> **[2:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=167)** And then finally, this like side effects parameter, just says that we want it to regenerate the function every time we run it.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=174)** That's optional, but otherwise, I noticed this function just gives the same random emoji for every column without that parameter enabled.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=181)** So since we created the function in the connection, we can actually just call it directly in SQL.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=186)** And this one's a bit playful, this is kind of fun.
>
> **[3:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=189)** I'm going to run this 'cause it takes a second.
>
> **[3:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=190)** But we're going to select the full name of a park and then we're just going to call that random emoji function as wave, (laughs) so we're saying, hi.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=198)** It takes a little while to run.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=200)** This is just a side effect of some of the DuckDB stuff, some of the slowness in random functions.
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=205)** So this is actually an important point that UDFs a lot of times aren't optimized.
>
> **[3:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=209)** So sometimes when you call functions like this, you might notice that they do take a long time to run even though it's doing something really simple.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=217)** So when you're adding in arbitrary functions, this is something that if you end up learning about Spark, this is a bit of a tangent, but if you end up learning about Spark or distributed computing, a lot of query planners can't.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=228)** And a query planner is just the way that the [[Algorithms]] work in the database to execute what you're telling it to.
>
> **[3:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=234)** But a lot of query planners can't actually account for the complexities of these UDFs.
>
> **[3:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=239)** So stuff like this ends up taking 25 seconds, right?
>
> **[4:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=242)** But the function worked, we're calling and the point isn't what we're doing here, but the point is to show you that in a SQL query, we're calling a Python function that we arbitrarily defined.
>
> **[4:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=253)** And that's pretty cool.
>
> **[4:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=254)** And there's a lot of useful things you can do with this.
>
> **[4:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=257)** And again, the point of this lesson is really just to let you know that it exists.
>
> **[4:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=260)** So I'll give you something that maybe is a bit more useful than just throwing out random emojis in a Jupyter Notebook.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=267)** So here's another example, and that's if you're writing some SQL, maybe you've written SQL before, how can you think of a way to swap the casing of every single letter in a SQL query?
>
> **[4:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=276)** So uppercase to lowercase, lowercase to uppercase.
>
> **[4:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=279)** It's actually kind of hard.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=280)** I can't think of one off the top of my head, but it's actually really easy to do in certain Python libraries.
>
> **[4:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=284)** So the Pyarrow library has a compute module that actually contains a function UTF8 swap case that does exactly that.
>
> **[4:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=291)** So we're just going to define our swap case function to return exactly that Pyarrow function.
>
> **[4:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=297)** And we can, again, register that function in our connection.
>
> **[5:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=300)** And so, now, when we run a command that might otherwise be really hard to do in SQL, we instantly get a result.
>
> **[5:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=307)** This one's really fast, so you can see that's more of a efficient function.
>
> **[5:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=311)** And again, this isn't going to be present in the exercise or anything like that.
>
> **[5:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=314)** It's really just to make some of these new, maybe, less-often used capabilities of some SQL dialects available to you as a data practitioner.
>
> **[5:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=324)** So we just talked about UDFs, user-defined functions.
>
> **[5:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=328)** The other concept that DuckDB supports are called Lambdas.
>
> **[5:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=331)** Now, Lambdas means a lot of different things in software engineering, so I want to be very specific.
>
> **[5:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=337)** Lambdas in the sense of DuckDB means a function that operates on every item in a list.
>
> **[5:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=342)** There are similar Python functions that we'll talk about in the [[Pandas (Software)|Pandas]] transformation that use the term Lambdas.
>
> **[5:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=349)** Really, let's focus on operating on every item in a list.
>
> **[5:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=352)** For example, list transform. So let's give an example here.
>
> **[5:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=356)** We've asked this question before, but what parks are fully or partially in Utah?
>
> **[6:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=361)** We're going to take the full name of the park.
>
> **[6:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=362)** We're going to split that string like we've done about 10 times already, and then we can perform operations on every part of the list.
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=369)** So right, remember, this is returning a list of states.
>
> **[6:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=372)** So this looks something like UT, AZ, NV.
>
> **[6:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=376)** The AI was right in that one, but this looks something like that.
>
> **[6:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=380)** And when we run that, maybe we want to do something to every state on the list.
>
> **[6:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=384)** So maybe we want to lowercase it, or we want to call our UDF that we just defined the swap case function.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=390)** So you'll see here that if I run the cell, we're going to get the full name of our park, we're going to get our states.
>
> **[6:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=397)** And then these are separate elements in this list, right?
>
> **[6:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=400)** This isn't just a string.
>
> **[6:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=401)** For each element in the list, we're performing this list transform on that element.
>
> **[6:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=405)** And the syntax is a little weird, you know, it's like X, arrow symbol, lower x, but you can kind of read it.
>
> **[6:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=412)** You can kind of understand what's going on.
>
> **[6:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=414)** And the way I like to read Lambda functions or things like this, you'll see something similar in Pandas, is for each X in the list, apply this function to x.
>
> **[7:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=425)** Pretty simple when you break it down that way.
>
> **[7:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=427)** But again, this is something, I think it's important to mention.
>
> **[7:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=430)** DuckDB has available.
>
> **[7:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=432)** It won't be exactly the same if you go to something like a BigQuery or a [[Snowflake]], or it might not even exist in like a MySQL or a Postgres.
>
> **[7:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=439)** These are all different types of databases.
>
> **[7:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=441)** But it's important to be aware of, hmm, well I have data that's structured this way, how do I transform it?
>
> **[7:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=447)** And the types of thinking that you'll want to start practicing is, okay, what environment am I operating in?
>
> **[7:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=453)** What functions are unavailable to me? What exists?
>
> **[7:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=456)** The most important thing to understand is what the universe of what exists.
>
> **[7:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=459)** So my hope in showing you this is that you say, okay, well, now I know that I can do this thing to data that is structured this way, and you can take it wherever you go.
>
> **[7:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=467)** So other functions in DuckDB like list reduce or list filter can be helpful too.
>
> **[7:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=472)** So we're using that same query and list reduce does the opposite of that split function that we've been doing.
>
> **[7:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=479)** So we can use a list reduce to define two variables, and we're saying X, Y, and we're concatenating X and Y.
>
> **[8:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=486)** So that's kind of like saying for each pair in that list, we're going to transform it back to a string by concatenating it.
>
> **[8:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=492)** List filter is saying for every item in that list, if that item does not equal Utah, return that list.
>
> **[8:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=501)** And so, we'll see what happens when we run this.
>
> **[8:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=503)** We have our original string.
>
> **[8:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=506)** We're chopping that up into a list as we've done many times.
>
> **[8:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=510)** And then we're using list reduce to convert that back to a string.
>
> **[8:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=514)** But notice we're adding in a space here which is why this looks different.
>
> **[8:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=517)** And then finally, we're using list filter to filter out the records that include Utah in our original list.
>
> **[8:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=526)** So this is some ways you can manipulate lists within a SQL query.
>
> **[8:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=530)** A lot of times, you know, it can be pretty tedious to explode lists, join them back together, do crazy stuff.
>
> **[8:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=537)** So this is pretty concise.
>
> **[8:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=538)** Again, I wouldn't worry too much about a lot of this.
>
> **[9:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=542)** A few concepts might be in the exercise, but a lot of the UDFs and crazy list stuff won't.
>
> **[9:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=547)** Again, the more important thing here is to know what's possible and know the universe of functions that exists, so that when one day you're working in a Jupyter Notebook and/or you're at your job and you're like, hmm, how do I transform this data using SQL?
>
> **[9:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=560)** You think, oh, maybe this variant has a list transform or a list filter, or a list reduce function.
>
> **[9:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=567)** And then you can look that up.
>
> **[9:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=568)** So the patterns we talked about in this section are user-defined functions which are ways of defining Python or [[JavaScript]] in some databases that you want to execute within SQL, as well as Lambdas which operate on every element in a list.
>
> **[9:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=581)** And that can be valuable for keeping those struct or list columns intact without needing to re-explode and recreate them, as I discussed.
>
> **[9:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=589)** Up next, we're going to talk about data generation.
>
> **[9:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=591)** That's the last lesson before we'll let you jump into the exercises.
>
> **[9:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=595)** Data generation is pretty cool.
>
> **[9:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/lambdas-udfs?u=76281980&t=596)** I think it's important in some data transformation use cases, but that's it for Lambdas and UDFs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (19), [[Python (Programming Language)|Python]] (10), [[Databases]] (3), [[Data Transformation]] (3), [[PostgreSQL|Postgres]] (2)
> **Env Vars:** sql (19), utf8 (1), udf (1)
> **CLI Commands:** python (10), mysql (2), make (2), az (1)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** just like (1), for example (1), it's like (1), kind of like (1)
> **Tools:** jupyter (2)
> **Cross-References:** we talked about (1)
> **UI Navigation:** select the (1)

#### [Data generation](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=0)** - [Matt] So we've made it to the last lesson in our [[SQL]] section, and this lesson's going to be about data generation.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=7)** And you might be thinking, "Okay, well, Matt, we're transforming data, we shouldn't be generating more data."
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=12)** But data generation is actually a pretty important concept and I'll give you an example, which we'll talk about more later in this course.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=19)** But if you have a result or a data frame with a non-continuous range, for example, the number is 135 and you want to compute an average, or you want to otherwise measure a rolling window over that range, you can't do that accurately without continuous numbers.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=37)** So a common pattern is generating a range of data, so say the numbers zero through five, and then joining data into that range to have continuous values with either nulls or zeros or that data doesn't exist.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=50)** And so I'm going to show you how to do that in SQL, this might come in handy for other uses.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=54)** I've used data generation ranges of numbers for a ton of things in my own data journey, and I'm sure you'll find some use cases where they come in handy, so this is a really important lesson to pay attention to.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=65)** So I'm going to run the initialization cell here.
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=67)** And in the first, I'm just showing you a very simple way of doing this in DuckDB, and most SQL [[Databases]], most of the newer technologies and all of the cloud providers at this point, I think, have a way to generate data.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=81)** In DuckDB it's simply the range function, so the syntax for the range function goes: a start, end, end, also step, so I could do like by twos here.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=92)** But we'll just run this one so you can see we get 0, 4.
>
> **[1:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=95)** If I wanted to add the step function in, you can see we get 0, 2, 4, 6, 8, et cetera.
>
> **[1:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=100)** And, well, let's see if this is inclusive?
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=104)** Order range descending.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=106)** So, is not, this is exclusive, right?
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=108)** So we don't have 100 in here.
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=110)** So if we wanted a range from 0,100 we would have to include that value.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=115)** And as I just showed you, we can also increment by different values, so if we did 2 or 4 or 5 and run this, we're going to get 0, 5, 10, 15, et cetera.
>
> **[2:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=124)** Now where this becomes more valuable is that you can also generate dates.
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=128)** Sometimes it's the same function, in DuckDB it's the same function, other times it's different functions so you need to look for a specific date range function.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=136)** But if we're being sure to define these dates as, indeed, dates and specify one day we can run this to generate a range of those dates.
>
> **[2:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=145)** Look at that.
>
> **[2:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=146)** So you know, pretty simple to generate five years worth of days when using DuckDB.
>
> **[2:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=152)** So why is this useful?
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=154)** Well, imagine you'd like to pull data in from multiple sources, or generate a running aggregation as I just talked about, right?
>
> **[2:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=160)** We can't always be sure that every date or number is present and if we're, especially if we're computing an average over a date range, or if we're computing a window function, we need to make sure that every date's accounted for.
>
> **[2:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=170)** So generating a range allows us to be sure everything's covered.
>
> **[2:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=173)** And in the example I'll show you here, right?
>
> **[2:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=175)** We have our alerts data, which we saw in our window example, right?
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=181)** Does have uncontinuous ranges.
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=184)** So if you haven't seen that video yet, jump back and take a look at the example where I generated date range.
>
> **[3:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=189)** This is very similar.
>
> **[3:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=190)** When we have those gaps, we're going to get misrepresentations or inaccurate results for window functions over those.
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=197)** So we're taking our alerts data and we're joining it into this date range, right?
>
> **[3:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=201)** So this function, which we just ran up here, is generating a continuous range of dates and then we're joining in our alerts data on that date number up here.
>
> **[3:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=210)** We're being sure to cast both of these to dates, so this is how you change the type of a specific value in SQL.
>
> **[3:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=215)** We're being sure to cast those and we're joining those in on the date itself and then performing a count over the distinct title of the alert to count the number of alerts.
>
> **[3:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=224)** And so you can see for every date we have a result, even if there are no alerts on that date, right?
>
> **[3:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=231)** So there was no alerts for the date February 2nd in the alerts table, but because we have that date range, we're still going to get an index.
>
> **[3:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=239)** You can think of this as an index with the right alerts.
>
> **[4:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=242)** So that's the point I really want to make here is that even on the days with zero alerts, days that would've been skipped without our generated ranges, we have values there.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=250)** And so check out the DuckDB docs to learn a bit more here, and if you're on BigQuery or another SQL database, be sure to check out date ranges for computing every row in a table because this is something that, like, it's hard to do in [[Python (Programming Language)|Python]] as we'll see, but is really simple in SQL.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=267)** That's another tongue twister.
>
> **[4:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=268)** I feel like there are a lot of those in this course.
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=270)** But that's it for date ranges and data generation generally and that's also it for our SQL lessons.
>
> **[4:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=277)** So that's been the SQL course, up next we're going to walk through our exercise, our challenge for you all that hopefully helps you memorialize what you've just learned and really take it to the next level.
>
> **[4:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=288)** I'm going to catch you in the next video, but awesome job so far.
>
> **[4:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation-24026425?u=76281980&t=291)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** make (2), find (1), python (1)
> **Cross-References:** later in (1), in the next (1)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [matt] (1)

#### [SQL challenge](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=0)** (intro music)
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=5)** - [Instructor] So we've completed the [[SQL]] lessons for the course, and now it's time for our SQL Challenge, and you'll have a chance to test your knowledge here.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=12)** For time, I'd allot a maximum of one to two hours for this challenge, and that's definitely on the upper estimate there.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=19)** I'd expect it would take you much less time.
>
> **[0:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=22)** And the reason is that the challenge falls directly from our work on SQL.
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=25)** Everything in this challenge we have covered in the course has been covered in either the repo or in the videos that we've been working through.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=33)** And solutions can be found in the course repo.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=36)** I'll show you where to find those and how to access them.
>
> **[0:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=39)** But we're also going to walk through those solutions in our next video.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=42)** So, if you want to go through that in a bit more detail, we're going to do that after you finish the challenge.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=48)** And finally, if you get stuck, I'd recommend you use Stack Overflow, use an LLM if you want, or take a peek at only the next step in the solution video or in that exercise solution file.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=58)** And really push yourself to think critically, because the whole point of this challenge is to understand the concepts that we've been discussing, understand [[Data Transformation]] with SQL, and apply what you've learned to these exercises.
>
> **[1:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=71)** We're going to take a look at the file and help you get set up, and then we'll jump right into the challenge.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=75)** But if you head on and over to the SQL folder and the blank exercise file, well first the completed exercise file is where you'll be able to find the solutions, but for now, we're going to deal with the blank exercise file.
>
> **[1:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=87)** Here you can load the database as we've been doing throughout the entire course, and you'll notice that the magic cells are set up with the percent SQL syntax.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=96)** So you should be able to run them just by typing in some SQL.
>
> **[1:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=99)** So, if we type in select one, hit shift enter to run, you see we get a result.
>
> **[1:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=103)** So, the questions will be directly above the cells.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=106)** For example, build a query to [[Fetch]] all the parks in Utah and order the results by the park name.
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=110)** You'll complete that exercise in each cell.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=112)** And the questions build on each other.
>
> **[1:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=114)** So, this is kind of a cumulative exercise.
>
> **[1:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=117)** Again, if you get stuck, I'd highly recommend checking out the completed exercise folder or Googling, searching up answers, figuring out how to build these on your own.
>
> **[2:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=125)** And if your solution doesn't match mine exactly, that's totally fine.
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=129)** One of the fun things about data transformation is that there's many ways to solve the same problem, and there's no such thing as the right solution.
>
> **[2:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=137)** And that's how you can come up with your own answers.
>
> **[2:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=140)** That's how you can come up with your own ways of doing things and really cement the knowledge that you've learned in this course.
>
> **[2:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=146)** So, after this video, we're going to jump into the solutions themselves.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=150)** We're going to walk through the exercise and pick things apart bit by bit.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-challenge?u=76281980&t=154)** So, give this your best shot and I'll catch you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Data Transformation]] (2), [[Fetch]] (1)
> **Env Vars:** sql (7), llm (1)
> **Exercise Files:** exercise file (3)
> **CLI Commands:** find (2)
> **Prerequisites:** set up (2)
> **Cross-References:** next video (1)
> **Documentation:** stack overflow (1)
> **Analogies:** for example (1)

#### [SQL solution](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=5)** - [Instructor] And we're back.
>
> **[0:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=6)** And now, we're going to walk through my solutions to the exercise.
>
> **[0:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=9)** And keep in mind, your results might look a little bit different, but that's one of the fun parts about [[Data Transformation]].
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=15)** There are many ways to do things and there's no such thing as a right answer.
>
> **[0:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=18)** So you might have learned something from how you did it that in a way that I didn't show in my solutions.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=24)** And feel free to share those in the comments.
>
> **[0:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=26)** Leave any thoughts or feedback that you have about these solutions.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=29)** I would love to hear them all.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=30)** I'm sure everybody else in the course would also benefit from your opinions and what you've learned in answering these problems.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=37)** So here, let's just jump into it and we'll get started walking through the questions.
>
> **[0:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=41)** So I'm going to run this first sale here.
>
> **[0:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=43)** And the first challenge was to build a query to [[Fetch]] all the parks in Utah and order the results by the park name.
>
> **[0:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=49)** I did this one pretty simply, we're just selecting from the parks dataset and we're saying WHERE states ILIKE '%UT%' and the percentage symbols symbolize that UT can be anywhere in that string.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=61)** And as we discussed in an earlier lesson, states is just a string.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=65)** So we don't have to do any parsing or anything like that.
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=67)** We can just say do the letters UT which is the state abbreviation for Utah, exist in that string.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=72)** So if you run that and we get the first five parks and we're ordering the result by the park name, so your result should look something like this.
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=79)** The next question, build a query to fetch all the national parks that cross state boundaries.
>
> **[1:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=84)** So there's a hint here, right?
>
> **[1:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=86)** And that is that the states is a string representation of a list.
>
> **[1:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=90)** So any park that crosses a state boundary has to have that comma in it.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=96)** So a very simple way to get the result here would be to look at a LIKE or ILIKE for that comma existing in the string.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=106)** Because if it crosses a boundary, it has to have more than one state.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=108)** And we also added in the designation here that we need national parks.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=112)** That's part of the question as well.
>
> **[1:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=114)** So you should see something like this.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=115)** There are only three results.
>
> **[1:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=117)** Moving on.
>
> **[1:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=118)** For all national parks, return the state's column as a struck type with each element as a state.
>
> **[2:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=123)** This is pretty much exactly what we discussed in one of the earlier [[SQL]] lessons on wrangling [[Unstructured Data]].
>
> **[2:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=131)** And again, on some aggregations, we're going to use that .db split function and then cast the result, which is the double colon sign to a list of strings to return that state list.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=142)** Again, we need that designation filter to make sure that we're only getting national parks.
>
> **[2:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=147)** But running this, we should get both the states and the state's list columns for the national parks that we're looking at.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=154)** Next up, a similar question to something we saw earlier in the lesson, which parks are in either Montana or Wyoming?
>
> **[2:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=161)** So we want a list of all the parks that are in Montana, all the parks that are in Wyoming, or even some parks that might be in both.
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=169)** So we're going to take the same query that we used for the last question.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=174)** It's almost identical.
>
> **[2:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=175)** And we're going to add the lis_has_any filter onto that states list with Montana, MT, or Wyoming, WY.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=183)** So that should effectively filter out states that are not Montana, states that are not Wyoming, but also include the union of those two.
>
> **[3:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=191)** So if I run that, we get three parks, Yellowstone, Glacier, and Grand Teton.
>
> **[3:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=196)** And you can see one of them is in both Montana and Wyoming.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=198)** One is in Montana and one is in Wyoming.
>
> **[3:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=201)** The next question is kind of a slight permutation of the last one.
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=205)** What about both Montana and Wyoming?
>
> **[3:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=207)** So we can already see that this should just return one park, Yellowstone.
>
> **[3:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=212)** And the only modification is the list has all filter on this query.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=217)** So we're going to run that. In fact, we do get Yellowstone.
>
> **[3:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=220)** So your solution should look a little something like this.
>
> **[3:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=224)** Following from that, which park is in the greatest number of states?
>
> **[3:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=227)** So which park crosses the most state boundaries?
>
> **[3:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=231)** I can already think of a few ways to do this, but the way that I did it was that I again, used that split function on the state's column, but then also applied a length function to the state's list.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=245)** So we're breaking that into a list of strings, counting the number of states that are in that list of strings.
>
> **[4:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=252)** And then ordering by that number of states descending, which will give us every park and the number of states that it's in.
>
> **[4:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=259)** But also the highest number of states right at the top, which we can see is Yellowstone.
>
> **[4:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=265)** I can already think of like three or four ways to do this.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=267)** So pretty likely that your solution differs, but that's totally fine.
>
> **[4:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=271)** And we can move on to the next question.
>
> **[4:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=274)** So now, how many parks are in each group of state border crossings?
>
> **[4:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=279)** This one's a little tricky, so I'll break it down for you.
>
> **[4:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=281)** So what we're asking here is for each group, so say, a park is in two states.
>
> **[4:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=286)** Say a park is in three states, right?
>
> **[4:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=289)** How many parks are in that group of border crossing?
>
> **[4:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=292)** And so we're grouping by the number of states, which means that we'll need to first break those list of strings up into our list, right?
>
> **[5:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=301)** Very similar query.
>
> **[5:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=302)** We're basically using this base query for many of the responses in this challenge solution.
>
> **[5:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=309)** But then we're going to select the number of states as well as a COUNT(*) as the number of parks from that number of states.
>
> **[5:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=318)** And we're going to order by one and group by one here.
>
> **[5:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=321)** And when you can see that really, there are only three different groups of state borderer crossings.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=326)** So there are parks that are in one state, there are parks that are in two states, and there are parks that are in three states.
>
> **[5:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=331)** And a vast majority of those parks are in one state.
>
> **[5:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=334)** But this is the distribution of parks by the number of states that they're in.
>
> **[5:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=338)** And again, we ask what's the percentage share of the total.
>
> **[5:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=341)** So this is a very simple window function example.
>
> **[5:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=345)** Basically, we would want to sum the total number of parks and then divide these number of parks by that total.
>
> **[5:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=351)** And you can see that's what we're doing here.
>
> **[5:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=352)** We're just adding an additional line where we're going to get the count by the number of states divided by SUM(COUNT(*)) OVER.
>
> **[6:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=363)** So this is maybe an important point and we can even add another line just to show you exactly what I'm doing.
>
> **[6:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=368)** So if we wanted to see the total number of parks, we can add this line in here.
>
> **[6:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=371)** And you can see that SUM(COUNT(*)) OVER () is just summing these three columns.
>
> **[6:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=377)** And so to get the actual percentage that we're after.
>
> **[6:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=381)** We would take the number of parks and divide it by the total number of parks, which is what we're doing in this third line that's not maybe as apparent without the extra step there.
>
> **[6:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=392)** So continuing our challenge, write a query that returns the largest campsite in each park.
>
> **[6:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=398)** So as a bonus, do this without using a CTE, which means that you're going to filter in the same query.
>
> **[6:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=403)** And that introduces some of the concepts we discussed in advanced filtering.
>
> **[6:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=408)** So this is maybe a little bit more complicated than the other examples 'cause we're going to use window functions.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=413)** And I'll break this up a bit with some spaces so we can break it down.
>
> **[6:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=416)** First, we're just joining our campgrounds to our parks table and then filtering on that national parks designation.
>
> **[7:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=424)** So we're going to select the park name, the campground name, and the total number of camp sites by adding up first come first serve sites and reservable sites as we've done in earlier lessons.
>
> **[7:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=434)** And then we're going to rank, we're going to get the rank of these sites.
>
> **[7:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=439)** So we're ordering by the total number of sites descending.
>
> **[7:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=443)** So the ranks will go in order from most camp sites to least and we're going to rank them in ascending format, partitioned by the name of the park.
>
> **[7:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=453)** And then we're using the qualify statement to avoid using a CT if filter.
>
> **[7:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=458)** And this should return the largest campsite in each park.
>
> **[7:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=461)** If I run this, you can see that we do in fact get the largest campsite with the number of sites for each park.
>
> **[7:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=468)** So that one's a bit more challenging.
>
> **[7:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=470)** The next couple questions will also be a bit of a stretch, but stick with me here.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=475)** These ones are kind of fun.
>
> **[7:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=476)** They're a bit more about combinations, permutations.
>
> **[7:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=479)** So this might come in handy.
>
> **[8:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=480)** I've used similar queries in a few jobs actually.
>
> **[8:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=484)** So say you'll be in California this spring and you have time for three national parks visits.
>
> **[8:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=489)** How many combinations of national parks can you visit?
>
> **[8:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=492)** Can you return the combinations in a list ordered by the name of the first park?
>
> **[8:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=497)** So if we break this down, there's a lot of steps.
>
> **[8:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=500)** First, we need to get every park that is in California, and that's a pretty simple query.
>
> **[8:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=506)** Kind of follows from the other queries that we've been writing, right?
>
> **[8:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=509)** Select star from parks where states contains the string CA and the designation is LIKE.
>
> **[8:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=515)** it contains national park effectively.
>
> **[8:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=519)** Now, we're going to be using the concepts from advanced joins to self do end cross join on that original CTE.
>
> **[8:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=527)** So I'm going to break down what's happening here.
>
> **[8:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=529)** We're taking California parks, so we're taking all the parks that are in California, and then we're joining every single row against itself.
>
> **[8:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=537)** So that's going to create quite a few rows.
>
> **[8:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=539)** We're actually doing it twice.
>
> **[9:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=541)** And the reason that we're doing it twice is because we have three visits.
>
> **[9:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=545)** So transforming data like this, it's helpful to imagine it kind of in your head.
>
> **[9:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=549)** You know, pick an example row.
>
> **[9:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=550)** So you have a parking California.
>
> **[9:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=552)** And then for that park, the second column will be every other park in California.
>
> **[9:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=558)** And then imagine duplicating that for each park.
>
> **[9:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=562)** You're going to have a lot of rows.
>
> **[9:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=563)** Then you're going to do that a third time.
>
> **[9:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=565)** So you know, the first row might be one park in California, and then for that park, you have every other park in California.
>
> **[9:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=571)** And then for every other park, you're adding another row with every other park in California.
>
> **[9:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=576)** So in a sense, we're generating a table that simulates visiting three consecutive places.
>
> **[9:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=583)** And that's kind of all that's going on here.
>
> **[9:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=587)** It's kind of a complex operation.
>
> **[9:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=588)** And then we're filtering to say, okay, well if we already visited the first park, we don't want the second park name to be the same because we're going to three different parks.
>
> **[9:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=596)** And if we already visited the first park, we also don't want the third park to be the same because we've already visited it.
>
> **[10:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=602)** And lastly, the second park also can't be equal to that third park.
>
> **[10:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=605)** So effectively, we're generating all these combinations, filtering out what we don't want based on the ordering and the name of the park, and then returning the row number.
>
> **[10:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=616)** So we're just really counting the number of results and ordering by that row number.
>
> **[10:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=620)** And you see that if we were on this query, there are 210 combinations of national parks that you could visit if you're visiting three parks in a row and all those parks were different.
>
> **[10:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=629)** So this is a bit tricky, but it does follow from the work that we did in that advanced joins course.
>
> **[10:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=637)** And the next exercise, again, a little bit more challenging, but it is the last one.
>
> **[10:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=641)** And our goal here is going to be to find the combinations in alphabetical order of parks where the first letter of each visit occurs in the order of the alphabet.
>
> **[10:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=652)** For example, if you visited the Channel Islands National Park, then Death Valley, and then Joshua Tree, you'd have C, D, and J.
>
> **[10:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=659)** And that's kind of a trivial condition there, but it's good for the exercise and it pops up in a number of data transformation patterns.
>
> **[11:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=668)** So this is a kind of a fun one to get into, and it's very similar to what we just did.
>
> **[11:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=673)** So we're going to look at parks again in California here where the designation is like National Park.
>
> **[11:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=680)** And we're using this basically the same query to generate those combinations of visits.
>
> **[11:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=687)** But on the select, the final select from those combinations, we're looking at the place where the lower function of the first visit is less than the lower function of the second visit.
>
> **[11:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=697)** And this is a little hack.
>
> **[11:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=699)** You can use the lower function to reduce the string rate to all lowercase, but then simply using comparison operators.
>
> **[11:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=706)** So saying less than is a way to actually check for the alphabetical order of a string in SQL.
>
> **[11:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=712)** So example, if you had like 'a' &lt; 'b' that would return true.
>
> **[11:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=718)** 'a' &gt; 'b' would return false because you know, alphabetically, B follows A.
>
> **[12:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=724)** So this is kind of an easy way to check for the ascending nature of the park names.
>
> **[12:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=730)** And so we need only check if the lowercase version of the first visit is less than the second visit and the second visit is less than the third visit to see if they're in alphabetical order.
>
> **[12:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=741)** And then finally we'll add a row number in to count the number of rows where this condition is met.
>
> **[12:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=746)** So if you run that, you see that there are actually 35 combinations, 35 of our original 210 where our visits would occur in alphabetical order.
>
> **[12:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=755)** And so that's just a fun way of filtering these combinations.
>
> **[12:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=758)** But in data transformation, it's pretty often that we'll be creating combinations that will be performing cross joins and then filtering those down.
>
> **[12:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=765)** So this is actually a pretty spot on real world example.
>
> **[12:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=769)** I hope that was clear for you.
>
> **[12:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=771)** If you need more time to dig through this, I'd highly recommend going through that completed exercise file, poking around with these solutions, and then comparing them to your own.
>
> **[13:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=780)** But that's it for the SQL section of our course.
>
> **[13:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=782)** Up next we're going to jump into data transformation with [[Python (Programming Language)|Python]] and [[Pandas (Software)|Pandas]].
>
> **[13:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-solution?u=76281980&t=786)** Can't wait to see you guys there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Transformation]] (4), [[SQL]] (3), [[Fetch]] (2), [[Unstructured Data]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (3), count (3), ilike (2), sum (2), cte (2)
> **Definitions:** is a  (6), means that (1)
> **Cross-References:** we discussed (3), earlier in (1)
> **Analogies:** imagine (2), for example (1), similar to (1)
> **CLI Commands:** make (1), find (1), python (1)
> **UI Navigation:** select the (2)
> **Code Identifiers:** lis_has_any (1)


### 3. Data Transformation with Python and pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [DataFrame basics](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=0)** - [Instructor] So welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=1)** You've completed our first lesson on [[SQL]], and now we're jumping into [[Data Transformation]] with [[Python (Programming Language)|Python]] and [[Pandas (Software)|pandas]], specifically the pandas library.
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=10)** And in this video, we'll talk a little bit about how our lessons are structured, which should be familiar with you, how to interact with the notebooks, slightly different for Python, but if you've used pandas before, this should be pretty straightforward, how to tinker with the data, and then give a first lesson introduction.
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=25)** And this lesson is going to follow largely from the last lesson.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=29)** So the structure will be very similar in that we're going to cover different methods of data transformation with Python and pandas that we just covered with SQL.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=36)** And the goal is to give you really a direct comparison for how to perform the same operations in pandas that you would with SQL.
>
> **[0:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=44)** And hopefully from that, my goal is for you to take away when it makes sense to transform data with SQL and when it makes sense to transform data with Python.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=53)** And that should give you more of a holistic view of the toolkit that you have available as a data practitioner for transforming this sort of data.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=61)** So I'm going to open up the first lesson in our pandas course, which is DataFrame basics.
>
> **[1:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=66)** And this will just be a good refresher.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=69)** If you've been rusty or if you haven't seen pandas in a little while, we'll just jump back in.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=72)** So these cells, we have to import a few Python libraries.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=75)** And again, you might have to initialize the kernel when you first run some of these, but our code space is already ready to go here.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=81)** So it's important to talk about what a DataFrame actually is.
>
> **[1:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=84)** So in SQL, I took it a little bit for granted that we're querying tables, right?
>
> **[1:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=88)** We're selecting from this relational data, maybe joining them together.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=92)** But a pandas DataFrame is sort of the analogous way to store data in Python.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=98)** It's like an [[Microsoft Excel|Excel]] spreadsheet or a table, right?
>
> **[1:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=100)** It organizes data into rows or columns.
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=102)** It makes it easy to see and work with.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=104)** And each column in a DataFrame, like a relational database, has to have the same type, right?
>
> **[1:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=109)** All numbers, all texts, all strings, et cetera.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=112)** So if you're familiar with what we just did in SQL, this should follow pretty logically.
>
> **[1:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=116)** But one thing that I often find confusing or I forget, is how to actually build a DataFrame.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=121)** So you can define a new DataFrame in pandas by specifying column values, index values, and the actual data.
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=128)** So note that our columns are what goes across the top.
>
> **[2:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=130)** Our index goes across the sides.
>
> **[2:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=133)** This is not a column in and of itself.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=135)** It's actually an index like the numbering or the specific identifier for those rows.
>
> **[2:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=140)** And then the data is what's known as a Vandermonde matrix, which you can read about in Wikipedia.
>
> **[2:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=145)** But this is just some random data for us here.
>
> **[2:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=148)** And so a lot of what we'll be doing in this course is adding columns, manipulating them, assigning them.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=154)** You can add columns through assignment.
>
> **[2:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=156)** So we're creating a new column F, and that's going to be the sum of these other columns that we have in the DataFrame.
>
> **[2:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=162)** That works, you know, for like, kind columns, they're all numbers.
>
> **[2:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=166)** We can just add those directly in one cell.
>
> **[2:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=168)** We can also drop or rename columns, but it's usually best to create a new DataFrame 'cause it's really easy to lose track of what you've already done to a DataFrame.
>
> **[2:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=177)** So in our new_df, we'll drop the F column.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=181)** And you can see here we're defining an entirely new DataFrame versus dropping the data in place.
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=188)** So if I returned new_new_df, you'd notice that there is no F column, but there shouldn't be an F column in the original DataFrame either because we dropped that.
>
> **[3:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=198)** But this operation doesn't define a new variable, so that's an important difference.
>
> **[3:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=203)** We can also manipulate entire DataFrame, right?
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=205)** If every column in our DataFrame is an integer, we can just multiply the data by two.
>
> **[3:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=210)** Notice how we're using display here to show that DataFrame.
>
> **[3:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=212)** So we multiply all the value by two.
>
> **[3:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=215)** And so as we kind of talked about, the main elements are columns, indices, and data, but we can access those at any time with the sort of modifiers here, .columns or .index.
>
> **[3:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=225)** So we're grabbing the columns, grabbing the index from the DataFrame.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=228)** And slice operations are also important in DataFrames and they can be confusing.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=232)** So we can locate that data by calling the columns directly.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=236)** So I'm getting column A here.
>
> **[3:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=238)** We can use the loc modifier also to call the columns, does the same thing.
>
> **[4:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=243)** It's just a slightly different syntax, right?
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=245)** If I did a, whoop, key error, A, sorry, that was a mix up.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=250)** That loc slices on the index, I believe.
>
> **[4:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=254)** So yeah, we're slicing the index V and that's an important distinction.
>
> **[4:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=257)** It's important to recognize because this can be confusing, right?
>
> **[4:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=260)** So here we're getting the column A here, we're getting the index V, so no modifier.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=267)** Modifier, and the difference between loc and iloc is that i works via an index.
>
> **[4:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=273)** So you have to supply an integer.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=275)** So iloc zero is equivalent to loc v, so iloc zero, we're getting the zeroth index, or we can index by the actual name of that column as well.
>
> **[4:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=288)** So important differentiator, easy to confuse, but just know, hey, if we're selecting columns, you can just access that directly.
>
> **[4:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=295)** If we're selecting index by name, you use loc.
>
> **[4:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=298)** If we're selecting index by number, index number, you can use iloc.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=303)** So like relational data, these DataFrames can be joined or concatenated.
>
> **[5:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=307)** With pandas, it's actually really complicated, which we'll dig into, but this is a reason why we might opt to use SQL instead of Python in this instance.
>
> **[5:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=315)** You can concatenate DataFrames, so append them using this concat syntax.
>
> **[5:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=322)** And you can see we're adding the DataFrame next to each other when axis is equal to one.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=326)** You can also drop it on the bottom when axis is equal to zero.
>
> **[5:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=330)** So in one, we're adding the data to the right and another, we're adding it to the bottom.
>
> **[5:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=335)** And if we were joining the data, which we're going to do in our lessons, we would specify a join and keys parameters.
>
> **[5:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=342)** But that can also be confusing.
>
> **[5:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=343)** So that's one reason to note that pandas can be a bit difficult to work with at times.
>
> **[5:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=348)** So that's it for a very brief overview of the basics of DataFrames.
>
> **[5:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=351)** We're going to go through all the operations that we do in our lessons, like, we'll make it all very clear.
>
> **[5:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=356)** But just to you a general overview.
>
> **[5:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=358)** If you're constructing your own DataFrames out of new data, this is how you would do it, this is how you would play around with those values and some of the things that you can do.
>
> **[6:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=365)** But in our next lesson, we're going to jump right into it.
>
> **[6:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=367)** It's going to be very similar in structure to what we covered in SQL.
>
> **[6:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/dataframe-basics?u=76281980&t=371)** And we'll get started with wrangling [[Unstructured Data]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (11), [[SQL]] (8), [[Python (Programming Language)|Python]] (7), [[Data Transformation]] (2), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** python (7), find (1), make (1)
> **Env Vars:** sql (8)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Code Identifiers:** new_df (1), new_new_df (1)
> **Cross-References:** we covered (1)
> **Analogies:** it's like (1)
> **Warnings:** note that (1)

#### [Wrangling unstructured data](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=0)** - [Instructor] In this lesson we're going to cover wrangling [[Unstructured Data]] with [[Pandas (Software)|pandas]].
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=4)** And you'll notice that there are a number of differences between how we handle things in [[Python (Programming Language)|Python]] and how we did in [[SQL]].
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=10)** And for some of these it'll be a bit easier.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=12)** So this'll be important to pay attention to, but it's a good lesson generally.
>
> **[0:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=16)** And in our pandas cells, we're going to have to first import the library as you would any other Python function.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=21)** But then pulling in our data source is going to look a little bit different.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=24)** We're using the read_parquet function from the pandas library to read the dataset.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=29)** You don't have to worry too much about that, but if you're interested in data analysis or [[Data Engineering]] with parquet files, that'll be something you'll use in the future.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=36)** So again, same dataset that we looked at using SQL, we have a list of national parks.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=42)** You can see that we have our name of the park, we have the designation description, et cetera.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=47)** And we're going to perform some similar operations to what we did in DuckDB.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=50)** First, we're going to rename a column and expand that struct, that list of adjacent data column operating hours just like we did in the second lesson in SQL.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=61)** So it's important to pay attention to the renaming syntax for pandas 'cause this can be confusing.
>
> **[1:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=66)** You define columns in dictionary with the original name of the column and the output name of the column.
>
> **[1:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=74)** And if we had multiple columns here, there'd be comma and then the next name.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=78)** So comma, next name, et cetera.
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=79)** But it's important to note that rename requires casing, accurate casing, accurate spelling.
>
> **[1:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=85)** And if a name is misspelled, it won't throw errors so you just won't have the column renamed.
>
> **[1:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=91)** So that's something to keep an eye out for.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=92)** But we're going to rename that column.
>
> **[1:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=94)** We're going to define inplace to be true and that's going to make sure the the rename occurs.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=98)** And then if I run this, you'll see that our operating hours column was renamed to operating_hours.
>
> **[1:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=105)** And next, usually when we expand unstructured data or we "wrangle" this data, it's good to inspect a single record.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=112)** So in the SQL equivalent, just use that recursive unnest function that doesn't really exist in DuckDB.
>
> **[2:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=120)** So I'm going to use the iloc function to slice our data and get the zeroth record.
>
> **[2:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=125)** So remember what iloc does, first we're taking that operating hours column so you can think of like, okay, we're going to get operating hours here and then we're going to take the zero indexed record.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=135)** We're selecting this cell basically of our data frame.
>
> **[2:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=138)** And doing so is going to return a kind of confusing array of data.
>
> **[2:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=143)** But if we want to simplify the output, we know this is only one record and it's a list.
>
> **[2:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=147)** So we can just specify as a list.
>
> **[2:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=149)** And then we get maybe a prettier representation of our data.
>
> **[2:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=153)** And you can see there's name, hours, this is where it comes in handy to understand what [[JSON]] structured data or a dictionary is.
>
> **[2:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=160)** You can see we have one opening of the dictionary and then there's another dictionary.
>
> **[2:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=167)** So our name, standard hours and then standard hours is itself stored as a dictionary going through.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=174)** There's also exceptions, which is another list with dictionary values.
>
> **[2:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=178)** So, and it appears those contain holidays.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=181)** So something we skipped over in SQL because DuckDB kind of handled it for us, but we have to specifically define the function in pandas to do that same thing.
>
> **[3:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=193)** And the explode function is going to help us with this one.
>
> **[3:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=196)** So what we're doing is we're taking that operating hours column and we're exploding it using the syntax data frame dot explode column.
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=205)** And so what that's going to do is it's going to take that list of dictionaries and create one row per column for that list because there are multiple operating hours per column.
>
> **[3:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=219)** So you can see for example, in this Adams Historical Park, there are actually two operating hours values.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=226)** First there's the operating hours for the visitor center and then there's the operating hours for the historic homes.
>
> **[3:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=231)** And that's not something that we actually saw or had to deal with in that first example.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=236)** And from there we can use the json normalized function.
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=240)** So we're going to call that operating hours df, which is the exploded data frame with that operating hours column, I think it's important to pick apart the pieces 'cause we're chaining together some stuff.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=250)** So we looked at just what this is, it's actually just the column that's exploded.
>
> **[4:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=254)** So we have one dictionary that we're dealing with.
>
> **[4:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=256)** The json normalized function is going to convert that into an actual dictionary, just some like typing stuff going on.
>
> **[4:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=264)** And then we're going to rename some of the resulting values just so we don't have conflicting names.
>
> **[4:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=270)** So there's like name, which is ambiguous, we're going to call that category.
>
> **[4:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=274)** There's a description, we're going to call that operating hours description, et cetera.
>
> **[4:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=279)** We'll run that.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=280)** And you can see now we're getting something that looks similar to what we had in that second lesson.
>
> **[4:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=285)** So we have our operating hours expanded exceptions is still a list.
>
> **[4:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=289)** We don't have to worry about that too much, but we kind of have gotten the core of what we're after.
>
> **[4:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=294)** And for those values, it's more to note, for those parks with multiple operating hours, we were able to expand those as well.
>
> **[5:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=302)** But this is actually, it's a separate data frame.
>
> **[5:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=305)** So to bring it back into our original df, we're going to have to use the concatenate function.
>
> **[5:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=310)** So something I showed you in the data frame basics video is how to join two data frames.
>
> **[5:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=316)** And if you think about it, what we're doing, we're exploding the data and then we're doing the separate operation on a column and exploding that data.
>
> **[5:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=323)** So inherently all the rows actually match up.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=326)** So we don't really have to think about like joining on a key because we're operating on two separate parts of the same data frame and we really need to use reset index.
>
> **[5:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=338)** That's just something that you have to play around with.
>
> **[5:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=340)** It basically resets, as the name suggests, it resets the index of the data frame and that ensures that we don't have conflicting indices and get errors.
>
> **[5:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=348)** That's something that you sometimes just have to play around with.
>
> **[5:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=351)** So if I run this cell, we're going to get a data frame that has one row for each operating hour object, right?
>
> **[6:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=360)** So you can see our Adams National Historical Park has two rows, but that's because there's a visitor center operating hours and a historic homes operating hours.
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=369)** But finally, and most importantly, we have our hours for each day, which is the same thing that we're doing in that SQL lesson.
>
> **[6:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=377)** And finally, once we get there, we can perform filters just like SQL.
>
> **[6:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=382)** The syntax is a little different.
>
> **[6:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=384)** So the way that pandas works is that first you have your data frame and then you have a bracket indexer.
>
> **[6:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=389)** And this is like different, I've never seen the syntax anywhere else, right?
>
> **[6:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=393)** So this is pretty unique and maybe pretty confusing.
>
> **[6:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=396)** And then there's a filter operation that uses some Python and some like pretty proprietary pandas stuff.
>
> **[6:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=404)** So we're going to say we're going to select the column category, in Python it's a double equals sign, category equals hours of operation.
>
> **[6:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=411)** And then we're going to apply this filter.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=413)** So it's kind of like a mask in a sense.
>
> **[6:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=415)** We're applying that filter to our data frame.
>
> **[6:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=417)** So if I run that, we're filtering on only the rows where the category here that we defined says hours of operation.
>
> **[7:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=426)** Next, right?
>
> **[7:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=427)** Note the syntax here.
>
> **[7:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=428)** It follows a pattern.
>
> **[7:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=431)** Data frame column, logical modifier value.
>
> **[7:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=434)** So yeah, like I said, it's kind of like a mask.
>
> **[7:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=436)** And we can chain filters using logical conditions where parens group conditions and the ampersand is an and symbol and then there's a or operator, which is a pipe symbol.
>
> **[7:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=448)** So for example, if we wanted our data frame where the category was equal to hours of operation and the description, right?
>
> **[7:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=456)** Let's follow along 'cause this is a little hairy, dot string dot contains Theodore Roosevelt, we can use the dot string dot contains function and that's going to pass the value of each indexed row to a string to the contains function and get Theodore Roosevelt.
>
> **[7:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=472)** Again, very confusing.
>
> **[7:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=474)** It's just kind of something you have to know about how Python works, which is why we're covering it in this lesson.
>
> **[7:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=477)** And also note that using this multi-line formatting here, breaking things up into multiple lines doesn't matter because things are in brackets in Python and it makes it a lot easier to read.
>
> **[8:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=487)** So that's something I highly recommend as you're building these notebooks because you can imagine you might not know what's going on if your query looks like this, right?
>
> **[8:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=496)** That's no fun.
>
> **[8:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=497)** So definitely break things up, definitely format those lines and that returns what we're looking for because we have our Theodore Roosevelt Birthplace National Historic Site returned.
>
> **[8:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=507)** And it's also important to note that you can get distinct values like something we've done in SQL a lot, right?
>
> **[8:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=514)** Is select distinct.
>
> **[8:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=515)** But the unique method in Python, it's not a unique method, it's the unique method. (laughs) The method that is unique will return unique values.
>
> **[8:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=525)** So here we're getting our data frame, we're selecting standard hours, Thursday, that's a column and we're getting the unique values for that.
>
> **[8:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=532)** Then we're converting it to a list and selecting the top five values and printing that out.
>
> **[8:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=537)** This is another library that you might find helpful.
>
> **[8:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=539)** Import it like this, from p print, import p print.
>
> **[9:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=543)** I think somebody showed me that like three years ago and it like changed how I print data.
>
> **[9:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=547)** So that's a little tidbit for you because if this was just print, right, it would look like that.
>
> **[9:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=552)** But what p print does, pretty prints it.
>
> **[9:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=556)** So you have one value per line and that might be a little bit more readable.
>
> **[9:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=559)** And next, I always bump into this when I'm working with pandas, which is why we're covering it here.
>
> **[9:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=563)** The panda's equivalent of case one, right?
>
> **[9:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=565)** We talked about case one in that second SQL lesson where you cast individual values or you can categorize things, right?
>
> **[9:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=572)** Like case when Monday, when this column equals Monday, then when unknown, then we're going to say closed or otherwise we're going to return the column.
>
> **[9:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=579)** Like that's a pretty common pattern in SQL.
>
> **[9:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=581)** But in pandas it can be really kind of confusing.
>
> **[9:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=584)** So this is a lot of code, don't worry because it's just the same thing for each day of the week.
>
> **[9:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=589)** So all you need to do is focus on this really.
>
> **[9:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=591)** And we're using np, which is NumPy, that's a foundational library that pandas is built on largely, NumPy where, our Monday hours equals unknown comma closed.
>
> **[10:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=605)** So we're saying when this is true, return closed, otherwise return the column.
>
> **[10:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=612)** So it's actually very similar to case when, when this thing is unknown, then closed, otherwise the column end.
>
> **[10:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=619)** So when this thing equals unknown, we're going to return closed.
>
> **[10:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=623)** Otherwise the column.
>
> **[10:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=624)** Super simple, you just have to run it on every column that you want to define that way.
>
> **[10:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=629)** So I do that for every single column.
>
> **[10:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=631)** And then here in the SQL lesson, we also defined an open seven days a week column.
>
> **[10:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=636)** And so you can chain logic in the same way that we've been doing.
>
> **[10:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=640)** I'm saying, okay, well if that column we just defined is closed for Monday and Tuesday and Wednesday, don't worry, I'm not going to go through all of these.
>
> **[10:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=649)** If all of those are true, we're going to return true, otherwise we're going to return false for the open seven days a week column.
>
> **[10:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=657)** And then finally, a lot of times you don't want to filter, you don't want to return every column in your data frame.
>
> **[11:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=662)** So a very simple way to do this is to define a list and then filter on that list.
>
> **[11:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=667)** This is the same thing as doing that, right?
>
> **[11:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=669)** This just doesn't look as good and is a little less readable than what I'm doing here.
>
> **[11:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=674)** So again, another theme of our course.
>
> **[11:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=676)** How do we make this stuff as readable as possible so when we go back through it or when our colleagues go back through it, they can replicate exactly what we did.
>
> **[11:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=683)** So I'm going to run that and we get exactly what we did in the SQL lesson.
>
> **[11:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=687)** If you remember that back that far, and that is the name of our park, if it's open seven days a week, and then the hours formatted in a really readable and simple way that's easily transformable.
>
> **[11:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=697)** And I added this note in here, you might be saying, right, like, man, that's a lot of code, right?
>
> **[11:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=702)** Like to do this stuff, I have to write what seems like 30 or 40 lines of code.
>
> **[11:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=707)** And you're right, that is a lot of code, but that's also one of the core lessons of this course.
>
> **[11:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=710)** And that is that some stuff in Python just kind of takes a lot of work.
>
> **[11:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=714)** Some stuff in fact that's easy in SQL is kind of tricky in Python.
>
> **[11:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=718)** And there's a, I'd say there's kind of a rabbit hole you can go down with like trying to automate this stuff where you do something like, oh, you know, for call in, you know, you could say like this dot columns and then write a loop over each column.
>
> **[12:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=734)** But that gets tricky because you have to exclude certain columns.
>
> **[12:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=737)** There are a lot of stuff that you, you know, you have to account for effectively where you can make mistakes.
>
> **[12:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=741)** So in instances like this, I find it's really best just to hard code things and make it as clear as possible what you're defining.
>
> **[12:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=748)** But that means that it might take more work, it might be a lot of code.
>
> **[12:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=752)** So again, I would start be thinking in the back of your mind, okay, like if I am doing a case when type operation, I would probably rather do that in SQL than Python.
>
> **[12:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=760)** That's kind of the lesson here.
>
> **[12:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=761)** But just like we did in SQL, we can filter our data frame using that very similar filter syntax.
>
> **[12:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=767)** Again, if we wanted to write it out like this, it might be a bit clearer filter where parks are open seven days a week, we print the column, and these are all the parks that are open seven days a week.
>
> **[12:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=776)** So look at that.
>
> **[12:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=778)** If it's Sunday, you can take a trip to Cedar Breaks National Monument and finally save it off to a new file.
>
> **[13:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=783)** So just like we saved in our SQL lesson, our data frame, you can save two parquet files with pandas using the two parquet method and specifying a file path.
>
> **[13:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=792)** So as soon as I ran that, we just wrote that to data pandas open seven days a week, DF Parquet, and that's wrangling unstructured data with Python.
>
> **[13:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=803)** I think the important takeaway here is just to note again the differences between SQL, what you can do in pandas and what's kind of a pain, because there are certain things in this lesson that are a bit of a pain.
>
> **[13:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=812)** And to carry that into your future transformation journey.
>
> **[13:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/wrangling-unstructured-data?u=76281980&t=816)** Up next we're going to talk about selecting and filtering data with pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (17), [[Pandas (Software)|Pandas]] (14), [[Python (Programming Language)|Python]] (11), [[Unstructured Data]] (3), [[JSON]] (3)
> **CLI Commands:** python (11), make (4), find (2)
> **Env Vars:** sql (17)
> **Analogies:** just like (3), for example (2), kind of like (2), similar to (1), imagine (1)
> **Definitions:** is a  (6), means that (1)
> **Code Identifiers:** read_parquet (1), operating_hours (1)
> **Warnings:** note that (2)
> **Cross-References:** we talked about (1)

#### [Select and filter](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=0)** - [Instructor] So in a similar structure to how we approach [[SQL]], we're now going to talk about the select and filter operations for dataframes.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=7)** And we've already gone over this a little bit with talking about indexing, selecting columns, but we're really going to dig into logical filtering in [[Pandas (Software)|Pandas]].
>
> **[0:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=17)** We're going to talk about how to select individual columns and some other nuances like vectorization.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=21)** And again, really cover what exists.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=24)** So you have a good background of what you can do with Pandas and how to filter values in your dataframes.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=30)** So we're going to import our open_seven_days dataframe that we saved off in our last lesson, and we'll start with creating some columns.
>
> **[0:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=38)** So creating a column in Pandas is as simple as assigning a value.
>
> **[0:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=41)** So you'll notice in our dataframe open_seven_days_df, we'll get the first five rows, which you can do with the shortcut head.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=50)** So that's the head of the dataframe, the first five rows.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=53)** We have, again, the columns that we saved off here are hours, and if it's open seven days a week.
>
> **[0:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=59)** So we'll import NumPy.
>
> **[1:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=60)** Again, we're using the numpy.where function but this column doesn't exist, closed open.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=65)** So we want to redefine or define a new column that represents similar information in a new way, just like we did in the SQL lesson.
>
> **[1:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=74)** And so we'll say, where this dataframe is equal to closed.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=78)** Again, I'll create new lines here.
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=79)** So this is a bit cleaner.
>
> **[1:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=80)** Where this dataframe is equal to closed will return closed, otherwise we'll return open.
>
> **[1:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=85)** Again, very similar pattern.
>
> **[1:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=87)** If True, then first value else, second value.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=92)** And we'll do another pattern that's is closed or say if closed, then True, else False.
>
> **[1:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=99)** And these are two common patterns in [[Data Transformation]].
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=102)** And you can see now if we list the columns out, we now have those two columns, is_closed, closed_open.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=108)** And the point here is to illustrate that there are multiples of ways of representing information.
>
> **[1:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=113)** But when you do represent that information, it's usually good to use a predescriptive name.
>
> **[1:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=119)** So is_closed, the question is answered by the values of the column.
>
> **[2:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=124)** Is the part closed true aka, yes or false?
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=129)** No.
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=129)** So I often use that pattern when I'm creating columns, something like, oh, like is_open, right?
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=135)** That would be the opposite.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=136)** Or if I'm defining a number, num_alerts, a very descriptive column name can be helpful, especially when it literally tells you the values that exist in the column, or in this case, closed_open, right?
>
> **[2:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=148)** So a common practice in sort of assigning values is assigning multiple values to an entire columns.
>
> **[2:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=156)** And I kind of wrote a little blurb up here about vectorization, which when I talk about vectorization, you might have heard vectors in some other context.
>
> **[2:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=166)** In the context of Pandas and [[Python (Programming Language)|Python]], vectorization just means doing the same thing to an entire column.
>
> **[2:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=171)** So performing an entire operation.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=174)** And there are two ways to do something to an entire column.
>
> **[2:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=177)** And one way is vectorized, which means you act on the entire column at the same time.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=183)** And so in dataframe basics, when we talked about adding columns or multiplying columns, those are vectorized operations.
>
> **[3:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=189)** When I say column times two, every function that can actually be executed in parallel nature using Python.
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=197)** So it happens really fast, and you don't need to worry too much about what parallel means right now.
>
> **[3:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=201)** Just know that it means it's very efficient.
>
> **[3:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=203)** It happens really fast when things are vectorized because the entire column can be mutated or changed at once.
>
> **[3:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=209)** But when an operation is not vectorized, the transformation needs to be applied row by row.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=214)** So if you have a million row dataframe, you need to literally what the computer's doing is multiplying each value of each row one by one, not parallelized.
>
> **[3:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=223)** So we'll talk about applying row rise functions later in the course.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=226)** But in this part of the course, we're focusing on vectorized operations.
>
> **[3:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=230)** And I really want to emphasize, that's why some things happen quickly and other things don't.
>
> **[3:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=234)** So that's another area that might be really interesting to dig into.
>
> **[3:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=237)** If you want to know the ins and outs of dataframes or if you're working on your own project and something's going really slow, look up how you can vectorized that operation to speed it up.
>
> **[4:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=246)** But that's a bit of an aside.
>
> **[4:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=248)** And it's only to say that when we do things like creating a new column open_closed and we're appending a string, for example, you can create a new column really easily with string operations.
>
> **[4:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=258)** We're just using the plus symbol, "Today, the park is open or closed."
>
> **[4:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=262)** That's why this happens super fast.
>
> **[4:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=264)** And we get a response instantly.
>
> **[4:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=266)** And so as we talked about in our basics lesson, we're going to expand a little bit on these location modifiers, accessors in Pandas, loc and iloc.
>
> **[4:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=276)** You can select an index with iloc and a column with loc really easy way to think about that.
>
> **[4:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=282)** And before we just used one value, we just said iloc 0, which is going to get the first row.
>
> **[4:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=288)** This also gets the first row, but it's actually a slice.
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=290)** So because this is an exclusive, so we're including the zero row, not the one row, we're going to get only the first row of the dataframe.
>
> **[4:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=299)** Now, if I wanted to get a bigger slice, remember that the dataframes are indexed, they're zero indexed, so rows go like 0 1, 2, et cetera.
>
> **[5:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=308)** So if I wanted to get the first two rows, which corresponds to the index 0:1, I would use iloc 0:2, right?
>
> **[5:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=317)** And to get the third row 0:3.
>
> **[5:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=319)** So maybe a bit counterintuitive, but important to note what the syntax of that function looks like.
>
> **[5:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=325)** Now these are rows, but if I wanted to get different values here, we could use loc 6:7, that gets the rows of the dataframe.
>
> **[5:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=334)** So remember, iloc is getting indices and it just so happens that our indices are the same as a rows here.
>
> **[5:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=341)** And notice that the index can change.
>
> **[5:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=344)** And that's why we've used functions like reset index in the past.
>
> **[5:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=348)** So loc gets rows, iloc indices, index, locate.
>
> **[5:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=353)** Easy way to remember that.
>
> **[5:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=355)** And this is selecting the dataframe row with index 6, right?
>
> **[6:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=360)** So if I did 6 to 8, we would have 6 and 7 or 6 through 8, there's no 7.
>
> **[6:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=366)** So again, this can be a bit confusing, right?
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=369)** But play around with it.
>
> **[6:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=370)** Select different rows from your dataframe using loc and iloc, read the Pandas documentation to learn more about how to index these dataframes with these different functions.
>
> **[6:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=380)** One along indices, one is along the actual rows of the dataframe.
>
> **[6:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=387)** So next, we'll talk a little bit about filtering in Pandas.
>
> **[6:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=391)** And as we talked about before, the filtering syntax looks like, let's select the dataframe and then we'll use a bracket to denote that we're applying a filter, and then inside some logical condition on the dataframe.
>
> **[6:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=402)** So where the column full name is equal to Zion National Park, we're going to return the original dataframe.
>
> **[6:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=408)** It's kind of how you can think about that operation.
>
> **[6:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=410)** And we're importing the parks data set here to do that.
>
> **[6:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=414)** Similarly, or as we did earlier, actually, we can apply multiple operations.
>
> **[6:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=418)** And because there are brackets here, we don't need parenths.
>
> **[7:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=421)** But we're saying, okay, well, where the state string contains Utah.
>
> **[7:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=426)** And the state string contains Arizona will return on parks dataframe.
>
> **[7:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=430)** So this is how we could filter on different states.
>
> **[7:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=432)** And note that we can't simply use contains, we can't use just that because of the way that Pandas works.
>
> **[7:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=438)** We first have to use the string accessor, which makes the values of this column available as a string.
>
> **[7:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=444)** That is a bit confusing.
>
> **[7:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=446)** That's also just kind of how it works.
>
> **[7:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=448)** So again, Pandas can be tricky.
>
> **[7:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=451)** There is a bit of a steep learning curve, but that's why we're walking through it.
>
> **[7:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=454)** And just as we did before, we can apply multiple conditions.
>
> **[7:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=457)** So if we wanted to say, Okay, well, where does our state contain Utah?
>
> **[7:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=462)** And it contain Arizona or it merely contains Wyoming.
>
> **[7:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=467)** We can do that using multiple logic.
>
> **[7:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=468)** And note our use of parentheses here, this is one group of logic, this is the or symbol.
>
> **[7:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=474)** This is another group of logic.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=475)** So if we wanted to say, where it's equal to Utah and Arizona or Wyoming or just Utah, we could do that as well.
>
> **[8:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=486)** And we get more rows.
>
> **[8:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=487)** So the syntax isn't too difficult here.
>
> **[8:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=490)** Sometimes it can get tricky with the parentheses, but we can do the same thing with integer or float numbers.
>
> **[8:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=496)** So longitude and latitude are both represented as floating point decimals.
>
> **[8:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=501)** And a float is just like a decimal, basically like 67.89, right?
>
> **[8:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=505)** Very simple.
>
> **[8:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=506)** But we can filter our dataframe on longitude is less than some value and latitude is greater than some value and designation equals National Park.
>
> **[8:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=514)** And these are pretty large values.
>
> **[8:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=516)** So this actually filters down to Alaska, I believe, Kobuk Valley, I might be saying that wrong, is very remote.
>
> **[8:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=524)** Yes, indeed.
>
> **[8:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=525)** I believe that's in Alaska.
>
> **[8:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=527)** We can check.
>
> **[8:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=530)** Yep, so the point here is you can just filter integers using less than or greater than.
>
> **[8:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=537)** This is kind of similar to what we did in our SQL dataframe.
>
> **[9:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=540)** And again, we can select a subset of the columns by including those in a list.
>
> **[9:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=545)** And sometimes it's useful to do something like cols_list, and then define that separately so that you're not super confused about what you're doing here.
>
> **[9:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=557)** Again, putting that all together, we can filter on integer using Boolean operators and comparison operators and we can chain those together into multiple filters and then select a list of the columns.
>
> **[9:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=572)** So if we wanted to say, okay, well let's get parks where the longitude's less than some value, parks where the latitude's greater than some value, and the designations, the National Park, let's only select the full name in states columns.
>
> **[9:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=583)** We can do that in one operation.
>
> **[9:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=584)** And yes, this is not the prettiest syntax, but it does what we want and it is logical.
>
> **[9:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=590)** It will always be the same.
>
> **[9:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=591)** So if you're struggling with this and like this just looks really messy, one thing you can do is break this up.
>
> **[9:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=596)** You could say, "Okay, well, what are my filter conditions?"
>
> **[10:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=601)** Well, we can define those up here, and just be sure to put whatever you use in parentheses that works.
>
> **[10:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=606)** So we could say, "Okay, well, let's filter what we want to, right?"
>
> **[10:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=609)** Let's use our columns list and just be sure to define this separately.
>
> **[10:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=620)** And this is maybe a bit more readable than what we had before, but returns the same value.
>
> **[10:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=625)** And that's all I'm going to cover for selecting and filtering dataframes here.
>
> **[10:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=629)** It's pretty straightforward, but it's really easy to get tripped up on this stuff.
>
> **[10:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=633)** So that's why I really want to emphasize making it as readable as possible.
>
> **[10:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=637)** In the next video, we're going to talk about ordering and aggregating our data using Pandas.
>
> **[10:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=642)** It's pretty different than how we would do ordering and aggregations in SQL.
>
> **[10:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=646)** So stay tuned.
>
> **[10:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/select-filter?u=76281980&t=647)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (10), [[SQL]] (4), [[Python (Programming Language)|Python]] (2), [[Data Transformation]] (1)
> **Code Identifiers:** is_closed (2), closed_open (2), open_seven_days (1), open_seven_days_df (1), is_open (1)
> **Cross-References:** we talked about (3), later in (1), in the next (1)
> **Env Vars:** sql (4)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** just like (2), for example (1), similar to (1)
> **CLI Commands:** python (2)
> **UI Navigation:** select the (2)

#### [Order and aggregate](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=0)** - [Instructor] So now we'll talk about ordering and aggregating data using [[Pandas (Software)|Pandas]] and it's a bit different than [[SQL]], so stay tuned here.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=7)** Some of this might look familiar, some of it might not.
>
> **[0:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=9)** We're going to load again our parks dataframe, which we should all be pretty familiar with at this point.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=15)** And the core of the Pandas grouping functionality, this might be a little bit familiar to SQL, is the group by method, which groups our data and how things work is similar to SQL.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=28)** Like you'll notice some similarities.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=30)** The syntax is definitely not and it can be confusing.
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=32)** So note that here there is a bit of a Pythonic twist, right?
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=36)** And we're going to specify first the columns that we want to group by and then the column that we want to count, right?
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=42)** So we're going to group by the state's column and now we have states grouped by, but we need to specify a column to count.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=48)** And so when I run this and we're going to get our states as well as the count, I just feel, you know, as an outsider looking at this, I might say that that doesn't really make a ton of sense.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=58)** But with Pandas you kind of just have to roll with the way that this works.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=62)** So we're grouping by the states and then we're counting the states.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=65)** Yes, that's a bit repetitive, but that's how this function is defined in Pandas, of course, right, in our SQL lesson, we split those states into a list to get an accurate count, right?
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=75)** You might be saying, okay, well that's not really a state that I want to count.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=78)** I want to count the individual states that this park crosses.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=82)** And this is pretty cool because [[Python (Programming Language)|Python]] I think makes this a bit easier.
>
> **[1:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=86)** Like dealing with strings in Python is pretty simple.
>
> **[1:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=88)** So again, we're going to say Parks, DF, states and use that string accessor, which is how we get a vectorized operation, which we talked about last time across the entire dataframe on a string column.
>
> **[1:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=100)** And we're going to split by just that string value there.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=104)** And once we do that, we can actually just take a look at what we'll do here.
>
> **[1:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=108)** The resulting dataframe does in fact have a list of those string values each accessed properly.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=115)** And these will now be, you know, iterable using Python as a list instead of just that string separated by commas.
>
> **[2:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=122)** So like lesson one, we can perform an explode.
>
> **[2:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=125)** It's a little different in Python, but it's similar, rather like we did in SQL, we can perform this explode function, but the syntax is a bit different where we're going to say, okay, dot explode states list and we're going to rename that column in place.
>
> **[2:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=138)** So the cool thing about dataframes is you can chain operations.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=141)** So if we think about what we've been doing, this operation is going to return a dataframe.
>
> **[2:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=147)** And again, this is going to be by park, by state.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=150)** So I park this in six states is going to have six rows.
>
> **[2:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=153)** So we then take the output of that operation, which is a dataframe, and we're going to rename the columns inside that dataframe.
>
> **[2:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=160)** So again, run this operation return the first value, you see we do get just this value and state, states list will now be the state value, which should, you know if I just wanted to take a quick look at that, should have one state per value, which is what we want.
>
> **[2:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=177)** So finally, right, we're trying to answer a similar question that we did last time.
>
> **[3:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=182)** We're trying to ask the question, right?
>
> **[3:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=184)** For each state, how many parks are in that state?
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=186)** And we need to split these.
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=188)** So like we just did, we're going to combine the two operations we discussed.
>
> **[3:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=192)** We're going to group by state and we're going to select state and count it.
>
> **[3:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=195)** And we're going to do that on the exploded dataframe instead of the first one.
>
> **[3:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=199)** And we could even sort the values if we wanted to get the top states by descending value.
>
> **[3:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=205)** And so this is different because this is not only national parks where the previous example we did in SQL was with national parks.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=214)** But it is very similar logic where we're saying, okay, well what do we want to count?
>
> **[3:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=218)** Well we want to count parks at the state level.
>
> **[3:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=221)** And what does that require?
>
> **[3:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=222)** Well it requires a row per park, per state.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=226)** So there's some duplicated park values.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=228)** And to get to that row per park per state, we need to first transform our dataframe such that it's in that shape and then aggregate using group by.
>
> **[3:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=237)** So again, where do we want to be?
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=240)** Where are we now, how will we get there?
>
> **[4:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=242)** And as I mentioned, this isn't for only national parks.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=245)** So if we wanted to do that, it's pretty much the same operation, note that I'm adding some parens here so that I can do this on new lines.
>
> **[4:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=254)** So if you want to clean up these chained methods, you can do that on new lines.
>
> **[4:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=258)** And I'm going to add in the filter for the national park designation and running this, we actually have to return that.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=267)** So we'll drop a head here, running that gets us a very similar operation.
>
> **[4:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=272)** This might actually be exactly the same to what we had in the last lesson.
>
> **[4:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=276)** And again, this is how we formatted the query, we use these parens to break that up.
>
> **[4:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=281)** The same though, it can be accomplished with back slashes.
>
> **[4:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=283)** So if you didn't want to use the parens and you just want to say like, hey, backslash here, backslash here, you'd have to use it for every line, which is why the parens are helpful.
>
> **[4:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=291)** You know, that might be something to check out.
>
> **[4:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=292)** But same query, just run that again and again, same result.
>
> **[4:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=296)** So just for completion sake, let's do the same thing with campgrounds 'cause that's what we did in our parks example.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=303)** And this actually brings up a very good topic for Python.
>
> **[5:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=306)** And that's that joining is going to be different and the syntax is going to be a bit challenging if you're used to the SQL stuff.
>
> **[5:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=312)** But recall that in the campgrounds dataframe, we had to compute total sites.
>
> **[5:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=317)** So the nice thing about Python is we can do that one time by adding these two columns and then the merge syntax.
>
> **[5:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=323)** So think about merge as a join where we have to define things a bit differently than in SQL.
>
> **[5:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=330)** So we're going to take our campgrounds and we're going to merge that into our parks dataframe, same as an inner join 'cause we're defining the join as inner, but we're merging on park code and the suffixes.
>
> **[5:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=342)** Suffixes is basically like if there are columns that have the same name, you know, how can we fix that?
>
> **[5:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=347)** And so basically for the left part of our join, we're going to use the suffix underscore campground.
>
> **[5:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=352)** And for the right side, we're going to use the suffix underscore park.
>
> **[5:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=355)** So this is the merge command saying let's perform an inner join on campgrounds and parks and the columns will append this value to those columns.
>
> **[6:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=363)** And then finally, we'll define the new dataframe by filtering only to national parks and only where sites are greater than zero.
>
> **[6:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=373)** And so the cool thing about Python, maybe one of the confusing things is that it's actually good to do this in multiple steps and separate out the logic because it kind of creates like checkpoints or things for you to reference after you've completed each individual operation.
>
> **[6:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=386)** That can also be tricky 'cause you usually have to stitch them together and combine them in the end.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=390)** But it's good for certain things.
>
> **[6:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=392)** So if you recall from or earlier lesson, we got the minimum and maximum sites in a CTE and then used those to filter on the final dataframe.
>
> **[6:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=402)** And we're going to do something very similar here.
>
> **[6:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=404)** So we can get the minimum number of sites using the minimum method on top of the total sites column and the maximum number of sites doing the same thing.
>
> **[6:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=411)** And so this is just returning a number.
>
> **[6:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=413)** Well, if we have those numbers, we could filter our dataframe where the total number of sites equals the minimum or where the total number of sites equals the maximum.
>
> **[7:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=423)** And so then again, these should be similar concepts because we've used them in our lessons so far.
>
> **[7:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=428)** We say, okay, well if the total sites equals the number of min sites, we'll call that a minimum.
>
> **[7:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=434)** And this is a nested where.
>
> **[7:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=436)** So if it does not equal the minimum number of sites where it equals the maximum number of sites, we'll call that a maximum.
>
> **[7:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=443)** Otherwise we're going to call it other, right?
>
> **[7:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=446)** And there's this warning we're getting about setting a slice on the copy of the dataframe.
>
> **[7:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=451)** This is pretty common.
>
> **[7:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=452)** You can read more about that in this article.
>
> **[7:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=454)** But it works for our purposes.
>
> **[7:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=456)** So I wouldn't worry about that too much.
>
> **[7:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=457)** But if I want to view our final dataframe, this will exactly mirror what we did in the SQL section.
>
> **[7:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=464)** We get, again, Mesa Verde National Park, the campground with the most number of sites, 534 and that's a max.
>
> **[7:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=471)** And then we have all the campgrounds that have one site at the other parks.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=475)** And again, the max sites parameter, that's just a number.
>
> **[7:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=478)** So just like the SQL component, we then moved on to group by the park.
>
> **[8:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=481)** And so I want to show you how to do that here as well.
>
> **[8:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=484)** And it's pretty simple, so the minimum sites by park, we're just going to group by the full name column and then act on the total number of sites.
>
> **[8:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=492)** So we're going to group by the full name, which is the full name of the park.
>
> **[8:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=495)** And then for the total sites column, we're going to take a minimum.
>
> **[8:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=500)** Again, this is different in the Pandas syntax, but important to call out, for the maximum number of sites, we're going to group by that full name and select the total number of sites, then take a maximum on that column.
>
> **[8:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=512)** And finally, the aggregation is just going to look like the campgrounds dataframe, which we joined our parks into, grouped by the full name of the park.
>
> **[8:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=522)** We're going to select the total number of sites and sum those.
>
> **[8:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=525)** So just like SQL, it's important to think about each operation and like visualize the rows sort of in your head, what's going on.
>
> **[8:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=534)** For each row, for each park, we're going to select that as a group.
>
> **[8:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=539)** And then we're going to sum the total number of sites across those parks and sort the values ascending.
>
> **[9:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=546)** So performing that is going to get, right, for each park, the total number of campsites in descending order, 'cause ascending is false.
>
> **[9:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=555)** So very similar to SQL.
>
> **[9:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=557)** Well actually identical to SQL in what we're doing, but very different in the syntax.
>
> **[9:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=562)** So it's important to kind of keep these buckets.
>
> **[9:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=565)** It's like learning different languages, right?
>
> **[9:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=566)** It's like learning French and learning Spanish.
>
> **[9:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=568)** It's kind of similar but pretty different.
>
> **[9:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=570)** Both romance languages, you know, maybe there's some carryover, but it's like learning a different language and it's thinking in a slightly different way.
>
> **[9:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=577)** But this is how you can perform those operations in Python using Pandas.
>
> **[9:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/order-aggregate?u=76281980&t=582)** Up next we'll talk about advanced filters, just like we did in SQL, I'll catch you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[Python (Programming Language)|Python]] (8), [[Pandas (Software)|Pandas]] (6)
> **Env Vars:** sql (14), cte (1)
> **CLI Commands:** python (8), make (1)
> **Analogies:** just like (3), it's like (3), similar to (2)
> **Definitions:** is a  (4)
> **Cross-References:** we talked about (1), we discussed (1), in the last (1)
> **Warnings:** note that (2), warning (1)
> **UI Navigation:** select the (2)

#### [Advanced filters](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=0)** - [Narrator] So just like our [[SQL]] lesson, we'll cover some of the advanced methods of filtering and continue with the course.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=7)** So we're going to import our data frame just as we had before, and we've already done like a lot of pretty fancy [[Pandas (Software)|pandas]] operations I suppose.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=15)** So we're going to jump to some more nuanced string filtering methods.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=19)** And as we've talked about, this string contains method is an important one to call out because running something like if I select this line here, you'll note that if I run this without the contains, I get an error.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=33)** And that's because what we're trying to do here is operate on a series.
>
> **[0:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=38)** Effectively, when you select a column, something like Parks designation, this is really helpful to pick apart the individual components of these operations.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=46)** This is just a list or what's known to pandas as a series.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=50)** A series is like a list, it's just one column and we won't get too much into that.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=54)** But it's important for understanding errors.
>
> **[0:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=56)** And you know, debugging, it's a big part of working with code.
>
> **[1:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=60)** So when we see something that says like, oh, series object has no attribute contains, this method is trying to operate on something that isn't prepared for it.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=69)** And that's why that string accessor is necessary.
>
> **[1:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=73)** Because what that does effectively is it tells pandas that we're operating on each row in the data frame as a string.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=81)** And that's why that works.
>
> **[1:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=83)** And so once we use that, we're able to use methods in [[Python (Programming Language)|Python]] that we would use on any string like split or contains.
>
> **[1:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=90)** And so that's what we saw before.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=92)** And once we get down to filtering, right, with these string methods, we can do things like filter by contains, which is like I like or like in SQL.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=101)** And hopefully that sentence didn't sound like complete nonsense, but you know what I mean, right?
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=106)** If you watch the first part of the course, the I Like Method, which use those parentheses is very similar to what we're doing with string contains here.
>
> **[1:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=114)** Same thing with the split method and the explode method.
>
> **[1:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=117)** So this is similar to what we did in the last course, but now that we have an exploded list, if you're familiar with other list methods in Python, we can do stuff like is in to get specific values of states that we want to be in that list.
>
> **[2:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=131)** So this is a list of states that are in this list.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=135)** And because we exploded the data frame, we know we're operating on every park at the state level.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=142)** And that's important.
>
> **[2:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=143)** A couple other methods, is null and not null, are helpful for filtering rows based on Null or NAN, which you'll see in Pandas and NumPy a little bit, values.
>
> **[2:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=155)** And that's like a real pain point.
>
> **[2:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=157)** If you continue your [[Data Transformation]] journey, you'll notice that null, NA, NAN, like they're all kind of a different thing in Python.
>
> **[2:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=163)** So that's kind of a big gotcha.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=165)** So you'll notice that if we load our alerts data and we run a group by, we actually have this blank category column.
>
> **[2:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=172)** And that's because there's a category that's just defined as an empty string in this data frame.
>
> **[2:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=176)** And in [[Data Cleaning]], you're going to come across stuff like that.
>
> **[3:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=180)** And it's also important to note that empty strings are not actually considered null values by pandas.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=186)** And so when we apply filters like NP, NAN or is Null, we have to convert those values.
>
> **[3:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=193)** And so in this cell here, this final cell in our advanced filters section here, what I'm saying is, okay, well let's take the category, I'll remove this real quick and let's replace empty string values with NAN values, not a number of values.
>
> **[3:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=206)** And we'll do that in place.
>
> **[3:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=208)** And so then we can say, let's select from the category where it's not null.
>
> **[3:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=213)** And if I run that, it's going to remove that space that we had earlier.
>
> **[3:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=216)** So that's a easy way to make sure that we're getting rid of all those, not null values by category.
>
> **[3:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=222)** And clean up our data frame a bit.
>
> **[3:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/advanced-filters?u=76281980&t=225)** Up next, just like SQL, we're going to talk about data generation, how you can generate ranges of integers of dates with pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[SQL]] (3), [[Python (Programming Language)|Python]] (3), [[Data Transformation]] (1), [[Data Cleaning]] (1)
> **Env Vars:** nan (4), sql (3)
> **CLI Commands:** python (3), make (1)
> **Analogies:** just like (2), similar to (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (1), gotcha (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### [Data generation](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=0)** - [Instructor] So, now we're going to talk about how you can generate data using [[Pandas (Software)|pandas]], using [[Python (Programming Language)|Python]], very similar to how we did in [[SQL]].
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=7)** Maybe a little bit easier, but the complex thing usually comes from working with indices in pandas.
>
> **[0:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=13)** But we're going to break that down, especially when generating continuous date ranges like we did with the alerts data frame.
>
> **[0:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=18)** You might know where this is headed if you were following along earlier, but we're going to start off by importing pandas and we're going to use PD.date range because that's the easiest way to generate date ranges in Python.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=29)** And that's just going to create a pandas series using the parameters we specified.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=33)** So very similar syntax start and then the frequency.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=37)** So you can imagine this being day, week, month, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=40)** And from that we can create a data frame with a time index by actually specifying PD.data frame just like we did in that intro lesson.
>
> **[0:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=49)** And then supplying the data and supplying the index as our dates.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=53)** So we're generating the date range that's going to the index.
>
> **[0:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=56)** The data is just some random values.
>
> **[0:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=58)** We can look at that and then in fact, we have a day for each row with a value.
>
> **[1:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=63)** So it's important to talk about re-sampling and frequency conversion because it's really easy in pandas and something I wanted to bring up.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=70)** You can just re-sample this data frame because the index is a date time to be by week.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=75)** And when you perform a re-sample operation, you can actually specify an aggregation.
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=79)** So if we re-sample by week and sum, it's effectively like grouping by week and providing the sum.
>
> **[1:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=85)** Well what does that mean?
>
> **[1:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=86)** Well, it means that if we have missing data, just like in SQL, we can generate a date time series.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=92)** We can re-sample, regroup, and we can fill in those blank dates like we did in SQL.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=98)** And this is a bit of an errant cell here, so I'm just going to get rid of this guy.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=101)** But if we look at this alerts category, your first attempt at what we did in SQL was oh, let's just group by alert date in that alerts data frame.
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=110)** We'll group by alert date and category.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=112)** We'll take the description, we'll count how many of those there are.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=115)** So if I run this, right?
>
> **[1:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=117)** What we'll get is a data frame that looks right, but it has date gaps, 2012 jumps to 2014 to 2015.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=127)** And so if I try to do like an average or even a rolling average over this data, I would get incongruous results.
>
> **[2:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=133)** I would get incorrect results from what I would expect.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=136)** And so how do we overcome this with Python, right?
>
> **[2:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=139)** We did it with SQL. We're going to do it with pandas now.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=142)** So the way that we do this is we define that alert date.
>
> **[2:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=146)** So we're going to take the last index date, we're going to cast it to an actual date time object.
>
> **[2:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=151)** If you haven't worked with date time in pandas yet, you should read up a little bit on that.
>
> **[2:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=156)** It can be very confusing, but we're going to cast that to a date time object.
>
> **[2:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=159)** And then we're going to use what's known as a grouper to build the date time index with no gaps.
>
> **[2:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=164)** So I think this is again a good point where it's nice to like dig into exactly what's going on here.
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=169)** So we're going to take this code, we'll pick it apart a little bit 'cause this can be complicated.
>
> **[2:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=173)** We're going to define our alert date and then we're going to get our alerts with no gaps and we'll do alerts no gaps.head to get those rows.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=181)** So in the data frame that's displayed here, there's actually no gaps.
>
> **[3:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=185)** And if we sorted that by the index, you'd be able to see that.
>
> **[3:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=188)** But what did we do? Well, we used a grouper.
>
> **[3:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=192)** So you can see in our group, now were defining this thing called a PD.grouper with a frequency of one day and applied that grouper to the category.
>
> **[3:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=200)** So not too important to know exactly what a grouper is or how that works, but it is important to know that if you use one in the groupby clause and specify the category, we can generate effectively continuous dates without any gaps.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=214)** And then we took the count there of each.
>
> **[3:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=217)** And so once we do that, we can actually unstack the category and fill in the missing dates.
>
> **[3:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=223)** It's important to do the grouper step and then to fill those in with zeros because we won't be able to do that without the grouper.
>
> **[3:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=230)** So I'm going to show you what this unstacked data frame looks like because it's important to see the intermediate steps.
>
> **[3:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=235)** So the unstack is going to take this grouper object and expand it.
>
> **[4:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=241)** Actually, so the data frame before did have gaps.
>
> **[4:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=245)** So the unstacked operation is going to take that.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=247)** It'll all make sense once I show you what this data frame looks like.
>
> **[4:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=252)** Once I unstack that, you can see it's like a pivot object basically where we have a column for each category and those have continuous dates.
>
> **[4:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=259)** So this is like maybe a little bit of a workaround, but we're defining this grouper object, pivoting the table to create a continuous date range.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=267)** And that's like what the re-sample object does.
>
> **[4:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=269)** Then we're selecting those columns and we're filling the NA values with zero.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=275)** So this operation is kind of like the meat and potatoes so to speak, of what we're doing here.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=280)** And that is unstacking that grouped object, re-sampling to a single day, defining as a frequency and selecting the columns we want and then filling those with zero.
>
> **[4:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=287)** So, a big complex, but it's what helps us accomplish what we want here.
>
> **[4:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=291)** And then from there we can unstack this or rather, you know, this is important because it can be confusing.
>
> **[4:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=297)** So this is technically unstacked.
>
> **[4:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=299)** So what we had before was stacked where everything was in one column and these were categories and we're unstacking that, which is like a pivot operation into this data frame.
>
> **[5:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=307)** From there, we're going to stack that to return the actual number of alerts.
>
> **[5:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=312)** And so if we run this number of alerts cell here, you can see that we get alert dates in continuous order, in that continuous order we're after with the categories formatted just like they were before, and the number of alerts as a float.
>
> **[5:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=326)** And that's what we're after.
>
> **[5:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=327)** So we're going to dig into this a little bit more in [[Windows]].
>
> **[5:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=330)** That's going to be a challenging lesson, but a really good one.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=333)** But it's important to mention a few other ways that we can calculate date ranges using pandas.
>
> **[5:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=337)** And that is that there are, similar to .db, you can use a range function.
>
> **[5:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=344)** There are a number of ways use the range function that is inclusive on one side, exclusive on the other to count.
>
> **[5:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=349)** So simply range 1 to 101 is going to give us every number from 1 to a hundred, 100 zero negative one, there's this like modifier variable here that reverses the order 2 to 202, incrementing by two gives us 2 to 200 incrementing by two, et cetera.
>
> **[6:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=368)** The last one is using a star double star to square those values.
>
> **[6:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=372)** So there are a bunch of ways you can generate ranges.
>
> **[6:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=374)** There are a bunch of ways you can approach this.
>
> **[6:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=376)** I think date ranges are really important for time series data, which is common in [[Data Transformation]] and data analysis.
>
> **[6:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=383)** So that's what we're going to spend a lot of time on in Windows.
>
> **[6:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=386)** And again, we'll go back over what we just did, but the focus is going to be on filling in date gaps in time series data.
>
> **[6:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/data-generation?u=76281980&t=393)** But I'll catch you in the next video for Window functions with pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (9), [[SQL]] (5), [[Python (Programming Language)|Python]] (3), [[Windows]] (2), [[Data Transformation]] (1)
> **Analogies:** just like (3), similar to (2), imagine (1), it's like (1), kind of like (1)
> **Env Vars:** sql (5)
> **Definitions:** is a  (3), means that (1), known as (1)
> **CLI Commands:** python (3), make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Windows](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=0)** - [Instructor] In this lesson, we're going to talk about [[Windows]] in the context of [[Pandas (Software)|Pandas]].
>
> **[0:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=4)** And windows for Pandas are a little different than windows for [[SQL]].
>
> **[0:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=8)** There are a much smaller subset of operations that Pandas windows perform, and you can check that out in the documentation.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=15)** But there are four really types of windowing operations in Pandas.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=19)** We're really going to focus on two of those, specifically rolling windows and expanding windows.
>
> **[0:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=24)** And you can think of rolling windows as a rolling sum or a rolling average that we talked about in the SQL lesson on windows.
>
> **[0:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=31)** And expanding windows are kind of like a cumulative sum, an accumulating window over values, but we're going to focus on those two.
>
> **[0:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=37)** So let's walk through something very similar to what we did before.
>
> **[0:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=40)** First, we actually have to import the library and load the DataFrame before we can define our alert date column, which is just the date/time variant of our last index date.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=50)** And we're going to pick up where we left off.
>
> **[0:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=51)** So, if you recall from the last lesson, we had that unstacked data frame where we took the category and split it along the axis there to create separate columns.
>
> **[1:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=60)** This is actually a much better way to do rolling windows on data because each data is in separate columns.
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=67)** And so what that means is when we calculate a rolling window, the syntax is really simple.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=72)** We just say rolling window equals seven.
>
> **[1:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=73)** We're going to calculate the mean.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=75)** We're going to get a rolling average and reset the index.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=78)** And resetting that index is important because it just shifts the alert date out of the index.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=82)** So, when you run a reset index in Pandas, it's going to take whatever the index is and move it into a column.
>
> **[1:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=88)** So that's what we're doing here.
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=89)** But just like that, we've got a rolling average for every variant of alert in our alerts DataFrame.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=96)** So it's actually really simple in Pandas, it's a little bit of a secret, you know?
>
> **[1:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=99)** Shh. I'm here giving you all the secrets.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=101)** But it's really simple to get rolling averages using Pandas, something that might not be that simple, as we saw in SQL.
>
> **[1:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=107)** And this isn't part of the course, this is not a data visualization course, but I do want to show you exactly what this DataFrame looks like so you can understand what we're doing.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=115)** So if we take that information, the information section, and we plot it, what we just did was we had that original DataFrame, we filled in all of the gap numbers, and then we calculated a rolling average over the information column.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=127)** And what does that look like?
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=128)** Once this is done running, I'm using the Plotly library, which makes it really easy to build line charts, just three lines there.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=135)** And you can see we now have a rolling average of alerts.
>
> **[2:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=139)** There's a sharp uptick in 2024.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=141)** So, if somebody sent in a bunch of alerts all of a sudden, it might be something to dig into.
>
> **[2:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=146)** That's a little bit about data analysis, right?
>
> **[2:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=148)** Looking for those trends.
>
> **[2:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=149)** There's a big spike in March.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=150)** What happened there?
>
> **[2:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=152)** Might have to dig in.
>
> **[2:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=152)** But this is what we're after.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=154)** And so another useful concept in analytics and reporting, maybe if you're a financial analyst, or if you work in another reporting field, accounting, maybe you've dealt with this, would be 14 and 28 day rolling alerts.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=165)** That's kind of like, you know, two weeks or a month rolling alerts.
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=169)** And again, this is outside the course, so don't worry too much about this code, but what I'm trying to do here is just build a chart for each category, for each type of rolling alert, to show you what these different charts look like.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=181)** So what I'm doing here is I'm saying, okay, well we have these rolling seven, 14, and 28 day alerts.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=186)** We have these columns for each category.
>
> **[3:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=189)** Can we plot a DataFrame where we're looking at the category?
>
> **[3:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=193)** Can we plot a DataFrame where the plot columns are showing what we want to see?
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=197)** So I'm going to run this, and then we'll walk through it.
>
> **[3:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=199)** And feel free to pick apart my code and look at it a little bit more.
>
> **[3:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=202)** Again, this is outside the scope of the course, so I just want to show you how these rolling methods differ.
>
> **[3:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=206)** So, the thing about rolling averages, as the window increases, you know, 28 days versus 14 days, the line becomes smoother because there's a larger window to average out.
>
> **[3:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=218)** And so that can be useful for [[Forecasting]] and things.
>
> **[3:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=220)** And you'll note, right, the seven day rolling average is a bit more noisy.
>
> **[3:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=224)** The 14 day is a bit more smoothed out.
>
> **[3:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=226)** And again, the 28 day is even more smoothed out.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=228)** This is something you might have seen if you've played around with [[Financial Analysis]] at all.
>
> **[3:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=232)** So, these are our information alerts.
>
> **[3:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=235)** This is our park closure alerts.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=236)** Also sharp uptick in rolling averages heading into 24.
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=240)** And these are our caution alerts.
>
> **[4:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=242)** And so that's pretty simple.
>
> **[4:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=244)** That's how you can calculate rolling averages in Pandas.
>
> **[4:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=248)** Kind of useful pattern is, okay, well if I have a category that needs to be considered, I can unstack that and calculate along in that category.
>
> **[4:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=256)** Finally, if we were more interested in that expanding window, that accumulating window that I talked about earlier, we take our unstacked DataFrame and use the expanding method from Pandas.
>
> **[4:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=266)** So, we'll roll that one back to the num_alerts_unstacked, run this calculation.
>
> **[4:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=272)** And you can see we get a cumulative count here.
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=275)** So if we graph this one, it should just look like an exponential function because we're always counting up.
>
> **[4:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=279)** This is the number of alerts issued for all time over this data frame.
>
> **[4:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=284)** So yeah, now, we're edging a bit into data visualization, but I just wanted to show you guys a taste of maybe what's next, right?
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=290)** If you're learning [[Data Transformation]] at your job for a passion project or a side project, the next step is really to start looking at the data.
>
> **[4:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=298)** And as someone who used to work in product analytics and [[Data Engineering]], it's pretty frequent that you need to do a gut check on your numbers, or you need to make sure that what you're doing makes sense.
>
> **[5:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=308)** As I'm sure you've noticed, this can be a bit complex.
>
> **[5:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=310)** And a really great way to do that is to visualize data.
>
> **[5:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=312)** So, don't be afraid to pull out a chart here or there.
>
> **[5:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=315)** A good library to get started in data visualization is Plotly, but there are a bunch in [[Python (Programming Language)|Python]].
>
> **[5:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=320)** But this has been our lesson on windows.
>
> **[5:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/windows?u=76281980&t=322)** Up next, we'll jump into apply functions with Pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (11), [[Pandas (Software)|Pandas]] (10), [[SQL]] (3), [[Forecasting]] (1), [[Financial Analysis]] (1)
> **Env Vars:** sql (3)
> **Analogies:** kind of like (2), just like (1)
> **CLI Commands:** make (1), python (1)
> **Cross-References:** we talked about (1), as we saw (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** num_alerts_unstacked (1)
> **Documentation:** the documentation (1)

#### [Apply](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=0)** - [Instructor] And we're back for the final lesson in our [[Pandas (Software)|pandas]] portion of the course.
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=5)** And here we're going to talk about the apply method.
>
> **[0:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=7)** And apply is very similar to the last [[SQL]] lesson on lambdas, or wasn't the last, but on lambdas and UDFs.
>
> **[0:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=14)** So apply is similar.
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=15)** It's a method that, as the name suggests, applies a function along an access of a DataFrame or a series.
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=21)** And commonly, we're going to apply this by row.
>
> **[0:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=23)** So this is kind of like custom operations.
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=25)** It's almost a mixture of a UDF, but in [[Python (Programming Language)|Python]] and pandas speak.
>
> **[0:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=30)** So, some notes here about apply that I left for you.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=33)** The syntax is df.apply, function, and then an axis.
>
> **[0:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=38)** So, this is going to apply the function that we specify to the axis that we specify.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=42)** So 1 applies to each row, 0 applies to each column.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=46)** The function parameter can be built-in function.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=48)** It can be a lambda function, which is very similar to what we talked about in SQL.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=52)** So that was a nice segue.
>
> **[0:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=54)** Or a custom function defined by the user.
>
> **[0:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=56)** For example, we could create a custom function that operates on every row.
>
> **[0:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=59)** Series is slightly different, we won't really go into that too much, but the information is there for you as well.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=65)** And it's important to note the apply method works by iterating over every single element.
>
> **[1:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=69)** That means it's, in most cases, not vectorized.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=72)** There might be some work you have to do to vectorize certain functions.
>
> **[1:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=75)** So that's a big call out.
>
> **[1:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=77)** If you have like 1 million+ row DataFrames, this can get slow.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=81)** But as an example, we're going to extract, we're going to take this city and the stateCode out of every parks DataFrame.
>
> **[1:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=90)** So, let's actually take a look at what we're working with here.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=92)** So we'll go parks_df, and then we'll look at the addresses column.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=96)** If I run that, you can see, oh wow, it's actually just a bunch of dictionaries, is a bunch of [[JSON]].
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=101)** And so, if we wanted to get the city, what we would have to do is look at the first one of these rows, and then we'd have to say, "Okay, well, what's the first value in that list?
>
> **[1:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=110)** And then what's the city for that value," right?
>
> **[1:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=113)** Oh, it's New York. (chuckles) That's a lot.
>
> **[1:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=116)** And similarly, we'd have to do the same thing for the state.
>
> **[1:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=119)** It's New York and New York. (snickers) And so, if we want to do that for every DataFrame, we have to define a function that goes through row by row and extracts that index and that key from the dictionary.
>
> **[2:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=132)** So, the way we would do that is define an apply function.
>
> **[2:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=136)** And now very similar to the lambda functions, actually even the same term, we're going to define a lambda in that apply.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=142)** And so, the way I read lambda, again, for each x.
>
> **[2:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=146)** For each x, I'm going to take the 0, 0th element of the list, and then I'm going to get the city element over that dictionary.
>
> **[2:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=156)** And if I run that over parks_df, we are extracting the city and the state from that dictionary into a human-readable format.
>
> **[2:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=163)** So, again, when I think lambda x for each x, what am I doing?
>
> **[2:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=169)** Do whatever.
>
> **[2:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=171)** Right, that's how I think about lambdas, and that simplified things for me.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=174)** And yeah, just a call out that that can be tricky.
>
> **[2:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=177)** And another call out, we can easily count the states with the most parks by using this value_counts method.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=183)** This is just kind of a nice little shortcut in pandas.
>
> **[3:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=186)** So, if we have a list like this, we can get the unique values.
>
> **[3:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=190)** It's accounting like account distinct in SQL.
>
> **[3:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=192)** We can get the unique values by running this value_counts function.
>
> **[3:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=195)** And in the above example, we only use apply on one column, but I think an important call out is that it can be used on entire rows.
>
> **[3:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=202)** So let's look at what we did before.
>
> **[3:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=204)** Here I said for the DataFrame column addresses.
>
> **[3:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=209)** So this is actually happening on a series, right?
>
> **[3:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=211)** If we look at what addresses is, it's a series of addresses.
>
> **[3:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=216)** And so, when I apply the function to each series, I'm just calling it x.
>
> **[3:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=222)** But if we wanted to apply this to the entire DataFrame and have context of the whole row, we can do that.
>
> **[3:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=228)** We just say apply to the DataFrame.
>
> **[3:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=230)** And then for each row, instead of for each column or column value, we have to extract the individual column names.
>
> **[3:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=239)** So this is acting on a DataFrame.
>
> **[4:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=241)** So you can think of it as taking a slice of that DataFrame.
>
> **[4:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=244)** For each row, we're taking a slice of the column of that DataFrame, right?
>
> **[4:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=248)** This is getting the full name parameter and the address parameter, and then we're going into get the city parameter.
>
> **[4:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=253)** So if I wanted to include multiple values for each row, I could actually create an entire alias for this park using apply and operating over that 1 axis again.
>
> **[4:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=264)** Also, note the difference in this operation.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=267)** We have to specify that the axis is equal to 1.
>
> **[4:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=271)** If we don't, right?
>
> **[4:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=273)** What happens?
>
> **[4:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=275)** There's an error.(snickers) I've gotten this error maybe a million times writing Python because I always forget.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=280)** When you operate on a DataFrame, when you operate on the entire DataFrame, you have to say, well, we're actually operating by rows.
>
> **[4:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=287)** But when you're operating on a series, you don't have to say that, so the operation is slightly different.
>
> **[4:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=293)** And just like we talked about in SQL, apply is, you can think of it, naming similar to DuckDB to other SQL functions.
>
> **[5:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=301)** You can think of it like a UDF.
>
> **[5:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=302)** So, if we wanted to define our own function, for example, cubed length of a string, we can then apply that user-defined function to our DataFrame.
>
> **[5:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=312)** And here we're getting the cubed value of the length of every string and simply supplying that as a parameter to the apply method.
>
> **[5:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=322)** So, in the same way, you can perform a simple lambda operation where you're splitting those strings on a comma value, just like we've been doing throughout the course.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=333)** And, yeah, that's a little bit about the apply function.
>
> **[5:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=336)** Again, it operates by row.
>
> **[5:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=337)** And I want to make very explicit that for large, very [[Big Data]] sets, things can be slow.
>
> **[5:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=342)** So even if you import a CSV or like a really big CSV, maybe you're on Kaggle or some other [[Data Science]] site, or you're on another [[LinkedIn]] course, right?
>
> **[5:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=349)** And you import a really big CSV and something is going slow or it feels like it's timing out, think about what apply might actually be doing, and that might be a bottleneck for performance.
>
> **[5:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=357)** But that's a little bit about apply functions, that's a bit about lambdas in Python.
>
> **[6:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=362)** And we have everything we need to jump into the pandas exercise.
>
> **[6:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/apply?u=76281980&t=366)** So you're officially done with like the lesson portion of fundamentals of [[Data Transformation]], and you can just focus on the exercise in pandas next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[SQL]] (5), [[Python (Programming Language)|Python]] (3), [[JSON]] (1), [[Big Data]] (1)
> **Env Vars:** sql (5), csv (3), udf (2), json (1)
> **Analogies:** similar to (4), for example (2), just like (2), kind of like (1), think of it as (1)
> **Code Identifiers:** parks_df (2), value_counts (2), statecode (1)
> **CLI Commands:** python (3), make (1)
> **Cross-References:** we talked about (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [pandas challenge](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=0)** - [Instructor] So now we can get started with our [[Pandas (Software)|pandas]] Challenge since we've covered all the topics we need to for our data transformations with pandas.
>
> **[0:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=12)** So I want to emphasize that this is maybe an overestimate of the amount of time it'll take you to complete these lessons but I would allot one to two hours for this challenge, maybe a little bit less but you'll definitely be able to complete these solutions in that window.
>
> **[0:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=26)** Again, this follows directly from our work with pandas, So everything that's in this exercise we'll then cover in the course or in the videos.
>
> **[0:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=33)** Additionally, solutions can be found in the course repo.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=36)** I'll show you where those are.
>
> **[0:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=38)** And we'll have a video that covers those challenges and my solution to the exercises we'll present.
>
> **[0:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=44)** Again, another call-out.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=46)** Your solutions might look different than mine.
>
> **[0:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=47)** There are multiple ways to do things, especially with [[Python (Programming Language)|Python]] and especially with pandas.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=52)** And that's okay, that's really good in a sense because it kind of brings that diversity of thought into the equation.
>
> **[0:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=57)** So feel free to share how you did things, how things differed.
>
> **[1:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=60)** If you found anything confusing, I would love to hear about it as well.
>
> **[1:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=64)** And that just makes the course better.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=65)** Lastly, if you get stuck, same as before, feel free to use Stack Overflow, use an LLM, or take a peek at only the next step in the challenge and really push yourself to think critically.
>
> **[1:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=76)** Again, this isn't really about memorizing things.
>
> **[1:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=78)** That's not the important part.
>
> **[1:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=80)** The important part is learning and understanding the concepts so that you can apply them in your own projects, in your job, wherever you're looking to improve.
>
> **[1:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=87)** So next, we can jump on over to the exercise file.
>
> **[1:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=91)** And this time it'll be under pandas instead of [[SQL]].
>
> **[1:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=95)** And we'll go into the blank exercise.
>
> **[1:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=97)** The blank exercise is going to have everything we need to load our parks dataframe.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=101)** And it's going to follow a very similar format to the SQL exercise.
>
> **[1:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=105)** So there'll be a prompt here and then you'll fill in the blank in the cell below and work through very similar questions to the SQL exercise.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=115)** But I'll catch you after you're done with this exercise.
>
> **[1:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-challenge?u=76281980&t=117)** I hope that it goes smoothly and we'll discuss the answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[SQL]] (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (3), llm (1)
> **CLI Commands:** python (1)
> **Documentation:** stack overflow (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [pandas solution](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=5)** - [Instructor] So you've completed the [[Pandas (Software)|pandas]] exercise, and now we're going to walk through the solutions and I'll show you how I approached these problems, how I figured the challenges out.
>
> **[0:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=13)** Hopefully this aligns with the methods you use, but again, it's really great when we do things that are different.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=19)** There are many ways to get to these solutions using [[Python (Programming Language)|Python]].
>
> **[0:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=21)** So we're going to import our DataFrame, and the first challenge is going to be write a snippet to [[Fetch]] all the parks in Utah and order the results by the park name.
>
> **[0:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=29)** So this is very similar to what we did in [[SQL]].
>
> **[0:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=31)** Again, using that string contains method to filter the states column, and then applying that to the DataFrame and sorting the values by the fullName.
>
> **[0:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=41)** And then we're just taking the top five rows.
>
> **[0:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=43)** So pretty straightforward getting into it.
>
> **[0:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=45)** Next question.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=46)** Build a query to fetch all the parks that cross state boundaries.
>
> **[0:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=50)** Again, parks.states is a string representation of a list.
>
> **[0:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=53)** So there are a few ways to do this one.
>
> **[0:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=55)** Again, we're filtering on the designation being national park or rather containing national park.
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=61)** That's the way I went about it.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=62)** And then we're asking does the string contain that comma value?
>
> **[1:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=67)** That's a very simple way of understanding if a park crosses state boundaries.
>
> **[1:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=71)** So that's another pretty quick one.
>
> **[1:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=73)** Next step, for all national parks, return the states column as a struct type, so an array, with each element as a state.
>
> **[1:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=81)** So we're going to take that list, that comma-separated string, we're going to split it and cast that to a list.
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=89)** Then finally, assign that to the DataFrame value there.
>
> **[1:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=93)** So if I run that, we do indeed get back a list of values.
>
> **[1:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=97)** So next question, which parks are in either Montana or Wyoming?
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=101)** Hopefully this looks familiar.
>
> **[1:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=102)** It's pretty similar to what we did, and I'm just going to walk through what we're doing here.
>
> **[1:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=106)** I'm filtering on the designation to be containing that national park value to only get national parks in the United States.
>
> **[1:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=112)** And then we're going to say, does the states string contain Montana or does the states string contain Wyoming?
>
> **[1:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=118)** Pretty simple, and we get a result.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=121)** Three parks, Yellowstone, Glacier and Grand Teton.
>
> **[2:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=124)** What about both Montana and Wyoming? That should be one.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=127)** That should be Yellowstone.
>
> **[2:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=128)** Again, the only difference between these two queries is the operator.
>
> **[2:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=132)** It's and or or.
>
> **[2:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=134)** So those are more straightforward in Python than in SQL I think.
>
> **[2:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=137)** Maybe something to keep in your back pocket for later.
>
> **[2:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=140)** Which park is in the greatest number of states?
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=142)** There are a couple ways to do this one.
>
> **[2:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=144)** Here I'm looking at that states list that we got earlier and getting the length of the string value of that, and then just ordering by the states list.
>
> **[2:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=154)** So pretty easy to do in Python, getting the number of states for these parks.
>
> **[2:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=159)** Yellowstone topping the list.
>
> **[2:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=161)** Now, how many parks are in each group of state border crossings?
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=165)** Very similar to the SQL exercise where we're looking at how many parks are in each group that we're defining here being the number of states that park exists in.
>
> **[2:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=175)** So if I remember correctly, it was something like 58 exists in one, maybe like two parks in two, and then one in three or something like that.
>
> **[3:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=181)** This is really straightforward in Python.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=183)** We're just going to group by in the previous DataFrame the number of states, apply that to the fullName and then perform a count.
>
> **[3:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=190)** So it was 57, my bad, 57, 2 and 1.
>
> **[3:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=193)** Next question, what is the percentage share of the total?
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=197)** And window functions might be helpful in this one, but we actually can do this without [[Windows]] using Python.
>
> **[3:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=203)** So we're going to take the total number of states by just performing a count, the count previously, and then a sum on top of that count.
>
> **[3:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=210)** So this is kind of like the, you know, we use a window function in SQL.
>
> **[3:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=213)** We don't need to do that in Python.
>
> **[3:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=214)** We can just take this basically and then sum it.
>
> **[3:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=219)** That's effectively what this command is doing.
>
> **[3:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=221)** And then divide the actual DataFrame.
>
> **[3:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=223)** So divide this by the total number to get our percentages.
>
> **[3:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=227)** 95% of national parks are in one state, 3% are in two states, and 1%, which is just one park are in three states.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=236)** So write a query that returns the largest campsite in each park.
>
> **[4:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=240)** Note, we'll add in a little hint here.
>
> **[4:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=242)** You have to fill some na columns with zero and idxmax might come in handy in this one.
>
> **[4:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=247)** We'll walk through why and how.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=250)** So we're going to do something that we did in an earlier lesson.
>
> **[4:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=255)** We're going to bring in our campsites DataFrame, and then we're just going to join that to the parks.
>
> **[4:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=258)** So we have campsites and parks side by side.
>
> **[4:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=260)** So this is pretty much line for line something that we did in an earlier exercise.
>
> **[4:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=265)** And then we're calculating the total_campsites.
>
> **[4:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=267)** Again, we've already discussed how to do that, but now we're filling the na values of the total_campsites with zero.
>
> **[4:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=274)** So if there's a value that a park or rather a campground that doesn't have any campsites, that might be represented as not a number or an na value, but we're going to add a zero where that exists to make sure everything's all set.
>
> **[4:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=287)** And then here's the hard part.
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=290)** Let's break this down.
>
> **[4:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=290)** So we're going to take the DataFrame and we're filtering basically just the columns.
>
> **[4:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=294)** So we're only looking at name_park, name_campsite, and then total_campsites.
>
> **[4:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=299)** Then we're going to, I'm going to just wrap this in parens so we can break it down a bit.
>
> **[5:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=304)** Then we're going to perform an index on that DataFrame, and we're only going to get the values.
>
> **[5:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=309)** We'll ignore the sort for now.
>
> **[5:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=311)** We're only going to get the values where in our DataFrame, the total campsites grouped by the fullName is at the max.
>
> **[5:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=319)** So the idxmax function is going to get the index where these are at the maximum.
>
> **[5:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=325)** And if I return that function and sort by the total_campsites descending, this is exactly what we saw in the SQL exercise.
>
> **[5:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=333)** Mesa Verde, Morefield Campground, 534.
>
> **[5:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=335)** And just important to note, the syntax is very different, but there is actually a function in pandas that does exactly what we're looking for.
>
> **[5:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=344)** So an important note that some of these functions, some things that exist in Python can make our lives a lot easier when we're trying to compute these maximums within groups, especially since pandas, it has a different concept of what windows functions are.
>
> **[5:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=358)** So moving on, these are the more complex exercises, similar to what we did in SQL.
>
> **[6:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=363)** Say you'll be in California this spring, you have time to visit three national parks, right?
>
> **[6:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=367)** How many combinations of natural parks can you visit?
>
> **[6:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=369)** And can you return the combinations in a list ordered by the name of the first park?
>
> **[6:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=374)** This is actually a lot simpler than what we did in SQL, and it's accomplished with the itertools library.
>
> **[6:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=380)** So what we're going to do here is we're going to take our national_parks DataFrame, we're going to filter on parks that are in California and get unique parks in California.
>
> **[6:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=390)** From there, combinations, we can just do a list of itertool.combinations(unique_ca_parks), and getting three values from that list of values.
>
> **[6:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=400)** So let's walk through this step by step just to be very clear.
>
> **[6:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=403)** So if I just want to look at this, this is actually a list of unique parks in California, and then the combinations is just going to take three distinct values from this list and join them.
>
> **[6:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=418)** Whoops, so I didn't actually run this cell, which we need to do in order to see the intermediate step.
>
> **[7:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=423)** So there, we're getting the combinations of those three parks, and then finally, we're sorting them in the next step.
>
> **[7:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=430)** And so the original question, we can delete this cell here.
>
> **[7:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=434)** The original question is saying, can you return the combinations in a list ordered by the name of the first park?
>
> **[7:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=439)** And we're doing just that here.
>
> **[7:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=440)** So the next question, find the combinations in alphabetical order, right?
>
> **[7:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=446)** C, D, J, that would be an alphabetical order.
>
> **[7:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=449)** We can use the list comprehension in Python to do that.
>
> **[7:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=451)** C for c in the combinations if the list is equal to the sorted version of the list.
>
> **[7:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=457)** This is a really common method in Python where to see if you have the sorted version of a list or to see if something is in order, you just say, list of that thing equals the sorted version of that thing.
>
> **[7:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=469)** And we know if those two are equal, the list is already sorted.
>
> **[7:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=471)** So that's a really simple way to get at that data.
>
> **[7:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=475)** And this is the subset of that list.
>
> **[7:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=478)** So I'd be remiss if we didn't do some work on time series data and data generation.
>
> **[8:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=483)** And that's what we'll do here.
>
> **[8:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=484)** So we're going to pull in our alerts DataFrame and we're going to create a new column, alert_date, that converts lastIndexDate to a datetime or a date, rather than a time.
>
> **[8:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=492)** And that's exactly what we did in those earlier lessons.
>
> **[8:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=495)** Now, we're going to group by the alert_date and category and return a count on the number of alerts per category per day.
>
> **[8:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=503)** Very simple.
>
> **[8:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=504)** But this is the same problem we had before where there's date gaps here.
>
> **[8:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=508)** So that's a call out that we'll address in a little bit or that you've already addressed maybe.
>
> **[8:33](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=513)** Next, we're going to join the parks DataFrame on parkCode to create a new DataFrame.
>
> **[8:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=518)** We've done that.
>
> **[8:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=519)** And finally, we're going to return a DataFrame that contains the latest alert date for each park.
>
> **[8:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=525)** Very simple, groupby("name")["Alert_date"]max.
>
> **[8:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=529)** Pretty straightforward in Python.
>
> **[8:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=531)** Now back to our joined df.
>
> **[8:53](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=533)** Let's tie all of the concepts we've discussed together.
>
> **[8:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=536)** Let's analyze alerts by state.
>
> **[8:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=538)** Before we were looking at them by category.
>
> **[8:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=539)** So this is slightly different.
>
> **[9:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=541)** And an important note I mentioned there.
>
> **[9:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=542)** Note that this means one alert can apply to multiple states.
>
> **[9:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=545)** So can you create a DataFrame of alert counts by day, grouped by state?
>
> **[9:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=550)** So similar to what we did before, we're going to explode the states list.
>
> **[9:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=554)** So that gets us a DataFrame.
>
> **[9:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=556)** And if we're thinking in terms of the dimensions and the grain of this DataFrame, the grain is going to be by date by state, (instructor chuckling) and we're going to group by the alert_date and by the states_list, which after exploding is just going to be individual states.
>
> **[9:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=569)** So you have to keep track of that and get the title and then count it and reset the index.
>
> **[9:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=574)** This is just renaming the title to the number of alerts, and we're going to look at that DataFrame.
>
> **[9:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=578)** So if we run that, we now have our states_list with a number of alerts.
>
> **[9:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=582)** Each state should have an alert_date, but this is the same issue we dealt with before where there are gaps in these alert dates.
>
> **[9:50](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=590)** And so we're going to have to do something similar to what we did in our earlier lesson on data generation.
>
> **[9:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=596)** So how do we fill in the gaps?
>
> **[9:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=598)** There's some hints up there, but we'll just walk through this solution.
>
> **[10:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=601)** We're going to set the alert_date as a datetime of the alert_date just to make sure that it's properly formatted.
>
> **[10:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=608)** And then we're using this syntax here, the groupby a grouper where the frequency is a day on the states themselves, not the category like we did last time, but the states.
>
> **[10:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=619)** And then we're going to select the number of alerts and perform a count.
>
> **[10:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=623)** And then once we've done that, we can get the individual states, same thing we did with the categories and apply the unstack method there to them to get a really wide DataFrame, I should say.
>
> **[10:37](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=637)** Actually, a 50-column-wide DataFrame, if you know anything about how many states there are, with a unstacked version of our states list with the number of alerts for every single state, for every single date that we're looking for, which is perfect.
>
> **[10:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=651)** That's exactly what we're after.
>
> **[10:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=652)** And now we can do something really simple.
>
> **[10:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=654)** It's really simple to calculate the 28-day rolling average of those alerts by state.
>
> **[10:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=658)** We've already talked about the syntax here.
>
> **[11:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=660)** The DataFrame .rolling window is whatever window we want.
>
> **[11:04](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=664)** We're going to sum and rename that column to something that makes sense.
>
> **[11:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=667)** Beautiful. And that's really what we're after.
>
> **[11:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=669)** We have rolling 28-day alerts for every single state in those national parks.
>
> **[11:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=673)** Now, it's important to note, if there's a park that's in multiple states, alerts will be duplicated here, right?
>
> **[11:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=679)** Like for Yellowstone, which is in Wyoming, Montana, it's in three states.
>
> **[11:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=683)** We know that much.
>
> **[11:24](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=684)** But that means it'll appear three times in this graph.
>
> **[11:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=686)** And this is an exercise, but it's important to think about the implications of unstacking and stacking things.
>
> **[11:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=691)** So just in your mind, realize, oh hey, we might be counting things multiple times, but that's okay 'cause we want a state-level view.
>
> **[11:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=698)** And as a bonus, can you plot the 28-day rolling alerts by state using Plotly?
>
> **[11:43](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=703)** So if we only take alerts after 22-01-01, we can see what comes up.
>
> **[11:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=708)** There might be a lot of lines in this.
>
> **[11:51](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=711)** So which state has the most alerts in 2024?
>
> **[11:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=714)** If we look at this line here, looks like California does.
>
> **[11:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=717)** Which makes sense because California has the most national parks and there are also a lot of fires.
>
> **[12:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=721)** Although this year, it's been raining a lot, as a current resident of California, I can confirm.
>
> **[12:06](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=726)** Yeah, so that's it for the Python exercise.
>
> **[12:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=729)** We've went over every method we've discussed for transforming data.
>
> **[12:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=733)** We've worked with time series data, we've worked with aggregations, with window functions, and hopefully, you have a well-rounded view of [[Data Transformation]] with both SQL and Python in this course.
>
> **[12:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=743)** Up next, we're going to wrap things up.
>
> **[12:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=745)** We'll talk about next steps.
>
> **[12:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=746)** We'll talk about some further areas of investigation.
>
> **[12:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=750)** There's also a bonus SQL exercise that I haven't really dug into until now that you can dig into if you're interested.
>
> **[12:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=756)** And that's it for our pandas exercise.
>
> **[12:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/pandas-solution?u=76281980&t=759)** I'll catch you in the next section where we'll discuss some next steps for where you can head in your data transformation journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[SQL]] (9), [[Pandas (Software)|Pandas]] (4), [[Fetch]] (2), [[Windows]] (2)
> **Code Identifiers:** alert_date (6), total_campsites (4), fullname (3), states_list (2), name_park (1)
> **CLI Commands:** python (12), make (3), find (1)
> **Env Vars:** sql (9)
> **Analogies:** similar to (5), kind of like (1)
> **Definitions:** is a  (3), is an  (1)
> **Warnings:** important note (2), note that (1)
> **Cross-References:** in the next (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What you learned, how to practice and grow, and next steps](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=0)** - [Instructor] And that's a wrap on the fundamentals of [[Data Transformation]].
>
> **[0:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=3)** So thank you so much for taking this course.
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=5)** It really means a lot to me, and I'm really grateful to be able to share this journey with you.
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=10)** In sort of the conclusion of the course, I always recommend you to reflect a little bit, and it would be helpful for my purposes as well.
>
> **[0:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=16)** If you thought about what was helpful in this course, what wasn't, if there are any aspects you particularly enjoyed or any you didn't, and please feel free to share those in the course comments, in the course notes.
>
> **[0:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=26)** I'm going to provide my contact information.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=28)** I'd love for you to reach out to me and share your data transformation journey.
>
> **[0:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=31)** And as a next step, I always advise students to find projects as soon as they can or find things that you're curious about to investigate.
>
> **[0:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=39)** Because in my own career journey and my own experience, that's been when I've had the most fun when I've found the projects that I really love were really just by following curiosities, following questions or problems that I saw that really sparked that interest.
>
> **[0:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=56)** So that's been a big source of motivation for me, and you might find it to be rewarding as well.
>
> **[1:02](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=62)** Some additional [[LinkedIn]] Learning resources around [[Pandas (Software)|Pandas]] and [[SQL]].
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=65)** There's Pandas Essential Training, which might also kind of be a precursor to this course, but it can help you fill in some gaps if things were confusing.
>
> **[1:13](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=73)** There's also advanced Pandas if you're interested.
>
> **[1:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=76)** Some other SQL resources.
>
> **[1:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=77)** There's a [[SQL Essential Training]] if you'd like, again, to fill in some of the basics there.
>
> **[1:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=82)** And there's another course on learning SQL as well as a course on [[SQL for Data Analysis]].
>
> **[1:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=87)** So the links are all in the slides. Check those out.
>
> **[1:29](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=89)** And I'd like to share a bit about me 'cause I haven't had a chance to do that yet.
>
> **[1:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=92)** So I'm Matt.
>
> **[1:34](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=94)** I currently work in Developer Relations at Replit, which is a [[Software Development]] platform.
>
> **[1:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=98)** If you haven't heard of Replit and you're interested in learning more about coding specifically, it might be interesting for you.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=104)** We also make deployments really simple, so be sure to check rept out.
>
> **[1:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=107)** If you're looking for a way to build your own projects, deploy them, maybe automate some tricky stuff either in your own workflows or things at your job, it's also a really great way to learn AI tooling.
>
> **[1:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=118)** I have some great templates available to get started.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=121)** Previously I was a Product Analyst at AllTrails, worked with a lot of really fun hiking data.
>
> **[2:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=127)** I've also worked as a data engineer at a company called Underline Infrastructure, and in developer relations at another [[Data Engineering]] tool.
>
> **[2:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=134)** But lastly, if you'd like to say hi on X or drop me a note on LinkedIn, you can scan one of these QR codes to connect or follow me.
>
> **[2:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=142)** Again, I'd love to hear your thoughts, love to hear a little bit more about your data transformation journey, and it's been my pleasure to be able to share this course with you.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=150)** So, thank you sincerely.
>
> **[2:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=152)** Lastly, I've mentioned this a little bit in the course notes in the README there is a bonus sequel challenge.
>
> **[2:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=158)** If you'd like to stick around.
>
> **[2:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=160)** That'll be available in the next few videos.
>
> **[2:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=162)** This is something that I was just playing around with and I thought was fun.
>
> **[2:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=165)** So that's my gift to you and I hope you enjoy it.
>
> **[2:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/what-we-learned-how-to-practice-and-grow-and-next-steps?u=76281980&t=168)** But if you're done with this, I totally understand and good luck with the [[Representational State Transfer (REST)|rest]] of your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Transformation]] (3), [[Pandas (Software)|Pandas]] (3), [[LinkedIn]] (2), [[Software Development]] (1)
> **Env Vars:** sql (5), readme (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Documentation:** the readme (1)
> **Speakers:** - [instructor] (1)

#### [SQL bonus challenge](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=5)** - [Instructor] So if you're watching this video, I'm really excited you've decided to take the challenge and tackle this bonus exercise.
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=10)** This one's just kind of more fun and it has more to do with combinations and permutations, something that we discussed a bit in [[SQL]] but is kind of outside of this course.
>
> **[0:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=19)** And if you're wondering how I came up with this, I was basically just playing around and thought, "Oh, this would be fun to share with people."
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=25)** This would be fun data to play around with to see if you really have a really good understanding of SQL as a language to get through this data.
>
> **[0:32](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=32)** So this is very similar to how we started other exercises off.
>
> **[0:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=36)** I'm just in the blank-exercise_bonus file in the appendix section with sql-bonus-exercise.
>
> **[0:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=42)** And here I'm going to initialize duckdb and then load in our data source, which is a DataFrame of Powerball rows.
>
> **[0:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=49)** And Powerball is just a lottery in the United States if you're joining us internationally.
>
> **[0:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=52)** So if I SELECT * FROM powerball_df LIMIT 5, we're actually going to pull the data in from that DataFrame.
>
> **[0:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=59)** So running that, you can see it's actually just draw dates, winning numbers and a multiplier.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=65)** And there's some information here that kind of kicks this off.
>
> **[1:08](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=68)** The winning numbers are made up of five white balls from a matrix of 69.
>
> **[1:12](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=72)** So you can consider these to be the numbers one through 69 and a Powerball from a matrix of 26.
>
> **[1:19](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=79)** So the Powerball, there are five numbers here, one through 69, and the last number is one through 26, resulting in jackpot odds of one in like 292 million.
>
> **[1:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=88)** So lesson, if you've taken anything away from this so far, the lottery is not a super great idea (instructor laughing) and they will always win in the end.
>
> **[1:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=96)** But the goal here is going to be to do some stuff with these numbers and compute a few probabilities and also the historical numbers that have been drawn.
>
> **[1:44](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=104)** So I'll join you in the completed exercise.
>
> **[1:47](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=107)** Again, this one's more of a bonus. This one's more fun.
>
> **[1:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=109)** So this will be a bit less of an in-depth walkthrough and more of just a cursory glance at what I came up with.
>
> **[1:55](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=115)** Maybe you came up with something different.
>
> **[1:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-challenge?u=76281980&t=116)** I'll see you over there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Env Vars:** sql (2), select (1), limit (1)
> **Code Identifiers:** exercise_bonus (1), powerball_df (1)
> **SQL:** select (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [SQL bonus solution](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=0)** - [Instructor] Okay, so we're back and we're going to talk about the solutions to our bonus [[SQL]] challenge.
>
> **[0:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=10)** This one's more for fun, again, I wouldn't take this one as seriously as the [[Representational State Transfer (REST)|rest]] of the course, but that's the whole point, right?
>
> **[0:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=15)** We're trying to have fun.
>
> **[0:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=16)** So if we run this cell, we can see an example of our data frame, and the first question, write a query that splits the winning numbers into separate columns.
>
> **[0:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=23)** Your query should return a result with columns.
>
> **[0:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=25)** There are the columns, and the way to do this is just to use split_part.
>
> **[0:28](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=28)** This is a DuckDB function that you kind of have to look elsewhere to find, but we're splitting each part of that space-separated list of numbers, so one through six as well as a multiplier that is in its own column, and we can even rename this to multiplier.
>
> **[0:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=46)** So there you go.
>
> **[0:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=48)** Using the above as a base, we're going to write a new query that returns a table where each drawn number represents a row and each column is the count of occurrences where that number was drawn in the proper position.
>
> **[1:00](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=60)** So it should look like this, right?
>
> **[1:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=61)** So for each drawn number, we're going to return.
>
> **[1:05](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=65)** So the range one, two, three, four, five is going to refer to numbers one, two, three, four, five.
>
> **[1:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=70)** And then we're going to count the number of times where this number, 11, was drawn in the one position, and then the number of times where it was drawn in the two position correctly, and three position, four position, five position, et cetera.
>
> **[1:25](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=85)** And then the same thing for number two.
>
> **[1:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=86)** So you can see in this example, the number two for the number one, so that 11 corresponds to the range string 11, for example, five, we're looking at the number of times that 05 was drawn in the first position.
>
> **[1:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=101)** This value would go into this box, and we're counting those up as such.
>
> **[1:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=105)** And the numbers aren't actually numbers, right, they're left-padded strings, so we can't apply number functions to this range string, and we can't be sure every number has been drawn to create the index, right, 'cause if range string was never drawn, it might be missing from that index.
>
> **[2:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=121)** So the way I tackled this was using numbers as our base, that's going to be one of our CTEs, and then generating a range.
>
> **[2:09](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=129)** So I'm generating a range between 1 and 70 because we know that 69 is the max number in this dataset.
>
> **[2:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=135)** We're just going to pad that range and convert it to text to bring it to the same form as our other numbers.
>
> **[2:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=141)** So we can take a look at what this looks like if we run this, so I'll drop this in a new cell.
>
> **[2:30](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=150)** And you can see we get an actual integer, but then we get a number, a padded string, that's equivalent to the other values that we have, so we should be able to join on this in our dataset.
>
> **[2:39](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=159)** So with those two things, I'm selecting from our numbers, so this right here, as well as a range, so I'm cross-joining this, and then I'm counting the cases when that range string is equal to the first number.
>
> **[2:54](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=174)** So I run this, we get what we're looking for there, which is for each number, we're counting the number of times that it was selected in the correct position.
>
> **[3:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=183)** So this exercise, we're going to modify the previous query to return the most common number for each draw.
>
> **[3:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=190)** And if you see, we've run this, this is basically calculating which number is most often drawn in which position.
>
> **[3:17](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=197)** So one, the number 01 is most often drawn in the first position, 12 in the second, et cetera.
>
> **[3:22](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=202)** And this just builds off of the last query, we're doing all the same stuff, but then we're counting, we're taking the first value using window functions over order by number one count descending as the most popular number.
>
> **[3:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=215)** So this is just using a window function to get the most popular number within each column and return those for us.
>
> **[3:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=221)** So in addition, let's return the percentage of time that number was drawn.
>
> **[3:45](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=225)** Again, this is a slight change to the preceding query where we're just going to calculate the number of draws by counting the total number of rows from this data frame.
>
> **[3:56](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=236)** And then we're dividing those values to actually get the percentage values.
>
> **[4:01](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=241)** And you can see this requires an additional query to get everything, so we'll walk through this, but very similar to what we just did in the last exercise.
>
> **[4:10](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=250)** So we have these first values, we're getting the most popular numbers, and then in this example, we're both getting the percentages, dividing those numbers by the percentages with our cross join, and returning the percentage of times that those numbers were drawn.
>
> **[4:26](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=266)** And so then we're asking, have the most popular numbers ever been drawn sequentially?
>
> **[4:31](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=271)** So for these highest [[Probability]] numbers, we can just define the string winning_numbers and select from the Powerball dataset, the answer is no.
>
> **[4:40](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=280)** Potentially disappointing.
>
> **[4:41](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=281)** So next sort of bonus question, let's write a query for each draw number returns the first date that it was drawn.
>
> **[4:48](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=288)** So this is an example, for each Powerball number, the first date that it was drawn in that slot, the first date that 01 was drawn as the first number, et cetera.
>
> **[4:58](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=298)** Similar to what we've been doing, there are a lot of actually just CTEs in my solution to this one, but we'll walk through it.
>
> **[5:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=303)** So just like we did before, we're getting a draw date and we're extracting that.
>
> **[5:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=307)** I'm using the strptime function from the first variable.
>
> **[5:11](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=311)** This is something that you can look up in the documentation, pretty straightforward.
>
> **[5:15](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=315)** Again, none of this is really covered in the course, this is more of just a bonus for you to play around with.
>
> **[5:20](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=320)** But we're extracting the draw date using this string function, and then that's going to be passed into our next function.
>
> **[5:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=327)** So for each number, note that these are equivalent, like one, two, three, four, five, six, I'm just making slight changes in CTEs.
>
> **[5:35](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=335)** We're selecting the minimum number, the minimum draw date over the partition of that number.
>
> **[5:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=342)** So for each number, you can visualize the nums df here, this is joined into the range again to make sure every number is accounted for.
>
> **[5:49](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=349)** We're going to get the minimum draw date over the partition of that number, and that's going to return this value for us here.
>
> **[5:57](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=357)** So doing that for every number and then joining them all together into that range.
>
> **[6:03](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=363)** So again, we're using that data generation to generate kind of like a spine and then joining these CTEs into them consecutively, is going to allow us to get the data frame that we're after.
>
> **[6:14](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=374)** So we're on the cell.
>
> **[6:16](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=376)** You can see we get for each Powerball the date that it was drawn in the corresponding slot.
>
> **[6:23](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=383)** And it makes sense that none of these has been drawn for, or actually, it would make sense that we're getting no draws on the multiplier value, but I think the rules have changed, so these might not line up exactly to the definition of the original rule.
>
> **[6:36](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=396)** Things might have looked a little bit differently in the first iterations.
>
> **[6:38](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=398)** But now we're going to look at, I think this is, we have two more queries here.
>
> **[6:42](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=402)** We're going to look at the first drawn set of numbers by windowing over the previous results.
>
> **[6:46](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=406)** So we want to get the minimum value basically for each column.
>
> **[6:52](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=412)** So you can think of just using the previous query, everything we just wrote out, and then using a distinct first value query to select the minimum numbers.
>
> **[6:59](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=419)** And then you can check your result, right, by looking at getting the minimum date from that data frame and selecting the minimum date.
>
> **[7:07](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=427)** So this is the original minimum date numbers, and we can check that our big, long, complex window query returns the same thing, 17, 22, 36, 37, 52, and 24.
>
> **[7:18](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=438)** And yeah, this was just a fun little exercise of playing around with some data.
>
> **[7:21](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=441)** Again, this is a bonus, so don't sweat it if you don't want to work through this one or if you just want to see some kind of complex solutions.
>
> **[7:27](https://www.linkedin.com/learning/fundamentals-of-data-transformation-for-data-engineering/sql-bonus-solution?u=76281980&t=447)** Yeah, hopefully, you enjoyed the rest of the course, and good luck with the rest of your [[Data Transformation]] journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[SQL]] (1), [[Probability]] (1), [[Data Transformation]] (1)
> **Analogies:** similar to (2), for example (1), just like (1), kind of like (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** split_part (1), winning_numbers (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Documentation:** the documentation (1)


## Instructor

- [[Matt Palmer]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/fundamentals-of-data-transformation-4554074/codespaces)

## Skills Covered

- Data Engineering
- Data Transformation

## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[ETL in Python and SQL]] | **4 of 10** | [[Complete Guide to Data Lakes and Lakehouses]] →

## Appears In

- [[Advance Your Data Engineering Skills]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering

---

[↑ Back to top](#)