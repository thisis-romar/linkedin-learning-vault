---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: python-data-analysis-for-healthcare
url: "https://www.linkedin.com/learning/python-data-analysis-for-healthcare"
duration_minutes: 168
duration: 2h 48m
level: Advanced
updated: 4/1/2024
learners: 18615
skills:
  - Python (Programming Language)
  - Data Analysis
  - Healthcare Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE8G95e2ekjGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711656672748?e=2147483647&amp;v=beta&amp;t=JbQA0i_nEusIcIe26tcNQHhP5l0ivA___SCMW1M2vSU"
linkedin_topic: Data Science
learning_paths:
  - '[[Hands-On Healthcare Analytics]]'
  - '[[Python for Data Professionals in Healthcare]]'
prev_courses:
  - '[[Python for Health Sciences and Healthcare]]'
  - '[[Python for Health Sciences and Healthcare]]'
next_courses:
  - '[[SQL for Healthcare Professionals]]'
  - '[[Hands-on Data Science and AI for Healthcare]]'
path_nav: '[{"path":"Hands-On Healthcare Analytics","position":4,"total":8,"prev":"Python for Health Sciences and Healthcare","next":"SQL for Healthcare Professionals"},{"path":"Python for Data Professionals in Healthcare","position":2,"total":5,"prev":"Python for Health Sciences and Healthcare","next":"Hands-on Data Science and AI for Healthcare"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
  - topic/software-development
  - topic/artificial-intelligence
  - skill/python-programming-language
  - skill/data-analysis
  - skill/healthcare-analytics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20Data%20Analysis%20for%20Healthcare.md)

![Python Data Analysis for Healthcare](https://media.licdn.com/dms/image/v2/D560DAQE8G95e2ekjGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711656672748?e=2147483647&amp;v=beta&amp;t=JbQA0i_nEusIcIe26tcNQHhP5l0ivA___SCMW1M2vSU)

# Python Data Analysis for Healthcare

> The healthcare industry is one of the most diverse sources of data, from clinical to administrative to sales and supply chain, and even regulatory data. This course with data scientist and pharmacist Wuraola Oyewusi teaches you how to use Python for a wide range of data analysis scenarios in healthcare. Wuraola covers practical use cases like statistical data analysis, data manipulation, wrangling

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-for-healthcare) | 2h 48m | Advanced | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Python data analysis in healthcare](#python-data-analysis-in-healthcare)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Data Analysis for Healthcare**](#1-data-analysis-for-healthcare) (6 videos)
  - [Data analysis in healthcare](#data-analysis-in-healthcare)
  - [Types of data in healthcare](#types-of-data-in-healthcare)
  - [Sources of healthcare data](#sources-of-healthcare-data)
  - [Databases and storage for healthcare data](#databases-and-storage-for-healthcare-data)
  - [Data analysis tools and technologies for healthcare data](#data-analysis-tools-and-technologies-for-healthcare-data)
  - [Healthcare data analytics use cases](#healthcare-data-analytics-use-cases)
- [**2. Analyze Visit Data from an Outpatient Clinic Using Python**](#2-analyze-visit-data-from-an-outpatient-clinic-using-python) (11 videos)
  - [Explore patient visit demo dataset](#explore-patient-visit-demo-dataset)
  - [Save and load the patient visit demo dataset (different format)](#save-and-load-the-patient-visit-demo-dataset-different-format)
  - [Demography analysis of the patient visit demo dataset: Part 1](#demography-analysis-of-the-patient-visit-demo-dataset-part-1)
  - [Demography analysis of the patient visit demo dataset: Part 2](#demography-analysis-of-the-patient-visit-demo-dataset-part-2)
  - [Trend analysis of patient visit demo dataset: Part 1](#trend-analysis-of-patient-visit-demo-dataset-part-1)
  - [Trend analysis of the patient visit demo dataset: Part 2](#trend-analysis-of-the-patient-visit-demo-dataset-part-2)
  - [Wait time analysis of the patient visit demo dataset: Part 1](#wait-time-analysis-of-the-patient-visit-demo-dataset-part-1)
  - [Wait time analysis of the patient visit demo dataset: Part 2](#wait-time-analysis-of-the-patient-visit-demo-dataset-part-2)
  - [Correlation analysis of the patient visit demo dataset](#correlation-analysis-of-the-patient-visit-demo-dataset)
  - [Cost and insurance analysis of the patient visit demo dataset: Part 1](#cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1)
  - [Cost and insurance analysis of the patient visit demo dataset: Part 2](#cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2)
- [**3. Medication Demand Forecasting Using Python**](#3-medication-demand-forecasting-using-python) (5 videos)
  - [Explore the pharmacy sales demo dataset](#explore-the-pharmacy-sales-demo-dataset)
  - [Medication class analysis: Part 1](#medication-class-analysis-part-1)
  - [Medication class analysis: Part 2](#medication-class-analysis-part-2)
  - [Medication demand forecast using Prophet: Part 1](#medication-demand-forecast-using-prophet-part-1)
  - [Medication demand forecast using Prophet: Part 2](#medication-demand-forecast-using-prophet-part-2)
- [**4. Patient Experience Analytics Using Python**](#4-patient-experience-analytics-using-python) (2 videos)
  - [Explore laboratory patient experience demo dataset with Plotly](#explore-laboratory-patient-experience-demo-dataset-with-plotly)
  - [Sentiment analysis of patient experience reviews using TextBlob](#sentiment-analysis-of-patient-experience-reviews-using-textblob)
- [**5. Public Health Facilities GeoSpatial Analysis Using Python**](#5-public-health-facilities-geospatial-analysis-using-python) (5 videos)
  - [Explore the public health facilities geolocation demo dataset using GeoPandas: Part 1](#explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1)
  - [Explore the public health facilities geolocation demo dataset using GeoPandas: Part 2](#explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2)
  - [Interactive map for public health facilities geolocation demo dataset using folium: Part 1](#interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1)
  - [Interactive map for public health facilities geolocation demo dataset using folium: Part 2](#interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2)
  - [Interactive map for public health facilities geolocation demo dataset using folium: Part 3](#interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3)
- [**6. Healthcare Data Wrangling Using Python**](#6-healthcare-data-wrangling-using-python) (2 videos)
  - [Practical data manipulation and wrangling using pandas: Part 1](#practical-data-manipulation-and-wrangling-using-pandas-part-1)
  - [Practical data manipulation and wrangling using pandas: Part 2](#practical-data-manipulation-and-wrangling-using-pandas-part-2)
- [**Conclusion**](#conclusion) (1 videos)
  - [Using Python to analyze your healthcare data](#using-python-to-analyze-your-healthcare-data)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Python data analysis in healthcare](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/python-data-analysis-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/python-data-analysis-in-healthcare?u=76281980&t=0)** - The [[Healthcare Industry]] is big, and it's one of the most diverse sources of data. This data transcends clinical data. There is administrative, supply chain, manufacturing, sales, and even regulatory data. Hello, I am Wuraola Oyewusi. I'm a pharmacist and data scientist, and my work has been at the intersection of data in healthcare for the past 10 years. In this course, I will show you practical ways to use [[Python (Programming Language)|Python]] programming to analyze data in healthcare. We will derive insights, predict trends, visualize patterns, wrangle data, and improve our Python programming using the range of Python tools. So, are you ready to code with me? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Healthcare Industry]] (1)
> **CLI Commands:** python (3)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/what-you-should-know?u=76281980&t=0)** - [Instructor] To successfully complete this course and to code along with me, you need to understand the basics of [[Python (Programming Language)|Python]] programming. If this is new to you, a good place to get started is my [[Python for Health Sciences and Healthcare]] course on [[LinkedIn]] Learning. Otherwise, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] To get started with the exercise files provided in this course, go to colab.research.[google.com](https://google.com). And then on the left pane, click on File, Upload notebook. There'll be several options on where you can upload notebooks from. And then, click on the [[Python (Programming Language)|Python]] file that you would like to work with. As soon as you upload that, you're going to see the exact exercise file that you uploaded into your workspace. I encourage you to work with a plain one and type along, but if you'd like to just run the exercise files, remember on the left pane, you can click on files and then upload the matching datasets that are also provided with the exercise files. The exercise files provided are IPython file and they can work on any system or any platform that can run IPython.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **Exercise Files:** exercise files (4), exercise file (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** python (1)
> **URLs:** [google.com](https://google.com) (1)
> **Tools:** colab (1)
> **Speakers:** - [instructor] (1)


### 1. Data Analysis for Healthcare

[↑ Back to Table of Contents](#table-of-contents)

#### [Data analysis in healthcare](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/data-analysis-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/data-analysis-in-healthcare?u=76281980&t=0)** - As training pharmacist, one of our deliverables was medication stock taking for tracking and [[Forecasting]]. This was one of my first exposure to medication data analysis. Data analysis is applicable across industries. Let's spotlight what it means in healthcare. Data analysis.n healthcare is the process of collecting, cleaning, transforming, and analyzing healthcare related data to extract meaningful insight. It is the systematic examination of the range of healthcare related data to find patterns and inform decisions. Applied data analysis is a big topic in healthcare because of the availability of clinical and non-clinical data, and this means data backed improvement of both clinical and non-clinical outcomes. Data analysis also enables resource optimization, which is a priority in the [[Healthcare Industry]], and then every system that generates a lot of data benefits from the patterns identified either as pre or post-analysis. Now that we've laid the foundation on how to think about data analysis in healthcare, we look at the types of data you may encounter. Stay with me because we're getting to using [[Python (Programming Language)|Python]] to analyze healthcare a little later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Healthcare Industry]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (1), python (1)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Speakers:** - as (1)

#### [Types of data in healthcare](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/types-of-data-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/types-of-data-in-healthcare?u=76281980&t=0)** - [Narrator] When analyzing healthcare data, there are several common data types you would encounter. Let's take a look at those now. Categorical data. This type of data is either here or there. No in between. Examples are medication names and specific diagnosis. There is also continuous data. Typically, numbers that can fall within a range, like vital signs and numeric laboratory values. Ordinal data is a categorical data type that cares about other. It is found in instances like patient recorded scores, like pain intensity. For example, on a scale of zero to five, zero will be no pain, three will be moderate pain, and five will be severe pain. An experience rating such as service rating. Nominal data is typically numeric or alphanumeric that exists for naming purpose. They are typically unique. Patient registration number, for example, and maybe storage code for logistics and supply chain. There is also time series data. This is mostly longitudinal data. Observations over a time of interest. For example, hospital visit data over the years and disease tracking over a time range of interest. We also have free text.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/types-of-data-in-healthcare?u=76281980&t=94)** This is [[Unstructured Data]]. It can either be hand written or digital. For example, free text clinical notes and text service reviews. You can also consider image data such as x-ray, radiographs, and other scans such as ultrasound, MRI, and CT scans. And finally, there's genomics data related to genes. Examples are DNA sequences and gene expressions. We've talked about different types of data and we'll practice how to analyze these in a bit. But first, we'll look at where the data is coming from.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unstructured Data]] (1)
> **Analogies:** for example (4), such as (3)
> **Env Vars:** mri (1), dna (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Sources of healthcare data](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sources-of-healthcare-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sources-of-healthcare-data?u=76281980&t=0)** - [Instructor] We have established that the [[Healthcare Industry]] is broad. Here are some sources of healthcare data and examples. Clinical data that is directly related to treatments, electronic health records, or electronic medical records. Laboratory and medical imaging data are examples of clinical data. Administrative data. This includes operational and logistics data, and then insurance, billing, and cost data. In the digital age, patients also generate valuable healthcare data. This includes data from wearables and health apps and also self-reported symptoms and online reviews. We also have pharmaceutical data from manufacturing and drug development, and then from pre and post-marketing surveillance. Data from [[Public Health]] and government. Examples are disease surveillance and location data, like geolocation of public health facilities. Research data. This tends to be curated, and some are even published. Examples are clinical trials, academic research outcomes, and curated research [[Databases]]. The sources mentioned here are by no means exhaustive, and you probably know many other sources of healthcare data from the work that you do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Public Health]] (2), [[Healthcare Industry]] (1), [[Databases]] (1)
> **Speakers:** - [instructor] (1)

#### [Databases and storage for healthcare data](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/databases-and-storage-for-healthcare-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/databases-and-storage-for-healthcare-data?u=76281980&t=0)** - [Instructor] Generally, storage for healthcare data should be organized and secured like every other data type, and then extra security because of personal identifiable information. They are stored in [[Databases]], which are software and on storage media, which are usually [[Hardware]] or on cloud. Databases are used to store and organize data in a structured and efficient way electronically in a computer system. They are designed to manage, retrieve, and manipulate, and allow designated users to assess, update, and analyze information. A database is not physical. It's a software system. A database ensures data structure and relationship, [[Data Integrity]], data retrieval, security, and data [[Scalability]], backup, and recovery. There are different types of databases. The two major types are relational, which are structured tables with well-defined schema, examples of [[Relational Databases]] are [[MySQL]], [[PostgreSQL]], and Oracle Database, and [[NoSQL]] databases, which are flexible for structured and semi-structured data. No defined schema. Examples of NoSQL databases are [[MongoDB]],
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/databases-and-storage-for-healthcare-data?u=76281980&t=96)** Cassandra, and [[Redis]]. And then we talked about storage media. The types of storage media are hard disk drives, which are usually called HDDs, solid state drives, and then [[Cloud Storage]]. The first two, HDD and SSD, are physical. While cloud storage is accessed to a larger computer, typically over the internet. This is the fundamental of healthcare [[Data Storage]]. There are many variations, and there are many decisions that people make about how to study healthcare data, but behind them, foundationally, this is what the storage is about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[NoSQL]] (2), [[Cloud Storage]] (2), [[Hardware]] (1), [[Data Integrity]] (1)
> **Env Vars:** nosql (1), hdd (1), ssd (1)
> **CLI Commands:** mysql (1), make (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Data analysis tools and technologies for healthcare data](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/data-analysis-tools-and-technologies-for-healthcare-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/data-analysis-tools-and-technologies-for-healthcare-data?u=76281980&t=0)** - [Instructor] While this course is focused on [[Python (Programming Language)|Python]] for data analysis, data analysis can be done using a very wide range of tools and technology. The decision about the data analytics tool of choice is usually based on one, or a combination, of the following factors. Team expertise. People use tools they are familiar with and are proficient in. Cloud ecosystem. Many of the popular commercial cloud platform have data analytics tools, and since the data is already stored there, it makes sense to analyze them in the same ecosystem. The type of data. For example, not all technologies can process image data types. Volume of data. Some data are large for Lumus and continuous. Some tools are not just fitted for this. And then the budget of the organization. Low resourced [[Healthcare Analytics]] team needs to optimize for open source of very low cost tools. These are some of the data analysis tools that are available R, Python, SPSS, SAS, [[Microsoft Power BI|Power BI]], [[Tableau]], [[Hadoop]], Spark, Alteryx, and Cloud-based platforms. This list of tools are not exhaustive. There are many other data analysis tools. Some are open source, and some are proprietary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Healthcare Analytics]] (1), [[Microsoft Power BI|Power bi]] (1), [[Tableau]] (1), [[Hadoop]] (1)
> **CLI Commands:** python (2)
> **Env Vars:** spss (1), sas (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Healthcare data analytics use cases](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/healthcare-data-analytics-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/healthcare-data-analytics-use-cases?u=76281980&t=0)** - [Instructor] There are many practical use cases for healthcare data analytics. We'll talk about them under three broad headings, those related to clinical decision making and patient care such as disease outcome prediction, clinical decision support, personalized medicine insights, medication adherence monitoring, and telehealth analytics for remote care. Those related to operational efficiency and resource management, like optimizing resource utilization, workforce planning and management, supply chain and inventory optimization, marketing and patient engagement analytics, and revenue management insights. And those related to [[Public Health]] and research, as in public health data analytics, policy evaluation in healthcare, disease surveillance analytics, and clinical trial research analysis. In this course, we will work through five use cases together. The strategy behind the learning techniques in this course is to provide hands-on coding, explore the data sets in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Public Health]] (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Analyze Visit Data from an Outpatient Clinic Using Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore patient visit demo dataset](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=0)** - [Narrator] In this chapter, we will walk through a Demo Visit Dataset for the outpatient department of an hypothetical hospital. First, we upload the demo_hospital_outpatient_data.csv that is provided in the exercise files. We will be using [[Pandas (Software)|pandas]], a [[Python Data Analysis]] library, so import pandas as pd. Now let's read the data into a data frame named df_visit, meaning df_visit data frame of visit pd.read_csv. We can copy the file path directly here and then view.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=50)** So this is what our dataset looks like. Let's use df_visit.info to find out more. Here we can see the column names like Visit_Date, the Patient_ID, Age, Gender, Diagnosis. If the patient has insurance or not. The postcode total cost, the total amount that is spent when they were in the hospital. And then all those details about Registration, Nursing, Laboratory, Consultation and Pharmacy will talk more about what they mean in the future. This says that all the data is complete and these are the data types. If you'd like to confirm if there are empty rows, you can do df_visit.isna. It returns a Boolean for each of the values in the data frame that none of it is empty, none of it is na. If you don't want the Boolean. If you'd like to see the actual numbers, you can sum this up. So rather than the Boolean values, you have the exact values, which is zero, for each of the rows and values in the data frame. If any of them were na, if they were not valid is going to show up here. All rows seems to be complete without missing values. But let's say there was 1 that was missing and you don't want to continue coding with it. You can do df_visit.dropna,
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=147)** meaning drop all the na, drop anything that is empty. To ensure that this is the value that we have. If you want to keep that data frame that has dropped all the empty values, you need to save it into the same variable name or whatever name that you prefer. We are going to save this in df_visit is still the same data frame, this time. If you'd like to see the first five rows, you can simply do df_visit.head. This is show you the first five rows. Let's say you like to see the first 20. You can specify with the same code, but this time around the number of rows that you would like to see. So this time I'm asking for the first 20 and you can see these are the first 20 rows from index 0 to 19. While going through the column names, we have interesting values like Registration, Nursing, Laboratory, Consultation, and Pharmacy. What do they mean? In this dataset, this means the length of time that was spent in each department. How much time did each person spent while registering at the nursing station in the laboratory, consultation and then the pharmacy. Written the column name as just Registration, Nursing Laboratory is meaningless. If I was not here to tell you, you wouldn't know what it means.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=240)** So let's fix that. We are going to rename the registration column to registration minutes. That way anyone working with this dataset knows exactly what we mean. So df_visit.rename(columns), and then we do a dictionary, a dictionary containing the previous name, which is registration and then the new name which is registration minutes. If we look at the data frame, the column name for registration is now registration minute. But let me show you something interesting. If I check the main data frame, which is df_visit, let me view the first five columns. We can see that the registration minutes remains unchanged there. It's still registration when working with data frames, these are things to pay attention to. So if you want to write it in a way that it takes effect in the data frame, let's copy the same code. But this time around we are going to define the parameter code inplace saying, whatever chain that I'm making, make it on this same data frame. So let's make it true. So let's check a... Now the data frame has retained the new name for the registration column.
>
> **[5:33](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=333)** It now notes it as registration minute. There are other values like Nursing, Laboratory, Consultation and Pharmacy that will like to affect the same change too. We can do this together. First, we are going to define a column mapping, which is a dictionary of the old names and the new names. So nursing will become nursing minute. We're separated by a coma. Then we have Laboratory, Laboratory_minutes. We repeat the same for Consultation and Pharmacy. Now that we have a column mapping of the old name and the new names that we want to call the columns. Let's go to df_visit rename columns=column_mapping.
>
> **[6:30](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-patient-visit-demo-dataset?u=76281980&t=390)** Remember to define inplace, so that it stays on the data frame. Okay, now when we view the data frame, all the column names, they make sense. We have registration_minutes, nursing_minutes, laboratory_minutes. It's no longer just the bland names. And this is something to pay attention to in your work, especially when working with other people.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** df_visit (10), demo_hospital_outpatient_data (1), read_csv (1), column_mapping (1), registration_minutes (1)
> **CLI Commands:** make (3), python (1), find (1)
> **File Paths:** demo_hospital_outpatient_data.csv (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)

#### [Save and load the patient visit demo dataset (different format)](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=0)** - [Instructor] To successfully complete this exercise, you need to run the first section, Explore Patient Visit Demo dataset. One of the most important skills in [[Data Wrangling]] is to be able to save your data in different formats. We have cleaned and renamed some columns in the df_visit dataset. Now let's save it to a CSV file, df_visit.to_csv.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=30)** As within the same file name, but this time we will add clean. (keyboard clicks) Okay, to save the 1 million rows, it took about five seconds to CSV. That's fair. Let's check. So pd.read_csv. This works well, but there's an extra column called unnamed. To prevent this, we save it to CSV, we will specify that index is false. If we recheck the CSV file now, we can see that the unwanted column is no longer in the demo_hospital_outpatient_data_clean.csv. With [[Pandas (Software)|Pandas]] you can save a file as [[Microsoft Excel|Excel]]. So let's say df_visit.to_excel. Let's keep the same file name. But this time around it will have the Excel extension, which is XLSX. (keyboard clicks) This process is going to take longer than when we save to CSV. It'll take about five minutes. Kindly wait for completion and then continue to the next steps. Now let's attempt to read the new Excel file using Pandas' read_excel.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=125)** This is going to take another few minutes to complete. Okay, it took about four minutes to load the Excel file, but we've confirmed that it works. These are some of the factors that will guide your decision on which data format to use. Zipped files are compressed and smaller than CSV. To save a DataFrame to zipped format, import zip file, then specify a variable name with the zip extension. In our case, let's use demo_hospital_data_clean.zip.
>
> **[2:45](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=165)** We will save it into a variable named zipped_file_name. Now we are going to write the with statement. So with zipfile.zipfile, zipped_file_name, we specify that we want to write to W in quotes, comma zipfile.ZIP_DEFLATED as zip, zip.write. Let's copy the file part to the clean CSV.
>
> **[3:25](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=205)** If this is run correctly, we should have a file that has been zipped in our folder now. Okay, so we have a zipped file. Let's read that as CSV. Okay, that works. So we have successfully saved our demo_hospital_outpatient_data_clean file as a zipped file. And it took just about two seconds to run. If you remember, when we were trying to save for just the CSV to run, it took, let's confirm the minute, rather the seconds. Okay, it takes about two seconds too, but something significant has changed. Let's look at the file sizes. This is the CSV. If you hover by it, you can see that the demo_hospital_outpatient_data_clean CSV is about 72.85 megabyte. For the zipped file, it's 20. Just there about 20.47 megabyte. So this will be a good version to download. We can save the same DataFrame as an SPSS save file. To do this, we need to import pyreadstat. (keyboard clicks) Okay, it says there's no module like that.
>
> **[5:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=300)** Let's quickly install it. (keyboard clicks) Now that it's successfully installed, let's import pyreadstat again. Now it works, so let's define an SPSS file. Our file name is going to be demo_hospital_outpatient_data_clean.sav We are now going to use a pyreadstat.write_sav.
>
> **[5:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=336)** The name of our DataFrame, which is df_visit to SPSS file. If we check the files we should have a SAV file now. Let's copy the file path, data... Trying to verify if whatever we saved, if it's valid. So let's see what's in data. Okay, that's our DataFrame, what's in meta? Some form of [[Metadata]]. If we want to save this data directly, maybe back to a DataFrame, we can simply do df_visit equals to pd.DataFrame, and data.
>
> **[6:26](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/save-and-load-the-patient-visit-demo-dataset-different-format?u=76281980&t=386)** Okay, now we have successfully saved that again. By now, you should have a good intuition of different data types and some of the things you can do with them. The Pandas DataFrame is flexible. You can save into different data formats, compare file sizes, and many other actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (3), [[Data Wrangling]] (1), [[Metadata]] (1)
> **Code Identifiers:** df_visit (5), demo_hospital_outpatient_data_clean (4), zipped_file_name (2), to_csv (1), read_csv (1)
> **Env Vars:** csv (11), spss (3), xlsx (1), zip_deflated (1), sav (1)
> **Versions:** 72.85 (1), 20.47 (1)
> **File Paths:** demo_hospital_outpatient_data_clean.csv (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Demography analysis of the patient visit demo dataset: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=0)** - [Instructor] The patient visit dataset has information about the demography of the patients represented. To get started with the exploration, upload the demo_hospital_outpatient_data_clean.zip file. This data was saved from the previous exercise. It also provided in the exercise files for you. Now let's import [[Pandas (Software)|Pandas]] and Matplotlib. Pandas is popular for data analysis and Matplotlib for data visualization in [[Python (Programming Language)|Python]]. Load the dataset into a DataFrame named df_visit. We can copy the file path here. The dataset has a Gender column. Let's count the values there. df_visit["Gender"].value_counts()
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=62)** We have output. We have the female with more than 34,000, and male, similar value, 34,168. Let's save this into a variable called visit_gender, meaning the gender of the demography at the clinic. On the visit_gender variable, if you call a plot function on it, this is going to return a straight line. While this is a type of visualization, it does not answer our question, so it's not the appropriate chart type for this type of data. With the same code, visit_gender.plot, let's specify a chart type. Let's call it kind is equal to bar. Now we have a bar chart showing the split of the female and male patients at the clinic. It's showing that they're about the same number, but this is a better visualization for this. We can improve our bar chart by specifying the title.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=145)** So let's add that with Matplotlib. We can call it Visit Gender Distribution. Now we have the same bar chart, but now with title. We can change the colors of the bar chart. Let's improve the code and specify color. We are going to provide the list of color. We can say the first one should be blue, and the other color, pink, or whatever type of color that you decide on. Now we have a bar chart with the title, and different colors for each of the bars. We can specify label for the axis. Let's start by assigning the label to the X-axis. On the X-axis, we have the gender, so let's label it as Gender. And on the Y-axis, we have count, ylabel. We have improved our bar chart by adding title, changing the colors, labeling the Y-axis, and labeling the X-axis. Here we still have some text showing. If we want to prevent that, let's copy the same code. and let's include the plt.show. Okay, this time around, we have a tidier bar chart with all the labels in appropriate places. To analyze the age column, this example is not the best for histograms,
>
> **[3:59](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=239)** because this is a demo dataset and the values are artificial. But let's see what the histograms will look like. Let's look an histogram with Matplotlib. plt.hist, signifying histogram. Then the df_visit DataFrame, square bracket, Age. Let's create 20 bins. This means that the histogram is going to attempt to squish all the age values into 20 subgroups. And this time around there's that color, so I'm going to try purple. A good title will be Age Distribution. Okay, so these are the bins of the histogram, and this is what the distribution looks like. We can go ahead and improve this by specifying the label for the X-axis, plt.xlabel, Age, ylabel, Frequency, and plt.show. So we have the same histogram, but this time around it's better labeled. The edges of the histogram are not well defined, they seem all connected. Let's copy the same code, but specify some edge color. Let's call it k.
>
> **[5:33](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=333)** So this time around, if you observe the histogram, you can see that the bins are better defined compared to the previous one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** df_visit (3), visit_gender (3), demo_hospital_outpatient_data_clean (1), value_counts (1)
> **Definitions:** is a  (3), means that (1)
> **Exercise Files:** zip file (1), exercise files (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Demography analysis of the patient visit demo dataset: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=0)** - [Instructor] We started a demography analysis of the patient visit demo dataset in the last video. Now, let's inspect what is the maximum age of the patients in our dataset. We can do that by calling the max function on the age column, 90. And if we call the minimum, we have zero. If you're processing a data set like this, you should ask question, "What does the zero mean?" "Does it mean a newborn? Is it every child less than one? "What does this 90 mean? "What if it's a pediatric dataset "and 90 months and not years, 80 years in that scenario?" But these are some of the questions that you can ask when inspecting this type of data. You can create your own bins. For example, maybe rather than the 20 bins, you can do age bins. This is a variable containing the list of the ages that I want. So I want between zero and 10 and 20. We are aware that 90 is the maximum in our dataset, so we're going to stop there. Now we're going to create a new column that shows up, because we have so many ages, we're going to create a new column that represent age as a range instead. So that means rather than saying, "Oh, I'm 32," the age is just going to fall between 30 and 40.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=96)** It makes it easier to process this type of data. So let's define a new column, df_visit['Age_Range']. And then we will use the panda (indistinct) function, df_visit and then the bins are going to be the age bins that we defined here. If this is run successfully, we should have a new column, named Age Range. So let's inspect the df_visit. Now, we have an extra column indeed, and in this column for the first row, it's insinuating that the age is between 60 and 70. Let's look at the age. Let's see if we are right. Yes, this particular person is 68 years old, so the age is in the right range. For the first person, the age is 24, and it's between 20 and 30, so we're on the right track. Let's see the value count in each age range. This can give you a top level idea of what the population of your dataset, what is it like? So let's do ['Age_Range'].value_counts. Okay, almost equal number. In the dataset you probably will be working with, it may not look like this, but the code works. We can sort the index. So this is the index sequential, according to the ages.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=194)** Let's save this into a variable. We are going to call it Age Distribution. Let's visualize what it looks like. So age_distribution.plot, let's specify a color. Maybe we can go for sky blue. It's pretty nice. A good title for our chart will be age distribution, because that's what we're trying to do. Okay, so this is what the ages look like. Let's label the x and y axis. Copy the same code, plt.xlabel('Age Range'). On the y axis, we have the frequency, so plt.ylabel. Okay, so now we have successfully created our own age ranges and visualized them as bar charts. We can also analyze where our patients, where are they coming from? Let's count it by postcode. So I'm going to create a variable called postcode_counts, which is df_visit['Postcode'].value_counts.
>
> **[4:29](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=269)** Okay, let me view that. Okay, so this is the top level of the postcodes that the patients are coming from, and if you eyeball it, you can see they're definitely from certain postcodes, we have more patients and then others. This could be due to distance or whatever choices that people are making. Let's visualize this too. When visualizing you can define the figure size. This time around, I'm asking that this plot should show between the figure size of 10 by six. A good title would be Postcode Distribution. So this shows where the patients are coming from, the distribution, so this is what we have. These are the unique postcodes. I believe many of the patients from this postcode, 10014, that's where many of the patients are coming from, even though the numbers are not that far apart from the closest ones. We can visualize two variables together. For example, we can visualize the age distribution by gender. This is another way to specify the figure size. Still 10 by six. I encourage you to play around with this. You don't have to use the exact values that I'm using. And then on histogram, this can be a bit tricky, but then you get used to it. So this is a filter, and it's a plot histogram for every time the gender is male and then the age.
>
> **[6:07](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=367)** We are going to repeat the same thing for when the gender is female. We are going to put them in 20 bins, and then the labels. The title of the plot is Age Distribution by Gender. Okay, so now we have our histogram that is showing the male and female distribution by age. So for this group, there are more men than women. They're sort of close, but this is the visualization of what it looks like. Let's improve on our chart. Let's label the x axis as Age and the y label as Frequency.
>
> **[6:53](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=413)** To be sure of which gender, let's include a legend and then a plt.show.
>
> **[7:04](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/demography-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=424)** Okay, so now we have a better chart. This is quite big. We can reduce the size. Let's say you want it to be smaller, you can reduce the height. It was six. Let's make it five. It may not look that different. Yeah, it's different. So now we have the legends. We know which one is male. We know which one is female. When analyzing data, it's simple to forget to label, to dot your I's, to assume that people know exactly what you're saying, but people don't know exactly what you're saying. It's why we pay attention to as many details as possible.

> [!info]- Semantic Content
>
> **Code Identifiers:** df_visit (4), value_counts (2), age_distribution (1), postcode_counts (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Trend analysis of patient visit demo dataset: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980&t=0)** - [Instructor] We can analyze the trend over time of the visit date. First, we upload the demo hospital outpatient data clean zip. This is provided with the exercise files. Then we input [[Pandas (Software)|Pandas]]. We then load the data into a data firm called df_visit. When doing a trend analysis, date is an important part, so let's inspect the date column. This is what the first date looks like. It looks like a date, but it's important we verify the data type, so let's check the data type. This is string, even though it truly looks like a date, it's still string formatted. We can fix that by using the Pandas dates to time. So, df_visit['Visit Date'] and then we do pd.to_datetime. We copy the entire column, and we put it here. If we check this again with the same code, there's going to be a change. So now, it's no longer string. It's now Pandas date time format. Now, we can set the index to the visit date, df_visit. This means that we are changing what's the data frame will be indexed by. It was just numbers before. Now it's going to be the date.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980&t=97)** Let's view the data frame. Now, the visit date is our index. This is important when doing the trend analysis. Our data covers about five years. Let's resample the data frame such that it is grouped by the year. Let's name the new data df_resampled, df_visit.resample.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980&t=125)** We want to resample by year, so that will be ("Y").count. Let's see what the resampled data frame by year looks like. So this is what our data resampled by year looks like. It has managed to attempt to group all this by year. You can see that this data spans from 2018 to 2022. Now, we're going to do some visualization. Let's visualize the number of yearly visits by patient ID. Our assumption this time around is that this patient ID is unique by patient, and if it's repeated, it's the same patient that came at a separate time. So let's do some visualization. For this, we're going to need the matplotlib. So we import matplotlib. So let's start by plotting the figure, specifying the figure size. Remember that I mentioned that you can always alter the figure size. So let's do plt.plot(df_resampled_year). You're going to specify the patient ID. All chart should have titles, so let's do plt.title and name this ("Trend analysis of Yearly visit"). Okay, so we have a trend analysis of yearly visits here, and this spans from 2019 to 2023. If you're paying attention to the x axis,
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980&t=221)** you can see that this is every six months. Let's improve on our chart. Remember what I said about charts? They should be well labeled. The chart up here seems too tall. Let's reduce the height from six to five, and then plt.xlabel, this is ('Date'). Plt.ylabel, number of visits in that year. We can add grid lines. It's fancier, and it makes it easy to read. So let's say that it should have grid and then plt. Yes, now we have a trend analysis of the yearly visits. At the peak, in January, 2020, there were 14,000 patients, and the lowest time, according to this chart, was January, 2023. Why do we have a sharp decline here? Did we have terrible services around this time? Were the hospitals closed around this time? I can't decide, but these are some of the questions you were asked. Every time that you see sharp inflections, you should ask questions about your data. If you prefer a more granular overview, let's resample the data frame by month. So df_resampled_month this time, df_visit. Let's see what it looks like. Okay, so you can see some of the numbers,
>
> **[5:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-patient-visit-demo-dataset-part-1?u=76281980&t=317)** and it's by each month of the years that we have in this same dataset. We're going to plot this now that we are using per month. Let's make this faster. Let's copy this code. We'll readjust it for the month. This time around, we are doing resampled month. And then we're going to change the title to Monthly Visits. So let's see what that looks like. Ah, something interesting has happened. Okay, so there's a problem with the data shape. Let's look at how to fix that together. Okay, so what could be causing the fault in this shape? It has something about dimension. Do we need to reindex our data? Oh, I see what we have here. We have df_resample_months here, and we have df_resample_year here. Let's fix this. So there was a mismatch in our data. Let me see if this works now. Great, this works fine. So this is a more granular approach to our data showing the monthly visits data. This seems to be the highest number of visits per month. And again, this is a really sharp dip in the earlier part of 2022. This isn't granular enough. In the next video, we'll have months to improve the visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3)
> **Code Identifiers:** df_visit (5), to_datetime (1), df_resampled (1), df_resampled_year (1), df_resampled_month (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Trend analysis of the patient visit demo dataset: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=0)** - [Lecturer] Now, it's time to have labels as ticks. This is going to take a while... So, let's get started. So, monthly_ticks=pd.date range, the minimum index in the data frame, and the end is going to be the maximum index. And we will specify that we want the frequency by month because that is what we are trying to add to our data frame. So, that's why the monthly labels. Date dot dot. We are going to use the modular as a placeholder. So now that we've set the tick, it's still going to be the same code. So let me try to copy it. Before the X label, we are going to set the X ticks and then let's do a rotation, so that we know exactly which side it's supposed to face. Okay, hopefully this works well. Okay, so we are starting with an invalid syntax here. Okay, this is supposed to have a string quotation. Okay, so now we have a better chart and it has the exact month that each of the ticks represent. We can also decide that we want to see the trend per month. This is for the entire five years and it's broken down to monthly visits. The sharp dip that we found the other time was February, 2022. Why did we have such a dip?
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=94)** While we had... maybe just about 1000 patients, when at the peak of this thing we usually have about 1000, maybe 240 here. What happened in this month? That's a question for you. If we decided to view what the numbers are like, what is the trend for each of the month? Let's say February. Let's filter the data by the target month. DF re-sample month... DF. So here we have requested to filter this data by the target month and two here means February. So, let's plot the specific month. and a suitable title for this place will be... We are going to string format that so that when we change the month, it's able to automatically change the month's name too. So, we are going to do a string formatting and then name these.. trend for this is a place holder, DF target month index place holder for the month. And then we are going to say across five years, because we know it's five years, The labels are the same. Okay, everything seems to have worked well, but it says index is not defined and it's on line six. So this is line six. Okay, let me fix that. Let's see what it looks like. Okay, so this is a trend for all Februaries
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/trend-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=188)** across five years. I started my investigation with February because there was a sharp dip on February, 2022 according to this demo data set. And the best February so far, was in 2020, but then there's been a sharp decline since then. Let me copy this. Let's look at another month. Let's look on maybe November. Okay, interestingly, for November in 2022 there was a dip and then it started to rise again and the best month for November seemed to be in 2019. So, practice on your skills in observing trends in data and approaches for you to look at every other month. What do you think could have happened? Or why was there a dip in the patient visits were there hospitals? Were they locked? Was there a problem with personnel? Were people angry? Those are some of the questions that you can attempt to answer.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Identifiers:** monthly_ticks (1)
> **Speakers:** - [lecturer] (1)

#### [Wait time analysis of the patient visit demo dataset: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=0)** - [Instructor] When assessing services, wait time is one of the things that people care about the most. Our hospital visit demo data set, provides information on the wait time per visit in different departments. First, let's import the necessary libraries, import [[Pandas (Software)|pandas]] as pd, import matplotlib.pyplot as plt. And then, let's upload the demo data set. The demo_hospital_outpatient_data_clean zipped file is provided for you in the exercise files. We download our data sets into a variable called df_visit, pd.read_csv, and then the file path.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=49)** (keyboard clicks) We have wait time in five departments: registration, nursing, laboratory, consultation, and pharmacy. And all of them are in minutes. Let's derive the total wait time for each visit and save in to column called Total_Time. df_visit, Total_Time in minutes. df_visit, registration, nursing, laboratory, plus consultation time, plus df_visit pharmacy time. (keyboard clicks) In the DataFrame we now have an extra column called Total_Time that is an addition of all the time spent in each department in minutes. Let's improve our data by creating another column called Total_Time in hours. df_visit, Total_Time, this time around in hours. df_visit, Total_Time in minutes divided by 60, since there are 60 minutes in one hour, Now we have an extra column showing the total time spent per visit in hours. For example, this person spends more than six hours through the entire process during their hospital visit.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=144)** To get an overview of our data set, let's calculate the average time spent per visit in hours. So we create the variable called average_total_time_in_hours, df_visit, Total_Time in hours, dot mean. The average total time is 5.20, this means that based on this data set, this is an average time a typical person will spend when they visit this hypothetical hospital. Now let's investigate the departments with the longest average wait time. max_time_department, df_visit, consultation time. So we are assessing all the columns that contain wait time in our DataFrame. (keyboard clicks) Now that we have referenced all the column names, let's sum them all using the sum function and find the one with the highest index using the idxmax function. So what department has the highest max time? The department with the highest max time is the registration department. So some of the questions when analyzing this type of data, if people are waiting for this long in the registration department, are there ways to fix this? Let's investigate further.
>
> **[3:57](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=237)** For the registration department, what was the longest wait time? We can use the max function for this. The longest wait time is 120 minutes, that is two hours. That was the longest time anyone spent waiting to get registered. Let's look at the shortest one. We can assess that by the minimum function. And there we have it, that means it's possible for registration to be completing five minutes. Some of the questions you can ask, why was this possible? Why did some people have to spend as much as two hours for a process that some could finish in five minutes? This is an hypothetical scenario, but this is some of the things that you can experience when working with real data sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** df_visit (8), demo_hospital_outpatient_data_clean (1), read_csv (1), average_total_time_in_hours (1), max_time_department (1)
> **Definitions:** is an  (3), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 5.20 (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Wait time analysis of the patient visit demo dataset: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=0)** - [Instructor] In the previous video, we calculated a range of [[Statistics]] about the wait time in the registration department of the patient visit demo dataset. Let's continue the analysis by replicating that for other departments by writing a [[Python (Programming Language)|Python]] function that can take a DataFrame name and the column of interest to return all these statistics in derived values. We'll go ahead and create a Python function called department_wait_time_statistics, which can take a DataFrame, and the wait time column of interest. The first thing we will do is to extract the wait time data from the specified column. So wait_time_minutes equal the DataFrame, and then the wait_time_column. And then convert the wait time from minutes to hours, wait_time_hours equal wait_time_minutes divided by 60,
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=66)** because there are 60 minutes in an hour. Let's start with the basic statistics. Minimum time is a wait time in hour, and then we apply the minimum function. Maximum time, wait_time_hours.max. Mean time, wait_time_hours.mean. Median time, wait time in hours, and then we apply the median function. Standard deviation time, so we can have std_dev, is wait_time_hours.std function. These are the basic statistics that we care about. So now let's write a simple sentence that can describe all those values. For example, For the department, the exact department in that is stated, the wait time ranges from what time to what time. So now let's return sentence. Let's test our function. department_wait_time_statistics, the name of our DataFrame is df_visit. We are checking for the nursing time in minutes. So this function works. It has calculated the basic statistics for the Nursing column, which is in minutes. So for the department, nursing time in minutes,
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=160)** the wait time ranges from the minimum wait time, which is 0.08 hours to two hours. The average wait time is one hour, the median is also one hour, and the standard deviation is 0.56 hours. Let's experiment. What if I put the column name that does not exist, like nursing timing in seconds? They could rightfully written the key error, because in our DataFrame, there is nothing like nursing time in seconds. How can we prepare for something like this? We can improve our code by making an allowance for an initial check before the code. So this is a function, but this time around, rather than wait_time_column, we can simply put department_name. And we start our code by an important statement, if department's name not in the DataFrame, df_visit, this time, .columns, should return a statement, return Department, a placeholder for the department's name, not found in the DataFrame. Let's replace all the wait_time_column with department's name. So now we have adjusted our function such that it checks if the column exists in the DataFrame before running at all.
>
> **[4:16](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/wait-time-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=256)** So now let's copy this, department_wait_time_statistics, it's the same function. Yeah, so this time around, rather than returning a key error, it returns that the department nursing in seconds is not found in the DataFrame. The further exercise that you can practice is to adjust your function, so that it can check if the DataFrame name is even valid in the code itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (5), [[Python (Programming Language)|Python]] (2)
> **Code Identifiers:** wait_time_hours (4), department_wait_time_statistics (3), wait_time_column (3), wait_time_minutes (2), df_visit (2)
> **CLI Commands:** python (2)
> **Versions:** 0.08 (1), 0.56 (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Correlation analysis of the patient visit demo dataset](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980&t=0)** - [Presenter] Correlation is an interesting way to study the interdependence of variables. Let's visualize the correlation patterns in the numeric columns of the hospital visit dataset that we have been analyzing. First, import the necessary libraries, import [[Pandas (Software)|pandas]] matplotlib and seaborn. Seaborn is a [[Python (Programming Language)|Python]] library for visualization, just like matplotlib. Now we are going to upload the Demo Hospital Outpatient Data Clean. It's a zipped file that has been provided for you. Now look the data set into a variable called hospital visit, pd.read_csv, and then the file path. This is what the dataframe looks like. We have confirmed the types of variables that we have. Let's see what the correlation looks like for the entire dataframe. So we are going to call the corr function on it. Okay, so this is a general correlation value. And for each of the columns, for each of the values, you can see that they correlate to each other. Patient ID patient ID is going to be one. Even though we shouldn't be looking for correlation in that, it's not the numeric data set, but this is what the general correlation matrix look like for the entire dataframe.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980&t=93)** And if you're paying attention, you will see that it's only the columns that are numbers, any type of numeric that the correlation matrix worked on. So let's save the correlation into a variable called correlation_matrix. To visualize this correlation_matrix, we're going to use seaborn. The alias is sns. Let's put it in an heatmap. So this is what the general correlation matrix looks like if you attempt to visualize it. The higher the correlation, the lighter the color. So this place that the colors are really light, it's the same value. This is where patient ID versus patient ID. Let's make a correlation matrix heatmap. Let's make it look better. To make it easier, less annotate it using the annot parameter. You can see that this time, each value is shown on the correlation map. And this is clumsy. It's not what you prefer. Let's change the color. I will prefer the cool warm color. So we can do cmap = coolwarm. Let's add the title. So I've added the title called Correlation heatmap for the hospital visits data. Okay, so this is not defined.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980&t=188)** Let me have the string sign. So this says, the coolwarm is not the known color map name. Let's try viridis. Okay, so viridis works and this is the pattern of what viridis look like. So like we said, the numbers on our heatmap, they are clumsy. Let's fix that. So let's start by defining the figure, plt.figure. Figsize, let's make it 12 by five.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980&t=230)** Okay, so now we have a clearer view by defining the larger space for the correlation heatmap to show. There are other ways to improve on this visualization. For example, we can limit the number of decimal points. Let's use FMT for that and specify that it should be in two decimal places. Let's also adjust the linewidth. Okay, so now we have a better defined correlation heatmap. The intensity of correlation can be observed based on the colors in the heatmap. This is an indicator on the right-hand side. The more yellow the boxes, the more positively correlated they are. And if they are purple, the more negatively correlated they are. If the color is just about blue, there may be no correlation at all. If it's kind of green, there may be some positive correlation. For example, all the values on the X and Y axis are totally correlated with each other because they're exactly the same value. But if we come to insurance versus total cost, we can see a significant negative correlation. Meaning that if a patient has insurance, then the cost is lower. Between the total cost spent and the time spent in the registration unit, there is a positive correlation of 0.32. Could this mean that when people spend more time
>
> **[5:24](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/correlation-analysis-of-the-patient-visit-demo-dataset?u=76281980&t=324)** at each of these units, they have the tendency to spend more? I don't have an answer to that, but it's definitely something to look at. For many of the values that we have in these data sets, they are not correlated to each other. For example, the time spent in registration is not correlated with the patient ID. The time spent in registration is not correlated with the age. So correlation maps, they are useful to have an overview of the numeric values in your dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), python (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** for example (3), just like (1)
> **Code Identifiers:** correlation_matrix (2), read_csv (1)
> **Env Vars:** fmt (1)
> **Versions:** 0.32 (1)
> **Speakers:** - [presenter] (1)

#### [Cost and insurance analysis of the patient visit demo dataset: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=0)** - [Presenter] Revenue is an important part of any system, including healthcare. The hospital visits demo data set as information about cost and insurance per visit. Let's deep dive into this. First, upload the Demo Hospital Outpatient Data Clean zipped file provided for you in the exercise file. And then go ahead and import the necessary libraries, [[Pandas (Software)|pandas]] as pd, matplotlib.pyplot as plt. Now let's load the data set into a variable name, df_visit pd.read_csv, and then the file path. So the data frame has a column that specifies if a patient has insurance or not and the total cost. The total cost there means the amount spent per visit. That means in whatever currency you're thinking in, this first patient on the line spent 2,274 during this particular visit. Let's see if there's any relationship between gender and the amount spent. So avg_cost_by_gender, df_visit, which is the data frame, .groupby gender. This is those instruction that the code should group the entire data frame by gender and then find the mean of the total cost.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=97)** Total_cost.mean. According to this analysis, there is no significant difference between the amount spent by female customers or male customers. Now let's make an histogram of the total cost distribution using matplotlib, plt.hist, df_visit, Total_Cost. We're going to view that in 20 bins. A good title for the histogram is Total Cost distribution. And on the xlabel, we have Total Cost. And on the ylabel, we have Frequency, plt.show. So this is what the histogram look like. At the lower hand, people seem to spend around 1,000 of whatever currency we are thinking in. And at the other extreme, about 5,000. But it seem that most people belong to this distribution where they spend something above 2,000 per hospital visits. Let's compare. Let's see if there's an effect of the cost per visit and insurance. So we're going to find the main cost with or without insurance. So let's do avg_cost_by_insurance, which is df_visit, square bracket, df_visit. As insurance, that's the name of the column that shows if a patient has a insurance or not.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=192)** True, because this is a true or false answer. So what is the total cost when the insurance value is true? So Total_Cost and then the mean. Let's see the output. So this is the average. So the average when the patient has an insurance according to this demo dataset is about 1,876. Let's do the same. This time around, avg_cost_without_insurance, and that means we are setting these two, false. So a typical visit for patients without insurance is more than 3,000 of whatever currency you're thinking in. Doesn't make a good case for the team to encourage people in our community to get health insurance. Now let's look at the pattern of cost over time if something has changed over the years according to cost. We're going to start that by reformatting the visit date column, df_visit, Visit_Date. We are going to format that to a Pandas date time format, and then set this new format as the index. So df_visit.set_index. Visit date is now the index, the reformatted one, which is no longer a string value by date, it is time value.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-1?u=76281980&t=289)** And we set it in place. So annual_total_cost, df_visit, Total_Cost. So we resample by year. We want to see all this data by year and then the sum. So let's visualize this. We'll put it in the figure, plt.figure. A figsize, let's make it a 12 by six plot. And then plt.plot, annual_total_cost.index, and then annual_total_cost.values. A good title for this would be plt.title and not total cost over time. On the X label, we have a Year. On the Y label, we have Total_Cost. Let's add some grid, and then plt.show. Okay, so this is the pattern of how much people have spent over the years, and this is the peak of the spending. As at the first quarter of 2020, this was the highest. But an interesting pattern is that there's been a steady decline over the years, and these are good questions to investigate. Do we have less people coming? Do we have more people using insurance services? But that's for the management team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Code Identifiers:** df_visit (8), annual_total_cost (3), read_csv (1), avg_cost_by_gender (1), avg_cost_by_insurance (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is an  (1), is a  (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [presenter] (1)

#### [Cost and insurance analysis of the patient visit demo dataset: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=0)** - [Instructor] We have analyzed the cost pattern of the patient visit demo dataset in the previous video, so now let's look at the insurance data. To compare the insurance datas over the years, first reset the dataframe index, df_visit.reset_index(). This way, the dataframe is returned back to the original format before we set the index in the previous video. So now for this task, we need to set the visit date as the index, df_visit.set_index(Visit_Date), inplace so that it's on the same dataframe. Df_visit. On the inspection of the dataframe, we can see that the visit date is now the index of the dataframe. And this is the column that we are working with that shows the insurance status to either be true or false. Now let's create a variable that contains the total cost resampled over the year for patients that have insurance. We're going to name it has_insurance_true_data, df_visit[df_visit['Has_Insurance'] == True] and then we filter by the Total_Cost resampled by year and then sum. We're going to repeat the same thing for has_insurance_false.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=100)** So now let's plot our values, plt.figure(figsize = 12,6). And our plt.plot has_insurance_true.index,
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=117)** has_insurance_true.values. Let's label that as "Has Insurance: True." On the same plot, we impute the value for has_insurance_false.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/cost-and-insurance-analysis-of-the-patient-visit-demo-dataset-part-2?u=76281980&t=137)** A good title for the plot is "Annual Total Cost By Insurance Status." On the xlabel, we have Year, and on the ylabel, we have Total Cost. We want the plots to show the grid, so plt.grid(True). We will also like to see the legend, plt.legend(), plt.show(). So this is what the plot's comparing, the total cost over the years. This is in several millions. And the blue line shows the pattern of people who have insurance. And of course, the cost is much lower than those without insurance. And over the years, there's a slight upward trend of more people getting insurance. And of course, that means the trend of those that do not have insurance is reducing in this particular distribution of patient data. So this gives a better overview of how patients are interacting with the cost and the insurance of this patient visits and dataset. Remember, this is a demo dataset and the pattern can definitely be different if you're working with real-life data.

> [!info]- Semantic Content
>
> **Code Identifiers:** df_visit (4), has_insurance_false (2), has_insurance_true (2), reset_index (1), set_index (1)
> **Cross-References:** previous video (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Medication Demand Forecasting Using Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the pharmacy sales demo dataset](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980&t=0)** - [Instructor] The pharmacy is an important part of any healthcare system. It could be a community pharmacy or a pharmacy service in the clinical center. In this exercise, we will analyze medication class and sales data from an hypothetical pharmacy. To get started, upload the demo pharmacy sales data that is provided for you as part of the exercise files. Now, let's import the necessary libraries, like [[Pandas (Software)|Pandas]] matplotlib and Seaborn. Import pandas as pd, import matplotlib, import seaborn as sns. We then load the dataset into a variable called df_pharmacy_sales, pd.read_csv, and then the file path to the dataset. So this is the pharmacy sales dataset. We have a column called Date Sold, which shows the date that the item is sold, the medication name, this is the generic name, and then the medication class. This is the pharmacological class that the medication belongs to, the quantity sold, and the price. Let's find out more about the data frame by using the info function. df_pharmacy_sales.info. So in this data frame, it has about 1 million rows.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980&t=94)** Let's count that again, one, two, three, four, five, six, yes, six zeros, so it has about 1 million rows of sales across different days, and all the data set is completed, so none of them is not. We have two numeric columns. Let's check the [[Statistics]] using the Pandas describe method. We will save it into a variable called summary statistics, the names of the columns, quantity sold, and the price, describe. So this is what the summary statistics look like. If you're paying attention to all the values there, you will see that the mean, the std, minimum, the first quarter, they are similar, they are very close. This data set is a domain data set. It was created in a similar distribution to each other, though the values are different for each row. Let's see, can we create a histogram for the quantity sold? df_pharmacy_sales['Quantity Sold'], (indistinct). Let's put it into 20 bins and specify an edge color, so that the lines are well defined in the histogram. It's proper to tie to our visualization, so plt.title("Histogram of Quantities Sold"), and then plt.show. So this is what our histogram looks like.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980&t=191)** The quantity sold, they are all in a similar range, the similar frequency of the quantity sold. Like I said, it's in the design of this dataset to look like this. Your dataset will probably not be like this. You can plot to histogram by using subplot. Let me show you how to do that. So let's define plt.subplot(1,2,1). The same data from here, the quantity sold, let me just copy this. And then on this same subplot, we are going to use the second column. So rather than (1,2,1), we are going to have (1,2,2), and then we are trying to plot the price, not the quantity sold. So, this is the price, the image color. Let's improve on the name, Histogram of Price, and then plt.show. Okay, so we have successfully plotted two histograms on the same line. This is not the tidiest. We're going to make it tidier in the next section, but we have successfully plotted two histograms. If you have been curious about how people place two charts on the same line, this is how it's done. So to improve the appearance, we are going to place this inside a figure. So, let me copy the same code, but this time around we are going to have a plt.figure and then (figsize(12,4)).
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980&t=286)** We want it as 12 on the x axis and four on the y axis. Let's see what it looks like this time. Okay, so we have a better visualization that is better defined, and it looks much better than the first one. In Seaborn, you can plot histograms too. These programs are plotted in matplotlib, which we've been using the alias plt4. So, let's mix it this time around using Seaborn. Seaborn tends to have fancier visualization, so let's see. It's still on similar subplot, but this time around, rather than use plothist, we are going to do sns, which means seaborn, histplot, meaning histogram plot, and then put quantity sold. Let's define bins too. Let it still be 20, since it works well. In Seaborn, we can specify that it shows a kernel density estimate plot with the histogram. So I'm going to set that to True,color. I'll make it sky blue. Let's repeat the same for prices.
>
> **[6:08](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-pharmacy-sales-demo-dataset?u=76281980&t=368)** Let me specify another color here. We can make it purple. Okay, so now we have two charts with fancier colors. And if you pay attention here, this is the KDE line. If this data had a better distribution, you would have much appreciation for the kernel density estimates line, but I wanted to show you how it comes with Seaborn, and that's why we went through this. We have explored the top level of the pharmacy sales dataset. Now we are aware that we have the sales dates, we have the medication that was sold, we have the medication class, we have the prices, and we've practiced now to apply some visualization techniques in our exploratory data analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Statistics]] (3)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** df_pharmacy_sales (3), read_csv (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** kde (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Medication class analysis: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980&t=0)** - [Instructor] Medications can be classified in different ways. The pharmacological class they belong to is a popular method, and for each of the medication names in the pharmacy sales data set, there is a pharmacological class too. First, upload the demo_pharmacy_sales data provided for you in the exercise files and then import the important [[Python (Programming Language)|Python]] libraries for analysis and visualization, like [[Pandas (Software)|Pandas]], Matplotlib, Seaborn, and then WordCloud. Now go ahead and save the data into a variable called df_pharmacy_sales. pd.read_csv. These are the available columns, the date sold, the medication, generic name, the medication class, which is pharmacological, quantity sold, and price. Now let's inspect the value count of the medication names. (keyboard clicks) This will give us the top level of the medication names in our DataFrame and the numbers. So it's saying we have a lot of tretinoin topical cream. It appeared more than 15,000 times. And then we have clindamycin topical lotion. It appeared about 917 times. The length of this value count is 279. That means, despite the fact that this data set has about 1 million rows, the number of unique times these medication names showed up is 279.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980&t=97)** So those are the unique medication names. Let's repeat the same, but this time for the medication class. So for the medication class, non-steroidal anti-inflammatory appeared about 82,000 times and mood stabilizers appeared about 920 times. If we are paying attention to this, the length of the medication class is 87. That means that for the entire data set, even though we have 1 million instances, all of them belong to just about 87 classes of medication. Now let's do some visualization. I will define a variable called top_number. This variable is where we can adjust the top number of whatever we decide to visualize per time. So let's say we want to see the top 20 medication by the number, we can adjust it here. So let's start, what are the top classes? df_pharmacy_sales['Med_class'].value_counts(), and now let's ask it, that in this value count, what are the largest? So we can assess the nlargest, the top number that we defined here, and then the index. So let's see the top classes after this filter. (keyboard clicks) So according to this list, these are the top pharmacological classes in our DataFrame. The most appearing is the non-steroidal anti-inflammatory drugs. The second is the phosphodiesterase type 5 inhibitors. And then other things, we have anticonvulsants,
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980&t=193)** we have beta-blockers, antifungals, corticosteroid, benzodiazepine, low-potency corticosteroid, opioid analgesics, antibiotics, and inhaled corticosteroids. This should give you an idea of what to look for. What if you wanted to see the top 30? (keyboard clicks) Now we have the top 30 in the same list. This is the purpose of the first variable that we defined. So according to this data set, let's attempt to create a DataFrame of only the top 20 medication. (keyboard clicks) So now we are going to create a DataFrame containing only the top 20 medication classes. We are going to save it into a variable called df_top_med_classes, which is a filter from the df_pharmacy_sales data set. df_pharmacy_sales, Med class, then we are going to specify, that means create this filter by the med classes that show in the top classes. So let's see what that DataFrame looks like. So as requested, we now have a new DataFrame that is named df_top_med_classes showing a filter of the part of our DataFrame that belong to the top med classes only. It has about 661,970 rows. So that's big part of our data set. An idea is can we show the quantity sold for the top med classes
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980&t=287)** now that we have a separate DataFrame that shows them? Let's do that. df_top_med_classes, of course to df. Now we are going to group by Med_class, quantity sold, and then the sum of all the quantity sold in this class. So this is the quantity sold for each of the top med classes. Can we sort those values by the quantity sold? Yes, we can. So df_med_classes.sort_values(by-'Quantity Sold').
>
> **[5:26](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-1?u=76281980&t=326)** Okay, so this does not work. Let's investigate. What type of data is this df_top_med_classes? Okay, so this is a series and we will like it to be a DataFrame. What if we rerun this code, reset this index right from the beginning, (keyboard clicks) immediately after the group by. Okay, if we do it this way, immediately after the group by, we did it together, it came back as a DataFrame. Let's see the type of data this is. So this is a DataFrame, now we should be able to sort values in a DataFrame. Okay, so now we were perfectly able to sort the values and now the quantity of the top classes is now sequential from the lowest to the highest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** df_pharmacy_sales (4), df_top_med_classes (4), demo_pharmacy_sales (1), read_csv (1), top_number (1)
> **Definitions:** is a  (5), means that (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Medication class analysis: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-2?u=76281980&t=0)** - [Instructor] Now let's visualize the top quantity sold as an horizontal bar chart. We are going to use matplotlib for that, so plt.barh. If we want an horizontal bar chart rather than just bar, we put barh and then df. Then we assign this to df, top_med_classes since we like to see this. So df, top_med_classes, the Med_class, the Quantity Sold. The title is, let's make it a string format, top_number in a place order, and then Medication Classes by Quantity Sold. The X axis label is Quantity Sold. The Y label, Medication Class, and then plt.show. Okay, so on line one, we have a syntax error. Let me fix that. Okay, so this is what our chat looks like. This is easier to present. You can show in this particular dataset even though it has 1 million rows, these are the top classes of medication that have been dispensed in that particular hypothetical pharmacy. And this is the quantity sold in millions, of course. To have a better appreciation of the medication classes, we can visualize the string using [[Microsoft Word|word]] cloud. So let's create the word cloud of the medication classes.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-2?u=76281980&t=98)** So the med class that we have is df_pharmacy_sales, of course, Med_class. We assess the string value because we want it as a string and then specify a separator. So worldcloud, let's specify a size, width of like 800, height, 400. And then we can say, "Okay, generate this." Generate med_classes that we have defined in the first line. Let's display our word cloud. We have created the word cloud object here. So let's put it in the figure so that it's tidy. The figure size is 14 by 7 and then we call it plt.lmshow word cloud and interpolation. There are different types of interpolation, but here, we are using bilinear, and then, plt.show. Okay, so it says in line two, "med_classes does not exist." Let's adjust this to med_classes. Okay, now we have a big word cloud and it aligns with what we were thinking, what we saw in the initial analysis. For example, I can see nonsteroidal, which is popular. But then there are many other classes that were not part of the top 20 that are showing in the word cloud. So if we were looking at this word cloud without seeing the dataset,
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-2?u=76281980&t=190)** despite the fact that it has about 1 million representation in 87 unique classes. So these are the top classes. We can see corticosteroid, it's a popular drop class anyway. We can see acne treatment and analgesic opioid. We can see the antifungal corticosteroid. And you should know that the bigger this is, the bigger the representation in the dataset. So this is pretty useful just to have a top overview when you're analyzing data like this. Now let's repeat this word cloud, but this time around for the medication names. Let's copy the same code and change this to med_names, med name. We can make the figure smaller. So let's make these about five, and let's see. Okay, so now we have a word cloud of the medication names. If you're paying attention, you will see something pretty interesting there. You will see quite the number of repetition of the dosage form, like milligram, milliliter, milligram here, microgram, the capsule, milligram. In practice, you can do away with these because these are very common and they're probably going to show up a lot in your dataset. But then there are many other things that are actual medication name showing. This is clindamycin, this is tretinoin, this is vardenafil, finasteride, benzoyl peroxide, salmeterol inhaler, Cialis tablet.
>
> **[4:47](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-class-analysis-part-2?u=76281980&t=287)** Just many medications there. What can we do to improve this? We can use an approach when analyzing text data. Typically, they are usually stop words that you don't want to be part of your data. What if we treat this medication type? What if we treat them as stop words? And that will be an interesting practice for you. So the question for you, what you should find out? How can I remove the common part of the data sets, like milligram, tablets? And the fastest answer to that is treat them like stop word. So that would be a great exercise for you. Create the word cloud of the medication names provided in this work, but then remove all the common words, like milligram, tablet, microgram, capsule, milligram, injection. That would be a fun exercise to try out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12)
> **Code Identifiers:** med_classes (3), top_med_classes (2), top_number (1), df_pharmacy_sales (1), med_names (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Medication demand forecast using Prophet: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980&t=0)** - [Instructor] Demand [[Forecasting]] is an important part of medication supply chain. The key goals are to prevent stock out of life-saving medications and optimize inventory to prevent wastage. In many systems, there is a method to it. In this exercise, we will leverage Prophet, a [[Python (Programming Language)|Python]] library for forecasting to predict the medication demand based on previous sales pattern. First, we upload the data set. The demo_pharmacy_sales_data is provided in the exercise files. And then, we import the necessary libraries, like [[Pandas (Software)|Pandas]], Matplotlib, Prophet, and then from prophet import Prophet. We can now go ahead and load our data set into a variable called df_pharmacy_sales, pd.read_csv, and then the file path. So this is the data set, it has five columns showing the date sold, the medication name, the pharmacological class of the medication, the quantity sold, and the price sold. For this exercise, we only need to use the date sold and the quantity sold data. So let's filter the DataFrame to show just the particular medication class. This time around, we will use Anxiolytic class, df_pharmacy_sales, df_pharmacy_sales['Med Class'], and we filter that by every string
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980&t=101)** that contains Anxiolytic. We want the date sold and the quantity sold. (keyboard clicks) So now we have a filter showing in every place of the dates sold and the quantity sold for Anxiolytics. If you're paying attention to the indexes, you will see that they are the original indexes from the main DataFrame. We are going to save this into a variable name called df_prophet, and then we will re-index it so that the indexes are sequential. So df_prophet, df_prophet.reset_index(). (keyboard clicks) When we take a look now we will see a new form of indexing and we can see that this is now sequential. For this task, we are going to rename our columns. So we are going to rename the dates sold into ds and the quantity sold into y. df_prophet, df_prophet, rename columns. Then we create the dictionary, a dictionary of Date Sold, we map that to ds. Quantity sold, we map that to y. (keyboard clicks) Now we have successfully changed our column names. For the Date Sold, let's check the type of data that we have right now. Even though we can see that this is a date, it's important that we confirm the data type.
>
> **[3:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980&t=197)** df_prophet, ds in the first. As we can see, the current data type is a string. What we are going to do is to use the Pandas' datetime to change this to a date format. So df_prophet['ds'], pd.to_datetime. Let's recheck the data type. Now the data type has changed to the datetime format, which is useful for the modeling we are about to do. So now let's create the variable named Prophet containing the Prophet object. And then we fit the model to the df_prophet DataFrame. Now let's create the variable called future and then ask the model to make_future_dataframe over a period of 365 days, which is one year. The next step is to create the variable called forecast containing the model.predict the future. Now we create a figure from this prediction. fig equal model.plot(forecast), and then we do a plt.show. So this is what the forecast looks like over the year, and according to this trend, the quantity of a year
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980&t=291)** is going to be steady, and it's around 50. Now let's plot individual component. fig equal model.plot_component(forecast), plt.
>
> **[5:11](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-1?u=76281980&t=311)** So this is the individual breakdown. First by year, based on this data, there was some form of increase between 2019 to 2021. But based on this data, there seemed to be a decline in the data pattern. But the peak of the use of Anxiolytic as a medication class was 2022, according to this demo data set. And this is what the days of the week look like. People seem to have filled their prescription for Anxiolytic highest on Mondays, and then on Fridays. The lowest days for filling prescription for Anxiolytic in this particular demo set are Thursdays and Saturdays. And this is what the patterns look like by year, rather per month, these are the lowest month. And the number of times the quantity sold of Anxiolytic based on this demo data set seem to have been highest around October. We have analyzed the preferred forecast for Anxiolytic in our data set, to see others we can impute them individually. In the next video, we will create the function to automate this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (2), [[Pandas (Software)|Pandas]] (2), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** df_prophet (8), df_pharmacy_sales (3), demo_pharmacy_sales_data (1), read_csv (1), reset_index (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Medication demand forecast using Prophet: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980&t=0)** - [Instructor] In the previous video, we began Medication Demand Forecast for individual medication class name. To prevent repetition, we would like to create a function that takes a data frame name, medication class or medication name, and returns the forecast. So we start by defining a function called medication_quantity_forecaster. It takes the name of a dataframe, medication class or medication name. The first thing the function is going to do is to filter the dataframe based on either the medication class name or the medication name itself. If med_class df_filtered df df med_class.string.contains
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980&t=53)** whatever med_class was specified, elif if it's a med_name. The filtered dataframe is going to be med_name and whatever med_name was specified. If none of this is fulfilled, it should raise a ValueError that says, specify either med_name or med_class for filtering. The next thing is to pre-process the filtered dataframe, df_filtered df_filtered, we select the columns that matter to us, which are Date Sold and Quantity Sold, and then we resets the index. The next step is to rename the columns just like we did in the previous video to df_filtered.rename columns. We take the dictionary of Date Sold and replaced it with ds and Quantity Sold replaced with y. The next thing is to format the ds column, which is the date column into a datetime format. This way the date is no longer a string, by datetime format, which is what we need pd.to_datetime df_filtered ds.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980&t=137)** We can also start put that in using Prophet. We first create the variable named model and now Prophet. We initialize the model and then we fit the model on our dataframe. The model already knows to look out for the ds and the y columns. And then, we create a variable called future model.make_future_dataframe periods 365,
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980&t=167)** forecast model.predict future. The next thing is to plot the images of the forecast. The first one is figure1 which is model.plot forecast. A good title for this will be plt string formatting Medication Quantity Forecast. And then we have a place order for med_class or med_name whichever was specified. On the X axis, we have the Date, and on the Y axis, we have Quantity Sold, plt.show. The next code block is code to plot the second figure, figure2 model.plot_components forecast, and then plt.show. Now, we will return both figure1 and figure2. This is a function that takes either a medication name or a medication class and apply Prophets to it. So the next step is to test if this function works well. So medication_quantity_forecaster. The name of a dataframe that we started with is pharmacy, df_pharmacy_sales, and let's specify a med_class. Let's use Anxiolytic, like, we used in the previous video.
>
> **[4:27](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/medication-demand-forecast-using-prophet-part-2?u=76281980&t=267)** Okay, so our function works well. We have the Medication Quantity Forecast for Anxiolytic, and we did not need to do this one by one. And then, we have the forecast per year, per day of the week, and also per month. So we have successfully created a function, so we don't need to rewrite the code every time we want to do this Prophet [[Forecasting]] for any data in our dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1)
> **Code Identifiers:** med_class (6), df_filtered (5), med_name (5), medication_quantity_forecaster (2), to_datetime (1)
> **Cross-References:** previous video (3)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Patient Experience Analytics Using Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore laboratory patient experience demo dataset with Plotly](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=0)** - [Instructor] In some health systems, patient experience is documented through surveys. In this exercise, we will analyze the patient experience data from an hypothetical laboratory. To get started, upload the demo_patient_experience_data provided in the exercise files, and then import [[Pandas (Software)|Pandas]] and Plotly. (keyboard clicks) Now load the data into a variable called df_lab. pd.read_csv. (keyboard clicks) So this is the data set. We have a column called Entry Code, Feedback Date, Patient Age, Staff Rating, Speed Rating, Wait Time, Test Type, and then their review. Sometimes there's an unwanted column like this Unnamed. We can drop it using the drop method on the DataFrame in specifying the axis. df_lab - df_lab.drop column.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=92)** And then we specify the axis as one. So diagnose that it's a column. Now the unwanted column is no longer there. Let's look at all the information about the DataFrame. df_lab.info. So this data has 20,000 reviews from different patients and none of them is empty. Now let's visualize the available test types using the Plotly bar function, px.bar(df_lab,x-"Test Type")
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=142)** Specify the column of interest name, which is Test Type. Title is Test Type Distribution. (keyboard clicks) And then we like the color to also be by the Test Type. (keyboard clicks) Okay, so this is what the test type distribution is, and these are really nice plots. So the unique test type that we have, we have urine test, biopsy, CT scan, X-ray, MRI, blood test, ultrasound, and these are the accounts in the dataset. And then we have the fancy legends. We can plot box plots with Plotly. Let's apply it to the staff speed ratings data. fig - px.box, df_lab, which is the name of the DataFrame,
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=211)** our x this time is the staff rating. This is the rating that each review gave the staff that attended to them. This is the rating given, and then the speed rating. This is the speed of service, was it fast based on the patient perception? Title is Staff versus Speed Ratings.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=246)** And then we have fig.show. So these are box plots for the Staff and Speed Rating. This is an hypothetical data set and the data comes from a uniform distribution. So of course the median is three, and then two is the first interquartile range. The minimum is one, and then the maximum is five. You can toggle on each of those value to know exactly what this is. Value and plots are similar to box plot, so you can also plot that in Plotly. So let's make a volume plot for the wait time. (keyboard clicks) It's in minutes. And then the title is Wait Time Distribution.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-laboratory-patient-experience-demo-dataset-with-plotly?u=76281980&t=314)** Okay, so we have a value error. I think this has to do with the spacing here. So let's try this again. Okay, so this is volume plot for the wait time. The medium wait time is 93 minutes. The lowest wait time is five minutes. The maximum wait time is 194 minutes. There is an option to view a box in the volume. So let's copy this. And you specify that box should be true. So in the volume it has the box too. You can also say that all the points should show. (keyboard clicks) This is points. So this is a visualization of all the wait time if you want that in your visualization. So we have explored what the patient experience data is, and we have tried different techniques with Plotly, a data visualization library in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** df_lab (6), demo_patient_experience_data (1), read_csv (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** mri (1)
> **UI Navigation:** toggle (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)

#### [Sentiment analysis of patient experience reviews using TextBlob](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=0)** - [Instructor] Sentiment analysis allows us to gauge the intensity in text data. We will be using TextBlob, a [[Python (Programming Language)|Python]] library to analyze if text reviews in our laboratory, patient experience them with dataset is positive, negative, or neutral. This type of information can be used to study patterns and improve on the quality of service. First, upload the provided demo patient experience dataset provided with the exercise files. And then input [[Pandas (Software)|pandas]], matplotlib, and textblob.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=58)** Now, go ahead and load the dataset into a variable called df_experience, pd.read_csv.
>
> **[1:16](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=76)** This is what our entire data frame looks like. Now, let's see the first review. So this is the first review in our dataset. It says, "I couldn't have asked for better service "from the staff. "It was top-notch. I had a fantastic experience. "Everything went smoothly and quickly. "The staff's expertise and dedication "made my visit truly exceptional. "The staff was outstanding. "I couldn't be happier with their service. "The staff was outstanding. "I couldn't be happier here with their service. "I couldn't have asked for better service from the staff. "It was top notch." Okay, this is one happy customer. When we apply the TextBlob method, TextBlob,
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=131)** there isn't a big change, but if you pay attention, this is now a TextBlob object. But now that it's a TextBlob object, we can now apply the sentiment method to it.
>
> **[2:29](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=149)** So now it has a polarity of 0.58 and subjectivity score of 0.765. Polarity is the emotional tone of a message, and it ranges from a negative value of minus one to one, as the most emotional tone. And then we have subjectivity. If something is factual, it's zero. If it's opinionated, it's one. So, according to TextBlob, this sentiment is positive, this is 0.58. So now that we know how this works, let's create a column called df_experience['Polarity'].
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=199)** We're going to apply to the entire column over the review. So let's do df_experience['Review'] in square brackets, .apply(lambda x : TextBlob(x).polarity).
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=226)** If this goes well, when the data frame shows, there's going to be an extra column that has the polarity score for each of the reviews in the data frame. Yes, now we have a polarity column for each of the reviews. We have the negative, we have the positive, we have the neutral. Let's do the same, but this time for subjectivity. Let me copy this code.
>
> **[4:26](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=266)** If this is your first time using the Lambda function, this is a place holder, and the simplest way to explain this is that pick a value in the role of value x and apply TextBlob to it. If this goes well, we should have an extra column that carries the subjectivity score for the sentiment. We have that now. We have two new columns, the polarity column and subjectivity column based on the sentiment of the review. Now that we have the polarity score, we can assign sentiment to each value, df_experience. So we are creating another column that will carry the sentiment and the df_experience['Polarity'].apply lambda X :.
>
> **[5:29](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=329)** This function is going to assign "Positive" if x > 0.
>
> **[5:38](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=338)** So for everywhere that the polarity is greater than zero, "Neutral" if x = 0.
>
> **[5:52](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=352)** And every other value should be negative. So let's see what that looks like in our data frame. Okay, so now we have an extra column that is the sentiment of the review. This is negative, negative, okay. To have a broad overview of how the patients feel about their experience, let's count the sentiment. Let's put it in a variable called sentiment_counts, which is a df_experience['Sentiment'], and let's use value counts for that.
>
> **[6:44](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=404)** Okay, so out of all the values we have, we have 20,000 reviews. 12,740 are positive, 7,242 are negative sentiments, and then we have 18 neutral ones. Let's visualize too, to give us a better context. .plot, the kind of chart that will be a bar chart.
>
> **[7:13](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=433)** plt.title('Sentiment Analysis'). On the xlabel("Sentiment").
>
> **[7:29](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=449)** On the ylabel, we have ("Count").
>
> **[7:38](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/sentiment-analysis-of-patient-experience-reviews-using-textblob?u=76281980&t=458)** Okay, there we have our bar chart showing the sentiment and the count. Think about how you can analyze this type of data in your work. There are only 20,000 rows here, but this can be applied to much bigger data set. And it's difficult for one person or a group of people to read each of these reviews one by one, but you can definitely apply techniques like this to have a big overview of what customers, of what patients they are saying about your services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** df_experience (6), read_csv (1), sentiment_counts (1)
> **Versions:** 0.58 (2), 0.765 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 5. Public Health Facilities GeoSpatial Analysis Using Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the public health facilities geolocation demo dataset using GeoPandas: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=0)** - [Instructor] Geo data is an interesting type of data that says a lot about the specific location of areas of interest. In this exercise, we will explore the geolocation data from an hypothetical group of [[Public Health]] facilities. I should mention this is only a demo dataset and all the locations do not exist. First, we upload the Demo Health Facilities Geo Data,
>
> **[0:34](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=34)** and then we input the necessary libraries, like [[Pandas (Software)|pandas]], matplotlib,
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=46)** and geopandas. We then set the dataset into variable code df_geo, pd.read_csv.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=69)** In the data frame, we have 767 rows. We have a column for facility type, latitude, and longitude. And at the top level, we can see we have hospital and pharmacy. Let's have a better view of the facility type by doing the value count, df_geo['Facility Type'].value_counts.
>
> **[1:42](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=102)** So in this dataset we have 627 pharmacies, 118 primary care centers, 12 specialized healthcare center, and 10 hospitals. Now, let's visualize this using the bar chart. We can copy the original code and then plot.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=131)** So this is what the visualization of the data looks like. You can go ahead and improve this visualization. For example, you can put it in the figure figsize, maybe a 10 by four. A title, a title will be good,
>
> **[2:44](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=164)** Facility Type, maybe Public Health Facility Type
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=174)** and plt. If we change this to eight, maybe the batch can look better. We can also label the x axis, plt.xlabel("Facility Type").
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=202)** And on the y axis, we have the count label. Let's reposition the labels. We can do that by plt.xticks(rotation)
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=225)** at the 45 degree angle. Okay, now we have a better bar chart, and this looks better. Now we can see all the facility type names. With GeoPandas, we can derive the geometry points for each data instance, so gdf - gdp.GeoDataFrame (df_geo.geometry.gdp.point_from_xy)
>
> **[4:27](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=267)** We now specify the columns, the longitude and the latitude column, df_geo.Longitude, df_geo.Latitude.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=289)** Okay, now we have an extra column in the GDF data frame that has the geometry of both the longitude and the latitude. So it's like creating the point data from the longitude and latitude. Okay, so let's plot, gdf.plot.
>
> **[5:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=317)** So this is a basic visualization of all the geometry points that we have. We can improve this visualization. For example, we can do gdf.plot(markersize).
>
> **[5:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=336)** We'll make that 10. We'll retain color blue, but that means you can simply choose another color if you prefer them, and alpha to control the opacity to 0.5.
>
> **[5:57](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=357)** plt.xlabel, that'll be the longitude.
>
> **[6:10](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=370)** plt.ylabel, that will be the latitude.
>
> **[6:19](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=379)** Let's give it a title, plt.title('Health Facility Type')
>
> **[6:33](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-1?u=76281980&t=393)** And now, plt.show. This in visualization that we have up here, we have improved on it to make it fancier. So this is what the, if you pay attention, this looks like tiny round dots of all what the health facilities that we have. This is what they look like. This is not the map, but this is just like a point map, maybe a scatter plot of all the location. And from here, you can see some of them are close to each other, even though this is not labeled for the exact health facility type, but this is just an overview if you're plotting the geometry points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Public Health]] (2), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** df_geo (5), read_csv (1), value_counts (1), point_from_xy (1)
> **Analogies:** for example (2), it's like (1), just like (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** gdf (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### [Explore the public health facilities geolocation demo dataset using GeoPandas: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=0)** - [Instructor] In the last video, we began visualizing geopoints. Now we will discuss buffers. Buffers lets you create a sort of bubble between geopoints for better delineation. We will create the variable called buffers on the copy of the GDF DataFrame. So rather than put it on the main DataFrame itself, we will copy, gdf.copy. (keyboard clicks) So we will now create a column called geometry and specify that gdf.buffer(0.10).
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=48)** So this means that the buffer that should be created around the geometry point should have like a bubble of 0.1. Now let's visualize what the buffers look like, so buffers.plot. So that means the geometry in the buffers, they're going to be bigger than the main points, even if we can't see it now. Now let's emphasize the zone. Choose a color, define an edge color and an alpha value. So buffers.plot(color='blue').
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=91)** Remember, you can just choose another color. Edgecolor, so that it's well delineated. And then alpha to control the opacity or the transparency, 0.8. Okay, so this is what the points look like. And we can see that the buffer zones are thicker around this point. To get more into this, let's visualize the original geopoints as scatterplots, and then the one showing the buffers around them. We have created a buffer around our original point. So gdf.plot('color='blue'),
>
> **[2:26](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=146)** markersize 10, (keyboard clicks) label Geopoints. And then the buffers.plot, edgecolor red, linewidth 2, label Buffers. And then alpha 0.8. So plt.title("Geopoints and Buffers"). You can come up with a better name. Maybe you can do "Geopoints and Buffers "for Health Facilities," that will be more explanatory. Okay, so first there's a plot of the original DataFrame, and then the buffers down here. But we want to visualize these together. That means that the point here should be around the corresponding point here. Let's try another approach. Let's use the figure in axis approach so that we can specify that this should be on the same visualization plot.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=241)** So plt.subplots, let's choose a fig size of about 10 x 8. 10 x 8 means a breadth of 10 in an height of 8. That's pretty tall. And then gdf.plot(ax=ax), that's an axis. Color blue again, markersize 4, label Geopoints. And then buffers.plot, ax=ax,
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=289)** edgecolor, let's make it red, linewidth 1 and label is Buffer. (keyboard clicks)
>
> **[5:12](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/explore-the-public-health-facilities-geolocation-demo-dataset-using-geopandas-part-2?u=76281980&t=312)** Okay, so now we have a visualization of the geopoints and buffers, and that means in the middle, that's the real geopoints. And then this red line is the buffer zone that has been created around the point. And something to know about these buffers is that their measurement is exactly the same for all the points represented in this scatterplot. Okay, we have come to the end of this chapter. There's an error message for the plt.legend. Let's see, if we remove this does it take care of that? Yes, it does.

> [!info]- Semantic Content
>
> **Versions:** 0.8 (2), 0.10 (1), 0.1 (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Env Vars:** gdf (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Interactive map for public health facilities geolocation demo dataset using folium: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=0)** - [Instructor] Maps are interesting. In this exercise, I will show you how to make interactive maps based on geo data in [[Python (Programming Language)|Python]] using Folium. Note that the provided data is only a demo data for practice only. They do not exist. Let's begin by uploading our dataset. The demo health facility geo data is provided for you in the exercise files. And then let's import [[Pandas (Software)|Pandas]] and Folium Python libraries. Import Pandas, as pd import Folium. We will now go ahead and load our data into a dataframe called df_geo
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=56)** - pd.read_csv.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=65)** So this is what our data set looks like. It shows the longitude and the latitude of facility types. Let's check for the number of unique facilities in the dataframe. df_geo facility type nunique. So we have four unique facility types in this dataframe to see what they actually look like. So in this data frame for the [[Public Health]] facility types, we have hospital, primary care center, specialized healthcare center, and pharmacy. Now we are going to visualize this data on a map layout. Let's get started. We create a variable named M, which has Folium.Map location
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=128)** which is a list of df_geo Latitude.iloc
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=138)** This is the first point on the map. And then df_geo longitude. Also the first item for index, row in df_geo.iterrows Folium.Marker square bracket row attitude, row longitude. We then have a popup, which is a row facility type .add to m. So we have successfully added all the points in the dataset to this map interface. And this is what they look like on the map. This is a pharmacy. This is another pharmacy. This is a primary care center, another pharmacy,
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=232)** primary care center again. So we have successfully created the map interface and we have added all the rules in the dataframe as individual points on the map. To create points with different colors for each facility type, first, let's create the facility color mapping variable, which contains the dictionary of facility type and the color that we would like for them. Facility color mapping dictionary, hospital, red. Primary care center, blue. Specialized healthcare center, green, and pharmacy, purple. So now let's create the Folium map and go ahead to add markers for each facility type. For index row in df_geo.iterrows facility type, row facility type if facility type
>
> **[5:28](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=328)** in facility color mapping color equal facility color mapping access the facility type, else color is gray. So now Folium.Marker location is row latitude, row longitude, popup row the facility type. And then we will specify values for the icon. Folium.Icon color. So let's add all of this to the base map, which is M.
>
> **[6:40](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-1?u=76281980&t=400)** Let's visualize this now. So this is the same map that we had before, but this time around we have different pop-ups for different facility types. And this is more aesthetically pleasing and easier to observe. For example, the green color is the specialized healthcare center, the blue one is a primary care center, the purple are the pharmacies. So we have successfully created a map and we have added our own geo points to it and we have learned how to use different colors for different facilitated types using Folium.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (2), [[Public Health]] (1)
> **Code Identifiers:** df_geo (6), read_csv (1)
> **Definitions:** is a  (5)
> **CLI Commands:** python (2), make (1)
> **Speakers:** - [instructor] (1), - pd (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [Interactive map for public health facilities geolocation demo dataset using folium: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=0)** - [Instructor] In the last video, we learned how to create maps with Folium, add geo points to them, and define different colors for each type of facility on the map. Now, we're going to learn how to filter the map view by selected facilities. This means you can visualize specific facility types rather than visualize all. First, let's define m, folium.Map, location, df_geo. Latitude, iloc, the first index, df_geo, longitude, .iloc, the first index too.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=51)** Here we're going to specify the facilities that we would like to see. So facility_types_to_visualize. This time around, let's view only the Hospitals and the Pharmacy. The next thing we are going to do is to filter the DataFrame. So filtered DataFrame, filtered_df, df_geo, square bracket, df_geo, Facility Type, isin,
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=96)** facility_type_to_visualize. Okay, so now let's write the code for this, for index, row in filtered DataFrame, which is filtered_df.iterrows. The function of iterrows is to iterate over each of the rows in the DataFrame. facility_type. We have previously defined the function for the facility color mapping. So we are going to use that here, facility_color_mapping.get, facility_type.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=150)** And then just use gray if the color is not in the list. folium.marker. This is where we add all the markers for all the locations in the DataFrame. This time around only the filtered DataFrame, row, Latitude, row, Longitude,
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=178)** popup, row, Facility Type, icon, folium.icon, color, color,
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-2?u=76281980&t=195)** and then add all this to the base map, which is m. So let's display the map. Okay, so now we have this map. And just like we specified, it has only pharmacies and hospital. We can adjust this. Let's say we want to see only the hospitals on the map. We can simply clear out the pharmacy, and run the code. So now we have a view of only the hospitals. A way to practice this, look out for the other facility types, and try to view them either alone or in combination.

> [!info]- Semantic Content
>
> **Code Identifiers:** df_geo (4), filtered_df (2), facility_type (2), facility_types_to_visualize (1), facility_type_to_visualize (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Interactive map for public health facilities geolocation demo dataset using folium: Part 3](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=0)** - [Instructor] In the last two videos, we began creating interactive map component for [[Public Health]] facilities with the demo geolocation dataset. We will finalize it here by creating heat maps and marker clusters. Heat maps are used to observe the density, pattern, and trends of locations on the map. To get started, from folium.plugins import HeatMap.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=36)** And now let's create the base map, m, equal folium.Map, location, list of latitude from df_geo,
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=56)** iloc[0], index location, 0, and df, longitude. We go ahead and create the variable called heat_data, containing a list of a row, latitude,
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=83)** row, longitude, for index, row in df_geo.iterrows,
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=99)** iterrows helps to iterate over each row in a [[Pandas (Software)|Pandas]] DataFrame. And then we create the HeatMap object that takes heat_data and add it to the base map, which is m.
>
> **[2:06](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=126)** We now have our heat map. To interpret the heat map, areas with higher density appear in warmer colors like red and orange as we have here. While areas with lower density appear in cooler colors like blue and green. If you would like to save this as an [[HTML]] file, you can do m.save, whatever name you decide to call it. Let's call it facility_heatmap.html.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=167)** You can find the saved file on the left hand corner, and then you can download to your computer. Now to show clusters of interest without clutter, let's create marker clusters, first, from folio.plugins import MarkerCluster,
>
> **[3:17](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=197)** and then create the base map. We can copy this.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=210)** Now, we'll save a MarkerCluster object into a variable called marker_cluster.
>
> **[3:42](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=222)** Now it's time to go ahead to add markers to our cluster. for index, row in df_geo.iterrows,
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=235)** iterrows helps you to iterate over a Pandas DataFrame like we have here. It'll look through each row for you. marker equal folium.Marker.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=253)** Then this takes a list of Latitude and Longitude.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=264)** And then for the popup, we have a Facility Type. marker.add_to(marker_cluster).
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=285)** marker_cluster.add_to(m).
>
> **[4:54](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/interactive-map-for-public-health-facilities-geolocation-demo-dataset-using-folium-part-3?u=76281980&t=294)** Now let's visualize m. Okay, so now we have created clusters for our data type on the map. So these are some of the clusters. And you can click on the cluster to see what is inside, to see the type of facilities that are in that particular cluster. So this is how a cluster map work, and you can use it to improve the visualization, especially when you have a lot of geo points to display.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[HTML]] (2), [[Public Health]] (1)
> **Code Identifiers:** df_geo (3), marker_cluster (3), heat_data (2), add_to (2), facility_heatmap (1)
> **File Paths:** facility_heatmap.html (1)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 6. Healthcare Data Wrangling Using Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Practical data manipulation and wrangling using pandas: Part 1](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=0)** - [Instructor] Unclean data is common, and the confidence to wrangle data efficiently is one of the most important skills as a data analyst. In this exercise, we will improve the quality of a sample data set of medication names in classes using [[Pandas (Software)|pandas]]. First, upload the provided 1000_Generic_Medication_Names data provided in your exercise files. Now, import pandas. Let's attempt to read the data with CSV.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=53)** We have a ParserError, and from the founding we can see that this is a txt file. Let's inspect the data. So this is what the dataset looks like. This is truly medication name and the pharmacologic class they belong to. Let's attempt to load the data again, but this time around, let's specify a separator. So I have included the top separator. Okay. Using read_csv with the top separator, it works well. If you're paying attention to the first line, you will see that the first item on the row has been made the header. We don't want that. So let's fix it. We are going to fix this by specifying that header should be none. Okay, so now we have no header. And the first row can be the actual first row. Now that we know that this works, let's save the data into a data frame. Let's call it df_med.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=147)** Let's look at the first item in the data df_med. The header is 0 and index 0. So it's showing a string. Let's confirm that.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=171)** So this is a string. Let's attempt to split the string by the full stop. So after this split, we can see that this is now a list. Let's attempt to split this by dash. If we split this by dash, we can see that we have a list with two items or when we split it with the full stop, we also have just two items. But it happens that it split first by the number there and then every other item. But this time around when we split by dash, we can see that the number and the medication name are together. Then the pharmacological name is separate. So let's assess the first part of this. We can first confirm this so that you know it's truly a list. So this is a list. Let's access the first part. So the first part is the number there and the acetaminophen and the strength. And then the second part, which is index 1 is the pharmacological name alone. So what if we decided that this is a good technique to split our medication class. So we can do this by doing df_med.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=265)** Create a new column that is called med_class and then we do df_med[0]. That is the name of the column that has the data, we are trying to split .apply. Lambda x, Lambda X is a place order,
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=292)** and then we specify that we split it by dash and that we want the first index, which is the second value in the list. So now if we review the data frame, we have a new column that shows the medication class. On inspection if you look at index 996 let's see what that looks like. Df_med 996. So in this index there are two dashes and that is why somehow we have ended up with this med_class.
>
> **[5:44](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=344)** If we viewed that we have just alpha, that means that in our split we only made provision for when there is a single dash. And now we have ended up with the type of data that has two dashes. That seems to be happening with index 998. Let's look at it. Okay, so the same thing is happening here. There are two dashes. So our split mechanism is not deficient, even though it looks like it was supposed to be efficient, but it's not, it's not working. The same thing is happening at index 999. Where there are two dashes. There is one here and there is one between L and arginine tablet. So now we need to improve the formula to be more inclusive. So let's split this by the full stop.
>
> **[6:50](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=410)** After the split, we can assess the second value, which is on index one. And then we copy this and then split it by a dash. We can assess the first value. So what is an index 0 here? Okay, so this technique is not working. We don't have a good split. Let's try another technique. If it splits, df_med[0], that's the name of the column [998].split. If you split it by the full stop. Okay, this looks like a good split, but let's see. So here what we would like to do is that rather than just say split by the full stop, let's say split by only one of the full stop by the first one. So we specify a maxsplit here. So even if there's more than a full stop I count for just one. So maybe with this formula we can have our medication name column. So let's try that.
>
> **[8:22](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=502)** df_med["Med_name"] df_med and apply lambda x
>
> **[8:39](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-1?u=76281980&t=519)** extra split. The full stop, maxsplit=1. And then after that we assess the first value, rather the first index, which is the second value. And then we split. This is a lot of splitting going on. So let's see, df_med. Okay, so hopefully we have split the medication name well. If you're paying attention at 999 you see just L here. So we have not successfully splitted that, but for every other value, it seemed to have worked well. For Yohimbine, we have Yohimbine 5.4 mg and it did not affect the 5.4 that is in this Yohimbine, which is a good thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2)
> **Code Identifiers:** df_med (8), med_class (2), read_csv (1)
> **Definitions:** is a  (8), is called (1), means that (1), is an  (1)
> **Versions:** 5.4 (2)
> **Env Vars:** csv (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Practical data manipulation and wrangling using pandas: Part 2](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-2?u=76281980&t=0)** - [Instructor] In the previous video, we started cleaning the medication class in named data set. So this seemed like a better path than what we did before. So now let's tackle the Med_class. This time around we are going to create another column called med_class_2, which is going to contain our new formula. So df_med, we are going to have column called combined that we are not going to need, and then med_class_2, which we care about. df_med, we assess the string value because we can only split strings not least. We split it by dash, we specify that only one of the dash, and then we say expand=True. df_med, we should have two new columns, and with a new logic, if we are paying attention, for example 996, which had just Alpha as the med class now has Alpha Blocker, which is what we want. 998, the index here, which had just Alpha as the med class now has Alpha-2 Blocker. And if we're looking at 999, it still has the same problem. This split is not exactly what we want. We want this Arginine tablet to belong here, and they should have just a amino acid supplement. So that exists. So now let's create a new DataFrame. We can call it df_med_2. We want it to have just the Med_name and the Med_class_2 column because that's what we want.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-2?u=76281980&t=96)** So df_med, we want Med_name, we want Med_class_2 because those are the columns that we care about, at least this time. So let's see, df_med_2. Okay, there's an error here. Think it has to do with the square bracket. Yeah, so now we have a new DataFrame that has just the medication name and the med class that has passed our requirement except for row 999. We can rename this. So df_med, we can rename the columns. df_med_2.rename(columns). So we'll provide this a dictionary that wherever you see med_class_2, make a medication class. And then do it in place so that it's the same DataFrame. And let's see. Let me see what df_med_2 is like. Okay, the last row, which is index 999, it still has that problem. It's, on eyeballing is the only part of the data that has this problem. So typically there are many options to do this. So I'm going to say we should drop it. Either you fix it manually or we should drop it. So let me show you how to drop. df_med_2.drop('999'). It's proper to save this new drop because if we don't, this is what will happen.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-2?u=76281980&t=191)** (keyboard clicks) So that's not the fact that we said to drop it because we didn't reassign it to this variable. It did not drop, so it's okay to assign it to the same variable name. df_med_2, df_med_2. So now we have 999 rows. So now that we have a cleaner DataFrame, df_med_2.to_csv, this is how to save it as a CSV file. And then we can save it to a name like Med_name_and_class.csv. And we specify that the index should be false so that it doesn't have an extra unnamed column. When you save data like this, it's good practice to test them. Before you download, you would like to know if they work. So let's read this CSV file to know if it works well, if it's well formatted or it needs to be fixed. So that works well, if you want to work with the data for that you can come here on the left hand panel where the files are and click on Download. Ah, you can save copies of entire DataFrames. For example, you can decide that df_med_3 is going to be the original df_med, and it's going to be a copy of it. So just call copy, and if you do df_med_3 now
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/practical-data-manipulation-and-wrangling-using-pandas-part-2?u=76281980&t=288)** it's going to show the original DataFrame. And you can also drop one third columns to create new ones. So for example, we can decide that df_med_3 is df_med_3.drop, then we specify the columns that we do not want. We don't want this column, column zero, this would be at least. We don't want Med_class, the original one that we defined. We don't want combined, so we specify that too. Okay, so those are the columns that we don't want. So let's see what it looks like now. I'm just showing an alternative method. We have a KeyError. There is nothing that combines, we have a combined, okay, let me find the real name, combined. Oh, this starts with a small letter, not the capital. So let me fix it. (keyboard clicks) Okay, so this is another way to arrive at the values that we actually want in our DataFrame. So in this chapter, we went through a [[Data Wrangling]] process together because the data you will need, the data you will come across, it's probably never going to be clean. So this is just to let you know that these are things that people do, and you know, there's still the question of this last row, we need it in that data set, what's the efficient way to fix this?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Wrangling]] (1)
> **Code Identifiers:** df_med (6), to_csv (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** csv (2)
> **File Paths:** med_name_and_class.csv (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Python to analyze your healthcare data](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/using-python-to-analyze-your-healthcare-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-for-healthcare/using-python-to-analyze-your-healthcare-data?u=76281980&t=0)** - This is the end of the [[Python Data Analysis]] for Healthcare Course. If you made it this far, congratulations. So what next should you do? Implement all the new techniques that you have learned on your own dataset. If you're interested in [[Data Science]] and AI, consider [[Hands-on Data Science and AI for Healthcare]] and [[Advanced AI- NLP Techniques for Clinical Datasets]] on [[LinkedIn]] Learning. You can connect with me on LinkedIn, and feel free to ask your questions in the community Q&A. I'm looking forward to hearing on how you're applying all the skills to improve your career. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[LinkedIn]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** nlp (1)
> **Speakers:** - this (1)


## Instructor

- [[Wuraola Oyewusi]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Healthcare Analytics

## Path Context

### In [[Hands-On Healthcare Analytics]]
← [[Python for Health Sciences and Healthcare]] | **4 of 8** | [[SQL for Healthcare Professionals]] →

### In [[Python for Data Professionals in Healthcare]]
← [[Python for Health Sciences and Healthcare]] | **2 of 5** | [[Hands-on Data Science and AI for Healthcare]] →

## Appears In

- [[Hands-On Healthcare Analytics]]
- [[Python for Data Professionals in Healthcare]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis
- [[Python Functions for Data Science]] — Python (Programming Language), Data Analysis
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)