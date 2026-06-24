---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: etl-in-python-and-sql
url: "https://www.linkedin.com/learning/etl-in-python-and-sql"
duration_minutes: 80
duration: 1h 20m
level: Intermediate
updated: 3/6/2024
learners: 14798
skills:
  - Python (Programming Language)
  - Extract, Transform, Load (ETL)
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEb7W3zMX2CfA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709597051025?e=2147483647&amp;v=beta&amp;t=wp85iSevtpQSOwRH3j6xpiy6IciVIJwiUGuFnjaSq24"
linkedin_topic: Data Science
learning_paths:
  - '[Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)'
  - '[Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)'
  - '[Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)'
prev_courses:
  - '[Problem-Solving Strategies for Data Engineers](Problem-Solving%20Strategies%20for%20Data%20Engineers.md)'
  - '[Apache Spark Essential Training- Big Data Engineering](Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md)'
  - '[Data Engineering With Dbt](Data%20Engineering%20With%20Dbt.md)'
next_courses:
  - '[Fundamentals of Data Transformation for Data Engineering](Fundamentals%20of%20Data%20Transformation%20for%20Data%20Engineering.md)'
  - '[Data Quality- Core Concepts](../Artificial%20Intelligence%20(AI)/Data%20Quality-%20Core%20Concepts.md)'
  - '[Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md)'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":3,"total":10,"prev":"Problem-Solving Strategies for Data Engineers","next":"Fundamentals of Data Transformation for Data Engineering"},{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":6,"total":7,"prev":"Apache Spark Essential Training- Big Data Engineering","next":"Data Quality- Core Concepts"},{"path":"Data Engineering Hands-On Practice","position":5,"total":7,"prev":"Data Engineering With Dbt","next":"Complete Guide to SQL for Data Engineering- from Beginner to Advanced"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/python-programming-language
  - skill/extract-transform-load-etl
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/ETL%20in%20Python%20and%20SQL.md)

![ETL in Python and SQL](https://media.licdn.com/dms/image/v2/D560DAQEb7W3zMX2CfA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709597051025?e=2147483647&amp;v=beta&amp;t=wp85iSevtpQSOwRH3j6xpiy6IciVIJwiUGuFnjaSq24)

# ETL in Python and SQL

> Data is increasing exponentially as the world continues to generate an immense amount. In this course, a data engineer with over 5 years of experience, Jennifer Ebe, will show you how to build systems that gather data from various sources, transform it and store data so you can derive insights from it effectively. We will go over what ETLs are and how you create them. We will learn how to use Pyth

> [LinkedIn Learning](https://www.linkedin.com/learning/etl-in-python-and-sql) | 1h 20m | Intermediate | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Create an ETL in Python and SQL](#create-an-etl-in-python-and-sql)
  - [Tools used in this course](#tools-used-in-this-course)
- [**1. What Are ETLs?**](#1-what-are-etls) (6 videos)
  - [What are ETLs and how do you create them?](#what-are-etls-and-how-do-you-create-them)
  - [ETL process overview](#etl-process-overview)
  - [Exploring your data with pandas (Python) and SQL](#exploring-your-data-with-pandas-python-and-sql)
  - [Understanding your data](#understanding-your-data)
  - [Challenge: Reading data using Python](#challenge-reading-data-using-python)
  - [Solution: Reading data using Python](#solution-reading-data-using-python)
- [**2. Extracting and Transforming Data with Python**](#2-extracting-and-transforming-data-with-python) (6 videos)
  - [Loading data from different sources](#loading-data-from-different-sources)
  - [Extracting your data](#extracting-your-data)
  - [Cleaning, preprocessing data, and data formatting](#cleaning-preprocessing-data-and-data-formatting)
  - [Standardization, handling duplicates, and missing values](#standardization-handling-duplicates-and-missing-values)
  - [Challenge: Extract and transform data using pandas](#challenge-extract-and-transform-data-using-pandas)
  - [Solution: Extract and transform data using pandas](#solution-extract-and-transform-data-using-pandas)
- [**3. Loading Data into Target Systems**](#3-loading-data-into-target-systems) (5 videos)
  - [Introduction to data warehouses and data lakes](#introduction-to-data-warehouses-and-data-lakes)
  - [Loading data into relational databases](#loading-data-into-relational-databases)
  - [Data quality checks and validation with SQL](#data-quality-checks-and-validation-with-sql)
  - [Challenge: Transform the data and remove duplicates and nulls](#challenge-transform-the-data-and-remove-duplicates-and-nulls)
  - [Solution: Transform the data and remove duplicates and nulls](#solution-transform-the-data-and-remove-duplicates-and-nulls)
- [**4. Automating ETL Jobs: Scheduling ETL Jobs with Python**](#4-automating-etl-jobs-scheduling-etl-jobs-with-python) (5 videos)
  - [Querying your data with SQL](#querying-your-data-with-sql)
  - [Scheduling ETL jobs with Airflow: Part 1](#scheduling-etl-jobs-with-airflow-part-1)
  - [Scheduling ETL jobs with Airflow: Part 2](#scheduling-etl-jobs-with-airflow-part-2)
  - [Challenge: Load the data into a database and automate](#challenge-load-the-data-into-a-database-and-automate)
  - [Solution: Load the data into a database and automate](#solution-load-the-data-into-a-database-and-automate)
- [**Conclusion**](#conclusion) (1 videos)
  - [Expand your knowledge of ETLs](#expand-your-knowledge-of-etls)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an ETL in Python and SQL](https://www.linkedin.com/learning/etl-in-python-and-sql/create-an-etl-in-python-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/create-an-etl-in-python-and-sql?u=76281980&t=0)** - [Jennifer] Have you ever wondered what ETLs are, or how you can create them, so you can build systems that collect, manage, and convert your data into usable formats? Then this course is just for you. Hello, I'm Jennifer Ebe, a data engineer with over four years hands-on experience creating robust and efficient [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). I am excited to guide you through creating, extract, transform, and load processes using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and [SQL](../../Skills/Data%20Science/SQL.md). Along the way, I'll share insights I have gained from my journey. I have crafted this comprehensive [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course tailored for enthusiasts and professionals, and together, we'll demystify ETLs and empower you to build your own efficient and robust ETLs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (1)
> **Env Vars:** sql (1)
> **Speakers:** - [jennifer] (1)

#### [Tools used in this course](https://www.linkedin.com/learning/etl-in-python-and-sql/tools-used-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/tools-used-in-this-course?u=76281980&t=0)** - [Instructor] Whether you're an absolute beginner or you've been at this for a while, you do not need to worry. Because in this video, I will take you through the tools you will need to be successful in this course. First, you will need a working system, a Mac, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or [Windows](../../Glossary/Service/Windows.md) system with Visual Studio Code installed and Jupyter running. You can also use Anaconda, an open source programming tool, with JupyterLab running. Or if you prefer, [Google](../../Glossary/Service/Google.md) Colab, which is a web-based collaborative environment provided by Google. Whatever ID you're comfortable with would work great for this course. We'll be manipulating data using [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), a library in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). If you're not very familiar with pandas, do not worry. I'll give you an in-depth explanation of what it is and what you can do in subsequent videos. And finally for this course, we will be warehousing our data in a database. I suggest creating one with ElephantSQL. ElephantSQL is a cloud-based database service that provides a fully managed [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) database. Don't worry, I'll show you how to set this up later in the course. I'm excited to show you all of these things and dig into how you can create your very first ETL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Tools:** visual studio (1), jupyter (1), anaconda (1), colab (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)


### 1. What Are ETLs?

[↑ Back to Table of Contents](#table-of-contents)

#### [What are ETLs and how do you create them?](https://www.linkedin.com/learning/etl-in-python-and-sql/what-are-etls-and-how-do-you-create-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/what-are-etls-and-how-do-you-create-them?u=76281980&t=0)** - [Instructor] In many companies and organizations, data is spread across different sources, like spreadsheets, production [Databases](../../Skills/Software%20Development/Databases.md), or APIs. A data pipeline helps combine data from these different sources into one consistent and unified format to support analysis and other business needs. So what is a data pipeline? A data pipeline is a set of processes and technologies that describe a data's journey or movement from the data source to its final destination. It is very essential in the data ecosystem. ETL stands for extract, transform, and load. It is a very specific type of data pipeline. An ETL moves or extract data from source systems or applications. It involves transforming, standardizing, and cleaning the data if necessary, and finally loading the data to the target system to make it useful and valuable to the end users. Now, let's break this down. Let's start with the E in ETL. The extract in ETL involves extracting data from various sources, or systems, or applications, like spreadsheets, APIs, databases, cloud systems, in preparation for the transformation phase. The extract step can be done using common tools like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), AWS Glue, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Factory, Talend, and many more.
>
> **[1:39](https://www.linkedin.com/learning/etl-in-python-and-sql/what-are-etls-and-how-do-you-create-them?u=76281980&t=99)** Moving on to the next step, the T in ETL. The transform step in ETL involves cleaning, enriching, aggregating, and standardizing the data to remove errors, duplicates, or irrelevant information in the data. It is then converted to a useful format for analysis. In this step, we ensure that the data is enriched, aggregated, and consistent. Common tools used in the [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) steps include Python, Spark, and Azure Data Factory. The final step in ETL process is load. The loading process involves loading data that has been transformed into target databases, usually a data warehouse, a data lake, a data maps. Here, the end users, it could be data scientists, data analysts, business analysts, can assess the data to create reports, [Dashboards](../../Skills/Data%20Science/Dashboards.md), build machine learning models, the list goes on and on. Common tools used to load data into target systems include Python, Spark, Azure Data Factory, amongst others. While you are mentioning our orchestration tools, these tools are used to create and orchestrate ETLs by passing in parameters. They're used to shadow the running of ETLs, and these look like tools like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md), SSIS, ADF,
>
> **[3:12](https://www.linkedin.com/learning/etl-in-python-and-sql/what-are-etls-and-how-do-you-create-them?u=76281980&t=192)** AWS DMS. All of these enable you to shadow, monitor, and manage your ETLs. Usually you need one, two, or a combination of different tools to create and schedule an ETL. But you would notice that tools like Python, [Java](../../Skills/Software%20Development/Java.md), and Spark can create custom ETL scripts and workflows through all of the stages, which is super exciting. In this course, we'll use Python to create custom ETL workflows. We would extract, transform, and load our enterprise data all with Python. Now that you know what ETL stands for and the tools that can be used in each phase, we can start to create our very own ETL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** etl (12), aws (2), ssis (1), adf (1), dms (1)
> **CLI Commands:** python (6), aws (2), make (1), apache (1)
> **Definitions:** is a  (3), stands for (2)
> **Speakers:** - [instructor] (1)

#### [ETL process overview](https://www.linkedin.com/learning/etl-in-python-and-sql/etl-process-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/etl-process-overview?u=76281980&t=0)** - [Instructor] There are some things we should consider before creating your ETL, and I'll walk you through the steps involved as we create our ETL with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and [SQL](../../Skills/Data%20Science/SQL.md). Let me paint a scenario. A company, H+ Sports, a sports apparel company, has been compiling and recording all of its data, the customers, inventories, [products](../../Skills/Software%20Development/Microsoft%20Products.md), employees, and all other relevant data in an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) sheets that everyone has access to. You have just been employed as a data engineer, congratulations, and your first task is to gather and warehouse all the data in the Excel sheets. While we prepare to warehouse this data, we should consider several factors. One of the factors we should consider is pipeline architecture and tools. As a data engineer, we should consider what tools are required to build data pipeline, what tools are available to you, the infrastructure required to support the tools, and the cost of these tools. Another factor to consider is the data sources, transformations, and destinations. When important data, it's important to consider the source and the destinations. Sources could include [Databases](../../Skills/Software%20Development/Databases.md), file systems, APIs, [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), and other platforms. Additionally, it's important to determine the necessary transformation for the data, such as cleaning and reaching and aggregating.
>
> **[1:38](https://www.linkedin.com/learning/etl-in-python-and-sql/etl-process-overview?u=76281980&t=98)** Another factor to consider is asking yourself, how often do I intend to pull data? This is a very important question to ask yourself. Do you want to pull data incrementally or do you want to truncate and load on each run? You also have to consider the amount of data, the number of rows and columns. Your data is a lot, you might want to consider incrementally copying the data. However, in this course, we will truncate and load our data for a number of reasons. Number one, [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md). If there are errors or inconsistencies in our existing data, a full load can help refresh the data with corrected records. Number two, data and schema changes. A full load allows for a straightforward update of the entire data, which would include any schema changes, like an addition of a new row, or changes in previous rows, or an addition of a new column. Number three, simplicity in maintenance. Full loads can help simplify the ETL process and reduce the complexity in maintaining incremental loads and the logic that comes with it. And finally, initial loads. When setting up an ETL process for the very first time, or when migrating to a new system, a full load is necessary to ensure that you start with a full and complete data. Another factor to consider is data volume and velocity. When bringing in data, you should consider the volume,
>
> **[3:15](https://www.linkedin.com/learning/etl-in-python-and-sql/etl-process-overview?u=76281980&t=195)** which is how much data will be coming in, and the velocity of the data, which is how often data will be created at the source. This could include how much data will be processed, how quickly it'll arrive, and how quickly it needs to be processed. And finally, the last factor is [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and performance. We need to understand and consider how the ETL will perform as the volume and velocity of the data increase. This includes scalability, performance, optimizations, if the data increases. It is important to consider these factors when creating your ETL as they will guide you in making the right decisions, picking the right tools, and creating your ETLs efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** etl (6), sql (1)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (2)
> **CLI Commands:** python (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Exploring your data with pandas (Python) and SQL](https://www.linkedin.com/learning/etl-in-python-and-sql/exploring-your-data-with-pandas-python-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/exploring-your-data-with-pandas-python-and-sql?u=76281980&t=0)** - [Instructor] In the previous video, we talked about [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as a tool that can be used to create ETLs. In this course, we're using Python, one of the most popular programming languages and the [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) library to extract, transform, and load our data. You most likely already know about Python, the programming language. But what about Pandas? Pandas is a popular open source Python library used for [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) and analysis. It provides easy-to-use functions and methods for working with data. Before you can use Pandas, since it's an external model, you have to install it using PEEP and import it into your ID or Python script to make the functionalities of Pandas library available in your code. Here I am in Visual Studio, and we are going to import pandas. And for that the command is import pandas as pd.
>
> **[1:00](https://www.linkedin.com/learning/etl-in-python-and-sql/exploring-your-data-with-pandas-python-and-sql?u=76281980&t=60)** I'm going to run that to make sure it's imported correctly. Good. Now that we have imported Pandas, it's important to discuss the [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that are available in Pandas. They are series and dataframes. Series are like one dimensional arrays with label data, sort of like a column in an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) spreadsheet, and an example is shown on your screen. Here I can create a series called data and to print data, I can simply call data, and this is a series. Another type of data structure available in Pandas is a dataframe. Dataframes are like two dimensional tables with rows and columns, like an Excel spreadsheet or an [SQL](../../Skills/Data%20Science/SQL.md) table. Dataframes allow you the flexibility to store and manipulate data in a structured format. We would be creating our own dataframe again, so let me just give you that data here. Here we have a variable called data, and to create a dataframe, we can call it df, which is short form for dataframe. So df is equal to pd.DataFrame and in bracket, data. If we run this, we know our dataframe has been created, and I can call our dataframe by printing it like this. Here we can see an example of what a dataframe looks like, and we can see that it has five rows and three columns.
>
> **[2:35](https://www.linkedin.com/learning/etl-in-python-and-sql/exploring-your-data-with-pandas-python-and-sql?u=76281980&t=155)** So how does Pandas work? Pandas offers a variety of methods that can be used to import data from various sources like CSVs, Excels, Clipboard, [JSON](../../Skills/Web%20Development/JSON.md), SQL [Databases](../../Skills/Software%20Development/Databases.md), and much more. The syntax for importing this data is usually pd.read_the data type. For example, for CSV, it is pd.read_csv. And for Excel it is pd.read_excel, and so on and so forth. You can find more about these methods for importing data on the official Pandas documentation. Pandas can also be used to explore, clean, and transform data. We'll explore this further in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (14), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **CLI Commands:** python (5), make (2), find (1)
> **Env Vars:** sql (2), peep (1), json (1), csv (1)
> **Code Identifiers:** read_the (1), read_csv (1), read_excel (1)
> **Cross-References:** previous video (1), we talked about (1), in the next (1)
> **Definitions:** is a  (3)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)

#### [Understanding your data](https://www.linkedin.com/learning/etl-in-python-and-sql/understanding-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/understanding-your-data?u=76281980&t=0)** - [Instructor] Let's discuss how to explore data using [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). Understanding the data is a big part of [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) and ETL creation. There are a couple of reasons why we need to explore and understand our data before transformation and warehousing. Before warehousing our data, we must be familiar with the data structure, the format, data types, and relationships between tables and columns. This is very important for the transformation stage of the ETL. We also need to consider [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). Are there duplicates, inconsistencies, missing values or no records? We need to understand this so we can address any data quality issues. We also need to figure out if and what transformations are required. We need to take into consideration whether there are existing business logics that should be applied to the data. We also need to figure out how to structure the ETL process as well as what columns, if any, need to be standardized. For example, converting time columns from string to daytime if necessary, or converting from a 12-hour data format to 18-four hour data format. Let's get into understanding our sample data. Here we are back in my Visual Studio code in my Jupiter Notebook. First things first, we have to import Panda the pd, which I have done. It has run here and has import successfully, that's good.
>
> **[1:35](https://www.linkedin.com/learning/etl-in-python-and-sql/understanding-your-data?u=76281980&t=95)** Now we want to create a data frame. I will be creating this data frame as shown on my screen. In the data shown here, we have a data from a retail store showing [products](../../Skills/Software%20Development/Microsoft%20Products.md) sold to five customers along with the time of purchase of each item. We can view our data using df.head or df.tail. Let's view the top five rows of our data using df.head. Here we can see the top five rows of our data. And now let's view the last five rows of our data using df.tail. Here we can see the last five rows of our data. Let's also explore this data further by getting the numbers of rows and columns in the data, that can be obtained using Pandas' attribute, shape. Let's run that. If we run this, the attribute shows us that the data frame above consists of five rows and seven columns. The df.infomethod gives us a summary of the data frame structure and content. It includes the number of null values, so let's run this.
>
> **[2:55](https://www.linkedin.com/learning/etl-in-python-and-sql/understanding-your-data?u=76281980&t=175)** It includes the number of non-no values, data types, memory usage, and more for each column in the data frame. In our df, our sample data frame, it shows that all the columns are string safe for the ID column, which means we would need to transform the time of purchase column to a daytime format. These are the kind of insights we can derive from df.info. And finally, for this video, df.duplicator,
>
> **[3:30](https://www.linkedin.com/learning/etl-in-python-and-sql/understanding-your-data?u=76281980&t=210)** let's run this. This is a Pandas' method used to identify duplicate rows in a data frame. It returns a bullion series with true for duplicate rows and false for unique rows. In our case with df, we can see that there are no duplicates. There are lots of other functions and methods available in Pandas to understand your data. For more methods and attributes, refer to the official Pandas documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** etl (3)
> **Definitions:** is a  (2)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Reading data using Python](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-reading-data-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-reading-data-using-python?u=76281980&t=0)** (light upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-reading-data-using-python?u=76281980&t=6)** - [Narrator] For your first challenge, you would read data from a CSV file called Sample Data using [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). This file is located in exercise files for this course in the chapter one video file folder. And in this exercise, you would read the CSV file, get the numbers of rows and columns, and finally confirm if there are any duplicating in this data. This challenge should take you about five minutes to complete. Good luck and see you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** csv (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Reading data using Python](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-reading-data-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-reading-data-using-python?u=76281980&t=0)** - [Instructor] Welcome back. How did you get it? Let's review the answer to the challenge. First things first, we import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. Let's run it just to be sure it's imported correctly. Next, I would expect you've downloaded the CSV file. I will suggest moving the file to the same location as your Jupyter Notebook for simplicity, as shown on my screen. For the next step, we would import the sample data using the pandas method for importing CSV. Let's do that, sample_data = pd.read_csv right here. And name of our file is sample_data, so I can just type it out, .csv. Let's run this just to be sure it has imported correctly. Now let's take a look at our data using the head method. So I can say sample_data.head, and this shows me the top five rows of the data. And now let's look at the last five rows of the data just for good measure, sample_data.tail. Let's run this. Great, now that we have seen what the data looks like, we can check how many rows and columns are contained in the data, and we can do this using shape. So sample_data.shape.
>
> **[1:34](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-reading-data-using-python?u=76281980&t=94)** Let's run this, and we can see that the data has 200 rows and eight columns. And finally, to check if duplicates exists in the data. Do you remember the formula for this? It's df.duplicated or DataFrame.duplicated. In our case, it'll be sample_data.duplicated. Now let's run this. We see that there's a lot of rows in this data, so it can be difficult to confirm if duplicates exist in this data, but we can print out duplicates using duplicated method to confirm if any of the rows have duplicates. We can do that by assigning duplicates to a variable and filtering the DataFrame based on that variable. I know it sounds difficult, but let's walk through it. So let's call the variable duplicate_rows. So duplicate_rows = sample_data, and filtering by sample_data.duplicated.
>
> **[2:39](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-reading-data-using-python?u=76281980&t=159)** Great, let's run this. It runs, so now if we print out duplicate_rows, it should give us all our rows that are duplicated. Let's run this. Great, we can see that a bunch of these rows are duplicated. We can see that duplicates do exist in sample file. I hope you followed through and learned a new way to check for duplicates in a large dataset. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Code Identifiers:** sample_data (8), duplicate_rows (3), read_csv (1)
> **Env Vars:** csv (2)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Extracting and Transforming Data with Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Loading data from different sources](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-from-different-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-from-different-sources?u=76281980&t=0)** - [Instructor] Organizations have many data sources available. For example, at a particular organization, data can exist in a production database. That could either be a [SQL](../../Skills/Data%20Science/SQL.md) or a [NoSQL](../../Skills/Software%20Development/NoSQL.md) database, APIs, [JSON](../../Skills/Web%20Development/JSON.md) files, and [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) or CSV sheets. Data also exists in different formats like XML, Parquet, JSON, and TXT. The list is endless. In this video, we will explore loading data from different data sources using [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) library, like pandas. Let's talk about loading CSV files. Pandas is great for working with and loading CSV files. Loading CSV files can be done using the pandas method, pandas.read.csv. The method has several parameters available where we can specify exactly what we mean. Now let's call the pd.read_csv method. And we can hover over it and we can see that it's a function and it has things like file paths separated by delimiters, headers, names, index columns, and so on. The list is endless. So now let's load our data, this data, sample_data_csv and play around with it. So let's call it sample_csv = pd.read.csv and we can call this.
>
> **[1:39](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-from-different-sources?u=76281980&t=99)** Let's run it to ensure that everything is fine. If we try to query sample.csv using the head, let's see what it looks like. We see that this CSV has no headers, but since we didn't specify, it has taken the very first column, which is an employee name or a customer's name as the header. So now let's specify here that header is none. We can do that using the header keyword. Let's run this and now let's take a look at this again. We see that it is fine and it has reverted to normal showing that headers are not available in this CSV file. Loading Excel files are no different. The method for loading an Excel file is pd.read_excel. And if we hover over it, we see that we can specify the file path, the sheet name, again, the header, names, index columns, and so on. Let's read the Excel file we have here, and let's name it sample_excel, is equal to this,
>
> **[3:01](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-from-different-sources?u=76281980&t=181)** and we can call it what it is, sample_excel. Now let's run this. It runs successfully. Let's take a look at the first five rows of this data. Great. This is what our data looks like. Pandas also does a good job of loading JSON files using the pandas.read_json method. The method has several parameters like convert dates, orients, and more. You can flatten your JSON file using the pandas.json_normalize. You can also read several files and data types using pandas. For a full documentation of all the data formats you can ingest using pandas, check out the official pandas documentation here. Let's head on over to our next video to ingest our data using pandas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (12), [JSON](../../Skills/Web%20Development/JSON.md) (4), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **Env Vars:** csv (6), json (4), sql (1), xml (1), txt (1)
> **Code Identifiers:** sample_excel (2), read_csv (1), sample_data_csv (1), sample_csv (1), read_excel (1)
> **File Paths:** pandas.read.csv (1), pd.read.csv (1), sample.csv (1)
> **Cross-References:** next video (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Extracting your data](https://www.linkedin.com/learning/etl-in-python-and-sql/extracting-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/extracting-your-data?u=76281980&t=0)** - [Instructor] As we have discussed in previous lessons, data often comes in different formats. At our company, H+ Sports, our data primarily resides in an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) file. In the next couple of videos, we will extract our data from the Excel using [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md). We'll begin by loading our data, the Excel file, the orders from H+ Sports, which has eight columns and a lot of rows. Now let's go to Visual Studio to extract our data. Remember, to load our Excel file using Pandas, we need to first import Pandas. Do you remember how? It's import pandas as pd. Let's run this to make sure it works. Great. Now the next step is to properly define the location where the Excel file exists. For us, it exists in the Chapter_2 folder. And I hope you have moved it to where your Jupyter file is located. Great, and now let us ingest our Excel file. So we'll call it orders is equal to pd.read_excel,
>
> **[1:20](https://www.linkedin.com/learning/etl-in-python-and-sql/extracting-your-data?u=76281980&t=80)** and it is called H+ Sports Orders. Let's just copy relative path so we don't make any errors. I'll do that and run just to make sure there are no errors. Great. Now that we have ingested our Excel file, we can take a look at our data to ensure it was imported correctly. You can do that using the function, dataframe.head. So now, let us look at our data using head. So we can call orders.head() and it prints out the first couple of rows of our data. In this video, we have extracted our H+ Sports Order data from the Excel using Pandas to our workspace. In the next couple of lessons, we would process and clean our data to prepare it for ingestion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (8), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (5)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (2)
> **Tools:** visual studio (1), jupyter (1)
> **Code Identifiers:** read_excel (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Cleaning, preprocessing data, and data formatting](https://www.linkedin.com/learning/etl-in-python-and-sql/cleaning-preprocessing-data-and-data-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/cleaning-preprocessing-data-and-data-formatting?u=76281980&t=0)** - [Instructor] In the previous video, we imported our orders data from [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) to our Jupyter Notebook. This covers the extraction part of this course. We will now focus on transforming the data, which usually involves cleaning, standardizing, and removing duplicates and missing values. Let's talk about why this is important. [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) focuses on converting raw data coming from different systems into a format that is suitable for the target system. Data transformation is important for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and consistency, as inaccurate data can lead to faulty reporting, which can cause an organization to lose money. Let's talk about some of the scenarios where data transformation is necessary. Let's say two sales teams are working at a H+ Sports store branch at a time. Scenario one, a customer makes an inquiry about a product from team one, but does not purchase the product at the time of the inquiry. The team collects the customer's information and records it in an Excel file for marketing purposes. At another time, say two weeks later, the customer returns to purchase the product. And during checkout, when the customer is asked if this is their first time purchasing from the shop, the customer says yes, which is true. Team B rerecords the customer's information as a new customer. Notice we would have two records of the customer in the customer table,
>
> **[1:33](https://www.linkedin.com/learning/etl-in-python-and-sql/cleaning-preprocessing-data-and-data-formatting?u=76281980&t=93)** which is why we need to deduplicate data. Deduplication is simply identifying and removing duplicates from your datasets. Data deduplication removes duplicated data before inserting it into the data warehouse. Okay, now for scenario two. During checkout, sales are recorded in the currency in which the sale was made. For example, it could be euros, pounds, or dollars. Standardization or integration ensures that we convert the currency to the default one, in this case dollars. This ensures a consistency in currency across stores. The [Data Integration](../../Skills/Data%20Science/Data%20Integration.md) and standardization process involves transforming data from various source systems into a common format or structure. Scenario three. Combining data from the Excel sheets from sales team one and sales team two instead of loading data into two separate tables, and aggregating data from multiple sources into a single dataset. Aggregating the data allows the company to analyze overall sales performance, identifying top performing sales teams, popular [products](../../Skills/Software%20Development/Microsoft%20Products.md), and overall revenue trends. Data aggregation is a process of summarizing, grouping, or consolidating data from multiple rows or records into a single value or set of values. It reduces large amounts of data to more manageable
>
> **[3:11](https://www.linkedin.com/learning/etl-in-python-and-sql/cleaning-preprocessing-data-and-data-formatting?u=76281980&t=191)** and meaningful representations. The next transformation technique is data filtering. This enables you to remove unwanted data from an entire dataset. You can choose specific data elements and remove others. Another transformation technique is [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md). Here, we identify and eliminate errors and inconsistencies in our data. In summary, data transformation plays an important role in the ETL process. The transformation step ensures data quality by data cleaning, integration, standardization of metrics, [Data Validation](../../Skills/Software%20Development/Data%20Validation.md), and enrichment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (4), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (3), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) (2), [Data Integration](../../Skills/Data%20Science/Data%20Integration.md) (1)
> **Env Vars:** etl (1)
> **Cross-References:** previous video (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Standardization, handling duplicates, and missing values](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980&t=0)** - [Tutor] In the last video, we discussed the importance of the transformation step in an ETL process. Now, let's transform the customer's data from H+ Sport. To transform our data, first, we need to extract it from the [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) file it currently resides in. Do you remember how? First things first, let's import [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as PD and make sure it runs. Next, we would import our customer's data. So that's customers, is equal to pd.excel, pd.read, excuse me, or excel. Let's copy the path for this, or we can just copy it this way, .xlss, and the sheet name is data.
>
> **[0:59](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980&t=59)** Let's run this to make sure we're good. Awesome, and we are. And now we can take a look at what customers look like by running head-on customers. Let's run this. Awesome, this is what it looks like. To begin our transformation, let's check for duplicates. Duplicates can exist in a couple of places and sometimes it can be as simple as checking the ID if it appears multiple times, where the ID is unique for each customers. Other times, like in our current case, IDs can be incremental, but not exactly unique per customer. It means that it can be two different IDs, meaning it was entered twice in error. So, how can we find duplicates in this kind of table? Let's think about this for a second. We know that everyone has a phone number and an email unique to them. We can use these alongside their first name and last name to check if customers are duplicated in our data. First, we should list the columns in our data, and we can do this by using the columns method, customers.columns. Now let's print this, and we can see all the columns that currently exist. Awesome, this gives us the entire columns that contained in the data. And now we can select the columns we need to check for duplicates and make that into a list, like so. Let's say the list is columns, underscore two, underscore check,
>
> **[2:34](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980&t=154)** columns to check. And we would need to check their email and phone number. So, I'll copy this, make it easier for us. And then we need their first name and their last name. We don't need that last comma, so I will delete it. Also, let's run this. Great. Do you remember how to check for duplicates? We can check for duplicates using the dataframe.duplicated method. And in this data, we'll check for duplicates using a different method. So here we'll say duplicates, let's call it duplicates, is equal to customers. And in a list, customers.duplicated,
>
> **[3:32](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980&t=212)** where we are checking for columns to check. Great, let's run this. This will assign all the duplicates to the duplicates variable we have created here. And now to check if we have duplicates, let's print duplicates. Wow, we see that we have quite a lot of duplicates. Let's see how many duplicates exactly we have. This is big, we can't count this, so let's use the shape. So, we have duplicates.shape. Let's run this, and we see that we have 29 rows duplicated. Now let's deduplicate this data, leaving only the first instance. To do this, we use the keyword keep in the duplicated method. It looks like this. So, we say customers, that's our new customers, is going to be customers, and in bracket customers.duplicated. Again, columns to check, and our keyword. So, we only want to keep the first instance of the duplicates. So only the first time we see it happen, or we see it occur. So, let's run this. Awesome, this runs, and now our data has been deduplicated. Our final transformation
>
> **[5:04](https://www.linkedin.com/learning/etl-in-python-and-sql/standardization-handling-duplicates-and-missing-values?u=76281980&t=304)** for our newly deduplicated data will be checking for nulls and missing values. We can check for the existence of nulls and missing values using the pandas formula, it's null. It returns a data frame of boolean values, which are true for null or non-values. Let's check for the existence of missing values using the function, it's null. So that could be as easy as customers. Dot is null, customers, sorry, is null. And then sum, let's run this. Awesome, we see that we have no null values in all of the columns, that's great. We have successfully transformed our data by removing duplicates and checking for missing values. Let's head on over to the next video to learn about loading our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** in the last (1), we discussed (1), next video (1)
> **Env Vars:** etl (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Speakers:** - [tutor] (1)

#### [Challenge: Extract and transform data using pandas](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-load-the-data-using-sqlalchemy-and-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-load-the-data-using-sqlalchemy-and-pandas?u=76281980&t=0)** - [Instructor] Okay, it's time to test your knowledge. By extracting and transforming data from the employee table sheet, in the employee [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) data. You should name the resulting data frame employees. After loading the data, you can transform it by removing the empty columns, Job Rating, New Salary, Tax Rate, and 2.91%. This challenge should take you about five minutes. Good luck, I'm rooting for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Versions:** 2.91 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Extract and transform data using pandas](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-using-sqlalchemy-and-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-using-sqlalchemy-and-pandas?u=76281980&t=0)** - [Instructor] How was the last challenge? Did you figure it out? If you didn't, that's okay. It takes a bit of practice. If you did, well done. Now let's review the answer to the challenge. First things first, we should import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as pd. Let's run this to make sure everything is fine. Next, you should have downloaded the [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) file and moved it to the same location as your Jupyter Notebook for simplicity as shown on my screen. For the next step, we will import the employee's Excel sheet using the pandas method for importing Excel, pd.read.excel. We'll specify the exact sheet that we want. So let's define it. We'll be calling employees, which will be the name of our data frame, which equal to pd. Yeah, that's an error, pd.read_excel.
>
> **[1:05](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-using-sqlalchemy-and-pandas?u=76281980&t=65)** And now let's specify the file path. Let's copy the relative path from here. Removing this because I'm writing chapter 2 and now the sheet name. Let's go to the Excel sheet. We see that we have three sheets in this Excel, employees, employees table, and sales. However, we are only interested in the employees table, so let's specify that. Employees-table. Great, let's run this. Awesome. Now let's see all the data and dataframe simply by calling employees. Let's copy this and just paste. Great. We can see well virtually all the data in the data frame. And another cool trick for seeing all the columns in the data frame is calling the attributes columns. So let's say employees.columns, let's run this, awesome. This gives us all the columns in data frame. Now that we can see all the columns in the employee data, we can select the columns we want to drop. To do that, let's make a list called columns to remove. So I'll say columns to remove. This will be a list containing job rating, new salary, tax rate, and 2.9%.
>
> **[2:43](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-using-sqlalchemy-and-pandas?u=76281980&t=163)** So let's call that and run it. It's missing this. Yes. So now let's run this. Awesome. And now to drop the columns, let's call employees. The new data frame employees will be equal to employees.drop, which is a pandas method, and the columns would be equal to columns to drop or columns to remove rather. Now let's run this. Great, it ran successfully. Now let's call our new employees data. Great. We can see we only have these columns. Now let's use the columns attributes. So say employees.columns, and run. Great.
>
> **[3:39](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-using-sqlalchemy-and-pandas?u=76281980&t=219)** We can see that we have successfully dropped the columns we needed to drop. Now our transformation is complete. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (6), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), select the (1)
> **Code Identifiers:** read_excel (1)
> **Versions:** 2.9 (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)


### 3. Loading Data into Target Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data warehouses and data lakes](https://www.linkedin.com/learning/etl-in-python-and-sql/introduction-to-data-warehouses-and-data-lakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/introduction-to-data-warehouses-and-data-lakes?u=76281980&t=0)** - [Instructor] By now, you should be able to load and transform data from various sources, congratulations. Now, let's talk about the differences between [Databases](../../Skills/Software%20Development/Databases.md), data warehouses, [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md), and data lakehouses. I know this might sound confusing. and may seem like a mouthful, but these are all different ways organizations manage and store their data. Each has different characteristics and particular use cases, which we'll discuss. First, what are databases? Databases are organized collections of data that are usually controlled using a [Database Management](../../Topics/Database%20Management.md) system, DBMS. A database management system is a software that allows you to access, interact with, and manipulate a database and its content. Databases focus on the operational or transactional data and managing day-to-day CRUD, create, read, updates, and delete operations. They do not always have historical information since they are optimized for retrieving small amounts of data. Usually, when people speak about databases, they refer to [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) like [MySQL](../../Skills/Software%20Development/MySQL.md), [Postgres](../../Skills/Software%20Development/PostgreSQL.md), and so on. But the database can be structured, semi-structured, or unstructured. Let's break this down. A structured database uses tables to store data,
>
> **[1:35](https://www.linkedin.com/learning/etl-in-python-and-sql/introduction-to-data-warehouses-and-data-lakes?u=76281980&t=95)** and each table has a specified and predefined schema with columns and data types. For example, relational databases like MySQL, Postgres, MS [SQL](../../Skills/Data%20Science/SQL.md), and so on. A semi-structured database, however, does not quite fit into a table, but does have some structure. An example of that kind of data would be [JSON](../../Skills/Web%20Development/JSON.md), XML, and can be stored in a [MongoDB](../../Skills/Software%20Development/MongoDB.md) or a Mongo database. Unstructured databases do not have predefined schemas and are not organized in a tabular form. Examples of these kinds of data are social media posts, documents, images, which can usually be stored in an object-oriented database, or a Mongo database. Now, what are data warehouses? Data warehouses are structured and centralized systems or repositories that store data from various sources, such as transactional [Database Systems](../../Skills/Software%20Development/Database%20Systems.md), APIs, ERP systems, and CRM systems. Data warehouses are designed to support [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) and provide a single and structured view of the data in a consistent format. Data warehouses track historical information and are used by data analysts, data scientists, and other business users to aid in decision making. We'll be learning more about data warehouses in upcoming videos. Now, let's explore data lakes.
>
> **[3:10](https://www.linkedin.com/learning/etl-in-python-and-sql/introduction-to-data-warehouses-and-data-lakes?u=76281980&t=190)** A data lake is a flexible and easily scalable [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) system that allows for both structured and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) in its raw form. It doesn't really require a predefined schema or a structure. It is usually stored in a flat file architecture, which makes it easier for end users to access this data in its raw [Forms](../../Skills/Web%20Development/Forms.md). Data lakes are used by more technical users, like data engineers, data scientists, machine learning engineers. Since the data lake can store data from various sources, such as log files, machine-generated data, [IoT](../../Glossary/Concept/IoT.md) devices, social media feeds, and other unstructured data. Finally, data lakehouses are a more modern version or concepts of data lakes. They introduce an additional layer. They provide the benefits of flexible and easily scalable storage as well as querying data in a structured format. An example of how this can be done is using Apache Hive. In summary, databases provide transactional efficiency. Data warehouses are optimized for complex analytical queries that involve aggregations, groupings, and reporting across large datasets. Where databases support historical data from various business sources and intelligence tools and business intelligence tools for in-depth analysis, data lake offers [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and flexibility in storage
>
> **[4:46](https://www.linkedin.com/learning/etl-in-python-and-sql/introduction-to-data-warehouses-and-data-lakes?u=76281980&t=286)** while data lakehouses provide a balance between raw storage and structured query. Now that you know the differences between storage systems, let's head over to the next video where we'll load our data into a data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (8), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (4), [Database Management](../../Topics/Database%20Management.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **Env Vars:** dbms (1), crud (1), sql (1), json (1), xml (1)
> **CLI Commands:** mysql (2), mongo (2), apache (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Loading data into relational databases](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=0)** - [Instructor] Now that we know the difference between [Databases](../../Skills/Software%20Development/Databases.md), Data Warehouse, [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md), and Data Lakehouses, we will load our transform data from our Jupyter Notebook to our H Plus Sports Data Warehouse. In this lesson, we will be creating a PostgresSQL database on ElephantSQL, a hosting service that provides a browser tool for [SQL](../../Skills/Data%20Science/SQL.md) queries where you can create, read, updates and delete data directly from your web browser. This will serve as our H Plus Sport Data Warehouse. To create your [Postgres](../../Skills/Software%20Development/PostgreSQL.md) Database Instance, you can follow along as we go to www.[elephantsql.com/plans.html](https://elephantsql.com/plans.html). Here you can sign up and create a free TINY TURTLE Shared Instance. Let's try that. We would name an instance appropriately. For our instance here, we call it H Plus Sports. And tag it as data_warehouse. Next space would be to select to our Region. Great. We will just go with the default for each of these, and finally we can review our instance.
>
> **[1:33](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=93)** Default and we can create our instance. Great. Now that that is created, we can go in and see what our instance looks like. Great, we can see details about our Data Warehouse, connection strings and all of that. We'll come back to this. We'll also be using SQLAlchemy. This is an SQL Two Kit Library for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), which allows you to connect and interact with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) like Postgres. Since this is an external library, we would need to import it just like [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and we can import it using SQLAlchemy as db. So now, let us add it here. We would import SQLAlchemy as db. Let's run this to make sure everything is fine. Awesome, there's a lot we can do with SQLAlchemy. We can connect to relational databases like [MySQL](../../Skills/Software%20Development/MySQL.md), Postgres, SQLites, amongst other databases,
>
> **[2:48](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=168)** using the Create Engine Function. Let's explore the Create Engine Function. We have db.CreateEngine. Great, using the Sessionmaker Function, SQLAlchemy can also be used for [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) and querying. These are just some of the use cases for SQLAlchemy, as use cases are really broad. For more information, you can check out the Official Documentation at docs.[sqlalchemy.org](https://sqlalchemy.org). Now, let's create our SQL Engine. This will be used for tasks like executing SQL queries, managing transactions. It will also serve as a central point for these DBAP Interactions. The syntax for creating an engine is this. I'm just going to paste it and don't worry, you'll get this. Sorry, it's create_engine. Great, this is what it looks like. Sorry. There. All good. We place our dialects and driver, which is with the database you're working on, which could be Postgres, SQLites, or MySQL. Our username, our password, our hosts, ports, and database name with the correct details.
>
> **[4:23](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=263)** In our case, however, you can get your connection URL from the Details tab in your Elephant SQL [Dashboards](../../Skills/Data%20Science/Dashboards.md). So let's go back to that. Here's our Details tab, and you can see that we have our URL here. So let's copy this and connect. We replace all of this with our username. Great, now that I've gotten our connection details from our SQL tab, you'll want to add QL, as this says Postgres, not PostgresSQL. Let's correct this. Now, let's proceed to load data into our H Plus Sport Data Warehouse. To do that, we will use the Pandas Method, Data Frame to SQL. Let's run this first. And then it shows that our engine has been created. Awesome. The Data Frame Method to SQL. So here you see that I've already brought customers in. Here, you'll see that I've already brought the customer table in. Dropped duplicates and the Column Zip Code. So now, we will load our Customers Data Frame to our Data Warehouse using to_SQL. This would be customers.to_SQL.
>
> **[5:58](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=358)** Clicking on this to give more info. We will see that our to_SQL accepts the following parameters. Name, which is the name of the SQL Table. Connection, the name of the SQL Engine, which we have already created using Create Engine from SQLAlchemy. Index Parameter, this indicates if the data frame should be written as a separate column in the database. And finally, if exists, which specifies how a function should be behave if the table already exists. This function returns the numbers of rows copied to the table. So to load our data, now that we have imported SQLAlchemy and we have created our engine, the code for loading our customer's data to the H Plus Sports Data Warehouse becomes customers.to_SQL, the name of the table, which we'll want to be customers,
>
> **[7:06](https://www.linkedin.com/learning/etl-in-python-and-sql/loading-data-into-relational-databases?u=76281980&t=426)** the connection is going to be engine, which is what we called it. Oh, sorry, we didn't call it that. So let's call it that. Engine, we would have to rerun this. Great, engine and if it exists, it doesn't, but good measure is if it exists, let's replace it. So I'll say replace. It's a key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Great, and if it has index or I almost copied the indexes, I don't want that. So false. Great, let's run this. Awesome, it returns 1,000 rows. Now this lets us know that 1,000 rows has been copied to our Data Warehouse. For the next video, we'll head over to our A5 SQL Instance to query the data we just loaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (11), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Env Vars:** sql (11), url (2), tiny (1), turtle (1), dbap (1)
> **CLI Commands:** mysql (2), python (1), make (1)
> **Code Identifiers:** data_warehouse (1), create_engine (1)
> **URLs:** [elephantsql.com](https://elephantsql.com) (1), [sqlalchemy.org](https://sqlalchemy.org) (1)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is an  (2)
> **File Paths:** www.elephantsql.com/plans.html (1)

#### [Data quality checks and validation with SQL](https://www.linkedin.com/learning/etl-in-python-and-sql/data-quality-checks-and-validation-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/data-quality-checks-and-validation-with-sql?u=76281980&t=0)** - [Instructor] In the last video, we loaded our transform data into our ElephantSQL database. We also learned how to create an SQLalchemy engine, which enables us to connect to our database. We ran the load command with [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as well. In this video, we'll create data we have just loaded and learn about [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) checks and why they're important to ensure accuracy of your loaded data. As data moves from one place to the other, it's important to ensure data quality, completeness, and correctness. As your data pipeline becomes more complex, there will be a need to create tests that ensure that the data has not been truncated, lost, or corrupted during the ETL process. These checks and tests can be done in several ways. One of the most common ones include counting the number of rows and columns in the source versus the destination accounting for all the transformations that have taken place. Another good data accuracy check can also be checking for nulls, empty rows, duplicates, and default values in fields that should have valid data. What you have noticed is that checking for missing values in your data columns as well as your rows are important. You can use data accuracy checks to make sure the data is right. It stays the same and it's current. These checks often involve comparing data values with a reference source or a predefined rule or limit. Finally, one of the final checks you
>
> **[1:33](https://www.linkedin.com/learning/etl-in-python-and-sql/data-quality-checks-and-validation-with-sql?u=76281980&t=93)** can implement is a freshness check. Data is not good when it is still. This can lead to incorrect conclusions, therefore, poor decision making and costing the company money. A good way to implement data freshness checks is to agree on data warehouse SLAs. What is the most amount of time allowed in latency between the source and the data warehouse? Then you can create a lot based on these [SQL](../../Skills/Data%20Science/SQL.md) rules. For example, you could agree that data is considered fresh if the maximum timestamp in the table is C minus one day. Where C is the current timestamp. Now that we have discussed why data quality checks are necessary, let's implement a basic check. Here we'll get the count of rows loaded into our data warehouse and confirm that it's the same as the count of rows in our customer's data frame. We can confirm that by running a select count from customers. To do that, log onto your ElephantSQL console and navigate to your browser tab as shown on the screen. We can run our SQL query by selecting the count, star from customers. Now let's run this. This gives us 1000 rows. Now let's go back to our data in our Jupyter Notebook to run accounts and ensure it gives us the same thing.
>
> **[3:06](https://www.linkedin.com/learning/etl-in-python-and-sql/data-quality-checks-and-validation-with-sql?u=76281980&t=186)** So here we can say customers.shape. That's from this, great. It gives us 1000 rows and 8 columns. We have successfully performed a data quality check for our ETL. Let's head on over to the next video to automate our ETL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** etl (3), sql (2)
> **Cross-References:** in the last (1), go back to (1), next video (1)
> **CLI Commands:** make (1)
> **Tools:** jupyter (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Challenge: Transform the data and remove duplicates and nulls](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-transform-the-data-and-remove-duplicates-and-nulls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-transform-the-data-and-remove-duplicates-and-nulls?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-transform-the-data-and-remove-duplicates-and-nulls?u=76281980&t=6)** - [Instructor] Hello, welcome to another challenge. In this challenge, we'll test what you have learned by loading your previously transformed data from Challenge 2 into the H+ Sport data warehouse. A little hint, you should create an engine just like we did. and remember to use the two [SQL](../../Skills/Data%20Science/SQL.md) [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) function. If you do not remember, feel free to go back to the previous videos or check out the official pandas and SQL Alchemy documentation. Remember to name the resulting table employees. Good luck, you can do this, I'm rooting for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **Env Vars:** sql (2)
> **Best Practices:** remember to (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Transform the data and remove duplicates and nulls](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-transform-the-data-and-remove-duplicates-and-nulls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-transform-the-data-and-remove-duplicates-and-nulls?u=76281980&t=0)** - [Instructor] Hello. Welcome to the solution video for our last challenge. How did you get on? I hope it was good. We'll jump right into the code. As you can see on my screen, I am continuing from the solutions file in the last chapter. The only thing I have changed, however, is the location of my file in the read [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). Here. Since I've already loaded my data and transformed it, let's get straight into loading it into our data warehouse. First, we need to import SQLAlchemy as db, so let's import that. We'll run it to ensure it works. Great, it works. Next, we create our engine. Do you remember the syntax for that? If you don't, it can be found on your ElephantSQL details tab. Just do not forget to add the QL, so it completes your dialect to PostgresSQL. It will look something like this. I'm just going to paste mine here and run it. Awesome. It works. Now, let us load our data to our data warehouse using the two [SQL](../../Skills/Data%20Science/SQL.md) method. The syntax for loading our table would be employees .to _sql
>
> **[1:33](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-transform-the-data-and-remove-duplicates-and-nulls?u=76281980&t=93)** then name. The name of our table, what we want to name it in our data warehouse so you can see that properly. We want to name it "employees," so we'll copy that and just put here. Great. We also have to provide the connection, which is a string, and for us it's our engine, and for us it's our engine, then we have to provide the next key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), which is if_exists. This simply tells the function what we want to do if this table already exists at the source, so we want to say if it already exists, it should just replace it. Awesome. And then finally, we would add index, which is a key word that tells the function if we want to load the indexes of the data frame or not, and we don't. So now let's run this. This is a lot, so it's good to take a bit of time, so let's give it a second. Great. Our data has run and loaded successfully, and now we have completed this challenge. I hope you're having fun working on these challenges. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), in the next (1)
> **Code Identifiers:** if_exists (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Automating ETL Jobs: Scheduling ETL Jobs with Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Querying your data with SQL](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980&t=0)** - [Instructor] In the previous chapter, we loaded data into the H+ Sports store data warehouse and discuss [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) checks and why they're necessary. In this video, we'll create the data we have loaded. ETS are great because the power that data we need to make important business institutions. Here we'll query our data to make an important business decision. Where to open a new H+ Sport store branch? To query our data, log onto your ElephantSQL console and navigate to the browser tab. On the left of the screen, we can click on the table queries button to see a list of tables that currently exist in the database. For us we have just customers, so let's click on that and execute. And this shows us the top 100 rows in this data. We can go further to get accounts of all the customers where states is in Texas. So let's do that, we would select counts
>
> **[1:12](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980&t=72)** from customers where states
>
> **[1:23](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980&t=83)** is equal to Texas or TX. In our case, let's run this, awesome. We can see that we have 110 customers whose state is in Texas, and we can go even further to check for customers whose city is Dallas. Let's do that.
>
> **[1:53](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980&t=113)** Next one. Great we can see that 11 customers are in Dallas and the states is TX. The possibilities are endless. We can connect our table to an analysis tool and create [Dashboards](../../Skills/Data%20Science/Dashboards.md) and reports based on our data. Now we want to confirm what states we should open a new H+ Sports store branch. Here is the scenario, the company is making money and wants to invest wisely by opening a new branch in the states where it has the most customers. What states and cities should that be? To answer this question, we can use our recently warehouse data. We should select the states, the city, the count of customers in each state and city. Grouping them by states and city and ordering them with the highest customers descending. Now let's do that. I will of course be providing you with this query, so I'll just paste it here. Great. So for my query, we are selecting states, city, counts of customers ID as customer counts from customers, we're grouping by states and city ordering by customer counts descending. Now let's run this. Also, we can now present our findings and suggestions management with data to back it up. Opening a new branch in Washington DC
>
> **[3:30](https://www.linkedin.com/learning/etl-in-python-and-sql/querying-your-data-with-sql?u=76281980&t=210)** will be a great investment as we already have a large customer base in the city. We can also send carefully created meals, promotions, discounts to customers who reside in DC, informing them that a new store is opening, building excitement and this will ensure that our new store will be successful. Congratulations. We have successfully used our warehouse data to ensure that the management makes the right decision in opening a store branch at the right location. And we couldn't have done it without our warehouse data. The job of an ETL developer paused the business to make the right decisions. Let's head over to the next video where we'll orchestrate our ETL and ensure that our data is always fresh.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **UI Navigation:** click on (2), navigate to (1), select the (1)
> **CLI Commands:** make (3)
> **Env Vars:** etl (2), ets (1)
> **Cross-References:** previous chapter (1), next video (1)
> **Speakers:** - [instructor] (1)

#### [Scheduling ETL jobs with Airflow: Part 1](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-1?u=76281980&t=0)** - [Instructor] In this video, we'll automate our ETL to ensure it runs unaided. Imagine the sales team has a meeting every day at 8 AM. This means that the sales team reports and [Dashboards](../../Skills/Data%20Science/Dashboards.md) have to be ready at least 30 to 15 minutes before the meeting, which in turn means the ETL job has to have run and updated the table with the latest datasets. If this was to be done manually by a data engineer, the engineer would have to be awake for at least an hour or two before the data is needed to run the pipeline and deal with any issues that may arise. This is why ETL automation is necessary. ETL automation uses technology to run ETL processes and workflows between tools and systems without manual intervention. This is done based on schedules or events like new data or schema changes at the source. This ensures that organizations are always working with up to date and reliably updated datasets. We previously spoke about tools used for automation like [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md), Oozie, NiFi, Luigi, [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Data Factory, and SSIS among others. To automate our ETL in this course, we are going to be using Apache Airflow. Airflow is an open source platform designed to shadow and monitor workflows, which are defined as directed acyclic graphs, DAGs for short,
>
> **[1:32](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-1?u=76281980&t=92)** where each node represents a task to be updated independently or in parallel to other tasks, which makes it very useful for ETL processes, [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), orchestration, or other automation scenarios. Now let's get to setting up Airflow. I have provided a run through in this file for you and we are going to follow that step by step to set up our Airflow. First things first, we'll install Airflow with pip. Now let's go to our terminal. Let's click on that and run. This will obviously run faster for me because I already had Airflow installed, but that's the command to install Airflow for the first time. Next thing, let's go back to our file. We will initialize our Airflow database with the command airflow db init. Let's run that. Great. Now that the initialization is done, let's move on. We want to create a user with privileges and a username and a password. We don't want just anyone to access our scheduler, so that means we have to open our configuration file to modify a few lines to enable us to do that. And the configuration files are usually located in your AIRFLOW_HOME/airflow.cfg. For me, it is jennifer/airflow/cfg. We'll search for webserver in this file. I already have it open here,
>
> **[3:05](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-1?u=76281980&t=185)** so let's go here and search for webserver. Great. When we found that, we want to add these two lines that are copied to the file. For me, it's already added, but I will just paste and save just like that. Now that that is done, I want you to close the file. Now we have to go back to our terminal to run the create user command. The create user command has syntax like airflow user create. We supply the email, first name, last name, password, role, and username. And for me, it will look something like this. You should adjust the syntax to fit you. Now let's run that. For me, obviously it's going to fail because I already have a user named admin, but let's run that. It tells us that the admin user already exists in our database, which I hinted at before now. Great. After that, we need to start the Airflow webserver and scheduler using the command airflow webserver port 8080. Now let's run that on terminal. This usually takes a while, so if it does take a while for you, that's completely fine. Another thing to note is that sometimes, a notification might come up asking you to allow incoming communications. That is completely fine. Go ahead and allow that. And now finally, in a separate terminal without closing the first one, let's run airflow scheduler. So go back to terminal, a separate tab and paste.
>
> **[4:42](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-1?u=76281980&t=282)** Let's run this. It's coming up. Give it a second. Looks like that's running now. And final step is to open our browser and go to our local host 8080, and we should be able to see our Airflow UI. Let's go to our browser. And yay, we can see our DAG. This means we have set up Airflow correctly. Now we can head on over to the next vide to schedule our ETL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** etl (8), ssis (1), airflow_home (1), dag (1)
> **Tools:** terminal (5)
> **Prerequisites:** set up (2), install (2), initialization (1)
> **CLI Commands:** apache (2), node (1), pip (1)
> **Cross-References:** go back to (3), coming up (1)
> **UI Navigation:** go to (3), click on (1)
> **Definitions:** means that (1), is an  (1), defined as (1)

#### [Scheduling ETL jobs with Airflow: Part 2](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-2?u=76281980&t=0)** - [Instructor] In the last video, we set up Airflow to schedule our tasks. You can see that DAGs already exist in the web browser, so let's create ours. First we have to create a folder called DAGs in our Airflow hub. All of our DAGs will live here. DAGs are [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) files, so we can no longer use Jupyter Notebooks here. We have to use dot py files, Python files. So a neat trick is to create your ETL pipeline logic on Jupyter Notebook, and then, after testing, move it to Python. For our ETL that we'll use in this step, we would ingest and transform the Orders table by removing two columns. The customer's comment and salesperson's comment. We will then load it into our H Plus Sports data warehouse, naming the table Orders. Can you do this on ADEV? Try doing it on your Jupyter Notebook. Pause the video here to see if you can. Did you figure it out? If you did not, that's okay. It takes a bit of practice. First we would import [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) as PD, and SQLAlchemy. And then a link to where our Orders table is, and we'll create our engine. Since I'm using the Python file, I'm trying to clean it up, so let me define a function called main. This would have my logic, let me explain. We are reading the table, and naming it orders.
>
> **[1:34](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-2?u=76281980&t=94)** And then we are rewriting our Orders table such that it only contains other order ID, dates, total due, status, customer ID, and salesperson ID. And then we'll use our to [SQL](../../Skills/Data%20Science/SQL.md) function, to move it to our H Plus Sports data warehouse. And when all of this is run, I just wanted to print out that the script has been run successfully. Great. I saved my file as orders underscore ETL underscore logic. Now, let's go create our DAG file. To create our DAG file, it is necessary to import all the classes. Well, all the classes we need. I imported date time, Airflow as DAGs, Airflow operators, which is a Python operator, which I'll be using. From our orders dot ETL logic, I imported the function main. Now, let us define our default arguments. So we have defined owners, depends on past, start date, email on failure, email on retry, number of retries, and retry delays. For a list of more arguments, check out the official Airflow documentation. And finally, we can define our DAG, name our DAG, and use the Python operator to call our function from the orders ETL logic file. We define our D and name dates, orders full load. We are saying that default args are equal to these args here. And our description, it is my Orders table ETL DAG. And the schedule, we want it to run daily.
>
> **[3:08](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-2?u=76281980&t=188)** So our Python operator, and then we'll define a function called Run ETL. All it does is run our Python file. Which has a Python callable main. We have set dependencies, and we only wanted to run one task, which is a run ETL. Let us save all this. And then wait for a few minutes for our ETL to show up in the Airflow web server UI. While we see a few things. Let us refresh. Great, it has come. So we can search for it with orders. Orders full load. Awesome. Now we can see a couple of things. Let's go back. In our Details tab. Now we can see a couple of things. It is scheduled to run daily, and we have automated it so we can turn it on. So let's go back to Graph so we can have a good view and turn it on. Great. We want to also turn on Auto-refresh so we know when it has finished running. And I'm just going to refresh it. Let's execute it just to be sure it runs. It's running. Let's refresh. It's still running. Great, it is successful. And now we can query it, and select the top 100 rows of our Orders table. Let's go to ElephantSQL to do that.
>
> **[4:42](https://www.linkedin.com/learning/etl-in-python-and-sql/scheduling-etl-jobs-with-airflow-part-2?u=76281980&t=282)** I will just adjust this, orders, and Execute. Great, we have successfully brought our Orders table to our ElephantSQL data warehouse, unaided. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** etl (9), dag (5), adev (1), sql (1)
> **CLI Commands:** python (9)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **Tools:** jupyter (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)

#### [Challenge: Load the data into a database and automate](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-load-the-data-into-a-database-and-automate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-load-the-data-into-a-database-and-automate?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/etl-in-python-and-sql/challenge-load-the-data-into-a-database-and-automate?u=76281980&t=6)** - Hello. In the last couple of videos, we got our Airflow working and scheduled our orders_etl.py to run daily. Let's replicate that for this challenge. We would ingest, transform, warehouse, and schedule using Airflow. We will be doing this for the product [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) table. A little hint, for the transformation, convert the price in dollars to euros. Note, one United States dollar equals 0.92 euros for this challenge. See you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **File Paths:** orders_etl.py (1)
> **Code Identifiers:** orders_etl (1)
> **Versions:** 0.92 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - hello (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Load the data into a database and automate](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-into-a-database-and-automate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-into-a-database-and-automate?u=76281980&t=0)** - [Instructor] Hello. Welcome back. Were you able to hack the last challenge? Let's get into it. First, I will walk you through the logic. For some challenges, you need to walk through them with the Jupyter Notebook to test out your logic before moving to an ETL logic file, which is exactly what I did in this challenge. Now, what I've done here in my Jupyter file is to import [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), create our engine, find our [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) location, and now we can work through our transformation path. For the transformation in our Excel, the prices columns are all in dollars. Let's look at our Excel, here. They're all in dollars, and the challenge said to convert them to euros. For the purpose of this challenge, that would mean dividing by 0.92. We would update the price column in the [products](../../Skills/Software%20Development/Microsoft%20Products.md) data frame with the new price that is being divided by 0.92. Since we are carrying out a mathematical operation where each value in the price column is divided by 0.92, the result of the division can be assigned back to the price column. And with that, our transformation is done. So, great. We can then move it to our ETL logic file. I have imported the necessary classes, datetime, timedelta, DAG, PythonOperator, and main. Here, I defined my default arguments,
>
> **[1:32](https://www.linkedin.com/learning/etl-in-python-and-sql/solution-load-the-data-into-a-database-and-automate?u=76281980&t=92)** and I wanted to start on the first of 2024. I wanted to email on failure, email on retry, and number of retries, and retry delay in case it fails. For my DAG, I have called it products_full_dag. My default arguments are obviously this. I have defined default arguments, and description is "My products table ETL DAG", and the schedule is daily. For the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) operator, I have called my Python callable as my main function, and I just wanted to run that whenever this is called. And then now I have finally set dependencies as run ETL. So now that all this is good, I can save it and go to our UI. Great. This is our UI. We should just wait for it to show up. It will show up any second, or I can search for it. Products. Awesome. It's showing up already. Means I can toggle and wait for it to run. Let's go to the graph, so we have kind of like a more personal view. We'd wait for this to finish running. And great, it works. We have created an ETL from start to finish. Isn't this exciting? Now let's head on over to the next video and discuss next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Env Vars:** etl (5), dag (3)
> **CLI Commands:** python (2), find (1)
> **Versions:** 0.92 (3)
> **UI Navigation:** go to (2), toggle (1)
> **Tools:** jupyter (2)
> **Code Identifiers:** products_full_dag (1)
> **Cross-References:** next video (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Expand your knowledge of ETLs](https://www.linkedin.com/learning/etl-in-python-and-sql/expand-your-knowledge-of-etls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/etl-in-python-and-sql/expand-your-knowledge-of-etls?u=76281980&t=0)** - [Instructor] Congratulations and well done. You have become an ETL Jedi. In this course, you've explored the fundamentals of [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) for [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md), manipulation, and transformation. We have also discussed best practices for data extraction, transformation, and loading. We learned how to design and implement ETL workflows and gain hands-on experience with [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) for workflow orchestration. Well done. Thank you for your commitment and your hard work throughout the course. This is the start of your wonderful journey of creating ETLs with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and [SQL](../../Skills/Data%20Science/SQL.md) and more awaits you. To expand your knowledge, you should practice creating ETLs with different sources, implementing incremental ETL loads and using different tools, reading books, and documentation as well to deepen your understanding. Finally, you can join relevant communities to connect with professionals in the field. Connect with me on Medium where I write [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) articles, also on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and Twitter. I hope you have found this course valuable and applicable to your work and projects. I wish you continued success in your data engineering journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) (1), [Apache Airflow](../../Skills/Data%20Science/Apache%20Airflow.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** etl (3), sql (1)
> **CLI Commands:** apache (1), python (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Jennifer Ebe](../../Instructors/Data%20Science/Jennifer%20Ebe.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Extract, Transform, Load (ETL)
- SQL

## Path Context

### In [Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)
← [Problem-Solving Strategies for Data Engineers](Problem-Solving%20Strategies%20for%20Data%20Engineers.md) | **3 of 10** | [Fundamentals of Data Transformation for Data Engineering](Fundamentals%20of%20Data%20Transformation%20for%20Data%20Engineering.md) →

### In [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
← [Apache Spark Essential Training- Big Data Engineering](Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md) | **6 of 7** | [Data Quality- Core Concepts](../Artificial%20Intelligence%20(AI)/Data%20Quality-%20Core%20Concepts.md) →

### In [Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)
← [Data Engineering With Dbt](Data%20Engineering%20With%20Dbt.md) | **5 of 7** | [Complete Guide to SQL for Data Engineering- from Beginner to Advanced](Complete%20Guide%20to%20SQL%20for%20Data%20Engineering-%20from%20Beginner%20to%20Advanced.md) →

## Appears In

- [Advance Your Data Engineering Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Data%20Engineering%20Skills.md)
- [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
- [Data Engineering Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/Data%20Engineering%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL, Extract,  Transform
- [Using SQL with Python](Using%20SQL%20with%20Python.md) — Python (Programming Language), SQL
- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL

---

[↑ Back to top](#)