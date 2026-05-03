---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-ingestion-with-python
url: "https://www.linkedin.com/learning/data-ingestion-with-python"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 12/22/2023
learners: 38191
skills:
  - Python (Programming Language)
  - Data Ingestion
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGS5aDB3_uTbQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703116291273?e=2147483647&amp;v=beta&amp;t=4a99Pt2L-0He9uLVObjaIUAfeju8706PW2vHsgwsvAs"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Collection]]'
prev_courses:
  - '[[Strategic Data Collection, Modeling, and Quality Management for AI Systems]]'
next_courses:
  - '[[Data Cleaning and Manipulating with Python in Excel]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Collection","position":2,"total":6,"prev":"Strategic Data Collection, Modeling, and Quality Management for AI Systems","next":"Data Cleaning and Manipulating with Python in Excel"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-ingestion
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Ingestion%20with%20Python.md)

![Data Ingestion with Python](https://media.licdn.com/dms/image/v2/D560DAQGS5aDB3_uTbQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703116291273?e=2147483647&amp;v=beta&amp;t=4a99Pt2L-0He9uLVObjaIUAfeju8706PW2vHsgwsvAs)

# Data Ingestion with Python

> A sizable portion of a data scientist's day is often spent fetching and cleaning the data they need to train their algorithms. In this course, learn how to use Python tools and techniques to get the relevant, high-quality data you need. Instructor Miki Tebeka covers reading files, including how to work with CSV, XML, and JSON files. He also discusses calling APIs, web scraping (and why it should b

> [LinkedIn Learning](https://www.linkedin.com/learning/data-ingestion-with-python) | 1h 24m | Intermediate | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Why is data ingestion important?](#why-is-data-ingestion-important)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Using the Coderpad quizzes](#using-the-coderpad-quizzes)
- [**1. Data Ingestion Overview**](#1-data-ingestion-overview) (5 videos)
  - [Overview of data scientists work](#overview-of-data-scientists-work)
  - [Where does data come from?](#where-does-data-come-from)
  - [Different types of data](#different-types-of-data)
  - [The data pipeline (ETL)](#the-data-pipeline-etl)
  - [Final destination (data lake)](#final-destination-data-lake)
- [**2. Reading Files**](#2-reading-files) (6 videos)
  - [Working in CSV](#working-in-csv)
  - [Working in XML](#working-in-xml)
  - [Working in Parquet, Avro, and ORC](#working-in-parquet-avro-and-orc)
  - [Unstructured text](#unstructured-text)
  - [JSON](#json)
  - [Solution: CSV to JSON](#solution-csv-to-json)
- [**3. Calling APIs**](#3-calling-apis) (4 videos)
  - [Working with JSON](#working-with-json)
  - [Making HTTP calls](#making-http-calls)
  - [Processing event-based data](#processing-event-based-data)
  - [Solution: Location from IP](#solution-location-from-ip)
- [**4. Web Scraping**](#4-web-scraping) (6 videos)
  - [Try to find an API](#try-to-find-an-api)
  - [Working with Beautiful Soup](#working-with-beautiful-soup)
  - [Working with Scrapy](#working-with-scrapy)
  - [Working with Selenium](#working-with-selenium)
  - [Other considerations](#other-considerations)
  - [Solution: Get stock information from HTML](#solution-get-stock-information-from-html)
- [**5. Schema**](#5-schema) (5 videos)
  - [What are schemas?](#what-are-schemas)
  - [Working with ontologies](#working-with-ontologies)
  - [What should be in schema](#what-should-be-in-schema)
  - [Schema changes](#schema-changes)
  - [Schema validations](#schema-validations)
- [**6. Working with Databases**](#6-working-with-databases) (7 videos)
  - [Types of databases](#types-of-databases)
  - [Hosted and cost of ops](#hosted-and-cost-of-ops)
  - [Working with relational databases](#working-with-relational-databases)
  - [Working with key or value databases](#working-with-key-or-value-databases)
  - [Working with document databases](#working-with-document-databases)
  - [Working with graph databases](#working-with-graph-databases)
  - [Solution: ETL](#solution-etl)
- [**7. Troubleshooting Data**](#7-troubleshooting-data) (6 videos)
  - [Data is never 100% okay](#data-is-never-100-okay)
  - [Causes of errors](#causes-of-errors)
  - [Filling missing values](#filling-missing-values)
  - [Finding outliers (manual)](#finding-outliers-manual)
  - [Finding outliers (ML)](#finding-outliers-ml)
  - [Solution: Clean rides dataset](#solution-clean-rides-dataset)
- [**8. Data KPIs and Process**](#8-data-kpis-and-process) (3 videos)
  - [Design your data](#design-your-data)
  - [KPIs](#kpis)
  - [What to monitor?](#what-to-monitor)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why is data ingestion important?](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=1)** - [Miki] [[Algorithms]] govern our life.
>
> **[0:02](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=2)** They trade the stock market, control our police patrolling and soon will drive our car.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=9)** All of these algorithms are trained on data.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=12)** Sometimes a lot of data.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=14)** What surprises many people doing [[Data Science]] is that finding high quality and relevant data takes most of their time.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=22)** Hi there, I'm Miki Tebeka and for more than 10 years I've been helping researchers become more productive.
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=29)** In this course, I'll show tips and tricks from my experience of getting the right kind of data into the hands of scientist.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=38)** We'll cover many sources of data from files to APIs to [[Databases]].
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=44)** We'll also talk about validating and cleaning data and how to integrate [[Data Quality]] in your process.
>
> **[0:50](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=50)** At the end of this course you'll be able to fit your algorithm with the data it needs no matter where it's residing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Data Science]] (1), [[Databases]] (1), [[Data Quality]] (1)
> **Speakers:** - [miki] (1)

#### [What you should know](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=1)** - [Instructor] This course uses the [[Python (Programming Language)|Python]] programming language and its scientific packages.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=5)** You should be familiar with both at the basic level.
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=8)** If you're not familiar with either one of these, check out our courses on these subjects.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=14)** You should also know how to use the command line.
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=17)** And have Docker installed on your machine.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=20)** Apart from that, you need to have an open mind and curiosity about data.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=25)** That's about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), docker (1)
> **Tools:** command line (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=1)** - [Instructor] In the course, we're going to use several exercise files and several data files.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=6)** Download the exercise files to a directory and uncompress them.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=10)** Then, you will be able to follow along with the videos.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=13)** In some cases, you will need to run a script to download more data or start a Docker container.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=19)** I've tried to make the process as simple as possible.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (2), download the (1)
> **CLI Commands:** docker (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Using the Coderpad quizzes](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-coderpad-quizzes?u=76281980)


### 1. Data Ingestion Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of data scientists work](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=0)** - [Instructor] When people enter the [[Data Science]] world, they have a certain image in their head, of how work will look like.
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=7)** They'll try some cool algorithm on some data, tweak some parameters and produce code that will learn by itself and improve business results, identify cat pictures or protect servers from new kinds of attacks.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=22)** However when you interview data scientists, you'll find out that most of their time is spent on getting and cleaning data.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=30)** That's why I think that data science should be written as DATAscience.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=36)** Data is dominating two places, one is the amount of time you'll spend on it, the second is the quality of your [[Algorithms]].
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=43)** In their influential article "The Unreasonable Effectiveness of Data" Halevy, Norvig, and Pereira, show that dumb algorithms will perform much better than smart ones, given enough data.
>
> **[0:56](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=56)** This implies you'll want a lot of high quality data available to you.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=61)** As a data scientist you'll find yourself doing the following Acquire data from various sources, clean this data, train a model, evaluate your model, realize you need more high quality data and go back to step one.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=76)** At some point, your results will be good enough and you'll be able to ship, however data changes over time, and you'll always need to train your algorithms on high quality and relevant data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Data Science]] (2)
> **CLI Commands:** find (2), cat (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Where does data come from?](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=1)** - [Instructor] As a consultant, companies bring me in to help data scientists do their work.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=6)** I ask the data scientist what data they require and then go around the organization and figure out how to get it.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=14)** Organizations usually start small with one or two sources of data, say logs and a database.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=21)** However, as they grow, they'll have more and more sources of data.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=25)** Here are some of the sources I've seen throughout the years.
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=29)** [[Databases]] are for, well, storing data.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=33)** There are many kinds of databases from good old relational ones like [[PostgreSQL]], to key-value ones like [[Redis]], to document ones like [[Elasticsearch]] and more.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=43)** As data grows, sometimes it's not even clear where we can find the data we want inside the database.
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=51)** API servers, [[Web Servers]], batch processes and more, are often write data to log files.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=57)** These log files can be in many formats, and sadly, you'll probably see several log formats within the same organization.
>
> **[1:05](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=65)** You'll find data in formats like Parquet, or ORC, these files are usually hosted on a big drive, such as Amazon S3, [[Google Cloud Platform (GCP)|Google Cloud]] Storage, or [[Microsoft Azure|Azure]] Storage.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=76)** Sometimes to get data, we need to call a service, or an API.
>
> **[1:20](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=80)** For example, if you have the IP of a user and would like to know where they are located in the world, you'll probably use a system like MaxMind.
>
> **[1:29](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=89)** In some cases, you'll run a computation to get the data you require.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=92)** For example, when converting from feet and inches to meters and centimeters.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=98)** These are just a few examples.
>
> **[1:39](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=99)** I'm sure over time, you'll encounter many more sources of data.
>
> **[1:43](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=103)** Lucky for you, [[Python (Programming Language)|Python]] is very versatile, and can easily ingest data from a variety of sources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[PostgreSQL]] (1), [[Redis]] (1), [[Elasticsearch]] (1), [[Web Servers]] (1)
> **CLI Commands:** find (2), python (1)
> **Env Vars:** api (2), orc (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Different types of data](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=0)** - [Instructor] Apart from the various sources of data, we also have several types of data.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=5)** Here are some common ones.
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=7)** Records, this data is usually found inside [[Relational Databases]], and has well-defined columns and types.
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=17)** Metrics, a lot of [[Algorithms]] in [[Data Science]] work with metrics.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=22)** This data is usually a mix of numerical types, integers and floats.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=27)** You'll find such data in storage like HDF5 and others.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=31)** Graphs, working social networks and relationships between users, you'll find yourself using sentences like, "Users with two degrees of separation and are in the age group of 20 to 30."
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=45)** You'll find this data in graph [[Databases]] like [[Neo4j]].
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=49)** Textual, user comments, Wiki pages and much more.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=53)** A lot of content on the Internet is text.
>
> **[0:56](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=56)** You'll find this data everywhere, from plain text files on disk to columns in databases to specialized databases like [[Elasticsearch]].
>
> **[1:05](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=65)** I'm sure I've missed some of the data types.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=67)** Not everything fits in these categories.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=70)** You should know what type of data you're working with and how best to extract it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Relational Databases]] (1), [[Algorithms]] (1), [[Data Science]] (1), [[Neo4j]] (1)
> **CLI Commands:** find (4)
> **Env Vars:** hdf5 (1)
> **Speakers:** - [instructor] (1)

#### [The data pipeline (ETL)](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=1)** - [Instructor] Most companies have some kind of a data pipeline.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=4)** This pipeline will take the raw data, most times from server log files, one transformations on it, and edit to one or more [[Databases]].
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=14)** This process is also known as ETL, which stands for extract, transform and load.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=21)** During the pipeline, we handle tasks such as conversion.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=26)** If you have a text file with the string 2020-01-01, we'd like to convert it to a timestamp or a date time in [[Python (Programming Language)|Python]].
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=35)** Validation, check the data for errors, for example, if you have the string 2020-02-30, it's not a validate.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=43)** Sometimes validation can be more complex.
>
> **[0:46](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=46)** In weather data, we can't have snow in a day with the temperature was about 30 centigrade or 86 Fahrenheit.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=53)** Enrichment, we'd like to add location information to the user IP.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=57)** My IP is 216.52.21.11 it's in California, United States.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=64)** Missing data, what happens if you don't have the customer IP?
>
> **[1:08](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=68)** How can we handle it?
>
> **[1:11](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=71)** You should know how will your data pipeline works, and what is the source for every piece of data you're using.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=77)** Should also be in touch with the people maintaining the data pipeline and talk to them on a regular basis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** known as (1), stands for (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Env Vars:** etl (1)
> **Versions:** 216.52.21 (1)
> **Speakers:** - [instructor] (1)

#### [Final destination (data lake)](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=1)** - [Instructor] At the end of the data pipeline, the verified, clean, and enriched data is stored in one or more [[Databases]].
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=7)** As a data scientist, it's much easier to work with one database.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=12)** Some companies are starting to use the term data lake as the final destination of data and their [[Algorithms]] come to quench their thirst.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=21)** These [[Data Lakes]] come in various format.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=24)** Some of them, like [[Google]]'s BigQuery and others, are [[Relational Databases]].
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=29)** Some, like Spark, are computation platforms, and there are many others.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=34)** Get familiar with these data lakes.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=36)** They are usually the source of data for your algorithm.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=39)** Know how to work with them and where to find the data in them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Lakes]] (2), [[Databases]] (1), [[Algorithms]] (1), [[Google]] (1), [[Relational Databases]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Reading Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Working in CSV](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=1)** - [Instructor] CSV is a very common format.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=4)** The main advantage of CSV is that it can easily be exported or imported by [[Microsoft Excel|Excel]].
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=10)** CSV's also have several downsides.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=13)** They don't keep type information, everything is a string.
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=17)** There's no standard of specification.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=19)** And it's hard to work with unicode data inside CSV's.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=24)** Let's have a look at some CSV data.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=26)** It's a file called taxi.csv.bz2 in our exercise file.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=31)** The file is compressed, which is common with CSV files that hold a lot of data.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=36)** CSV is text, and text can be compressed a lot.
>
> **[0:40](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=40)** For example, our uncompressed file is about eight times bigger than the compressed one.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=45)** We see that the first line is a header line, with the names of the columns.
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=49)** And then we have data lines, each holds values separated by comma.
>
> **[0:54](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=54)** This data is from the New York taxi data, which holds data on taxi rides in New York City.
>
> **[1:00](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=60)** This file has ten thousand one lines, which means we have one line of header, and then ten thousand lines of data.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=67)** In [[Python (Programming Language)|Python]], we have two options to load CSV's.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=70)** One is using the built in CSV model, and the other is to use [[Pandas (Software)|Pandas]].
>
> **[1:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=75)** Let's have a look at both.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=77)** The CSV model has two readers, one a reader, and one a dictionary reader, when we have columns.
>
> **[1:25](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=85)** Since we have a header row, we're going to use a dictionary reader.
>
> **[1:29](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=89)** The nice thing about these two readers, that they consume at most one line, allowing us to process huge files without blowing up our computer memory.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=98)** Everything in CSV is text.
>
> **[1:40](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=100)** You need a way to convert text fields to the right data type.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=104)** And this is what we have on line 14.
>
> **[1:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=106)** We say that the vendor ID is integer, that the passenger count is integer, that the tip amount is float, and for example, in line 19 and 20, we say the drop off and pick up fields are a time stamp.
>
> **[2:00](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=120)** And now we have iter records.
>
> **[2:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=124)** Iter records open the file, creates a reader on line 27, and then for every record, it creates an empty dictionary.
>
> **[2:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=131)** And then for every column, it gets the converter and on line 32, applies this converter to the value.
>
> **[2:18](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=138)** And here is an example in line 36.
>
> **[2:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=141)** We import pprint so we can print something nice, and then we iterate over the records, and showing only the first ten ones, we print them out.
>
> **[2:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=150)** Let's run this.
>
> **[2:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=152)** Python csv_py.py.
>
> **[2:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=155)** And we see that every record has the right type, date time, integers, and floats.
>
> **[2:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=162)** Two more things to note.
>
> **[2:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=164)** We open the file in a textual mode, in line 26, because CSV can work only with text.
>
> **[2:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=172)** And using generator in line 33, you can see the yield statement returning one record at a time, avoiding memory blowout.
>
> **[3:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=181)** And now let's have a look at how we do it with Pandas.
>
> **[3:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=184)** So let's run ipython, and we're going to import Pandas as pd.
>
> **[3:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=191)** And pd.
>
> **[3:13](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=193)** read_csv of taxi .csv.bz2.
>
> **[3:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=203)** Once the data frame is loaded, it's important to look at the types, dtypes.
>
> **[3:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=210)** And we see that Pandas is doing a great job of guessing what are the type of things, but if you look at the pick up and the drop off, they are represented as object, which means they are strings.
>
> **[3:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=222)** We need to tell Pandas that these are time columns.
>
> **[3:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=226)** So what we can do is time_cols equal tpep pickup datetime and tpep dropoff datetime.
>
> **[4:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=242)** And now we're going to run the same command, but we're going to tell Pandas to parse the dates with the time cols.
>
> **[4:12](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=252)** And then when you look at the dtypes, we can see now that the pick up and the drop off are time stamps.
>
> **[4:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=261)** With CSV, we load the whole file to memory.
>
> **[4:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=263)** In cases when the file is too big, we can use the chunk size parameter.
>
> **[4:28](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=268)** So, we can tell it also that we want chunksize equal a thousand.
>
> **[4:39](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=279)** And now if we look at df, it's a text file reader.
>
> **[4:43](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=283)** What we can do is we can iterate over it and get every time only part of the data.
>
> **[4:49](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=289)** For sub_df in df.
>
> **[4:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=292)** For example, let's just print the len of the data of the sub data frame.
>
> **[4:59](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=299)** Right, then we get 1000 every time.
>
> **[5:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=302)** In the exercise files, you have also a file called CSV Pandas, which captures everything we did so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[Python (Programming Language)|Python]] (2), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** csv (14)
> **Code Identifiers:** csv_py (1), read_csv (1), time_cols (1), sub_df (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (3)
> **File Paths:** taxi.csv (1), csv_py.py (1)
> **CLI Commands:** python (2)
> **UI Navigation:** open the (2)

#### [Working in XML](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=1)** - XML is an old and well-established protocol.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=4)** It has a bad reputation, mainly since it was abused in many systems.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=9)** It's still out there, and you'll probably encounter it at one point or another.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=13)** There are two ways of reading XML.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=15)** One is loading everything into memory, called DOM, [[Document Object Model (DOM)|Document Object Model]].
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=22)** And one iterative, called SAX, which stands for Simple API for XML.
>
> **[0:28](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=28)** The two main libraries for working with XML are the built-in ElementTree and the third-party lxml.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=35)** We're going to use ElementTree since it's in the standard library.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=39)** Let's have a look at the code reading this file.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=43)** We import ElementTree as xml And since everything inside XML is text, we need to convert manually everything.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=53)** So in line 9-17, we define the conversions.
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=58)** In line 20, we have iter_rides.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=61)** We open the file, and in line 22 we load the whole file into memory and pass it.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=66)** Then we get the root of the tree, and go for every element, we take the type, find the right converter, and convert it.
>
> **[1:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=75)** In line 30, we're using yield to yield just one record at a time.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=79)** In line 33, we define load_xml.
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=82)** In line 34, we use our function to generate the records.
>
> **[1:26](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=86)** In line thirty-five, we use panda's DataFrame.from_records to create a data frame.
>
> **[1:31](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=91)** And at the bottom, we have a small example.
>
> **[1:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=93)** We load the taxi, we print the types, and we print the head of the CSV.
>
> **[1:39](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=99)** So [[Python (Programming Language)|python]] read_xml.py And we see that the types are right, so the vendor and the people are integers, the tip and the price are floats, and the pickup and dropoff are timestamps.
>
> **[1:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=112)** And we can look also at the head of the data frame, and it looks okay.
>
> **[1:55](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=115)** There's more to XML.
>
> **[1:57](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=117)** There are namespaces, DTDs, document type definitions, schemas, and more.
>
> **[2:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=122)** Start simple, and read the documentation if you need more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Document Object Model (DOM)|Document object model]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** xml (6), dom (1), sax (1), api (1), csv (1)
> **Code Identifiers:** iter_rides (1), load_xml (1), from_records (1), read_xml (1)
> **CLI Commands:** find (1), python (1)
> **Definitions:** is an  (1), stands for (1)
> **File Paths:** read_xml.py (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)

#### [Working in Parquet, Avro, and ORC](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=1)** - [Instructor] Some big-data systems, such as [[Hadoop]], Hive, and others, store data in files.
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=7)** They started working with text files, mostly CSV.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=10)** However, after some time, processing these text files became a performance bottleneck, and new, more efficient file formats came to life.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=19)** There are few of these formats, such as Parquet, Avro, ORC, and others.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=25)** We'll see an example using Parquet, but the idea is the same.
>
> **[0:28](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=28)** Find the library for this file format and load it into [[Pandas (Software)|Pandas]].
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=32)** In our case, we're going to use the Apache Arrow library.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=36)** It's development is led by Wes McKinney, the creator of Pandas.
>
> **[0:40](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=40)** So, we import pyarrow.parquet as pq,
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=48)** and then we say table = pq.read_table('taxi.parquet')
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=58)** And this table is a Parquet table.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=61)** Now we need to convert it to a Pandas data frame.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=64)** df = table.to_pandas() And now if we look at the d types, we see that we have the right types and we can look at the head of the data frame and everything looks nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Hadoop]] (1)
> **CLI Commands:** find (1), apache (1)
> **Code Identifiers:** read_table (1), to_pandas (1)
> **Env Vars:** csv (1), orc (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Unstructured text](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=1)** - [Instructor] Sometimes, data is written in a way that's easier for humans to understand.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=6)** This is called [[Unstructured Data]] or semi-structured data.
>
> **[0:11](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=11)** The usual tool for these situations are regular expressions.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=15)** I won't teach you regular expressions here, see our classes on the subject.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=20)** Regular expressions have a bad reputation since, once they are written, it's hard to understand what they do.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=26)** For example, here's a regular expression to pass email addresses.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=31)** Even knowing what it passes, it's hard to understand.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=34)** I usually starts with sites like pythex.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=38)** I copy over some of the lines from our logs and then start constructing the regular expression.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=44)** So I want 'of' and then number of passengers, then 'started at' and then everything that is not a space to capture the date.
>
> **[1:00](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=60)** Then 'paid', then I need a dollar sign and then some digits followed by dots, followed by dot, followed by some more digits.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=76)** And now it looks good, right?
>
> **[1:18](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=78)** So I have one passenger, the date and the price and here, five passengers, the date and the price.
>
> **[1:25](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=85)** Once I have that, now I can go over and copy it to the code.
>
> **[1:29](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=89)** Let's see how the code looks like.
>
> **[1:31](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=91)** So the file is compressed, I'm importing 'bz2' and then I'm importing 're' in line four, which is the regular expression.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=98)** In line eight, I have 'parse_line', which gets one line and returns the count of the start and the amount.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=104)** In line 10, I have an example of the input and it's very important to place an example of the input next to the regular expression so people will understand what it does.
>
> **[1:54](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=114)** In line 12, I have basically the same regular expression I crafted at the site.
>
> **[1:59](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=119)** And then line 14, if there's no match, I return none, otherwise I'm returning a dictionary with the 'count', 'start', 'amount' and every time I need to convert from text to the right type.
>
> **[2:10](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=130)** 'count' is an integer, 'start' is a datetime and 'amount' is float.
>
> **[2:16](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=136)** Then in line 24, I have something to iterate over the rides.
>
> **[2:19](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=139)** I open the file in textual mode and then, going over the lines, parsing the line.
>
> **[2:26](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=146)** In line 28, if there is an error, meaning I got the none, I'm issuing a warning log and then continuing.
>
> **[2:34](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=154)** And after that, I'm yielding the record.
>
> **[2:35](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=155)** So I'm processing just one line at a time in memory.
>
> **[2:39](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=159)** In line 35 down, we have an example of reading the first five lines.
>
> **[2:44](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=164)** Let's run it, [[Python (Programming Language)|python]] parse_log.py.
>
> **[2:49](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=169)** And we got the first five items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **Code Identifiers:** parse_line (1), parse_log (1)
> **File Paths:** parse_log.py (1)
> **CLI Commands:** python (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)

#### [JSON](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=1)** - [Instructor] [[JSON]] is a very common serialization format.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=4)** JSON stands for [[JavaScript]] Object Notation.
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=8)** The main advantage of JSON, is that many languages can read and write JSON.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=14)** This means you can have a server written in Go, emitting JSON and you can read the data with [[Python (Programming Language)|Python]].
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=21)** Since JSON, as the name suggests, comes from the world of JavaScript, not all Python types can be serialized to JSON.
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=29)** For example, you can serialize a Python datetime object or a [[Pandas (Software)|pandas]] timestamp to JSON.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=35)** To solve this issue, Python's built in JSON module gives you hooks to implement your own custom serialization or de-serialization.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=43)** Let's have a look.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=45)** Here we have a file where each line is a JSON object.
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=49)** We have [[Microsoft Defender|defender]], the pickup, and the drop off, et cetera.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=53)** As you can see, the pick up and the drop off are strings, you can deduce that from the quotes, and we would like to have them as python datetime objects.
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=63)** What we'd like to do, is calculate the average write duration.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=67)** Let's have a look.
>
> **[1:09](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=69)** So I'm importing (mumbles), I'm importing JSON, and I'm importing datetime and timedelta.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=76)** In line seven, there's a function to parse a timestamp.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=79)** We get a timestamp, we trim the Z suffix and then we use the from ISO format to convert it to a datetime object.
>
> **[1:27](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=87)** In line 16, we have a fixed pair function.
>
> **[1:30](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=90)** It gets key and value as a tuple of two, so we unpack them in line 17, and then if they're not in pick up or drop off, we just return the original pair, otherwise in line 20, we return the key, and parsing the time from the value, and then line 23, the pairs hook is the hook that is going to be called by the JSON model, and it returns a dictionary of fixed pairs.
>
> **[1:52](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=112)** What we do now in line 27, we create the initial list of durations, we open the file, and go for every line, and then in line 30, we say, we load as the line, and we said that the object pairs hook is the pairs hook, and then the duration is the drop off minus the pick up, and we append the duration.
>
> **[2:12](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=132)** In line 34 we just calculate the average duration, in line 25, we print it out.
>
> **[2:18](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=138)** Python, ride, duration, and the average ride duration is 17 minutes and 28 seconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (12), [[Python (Programming Language)|Python]] (6), [[JavaScript]] (2), [[Pandas (Software)|Pandas]] (1), [[Microsoft Defender|Defender]] (1)
> **Env Vars:** json (12), iso (1)
> **CLI Commands:** python (6)
> **Definitions:** is a  (2), stands for (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: CSV to JSON](https://www.linkedin.com/learning/data-ingestion-with-python/solution-csv-to-json-20213861?u=76281980)


### 3. Calling APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with JSON](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=1)** - [Instructor] One of the of the most common serialization formats in APIs is [[JSON]].
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=5)** There are many other serialization formats available and if you have a say in which format to use do your homework first.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=13)** Since JSON is a cross language format, it means that not all [[Python (Programming Language)|python]] types are supported.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=20)** For example, you can't serialize python set into JSON.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=25)** If you'd like to do that, you need to have the JSON decoder and encoder a bit.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=30)** Let's see.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=31)** In line five, we have data in JSON format.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=34)** Note the b in front which means this is a bytes object.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=38)** And we have a transaction from Wile E. Coyote to ACME corporation $103.7 and it was in August 2019.
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=48)** The first three types convert from python to JSON and back but the time does not, it's currently in JSON as a String and we'd like to make it a datetime object.
>
> **[1:00](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=60)** What we're going to do is use two auxiliary functions.
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=63)** The fix time which takes a pair and if it's a pair with the key's we'll pass the string into a datetime object.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=70)** And object pairs hook which will return a dictionary where we fix the time for every pair in the object.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=77)** In line 27, we load the data.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=79)** JSON has load s and dump s to work with Strings or bytes.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=84)** It has load and dump without the s to work with file like objects such as open files or htp responses.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=92)** We give it the data and we tell it the object pairs hook is our object pairs hook.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=98)** And last, we print the object.
>
> **[1:40](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=100)** Let's see.
>
> **[1:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=102)** Python json demo dot py and we see that the time is a datetime object.
>
> **[1:49](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=109)** There're several other options to write custom decoders and encoders in JSON whether the connotation which is very good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (10), [[Python (Programming Language)|Python]] (4)
> **Env Vars:** json (9), acme (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (1), such as (1)
> **Versions:** 103.7 (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Making HTTP calls](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=1)** - [Instructor] APIs are a way of calling remote servers for data, sometimes referred to as RPC, for remote procedure call.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=10)** One of the most common ways to call an API is by using the HTTP protocol with objects and call it as [[JSON]].
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=17)** Let's say an example.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=18)** First, in the terminal, run the web server, [[Python (Programming Language)|python]] httpd.py, and the server is ready on localhost 8989.
>
> **[0:28](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=28)** The server accepts a call to slash requests would start and end HTTP parameters.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=35)** You also need to authenticate by setting X-TRIPS-TOKEN HTTP header.
>
> **[0:40](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=40)** Python has a built in URL open function in urllib.request.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=45)** It does a good job however, you will require to do some low level work, such as parsing JSON and setting authentication.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=53)** The request library simplifies making HTTP calls and it's very popular.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=59)** We are going to use it.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=61)** You might need to install it first.
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=63)** Here's our API client.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=64)** We import requests.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=66)** In line five, we specify the URL, in line six, we specify the query, or the parameters to the call, the start and end as a dictionary, and in line 10, we specify the x-trips-token, which can be lowercase to uppercase.
>
> **[1:20](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=80)** In HTTP, headers are case insensitive.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=84)** In line 15, we do the actual call, with the request.get, do a get request, the URL, the parameters and the headers.
>
> **[1:31](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=91)** If the call ended in an error, response.ok will be false and then we exit.
>
> **[1:36](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=96)** Otherwise, we get the JSON from the response as the reply object.
>
> **[1:43](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=103)** And we check it for validity in line 20.
>
> **[1:45](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=105)** At the end, in line 23, we count how many trips we had, and print the total count.
>
> **[1:51](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=111)** Let's write, python api_client.
>
> **[1:54](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=114)** And we got a total of 723 trips in our call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Python (Programming Language)|Python]] (3)
> **Env Vars:** http (5), json (3), url (3), api (2), rpc (1)
> **CLI Commands:** python (3)
> **File Paths:** httpd.py (1)
> **Code Identifiers:** api_client (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### [Processing event-based data](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=1)** - [Instructor] In some cases, instead of pulling data, it will be pushed to us.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=5)** Digital architecture is to have some kind of a message queue, and clients listening to it.
>
> **[0:11](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=11)** There are many message queue systems: Kafka, RabbitMQ, Amazon SQS, [[Google]] Pub/Sub, [[Microsoft Azure|Azure]] Queue, and more.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=19)** The details about choosing each system vary.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=22)** But the idea is the same.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=24)** You subscribe to a topic or a subject, and get notified when messages are published to this topic.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=31)** Most of the time, messages are just a sequence of lines, and you need to decode them with the appropriate serialization format.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=39)** [[JSON]], MessagePack, Protocol Buffer, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=42)** We are going to use a message queue called NATS.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=45)** To run the server, you're going to use Docker.
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=48)** If you'd like to know more about Docker, check out our courses on it.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=53)** run --rm --publish=4222:4222
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=63)** Publish the Docker port 4222 to the localhost.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=66)** And we're going to run the NATS server.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=70)** And it says that the server is ready.
>
> **[1:12](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=72)** A similar technique publishing messages to the right subject.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=76)** [[Python (Programming Language)|Python]] and we have spammer, which sends messages.
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=82)** Now let's have a look at the code.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=84)** We input JSON since the messages are encoded in JSON, and we use the pynats library to connect.
>
> **[1:29](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=89)** In line seven, we define a handler.
>
> **[1:31](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=91)** This handler will get called every time there is a new message.
>
> **[1:36](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=96)** And it gets the message object.
>
> **[1:37](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=97)** In line eight, we use JSON to decode the payload, which is bytes, into a python object, a dictionary.
>
> **[1:43](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=103)** In line nine, we just print it.
>
> **[1:45](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=105)** But usually, you'll do something more interesting with it.
>
> **[1:48](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=108)** In line 12, we connect, and then we subscribe to the right subject, and we say the callback is a handler, and we're going to wait until we have 10 messages.
>
> **[1:58](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=118)** And now python event_client.py And we are getting events of the subject.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Python (Programming Language)|Python]] (3), [[Google]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** docker (3), python (3), rm (1)
> **Env Vars:** json (4), nats (2), sqs (1)
> **Ports:** :4222 (1), port 4222 (1)
> **Definitions:** is a  (2)
> **File Paths:** event_client.py (1)
> **Code Identifiers:** event_client (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Location from IP](https://www.linkedin.com/learning/data-ingestion-with-python/solution-location-from-ip-20213859?u=76281980)


### 4. Web Scraping

[↑ Back to Table of Contents](#table-of-contents)

#### [Try to find an API](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=1)** - [Instructor] If you'd like data from a website or a server the first thing you should do is try and find an API.
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=8)** If you can't find an API, as last resort, you'll parse the [[HTML]] coming from the site either with a parser or a regular expression and grab the data you're interested in.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=19)** This is known as screen scraping.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=22)** However, make a good effort to find an API.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=25)** The two main reasons are it will be much easier for you to parse the output in [[Python (Programming Language)|Python]], and an API's tend to be much more stable.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=35)** I've written several systems that parse HTML and they are very brittle.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=39)** It's enough that the website is upgrading their templating system and your code is broken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (4), html (2)
> **CLI Commands:** find (3), make (1), python (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Working with Beautiful Soup](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=1)** - [Instructor] There are several libraries for passing [[HTML]].
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=4)** By far, the most common one is Beautiful Soup.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=10)** Let's have a look at the page that shows foreign exchange rates.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=14)** This page is ugly.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=15)** That's exactly the reason people won't let me touch anything user-facing.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=19)** This is what the user sees.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=21)** However, what your code will see is the underlying HTML.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=25)** So right click, view page source.
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=29)** This seems like a lot of HTML for such a small page.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=32)** Actual webpages are usually much more complicated than that.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=36)** You'd like to extract the date and exchange rates from this page.
>
> **[0:41](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=41)** You can see the date at the bottom inside an i, with the class equal date, and exchange rate are inside a table, inside a td, and for the symbol, we have the title, which is the name of the currency.
>
> **[0:56](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=56)** Let's have a look.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=57)** Here's the function to pass the HTML.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=59)** In line nine, I'm calling Beautiful Soup on the HTML and telling it which parser to use.
>
> **[1:05](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=65)** It can use several parsers to parse the underlying HTML.
>
> **[1:08](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=68)** And now, in line 11, I have an example of what I'm looking for which is really good for readability and maintainability.
>
> **[1:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=75)** Line 12, I'm telling Beautiful Soup to look for i element with the class date, and in line 13, if I can't find it, I raise a value error.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=84)** Otherwise, in line 16, I'm getting the text and converting it to a datetime object.
>
> **[1:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=90)** After that, I'm going for the rates.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=92)** In line 18, I'm creating the initial dictionary, and in line 19, I'm going over every table row.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=98)** Again, there is a documentation with an example of what I'm looking for.
>
> **[1:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=102)** I know that there are two tds in every table row.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=104)** So in line 25, I'm using unpacking to get them.
>
> **[1:47](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=107)** I'm getting the symbol from the first one, and the rate from the second one, converting it to a float, and populate the dictionary in line 28.
>
> **[1:58](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=118)** At the end, at line 30, I'm returning the date and the dictionary of rates.
>
> **[2:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=122)** In the main, we open the file with HTML, and then in line 37, we use our function to get the date and the rates and print them out.
>
> **[2:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=131)** Let's have a look.
>
> **[2:12](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=132)** [[Python (Programming Language)|python]] fx.py And we see the date, and we see the rate for every currency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** html (7)
> **CLI Commands:** find (1), python (1)
> **File Paths:** fx.py (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with Scrapy](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=1)** - If you find yourself in the need to post [[HTML]] from several sites, Scrapy is a good system to use.
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=8)** First, start a demo server.
>
> **[0:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=11)** [[Python (Programming Language)|python]] httpd.py and now the server is ready on local host 8987.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=18)** This is the page we see.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=20)** We have rates per date.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=21)** And when we go for every day, we have the currency and the rate.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=26)** We'd like to start from the main page, and get the data for each page.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=30)** Start by creating a Scrapy project.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=33)** scrapy startproject fx So it created a template directory for us.
>
> **[0:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=42)** We can see what's in there.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=44)** Now we need to write our own Spider, which is going to be in fx/fx/spiders.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=52)** Which is currently empty.
>
> **[0:54](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=54)** So, let's have a look at our Spider which is called fx.py in the Spiders directory.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=61)** In line 5 we inherit from Scrappy the Spider, we give it a name, and we say what are the start urls.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=66)** In our case it's just one, http local host 8987.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=70)** Then in line 11, we have parse which gets response.
>
> **[1:14](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=74)** The response is a past html.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=77)** What we are doing is for every list item that has an a drift, we are going to yield the next page to follow.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=84)** So we say follow a.get and we say the callback, meaning once you get the page, call this function.
>
> **[1:31](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=91)** The function is self.parse_date parse_date will get the url.
>
> **[1:37](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=97)** Which is used for extracting the date from the path.
>
> **[1:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=102)** And then for every table row, we pass the css.
>
> **[1:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=106)** For the title and for the text.
>
> **[1:49](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=109)** And in line 24, we convert the ratio to a float, since everything in html is text, and populate the dictionary.
>
> **[1:57](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=117)** And at the end, we yield the data.
>
> **[2:00](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=120)** To return the data that is a dictionary of date and symbols and their ratios.
>
> **[2:07](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=127)** To run this, we are going to change directory to fx.
>
> **[2:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=131)** And we are going to do scrapy crawl fx and we say the output file is fx.jl And this is going to crawl over all the pages and meet some logging information.
>
> **[2:28](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=148)** But now in fx.jl, we have the data per date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** httpd.py (1), fx.py (1)
> **CLI Commands:** find (1), python (1)
> **Code Identifiers:** parse_date (2)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Speakers:** - if (1)

#### [Working with Selenium](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=1)** - [Narrator] Let's start our web server, [[Python (Programming Language)|python]] httpd.py, and the server is ready on local host 8985.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=9)** If you go there, we see the page that you want, but if you look at the page source, we see that it is empty, there's no data here.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=18)** What happens is that the browser is loading the initial [[HTML]], and then issuing a call with [[JavaScript]] to get the data from the server.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=27)** This means that we need to have an actual browser to get the data.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=33)** To solve this issue, we use a project called [[Selenium]].
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=37)** Selenium is a framework to alternate working with browsers.
>
> **[0:41](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=41)** Apart from installing the Python binding for Selenium, you will also need to install the Selenium driver for your browser, Firefox, Chrome eccetera.
>
> **[0:50](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=50)** Consult the documentation on the Selenium website.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=53)** Let's have a look at the code.
>
> **[0:55](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=55)** So from Selenium we import webdriver, and then with webdriver.Firefox, we're going to use Firefox as our web browser, we do a get to get the page.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=67)** Then the page is loaded, we can use find_element_by_css_selector to find the '.date', so we have the date, and then for every td, we're going to do a follow, extract the text and the ratio and print it out.
>
> **[1:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=83)** Let's have a look, python fx.py, and you will see a web browser starting, and when you go back to our console, we see the exchange rate for this current date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (6), [[Python (Programming Language)|Python]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **CLI Commands:** python (3), find (1)
> **Tools:** firefox (3)
> **File Paths:** httpd.py (1), fx.py (1)
> **Definitions:** means that (1), is a  (1)
> **Code Identifiers:** find_element_by_css_selector (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)

#### [Other considerations](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=1)** - [Instructor] Calling APIs can be more complex than just writing code to access and pass.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=6)** Here are a few points to consider.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=9)** Some sites have a limit on how many requests you can make per amount of time, say a day.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=15)** They usually allow more requests if you pay more.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=18)** Make sure to read the plans and try to figure out how much is going to cost you for your use case.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=25)** Calling an API can be slow, the usual approach is either to run query's in parallel, or use a special bulk API these sites have.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=34)** Another option is to save results locally, known as caching.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=39)** Some sites will blacklist certain IPs to disallow bots.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=44)** You might need a special proxy or VPN if you scrap data from a cloud provider.
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=49)** [[Selenium]] needs to run a browser, which means, it needs some kind of a screen to attach to, however, when running a script on a server, you won't have a screen, this is known as headless mode, check out solutions, as headless drivers, VNC, XVFB, and others.
>
> **[1:09](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=69)** This is usually something the operations team need to support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (1)
> **Env Vars:** api (2), vpn (1), vnc (1), xvfb (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Get stock information from HTML](https://www.linkedin.com/learning/data-ingestion-with-python/solution-get-stock-information-from-html?u=76281980)


### 5. Schema

[↑ Back to Table of Contents](#table-of-contents)

#### [What are schemas?](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=1)** - [Instructor] Let's have a look at some data.
>
> **[0:03](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=3)** We can see some weather data, but what does each column mean?
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=8)** To really understand, we need the schema.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=10)** There are several definitions of schema.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=12)** I'd like to think of the schema as the data about the data, or [[Metadata]].
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=18)** In our example, we can say that the data is some meteorological data.
>
> **[0:23](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=23)** The date is the day the data was measured.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=27)** Snow is millimeters of snow.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=31)** TMAX is the maximum temperature at that day.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=35)** TMIN is the minimal temperature at that day.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=38)** And if you couldn't guess, PGTM is peak gust time, when the wind was stronger, and 1337 is actually, 1:37 pm.
>
> **[0:50](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=50)** If you look close at the temperatures, for example here, we have 100 maximum, and 11 minimum, they don't make that much sense.
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=58)** Not in Celsius and not in Fahrenheit.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=61)** They are actually in one tenth of a Celsius.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=64)** Now that we have the schema, the data makes much more sense.
>
> **[1:08](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=68)** Sometimes you'll hear about [[NoSQL]] or schema-less [[Databases]].
>
> **[1:13](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=73)** Even if the schema is not formally defined, it's out there in the code, or in peoples' head.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=79)** It's much better to have it written down.
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=82)** I've consulted with companies which don't know the data schema anymore.
>
> **[1:26](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=86)** People left and took the knowledge with them.
>
> **[1:29](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=89)** Make sure it doesn't happen to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[NoSQL]] (1), [[Databases]] (1)
> **Env Vars:** tmax (1), tmin (1), pgtm (1)
> **CLI Commands:** make (2)
> **Ports:** :37 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with ontologies](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=1)** - [Narrator] At one company I worked for, we go a bug report that we calculate Unique Users wrong, we've looked at the code and couldn't find any issue.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=10)** Finally, my boss went around and asked, It turned out we've had four different definitions of Unique Users in the company.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=20)** Ontologies came from philosophy to computer science, it deals with naming and defying things in your system.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=27)** It also talks about relations between these things, for example: Say an order has a buyer, which is a user in your system.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=36)** For example, we can discuss a time stamp for measurement.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=39)** Is it just a day or a final granularity?
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=43)** What's the time zone? Etc, etc Ontologies might seem obstruct, but I encourage you to start every project by defining and agreeing on things or entities in your system and their relations.
>
> **[0:56](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=56)** You'd be surprised how everything becomes clear and even your code makes more sense.
>
> **[1:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=62)** If you'd like to dig deeper search for Ontology engineering and related subjects.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [What should be in schema](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=1)** - I hope you're convinced that you need to have a Schema without doubt.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=5)** But what should go in it?
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=7)** I say, everything has to make sense of the data.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=10)** Here are some parts to consider, description, some text about what this data is.
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=17)** In our example, PGTN should be spelled out as Pick Gust Type.
>
> **[0:23](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=23)** Types, what's the type of the data?
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=27)** Is it a integer, a float, a text, units.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=31)** What are the units of the data?
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=33)** In our case, temperature is a tenth of a Celsius.
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=37)** Constraints, the lowest ever recorded was minus 89.2 or about 60% Celsius.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=44)** The highest recorded was 57.8 celsius.
>
> **[0:47](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=47)** However, if you measure agent temperature, those limits will differ.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=52)** Constraints between fields, you can't have snow when temperature is above a certain point.
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=58)** Relation, what contains what?
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=61)** Is it a one to one or one to many relation.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=64)** Anything that can help you make sense of the data should be there.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=67)** Don't get to the state where you don't know what the piece of data means and how to check it's quality.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Versions:** 89.2 (1), 57.8 (1)
> **Env Vars:** pgtn (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - i (1)

#### [Schema changes](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=1)** - Over time, your data will change.
>
> **[0:03](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=3)** And with it, your schema will change.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=6)** Changes can come from organic change, say a new piece of information, such as Twitter handle for user.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=13)** Some comes from redesign of data, say you have a complex address record instead of street and house number.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=19)** When we look at schema changes, we often split them into two categories.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=24)** Breaking, and nonbreaking.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=25)** Nonbreaking changes mean that the old fields are still there and you can access them as usual.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=30)** It usually means adding a new field, say a [[GitHub]] handle.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=35)** However you need to think about what to do with the old data.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=38)** Can you add new data?
>
> **[0:40](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=40)** What are the default values for the old data?
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=43)** How do I handle missing data?
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=45)** Breaking changes mean that old data doesn't fit anymore.
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=48)** It's usually a removal or rename of a field.
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=51)** These changes are harder to implement and require more planning.
>
> **[0:55](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=55)** You should have a plan on how to make schema changes, since they will happen.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=59)** Write your code in a way that can handle missing fields, version your data in your schema, and test everything, even after trivial schema changes.
>
> **[1:08](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=68)** If you're working with [[Relational Databases]] there are many tools and techniques supporting schema changes.
>
> **[1:13](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=73)** Look them up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Relational Databases]] (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - over (1)

#### [Schema validations](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=1)** - [Instructor] Once you have a schema, make sure to validate your data against it.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=5)** We'll discuss the causes of errors in other episode, but I can guarantee you will have errors in your data.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=12)** Most of the time, you'll do these checks manually.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=15)** Make sure they don't take too much of your time.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=18)** A lot of time, I use a dictionary that wraps field to a validation function.
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=22)** Let's have a look.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=24)** I'm defining a record as a namedtuple with date, snow, tmax, tmin, and pgtm.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=30)** And I'm defining a special value for the missing value.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=34)** I have two functions to validate temperature that are in the right range and snow, which has to be positive number.
>
> **[0:42](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=42)** And then I have a list of validators for the date and the pgtm, I don't need that, but snow, tmax, and tmin has a validation function.
>
> **[0:54](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=54)** And then I'm validating the record.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=57)** For every attribute validator that I have in the validator, I'm getting the attribute and if the value is missing, means I have a missing attribute, which is an error.
>
> **[1:09](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=69)** In this case, you need to think if this is really an error in your case or if you can allow for missing values.
>
> **[1:14](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=74)** And if there is a validator, I apply it to the value.
>
> **[1:18](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=78)** Here's an example, I have some data with date, time, and values, and then for every record in data, I'm validating the record.
>
> **[1:27](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=87)** So, [[Python (Programming Language)|python]] weather.py.
>
> **[1:30](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=90)** And there's no output since all the data is valid.
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=94)** Other than handwriting your own, here are some other libraries you can look into.
>
> **[1:39](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=99)** Attrs and Traitlets let you define validators for class attributes.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=104)** Great Expectations runs validation on [[Pandas (Software)|Pandas]] dataframes and of course, if you're using a relational database, you could define constraints on the data there as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** weather.py (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 6. Working with Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of databases](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=1)** - [Instructor] A database is where you store your data.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=4)** [[Databases]] are a crucial part of your infrastructure, and you need to know how to work with them effectively.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=10)** As a rule, prefer all the established databases unless you have a really good reason.
>
> **[0:16](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=16)** This is not the place to play with the shiny new technology.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=20)** Depending on your data end needs, you might want to look at several kinds of databases.
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=25)** Here are some of the major types.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=27)** [[Relational Databases]] store data in tables of rows and columns.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=32)** They usually support [[SQL]], and a good default choice.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=36)** Some of the majors ones are [[PostgreSQL]], [[MySQL]], MSSQL, Oracle, and others.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=43)** Key/value databases are like dicts in [[Python (Programming Language)|Python]].
>
> **[0:47](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=47)** They allow fast access by key, and use the log for caching.
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=51)** [[Redis]] is probably the most known one these days.
>
> **[0:54](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=54)** Document databases store objects with fields.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=57)** They allow for rapid development since they are not strict with schema.
>
> **[1:02](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=62)** Notable ones are [[Elasticsearch]], and [[MongoDB]].
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=67)** Graph databases store relationships between objects.
>
> **[1:11](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=71)** Think of users on a social network and their relationships.
>
> **[1:14](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=74)** Some of the common ones are [[Neo4j]] and Dgraph.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=79)** Deciding on a database is one of the big technical decisions you will make.
>
> **[1:23](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=83)** Make sure to know your data and queries before you select one.
>
> **[1:27](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=87)** And if your organization already have a database, make sure to learn how to use it effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (6), [[Relational Databases]] (1), [[SQL]] (1), [[PostgreSQL]] (1), [[MySQL]] (1)
> **CLI Commands:** make (3), mysql (1), python (1)
> **Env Vars:** sql (1), mssql (1)
> **Best Practices:** make sure to (2)
> **Speakers:** - [instructor] (1)

#### [Hosted and cost of ops](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=1)** - [Instructor] Nowadays, it's very easy spin a new database.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=4)** Start a VM or a docker image and you have a running database.
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=8)** However, this is miles away from production setup.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=12)** You need to think of things like monitoring, security, backup and restore, scale, and much more.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=20)** Since the database going down is one of the worst things that can happen to you, you need to try to prevent it as much as possible.
>
> **[0:28](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=28)** Planning a database on your own in production ready setup requires a lot of effort and a lot of experience.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=35)** These cost of operation is usually underestimated and this is why I usually recommend to start with a hosted solution such as [[Google]]'s BigQuery.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=45)** It might look more expensive but it will save you a lot of effort that you can focus on implementing important features.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=52)** Once you have a lot of data and experience on how you use your data, it might make sense to move to your own hosted solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **CLI Commands:** docker (1), make (1)
> **Prerequisites:** setup (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with relational databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=1)** - [Instructor] When people talk about [[Databases]], they usually mean [[Relational Databases]].
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=6)** Relational databases are old and reliable technology.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=10)** There's a lot of knowledge and tooling around them.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=13)** Most of them support [[SQL]], which is the standard library for querying data.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=18)** If you'd like to learn more about SQL, check out our SQL courses.
>
> **[0:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=23)** [[Python (Programming Language)|Python]] has an established way of working with SQL databases, called the Database API.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=30)** Most established drivers conform to this pack which makes life easier for you.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=35)** You don't have to learn something new for each database.
>
> **[0:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=38)** In this example, we're going to use SQLite.
>
> **[0:41](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=41)** It's an embedded database that comes installed with Python.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=45)** SQLite is not a toy.
>
> **[0:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=46)** If you use a browser or an [[Android]] phone, you're using SQLite.
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=51)** Let's have a look.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=52)** SQLite comes with a command line tool called sqLite3, and we can look at the database.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=59)** And for example, have a look at the schema, and we see that we have vendor, count, pickup, dropoff, distance, tip, and total.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=67)** Let's see how we can use it from Python.
>
> **[1:09](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=69)** We import sqLite3, and in line four we create a connection to the file.
>
> **[1:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=75)** And because SQLite needs some help we tell it to detect the types from the declaration.
>
> **[1:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=81)** In other databases, this might not be required.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=84)** In line five we're using sqlite.Row as the row factory, so we can get rows as dictionary accessing columns by name.
>
> **[1:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=93)** We're going to run a query, so the parameters for the query are in a dictionary.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=98)** We say the vendor is VeriFone.
>
> **[1:40](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=100)** In line 11, we have "SELECT distance FROM rides WHERE vendor = :vendor", and this is a placeholder that the SQLite driver will fill.
>
> **[1:49](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=109)** Don't try to construct SQL queries manually yourself.
>
> **[1:54](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=114)** You will get something known as an SQL Injection.
>
> **[1:57](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=117)** Then in line 13 we create a [[Cursor]], we execute the query, and then we do a for loop on the cursor, every time getting a row.
>
> **[2:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=126)** We're getting the distance column from the row and increment the count and the total.
>
> **[2:12](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=132)** And finally, we calculate the average distance.
>
> **[2:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=135)** Let's run this.
>
> **[2:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=137)** So, quit from here, and python rides.py and the average distance is 2.96 miles.
>
> **[2:26](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=146)** [[Pandas (Software)|Pandas]] knows also how to work with relational databases.
>
> **[2:29](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=149)** All you need to pass it is a valid connection to the database.
>
> **[2:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=154)** So the beginning of the file is exactly like the first one.
>
> **[2:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=158)** We create a connection, we have a query, and we have the parameters.
>
> **[2:42](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=162)** But in line 14 we do data frame df = pd.read_sql.
>
> **[2:47](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=167)** We give it the SQL, the connection, and the parameters to the SQL.
>
> **[2:51](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=171)** Once we have a data frame, we can calculate the average by running mean on the distance column, and we print it out.
>
> **[2:58](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=178)** python rides pd.py and we get the same average distance.
>
> **[3:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=186)** You might also want to look at ORM systems, Object Relational Mappers, such as SQLAlchemy, which creates easier mapping from Python objects to rows in the database.
>
> **[3:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=197)** Pandas knows how to work with SQLAlchemy as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Python (Programming Language)|Python]] (6), [[Databases]] (3), [[Relational Databases]] (3), [[Pandas (Software)|Pandas]] (2)
> **Env Vars:** sql (8), api (1), select (1), where (1), orm (1)
> **CLI Commands:** python (6), sqlite3 (2)
> **Code Identifiers:** sqlite3 (2), read_sql (1)
> **Definitions:** is a  (2), known as (1)
> **File Paths:** rides.py (1), pd.py (1)
> **SQL:** select (1), where (1)
> **Analogies:** for example (1), such as (1)

#### [Working with key or value databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=1)** - [Instructor] Key-value [[Databases]] maps keys to values.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=4)** The keys are usually strings or bytes, and the value types vary depending on the database.
>
> **[0:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=10)** They can be strings, bytes, number, lists, and other.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=14)** If you'd like to have more complex types, you'll probably have to serialize and de-serialize them using encodings such as [[JSON]].
>
> **[0:22](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=22)** A lot of time, key-value databases, are used as a caching layer, meaning we get faster access to data than hitting another database.
>
> **[0:31](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=31)** Caching means the key don't have to persist in the database.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=35)** Visual look up is we first to look in the cache and if you find it, we use the data, otherwise if it's not find, we look in the main database.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=44)** If it's found, we update the cache and use the data, and if it's not found in the main database, it's an error.
>
> **[0:50](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=50)** One of the most common key-value databases is [[Redis]].
>
> **[0:54](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=54)** You're going to use Docker to run a local Redis database.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=57)** Use the run Redis script to start a Redis database and populate it with data.
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=63)** So, [[Python (Programming Language)|python]] run_redis.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=66)** And now let's have a look at how we can search the data.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=70)** In line four, we import the Redis client and in line eight, we connect to it.
>
> **[1:16](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=76)** In line nine, we issue a ping, just testing that we can connect to the database.
>
> **[1:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=81)** Transaction IDs in line 13 are the transactions we're going to look for.
>
> **[1:25](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=85)** And then in line 21, for every transaction, we create a key, which is tid: and the transaction ID.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=92)** Then we do a get.
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=94)** If we get none, it means it's not found in database.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=98)** Otherwise, we use JSON to de-serialize the data and repeat some information about the data.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=104)** Another thing we can do is scan.
>
> **[1:47](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=107)** In line 32, we say scan_iter and we say tid:*, meaning everything that has a prefix of tid.
>
> **[1:56](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=116)** And then, we count how many of these we have.
>
> **[2:00](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=120)** Let's run it.
>
> **[2:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=121)** Python redis_demo.
>
> **[2:04](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=124)** We found the data for our transactions, the SKU and the price, and we have a total of 205 transactions in our database currently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (5), [[Databases]] (3), [[JSON]] (2), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** find (2), python (2), docker (1)
> **Code Identifiers:** run_redis (1), scan_iter (1), redis_demo (1)
> **Env Vars:** json (2), sku (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with document databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=1)** For this episode, you need to download some data from Chicago City data portal.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=6)** Run [[Python (Programming Language)|python]] download.py Document-oriented [[Databases]] store data in format of a document, which is a collection of fields and their values.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=19)** Some of the known ones are [[Elasticsearch]] and [[MongoDB]].
>
> **[0:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=23)** Companies like document-oriented database at early stages since they don't enforce schema and let you experiment with data quickly.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=33)** These databases also tend to handle scale well.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=36)** However, there is no standard query language for these databases, like [[SQL]] in [[Relational Databases]].
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=43)** And to handle scale, most of them do not have transactions, which can be a big pain.
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=48)** Let's see an example of Elasticsearch using Docker.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=52)** First, run the server.
>
> **[0:55](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=55)** python run_elastic.py This is going to take a little bit of time.
>
> **[1:02](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=62)** And once you see the elasticsearch is ready on port 2900, we're good to go.
>
> **[1:09](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=69)** We import Elasticsearch, and from the helpers, we import something called scan, for scanning the database.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=77)** In line six, we connect to the host, and in line seven, we use a ping command to see that we actually have a connection.
>
> **[1:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=84)** In line 11, we define query where the zipcode is either 60656 or 60666, which are the zipcodes for O'Hare airport.
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=95)** And the result is elasticsearch dot search, we say that the index, where we looking for, is food and the q is the query.
>
> **[1:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=104)** Elatsticsearch returns the result as a deeply-nested dictionary.
>
> **[1:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=108)** To get the count, we use the hits, then the total, then the value, and we print how many hits we have in O'Hare.
>
> **[1:55](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=115)** And then, we get the first document in line 17.
>
> **[1:59](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=119)** The document is under _source and we print the first location, the document name.
>
> **[2:08](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=128)** In line 22, we going to count the average number of violations.
>
> **[2:11](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=131)** So we do a scan on the food with the query.
>
> **[2:15](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=135)** We get the source.
>
> **[2:17](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=137)** And we look at the violation field, which is violations separated by the pipeline character.
>
> **[2:23](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=143)** And we add them to the count.
>
> **[2:24](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=144)** At the end, we calculate the average and print it.
>
> **[2:28](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=148)** Let's see.
>
> **[2:29](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=149)** Python elastic_demo and we have 54 hits, the first location is St Eugene.
>
> **[2:38](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=158)** And the average number of violations is 3.59.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Elasticsearch]] (5), [[Python (Programming Language)|Python]] (3), [[Databases]] (3), [[MongoDB]] (1), [[SQL]] (1)
> **CLI Commands:** python (3), docker (1)
> **File Paths:** download.py (1), run_elastic.py (1)
> **Code Identifiers:** run_elastic (1), elastic_demo (1)
> **Ports:** port 2900 (1)
> **Env Vars:** sql (1)
> **Versions:** 3.59 (1)
> **Definitions:** is a  (1)

#### [Working with graph databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=1)** - [Instructor] Sometimes we're interested in relations between entities in our system.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=5)** For example, when analyzing a social network, you can probably model relationships with a relational database, but it's not fun.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=14)** Graph database lets you define entities, their properties, and their relations between them.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=20)** One of the most common graph [[Databases]] is [[Neo4j]], but there are others as well.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=26)** You should know your requirements, only then choose a candidate, then run some tests, and pick one.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=33)** Here you use Docker to run and populate a small database.
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=37)** So [[Python (Programming Language)|python]], run Neo4J, once you see Neo4J ready, you can use the database.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=44)** Let's have a look at the code.
>
> **[0:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=46)** We input Neo4J package, and we create a driver and get a session which is a database.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=52)** In line 10, we define a query, Neo4J has its own query language called Cypher.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=59)** All we are saying is that we want to match a user, where the log in equal the log in that we're going to provide, and return the name.
>
> **[1:08](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=68)** We run the query, where the log in is the one we defined in line eight, meaning daffy, and then we get the result and print the name.
>
> **[1:18](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=78)** In line 21, we have a bit more complicated query.
>
> **[1:21](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=81)** We want all the users that daffy follows, so match a user which follows another user, where the log in of the original user is the one we provide, and return the name of the followed, and then in line 28, we run the query, in line 29, we get the values, we print out how many, and for every node, we print the name.
>
> **[1:46](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=106)** Let's run it.
>
> **[1:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=108)** Python, Neo4J demo, and we see that the name is Daffy Duck and it follows five users, Bugs Bunny, Marvin the Martian, Pepe le Pew, Porky Pig, and Wile E. Coyote.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neo4j]] (6), [[Python (Programming Language)|Python]] (2), [[Databases]] (1)
> **CLI Commands:** python (2), docker (1), node (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: ETL](https://www.linkedin.com/learning/data-ingestion-with-python/solution-etl-20213862?u=76281980)


### 7. Troubleshooting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Data is never 100% okay](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=1)** - [Narrator] DJ Patil, who, among many other roles, served as the Chief Data Scientist of the US government said, "Every single company I've worked at and talked to "has the same problem without a single exception so far, "poor [[Data Quality]], especially tracking data.
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=19)** "Either there's incomplete data, missing tracking data, "duplicative tracking data."
>
> **[0:25](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=25)** I can attest to that as well.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=27)** In my consulting projects, I get to see a lot of data from a lot of companies, and every time we find issues with the data.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=35)** What does it mean for you?
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=36)** It means you should be aware and prepared for errors in your data, both in the data pipeline process and in your models or [[Algorithms]].
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=45)** Invest time thinking about issues such as how can you detect data errors?
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=51)** How should you handle data errors?
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=53)** How can you make your models resilient to data errors?
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=57)** And many more questions.
>
> **[0:59](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=59)** Once you acknowledge that you have errors in your data, you start (speaking quickly) it and avoid the classic GIGO, garbage in garbage out, problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** gigo (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Causes of errors](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=1)** - [Narrator] Knowing the Cause of Errors will help you manage them better.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=4)** Let's have a look at a few common causes.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=6)** The first cause is [[Hardware]].
>
> **[0:08](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=8)** Drivers fails, memory fail, there are power surges, and even cosmic rays.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=14)** Studies by IBM in the 90s suggest that computers typically experience about one cosmic ray induced error per 256 megabytes of RAM per month, which means that if you have a 32 gigabyte RAM, you have a cosmic ray induced error every three hours.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=32)** There's not much you can do about hardware errors.
>
> **[0:35](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=35)** Know about them and discuss with your IT how to minimize them.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=39)** Another cause of errors is user input.
>
> **[0:41](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=41)** People make mistakes, typos, calculation errors, copy and paste errors, and much more.
>
> **[0:47](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=47)** Try to validate all user input as much as you can.
>
> **[0:51](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=51)** Have a plan to automatically fix user errors.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=53)** For example, spelling.
>
> **[0:55](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=55)** The last cause of this class is bugs.
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=58)** After writing code for more than 20 years, I still haven't figured out how to write bug-free code.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=64)** Cover yourself, you have to have tests and validation in every place that handles data.
>
> **[1:10](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=70)** You should have a plan on how to fix bug induced data errors.
>
> **[1:15](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=75)** Think about your data pipeline.
>
> **[1:17](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=77)** What are the places that are most likely to cause errors?
>
> **[1:20](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=80)** How can you monitor and fix these errors?
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=82)** How can you prevent them?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2)
> **Env Vars:** ram (2), ibm (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Filling missing values](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=0)** Missing values are not strictly an error but many [[Algorithms]] don't work well with missing data.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=6)** There's a difference between missing data and empty or zero value.
>
> **[0:11](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=11)** Sometimes it's hard to know the difference.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=13)** In our example is the snow measurement of zero coming from a missing measurement?
>
> **[0:19](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=19)** or there was actually no snow that day.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=21)** You should know your data and know the difference.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=24)** Lucky for you Panda is great for dealing with missing data.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=27)** Panda supports missing values in floats with NAN Not a Number and for timestamp it has NAT Not a time.
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=37)** There is also experimental support for missing integer data in the new integer array type.
>
> **[0:42](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=42)** NAN is defining the floating-point specification and it's a funny value.
>
> **[0:47](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=47)** Let's have a look.
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=48)** So, let's import numpy as np and [[Pandas (Software)|pandas]] as pd.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=57)** in np we have np.nan you can also create a new one with float.nan.
>
> **[1:04](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=64)** nan does not equal itself.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=66)** So, np.nan equals np.nan and it doesn't equal itself.
>
> **[1:12](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=72)** Need to use a special function such as pd.isnull(np.nan) and then you will get true.
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=82)** If you have a series of values let's say pd.Series of 1.2, 2.3, np.nan and 4.5.
>
> **[1:37](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=97)** Now if you use pd.isnull on the values you will get a Boolean series indicating what are the places we have non-values there.
>
> **[1:46](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=106)** When you do need to feel and see data, Panda's data frame in series have two methods that will help you fillna and interpolate.
>
> **[1:53](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=113)** Let's say now that values is a series.
>
> **[1:57](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=117)** pd.series of one, two, np.nan, four, five,
>
> **[2:13](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=133)** np.nan again and seven.
>
> **[2:18](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=138)** We can do values.fillna and pick a value that we would like to fill.
>
> **[2:22](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=142)** let's say zero.
>
> **[2:24](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=144)** You will get back a new series.
>
> **[2:27](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=147)** If you want to change the original series use the in-place equals truth parameter.
>
> **[2:32](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=152)** You can use computed values.
>
> **[2:34](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=154)** So, the average is values.mean and the average is 3.8.
>
> **[2:42](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=162)** Panda's functions are nan aware.
>
> **[2:44](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=164)** They just ignore nan when they do calculations.
>
> **[2:47](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=167)** And now you can do values.fillna with the average.
>
> **[2:54](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=174)** Interpolate will fill values with linear interpolation by default.
>
> **[2:59](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=179)** So we can do values.interpolate and we will get linear Interpolation whenever there is a nan we do the average of the values around it.
>
> **[3:12](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=192)** The accommodation of fillna.interpolate is excellent Granted since they have many options for various cases.
>
> **[3:19](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=199)** You also have in the access side files examples of what we did here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Pandas (Software)|Pandas]] (1)
> **Versions:** 1.2 (1), 2.3 (1), 4.5 (1), 3.8 (1)
> **Env Vars:** nan (2), nat (1)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)
> **Analogies:** such as (1)

#### [Finding outliers (manual)](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=1)** - [Narrator] Outlier is a data point that differs significantly from others.
>
> **[0:05](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=5)** Basically, bad data.
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=7)** [[Pandas (Software)|Pandas]] makes it easy to find these values and replace them.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=12)** Let's have a look.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=13)** So we start ipython.
>
> **[0:16](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=16)** Then we import pandas as pd and our data is going to be in an SQLite database, so we import sqlite3.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=24)** Connection is sqlite3.connect and the database is rides.db and our dataframe is pd.read [[SQL]], select star from rides and we give it the connection.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=43)** And we have 10,000 taxi rides.
>
> **[0:47](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=47)** And we can be nice and close the connection, since we don't need it anymore.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=52)** So if you look, for example, on the df trip distance, on the 90% quantile, we see that it's about seven miles.
>
> **[1:06](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=66)** However, if you look at the maximum value of the trip distance, this is 932.9 miles, which seems, not like a real taxi ride.
>
> **[1:18](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=78)** So we're going to change all the rides that are above 100 miles.
>
> **[1:22](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=82)** So first we need to find it, so the mask is dataframe trip distance is bigger than 100.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=92)** And we have seven of these rides.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=98)** Now let's take a fill value for that, let's take the top 1%.
>
> **[1:42](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=102)** So the fill value is df trip distance, quantile.99%.
>
> **[1:53](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=113)** And the fill value is 19.48 miles.
>
> **[1:58](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=118)** And now we're going to set, so df.loc in the mask, in the trip distance column, equal the fill value.
>
> **[2:10](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=130)** And now, if you look at df.trip distance.max it's only 35.57 miles, which seems much better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[SQL]] (1)
> **CLI Commands:** find (2), sqlite3 (2)
> **Versions:** 932.9 (1), 19.48 (1), 35.57 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Finding outliers (ML)](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=1)** - Sometimes finding outliers is not easy.
>
> **[0:03](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=3)** Considered for example this chart.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=6)** Is what we are seeing is an out of service attack or maybe it's just the shopping on Black Friday.
>
> **[0:13](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=13)** If you get it wrong, you're going to miss a lot of holiday shopping opportunity.
>
> **[0:17](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=17)** This is known as seasonality in data.
>
> **[0:20](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=20)** The reason active machine learning field called outlier detection.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=24)** Outlier detection is used a lot in monitoring systems and can find possible outliers that are hard to find otherwise.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=32)** There are even some companies that provide outlier detection as a service.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=36)** Scikit-Learn, the machine learning library for [[Python (Programming Language)|Python]], comes with several [[Algorithms]] for outlier detection.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=44)** Let's have a look at a simple example.
>
> **[0:46](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=46)** So hype Python, and then we're going to import [[Pandas (Software)|pandas]] as pd.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=52)** And from sklearn.neighbors we're going to import localoutlierfactor.
>
> **[1:02](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=62)** And now the data frame is pd.read csv and we have some AAPL information.
>
> **[1:12](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=72)** All right this is some trading information for AAPL.
>
> **[1:14](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=74)** We have the date, the symbol, open, high, low, close, and the volume.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=79)** Let's see if we can find out if we have some outliers or normal data in the volume.
>
> **[1:25](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=85)** You first need to take the data from the data frame, and shape it in a way that the localoutlierfactor can work with.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=92)** It expects an upper array at a specific shape.
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=95)** So, we're going to say that the volume is data frame volume.values which will extract the underlying upper array and then we're going to do reshape of minus one end one.
>
> **[1:54](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=114)** And if you look at the volume now, it's an array of one column and the length of the date frame.
>
> **[1:58](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=118)** And now we can create our models.
>
> **[2:00](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=120)** So clf equals localoutlierfactor and we're going to tell it that the contamination is auto.
>
> **[2:09](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=129)** And then because we're going to find the outliers and the same data that we're training on, we can use the fit predict.
>
> **[2:16](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=136)** So volumes equal clf.fit predict on the volume.
>
> **[2:24](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=144)** Predict will give us a minus one volume for everything it thinks it's an outlier.
>
> **[2:28](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=148)** So we can say that the mask equal or the values equal minus one.
>
> **[2:33](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=153)** And now we can fix our data frame.
>
> **[2:35](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=155)** We can say that the data frame.loc in the mask at the location of the volume equals let's say the mean volume.
>
> **[2:49](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=169)** And that's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** find (4), python (2)
> **Env Vars:** aapl (2)
> **Definitions:** is an  (1), known as (1)
> **Analogies:** for example (1)
> **Speakers:** - sometimes (1)

#### [Solution: Clean rides dataset](https://www.linkedin.com/learning/data-ingestion-with-python/solution-clean-rides-dataset?u=76281980)


### 8. Data KPIs and Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Design your data](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=1)** - [Instructor] Data usually starts simple.
>
> **[0:03](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=3)** You have few well thought out fields with clear names and types.
>
> **[0:06](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=6)** Then for a demo, you add some more fields.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=9)** Then marketing asks for a feature and you add some more fields.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=12)** You see where this is going.
>
> **[0:14](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=14)** I've seen the end result many times in many companies.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=18)** Fields nobody knows what they are and how they are populated and everyone is afraid to delete an unknown fields since they might be needed in some unknown sub-system.
>
> **[0:28](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=28)** Extra data is a liability.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=30)** It will cost you more in storage and computation.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=32)** Also, if you ever get hacked, user information might leak out.
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=37)** As a data scientist, you're the customer of the data and you have a say in about what should be in it.
>
> **[0:43](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=43)** Get involved in data infrastructure.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=45)** Have a written scheme of the data and understand the data pipeline.
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=49)** Ideally, you should know exactly where did every piece of data you're using is coming from.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [KPIs](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=1)** - [Instructor] You're going to monitor your data pipeline, and as time goes, you'll have more and more metrics and it will be hard to look at all of them at once.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=9)** Also, some metrics will be more low-level, and others might be computed.
>
> **[0:15](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=15)** To make sense of all of this, you need KPIs.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=18)** KPI stands for key performance indicator.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=21)** These are metrics that have direct impact on business, and ones we deem important.
>
> **[0:27](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=27)** The actual KPIs will vary from company to company, and from one team to another.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=32)** Make sure to have some.
>
> **[0:34](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=34)** If your company doesn't have data KPIs, go ahead and start the process.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=39)** Remember, that you're the customer of the data, and you should have a saying about its features and quality.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=45)** KPIs should be smart, specific, measured, attainable, relevant, and time framed.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=53)** For example, say you're writing a fraud detection system.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=57)** You have data flowing from several sources, and you're running your models on this data.
>
> **[1:01](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=61)** A KPI can be millions of records processed per day.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** kpi (2)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [What to monitor?](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=1)** - [Instructor] Monitoring, is your eyes on the data.
>
> **[0:03](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=3)** I once consulted a company that developed a cyber security sweep.
>
> **[0:07](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=7)** I kept up with the code and [[Algorithms]], but along the way installed a monitoring system.
>
> **[0:12](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=12)** Once we had eyes on data flowing in, we quickly changed priorities to [[Data Ingestion]] stability.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=18)** Assume you write a fraud detection system.
>
> **[0:21](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=21)** Assume you're writing a fraud detection system that gets data from server sources.
>
> **[0:26](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=26)** Pause the video and try to think about the list of things to monitor.
>
> **[0:30](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=30)** I'll wait.
>
> **[0:32](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=32)** Welcome back.
>
> **[0:33](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=33)** Here's my list of possible metrics.
>
> **[0:36](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=36)** It's by no means the correct one or the complete list.
>
> **[0:39](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=39)** Total numbers of records per day.
>
> **[0:41](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=41)** Number of records per source per day.
>
> **[0:44](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=44)** Total number of errors per day.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=45)** Number of errors per source per day.
>
> **[0:49](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=49)** Volume in bytes per day.
>
> **[0:52](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=52)** Pipeline processing time.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=53)** For example, if we see that the pipeline processing time is growing all the time, we have a problem and we need to fix it.
>
> **[1:00](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=60)** Metrics tend to accumulate and it's impossible for us humans to look at all of them all the time.
>
> **[1:05](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=65)** There are two solutions for this problem.
>
> **[1:07](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=67)** One, is to define one or few metrics that represents the whole system.
>
> **[1:13](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=73)** For example, Netflix has SPS - starts per second.
>
> **[1:19](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=79)** They found this is very indicative of problems in their system and it's a single metric they need to look at.
>
> **[1:25](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=85)** The second solution is to place an alerting system on top of your metrics.
>
> **[1:30](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=90)** Either with Hamilton rules, or with a monitoring detection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Data Ingestion]] (1)
> **Analogies:** for example (2)
> **Env Vars:** sps (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=1)** - Your [[Algorithms]] rely on good data.
>
> **[0:04](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=4)** And if you have some experience, you know that a lot of your time is spent with data.
>
> **[0:09](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=9)** To help you learn how to ingest data in its various sources, [[Python (Programming Language)|Python]] is a great language for fetching data from any place.
>
> **[0:18](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=18)** You should also be able to have a better data process and know how to validate and clean your data.
>
> **[0:24](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=24)** Now go back to your daily work and slowly try to improve it with the tool you learned here.
>
> **[0:29](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=29)** Write a former schema for your data, create a validation process, find more data sources in your company and understand them.
>
> **[0:37](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=37)** You will see that over time your algorithms will have better data to train on, which means they will give you better results.
>
> **[0:45](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=45)** If you'd like to learn more about Python or its scientific packages, we have many courses at all levels.
>
> **[0:53](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=53)** And always feel free to reach us out at 353solutions.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=57)** We'd love to hear from you and help you get better data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - your (1)


## Instructor

- [[Miki Tebeka]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Ingestion

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Collection]]
← [[Strategic Data Collection, Modeling, and Quality Management for AI Systems]] | **2 of 6** | [[Data Cleaning and Manipulating with Python in Excel]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Collection]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)