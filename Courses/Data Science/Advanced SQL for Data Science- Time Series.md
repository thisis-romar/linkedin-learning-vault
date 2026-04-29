---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-for-data-science-time-series
url: "https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series"
duration_minutes: 80
duration: 1h 20m
level: Advanced
updated: 3/7/2024
learners: 32384
skills:
  - Time Series Analysis
  - SQL
  - Data Science
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG1roPdCoYYiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619133486775?e=2147483647&amp;v=beta&amp;t=7EQ9E6PiCWCM5aooupJM6MuzgfOq3qJoxusoU4YHP1M"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL for Data Science]]'
prev_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
path_nav: '[{"path":"Master SQL for Data Science","position":6,"total":6,"prev":"Advanced SQL for Query Tuning and Performance Optimization","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/time-series-analysis
  - skill/sql
  - skill/data-science
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md)

![Advanced SQL for Data Science: Time Series](https://media.licdn.com/dms/image/v2/C4E0DAQG1roPdCoYYiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619133486775?e=2147483647&amp;v=beta&amp;t=7EQ9E6PiCWCM5aooupJM6MuzgfOq3qJoxusoU4YHP1M)

# Advanced SQL for Data Science: Time Series

> Time series data is data gathered over time: performance metrics, user interactions, and information collected by sensors. Since different time series data have different measures and different intervals, these data present a unique challenge for data scientists. However, SQL has some features designed to help. This course teaches you how to standardize and model time series data with them. Instru

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series) | 1h 20m | Advanced | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Learn time series data analysis with SQL
  - What you should know
- [**1. Introduction to Time Series Data**](#1-introduction-to-time-series-data) (4 videos)
  - Characteristics of time series data
  - Examples of time series data
  - Writing time series data
  - Querying time series data
- [**2. Installing Database and Tools**](#2-installing-database-and-tools) (4 videos)
  - Installing PostgreSQL
  - Creating schema and tables
  - Timing a query
  - Evaluating query performance with EXPLAIN
- [**3. Querying Time Series Data**](#3-querying-time-series-data) (5 videos)
  - Time window queries and aggregates
  - Sliding windows
  - Tumbling windows
  - Joining two time series
  - Denormalizing time series data
- [**4. Modeling Time Series Data**](#4-modeling-time-series-data) (7 videos)
  - Example data set 1: Temperature by time and location
  - Indexing data set 1: Time index only
  - Indexing data set 1: Time and location index
  - Creating a partitioned table
  - Querying a partitioned table
  - Example data set 2: CPU utilization and application type
  - Indexing data set 2: Time and type Indexing
- [**5. Commonly Used Functions for Time Series**](#5-commonly-used-functions-for-time-series) (4 videos)
  - Lead
  - Lag
  - Rank
  - Percent rank
- [**6. Time Series Analysis**](#6-time-series-analysis) (7 videos)
  - Common Table Expressions and recursion
  - Calculating aggregates over windows
  - Previous day comparison
  - Moving averages
  - Weighted moving averages
  - Forecasting with linear regression
  - Exponential moving average
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Learn time series data analysis with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=0)** - [Instructor] More and more data is being collected from sensors, mobile devices, user interactions with web applications, as well as observability metrics.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=9)** Now, one thing all of these have in common is that they can be modeled as a series of events that happen over time.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=16)** Analyzing time series data like this can be challenging, but SQL has evolved to include features that support just the kind of analysis we need.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=24)** My name is Dan Sullivan and I'm a data architect working on large scale time series applications and observability and security.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=30)** And in this course I'll show you how to use SQL to extract valuable information from time series data.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/learn-time-series-data-analysis-with-sql-23478409?u=76281980&t=37)** By the end of the course, you'll be familiar with common analysis patterns like moving averages, comparisons across period, exponential smoothing and forecasting with linear regression.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980&t=0)** - [Narrator] There are a few things you should know before taking this course.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980&t=4)** You should be familiar with SQL, and in particular, comfortable with how to use SELECT statements.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980&t=9)** You should also be familiar with SQL tables and views, how to create them, and how to load data into tables.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980&t=15)** You should be familiar with sub-queries and joins.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/what-you-should-know?u=76281980&t=19)** If you have those three things down, you're ready to go for this course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), select (1)
> **SQL:** select (1)
> **Speakers:** - [narrator] (1)


### 1. Introduction to Time Series Data

> [↑ Back to Table of Contents](#table-of-contents)

#### Characteristics of time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=0)** - [Instructor] Let's begin by looking at the structure of time series data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=4)** Time series data is a sequence of data points.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=7)** Now, each of these data points includes a timestamp.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=11)** Timestamps usually usually include a date and time, and sometimes they go down into the milliseconds or even microseconds.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=18)** Now, in the time series data that we're going to work with, our data will be generated at regular intervals, and each of these data points will have one or more measurements.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=26)** Now, when we talk about intervals, what we're really talking about is frequency.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=31)** How often is a data point sent to us?
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=34)** And that can vary by application to application.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=37)** So if for example, you're measuring CPU utilization, you might be measuring in terms of seconds, even milliseconds, but if you're measuring something like births and deaths in the human population, then probably measuring at an annual frequency would be enough.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=52)** Many different types of time series data use different intervals or different frequencies.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=57)** Now, another thing we want to look at is the unit of measure.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=61)** Now in time series data, we have measurements that are numbers, but what do those numbers represent?
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=67)** That's the kind of thing we need to know when we're working with data with time series data because the unit of measure is typically not included with the data.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=76)** Now, this is done since it's always the same, so it would be redundant to carry the unit of measure along with the data point.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=83)** Now, some common units of measure are percentages.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=87)** For example, if you're looking at CPU utilization or free memory, you might be measuring in percentages.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=92)** If you're looking at, say, the number of units produced or the number of customers served in a restaurant, our unit of measure is a count.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=100)** Oftentimes, we have to deal with financial data as well.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=104)** Now, in the case of working with financial data, like a company profit, we'll typically use some kind of monetary unit, like dollars or euros.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=111)** But again, the unit of measure that we deal with will typically vary by application.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=116)** Now, we also want to look at different metric types or different types of measurements.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=122)** A common one is a counter.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=124)** Counters monotonically increase.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=127)** So for example, if we were counting the number of cars that pass through a toll booth, that number will continuously increase.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=134)** It will never go down.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=136)** Another common metric is called a gauge, and a gauge is a numerical measure that can go up or down.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=143)** So for example, the temperature of a room is a gauge.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=146)** Another type of measure is a summary.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=149)** Summaries calculate values over some period of time or some time window, and these could be counts, or they could be rates.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=156)** Less often but sometimes, we do also see histograms, and histograms are used to count items over buckets.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=164)** Now, an important thing to note is that there may be different types of timestamps that we have to track in our time series data.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=172)** There is event time.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=174)** Now, event time is the time the actual event occurred or the data was being generated.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=180)** Now ingestion time is the time at which a data point is collected into a storage system or a database, and then processing time refers to the time period that the data is being analyzed prior to it being available for use.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=195)** We'll focus primarily on event time, but these are other types of timestamps convey important information about acquiring and processing time series data.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=204)** Now in this course, we're going to work with time series in relational databases.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=208)** So we'll be querying the data with SQL or SQL.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=212)** While we will often use relational databases in this course, other types of data storage systems often using cloud-based object storage are becoming more widely used for large-scale time series data analysis.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=226)** These are particularly useful when ingesting terabytes of data on a daily basis.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/characteristics-of-time-series-data-23475522?u=76281980&t=231)** Now, in this course, we'll restrict our attention to relational data stores, but just be aware, if you scale up to very large-scale time series applications, you'll probably start to want to look at an alternative method of storing and analyzing that data, typically, again, based on cloud-based object storage.

> [!info]- Semantic Content
>
> **Definitions:** is a  (7), is called (1), refers to (1)
> **Env Vars:** cpu (2), sql (2)
> **Analogies:** for example (4)
> **Code Keywords:** let (1), pass (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Examples of time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=0)** - [Instructor] Now let's look at some examples of time series data.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=3)** One that many of us are probably familiar with is stock market data.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=6)** For example, in the stock market, we have at particular points in time, we have measures of the value of a particular stock.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=12)** Another type of time series data we find in tide time tables.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=16)** So if you're interested in knowing when the low tide and high tide will be, you can refer to a tide time table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=23)** Another type of time series data is performance monitoring data.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=27)** And we see this often in monitoring software applications and servers, but it can be other types of industrial equipment as well.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=35)** Here we might take measures of the amount of utilization, the power consumption at a particular point in time, or other characteristics of a machine that we measure repeatedly over fixed periods of time.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=47)** Healthcare data can also be time series data.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=50)** For example, if we're measuring heart rates or performing an EEG, we'll get data generated at fixed intervals that measure particular health characteristics.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=60)** Sometimes we have a longer time horizon.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=63)** For example, if we're dealing with population statistics, that's still time series data, even though the data intervals might span months or years.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=71)** Business performance data is another type of time series data.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/examples-of-time-series-data?u=76281980&t=75)** So for example, a measure of revenue or profit over quarters for a particular business is another example of time series data.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** eeg (1)
> **Speakers:** - [instructor] (1)

#### Writing time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=0)** - [Instructor] Let's look at some data modeling issues that we should consider when working with time series data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=5)** The first phase of working with time series data is acquiring the data, often called the data ingest phase.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=11)** Data is generated from a data source, and it comes as a series of data points.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=16)** We store those data points in a data store, in our case, we're using a relational database.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=22)** Typically, we want to write the data to disk in the order in which we receive it.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=27)** Now, we have the potential for generating quite large tables, and one of the problems with that is that they can be difficult to query and manage.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=34)** So one of the things we want to think about when we're working with time series data is how to horizontally partition, or split these large tables by rows into smaller subtables.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=46)** So a partition is essentially a table.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=49)** There are different ways of partitioning.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=51)** One common way is called range partitioning.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=54)** When we use range partitioning, we break a large table up into partitions that don't overlap.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=61)** And typically, we'll use the date or timestamp as the key to determine how to allocate data to different partitions.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=69)** Now, we want to use partitioning by range when we often query the latest data, or if we're doing a lot of comparative queries.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=77)** So for example, comparing average sales for this quarter compared to average sales in the same quarter last year.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=84)** We also want to use range partitioning if we typically keep the data for a particular period of time and then drop it, or maybe summarize the data but delete all of the detailed data.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=94)** That's much easier to do when you have partitions that are organized by date.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/writing-time-series-data?u=76281980&t=98)** And all of these, querying latest data, performing comparative queries, and dropping older data are all common in time series applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), delete (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Querying time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=0)** - [Instructor] There are common query patterns we see when working with time series data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=5)** We often query the latest data.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=8)** Another common practice is comparing time periods.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=11)** For example, comparing the average revenue generated in a particular store on a particular day versus that same day in the prior month.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=19)** Another common pattern is to summarize or perform some other aggregate function over a time window.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=26)** Now, it's important to think about granularity when we talk about time series, and the granularity is defined by the frequency of the data that is generated.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=34)** Now, typically, the latest data is very fine grained.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=38)** So, for example, it might be at the second or minute level.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=41)** Now, over time, as the data ages, we're less likely to really want to query the fine-grained data.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=46)** So, for example, we don't necessarily want to know what the CPU utilization was on a particular server six week's ago at one in the afternoon.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=56)** Instead, we're more likely to want to know summaries or aggregates about data at those longer time intervals.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=62)** And, that's because we have different information drivers.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=64)** There's different questions we are trying to answer with that data.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=67)** When we're working with the latest data, we want to know things like, what's the current CPU utilization, or why is throughput down.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=74)** So, we're trying to get information that we can use to address problems that need to be addressed immediately.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=80)** But, often, when we're looking at older data, we're not trying to address immediate problems, we're looking at longer range problems.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=86)** Like, for example, are we running efficiently?
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=88)** What's the average CPU utilization?
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-time-series-data?u=76281980&t=90)** That's the kind of question that can be answered with aggregate data without the need to delve down into really fine-grained, detailed, data.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Env Vars:** cpu (3)
> **Code Keywords:** function (1)
> **Speakers:** - [instructor] (1)


### 2. Installing Database and Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing PostgreSQL
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=0)** - [Instructor] It's time to install our database.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=2)** We'll be using PostgreSQL, which is also called Postgres.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=6)** Let's start at the Postgres download page.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=9)** That's located at [https://www.postgresql.org/download](https://www.postgresql.org/download).
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=21)** There are options for a number of different operating systems.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=24)** I'm working on a Mac, so I'll select a link for that option.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=28)** There are several ways to install Postgres on a Mac, and I'm going to use the EnterpriseDB interactive installer.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=35)** It's easy to use and is available for Mac, Windows, and Linux operating systems.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=40)** I'll just click on the Download the Installer and now I'll choose the version that I'm interested in.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=46)** I want to use the latest version, which is 11.1, which is available for Mac and Windows at the time of this recording.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=54)** So I'll click Download, and it'll start downloading the image for me.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=57)** Now, if you're using Windows, you can select the Windows option appropriate for your version of the operating system.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=63)** Okay, now that the Postgres package is downloaded, I'll open it and start the installation.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=69)** And I'll see the Postgres installer here, and I'll double click on that.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=74)** And I get a security warning here, but I'm going to continue.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=77)** And I'll enter my password so I can install this software.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=81)** Now, on Windows or Linux, your steps may be slightly different, but the same general idea should apply.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=86)** Okay, I'm going to select Next from the startup wizard.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=90)** And I'm going to select all of the default options so that'll install Postgres for me, and it will also install PG Admin, which is a tool we'll be using for executing queries and navigating our way around our various tables and other data structures.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=105)** Now, you'll notice I already have an existing installation of Postgres, so it's just going to upgrade for me.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=111)** And similarly, I already have some data stored on the disk, so that data directory will be used for this installation.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=119)** And now, at this point, we should be saying similar things, if you don't have Postgres already installed, you'll get a pre-installation summary like this.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=126)** And we'll just click Next, and Next one more time.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=130)** And that'll execute the installation process.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=133)** You may have noticed that I received a message about closing PG Admin.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=138)** If you already have Postgres installed and you're updating, you may see a message similar to that as well And okay, the setup wizard is complete.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=145)** Now you have the option of installing some additional Postgres tools using something called Stack Builder.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=151)** We don't need any additional tools, so I'm going to uncheck that box and click Finish.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=156)** And that's it, we have Postgres installed.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/installing-postgresql?u=76281980&t=158)** In the next video, we'll take a look at PG Admin.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5), setup (1)
> **Code Keywords:** let (1), continue (1), this. (1)
> **UI Navigation:** click on (2), select the (1)
> **URLs:** [https://www.postgresql.org/download](https://www.postgresql.org/download) (1)
> **Versions:** 11.1 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Creating schema and tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=0)** - [Instructor] Now that we have PostgreSQL installed let's start pgAdmin.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=4)** Now, in a Mac I'm just going to hit the CMD + space and type in pgAdmin, and I'll select that, on Windows it'll be slightly different, but in either case, pgAdmin application will start.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=15)** You may see a notice about running a different version of pgAdmin, that's fine you can just ignore that.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=20)** Now, when pgAdmin opens, it has this welcome page.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=25)** The most important part that we're going to concentrate on, is over in the left panel.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=29)** There's a tree which we can navigate down, which starts with Servers, and you should notice PostgreSQL 11, and you'll notice Databases, Login/Groups, and Tablespaces.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=39)** We're interested in Databases, so we'll open that, and there should be one PostgreSQL database, and then there are a number of kinds of entities that are stored within the PostgreSQL database.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=49)** We're primarily concerned with schema, so I'm going to open that, and you'll notice there's a public schema.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=54)** Now, the first thing we want to do, is we want to create a schema for our time series data.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=59)** So, the way I'll do that, is I will open the Tools, and I will select Query Tool, and this opens a SQL window, and I'm just going to rearrange the window size a little bit here.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=70)** Now, I'm going to open up one of the exercise files, because that has the code for creating the tables that we're going to work with.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=78)** Now, I've saved my exercise files to my desktop, and then I also have this folder called Exercise on the desktop, and I've organized my files into chapters, so there's exercise files for chapter 2, and here I have the one SQL script that I'm interested in called create_time_series.sql.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=97)** So, I'm just going to double click on that to select it, and let's take a look at it.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=101)** We have a command that creates a schema, and we're going to call this schema time_series, and then there's an extra authorization command that's basically making PostgreSQL the owner.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=111)** We will create another table called location_temp, and that'll have three columns.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=117)** It'll have event time, it'll a temperature in celsius, and then a location ID.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=121)** That's a very simple time series data set.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=124)** And, we'll also have an ALTER statement to make PostgreSQL the owner of that, and then we have another table here, called time_series.utilization, so again, time_series is just the name of the schema, utilization is the name of the table.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=138)** And, this has more columns, we also have an event time, which is a type timestamp, and a timestamp includes the date plus the time, we have a sever ID, and with that server ID we also have CPU utilization, free memory, and session count, and we have to find our primary key to be the event time, and the server ID.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=158)** So, I'm just going to execute this script, and I do that by clicking on this icon which has a lightning bolt in it, and that'll execute, and that'll tell me that the tables are created.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=170)** Now, I'm going to navigate back over here to the left panel, and under Schemas I'm going to CTRL + click, and I'm going to refresh, and we'll notice now that we have a time series schema, and if we open that, we'll see that we have a number of things that you would expect to see in a schema, like Functions, Materialized Views, and most importantly for us, Tables.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=191)** So, I'll expand on that.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=192)** And so, what you see here is we have location_temp and utilization, those are the two tables that we created.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-schema-and-tables?u=76281980&t=198)** So, now we have our tables created, and we're going to go ahead in the next step, and add some data.

> [!info]- Semantic Content
>
> **Code Identifiers:** pgadmin (5), time_series (3), location_temp (2), create_time_series (1)
> **Env Vars:** sql (2), cmd (1), alter (1), cpu (1), ctrl (1)
> **Code Keywords:** let (2), case, (1), public (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** open the (1), click on (1)
> **File Paths:** create_time_series.sql (1)
> **Cross-References:** in the next (1)

#### Timing a query
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=0)** - [Instructor] Now I'm starting where we left off in the last video.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=3)** We're in pgAdmin, and we've just executed a script that creates a schema which includes two tables, which we'll load some time series data into.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=11)** Now, in addition to being able to create scripts and execute queries, one of the things that pgAdmin allows us to do is to keep track of the history of the queries that we've executed.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=21)** Now you'll notice down below there are a number of tabs.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=25)** We usually work with the message tab open, and that give us the results of the commands we execute.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=30)** Another tab that's important is the query history.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=33)** I'm just going to expand the lower window a little bit here and point out that this keeps track of the commands that we have executed.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=40)** This is useful for two things.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=42)** One is having a record of the duration of how long each command took to execute.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=48)** So, for example, in this case, the script took 236 milliseconds to execute.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=54)** This is useful when you're tuning SQL queries.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=56)** So you have your history of the queries, and you also have a history of the time it took to execute each of those queries.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/timing-a-query?u=76281980&t=62)** So that can help you as you're going about tuning queries and trying to find the optimal version.

> [!info]- Semantic Content
>
> **Code Identifiers:** pgadmin (2)
> **CLI Commands:** find (1)
> **Code Keywords:** case, (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Evaluating query performance with EXPLAIN
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=0)** - [Instructor] I'm continuing with pgAdmin but I've closed up the window that had the script re-executed.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=5)** So I'm going to to navigate over to the tree and open the time_series schema, and then go down to the Tables section and click on utilization.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=13)** And, I do that so that when I come up here to Tools and open a Query Tool window, it'll open that by default in that schema.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=21)** Now, I'm just going to do a simple select statement so let's select star from utilization, and I'm going to specify the name of the schema first and then the table name.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=31)** Now I'm going to execute this but there's no data in the table so nothing will show up here.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=36)** But that's okay.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=37)** What I want to do is show a couple of commands that we'll use throughout this course.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=41)** One is called the Explain command.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=44)** And, the Explain is added with any sequel statement or sequel query and what that does when you execute is it provides an description of how the query's executed.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=55)** Now because there's no data in this table, the Explain plan is pretty simple.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=59)** It's just going to do a sequential scan.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=61)** Explain plan is very useful when you're dealing with complex queries that take a long time and you're trying to optimize them.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=68)** Another thing you can do with Explain is include the optional Analyze command.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=73)** Now Explain Analyze will give you an Explain plan but it'll also execute the query, and when it does that, you'll notice down here at the bottom, it tells you the execution time so in this case it took about .03 milliseconds to execute.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/evaluating-query-performance-with-explain?u=76281980&t=88)** So that's another way to get the timing of a query, is by using Explain Analyze.

> [!info]- Semantic Content
>
> **Code Identifiers:** pgadmin (1), time_series (1)
> **UI Navigation:** open the (1), click on (1)
> **Code Keywords:** let (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 3. Querying Time Series Data

> [↑ Back to Table of Contents](#table-of-contents)

#### Time window queries and aggregates
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=0)** - [Instructor] We're going to make a lot of use of time window queries and aggregates when working with time series data.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=6)** A time window, or simply a window, is a set of contiguous rows.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=11)** Now the size of a window is simply the number of rows that we consider within that window.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=17)** Here's an example of a time series data table.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=20)** This table is called utilization, and it's time stamp is called event time.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=25)** And then we have some other IDs like server ID, so that tells us what, in this case what server we are measuring, and then we have three metrics that we measure.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=35)** CPU utilization, free memory, and session count.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=38)** Now here's an example query on that utilization table.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=42)** We're simply selecting the event time, the server, and the CPU utilization, free memory, and session count at a particular period in time.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=50)** In this case, we're looking at a span from one minute after midnight to 30 minutes after midnight.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=55)** So roughly a half hour period.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=57)** And we're simply listing out all of the data.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=60)** Now when we're looking at the broad data like that, sometimes we might want to order it in a particular order.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=65)** So for example, we've added an order by clause, and this orders the data by event time first, and then within a particular period of time, by server ID.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=75)** Now oftentimes, we don't want to look at just the raw data or the very low level data.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=80)** We want to look at aggregates, so in this example we apply the average function to CPU utilization and session count.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=87)** Now average is a pretty basic aggregate function.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=90)** Some others that are commonly used are min and max, and also standard deviation.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/time-window-queries-and-aggregates?u=76281980&t=95)** That helps us understand the distribution of data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (2)
> **Code Keywords:** function (2), case, (1)
> **Env Vars:** cpu (3)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Sliding windows
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=0)** - [Instructor] Sliding windows is an important concept in working with time series data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=4)** Now, a window, as I mentioned before, is a set of contiguous rows.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=9)** A sliding window is a window that moves through the table, typically one row at a time, but there could be other intervals as well.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=17)** Now, if you want to think about it visually, imagine this block of rows that is demarcated by the red box.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=24)** That's a window.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=25)** And sliding that window means that we move it one times increment at a step.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=31)** And we perform certain operations, like calculating averages or maxes or mins, across each of these.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=38)** We see these kinds of operations when we're monitoring change over time on a continuous time series.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=44)** It only usually is used when there's no logical boundaries.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=48)** So, for example, in the case of a stock market, we might want to have a moving average of the price of a stock over the course of a day.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=55)** Now at the end of the day, a stock market closes.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/sliding-windows?u=76281980&t=59)** So you wouldn't necessarily want to have a moving average that spans from one day to another, because the end of the day or close of the market marks a logical boundary for the stock market.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Tumbling windows
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=0)** - [Instructor] And another kind of window we'll encounter is called the tumbling window.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=4)** A tumbling window is defined by a window, which again, is a set of contiguous rows.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=8)** But when we slide the window, we don't slide just one row at a time.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=13)** We move the entire window to the next non overlapping area.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=17)** So let's visualize that.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=18)** Here we have a window defined by the number of rows within the red box.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=23)** Now, with a tumbling window, we jump down to the next row that was not included in the window.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=29)** And that marks the beginning of our next window.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=32)** So when we move again, we do it at an entire block or window at a time.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=37)** Now, we sometimes do tumbling windows when we're monitoring change over time, so this is similar to using sliding windows.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=43)** And we often see it when there's some kind of logical grouping of data by time.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=47)** For example, if we were looking at the stock market and we wanted to understand the average price per day of a particular stock, we might not want to have a tumbling window that tumbles on a daily basis.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/tumbling-windows?u=76281980&t=58)** Tumbling windows are useful for aggregate summaries about those particular time periods.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Joining two time series
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=0)** - [Instructor] Sometimes we need to join multiple time series.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=4)** For example, two time series may have different measurements over the same period.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=8)** For example, we might want to compare, or examine, server utilization and network throughput and latency over the same period of time.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=17)** So it's often useful to combine multiple measurements, or multiple time series.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=21)** Now there are some potential problems joining on time.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=24)** Times may have different precision, and actually the more precise, so the more we get down into seconds, and milliseconds, and microseconds, we're more likely to have inexact matches.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=35)** So for example, we might have two data points in two different time series that have the same hour, minute, and second, but have different fractions of a second.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=45)** So we need to take that into consideration when we plan on how we're going to do our joins.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=50)** We also need to consider the possibility of clock skew.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=54)** This occurs when the clocks used on different servers begin to shift and vary in time.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=59)** One way to deal with this is to use network time services to frequently check time and reset the time, so that we minimize the risk of clock skew.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=68)** But in any case, depending on the type of data you're working with, you want to keep in mind the potential for clock skew.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=74)** One way to deal with these issues is to truncate time, and basically that just means dropping the most precise time elements, like milliseconds or microseconds.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=83)** Essentially what we're doing is just using the timestamp according to its second or minute.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=88)** So in the previous example, if we use truncating, we would actually be able to get a match if we truncated to the seconds.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=96)** Also, if you do truncate, consider the possibility that you may have multiple rows with the same time.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=102)** Now, it's useful to aggregate over time windows, if that's the case you want to make sure you use a group by.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=108)** Consider the degree of precision that you want to have in that particular aggregate, and which aggregate functions you want to use.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=114)** And typically you want to produce one row per time period.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=118)** Now, this approach has some trade-offs.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=121)** It improves our ability to easily join, because we can choose a level of precision that makes it fairly likely that we'll be able to join without having mismatches because of very precise timestamps.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=132)** It can help us account for some clock skew, but this is just small amounts of clock skew, so across the milliseconds or seconds, we can account for that.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=140)** For example, if we're aggregating at a second level or a minute level.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=144)** But we won't be able to compensate for really large amounts of clock skew.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=148)** Another advantage is it allows us to summarize the data, so we get a more aggregate view of the data.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=153)** Now the trade-offs, the disadvantages are, we have a loss of precision, and we lose some of the detail.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/joining-two-time-series?u=76281980&t=159)** So if you can live with some loss of precision and some loss of detail, then aggregating data to a less precise time period may be a good way to addressing the problems of joining multiple time series.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Denormalizing time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=0)** - [Instructor] Sometimes we need to combine reference data with time series data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=5)** We can use denormalized tables for that.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=8)** So the idea behind denormalizing is that we combine columns from multiple tables into a single table.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=14)** This is called pre-joining, and some databases, like Postgres and Oracle and others, can support this kind of denormalizing using materialized views.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=24)** With denormalized data, we do a join once, and this is useful when the data is queried multiple times.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=31)** So rather than perform a join each time a query is executed, we can simply query the denormalized data table.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=38)** So if query response time is more important than storage and preprocessing time, than denormalizing data is a good approach.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=47)** So let's think about this in terms of the ingest pipeline.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=51)** We have a data source, and it's producing time series data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=54)** So this could be, well, let's say CPU utilization and other server utilization metrics.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=60)** We might want to add in related data, like the name of the department that's responsible for the server, the location of the server, and things like that.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=68)** We can combine or join the related data to the time series data and produce a table of denormalized data.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=75)** And we query that table of denormalized data.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=79)** Now, as with joining time series, there are some trade-offs.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=82)** On the advantages side, we typically get faster query response time if we've pre-joined data.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=87)** It allows us to capture point-in-time history.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=90)** So if the reference data changes, we still have copies of the way the data used to appear so that we can accurately represent what that reference data was at different points in time.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=101)** Now, the disadvantages are, of course, we're using more data storage because we're storing our time series data, we're storing our reference data, and we're storing the combination of the two.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/denormalizing-time-series-data?u=76281980&t=111)** Another disadvantage is it makes our ingest process more complex.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [instructor] (1)


### 4. Modeling Time Series Data

> [↑ Back to Table of Contents](#table-of-contents)

#### Example data set 1: Temperature by time and location
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=0)** - [Instructor] Now it's time to load some data.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=2)** Once again I'm in the Time Series Schema and I'm going to just click on tables.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=6)** I'm going to open a new query window.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=9)** Now I have a script which loads data into the location temp table, so I'm going to open that, open that script.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=19)** Now you'll notice I've already navigated to my directory and where I have the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=24)** So I've opened the exercise files and I'm just going to pop up and just point out that I'm in chapter four.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=31)** And under chapter four there are several files.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=33)** I'm going to select the file that starts with the name 4.1, and that's the load Time Series data script.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=40)** So I will select that, and you'll notice when I open the file, it inserts a copy command.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=47)** Now what it's doing, is it's copying to the time series dot location temp table and it's copying from a file in my home directory, sub-directory data called location temp dot txt.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=59)** So important for you to know, is that you'll have to change that file name to whatever path is where your data file is located.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=66)** The data file is included with the exercise file, so you'll just want to update the path there to point to the particular location of location temp dot txt.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=75)** You may need to change permissions on the data files.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=78)** I've created an instruction file with instructions for how to do that in Windows, Mac, and Linux.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=84)** That file is located in the exercise file directory for this chapter.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=90)** So this is a command, so I'm going to simply execute it and it will tell me that it executed successfully.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=97)** Now let's just take a quick look at some of the data.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=100)** So I'll clear that, I'll type select star from, and I'm going to specify the Time Series Schema, and the location temp table.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=110)** Oh, and let's just limit this to 100 rows.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=116)** And we'll execute.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=117)** So you'll notice the event time is a timestamp, so it has a date and a time.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=122)** There is a measure, in this case it's the temperature in celsius.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=126)** And then there's the location ID.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=128)** Now all of these are location zero, so let's change this up a little bit.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=132)** Let's add an order by statement, and let's order by event time.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=137)** Now when we execute the query, we're sorting based on time, so we're getting for example at the time 19:48:06, we're getting several different locations.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=147)** Location zero, one, two, and three.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=150)** Now if we wanted to put this in order, we could also add location ID so now we have it in the order of the time and the location.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-1-temperature-by-time-and-location?u=76281980&t=160)** This is just a quick look at the data in the location temp table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), from, (1)
> **Exercise Files:** exercise files (2), exercise file (2)
> **UI Navigation:** click on (1), select the (1), open the (1)
> **Definitions:** is a  (3)
> **Ports:** :48 (1), :06 (1)
> **Versions:** 4.1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Indexing data set 1: Time index only
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=0)** - [Instructor] Now, continuing from where we left off in the last video, I'm just going to clear this select statement, I want to take a look at how indexes can help us improve our query performance when we're working with time series data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=12)** The first thing I'd like to do is get the average temperature by location ID, so let's create a select statement for that.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=18)** And that'll be simply select, then we'll select the location ID, and the average temperature, which is temp_celcius.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=28)** And we're going to select from time_series schema and the location_temp table.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=34)** We have an aggregate function up here using average, so we're going to need a group by, so we'll group by location_id.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=41)** Now, I don't really want the average right now, what I'm really interested in is understanding how PostgreSQL will execute that query.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=49)** So, I'm going to put the explain command before the select statement and now when I execute, instead of getting the results of the query, I actually get the explain plan.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=59)** Let's take a quick look at that.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=61)** The way to read an explain plan is to start at the bottom and kind of work your way up.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=65)** First thing it's going to do is do a parallel sequence scan.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=70)** PostgreSQL is breaking this command down into different parts or partitions and it's using two workers to scan and sort.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=78)** The total cost, the thing we're really interested in, the total cost of executing this, is about 7337 computational units.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=89)** Let's execute now with explain and analyze.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=94)** Now this will run the query so that we actually get the time it takes to execute.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=100)** There's the explain plan and the execution time took about 192 milliseconds.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=107)** Now, let's create an index and see if we can improve on the performance.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=111)** So let's create index, and we'll call it idx, I use idx as a prefix, loc_temp_location, and this is going to be on the table, the time, location_temp, and it's going to be on the location_id column.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=129)** So, we'll build that index.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=131)** Now, let's go back in our query history.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=142)** Copy that.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=148)** Okay, now, let's again, we want to do an explain on the query select.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=153)** Location_id and the average temperature, which is temp_celcius, and this is from time_series schema and the location_temp table and we're going to group by location_id.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=177)** I'll just open that up.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=178)** Now, you'll notice the explain plan basically looks pretty similar, or perhaps even identical, to what we saw before we had the index.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=186)** In fact, the time is about the same, 7337 computational units.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=191)** So, it's not using an index, but that's because we're working with the whole table.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=195)** Let's add a where clause and see if limiting the scope of the select statement uses the where clause.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=202)** Let's limit this to location two.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=209)** Now when we execute this explain, the cost is much lower, which is to be expected, because we're only looking at a subset of the rows, but you'll notice at the bottom of the explain plan, the index condition is used.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=224)** It uses that index to also build something called a bitmap index.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=228)** Indexes are useful in some cases, but not necessarily all cases.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=233)** Let's drop the index and see how that impacts the explain plan.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=240)** So I'll specify drop index and the name of the index, which is idx_loc_temp_location and I'm just going to point out that we can double-check that by opening the location_temp table and you'll notice idx_loc_temp_location is the name, so we'll just drop that and then we'll execute the explain plan.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=265)** Now, without the index, cost is much higher.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=270)** This looks like it starts to be about 10,000 computational units to execute when we don't have an index.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=277)** So, indexes are really important for some select operations, but don't expect it to improve all the operations.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-index-only?u=76281980&t=283)** But that's okay, there are other techniques that we'll take a look at that can help when working with very large time series datasets.

> [!info]- Semantic Content
>
> **Code Identifiers:** location_temp (4), location_id (3), temp_celcius (2), time_series (2), idx_loc_temp_location (2)
> **Code Keywords:** let (10), function (1), this, (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Indexing data set 1: Time and location index
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=0)** - [Instructor] Now, let's work with indexes but this time instead of working just with location, let's use event time in our index and see if that helps improve things.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=9)** First thing I want to do is come over here to the indexes under the location temp column and I want to click refresh, and let's see if we have any indexes.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=17)** Okay, so there are no indexes there.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=19)** So we're starting with an index-free schema here, or at least with respect to this table, and we're going to work with our basic SQL query that we've been working with, which is to select by location ID the average temperature.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=33)** And that's from the time series schema table called location temp.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=38)** Now, I want to select based on time so I'm going to have a where clause that references event time and I'm going to select other rows on a particular day.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=46)** So I'll use the between operator and we'll pick the day of March 5th, 2019.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=54)** And we'll go to the 6th.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=56)** One convenient thing about working with dates with Postgres is it if a string is in a standard date format, which is year, month, day, it will automatically cast that string into a date-time or a timestamp as appropriate.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=70)** And I do want to do a group by, and I'm going to group by location ID.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=75)** So that's our basic query.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=77)** Now, I'm not actually interested in the results.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=79)** I'm more interested in the explain plan.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=82)** So I'm going to put the explain command before the select statement and then execute that.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=89)** And let's take a look at the query plan.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=92)** This is similar to what we've seen before.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=94)** We start with a parallel sequence scan.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=97)** So we have two workers that are scanning and sorting, and then the results are merged.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=101)** And the thing that's really most important to us is the cost.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=103)** And the cost here is about 7,640 computational units.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=108)** Okay, so we'll keep that number in mind.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=110)** Now let's create an index that references the time column.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=113)** In this case, it's called event time.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=115)** So we'll create an index and then we'll call it IDX loc temp, and we're referencing the time and location columns and we're building this index on the table in the time series schema called location temp, and the index should be built based on event time and location ID.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=141)** So we're creating an index that's first index based on event time and then on location.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=146)** And we'll execute.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=149)** Oh, had a typo there so I'll correct that and then run it again.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=156)** And you'll notice we've got basically the same explain plan that we saw earlier.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=160)** So even though we're doing group bys and we have an index, we're not using that index.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=168)** So let's try one other thing.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=169)** Let's make our select clause more specific.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=173)** And we'll do that by adding a time to our date.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=176)** So the reason the query plan builder isn't using the index is that it has to read so much of the table that using the index doesn't seem to help very much.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=183)** So let's make this more selective and let's select, rather than a 24-hour period, let's select a 20-minute period.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=189)** So I'll add an hour and minute and second time to the date.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=194)** So that'll start at midnight, and let's go to 20 minutes after midnight.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=198)** And let's take a look at that.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=202)** And then we already have the index so we don't need to create that again.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=207)** So we'll execute.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=210)** And we have a different explain plan here.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=215)** Notice we are using the index and it's building something called a bitmap index, and we're doing a hash aggregate.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=222)** And the cost is significantly less.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=224)** Here we're looking at about a cost of just under 3,000 computational units.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-1-time-and-location-index?u=76281980&t=228)** So the point here is that indexes are very helpful in some cases, especially when we're working with a limited subset of the data, but they don't always help when we're working with larger time spans.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), idx (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Creating a partitioned table
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=0)** - [Instructor] Now let's shift our focus away from indexing and let's take a look at partitioning.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=5)** Now, for this exercise I'm going to open one of the exercise files and I'm navigating to where I've stored my exercise files, and I've navigated to chapter four.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=14)** And I'm going to open the file called 4.4 partition by time dot SQL.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=20)** Now, this exercise file has a number of different parts, so let's take a walk through it.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=24)** The first statement creates a new table and this new table is called location underscore temp underscore P.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=30)** Now, location temp P is very similar to location temp but there are a couple of differences.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=36)** First, I've added a new column called event hour and this is simply going to be an integer between zero and 23 indicating the hour of the day.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=45)** The other thing you'll notice that's different is there is an additional statement called partition by range and it references that event hour column we're creating.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=55)** What this statement does is it creates a table but it indicates to Postgres that the table will also have partitions associated with it.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=63)** And the data will be distributed across those different partitions based on the event hour.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=68)** So let's scroll down a little bit and take a look at the next set of statements.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=72)** Here, we see two create table statements.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=75)** Now, these are different from other create table statements we've used because after we specify the name of a table to create, for example here we're saying create table in the time series schema called location underscore temp underscore P one.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=89)** Following that, we have the phrase partition of, followed by the name of the table we just created.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=95)** So the table that we're creating, loc underscore temp P one, is actually not an independent table but a table that implements a partition of the location temp P table.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=105)** Now, I mentioned that the data is distributed according to the event hour.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=110)** You'll notice on the second row the phrase, "Four values from zero to two."
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=115)** That means if the event hour in a row is between zero and two, then that row goes in this partition.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=122)** Now, I want to point out that the four values from takes two values, the beginning and end value.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=127)** The beginning value is inclusive, so zeroes are included in this partition.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=133)** The second value, the two, is exclusive, so a row with an event hour of two is not included in this partition, only zeroes and ones.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=143)** Notice on the next line we're creating an index on the event time for this partition.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=147)** So just as with other kinds of tables, we can create indexes within a partition table.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=153)** Now, in this second create table statement we're creating another table.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=158)** This one is called loc temp P two, which is short for partition two.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=162)** It's a partition of that same table, location temp P, and the values here are from two to four.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=169)** Now, in this case any row with an event hour of two or three will be stored in this partition.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=174)** And again you'll notice we're creating an index as well.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=177)** So let's just scroll down and we'll notice that we're creating 12 different partitions, and those correspond to the hours of zero through 23.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=187)** Now following the creating the partitions, we have an insert statement.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=192)** And this insert statement is inserting into the location temp P table.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=197)** This table, as you'll remember, has event time and location ID and temperature and Celsius just like location temp does, and we also have that new column, event hour.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=207)** So to populate this table I'm simply copying the data from location temp.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=212)** Now, in addition to copying the data that's in location temp, I have this additional column here in which I'm extracting the hour from event time.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=220)** And that's going to go into the event hour column.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=223)** Now we also have some explain statements here which I'm going to take out.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=228)** And we'll walk through these one at a time.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=230)** So I'll remove these here and now we'll execute.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=235)** So what we have done is created a table called location temp P.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=240)** So let's verify that.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=241)** We'll go over to tables, refresh, and we'll notice we have a new table, location temp P.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=247)** So let's expand on that.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=250)** As we might expect, we have four columns: the event time, event hour, the temperature in Celsius, and the location ID.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=257)** Also notice we have partitions option, so let's expand on that.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=262)** And what you'll notice here is we have 12 partitions, which are the partitions we created.
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/creating-a-partitioned-table?u=76281980&t=267)** So our script is executed correctly, we've created a new table, and that table has 12 partitions in it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), implements (1)
> **UI Navigation:** scroll down (2), open the (1)
> **Exercise Files:** exercise files (2), exercise file (1)
> **Definitions:** is called (2), is an  (1)
> **Analogies:** for example (1), just like (1)
> **Env Vars:** sql (1)
> **Versions:** 4.4 (1)
> **Speakers:** - [instructor] (1)

#### Querying a partitioned table
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=0)** - [Instructor] Now that we've created a partition table, let's look at some EXPLAIN PLANS for querying that table.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=5)** I'm going to open an exercise file, so I've navigated to chapter four and I'm going to open the file named 4.5 Query Partition Table.sql.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=15)** And, this file contains three explained statements and I'm basically going to run them from here other than typing them all in again.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=23)** And, so what I'll do, is I'm going to run the first one and you'll notice in this statement we're selecting location I.D and the average temperature from the location temp table.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=34)** So, this is the original one, this is the non partitioned temp table and we're looking for about a days worth of data.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=40)** So, when we execute that, we'll notice that we have the EXPLAIN PLAN, that we're probably familiar with now it's the parallel sequence scan followed by sorting and then the merging across two workers.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=52)** And, the key number we want to look at here is the cost.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=55)** And, it's a about 700, 7640 So, we'll just keep that number in mind.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=62)** And, now we'll scroll down to the second explained statement.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=66)** Here, we have basically the same query, but now we're running it on location temp p, with a partitioned version of the table.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=74)** Let me just move that window down a little bit so we can look at the two together.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=77)** So, these two select statements are basically the same, except for the table we're querying from.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=83)** Now, let's execute the query on the partition table.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=91)** Now, notice the cost here is much higher, we're up to about 9000.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=95)** Now, why is that?
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=97)** I though partitioning was supposed to make things easier.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=99)** Yes it does, the problem is, that in our WHERE statement, we're referencing event time and we're going across a day.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=108)** Now, if you recall, we partitioned based on event hour.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=112)** So, for example, the hours between midnight and 2 a.m, were stored in the same partition.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=118)** And, so, any row between the hours of midnight and 2 a.m were stored in the one partition regardless of what day it occurred on.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=127)** So, we're storing all of the hours, event hours, together.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=131)** So, let's look at an EXPLAIN PLAN, where we're querying based on event hour.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=139)** Now here, our cost is much lower, so the key thing to keep in mind, we want our partitions to reflect the query criteria that we'll use.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=148)** Specifically within the WHERE clause.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/querying-a-partitioned-table?u=76281980&t=150)** So the closer the WHERE clause is to the way we've partitioned, the more benefit we'll get from partitioning our data.

> [!info]- Semantic Content
>
> **Env Vars:** explain (3), where (3), plan (2), plans (1)
> **Code Keywords:** let (4), from. (1)
> **SQL:** where (3)
> **UI Navigation:** open the (1), scroll down (1)
> **File Paths:** table.sql (1)
> **CLI Commands:** make (1)
> **Versions:** 4.5 (1)
> **Exercise Files:** exercise file (1)

#### Example data set 2: CPU utilization and application type
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=1)** - Let's work with a different set of time series data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=4)** In this case, we'll work with some very simplified version of application performance monitoring data.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=11)** I'm going to navigate to the open file and I'm going to navigate to chapter four, and I'm going to locate the file called 4.6 Load_Utilization_Data.sql, and I'll just select that.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=25)** And you'll notice there is a copy command, so this is like the other copy command.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=30)** I'm going to copy data into a table called utilization, which is in the time series schema, and I'm going to copy it from a file called utilization.txt.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=39)** You want to change the path in the from clause to wherever you stored your exercise files.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=48)** So, execute the query.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=52)** And let's just take a quick look and see what the data looks like.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=57)** So we'll select, let's select star, from the utilization table, and that's, of course, in the time series schema.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=64)** And let's limit it to 100 rows.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=70)** Now, what you'll notice is that we have several columns, we have an event time, similar to the event time we had in location 10, and then we have a server id.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=80)** So this is an example of the kind of data you might get if you're monitoring a set of servers in a data center.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=86)** And the things that we want to measure are the CPU utilization at a particular point in time, the amount of free memory, now, both of those are reals, so those represent percentages.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=96)** So for example, in the first row, the CPU utilization is 57%, and the amount of free memory is 51% of the total amount of memory.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=106)** And then the last thing we have is the session count.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=109)** In this case, there are 47 sessions connected to that server.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/example-data-set-2-cpu-utilization-and-application-type?u=76281980&t=113)** So that's the utilization data that we'll be using.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2)
> **File Paths:** load_utilization_data.sql (1), utilization.txt (1)
> **Env Vars:** cpu (2)
> **UI Navigation:** navigate to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Versions:** 4.6 (1)
> **Exercise Files:** exercise files (1)

#### Indexing data set 2: Time and type Indexing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=0)** - [Instructor] Let's do some querying and creating indexes on utilization table we just created.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=5)** So let's start with a basic SELECT statement.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=8)** Now in this case, let's SELECT the server ID and the average CPU utilization.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=18)** This is from the time_series schema and the utilization table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=23)** And let's restrict this to a single day.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=26)** So we'll say WHERE the event_time is BETWEEN March 5th, 2019 and March 6th, 2019.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=37)** And we'll want to GROUP BY server ID.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=42)** And we also- Again, we're not so much interested in the data, as much as the EXPLAIN plans.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=47)** So I'm just going to put EXPLAIN in here.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=54)** And what we see, is we have a query that's costing about 3800, 3900 computational units.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=61)** Now, let's see if we can speed that up a little bit by creating an index.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=66)** So I'm going to insert another statement to create INDEX.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=71)** And we'll call this one, idx_util_time_serv, and this will be on time_series.utilization, and it will first be on event_time, and then server_id.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=87)** So we're at 3876 computational units without an index.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=93)** Let's see if adding an index will help with anything.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=99)** So there was some marginal improvement there.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=102)** So let's come on over here, and refresh.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=106)** We'll see this is the index we just created.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=110)** Let's drop that one, and create a different one.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=113)** So I'm just going to delete or DROP that.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=117)** And we'll remove this.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=121)** And now let's create a new index.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=122)** We'll call this one idx_util_serv_time on utilization, and it will be server_id and event_time.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=137)** So we switched the order of the two columns in this index.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=141)** I forgot to put time_series in.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=143)** There we go.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=149)** And now we're back.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=150)** Now, we didn't get any gains there and that's because the index couldn't be used.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=154)** Notice with the event_time is the second column to be indexed.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=159)** So with the only index being first by server_id and then by event_time, we weren't able to use the index at all.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=166)** So we couldn't even pick up that marginal gain that we had earlier.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=169)** So here again is another example where we want to use our strategies, whether they're indexing strategies or partitioning strategies, we want to use them in a way that they are in sync with the way we're actually querying.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/indexing-data-set-2-time-and-type-indexing?u=76281980&t=179)** And in particular, the way we are crafting our filter criteria in the WHERE clause.

> [!info]- Semantic Content
>
> **Code Identifiers:** event_time (5), time_series (3), server_id (3), idx_util_time_serv (1), idx_util_serv_time (1)
> **Code Keywords:** let (9), case, (1), delete (1), this. (1)
> **Env Vars:** select (2), where (2), explain (2), cpu (1), between (1)
> **SQL:** select (2), where (2), group by (1), index (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 5. Commonly Used Functions for Time Series

> [↑ Back to Table of Contents](#table-of-contents)

#### Lead
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lead?u=76281980)

#### Lag
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=0)** - [Instructor] Another windowing function we want to take a look at is called Lag.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=3)** It's like Lead, but it refers to rows that occur before the current row.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=9)** So rather than type everything in again, I'm going to navigate up to my chapter five exercise folder, and I'm going to open up Lag.SQL, and let's just take a quick look at this.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=29)** So what we have here is similar to what we had before.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=32)** We are selecting our department ID, our server ID, and CPU utilization, and then we want to look at the CPU utilization that came before the row.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=42)** So for example, let's execute this.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=44)** Now what you'll notice here, the first row doesn't have a predecessor, so its Lag value is null.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=50)** But the other rows contain the value that appeared in the row before.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=55)** Now, like the Lead function, you can change the offset.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=58)** So for example, if we wanted to look at a Lag of ten, then we can add ten to the Lag function call and execute, and you'll notice that the first ten rows have no predecessors, so they're all no.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=73)** But starting with 11, we can get the tenth row back value.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=77)** Which in this case is .07.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/lag?u=76281980&t=80)** So like Lead, Lag allows you to look backwards in an ordered list, to reference values that occur before, and in the case of Lead, to refer to values which occur forward of the current row.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), this. (2)
> **Analogies:** for example (2), it's like (1), similar to (1)
> **Env Vars:** cpu (2), sql (1)
> **Definitions:** is called (1), refers to (1)
> **File Paths:** lag.sql (1)
> **Speakers:** - [instructor] (1)

#### Rank
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=0)** - Now continuing from where we left off, let's look at a different kind of function.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=5)** We're going to look at one called rank.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=7)** We use rank when we want to know the relative order of a particular row relative to other rows.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=13)** So for example, if we wanted to know the ranking of each row we could use the rank function and apply that rank function over the window that we have been defining before, which is basically by department ID.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=26)** So, instead of returning a value that occurs in another row, rank will calculate an integer which indicates the relative order of a particular value in a series of rows.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=37)** So let's execute.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=39)** And what we have here is the value that is returned is a rank ordering.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=44)** So if we had 10 distinct values and had them sorted from largest to smallest and they were all unique, each of them would be assigned a rank from one through 10.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=54)** Now you'll notice here that the first two rows have the same value, so they have the same rank.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=60)** And then we're followed by several rows that also have the same rank.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=64)** So instead of assigning a one, two, three, four and so on, it assigns a relative rank.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=70)** So in the case of row three, we have the value of three, but the rows four through seven also have the value three, because CPU utilization is the same value.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/rank?u=76281980&t=80)** So that's the ranking, or the integer value of a row relative to its ranking order within a window.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2)
> **Env Vars:** cpu (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### Percent rank
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980&t=0)** - [Instructor] Now, in addition to an integer value indicating rank, another function that we can apply is called percent rank.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980&t=6)** Let's take a look at that.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980&t=9)** And when we execute this, we don't get an integer value.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980&t=14)** Instead, we get a real number, and basically this is the rank divided by the total number of rows.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/percent-rank?u=76281980&t=20)** So if you're looking to order rows, the two ways that you can use to measure that or to mark that is by using rank, which will give you an integer value, or percent rank, which will give you a value relative to the total number of rows.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), let (1), this, (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 6. Time Series Analysis

> [↑ Back to Table of Contents](#table-of-contents)

#### Common Table Expressions and recursion
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=0)** - [Lecturer] When we're working with time series data, we often need to reference the table in multiple times.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=6)** Now this can lead to a series of subqueries and they can get complicated and hard to read.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=11)** One of the options in newer versions of SQL is called Common Table Expressions.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=16)** And that's basically a way of creating a temporary table that's used just with a single select statement.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=21)** Let's take a look at how that's done.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=24)** We start with a with statement and we specify the name of our temporary table.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=29)** Now let's say I'd like to get a daily average temperature.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=32)** So let's create daily average temp.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=35)** And we'll create that as, and we'll specify a select statement that will define this temporary table.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=40)** And I'm going to select, let's see, well, of course I want to work with the event time, since we're working with dates.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=47)** Now I don't actually want to use the event time, I'm more interested in the date.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=52)** So I'm going to extract that by using the date trunc function.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=57)** And I'm going to tell PostgreS that I want to truncate the timestamp to a day.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=63)** And let's alias that as event date.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=66)** So that gives us our date for our daily average temp table.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=69)** Now, let's take the average of the temperature and let's just call that average temp.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=75)** Now I need to specify where I'm going to get this data.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=77)** So I'll use the time series schema and pull this from the location temp table.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=82)** And I have an aggregate function, the average.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=85)** So I'm going to use a group by here.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=87)** And I'm going to group by the date.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=89)** So I'm going to do the same exercise that I did before, which is to call the date trunc function, and ask for truncation down to the day.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=99)** And we're going to use event time as the timestamp to truncate.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=103)** Okay.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=104)** So now what you can see here is we have a select statement.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=107)** And this will basically create a temporary table with two columns.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=110)** We'll be able to refer to that temporary table as daily average temp.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=113)** And so I'll create a select statement and I'll select event date and average temp from daily average temp.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=124)** Now let's expand that so we can see the whole thing.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=127)** Okay, it looks good.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=128)** Let's give this a run.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=131)** And it successfully completed.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=134)** And what you'll notice here is we have five days and we have the average temperature for those days.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=141)** Now, obviously this is a fairly simple example.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=144)** And the goal wasn't to streamline what could be a complicated query.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=148)** It's just to show you the structure of Common Table Expressions and what a with statement looks like and how it needs to be used directly with a particular select statement.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=158)** So, again, just to reiterate.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=159)** Daily average temp is not created as a persistent table.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/common-table-expressions-and-recursion?u=76281980&t=162)** That was only available for this particular select statement.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [lecturer] (1)

#### Calculating aggregates over windows
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=0)** - [Instructor] A common query pattern when working with time series is to have some value from the time series compared to an aggregate value of a particular subset of the time series.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=10)** So for example, you might compare CPU utilization at a point in time to the average CPU utilization for that particular server just in general.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=19)** So let's look at an example like that.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=21)** So let's start with a select statement and let's look at the server ID and CPU utilization, and now I want to know about the average CPU utilization, and I want to partition over the server ID, so I want to know what the average is for that particular server.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=42)** And for that we'll pull from the time series schema and the utilization table.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=53)** And let's keep this to a single day.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=57)** And we'll use March 5th.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=63)** So we'll run this query and we'll show a little bit more here, so what we see for each server, for each point in time we have a measurement, in this case CPU utilization, so we see that measurement at that point in time, but we also have the average, so we can compare any point in time to what the average was, in this case for a day for that particular server.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/calculating-aggregates-over-windows?u=76281980&t=86)** So that's one way to work with the over partition by to get aggregate calculations over a particular subset of the data.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (5)
> **Code Keywords:** let (4)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Previous day comparison
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=0)** - [Instructor] Now let's take a look at another common query pattern we see when working with time_series, and that's comparing to a previous period.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=7)** So in this example, I want to work with the daily average temperature and I want to be able compare a couple of days' temperatures.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=14)** So I'm going to use a common table expression, or essentially a temporary table and I'll call it the daily average temp and we'll simply define that as we did earlier, Select.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=25)** I'm going to work with just the day so we'll truncate to the day, the event time, and we'll calculate the average.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=37)** Temp and Celsius.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=38)** And we'll call it A-V-G temp.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=42)** Oh, and actually I forgot to alias this with event date, so we'll give that an alias.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=48)** I'll make a little room here.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=50)** And we'll continue with the From clause and of course we'll pull this from time_series, location_temp and we're going to Group By.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=60)** We're going to Group By the date so we'll do our date trunc operation again, and truncate the event_time just to the day.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=68)** So this gives us our temporary table to work with and it'll have two columns, the event date and the average temperature for that particular day.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=75)** Now, let's do a comparison query.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=77)** Let's select the event_ date and the average temp, and then we're going to select this From daily average temp.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=88)** And, I'm going to give this table an alias, cause I'm going to need that in a minute.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=92)** We'll call that daily average temp or dat1.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=95)** Now, in this Select statement, in addition to getting the event date and the average temp, we're going to get the average temperature for the day before.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=103)** I'm going to write another Select statement and I'm going to select the average temp from daily average temp, daily average temp, and I'm going to alias this as dat2.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=120)** And now I'm going to have a Where clause and for dat2 or this interselect statement, I want that event date to be equal to the event date of dat1 minus a day.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=137)** So I'm going to expand this window here so we can take a look and see what we have here.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=141)** So we have our With statement up above and that creates our temporary table and then we have a Select statement and we're referencing the daily average table twice, once to get our driving date and then another time using this sub-select to get the secondary date or the date that's prior to the one that we are currently looking at in our pass through the odd dat1 table.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=163)** Set up, let's execute this query.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=169)** K, had a minor typo.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=172)** We'll correct that, run again.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=184)** Okay, I corrected a couple of typos there.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=186)** I had mistyped daily average date, and what we'll see here now that we have it correctly running is we have a row.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=196)** Okay so let's take a look at what we have here.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=198)** So we have our five days, and for each day we have an average temp.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=205)** And, we also have the average temp for the day before except for the first, which, of course, doesn't have a previous value but you'll notice the value 28.06529 is the same value we see over here 28.06529.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=220)** So by using common table expressions and sub-queries we can do this kind of day-to-day comparison and that could be any period of time.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/previous-day-comparison?u=76281980&t=227)** You could do month-to-month, or year-to-year and so forth.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), continue (1), pass (1)
> **Code Identifiers:** time_series (2), location_temp (1), event_time (1)
> **Versions:** 28.06529 (2)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Moving averages
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=0)** - In addition to working with specific data points like the average CPU utilization at a point in time, we might want to know the average utilization over the past hour at any particular point in time.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=12)** That's where sliding windows come in.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=14)** So let's look at how to do that.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=16)** So let's select, event time and server ID.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=20)** And now let's get the average CPU utilization.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=25)** Now I want this for the past hour so I'm going to use the over.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=31)** And now I'm going to create a clause that specifies that I want to first of all, make sure I have it in the right order so I'm going to order by event time and I want to use all the rows between the 12 preceding rows and I chose 12 because our CPU utilization measurements come in at five minute intervals.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=52)** And I want to have that between the 12 preceding rows and the current row.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=58)** So there are a number of terms in here like rows between, preceding and current row.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=66)** So what we have here is in this over statement is it basically says order the events by event time and then given the current row, go back 12 rows and with that set of data, apply the average function.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=80)** So we need to just specify and we'll give this an alias as hourly CPU util.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=88)** And we'll select that from time series utilization.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=94)** And when we execute... You'll notice what we get here is a particular interval for a particular server and then the hourly CPU utilization for that.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/moving-averages?u=76281980&t=108)** And again, what we've done is we've basically implemented a sliding window by using the order by and then the rows between preceding and current row specifications.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (5)
> **Code Keywords:** let (3), function (1)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)

#### Weighted moving averages
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=0)** - [Instructor] A variation on moving average is called the weighted moving average.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=5)** And basically the idea is you want to give more weight to the more recent events than to the events that are farther in the past.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=12)** So let's see how we could do that.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=14)** We're going to start using our common table expression, WITH, and we'll use daily_avg_temp again.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=23)** And I'll just type it in without detailed explanation again since we've done this a number of times.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=30)** And now I'm going to create the SELECT statement with a weighted moving average.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=36)** So what I'd like to do is for a particular event date I would like to know what the average temp is, and I'm just going to round it out to two decimal places.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=45)** So on a particular date I'll know what the average temperature is rounded to two decimal places.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=51)** And now what I'd like to do is basically weight the last, yesterday slightly heavier than the day before and slightly heavier than the day before that.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=60)** So I'm going to work with three days.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=62)** And I want different weights.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=64)** One of the things you want to remember about weight moving average is you want the weights to all add up to one, because we're going to be adding all of our calculations.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=72)** So let's see how we can do that.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=74)** Now with three days we would like our first date in the past to be weighted at .5, the second date should be weighted at about .33, and the third date should be weighted at abut 1.67.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=87)** And if you add all those up, .5, .33, .167, you'll get one.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=92)** So that works.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=93)** That fits with what we need.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=94)** Let's create a sub-select for our first day in the past, and we'll also round the average temp.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=102)** And we'll round that to 2.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=104)** And we're going to pull this FROM daily average temp.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=108)** And let's alias that as dat2.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=112)** And that's going to have a WHERE clause, and we'll look at the date.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=119)** And I'm going to reference dat1.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=122)** Now dat1 is going to be the daily average temp for the outer select.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=127)** So I'll define that an alias in a moment.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=131)** And that gives us the event_date of a current date.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=134)** So I want to subtract one day from that.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=140)** And I want that to be equal to the inner daily average event_date.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=148)** So let's step back here.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=150)** Now before I go any further I'm going to put in the FROM daily_avg_temp, and I'm going to call that dat1.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=160)** So dat1 is that outer select statement reference to daily average table.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=165)** So now, with this SELECT statement here, we will be selecting the event date, the average temp, and then we'll also select the average temp for the day before.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=177)** And we get that average temp for the day before by using this sub-select.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=181)** Now what we want to do is we want to weight this because we're going to have three days.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=187)** And if you remember, we're going to weight this at a .5.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=190)** So I'm going to multiply that average temp by 0.5.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=194)** And that'll give us the weight or the value of that first day in the past.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=199)** Now the next thing I want to do is I want to add that to the weighted value of the two days ago.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=208)** So we're going to go two days back and we're going to weight this differently.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=211)** This is going to be weighted at .33, and we're going to refer to this as dat3.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=217)** And we'll change this to dat3.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=220)** So what we're doing now is looking two days ago and referencing that.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=227)** And we're going to add that to the weight contributed by the third day in the past, and this weight is going to be .167.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=238)** And that's going to be dat3.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=241)** And that'll be three days in the past.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=244)** So there's quite a bit in here.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=245)** We can't see it all in one place.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=247)** But we have our daily average temp table, which we should be familiar with by now, and we're selecting a particular event date, the average temp on that day, and then we're taking the average temp on the day before and applying a weight, adding it to the average temp on the day before that, applying a weight, and then finally applying it to the third day in the past.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=273)** Actually I made a mistake there.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=274)** I'm going to make that dat4, dat4, and let's run our query here.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=286)** Ah, I forgot to, I'm going to alias the date_trunc to event_date.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=294)** That caused a problem.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=295)** And now I'll execute.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=297)** And that successfully runs.
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=300)** Now, we're looking at a three-day average, or a three-day weighted average.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=304)** So we're not going to actually see a value until three days in.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/weighted-moving-averages?u=76281980&t=308)** And that's what we have here for these final two days on March seventh and March eighth we have the three-day weighted moving average of the the daily average temperature.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **Code Identifiers:** event_date (3), daily_avg_temp (2), date_trunc (1)
> **SQL:** select (2), where (1)
> **Env Vars:** select (2), where (1)
> **Versions:** 1.67 (1), 0.5 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)

#### Forecasting with linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=0)** - [Instructor] So, for the most part we've been looking at the past with our time series data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=5)** For example, we might have an average temperature, an average CPU utilization and then we look back and try to get an idea what was the average for the trailing hour or day.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=15)** Sometimes though, we want to predict what's going to happen in the future and we can do that using regression functions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=21)** And we're going to work with linear regression and basically the idea is we're going to make predictions based on what we've seen in the past.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=28)** So to start, I just want to remind everybody from some high school math.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=31)** The formula for a line is Y = MX + B.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=37)** M, that's the slope of the line.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=39)** B, is the Y intercept.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=42)** X is the input value and Y is the predicted value.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=48)** So, in our example, let's try and predict the amount of free memory that will be available given a particular CPU utilization.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=56)** So what we need to do, is we need to calculate the slope and the intercept first.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=60)** Fortunately, PostgreSQL gives us functions for that.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=64)** So we'll write Select and the function is regr for regression, slope and regression slope takes two parameters.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=72)** The Y value and the X value.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=74)** For us, our Y value or the thing we're predicting is free memory, and we're going to use CPU utilization as our input value.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=82)** Let's call that M since that's the symbol for slope.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=86)** And the other function we're going to work with is the regression intercept.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=90)** And it takes the same parameters, so we're going to predict free memory given CPU utilization.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=98)** And let's call that B.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=99)** And we're going to select this from time series utilization and let's do this for a single day.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=110)** And we'll use March 5th again.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=116)** So what this will do is it will get all of the events on the day of March 5th, and based on those it'll calculate the slope where CPU utilization is on the X axis and free memory is on the Y axis.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=130)** And it will calculate for us M and B so the slope and the intercept.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=136)** And what you'll notice is we have two values, our slope is slightly negative, at 0.67 roughly and our intercept is around .667 or so.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=149)** So that basically gives us the formula or parts of the formula we now know what the M and the B are.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=156)** Now, if we have a particular CPU utilization level in mind, we can plug that into this formula and calculate an estimate for what the free memory would be.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=165)** And that's fairly simple, because we have what we're trying to calculate is Y, we have M here, we need to multiply M by X so I'm going to come up here and remove that and just put in multiply that, let's say out CPU utilization is .65 percent, now I want to add that to the intercept which we had just calculated.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=186)** And now let's alias that with predicted value.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=191)** So now we have a formula.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=192)** We're taking our slope or M multiplying it by our input value, and then adding to that the intercept to get our predicted value.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=201)** And so our predicated value is at 65 percent CPU utilization we estimate that we'll probably have about .36 or about 36 percent of memory available.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/forecasting-with-linear-regression?u=76281980&t=213)** So, linear regression is fairly simple, and it's one way of making predictions using time series data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2)
> **Env Vars:** cpu (8)
> **CLI Commands:** make (1)
> **Versions:** 0.67 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Exponential moving average
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=0)** - [Instructor] Another type of moving average you may encounter is called exponential moving average.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=5)** Now, the exponential moving average is, as the name implies, a type of a moving average calculation.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=11)** In this case, the weights decrease exponentially, and this is often used to smooth out trends when there's large variance in data, so essentially it reduces the impact of noise in your signal.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=24)** Now, the formula consists of a couple of pieces.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=27)** One is a smoothing parameter.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=29)** This smoothing parameter is typically two divided by the number of intervals that we're working with.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=35)** So for example, if we want to smooth over a period of seven days, the value would be two divided by one plus seven or eight, so two divided by eight is 0.25.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=46)** Now that smoothing parameter is called lambda.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=49)** Now we can go on and complete the formula.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=52)** An exponential weighted average is basically whatever the value is at the current period times the lambda, plus the previous period's exponential weighted moving average times one minus the lambda.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=65)** Now, you'll notice this is recursive.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=67)** We could calculate this using Common Table Expressions, because there is a recursion support within CTEs, but it's not recommended for large datasets.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=77)** They just don't perform very well.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/exponential-moving-average?u=76281980&t=79)** Instead, it's recommended that you use a user defined function, or possibly use another tool, such as R or another statistical analysis package.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (3), case, (1), function (1)
> **Definitions:** is called (2), is a  (2)
> **Analogies:** for example (1), such as (1)
> **Best Practices:** recommended (2)
> **Versions:** 0.25 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980&t=0)** - [Narrator] Now that you're familiar with time series data, and using SQL to analyze time series, there are a few other topics you might want to look into.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980&t=8)** I suggest looking for my Advanced SQL for Data Science course, which can show you additional ways of using windowing functions, and related techniques in SQL.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980&t=18)** I'd also suggest looking for my Advanced Tuning course, on SQL queries, and performance optimization.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980&t=24)** Also, as useful as SQL is, it does have its limits when working with time series data.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-science-time-series/next-steps?u=76281980&t=29)** So I often suggest that people look at the R statistics package, which is a popular open-source statistics package, and it includes many advanced modules for time series analysis modeling, and other related tasks.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Dan Sullivan]]

## Resources

- Exercise files available

## Skills Covered

- Time Series Analysis
- SQL
- Data Science

## Path Context

### In [[Master SQL for Data Science]]
← [[Advanced SQL for Query Tuning and Performance Optimization]] | **6 of 6**

## Appears In

- [[Master SQL for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL
- [[Using SQL with Python]] — SQL

---

[↑ Back to top](#)