---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: power-bi-data-methods-23487089
url: "https://www.linkedin.com/learning/power-bi-data-methods-23487089"
duration_minutes: 192
duration: 3h 12m
level: Advanced
updated: 3/12/2024
learners: 65085
skills:
  - Data Analysis
  - Microsoft Power BI
exercise_files: true
github: "https://github.com/LinkedInLearning/power-bi-data-methods-3812122/"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQERek4YP-UxwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709937715535?e=2147483647&amp;v=beta&amp;t=llLfmIN-LfWmN-ry9_rgoU6Q10yHytR2XNy6N82kzEA"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]'
  - '[[Master Microsoft Power BI]]'
prev_courses:
  - '[[SQL- Data Reporting and Analysis]]'
  - '[[Power BI- Working Together with ChatGPT]]'
next_courses:
  - '[[Program Evaluation for Data Science]]'
  - '[[Power BI Dataflows Essential Training]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation","position":8,"total":9,"prev":"SQL- Data Reporting and Analysis","next":"Program Evaluation for Data Science"},{"path":"Master Microsoft Power BI","position":2,"total":6,"prev":"Power BI- Working Together with ChatGPT","next":"Power BI Dataflows Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - skill/data-analysis
  - skill/microsoft-power-bi
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Power%20BI%20Data%20Methods.md)

![Power BI Data Methods](https://media.licdn.com/dms/image/v2/D560DAQERek4YP-UxwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709937715535?e=2147483647&amp;v=beta&amp;t=llLfmIN-LfWmN-ry9_rgoU6Q10yHytR2XNy6N82kzEA)

# Power BI Data Methods

> Power BI is a powerful business intelligence tool designed to help users create dynamic interactive data visualizations and help you monitor data, analyze trends, and make smarter decisions. Before you can create any visuals though, you need to get your data into Power BI to use in the modeling process. In this course, Helen Wall helps you handle, import, and transform your data more efficiently, 

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089) | 3h 12m | Advanced | 65K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [The data at the core of Power BI](#the-data-at-the-core-of-power-bi)
  - [What you should know](#what-you-should-know)
  - [Course project overview](#course-project-overview)
- [**1. Extracting Data from Files**](#1-extracting-data-from-files) (3 videos)
  - [Working with Power Query](#working-with-power-query)
  - [The extract, transform, load (ETL) framework](#the-extract-transform-load-etl-framework)
  - [Power Query objects](#power-query-objects)
- [**2. Extracting Data from Files**](#2-extracting-data-from-files) (16 videos)
  - [Connecting to text files](#connecting-to-text-files)
  - [Connecting to CSV files](#connecting-to-csv-files)
  - [Connecting to Excel files](#connecting-to-excel-files)
  - [Connecting to online Excel files](#connecting-to-online-excel-files)
  - [Connecting to PDF files](#connecting-to-pdf-files)
  - [Connecting to images as data](#connecting-to-images-as-data)
  - [Setting up folder connection](#setting-up-folder-connection)
  - [Connecting to HTML and XML](#connecting-to-html-and-xml)
  - [Connecting to JSON data](#connecting-to-json-data)
  - [Connecting to APIs](#connecting-to-apis)
  - [Connecting to ODATA feeds](#connecting-to-odata-feeds)
  - [Connecting to GitHub](#connecting-to-github)
  - [Using an R script connector](#using-an-r-script-connector)
  - [Using a Python script connector](#using-a-python-script-connector)
  - [Challenge: Getting data](#challenge-getting-data)
  - [Solution: Getting data](#solution-getting-data)
- [**3. Transforming Data with Cleaning Operations**](#3-transforming-data-with-cleaning-operations) (9 videos)
  - [Cleaning text fields](#cleaning-text-fields)
  - [Removing or replacing values](#removing-or-replacing-values)
  - [Splitting and concatenating fields](#splitting-and-concatenating-fields)
  - [Text formulas](#text-formulas)
  - [Filtering or removing duplicates](#filtering-or-removing-duplicates)
  - [Filling up and filling down](#filling-up-and-filling-down)
  - [Transforming numerical fields](#transforming-numerical-fields)
  - [Challenge: Add a new column](#challenge-add-a-new-column)
  - [Solution: Add a new column](#solution-add-a-new-column)
- [**4. Working with Dates and Times**](#4-working-with-dates-and-times) (5 videos)
  - [Dates functions](#dates-functions)
  - [Creating a dates table](#creating-a-dates-table)
  - [Working with different time zones](#working-with-different-time-zones)
  - [Challenge: Add a Date field](#challenge-add-a-date-field)
  - [Solution: Add a Date field](#solution-add-a-date-field)
- [**5. Data Functions**](#5-data-functions) (8 videos)
  - [Using conditional functions](#using-conditional-functions)
  - [Transposing tables](#transposing-tables)
  - [Grouping fields and values](#grouping-fields-and-values)
  - [Merging and appending data](#merging-and-appending-data)
  - [Pivoting and unpivoting data](#pivoting-and-unpivoting-data)
  - [Parameters](#parameters)
  - [Custom functions](#custom-functions)
  - [Adding data types in M code](#adding-data-types-in-m-code)
- [**6. Relational Databases and Queries**](#6-relational-databases-and-queries) (3 videos)
  - [Working with relational databases](#working-with-relational-databases)
  - [Query folding](#query-folding)
  - [Working with multidimensional databases](#working-with-multidimensional-databases)
- [**7. Loading Data**](#7-loading-data) (3 videos)
  - [Loading data](#loading-data)
  - [Managing errors](#managing-errors)
  - [Refreshing data](#refreshing-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with Power BI](#continuing-on-with-power-bi)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The data at the core of Power BI](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=0)** - The key to any data dashboard is the data itself, but handling that data can sometimes be a bit difficult. So in this course, I'll teach you how to handle your data more efficiently using [[Microsoft Power BI|Power BI]]. Ultimately, you want to set up your data in a way that's sufficient, scalable, and repeatable. I'll show you how to use the ETL framework to extract, transform, and load your data. By the end of this course, you'll feel comfortable importing and transforming data from many different kinds of data sources. Then you can blend this data together for further analysis. I'm Helen Wall. Let's get started transforming and automating your data processes with Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2)
> **Env Vars:** etl (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=0)** - [Instructor] To maximize your learning and utilization from the content in this course, you should already be familiar with how to navigate and use [[Microsoft Power BI|Power BI]]. You want to know how the workflow within Power BI works on a high level, which includes importing data through the [[Microsoft Power Query|Power Query]] editor, loading it into Power BI, and creating visuals with this data. We're going to focus on the data part of this process in this course, but if you would like to learn more about visuals within Power BI and other tools, I highly recommend checking out other courses in the library on these topics. You'll also want to be comfortable using [[Microsoft Excel|Excel]], working with data in a tabular format and basic data types like dates, numbers, and strings, and how to switch between them. And unfortunately, Power BI is only available on a [[Windows]] machine, so you'll need one of those as well. If you want to follow along, you'll need at least a Power BI pro account to test out loading and using the data. With that, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (6), [[Microsoft Power Query|Power query]] (1), [[Microsoft Excel|Excel]] (1), [[Windows]] (1)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### [Course project overview](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=0)** - [Instructor] Let's say that we work at a travel agency that offers California travel packages. In addition to our marketing, let's also say that we want to help them figure out an optimal time to visit Southern California by analyzing weather trends. Weather data sets are a great way to explore data methods for tools like [[Microsoft Power BI|Power BI]]. It's relevant to almost everyone, consistent over time and frequently updated. The variety and diversity of weather data and their formats also provide great examples for the techniques that we'll learn in this course. We can get free publicly available weather data from a number of different online resources. One of them is the National Weather Service or NWS through the website [weather.gov](https://weather.gov). Another weather data resource is NOAA, which offers a portal called Climate Data Online for querying data sets. In the exercise files for this course, I'm going to use daily weather data flat files that I obtained through this CDO portal. This weather data will include the latest measurements as of the course recording date. However, if you'd like to obtain the latest data to use on your own, here's how you can query the latest data set. We'll first choose the search tool from our CDO homepage. We'll then input the parameters that we want to query the weather data set with. In the first dropdown menu list for the type of data set, let's select daily summaries. By default, the select date range will display the latest
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=94)** dates in which we have data. We can always change this later if we would like. The dropdown menu for the search for options then defaults to stations. Let's leave this as is for now as well. And the search term text box, let's search for the Santa Barbara California airport. We'll then search for this airport location. Airports are a great places to get weather data from because air traffic controllers rely on accurate and consistent measurements to make critical flight decisions. We see that the search results display the most likely match the top, but also other potential stations to use as well. If we want more information on the geographical locations of these stations, we can take a closer look at them on the map. If we click on the hyperlink to view full details for the Santa Barbara Municipal Airport, we can see the [[Metadata]] for that station. This includes the date range of available daily data points that go back to 1941 and the percentage of data coverage over this time period. We can also note the station ID for this location to use later in other data query methods. Once we confirm this selected station, let's add it to our cart. We'll then click on the cart list in the top right to specify how we want to receive our data results. For the output format of our data, let's select the PDF radio button and the checkbox next to include documentation. Let's change the date range to the dates
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=190)** between the 1st of January, 2023 and the 31st of December in the same year.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=204)** We'll then apply the this date range. It's important to note that we can't query more than one calendar year at a time, so we'll need to query the data again to expand the date range to other years. We'll then click on the continue button at the bottom of the page. Lastly, we can confirm our data request and enter our email address where we'll receive the links to our data once the CDO portal runs our request. We can also obtain data in other format types like A CSV. This request type involves a few more steps though, so let's choose edit order to go back to the previous page. We'll change our format output type to CSV instead of PDF, and then click on the continue button again. There's now another page specific for the CSV format that involves choosing the fields to include. Let's select all the check boxes on the screen, then click on the continue button. Regardless of the selected format output type, we'll ultimately end up at the same final order page. Once we review our requested data and our destination email address, we'll click on the submit order button to run our data query. I ran the data request for Santa Barbara as both a PDF and CSV format for the year 2023, but to save the tedious of walking through both of them individually, I wanted to edit the order to show you how to do both in the same way that I did behind the scenes. I also obtained CSV weather data for the same location
>
> **[4:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=298)** for all the available dates in 2024 and 2022. Also, you may not have your files in the same place that I do, so if you're looking to follow along, make sure you're pointing to the right directory in Power BI. You can do this by opening the source step and updating your file path to the location where you saved it on your computer. So for instance, my exercise files are located in the desktop folder and the sub folder exercise files. You'll want to update this file path to the one you're using on your own computer. And a little bit of a disclaimer, if you've ever used Power BI, you probably know that it's a constantly changing tool and yours might look a bit different, but the overall concepts and framework will be the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3), [[Metadata]] (1)
> **Env Vars:** csv (5), cdo (3), pdf (3), nws (1), noaa (1)
> **UI Navigation:** click on (6), dropdown (2), select the (1), checkbox (1)
> **Cross-References:** go back to (2), later in (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (2)
> **URLs:** [weather.gov](https://weather.gov) (1)
> **Analogies:** for instance (1)


### 1. Extracting Data from Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with Power Query](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=0)** - [Instructor] In the last few years, we've seen a surge in data volume and speed, as well as an increased demand to understand and analyze trends from this data. [[Microsoft Power BI|Power BI]] allows us to scale up to this demand by creating models and reports that cater to business users and decision-makers. But before we get started with Power BI itself, let's talk about one of the most important functions built into Power BI, [[Microsoft Power Query|Power Query]]. Using Power Query enables us to connect to and transform data before we load it into our Power BI models. Power Query Editor formulas share similarities with their [[Microsoft Excel|Excel]] counterparts, so you should already be familiar with many of these commands, but there are a few key differences that are important to know. First, Excel formulas are not case sensitive, while Power Query formulas are. Next, Excel counts from an index of one, while Power Query uses an index of zero. Excel type formula conversions are implicit, while Power Query ones observe strict data typing. Finally, because Power Query doesn't implicitly convert data types, we need to first convert the fields to text data types or set up a text conversion function within the formula. The language behind Power Query is called M. You can see it here. Think of it as the code behind the nice interface that we see here.
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=92)** For example, when we change the type, we see it reflected in a change type step, but before that, we promote the headers and firstly, we connect to the source step that contains our data. The good news though, is that if we want to, we can actually edit this code. We'll be doing some of that in this course as well. So there's Power Query and there's steps behind the code, but it's not just about writing the code and creating the steps. It's about how you're getting from point A to point B using Power Query. And for that we need a framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (10), [[Microsoft Power BI|Power bi]] (4), [[Microsoft Excel|Excel]] (4)
> **Analogies:** think of it as (1), for example (1)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The extract, transform, load (ETL) framework](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=0)** - [Instructor] To use [[Microsoft Power Query|Power Query]] effectively, you'll want to be familiar with the ETL framework. It's a must-know for working with any type of data intake framework, including working with [[Microsoft Power BI|Power BI]]. The acronym ETL stands for Extract, Transform, and Load. It helps us create data tables in tabular form that we can then use in our Power BI models. Extracting the data enables us to connect to a variety of built-in and other connectors directly within Power Query. Power BI has over 100 data connectors available directly in the application, including connecting to both cloud and on-premises [[Databases]], web connections, and flat files stored either in a computer or online. Transforming the data enables us to take this initial data connection and transform it into a tabular data format that we can use in Power BI. With these steps, there are different types of transformations we can take. This includes cleaning the data to remove unnecessary spaces, correcting spelling issues, and choosing the correct data types. Data enrichment involves adding columns to the queries or filtering our data, for example, [[Data Integration]] includes changing the overall structure of our data by doing transformations, like transposing, pivoting, or grouping the data table. In the final ETL step, we load the shaped and transformed data tables into the Power BI interface. This involves choosing the type of connection we want,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=94)** like importing the data or using a direct connection, and connecting related tables together in a multi-dimensional model for our Power BI semantic layer. From there, we can leverage capabilities such as creating [[DAX]] measures and data visualizations. The entire ETL process does not and cannot change or affect anything in the original data source that we connect to because we're essentially making a copy of the data to import. So don't worry that you're going to change the underlying data by doing something in Power BI. It's in safe hands. ETL isn't a one-and-done thing either. You create a strong framework once and then you can use it over and over again for different projects or updates. So it's important to think deeply about the thing you're trying to do before actually diving headfirst into the data itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (7), [[Microsoft Power Query|Power query]] (2), [[Databases]] (1), [[Data Integration]] (1), [[DAX]] (1)
> **Env Vars:** etl (5), dax (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Power Query objects](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=0)** - [Instructor] A programming object contains variables, functions, and [[Data Structures]]. [[Microsoft Power Query|Power Query]] objects in M include tables, list records, values, binaries, functions, errors, and parameters. In Power Query, binary objects are files combined or read using other functions. Examples of these include CSV and [[Microsoft Excel|Excel]] files in our computers, images, and data stored online. Once we connect to a binary object, we then need to read the data it contains. We already have a table object in Power Query, which stores data in a tabular format. This is an example of an object, and I'm going to talk about this quite a bit throughout this course. Within Power Query in the M language, tables, lists, and records are objects that store structured values. We can create lists using curly braces. These can be numerical, like 1 through 10, but they can also contain string values. We can also create lists using list formulas like for example, a list of dates or by referencing a column of an existing query containing a table object. So for instance, I can take the measurement field and I can select to convert it to a list in the transform menu options. Notice that lists so far look like columns in a table.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=99)** If list objects are a column in a table, then a record object is a row. While a list lives in curly brackets, a record lives in square brackets in pairs like city equals Santa Barbara, and state equals California. We'll often see records even live inside lists. We can convert both lists and record objects into table objects from here. Ultimately, in order to make our data useful in our [[Microsoft Power BI|Power BI]] model for doing [[Algorithms]], visualizations, and [[DAX]] calculations, once we load the data, our goal is to convert the queries we want to use in the Power BI model into tables before we load them into it. List records, functions, and so on, are intermediaries along the way to get this done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (4), [[Microsoft Power BI|Power bi]] (2), [[Data Structures]] (1), [[Microsoft Excel|Excel]] (1), [[Algorithms]] (1)
> **Env Vars:** csv (1), dax (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Extracting Data from Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting to text files](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=0)** - [Narrator] Flat files are two-dimensional structures storing data where each line represents a record. Within each line, it splits up values into separate fields. Examples of these types of files include .txt, .csv, .tsv, and others. While we would love to have our data already in a table structure when we read it into an application like [[Microsoft Power Query|Power Query]], that's often not the case. Let's say we're reading a .txt file like this one. We first need to make sure our queries read each line within the file. Once we separate the lines, we then want to separate them into their fields. In this particular example, we're using fixed widths to delineate, meaning that after a certain number of each, it switches to the next field, but you can also separate by characters, which we'll talk about later. One of the data sets that we'll work with throughout this course is a daily summaries of weather measurements by Land-Based Station. The official name for this data set is the Global Historical Climatology Network daily, or GHCNd for short. We can access [[Metadata]] for this data set on its homepage, which includes an inventory of the station locations which take these measurements. This webpage is an online data repository of the individual NOAA weather station stored as a text file. I downloaded it to the exercise files already as well. In [[Microsoft Power BI|Power BI]] Desktop, let's first connect
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=92)** to this .txt file using the built-in data connector to text or CSV data. We'll then navigate to the data sources folder in the exercise files to open the ghcnd-stations.txt file. Rather than loading the data directly, let's choose to transform the data to open and edit it first. This opens Power Query, so we can see the ETL steps it automatically did. In the source step we see this query sets up the connection to the file in two parts. It uses the function File.Contents to return the contents of the path to the .txt file as a binary. It then reads the binary object within the function Csv.Document even though we connected to a .txt file. It splits the column into two fixed-width columns at position 0 and 41 by guessing at the split based on the top rows of data. We can also connect to the online data for the same list of NOAA weather stations. Connecting to this data source means that we'll have the latest station list for the daily weather summaries as soon as NOAA makes changes to it. Let's copy this URL first. Now in Power Query, let's delete our first query and connect directly to the web data instead. The built-in text data connector in Power Query is just for connecting to files stored in local folders, though, so instead, we'll connect to this data via the built-in web connector by using our station ID list URL
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=189)** that we just copied. Let's stick with the default settings that Power Query set up to see what we get. The source step uses the same Csv.Document function with the same default parameters to read the data. The only difference is the first parameter nested within it that is the actual data source, which uses Web.Contents to get data from the web URL instead of File.Contents to read a local file. To determine the number of rows in the query, let's first select column one to convert it into a list object. We'll then use the [[Statistics]] menu options to count the total items in this list. This returns 49,187 as the total rows. This query unfortunately isn't correct as we're not picking up all the rows across all the stations. If we look at the station metadata documentation page, we should have over 120,000 table records for the station list. The reason we see this issue has to do with how the query reads quotation marks. Let's search for this character in our online .txt file. It returns several matching results. Let's scroll down the page through them. Most of these character occurrences appear in pairs within a single line. However, there's at least one station
>
> **[4:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=284)** that doesn't properly close these quotations because it cuts off the closing quotation marks when Power Query reads this data with fixed column widths and interprets all the remaining 70,000 rows plus after this character as the text string crammed together in a single line. Power Query offers different options for opening these text file types. If we double-click on the gear wheel for the source step, it opens the configuration options. There are a few different ways we can mitigate this problem. One way is by changing the file type we're using to read the web connection to a text file instead of a CSV document. Once we confirm these options, let's check the source step formula. It now reads the data using the function Lines.FromBinary to convert the binary object returned from the Web.Contents function into a list of text values split at each line break. The Table.FromColumns function then creates a table from this list of nested lists. We'll then check that we have 120,000 rows plus in our table by navigating to the last step of this calculation. We have almost 126,000 records in our updated table, so we know that we're picking up the correct rows in all the stations. Let's remove these steps for calculating the total rows now that we know that the number's correct. We still need to split the fields in the text file.
>
> **[6:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=380)** One way we can do this is by choosing the option to split column by position in the transformation options. I already determined the fixed-width splits to use, so let's import our split positions as 0, 12, 20, 30, 37, 41, 72, and 80, all separated by commas. Lastly, let's rename the eight new table fields to describe what they do. We'll rename them Station ID, Latitude, Longitude, Elevation, Code, Station Name, GSN, and Other in that order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (7), [[Metadata]] (2), [[Microsoft Power BI|Power bi]] (1), [[Statistics]] (1)
> **Env Vars:** noaa (3), url (3), csv (2), etl (1), gsn (1)
> **UI Navigation:** navigate to (1), open the (1), scroll down (1), double-click (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** ghcnd-stations.txt (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)

#### [Connecting to CSV files](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=0)** - [Instructor] Text files often use delimiters like commas or tabs to separate the data fields within each record that appear as individual rows in a data file. A comma-separated values file or CSV file for short separates these values within a row using commas. Let's first take a look at the CSV file storing the Santa Barbara weather in 2023. If we open this file in Notepad, we see each record on a separate line and commas between each of the fields, along with the header names in the first row of the file. Text files theoretically store an unlimited amount of data, subject to constraints for the application we use to open it. We can however see that viewing it this way is difficult for humans to interpret. [[Microsoft Excel|Excel]] for example can open CSV files but it only displays a million rows or so. Although it makes it a lot easier to see the transformed tabular structure that we ultimately want to get within [[Microsoft Power Query|Power Query]]. Within Power Query, let's set up a new connection to this data using the text CSV data connector and pointing it to the location of the 2023 weather CSV file. We'll then transform our data. Once we confirm our connection, we see in the source step that the file.content function gets the data from the file path and the csv.document function reads the binary object to create a table object.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=94)** We can change the CSV configuration details by opening the source step. One common issue when connecting to data with many columns like this is the potential to have more columns added in the future. To mitigate this issue during our data connection step, we can set the columns in the second parameter to null. We can also connect to CSV data online, including those stored in ZIP files like the NOAA weather data. We can access this data through the CDO portal by selecting data sets. Let's expand the Daily Summaries section. We'll then navigate to the linked FTP page. We'll then select the By Station folder. We often see data stored in FTP folders like this for bulk downloads because it makes it easier to work with huge amounts of data that they contain. The developers of this portal also update the data on a daily basis to include the latest data measurements directly in the folder. From our perspective, this means that we can also easily refresh our data model to include the latest weather measurements and gain efficiencies along the way. Since we want to get Santa Barbara weather data from these folders, let's navigate to its station ID. There are a lot of stations in this list so I'm going to search for the last five digits of its station number. So it's going to be 23174. Yeah, so we're going to choose this link.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=192)** This matches our station ID that we worked with earlier. Once we navigate to the station ID, we'll then right-click to copy the folder location URL. Let's connect to the web URL directly through our eponymous web data connector in Power Query. We see that the file extension has .gz on the end, which is a type of ZIP file using the GZIP compression utility. We cannot typically open it using many built-in native applications on our computers. Once we confirm our web connection, we still don't see anything in our current query space other than a link to this URL file path. If we go into the source step formula, it uses the web.contents function to reference the URL to create a binary object but we can't open it directly. And we see that when we click on it, it doesn't do anything. The reason for this is that we first need to unzip the binary object storing the weather data before we can read the data in it. To do so, we'll use the binary.decompress function around our web contents function to create a decompressed copy of the input. To decompress a binary value, we need to add a second parameter in this function for the compression type as compression.gzip. We can then hit Enter or navigate out of the step
>
> **[4:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=284)** to make sure Power Query updates this. We now see a link to our CSV file in the middle of our query. To access its data, we can click directly on it. After the query's last applied step, when we open the CSV file we now see an imported CSV step added to our applied steps list. The data now displays as a data table that we can use in our models. This is a neat trick that I use all the time in [[Microsoft Power BI|Power BI]] and also Excel to easily unzip compressed files without having to download other applications. We'll save this file as Santa Barbara weather and we'll continue to use this file in other examples of transformation functionalities throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (4), [[Microsoft Excel|Excel]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** csv (10), url (4), zip (2), ftp (2), noaa (1)
> **UI Navigation:** navigate to (3), select the (1), right-click (1), click on (1), open the (1)
> **CLI Commands:** unzip (2), make (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Connecting to Excel files](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=0)** - [Instructor] Extracting data from an [[Microsoft Excel|Excel]] workbook is more intensive than connecting to a text file because we first need to connect to the Excel file and then read the sheets or tables within it. I combined together the yearly weather data from the CSV files into a single Excel workbook called Santa Barbara Weather 2022-2024 with separate sheets for each year. To get this data into [[Microsoft Power Query|Power Query]], we'll use the Excel data connector to point to the folder location and file. Once we make this initial connection, it prompts us to select the data table or tables that we want to use within it in the Navigator window. If we rotate through the tables, we can see the names of our sheets within the Excel file. Let's select the checkbox next to 2023 and 2024. If we choose more than one table or sheet, Excel will create a separate query for each of them. The source step for both queries displays the same [[Metadata]] for the Excel workbook connection, which includes the table and sheet names within that file. The formula in this step uses the File.Contents function to return the binary of the path, then the Excel.Workbook function to read the contents of the file. The Navigation step then drills into the individual table objects that we select like the table 2024 in this case. What if we wanted to combine the sheet together in a single consolidated table?
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=95)** One way we can do this is by combining the table objects together from the initial source step. Let's first remove the other query for 2023 because it connects to the same Excel workbook and we want to avoid duplication when we combine them together. We'll then rename this query Excel connection. In this query, let's remove the Navigation step and anything after it so we just see the metadata in the source step. We can combine the tables by going to the Data column containing the hyperlinks to the individual table objects in each row. Now if we drill into any of the tables, this focuses the query on that table and it adds it to the Navigation step as the last applied steps in the same way we saw when we selected a table in the Navigator window. However, we lose the ability to access any of the other tables in that Excel connection. Let's remove these steps and combine the tables directly together from the source step. Notice there are diverging arrows next to the Data column. If we expand the dropdown menu, we can combine them together directly by selecting the columns to include in the consolidated table. Let's uncheck the box next to Use the original column name as a prefix. Once we confirm our selection, this creates a consolidated data table of all the tables within the Excel file. From here, we can do transformation steps to clean up the data,
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=188)** like removing the metadata columns that we don't need, promoting the first row as headers, and removing any of the duplicate header names now contained within the data values for each of these respective headers. We can then continue to transform this table as we would any other query within our data model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (12), [[Metadata]] (3), [[Microsoft Power Query|Power query]] (1)
> **UI Navigation:** select the (2), checkbox (1), dropdown (1)
> **CLI Commands:** make (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### [Connecting to online Excel files](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=0)** - [Instructor] We can also connect to an [[Microsoft Excel|Excel]] workbook file online. For example, let's connect to an Excel file containing the NOA calculations for the sunrise and sunset times for a location. We can see this example in the [[Microsoft Excel]] section on the left at the bottom for the year. We can see what these solar calculations look like via Excel online when we open it up in an [[Microsoft Office|office]] apps. It displays charts for key calculations on the left side and the cells containing their formulas for each of the respective calculations for each day of the year for that location. Now, yours might look slightly different, but we want to see this in an example of what the calculations look like in this online Excel workbook. Let's copy the URL to this webpage from the top. Now, let's connect to it using [[Microsoft Power Query|Power Query]] through the web data connector, we can then choose to use an anonymous authentication because anyone can technically access it. When the query returns some view after we confirm our connection, we know that connection works, but is this the type of connection to the web file that we want to set up? It displays this [[HTML]] code and we don't see any of the actual data in that or the display text. So while online Excel viewing options are great
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=95)** for humans to see the data, they're not great for computers because they add extra layers of UI or user interface on top of the data. Instead, we want to connect directly to the Excel workbook link. On the NOA calculations homepage, we'll go to the yearly calculations in Excel. We'll right click on it and select copy link address. Now, in [[Microsoft Power BI|Power BI]], let's set up a web data connection again. We'll paste in the URL we just copied, which ends with XLS, and we'll again use the anonymous connection for authentication. We'll then choose to transform the data. Now, when we look at the query, this returns, it looks like an Excel file that we store on our desktop, except we're retrieving it online. It reads the Excel web file connection just like it would one that's saved on our desktop. We then have the same options for selecting the tables within our file and drilling into the table calculations to see what the results look like. Let's then save this file with the name Sunrise and Sunset calculations. One thing we notice for the web connection to the Excel file, and we'll also see this with Desktop Connection, as well as that we don't have the option to change the input parameters directly ourselves
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=188)** as we see in column two for these values and the labels in the first column. The time zone and geographical location denoted by latitude and longitude coordinates for these calculations are already set. We also don't see the charts that appeared in our workbook because Power Query doesn't pick them up. Once we extract this data, we can then transform it as we would any other query, for example, by removing columns that are null and any other type of transformation step that we'll continue to explore in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10), [[Microsoft Power Query|Power query]] (2), [[Microsoft Excel]] (1), [[Microsoft Office|Office]] (1), [[HTML]] (1)
> **Env Vars:** noa (2), url (2), html (1), xls (1)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Connecting to PDF files](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=0)** - [Instructor] The term PDF is an acronym for Portable Document Format. We often see these file formats for more formal and published reports. While they're easier for us as humans to read, they're also harder for computers to read because of the very spacing and formatting that make it easier for us to read it in the first place. When we open a PDF file for Santa Barbara Weather in 2023, we see that unlike [[Microsoft Excel|Excel]], the data tables aren't continuous, and instead span across many pages within the report. In [[Microsoft Power Query|Power Query]], let's choose the PDF data connector to point to the data sources folder storing our PDF file.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=48)** Let's then connect to the first table that we see listed in our navigator window. Like connecting to an Excel file, this drills into the selected table. Now this consolidates the table together, which we see when we scroll down and look at the months involved. We see that each month has its own separate page. There are definitely scenarios where you want to drill into a single table within any file connector, like A PDF, and there are instances when you want to combine them together. In this particular view, we can remove any of the duplicated headers and take out the headers and footers that we don't need. We can also combine them together directly in the source step. When we navigate back to the source step, we see the [[Metadata]] for the tables and the pages within our PDF connection. Notice the data field only contains rows of hyperlinks to tables. Each one of these links is a table object that the Power Query is reading from the PDF file. To access and combine the tables, we can go to our latest source step, or we can drill into it and select the steps from there if we already have a table selected. It will override the selections after it. We can also see that there are tables and pages within this view. Now, if we click into a page, we see that it contains a lot of the header and footer data that we want to get rid of.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=146)** If we go back into a table view, so we're going to focus on the table value in the Kind column, and we'll replace the step to see what it looks like. If we want to combine them together, after filtering them, for example, we would first select the table. We'll then select the diverging arrows next to the Data column. We'll select all the columns and uncheck used original column name as prefix, and we see that it joins all the tables together. We can go back and just use Table 001 for pages 1 through 12. Let's then clean up the query with some transformation steps. Let's remove the top two rows in the table through the Remove Rows Transformation option.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=211)** After that, let's then promote the first row of the now top row as our consolidated table header. We can then remove the values that we don't want in the column. For the year field, for example, if we expand it, we don't want to include summary, but we want to include the year 2023. Because we're getting the weather data for each day in the 2023 calendar year, there should be 365 rows in our transformed data table, which is what we see. Before we load the data, we also want to make sure that our data types are set for their appropriate fields. Because there are fewer than 1000 data records, this also makes sure there aren't any errors in the fields for the data types, depending on the data values in each of the respective columns. And there we have it. How to use a PDF file and convert it into a useful table in Power Query. Now that we've created our PDF connector, let's also rename it directly in our Query Settings so that we know where the data came from.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (3), [[Microsoft Excel|Excel]] (2), [[Metadata]] (1)
> **Env Vars:** pdf (9)
> **UI Navigation:** select the (3), scroll down (1), go to (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Connecting to images as data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=1)** - Images are data themselves that are stored in different formats than the tabular data we normally work with. On a high level, this process first involves importing image data as a binary object into [[Microsoft Power Query|Power Query]]. We'll then convert it into a text bit map with the help of a few formulas. Lastly, we'll load the bitmap into [[Microsoft Power BI|Power BI]], and convert it back into image data by setting its data category as an image URL. Our course project focuses on California tourism, so let's bring our company Explore California logo into Power BI as an image. Notice it's a smaller image. Power BI supports thumbnail images, but not larger ones. So if you're working with larger images that you want to bring in as data points, you'll want to resize them first. We can use any connector to connect to our image, because Power Query doesn't have a built-in connector to image data file formats like PNG and JPEG, like we're using here. Instead of selecting text files, we'll select all files. And select the same image from our images folder. We see the file.contents function connects to our locally stored file to return a binary object. This object stores our image data as a JPEG file, but we don't see any of the bitmap data, at least yet. We just see a link with the file name on the query screen.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=98)** And if we click on it, it doesn't open or do anything. To read the data in this object, let's add another step below our existing source step by right-clicking on this step and choosing to insert a new step below. Let's read the data using the function binary to text on the source step above it to convert the binary file storing our image data into texts that Power Query can read. Within this function, we'll then reference the source step where we connect it to the data above. Once we convert the image data, we then need to concatenate another expression to the beginning of the formula to read it as a bitmap. We can do this with a text string, data:image\jpeg;base64,
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=162)** we'll then concatenate this prefix string to the expression in the binary to text function using an ampersand. After the forward slash character in the string, we see that we're referring to a JPEG because that's the format of the saved image file that we're connecting to. If you're connecting to another image format file type, you can also change this part of the text expression to PNG instead, for example. Now that we created our image bit map using a formula, let's convert this value into a table without any delimiters. We'll then convert the single column in the table into a text data type. We'll then load this image data into our Power BI model to make sure the image properly renders in our visuals. Once we load our image data into the model, let's add this field to a table visual. We just see a long bitmap text string because we need to convert it into an image first. To do this, we select the column one field. Then in the column tools under data category, select image URL from the dropdown. If you load your image data and you don't see the entire image, you'll want to resize it so it fits. You can do this through applications like [[Microsoft]] Paint to make the image thumbnail sized. Let's also save our file as image in our exercise files.
>
> **[4:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=259)** We now see a small image of the image data that we brought into Power BI through Power Query. I think it's quite neat that we can do this, and there's a lot of things that we can do with this image data to make our visuals impactful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (5), [[Microsoft Power Query|Power query]] (4), [[Microsoft]] (1)
> **Env Vars:** jpeg (3), url (2), png (2)
> **UI Navigation:** select the (2), click on (1), dropdown (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - images (1)

#### [Setting up folder connection](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=0)** - [Instructor] Connecting to a folder of files in [[Microsoft Power Query|Power Query]] is immensely helpful because it streamlines a lot of the transformation processes and steps along the way. Receiving the same file every month in the same file type, we could spend our time importing them separately, or we could expedite the process by putting them in the same folder. We'll then have Power Query connect to this folder to set up the ETL framework. And when we add a new file to the folder in the future or many files, we just have to refresh the query to update our data. We can set a folder connections in Power Query to local computer folders or [[SharePoint]] and others. Folder connections in Power Query can contain any file type. The Power Query supports like connecting to CSV, [[JSON]], [[Microsoft Excel|Excel]], and other files. Let's first create a new folder connection in Power Query that points to our Data Sources folder in the Exercise Files storing different data files in different formats like Excel, CSV, and image data.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=72)** We now have a table that shows a row for each file name. Let's choose to transform it. The first column of the table content contains the files in the folder in the form of binary objects storing their data. We can access the data through the binary hyperlink in each row of this field. Using a folder as a data connection means we also import all the subfolders within it including a subfolder of image data, which we can see in the Folder Path in the last column. To show how this folder connection is helpful, let's create three separate queries for the CSV files, Excel files, and images respectively by duplicating our initial query and renaming them accordingly. Let's first select our images query and we'll choose to filter these items that are only in the Images folder. Next, let's set up the formulas within this folder connection to read the image data as text bitmaps that we can load into [[Microsoft Power BI|Power BI]]. Early in this chapter, we connected to image data, so let's use the same formula we did to read image data as a new column. We'll call it Images. We'll use the same formula that starts with a prefix string to specify the data format. We'll use the ampersand to concatenate it
>
> **[2:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=165)** to the Binary.ToText function. Now, instead of referring to the source step like we did in the previous video, we much refer to the Content column that's storing our images as binary files. Let's also convert our images into text data types. We don't have the names of our images, so let's split the name of the image, which says Explore California.jpg, for example. And we'll convert this into two separate columns using the split functionality,
>
> **[3:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=209)** We'll then rename this first field name. We can then remove the [[Representational State Transfer (REST)|rest]] of the [[Metadata]] columns because we don't need them anymore.
>
> **[3:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=227)** Once we load the queries into Power BI, let's go to the images query, we'll then choose the image field, we'll convert the data category uncategorized into image URL, and then we'll add both these fields to a table visual to make sure we can see them. So that's how we import a folder of images into our Power BI model as a series of data points represented with images. Now let's continue to transform our other queries through the folder connection. For the CSV connection, we'll filter our extension down to just the CSV files. We now see a list of the CSV files as well as the metadata about this folder connection. We can combine binary objects or read them with other functions. Let's read the CSV files using the function Csv.Document to reference the binary objects in the content field and a new column that we'll call data. Like other table objects, we can drill into one of them or we can combine them together by selecting the dropdown menu with the diverging arrows and choosing to confirm all the columns. This combines the CSV files together. One trick for this is that the columns that individual files should align, otherwise we'll run into big problems when combining them. We can then promote the first row as headers and we can continue our transformation process
>
> **[5:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=322)** to make it into a usable data table. We can also use the folder connection for Excel files as well, or filter for xlsx. Now we only have one Excel file in here. And we explored earlier how to combine the tabs within them. But let's see how we would do this from a folder perspective in case we have more files in the future that we want to combine together. Excel data connections require Power Query to first read the files to determine the tables or sheets in them. Let's do that in a new Data column, which will set equal to the function Excel.Workbook. Inside this function, we'll then refer to the binary objects in our Content column. Now we see one table in our view, and there are actually three tables in the data, so we first need to read the sheets within them. So we'll expand our Data column, and now we see all three sheets as table objects. We can then expand this view to get all the tables within the folder pertaining to Excel connections. Like combining CSV files, we can then do transformation steps to clean up our data by removing rows that will cause the query to err out and columns we don't need and so on. Let's then save our work as a Folder Connection pbix file. Once we connect to our folder,
>
> **[6:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=418)** we can then just refresh the queries directly in Power BI and Power Query to get the latest data. It's a great trick to help us save a lot of time when working with monthly data cycles and similar processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (8), [[Microsoft Excel|Excel]] (8), [[Microsoft Power BI|Power bi]] (4), [[Metadata]] (2), [[SharePoint]] (1)
> **Env Vars:** csv (9), etl (1), json (1), url (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), previous video (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Connecting to HTML and XML](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=0)** - [Instructor] We can easily connect to markup languages like XML and [[HTML]] in [[Microsoft Power Query|Power Query]]. Extensible Markup Language, or XML, is an older markup language for defining data definitions. Hypertext Markup Language, or HTML, is a newer standard markup language for creating web pages that uses tags to label elements like headings and tables. Let's first connect to an XML page storing the latest weather observations for Santa Barbara, California. We can find this weather data by searching for XML weather data for this location. The National Weather Service Station ID for Santa Barbara is KSBA, which we see in the webpage address. Let's copy the URL for this webpage so we can connect directly to it in Power Query. Now let's connect to this XML webpage through a new web connection in Power Query with the URL string for the XML. We'll use the anonymous settings for connecting to this file because we don't have to enter any authentication. Our query now displays a table with a single row of data. If we look at the Source step, notice that Power Query automatically picks it up to read it as XML tables from the webpage. Let's also rename this query with the prefix XML Latest Weather for the station name. If we look through the columns in this table, we see there's a bit of [[Metadata]].
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=94)** We can remove some of these columns that we don't need in our new table to make it easier to read and less cluttered. Let's remove the metadata and keep the measurements. Next, let's connect to an HTML webpage containing the current weather conditions for the Santa Barbara area. This live webpage from [weather.gov](https://weather.gov) looks a bit more modern than its XML counterpart. When we go to a webpage, we don't see XML code explicitly, but rather, the content rendered by this code. We can see the HTML code behind the website if we right-click on it and choose to inspect our page. We don't have to understand HTML code, however, to connect to it in Power Query, although understanding HTML can help us troubleshoot more potentially challenging problems or more complex webpage. We'll again copy this URL to the webpage. We'll follow the same steps to set up a web connector in Power Query to this URL. For this connection, unlike the previous one to an XML page, we have to select the table within the web connection. Power Query picked up that this is an XML page, but I've learned this isn't always the green light that everything is okay. Instead, we want to make sure we connect to the latest weather measurements that appear in one of these tables. If we click on Table 1, this displays the weather data. If we go to the HTML code,
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=189)** this doesn't contain a data table that we want to see, it contains the code. We see display text, and we see other tables that we're not necessarily looking for. We are, however, interested in getting the data from Table 1. We'll choose the checkbox next to this table to load it into our data table. This displays the selected query in the view as the HTML table we drilled into. If we click on the Source step, we see that Power Query connects to the webpage using the function Web.BrowserContents instead of Web.Contents because we're connecting to a browser instead of binary webpage. In the second step of the applied query where we extract the table from HTML, we can see by expanding the formula bar how it uses the tags in the HTML page for the table and tr tags to extract column one and two and the rows associated with them. Let's rename this query with a name analogous to our earlier XML query. Because we're connecting to a frequently updated online source for the latest weather measurements, when we set up a data refresh schedule to either of these pages, we'll have the latest weather measurements in our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (10), [[Microsoft Power Query|Power query]] (8), [[Metadata]] (2)
> **Env Vars:** xml (13), html (10), url (4), ksba (1)
> **UI Navigation:** go to (2), click on (2), right-click (1), select the (1), checkbox (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** set up (2)
> **URLs:** [weather.gov](https://weather.gov) (1)
> **Warnings:** troubleshoot (1)

#### [Connecting to JSON data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=0)** - [Instructor] [[JSON]] files are a common format for storing data, especially for computer generated data sources. JSON data can be tricky for humans to read, but easy for computers to parse. Let's walk through an example of how to connect to a JSON file storing NOAA H weather results for Santa Barbara for January 1st and second of the year 2024. The first thing we notice about JSON files is the general structure of the file. To look at levels of elements, we want to look at their levels of indentation. When their level of indentation matches up, they're on the same layer of the data when we drill into it. JSON data might not necessarily appear by default with this nice indentation, but if you would like to display it in this way, I encourage you to check out tools that do enable you to format JSON data nicely like this. It's important to note that records in JSON data appear in curly braces while lists appear in square brackets.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=67)** [[Microsoft Power Query|Power query]] object syntax doesn't match that of the JSON file, but the good news is that when we import the JSON data, it converts those structures into their appropriate power query objects. [[Microsoft Power BI|Power BI]] has a built-in connector for JSON data, so let's use it to connect to data from the Santa Barbara area over a two day period. As we see here, if our JSON file isn't saved with that extension, we can expand our file type options to all files, and we'll then choose our JSON text file. If we expand it, we can see what its extension is. We can see that Power Query figured out what file type it was for us. Once we bring our data in, notice the power query automatically transformed the data into a table object by adding applied steps for us. What exactly do these steps do though? It first accesses the entire JSON file as a record object. After it converts this JSON file into a table, we can see it consists of two high-level components, the [[Metadata]], which is stores as a record object and the data itself in the results, which it stores as a list.
>
> **[2:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=155)** It then expands the record object within the metadata as a result set, and then it expands the record within the results set metadata into separate columns.
>
> **[2:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=173)** Notice how the results appear in a list object in our rightmost column. These contain the results in a list object. If we just want to get the results, we can drill into the results list object directly, but we want to keep the metadata as part of our final data table. If we expand the list object instead, this displays the record objects during our results in the JSON file. Each of these record objects contains the five fields for the date data type station, attributes and values. It then expands these records into the five columns pertaining to each respective column label.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=226)** Finally, it changes the data type based on the data fields that we have and the values within them. And it's important to note that we're using a small data set here, but you can scale it out to much bigger data sets containing more than 20 rows. It could contain 200, 1000 and so on. Once you scale it out, this process and the logic behind how the steps works remains the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (15), [[Microsoft Power Query|Power query]] (4), [[Metadata]] (4), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** json (15), noaa (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### [Connecting to APIs](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=0)** - [Instructor] An API or application programming interface is how computer applications talk to one another. They enable us to query data or subsets of it. One way we can use APIs within [[Microsoft Power BI|Power BI]] is to get data to import into our model. We can then set up regular, frequent data refresh schedules to this API to ensure that we have the latest data measurements. Each API is different, but to build an API request, we need to figure out the required components, including the endpoint, the parameters, and the key or token. Other than the endpoints, the parameters and key or token are sometimes optional. We're not going to get into building APIs here, but it's useful to know. We can get the latest hourly weather data from the Aviation Weather Portal available through the National Weather Service. One of these data sets is the METAR data set, which gives us hourly measurements of the data. The required components that we need to build the API with are available on its documentation page like we see here. The fantastic thing about this portal is that it has an interface where we can input and test our parameters, and it will give us the complete API query URL we need to use to get that data in PowerBI. Let's query the METAR data by expanding this section on the page. We need inputs to configure our request parameters. However, to access them, we need to enable that option first by clicking on the Try it out button in the top right.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=98)** Let's then choose the single weather station ID. I know that I'm using Santa Barbara as my station ID, which has the code KSBA. If you want to look at another weather station, you can find it by searching the National Weather Service. Some APIs like this one give us the option of the format of the results we want to return, which includes raw, [[JSON]], and so on. I've used this API before, and I found that raw data, which returns text format data, most consistently works if we want to update the data frequently. Let's set the TAF parameter to false. We'll then input 1000 hours as the time periods we want to go back in the historical pass for data. We'll leave the [[Representational State Transfer (REST)|rest]] of the query parameter inputs blank. To see what the API request query will look like, let's choose to execute a query. We see what our API results look like if we scroll down. We see what our API results look like as a series of text strings, where each measurement time appears as a single row, followed by the data associated with that date and time, which is in UTC time. If we want to further continue to refine our API here, we can do so by testing it out. We can see the get request with this API query once we execute it. Let's copy this get request URL query string so we can use it in Power BI.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=192)** In our web connection option, let's copy and paste the URL string from the [[API Testing]] tool, into our URL input parameter. Once we confirm our web connection, we see the results. Notice the [[Microsoft Power Query|Power Query]] split it into three columns. This works because the station ID is four characters, and the UTC date time always has the same number of positions within it. The rest of the data string is not necessarily the same for each measurement, but we see that reflected all in column three. We'll continue to transform and work with this query throughout the course. Let's rename it METAR API. When you're connecting to an API, the documentation and examples are incredibly helpful references to use to develop the query. I find that working with APIs require both skill and also practice and tenacity to figure out what's going on. If it doesn't work at first, don't be deterred, and you can try again until it does get the results you want. We can set up API connections in many ways, and this query is one example of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[JSON]] (1), [[API Testing]] (1), [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** api (16), url (4), metar (3), utc (2), ksba (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Connecting to ODATA feeds](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=0)** - [Instructor] OData or open data protocol connections are pre-built API connections that we can extract data from directly. We can learn more about how OData connections work and their protocols on their documentation page. These connections aren't always available, but they're useful if they are what we're looking for. Let's connect to public data for Los Angeles rainfall via an OData connection on the [Transportation.gov](https://Transportation.gov) website. If we open the Action menus in the top right of the screen, we can see various options for accessing this data. We see it has an API. We also see that it has an OData connection, which we can select via access via OData. This gives us a link to connect directly to the OData source. We can tell that we're connecting to an OData source because the URL denotes an OData connection within it. Let's then copy it to use it in [[Microsoft Power BI|Power BI]]. In Power BI, we can set up an OData connection directly through its built-in Power BI connector. We'll choose OData feed. We'll then paste in the URL to the OData source that we copied from the [Transportation.gov](https://Transportation.gov) website. Because this is a publicly available website, let's just choose anonymous to connect. Once we confirm our connection details, we see it establishes the connection, and we can inspect the results via the source step in the applied list. We see it uses the function OData.Feeds to connect to the URL along with other parameters.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=97)** The query detected that this source was a CSV format, so we see it displayed in the table structure and the table object that we want to load into our model, this particular format, return to table, but they may not necessarily be the case with every OData connection. Let's rename the Query OData Los Angeles Rainfall. We see it formatted as a table object, and we can continue to transform it in [[Microsoft Power Query|Power Query]] before loading it into Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** url (3), api (2), csv (1)
> **URLs:** [transportation.gov](https://transportation.gov) (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Connecting to GitHub](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=0)** - [Instructor] [[GitHub]] is a developer platform that enables us to create store and manage code. It also enables [[Version Control]] and many facets of project management. Here's a GitHub account that we'll explore in this video containing data for the weather that we've been working on throughout this course. This includes a CSV file containing data that we'll connect to from [[Microsoft Power BI|Power BI]]. Within Power BI we can connect to GitHub in a few different ways. Let's first create a new connection by searching for GitHub in our [[Microsoft Power Query|Power Query]] connection options. There is a GitHub connection. Note, there's a suffix on the end of it indicating it's currently in beta mode. We'll select it. If we choose to connect to it we see a warning message on our screen telling us that this data connector is still in development and there may be unresolved issues in using it that are unexpected. So in other words, buyer, or developer in this case, beware. Let's continue to work on this connection as we do want to see how it works. We'll then go to our GitHub page to get the information about how to connect. The owner name here is [[LinkedIn]] Learning, and the repository name is the name that we see at the end of the URL. You might be asked to sign into your GitHub account depending on whether or not it's public or private. In this case, this is a public repo, and we can see all the different GitHub elements
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=93)** in the list on the left. From here, we can select them and we can explore them to see how they work. Another way to connect to a GitHub repo that uses an existing established connection is through a web connector. Let's go back to our CSV file that we stored on GitHub. Let's see what it looks like. We can connect directly to this data of source. Let's copy the URL for it at the top of the page. Now let's paste it into our Power Query web connector. Since this is public, I'm going to use anonymous. Otherwise, we can log in through various options available on this configuration window. So notice we don't exactly see a data table. This is because we're not connecting to the right URL within the GitHub repository for the CSV file. So let's cancel out of it and we'll go back to our GitHub page. In our GitHub page, we want to make sure that we're connecting to the raw view of the CSV file. We'll select the button for raw on the top right of the table. This displays the raw view, which you see is much harder for us to read because it doesn't have a grey user interface, but like many development endeavors, removing the user interface also makes it easier for computers to parse. Let's copy this link for the raw view of the CSV file online and use it as our URL for the web connector.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=192)** We'll use the same anonymous connections again. Once we confirm our connection, we see that we're connecting to this view and it looks like a table. It's the same as connecting to any other CSV file online. We'll click Okay. We'll then rename this query Raw CSV, and I'm going to delete the milestones and issues and rename repo details GitHub Beta Connection. We'll also save this file as GitHub Connection. Once we make this connection to GitHub, we can continue to transform it as we would any other data source. The key to getting it to work is to make sure that we're connecting to the data that we want to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (16), [[Microsoft Power BI|Power bi]] (2), [[Microsoft Power Query|Power query]] (2), [[Version Control]] (1), [[LinkedIn]] (1)
> **Tools:** github (16)
> **Env Vars:** csv (7), url (4)
> **Definitions:** is a  (3), in other words (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** github repo (1)

#### [Using an R script connector](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=0)** - [Instructor] R is a programming language for statistical computing and graphics, which matches up with many of the undertakings we're trying to do in [[Microsoft Power BI|Power BI]] too. We need to run R off our computer for Power BI Desktop when we input our script this way. Once we load it into a Power BI Service Cloud account, it will then run off the cloud instance of R. I recommend testing to make sure your R version works and otherwise checking the documentation on this. To use R and Power BI, either in scripts or in visuals, we first need to install it on our computer, along with any packages we want to use. In Power BI Desktop, we can configure this connection via the R scripting sub menu in the options menu. If you have more than one version of R installed as I do, you can select it from the dropdown menu. Power BI already detects these versions of R for you. You just have to choose the version or the IDE below that you want to use. I'm going to use the latest current version of R in this example, because it works to create the output that I want to use for an R script. The built-in [[Microsoft Power Query|Power Query]] connections are very powerful and extraordinarily flexible. However, they're not all encompassing, and they're examples of things they don't work well with, like creating date times and working with time zones. Unfortunately, time zones also change twice a year. Most of the world where they observe daylight savings time changes, there isn't a built-in way to create a date time zone table in Power BI.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=95)** But with the help of R and the lubridate package, we can try this out, and create a date timetable with the time zones ourself. We'll want to download any R packages like lubridate date, in this case to run the R scripts in Power BI desktop. Let's copy our code. We'll then open our Power Query editor by choosing transform data. In Power Query, let's then select to add a data connector as an R script. The easiest way I found is to just start searching for R script. This opens a window where we'll input our R script that we copied. I recommend testing it out in an IDE like [[RStudio]] to make sure the code runs. I already know this runs for us, so we're just going to paste it in here. Power BI isn't a good place to develop code like R scripts, because it's not an IDE that gives us error messages as to what's going on if something doesn't work as expected. Once we run our script, we see it appears as a table object in Power BI called DF or Data Frame. We can click on it to open it up as new query, and drill directly into it. Let's rename this UTC and Pacific Date Times.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=179)** Lastly, let's change both fields from text values into date times. The reason the R script converts date times into text values before bringing them into Power BI is that the integration between Power BI, and in this case Power Query, and R don't necessarily pick up date times and dates well. However, if I pass the date time values as text values, I can then convert them directly in Power Query. We'll choose date time for both fields. We now see the UTC time is eight hours ahead of Pacific, which is exactly what we want to see for the state timetable. We'll continue to work with this data table throughout this course, including in the date and date time chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (12), [[Microsoft Power Query|Power query]] (5), [[RStudio]] (1)
> **Env Vars:** ide (3), utc (2)
> **CLI Commands:** make (2)
> **UI Navigation:** dropdown (1), click on (1)
> **Prerequisites:** install (1), configure (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using a Python script connector](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=0)** - [Instructor] Like R scripts, [[Python (Programming Language)|Python]] scripts are also useful for the few tasks in [[Microsoft Power BI|Power BI]] where the functionalities don't quite work to do what we want them to do within the interface. It can do many of the same things as R, but Python has a lot more capabilities where we can use it for things like integrations and connecting data within larger ecosystems of other applications. To get Python to work in Power BI Desktop, you'll want to install it on your computer if you haven't already. You'll also need to install [[Pandas (Software)|Pandas]] and Matplotlib libraries or packages in order to have it to run. Once we upload this to shared accounts like the Power BI service, Python will run off of the cloud instead. We can access Python scripting through the Options menu. We'll then choose the Python scripting sub menu, and we can choose our Python directory to use. It also detects IDEs. So this is already set up, so now let's run a Python script. Let's use the following example of a Python script to see how it works. In this code, we use pandas, which we import as pd, and we then create a Pandas data frame object to store our data with the columns column one, column two, and column three. Let's copy the code from import pandas to where we create the df variable. If you're interested in learning more about Python, I encourage you to try it out on your own
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=92)** and to build something more complex if that's something that interests you. To connect to a Python script, we'll choose New Source, and like the R script, I'm just going to search for Python. Once the script box opens, we can then input the Python script that we copied. I already tested this out so I know it runs, but I encourage you to try it out in an IDE like Visual Studio or Anaconda, because running Python code in Power BI doesn't give us the error messages to help us troubleshoot problems. Again, like our R script, we need to create a data frame or table object from running our script, which in this case is the df data frame. Once we see our display options, we see df as an output from running the script. We'll then select it to drill into it. Let's rename our query Python script. Once we make the successful connection, we can then continue to transform our data types or make other transformation steps here in the same way we would any other data connector.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (15), [[Microsoft Power BI|Power bi]] (4), [[Pandas (Software)|Pandas]] (4)
> **CLI Commands:** python (15), make (2)
> **Prerequisites:** install (2), set up (1)
> **Tools:** visual studio (1), anaconda (1)
> **Env Vars:** ide (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Getting data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=5)** - [Narrator] Now it's time for you to try these concepts out yourself. The Bureau of Labor [[Statistics]], or BLS for short, is a great public data source for US employment. We're curious about the employment numbers in Santa Barbara, California. But if you're in the US, you can get data for your area. I've provided the URL for this API data query in the exercise files. Here's what the format of the API query results look like. Here's your challenge. Use [[Microsoft Power Query|Power Query]] to connect to these data and transform it into a table that looks like this with the year, period, month name, and employment numbers as appropriately set data types in each column. Here's a hint. If you get stuck on transforming the initial web connection, revisit the [[JSON]] data video. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft Power Query|Power query]] (1), [[JSON]] (1)
> **Env Vars:** api (2), bls (1), url (1), json (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Getting data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=5)** - [Instructor] So how'd that go? Were you able to connect to the API? Here's how I solved it. So first, I'm going to get data and choose the Web Connector. I'll then input the API query to the Santa Barbara Employment numbers, which I got from the exercise files. Going to click OK. Now, this data doesn't really look like what we want to see, but we can transform it into the data table we want within the [[Microsoft Power Query|Power Query]] editor. Notice that these results look kind of odd, and the reason is we're not reading this data correctly. If we look at that documentation in the Bureau of Labor [[Statistics]] API, this is supposed to be returned as a [[JSON]] file. So let's see what happens if we remove the functions around the web.Contents function. We want to read the data from the API, but we want to read it into a different format. We'll use the JSON document function
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=77)** and we'll make sure that our parameters close on both sides of this function correctly. Now, we return something that contains list objects and record objects. We then need to navigate through this maze of objects within the query to get the results we want. We'll first drill into the results, record object, and then the list object containing the series, and the record object. And we're getting closer, we see a list object of the data. Finally, this get says into a list object containing record objects containing the data results. Let's convert this list into a table with no delimiters, and we can then expand these records into individual columns of their own. However, I don't need all these fields. So we'll go back into the steps to expand the columns, uncheck footnotes, uncheck the latest. Next, we'll change the data type for each field. Year will be a whole number, period will be text, period name will also be text, and our value will be a whole number. Lastly, let's rename these fields, Year, Period,
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=171)** Month Name, and Employment Numbers. There we have it. We've converted a confusing JSON file into a useful data table that we can use in our challenges in future chapters. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Microsoft Power Query|Power query]] (1), [[Statistics]] (1)
> **Env Vars:** api (4), json (3)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Transforming Data with Cleaning Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Cleaning text fields](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=0)** - [Instructor] One key part of the transformation process is cleaning the data because it makes the [[Representational State Transfer (REST)|rest]] of the steps much easier and smoother afterwards. Examples of text cleaning include removing leading and trailing spaces and standardizing capitalization between values in a field. (screen whooshes) In our query for connecting to the daily weather stations from NOAA, we already split the columns by fixed widths for their respective fields. However, one challenge with fixed width splits or splitting by any number of characters is that it becomes easier to introduce leading or trailing spaces into the field, which are hard to spot often until they present a problem later. [[Microsoft Power Query|Power Query]] is fantastic for many reasons, but especially because it makes repeating these steps easier by letting us clean the data in an easy and straightforward manner. For the Data ID field, if we click into a value in the column, we see displays at the bottom of the query. If we click into this value by highlighting it, we see there are trailing spaces, in this case, one space, that appear at the end of the Station ID, but it stops before the next split of data for the Latitude. This is because when we split the positions by a certain number of characters, it leaves a single space behind it before it starts the next field. To remove these extraneous spaces, let's select the entire Station ID column. We'll then right-click on the header. We'll select Transform. It's important to note that this appears
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=93)** because we already set the data type of the field as a Text value. If this was a whole number or a date, we wouldn't see these Text Transformation options appear for the selected field. We'll then choose Trim from these options. Now, when we select this value, we don't see a space after it for the Station ID. Let's also clean any other text fields using the same Trim functionality in order to remove any white spaces. We'll do the same with Code, Station Name, and GSN. For the Station Name, let's change the capitalization. Right now, they're all uppercase characters, which can make it difficult to read, so we'll select the Station Name and choose the Transformation options again. We can make it lowercase, uppercase, or we can capitalize each [[Microsoft Word|word]], which is what we'll select. Now, if we go into the step, we see that it transformed the column, but we didn't have to create a new one. Instead, it capitalized each value in this field and assigned it back to the same Station Name column. This is really helpful for text values like this because it really saves us a lot of time later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Power Query|Power query]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** select the (2), right-click (1)
> **CLI Commands:** make (2)
> **Env Vars:** noaa (1), gsn (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Removing or replacing values](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=0)** - [Instructor] If we want to replace values in [[Microsoft Power BI|Power BI]], we can do this with the replace values functionality. We can either replace one character with each time it occurs within a field with another one, or we can replace an entire matching string with something else. If we look at the station name field, there are discrepancies between the spelling and labels between all these names. There are over 120,000 station names, and they're not necessarily standardized. For example, we might see periods in one name when we have an abbreviation and not in others. If we want to remove a period like we see in row three, we can do that through the replace values functionality. We'll right click on the column name and choose Replace Values. We'll then input a period as the character we want to replace, and we'll replace it with an empty string. We can also use multiple characters as strings that we want to replace. For example, we see discrepancies between how international is spelled. We'll, again, replace our values to add another step. We'll say that INTL is international. We can also replace an entire name in the station names or any other text field. And in this case, we want it to match the whole field, so we'll say St. [[John the Ripper|John]]'s, and I'm going to replace it with, "This station name is a replacement." And we see that wherever this matches,
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=98)** part of it, we see it replaced. However, we don't actually want to see the entire replacement. Let's open it up again by clicking on the gear wheel, and we'll select Match Entire Cell Contents. And now, we see it only updates when St. John's represents the entire name of it. We also need to be careful with this replacement functionality, especially when we're dealing with this many rows like we have for station names. For example, we replaced INTL with international, but this can cause a problem later. Let's replace our values, and we'll say that we want to replace Inter, which is another airport name with international, now we see that we've run into another problem and that it replaces international, inter with international in the beginning of the string. And then so we've got a [[Microsoft Word|word]] that doesn't make sense for international. So a word of caution to be careful about how you replace values and look at methods in order to avoid problems like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2), [[Microsoft Word|Word]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Analogies:** for example (3)
> **Warnings:** be careful (2), caution (1)
> **Env Vars:** intl (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Splitting and concatenating fields](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=0)** - We can split a field into two or more fields based on a selected delimiter, number of characters or position. Conversely, we can combine them together by going the other way with delimiters and formulas. Let's first split our station ID for the NOAA stations into their country and the [[Representational State Transfer (REST)|rest]] of the ID field in our NOAA station list. We see that the first two characters of the station ID represent the country code. To split it into two pieces, let's do this once by splitting it at position two, through the split column option. We'll choose two and we're going to split it as far left as possible once. This gives us the country code for our station ID that we can then use to perhaps filter or focus on a specific country. Merging our combining columns works the opposite of splitting the on a high level. Let's revisit our PDF query, where we obtain the weather data by day. Let's first rename the year, month, and day fields in the first three columns so they're easier to read. Right now, each character is on a separate line because of the way the PDF formatted the year, month, and day labels. So let's simply rename them so they are consecutive characters in the string. Notice that we don't have the date in our PDF data. We do, however, have the columns for the year, the month, and the day. Let's combine them together to create a date.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=96)** To do so let's try out the merge functionality and the transformation options for these three fields. Before we combine them though, let's order them so that the month comes first, followed by the day, and then the year. We'll then select all three of these newly ordered fields at the same time and combine them together using the merge functionality and the transformation ribbon. We'll select merge columns. We'll then use a separator of custom in the form of a forward slash, with a new column named "Date". We can then convert this into a date data type. Now sometimes this merge functionality doesn't work because the data types between the merge fields don't agree. If that's the case, we can use the text concatenation formula to combine them. Let's go to the step before we merged the columns together and we will add a new column. Now we want to insert it before we merge them, because once we merge the columns, we don't have access to them anymore. We'll call this "Date Concatenation". We'll then use the function "Text dot from" to convert any of these numeric fields into text values. We'll do so for the month. After that let's add a forward slash by concatenating into the string with an ampersand. We'll then select "Okay" to see if this works. We'll then reopen our column and add the rest of the terms.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=193)** We'll again use "Text dot from" for the day, followed by another forward slash and ampersand. And then finally we'll add "Text up from" for the year. Now we can check that it picks up the data types correctly by converting it into a date field. And we don't see any of it air out. So we have two options for creating a date field, and we can see them both at the opposite ends of this table. Now, this isn't the only way to create dates, and there's actually built-in date formulas. Later in this course we'll explore more specific date functions we can use as alternatives. But the "Text of from" function and concatenation formulas as well as splitting them, do have a lot of examples and we can see some of them here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** pdf (3), noaa (2)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - we (1)

#### [Text formulas](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=0)** - [Instructor] Text formulas are incredibly helpful because they enable us to extract or combine sections of a string. For example, we can take the leftmost end characters in a string, the rightmost end characters, the middle end characters starting at M, and add end placeholder characters to the text string M. Text formulas in [[Microsoft Power Query|Power Query]] let us create text expressions. We can use these expressions in columns, and we can also use them to create values by themselves. Let's create a new blank query to see how this works with the classic US zip code problem. Zip codes in the US are five digits long. They can start with any digit from zero to nine. However, if they start with zero, this first digit doesn't appear in the zip code, especially if we or someone else converted it into a number at some point. Let's say we have zip code 01002 represented as the value 1002. This line apply the function Text.Padstart around this number. We'll then apply to the first number we want to specify what we want to use as our placeholder, which in this case is a zero as a character. And finally, the length of the text, which is five characters long when we input zero as a character. We need to make sure to set this, and we see that it doesn't work. We run into this error message here
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=94)** because we're trying to pad the text chart of a numeric value instead of text. We can convert this using the function text.from, which is an incredibly useful formula that I use frequently. So let's first make sure this works. So we'll then add Text.Padstart for zero and again for five digits. And actually for this, this is where we want to take a look at the function parameters. We want to put our number of characters in first, followed by the padding that we want to use. You now see an updated zip code value with five digits that we can use as labels in a data model and so on. In our METAR data, we have a UTC time, but it's displayed as a kind of strange looking string. Let's preserve this label for the UTC string so we can reference it later. But we want to pull the date and time elements from it, which occur at the same position in each of the values in this column. I typically like to preserve columns where I can, because then it makes it easier to reference them later if I need to. The first digits in the character string for this UTC field, which we'll rename here, these represent the day.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=187)** To get this value, let's use the function Text.Start to pull the first two leftmost characters from the string.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=199)** Next, let's get the UTC hour within this same column, by using the function Text.Middle. It will start at... Again, select UTC. It will start at position two and extend for two places. It's important to note here that we're starting at position two, even though it is position three that the hour starts at 'cause Power Query uses a zero based index. Lastly, let's extract the minute, again, using the text middle function.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=238)** We'll move it over two positions, so it starts at four, and again, it's two characters. Lastly, let's convert all of these fields into numbers as whole numbers. Notice that we don't have the UTC year and month, at least we don't yet. We'll come back and visit this query shortly in this course when we focus on dates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (2)
> **Env Vars:** utc (6), metar (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Filtering or removing duplicates](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=0)** - [Instructor] We can apply filtering on our data tables for conditions like a text string contains learn, a number is greater than zero and less than or equal to 1,000, and a date occurs between January 1st and June 30th. In our Daily Weather table, let's filter Column 3, which contains the data types, so that we see the temperatures. If we expand the dropdown, we see that it only loads the values for the first 1,000 rows. Now, we can see more, and there won't be more than 1,000 data types, but it will look at more than 1,000 of the top rows. We can then filter these conditions to only take the maximum temperature, TMAX, its converse minimum counterpart, and the average temperature, TAVG. Now, when we look at what the Filtered Rows step does, we see that it takes the Table.SelectRows function and applies it to the table so that each of the Column 3 values has to equal one of these three data types. We can also use conditions for filtering. Let's do so on the NOAA station's table. Let's first filter the station ID. We're going to look for 23174. Now, we can say it contains. Now, this returns three potential matches.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=97)** The one that we're interested is in California. However, one problem we see here, which is why filtering data to segment it and slice it to understand what's going on is an important part of the process, is because we're picking up the Los Angeles airport instead of Santa Barbara. Now, let's get what the Santa Barbara airport is. We can remove the filter step, and this time we'll apply the filter for the text fields saying contains. And we'll say Santa Barbara. Now, this returns an empty table, and the reason is because capitalization is actually important here, so it's not going to take these lowercase letters and convert them. Instead, I have to explicitly put those into the formula. So I ran it on the station that I want to use, the Santa Barbara Municipal Airport. So once I have the station matching, I'm going to copy the station ID and update the Daily Weather query to make sure that it matches the location that I want to use. Notice how when we update the data, when we refresh it to use the other station ID, the [[Representational State Transfer (REST)|rest]] of the steps repeat and we see the filtered data step run on the refreshed data table. Let's also filter by dates. So we need to make sure, in order to do this,
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=190)** that we have a date field. So if I change the dates in Column 2, notice we see an error, and the reason is because we already changed the dates earlier. Instead, we have to do it in an earlier step. And we'll choose to insert by replacing the current step. Now, we want to rename this field, Date, to avoid confusion.
>
> **[3:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=219)** And I am going to say that I want the dates to be after the 1st of January, 2022. Now, when we open this up, we actually see more options. I'm going to choose after or equal to, so it includes January 1st. Lastly, let's apply filters for the latitude and longitude coordinates so we can see the stations that are around the Santa Barbara airport.
>
> **[4:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=254)** We're going to remove the Filtered Rows step when we filter the station name and instead filter it by latitude and longitude. Our latitude is going to be greater than or equal to 34 and less than or equal to 35, and our longitude, we'll again use the Between option, is going to be greater than or equal to 119. You actually want to switch these because they go the other way.
>
> **[4:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=293)** So we see our Santa Barbara airport, and we also see all the stations nearby. Now, filtering is a very useful transformation function, and we'll continue to explore it throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** tmax (1), tavg (1), noaa (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Filling up and filling down](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=0)** - [Instructor] We might see empty values in our data table. Sometimes we can filter them out, but that's not always the case. There are a few different ways we can mitigate this problem. One is by filling in the blank rows with the value in the previous or the next row. Let's explore a few examples of this in two existing queries that I put together. We often see these type of formats in PivotTables in [[Microsoft Excel|Excel]], for example. I want to put the year in the first column so that it extends down until we see the next year start. To do this, we right-click on the Year column, and we'll choose Fill, Down. So notice this doesn't do anything, and the reason is we can't Fill, Down if they're empty or blank cells. Instead, they have to display Null. So we'll go to our Changed Type step. Change this to Whole Number. We'll choose to insert it. And we now see the year extend down the entire column with their respective months within the year. We can also Fill, Up as well. In this case, we do the same thing where we right-click on the year, and we'll choose Fill, Up instead. These are two ways to mitigate problems with empty values that are very helpful when we need them as part of our transformation process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** right-click (2), go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Transforming numerical fields](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=0)** - [Instructor] We can perform numeric calculations on numbers, which include operations, like addition or subtraction and multiplication or division, as well as other calculations like absolute values, exponents, logarithms, rounding, and many more. So far, we filtered down the Santa Barbara weather to display the temperatures since the 1st of January of 2022. If we look at column four, we see that these don't look like temperatures; they're extraordinarily hot, so let's rename this Value, and we're going to modify it. We'll call it Temperature actually, and then we're going to call a column next to it Datatype. Now we can add a new column for our temperature calculations. We can, however, take the column and perform calculations on it in place, much like we saw with the text transformations earlier in this chapter. We'll first highlight the Temperature column. We can see some of these options if we right click on it and look at the transformation options available. There are more of them though if we choose our column and go into the standard options. We'll first divide it by 10 so that we have one decimal place in this number. Now this gives us the calculation in Celsius. Now, in order to convert to Fahrenheit, we first need to take this column and we're going to again,
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=95)** apply a calculation to it. This time we're going to multiply it by 1.8, and we'll then add 32 to it.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=109)** Here we see our Fahrenheit temperatures, however, we've got two decimal places, and we want to kind of see them in whole numbers so they make a lot more sense to read. I'm going to move this column to the beginning so we can see all the options in it, and then right-click on it again and we'll choose to round it. We can round up or down. I'm going to just round it to the nearest whole number. We'll input zero decimal places, and notice this transforms it in place. So we see how the transformations work; some of them add new columns, and some of them perform the transformation on a column that we already have. Let's then rename this Temperature F, and I'm going to delete the other columns because I don't need them anymore.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), right-click (1)
> **CLI Commands:** make (1)
> **Versions:** 1.8 (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a new column](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=5)** - [Instructor] Ready for your next challenge? Using our original Santa Barbara Employment data, your challenge is to add a new column, Month, to the existing data table. Make sure this column returns the actual month numbers from numbers 1 through 12. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Add a new column](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=0)** - [Narrator] There are a couple ways to solve this problem, but here's how I did it. I first examined the table structure to figure out what fields would be useful to find the dates. For example, we could select the period or the month name to use as references to calculate the month number. I'm going to use the period field and extract the last two characters in it to find the actual month number. I'll add a new column to this table that I'll call Month. I'll then say Text.End. I'll then refer to period and I want the right two most characters, so I'll put a two in the second parameter. Now we see this returns 11, so it matches November. 10 matches October, and so on. While we're at it, let's also convert this new month field into a whole number. Like we can see on line 12, we can filter out the annual numbers by either removing month 13 from our month column, or we can remove the annual value from the month name. I'm going to choose the latter option and deselect annual from the month name. There we have it. We've created a new month field. Now where will this come in handy? We'll explore this in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Working with Dates and Times

[↑ Back to Table of Contents](#table-of-contents)

#### [Dates functions](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=0)** - [Tutor] Understanding and using date functions effectively within [[Microsoft Power BI|Power BI]] and within [[Microsoft Power Query|Power Query]] can make a huge impact on our modeling process. We can use dates to build other parts of the EDL framework as dimensions for aggregating our data, and with many different calculations. Date function categories include Dates, DateTimes, DateTimeZones, Time, and Duration. Power Query has thorough documentation on these date functions and much more. We can see the function groups if we scroll down in the Functions overview list. We're going to cover a few key ways to use these functions, but I encourage you to explore more of them on your own to see if there are other functions that you find useful to your own work. We're going to focus mostly on date functions first. We can create a date using the #date function, which will set up in a new blank query. If we hit Enter before entering our parameters into the date function, we see what the required parameters look like. This function requires us to input the year, month, and day in order to get our date. We can also input it directly in the query editor. This function requires us to input the year, month, and day, in that specific order, within the expression to return a date.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=93)** The date needs to be an actual date. If it's out of range of those dates, we'll see an error message. We already saw these date formulas behind the scenes when we set up filters on our weather data.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=114)** Notice how Power Query compares each of the values in this date field to the date evaluated within the date expression for this filter. We can also use the date function on an entire field or several fields. In the PDF query, we have separate fields for the year, month, and day. We can use this to create a new Date column containing these dates. We'll input them in that order within the function. We had an error message here, and it's not because the field names look odd because each letter's on a different line. Instead, we need to convert each of the input parameters in the date function into integers. If we look at the fields themselves, we see that Month and Day are already integers, but Year is not. We'll add the function Number.From around the first parameter for the year. We can use the function Number.From to convert any of our inputs in the formula, and we can also use them to convert dates entirely. For example, we can do (2023, 1, 16), for example, and if we put Number.From around it,
>
> **[3:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=209)** this returns a serial number representing the date. We can conversely convert this serial number into a date using the Date.From function. These are useful functions to have on hand for doing calculations in Power Query that involve converting dates back and forth between numeric values in order to work in certain ETL frameworks or formulas. Once we get our date into its appropriate date datatype, we can then use it in other formulas. For example, in the daily weather, let's add a new column that consolidates all the dates along each month and each year within the date column. Call this Month-Year. And we'll use Date.StartOfMonth. Actually, we'll start with the end. And we'll input our existing Date field as the input parameter. This gives us a date at the end of the month. To move it to the beginning of the month, let's use the analogous StartOfMonth function on the same date. The Date function doesn't have to return a date either. We can use the Date function's .Year and .Days and .Month to return values that are integers instead of dates.
>
> **[5:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=309)** Date formulas can even return text. Two of the most useful ones that I use all the time are the Date.MonthName formula, which returns the full month name; and I also use Date.WeekdayName, which returns the full weekday name of each date. And actually this one is Date.DayOfWeekName.
>
> **[5:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=342)** If we use the function Date.Weekday, it's important to note that it starts at 0 and goes through 6, which is different from [[Microsoft Excel|Excel]], which starts at 1 and goes through 7. And this one is also the day of the week. We can also see here how the IntelliSense for these functions helps us figure out the date function that we want to use. And while Excel is on our mind, how do we calculate the time now and the date today? Let's calculate the equivalent of now in Excel using the DateTime.FixedLocalNow function, which doesn't take any input parameters. We'll do this as a new function. This returns the local date and time wherever you or your computer is located, which in my case is in Southern California. We can compare it to the equivalent for the UTC current DateTime by swapping out Local with UTC in this expression.
>
> **[6:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=413)** And we're going to include the time zone here. To get the local date, let's revert it back to the local time first. We then need to get the date of this DateTime, which we can do by nesting it in the function DateTime.Date. This gives us the local date wherever in the world we are. Of course, this isn't the same for everyone, and those of you working across different time zones have certainly learned this the hard way. We'll talk more about how to deal with DateTimes, and potentially time zone problems, later in this chapter, though.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (4), [[Microsoft Excel|Excel]] (3), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** utc (2), edl (1), pdf (1), etl (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (2)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [tutor] (1)

#### [Creating a dates table](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=0)** - [Instructor] Today, calendar tables are immensely useful in [[Microsoft Power BI|Power BI]] because we can use them as dimension tables in our model to connect data tables together and perform calculations. First, though, we need a dates table with contiguous dates in it. If you don't have one already, here's how we can make one using M code and date functions that we learned in the last video, We'll first use so by creating a new query with the list function List.Dates. This function has three parameters, the start date, the number of periods, and the duration that each period lasts. We first need to input the start date, which we can do with the help of the date function. We're going to set this equal to 2022, 1, 1. Now let's set up this function to get the next 10 years of dates, which we'll input as 365 multiplied by 10. Lastly, we need to specify the duration, which we can do with the duration function. The first input for this is the days, and we want one day between each of them, followed by three zeros. If we look at this list, and we reverse the items, we see that we're a few days short of the end of the year 2031. This occurs because between these two dates, there are two leap years, so we're two days short. Next, let's convert this list into a table object directly in the List Transformation Options.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=94)** We'll select no delimiters. We'll also change this data type to Date, and we'll rename it Date as well. Let's call this first query Dates 1. This List.Dates function is quite neat, and it really helps us create a dates table that we can use quickly. However, we see that we're still a few days short. Accounting for leap years can be quite painful in a lot of time series calculations, even for those who have done it for a long time. We can, however, add a step where we calculate the difference between the dates, or we can try an alternative approach using another list formula. We'll first create a new query, and we'll set it equal to a list with values between one and 10 as placeholders for now. This creates a list object we can then convert into a table. We'll again rename the column Date, and we'll change the data type into a Date as well. Let's rename it Dates 2 before we get any farther. This returns a table of 10 dates from over 100 years ago. However, if we adjust the start and end values by replacing the 1 and the 10 in the list objects with date values, we can create a dates table that's useful for us. Let's replace 1 with the date function, starting on the first of year of 2022,
>
> **[3:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=191)** and we'll replace 10 with the date function from 2031, 12, 31, so the end of December. However, our entire query now errors out because these are dates, not numbers. To convert these values into numbers, we can use the Number.From function and put them in front of both of our date calculations.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=224)** So once we've nested these formulas, let's see what we get. We can also make this formula dynamic so it updates every day, if we would like. To do so, there's a few different ways we can do this. We could use DateTime.Date, DateTimeZone.FixedUtcNow.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=256)** Now we see it goes through the latest UTC date, but it doesn't go after that. Once we build a date table like this, we can continue to add columns to it, like the year, month, weekday, start of week, and so on. It's very helpful to have these dates tables because they're game changers in our modeling process. Once we create these dates queries, let's save this entire file as Dates.pbix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** utc (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Working with different time zones](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=0)** - [Instructor] We're all spread out all across the world in many time zones depending on where we live. This means it might be 5 p.m. where you are right now and someone else might live 12 hours ahead. To standardize dates and times across the world, we can normalize the date times to UTC or what's formally known as coordinated universal time. We can create date time values with the function date time. We see its first three inputs are year, month, and day, like the date function. After that, we input the hour, minute, and second. Notice that it doesn't have a time zone in this function. We can add a time zone using another function, hashtag date time zone, where the last two parameters represent the hours relative to UTC and the minutes. Let's use negative eight for the Pacific time. Next, let's create a date time zone list for these date time zones using the list function that supports this functionality. We'll start it on March 9th, 2024 at midnight Pacific time,
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=75)** which is negative eight hours behind UTC. We'll extend this out three days, which is three times 24 hours. And lastly, for our duration, we're going to input zero days, one hour and one hour between each one of these date time zones. However, as we go down the list, we might notice there's actually a problem with the way that we've set up this function, and it doesn't have anything to do with [[Microsoft Power Query|power query]]. The time zone changes from Pacific Standard Time on March 9th where it's eight hours behind and on 1 a.m.that day it goes forward an hour, so it's now seven hours behind UTC. Our date time zone function doesn't account for this. It uses the same time zone across all these hourly measurements. Instead, I've brought the date times in using an R script that we explored earlier that accounts for the change in time zone using the Lubridate R package. I started it on March 9th at 12 a.m. UTC, and we scroll down and we see the date times for both UTC and Pacific, so we can see the time zones changed in our table. Let's add another column for the time zone difference. We'll take the Pacific field and we'll subtract UTC from it. We'll then convert this into a duration data type.
>
> **[2:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=172)** Notice it now displays negative eight on the first day when we have these measurements. However, as we scroll down, we see when the time zone changes from being negative eight hours behind UTC to negative seven. Once we have this conversion stored in a date timetable like this, we can use it in modeling without having to worry about dealing with time zone changes, because we'll just convert everything to UTC in our data and then when we want to view it in local Pacific time, we can change that where we need to. Having a date timetable like this is a game changer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** utc (9)
> **UI Navigation:** scroll down (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a Date field](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=5)** - [Narrator] Let's do our final challenge. It would probably be helpful to have an actual date field in our data table. Your challenge is to add a new date field that references the month field we calculated previously. You want to make sure the day and the date is on the last day of each respective month. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Add a Date field](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=0)** - [Narrator] So how was your last challenge? Let's put that month field into good use by using it in a date formula. We don't have the day of the month at all, but we can instead use the placeholder day one inside the #date function. We'll create a new date field to reference the date formula. Inside the function, we'll reference the year, in the first parameter, followed by the month number, the month field in the second parameter, and we'll put a one in the third and final parameter to represent the first day of this respective month. Once we confirm this formula returns date values, let's then nest it inside the function Date.EndofMonth to move each of these new rows dates to the end of their respective month. We can also change the data type of our new date field. Lastly, we don't need the year, period, month name, and month in our table anymore, because the new date field represents these values. Finally, let's reorder the column, because I prefer the date field to come before its respective values. So if you did a different approach, that's great too. Part of the fun of [[Data Modeling]]
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=93)** is that there's rarely just one solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Modeling]] (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Data Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using conditional functions](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=0)** - [Instructor] We can add rules-based logic to our data models using functionalities like conditional columns. The high-level logic of the conditional formula says that if condition one is met, then we return this result. Otherwise, if condition two is met, we return another result and so on. If none of the above conditions are met, then we return this alternative result. When we apply this logic to [[Microsoft Power Query|power query]] conditional formulas, these sections of the diagram match to our if then, else if then and so on until our final alternative catch all result of else. Like other formulas in Power Query, it's also case sensitive, so we need to write them out in lowercase letter clauses if we create conditional formulas manually. If we take a closer look at our hourly weather measurements for Santa Barbara that we obtained through the METAR API, the UTC date timestamp contains only the day, hour, and minute of the measurement. Earlier in this course, we used text formulas to extract the day, hour, and minute from these timestamps. However, the timestamp doesn't contain the year and month that we can create a complete UTC timestamp web that we can then link up with our date time table. To start, I calculated the UTC of today. What this does is it takes the current local fixed UTC and it gets the date from it.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=94)** So at the time of recording, this is January 12th, 2024. Now remembering that we don't have the year or the day, if we scroll down into this data, we see that in some scenarios the day is actually after the current date if we use the current month as our month reference. So instead we need to move this back to the previous month. To do so, I have a formula for the UTC of last month by moving it back a single month. I moved everything to the start of the month and then I moved it back because there are months that may not appear in the previous month and this will air out. So to account for that, I use the first of every month. I've then calculated the day of the UTC today. So this is where the fun starts. We want to move back to the previous month for the days in which we want to use the previous month's measurements for our UTC date timestamp. So we want to have first condition to account for this in our year. I'll select the last step and choose to add the conditional column. Now, the conditional column dialogue box enables us to choose the column and the operator and the value. However it's limiting.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=187)** We can't directly add a formula in here. So instead of using this, I'm going to create the formulas myself as a custom column. I'm going to first calculate the year. Well, this is going to say that if the day of our timestamp is less than or equal to the UTC current day, then we're going to use the year of the current UTC month. Now, if this isn't true, then we're going to use the year of the previous month as UTC last month. Now let's repeat this logic to add the month. Again, we'll say that if the day of the current date timestamp that came in through the METAR data is less than this fixed point we're using for the current UTC, and again, yours will look different, but you can still apply this formula. Then we're going to use the year of this month.
>
> **[4:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=276)** Otherwise, we'll use the year of last month.
>
> **[4:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=286)** And we want to make sure that we have our if then else syntax here. And I want to make sure that I'm using the month for both of these.
>
> **[5:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=311)** Now let's check our results. If we scroll down toward the bottom of the table, we see that when we're looking at data from the previous month, it references the previous year that we see here in our current data setup. We're looking at the year of the previous month, and then we're also looking at the month, as well. January is a great example for this because we have to rule back both the year and the month. Once we calculate this, I'm going to change the data types.
>
> **[5:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=345)** And lastly, I'm going to add a column to get the UTC date time for METAR. I can take those new fields that I've put together, the year, the month, and then the day, hour and minute that I already calculated in this model. I want to make sure that I use zero for the seconds because I don't have that measurement otherwise. So once I set my date time, there we have it. This is how we can use conditional logic for a real world problem like this, which is otherwise quite difficult to solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (2)
> **Env Vars:** utc (12), metar (3), api (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), select the (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Transposing tables](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=0)** - [Instructor] Transposing is an incredibly useful transformation functionality that enables us to change a data table's orientation by switching its rows and columns. In a live weather connection to an [[HTML]] page storing the Santa Barbara live weather, notice the orientation of the data table. It's also important to note that your view may look different from mine if you update the data to use the latest weather measurements. The labels for the latest measurements display as the rows in column one, while the values associated with these rows appear in column two. Let's put our rows into the column headers by transposing our entire table through the transpose options in the transform ribbon. Notice how we don't see our original column names, column one and column two and the transpose table. We would expect to see them in the rows for column one. We can then promote our first row as headers to create a data table with a single row in many columns or fields representing the data measurements. I also included another data table example to test out transposing with. We see the years in the column headers along the top and the labels A, B, and C in the rows for the category. Let's perform the same steps we did with the weather measurements to transpose the table. Notice, however, that we're completely missing the years that were originally in the headers
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=93)** that we wanted to put in the first column of the table. So let's remove the transpose step in this query for now. To mitigate this issue, let's first demote the headers into the first row by choosing this option from the same menu as the options for promoting the header. We'll click on the dropdown menu and we'll say use headers as first row. We now see generic column names based on their position from left to right, from column one to column six in their order. Now let's transpose the table again. We now see the years in the first column of our table. Once we have the table transformed the way we want, let's promote the first row as headers, and we'll also change the name of the category field into years to represent its newly changed shape. These types of transformations are quite useful in tables like [[Financial Statements]] summaries, where we often see the dates across the top and the labels within them in the rows in the first column. Once we transpose our data table, we can then continue on with any other transformation steps we want to include. For example, we might want to split the dew point field in our HTML latest weather measurements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Financial Statements]] (1)
> **Env Vars:** html (2)
> **UI Navigation:** click on (1), dropdown (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Grouping fields and values](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=0)** - [Instructor] Grouping allows us to aggregate fields based on other dimensions in the table. Let's say we want to aggregate our daily weather data for Santa Barbara by their average high temperatures. Let's first filter the data type field to only the TMAX rows. In our data table, we also have a field for the month and year, which gives us the first date in any month. Let's use this as our dimension that we're grouping by. We'll select the field and choose the grouping options from the Transform menu. In the dialogue box that opens, we'll then choose to average the temperature field as the aggregation by the month and year field. We'll give this new column the name, Average High Temperature. This returns a table with two columns. The first one is the date dimension that we're aggregating over, and the second is the average high temperature for each of these month and year combination labels. In the formula bar, we see that grouping involves the function, Table.Group, first, using the month, year field as the dimension, and then using the list of average function to average the values across all the rows in the group date dimension. Let's also explore more advanced options here for the grouping by reopening it again in our applied steps. We'll first choose the Advanced options. Next, let's remove the existing date field and instead use the year field and the month name field instead.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=97)** Let's also add another field to the aggregations by calculating the highest temperature in each year and month. Once we confirm these updates, we see our group table now has four columns. The year and the month name are two dimensions, while the average high temperature and the maximum high temperature are two aggregated numbers across these dimensions. Another neat trick that we can do in grouping is to aggregate the values, but also maintain the existing data points within the grouping options. We'll again, reopen the group to row step. Let's then add another aggregation to the bottom of the configuration window. We'll call this new field, Data, and we'll choose to include all rows as its operation. Notice, we now can't select a column, and we'll see why in a moment. Once we confirm our new grouping options, we see this new field appear as a new column on the far right of the table containing table objects. Each one of these tables represents all the rows within the year and month dimensions that we see on the left of the table if we drill into them. Once we navigate back to the aggregated view, we can transform this column in the same way we would for other table objects that we saw earlier in our connection examples. Let's expand these rows to include everything except the fields of the year and the month that are already in the aggregated table. The number of rows in the expanded table are the same
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=192)** as the number of rows we started with before grouping them. We now, however, have aggregated values along the dimensions that we group them over. From here, we can continue our calculations like comparing the maximum and average high temperatures to their more granular, daily high temperature counterparts. Grouping enables us to access some calculations we could not otherwise do in [[Microsoft Power Query|Power Query]] as we see here. For large data tables, grouping helps us improve the efficiency and performance of the table, even though we might lose some granularity for some of the details along the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** tmax (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Merging and appending data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=0)** - [Instructor] Now let's explore two more functionalities for combining two tables into one table. The first is merging, which is where we take an existing table and combine it with another along a common key that they share in a horizontal combination. We can see how these tables combine using a left join along the key field. This adds the related category fields to the combined data table. Appending data, on the other hand, involves matching up the matching column names vertically, like we're stacking them on top of one another. We see how this combines them together in a table with the same amount of columns, but more rows because we're stacking the rows on top of one another. Let's first explore merging options in [[Microsoft Power BI|Power BI]]. We'll merge the METAR API, which contains the hourly weather data measurements with the date times states table we created with an R script. We're doing this so we can obtain the Pacific date time for each of our measurements at the Santa Barbara airport. We'll choose to merge along the hourly weather data to add the Pacific date time for each of the UTC times to the table. To make it a bit less cluttered, we're going to remove some of the columns that we don't need. Also going to rename two of them into Station ID and METAR String. We'll select the UCC Datetime column.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=96)** We'll then choose Merge Queries from the top ribbon. In the merge dialogue box we'll choose to use the UTC Datetime field. We'll then choose the Datetimes and the UTC field. We'll make it Organizational security for both. We can choose the join kind that we want to use. I would choose either the left outer or the inner, much like we see in [[SQL]] queries. The relationship between the [[Metadata]] UTC Datetime and the date times key is one-to-one. So we see that we have the same number of matches 129 for both of them. Once we merch the data, after we confirm our choices, it then displays the data, or in this case the matching Datetimes, as table objects in a new column. We can expand them so they display across all the rows in the merge data table. We'll choose to just display Pacific because we already have the UTC datetime. Next, let's explore appending two tables together. We're working with Santa Barbara temperatures. Let's also compare this to Los Angeles temperatures by taking the weather measurements at LAX. To do so, I'll add Santa Barbara to the end of the daily weather query, and let's remove any of the transformations
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=193)** that we don't necessarily want to keep. In this case,
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=207)** I just want the temperature, the data type, the date, and then the station name or the station ID. Let's then duplicate the daily weather data, and I'll denote it as LAX in the query name. Then change it to 23174 to 23174 in the URL link that we're connecting to. We know that these tables have the same columns because all we did was change the ID after we duplicated them. We didn't change any of the table structure or ETL framework along the way. We can then choose either one of these tables to append them together. In the dropdown menu lets append the queries as a new query. We'll then choose the individual tables. We can combine more than two together, but we're just going to append two.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=273)** This creates a combined data table. We can tell which location is which by the station ID in our new combined table. I would recommend exercising caution, though, when merging fields as this isn't a strength of Power BI. It's however, a strength of SQL as we'll explore in the next chapter. Merging the data flattens it, and we want to keep an eye on the performance of Power BI if we should explore options other than merging it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3), [[SQL]] (2), [[Metadata]] (1)
> **Env Vars:** utc (5), metar (2), sql (2), lax (2), api (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1), dropdown (1)
> **Cross-References:** in the next (1)
> **Analogies:** compare this to (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Pivoting and unpivoting data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=0)** - [Instructor] Let's say that we have a table of data that we're looking to summarize. It has Year, Category, and Revenue as three individual fields. We can create a PivotTable to summarize the total sales by category in the rows and the year in the columns. Notice how much easier it is to read this way. Pivoting is different from grouping because it enables us to put a field as the column header names while grouping aggregates based on the rows. Although we can have multiple aggregations even of the same fields in the rows too. Unpivoting the data reverses this pivot aggregation, but it's not the same thing as the original data table. For example, when we pivot our data table, we keep the revenue aggregations because we lost this granularity when we originally pivoted it. In our daily weather data for Santa Barbara, let's remove the columns we don't need, so we only have three of them. This leaves us with the Date column, the Datatype, and the Temperatures. It's helpful to remove columns we don't otherwise want to use before the pivoting transformation, so it doesn't accidentally cause duplications along the way. In our Datatype column, when we expand it, notice we see it has TMAX and TMIN. We want these to be individual headers in the top of the table. We'll choose to pivot the Datatype column, which we do in the Transform menu.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=95)** We'll then want to select the values that we want to display in the columns when we pivot it. So, in other words, the data type, the temperature maximum, and temperature minimum will be the column header names, and will have the values for the temperatures within their rows. In the Advanced option, we can choose to calculate the average of the values field. It doesn't matter what aggregation we use here because for each date, we only have one measurement of the TMAX value and one of the TMIN. The average and sum will return the same results. But in the interest of consistency, we don't want to necessarily sum temperatures if there was a duplicate of the data, So instead, we'll choose an average calculation. This creates a summary that's easy for us to view, where we can see the date and the respective high temperature and low temperature for each date. Let's rename TMAX, High Temperature, and TMIN, Low Temperature. Now let's see what this looks like if we show the PivotTable across the months instead of the dates. I'm going to leave the month name in here
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=176)** and we'll open the Pivot Column step again, and this time we'll remove the date. We want to do that before we pivot it. And don't worry, we're going to add them back again shortly. Now, when we see the PivotTable, we see that it only contains 12 rows, one for each month in the calendar year. We could always sort the rows by their month number, but we see how it aggregates the average temperature along the month names now instead of the dates.
>
> **[3:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=223)** Next, let's duplicate this query and unpivot it as a separate example. I will denote this as unpivoted.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=238)** Unpivoting data is one of my favorite tricks in [[Microsoft Power Query|Power Query]] because it can save so much time. Let's unpivot the table we just pivoted to display it in the same format as the original data table, but with different attribute labels, high temperature and low temperature, instead of their acronyms. There are different ways we can unpivot data, but I find it quite useful to use the columns we want to keep the same as the reference points. In this case, we have the Station ID, the Date, and the Month Name as the fields that we want to remain as the backbone of our unpivoted data. I take this approach for unpivoting data because we often see column headers change or expand in their number over time, especially with time series data, so it's helpful not to hard code the columns that we're unpivoting, instead choose the ones that we're keeping the same. Let's right click on these column headers and we'll choose Unpivot Other Columns. Notice that we now have new column headers that have generic names for the attribute and the value. Let's rename them Category and Temperature to be more specific and avoid confusion later. Unpivoting the data in this case is the reverse of the pivoting process because we only have one high temperature and low temperature measurement for each month. However, that's not the case in a lot of examples. Depending on how we aggregate our data, we often lose the granularity when we pivot it
>
> **[5:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=331)** and we want to think about how we want to use the data before we make that decision.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** tmax (3), tmin (3)
> **UI Navigation:** select the (1), open the (1), click on (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parameters](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=0)** - [Instructor] Parameters are query objects that return a single self-contained value. They minimize reliance on outside files. We can also use them in multiple queries within [[Microsoft Power Query|Power Query]] at the same time. The term parameterized queries or functions involves passing the parameters into something else. First, though, we need to set up the parameters to use. We access our parameters through the Parameters menu in the top ribbon. In the Home tab, we'll select the dropdown menu. We'll choose to create a new parameter. Let's first create a new parameter for the station ID with a suponomous name. We'll set as a text data type, and we're setting it here as a text data type because that's the data type of the field in the existing daily weather query. And the second dropdown will say that it can take any type of value. We can then set the default value of the station ID to Santa Barbara from the newest station list that we already set up in our connection. So it's going to be the same as the station ID that we see in the field behind the managed parameters box. For the parameter description, let's add details that we're getting the default station ID from the NOAA station list, and we're going to pass it into the URL if they need to get access to it. We'll say the default station ID is for Santa Barbara Airport.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=99)** Once we load the parameter, we see it creates a new query, which is denoted by the parameter icon. Now we can use this parameter in other queries. Let's go into our query where we connect you the live weather data from the zip file on the NOAA website. We'll go to the source step and we'll take out the station ID right before .csv.gz and after the last forward slash. To put the parameter in, we'll make sure that we close the quotations around it. Between these two text strings, let's put in two ampersands. I'm going to add some spaces to them so they're a bit easier to see. We'll then input our station ID, which we can pass into this formula like a variable. Now let's check that it works. Once our query updates, we see it returns the same result. If we change it to the LAX station ID instead though, the query changes again completely. We'll just replace nine zero with seven four at the end. So we see updating the parameter updates the daily weather query as well. We can access our parameter through the edit parameter option in the parameter settings. However, this just enables us to change the input that's passed into the parameters. We'll change it back to Santa Barbara.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=199)** We can however, edit it through the option for managing the parameters. Let's also add another parameter for the date. We'll choose new parameter, and I'm going to call this start date. For the suggested options, I'm going to choose a date data type, and the current value is going to be the default option we currently have already selected, so let's use 1/1/2022. Once we create this new parameter, let's apply it in our queries. If we go into our daily weather query, we filtered our date so that we had a date on or after the 1st of January of the year 2022. We'll swap it out here. And we're going to instead input our start date, which is the parameter referencing the start date input. Now let's change it to another date. I'm going to say 2024, and we'll navigate back to our weather data. Now we see it's applied the filter for the start date based on the input. The query picks it up and we see it in our final result. We can convert the parameters back to normal queries by right clicking on them and choosing convert to query.
>
> **[4:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=292)** This converts it into a value that's then passed into the daily weather in this case. Update my start value again, and we see that this updates our daily weather query for Santa Barbara again. So we see how to change these parameters into other queries like values. It's also important to note that if we plan an uploading it to [[Microsoft Power BI|Power BI]] Pro or another service account, we can't change the parameters once we publish the report.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** noaa (2), url (1), lax (1)
> **UI Navigation:** dropdown (2), select the (1), go to (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Exercise Files:** zip file (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Custom functions](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=0)** - [Instructor] On a high level in programming function store a series of steps that we're repeating over many times. Functions typically take one or more input parameters and return a result. Like, many other facets of [[Microsoft Power BI|Power BI]] and [[Microsoft Power Query|Power Query]], we can let the application do a lot of the work for us by tapping into built-in functionalities. Let's explore how to set up a function by using an example where Power Query automatically writes the functions for us. Let's connect to a folder of CSV files.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=40)** Once we make this folder connection, we see the [[Metadata]] for this folder displayed in the columns. However, we don't see the actual data. This folder option gives us an option of combining and transforming our data. Let's choose this option to see what Power Query generates for us. Now, it's worth noting that we're using a CSV connection specifically for this, and I've identified that beforehand. So let's choose one of the CSV files to use as a way to test out how the query works. This isn't the only way to connect to CSV files, but it's definitely one way to explore how to get functions to work within Power Query. Let's confirm this selection to see what we get. Now notice we have a lot more queries all of a sudden. Now if we go into our files, I'm going to take the Source step and I'm going to filter out everything that is not a CSV. So I'll just select the CSV from this dropdown. So now we see a combined data table that includes the column headers and the values within them.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=125)** We can see what function Power Query wrote for us. If we go into the step for invoke the custom function, we see it uses the function Transform File, so we'll select it. We can see there's an FX next to it. Now, one way we can invoke a function is by passing a parameter into it, which is what this function does. There are a number of other components in this query. Let's see what it looks like by choosing the advanced editor. So, now we see the structure for creating a function within Power Query. We see that it uses the let syntax and it passes parameter one into the function. We then use this parameter one to read the file, promote the headers, and then each one of these files is passed in and the transformations performed. We can then see how this integrates with the [[Representational State Transfer (REST)|rest]] of the steps within the query. The functions invoked in one step and there are still many other transformations that occur along the way. So this function enables us to pass in a binary object, which in this case is a CSV file, into the function, it does something in the function and it returns a clean CSV result that we then integrate into our data sources and we combine all of those query outcomes together for each of the individual files. Let's create a custom function on our own. To do so, we're going to reference our daily weather data,
>
> **[3:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=218)** I'm going to duplicate it and I'll call this function testing. Now, I'm also going to convert this back into a parameter for the station id, so we can test how this function works.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=244)** To create a function, one of the most straightforward ways to do this is to right-click on it and we'll select Create Function. Now, one of the reasons I chose this is because I already passed in a parameter, and that does make it easier to convert the function into something useful. I'll call this Read CSV zipped file from NOAA.
>
> **[4:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=269)** We can then pass in the parameters for the station ID, and we can choose the start date. Let's choose something that's, 1st of January of 2020. Going to then type in the Santa Barbara station ID and I'll select Invoke. Once we run the function it returns a table object for each station containing the weather data for that relevant station, which in this case is the station ID we see in the first column. This invokes the function for a single station. We can also call the function for multiple stations. Let's create a table containing the station name and station ID for Santa Barbara and the LAX airport. I'll just call this table NOAA Stations. We'll then add another column to our data table. We'll choose to invoke a custom function. We'll call this new column "Data" and we'll invoke our function. To read the CSV file from NOAA. Use the station ID, the start date, we'll set to 1/1/2022. Once we run the function, it returns a table object for each station name that we can then expand out into separate columns. Now, if we load this data table into Power BI Pro,
>
> **[6:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=365)** we'll actually run into issues. The error message that we'll see is that it doesn't support mashup queries. The reason is we're taking the station ID and station name and we're invoking the custom function on it. And this isn't something that the Power BI service allows. So we'll get an error message and we won't be able to automatically refresh it. This is an example of where I've found that appending the data is a good alternative to doing this and perhaps exploring other more scalable solutions as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (6), [[Microsoft Power BI|Power bi]] (3), [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** csv (10), noaa (3), lax (1)
> **UI Navigation:** select the (1), dropdown (1), right-click (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Adding data types in M code](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=0)** - [Instructor] If we look at the data where we get the hourly weather data measurements for the weather for Santa Barbara, we notice in the applied steps that there's a lot of different steps going on here before we get to our final result. One of these is that we change type five times. We change it initially when we connect the Source step and it converts all the fields that we see here to text. It also converts the data type when we add columns, and again, when we add other columns, and two more times after that. So while we'll still see the Change Type step for the second step in the Applied Steps list, we can remove a lot of these additional steps to change the type by putting them directly in the column formula. To do so, we'll go into the step where we added a particular column. At the end of this function, before the final closing parentheses, let's set our data type for this new field. So day is going to be a number, so we'll set this to the Number.Type, and notice how it's within the parentheses, so we see here is that it's a second optional parameter in the add column function. We'll then enter. We see it updates the Day formula to display as a numeric value in the form of a decimal. We see that before adding this, we don't have a data type
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=96)** for the column we just created. So if we were to add one column and then we change the type, this is two steps. What this is doing is this is putting that first Change Type step one after the initial connection into our added custom column. Let's repeat this process for the first three added custom column functions. For the hour, we'll again set this. Now there's quite a few different data types that we can set this to. If we type in Text, for example, we see Text.Type, see decimal. Now Number.Type works for this, so I'm going to continue to use that particular data type. We'll do the same for the minute as well. These are all numeric measurements that we're looking to have [[Microsoft Power Query|Power Query]] represent for us. And then once we've changed these, we see all three columns display with a whole number in them. I can now remove this Change Type step because I've incorporated it into the formulas to add the columns directly. Now let's open the dialog box for creating the column. Let's say that we adjust this, we're going to just add a space at the end, and we'll hit OK. Now notice that when we update the column formula, we actually lose that additional parameter
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=189)** at the end of the Table.AddColumn function. It resets, so in order to maintain our data type that we added to the end of the column, we'll again add it to the function directly in the formula bar. Now let's do the same for the functions after that. Now there should be a date, so we can do that by typing in Date.Type, and we see it matches the data type for the UTC Today field that we chose later in the Change Type step. I'm going to set the next column to the same data type, and this one's going to be a number because it's a day. Now I'm going to confirm that these updated fields display the correct data types, and then I'll remove this step again. Now if we see something error out like we do here, we can check the formulas, and alternatively, we can make the changes to the column. We can change the data types again to make it work and go from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** utc (1)
> **Cross-References:** later in (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Relational Databases and Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with relational databases](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=0)** - [Instructor] [[Databases]] are organized data stored in [[Database Management]] systems. One type of database is a relational database. This consists of separate tables where we use [[SQL]] code to query data. Relational database connections in [[Microsoft Power BI|Power BI]] include [[Microsoft SQL Server|SQL server]], Oracle, HANA, ODBC, and many others. In general, my own personal approach to working with large sets of data is to use a database where I can. There's a lot of cool things that we can do with ETL frameworks, especially for testing them out, but ultimately databases can help us save a lot of time, especially if we're using Power BI models for heavy duty things that get refreshed frequently. SQL database connections also offer us an option for connecting to the data via Import or DirectQuery mode. We've been using the Import connection mode for all our connections so far, but some [[Relational Databases]] give us the option of using DirectQuery. We use Import as the typical default connection type. [[Microsoft]] recommends this method because it takes advantage of the high performance query engine and allows us to leverage the full range of options for working with data. DirectQuery allows us to connect to data in its original source repository. This option works best when the underlying data provides interactive queries returning data in less than five seconds or if this data changes frequently and we need the latest updates. Power BI supports DirectQuery for several database options, but I recommend checking the documentation
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=93)** to see if this is updated and your database is available. I set up the SQL server on my desktop to use in these examples. They're similar to the data we've seen so far in the exercise files in this course if you want to upload them to a database to try it out yourself. We'll choose to get data from a new source and then we'll choose SQL Server. I'm going to enter the server name and I'm also going to enter the database name. In order to connect to a database, we need our own set of database access credentials, which include the database name, the server, and any other security details we need to connect to the database. Note that the database credentials in Power BI may not transfer between users when you share files, so make sure that others accessing your report also have access to the database as well themselves. Notice the radio button to select between Import and DirectQuery. Let's set up our query using Import first. This takes us to the Navigator pane where we can select our table or tables to use in the model. Let's choose the weather and dates table. Selecting more than one table creates two separate queries like we saw earlier in this course for other connection types. From here, we can work with database tables like we would any other query. We can also input an SQL query to get the data directly. We'll choose to create another connection.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=190)** We'll then enter the same server and database name that we entered earlier. We'll then enter our SQL code in the advanced options. If you do make the choice to include a query here, you want to make sure you optimize as much of the code as possible before entering it into this box. Any additional transformations after this can slow the query down substantially. I also recommend testing it in the IDE first to make sure that it works. We can then confirm that our code works and it adds it as another query. I'm going to rename this one SQL Query. We can also set up the DirectQuery connection to tables and to SQL queries that we input like we just did. When we choose DirectQuery, we can also enter the SQL statement below in the same way that we would do for the import. Let's just use the tables, though. There's a continuous development for these tools in Power BI including these connectivity modes. If you're wondering if we can support this option of Import and DirectQuery as the connection modes in the same model for different tables, the answer is yes we can, and we can do this with the help of composite models once we load the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Power BI|Power bi]] (5), [[Microsoft SQL Server|Sql server]] (3), [[Databases]] (2), [[Database Management]] (1)
> **Env Vars:** sql (10), hana (1), odbc (1), etl (1), ide (1)
> **CLI Commands:** make (4)
> **Prerequisites:** set up (3)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Query folding](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=0)** - [Instructor] [[Databases]] store vast quantities of structured data that we can query and process efficiently through query languages, like [[SQL]]. To optimize query efficiency, we want to push as much work back to the database connection as we can. One way we can do this is through query folding, which translates our [[Microsoft Power Query|Power Query]] extract and transformation steps into SQL commands that it pushes back to the database. In order for this functionality to work, the database we connect to must have a server with query folding capabilities. [[Microsoft Excel|Excel]] is not a database, and therefore, it doesn't support query folding. There are a number of query transformation steps that work with query folding. and others that don't. The best way to figure out which ones work is to walk through a series of ETL steps in Power Query and confirm whether or not they work along the way. We'll first connect to [[Microsoft SQL Server|SQL Server]] in a database that I stored on my computer. We'll first choose the import data connectivity mode. Let's then set up connections to the Weather and Date Dimensions tables within the SQL Server database. We'll first remove the TAVG column in the Weather table. Instead, we'll calculate the average temperature as a new column, where we'll take the quantity of the TMIN field add it to the TMAX field, and divide the entire total by 2. Next, we'll merge this Weather table
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=94)** with the Dates table using a left outer join on the DateValue field.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=105)** We'll then expand this result to create the combined merge data table. Next, we'll filter the rows so the year isn't 2024. We can then rename our columns to names that are easier to read. Now there's quite a few of them, so I'm just going to rename two of them. Now let's figure out if these transformation steps support query folding. The good news is that we don't have to guess, and we can actually check query folding along the way. Let's right click on the last step of the query where we renamed the columns. We'll then choose View Native Query from the dropdown menu. This opens the window where we can see the SQL code that [[Microsoft Power BI|Power BI]] automatically wrote for us. We can check this step and any other applied step along the way as well. So what breaks query folding? Let's click on the Date field and choose to divide it into three components for the year, month, and day. Once we split it by the forward slash delimiter, let's see if the query folding still works. Now, when we right click on the latest step, we see the View Native Query option isn't available, meaning that the SQL code does not work for this particular transformation. So splitting the columns did break the query folding capabilities here. Let's set up another connection to this database.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=205)** If we use custom SQL code when we're connecting by inputting it in the SQL statement box, then query folding won't work either
>
> **[3:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=222)** And we can check this because we don't see the option to view the native query. Direct query also supports these same transformation steps as the import connection mode until we break the query. Let's create another connection example for this and intentionally break it.
>
> **[4:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=247)** Now, when we right click on the navigation step, we see View Native Query. Let's then split the actual date by the forward slash delimiter. If we break query folding in direct query, we receive a warning message that it will convert this query to import mode instead. We can then switch all the tables to import mode, or we can just switch this particular table. It's pretty neat how we can leverage query folding to effectively write SQL code for us behind the scenes without having to know any code ourselves. It's an awesome option to tap into when you have the chance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Power Query|Power query]] (2), [[Microsoft SQL Server|Sql server]] (2), [[Databases]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sql (9), etl (1), tavg (1), tmin (1), tmax (1)
> **UI Navigation:** click on (4), dropdown (1)
> **Prerequisites:** set up (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Working with multidimensional databases](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=0)** - [Instructor] Multidimensional [[Databases]], like Analysis Services, work as predefined queries referencing databases where the user doesn't have to write a query to access the data, but rather, they connect to the model with the predefined dimensions and calculations. These tables are typically already joined together in the model, and we can use [[DAX]] or MDX queries to get data from them. It's important to emphasize that these aren't [[Relational Databases]], and they work differently. We might see multidimensional databases that use relational databases as sources for their tables, but they're not the same thing, and we don't connect them in the same way or use the same languages, like [[SQL]], to query them. Instead, we use DAX or MDX queries. As we saw in the last video, relational databases support direct query and import connectivity modes. Multidimensional databases also support the import connectivity mode, which allow for us to access and utilize the functionalities and features of [[Microsoft Power Query|Power Query]]. There's also another option for connecting directly to the data called live connection Mode. If we select this option, it will disable the [[Representational State Transfer (REST)|rest]] of the queries, and [[Microsoft Power BI|Power BI]] will become a front end connection only. I set up a weather model using the data we're using throughout this course and uploaded it to a Power BI Premium Per User workspace. We can use the API endpoint of this workspace as Analysis Services database. In the Workspace settings,
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=93)** I'm going to copy the link to the Workspace connection. You won't be able to connect to this database yourself, but I saved a copy of the PBX file that I used to publish it if you would like to try it out by publishing it to your own workspace. In a new Power BI model, let's connect it to data using the Analysis Services option, We will then paste our endpoint into the server, and we can add the database here, or we can click OK to see what options are available.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=132)** We'll then expand the Santa Barbara Weather file, and we'll choose the model within it. Let's confirm this selection in the Navigator window. We see it immediately loads to the Power BI model, and we don't see an option to transform it further in Power Query after that. If we select the Power Query window, Transform Data to open it again, we see that we need to make changes to the configuration of the model in order for it to work. We can, however, add DAX measures to this existing database connection. Let's save this file as Analysis Services - Live Connection Mode.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=188)** Let's open another Power BI Desktop model using the same database endpoint to the Analysis Services database.
>
> **[3:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=202)** I'm going to add the model database. I'll choose the import connectivity mode. When we select the import connectivity mode, we see a box below it where we can enter our MDX or DAX query. We can then type in our DAX query here. Like the SQL queries, I recommend testing it out in another application first. I find that a lot of organizations like the security and [[Scalability]] of these Analysis Services models. However, the live connection really limits model capabilities. The good news is that the import mode really enables us to leverage both the assurance of the underlying models and the capabilities of Power Query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (5), [[Microsoft Power BI|Power bi]] (5), [[Databases]] (4), [[Microsoft Power Query|Power query]] (4), [[Relational Databases]] (3)
> **Env Vars:** dax (5), mdx (3), sql (2), api (1), pbx (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** as we saw (1), in the last (1)
> **UI Navigation:** select the (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Loading Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Loading data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=0)** - [Instructor] As we're loading data into [[Microsoft Power BI|Power BI]], we want to think about modeling components like table joins, connection modes, composite models, and so on. If you're an [[Microsoft Excel|Excel]] Power user, you can probably connect together disparate tables into a single consolidated table view in your sleep. Within Power BI, however, we typically want to join the tables together after we load the data into the model, if we can. Let's start with the Power BI model containing dates and weather data. The weather data is the fact table connected to a [[Microsoft SQL Server|SQL Server]] relational database table. I use the direct query connection mode here. I inputted the dates manually, so they'll load into the model in the import connectivity mode. Right now, we can load both our tables into the Power BI model because they display in regular fonts and the query lists on the left. We don't have to load all our queries into the model, however. Let's duplicate the weather table to explore these options. In the dropdown list, we see that both enable load and include in report refresh are both checked. If we don't want to refresh the data in the report but still load it, we can uncheck this option. This data will still load to the model, but when we refresh it, this data won't update. Let's uncheck the load data option from the dropdown menu, as well. This transforms the query name into italic fonts, make it easier for us to see that it's not part of the data loaded into the model. This means we've disabled this table from loading
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=93)** into our Power BI model. Now let's load the remaining tables into Power BI. We'll acknowledge the [[Security Risk]] and load our data.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=108)** Once the data loads, if we navigate to the data view, we can see the weather data table doesn't display because it directly queries the data source with a direct query. Let's navigate to the model view where we'll link all the tables together. We can see the connectivity modes in the top left of each table. I find they're much easier to find in the model view than they are in [[Microsoft Power Query|Power Query]]. The weather fact table uses a direct query and the days dimension uses an import. My own preference for the way these tables appear is to put the dimension tables above the fact tables in the model view. We anticipate a many to one join when we connect the weather fact table to the date's dimension. Let's select the date value field from the weather table and drag it to its state value counterpart. We see it displays as a many to many relationship. There's a reason why this comes with a warning message in Power BI. Loading something like this into our model can create huge problems with duplications and also missing data later when we build visuals. So we want to eliminate this problem as the dates dimension table shouldn't even have duplicates. If we create this relationship, we see it has this little asterisk on both sides of the table join. Let's remove it, and then we'll go back into Power Query to make changes to the date dimension so it properly connects
>
> **[3:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=203)** to the weather fact data. When we go to the dates table or any other table in our queries, we have the option of removing duplicates. If we right click on the column header and choose remove duplicates, let's see what we get. This removes any duplications of the date value. Let's try this on year, as well. This only gives us one remaining row. We can, however, select all the fields and choose remove duplicates. I prefer to choose all the fields in the table to remove the duplicates on because then I ensure that the rows themselves are unique. This removes all the duplicated rows. Now let's load the data into the model again. Back in the model view, let's then enable the join between the same fields in the table. Now we see the weather fact table is the many side of the join, and the dates dimension is the single side of it. We don't see any warning messages this time, either. Once we have a successful join between the tables, we can continue working with our data model from here, like building visuals with the data that we loaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (7), [[Microsoft Power Query|Power query]] (2), [[Microsoft Excel|Excel]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Security Risk]] (1)
> **UI Navigation:** dropdown (2), navigate to (2), select the (1), go to (1), click on (1)
> **CLI Commands:** make (2), find (2)
> **Warnings:** warning (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Managing errors](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=0)** - [Instructor] When we build queries to load into [[Microsoft Power BI|Power BI]], there are two types of errors that we'll run into. Step level errors occur when the query editor's step cannot return the intended result for the entire function performed, or even the entire query. Row level errors occur for individual values in a row within a field. We'll see these errors as error hyperlinks in our query. Both types of errors are problematic, but I find the row level errors are more common and harder to catch. Let's explore these errors in our Power BI model. To create a step level error, let's intentionally move the changed type step in front of the function to add a custom column. This throws an error message for entire query. To fix this issue, let's move the changed type step to its original position at the end. Next, in our data table, let's change our date field to a date and our amount field to a decimal number. Notice error hyperlinks appear in the data table for the rows where the value in that particular row and column doesn't match the data type of the column. Clicking on one of these error hyperlinks drills into that specific single error to show the error message details. This shows as a single error in the table, but we want to see all of them and also mitigate this issue. This particular data table is small so we can see all the errors, but if you're dealing
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=94)** with millions of records, you'll likely not be able to see these row level errors when you load them into the model. Let's load this data as is with the errors to see what we get. It loads the data, but it points out there are three errors in the 11 row we loaded. Most of the errors that I've run into when loading data into Power BI come from incorrect data types. Fixing errors here after loading them can be a huge pain and slightly cumbersome, but once we fix them, we can then use these data fields in our model. If we select view errors, this opens the [[Microsoft Power Query|Power Query]] editor again. Now in Power Query, we see our original data table and we see a new folder containing the errors that appear in these rows. We can click on one of these hyperlinks to see what it says. We see that it says it couldn't parse the input provided as a date value, and we'd see the same for the amount that it doesn't parse it as decimal number. We also see the row number where the error actually occurred, which is quite helpful, especially for large data sets. We can go into the original data to make these changes. One way we can mitigate some of the existing errors is by replacing the values before we change them into another data type. In our amount field, for example, we have fives that appear as S characters, so we can replace those.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=195)** And we also have an O representing a zero.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=207)** Now we go back into our error query. We see this fixes all but one of the errors. For the dates field, we can replace the error with another value or we can remove it entirely because we can't really take a guess of what the error represents otherwise. Now this removes the entire row that contains the error. We now see the table containing the errors in the data is empty, meaning that we fixed all the errors that we see. We'll then load the data into our model again. The data now loads with no errors. Fixing errors like this smooths out our Power BI modeling process. This is one type of error that we'll encounter in Power BI models, but there are lots of others. If you're interested in learning more about how to manage error logs, I recommend checking out some of the content in the [[Power BI- Integrating AI]] Machine Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (6), [[Microsoft Power Query|Power query]] (2)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Refreshing data](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=0)** - [Instructor] We can think of [[Microsoft Power BI|Power BI]] Desktop as a design and development application. Well, the Power BI services where we share our work, are more for enterprise level [[Scalability]] and shareability for working across an organization, I've created two Power BI models, one that refreshes in the Power BI service automatically and one that doesn't. The Power BI file, Weather 1, uses a custom function to call the station name for LAX and Santa Barbara. Weather 2 calls each location separately and appends them together. You can explore both of these Power BI models directly in the exercise files and update them yourself as they both connect to the zipped weather data from Noa. To manually refresh a Power BI model, we can do so through the refresh button at the top of the page. This refreshes both the data behind the model as well as the visuals that it supports. Now that we know the data is up to date, let's publish the model. We'll select to publish it to our Explorer California workspace. Once it confirms, it publishes, we can go into Power BI to look at it. Publishing a report to the Power BI service, in this case, we're using a premium per user account, creates both a report and a data set behind it. The data set represents the data model,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=94)** and this is what we want to refresh in the Power BI service. We'll select the Semantic model and we can see the options for working with this data. Before we set up a refresh schedule though, let's click on the refresh button to confirm that the refresh functionality works within the cloud. We see this warning message appear. We'll click on it to see what's going on. Now we see that because this data set includes the dynamic data source, the data set won't be refreshed, and if it doesn't refresh by manually refreshing it in the Power BI account, we can't set up a refresh schedule for it. We can see more about why this occurs by navigating to the URL on this page. Now let's try publishing the Weather 2 Power BI model. That includes the dependent tables joined together directly in the [[Microsoft Power Query|Power Query]] editor. We'll follow the same steps to publish it to our Power BI account and the same workspace. Now let's navigate to the Semantic model for Weather 2 to see if we can refresh the data now. So, let's click on this warning icon and we see that we need to enter the credentials for our data sources.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=187)** So we'll go to the dataset settings homepage to enter these credentials. We see the section for updating the edit credentials. We'll choose anonymous and I'm going to choose organizational as our [[Privacy]] level.
>
> **[3:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=212)** Now we're repeating this twice because we took two queries and we appended them together. So now we can set up our automatic data refresh schedule.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=226)** We'll turn on the refresh schedule. Now this data is updated once a day, so I can pick a daily refresh frequency. I'll choose the US Pacific and Canada time, and this is the time zone, so I'm going to select a time early in the morning at 5:00 AM so people can get the latest data when they come in. Now, depending on the type of Power BI account you have, will determine how often you're able to refresh this data. We'll confirm our refresh schedule.
>
> **[4:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=271)** Once we confirm these details, we see the date and time for the next Power BI Refresh for Weather Model 2. Once we've set up the refresh schedule, it will continue and every morning, we'll be able to access the latest data for LAX and Santa Barbara within Power BI. Enabling this refresh means that anyone who wants to view the daily weather now can, they're not relying on one person to refresh it. They can simply consume the data directly in the Power BI service to immediately analyze the weather in the Southern California area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (17), [[Scalability]] (1), [[Microsoft Power Query|Power query]] (1), [[Privacy]] (1)
> **UI Navigation:** click on (3), select the (1), navigate to (1), go to (1)
> **Prerequisites:** set up (4)
> **Env Vars:** lax (2), url (1)
> **Warnings:** warning (2)
> **Ports:** :00 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with Power BI](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=0)** - We've reached the end. Thank you so much for learning about Data Methods and [[Microsoft Power BI|Power BI]] with me. We covered a lot here, and if you're interested in learning more about Power BI, check out other courses, including my own in the [[LinkedIn]] Learning Library. If you want to see more sample data visualizations and [[Dashboards]], check out my website, [helendatadesign.com](https://helendatadesign.com). You can also follow me on LinkedIn to see more of my contents and work. I'm always learning something new and I hope you are too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[LinkedIn]] (2), [[Dashboards]] (1)
> **URLs:** [helendatadesign.com](https://helendatadesign.com) (1)
> **Cross-References:** we covered (1)
> **Speakers:** - we (1)


## Instructor

- [[Helen Wall]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/power-bi-data-methods-3812122/)

## Skills Covered

- Data Analysis
- Microsoft Power BI

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
← [[SQL- Data Reporting and Analysis]] | **8 of 9** | [[Program Evaluation for Data Science]] →

### In [[Master Microsoft Power BI]]
← [[Power BI- Working Together with ChatGPT]] | **2 of 6** | [[Power BI Dataflows Essential Training]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
- [[Master Microsoft Power BI]]

## Related Courses

_Courses sharing skills:_

- [[Learning Power BI Desktop]] — Data Analysis, Microsoft Power BI
- [[Intermediate SQL- Data Reporting and Analysis]] — Data Analysis
- [[Data Analysis- Investigate with SQL]] — Data Analysis
- [[Advanced SQL for Data Scientists]] — Data Analysis
- [[Complete Guide to Excel Statistics with Copilot]] — Data Analysis

---

[↑ Back to top](#)