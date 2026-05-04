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
  - '[Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)'
prev_courses:
  - '[Strategic Data Collection, Modeling, and Quality Management for AI Systems](Strategic%20Data%20Collection%2C%20Modeling%2C%20and%20Quality%20Management%20for%20AI%20Systems.md)'
next_courses:
  - '[Data Cleaning and Manipulating with Python in Excel](Data%20Cleaning%20and%20Manipulating%20with%20Python%20in%20Excel.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Collection","position":2,"total":6,"prev":"Strategic Data Collection, Modeling, and Quality Management for AI Systems","next":"Data Cleaning and Manipulating with Python in Excel"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-ingestion
status: not-started
created: 2026-05-03
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/why-is-data-inegstion-important?u=76281980&t=1)** - [Miki] [Algorithms](../../Skills/Software%20Development/Algorithms.md) govern our life. They trade the stock market, control our police patrolling and soon will drive our car. All of these algorithms are trained on data. Sometimes a lot of data. What surprises many people doing [Data Science](../../Topics/Data%20Science.md) is that finding high quality and relevant data takes most of their time. Hi there, I'm Miki Tebeka and for more than 10 years I've been helping researchers become more productive. In this course, I'll show tips and tricks from my experience of getting the right kind of data into the hands of scientist. We'll cover many sources of data from files to APIs to [Databases](../../Skills/Software%20Development/Databases.md). We'll also talk about validating and cleaning data and how to integrate [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) in your process. At the end of this course you'll be able to fit your algorithm with the data it needs no matter where it's residing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Data Science](../../Topics/Data%20Science.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Speakers:** - [miki] (1)

#### [What you should know](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-you-should-know?u=76281980&t=1)** - [Instructor] This course uses the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language and its scientific packages. You should be familiar with both at the basic level. If you're not familiar with either one of these, check out our courses on these subjects. You should also know how to use the command line. And have Docker installed on your machine. Apart from that, you need to have an open mind and curiosity about data. That's about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), docker (1)
> **Tools:** command line (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/using-the-exercise-files?u=76281980&t=1)** - [Instructor] In the course, we're going to use several exercise files and several data files. Download the exercise files to a directory and uncompress them. Then, you will be able to follow along with the videos. In some cases, you will need to run a script to download more data or start a Docker container. I've tried to make the process as simple as possible.

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
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/overview-of-data-scientists-work?u=76281980&t=0)** - [Instructor] When people enter the [Data Science](../../Topics/Data%20Science.md) world, they have a certain image in their head, of how work will look like. They'll try some cool algorithm on some data, tweak some parameters and produce code that will learn by itself and improve business results, identify cat pictures or protect servers from new kinds of attacks. However when you interview data scientists, you'll find out that most of their time is spent on getting and cleaning data. That's why I think that data science should be written as DATAscience. Data is dominating two places, one is the amount of time you'll spend on it, the second is the quality of your [Algorithms](../../Skills/Software%20Development/Algorithms.md). In their influential article "The Unreasonable Effectiveness of Data" Halevy, Norvig, and Pereira, show that dumb algorithms will perform much better than smart ones, given enough data. This implies you'll want a lot of high quality data available to you. As a data scientist you'll find yourself doing the following Acquire data from various sources, clean this data, train a model, evaluate your model, realize you need more high quality data and go back to step one. At some point, your results will be good enough and you'll be able to ship, however data changes over time, and you'll always need to train your algorithms on high quality and relevant data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Data Science](../../Topics/Data%20Science.md) (2)
> **CLI Commands:** find (2), cat (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Where does data come from?](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=1)** - [Instructor] As a consultant, companies bring me in to help data scientists do their work. I ask the data scientist what data they require and then go around the organization and figure out how to get it. Organizations usually start small with one or two sources of data, say logs and a database. However, as they grow, they'll have more and more sources of data. Here are some of the sources I've seen throughout the years. [Databases](../../Skills/Software%20Development/Databases.md) are for, well, storing data. There are many kinds of databases from good old relational ones like [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md), to key-value ones like [Redis](../../Skills/Software%20Development/Redis.md), to document ones like [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) and more. As data grows, sometimes it's not even clear where we can find the data we want inside the database. API servers, [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), batch processes and more, are often write data to log files. These log files can be in many formats, and sadly, you'll probably see several log formats within the same organization. You'll find data in formats like Parquet, or ORC, these files are usually hosted on a big drive, such as Amazon S3, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage, or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Storage. Sometimes to get data, we need to call a service, or an API. For example, if you have the IP of a user and would like to know where they are located in the world, you'll probably use a system like MaxMind. In some cases, you'll run a computation to get the data you require.
>
> **[1:32](https://www.linkedin.com/learning/data-ingestion-with-python/where-does-data-come-from?u=76281980&t=92)** For example, when converting from feet and inches to meters and centimeters. These are just a few examples. I'm sure over time, you'll encounter many more sources of data. Lucky for you, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is very versatile, and can easily ingest data from a variety of sources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** find (2), python (1)
> **Env Vars:** api (2), orc (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Different types of data](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/different-types-of-data?u=76281980&t=0)** - [Instructor] Apart from the various sources of data, we also have several types of data. Here are some common ones. Records, this data is usually found inside [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), and has well-defined columns and types. Metrics, a lot of [Algorithms](../../Skills/Software%20Development/Algorithms.md) in [Data Science](../../Topics/Data%20Science.md) work with metrics. This data is usually a mix of numerical types, integers and floats. You'll find such data in storage like HDF5 and others. Graphs, working social networks and relationships between users, you'll find yourself using sentences like, "Users with two degrees of separation and are in the age group of 20 to 30." You'll find this data in graph [Databases](../../Skills/Software%20Development/Databases.md) like [Neo4j](../../Skills/Software%20Development/Neo4j.md). Textual, user comments, Wiki pages and much more. A lot of content on the Internet is text. You'll find this data everywhere, from plain text files on disk to columns in databases to specialized databases like [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md). I'm sure I've missed some of the data types. Not everything fits in these categories. You should know what type of data you're working with and how best to extract it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [Neo4j](../../Skills/Software%20Development/Neo4j.md) (1)
> **CLI Commands:** find (4)
> **Env Vars:** hdf5 (1)
> **Speakers:** - [instructor] (1)

#### [The data pipeline (ETL)](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/the-data-pipeline-etl?u=76281980&t=1)** - [Instructor] Most companies have some kind of a data pipeline. This pipeline will take the raw data, most times from server log files, one transformations on it, and edit to one or more [Databases](../../Skills/Software%20Development/Databases.md). This process is also known as ETL, which stands for extract, transform and load. During the pipeline, we handle tasks such as conversion. If you have a text file with the string 2020-01-01, we'd like to convert it to a timestamp or a date time in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Validation, check the data for errors, for example, if you have the string 2020-02-30, it's not a validate. Sometimes validation can be more complex. In weather data, we can't have snow in a day with the temperature was about 30 centigrade or 86 Fahrenheit. Enrichment, we'd like to add location information to the user IP. My IP is 216.52.21.11 it's in California, United States. Missing data, what happens if you don't have the customer IP? How can we handle it? You should know how will your data pipeline works, and what is the source for every piece of data you're using. Should also be in touch with the people maintaining the data pipeline and talk to them on a regular basis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** known as (1), stands for (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Env Vars:** etl (1)
> **Versions:** 216.52.21 (1)
> **Speakers:** - [instructor] (1)

#### [Final destination (data lake)](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/final-destination-data-lake?u=76281980&t=1)** - [Instructor] At the end of the data pipeline, the verified, clean, and enriched data is stored in one or more [Databases](../../Skills/Software%20Development/Databases.md). As a data scientist, it's much easier to work with one database. Some companies are starting to use the term data lake as the final destination of data and their [Algorithms](../../Skills/Software%20Development/Algorithms.md) come to quench their thirst. These [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) come in various format. Some of them, like [Google](../../Glossary/Service/Google.md)'s BigQuery and others, are [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Some, like Spark, are computation platforms, and there are many others. Get familiar with these data lakes. They are usually the source of data for your algorithm. Know how to work with them and where to find the data in them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Reading Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Working in CSV](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=1)** - [Instructor] CSV is a very common format. The main advantage of CSV is that it can easily be exported or imported by [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). CSV's also have several downsides. They don't keep type information, everything is a string. There's no standard of specification. And it's hard to work with unicode data inside CSV's. Let's have a look at some CSV data. It's a file called taxi.csv.bz2 in our exercise file. The file is compressed, which is common with CSV files that hold a lot of data. CSV is text, and text can be compressed a lot. For example, our uncompressed file is about eight times bigger than the compressed one. We see that the first line is a header line, with the names of the columns. And then we have data lines, each holds values separated by comma. This data is from the New York taxi data, which holds data on taxi rides in New York City. This file has ten thousand one lines, which means we have one line of header, and then ten thousand lines of data. In [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), we have two options to load CSV's. One is using the built in CSV model, and the other is to use [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). Let's have a look at both. The CSV model has two readers, one a reader, and one a dictionary reader, when we have columns. Since we have a header row, we're going to use a dictionary reader. The nice thing about these two readers, that they consume at most one line,
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=94)** allowing us to process huge files without blowing up our computer memory. Everything in CSV is text. You need a way to convert text fields to the right data type. And this is what we have on line 14. We say that the vendor ID is integer, that the passenger count is integer, that the tip amount is float, and for example, in line 19 and 20, we say the drop off and pick up fields are a time stamp. And now we have iter records. Iter records open the file, creates a reader on line 27, and then for every record, it creates an empty dictionary. And then for every column, it gets the converter and on line 32, applies this converter to the value. And here is an example in line 36. We import pprint so we can print something nice, and then we iterate over the records, and showing only the first ten ones, we print them out. Let's run this. Python csv_py.py. And we see that every record has the right type, date time, integers, and floats. Two more things to note. We open the file in a textual mode, in line 26, because CSV can work only with text. And using generator in line 33, you can see the yield statement returning one record at a time, avoiding memory blowout. And now let's have a look at how we do it with Pandas. So let's run ipython,
>
> **[3:06](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=186)** and we're going to import Pandas as pd. And pd. read_csv of taxi .csv.bz2. Once the data frame is loaded, it's important to look at the types, dtypes. And we see that Pandas is doing a great job of guessing what are the type of things, but if you look at the pick up and the drop off, they are represented as object, which means they are strings. We need to tell Pandas that these are time columns. So what we can do is time_cols equal tpep pickup datetime and tpep dropoff datetime. And now we're going to run the same command, but we're going to tell Pandas to parse the dates with the time cols. And then when you look at the dtypes, we can see now that the pick up and the drop off are time stamps. With CSV, we load the whole file to memory. In cases when the file is too big, we can use the chunk size parameter. So, we can tell it also that we want chunksize equal a thousand.
>
> **[4:39](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-csv?u=76281980&t=279)** And now if we look at df, it's a text file reader. What we can do is we can iterate over it and get every time only part of the data. For sub_df in df. For example, let's just print the len of the data of the sub data frame. Right, then we get 1000 every time. In the exercise files, you have also a file called CSV Pandas, which captures everything we did so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=1)** - XML is an old and well-established protocol. It has a bad reputation, mainly since it was abused in many systems. It's still out there, and you'll probably encounter it at one point or another. There are two ways of reading XML. One is loading everything into memory, called DOM, [Document Object Model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md). And one iterative, called SAX, which stands for Simple API for XML. The two main libraries for working with XML are the built-in ElementTree and the third-party lxml. We're going to use ElementTree since it's in the standard library. Let's have a look at the code reading this file. We import ElementTree as xml And since everything inside XML is text, we need to convert manually everything. So in line 9-17, we define the conversions. In line 20, we have iter_rides. We open the file, and in line 22 we load the whole file into memory and pass it. Then we get the root of the tree, and go for every element, we take the type, find the right converter, and convert it. In line 30, we're using yield to yield just one record at a time. In line 33, we define load_xml. In line 34, we use our function to generate the records. In line thirty-five, we use panda's DataFrame.from_records to create a data frame. And at the bottom, we have a small example.
>
> **[1:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-xml?u=76281980&t=93)** We load the taxi, we print the types, and we print the head of the CSV. So [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) read_xml.py And we see that the types are right, so the vendor and the people are integers, the tip and the price are floats, and the pickup and dropoff are timestamps. And we can look also at the head of the data frame, and it looks okay. There's more to XML. There are namespaces, DTDs, document type definitions, schemas, and more. Start simple, and read the documentation if you need more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=1)** - [Instructor] Some big-data systems, such as [Hadoop](../../Skills/Data%20Science/Hadoop.md), Hive, and others, store data in files. They started working with text files, mostly CSV. However, after some time, processing these text files became a performance bottleneck, and new, more efficient file formats came to life. There are few of these formats, such as Parquet, Avro, ORC, and others. We'll see an example using Parquet, but the idea is the same. Find the library for this file format and load it into [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). In our case, we're going to use the Apache Arrow library. It's development is led by Wes McKinney, the creator of Pandas. So, we import pyarrow.parquet as pq,
>
> **[0:48](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=48)** and then we say table = pq.read_table('taxi.parquet')
>
> **[0:58](https://www.linkedin.com/learning/data-ingestion-with-python/working-in-parquet-avro-and-orc?u=76281980&t=58)** And this table is a Parquet table. Now we need to convert it to a Pandas data frame. df = table.to_pandas() And now if we look at the d types, we see that we have the right types and we can look at the head of the data frame and everything looks nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Hadoop](../../Skills/Data%20Science/Hadoop.md) (1)
> **CLI Commands:** find (1), apache (1)
> **Code Identifiers:** read_table (1), to_pandas (1)
> **Env Vars:** csv (1), orc (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Unstructured text](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=1)** - [Instructor] Sometimes, data is written in a way that's easier for humans to understand. This is called [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) or semi-structured data. The usual tool for these situations are regular expressions. I won't teach you regular expressions here, see our classes on the subject. Regular expressions have a bad reputation since, once they are written, it's hard to understand what they do. For example, here's a regular expression to pass email addresses. Even knowing what it passes, it's hard to understand. I usually starts with sites like pythex. I copy over some of the lines from our logs and then start constructing the regular expression. So I want 'of' and then number of passengers, then 'started at' and then everything that is not a space to capture the date. Then 'paid', then I need a dollar sign and then some digits followed by dots, followed by dot, followed by some more digits. And now it looks good, right? So I have one passenger, the date and the price and here, five passengers, the date and the price. Once I have that, now I can go over and copy it to the code. Let's see how the code looks like. So the file is compressed, I'm importing 'bz2'
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/unstructured-text?u=76281980&t=94)** and then I'm importing 're' in line four, which is the regular expression. In line eight, I have 'parse_line', which gets one line and returns the count of the start and the amount. In line 10, I have an example of the input and it's very important to place an example of the input next to the regular expression so people will understand what it does. In line 12, I have basically the same regular expression I crafted at the site. And then line 14, if there's no match, I return none, otherwise I'm returning a dictionary with the 'count', 'start', 'amount' and every time I need to convert from text to the right type. 'count' is an integer, 'start' is a datetime and 'amount' is float. Then in line 24, I have something to iterate over the rides. I open the file in textual mode and then, going over the lines, parsing the line. In line 28, if there is an error, meaning I got the none, I'm issuing a warning log and then continuing. And after that, I'm yielding the record. So I'm processing just one line at a time in memory. In line 35 down, we have an example of reading the first five lines. Let's run it, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) parse_log.py. And we got the first five items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=1)** - [Instructor] [JSON](../../Skills/Web%20Development/JSON.md) is a very common serialization format. JSON stands for [JavaScript](../../Skills/Software%20Development/JavaScript.md) Object Notation. The main advantage of JSON, is that many languages can read and write JSON. This means you can have a server written in Go, emitting JSON and you can read the data with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Since JSON, as the name suggests, comes from the world of JavaScript, not all Python types can be serialized to JSON. For example, you can serialize a Python datetime object or a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) timestamp to JSON. To solve this issue, Python's built in JSON module gives you hooks to implement your own custom serialization or de-serialization. Let's have a look. Here we have a file where each line is a JSON object. We have [defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md), the pickup, and the drop off, et cetera. As you can see, the pick up and the drop off are strings, you can deduce that from the quotes, and we would like to have them as python datetime objects. What we'd like to do, is calculate the average write duration. Let's have a look. So I'm importing (mumbles), I'm importing JSON, and I'm importing datetime and timedelta. In line seven, there's a function to parse a timestamp. We get a timestamp, we trim the Z suffix and then we use the from ISO format to convert it to a datetime object. In line 16, we have a fixed pair function. It gets key and value as a tuple of two, so we unpack them in line 17,
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/json?u=76281980&t=95)** and then if they're not in pick up or drop off, we just return the original pair, otherwise in line 20, we return the key, and parsing the time from the value, and then line 23, the pairs hook is the hook that is going to be called by the JSON model, and it returns a dictionary of fixed pairs. What we do now in line 27, we create the initial list of durations, we open the file, and go for every line, and then in line 30, we say, we load as the line, and we said that the object pairs hook is the pairs hook, and then the duration is the drop off minus the pick up, and we append the duration. In line 34 we just calculate the average duration, in line 25, we print it out. Python, ride, duration, and the average ride duration is 17 minutes and 28 seconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (12), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=1)** - [Instructor] One of the of the most common serialization formats in APIs is [JSON](../../Skills/Web%20Development/JSON.md). There are many other serialization formats available and if you have a say in which format to use do your homework first. Since JSON is a cross language format, it means that not all [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) types are supported. For example, you can't serialize python set into JSON. If you'd like to do that, you need to have the JSON decoder and encoder a bit. Let's see. In line five, we have data in JSON format. Note the b in front which means this is a bytes object. And we have a transaction from Wile E. Coyote to ACME corporation $103.7 and it was in August 2019. The first three types convert from python to JSON and back but the time does not, it's currently in JSON as a String and we'd like to make it a datetime object. What we're going to do is use two auxiliary functions. The fix time which takes a pair and if it's a pair with the key's we'll pass the string into a datetime object. And object pairs hook which will return a dictionary where we fix the time for every pair in the object. In line 27, we load the data. JSON has load s and dump s to work with Strings or bytes. It has load and dump without the s to work with file like objects such as open files or htp responses. We give it the data and we tell it the object pairs hook
>
> **[1:36](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-json?u=76281980&t=96)** is our object pairs hook. And last, we print the object. Let's see. Python json demo dot py and we see that the time is a datetime object. There're several other options to write custom decoders and encoders in JSON whether the connotation which is very good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (10), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=1)** - [Instructor] APIs are a way of calling remote servers for data, sometimes referred to as RPC, for remote procedure call. One of the most common ways to call an API is by using the HTTP protocol with objects and call it as [JSON](../../Skills/Web%20Development/JSON.md). Let's say an example. First, in the terminal, run the web server, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) httpd.py, and the server is ready on localhost 8989. The server accepts a call to slash requests would start and end HTTP parameters. You also need to authenticate by setting X-TRIPS-TOKEN HTTP header. Python has a built in URL open function in urllib.request. It does a good job however, you will require to do some low level work, such as parsing JSON and setting authentication. The request library simplifies making HTTP calls and it's very popular. We are going to use it. You might need to install it first. Here's our API client. We import requests. In line five, we specify the URL, in line six, we specify the query, or the parameters to the call, the start and end as a dictionary, and in line 10, we specify the x-trips-token, which can be lowercase to uppercase. In HTTP, headers are case insensitive. In line 15, we do the actual call, with the request.get, do a get request, the URL, the parameters and the headers. If the call ended in an error, response.ok will be false
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/making-http-calls?u=76281980&t=94)** and then we exit. Otherwise, we get the JSON from the response as the reply object. And we check it for validity in line 20. At the end, in line 23, we count how many trips we had, and print the total count. Let's write, python api_client. And we got a total of 723 trips in our call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=1)** - [Instructor] In some cases, instead of pulling data, it will be pushed to us. Digital architecture is to have some kind of a message queue, and clients listening to it. There are many message queue systems: Kafka, RabbitMQ, Amazon SQS, [Google](../../Glossary/Service/Google.md) Pub/Sub, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Queue, and more. The details about choosing each system vary. But the idea is the same. You subscribe to a topic or a subject, and get notified when messages are published to this topic. Most of the time, messages are just a sequence of lines, and you need to decode them with the appropriate serialization format. [JSON](../../Skills/Web%20Development/JSON.md), MessagePack, Protocol Buffer, et cetera. We are going to use a message queue called NATS. To run the server, you're going to use Docker. If you'd like to know more about Docker, check out our courses on it. run --rm --publish=4222:4222
>
> **[1:03](https://www.linkedin.com/learning/data-ingestion-with-python/processing-event-based-data?u=76281980&t=63)** Publish the Docker port 4222 to the localhost. And we're going to run the NATS server. And it says that the server is ready. A similar technique publishing messages to the right subject. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and we have spammer, which sends messages. Now let's have a look at the code. We input JSON since the messages are encoded in JSON, and we use the pynats library to connect. In line seven, we define a handler. This handler will get called every time there is a new message. And it gets the message object. In line eight, we use JSON to decode the payload, which is bytes, into a python object, a dictionary. In line nine, we just print it. But usually, you'll do something more interesting with it. In line 12, we connect, and then we subscribe to the right subject, and we say the callback is a handler, and we're going to wait until we have 10 messages. And now python event_client.py And we are getting events of the subject.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Google](../../Glossary/Service/Google.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/try-to-find-an-api?u=76281980&t=1)** - [Instructor] If you'd like data from a website or a server the first thing you should do is try and find an API. If you can't find an API, as last resort, you'll parse the [HTML](../../Skills/Web%20Development/HTML.md) coming from the site either with a parser or a regular expression and grab the data you're interested in. This is known as screen scraping. However, make a good effort to find an API. The two main reasons are it will be much easier for you to parse the output in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and an API's tend to be much more stable. I've written several systems that parse HTML and they are very brittle. It's enough that the website is upgrading their templating system and your code is broken.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (4), html (2)
> **CLI Commands:** find (3), make (1), python (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Working with Beautiful Soup](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=1)** - [Instructor] There are several libraries for passing [HTML](../../Skills/Web%20Development/HTML.md). By far, the most common one is Beautiful Soup. Let's have a look at the page that shows foreign exchange rates. This page is ugly. That's exactly the reason people won't let me touch anything user-facing. This is what the user sees. However, what your code will see is the underlying HTML. So right click, view page source. This seems like a lot of HTML for such a small page. Actual webpages are usually much more complicated than that. You'd like to extract the date and exchange rates from this page. You can see the date at the bottom inside an i, with the class equal date, and exchange rate are inside a table, inside a td, and for the symbol, we have the title, which is the name of the currency. Let's have a look. Here's the function to pass the HTML. In line nine, I'm calling Beautiful Soup on the HTML and telling it which parser to use. It can use several parsers to parse the underlying HTML. And now, in line 11, I have an example of what I'm looking for which is really good for readability and maintainability. Line 12, I'm telling Beautiful Soup to look for i element with the class date, and in line 13, if I can't find it, I raise a value error. Otherwise, in line 16, I'm getting the text and converting it to a datetime object. After that, I'm going for the rates. In line 18, I'm creating the initial dictionary,
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-beautiful-soup?u=76281980&t=94)** and in line 19, I'm going over every table row. Again, there is a documentation with an example of what I'm looking for. I know that there are two tds in every table row. So in line 25, I'm using unpacking to get them. I'm getting the symbol from the first one, and the rate from the second one, converting it to a float, and populate the dictionary in line 28. At the end, at line 30, I'm returning the date and the dictionary of rates. In the main, we open the file with HTML, and then in line 37, we use our function to get the date and the rates and print them out. Let's have a look. [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) fx.py And we see the date, and we see the rate for every currency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (7), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** html (7)
> **CLI Commands:** find (1), python (1)
> **File Paths:** fx.py (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with Scrapy](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=1)** - If you find yourself in the need to post [HTML](../../Skills/Web%20Development/HTML.md) from several sites, Scrapy is a good system to use. First, start a demo server. [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) httpd.py and now the server is ready on local host 8987. This is the page we see. We have rates per date. And when we go for every day, we have the currency and the rate. We'd like to start from the main page, and get the data for each page. Start by creating a Scrapy project. scrapy startproject fx So it created a template directory for us. We can see what's in there. Now we need to write our own Spider, which is going to be in fx/fx/spiders. Which is currently empty. So, let's have a look at our Spider which is called fx.py in the Spiders directory. In line 5 we inherit from Scrappy the Spider, we give it a name, and we say what are the start urls. In our case it's just one, http local host 8987. Then in line 11, we have parse which gets response. The response is a past html. What we are doing is for every list item that has an a drift, we are going to yield the next page to follow. So we say follow a.get and we say the callback, meaning once you get the page, call this function. The function is self.parse_date
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-scrapy?u=76281980&t=94)** parse_date will get the url. Which is used for extracting the date from the path. And then for every table row, we pass the css. For the title and for the text. And in line 24, we convert the ratio to a float, since everything in html is text, and populate the dictionary. And at the end, we yield the data. To return the data that is a dictionary of date and symbols and their ratios. To run this, we are going to change directory to fx. And we are going to do scrapy crawl fx and we say the output file is fx.jl And this is going to crawl over all the pages and meet some logging information. But now in fx.jl, we have the data per date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=1)** - [Narrator] Let's start our web server, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) httpd.py, and the server is ready on local host 8985. If you go there, we see the page that you want, but if you look at the page source, we see that it is empty, there's no data here. What happens is that the browser is loading the initial [HTML](../../Skills/Web%20Development/HTML.md), and then issuing a call with [JavaScript](../../Skills/Software%20Development/JavaScript.md) to get the data from the server. This means that we need to have an actual browser to get the data. To solve this issue, we use a project called [Selenium](../../Skills/Software%20Development/Selenium.md). Selenium is a framework to alternate working with browsers. Apart from installing the Python binding for Selenium, you will also need to install the Selenium driver for your browser, Firefox, Chrome eccetera. Consult the documentation on the Selenium website. Let's have a look at the code. So from Selenium we import webdriver, and then with webdriver.Firefox, we're going to use Firefox as our web browser, we do a get to get the page. Then the page is loaded, we can use find_element_by_css_selector to find the '.date', so we have the date, and then for every td, we're going to do a follow, extract the text and the ratio and print it out. Let's have a look, python fx.py, and you will see a web browser starting, and when you go back to our console,
>
> **[1:33](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-selenium?u=76281980&t=93)** we see the exchange rate for this current date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/other-considerations?u=76281980&t=1)** - [Instructor] Calling APIs can be more complex than just writing code to access and pass. Here are a few points to consider. Some sites have a limit on how many requests you can make per amount of time, say a day. They usually allow more requests if you pay more. Make sure to read the plans and try to figure out how much is going to cost you for your use case. Calling an API can be slow, the usual approach is either to run query's in parallel, or use a special bulk API these sites have. Another option is to save results locally, known as caching. Some sites will blacklist certain IPs to disallow bots. You might need a special proxy or VPN if you scrap data from a cloud provider. [Selenium](../../Skills/Software%20Development/Selenium.md) needs to run a browser, which means, it needs some kind of a screen to attach to, however, when running a script on a server, you won't have a screen, this is known as headless mode, check out solutions, as headless drivers, VNC, XVFB, and others. This is usually something the operations team need to support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Selenium](../../Skills/Software%20Development/Selenium.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-are-schemas?u=76281980&t=1)** - [Instructor] Let's have a look at some data. We can see some weather data, but what does each column mean? To really understand, we need the schema. There are several definitions of schema. I'd like to think of the schema as the data about the data, or [Metadata](../../Skills/Web%20Development/Metadata.md). In our example, we can say that the data is some meteorological data. The date is the day the data was measured. Snow is millimeters of snow. TMAX is the maximum temperature at that day. TMIN is the minimal temperature at that day. And if you couldn't guess, PGTM is peak gust time, when the wind was stronger, and 1337 is actually, 1:37 pm. If you look close at the temperatures, for example here, we have 100 maximum, and 11 minimum, they don't make that much sense. Not in Celsius and not in Fahrenheit. They are actually in one tenth of a Celsius. Now that we have the schema, the data makes much more sense. Sometimes you'll hear about [NoSQL](../../Skills/Software%20Development/NoSQL.md) or schema-less [Databases](../../Skills/Software%20Development/Databases.md). Even if the schema is not formally defined, it's out there in the code, or in peoples' head. It's much better to have it written down. I've consulted with companies which don't know the data schema anymore. People left and took the knowledge with them. Make sure it doesn't happen to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** tmax (1), tmin (1), pgtm (1)
> **CLI Commands:** make (2)
> **Ports:** :37 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with ontologies](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-ontologies?u=76281980&t=1)** - [Narrator] At one company I worked for, we go a bug report that we calculate Unique Users wrong, we've looked at the code and couldn't find any issue. Finally, my boss went around and asked, It turned out we've had four different definitions of Unique Users in the company. Ontologies came from philosophy to computer science, it deals with naming and defying things in your system. It also talks about relations between these things, for example: Say an order has a buyer, which is a user in your system. For example, we can discuss a time stamp for measurement. Is it just a day or a final granularity? What's the time zone? Etc, etc Ontologies might seem obstruct, but I encourage you to start every project by defining and agreeing on things or entities in your system and their relations. You'd be surprised how everything becomes clear and even your code makes more sense. If you'd like to dig deeper search for Ontology engineering and related subjects.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [What should be in schema](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-should-be-in-schema?u=76281980&t=1)** - I hope you're convinced that you need to have a Schema without doubt. But what should go in it? I say, everything has to make sense of the data. Here are some parts to consider, description, some text about what this data is. In our example, PGTN should be spelled out as Pick Gust Type. Types, what's the type of the data? Is it a integer, a float, a text, units. What are the units of the data? In our case, temperature is a tenth of a Celsius. Constraints, the lowest ever recorded was minus 89.2 or about 60% Celsius. The highest recorded was 57.8 celsius. However, if you measure agent temperature, those limits will differ. Constraints between fields, you can't have snow when temperature is above a certain point. Relation, what contains what? Is it a one to one or one to many relation. Anything that can help you make sense of the data should be there. Don't get to the state where you don't know what the piece of data means and how to check it's quality.

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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/schema-changes?u=76281980&t=1)** - Over time, your data will change. And with it, your schema will change. Changes can come from organic change, say a new piece of information, such as Twitter handle for user. Some comes from redesign of data, say you have a complex address record instead of street and house number. When we look at schema changes, we often split them into two categories. Breaking, and nonbreaking. Nonbreaking changes mean that the old fields are still there and you can access them as usual. It usually means adding a new field, say a [GitHub](../../Skills/Software%20Development/GitHub.md) handle. However you need to think about what to do with the old data. Can you add new data? What are the default values for the old data? How do I handle missing data? Breaking changes mean that old data doesn't fit anymore. It's usually a removal or rename of a field. These changes are harder to implement and require more planning. You should have a plan on how to make schema changes, since they will happen. Write your code in a way that can handle missing fields, version your data in your schema, and test everything, even after trivial schema changes. If you're working with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) there are many tools and techniques supporting schema changes. Look them up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - over (1)

#### [Schema validations](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=1)** - [Instructor] Once you have a schema, make sure to validate your data against it. We'll discuss the causes of errors in other episode, but I can guarantee you will have errors in your data. Most of the time, you'll do these checks manually. Make sure they don't take too much of your time. A lot of time, I use a dictionary that wraps field to a validation function. Let's have a look. I'm defining a record as a namedtuple with date, snow, tmax, tmin, and pgtm. And I'm defining a special value for the missing value. I have two functions to validate temperature that are in the right range and snow, which has to be positive number. And then I have a list of validators for the date and the pgtm, I don't need that, but snow, tmax, and tmin has a validation function. And then I'm validating the record. For every attribute validator that I have in the validator, I'm getting the attribute and if the value is missing, means I have a missing attribute, which is an error. In this case, you need to think if this is really an error in your case or if you can allow for missing values. And if there is a validator, I apply it to the value. Here's an example, I have some data with date, time, and values, and then for every record in data, I'm validating the record. So, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) weather.py. And there's no output since all the data is valid. Other than handwriting your own,
>
> **[1:36](https://www.linkedin.com/learning/data-ingestion-with-python/schema-validations?u=76281980&t=96)** here are some other libraries you can look into. Attrs and Traitlets let you define validators for class attributes. Great Expectations runs validation on [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) dataframes and of course, if you're using a relational database, you could define constraints on the data there as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/types-of-databases?u=76281980&t=1)** - [Instructor] A database is where you store your data. [Databases](../../Skills/Software%20Development/Databases.md) are a crucial part of your infrastructure, and you need to know how to work with them effectively. As a rule, prefer all the established databases unless you have a really good reason. This is not the place to play with the shiny new technology. Depending on your data end needs, you might want to look at several kinds of databases. Here are some of the major types. [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) store data in tables of rows and columns. They usually support [SQL](../../Skills/Data%20Science/SQL.md), and a good default choice. Some of the majors ones are [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md), [MySQL](../../Skills/Software%20Development/MySQL.md), MSSQL, Oracle, and others. Key/value databases are like dicts in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). They allow fast access by key, and use the log for caching. [Redis](../../Skills/Software%20Development/Redis.md) is probably the most known one these days. Document databases store objects with fields. They allow for rapid development since they are not strict with schema. Notable ones are [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md), and [MongoDB](../../Skills/Software%20Development/MongoDB.md). Graph databases store relationships between objects. Think of users on a social network and their relationships. Some of the common ones are [Neo4j](../../Skills/Software%20Development/Neo4j.md) and Dgraph. Deciding on a database is one of the big technical decisions you will make. Make sure to know your data and queries before you select one. And if your organization already have a database, make sure to learn how to use it effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (6), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **CLI Commands:** make (3), mysql (1), python (1)
> **Env Vars:** sql (1), mssql (1)
> **Best Practices:** make sure to (2)
> **Speakers:** - [instructor] (1)

#### [Hosted and cost of ops](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/hosted-and-cost-of-ops?u=76281980&t=1)** - [Instructor] Nowadays, it's very easy spin a new database. Start a VM or a docker image and you have a running database. However, this is miles away from production setup. You need to think of things like monitoring, security, backup and restore, scale, and much more. Since the database going down is one of the worst things that can happen to you, you need to try to prevent it as much as possible. Planning a database on your own in production ready setup requires a lot of effort and a lot of experience. These cost of operation is usually underestimated and this is why I usually recommend to start with a hosted solution such as [Google](../../Glossary/Service/Google.md)'s BigQuery. It might look more expensive but it will save you a lot of effort that you can focus on implementing important features. Once you have a lot of data and experience on how you use your data, it might make sense to move to your own hosted solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** docker (1), make (1)
> **Prerequisites:** setup (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with relational databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=1)** - [Instructor] When people talk about [Databases](../../Skills/Software%20Development/Databases.md), they usually mean [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Relational databases are old and reliable technology. There's a lot of knowledge and tooling around them. Most of them support [SQL](../../Skills/Data%20Science/SQL.md), which is the standard library for querying data. If you'd like to learn more about SQL, check out our SQL courses. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) has an established way of working with SQL databases, called the Database API. Most established drivers conform to this pack which makes life easier for you. You don't have to learn something new for each database. In this example, we're going to use SQLite. It's an embedded database that comes installed with Python. SQLite is not a toy. If you use a browser or an [Android](../../Glossary/Sdk/Android.md) phone, you're using SQLite. Let's have a look. SQLite comes with a command line tool called sqLite3, and we can look at the database. And for example, have a look at the schema, and we see that we have vendor, count, pickup, dropoff, distance, tip, and total. Let's see how we can use it from Python. We import sqLite3, and in line four we create a connection to the file. And because SQLite needs some help we tell it to detect the types from the declaration. In other databases, this might not be required. In line five we're using sqlite.Row as the row factory, so we can get rows as dictionary accessing columns by name. We're going to run a query,
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=94)** so the parameters for the query are in a dictionary. We say the vendor is VeriFone. In line 11, we have "SELECT distance FROM rides WHERE vendor = :vendor", and this is a placeholder that the SQLite driver will fill. Don't try to construct SQL queries manually yourself. You will get something known as an SQL Injection. Then in line 13 we create a cursor, we execute the query, and then we do a for loop on the cursor, every time getting a row. We're getting the distance column from the row and increment the count and the total. And finally, we calculate the average distance. Let's run this. So, quit from here, and python rides.py and the average distance is 2.96 miles. [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) knows also how to work with relational databases. All you need to pass it is a valid connection to the database. So the beginning of the file is exactly like the first one. We create a connection, we have a query, and we have the parameters. But in line 14 we do data frame df = pd.read_sql. We give it the SQL, the connection, and the parameters to the SQL. Once we have a data frame, we can calculate the average by running mean on the distance column, and we print it out. python rides pd.py and we get the same average distance. You might also want to look at ORM systems,
>
> **[3:09](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-relational-databases?u=76281980&t=189)** Object Relational Mappers, such as SQLAlchemy, which creates easier mapping from Python objects to rows in the database. Pandas knows how to work with SQLAlchemy as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (3), cursor (2)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=1)** - [Instructor] Key-value [Databases](../../Skills/Software%20Development/Databases.md) maps keys to values. The keys are usually strings or bytes, and the value types vary depending on the database. They can be strings, bytes, number, lists, and other. If you'd like to have more complex types, you'll probably have to serialize and de-serialize them using encodings such as [JSON](../../Skills/Web%20Development/JSON.md). A lot of time, key-value databases, are used as a caching layer, meaning we get faster access to data than hitting another database. Caching means the key don't have to persist in the database. Visual look up is we first to look in the cache and if you find it, we use the data, otherwise if it's not find, we look in the main database. If it's found, we update the cache and use the data, and if it's not found in the main database, it's an error. One of the most common key-value databases is [Redis](../../Skills/Software%20Development/Redis.md). You're going to use Docker to run a local Redis database. Use the run Redis script to start a Redis database and populate it with data. So, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) run_redis. And now let's have a look at how we can search the data. In line four, we import the Redis client and in line eight, we connect to it. In line nine, we issue a ping, just testing that we can connect to the database. Transaction IDs in line 13 are the transactions we're going to look for. And then in line 21, for every transaction, we create a key, which is tid: and the transaction ID. Then we do a get.
>
> **[1:34](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-key-or-value-databases?u=76281980&t=94)** If we get none, it means it's not found in database. Otherwise, we use JSON to de-serialize the data and repeat some information about the data. Another thing we can do is scan. In line 32, we say scan_iter and we say tid:*, meaning everything that has a prefix of tid. And then, we count how many of these we have. Let's run it. Python redis_demo. We found the data for our transactions, the SKU and the price, and we have a total of 205 transactions in our database currently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** find (2), python (2), docker (1)
> **Code Identifiers:** run_redis (1), scan_iter (1), redis_demo (1)
> **Env Vars:** json (2), sku (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with document databases](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=1)** For this episode, you need to download some data from Chicago City data portal. Run [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) download.py Document-oriented [Databases](../../Skills/Software%20Development/Databases.md) store data in format of a document, which is a collection of fields and their values. Some of the known ones are [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) and [MongoDB](../../Skills/Software%20Development/MongoDB.md). Companies like document-oriented database at early stages since they don't enforce schema and let you experiment with data quickly. These databases also tend to handle scale well. However, there is no standard query language for these databases, like [SQL](../../Skills/Data%20Science/SQL.md) in [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). And to handle scale, most of them do not have transactions, which can be a big pain. Let's see an example of Elasticsearch using Docker. First, run the server. python run_elastic.py This is going to take a little bit of time. And once you see the elasticsearch is ready on port 2900, we're good to go. We import Elasticsearch, and from the helpers, we import something called scan, for scanning the database. In line six, we connect to the host, and in line seven, we use a ping command to see that we actually have a connection. In line 11, we define query where the zipcode is either 60656 or 60666, which are the zipcodes for O'Hare airport.
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-document-databases?u=76281980&t=95)** And the result is elasticsearch dot search, we say that the index, where we looking for, is food and the q is the query. Elatsticsearch returns the result as a deeply-nested dictionary. To get the count, we use the hits, then the total, then the value, and we print how many hits we have in O'Hare. And then, we get the first document in line 17. The document is under _source and we print the first location, the document name. In line 22, we going to count the average number of violations. So we do a scan on the food with the query. We get the source. And we look at the violation field, which is violations separated by the pipeline character. And we add them to the count. At the end, we calculate the average and print it. Let's see. Python elastic_demo and we have 54 hits, the first location is St Eugene. And the average number of violations is 3.59.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (3), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=1)** - [Instructor] Sometimes we're interested in relations between entities in our system. For example, when analyzing a social network, you can probably model relationships with a relational database, but it's not fun. Graph database lets you define entities, their properties, and their relations between them. One of the most common graph [Databases](../../Skills/Software%20Development/Databases.md) is [Neo4j](../../Skills/Software%20Development/Neo4j.md), but there are others as well. You should know your requirements, only then choose a candidate, then run some tests, and pick one. Here you use Docker to run and populate a small database. So [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), run Neo4J, once you see Neo4J ready, you can use the database. Let's have a look at the code. We input Neo4J package, and we create a driver and get a session which is a database. In line 10, we define a query, Neo4J has its own query language called Cypher. All we are saying is that we want to match a user, where the log in equal the log in that we're going to provide, and return the name. We run the query, where the log in is the one we defined in line eight, meaning daffy, and then we get the result and print the name. In line 21, we have a bit more complicated query. We want all the users that daffy follows, so match a user which follows another user, where the log in of the original user is the one we provide, and return the name of the followed,
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/working-with-graph-databases?u=76281980&t=95)** and then in line 28, we run the query, in line 29, we get the values, we print out how many, and for every node, we print the name. Let's run it. Python, Neo4J demo, and we see that the name is Daffy Duck and it follows five users, Bugs Bunny, Marvin the Martian, Pepe le Pew, Porky Pig, and Wile E. Coyote.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neo4j](../../Skills/Software%20Development/Neo4j.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/data-is-never-100-okay?u=76281980&t=1)** - [Narrator] DJ Patil, who, among many other roles, served as the Chief Data Scientist of the US government said, "Every single company I've worked at and talked to "has the same problem without a single exception so far, "poor [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), especially tracking data. "Either there's incomplete data, missing tracking data, "duplicative tracking data." I can attest to that as well. In my consulting projects, I get to see a lot of data from a lot of companies, and every time we find issues with the data. What does it mean for you? It means you should be aware and prepared for errors in your data, both in the data pipeline process and in your models or [Algorithms](../../Skills/Software%20Development/Algorithms.md). Invest time thinking about issues such as how can you detect data errors? How should you handle data errors? How can you make your models resilient to data errors? And many more questions. Once you acknowledge that you have errors in your data, you start (speaking quickly) it and avoid the classic GIGO, garbage in garbage out, problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** gigo (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Causes of errors](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/causes-of-errors?u=76281980&t=1)** - [Narrator] Knowing the Cause of Errors will help you manage them better. Let's have a look at a few common causes. The first cause is [Hardware](../../Topics/Hardware.md). Drivers fails, memory fail, there are power surges, and even cosmic rays. Studies by IBM in the 90s suggest that computers typically experience about one cosmic ray induced error per 256 megabytes of RAM per month, which means that if you have a 32 gigabyte RAM, you have a cosmic ray induced error every three hours. There's not much you can do about hardware errors. Know about them and discuss with your IT how to minimize them. Another cause of errors is user input. People make mistakes, typos, calculation errors, copy and paste errors, and much more. Try to validate all user input as much as you can. Have a plan to automatically fix user errors. For example, spelling. The last cause of this class is bugs. After writing code for more than 20 years, I still haven't figured out how to write bug-free code. Cover yourself, you have to have tests and validation in every place that handles data. You should have a plan on how to fix bug induced data errors. Think about your data pipeline. What are the places that are most likely to cause errors? How can you monitor and fix these errors? How can you prevent them?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2)
> **Env Vars:** ram (2), ibm (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Filling missing values](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=0)** Missing values are not strictly an error but many [Algorithms](../../Skills/Software%20Development/Algorithms.md) don't work well with missing data. There's a difference between missing data and empty or zero value. Sometimes it's hard to know the difference. In our example is the snow measurement of zero coming from a missing measurement? or there was actually no snow that day. You should know your data and know the difference. Lucky for you Panda is great for dealing with missing data. Panda supports missing values in floats with NAN Not a Number and for timestamp it has NAT Not a time. There is also experimental support for missing integer data in the new integer array type. NAN is defining the floating-point specification and it's a funny value. Let's have a look. So, let's import numpy as np and [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd.
>
> **[0:57](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=57)** in np we have np.nan you can also create a new one with float.nan. nan does not equal itself. So, np.nan equals np.nan and it doesn't equal itself. Need to use a special function such as pd.isnull(np.nan) and then you will get true. If you have a series of values let's say pd.Series of 1.2, 2.3, np.nan and 4.5.
>
> **[1:37](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=97)** Now if you use pd.isnull on the values you will get a Boolean series indicating what are the places we have non-values there. When you do need to feel and see data, Panda's data frame in series have two methods that will help you fillna and interpolate. Let's say now that values is a series. pd.series of one, two, np.nan, four, five,
>
> **[2:13](https://www.linkedin.com/learning/data-ingestion-with-python/filling-missing-values?u=76281980&t=133)** np.nan again and seven. We can do values.fillna and pick a value that we would like to fill. let's say zero. You will get back a new series. If you want to change the original series use the in-place equals truth parameter. You can use computed values. So, the average is values.mean and the average is 3.8. Panda's functions are nan aware. They just ignore nan when they do calculations. And now you can do values.fillna with the average. Interpolate will fill values with linear interpolation by default. So we can do values.interpolate and we will get linear Interpolation whenever there is a nan we do the average of the values around it. The accommodation of fillna.interpolate is excellent Granted since they have many options for various cases. You also have in the access side files examples of what we did here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Versions:** 1.2 (1), 2.3 (1), 4.5 (1), 3.8 (1)
> **Env Vars:** nan (2), nat (1)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)
> **Analogies:** such as (1)

#### [Finding outliers (manual)](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=1)** - [Narrator] Outlier is a data point that differs significantly from others. Basically, bad data. [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) makes it easy to find these values and replace them. Let's have a look. So we start ipython. Then we import pandas as pd and our data is going to be in an SQLite database, so we import sqlite3. Connection is sqlite3.connect and the database is rides.db and our dataframe is pd.read [SQL](../../Skills/Data%20Science/SQL.md), select star from rides and we give it the connection. And we have 10,000 taxi rides. And we can be nice and close the connection, since we don't need it anymore. So if you look, for example, on the df trip distance, on the 90% quantile, we see that it's about seven miles. However, if you look at the maximum value of the trip distance, this is 932.9 miles, which seems, not like a real taxi ride. So we're going to change all the rides that are above 100 miles. So first we need to find it, so the mask is dataframe trip distance is bigger than 100. And we have seven of these rides.
>
> **[1:38](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-manual?u=76281980&t=98)** Now let's take a fill value for that, let's take the top 1%. So the fill value is df trip distance, quantile.99%. And the fill value is 19.48 miles. And now we're going to set, so df.loc in the mask, in the trip distance column, equal the fill value. And now, if you look at df.trip distance.max it's only 35.57 miles, which seems much better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** find (2), sqlite3 (2)
> **Versions:** 932.9 (1), 19.48 (1), 35.57 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Finding outliers (ML)](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=1)** - Sometimes finding outliers is not easy. Considered for example this chart. Is what we are seeing is an out of service attack or maybe it's just the shopping on Black Friday. If you get it wrong, you're going to miss a lot of holiday shopping opportunity. This is known as seasonality in data. The reason active machine learning field called outlier detection. Outlier detection is used a lot in monitoring systems and can find possible outliers that are hard to find otherwise. There are even some companies that provide outlier detection as a service. Scikit-Learn, the machine learning library for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), comes with several [Algorithms](../../Skills/Software%20Development/Algorithms.md) for outlier detection. Let's have a look at a simple example. So hype Python, and then we're going to import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. And from sklearn.neighbors we're going to import localoutlierfactor. And now the data frame is pd.read csv and we have some AAPL information. All right this is some trading information for AAPL. We have the date, the symbol, open, high, low, close, and the volume. Let's see if we can find out if we have some outliers or normal data in the volume. You first need to take the data from the data frame, and shape it in a way that the localoutlierfactor can work with. It expects an upper array at a specific shape.
>
> **[1:35](https://www.linkedin.com/learning/data-ingestion-with-python/finding-outliers-ml?u=76281980&t=95)** So, we're going to say that the volume is data frame volume.values which will extract the underlying upper array and then we're going to do reshape of minus one end one. And if you look at the volume now, it's an array of one column and the length of the date frame. And now we can create our models. So clf equals localoutlierfactor and we're going to tell it that the contamination is auto. And then because we're going to find the outliers and the same data that we're training on, we can use the fit predict. So volumes equal clf.fit predict on the volume. Predict will give us a minus one volume for everything it thinks it's an outlier. So we can say that the mask equal or the values equal minus one. And now we can fix our data frame. We can say that the data frame.loc in the mask at the location of the volume equals let's say the mean volume. And that's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/design-your-data?u=76281980&t=1)** - [Instructor] Data usually starts simple. You have few well thought out fields with clear names and types. Then for a demo, you add some more fields. Then marketing asks for a feature and you add some more fields. You see where this is going. I've seen the end result many times in many companies. Fields nobody knows what they are and how they are populated and everyone is afraid to delete an unknown fields since they might be needed in some unknown sub-system. Extra data is a liability. It will cost you more in storage and computation. Also, if you ever get hacked, user information might leak out. As a data scientist, you're the customer of the data and you have a say in about what should be in it. Get involved in data infrastructure. Have a written scheme of the data and understand the data pipeline. Ideally, you should know exactly where did every piece of data you're using is coming from.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [KPIs](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/kpis?u=76281980&t=1)** - [Instructor] You're going to monitor your data pipeline, and as time goes, you'll have more and more metrics and it will be hard to look at all of them at once. Also, some metrics will be more low-level, and others might be computed. To make sense of all of this, you need KPIs. KPI stands for key performance indicator. These are metrics that have direct impact on business, and ones we deem important. The actual KPIs will vary from company to company, and from one team to another. Make sure to have some. If your company doesn't have data KPIs, go ahead and start the process. Remember, that you're the customer of the data, and you should have a saying about its features and quality. KPIs should be smart, specific, measured, attainable, relevant, and time framed. For example, say you're writing a fraud detection system. You have data flowing from several sources, and you're running your models on this data. A KPI can be millions of records processed per day.

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
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/what-to-monitor?u=76281980&t=1)** - [Instructor] Monitoring, is your eyes on the data. I once consulted a company that developed a cyber security sweep. I kept up with the code and [Algorithms](../../Skills/Software%20Development/Algorithms.md), but along the way installed a monitoring system. Once we had eyes on data flowing in, we quickly changed priorities to [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) stability. Assume you write a fraud detection system. Assume you're writing a fraud detection system that gets data from server sources. Pause the video and try to think about the list of things to monitor. I'll wait. Welcome back. Here's my list of possible metrics. It's by no means the correct one or the complete list. Total numbers of records per day. Number of records per source per day. Total number of errors per day. Number of errors per source per day. Volume in bytes per day. Pipeline processing time. For example, if we see that the pipeline processing time is growing all the time, we have a problem and we need to fix it. Metrics tend to accumulate and it's impossible for us humans to look at all of them all the time. There are two solutions for this problem. One, is to define one or few metrics that represents the whole system. For example, Netflix has SPS - starts per second. They found this is very indicative of problems in their system and it's a single metric they need to look at. The second solution is to place an alerting system on top of your metrics. Either with Hamilton rules, or with a monitoring detection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) (1)
> **Analogies:** for example (2)
> **Env Vars:** sps (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-ingestion-with-python/next-steps?u=76281980&t=1)** - Your [Algorithms](../../Skills/Software%20Development/Algorithms.md) rely on good data. And if you have some experience, you know that a lot of your time is spent with data. To help you learn how to ingest data in its various sources, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is a great language for fetching data from any place. You should also be able to have a better data process and know how to validate and clean your data. Now go back to your daily work and slowly try to improve it with the tool you learned here. Write a former schema for your data, create a validation process, find more data sources in your company and understand them. You will see that over time your algorithms will have better data to train on, which means they will give you better results. If you'd like to learn more about Python or its scientific packages, we have many courses at all levels. And always feel free to reach us out at 353solutions. We'd love to hear from you and help you get better data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - your (1)


## Instructor

- [Miki Tebeka](../../Instructors/Data%20Science/Miki%20Tebeka.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Ingestion

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)
← [Strategic Data Collection, Modeling, and Quality Management for AI Systems](Strategic%20Data%20Collection%2C%20Modeling%2C%20and%20Quality%20Management%20for%20AI%20Systems.md) | **2 of 6** | [Data Cleaning and Manipulating with Python in Excel](Data%20Cleaning%20and%20Manipulating%20with%20Python%20in%20Excel.md) →

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](../Software%20Development/Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)